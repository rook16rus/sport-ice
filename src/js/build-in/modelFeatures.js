export default function modelFeatures() {
    const modelFeatures = document.querySelector('.model-features');
    if (!modelFeatures) return;
    if (window.matchMedia('(max-width: 640px)').matches) return;;

    const features = document.querySelectorAll('.model-features__item')


    features.forEach((feature, index) => {
        index += 1;

        feature.addEventListener('mouseenter', () => {
            $(".model-features .card-slider .card-slider-slide[data-class=" + index + "]").hide().prependTo(".model-features .card-slider").fadeIn();
            $.each($('.card-slider-slide'), function (i, slide) {
                $(slide).attr('data-position', i + 1);
            });
        })
    })
}