$(function(){

    //메뉴
    $(".main > li").hover(function(){
        $(".sub").stop().fadeIn();
    }, function(){
        $(".sub").stop().fadeOut();
    })

    //이미지 슬라이드

    //gt: eq 0보다 큰 걸 가림
    $(".fade li:gt(0)").hide(0)

    //li를 다 가림
    // $(".fade li").hide();
    //첫 번쨰 li를 보여 주게 함
    // $(".fade li").eq(0).show();

    setInterval(fade, 2000)

    var n=0 // 0 1 2

    function fade(){

        $(".fade li").eq(n).fadeOut();

        if(n == 2){
            n=0;
        } else {
            n++;
        }

        $(".fade li").eq(n).fadeIn();
    }

    // var n=0 // 0 1 2
    // setInterval(function(){

    //     $(".fade li").eq(n).fadeOut();

    //     if(n ==2){
    //         n=0;
    //     } else{
    //         n++;
    //     }

    //     $(".fade li").eq(n).fadeIn();

    // },3000)


    //팝업
    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })



}) //jq