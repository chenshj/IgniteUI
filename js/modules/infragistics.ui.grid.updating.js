﻿/*
 * Infragistics.Web.ClientUI Grid Editing 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 * jquery-1.4.4.js
 * jquery.ui.core.js
 * jquery.ui.widget.js
 * ig.ui.grid.framework.js
 * ig.ui.editors.js
 * ig.ui.validator.js
 * ig.ui.combo.js
 * ig.ui.rating.js
 * ig.ui.shared.js
 * ig.dataSource.js
 * ig.util.js
 */
(function (a) {

    var b = function (i, h) {
            return i === null || i === undefined || (h && isNaN(i))
        },

        d = function (h, j) {
            j = h ? h.css(j) : 0;
            try {
                j = parseInt(j, 10)
            } catch (i) {
            }
            return (j && !isNaN(j)) ? j : 0
        },

        c = function (h, i, j, k) {
            h = h.data("igEditorFilter");
            return h ? h.options.provider[i](j, k) : null
        },

        e = function () {
            return new Date().getTime()
        },

        g = function (h) {
            var i = a.ig.GridUpdating && a.ig.GridUpdating.locale ? a.ig.GridUpdating.locale[h] : h;
            throw new Error(i || h)
        },

        f = function (h) {
            if (h && h !== 1) {
                try {
                    h.preventDefault();
                    h.stopPropagation()
                } catch (i) {
                }
            }
        };

    a.widget("ui.igGridUpdating", {

        grid: null,

        options: {
            columnSettings: [
                {
                    columnKey: null,
                    editorType: null,
                    editorProvider: null,
                    editorOptions: null,
                    required: null,
                    readOnly: null,
                    validation: null,
                    defaultValue: null
                }
            ],
            editMode: "row",
            showReadonlyEditors: true,
            enableDeleteRow: true,
            enableAddRow: true,
            validation: false,
            doneLabel: null,
            doneTooltip: null,
            cancelLabel: null,
            cancelTooltip: null,
            addRowLabel: null,
            addRowTooltip: null,
            deleteRowLabel: null,
            deleteRowTooltip: null,
            showDoneCancelButtons: true,
            enableDataDirtyException: true,
            rowEditDialogMaxHeight: 150,
            rowEditDialogFieldWidth: 140,
            rowEditDialogWidth: 370,
            rowEditDialogHeight: "350",
            startEditTriggers: "click,F2,enter",
            rowEditDialogContainment: "owner",
            rowEditDialogOkCancelButtonWidth: 120,
            rowEditDialogRowTemplate: "<tr><td>${headerText}</td><td data-key='${dataKey}'><input /></td></tr>",
            rowEditDialogRowTemplateID: null,
            horizontalMoveOnEnter: false,
            excelNavigationMode: false,
            labels: {
                rowEditDialogCaptionLabel: a.ig.GridUpdating.locale.rowEditDialogCaptionLabel,
                cancelLabel: a.ig.GridUpdating.locale.cancelLabel,
                doneLabel: a.ig.GridUpdating.locale.doneLabel
            }
        },

        events: {
            editRowStarting: null,
            editRowStarted: null,
            editRowEnding: null,
            editRowEnded: null,
            editCellStarting: null,
            editCellStarted: null,
            editCellEnding: null,
            editCellEnded: null,
            rowAdding: null,
            rowAdded: null,
            rowDeleting: null,
            rowDeleted: null,
            dataDirty: null,
            generatePrimaryKeyValue: null,
            rowEditDialogOpening: null,
            rowEditDialogOpened: null,
            rowEditDialogContentsRendering: null,
            rowEditDialogContentsRendered: null,
            rowEditDialogClosing: null,
            rowEditDialogClosed: null
        },

        css: {
            buttonContainer: "ui-iggrid-buttoncontainer ui-widget-content ui-corner-all",
            button: "ui-iggrid-button ui-state-default ui-corner-all",
            doneButton: "ui-iggrid-donebutton ui-priority-primary ui-corner-all",
            cancelButton: "ui-iggrid-cancelbutton ui-corner-all",
            deleteButton: "ui-iggrid-deletebutton ui-state-default ui-corner-all",
            buttonHover: "ui-iggrid-buttonhover ui-state-hover",
            buttonDisabled: "ui-iggrid-buttondisabled ui-state-disabled",
            buttonActive: "ui-iggrid-buttonactive ui-state-active",
            doneIcon: "ui-iggrid-doneicon ui-icon ui-icon-check",
            cancelIcon: "ui-iggrid-cancelicon ui-icon ui-icon-cancel",
            buttonIconOnly: "ui-iggrid-button-icon-only",
            editingCell: "ui-iggrid-editingcell",
            addRow: "ui-iggrid-addrow ui-widget-header",
            addRowHover: "ui-iggrid-addrowhover ui-state-hover",
            addRowActive: "ui-iggrid-addrowactive ui-state-active",
            addRowIcon: "ui-iggrid-addrowicon ui-icon ui-icon-circle-plus",
            deleteIcon: "ui-iggrid-deleteicon ui-icon ui-icon-circle-close",
            editor: "ui-iggrid-editor",
            rowEditDialogHeaderCaption: "ui-dialog-titlebar ui-iggrid-filterdialogcaption ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",
            rowEditDialogHeaderCaptionTitle: "ui-dialog-title",
            rowEditDialog: "ui-dialog ui-draggable ui-resizable ui-iggrid-dialog ui-widget ui-widget-content ui-corner-all",
            blockArea: "ui-widget-overlay ui-iggrid-blockarea",
            rowEditDialogOkCancelButton: "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix ui-iggrid-filterdialogokcancelbuttoncontainer",
            rowEditDialogTable: "ui-iggrid-filtertable ui-helper-reset"
        },

        setCellValue: function (i, h, k, j) {
            if (!b(i) && typeof h === "string") {
                j = j || this.grid.element.children("tbody").find('[data-id="' + i + '"]')[0] || 1;
                this._update(i, j, k, h)
            }
        },

        updateRow: function (h, j, i) {
            if (!b(h) && j) {
                i = i || this.grid.element.children("tbody").find('[data-id="' + h + '"]')[0] || 1;
                this._update(h, i, j)
            }
        },

        addRow: function (h) {
            this._update(h || {})
        },

        deleteRow: function (h, i) {
            if (!b(h)) {
                i = i || this.grid.element.children("tbody").find('[data-id="' + h + '"]')[0] || 1;
                this._update(h, i)
            }
        },

        startEdit: function (j, h, i) {
            var k = this.grid.cellAt(h, j), l;
            if (this.options.editMode === "rowedittemplate") {
                l = this.grid.rowAt(j);
                return this._startEditRowTemplate(i, a(l))
            }
            if (k) {
                k = this._startEdit(a(k), i || 1, 1) === 1
            }
            return !!k
        },

        startAddRowEdit: function (h) {
            var i = this._newTR;
            if (this.options.editMode === "rowedittemplate") {
                return this._startEditRowTemplate(h)
            }
            if (i) {
                i = this._startEdit(a(i.children()[0]), h || 1, 1, 1, this._addTR.children()[0].offsetHeight) === 1
            }
            return !!i
        },

        endEdit: function (i, h) {
            if (this.options.editMode === "rowedittemplate") {
                return i ? this._rowEditDialogDoUpdate(h) : this._closeRowEditDialog(h)
            }
            return !this._endEdit(h || 1, i)
        },

        findInvalid: function () {
            var i, h = this._editors;
            for (i in h) {
                if (h.hasOwnProperty(i) && h[i] && !c(h[i], "isValid")) {
                    return i
                }
            }
            return null
        },

        isEditing: function () {
            return !!this._tds
        },

        editorForKey: function (i) {
            var h = this._editors;
            return h ? h[i] : null
        },

        editorForCell: function (l, h) {
            var i, k = this._key(l), j = this._editors;
            if (!j) {
                j = this._editors = {}
            }
            i = j[k];
            if (!i && h) {
                i = j[k] = this._createEditor(l, k)
            }
            return i
        },

        _setOption: function (h, j) {
            var i = this.options;
            if (i[h] === j) {
                return this
            }
            this._endEdit();
            this._doButtons(2);
            i[h] = j;
            if (h.indexOf("ddRow") > 0) {
                this._headerRendered();
                this.grid._initializeHeights()
            }
            return this
        },

        _fire: function (j, i, h) {
            if (h && i && i !== 1) {
                h.owner = this;
                return this._trigger(j, i, h)
            }
            return 1
        },

        _loc: function (h, i) {
            if (b(i = this.options[h += i ? "Tooltip" : "Label"])) {
                i = a.ig.GridUpdating && a.ig.GridUpdating.locale ? a.ig.GridUpdating.locale[h] : null
            }
            return i || ""
        },

        _div: function () {
            return this.grid.container()
        },

        _hscroll: function (i) {
            if (!this._hscr1) {
                var h = this.grid.element;
                this._hscr1 = a("#" + h[0].id + "_hscroller");
                this._hscr2 = this._hscr1.length ? this._hscr1 : h.parent()
            }
            return i ? this._hscr1 : this._hscr2
        },

        _groupedColumnsChanged: function (h) {
            this._groupCols = h.groupedColumns.length;
            this._hidingFinishing();
            this._headerRendered()
        },

        _headerRendered: function (p) {
            var w, t, v, h, k, z, x, r = this, m = r.css, u = r._addTrShift, l = 0, y = r._addTR, s = r.options, n = r.grid, j = n.options.columns, q = j.length;
            if (!s.enableAddRow || p === 1) {
                if (y) {
                    y.remove();
                    r._newTR.remove();
                    r._hierTD = r._newTR = r._addTR = null
                }
                return
            }
            z = r._loc("addRow") || "&nbsp;";
            x = r._loc("addRow", 1);
            if (y) {
                y.find(".anr_t").html(z);
                y.find(".ui-iggrid-addrow").attr("title", x);
                y.find(".anr_i").css("display", "inline-block")
            }
            w = r._div().find("thead");
            if (!w || y) {
                return
            }
            t = s.showPlusIcon;
            y = r._addTR = a("<tr />").addClass(m.addRow).attr("data-skip", "true").appendTo(w);
            if (u) {
                for (p = 0; p < u.length; p++) {
                    a(u[p]).appendTo(y)
                }
            } else {
                r._hierOn = e();
                n._headerInit(y);
                r._hierTD = y.children().length
            }
            for (p = 0; p < q; p++) {
                if (!j[p].hidden) {
                    l++
                }
            }
            if (r._groupCols) {
                r._groupTD1 = a("<td />").addClass("ui-iggrid-rowselector-header").attr("data-skip", "true").appendTo(y)
            }
            v = a('<td colspan="' + l + '"></td>').attr("title", x).addClass(m.addRow).appendTo(y);
            r._addLeft = d(v, "paddingLeft");
            a("<span />").css("display", "inline-block").addClass(m.addRowIcon).addClass("anr_i").appendTo(v);
            a("<span>" + z + "</span>").addClass("anr_t").css("outline", 0).attr("tabIndex", r._ti + 1).focus(function (i) {
                r._onEvt(i, 5)
            }).blur(function (i) {
                    r._onEvt(i, 6)
                }).appendTo(v);
            y = r._newTR = a("<tr />").attr("data-skip", "true").appendTo(w).hide();
            u = this._newTrShift;
            if (u) {
                for (p = 0; p < u.length; p++) {
                    a(u[p]).appendTo(y)
                }
            } else {
                n._headerInit(y)
            }
            if (r._groupCols) {
                r._groupTD2 = a("<td />").addClass("ui-iggrid-rowselector-header").attr("data-skip", "true").appendTo(y)
            }
            for (p = 0; p < q; p++) {
                h = j[p];
                if (!h.hidden) {
                    k = r._colSet(0, h ? h.key : null);
                    t = k && k.readOnly;
                    z = b(z = t ? k.defaultValue : null) ? "&nbsp;" : n._renderCell(z, h);
                    v = a("<td>" + z + "</td>").addClass(m.editingCell).appendTo(y);
                    if (t && h && h.key === n.options.primaryKey) {
                        r._tdAddPrime = v
                    }
                }
            }
        },

        _hierGridInDiv: function () {
            var h, m, n, j, k = 0, l = -1, o = this._newTR, p = this._addTR;
            m = o.parent().children();
            while (++l < m.length) {
                if (m[l] !== p[0] && m[l] !== o[0]) {
                    break
                }
            }
            if (l > m.length) {
                return
            }
            m = m[l].childNodes;
            n = m.length;
            for (l = 0; l < n; l++) {
                j = m[l];
                h = j.getAttribute("data-skip") ? j.className : null;
                if (h && (h.indexOf("-expand") >= 0 || h.indexOf("-rowselector") >= 0)) {
                    k++
                } else {
                    break
                }
            }
            m = o.children();
            n = m.length;
            for (l = 0; l < n; l++) {
                j = m[l];
                if (j.getAttribute("data-skip")) {
                    k--
                } else {
                    break
                }
            }
            while (k-- > 0) {
                this.grid._headerInit(o, null, true);
                this.grid._headerInit(p, null, true)
            }
        },

        _hierHeaderInit: function () {
            var h, j = this, k = j._hierOn, l = j._addTR;
            if (!l || !k || e() - k > 200) {
                return
            }
            if (j._hierTD) {
                setTimeout(function () {
                    j._hierGridInDiv()
                }, 0);
                setTimeout(function () {
                    j._hierGridInDiv()
                }, 200);
                return
            }
            h = l.children().length;
            j.grid._headerInit(l, null, true);
            j.grid._headerInit(j._newTR, null, true);
            j._hierTD = l.children().length - h
        },

        _dataRendered: function () {
            if (this._wasInit) {
                return
            }
            this._scrollDiv();
            this._div().bind(this._evts);
            this._wasInit = true
        },

        _findCell: function (h) {
            var k = 0, l = a(h), j = this.grid.element[0];
            if (!l.is("td")) {
                l = l.closest("td")
            }
            h = l;
            while (h && k++ < 5) {
                h = h.parent();
                if (h && h[0] === j) {
                    break
                }
            }
            return (k === 3 && this._col(l) >= 0 && this._row(l) >= 0) ? l : null
        },

        _td: function () {
            var h, j = this._tds;
            if (j) {
                for (h in j) {
                    if (j.hasOwnProperty(h) && j[h]) {
                        return j[h]
                    }
                }
            }
        },

        _row: function (h) {
            return h ? h.parent().index() : -1
        },

        _idForCol: function (j, m) {
            var k = -1, l = this._col(1), h = l ? l.length : 0;
            while ((h -= 1) >= 0) {
                if (l[h] < 0) {
                    continue
                }
                if (m === -2) {
                    return h
                }
                if (l[h] === j) {
                    if (m === 1) {
                        return k
                    }
                    if (m === -1) {
                        m = -2
                    } else {
                        break
                    }
                }
                k = h
            }
            return h
        },

        _isAdd: function (h) {
            return (h === 1) ? this._adding : (this._isSrc(this._addTR, h) || this._isSrc(this._newTR, h))
        },

        _col: function (p) {
            var o, m, j, l, k, h = this._isAdd(p), n = h ? this._mapAdd : this._map;
            if (!n) {
                o = this._colShift(p);
                n = [];
                l = k = -1;
                while (o-- > 0) {
                    n[k += 1] = -1
                }
                j = this.grid.options.columns;
                m = j.length;
                while ((l += 1) < m) {
                    if (j[l] && !j[l].hidden) {
                        n[k += 1] = l
                    }
                }
                if (h) {
                    this._mapAdd = n
                } else {
                    this._map = n
                }
            }
            if (p === 1) {
                return n
            }
            l = p.index() + (this.grid._startColIndex || 0);
            return (p && l < n.length) ? n[l] : -1
        },

        _colSet: function (l, k) {
            var j, h = this.options.columnSettings;
            if (!k) {
                k = this._key(l)
            }
            j = (h && k) ? h.length : 0;
            while (j-- > 0) {
                if (h[j].columnKey === k) {
                    return h[j]
                }
            }
        },

        _isSame: function (h, i) {
            return this._row(h) === this._row(i) && this._col(h) === this._col(i)
        },

        _gridCol: function (l, k) {
            var j = -1, h = this.grid.options.columns;
            while (++j < h.length) {
                if (h[j].key === l) {
                    return k ? j : h[j]
                }
            }
        },

        _prime: function (i) {
            var h = i.parent().attr("data-id");
            return b(h) ? this._row(i) : this._fixPrime(h)
        },

        _defVal: function (j, i) {
            var h;
            if (j) {
                h = this._colSet(null, j);
                h = h ? h.defaultValue : null;
                if (i && j === this.grid.options.primaryKey) {
                    h = this._defValue;
                    if (!h) {
                        h = {
                            value: h || this._addRowNum
                        };
                        this._fire("generatePrimaryKeyValue", this._evt || {}, h);
                        this._defValue = h = h.value
                    }
                }
            }
            return h
        },

        _addReadOnly: function (h) {
            var k, j, i = this.options.columnSettings, l = {};
            for (j in i) {
                if (i.hasOwnProperty(j)) {
                    k = i[j];
                    j = k.columnKey;
                    if (k.readOnly) {
                        if (!h) {
                            l[j] = this._getVal(this._row_, j)
                        } else {
                            if (!b(k = this._defVal(j, 1))) {
                                l[j] = k
                            }
                        }
                    }
                }
            }
            return l
        },

        _key: function (j) {
            var i = this.grid.options.columns, h = this._col(j);
            h = (i && h >= 0) ? i[h] : null;
            return h ? h.key : null
        },

        _equals: function (h, i) {
            return h === i || (h && i && h.getTime && i.getTime && h.getTime() === i.getTime())
        },

        _val: function (l, i, n) {
            var m, h = this._adding, k = this._row_, j = this._key(l);
            if (h) {
                m = this._defVal(j, n && b(n[j]))
            } else {
                m = this._getVal(k, j)
            }
            if (i) {
                if (h || !this._equals(m, i.value)) {
                    if (n) {
                        return i.value
                    }
                    this._update(k, l.parent()[0], i.value, j)
                }
                return undefined
            }
            return m
        },

        _colShift: function (m, n) {
            var j, h, k = this._cShift, l = this._cShiftAdd;
            if (!n && m) {
                n = m.parent()[0]
            }
            if (!n) {
                return (k < 0) ? 0 : k
            }
            h = this._isAdd(n);
            if (h) {
                if (l >= 0) {
                    return l
                }
            } else {
                if (k >= 0) {
                    return k
                }
            }
            n = n ? n.childNodes : null;
            if (!n) {
                return 0
            }
            k = 0;
            for (j = 0; j < n.length - 1; j++) {
                m = n[j].className;
                if ((m && (m.indexOf("-expandcolumn") >= 0 || m.indexOf("-rowselector") >= 0)) || n[j].getAttribute("data-skip")) {
                    k++
                } else {
                    break
                }
            }
            if (h) {
                this._cShiftAdd = k
            } else {
                this._cShift = k
            }
            return k
        },

        _cur: function (j, h) {
            return {
                tbl: j.parent().parent().parent(),
                row: h ? this._rowIndex : this._row(j),
                col: this._col(j)
            }
        },

        _nextTD: function (h, q, j) {
            var k, t, l, u, s, m, r = h.tbl.children("tbody")[0], o = r ? r.childNodes : 0, p = o ? o.length : 0, n = h.row;
            if (p < 1 || n < 0 || n >= p) {
                return
            }
            u = o[n];
            if (!u) {
                return
            }
            t = u.childNodes;
            m = this._col(1);
            l = t.length;
            if (q === "-tr1") {
                u = n - 1 < 0 ? p : n - 1
            } else {
                u = n + (q || 1)
            }
            k = this._idForCol(h.col, q);
            if (q && q !== "-tr1") {
                if (k >= 0) {
                    h.col = m[k];
                    s = t[k]
                }
                if (!s && j) {
                    if (u >= 0 && u < p) {
                        if (q > 0) {
                            k = (m[0] >= 0) ? 0 : 1
                        } else {
                            k = m.length;
                            while ((k -= 1) >= 0) {
                                if (m[k] >= 0) {
                                    break
                                }
                            }
                        }
                        if (k >= 0) {
                            h.col = m[k];
                            s = o[h.row = u].childNodes[k]
                        }
                    }
                }
            } else {
                s = (u < p) ? o[h.row = u].childNodes[k] : null
            }
            h.td = s ? a(s) : null;
            return s ? h : null
        },

        _nextEditor: function (k, m) {
            var i, h, l = null, j = this._editors;
            for (h in j) {
                if (j.hasOwnProperty(h)) {
                    if (m && k === h) {
                        return l
                    }
                    if (h) {
                        i = j[h];
                        if (i && i[0] && i[0].offsetWidth > 0) {
                            if (k === null) {
                                return i
                            }
                            l = i
                        }
                    }
                    if (k === h) {
                        k = null
                    }
                }
            }
        },

        _nextEdit: function (i, j) {
            var h, k = this._td();
            if (!k) {
                return
            }
            h = this._cur(k, true);
            while (this._nextTD(h, j, 1)) {
                if (this._startEdit(h.td, i, 1)) {
                    return
                }
            }
            this._endEdit(i, 1)
        },

        _createEditor: function (r, m) {
            var t, p, j, o = {}, n = this, l = n._gridCol(m) || {}, k = l.format, i = n.css.editor, u = n._xy, h = n._colSet(r, m), q = h ? h.editorProvider : null, s = n._tdBdrTop;
            if (h && h.readOnly) {
                return null
            }
            if (!u) {
                s = n._tdBdrTop = d(r, "borderTopWidth");
                t = a("<span />").addClass(i).prependTo(r);
                n._xy = u = {
                    x: d(t, "marginLeft"),
                    y: d(t, "marginTop")
                };
                u.dx = u.x + d(t, "marginRight");
                u.dy = u.y + d(t, "marginBottom");
                t.remove()
            }
            t = null;
            if (h) {
                o = h.editorOptions || o;
                p = o.validatorOptions;
                t = h.required;
                if (!p && (h.validation || t)) {
                    p = {}
                }
                if (t) {
                    p.required = o.required = true
                }
            }
            if (n.options.validation && !p) {
                p = {}
            }
            if (p) {
                if (!n.grid.element.igValidator) {
                    g("igValidatorException")
                }
                if (h) {
                    h.editorOptions = o
                }
                o.validatorOptions = p;
                p.bodyAsParent = false;
                p.keepFocus = 2;
                p.errorHidden = function () {
                    n._error = null;
                    if (n._butDone) {
                        n._butDone.removeClass(n.css.buttonDisabled)
                    }
                };
                p.errorShowing = function () {
                    if (!b(n._error) && n._error !== m) {
                        return false
                    }
                };
                p.errorShown = function (v, w) {
                    n._error = m;
                    if (n._butDone) {
                        n._butDone.addClass(n.css.buttonDisabled)
                    }
                    w = w.owner._lbl;
                    if (w) {
                        w.css("zIndex", 99999)
                    }
                    n._scrollTo(m)
                }
            }
            if (!q) {
                if (l.dataType === "bool" && (k === "checkbox" || (!k && n.grid.options.renderCheckboxes))) {
                    q = new a.ig.EditorProviderCheckbox()
                } else {
                    if (h && h.editorType === "combo") {
                        q = new a.ig.EditorProviderCombo()
                    } else {
                        if (h && h.editorType === "rating") {
                            q = new a.ig.EditorProviderRating()
                        } else {
                            q = new a.ig.EditorProviderDefault()
                        }
                    }
                }
            }
            j = q.createEditor(n, m, h, n._ti, k, l.dataType, n._val(r));
            j.addClass(i).css({
                marginLeft: (u.x - d(r, "paddingLeft")) + "px",
                marginTop: (u.y - s - d(r, "paddingTop")) + "px"
            });
            t = j.igEditorFilter({
                provider: q
            });
            return t
        },

        _notifyChanged: function () {
            var h = this._butDone;
            if (h) {
                if (this.findInvalid()) {
                    h.addClass(this.css.buttonDisabled)
                } else {
                    h.removeClass(this.css.buttonDisabled)
                }
            }
            this._modified = 1
        },

        _notifyEditorKey: function (k, i) {
            var h, r, t, p, j, n = k.keyCode, l = n === 27, q = this.options, s;
            if (n !== 9 && n !== 13 && !l) {
                return
            }
            j = this._editors[i];
            if (!j || (n === 13 && (k.shiftKey || k.ctrlKey || this._13))) {
                return
            }
            if (l) {
                r = j._oldCellVal;
                t = c(j, "getValue");
                if (!this._equals(r, t)) {
                    c(j, "setValue", r);
                    if (!this._equals(c(j, "getValue"), t)) {
                        c(j, "validate");
                        f(k);
                        return
                    }
                }
                return this._endEdit(k)
            }
            if (n === 13 || (!this._adding && q.editMode === "cell")) {
                if (this.options.horizontalMoveOnEnter) {
                    s = 1
                } else {
                    s = (n === 9) ? (k.shiftKey ? -1 : 1) : 0
                }
                return this._nextEdit(k, s)
            }
            p = this._nextEditor(i, k.shiftKey);
            if (!c(j, "validate")) {
                f(k);
                return
            }
            f(k);
            try {
                if (p && this._adding && !b(this.grid._startColIndex) && !this.grid.cellAt(this._col(p.parent()), 0)) {
                    p = null
                }
            } catch (m) {
                p = null
            }
            if (p) {
                this._scrollTo(p.parent(), p);
                return
            }
            h = this._butDone;
            if (!h || h[0].offsetWidth === 0) {
                return this._nextEdit(k, 0)
            }
            if (h.hasClass(this.css.buttonDisabled)) {
                h = this._butCancel
            }
            h[0].focus();
            this._prevEdit = j
        },

        _evtArg: function (j, i, k) {
            var h = {
                rowAdding: !!this._adding,
                columnIndex: this._col(j),
                rowID: this._row_,
                columnKey: this._key(j),
                editor: i
            };
            h.value = b(k) ? null : k;
            return h
        },

        _checkHidden: function (n) {
            var h, m, j, k = this.grid.options.columns, l = k.length;
            while (l-- > 0) {
                j = k[l];
                if (j && j.hidden) {
                    h = this._colSet(null, j ? (m = j.key) : null);
                    h = (h && b(n[m])) ? h.defaultValue : null;
                    if (h !== null) {
                        n[m] = h
                    }
                }
            }
        },

        _isToggle: function (h) {
            h = h && h.type && h.type.indexOf("click") >= 0 ? h.target : null;
            return h && h.className && h.className.indexOf("ui-icon-check") >= 0
        },

        _lastTDWidth: function (j, l) {
            var i = d(j, "paddingRight") > 12, h = (i || !j.next()[0]) ? j.closest("div")[0] : null, k = h && j[0].offsetLeft + j[0].offsetWidth > h.clientWidth + 5 ? h.offsetWidth - h.clientWidth : 0;
            if (k > 10) {
                h = i ? null : this._hscroll(1)[0];
                if (!h || h.offsetWidth < h.clientWidth + 3) {
                    l -= Math.min(18, k)
                }
            }
            return l
        },

        _startEdit: function (u, l, n, h, q, y) {
            var r, x, B, j, m, A, p = this.grid, t = p.options.primaryKey, w = u ? u[0] : null, k = null, z = false, s = this.options;
            if (!w) {
                return
            }
            if (l) {
                delete this._defValue;
                this._delHover();
                if (this._tds) {
                    if (!h) {
                        u = this._cur(u)
                    }
                    if (this._endEdit(l, 1)) {
                        return 1
                    }
                    if (!h) {
                        r = this._idForCol(u.col);
                        x = (u.row < 0 || u.col < 0 || r < 0) ? null : u.tbl.children("tbody")[0];
                        u = x ? x.childNodes[u.row] : null;
                        if (u) {
                            u = u.childNodes[r]
                        }
                        if (!u) {
                            return
                        }
                        u = a(u)
                    }
                }
                if (!h && !this._checkRow(u.parent())) {
                    return
                }
                this._row_ = h ? -1 : this._prime(u);
                this._rowIndex = h ? -1 : this._row(u);
                if (!q) {
                    q = u[0].offsetHeight
                }
                if (h || s.editMode === "row") {
                    if (!this._fire("editRowStarting", l, j = {
                        rowAdding: !!h,
                        rowID: this._row_
                    })) {
                        this._row_ = null;
                        this._rowIndex = -3;
                        return
                    }
                    if (h) {
                        this._adding = h;
                        if (this._tdAddPrime) {
                            r = this._gridCol(t);
                            A = this._defVal(t, 1);
                            this._tdAddPrime.html(r ? p._renderCell(A, r) : A)
                        }
                        this._addTR.hide();
                        this._newTR.show();
                        if (!this._addFixScroll) {
                            this._addFixScroll = {
                                scroll: function () {
                                    var i = p.scrollContainer()[0], o = i ? i.scrollLeft : -1, v = this.scrollLeft;
                                    if (!b(v) && o >= 0 && o !== v) {
                                        i.scrollLeft = v
                                    }
                                }
                            }
                        }
                        this._addTR.closest("div").bind(this._addFixScroll)
                    }
                    x = u.parent().children();
                    this._evt = l;
                    for (r = 0; r < x.length; r++) {
                        u = a(x[r]);
                        if (this._col(u) < 0 || x[r].offsetWidth < 3) {
                            continue
                        }
                        u.addClass(this.css.editingCell);
                        k = k || u;
                        if (this._startEdit(u, null, n === 1 || (l && u[0] === w), h, q, this._isToggle(l) && u[0] === w)) {
                            z = 1;
                            n = null
                        }
                    }
                    delete this._evt;
                    if (z && k && s.showDoneCancelButtons) {
                        this._doButtons(k)
                    }
                    if (z) {
                        f(l);
                        this._fire("editRowStarted", l, j)
                    } else {
                        x.removeClass(this.css.editingCell)
                    }
                    this._sel("act", k);
                    if (h && z) {
                        while (q - this._newTR[0].offsetHeight > 0) {
                            if (z) {
                                z = null;
                                u = a(x[0]);
                                h = d(u, "paddingTop") + d(u, "paddingBottom") + d(u, "borderTopWidth") + d(u, "borderBottomWidth") + 1
                            }
                            if ((h -= 1) < 0) {
                                break
                            }
                            u.css("height", q - h)
                        }
                        z = 1
                    }
                    return z
                }
                y = y || this._isToggle(l)
            }
            m = this.editorForCell(u, 1);
            if (b(this._row_) || !m) {
                return
            }
            B = u.outerWidth();
            if (!q) {
                q = u[0].offsetHeight
            }
            if (!B || !q || !this._fire("editCellStarting", l || this._evt, j = this._evtArg(u, m, this._val(u, null, 1)))) {
                return
            }
            B = this._lastTDWidth(u, B);
            B -= this._xy.dx + 2;
            q -= this._xy.dy;
            if (l) {
                f(l);
                u.addClass(this.css.editingCell)
            }
            m.prependTo(u);
            c(m, "setSize", Math.max(8, B), Math.max(10, q));
            if (!this._tds) {
                this._tds = {}
            }
            this._tds[this._key(u)] = u;
            z = c(m, "validator");
            if (z && z._setOption) {
                z._setOption("bodyAsParent", p.options.fixedHeaders !== false && this._adding)
            }
            c(m, "setValue", j.value);
            m._oldCellVal = c(m, "getValue");
            this._fire("editCellStarted", l || this._evt, j);
            if (n) {
                this._scrollTo(u, m, false, 300, y)
            }
            if (l) {
                this._sel("act", u)
            }
            return 1
        },

        _endEdit: function (l, y) {
            var p, n, z, q, v, j, t, u, s = y, m = l || "undefined", h = this._adding, x = null, k = null, A = null, w = this._tds, r = this.options;
            if (!w || this._skip) {
                return
            }
            if (l && l.type !== "mousedown") {
                f(u = l)
            }
            p = h || r.editMode === "row";
            if (!this._modified && !h) {
                y = false
            }
            if (p) {
                for (q in w) {
                    if (w.hasOwnProperty(q) && l && !b(v = w[q])) {
                        if (s && !b(n = this.editorForCell(v)) && n[0] && n[0].offsetWidth && n.igEditorFilter("hasInvalidMessage")) {
                            if (!u) {
                                f(u = l)
                            }
                            this._scrollTo(v, n, 1);
                            return 1
                        }
                    }
                }
                A = this._addReadOnly(h);
                t = {};
                for (q in w) {
                    if (w.hasOwnProperty(q) && s && !b(v = w[q]) && !b(n = this.editorForCell(v))) {
                        A[q] = c(n, "getValue");
                        t[q] = n._oldCellVal;
                        if (l && n[0] && n[0].offsetWidth && !c(n, "validate", !r)) {
                            if (!u) {
                                f(u = l)
                            }
                            if (r) {
                                this._scrollTo(v, n, 1)
                            }
                            r = null
                        }
                    }
                }
                if (l && !r) {
                    return 1
                }
                if (h) {
                    this._checkHidden(A)
                }
                this._skip = 1;
                if (!this._fire("editRowEnding", m, k = {
                    oldValues: t,
                    values: A,
                    rowID: this._row_,
                    keepEditing: false,
                    update: !!y,
                    rowAdding: !!h
                })) {
                    k.update = y = s = false
                }
                delete this._skip;
                if (l && k.keepEditing) {
                    return 1
                }
            }
            if (p) {
                this._td().parent().children().removeClass(this.css.editingCell)
            }
            x = null;
            for (q in w) {
                if (w.hasOwnProperty(q) && !b(v = w[q]) && !b(n = this.editorForCell(v))) {
                    if (!A) {
                        if (l && s && !c(n, "validate")) {
                            if (!u) {
                                f(u = l)
                            }
                            this._scrollTo(v, n, 1);
                            return 1
                        }
                        v.removeClass(this.css.editingCell)
                    }
                    this._skip = 1;
                    this._doButtons(1);
                    z = c(n, "getValue");
                    j = this._evtArg(v, n, z);
                    j.update = !!y;
                    j.oldValue = n._oldCellVal;
                    if (!A) {
                        j.keepEditing = false
                    }
                    if (!this._fire("editCellEnding", m, j)) {
                        j.value = n._oldCellVal
                    }
                    if (s && !A && l && j.keepEditing) {
                        f(l);
                        this._scrollTo(v, n, 1);
                        delete this._skip;
                        return 1
                    }
                    n.igEditorFilter("remove");
                    z = j.value;
                    if (y && A) {
                        A[q] = z
                    }
                    if (y && this._val(v, j, A) !== undefined && !x && !this._equals(z, n._oldCellVal)) {
                        x = v.parent()[0]
                    }
                    delete w[q];
                    this._fire("editCellEnded", m, j);
                    delete this._skip
                }
            }
            this._skip = 1;
            this._modified = this._prevEdit = this._tds = this._error = null;
            if (h) {
                this._addTR.closest("div").unbind(this._addFixScroll);
                this._addTR.show();
                this._newTR.hide();
                this._adding = null;
                if (y && this._fire("rowAdding", m, k)) {
                    this._update(A);
                    this._sel("refresh");
                    this._fire("rowAdded", m, k);
                    this._addRowNum++
                }
            } else {
                if (x) {
                    this._update(this._row_, x, A)
                }
            }
            this._fire("editRowEnded", m, k);
            this._rowIndex = -3;
            this._row_ = null;
            this._sel("end", l);
            delete this._skip
        },

        _scrollDiv: function () {
            var i = this, h = i._scrl, j = i.grid.element;
            if (h && i._sEvts) {
                return h
            }
            i._scrl = h = j ? j.parent() : null;
            if (h && !i._sEvts && h.is("div")) {
                i._scrollX = h.scrollLeft;
                h.bind(i._sEvts = {
                    scroll: function (k) {
                        i._onEvt(k, 9)
                    }
                })
            }
            return h
        },

        _scrollTo: function (t, m, i, k, u) {
            var j, r, l, v, z, q, w, s, h = this._adding, o = 0, n = 0, p = m;
            if (!m && typeof t === "string") {
                t = this._tds ? this._tds[t] : null;
                if (!t) {
                    return
                }
                m = this.editorForCell(t);
                if (!m) {
                    return
                }
                i = 1
            }
            if (p) {
                m.igEditorFilter("setFocus", 100, u);
                if (k) {
                    m.igEditorFilter("setFocus", k)
                }
            }
            if (m && i) {
                q = c(m, "validator");
                q = q ? q._lbl : null;
                if (q && (h || t.has(q).length !== 0)) {
                    o = q._width0;
                    n = q._height0;
                    j = this._cur(t)
                }
            }
            l = this._scrollDiv();
            w = t.offset();
            r = l.offset();
            l = l[0];
            r.w = l.clientWidth;
            r.h = l.clientHeight;
            w.w = t.outerWidth();
            w.h = t.outerHeight();
            v = w.left - r.left;
            z = w.top - r.top;
            if (o > w.w) {
                k = j.col;
                s = w.w;
                w.w = (o += 5);
                while (s < o && this._nextTD(j, 1)) {
                    s += j.td[0].offsetWidth
                }
                if ((s -= o) < 0) {
                    if ((w.x += s) < 0 && !h) {
                        s -= w.x;
                        w.x = 0
                    }
                    q.css("marginLeft", s + "px")
                }
            }
            if (!h && n > 1 && j.row > 1) {
                j.col = k;
                s = n += 3;
                while (s > 0 && this._nextTD(j, 0)) {
                    s -= j.td[0].offsetHeight
                }
                if (s > 0) {
                    q.css("marginTop", "-" + n + "px");
                    z -= n
                }
            }
            if (l.nodeName !== "DIV") {
                return
            }
            if (v > 0) {
                if ((v += w.w - r.w) < 0) {
                    v = 0
                }
            }
            if (z > 0) {
                if ((z += n + w.h - r.h) < 0) {
                    z = 0
                }
            }
            if (v !== 0) {
                this._hscroll()[0].scrollLeft += v
            }
            if (!h && z !== 0) {
                l.scrollTop += z
            }
        },

        _upDown: function (i) {
            i = i.parent();
            if (i.prev().length < 1) {
                return 1
            }
            if (i.next().length > 0) {
                return 0
            }
            i = this.grid.element;
            var h = i.parent()[0];
            return (h && h.clientHeight - i[0].offsetHeight > 25) ? 0 : -1
        },

        _minWidth: function (j, h) {
            var i = h[0];
            if (i.id.indexOf("_container") < 0 && h.parents(".ui-iggrid").length > 0) {
                i = h.parent()[0]
            }
            h = Math.min(h[0].clientWidth || h[0].offsetWidth, i.clientWidth || i.offsetWidth);
            return j ? Math.min(h, j.closest("table")[0].clientWidth) : h
        },

        _doButtons: function (s) {
            var w, v, o, p, t, l, j, r, m, u, q = this._oldOverflow, h = this._adding, k = this.css, n = this.grid.element, i = this._buts;
            if (s === 1 || s === 2) {
                if (q) {
                    delete this._oldOverflow;
                    q.e.css("overflowX", q.x).css("overflowY", q.y)
                }
                if (i) {
                    i.hide();
                    if (s === 2) {
                        i.remove();
                        this._buts = null
                    }
                }
                if (s === 2 && this._delBut) {
                    this._delHover();
                    delete this._delBut
                }
                return
            }
            if (s) {
                j = n.parent();
                u = j[0] ? Math.max(j[0].scrollHeight, j[0].offsetHeight) : -1;
                if (u >= 0 && u < 20) {
                    this._oldOverflow = {
                        e: j,
                        x: j.css("overflowX"),
                        y: j.css("overflowY")
                    };
                    j.css("overflowX", "visible").css("overflowY", "visible")
                }
                if (!i) {
                    i = this._buts = a("<div />").css("position", "absolute").addClass(k.buttonContainer).attr("unselectable", "on").prependTo(j);
                    this._butDone = u = a("<span />").addClass("done_id").addClass(k.button).addClass(k.doneButton).attr("unselectable", "on").attr("tabIndex", this._ti + 1).attr("title", this._loc("done", 1)).appendTo(i).bind(this._evts);
                    a("<span />").css("display", "inline-block").addClass(k.doneIcon).attr("unselectable", "on").appendTo(u);
                    t = this._loc("done");
                    if (t) {
                        a("<span />").css("display", "inline-block").attr("unselectable", "on").html(t).appendTo(u)
                    } else {
                        u.addClass(k.buttonIconOnly)
                    }
                    this._butCancel = u = a("<span />").addClass(k.button).addClass(k.cancelButton).attr("unselectable", "on").attr("tabIndex", this._ti + 1).attr("title", this._loc("cancel", 1)).appendTo(i).bind(this._evts);
                    a("<span />").css("display", "inline-block").addClass(k.cancelIcon).attr("unselectable", "on").appendTo(u);
                    t = this._loc("cancel");
                    if (t) {
                        a("<span />").css("display", "inline-block").attr("unselectable", "on").html(t).appendTo(u)
                    } else {
                        u.addClass(k.buttonIconOnly)
                    }
                    i._height = i[0].offsetHeight;
                    i.css("width", Math.max(i[0].clientWidth + 1, (i._width = i[0].offsetWidth) - 3))
                }
            }
            if (!i) {
                return
            }
            l = this._scrollDiv();
            if (s) {
                u = Math.max(n[0].offsetHeight, n.parent()[0].offsetHeight);
                i.show();
                if (h && this.findInvalid() === null) {
                    this._butDone.removeClass(k.buttonDisabled)
                } else {
                    this._butDone.addClass(k.buttonDisabled)
                }
                i.css({
                    marginLeft: (this._butsX = 0) + "px",
                    marginTop: "0px"
                });
                v = i.offset();
                o = i[0].offsetHeight;
                w = s.offset();
                p = s[0].offsetHeight;
                w.top -= v.top;
                r = l[0].scrollTop;
                m = h ? 1 : this._upDown(s);
                if (!m) {
                    m = l[0].clientHeight + r - w.top - p - 5 - o;
                    if (m < 1 && m > w.top - o - r - 5) {
                        m = 1
                    }
                }
                m = m > 0 ? (w.top + p + 5) : (w.top - o - 5);
                if (m + o > u) {
                    if (m + o < u + 6) {
                        m = u - o - 2
                    } else {
                        m -= 10 + o + p
                    }
                    m = Math.max(0, m)
                }
                i.css({
                    marginTop: m + "px"
                });
                this._butsY = (h && n.has(this._addTR).length === 1) ? m : 0
            }
            if ((u = this._minWidth(s, l) - (i.offset().left + i._width + 3 - l.offset().left)) !== 0) {
                i.css("marginLeft", (this._butsX += u) + "px")
            }
            if (h && this.grid.options.fixedHeaders !== false) {
                i.css("marginTop", (this._butsY + l[0].scrollTop + 2) + "px")
            }
        },

        _isEditor: function (h) {
            var k, j, i, l, n, p = this._tds, m = this.options;
            if (!p) {
                return
            }
            n = this._findCell(h);
            if (n && m.editMode === "row" && (this._row(n) === this._rowIndex)) {
                return 1
            }
            k = this.grid.element[0];
            for (l in p) {
                if (p.hasOwnProperty(l)) {
                    n = p[l];
                    if (n) {
                        i = this.editorForCell(n);
                        if (i) {
                            j = h;
                            i = i[0];
                            while (j && j !== k) {
                                if (j === i) {
                                    return 1
                                }
                                j = j.parentNode
                            }
                        }
                    }
                }
            }
        },

        _aCell: function () {
            var k, h = -1, j = this._sel("get");
            k = j ? j.activeCell() : null;
            if (k) {
                return k.element
            }
            k = j ? j.activeRow() : null;
            if (k) {
                k = k.element[0].childNodes;
                while (++h < k.length) {
                    if (k[h].offsetWidth > 0) {
                        return a(k[h])
                    }
                }
            }
        },

        _sel: function (j, n) {
            var k, l, h, m = this.grid.element.data("igGridSelection");
            if (!m || j === "get") {
                return m
            }
            if (j === "end") {
                delete m._suspend;
                if (n && n.type === "mousedown") {
                    m._mouseDown(n)
                }
                return
            }
            if (j === "wait") {
                l = m.selectedRows();
                k = l ? l.length : 0;
                while (k-- > 0) {
                    h = l[k].element;
                    if (h && h.has(n).length) {
                        return
                    }
                }
                l = m.selectedCells();
                k = l ? l.length : 0;
                while (k-- > 0) {
                    h = l[k].element;
                    if (h && h[0] === n[0]) {
                        return
                    }
                }
                l = m.selectedRow();
                h = l ? l.element : null;
                if (h && h.has(n).length) {
                    return
                }
                l = m.selectedCell();
                h = l ? l.element : null;
                if (h && h[0] === n[0]) {
                    return
                }
                return 1
            }
            if (j === "refresh") {
                return m._refresh()
            }
            if (j === "act") {
                m._suspend = 1;
                if (!n) {
                    return
                }
                if (m.options.mode === "row") {
                    return m._activateRow(m._realActiveRow = {
                        element: n.parent(),
                        index: this._row(n)
                    })
                }
                n = m._cellFromElement(n[0], this._row(n), this._col(n));
                return m._activateCell(n)
            }
        },

        _doDelete: function (j, m) {
            var k, l, h;
            if (!m) {
                l = this._sel("get");
                h = l ? l.selectedRows() : null;
                for (k = 0; k < (h ? h.length : 0); k++) {
                    this._doDelete(j, h[k].element)
                }
                h = l ? l.selectedRow() : null;
                if (h) {
                    this._doDelete(j, h.element)
                }
            }
            if (!m || m[0]._deleted || !this._fire("rowDeleting", j, h = {
                element: m,
                rowID: this._prime(a(m.children()[0]))
            })) {
                return
            }
            m[0]._deleted = 1;
            this._delHover();
            this._update(h.rowID, m[0]);
            if (j) {
                this._sel("refresh")
            }
            this._fire("rowDeleted", j, h);
            return 1
        },

        _checkRow: function (h) {
            h = (h && h.index() < this.grid.rows().length) ? h[0] : null;
            return (h && h.className.indexOf(this.grid.css.deletedRecord) < 0 && !a(h).attr("data-grouprow") && a(h).parent().is("tbody") && a(h).parent()[0] === this.grid.element.find("tbody")[0]) ? h : null
        },

        _delHover: function (t) {
            var m, y, r, n, q, o, p, s, z, A, k, w, u, l, h = this._delBut, x = this._delTR, j = this.css;
            if (h) {
                this._doHov(this._isSrc(h, t) ? h[0] : null, j.buttonHover)
            }
            t = t ? this._checkRow(a(t).closest("tr")) : null;
            if (t === x || (!x && !t)) {
                return
            }
            this._delTR = t;
            if (!h) {
                this._delBut = h = a("<span />").css("position", "absolute").addClass(j.deleteButton).attr("unselectable", "on").attr("title", this._loc("deleteRow", 1));
                a("<span />").css("display", "inline-block").addClass(j.deleteIcon).attr("unselectable", "on").appendTo(h);
                y = this._loc("deleteRow");
                if (y) {
                    a("<span />").css("display", "inline-block").attr("unselectable", "on").html(y).appendTo(h)
                }
            }
            if (x) {
                h.remove()
            }
            if (!t) {
                return
            }
            m = this._colShift(null, t) - 1;
            w = t.childNodes;
            while ((m += 1) < w.length) {
                if (w[m].offsetWidth > 0) {
                    break
                }
            }
            t = w[m];
            if (!t) {
                return
            }
            u = a(t);
            k = this.grid.element.parent();
            h.css({
                marginLeft: "0px",
                marginTop: "0px"
            }).prependTo(k).bind(this._evts).mouseup(function (i) {
                    f(i)
                });
            z = h.offset();
            A = u.offset();
            n = h[0].offsetHeight;
            q = t.offsetHeight;
            s = A.top - z.top;
            l = s + Math.round((q - n) / 2);
            p = k[0].scrollLeft;
            o = this._minWidth(u, k);
            n = h[0].offsetWidth;
            r = o + p - n - d(u, "paddingLeft") - d(u, "borderLeftWidth") - 5;
            h.css({
                marginTop: l + "px",
                marginLeft: r + "px"
            });
            if ((s = n + h.offset().left - A.left - p - o + 5) > 0) {
                h.css("marginLeft", (r - s) + "px")
            }
        },

        _isSrc: function (h, i) {
            if (h && i && (h[0] === i || h[0] === i[0] || h.has(i).length > 0)) {
                return h
            }
        },

        _doHov: function (i, h) {
            var j = this._hov;
            if (j && h && j.e[0] === i) {
                return 1
            }
            if (j) {
                j.e.removeClass(j.css)
            }
            if (h) {
                this._hov = {
                    e: i = a(i),
                    css: h
                };
                return i.addClass(h)
            }
            delete this._hov
        },

        _noMove: function (h) {
            var m, n, i, j, k, l = this._nm;
            if (l === 1 || (h && !l)) {
                return
            }
            if (!l) {
                k = this.grid.element[0].id;
                i = a("#" + k + "_scroll");
                if (i.length !== 1) {
                    i = a("#" + k + "_displayContainer")
                }
                if (!i.length) {
                    this._nm = 1;
                    return
                }
            }
            l = this._nm = this._nm || {
                x: 0,
                y: 0,
                div: i[0]
            };
            j = l.ex = l.ex || a("#" + k + "_hscroller")[0] || a("#" + k + "_horizontalScrollContainer")[0] || l.div;
            m = l.ex.scrollLeft;
            l.ey = l.ey || a("#" + k + "_scrollContainer")[0] || l.div;
            n = l.ey.scrollTop;
            if (h) {
                return Math.abs(l.x - m) > 1 || Math.abs(l.y - n) > 1
            }
            l.x = m;
            l.y = n
        },

        _onEvt: function (p, D) {
            var A, j, n, h, z, s = this, u = e(), B = s._hovTouch, w = p ? p.target : null, r = p ? p.keyCode : 0, E = s._lastEvt, l = s.css, m = s._delBut, t = s._newTR, i = s._addTR, y = s.grid.element, v = s.options, C, q;
            if (v.excelNavigationMode === true && this._isEditor(w)) {
                A = this._findCell(w);
                if (A) {
                    q = this.editorForCell(A).data("igEditor");
                    if ([39, 37].indexOf(r) >= 0) {
                        if ((q._old === null && q.value() === null) || (q._old !== null && q.value() !== null && q._old.toString() === q.value().toString())) {
                            if (r === 37) {
                                this._nextEdit(p, -1)
                            }
                            if (r === 39) {
                                this._nextEdit(p, 1)
                            }
                            return
                        }
                    }
                    if (r === 38) {
                        this._nextEdit(p, "-tr1");
                        return
                    }
                    if (r === 40) {
                        this._nextEdit(p, 0);
                        return
                    }
                }
            }
            if (!y || !w || ((D < 4 || r === 13) && (p.shiftKey || p.ctrlKey)) || (r === 13 && s._13)) {
                return
            }
            if (D !== 9 && E && E.src === w && E.type === D && E.x === p.pageX && E.y === p.pageY && u < E.now + 500) {
                return
            }
            s._lastEvt = {
                src: w,
                now: u,
                type: D,
                x: p.pageX,
                y: p.pageY
            };
            if (D === 11) {
                B = p.originalEvent.pointerType;
                if (!s._tds && !(B && B !== 2)) {
                    s._hovTouch = (v.enableDeleteRow && v.editMode === "row") ? (s._delTR || 1) : null;
                    s._noMove()
                }
                return
            }
            if (D === 8) {
                if (B) {
                    return
                }
                this._delHover();
                return this._doHov()
            }
            E = m ? s._isSrc(m, w) : null;
            z = y.find("tbody");
            if (D === 7) {
                if (v.enableDeleteRow) {
                    if (E) {
                        m.addClass(s.css.buttonHover)
                    } else {
                        if (m) {
                            m.removeClass(s.css.buttonHover)
                        }
                        this._delHover((this._tds || !this._isSrc(z, w) || this._noMove(true)) ? null : w)
                    }
                }
                return
            }
            if (E && D < 4) {
                if (D === 2) {
                    f(p);
                    if (this._doDelete(p, a(this._delTR))) {
                        delete this._delTR
                    }
                }
                return
            }
            h = i ? i.children()[i.children().length - 1] : null;
            if (r === 46) {
                return v.enableDeleteRow ? this._doDelete(p) : null
            }
            if (D === 9) {
                if (this._nm && !this._noMove(true)) {
                    return
                }
                this._delHover();
                E = w.scrollLeft;
                if (this._tds) {
                    this._doButtons()
                }
                if (i && E !== this._scrollX) {
                    a(h).css("paddingLeft", (this._addLeft + E) + "px")
                }
                this._scrollX = E;
                return
            }
            if (this._isSrc(i, w)) {
                if (!this._isSrc(a(h), w)) {
                    return
                }
                this._delHover();
                w = h;
                if (D === 5) {
                    return a(w).addClass(l.addRowActive)
                }
                if (D === 6) {
                    return a(w).removeClass(l.addRowActive)
                }
                if (D === 7) {
                    return this._doHov(w, l.addRowHover)
                }
                if (r === 32 || r === 13) {
                    return this.startAddRowEdit(p)
                }
            }
            if (r === 27) {
                return this._endEdit(p)
            }
            n = this._isSrc(this._butDone, w);
            j = this._isSrc(this._butCancel, w);
            A = this._isSrc(this._buts, w);
            if (A || n || j) {
                if (n || j) {
                    if (D < 5) {
                        f(p)
                    }
                    w = n || j;
                    if (D === 2) {
                        if (w.hasClass(l.buttonDisabled)) {
                            return
                        }
                        this._endEdit(p, n)
                    } else {
                        if (D === 7 && !w.hasClass(l.buttonDisabled)) {
                            this._doHov(w[0], l.buttonHover)
                        } else {
                            if (D === 5) {
                                w.addClass(l.buttonActive)
                            } else {
                                if (D === 6) {
                                    w.removeClass(l.buttonActive)
                                } else {
                                    if (r === 13 || r === 32) {
                                        this._endEdit(p, n)
                                    } else {
                                        if (r === 9) {
                                            if (p.shiftKey) {
                                                A = (n || this._butDone.hasClass(l.buttonDisabled)) ? null : this._butDone
                                            } else {
                                                if (!A) {
                                                    return
                                                }
                                                A = this._butCancel
                                            }
                                            if (A) {
                                                A[0].focus();
                                                return
                                            }
                                            w = this._lastEditor();
                                            A = w ? w.parent() : null;
                                            if (A) {
                                                this._scrollTo(A, w)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return
            }
            if (t && D < 4) {
                if (this._isSrc(t, w)) {
                    return
                }
                if (this._isSrc(i, w)) {
                    if (D === 2) {
                        if (v.editMode === "rowedittemplate") {
                            this._startEditRowTemplate(p, C, A, 1)
                        } else {
                            this.startAddRowEdit(p)
                        }
                    }
                    return
                }
            }
            if (D < 4 && !this._isSrc(z, w)) {
                if (this._tds && w !== y.parent()[0] && w !== this._div()[0] && w !== this._hscroll(1)[0]) {
                    this._endEdit(p)
                }
                return
            }
            if (r === 13) {
                this._nextEdit(p, 0);
                if (this._tds) {
                    return
                }
            }
            if (this._isEditor(w)) {
                return
            }
            A = this._findCell(w);
            if (this._tds && D < 4 && (D > 1 || A)) {
                if (this._endEdit(p, this._adding ? null : 1)) {
                    return
                }
            }
            if (D === 1) {
                if (A && this._sel("get")) {
                    this._waitSel = this._sel("wait", A)
                }
                return
            }
            E = v.editMode === "cell";
            w = v.startEditTriggers;
            if (w && !this._tds && (E || (v.editMode === "row" || v.editMode === "rowedittemplate"))) {
                if (!w.toLowerCase) {
                    w = w.toString()
                }
                w = w.toLowerCase();
                if ((r === 113 && w.indexOf("f2") >= 0) || (r === 13 && w.indexOf("enter") >= 0)) {
                    A = this._aCell()
                } else {
                    if (w.indexOf(p.type) < 0 || (D === 2 && w.indexOf("dbl") >= 0)) {
                        A = null
                    }
                }
                if (B && D < 3 && B !== s._delTR) {
                    return
                }
                if (A && (this._isToggle(p) || ((!this._waitSel || D === 4) && !this._sel("wait", A)))) {
                    if (v.editMode === "rowedittemplate" && A.parent().attr("data-grouprow") !== "true") {
                        this._startEditRowTemplate(p, C, A);
                        return
                    }
                    if (this._startEdit(A, p, E)) {
                        return
                    }
                }
            }
        },

        _startEditRowTemplate: function (j, l, k, h) {
            var i = a("#" + this.grid.container().attr("id") + "_ret");
            l = !b(k) && k.parent().length > 0 ? k.parent() : l;
            if (this._checkRow(l) || h) {
                if (i[0] === undefined) {
                    this._renderRowEditDialog(j, l)
                }
                return this._openRowEditDialog(j, l)
            }
            return 0
        },

        _calcRowDialogLeftTop: function (m) {
            var p, s, q, o, t, i, l, n, k, j = a("#" + this.grid.container().attr("id") + "_block_ret"), r;
            if (this.element.closest(".ui-iggrid-root").data("igHierarchicalGrid")) {
                r = this.element.closest(".ui-iggrid-root").data("igHierarchicalGrid").rootWidget().container()
            } else {
                r = this.grid.container()
            }
            q = r.offset();
            p = q.left;
            s = q.top;
            if (j.outerWidth() !== r.outerWidth()) {
                j.css("width", r.outerWidth())
            }
            if (j.outerHeight() !== r.outerHeight()) {
                j.css("height", r.outerHeight())
            }
            a("#" + this.grid.container().attr("id") + "_dialog_error").hide();
            j.css({
                left: p,
                top: s
            }).fadeToggle();
            t = r.outerWidth();
            o = r.outerHeight();
            k = a(window).width();
            i = a(window).height();
            if (t + p > k) {
                t = t - (t + p - k)
            }
            if (t <= 0) {
                t = r.outerWidth()
            }
            if (o + s > i) {
                o = o - (o + s - i)
            }
            if (o <= 0) {
                o = r.outerHeight()
            }
            l = parseInt(this.options.rowEditDialogHeight, 10);
            n = parseInt(this.options.rowEditDialogWidth, 10);
            if (isNaN(l) || l <= 0) {
                l = m.outerHeight()
            }
            if (isNaN(n) || n <= 0) {
                n = m.outerWidth()
            }
            s = s + parseInt(o / 2, 10) - l / 2;
            p = p + parseInt(t / 2, 10) - n / 2;
            s = s < 0 ? q.top : s;
            p = p < 0 ? q.left : p;
            m.css({
                left: p,
                top: s
            }).fadeToggle(a.proxy(this._setResizableEnv, this))
        },

        _getColumnSettingsByKey: function (h) {
            var j;
            for (j = 0; j < this.options.columnSettings.length; ++j) {
                if (this.options.columnSettings[j].columnKey === h) {
                    return this.options.columnSettings[j]
                }
            }
            return null
        },

        _doType: function (h, i) {
            if (h === "text") {
                h = 0
            }
            if (h === "mask") {
                h = 1
            }
            if (h === "date") {
                h = 2
            }
            if (h === "datepicker") {
                h = 3
            }
            if (h === "numeric") {
                h = 4
            }
            if (h === "currency") {
                h = 5
            }
            if (h === "percent") {
                h = 6
            }
            if (typeof h !== "number" || h < 0 || h > 6) {
                if (typeof i === "number") {
                    h = 4
                } else {
                    if (i && i.getMonth) {
                        h = 2
                    } else {
                        h = 0
                    }
                }
            }
            this._type = h;
            return h
        },

        _fillRowEditDialogTable: function (o) {
            var v, k = this.grid.options.columns, q, x, r, m, l, s, j, w, n, u = this.options.rowEditDialogRowTemplateID, p = this, y, h = "#" + this.grid.container().attr("id") + "_igButton", t;
            v = a("#" + this.grid.container().attr("id") + "_ret table tbody");
            v.empty();
            y = function (i, z) {
                setTimeout(function () {
                    p._rowEditDialogValidatorsChanged(i)
                }, 50)
            };
            for (q = 0; q < k.length; ++q) {
                w = [];
                j = k[q].key;
                l = this._getColumnSettingsByKey(j);
                if (l) {
                    n = l.editorOptions
                }
                if (o) {
                    m = this._getVal(o.data().id, j)
                } else {
                    m = this._defVal(j, true)
                }
                if ((l && l.readOnly && !this.options.showReadonlyEditors) || (k[q].hidden)) {
                    continue
                }
                w.push({
                    headerText: k[q].headerText,
                    dataKey: j
                });
                if (u) {
                    x = a(a.ig.tmpl(a("#" + u).html(), w))
                } else {
                    x = a(a.ig.tmpl(this.options.rowEditDialogRowTemplate, w))
                }
                x.appendTo(v);
                r = a(x.find(">td[data-key] input")[0]);
                if (l === null || l === undefined) {
                    if (k[q].dataType === "date") {
                        l = {
                            dateInputFormat: k[q].format,
                            dateDisplayFormat: k[q].format
                        }
                    } else {
                        if (k[q].dataType === "bool" && r[0] && (r[0].type === "checkbox" || this.grid.options.renderCheckboxes)) {
                            l = {};
                            t = r.parent();
                            r.remove();
                            r = a('<input type="checkbox" />');
                            r.appendTo(t)
                        } else {
                            if (k[q].dataType === "bool") {
                                l = {
                                    listItems: [true, false],
                                    button: "dropdown"
                                }
                            } else {
                                l = {}
                            }
                        }
                    }
                }
                s = a.extend({}, l, l.editorOptions);
                if (!s.readOnly) {
                    s.keydown = y
                }
                if (r[0].type === "checkbox") {
                    s.mousedown = y
                }
                s.textChanged = y;
                s.value = s.value || m;
                s.type = s.type || this._doType(k[q].dataType, m);
                s.width = s.width || this.options.rowEditDialogFieldWidth;
                s.enableUTCDates = this.grid.options.enableUTCDates;
                if (l.editorType === "datepicker" || (!l.editorType && k[q].dataType === "date")) {
                    s.enableUTCDates = this.grid.options.enableUTCDates;
                    r.igDatePicker(s)
                } else {
                    if (l.editorType === "date" || (!l.editorType && k[q].dataType === "date")) {
                        s.enableUTCDates = this.grid.options.enableUTCDates;
                        r.igDateEditor(s)
                    } else {
                        if (l.editorType === "string" || (!l.editorType && k[q].dataType === "string")) {
                            r.igTextEditor(s)
                        } else {
                            if (l.editorType === "numeric" || (!l.editorType && k[q].dataType === "number")) {
                                r.igNumericEditor(s)
                            } else {
                                if (l.editorType === "percent") {
                                    r.igPercentEditor(s)
                                } else {
                                    if (l.editorType === "mask") {
                                        r.igMaskEditor(s)
                                    } else {
                                        if (l.editorType === "currency") {
                                            r.igCurrencyEditor(s)
                                        } else {
                                            if (l.editorType === "combo") {
                                                r.igCombo(s)
                                            } else {
                                                r.igEditor(s)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            a(h).igButton("option", "disabled", true)
        },

        _openRowEditDialog: function (j, l) {
            var i = a("#" + this.grid.container().attr("id") + "_ret"), k, h;
            k = this._fire("rowEditDialogOpening", j, h = {
                dialogElement: i,
                owner: this
            });
            if (k) {
                i.data("tr", l);
                this._fillRowEditDialogTable(l);
                this._calcRowDialogLeftTop(i);
                setTimeout(function () {
                    if (i.find("input")[0]) {
                        i.find("input")[0].focus()
                    }
                    i.focus()
                }, 100);
                if (j !== null && j !== undefined) {
                    j.preventDefault();
                    j.stopPropagation()
                }
                this._fire("rowEditDialogOpened", j, {
                    dialogElement: i,
                    owner: this
                });
                return 1
            }
            return 0
        },

        _renderRowEditDialog: function (k, p) {
            var i, h, j, n, m, l = this, o;
            i = a("<div></div>").appendTo("body").attr("id", this.grid.container().attr("id") + "_ret").css("position", "absolute").addClass(this.css.rowEditDialog).data("efh", "1").hide();
            i.data("tr", p);
            n = this._fire("rowEditDialogContentsRendering", k, {
                dialogElement: i,
                owner: l
            });
            if (n) {
                a("<div></div>").appendTo("body").attr("id", this.grid.container().attr("id") + "_block_ret").css("position", "absolute").addClass(this.css.blockArea).data("efh", "1").hide();
                a("<span></span>").appendTo(h = a("<div></div>").appendTo(i).addClass(this.css.rowEditDialogHeaderCaption)).text(this.options.labels.rowEditDialogCaptionLabel).addClass(this.css.rowEditDialogHeaderCaptionTitle);
                a("<span></span>").appendTo(a("<a></a>").appendTo(h).attr("href", "#").attr("role", "button").addClass("ui-dialog-titlebar-close ui-corner-all")).bind({
                    click: a.proxy(this._closeRowEditDialog, this)
                }).addClass("ui-icon ui-icon-closethick");
                j = a("<div></div>").appendTo(i).addClass("ui-dialog-content").css("overflow", "auto").css("height", this.options.rowEditDialogMaxHeight);
                a("<table><tbody></tbody></table>").appendTo(j).addClass(this.css.rowEditDialogTable);
                o = a("<div></div>").appendTo(a("<div></div>").appendTo(i).addClass(this.css.rowEditDialogOkCancelButton)).addClass("ui-dialog-buttonset");
                a("<button/>").appendTo(o).igButton({
                    labelText: this._loc("cancel"),
                    width: this.options.rowEditDialogOkCancelButtonWidth
                }).bind({
                        mousedown: a.proxy(this._closeRowEditDialog, this)
                    });
                a("<button/>").appendTo(o).igButton({
                    labelText: this._loc("done"),
                    disabled: true,
                    width: this.options.rowEditDialogOkCancelButtonWidth
                }).bind({
                        click: a.proxy(this._rowEditDialogDoUpdate, this)
                    }).attr("id", this.grid.container().attr("id") + "_igButton");
                if (this._hc === true) {
                    m = a("#" + this.grid.element[0].id.split("_")[0] + "_container")
                } else {
                    if (this.options.rowEditDialogContainment === "owner") {
                        m = this.grid.container()
                    } else {
                        m = "window"
                    }
                }
                i.bind({
                    keydown: function (q) {
                        if (q.keyCode === a.ui.keyCode.ESCAPE) {
                            l._closeRowEditDialog(q)
                        }
                    }
                }).draggable({
                        containment: m,
                        handle: h,
                        drag: a.proxy(this._rowEditDialogMove, this)
                    }).resizable({
                        minHeight: i.outerHeight() / 4,
                        minWidth: i.outerWidth() / 2,
                        containment: "parent",
                        resize: a.proxy(this._resizeHandler, this)
                    }).attr("role", "dialog").attr("tabIndex", -1);
                this._fire("rowEditDialogContentsRendered", k, {
                    dialogElement: i,
                    owner: this
                })
            }
        },

        _allRowEditDialogValidatorsPassed: function (m) {
            var p = a("#" + this.grid.container().attr("id") + "_ret table tbody"), q = p.find("[data-key]"), o, n, h = true, k, j, l, r;
            for (n = 0; n < q.length; ++n) {
                o = a(q[n]).find("input");
                k = a(q[n]).attr("data-key");
                j = this.grid.columnByKey(k);
                l = this._getColumnSettingsByKey(k);
                r = this._getValidator(o, j, l);
                if (r && r.isValidState && !r.isValidState()) {
                    h = false;
                    break
                }
            }
            return h
        },

        _rowEditDialogValidatorsChanged: function (i) {
            var h = "#" + this.grid.container().attr("id") + "_igButton";
            if (this._allRowEditDialogValidatorsPassed()) {
                a(h).igButton("option", "disabled", false)
            } else {
                a(h).igButton("option", "disabled", true)
            }
        },

        _setResizableEnv: function () {
            var i = a("#" + this.grid.container().attr("id") + "_ret"), l = i.find(">.ui-dialog-content"), j = i.find(">.ui-dialog-titlebar"), h = i.find(">.ui-dialog-buttonpane"), k = l.outerHeight() - l.height();
            this._resizeCont = l;
            this._heightDifference = j.outerHeight(true) + h.outerHeight(true) + k
        },

        _resizeHandler: function (h, j) {
            var i = j.originalElement;
            this._resizeCont.css({
                height: (i.height() - this._heightDifference) + "px"
            })
        },

        _rowEditDialogMove: function (h) {
        },

        _getValidator: function (l, i, j) {
            var h = !j || !j.editorType, k;
            if (!j) {
                j = {}
            }
            if (j.editorType === "datepicker" || (h && i.dataType === "date")) {
                k = l.igDatePicker("validator")
            } else {
                if (j.editorType === "date" || (h && i.dataType === "date")) {
                    k = l.igDateEditor("validator")
                } else {
                    if (j.editorType === "string" || (h && (i.dataType === "string" || i.dataType === "text"))) {
                        k = l.igTextEditor("validator")
                    } else {
                        if (j.editorType === "numeric" || (h && i.dataType === "number")) {
                            k = l.igNumericEditor("validator")
                        } else {
                            if (j.editorType === "percent") {
                                k = l.igPercentEditor("validator")
                            } else {
                                if (j.editorType === "mask") {
                                    k = l.igMaskEditor("validator")
                                } else {
                                    if (j.editorType === "currency") {
                                        k = l.igCurrencyEditor("validator")
                                    } else {
                                        if (j.editorType === "combo") {
                                            k = l.igCombo("validator")
                                        } else {
                                            k = l.igEditor("validator")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return k
        },

        _getEditorValue: function (l, i, j) {
            var h = !j || !j.editorType, k;
            if (!j) {
                j = {}
            }
            if (j.editorType === "datepicker" || (h && i.dataType === "date")) {
                k = this.grid._fixDate(l.igDatePicker("value"), this._gridCol(i.key))
            } else {
                if (j.editorType === "date" || (h && i.dataType === "date")) {
                    k = this.grid._fixDate(l.igDateEditor("value"), this._gridCol(i.key))
                } else {
                    if (j.editorType === "string" || (h && (i.dataType === "string" || i.dataType === "text"))) {
                        k = l.igTextEditor("value")
                    } else {
                        if (j.editorType === "numeric" || (h && i.dataType === "number")) {
                            k = l.igNumericEditor("value")
                        } else {
                            if (j.editorType === "bool" || (h && i.dataType === "bool")) {
                                if (typeof (l.igEditor("value")) === "boolean") {
                                    k = l.igEditor("value")
                                } else {
                                    k = l.igEditor("value").toLowerCase() === "true"
                                }
                            } else {
                                if (j.editorType === "percent") {
                                    k = l.igPercentEditor("value")
                                } else {
                                    if (j.editorType === "mask") {
                                        k = l.igMaskEditor("value")
                                    } else {
                                        if (j.editorType === "currency") {
                                            k = l.igCurrencyEditor("value")
                                        } else {
                                            if (j.editorType === "combo") {
                                                k = l.igCombo("value")
                                            } else {
                                                k = l.igEditor("value")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return k
        },

        _rowEditDialogDoUpdate: function (l) {
            var r = a("#" + this.grid.container().attr("id") + "_ret").data("tr"), o = a("#" + this.grid.container().attr("id") + "_ret table tbody"), q = o.find("[data-key]"), p, n, m, t = {}, h, k, j, s;
            for (m = 0; m < q.length; ++m) {
                p = a(q[m]);
                j = p.attr("data-key");
                h = this.grid.columnByKey(j);
                n = a(q[m]).find("input");
                k = this._getColumnSettingsByKey(j);
                s = this._getValidator(n, h, k);
                if (s && s.isValidState && !s.isValidState()) {
                    return 0
                }
                t[p.attr("data-key")] = this._getEditorValue(n, h, k)
            }
            if (r !== null && r !== undefined && r.length > 0) {
                this._update(r.data().id, r[0], t)
            } else {
                this._update(t)
            }
            this._closeRowEditDialog(l);
            return 1
        },

        _closeRowEditDialog: function (j) {
            var k = true, i = a("#" + this.grid.container().attr("id") + "_ret"), h;
            k = this._fire("rowEditDialogClosing", j, h = {
                dialogElement: i,
                owner: this
            });
            if (k) {
                a("#" + this.grid.container().attr("id") + "_block_ret").fadeToggle();
                a("#" + this.grid.container().attr("id") + "_ret").data("tr", null).fadeToggle();
                delete this._defValue;
                if (j) {
                    j.preventDefault();
                    j.stopPropagation()
                }
                this._fire("rowEditDialogClosed", j, {
                    dialogElement: i,
                    owner: this
                });
                return 1
            }
            return 0
        },

        _lastEditor: function () {
            var i, j = this._prevEdit, h = this._editors;
            if (!j) {
                for (i in h) {
                    if (h.hasOwnProperty(i)) {
                        j = h[i] || j
                    }
                }
            }
            return j
        },

        _end: function () {
            this._delHover();
            this._endEdit()
        },

        destroy: function () {
            var h = this._div(), j = this.grid, i = j.element;
            if (!this._evts || !i || !h) {
                return this
            }
            this._doButtons(2);
            h.unbind(this._evts);
            if (this._sEvts) {
                i.parent().unbind(this._sEvts)
            }
            i.unbind(this._gEvts);
            this._end();
            this._headerRendered(1);
            this._evts = this._sEvts = this._gEvts = null;
            a.Widget.prototype.destroy.call(this);
            return this
        },

        _hidingFinished: function () {
            this._headerRendered()
        },

        _hidingFinishing: function () {
            var j, k, l = this._addTR, i = this.grid, h = this._editors;
            if (!i._initialized) {
                return
            }
            this._endEdit();
            this._doButtons(2);
            if (this._groupTD1) {
                this._groupTD1.remove();
                this._groupTD2.remove();
                delete this._groupTD1;
                delete this._groupTD2;
                this._cShift = this._cShiftAdd = -1
            }
            if (l) {
                k = this._colShift(null, l[0]);
                this._addTrShift = [];
                this._newTrShift = [];
                while (k-- > 0) {
                    this._addTrShift[k] = l.children()[k];
                    this._newTrShift[k] = this._newTR.children()[k]
                }
                l.remove();
                this._newTR.remove()
            }
            for (j in h) {
                if (h.hasOwnProperty(j) && h[j]) {
                    h[j].remove()
                }
            }
            this._newTR = this._addTR = this._editors = this._mapAdd = this._map = null;
            this._cShiftAdd = this._cShift = -1
        },

        _rerender: function (h) {
            var n, w, q, p, j, k, s, t, o, l = this.grid, v = l.pendingTransactions(), m = v ? v.length : 0, r = l.element.children("tbody"), u = l.options.jQueryTemplating;
            if (h && h.owner && h.owner.id() !== l.id()) {
                return
            }
            while (m-- > 0) {
                q = v[m];
                j = q.type === "cell";
                p = r.find('[data-id="' + q.rowId + '"]');
                if (q.type === "row" || q.type === "newrow" || j) {
                    p.addClass(l.css.modifiedRecord);
                    t = (p.length && !u) ? p.children("td") : null;
                    n = t ? t.length : 0;
                    while (n-- > 0) {
                        o = this._key(s = a(t[n]));
                        w = undefined;
                        if (q.row) {
                            w = q.row[o]
                        } else {
                            if (j && o === q.col) {
                                w = q.value
                            }
                        }
                        if (w !== undefined) {
                            k = b(o) ? null : this._gridCol(o);
                            w = k ? l._renderCell(w, k) : a.ig.formatter(w);
                            s.html(w)
                        }
                    }
                }
                if (q.type === "deleterow" || q.type === "insertrow") {
                    p.addClass(l.css.deletedRecord)
                }
            }
        },

        _bind: function (h) {
            var o, p, k = this.grid, j = k.dataSource._data, l = j ? j.length : 0, r = this.grid.dataSource.pendingTransactions(), m = r ? r.length : 0, q = this._txLast, n = q ? q.length : 0;
            this._addRowNum = Math.max(this._addRowNum || 1, l + 1);
            this._endEdit();
            if (!h) {
                if (l && b(k.options.primaryKey) && b(j[0].ig_pk)) {
                    while (l-- > 0) {
                        j[l].ig_pk = l
                    }
                }
            } else {
                if (h.owner && h.owner.id() !== this.grid.id()) {
                    return
                }
            }
            if (m < 1) {
                return
            }
            if (m === n) {
                while (n-- > 0) {
                    o = r[n];
                    p = q[n];
                    if (o.tid !== p.tid || o.value !== p.value || o.row !== p.row) {
                        break
                    }
                }
                if (n < 0) {
                    return
                }
            }
            q = this._txLast = [];
            while (m-- > 0) {
                q[m] = {
                    tid: r[m].tid,
                    value: r[m].value,
                    row: r[m].row
                }
            }
            if (this._fire("dataDirty", this._evt || {}, {}) && this.options.enableDataDirtyException) {
                g("dataDirtyException")
            }
        },

        _fixPrime: function (l, j) {
            var k = this.grid, m = k.options, n = m.primaryKey, h = b(n) ? null : this._gridCol(n), i = k.dataSource._data;
            if (j) {
                if (!h) {
                    l.ig_pk = j = i.length;
                    return j
                }
                if (b(j = l[n])) {
                    j = l[n] = this._defVal(n, 1)
                }
                l = j
            }
            l = (h && h.dataType !== "number" && h.dataType !== "numeric") ? l : parseInt(l, 10);
            if (!h && (!i[l] || i[l].ig_pk !== l)) {
                g("noPrimaryKeyException")
            }
            return l
        },

        _getRecord: function (k) {
            var j = -1, h = this.grid.dataSource._data, l = h.length, m = this.grid.options.primaryKey;
            k = this._fixPrime(k);
            if (b(m)) {
                m = "ig_pk"
            }
            while (++j < l) {
                if (h[j][m] === k) {
                    return h[j]
                }
            }
        },

        _getVal: function (l, k) {
            var o, m, h = this.grid, n = h.dataSource.pendingTransactions(), j = n ? n.length : 0;
            while (j-- > 0 && o === undefined) {
                m = n[j];
                if (m.rowId === l) {
                    if (m.row) {
                        o = m.row[k]
                    } else {
                        if (m.type === "cell" && m.col === k) {
                            o = m.value
                        }
                    }
                }
            }
            if (o === undefined) {
                l = this._getRecord(l);
                o = l ? l[k] : null
            }
            return h._fixDate(o, this._gridCol(k))
        },

        _update: function (q, r, t, j) {
            var s, n, u, w, k = t === undefined, m = this.grid, p = m.options, h = p.autoCommit, l = m.dataSource, o = this._fixPrime(q, r ? null : l), v = m._virtualDom;
            n = r ? (k ? l.deleteRow(q, h) : (j ? l.setCellValue(o, j, t, h) : l.updateRow(o, t, h))) : l.addRow(o, q, h);
            s = l.pendingTransactions();
            n = s ? s.length : 0;
            while (n-- > 0) {
                if (q === s[n].rowId) {
                    if (s[n].row && j) {
                        s[n].row[j] = t
                    }
                    break
                }
            }
            if (v) {
                u = a("#" + m.id() + (v ? "_scrollContainer" : "_scroll"))[0];
                w = u ? u.scrollTop : 0;
                n = true;
                if (v && p.virtualizationMode === "continuous") {
                    m._rerenderVirtualRecordsContinuous();
                    n = false
                }
                if (n || this._sel("get")) {
                    m._renderData()
                }
                if (w) {
                    u.scrollTop = w
                }
                if (v) {
                    m._onVirtualVerticalScroll()
                }
                return
            }
            if (!r) {
                m.renderNewRow(q, o);
                r = m.element.children("tbody").children("tr");
                r = r[r.length - 1]
            } else {
                if (k) {
                    return a(r).addClass(m.css.deletedRecord)
                }
                t = {};
                j = p.columns;
                n = j.length;
                while (n-- > 0) {
                    t[o = j[n].key] = this._getVal(q, o)
                }
                if (r !== 1 && !b(t = m._renderRow(t, r, q))) {
                    r = t
                }
            }
            if (r && r !== 1 && !h) {
                a(r).addClass(m.css.modifiedRecord)
            }
        },

        _injectGrid: function (h) {
            var i = this;
            i.grid = h;
            i._cShiftAdd = i._cShift = -1;
            i._gEvts = {
                iggridvirtualrendering: function () {
                    i._end()
                },
                ighierarchicalgridrowexpanded: function () {
                    i._end()
                },
                iggriddatabinding: function (k, j) {
                    i._bind(j)
                },
                iggriddatarendering: function () {
                    i._bind()
                },
                iggridrowsrendering: function () {
                    i._bind()
                },
                iggriduidirty: function () {
                    i._end()
                },
                iggridresizingcolumnresizing: function () {
                    i._end()
                },
                iggridvirtualrecordsrender: function (k, j) {
                    i._rerender(j)
                },
                iggridrowsrendered: function (k, j) {
                    i._rerender(j)
                }
            };
            if (this.options.enableAddRow) {
                i._gEvts.iggridheaderrenderedinternal = function () {
                    i._headerRendered()
                };
                i._gEvts.iggridheaderextracellsmodified = function () {
                    i._hierHeaderInit()
                }
            }
            i._gEvts.iggridgroupbygroupedcolumnschanged = function (k, j) {
                i._groupedColumnsChanged(j)
            };
            h.element.bind(this._gEvts);
            i._ti = parseInt(h.options.tabIndex || 1, 10);
            i._evts = {
                iggridselectionmousedown: function (j) {
                    i._onEvt(j, 1)
                },
                mousedown: function (j) {
                    i._onEvt(j, 1)
                },
                click: function (j) {
                    i._onEvt(j, 2)
                },
                dblclick: function (j) {
                    i._onEvt(j, 3)
                },
                touchstart: function (j) {
                    i._onEvt(j, 11)
                },
                MSPointerDown: function (j) {
                    i._onEvt(j, 11)
                },
                keydown: function (j) {
                    i._onEvt(j, 4)
                },
                focus: function (j) {
                    i._onEvt(j, 5)
                },
                blur: function (j) {
                    i._onEvt(j, 6)
                },
                mousemove: function (j) {
                    i._onEvt(j, 7)
                },
                mouseleave: function (j) {
                    i._onEvt(j, 8)
                }
            };
            i.grid.dataSource._addChangesSuccessHandler(function (j) {
                if (j.Success) {
                    if (h.rows().parent().find("." + h.css.deletedRecord).length) {
                        h._renderData()
                    }
                    h.rows().removeClass(h.css.modifiedRecord)
                }
            })
        }

    });

    a.extend(a.ui.igGridUpdating, {
        version: "12.2.20122.1021"
    });

    a.widget("ui.igEditorFilter", {

        setFocus: function (h, j) {
            var i = this.options.provider;
            setTimeout(function () {
                i.setFocus(j)
            }, h)
        },

        remove: function () {
            if (!this.options.provider.removeFromParent()) {
                var i, h = this.element;
                i = h[0].parentNode;
                if (i && i.tagName) {
                    i.removeChild(h[0])
                }
                h = this.validator();
                if (h) {
                    h.hide()
                }
            }
        },

        validator: function () {
            return this.options.provider.validator()
        },

        hasInvalidMessage: function () {
            var h = this.validator();
            return h ? h.isMessageDisplayed() : false
        },

        destroy: function () {
            this.options.provider.destroy()
        }

    });

    a.extend(a.ui.igEditorFilter, {

        version: "12.2.20122.1021"

    });

    a.ig.EditorProvider = a.ig.EditorProvider || Class.extend({

        createEditor: function (n, l, i, m, k, j, h) {
        },

        getValue: function () {
        },

        setValue: function (h) {
        },

        setFocus: function () {
        },

        setSize: function (i, h) {
        },

        removeFromParent: function () {
            return false
        },

        destroy: function () {
        },

        validator: function () {
        },

        validate: function (h) {
            var i = this.validator();
            return i ? !i.validate() : true
        },

        isValid: function () {
            var h = this.validator();
            return h ? h.isValidState() : true
        }

    });

    a.ig.EditorProviderDefault = a.ig.EditorProviderDefault || a.ig.EditorProvider.extend({

        createEditor: function (p, l, i, n, k, j, h) {
            var q, m = {};
            if (i) {
                m = i.editorOptions || m;
                m.type = i.editorType || m.type
            }
            q = m.type;
            if (m.enableUTCDates !== false && p.grid.options.enableUTCDates) {
                m.enableUTCDates = true
            }
            if (!q) {
                if (j === "bool") {
                    m.listItems = ["true", "false"];
                    m.button = "dropdown";
                    this._bool = m.readOnly = m.dropDownOnReadOnly = m.spinOnReadOnly = m.spinWrapAround = true
                } else {
                    if (k === "currency" || k === "percent" || k === "date") {
                        q = k;
                        m.displayFactor = m.displayFactor || 1
                    } else {
                        if (j === "number") {
                            q = "numeric"
                        } else {
                            if (j === "date") {
                                q = "date"
                            } else {
                                if (!j) {
                                    q = h;
                                    q = (typeof q === "number") ? "numeric" : ((q && q.getTime) ? "date" : null)
                                }
                            }
                        }
                    }
                }
                m.type = q
            }
            if (k === "int") {
                m.maxDecimals = 0
            } else {
                if (k === "double" && !m.maxDecimals) {
                    m.maxDecimals = 100
                } else {
                    if (k && q && q.toString().indexOf("date") === 0 && !m.dateInputFormat) {
                        m.dateInputFormat = k
                    }
                }
            }
            if ((q === "datepicker" || q === 3) && !m.button) {
                m.button = "dropdown"
            }
            m.tabIndex = n;
            m.textChanged = function () {
                p._notifyChanged()
            };
            m.keydown = function (o) {
                p._13 = m.textMode && !m.hideEnterKey;
                p._notifyEditorKey(o, l)
            };
            q = a("<span />");
            if (!q.igEditor) {
                g("igEditorException")
            }
            if (m.id) {
                q.attr("id", m.id)
            }
            m.excelNavigationMode = p.options.excelNavigationMode;
            q = q.igEditor(m);
            this.editor = q.data("igEditor");
            return q
        },

        getValue: function () {
            var h = this.editor.value();
            return this._bool ? (h === "true") : h
        },

        setValue: function (h) {
            return this.editor.value(this._bool ? ((h && h !== "false") ? "true" : "false") : h)
        },

        setSize: function (i, h) {
            this.editor._listRemove();
            this.editor._width(i);
            this.editor._height(h)
        },

        setFocus: function () {
            this.editor.setFocus(-1)
        },

        removeFromParent: function () {
            return this.editor.remove()
        },

        destroy: function () {
            this.editor.destroy()
        },

        validator: function () {
            return this.editor.validator()
        },

        validate: function (h) {
            return this.editor.validate(h)
        },

        isValid: function () {
            return this.editor.isValid()
        }

    });

    a.ig.EditorProviderCombo = a.ig.EditorProviderCombo || a.ig.EditorProvider.extend({

        createEditor: function (l, i, h, k) {
            var m, j = {};
            if (h) {
                j = h.editorOptions || j
            }
            j.tabIndex = k;
            j.textChanged = function () {
                l._notifyChanged()
            };
            j.keydown = function (n, o) {
                if (!o || !o.owner || !o.owner._ddOn) {
                    l._notifyEditorKey(n, i)
                }
            };
            m = a("<span />");
            if (!m.igCombo) {
                g("igComboException")
            }
            if (j.id) {
                m.attr("id", j.id)
            }
            m = m.igCombo(j);
            this.editor = m.data("igCombo");
            return m
        },

        getValue: function () {
            return this.editor.options.allowCustomValue ? this.editor.text() : this.editor.value()
        },

        setValue: function (j) {
            var h = this.editor, i = h.options;
            if (i.filteringType) {
                h.selectedIndex(-1);
                h.activeIndex(-1);
                h.dataBind()
            }
            return i.allowCustomValue ? h.text((j === null ? (i.nullText || "") : j)) : h.value(j)
        },

        setSize: function (i, h) {
            this.editor.options.width = i;
            this.editor.options.height = h;
            this.editor._doSize()
        },

        setFocus: function () {
            this.editor.setFocus(-1)
        },

        removeFromParent: function () {
            return this.editor.remove()
        },

        validator: function () {
            return this.editor.validator()
        },

        destroy: function () {
            this.editor.destroy()
        }

    });

    a.ig.EditorProviderRating = a.ig.EditorProviderRating || a.ig.EditorProvider.extend({

        createEditor: function (m, j, h, l) {
            var i, n, k = {};
            if (h) {
                k = h.editorOptions || k
            }
            k.valueChange = function () {
                m._notifyChanged()
            };
            n = a("<div />");
            if (!n.igRating) {
                g("igRatingException")
            }
            if (k.id) {
                n.attr("id", k.id)
            }
            n = n.igRating(k);
            this.editor = n.data("igRating");
            i = this.editor._foc;
            if (i) {
                i.attr("tabIndex", l);
                i.keydown(function (o) {
                    m._notifyEditorKey(o, j)
                })
            }
            return n
        },

        getValue: function () {
            return this.editor.value()
        },

        setValue: function (h) {
            return this.editor.value(h || 0)
        },

        setSize: function (j, i) {
            if (!this._once) {
                this.editor._doVotes(this.editor.options)
            }
            this._once = 1;
            var h = this.editor.element.parent().css("backgroundColor");
            this.editor.element.css({
                width: j,
                height: i,
                backgroundColor: h
            })
        },

        setFocus: function () {
            this.editor.focus()
        },

        validator: function () {
            return this.editor.validator()
        },

        destroy: function () {
            this.editor.destroy()
        }

    });

    a.ig.EditorProviderCheckbox = a.ig.EditorProviderCheckbox || a.ig.EditorProvider.extend({

        createEditor: function (q, l, h, p, k, i) {
            var j, m = this, n = h;
            m.updating = q;
            m.none = i === "bool" ? false : null;
            m.element = j = a('<span tabindex="' + p + '"/>').addClass("ui-igedit-field ui-state-default ui-corner-all").css({
                overflow: "hidden",
                textAlign: "center",
                outline: 0,
                background: "#ffffff",
                display: "block"
            }).click(function () {
                    m.setValue(0, q)
                }).focus(function () {
                    m.css(true, true)
                }).blur(function () {
                    m.css(true)
                }).mouseover(function () {
                    m.css(null, true)
                }).mouseleave(function () {
                    m.css()
                }).keydown(function (o) {
                    q._notifyEditorKey(o, l);
                    if (o && o.keyCode === 32) {
                        f(o);
                        m.setValue(0, q)
                    }
                });
            n = n ? n.editorOptions : null;
            if (n && n.id) {
                j.attr("id", n.id)
            }
            j = a('<span class="ui-state-default ui-corner-all ui-igcheckbox-small" />').css("display", "inline-block").appendTo(j);
            a('<span class="ui-icon ui-icon-check ui-igcheckbox-small-on" />').css("display", "block").appendTo(j);
            return this.element
        },

        el: function (h) {
            var i = this.element;
            while (h-- > 0) {
                i = a(i.children()[0])
            }
            return i
        },

        getValue: function () {
            return this.value
        },

        setValue: function (j, i) {
            var h = "ui-igcheckbox-small-off";
            if (i) {
                j = !this.value
            }
            this.value = (j || j === false) ? j : this.none;
            if (j) {
                this.el(2).removeClass(h)
            } else {
                this.el(2).addClass(h)
            }
            if (i) {
                i._notifyChanged()
            }
        },

        css: function (j, l) {
            var k = 2, h = j ? "ui-state-focus" : "ui-state-hover";
            while (k-- > 0) {
                if (l) {
                    this.el(k).addClass(h)
                } else {
                    this.el(k).removeClass(h)
                }
            }
        },

        setSize: function (j, i) {
            var h = this.el(0);
            this.el(1).css("marginTop", Math.floor((i - 15) / 2) + "px");
            this.css();
            this.css(true);
            h.css({
                width: j - d(h, "borderLeftWidth") - d(h, "borderRightWidth"),
                height: i - d(h, "borderTopWidth") - d(h, "borderBottomWidth")
            })
        },

        setFocus: function (h) {
            this.el(0).focus();
            if (h) {
                this.setValue(0, this.updating)
            }
        }

    })

}(jQuery));