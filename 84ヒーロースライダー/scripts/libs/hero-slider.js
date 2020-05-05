class HeroSlider { 
    constructor(el) {
        this.el = el;   //this.elで'swiper-container'を指定
        this.swiper = this._initSwiper();   
    }

    _initSwiper() {     //newのswiperのオプションをnewのインスタンスを返すプライベートメソッドに格納
        return new Swiper(this.el, {   //return句でnewのインスタンスを返す。(this.el = '.swiper-container')
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,       //ホバーしたときにポインタがグラブに変更
            effect: 'coverflow',
            centeredSlides: true,   //スライダーが中央ぞろえ
            slidesPerView: 1,       //画面にスライドを何枚表示するか
            speed: 1000,            //次のスライドにtransitionする間隔
            breakpoints: {          //ウインドウサイズによって表示するスライドの数を変える
                1024: {             //画面が1024px以上になったとき
                    slidesPerView: 2,//スライドを2枚表示
                }
            },
            
          });
    }

                            //startを実行する際にdelay等を変更できるようにoptionsを定義
    start(options = {}) {   //デフォルト値は空のオブジェクト( ={})
        options = Object.assign({   
            delay: 4000,                        //4sごとにスライドが自動で切り替わる
            disableOnInteraction: false         //マウスで操作した後でもautoplayで4sごとにスライドが切り替わる
        }, options);                             //渡されてきたoptionsのオブジェクトをマージ
        this.swiper.params.autoplay = options;  //マージしたものをautoplayに代入
        this.swiper.autoplay.start();    
    }
    stop() {
        this.swiper.autoplay.stop()
    }
}
