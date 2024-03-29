﻿/* Poland +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.pl = {
    monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    monthNamesShort: ['Sty', 'Lu', 'Mar', 'Kw', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Pa', 'Lis', 'Gru'],
    dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
    dayNamesShort: ['Nie', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'So'],
    datePattern: 'yyyy-MM-dd',
    dateLongPattern: 'd MMMM yyyy',
    dateTimePattern: 'yyyy-MM-dd HH:mm',
    timePattern: 'HH:mm',
    timeLongPattern: 'HH:mm:ss',
    //
    numericNegativePattern: '-n$',
    numericDecimalSeparator: ',',
    numericGroupSeparator: ' ',
    numericMaxDecimals: 2,
    currencyPositivePattern: 'n $',
    currencyNegativePattern: '-n $',
    currencySymbol: 'zł',
    currencyDecimalSeparator: ',',
    currencyGroupSeparator: ' ',
    percentDecimalSeparator: ',',
    percentGroupSeparator: ' '
};
if ($.ig.setRegionalDefault) {
    $.ig.setDefaultCulture('pl');
}
