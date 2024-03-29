﻿/* Romania +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.ro = {
    monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
    monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
    dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
    datePattern: 'dd.MM.yyyy',
    dateLongPattern: 'd MMMM yyyy',
    dateTimePattern: 'dd.MM.yyyy HH:mm',
    timePattern: 'HH:mm',
    timeLongPattern: 'HH:mm:ss',
    //
    numericNegativePattern: '-n$',
    numericDecimalSeparator: ',',
    numericGroupSeparator: '.',
    numericMaxDecimals: 2,
    currencyPositivePattern: 'n $',
    currencyNegativePattern: '-n $',
    currencySymbol: 'lei',
    currencyDecimalSeparator: ',',
    currencyGroupSeparator: '.',
    percentDecimalSeparator: ',',
    percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
    $.ig.setDefaultCulture('ro');
}
