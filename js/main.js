function include_header(){
    $.ajax({
        url: 'includes/header.html',
        async: false,
    }).done(function(header_html){
        document.write(header_html);
    });
}

function include_sidebar(){
    $.ajax({
        url: 'includes/sidebar.html',
        async: false,
    }).done(function(sidebar_html){
        document.write(sidebar_html);
    });
}