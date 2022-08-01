function include_header(){
    $.ajax({
        url: 'includes/header.html',
        async: false,
    }).done(function(header_html){
        document.write(header_html);
    });
}