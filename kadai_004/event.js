
    //HTML読込完了時メッセージをコンソール表示する仕掛け
    $(window).on('load',() => {
        console.log('loadイベントが発生しました');
    });
$(function(){    
    //画面スクロールでメッセージをコンソール表示する仕掛け
    $(window).on('scroll',function(){
        console.log('scrollイベントが発生しました');
    });
});