$(function () {

    let sideEls = $(".side");
    let imageArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
    let counter = 0;

    sideEls.on("click", function () {
        $(this).css({
            "background": "url(" + imageArr[randomImage(imageArr)] + ")",
            'background-position': 'center',
            'background-size': 'cover'
        });
    });

    window.setInterval(function () {

        if (counter < 10) {
            counter += 1;

            $(".front").css({
                "background": "url(" + imageArr[randomImage(imageArr)] + ")",
                'background-position': 'center',
                'background-size': 'cover'
            });
            $(".right").css({
                "background": "url(" + imageArr[randomImage(imageArr)] + ")",
                'background-position': 'center',
                'background-size': 'cover'
            });
            $(".left").css({
                "background": "url(" + imageArr[randomImage(imageArr)] + ")",
                'background-position': 'center',
                'background-size': 'cover'
            });
            $(".bottom").css({
                "background": "url(" + imageArr[randomImage(imageArr)] + ")",
                'background-position': 'center',
                'background-size': 'cover'
            });
            $(".back").css({
                "background": "url(" + imageArr[randomImage(imageArr)] + ")",
                'background-position': 'center',
                'background-size': 'cover'
            });
            $(".bottom").css({
                "background": "url(" + imageArr[randomImage(imageArr)] + ")",
                'background-position': 'center',
                'background-size': 'cover'
            });

        } else {
            counter = 0;
        }
    }, 100);


    function randomImage(arr) {
        let rand1 = Number(Math.floor(Math.random() * arr.length));
        return rand1;
    }
});