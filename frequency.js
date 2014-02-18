/* frequency.js
 * (c) Pranav Ravichandran <me@onloop.net>
 * Released under the MIT license.
 * http://github.com/pranavrc/frequency/
 */

$(document).ready(function () {
    var count = 0;

    $("*[id^=frequency]").each(function () {
        var frequency = parseFloat(($(this).attr('id')).split("-")[1]);
        var fadeDelay = Math.log(frequency) / Math.LN10;
        var fadeTimePercentage = fadeDelay * 100 / frequency;
        var aName = 'fade' + count;
        var initialFontWeight = $(this).css('font-weight');
        var finalFontWeight = initialFontWeight <= 600 ? initialFontWeight * 1.5 : initialFontWeight;

        $('head').append("<style>                                           \
            @keyframes " + aName + " {                                      \
                0%   {opacity:1; font-weight:" + finalFontWeight + ";}" + fadeTimePercentage +
                "%   {opacity:0.25; font-weight:" + initialFontWeight + ";} \
                100% {opacity:0.25; font-weight:" + initialFontWeight + ";} \
            }                                                               \
            @-webkit-keyframes " + aName + " {                              \
                0%   {opacity:1; font-weight:" + finalFontWeight + ";}" + fadeTimePercentage +
                "%   {opacity:0.25; font-weight:" + initialFontWeight + ";} \
                100% {opacity:0.25; font-weight:" + initialFontWeight + ";} \
            }                                                               \
            @-moz-keyframes " + aName + " {                                 \
                0%   {opacity:1; font-weight:" + finalFontWeight + ";}" + fadeTimePercentage +
                "%   {opacity:0.25; font-weight:" + initialFontWeight + ";} \
                100% {opacity:0.25; font-weight:" + initialFontWeight + ";} \
            }                                                               \
            @-o-keyframes " + aName + " {                                   \
                0%   {opacity:1; font-weight:" + finalFontWeight + ";}" + fadeTimePercentage +
                "%   {opacity:0.25; font-weight:" + initialFontWeight + ";} \
                100% {opacity:0.25; font-weight:" + initialFontWeight + ";} \
            }                                                               \
        </style>");

        $(this).css({
            "animation": aName + " " + frequency + "s forwards",
            "-webkit-animation": aName + " " + frequency + "s forwards",
            "-moz-animation": aName + " " + frequency + "s forwards",
            "-o-animation": aName + " " + frequency + "s forwards",
            "animation-iteration-count": "infinite",
            "-webkit-animation-iteration-count": "infinite",
            "-moz-animation-iteration-count": "infinite",
            "-o-animation-iteration-count": "infinite"
        });

        count++;
    });
});
