﻿/* English/UK +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional['en-GB'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datePattern: 'dd/MM/yyyy',
    dateLongPattern: 'dd MMMM yyyy',
    dateTimePattern: 'dd/MM/yyyy HH:mm',
    timePattern: 'HH:mm',
    timeLongPattern: 'HH:mm:ss',
    //
    numericDecimalSeparator: ',',
    numericGroupSeparator: '.',
    numericMaxDecimals: 2,
    currencyNegativePattern: '-$n',
    currencySymbol: '£',
    currencyDecimalSeparator: ',',
    currencyGroupSeparator: '.',
    percentPositivePattern: 'n $',
    percentNegativePattern: '-n $',
    percentDecimalSeparator: ',',
    percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
    $.ig.setRegionalDefault('en-GB');
}
