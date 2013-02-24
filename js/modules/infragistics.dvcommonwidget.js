﻿/*
 * Infragistics.Web.ClientUI common DV widget localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};
if (!$.ig.Chart) {
    $.ig.Chart = {};
    $.extend($.ig.Chart, {
        locale: {
            unsupportedBrowser: "The current browser does not support HTML5 canvas element. <br/>Try upgrading to any of the following versions:",
            currentBrowser: "Current browser: {0}",
            ie9: "Microsoft Internet Explorer V 9+",
            chrome8: "Google Chrome V 8+",
            firefox36: "Mozilla Firefox V 3.6+",
            safari5: "Apple Safari V 5+",
            opera11: "Opera V 11+",
            ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
            operaDownload: "http://www.opera.com/download/",
            chromeDownload: "http://www.google.com/chrome",
            firefoxDownload: "http://www.mozilla.com/",
            safariDownload: "http://www.apple.com/safari/download/",
            seriesName: "must specify series name option when setting options.",
            axisName: "must specify axis name option when setting options.",
            close: "Close",
            overview: "Overview",
            zoomOut: "Zoom Out",
            zoomIn: "Zoom In",
            resetZoom: "Reset Zoom"
        }
    });
    /*
     * Infragistics.Web.ClientUI charting and map common widget 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * http://www.infragistics.com/
     *
     * Depends on:
     *  jquery-1.4.4.js
     *	jquery.ui.core.js
     *	jquery.ui.widget.js
     *	ig.dataSource.js
     *	ig.util.js
     */
}
( function (a) {
    a.ig.dvCommonWidget = a.ig.dvCommonWidget || Class.extend({
        init: function (b) {
            this.widget = b
        },
        _createWidget: function (c, b, e) {
            var d = this;
            this.widget = e;
            this.widget._duringInit = true;
            this.widget._creationOptions = c;
            if ((c.dataSource && a.type(c.dataSource) === "array") || (a.type(c.dataSource) === "object" && !(c.dataSource instanceof a.ig.DataSource))) {
                this.widget._initialDataSource = c.dataSource;
                c.dataSource = null
            }
            this.widget._initialSeriesDataSource = {};
            this.widget._initialAxesDataSource = {};
            if (c.series) {
                a.each(c.series, function (f, g) {
                    if ((g.name && g.dataSource && a.type(g.dataSource) === "array") || (a.type(g.dataSource) === "object" && !(g.dataSource instanceof a.ig.DataSource))) {
                        d.widget._initialSeriesDataSource[g.name] = g.dataSource;
                        g.dataSource = null
                    }
                })
            }
            if (c.axes) {
                a.each(c.axes, function (f, g) {
                    if ((g.name && g.dataSource && a.type(g.dataSource) === "array") || (a.type(g.dataSource) === "object" && !(g.dataSource instanceof a.ig.DataSource))) {
                        d.widget._initialAxesDataSource[g.name] = g.dataSource;
                        g.dataSource = null
                    }
                })
            }
            switch (this.widget.widgetName) {
                case"igDataChart":
                    this.widget._axisTemplate = a.extend(false, {}, this.widget.options.axes[0]);
                    this.widget._seriesTemplate = a.extend(false, {}, this.widget.options.series[0]);
                    this.widget.options.legend = null;
                    this.widget.options.series[0].legend = null;
                    break;
                case"igPieChart":
                    break;
                case"igMap":
                    this.widget._seriesTemplate = a.extend(false, {}, this.widget.options.series[0]);
                    this.widget.options.backgroundContent = null;
                    break
            }
            a.Widget.prototype._createWidget.apply(this.widget, [c, b])
        },
        _create: function () {
            var b = this.widget;
            if (!this._isCanvasSupported()) {
                this._renderUnsupportedBrowser(b)
            } else {
                this.widget._notInitialized = true;
                if (b._initialDataSource) {
                    b._creationOptions.dataSource = this.widget._initialDataSource;
                    b.options.dataSource = this.widget._initialDataSource
                }
                if (b.options.series) {
                    a.each(b.options.series, function (c, d) {
                        if (d.name && b._initialSeriesDataSource[d.name] !== undefined) {
                            d.dataSource = b._initialSeriesDataSource[d.name]
                        }
                    })
                }
                if (b.options.axes) {
                    a.each(b.options.axes, function (c, d) {
                        if (d.name && b._initialAxesDataSource[d.name] !== undefined) {
                            d.dataSource = b._initialAxesDataSource[d.name]
                        }
                    })
                }
                b._pendingCrossingAxes = [];
                b._tooltipTemplate = null;
                b._tooltipTtemplates = null;
                b._tooltip = {};
                this.widget._tooltipTemplates = {};
                switch (this.widget.widgetName) {
                    case"igDataChart":
                        b._chart = new a.ig.XamDataChart();
                        b._chart.manageDataSources(true);
                        b._axes = {};
                        b._series = {};
                        b._axisOpt = {};
                        b._seriesOpt = {};
                        this._bindDataChartEvents(b._chart);
                        this._renderChartContainer(this.widget);
                        this._initialDataBind();
                        break;
                    case"igPieChart":
                        b._chart = new a.ig.XamPieChart();
                        this._bindPieChartEvents(b._chart);
                        this._renderChartContainer(this.widget);
                        this._initialDataBind();
                        break;
                    case"igMap":
                        b._chart = new a.ig.XamGeographicMap();
                        b._chart.manageDataSources(true);
                        b._axes = {};
                        b._series = {};
                        b._axisOpt = {};
                        b._seriesOpt = {};
                        this._bindMapEvents(b._chart);
                        this._setBackgroundContent(b.options.backgroundContent);
                        break
                }
                if (this.widget._creationOptions.name) {
                    this.widget._chart.name(this.widget._creationOptions.name)
                }
                if (this.widget.dsCount === 0 && this.widget._notInitialized) {
                    this._initializeWidget(this.widget)
                }
            }
        },
        _converterCallback: function () {
            var b = this.settings.callee;
            b.widget.dsCount--;
            if (b.widget.dsCount === 0) {
                b._initializeWidget(b.widget)
            }
        },
        _initDataOptions: function (d, b) {
            var e = this.widget, c;
            if (d.dataSourceUrl) {
                d.dataSource = d.dataSourceUrl
            }
            e._containerSourceID = e.id();
            c = {
                id: d.name || e._containerSourceID,
                rowAdded: this._itemAdded,
                rowDeleted: this._itemRemoved,
                rowUpdated: this._itemUpdated,
                rowInserted: this._itemInserted,
                callback: b,
                callee: this,
                responseDataKey: d.responseDataKey,
                primaryKey: d.primaryKey,
                responseTotalRecCountKey: d.responseTotalRecCountKey,
                dataSource: d.dataSource
            };
            if (d.dataSourceType !== null) {
                c.type = d.dataSourceType
            }
            return c
        },
        _setupDataSource: function (d, b) {
            var c = this._initDataOptions(d, b);
            if (this.widget.dataSources === undefined) {
                this.widget.dataSources = {}
            }
            if (!(c.dataSource instanceof a.ig.DataSource)) {
                if (a.type(c.dataSource) === "string" && c.dataSource.indexOf("$callback=?") !== -1) {
                    this.widget.dataSources[c.id] = new a.ig.JSONPDataSource(c)
                } else {
                    this.widget.dataSources[c.id] = new a.ig.DataSource(c)
                }
            } else {
                this.widget.dataSources[c.id] = c.dataSource;
                c.dataSource = this.widget.dataSources[c.id].settings.dataSource;
                if (this.widget.dataSources[c.id].settings.responseDataKey !== null) {
                    delete c.responseDataKey;
                    if (c.schema) {
                        c.schema.searchField = this.widget.dataSource.settings.responseDataKey
                    }
                }
                this.widget.dataSources[c.id].settings = this._mergeDataSourceSettings(this.widget.dataSources[c.id].settings, c);
                if (c.schema) {
                    this.widget.dataSources[c.id]._initSchema()
                }
            }
        },
        _initCallback: function (d, c, b) {
            this.widget.dsCount--;
            if (this.widget.dsCount === 0 && d) {
                this._initializeWidget(this.widget)
            }
        },
        _initializeWidget: function (b) {
            this.widget = b;
            if (this.widget.dataSources[this.widget._containerSourceID]) {
                this._setItemsSource(this.widget, this.widget._chart, this.widget._containerSourceID)
            }
            this._setWidgetOptions(this.widget._creationOptions, b._chart);
            this.widget._duringInit = false;
            if (b._creationOptions.series) {
                this._setCoreWidgetOption(b._chart, "series", this.widget._creationOptions.series)
            }
            b._notInitialized = false
        },
        _getNotifyTarget: function (c) {
            var b;
            if (this.widget.widgetName === "igPieChart") {
                b = this.widget._chart
            } else {
                if (c === this.widget.id()) {
                    b = this.widget._chart
                } else {
                    b = this._getSeriesByName(c);
                    if (!b) {
                        b = this._getAxisByName(c)
                    }
                }
            }
            return b
        },
        _notifyItemAdded: function (b, d, c) {
            this.widget._chart.notifyInsertItem(b, c, d.row)
        },
        _itemAdded: function (c, b) {
            this._notifyItemAdded(b, c, b.dataView().length - 1)
        },
        _itemInserted: function (c, b) {
            this._notifyItemAdded(b, c, c.rowIndex)
        },
        _itemUpdated: function (c, b) {
            this.widget._chart.notifySetItem(b, c.rowIndex, c.oldRow, c.newRow)
        },
        _itemRemoved: function (c, b) {
            this.widget._chart.notifyRemoveItem(b, c.rowIndex, c.row)
        },
        _setWidgetOptions: function (c, b) {
            var d = this;
            a.each(c, function (e, f) {
                if (!d._setWidgetOption(b, e, f)) {
                    d._setCoreWidgetOption(b, e, f)
                } else {
                    d.widget.options[e] = f
                }
            })
        },
        _setWidgetOption: function (d, g, h) {
            var c, f, b, e;
            switch (g) {
                case"crosshairPoint":
                    d.crosshairPoint(new a.ig.Point(1, h.x, h.y));
                    return true;
                case"windowRect":
                    d.windowRect(new a.ig.Rect(0, h.left, h.top, h.width, h.height));
                    return true;
                case"horizontalZoomable":
                    d.horizontalZoomable(h);
                    return true;
                case"verticalZoomable":
                    d.verticalZoomable(h);
                    return true;
                case"windowResponse":
                    switch (h) {
                        case"deferred":
                            d.windowResponse(0);
                            break;
                        case"immediate":
                            d.windowResponse(1);
                            break
                    }
                    return true;
                case"windowRectMinWidth":
                    d.windowRectMinWidth(h);
                    return true;
                case"overviewPlusDetailPaneVisibility":
                    switch (h) {
                        case"visible":
                            d.overviewPlusDetailPaneVisibility(0);
                            break;
                        case"collapsed":
                            d.overviewPlusDetailPaneVisibility(1);
                            break
                    }
                    return true;
                case"crosshairVisibility":
                    switch (h) {
                        case"visible":
                            d.crosshairVisibility(0);
                            break;
                        case"collapsed":
                            d.crosshairVisibility(1);
                            break
                    }
                    return true;
                case"plotAreaBackground":
                    if (h === null) {
                        d.plotAreaBackground(null)
                    } else {
                        b = new a.ig.Brush();
                        b.fill(h);
                        d.plotAreaBackground(b)
                    }
                    return true;
                case"defaultInteraction":
                    switch (h) {
                        case"none":
                            d.defaultInteraction(0);
                            break;
                        case"dragZoom":
                            d.defaultInteraction(1);
                            break;
                        case"dragPan":
                            d.defaultInteraction(2);
                            break
                    }
                    return true;
                case"dragModifier":
                    switch (h) {
                        case"none":
                            d.dragModifier(0);
                            break;
                        case"alt":
                            d.dragModifier(1);
                            break;
                        case"control":
                            d.dragModifier(2);
                            break;
                        case"shift":
                            d.dragModifier(4);
                            break;
                        case"windows":
                            d.dragModifier(8);
                            break;
                        case"apple":
                            d.dragModifier(8);
                            break
                    }
                    return true;
                case"panModifier":
                    switch (h) {
                        case"none":
                            d.panModifier(0);
                            break;
                        case"alt":
                            d.panModifier(1);
                            break;
                        case"control":
                            d.panModifier(2);
                            break;
                        case"shift":
                            d.panModifier(4);
                            break;
                        case"windows":
                            d.panModifier(8);
                            break;
                        case"apple":
                            d.panModifier(8);
                            break
                    }
                    return true;
                case"previewRect":
                    d.previewRect(new a.ig.Rect(0, h.left, h.top, h.width, h.height));
                    return true;
                case"windowPositionHorizontal":
                    d.windowPositionHorizontal(h);
                    return true;
                case"windowPositionVertical":
                    d.windowPositionVertical(h);
                    return true;
                case"windowScaleHorizontal":
                    d.windowScaleHorizontal(h);
                    return true;
                case"windowScaleVertical":
                    d.windowScaleVertical(h);
                    return true;
                case"triangleMarkerTemplate":
                case"circleMarkerTemplate":
                case"pyramidMarkerTemplate":
                case"squareMarkerTemplate":
                case"diamondMarkerTemplate":
                case"pentagonMarkerTemplate":
                case"hexagonMarkerTemplate":
                case"tetragramMarkerTemplate":
                case"pentagramMarkerTemplate":
                case"hexagramMarkerTemplate":
                    this._setDataTemplate(d, g, h);
                    return true;
                case"topMargin":
                    d.topMargin(h);
                    return true;
                case"leftMargin":
                    d.leftMargin(h);
                    return true;
                case"rightMargin":
                    d.rightMargin(h);
                    return true;
                case"bottomMargin":
                    d.bottomMargin(h);
                    return true;
                case"autoMarginWidth":
                    d.autoMarginWidth(h);
                    return true;
                case"autoMarginHeight":
                    d.autoMarginHeight(h);
                    return true;
                case"worldRect":
                    d.worldRect(new a.ig.Rect(0, h.left, h.top, h.width, h.height));
                    return true;
                case"xAxis":
                    d.xAxis(this._getAxisByName(h));
                    return true;
                case"yAxis":
                    d.yAxis(this._getAxisByName(h));
                    return true;
                case"isSquare":
                    d.isSquare(h);
                    return true;
                case"gridMode":
                    switch (h) {
                        case"none":
                            d.gridMode(0);
                            break;
                        case"beforeSeries":
                            d.gridMode(1);
                            break;
                        case"behindSeries":
                            d.gridMode(2);
                            break
                    }
                    return true;
                case"brushes":
                    f = true;
                    if (( typeof h[0] === "string" && h[0] === "HSV") || h[0] === "RGB") {
                        if (h[0] === "HSV") {
                            f = false
                        }
                        h = h.slice(1)
                    }
                    c = new a.ig.BrushCollection();
                    for (e = 0; e < h.length; e++) {
                        b = new a.ig.Brush();
                        b.fill(h[e]);
                        c.add(b)
                    }
                    d.brushes(c);
                    return true;
                case"markerBrushes":
                    f = true;
                    if (( typeof h[0] === "string" && h[0] === "HSV") || h[0] === "RGB") {
                        if (h[0] === "HSV") {
                            f = false
                        }
                        h = h.slice(1)
                    }
                    c = new a.ig.BrushCollection();
                    for (e = 0; e < h.length; e++) {
                        b = new a.ig.Brush();
                        b.fill(h[e]);
                        c.add(b)
                    }
                    d.markerBrushes(c);
                    return true;
                case"outlines":
                    f = true;
                    if (( typeof h[0] === "string" && h[0] === "HSV") || h[0] === "RGB") {
                        if (h[0] === "HSV") {
                            f = false
                        }
                        h = h.slice(1)
                    }
                    c = new a.ig.BrushCollection();
                    for (e = 0; e < h.length; e++) {
                        b = new a.ig.Brush();
                        b.fill(h[e]);
                        c.add(b)
                    }
                    d.outlines(c);
                    return true;
                case"markerOutlines":
                    f = true;
                    if (( typeof h[0] === "string" && h[0] === "HSV") || h[0] === "RGB") {
                        if (h[0] === "HSV") {
                            f = false
                        }
                        h = h.slice(1)
                    }
                    c = new a.ig.BrushCollection();
                    for (e = 0; e < h.length; e++) {
                        b = new a.ig.Brush();
                        b.fill(h[e]);
                        c.add(b)
                    }
                    d.markerOutlines(c);
                    return true;
                case"valueMemberPath":
                    d.valueMemberPath(h);
                    return true;
                case"labelMemberPath":
                    d.labelMemberPath(h);
                    return true;
                case"labelsPosition":
                    switch (h) {
                        case"none":
                            d.labelsPosition(0);
                            break;
                        case"center":
                            d.labelsPosition(1);
                            break;
                        case"insideEnd":
                            d.labelsPosition(2);
                            break;
                        case"outsideEnd":
                            d.labelsPosition(3);
                            break;
                        case"bestFit":
                            d.labelsPosition(4);
                            break
                    }
                    return true;
                case"leaderLineVisibility":
                    switch (h) {
                        case"visible":
                            d.leaderLineVisibility(0);
                            break;
                        case"collapsed":
                            d.leaderLineVisibility(1);
                            break
                    }
                    return true;
                case"othersCategoryThreshold":
                    d.othersCategoryThreshold(h);
                    return true;
                case"othersCategoryType":
                    switch (h) {
                        case"number":
                            d.othersCategoryType(0);
                            break;
                        case"percent":
                            d.othersCategoryType(1);
                            break
                    }
                    return true;
                case"othersCategoryText":
                    d.othersCategoryText(h);
                    return true;
                case"explodedRadius":
                    d.explodedRadius(h);
                    return true;
                case"radiusFactor":
                    d.radiusFactor(h);
                    return true;
                case"allowSliceSelection":
                    d.allowSliceSelection(h);
                    return true;
                case"allowSliceExplosion":
                    d.allowSliceExplosion(h);
                    return true;
                case"labelExtent":
                    d.labelExtent(h);
                    return true;
                case"startAngle":
                    d.startAngle(h);
                    return true;
                case"sweepDirection":
                    switch (h) {
                        case"counterclockwise":
                            d.sweepDirection(0);
                            break;
                        case"clockwise":
                            d.sweepDirection(1);
                            break
                    }
                    return true;
                case"selectedStyle":
                    d.selectedStyle(h);
                    return true;
                case"legendItemTemplate":
                    this._setDataTemplate(d, g, h);
                    return true;
                case"legendItemBadgeTemplate":
                    this._setDataTemplate(d, g, h);
                    return true;
                case"textStyle":
                    d.textStyle(h);
                    return true;
                case"overviewPlusDetailPaneBackgroundImageUri":
                    d.overviewPlusDetailPaneBackgroundImageUri(h);
                    return true
            }
            return false
        },
        _createAxisFromType: function (b) {
            switch (b) {
                case"numericX":
                    return new a.ig.NumericXAxis();
                case"numericY":
                    return new a.ig.NumericYAxis();
                case"categoryX":
                    return new a.ig.CategoryXAxis();
                case"categoryDateTimeX":
                    return new a.ig.CategoryDateTimeXAxis();
                case"categoryY":
                    return new a.ig.CategoryYAxis();
                case"categoryAngle":
                    return new a.ig.CategoryAngleAxis();
                case"numericAngle":
                    return new a.ig.NumericAngleAxis();
                case"numericRadius":
                    return new a.ig.NumericRadiusAxis();
                default:
                    break
            }
        },
        _createSeriesFromType: function (b) {
            switch (b) {
                case"area":
                    return new a.ig.AreaSeries();
                case"bar":
                    return new a.ig.BarSeries();
                case"column":
                    return new a.ig.ColumnSeries();
                case"line":
                    return new a.ig.LineSeries();
                case"rangeArea":
                    return new a.ig.RangeAreaSeries();
                case"rangeColumn":
                    return new a.ig.RangeColumnSeries();
                case"splineArea":
                    return new a.ig.SplineAreaSeries();
                case"spline":
                    return new a.ig.SplineSeries();
                case"stepArea":
                    return new a.ig.StepAreaSeries();
                case"stepLine":
                    return new a.ig.StepLineSeries();
                case"waterfall":
                    return new a.ig.WaterfallSeries();
                case"financial":
                    return new a.ig.FinancialPriceSeries();
                case"typicalPriceIndicator":
                    return new a.ig.TypicalPriceIndicator();
                case"polarArea":
                    return new a.ig.PolarAreaSeries();
                case"polarLine":
                    return new a.ig.PolarLineSeries();
                case"polarScatter":
                    return new a.ig.PolarScatterSeries();
                case"radialColumn":
                    return new a.ig.RadialColumnSeries();
                case"radialLine":
                    return new a.ig.RadialLineSeries();
                case"radialPie":
                    return new a.ig.RadialPieSeries();
                case"scatter":
                    return new a.ig.ScatterSeries();
                case"highDensityScatter":
                    return new a.ig.HighDensityScatterSeries();
                case"scatterLine":
                    return new a.ig.ScatterLineSeries();
                case"bubble":
                    return new a.ig.BubbleSeries();
                case"absoluteVolumeOscillatorIndicator":
                    return new a.ig.AbsoluteVolumeOscillatorIndicator();
                case"averageTrueRangeIndicator":
                    return new a.ig.AverageTrueRangeIndicator();
                case"accumulationDistributionIndicator":
                    return new a.ig.AccumulationDistributionIndicator();
                case"averageDirectionalIndexIndicator":
                    return new a.ig.AverageDirectionalIndexIndicator();
                case"geographicShape":
                    return new a.ig.GeographicShapeSeries();
                case"geographicSymbol":
                    return new a.ig.GeographicSymbolSeries();
                case"geographicScatterArea":
                    return new a.ig.GeographicScatterAreaSeries();
                case"geographicContourLine":
                    return new a.ig.GeographicContourLineSeries();
                case"geographicHighDensityScatter":
                    return new a.ig.GeographicHighDensityScatterSeries();
                case"geographicProportionalSymbol":
                    return new a.ig.GeographicProportionalSymbolSeries();
                case"geographicPolyline":
                    return new a.ig.GeographicPolylineSeries();
                case"bollingerBandWidthIndicator":
                    return new a.ig.BollingerBandWidthIndicator();
                case"chaikinOscillatorIndicator":
                    return new a.ig.ChaikinOscillatorIndicator();
                case"chaikinVolatilityIndicator":
                    return new a.ig.ChaikinVolatilityIndicator();
                case"commodityChannelIndexIndicator":
                    return new a.ig.CommodityChannelIndexIndicator();
                case"detrendedPriceOscillatorIndicator":
                    return new a.ig.DetrendedPriceOscillatorIndicator();
                case"easeOfMovementIndicator":
                    return new a.ig.EaseOfMovementIndicator();
                case"fastStochasticOscillatorIndicator":
                    return new a.ig.FastStochasticOscillatorIndicator();
                case"forceIndexIndicator":
                    return new a.ig.ForceIndexIndicator();
                case"fullStochasticOscillatorIndicator":
                    return new a.ig.FullStochasticOscillatorIndicator();
                case"marketFacilitationIndexIndicator":
                    return new a.ig.MarketFacilitationIndexIndicator();
                case"massIndexIndicator":
                    return new a.ig.MassIndexIndicator();
                case"medianPriceIndicator":
                    return new a.ig.MedianPriceIndicator();
                case"moneyFlowIndexIndicator":
                    return new a.ig.MoneyFlowIndexIndicator();
                case"movingAverageConvergenceDivergenceIndicator":
                    return new a.ig.MovingAverageConvergenceDivergenceIndicator();
                case"negativeVolumeIndexIndicator":
                    return new a.ig.NegativeVolumeIndexIndicator();
                case"onBalanceVolumeIndicator":
                    return new a.ig.OnBalanceVolumeIndicator();
                case"percentagePriceOscillatorIndicator":
                    return new a.ig.PercentagePriceOscillatorIndicator();
                case"percentageVolumeOscillatorIndicator":
                    return new a.ig.PercentageVolumeOscillatorIndicator();
                case"positiveVolumeIndexIndicator":
                    return new a.ig.PositiveVolumeIndexIndicator();
                case"priceVolumeTrendIndicator":
                    return new a.ig.PriceVolumeTrendIndicator();
                case"rateOfChangeAndMomentumIndicator":
                    return new a.ig.RateOfChangeAndMomentumIndicator();
                case"relativeStrengthIndexIndicator":
                    return new a.ig.RelativeStrengthIndexIndicator();
                case"slowStochasticOscillatorIndicator":
                    return new a.ig.SlowStochasticOscillatorIndicator();
                case"standardDeviationIndicator":
                    return new a.ig.StandardDeviationIndicator();
                case"stochRSIIndicator":
                    return new a.ig.StochRSIIndicator();
                case"trixIndicator":
                    return new a.ig.TRIXIndicator();
                case"ultimateOscillatorIndicator":
                    return new a.ig.UltimateOscillatorIndicator();
                case"weightedCloseIndicator":
                    return new a.ig.WeightedCloseIndicator();
                case"williamsPercentRIndicator":
                    return new a.ig.WilliamsPercentRIndicator();
                case"bollingerBandsOverlay":
                    return new a.ig.BollingerBandsOverlay();
                case"priceChannelOverlay":
                    return new a.ig.PriceChannelOverlay();
                case"customIndicator":
                    return new a.ig.CustomIndicator();
                default:
                    break
            }
        },
        _setCoreWidgetOption: function (e, g, q) {
            var k = this, r = this.widget, b = null, d = null, c = false, h, o, i, j, m, l = null, n = null, f, p;
            switch (g) {
                case"axes":
                    if (this.widget.widgetName === "igMap") {
                        return
                    }
                    a.each(q, function (s, u) {
                        if (!u.name) {
                            throw new Error(a.ig.Chart.locale.axisName)
                        }
                        if (k.widget._series[u.name]) {
                            throw new Error(a.ig.Chart.locale.nameInUse)
                        }
                        b = k._getAxisByName(u.name);
                        if (b && u.remove) {
                            delete r._axes[u.name];
                            delete r._axisOpt[u.name];
                            var t = r.options.axes.indexOf(r._axisOpt[u.name]);
                            r.options.axes.splice(t, 1);
                            r._chart.axes().remove(b);
                            if (r.dataSources[u.name]) {
                                delete r.dataSources[u.name].settings;
                                delete r.dataSources[u.name]
                            }
                            if (r._target && r._target.name() === u.name) {
                                r._target = null
                            }
                            return
                        }
                        if (b) {
                            d = r._axisOpt[u.name]
                        }
                        if (!b && !u.remove) {
                            b = k._createAxisFromType(u.type);
                            b.name(u.name);
                            c = true
                        }
                        if (b) {
                            if (c) {
                                r._axes[u.name] = b;
                                r.options.axes.push(d);
                                h = k._mergeIntoNewWithDataSource(r._axisTemplate, u);
                                r._axisOpt[u.name] = h
                            }
                            if (u.coercionMethods) {
                                b.coercionMethods(u.coercionMethods)
                            }
                            k._setAxisOptions(u, b);
                            if (c) {
                                if (r.dataSources[b.name()]) {
                                    k._setItemsSource(k.widget, b, b.name())
                                }
                            } else {
                                k._mergeIntoWithDataSource(d, u)
                            }
                            if (c) {
                                r._chart.axes().add(b)
                            }
                        }
                    });
                    if (r._pendingCrossingAxes && r._pendingCrossingAxes.length > 0) {
                        a.each(r._pendingCrossingAxes, function (s, t) {
                            t()
                        });
                        r._pendingCrossingAxes.length = 0
                    }
                    break;
                case"series":
                    if (!r._duringInit) {
                        m = false;
                        a.each(q, function (s, u) {
                            if (!u.name) {
                                throw new Error(a.ig.Chart.locale.seriesName)
                            }
                            if (k.widget._axes[u.name]) {
                                throw new Error(a.ig.Chart.locale.nameInUse)
                            }
                            l = k._getSeriesByName(u.name);
                            if (l && u.remove) {
                                delete r._series[u.name];
                                delete r._seriesOpt[u.name];
                                if (r.dataSources[u.name]) {
                                    delete r.dataSources[u.name].settings;
                                    delete r.dataSources[u.name]
                                }
                                var t = r.options.series.indexOf(r._seriesOpt[u.name]);
                                r.options.series.splice(t, 1);
                                r._chart.series().remove(l);
                                return
                            }
                            if (!l && !u.remove) {
                                l = k._createSeriesFromType(u.type);
                                k._bindSeriesEvents(l);
                                l.name(u.name);
                                m = true
                            }
                            if (l) {
                                n = r._seriesOpt[u.name]
                            }
                            if (l) {
                                if (m) {
                                    r._series[u.name] = l;
                                    r.options.series.push(n);
                                    h = k._mergeIntoNewWithDataSource(r._seriesTemplate, u);
                                    r._seriesOpt[u.name] = h
                                }
                                if (u.coercionMethods) {
                                    l.coercionMethods(u.coercionMethods)
                                }
                                k._setSeriesOptions(u, l, r);
                                if (m) {
                                    if (r.dataSources[l.name()]) {
                                        k._setItemsSource(k.widget, l, l.name())
                                    }
                                } else {
                                    k._mergeIntoWithDataSource(n, u)
                                }
                                if (m) {
                                    r._chart.series().add(l)
                                }
                            }
                        })
                    }
                    break;
                case"syncChannel":
                    i = null;
                    if (q && q.length > 0) {
                        i = a.ig.SyncLinkManager.prototype.instance().getLink(q)
                    }
                    j = r._chart.actualSyncLink();
                    if (j) {
                        a.ig.SyncLinkManager.prototype.instance().releaseLink(j)
                    }
                    if (i) {
                        r._chart.actualSyncLink(i)
                    } else {
                        r._chart.actualSyncLink(new a.ig.SyncLink())
                    }
                    r.options[g] = q;
                    break;
                case"synchronizeVertically":
                    o = r._chart.syncSettings();
                    o.synchronizeVertically(q);
                    r.options[g] = q;
                    break;
                case"synchronizeHorizontally":
                    o = r._chart.syncSettings();
                    o.synchronizeHorizontally(q);
                    r.options[g] = q;
                    break;
                case"legend":
                    this._setLegend(r._chart, q);
                    break;
                case"width":
                    if (!r._duringInit) {
                        r._chartElement.css("width", q);
                        r.notifyContainerResized()
                    }
                    break;
                case"height":
                    if (!r._duringInit) {
                        r._chartElement.css("height", q);
                        r.notifyContainerResized()
                    }
                    break;
                case"size":
                    if (!r._duringInit) {
                        if (q.width) {
                            r._chartElement.css("width", q.width)
                        }
                        if (q.height) {
                            r._chartElement.css("height", q.height)
                        }
                        r.notifyContainerResized()
                    }
                    break;
                case"explodedSlices":
                    if (q.length) {
                        f = new a.ig.IndexCollection();
                        a.each(q, function (s, t) {
                            f.add(t)
                        });
                        r._chart.explodedSlices(f)
                    }
                    break;
                case"showTooltip":
                    if (q === true) {
                        this._addTooltip(r, r._chart, r.css.tooltip)
                    }
                    if (q === false) {
                        this._removeTooltip(r, r._chart)
                    }
                    break;
                case"tooltipTemplate":
                    if (a.ig.tmpl) {
                        if (this._htmlCheckExpr.test(q)) {
                            p = q
                        } else {
                            if (a("#" + q).length > 0) {
                                p = a("#" + q).text()
                            } else {
                                if (a(q).length > 0) {
                                    p = a(q).text()
                                } else {
                                    p = q
                                }
                            }
                        }
                        r._tooltipTemplate = p
                    }
                    break;
                case"backgroundContent":
                    if (q === null) {
                        r._chart.backgroundContent(null)
                    }
                    if (!r._duringInit) {
                        this._setBackgroundContent(q)
                    }
                    break
            }
        },
        _htmlCheckExpr: /^[^<]*(<[\w\W]+>)[^>]*$/,
        _getAxisByName: function (b) {
            if (this.widget._axes[b] === undefined) {
                if (this.widget.widgetName === "igMap") {
                    if (b === "xAxis") {
                        return this.widget._chart.xAxis()
                    }
                    if (b === "yAxis") {
                        return this.widget._chart.yAxis()
                    }
                }
                return null
            }
            return this.widget._axes[b]
        },
        _getSeriesByName: function (b) {
            if (this.widget._series[b] === undefined) {
                return null
            }
            return this.widget._series[b]
        },
        _setAxisOptions: function (c, b) {
            var d = this;
            a.each(c, function (e, f) {
                if (!d._setAxisOption(b, e, f)) {
                    d._setCoreAxisOption(b, e, f)
                } else {
                    d.widget._axisOpt[b.name()][e] = f
                }
            })
        },
        _setSeriesOptions: function (b, d) {
            var c = this;
            a.each(b, function (e, f) {
                if (!c._setCoreSeriesOption(d, e, f)) {
                    c._seriesSetOption(d, e, f)
                } else {
                    c.widget._seriesOpt[d.name()][e] = f
                }
            })
        },
        _setCoreSeriesOption: function (c, b, e) {
            var d;
            switch (b) {
                case"legend":
                    this._setLegend(c, e);
                    return true;
                case"showTooltip":
                    if (e === true) {
                        this._addTooltip(this.widget, c, this.widget.css.tooltip)
                    } else {
                        this._removeTooltip(this.widget, c)
                    }
                    return true;
                case"tooltipTemplate":
                    if (a.ig.tmpl) {
                        if (this._htmlCheckExpr.test(e)) {
                            d = e
                        } else {
                            if (a("#" + e).length > 0) {
                                d = a("#" + e).text()
                            } else {
                                if (a(e).length > 0) {
                                    d = a(e).text()
                                } else {
                                    d = e
                                }
                            }
                        }
                        this.widget._tooltipTemplates[c.name()] = d
                    }
                    return true;
                case"displayType":
                    switch (e) {
                        case"candlestick":
                            c.displayType(0);
                            break;
                        case"ohlc":
                            c.displayType(1);
                            break;
                        case"line":
                            c.displayType(0);
                            break;
                        case"area":
                            c.displayType(1);
                            break;
                        case"column":
                            c.displayType(2);
                            break
                    }
                    return true
            }
            return false
        },
        _initMap: function () {
            if (this.widget._duringInit) {
                this._renderChartContainer(this.widget);
                this._initialDataBind();
                if (this.widget.dsCount === 0 && this.widget._notInitialized) {
                    this._initializeWidget(this.widget)
                }
            }
        },
        _setBackgroundContent: function (b) {
            if (!b) {
                this._initMap()
            } else {
                this.widget.options.backgroundContent = b;
                switch (b.type) {
                    case"cloudMade":
                        this.widget._chart.backgroundContent(this._setBackgroundOptions(new a.ig.CloudMadeMapImagery(), b));
                        this._initMap();
                        break;
                    case"bing":
                        this._initializeBingMapsImagery(b);
                        break;
                    case"openStreet":
                        this.widget._chart.backgroundContent(this._setBackgroundOptions(new a.ig.OpenStreetMapImagery(), b));
                        this._initMap();
                        break;
                    default:
                        return
                }
            }
        },
        _initializeBingMapsImagery: function (b) {
            var d = b.bingUrl || "http://dev.virtualearth.net/REST/v1/Imagery/Metadata/", e = b.imagerySet || "AerialWithLabels", c = b.key;
            a.ajax({
                url: d + e,
                data: "key=" + c + "&include=ImageryProviders",
                success: a.proxy(this._setBingBackground, this),
                dataType: "jsonp",
                jsonp: "jsonp"
            })
        },
        _setBingBackground: function (f) {
            var d, b = new a.ig.BingMapsMapImagery(), e = f.resourceSets[0].resources[0], c = this.widget.options.backgroundContent.cultureName || "en-US";
            b.tilePath(e.imageUrl);
            b.cultureName(c);
            for (d = 0; d < e.imageUrlSubdomains.length; d++) {
                b.subDomains().add(e.imageUrlSubdomains[d])
            }
            this.widget._chart.backgroundContent(b);
            this._initMap()
        },
        _setBackgroundOptions: function (b, c) {
            var d = this;
            a.each(c, function (e, f) {
                d._backgroundContextSetOption(b, e, f)
            });
            return b
        },
        _backgroundContextSetOption: function (b, c, d) {
            switch (c) {
                case"key":
                    b.key(d);
                    break;
                case"parameter":
                    b.parameter(d);
                    break;
                case"opacity":
                    b.parameter(d);
                    break;
                default:
                    break
            }
        },
        _setDataTemplate: function (d, b, f) {
            var e = new a.ig.DataTemplate(), c = false;
            if (!f) {
                if (d[b]) {
                    d[b](null)
                }
                return
            }
            if (f.requireThis) {
                c = true
            }
            if (f.render) {
                if (c) {
                    e.render(a.proxy(f.render, f))
                } else {
                    e.render(f.render)
                }
            } else {
                e.render(f)
            }
            if (f.measure) {
                if (c) {
                    e.measure(a.proxy(f.measure, f))
                } else {
                    e.measure(f.measure)
                }
            }
            if (f.passStarting) {
                if (c) {
                    e.passStarting(a.proxy(f.passStarting, f))
                } else {
                    e.passStarting(f.passStarting)
                }
            }
            if (f.passCompleted) {
                if (c) {
                    e.passCompleted(a.proxy(f.passCompleted, f))
                } else {
                    e.passCompleted(f.passCompleted)
                }
            }
            if (d[b]) {
                d[b](e)
            }
        },
        _seriesSetOption: function (d, c, e) {
            var b;
            switch (c) {
                case"legendItemVisibility":
                    switch (e) {
                        case"visible":
                            d.legendItemVisibility(0);
                            break;
                        case"collapsed":
                            d.legendItemVisibility(1);
                            break
                    }
                    return true;
                case"legendItemBadgeTemplate":
                case"legendItemTemplate":
                case"discreteLegendItemTemplate":
                case"markerTemplate":
                    this._setDataTemplate(d, c, e);
                    return true;
                case"transitionDuration":
                    d.transitionDuration(e);
                    return true;
                case"resolution":
                    d.resolution(e);
                    return true;
                case"title":
                    d.title(e);
                    return true;
                case"brush":
                    if (e === null) {
                        d.brush(null)
                    } else {
                        b = new a.ig.Brush();
                        b.fill(e);
                        d.brush(b)
                    }
                    return true;
                case"outline":
                    if (e === null) {
                        d.outline(null)
                    } else {
                        b = new a.ig.Brush();
                        b.fill(e);
                        d.outline(b)
                    }
                    return true;
                case"thickness":
                    d.thickness(e);
                    return true;
                case"markerType":
                    switch (e) {
                        case"unset":
                            d.markerType(0);
                            break;
                        case"none":
                            d.markerType(1);
                            break;
                        case"automatic":
                            d.markerType(2);
                            break;
                        case"circle":
                            d.markerType(3);
                            break;
                        case"triangle":
                            d.markerType(4);
                            break;
                        case"pyramid":
                            d.markerType(5);
                            break;
                        case"square":
                            d.markerType(6);
                            break;
                        case"diamond":
                            d.markerType(7);
                            break;
                        case"pentagon":
                            d.markerType(8);
                            break;
                        case"hexagon":
                            d.markerType(9);
                            break;
                        case"tetragram":
                            d.markerType(10);
                            break;
                        case"pentagram":
                            d.markerType(11);
                            break;
                        case"hexagram":
                            d.markerType(12);
                            break
                    }
                    return true;
                case"shapeMemberPath":
                    d.shapeMemberPath(e);
                    return true;
                case"shapeStyleSelector":
                    d.shapeStyleSelector(e);
                    return true;
                case"shapeStyle":
                    d.shapeStyle(e);
                    return true;
                case"markerBrush":
                    if (e === null) {
                        d.markerBrush(null)
                    } else {
                        b = new a.ig.Brush();
                        b.fill(e);
                        d.markerBrush(b)
                    }
                    return true;
                case"markerOutline":
                    if (e === null) {
                        d.markerOutline(null)
                    } else {
                        b = new a.ig.Brush();
                        b.fill(e);
                        d.markerOutline(b)
                    }
                    return true;
                case"markerCollisionAvoidance":
                    switch (e) {
                        case"none":
                            d.markerCollisionAvoidance(0);
                            break;
                        case"omit":
                            d.markerCollisionAvoidance(1);
                            break;
                        case"fade":
                            d.markerCollisionAvoidance(2);
                            break;
                        case"omitAndShift":
                            d.markerCollisionAvoidance(3);
                            break;
                        case"fadeAndShift":
                            d.markerCollisionAvoidance(4);
                            break
                    }
                    return true;
                case"xAxis":
                    d.xAxis(this._getAxisByName(e));
                    return true;
                case"yAxis":
                    d.yAxis(this._getAxisByName(e));
                    return true;
                case"xMemberPath":
                    d.xMemberPath(e);
                    return true;
                case"yMemberPath":
                    d.yMemberPath(e);
                    return true;
                case"trendLineType":
                    switch (e) {
                        case"none":
                            d.trendLineType(0);
                            break;
                        case"linearFit":
                            d.trendLineType(1);
                            break;
                        case"quadraticFit":
                            d.trendLineType(2);
                            break;
                        case"cubicFit":
                            d.trendLineType(3);
                            break;
                        case"quarticFit":
                            d.trendLineType(4);
                            break;
                        case"quinticFit":
                            d.trendLineType(5);
                            break;
                        case"logarithmicFit":
                            d.trendLineType(6);
                            break;
                        case"exponentialFit":
                            d.trendLineType(7);
                            break;
                        case"powerLawFit":
                            d.trendLineType(8);
                            break;
                        case"simpleAverage":
                            d.trendLineType(9);
                            break;
                        case"exponentialAverage":
                            d.trendLineType(10);
                            break;
                        case"modifiedAverage":
                            d.trendLineType(11);
                            break;
                        case"cumulativeAverage":
                            d.trendLineType(12);
                            break;
                        case"weightedAverage":
                            d.trendLineType(13);
                            break
                    }
                    return true;
                case"trendLineBrush":
                    if (e === null) {
                        d.trendLineBrush(null)
                    } else {
                        b = new a.ig.Brush();
                        b.fill(e);
                        d.trendLineBrush(b)
                    }
                    return true;
                case"trendLineThickness":
                    d.trendLineThickness(e);
                    return true;
                case"trendLinePeriod":
                    d.trendLinePeriod(e);
                    return true;
                case"trendLineZIndex":
                    d.trendLineZIndex(e);
                    return true;
                case"maximumMarkers":
                    d.maximumMarkers(e);
                    return true;
                case"radiusMemberPath":
                    d.radiusMemberPath(e);
                    return true;
                case"radiusScale":
                    d.radiusScale(this._getSizeScale(e));
                    return true;
                case"labelMemberPath":
                    d.labelMemberPath(e);
                    return true;
                case"fillMemberPath":
                    d.fillMemberPath(e);
                    return true;
                case"fillScale":
                    d.fillScale(this._getBrushScale(e));
                    return true;
                case"angleAxis":
                    d.angleAxis(this._getAxisByName(e));
                    return true;
                case"valueAxis":
                    d.valueAxis(this._getAxisByName(e));
                    return true;
                case"clipSeriesToBounds":
                    d.clipSeriesToBounds(e);
                    return true;
                case"valueMemberPath":
                    d.valueMemberPath(e);
                    return true;
                case"unknownValuePlotting":
                    switch (e) {
                        case"linearInterpolate":
                            d.unknownValuePlotting(0);
                            break;
                        case"dontPlot":
                            d.unknownValuePlotting(1);
                            break
                    }
                    return true;
                case"radiusX":
                    d.radiusX(e);
                    return true;
                case"radiusY":
                    d.radiusY(e);
                    return true;
                case"angleMemberPath":
                    d.angleMemberPath(e);
                    return true;
                case"radiusAxis":
                    d.radiusAxis(this._getAxisByName(e));
                    return true;
                case"useCartesianInterpolation":
                    d.useCartesianInterpolation(e);
                    return true;
                case"negativeBrush":
                    if (e === null) {
                        d.negativeBrush(null)
                    } else {
                        b = new a.ig.Brush();
                        b.fill(e);
                        d.negativeBrush(b)
                    }
                    return true;
                case"splineType":
                    switch (e) {
                        case"natural":
                            d.splineType(0);
                            break;
                        case"clamped":
                            d.splineType(1);
                            break
                    }
                    return true;
                case"lowMemberPath":
                    d.lowMemberPath(e);
                    return true;
                case"highMemberPath":
                    d.highMemberPath(e);
                    return true;
                case"openMemberPath":
                    d.openMemberPath(e);
                    return true;
                case"closeMemberPath":
                    d.closeMemberPath(e);
                    return true;
                case"volumeMemberPath":
                    d.volumeMemberPath(e);
                    return true;
                case"ignoreFirst":
                    d.ignoreFirst(e);
                    return true;
                case"period":
                    d.period(e);
                    return true;
                case"shortPeriod":
                    d.shortPeriod(e);
                    return true;
                case"longPeriod":
                    d.longPeriod(e);
                    return true;
                case"trianglesSource":
                    d.trianglesSource(e);
                    return true;
                case"triangleVertexMemberPath1":
                    d.triangleVertexMemberPath1(e);
                    return true;
                case"triangleVertexMemberPath2":
                    d.triangleVertexMemberPath2(e);
                    return true;
                case"triangleVertexMemberPath3":
                    d.triangleVertexMemberPath3(e);
                    return true;
                case"colorScale":
                    d.colorScale(this._getColorScale(e));
                    return true;
                case"colorMemberPath":
                    d.colorMemberPath(e);
                    return true;
                case"visibleFromScale":
                    d.visibleFromScale(e);
                    return true;
                case"longitudeMemberPath":
                    d.longitudeMemberPath(e);
                    return true;
                case"latitudeMemberPath":
                    d.latitudeMemberPath(e);
                    return true;
                case"valueResolver":
                    d.valueResolver(this._getValueResolver(e));
                    return true;
                case"shapeFilterResolution":
                    d.shapeFilterResolution(e);
                    return true;
                case"useBruteForce":
                    d.useBruteForce(e);
                    return true;
                case"progressiveLoad":
                    d.progressiveLoad(e);
                    return true;
                case"mouseOverEnabled":
                    d.mouseOverEnabled(e);
                    return true;
                case"useSquareCutoffStyle":
                    d.useSquareCutoffStyle(e);
                    return true;
                case"heatMinimum":
                    d.heatMinimum(e);
                    return true;
                case"heatMaximum":
                    d.heatMaximum(e);
                    return true;
                case"multiplier":
                    d.multiplier(e);
                    return true;
                case"smoothingPeriod":
                    d.smoothingPeriod(e);
                    return true;
                case"triggerPeriod":
                    d.triggerPeriod(e);
                    return true;
                case"signalPeriod":
                    d.signalPeriod(e);
                    return true
            }
            return false
        },
        _getValueResolver: function (b) {
            var c;
            if (b.type === undefined || b.type === "linear") {
                c = new a.ig.LinearContourValueResolver()
            }
            if (b.valueCount) {
                c.valueCount(b.valueCount)
            }
            return c
        },
        _getSizeScale: function (c) {
            var b = new a.ig.SizeScale();
            if (c.minimumValue) {
                b.minimumValue(c.minimumValue)
            }
            if (c.maximumValue) {
                b.maximumValue(c.maximumValue)
            }
            if (c.isLogarithmic) {
                b.isLogarithmic(c.isLogarithmic)
            }
            if (c.logarithmBase) {
                b.logarithmBase(c.logarithmBase)
            }
            return b
        },
        _getColorScale: function (d) {
            var c = "customPalette", b = null;
            if (d.type) {
                c = d.type
            }
            switch (c) {
                case"customPalette":
                    b = new a.ig.CustomPaletteColorScale();
                    break
            }
            if (b) {
                if (d.minimumValue) {
                    b.minimumValue(d.minimumValue)
                }
                if (d.maximumValue) {
                    b.maximumValue(d.maximumValue)
                }
                if (d.interpolationMode) {
                    switch (d.interpolationMode) {
                        case"select":
                            b.interpolationMode(0);
                            break;
                        case"interpolateRGB":
                            b.interpolationMode(1);
                            break;
                        case"interpolateHSV":
                            b.interpolationMode(2);
                            break
                    }
                }
                if (d.palette) {
                    b.providePalette(d.palette)
                }
            }
            return b
        },
        _getBrushScale: function (j) {
            var h = "value", g = null, f, b, e, d, c;
            if (j.type) {
                h = j.type
            }
            switch (h) {
                case"value":
                    g = new a.ig.ValueBrushScale();
                    break;
                case"customPalette":
                    g = new a.ig.CustomPaletteBrushScale();
                    break
            }
            if (g) {
                if (j.brushes) {
                    f = true;
                    d = j.brushes;
                    if (( typeof d[0] === "string" && d[0] === "HSV") || d[0] === "RGB") {
                        if (d[0] === "HSV") {
                            f = false
                        }
                        d = d.slice(1)
                    }
                    c = new a.ig.BrushCollection();
                    for (e = 0; e < d.length; e++) {
                        b = new a.ig.Brush();
                        b.fill(d[e]);
                        c.add(b)
                    }
                    g.brushes(c)
                }
                if (j.brushSelectionMode) {
                    switch (j.brushSelectionMode) {
                        case"select":
                            g.brushSelectionMode(0);
                            break;
                        case"interpolate":
                            g.brushSelectionMode(1);
                            break
                    }
                }
                if (j.minimumValue) {
                    g.minimumValue(j.minimumValue)
                }
                if (j.maximumValue) {
                    g.maximumValue(j.maximumValue)
                }
                if (j.isLogarithmic) {
                    g.isLogarithmic(j.isLogarithmic)
                }
                if (j.logarithmBase) {
                    g.logarithmBase(j.logarithmBase)
                }
            }
            return g
        },
        _setAxisOption: function (c, d, e) {
            var b;
            switch (d) {
                case"strokeThickness":
                case"majorStrokeThickness":
                case"minorStrokeThickness":
                case"isInverted":
                case"crossingValue":
                case"label":
                case"gap":
                case"overlap":
                case"interval":
                case"startAngleOffset":
                case"minimumValue":
                case"maximumValue":
                case"referenceValue":
                case"isLogarithmic":
                case"logarithmBase":
                case"radiusExtentScale":
                case"innerRadiusExtentScale":
                case"dateTimeMemberPath":
                case"formatLabel":
                    if (c[d]) {
                        c[d](e)
                    }
                    return true;
                case"stroke":
                    b = new a.ig.Brush();
                    b.fill(e);
                    c.stroke(b);
                    return true;
                case"strip":
                    b = new a.ig.Brush();
                    b.fill(e);
                    c.strip(b);
                    return true;
                case"majorStroke":
                    b = new a.ig.Brush();
                    b.fill(e);
                    c.majorStroke(b);
                    return true;
                case"minorStroke":
                    b = new a.ig.Brush();
                    b.fill(e);
                    c.minorStroke(b);
                    return true;
                case"scaleMode":
                    switch (e) {
                        case"linear":
                            c.scaleMode(0);
                            break;
                        case"logarithmic":
                            c.scaleMode(1);
                            break
                    }
                    return true
            }
        },
        _setCoreAxisOption: function (b, c, h) {
            var d = null, g, f, e = this;
            switch (c) {
                case"crossingAxis":
                    if (h) {
                        f = this._getAxisByName(h);
                        if (f) {
                            b.crossingAxis(f)
                        } else {
                            this.widget._pendingCrossingAxes.push(function () {
                                var i = e._getAxisByName(h);
                                if (i) {
                                    b.crossingAxis(i)
                                }
                            })
                        }
                    } else {
                        b.crossingAxis(null)
                    }
                    break;
                case"labelLocation":
                    d = b.labelSettings();
                    if (d === null) {
                        d = new a.ig.AxisLabelSettings()
                    }
                    switch (h) {
                        case"outsideTop":
                            d.location(0);
                            break;
                        case"outsideBottom":
                            d.location(1);
                            break;
                        case"outsideLeft":
                            d.location(2);
                            break;
                        case"outsideRight":
                            d.location(3);
                            break;
                        case"insideTop":
                            d.location(4);
                            break;
                        case"insideBottom":
                            d.location(5);
                            break;
                        case"insideLeft":
                            d.location(6);
                            break;
                        case"insideRight":
                            d.location(7);
                            break;
                        default:
                            break
                    }
                    if (!b.labelSettings()) {
                        b.labelSettings(d)
                    }
                    break;
                case"labelVisibility":
                    d = b.labelSettings();
                    if (d === null) {
                        d = new a.ig.AxisLabelSettings()
                    }
                    switch (h) {
                        case"visible":
                            d.visibility(0);
                            break;
                        case"collapsed":
                            d.visibility(1);
                            break;
                        default:
                            break
                    }
                    if (!b.labelSettings()) {
                        b.labelSettings(d)
                    }
                    break;
                case"labelExtent":
                    if (h === null) {
                        h = NaN
                    }
                    d = b.labelSettings();
                    if (d === null) {
                        d = new a.ig.AxisLabelSettings()
                    }
                    d.extent(h);
                    if (!b.labelSettings()) {
                        b.labelSettings(d)
                    }
                    break;
                case"labelAngle":
                    if (h === null) {
                        h = 0
                    }
                    d = b.labelSettings();
                    if (d === null) {
                        d = new a.ig.AxisLabelSettings()
                    }
                    d.angle(h);
                    if (!b.labelSettings()) {
                        b.labelSettings(d)
                    }
                    break;
                case"labelTextStyle":
                    d = b.labelSettings();
                    if (d === null) {
                        d = new a.ig.AxisLabelSettings()
                    }
                    d.textStyle(h);
                    if (!b.labelSettings()) {
                        b.labelSettings(d)
                    }
                    break;
                case"labelTextColor":
                    g = new a.ig.Brush();
                    g.fill(h);
                    if (h === null) {
                        g = null
                    }
                    d = b.labelSettings();
                    if (d === null) {
                        d = new a.ig.AxisLabelSettings()
                    }
                    d.textColor(g);
                    if (!b.labelSettings()) {
                        b.labelSettings(d)
                    }
                    break
            }
        },
        _setOption: function (d, e) {
            if (d === "dataSource" || d === "dataSourceUrl" || (e[0] !== undefined && (e[0].dataSource !== undefined || e[0].dataSourceUrl !== undefined))) {
                var b = {}, c;
                if (d === "dataSource" || d === "dataSourceUrl") {
                    b.dataSource = e;
                    c = this.widget._containerSourceID
                } else {
                    b = e[0];
                    c = e[0].name;
                    if (this.widget._target && this.widget._target.name() === c) {
                        this.widget._target = null
                    }
                }
                this.widget._setCoreCallbackOptions = {
                    key: d,
                    value: e
                };
                this._setupDataSource(b, this._chartDataCallBack);
                if (c === undefined || c === null) {
                    c = this.widget._containerSourceID
                }
                this.widget.dataSources[c].dataBind()
            } else {
                if (e[0] !== undefined && (e[0].shapeDataSource !== undefined || e[0].triangulatedDataSource !== undefined)) {
                    this.widget._initConverter(e[0], this._convDataCallback);
                    this.widget._setCoreCallbackOptions = {
                        key: d,
                        value: e
                    }
                } else {
                    this._setOptionAfterInit(d, e)
                }
            }
        },
        _chartDataCallBack: function (f, c, b) {
            var d = this.widget._setCoreCallbackOptions.key, g = this.widget._setCoreCallbackOptions.value;
            if (!f) {
                return false
            }
            this._setItemsSource(this.widget, this._getNotifyTarget(b.settings.id), b.settings.id);
            if (d === "series" || d === "axes") {
                this._setOptionAfterInit(d, g)
            }
        },
        _convDataCallback: function () {
            var b = this.settings.callee, c = this.settings.id, d = b.widget._setCoreCallbackOptions.key, e = b.widget._setCoreCallbackOptions.value;
            b._setItemsSource(b.widget, b._getNotifyTarget(c), c);
            if (d === "series") {
                b._setOptionAfterInit(d, e)
            }
        },
        _setOptionAfterInit: function (b, c) {
            if (!this._setWidgetOption(this.widget._chart, b, c)) {
                this._setCoreWidgetOption(this.widget._chart, b, c)
            } else {
                this.widget.options[b] = c
            }
        },
        _setItemsSource: function (e, d, c) {
            var b = e.dataSources[c];
            if (d === e._chart) {
                if (b !== null) {
                    e._chart.setWidgetLevelDataSource(b)
                } else {
                    e._chart.removeWidgetLevelDataSource()
                }
            } else {
                if (b !== null) {
                    e._chart.setSpecificDataSource(c, b)
                } else {
                    e._chart.removeSpecificDataSource(c, false)
                }
            }
        },
        _initialDataBind: function () {
            var b = this._initDataSources(), c = this;
            a.each(b, function (d, e) {
                if (typeof c.widget.dataSources[d].dataBind === "function") {
                    c.widget.dataSources[d].dataBind()
                }
            })
        },
        _initDataSources: function () {
            var d = this, f = this.widget, c = this.widget.options, b, e;
            f.dataSources = {};
            f.dsCount = 0;
            if (c.dataSource || c.dataSourceUrl) {
                f.dsCount++;
                d._setupDataSource(c, this._initCallback)
            }
            if (c.shapeDataSource || c.triangulationDataSource) {
                f.dsCount++;
                d.widget._initConverter(c, d._converterCallback)
            }
            if (c.axes) {
                b = c.axes;
                a.each(b, function (g, h) {
                    if (h.dataSource || h.dataSourceUrl) {
                        f.dsCount++;
                        d._setupDataSource(h, d._initCallback)
                    }
                })
            }
            if (c.series) {
                e = c.series;
                a.each(e, function (g, h) {
                    if (h.dataSource || h.dataSourceUrl) {
                        f.dsCount++;
                        d._setupDataSource(h, d._initCallback)
                    }
                    if (h.shapeDataSource || h.triangulationDataSource) {
                        f.dsCount++;
                        d.widget._initConverter(h, d._converterCallback)
                    }
                })
            }
            return f.dataSources
        },
        _isCanvasSupported: function () {
            var b = document.createElement("canvas");
            return !!(b.getContext && b.getContext("2d"))
        },
        _renderUnsupportedBrowser: function (c) {
            if (c._trigger(c.events.browserNotSupported)) {
                var d = a("<div></div>").addClass(c.css.unsupportedBrowserClass).appendTo(c.element), e, b;
                if (a.browser.msie) {
                    b = "Internet Explorer " + a.browser.version
                } else {
                    if (a.browser.opera) {
                        b = "Opera " + a.browser.version
                    } else {
                        if (a.browser.webkit) {
                            b = "Webkit " + a.browser.version
                        } else {
                            if (a.browser.mozilla) {
                                b = "Mozilla Firefox " + a.browser.version
                            } else {
                                b = a.browser.version
                            }
                        }
                    }
                }
                a("<div></div>").addClass("ui-chart-current-browser-label").html(a.ig.Chart.locale.currentBrowser.replace("{0}", b)).appendTo(d);
                a("<div></div>").addClass("ui-chart-non-html5-text").html(a.ig.Chart.locale.unsupportedBrowser).appendTo(d);
                e = a("<ul></ul>").addClass("ui-chart-browsers-list").appendTo(d);
                a("<a></a>").attr("href", a.ig.Chart.locale.chromeDownload).attr("target", "_blank").addClass("ui-chart-chrome-icon").html(a.ig.Chart.locale.chrome8).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(e));
                a("<a></a>").attr("href", a.ig.Chart.locale.firefoxDownload).attr("target", "_blank").addClass("ui-chart-firefox-icon").html(a.ig.Chart.locale.firefox36).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(e));
                a("<a></a>").attr("href", a.ig.Chart.locale.operaDownload).attr("target", "_blank").addClass("ui-chart-Opera-icon").html(a.ig.Chart.locale.opera11).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(e));
                a("<a></a>").attr("href", a.ig.Chart.locale.safariDownload).attr("target", "_blank").addClass("ui-chart-safari-icon").html(a.ig.Chart.locale.safari5).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(e));
                a("<a></a>").attr("href", a.ig.Chart.locale.ieDownload).attr("target", "_blank").addClass("ui-chart-ie-icon").html(a.ig.Chart.locale.ie9).appendTo(a("<li></li>").addClass("ui-corner-all").appendTo(e));
                c.element.addClass("ui-chart-non-html5");
                c.element.css("width", c.options.width);
                c.element.css("height", c.options.height)
            }
        },
        _drawCanvas: function (b, d, c) {
            var e = document.createElement("canvas"), f;
            e.width = d;
            e.height = c;
            e.style.width = d + "px";
            e.style.height = c + "px";
            f = e.getContext("2d");
            a.each(b, function (h, g) {
                f.drawImage(g, 0, 0, d, c)
            });
            return e
        },
        _getLegendElements: function () {
            var c = this.widget.options, b = [];
            if (this.widget.options.legend) {
                b.push(a("#" + this.widget.options.legend.element))
            }
            if (c.series) {
                a.each(c.series, function (d, e) {
                    if (e && e.legend) {
                        b.push(a("#" + e.legend.element))
                    }
                })
            }
            return b
        },
        _print: function () {
            var e = document, i = this.widget, f = this._getLegendElements(), c = a("#" + this.widget.id()), g = [], h = [], b = e.body, d = b.childNodes;
            if (i._isPrinting) {
                return
            }
            i._isPrinting = true;
            a.each(d, function (j, k) {
                if (k.nodeType === 1) {
                    g[j] = k.style.display;
                    k.style.display = "none"
                }
            });
            h[0] = (c.parent());
            a(b).append(c);
            a.each(f, function (j, k) {
                h[j + 1] = k.parent();
                a(b).append(k)
            });
            window.print();
            setTimeout(function () {
                i._isPrinting = false;
                h[0].prepend(c);
                a.each(f, function (j, k) {
                    h[j + 1].prepend(k)
                });
                a.each(d, function (j, k) {
                    if (k.nodeType === 1) {
                        k.style.display = g[j]
                    }
                })
            }, 1000)
        },
        _getImage: function (f, d, b) {
            var c, e = document.createElement("img");
            f = f || a("#" + b.id() + "_chart_container").width();
            d = d || a("#" + b.id() + "_chart_container").height();
            c = this._drawCanvas(a("#" + b.id() + " canvas"), f, d);
            e.src = c.toDataURL("image/png");
            return e
        },
        _renderChartContainer: function (b) {
            var d = b.options, c;
            if (!b._isRendered) {
                c = a("<div id='" + b.id() + "_chart_container'></div>").appendTo(b.element);
                c.addClass(b.css.chart || b.css.map);
                c.css("width", d.width);
                c.css("height", d.height);
                b._chart.provideContainer(c);
                b._chartElement = c
            }
        },
        _setLegend: function (b, d) {
            var c;
            if (d !== null) {
                d.owner = this.widget;
                if (d.type === undefined) {
                    d.type = (this.widget.widgetName === "igPieChart") ? "item" : "legend"
                }
                if (b.legend() === null) {
                    if (a("#" + d.element).data("igChartLegend") || (d.data && d.data("igChartLegend"))) {
                        c = (!d.element) ? d.data("igChartLegend") : a("#" + d.element).data("igChartLegend");
                        c.options.owner = this.widget.options;
                        c._owner = this.widget
                    } else {
                        c = a("#" + d.element).igChartLegend(d).data("igChartLegend")
                    }
                    b.legend(c.legend)
                } else {
                    a("#" + b.legend().name()).igChartLegend(d)
                }
            } else {
                if (b.legend() !== null && a("#" + b.legend().name()).length > 0) {
                    a("#" + b.legend().name()).igChartLegend("destroy")
                }
            }
        },
        _mergeDataSourceSettings: function (c, d) {
            if (!c) {
                return d
            }
            if (!d) {
                return c
            }
            var e = c.dataSource, f = d.dataSource, b;
            if (e && (a.type(e) === "array" || a.type(e) === "object")) {
                c.dataSource = null
            }
            if (f && (a.type(f) === "array" || a.type(f) === "object")) {
                d.dataSource = null
            }
            b = a.extend(true, {}, c, d);
            if (f && (a.type(f) === "array" || a.type(f) === "object")) {
                d.dataSource = f;
                b.dataSource = f
            } else {
                if (e && (a.type(e) === "array" || a.type(e) === "object")) {
                    c.dataSource = e
                }
            }
            if (!f && f !== undefined) {
                b.dataSource = null
            }
            return b
        },
        _mergeIntoWithDataSource: function (d, e) {
            var b, c, h, f = null, g = null;
            if (d.dataSource) {
                b = d.dataSource
            }
            if (e.dataSource) {
                c = e.dataSource
            }
            h = false;
            if (!e.dataSource && e.dataSource !== undefined) {
                h = true
            }
            d.dataSource = null;
            e.dataSource = null;
            a.extend(true, d, e);
            if (b) {
                d.dataSource = b
            }
            if (c) {
                e.dataSource = c;
                d.dataSource = c
            }
            if (d.dataSource) {
                if (d.dataSource && d.dataSource.settings) {
                    f = d.dataSource.settings
                }
                if (e.dataSource && e.dataSource.settings) {
                    g = e.dataSource.settings
                }
                d.dataSource.settings = this._mergeDataSourceSettings(f, g)
            }
        },
        _mergeIntoNewWithDataSource: function (e, f) {
            var b, c, i, d, g = null, h = null;
            if (e.dataSource) {
                b = e.dataSource
            }
            if (f.dataSource) {
                c = f.dataSource
            }
            i = false;
            if (!f.dataSource && f.dataSource !== undefined) {
                i = true
            }
            e.dataSource = null;
            f.dataSource = null;
            d = a.extend(true, {}, e, f);
            if (b) {
                e.dataSource = b;
                d.dataSource = b
            }
            if (c) {
                f.dataSource = c;
                d.dataSource = c
            }
            if (d.dataSource) {
                if (e.dataSource && e.dataSource.settings) {
                    g = e.dataSource.settings
                }
                if (f.dataSource && f.dataSource.settings) {
                    h = f.dataSource.settings
                }
                d.dataSource.settings = this._mergeDataSourceSettings(g, h)
            }
            return d
        },
        _addTooltip: function (d, c, b) {
            if (typeof d._chart.toolTip === "function") {
                if (d._tooltip[d.id()] === undefined) {
                    d._tooltip[d.id()] = a('<div id="' + d.id() + '_tooltip" class="' + b + '"></div>')
                }
                this._bindTooltipEvents(d, d._tooltip[d.id()]);
                d._chart.toolTip(d._tooltip[d.id()])
            } else {
                if (d._tooltip[c.name()] === undefined) {
                    d._tooltip[c.name()] = a('<div id="' + c.name() + '_tooltip" class="' + b + '"></div>')
                }
                this._bindTooltipEvents(d, d._tooltip[c.name()]);
                c.toolTip(d._tooltip[c.name()])
            }
        },
        _removeTooltip: function (c, b) {
            if (typeof c._chart.toolTip === "function") {
                if (c._tooltip[c.id()] !== undefined) {
                    this._removeTooltipEvents(c, c._tooltip[c.id()]);
                    delete c._tooltip[c.id()];
                    c._chart.toolTip(null)
                }
            } else {
                if (c._tooltip[b.name()] !== undefined) {
                    this._removeTooltipEvents(c, c._tooltip[b.name()]);
                    delete c._tooltip[b.name()];
                    b.toolTip(null)
                }
            }
        },
        _bindTooltipEvents: function (b, c) {
            c.updateToolTip = a.ig.Delegate.prototype.combine(c.updateToolTip, jQuery.proxy(this._fireToolTip_updateToolTip, this));
            c.hideToolTip = a.ig.Delegate.prototype.combine(c.hideToolTip, jQuery.proxy(this._fireToolTip_hideToolTip, this))
        },
        _removeTooltipEvents: function (b, c) {
            delete c.updateToolTip;
            delete c.hideToolTip
        },
        _bindMapEvents: function (b) {
            b.seriesCursorMouseMove = a.ig.Delegate.prototype.combine(b.seriesCursorMouseMove, jQuery.proxy(this._fireChart_seriesCursorMouseMove, this));
            b.seriesMouseLeftButtonDown = a.ig.Delegate.prototype.combine(b.seriesMouseLeftButtonDown, jQuery.proxy(this._fireChart_seriesMouseLeftButtonDown, this));
            b.seriesMouseLeftButtonUp = a.ig.Delegate.prototype.combine(b.seriesMouseLeftButtonUp, jQuery.proxy(this._fireChart_seriesMouseLeftButtonUp, this));
            b.seriesMouseMove = a.ig.Delegate.prototype.combine(b.seriesMouseMove, jQuery.proxy(this._fireChart_seriesMouseMove, this));
            b.seriesMouseEnter = a.ig.Delegate.prototype.combine(b.seriesMouseEnter, jQuery.proxy(this._fireChart_seriesMouseEnter, this));
            b.seriesMouseLeave = a.ig.Delegate.prototype.combine(b.seriesMouseLeave, jQuery.proxy(this._fireChart_seriesMouseLeave, this));
            b.windowRectChanged = a.ig.Delegate.prototype.combine(b.windowRectChanged, jQuery.proxy(this._fireChart_windowRectChanged, this));
            b.actualWindowRectChanged = a.ig.Delegate.prototype.combine(b.actualWindowRectChanged, jQuery.proxy(this._fireChart_actualWindowRectChanged, this));
            b.gridAreaRectChanged = a.ig.Delegate.prototype.combine(b.gridAreaRectChanged, jQuery.proxy(this._fireChart_gridAreaRectChanged, this));
            b.refreshCompleted = a.ig.Delegate.prototype.combine(b.refreshCompleted, jQuery.proxy(this._fireChart_refreshCompleted, this))
        },
        _bindSeriesEvents: function (b) {
            if (b.basedOnColumns !== undefined) {
                b.basedOnColumns(a.ig.Delegate.prototype.combine(b.basedOnColumns(), jQuery.proxy(this._fireChart_basedOnColumns, this)))
            }
            if (b.indicator !== undefined) {
                b.indicator(a.ig.Delegate.prototype.combine(b.indicator(), jQuery.proxy(this._fireChart_indicator, this)))
            }
            if (b.typical !== undefined) {
                b.typical = a.ig.Delegate.prototype.combine(b.typical, jQuery.proxy(this._fireChart_typical, this))
            }
            if (b.typicalBasedOn !== undefined) {
                b.typicalBasedOn = a.ig.Delegate.prototype.combine(b.typicalBasedOn, jQuery.proxy(this._fireChart_typicalBasedOn, this))
            }
            if (b.triangulationStatusChanged !== undefined) {
                b.triangulationStatusChanged = a.ig.Delegate.prototype.combine(b.triangulationStatusChanged, jQuery.proxy(this._fireMap_triangulationStatusChanged, this))
            }
            if (b.progressiveLoadStatusChanged !== undefined) {
                b.progressiveLoadStatusChanged = a.ig.Delegate.prototype.combine(b.progressiveLoadStatusChanged, jQuery.proxy(this._fireChart_progressiveLoadStatusChanged, this))
            }
            if (b.scatterMouseOver !== undefined) {
                b.scatterMouseOver = a.ig.Delegate.prototype.combine(b.scatterMouseOver, jQuery.proxy(this._fireChart_scatterMouseOver, this))
            }
        },
        _getWidgetName: function () {
            switch (this.widget.widgetName) {
                case"igPieChart":
                case"igDataChart":
                    return "chart";
                case"igMap":
                    return "map"
            }
        },
        _fireChart_progressiveLoadStatusChanged: function (d, c) {
            var b = {}, g = this._getWidgetName(), f = this.widget._seriesOpt[d.name()];
            b.currentStatus = c.currentStatus();
            b[g] = this.widget.options;
            b.series = f;
            this.widget._trigger("progressiveLoadStatusChanged", null, b)
        },
        _fireChart_scatterMouseOver: function (d, c) {
            var b = {}, f = this._getWidgetName();
            b[f] = this.widget.options;
            b.args = c;
            b.series = d;
            this.widget._trigger("scatterMouseOver", null, b)
        },
        _fireChart_typicalBasedOn: function (h, c) {
            var b = {}, k = this._getWidgetName(), j = this.widget._seriesOpt[h.name()], d, f = this.widget._series[h.name()], g = this;
            b[k] = this.widget.options;
            b.series = j;
            b.position = c.position();
            b.count = c.count();
            b.getDataSource = function () {
                return g._flattenDataSource(f, c.dataSource())
            };
            b.basedOn = [];
            b.minimumValue = c.dataSource().minimumValue();
            b.maximumValue = c.dataSource().maximumValue();
            this.widget._trigger("typicalBasedOn", null, b);
            if (b.basedOn !== null && b.basedOn.length && b.basedOn.length > 0) {
                for (d = 0; d < b.basedOn.length; d++) {
                    c.basedOn().add(b.basedOn[d])
                }
            }
            if (!isNaN(b.minimum)) {
                c.dataSource().minimumValue(b.minimumValue)
            }
            if (!isNaN(b.maximum)) {
                c.dataSource().maximumValue(b.maximumValue)
            }
        },
        _fireChart_basedOnColumns: function (h, c) {
            var b = {}, k = this._getWidgetName(), j = this.widget._seriesOpt[h.name()], d, f = this.widget._series[h.name()], g = this;
            b[k] = this.widget.options;
            b.series = j;
            b.position = c.position();
            b.count = c.count();
            b.getDataSource = function () {
                return g._flattenDataSource(f, c.dataSource())
            };
            b.basedOn = [];
            b.minimumValue = c.dataSource().minimumValue();
            b.maximumValue = c.dataSource().maximumValue();
            this.widget._trigger("basedOn", null, b);
            if (b.basedOn !== null && b.basedOn.length && b.basedOn.length > 0) {
                for (d = 0; d < b.basedOn.length; d++) {
                    c.basedOn().add(b.basedOn[d])
                }
            }
            if (!isNaN(b.minimum)) {
                c.dataSource().minimumValue(b.minimumValue)
            }
            if (!isNaN(b.maximum)) {
                c.dataSource().maximumValue(b.maximumValue)
            }
        },
        _fireChart_indicator: function (g, c) {
            var b = {}, i = this._getWidgetName(), h = this.widget._seriesOpt[g.name()], d = this.widget._series[g.name()], f = this;
            b[i] = this.widget.options;
            b.series = h;
            b.position = c.position();
            b.count = c.count();
            b.getDataSource = function () {
                return f._flattenDataSource(d, c.dataSource())
            };
            b.basedOn = c.basedOn();
            b.minimumValue = c.dataSource().minimumValue();
            b.maximumValue = c.dataSource().maximumValue();
            this.widget._trigger("indicator", null, b);
            if (!isNaN(b.minimum)) {
                c.dataSource().minimumValue(b.minimumValue)
            }
            if (!isNaN(b.maximum)) {
                c.dataSource().maximumValue(b.maximumValue)
            }
        },
        _fireChart_typical: function (g, c) {
            var b = {}, k = this._getWidgetName(), h = this.widget._seriesOpt[g.name()], d = this.widget._series[g.name()], f = this, j, i;
            b[k] = this.widget.options;
            b.series = h;
            b.position = c.position();
            b.count = c.count();
            b.getDataSource = function () {
                var e = f._flattenDataSource(d, c.dataSource());
                return e
            };
            b.basedOn = c.basedOn();
            b.minimumValue = c.dataSource().minimumValue();
            b.maximumValue = c.dataSource().maximumValue();
            b.typicalColumn = [];
            i = c.dataSource().typicalColumn().basedOn();
            this.widget._trigger("typical", null, b);
            if (b.typicalColumn !== null && b.typicalColumn.length > 0) {
                j = new a.ig.List$1(Number, 1, b.typicalColumn);
                c.dataSource().typicalColumn(new a.ig.CalculatedColumn(1, j, i))
            } else {
                c.dataSource().typicalColumn(null)
            }
            if (!isNaN(b.minimum)) {
                c.dataSource().minimumValue(b.minimumValue)
            }
            if (!isNaN(b.maximum)) {
                c.dataSource().maximumValue(b.maximumValue)
            }
        },
        _flattenDataSource: function (h, c) {
            var g = {}, f = h.getOpenColumnAsArray(), d = h.getHighColumnAsArray(), e = h.getLowColumnAsArray(), b = h.getCloseColumnAsArray(), i = h.getVolumeColumnAsArray();
            g.indicatorColumn = c.indicatorColumn().asArrayList();
            g.openColumn = f;
            g.highColumn = d;
            g.lowColumn = e;
            g.closeColumn = b;
            g.volumeColumn = i;
            return g
        },
        _fireMap_triangulationStatusChanged: function (d, c) {
            var b = {}, g = this._getWidgetName(), f = this.widget._seriesOpt[d.name()];
            b.currentStatus = c.currentStatus();
            b[g] = this.widget.options;
            b.series = f;
            this.widget._trigger("triangulationStatusChanged", null, b)
        },
        _bindPieChartEvents: function (b) {
            b.sliceClick = a.ig.Delegate.prototype.combine(b.sliceClick, jQuery.proxy(this._firePieChart_sliceClick, this))
        },
        _firePieChart_sliceClick: function (g, c) {
            var b = {}, d, f;
            b.slice = {};
            b.slice.item = c.slice().dataContext();
            d = c.slice().isExploded();
            f = c.slice().isSelected();
            b.slice.isExploded = d;
            b.slice.isSelected = f;
            b.chart = this.widget.options;
            this.widget._trigger("sliceClick", null, b);
            if (b.slice.isExploded !== d) {
                c.slice().isExploded(b.slice.isExploded)
            }
            if (b.slice.isSelected !== f) {
                c.slice().isSelected(b.slice.isSelected)
            }
        },
        _bindDataChartEvents: function (b) {
            b.seriesCursorMouseMove = a.ig.Delegate.prototype.combine(b.seriesCursorMouseMove, jQuery.proxy(this._fireChart_seriesCursorMouseMove, this));
            b.seriesMouseLeftButtonDown = a.ig.Delegate.prototype.combine(b.seriesMouseLeftButtonDown, jQuery.proxy(this._fireChart_seriesMouseLeftButtonDown, this));
            b.seriesMouseLeftButtonUp = a.ig.Delegate.prototype.combine(b.seriesMouseLeftButtonUp, jQuery.proxy(this._fireChart_seriesMouseLeftButtonUp, this));
            b.seriesMouseMove = a.ig.Delegate.prototype.combine(b.seriesMouseMove, jQuery.proxy(this._fireChart_seriesMouseMove, this));
            b.seriesMouseEnter = a.ig.Delegate.prototype.combine(b.seriesMouseEnter, jQuery.proxy(this._fireChart_seriesMouseEnter, this));
            b.seriesMouseLeave = a.ig.Delegate.prototype.combine(b.seriesMouseLeave, jQuery.proxy(this._fireChart_seriesMouseLeave, this));
            b.windowRectChanged = a.ig.Delegate.prototype.combine(b.windowRectChanged, jQuery.proxy(this._fireChart_windowRectChanged, this));
            b.actualWindowRectChanged = a.ig.Delegate.prototype.combine(b.actualWindowRectChanged, jQuery.proxy(this._fireChart_actualWindowRectChanged, this));
            b.gridAreaRectChanged = a.ig.Delegate.prototype.combine(b.gridAreaRectChanged, jQuery.proxy(this._fireChart_gridAreaRectChanged, this));
            b.refreshCompleted = a.ig.Delegate.prototype.combine(b.refreshCompleted, jQuery.proxy(this._fireChart_refreshCompleted, this));
            b.axisRangeChanged = a.ig.Delegate.prototype.combine(b.axisRangeChanged, jQuery.proxy(this._fireChart_axisRangeChanged, this))
        },
        _getChartEvt: function (c) {
            var b = {}, g = this.widget._seriesOpt ? this.widget._seriesOpt[c.series().name()] : this.widget.options, f, h = this._getWidgetName(), d = null;
            b[h] = this.widget.options;
            b.series = g;
            b.item = c.item();
            if (c.series && c.series() !== null) {
                d = c.series()
            }
            if (d !== null && d.hostedSeries && d.hostedSeries() !== null) {
                d = d.hostedSeries()
            }
            if (c.actualItemBrush && c.actualItemBrush() !== null) {
                b.actualItemBrush = c.actualItemBrush().fill()
            } else {
                if (d !== null && d.actualMarkerBrush && d.actualMarkerBrush() !== null) {
                    b.actualItemBrush = d.actualMarkerBrush().fill()
                }
            }
            if (d !== null && d.actualBrush && d.actualBrush() !== null) {
                b.actualSeriesBrush = d.actualBrush().fill()
            }
            if (c.originalEvent && c.originalEvent() !== null && c.originalEvent().position && c.originalEvent().position() !== null) {
                f = c.originalEvent().position();
                b.positionX = f.__x;
                b.positionY = f.__y
            }
            return b
        },
        _fireChart_seriesCursorMouseMove: function (d, c) {
            var b = this._getChartEvt(c);
            this.widget._trigger("seriesCursorMouseMove", null, b)
        },
        _fireChart_seriesMouseLeftButtonDown: function (d, c) {
            var b = this._getChartEvt(c);
            this.widget._trigger("seriesMouseLeftButtonDown", null, b)
        },
        _fireChart_seriesMouseLeftButtonUp: function (d, c) {
            var b = this._getChartEvt(c);
            this.widget._trigger("seriesMouseLeftButtonUp", null, b)
        },
        _fireChart_seriesMouseMove: function (d, c) {
            var b = this._getChartEvt(c);
            this.widget._trigger("seriesMouseMove", null, b)
        },
        _fireChart_seriesMouseEnter: function (d, c) {
            var b = this._getChartEvt(c);
            this.widget._trigger("seriesMouseEnter", null, b)
        },
        _fireChart_seriesMouseLeave: function (d, c) {
            var b = this._getChartEvt(c);
            this.widget._trigger("seriesMouseLeave", null, b)
        },
        _fireChart_windowRectChanged: function (g, c) {
            var b = {}, f = c.oldRect(), d = c.newRect(), h = this._getWidgetName();
            if (f) {
                b.oldTop = f.top();
                b.oldLeft = f.left();
                b.oldWidth = f.width();
                b.oldHeight = f.height()
            }
            b.newTop = d.top();
            b.newLeft = d.left();
            b.newWidth = d.width();
            b.newHeight = d.height();
            b[h] = this.widget.options;
            this.widget.options.windowRect = {
                top: b.newTop,
                left: b.newLeft,
                width: b.newWidth,
                height: b.newHeight
            };
            this.widget._trigger("windowRectChanged", null, b)
        },
        _fireChart_actualWindowRectChanged: function (g, c) {
            var b = {}, f = c.oldRect(), d = c.newRect(), h = this._getWidgetName();
            if (f) {
                b.oldTop = f.top();
                b.oldLeft = f.left();
                b.oldWidth = f.width();
                b.oldHeight = f.height()
            }
            b.newTop = d.top();
            b.newLeft = d.left();
            b.newWidth = d.width();
            b.newHeight = d.height();
            b[h] = this.widget.options;
            this.widget.options.actualWindowRect = {
                top: b.newTop,
                left: b.newLeft,
                width: b.newWidth,
                height: b.newHeight
            };
            this.widget._trigger("actualWindowRectChanged", null, b)
        },
        _fireChart_gridAreaRectChanged: function (g, c) {
            var b = {}, f = c.oldRect(), d = c.newRect(), h = this._getWidgetName();
            if (f) {
                b.oldTop = f.top();
                b.oldLeft = f.left();
                b.oldWidth = f.width();
                b.oldHeight = f.height()
            }
            b.newTop = d.top();
            b.newLeft = d.left();
            b.newWidth = d.width();
            b.newHeight = d.height();
            b[h] = this.widget.options;
            this.widget.options.gridAreaRect = {
                top: b.newTop,
                left: b.newLeft,
                width: b.newWidth,
                height: b.newHeight
            };
            this.widget._trigger("gridAreaRectChanged", null, b)
        },
        _fireChart_refreshCompleted: function (d, c) {
            var b = {}, f = this._getWidgetName();
            b[f] = this.widget.options;
            this.widget._trigger("refreshCompleted", null, b)
        },
        _fireChart_axisRangeChanged: function (d, c) {
            var b = {};
            b.chart = this.widget.options;
            b.axis = this.widget._axisOpt[c.axis().name()];
            b.oldMinimumValue = c.oldMinimumValue();
            b.oldMaximumValue = c.oldMaximumValue();
            b.newMinimumValue = c.minimumValue();
            b.newMaximumValue = c.maximumValue();
            this.widget._trigger("axisRangeChanged", null, b)
        },
        _fireToolTip_updateToolTip: function (b) {
            var c = {}, d, f;
            c = this._getChartEvt(b);
            c.tempId = (this.widget._seriesOpt) ? c.series.name : this.widget.id();
            c.element = null;
            if (c.series !== null) {
                c.element = this.widget._tooltip[c.tempId]
            }
            d = this.widget._trigger(this.widget.events.tooltipShowing, null, c);
            if (c === null) {
                d = false
            }
            if (d) {
                f = this.widget._tooltipTemplate;
                if (c.series !== null && this.widget._tooltipTemplates[c.tempId] !== undefined) {
                    f = this.widget._tooltipTemplates[c.tempId]
                }
                if (f) {
                    this.widget._tooltip[c.tempId].children().remove();
                    if (c.item === null) {
                        d = false
                    }
                    if (d) {
                        this.widget._tooltip[c.tempId].html(a.ig.tmpl(f, c))
                    }
                }
                if (b.hideOthers) {
                    a.each(this.widget._tooltip, function (e, g) {
                        g.hide()
                    })
                }
                if (d) {
                    this.widget._tooltip[c.tempId].show();
                    this.widget._trigger(this.widget.events.tooltipShown, null, c)
                }
            }
        },
        _fireToolTip_hideToolTip: function (b) {
            var c = {}, d;
            c = (this.widget._seriesOpt) ? this._getChartEvt(b) : b;
            c.tempId = (this.widget._seriesOpt) ? c.series.name : this.widget.id();
            c.element = null;
            if (c.series !== null) {
                c.element = this.widget._tooltip[c.tempId]
            }
            d = this.widget._trigger(this.widget.events.tooltipHiding, null, c);
            if (d) {
                a.each(this.widget._tooltip, function (e, f) {
                    f.hide()
                });
                this.widget._trigger(this.widget.events.tooltipHidden, null, c)
            }
        },
        _destroy: function (b) {
            b._axes = null;
            b._series = null;
            b._axisOpt = null;
            b._seriesOpt = null;
            b._tooltip = null;
            b._tooltipTemplates = null;
            b.dataSources = null
        }
    });
    a.ig.SimpleTextMarkerTemplate = a.ig.TextMarkerTemplate || Class.extend({
        requireThis: true,
        settings: {
            padding: 5,
            getText: null,
            backgroundColor: "rgba(255,255,255,.6)",
            borderColor: "rgba(20, 20, 20, .6)",
            borderThickness: 1,
            textColor: "black",
            font: null
        },
        init: function (b) {
            if (b !== undefined) {
                this.settings = a.extend(true, {}, a.ig.SimpleTextMarkerTemplate.prototype.settings, b)
            }
            return this
        },
        getText: function (b, c) {
            if (c === null) {
                return ""
            }
            return c(b)
        },
        measure: function (e) {
            var f = this.settings, c, g, b = e.context, d, h;
            if (f.font !== null) {
                b.font = f.font
            }
            if (f.textColor !== null) {
                b.fillStyle = f.textColor
            }
            c = e.data;
            g = "null";
            if (c.item() !== null) {
                g = this.getText(c.item(), f.getText)
            }
            d = b.measureText("M").width;
            h = b.measureText(g).width;
            e.width = h + f.padding * 2;
            e.height = d + f.padding * 2
        },
        render: function (f) {
            var g = this.settings, b = f.context, c, h, e, d, i, j;
            if (f.isHitTestRender) {
                b.globalAlpha = 1;
                b.fillStyle = f.data.actualItemBrush().fill()
            } else {
                b.fillStyle = g.backgroundColor;
                b.strokeStyle = g.borderColor;
                b.lineWidth = g.borderThickness
            }
            c = f.data;
            h = this.getText(c.item(), g.getText);
            e = f.availableWidth / 2;
            d = f.availableHeight / 2;
            i = f.xPosition - e;
            j = f.yPosition - d;
            if (f.isHitTestRender) {
                b.fillRect(i, j, f.availableWidth, f.availableHeight)
            } else {
                b.fillRect(i, j, f.availableWidth, f.availableHeight);
                b.strokeRect(i, j, f.availableWidth, f.availableHeight);
                b.fillStyle = g.textColor;
                b.textBaseline = "top";
                b.fillText(h, i + g.padding, j + g.padding)
            }
        }
    })
}(jQuery));
( function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 1000
        }).addClass("ui-igtrialwatermark")
    })
}(jQuery)); 