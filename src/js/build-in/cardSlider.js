export default function cardSlider() {
    jQuery(document).ready(function(){

        const sliders = $('.card-slider-container');

        $(sliders).each((index, slider) => {
            function detect_active(){
                // get active
                let get_active = $(slider).find(".card-slider-slide:first-child").data("class");
                $(slider).find(".card-slider-dots button").removeClass("active");
                $(slider).find(".card-slider-dots button[data-class="+ get_active +"]").addClass("active");
            }

            $(slider).find(".card-slider-next").click(function(){
                $(slider).find(".card-slider-slide:first-child").hide().appendTo($(slider).find(".card-slider")).fadeIn();
                $.each($(slider).find(".card-slider-slide"), function (index, slide) {
                    $(slide).attr('data-position', index + 1);
                });
                detect_active();

            });

            $(slider).find(".card-slider-prev").click(function(){
                $(slider).find(".card-slider-slide:last-child").hide().prependTo($(slider).find(".card-slider")).fadeIn();
                $.each($(slider).find(".card-slider-slide"), function (index, slide) {
                    $(slide).attr('data-position', index + 1);
                });

                detect_active();
            });

            $("body").on("click", $(slider).find(".card-slider .card-slider-slide:not(:first-child)"), function(){
                let get_slide = $(this).attr('data-class');
                console.log(get_slide);
                $(slider).find(".card-slider .card-slider-slide[data-class=" + get_slide + "]").hide().prependTo($(slider).find(".card-slider")).fadeIn();
                $.each($(slider).find(".card-slider-slide"), function (index, slide) {
                    $(slide).attr('data-position', index + 1);
                });

                detect_active();
            });
        })
    });
}