﻿/*
 * Infragistics.Web.ClientUI Grid localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};

if (!$.ig.Grid) {

    $.ig.Grid = {};

    $.extend($.ig.Grid, {
        locale: {
            noSuchWidget: "No such widget loaded: ",
            autoGenerateColumnsNoRecords: "autoGenerateColumns is enabled, but there are no records in the data source in order to determine the columns",
            optionChangeNotSupported: "Changing the following option after the igGrid has been created is not supported:",
            optionChangeNotScrollingGrid: "The following option cannot be changed after the grid is created because your initial grid is not scrolling and full re-rendering is required:",
            noPrimaryKeyDefined: "There is no primary key defined for the grid. In order to use features such as Grid Editing, you will need to define a primary key.",
            indexOutOfRange: "The row index you have specified is out of range.",
            noSuchColumnDefined: "The specified column key does not match any of the defined grid columns.",
            columnIndexOutOfRange: "The specified column index is out of range.",
            recordNotFound: "The record with the specified id could not be found in the data view:",
            columnNotFound: "No column was found matching key:",
            colPrefix: "Column ",
            columnVirtualizationRequiresWidth: "You have virtualization / columnVirtualization set to true, but no width could be inferred for grid columns. You should set one of a) grid width, b) defaultColumnWidth, c) define width for each column",
            virtualizationRequiresHeight: "You have virtualization set to true which requires grid height to be set too.",
            colVirtualizationDenied: "columnVirtualization is applicable for fixed virtualization only",
            noColumnsButAutoGenerateTrue: "You have autoGenerateColumns set to false, but there are no columns defined in the grid. Please set autoGenerateColumns to true, or specify columns manually",
            noPrimaryKey: "the igHierarchicalGrid widget requires a primary key to be defined.",
            templatingEnabledButNoTemplate: "You have jQueryTemplating set to true, but there is no rowTemplate defined.",
            expandTooltip: "Expand Row",
            collapseTooltip: "Collapse Row",
            movingNotAllowedOrIncompatible: "Moving of the requested column could not be completed. The column was not found or the result was not compatible with the column layout."
        }
    });

    $.ig.GridFiltering = $.ig.GridFiltering || {};

    $.extend($.ig.GridFiltering, {
        locale: {
            startsWithNullText: "Starts with...",
            endsWithNullText: "Ends with...",
            containsNullText: "Contains...",
            doesNotContainNullText: "Does not contain...",
            equalsNullText: "Equals...",
            doesNotEqualNullText: "Does not equal...",
            greaterThanNullText: "Greater than...",
            lessThanNullText: "Less than...",
            greaterThanOrEqualToNullText: "Greater than or equal to...",
            lessThanOrEqualToNullText: "Less than or equal to...",
            onNullText: "On...",
            notOnNullText: "Not on...",
            emptyNullText: "Empty",
            notEmptyNullText: "Not empty",
            nullNullText: "Null",
            notNullNullText: "Not null",
            startsWithLabel: "Starts with",
            endsWithLabel: "Ends with",
            containsLabel: "Contains",
            doesNotContainLabel: "Does not contain",
            equalsLabel: "Equals",
            doesNotEqualLabel: "Does not equal",
            greaterThanLabel: "Greater than",
            lessThanLabel: "Less than",
            greaterThanOrEqualToLabel: "Greater than or equal to",
            lessThanOrEqualToLabel: "Less than or equal to",
            trueLabel: "True",
            falseLabel: "False",
            afterLabel: "After",
            beforeLabel: "Before",
            todayLabel: "Today",
            yesterdayLabel: "Yesterday",
            thisMonthLabel: "This month",
            lastMonthLabel: "Last month",
            nextMonthLabel: "Next month",
            thisYearLabel: "This year",
            lastYearLabel: "Last year",
            nextYearLabel: "Next year",
            clearLabel: "Clear Filter",
            noFilterLabel: "No",
            onLabel: "On",
            notOnLabel: "Not on",
            advancedButtonLabel: "Advanced",
            filterDialogCaptionLabel: "ADVANCED SEARCH",
            filterDialogConditionLabel1: "Show records matching ",
            filterDialogConditionLabel2: " of the following criteria",
            filterDialogOkLabel: "Search",
            filterDialogCancelLabel: "Cancel",
            filterDialogAnyLabel: "ANY",
            filterDialogAllLabel: "ALL",
            filterDialogAddLabel: "Add",
            filterDialogErrorLabel: "Maximum filters count exceeded.",
            filterSummaryTitleLabel: "Search results",
            filterSummaryTemplate: "${matches} matching records",
            filterDialogClearAllLabel: "Clear ALL",
            tooltipTemplate: "${condition} filter applied",
            featureChooserText: "Hide Filter",
            featureChooserTextHide: "Show Filter",
            featureChooserTextAdvancedFilter: "Advanced Filter",
            virtualizationSimpleFilteringNotAllowed: "When horizontal virtualization is enabled, simple filtering (filter row) is not supported. Please set mode to 'advanced' and/or do not enable advancedModeEditorsVisible",
            featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use loader or use one of the combined script files."
        }
    });

    $.ig.GridGroupBy = $.ig.GridGroupBy || {};

    $.extend($.ig.GridGroupBy, {
        locale: {
            emptyGroupByAreaContent: "Drag a column here or {0} to Group By",
            emptyGroupByAreaContentSelectColumns: "select columns",
            emptyGroupByAreaContentSelectColumnsCaption: "select columns",
            expandTooltip: "Expand Grouped Row",
            collapseTooltip: "Collapse Grouped Row",
            removeButtonTooltip: "Remove Grouped Column",
            featureChooserText: "Ungroup By",
            featureChooserTextHide: "Group By",
            modalDialogCaptionButtonDesc: "Click to sort ascending",
            modalDialogCaptionButtonAsc: "Click to sort descending",
            modalDialogCaptionButtonUngroup: "Click to ungroup",
            modalDialogGroupByButtonText: "Group By",
            modalDialogCaptionText: "Add to Group By",
            modalDialogDropDownLabel: "Showing:",
            modalDialogClearAllButtonLabel: "clear all",
            modalDialogRootLevelHierarchicalGrid: "root",
            modalDialogDropDownButtonCaption: "Click to show/hide",
            modalDialogButtonApplyText: "Apply",
            modalDialogButtonCancelText: "Cancel"
        }
    });

    $.ig.GridHiding = $.ig.GridHiding || {};

    $.extend($.ig.GridHiding, {
        locale: {
            columnChooserDisplayText: "Column Chooser",
            hiddenColumnIndicatorTooltipText: "Hidden Column(s)",
            columnHideText: "Hide",
            columnChooserCaptionLabel: "Column Chooser",
            columnChooserCheckboxesHeader: "view",
            columnChooserColumnsHeader: "column",
            columnChooserCloseButtonTooltip: "Close",
            hideColumnIconTooltip: "Hide",
            featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.",
            columnChooserShowText: "Show",
            columnChooserHideText: "Hide",
            columnChooserResetButtonLabel: "reset",
            columnChooserButtonApplyText: "Apply",
            columnChooserButtonCancelText: "Cancel"
        }
    });

    $.ig.GridPaging = $.ig.GridPaging || {};

    $.extend($.ig.GridPaging, {
        locale: {
            pageSizeDropDownLabel: "Show ",
            pageSizeDropDownTrailingLabel: "records",
            nextPageLabelText: "next",
            prevPageLabelText: "prev",
            firstPageLabelText: "",
            lastPageLabelText: "",
            currentPageDropDownLeadingLabel: "Pg",
            currentPageDropDownTrailingLabel: "of ${count}",
            currentPageDropDownTooltip: "Choose page index",
            pageSizeDropDownTooltip: "Choose number of records per page",
            pagerRecordsLabelTooltip: "Current records range",
            prevPageTooltip: "go to the previous page",
            nextPageTooltip: "go to the next page",
            firstPageTooltip: "go to the first page",
            lastPageTooltip: "go to the last page",
            pageTooltipFormat: "page ${index}",
            pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} of ${recordCount} records"
        }
    });

    $.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

    $.extend($.ig.GridRowSelectors, {
        locale: {
            selectionNotLoaded: "igGridSelection is not initialized. To avoid receiving this error message please enable the Selection feature for the grid or set the requireSelection property of the Row Selectors feature to false."
        }
    });

    $.ig.GridSorting = $.ig.GridSorting || {};

    $.extend($.ig.GridSorting, {
        locale: {
            sortedColumnTooltipFormat: "sorted ${direction}",
            unsortedColumnTooltip: "click to sort column",
            ascending: "ascending",
            descending: "descending",
            modalDialogSortByButtonText: "sort by",
            modalDialogResetButton: "reset",
            modalDialogCaptionButtonDesc: "Click to sort descending",
            modalDialogCaptionButtonAsc: "Click to sort ascending",
            modalDialogCaptionButtonUnsort: "Click to remove sorting",
            featureChooserText: "Sort on Multiple",
            modalDialogCaptionText: "Sort Multiple",
            modalDialogButtonApplyText: "Apply",
            modalDialogButtonCancelText: "Cancel"
        }
    });

    $.ig.GridSummaries = $.ig.GridSummaries || {};

    $.extend($.ig.GridSummaries, {
        locale: {
            featureChooserText: "Hide Summaries",
            featureChooserTextHide: "Show Summaries",
            dialogButtonOKText: "OK",
            dialogButtonCancelText: "Cancel",
            emptyCellText: "",
            summariesHeaderButtonTooltip: "Show/hide summaries",
            defaultSummaryRowDisplayLabelCount: "Count",
            defaultSummaryRowDisplayLabelMin: "Min",
            defaultSummaryRowDisplayLabelMax: "Max",
            defaultSummaryRowDisplayLabelSum: "Sum",
            defaultSummaryRowDisplayLabelAvg: "Avg",
            defaultSummaryRowDisplayLabelCustom: "Custom",
            calculateSummaryColumnKeyNotSpecified: "Please specify column key to calculate summary",
            featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files."
        }
    });

    $.ig.GridUpdating = $.ig.GridUpdating || {};

    $.extend($.ig.GridUpdating, {
        locale: {
            doneLabel: "Done",
            doneTooltip: "Stop editing and update",
            cancelLabel: "Cancel",
            cancelTooltip: "Stop editing and do not update",
            addRowLabel: "Add new row",
            addRowTooltip: "Click to start adding new row",
            deleteRowLabel: "",
            deleteRowTooltip: "Delete row",
            igEditorException: "The updating for ui.igGrid requires ui.igEditor to be loaded",
            igComboException: "In order to use the combo type for ui.igGrid, the ui.igCombo should be loaded",
            igRatingException: "In order to use the igRating as editor for ui.igGrid, the ui.igRating should be loaded",
            igValidatorException: "Validation options defined in igGridUpdating require ui.igValidator to be loaded",
            noPrimaryKeyException: 'In order to support update operations after a row was deleted, application should define "primaryKey" in options of igGrid.',
            hiddenColumnValidationException: "Cannot edit row which has a hidden column with enabled validation.",
            dataDirtyException: 'Grid has pending transactions which may affect rendering of data. To prevent exception, application may enable "autoCommit" option of igGrid, or it should process "dataDirty" event of igGridUpdating and return false. While processing that event, application also may do "commit()" data in igGrid.',
            rowEditDialogCaptionLabel: "Edit row data"
        }
    });

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: "Apply",
            movingDialogButtonCancelText: "Cancel",
            movingDialogCaptionButtonDesc: "Move Down",
            movingDialogCaptionButtonAsc: "Move Up",
            movingDialogCaptionText: "Move Columns",
            movingDialogDisplayText: "Move Columns",
            dropDownMoveLeftText: "Move Left",
            dropDownMoveRightText: "Move Right",
            dropDownMoveFirstText: "Move First",
            dropDownMoveLastText: "Move Last",
            featureChooserNotReferenced: "Feature Chooser script is not referenced. To avoid receiving this error message please include the file ig.ui.grid.featurechooser.js or use one of the combined script files.",
            movingToolTipMove: "Move"
        }
    });

    /*
     * Infragistics.Web.ClientUI Grid 12.2.20122.1021
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
     *  ig.ui.shared.js
     *	ig.util.js
     */
}

if (typeof (jQuery) === "undefined") {
    throw new Error("jQuery is undefined")
}

(function ($) {

    var _hovTR, _aNull = function (val) {
        return val === null || val === undefined
    };

    $.widget("ui.igGrid", {

        css: {
            baseClass: "ui-widget ui-helper-clearfix ui-corner-all",
            baseContentClass: "ui-widget-content",
            gridClasses: "ui-iggrid",
            recordClass: "ui-ig-record ui-iggrid-record",
            recordAltClass: "ui-ig-altrecord ui-iggrid-altrecord",
            headerClass: "ui-iggrid-header ui-widget-header",
            headerTextClass: "ui-iggrid-headertext",
            baseHeaderClass: "ui-widget-header",
            gridTableClass: "ui-iggrid-table ui-widget-content",
            gridHeaderTableClass: "ui-iggrid-headertable",
            gridFooterTableClass: "ui-iggrid-footertable ui-widget-footer",
            gridFooterClass: "",
            gridCaptionTableClass: "ui-iggrid-captiontable",
            gridHeaderCaptionClass: "ui-iggrid-headercaption ui-widget-header ui-corner-top",
            gridTableBodyClass: "ui-iggrid-tablebody",
            gridScrollDivClass: "ui-iggrid-scrolldiv ui-widget-content",
            gridFooterCaptionClass: "ui-iggrid-footercaption",
            deletedRecord: "ui-iggrid-deletedrecord",
            modifiedRecord: "ui-iggrid-modifiedrecord",
            rtl: "ui-iggrid-rtl"
        },

        options: {
            width: null,
            height: null,
            autoAdjustHeight: true,
            avgRowHeight: 25,
            avgColumnWidth: null,
            defaultColumnWidth: null,
            autoGenerateColumns: true,
            virtualization: false,
            virtualizationMode: "fixed",
            requiresDataBinding: true,
            rowVirtualization: false,
            columnVirtualization: false,
            virtualizationMouseWheelStep: null,
            adjustVirtualHeights: false,
            rowTemplate: null,
            jQueryTemplating: false,
            columns: [
                {
                    headerText: null,
                    key: null,
                    formatter: null,
                    format: null,
                    dataType: "string",
                    width: null,
                    hidden: false,
                    template: null,
                    unbound: false,
                    group: [],
                    rowspan: 0,
                    formula: null,
                    unboundValues: null
                }
            ],
            dataSource: null,
            dataSourceUrl: null,
            dataSourceType: null,
            responseDataKey: null,
            responseTotalRecCountKey: null,
            showHeader: true,
            showFooter: true,
            fixedHeaders: true,
            fixedFooters: true,
            caption: null,
            features: [
                {}
            ],
            tabIndex: 0,
            accessibilityRendering: false,
            localSchemaTransform: true,
            primaryKey: null,
            serializeTransactionLog: true,
            autoCommit: false,
            aggregateTransactions: false,
            autoFormat: "date",
            renderCheckboxes: false,
            updateUrl: null,
            restSettings: {
                create: {
                    url: null,
                    template: null,
                    batch: false
                },
                update: {
                    url: null,
                    template: null,
                    batch: false
                },
                remove: {
                    url: null,
                    template: null,
                    batch: false
                },
                encodeRemoveInRequestUri: true
            },
            alternateRowStyles: true,
            autofitLastColumn: true,
            enableHoverStyles: true,
            enableUTCDates: false,
            mergeUnboundColumns: false
        },

        events: {
            cellClick: "cellClick",
            dataBinding: "dataBinding",
            dataBound: "dataBound",
            rendering: "rendering",
            rendered: "rendered",
            dataRendering: "dataRendering",
            dataRendered: "dataRendered",
            headerRendering: "headerRendering",
            headerRendered: "headerRendered",
            footerRendering: "footerRendering",
            footerRendered: "footerRendered",
            headerCellRendered: "headerCellRendered",
            rowsRendering: "rowsRendering",
            rowsRendered: "rowsRendered",
            schemaGenerated: "schemaGenerated",
            columnsCollectionModified: "columnsCollectionModified",
            requestError: "requestError",
            created: "igcontrolcreated"
        },

        resizeTimeout: 300,

        speedupDOMCleanup: false,

        widget: function () {
            return this.element
        },

        _createWidget: function (options, element) {
            this.options.columns = [];
            this.options.features = [];
            if (options.dataSource && ($.type(options.dataSource) === "array" || $.type(options.dataSource) === "object")) {
                this.tmpDataSource = options.dataSource;
                options.dataSource = null;
                this._originalOptions = options
            }
            $.Widget.prototype._createWidget.apply(this, arguments)
        },

        _init: function () {

        },

        _setOption: function (key, value) {
            var header, isScrolling, id = this.element[0].id + "_scroll";
            if (value === this.options[key]) {
                return
            }
            isScrolling = (this.options.height !== null || this.options.width !== null);
            $.Widget.prototype._setOption.apply(this, arguments);
            if (key === "virtualization" || key === "autoGenerateColumns" || key === "accessibilityRendering" || key === "rowVirtualization" || key === "columnVirtualization" || key === "fixedHeaders" || key === "scrollbars") {
                throw new Error($.ig.Grid.locale.optionChangeNotSupported + " " + key)
            }
            if (key === "width") {
                if (isScrolling === true) {
                    this.container().css("width", value);
                    this.element.css("width", value);
                    if (this.options.fixedHeaders) {
                        this.headersTable().css("width", value)
                    }
                } else {
                    throw new Error($.ig.Grid.locale.optionChangeNotScrollingGrid + " " + key)
                }
            } else {
                if (key === "height") {
                    if (isScrolling === true) {
                        $("#" + id).css("overflow-y", "auto");
                        if (this.options.autoAdjustHeight) {
                            this.container().css("height", value);
                            this._initializeHeights()
                        } else {
                            this.scrollContainer().css("height", value)
                        }
                    } else {
                        throw new Error($.ig.Grid.locale.optionChangeNotScrollingGrid + " " + key)
                    }
                } else {
                    if (key === "dataSource") {
                        this.options.dataSource = value;
                        this.dataBind();
                        this._adjustLastColumnWidth(true)
                    } else {
                        if (key === "showHeader") {
                            header = $("#" + this.id() + "_headers");
                            if (header.length > 0 && header.is("table")) {
                                if (value === true) {
                                    header.show()
                                } else {
                                    header.hide()
                                }
                            } else {
                                header = this.element.find("thead tr");
                                if (value === true) {
                                    header.show()
                                } else {
                                    header.hide()
                                }
                            }
                        } else {
                            if (key === "caption") {
                                $("#" + this.id() + "_caption").text(value)
                            }
                        }
                    }
                }
            }
        },

        _initialized: false,

        _headersInitialized: false,

        _footerInitialized: false,

        _create: function () {
            var grid = this, i, newCols, cols, oldCols;
            this._isHierarchicalGrid = false;
            this._hasUnboundColumns = false;
            if (this.options._isHierarchicalGrid === true) {
                this._isHierarchicalGrid = true
            }
            this._rtl = this.element.css("direction") === "rtl";
            this._padding = this._rtl ? "padding-left" : "padding-right";
            this._tmap = null;
            if (this.tmpDataSource !== null && this.tmpDataSource !== undefined) {
                this.options.dataSource = this.tmpDataSource;
                this._originalOptions.dataSource = this.tmpDataSource
            }
            this._testInnerHtml();
            this._headerInitCallbacks = [];
            this._footerInitCallbacks = [];
            this._firstBind = true;
            this._isMultiColumnGrid = false;
            this._unboundValues = {};
            if (this._isMultiColumnHeader() === true) {
                this._isMultiColumnGrid = true;
                newCols = [];
                cols = this.options.columns.slice(0);
                oldCols = this.options.columns.slice(0);
                this._multiColumnIdentifier = 0;
                this._maxLevel = this._getMaxLevelRecursive(0, cols);
                this._hiddenColumns = {};
                this._analyzeMultiColumnHeaders(cols, newCols, 0, oldCols, []);
                this._oldCols = oldCols;
                this.options.columns = newCols;
                this._headerCells = []
            }
            if (this.options.rowVirtualization === true && this.options.virtualizationMode === "continuous") {
                this.options.virtualization = true
            }
            if (this.options.columnVirtualization === true) {
                this.options.virtualization = true;
                if (this.options.virtualizationMode === "continuous") {
                    throw new Error($.ig.Grid.locale.colVirtualizationDenied)
                }
                this.options.virtualizationMode = "fixed"
            }
            if (this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true) {
                if (this.options.virtualizationMode === undefined || this.options.virtualizationMode === "") {
                    this.options.virtualizationMode = "fixed"
                }
                if (this.options.virtualizationMode === "fixed") {
                    this.options.fixedHeaders = true;
                    this.options.fixedFooters = true
                }
            }
            if (this.options.virtualization === true && this.options.virtualizationMode === "continuous") {
                this.options.fixedHeaders = true
            }
            if ((this.options.height === null || parseInt(this.options.height, 10) <= 0) && this.options.fixedHeaders === true) {
                this.options.fixedHeaders = false
            }
            if ((this.options.height === null || parseInt(this.options.height, 10) <= 0) && this.options.fixedFooters === true) {
                this.options.fixedFooters = false
            }
            this.dataBind(true);
            this._cellClickHandler = function (event) {
                var row = $(event.target).closest("tr"), key = row.attr("data-id"), colKey, colIndex = $(event.target).closest("td").index();
                if (key === "" || key === null || key === undefined) {
                    key = row.index()
                }
                if (colIndex >= 0 && colIndex < grid._visibleColumns().length) {
                    colKey = grid._visibleColumns()[colIndex].key
                }
                if ($(event.target).is("td") || ($(event.target).closest("td").length === 1 && $(event.target).closest("td").parent().attr("data-container") !== "true")) {
                    grid._trigger(grid.events.cellClick, event, {
                        rowIndex: row.index(),
                        rowKey: key,
                        colIndex: colIndex,
                        colKey: colKey,
                        cellElement: event.target,
                        owner: grid
                    })
                }
            };
            this.element.bind({
                click: this._cellClickHandler
            });
            if ((this.options.height !== null && this.options.height.indexOf && this.options.height.indexOf("%") !== -1) || (this.options.height !== null && this.options.width !== null)) {
                this._resId = setInterval($.proxy(this._resizeContainer, this), this.resizeTimeout)
            }
            for (i = 0; i < this.options.columns.length; i++) {
                if (this.options.columns[i].hidden === undefined) {
                    this.options.columns[i].hidden = false
                }
            }
            this._uiSoftDirtyHandler = $.proxy(this._onFeaturesSoftDirty, this);
            this.element.bind("iggriduisoftdirty", this._uiSoftDirtyHandler);
            this._oldScrollTop = 0;
            this.element.trigger(this.events.created, {
                owner: this
            });
            if (this._rtl) {
                this.container().addClass(this.css.rtl)
            }
        },

        _testInnerHtml: function () {
            var t = document.createElement("table");
            try {
                t.innerHTML = "<tr><td> t </td></tr>";
                this._canreplaceinner = true
            } catch (e) {
                this._canreplaceinner = false
            }
        },

        _resizeContainer: function () {
            var scrollContainerWidth, o = this.options, v = o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true;
            if (o.autoAdjustHeight && this.container().height() !== this._prevContainerHeight) {
                this._initializeHeights()
            }
            if (o.width !== null && o.height !== null) {
                if (v === false) {
                    scrollContainerWidth = this.scrollContainer().width()
                } else {
                    scrollContainerWidth = $("#" + this.element[0].id + "_displayContainer").width() + this._scrollbarWidth()
                }
                if (this._gridInnerWidth !== scrollContainerWidth && this._gridInnerWidth > 0) {
                    this._gridInnerWidth = scrollContainerWidth;
                    this._updateHScrollbarVisibility()
                }
            }
        },

        _isMultiColumnHeader: function () {
            var cols = this.options.columns, i;
            for (i = 0; i < cols.length; i++) {
                if (cols[i].group !== undefined && cols[i].group !== null) {
                    return true
                }
            }
            return false
        },

        _analyzeMultiColumnHeaders: function (cols, newCols, level, oldCols, children, isHidden) {
            var i, j, res, colsLength = cols.length, colspan = 0, ind = [], isGroup = false, groupChildren = [], identifier, hidden;
            for (i = 0; i < colsLength; i++) {
                if (cols[i].group !== undefined && cols[i].group !== null) {
                    if (cols[i].key !== undefined && cols[i].key !== null) {
                        identifier = cols[i].key.toString()
                    } else {
                        identifier = (this._multiColumnIdentifier++).toString()
                    }
                    cols[i].identifier = identifier;
                    isGroup = true;
                    groupChildren = [];
                    hidden = false;
                    if (isHidden === true || cols[i].hidden === true) {
                        hidden = true
                    }
                    res = this._analyzeMultiColumnHeaders(cols[i].group, newCols, level + 1, oldCols[i].group, groupChildren, hidden);
                    oldCols[i].colspan = res.colspan;
                    oldCols[i].children = groupChildren;
                    for (j = 0; j < groupChildren.length; j++) {
                        children.push(groupChildren[j])
                    }
                    ind.push(i);
                    colspan += res.colspan
                } else {
                    colspan++;
                    oldCols[i].level = 0;
                    oldCols[i].level0 = true;
                    if (isHidden === true) {
                        cols[i].hidden = true
                    }
                    children.push(cols[i]);
                    newCols.push(cols[i])
                }
            }
            for (j = 0; j < ind.length; j++) {
                oldCols[ind[j]].level = this._maxLevel - level
            }
            return {
                colspan: colspan
            }
        },

        _getMultiHeaderColumnById: function (id, level, cols) {
            var i, colsLength, res = null;
            if (cols === null || cols === undefined) {
                cols = this._oldCols
            }
            colsLength = cols.length;
            for (i = 0; i < colsLength; i++) {
                if (cols[i].identifier === id && (level === undefined || cols[i].level === level)) {
                    return cols[i]
                }
                if (cols[i].group !== null && cols[i].group !== undefined) {
                    res = this._getMultiHeaderColumnById(id, level, cols[i].group);
                    if (res !== null) {
                        return res
                    }
                }
            }
            return null
        },

        _getMaxLevelRecursive: function (level, cols) {
            var i, colsLength = cols.length, ml = level, l, isGroup = false, rowspan;
            for (i = 0; i < colsLength; i++) {
                rowspan = 1;
                if (cols[i].rowspan !== null && cols[i].rowspan !== undefined && cols[i].rowspan > 0) {
                    rowspan = cols[i].rowspan
                }
                if (cols[i].group !== undefined && cols[i].group !== null) {
                    isGroup = true;
                    l = this._getMaxLevelRecursive(level + rowspan, cols[i].group);
                    if (l > ml) {
                        ml = l
                    }
                } else {
                    if (rowspan > 0) {
                        l = level + rowspan - 1;
                        if (l > ml) {
                            ml = l
                        }
                    }
                }
            }
            return ml
        },

        _headerInit: function (tr, colgroup, prepend) {
            var i;
            for (i = 0; i < this._headerInitCallbacks.length; i++) {
                this._headerInitCallbacks[i].func(tr, colgroup, prepend)
            }
        },

        _footerInit: function (tr, colgroup, prepend, cssClass) {
            var i;
            for (i = 0; i < this._footerInitCallbacks.length; i++) {
                this._footerInitCallbacks[i].func(tr, colgroup, prepend, cssClass)
            }
        },

        id: function () {
            return this.element[0].id
        },

        container: function () {
            return $("#" + this.element[0].id + "_container")
        },

        headersTable: function () {
            if (this.options.fixedHeaders === true && this.options.height !== null) {
                return $("#" + this.element[0].id + "_headers")
            }
            return this.element
        },

        footersTable: function () {
            if (this.options.fixedFooters === true && this.options.height !== null) {
                return $("#" + this.element[0].id + "_footers")
            }
            return this.element
        },

        scrollContainer: function () {
            return $("#" + this.element[0].id + "_scroll")
        },

        cellAt: function (x, y) {
            var i;
            if (x === undefined || y === undefined) {
                return null
            }
            if (this.table === undefined) {
                this.table = this.element[0]
            }
            i = this._dataRowIndex(y);
            return this.table.rows[i].cells[x]
        },

        _calculateHeaderFooterRows: function () {
            var theadCount = 0, tfootCount = 0;
            theadCount = this.element.children("thead").children("tr").length;
            if ($.browser.opera) {
                tfootCount = this.element.children("tfoot").children("tr").length
            }
            return theadCount + tfootCount
        },

        _dataRowIndex: function (i) {
            var extrahr, j;
            if (this.table === undefined) {
                this.table = this.element[0]
            }
            if (this._additionalTrCount === undefined || this._additionalTrCount === null) {
                this._additionalTrCount = this._calculateHeaderFooterRows()
            }
            if (this._hc === true) {
                extrahr = this.element.children("tbody").children("tr[data-container]");
                for (j = 0; j < extrahr.length; j++) {
                    if ($(extrahr[j]).index() <= i) {
                        i += 1
                    }
                }
            }
            i = i + this._additionalTrCount;
            if (i >= this.table.rows.length) {
                i = this.table.rows.length - 1
            } else {
                if (i < 0) {
                    i = 0
                }
            }
            return i
        },

        immediateChildrenWidgets: function () {
            return this.element.children("tbody").children("tr").children(".ui-iggrid-childarea").children("div").children("div").map(function () {
                if ($(this).children(".ui-iggrid-scrolldiv").length > 0) {
                    return $(this).children(".ui-iggrid-scrolldiv").children(".ui-iggrid-table").data("igGrid")
                }
                return $(this).children(".ui-iggrid-table").data("igGrid")
            })
        },

        childrenWidgets: function () {
            return this.element.find("tbody > tr > .ui-iggrid-childarea").find(".ui-iggrid-table").map(function () {
                return $(this).data("igGrid")
            })
        },

        children: function () {
            return this.element.find("tbody > tr > .ui-iggrid-childarea").find(".ui-iggrid-table")
        },

        immediateChildren: function () {
            return this.element.children("tbody").children("tr").children(".ui-iggrid-childarea").children("div").children("div").map(function () {
                if ($(this).children(".ui-iggrid-scrolldiv").length > 0) {
                    return $(this).children(".ui-iggrid-scrolldiv").children(".ui-iggrid-table")
                }
                return $(this).children(".ui-iggrid-table")
            })
        },

        rowAt: function (i) {
            i = this._dataRowIndex(i);
            return this.table.rows[i]
        },

        rows: function () {
            return this.element.children("tbody").children("tr")
        },

        allRows: function () {
            return this.element.find("tbody tr")
        },

        columnByKey: function (key) {
            var cols = this.options.columns, i;
            for (i = 0; i < cols.length; i++) {
                if (cols[i].key === key) {
                    return cols[i]
                }
            }
            return null
        },

        columnByText: function (text) {
            var cols = this.options.columns, i;
            for (i = 0; i < cols.length; i++) {
                if (cols[i].headerText === text) {
                    return cols[i]
                }
            }
            return null
        },

        activeCell: function () {
            return this._activeCell
        },

        activeRow: function () {
            return this._activeRow
        },

        selectedCell: function () {
            return this._selectedCell
        },

        selectedRow: function () {
            return this._selectedRow
        },

        selectedCells: function () {
            return this._selectedCells
        },

        selectedRows: function () {
            return this._selectedRows
        },

        getCellValue: function (rowId, colKey) {
            var id = parseInt(rowId, 10), col, i, cols = this.options.columns, colFound = false, rec, primaryKeyCol, tx;
            tx = this.dataSource.pendingTransactions();
            if (this.options.autoCommit === false && tx.length > 0) {
                for (i = 0; i < tx.length; i++) {
                    if (tx[i].rowId === rowId) {
                        if (tx[i].type === "cell" && tx[i].col === colKey) {
                            return tx[i].value
                        }
                        if (tx[i].type === "row" || tx[i].type === "newrow") {
                            return tx[i].row[colKey]
                        }
                    }
                }
            }
            if (this.options.primaryKey !== null) {
                primaryKeyCol = this.columnByKey(this.options.primaryKey);
                if (primaryKeyCol.dataType === "number" || primaryKeyCol.dataType === "numeric") {
                    rec = this.dataSource.findRecordByKey(parseInt(rowId, 10))
                } else {
                    rec = this.dataSource.findRecordByKey(rowId)
                }
                if (rec === null || rec === undefined) {
                    throw new Error($.ig.Grid.locale.recordNotFound + " " + rowId)
                }
                return rec[colKey]
            }
            if (id >= this.dataSource.dataView().length) {
                throw new Error($.ig.Grid.locale.indexOutOfRange)
            }
            if ($.type(colKey) === "string") {
                for (i = 0; i < cols.length; i++) {
                    if (cols[i].key === colKey) {
                        col = cols[i];
                        colFound = true;
                        break
                    }
                }
                if (colFound === false) {
                    throw new Error($.ig.Grid.locale.noSuchColumnDefined)
                }
                return this.dataSource.dataView()[id][colKey]
            }
            if (cols.length <= colKey) {
                throw new Error($.ig.Grid.locale.columnIndexOutOfRange)
            }
            return this.dataSource.dataView()[id][colKey]
        },

        getCellText: function (rowId, colKey) {
            var i, cols = this.options.columns, colIndex, primaryKeyIndex, skippedCells = 0, parent;
            if ($.type(colKey) === "string") {
                for (i = 0; i < cols.length; i++) {
                    if (cols[i].key === colKey) {
                        colIndex = i;
                        break
                    }
                }
            } else {
                colIndex = colKey
            }
            if (colIndex === undefined) {
                throw new Error($.ig.Grid.locale.columnNotFound + " " + colKey)
            }
            if (this.options.primaryKey !== null) {
                for (i = 0; i < cols.length; i++) {
                    if (cols[i].key === this.options.primaryKey) {
                        primaryKeyIndex = i;
                        break
                    }
                }
                if (primaryKeyIndex === undefined) {
                    throw new Error($.ig.Grid.locale.columnNotFound + " " + this.options.primaryKey)
                }
                parent = this.element.find("[data-id=" + rowId + "]");
                skippedCells = parent.children("[data-skip=true]").length;
                skippedCells += parent.children("[data-parent=true]").length;
                return parent.children("td:nth-child(" + (colIndex + 1 + skippedCells) + ")").text()
            }
            return $(this.cellAt(colIndex, parseInt(rowId, 10))).text()
        },

        commit: function (id) {
            var key;
            key = this._normalizedKey(id);
            this.dataSource.commit(key);
            this._renderData()
        },

        rollback: function (id, updateUI) {
            var rec, tr, primaryKeyIndex, cols = this.options.columns, key, i;
            key = this._normalizedKey(id);
            this.dataSource.rollback(key);
            if (updateUI === true && id !== null && id !== undefined) {
                if (this.options.primaryKey !== null) {
                    rec = this.dataSource.findRecordByKey(key);
                    if (rec === undefined || rec === null) {
                        throw new Error($.ig.Grid.locale.recordNotFound + " " + id)
                    }
                    for (i = 0; i < cols.length; i++) {
                        if (cols[i].key === this.options.primaryKey) {
                            primaryKeyIndex = i;
                            break
                        }
                    }
                    if (primaryKeyIndex === undefined) {
                        throw new Error($.ig.Grid.locale.columnNotFound + " " + this.options.primaryKey)
                    }
                    tr = this.element.find("td:nth-child(" + (primaryKeyIndex + 1) + "):contains('" + id + "')").parent()[0]
                } else {
                    if (parseInt(id, 10) >= this.dataSource.dataView().length) {
                        throw new Error($.ig.Grid.locale.indexOutOfRange)
                    }
                    rec = this.dataSource.dataView()[parseInt(id, 10)];
                    tr = this.rowAt(parseInt(id, 10))
                }
                $(tr).removeClass(this.css.deletedRecord);
                tr._deleted = null;
                this._renderRow(rec, tr)
            } else {
                if (id === true || updateUI === true) {
                    this.dataBind()
                }
            }
            if ((updateUI === true || updateUI === undefined) && (id === undefined || id === null)) {
                this._renderData()
            }
        },

        findRecordByKey: function (key) {
            return this.dataSource.findRecordByKey(key)
        },

        getDetachedRecord: function (t) {
            return this.dataSource.getDetachedRecord(t)
        },

        pendingTransactions: function () {
            return this.dataSource.pendingTransactions()
        },

        allTransactions: function () {
            return this.dataSource.allTransactions()
        },

        transactionsAsString: function () {
            return this.dataSource.transactionsAsString()
        },

        _normalizedKey: function (id) {
            var key, primaryKeyCol;
            if (id === undefined || id === null) {
                return null
            }
            key = id;
            if (this.options.primaryKey !== null) {
                primaryKeyCol = this.columnByKey(this.options.primaryKey);
                if (primaryKeyCol.dataType === "number" || primaryKeyCol.dataType === "numeric") {
                    key = parseInt(id, 10)
                }
            } else {
                key = parseInt(id, 10)
            }
            return key
        },

        saveChanges: function () {
            this.dataSource.saveChanges()
        },

        _renderRow: function (rec, tr, rowId) {
            var i, td, col, id = 0, css, cols = this.options.columns, content, index;
            for (i = 0; i < tr.cells.length; i++) {
                td = $(tr.cells[i]);
                css = td[0].className;
                if (id > 0 || !(td.attr("data-skip") || (css && (css.indexOf("-expandcolumn") > 0 || css.indexOf("-rowselector") > 0)))) {
                    while (true) {
                        col = cols[id];
                        if (!col) {
                            return tr
                        }
                        if (!col.hidden) {
                            break
                        }
                        id++
                    }
                    if (this.options.rowTemplate && this.options.rowTemplate.length > 0) {
                        content = this._renderTemplatedCell(rec, col);
                        index = content.indexOf(">");
                        content = content.substring(index + 1, content.length);
                        td.html(content)
                    } else {
                        td.html(this._renderCell(rec[col.key], col))
                    }
                    id++
                }
            }
            return tr
        },

        renderNewRow: function (rec, key) {
            var tbody = this.element.children("tbody"), index = tbody.children('[data-container!="true"]').length;
            tbody.append(this._renderRecord(rec, index))
        },

        _findTableRowByKey: function (key) {
            var primaryKeyIndex, cols = this.options.columns, r, i;
            if (this.options.primaryKey !== null) {
                for (i = 0; i < cols.length; i++) {
                    if (cols[i].key === this.options.primaryKey) {
                        primaryKeyIndex = i;
                        break
                    }
                }
                if (primaryKeyIndex === undefined) {
                    throw new Error($.ig.Grid.locale.columnNotFound + " " + this.options.primaryKey)
                }
                r = this.element.find("td:nth-child('" + (primaryKeyIndex + 1) + "'):contains('" + key + "')").parent();
                return r.length === 0 ? null : r[0]
            }
            return this.rowAt(parseInt(key, 10))
        },

        dataSourceObject: function (dataSource) {
            if (dataSource !== undefined) {
                this.options.dataSource = dataSource
            } else {
                return this.options.dataSource
            }
        },

        totalRecordsCount: function () {
            return this.dataSource.totalRecordsCount()
        },

        dataBind: function (internal) {
            var dataOptions, i, noCancel = true, noCancelRendering = true;
            if (!this._initialized) {
                noCancelRendering = this._trigger(this.events.rendering, null, {
                    owner: this
                })
            }
            if (noCancelRendering) {
                noCancel = this._trigger(this.events.dataBinding, null, {
                    owner: this
                });
                if (internal === undefined) {
                    this.options.requiresDataBinding = true
                }
                if (noCancel) {
                    if (this.options.requiresDataBinding) {
                        dataOptions = this._generateDataSourceOptions(this.options);
                        this._setupDataSource(dataOptions);
                        this._dataOptions = dataOptions;
                        if (!this._initialized) {
                            if (this.element.is("div")) {
                                this._isWrapped = true;
                                this.element = $("<table></table>").appendTo(this.element).attr("id", this.element[0].id + "_table");
                                this.element.data("igGrid", this)
                            }
                            for (i = 0; i < this.options.features.length; i++) {
                                this._initFeature(this.options.features[i], dataOptions)
                            }
                            if (this.options.autoGenerateColumns !== true) {
                                this._captureInitiallyHiddenColumns()
                            }
                            this._visibleColumnsArray = undefined
                        } else {
                            this.element.trigger("iggriduidirty", {
                                owner: this
                            });
                            for (i = 0; i < this.options.features.length; i++) {
                                this._initFeatureSettings(this.options.features[i])
                            }
                        }
                        this._renderGrid();
                        if (this._loadingIndicator === undefined) {
                            this._initLoadingIndicator()
                        }
                        if (this._loadingIndicator) {
                            this._loadingIndicator.show()
                        }
                        this.dataSource.dataBind();
                        this.options.requiresDataBinding = false
                    } else {
                        this._renderGrid()
                    }
                }
            } else {
                this._cancelRendering = true
            }
        },

        _mergeUnboundValues: function () {
            var i, primaryKeyCol, metadataUC, rec, ucLength, primaryKeyColIsNumber, col, schema, type, dataLength, data, key, pk = this.options.primaryKey, metadata = this.dataSource.metadata("unboundValues"), self = this, hasPrimaryKey = (pk !== null && pk !== undefined), metaDataMergeFunction;
            if (metadata === undefined || metadata === null || metadata.length === 0 || !this._unboundColumns) {
                return
            }
            if (hasPrimaryKey) {
                metaDataMergeFunction = function (ind, val) {
                    if (primaryKeyColIsNumber) {
                        rec = self.dataSource.findRecordByKey(parseInt(ind, 10))
                    } else {
                        rec = self.dataSource.findRecordByKey(ind)
                    }
                    if (rec === null || rec === undefined) {
                        return true
                    }
                    if (schema !== undefined && schema !== null) {
                        val = schema._convertType(type, val, rec[pk], key)
                    }
                    self._addUnboundColumnValue(key, val);
                    rec[key] = val
                };
                primaryKeyCol = this.columnByKey(pk);
                primaryKeyColIsNumber = (primaryKeyCol.dataType === "number")
            }
            ucLength = this._unboundColumns.length;
            schema = this.dataSource.schema();
            for (i = 0; i < ucLength; i++) {
                key = this._unboundColumns[i].key;
                metadataUC = metadata[key];
                if (metadataUC === null || metadataUC === undefined) {
                    continue
                }
                col = this.getUnboundColumnByKey(key);
                type = null;
                if (col !== null && col.dataType) {
                    type = col.dataType
                }
                if (hasPrimaryKey) {
                    $.each(metadataUC, metaDataMergeFunction)
                } else {
                    self.setUnboundValues(metadataUC, key)
                }
                if (type === "bool" || type === "boolean") {
                    data = this.dataSource.data();
                    val = schema._convertType(type, undefined);
                    dataLength = data.length;
                    if (dataLength <= metadataUC.length) {
                        continue
                    }
                    for (j = 0; j < dataLength; j++) {
                        if (data[j][key] === undefined) {
                            data[j][key] = val
                        }
                    }
                }
            }
        },

        _generateDataSourceOptions: function (options) {
            var schema, dataOptions, t, headers, i;
            if (!this.options.dataSource && !this.options.dataSourceUrl && this.element.is("table") && this.element.find("tbody").children().length > 0) {
                this.options.dataSource = this.element[0]
            }
            if (this.options.dataSource && this.options.dataSource.tagName && this.options.dataSource.nodeType) {
                t = $(this.options.dataSource);
                if (t.is("table") && t.find("thead th").length > 0) {
                    headers = t.find("thead tr th");
                    this._tb_h = true;
                    this._tb_h_arr = [];
                    for (i = 0; i < headers.length; i++) {
                        this._tb_h_arr.push($(headers[i]).text())
                    }
                }
            }
            dataOptions = {
                callback: $.proxy(this._renderData, this),
                callee: this,
                responseDataKey: this.options.responseDataKey,
                responseTotalRecCountKey: this.options.responseTotalRecCountKey,
                dataSource: this.options.dataSource,
                primaryKey: this.options.primaryKey,
                localSchemaTransform: this.options.localSchemaTransform,
                autoCommit: this.options.autoCommit,
                aggregateTransactions: this.options.aggregateTransactions,
                serializeTransactionLog: this.options.serializeTransactionLog,
                updateUrl: this.options.updateUrl,
                restSettings: this.options.restSettings
            };
            if (this.options.dataSourceType !== null) {
                dataOptions.type = this.options.dataSourceType
            }
            if (!this.options.dataSource || !this.options.dataSource.schema || !this.options.dataSource.schema() || this.options.dataSource.schema()._type !== "xml") {
                schema = this._generateDataSourceSchema()
            }
            if ((this.options.dataSource instanceof $.ig.DataSource && (this.options.dataSource.settings.schema === null || (this.options.dataSource.settings.schema.fields && this.options.dataSource.settings.schema.fields.length >= 0))) || !(this.options.dataSource instanceof $.ig.DataSource)) {
                dataOptions = $.extend(dataOptions, {
                    schema: schema
                })
            }
            return dataOptions
        },

        _insertUnboundColumn: function (column) {
            if (this._unboundColumns === null || this._unboundColumns === undefined) {
                this._unboundColumns = []
            }
            this._unboundColumns.push(column);
            if (column.key && (this._unboundValues[column.key] === null || this._unboundValues[column.key] === undefined)) {
                this._unboundValues[column.key] = []
            }
            this._hasUnboundColumns = true
        },

        _addUnboundColumnValue: function (key, value, index) {
            if (this._unboundValues[key] === null || this._unboundValues[key] === undefined) {
                this._unboundValues[key] = []
            }
            if (index !== undefined && index !== null) {
                this._unboundValues[key][index] = value
            } else {
                this._unboundValues[key].push(value)
            }
        },

        _generateDataSourceSchema: function () {
            var schema, i, rec, prop, count = 0, cols = this.options.columns, ds = this.options.dataSource, cl, counter = 0;
            if (ds instanceof $.ig.DataSource) {
                if ($.type(ds.settings.dataSource) === "array" || $.type(ds.settings.dataSource) === "object") {
                    ds = ds.settings.dataSource
                } else {
                    if ($.type(ds.settings.dataSource) !== "string") {
                        ds = ds.data()
                    } else {
                        ds = []
                    }
                }
            }
            if ($.type(ds) === "object" && this.options.responseDataKey) {
                ds = $.ig.findPath(ds, this.options.responseDataKey)
            }
            schema = {};
            schema.fields = [];
            schema.searchField = this.options.responseDataKey;
            if (cols.length > 0 && !this.options.autoGenerateColumns) {
                for (i = 0; i < cols.length; i++) {
                    if (cols[i].unbound === true || cols[i].unboundDS === true) {
                        this._insertUnboundColumn(cols[i]);
                        if (cols[i].unbound === true) {
                            continue
                        }
                    }
                    schema.fields[counter] = {};
                    schema.fields[counter].name = cols[i].key;
                    schema.fields[counter].type = cols[i].dataType;
                    counter++
                }
            } else {
                if (this.options.autoGenerateColumns) {
                    if (ds && ds.tagName && $(ds).is("table") && $(ds).find("tbody tr").length > 0) {
                        rec = $(ds).find("tbody tr")[0];
                        $(rec).find("td").each(function () {
                            if (cols.length > count) {
                                schema.fields.push({
                                    name: cols[count].key || (count + 1),
                                    type: cols[count].dataType || "string"
                                })
                            } else {
                                schema.fields.push({
                                    name: (count + 1),
                                    type: "string"
                                })
                            }
                            count++
                        })
                    } else {
                        if (ds && ds.length && ds.length > 0 && $.type(ds) === "array") {
                            for (i = 0; i < ds.length; i++) {
                                rec = ds[i];
                                for (prop in rec) {
                                    if (rec.hasOwnProperty(prop)) {
                                        if (this.columnByKey(prop) === null && !this._fieldExists(prop, schema) && $.type(rec[prop]) !== "object" && $.type(rec[prop]) !== "array") {
                                            schema.fields.push({
                                                name: prop,
                                                type: $.ig.getColType(rec[prop])
                                            })
                                        } else {
                                            if (this.columnByKey(prop) !== null) {
                                                schema.fields.push({
                                                    name: prop,
                                                    type: this.columnByKey(prop).dataType
                                                })
                                            }
                                        }
                                        count++
                                    }
                                }
                                if (!this.options._recurseSchema) {
                                    break
                                }
                            }
                        }
                    }
                    for (i = 0; i < cols.length; i++) {
                        if (cols[i].unbound === true || cols[i].unboundDS === true) {
                            this._insertUnboundColumn(cols[i])
                        }
                    }
                }
            }
            this._trigger(this.events.schemaGenerated, null, {
                owner: this,
                schema: schema,
                dataSource: ds
            });
            cl = this.options.columnLayouts;
            if (cl && cl.length && cl.length > 0) {
                for (i = 0; i < cl.length; i++) {
                    schema.fields.push({
                        name: cl[i].key
                    })
                }
            }
            return schema
        },

        _fieldExists: function (prop, schema) {
            var i;
            for (i = 0; i < schema.fields.length; i++) {
                if (schema.fields[i].name === prop) {
                    return true
                }
            }
            return false
        },

        _setupDataSource: function (dataOptions) {
            if (!(this.options.dataSource instanceof $.ig.DataSource)) {
                if ($.type(dataOptions.dataSource) === "string" && dataOptions.dataSource.indexOf("$callback=?") !== -1) {
                    this.dataSource = new $.ig.JSONPDataSource(dataOptions)
                } else {
                    if (this.options.restSettings.update.url !== null || this.options.restSettings.update.template !== null || this.options.restSettings.create.url !== null || this.options.restSettings.create.template !== null || this.options.restSettings.remove.url !== null || this.options.restSettings.remove.template !== null) {
                        this.dataSource = new $.ig.RESTDataSource(dataOptions)
                    } else {
                        this.dataSource = new $.ig.DataSource(dataOptions)
                    }
                }
            } else {
                this.dataSource = this.options.dataSource;
                if (this.dataSource.settings.responseDataKey !== null) {
                    delete dataOptions.responseDataKey;
                    if (dataOptions.schema) {
                        dataOptions.schema.searchField = this.dataSource.settings.responseDataKey
                    }
                }
                this._tds = this.dataSource.settings.dataSource;
                this.dataSource.settings.dataSource = null;
                this.dataSource.settings = $.extend(true, {}, this.dataSource.settings, dataOptions);
                this.dataSource.settings.dataSource = this._tds;
                this._tds = null;
                if (dataOptions.schema) {
                    this.dataSource._initSchema()
                }
            }
        },

        _generateColumns: function () {
            var r, key, i, hasExplicitCols = this.options.columns.length > 0, hasHeaders = false, len, col, isTable = false, arr = [], ds = this.options.dataSource, cdp = this.options.childrenDataProperty, newDs;
            if (ds instanceof $.ig.DataSource) {
                ds = ds.data()
            } else {
                if (typeof (ds) === "string") {
                    ds = this.dataSource.data()
                }
            }
            if ($.type(ds) === "object" && this.options.responseDataKey) {
                newDs = $.ig.findPath(ds, this.options.responseDataKey);
                if ($.type(newDs) === "array") {
                    ds = newDs
                }
            }
            if (ds && ds.tagName && $(ds).is("table")) {
                len = $(ds).find("tbody tr").length;
                isTable = true
            } else {
                if (ds && ds.length) {
                    len = ds.length
                }
            }
            if (ds && len && len === 0 && this.options.columns.length === 0) {
                throw new Error($.ig.Grid.locale.autoGenerateColumnsNoRecords)
            } else {
                if (ds && len && len > 0) {
                    if (isTable) {
                        r = $(ds).find("tbody tr")[0]
                    } else {
                        r = ds[0]
                    }
                    if ($.type(r) === "array" || isTable) {
                        hasHeaders = this._tb_h;
                        if (isTable) {
                            $(r).find("td").each(function () {
                                arr.push($(this).text())
                            });
                            r = arr
                        }
                        for (i = 0; i < r.length; i++) {
                            if (this.columnByKey(i + 1) === null && $.ig.getColType(r[i]) !== "object") {
                                col = {
                                    headerText: hasHeaders ? this._tb_h_arr[i] : $.ig.Grid.locale.colPrefix + (i + 1),
                                    key: (i + 1),
                                    dataType: $.ig.getColType(r[i]),
                                    hidden: false
                                };
                                if (this._isMultiColumnGrid) {
                                    col.level0 = true;
                                    col.level = 0;
                                    this._oldCols.push(col)
                                }
                                this.options.columns.push(col);
                                this._visibleColumnsArray = undefined
                            } else {
                                if (hasHeaders && !this.columnByKey(i + 1).headerText) {
                                    this.columnByKey(i + 1).headerText = this._tb_h_arr[i]
                                }
                            }
                        }
                    } else {
                        for (key in r) {
                            if (r.hasOwnProperty(key) && this.columnByKey(key) === null) {
                                if (((cdp && cdp !== key) || !cdp) && $.ig.getColType(r[key]) !== "object" && key !== "ig_pk") {
                                    col = {
                                        headerText: key,
                                        key: key,
                                        dataType: $.ig.getColType(r[key]),
                                        hidden: false
                                    };
                                    this.options.columns.push(col);
                                    if (this._isMultiColumnGrid) {
                                        col.level0 = true;
                                        col.level = 0;
                                        this._oldCols.push(col)
                                    }
                                    this._visibleColumnsArray = undefined
                                }
                            }
                        }
                    }
                }
            }
            if ((this.dataSource.schema() === null || this.dataSource.schema().fields().length === 0) && !hasExplicitCols) {
                this.dataSource.settings.schema = this._generateDataSourceSchema();
                this.dataSource._initSchema()
            }
            if (this.options.width === null) {
                this._setContainerWidth(this.element[0].id + "_container")
            }
            this._trigger("columnsgenerated", null, {
                owner: this,
                key: this.options.key
            })
        },

        _renderGrid: function () {
            var gridElement = this.element[0], containerId, containerDiv, tbody = this.element.children("tbody"), ar = this.options.accessibilityRendering;
            this._cancelRendering = false;
            if (!this._initialized) {
                if ($.type(this.options.virtualization) === "number" && this.dataSource.dataView().length > this.options.virtualization && this.options.height !== null) {
                    this.options.virtualization = true
                }
                if (ar) {
                    this.element.attr("role", "grid")
                }
                if (this.options.virtualization === true || this.options.rowVirtualization === true || this.options.columnVirtualization === true) {
                    if (this.options.height === undefined || this.options.height === null) {
                        throw new Error($.ig.Grid.locale.virtualizationRequiresHeight)
                    }
                    this._createVirtualGrid()
                } else {
                    if (this.options.height !== null || this.options.width !== null) {
                        this._createScrollingGrid()
                    } else {
                        containerId = gridElement.id + "_container";
                        containerDiv = '<div id="' + containerId + '" class="' + this.css.gridClasses + " " + this.css.baseClass + '"> </div>';
                        this.element.wrap(containerDiv);
                        this.element.addClass(this.css.gridTableClass);
                        if (ar) {
                            this.element.attr("aria-describedby", containerId)
                        }
                        this._setContainerWidth(containerId);
                        $("#" + containerId).attr("tabIndex", this.options.tabIndex);
                        if (this.options.height !== null) {
                            $("#" + containerId).css("overflow-y", "hidden")
                        }
                    }
                }
                this._touch();
                if (this.options.columns.length > 0 && (this.options.virtualization !== true && this.options.rowVirtualization !== true && this.options.columnVirtualization !== true) && this.options.autogenerateColumns === false && this.options.columns.length > 0) {
                    this._renderColgroup(this.element[0], false, false, this.options.autofitLastColumn)
                }
                $(gridElement).attr("cellpadding", "0");
                $(gridElement).attr("cellspacing", "0");
                $(gridElement).attr("border", "0");
                $(gridElement).css("table-layout", "fixed");
                $(gridElement).addClass(this.css.gridTableClass);
                if (this.options.autoGenerateColumns === false && this.options.columns.length > 0 && this._headerRenderCancel !== true) {
                    this._renderHeader()
                }
                this._renderCaption();
                if (this.options.autoAdjustHeight) {
                    this._initializeHeights()
                }
            }
            if (tbody.length === 0) {
                tbody = $("<tbody></tbody>").appendTo(gridElement).addClass(this.css.baseContentClass).addClass(this.css.gridTableBodyClass).addClass(this.css.recordClass)
            }
            if (this.dataSource.type() !== "htmlTableDom" && this.dataSource.type() !== "htmlTableId") {
                tbody.empty()
            }
        },

        _setContainerWidth: function (id, rendered) {
            var cols = this._visibleColumns(), width = 0;
            if (cols.length > 0) {
                width = this._calculateContainerWidth(true);
                if (width > 0) {
                    if (rendered) {
                        width = 0;
                        this.container().find(".ui-iggrid-header").each(function () {
                            width += $(this).outerWidth()
                        });
                        $("#" + id).width(width)
                    } else {
                        width += this._calculateSpecialColumnsWidth();
                        $("#" + id).css("width", width)
                    }
                }
            } else {
                if (this.options.width !== null) {
                    $("#" + id).css("width", this.options.width)
                }
            }
        },

        _calculateContainerWidth: function (addScrollWidth) {
            var width = 0, cols = this.options.columns, i;
            for (i = 0; i < cols.length; i++) {
                if (cols[i].hidden !== true && (this._initialHiddenColumns === undefined || $.inArray(cols[i], this._initialHiddenColumns) === -1)) {
                    width += cols[i].width ? parseInt(cols[i].width, 10) : this.options.defaultColumnWidth === null ? 0 : parseInt(this.options.defaultColumnWidth, 10)
                }
            }
            if (this.options.height !== null && width > 0 && addScrollWidth === true) {
                width += this._scrollbarWidth()
            }
            return width
        },

        _createScrollingGrid: function () {
            var id = this.element[0].id + "_scroll", scrollDiv = '<div id="' + id + '"></div>';
            this.element.wrap(scrollDiv);
            if (this.options.accessibilityRendering) {
                this.element.attr("aria-describedby", id)
            }
            $("#" + id).addClass(this.css.gridScrollDivClass).wrap("<div id='" + this.element[0].id + "_container'></div>");
            this.container().attr("tabIndex", this.options.tabIndex).addClass(this.css.baseClass).addClass(this.css.gridClasses);
            if (this.options.width !== null) {
                this.container().css("width", this.options.width);
                if (this.options.width.indexOf && this.options.width.indexOf("%") !== -1) {
                    this.element.css("width", "100%")
                }
                if (this.options.height !== null) {
                    this._addHorizontalScrollBar($("#" + id));
                    $("#" + this.element[0].id + "_scroll").css("overflow-x", "hidden")
                }
            } else {
                this._setContainerWidth(this.element[0].id + "_container");
                $("#" + this.element[0].id + "_scroll").css("overflow-x", "hidden")
            }
            if (this.options.height !== null) {
                $("#" + id).css("overflow-y", "auto");
                if (this.options.autoAdjustHeight) {
                    this.container().css("height", this.options.height)
                } else {
                    this.scrollContainer().css("height", this.options.height)
                }
            }
        },

        _touch: function () {
            var id = this.element[0].id, div = $("#" + id + "_scroll");
            if (div.length !== 1) {
                div = $("#" + id + "_displayContainer")
            }
            if (div.length) {
                div.attr("data-scroll", "true").attr("data-oneDirection", "true");
                if ($("#" + id + "_hscroller")[0]) {
                    div.attr("data-xScroller", "#" + id + "_hscroller")
                } else {
                    if ($("#" + id + "_horizontalScrollContainer")[0]) {
                        div.attr("data-xScroller", "#" + id + "_horizontalScrollContainer")
                    }
                }
                if ($("#" + id + "_scrollContainer")[0]) {
                    div.attr("data-yScroller", "#" + id + "_scrollContainer")
                }
                if (typeof Modernizr !== "undefined" && Modernizr.touch === true && typeof this.element.igScroll !== "undefined") {
                    div.css("overflow-y", "hidden")
                }
            }
        },

        _createVirtualGrid: function () {
            var id = this.element[0].id, grid, percWidthStr = $.browser.webkit ? "width=100%" : "", totalWidth, scrollContainerInner, scrollbarWidth, horizontalScrollContainerInner, w = 0, virtualGridMarkup = '<div id="' + id + '_container" style="margin:0px; border:0px; padding:0px;"><table border="0" cellspacing="0" cellpadding="0" class="ui-iggrid-layout-helper" style="border-spacing:0px" id="' + id + '_virtualContainer" ><tbody><tr><td colspan="2" style="border-width:0px"><div id="' + id + '_headers_v" style="overflow:hidden;"></div></td></tr><tr><td style="border-width:0px;"><div id="' + id + '_displayContainer"></td>$verticalMarkup$</tr>$horizontalMarkup$</tbody></table></div>', verticalMarkup, horizontalMarkup = '<tr><td colspan="2" style="border-width: 0px"><div id="' + id + '_horizontalScrollContainer"></div></td></tr>';
            scrollbarWidth = this._scrollbarWidth();
            if ($.browser.msie) {
                scrollbarWidth += 1
            }
            if (parseInt(this.options.height, 10) > 0) {
                verticalMarkup = '<td style="border-width: 0px;"><div id="' + id + '_scrollContainer" style="overflow:scroll; overflow-x:hidden; width: ' + scrollbarWidth + "px; height:" + parseInt(this.options.height, 10) + 'px;"></div></td>'
            } else {
                verticalMarkup = '<td style="border-width: 0px;"><div id="' + id + '_scrollContainer" style="overflow:scroll; overflow-x:hidden; width: ' + scrollbarWidth + 'px;"></div></td>'
            }
            if (this.options.virtualization === true) {
                virtualGridMarkup = virtualGridMarkup.replace("$verticalMarkup$", verticalMarkup).replace("$horizontalMarkup$", horizontalMarkup)
            } else {
                if (this.options.rowVirtualization === true) {
                    virtualGridMarkup = virtualGridMarkup.replace("$verticalMarkup$", verticalMarkup).replace("$horizontalMarkup$", "")
                } else {
                    if (this.options.columnVirtualization === true) {
                        virtualGridMarkup = virtualGridMarkup.replace("$horizontalMarkup$", horizontalMarkup).replace("$verticalMarkup$", "")
                    }
                }
            }
            if (this.options.virtualization === true || this.options.columnVirtualization === true) {
                this.element.css("width", "100%")
            }
            this.element.wrap(virtualGridMarkup);
            this.container().addClass(this.css.baseClass).addClass(this.css.gridClasses);
            if (this.options.width !== null) {
                this.container().width(this.options.width)
            } else {
                this._setContainerWidth(this.container()[0].id)
            }
            $("#" + id + "_displayContainer").append(this.element[0]);
            grid = this;
            totalWidth = this._calculateContainerWidth(false);
            if (this.options.width !== null) {
                w = parseInt(this.options.width, 10)
            } else {
                w = totalWidth
            }
            if (this.options.height !== null && this.options.width !== null) {
                w -= this._scrollbarWidth()
            }
            if (w <= 0) {
                w = undefined
            }
            if (w > 0 && this.options.expandColWidth && !this.options.width) {
                w += this.options.expandColWidth
            }
            $("<colgroup><col " + (w <= 0 ? percWidthStr : ('width="' + w + '"')) + '></col><col width="' + this._scrollbarWidth() + '"></col></colgroup>').prependTo("#" + id + "_virtualContainer");
            $("#" + id + "_virtualContainer").css("width", this.options.width).css("max-width", this.options.width);
            scrollContainerInner = '<div style="width:1px; overflow:hidden; height:' + (this._totalRowCount * parseInt(this.options.avgRowHeight, 10)) + 'px;"></div>';
            $("#" + id + "_scrollContainer").append(scrollContainerInner);
            if ((this.options.virtualization === true || this.options.columnVirtualization === true) && this.options.width && (totalWidth > parseInt(this.options.width, 10))) {
                $("#" + id + "_horizontalScrollContainer").css("height", this._scrollbarWidth() + "px").css("overflow", "scroll");
                if ($.browser.msie) {
                    $("#" + id + "_horizontalScrollContainer").css("width", parseInt(this.options.width, 10) + 1).css("height", "100%")
                } else {
                    $("#" + id + "_horizontalScrollContainer").css("width", this.options.width)
                }
                horizontalScrollContainerInner = '<div style="width:' + totalWidth + 'px;height:1px;"></div>';
                $("#" + id + "_horizontalScrollContainer").append(horizontalScrollContainerInner)
            }
            if (parseInt(this.options.height, 10) > 0) {
                $("#" + id + "_displayContainer").css("height", this.options.height).css("vertical-align", "top")
            }
            $("#" + id + "_displayContainer").css("position", "relative").css("width", w).css("maxWidth", w);
            if (this.options.virtualization === true) {
                $("#" + id + "_headers_v").append("<a href='#' id='" + id + "_displayContainer_a' tabindex='-1' style='position:absolute;top:-100px;left:-100px'>&nbsp;</a>")
            }
            if (this.options.width && this.options.virtualization === false && this.options.columnVirtualization === false) {
                $("#" + id + "_displayContainer").css({
                    "overflow-y": "hidden",
                    "overflow-x": "auto"
                })
            } else {
                $("#" + id + "_displayContainer").css("overflow", "hidden")
            }
            $("#" + id + "_displayContainer").parent().bind({
                mouseenter: function (event) {
                    grid._isMouseOverVirtualTable = true
                },
                mouseleave: function (event) {
                    grid._isMouseOverVirtualTable = false
                }
            });
            $(document).bind({
                DOMMouseScroll: function (event) {
                    var dir = "down", delta, step;
                    step = grid.options.virtualizationMouseWheelStep === null ? parseInt(grid.options.avgRowHeight, 10) : grid.options.virtualizationMouseWheelStep;
                    delta = -event.originalEvent.detail / 3;
                    if (delta > 0) {
                        dir = "up"
                    }
                    if (grid._isMouseOverVirtualTable) {
                        grid._onVirtualVerticalScroll(event, step, dir);
                        event.preventDefault()
                    }
                },

                mousewheel: function (event) {
                    var dir = "down", delta, step;
                    step = grid.options.virtualizationMouseWheelStep === null ? parseInt(grid.options.avgRowHeight, 10) : grid.options.virtualizationMouseWheelStep;
                    delta = event.originalEvent.wheelDelta / 120;
                    if (delta > 0) {
                        dir = "up"
                    }
                    if (grid._isMouseOverVirtualTable) {
                        grid._onVirtualVerticalScroll(event, step, dir);
                        event.preventDefault()
                    }
                }
            });
            if (this.options.virtualization === true || this.options.rowVirtualization === true) {
                $("#" + id + "_scrollContainer").bind({
                    scroll: function (event) {
                        grid._onVirtualVerticalScroll(event);
                        grid._virtualScrollMouseDown = false
                    },
                    mousedown: function (event) {
                        grid._virtualScrollMouseDown = true
                    }
                })
            }
            if (this.options.virtualization === true || this.options.columnVirtualization === true) {
                $("#" + id + "_horizontalScrollContainer").bind({
                    scroll: function (event) {
                        grid._onVirtualHorizontalScroll(event)
                    }
                })
            }
            if ($("#" + id + "_horizontalScrollContainer").length === 0 && this.options.width !== null) {
                this._addHorizontalScrollBar($("#" + id + "_virtualContainer"));
                $("#" + id + "_displayContainer").css("overflow-x", "hidden")
            }
            this.element.height($("#" + id + "_scrollContainer").height())
        },

        _onVirtualVerticalScroll: function (event, offset, dir) {
            if (this._ignoreScroll && event) {
                return false
            }
            this._isHorizontal = false;
            var scrollContainer = this._scrollContainer(), scrollTopDiff, current = scrollContainer.scrollTop(), mode = this.options.virtualizationMode;
            if (offset !== undefined) {
                if (dir === "down") {
                    scrollContainer.scrollTop(current + offset)
                } else {
                    scrollContainer.scrollTop(current - offset)
                }
                current = scrollContainer.scrollTop()
            }
            scrollTopDiff = scrollContainer.scrollTop() - this._oldScrollTop;
            if (Math.abs(scrollTopDiff) < 5 && $.browser.mozilla && !$.browser.msie) {
                return
            }
            if (mode === undefined || mode === "") {
                mode = "continuous"
            }
            if (mode === "fixed") {
                this._startRowIndex = Math.ceil(scrollContainer.scrollTop() / parseInt(this.options.avgRowHeight, 10));
                if ((!$.browser.msie) && this._startRowIndex === this._oldStartRowIndex && this._virtualScrollMouseDown) {
                    if (scrollTopDiff > 0 && scrollTopDiff < parseInt(this.options.avgRowHeight, 10)) {
                        this._startRowIndex++;
                        scrollContainer.scrollTop(scrollContainer.scrollTop() - scrollTopDiff + parseInt(this.options.avgRowHeight, 10))
                    } else {
                        if (scrollTopDiff < 0 && Math.abs(scrollTopDiff) < parseInt(this.options.avgRowHeight, 10)) {
                            this._startRowIndex--;
                            scrollContainer.scrollTop(scrollContainer.scrollTop() - scrollTopDiff - parseInt(this.options.avgRowHeight, 10))
                        }
                    }
                }
                if (this._startRowIndex > this._totalRowCount - this._virtualRowCount) {
                    this._startRowIndex = this._totalRowCount - this._virtualRowCount
                }
                if (this._startRowIndex < 0) {
                    this._startRowIndex = 0
                }
                this._oldStartRowIndex = this._startRowIndex;
                this._renderVirtualRecords()
            } else {
                if (mode === "continuous") {
                    this.virtualScrollTo(current)
                }
            }
            this._oldScrollTop = scrollContainer.scrollTop()
        },

        _scrollContainer: function () {
            if (!this._scrollContainerObj) {
                this._scrollContainerObj = $("#" + this.element[0].id + "_scrollContainer")
            }
            return this._scrollContainerObj
        },

        _onVirtualHorizontalScroll: function (event) {
            var id = this.element[0].id, internallyTriggered = event === undefined, horizontalScrollContainer = $("#" + id + "_horizontalScrollContainer"), scrollLeft = horizontalScrollContainer.scrollLeft(), hiddenContentWidth = horizontalScrollContainer[0].scrollWidth - horizontalScrollContainer[0].offsetWidth, deltaScroll = scrollLeft - this._oldScrollLeft;
            if (!internallyTriggered && Math.abs(deltaScroll) < 5 && $.browser.mozilla && !$.browser.msie) {
                return
            }
            if (this.options.virtualization === true && this.options.virtualizationMode === "continuous") {
                this._setDisplayContainerScrollLeft(this._getDisplayContainerScrollLeft() + deltaScroll);
                this._oldScrollLeft = horizontalScrollContainer.scrollLeft();
                $("#" + id + "_headers_v").scrollLeft($("#" + id + "_headers_v").scrollLeft() + deltaScroll);
                $("#" + id + "_footer_container").scrollLeft($("#" + id + "_footer_container").scrollLeft() + deltaScroll);
                return
            }
            this._isHorizontal = true;
            if (hiddenContentWidth > 0) {
                this._startColIndex = Math.ceil(scrollLeft * this._totalColumnCount / hiddenContentWidth);
                this._startColIndex = Math.min(this._startColIndex, this._totalColumnCount - this._virtualColumnCount)
            } else {
                this._startColIndex = 0
            }
            if (internallyTriggered || this._oldStartColIndex !== this._startColIndex) {
                this._renderVirtualRecords();
                this._trigger("virtualhorizontalscroll", null, {
                    startColIndex: this._startColIndex,
                    endColIndex: this._startColIndex + this._virtualColumnCount - 1
                })
            }
            this._oldScrollLeft = horizontalScrollContainer.scrollLeft();
            this._oldStartColIndex = this._startColIndex
        },

        _initLoadingIndicator: function () {
            var widget;
            if (this.container().data("igLoading")) {
                this._loadingIndicator = this.container().data("igLoading").indicator()
            } else {
                widget = this.container().igLoading().data("igLoading");
                if (widget) {
                    this._loadingIndicator = widget.indicator()
                }
            }
        },

        _addHorizontalScrollBar: function (parent) {
            var sb = $("<div id='" + this.element[0].id + "_hscroller_container' ></div>").css("height", this._scrollbarWidth() + "px").css("position", "relative").css("display", "none").css("overflow", "hidden").append($("<div id='" + this.element[0].id + "_hscroller' ></div>").css("width", "100%").css("position", "absolute").css("bottom", "0px").css("overflow-x", "scroll").css("overflow-y", "scroll").append($("<div id='" + this.element[0].id + "_hscroller_inner' ></div>").css("height", "1px")).bind("scroll", $.proxy(this._scrollData, this)));
            if (parent) {
                sb.insertAfter(parent)
            }
        },

        _updateVirtualHorizontalScrollbar: function () {
            var horizontalScrollContainerInner, horizontalScrollContainer;
            horizontalScrollContainerInner = $("#" + this.element[0].id + "_horizontalScrollContainer div");
            horizontalScrollContainerInner.css("width", this._calculateContainerWidth(false));
            horizontalScrollContainer = $("#" + this.element[0].id + "_horizontalScrollContainer");
            if (horizontalScrollContainer.width() > horizontalScrollContainerInner.width()) {
                horizontalScrollContainer.css("display", "none")
            } else {
                horizontalScrollContainer.css("display", "")
            }
        },

        moveColumn: function (column, target, after, inDom) {
            var grid = this, found;
            if (!this._nColArray) {
                this._buildHelperArray()
            }
            this._ctm = column;
            this._ttm = target;
            this._aft = true;
            this._idm = true;
            if (after === false) {
                this._aft = false
            } else {
                this._aft = true
            }
            if (inDom === false) {
                this._idm = false
            } else {
                this._idm = true
            }
            if (this._oldCols) {
                found = this._performInternalMove(this._oldCols)
            } else {
                found = this._performInternalMove(this._visibleColumns())
            }
            if (found === false) {
                throw new Error($.ig.Grid.locale.movingNotAllowedOrIncompatible)
            }
            if (inDom && inDom === true) {
                this._loadingIndicator.show();
                setTimeout(function () {
                    grid._performDomColumnMove();
                    grid._cleanMovingParams();
                    grid._loadingIndicator.hide();
                    grid._updateHeaderColumnIndexes();
                    delete grid._virtualDom
                }, 0)
            } else {
                this._performColumnMove();
                this._cleanMovingParams();
                this._updateHeaderColumnIndexes();
                delete grid._virtualDom
            }
        },

        _cleanMovingParams: function () {
            delete this._ctm;
            delete this._ttm;
            delete this._idm;
            delete this._aft;
            delete this._nColArray
        },

        _buildHelperArray: function () {
            var i = 0, j = 0, col, id, colrs, l, x = 0, cCols = this._oldCols ? jQuery.extend(true, [], this._oldCols) : jQuery.extend(true, [], this._visibleColumns()), nCols, level = 0, width = $("#" + this.id() + " colgroup:first>col").length, height = $("#" + this.id() + (this.options.fixedHeaders === true ? "_headers " : " ") + "thead tr").length;
            this._nColArray = [];
            if (height === 0 && this.options.showHeader === false) {
                height = 1
            }
            for (i = 0; i < width; i++) {
                this._nColArray[i] = []
            }
            i = 0;
            while (level < height) {
                nCols = [];
                while (i < cCols.length) {
                    col = cCols[i];
                    colrs = col.rowspan || 1;
                    id = this._getColMarkForLevel(col);
                    l = col.colspan || 1;
                    for (j = 0; j < l; j++) {
                        this._nColArray[x + j][level] = id
                    }
                    if (col.crs === colrs && col.group) {
                        nCols.push.apply(nCols, col.group.slice(0))
                    } else {
                        nCols.push(col)
                    }
                    x += l;
                    i++
                }
                cCols = nCols;
                level++;
                x = 0;
                i = 0
            }
        },

        _getColMarkForLevel: function (col) {
            if (!col.crs) {
                col.crs = 0
            }
            col.crs++;
            if (col.crs > 1) {
                return -1
            }
            return col.key || col.identifier
        },

        _performInternalMove: function (subset) {
            var i = 0, j, success = true;
            i = this._getColIdxById(subset, this._ctm);
            if (typeof this._ctm === "number") {
                this._ctm = subset[i].key || subset[i].identifier
            }
            if (i || i === 0) {
                j = this._getColIdxById(subset, this._ttm);
                if (typeof this._ttm === "number") {
                    this._ttm = subset[j].key || subset[j].identifier;
                    if (j < i) {
                        this._aft = false
                    } else {
                        this._aft = true
                    }
                }
                if (j || j === 0) {
                    success = success && this._rearrangeArray(subset, i, 1, this._aft === true ? j + 1 : j);
                    return success
                }
                return false
            }
            for (i = 0; i < subset.length; i++) {
                if (subset[i].group) {
                    if (this._performInternalMove(subset[i].group) === true) {
                        return true
                    }
                }
            }
            return false
        },

        _getColIdxById: function (array, id) {
            var i, col;
            if (typeof id === "number") {
                return id
            }
            for (i = 0; i < array.length; i++) {
                col = array[i];
                if (col.key) {
                    if (col.key === id) {
                        return i
                    }
                } else {
                    if (col.identifier) {
                        if (col.identifier === id) {
                            return i
                        }
                    }
                }
            }
        },

        _findColAreaInVArray: function (col, l) {
            var i, j, res = {};
            for (i = 0; i < this._nColArray.length; i++) {
                if (this._nColArray[i][l] === col) {
                    res.x = i;
                    for (j = i; j < this._nColArray.length; j++) {
                        if (this._nColArray[j][l] !== col) {
                            break
                        }
                    }
                    res.l = j - i;
                    return res
                }
            }
            return null
        },

        _rearrangeArray: function (array, start, len, at) {
            var col, delta = start < at, n;
            if (start === at || start < 0 || at < 0 || start >= array.length || at > array.length) {
                return false
            }
            col = array.splice(start, len);
            for (n = 0; n < col.length; n++) {
                array.splice(delta ? at - len + n : at + n, 0, col[n])
            }
            return true
        },

        _rearrangeHeader: function () {
            var dataLevel, i, j, m, t, cols, n, header;
            header = $("#" + this.id() + (this.options.fixedHeaders === true ? "_headers " : " ") + "thead");
            for (j = 0; j < this._nColArray[0].length; j++) {
                m = this._findColAreaInVArray(this._ctm, j);
                if (m) {
                    t = this._findColAreaInVArray(this._ttm, j);
                    if (t) {
                        break
                    }
                }
            }
            dataLevel = [m, t];
            if (this.options.showHeader === false) {
                return dataLevel
            }
            this._moveThs(header, this._ctm, this._ttm, this._aft);
            while (++j < this._nColArray[0].length) {
                cols = [];
                n = null;
                for (i = m.x; i < m.x + m.l; i++) {
                    if (this._nColArray[i][j] === -1) {
                        continue
                    }
                    if (this._nColArray[i][j] !== n) {
                        n = this._nColArray[i][j];
                        cols.push(n)
                    }
                }
                if (this._aft === true) {
                    if (this._nColArray[t.x + t.l - 1][j] === -1) {
                        for (i = t.x + t.l; i < Math.max(m.x, this._nColArray.length); i++) {
                            if (this._nColArray[i][j] !== -1) {
                                this._moveThs(header, cols, this._nColArray[i][j], false)
                            }
                        }
                    } else {
                        this._moveThs(header, cols, this._nColArray[t.x + t.l - 1][j], true)
                    }
                } else {
                    if (this._nColArray[t.x][j] === -1) {
                        for (i = t.x; i >= (t.x - m.x - m.l > 0 ? m.x + m.l : 0); i--) {
                            if (this._nColArray[i][j] !== -1) {
                                this._moveThs(header, cols, this._nColArray[i][j], true)
                            }
                        }
                    } else {
                        this._moveThs(header, cols, this._nColArray[t.x][j], false)
                    }
                }
            }
            return dataLevel
        },

        _rearrangeTable: function (area, m, t) {
            var i, j, trs, $tr, tds, tar, skip;
            trs = area.find(">tr:not([data-container='true'],[data-grouprow='true'])");
            if (trs.length > 0) {
                skip = $(trs[0]).find("[data-parent],[data-skip='true']").length
            }
            for (j = 0; j < trs.length; j++) {
                tds = $();
                $tr = $(trs[j]);
                for (i = m.x; i < m.x + m.l; i++) {
                    tds = tds.add($tr.find("td:eq(" + (i + skip) + ")"))
                }
                if (this._aft === true) {
                    tar = $tr.find("td:eq(" + (t.x + t.l + skip - 1) + ")");
                    tds.detach().insertAfter(tar)
                } else {
                    tar = $tr.find("td:eq(" + (t.x + skip) + ")");
                    tds.detach().insertBefore(tar)
                }
            }
        },

        _moveCols: function (area, m, t, after) {
            var i, cols = $(), tCol, skip = area.find(">col[data-skip='true']").length;
            for (i = m.x; i < m.x + m.l; i++) {
                cols = cols.add(area.find(">col:eq(" + (i + skip) + ")"))
            }
            if (after === true) {
                tCol = area.find(">col:eq(" + (t.x + t.l + skip - 1) + ")");
                cols.detach().insertAfter(tCol)
            } else {
                tCol = area.find(">col:eq(" + (t.x + skip) + ")");
                cols.detach().insertBefore(tCol)
            }
        },

        _moveThs: function (header, ids, tar, after) {
            var $tar = header.find("th[data-mch-id='" + tar + "'],th[id='" + this.id() + "_" + tar + "']"), $ids = $(), $id, $pid, i;
            if (typeof (ids) === "object") {
                for (i = 0; i < ids.length; i++) {
                    $id = header.find("th[data-mch-id='" + ids[i] + "'],th[id='" + this.id() + "_" + ids[i] + "']");
                    if ($id.attr("data-vscr-padding-icrement")) {
                        $pid = $id
                    }
                    $ids = $ids.add($id)
                }
            } else {
                $ids = header.find("th[data-mch-id='" + ids + "'],th[id='" + this.id() + "_" + ids + "']");
                if ($ids.attr("data-vscr-padding-icrement")) {
                    $pid = $ids
                }
            }
            $ids.detach();
            if (after) {
                $ids.insertAfter($tar)
            } else {
                $ids.insertBefore($tar)
            }
            if ($tar.attr("data-vscr-padding-icrement") && after === true) {
                $ids.last().css(this._padding, $tar.css(this._padding)).attr("data-vscr-padding-icrement", $tar.attr("data-vscr-padding-icrement"));
                $tar.css(this._padding, "");
                $tar.removeAttr("data-vscr-padding-icrement")
            } else {
                if ($pid) {
                    $pid.parent().children(":last").css(this._padding, $pid.css(this._padding)).attr("data-vscr-padding-icrement", $pid.attr("data-vscr-padding-icrement"));
                    $pid.css(this._padding, "");
                    $pid.removeAttr("data-vscr-padding-icrement")
                }
            }
        },

        _performDomColumnMove: function () {
            var dataLevel = this._rearrangeHeader(), m = dataLevel[0], t = dataLevel[1], f;
            if (this.options.fixedHeaders === true) {
                this._moveCols($("#" + this.id() + "_headers>colgroup"), m, t, this._aft)
            }
            this._rearrangeArray(this.options.columns, m.x, m.l, this._aft === true ? t.x + t.l : t.x);
            this._rearrangeTable(this.element.find(">tbody"), m, t);
            this._moveCols(this.element.find(">colgroup"), m, t, this._aft);
            if (this.options.fixedFooters === true) {
                f = $("#" + this.id() + "_footers>colgroup");
                this._rearrangeTable($("#" + this.id() + "_footers>tfoot"), m, t);
                this._moveCols(f, m, t, this._aft)
            } else {
                this._rearrangeTable(this.element.find("tfoot"), m, t)
            }
        },

        _performColumnMove: function () {
            var dataLevel = this._rearrangeHeader(), m = dataLevel[0], t = dataLevel[1], f;
            if (this.options.fixedHeaders === true) {
                this._moveCols($("#" + this.id() + "_headers>colgroup"), m, t, this._aft)
            }
            this._rearrangeArray(this.options.columns, m.x, m.l, this._aft === true ? t.x + t.l : t.x);
            this._renderData();
            this._renderFooter();
            this._rerenderColgroups()
        },

        showColumn: function (column) {
            var grid = this;
            this._loadingIndicator.show();
            setTimeout(function () {
                grid._setHidden(column, false);
                grid._loadingIndicator.hide()
            }, 0)
        },

        hideColumn: function (column) {
            var grid = this;
            this._loadingIndicator.show();
            setTimeout(function () {
                grid._setHidden(column, true);
                grid._loadingIndicator.hide()
            }, 0)
        },

        _setHidden: function (column, hidden) {
            var col, index;
            if (typeof column === "number") {
                col = this.options.columns[column];
                index = column
            } else {
                col = this.columnByKey(column);
                index = $.inArray(col, this.options.columns)
            }
            if (col && col.hidden !== hidden) {
                this._setHiddenColumns([col], hidden, false)
            }
        },

        _setHiddenColumns: function (columns, hidden, initial) {
            var columnNumberChanged = false, self = this, horizontalScrollContainer, hasVirtualization = this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true, hasColumnVirtualization = (this.options.virtualizationMode !== "continuous") && ((this.options.virtualization === true && this.options.width) || this.options.columnVirtualization === true), isContinuos = false, visibleColumnsLength, visibleColumnsWithWidthLength, gridWidth, width, colgroup;
            if (columns.length === 0) {
                return
            }
            this._fireInternalEvent("_hidingFinishing");
            if (hasVirtualization) {
                isContinuos = (this.options.virtualizationMode === "continuous");
                self._updateVirtColCounters();
                if (!isContinuos) {
                    $.each(columns, function (index, col) {
                        var oldVirtualColumnCount = self._virtualColumnCount;
                        col.hidden = hidden;
                        self._visibleColumnsArray = undefined;
                        self._updateVirtColCounters();
                        if (self._virtualColumnCount !== oldVirtualColumnCount) {
                            if (self._virtualColumnCount < oldVirtualColumnCount) {
                                self._detachColumn(col)
                            } else {
                                if (self._virtualColumnCount > oldVirtualColumnCount) {
                                    self._attachColumn(col)
                                }
                            }
                            columnNumberChanged = true;
                            self._virtualDom = null
                        }
                    });
                    if (hasColumnVirtualization) {
                        this._vheaders = undefined;
                        this._updateVirtualHorizontalScrollbar();
                        horizontalScrollContainer = $("#" + this.element[0].id + "_horizontalScrollContainer");
                        this._onVirtualHorizontalScroll()
                    }
                    this._renderVirtualRecords()
                }
            }
            if (!hasVirtualization || isContinuos) {
                $.each(columns, function (index, col) {
                    col.hidden = hidden;
                    self._visibleColumnsArray = undefined;
                    if (col.hidden) {
                        self._detachColumn(col)
                    } else {
                        self._attachColumn(col)
                    }
                });
                this._cleanupTBody();
                this._renderRecords();
                columnNumberChanged = true
            }
            if (columnNumberChanged) {
                if (!this._initialized) {
                    this._rerenderColgroups(initial);
                    this._adjustLastColumnWidth(true)
                } else {
                    if (this._visibleColumns().length > 0) {
                        this._rerenderColgroups(initial);
                        this._adjustLastColumnWidth(true);
                        visibleColumnsLength = this._visibleColumns().length;
                        visibleColumnsWithWidthLength = $.grep(this._visibleColumns(),function (col) {
                            return col.width
                        }).length;
                        if (visibleColumnsWithWidthLength === visibleColumnsLength) {
                            if (this.options.width && parseInt(this.options.width, 10) > 0) {
                                this._updateGridContentWidth()
                            } else {
                                this._setContainerWidth(this.element[0].id + "_container");
                                if (hasVirtualization) {
                                    width = this.element.parents(".ui-widget").css("width");
                                    gridWidth = this._calculateContainerWidth(true);
                                    if (this.options.height !== null) {
                                        gridWidth -= this._scrollbarWidth()
                                    }
                                    $("#" + this.element[0].id + "_displayContainer").css("width", gridWidth).css("max-width", gridWidth)
                                }
                            }
                        }
                    }
                }
            }
            this._fireInternalEvent("_hidingFinished");
            this.element.trigger("iggriduisoftdirty", {
                owner: this
            });
            this._trigger(this.events.columnsCollectionModified, null, {
                owner: this
            });
            if (columnNumberChanged && hasVirtualization && this._visibleColumns().length > 0 && visibleColumnsWithWidthLength === visibleColumnsLength) {
                if (this.options.virtualizationMode === "continuous") {
                    gridWidth += this._calculateSpecialColumnsWidth();
                    $("#" + this.element[0].id + "_displayContainer").css("width", gridWidth).css("max-width", gridWidth)
                }
                $("#" + this.element[0].id + "_virtualContainer>colgroup col").eq(0).attr("width", gridWidth);
                if (this.options.width === null || this.options.width === undefined) {
                    this._setContainerWidth(this.element[0].id + "_headers_v")
                }
            }
            this._origWidth = parseInt(this.container().css("width"), 10);
            if (columnNumberChanged && ($.browser.mozilla || ($.browser.msie && $.browser.version.slice(0, 1) === "8"))) {
                if (this.options.showHeader) {
                    colgroup = this.headersTable().children("colgroup").detach();
                    this.headersTable().prepend(colgroup)
                }
                if ((this.options.fixedHeaders === true && this.options.height !== null) || this.options.showHeader === false) {
                    colgroup = this.element.children("colgroup").detach();
                    this.element.prepend(colgroup)
                }
                if (this.options.fixedFooters === true && this.options.height !== null) {
                    colgroup = this.footersTable().children("colgroup").detach();
                    this.footersTable().prepend(colgroup)
                }
            }
        },

        _calculateSpecialColumnsWidth: function () {
            var width = 0;
            this.headersTable().find("> colgroup > col[data-skip=true]").each(function () {
                var colWidth = this.style.width;
                if (colWidth) {
                    width += parseInt(colWidth, 10)
                }
            });
            if (width > 0) {
                this._origSum = width
            }
            return width
        },

        _synchronizeHScroll: function () {
            var hasFixedHeaders = this.options.showHeader && this.options.fixedHeaders === true && this.options.height !== null, hasFixedFooters = this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null, scroller = $("#" + this.element[0].id + "_hscroller"), scrollContainer = $("#" + this.element[0].id + "_scroll"), scrLeft = scroller.scrollLeft(), headers, footers;
            scrollContainer.scrollLeft(scrLeft);
            scrLeft = scrollContainer.scrollLeft();
            scroller.scrollLeft(scrLeft);
            if (hasFixedHeaders) {
                headers = $("#" + this.element[0].id + "_headers").parent();
                headers.scrollLeft(scrLeft)
            }
            if (hasFixedFooters) {
                footers = $("#" + this.element[0].id + "_footer_container");
                footers.scrollLeft(scrLeft)
            }
        },

        _updateGridContentWidth: function () {
            var gridWidth = 0, scroller, scrLeft, hasFixedHeader = this.options.height !== null && this.options.fixedHeaders === true && this.options.showHeader && this._headerParent;
            $.each(this._visibleColumns(), function (index, col) {
                if (gridWidth !== undefined && col.width && !(col.width.charAt && col.width.endsWith("%"))) {
                    gridWidth += parseInt(col.width, 10)
                } else {
                    gridWidth = undefined
                }
            });
            if (gridWidth === undefined) {
                return
            }
            gridWidth += this._calculateSpecialColumnsWidth();
            if (!hasFixedHeader && this._hasVerticalScrollbar) {
                gridWidth -= this._scrollbarWidth()
            }
            if (this.options.width !== null && this.options.height !== null) {
                scroller = $("#" + this.element[0].id + "_hscroller");
                scrLeft = scroller.scrollLeft()
            }
            this._setGridContentWidth(gridWidth);
            if (this.options.height !== null && this.options.width !== null) {
                this._updateVerticalScrollbarCellPadding()
            }
            if (this.options.width !== null && this.options.height !== null) {
                scroller.scrollLeft(scrLeft);
                this._synchronizeHScroll()
            }
        },

        _updateVerticalScrollbarCellPadding: function () {
            var hasFixedHeaders = this.options.showHeader && this.options.fixedHeaders === true && this.options.height !== null, hasFixedFooters = this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null, emptySpace, paddingIncrement;
            if (this.options.height === null) {
                return
            }
            if (!hasFixedHeaders && !hasFixedFooters) {
                return
            }
            if (this._gridInnerWidth === undefined || this._gridContentWidth === undefined) {
                emptySpace = 0
            } else {
                emptySpace = this._gridInnerWidth - this._gridContentWidth
            }
            if (this._hasVerticalScrollbar) {
                paddingIncrement = this._scrollbarWidth()
            } else {
                paddingIncrement = 0
            }
            if (emptySpace >= 0) {
                paddingIncrement -= emptySpace
            }
            if (paddingIncrement < 0) {
                paddingIncrement = 0
            }
            if (hasFixedHeaders) {
                this._increaseLastHeaderCellVScrollbarPadding(this.headersTable(), paddingIncrement)
            }
            if (hasFixedFooters) {
                this._increaseLastCellVScrollbarPadding(this.footersTable(), "tfoot", "td", paddingIncrement)
            }
            this._increaseLastCellVScrollbarPadding(this.element, "tbody", "td", paddingIncrement)
        },

        _increaseLastHeaderCellVScrollbarPadding: function (table, paddingIncrement) {
            var lastCells = table.children("thead").children("tr").not("[data-skip=true]").children("th:last-child").not("[data-skip=true]"), currIncrement = parseInt(lastCells.first().attr("data-vscr-padding-icrement"), 10), paddingValue;
            paddingValue = parseInt(lastCells.first().css(this._padding), 10);
            if (currIncrement) {
                paddingValue -= currIncrement
            }
            table.css("display", "none");
            lastCells.css(this._padding, paddingValue + paddingIncrement);
            lastCells.first().attr("data-vscr-padding-icrement", paddingIncrement);
            lastCells.find("[data-nonpaddedindicator=right]").css(this._rtl ? "margin-left" : "margin-right", -parseInt(lastCells.css(this._padding), 10) + "px");
            table.css("display", "")
        },

        _increaseLastCellVScrollbarPadding: function (table, tableGroup, rowElement, paddingIncrement) {
            var lastCells = table.find(" > " + tableGroup + " > tr > " + rowElement + ":last-child"), currIncrement = parseInt(lastCells.first().attr("data-vscr-padding-icrement"), 10), paddingValue;
            paddingValue = parseInt(lastCells.first().css("padding-left"), 10);
            if (currIncrement) {
                paddingValue -= currIncrement
            }
            lastCells.css(this._padding, paddingValue + paddingIncrement);
            lastCells.first().attr("data-vscr-padding-icrement", paddingIncrement)
        },

        _updateHScrollbarVisibility: function () {
            var scrollerContainer = $("#" + this.element[0].id + "_hscroller_container"), scrollerWasHidden = scrollerContainer.css("display") === "none";
            scrollerContainer.css("display", "");
            if (this._gridInnerWidth < this._gridContentWidth) {
                if (scrollerWasHidden) {
                    if (this.options.autoAdjustHeight) {
                        this._initializeHeights()
                    }
                }
            } else {
                scrollerContainer.css("display", "none");
                if (!scrollerWasHidden) {
                    if (this.options.autoAdjustHeight) {
                        this._initializeHeights()
                    }
                }
            }
        },

        _setGridContentWidth: function (gridContentWidth) {
            var o = this.options, v = o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true;
            if (this.options.height !== null) {
                if (gridContentWidth) {
                    this._gridContentWidth = gridContentWidth
                }
                if (this._gridContentWidth) {
                    this._getHScrollContainerInner().css("width", this._hasVerticalScrollbar && this.options.fixedHeaders ? this._gridContentWidth - this._scrollbarWidth() : this._gridContentWidth)
                }
                this._updateHScrollbarVisibility()
            }
            if (v === false) {
                this._setGridTablesWidth(gridContentWidth)
            }
        },

        _setGridTablesWidth: function (width) {
            var hasFixedHeaders = this.options.showHeader && this.options.fixedHeaders === true && this.options.height !== null, hasFixedFooters = this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null;
            this.element.width(width);
            if (hasFixedHeaders) {
                this.headersTable().width(width)
            }
            if (hasFixedFooters) {
                this.footersTable().width(width)
            }
        },

        _detachHiddenColumns: function () {
            var col, i;
            for (i = 0; i < this.options.columns.length; i++) {
                col = this.options.columns[i];
                if (col.hidden) {
                    this._detachColumn(col)
                }
            }
        },

        _rerenderColgroups: function (initial) {
            var hasFixedHeader = this.options.height !== null && this.options.fixedHeaders === true && this.options.showHeader, hasFixedFooter = this.options.height !== null && this.options.fixedFooters === true && this.options.showFooter;
            if (hasFixedHeader) {
                this.headersTable().children("colgroup").remove();
                this._renderColgroup(this.headersTable()[0], true, false, initial)
            }
            if (hasFixedFooter) {
                this.footersTable().children("colgroup").remove();
                this._renderColgroup(this.footersTable()[0], false, true, initial)
            }
            this.element.children("colgroup").remove();
            this._renderColgroup(this.element[0], false, false, initial)
        },

        _detachColumn: function (col) {
            var position, cols, headerCells, isMultiColumnGrid = this._isMultiColumnGrid;
            col.hidden = false;
            this._visibleColumnsArray = undefined;
            cols = this._visibleColumns();
            position = $.inArray(col, cols);
            col.hidden = true;
            this._visibleColumnsArray = undefined;
            this._initializeDetachedContainers();
            headerCells = this.headersTable().children("thead").children("tr").not("[data-skip=true]");
            if (isMultiColumnGrid) {
                this._hideMultiHeaderCells(this._headerCells, position, col.key);
                headerCells = this.headersTable().children("thead").children("tr:not([data-mch-level])").not("[data-skip=true]");
                this._detachCells(headerCells, function (row) {
                    return row.children("th, td").not("[data-skip=true]")
                }, position, this._detachedHeaderCells, col.key)
            } else {
                this._detachCells(headerCells, function (row) {
                    return row.children("th, td").not("[data-skip=true]")
                }, position, this._detachedHeaderCells, col.key)
            }
            this._detachCells(this.footersTable().children("tfoot").children("tr"), function (row) {
                return row.children("td").not("[data-skip=true]")
            }, position, this._detachedFooterCells, col.key)
        },

        _attachColumn: function (col) {
            var headerCells, visibleCols = this._visibleColumns(), position = $.inArray(col, visibleCols);
            this._initializeDetachedContainers();
            if (this._isMultiColumnGrid) {
                this._showMultiHeaderCells(col.key);
                headerCells = this.headersTable().children("thead").children("tr:not([data-mch-level])").not("[data-skip=true]");
                this._attachCells(headerCells, function (row) {
                    return row.children("th, td").not("[data-skip=true]")
                }, position, this._detachedHeaderCells, col.key)
            } else {
                this._attachCells(this.headersTable().children("thead").children("tr").not("[data-skip=true]"), function (row) {
                    return row.children("th, td").not("[data-skip=true]")
                }, position, this._detachedHeaderCells, col.key)
            }
            this._attachCells(this.footersTable().children("tfoot").children("tr"), function (row) {
                return row.children("td").not("[data-skip=true]")
            }, position, this._detachedFooterCells, col.key)
        },

        _initializeDetachedContainers: function () {
            if (!this._detachedContainersInitialized) {
                this._detachedHeaderCells = {};
                this._detachedFooterCells = {};
                this._detachedContainersInitialized = true
            }
        },

        _getParentsMultiHeader: function (key) {
            var i, cols = this._oldCols, colsLength = cols.length, arr = [];
            for (i = 0; i < colsLength; i++) {
                if (cols[i].key === key || cols[i].identifier === key) {
                    arr.push(cols[i]);
                    break
                } else {
                    if (cols[i].group) {
                        if (this._getParentsMultiHeaderRecursive(key, cols[i].group, arr) === true) {
                            arr.push(cols[i]);
                            break
                        }
                    }
                }
            }
            return arr
        },

        _getParentsMultiHeaderRecursive: function (key, arr, resArr) {
            var i, cols = arr, colsLength = arr.length, res = false;
            for (i = 0; i < colsLength; i++) {
                if (cols[i].key === key || cols[i].identifier === key) {
                    resArr.push(cols[i]);
                    res = true;
                    break
                } else {
                    if (cols[i].group && this._getParentsMultiHeaderRecursive(key, cols[i].group, resArr) === true) {
                        resArr.push(cols[i]);
                        res = true;
                        break
                    }
                }
            }
            return res
        },

        _hideMultiHeaderCells: function (headerCells, position, key) {
            var i, currentCell, parents = this._getParentsMultiHeader(key), parent, colspan, $th, headersTable = this.headersTable().find("thead > tr");
            currentCell = headerCells[position];
            this._headerCells.splice(position, 1);
            currentCell.css("display", "none");
            this._hiddenColumns[key] = currentCell;
            if (parents.length > 0) {
                for (i = 0; i < parents.length; i++) {
                    parent = parents[i];
                    if (parent.level === 0) {
                        continue
                    }
                    $th = headersTable.find("th[data-mch-id=" + parent.identifier + "]");
                    colspan = parseInt($th.attr("colspan"), 10);
                    if (colspan > 1) {
                        $th.attr("colspan", --colspan)
                    } else {
                        $th.attr("ishidden", 1);
                        $th.css("display", "none")
                    }
                }
            }
        },

        _detachCells: function (rows, cellSelectorFunction, position, container, key) {
            var detachedCells = [], i, cells, currentCell;
            if (rows.length > 0) {
                for (i = 0; i < rows.length; i++) {
                    cells = cellSelectorFunction(rows.eq(i));
                    currentCell = cells.eq(position);
                    if (cells.length === 1) {
                        currentCell.after($("<" + currentCell[0].tagName + "></" + currentCell[0].tagName + ">").attr("data-hiddenreplacement", "true").css("height", currentCell.height()).attr("class", currentCell.attr("class")))
                    }
                    detachedCells.push(currentCell.detach())
                }
                container[key] = detachedCells
            }
        },

        _showMultiHeaderCells: function (key) {
            var i, currentCell = this._hiddenColumns[key], parents = this._getParentsMultiHeader(key), parent, colspan, $th, currentOrder, order, headerCellsLength = this._headerCells.length, headersTable = this.headersTable().find("thead > tr"), isHidden;
            if (currentCell === null || currentCell === undefined) {
                return
            }
            currentOrder = currentCell.data("data-mch-order");
            for (i = 0; i < headerCellsLength; i++) {
                order = this._headerCells[i].data("data-mch-order");
                if (currentOrder < order) {
                    this._headerCells.splice(i, 0, currentCell);
                    break
                }
            }
            if (i === headerCellsLength) {
                this._headerCells.push(currentCell)
            }
            currentCell.css("display", "");
            currentCell.removeAttr("ishidden");
            if (parents.length > 0) {
                for (i = 0; i < parents.length; i++) {
                    parent = parents[i];
                    if (parent.level === 0) {
                        continue
                    }
                    $th = headersTable.find("th[data-mch-id=" + parent.identifier + "]");
                    isHidden = $th.attr("ishidden") === "1";
                    colspan = parseInt($th.attr("colspan"), 10);
                    if (!isHidden) {
                        $th.attr("colspan", ++colspan)
                    } else {
                        $th.removeAttr("ishidden");
                        $th.css("display", "")
                    }
                }
            }
        },

        _attachCells: function (rows, cellSelectorFunction, position, container, key) {
            var detachedCells, i, cells, replacementCell, storedKey;
            if (rows.length > 0) {
                if (this.options.virtualization === true || this.options.columnVirtualization === true) {
                    detachedCells = container[key];
                    if (detachedCells === null || detachedCells === undefined) {
                        for (storedKey in container) {
                            if (container.hasOwnProperty(storedKey)) {
                                detachedCells = container[storedKey];
                                delete container[storedKey];
                                break
                            }
                        }
                    }
                } else {
                    detachedCells = container[key];
                    delete container[key]
                }
                if (detachedCells === undefined || detachedCells === null) {
                    return
                }
                for (i = 0; i < rows.length; i++) {
                    cells = cellSelectorFunction(rows.eq(i)).not("[data-hiddenreplacement=true]");
                    if (position === 0) {
                        if (cells.length === 0) {
                            replacementCell = rows.eq(i).find("[data-hiddenreplacement=true]");
                            replacementCell.after(detachedCells[i]);
                            replacementCell.remove()
                        } else {
                            cells.eq(0).before(detachedCells[i])
                        }
                    } else {
                        cells.eq(position - 1).after(detachedCells[i])
                    }
                }
            }
        },

        _cleanupTBody: function () {
            var tbody = this.element.children("tbody");
            if ($.ui.igGrid.speedupDOMCleanup === false) {
                tbody.empty()
            } else {
                if (tbody.children().length > 0) {
                    this.element[0].removeChild(tbody[0]);
                    tbody = $("<tbody></tbody>").appendTo(this.element).addClass(this.css.baseContentClass).addClass(this.css.gridTableBodyClass).addClass(this.css.recordClass)
                }
            }
            return tbody
        },

        _captureInitiallyHiddenColumns: function () {
            this._initialHiddenColumns = $.grep(this.options.columns, function (column, index) {
                var hidden = column.hidden;
                column.hidden = false;
                return hidden
            })
        },

        getUnboundValues: function (key) {
            var res;
            if (key === undefined || key === null) {
                return this._unboundValues
            }
            res = this._unboundValues[key];
            if (res === undefined || res === null) {
                if (this.getUnboundColumnByKey(key) !== null) {
                    res = []
                } else {
                    res = null
                }
            }
            return res
        },

        setUnboundValues: function (values, key) {
            var i, data = this.dataSource.data(), valuesLength = values.length, isToConvert = false, type = "string", pk = this.options.primaryKey, col, schema, pkVal;
            if (valuesLength === 0) {
                return
            }
            if (this.dataSource && this.dataSource.schema) {
                col = this.getUnboundColumnByKey(key);
                if (col !== null && col.dataType) {
                    type = col.dataType;
                    isToConvert = true;
                    schema = this.dataSource.schema()
                }
            }
            if (pk === undefined) {
                pk = null
            }
            for (i = 0; i < valuesLength; i++) {
                if (data[i] === undefined || data[i] === null) {
                    break
                }
                if (isToConvert) {
                    if (pk === null) {
                        pkVal = i
                    } else {
                        pkVal = data[i][pk]
                    }
                    values[i] = schema._convertType(type, values[i], pkVal, key)
                }
                data[i][key] = values[i];
                this._addUnboundColumnValue(key, values[i], i)
            }
            if (this.options.virtualization === true || this.options.rowVirtualization === true) {
                this._scrollTo(0)
            }
            this._renderColumnData(key, this.dataSource.dataView())
        },

        getUnboundColumnByKey: function (key) {
            if (this._unboundColumns === undefined || this._unboundColumns === null || this._unboundColumns.length === 0 || key === null || key === undefined) {
                return null
            }
            var column = null;
            $.each(this._unboundColumns, function (ind, col) {
                if (col.key === key) {
                    column = col;
                    return false
                }
            });
            return column
        },

        _renderColumnData: function (key, values) {
            if (values.length === 0) {
                return
            }
            var visibleColumns = this._visibleColumns(), grid = this, tdIndex, index, tds, column, ds, hasTemplate = (grid.options.rowTemplate && grid.options.rowTemplate.length > 0);
            index = this._getVisibleIndexByKey(key);
            column = visibleColumns[index];
            if (column === undefined || column === null) {
                return
            }
            if (hasTemplate) {
                ds = this.dataSource.dataView()
            }
            tdIndex = index + this.headersTable().find(">thead>tr:eq(0)>th[data-skip=true]").length;
            tds = this.element.find(">tbody> tr > td:not([data-skip]):nth-child(" + (tdIndex + 1) + ")");
            $.each(values, function (ind, val) {
                var innerHtml;
                if (val[key] === undefined) {
                    return true
                }
                if (hasTemplate) {
                    innerHtml = grid._renderTemplatedCell(ds[ind], column).substring(1)
                } else {
                    innerHtml = grid._renderCell(val[key], column)
                }
                if (!tds[ind]) {
                    return false
                }
                $(tds[ind]).html(innerHtml)
            })
        },

        _renderData: function (success, errmsg) {
            this._trigger(this.events.dataBound, null, {
                owner: this
            });
            var gridElement = this.element, self = this, noCancel = true, sum = 0, cols, colsToUnbound, fields, colsLength, data, key, j, i, diff = 0, isTable = false, noCancelError = true, ucFormulaFunction, tbody, newW, displayCont;
            if (this._hasUnboundColumns) {
                cols = this.options.columns;
                colsLength = cols.length;
                data = this.dataSource.data();
                ucFormulaFunction = function (ind, val) {
                    if ($.type(cols[i].formula) === "function") {
                        val[key] = cols[i].formula(val, gridElement)
                    } else {
                        val[key] = eval(cols[i].formula + "(val, gridElement)")
                    }
                    self._addUnboundColumnValue(key, val[key], ind)
                };
                colsToUnbound = [];
                for (i = 0; i < colsLength; i++) {
                    if (cols[i].unbound === true) {
                        key = cols[i].key;
                        if (cols[i].unboundValues !== null && cols[i].unboundValues !== undefined && $.type(cols[i].unboundValues) === "array") {
                            this.setUnboundValues(cols[i].unboundValues, key)
                        } else {
                            if (cols[i].formula !== null && cols[i].formula !== undefined) {
                                $.each(data, ucFormulaFunction)
                            } else {
                                if (this._unboundValues[key] && this._unboundValues[key].length > 0) {
                                    colsToUnbound.push(key)
                                }
                            }
                        }
                    }
                }
                if (this.options.localSchemaTransform === true && colsToUnbound.length > 0 && data.length > 0) {
                    for (i = 0; i < colsToUnbound.length; i++) {
                        key = colsToUnbound[i];
                        if (data[0][key] === undefined) {
                            this.setUnboundValues(this._unboundValues[key], key)
                        }
                    }
                }
                if (this.options.mergeUnboundColumns === false) {
                    this._mergeUnboundValues()
                }
            }
            if (success === false) {
                noCancelError = this._trigger(this.events.requestError, null, {
                    owner: this,
                    message: errmsg
                });
                if (noCancelError) {
                    throw new Error(errmsg)
                }
            }
            if (this._cancelRendering === true) {
                this._cancelRendering = false;
                return
            }
            this.element.trigger("iggriduisoftdirty", {
                owner: this
            });
            tbody = gridElement.children("tbody");
            noCancel = this._trigger(this.events.dataRendering, null, {
                owner: this,
                tbody: tbody
            });
            if (noCancel) {
                if (!(this.options.dataSource && this.options.dataSource.tagName && $(this.options.dataSource).is("table"))) {
                    tbody = this._cleanupTBody()
                } else {
                    isTable = true
                }
                this._virtualDom = null;
                if (!this._initialized) {
                    if (this.options.autoGenerateColumns === true) {
                        this._generateColumns();
                        for (i = 0; i < this.options.features.length; i++) {
                            this._initFeature(this.options.features[i], this._dataOptions)
                        }
                        this._captureInitiallyHiddenColumns();
                        this._visibleColumnsArray = undefined;
                        this._updateVirtColCounters()
                    }
                    if (isTable) {
                        tbody.empty()
                    }
                    if (this._renderHeaderCalled !== true) {
                        this._renderHeader();
                        this._renderCaption()
                    } else {
                        if (this.options.width !== null && this.options.height === null) {
                            this.scrollContainer().css("overflow-y", "hidden").css("overflow-x", "auto")
                        }
                    }
                    if (this.element.find("colgroup").length === 0 || this.element.find("colgroup").children().length === 0) {
                        this._renderColgroup(this.element[0], false, false, this.options.autofitLastColumn)
                    }
                    this._renderFooter()
                }
                this._trigger("dataEmpty", null, {
                    owner: this,
                    tbody: tbody
                });
                if (this.options.autoGenerateColumns === false && ((this.options.columns && this.options.columns.length === 0) || !this.options.columns)) {
                    throw new Error($.ig.Grid.locale.noColumnsButAutoGenerateTrue)
                }
                if (this._hasColumnTemplates() && this.options.rowTemplate === null) {
                    this.options.rowTemplate = this._buildRowTemplateRaw()
                }
                if (this._initialHiddenColumns === undefined || this._initialHiddenColumns.length === 0) {
                    if (this.options.columns.length > 0) {
                        if (this.options.virtualization === true || this.options.rowVirtualization === true || this.options.columnVirtualization === true) {
                            this._renderVirtualRecords()
                        } else {
                            this._renderRecords()
                        }
                        if (this._initialized) {
                            this._adjustLastColumnWidth(false);
                            if (this.options.width !== null && this.options.height !== null) {
                                this._synchronizeHScroll()
                            }
                        } else {
                            if (this.options.height !== null && this.options.autoAdjustHeight) {
                                this._initializeHeights()
                            }
                            this._adjustLastColumnWidth(true)
                        }
                    }
                }
                if (!this._initialized) {
                    if (this.options.autoAdjustHeight) {
                        this._initializeHeights()
                    }
                }
                if (this._initialHiddenColumns !== undefined && this._initialHiddenColumns.length > 0) {
                    if ($.ig.util.isIE8) {
                        this._setHiddenColumns(this._initialHiddenColumns, false, false)
                    }
                    this._setHiddenColumns(this._initialHiddenColumns, true, true);
                    if (this._initialHiddenCells !== undefined && this._initialHiddenCells.length > 0) {
                        $.each(this._initialHiddenCells, function (index, cell) {
                            cell.css("display", "")
                        })
                    }
                    $.each(this._initialHiddenColumns, function (index, column) {
                        column._initiallyHidden = true
                    });
                    this._initialHiddenCells = undefined;
                    this._initialHiddenColumns = undefined
                }
                this._registerAdditionalEvents();
                this._trigger(this.events.dataRendered, null, {
                    owner: this
                });
                this._fireInternalEvent("_dataRendered");
                if (this._loadingIndicator === undefined) {
                    this._initLoadingIndicator()
                }
                this._loadingIndicator.hide()
            }
            if (this._fixScrollY) {
                this.scrollContainer().css("overflow-y", this.rows().length > 1 ? "hidden" : "visible")
            }
            if (this.options.width === null && this.container()[0] && this.container()[0].style.width) {
                cols = this.element.find("colgroup > col[data-skip]");
                if (cols.length > 0) {
                    for (j = 0; j < cols.length; j++) {
                        sum += parseInt(cols[j].style.width, 10)
                    }
                }
                if (!this._origSum) {
                    this._origSum = 0
                }
                diff = sum - this._origSum;
                if (diff < 0) {
                    diff = 0
                }
                newW = parseInt(this.container()[0].style.width, 10) + diff;
                this.container().css("width", newW);
                displayCont = $("#" + this.id() + "_displayContainer");
                if (displayCont.length > 0) {
                    displayCont.css("width", newW - this._scrollbarWidth()).css("max-width", newW - this._scrollbarWidth());
                    $("#" + this.id() + "_headers_v").css("width", newW);
                    $("#" + this.id() + "_footer_container").css("width", newW)
                }
                this._origSum = sum
            }
            if (this.options.dataSourceUrl !== null && this._firstBind) {
                this.options.dataSource = this.options.dataSourceUrl;
                this.dataSource.settings.dataSource = this.options.dataSourceUrl;
                this.dataSource.settings.type = "remoteUrl";
                this.dataSource._runtimeType = this.dataSource.analyzeDataSource();
                this._firstBind = false
            }
            if (!this._initialized) {
                this._trigger(this.events.rendered, null, {
                    owner: this
                });
                this._hc = this.container().find(".ui-iggrid-expandheadercell").length > 0;
                this._initialized = true
            }
            this._fireInternalEvent("_gridRendered", $("#" + gridElement[0].id + "_container"))
        },

        _hasColumnTemplates: function () {
            var i, hasTemplates = false, t;
            for (i = 0; i < this.options.columns.length; i++) {
                t = this.options.columns[i].template;
                if (t !== null && typeof (t) !== "undefined" && t !== "" && t.length > 0) {
                    hasTemplates = true;
                    break
                }
            }
            return hasTemplates
        },

        _gridHasWidthInPixels: function () {
            if (typeof this.options.width === "string" && this.options.width.indexOf("%") !== -1) {
                return false
            }
            return parseInt(this.options.width, 10) > 0
        },

        _gridHasWidthInPercent: function () {
            if (typeof this.options.width === "string" && this.options.width.indexOf("%") !== -1) {
                return true
            }
            return false
        },

        _adjustLastColumnWidth: function (colgroupsRerendered) {
            var grid = this, hasFixedHeader = this.options.height !== null && this.options.fixedHeaders === true && this.options.showHeader && this._headerParent, hasFixedFooter = this.options.height !== null && this.options.fixedFooters === true && this.options.showFooter && this._footerParent, hasHeight = this.options.height && parseInt(this.options.height, 10) > 0, hasWidthInPixels = this._gridHasWidthInPixels(), hasWidthInPercent = this._gridHasWidthInPercent(), hasVirtualization = this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true, gridWidth, specialColumnsWidth;
            if (hasHeight && !hasVirtualization) {
                if ((this.options.autoAdjustHeight && this.element.height() <= $("#" + this.element[0].id + "_scroll").height()) || (!this.options.autoAdjustHeight && this.options.avgRowHeight * this.element[0].rows.length < parseInt(this.options.height, 10))) {
                    this._hasVerticalScrollbar = false
                } else {
                    this._hasVerticalScrollbar = true
                }
            }
            if (colgroupsRerendered) {
                if (hasVirtualization) {
                    if (hasFixedHeader) {
                        this._headerParent.css(this._padding, this._scrollbarWidth())
                    }
                    if (hasFixedFooter) {
                        this._footerParent.css(this._padding, this._scrollbarWidth())
                    }
                }
                if (hasWidthInPixels || hasWidthInPercent) {
                    if (this._allColumnWidthsInPixels) {
                        gridWidth = this._totalColPixelWidth;
                        specialColumnsWidth = this._calculateSpecialColumnsWidth();
                        if (specialColumnsWidth > 0) {
                            if (this._autoadjustedColumn && this._lastColPixelWidth) {
                                if (this._autoadjustedColumn.difference < specialColumnsWidth) {
                                    this._lastColPixelWidth -= this._autoadjustedColumn.difference;
                                    gridWidth -= this._autoadjustedColumn.difference - specialColumnsWidth
                                } else {
                                    this._lastColPixelWidth -= specialColumnsWidth
                                }
                                this._autoadjustedColumn.width = this._lastColPixelWidth;
                                if (hasFixedHeader) {
                                    this._lastHeaderCol.css("width", this._lastColPixelWidth + "px")
                                }
                                if (hasFixedFooter) {
                                    this._lastFooterCol.css("width", this._lastColPixelWidth + "px")
                                }
                                this._lastDataCol.css("width", this._lastColPixelWidth + "px")
                            } else {
                                gridWidth += specialColumnsWidth
                            }
                        } else {
                            if (!hasFixedHeader && this._hasVerticalScrollbar) {
                                gridWidth -= this._scrollbarWidth();
                                this._lastColPixelWidth -= this._scrollbarWidth();
                                this._lastDataCol.css("width", this._lastColPixelWidth + "px")
                            }
                        }
                    } else {
                        if (hasWidthInPixels) {
                            gridWidth = parseInt(grid.options.width, 10)
                        } else {
                            if (hasWidthInPercent) {
                                gridWidth = this.container().width()
                            }
                        }
                    }
                    if (!this._allColumnWidthsInPercentage || !hasWidthInPercent) {
                        if (hasVirtualization === false) {
                            this._gridInnerWidth = this.scrollContainer().width()
                        } else {
                            this._gridInnerWidth = $("#" + this.element[0].id + "_displayContainer").width() + this._scrollbarWidth()
                        }
                        this._setGridContentWidth(gridWidth)
                    }
                }
            } else {
                this._setGridContentWidth()
            }
            if (hasHeight && !hasVirtualization) {
                if (this.options.width !== null && this.options.height !== null) {
                    if (this._hasVerticalScrollbar) {
                        $("#" + this.element[0].id + "_hscroller").css("overflow-y", "scroll")
                    } else {
                        $("#" + this.element[0].id + "_hscroller").css("overflow-y", "hidden")
                    }
                }
                if ((this._allColumnWidthsInPercentage && hasWidthInPercent) || !(hasWidthInPixels || hasWidthInPercent)) {
                    if (this._hasVerticalScrollbar) {
                        if (hasFixedHeader) {
                            this._headerParent.css(this._padding, this._scrollbarWidth())
                        }
                        if (hasFixedFooter) {
                            this._footerParent.css(this._padding, this._scrollbarWidth())
                        }
                    } else {
                        if (hasFixedHeader) {
                            this._headerParent.css(this._padding, "")
                        }
                        if (hasFixedFooter) {
                            this._footerParent.css(this._padding, "")
                        }
                    }
                } else {
                    this._updateVerticalScrollbarCellPadding()
                }
            }
        },

        _initializeHeights: function () {
            var initialHeight;
            if (this.options.height === null || this.options.height === undefined) {
                return
            }
            initialHeight = parseInt(this.options.height, 10);
            if (this.options.height.indexOf && this.options.height.indexOf("%") !== -1) {
                $("#" + this.element[0].id + "_scroll").height("100%")
            } else {
                $("#" + this.element[0].id + "_scroll").height(initialHeight)
            }
            this._initializeHeightsInternal()
        },

        _initializeHeightsInternal: function () {
            var children, height, i, $child, ch;
            ch = this.container().height();
            this._prevContainerHeight = ch;
            if (this.options.height !== null) {
                children = this.container().children();
                height = 0;
                for (i = 0; i < children.length; i++) {
                    $child = $(children[i]);
                    if ((($child.attr("id") !== undefined && !$child.attr("id").endsWith("_scroll") && !$child.attr("id").endsWith("_loading")) || !$child.attr("id")) && $child.is(":visible") && $child.data("efh") !== "1") {
                        if ($child.is("table") && $child.children().first().is("caption")) {
                            height += $child.children().first().outerHeight()
                        } else {
                            height += $child.outerHeight()
                        }
                    }
                }
                if (height > 0) {
                    $("#" + this.element[0].id + "_scroll").height(ch - height)
                }
            }
        },

        _registerAdditionalEvents: function () {
            var css = "ui-state-hover", topmostGrid = this.element.closest(".ui-iggrid-root").data("igGrid");
            if (topmostGrid === undefined) {
                topmostGrid = this
            }
            $("#" + this.element[0].id + " th.ui-state-default").hover(function () {
                if (!topmostGrid._cancelHoveringEffects) {
                    $(this).addClass("ui-state-hover")
                }
            }, function () {
                $(this).removeClass("ui-state-hover")
            });
            if (this.options.enableHoverStyles) {
                this.element.bind(this._hovEvts = {
                    mousemove: function (e) {
                        var par, tag, tr = e.target;
                        while (tr) {
                            par = tr.parentNode;
                            if ((tag = tr.nodeName) === "TR" && par.nodeName === "TBODY") {
                                break
                            }
                            tr = (tag === "TABLE") ? null : par
                        }
                        if (_hovTR !== tr) {
                            if (_hovTR && $(_hovTR).attr("data-container") !== "true") {
                                $("td", _hovTR).removeClass(css)
                            }
                            if (tr && $(tr).attr("data-container") !== "true" && e.target.id.indexOf("_scrollContainer") === -1 && e.target.parentNode.id.indexOf("_scrollContainer") === -1) {
                                if (!topmostGrid._cancelHoveringEffects) {
                                    $("td", tr).addClass(css)
                                }
                            }
                            _hovTR = tr
                        }
                    },
                    mouseleave: function (e) {
                        if (_hovTR) {
                            $("td", _hovTR).removeClass(css);
                            _hovTR = null
                        }
                    }
                })
            }
        },

        _renderColgroup: function (table, isHeader, isFooter, autofitLastColumn) {
            var colgroup, i, cols = this._visibleColumns(), defWidth = this.options.defaultColumnWidth, totalColWidth = 0, totalGridWidth, hasWidthInPixels = this._gridHasWidthInPixels(), hasWidthInPercent = this._gridHasWidthInPercent(), hasWidth = hasWidthInPixels || hasWidthInPercent, hasVirtualization = this.options.virtualization === true || this.options.columnVirtualization === true || this.options.rowVirtualization === true, hasColumnVirtualization = (this.options.virtualization === true && this.options.virtualizationMode === "fixed") || this.options.columnVirtualization === true, hasColumnsWithNoWidth = false, isPercentage = true, desiredColWidth, desiredColWidthNumber, lastCol, lastColWidth, difference;
            colgroup = $(table).find("colgroup");
            if (colgroup.length === 0) {
                colgroup = $("<colgroup></colgroup>").prependTo(table)
            }
            if ((hasVirtualization && this.options.virtualizationMode === "fixed") || hasColumnVirtualization) {
                this._updateVirtColCounters();
                cols = cols.slice(0, this._virtualColumnCount)
            }
            for (i = 0; i < cols.length; i++) {
                if (cols[i].width) {
                    desiredColWidth = cols[i].width
                } else {
                    desiredColWidth = defWidth;
                    cols[i].width = defWidth
                }
                if (desiredColWidth) {
                    if (!desiredColWidth.charAt || !desiredColWidth.endsWith("%")) {
                        isPercentage = false
                    }
                    desiredColWidthNumber = parseInt(desiredColWidth, 10);
                    if (desiredColWidthNumber <= 0) {
                        desiredColWidthNumber = undefined
                    }
                } else {
                    desiredColWidthNumber = undefined;
                    isPercentage = false
                }
                if (desiredColWidthNumber) {
                    lastCol = $("<col></col>").appendTo(colgroup).css("width", desiredColWidth);
                    lastColWidth = desiredColWidthNumber;
                    totalColWidth += desiredColWidthNumber
                } else {
                    lastCol = $("<col></col>").appendTo(colgroup);
                    lastColWidth = undefined;
                    hasColumnsWithNoWidth = true
                }
            }
            if (!hasColumnVirtualization && autofitLastColumn && hasWidth && !hasColumnsWithNoWidth && lastColWidth) {
                if (isPercentage) {
                    if (totalColWidth < 100) {
                        lastColWidth += 100 - totalColWidth;
                        lastCol.css("width", lastColWidth + "%");
                        this._autoadjustedColumn = cols.slice(-1)[0];
                        this._autoadjustedColumn.width = lastColWidth + "%"
                    }
                } else {
                    if (hasWidthInPixels) {
                        totalGridWidth = parseInt(this.options.width, 10)
                    } else {
                        if (hasWidthInPercent) {
                            totalGridWidth = this.container().width()
                        }
                    }
                    if (totalGridWidth && totalGridWidth > totalColWidth) {
                        difference = totalGridWidth - totalColWidth;
                        lastColWidth += difference;
                        totalColWidth += difference;
                        lastCol.css("width", lastColWidth + "px");
                        this._autoadjustedColumn = cols.slice(-1)[0];
                        this._autoadjustedColumn.width = lastColWidth + "px";
                        this._autoadjustedColumn.difference = difference
                    }
                }
            } else {
                this._autoadjustedColumn = undefined
            }
            if (hasWidth && hasVirtualization && !hasColumnsWithNoWidth && lastColWidth) {
                if (!isPercentage) {
                    lastColWidth -= this._scrollbarWidth();
                    lastCol.css("width", lastColWidth + "px")
                }
            }
            if (isHeader) {
                this._lastHeaderCol = lastCol
            }
            if (isFooter) {
                this._lastFooterCol = lastCol
            }
            if (!isHeader && !isFooter) {
                this._lastDataCol = lastCol
            }
            this._allColumnWidthsInPercentage = isPercentage && !hasColumnsWithNoWidth && cols.length > 0;
            this._allColumnWidthsInPixels = !isPercentage && !hasColumnsWithNoWidth && cols.length > 0;
            if (this._allColumnWidthsInPixels) {
                this._lastColPixelWidth = lastColWidth;
                this._totalColPixelWidth = totalColWidth
            } else {
                this._lastColPixelWidth = undefined;
                this._totalColPixelWidth = undefined
            }
        },

        _buildRowTemplateRaw: function () {
            var tmpl = "<tr>", i, c = this.options.columns;
            for (i = 0; i < c.length; i++) {
                if (c[i].template) {
                    tmpl += "<td>" + c[i].template + "</td>"
                } else {
                    tmpl += "<td>{{html " + c[i].key + "}}</td>"
                }
            }
            tmpl += "</tr>";
            return tmpl
        },

        _generateRowTemplate: function () {
            var key, type, format, auto = this.options.autoFormat, ar = this.options.accessibilityRendering, firstRec = null, grid = this, i, prop, tmplName, tmpl = grid.options.rowTemplate, cols = grid.options.columns, id = 'data-id="${ig_pk}"';
            if (this.options.virtualization && this.options.virtualizationMode === "continuous") {
                id += ' data-row-idx="${ig_abs_idx}"'
            }
            if (this._tmpl) {
                return this._tmpl
            }
            if (grid.dataSource.dataView().length > 0) {
                firstRec = grid.dataSource.dataView()[0]
            }
            if (tmpl) {
                i = tmpl.indexOf("<tr");
                if (i >= 0 && tmpl.indexOf(".ig_pk") < 0) {
                    tmpl = tmpl.substring(0, i + 3) + " " + id + tmpl.substring(i + 3)
                }
                for (i = 0; i < cols.length; i++) {
                    key = cols[i].key;
                    if (cols[i].formatter) {
                        format = "${$item." + key + "Formatter(this.data ? this.data." + key + " : undefined)}"
                    } else {
                        format = cols[i].format;
                        type = cols[i].dataType;
                        type = (type === "date" || type === "number") ? type : "";
                        if (format || ((auto === true || auto === "dateandnumber") && type) || (auto && auto === type)) {
                            format = "${" + key + "}"
                        }
                    }
                    if (format) {
                        tmpl = tmpl.replace(new RegExp("\\$ *\\{ *" + key + " *\\}", "g"), format)
                    }
                }
            } else {
                if (ar) {
                    tmpl = '<tr role="row" '
                } else {
                    tmpl = "<tr "
                }
                tmpl += id;
                if (this.options.alternateRowStyles) {
                    tmpl += "class=\"{{if $i % 2 === 0}}''{{else}}" + this.css.recordAltClass + '{{/if}}">'
                } else {
                    tmpl += ">"
                }
                if (cols.length > 0) {
                    if (firstRec === null || (firstRec.hasOwnProperty(cols[0].key) && $.type(firstRec) !== "array")) {
                        for (i = 0; i < cols.length; i++) {
                            key = cols[i].key;
                            if (ar) {
                                tmpl += '<td role=gridcell aria-describedby="' + key + '">'
                            } else {
                                tmpl += "<td>"
                            }
                            if (cols[i].formatter !== undefined) {
                                tmpl += "${$item." + key + "Formatter(this.data ? this.data." + key + " : undefined)}</td>"
                            } else {
                                format = cols[i].format;
                                type = cols[i].dataType;
                                type = (type === "date" || type === "number") ? type : "";
                                if (format || ((auto === true || auto === "dateandnumber") && type) || (auto && auto === type)) {
                                    tmpl += "${" + key + "}</td>"
                                } else {
                                    if (type === "bool") {
                                        tmpl += "${" + key + "}</td>"
                                    } else {
                                        tmpl += "${" + key + "}</td>"
                                    }
                                }
                            }
                        }
                    } else {
                        tmpl += "{{each $data}}";
                        if (ar) {
                            tmpl += '<td role="gridcell">${this}</td>'
                        } else {
                            tmpl += "<td>${this}</td>"
                        }
                        tmpl += "{{/each}}"
                    }
                } else {
                    if (grid.dataSource.dataView().length > 0) {
                        for (prop in firstRec) {
                            if (firstRec.hasOwnProperty(prop)) {
                                if (ar) {
                                    tmpl += '<td role="gridcell">${' + prop + "}</td>"
                                } else {
                                    tmpl += "<td>${" + prop + "}</td>"
                                }
                            }
                        }
                    } else {
                        throw new Error($.ig.DataSourceLocale.locale.cannotBuildTemplate)
                    }
                }
                tmpl += "</tr>"
            }
            tmplName = this.element[0].id + "rowTemplate";
            this._tmpl = tmpl;
            return tmpl
        },

        _renderRecords: function (start, end) {
            var prime, grid = this, tbody = this.element.children("tbody"), tmpl, ph, rs, ds = this.dataSource.dataView(), i, d = "", noCancel = true, tbodytmp;
            noCancel = this._trigger(this.events.rowsRendering, null, {
                owner: $.extend(this, {
                    cvSr: start,
                    cvEr: end
                }),
                tbody: tbody
            });
            if (start === undefined) {
                start = 0;
                end = ds.length - 1
            }
            if (start !== undefined && end === undefined) {
                end = start;
                if (end > ds.length - 1) {
                    end = ds.length - 1
                }
                start = 0
            }
            if (start < 0) {
                start = 0
            }
            if (end > ds.length - 1) {
                end = ds.length - 1
            }
            if (noCancel) {
                if (!grid.options.rowTemplate || grid.options.rowTemplate.length <= 0) {
                    for (i = start; i <= end; i++) {
                        d += grid._renderRecord(ds[i], i)
                    }
                    if (!this._canreplaceinner || $.browser.webkit) {
                        ph = document.createElement("div");
                        ph.innerHTML = "<table><tbody>" + d + "</tbody></table>";
                        tbodytmp = ph.firstChild.firstChild;
                        this.element[0].replaceChild(tbodytmp, tbody[0])
                    } else {
                        if (this._canreplaceinner) {
                            tbody[0].innerHTML = d
                        }
                    }
                    d = ""
                } else {
                    if (ds.length > 0) {
                        tmpl = this._generateRowTemplate();
                        if (tmpl.lastIndexOf("ui-iggrid-rowselector-class") > -1) {
                            rs = true
                        }
                        for (i = start; i <= end; i++) {
                            prime = _aNull(this.options.primaryKey) ? ds[i].ig_pk : this._kval_from_key(this.options.primaryKey, ds[i]);
                            ds[i].ig_pk = _aNull(prime) ? i : prime;
                            if (this.options.virtualization && this.options.virtualizationMode === "continuous") {
                                ds[i].ig_abs_idx = i
                            }
                            if (rs) {
                                ds[i].ig_rs_idx = $.ig.rowNumberingFunctionDelegate(ds[i].ig_pk)
                            }
                            d += grid._renderRecord(ds[i], i)
                        }
                        tbody.html(d);
                        d = "";
                        if (rs) {
                            for (i = 0; i < ds.length; i++) {
                                ds[i].ig_rs_idx = null
                            }
                        }
                    }
                }
                this._buildVirtualDomForContinuousVirtualization();
                this._trigger(this.events.rowsRendered, null, {
                    owner: this,
                    tbody: tbody
                })
            }
        },

        _buildFormatters: function () {
            var i, cols = this.options.columns, ret = {};
            for (i = 0; i < cols.length; i++) {
                if (cols[i].formatter !== undefined) {
                    if ($.type(cols[i].formatter) === "function") {
                        ret[cols[i].key + "Formatter"] = cols[i].formatter
                    } else {
                        ret[cols[i].key + "Formatter"] = eval(cols[i].formatter)
                    }
                }
            }
            return ret
        },

        _getVisibleIndexByKey: function (columnKey) {
            var cols = this._visibleColumns(), index = -1;
            $.each(cols, function (ind, value) {
                if (value.key === columnKey) {
                    index = ind;
                    return false
                }
            });
            return index
        },

        _visibleColumns: function () {
            if (this._visibleColumnsArray === undefined) {
                this._visibleColumnsArray = $.grep(this.options.columns, function (col) {
                    return !col.hidden
                })
            }
            return this._visibleColumnsArray
        },

        _renderVirtualRecordsFixed: function () {
            var i, j, tmpl, row, c, val, headersTexts, headerText, vheaderNode, iRow, tr, ds = this.dataSource, data = ds.dataView(), key = this.options.primaryKey, visibleCols = this._visibleColumns();
            this._trigger("virtualrendering");
            if (this._startRowIndex === undefined || this._startRowIndex === null) {
                this._startRowIndex = 0
            }
            if (this._startColIndex === undefined || this._startColIndex === null) {
                this._startColIndex = 0
            }
            if (this._virtualDom === null || this._virtualDom === undefined) {
                this._buildVirtualDom();
                if (this.options.adjustVirtualHeights === true) {
                    this._adjustVirtualHeights()
                }
            } else {
                for (i = 0; i < this._virtualRowCount && i < this._totalRowCount && this._startRowIndex + i < data.length; i++) {
                    if (!this.options.rowTemplate || this.options.rowTemplate.length <= 0) {
                        for (j = 0; j < this._virtualColumnCount; j++) {
                            if (this.options.columns.length > 0) {
                                val = data[this._startRowIndex + i][visibleCols[this._startColIndex + j].key];
                                this._virtualDom[i][j].innerHTML = this._renderCell(val, visibleCols[this._startColIndex + j])
                            } else {
                                val = data[this._startRowIndex + i][this._startColIndex + j];
                                this._virtualDom[i][j].innerHTML = data[this._startRowIndex + i][this._startColIndex + j]
                            }
                            this._virtualDom[i][j].className = ""
                        }
                    } else {
                        tmpl = this._generateRowTemplate();
                        if ($.type(data[i]) === "array") {
                            row = $($.ig.tmpl(tmpl, [data[this._startRowIndex + i]], this._buildFormatters()))
                        } else {
                            row = $($.ig.tmpl(tmpl, data[this._startRowIndex + i], this._buildFormatters()))
                        }
                        c = row.children();
                        for (j = 0; j < this._virtualColumnCount; j++) {
                            this._virtualDom[i][j].innerHTML = c[j + this._startColIndex].innerHTML;
                            this._virtualDom[i][j].className = ""
                        }
                    }
                    iRow = this._startRowIndex + i;
                    tr = this._virtualDom[i][0].parentNode;
                    tr.className = ((i % 2 === 0 && this.options.alternateRowStyles) ? "ui-iggrid-virtualrow ui-ig-altrecord" : "ui-iggrid-virtualrow");
                    if (data[iRow]) {
                        if (!_aNull(key)) {
                            tr.setAttribute("data-id", this._kval_from_key(key, data[iRow]))
                        } else {
                            if (!_aNull(data[iRow].ig_pk)) {
                                tr.setAttribute("data-id", data[iRow].ig_pk)
                            }
                        }
                    }
                }
            }
            if (this._isHorizontal) {
                this._isHorizontal = false;
                if ((this.options.virtualization === true || this.options.columnVirtualization === true) && parseInt(this.options.width, 10) > 0) {
                    if (!this._vheaders) {
                        headersTexts = this.headersTable().find("thead > tr > th > a > span:first-child");
                        if (headersTexts.length > 0) {
                            this._vheaders = headersTexts
                        } else {
                            this._vheaders = this.headersTable().find("thead > tr > th > span")
                        }
                    }
                    for (j = 0; j < this._virtualColumnCount; j++) {
                        headerText = visibleCols[j + this._startColIndex].headerText;
                        vheaderNode = $(this._vheaders[j]);
                        vheaderNode.parent().attr("id", this.element[0].id + "_" + headerText);
                        vheaderNode.html(headerText)
                    }
                }
            }
            this._trigger("virtualrecordsrender", null, {
                owner: this,
                tbody: this.element.children("tbody"),
                dom: this._virtualDom
            })
        },

        _updateVirtColCounters: function () {
            var visibleColsLength = this._visibleColumns().length;
            if (this.options.columns) {
                this._totalColumnCount = visibleColsLength;
                this._maxVirtualColumnCount = this.options.columns.length
            } else {
                this._totalColumnCount = this.dataSource.dataView()[0].length;
                this._maxVirtualColumnCount = this._totalColumnCount
            }
            if (this.options.columnVirtualization === false && this.options.virtualization === false) {
                this._virtualColumnCount = visibleColsLength
            } else {
                if (this.options.width === null) {
                    this._virtualColumnCount = this._totalColumnCount
                } else {
                    this._virtualColumnCount = Math.ceil(parseInt(this.options.width, 10) / this._avgColumnWidth());
                    this._maxVirtualColumnCount = Math.min(this._maxVirtualColumnCount, this._virtualColumnCount);
                    this._virtualColumnCount = Math.min(this._totalColumnCount, this._virtualColumnCount);
                    $("#" + this.id() + "_horizontalScrollContainer").children().first().css("width", this._calculateContainerWidth(false))
                }
            }
        },

        _buildVirtualDom: function () {
            var grid = this, markup = "", row, i, j, dataLinkFn, ar = this.options.accessibilityRendering, shouldHide = false, visibleCols = this._visibleColumns(), key = this.options.primaryKey, data = this.dataSource.dataView();
            if (this._startRowIndex === undefined || this._startRowIndex === null) {
                this._startRowIndex = 0;
                this._startColIndex = 0;
                this._oldStartRowIndex = 0;
                this._oldStartColIndex = 0
            }
            this._virtualDom = [];
            this._totalRowCount = data.length;
            if (this.options.height === null) {
                this._virtualRowCount = this._totalRowCount
            } else {
                this._virtualRowCount = Math.ceil(parseInt(this.options.height, 10) / parseInt(this.options.avgRowHeight, 10), 10)
            }
            this._updateVirtColCounters();
            if (this.options.height !== null) {
                $("#" + this.element[0].id + "_scrollContainer").children().first().height(this._totalRowCount * parseInt(this.options.avgRowHeight, 10))
            }
            dataLinkFn = function (row, i, vc) {
                var j;
                for (j = 0; j < vc; j++) {
                    if (j < grid._totalColumnCount) {
                        grid._virtualDom[i][j] = row[0].cells[j]
                    }
                }
            };
            this.element.children("tbody").empty();
            for (i = 0; i < this._virtualRowCount; i++) {
                shouldHide = false;
                this._virtualDom[i] = [];
                markup = "";
                for (j = this._startColIndex; j < this._virtualColumnCount + this._startColIndex; j++) {
                    if (j >= this._totalColumnCount) {
                        break
                    }
                    if (ar) {
                        markup += '<td role="gridcell" '
                    } else {
                        markup += "<td "
                    }
                    if (this.options.columns.length > 0) {
                        if (ar) {
                            markup += 'aria-describedby="' + visibleCols[j].key + '"'
                        }
                        if (!data[i]) {
                            shouldHide = true
                        } else {
                            if (this.options.autoFormat !== false) {
                                if (this.options.rowTemplate && this.options.rowTemplate.length > 0) {
                                    markup += this._renderTemplatedCell(data[i], visibleCols[j]) + "</td>"
                                } else {
                                    markup += ">" + this._renderCell(data[i][visibleCols[j].key], visibleCols[j]) + "</td>"
                                }
                            } else {
                                markup += ">" + data[i][visibleCols[j].key] + "</td>"
                            }
                        }
                    } else {
                        if (!data[i]) {
                            shouldHide = true
                        } else {
                            markup += data[i][j] + "</td>"
                        }
                    }
                }
                row = $("<tr>" + markup + "</tr>").appendTo(this.element.children("tbody"));
                if (shouldHide) {
                    row.css("visibility", "hidden")
                }
                if (i % 2 === 0 && this.options.alternateRowStyles) {
                    row.addClass("ui-ig-altrecord")
                }
                row.addClass("ui-iggrid-virtualrow");
                if (i % 2 === 0 && this.options.alternateRowStyles) {
                    row.addClass("ui-ig-altrecord")
                }
                if (ar) {
                    row.attr("role", "row")
                }
                if (data[i]) {
                    if (!_aNull(key)) {
                        row.attr("data-id", this._kval_from_key(key, data[i]))
                    } else {
                        if (!_aNull(data[i].ig_pk)) {
                            row.attr("data-id", data[i].ig_pk)
                        }
                    }
                }
                dataLinkFn(row, i, this._virtualColumnCount);
                if (i === data.length - 1) {
                    break
                }
            }
            this._trigger("virtualdombuilt", null, {
                rows: this.element.children("tbody").children("tr")
            })
        },

        _adjustVirtualHeights: function () {
            var c = $("#" + this.element[0].id + "_displayContainer"), tbody = c.find("tbody"), h = tbody.children().first().height();
            if (this.options.height === null) {
                return
            }
            if (this.options.avgRowHeight !== h) {
                this.options.avgRowHeight = h;
                this._buildVirtualDom()
            }
        },

        _verticalScroller: function () {
            if (!this._verticalScrollerObj) {
                this._verticalScrollerObj = $("#" + this.element[0].id + "_scrollContainer").children().first()
            }
            return this._verticalScrollerObj
        },

        _avgColumnWidth: function () {
            var width = 0, cols = this.options.columns, count = cols.length, def = this.options.defaultColumnWidth, i;
            if (this.options.avgColumnWidth !== null) {
                return parseInt(this.options.avgColumnWidth, 10)
            }
            for (i = 0; i < count; i++) {
                width += parseInt(cols[i].width, 10)
            }
            if ((count === 0 || isNaN(width)) && def) {
                return parseInt(def, 10)
            }
            if (count > 0 && this.options.autoGenerateColumns && isNaN(width)) {
                if (this.options.width === null || this.options.width === undefined) {
                    throw new Error($.ig.DataSourceLocale.locale.columnVirtualizationRequiresWidth)
                } else {
                    return parseInt(this.options.width, 10) / count
                }
            }
            if (width === 0 || (width < def)) {
                return def
            }
            return width / count
        },

        _scrollData: function () {
            var scroller = $("#" + this.element[0].id + "_hscroller"), scrollContainer;
            if (this.options.virtualization === true || this.options.rowVirtualization === true) {
                scrollContainer = $("#" + this.element[0].id + "_displayContainer")
            } else {
                scrollContainer = $("#" + this.element[0].id + "_scroll")
            }
            scrollContainer.scrollLeft(scroller.scrollLeft())
        },

        _scrollHeader: function () {
            var scroller = $("#" + this.element[0].id + "_hscroller"), headers = $("#" + this.element[0].id + "_headers").parent();
            headers.scrollLeft(scroller.scrollLeft())
        },

        _scrollFooter: function () {
            var scroller = $("#" + this.element[0].id + "_hscroller"), footers = $("#" + this.element[0].id + "_footer_container");
            footers.scrollLeft(scroller.scrollLeft())
        },

        _renderCaption: function () {
            var colgroup, caption;
            if (this.options.caption !== null) {
                if (this.container().find(".ui-iggrid-headercaption").length > 0) {
                    return
                }
                if (this.options.fixedHeaders === true && this.options.showHeader === true) {
                    colgroup = this.headersTable().children("colgroup").first();
                    if (colgroup.length === 0) {
                        caption = $("<caption></caption>").prependTo(this.headersTable())
                    } else {
                        caption = $("<caption></caption>").insertAfter(colgroup)
                    }
                    caption.text(this.options.caption).attr("id", this.element[0].id + "_caption").addClass(this.css.gridHeaderCaptionClass)
                } else {
                    $("<caption></caption>").appendTo($("<table></table>").prependTo(this.container()).css("width", "100%").addClass(this.css.captionTable)).text(this.options.caption).attr("id", this.element[0].id + "_caption").addClass(this.css.gridHeaderCaptionClass)
                }
            }
        },

        _createHeaderColumnMarkup: function (column, index) {
            var headerClass = this.css.headerClass, ar = this.options.accessibilityRendering, headerText = $("<span>" + column.headerText + "</span>").addClass(this.css.headerTextClass), markup = "<th></th>", headerCell;
            if (ar) {
                headerCell = $(markup).append(headerText).attr("id", this.element[0].id + "_" + column.key).attr("role", "rowheader").addClass(headerClass).data("columnIndex", index)
            } else {
                headerCell = $(markup).append(headerText).attr("id", this.element[0].id + "_" + column.key).addClass(headerClass).data("columnIndex", index)
            }
            return headerCell
        },

        _updateHeaderColumnIndexes: function () {
            var grid = this, cols = this.options.columns;
            if ((this.options.virtualization === true && this.options.virtualizationMode === "fixed") || this.options.columnVirtualization === true) {
                cols = cols.slice(0, this._maxVirtualColumnCount)
            }
            grid._initialHiddenCells = [];
            $(cols).each(function (i) {
                $("#" + grid.element[0].id + "_" + this.key).data("columnIndex", i)
            })
        },

        _renderHeaderColumns: function (header) {
            var grid = this, cols = this.options.columns;
            if ((this.options.virtualization === true && this.options.virtualizationMode === "fixed") || this.options.columnVirtualization === true) {
                cols = cols.slice(0, this._maxVirtualColumnCount)
            }
            grid._initialHiddenCells = [];
            $(cols).each(function (i) {
                var headerCell, key = this.key;
                if (key) {
                    headerCell = grid._createHeaderColumnMarkup(this, i);
                    header.append(headerCell);
                    grid._trigger(grid.events.headerCellRendered, null, {
                        owner: grid,
                        th: headerCell,
                        columnKey: this.key
                    });
                    $.each(grid._initialHiddenColumns, function () {
                        if (this.key === key) {
                            grid._initialHiddenCells.push(headerCell);
                            headerCell.css("display", "none");
                            return false
                        }
                    })
                }
            })
        },

        renderMultiColumnHeader: function (cols) {
            this.options.columns = cols;
            this.destroy(true);
            this._initialized = false;
            this.options.requiresDataBinding = true;
            this._renderHeaderCalled = false;
            this._create()
        },

        _renderHeader: function () {
            var header, id, headerDom, headerMarkup = "", scrollc = this.scrollContainer(), noCancel = true, headerParent = this.element[0], width, headerScrollDiv, existingHeader, o = this.options, v = o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true;
            this._renderHeaderCalled = true;
            if (this.options.showHeader) {
                noCancel = this._trigger(this.events.headerRendering, null, {
                    owner: this
                });
                if (noCancel) {
                    id = this.element[0].id;
                    headerMarkup = "<thead><tr></tr></thead>";
                    headerParent = this.container();
                    width = scrollc.css("width");
                    if (this.options.showHeader && this.options.fixedHeaders && this.options.height !== null) {
                        if (v === false) {
                            if (headerParent.length === 0) {
                                scrollc.removeClass(this.css.gridClasses).removeClass(this.css.baseClasses).css("width", "").wrap("<div id='" + id + "_container'></div>");
                                headerParent = $("#" + id + "_container").addClass(this.css.baseClasses).addClass(this.css.gridClasses).css("width", width);
                                this._isWrapped = true
                            }
                        } else {
                            width = this.element.parents(".ui-widget").css("width");
                            headerParent = $("#" + id + "_headers_v").css("width", width);
                            if (this.options.expandColWidth && !this.options.width) {
                                headerParent.css("width", (parseInt(width, 10) + this.options.expandColWidth) + "px")
                            }
                            if (o.width !== null) {
                                headerParent.css("width", o.width).css("max-width", o.width).css("overflow-x", "hidden")
                            }
                        }
                        headerParent = $("<table id='" + id + "_headers'></table>").prependTo(headerParent).addClass(this.css.gridHeaderTableClass).attr("cellpadding", 0).attr("cellspacing", 0).attr("border", "0");
                        if (v === false) {
                            headerScrollDiv = $("<div></div>").prependTo(headerParent.parent());
                            headerScrollDiv.css("overflow", "hidden").css("position", "relative").css("white-space", "nowrap");
                            headerScrollDiv.addClass("ui-widget-header ui-helper-reset");
                            headerScrollDiv.append(headerParent)
                        } else {
                            if (this.options.rowVirtualization === true) {
                                headerParent.addClass("ui-widget-header ui-helper-reset")
                            }
                        }
                        $("#" + this.element[0].id + "_hscroller").bind("scroll", $.proxy(this._scrollHeader, this));
                        this._renderColgroup(headerParent, true, false, this.options.autofitLastColumn)
                    } else {
                        if (this.options.fixedHeaders !== true && this.options.showHeader) {
                            headerParent = this.element
                        }
                    }
                    if (this.options.width === null && this.options.height === null) {
                        headerParent = this.element
                    }
                    if (this.options.width !== null && this.options.height === null) {
                        this._fixScrollY = 1;
                        scrollc.css("overflow-y", "hidden").css("overflow-x", "auto");
                        headerParent = this.element
                    }
                    if (this._isMultiColumnGrid === true) {
                        this._headerParent = headerParent;
                        this._fireInternalEvent("_renderingMultiColumnHeader");
                        if (this.options.virtualization === true || this.options.rowVirtualization === true) {
                            $("#" + id + "_headers_v").css("position", "relative").addClass("ui-widget-header ui-helper-reset").addClass(this.css.baseClasses);
                            headerParent.addClass(this.css.gridHeaderTableClass).attr("cellpadding", 0).attr("cellspacing", 0).attr("border", "0")
                        }
                    } else {
                        if (this.options.showHeader) {
                            if (this.options.headerTemplate === null || this.options.headerTemplate === undefined) {
                                if (this.options.virtualization === true || this.options.rowVirtualization === true) {
                                    $("#" + id + "_headers_v").css("position", "relative").addClass("ui-widget-header ui-helper-reset").addClass(this.css.baseClasses);
                                    headerParent.addClass(this.css.gridHeaderTableClass).attr("cellpadding", 0).attr("cellspacing", 0).attr("border", "0")
                                }
                                existingHeader = headerParent.find(">thead");
                                if (existingHeader.length === 0) {
                                    header = $(headerMarkup).appendTo(headerParent).children().first()
                                } else {
                                    existingHeader.empty();
                                    header = $("<tr></tr>").appendTo(existingHeader)
                                }
                                this._renderHeaderColumns(header)
                            } else {
                                headerDom = this.options.headerTemplate;
                                if (this.options.virtualization === true || this.options.rowVirtualization === true) {
                                    $(headerDom).children().each(function () {
                                        this.appendTo("#" + id + "_headers")
                                    });
                                    header = $("#" + id + "_headers").addClass(this.css.gridClasses)
                                } else {
                                    header = $(headerMarkup).appendTo(headerParent).append(headerDom)
                                }
                            }
                        }
                        this._headerParent = headerParent;
                        this._trigger(this.events.headerRendered, null, {
                            owner: this,
                            table: this.headersTable()
                        });
                        this._headerRenderCancel = false
                    }
                } else {
                    this._headerRenderCancel = true
                }
            }
            this._trigger("headerRenderedInternal", null, {
                owner: this,
                table: this.headersTable()
            })
        },

        _renderFooter: function () {
            var gridId = this.element[0].id, o = this.options, elemParent, footerId = gridId + "_footer_container", footerMarkup = '<tfoot class="' + this.css.gridFooterClass + '"></tfoot>', $footer = $("#" + footerId), $table, width, noCancel, tableGrid = this.element, $tableGridContainer;
            if (tableGrid.length === 0) {
                return
            }
            if ($footer.length === 0 && o.showFooter) {
                noCancel = this._trigger(this.events.footerRendering, null, {
                    owner: this
                });
                if (noCancel) {
                    if ((o.virtualization === true || o.rowVirtualization === true || o.columnVirtualization === true) && ((o.height !== null && o.height !== undefined) || (o.width !== null && o.width !== undefined))) {
                        $tableGridContainer = $("#" + this.element[0].id + "_displayContainer");
                        this.options.fixedFooters = true;
                        $tableGridContainer = $('<tr><td colspan="2" style="border-width: 0px;"></td></tr>').insertAfter($tableGridContainer.closest("tr"));
                        $footer = $("<div></div>").attr("id", footerId).css({
                            overflow: "hidden",
                            position: "relative"
                        }).addClass("ui-widget-footer").addClass(this.css.footerContainer).width(this.options.width).appendTo($tableGridContainer.find("td"));
                        $table = $("<table></table>").attr("cellpadding", 0).attr("cellspacing", 0).attr("border", 0).appendTo($footer).addClass(this.css.gridFooterTableClass).attr("id", gridId + "_footers");
                        $table.width(o.width);
                        this._renderColgroup($table, false, true, this.options.autofitLastColumn);
                        $(footerMarkup).appendTo($table);
                        if (this.options.showFooter && this.options.fixedFooters === true && this.options.height !== null) {
                            elemParent = this.element.parents(".ui-widget:first");
                            if (elemParent.length === 1 && elemParent[0].style) {
                                width = elemParent[0].style.width;
                                if (width) {
                                    $footer.css("width", width)
                                }
                            }
                        }
                        if (o.expandColWidth && !o.width) {
                            $footer.css("width", (parseInt($footer.width(), 10) + o.expandColWidth) + "px")
                        }
                        $("#" + this.element[0].id + "_hscroller").bind("scroll", $.proxy(this._scrollFooter, this))
                    } else {
                        if (o.fixedFooters === true && o.height !== null) {
                            if (o.width !== null) {
                                $tableGridContainer = $("#" + gridId + "_hscroller_container")
                            } else {
                                $tableGridContainer = $("#" + gridId + "_scroll")
                            }
                            if ($tableGridContainer.length === 0) {
                                $tableGridContainer = tableGrid
                            }
                            $footer = $("<div></div>").attr("id", footerId).css({
                                overflow: "hidden",
                                position: "relative",
                                "white-space": "nowrap"
                            }).addClass(this.css.footerContainer).addClass("ui-widget-footer").insertAfter($tableGridContainer);
                            $table = $("<table></table>").attr("cellpadding", 0).attr("cellspacing", 0).attr("border", 0).appendTo($footer).addClass(this.css.gridFooterTableClass).attr("id", gridId + "_footers");
                            this._renderColgroup($table, false, true, this.options.autofitLastColumn);
                            $(footerMarkup).appendTo($table);
                            if (o.virtualization !== true && o.rowVirtualization !== true && o.columnVirtualization !== true) {
                                $("#" + this.element[0].id + "_hscroller").bind("scroll", $.proxy(this._scrollFooter, this))
                            }
                        } else {
                            $tableGridContainer = tableGrid;
                            $footer = $(footerMarkup).attr("id", footerId).insertBefore($tableGridContainer.find("tbody:eq(0)"))
                        }
                    }
                    $footer.css("display", "none");
                    this._footer = $footer;
                    this._footerParent = $table;
                    this._trigger(this.events.footerRendered, null, {
                        owner: this,
                        table: this.footersTable()
                    })
                }
            }
            return $footer
        },

        _renderRecord: function (data, rowIndex) {
            var i, key = this.options.primaryKey, ar = this.options.accessibilityRendering, grid = this, dstr = "", cols = this.options.columns, noVisibleColumns;
            dstr += "<tr";
            if (rowIndex % 2 !== 0 && this.options.alternateRowStyles) {
                dstr += ' class="' + grid.css.recordAltClass + '"'
            }
            if (!_aNull(key)) {
                dstr += ' data-id="' + this._kval_from_key(key, data) + '"'
            } else {
                if (!_aNull(data.ig_pk)) {
                    dstr += ' data-id="' + data.ig_pk + '"'
                }
            }
            if (this.options.virtualization && this.options.virtualizationMode === "continuous") {
                dstr += ' data-row-idx="' + rowIndex + '"'
            }
            if (ar) {
                dstr += ' role="row">'
            } else {
                dstr += ">"
            }
            if (cols.length > 0) {
                noVisibleColumns = true;
                $(cols).each(function (colIndex) {
                    if (cols[colIndex].hidden) {
                        return
                    }
                    noVisibleColumns = false;
                    if (ar) {
                        dstr += '<td role="gridcell" aria-describedby="' + this.key + '"'
                    } else {
                        dstr += "<td"
                    }
                    if (data[this.key] === undefined) {
                        if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
                            dstr += " ";
                            dstr += grid._renderTemplatedCell(data, this)
                        } else {
                            dstr += ">";
                            dstr += grid._renderCell(data[colIndex], this)
                        }
                        dstr += "</td>"
                    } else {
                        if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
                            dstr += " ";
                            dstr += grid._renderTemplatedCell(data, this)
                        } else {
                            dstr += ">";
                            dstr += grid._renderCell(data[this.key], this)
                        }
                        dstr += "</td>"
                    }
                });
                if (noVisibleColumns) {
                    dstr += '<td role="gridcell"></td>'
                }
            } else {
                if ($.type(data) === "array") {
                    for (i = 0; i < data.length; i++) {
                        if (ar) {
                            dstr += '<td role="gridcell">' + data[i] + "</td>"
                        } else {
                            dstr += "<td>";
                            dstr += data[i];
                            dstr += "</td>"
                        }
                    }
                } else {
                    for (key in data) {
                        if (data.hasOwnProperty(key)) {
                            if (ar) {
                                dstr += '<td role="gridcell" aria-describedby="' + key + '">' + data[key] + "</td>"
                            } else {
                                dstr += "<td>";
                                dstr += data[key];
                                dstr += "</td>"
                            }
                        }
                    }
                }
            }
            dstr += "</tr>";
            return dstr
        },

        _renderRecordInArray: function (darr, tbody, data, rowIndex) {
            var i, key = this.options.primaryKey, ar = this.options.accessibilityRendering, grid = this, appendBehavior = false, cols = this.options.columns;
            if (darr === null) {
                darr = [];
                appendBehavior = true
            }
            darr.push("<tr");
            if (rowIndex % 2 !== 0 && this.options.alternateRowStyles) {
                darr.push(' class="' + grid.css.recordAltClass + '"')
            }
            if (!_aNull(key)) {
                darr.push(' data-id="' + this._kval_from_key(key, data) + '"')
            } else {
                if (!_aNull(data.ig_pk)) {
                    darr.push(' data-id="' + data.ig_pk + '"')
                }
            }
            if (ar) {
                darr.push(' role="row">')
            } else {
                darr.push(">")
            }
            if (cols.length > 0) {
                $(cols).each(function (colIndex) {
                    if (cols[colIndex].hidden) {
                        return
                    }
                    if (ar) {
                        darr.push('<td role="gridcell" aria-describedby="' + this.key + '"')
                    } else {
                        darr.push("<td")
                    }
                    if (data[this.key] === undefined) {
                        if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
                            darr.push(" ");
                            darr.push(grid._renderTemplatedCell(data, this))
                        } else {
                            darr.push(">");
                            darr.push(grid._renderCell(data[colIndex], this))
                        }
                        darr.push("</td>")
                    } else {
                        if (grid.options.rowTemplate && grid.options.rowTemplate.length > 0) {
                            darr.push(" ");
                            darr.push(grid._renderTemplatedCell(data, this))
                        } else {
                            darr.push(">");
                            darr.push(grid._renderCell(data[this.key], this))
                        }
                        darr.push("</td>")
                    }
                })
            } else {
                if ($.type(data) === "array") {
                    for (i = 0; i < data.length; i++) {
                        if (ar) {
                            darr.push('<td role="gridcell">' + data[i] + "</td>")
                        } else {
                            darr.push("<td>");
                            darr.push(data[i]);
                            darr.push("</td>")
                        }
                    }
                } else {
                    for (key in data) {
                        if (data.hasOwnProperty(key)) {
                            if (ar) {
                                darr.push('<td role="gridcell" aria-describedby="' + key + '">' + data[key] + "</td>")
                            } else {
                                darr.push("<td>");
                                darr.push(data[key]);
                                darr.push("</td>")
                            }
                        }
                    }
                }
            }
            darr.push("</tr>");
            if (appendBehavior) {
                tbody.append(darr.join(""))
            }
        },

        _fixDate: function (val, col) {
            var d, i;
            if (!col || !val) {
                return val
            }
            if (col.dataType === "date" && !val.getTime) {
                if ((i = val.indexOf ? val.indexOf("ate(") : -1) > 0) {
                    d = val.substring(i + 4);
                    i = d.indexOf(")");
                    if (i > 0) {
                        d = parseInt(d.substring(0, i), 10);
                        if (!isNaN(d)) {
                            val = new Date(d)
                        }
                    }
                }
            }
            return val
        },

        _renderCell: function (val, col) {
            var type = col.dataType, format = col.format, o = this.options, auto = o.autoFormat;
            val = this._fixDate(val, col);
            if (col.formatter) {
                return col.formatter(val)
            }
            if (!format && type === "bool" && o.renderCheckboxes && true) {
                format = "checkbox"
            }
            if (format === "checkbox" && type !== "bool") {
                format = null
            }
            type = (type === "date" || type === "number") ? type : "";
            if (format || ((auto === true || auto === "dateandnumber") && type) || (auto && auto === type)) {
                return $.ig.formatter(val, type, format, true, o.enableUTCDates)
            }
            return (val || val === 0 || val === false) ? val.toString() : "&nbsp;"
        },

        _renderTemplatedCell: function (val, col) {
            var v, d = $.extend(true, [], val), t;
            if (val[col.key] === undefined) {
                if (col.unbound === true) {
                    v = "&nbsp;"
                } else {
                    v = this._renderCell(val, col)
                }
            } else {
                v = this._renderCell(val[col.key], col)
            }
            if (this._tmap === null) {
                this._initializeTmap()
            }
            t = $.type(d[col.key]);
            if (t !== "object" && t !== "array") {
                d[col.key] = v
            }
            return $.ig.tmpl(this._tmap[col.key], d)
        },

        _initializeTmap: function () {
            var tmpl = this.options.rowTemplate, i, cols = this.options.columns, tds, templatePart;
            this._tmap = [];
            if (this.options.rowTemplate === null || this.options.rowTemplate === undefined || this.options.rowTemplate === "") {
                throw new Error($.ig.Grid.locale.templatingEnabledButNoTemplate)
            }
            tmpl = tmpl.replace("<tr>", "").replace("</tr>", "");
            tds = $.trim(tmpl).split("</td>");
            for (i = 0; i < cols.length; i++) {
                templatePart = $.trim(tds[i].replace("<td", ""));
                this._tmap[cols[i].key] = templatePart
            }
        },

        _scrollbarWidth: function () {
            if (!this._scrollbarWidthResolved) {
                var $div = $('<div id="' + this.element.attr("id") + '_tmp"></div>').css({
                    width: 50,
                    height: 50,
                    position: "absolute",
                    top: -500,
                    left: -500
                }).prependTo("body").append("<div></div>").find("div").css({
                        height: 100
                    }), w1, w2;
                if ($.browser.msie && $.browser.version.slice(0, 1) === "7") {
                    w1 = $div.innerWidth();
                    $div.parent().css("overflow-y", "scroll");
                    w2 = $div.innerWidth();
                    this._scrollbarWidthResolved = w1 - w2
                } else {
                    $div.parent().css({
                        overflow: "auto"
                    });
                    $div.css({
                        width: "100%"
                    });
                    this._scrollbarWidthResolved = 50 - $div.width()
                }
                $("#" + this.element.attr("id") + "_tmp").remove()
            }
            return this._scrollbarWidthResolved
        },

        _fireInternalEvent: function (name, args) {
            var i, f, featureName, feature;
            for (i = 0; i < this.options.features.length; i++) {
                f = this.options.features[i];
                if (f !== undefined && f !== null && f.name !== undefined) {
                    featureName = "igGrid" + f.name;
                    feature = this.element.data(featureName);
                    if (feature !== null && feature !== undefined && feature[name]) {
                        if (args) {
                            feature[name](args)
                        } else {
                            feature[name]()
                        }
                    }
                }
            }
        },

        _initFeature: function (featureObject, dataOptions, destroy) {
            if (!featureObject) {
                return
            }
            if (featureObject.name === undefined) {
                return
            }
            var widget = "igGrid" + featureObject.name;
            if ($.type($("#" + this.element[0].id)[widget]) !== "function") {
                throw new Error($.ig.Grid.locale.noSuchWidget + " " + widget)
            }
            if (this.element.data(widget)) {
                $("#" + this.element[0].id)[widget]("destroy")
            }
            $("#" + this.element[0].id)[widget](featureObject);
            this.element.data(widget)._injectGrid(this)
        },

        _initFeatureSettings: function (featureObject) {
            if (!featureObject) {
                return
            }
            if (featureObject.name === undefined) {
                return
            }
            var widget = "igGrid" + featureObject.name;
            if ($.type($("#" + this.element[0].id)[widget]) !== "function") {
                throw new Error($.ig.Grid.locale.noSuchWidget + " " + widget)
            }
            if (this.element.data(widget)) {
                this.element.data(widget)._injectGrid(this, true)
            }
        },

        _onFeaturesSoftDirty: function (e, args) {
            var i, feature;
            if (args.owner.options.type !== "remote") {
                return
            }
            for (i = 0; i < this.options.features.length; i++) {
                feature = $("#" + this.element[0].id).data("igGrid" + this.options.features[i].name);
                if (feature && feature !== args.owner && feature.options && feature.options.type === "local") {
                    if (feature._onUIDirty && $.type(feature._onUIDirty) === "function") {
                        feature._onUIDirty(e, args)
                    }
                }
            }
        },

        _kval_from_key: function (key, data) {
            var k, k_val = "", i;
            if (key.indexOf(",") !== -1) {
                k = key.split(",");
                for (i = 0; i < k.length; i++) {
                    k_val += data[k[i]];
                    if (i < k.length - 1) {
                        k_val += ","
                    }
                }
            } else {
                k_val = data[key]
            }
            return k_val
        },

        _rowId: function (rec, index) {
            var key = this.options.primaryKey;
            key = key ? this._kval_from_key(key, rec) : null;
            if (!key) {
                key = index;
                if (key !== 0) {
                    key = this.rows().length - 1
                }
            }
            return key
        },

        _inferOpType: function () {
            if (this.options.dataSourceUrl || this.dataSource.type() === "remoteUrl") {
                return "remote"
            }
            return "local"
        },

        _renderVirtualRecords: function () {
            this._trigger("virtualrendering");
            var mode = this.options.virtualizationMode;
            if (mode === undefined || mode === "") {
                mode = "continuous"
            }
            if (mode === "fixed" || this.options.columnVirtualization === true) {
                this._renderVirtualRecordsFixed()
            } else {
                if (mode === "continuous") {
                    this._renderVirtualRecordsContinuous()
                }
            }
            this._trigger("virtualrecordsrender", null, {
                owner: this,
                dom: this._virtualDom
            })
        },

        _getHScrollContainerInner: function () {
            var ret = $("#" + this.element[0].id + "_hscroller_inner");
            if (ret.length === 0 && this.options.virtualizationMode === "continuous") {
                ret = $("#" + this.element[0].id + "_horizontalScrollContainer div")
            }
            return ret
        },

        _getScrollContainerHeight: function () {
            return $("#" + this.element[0].id + "_scrollContainer").children(":first-child").height()
        },

        _getDisplayContainerHeight: function () {
            return $("#" + this.element[0].id + "_displayContainer").height()
        },

        _getDisplayContainerWidth: function () {
            return $("#" + this.element[0].id + "_displayContainer").width()
        },

        _setDisplayContainerWidth: function (width) {
            if (width === undefined) {
                return
            }
            $("#" + this.element[0].id + "_displayContainer").css("max-width", width);
            $("#" + this.element[0].id + "_displayContainer").width(width)
        },

        _getVHeadersWidth: function () {
            return $("#" + this.element[0].id + "_headers_v").width()
        },

        _setVHeadersWidth: function (width) {
            if (width === undefined) {
                return
            }
            $("#" + this.element[0].id + "_headers_v").width(width)
        },

        _setScrollContainerHeight: function (height) {
            if (height === undefined) {
                return
            }
            $("#" + this.element[0].id + "_scrollContainer").children(":first-child").height(height)
        },

        _setScrollContainerScrollTop: function (top) {
            if (top === undefined) {
                return
            }
            $("#" + this.element[0].id + "_scrollContainer").scrollTop(top)
        },

        _getScrollContainerScrollTop: function () {
            return $("#" + this.element[0].id + "_scrollContainer").scrollTop()
        },

        _setDisplayContainerScrollTop: function (top) {
            if (top === undefined) {
                return
            }
            $("#" + this.element[0].id + "_displayContainer").scrollTop(top)
        },

        _getDisplayContainerScrollTop: function () {
            return $("#" + this.element[0].id + "_displayContainer").scrollTop()
        },

        _setDisplayContainerScrollLeft: function (left) {
            if (left === undefined) {
                return
            }
            $("#" + this.element[0].id + "_displayContainer").scrollLeft(left)
        },

        _getDisplayContainerScrollLeft: function () {
            return $("#" + this.element[0].id + "_displayContainer").scrollLeft()
        },

        _calculateAvgRowHeight: function () {
            var rowHeightSum = $("#" + this.element[0].id + " > tbody").height();
            return rowHeightSum / this._virtualRowCount
        },

        _getDisplayContainerVisibleArea: function () {
            var scrollTop = this._getDisplayContainerScrollTop(), height = this._getDisplayContainerHeight();
            return {
                top: scrollTop,
                bottom: (scrollTop + height)
            }
        },

        virtualScrollTo: function (virtualScrollerY) {
            var tableId, firstRow, lastRow, scrollData, scrollResult;
            if (virtualScrollerY === this._oldScrollTop) {
                return
            }
            tableId = "#" + this.element[0].id;
            firstRow = $(tableId + " > tbody > tr:first");
            lastRow = $(tableId + " > tbody > tr:last");
            if (firstRow.length === 0 || lastRow.length === 0) {
                return
            }
            scrollData = {
                virtualScrollerY: this._getScrollContainerScrollTop(),
                deltaScroll: virtualScrollerY - this._oldScrollTop,
                firstRow: firstRow,
                lastRow: lastRow,
                firstRowDataIndex: parseInt(firstRow.attr("data-row-idx"), 0),
                lastRowDataIndex: parseInt(lastRow.attr("data-row-idx"), 0),
                visibleArea: this._getDisplayContainerVisibleArea()
            };
            scrollResult = {
                action: "SA_INITIAL"
            };
            if (!this._tryScroll(scrollData, scrollResult)) {
                this._rebuildVirtualRows(scrollData, scrollResult)
            }
            this._correctScrollPosition(this._getTotalRowsCount())
        },

        _getTotalRowsCount: function () {
            return this.dataSource.dataView().length
        },

        _tryScroll: function (scrollData, scrollResult) {
            var virtualScrollerY, deltaScroll, tableId, firstRow, lastRow, visibleArea, displayContainerHeight, displayContainerScrollTop;
            if (scrollResult === undefined) {
                throw new Error("scrollResult parameter should be provided")
            }
            virtualScrollerY = scrollData.virtualScrollerY;
            deltaScroll = scrollData.deltaScroll;
            tableId = "#" + this.element[0].id;
            firstRow = scrollData.firstRow;
            lastRow = scrollData.lastRow;
            visibleArea = scrollData.visibleArea;
            displayContainerHeight = this._getDisplayContainerHeight();
            displayContainerScrollTop = this._getDisplayContainerScrollTop();
            if (deltaScroll > 0) {
                if (lastRow[0].offsetTop + lastRow.outerHeight() >= displayContainerScrollTop + deltaScroll + displayContainerHeight || isNaN(scrollData.lastRowDataIndex) || scrollData.lastRowDataIndex === this.dataSource.dataView().length - 1) {
                    this._setDisplayContainerScrollTop(displayContainerScrollTop + deltaScroll);
                    scrollResult.action = "SA_SUCCESSFUL";
                    return true
                }
                if (deltaScroll <= (this._avgRowHeight * this._virtualRowCount)) {
                    scrollResult.action = "SA_NEED_NEXT_PAGE";
                    return false
                }
            }
            if (deltaScroll < 0) {
                if (firstRow[0].offsetTop <= displayContainerScrollTop + deltaScroll || scrollData.firstRowDataIndex === 0) {
                    this._setDisplayContainerScrollTop(displayContainerScrollTop + deltaScroll);
                    scrollResult.action = "SA_SUCCESSFUL";
                    return true
                }
                if (Math.abs(deltaScroll) <= (this._avgRowHeight * this._virtualRowCount)) {
                    scrollResult.action = "SA_NEED_PREV_PAGE";
                    return false
                }
            }
            scrollResult.action = "SA_NEED_SOME_PAGE";
            return false
        },

        _rebuildVirtualRows: function (scrollData, scrollResult) {
            var noCancel, virtualScrollerY, deltaScroll, tableId, firstRowDataIndex, lastRowDataIndex, visibleArea, tbody, expandedRowsHeight, trs, i, scrollerHeight, firstVisibleTR, firstVisibleTRRelativeOffset, overflow, startIndexToBeLoaded, newFirstVisibleRow, displayContainerScrollTop, maxScrollPos, avgRowHeight, tr, lastVisibleTR, lastVisibleTRIndex, firstVisibleTRIndex, lastVisibleTRRelativeOffset, endIndexToBeLoaded, dataRowIndexToBeFirst, hasOverflow;
            noCancel = this._trigger("rebuildingvirtualrows", null, {
                owner: this,
                scrollData: scrollData,
                scrollResult: scrollResult
            });
            if (noCancel === false) {
                return
            }
            virtualScrollerY = scrollData.virtualScrollerY;
            deltaScroll = scrollData.deltaScroll;
            tableId = "#" + this.element[0].id;
            firstRowDataIndex = scrollData.firstRowDataIndex;
            lastRowDataIndex = scrollData.lastRowDataIndex;
            visibleArea = scrollData.visibleArea;
            tbody = $(tableId + " > tbody");
            expandedRowsHeight = 0;
            trs = $(tableId + " > tbody > tr[data-container='true']");
            for (i = 0; i < trs.length; i++) {
                expandedRowsHeight += $(trs[i]).outerHeight()
            }
            if (expandedRowsHeight > 0) {
                scrollerHeight = this._getScrollContainerHeight();
                this._setScrollContainerHeight(scrollerHeight - expandedRowsHeight)
            }
            if (deltaScroll > 0 && scrollResult.action === "SA_NEED_NEXT_PAGE") {
                firstVisibleTR = this._getFirstVisibleTR(visibleArea);
                firstVisibleTRRelativeOffset = Math.abs(firstVisibleTR[0].offsetTop - visibleArea.top);
                overflow = 0;
                startIndexToBeLoaded = parseInt(firstVisibleTR.attr("data-row-idx"), 0);
                dataRowIndexToBeFirst = startIndexToBeLoaded;
                endIndexToBeLoaded = parseInt(this._virtualRowCount, 0) + startIndexToBeLoaded - 1;
                hasOverflow = false;
                if (endIndexToBeLoaded > this.dataSource.dataView().length - 1) {
                    endIndexToBeLoaded = this.dataSource.dataView().length - 1;
                    startIndexToBeLoaded = endIndexToBeLoaded - this._virtualRowCount + 1;
                    hasOverflow = true
                }
                tbody.empty();
                this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
                if (hasOverflow) {
                    tr = $(tableId + " > tbody > tr[data-row-idx='" + dataRowIndexToBeFirst + "']");
                    firstVisibleTRRelativeOffset = tr[0].offsetTop + firstVisibleTRRelativeOffset
                }
                this._setDisplayContainerScrollTop(firstVisibleTRRelativeOffset + deltaScroll)
            }
            if (deltaScroll < 0 && scrollResult.action === "SA_NEED_PREV_PAGE") {
                lastVisibleTR = this._getLastVisibleTR(visibleArea);
                lastVisibleTRIndex = parseInt(lastVisibleTR.attr("data-row-idx"), 0);
                firstVisibleTR = this._getFirstVisibleTR(visibleArea);
                firstVisibleTRIndex = parseInt(firstVisibleTR.attr("data-row-idx"), 0);
                lastVisibleTRRelativeOffset = visibleArea.bottom - lastVisibleTR[0].offsetTop;
                endIndexToBeLoaded = lastVisibleTRIndex;
                startIndexToBeLoaded = endIndexToBeLoaded - parseInt(this._virtualRowCount, 0) + 1;
                if (startIndexToBeLoaded < 0) {
                    startIndexToBeLoaded = 0;
                    endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1
                }
                tbody.empty();
                this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
                tableId = "#" + this.element[0].id;
                newFirstVisibleRow = $(tableId + ' > tbody > tr[data-row-idx="' + firstVisibleTRIndex + '"]');
                this._setDisplayContainerScrollTop(newFirstVisibleRow[0].offsetTop + deltaScroll)
            }
            if (scrollResult.action === "SA_NEED_SOME_PAGE") {
                startIndexToBeLoaded = Math.floor(virtualScrollerY / this._avgRowHeight);
                endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1;
                if (startIndexToBeLoaded < 0) {
                    startIndexToBeLoaded = 0;
                    endIndexToBeLoaded = startIndexToBeLoaded + this._virtualRowCount - 1
                }
                if (endIndexToBeLoaded >= this.dataSource.dataView().length - 1) {
                    endIndexToBeLoaded = this.dataSource.dataView().length - 1;
                    startIndexToBeLoaded = endIndexToBeLoaded - this._virtualRowCount + 1
                }
                tbody.empty();
                this._renderRecords(startIndexToBeLoaded, endIndexToBeLoaded);
                displayContainerScrollTop = 0;
                maxScrollPos = this._getScrollContainerHeight() - this._getDisplayContainerHeight();
                if (maxScrollPos - 3 <= virtualScrollerY && virtualScrollerY <= maxScrollPos + 3) {
                    displayContainerScrollTop = 10000
                }
                this._setDisplayContainerScrollTop(displayContainerScrollTop)
            }
            avgRowHeight = this._calculateAvgRowHeight();
            if (avgRowHeight > this._avgRowHeight) {
                this._avgRowHeight = avgRowHeight
            }
            this._startRowIndex = startIndexToBeLoaded;
            this._startColIndex = 0;
            this._trigger("virtualrecordsrender", null, {
                owner: this,
                tbody: tbody,
                dom: this._virtualDom
            })
        },

        _correctScrollPosition: function (totalRowCount) {
            var scrollTop, maxScrollPos, tableId, firstRow, firstRowDataIndex, lastRow, lastRowDataIndex, visibleArea, tbody, rowsLeft, displayContainerScrollTop;
            scrollTop = this._getScrollContainerScrollTop();
            maxScrollPos = this._getScrollContainerHeight() - this._getDisplayContainerHeight();
            tableId = "#" + this.element[0].id;
            firstRow = $(tableId + " > tbody > tr:first");
            firstRowDataIndex = parseInt(firstRow.attr("data-row-idx"), 0);
            lastRow = $(tableId + " > tbody > tr:last");
            lastRowDataIndex = parseInt(lastRow.attr("data-row-idx"), 0);
            visibleArea = this._getDisplayContainerVisibleArea();
            tbody = $(tableId + " > tbody");
            if (scrollTop === 0) {
                if (visibleArea.top > 0) {
                    this._scrollTo(visibleArea.top, true)
                } else {
                    if (firstRowDataIndex > 0) {
                        this._scrollTo(firstRowDataIndex * this._avgRowHeight, true)
                    }
                }
            } else {
                if (scrollTop >= maxScrollPos - 3 && scrollTop <= maxScrollPos + 3) {
                    if (visibleArea.bottom < tbody.height() && lastRowDataIndex === totalRowCount - 1) {
                        this._scrollTo(this._getScrollContainerScrollTop() - (tbody.height() - visibleArea.bottom), true)
                    } else {
                        if (lastRowDataIndex < totalRowCount - 1) {
                            rowsLeft = totalRowCount - lastRowDataIndex;
                            this._setScrollContainerHeight(this._getScrollContainerHeight() + (rowsLeft * this._avgRowHeight))
                        }
                    }
                }
            }
            displayContainerScrollTop = this._getDisplayContainerScrollTop();
            if (displayContainerScrollTop === 0 && firstRowDataIndex === 0 && this._getScrollContainerScrollTop() !== 0) {
                this._scrollTo(0, true)
            }
            if (displayContainerScrollTop === (tbody.height() - this._getDisplayContainerHeight()) && lastRowDataIndex === totalRowCount - 1) {
                this._scrollTo(this._getScrollContainerHeight(), true)
            }
        },

        _scrollTo: function (scrollTop, suppressScrollEvent) {
            if (suppressScrollEvent) {
                this._suppressScroll = true
            }
            this._setScrollContainerScrollTop(scrollTop)
        },

        _getFirstVisibleTR: function (visibleArea) {
            var tableId = "#" + this.element[0].id, firstVisibleTR;
            firstVisibleTR = $(tableId + " > tbody > tr").filter(function (index) {
                return this.offsetTop + $(this).height() > visibleArea.top
            }).first();
            return firstVisibleTR
        },

        _getLastVisibleTR: function (visibleArea) {
            var tableId = "#" + this.element[0].id, lastVisibleTR;
            lastVisibleTR = $(tableId + " > tbody > tr").filter(function (index) {
                return this.offsetTop < visibleArea.bottom
            }).last();
            return lastVisibleTR
        },

        _determineVirtualRowCount: function () {
            var div, rowNumber = 10, ds, rows = "", i, height, avgRowHeight, displayContainerHeight, rowsPerPage, result;
            ds = this.dataSource.dataView();
            if (rowNumber > ds.length) {
                rowNumber = ds.length
            }
            div = $("<div></div>)").appendTo("body").css({
                position: "absolute",
                top: -1800,
                left: -1800,
                visibility: "hidden"
            });
            for (i = 0; i < rowNumber; i++) {
                rows += this._renderRecord(ds[i], i)
            }
            div.html(rows);
            height = div.height();
            avgRowHeight = height / rowNumber;
            displayContainerHeight = this._getDisplayContainerHeight();
            rowsPerPage = displayContainerHeight / avgRowHeight;
            result = Math.ceil(rowsPerPage * 3);
            div.remove();
            return result
        },

        _renderVirtualRecordsContinuous: function () {
            this._totalRowCount = this.dataSource.dataView().length;
            if (this._totalRowCount === 0) {
                this._setScrollContainerHeight(0);
                this._virtualDom = [];
                return
            }
            this._virtualRowCount = this._determineVirtualRowCount();
            if (this._virtualRowCount > this._totalRowCount) {
                this._virtualRowCount = this._totalRowCount
            }
            this._scrollTo(0, true);
            this._renderRecords(this._virtualRowCount - 1);
            this._avgRowHeight = this._calculateAvgRowHeight();
            this._setScrollContainerHeight(this._totalRowCount * this._avgRowHeight)
        },

        _rerenderVirtualRecordsContinuous: function () {
            var tableId = "#" + this.element[0].id, firstRow, lastRow, firstRowDataIndex, lastRowDataIndex;
            firstRow = $(tableId + " > tbody > tr:first");
            lastRow = $(tableId + " > tbody > tr:last");
            firstRowDataIndex = parseInt(firstRow.attr("data-row-idx"), 0);
            lastRowDataIndex = parseInt(lastRow.attr("data-row-idx"), 0);
            this._renderRecords(firstRowDataIndex, lastRowDataIndex)
        },

        _buildVirtualDomForContinuousVirtualization: function () {
            var rows, cells, i, j;
            if (this.options.virtualization === true && this.options.virtualizationMode === "continuous") {
                this._virtualDom = [];
                rows = $("#" + this.element[0].id + " > tbody > tr");
                for (i = 0; i < rows.length; i++) {
                    this._virtualDom[i] = [];
                    cells = rows[i].children;
                    for (j = 0; j < cells.length; j++) {
                        this._virtualDom[i][j] = cells[j]
                    }
                }
            }
        },

        destroy: function (notToCallDestroy) {
            var prev = this.container().prev(), i, prepend = false;
            this._headerInitCallbacks = [];
            this._footerInitCallbacks = [];
            this.tmpDataSource = null;
            for (i = 0; i < this.options.features.length; i++) {
                $("#" + this.element[0].id)["igGrid" + this.options.features[i].name]("destroy")
            }
            if (prev.length === 0) {
                prev = this.container().parent();
                prepend = true
            }
            if (prepend) {
                prev.prepend(this.element)
            } else {
                this.element.insertAfter(prev)
            }
            this.element.unbind({
                click: this._cellClickHandler
            });
            this.element.find("thead").empty();
            this.element.find("colgroup").empty();
            if (notToCallDestroy !== true) {
                $.Widget.prototype.destroy.call(this)
            }
            if (this._isWrapped && this.container().parent().data("igGrid")) {
                this.container().parent().removeData("igGrid")
            }
            this.container().remove();
            this.element.find("tbody").empty().removeClass(this.css.gridTableBodyClass).removeClass(this.css.gridRecordClass);
            this.element.removeClass(this.css.gridTableClass);
            this.element.unbind("iggriduisoftdirty", this._uiSoftDirtyHandler);
            if (this._resId) {
                clearInterval(this._resId)
            }
            if (this._isWrapped) {
                this.element.remove()
            }
            return this
        }
    });

    $.extend($.ui.igGrid, {
        version: "12.2.20122.1021"
    });

}(jQuery));