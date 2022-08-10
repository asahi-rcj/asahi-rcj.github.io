var headerH = $("#header").outerHeight(true);//headerの高さを取得    

//スクロール途中からヘッダーの高さを変化させるための設定を関数でまとめる
function FixedAnime() {
	//ヘッダーの高さを取得
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//ヘッダーの高さを超えたら
        $('#header').addClass('HeightMin');//#headerについているHeightMinというクラス名を付与
	}else{
        $('#header').removeClass('HeightMin');//HeightMinというクラス名を除去
	}    
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});
