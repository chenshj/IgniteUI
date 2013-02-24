﻿/*
 * Infragistics.Web.ClientUI data source localization resources 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 */
$.ig = $.ig || {};
if (!$.ig.DataSourceLocale) {
    $.ig.DataSourceLocale = {};
    $.extend($.ig.DataSourceLocale, {
        locale: {
            invalidDataSource: "The supplied data source is invalid. It happens to be a scalar.",
            unknownDataSource: "Cannot determine the data source type. Please specify if it is JSON or XML data.",
            errorParsingArrays: "There was an error parsing the array data and applying the defined data schema: ",
            errorParsingJson: "There was an error parsing the JSON data and applying the defined data schema: ",
            errorParsingXml: "There was an error parsing the XML data and applying the defined data schema: ",
            errorParsingHtmlTable: "There was an error extracting the data from the HTML Table and applying the schema : ",
            errorExpectedTbodyParameter: "Expected a tbody or a table as a parameter.",
            errorTableWithIdNotFound: "The HTML Table with the following ID was not found: ",
            errorParsingHtmlTableNoSchema: "There was an error parsing the Table DOM: ",
            errorParsingJsonNoSchema: "There was an error parsing/evaluating the JSON string: ",
            errorParsingXmlNoSchema: "There was an error parsing the XML string: ",
            errorXmlSourceWithoutSchema: "The supplied data source is an xml document, but there is no defined data schema ($.IgDataSchema) ",
            errorUnrecognizedFilterCondition: " The filter condition that was passed was not recognized: ",
            errorRemoteRequest: "The remote request to fetch data has failed: ",
            errorSchemaMismatch: "The input data doesn't match the schema, the following field couldn't be mapped: ",
            errorSchemaFieldCountMismatch: "The input data doesn't match the schema in terms of number of fields. ",
            errorUnrecognizedResponseType: "The response type was either not set correctly, or it was not possible to detect it automatically. Please set settings.responseDataType and/or settings.responseContentType.",
            hierarchicalTablesNotSupported: "Tables are not supported for HierarchicalSchema",
            cannotBuildTemplate: "The jQuery template could not be built. There are no records present in the data source, and no columns defined.",
            unrecognizedCondition: "Unrecognized filtering condition in the following expression: ",
            fieldMismatch: "The following expression contains an invalid field or filtering condition: ",
            noSortingFields: "There are no fields specified. You need to specify at least one field to sort by, when calling sort().",
            filteringNoSchema: "There is no schema / fields specified. You need to specify a schema with field definitions and types to be able to filter the data source."
        }
    });
    /*
     * Infragistics.Web.ClientUI Data Binding Plugin 12.2.20122.1021
     *
     * Copyright (c) 2011-2012 Infragistics Inc.
     *
     * igDataSource provides the following functionality:
     * - read and parse local XML , JSON , and HTML data
     * - normalize / transform the above data according to a schema
     * - data type conversion (date, string, number, etc.)
     * - define relationships between two and more flat data sources - with primary/foreign keys, etc
     * - build URL params for requests that get remote data
     * - in case of scenarios such as paging, understand and prase the response - expect that it's in a predefined format that can be additionall configured by the developer
     * - get data from WCF services
     * - ability to combine local with remote functionality
     * - queueing AJAX requests
     *	paging,filtering (searching), and sorting functionality that are control-independent are also implemented here
     *	the idea of this code is to serve as a data-source abstraction layer (client-side data source control)
     *	that may well be used by all other client-side controls , such as dropdown, tree, menu, etc.
     *
     * http://www.infragistics.com/
     *
     * Depends on:
     *  jquery-1.4.4.js
     *	ig.util.js
     *
     */
}
( function ($) {
    $.ig = $.ig || {};
    $.ig.DataSource = $.ig.DataSource || Class.extend({
        settings: {
            id: "ds",
            outputResultsName: null,
            callback: null,
            callee: null,
            data: [],
            dataSource: null,
            dataBinding: null,
            dataBound: null,
            type: "unknown",
            schema: null,
            primaryKey: null,
            responseTotalRecCountKey: null,
            responseDataKey: null,
            responseDataType: null,
            responseContentType: null,
            localSchemaTransform: true,
            urlParamsEncoding: null,
            urlParamsEncoded: null,
            paging: {
                enabled: false,
                type: "remote",
                pageSize: 5,
                pageSizeUrlKey: null,
                pageIndexUrlKey: null,
                pageIndex: 0,
                appendPage: false
            },
            filtering: {
                type: "remote",
                caseSensitive: false,
                applyToAllData: true,
                customFunc: null,
                filterExprUrlKey: null,
                filterLogicUrlKey: "filterLogic",
                expressions: [],
                exprString: ""
            },
            sorting: {
                defaultDirection: "none",
                defaultFields: [],
                applyToAllData: true,
                customFunc: null,
                compareFunc: null,
                customConvertFunc: null,
                type: "remote",
                caseSensitive: false,
                sortUrlKey: null,
                sortUrlAscValueKey: null,
                sortUrlDescValueKey: null,
                expressions: [],
                exprString: ""
            },
            summaries: {
                type: "remote",
                summaryExprUrlKey: "summaries",
                summariesResponseKey: "summaries",
                summaryExecution: "afterfilteringandpaging",
                columnSettings: []
            },
            fields: [],
            serializeTransactionLog: true,
            aggregateTransactions: false,
            autoCommit: false,
            updateUrl: null,
            rowAdded: null,
            rowUpdated: null,
            rowInserted: null,
            rowDeleted: null
        },
        init: function (options) {
            var tempSource, tempCallee, arrayAlready = false, metadata;
            if (options) {
                tempSource = options.dataSource;
                if (tempSource && ($.type(tempSource) === "array" || $.type(tempSource) === "object")) {
                    if (($.type(tempSource) === "object") && options.responseDataKey && options.type !== "json") {
                        metadata = tempSource.Metadata;
                        options.dataSource = $.ig.findPath(tempSource, options.responseDataKey);
                        if (metadata && options.dataSource.Metadata === undefined) {
                            options.dataSource.Metadata = metadata
                        }
                        this.settings.type = "array";
                        arrayAlready = true
                    } else {
                        options.dataSource = null
                    }
                    if (options.callee) {
                        tempCallee = options.callee;
                        options.callee = null
                    }
                }
                this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
                if (!arrayAlready && tempSource && ($.type(tempSource) === "array" || $.type(tempSource) === "object")) {
                    options.dataSource = tempSource;
                    this.settings.dataSource = tempSource;
                    if (tempCallee) {
                        this.settings.callee = tempCallee;
                        tempCallee = null
                    }
                }
            }
            this.settings.paging.pageIndex = 0;
            this._isBound = false;
            this._url = null;
            this._dsCallback = null;
            this._data = [];
            this._dataView = [];
            if (this.settings.type === "unknown") {
                this._runtimeType = this.analyzeDataSource()
            } else {
                this._runtimeType = this.settings.type
            }
            this._parser = new $.ig.TypeParser();
            this._schema = null;
            this._isSortingReq = false;
            this._isFilteringReq = false;
            this._isPagingReq = false;
            this._isSummariesReq = false;
            this._dataSummaries = [];
            this._recCount = 0;
            this._hasCount = false;
            this._initSchema();
            this._filteredDataView = [];
            this._transactionLog = [];
            this._accumulatedTransactionLog = [];
            return this
        },
        _initSchema: function () {
            if (this.settings.schema) {
                if (this.settings.schema instanceof $.ig.DataSchema) {
                    this._schema = this.settings.schema
                } else {
                    if (this.settings.type !== "unknown") {
                        this._schema = new $.ig.DataSchema(this.settings.type, this.settings.schema)
                    } else {
                        this._schema = new $.ig.DataSchema(this._runtimeType, this.settings.schema)
                    }
                    this._schema._pk = this.settings.primaryKey
                }
            }
        },
        fields: function (fields) {
            if (fields === undefined || fields === null) {
                return this.settings.fields
            }
            this.settings.fields = fields;
            return this
        },
        analyzeDataSource: function () {
            var ds = this.dataSource(), $ds, dc;
            if (ds === undefined || ds === null) {
                return "empty"
            }
            if ($.type(ds) === "function") {
                return "function"
            }
            if ($.type(ds) === "array") {
                return "array"
            }
            if ($.type(ds) === "number" || $.type(ds) === "boolean" || $.type(ds) === "date") {
                return "invalid"
            }
            if ($.type(ds) === "string") {
                ds = $.trim(ds);
                if (ds.startsWith("/")) {
                    return "remoteUrl"
                }
                $ds = $(ds);
                if ($("#" + this.settings.id).length > 0 && ds.toLowerCase().startsWith("<table")) {
                    return "htmlTableString"
                }
                if (ds.toLowerCase().startsWith("<table")) {
                    dc = "<div id='" + this.settings.id + "' style='display:none;visibility:hidden;'>" + ds + "</div>";
                    $(dc).appendTo($("body"));
                    return "htmlTableString"
                }
                if (!ds.startsWith("[") && !ds.startsWith("{") && !ds.startsWith("<")) {
                    if (!ds.startsWith("http://") && $("#" + ds).length > 0 && $("#" + ds)[0].nodeName.toLowerCase() === "table") {
                        return "htmlTableId"
                    }
                    this._url = ds;
                    return "remoteUrl"
                }
                return "unknown"
            }
            if (ds.nodeName && ds.nodeName.toLowerCase() === "table") {
                return "htmlTableDom"
            }
            if (ds.nodeName && (ds.nodeName.toLowerCase() === "ul" || ds.nodeName.toLowerCase() === "ol")) {
                return "htmlListDom"
            }
            return "unknown"
        },
        dataView: function () {
            return this._dataView
        },
        data: function () {
            return this._data
        },
        transformedData: function (transformedExecution) {
            switch (transformedExecution) {
                case"priortofilteringandpaging":
                    this._transformedData = this._data;
                    break;
                case"afterfilteringbeforepaging":
                    break;
                case"afterfilteringandpaging":
                    this._transformedData = this.dataView();
                    break;
                default:
                    this._transformedData = this._dataView;
                    break
            }
            return this._transformedData
        },
        dataSummaries: function () {
            var s = this.settings.summaries, type = s.type;
            if (type === "local") {
                this._dataSummaries = this.transformedData(s.summaryExecution)
            }
            return this._dataSummaries
        },
        schema: function (s, t) {
            if (s === undefined || s === null) {
                return this._schema
            }
            if (s instanceof $.ig.DataSchema) {
                this._schema = s
            } else {
                if (t === null || t === undefined) {
                    this._schema = new $.ig.DataSchema(s.type, s)
                } else {
                    this._schema = new $.ig.DataSchema(t, s)
                }
                this._schema._pk = this.settings.primaryKey
            }
            return this
        },
        pagingSettings: function (p) {
            if (p === undefined || p === null) {
                return this.settings.paging
            }
            this.settings.paging = p;
            return this
        },
        filterSettings: function (f) {
            if (f === undefined || f === null) {
                return this.settings.filtering
            }
            this.settings.filtering = f;
            return this
        },
        sortSettings: function (s) {
            if (s === undefined || s === null) {
                return this.settings.sorting
            }
            this.settings.sorting = s;
            return this
        },
        summariesSettings: function (s) {
            if (s === undefined || s === null) {
                return this.settings.summaries
            }
            this.settings.summaries = s;
            return this
        },
        dataSource: function (ds) {
            if (ds === undefined || ds === null) {
                return this.settings.dataSource
            }
            this.settings.dataSource = ds;
            this.analyzeDataSource();
            return this
        },
        type: function (t) {
            if (t === undefined || t === null) {
                return this._runtimeType
            }
            this.settings.type = t;
            return this
        },
        findRecordByKey: function (key, ds) {
            var i;
            if (!ds) {
                for (i = 0; i < this._data.length; i++) {
                    if (this._data[i][this.settings.primaryKey] === key) {
                        return this._data[i]
                    }
                }
            } else {
                for (i = 0; i < ds.length; i++) {
                    if (ds[i][this.settings.primaryKey] === key) {
                        return ds[i]
                    }
                }
            }
            return null
        },
        removeRecordByKey: function (key, origDs) {
            var i, len, data, count = 0, all = [this._data, this._dataView, this._filteredData, origDs], prime = this.settings.primaryKey;
            while (count < 4) {
                data = all[count++];
                len = data ? data.length : 0;
                for (i = 0; i < len; i++) {
                    if (data[i] && data[i][prime] === key) {
                        $.ig.removeFromArray(data, i);
                        break
                    }
                }
                if (data === all[count]) {
                    count++
                }
            }
        },
        removeRecordByIndex: function (index, origDs) {
            var i, len, record, data = this._data, view = this._dataView, filter = this._filteredData;
            if (!data || isNaN(index) || index < 0 || index >= data.length) {
                return
            }
            record = data[index];
            $.ig.removeFromArray(data, index);
            if (origDs) {
                $.ig.removeFromArray(origDs, index)
            }
            data = (data === view) ? filter : view;
            while (record) {
                len = data ? data.length : 0;
                for (i = 0; i < len; i++) {
                    if (data[i] === record) {
                        $.ig.removeFromArray(data, i);
                        break
                    }
                }
                if (data === filter) {
                    return
                }
                data = filter
            }
        },
        setCellValue: function (rowId, colId, val, autoCommit) {
            var t = this._createCellTransaction(rowId, colId, val);
            this._addTransaction(t);
            if (autoCommit === true) {
                this.commit(rowId)
            }
            return t
        },
        updateRow: function (rowId, rowObject, autoCommit) {
            var t = this._createRowTransaction(rowId, rowObject), oldRow = (this.settings.primaryKey === null) ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId), rowIndex = (this.settings.primaryKey === null) ? rowId : this._data.indexOf(oldRow);
            this._addTransaction(t);
            if (autoCommit === true) {
                this.commit(rowId)
            }
            if ($.type(this.settings.rowUpdated) === "function") {
                if (this.settings.callee) {
                    this.settings.rowUpdated.apply(this.settings.callee, [
                        {
                            rowIndex: rowIndex,
                            newRow: rowObject,
                            oldRow: oldRow
                        },
                        this
                    ])
                } else {
                    this.settings.rowUpdated({
                        rowIndex: rowIndex,
                        newRow: rowObject,
                        oldRow: oldRow
                    }, this)
                }
            }
            return t
        },
        addRow: function (rowId, rowObject, autoCommit) {
            var t = this._createNewRowTransaction(rowId, rowObject);
            this._addTransaction(t);
            if (autoCommit === true) {
                this.commit(rowId)
            }
            if ($.type(this.settings.rowAdded) === "function") {
                if (this.settings.callee) {
                    this.settings.rowAdded.apply(this.settings.callee, [
                        {
                            rowId: rowId,
                            row: rowObject
                        },
                        this
                    ])
                } else {
                    this.settings.rowAdded({
                        rowId: rowId,
                        row: rowObject
                    }, this)
                }
            }
            return t
        },
        insertRow: function (rowId, rowObject, rowIndex, autoCommit) {
            var t = this._createInsertRowTransaction(rowId, rowObject, rowIndex);
            this._addTransaction(t);
            if (autoCommit === true) {
                this.commit(rowId)
            }
            if ($.type(this.settings.rowInserted) === "function") {
                if (this.settings.callee) {
                    this.settings.rowInserted.apply(this.settings.callee, [
                        {
                            rowId: rowId,
                            row: rowObject,
                            rowIndex: rowIndex
                        },
                        this
                    ])
                } else {
                    this.settings.rowInserted({
                        rowId: rowId,
                        row: rowObject,
                        rowIndex: rowIndex
                    }, this)
                }
            }
            return t
        },
        deleteRow: function (rowId, autoCommit) {
            var t = this._createDeleteRowTransaction(rowId), row = (this.settings.primaryKey === null) ? this._data[parseInt(rowId, 10)] : this.findRecordByKey(rowId), rowIndex = (this.settings.primaryKey === null) ? rowId : this._data.indexOf(row), isNewRow = false, i, j;
            for (i = 0; this.settings.aggregateTransactions && i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].type === "newrow" && this._transactionLog[i].rowId === rowId) {
                    isNewRow = true;
                    rowId = this._transactionLog[i].rowId;
                    this._removeTransactionByTransactionId(this._transactionLog[i].tid);
                    for (j = 0; j < this._accumulatedTransactionLog.length; j++) {
                        if (this._accumulatedTransactionLog[j].rowId === rowId) {
                            $.ig.removeFromArray(this._accumulatedTransactionLog, j)
                        }
                    }
                    break
                }
            }
            if (!(this.settings.aggregateTransactions && isNewRow)) {
                this._addTransaction(t);
                if (autoCommit === true) {
                    this.commit(rowId)
                }
                if ($.type(this.settings.rowDeleted) === "function") {
                    if (this.settings.callee) {
                        this.settings.rowDeleted.apply(this.settings.callee, [
                            {
                                rowId: rowId,
                                row: row,
                                rowIndex: rowIndex
                            },
                            this
                        ])
                    } else {
                        this.settings.rowDeleted({
                            rowId: rowId,
                            row: row,
                            rowIndex: rowIndex
                        }, this)
                    }
                }
            }
        },
        addNode: function (data) {
            var t = this._createAddNodeTransaction(data);
            this._addTransaction(t)
        },
        removeNode: function (data) {
            var t = this._createRemoveNodeTransaction(data);
            this._addTransaction(t)
        },
        getDetachedRecord: function (t) {
            var o = $.type(this._data[0]) === "array" ? [] : {}, i, originalRec;
            if (this.settings.primaryKey === null) {
                originalRec = this._data[parseInt(t.rowId, 10)]
            } else {
                originalRec = this.findRecordByKey(t.rowId)
            }
            if (this._data[0] !== "array") {
                for (i in originalRec) {
                    if (originalRec.hasOwnProperty(i)) {
                        o[i] = originalRec[i]
                    }
                }
            } else {
                for (i = 0; i < originalRec.length; i++) {
                    o[i] = originalRec[i]
                }
            }
            if (t.type === "cell") {
                o[t.col] = t.value;
                return o
            }
            if (o !== "array") {
                for (i in t.row) {
                    if (t.row.hasOwnProperty(i)) {
                        o[i] = t.row[i]
                    }
                }
            } else {
                for (i = 0; i < t.row.length; i++) {
                    o[i] = t.row[i]
                }
            }
            return o
        },
        commit: function (id) {
            if (id !== null && id !== undefined) {
                this._commitTransactionsByRowId(id)
            } else {
                this._transactionLog.reverse();
                while (this._transactionLog.length > 0) {
                    this._commitTransaction(this._transactionLog.pop())
                }
            }
        },
        rollback: function (id) {
            var i;
            if (id !== null && id !== undefined) {
                this._rollbackTransactionsByRowId(id)
            } else {
                i = this._transactionLog.length;
                while (i-- > 0) {
                    this._rollbackTransaction(this._transactionLog[i])
                }
            }
        },
        pendingTransactions: function () {
            return this._transactionLog
        },
        allTransactions: function () {
            return this._accumulatedTransactionLog
        },
        _createCellTransaction: function (rowId, colId, val) {
            return {
                type: "cell",
                rowId: rowId,
                tid: this._generateTransactionId(),
                col: colId,
                value: val
            }
        },
        _createRowTransaction: function (rowId, rowObject) {
            return {
                type: "row",
                tid: this._generateTransactionId(),
                row: rowObject,
                rowId: rowId
            }
        },
        _createNewRowTransaction: function (rowId, rowObject) {
            return {
                type: "newrow",
                tid: this._generateTransactionId(),
                row: rowObject,
                rowId: rowId
            }
        },
        _createInsertRowTransaction: function (rowId, rowObject, rowIndex) {
            return {
                type: "insertrow",
                tid: this._generateTransactionId(),
                row: rowObject,
                rowId: rowId,
                rowIndex: rowIndex
            }
        },
        _createDeleteRowTransaction: function (rowId) {
            return {
                type: "deleterow",
                tid: this._generateTransactionId(),
                rowId: rowId
            }
        },
        _createAddNodeTransaction: function (data) {
            return {
                type: "addnode",
                tid: this._generateTransactionId(),
                tdata: data
            }
        },
        _createRemoveNodeTransaction: function (data) {
            return {
                type: "removenode",
                tid: this._generateTransactionId(),
                tdata: data
            }
        },
        _addTransaction: function (t) {
            var exists = false, i = 0, prop, globalt, j, dirty = true, k;
            if (t.type === "cell") {
                for (i = 0; i < this._transactionLog.length; i++) {
                    if (this._transactionLog[i].rowId === t.rowId && this._transactionLog[i].col === t.col) {
                        exists = true;
                        if (this.settings.autoCommit === false && this.settings.aggregateTransactions === true) {
                            for (j = 0; j < this.dataView().length; j++) {
                                if (this.dataView()[j][this.settings.primaryKey] === t.rowId && this.dataView()[j][t.col] === t.value) {
                                    for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
                                        if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
                                            $.ig.removeFromArray(this._accumulatedTransactionLog, k)
                                        }
                                    }
                                    this._removeTransactionByTransactionId(this._transactionLog[i].tid);
                                    dirty = false
                                }
                            }
                        }
                        if (dirty) {
                            this._transactionLog[i].value = t.value;
                            this._syncGlobalTransaction(this._transactionLog[i])
                        }
                    }
                }
                for (j = 0; j < this._transactionLog.length; j++) {
                    if (this._transactionLog[j].type === "newrow" && this._transactionLog[j].rowId === t.rowId) {
                        if (t.type === "row") {
                            this._transactionLog[j].value = t.value
                        } else {
                            this._transactionLog[j].row[t.col] = t.value
                        }
                        this._syncGlobalTransaction(this._transactionLog[j]);
                        return
                    }
                }
            } else {
                if (t.type === "row") {
                    for (i = 0; i < this._transactionLog.length; i++) {
                        if (this._transactionLog[i].rowId === t.rowId) {
                            exists = true;
                            if (this.settings.autoCommit === false && this.settings.aggregateTransactions === true) {
                                dirty = false;
                                for (j = 0; j < this.dataView().length; j++) {
                                    if (this.dataView()[j][this.settings.primaryKey] === t.rowId) {
                                        for (prop in t.row) {
                                            if (t.row.hasOwnProperty(prop) && t.row[prop] !== this.dataView()[j][prop]) {
                                                dirty = true;
                                                break
                                            }
                                        }
                                        break
                                    }
                                }
                                for (j = 0, !dirty; j < this._transactionLog.length; j++) {
                                    if (this._transactionLog[j].type === "newrow" && this._transactionLog[j].rowId === t.rowId) {
                                        this._transactionLog[j].row = t.row;
                                        this._syncGlobalTransaction(this._transactionLog[j]);
                                        return
                                    }
                                }
                            }
                            if (dirty) {
                                this._transactionLog[i].row = t.row;
                                this._syncGlobalTransaction(this._transactionLog[i])
                            } else {
                                for (k = 0; k < this._accumulatedTransactionLog.length; k++) {
                                    if (this._accumulatedTransactionLog[k].rowId === this._transactionLog[i].rowId) {
                                        $.ig.removeFromArray(this._accumulatedTransactionLog, k)
                                    }
                                }
                                this._removeTransactionByTransactionId(this._transactionLog[i].tid)
                            }
                        }
                    }
                }
            }
            if (!exists) {
                this._transactionLog.push(t);
                globalt = $.extend(true, {}, t);
                if (globalt.type === "cell" && $.type(globalt.value) === "date") {
                    globalt.value = "/Date(" + globalt.value.getTime() + ")/"
                } else {
                    if (globalt.type === "row" || globalt.type === "insertrow" || globalt.type === "newrow") {
                        for (prop in globalt.row) {
                            if (globalt.row.hasOwnProperty(prop) && $.type(globalt.row[prop]) === "date") {
                                globalt.row[prop] = "/Date(" + globalt.row[prop].getTime() + ")/"
                            }
                        }
                    }
                }
                this._accumulatedTransactionLog.push(globalt)
            }
        },
        _syncGlobalTransaction: function (t) {
            var i, prop;
            if (!t) {
                return
            }
            if (t.type === "cell") {
                for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
                    if (this._accumulatedTransactionLog[i].rowId === t.rowId) {
                        if ($.type(t.value) === "date") {
                            this._accumulatedTransactionLog[i].value = "/Date(" + t.value.getTime() + ")/"
                        } else {
                            this._accumulatedTransactionLog[i].value = t.value
                        }
                        break
                    }
                }
            } else {
                if (t.type === "row" || t.type === "insertrow" || t.type === "newrow") {
                    for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
                        if (this._accumulatedTransactionLog[i].rowId === t.rowId) {
                            for (prop in t.row) {
                                if (t.row.hasOwnProperty(prop)) {
                                    if ($.type(t.row[prop]) === "date") {
                                        this._accumulatedTransactionLog[i].row[prop] = "/Date(" + t.row[prop].getTime() + ")/"
                                    } else {
                                        this._accumulatedTransactionLog[i].row[prop] = t.row[prop]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        _removeTransactionByTransactionId: function (tid, removeFromAll) {
            var i;
            for (i = 0; i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].tid === tid) {
                    $.ig.removeFromArray(this._transactionLog, i);
                    break
                }
            }
            if (removeFromAll === true) {
                for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
                    if (this._accumulatedTransactionLog[i].tid === tid) {
                        $.ig.removeFromArray(this._accumulatedTransactionLog, i);
                        break
                    }
                }
            }
        },
        _removeTransactionsByRecordId: function (id) {
            var i;
            for (i = 0; i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].rowId === id) {
                    $.ig.removeFromArray(this._transactionLog, i);
                    break
                }
            }
        },
        _addRow: function (row, index, origDs) {
            var data, key, count = 0, all = [this._data, this._dataView, this._filteredData, origDs], rec = origDs ? origDs[0] : null;
            if (rec) {
                for (key in rec) {
                    if (rec.hasOwnProperty(key) && !row.hasOwnProperty(key)) {
                        row[key] = null
                    }
                }
            }
            while (count < 4) {
                data = all[count++];
                if (data) {
                    if (index >= 0 && index < data.length) {
                        data.splice(index, 0, row)
                    } else {
                        data.push(row)
                    }
                }
                if (data === all[count]) {
                    count++
                }
            }
        },
        _commitTransaction: function (t) {
            var i, prop, rec, origRec, origDs = this.settings.localSchemaTransform ? this._origDs : null;
            if (origDs === this._data) {
                origDs = null
            }
            if (this.settings.primaryKey === null) {
                rec = this._data[parseInt(t.rowId, 10)];
                if (origDs) {
                    origRec = origDs[parseInt(t.rowId, 10)]
                }
            } else {
                rec = this.findRecordByKey(t.rowId);
                if (origDs) {
                    origRec = this.findRecordByKey(t.rowId, origDs)
                }
            }
            if (t.type === "cell") {
                rec[t.col] = t.value;
                if (origRec) {
                    origRec[t.col] = t.value
                }
            } else {
                if (t.type === "row") {
                    if ($.type(t.row) === "array") {
                        for (i = 0; i < t.row.length; i++) {
                            rec[i] = t.row[i];
                            if (origRec) {
                                origRec[i] = t.row[i]
                            }
                        }
                    } else {
                        for (prop in t.row) {
                            if (t.row.hasOwnProperty(prop)) {
                                rec[prop] = t.row[prop];
                                if (origRec) {
                                    origRec[prop] = t.row[prop]
                                }
                            }
                        }
                    }
                } else {
                    if (t.type === "deleterow") {
                        if (this.settings.primaryKey === null) {
                            this.removeRecordByIndex(parseInt(t.rowId, 10), origDs)
                        } else {
                            this.removeRecordByKey(t.rowId, origDs)
                        }
                    } else {
                        if (t.type === "newrow") {
                            this._addRow(t.row, -1, origDs)
                        } else {
                            if (t.type === "insertrow") {
                                this._addRow(t.row, t.rowIndex, origDs)
                            }
                        }
                    }
                }
            }
            this._removeTransactionByTransactionId(t.tid)
        },
        _rollbackTransaction: function (t) {
            this._removeTransactionByTransactionId(t.tid, true)
        },
        _commitTransactionsByRowId: function (id) {
            var i;
            for (i = 0; i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].rowId === id) {
                    this._commitTransaction(this._transactionLog[i])
                }
            }
        },
        _rollbackTransactionsByRowId: function (id) {
            var i;
            for (i = 0; i < this._transactionLog.length; i++) {
                if (this._transactionLog[i].rowId === id) {
                    this._rollbackTransaction(this._transactionLog[i])
                }
            }
        },
        transactionsAsString: function () {
            return JSON.stringify(this._accumulatedTransactionLog)
        },
        _generateTransactionId: function () {
            return ((1 + Math.random()) * parseInt("10000", 16)).toString(16).substring(1, 5)
        },
        saveChanges: function () {
            if (this.settings.updateUrl !== null) {
                var me = this;
                $.post(this.settings.updateUrl, {
                    ig_transactions: JSON.stringify(this._accumulatedTransactionLog)
                }, function (data, textStatus, jqXHR) {
                    me._saveChangesSuccess(data, textStatus, jqXHR)
                })
            }
        },
        _saveChangesSuccess: function (data, textStatus, jqXHR) {
            if (data.Success) {
                this.commit();
                this._transactionLog = [];
                this._accumulatedTransactionLog = []
            }
            var schs = this._saveChangesHandlers, i = schs ? schs.length : 0;
            while (i-- > 0) {
                schs[i](data, textStatus, jqXHR)
            }
        },
        _addChangesSuccessHandler: function (functionDelegate) {
            if (this._saveChangesHandlers === undefined) {
                this._saveChangesHandlers = []
            }
            this._saveChangesHandlers[this._saveChangesHandlers.length] = functionDelegate
        },
        _removeChangesSuccessHandler: function (functionDelegate) {
            if (this._saveChangesHandlers !== undefined) {
                var index = this._saveChangesHandlers.indexOf(functionDelegate);
                if (index > -1) {
                    this._saveChangesHandlers = this._saveChangesHandlers.slice(0, index).concat(this._saveChangesHandlers.slice(index + 1, this._saveChangesHandlers.length))
                }
            }
        },
        dataBind: function (callback, callee) {
            var table, tableObj, dsObj, s, p = this.settings, args, ds, resKey, noCancel = true;
            this._transactionLog = [];
            this._accumulatedTransactionLog = [];
            if (!callback) {
                callback = p.callback
            }
            args = {
                cancel: false
            };
            if ($.isFunction(p.dataBinding)) {
                noCancel = p.dataBinding(this, args);
                if (noCancel === undefined) {
                    noCancel = true
                }
            }
            if (noCancel) {
                if (this.settings.type === "unknown" && (this._runtimeType === null || this._runtimeType === undefined)) {
                    this._runtimeType = this.analyzeDataSource()
                }
                switch (this._runtimeType) {
                    case"function":
                        this._data = p.dataSource();
                        if (this.schema()) {
                            this._data = this.schema().transform(this._data)
                        }
                        break;
                    case"array":
                        if (this.schema() && this.settings.localSchemaTransform) {
                            this._data = this.schema().transform(this.dataSource());
                            if (this.dataSource().Metadata) {
                                this._metadata = this.dataSource().Metadata
                            }
                            this._origDs = this.dataSource()
                        } else {
                            this._data = this.dataSource()
                        }
                        break;
                    case"htmlTableDom":
                    case"htmlTableId":
                    case"htmlTableString":
                        if (this._tableBound) {
                            break
                        }
                        this._runtimeType = this.analyzeDataSource();
                        if (this._runtimeType === "htmlTableId") {
                            tableObj = $("#" + this.dataSource());
                            table = this._validateTable(tableObj)
                        } else {
                            if (this._runtimeType === "htmlTableString") {
                                tableObj = $("#" + this.settings.id + " > table");
                                table = this._validateTable(tableObj)
                            } else {
                                table = this.dataSource()
                            }
                        }
                        if (this.schema() && this.settings.localSchemaTransform) {
                            this._data = this.schema().transform(table)
                        } else {
                            this._data = this.tableToObject(table)
                        }
                        this._tableBound = true;
                        break;
                    case"htmlListDom":
                        this._data = this.schema().transform(this.dataSource());
                        break;
                    case"invalid":
                        throw new Error($.ig.DataSourceLocale.locale.invalidDataSource);
                    case"unknown":
                    case"json":
                    case"xml":
                        if (this.settings.type !== "json" && p.type !== "xml") {
                            throw new Error($.ig.DataSourceLocale.locale.unknownDataSource)
                        } else {
                            resKey = this.settings.responseDataKey;
                            if ($.type(this.dataSource()) === "string") {
                                if (p.type === "json") {
                                    dsObj = this.stringToJSONObject(this.dataSource())
                                } else {
                                    dsObj = this.stringToXmlObject(this.dataSource())
                                }
                            } else {
                                dsObj = this.dataSource()
                            }
                            if (this.schema() && this.settings.localSchemaTransform === true) {
                                this._data = this.schema().transform(dsObj);
                                if (resKey !== null && resKey !== undefined) {
                                    this._origDs = $.ig.findPath(dsObj, resKey)
                                } else {
                                    this._origDs = dsObj
                                }
                            } else {
                                if ((!this.schema() || this.settings.localSchemaTransform === false) && p.type === "json") {
                                    if (resKey !== null && resKey !== undefined) {
                                        this._data = this._origDs = $.ig.findPath(dsObj, resKey)
                                    } else {
                                        this._data = dsObj
                                    }
                                    this._origDs = dsObj
                                } else {
                                    if (!this.schema() && p.type === "xml") {
                                        throw new Error($.ig.DataSourceLocale.locale.errorXmlSourceWithoutSchema)
                                    }
                                }
                            }
                            this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, dsObj, this);
                            if (dsObj.Metadata) {
                                this._metadata = dsObj.Metadata
                            }
                            this.summariesResponse(this.settings.summaries.summariesResponseKey, dsObj)
                        }
                        break;
                    case"remoteUrl":
                        this._remoteData(callback, callee);
                        break;
                    case"empty":
                        this._data = [];
                        this._dataView = [];
                        this._dataSummaries = [];
                        break;
                    default:
                        break
                }
                this._dataView = this._data;
                this._filter = false;
                s = p.sorting;
                if (s.type === "local" && this._runtimeType !== "remoteUrl" && s.defaultFields.length > 0) {
                    this.sort(s.defaultFields, s.defaultDirection, false)
                }
                if (p.paging.enabled && p.paging.type === "local" && this._runtimeType !== "remoteUrl") {
                    this._page()
                }
                ds = this;
                this._populateTransformedData();
                if (this._runtimeType !== "remoteUrl") {
                    this._invokeCallback(callee, callback)
                }
                if ($.isFunction(p.dataBound) && !args.cancel) {
                    p.dataBound(this)
                }
            }
            return this
        },
        summariesResponse: function (key, dsObj) {
            var rec, resPath, i;
            if (key !== null && key !== "") {
                rec = dsObj;
                resPath = key.split(".");
                if (key.length > 0) {
                    for (i = 0; i < resPath.length; i++) {
                        rec = rec[resPath[i]]
                    }
                    this._dataSummaries = rec
                } else {
                    this._dataSummaries = dsObj
                }
                if (this._dataSummaries === undefined || this._dataSummaries === null) {
                    this._dataSummaries = []
                }
            }
        },
        _populateTransformedData: function (data) {
            if (data !== null && data !== undefined) {
                this._transformedData = data
            } else {
                this._transformedData = this._data
            }
        },
        _invokeCallback: function (callee, callback) {
            var cbResolved, calleeResolved;
            cbResolved = callback || this.settings.callback;
            calleeResolved = callee || this.settings.callee;
            if (cbResolved) {
                if (calleeResolved) {
                    cbResolved.apply(calleeResolved, [true, "", this])
                } else {
                    cbResolved(true, "", this)
                }
            }
        },
        _remoteData: function (callback, callee) {
            var params, url = this.settings.dataSource, dataType = this.settings.responseDataType, contentType = this.settings.responseContentType, options;
            params = this._encodeUrl();
            if (callback) {
                this._customCallback = callback
            } else {
                this._customCallback = null
            }
            this._callee = callee;
            options = {
                url: url,
                data: params,
                dataType: dataType,
                async: true,
                context: this,
                contentType: contentType,
                cache: false,
                dataFilter: this._dataFilter,
                success: this._successCallback,
                complete: this._completeCallback,
                error: this._errorCallback
            };
            this._processRequest(options)
        },
        _dataFilter: function (data, type) {
            var ds, schema = this.context.schema(), rawData, t = this.context.settings.type, ver, returnString = false;
            if (type === undefined) {
                type = "text"
            }
            if (type === "xml") {
                schema._type = "xml";
                ds = this.context._processXmlResponse(data, this.context)
            } else {
                if (type === "json") {
                    if (schema) {
                        schema._type = "json"
                    }
                    if ($.type(data) === "string") {
                        rawData = JSON.parse(data)
                    } else {
                        rawData = data
                    }
                    returnString = true;
                    ds = this.context._processJsonResponse(rawData, this.context)
                } else {
                    if (jQuery.fn.jquery) {
                        ver = jQuery.fn.jquery.split(".")
                    }
                    if (ver && ver.length >= 2) {
                        if (parseInt(ver[1], 10) > 4 || parseInt(ver[0], 10) > 1) {
                            this.dataTypes = [];
                            this.dataTypes.push("text");
                            returnString = true
                        }
                    }
                    data = $.type(data) === "string" ? $.trim(data) : data;
                    if ((data && $.type(data) === "string" && (data.startsWith("<?xml") || data.startsWith("<"))) || t === "xml") {
                        if (schema) {
                            schema._type = "xml"
                        }
                        ds = this.context._processXmlResponse(this.context.stringToXmlObject(data), false, this.context)
                    } else {
                        if ((data && $.type(data) === "string" && data.startsWith("[")) || (t === "json" || t === "array")) {
                            if (schema) {
                                schema._type = "json"
                            }
                            ds = this.context._processJsonResponse(JSON.parse(data), this.context)
                        } else {
                            if ((data && $.type(data) === "string" && data.startsWith("{")) || t === "json") {
                                if (schema) {
                                    schema._type = "json"
                                }
                                ds = this.context._processJsonResponse(JSON.parse(data), this.context)
                            } else {
                                if ($.isXMLDoc(data)) {
                                    if (schema) {
                                        schema._type = "xml"
                                    }
                                    ds = this.context._processXmlResponse(data, true, this.context)
                                } else {
                                    if (data !== "" && data !== null) {
                                        throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedResponseType)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (returnString) {
                if (!(this.context.settings.paging && this.context.settings.paging.enabled && this.context.settings.paging.appendPage)) {
                    this.context._data = ds
                }
                this.context._alreadySet = true
            }
            return ds
        },
        _successCallback: function (data) {
            var x, len = data.length;
            if ((data === undefined || data === null) && !this._alreadySet) {
                this._data = [];
                this._dataView = []
            } else {
                if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
                    for (x = 0; x < len; ++x) {
                        this._data[this._data.length] = data[x]
                    }
                } else {
                    if (this._alreadySet) {
                        this._dataView = this._data
                    } else {
                        this._data = data;
                        this._dataView = data
                    }
                }
            }
            this._alreadySet = false;
            this._populateTransformedData();
            this._isPagingReq = false;
            this._isFilteringReq = false;
            this._isSortingReq = false;
            this._isSummariesReq = false
        },
        _errorCallback: function (req, status, error) {
            var f = this._customCallback || this.settings.callback, errmsg, statusMsg;
            this._isPagingReq = false;
            this._isFilteringReq = false;
            this._isSortingReq = false;
            this._isSummariesReq = false;
            statusMsg = status === null ? " " : " (" + status + ") ";
            errmsg = $.ig.DataSourceLocale.locale.errorRemoteRequest + statusMsg + (error !== undefined ? error.message : req && req.statusText ? req.statusText : "");
            if (f && this._callee) {
                f.apply(this._callee, [false, errmsg, this])
            } else {
                if (f) {
                    f(false, errmsg, this)
                }
            }
        },
        _completeCallback: function (req, status) {
            var f, callee, s = this.settings.sorting, p = this.settings.paging;
            if (s.type === "local" && s.defaultFields.length > 0) {
                this.sort(s.defaultFields, s.defaultDirection, false)
            }
            if (p.enabled && p.type === "local") {
                this._page()
            }
            f = this._customCallback || this.settings.callback;
            callee = this._callee || this.settings.callee;
            if (f && callee) {
                f.apply(callee, [true, "", this])
            } else {
                if (f) {
                    f(true, "", this)
                }
            }
        },
        _processRequest: function (options) {
            if (this.settings.responseDataType === "jsonp") {
                $.getJSON(options.url, options.data, $.proxy(this._jsonpFilter, this))
            } else {
                $.ajax(options)
            }
        },
        _jsonpFilter: function (data, type) {
            var resp, x;
            this.context = this;
            resp = this._dataFilter(data, "json");
            if (!resp.length && $.type(resp) === "object") {
                resp = [resp]
            }
            if (this._data.length >= 0 && this.settings.paging && this.settings.paging.enabled && this.settings.paging.appendPage) {
                for (x = 0; x < resp.length; ++x) {
                    this._data[this._data.length] = resp[x]
                }
            } else {
                this._data = resp;
                this._dataView = resp
            }
            this._populateTransformedData();
            this._completeCallback()
        },
        _processJsonResponse: function (data, context) {
            var ds, schema = context.schema(), resKey, resPath, i;
            if (this._response_data) {
                this._response_data(data)
            }
            if (schema && schema.fields && schema.fields().length > 0 && this.settings.localSchemaTransform) {
                ds = schema.transform(data)
            } else {
                resKey = context.settings.responseDataKey;
                if (resKey !== null && resKey !== undefined) {
                    resPath = resKey.split(".");
                    if (resPath.length > 0) {
                        ds = data;
                        for (i = 0; i < resPath.length; i++) {
                            ds = ds[resPath[i]]
                        }
                    } else {
                        ds = data
                    }
                } else {
                    ds = data
                }
            }
            if (context._isPagingReq || context._isFilteringReq) {
                this.totalRecordsCount(null, this.settings.responseTotalRecCountKey, data, context)
            }
            if (data.Metadata) {
                this._metadata = data.Metadata
            }
            this.summariesResponse(this.settings.summaries.summariesResponseKey, data);
            return ds
        },
        _processXmlResponse: function (data, isParsed, context) {
            var ds, schema = context.schema(), tmpSchema, resKey;
            if (schema && schema.fields && schema.fields().length > 0) {
                ds = this.settings.localSchemaTransform ? schema.transform(data) : data
            } else {
                resKey = context.settings.responseDataKey;
                if (resKey && resKey !== "") {
                    tmpSchema = new $.ig.DataSchema();
                    ds = context._xmlToArray(tmpSchema._findXmlRecordsRoot(data, resKey))
                } else {
                    ds = context._xmlToArray(data)
                }
            }
            return ds
        },
        _xmlToArray: function (data) {
            var ds = [], root = data, i, r, j, name, val, o;
            o = window.ActiveXObject;
            if (data && data.childNodes && data.childNodes.length === 1) {
                root = data.childNodes[0]
            }
            for (i = 0; i < root.childNodes.length; i++) {
                r = root.childNodes[i];
                ds[i] = [];
                for (j = 0; j < r.childNodes.length; j++) {
                    name = o === undefined ? r.childNodes[j].localName : r.childNodes[j].baseName;
                    val = o === undefined ? r.childNodes[j].textContent : r.childNodes[j].text;
                    ds[i][name] = val
                }
            }
            return ds
        },
        _encodeUrl: function () {
            var props = this.settings, sParams = {}, fParams = {}, pParams = {}, params, args, selParams = {}, sumParams = {}, extraParams = {}, pkParams = {}, noCancel = true;
            args = {
                cancel: false
            };
            params = {
                sortingParams: sParams,
                filteringParams: fParams,
                pagingParams: pParams,
                selectParams: selParams,
                summariesParams: sumParams,
                extraParams: extraParams,
                pkParams: pkParams
            };
            if ($.isFunction(props.urlParamsEncoding)) {
                noCancel = props.urlParamsEncoding(this, params)
            }
            if (noCancel) {
                this._encodeSelectParams(params);
                this._encodeSortingParams(params);
                this._encodeFilteringParams(params);
                this._encodePagingParams(params);
                this._encodeSummariesParams(params);
                this._encodePkParams(params);
                if ($.isFunction(this.settings.encodeExtraParams)) {
                    this.settings.encodeExtraParams(this, params)
                }
                if ($.isFunction(props.urlParamsEncoded)) {
                    props.urlParamsEncoded(this, params)
                }
            }
            return $.extend(true, {}, params.sortingParams, params.filteringParams, params.pagingParams, params.selectParams, params.summariesParams, params.extraParams, params.pkParams)
        },
        _encodePkParams: function (params) {
            var p = this.settings.paging, s = this.settings.sorting, f = this.settings.filtering, sm = this.settings.summaries;
            if (this._metadata && this._metadata.timezoneOffset && this._schema._pk && this._schema._pk && ((p.enabled && p.type === "remote") || (s.type === "remote" || f.type === "remote" || sm.type === "remote"))) {
                params.pkParams.pk = this._schema._pk
            }
        },
        _encodeSelectParams: function (params) {
            var selParams = params.selectParams, i;
            if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length > 0) {
                selParams.$select = "";
                for (i = 0; i < this.schema().fields().length; i++) {
                    if (i !== 0) {
                        selParams.$select += ","
                    }
                    selParams.$select += this.schema().fields()[i].name
                }
            } else {
                if (!this.settings.localSchemaTransform && this.schema() && this.schema().fields().length === 0) {
                    selParams.$select = "*"
                }
            }
        },
        _encodePagingParams: function (params) {
            var p = this.settings.paging;
            if (p.enabled && p.type === "remote") {
                this._isPagingReq = true;
                if (p.pageIndexUrlKey !== null && p.pageSizeUrlKey !== null) {
                    params.pagingParams[p.pageIndexUrlKey] = this.pageIndex();
                    params.pagingParams[p.pageSizeUrlKey] = this.pageSize()
                } else {
                    params.pagingParams.$skip = this.pageIndex() * this.pageSize();
                    params.pagingParams.$top = this.pageSize();
                    params.pagingParams.$inlinecount = "allpages";
                    if (this.settings.responseTotalRecCountKey === null) {
                        this.settings.responseTotalRecCountKey = "d.__count"
                    }
                }
            }
        },
        _encodeSortingParams: function (params) {
            var s = this.settings.sorting, tmpdir, i, sfields, hlayout = null;
            if (s.type === "remote") {
                if (s.exprString) {
                    sfields = this._parseSortExpressions(s.exprString)
                } else {
                    sfields = s.expressions
                }
                this._isSortingReq = true;
                for (i = 0; i < sfields.length; i++) {
                    if (sfields[i].layout) {
                        hlayout = sfields[i].layout
                    }
                    if (s.sortUrlAscValueKey !== null && s.sortUrlDescValueKey !== null && s.sortUrlKey !== null) {
                        tmpdir = (sfields[i].dir && sfields[i].dir.toLowerCase().startsWith("asc")) ? s.sortUrlAscValueKey : s.sortUrlDescValueKey;
                        params.sortingParams[s.sortUrlKey + "(" + sfields[i].fieldName + ")"] = tmpdir
                    } else {
                        if (params.sortingParams.$orderby === undefined) {
                            params.sortingParams.$orderby = ""
                        }
                        params.sortingParams.$orderby = params.sortingParams.$orderby + sfields[i].fieldName + " " + sfields[i].dir.toLowerCase();
                        if (i < sfields.length - 1) {
                            params.sortingParams.$orderby += ","
                        }
                    }
                }
                if (hlayout) {
                    params.sortingParams.layout = hlayout
                }
            }
        },
        _encodeFilteringParams: function (params) {
            var f = this.settings.filtering, ffields, i, key, exprNotReq, cond, d;
            if (f.type === "remote") {
                if (f.exprString) {
                    ffields = this._parseFilterExprString(f.exprString)
                } else {
                    ffields = f.expressions
                }
                for (i = 0; i < ffields.length; i++) {
                    this._isFilteringReq = true;
                    cond = ffields[i].cond;
                    exprNotReq = cond === "false" || cond === "true" || cond === "today" || cond === "yesterday" || cond === "thisMonth" || cond === "lastMonth" || cond === "nextMonth" || cond === "thisYear" || cond === "lastYear" || cond === "nextYear" || cond === "null" || cond === "notNull" || cond === "empty" || cond === "notEmpty";
                    if (f.filterExprUrlKey !== null) {
                        key = f.filterExprUrlKey + "(" + ffields[i].fieldName + ")";
                        if ($.type(ffields[i].expr) === "date") {
                            d = Date.UTC(ffields[i].expr.getFullYear(), ffields[i].expr.getMonth(), ffields[i].expr.getDate(), ffields[i].expr.getHours(), ffields[i].expr.getMinutes())
                        } else {
                            d = ffields[i].expr
                        }
                        if (params.filteringParams[key] === undefined) {
                            params.filteringParams[key] = ffields[i].cond + "(" + ( exprNotReq ? "" : d) + ")"
                        } else {
                            params.filteringParams[key] = params.filteringParams[key] + "," + ffields[i].cond + "(" + ( exprNotReq ? "" : d) + ")"
                        }
                    } else {
                        if (params.filteringParams.$filter === undefined) {
                            params.filteringParams.$filter = ""
                        }
                        if (ffields[i].cond === "startsWith") {
                            params.filteringParams.$filter += "startswith(" + ffields[i].fieldName + ",'" + ffields[i].expr + "') eq true"
                        } else {
                            if (ffields[i].cond === "endsWith") {
                                params.filteringParams.$filter += "endswith(" + ffields[i].fieldName + ",'" + ffields[i].expr + "') eq true"
                            } else {
                                if (ffields[i].cond === "contains") {
                                    params.filteringParams.$filter += "indexof(" + ffields[i].fieldName + ",'" + ffields[i].expr + "') ge 0"
                                } else {
                                    if (ffields[i].cond === "doesNotContain") {
                                        params.filteringParams.$filter += "indexof(" + ffields[i].fieldName + ",'" + ffields[i].expr + "') eq -1"
                                    } else {
                                        if (ffields[i].cond === "equals") {
                                            if ($.type(ffields[i].expr) === "string") {
                                                params.filteringParams.$filter += ffields[i].fieldName + " eq '" + ffields[i].expr + "'"
                                            } else {
                                                params.filteringParams.$filter += ffields[i].fieldName + " eq " + ffields[i].expr
                                            }
                                        } else {
                                            if (ffields[i].cond === "true") {
                                                params.filteringParams.$filter += ffields[i].fieldName + " eq true"
                                            } else {
                                                if (ffields[i].cond === "false") {
                                                    params.filteringParams.$filter += ffields[i].fieldName + " eq false"
                                                } else {
                                                    if (ffields[i].cond === "doesNotEqual") {
                                                        if ($.type(ffields[i].expr) === "string") {
                                                            params.filteringParams.$filter += ffields[i].fieldName + " ne '" + ffields[i].expr + "'"
                                                        } else {
                                                            params.filteringParams.$filter += ffields[i].fieldName + " ne " + ffields[i].expr
                                                        }
                                                    } else {
                                                        if (ffields[i].cond === "greaterThan") {
                                                            params.filteringParams.$filter += ffields[i].fieldName + " gt " + ffields[i].expr
                                                        } else {
                                                            if (ffields[i].cond === "lessThan") {
                                                                params.filteringParams.$filter += ffields[i].fieldName + " lt " + ffields[i].expr
                                                            } else {
                                                                if (ffields[i].cond === "greaterThanOrEqualTo") {
                                                                    params.filteringParams.$filter += ffields[i].fieldName + " ge " + ffields[i].expr
                                                                } else {
                                                                    if (ffields[i].cond === "lessThanOrEqualTo") {
                                                                        params.filteringParams.$filter += ffields[i].fieldName + " le " + ffields[i].expr
                                                                    } else {
                                                                        if (ffields[i].cond === "null") {
                                                                            params.filteringParams.$filter += ffields[i].fieldName + " eq null"
                                                                        } else {
                                                                            if (ffields[i].cond === "notNull") {
                                                                                params.filteringParams.$filter += ffields[i].fieldName + " ne null"
                                                                            } else {
                                                                                if (ffields[i].cond === "empty") {
                                                                                    params.filteringParams.$filter += "length(" + ffields[i].fieldName + ") eq 0"
                                                                                } else {
                                                                                    if (ffields[i].cond === "notEmpty") {
                                                                                        params.filteringParams.$filter += "length(" + ffields[i].fieldName + ") gt 0"
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (i < ffields.length - 1) {
                            params.filteringParams.$filter += " and "
                        }
                    }
                }
                if (f.filterLogicUrlKey !== null && ffields.length > 0) {
                    params.filteringParams[f.filterLogicUrlKey] = ffields[0].logic
                }
            }
        },
        _encodeSummariesParams: function (params) {
            var i, j, s = this.settings.summaries, cs = s.columnSettings, methodsStr, csLength = cs.length;
            if (s.type === "remote") {
                for (i = 0; i < csLength; i++) {
                    methodsStr = "";
                    if (cs[i].summaryOperands === undefined || cs[i].summaryOperands === null) {
                        continue
                    }
                    for (j = 0; j < cs[i].summaryOperands.length; j++) {
                        if (cs[i].summaryOperands[j].active === true || cs[i].summaryOperands[j].active === 1) {
                            methodsStr += cs[i].summaryOperands[j].type + ","
                        }
                    }
                    if (methodsStr !== "") {
                        params.summariesParams[s.summaryExprUrlKey + "(" + cs[i].columnKey + ")"] = methodsStr.slice(0, -1)
                    }
                }
            }
        },
        _page: function (keepRecords) {
            var count = 0, startIndex, endIndex, i = 0;
            if (keepRecords === undefined) {
                keepRecords = false
            }
            if (keepRecords) {
                count = this._dataView.length
            } else {
                this._dataView = []
            }
            if (!this._filter) {
                startIndex = this.pageIndex() * this.pageSize();
                endIndex = startIndex + this.pageSize() >= this._data.length ? this._data.length : startIndex + this.pageSize();
                for (i = startIndex; i < endIndex; i++) {
                    this._dataView[count++] = this._data[i]
                }
            } else {
                startIndex = this.pageIndex() * this.pageSize();
                endIndex = startIndex + this.pageSize() >= this._filteredData.length ? this._filteredData.length : startIndex + this.pageSize();
                for (i = startIndex; i < endIndex; i++) {
                    this._dataView[count++] = this._filteredData[i]
                }
            }
        },
        sort: function (fields, direction, keepSortState) {
            var s = this.settings.sorting, schema, sortF, convertFunc, p = this.settings.paging, data, resetPaging = false, settings = this.settings;
            if (fields === undefined || fields === null) {
                throw new Error($.ig.DataSourceLocale.locale.noSortingFields)
            }
            sortF = function (grid, fields, schema, reverse, convertf) {
                reverse = (reverse) ? -1 : 1;
                function compareVals(format, enableUTCDates, rowTemplate, x, y) {
                    if (format) {
                        if ($.type(x) === "date" && $.type(y) === "date") {
                            if (format === "time" || format === "timeLong" || format === "h:mm:ss tt") {
                                x = new Date("01 01 2000 " + $.ig.formatter(x, "date", format, rowTemplate, enableUTCDates));
                                y = new Date("01 01 2000 " + $.ig.formatter(y, "date", format, rowTemplate, enableUTCDates))
                            } else {
                                x = new Date($.ig.formatter(x, "date", format, rowTemplate, enableUTCDates));
                                y = new Date($.ig.formatter(y, "date", format, rowTemplate, enableUTCDates))
                            }
                        }
                    }
                    if ((x === null || x === undefined) && (y === null || y === undefined)) {
                        return 0
                    }
                    if ((x === null || x === undefined) && y !== null && y !== undefined) {
                        return -1
                    }
                    if (x !== null && x !== undefined && (y === null || y === undefined)) {
                        return 1
                    }
                    return x > y ? 1 : x < y ? -1 : 0
                }

                return function (obj1, obj2) {
                    var i, f, arr1 = [], arr2 = [], a, b, key, col, format, o, enableUTCDates, rowTemplate;
                    if (grid) {
                        o = grid.options;
                        enableUTCDates = o.enableUTCDates;
                        rowTemplate = (!o.rowTemplate || o.rowTemplate.length <= 0)
                    }
                    for (i = 0; i < fields.length; i++) {
                        key = fields[i].fieldName;
                        if (grid && grid.columnByKey) {
                            col = grid.columnByKey(key);
                            if (col !== undefined && col !== null) {
                                format = col.format
                            }
                        }
                        if (fields[i].layout && ((settings.key && settings.key !== fields[i].layout) || !settings.key)) {
                            continue
                        }
                        f = fields[i];
                        if (f.fieldIndex >= 0) {
                            f.fieldName = f.fieldIndex
                        }
                        a = obj1[f.fieldName];
                        b = obj2[f.fieldName];
                        if (convertf !== undefined) {
                            a = convertf(a, f.fieldName);
                            b = convertf(b, f.fieldName)
                        }
                        if (s.caseSensitive === false) {
                            if (a !== undefined && a !== null && a.toLowerCase) {
                                a = a.toLowerCase()
                            }
                            if (b !== undefined && b !== null && b.toLowerCase) {
                                b = b.toLowerCase()
                            }
                        }
                        if (f.dir !== undefined && f.dir !== null) {
                            reverse = f.dir.toLowerCase().startsWith("desc");
                            reverse = (reverse) ? -1 : 1
                        } else {
                            if (direction !== undefined && direction !== null && direction !== "") {
                                reverse = direction.toLowerCase().startsWith("desc");
                                reverse = (reverse) ? -1 : 1
                            }
                        }
                        if (fields.length === 1) {
                            arr1 = reverse * compareVals(format, enableUTCDates, rowTemplate, a, b);
                            arr2 = reverse * compareVals(format, enableUTCDates, rowTemplate, b, a)
                        } else {
                            if (reverse === -1) {
                                arr1.push(-compareVals(format, enableUTCDates, rowTemplate, a, b));
                                arr2.push(-compareVals(format, enableUTCDates, rowTemplate, b, a))
                            } else {
                                arr1.push(compareVals(format, enableUTCDates, rowTemplate, a, b));
                                arr2.push(compareVals(format, enableUTCDates, rowTemplate, b, a))
                            }
                        }
                    }
                    if (arr1 < arr2) {
                        return -1
                    }
                    if (arr1 > arr2) {
                        return 1
                    }
                    return 0
                }
            };
            if (s.applyToAllData && s.type === "local") {
                if (this._filter && ((p.type === "local" && p.enabled === true) || p.enabled === false)) {
                    data = this._filteredData
                } else {
                    data = this.data()
                }
                resetPaging = true
            } else {
                data = this.dataView()
            }
            if ($.type(s.customFunc) === "function") {
                data = s.customFunc(data, fields, direction)
            } else {
                schema = this.settings.schema;
                if (!direction) {
                    direction = ""
                }
                if ($.type(s.compareFunc) === "function") {
                    sortF = s.compareFunc
                }
                if ($.isFunction(s.customConvertFunc)) {
                    convertFunc = s.customConvertFunc
                }
                if ($.type(fields) === "string") {
                    fields = this._parseSortExpressions(fields)
                }
                if (fields.length > 0) {
                    data = data.sort(sortF(this.settings.callee, fields, schema, direction.toLowerCase().startsWith("asc") ? false : true, convertFunc))
                }
            }
            if (resetPaging && p.type === "local") {
                if (!this._filter) {
                    this._data = data
                } else {
                    this._filteredData = data
                }
                this._page()
            } else {
                this._dataView = data
            }
            this._populateTransformedData(data);
            return this
        },
        clearLocalSorting: function () {
            var s = this.settings.sorting, p = this.settings.paging, data, resetPaging = false;
            if (s.applyToAllData && s.type === "local") {
                if (this._filter && ((p.type === "local" && p.enabled === true) || p.enabled === false)) {
                    data = this._filteredData
                } else {
                    data = this.data()
                }
                resetPaging = true
            } else {
                data = this.dataView()
            }
            if (resetPaging && p.type === "local") {
                if (!this._filter) {
                    this._data = data
                } else {
                    this._filteredData = data
                }
                this._page()
            } else {
                this._dataView = data
            }
            this._populateTransformedData();
            return this
        },
        _parseSortExpressions: function (s) {
            var fields = [], tmp, tmp2, i;
            tmp = s.split(",");
            for (i = 0; i < tmp.length; i++) {
                fields[i] = {};
                tmp2 = $.trim(tmp[i]).split(" ");
                fields[i].fieldName = tmp2[0];
                fields[i].dir = tmp2[1]
            }
            return fields
        },
        _convertf: function (val, type) {
        },
        filter: function (fieldExpressions, boolLogic, keepFilterState, fieldExpressionsOnStrings) {
            var i, j, expr = null, count = 0, skipRec = false, f = this.settings.filtering, p = this.settings.paging, data, t, k, schema, fields, tmpbool, resetPaging, allFieldsExpr, stringVal;
            schema = this.schema();
            if (schema === null || schema === undefined) {
                throw new Error($.ig.DataSourceLocale.locale.filteringNoSchema)
            }
            if ($.type(fieldExpressions) === "string") {
                expr = fieldExpressions
            }
            if ($.type(fieldExpressionsOnStrings) === "string") {
                allFieldsExpr = fieldExpressionsOnStrings
            } else {
                if ($.type(fieldExpressionsOnStrings) === "undefined") {
                    fieldExpressionsOnStrings = []
                }
            }
            if ($.type(fieldExpressions) === "array" && fieldExpressions.length === 0 && $.type(fieldExpressionsOnStrings) === "array" && fieldExpressionsOnStrings.length === 0) {
                return
            }
            if (f.applyToAllData && f.type === "local") {
                data = this.data();
                resetPaging = true
            } else {
                if (this._cachedDataView && this._cachedDataView.length > 0) {
                    data = this._cachedDataView
                } else {
                    this._cachedDataView = $.merge([], this.dataView());
                    data = this._cachedDataView
                }
            }
            if ($.type(f.customFunc) === "function") {
                data = f.customFunc(fieldExpressions, data);
                this._filteredData = data;
                this._dataView = []
            } else {
                this._dataView = [];
                this._filteredData = [];
                for (i = 0; i < data.length; i++) {
                    skipRec = false;
                    if (expr) {
                        fieldExpressions = this._parseFilterExprString(expr)
                    }
                    if (allFieldsExpr) {
                        fieldExpressionsOnStrings = this._parseFilterExprString(allFieldsExpr)
                    }
                    for (j = 0; j < fieldExpressions.length; j++) {
                        fields = schema.fields();
                        if (fieldExpressions[j].fieldIndex) {
                            if (fieldExpressions[j].fieldIndex < fields.length) {
                                t = fields[fieldExpressions[j].fieldIndex].type
                            }
                            skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldIndex], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond)
                        } else {
                            if (fieldExpressions[j].dataType !== undefined && fieldExpressions[j].dataType !== null) {
                                t = fieldExpressions[j].dataType
                            } else {
                                for (k = 0; k < fields.length; k++) {
                                    if (fields[k].name === fieldExpressions[j].fieldName) {
                                        t = fields[k].type;
                                        break
                                    }
                                }
                            }
                            skipRec = !this._findMatch(data[i][fieldExpressions[j].fieldName], fieldExpressions[j].expr, t, !f.caseSensitive, fieldExpressions[j].cond)
                        }
                        tmpbool = (fieldExpressions[j].logic !== null && fieldExpressions[j].logic !== undefined && (fieldExpressions[j].logic.toLowerCase() === "or" || fieldExpressions[j].logic.toLowerCase() === "and")) ? fieldExpressions[j].logic : boolLogic;
                        if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
                            tmpbool = "and"
                        }
                        if (skipRec && tmpbool.toLowerCase() === "and") {
                            break
                        } else {
                            if (!skipRec && tmpbool.toLowerCase() === "or") {
                                break
                            }
                        }
                    }
                    if (!skipRec) {
                        for (j = 0; j < fieldExpressionsOnStrings.length; j++) {
                            fields = schema.fields();
                            if (fieldExpressionsOnStrings[j].fieldIndex) {
                                if (fieldExpressionsOnStrings[j].fieldIndex < fields.length) {
                                    t = fields[fieldExpressionsOnStrings[j].fieldIndex].type
                                }
                                stringVal = data[i][fieldExpressionsOnStrings[j].fieldIndex] ? data[i][fieldExpressionsOnStrings[j].fieldIndex].toString() : "";
                                skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond)
                            } else {
                                for (k = 0; k < fields.length; k++) {
                                    if (fields[k].name === fieldExpressionsOnStrings[j].fieldName) {
                                        t = fields[k].type;
                                        break
                                    }
                                }
                                stringVal = data[i][fieldExpressionsOnStrings[j].fieldName] ? data[i][fieldExpressionsOnStrings[j].fieldName].toString() : "";
                                skipRec = !this._findMatch(stringVal, fieldExpressionsOnStrings[j].expr, "string", !f.caseSensitive, fieldExpressionsOnStrings[j].cond)
                            }
                            tmpbool = (fieldExpressionsOnStrings[j].logic !== null && fieldExpressionsOnStrings[j].logic !== undefined && (fieldExpressionsOnStrings[j].logic.toLowerCase() === "or" || fieldExpressionsOnStrings[j].logic.toLowerCase() === "and")) ? fieldExpressionsOnStrings[j].logic : boolLogic;
                            if (tmpbool === undefined || tmpbool === null || $.type(tmpbool) !== "string") {
                                tmpbool = "and"
                            }
                            if (skipRec && tmpbool.toLowerCase() === "and") {
                                break
                            } else {
                                if (!skipRec && tmpbool.toLowerCase() === "or") {
                                    break
                                }
                            }
                        }
                    }
                    if (!skipRec) {
                        this._filteredData[count++] = data[i]
                    }
                }
            }
            this._filter = true;
            if (resetPaging && p.type === "local" && p.enabled === true) {
                this.settings.paging.pageIndex = 0;
                this.pageSizeDirty(true);
                this._page()
            } else {
                for (i = 0; i < this._filteredData.length; i++) {
                    this._dataView[i] = this._filteredData[i]
                }
            }
            this._populateTransformedData(this._filteredData);
            return this
        },
        clearLocalFilter: function () {
            var i, f = this.settings.filtering, p = this.settings.paging, data, resetPaging;
            if (f.applyToAllData && f.type === "local") {
                data = this.data();
                resetPaging = true
            } else {
                if (this._cachedDataView && this._cachedDataView.length > 0) {
                    data = this._cachedDataView
                } else {
                    this._cachedDataView = $.merge([], this.dataView());
                    data = this._cachedDataView
                }
            }
            this._dataView = [];
            this._filteredData = data;
            if (resetPaging && p.type === "local" && p.enabled === true) {
                this._filter = true;
                this.settings.paging.pageIndex = 0;
                this.pageSizeDirty(true);
                this._page()
            } else {
                if (p.enabled === false) {
                    this._filter = true
                }
                for (i = 0; i < this._filteredData.length; i++) {
                    this._dataView[i] = this._filteredData[i]
                }
            }
            this._populateTransformedData(this._filteredData);
            return this
        },
        _parseFilterExprString: function (expr) {
            var exprs = $.trim(expr).split(/(?=AND+)|(?=OR+)/i), i, j, fields = [], tmp, tmp2, isInvalid = true;
            for (i = 0; i < exprs.length; i++) {
                fields[i] = {};
                tmp = $.trim(exprs[i]).split(/(?= \=+)|(?=<>+)|(?=>+)|(?=<+)|(?=LIKE+)|(?=NOT\WLIKE)+|(?=>\=+)|(?=<\=+)/);
                if ($.trim(exprs[i]).toLowerCase().startsWith("and")) {
                    fields[i].logic = "AND"
                } else {
                    if ($.trim(exprs[i]).toLowerCase().startsWith("or")) {
                        fields[i].logic = "OR"
                    }
                }
                if (i > 0 && (fields[i].logic === "AND" || fields[i].logic === "OR")) {
                    fields[i - 1].logic = fields[i].logic
                }
                if (tmp[0].toLowerCase().startsWith("and") || tmp[0].toLowerCase().startsWith("or")) {
                    fields[i].fieldName = $.trim(tmp[0].split(" ")[1])
                } else {
                    fields[i].fieldName = $.trim(tmp[0])
                }
                tmp2 = $.trim(tmp[1]).split(" ");
                if (exprs[i].indexOf("<>") !== -1) {
                    tmp2[0] = "<>";
                    tmp2[1] = tmp[2].replace(">", "")
                }
                if (tmp2.length > 2) {
                    for (j = 2; j < tmp2.length; j++) {
                        tmp2[1] = tmp2[1] + " " + tmp2[j]
                    }
                    tmp2 = [tmp2[0], tmp2[1]]
                }
                if (tmp[1].startsWith("NOT")) {
                    fields[i].expr = $.trim(tmp[2].replace("LIKE", ""))
                } else {
                    fields[i].expr = tmp2[1]
                }
                for (j = 0; j < this.schema().schema.fields.length; j++) {
                    if (this.schema().schema.fields[j].name === fields[i].fieldName) {
                        isInvalid = false;
                        break
                    }
                }
                if (isInvalid) {
                    throw new Error($.ig.DataSourceLocale.locale.fieldMismatch + fields[i].fieldName)
                }
                isInvalid = true;
                if (tmp2[0] === ">") {
                    fields[i].cond = "greaterThan"
                } else {
                    if (tmp2[0] === "LIKE") {
                        if (fields[i].expr.startsWith("%") && fields[i].expr.endsWith("%")) {
                            fields[i].cond = "contains"
                        } else {
                            if (fields[i].expr.endsWith("%")) {
                                fields[i].cond = "startsWith"
                            } else {
                                if (fields[i].expr.startsWith("%")) {
                                    fields[i].cond = "endsWith"
                                } else {
                                    fields[i].cond = "equals"
                                }
                            }
                        }
                        fields[i].expr = fields[i].expr.replace(/%/g, "")
                    } else {
                        if (tmp2[0] === "NOT LIKE" || tmp2[0] === "NOT") {
                            if (fields[i].expr.startsWith("%") && fields[i].expr.endsWith("%")) {
                                fields[i].cond = "doesNotContain"
                            } else {
                                fields[i].cond = "doesNotEqual"
                            }
                            fields[i].expr = fields[i].expr.replace(/%/g, "")
                        } else {
                            if (tmp2[0] === "=") {
                                fields[i].cond = "equals"
                            } else {
                                if (tmp2[0] === "<>") {
                                    fields[i].cond = "doesNotEqual"
                                } else {
                                    if (tmp2[0] === "<") {
                                        fields[i].cond = "lessThan"
                                    } else {
                                        if (tmp2[0] === "<=") {
                                            fields[i].cond = "lessThanOrEqualTo"
                                        } else {
                                            if (tmp2[0] === ">=") {
                                                fields[i].cond = "greaterThanOrEqualTo"
                                            } else {
                                                throw new Error($.ig.DataSourceLocale.locale.unrecognizedCondition + expr)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return fields
        },
        _findMatch: function (val, expr, t, ignoreCase, cond) {
            var tmpExpr, exprNotReq = cond === "false" || cond === "true" || cond === "today" || cond === "yesterday" || cond === "thisMonth" || cond === "lastMonth" || cond === "nextMonth" || cond === "thisYear" || cond === "lastYear" || cond === "nextYear" || cond === "null" || cond === "notNull" || cond === "empty" || cond === "notEmpty";
            if (expr === "" && !exprNotReq) {
                return true
            }
            tmpExpr = $.trim(expr);
            if (t === "regexp" || (t === "string" && tmpExpr.startsWith("/") && tmpExpr.endsWith("/"))) {
                if (t === "regexp") {
                    return this._findRegExpMatch(val, expr, false)
                }
                return this._findRegExpMatch(val, tmpExpr.substring(1, tmpExpr.length - 1), true)
            }
            if (($.type(val) === "date" && (t === undefined || t === null)) || t === "date") {
                try {
                    expr = this._parser.toDate(expr)
                } catch (e) {
                }
                return this._findDateMatch(val, expr, cond)
            }
            if (($.type(val) === "boolean" && (t === undefined || t === null)) || (t === "boolean" || t === "bool")) {
                return this._findBoolMatch(val, cond)
            }
            if (($.type(val) === "number" && (t === undefined || t === null)) || t === "number") {
                return this._findNumericMatch(val, expr, cond)
            }
            return this._findStringMatch(val, expr, ignoreCase, cond)
        },
        _findStringMatch: function (val, expr, ignoreCase, cond) {
            var localVal;
            if (val !== null && val !== undefined) {
                localVal = ignoreCase ? val.toLowerCase() : val || ""
            } else {
                localVal = val
            }
            if (expr !== null && expr !== undefined) {
                expr = ignoreCase ? expr.toString().toLowerCase() : expr.toString()
            }
            if (cond === "startsWith") {
                return localVal !== null && localVal !== undefined && localVal.startsWith(expr)
            }
            if (cond === "endsWith") {
                return localVal !== null && localVal !== undefined && localVal.endsWith(expr)
            }
            if (cond === "contains") {
                return localVal !== null && localVal !== undefined && localVal.indexOf(expr) !== -1
            }
            if (cond === "doesNotContain") {
                return localVal !== null && localVal !== undefined && localVal.indexOf(expr) === -1
            }
            if (cond === "equals") {
                return localVal !== null && localVal !== undefined && localVal === expr
            }
            if (cond === "doesNotEqual") {
                return localVal !== null && localVal !== undefined && localVal !== expr
            }
            if (cond === "null") {
                return localVal === null
            }
            if (cond === "notNull") {
                return localVal !== null
            }
            if (cond === "empty") {
                return localVal === null || localVal === undefined || localVal.length === 0
            }
            if (cond === "notEmpty") {
                return localVal === null || localVal === undefined || localVal.length !== 0
            }
            throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond)
        },
        _findRegExpMatch: function (val, expr, str) {
            if (str) {
                return (new RegExp(expr)).test(val)
            }
            return val.match(expr)
        },
        _findNumericMatch: function (val, expr, cond) {
            if ($.type(expr) !== "number") {
                expr = this._parser.toNumber(expr)
            }
            if (cond === "equals") {
                return val === expr
            }
            if (cond === "doesNotEqual") {
                return val !== expr
            }
            if (cond === "greaterThan") {
                return val > expr
            }
            if (cond === "lessThan") {
                return val < expr
            }
            if (cond === "greaterThanOrEqualTo") {
                return val >= expr
            }
            if (cond === "lessThanOrEqualTo") {
                return val <= expr
            }
            if (cond === "null") {
                return val === null
            }
            if (cond === "notNull") {
                return val !== null
            }
            if (cond === "empty") {
                return (val === null || val === undefined || isNaN(val))
            }
            if (cond === "notEmpty") {
                return (val !== null && val !== undefined && !isNaN(val))
            }
            throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond)
        },
        _findBoolMatch: function (val, cond) {
            if (cond === "true") {
                return val
            }
            if (cond === "false") {
                return !val
            }
            if (cond === "null") {
                return val === null
            }
            if (cond === "notNull") {
                return val !== null
            }
            if (cond === "empty") {
                return (val === null || val === undefined)
            }
            if (cond === "notEmpty") {
                return (val !== null && val !== undefined)
            }
            throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond)
        },
        _findDateMatch: function (val, expr, cond) {
            var day1, mins1, secs1, hs1, ms1, yrs1, day2, mins2, secs2, hs2, ms2, yrs2, month1, month2, eq, cur, day3, mins3, secs3, hs3, ms3, yrs3, month3, mday1, mday2, mday3;
            if (val !== null && val !== undefined) {
                day1 = val.getDay();
                mday1 = val.getDate();
                mins1 = val.getMinutes();
                secs1 = val.getSeconds();
                hs1 = val.getHours();
                ms1 = val.getMilliseconds();
                yrs1 = val.getYear();
                month1 = val.getMonth()
            }
            if ($.type(expr) === "date") {
                day2 = expr.getDay();
                mday2 = expr.getDate();
                mins2 = expr.getMinutes();
                secs2 = expr.getSeconds();
                hs2 = expr.getHours();
                ms2 = expr.getMilliseconds();
                yrs2 = expr.getYear();
                month2 = expr.getMonth()
            } else {
                expr = new Date(expr)
            }
            cur = new Date();
            day3 = cur.getDay();
            mday3 = cur.getDate();
            mins3 = cur.getMinutes();
            secs3 = cur.getSeconds();
            hs3 = cur.getHours();
            ms3 = cur.getMilliseconds();
            yrs3 = cur.getYear();
            month3 = cur.getMonth();
            eq = day1 === day2 && mins1 === mins2 && hs1 === hs2 && yrs1 === yrs2 && month1 === month2;
            if (cond === "equals") {
                return eq
            }
            if (cond === "doesNotEqual") {
                return !eq
            }
            if (cond === "before") {
                return val < expr
            }
            if (cond === "after") {
                return val > expr
            }
            if (cond === "today") {
                return mday1 === mday3 && month1 === month3 && yrs1 === yrs3
            }
            if (cond === "yesterday") {
                return mday1 === mday3 - 1 && month1 === month3 && yrs1 === yrs3
            }
            if (cond === "thisMonth") {
                return month1 === month3 && yrs1 === yrs3
            }
            if (cond === "lastMonth") {
                if (month3 === 0) {
                    return month1 === 11 && yrs1 === yrs3 - 1
                }
                return month1 === month3 - 1 && yrs1 === yrs3
            }
            if (cond === "nextMonth") {
                if (month3 === 11) {
                    return month1 === 0 && yrs1 === yrs3 + 1
                }
                return month1 === month3 + 1 && yrs1 === yrs3
            }
            if (cond === "thisYear") {
                return yrs1 === yrs3
            }
            if (cond === "lastYear") {
                return yrs1 === yrs3 - 1
            }
            if (cond === "nextYear") {
                return yrs1 === yrs3 + 1
            }
            if (cond === "on") {
                return yrs1 === yrs2 && month1 === month2 && mday1 === mday2
            }
            if (cond === "notOn") {
                return !(yrs1 === yrs2 && month1 === month2 && mday1 === mday2)
            }
            if (cond === "null") {
                return val === null
            }
            if (cond === "notNull") {
                return val !== null
            }
            if (cond === "empty") {
                return (val === null || val === undefined)
            }
            if (cond === "notEmpty") {
                return (val !== null && val !== undefined)
            }
            throw new Error($.ig.DataSourceLocale.locale.errorUnrecognizedFilterCondition + cond)
        },
        totalRecordsCount: function (count, key, dsObj, context) {
            var rec, totalRecPath, i;
            if (context !== undefined && context !== null) {
                if (key) {
                    totalRecPath = key.split(".");
                    rec = dsObj;
                    for (i = 0; i < totalRecPath.length; i++) {
                        rec = rec[totalRecPath[i]]
                    }
                    if (dsObj && rec !== undefined && rec !== null) {
                        if ($.type(rec) === "number") {
                            this._recCount = rec
                        } else {
                            this._recCount = parseInt(rec, 10)
                        }
                        this.hasTotalRecordsCount(true)
                    } else {
                        this.hasTotalRecordsCount(false)
                    }
                } else {
                    this.hasTotalRecordsCount(false)
                }
            } else {
                if (count !== undefined && count !== null) {
                    this._recCount = count
                }
            }
            return this._recCount
        },
        hasTotalRecordsCount: function (hasCount) {
            if (hasCount === undefined || hasCount === null) {
                return this._hasCount
            }
            this._hasCount = hasCount
        },
        metadata: function (key) {
            if (key === null || key === undefined || key === "" || this._metadata === null || this._metadata === undefined) {
                return this._metadata
            }
            return this._metadata[key]
        },
        totalLocalRecordsCount: function () {
            if (!this._filter) {
                return this._data.length
            }
            return this._dataView.length
        },
        pageCount: function () {
            var c, realCount;
            if (!this._filter) {
                realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._data.length
            } else {
                realCount = this.totalRecordsCount() > 0 ? this.totalRecordsCount() : this._filteredData.length
            }
            c = Math.ceil(realCount / this.settings.paging.pageSize);
            return c === 0 ? 1 : c
        },
        pageIndex: function (index) {
            if (index === undefined || index === null) {
                return this.settings.paging.pageIndex === undefined ? 0 : this.settings.paging.pageIndex
            }
            this.settings.paging.pageIndex = parseInt(index, 10);
            this._cachedDataView = null;
            if (this.settings.paging.type === "local") {
                this._page(this.settings.paging.appendPage);
                this._invokeCallback()
            } else {
                this.dataBind()
            }
            return this
        },
        prevPage: function () {
            this.pageIndex(this.pageIndex() === 0 ? 0 : this.pageIndex() - 1);
            return this
        },
        nextPage: function () {
            if (this.pageIndex() >= this.pageCount() - 1) {
                return this
            }
            this.pageIndex(this.pageIndex() + 1);
            return this
        },
        pageSize: function (s) {
            if (s === undefined || s === null) {
                return this.settings.paging.pageSize
            }
            this.settings.paging.pageSize = parseInt(s, 10);
            if (this.settings.paging.appendPage) {
                this.settings.paging.pageIndex = 0;
                this._cachedDataView = null
            }
            if (this.settings.paging.type === "local") {
                this._page();
                this._invokeCallback()
            } else {
                this.dataBind()
            }
            return this
        },
        pageSizeDirty: function (dirty) {
            if (dirty === undefined || dirty === null) {
                return this._dirty
            }
            this._dirty = dirty
        },
        recordsForPage: function (p) {
            var d = [], si, ps, ei, i, c = 0;
            ps = this.pageSize();
            si = p * ps;
            ei = si + ps >= this._data.length ? this._data.length : si + ps;
            for (i = si; i < ei; i++) {
                d[c++] = this._data[i]
            }
            return d
        },
        tableToObject: function (tableDOM) {
            try {
                var rows = $(tableDOM).children("tbody").children(), len, data, i, j;
                len = rows.length > 0 ? rows[0].cells.length : 0;
                data = [];
                for (i = 0; i < rows.length; i++) {
                    data[i] = [];
                    for (j = 0; j < len; j++) {
                        data[i][j] = rows[i].cells[j].innerHTML
                    }
                }
                return data
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTableNoSchema + e.message)
            }
        },
        _validateTable: function (obj) {
            if (obj.length === 0) {
                throw new Error($.ig.DataSourceLocale.locale.errorTableWithIdNotFound + this.dataSource())
            } else {
                return obj[0]
            }
        },
        stringToJSONObject: function (s) {
            var data = {};
            try {
                data = JSON.parse(s)
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingJsonNoSchema + e.message)
            }
            return data
        },
        stringToXmlObject: function (s) {
            var doc, parser;
            try {
                if (window.ActiveXObject) {
                    doc = new ActiveXObject("Microsoft.XMLDOM");
                    doc.async = "false";
                    doc.loadXML(s)
                } else {
                    parser = new DOMParser();
                    doc = parser.parseFromString(s, "text/xml")
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingXmlNoSchema + e.message)
            }
            return doc
        }
    });
    $.ig.TypeParser = $.ig.TypeParser || Class.extend({
        toStr: function (obj) {
            return this.isNullOrUndefined(obj) ? "" : obj + this.empty()
        },
        toDate: function (obj, pk, key) {
            if (this.isNullOrUndefined(obj) || obj === "" || $.type(obj) === "function") {
                return null
            }
            if ($.type(obj) === "date") {
                return obj
            }
            if (obj.length && obj.indexOf("/Date(") !== -1) {
                if (this._serverOffsets === undefined || this._serverOffsets[pk] === undefined) {
                    return new Date(parseInt(obj.replace("/Date(", "").replace(")/", ""), 10) + this._serverOffset)
                }
                if (this._serverOffsets[pk][key] !== undefined && this._serverOffsets[pk][key] !== null) {
                    return new Date(parseInt(obj.replace("/Date(", "").replace(")/", ""), 10) + this._serverOffsets[pk][key])
                }
                return new Date(parseInt(obj.replace("/Date(", "").replace(")/", ""), 10))
            }
            return new Date(obj)
        },
        toNumber: function (obj) {
            return (this.isNullOrUndefined(obj) || $.type(obj) === "function") ? null : obj * this.num()
        },
        toBool: function (obj) {
            if ($.type(obj) === "boolean") {
                return obj
            }
            if (this.isNullOrUndefined(obj) || $.type(obj) === "function") {
                return false
            }
            if (obj === "1" || obj.toLowerCase() === "true" || obj === 1) {
                return true
            }
            return false
        },
        isNullOrUndefined: function (obj) {
            return obj === null || obj === undefined
        },
        empty: function () {
            return ""
        },
        num: function () {
            return 1
        }
    });
    $.ig.DataSchema = $.ig.DataSchema || Class.extend({
        schema: {
            fields: [],
            searchField: null,
            outputResultsName: null
        },
        init: function (type, options) {
            if (options) {
                this.schema = $.extend(true, {}, $.ig.DataSchema.prototype.schema, options)
            }
            this._type = type;
            this._parser = new $.ig.TypeParser();
            this._parser._serverOffset = 0
        },
        transform: function (data) {
            var ndata = [];
            switch (this._type) {
                case"array":
                    ndata = this._arrays(data);
                    break;
                case"json":
                    ndata = this._json(data);
                    break;
                case"xml":
                    ndata = this._xml(data);
                    break;
                case"htmlTableDom":
                    ndata = this._table(data);
                    break;
                case"htmlListDom":
                    ndata = this._list(data);
                    break;
                default:
                    throw new Error("unknown data source type: " + this._type)
            }
            return ndata
        },
        _setResKey: function (resKey, out) {
            if (!this.isEmpty(resKey)) {
                out[resKey] = [];
                return out[resKey]
            }
            return out
        },
        _convertType: function (t, obj, pk, key) {
            if (t === "string") {
                return this._parser.toStr(obj)
            }
            if (t === "date") {
                return this._parser.toDate(obj, pk, key)
            }
            if (t === "number") {
                return this._parser.toNumber(obj)
            }
            if (t === "boolean" || t === "bool") {
                return this._parser.toBool(obj)
            }
            return obj
        },
        _val: function (field, val, results, i, rec) {
            var t = field.type, j;
            if (!this.isEmpty(t)) {
                if (this.isEmpty(field.name)) {
                    results[i][j] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name)
                } else {
                    results[i][field.name] = this._convertType(t, val, this._pk ? results[i][this._pk] : i, field.name)
                }
            } else {
                if (this.isEmpty(field.name)) {
                    if (rec) {
                        results[i][j] = rec[i][j]
                    } else {
                        results[i][j] = val
                    }
                } else {
                    if (rec) {
                        results[i][field.name] = rec[i][field.name]
                    } else {
                        results[i][field.name] = val
                    }
                }
            }
        },
        isEmpty: function (o) {
            return o === undefined || o === null || o === ""
        },
        _arrays: function (data) {
            var i, j, tmp, hasArrays, resKey = this.schema.outputResultsName, out = {}, results;
            results = this._setResKey(resKey, out);
            if (this.isObjEmpty(results) && $.type(results) !== "array") {
                results = [];
                out = results
            }
            try {
                if (data.length > 0) {
                    hasArrays = $.type(data[0]) === "array"
                }
                for (i = 0; i < data.length; i++) {
                    if (data[i] === undefined) {
                        continue
                    }
                    results.push({});
                    for (j = 0; j < this.schema.fields.length; j++) {
                        if (hasArrays) {
                            tmp = data[i][j]
                        } else {
                            tmp = data[i][this.schema.fields[j].name]
                        }
                        this._val(this.schema.fields[j], tmp, results, results.length - 1)
                    }
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingArrays + e.message)
            }
            return out
        },
        _json: function (data) {
            var i, j, root, resKey = this.schema.outputResultsName, out = {}, results;
            results = this._setResKey(resKey, out);
            if (this.isObjEmpty(results)) {
                results = [];
                out = results
            }
            try {
                if (data.Metadata && data.Metadata.timezoneOffset !== undefined && !isNaN(data.Metadata.timezoneOffset)) {
                    this._serverOffset = data.Metadata.timezoneOffset;
                    this._parser._serverOffset = this._serverOffset;
                    if (data.Metadata.timezoneOffsets) {
                        this._serverOffsets = data.Metadata.timezoneOffsets;
                        this._parser._serverOffsets = data.Metadata.timezoneOffsets
                    }
                } else {
                    this._parser._serverOffset = 0
                }
                if (!this.isEmpty(this.schema.searchField)) {
                    root = eval("data." + this.schema.searchField)
                }
                if (root === undefined || this.isEmpty(this.schema.searchField)) {
                    root = data
                }
                if (!root.length && $.type(root) === "object") {
                    root = [root]
                }
                if (root && root.length && root.length > 0) {
                    for (i = 0; i < root.length; i++) {
                        results[i] = {};
                        for (j = 0; j < this.schema.fields.length; j++) {
                            if (this.schema.fields[j].name !== "ig_pk") {
                                if (root[i][this.schema.fields[j].name] === undefined) {
                                    throw new Error($.ig.DataSourceLocale.locale.errorSchemaMismatch + this.schema.fields[j].name)
                                }
                                this._val(this.schema.fields[j], root[i][this.schema.fields[j].name], results, i, root)
                            }
                        }
                    }
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingJson + e.message)
            }
            return out
        },
        _xml: function (data, recursiveSF) {
            var i, j, root, resNode, item, resKey = this.schema.outputResultsName, out = {}, results, namespaced, sf, k, r, rc, len1, len2, o, carrysf, ireal = 0;
            o = window.ActiveXObject;
            results = this._setResKey(resKey, out);
            if (this.isObjEmpty(results)) {
                results = [];
                out = results
            }
            try {
                if (!this.isEmpty(this.schema.searchField)) {
                    namespaced = this._xmlHasNamespaces(data);
                    if (!namespaced) {
                        if (window.ActiveXObject === undefined) {
                            if (!recursiveSF || recursiveSF.length <= 0) {
                                root = data.evaluate(this.schema.searchField, data, null, XPathResult.ANY_TYPE, null)
                            } else {
                                root = data.evaluate(recursiveSF, data, null, XPathResult.ANY_TYPE, null)
                            }
                        } else {
                            root = data.selectNodes(this.schema.searchField)
                        }
                    } else {
                        if (this.schema.searchField.startsWith("//")) {
                            sf = this.schema.searchField.substring(2, this.schema.searchField.length)
                        } else {
                            sf = this.schema.searchField
                        }
                        root = this._findXmlRecordsRoot(data, sf)
                    }
                } else {
                    root = data
                }
                if (!namespaced) {
                    if (root && window.ActiveXObject !== undefined) {
                        for (i = 0; i < root.length; i++) {
                            item = root.item(i);
                            results[i] = {};
                            for (j = 0; j < this.schema.fields.length; j++) {
                                resNode = item.selectSingleNode(this.schema.fields[j].xpath);
                                if (resNode) {
                                    if (resNode.nodeType === 1 && this.schema.childDataProperty && resNode.nodeName === this.schema.childDataProperty) {
                                        this.schema.searchField = this.schema.childDataProperty;
                                        results[i][resNode.nodeName] = this._xml(item)
                                    } else {
                                        this._val(this.schema.fields[j], resNode.text, results, i)
                                    }
                                } else {
                                    results[i][this.schema.fields[j].name] = ""
                                }
                            }
                        }
                    } else {
                        if (root) {
                            i = 0;
                            item = root.iterateNext();
                            while (item) {
                                results[i] = {};
                                for (j = 0; j < this.schema.fields.length; j++) {
                                    resNode = data.evaluate(this.schema.fields[j].xpath, item, null, XPathResult.ANY_TYPE, null).iterateNext();
                                    if (resNode) {
                                        if (resNode.nodeType === 1 && this.schema.childDataProperty && (resNode.nodeName === this.schema.childDataProperty || resNode.nodeName === this.schema.seachField)) {
                                            if (!recursiveSF || recursiveSF.length <= 0) {
                                                carrysf = this.schema.searchField + "[" + (i + 1) + "]/" + this.schema.childDataProperty
                                            } else {
                                                carrysf = recursiveSF + "[" + (i + 1) + "]/" + this.schema.childDataProperty
                                            }
                                            results[i][this.schema.childDataProperty] = this._xml(data, carrysf)
                                        } else {
                                            this._val(this.schema.fields[j], resNode.textContent, results, i)
                                        }
                                    } else {
                                        results[i][this.schema.fields[j].name] = ""
                                    }
                                }
                                i++;
                                item = root.iterateNext()
                            }
                        }
                    }
                } else {
                    len1 = root.childNodes.length;
                    ireal = 0;
                    for (i = 0; i < len1; i++) {
                        r = root.childNodes[i];
                        results.push({});
                        for (j = 0; j < this.schema.fields.length; j++) {
                            len2 = r.childNodes.length;
                            for (k = 0; k < len2; k++) {
                                rc = r.childNodes[k];
                                if (this.schema.fields[j].name === (o === undefined ? rc.localName : rc.baseName)) {
                                    this._val(this.schema.fields[j], o === undefined ? rc.textContent : rc.text, results, ireal);
                                    break
                                }
                            }
                        }
                        if ($.isEmptyObject(results[ireal])) {
                            results.pop()
                        } else {
                            ireal++
                        }
                    }
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingXml + e.message)
            }
            return out
        },
        _findXmlRecordsRoot: function (data, field) {
            var i, len, r, o, ret;
            o = window.ActiveXObject;
            if ((o === undefined ? data.localName : data.baseName) === field) {
                ret = data.parentNode
            } else {
                if (data && data.childNodes && data.childNodes.length > 0) {
                    len = data.childNodes.length;
                    for (i = 0; i < len; i++) {
                        r = data.childNodes[i];
                        if (r.childNodes && r.childNodes.length > 0) {
                            ret = this._findXmlRecordsRoot(r, field)
                        }
                    }
                }
            }
            return ret
        },
        _xmlHasNamespaces: function (data) {
            var i, ns, r, len, fc;
            if (data.childNodes && data.childNodes.length && data.childNodes.length > 0) {
                len = data.childNodes.length;
                for (i = 0; i < len; i++) {
                    r = data.childNodes[i];
                    if (!r) {
                        return false
                    }
                    ns = r.namespaceURI;
                    if (ns !== "" && ns !== undefined && ns !== null) {
                        return true
                    }
                }
                if (r && r.childNodes && r.childNodes.length > 0) {
                    fc = r.childNodes[0];
                    if (!fc) {
                        return false
                    }
                    ns = fc.namespaceURI;
                    return (ns !== "" && ns !== undefined && ns !== null)
                }
            }
            return false
        },
        _table: function (data) {
            var i, j, r, tbody, rows, resKey = this.schema.outputResultsName, out = {}, results;
            tbody = $(data).find("tbody")[0];
            results = this._setResKey(resKey, out);
            if (this.isObjEmpty(results)) {
                results = [];
                out = results
            }
            try {
                if (tbody && tbody.nodeName && tbody.nodeName === "TBODY") {
                    rows = tbody.rows;
                    for (i = 0; i < rows.length; i++) {
                        r = rows[i];
                        results[i] = {};
                        for (j = 0; j < this.schema.fields.length; j++) {
                            this._val(this.schema.fields[j], r.cells[j].innerHTML, results, i)
                        }
                    }
                } else {
                    throw new Error($.ig.DataSourceLocale.locale.errorExpectedTbodyParameter)
                }
            } catch (e) {
                throw new Error($.ig.DataSourceLocale.locale.errorParsingHtmlTable + e.message)
            }
            return out
        },
        _list: function (data) {
            var parsedData, img, anchor, id, li, ul, self = this, d = $(data), text, i, header, descriptions, counts, jqmNS = "data-";
            if ($.mobile && $.mobile.ns) {
                jqmNS += $.mobile.ns
            }
            parsedData = [];
            if (d && (d.is("ul") || d.is("ol")) && d.children().length > 0) {
                d.children("li:not([" + jqmNS + 'role="itemTemplate"], [' + jqmNS + 'role="detailsTemplate"], [' + jqmNS + 'role="dividerTemplate"])').each(function (index) {
                    li = $(this);
                    img = li.children("img");
                    parsedData[index] = {};
                    if (self.schema.hasOwnProperty("primaryKey")) {
                        self._val(self.schema.primaryKey, li.index(), parsedData, index)
                    }
                    if (self.schema.hasOwnProperty("isDivider")) {
                        self._val(self.schema.isDivider, li.attr(jqmNS + "role") === "list-divider", parsedData, index)
                    }
                    if (img.length > 0 && img.attr("src")) {
                        if (self.schema.hasOwnProperty("imageUrl")) {
                            self._val(self.schema.imageUrl, img.attr("src"), parsedData, index)
                        }
                    }
                    anchor = li.children("a");
                    if (anchor.length > 0) {
                        text = anchor.html();
                        if (anchor.attr("href")) {
                            if (self.schema.hasOwnProperty("navigateUrl")) {
                                self._val(self.schema.navigateUrl, anchor.attr("href"), parsedData, index)
                            }
                        }
                        if (anchor.attr("target")) {
                            if (self.schema.hasOwnProperty("target")) {
                                self._val(self.schema.target, anchor.attr("target"), parsedData, index)
                            }
                        }
                        if (img.length === 0) {
                            img = anchor.children("img");
                            if (img.length > 0) {
                                img.each(function () {
                                    if (this.outerHTML) {
                                        text = text.replace(this.outerHTML, "")
                                    } else {
                                        text = text.replace($("<div>").append(this).html(), "")
                                    }
                                })
                            }
                            if (img.length > 0 && img.attr("src")) {
                                if (self.schema.hasOwnProperty("imageUrl")) {
                                    self._val(self.schema.imageUrl, img.attr("src"), parsedData, index)
                                }
                            }
                        }
                    } else {
                        text = "";
                        for (i = 0; i < li[0].childNodes.length; i++) {
                            if (li[0].childNodes[i].nodeType === 3 && li[0].childNodes[i].data) {
                                text += $.trim(li[0].childNodes[i].data)
                            }
                        }
                    }
                    if (self.schema.hasOwnProperty("header")) {
                        header = li.children("h1, h2, h3, h4, h5, h6");
                        if (header.length === 0 && anchor.length > 0) {
                            header = anchor.children("h1, h2, h3, h4, h5, h6")
                        }
                        if (header.length > 0) {
                            self._val(self.schema.header, header.text(), parsedData, index);
                            header.each(function () {
                                if (this.outerHTML) {
                                    text = text.replace(this.outerHTML, "")
                                } else {
                                    text = text.replace($("<div>").append(this).html(), "")
                                }
                            })
                        }
                    }
                    if (self.schema.hasOwnProperty("description")) {
                        descriptions = li.children("p, dd");
                        if (descriptions.length === 0 && anchor.length > 0) {
                            descriptions = anchor.children("p, dd")
                        }
                        if (descriptions.length > 0) {
                            self._val(self.schema.description, descriptions.text(), parsedData, index);
                            descriptions.each(function () {
                                if (this.outerHTML) {
                                    text = text.replace(this.outerHTML, "")
                                } else {
                                    text = text.replace($("<div>").append(this).html(), "")
                                }
                            })
                        }
                    }
                    if (self.schema.hasOwnProperty("count")) {
                        counts = li.children("span.ui-li-count");
                        if (counts.length === 0 && anchor.length > 0) {
                            counts = anchor.children("span.ui-li-count")
                        }
                        if (counts.length > 0) {
                            self._val(self.schema.count, parseInt(counts.text(), 10), parsedData, index);
                            counts.each(function () {
                                if (this.outerHTML) {
                                    text = text.replace(this.outerHTML, "")
                                } else {
                                    text = text.replace($("<div>").append(this).html(), "")
                                }
                            })
                        }
                    }
                    if (self.schema.hasOwnProperty("text")) {
                        self._val(self.schema.text, text, parsedData, index)
                    }
                    id = li.attr("id");
                    if (id) {
                        if (self.schema.hasOwnProperty("value")) {
                            self._val(self.schema.value, id, parsedData, index)
                        }
                    }
                    ul = li.children("ul, ol");
                    if (ul.length > 0) {
                        if (self.schema.hasOwnProperty("childData") && self.schema.childData.hasOwnProperty("name")) {
                            parsedData[index][self.schema.childData.name] = self._list(ul)
                        }
                    }
                })
            }
            return parsedData
        },
        isObjEmpty: function (obj) {
            var prop;
            for (prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false
                }
            }
            return true
        },
        fields: function () {
            return this.schema.fields
        }
    });
    $.ig.RemoteDataSource = $.ig.RemoteDataSource || $.ig.DataSource.extend({
        init: function (options) {
            if (!options) {
                options = {}
            }
            options.type = "remoteUrl";
            this._super(options);
            return this
        }
    });
    $.ig.JSONDataSource = $.ig.JSONDataSource || $.ig.DataSource.extend({
        init: function (options) {
            if (!options) {
                options = {}
            }
            options.type = "json";
            this._super(options);
            return this
        }
    });
    $.ig.RESTDataSource = $.ig.RESTDataSource || $.ig.DataSource.extend({
        settings: {
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
                encodeRemoveInRequestUri: true,
                contentSerializer: null,
                contentType: "application/json; charset=utf-8"
            }
        },
        init: function (options) {
            if (!options) {
                options = {}
            }
            options.restSettings = $.extend(true, this.settings.restSettings, options.restSettings);
            this._createHttpHandlers();
            this._createLogVerbMapping();
            this._setLazyUrls();
            this._super(options);
            return this
        },
        saveChanges: function () {
            var log, verb, batchOps = {
                POST: [],
                PUT: [],
                DELETE: [],
                CELL: []
            }, i;
            this._asyncCallbackCount = 0;
            for (i = 0; i < this._accumulatedTransactionLog.length; i++) {
                log = this._accumulatedTransactionLog[i];
                verb = this._logVerbMap[log.type];
                if (log.type === "cell") {
                    batchOps.CELL.push(log)
                } else {
                    if (this._isBatch(verb) === true) {
                        batchOps[verb].push(log)
                    } else {
                        this._asyncCallbackCount++;
                        this._saveSingleChange(verb, log)
                    }
                }
            }
            if (batchOps.CELL.length > 0) {
                this._saveAllCellChanges(batchOps.CELL)
            }
            if (batchOps.POST.length > 0) {
                this._asyncCallbackCount++;
                this._saveAllCreateChanges(batchOps.POST)
            }
            if (batchOps.PUT.length > 0) {
                this._asyncCallbackCount++;
                this._saveAllUpdateChanges(batchOps.PUT)
            }
            if (batchOps.DELETE.length > 0) {
                this._asyncCallbackCount++;
                this._saveAllDeleteChanges(batchOps.DELETE)
            }
        },
        _saveSingleChange: function (verb, change) {
            var data, url;
            data = (verb === "POST" || verb === "PUT") ? change.row : null;
            url = this._getProperUrl(verb, false, (verb === "DELETE" || verb === "PUT") ? change.rowId : undefined);
            this._call(verb, url, data)
        },
        _saveAllCellChanges: function (cellLogs) {
            var i, combined = {}, rowLogs = [], cl;
            for (i = 0; i < cellLogs.length; i++) {
                cl = cellLogs[i];
                if (combined[cl.rowId] === undefined) {
                    combined[cl.rowId] = {};
                    combined[cl.rowId].row = this.findRecordByKey(cl.rowId)
                }
                combined[cl.rowId].row[cl.col] = cl.value
            }
            $.each(combined, function (key, value) {
                value.rowId = key;
                rowLogs.push(value)
            });
            if (this._isBatch("PUT") === true) {
                this._asyncCallbackCount++;
                this._saveAllUpdateChanges(rowLogs)
            } else {
                for (i = 0; i < rowLogs.length; i++) {
                    this._asyncCallbackCount++;
                    this._saveSingleChange("PUT", rowLogs[i])
                }
            }
        },
        _saveAllCreateChanges: function (createLogs) {
            var data = [], i;
            for (i = 0; i < createLogs.length; i++) {
                data.push(createLogs[i].row)
            }
            this._call("POST", this._getProperUrl("POST", true), data)
        },
        _saveAllUpdateChanges: function (updateLogs) {
            var data = [], urlParams = "?", i;
            for (i = 0; i < updateLogs.length; i++) {
                data.push(updateLogs[i].row);
                urlParams += "index=" + updateLogs[i].rowId + (i !== updateLogs.length - 1 ? "&" : "")
            }
            this._call("PUT", this._getProperUrl("PUT", true) + urlParams, data)
        },
        _saveAllDeleteChanges: function (deleteLogs) {
            var urlParams = "", i, data = null;
            if (this.settings.restSettings.encodeRemoveInRequestUri === true) {
                urlParams = "?";
                for (i = 0; i < deleteLogs.length; i++) {
                    urlParams += "index=" + deleteLogs[i].rowId + (i !== deleteLogs.length - 1 ? "&" : "")
                }
            } else {
                data = [];
                for (i = 0; i < deleteLogs.length; i++) {
                    data.push(deleteLogs[i].rowId)
                }
            }
            this._call("DELETE", this._getProperUrl("DELETE", true) + urlParams, data)
        },
        _createHttpHandlers: function () {
            this._okHandler = $.proxy(this._responseOk, this);
            this._createdHandler = $.proxy(this._responseCreated, this);
            this._noContentHandler = $.proxy(this._responseNoContent, this);
            this._httpHandlers = {
                POST: {
                    "201": this._createdHandler
                },
                PUT: {
                    "200": this._okHandler,
                    "201": this._createdHandler,
                    "204": this._noContentHandler
                },
                DELETE: {
                    "200": this._okHandler,
                    "204": this._noContentHandler
                }
            }
        },
        _createLogVerbMapping: function () {
            this._logVerbMap = {
                newrow: "POST",
                row: "PUT",
                deleterow: "DELETE",
                cell: "PUT"
            }
        },
        _setLazyUrls: function () {
            var rs = this.settings.restSettings, tempUrl = null, tempTmpl = null;
            $.each(rs, function (key, value) {
                if (value) {
                    if (value.url) {
                        tempUrl = value.url
                    }
                    if (value.template) {
                        tempTmpl = value.template
                    }
                }
            });
            $.each(rs, function (key, value) {
                if (value) {
                    if (value.url !== undefined && value.url === null) {
                        value.url = tempUrl
                    }
                    if (value.template !== undefined && value.template === null) {
                        value.template = tempTmpl
                    }
                }
            });
            this._putUrl = rs.update.url;
            this._putTmpl = rs.update.template;
            this._postUrl = rs.create.url;
            this._postTmpl = rs.create.template;
            this._deleteUrl = rs.remove.url;
            this._deleteTmpl = rs.remove.template
        },
        _getProperUrl: function (verb, batch, id) {
            var vL = verb.toLowerCase(), url = this["_" + vL + "Url"];
            if (url && url.length > 0 && url.substr(url.length - 1) !== "/") {
                url += "/"
            }
            if (!batch || batch === false) {
                if (this["_" + vL + "Tmpl"] !== null) {
                    url = this["_" + vL + "Tmpl"];
                    if (id) {
                        url = url.replace("${id}", id)
                    }
                } else {
                    if (id) {
                        url += id
                    }
                }
            }
            return url
        },
        _responseOk: function (data, textStatus, jqXHR) {
            this._asyncCallbackCount--;
            if (this._asyncCallbackCount === 0) {
                this._saveChangesSuccess({
                    Success: textStatus === "success"
                }, textStatus, jqXHR)
            }
        },
        _responseCreated: function (data, textStatus, jqXHR) {
            this._asyncCallbackCount--;
            if (this._asyncCallbackCount === 0) {
                this._saveChangesSuccess({
                    Success: textStatus === "success"
                }, textStatus, jqXHR)
            }
        },
        _responseNoContent: function (data, textStatus, jqXHR) {
            this._asyncCallbackCount--;
            if (this._asyncCallbackCount === 0) {
                this._saveChangesSuccess({
                    Success: textStatus === "success"
                }, textStatus, jqXHR)
            }
        },
        _isBatch: function (verb) {
            switch (verb) {
                case"POST":
                    return this.settings.restSettings.create.batch;
                case"PUT":
                    return this.settings.restSettings.update.batch;
                case"DELETE":
                    return this.settings.restSettings.remove.batch;
                default:
                    return false
            }
        },
        _call: function (verb, url, data) {
            var dataString = this.settings.restSettings.contentSerializer !== null ? this.settings.restSettings.contentSerializer(data) : JSON.stringify(data);
            $.ajax({
                type: verb,
                url: url,
                data: dataString,
                statusCode: this._httpHandlers[verb],
                contentType: this.settings.restSettings.contentType,
                cache: false,
                processData: true
            })
        }
    });
    $.ig.JSONPDataSource = $.ig.JSONPDataSource || $.ig.DataSource.extend({
        init: function (options) {
            if (!options) {
                options = {}
            }
            options.responseDataType = "jsonp";
            this._super(options);
            return this
        }
    });
    $.ig.XmlDataSource = $.ig.XmlDataSource || $.ig.DataSource.extend({
        init: function (options) {
            if (!options) {
                options = {}
            }
            options.type = "xml";
            this._super(options);
            return this
        }
    });
    $.ig.FunctionDataSource = $.ig.FunctionDataSource || $.ig.DataSource.extend({
        init: function (options) {
            if (!options) {
                options = {}
            }
            options.type = "function";
            this._super(options);
            return this
        }
    });
    $.ig.HtmlTableDataSource = $.ig.HtmlTableDataSource || $.ig.DataSource.extend({
        init: function (options) {
            if (!options) {
                options = {}
            }
            options.type = "htmlTableDom";
            this._super(options);
            return this
        }
    });
    $.ig.ArrayDataSource = $.ig.ArrayDataSource || $.ig.DataSource.extend({
        init: function (options) {
            if (!options) {
                options = {}
            }
            options.type = "array";
            this._super(options);
            return this
        }
    });
    $.ig.MashupDataSource = $.ig.MashupDataSource || $.ig.DataSource.extend({
        mashupSettings: {
            ignorePartialRecords: false,
            dataSource: []
        },
        init: function (options) {
            this._super(options);
            if (options) {
                this.settings = $.extend(true, {}, $.ig.DataSource.prototype.settings, options);
                this.settings = $.extend(true, {}, $.ig.MashupDataSource.prototype.mashupSettings, this.settings)
            }
            this._sources = [];
            this._dataBindingComplete = false;
            this._sourcesStatus = [];
            this._hashedDataViews = [];
            return this
        },
        _checkDataBindingComplete: function (status, msg, ownerDs) {
            var i, j, k, hasPrimaryKeys = true, totalLength = 0, data = [], d, rindex, keyVal, prop;
            this._dataBindingComplete = true;
            for (i = 0; i < this._sources.length; i++) {
                if (this._sources[i] === ownerDs) {
                    this._sourcesStatus[i] = 1
                }
                if (this._sourcesStatus[i] === 0) {
                    this._dataBindingComplete = false
                }
            }
            if (this._dataBindingComplete) {
                for (i = 0; i < this._sources.length; i++) {
                    if (this._sources[i].settings.primaryKey === "" || this._sources[i].settings.primaryKey === null || this._sources[i].settings.primaryKey === undefined) {
                        hasPrimaryKeys = false;
                        break
                    }
                }
                totalLength = this._sources[0].dataView().length;
                for (i = 0; i < this._sources.length; i++) {
                    totalLength = this.settings.ignorePartialRecords ? (this._sources[i].dataView().length < totalLength ? this._sources[i].dataView().length : totalLength) : (this._sources[i].dataView().length > totalLength ? this._sources[i].dataView().length : totalLength)
                }
                if (hasPrimaryKeys) {
                    for (i = 0; i < this._sources.length; i++) {
                        this._hashedDataViews[i] = {};
                        for (j = 0; j < this._sources[i].dataView().length; j++) {
                            this._hashedDataViews[i][this._sources[i].dataView()[j][this._sources[i].settings.primaryKey]] = this._sources[i].dataView()[j]
                        }
                    }
                    for (i = 0; i < totalLength; i++) {
                        data[i] = {};
                        for (j = 0; j < this._sources.length; j++) {
                            if (this._sources[j].dataView().length > i) {
                                keyVal = this._sources[j].dataView()[i][this._sources[j].settings.primaryKey];
                                data[i] = $.extend(true, {}, data[i], this._hashedDataViews[j][keyVal])
                            } else {
                                data[i] = $.extend(true, {}, data[i], {})
                            }
                        }
                    }
                } else {
                    for (i = 0; i < totalLength; i++) {
                        data[i] = {};
                        for (j = 0; j < this._sources.length; j++) {
                            d = this._sources[j];
                            if (d.dataView()[0].length) {
                                for (k = 0; k < d.dataView()[0].length; k++) {
                                    rindex += k;
                                    if (d.schema() && d.schema().fields().length > 0) {
                                        data[i][d.schema().fields()[k]] = i >= d.dataView().length ? "" : d.dataView()[i][d.schema().fields()[k]]
                                    } else {
                                        data[i][rindex] = i >= d.dataView().length ? "" : d.dataView()[i][k]
                                    }
                                }
                            } else {
                                for (prop in d.dataView()[i]) {
                                    if (d.dataView()[i].hasOwnProperty(prop)) {
                                        data[i][prop] = i >= d.dataView().length ? "" : d.dataView()[i][prop]
                                    }
                                }
                            }
                        }
                        rindex = 0
                    }
                }
                this.settings.dataSource = data;
                this.settings.type = "array";
                this._runtimeType = this.analyzeDataSource();
                this.dataBind()
            }
        },
        dataBind: function () {
            var i, ds = this.settings.dataSource;
            if (this._dataBindingComplete) {
                this._dataBindingComplete = false;
                this._super()
            } else {
                this._dataBindingComplete = false;
                for (i = 0; i < ds.length; i++) {
                    if (ds[i] instanceof $.ig.DataSource) {
                        this._sources[i] = ds[i]
                    } else {
                        if (ds[i].hasOwnProperty("dataSource") && ds[i].dataSource instanceof $.ig.DataSource) {
                            this._sources[i] = ds[i].dataSource
                        } else {
                            this._sources[i] = new $.ig.DataSource(ds[i])
                        }
                    }
                    this._sources[i].settings.callee = this;
                    this._sources[i].settings.callback = this._checkDataBindingComplete;
                    this._sourcesStatus[i] = 0
                }
                for (i = 0; i < ds.length; i++) {
                    this._sources[i].dataBind()
                }
            }
            return this
        }
    });
    $.ig.HierarchicalDataSource = $.ig.HierarchicalDataSource || Class.extend({
        settings: {
            autogenerate: false,
            initialDataBindDepth: 0,
            maxDataBindDepth: -1,
            defaultChildrenDataProperty: "children",
            callback: null,
            callee: null,
            data: [],
            dataSource: null,
            dataBinding: null,
            dataBound: null,
            type: "unknown",
            responseDataType: null,
            responseContentType: null,
            localSchemaTransform: true,
            urlParamsEncoding: null,
            urlParamsEncoded: null,
            odata: false,
            paging: {},
            sorting: {},
            filtering: {},
            schema: []
        },
        init: function (options) {
            if (options) {
                this.__ds = options.dataSource;
                options.dataSource = null;
                this.settings = $.extend(true, {}, $.ig.HierarchicalDataSource.prototype.settings, options);
                this.settings.dataSource = this.__ds
            }
            this._rootopts = this.settings;
            this._rootopts.urlParamsEncoded = $.proxy(this._encodeHierarchicalUrlParams, this);
            if (this._rootopts.dataSource instanceof $.ig.DataSource) {
                this._rootds = this._rootopts.dataSource;
                this._rootds.settings.urlParamsEncoded = this.settings.urlParamsEncoded;
                this._rootds.settings.odata = this.settings.odata;
                if (!this._rootds.settings.schema) {
                    this._rootds.settings.schema = {}
                }
                this._rootds.settings.schema.layouts = this.settings.schema.layouts
            } else {
                if ($.type(this._rootopts.dataSource) === "string" && this._rootopts.dataSource.indexOf("$callback=?") !== -1) {
                    this._rootds = new $.ig.JSONPDataSource(this._rootopts)
                } else {
                    if (this._rootopts.restSettings && (this._rootopts.restSettings.update.url !== null || this._rootopts.restSettings.update.template !== null || this._rootopts.restSettings.create.url !== null || this._rootopts.restSettings.create.template !== null || this._rootopts.restSettings.remove.url !== null || this._rootopts.restSettings.remove.template !== null)) {
                        this._rootds = new $.ig.RESTDataSource(this._rootopts)
                    } else {
                        this._rootds = new $.ig.DataSource(this._rootopts)
                    }
                }
            }
        },
        dataBind: function (callback, callee) {
            this._rootds.dataBind(callback, callee)
        },
        root: function () {
            if (!this._rootds) {
                this._rootds = new $.ig.DataSource(this._rootopts)
            }
            return this._rootds
        },
        dataAt: function (path, keyspath) {
            var data = this.root().data(), paths = path.split("/"), kp = keyspath.split("/"), k, i, j, cd = null, ckey = this.settings.primaryKey, ckeyval = "", ckeys = [], ckeyvals = [], match = false;
            for (i = 0; i < paths.length; i++) {
                ckey = paths[i].split(":")[0];
                ckeyval = paths[i].split(":")[1];
                if (paths[i] !== "") {
                    for (j = 0; data && j < data.length; j++) {
                        if (ckey && ckey.indexOf(",") !== -1) {
                            ckeys = ckey.split(",");
                            ckeyvals = ckeyval.split(",");
                            for (k = 0; k < ckeys.length; k++) {
                                if (!data[j][ckeys[k]].charAt && ckeyvals[k].charAt) {
                                    ckeyvals[k] = parseInt(ckeyvals[k], 10)
                                }
                                match = (data[j][ckeys[k]] === ckeyvals[k]);
                                if (!match) {
                                    break
                                }
                            }
                        } else {
                            if (data[j][ckey] !== undefined && !data[j][ckey].charAt && ckeyval.charAt) {
                                ckeyval = parseInt(ckeyval, 10)
                            }
                            match = (data[j][ckey] === ckeyval)
                        }
                        if (match) {
                            cd = data[j][kp[i]];
                            if (paths.length > 1 && i < paths.length - 1 && this.root().schema().schema.searchField && $.type(cd) !== "array" && cd[this.root().schema().schema.searchField]) {
                                cd = cd[this.root().schema().schema.searchField]
                            }
                            break
                        }
                    }
                    data = cd
                }
            }
            return cd
        },
        _encodeUrlPath: function (rowid, name) {
            return "path=" + rowid + "&layout=" + name
        },
        _encodeHierarchicalUrlParams: function (owner, args) {
            var expand = "", layouts = this.settings.schema.layouts, i, j, tmp, name, lc = 0;
            if (this.settings.odata && this.settings.initialDataBindDepth !== 0) {
                i = j = 0;
                for (name in layouts) {
                    if (layouts.hasOwnProperty(name)) {
                        lc++
                    }
                }
                lc++;
                for (name in layouts) {
                    if (layouts.hasOwnProperty(name)) {
                        if ($.type(layouts[name]) !== "function") {
                            if (name.startsWith("/")) {
                                name = name.substring(1, name.length - 1)
                            }
                            tmp = name.split("/");
                            for (i = 0; i < tmp.length; i++) {
                                tmp[i] = tmp[i].substring(0, tmp[i].indexOf(":"))
                            }
                            tmp = tmp.join("/");
                            if (j !== 0 && j !== lc - 1) {
                                expand += ","
                            }
                            expand += tmp;
                            j++
                        }
                    }
                }
                args.selectParams.$expand = expand
            } else {
                args.selectParams.dbdepth = this.settings.initialDataBindDepth
            }
        }
    });
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("ig.datasource", ["ig.util"], function () {
            return $.ig.DataSource
        })
    }
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