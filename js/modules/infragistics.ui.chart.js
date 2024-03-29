﻿/*
 * Infragistics.Web.ClientUI Chart 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * jquery-1.4.4.js
 * jquery.ui.core.js
 * jquery.ui.widget.js
 * infragistics.util.js
 * infragistics.dv.core.js
 * infragistics.chart_piechart.js
 * infragistics.chart_categorychart.js
 * infragistics.chart_financialchart.js
 * infragistics.chart_polarchart.js
 * infragistics.chart_radialchart.js
 * infragistics.chart_rangecategorychart.js
 * infragistics.chart_scatterchart.js
 * infragistics.datasource.js
 * infragistics.dvcommonwidget.js
 */
if (typeof(jQuery) !== "function") {
    throw new Error("jQuery is undefined")
}
(function (a) {
    a.widget("ui.igDataChart", {options: {syncChannel: null, synchronizeVertically: true, syncrhonizeHorizontally: false, crosshairPoint: {x: 0, y: 0}, windowRect: null, horizontalZoomable: false, verticalZoomable: false, windowResponse: null, windowRectMinWidth: 0, overviewPlusDetailPaneVisibility: "collapsed", crosshairVisibility: "collapsed", plotAreaBackground: null, defaultInteraction: "dragZoom", dragModifier: "none", panModifier: "shift", previewRect: null, windowPositionHorizontal: 0, windowPositionVertical: 0, windowScaleHorizontal: 1, windowScaleVertical: 1, circleMarkerTemplate: null, triangleMarkerTemplate: null, pyramidMarkerTemplate: null, squareMarkerTemplate: null, diamondMarkerTemplate: null, pentagonMarkerTemplate: null, hexagonMarkerTemplate: null, tetragramMarkerTemplate: null, pentagramMarkerTemplate: null, hexagramMarkerTemplate: null, topMargin: 0, leftMargin: 0, rightMargin: 0, bottomMargin: 0, autoMarginWidth: 20, autoMarginHeight: 0, isSquare: false, gridMode: "behindSeries", brushes: null, markerBrushes: null, outlines: null, markerOutlines: null, width: 500, height: 500, size: null, dataSource: null, dataSourceUrl: null, dataSourceType: null, responseDataKey: null, legend: {element: null, type: "legend", width: null, height: null}, axes: [
        {type: null, name: null, dataSource: null, dataSourceUrl: null, dataSourceType: null, responseDataKey: null, remove: false, labelLocation: null, labelVisibility: "visible", labelExtent: null, labelAngle: 0, labelTextStyle: null, labelTextColor: null, formatLabel: null, stroke: null, strokeThickness: 1, strip: null, majorStroke: null, majorStrokeThickness: 1, minorStroke: null, minorStrokeThickness: 1, isInverted: false, crossingAxis: null, crossingValue: null, coercionMethods: null, label: null, gap: 0, overlap: 0, startAngleOffset: 0, interval: 0, displayType: null, minimumValue: 0, maximumValue: 0, dateTimeMemberPath: null, referenceValue: 0, isLogarithmic: false, logarithmBase: 10, radiusExtentScale: 0.75, innerRadiusExtentScale: 0}
    ], series: [
        {type: null, name: null, dataSource: null, dataSourceUrl: null, dataSourceType: null, responseDataKey: null, remove: false, showTooltip: false, tooltipTemplate: null, legend: {element: null, type: "legend", width: null, height: null}, legendItemVisibility: "visible", legendItemBadgeTemplate: null, legendItemTemplate: null, discreteLegendItemTemplate: null, transitionDuration: 0, resolution: 1, title: null, brush: null, outline: null, thickness: 0, coercionMethods: null, markerType: "none", markerTemplate: null, markerBrush: null, markerOutline: null, xAxis: null, yAxis: null, xMemberPath: null, yMemberPath: null, trendLineType: "none", trendLineBrush: null, trendLineThickness: 1.5, trendLinePeriod: 7, trendLineZIndex: 1001, maximumMarkers: 400, unknownValuePlotting: "dontPlot", radiusMemberPath: null, radiusScale: null, labelMemberPath: null, fillMemberPath: null, fillScale: null, angleAxis: null, valueAxis: null, clipSeriesToBounds: null, valueMemberPath: null, radiusX: 2, radiusY: 2, angleMemberPath: null, radiusAxis: null, useCartesianInterpolation: true, negativeBrush: null, splineType: "natural", lowMemberPath: null, highMemberPath: null, openMemberPath: null, closeMemberPath: null, volumeMemberPath: null, displayType: "candlestick", ignoreFirst: 0, period: 0, shortPeriod: 0, longPeriod: 0, markerCollisionAvoidance: "none", useBruteForce: false, progressiveLoad: true, mouseOverEnabled: false, useSquareCutoffStyle: false, heatMinimum: 0, heatMaximum: 50}
    ]}, css: {chart: "ui-corner-all ui-widget-content ui-chart-container", unsupportedBrowserClass: "ui-chart-non-html5-supported-message ui-helper-clearfix", tooltip: "ui-chart-tooltip ui-widget-content ui-corner-all"}, events: {tooltipShowing: "tooltipShowing", tooltipShown: "tooltipShown", tooltipHiding: "tooltipHiding", tooltipHidden: "tooltipHidden", browserNotSupported: "browserNotSupported", seriesCursorMouseMove: null, seriesMouseLeftButtonDown: null, seriesMouseLeftButtonUp: null, seriesMouseMove: null, seriesMouseEnter: null, seriesMouseLeave: null, windowRectChanged: null, gridAreaRectChanged: null, refreshCompleted: null, axisRangeChanged: null, typicalBasedOn: null, progressiveLoadStatusChanged: null, scatterMouseOver: null}, _createWidget: function (c, b) {
        this._fixCss();
        this.dvWidget = new a.ig.dvCommonWidget(this);
        this.dvWidget._createWidget(c, b, this)
    }, _init: function () {
    }, _create: function () {
        this._fixCss();
        this.dvWidget._create()
    }, _fixCss: function () {
        if (this.css.chart.indexOf("{0}") > -1) {
            this.css.chart = this.css.chart.replace("{0}", this.options.theme);
            this.css.tooltip = this.css.tooltip.replace("{0}", this.options.theme)
        }
    }, _setOption: function (b, c) {
        this.dvWidget._setOption(b, c)
    }, widget: function () {
        return this.element
    }, id: function () {
        return this.element[0].id
    }, exportImage: function (c, b) {
        return this.dvWidget._getImage(c, b, this)
    }, destroy: function () {
        if (this._chart) {
            this._chart.destroy();
            this._chart = null
        }
        this.dvWidget._destroy(this);
        if (this._chartElement) {
            this._chartElement.remove();
            this._chartElement = null
        }
        a.Widget.prototype.destroy.apply(this, arguments)
    }, styleUpdated: function () {
        this._chart.styleUpdated();
        return this
    }, resetZoom: function () {
        this._chart.resetZoom();
        return this
    }, addItem: function (c, d) {
        var b = d || this._containerSourceID;
        if (this.dataSources[b]) {
            this.dataSources[b].addRow(null, c, true)
        }
    }, insertItem: function (d, c, e) {
        var b = e || this._containerSourceID;
        if (this.dataSources[b]) {
            this.dataSources[b].insertRow(null, d, c, true)
        }
    }, removeItem: function (c, d) {
        var b = d || this._containerSourceID;
        if (this.dataSources[b]) {
            this.dataSources[b].deleteRow(c, true)
        }
    }, setItem: function (c, d, e) {
        var b = e || this._containerSourceID;
        if (this.dataSources[b]) {
            this.dataSources[b].updateRow(c, d, true)
        }
    }, notifySetItem: function (b, c, d, e) {
        this._chart.notifySetItem(b, c, e, d);
        return this
    }, notifyClearItems: function (b) {
        this._chart.notifyClearItems(b);
        return this
    }, notifyInsertItem: function (b, c, d) {
        this._chart.notifyInsertItem(b, c, d);
        return this
    }, notifyRemoveItem: function (b, c, d) {
        this._chart.notifyRemoveItem(b, c, d);
        return this
    }, scrollIntoView: function (d, b) {
        var c = this.dvWidget._getNotifyTarget(d);
        if (c && c.scrollIntoView) {
            c.scrollIntoView(b)
        }
        return this
    }, scaleValue: function (c, d) {
        var b = this.dvWidget._getNotifyTarget(c);
        if (b && b.scaleValue) {
            return b.scaleValue(d)
        }
        return 0
    }, unscaleValue: function (d, b) {
        var c = this.dvWidget._getNotifyTarget(d);
        if (c && c.unscaleValue) {
            return c.unscaleValue(b)
        }
        return 0
    }, flush: function () {
        this._chart.flush()
    }, exportVisualData: function () {
        return this._chart.exportVisualData()
    }, getActualMinimumValue: function (c) {
        var b = this.dvWidget._getNotifyTarget(c);
        if (b && b.actualMinimumValue) {
            return b.actualMinimumValue()
        }
        return 0
    }, getActualMaximumValue: function (c) {
        var b = this.dvWidget._getNotifyTarget(c);
        if (b && b.actualMaximumValue) {
            return b.actualMaximumValue()
        }
        return 0
    }, print: function () {
        this.dvWidget._print()
    }, renderSeries: function (d, b) {
        var c = this.dvWidget._getNotifyTarget(d);
        if (c && c.renderSeries) {
            return c.renderSeries(b)
        }
        return this
    }, notifyContainerResized: function () {
        this._chart.notifyContainerResized()
    }});
    a.extend(a.ui.igDataChart, {version: "12.2.20122.1021"});
    a.widget("ui.igPieChart", {options: {width: 500, height: 500, dataSource: null, dataSourceUrl: null, dataSourceType: null, responseDataKey: null, valueMemberPath: null, labelMemberPath: null, labelsPosition: "center", leaderLineVisibility: "visible", othersCategoryThreshold: 3, othersCategoryType: "percent", othersCategoryText: "Others", explodedRadius: 0.2, radiusFactor: 0.9, allowSliceSelection: null, allowSliceExplosion: null, explodedSlices: null, showTooltip: false, tooltipTemplate: null, legend: {element: null, type: "item", width: null, height: null}, labelExtent: 10, startAngle: 0, sweepDirection: "clockwise", selectedStyle: null, brushes: null, outlines: null, legendItemTemplate: null, legendItemBadgeTemplate: null, textStyle: null}, css: {chart: "ui-corner-all ui-widget-content ui-chart-piechart-container", unsupportedBrowserClass: "ui-chart-non-html5-supported-message ui-helper-clearfix", tooltip: "ui-chart-tooltip ui-widget-content ui-corner-all"}, events: {tooltipShowing: "tooltipShowing", tooltipShown: "tooltipShown", tooltipHiding: "tooltipHiding", tooltipHidden: "tooltipHidden", browserNotSupported: "browserNotSupported", sliceClick: null}, _createWidget: function (c, b) {
        this._fixCss();
        this.dvWidget = new a.ig.dvCommonWidget(this);
        this.dvWidget._createWidget(c, b, this)
    }, _create: function () {
        this._fixCss();
        this.dvWidget._create()
    }, _fixCss: function () {
        if (this.css.chart.indexOf("{0}") > -1) {
            this.css.chart = this.css.chart.replace("{0}", this.options.theme);
            this.css.tooltip = this.css.tooltip.replace("{0}", this.options.theme)
        }
    }, _setOption: function (b, c) {
        this.dvWidget._setOption(b, c)
    }, addItem: function (b) {
        this.dataSources[this.id()].addRow(b, true)
    }, insertItem: function (c, b) {
        this.dataSources[this.id()].insertRow(null, c, b, true)
    }, removeItem: function (b) {
        this.dataSources[this.id()].deleteRow(b, true)
    }, setItem: function (b, c) {
        this.dataSources[this.id()].updateRow(b, c, true)
    }, exportImage: function (c, b) {
        return this.dvWidget._getImage(c, b, this)
    }, destroy: function () {
        if (this._chart) {
            this._chart.destroy();
            this._chart = null
        }
        this.dvWidget._destroy(this);
        if (this._chartElement) {
            this._chartElement.remove();
            this._chartElement = null
        }
        a.Widget.prototype.destroy.call(this);
        return this
    }, id: function () {
        return this.element[0].id
    }, widget: function () {
        return this.element
    }, print: function () {
        this.dvWidget._print()
    }, notifyContainerResized: function () {
        this._chart.notifyContainerResized()
    }});
    a.extend(a.ui.igPieChart, {version: "12.2.20122.1021"});
    a.widget("ui.igChartLegend", {options: {type: "legend", width: null, height: null}, css: {legend: "ui-corner-all ui-widget-content ui-chart-legend", legendItemsList: "ui-chart-legend-items-list", legendItem: "ui-chart-legend-item", legendItemBadge: "ui-chart-legend-item-badge", legendItemText: "ui-chart-legend-item-text"}, events: {legendItemMouseLeftButtonDown: null, legendItemMouseLeftButtonUp: null, legendItemMouseEnter: null, legendItemMouseLeave: null}, _create: function () {
        this._fixCss();
        switch (this.options.type) {
            case"item":
                this.legend = new a.ig.ItemLegend();
                break;
            case"legend":
                this.legend = new a.ig.Legend();
                break;
            case"scale":
                this.legend = new a.ig.ScaleLegend();
                break
        }
        if (this.options.owner) {
            this._owner = this.options.owner;
            this.options.owner = this._owner.options
        }
        this.legend.name(this.id());
        this.legend.legendItemsListStyle(this.css.legendItemsList);
        this.legend.legendItemStyle(this.css.legendItem);
        this.legend.legendItemBadgeStyle(this.css.legendItemBadge);
        this.legend.legendItemTextStyle(this.css.legendItemText);
        this.element.css("width", this.options.width);
        this.element.css("height", this.options.height);
        this.element.addClass(this.css.legend);
        this._bindLegendEvents(this.legend);
        this.legend.provideContainer(this.element)
    }, _bindLegendEvents: function (b) {
        b.legendItemMouseLeftButtonDown = a.ig.Delegate.prototype.combine(b.legendItemMouseLeftButtonDown, jQuery.proxy(this._fireLegend_ItemMouseLeftButtonDown, this));
        b.legendItemMouseLeftButtonUp = a.ig.Delegate.prototype.combine(b.legendItemMouseLeftButtonUp, jQuery.proxy(this._fireLegend_ItemMouseLeftButtonUp, this));
        b.legendItemMouseEnter = a.ig.Delegate.prototype.combine(b.legendItemMouseEnter, jQuery.proxy(this._fireLegend_ItemMouseEnter, this));
        b.legendItemMouseLeave = a.ig.Delegate.prototype.combine(b.legendItemMouseLeave, jQuery.proxy(this._fireLegend_ItemMouseLeave, this))
    }, _getLegendEvt: function (c) {
        var b = {}, d = this._owner._seriesOpt ? this._owner._seriesOpt[c.series().name()] : this._owner.options, f = this._owner.dvWidget._getWidgetName();
        b[f] = this._owner.options;
        b.legend = this.options;
        b.series = d;
        if (c.legendItem && c.legendItem() !== null && c.legendItem().content && c.legendItem().content() !== null && c.legendItem().content().actualItemBrush && c.legendItem().content().actualItemBrush() !== null) {
            b.actualItemBrush = c.legendItem().content().actualItemBrush().fill()
        }
        if (c.series && c.series() !== null && c.series().actualBrush && c.series().actualBrush() !== null) {
            b.actualSeriesBrush = c.series().actualBrush().fill()
        }
        return b
    }, _fireLegend_ItemMouseLeftButtonDown: function (d, c) {
        var b = this._getLegendEvt(c);
        this._trigger("legendItemMouseLeftButtonDown", null, b)
    }, _fireLegend_ItemMouseLeftButtonUp: function (d, c) {
        var b = this._getLegendEvt(c);
        this._trigger("legendItemMouseLeftButtonUp", null, b)
    }, _fireLegend_ItemMouseEnter: function (d, c) {
        var b = this._getLegendEvt(c);
        this._trigger("legendItemMouseEnter", null, b)
    }, _fireLegend_ItemMouseLeave: function (d, c) {
        var b = this._getLegendEvt(c);
        this._trigger("legendItemMouseLeave", null, b)
    }, _fixCss: function () {
        if (this.css.legend.indexOf("{0}") > -1) {
            this.css.legend = this.css.legend.replace("{0}", this.options.theme)
        }
    }, _getLegend: function () {
        return this.legend
    }, destroy: function () {
        var b;
        a.Widget.prototype.destroy.call(this);
        if (this.legend) {
            this.legend = null
        }
        if (this.element) {
            this.element.removeClass(this.css.legend);
            if (this.options.width) {
                this.element.css("width", "")
            }
            if (this.options.height) {
                this.element.css("height", "")
            }
            if (this.element.children("table").length > 0) {
                b = this.element.children("table").children("tr");
                a.each(b, function (c, d) {
                    a(d).unbind("mouseleave");
                    a(d).unbind("mouseup");
                    a(d).unbind("mousedown");
                    a(d).unbind("mousemove")
                })
            }
            this.element.empty()
        }
        return this
    }, widget: function () {
        return this.element
    }, id: function () {
        return this.element[0].id
    }});
    a.extend(a.ui.igChartLegend, {version: "12.2.20122.1021"})
}(jQuery));
(function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({position: "fixed", bottom: 0, right: 0, zIndex: 1000}).addClass("ui-igtrialwatermark")
    })
}(jQuery));