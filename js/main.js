window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

var slider;
var sliderFlag = false;
var breakpoint = 768;//768px以下の場合

function include_loading(){
    $.ajax({
        url: '../../includes/loading.html',
        async: false,
    }).done(function(loading_html){
        document.write(loading_html);
    });
}

function include_header(){
    $.ajax({
        url: '../../includes/header.html',
        async: false,
    }).done(function(header_html){
        document.write(header_html);
    });
}

function include_sidebar(){
    $.ajax({
        url: '../../includes/sidebar.html',
        async: false,
    }).done(function(sidebar_html){
        document.write(sidebar_html);
    });
}

function include_footer(){
    $.ajax({
        url: '../../includes/footer.html',
        async: false,
    }).done(function(footer_html){
        document.write(footer_html);
    });
}

function include_commentfield(){
    $.ajax({
        url: '../../includes/commentfield.html',
        async: false,
    }).done(function(comfield_html){
        document.write(comfield_html);
    });
}