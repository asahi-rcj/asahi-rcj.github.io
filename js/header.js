

//スクロール途中からヘッダーの高さを変化させるための設定を関数でまとめる
function FixedAnime() {
	var pos = $("header").offset().top;
	var headerH = $("header").outerHeight(true);//headerの高さを取得    
	var headerH2 = $("img.logo").outerHeight(true);//headerの高さを取得    
	$(window).scroll(function () {
		if ($(this).scrollTop() > headerH2){//ヘッダーの高さを超えたら
			//$('header').addClass('HeightMin');//#headerについているHeightMinというクラス名を付与
			//$("body").css("padding-top", headerH);
		}else{
			//$('header').removeClass('HeightMin');//HeightMinというクラス名を除去
			//$("body").css("padding-top", 0);
		}    
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
});
