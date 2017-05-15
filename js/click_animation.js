$(function() {
    var $clickable = $('.ripple');

    /* mousedownだと直ぐに発動し、clickだとマウスボタンを離した時に発動する */
    $clickable.on('mousedown', function(e) {
        var _self   = this;
        var x       = e.pageX;
        var y       = e.pageY;

        var $effect = $(_self).find('.ripple__effect');
        var w       = $effect.width();
        var h       = $effect.height();

        console.log($(window).height());
        /* クリックした座標を中心とする */
        $effect.css({
            left: x - w / 2,
            top: y - h / 2
        });

        var random = function(){
            return Math.floor( Math.random() * 255 ) + 0 ; // max + 1 - min
        };
        var randomColor = "rgb(" + random() +","+ random() +","+ random() + ")";
        $(".ripple__effect.is-random").css("background-color", randomColor);

        /* jsではclassの付け替えをするだけ */
        if (!$effect.hasClass('is-show')) {
            $effect.addClass('is-show');
            
            setTimeout(function() {
                $effect.removeClass('is-show');
            }, 750);
        }
        return false;
    });

});
