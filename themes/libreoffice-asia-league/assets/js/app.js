$(document).ready(function(){
    $(".activities-wrapper").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        stagePadding: 30,
        dots: false,
        nav: true,
        navText: ["<img src='img-icon-left.svg' alt='prev-activity'/>","<img src='img-icon-right.svg' alt='next-activity'/>"],
        navContainer: ".activities-nav",
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 3,
            }
        }
    });
    setTimeout(()=>{
        calculateHeight(".activity")
    }, 3000);
    
});

function calculateHeight(classSelector){
    var height = 0;
    $.each($(classSelector), function(){
        if ($(this).height() > height){
            height = $(this).height();
        };
    });
    $(classSelector).css("height",height+50);
}