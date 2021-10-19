$(document).ready(function(){
    var fadeDur = 250
    var colors = {
        "homeBtn": "#30D5C8",
        "newsBtn": "#30C97D",
        "contactBtn": "#4F30C9",
        "aboutBtn": "#A530C9"
    }

    for(let [key, value] of Object.entries(colors)){
        $("#" + key).hover(function(){
            $(this).stop()
            $(this).animate({color: value}, fadeDur)
        }, function(){
            $(this).stop()
            $(this).animate({color: "#FFFFFF"}, fadeDur)
        })
    }

    // $('.headerItem').each(function() {
    //     $(this).hover(function(){
    //         $(this).animate({color: }, fadeDur)
    //     }, function(){
    //         $(this).animate({color: ""}, fadeDur)
    //     })
    // });
})