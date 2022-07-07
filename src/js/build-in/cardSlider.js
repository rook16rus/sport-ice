export default function cardSlider() {
    jQuery(document).ready(function(){

        function detect_active(){
            // get active
            let get_active = $(".card-slider .card-slider-slide:first-child").data("class");
            $(".card-slider-dots button").removeClass("active");
            $(".card-slider-dots li[data-class="+ get_active +"]").addClass("active");
        }

        $(".card-slider-next").click(function(){
            $(".card-slider .card-slider-slide:first-child").hide().appendTo(".card-slider").fadeIn();
            $.each($('.card-slider-slide'), function (index, slide) {
                $(slide).attr('data-position', index + 1);
            });
            detect_active();

        });

        $(".card-slider-prev").click(function(){
            $(".card-slider .card-slider-slide:last-child").hide().prependTo(".card-slider").fadeIn();
            $.each($('.card-slider-slide'), function (index, slide) {
                $(slide).attr('data-position', index + 1);
            });

            detect_active();
        });

        $(".card-slider-dots button").click(function(){
            $(".card-slider-dots button").removeClass("active");
            $(this).addClass("active");
            let get_slide = $(this).attr('data-class');
            $(".card-slider .card-slider-slide[data-class=" + get_slide + "]").hide().prependTo(".card-slider").fadeIn();
            $.each($('.card-slider-slide'), function (index, slide) {
                $(slide).attr('data-position', index + 1);
            });
        });


        $("body").on("click", ".card-slider .card-slider-slide:not(:first-child)", function(){
            let get_slide = $(this).attr('data-class');
            console.log(get_slide);
            $(".card-slider .card-slider-slide[data-class=" + get_slide + "]").hide().prependTo(".card-slider").fadeIn();
            $.each($('.card-slider-slide'), function (index, slide) {
                $(slide).attr('data-position', index + 1);
            });

            detect_active();
        });
    });
}