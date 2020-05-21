var startFlag = 0;//0:not playing,1:playing
var colorFlag = 0;//0:pink,1:black
var modeFlag = 0;//0:random,1:select
var color = ['sakura','white'];
var cColor = ['green','black'];
var tColor = ['lightpink','black'];
var tWeight = ['Random','Select'];

var time = 0;
var mid = 0;
var now;

var min_time = 0;
var sec_time = 0;

var count;

var min = $("#min");
var sec = $("#sec");

var start = $("#start");
var stop = $("#stop");

function check(){
    if(!$('button').hasClass(cColor[colorFlag])){
        mid += (new Date() - now)/1000;
        clearInterval(count);
        startFlag = 0;
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
    }else if(startFlag == 0 && modeFlag == 1){
        $(this).toggleClass(cColor[colorFlag]);
        $(this).toggleClass(color[colorFlag]);
    }
});

$('#start').click(function(){
    if(startFlag == 0){
        startFlag = 1;
        $('#start').css('display','none');
        $('#timer').css('display','block');
        now = new Date(); //現在時刻
        count = setInterval(counter, 10);
        
        if(modeFlag == 0){
            for(var i = 0;i < 9;i++){
                var rand = Math.floor(Math.random() * 2);
                if(rand == 1){
                    $('.'+color[colorFlag]).eq(i).addClass(cColor[colorFlag]);
                    $('.'+color[colorFlag]).eq(i).removeClass(color[colorFlag]);
                }
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

$('#changeMode').click(function(){
    modeFlag = Math.abs(modeFlag - 1);
    $('.'+tWeight[modeFlag]).css('font-weight','bold');
    $('.'+tWeight[Math.abs(modeFlag - 1)]).css('font-weight','normal');
});

$('#reset').click(function(){
    $('.container button').removeClass();
    $('.container button').addClass(color[0]);
    $('#changeColor').css('color',tColor[0]);
    $('.'+tWeight[0]).css('font-weight','bold');
    $('.'+tWeight[1]).css('font-weight','normal');
    colorFlag = 0;
    modeFlag = 0;
    startFlag = 0;
    $('#start').css('display','block');
    $('#timer').css('display','none');
    
    mid += (new Date() - now)/1000;
    clearInterval(count);
    mid = 0;
    min.html("0");
    sec.html("00.00");
});

function counter(){

    time = mid + ((new Date() - now)/1000);

    //60秒経過した時の処理
    if(time > 60){
        mid = 0;
        min_time ++;
        now = new Date();
        time = 0;
        sec.html();
    }

    //秒数が10秒より小さかったら01, 02のようにする
    if(time < 10){
        sec.html("0"+time.toFixed(2));
    }else{
        sec.html(time.toFixed(2));
    }
    min.html(min_time);
};
/*
$('.howTow').click(function(){
    $('.text').toggleClass('active');
});*/