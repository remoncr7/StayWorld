document.addEventListener('DOMContentLoaded',function() {
    const main = new Main();    //Mainをインスタンス化→constructor関数が呼ばれる→_scrollInit()を呼び出す→ScrollObserverがインスタンス化→_navAnimationがコールバックとして呼ばれる
    // main.destory(); //スクロール監視が切れる
});  

class Main {
    constructor() { //変数を初期化
        this.header = document.querySelector('.header');   //headerのDOMを取得
        this.sides = document.querySelectorAll('.side');   //sideというクラスが付いているものを取得
        this._observers = [];                              //配列にインスタンス化したScrollObserverのインスタンスを格納
        this._init();
    }

    set observers(val) {            //observersメソッドに渡って来た引数valを
        this._observers.push(val);  //_observersという配列に対してpushで格納
    }

    get observers() {               //値を取得するメソッド
        return this._observers;     //console.logのような値を取得するときに呼ばれる
    }

    _init() {       //init処理をすべて格納
        new MobileMenu();
        this.hero = new HeroSlider('.swiper-container');   //インスタンス化する際に対象のセレクターの文字列を渡す(this.el = '.swiper-container')
        Pace.on('done', this._paceDone.bind(this));        //ロードが完了したタイミング('done')に_paceDoneメソッドをトリガーする　　　　(（ローダーのライブラリのオブジェクトのonメソッド
        // this._scrollInit();                                //_scrollInit()を呼び出す
    }

    _paceDone() {               //画面が更新された後にアニメーション開始させるためのメソッド
        this._scrollInit();     //_scrollInit()を呼びだす
    }


    _inviewAnimation(el, inview){  // _inviewAnimationをコールバック関数として定義。第一引数にDOM、第二引数にinviewという変数が渡ってくる。
        if(inview) {        //もし画面内に入ってきたら
            el.classList.add('inview');     //inviewというclassを付与
        }else{              //画面外にでると
            el.classList.remove('inview');  //inviewを消去
        }
    }
    
    _navAnimation(el, inview) {  // _navAnimationをコールバック関数として定義。第一引数にDOM、第二引数にinviewという変数が渡ってくる。
        if(inview) {        //もし画面内に入ってきたら
            this.header.classList.remove('triggered');     //triggeredというclassを消去
        }else{              //画面外にでると
            this.header.classList.add('triggered');  //thisはMainクラスのオブジェクトのインスタンス化された物を指す
        }
    }

    _sideAnimation(el, inview) {  // 
        if(inview) {        //もし画面内に入ってきたら
            this.sides.forEach(side => side.classList.add('inview'))   //sidesに格納された物をループさせてループ内のコールバック関数でinviewを付与
        }else{              //画面外にでると
            this.sides.forEach(side => side.classList.remove('inview'))  //thisはMainクラスのオブジェクトのインスタンス化された物を指す
        }
    }
    _textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    _toggleSlideAnimation(el, inview) {
        if(inview) {            //もし画面内に入ってきたら
            this.hero.start();  //アニメーション開始
        }else{                  //画面外にでると
            this.hero.stop();   //アニメーション停止
        }
    }

    _destroyObservers() {                   //メソッドを作る
        this.observers.forEach(ob => {      //一つずつobserversに格納された要素が
            ob.destroy();                   //destoryメソッドで削除される
        });
    }

    destory(){                      //destory()メソッドを用意
        this._destroyObservers();   //すべての要素が破壊される
    }


    _scrollInit() {             //プライベートメソッドを用意
        this.observers =  new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once:false}) //valにこの右辺側が格納される(this.obserers→　setを呼ぶことと同義
        this.observers =  new ScrollObserver('.cover-slide', this._inviewAnimation)   
        this.observers = new ScrollObserver('.appear',  this._inviewAnimation); //appearクラスを_inviewAnimationで監視
        this.observers = new ScrollObserver('.tween-animate-title', this._textAnimation , {rootMargin: "-300px 0px"});
        this.observers = new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once:false});
        this.observers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), {once:false, rootMargin: "-300px 0px"});   //ScrollObserverに_sideAnimationというコールバック関数を登録
    }
}
//インスタンス化されたオブジェクトが_observersという配列に格納される
//.cover-slideのインスタンス化 
//_textAnimationメソッドをプライベートメソッドで切り出している
//.swiper-containerというhero-slideを囲んでいるクラスを監視対象にする

//rootMargin: 監視されているコールバック関数が発火するタイミングを制御