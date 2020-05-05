// const hero = new HeroSlider('.swiper-container');   //インスタンス化する際に対象のセレクターの文字列を渡す(this.el = '.swiper-container')
    // hero.start();  //autoplayを呼び出し、開始
    
    // const cb = function (el, inview) {
    //     if(inview) {
    //         const ta = new TweenTextAnimation(el);
    //         ta.animate();
    //     }
    // }

    // const so = new ScrollObserver('.tween-animate-title', cb);

    // const _inviewAnimation = function(el, inview){  // _inviewAnimationをコールバック関数として定義。第一引数にDOM、第二引数にinviewという変数が渡ってくる。
    //     if(inview) {        //もし画面内に入ってきたら
    //         el.classList.add('inview');     //inviewというclassを付与
    //     }else{              //画面外にでると
    //         el.classList.remove('inview');  //inviewを消去
    //     }
    // }

    // const so2 = new ScrollObserver('.cover-slide', this._inviewAnimation);   //.cover-slideにinviewをつけるObserver
                                                                        //  _inviewAnimationというコールバック関数、
                                                                        //'.cover-slide : ScrollObserverの監視対象のセレクター


    // // const header = document.querySelector('.header');   //headerクラスを取得
    // const _navAnimation = function(el, inview){  // _navAnimationをコールバック関数として定義。第一引数にDOM、第二引数にinviewという変数が渡ってくる。
    //     if(inview) {        //もし画面内に入ってきたら
    //         header.classList.remove('triggered');     //triggeredというclassを消去
    //     }else{              //画面外にでると
    //         header.classList.add('triggered');  //triggeredというクラスを付与
    //     }
    // }
                          
    // const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once:false});    //二回目以降のトリガーでも解除しない


    // new MobileMenu();


                        ________________________________



// _scrollInit() {             //プライベートメソッドを用意
//         this._observers.push(   //インスタンス化されたオブジェクトが_observersという配列に格納される
//             new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once:false})    //thisはMainクラスのオブジェクトのインスタンス化された物を指す→bindする必要がある
//         );
//         this._observers.push(
//             new ScrollObserver('.cover-slide', this._inviewAnimation)   //.cover-slideのインスタンス化
//         );
//         new ScrollObserver('.tween-animate-title', this._textAnimation);//_textAnimationメソッドをプライベートメソッドで切り出している
//         new ScrollObserver('.swiper-container', this._toggleSlideAnimation.bind(this), {once:false});//.swiper-containerというhero-slideを囲んでいるクラスを監視対象にする
        
//         }