$(function(){
    //Acomodar texto
    $("#btonLeft").click(function(){
        $(`#text`).css('textAlign', 'left');
    });
    $("#btonMid").click(function(){
        $(`#text`).css('textAlign', 'center');
    });
    $("#btonRight").click(function(){
        $(`#text`).css('textAlign', 'right');
    });
});