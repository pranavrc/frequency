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
        var fadeTimePercentage = (frequency <= 2) ? 75 : fadeDelay * 100 / frequency;
        var aName = 'fade' + count;

        $('head').append("<style>                         \
            @keyframes " + aName + " {                    \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.10;}                      \
                100% {opacity:0.10;}                      \
            }                                             \
            @-webkit-keyframes " + aName + " {            \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.10;}                      \
                100% {opacity:0.10;}                      \
            }                                             \
            @-moz-keyframes " + aName + " {               \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.10;}                      \
                100% {opacity:0.10;}                      \
            }                                             \
            @-o-keyframes " + aName + " {                 \
                0%   {opacity:1;}" + fadeTimePercentage +
                "%   {opacity:0.10;}                      \
                100% {opacity:0.10;}                      \
            }                                             \
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
