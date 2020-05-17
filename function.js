var startFlag = 0;//0:not playing,1:playing
var colorFlag = 0;//0:pink,1:black
var modeFlag = 0;//0:random,1:select
var color = ['sakura','white'];
var cColor = ['green','black'];
var tColor = ['lightpink','black'];

function check(){
    if(!$('button').hasClass(cColor[colorFlag])){
        startFlag = 0;
        alert('クリアです！');
    }
}

$('.container button').click(function(){
    if(startFlag == 1){
        var btnData = $(this).data('btn');
        $(this).toggleClass(cColor[colorFlag]);
        $('#btn-'+(btnData-4)).toggleClass(cColor[colorFlag]);
        $('#btn-'+(btnData+1)).toggleClass(cColor[colorFlag]);
        $('#btn-'+(btnData+4)).toggleClass(cColor[colorFlag]);
        $('#btn-'+(btnData-1)).toggleClass(cColor[colorFlag]);
        $(this).toggleClass(color[colorFlag]);
        $('#btn-'+(btnData-4)).toggleClass(color[colorFlag]);
        $('#btn-'+(btnData+1)).toggleClass(color[colorFlag]);
        $('#btn-'+(btnData+4)).toggleClass(color[colorFlag]);
        $('#btn-'+(btnData-1)).toggleClass(color[colorFlag]);
        check();
    }
});

$('#start').click(function(){
    if(startFlag == 0){
        startFlag = 1;
        for(var i = 0;i < 9;i++){
            var rand = Math.floor(Math.random() * 2);
            if(rand == 1){
                $('.'+color[colorFlag]).eq(i).addClass(cColor[colorFlag]);
                $('.'+color[colorFlag]).eq(i).removeClass(color[colorFlag]);
            }
        }
    }
});

$('#changeColor').click(function(){
    $('.'+color[colorFlag]).addClass(color[Math.abs(colorFlag - 1)]);
    $('.'+color[colorFlag]).removeClass(color[colorFlag]);
    $('.'+cColor[colorFlag]).addClass(cColor[Math.abs(colorFlag - 1)]);
    $('.'+cColor[colorFlag]).removeClass(cColor[colorFlag]);
    colorFlag = Math.abs(colorFlag - 1);
    $(this).css('color',tColor[colorFlag]);
});

$('#reset').click(function(){
    $('.container button').removeClass();
    $('.container button').addClass(color[0]);
    $('#changeColor').css('color',tColor[0]);
    colorFlag = 0;
    modeFlag = 0;
    startFlag = 0;
});