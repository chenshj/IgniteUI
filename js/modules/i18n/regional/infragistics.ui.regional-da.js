﻿﻿/* Denmark +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.da = {
    monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
    dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    datePattern: 'dd-MM-yyyy',
    dateLongPattern: 'd. MMMM yyyy',
    dateTimePattern: 'dd-MM-yyyy HH:mm',
    timePattern: 'HH:mm',
    timeLongPattern: 'HH:mm:ss',
    //
    numericDecimalSeparator: ',',
    numericGroupSeparator: '.',
    numericMaxDecimals: 2,
    currencyPositivePattern: '$ n',
    currencyNegativePattern: '$ -n',
    currencySymbol: 'kr',
    currencyDecimalSeparator: ',',
    currencyGroupSeparator: '.',
    percentPositivePattern: 'n $',
    percentNegativePattern: '-n $',
    percentDecimalSeparator: ',',
    percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
    $.ig.setRegionalDefault('da');
}
