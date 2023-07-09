$(document).ready(function() {
    // Window scrolling event
    $(window).scroll(function(){
        var st=$(this).scrollTop(),
            wb = st + $(this).height();
        var abt_sec = $('.about-section').offset().top + 100;
        if(st > 500) {
            $('.social-links').addClass('invert');
        }
        if(st < 500){
            $('.social-links').removeClass('invert');

        }
        if(wb > abt_sec){
            $('.about-section .heading').addClass('animate');
        }else if(wb < abt_sec){
            $('.about-section .heading').removeClass('animate');

        }
    })

    var changeBg = (interval) => {
        index = 1;
        setInterval(() => {
            var bg = $('.main-page .bg');
            for (var i = 0; i < bg.length; i++) {
                if(bg[i].classList.contains('active')) 
                {
                    bg[i].classList.remove('active');
                }
            }

            $('.main-page .bg:nth-child('+ index +')').addClass('active');  
            
            index++;
            if(index >= 5){
                index = 1;
            }
        },interval)
    };
    
    if($(this).width() > 768){
        changeBg(1500);
    }else{
        changeBg(2000);
    }

    var changeColor = () => {
        setInterval(() => {
            $('.image img').toggleClass('changed');
        },1000)
    }
    changeColor();

    var changetxt = (direction) => {
        var words = $('.word .face').toArray(),
            bg = $('.product-section .bg').toArray(),
            dir = direction;
        var index = (direction == 'forward') ? 0 : words.length - 1;
        // console.log("Start -------- \n index:"+index,direction);
        const a = setInterval(() => {
            if(dir == 'forward'){
                // console.log(words[index].innerText + " : " + index + " : "+direction);
                words[index].classList.add('hide');
                bg[index].classList.add('active');
                index++;
                if(index >= words.length - 1){
                    dir = 'backward';
                    // changetxt('backward');
                }
            } else {
                // console.log(words[index].innerText + " : " + index + " : "+direction)
                words[index].classList.remove('hide');
                bg[index].classList.remove('active');
                index--;
                if(index == 0) {
                    dir = 'forward';
                    // clearInterval(a);
                }
            }
        },1000)
    }
    changetxt('forward');

    var changeImg = () => {
        var slides = $('.image-slide').toArray(),
            slide_container = $('.images')[0],
            s = 0;
        var b = setInterval(() => {
            slide_container.scrollLeft += slides[s].offsetWidth;
            if(s > 2) {
                clearInterval(b);
            }
        },1000)
    }
    // changeImg();

    var index = 1;
    $('.left-arrow').on('click',() => {
        if( $('.images')[0].scrollLeft > 1){
            index--;
            $('.dot').removeClass('active');
            $('.dot:nth-child('+index+')').addClass('active');
            $('.images')[0].scrollLeft -= $('.image-slide img').width();
       }
    })

    $('.right-arrow').on('click',() => {
        if( $('.images')[0].scrollLeft < $('.images')[0].scrollWidth){
            index++;
            $('.dot').removeClass('active');
            $('.dot:nth-child('+index+')').addClass('active');
            $('.images')[0].scrollLeft += $('.image-slide img').width();
       }
    })
    
    var slides_arr = [];
    var slides = $('.image-slide');
    for (var i = 1; i <= slides.length; i++) {
        slides_arr.push($('.image-slide:nth-child('+i+')'));
    }

    $('.images').scroll(function(){
        if($('.images').scrollTop() > 0){$('.images').scrollTop(0);}
        var scroll_Left = $('.images').offset().left + $('.images').width() / 2;
        for(var i in slides_arr){
            if(scroll_Left > slides_arr[i].offset().left) {
                $('.dot').removeClass('active');
                $('.dot:nth-child('+(Number(i)+1)+')').addClass('active');
            }
        }
    });

    // setTimeout(()=>{
    //         $('.loader .txt span:nth-child(1)').addClass('animate');
    //         setTimeout(()=> {
    //             $('.loader .txt span:nth-child(1)').addClass('animated');
    //             $('.loader .txt span:nth-child(2)').addClass('animate');
    //             setTimeout(()=>{
    //                 $('.loader .txt span:nth-child(2)').addClass('animated');
    //                 $('.loader .txt span:nth-child(3)').addClass('animate');
    //                 setTimeout(()=>{
    //                     $('.loader .txt span:nth-child(3)').addClass('animated');
                        
    //                     $('.loader').addClass('hide');
    //                 },200);
    //             },200)
    //         },200)
    //     },0);

    setTimeout(function(){
        $('.loader').addClass('hide');
    },1500)
        
})