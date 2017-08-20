console.log ('%%%%%%%%%Hit JS%%%%%%%%%%%%%');
// $.fn.textfill = function(options) {
//     var fontSize = options.maxFontPixels;
//     var ourText = $('span:visible:first', this);
//     var maxHeight = $(this).height();
//     var maxWidth = $(this).width();
//     var textHeight;
//     var textWidth;
//     do {
//             ourText.css('font-size', fontSize);
//             textHeight = ourText.height();
//             textWidth = ourText.width();
//             fontSize = fontSize - 1;
//     } while (textHeight > maxHeight || textWidth > maxWidth && fontSize > 3);
//     return this;
// };
//
// $('#greeting').textfill({ maxFontPixels: 48 });

;(function($) {
    $.fn.textfill = function(options) {
        var fontSize = options.maxFontPixels;
        var ourText = $('#greeting-text');//, this);
        var maxHeight = '200px';//$(this).height();
        var maxWidth = '550px';//$(this).width();
        var textHeight;
        var textWidth;
        do {
            ourText.css('font-size', fontSize);
            textHeight = ourText.height();
            textWidth = ourText.width();
            fontSize = fontSize - 1;
        } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
        return this;
    };
})(jQuery);

$(document).ready(function() {
    $('#greeting').textfill({ maxFontPixels: 48 });
});
