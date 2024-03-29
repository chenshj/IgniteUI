﻿﻿/* Serbia (Latin) +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional['sr-SR'] = {
    monthNames: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
    dayNames: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'],
    dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],
    datePattern: 'd.M.yyyy',
    dateLongPattern: 'd. MMMM yyyy',
    dateTimePattern: 'd.M.yyyy H:mm',
    timePattern: 'H:mm',
    timeLongPattern: 'H:mm:ss',
    //
    numericNegativePattern: '-n$',
    numericDecimalSeparator: ',',
    numericGroupSeparator: '.',
    numericMaxDecimals: 2,
    currencyPositivePattern: 'n $',
    currencyNegativePattern: '-n $',
    currencySymbol: 'Din.',
    currencyDecimalSeparator: ',',
    currencyGroupSeparator: '.',
    percentDecimalSeparator: ',',
    percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
    $.ig.setRegionalDefault('sr-SR');
}
