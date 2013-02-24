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
if(typeof(jQuery)!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("mobile.igDataChart",$.mobile.widget,{options:{syncChannel:null,synchronizeVertically:true,syncrhonizeHorizontally:false,crosshairPoint:{x:0,y:0},windowRect:null,horizontalZoomable:false,verticalZoomable:false,windowResponse:null,windowRectMinWidth:0,overviewPlusDetailPaneVisibility:"collapsed",crosshairVisibility:"collapsed",plotAreaBackground:null,defaultInteraction:"dragZoom",dragModifier:"none",panModifier:"shift",previewRect:null,windowPositionHorizontal:0,windowPositionVertical:0,windowScaleHorizontal:1,windowScaleVertical:1,circleMarkerTemplate:null,triangleMarkerTemplate:null,pyramidMarkerTemplate:null,squareMarkerTemplate:null,diamondMarkerTemplate:null,pentagonMarkerTemplate:null,hexagonMarkerTemplate:null,tetragramMarkerTemplate:null,pentagramMarkerTemplate:null,hexagramMarkerTemplate:null,topMargin:0,leftMargin:0,rightMargin:0,bottomMargin:0,autoMarginWidth:20,autoMarginHeight:0,isSquare:false,gridMode:"behindSeries",brushes:null,markerBrushes:null,outlines:null,markerOutlines:null,width:500,height:500,size:null,dataSource:null,dataSourceUrl:null,dataSourceType:null,responseDataKey:null,legend:{element:null,type:"legend",width:null,height:null},axes:[{type:null,name:null,dataSource:null,dataSourceUrl:null,dataSourceType:null,responseDataKey:null,remove:false,labelLocation:null,labelVisibility:"visible",labelExtent:null,labelAngle:0,labelTextStyle:null,labelTextColor:null,formatLabel:null,stroke:null,strokeThickness:1,strip:null,majorStroke:null,majorStrokeThickness:1,minorStroke:null,minorStrokeThickness:1,isInverted:false,crossingAxis:null,crossingValue:null,coercionMethods:null,label:null,gap:0,overlap:0,startAngleOffset:0,interval:0,displayType:null,minimumValue:0,maximumValue:0,dateTimeMemberPath:null,referenceValue:0,isLogarithmic:false,logarithmBase:10,radiusExtentScale:0.75,innerRadiusExtentScale:0}],series:[{type:null,name:null,dataSource:null,dataSourceUrl:null,dataSourceType:null,responseDataKey:null,remove:false,showTooltip:false,tooltipTemplate:null,legend:{element:null,type:"legend",width:null,height:null},legendItemVisibility:"visible",legendItemBadgeTemplate:null,legendItemTemplate:null,discreteLegendItemTemplate:null,transitionDuration:0,resolution:1,title:null,brush:null,outline:null,thickness:0,coercionMethods:null,markerType:"none",markerTemplate:null,markerBrush:null,markerOutline:null,xAxis:null,yAxis:null,xMemberPath:null,yMemberPath:null,trendLineType:"none",trendLineBrush:null,trendLineThickness:1.5,trendLinePeriod:7,trendLineZIndex:1001,maximumMarkers:400,unknownValuePlotting:"dontPlot",radiusMemberPath:null,radiusScale:null,labelMemberPath:null,fillMemberPath:null,fillScale:null,angleAxis:null,valueAxis:null,clipSeriesToBounds:null,valueMemberPath:null,radiusX:2,radiusY:2,angleMemberPath:null,radiusAxis:null,useCartesianInterpolation:true,negativeBrush:null,splineType:"natural",lowMemberPath:null,highMemberPath:null,openMemberPath:null,closeMemberPath:null,volumeMemberPath:null,displayType:"candlestick",ignoreFirst:0,period:0,shortPeriod:0,longPeriod:0,markerCollisionAvoidance:"none",useBruteForce:false,progressiveLoad:true,mouseOverEnabled:false,useSquareCutoffStyle:false,heatMinimum:0,heatMaximum:50}],theme:"c"},css:{chart:"ui-corner-all ui-bar-{0} ui-chart-container",unsupportedBrowserClass:"ui-chart-non-html5-supported-message ui-helper-clearfix",tooltip:"ui-chart-tooltip ui-bar-{0} ui-corner-all"},events:{tooltipShowing:"tooltipShowing",tooltipShown:"tooltipShown",tooltipHiding:"tooltipHiding",tooltipHidden:"tooltipHidden",browserNotSupported:"browserNotSupported",seriesCursorMouseMove:null,seriesMouseLeftButtonDown:null,seriesMouseLeftButtonUp:null,seriesMouseMove:null,seriesMouseEnter:null,seriesMouseLeave:null,windowRectChanged:null,gridAreaRectChanged:null,refreshCompleted:null,axisRangeChanged:null,typicalBasedOn:null,progressiveLoadStatusChanged:null,scatterMouseOver:null},_createWidget:function(options,element){this._fixCss();this.dvWidget=new $.ig.dvCommonWidget(this);this.dvWidget._createWidget(options,element,this)},_init:function(){},_create:function(){this._fixCss();this.dvWidget._create()},_fixCss:function(){if(this.css.chart.indexOf("{0}")>-1){this.css.chart=this.css.chart.replace("{0}",this.options.theme);this.css.tooltip=this.css.tooltip.replace("{0}",this.options.theme)}},_setOption:function(key,value){this.dvWidget._setOption(key,value)},widget:function(){return this.element},id:function(){return this.element[0].id},exportImage:function(width,height){return this.dvWidget._getImage(width,height,this)},destroy:function(){if(this._chart){this._chart.destroy();this._chart=null}this.dvWidget._destroy(this);if(this._chartElement){this._chartElement.remove();this._chartElement=null}$.Widget.prototype.destroy.apply(this,arguments)},styleUpdated:function(){this._chart.styleUpdated();return this},resetZoom:function(){this._chart.resetZoom();return this},addItem:function(item,targetName){var dataSourceId=targetName||this._containerSourceID;if(this.dataSources[dataSourceId]){this.dataSources[dataSourceId].addRow(null,item,true)}},insertItem:function(item,index,targetName){var dataSourceId=targetName||this._containerSourceID;if(this.dataSources[dataSourceId]){this.dataSources[dataSourceId].insertRow(null,item,index,true)}},removeItem:function(index,targetName){var dataSourceId=targetName||this._containerSourceID;if(this.dataSources[dataSourceId]){this.dataSources[dataSourceId].deleteRow(index,true)}},setItem:function(index,item,targetName){var dataSourceId=targetName||this._containerSourceID;if(this.dataSources[dataSourceId]){this.dataSources[dataSourceId].updateRow(index,item,true)}},notifySetItem:function(dataSource,index,newItem,oldItem){this._chart.notifySetItem(dataSource,index,oldItem,newItem);return this},notifyClearItems:function(dataSource){this._chart.notifyClearItems(dataSource);return this},notifyInsertItem:function(dataSource,index,newItem){this._chart.notifyInsertItem(dataSource,index,newItem);return this},notifyRemoveItem:function(dataSource,index,oldItem){this._chart.notifyRemoveItem(dataSource,index,oldItem);return this},scrollIntoView:function(targetName,item){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.scrollIntoView){target.scrollIntoView(item)}return this},scaleValue:function(targetName,unscaledValue){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.scaleValue){return target.scaleValue(unscaledValue)}return 0},unscaleValue:function(targetName,scaledValue){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.unscaleValue){return target.unscaleValue(scaledValue)}return 0},flush:function(){this._chart.flush()},exportVisualData:function(){return this._chart.exportVisualData()},getActualMinimumValue:function(targetName){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.actualMinimumValue){return target.actualMinimumValue()}return 0},getActualMaximumValue:function(targetName){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.actualMaximumValue){return target.actualMaximumValue()}return 0},print:function(){this.dvWidget._print()},renderSeries:function(targetName,animate){var target=this.dvWidget._getNotifyTarget(targetName);if(target&&target.renderSeries){return target.renderSeries(animate)}return this},notifyContainerResized:function(){this._chart.notifyContainerResized()}});$.extend($.mobile.igDataChart,{version:"12.2.20122.1021"});$.widget("mobile.igPieChart",$.mobile.widget,{options:{width:500,height:500,dataSource:null,dataSourceUrl:null,dataSourceType:null,responseDataKey:null,valueMemberPath:null,labelMemberPath:null,labelsPosition:"center",leaderLineVisibility:"visible",othersCategoryThreshold:3,othersCategoryType:"percent",othersCategoryText:"Others",explodedRadius:0.2,radiusFactor:0.9,allowSliceSelection:null,allowSliceExplosion:null,explodedSlices:null,showTooltip:false,tooltipTemplate:null,legend:{element:null,type:"item",width:null,height:null},labelExtent:10,startAngle:0,sweepDirection:"clockwise",selectedStyle:null,brushes:null,outlines:null,legendItemTemplate:null,legendItemBadgeTemplate:null,textStyle:null,theme:"c"},css:{chart:"ui-corner-all ui-bar-{0} ui-chart-piechart-container",unsupportedBrowserClass:"ui-chart-non-html5-supported-message ui-helper-clearfix",tooltip:"ui-chart-tooltip ui-bar-{0} ui-corner-all"},events:{tooltipShowing:"tooltipShowing",tooltipShown:"tooltipShown",tooltipHiding:"tooltipHiding",tooltipHidden:"tooltipHidden",browserNotSupported:"browserNotSupported",sliceClick:null},_createWidget:function(options,element){this._fixCss();this.dvWidget=new $.ig.dvCommonWidget(this);this.dvWidget._createWidget(options,element,this)},_create:function(){this._fixCss();this.dvWidget._create()},_fixCss:function(){if(this.css.chart.indexOf("{0}")>-1){this.css.chart=this.css.chart.replace("{0}",this.options.theme);this.css.tooltip=this.css.tooltip.replace("{0}",this.options.theme)}},_setOption:function(key,value){this.dvWidget._setOption(key,value)},addItem:function(item){this.dataSources[this.id()].addRow(item,true)},insertItem:function(item,index){this.dataSources[this.id()].insertRow(null,item,index,true)},removeItem:function(index){this.dataSources[this.id()].deleteRow(index,true)},setItem:function(index,item){this.dataSources[this.id()].updateRow(index,item,true)},exportImage:function(width,height){return this.dvWidget._getImage(width,height,this)},destroy:function(){if(this._chart){this._chart.destroy();this._chart=null}this.dvWidget._destroy(this);if(this._chartElement){this._chartElement.remove();this._chartElement=null}$.Widget.prototype.destroy.call(this);return this},id:function(){return this.element[0].id},widget:function(){return this.element},print:function(){this.dvWidget._print()},notifyContainerResized:function(){this._chart.notifyContainerResized()}});$.extend($.mobile.igPieChart,{version:"12.2.20122.1021"});$.widget("mobile.igChartLegend",$.mobile.widget,{options:{type:"legend",width:null,height:null,theme:"c"},css:{legend:"ui-corner-all ui-bar-{0} ui-chart-legend",legendItemsList:"ui-chart-legend-items-list",legendItem:"ui-chart-legend-item",legendItemBadge:"ui-chart-legend-item-badge",legendItemText:"ui-chart-legend-item-text"},events:{legendItemMouseLeftButtonDown:null,legendItemMouseLeftButtonUp:null,legendItemMouseEnter:null,legendItemMouseLeave:null},_create:function(){this._fixCss();switch(this.options.type){case"item":this.legend=new $.ig.ItemLegend();break;case"legend":this.legend=new $.ig.Legend();break;case"scale":this.legend=new $.ig.ScaleLegend();break}if(this.options.owner){this._owner=this.options.owner;this.options.owner=this._owner.options}this.legend.name(this.id());this.legend.legendItemsListStyle(this.css.legendItemsList);this.legend.legendItemStyle(this.css.legendItem);this.legend.legendItemBadgeStyle(this.css.legendItemBadge);this.legend.legendItemTextStyle(this.css.legendItemText);this.element.css("width",this.options.width);this.element.css("height",this.options.height);this.element.addClass(this.css.legend);this._bindLegendEvents(this.legend);this.legend.provideContainer(this.element)},_bindLegendEvents:function(legend){legend.legendItemMouseLeftButtonDown=$.ig.Delegate.prototype.combine(legend.legendItemMouseLeftButtonDown,jQuery.proxy(this._fireLegend_ItemMouseLeftButtonDown,this));legend.legendItemMouseLeftButtonUp=$.ig.Delegate.prototype.combine(legend.legendItemMouseLeftButtonUp,jQuery.proxy(this._fireLegend_ItemMouseLeftButtonUp,this));legend.legendItemMouseEnter=$.ig.Delegate.prototype.combine(legend.legendItemMouseEnter,jQuery.proxy(this._fireLegend_ItemMouseEnter,this));legend.legendItemMouseLeave=$.ig.Delegate.prototype.combine(legend.legendItemMouseLeave,jQuery.proxy(this._fireLegend_ItemMouseLeave,this))},_getLegendEvt:function(evtArgs){var e={},seriesOpt=this._owner._seriesOpt?this._owner._seriesOpt[evtArgs.series().name()]:this._owner.options,widget=this._owner.dvWidget._getWidgetName();e[widget]=this._owner.options;e.legend=this.options;e.series=seriesOpt;if(evtArgs.legendItem&&evtArgs.legendItem()!==null&&evtArgs.legendItem().content&&evtArgs.legendItem().content()!==null&&evtArgs.legendItem().content().actualItemBrush&&evtArgs.legendItem().content().actualItemBrush()!==null){e.actualItemBrush=evtArgs.legendItem().content().actualItemBrush().fill()}if(evtArgs.series&&evtArgs.series()!==null&&evtArgs.series().actualBrush&&evtArgs.series().actualBrush()!==null){e.actualSeriesBrush=evtArgs.series().actualBrush().fill()}return e},_fireLegend_ItemMouseLeftButtonDown:function(sender,evtArgs){var e=this._getLegendEvt(evtArgs);this._trigger("legendItemMouseLeftButtonDown",null,e)},_fireLegend_ItemMouseLeftButtonUp:function(sender,evtArgs){var e=this._getLegendEvt(evtArgs);this._trigger("legendItemMouseLeftButtonUp",null,e)},_fireLegend_ItemMouseEnter:function(sender,evtArgs){var e=this._getLegendEvt(evtArgs);this._trigger("legendItemMouseEnter",null,e)},_fireLegend_ItemMouseLeave:function(sender,evtArgs){var e=this._getLegendEvt(evtArgs);this._trigger("legendItemMouseLeave",null,e)},_fixCss:function(){if(this.css.legend.indexOf("{0}")>-1){this.css.legend=this.css.legend.replace("{0}",this.options.theme)}},_getLegend:function(){return this.legend},destroy:function(){var elements;$.Widget.prototype.destroy.call(this);if(this.legend){this.legend=null}if(this.element){this.element.removeClass(this.css.legend);if(this.options.width){this.element.css("width","")}if(this.options.height){this.element.css("height","")}if(this.element.children("table").length>0){elements=this.element.children("table").children("tr");$.each(elements,function(key,tr){$(tr).unbind("mouseleave");$(tr).unbind("mouseup");$(tr).unbind("mousedown");$(tr).unbind("mousemove")})}this.element.empty()}return this},widget:function(){return this.element},id:function(){return this.element[0].id}});$.extend($.mobile.igChartLegend,{version:"12.2.20122.1021"});function _addDash(c){return"-"+c.toLowerCase()}function _parseSimpleProps(element,options,type){var option,value;for(option in type.prototype.options){if(type.prototype.options.hasOwnProperty(option)){value=element.jqmData(option.replace(/[A-Z]/g,_addDash));if(value!==undefined){options[option]=value}}}}function _fixDataSource(optObj){var tmpSource;if(optObj._fromHtml&&optObj.dataSource){try{tmpSource=optObj.dataSource;optObj.dataSource=eval(optObj.dataSource)}catch(exc){optObj.dataSource=tmpSource}if(optObj.dataSource===undefined&&tmpSource){optObj.dataSource=tmpSource}}}function _igmChartAutoInit(e){var target=document;if(e){target=e.target}jQuery(":jqmData(role='igpiechart')",target).each(function(i){var $this=jQuery(this),optObj={_fromHtml:true};_parseSimpleProps($this,optObj,jQuery.mobile.igPieChart);_fixDataSource(optObj);$this.igPieChart(optObj)});jQuery(":jqmData(role='igdatachart')",target).each(function(i){var $this=jQuery(this),optObj={_fromHtml:true};_parseSimpleProps($this,optObj,jQuery.mobile.igDataChart);_fixDataSource(optObj);$this.igDataChart(optObj)})}if(jQuery.ig&&jQuery.ig.loader){jQuery.ig.loader().preinit(_igmChartAutoInit)}jQuery(document).bind("pagecreate create",_igmChartAutoInit)}(jQuery));(function(a){a(document).ready(function(){var b=a("#__ig_wm__").length>0?a("#__ig_wm__"):a('<div id="__ig_wm__"></div>').appendTo(document.body);b.css({position:"fixed",bottom:0,right:0,zIndex:1000}).addClass("ui-igtrialwatermark")})}(jQuery));