// FileName: animateHeader.js
// Responsibility: Handles the effects of the navigation bar.
// Written by: Kris

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
})