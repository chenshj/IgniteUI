﻿/* Estonia +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.et = {
    monthNames: ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'],
    monthNamesShort: ['Jaan', 'Veebr', 'Märts', 'Apr', 'Mai', 'Juuni', 'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
    dayNames: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'],
    dayNamesShort: ['Pühap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap', 'Reede', 'Laup'],
    datePattern: 'd.MM.yyyy',
    dateLongPattern: 'd. MMMM yyyy. a.',
    dateTimePattern: 'd.MM.yyyy HH:mm',
    timePattern: 'HH:mm',
    timeLongPattern: 'HH:mm:ss',
    //
    numericNegativePattern: '-n$',
    numericDecimalSeparator: ',',
    numericGroupSeparator: ' ',
    numericMaxDecimals: 2,
    currencyPositivePattern: 'n $',
    currencyNegativePattern: '-n $',
    currencySymbol: 'kr',
    currencyDecimalSeparator: ',',
    currencyGroupSeparator: ' ',
    percentDecimalSeparator: ',',
    percentGroupSeparator: ' '
};
if ($.ig.setRegionalDefault) {
    $.ig.setRegionalDefault('et');
}
