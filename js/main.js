window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

var slider;
var sliderFlag = false;
var breakpoint = 768;//768px以下の場合
  
function sliderSet() {
        var windowWidth = window.innerWidth;
        if (windowWidth >= breakpoint && !sliderFlag) {//768px以上は1行でスライダー表示
            slider = $('.slider').bxSlider({
            touchEnabled:false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
			mode: 'vertical',//縦スライド指定
			controls: false,//前後のコントロールを表示させない。
			auto: 'true',//自動的にスライド
			pager: false//ページ送り無効化
		});
            sliderFlag = true;
        }
    }

$(window).on('load resize', function() {
        sliderSet();
});

function include_loading(){
    $.ajax({
        url: '../includes/loading.html',
        async: false,
    }).done(function(loading_html){
        document.write(loading_html);
    });
}

function include_header(){
    $.ajax({
        url: '../includes/header.html',
        async: false,
    }).done(function(header_html){
        document.write(header_html);
    });
}

function include_sidebar(){
    $.ajax({
        url: '../includes/sidebar.html',
        async: false,
    }).done(function(sidebar_html){
        document.write(sidebar_html);
    });
}

function include_footer(){
    $.ajax({
        url: '../includes/footer.html',
        async: false,
    }).done(function(footer_html){
        document.write(footer_html);
    });
}