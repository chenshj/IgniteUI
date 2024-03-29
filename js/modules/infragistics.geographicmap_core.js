﻿/*
 * Infragistics.Web.ClientUI infragistics.geographicmap_core.js 12.2.20122.1021
 *
 * Copyright (c) 2011-2012 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends:
 *     jquery-1.4.4.js
 *     jquery.ui.core.js
 *     jquery.ui.widget.js
 *     infragistics.util.js
 */
$.ig = $.ig || {};
$.ig.util.bulkDefine(["AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise"]);
$.ig.util.defType("IDictionary$2", "Object", {$type: new $.ig.Type("IDictionary$2", null, [$.ig.ICollection$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable$1.prototype.$type.specialize($.ig.KeyValuePair$2.prototype.$type.specialize(0, 1)), $.ig.IEnumerable.prototype.$type])}, true);
$.ig.util.defType("LinkedList$1", "Object", {$t: null, init: function (a) {
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this)
}, a: null, c: function () {
    return this.a
}, b: null, d: function () {
    return this.b
}, g: function (c) {
    if (this.a == null) {
        this.a = new $.ig.LinkedListNode$1(this.$t, 1, c);
        this.b = this.a
    } else {
        var d = this.a;
        this.a = new $.ig.LinkedListNode$1(this.$t, 1, c);
        this.a.b = d;
        d.a = this.a
    }
}, h: function (c) {
    if (this.b == null) {
        this.a = new $.ig.LinkedListNode$1(this.$t, 1, c);
        this.b = this.a
    } else {
        var d = this.b;
        this.b = new $.ig.LinkedListNode$1(this.$t, 1, c);
        this.b.a = d;
        d.b = this.b
    }
}, i: function (b) {
    if (this.a == b) {
        this.a = b.b;
        if (b.b != null) {
            b.b.a = null
        }
    }
    if (this.b == b) {
        this.b = b.a;
        if (b.a != null) {
            b.a.b = null
        }
    }
    if (b.a != null) {
        b.a.b = b.b
    }
    if (b.b != null) {
        b.b.a = b.a
    }
    b.b = null;
    b.a = null
}, $type: new $.ig.Type("LinkedList$1", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LinkedListNode$1", "Object", {$t: null, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, a: null, b: null, init: function (a, b) {
    if (b > 0) {
        switch (b) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this)
}, init1: function (b, d, c) {
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.d(c)
}, $type: new $.ig.Type("LinkedListNode$1", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Stack$1", "Object", {$t: null, init: function (a) {
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.Array()
}, a: null, c: function (b) {
    this.a.add(b)
}, d: function () {
    if (this.a.length < 1) {
        return null
    }
    return this.a[this.a.length - 1]
}, e: function () {
    var b = this.a[this.a.length - 1];
    this.a.removeAt(this.a.length - 1);
    return b
}, b: function () {
    return this.a.length
}, g: function () {
    this.a.clear()
}, h: function (b) {
    return this.a.contains(b)
}, getEnumerator: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$b = this.$this.a.getEnumerator();
                            this.$state = 4;
                            break;
                        case 2:
                            this.$a = this.$b.current();
                            this.$current = this.$a;
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$b.moveNext()) {
                                this.$state = 2
                            } else {
                                this.$state = 5
                            }
                            break;
                        case 5:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerator$1(this.$t, a())
}, $type: new $.ig.Type("Stack$1", $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(0)])}, true);
$.ig.util.defType("AsyncCompletedEventArgs", "EventArgs", {a: null, b: null, c: null, init: function (d, e, f) {
    $.ig.EventArgs.prototype.init.call(this);
    this.b = e;
    this.a = d;
    this.c = f
}, error: function () {
    return this.a
}, cancelled: function () {
    return this.b
}, userState: function () {
    return this.c
}, d: function () {
    if (this.error() != null) {
        throw this.error()
    }
}, $type: new $.ig.Type("AsyncCompletedEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("Convert", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (b) {
    return b
}, b: function (b) {
    return b
}, c: function (h) {
    if (h >= 0) {
        var i = Math.floor(h);
        var j = h - i;
        var k = Math.ceil(h) - h;
        if (j > k || ((j == k) && (i & 1) > 0)) {
            i++
        }
        return i
    } else {
        var l = Math.ceil(h);
        var m = l - h;
        var n = h - Math.floor(h);
        if (m > n || ((m == n) && (l & 1) > 0)) {
            l--
        }
        return l
    }
}, d: function (b) {
    return parseInt(b)
}, $type: new $.ig.Type("Convert", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("BinaryReader", "Object", {__data: null, a: null, b: null, c: function () {
    return this.b < this.__data.length
}, d: function () {
    return this.b
}, e: function () {
    return this.__data.length
}, init: function (c, d) {
    this.__data = null;
    this.a = false;
    this.b = 0;
    $.ig.Object.prototype.init.call(this);
    this.__data = c;
    this.a = d
}, i: function (a) {
    return this.__data.charCodeAt(a) & 255
}, j: function (f, c) {
    var d = new Array(c);
    for (var e = 0; e < c; e++) {
        d[e] = this.__data.charCodeAt(f + e) & 255
    }
    return d
}, k: function (e, d) {
    var b = new Array(d);
    for (var c = 0; c < d; c++) {
        b[c] = this.__data.charCodeAt(e + (d - 1 - c)) & 255
    }
    return b
}, l: function () {
    var b = this.i(this.b);
    this.b = this.b + 1;
    return b
}, m: function (c) {
    var d = this.j(this.b, c);
    this.b = this.b + c;
    return d
}, n: function () {
    var b = 0;
    if (this.a) {
        b = b + (this.i(this.b) << 24);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 16);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 8);
        this.b = this.b + 1;
        b = b + this.i(this.b);
        this.b = this.b + 1
    } else {
        b = b + this.i(this.b);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 8);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 16);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 24);
        this.b = this.b + 1
    }
    return b
}, o: function () {
    var b = 0;
    if (this.a) {
        b = b + (this.i(this.b) << 8);
        this.b = this.b + 1;
        b = b + this.i(this.b);
        this.b = this.b + 1
    } else {
        b = b + this.i(this.b);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 8);
        this.b = this.b + 1
    }
    return b
}, p: function () {
    var b = 0;
    if (this.a) {
        b = b + (this.i(this.b) << 24);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 16);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 8);
        this.b = this.b + 1;
        b = b + this.i(this.b);
        this.b = this.b + 1
    } else {
        b = b + this.i(this.b);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 8);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 16);
        this.b = this.b + 1;
        b = b + (this.i(this.b) << 24);
        this.b = this.b + 1
    }
    if (b > 2147483647) {
        b = b - 4294967296
    }
    return b
}, q: function () {
    var k = this.k(this.b, 8);
    this.b = this.b + 8;
    var l = k[0] >> 7;
    var m = 0;
    m = m + (k[1] >> 4);
    m = m + ((k[0] & 127) << 4);
    var n = 1;
    var o = k[1];
    var p = 1 / 2;
    var q = 0;
    var r = false;
    for (q = 5; q <= 8; q++) {
        if ((o & (1 << (8 - q))) > 0) {
            n = n + p;
            r = true
        }
        p = p / 2
    }
    for (var s = 2; s < 8; s++) {
        o = k[s];
        for (q = 1; q <= 8; q++) {
            if ((o & (1 << (8 - q))) > 0) {
                n = n + p;
                r = true
            }
            p = p / 2
        }
    }
    if (m == 0 && !r) {
        return 0
    }
    if (m == 0 && r) {
        m = 1;
        n = n - 1
    }
    if (m == 1860 && !r) {
        if (l == 1) {
            return $.ig.Number.prototype.nEGATIVE_INFINITY
        } else {
            return $.ig.Number.prototype.pOSITIVE_INFINITY
        }
    }
    if (m == 1860 && r) {
        return NaN
    }
    var t = m - 1023;
    return Math.pow(-1, l) * Math.pow(2, t) * n
}, r: function () {
    var k = this.k(this.b, 4);
    this.b = this.b + 4;
    var l = k[0] >> 7;
    var m = 0;
    m = m + (k[1] >> 7);
    m = m + ((k[0] & 127) << 1);
    var n = 1;
    var o = k[1];
    var p = 1 / 2;
    var q = 0;
    var r = false;
    for (q = 2; q <= 8; q++) {
        if ((o & (1 << (8 - q))) > 0) {
            n = n + p;
            r = true
        }
        p = p / 2
    }
    for (var s = 2; s < 4; s++) {
        o = k[s];
        for (q = 1; q <= 8; q++) {
            if ((o & (1 << (8 - q))) > 0) {
                n = n + p;
                r = true
            }
            p = p / 2
        }
    }
    if (m == 0 && !r) {
        return 0
    }
    if (m == 0 && r) {
        m = 1;
        n = n - 1
    }
    if (m == 255 && !r) {
        if (l == 1) {
            return $.ig.Number.prototype.nEGATIVE_INFINITY
        } else {
            return $.ig.Number.prototype.pOSITIVE_INFINITY
        }
    }
    if (m == 255 && r) {
        return NaN
    }
    var t = m - 127;
    return(Math.pow(-1, l)) * (Math.pow(2, t)) * n
}, $type: new $.ig.Type("BinaryReader", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("StringBuilder", "Object", {_internal: null, internal: function (b) {
    if (arguments.length === 1) {
        this._internal = b;
        return b
    } else {
        return this._internal
    }
}, init: function () {
    $.ig.Object.prototype.init.call(this);
    this._internal = []
}, d: function (a) {
    this._internal.push(a);
    return this
}, e: function (b) {
    var c = b.toString();
    this._internal.push(c);
    return this
}, f: function (a) {
    this._internal.push(a);
    return this
}, g: function (a) {
    this._internal.push(a + String.fromCharCode(10));
    return this
}, h: function (b, a) {
    this._internal.splice(b, 0, a);
    return this
}, i: function (a, b) {
    this._internal.splice(a, 0, b);
    return this
}, j: function (b, a) {
    this._internal.splice(b, a);
    return this
}, toString: function () {
    return this._internal.join("")
}, $type: new $.ig.Type("StringBuilder", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("BinaryFileDownloader", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (c, a, b) {
    $.ig.util.getBinary(c, a, b)
}, $type: new $.ig.Type("BinaryFileDownloader", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Encoding", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, uTF8: function () {
    if ($.ig.Encoding.prototype.a == null) {
        $.ig.Encoding.prototype.a = new $.ig.UTF8Encoding()
    }
    return $.ig.Encoding.prototype.a
}, getString: function (d, e, f) {
    return""
}, $type: new $.ig.Type("Encoding", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("UTF8Encoding", "Encoding", {init: function () {
    $.ig.Encoding.prototype.init.call(this)
}, getString: function (f, d, e) {
    var g = "";
    for (var h = d; h < e; h++) {
        if (f[h] == 0) {
            break
        }
        g = g + String.fromCharCode(f[h])
    }
    return g
}, $type: new $.ig.Type("UTF8Encoding", $.ig.Encoding.prototype.$type)}, true);
$.ig.util.defType("Uri", "Object", {init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.value(b)
}, _value: null, value: function (b) {
    if (arguments.length === 1) {
        this._value = b;
        return b
    } else {
        return this._value
    }
}, $type: new $.ig.Type("Uri", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Image", "FrameworkElement", {init: function () {
    $.ig.FrameworkElement.prototype.init.call(this)
}, _a3: null, a3: function (b) {
    if (arguments.length === 1) {
        this._a3 = b;
        return b
    } else {
        return this._a3
    }
}, $type: new $.ig.Type("Image", $.ig.FrameworkElement.prototype.$type)}, true);
$.ig.util.defType("PolyBezierSegment", "PathSegment", {init: function () {
    $.ig.PathSegment.prototype.init.call(this);
    this.d(new $.ig.PointCollection(0))
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, a: function () {
    return $.ig.PathSegmentType.prototype.polyBezier
}, $type: new $.ig.Type("PolyBezierSegment", $.ig.PathSegment.prototype.$type)}, true);
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.AbstractEnumerable, $.ig.IEnumerable$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.ICollection, $.ig.IList, $.ig.Array, $.ig.Dictionary, $.ig.XmlNodeList, $.ig.XmlNamedNodeMap],
        ["asQueryable"]
    ]
]);
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.IEnumerable$1],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.AbstractEnumerable, $.ig.IEnumerable$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2, $.ig.ICollection, $.ig.IList, $.ig.Array, $.ig.Dictionary, $.ig.XmlNodeList, $.ig.XmlNamedNodeMap],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig = $.ig || {};
$.ig.util.bulkDefine(["BrushCollection", "EventProxy", "DOMEventProxy", "TrendCalculators", "TrendLineType", "UnknownValuePlotting", "ErrorBarCalculatorReference", "ErrorBarCalculatorType", "IErrorBarCalculator", "MouseWheelHandler", "GestureHandler", "TouchHandler", "ContactHandler", "MouseHandler", "MouseOverHandler", "KeyHandler", "IFastItemColumnInternal", "IFastItemColumnPropertyName", "IFastItemColumn$1", "FastItemColumn", "FastItemDateTimeColumn", "FastItemObjectColumn", "FastItemIntColumn", "FastItemsSource", "ColumnReference", "FastItemsSourceEventAction", "FastItemsSourceEventArgs", "FastReflectionHelper", "IRenderer", "RectChangedEventArgs", "RectChangedEventHandler", "CanvasRenderScheduler", "CanvasViewRenderer", "GradientDirection", "RenderingContext", "DependencyObjectNotifier", "InteractionState", "IOverviewPlusDetailControl", "ISchedulableRender", "NavigationSettings", "OverviewPlusDetailPaneMode", "PropertyChangedEventArgs$1", "XamOverviewPlusDetailPane", "XamOverviewPlusDetailPaneView", "XamOverviewPlusDetailPaneViewManager", "XamMultiScaleTileSource", "MapTileSource", "BingMapsTileSource", "CloudMadeTileSource", "OpenStreetMapTileSource", "ArrayUtil", "Clipper", "EdgeClipper", "LeftClipper", "BottomClipper", "RightClipper", "TopClipper", "InterpolationMode", "ColorUtil", "DoubleAnimator", "Extensions", "Flattener", "SpiralTodo", "GeometryUtil", "Numeric", "LeastSquaresFit", "MathUtil", "PathFigureUtil", "PointCollectionUtil", "PolygonUtil", "PolySimplification", "RearrangedList$1", "RectUtil", "ISmartPlaceable", "SmartPlaceableWrapper$1", "SmartPosition", "SmartPlacer", "StackPool$1", "Tile", "WriteableBitmap", "IMapRenderDeferralHandler", "XamMultiScaleImage", "Pair$2", "IEasingFunction", "XamMultiScaleImageView", "AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise"]);
$.ig.util.defType("SmartPosition", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("SmartPosition", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ErrorBarCalculatorType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("ErrorBarCalculatorType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ErrorBarCalculatorReference", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("ErrorBarCalculatorReference", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IErrorBarCalculator", "Object", {$type: new $.ig.Type("IErrorBarCalculator", null)}, true);
$.ig.util.defType("DependencyObjectNotifier", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this)
}, f: function (b) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(b))
    }
}, propertyChanged: null, $type: new $.ig.Type("DependencyObjectNotifier", $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("XamMultiScaleTileSource", "DependencyObject", {init: function (f, g, h, i, j) {
    $.ig.DependencyObject.prototype.init.call(this);
    this.k(f);
    this.l(g);
    this.m(h);
    this.n(i);
    this.o(j)
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, _n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, _o: null, o: function (b) {
    if (arguments.length === 1) {
        this._o = b;
        return b
    } else {
        return this._o
    }
}, e: null, z: function (f, g, h) {
    var i = new $.ig.List$1($.ig.Object.prototype.$type, 0);
    this.aa(f, g, h, i);
    var j = null;
    if (i.count() > 0) {
        j = $.ig.util.cast($.ig.Uri.prototype.$type, i.__inner[0])
    }
    return j
}, aa: function (e, f, g, h) {
}, ab: function (e, f, g, h) {
    if (this.e != null) {
        this.e.c4(e, f, g, h)
    }
}, $type: new $.ig.Type("XamMultiScaleTileSource", $.ig.DependencyObject.prototype.$type)}, true);
$.ig.util.defType("MapTileSource", "XamMultiScaleTileSource", {init: function (f, g, h, i, j) {
    $.ig.XamMultiScaleTileSource.prototype.init.call(this, f, g, h, i, j)
}, $type: new $.ig.Type("MapTileSource", $.ig.XamMultiScaleTileSource.prototype.$type)}, true);
$.ig.util.defType("BingMapsTileSource", "MapTileSource", {init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.MapTileSource.prototype.init.call(this, 256 << 22, 256 << 22, 256, 256, 0)
}, init1: function (e, c, d) {
    $.ig.MapTileSource.prototype.init.call(this, 256 << 22, 256 << 22, 256, 256, 0);
    this.tilePath(c);
    this.subDomains(d)
}, tilePath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BingMapsTileSource.prototype.tilePathProperty, b);
        return b
    } else {
        return this.b($.ig.BingMapsTileSource.prototype.tilePathProperty)
    }
}, subDomains: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BingMapsTileSource.prototype.subDomainsProperty, b);
        return b
    } else {
        return this.b($.ig.BingMapsTileSource.prototype.subDomainsProperty)
    }
}, cultureName: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BingMapsTileSource.prototype.cultureNameProperty, b);
        return b
    } else {
        return this.b($.ig.BingMapsTileSource.prototype.cultureNameProperty)
    }
}, aa: function (h, i, j, k) {
    this.ac();
    if (this.tilePath() == null) {
        return
    }
    h -= 8;
    if (h > 0) {
        var l = this.ad(h, i, j);
        var m = this.tilePath();
        m = m.replace("{culture}", this.cultureName());
        m = m.replace("{quadkey}", l);
        var n = $.ig.Number.prototype.parseInt(l.substr(l.length - 1, 1));
        m = m.replace("{subdomain}", this.subDomains().__inner[n]);
        k.add(new $.ig.Uri(m))
    }
}, ac: function () {
}, ad: function (h, i, j) {
    var k = new $.ig.StringBuilder();
    for (var l = h; l > 0; --l) {
        var m = "0";
        var n = 1 << (l - 1);
        if ((i & n) != 0) {
            m++
        }
        if ((j & n) != 0) {
            m++;
            m++
        }
        k.f(m)
    }
    return k.toString()
}, ae: function (c, d) {
}, $type: new $.ig.Type("BingMapsTileSource", $.ig.MapTileSource.prototype.$type)}, true);
$.ig.util.defType("CloudMadeTileSource", "MapTileSource", {af: null, init: function () {
    $.ig.MapTileSource.prototype.init.call(this, 134217728, 134217728, 256, 256, 0);
    this.af = new $.ig.Random()
}, key: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CloudMadeTileSource.prototype.keyProperty, b);
        return b
    } else {
        return this.b($.ig.CloudMadeTileSource.prototype.keyProperty)
    }
}, parameter: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CloudMadeTileSource.prototype.parameterProperty, b);
        return b
    } else {
        return this.b($.ig.CloudMadeTileSource.prototype.parameterProperty)
    }
}, aa: function (i, j, k, l) {
    var h = this;
    var m = i - 8;
    if (m > 0) {
        var n = (function () {
            var a = new Array();
            a.add("a");
            a.add("b");
            a.add("c");
            return a
        }());
        var o = $.ig.CloudMadeTileSource.prototype.ac;
        o = o.replace("{S}", n[this.af.b(n.length)]);
        o = o.replace("{K}", this.key() == null ? "" : this.key());
        o = o.replace("{P}", this.parameter() == null ? "" : this.parameter());
        o = o.replace("{Z}", m.toString());
        o = o.replace("{X}", j.toString());
        o = o.replace("{Y}", k.toString());
        l.add(new $.ig.Uri(o))
    }
}, $type: new $.ig.Type("CloudMadeTileSource", $.ig.MapTileSource.prototype.$type)}, true);
$.ig.util.defType("OpenStreetMapTileSource", "MapTileSource", {init: function () {
    $.ig.MapTileSource.prototype.init.call(this, 134217728, 134217728, 256, 256, 0)
}, aa: function (g, h, i, j) {
    var k = g - 8;
    if (k > 0) {
        var l = $.ig.OpenStreetMapTileSource.prototype.ac;
        l = l.replace("{Z}", k.toString());
        l = l.replace("{X}", h.toString());
        l = l.replace("{Y}", i.toString());
        j.add(new $.ig.Uri(l))
    }
}, $type: new $.ig.Type("OpenStreetMapTileSource", $.ig.MapTileSource.prototype.$type)}, true);
$.ig.util.defType("ArrayUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, shuffle$1: function (a) {
    if (this != null) {
        var f = new $.ig.Random();
        for (var g = this.count() - 1; g > 0; --g) {
            var h = f.b(g);
            var i = this.item(g);
            this.item(g, this.item(h));
            this.item(h, i)
        }
    }
}, insertionIndex$1: function (a, g) {
    var h = -1;
    var i = 0;
    var j = this.count();
    while (h == -1) {
        if (j <= i) {
            h = i
        } else {
            var k = $.ig.intDivide((i + j), 2);
            switch (Math.sign(g.compareTo(this.item(k)))) {
                case -1:
                    j = k;
                    break;
                case 0:
                    h = k;
                    break;
                case 1:
                    i = k + 1;
                    break
            }
        }
    }
    return h
}, insertionIndex$11111: function (a, h, i) {
    var j = -1;
    var k = 0;
    var l = this.count();
    while (j == -1) {
        if (l <= k) {
            j = k
        } else {
            var m = $.ig.intDivide((k + l), 2);
            switch (Math.sign(h(i, this.item(m)))) {
                case -1:
                    l = m;
                    break;
                case 0:
                    j = m;
                    break;
                case 1:
                    k = m + 1;
                    break
            }
        }
    }
    return j
}, binarySearch$1: function (a, g) {
    var h = 0;
    var i = this.count() - 1;
    while (h <= i) {
        var j = (h + ((i - h) >> 1));
        var k = g(this.item(j));
        if (k < 0) {
            i = j - 1
        } else {
            if (k > 0) {
                h = j + 1
            } else {
                return j
            }
        }
    }
    return ~h
}, $type: new $.ig.Type("ArrayUtil", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Clipper", "Object", {h: function (c) {
    if (arguments.length === 1) {
        if (this.b != null) {
            this.b.clear()
        }
        this.b = null;
        this.c = c;
        var d = this.c;
        if (this.d != null) {
            this.d.h(d);
            d = this.d;
            this.b = this.d
        }
        if (this.e != null) {
            this.e.h(d);
            d = this.e;
            this.e.__nextClipper = this.b;
            this.b = this.e
        }
        if (this.f != null) {
            this.f.h(d);
            d = this.f;
            this.f.__nextClipper = this.b;
            this.b = this.f
        }
        if (this.g != null) {
            this.g.h(d);
            d = this.g;
            this.g.__nextClipper = this.b;
            this.b = this.g
        }
        this.a = d;
        return c
    } else {
        return this.c
    }
}, a: null, b: null, c: null, d: null, e: null, f: null, g: null, init: function (f, d, e) {
    if (f > 0) {
        switch (f) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    var c = this;
    $.ig.Object.prototype.init.call(this);
    this.d = (function () {
        var a = new $.ig.LeftClipper();
        a.p = d.left();
        a.f = e;
        return a
    }());
    this.e = (function () {
        var a = new $.ig.BottomClipper();
        a.p = d.bottom();
        a.f = e;
        return a
    }());
    this.f = (function () {
        var a = new $.ig.RightClipper();
        a.p = d.right();
        a.f = e;
        return a
    }());
    this.g = (function () {
        var a = new $.ig.TopClipper();
        a.p = d.top();
        a.f = e;
        return a
    }())
}, init1: function (l, g, h, i, j, k) {
    var f = this;
    $.ig.Object.prototype.init.call(this);
    this.d = !isNaN(g) ? (function () {
        var a = new $.ig.LeftClipper();
        a.p = g;
        a.f = k;
        return a
    }()) : null;
    this.e = !isNaN(h) ? (function () {
        var a = new $.ig.BottomClipper();
        a.p = h;
        a.f = k;
        return a
    }()) : null;
    this.f = !isNaN(i) ? (function () {
        var a = new $.ig.RightClipper();
        a.p = i;
        a.f = k;
        return a
    }()) : null;
    this.g = !isNaN(j) ? (function () {
        var a = new $.ig.TopClipper();
        a.p = j;
        a.f = k;
        return a
    }()) : null
}, l: function (b) {
    this.a.add(b)
}, i: function (b) {
    if (arguments.length === 1) {
        if (this.d != null) {
            this.d.f = b
        }
        if (this.e != null) {
            this.e.f = b
        }
        if (this.f != null) {
            this.f.f = b
        }
        if (this.g != null) {
            this.g.f = b
        }
        return b
    } else {
        return(this.d == null || this.d.f) && (this.e == null || this.e.f) && (this.f == null || this.f.f) && (this.g == null || this.g.f)
    }
}, $type: new $.ig.Type("Clipper", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("EdgeClipper", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.b = true;
    this.g = false
}, h: function (b) {
    if (arguments.length === 1) {
        if (this.a != b) {
            this.b = true;
            this.a = b
        }
        return b
    } else {
        return this.a
    }
}, a: null, __nextClipper: null, nextClipper: function (b) {
    if (arguments.length === 1) {
        this.__nextClipper = b;
        return b
    } else {
        return this.__nextClipper
    }
}, b: null, c: null, d: null, e: null, f: null, g: null, add: function (c) {
    var d = this.m(c);
    if (this.b) {
        this.b = false;
        this.c = c
    } else {
        if (true) {
            if (d) {
                if (!this.e) {
                    this.h().add(this.n(this.d, c))
                } else {
                    if (!this.f && !this.g) {
                        this.h().add(this.d);
                        this.g = true
                    }
                }
                this.h().add(c)
            } else {
                if (this.e) {
                    if (!this.f && !this.g) {
                        this.h().add(this.d);
                        this.g = true
                    }
                    this.h().add(this.n(this.d, c))
                }
            }
        }
    }
    this.d = c;
    this.e = d
}, clear: function () {
    if (this.f && !this.b) {
        this.add(this.c)
    }
    if (this.__nextClipper != null) {
        this.__nextClipper.clear()
    }
    this.b = true;
    this.g = false
}, m: function (b) {
}, n: function (c, d) {
}, getEnumerator: function () {
    return null
}, isReadOnly: function () {
    return false
}, count: function () {
    return 0
}, remove: function (b) {
    return false
}, removeAt: function (b) {
}, o: function (c, d) {
}, contains: function (b) {
    return false
}, _item: null, item: function (d, c) {
    if (arguments.length === 2) {
        this._item = c;
        return c
    } else {
        return{__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
}, insert: function (c, d) {
}, indexOf: function (b) {
    return -1
}, $type: new $.ig.Type("EdgeClipper", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize($.ig.Point.prototype.$type)])}, true);
$.ig.util.defType("LeftClipper", "EdgeClipper", {init: function () {
    $.ig.EdgeClipper.prototype.init.call(this)
}, p: null, m: function (b) {
    return b.__x >= this.p
}, n: function (c, d) {
    return{__x: this.p, __y: c.__y + (d.__y - c.__y) * (this.p - c.__x) / (d.__x - c.__x), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, $type: new $.ig.Type("LeftClipper", $.ig.EdgeClipper.prototype.$type)}, true);
$.ig.util.defType("BottomClipper", "EdgeClipper", {init: function () {
    $.ig.EdgeClipper.prototype.init.call(this)
}, p: null, m: function (b) {
    return b.__y <= this.p
}, n: function (c, d) {
    return{__x: c.__x + (d.__x - c.__x) * (this.p - c.__y) / (d.__y - c.__y), __y: this.p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, $type: new $.ig.Type("BottomClipper", $.ig.EdgeClipper.prototype.$type)}, true);
$.ig.util.defType("RightClipper", "EdgeClipper", {init: function () {
    $.ig.EdgeClipper.prototype.init.call(this)
}, p: null, m: function (b) {
    return b.__x <= this.p
}, n: function (c, d) {
    return{__x: this.p, __y: c.__y + (d.__y - c.__y) * (this.p - c.__x) / (d.__x - c.__x), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, $type: new $.ig.Type("RightClipper", $.ig.EdgeClipper.prototype.$type)}, true);
$.ig.util.defType("TopClipper", "EdgeClipper", {init: function () {
    $.ig.EdgeClipper.prototype.init.call(this)
}, p: null, m: function (b) {
    return b.__y >= this.p
}, n: function (c, d) {
    return{__x: c.__x + (d.__x - c.__x) * (this.p - c.__y) / (d.__y - c.__y), __y: this.p, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, $type: new $.ig.Type("TopClipper", $.ig.EdgeClipper.prototype.$type)}, true);
$.ig.util.defType("Flattener", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, b: function (z, A, B, C, D) {
    var y = this;
    if (isNaN(D) || D <= 0) {
        D = 1
    }
    var E = new $.ig.List$1(Number, 0);
    var F = new $.ig.Stack$1($.ig.SpiralTodo.prototype.$type);
    var G = (C - A) / (B - z);
    var H = A - G * z;
    var I = G * G;
    var J = H * H;
    var K = H * G;
    F.c((function () {
        var a = new $.ig.SpiralTodo();
        a.a = 0;
        a.b = 1;
        return a
    }()));
    while (F.b() != 0) {
        var L = F.e();
        var M = A + L.a * (C - A);
        var N = z + L.a * (B - z);
        var O = N * N;
        var P = O * N;
        var Q = A + L.b * (C - A);
        var R = z + L.b * (B - z);
        var S = R * R;
        var T = S * R;
        var U;
        if (G == 0) {
            U = J * (R - N) / 2 + K * (S - O) / 2 + I * (T - P) / 6
        } else {
            U = (Math.pow(H + G * R, 3) - Math.pow(H + G * N, 3)) / (6 * G)
        }
        var V = 0.5 * M * Q * Math.sin(R - N);
        if (U - V > D) {
            var W = 0.5 * (L.a + L.b);
            F.c((function () {
                var a = new $.ig.SpiralTodo();
                a.a = W;
                a.b = L.b;
                return a
            }()));
            F.c((function () {
                var a = new $.ig.SpiralTodo();
                a.a = L.a;
                a.b = W;
                return a
            }()))
        } else {
            E.add(L.a)
        }
    }
    E.add(1);
    return E
}, c: function (f, g, h, i) {
    var j = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    $.ig.Flattener.prototype.d(j, g, h, 0, f - 1, i);
    return j
}, d: function (h, i, j, k, l, m) {
    var g = this;
    return $.ig.Flattener.prototype.f(h, function (a) {
        return a
    }, i, j, k, l, m)
}, e: function (i, j, k, l, m, n, o) {
    var h = this;
    return $.ig.Flattener.prototype.f(i, function (a) {
        return j.item(a)
    }, k, l, m, n, o)
}, f: function (l, m, n, o, p, q, r) {
    if (p > q) {
        return l
    }
    var s = n(m(p));
    var t = o(m(p));
    while ((isNaN(s) || isNaN(t)) && p < q) {
        ++p;
        s = n(m(p));
        t = o(m(p))
    }
    var u = n(m(q));
    var v = o(m(q));
    while ((isNaN(u) || isNaN(v)) && p < q) {
        --q;
        u = n(m(q));
        v = o(m(q))
    }
    if (p == q) {
        l.add(m(p));
        return l
    }
    l.add(m(p));
    $.ig.Flattener.prototype.n(l, m, n, o, p, q, r);
    l.add(m(q));
    return l
}, g: function (k, l, m, n, o, p) {
    if (n > o) {
        return k
    }
    var q = l[n];
    var r = m[n];
    while ((isNaN(q) || isNaN(r)) && n < o) {
        ++n;
        q = l[n];
        r = m[n]
    }
    var s = l[o];
    var t = m[o];
    while ((isNaN(s) || isNaN(t)) && n < o) {
        --o;
        s = l[o];
        t = m[o]
    }
    if (n == o) {
        k.add(n);
        return k
    }
    k.add(n);
    $.ig.Flattener.prototype.l(k, l, m, n, o, p);
    k.add(o);
    return k
}, h: function (h, i, j, k, l) {
    var m;
    var n;
    if (j) {
        m = 0;
        n = 1
    } else {
        if (k) {
            m = 0;
            n = 2
        } else {
            m = 2;
            n = 3
        }
    }
    return $.ig.Flattener.prototype.i(h, i, m, n, l)
}, i: function (g, h, i, j, k) {
    var l = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    $.ig.Flattener.prototype.k(l, h, i, j, 0, g - 1, k);
    return l
}, j: function (j, k, l, m, n, o, p) {
    var q;
    var r;
    if (l) {
        q = 0;
        r = 1
    } else {
        if (m) {
            q = 0;
            r = 2
        } else {
            q = 2;
            r = 3
        }
    }
    return $.ig.Flattener.prototype.k(j, k, q, r, n, o, p)
}, k: function (n, o, p, q, r, s, t) {
    if (r > s) {
        return n
    }
    var u = o.__inner[r];
    var v, w;
    v = u[p];
    w = u[q];
    while ((isNaN(v) || isNaN(w)) && r < s) {
        ++r;
        u = o.__inner[r];
        v = u[p];
        w = u[q]
    }
    var x = o.__inner[s];
    var y, z;
    y = x[p];
    z = x[q];
    while ((isNaN(y) || isNaN(z)) && r < s) {
        --s;
        x = o.__inner[s];
        y = x[p];
        z = x[q]
    }
    if (r == s) {
        n.add(r);
        return n
    }
    n.add(r);
    $.ig.Flattener.prototype.m(n, o, p, q, r, s, t);
    n.add(s);
    return n
}, l: function (A, F, G, H, I, J) {
    var K = F[H];
    var L = G[H];
    while ((isNaN(K) || isNaN(L)) && H < I) {
        ++H;
        K = F[H];
        L = G[H]
    }
    var M = F[I];
    var N = G[I];
    while ((isNaN(M) || isNaN(N)) && H < I) {
        --I;
        M = F[I];
        N = G[I]
    }
    if (H + 1 >= I) {
        return
    }
    var O = -1;
    var P = J * J;
    var Q;
    var R;
    Q = M - K;
    R = N - L;
    var S = Q * Q + R * R;
    if (S == 0) {
        for (var T = H + 1; T < I; ++T) {
            var U = F[T];
            var V = G[T];
            if (isNaN(U) || isNaN(V)) {
                continue
            }
            Q = M - U;
            R = N - V;
            var W = Q * Q + R * R;
            if (W >= P) {
                P = W;
                O = T
            }
        }
    } else {
        var X = M - K;
        var Y = N - L;
        for (var Z = H + 1; Z < I; ++Z) {
            var aa = F[Z];
            var ab = G[Z];
            if (isNaN(aa) || isNaN(ab)) {
                continue
            }
            var ac = NaN;
            var ad = F[Z] - K;
            var B = G[Z] - L;
            var C = X * ad + Y * B;
            if (C <= 0) {
                Q = K - aa;
                R = L - ab;
                ac = Q * Q + R * R
            } else {
                var D = X * X + Y * Y;
                if (D <= C) {
                    Q = M - aa;
                    R = N - ab;
                    ac = Q * Q + R * R
                } else {
                    var E = C / D;
                    Q = K + E * X - aa;
                    R = L + E * Y - ab;
                    ac = Q * Q + R * R
                }
            }
            if (ac >= P) {
                P = ac;
                O = Z
            }
        }
    }
    if (O != -1) {
        $.ig.Flattener.prototype.l(A, F, G, H, O, J);
        A.add(O);
        $.ig.Flattener.prototype.l(A, F, G, O, I, J)
    }
    return
}, m: function (A, K, L, M, N, O, P) {
    var Q = K.__inner[N];
    var R, S;
    R = Q[L];
    S = Q[M];
    while ((isNaN(R) || isNaN(S)) && N < O) {
        ++N;
        Q = K.__inner[N];
        R = Q[L];
        S = Q[M]
    }
    var T = K.__inner[O];
    var U, V;
    U = T[L];
    V = T[M];
    while ((isNaN(U) || isNaN(V)) && N < O) {
        --O;
        T = K.__inner[O];
        U = T[L];
        V = T[M]
    }
    if (N + 1 >= O) {
        return
    }
    var W = -1;
    var X = P * P;
    var Y;
    var Z;
    Y = U - R;
    Z = V - S;
    var aa = Y * Y + Z * Z;
    if (aa == 0) {
        for (var ab = N + 1; ab < O; ++ab) {
            var ac = K.__inner[ab];
            var ad, ae;
            ad = ac[L];
            ae = ac[M];
            if (isNaN(ad) || isNaN(ae)) {
                continue
            }
            Y = U - ad;
            Z = V - ae;
            var af = Y * Y + Z * Z;
            if (af >= X) {
                X = af;
                W = ab
            }
        }
    } else {
        var ag = U - R;
        var ah = V - S;
        for (var ai = N + 1; ai < O; ++ai) {
            var B = K.__inner[ai];
            var C, D;
            C = B[L];
            D = B[M];
            if (isNaN(C) || isNaN(D)) {
                continue
            }
            var E = NaN;
            var F = C - R;
            var G = D - S;
            var H = ag * F + ah * G;
            if (H <= 0) {
                Y = R - C;
                Z = S - D;
                E = Y * Y + Z * Z
            } else {
                var I = ag * ag + ah * ah;
                if (I <= H) {
                    Y = U - C;
                    Z = V - D;
                    E = Y * Y + Z * Z
                } else {
                    var J = H / I;
                    Y = R + J * ag - C;
                    Z = S + J * ah - D;
                    E = Y * Y + Z * Z
                }
            }
            if (E >= X) {
                X = E;
                W = ai
            }
        }
    }
    if (W != -1) {
        $.ig.Flattener.prototype.m(A, K, L, M, N, W, P);
        A.add(W);
        $.ig.Flattener.prototype.m(A, K, L, M, W, O, P)
    }
    return
}, n: function (A, E, F, G, H, I, J) {
    var K = F(E(H));
    var L = G(E(H));
    while ((isNaN(K) || isNaN(L)) && H < I) {
        ++H;
        K = F(E(H));
        L = G(E(H))
    }
    var M = F(E(I));
    var N = G(E(I));
    while ((isNaN(M) || isNaN(N)) && H < I) {
        --I;
        M = F(E(I));
        N = G(E(I))
    }
    if (H + 1 >= I) {
        return
    }
    var O = -1;
    var P = J;
    var Q = $.ig.MathUtil.prototype.f(M - K, N - L);
    if (Q == 0) {
        for (var R = H + 1; R < I; ++R) {
            var S = F(E(R));
            var T = G(E(R));
            if (isNaN(S) || isNaN(T)) {
                continue
            }
            var U = $.ig.MathUtil.prototype.f(M - S, N - T);
            if (U >= P) {
                P = U;
                O = R
            }
        }
    } else {
        var V = M - K;
        var W = N - L;
        for (var X = H + 1; X < I; ++X) {
            var Y = F(E(X));
            var Z = G(E(X));
            if (isNaN(Y) || isNaN(Z)) {
                continue
            }
            var aa = NaN;
            var ab = F(E(X)) - K;
            var ac = G(E(X)) - L;
            var B = V * ab + W * ac;
            if (B <= 0) {
                aa = $.ig.MathUtil.prototype.f(K - Y, L - Z)
            } else {
                var C = V * V + W * W;
                if (C <= B) {
                    aa = $.ig.MathUtil.prototype.f(M - Y, N - Z)
                } else {
                    var D = B / C;
                    aa = $.ig.MathUtil.prototype.f(K + D * V - Y, L + D * W - Z)
                }
            }
            if (aa >= P) {
                P = aa;
                O = X
            }
        }
    }
    if (O != -1) {
        $.ig.Flattener.prototype.n(A, E, F, G, H, O, J);
        A.add(E(O));
        $.ig.Flattener.prototype.n(A, E, F, G, O, I, J)
    }
    return
}, o: function (A, C, D) {
    var E = new $.ig.PointCollection(0);
    if (A < 5) {
        for (var F = 0; F < A; ++F) {
            E.add({__x: C(F), __y: D(F), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
        return E
    }
    E.add({__x: C(0), __y: D(0), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    var G = A - 1;
    var H;
    var I = {__x: C(0), __y: D(0), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var J = {__x: C(0 + 1), __y: D(0 + 1), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var K = {__x: C(0 + 2), __y: D(0 + 2), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var L;
    var M;
    var N = {__x: J.__x - I.__x, __y: J.__y - I.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var O = $.ig.MathUtil.prototype.f(N.__x, N.__y);
    var P = {__x: K.__x - J.__x, __y: K.__y - J.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var Q = $.ig.MathUtil.prototype.f(P.__x, P.__y);
    var R;
    var S;
    var T = 0.1;
    var U = 0.3;
    R = {__x: K.__x - I.__x, __y: K.__y - I.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var V = $.ig.MathUtil.prototype.f(R.__x, R.__y);
    R.__x /= V;
    R.__y /= V;
    S = 0.5 + (N.__x * P.__x + N.__y * P.__y) / (2 * O * Q);
    E.add({__x: J.__x - R.__x * (T + U * S) * O, __y: J.__y - R.__y * (T + U * S) * O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    E.add(J);
    for (var W = 1; W < G - 1; ++W) {
        H = I;
        I = J;
        J = K;
        K = {__x: C(W + 2), __y: D(W + 2), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        L = N;
        M = O;
        N = P;
        O = Q;
        P = {__x: K.__x - J.__x, __y: K.__y - J.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        Q = $.ig.MathUtil.prototype.f(P.__x, P.__y);
        var X = R;
        var Y = S;
        R = {__x: K.__x - I.__x, __y: K.__y - I.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var Z = $.ig.MathUtil.prototype.f(R.__x, R.__y);
        R.__x /= Z;
        R.__y /= Z;
        S = 0.5 + (N.__x * P.__x + N.__y * P.__y) / (2 * O * Q);
        E.add({__x: I.__x + X.__x * (T + U * Y) * O, __y: I.__y + X.__y * (T + U * Y) * O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        E.add({__x: J.__x - R.__x * (T + U * S) * O, __y: J.__y - R.__y * (T + U * S) * O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        E.add(J)
    }
    H = I;
    I = J;
    J = K;
    L = N;
    M = O;
    N = P;
    O = Q;
    var aa = R;
    var B = S;
    E.add({__x: I.__x + aa.__x * (T + U * B) * O, __y: I.__y + aa.__y * (T + U * B) * O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    E.add(J);
    return E
}, $type: new $.ig.Type("Flattener", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SpiralTodo", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, $type: new $.ig.Type("SpiralTodo", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Numeric", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (j, k, l, m, n) {
    var o;
    var p = j.count();
    var q = new Array(p);
    if (k.__inner[0] == 0) {
        return false
    }
    var r = k.__inner[0];
    n.__inner[0] = m.__inner[0] / (r);
    for (o = 1; o < p; o++) {
        q[o] = l.__inner[o - 1] / r;
        r = k.__inner[o] - j.__inner[o] * q[o];
        if (r == 0) {
            return false
        }
        n.__inner[o] = (m.__inner[o] - j.__inner[o] * n.__inner[o - 1]) / r
    }
    for (o = (p - 2); o >= 0; o--) {
        n.__inner[o] -= q[o + 1] * n.__inner[o + 1]
    }
    return true
}, b: function (y, z) {
    var A = y.getLength(0);
    var B = new Array(A);
    var C = new Array(A);
    var D = new Array(A);
    for (var E = 0; E < A; E++) {
        D[E] = 0
    }
    for (var F = 0; F < A; F++) {
        var G = 0;
        var H = 0;
        var I = 0;
        for (var J = 0; J < A; J++) {
            if (D[J] != 1) {
                for (var K = 0; K < A; K++) {
                    if (D[K] == 0) {
                        if (Math.abs(y[J][K]) >= G) {
                            G = Math.abs(y[J][K]);
                            H = J;
                            I = K
                        }
                    }
                }
            }
        }
        ++(D[I]);
        if (H != I) {
            for (var L = 0; L < A; L++) {
                var M = y[H][L];
                y[H][L] = y[I][L];
                y[I][L] = M
            }
            var N = z[H];
            z[H] = z[I];
            z[I] = N
        }
        C[F] = H;
        B[F] = I;
        if (y[I][I] == 0) {
            return false
        }
        var O = 1 / y[I][I];
        y[I][I] = 1;
        for (var P = 0; P < A; P++) {
            y[I][P] *= O
        }
        z[I] *= O;
        for (var Q = 0; Q < A; Q++) {
            if (Q != I) {
                var R = y[Q][I];
                y[Q][I] = 0;
                for (var S = 0; S < A; S++) {
                    y[Q][S] -= y[I][S] * R
                }
                z[Q] -= z[I] * R
            }
        }
    }
    for (var T = A - 1; T >= 0; T--) {
        if (C[T] != B[T]) {
            for (var U = 0; U < A; U++) {
                var V = y[U][C[T]];
                y[U][C[T]] = y[U][B[T]];
                y[U][B[T]] = V
            }
        }
    }
    return true
}, c: function (i, j, k, l, m) {
    var n = new $.ig.List$1(Number, 0);
    for (var o = 0; o < i; ++o) {
        while (o < i && (isNaN(j(o)) || isNaN(k(o)))) {
            n.add(NaN);
            ++o
        }
        var p = o;
        while (o < i && !isNaN(j(o)) && !isNaN(k(o))) {
            ++o
        }
        --o;
        if (o - p > 0) {
            n.w($.ig.Numeric.prototype.d(p, o - p + 1, j, k, l, m))
        } else {
            for (; p <= o; ++p) {
                n.add(NaN)
            }
        }
    }
    return n.x()
}, d: function (h, i, j, k, l, m) {
    var g = this;
    return $.ig.Numeric.prototype.e(i, function (a) {
        return j(a + h)
    }, function (a) {
        return k(a + h)
    }, l, m)
}, e: function (n, o, p, q, r) {
    var s = new Array(n - 1);
    var t = new Array(n);
    t[0] = isNaN(q) ? 0 : -0.5;
    s[0] = isNaN(q) ? 0 : (3 / (o(1) - o(0))) * ((p(1) - p(0)) / (o(1) - o(0)) - q);
    for (var u = 1; u < n - 1; u++) {
        var v = (o(u) - o(u - 1)) / (o(u + 1) - o(u - 1));
        var w = v * t[u - 1] + 2;
        t[u] = (v - 1) / w;
        s[u] = (p(u + 1) - p(u)) / (o(u + 1) - o(u)) - (p(u) - p(u - 1)) / (o(u) - o(u - 1));
        s[u] = (6 * s[u] / (o(u + 1) - o(u - 1)) - v * s[u - 1]) / w
    }
    var x = isNaN(r) ? 0 : 0.5;
    var y = isNaN(r) ? 0 : (3 / (o(n - 1) - o(n - 2))) * (r - (p(n - 1) - p(n - 2)) / (o(n - 1) - o(n - 2)));
    t[n - 1] = (y - x * s[n - 2]) / (x * t[n - 2] + 1);
    for (var z = n - 2; z >= 0; z--) {
        t[z] = t[z] * t[z + 1] + s[z]
    }
    return t
}, f: function (k, l, m, n, o, p, q) {
    var r = n - l;
    var s = (n - k) / r;
    var t = (k - l) / r;
    return s * m + t * o + ((s * s * s - s) * p + (t * t * t - t) * q) * (r * r) / 6
}, g: function (k, l, m, n) {
    var o = new $.ig.PathFigureCollection();
    var p = 0;
    var q = -1;
    var r = NaN;
    var s = NaN;
    for (var t = 0; t < k; t++) {
        r = l(t);
        s = m(t);
        if (isNaN(r) || isNaN(s)) {
            q = t - 1;
            if (q - p > 0) {
                o.add($.ig.Numeric.prototype.h(p, q, l, m, n))
            }
            p = t + 1
        }
    }
    if (!isNaN(r) && !isNaN(s)) {
        q = k - 1
    }
    if (q - p > 0) {
        o.add($.ig.Numeric.prototype.h(p, q, l, m, n))
    }
    return o
}, h: function (B, G, H, I, J) {
    var A = this;
    J = 0.5 * $.ig.MathUtil.prototype.i(isNaN(J) ? 0.5 : J, 0, 1);
    var K = new $.ig.PathFigure();
    var L = G - B + 1;
    if (L < 2) {
        return K
    }
    if (L == 2) {
        K.__startPoint = {__x: H(B), __y: I(B), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var M = (function () {
            var a = new $.ig.LineSegment(1);
            a.d({__x: H(B + 1), __y: I(B + 1), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return a
        }());
        K.__segments.add(M);
        return K
    }
    var N = new $.ig.PolyBezierSegment();
    var O = H(B);
    var P = I(B);
    var Q = H(B + 1);
    var R = I(B + 1);
    while (Q == O && R == P && B + 1 <= G) {
        B++;
        Q = H(B + 1);
        R = I(B + 1)
    }
    var S = Q - O;
    var T = R - P;
    var U = Math.sqrt(S * S + T * T);
    for (var V = B + 1; V < G; ++V) {
        var W = H(V);
        var X = I(V);
        if (W == O && X == P) {
            continue
        }
        var Y = H(V + 1) - H(V - 1);
        var Z = I(V + 1) - I(V - 1);
        var aa = Y * Y + Z * Z;
        if (aa < 0.01) {
            Y = -(I(V + 1) - I(V));
            Z = H(V + 1) - H(V);
            aa = Y * Y + Z * Z
        }
        aa = Math.sqrt(aa);
        var ab = J * Math.sqrt((W - O) * (W - O) + (X - P) * (X - P));
        if (aa > 0.01) {
            N.d().add({__x: O + S * ab / U, __y: P + T * ab / U, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            N.d().add({__x: W - Y * ab / aa, __y: X - Z * ab / aa, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            N.d().add({__x: W, __y: X, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            O = W;
            P = X;
            S = Y;
            T = Z;
            U = aa
        }
    }
    var ac = G;
    var ad = H(ac);
    var ae = I(ac);
    var C = H(ac) - H(ac - 1);
    var D = I(ac) - I(ac - 1);
    var E = C * C + D * D;
    var F = J * Math.sqrt((ad - O) * (ad - O) + (ae - P) * (ae - P));
    N.d().add({__x: O + S * F / U, __y: P + T * F / U, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    N.d().add({__x: ad - C * F / E, __y: ae - D * F / E, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    N.d().add({__x: ad, __y: ae, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    K.__startPoint = {__x: H(B), __y: I(B), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    K.__segments.add(N);
    return K
}, $type: new $.ig.Type("Numeric", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LeastSquaresFit", "Numeric", {i: function () {
    return $.ig.LeastSquaresFit.prototype.l() && $.ig.LeastSquaresFit.prototype.o() && $.ig.LeastSquaresFit.prototype.r() && $.ig.LeastSquaresFit.prototype.u() && $.ig.LeastSquaresFit.prototype.x() && $.ig.LeastSquaresFit.prototype.aa() && $.ig.LeastSquaresFit.prototype.ad() && $.ig.LeastSquaresFit.prototype.ag()
}, init: function () {
    $.ig.Numeric.prototype.init.call(this)
}, j: function (o, p, q) {
    var n = this;
    var r = 0;
    var s = 0;
    var t = 0;
    var u = 0;
    var v = 0;
    for (var w = 0; w < o; ++w) {
        var x = p(w);
        var y = q(w);
        if (!isNaN(x) && !isNaN(y)) {
            r += y;
            s += x * x;
            t += x;
            u += x * y;
            ++v
        }
    }
    if (v < 2) {
        return null
    }
    var z = (r * s - t * u) / (v * s - t * t);
    var A = (v * u - t * r) / (v * s - t * t);
    return(function () {
        var a = new Array();
        a.add(z);
        a.add(A);
        return a
    }())
}, k: function (c, d) {
    if (c.length != 2) {
        return NaN
    }
    return c[0] + c[1] * d
}, l: function () {
    var i = this;
    var j = new $.ig.Random();
    var m = new Array(2);
    for (var n = 0; n < m.length; ++n) {
        m[n] = 10 * j.a()
    }
    var o = new $.ig.List$1(Number, 0);
    var p = new $.ig.List$1(Number, 0);
    for (var q = -100; q < 100; ++q) {
        var r = q;
        var s = $.ig.LeastSquaresFit.prototype.k(m, r);
        if (!isNaN(s)) {
            o.add(r);
            p.add(s)
        }
    }
    var t = $.ig.LeastSquaresFit.prototype.j(o.count(), function (a) {
        return o.__inner[a]
    }, function (a) {
        return p.__inner[a]
    });
    for (var u = 0; u < m.length; ++u) {
        if (Math.abs(m[u] - t[u]) > 0.0001) {
        }
    }
    return true
}, m: function (p, q, r) {
    var o = this;
    var s = 0;
    var t = 0;
    var u = 0;
    var v = 0;
    var w = 0;
    for (var x = 0; x < p; ++x) {
        var y = q(x);
        var z = r(x);
        if (!isNaN(y) && !isNaN(z) && y > 0) {
            var A = Math.log(y);
            s += z * A;
            t += z;
            u += A;
            v += A * A;
            ++w
        }
    }
    if (w < 2) {
        return null
    }
    var B = (w * s - t * u) / (w * v - u * u);
    var C = (t - B * u) / w;
    return(function () {
        var a = new Array();
        a.add(C);
        a.add(B);
        return a
    }())
}, n: function (c, d) {
    if (c.length != 2 || d < 0 || Number.isInfinity(d) || isNaN(d)) {
        return NaN
    }
    return c[0] + c[1] * Math.log(d)
}, o: function () {
    var i = this;
    var j = new $.ig.Random();
    var m = new Array(2);
    for (var n = 0; n < m.length; ++n) {
        m[n] = 10 * j.a()
    }
    var o = new $.ig.List$1(Number, 0);
    var p = new $.ig.List$1(Number, 0);
    for (var q = 1; q < 100; ++q) {
        var r = q;
        var s = $.ig.LeastSquaresFit.prototype.n(m, r);
        if (!isNaN(s)) {
            o.add(r);
            p.add(s)
        }
    }
    var t = $.ig.LeastSquaresFit.prototype.m(o.count(), function (a) {
        return o.__inner[a]
    }, function (a) {
        return p.__inner[a]
    });
    for (var u = 0; u < m.length; ++u) {
        if (Math.abs(m[u] - t[u]) > 0.0001) {
        }
    }
    return true
}, p: function (q, r, s) {
    var p = this;
    var t = 0;
    var u = 0;
    var v = 0;
    var w = 0;
    var x = 0;
    var y = 0;
    for (var z = 0; z < q; ++z) {
        var A = r(z);
        var B = s(z);
        if (!isNaN(A) && !isNaN(B) && B > 0) {
            var C = Math.log(B);
            t += A * A * B;
            u += B * C;
            v += A * B;
            w += A * B * C;
            x += B;
            ++y
        }
    }
    if (y < 2) {
        return null
    }
    var D = (t * u - v * w) / (x * t - v * v);
    var E = (x * w - v * u) / (x * t - v * v);
    return(function () {
        var a = new Array();
        a.add(Math.exp(D));
        a.add(E);
        return a
    }())
}, q: function (c, d) {
    if (c.length != 2 || d < 0 || Number.isInfinity(d) || isNaN(d)) {
        return NaN
    }
    return c[0] * Math.exp(c[1] * d)
}, r: function () {
    var i = this;
    var j = new $.ig.Random();
    var m = new Array(2);
    for (var n = 0; n < m.length; ++n) {
        m[n] = 2 * j.a()
    }
    var o = new $.ig.List$1(Number, 0);
    var p = new $.ig.List$1(Number, 0);
    for (var q = 1; q < 100; ++q) {
        var r = q;
        var s = $.ig.LeastSquaresFit.prototype.q(m, r);
        if (!isNaN(s)) {
            o.add(r);
            p.add(s)
        }
    }
    var t = $.ig.LeastSquaresFit.prototype.p(o.count(), function (a) {
        return o.__inner[a]
    }, function (a) {
        return p.__inner[a]
    });
    for (var u = 0; u < m.length; ++u) {
        if (Math.abs(m[u] - t[u]) > 0.0001) {
            return false
        }
    }
    return true
}, s: function (q, r, s) {
    var p = this;
    var t = 0;
    var u = 0;
    var v = 0;
    var w = 0;
    var x = 0;
    for (var y = 0; y < q; ++y) {
        var z = r(y);
        var A = s(y);
        if (!isNaN(z) && !isNaN(A) && z > 0 && A > 0) {
            var B = Math.log(r(y));
            var C = Math.log(s(y));
            t += B * C;
            u += B;
            v += C;
            w += B * B;
            ++x
        }
    }
    if (x < 2) {
        return null
    }
    var D = (x * t - u * v) / (x * w - u * u);
    var E = Math.exp((v - D * u) / x);
    return(function () {
        var a = new Array();
        a.add(E);
        a.add(D);
        return a
    }())
}, t: function (c, d) {
    if (c.length != 2 || d < 0 || Number.isInfinity(d) || isNaN(d)) {
        return NaN
    }
    return c[0] * Math.pow(d, c[1])
}, u: function () {
    var g = this;
    var h = new $.ig.Random();
    var k = new Array(2);
    for (var l = 0; l < k.length; ++l) {
        k[l] = 10 * h.a()
    }
    var m = new $.ig.List$1(Number, 0);
    var n = new $.ig.List$1(Number, 0);
    for (var o = -100; o < 100; ++o) {
        m.add(o);
        n.add($.ig.LeastSquaresFit.prototype.t(k, o))
    }
    var p = $.ig.LeastSquaresFit.prototype.s(m.count(), function (a) {
        return m.__inner[a]
    }, function (a) {
        return n.__inner[a]
    });
    for (var q = 0; q < k.length; ++q) {
        if (Math.abs(k[q] - p[q]) > 0.0001) {
            return false
        }
    }
    return true
}, v: function (d, e, f) {
    return $.ig.LeastSquaresFit.prototype.ah(d, 2, e, f)
}, w: function (c, d) {
    return $.ig.LeastSquaresFit.prototype.ai(c, d)
}, x: function () {
    return $.ig.LeastSquaresFit.prototype.aj(2)
}, y: function (d, e, f) {
    return $.ig.LeastSquaresFit.prototype.ah(d, 3, e, f)
}, z: function (c, d) {
    return $.ig.LeastSquaresFit.prototype.ai(c, d)
}, aa: function () {
    return $.ig.LeastSquaresFit.prototype.aj(3)
}, ab: function (d, e, f) {
    return $.ig.LeastSquaresFit.prototype.ah(d, 4, e, f)
}, ac: function (c, d) {
    return $.ig.LeastSquaresFit.prototype.ai(c, d)
}, ad: function () {
    return $.ig.LeastSquaresFit.prototype.aj(4)
}, ae: function (d, e, f) {
    return $.ig.LeastSquaresFit.prototype.ah(d, 5, e, f)
}, af: function (c, d) {
    return $.ig.LeastSquaresFit.prototype.ai(c, d)
}, ag: function () {
    return $.ig.LeastSquaresFit.prototype.aj(5)
}, ah: function (v, w, x, y) {
    var u = this;
    var z = new Array(1 + 2 * w);
    for (var A = 0; A < z.length; A++) {
        z[A] = 0
    }
    var B = (function () {
        var c = new Array(w + 1);
        var a = c;
        for (var b = 0; b < w + 1; b++) {
            a[b] = new Array(w + 1)
        }
        return c
    }());
    var C = new Array(w + 1);
    for (var D = 0; D < C.length; D++) {
        C[D] = 0
    }
    var E = 0;
    for (var F = 0; F < v; ++F) {
        var G = 1;
        var H = x(F);
        if (!isNaN(H) && !isNaN(y(F))) {
            for (var I = 0; I < z.length; ++I) {
                z[I] += G;
                G *= H;
                ++E
            }
        }
    }
    if (E < w) {
        return null
    }
    for (var J = 0; J <= w; ++J) {
        for (var K = 0; K <= w; ++K) {
            B[J][K] = z[J + K]
        }
    }
    for (var L = 0; L < v; ++L) {
        var M = x(L);
        var N = y(L);
        if (!isNaN(M) && !isNaN(N)) {
            for (var O = 0; O <= w; ++O) {
                C[O] += (Math.pow(M, O) * N)
            }
        }
    }
    return $.ig.Numeric.prototype.b(B, C) ? C : null
}, ai: function (e, f) {
    if (e.length < 1 || Number.isInfinity(f) || isNaN(f)) {
        return NaN
    }
    var g = 0;
    for (var h = 0; h < e.length; ++h) {
        g += e[h] * Math.pow(f, h)
    }
    return g
}, aj: function (k) {
    var j = this;
    var n = new $.ig.Random();
    var o = new Array(k + 1);
    for (var p = 0; p < o.length; ++p) {
        o[p] = 2 * n.a()
    }
    var q = new $.ig.List$1(Number, 0);
    var r = new $.ig.List$1(Number, 0);
    for (var s = -100; s < 100; ++s) {
        var t = s;
        var u = $.ig.LeastSquaresFit.prototype.ai(o, t);
        if (!isNaN(u)) {
            q.add(t);
            r.add(u)
        }
    }
    var v = $.ig.LeastSquaresFit.prototype.ah(q.count(), k, function (a) {
        return q.__inner[a]
    }, function (a) {
        return r.__inner[a]
    });
    for (var w = 0; w < k; ++w) {
        if (Math.abs(o[w] - v[w]) > 0.0001) {
            return false
        }
    }
    return true
}, $type: new $.ig.Type("LeastSquaresFit", $.ig.Numeric.prototype.$type)}, true);
$.ig.util.defType("PointCollectionUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, flattenTo: function (d, e) {
    var a = this;
    if (d == null) {
        return
    }
    d.clear();
    if (this.count() >= 2) {
        var i = $.ig.Flattener.prototype.c(this.count(), function (b) {
            return a.item(b).__x
        }, function (b) {
            return a.item(b).__y
        }, e);
        var k = i.getEnumerator();
        while (k.moveNext()) {
            var j = k.current();
            d.add(this.item(j))
        }
    }
}, getBounds: function () {
    var a = Number.POSITIVE_INFINITY;
    var h = Number.POSITIVE_INFINITY;
    var i = Number.NEGATIVE_INFINITY;
    var j = Number.NEGATIVE_INFINITY;
    var l = this.getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        a = Math.min(a, k.__x);
        h = Math.min(h, k.__y);
        i = Math.max(i, k.__x);
        j = Math.max(j, k.__y)
    }
    if (Number.isInfinity(a) || Number.isInfinity(h) || Number.isInfinity(h) || Number.isInfinity(j)) {
        return $.ig.Rect.prototype.empty()
    }
    return new $.ig.Rect(0, a, h, i - a, j - h)
}, getBounds11: function () {
    var a = $.ig.Rect.prototype.empty();
    var f = this.getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        a.union(e.getBounds())
    }
    return a
}, getBounds2: function () {
    var a = Number.POSITIVE_INFINITY;
    var h = Number.POSITIVE_INFINITY;
    var i = Number.NEGATIVE_INFINITY;
    var j = Number.NEGATIVE_INFINITY;
    var k;
    for (var l = 0; l < this.count(); l++) {
        k = this.item(l);
        a = Math.min(a, k.__x);
        h = Math.min(h, k.__y);
        i = Math.max(i, k.__x);
        j = Math.max(j, k.__y)
    }
    if (Number.isInfinity(a) || Number.isInfinity(h) || Number.isInfinity(h) || Number.isInfinity(j)) {
        return $.ig.Rect.prototype.empty()
    }
    return new $.ig.Rect(0, a, h, i - a, j - h)
}, getBounds3: function () {
    var a = $.ig.Rect.prototype.empty();
    var e;
    for (var f = 0; f < this.count(); f++) {
        e = this.__inner[f];
        a.union(e.getBounds2())
    }
    return a
}, getBounds41: function () {
    var a = $.ig.Rect.prototype.empty();
    var e;
    for (var f = 0; f < this.count(); f++) {
        e = this.__inner[f];
        a.union(e.getBounds2())
    }
    return a
}, clipTo: function (a, f) {
    var g = this.count();
    for (var h = 0; h < g; h++) {
        f.l(this.item(h))
    }
    f.h(null)
}, getCentroid: function () {
    var a = 0;
    var g = 0;
    var h = 0;
    var j = this.getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        a += i.__x;
        g += i.__y;
        h += 1
    }
    return{__x: a / h, __y: g / h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, toPointCollection: function () {
    var a = new $.ig.PointCollection(0);
    var f = this.getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        a.add(e)
    }
    return a
}, toPointList: function () {
    var a = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    var f = this.getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        a.add(e)
    }
    return a
}, toPointCollections: function () {
    var a = new $.ig.List$1($.ig.PointCollection.prototype.$type, 0);
    var g;
    var h = this.count();
    for (var i = 0; i < h; i++) {
        g = this.__inner[i];
        var j = new $.ig.PointCollection(1, g);
        a.add(j)
    }
    return a
}, $type: new $.ig.Type("PointCollectionUtil", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PolygonUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (g, h) {
    if (g == null) {
        return false
    }
    var i = g.count();
    if (i < 4) {
        return false
    }
    var j = false;
    for (var k = 0, l = i - 1; k < i; l = k++) {
        if (((g.item(k).__y > h.__y) != (g.item(l).__y > h.__y)) && (h.__x < (g.item(l).__x - g.item(k).__x) * (h.__y - g.item(k).__y) / (g.item(l).__y - g.item(k).__y) + g.item(k).__x)) {
            j = !j
        }
    }
    return j
}, $type: new $.ig.Type("PolygonUtil", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PolySimplification", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (l, m) {
    var n = l.c();
    var o = l.d();
    if (n.length == 0) {
        return 0
    }
    var p = 0;
    var q = 0;
    var r = m * m;
    p++;
    var s;
    var t;
    var u;
    for (var v = 0; v < n.length; v++) {
        s = n[v] - n[q];
        t = o[v] - o[q];
        u = (s * s) + (t * t);
        if (u > r) {
            n[p] = n[v];
            o[p] = o[v];
            p++;
            q = v
        }
    }
    return p
}, b: function (e, f) {
    var g = f.__x - e.__x;
    var h = f.__y - e.__y;
    return(g * g) + (h * h)
}, $type: new $.ig.Type("PolySimplification", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("RearrangedList$1", "Object", {$t: null, a: null, b: null, init: function (c, d, e) {
    this.$t = c;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.a = d;
    this.b = e
}, indexOf: function (c) {
    var d = this.a.indexOf(c);
    if (d == -1) {
        return -1
    }
    return this.b.indexOf(d)
}, insert: function (c, d) {
    throw new $.ig.NotImplementedException()
}, removeAt: function (b) {
    throw new $.ig.NotImplementedException()
}, item: function (d, c) {
    if (arguments.length === 2) {
        throw new $.ig.NotImplementedException();
        return c
    } else {
        return this.a.item(this.b.item(d))
    }
}, add: function (b) {
    throw new $.ig.NotImplementedException()
}, clear: function () {
    this.b.clear()
}, contains: function (b) {
    return this.a.contains(b)
}, copyTo: function (c, d) {
    throw new $.ig.NotImplementedException()
}, count: function () {
    return this.b.count()
}, isReadOnly: function () {
    return true
}, remove: function (b) {
    throw new $.ig.NotImplementedException()
}, getEnumerator: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$b = this.$this.b.getEnumerator();
                            this.$state = 4;
                            break;
                        case 2:
                            this.$a = this.$b.current();
                            this.$current = this.$this.a.item(this.$a);
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$b.moveNext()) {
                                this.$state = 2
                            } else {
                                this.$state = 5
                            }
                            break;
                        case 5:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerator$1(this.$t, a())
}, $type: new $.ig.Type("RearrangedList$1", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0)])}, true);
$.ig.util.defType("ISmartPlaceable", "Object", {$type: new $.ig.Type("ISmartPlaceable", null)}, true);
$.ig.util.defType("SmartPlaceableWrapper$1", "Object", {$t: null, init: function (a) {
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.i(false)
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, a: null, j: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        return b
    } else {
        return this.a
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, getSmartPositions: function () {
    if (this.i()) {
        return $.ig.SmartPlaceableWrapper$1.prototype.b
    } else {
        return $.ig.SmartPlaceableWrapper$1.prototype.c
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, x: function () {
    return this.m()
}, getSmartBounds: function (f) {
    var g = this.x();
    var h = g.c();
    var i = g.d();
    var j;
    j = this.y(f, h, i);
    return new $.ig.Rect(0, this.l().__x + j.__x, this.l().__y + j.__y, h, i)
}, opacity: function (b) {
    if (arguments.length === 1) {
        this.j().__opacity = b;
        return b
    } else {
        return this.j().__opacity
    }
}, smartPosition: function (f) {
    if (arguments.length === 1) {
        this.d = f;
        var g = this.x();
        var h = g.d();
        var i = g.c();
        var j;
        j = this.y(this.d, i, h);
        this.k({__x: this.l().__x + j.__x, __y: this.l().__y + j.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return f
    } else {
        return this.d
    }
}, d: null, y: function (e, f, g) {
    var h = 0.25;
    switch (e) {
        case $.ig.SmartPosition.prototype.leftTop:
            return{__x: -f * h, __y: -g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.centerTop:
            return{__x: 0, __y: -g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.rightTop:
            return{__x: f * h, __y: -g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.leftCenter:
            return{__x: -f * h, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.centerCenter:
            return{__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.rightCenter:
            return{__x: f * h, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.leftBottom:
            return{__x: -f * h, __y: g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        case $.ig.SmartPosition.prototype.centerBottom:
            return{__x: 0, __y: g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        default:
            return{__x: f * h, __y: g * h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
}, $type: new $.ig.Type("SmartPlaceableWrapper$1", $.ig.Object.prototype.$type, [$.ig.ISmartPlaceable.prototype.$type])}, true);
$.ig.util.defType("SmartPlacer", "Object", {init: function () {
    this.a = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
    $.ig.Object.prototype.init.call(this);
    this.e($.ig.Rect.prototype.empty());
    this.f(0.3);
    this.g(2)
}, _e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, n: function (m) {
    if (m == null) {
        return
    }
    var n = Number.MAX_VALUE;
    var o = $.ig.Rect.prototype.empty();
    var p = $.ig.SmartPosition.prototype.centerBottom;
    var q = false;
    for (var s = 0; s < m.getSmartPositions().length; s++) {
        var r = m.getSmartPositions()[s];
        var t = m.getSmartBounds(r);
        if (this.e().isEmpty() || this.e().contains2(t)) {
            var u = 0;
            var w = this.a.getEnumerator();
            while (w.moveNext()) {
                var v = w.current();
                u += t.intersectionArea(v)
            }
            if (u == 0) {
                n = u;
                p = r;
                o = t;
                q = true;
                break
            }
            if (u < n) {
                n = u;
                p = r;
                o = t;
                q = true
            }
        }
    }
    var x = 0;
    if (q) {
        x = n / o.getArea()
    }
    if (!q || x > this.f()) {
        m.opacity(0)
    } else {
        if (n > 0) {
            m.opacity(Math.pow(1 - $.ig.MathUtil.prototype.i(0, x, 1), this.g()))
        } else {
            m.opacity(1)
        }
        m.smartPosition(p);
        this.a.add(o)
    }
}, a: null, $type: new $.ig.Type("SmartPlacer", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("StackPool$1", "Object", {$t: null, init: function (a) {
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.a = false;
    this.b = new $.ig.Dictionary$2(this.$t, $.ig.Object.prototype.$type, 0);
    this.c = new $.ig.Stack$1(this.$t);
    this.d = new $.ig.Stack$1(this.$t)
}, p: function () {
    var b;
    if (this.c.b() != 0) {
        b = this.c.e()
    } else {
        b = this.d.b() != 0 ? this.d.e() : this.l()();
        this.n()(b)
    }
    this.b.add(b, null);
    return b
}, q: function (c) {
    this.b.remove(c);
    if (this.i()) {
        this.c.c(c)
    } else {
        this.m()(c);
        var d = $.ig.StackPool$1.prototype.ad(this.b.count());
        if (this.d.b() < d) {
            this.o()(c)
        } else {
            this.d.c(c)
        }
    }
}, i: function (e) {
    if (arguments.length === 1) {
        if (this.a != e) {
            this.a = e;
            if (!this.a) {
                var f = $.ig.StackPool$1.prototype.ad(this.b.count());
                while (this.c.b() > 0 && this.d.b() <= f) {
                    var g = this.c.e();
                    this.m()(g);
                    this.d.c(g)
                }
                while (this.c.b() > 0) {
                    var h = this.c.e();
                    this.m()(h);
                    this.o()(h)
                }
                while (this.d.b() > f) {
                    this.o()(this.d.e())
                }
            }
        }
        return e
    } else {
        return this.a
    }
}, a: null, j: function () {
    return this.b.count()
}, k: function () {
    return this.d.b()
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, _n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, _o: null, o: function (b) {
    if (arguments.length === 1) {
        this._o = b;
        return b
    } else {
        return this._o
    }
}, ad: function (c) {
    var d = 2;
    while (c > d) {
        d = d << 1
    }
    return d
}, b: null, c: null, d: null, $type: new $.ig.Type("StackPool$1", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Tile", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, f: null, g: function () {
    var a = Math.pow(2, -this.c);
    var d = Math.pow(2, -this.c);
    return new $.ig.Rect(0, this.a * a, this.b * d, a, d)
}, $type: new $.ig.Type("Tile", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("WriteableBitmap", "Object", {init: function (c, d) {
    $.ig.Object.prototype.init.call(this);
    this.e(c);
    this.f(d);
    this.h($.ig.Rect.prototype.empty())
}, _e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, $type: new $.ig.Type("WriteableBitmap", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IMapRenderDeferralHandler", "Object", {$type: new $.ig.Type("IMapRenderDeferralHandler", null)}, true);
$.ig.util.defType("XamMultiScaleImage", "Control", {init: function () {
    this.bn = new $.ig.List$1($.ig.Tile.prototype.$type, 0);
    this.bo = false;
    this.bp = new $.ig.List$1($.ig.Pair$2.prototype.$type.specialize($.ig.Tile.prototype.$type, $.ig.WriteableBitmap.prototype.$type), 0);
    this.bq = new $.ig.List$1($.ig.Tile.prototype.$type, 0);
    $.ig.Control.prototype.init.call(this);
    this.ce($.ig.Rect.prototype.empty());
    this.cf(new $.ig.CanvasRenderScheduler());
    this.b3(new $.ig.XamMultiScaleImageView(this));
    this.a3($.ig.XamMultiScaleImage.prototype.$type);
    this.b7(this.b6());
    this.b9(this.b8())
}, bc: null, _b3: null, b3: function (b) {
    if (arguments.length === 1) {
        this._b3 = b;
        return b
    } else {
        return this._b3
    }
}, bd: null, b4: function (b) {
    if (arguments.length === 1) {
        if (this.bd != null) {
            this.bd.unRegister(this)
        }
        this.bd = b;
        if (this.bd != null) {
            this.bd.register(this, this.c8.on(this))
        }
        return b
    } else {
        return this.bd
    }
}, b5: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamMultiScaleImage.prototype.be, b);
        return b
    } else {
        return this.b($.ig.XamMultiScaleImage.prototype.be)
    }
}, b6: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamMultiScaleImage.prototype.bf, b);
        return b
    } else {
        return this.b($.ig.XamMultiScaleImage.prototype.bf)
    }
}, _b7: null, b7: function (b) {
    if (arguments.length === 1) {
        this._b7 = b;
        return b
    } else {
        return this._b7
    }
}, b8: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamMultiScaleImage.prototype.bg, b);
        return b
    } else {
        return this.b($.ig.XamMultiScaleImage.prototype.bg)
    }
}, _b9: null, b9: function (b) {
    if (arguments.length === 1) {
        this._b9 = b;
        return b
    } else {
        return this._b9
    }
}, ca: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamMultiScaleImage.prototype.bh, b);
        return b
    } else {
        return this.b($.ig.XamMultiScaleImage.prototype.bh)
    }
}, cb: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamMultiScaleImage.prototype.bi, b);
        return b
    } else {
        return this.b($.ig.XamMultiScaleImage.prototype.bi)
    }
}, propertyChanged: null, cy: function (b) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, b)
    }
    switch (b.propertyName()) {
        case $.ig.XamMultiScaleImage.prototype.a7:
            if (this.b5() != null) {
                this.b5().e = this
            }
            this.db();
            this.c3();
            this.c9();
            break;
        case $.ig.XamMultiScaleImage.prototype.a8:
            this.c5();
            break;
        case $.ig.XamMultiScaleImage.prototype.a9:
            this.c5();
            break;
        case $.ig.XamMultiScaleImage.prototype.ba:
            if (!this.ca()) {
                this.b3().an()
            }
            break
    }
}, _cc: null, cc: function (b) {
    if (arguments.length === 1) {
        this._cc = b;
        return b
    } else {
        return this._cc
    }
}, _cd: null, cd: function (b) {
    if (arguments.length === 1) {
        this._cd = b;
        return b
    } else {
        return this._cd
    }
}, c3: function () {
    this.da();
    if (this.b5() != null) {
        this.cc($.ig.Convert.prototype.c(Math.logBase(this.b5().m(), 2)));
        this.cd($.ig.Convert.prototype.c(Math.logBase(this.b5().k(), 2)))
    }
}, c4: function (e, f, g, h) {
    this.db();
    this.c3();
    this.c9()
}, bk: null, bl: null, bm: null, c5: function () {
    if (this.ca()) {
        this.bk = $.ig.Date.prototype.now();
        this.bl = this.b7();
        this.bm = this.b9();
        this.b3().aj()
    } else {
        this.b7(this.b6());
        this.b9(this.b8());
        this.c9()
    }
}, c6: function () {
    var g = 2;
    var h = $.ig.Date.prototype.now().getTime() - this.bk.getTime();
    var i = h / 1000;
    var j = $.ig.MathUtil.prototype.i((i) / g, 0, 1);
    var k = this.cb() != null ? this.cb().ease(j) : j;
    var l = 1 - k;
    this.b9(this.bm * l + this.b8() * k);
    this.b7({__x: this.bl.__x * l + this.b6().__x * k, __y: this.bl.__y * l + this.b6().__y * k, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    if (j >= 1) {
        this.b3().ak()
    } else {
    }
    this.c9()
}, bn: null, c7: function (e, f, g) {
    for (var h = 0; h < this.bn.count(); ++h) {
        if (this.bn.__inner[h].a == e && this.bn.__inner[h].b == f && this.bn.__inner[h].c == g) {
            return h
        }
    }
    return -1
}, c8: function (B) {
    var A = this;
    this.bo = false;
    if (this.b5() == null || !this.b3().ah() || this.ce().width() == 0 || this.ce().height() == 0) {
        return
    }
    var H = Math.ceil(this.ce().width() / this.b5().m());
    var I = Math.max(1, Math.floor(-Math.logBase(this.b9() / H, 2)));
    if (I > this.cd()) {
        return
    }
    var J = Math.round(Math.pow(2, I));
    var K = this.b9();
    var L = this.ce().height() * K / this.ce().width();
    var M = this.b5().k() / Math.pow(2, I);
    var N = this.b5().l() / Math.pow(2, I);
    var O = Math.max(Math.floor((this.b7().__x * this.b5().k()) / M), 0);
    var P = Math.min(Math.ceil(((this.b7().__x + K) * this.b5().k()) / M), J);
    var Q = Math.max(Math.floor((this.b7().__y * this.b5().l()) / N), 0);
    var R = Math.min(Math.ceil(((this.b7().__y + L) * this.b5().k()) / N), J);
    var S = ((O * M) - (this.b7().__x * this.b5().k())) / M;
    var T = ((Q * N) - (this.b7().__y * this.b5().l())) / N;
    var U = (K * this.b5().k() / M) * (this.b5().m() / this.ce().width());
    var V = new $.ig.List$1($.ig.Tile.prototype.$type, 0);
    for (var W = O; W < P; ++W) {
        for (var X = Q; X < R; ++X) {
            var Y = this.c7(W, X, I);
            if (Y >= 0) {
                V.add(this.bn.__inner[Y]);
                this.bn.removeAt(Y)
            } else {
                V.add((function () {
                    var a = new $.ig.Tile();
                    a.a = W;
                    a.b = X;
                    a.c = I;
                    return a
                }()))
            }
        }
    }
    this.bc.i(true);
    this.da();
    this.bn = V;
    for (var Z = 0; Z < this.bn.count(); ++Z) {
        if (this.bn.__inner[Z].d == null) {
            $.ig.Debug.prototype.c(this.bn.__inner[Z].e == null);
            this.bn.__inner[Z].d = this.bc.p();
            this.bn.__inner[Z].d.__opacity = 1;
            this.b3().af(this.bn.__inner[Z].d);
            var aa = this.dc(this.bn.__inner[Z]);
            if (aa != null) {
                this.bn.__inner[Z].d.a3(aa)
            } else {
                var ab = null;
                var ac = (function () {
                    var a = new $.ig.Tile();
                    a.a = A.bn.__inner[Z].a;
                    a.b = A.bn.__inner[Z].b;
                    a.c = A.bn.__inner[Z].c;
                    return a
                }());
                while (ac.c >= 0 && ab == null) {
                    ac.a = ac.a >> 1;
                    ac.b = ac.b >> 1;
                    ac.c = ac.c - 1;
                    ab = this.dc(ac)
                }
                if (ab != null) {
                    var ad = Math.pow(2, this.bn.__inner[Z].c - ac.c);
                    var ae = $.ig.intDivide(256, ad);
                    var af = ae * (this.bn.__inner[Z].a % ad);
                    var C = ae * (this.bn.__inner[Z].b % ad);
                    this.bn.__inner[Z].e = this.bc.p();
                    this.bn.__inner[Z].e.__opacity = 1;
                    this.b3().ag(this.bn.__inner[Z].e);
                    aa = this.b3().ae(ae, ab, af, C);
                    this.bn.__inner[Z].e.a3(aa)
                }
                this.b3().ac(this.bn.__inner[Z])
            }
        }
        var D = this.b5().m() / U;
        var E = this.b5().n() / U;
        var F = (this.bn.__inner[Z].a - O + S) * D;
        var G = (this.bn.__inner[Z].b - Q + T) * E;
        this.b3().aa(this.bn.__inner[Z].d, F, G);
        this.bn.__inner[Z].d.v(D + 0.5);
        this.bn.__inner[Z].d.w(E + 0.5);
        if (this.bn.__inner[Z].e != null) {
            this.b3().aa(this.bn.__inner[Z].e, F, G);
            this.bn.__inner[Z].e.v(D + 0.5);
            this.bn.__inner[Z].e.w(E + 0.5)
        }
    }
    this.bc.i(false);
    this.b3().aw()
}, bo: null, c9: function () {
    if (this.b5() == null || !this.b3().ah() || this.ce().width() == 0 || this.ce().height() == 0) {
        return
    }
    if (this.bo) {
        return
    }
    this.bo = true;
    this.b3().ai(this.c8.on(this))
}, da: function () {
    for (var b = 0; b < this.bn.count(); ++b) {
        this.b3().ab(this.bn.__inner[b]);
        this.df(this.bn.__inner[b]);
        if (this.bn.__inner[b].d != null) {
            this.bc.q(this.bn.__inner[b].d);
            this.bn.__inner[b].d.a3(null);
            this.bn.__inner[b].d = null
        }
        $.ig.Debug.prototype.c(this.bn.__inner[b].d == null);
        $.ig.Debug.prototype.c(this.bn.__inner[b].e == null)
    }
}, db: function () {
    this.bp.clear()
}, dc: function (c) {
    for (var d = 0; d < this.bp.count(); ++d) {
        if (this.bp.__inner[d].c().a == c.a && this.bp.__inner[d].c().b == c.b && this.bp.__inner[d].c().c == c.c) {
            return this.bp.__inner[d].d()
        }
    }
    return null
}, dd: function (c, d) {
    this.bp.add(new $.ig.Pair$2($.ig.Tile.prototype.$type, $.ig.WriteableBitmap.prototype.$type, c, d))
}, bp: null, bq: null, de: function (b) {
    $.ig.Debug.prototype.c(b.d != null);
    if (b.e != null) {
        b.f = $.ig.Date.prototype.now();
        this.bq.add(b);
        this.b3().al()
    }
}, df: function (c) {
    if (c.e != null) {
        this.bc.q(c.e);
        c.e.a3(null);
        c.e = null;
        for (var d = 0; d < this.bq.count(); ++d) {
            if (this.bq.__inner[d] == c) {
                this.bq.removeAt(d);
                break
            }
        }
        if (this.bq.count() == 0) {
            this.b3().am()
        }
        $.ig.Debug.prototype.c(c.e == null)
    }
}, dg: function () {
    var g = $.ig.Date.prototype.now();
    var h = 0.5;
    for (var i = 0; i < this.bq.count();) {
        var j = g.getTime() - this.bq.__inner[i].f.getTime();
        var k = j / 1000;
        var l = (k) / h;
        l = $.ig.MathUtil.prototype.i(l, 0, 1);
        this.bq.__inner[i].e.__opacity = 1 - l;
        if (l >= 1) {
            this.bc.q(this.bq.__inner[i].e);
            this.bq.__inner[i].e.a3(null);
            this.bq.__inner[i].e = null;
            this.bq.removeAt(i)
        } else {
            ++i
        }
        this.b3().a0()
    }
    if (this.bq.count() == 0) {
        this.b3().am()
    }
}, _ce: null, ce: function (b) {
    if (arguments.length === 1) {
        this._ce = b;
        return b
    } else {
        return this._ce
    }
}, dj: function () {
    this.b9(this.b8());
    this.b7(this.b6());
    this.c9()
}, dk: function (b) {
    this.b3().au(b)
}, dl: function (b) {
    this.b3().a1(b)
}, dm: function (b) {
    this.b3().a2(b)
}, _cf: null, cf: function (b) {
    if (arguments.length === 1) {
        this._cf = b;
        return b
    } else {
        return this._cf
    }
}, $type: new $.ig.Type("XamMultiScaleImage", $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("Pair$2", "Object", {$t1: null, $t2: null, init: function (c, d, e, f) {
    this.$t1 = c;
    this.$t2 = d;
    this.$type = this.$type.specialize(this.$t1, this.$t2);
    $.ig.Object.prototype.init.call(this);
    this.c(e);
    this.d(f)
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, $type: new $.ig.Type("Pair$2", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IEasingFunction", "Object", {$type: new $.ig.Type("IEasingFunction", null)}, true);
$.ig.util.defType("XamMultiScaleImageView", "Object", {_n: null, n: function (b) {
    if (arguments.length === 1) {
        this._n = b;
        return b
    } else {
        return this._n
    }
}, init: function (d) {
    var c = this;
    this.b = new $.ig.List$1($.ig.Tile.prototype.$type, 0);
    this.c = new $.ig.List$1($.ig.Tile.prototype.$type, 0);
    this.d = $.ig.XamMultiScaleImageView.prototype.a;
    this.e = $.ig.XamMultiScaleImageView.prototype.a;
    this.f = $.ig.Rect.prototype.empty();
    $.ig.Object.prototype.init.call(this);
    this.n(d);
    this.n().cf().m(this);
    this.o(new $.ig.List$1($.ig.Image.prototype.$type, 0));
    this.n().bc = (function () {
        var a = new $.ig.StackPool$1($.ig.Image.prototype.$type);
        a.l(c.w.on(c));
        a.n(c.x.on(c));
        a.m(c.y.on(c));
        a.o(c.z.on(c));
        return a
    }());
    for (var e = 0; e < 4; ++e) {
        this.c.add(null)
    }
}, _o: null, o: function (b) {
    if (arguments.length === 1) {
        this._o = b;
        return b
    } else {
        return this._o
    }
}, w: function () {
    return new $.ig.Image()
}, x: function (b) {
    this.o().add(b)
}, y: function (b) {
    this.o().remove(b)
}, z: function (b) {
}, aa: function (d, e, f) {
    d.y(e);
    d.x(f)
}, ab: function (g) {
    for (var h = 0; h < this.c.count(); ++h) {
        if (g == this.c.__inner[h]) {
            if (g.d != null && g.d.a3() != null) {
                var i = g.d.a3();
                var j = i.g();
                var k = $(j);
                k.unbind("load");
                j.src = null
            }
            this.c.__inner[h] = null;
            return
        }
    }
    for (var l = 0; l < this.b.count(); ++l) {
        if (this.b.__inner[l] == g) {
            this.b.removeAt(l);
            break
        }
    }
}, ac: function (c) {
    var b = this;
    this.b.add(c);
    this.b.t(function (a, f) {
        var g = 0;
        var h = 0;
        if (a.e != null) {
            g = (a.e.a3()).e()
        }
        if (f.e != null) {
            h = (f.e.a3()).e()
        }
        if (g < h) {
            return -1
        } else {
            if (g > h) {
                return 1
            }
        }
        return 0
    });
    this.ad()
}, ad: function () {
    var j = -1;
    if (this.b.count() > 0) {
        for (var e = 0; e < this.c.count(); ++e) {
            if (this.c.__inner[e] == null) {
                j = e;
                break
            }
        }
    }
    if (j >= 0) {
        this.c.__inner[j] = this.b.__inner[0];
        var f = new $.ig.WriteableBitmap(this.n().b5().m(), this.n().b5().n());
        this.c.__inner[j].d.a3(f);
        var i = $("<img></img>");
        var g = i[0];
        f.g(g);
        var k = this;
        i.bind("load readystatechange", function (a) {
            if (this.complete || (this.readyState == "complete" && a.type == "readystatechange")) {
                k.downloadCompleted(a, j)
            }
        });
        this.b.removeAt(0);
        var h = this.n().b5().z(this.c.__inner[j].c + 8, this.c.__inner[j].a, this.c.__inner[j].b);
        g.src = h.value()
    }
}, b: null, c: null, downloadCompleted: function (d, e) {
    var f = this.c.__inner[e];
    if (f == null || f.d == null || f.d.a3() == null || (f.d.a3()).g() == null || !((f.d.a3()).g()).complete) {
        return
    }
    this.c.__inner[e] = null;
    this.n().dd(f, f.d.a3());
    if (f.d != null) {
        this.n().de(f)
    }
    this.ad();
    this.ax()
}, ae: function (f, g, h, i) {
    var j = new $.ig.WriteableBitmap(f, f);
    j.g(g.g());
    if (!g.h().isEmpty()) {
        h += Math.round(g.h().left());
        i += Math.round(g.h().top())
    }
    j.h(new $.ig.Rect(0, h, i, f, f));
    return j
}, af: function (b) {
    b.z(0)
}, ag: function (b) {
    b.z(1)
}, ah: function () {
    return true
}, ai: function (b) {
    if (this.n().b4() != null) {
        this.n().b4().deferredRefresh()
    } else {
        window.setTimeout(b, 0)
    }
}, d: null, e: null, aj: function () {
    if (this.d == $.ig.XamMultiScaleImageView.prototype.a) {
        this.d = window.setInterval(this.n().c6.on(this.n()), 50)
    }
}, ak: function () {
    if (this.d != $.ig.XamMultiScaleImageView.prototype.a) {
        window.clearInterval(this.d);
        this.d = $.ig.XamMultiScaleImageView.prototype.a
    }
}, al: function () {
    if (this.e == $.ig.XamMultiScaleImageView.prototype.a) {
        this.e = window.setInterval(this.n().dg.on(this.n()), 50)
    }
}, am: function () {
    if (this.e != $.ig.XamMultiScaleImageView.prototype.a) {
        window.clearInterval(this.e);
        this.e = $.ig.XamMultiScaleImageView.prototype.a
    }
}, an: function () {
    if (this.d != $.ig.XamMultiScaleImageView.prototype.a) {
        this.am();
        this.n().dj()
    }
}, _p: null, p: function (b) {
    if (arguments.length === 1) {
        this._p = b;
        return b
    } else {
        return this._p
    }
}, _q: null, q: function (b) {
    if (arguments.length === 1) {
        this._q = b;
        return b
    } else {
        return this._q
    }
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, au: function (b) {
    this.p($(b));
    this.p().css("position", "relative");
    this.q($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.p().append(this.q());
    this.r(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.q()[0]).getContext("2d")));
    this.av(this.p().width(), this.p().height())
}, av: function (c, d) {
    this.q().attr("width", c.toString());
    this.q().attr("height", d.toString());
    this.n().ce(new $.ig.Rect(0, 0, 0, c, d));
    this.n().c9()
}, aw: function () {
    this.ax()
}, index: function () {
    return 0
}, postRender: function () {
}, _isDirty: null, isDirty: function (b) {
    if (arguments.length === 1) {
        this._isDirty = b;
        return b
    } else {
        return this._isDirty
    }
}, ax: function () {
    if (this.r() == null) {
        return
    }
    if (!this.isDirty()) {
        this.isDirty(true);
        this.n().cf().o()
    }
}, undirty: function (b) {
    this.isDirty(false);
    this.ay()
}, f: null, ay: function () {
    if (!this.f.isEmpty()) {
        this.r().t(this.f.left(), this.f.top(), this.f.width(), this.f.height())
    }
    this.f = this.n().ce();
    for (var e = 0; e < this.o().count(); e++) {
        var f = this.o().__inner[e];
        if (f.z() == 0) {
            this.az(f)
        }
    }
    for (var g = 0; g < this.o().count(); g++) {
        var h = this.o().__inner[g];
        if (h.z() == 1) {
            this.az(h)
        }
    }
}, az: function (c) {
    this.r().z(c.__opacity);
    var d = c.a3();
    if (d == null || d.g() == null) {
        return
    }
    if (!d.h().isEmpty()) {
        if (d.h().width() < 1 || d.h().height() < 1) {
            return
        }
        this.r().u(d.g(), d.h().left(), d.h().top(), d.h().width(), d.h().height(), Math.round(c.y() + this.n().ce().left()), Math.round(c.x() + this.n().ce().top()), c.v(), c.w())
    } else {
        this.r().v(d.g(), Math.round(c.y() + this.n().ce().left()), Math.round(c.x() + this.n().ce().top()), c.v(), c.w())
    }
    this.r().z(1)
}, a0: function () {
    this.ax()
}, a1: function (b) {
    this.r(b);
    this.ax()
}, a2: function (b) {
    this.n().ce(b);
    this.n().c9()
}, $type: new $.ig.Type("XamMultiScaleImageView", $.ig.Object.prototype.$type, [$.ig.ISchedulableRender.prototype.$type])}, true);
$.ig.SmartPosition.prototype.leftTop = 0;
$.ig.SmartPosition.prototype.centerTop = 1;
$.ig.SmartPosition.prototype.rightTop = 2;
$.ig.SmartPosition.prototype.leftCenter = 3;
$.ig.SmartPosition.prototype.centerCenter = 4;
$.ig.SmartPosition.prototype.rightCenter = 5;
$.ig.SmartPosition.prototype.leftBottom = 6;
$.ig.SmartPosition.prototype.centerBottom = 7;
$.ig.SmartPosition.prototype.rightBottom = 8;
$.ig.ErrorBarCalculatorType.prototype.fixed = 0;
$.ig.ErrorBarCalculatorType.prototype.percentage = 1;
$.ig.ErrorBarCalculatorType.prototype.data = 2;
$.ig.ErrorBarCalculatorType.prototype.standardDeviation = 3;
$.ig.ErrorBarCalculatorType.prototype.standardError = 4;
$.ig.ErrorBarCalculatorReference.prototype.x = 0;
$.ig.ErrorBarCalculatorReference.prototype.y = 1;
$.ig.BingMapsTileSource.prototype.tilePathProperty = $.ig.DependencyProperty.prototype.l("TilePath", String, $.ig.BingMapsTileSource.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsTileSource.prototype.ae));
$.ig.BingMapsTileSource.prototype.subDomainsProperty = $.ig.DependencyProperty.prototype.l("SubDomains", $.ig.ObservableCollection$1.prototype.$type.specialize(String), $.ig.BingMapsTileSource.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsTileSource.prototype.ae));
$.ig.BingMapsTileSource.prototype.cultureNameProperty = $.ig.DependencyProperty.prototype.l("CultureName", String, $.ig.BingMapsTileSource.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsTileSource.prototype.ae));
$.ig.CloudMadeTileSource.prototype.ac = "http://{S}.tile.cloudmade.com/{K}/{P}/256/{Z}/{X}/{Y}.png";
$.ig.CloudMadeTileSource.prototype.ad = "Key";
$.ig.CloudMadeTileSource.prototype.ae = "Parameter";
$.ig.CloudMadeTileSource.prototype.keyProperty = $.ig.DependencyProperty.prototype.l($.ig.CloudMadeTileSource.prototype.ad, String, $.ig.CloudMadeTileSource.prototype.$type, new $.ig.PropertyMetadata(0, null));
$.ig.CloudMadeTileSource.prototype.parameterProperty = $.ig.DependencyProperty.prototype.l($.ig.CloudMadeTileSource.prototype.ae, String, $.ig.CloudMadeTileSource.prototype.$type, new $.ig.PropertyMetadata(0, null));
$.ig.OpenStreetMapTileSource.prototype.ac = "http://tile.openstreetmap.org/{Z}/{X}/{Y}.png";
$.ig.SmartPlaceableWrapper$1.prototype.b = [$.ig.SmartPosition.prototype.centerCenter];
$.ig.SmartPlaceableWrapper$1.prototype.c = [$.ig.SmartPosition.prototype.centerCenter, $.ig.SmartPosition.prototype.rightCenter, $.ig.SmartPosition.prototype.rightTop, $.ig.SmartPosition.prototype.centerTop, $.ig.SmartPosition.prototype.rightBottom, $.ig.SmartPosition.prototype.centerBottom, $.ig.SmartPosition.prototype.leftTop, $.ig.SmartPosition.prototype.leftCenter, $.ig.SmartPosition.prototype.leftBottom];
$.ig.XamMultiScaleImage.prototype.a7 = "Source";
$.ig.XamMultiScaleImage.prototype.a8 = "ViewportOrigin";
$.ig.XamMultiScaleImage.prototype.a9 = "ViewportWidth";
$.ig.XamMultiScaleImage.prototype.ba = "UseSprings";
$.ig.XamMultiScaleImage.prototype.bb = "SpringsEasingFunction";
$.ig.XamMultiScaleImage.prototype.be = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.a7, $.ig.XamMultiScaleTileSource.prototype.$type, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).cy(new $.ig.PropertyChangedEventArgs$1($.ig.XamMultiScaleTileSource.prototype.$type, $.ig.XamMultiScaleImage.prototype.a7, $.ig.util.cast($.ig.XamMultiScaleTileSource.prototype.$type, d.f()), $.ig.util.cast($.ig.XamMultiScaleTileSource.prototype.$type, d.e())))
}));
$.ig.XamMultiScaleImage.prototype.bf = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.a8, $.ig.Point.prototype.$type, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, function (c, d) {
    (c).cy(new $.ig.PropertyChangedEventArgs$1($.ig.Point.prototype.$type, $.ig.XamMultiScaleImage.prototype.a8, d.f(), d.e()))
}));
$.ig.XamMultiScaleImage.prototype.bg = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.a9, Number, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    (c).cy(new $.ig.PropertyChangedEventArgs$1(Number, $.ig.XamMultiScaleImage.prototype.a9, d.f(), d.e()))
}));
$.ig.XamMultiScaleImage.prototype.bh = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.ba, $.ig.Boolean.prototype.$type, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    (c).cy(new $.ig.PropertyChangedEventArgs$1($.ig.Boolean.prototype.$type, $.ig.XamMultiScaleImage.prototype.ba, d.f(), d.e()))
}));
$.ig.XamMultiScaleImage.prototype.bi = $.ig.DependencyProperty.prototype.l($.ig.XamMultiScaleImage.prototype.bb, $.ig.IEasingFunction.prototype.$type, $.ig.XamMultiScaleImage.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).cy(new $.ig.PropertyChangedEventArgs$1($.ig.IEasingFunction.prototype.$type, $.ig.XamMultiScaleImage.prototype.bb, d.f(), d.e()))
}));
$.ig.XamMultiScaleImageView.prototype.a = -1;
$.ig.util.extCopy($.ig.ArrayUtil, [
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1, $.ig.List$1, $.ig.ReadOnlyCollection$1],
        ["shuffle$1", "insertionIndex$1", "insertionIndex$11111", "binarySearch$1"]
    ]
]);
$.ig.util.extCopy($.ig.ColorUtil, [
    [
        [$.ig.Color],
        ["getInterpolation", "getLightened", "getAHSL", "getAHSV"]
    ]
]);
$.ig.util.extCopy($.ig.Extensions, [
    [
        [$.ig.PathGeometry],
        ["reset"]
    ],
    [
        [$.ig.GeometryGroup],
        ["reset1"]
    ],
    [
        [$.ig.FrameworkElement],
        ["detach"]
    ],
    [
        [$.ig.Panel],
        ["transferChildrenTo"]
    ],
    [
        [$.ig.Point],
        ["isPlottable"]
    ],
    [
        [$.ig.Rect],
        ["isPlottable1"]
    ]
]);
$.ig.util.extCopy($.ig.PathFigureUtil, [
    [
        [$.ig.PathFigureCollection],
        ["duplicate"]
    ],
    [
        [$.ig.PathFigure],
        ["duplicate1"]
    ]
]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1, $.ig.List$1, $.ig.ReadOnlyCollection$1],
        ["flattenTo", "getBounds2", "clipTo"]
    ],
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1, $.ig.ICollection$1, $.ig.IList$1, $.ig.List$1, $.ig.IDictionary$2, $.ig.Dictionary$2, $.ig.GenericEnumerable$1, $.ig.ReadOnlyCollection$1, $.ig.Stack$1, $.ig.IOrderedEnumerable$1, $.ig.SortedList$1, $.ig.IGrouping$2],
        ["getBounds", "getBounds11", "getCentroid", "toPointCollection", "toPointList"]
    ],
    [
        [$.ig.List$1],
        ["getBounds3", "getBounds41", "toPointCollections"]
    ]
]);
$.ig.util.extCopy($.ig.RectUtil, [
    [
        [$.ig.Rect],
        ["getCenter", "getArea", "duplicate", "getLeader", "getDistanceSquared", "getDistanceSquared11", "getDistanceSquared22", "contains3", "intersectsWith1", "intersectionArea", "getInflated", "inflate", "inflate11", "round", "isNull"]
    ]
]);
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.EdgeClipper, $.ig.RearrangedList$1],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.FastItemsSource, $.ig.EdgeClipper, $.ig.RearrangedList$1],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.IFastItemColumn$1, $.ig.FastItemColumn, $.ig.FastItemDateTimeColumn, $.ig.FastItemObjectColumn, $.ig.FastItemIntColumn, $.ig.FastItemsSource, $.ig.EdgeClipper, $.ig.RearrangedList$1],
        ["asQueryable"]
    ]
]);
$.ig = $.ig || {};
$.ig.util.bulkDefine(["AxisLabelPanelBaseView", "AngleAxisLabelPanelView", "AxisLabelPanelBase", "AngleAxisLabelPanel", "AutoRangeCalculator", "Axis", "AxisCollection", "AxisComponentsForView", "AxisComponentsFromView", "AxisLabelInfo", "AxisLabelManager", "LabelPosition", "AxisLabelSettings", "AxisRange", "Snapper", "LinearNumericSnapper", "LogarithmicNumericSnapper", "LinearCategorySnapper", "AxisView", "IScaler", "ICategoryScaler", "CategoryAxisBase", "IAngleScaler", "CategoryAngleAxis", "CategoryAxisBaseView", "CategoryAngleAxisView", "ISortingAxis", "CategoryDateTimeXAxis", "CategoryDateTimeXAxisView", "AxisRenderingParametersBase", "CategoryAxisRenderingParameters", "AxisRendererBase", "CategoryAxisRenderer", "CategoryXAxis", "CategoryXAxisView", "CategoryYAxis", "CategoryYAxisView", "HorizontalAxisLabelPanelBase", "HorizontalAxisLabelPanel", "HorizontalAxisLabelPanelBaseView", "NumericAxisBase", "NumericAngleAxis", "NumericAxisBaseView", "NumericAngleAxisView", "StraightNumericAxisBase", "NumericRadiusAxis", "NumericRadiusAxisView", "NumericXAxis", "StraightNumericAxisBaseView", "NumericXAxisView", "NumericYAxis", "NumericYAxisView", "PolarAxes", "PolarAxisRenderingManager", "IPolarRadialRenderingParameters", "NumericAxisRenderingParameters", "PolarAxisRenderingParameters", "RadialAxisRenderingParameters", "RadialAxes", "RadialAxisLabelPanel", "RadialAxisLabelPanelView", "GetSnapperInfoStrategy", "NumericAxisRenderer", "RangeInfo", "NumericScaler", "LinearScaler", "HorizontalLinearScaler", "LogarithmicScaler", "HorizontalLogarithmicScaler", "NumericScaleMode", "ScalerParams", "VerticalLinearScaler", "VerticalLogarithmicScaler", "TickmarkValues", "CategoryTickmarkValues", "LinearTickmarkValues", "LogarithmicTickmarkValues", "TickmarkValuesInitializationParameters", "ViewportUtils", "FramePreparer", "CategoryFramePreparerBase", "CategoryFramePreparer", "BarFramePreparer", "BarTrendFitCalculator", "TrendLineManagerBase$1", "IPreparesCategoryTrendline", "CategoryTrendLineManagerBase", "CategoryTrendLineManager", "BarTrendLineManager", "BrushScale", "MarkerManagerBase", "BubbleMarkerManager", "IProvidesViewport", "Series", "MarkerSeries", "ISupportsErrorBars", "ScatterBase", "BubbleSeries", "SeriesView", "MarkerSeriesView", "ScatterBaseView", "BubbleSeriesView", "CustomPaletteBrushScale", "SizeScale", "ValueBrushScale", "IHasCategoryAxis", "IHasCategoryModePreference", "CategorySeries", "IIsCategoryBased", "IHasSingleValueCategory", "IHasTrendline", "IHasCategoryTrendline", "AnchoredCategorySeries", "VerticalAnchoredCategorySeries", "IBarSeries", "BarSeries", "ISupportsMarkers", "CategorySeriesView", "AnchoredCategorySeriesView", "BarSeriesView", "IBucketizer", "CategoryBucketCalculator", "AnchoredCategoryBucketCalculator", "BarBucketCalculator", "RangeCategoryBucketCalculator", "HorizontalAnchoredCategorySeries", "PointSeries", "PointSeriesView", "IHasHighLowValueCategory", "RangeCategorySeries", "HorizontalRangeCategorySeries", "RangeAreaSeries", "RangeCategorySeriesView", "RangeAreaSeriesView", "RangeCategoryFramePreparer", "ValuesHolder", "HighLowValuesHolder", "DefaultHighLowValueProvider", "RangeColumnSeries", "RangeColumnSeriesView", "SplineSeriesBaseView", "SplineAreaSeriesView", "VerticalAxisLabelPanel", "VerticalAxisLabelPanelView", "AreaSeries", "AreaSeriesView", "Frame", "CategoryFrame", "SingleValuesHolder", "DefaultSingleValueProvider", "PreparationParams", "CategoryLineRasterizer", "ColumnSeries", "ColumnSeriesView", "DefaultSupportsMarkers", "DefaultProvidesViewport", "DefaultSupportsErrorBars", "LineSeries", "LineSeriesView", "SplineSeriesBase", "SplineAreaSeries", "SplineSeries", "SplineSeriesView", "StepAreaSeries", "StepAreaSeriesView", "StepLineSeries", "StepLineSeriesView", "WaterfallSeries", "WaterfallSeriesView", "MarkerTemplates", "DataSourceManager", "BrushSelectionMode", "IndicatorDisplayType", "TimeAxisDisplayType", "ChartAxisRangeChangedEventArgs", "DataChartAxisRangeChangedEventHandler", "FinancialSeries", "FinancialIndicator", "StrategyBasedIndicator", "AbsoluteVolumeOscillatorIndicator", "IndicatorCalculationStrategy", "AbsoluteVolumeOscillatorIndicatorStrategy", "AccumulationDistributionIndicator", "StreamingIndicatorCalculationStrategy", "AccumulationDistributionIndicatorStrategy", "AverageDirectionalIndexIndicator", "AverageDirectionalIndexIndicatorStrategy", "AverageTrueRangeIndicator", "AverageTrueRangeIndicatorStrategy", "FinancialOverlay", "BollingerBandsOverlay", "FinancialBucketCalculator", "BollingerBandsBucketCalculator", "FinancialSeriesView", "BollingerBandsOverlayView", "BollingerBandWidthIndicator", "BollingerBandWidthIndicatorStrategy", "ChaikinOscillatorIndicator", "ChaikinOscillatorIndicatorStrategy", "ChaikinVolatilityIndicator", "ChaikinVolatilityIndicatorStrategy", "CommodityChannelIndexIndicator", "CommodityChannelIndexIndicatorStrategy", "CustomIndicator", "CustomIndicatorStrategy", "PriceChannelOverlayView", "DetrendedPriceOscillatorIndicator", "DetrendedPriceOscillatorIndicatorStrategy", "EaseOfMovementIndicator", "EaseOfMovementIndicatorStrategy", "FastStochasticOscillatorIndicator", "FastStochasticOscillatorIndicatorStrategy", "FinancialIndicatorBucketCalculator", "FinancialIndicatorView", "ForceIndexIndicator", "ForceIndexIndicatorStrategy", "FullStochasticOscillatorIndicator", "FullStochasticOscillatorIndicatorStrategy", "PercentKCalculationStrategy", "IndicatorRenderer", "ItemwiseIndicatorCalculationStrategy", "ItemwiseStrategyBasedIndicator", "ItemwiseStrategyCalculationStrategy", "MarketFacilitationIndexIndicator", "MarketFacilitationIndexIndicatorStrategy", "MassIndexIndicator", "MassIndexIndicatorStrategy", "MedianPriceIndicator", "MedianPriceIndicatorStrategy", "MoneyFlowIndexIndicator", "MoneyFlowIndexIndicatorStrategy", "MovingAverageConvergenceDivergenceIndicator", "MovingAverageConvergenceDivergenceIndicatorStrategy", "NegativeVolumeIndexIndicator", "NegativeVolumeIndexIndicatorStrategy", "OnBalanceVolumeIndicator", "OnBalanceVolumeIndicatorStrategy", "PercentagePriceOscillatorIndicator", "PercentagePriceOscillatorIndicatorStrategy", "PercentageVolumeOscillatorIndicator", "PercentageVolumeOscillatorIndicatorStrategy", "PositiveVolumeIndexIndicator", "PositiveVolumeIndexIndicatorStrategy", "PriceChannelOverlay", "PriceChannelBucketCalculator", "PriceVolumeTrendIndicator", "PriceVolumeTrendIndicatorStrategy", "RateOfChangeAndMomentumIndicator", "RateOfChangeAndMomentumIndicatorStrategy", "RelativeStrengthIndexIndicator", "RelativeStrengthIndexIndicatorStrategy", "SlowStochasticOscillatorIndicator", "SlowStochasticOscillatorIndicatorStrategy", "StandardDeviationIndicator", "StandardDeviationIndicatorStrategy", "StochRSIIndicator", "StochRSIIndicatorStrategy", "TRIXIndicator", "TRIXIndicatorStrategy", "TypicalPriceIndicator", "TypicalPriceIndicatorStrategy", "UltimateOscillatorIndicator", "UltimateOscillatorIndicatorCalculationStrategy", "WeightedCloseIndicator", "WeightedCloseIndicatorStrategy", "WilliamsPercentRIndicator", "WilliamsPercentRIndicatorStrategy", "LegendBaseViewManager", "LegendBase", "ScaleLegend", "LegendBaseView", "ScaleLegendView", "GradientData", "GradientStopData", "PieChartViewManager", "HighDensityScatterSeries", "MouseMoveThunk", "ScatterMouseOverEventArgs", "ProgressiveLoadStatusEventArgs", "HighDensityScatterSeriesView", "KDTree2D", "KNearestResults", "KNearestResult", "KDTreeThunk", "SearchArgs", "KDTreeNode2D", "SearchData", "PointData", "ScatterLineSeries", "ScatterLineSeriesView", "SeriesViewerComponentsForView", "SeriesViewerComponentsFromView", "SeriesViewer", "XamDataChart", "SeriesViewerView", "XamDataChartView", "ChartCollection", "ChartContentManager", "ContentInfo", "ChartContentType", "DataContext", "PieSliceDataContext", "LabelPanelArranger", "LabelPanelsArrangeState", "LegendTemplates", "Marker", "CollisionAvoidanceType", "NumericMarkerManager", "CategoryMarkerManager", "MarkerManagerBucket", "PathRenderer", "NaNSegmenter", "IFlattener", "DefaultFlattener", "RenderSurface", "SeriesCollection", "SeriesComponentsForView", "SeriesComponentsFromView", "SeriesRenderingArguments", "SeriesRenderer$2", "IFastItemsSourceProvider", "SyncLink", "FastItemsSourceReference", "SyncSettings", "SyncSettingsConverter", "SyncLinkManager", "SyncManager", "DefaultCategoryTrendlineHost", "DefaultCategoryTrendlinePreparer", "TrendResolutionParams", "TrendFitCalculator", "TrendAverageCalculator", "PolarTrendLineManager", "RadialTrendLineManager", "ScatterTrendLineManager", "SortingTrendLineManager", "AxisLabelsLocation", "CategoryMode", "AxisOrientation", "GridMode", "LabelsPosition", "MarkerType", "OthersCategoryType", "PriceDisplayType", "SplineType", "WindowMode", "WindowResponse", "ErrorBarSettingsBase", "CategoryErrorBarSettings", "EnableErrorBars", "ErrorBarsHelper", "ScatterErrorBarSettings", "AxisRangeChangedEventArgs", "AxisRangeChangedEventHandler", "DataChartMouseButtonEventArgs", "DataChartMouseButtonEventHandler", "DataChartLegendMouseButtonEventArgs", "DataChartLegendMouseButtonEventHandler", "ChartMouseEventArgs", "DataChartMouseEventHandler", "ChartLegendMouseEventArgs", "DataChartLegendMouseEventHandler", "ChartCursorEventArgs", "DataChartCursorEventHandler", "FinancialEventArgs", "FinancialEventHandler", "PropertyUpdatedEventArgs", "PropertyUpdatedEventHandler", "SliceClickEventArgs", "SliceClickEventHandler", "FinancialPriceSeries", "FinancialPriceBucketCalculator", "FinancialPriceSeriesView", "FinancialCalculationDataSource", "FinancialCalculationSupportingCalculations", "SupportingCalculation$1", "SupportingCalculationStrategy", "ColumnSupportingCalculation", "ProvideColumnValuesStrategy", "DataSourceSupportingCalculation", "CalculatedColumn", "ItemLegend", "ItemLegendView", "Legend", "LegendView", "PieChartBase", "PieLabel", "IndexCollection", "IndexCollectionTypeConverter", "PieChartBaseView", "Slice", "SliceView", "XamPieChart", "XamPieChartView", "PolarBase", "PolarLineSeriesBase", "PolarAreaSeries", "PolarBaseView", "PolarLineSeriesBaseView", "PolarAreaSeriesView", "PolarAxisInfoCache", "ScatterFrameBase$1", "PolarFrame", "AngleRadiusPair", "PolarLinePlanner", "PolarLineSeries", "PolarLineSeriesView", "PolarScatterSeries", "PolarScatterSeriesView", "PolarSplineAreaSeries", "PolarSplineAreaSeriesView", "PolarSplineSeries", "PolarSplineSeriesView", "RadialBase", "AnchoredRadialSeries", "RadialBucketCalculator", "AnchoredRadialBucketCalculator", "RadialBaseView", "AnchoredRadialSeriesView", "RadialFrame", "RadialColumnSeries", "RadialColumnSeriesView", "RadialLineSeries", "RadialLineSeriesView", "RadialPieSeries", "SliceCoords", "RadialPieSeriesView", "ScatterAxisInfoCache", "DictInterpolator$3", "OwnedPoint", "ScatterFrame", "ScatterSeries", "ScatterSeriesView", "CoercionInfo", "SeriesViewerSurfaceViewer", "OverviewPlusDetailViewportHost", "SeriesViewerViewManager", "Bezier", "BezierPointComparison", "BezierOp", "BezierPoint", "ChartVisualData", "SeriesVisualDataList", "SeriesVisualData", "MarkerVisualDataList", "MarkerVisualData", "AxisVisualDataList", "AxisVisualData", "PrimitiveVisualDataList", "AxisLabelVisualDataList", "AxisLabelVisualData", "LabelAppearanceData", "PrimitiveAppearanceData", "GetPointsSettings", "PrimitiveVisualData", "RectangleVisualData", "ShapeTags", "LineVisualData", "PolyLineVisualData", "PolygonVisualData", "PathVisualData", "GeometryData", "PathGeometryData", "LineGeometryData", "RectangleGeometryData", "EllipseGeometryData", "PathFigureData", "SegmentData", "LineSegmentData", "PolylineSegmentData", "ArcSegmentData", "AppearanceHelper", "IDetectsCollisions", "CollisionAvoider", "ColumnUtil", "IPool$1", "IIndexedPool$1", "Pool$1", "IHashPool$2", "HashPool$2", "SafeEnumerable", "SafeReadOnlyDoubleCollection", "SafeSortedReadOnlyDoubleCollection", "SortedListView$1", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise", "BrushCollection", "EventProxy", "DOMEventProxy", "TrendCalculators", "TrendLineType", "UnknownValuePlotting", "ErrorBarCalculatorReference", "ErrorBarCalculatorType", "IErrorBarCalculator", "MouseWheelHandler", "GestureHandler", "TouchHandler", "ContactHandler", "MouseHandler", "MouseOverHandler", "KeyHandler", "IFastItemColumnInternal", "IFastItemColumnPropertyName", "IFastItemColumn$1", "FastItemColumn", "FastItemDateTimeColumn", "FastItemObjectColumn", "FastItemIntColumn", "FastItemsSource", "ColumnReference", "FastItemsSourceEventAction", "FastItemsSourceEventArgs", "FastReflectionHelper", "IRenderer", "RectChangedEventArgs", "RectChangedEventHandler", "CanvasRenderScheduler", "CanvasViewRenderer", "GradientDirection", "RenderingContext", "DependencyObjectNotifier", "InteractionState", "IOverviewPlusDetailControl", "ISchedulableRender", "NavigationSettings", "OverviewPlusDetailPaneMode", "PropertyChangedEventArgs$1", "XamOverviewPlusDetailPane", "XamOverviewPlusDetailPaneView", "XamOverviewPlusDetailPaneViewManager", "XamMultiScaleTileSource", "MapTileSource", "BingMapsTileSource", "CloudMadeTileSource", "OpenStreetMapTileSource", "ArrayUtil", "Clipper", "EdgeClipper", "LeftClipper", "BottomClipper", "RightClipper", "TopClipper", "InterpolationMode", "ColorUtil", "DoubleAnimator", "Extensions", "Flattener", "SpiralTodo", "GeometryUtil", "Numeric", "LeastSquaresFit", "MathUtil", "PathFigureUtil", "PointCollectionUtil", "PolygonUtil", "PolySimplification", "RearrangedList$1", "RectUtil", "ISmartPlaceable", "SmartPlaceableWrapper$1", "SmartPosition", "SmartPlacer", "StackPool$1", "Tile", "WriteableBitmap", "IMapRenderDeferralHandler", "XamMultiScaleImage", "Pair$2", "IEasingFunction", "XamMultiScaleImageView"]);
$.ig.util.defType("EnableErrorBars", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("EnableErrorBars", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CollisionAvoidanceType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("CollisionAvoidanceType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("BrushSelectionMode", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("BrushSelectionMode", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TrendLineManagerBase$1", "Object", {$tTrendColumn: null, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, init: function (a) {
    this.i = (function () {
        var b = new $.ig.Polyline();
        b.a6(false);
        return b
    }());
    this.$tTrendColumn = a;
    this.$type = this.$type.specialize(this.$tTrendColumn);
    $.ig.Object.prototype.init.call(this);
    this.l(new $.ig.List$1(this.$tTrendColumn, 0))
}, n: function () {
    return this.i
}, i: null, t: function (b) {
    this.w(b, null)
}, u: function (b) {
    return b == $.ig.TrendLineType.prototype.linearFit || b == $.ig.TrendLineType.prototype.quadraticFit || b == $.ig.TrendLineType.prototype.cubicFit || b == $.ig.TrendLineType.prototype.quarticFit || b == $.ig.TrendLineType.prototype.quinticFit || b == $.ig.TrendLineType.prototype.logarithmicFit || b == $.ig.TrendLineType.prototype.exponentialFit || b == $.ig.TrendLineType.prototype.powerLawFit
}, v: function (b) {
    return b == $.ig.TrendLineType.prototype.simpleAverage || b == $.ig.TrendLineType.prototype.exponentialAverage || b == $.ig.TrendLineType.prototype.modifiedAverage || b == $.ig.TrendLineType.prototype.cumulativeAverage || b == $.ig.TrendLineType.prototype.weightedAverage
}, w: function (e, f) {
    this.n().bn().clear();
    if (f != null) {
        f.h(this.n().bn())
    }
    if (e != null) {
        var h = e.getEnumerator();
        while (h.moveNext()) {
            var g = h.current();
            if (!isNaN(g.__x) && !isNaN(g.__y)) {
                if (f != null) {
                    f.l(g)
                } else {
                    this.n().bn().add(g)
                }
            }
        }
    }
    this.n().a6(this.n().bn().count() > 0)
}, x: function (d, e, f) {
    this.y(d, e, f, null)
}, y: function (f, i, j, k) {
    var e = this;
    if (k != null) {
        k.h(j)
    }
    var m = $.ig.Flattener.prototype.c(f.count(),function (a) {
        return f.item(a).__x
    },function (a) {
        return f.item(a).__y
    }, i.m()).getEnumerator();
    while (m.moveNext()) {
        var l = m.current();
        if (k != null) {
            k.l(f.item(l))
        } else {
            j.add(f.item(l))
        }
    }
}, z: function (c, d) {
    if (c == null || d == null) {
        return
    }
    if (this.n().aa() != null) {
        this.aa()
    }
    c.a3().add(this.n())
}, aa: function () {
    if (this.n() == null) {
        return
    }
    var b = $.ig.util.cast($.ig.Panel.prototype.$type, this.n().aa());
    if (b != null) {
        b.a3().remove(this.n())
    }
}, ab: function () {
    this.n().bn().clear()
}, ac: function () {
    this.m(null);
    this.l().clear()
}, ad: function (e, f, g, h) {
    switch (e) {
        case $.ig.FastItemsSourceEventAction.prototype.change:
        case $.ig.FastItemsSourceEventAction.prototype.replace:
        case $.ig.FastItemsSourceEventAction.prototype.insert:
        case $.ig.FastItemsSourceEventAction.prototype.remove:
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            this.ac();
            break
    }
}, ae: function (g, h, i, j, k) {
    var l = false;
    switch (h) {
        case $.ig.TrendLineManagerBase$1.prototype.b:
        case $.ig.TrendLineManagerBase$1.prototype.c:
            this.ac();
            l = true;
            break;
        case $.ig.TrendLineManagerBase$1.prototype.f:
            l = true;
            break;
        case $.ig.Series.prototype.be:
            l = true;
            this.ac();
            break
    }
    return l
}, $type: new $.ig.Type("TrendLineManagerBase$1", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("MarkerManagerBase", "Object", {_g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, init: function (f, g, h, i, j) {
    $.ig.Object.prototype.init.call(this);
    this.h(f);
    this.j(g);
    this.i(h);
    this.g(i);
    this.k(j)
}, y: function (f, g, h, i, j) {
}, z: function (c, d) {
}, aa: function (h, i) {
    var j = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    var k = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    var m = i.getEnumerator();
    while (m.moveNext()) {
        var l = m.current();
        if (h.item(l).d().count() > 0) {
            j.add(l)
        } else {
            k.add(l)
        }
    }
    var n = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    n.w(j);
    n.w(k);
    return n
}, ab: function (q, r, s, t) {
    var p = this;
    while (q > 0) {
        if (q < s.count()) {
            if (!this.l()) {
                s.shuffle$1($.ig.Number.prototype.$type)
            }
            s = this.aa(r, s);
            var u = q;
            for (var v = 0; v < u; v++) {
                var w = v;
                var x = r.item(s.__inner[w]);
                var y;
                var z = (function () {
                    var a = x.h(y);
                    y = a.wasPriority;
                    return a.ret
                }());
                t.add(z);
                q--;
                if (x.e()) {
                    r.remove(s.__inner[w])
                }
            }
        } else {
            var B = s.getEnumerator();
            while (B.moveNext()) {
                var A = B.current();
                var C = r.item(A);
                var D;
                var E = (function () {
                    var a = C.h(D);
                    D = a.wasPriority;
                    return a.ret
                }());
                t.add(E);
                q--;
                if (C.e()) {
                    r.remove(A)
                }
            }
            s = new $.ig.List$1($.ig.Number.prototype.$type, 1, r.keys())
        }
    }
}, ac: function (l, m, n, o) {
    var p = m.left();
    var q = m.right();
    var r = m.top();
    var s = m.bottom();
    if (!l.isEmpty() && !m.isEmpty()) {
        for (var t = 0; t < n.count(); ++t) {
            var u = n.item(t).__x;
            if (isNaN(u)) {
                continue
            }
            var v = n.item(t).__y;
            if (isNaN(v)) {
                continue
            }
            if (u < p || u > q) {
                continue
            }
            if (v < r || v > s) {
                continue
            }
            o.add(t)
        }
    }
}, ad: function (s, t, u, v) {
    var r = this;
    var w = new Array(v.count());
    var y = this.k()().getEnumerator();
    while (y.moveNext()) {
        var x = y.current();
        if (x != -1) {
            w[x] = true
        }
    }
    var z = Math.floor(s.width() / u);
    var A = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.MarkerManagerBucket.prototype.$type, 0);
    var C = t.getEnumerator();
    while (C.moveNext()) {
        var B = C.current();
        var D = v.item(B).__x;
        var E = v.item(B).__y;
        var F = Math.floor(E / u);
        var G = Math.floor(D / u);
        var H = (F * z) + G;
        var I;
        if (!(function () {
            var a = A.tryGetValue(H, I);
            I = a.value;
            return a.ret
        }())) {
            I = new $.ig.MarkerManagerBucket();
            A.add(H, I)
        }
        if (w[B]) {
            I.d().add(B)
        } else {
            I.c().add(B)
        }
    }
    return A
}, $type: new $.ig.Type("MarkerManagerBase", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("BubbleMarkerManager", "MarkerManagerBase", {_ah: null, ah: function (b) {
    if (arguments.length === 1) {
        this._ah = b;
        return b
    } else {
        return this._ah
    }
}, _ai: null, ai: function (b) {
    if (arguments.length === 1) {
        this._ai = b;
        return b
    } else {
        return this._ai
    }
}, _aj: null, aj: function (b) {
    if (arguments.length === 1) {
        this._aj = b;
        return b
    } else {
        return this._aj
    }
}, init: function (f, g, h, i, j) {
    $.ig.MarkerManagerBase.prototype.init.call(this, f, g, h, i, j);
    this.ai(new $.ig.List$1(Number, 0));
    this.aj(new $.ig.List$1($.ig.Marker.prototype.$type, 0))
}, y: function (r, s, t, u, v) {
    var w = this.g()();
    r.clear();
    this.ai().clear();
    this.aj().clear();
    var x = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    s = Math.max(0, s);
    var y = null;
    this.ac(t, u, w, x);
    if (s >= x.count()) {
        y = x
    } else {
        y = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        var z = Math.max(8, v);
        var A = this.ad(u, x, z, w);
        var B = new $.ig.List$1($.ig.Number.prototype.$type, 1, A.keys());
        if (this.l()) {
            B.r()
        }
        this.ab(s, A, B, y)
    }
    for (var C = 0; C < y.count(); ++C) {
        var D = w[y.__inner[C]].__x;
        var E = w[y.__inner[C]].__y;
        var F = this.ah().item(y.__inner[C]);
        this.ai().add(F);
        var G = this.h()(this.j()(y.__inner[C]));
        ($.ig.util.cast($.ig.DataContext.prototype.$type, G.a9())).item(this.j()(y.__inner[C]));
        var H = new $.ig.OwnedPoint();
        H.e(($.ig.util.cast($.ig.DataContext.prototype.$type, G.a9())).item());
        H.d({__x: D, __y: E, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        if (!r.containsKey(H.e())) {
            r.add(H.e(), H);
            this.aj().add(G)
        }
    }
}, z: function (e, f) {
    var d = this;
    var g = new $.ig.List$1($.ig.Object.prototype.$type, 1, e.keys());
    if (this.l()) {
        g.t(function (a, b) {
            var c = e.item(a);
            var j = e.item(b);
            var k = Math.pow(c.d().__x, 2) + Math.pow(c.d().__y, 2);
            var l = Math.pow(j.d().__x, 2) + Math.pow(j.d().__y, 2);
            return k.compareTo(l)
        })
    }
    var i = g.getEnumerator();
    while (i.moveNext()) {
        var h = i.current();
        var n = e.item(h);
        var o = this.h()(n.e());
        o.z(g.indexOf1(h));
        o.y(n.d().__x);
        o.x(n.d().__y)
    }
    this.i()(e)
}, $type: new $.ig.Type("BubbleMarkerManager", $.ig.MarkerManagerBase.prototype.$type)}, true);
$.ig.util.defType("ScatterBase", "MarkerSeries", {ed: function () {
    return new $.ig.ScatterBaseView(this)
}, ea: function (b) {
    $.ig.MarkerSeries.prototype.ea.call(this, b);
    this.jn(b)
}, _jn: null, jn: function (b) {
    if (arguments.length === 1) {
        this._jn = b;
        return b
    } else {
        return this._jn
    }
}, init: function () {
    $.ig.MarkerSeries.prototype.init.call(this);
    this.i2 = $.ig.Rect.prototype.empty();
    this.i1 = $.ig.Rect.prototype.empty()
}, _jo: null, jo: function (b) {
    if (arguments.length === 1) {
        this._jo = b;
        return b
    } else {
        return this._jo
    }
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.yAxisProperty)
    }
}, xMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.xMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.xMemberPathProperty)
    }
}, jp: function (c) {
    if (arguments.length === 1) {
        if (this.iz != c) {
            var d = this.jp();
            this.iz = c;
            this.ej($.ig.ScatterBase.prototype.it, d, this.jp())
        }
        return c
    } else {
        return this.iz
    }
}, iz: null, yMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.yMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.yMemberPathProperty)
    }
}, jq: function (c) {
    if (arguments.length === 1) {
        if (this.i0 != c) {
            var d = this.jq();
            this.i0 = c;
            this.ej($.ig.ScatterBase.prototype.iv, d, this.jq())
        }
        return c
    } else {
        return this.i0
    }
}, i0: null, trendLineType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineTypeProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineTypeProperty)
    }
}, trendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineBrushProperty)
    }
}, actualTrendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.actualTrendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.actualTrendLineBrushProperty)
    }
}, trendLineThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineThicknessProperty)
    }
}, trendLineDashCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineDashCapProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineDashCapProperty)
    }
}, trendLineDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineDashArrayProperty)
    }
}, trendLinePeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLinePeriodProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLinePeriodProperty)
    }
}, markerCollisionAvoidance: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.markerCollisionAvoidanceProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterBase.prototype.markerCollisionAvoidanceProperty)
    }
}, trendLineZIndex: function (a) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.trendLineZIndexProperty, a);
        return a
    } else {
        return this.b($.ig.ScatterBase.prototype.trendLineZIndexProperty)
    }
}, maximumMarkers: function (a) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.maximumMarkersProperty, a);
        return a
    } else {
        return this.b($.ig.ScatterBase.prototype.maximumMarkersProperty)
    }
}, fs: function () {
    $.ig.Series.prototype.fs.call(this);
    if (this.xAxis() != null) {
        this.xAxis().es(false)
    }
    if (this.yAxis() != null) {
        this.yAxis().es(false)
    }
}, errorBarSettings: function (a) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterBase.prototype.errorBarSettingsProperty, a);
        return a
    } else {
        return this.b($.ig.ScatterBase.prototype.errorBarSettingsProperty)
    }
}, e6: function (b, c, d, e) {
    var a = this;
    $.ig.MarkerSeries.prototype.e6.call(this, b, c, d, e);
    if (this.jn().dk().ae(b, c, d, e, this.trendLineDashArray())) {
        this.renderSeries(false);
        this.e5()
    }
    switch (c) {
        case $.ig.ScatterBase.prototype.be:
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d)).ac(this.jp());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, d)).ac(this.jq());
                this.jp(null);
                this.jq(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, e) != null) {
                this.jp(this.gs(this.xMemberPath()));
                this.jq(this.gs(this.yMemberPath()))
            }
            if ((this.yAxis() != null && !this.yAxis().updateRange()) || (this.xAxis() != null && !this.xAxis().updateRange())) {
                this.renderSeries(false)
            }
            break;
        case $.ig.ScatterBase.prototype.iq:
            if (d != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, d)).deregisterSeries(this)
            }
            if (e != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, e)).registerSeries(this)
            }
            if ((this.xAxis() != null && !this.xAxis().updateRange()) || (e == null && d != null)) {
                this.renderSeries(false)
            }
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.ir:
            if (d != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, d)).deregisterSeries(this)
            }
            if (e != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, e)).registerSeries(this)
            }
            if ((this.yAxis() != null && !this.yAxis().updateRange()) || (e == null && d != null)) {
                this.renderSeries(false)
            }
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.is:
            if (this.dx() != null) {
                this.dx().ac(this.jp());
                this.jp(this.gs(this.xMemberPath()))
            }
            break;
        case $.ig.ScatterBase.prototype.it:
            this.jn().dk().ac();
            if (this.xAxis() != null && !this.xAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.ScatterBase.prototype.iu:
            if (this.dx() != null) {
                this.dx().ac(this.jq());
                this.jq(this.gs(this.yMemberPath()))
            }
            break;
        case $.ig.ScatterBase.prototype.iv:
            this.jn().dk().ac();
            if (this.yAxis() != null && !this.yAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.ScatterBase.prototype.iw:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.ix:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.bo:
            this.i4.a(this.dz(), this.i3, this.i5);
            this.j1();
            try {
                if (this.ew(this.view())) {
                    return
                }
                if ((Math.round(this.dz() * 100000) / 100000) == 1) {
                    this.j7(this.i5, this.jn())
                } else {
                    this.j7(this.i4, this.jn())
                }
            } finally {
                this.j0()
            }
            break;
        case $.ig.ScatterBase.prototype.b6:
            this.fj();
            break;
        case $.ig.ScatterBase.prototype.iy:
            if (this.errorBarSettings() != null) {
                this.errorBarSettings().bl(this)
            }
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.ScatterBase.prototype.b4:
            this.e5();
            break
    }
}, j0: function () {
    this.i1 = $.ig.Rect.prototype.empty();
    this.i2 = $.ig.Rect.prototype.empty()
}, i1: null, i2: null, j1: function () {
    var a = this;
    (function () {
        var b = a.getViewInfo(a.i1, a.i2);
        a.i1 = b.viewportRect;
        a.i2 = b.windowRect;
        return b.ret
    }())
}, j2: function (a, b) {
    if (b != $.ig.FastItemsSourceEventAction.prototype.change) {
        return true
    }
    if (a == null) {
        return true
    }
    if (this.xMemberPath() == a || this.yMemberPath() == a) {
        return true
    }
    return false
}, fc: function (a, b, c, d) {
    var e = false;
    if (!this.j2(d, a)) {
        return
    }
    this.jn().dk().ad(a, b, c, d);
    if (this.xAxis() != null && !this.xAxis().updateRange()) {
        e = true
    }
    if (this.yAxis() != null && !this.yAxis().updateRange()) {
        e = true
    }
    if (e) {
        this.renderSeries(true)
    }
}, j3: function (a) {
    this.j4(a, null)
}, j4: function (j, k) {
    var a = this;
    var l = this.jp() != null ? this.jp().count() : 0;
    var b = this.jq() != null ? this.jq().count() : 0;
    var c = Math.min(l, b);
    if (c <= this.maximumMarkers()) {
        j.v().clear();
        var d = new $.ig.List$1($.ig.OwnedPoint.prototype.$type, 0);
        var f = j.a5().values().getEnumerator();
        while (f.moveNext()) {
            var e = f.current();
            d.add(e)
        }
        var g = this.dx();
        d.t(function (m, n) {
            var o = g.x(m.e());
            var p = g.x(n.e());
            if (o < p) {
                return -1
            }
            if (o > p) {
                return 1
            }
            return 0
        });
        if (k != null) {
            k.h(j.v())
        }
        var i = d.getEnumerator();
        while (i.moveNext()) {
            var h = i.current();
            if (g.x(h.e()) >= 0) {
                if (k != null) {
                    k.l(h.d())
                } else {
                    j.v().add({__x: h.d().__x, __y: h.d().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
                }
            }
        }
    }
}, em: function (a) {
    if (a != null && a == this.xAxis() && this.jp() != null) {
        return new $.ig.AxisRange(this.jp().minimum(), this.jp().maximum())
    }
    if (a != null && a == this.yAxis() && this.jq() != null) {
        return new $.ig.AxisRange(this.jq().minimum(), this.jq().maximum())
    }
    return null
}, eh: function (a) {
    return null
}, eg: function (a) {
    return -1
}, scrollIntoView: function (a) {
    var b = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var c = this.seriesViewer() != null ? this.seriesViewer().viewportRect() : $.ig.Rect.prototype.empty();
    var d = new $.ig.Rect(0, 0, 0, 1, 1);
    var e = new $.ig.ScalerParams(d, d, this.xAxis().isInverted());
    var f = new $.ig.ScalerParams(d, d, this.yAxis().isInverted());
    var g = !b.isEmpty() && !c.isEmpty() && this.dx() != null ? this.dx().x(a) : -1;
    var h = this.xAxis() != null && this.jp() != null && g < this.jp().count() ? this.xAxis().getScaledValue(this.jp().item(g), e) : NaN;
    var i = this.yAxis() != null && this.jq() != null && g < this.jq().count() ? this.yAxis().getScaledValue(this.jq().item(g), f) : NaN;
    if (!isNaN(h)) {
        if (h < b.left() + 0.1 * b.width()) {
            h = h + 0.4 * b.width();
            b.x(h - 0.5 * b.width())
        }
        if (h > b.right() - 0.1 * b.width()) {
            h = h - 0.4 * b.width();
            b.x(h - 0.5 * b.width())
        }
    }
    if (!isNaN(i)) {
        if (i < b.top() + 0.1 * b.height()) {
            i = i + 0.4 * b.height();
            b.y(i - 0.5 * b.height())
        }
        if (i > b.bottom() - 0.1 * b.height()) {
            i = i - 0.4 * b.height();
            b.y(i - 0.5 * b.height())
        }
    }
    if (this.syncLink() != null) {
        this.syncLink().bp(this.seriesViewer(), b)
    }
    return g >= 0
}, ez: function (a, b) {
    this.renderSeries(false)
}, ey: function (a, b) {
    this.renderSeries(false)
}, i3: null, i4: null, i5: null, j5: function (b, c, d, e) {
    var a = this;
    b.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 1, c));
    var f = this.dx();
    var g;
    var h;
    var i = (function () {
        var p = new $.ig.ScalerParams(d, e, a.jo().h());
        p.c = a.seriesViewer().effectiveViewport();
        return p
    }());
    var j = (function () {
        var p = new $.ig.ScalerParams(d, e, a.jo().i());
        p.c = a.seriesViewer().effectiveViewport();
        return p
    }());
    for (var k = 0; k < c; k++) {
        g = this.jp().item(k);
        h = this.jq().item(k);
        var l = {__x: this.jo().f().getScaledValue(g, i), __y: this.jo().g().getScaledValue(h, j), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        if (!Number.isInfinity(l.__x) && !Number.isInfinity(l.__y)) {
            var m = f.item(k);
            if (!b.u().containsKey(m)) {
                var n = {__x: g, __y: h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                var o = {__x: l.__x, __y: l.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                b.u().add(m, (function () {
                    var p = new $.ig.OwnedPoint();
                    p.e(m);
                    p.f(n);
                    p.d(o);
                    return p
                }()))
            }
        }
    }
}, j6: function (b, c) {
    var a = this;
    b.t().clear();
    b.w().clear();
    b.x().clear();
    b.y().clear();
    b.z().clear();
    b.aa().clear();
    var d = Math.min(this.jp() != null ? this.jp().count() : 0, this.jq() != null ? this.jq().count() : 0);
    var e = c.ac();
    var f = c.ab();
    var g = new $.ig.ScalerParams(e, f, this.xAxis().isInverted());
    g.c = this.seriesViewer().effectiveViewport();
    var h = new $.ig.ScalerParams(e, f, this.yAxis().isInverted());
    h.c = this.seriesViewer().effectiveViewport();
    if (d < 1) {
        return
    }
    this.jo((function () {
        var l = new $.ig.ScatterAxisInfoCache();
        l.f(a.xAxis());
        l.g(a.yAxis());
        l.h(a.xAxis().isInverted());
        l.i(a.yAxis().isInverted());
        l.j(a.dx());
        return l
    }()));
    if (d <= this.maximumMarkers()) {
        this.j5(b, d, e, f)
    }
    if (this.ie()) {
        c.de().y(b.t(), this.maximumMarkers(), e, f, this.resolution())
    }
    var i = (function () {
        var l = new $.ig.Clipper(0, f, false);
        l.h(b.w());
        return l
    }());
    var j = this.xAxis().getUnscaledValue(f.left(), g);
    var k = this.xAxis().getUnscaledValue(f.right(), g);
    c.dk().af(b.w(), this.trendLineType(), this.jp(), this.jq(), this.trendLinePeriod(), function (l) {
        return a.xAxis().getScaledValue(l, g)
    }, function (l) {
        return a.yAxis().getScaledValue(l, h)
    }, (function () {
        var l = new $.ig.TrendResolutionParams();
        l.m(a.resolution());
        l.k(f);
        l.l(e);
        return l
    }()), i, j, k);
    this.j8(b, c)
}, eu: function (a, b) {
    $.ig.Series.prototype.eu.call(this, a, b);
    var c = b;
    c.ee(a)
}, j7: function (b, c) {
    var a = this;
    var d = c.ab();
    this.jo((function () {
        var f = new $.ig.ScatterAxisInfoCache();
        f.f(a.xAxis());
        f.g(a.yAxis());
        f.h(a.xAxis().isInverted());
        f.i(a.yAxis().isInverted());
        return f
    }()));
    if (this.ie()) {
        c.de().z(b.t(), this.useLightweightMarkers())
    }
    c.c1();
    var e = (function () {
        var f = new $.ig.Clipper(1, NaN, d.bottom(), NaN, d.top(), false);
        f.h(c.dk().n().bn());
        return f
    }());
    c.dk().w(b.w(), e);
    this.j9(b, c)
}, j8: function (l, b) {
    var a = this;
    var c = new $.ig.ErrorBarsHelper(this, b);
    if (this.errorBarSettings() == null) {
        return
    }
    var d = this.errorBarSettings().a9();
    var e = this.errorBarSettings().bg();
    var f = 0;
    var g = 0;
    var h = 0;
    var i = 0;
    if (d != null && c.i(d)) {
        (function () {
            var D = c.j(d, f);
            f = D.position;
            return D.ret
        }());
        (function () {
            var D = c.k(d, a.jo().f(), h);
            h = D.errorBarSize;
            return D.ret
        }())
    }
    if (e != null && c.i(e)) {
        (function () {
            var D = c.j(e, g);
            g = D.position;
            return D.ret
        }());
        (function () {
            var D = c.k(e, a.jo().g(), i);
            i = D.errorBarSize;
            return D.ret
        }())
    }
    var k = l.t().keys().getEnumerator();
    while (k.moveNext()) {
        var j = k.current();
        var m = l.t().item(j);
        if (d != null) {
            if (d.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.percentage) {
                var n;
                var o, p;
                p = this.jo().f();
                if (this.errorBarSettings().a8() == $.ig.ErrorBarCalculatorReference.prototype.x) {
                    n = m.d().__x;
                    o = this.jo().f()
                } else {
                    n = m.d().__y;
                    o = this.jo().g()
                }
                (function () {
                    var D = c.m(n, d, o, p, h);
                    h = D.errorBarSize;
                    return D.ret
                }())
            } else {
                if (d.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.data) {
                    var q = d.getItemColumn();
                    var r = this.dx().x(j);
                    if (q != null && r < q.count()) {
                        var s = q.item(this.dx().x(j));
                        (function () {
                            var D = c.n(s, a.jo().f(), h);
                            h = D.errorBarSize;
                            return D.ret
                        }())
                    } else {
                        h = NaN
                    }
                }
            }
            var t = new $.ig.OwnedPoint();
            var u = c.q(d, this.jo().f(), m.d(), f);
            t.d(u);
            t.e(m.e());
            l.x().add(j, t);
            l.z().add(j, h)
        }
        if (e != null) {
            if (e.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.percentage) {
                var v;
                var w, x;
                x = this.jo().g();
                if (this.errorBarSettings().bf() == $.ig.ErrorBarCalculatorReference.prototype.x) {
                    v = m.d().__x;
                    w = this.jo().f()
                } else {
                    v = m.d().__y;
                    w = this.jo().g()
                }
                (function () {
                    var D = c.m(v, e, w, x, i);
                    i = D.errorBarSize;
                    return D.ret
                }())
            } else {
                if (e.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.data) {
                    var y = e.getItemColumn();
                    var z = this.dx().x(j);
                    if (y != null && z < y.count()) {
                        var A = y.item(this.dx().x(j));
                        (function () {
                            var D = c.n(A, a.jo().g(), i);
                            i = D.errorBarSize;
                            return D.ret
                        }())
                    } else {
                        i = NaN
                    }
                }
            }
            var B = new $.ig.OwnedPoint();
            var C = c.r(e, this.jo().g(), m.d(), g);
            B.d(C);
            B.e(m.e());
            l.y().add(j, B);
            l.aa().add(j, i)
        }
    }
}, j9: function (a, b) {
    if (!b.cc() || this.errorBarSettings() == null) {
        b.ed();
        return
    }
    this.ka(a, b);
    this.kb(a, b)
}, ka: function (c, d) {
    d.d6();
    var e = new $.ig.ErrorBarsHelper(this, d);
    var f = new $.ig.PathGeometry();
    var g = this.errorBarSettings().a9();
    var i = c.t().keys().getEnumerator();
    while (i.moveNext()) {
        var h = i.current();
        if (g != null && c.z().containsKey(h)) {
            var a = c.z().item(h);
            if (!isNaN(a)) {
                var b = c.x().item(h).d();
                if (this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.positive) {
                    e.p(f, b, a, true)
                }
                if (this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().a7() == $.ig.EnableErrorBars.prototype.negative) {
                    e.p(f, b, a, false)
                }
            }
        }
    }
    d.d7(f)
}, kb: function (a, b) {
    b.d8();
    var c = new $.ig.ErrorBarsHelper(this, b);
    var d = new $.ig.PathGeometry();
    var e = this.errorBarSettings().bg();
    var g = a.t().keys().getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        if (e != null && a.aa().containsKey(f)) {
            var h = a.aa().item(f);
            if (!isNaN(h)) {
                var i = a.y().item(f).d();
                if (this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.positive) {
                    c.o(d, i, h, true)
                }
                if (this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.both || this.errorBarSettings().be() == $.ig.EnableErrorBars.prototype.negative) {
                    c.o(d, i, h, false)
                }
            }
        }
    }
}, es: function (a, b, c) {
    var d = true;
    if (!$.ig.Series.prototype.es.call(this, a, b, c) || b.isEmpty() || a.isEmpty() || this.xAxis() == null || this.yAxis() == null || this.xAxis().seriesViewer() == null || this.yAxis().seriesViewer() == null || this.jp() == null || this.jq() == null || this.jp().count() == 0 || this.jq().count() == 0 || this.dx() == null || this.dx().g() != this.jp().count() || this.dx().g() != this.jq().count() || this.xAxis().seriesViewer() == null || this.yAxis().seriesViewer() == null || this.xAxis().actualMinimumValue() == this.xAxis().actualMaximumValue() || this.yAxis().actualMinimumValue() == this.yAxis().actualMaximumValue()) {
        d = false
    }
    return d
}, getViewInfo: function (a, b) {
    if (!this.i1.isEmpty() && !this.i2.isEmpty()) {
        a = this.i1;
        b = this.i2;
        return{viewportRect: a, windowRect: b}
    }
    a = this.view().ab();
    b = this.view().ac();
    return{viewportRect: a, windowRect: b}
}, eo: function (a) {
    this.j1();
    try {
        if (this.ew(this.view())) {
            return
        }
        if (this.dx() != null && this.dx().g() > this.maximumMarkers()) {
            a = false
        }
        if (this.gm(a)) {
            var b = this.i3;
            if (this.fo()) {
                this.i3 = this.i4;
                this.i4 = b
            } else {
                this.i3 = this.i5;
                this.i5 = b
            }
            this.j6(this.i5, this.jn());
            this.fp()
        } else {
            this.j6(this.i5, this.jn());
            this.j7(this.i5, this.jn())
        }
    } finally {
        this.j0()
    }
}, fj: function () {
    $.ig.MarkerSeries.prototype.fj.call(this);
    if (this.index() < 0) {
        return
    }
    this.jn().ea()
}, er: function (a, b) {
    $.ig.Series.prototype.er.call(this, a, b);
    if (!this.dv()) {
        this.view().b4(b);
        return
    }
    this.view().b4(b);
    if (this.ew(this.dt())) {
        return
    }
    var c = $.ig.util.cast($.ig.ScatterBaseView.prototype.$type, this.dt());
    var d = new $.ig.ScatterFrame();
    this.j6(d, c);
    this.j7(d, c);
    this.dv(false)
}, kc: function (a, b) {
    var c = new $.ig.List$1($.ig.Object.prototype.$type, 0);
    var e = b.i().getEnumerator();
    while (e.moveNext()) {
        var d = e.current();
        if (!a.containsKey(d)) {
            c.add1(d)
        }
    }
    var g = c.getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        b.u(f)
    }
}, kd: function (l, m, n, o) {
    var a = this;
    if (m == null || m.length != this.jo().j().g()) {
        m = new Array(this.jo().j().g());
        for (var p = 0; p < this.jo().j().g(); p++) {
            m[p] = new $.ig.Point(0)
        }
    }
    var b = (function () {
        var w = new $.ig.ScalerParams(n, o, a.xAxis().isInverted());
        w.c = a.seriesViewer().effectiveViewport();
        return w
    }());
    var c = (function () {
        var w = new $.ig.ScalerParams(n, o, a.yAxis().isInverted());
        w.c = a.seriesViewer().effectiveViewport();
        return w
    }());
    var d = this.jo().f().getUnscaledValue(o.left(), b);
    var e = this.jo().f().getUnscaledValue(o.right(), b);
    var f = this.jo().g().getUnscaledValue(o.bottom(), c);
    var g = this.jo().g().getUnscaledValue(o.top(), c);
    if (this.jo().h()) {
        var h = d;
        d = e;
        e = h
    }
    if (this.jo().i()) {
        var i = f;
        f = g;
        g = i
    }
    var j = this.jo();
    var k = j.f();
    var q = j.g();
    var r;
    var s;
    var t = this.jp();
    var u = this.jq();
    for (var v = 0; v < this.jo().j().g(); v++) {
        r = t.item(v);
        s = u.item(v);
        if (r >= d && r <= e && s >= f && s <= g) {
            m[v].__x = k.getScaledValue(r, b);
            m[v].__y = q.getScaledValue(s, c)
        } else {
            m[v].__x = NaN;
            m[v].__y = NaN
        }
    }
    return m
}, ke: function (a, b) {
    if (b == null || b.length != a.j()) {
        b = new Array(a.j())
    }
    var c = 0;
    var d = this.dx();
    var f = a.i().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        b[c] = d.x(e);
        c++
    }
    return b
}, $type: new $.ig.Type("ScatterBase", $.ig.MarkerSeries.prototype.$type, [$.ig.ISupportsErrorBars.prototype.$type])}, true);
$.ig.util.defType("BubbleSeries", "ScatterBase", {ed: function () {
    return new $.ig.BubbleSeriesView(this)
}, ea: function (b) {
    $.ig.ScatterBase.prototype.ea.call(this, b);
    this.le(b)
}, _le: null, le: function (b) {
    if (arguments.length === 1) {
        this._le = b;
        return b
    } else {
        return this._le
    }
}, init: function () {
    $.ig.ScatterBase.prototype.init.call(this);
    this.a3($.ig.BubbleSeries.prototype.$type);
    this.i3 = new $.ig.ScatterFrame();
    this.i4 = new $.ig.ScatterFrame();
    this.i5 = new $.ig.ScatterFrame()
}, _lf: null, lf: function (b) {
    if (arguments.length === 1) {
        this._lf = b;
        return b
    } else {
        return this._lf
    }
}, _lg: null, lg: function (b) {
    if (arguments.length === 1) {
        this._lg = b;
        return b
    } else {
        return this._lg
    }
}, lh: function () {
    return this.lj()
}, _li: null, li: function (b) {
    if (arguments.length === 1) {
        this._li = b;
        return b
    } else {
        return this._li
    }
}, radiusMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.radiusMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.radiusMemberPathProperty)
    }
}, lj: function (c) {
    if (arguments.length === 1) {
        if (this.k2 != c) {
            var d = this.lj();
            this.k2 = c;
            this.ej($.ig.BubbleSeries.prototype.kv, d, this.lj())
        }
        return c
    } else {
        return this.k2
    }
}, k2: null, radiusScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.radiusScaleProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.radiusScaleProperty)
    }
}, labelMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.labelMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.labelMemberPathProperty)
    }
}, k3: null, lk: function (c) {
    if (arguments.length === 1) {
        if (this.k3 != c) {
            var d = this.lk();
            this.k3 = c;
            this.ej($.ig.BubbleSeries.prototype.ky, d, this.lk())
        }
        return c
    } else {
        return this.k3
    }
}, fillMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.fillMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.fillMemberPathProperty)
    }
}, fillScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BubbleSeries.prototype.fillScaleProperty, b);
        return b
    } else {
        return this.b($.ig.BubbleSeries.prototype.fillScaleProperty)
    }
}, k4: null, ll: function (c) {
    if (arguments.length === 1) {
        if (this.k4 != c) {
            var d = this.ll();
            this.k4 = c;
            this.ej($.ig.BubbleSeries.prototype.k1, d, this.ll())
        }
        return c
    } else {
        return this.k4
    }
}, j5: function (o, p, q, r) {
    var n = this;
    if (p <= this.maximumMarkers()) {
        o.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 1, p))
    }
    var s = this.dx();
    var t;
    var u;
    var v = new $.ig.ScalerParams(q, r, this.jo().h());
    var w = new $.ig.ScalerParams(q, r, this.jo().i());
    for (var x = 0; x < p; x++) {
        t = this.jp().item(x);
        u = this.jq().item(x);
        var y = {__x: this.jo().f().getScaledValue(t, v), __y: this.jo().g().getScaledValue(u, w), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        if (!Number.isInfinity(y.__x) && !Number.isInfinity(y.__y)) {
            var z = s.item(x);
            if (p <= this.maximumMarkers()) {
                if (!o.u().containsKey(z)) {
                    var A = {__x: t, __y: u, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                    o.u().add(z, (function () {
                        var a = new $.ig.OwnedPoint();
                        a.e(z);
                        a.f(A);
                        a.d(y);
                        return a
                    }()))
                }
            }
        }
    }
}, j7: function (f, g) {
    var e = this;
    this.jo((function () {
        var a = new $.ig.ScatterAxisInfoCache();
        a.f(e.xAxis());
        a.g(e.yAxis());
        a.h(e.xAxis().isInverted());
        a.i(e.yAxis().isInverted());
        return a
    }()));
    var h = $.ig.util.cast($.ig.BubbleSeriesView.prototype.$type, g);
    h.de().z(f.t(), this.useLightweightMarkers());
    var i = (function () {
        var a = new $.ig.Clipper(1, NaN, g.ab().bottom(), NaN, g.ab().top(), false);
        a.h(g.dk().n().bn());
        return a
    }());
    g.dk().w(f.w(), i)
}, j6: function (n, o) {
    var m = this;
    n.t().clear();
    n.w().clear();
    var p = $.ig.util.cast($.ig.BubbleSeriesView.prototype.$type, o);
    var q = p.de();
    q.ah(this.lj());
    var r = Math.min(this.jp() != null ? this.jp().count() : 0, this.jq() != null ? this.jq().count() : 0);
    var s = o.ac();
    var t = o.ab();
    var u = new $.ig.ScalerParams(s, t, this.xAxis().isInverted());
    var v = new $.ig.ScalerParams(s, t, this.yAxis().isInverted());
    if (r < 1) {
        return
    }
    this.jo((function () {
        var a = new $.ig.ScatterAxisInfoCache();
        a.f(m.xAxis());
        a.g(m.yAxis());
        a.h(m.xAxis().isInverted());
        a.i(m.yAxis().isInverted());
        a.j(m.dx());
        return a
    }()));
    this.j5(n, r, s, t);
    p.de().y(n.t(), this.maximumMarkers(), s, t, this.resolution());
    p.em();
    p.en();
    this.l1();
    var w = (function () {
        var a = new $.ig.Clipper(0, t, false);
        a.h(n.w());
        return a
    }());
    var x = this.xAxis().getUnscaledValue(t.left(), u);
    var y = this.xAxis().getUnscaledValue(t.right(), u);
    p.dk().af(n.w(), this.trendLineType(), this.jp(), this.jq(), this.trendLinePeriod(), function (a) {
        return m.xAxis().getScaledValue(a, u)
    }, function (a) {
        return m.yAxis().getScaledValue(a, v)
    }, (function () {
        var a = new $.ig.TrendResolutionParams();
        a.m(m.resolution());
        a.k(t);
        a.l(s);
        return a
    }()), w, x, y)
}, l1: function () {
    if (this.seriesViewer() == null) {
        return
    }
    var c = $.ig.util.cast($.ig.ItemLegend.prototype.$type, this.actualLegend());
    if (c != null) {
        c.cl(this);
        this.l4();
        c.ck(this)
    }
    var d = $.ig.util.cast($.ig.ScaleLegend.prototype.$type, this.actualLegend());
    if (d != null) {
        d.dk();
        d.dn(this)
    }
}, l2: function (g, h, i, j, k) {
    if (k <= g || isNaN(k) || Number.isInfinity(k)) {
        return i
    }
    if (k >= h) {
        return j
    }
    var l = i + ((j - i) / (h - g)) * (k - g);
    return l
}, l3: function (j, k, l, m, n, o) {
    var p = Math.logBase(o, n);
    var q = Math.logBase(j, n);
    var r = Math.logBase(k, n);
    return $.ig.BubbleSeries.prototype.l2(q, r, l, m, p)
}, es: function (e, f, g) {
    var h = $.ig.ScatterBase.prototype.es.call(this, e, f, g);
    if (this.lj() == null || this.dx() == null || this.lj().count() == 0 || this.dx().g() != this.lj().count()) {
        h = false
    }
    return h
}, j2: function (c, d) {
    if (d != $.ig.FastItemsSourceEventAction.prototype.change) {
        return true
    }
    if (c == null) {
        return true
    }
    if (this.xMemberPath() == c || this.yMemberPath() == c || this.radiusMemberPath() == c) {
        return true
    }
    return false
}, l4: function () {
    var f = this;
    var g = $.ig.util.cast($.ig.ItemLegend.prototype.$type, this.actualLegend());
    if (g == null || this.dx() == null) {
        return
    }
    this.li(new $.ig.List$1($.ig.UIElement.prototype.$type, 0));
    for (var h = 0; h < this.dx().g(); h++) {
        var i = null;
        if ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, this.fillScale()) !== null && this.ll() != null) {
            i = (this.fillScale()).getBrushByIndex(h, this.ll())
        }
        if ($.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, this.fillScale()) !== null) {
            i = (this.fillScale()).getBrush(h, this.dx().g())
        }
        var j = new $.ig.ContentControl();
        var k = this.lk() != null && this.lk().item(h) != null ? this.lk().item(h).toString() : "";
        j.a9((function () {
            var a = new $.ig.DataContext();
            a.series(f);
            a.item(f.dx().item(h));
            a.itemBrush(i);
            a.itemLabel(k);
            return a
        }()));
        j.ba(this.discreteLegendItemTemplate());
        this.li().add(j)
    }
}, fc: function (e, f, g, h) {
    $.ig.ScatterBase.prototype.fc.call(this, e, f, g, h);
    this.l1()
}, e6: function (l, m, n, o) {
    var k = this;
    $.ig.ScatterBase.prototype.e6.call(this, l, m, n, o);
    switch (m) {
        case $.ig.BubbleSeries.prototype.be:
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).ac(this.lj());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).ac(this.ll());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).ac(this.lk());
                this.lj(null);
                this.ll(null);
                this.lk(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, o) != null) {
                this.lj(this.gs(this.radiusMemberPath()));
                if (!String.isNullOrEmpty(this.fillMemberPath())) {
                    this.ll(this.gs(this.fillMemberPath()))
                }
                this.lk(this.gu(this.labelMemberPath()))
            }
            this.renderSeries(false);
            this.l1();
            break;
        case $.ig.BubbleSeries.prototype.ku:
            if (this.dx() != null) {
                this.dx().ac(this.lj());
                this.lj(this.gs(this.radiusMemberPath()));
                this.l1()
            }
            break;
        case $.ig.BubbleSeries.prototype.kv:
            this.jn().dk().ac();
            this.renderSeries(false);
            this.e4();
            break;
        case $.ig.BubbleSeries.prototype.kw:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.BubbleSeries.prototype.k0:
            this.renderSeries(false);
            this.l1();
            this.e5();
            break;
        case $.ig.BubbleSeries.prototype.k1:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.BubbleSeries.prototype.kz:
            if (this.dx() != null) {
                this.dx().ac(this.ll());
                this.ll(this.gs(this.fillMemberPath()));
                this.l1()
            }
            break;
        case $.ig.BubbleSeries.prototype.kx:
            if (this.dx() != null) {
                this.dx().ac(this.lk());
                this.lk(this.gu(this.labelMemberPath()));
                this.l1()
            }
            break;
        case $.ig.BubbleSeries.prototype.bg:
            var p = $.ig.util.cast($.ig.ItemLegend.prototype.$type, n);
            if (p != null) {
                p.cl(this)
            }
            var q = $.ig.util.cast($.ig.ScaleLegend.prototype.$type, n);
            if (q != null) {
                var r = true;
                var s = null;
                if (this.seriesViewer() != null) {
                    var u = this.seriesViewer().series().getEnumerator();
                    while (u.moveNext()) {
                        var t = u.current();
                        if (t.legend() == q) {
                            s = t;
                            r = false
                        }
                    }
                }
                if (r) {
                    q.dk()
                } else {
                    q.dn(s)
                }
            }
            this.l1();
            break
    }
}, l5: function (q, r, s, t) {
    var u = this.lj().minimum();
    var v = this.lj().maximum();
    if (this.radiusScale() != null) {
        var w = this.radiusScale().minimumValue();
        var x = this.radiusScale().maximumValue();
        var y = this.radiusScale().logarithmBase();
        if (!this.radiusScale().p().contains(this)) {
            this.radiusScale().p().add(this)
        }
        if (this.radiusScale().isLogarithmic()) {
            for (var z = 0; z < r.count(); z++) {
                r.__inner[z] = $.ig.BubbleSeries.prototype.l3(u, v, w, x, y, r.__inner[z])
            }
        } else {
            for (var A = 0; A < r.count(); A++) {
                r.__inner[A] = $.ig.BubbleSeries.prototype.l2(u, v, w, x, r.__inner[A])
            }
        }
    }
    if (t) {
        var B = s.width();
        if (!this.view().ab().isEmpty()) {
            B = this.view().ab().width()
        } else {
            if (this.seriesViewer() != null && !this.seriesViewer().viewportRect().isEmpty()) {
                B = this.seriesViewer().viewportRect().width()
            }
        }
        var C = s.width() / B;
        for (var D = 0; D < r.count(); D++) {
            r.__inner[D] = r.__inner[D] * C
        }
    }
    for (var E = 0; E < q.count(); E++) {
        var F = q.__inner[E];
        F.v(Math.max(0, r.__inner[E]));
        F.w(Math.max(0, r.__inner[E]))
    }
}, l6: function (l) {
    if (this.fillScale() != null && !this.fillScale().i().contains(this)) {
        this.fillScale().i().add(this)
    }
    var m = $.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, this.fillScale());
    var n = $.ig.util.cast($.ig.ValueBrushScale.prototype.$type, this.fillScale());
    var o = this.fillScale() == null || this.fillScale().brushes() == null || this.fillScale().brushes().count() == 0 || (n != null && this.fillMemberPath() == null);
    if (o) {
        this.le().eo();
        var p = $.ig.util.cast($.ig.BubbleSeriesView.prototype.$type, this.dt());
        if (p != null) {
            p.eo()
        }
        return
    }
    var q = l.count();
    for (var r = 0; r < q; r++) {
        var s = l.__inner[r];
        var t = $.ig.util.cast($.ig.DataContext.prototype.$type, s.a9());
        if (t != null) {
            var u = null;
            var v = this.dx().x(t.item());
            if (m != null) {
                u = m.getBrush(v, this.dx().g())
            }
            if (n != null) {
                u = n.getBrushByIndex(v, this.ll())
            }
            t.itemBrush(u)
        }
    }
}, $type: new $.ig.Type("BubbleSeries", $.ig.ScatterBase.prototype.$type)}, true);
$.ig.util.defType("ScatterBaseView", "MarkerSeriesView", {_de: null, de: function (b) {
    if (arguments.length === 1) {
        this._de = b;
        return b
    } else {
        return this._de
    }
}, _df: null, df: function (b) {
    if (arguments.length === 1) {
        this._df = b;
        return b
    } else {
        return this._df
    }
}, _dg: null, dg: function (b) {
    if (arguments.length === 1) {
        this._dg = b;
        return b
    } else {
        return this._dg
    }
}, _dh: null, dh: function (b) {
    if (arguments.length === 1) {
        this._dh = b;
        return b
    } else {
        return this._dh
    }
}, init: function (b) {
    this.c5 = null;
    $.ig.MarkerSeriesView.prototype.init.call(this, b);
    this.dg(b);
    this.dl(new $.ig.HashPool$2($.ig.Object.prototype.$type, $.ig.Marker.prototype.$type));
    this.c2(this.dl());
    this.dk(new $.ig.ScatterTrendLineManager())
}, _di: null, di: function (b) {
    if (arguments.length === 1) {
        this._di = b;
        return b
    } else {
        return this._di
    }
}, _dj: null, dj: function (b) {
    if (arguments.length === 1) {
        this._dj = b;
        return b
    } else {
        return this._dj
    }
}, _dk: null, dk: function (b) {
    if (arguments.length === 1) {
        this._dk = b;
        return b
    } else {
        return this._dk
    }
}, ag: function () {
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    this.de(this.d2());
    this.di(new $.ig.Path());
    this.dj(new $.ig.Path());
    if (!this.ad()) {
        this.dg().maximumMarkers(2000)
    }
}, c5: null, d1: function (c) {
    if (this.c5 == null) {
        this.c5 = new $.ig.DataTemplateMeasureInfo();
        this.c5.context = this.z().c()
    }
    this.c5.width = c.v();
    this.c5.height = c.w();
    this.c5.data = c.a9();
    var d = c.ba();
    if (d.measure() != null) {
        d.measure()(this.c5)
    }
    return new $.ig.Size(this.c5.width, this.c5.height)
}, d2: function () {
    var a = this;
    var b = new $.ig.NumericMarkerManager(1, function (c) {
        return a.dl().item(c)
    }, function (c) {
        return a.dg().jo().j().item(c)
    }, this.d3.on(this), this.d4.on(this), this.d5.on(this), function () {
        return a.dg().markerCollisionAvoidance()
    });
    b.an(this.d1.on(this));
    return b
}, d3: function (b) {
    this.dg().kc(b, this.dl())
}, d4: function () {
    this.df(this.dg().kd(this.dl(), this.df(), this.ac(), this.ab()));
    return this.df()
}, d5: function () {
    this.dh(this.dg().ke(this.dl(), this.dh()));
    return this.dh()
}, d6: function () {
}, d7: function (b) {
}, d8: function () {
}, d9: function (b) {
}, ea: function () {
    if (this.dg().trendLineBrush() != null) {
        this.dg().actualTrendLineBrush(this.dg().trendLineBrush())
    } else {
        this.dg().actualTrendLineBrush(this.dg().actualBrush())
    }
}, _dl: null, dl: function (b) {
    if (arguments.length === 1) {
        this._dl = b;
        return b
    } else {
        return this._dl
    }
}, cp: function (b) {
    this.dl().w(b)
}, ed: function () {
}, a1: function (d, e) {
    if (d.b()) {
        if (this.dg().trendLineType() != $.ig.TrendLineType.prototype.none && !e) {
            var f = this.dk().n();
            f.a7(this.dg().trendLineThickness());
            f.__stroke = this.dg().actualTrendLineBrush();
            f.a8(this.dg().trendLineDashArray());
            f.a9(this.dg().trendLineDashCap());
            if (this.k && !e) {
                d.e($.ig.GradientDirection.prototype.bottomTop, this.ab())
            }
            d.k(f)
        }
    }
    $.ig.MarkerSeriesView.prototype.a1.call(this, d, e)
}, ee: function (b) {
    if (b) {
        this.ed();
        this.dl().clear()
    }
    this.dk().ab()
}, $type: new $.ig.Type("ScatterBaseView", $.ig.MarkerSeriesView.prototype.$type)}, true);
$.ig.util.defType("BubbleSeriesView", "ScatterBaseView", {_ej: null, ej: function (b) {
    if (arguments.length === 1) {
        this._ej = b;
        return b
    } else {
        return this._ej
    }
}, init: function (b) {
    $.ig.ScatterBaseView.prototype.init.call(this, b);
    this.ej(b);
    this.dk(new $.ig.ScatterTrendLineManager())
}, ag: function () {
    $.ig.ScatterBaseView.prototype.ag.call(this);
    if (!this.ad()) {
        this.cg().markerType($.ig.MarkerType.prototype.automatic)
    }
}, d2: function () {
    var a = this;
    return new $.ig.BubbleMarkerManager(function (b) {
        return a.dl().item(b)
    }, function (c) {
        return a.u().dx().item(c)
    }, this.d3.on(this), this.d4.on(this), this.d5.on(this))
}, em: function () {
    var b = this.de();
    this.ej().l5(b.aj(), b.ai(), this.ab(), this == this.u().dt());
    this.an()
}, en: function () {
    var b = this.de();
    this.ej().l6(b.aj())
}, eo: function () {
    var e = this.de();
    var g = e.aj().getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        var h = $.ig.util.cast($.ig.DataContext.prototype.$type, f.a9());
        if (h != null) {
            h.itemBrush(null)
        }
    }
}, $type: new $.ig.Type("BubbleSeriesView", $.ig.ScatterBaseView.prototype.$type)}, true);
$.ig.util.defType("CustomPaletteBrushScale", "BrushScale", {init: function () {
    $.ig.BrushScale.prototype.init.call(this)
}, brushSelectionMode: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CustomPaletteBrushScale.prototype.brushSelectionModeProperty, b);
        return b
    } else {
        return this.b($.ig.CustomPaletteBrushScale.prototype.brushSelectionModeProperty)
    }
}, getBrush: function (d, e) {
    if (this.brushes() == null || this.brushes().count() == 0) {
        return null
    }
    if (this.brushSelectionMode() == $.ig.BrushSelectionMode.prototype.select) {
        return $.ig.BrushScale.prototype.getBrush.call(this, d % this.brushes().count())
    }
    var f = $.ig.BubbleSeries.prototype.l2(0, e - 1, 0, this.brushes().count() - 1, d);
    return this.m(f)
}, $type: new $.ig.Type("CustomPaletteBrushScale", $.ig.BrushScale.prototype.$type)}, true);
$.ig.util.defType("SizeScale", "DependencyObject", {init: function () {
    var a = this;
    $.ig.DependencyObject.prototype.init.call(this);
    this.p(new $.ig.List$1($.ig.Series.prototype.$type, 0));
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, function (c, d) {
        return a.t(c, d.propertyName(), d.oldValue(), d.newValue())
    })
}, _p: null, p: function (b) {
    if (arguments.length === 1) {
        this._p = b;
        return b
    } else {
        return this._p
    }
}, minimumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SizeScale.prototype.minimumValueProperty, b);
        return b
    } else {
        return this.b($.ig.SizeScale.prototype.minimumValueProperty)
    }
}, maximumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SizeScale.prototype.maximumValueProperty, b);
        return b
    } else {
        return this.b($.ig.SizeScale.prototype.maximumValueProperty)
    }
}, isLogarithmic: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SizeScale.prototype.isLogarithmicProperty, b);
        return b
    } else {
        return this.b($.ig.SizeScale.prototype.isLogarithmicProperty)
    }
}, logarithmBase: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SizeScale.prototype.logarithmBaseProperty, b);
        return b
    } else {
        return this.b($.ig.SizeScale.prototype.logarithmBaseProperty)
    }
}, propertyChanged: null, propertyUpdated: null, s: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, t: function (g, h, i, j) {
    var l = this.p().getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        k.renderSeries(false);
        if (k.seriesViewer() != null) {
            k.e5()
        }
    }
}, $type: new $.ig.Type("SizeScale", $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("ValueBrushScale", "BrushScale", {init: function () {
    $.ig.BrushScale.prototype.init.call(this)
}, minimumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ValueBrushScale.prototype.minimumValueProperty, b);
        return b
    } else {
        return this.b($.ig.ValueBrushScale.prototype.minimumValueProperty)
    }
}, maximumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ValueBrushScale.prototype.maximumValueProperty, b);
        return b
    } else {
        return this.b($.ig.ValueBrushScale.prototype.maximumValueProperty)
    }
}, isLogarithmic: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ValueBrushScale.prototype.isLogarithmicProperty, b);
        return b
    } else {
        return this.b($.ig.ValueBrushScale.prototype.isLogarithmicProperty)
    }
}, logarithmBase: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ValueBrushScale.prototype.logarithmBaseProperty, b);
        return b
    } else {
        return this.b($.ig.ValueBrushScale.prototype.logarithmBaseProperty)
    }
}, getBrushByIndex: function (f, g) {
    if (g == null || this.brushes() == null || this.brushes().count() == 0 || f < 0 || f >= g.count()) {
        return null
    }
    if (g.count() == 0) {
        return this.brushes().item(0)
    }
    var h = isNaN(this.minimumValue()) || Number.isInfinity(this.minimumValue()) ? g.minimum() : this.minimumValue();
    var i = isNaN(this.maximumValue()) || Number.isInfinity(this.maximumValue()) ? g.maximum() : this.maximumValue();
    var j = g.item(f);
    if (h == i) {
        return j == h ? this.brushes().item(0) : null
    }
    return this.y(h, i, j)
}, getBrushByValue: function (e, f) {
    if (f == null || this.brushes() == null || this.brushes().count() == 0) {
        return null
    }
    if (f.count() <= 1) {
        return this.brushes().item(0)
    }
    var g = isNaN(this.minimumValue()) || Number.isInfinity(this.minimumValue()) ? f.minimum() : this.minimumValue();
    var h = isNaN(this.maximumValue()) || Number.isInfinity(this.maximumValue()) ? f.maximum() : this.maximumValue();
    if (e < g) {
        return null
    }
    if (e > h) {
        return null
    }
    return this.y(g, h, e)
}, y: function (g, h, i) {
    if (this.isLogarithmic() && this.logarithmBase() > 0) {
        var j = Math.logBase(g, this.logarithmBase());
        var k = Math.logBase(h, this.logarithmBase());
        var l = Math.logBase(i, this.logarithmBase());
        return this.z(j, k, l)
    }
    return this.z(g, h, i)
}, z: function (f, g, h) {
    if (h < f || h > g) {
        return null
    }
    var i = (h - f) / (g - f);
    var j = i * (this.brushes().count() - 1);
    return this.m(j)
}, $type: new $.ig.Type("ValueBrushScale", $.ig.BrushScale.prototype.$type)}, true);
$.ig.util.defType("ScaleLegend", "LegendBase", {bu: function () {
    return new $.ig.ScaleLegendView(this)
}, bv: function (b) {
    $.ig.LegendBase.prototype.bv.call(this, b);
    this.cq(b)
}, _cq: null, cq: function (b) {
    if (arguments.length === 1) {
        this._cq = b;
        return b
    } else {
        return this._cq
    }
}, legendScaleElement: function () {
    return this.cq().a2()
}, minText: function () {
    return this.cq().a3()
}, maxText: function () {
    return this.cq().a4()
}, init: function () {
    $.ig.LegendBase.prototype.init.call(this);
    this.a3($.ig.ScaleLegend.prototype.$type)
}, cr: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScaleLegend.prototype.ce, b);
        return b
    } else {
        return this.b($.ig.ScaleLegend.prototype.ce)
    }
}, cs: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScaleLegend.prototype.cf, b);
        return b
    } else {
        return this.b($.ig.ScaleLegend.prototype.cf)
    }
}, _ct: null, ct: function (b) {
    if (arguments.length === 1) {
        this._ct = b;
        return b
    } else {
        return this._ct
    }
}, _cu: null, cu: function (b) {
    if (arguments.length === 1) {
        this._cu = b;
        return b
    } else {
        return this._cu
    }
}, _cv: null, cv: function (b) {
    if (arguments.length === 1) {
        this._cv = b;
        return b
    } else {
        return this._cv
    }
}, _cw: null, cw: function (b) {
    if (arguments.length === 1) {
        this._cw = b;
        return b
    } else {
        return this._cw
    }
}, _cx: null, cx: function (b) {
    if (arguments.length === 1) {
        this._cx = b;
        return b
    } else {
        return this._cx
    }
}, _cy: null, cy: function (b) {
    if (arguments.length === 1) {
        this._cy = b;
        return b
    } else {
        return this._cy
    }
}, cg: null, cz: function (c) {
    if (arguments.length === 1) {
        var b = this;
        this.cg = c;
        this.d($.ig.ScaleLegend.prototype.ce, (function () {
            var a = new $.ig.Binding(1, "Visibility");
            a.d(b.cg);
            return a
        }()));
        this.d($.ig.ScaleLegend.prototype.cf, (function () {
            var a = new $.ig.Binding(1, $.ig.MarkerSeries.prototype.hs);
            a.d(b.cg);
            return a
        }()));
        return c
    } else {
        return this.cg
    }
}, dk: function () {
    this.cq().bi()
}, dl: function (d) {
    if (this.cz() == null) {
        return null
    }
    var e = $.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, this.cz().fillScale());
    if (e != null && this.cz().dx() != null) {
        return e.getBrush(d, this.cz().dx().g())
    }
    var f = $.ig.util.cast($.ig.ValueBrushScale.prototype.$type, this.cz().fillScale());
    if (f != null) {
        return f.getBrushByIndex(d, this.cx())
    }
    return null
}, dm: function (b) {
    if (b == null) {
        return this.cq().bj()
    }
    return $.ig.ColorUtil.prototype.n(b)
}, dn: function (c) {
    var d = $.ig.util.cast($.ig.BubbleSeries.prototype.$type, c);
    if (d == null || c.__visibility != $.ig.Visibility.prototype.visible) {
        return
    }
    this.cw(d.lh());
    this.cy(d.fillScale());
    this.cx(d.ll());
    this.cz(d);
    this.cv(new $.ig.ObservableCollection$1($.ig.Brush.prototype.$type, 0));
    this.dp()
}, dp: function () {
    if (this.legendScaleElement() == null || this.cw() == null || this.cw().count() == 0) {
        return
    }
    if (this.cz() == null || this.cz().actualLegend() != this) {
        return
    }
    var j = false;
    var k = $.ig.util.cast($.ig.Shape.prototype.$type, this.legendScaleElement());
    if (k != null) {
        var l = this.cq().bk();
        for (var m = 0; m < this.cw().count(); m++) {
            if (this.cy() == null || this.cy().brushes() == null || this.cy().brushes().count() == 0) {
                if (this.cz() != null) {
                    j = true
                }
                break
            }
            var n = NaN;
            if (this.cx() != null) {
                n = (this.cx().item(m) - this.cx().minimum()) / (this.cx().maximum() - this.cx().minimum())
            }
            var o = (this.cw().item(m) - this.cw().minimum()) / (this.cw().maximum() - this.cw().minimum());
            if (isNaN(n)) {
                n = 0
            }
            if (isNaN(o)) {
                o = n
            }
            var p = this.cz() != null ? this.dm(this.cz().actualMarkerBrush()) : this.cq().bj();
            var q = this.dl(m);
            var r = q != null ? this.dm(q) : p;
            this.cq().bl(l, r, o)
        }
        this.cq().bm(k, j, l)
    }
    if (this.minText() != null) {
        this.minText().a5((Math.round(this.cw().minimum() * 1000) / 1000).toString())
    }
    if (this.maxText() != null) {
        this.maxText().a5((Math.round(this.cw().maximum() * 1000) / 1000).toString())
    }
}, $type: new $.ig.Type("ScaleLegend", $.ig.LegendBase.prototype.$type)}, true);
$.ig.util.defType("ScaleLegendView", "LegendBaseView", {init: function (b) {
    this.ar = false;
    $.ig.LegendBaseView.prototype.init.call(this, b);
    this.a1(b);
    this.a3(new $.ig.TextBlock());
    this.a4(new $.ig.TextBlock());
    this.a2(new $.ig.Polygon())
}, _a1: null, a1: function (b) {
    if (arguments.length === 1) {
        this._a1 = b;
        return b
    } else {
        return this._a1
    }
}, _a2: null, a2: function (b) {
    if (arguments.length === 1) {
        this._a2 = b;
        return b
    } else {
        return this._a2
    }
}, _a3: null, a3: function (b) {
    if (arguments.length === 1) {
        this._a3 = b;
        return b
    } else {
        return this._a3
    }
}, _a4: null, a4: function (b) {
    if (arguments.length === 1) {
        this._a4 = b;
        return b
    } else {
        return this._a4
    }
}, bi: function () {
}, v: function () {
}, bj: function () {
    return $.ig.Color.prototype.s(0, 0, 0, 0)
}, bk: function () {
    return new $.ig.GradientData()
}, bl: function (f, g, h) {
    var e = this;
    var i = f;
    i.b().add((function () {
        var a = new $.ig.GradientStopData();
        a.d((function () {
            var b = new $.ig.Brush();
            b.color(g);
            return b
        }()));
        a.c(h);
        return a
    }()))
}, bm: function (d, e, f) {
    this.a5(f)
}, _a5: null, a5: function (b) {
    if (arguments.length === 1) {
        this._a5 = b;
        return b
    } else {
        return this._a5
    }
}, _a6: null, a6: function (b) {
    if (arguments.length === 1) {
        this._a6 = b;
        return b
    } else {
        return this._a6
    }
}, _a7: null, a7: function (b) {
    if (arguments.length === 1) {
        this._a7 = b;
        return b
    } else {
        return this._a7
    }
}, z: function (b) {
    $.ig.LegendBaseView.prototype.z.call(this, b);
    this.a6(this.h().ab(b));
    this.a7(this.h().ac());
    this.bt()
}, ar: null, bt: function () {
    if (!this.ar) {
        this.ar = true;
        window.setTimeout(this.bu.on(this), 0)
    }
}, bu: function () {
    if (this.ar) {
        this.ar = false;
        this.bv()
    }
}, bv: function () {
    if (this.a6() == null) {
        return
    }
    this.b2()
}, bw: function (c) {
    var d = $.ig.util.cast($.ig.TextBlock.prototype.$type, c);
    if (d != null && d.a5() != null) {
        return this.a6().y(d.a5()) + $.ig.ScaleLegendView.prototype.aq
    }
    return 0
}, bx: function (b) {
    return this.a8() + $.ig.ScaleLegendView.prototype.aq
}, _a8: null, a8: function (b) {
    if (arguments.length === 1) {
        this._a8 = b;
        return b
    } else {
        return this._a8
    }
}, _a9: null, a9: function (b) {
    if (arguments.length === 1) {
        this._a9 = b;
        return b
    } else {
        return this._a9
    }
}, b2: function () {
    if (this.a1().cz() == null || this.a1().cz().seriesViewer() == null || this.a5() == null) {
        return
    }
    if (this.a6().b()) {
        this.a6().x(this.a1().cz().seriesViewer().ir());
        this.a8(this.a1().cz().seriesViewer().fb().ax());
        this.a9(this.a1().cz().seriesViewer().iq());
        var p = this.bw(this.a3());
        var q = this.bw(this.a4());
        var r = Math.max(p, q) + 4;
        if (r >= this.a7().c()) {
            r = 0
        }
        var s = this.a7().c() - r;
        var t = 2;
        var u = 2;
        s = s - 4;
        var v = this.a7().d() - 4;
        var w = t + s + 4;
        var x = u;
        var y = v;
        var z = {__x: t + (3 / 5) * s, __y: u, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var A = {__x: t + (5 / 5) * s, __y: u, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var B = {__x: t + (5 / 5) * s, __y: v, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var C = {__x: t, __y: v, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var D = this.a2();
        D.bn().clear();
        D.bn().add(z);
        D.bn().add(A);
        D.bn().add(B);
        D.bn().add(C);
        this.a3().y(w);
        this.a3().x(x);
        this.a3().a6(this.a9());
        this.a4().y(w);
        this.a4().x(x + y - (this.bx(this.a3())));
        this.a4().a6(this.a9());
        this.a6().t(0, 0, this.a7().c(), this.a7().d());
        this.h().ad(this.a6(), D, this.a5(), new $.ig.Rect(0, u, t, s, v));
        if (r > 0) {
            this.a6().i(this.a3());
            this.a6().i(this.a4())
        }
    }
}, $type: new $.ig.Type("ScaleLegendView", $.ig.LegendBaseView.prototype.$type)}, true);
$.ig.util.defType("HighDensityScatterSeries", "Series", {init: function () {
    this.h3 = null;
    this.ia = 0;
    this.ib = 0;
    this.ic = false;
    this.il = 0;
    this.__itemIndexes = null;
    $.ig.Series.prototype.init.call(this);
    this.a3($.ig.HighDensityScatterSeries.prototype.$type)
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.yAxisProperty)
    }
}, xMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.xMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.xMemberPathProperty)
    }
}, iz: function (c) {
    if (arguments.length === 1) {
        if (this.h1 != c) {
            var d = this.iz();
            this.h1 = c;
            this.ej($.ig.HighDensityScatterSeries.prototype.hs, d, this.iz())
        }
        return c
    } else {
        return this.h1
    }
}, h1: null, yMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.yMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.yMemberPathProperty)
    }
}, i0: function (c) {
    if (arguments.length === 1) {
        if (this.h2 != c) {
            var d = this.i0();
            this.h2 = c;
            this.ej($.ig.HighDensityScatterSeries.prototype.hu, d, this.i0())
        }
        return c
    } else {
        return this.h2
    }
}, h2: null, useBruteForce: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.useBruteForceProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.useBruteForceProperty)
    }
}, progressiveLoad: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.progressiveLoadProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.progressiveLoadProperty)
    }
}, mouseOverEnabled: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.mouseOverEnabledProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.mouseOverEnabledProperty)
    }
}, useSquareCutoffStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.useSquareCutoffStyleProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.useSquareCutoffStyleProperty)
    }
}, heatMinimum: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.heatMinimumProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.heatMinimumProperty)
    }
}, heatMaximum: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.HighDensityScatterSeries.prototype.heatMaximumProperty, b);
        return b
    } else {
        return this.b($.ig.HighDensityScatterSeries.prototype.heatMaximumProperty)
    }
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.Series.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.HighDensityScatterSeries.prototype.be:
            if (this.h3 != null) {
                this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(this.h3.progressiveThunkCompleted, this.i9.on(this))
            }
            this.h3 = null;
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).ac(this.iz());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).ac(this.i0());
                this.iz(null);
                this.i0(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i) != null) {
                this.iz(this.gs(this.xMemberPath()));
                this.i0(this.gs(this.yMemberPath()))
            }
            if ((this.yAxis() != null && !this.yAxis().updateRange()) || (this.xAxis() != null && !this.xAxis().updateRange())) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hp:
            this.h6 = this.xAxis();
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            if ((this.xAxis() != null && !this.xAxis().updateRange()) || (i == null && h != null)) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hq:
            this.h7 = this.yAxis();
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            if ((this.yAxis() != null && !this.yAxis().updateRange()) || (i == null && h != null)) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hx:
            this.h8 = this.mouseOverEnabled();
            this.renderSeries(false);
            break;
        case $.ig.HighDensityScatterSeries.prototype.hr:
            if (this.dx() != null) {
                this.dx().ac(this.iz());
                this.iz(this.gs(this.xMemberPath()))
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hs:
            if (this.xAxis() != null && !this.xAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.ht:
            if (this.dx() != null) {
                this.dx().ac(this.i0());
                this.i0(this.gs(this.yMemberPath()))
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hu:
            if (this.yAxis() != null && !this.yAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.HighDensityScatterSeries.prototype.hv:
            if (this.h3 != null) {
                this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(this.h3.progressiveThunkCompleted, this.i9.on(this))
            }
            this.h3 = null;
            this.renderSeries(false);
            break;
        case $.ig.HighDensityScatterSeries.prototype.hz:
            this.renderSeries(false);
            break;
        case $.ig.HighDensityScatterSeries.prototype.h0:
            this.renderSeries(false);
            break;
        case $.ig.HighDensityScatterSeries.prototype.hy:
            this.renderSeries(false);
            break
    }
}, h3: null, h4: null, h5: null, h6: null, h7: null, h8: null, es: function (e, f, g) {
    var h = $.ig.Series.prototype.es.call(this, e, f, g);
    if (this.yAxis() == null || this.xAxis() == null || this.i0() == null || this.iz() == null || this.i0().count() < 1 || this.iz().count() < 1 || this.i0().count() != this.iz().count() || this.d6().isEmpty()) {
        h = false
    }
    return h
}, eo: function (g) {
    var f = this;
    $.ig.Series.prototype.eo.call(this, g);
    if (this.ev()) {
        return
    }
    if (this.h3 == null && !this.useBruteForce()) {
        var h = new Array(this.iz().count());
        for (var i = 0; i < this.iz().count(); i++) {
            h[i] = (function () {
                var a = new $.ig.PointData();
                a.a = f.iz().item(i);
                a.b = f.i0().item(i);
                a.c = i;
                return a
            }())
        }
        if (this.progressiveLoad()) {
            this.ib = 1;
            this.ia = Math.logBase(h.length, 2) + 3;
            if (this.progressiveLoadStatusChanged != null) {
                this.progressiveLoadStatusChanged(this, new $.ig.ProgressiveLoadStatusEventArgs(((this.ib / this.ia) * 100)))
            }
            this.h3 = $.ig.KDTree2D.prototype.n(h, 1);
            this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.combine(this.h3.progressiveThunkCompleted, this.i9.on(this));
            if (!this.h3.o()) {
                this.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(this.h3.progressiveThunkCompleted, this.i9.on(this))
            }
        } else {
            var j = $.ig.Date.prototype.now();
            this.h3 = new $.ig.KDTree2D(0, h, 1);
            var k = $.ig.Date.prototype.now()
        }
    }
    if (this.progressiveLoad() && !this.useBruteForce()) {
        this.i8()
    } else {
        this.i7()
    }
}, h9: null, ia: null, ib: null, ic: null, i6: function () {
    var d = this.ii * this.ij;
    if (this.h8) {
        if (this.__itemIndexes == null || this.__itemIndexes.length != d) {
            this.__itemIndexes = new Array(d);
            for (var e = 0; e < d; e++) {
                this.__itemIndexes[e] = 0
            }
        } else {
            for (var f = 0; f < d; f++) {
                this.__itemIndexes[f] = 0
            }
        }
    }
}, i7: function () {
    var d = this;
    var e;
    var f;
    (function () {
        var a = d.getViewInfo(f, e);
        f = a.viewportRect;
        e = a.windowRect;
        return a.ret
    }());
    this.h4 = new $.ig.ScalerParams(this.seriesViewer().actualWindowRect(), f, this.h6.isInverted());
    this.h4.c = this.seriesViewer().effectiveViewport();
    this.h5 = new $.ig.ScalerParams(this.seriesViewer().actualWindowRect(), f, this.h7.isInverted());
    this.h5.c = this.seriesViewer().effectiveViewport();
    this.ji();
    this.i6();
    this.h9 = Math.round(this.resolution());
    this.ic = this.useSquareCutoffStyle();
    this.ik = this.i1().cx();
    for (var g = 0; g < this.ik.length; g++) {
        this.ik[g] = 0
    }
    if (this.useBruteForce()) {
        this.ja()
    } else {
        this.jb()
    }
    this.i1().cy()
}, i8: function () {
    this.i7()
}, progressiveLoadStatusChanged: null, i9: function (d, e) {
    var c = this;
    this.i1().cz(function () {
        $.ig.Debug.prototype.b("thunk");
        if (c.ib < c.ia - 1) {
            c.ib++
        }
        if (c.progressiveLoadStatusChanged != null) {
            c.progressiveLoadStatusChanged(c, new $.ig.ProgressiveLoadStatusEventArgs(((c.ib / c.ia) * 100)))
        }
        c.i8();
        if (!c.h3.o()) {
            c.h3.progressiveThunkCompleted = $.ig.Delegate.prototype.remove(c.h3.progressiveThunkCompleted, c.i9.on(c));
            if (c.progressiveLoadStatusChanged != null) {
                c.progressiveLoadStatusChanged(c, new $.ig.ProgressiveLoadStatusEventArgs(100))
            }
        }
    })
}, ja: function () {
    var g = this.iz().asArray().clone();
    this.xAxis().getScaledValueList(g, 0, g.length, this.h4);
    var h = this.i0().asArray().clone();
    this.yAxis().getScaledValueList(h, 0, h.length, this.h5);
    for (var i = 0; i < g.length; i++) {
        var j = g[i];
        var k = h[i];
        j = Math.floor(j);
        k = Math.floor(k);
        if (j < 0 || j >= this.ii || k < 0 || k >= this.ij) {
            continue
        }
        var l = (k * 4 * this.ii) + j * 4;
        this.ik[l] = 0;
        this.ik[l + 1] = 0;
        this.ik[l + 2] = 0;
        this.ik[l + 3] = 255;
        this.il++;
        if (this.h8) {
            this.__itemIndexes[l] = i + 1
        }
    }
}, ie: null, jb: function () {
    var k = this;
    if (this.ie == null) {
        this.ie = new $.ig.List$1($.ig.KDTreeNode2D.prototype.$type, 2, Math.round(this.d6().width() * this.d6().height()))
    } else {
        this.ie.clear()
    }
    var l = this.xAxis().getUnscaledValue(this.d6().left(), this.h4);
    var m = this.xAxis().getUnscaledValue(this.d6().right(), this.h4);
    var n = this.yAxis().getUnscaledValue(this.d6().bottom(), this.h5);
    var o = this.yAxis().getUnscaledValue(this.d6().top(), this.h5);
    var p = Math.abs(this.xAxis().getUnscaledValue(this.d6().left() + this.resolution(), this.h4) - this.xAxis().getUnscaledValue(this.d6().left(), this.h4));
    var q = Math.abs(this.yAxis().getUnscaledValue(this.d6().top() + this.resolution(), this.h5) - this.yAxis().getUnscaledValue(this.d6().top(), this.h5));
    var r = Math.min(p, q);
    var s = (function () {
        var a = new $.ig.SearchArgs();
        a.a = l;
        a.c = m;
        a.b = n;
        a.d = o;
        a.e = p;
        a.f = q;
        a.g = $.ig.Number.prototype.MAX_VALUE;
        return a
    }());
    this.h3.y(this.ie, s, this.xAxis().actualMinimumValue(), this.xAxis().actualMaximumValue(), this.yAxis().actualMinimumValue(), this.yAxis().actualMaximumValue());
    $.ig.Debug.prototype.b("nodes returned: " + this.ie.count());
    var t;
    this.ig = this.heatMinimum();
    this.ih = this.heatMaximum();
    this.il = 0;
    for (var u = 0; u < this.ie.count(); u++) {
        t = this.ie.__inner[u];
        this.jc(t)
    }
    $.ig.Debug.prototype.b("rendered: " + this.il)
}, ig: null, ih: null, jc: function (g) {
    if (g.a) {
        return
    }
    var h = g.h != null && g.h.a;
    var i = g.g == null ? 0 : g.g.length;
    var j = (g.c - i);
    if (j > 0) {
        j = (j - this.ig) / (this.ih - this.ig);
        if (j < 0) {
            j = 0
        }
        if (j > 1) {
            j = 1
        }
    } else {
        j = 0
    }
    this.jd(g.d, j, h, g.c, g.h);
    if (i > 0 && !h) {
        var k;
        for (var l = 0; l < i; l++) {
            k = g.g[l];
            this.jd(k, 0, false, g.c, g.h)
        }
    }
    if (g.h != null) {
        g.h.a = false
    }
}, jd: function (A, D, E, F, G) {
    var H = this.jf(D);
    var I = A.c;
    if (E) {
        if (this.ic) {
            var J = this.h6.getScaledValue(A.a, this.h4);
            var K = this.h7.getScaledValue(A.b, this.h5);
            J = Math.floor(J);
            K = Math.floor(K);
            var L = $.ig.intDivide(this.h9, 2);
            var M = this.h9 - L;
            var N = this.h9 - M;
            var O = this.h9 * this.h9;
            var P = F / O;
            var Q = this.je(D, P);
            for (var R = J - N; R < J + M; R++) {
                for (var S = K - N; S < K + M; S++) {
                    this.jh(I, R, S, Q, D)
                }
            }
        } else {
            var T = this.h6.getScaledValue(G.b, this.h4);
            var U = this.h6.getScaledValue(G.c, this.h4);
            var V = this.h7.getScaledValue(G.d, this.h5);
            var W = this.h7.getScaledValue(G.e, this.h5);
            T = Math.floor(T);
            U = Math.floor(U);
            W = Math.floor(W);
            V = Math.floor(V);
            var X = (U - T + 1) * (V - W + 1);
            var Y = F / X;
            if (Y > 1) {
                Y = 1
            }
            if (Y < 0.2) {
                Y = 0.2
            }
            var Z = this.je(D, Y);
            for (var aa = T; aa <= U; aa++) {
                for (var ab = W; ab <= V; ab++) {
                    this.jh(I, aa, ab, Z, D)
                }
            }
        }
    } else {
        var B = this.h6.getScaledValue(A.a, this.h4);
        var C = this.h7.getScaledValue(A.b, this.h5);
        B = Math.floor(B);
        C = Math.floor(C);
        this.jh(I, B, C, H, D)
    }
}, je: function (c, d) {
    return(Math.floor(255 * d)) << 24 | Math.floor(c * d * 255) << 16 | 0 << 8 | 0
}, jf: function (b) {
    return 255 << 24 | Math.floor(b * 255) << 16 | 0 << 8 | 0
}, jg: function (b) {
    return(b >> 24 & 255) / 255
}, jh: function (h, i, j, k, l) {
    if (i < 0 || i >= this.ii || j < 0 || j >= this.ij) {
        return
    }
    var m = (j * 4 * this.ii) + i * 4;
    var n = this.ik[m];
    if (n <= l) {
        this.ik[m] = k >> 16 & 255;
        this.ik[m + 1] = k >> 8 & 255;
        this.ik[m + 2] = k & 255;
        this.ik[m + 3] = k >> 24 & 255
    }
    if (this.h8) {
        this.__itemIndexes[$.ig.intDivide(m, 4)] = h + 1
    }
    this.il++
}, ii: null, ij: null, ik: null, il: null, ji: function () {
    this.i1().cw()
}, ed: function () {
    return new $.ig.HighDensityScatterSeriesView(this)
}, ea: function (b) {
    $.ig.Series.prototype.ea.call(this, b);
    this.i1(b)
}, _i1: null, i1: function (b) {
    if (arguments.length === 1) {
        this._i1 = b;
        return b
    } else {
        return this._i1
    }
}, em: function (b) {
    if (b != null && b == this.xAxis() && this.iz() != null) {
        return new $.ig.AxisRange(this.iz().minimum(), this.iz().maximum())
    }
    if (b != null && b == this.yAxis() && this.i0() != null) {
        return new $.ig.AxisRange(this.i0().minimum(), this.i0().maximum())
    }
    return null
}, ez: function (c, d) {
    this.renderSeries(false)
}, ey: function (c, d) {
    this.renderSeries(false)
}, __itemIndexes: null, eh: function (i) {
    if (!this.h8 || this.__itemIndexes == null || this.__itemIndexes.length != (this.ii * this.ij)) {
        return null
    }
    var j = this.seriesViewer().windowRect();
    var k = (i.__x - j.left()) / j.width();
    var l = (i.__y - j.top()) / j.height();
    var m = Math.round((this.d6().width() * k));
    var n = Math.round((this.d6().height() * l));
    var o = (this.ii * n) + m;
    if (o < 0 || o > this.__itemIndexes.length - 1) {
        return null
    }
    var p = this.__itemIndexes[o] - 1;
    if (p < 0 || p > this.dx().g()) {
        return null
    }
    return this.dx().item(p)
}, scatterMouseOver: null, jl: function (d, e, f) {
    this.ik = d;
    this.ii = e;
    this.ij = f
}, d3: function () {
    return true
}, $type: new $.ig.Type("HighDensityScatterSeries", $.ig.Series.prototype.$type)}, true);
$.ig.util.defType("ProgressiveLoadStatusEventArgs", "EventArgs", {_currentStatus: null, currentStatus: function (b) {
    if (arguments.length === 1) {
        this._currentStatus = b;
        return b
    } else {
        return this._currentStatus
    }
}, init: function (b) {
    $.ig.EventArgs.prototype.init.call(this);
    this.currentStatus(b)
}, $type: new $.ig.Type("ProgressiveLoadStatusEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("HighDensityScatterSeriesView", "SeriesView", {init: function (b) {
    $.ig.SeriesView.prototype.init.call(this, b);
    this.ck(b)
}, ag: function () {
    $.ig.SeriesView.prototype.ag.call(this);
    if (!this.ad()) {
        this.u().resolution(4)
    }
}, _ck: null, ck: function (b) {
    if (arguments.length === 1) {
        this._ck = b;
        return b
    } else {
        return this._ck
    }
}, cd: null, ce: null, cf: null, _cl: null, cl: function (b) {
    if (arguments.length === 1) {
        this._cl = b;
        return b
    } else {
        return this._cl
    }
}, _cm: null, cm: function (b) {
    if (arguments.length === 1) {
        this._cm = b;
        return b
    } else {
        return this._cm
    }
}, _cn: null, cn: function (b) {
    if (arguments.length === 1) {
        this._cn = b;
        return b
    } else {
        return this._cn
    }
}, cw: function () {
    if (this.cl() == null) {
        this.cl($("<canvas></canvas>"));
        var g = (this.cl()[0]).getContext("2d");
        this.cn(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), g))
    }
    var h = this.u().seriesViewer().getContainerRect();
    var i = Math.round(h.left());
    var j = Math.round(h.top());
    var k = Math.round(h.width());
    var l = Math.round(h.height());
    this.ce = k;
    this.cf = l;
    this.cl().attr("width", k.toString());
    this.cl().attr("height", l.toString());
    this.cm((this.cn().c()).getImageData(0, 0, k, l));
    this.cd = this.cm().data;
    this.ck().jl(this.cd, this.ce, this.cf)
}, cx: function () {
    return this.cd
}, cy: function () {
    var e = Math.round(this.ab().left());
    var f = Math.round(this.ab().left());
    var g = Math.round(this.ab().width());
    var h = Math.round(this.ab().height());
    (this.cn().c()).putImageData(this.cm(), 0, 0);
    this.an()
}, cz: function (b) {
    window.setTimeout(b, 0)
}, a0: function (h, i) {
    $.ig.SeriesView.prototype.a0.call(this, h, i);
    if (i) {
        if (!this.ck().mouseOverEnabled()) {
            return
        }
        var j = new $.ig.Rectangle();
        j.y(this.ab().left());
        j.x(this.ab().top());
        j.v(this.ab().width());
        j.w(this.ab().height());
        j.__fill = this.az();
        h.f(j);
        return
    }
    if (this.cl() == null) {
        return
    }
    var k = Math.round(this.ab().left());
    var l = Math.round(this.ab().top());
    var m = Math.round(this.ab().width());
    var n = Math.round(this.ab().height());
    this.z().u(this.cl()[0], k, l, m, n, k, l, m, n)
}, $type: new $.ig.Type("HighDensityScatterSeriesView", $.ig.SeriesView.prototype.$type)}, true);
$.ig.util.defType("KDTree2D", "Object", {init: function (e, c, d) {
    if (e > 0) {
        switch (e) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    this.d = 0;
    this.e = {};
    this.g = new $.ig.Random();
    $.ig.Object.prototype.init.call(this);
    this.j(this.r(c, 0, c.length - 1, 0, d))
}, init1: function (a) {
    this.d = 0;
    this.e = {};
    this.g = new $.ig.Random();
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, i: function () {
    return this.e
}, progressiveThunkCompleted: null, n: function (e, f) {
    var d = this;
    var g = new $.ig.KDTree2D(1);
    g.j(new $.ig.KDTreeNode2D());
    g.j().a = true;
    g.a = e;
    g.b = new $.ig.Stack$1($.ig.KDTreeThunk.prototype.$type);
    g.c = new $.ig.List$1($.ig.KDTreeThunk.prototype.$type, 0);
    g.b.c((function () {
        var a = new $.ig.KDTreeThunk();
        a.a = 0;
        a.b = e.length - 1;
        a.c = 0;
        a.d = f;
        a.e = g.j();
        return a
    }()));
    return g
}, o: function () {
    if (this.b.b() == 0) {
        this.a = null;
        return false
    }
    this.d = this.b.d().c;
    while (this.b.b() > 0 && this.b.d().c == this.d) {
        this.c.add(this.b.e())
    }
    window.setTimeout(this.p.on(this), 0);
    return true
}, p: function () {
    var c;
    for (var d = 0; d < this.c.count(); d++) {
        c = this.c.__inner[d];
        this.q(c.e, this.a, c.a, c.b, c.c, c.d)
    }
    this.c.clear();
    if (this.progressiveThunkCompleted != null) {
        this.progressiveThunkCompleted(this, new $.ig.EventArgs())
    }
}, q: function (l, m, n, o, p, q) {
    var k = this;
    l.a = false;
    l.b = (p % 2) == 0;
    l.c = o - n;
    if (n == o) {
        l.d = m[n];
        return
    }
    if (n > o) {
        return
    }
    if (o - n + 1 <= q) {
        l.d = m[n];
        l.g = new Array(o - n + 1);
        var r = 0;
        for (var s = n; s <= o; s++) {
            l.g[r++] = m[s]
        }
        return
    }
    var t = Math.max($.ig.intDivide((o - n), 2), 1);
    var u = this.t(m, n, o, l.b, t);
    l.d = m[u];
    if (n <= u - 1) {
        l.e = (function () {
            var a = new $.ig.KDTreeNode2D();
            a.a = true;
            return a
        }());
        l.c = (u - 1) - n + 1;
        this.b.c((function () {
            var a = new $.ig.KDTreeThunk();
            a.a = n;
            a.b = u - 1;
            a.c = p + 1;
            a.d = q;
            a.e = l.e;
            return a
        }()))
    } else {
        l.e = null
    }
    if (u + 1 <= o) {
        l.f = (function () {
            var a = new $.ig.KDTreeNode2D();
            a.a = true;
            return a
        }());
        l.c = o - (u + 1) + 1;
        this.b.c((function () {
            var a = new $.ig.KDTreeThunk();
            a.a = u + 1;
            a.b = o;
            a.c = p + 1;
            a.d = q;
            a.e = l.f;
            return a
        }()))
    } else {
        l.f = null
    }
}, r: function (k, l, m, n, o) {
    var p = new $.ig.KDTreeNode2D();
    p.b = (n % 2) == 0;
    p.c = m - l;
    if (l == m) {
        p.d = k[l];
        return p
    }
    if (l > m) {
        return null
    }
    if (m - l + 1 <= o) {
        p.d = k[l];
        p.g = new Array(m - l + 1);
        var q = 0;
        for (var r = l; r <= m; r++) {
            p.g[q++] = k[r]
        }
        return p
    }
    var s = Math.max($.ig.intDivide((m - l), 2), 1);
    var t = this.t(k, l, m, p.b, s);
    p.d = k[t];
    p.e = this.r(k, l, t - 1, n + 1, o);
    p.f = this.r(k, t + 1, m, n + 1, o);
    return p
}, s: function (k, l, m, n, o) {
    var p = l ? k[o].a : k[o].b;
    var q = k[o];
    k[o] = k[n];
    k[n] = q;
    var r = m;
    for (var s = m; s < n; s++) {
        var t;
        if (l) {
            t = k[s].a
        } else {
            t = k[s].b
        }
        if (t <= p) {
            q = k[r];
            k[r] = k[s];
            k[s] = q;
            r++
        }
    }
    q = k[n];
    k[n] = k[r];
    k[r] = q;
    return r
}, g: null, t: function (i, j, k, l, m) {
    if (j == k) {
        return j
    }
    var n = this.g.c(j, k);
    var o = this.s(i, l, j, k, n);
    var p = o - j + 1;
    if (p == m) {
        return o
    } else {
        if (m < p) {
            return this.t(i, j, o - 1, l, m)
        } else {
            return this.t(i, o + 1, k, l, m - p)
        }
    }
}, u: function (e, f, g, h) {
    this.v(e, f, g, h, this.j())
}, v: function (g, h, i, j, k) {
    if (k == null || k.a) {
        return
    }
    if (k.e == null && k.f == null) {
        this.w(g, h, i, k, k.d, true, 0, j);
        if (g.d) {
            return
        }
        if (k.g != null && k.g.length > 0) {
            for (var l = 0; l < k.g.length; l++) {
                this.w(g, h, i, k, k.g[l], false, l, j);
                if (g.d) {
                    return
                }
            }
        }
        return
    }
    this.w(g, h, i, k, k.d, true, 0, j);
    if (g.d) {
        return
    }
    if (k.b) {
        if (h <= k.d.a) {
            this.v(g, h, i, j, k.e);
            if (g.d) {
                return
            }
            if (this.x(h, i, k.d.a, i) < g.f) {
                this.v(g, h, i, j, k.f)
            }
            if (g.d) {
                return
            }
        } else {
            this.v(g, h, i, j, k.f);
            if (g.d) {
                return
            }
            if (this.x(h, i, k.d.a, i) < g.f) {
                this.v(g, h, i, j, k.e)
            }
            if (g.d) {
                return
            }
        }
    } else {
        if (i <= k.d.b) {
            this.v(g, h, i, j, k.e);
            if (g.d) {
                return
            }
            if (this.x(h, i, h, k.d.b) < g.f) {
                this.v(g, h, i, j, k.f)
            }
            if (g.d) {
                return
            }
        } else {
            this.v(g, h, i, j, k.f);
            if (g.d) {
                return
            }
            if (this.x(h, i, h, k.d.b) < g.f) {
                this.v(g, h, i, j, k.e)
            }
            if (g.d) {
                return
            }
        }
    }
}, w: function (p, q, r, s, t, u, v, w) {
    var o = this;
    if (p.d) {
        return
    }
    if (p.a > p.b) {
        p.d = true;
        return
    }
    if (p.c.count() < w) {
        if (isNaN(p.e)) {
            p.e = this.x(q, r, t.a, t.b);
            p.f = p.e;
            p.g = 0
        }
        p.c.add((function () {
            var a = new $.ig.KNearestResult();
            a.b = u;
            a.a = v;
            a.e = s;
            a.c = t.a;
            a.d = t.b;
            return a
        }()));
        p.a++;
        var x = this.x(q, r, t.a, t.b);
        if (x < p.e) {
            p.e = x
        }
        if (x > p.f) {
            p.f = x;
            p.g = p.c.count() - 1
        }
        return
    }
    var y = 0;
    if (y < p.f) {
        if (y < p.e) {
            p.e = y
        }
        p.c.__inner[p.g] = (function () {
            var a = new $.ig.KNearestResult();
            a.b = u;
            a.a = v;
            a.e = s;
            a.c = t.a;
            a.d = t.b;
            return a
        }());
        var z = 0;
        var A = 0;
        for (var B = 0; B < p.c.count(); B++) {
            var C = this.x(q, r, p.c.__inner[B].c, p.c.__inner[B].d);
            if (C > z) {
                z = C;
                A = B
            }
        }
        p.a++
    }
}, x: function (e, f, g, h) {
    return(e - g) * (e - g) + (f - h) * (f - h)
}, y: function (g, h, i, j, k, l) {
    this.z(g, this.j(), h, i, j, k, l, false, 0)
}, z: function (s, t, u, v, w, x, y, z, A) {
    if (t == null) {
        return
    }
    if (A > u.g || ((y - x) < u.f && (w - v) < u.e)) {
        if (t.h == null) {
            t.h = new $.ig.SearchData()
        }
        var B = t.h;
        B.a = true;
        B.b = v;
        B.c = w;
        B.d = x;
        B.e = y;
        s.add(t);
        return
    }
    if (t.e == null && t.f == null) {
        s.add(t);
        return
    }
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    if (t.b) {
        C = v;
        D = t.d.a;
        E = x;
        F = y;
        G = t.d.a;
        H = w;
        I = x;
        J = y
    } else {
        C = v;
        D = w;
        E = x;
        F = t.d.b;
        G = v;
        H = w;
        I = t.d.b;
        J = y
    }
    if (z) {
        s.add(t);
        this.z(s, t.e, u, C, D, E, F, true, A + 1);
        this.z(s, t.f, u, G, H, I, J, true, A + 1)
    } else {
        if (C >= u.a && D <= u.c && E >= u.b && F <= u.d) {
            this.z(s, t.e, u, C, D, E, F, true, A + 1)
        } else {
            if (!(u.a > D || u.c < C || u.b > F || u.d < E)) {
                s.add(t);
                this.z(s, t.e, u, C, D, E, F, false, A + 1)
            }
        }
        if (G >= u.a && H <= u.c && I >= u.b && J <= u.d) {
            this.z(s, t.f, u, G, H, I, J, true, A + 1)
        } else {
            if (!(u.a > H || u.c < G || u.b > J || u.d < I)) {
                s.add(t);
                this.z(s, t.f, u, G, H, I, J, false, A + 1)
            }
        }
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, $type: new $.ig.Type("KDTree2D", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("KNearestResults", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, f: null, g: null, $type: new $.ig.Type("KNearestResults", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("KNearestResult", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, $type: new $.ig.Type("KNearestResult", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("KDTreeThunk", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, $type: new $.ig.Type("KDTreeThunk", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SearchArgs", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, f: null, g: null, $type: new $.ig.Type("SearchArgs", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("KDTreeNode2D", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null, $type: new $.ig.Type("KDTreeNode2D", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SearchData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, $type: new $.ig.Type("SearchData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PointData", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, $type: new $.ig.Type("PointData", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("NumericMarkerManager", "MarkerManagerBase", {init: function (k, f, g, h, i, j) {
    if (k > 0) {
        switch (k) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.NumericMarkerManager.prototype.init1.call(this, 1, f, g, h, i, j, function () {
        return $.ig.CollisionAvoidanceType.prototype.none
    })
}, init1: function (n, h, i, j, k, l, m) {
    var g = this;
    $.ig.MarkerManagerBase.prototype.init.call(this, h, i, j, k, l);
    this.ak(false);
    this.al(function (a) {
        return{__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    });
    this.am(m)
}, _ak: null, ak: function (b) {
    if (arguments.length === 1) {
        this._ak = b;
        return b
    } else {
        return this._ak
    }
}, _al: null, al: function (b) {
    if (arguments.length === 1) {
        this._al = b;
        return b
    } else {
        return this._al
    }
}, _am: null, am: function (b) {
    if (arguments.length === 1) {
        this._am = b;
        return b
    } else {
        return this._am
    }
}, _an: null, an: function (b) {
    if (arguments.length === 1) {
        this._an = b;
        return b
    } else {
        return this._an
    }
}, y: function (l, m, n, o, p) {
    var q = this.g()();
    l.clear();
    var r = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    m = Math.max(0, m);
    var s = null;
    this.ac(n, o, q, r);
    if (m >= r.count()) {
        s = r
    } else {
        s = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        var t = Math.max(8, p);
        var u = this.ad(o, r, t, q);
        var v = new $.ig.List$1($.ig.Number.prototype.$type, 1, u.keys());
        if (this.l()) {
            v.r()
        }
        this.ab(m, u, v, s)
    }
    this.aw(l, q, s)
}, aw: function (j, k, l) {
    for (var m = 0; m < l.count(); ++m) {
        var n = l.__inner[m];
        var o = k[n];
        var p = this.j()(n);
        var q = this.h()(p);
        if (q.a9() != null) {
            ($.ig.util.cast($.ig.DataContext.prototype.$type, q.a9())).item(p)
        }
        var r = new $.ig.OwnedPoint();
        if (this.ak()) {
            r.f(this.al()(n))
        }
        r.e(p);
        r.d({__x: o.__x, __y: o.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        if (!j.containsKey(p)) {
            j.add(p, r)
        }
    }
}, z: function (f, g) {
    var e = this;
    var h = f.keys();
    if (this.l()) {
        var i = new $.ig.List$1($.ig.Object.prototype.$type, 1, f.keys());
        i.t(function (a, b) {
            var c = f.item(a);
            var d = f.item(b);
            var k = Math.pow(c.d().__x, 2) + Math.pow(c.d().__y, 2);
            var l = Math.pow(d.d().__x, 2) + Math.pow(d.d().__y, 2);
            return k.compareTo(l)
        });
        h = i
    }
    var j = null;
    var q = null;
    switch (this.am()()) {
        case $.ig.CollisionAvoidanceType.prototype.none:
            break;
        case $.ig.CollisionAvoidanceType.prototype.omit:
            j = (function () {
                var a = new $.ig.SmartPlacer();
                a.f(0.3);
                a.g(0);
                return a
            }());
            q = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
            q.i(true);
            break;
        case $.ig.CollisionAvoidanceType.prototype.fade:
            j = (function () {
                var a = new $.ig.SmartPlacer();
                a.f(0.6);
                a.g(2);
                return a
            }());
            q = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
            q.i(true);
            break;
        case $.ig.CollisionAvoidanceType.prototype.omitAndShift:
            j = (function () {
                var a = new $.ig.SmartPlacer();
                a.f(0.3);
                a.g(0);
                return a
            }());
            q = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
            break;
        case $.ig.CollisionAvoidanceType.prototype.fadeAndShift:
            j = (function () {
                var a = new $.ig.SmartPlacer();
                a.f(0.6);
                a.g(2);
                return a
            }());
            q = new $.ig.SmartPlaceableWrapper$1($.ig.Marker.prototype.$type);
            break
    }
    var s = h.getEnumerator();
    while (s.moveNext()) {
        var r = s.current();
        var t = f.item(r);
        var u = this.h()(t.e());
        if (j != null && q != null) {
            q.j(u);
            q.m(this.an()(u));
            q.l(t.d());
            j.n(q);
            if (q.opacity() == 0) {
                q.smartPosition(q.smartPosition())
            }
            t.d(q.k())
        } else {
            u.__opacity = 1;
            u.__visibility = $.ig.Visibility.prototype.visible
        }
        this.ax(u, t, g)
    }
    this.i()(f)
}, ax: function (d, e, f) {
    d.y(e.d().__x);
    d.x(e.d().__y)
}, $type: new $.ig.Type("NumericMarkerManager", $.ig.MarkerManagerBase.prototype.$type)}, true);
$.ig.util.defType("MarkerManagerBucket", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, c: function () {
    if (this.a == null) {
        this.a = new $.ig.List$1($.ig.Number.prototype.$type, 0)
    }
    return this.a
}, b: null, d: function () {
    if (this.b == null) {
        this.b = new $.ig.List$1($.ig.Number.prototype.$type, 0)
    }
    return this.b
}, h: function (d) {
    if (this.d().count() > 0) {
        var e = this.d().__inner[this.d().count() - 1];
        this.d().removeAt(this.d().count() - 1);
        d = true;
        return{ret: e, wasPriority: d}
    }
    var f = this.c().__inner[this.c().count() - 1];
    this.c().removeAt(this.c().count() - 1);
    d = false;
    return{ret: f, wasPriority: d};
    return{wasPriority: d}
}, e: function () {
    return this.c().count() == 0 && this.d().count() == 0
}, $type: new $.ig.Type("MarkerManagerBucket", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DefaultFlattener", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, b: function (l, m, n, o, p, q) {
    var r = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    var s = o;
    var t = p;
    var u = t - s + 1;
    while (u > 0) {
        if (u <= $.ig.DefaultFlattener.prototype.a) {
            $.ig.Flattener.prototype.d(r, m, n, s, t, q);
            s = t + 1
        } else {
            var v = s + $.ig.DefaultFlattener.prototype.a - 1;
            $.ig.Flattener.prototype.d(r, m, n, s, v, q);
            s = v + 1
        }
        u = t - s + 1
    }
    return r
}, c: function (k, l, m, n, o) {
    var p = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    var q = m;
    var r = n;
    var s = r - q + 1;
    while (s > 0) {
        if (s <= $.ig.DefaultFlattener.prototype.a) {
            $.ig.Flattener.prototype.g(p, k, l, q, r, o);
            q = r + 1
        } else {
            var t = q + $.ig.DefaultFlattener.prototype.a - 1;
            $.ig.Flattener.prototype.g(p, k, l, q, t, o);
            q = t + 1
        }
        s = r - q + 1
    }
    return p
}, flatten: function (e, g) {
    var c = this;
    var h = function (a) {
        return c.g(e, a)
    };
    var i = function (a) {
        return c.h(e, a)
    };
    return this.e(e, g, h, i)
}, d: function (e, f, g, h) {
    return this.f(e, f, g, h)
}, e: function (g, h, i, j) {
    var k = this.b(new $.ig.List$1($.ig.Number.prototype.$type, 0), i, j, 0, g.count() - 1, h);
    var l = new $.ig.RearrangedList$1($.ig.Point.prototype.$type, g, k);
    return l
}, f: function (h, i, j, k) {
    var l = this.c(h, i, 0, j - 1, k);
    var m = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    for (var n = 0; n < l.count(); n++) {
        m.add({__x: h[l.__inner[n]], __y: i[l.__inner[n]], $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
    return m
}, g: function (c, d) {
    return c.item(d).__x
}, h: function (c, d) {
    return c.item(d).__y
}, $type: new $.ig.Type("DefaultFlattener", $.ig.Object.prototype.$type, [$.ig.IFlattener.prototype.$type])}, true);
$.ig.util.defType("TrendFitCalculator", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (p, q, r, s, t, u, v, w, x, y, z) {
    if (s == null) {
        switch (q) {
            case $.ig.TrendLineType.prototype.linearFit:
                s = $.ig.LeastSquaresFit.prototype.j(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.quadraticFit:
                s = $.ig.LeastSquaresFit.prototype.v(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.cubicFit:
                s = $.ig.LeastSquaresFit.prototype.y(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.quarticFit:
                s = $.ig.LeastSquaresFit.prototype.ab(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.quinticFit:
                s = $.ig.LeastSquaresFit.prototype.ae(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.exponentialFit:
                s = $.ig.LeastSquaresFit.prototype.p(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.logarithmicFit:
                s = $.ig.LeastSquaresFit.prototype.m(t, u, v);
                break;
            case $.ig.TrendLineType.prototype.powerLawFit:
                s = $.ig.LeastSquaresFit.prototype.s(t, u, v);
                break;
            default:
                throw new $.ig.NotImplementedException()
        }
    }
    if (s == null) {
        return null
    }
    for (var A = 0; A < r.k().width(); A += 2) {
        var B = A / (r.k().width() - 1);
        var C = y + B * (z - y);
        var D = NaN;
        switch (q) {
            case $.ig.TrendLineType.prototype.linearFit:
                D = $.ig.LeastSquaresFit.prototype.k(s, C);
                break;
            case $.ig.TrendLineType.prototype.quadraticFit:
                D = $.ig.LeastSquaresFit.prototype.w(s, C);
                break;
            case $.ig.TrendLineType.prototype.cubicFit:
                D = $.ig.LeastSquaresFit.prototype.z(s, C);
                break;
            case $.ig.TrendLineType.prototype.quarticFit:
                D = $.ig.LeastSquaresFit.prototype.ac(s, C);
                break;
            case $.ig.TrendLineType.prototype.quinticFit:
                D = $.ig.LeastSquaresFit.prototype.af(s, C);
                break;
            case $.ig.TrendLineType.prototype.exponentialFit:
                D = $.ig.LeastSquaresFit.prototype.q(s, C);
                break;
            case $.ig.TrendLineType.prototype.logarithmicFit:
                D = $.ig.LeastSquaresFit.prototype.n(s, C);
                break;
            case $.ig.TrendLineType.prototype.powerLawFit:
                D = $.ig.LeastSquaresFit.prototype.t(s, C);
                break;
            default:
                throw new $.ig.NotImplementedException()
        }
        C = w(C);
        D = x(D);
        if (!isNaN(D) && !Number.isInfinity(D)) {
            p.add({__x: C + r.n(), __y: D, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
    return s
}, $type: new $.ig.Type("TrendFitCalculator", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TrendAverageCalculator", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (e, f, g) {
    var h;
    switch (e) {
        case $.ig.TrendLineType.prototype.simpleAverage:
        case $.ig.TrendLineType.prototype.exponentialAverage:
        case $.ig.TrendLineType.prototype.modifiedAverage:
        case $.ig.TrendLineType.prototype.weightedAverage:
            if (g < 1) {
                g = 1
            }
            break
    }
    switch (e) {
        case $.ig.TrendLineType.prototype.simpleAverage:
            h = $.ig.Series.prototype.sMA(f, g);
            break;
        case $.ig.TrendLineType.prototype.exponentialAverage:
            h = $.ig.Series.prototype.eMA(f, g);
            break;
        case $.ig.TrendLineType.prototype.modifiedAverage:
            h = $.ig.Series.prototype.mMA(f, g);
            break;
        case $.ig.TrendLineType.prototype.cumulativeAverage:
            h = $.ig.Series.prototype.cMA(f);
            break;
        case $.ig.TrendLineType.prototype.weightedAverage:
            h = $.ig.Series.prototype.wMA(f, g);
            break;
        default:
            throw new $.ig.NotImplementedException()
    }
    return h
}, b: function (h, i, j, k) {
    if (i.count() == 0) {
        var l = $.ig.TrendAverageCalculator.prototype.a(h, j, k);
        var n = l.getEnumerator();
        while (n.moveNext()) {
            var m = n.current();
            i.add(m)
        }
    }
}, c: function (h, i, j, k, l) {
    if (i.count() == 0) {
        var m = $.ig.TrendAverageCalculator.prototype.a(h, j, l).getEnumerator();
        var n = $.ig.TrendAverageCalculator.prototype.a(h, k, l).getEnumerator();
        while (m.moveNext() && n.moveNext()) {
            i.add({__x: m.current(), __y: n.current(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, $type: new $.ig.Type("TrendAverageCalculator", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ScatterTrendLineManager", "TrendLineManagerBase$1", {init: function () {
    $.ig.TrendLineManagerBase$1.prototype.init.call(this, $.ig.Point.prototype.$type)
}, af: function (q, v, w, x, y, z, A, B, C, D, E) {
    var p = this;
    var F = D;
    var G = E;
    var H = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    var I = 0;
    if (w != null) {
        I = w.count()
    }
    if (x != null) {
        I = Math.min(I, x.count())
    }
    if (!B.l().isEmpty() && !B.k().isEmpty()) {
        if (v == $.ig.TrendLineType.prototype.none) {
            this.m(null);
            this.l().clear()
        } else {
            if (this.u(v)) {
                this.l().clear();
                this.m($.ig.TrendFitCalculator.prototype.a(H, v, B, this.m(), I, function (a) {
                    return w.item(a)
                }, function (a) {
                    return x.item(a)
                }, z, A, F, G))
            } else {
                if (this.v(v)) {
                    this.m(null);
                    this.l().clear();
                    $.ig.TrendAverageCalculator.prototype.c(v, this.l(), w, x, y);
                    var K = this.l().getEnumerator();
                    while (K.moveNext()) {
                        var J = K.current();
                        var L = z(J.__x);
                        var M = A(J.__y);
                        if (!isNaN(L) && !isNaN(M)) {
                            H.add({__x: L, __y: M, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
                        }
                    }
                }
            }
        }
        this.y(H, B, q, C)
    }
}, $type: new $.ig.Type("ScatterTrendLineManager", $.ig.TrendLineManagerBase$1.prototype.$type.specialize($.ig.Point.prototype.$type))}, true);
$.ig.util.defType("ErrorBarSettingsBase", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this);
    this.j(new $.ig.Style())
}, j: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ErrorBarSettingsBase.prototype.f, b);
        return b
    } else {
        return this.b($.ig.ErrorBarSettingsBase.prototype.f)
    }
}, propertyChanged: null, propertyUpdated: null, o: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, $type: new $.ig.Type("ErrorBarSettingsBase", $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("ErrorBarsHelper", "Object", {init: function (c, d) {
    $.ig.Object.prototype.init.call(this);
    this.c(c);
    this.d(d)
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, i: function (c) {
    var d = c.getCalculatorType();
    if (d == $.ig.ErrorBarCalculatorType.prototype.percentage || d == $.ig.ErrorBarCalculatorType.prototype.data) {
        return false
    } else {
        return true
    }
}, j: function (c, d) {
    if (c.hasConstantPosition()) {
        d = c.getPosition()
    }
    return{position: d}
}, k: function (j, k, l) {
    var i = this;
    var m;
    var n;
    (function () {
        var a = i.d().getViewInfo(n, m);
        n = a.viewportRect;
        m = a.windowRect;
        return a.ret
    }());
    var o = new $.ig.ScalerParams(m, n, k.isInverted());
    var p = k.getScaledValue(k.referenceValue(), o);
    var q = j.getIndependentValue();
    l = Math.abs(Math.round(p - k.getScaledValue(q, o)));
    return{errorBarSize: l}
}, l: function (l, m, n, o) {
    var k = this;
    var p;
    var q;
    (function () {
        var a = k.d().getViewInfo(q, p);
        q = a.viewportRect;
        p = a.windowRect;
        return a.ret
    }());
    var r = new $.ig.ScalerParams(p, q, n.isInverted());
    var s = n.getUnscaledValue(l, r);
    var t = m.getDependentValue(s);
    var u = n.getScaledValue(n.referenceValue(), r);
    o = Math.abs(Math.round(u - n.getScaledValue(t, r)));
    return{errorBarSize: o}
}, m: function (n, o, p, q, r) {
    var m = this;
    var s;
    var t;
    (function () {
        var a = m.d().getViewInfo(t, s);
        t = a.viewportRect;
        s = a.windowRect;
        return a.ret
    }());
    var u = new $.ig.ScalerParams(s, t, p.isInverted());
    var v = new $.ig.ScalerParams(s, t, q.isInverted());
    var w = p.getUnscaledValue(n, u);
    var x = o.getDependentValue(w);
    var y = q.getScaledValue(q.referenceValue(), v);
    r = Math.abs(Math.round(y - q.getScaledValue(x, v)));
    return{errorBarSize: r}
}, n: function (i, j, k) {
    var h = this;
    var l;
    var m;
    (function () {
        var a = h.d().getViewInfo(m, l);
        m = a.viewportRect;
        l = a.windowRect;
        return a.ret
    }());
    var n = new $.ig.ScalerParams(l, m, j.isInverted());
    var o = j.getScaledValue(j.referenceValue(), n);
    k = Math.abs(Math.round(o - j.getScaledValue(i, n)));
    return{errorBarSize: k}
}, o: function (e, f, g, h) {
}, p: function (e, f, g, h) {
}, q: function (j, k, l, m) {
    var i = this;
    var n = new $.ig.Point(0);
    if (j.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.standardDeviation) {
        var o;
        var p;
        (function () {
            var a = i.d().getViewInfo(p, o);
            p = a.viewportRect;
            o = a.windowRect;
            return a.ret
        }());
        var q = new $.ig.ScalerParams(o, p, k.isInverted());
        n.__x = Math.round(k.getScaledValue(m, q));
        n.__y = Math.round(l.__y)
    } else {
        n.__x = Math.round(l.__x);
        n.__y = Math.round(l.__y)
    }
    return n
}, r: function (j, k, l, m) {
    var i = this;
    var n = new $.ig.Point(0);
    if (j.getCalculatorType() == $.ig.ErrorBarCalculatorType.prototype.standardDeviation) {
        var o;
        var p;
        (function () {
            var a = i.d().getViewInfo(p, o);
            p = a.viewportRect;
            o = a.windowRect;
            return a.ret
        }());
        var q = new $.ig.ScalerParams(o, p, k.isInverted());
        n.__x = Math.round(l.__x);
        n.__y = Math.round(k.getScaledValue(m, q))
    } else {
        n.__x = Math.round(l.__x);
        n.__y = Math.round(l.__y)
    }
    return n
}, $type: new $.ig.Type("ErrorBarsHelper", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ScatterErrorBarSettings", "ErrorBarSettingsBase", {init: function () {
    $.ig.ErrorBarSettingsBase.prototype.init.call(this);
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, this.cg.on(this))
}, a7: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ae, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ae)
    }
}, a8: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.af, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.af)
    }
}, a9: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ag, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ag)
    }
}, ba: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ah, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ah)
    }
}, bb: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ai, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ai)
    }
}, bc: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.aj, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.aj)
    }
}, bd: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ak, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ak)
    }
}, be: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.al, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.al)
    }
}, bf: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.am, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.am)
    }
}, bg: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.an, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.an)
    }
}, bh: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ao, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ao)
    }
}, bi: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ap, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ap)
    }
}, bj: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.aq, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.aq)
    }
}, bk: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterErrorBarSettings.prototype.ar, b);
        return b
    } else {
        return this.b($.ig.ScatterErrorBarSettings.prototype.ar)
    }
}, as: null, bl: function (b) {
    if (arguments.length === 1) {
        this.as = b;
        return b
    } else {
        return this.as
    }
}, cg: function (f, g) {
    var e = this;
    switch (g.propertyName()) {
        case $.ig.ScatterErrorBarSettings.prototype.s:
        case $.ig.ScatterErrorBarSettings.prototype.z:
            var h = $.ig.util.cast($.ig.IErrorBarCalculator.prototype.$type, g.oldValue());
            if (h != null) {
                h.changed = $.ig.Delegate.prototype.remove(h.changed, this.ch.on(this))
            }
            if (this.bl() != null) {
                this.bl().renderSeries(false);
                if (this.bl().seriesViewer() != null) {
                    this.bl().e5()
                }
            }
            var i = $.ig.util.cast($.ig.IErrorBarCalculator.prototype.$type, g.newValue());
            if (i != null) {
                i.changed = $.ig.Delegate.prototype.combine(i.changed, this.ch.on(this))
            }
            break;
        case $.ig.ScatterErrorBarSettings.prototype.q:
        case $.ig.ScatterErrorBarSettings.prototype.x:
        case $.ig.ScatterErrorBarSettings.prototype.r:
        case $.ig.ScatterErrorBarSettings.prototype.t:
        case $.ig.ScatterErrorBarSettings.prototype.w:
        case $.ig.ScatterErrorBarSettings.prototype.u:
        case $.ig.ScatterErrorBarSettings.prototype.v:
        case $.ig.ScatterErrorBarSettings.prototype.y:
        case $.ig.ScatterErrorBarSettings.prototype.aa:
        case $.ig.ScatterErrorBarSettings.prototype.ad:
        case $.ig.ScatterErrorBarSettings.prototype.ab:
        case $.ig.ScatterErrorBarSettings.prototype.ac:
            if (this.bl() != null) {
                this.bl().renderSeries(false);
                if (this.bl().seriesViewer() != null) {
                    this.bl().e5()
                }
            }
            break
    }
}, ch: function (d, e) {
    var f = $.ig.util.cast($.ig.IErrorBarCalculator.prototype.$type, d);
    if (f != null) {
        f.changed = $.ig.Delegate.prototype.remove(f.changed, this.ch.on(this));
        if (this.bl() != null) {
            this.bl().renderSeries(false)
        }
        f.changed = $.ig.Delegate.prototype.combine(f.changed, this.ch.on(this))
    }
}, $type: new $.ig.Type("ScatterErrorBarSettings", $.ig.ErrorBarSettingsBase.prototype.$type)}, true);
$.ig.util.defType("ScatterFrameBase$1", "Frame", {$t: null, init: function (b) {
    var a = this;
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Frame.prototype.init.call(this);
    this.v(new $.ig.List$1($.ig.Point.prototype.$type, 0));
    this.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
    this.t(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
    this.w(new $.ig.List$1($.ig.Point.prototype.$type, 0));
    this.x(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
    this.y(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0));
    this.z(new $.ig.Dictionary$2($.ig.Object.prototype.$type, Number, 0));
    this.aa(new $.ig.Dictionary$2($.ig.Object.prototype.$type, Number, 0));
    this.s(function (d, e, f) {
        return d
    });
    this.r(new $.ig.DictInterpolator$3($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, this.$t, this.ai.on(this), function (c) {
        return c.e()
    }, function (c) {
        return !isNaN(c.d().__x) && !isNaN(c.d().__y)
    }, function () {
        return new $.ig.OwnedPoint()
    }))
}, _r: null, r: function (b) {
    if (arguments.length === 1) {
        this._r = b;
        return b
    } else {
        return this._r
    }
}, a: function (f, g, h) {
    var i = g;
    var j = h;
    if (i == null || j == null) {
        return
    }
    this.r().q(this.u(), f, i.u(), j.u(), i, j);
    $.ig.ScatterFrameBase$1.prototype.b(this.v(), f, i.v(), j.v());
    this.r().q(this.t(), f, i.t(), j.t(), i, j);
    this.r().q(this.x(), f, i.x(), j.x(), i, j);
    this.r().q(this.y(), f, i.y(), j.y(), i, j);
    this.ae(this.t(), f, i, j);
    $.ig.ScatterFrameBase$1.prototype.b(this.w(), f, i.w(), j.w());
    this.z(j.z());
    this.aa(j.aa());
    this.ad(f, i, j)
}, ad: function (d, e, f) {
}, ae: function (j, k, l, m) {
    var e = this;
    var o = l.u().values().where$1($.ig.OwnedPoint.prototype.$type,function (a) {
        return !j.containsKey(a.e())
    }).getEnumerator();
    while (o.moveNext()) {
        var n = o.current();
        var p;
        if (!(function () {
            var a = m.u().tryGetValue(n.e(), p);
            p = a.value;
            return a.ret
        }()) || (p.f().__x == n.f().__x && p.f().__y == n.f().__y)) {
            continue
        }
        var q = new $.ig.OwnedPoint();
        this.ai(q, k, n, p, l, m);
        if (isNaN(q.d().__x) || isNaN(q.d().__y)) {
            continue
        }
        j.add(q.e(), q)
    }
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, ah: function (e, f, g, h) {
    if (g != null) {
        e.f({__x: g.f().__x, __y: g.f().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    } else {
        if (h != null) {
            e.f({__x: h.f().__x, __y: h.f().__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, ai: function (l, m, n, o, p, q) {
    var k = this;
    var r;
    var s;
    if (n == null) {
        if (o != null) {
            var t;
            if ((function () {
                var a = p.u().tryGetValue(o.e(), t);
                t = a.value;
                return a.ret
            }())) {
                r = t
            } else {
                r = this.s()(o, p, q)
            }
        } else {
            l.d({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return
        }
    } else {
        r = n;
        if (l.e() == null) {
            l.e(n.e())
        }
    }
    if (o == null) {
        if (n != null) {
            var u;
            if ((function () {
                var a = q.u().tryGetValue(n.e(), u);
                u = a.value;
                return a.ret
            }())) {
                s = u
            } else {
                l.d({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                return
            }
        } else {
            l.d({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return
        }
    } else {
        s = o;
        if (l.e() == null) {
            l.e(o.e())
        }
    }
    this.ah(l, m, r, s);
    if (isNaN(r.d().__x) || isNaN(r.d().__y)) {
        r = s
    }
    this.aj(l, m, r, s)
}, aj: function (f, g, h, i) {
    var j = 1 - g;
    f.d({__x: h.d().__x * j + i.d().__x * g, __y: h.d().__y * j + i.d().__y * g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, _t: null, t: function (b) {
    if (arguments.length === 1) {
        this._t = b;
        return b
    } else {
        return this._t
    }
}, _u: null, u: function (b) {
    if (arguments.length === 1) {
        this._u = b;
        return b
    } else {
        return this._u
    }
}, _v: null, v: function (b) {
    if (arguments.length === 1) {
        this._v = b;
        return b
    } else {
        return this._v
    }
}, _w: null, w: function (b) {
    if (arguments.length === 1) {
        this._w = b;
        return b
    } else {
        return this._w
    }
}, _x: null, x: function (b) {
    if (arguments.length === 1) {
        this._x = b;
        return b
    } else {
        return this._x
    }
}, _y: null, y: function (b) {
    if (arguments.length === 1) {
        this._y = b;
        return b
    } else {
        return this._y
    }
}, _z: null, z: function (b) {
    if (arguments.length === 1) {
        this._z = b;
        return b
    } else {
        return this._z
    }
}, _aa: null, aa: function (b) {
    if (arguments.length === 1) {
        this._aa = b;
        return b
    } else {
        return this._aa
    }
}, $type: new $.ig.Type("ScatterFrameBase$1", $.ig.Frame.prototype.$type)}, true);
$.ig.util.defType("ScatterAxisInfoCache", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, $type: new $.ig.Type("ScatterAxisInfoCache", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("DictInterpolator$3", "Object", {$tKey: null, $tValue: null, $tFrame: null, init: function (f, g, e, h, i, j, k) {
    this.$tKey = f;
    this.$tValue = g;
    this.$tFrame = e;
    this.$type = this.$type.specialize(this.$tKey, this.$tValue, this.$tFrame);
    $.ig.Object.prototype.init.call(this);
    this.e(h);
    this.f(i);
    this.g(j);
    this.h(k)
}, _e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, q: function (B, F, G, H, I, J) {
    var A = this;
    var K = new $.ig.List$1(this.$tKey, 0);
    var M = B.keys().getEnumerator();
    while (M.moveNext()) {
        var L = M.current();
        var N;
        var O;
        var P = B.item(L);
        var Q = (function () {
            var a = G.tryGetValue(L, N);
            N = a.value;
            return a.ret
        }());
        var R = (function () {
            var a = H.tryGetValue(L, O);
            O = a.value;
            return a.ret
        }());
        if (!Q && !R) {
            K.add(L)
        } else {
            this.e()(P, F, N, O, I, J);
            if (!this.g()(P)) {
                K.add(L)
            }
        }
    }
    var T = K.getEnumerator();
    while (T.moveNext()) {
        var S = T.current();
        B.remove(S)
    }
    var V = G.keys().getEnumerator();
    while (V.moveNext()) {
        var U = V.current();
        var W = G.item(U);
        var X;
        var Y;
        (function () {
            var a = H.tryGetValue(U, X);
            X = a.value;
            return a.ret
        }());
        var Z = (function () {
            var a = B.tryGetValue(U, Y);
            Y = a.value;
            return a.ret
        }());
        if (!Z) {
            Y = this.h()();
            this.e()(Y, F, W, X, I, J);
            if (!this.g()(Y)) {
                continue
            }
            B.add(this.f()(Y), Y)
        }
    }
    var ab = H.keys().getEnumerator();
    while (ab.moveNext()) {
        var aa = ab.current();
        var ac = H.item(aa);
        var ad;
        var C;
        var D = (function () {
            var a = G.tryGetValue(aa, ad);
            ad = a.value;
            return a.ret
        }());
        var E = (function () {
            var a = B.tryGetValue(aa, C);
            C = a.value;
            return a.ret
        }());
        if (!E && !D) {
            C = this.h()();
            this.e()(C, F, ad, ac, I, J);
            if (!this.g()(C)) {
                continue
            }
            B.add(this.f()(C), C)
        }
    }
}, $type: new $.ig.Type("DictInterpolator$3", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("OwnedPoint", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.f({__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, _e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, $type: new $.ig.Type("OwnedPoint", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ScatterFrame", "ScatterFrameBase$1", {init: function () {
    $.ig.ScatterFrameBase$1.prototype.init.call(this, $.ig.ScatterFrame.prototype.$type);
    this.a5(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0))
}, _a5: null, a5: function (b) {
    if (arguments.length === 1) {
        this._a5 = b;
        return b
    } else {
        return this._a5
    }
}, ad: function (f, g, h) {
    $.ig.ScatterFrameBase$1.prototype.ad.call(this, f, g, h);
    var i = $.ig.util.cast($.ig.ScatterFrame.prototype.$type, g);
    var j = $.ig.util.cast($.ig.ScatterFrame.prototype.$type, h);
    if (i == null || j == null) {
        return
    }
    this.r().q(this.a5(), f, i.a5(), j.a5(), i, j)
}, $type: new $.ig.Type("ScatterFrame", $.ig.ScatterFrameBase$1.prototype.$type.specialize($.ig.ScatterFrame.prototype.$type))}, true);
$.ig.util.defType("ScatterSeries", "ScatterBase", {ed: function () {
    return new $.ig.ScatterSeriesView(this)
}, ea: function (b) {
    $.ig.ScatterBase.prototype.ea.call(this, b);
    this.kv(b)
}, _kv: null, kv: function (b) {
    if (arguments.length === 1) {
        this._kv = b;
        return b
    } else {
        return this._kv
    }
}, init: function () {
    $.ig.ScatterBase.prototype.init.call(this);
    this.a3($.ig.ScatterSeries.prototype.$type);
    this.i3 = new $.ig.ScatterFrame();
    this.i4 = new $.ig.ScatterFrame();
    this.i5 = new $.ig.ScatterFrame()
}, $type: new $.ig.Type("ScatterSeries", $.ig.ScatterBase.prototype.$type)}, true);
$.ig.util.defType("ScatterSeriesView", "ScatterBaseView", {_ej: null, ej: function (b) {
    if (arguments.length === 1) {
        this._ej = b;
        return b
    } else {
        return this._ej
    }
}, init: function (b) {
    $.ig.ScatterBaseView.prototype.init.call(this, b);
    this.ej(b)
}, ag: function () {
    var a = this;
    $.ig.ScatterBaseView.prototype.ag.call(this);
    if (!this.ad()) {
        this.cg().markerType($.ig.MarkerType.prototype.automatic);
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.o);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, $type: new $.ig.Type("ScatterSeriesView", $.ig.ScatterBaseView.prototype.$type)}, true);
$.ig.EnableErrorBars.prototype.none = 0;
$.ig.EnableErrorBars.prototype.both = 1;
$.ig.EnableErrorBars.prototype.positive = 2;
$.ig.EnableErrorBars.prototype.negative = 3;
$.ig.CollisionAvoidanceType.prototype.none = 0;
$.ig.CollisionAvoidanceType.prototype.omit = 1;
$.ig.CollisionAvoidanceType.prototype.fade = 2;
$.ig.CollisionAvoidanceType.prototype.omitAndShift = 3;
$.ig.CollisionAvoidanceType.prototype.fadeAndShift = 4;
$.ig.BrushSelectionMode.prototype.select = 0;
$.ig.BrushSelectionMode.prototype.interpolate = 1;
$.ig.TrendLineManagerBase$1.prototype.a = "TrendLineDashArray";
$.ig.TrendLineManagerBase$1.prototype.b = "TrendLineType";
$.ig.TrendLineManagerBase$1.prototype.c = "TrendLinePeriod";
$.ig.TrendLineManagerBase$1.prototype.d = "TrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.e = "ActualTrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.f = "TrendLineThickness";
$.ig.TrendLineManagerBase$1.prototype.g = "TrendLineDashCap";
$.ig.TrendLineManagerBase$1.prototype.h = "TrendLineZIndex";
$.ig.ScatterBase.prototype.iq = "XAxis";
$.ig.ScatterBase.prototype.ir = "YAxis";
$.ig.ScatterBase.prototype.is = "XMemberPath";
$.ig.ScatterBase.prototype.it = "XColumn";
$.ig.ScatterBase.prototype.iu = "YMemberPath";
$.ig.ScatterBase.prototype.iv = "YColumn";
$.ig.ScatterBase.prototype.iw = "MarkerCollisionAvoidance";
$.ig.ScatterBase.prototype.ix = "MaximumMarkers";
$.ig.ScatterBase.prototype.iy = "ErrorBarSettings";
$.ig.ScatterBase.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iq, $.ig.NumericXAxis.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.iq, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.ir, $.ig.NumericYAxis.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.ir, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.xMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.is, String, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.is, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.yMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iu, String, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.iu, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b4, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b6, $.ig.Brush.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b6, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b7, $.ig.Brush.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b7, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b8, Number, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b8, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b9, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b3, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.b5, $.ig.Number.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.b5, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iw, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, c)).ej($.ig.ScatterBase.prototype.iw, d.f(), d.e())
}));
$.ig.ScatterBase.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.ca, $.ig.Number.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 1001, function (a, b) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.ca, b.f(), b.e())
}));
$.ig.ScatterBase.prototype.maximumMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.ix, $.ig.Number.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, 400, function (a, b) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.ix, b.f(), b.e())
}));
$.ig.ScatterBase.prototype.errorBarSettingsProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterBase.prototype.iy, $.ig.ScatterErrorBarSettings.prototype.$type, $.ig.ScatterBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (a, b) {
    ($.ig.util.cast($.ig.ScatterBase.prototype.$type, a)).ej($.ig.ScatterBase.prototype.iy, b.f(), b.e())
}));
$.ig.BubbleSeries.prototype.ku = "RadiusMemberPath";
$.ig.BubbleSeries.prototype.kv = "RadiusColumn";
$.ig.BubbleSeries.prototype.kw = "RadiusScale";
$.ig.BubbleSeries.prototype.kx = "LabelMemberPath";
$.ig.BubbleSeries.prototype.ky = "LabelColumn";
$.ig.BubbleSeries.prototype.kz = "FillMemberPath";
$.ig.BubbleSeries.prototype.k0 = "FillScale";
$.ig.BubbleSeries.prototype.k1 = "FillColumn";
$.ig.BubbleSeries.prototype.radiusMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.ku, String, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.ku, d.f(), d.e())
}));
$.ig.BubbleSeries.prototype.radiusScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.kw, $.ig.SizeScale.prototype.$type, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.kw, d.f(), d.e())
}));
$.ig.BubbleSeries.prototype.labelMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.kx, String, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.kx, d.f(), d.e())
}));
$.ig.BubbleSeries.prototype.fillMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.kz, String, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.kz, d.f(), d.e())
}));
$.ig.BubbleSeries.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.BubbleSeries.prototype.k0, $.ig.BrushScale.prototype.$type, $.ig.BubbleSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.BubbleSeries.prototype.$type, c)).ej($.ig.BubbleSeries.prototype.k0, d.f(), d.e())
}));
$.ig.CustomPaletteBrushScale.prototype.q = "BrushSelectionMode";
$.ig.CustomPaletteBrushScale.prototype.brushSelectionModeProperty = $.ig.DependencyProperty.prototype.l($.ig.CustomPaletteBrushScale.prototype.q, $.ig.BrushSelectionMode.prototype.$type, $.ig.CustomPaletteBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.BrushSelectionMode.prototype.select, function (c, d) {
    ($.ig.util.cast($.ig.CustomPaletteBrushScale.prototype.$type, c)).n($.ig.CustomPaletteBrushScale.prototype.q, d.f(), d.e())
}));
$.ig.SizeScale.prototype.e = "MinimumValue";
$.ig.SizeScale.prototype.f = "MaximumValue";
$.ig.SizeScale.prototype.g = "IsLogarithmic";
$.ig.SizeScale.prototype.h = "LogarithmBase";
$.ig.SizeScale.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.e, Number, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.SizeScale.prototype.$type, c)).s($.ig.SizeScale.prototype.e, d.f(), d.e())
}));
$.ig.SizeScale.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.f, Number, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.SizeScale.prototype.$type, c)).s($.ig.SizeScale.prototype.f, d.f(), d.e())
}));
$.ig.SizeScale.prototype.isLogarithmicProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.g, $.ig.Boolean.prototype.$type, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.SizeScale.prototype.$type, c)).s($.ig.SizeScale.prototype.g, d.f(), d.e())
}));
$.ig.SizeScale.prototype.logarithmBaseProperty = $.ig.DependencyProperty.prototype.l($.ig.SizeScale.prototype.h, $.ig.Number.prototype.$type, $.ig.SizeScale.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (c, d) {
    ($.ig.util.cast($.ig.SizeScale.prototype.$type, c)).s($.ig.SizeScale.prototype.h, d.f(), d.e())
}));
$.ig.ValueBrushScale.prototype.q = "MinimumValue";
$.ig.ValueBrushScale.prototype.r = "MaximumValue";
$.ig.ValueBrushScale.prototype.s = "IsLogarithmic";
$.ig.ValueBrushScale.prototype.t = "LogarithmBase";
$.ig.ValueBrushScale.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.q, Number, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, c)).n($.ig.ValueBrushScale.prototype.q, d.f(), d.e())
}));
$.ig.ValueBrushScale.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.r, Number, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, c)).n($.ig.ValueBrushScale.prototype.r, d.f(), d.e())
}));
$.ig.ValueBrushScale.prototype.isLogarithmicProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.s, $.ig.Boolean.prototype.$type, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, c)).n($.ig.ValueBrushScale.prototype.s, d.f(), d.e())
}));
$.ig.ValueBrushScale.prototype.logarithmBaseProperty = $.ig.DependencyProperty.prototype.l($.ig.ValueBrushScale.prototype.t, $.ig.Number.prototype.$type, $.ig.ValueBrushScale.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (c, d) {
    ($.ig.util.cast($.ig.ValueBrushScale.prototype.$type, c)).n($.ig.ValueBrushScale.prototype.t, d.f(), d.e())
}));
$.ig.ScaleLegend.prototype.cc = "ParentVisibility";
$.ig.ScaleLegend.prototype.cd = "SeriesMarkerBrush";
$.ig.ScaleLegend.prototype.ce = $.ig.DependencyProperty.prototype.l($.ig.ScaleLegend.prototype.cc, $.ig.Visibility.prototype.$type, $.ig.ScaleLegend.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    if (d.e() != $.ig.Visibility.prototype.visible) {
        ($.ig.util.cast($.ig.ScaleLegend.prototype.$type, c)).dk()
    } else {
        ($.ig.util.cast($.ig.ScaleLegend.prototype.$type, c)).dp()
    }
}));
$.ig.ScaleLegend.prototype.cf = $.ig.DependencyProperty.prototype.l($.ig.ScaleLegend.prototype.cd, $.ig.Brush.prototype.$type, $.ig.ScaleLegend.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.ScaleLegend.prototype.$type, c)).dp()
}));
$.ig.ScaleLegendView.prototype.ap = "LegendScale";
$.ig.ScaleLegendView.prototype.aq = 0;
$.ig.HighDensityScatterSeries.prototype.hp = "XAxis";
$.ig.HighDensityScatterSeries.prototype.hq = "YAxis";
$.ig.HighDensityScatterSeries.prototype.hr = "XMemberPath";
$.ig.HighDensityScatterSeries.prototype.hs = "XColumn";
$.ig.HighDensityScatterSeries.prototype.ht = "YMemberPath";
$.ig.HighDensityScatterSeries.prototype.hu = "YColumn";
$.ig.HighDensityScatterSeries.prototype.hv = "UseBruteForce";
$.ig.HighDensityScatterSeries.prototype.hw = "ProgressiveLoad";
$.ig.HighDensityScatterSeries.prototype.hx = "MouseOverEnabled";
$.ig.HighDensityScatterSeries.prototype.hy = "UseSquareCutoffStyle";
$.ig.HighDensityScatterSeries.prototype.hz = "HeatMinimum";
$.ig.HighDensityScatterSeries.prototype.h0 = "HeatMaximum";
$.ig.HighDensityScatterSeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hp, $.ig.NumericXAxis.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hp, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hq, $.ig.NumericYAxis.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hq, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.xMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hr, String, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hr, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.yMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.ht, String, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.ht, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.useBruteForceProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hv, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hv, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.progressiveLoadProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hw, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, true, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hw, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.mouseOverEnabledProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hx, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hx, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.useSquareCutoffStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hy, $.ig.Boolean.prototype.$type, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hy, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.heatMinimumProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.hz, Number, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.hz, d.f(), d.e())
}));
$.ig.HighDensityScatterSeries.prototype.heatMaximumProperty = $.ig.DependencyProperty.prototype.l($.ig.HighDensityScatterSeries.prototype.h0, Number, $.ig.HighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (c, d) {
    ($.ig.util.cast($.ig.HighDensityScatterSeries.prototype.$type, c)).ej($.ig.HighDensityScatterSeries.prototype.h0, d.f(), d.e())
}));
$.ig.DefaultFlattener.prototype.a = 512;
$.ig.ErrorBarSettingsBase.prototype.e = "DefaultErrorBarStyle";
$.ig.ErrorBarSettingsBase.prototype.f = $.ig.DependencyProperty.prototype.l($.ig.ErrorBarSettingsBase.prototype.e, $.ig.Style.prototype.$type, $.ig.ErrorBarSettingsBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ErrorBarSettingsBase.prototype.$type, c)).o($.ig.ErrorBarSettingsBase.prototype.e, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.q = "EnableErrorBarsHorizontal";
$.ig.ScatterErrorBarSettings.prototype.r = "HorizontalCalculatorReference";
$.ig.ScatterErrorBarSettings.prototype.s = "HorizontalCalculator";
$.ig.ScatterErrorBarSettings.prototype.t = "HorizontalErrorBarCapLength";
$.ig.ScatterErrorBarSettings.prototype.u = "HorizontalStroke";
$.ig.ScatterErrorBarSettings.prototype.v = "HorizontalStrokeThickness";
$.ig.ScatterErrorBarSettings.prototype.w = "HorizontalErrorBarStyle";
$.ig.ScatterErrorBarSettings.prototype.x = "EnableErrorBarsVertical";
$.ig.ScatterErrorBarSettings.prototype.y = "VerticalCalculatorReference";
$.ig.ScatterErrorBarSettings.prototype.z = "VerticalCalculator";
$.ig.ScatterErrorBarSettings.prototype.aa = "VerticalErrorBarCapLength";
$.ig.ScatterErrorBarSettings.prototype.ab = "VerticalStroke";
$.ig.ScatterErrorBarSettings.prototype.ac = "VerticalStrokeThickness";
$.ig.ScatterErrorBarSettings.prototype.ad = "VerticalErrorBarStyle";
$.ig.ScatterErrorBarSettings.prototype.ae = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.q, $.ig.EnableErrorBars.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.EnableErrorBars.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.q, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.af = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.r, $.ig.ErrorBarCalculatorReference.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ErrorBarCalculatorReference.prototype.x, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.r, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ag = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.s, $.ig.IErrorBarCalculator.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.s, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ah = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.t, $.ig.Number.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 6, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.t, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ai = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.u, $.ig.Brush.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.u, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.aj = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.v, Number, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.v, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ak = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.w, $.ig.Style.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.w, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.al = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.x, $.ig.EnableErrorBars.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.EnableErrorBars.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.x, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.am = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.y, $.ig.ErrorBarCalculatorReference.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ErrorBarCalculatorReference.prototype.y, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.y, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.an = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.z, $.ig.IErrorBarCalculator.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.z, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ao = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.aa, $.ig.Number.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 6, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.aa, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ap = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.ab, $.ig.Brush.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.ab, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.aq = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.ac, Number, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.ac, d.f(), d.e())
}));
$.ig.ScatterErrorBarSettings.prototype.ar = $.ig.DependencyProperty.prototype.l($.ig.ScatterErrorBarSettings.prototype.ad, $.ig.Style.prototype.$type, $.ig.ScatterErrorBarSettings.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ScatterErrorBarSettings.prototype.$type, c)).o($.ig.ScatterErrorBarSettings.prototype.ad, d.f(), d.e())
}));
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [
    [
        [$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["getBounds", "getBounds11", "getCentroid", "toPointCollection", "toPointList"]
    ],
    [
        [$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["flattenTo", "getBounds2", "clipTo"]
    ]
]);
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.CalculatedColumn, $.ig.SafeEnumerable, $.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["asQueryable"]
    ]
]);
$.ig.util.extCopy($.ig.ArrayUtil, [
    [
        [$.ig.SafeReadOnlyDoubleCollection, $.ig.SafeSortedReadOnlyDoubleCollection, $.ig.SortedListView$1],
        ["shuffle$1", "insertionIndex$1", "insertionIndex$11111", "binarySearch$1"]
    ]
]);
$.ig = $.ig || {};
$.ig.util.bulkDefine(["SphericalMercatorHorizontalScaler", "SphericalMercatorVerticalScaler", "ColorScale", "ColorScaleInterpolationMode", "CustomPaletteColorScale", "GeographicMapImagery", "BingMapsMapImagery", "GeographicMapImageryView", "BingMapsMapImageryView", "CloudMadeMapImagery", "CloudMadeMapImageryView", "OpenStreetMapImagery", "HostSeriesView$1", "GeographicProportionalSymbolSeriesView", "GeographicMapSeriesHost$1", "GeographicXYTriangulatingSeries", "GeographicContourLineSeries", "GeographicXYTriangulatingSeriesView", "GeographicContourLineSeriesView", "GeographicHighDensityScatterSeries", "GeographicHighDensityScatterSeriesView", "GeographicShapeSeriesBase", "GeographicPolylineSeries", "GeographicProportionalSymbolSeries", "GeographicScatterAreaSeries", "GeographicScatterAreaSeriesView", "GeographicShapeSeries", "GeographicShapeSeriesBaseView", "GeographicShapeSeriesView", "GeographicSymbolSeries", "GeographicSymbolSeriesView", "XYTriangulatingSeries", "ContourLineSeries", "PolylineBuilder", "ContourBuilder", "ContourLineSeriesView", "ContourValueResolver", "LinearContourValueResolver", "ShapeSeriesBase", "PolylineSeries", "ShapeSeriesViewBase", "PolylineSeriesView", "ScatterAreaSeries", "TriangleRasterizer", "ScatterAreaSeriesView", "ShapeSeries", "ShapeAxisInfoCache", "FlattenedShape", "ShapeSeriesView", "ShapeHitRegion", "ShapefileConverter", "ShapefileRecord", "ShapeFileUtil", "Header", "XBaseDataType", "XBaseField", "ShapeType", "StyleSelector", "ItfConverter", "Triangle", "TriangulationSource", "TriangulatorContext", "Triangulator", "TriangulationStatusEventHandler", "TriangulationStatusEventArgs", "HalfEdge", "HalfEdgeSet", "EdgeComparer", "PointTester", "TriangulationSourcePointRecord", "XamGeographicMap", "XamGeographicMapView", "TestEnum", "AxisLabelPanelBaseView", "AngleAxisLabelPanelView", "AxisLabelPanelBase", "AngleAxisLabelPanel", "AutoRangeCalculator", "Axis", "AxisCollection", "AxisComponentsForView", "AxisComponentsFromView", "AxisLabelInfo", "AxisLabelManager", "LabelPosition", "AxisLabelSettings", "AxisRange", "Snapper", "LinearNumericSnapper", "LogarithmicNumericSnapper", "LinearCategorySnapper", "AxisView", "IScaler", "ICategoryScaler", "CategoryAxisBase", "IAngleScaler", "CategoryAngleAxis", "CategoryAxisBaseView", "CategoryAngleAxisView", "ISortingAxis", "CategoryDateTimeXAxis", "CategoryDateTimeXAxisView", "AxisRenderingParametersBase", "CategoryAxisRenderingParameters", "AxisRendererBase", "CategoryAxisRenderer", "CategoryXAxis", "CategoryXAxisView", "CategoryYAxis", "CategoryYAxisView", "HorizontalAxisLabelPanelBase", "HorizontalAxisLabelPanel", "HorizontalAxisLabelPanelBaseView", "NumericAxisBase", "NumericAngleAxis", "NumericAxisBaseView", "NumericAngleAxisView", "StraightNumericAxisBase", "NumericRadiusAxis", "NumericRadiusAxisView", "NumericXAxis", "StraightNumericAxisBaseView", "NumericXAxisView", "NumericYAxis", "NumericYAxisView", "PolarAxes", "PolarAxisRenderingManager", "IPolarRadialRenderingParameters", "NumericAxisRenderingParameters", "PolarAxisRenderingParameters", "RadialAxisRenderingParameters", "RadialAxes", "RadialAxisLabelPanel", "RadialAxisLabelPanelView", "GetSnapperInfoStrategy", "NumericAxisRenderer", "RangeInfo", "NumericScaler", "LinearScaler", "HorizontalLinearScaler", "LogarithmicScaler", "HorizontalLogarithmicScaler", "NumericScaleMode", "ScalerParams", "VerticalLinearScaler", "VerticalLogarithmicScaler", "TickmarkValues", "CategoryTickmarkValues", "LinearTickmarkValues", "LogarithmicTickmarkValues", "TickmarkValuesInitializationParameters", "ViewportUtils", "FramePreparer", "CategoryFramePreparerBase", "CategoryFramePreparer", "BarFramePreparer", "BarTrendFitCalculator", "TrendLineManagerBase$1", "IPreparesCategoryTrendline", "CategoryTrendLineManagerBase", "CategoryTrendLineManager", "BarTrendLineManager", "BrushScale", "MarkerManagerBase", "BubbleMarkerManager", "IProvidesViewport", "Series", "MarkerSeries", "ISupportsErrorBars", "ScatterBase", "BubbleSeries", "SeriesView", "MarkerSeriesView", "ScatterBaseView", "BubbleSeriesView", "CustomPaletteBrushScale", "SizeScale", "ValueBrushScale", "IHasCategoryAxis", "IHasCategoryModePreference", "CategorySeries", "IIsCategoryBased", "IHasSingleValueCategory", "IHasTrendline", "IHasCategoryTrendline", "AnchoredCategorySeries", "VerticalAnchoredCategorySeries", "IBarSeries", "BarSeries", "ISupportsMarkers", "CategorySeriesView", "AnchoredCategorySeriesView", "BarSeriesView", "IBucketizer", "CategoryBucketCalculator", "AnchoredCategoryBucketCalculator", "BarBucketCalculator", "RangeCategoryBucketCalculator", "HorizontalAnchoredCategorySeries", "PointSeries", "PointSeriesView", "IHasHighLowValueCategory", "RangeCategorySeries", "HorizontalRangeCategorySeries", "RangeAreaSeries", "RangeCategorySeriesView", "RangeAreaSeriesView", "RangeCategoryFramePreparer", "ValuesHolder", "HighLowValuesHolder", "DefaultHighLowValueProvider", "RangeColumnSeries", "RangeColumnSeriesView", "SplineSeriesBaseView", "SplineAreaSeriesView", "VerticalAxisLabelPanel", "VerticalAxisLabelPanelView", "AreaSeries", "AreaSeriesView", "Frame", "CategoryFrame", "SingleValuesHolder", "DefaultSingleValueProvider", "PreparationParams", "CategoryLineRasterizer", "ColumnSeries", "ColumnSeriesView", "DefaultSupportsMarkers", "DefaultProvidesViewport", "DefaultSupportsErrorBars", "LineSeries", "LineSeriesView", "SplineSeriesBase", "SplineAreaSeries", "SplineSeries", "SplineSeriesView", "StepAreaSeries", "StepAreaSeriesView", "StepLineSeries", "StepLineSeriesView", "WaterfallSeries", "WaterfallSeriesView", "MarkerTemplates", "DataSourceManager", "BrushSelectionMode", "IndicatorDisplayType", "TimeAxisDisplayType", "ChartAxisRangeChangedEventArgs", "DataChartAxisRangeChangedEventHandler", "FinancialSeries", "FinancialIndicator", "StrategyBasedIndicator", "AbsoluteVolumeOscillatorIndicator", "IndicatorCalculationStrategy", "AbsoluteVolumeOscillatorIndicatorStrategy", "AccumulationDistributionIndicator", "StreamingIndicatorCalculationStrategy", "AccumulationDistributionIndicatorStrategy", "AverageDirectionalIndexIndicator", "AverageDirectionalIndexIndicatorStrategy", "AverageTrueRangeIndicator", "AverageTrueRangeIndicatorStrategy", "FinancialOverlay", "BollingerBandsOverlay", "FinancialBucketCalculator", "BollingerBandsBucketCalculator", "FinancialSeriesView", "BollingerBandsOverlayView", "BollingerBandWidthIndicator", "BollingerBandWidthIndicatorStrategy", "ChaikinOscillatorIndicator", "ChaikinOscillatorIndicatorStrategy", "ChaikinVolatilityIndicator", "ChaikinVolatilityIndicatorStrategy", "CommodityChannelIndexIndicator", "CommodityChannelIndexIndicatorStrategy", "CustomIndicator", "CustomIndicatorStrategy", "PriceChannelOverlayView", "DetrendedPriceOscillatorIndicator", "DetrendedPriceOscillatorIndicatorStrategy", "EaseOfMovementIndicator", "EaseOfMovementIndicatorStrategy", "FastStochasticOscillatorIndicator", "FastStochasticOscillatorIndicatorStrategy", "FinancialIndicatorBucketCalculator", "FinancialIndicatorView", "ForceIndexIndicator", "ForceIndexIndicatorStrategy", "FullStochasticOscillatorIndicator", "FullStochasticOscillatorIndicatorStrategy", "PercentKCalculationStrategy", "IndicatorRenderer", "ItemwiseIndicatorCalculationStrategy", "ItemwiseStrategyBasedIndicator", "ItemwiseStrategyCalculationStrategy", "MarketFacilitationIndexIndicator", "MarketFacilitationIndexIndicatorStrategy", "MassIndexIndicator", "MassIndexIndicatorStrategy", "MedianPriceIndicator", "MedianPriceIndicatorStrategy", "MoneyFlowIndexIndicator", "MoneyFlowIndexIndicatorStrategy", "MovingAverageConvergenceDivergenceIndicator", "MovingAverageConvergenceDivergenceIndicatorStrategy", "NegativeVolumeIndexIndicator", "NegativeVolumeIndexIndicatorStrategy", "OnBalanceVolumeIndicator", "OnBalanceVolumeIndicatorStrategy", "PercentagePriceOscillatorIndicator", "PercentagePriceOscillatorIndicatorStrategy", "PercentageVolumeOscillatorIndicator", "PercentageVolumeOscillatorIndicatorStrategy", "PositiveVolumeIndexIndicator", "PositiveVolumeIndexIndicatorStrategy", "PriceChannelOverlay", "PriceChannelBucketCalculator", "PriceVolumeTrendIndicator", "PriceVolumeTrendIndicatorStrategy", "RateOfChangeAndMomentumIndicator", "RateOfChangeAndMomentumIndicatorStrategy", "RelativeStrengthIndexIndicator", "RelativeStrengthIndexIndicatorStrategy", "SlowStochasticOscillatorIndicator", "SlowStochasticOscillatorIndicatorStrategy", "StandardDeviationIndicator", "StandardDeviationIndicatorStrategy", "StochRSIIndicator", "StochRSIIndicatorStrategy", "TRIXIndicator", "TRIXIndicatorStrategy", "TypicalPriceIndicator", "TypicalPriceIndicatorStrategy", "UltimateOscillatorIndicator", "UltimateOscillatorIndicatorCalculationStrategy", "WeightedCloseIndicator", "WeightedCloseIndicatorStrategy", "WilliamsPercentRIndicator", "WilliamsPercentRIndicatorStrategy", "LegendBaseViewManager", "LegendBase", "ScaleLegend", "LegendBaseView", "ScaleLegendView", "GradientData", "GradientStopData", "PieChartViewManager", "HighDensityScatterSeries", "MouseMoveThunk", "ScatterMouseOverEventArgs", "ProgressiveLoadStatusEventArgs", "HighDensityScatterSeriesView", "KDTree2D", "KNearestResults", "KNearestResult", "KDTreeThunk", "SearchArgs", "KDTreeNode2D", "SearchData", "PointData", "ScatterLineSeries", "ScatterLineSeriesView", "SeriesViewerComponentsForView", "SeriesViewerComponentsFromView", "SeriesViewer", "XamDataChart", "SeriesViewerView", "XamDataChartView", "ChartCollection", "ChartContentManager", "ContentInfo", "ChartContentType", "DataContext", "PieSliceDataContext", "LabelPanelArranger", "LabelPanelsArrangeState", "LegendTemplates", "Marker", "CollisionAvoidanceType", "NumericMarkerManager", "CategoryMarkerManager", "MarkerManagerBucket", "PathRenderer", "NaNSegmenter", "IFlattener", "DefaultFlattener", "RenderSurface", "SeriesCollection", "SeriesComponentsForView", "SeriesComponentsFromView", "SeriesRenderingArguments", "SeriesRenderer$2", "IFastItemsSourceProvider", "SyncLink", "FastItemsSourceReference", "SyncSettings", "SyncSettingsConverter", "SyncLinkManager", "SyncManager", "DefaultCategoryTrendlineHost", "DefaultCategoryTrendlinePreparer", "TrendResolutionParams", "TrendFitCalculator", "TrendAverageCalculator", "PolarTrendLineManager", "RadialTrendLineManager", "ScatterTrendLineManager", "SortingTrendLineManager", "AxisLabelsLocation", "CategoryMode", "AxisOrientation", "GridMode", "LabelsPosition", "MarkerType", "OthersCategoryType", "PriceDisplayType", "SplineType", "WindowMode", "WindowResponse", "ErrorBarSettingsBase", "CategoryErrorBarSettings", "EnableErrorBars", "ErrorBarsHelper", "ScatterErrorBarSettings", "AxisRangeChangedEventArgs", "AxisRangeChangedEventHandler", "DataChartMouseButtonEventArgs", "DataChartMouseButtonEventHandler", "DataChartLegendMouseButtonEventArgs", "DataChartLegendMouseButtonEventHandler", "ChartMouseEventArgs", "DataChartMouseEventHandler", "ChartLegendMouseEventArgs", "DataChartLegendMouseEventHandler", "ChartCursorEventArgs", "DataChartCursorEventHandler", "FinancialEventArgs", "FinancialEventHandler", "PropertyUpdatedEventArgs", "PropertyUpdatedEventHandler", "SliceClickEventArgs", "SliceClickEventHandler", "FinancialPriceSeries", "FinancialPriceBucketCalculator", "FinancialPriceSeriesView", "FinancialCalculationDataSource", "FinancialCalculationSupportingCalculations", "SupportingCalculation$1", "SupportingCalculationStrategy", "ColumnSupportingCalculation", "ProvideColumnValuesStrategy", "DataSourceSupportingCalculation", "CalculatedColumn", "ItemLegend", "ItemLegendView", "Legend", "LegendView", "PieChartBase", "PieLabel", "IndexCollection", "IndexCollectionTypeConverter", "PieChartBaseView", "Slice", "SliceView", "XamPieChart", "XamPieChartView", "PolarBase", "PolarLineSeriesBase", "PolarAreaSeries", "PolarBaseView", "PolarLineSeriesBaseView", "PolarAreaSeriesView", "PolarAxisInfoCache", "ScatterFrameBase$1", "PolarFrame", "AngleRadiusPair", "PolarLinePlanner", "PolarLineSeries", "PolarLineSeriesView", "PolarScatterSeries", "PolarScatterSeriesView", "PolarSplineAreaSeries", "PolarSplineAreaSeriesView", "PolarSplineSeries", "PolarSplineSeriesView", "RadialBase", "AnchoredRadialSeries", "RadialBucketCalculator", "AnchoredRadialBucketCalculator", "RadialBaseView", "AnchoredRadialSeriesView", "RadialFrame", "RadialColumnSeries", "RadialColumnSeriesView", "RadialLineSeries", "RadialLineSeriesView", "RadialPieSeries", "SliceCoords", "RadialPieSeriesView", "ScatterAxisInfoCache", "DictInterpolator$3", "OwnedPoint", "ScatterFrame", "ScatterSeries", "ScatterSeriesView", "CoercionInfo", "SeriesViewerSurfaceViewer", "OverviewPlusDetailViewportHost", "SeriesViewerViewManager", "Bezier", "BezierPointComparison", "BezierOp", "BezierPoint", "ChartVisualData", "SeriesVisualDataList", "SeriesVisualData", "MarkerVisualDataList", "MarkerVisualData", "AxisVisualDataList", "AxisVisualData", "PrimitiveVisualDataList", "AxisLabelVisualDataList", "AxisLabelVisualData", "LabelAppearanceData", "PrimitiveAppearanceData", "GetPointsSettings", "PrimitiveVisualData", "RectangleVisualData", "ShapeTags", "LineVisualData", "PolyLineVisualData", "PolygonVisualData", "PathVisualData", "GeometryData", "PathGeometryData", "LineGeometryData", "RectangleGeometryData", "EllipseGeometryData", "PathFigureData", "SegmentData", "LineSegmentData", "PolylineSegmentData", "ArcSegmentData", "AppearanceHelper", "IDetectsCollisions", "CollisionAvoider", "ColumnUtil", "IPool$1", "IIndexedPool$1", "Pool$1", "IHashPool$2", "HashPool$2", "SafeEnumerable", "SafeReadOnlyDoubleCollection", "SafeSortedReadOnlyDoubleCollection", "SortedListView$1", "Object", "MulticastDelegate", "Action", "Action$1", "Action$2", "Action$3", "Action$4", "Action$5", "Action$6", "Action$7", "Action$8", "IEqualityComparer$1", "IEnumerable", "ICollection", "IDictionary", "IList", "Array", "Array", "Comparison$1", "Attribute", "BrowsableAttribute", "EventArgs", "CancelEventArgs", "DesignTimeVisibleAttribute", "EditorBrowsableAttribute", "ValueType", "Enum", "EditorBrowsableState", "ISupportInitialize", "ITypeDescriptorContext", "TypeConverter", "TypeConverterAttribute", "Error", "IFormatProvider", "NotSupportedException", "ObsoleteAttribute", "MemberInfo", "MethodBase", "ConstructorInfo", "IComparable", "Date", "Number", "SuppressMessageAttribute", "EventHandler$1", "PlaceholderSystemCollectionsObjectModel", "PlaceholderSystemCollectionsSpecialized", "PlaceholderSystemWindows", "PlaceholderSystemWindowsControls", "PlaceholderSystemWindowsData", "PlaceholderSystemWindowsInput", "PlaceholderSystemWindowsMarkup", "PlaceholderSystemWindowsMediaImaging", "PlaceholderSystemWindowsShapes", "PlaceholderSystemWindowsControlsPrimitives", "PlaceholderSystemWindowsAutomation", "PlaceholderSystemWindowsAutomationPeers", "PlaceholderSystemText", "PlaceholderSystemGlobalization", "PlaceholderSystemWindowsDocuments", "PlaceholderSystemWindowsInk", "PlaceholderSystemWindowsMediaAnimation", "PlaceholderSystemWindowsMediaEffects", "PlaceholderSystemWindowsThreading", "PlaceholderInfragisticsControlerChartsAutomationPeers", "FlagsAttribute", "Func$1", "Func$2", "Func$3", "Func$4", "Func$5", "Func$6", "Func$7", "Func$8", "Func$9", "Math", "XMLHttpRequest", "Nullable$1", "Number", "ParamArrayAttribute", "Array", "AttributeTargets", "AttributeUsageAttribute", "Boolean", "Number", "String", "Array", "CompareCallback", "Dictionary", "DictionaryEntry", "IEnumerator", "INotifyPropertyChanged", "PropertyChangedEventArgs", "PropertyChangedEventHandler", "CultureInfo", "Delegate", "Number", "IDisposable", "Number", "Number", "Number", "IntPtr", "ReflectionUtil", "AssemblyTitleAttribute", "AssemblyCompanyAttribute", "AssemblyConfigurationAttribute", "AssemblyCopyrightAttribute", "AssemblyCultureAttribute", "AssemblyDescriptionAttribute", "AssemblyFileVersionAttribute", "AssemblyProductAttribute", "AssemblyTrademarkAttribute", "AssemblyVersionAttribute", "DefaultMemberAttribute", "MethodInfo", "ParameterInfo", "PropertyInfo", "RuntimeFieldHandle", "RuntimeTypeHandle", "ClientScriptAttribute", "ClientNameAttribute", "DontObfuscateAttribute", "EmitIgnoreTypeAttribute", "ExtensionAttribute", "GlobalMemberAttribute", "IgnoreAttribute", "InlineItemAccessAttribute", "InlinePropertyAttribute", "InternalsVisibleToAttribute", "KeepOriginalNameAttribute", "LiteralStringAttribute", "NativeMethodAttribute", "NativePropertyAttribute", "NativeTypeAttribute", "RuntimeHelpers", "WeakAttribute", "WidgetAttribute", "MainWidgetAttribute", "SuppressWidgetMemberAttribute", "SuppressWidgetMemberCopyAttribute", "WidgetDefaultStringAttribute", "WidgetDefaultNumberAttribute", "WidgetDefaultBooleanAttribute", "MvcEnumSetStringEnumAttribute", "WidgetModuleAttribute", "WidgetModuleParentAttribute", "WidgetIgnoreDependsAttribute", "ComVisibleAttribute", "GuidAttribute", "OutAttribute", "DataContractAttribute", "DataMemberAttribute", "WaitHandle", "EventWaitHandle", "Monitor", "TypeCode", "TargetFrameworkAttribute", "Number", "Script", "Single", "String", "ManualResetEvent", "Thread", "Date", "Type", "Number", "Number", "Number", "UIntPtr", "XmlAttributeAttribute", "XmlElementAttribute", "XmlEnumAttribute", "XmlIgnoreAttribute", "XmlRootAttribute", "XmlTypeAttribute", "XmlNode", "XmlAttribute", "XmlDocument", "XmlDocumentParser", "XmlLinkedNode", "XmlElement", "Void", "XmlNodeList", "XmlNamedNodeMap", "XmlNodeType", "XmlSchemaForm", "AbstractEnumerable", "AbstractEnumerator", "IEnumerable$1", "ICollection$1", "IList$1", "IArrayList", "List$1", "Collection$1", "IDictionary$2", "Dictionary$2", "GenericEnumerable$1", "IEnumerator$1", "GenericEnumerator$1", "INotifyCollectionChanged", "NotifyCollectionChangedEventHandler", "NotifyCollectionChangedEventArgs", "NotifyCollectionChangedAction", "KeyValuePair$2", "LinkedList$1", "LinkedListNode$1", "ObservableCollection$1", "Queue$1", "ReadOnlyCollection$1", "ReadOnlyObservableCollection$1", "NameValueCollection", "Stack$1", "IComparer$1", "Expression", "MemberExpression", "ParameterExpression", "LambdaExpression", "MethodCallExpression", "IOrderedEnumerable$1", "Queryable", "Enumerable", "SortedList$1", "IGrouping$2", "IArray", "DependencyObject", "Test", "IQueryable", "IQueryable$1", "IQueryProvider", "Activator", "AggregateException", "ArgumentException", "ArgumentNullException", "ArgumentOutOfRangeException", "AsyncCompletedEventArgs", "AsyncCompletedEventHandler", "ListSortDirection", "Convert", "Environment", "InvalidOperationException", "Debug", "IEquatable$1", "BinaryReader", "ICredentials", "NetworkCredential", "UploadStringCompletedEventHandler", "UploadStringCompletedEventArgs", "WebClient", "WebHeaderCollection", "FaultCode", "FaultException", "FaultException$1", "FaultReason", "StringBuilder", "BinaryFileDownloader", "NotImplementedException", "Random", "Encoding", "UTF8Encoding", "Task", "Task$1", "TaskCompletionSource$1", "TaskFactory", "TaskStatus", "Tuple$2", "Uri", "JavaScriptSerializer", "UIElement", "UIElementCollection", "FrameworkElement", "Control", "ContentControl", "Panel", "Canvas", "Image", "TextBlock", "DataTemplate", "DataTemplatePassInfo", "DataTemplateMeasureInfo", "DataTemplateRenderInfo", "DataTemplateRenderHandler", "DataTemplateMeasureHandler", "DataTemplatePassHandler", "Binding", "DependencyProperty", "UnsetValue", "DependencyPropertiesCollection", "DependencyPropertyChangedEventArgs", "Key", "ModifierKeys", "MouseEventArgs", "MouseButtonEventArgs", "Brush", "Color", "DoubleCollection", "GeometryType", "Geometry", "GeometryCollection", "GeometryGroup", "LineGeometry", "RectangleGeometry", "EllipseGeometry", "PathGeometry", "PathFigure", "PathFigureCollection", "PathSegmentType", "PathSegment", "PathSegmentCollection", "LineSegment", "BezierSegment", "PolyBezierSegment", "PolyLineSegment", "ArcSegment", "SweepDirection", "PenLineCap", "Transform", "RotateTransform", "TranslateTransform", "TransformGroup", "TransformCollection", "Point", "PointCollection", "PropertyChangedCallback", "CoerceValueCallback", "PropertyMetadata", "PropertyPath", "Rect", "Shape", "Line", "Path", "Polygon", "Polyline", "Rectangle", "Size", "Style", "StyleTypedPropertyAttribute", "TemplatePartAttribute", "TemplateVisualStateAttribute", "Visibility", "XObject", "XAttribute", "XNode", "XContainer", "XDocument", "XElement", "XmlUtils", "XName", "XNamespace", "Element", "CanvasElement", "console", "DivElement", "Document", "ElementAttribute", "ElementAttributeCollection", "ElementCollection", "ElementEventHandler", "ElementNodeType", "EventListener", "IElementEventHandler", "ImageElement", "CanvasContext", "CanvasContext2D", "ImageData", "Gradient", "TextMetrics", "MSGesture", "WebStyle", "window", "Callback", "JQuery", "JQueryDeferred", "JQueryEvent", "JQueryObject", "JQueryCallback", "JQueryUICallback", "JQueryPosition", "JQueryPromise", "BrushCollection", "EventProxy", "DOMEventProxy", "TrendCalculators", "TrendLineType", "UnknownValuePlotting", "ErrorBarCalculatorReference", "ErrorBarCalculatorType", "IErrorBarCalculator", "MouseWheelHandler", "GestureHandler", "TouchHandler", "ContactHandler", "MouseHandler", "MouseOverHandler", "KeyHandler", "IFastItemColumnInternal", "IFastItemColumnPropertyName", "IFastItemColumn$1", "FastItemColumn", "FastItemDateTimeColumn", "FastItemObjectColumn", "FastItemIntColumn", "FastItemsSource", "ColumnReference", "FastItemsSourceEventAction", "FastItemsSourceEventArgs", "FastReflectionHelper", "IRenderer", "RectChangedEventArgs", "RectChangedEventHandler", "CanvasRenderScheduler", "CanvasViewRenderer", "GradientDirection", "RenderingContext", "DependencyObjectNotifier", "InteractionState", "IOverviewPlusDetailControl", "ISchedulableRender", "NavigationSettings", "OverviewPlusDetailPaneMode", "PropertyChangedEventArgs$1", "XamOverviewPlusDetailPane", "XamOverviewPlusDetailPaneView", "XamOverviewPlusDetailPaneViewManager", "XamMultiScaleTileSource", "MapTileSource", "BingMapsTileSource", "CloudMadeTileSource", "OpenStreetMapTileSource", "ArrayUtil", "Clipper", "EdgeClipper", "LeftClipper", "BottomClipper", "RightClipper", "TopClipper", "InterpolationMode", "ColorUtil", "DoubleAnimator", "Extensions", "Flattener", "SpiralTodo", "GeometryUtil", "Numeric", "LeastSquaresFit", "MathUtil", "PathFigureUtil", "PointCollectionUtil", "PolygonUtil", "PolySimplification", "RearrangedList$1", "RectUtil", "ISmartPlaceable", "SmartPlaceableWrapper$1", "SmartPosition", "SmartPlacer", "StackPool$1", "Tile", "WriteableBitmap", "IMapRenderDeferralHandler", "XamMultiScaleImage", "Pair$2", "IEasingFunction", "XamMultiScaleImageView"]);
$.ig.util.defType("ShapeType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("ShapeType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("XBaseDataType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("XBaseDataType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ColorScaleInterpolationMode", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("ColorScaleInterpolationMode", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SphericalMercatorHorizontalScaler", "HorizontalLinearScaler", {aj: null, init: function () {
    $.ig.HorizontalLinearScaler.prototype.init.call(this);
    this.aj = new $.ig.Rect(0, 0, 0, 1, 1)
}, ab: function (e, f) {
    if (!f.c.isEmpty()) {
        var g = e * f.a.width() + f.a.left() * f.b.width();
        var h = this.ah(g, this.aj, f.c, f.d);
        return h
    } else {
        return this.ah(e, f.a, f.b, f.d)
    }
}, ac: function (e, f) {
    if (!f.c.isEmpty()) {
        var g = this.ai(e, this.aj, f.c, f.d);
        var h = (g - (f.a.left() * f.b.width())) / f.a.width();
        return h
    } else {
        return this.ai(e, f.a, f.b, f.d)
    }
}, ak: function (c) {
    var b = $.isArray(c) ? c : null;
    return b;
    return null
}, ae: function (A, B, C, D) {
    var E;
    var F = D.a;
    var G = D.b;
    var H = D.c;
    var I = D.d;
    var J = !H.isEmpty();
    var K = this.p();
    var L = this.i;
    var M = H.left();
    var N = H.width();
    var O = F.left();
    var P = F.width();
    var Q = G.left();
    var R = G.width();
    var S = this.aj.left();
    var T = this.aj.width();
    var U = this.ak(A);
    var V = false;
    if (U != null) {
        V = true
    }
    for (var W = B; W < C; W++) {
        if (V) {
            E = U[W]
        } else {
            E = A.item(W)
        }
        if (J) {
            var X = (E - L) / (K);
            if (I) {
                X = 1 - X
            }
            X = M + N * (X - S) / T;
            var Y = (X - (O * R)) / P;
            if (V) {
                U[W] = Y
            } else {
                A.item(W, Y)
            }
        } else {
            var Z = (E - L) / (K);
            if (I) {
                Z = 1 - Z
            }
            Z = Q + R * (Z - O) / P;
            if (V) {
                U[W] = Z
            } else {
                A.item(W, Z)
            }
        }
    }
}, q: function (f, g, h, i, j) {
    i = f.minimumValue();
    j = f.maximumValue();
    return{actualMinimumValue: i, actualMaximumValue: j}
}, ah: function (f, g, h, i) {
    var j = g.left() + g.width() * (f - h.left()) / h.width();
    if (i) {
        j = 1 - j
    }
    return this.i + j * (this.p())
}, ai: function (f, g, h, i) {
    var j = (f - this.i) / (this.p());
    if (i) {
        j = 1 - j
    }
    return h.left() + h.width() * (j - g.left()) / g.width()
}, al: function (g, h, i, j, k) {
    var l = (g - this.i) / (this.p());
    if (k) {
        l = 1 - l
    }
    return i.left() + i.width() * (l - h.left()) / h.width()
}, $type: new $.ig.Type("SphericalMercatorHorizontalScaler", $.ig.HorizontalLinearScaler.prototype.$type)}, true);
$.ig.util.defType("SphericalMercatorVerticalScaler", "VerticalLinearScaler", {ak: null, ab: function (e, f) {
    if (!f.c.isEmpty()) {
        var g = e * f.a.height() + f.a.top() * f.b.height();
        var h = this.ai(g, this.ak, f.c, f.d);
        return h
    } else {
        return this.ai(e, f.a, f.b, f.d)
    }
}, ac: function (d, e) {
    if (!e.c.isEmpty()) {
        var f = this.ah(d, this.ak, e.c, e.d);
        f = (f - (e.a.top() * e.b.height())) / e.a.height();
        return f
    } else {
        return this.ah(d, e.a, e.b, e.d)
    }
}, ar: function (c) {
    var b = $.isArray(c) ? c : null;
    return b;
    return null
}, ae: function (A, E, F, G) {
    var H;
    var I = G.a;
    var J = G.b;
    var K = G.c;
    var L = G.d;
    var M = !K.isEmpty();
    var N = this.p();
    var O = this.i;
    var P = K.top();
    var Q = K.height();
    var R = I.top();
    var S = I.height();
    var T = J.top();
    var U = J.height();
    var V = this.ak.top();
    var W = this.ak.height();
    var X = this.ar(A);
    var Y = $.ig.SphericalMercatorVerticalScaler.prototype.aj;
    var Z;
    var aa;
    var ab;
    var ac;
    var B;
    var C = false;
    if (X != null) {
        C = true
    }
    for (var D = E; D < F; D++) {
        if (C) {
            H = X[D]
        } else {
            H = A.item(D)
        }
        if (M) {
            if (H < $.ig.SphericalMercatorVerticalScaler.prototype.am) {
                H = $.ig.SphericalMercatorVerticalScaler.prototype.am
            }
            if (H > $.ig.SphericalMercatorVerticalScaler.prototype.al) {
                H = $.ig.SphericalMercatorVerticalScaler.prototype.al
            }
            Z = H * (Y);
            aa = Math.sin(Z);
            ab = 0.5 * Math.log((1 + aa) / (1 - aa));
            ac = (this.an - ab) * Q / this.ao;
            ac = P + ac;
            B = (ac - V * Q) / W;
            ac = (B - (R * U)) / S;
            if (C) {
                X[D] = ac
            } else {
                A.item(D, ac)
            }
        } else {
            if (H < $.ig.SphericalMercatorVerticalScaler.prototype.am) {
                H = $.ig.SphericalMercatorVerticalScaler.prototype.am
            }
            if (H > $.ig.SphericalMercatorVerticalScaler.prototype.al) {
                H = $.ig.SphericalMercatorVerticalScaler.prototype.al
            }
            Z = H * (Y);
            aa = Math.sin(Z);
            ab = 0.5 * Math.log((1 + aa) / (1 - aa));
            ac = (this.an - ab) * U / this.ao;
            ac = T + ac;
            ac = (ac - R * U) / S;
            if (C) {
                X[D] = ac
            } else {
                A.item(D, ac)
            }
        }
    }
}, q: function (f, g, h, i, j) {
    i = this.ay(f.minimumValue());
    j = this.ay(f.maximumValue());
    return{actualMinimumValue: i, actualMaximumValue: j}
}, x: function (d, e, f) {
    $.ig.NumericScaler.prototype.x.call(this, d, e, f);
    switch (d) {
        case $.ig.SphericalMercatorVerticalScaler.prototype.e:
        case $.ig.SphericalMercatorVerticalScaler.prototype.f:
            this.an = $.ig.SphericalMercatorVerticalScaler.prototype.aw(this.j);
            this.ao = $.ig.SphericalMercatorVerticalScaler.prototype.aw(this.j) - $.ig.SphericalMercatorVerticalScaler.prototype.aw(this.i);
            break
    }
}, an: null, ao: null, ap: function () {
    return $.ig.SphericalMercatorVerticalScaler.prototype.al
}, aq: function () {
    return $.ig.SphericalMercatorVerticalScaler.prototype.am
}, init: function () {
    $.ig.VerticalLinearScaler.prototype.init.call(this);
    this.ak = new $.ig.Rect(0, 0, 0, 1, 1)
}, ai: function (f, g, h, i) {
    var j = (f - h.top()) * g.width() + g.top() * h.height();
    j = $.ig.SphericalMercatorVerticalScaler.prototype.aw(this.j) - j / (h.height() / this.ao);
    return $.ig.SphericalMercatorVerticalScaler.prototype.ax(j)
}, ah: function (f, g, h, i) {
    var j = h.top() + this.av(f, h.height());
    return(j - g.top() * h.height()) / g.width()
}, au: function (g, h, i, j, k) {
    var l = this.av(g, j.height());
    return(l - h.top() * i.height()) / h.width()
}, av: function (e, f) {
    e = e > $.ig.SphericalMercatorVerticalScaler.prototype.am ? (e < $.ig.SphericalMercatorVerticalScaler.prototype.al ? e : $.ig.SphericalMercatorVerticalScaler.prototype.al) : $.ig.SphericalMercatorVerticalScaler.prototype.am;
    var g = $.ig.SphericalMercatorVerticalScaler.prototype.aw(e);
    var h = (this.an - g) * f / this.ao;
    return(h)
}, aw: function (e) {
    var f = e * ($.ig.SphericalMercatorVerticalScaler.prototype.aj);
    var g = Math.sin(f);
    var h = 0.5 * Math.log((1 + g) / (1 - g));
    return h
}, ax: function (b) {
    b = Math.exp(2 * b);
    return Math.asin((b - 1) / (b + 1)) / $.ig.SphericalMercatorVerticalScaler.prototype.aj
}, ay: function (b) {
    if (b < $.ig.SphericalMercatorVerticalScaler.prototype.am) {
        return $.ig.SphericalMercatorVerticalScaler.prototype.am
    }
    if (b > $.ig.SphericalMercatorVerticalScaler.prototype.al) {
        return $.ig.SphericalMercatorVerticalScaler.prototype.al
    }
    return b
}, $type: new $.ig.Type("SphericalMercatorVerticalScaler", $.ig.VerticalLinearScaler.prototype.$type)}, true);
$.ig.util.defType("ColorScale", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this)
}, getColor: function (e, f, g, h) {
}, f: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
}, propertyChanged: null, $type: new $.ig.Type("ColorScale", $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("CustomPaletteColorScale", "ColorScale", {init: function () {
    this.k = null;
    this.m = NaN;
    this.n = NaN;
    this.o = true;
    this.p = true;
    this.q = $.ig.ColorScaleInterpolationMode.prototype.select;
    $.ig.ColorScale.prototype.init.call(this);
    this.l = $.ig.Color.prototype.s(0, 0, 0, 0);
    this.k = new $.ig.ObservableCollection$1($.ig.Color.prototype.$type, 0);
    this.k.collectionChanged = $.ig.Delegate.prototype.combine(this.k.collectionChanged, this.u.on(this))
}, minimumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CustomPaletteColorScale.prototype.minimumValueProperty, b);
        return b
    } else {
        return this.b($.ig.CustomPaletteColorScale.prototype.minimumValueProperty)
    }
}, maximumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CustomPaletteColorScale.prototype.maximumValueProperty, b);
        return b
    } else {
        return this.b($.ig.CustomPaletteColorScale.prototype.maximumValueProperty)
    }
}, k: null, palette: function (b) {
    if (arguments.length === 1) {
        if (this.k != null) {
            this.k.collectionChanged = $.ig.Delegate.prototype.remove(this.k.collectionChanged, this.u.on(this))
        }
        this.k = b;
        if (this.k != null) {
            this.k.collectionChanged = $.ig.Delegate.prototype.combine(this.k.collectionChanged, this.u.on(this))
        }
        this.f($.ig.CustomPaletteColorScale.prototype.i, this.palette(), this.palette());
        return b
    } else {
        return this.k
    }
}, u: function (c, d) {
    this.f($.ig.CustomPaletteColorScale.prototype.i, this.palette(), this.palette())
}, l: null, f: function (d, e, f) {
    $.ig.ColorScale.prototype.f.call(this, d, e, f);
    switch (d) {
        case $.ig.CustomPaletteColorScale.prototype.g:
            this.m = this.minimumValue();
            this.o = isNaN(this.m);
            break;
        case $.ig.CustomPaletteColorScale.prototype.h:
            this.n = this.maximumValue();
            this.p = isNaN(this.n);
            break;
        case $.ig.CustomPaletteColorScale.prototype.j:
            this.q = this.interpolationMode();
            break
    }
}, m: null, n: null, o: null, p: null, q: null, getColor: function (p, q, r, s) {
    if (((this.k == null) || (this.k.count() == 0)) || s == null) {
        return this.l
    }
    var t = this.o ? q : this.m;
    var u = this.p ? r : this.n;
    var v = (p - t) / (u - t);
    if (isNaN(v) || v < 0 || v > 1) {
        return this.l
    }
    var w = v * (this.k.count() - 1);
    if (this.q == $.ig.ColorScaleInterpolationMode.prototype.interpolateHSV || this.q == $.ig.ColorScaleInterpolationMode.prototype.interpolateRGB) {
        var x = Math.floor(w);
        var y = Math.ceil(w);
        var z = this.k.__inner[x];
        var A = this.k.__inner[y];
        var B = w - x;
        var C = this.q == $.ig.ColorScaleInterpolationMode.prototype.interpolateHSV ? $.ig.InterpolationMode.prototype.hSV : $.ig.InterpolationMode.prototype.rGB;
        return z.getInterpolation(B, A, C)
    } else {
        var D = Math.round(w);
        return this.k.__inner[D]
    }
}, interpolationMode: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CustomPaletteColorScale.prototype.interpolationModeProperty, b);
        return b
    } else {
        return this.b($.ig.CustomPaletteColorScale.prototype.interpolationModeProperty)
    }
}, providePalette: function (g) {
    var f = this;
    var h = new $.ig.ObservableCollection$1($.ig.Color.prototype.$type, 0);
    for (var j = 0; j < g.length; j++) {
        var i = g[j];
        var k = (function () {
            var a = new $.ig.Color();
            a.f(i);
            return a
        }());
        h.add(k)
    }
    this.palette(h)
}, $type: new $.ig.Type("CustomPaletteColorScale", $.ig.ColorScale.prototype.$type)}, true);
$.ig.util.defType("GeographicMapImagery", "Control", {init: function (b) {
    $.ig.Control.prototype.init.call(this);
    this.a3($.ig.GeographicMapImagery.prototype.$type);
    this.bh(b);
    this.bf(this.bj());
    this.bi(this.bf())
}, bi: function (b) {
}, bj: function () {
    return new $.ig.GeographicMapImageryView(this)
}, _bf: null, bf: function (b) {
    if (arguments.length === 1) {
        this._bf = b;
        return b
    } else {
        return this._bf
    }
}, bm: function () {
    if (this.bg() != null) {
        this.bf().g()
    }
}, bn: function (d, e, f) {
    switch (d) {
        case $.ig.GeographicMapImagery.prototype.a8:
            this.bm();
            break;
        case $.ig.GeographicMapImagery.prototype.a9:
            this.bf().g();
            break
    }
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
}, windowRect: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicMapImagery.prototype.windowRectProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicMapImagery.prototype.windowRectProperty)
    }
}, geographicMap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicMapImagery.prototype.geographicMapProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicMapImagery.prototype.geographicMapProperty)
    }
}, bo: function (c, d) {
    (c).bp(d.f(), d.e())
}, bp: function (c, d) {
    this.bn($.ig.GeographicMapImagery.prototype.a9, c, d)
}, _bg: null, bg: function (b) {
    if (arguments.length === 1) {
        this._bg = b;
        return b
    } else {
        return this._bg
    }
}, _bh: null, bh: function (b) {
    if (arguments.length === 1) {
        this._bh = b;
        return b
    } else {
        return this._bh
    }
}, propertyChanged: null, bu: function (p) {
    if (this.geographicMap() == null || p.c() < 1 || p.d() < 1) {
        return p
    }
    var q = new $.ig.Rect(0, 0, 0, p.c(), p.d());
    var r = this.geographicMap().k5(q);
    var s = $.ig.XamGeographicMap.prototype.kj;
    var t = this.geographicMap().actualWorldRect();
    var u = Math.min(this.windowRect().height(), this.windowRect().width());
    var v = t.width() / s.width();
    this.bg().b8((q.width() / r.width()) * u * v);
    var w = this.geographicMap().xAxis();
    var x = this.geographicMap().yAxis();
    var y = new $.ig.ScalerParams(this.windowRect(), q, w.isInverted());
    y.c = r;
    var z = new $.ig.ScalerParams(this.windowRect(), q, x.isInverted());
    z.c = r;
    var A = w.getScaledValue(s.left(), y);
    var B = x.getScaledValue(s.bottom(), z);
    var C = (-A / q.width()) * this.bg().b8();
    var D = (-B / q.height()) * this.bg().b8() * (q.height() / q.width());
    this.bg().b6({__x: C, __y: D, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    return p
}, bv: function (b) {
    this.bf().j(b)
}, bw: function (b) {
    this.bf().k(b)
}, bx: function () {
    this.bf().g()
}, $type: new $.ig.Type("GeographicMapImagery", $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("BingMapsMapImagery", "GeographicMapImagery", {init: function () {
    $.ig.GeographicMapImagery.prototype.init.call(this, new $.ig.BingMapsTileSource(0));
    this.b3().p()
}, bj: function () {
    return new $.ig.BingMapsMapImageryView(this)
}, bi: function (b) {
    $.ig.GeographicMapImagery.prototype.bi.call(this, b);
    this.b3(b)
}, _b3: null, b3: function (b) {
    if (arguments.length === 1) {
        this._b3 = b;
        return b
    } else {
        return this._b3
    }
}, tilePath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BingMapsMapImagery.prototype.tilePathProperty, b);
        return b
    } else {
        return this.b($.ig.BingMapsMapImagery.prototype.tilePathProperty)
    }
}, b6: function (c, d) {
    (c).b9($.ig.BingMapsMapImagery.prototype.bz, d.f(), d.e())
}, subDomains: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BingMapsMapImagery.prototype.subDomainsProperty, b);
        return b
    } else {
        return this.b($.ig.BingMapsMapImagery.prototype.subDomainsProperty)
    }
}, b7: function (c, d) {
    (c).b9($.ig.BingMapsMapImagery.prototype.b0, d.f(), d.e())
}, cultureName: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BingMapsMapImagery.prototype.cultureNameProperty, b);
        return b
    } else {
        return this.b($.ig.BingMapsMapImagery.prototype.cultureNameProperty)
    }
}, b8: function (c, d) {
    (c).b9($.ig.BingMapsMapImagery.prototype.b1, d.f(), d.e())
}, b9: function (f, g, h) {
    switch (f) {
        case $.ig.BingMapsMapImagery.prototype.bz:
            this.b3().q();
            this.bf().g();
            break;
        case $.ig.BingMapsMapImagery.prototype.b1:
            this.b3().r();
            this.bf().g();
            break;
        case $.ig.BingMapsMapImagery.prototype.b0:
            var i = g;
            var j = h;
            if (i != null) {
                i.collectionChanged = $.ig.Delegate.prototype.remove(i.collectionChanged, this.ca.on(this))
            }
            if (j != null) {
                j.collectionChanged = $.ig.Delegate.prototype.combine(j.collectionChanged, this.ca.on(this))
            }
            this.b3().s();
            this.bf().g();
            break
    }
    $.ig.GeographicMapImagery.prototype.bn.call(this, f, g, h)
}, ca: function (c, d) {
    this.bf().g()
}, $type: new $.ig.Type("BingMapsMapImagery", $.ig.GeographicMapImagery.prototype.$type)}, true);
$.ig.util.defType("GeographicMapImageryView", "Object", {init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.d($.ig.Rect.prototype.empty());
    this.c(b);
    this.c().bg(new $.ig.XamMultiScaleImage());
    this.c().bg().b5(this.c().bh())
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, g: function () {
    if (this.d().isEmpty()) {
        return
    }
    this.c().bu(new $.ig.Size(this.d().width(), this.d().height()))
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, j: function (b) {
    this.c().bg().dl(b)
}, k: function (b) {
    this.d(b);
    this.c().bg().dm(b);
    this.c().bx()
}, $type: new $.ig.Type("GeographicMapImageryView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("BingMapsMapImageryView", "GeographicMapImageryView", {init: function (b) {
    $.ig.GeographicMapImageryView.prototype.init.call(this, b);
    this.m(b)
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, p: function () {
    this.m().subDomains(new $.ig.ObservableCollection$1(String, 0));
    (this.m().bh()).tilePath(this.m().tilePath());
    (this.m().bh()).subDomains(this.m().subDomains());
    (this.m().bh()).cultureName(this.m().cultureName())
}, q: function () {
    (this.m().bh()).tilePath(this.m().tilePath())
}, r: function () {
    (this.m().bh()).cultureName(this.m().cultureName())
}, s: function () {
    (this.m().bh()).subDomains(this.m().subDomains())
}, $type: new $.ig.Type("BingMapsMapImageryView", $.ig.GeographicMapImageryView.prototype.$type)}, true);
$.ig.util.defType("CloudMadeMapImagery", "GeographicMapImagery", {init: function () {
    $.ig.GeographicMapImagery.prototype.init.call(this, new $.ig.CloudMadeTileSource());
    this.b2().r()
}, bj: function () {
    return new $.ig.CloudMadeMapImageryView(this)
}, bi: function (b) {
    $.ig.GeographicMapImagery.prototype.bi.call(this, b);
    this.b2(b)
}, _b2: null, b2: function (b) {
    if (arguments.length === 1) {
        this._b2 = b;
        return b
    } else {
        return this._b2
    }
}, key: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CloudMadeMapImagery.prototype.keyProperty, b);
        return b
    } else {
        return this.b($.ig.CloudMadeMapImagery.prototype.keyProperty)
    }
}, b5: function (c, d) {
    (c).b7($.ig.CloudMadeMapImagery.prototype.bz, d.f(), d.e())
}, parameter: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CloudMadeMapImagery.prototype.parameterProperty, b);
        return b
    } else {
        return this.b($.ig.CloudMadeMapImagery.prototype.parameterProperty)
    }
}, b6: function (c, d) {
    (c).b7($.ig.CloudMadeMapImagery.prototype.b0, d.f(), d.e())
}, b7: function (d, e, f) {
    switch (d) {
        case $.ig.CloudMadeMapImagery.prototype.bz:
            this.b2().p();
            this.bf().g();
            break;
        case $.ig.CloudMadeMapImagery.prototype.b0:
            this.b2().q();
            this.bf().g();
            break
    }
    $.ig.GeographicMapImagery.prototype.bn.call(this, d, e, f)
}, $type: new $.ig.Type("CloudMadeMapImagery", $.ig.GeographicMapImagery.prototype.$type)}, true);
$.ig.util.defType("CloudMadeMapImageryView", "GeographicMapImageryView", {init: function (b) {
    $.ig.GeographicMapImageryView.prototype.init.call(this, b);
    this.m(b)
}, _m: null, m: function (b) {
    if (arguments.length === 1) {
        this._m = b;
        return b
    } else {
        return this._m
    }
}, p: function () {
    (this.m().bh()).key(this.m().key())
}, q: function () {
    (this.m().bh()).parameter(this.m().parameter())
}, r: function () {
    (this.m().bh()).key(this.m().key());
    (this.m().bh()).parameter(this.m().parameter())
}, $type: new $.ig.Type("CloudMadeMapImageryView", $.ig.GeographicMapImageryView.prototype.$type)}, true);
$.ig.util.defType("OpenStreetMapImagery", "GeographicMapImagery", {init: function () {
    $.ig.GeographicMapImagery.prototype.init.call(this, new $.ig.OpenStreetMapTileSource())
}, $type: new $.ig.Type("OpenStreetMapImagery", $.ig.GeographicMapImagery.prototype.$type)}, true);
$.ig.util.defType("HostSeriesView$1", "SeriesView", {$t: null, init: function (b, c) {
    this.$t = b;
    this.$type = this.$type.specialize(this.$t);
    $.ig.SeriesView.prototype.init.call(this, c);
    this.ce(c)
}, _ce: null, ce: function (b) {
    if (arguments.length === 1) {
        this._ce = b;
        return b
    } else {
        return this._ce
    }
}, bu: function (c, d) {
    $.ig.SeriesView.prototype.bu.call(this, c, d)
}, ch: function () {
    this.ce().ht().itemsSource(this.ce().itemsSource());
    this.ce().ht().index(this.ce().index());
    this.ce().ht().brush(this.ce().brush());
    this.ce().ht().outline(this.ce().outline());
    this.ce().ht().resolution(this.ce().resolution());
    this.ce().ht().transitionDuration(this.ce().transitionDuration())
}, ci: function () {
    this.ce().ht().itemsSource(this.ce().itemsSource())
}, cj: function () {
    this.ce().ht().resolution(this.ce().resolution())
}, ck: function () {
    this.ce().ht().transitionDuration(this.ce().transitionDuration())
}, $type: new $.ig.Type("HostSeriesView$1", $.ig.SeriesView.prototype.$type)}, true);
$.ig.util.defType("GeographicProportionalSymbolSeriesView", "HostSeriesView$1", {init: function (b) {
    $.ig.HostSeriesView$1.prototype.init.call(this, $.ig.BubbleSeries.prototype.$type, b);
    this.cm(b)
}, _cm: null, cm: function (b) {
    if (arguments.length === 1) {
        this._cm = b;
        return b
    } else {
        return this._cm
    }
}, ch: function () {
    $.ig.HostSeriesView$1.prototype.ch.call(this);
    this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
    this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
    this.cm().ht().markerType(this.cm().markerType());
    this.cm().ht().markerTemplate(this.cm().markerTemplate());
    this.cm().ht().radiusMemberPath(this.cm().radiusMemberPath());
    this.cm().ht().radiusScale(this.cm().radiusScale());
    this.cm().ht().labelMemberPath(this.cm().labelMemberPath());
    this.cm().ht().fillMemberPath(this.cm().fillMemberPath());
    this.cm().ht().fillScale(this.cm().fillScale())
}, cp: function () {
    this.cm().ht().xMemberPath(this.cm().longitudeMemberPath())
}, cq: function () {
    this.cm().ht().yMemberPath(this.cm().latitudeMemberPath())
}, cr: function () {
    this.cm().ht().markerType(this.cm().markerType())
}, cs: function () {
    this.cm().ht().markerTemplate(this.cm().markerTemplate())
}, ct: function () {
    this.cm().ht().maximumMarkers(this.cm().maximumMarkers())
}, cu: function () {
    this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis())
}, cv: function () {
    this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis())
}, cw: function () {
    if (this.cm().seriesViewer() == null) {
        this.cm().ht().xAxis(null);
        this.cm().ht().yAxis(null);
        return
    }
    this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
    this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis())
}, cx: function () {
    this.cm().ht().markerCollisionAvoidance(this.cm().markerCollisionAvoidance())
}, cy: function () {
    this.cm().ht().markerBrush(this.cm().markerBrush())
}, cz: function () {
    this.cm().ht().markerOutline(this.cm().markerOutline())
}, c0: function () {
    this.cm().ht().radiusMemberPath(this.cm().radiusMemberPath())
}, c1: function () {
    this.cm().ht().radiusScale(this.cm().radiusScale())
}, c2: function () {
    this.cm().ht().labelMemberPath(this.cm().labelMemberPath())
}, c3: function () {
    this.cm().ht().fillScale(this.cm().fillScale())
}, c4: function () {
    this.cm().ht().fillMemberPath(this.cm().fillMemberPath())
}, $type: new $.ig.Type("GeographicProportionalSymbolSeriesView", $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.BubbleSeries.prototype.$type))}, true);
$.ig.util.defType("GeographicMapSeriesHost$1", "Series", {$t: null, init: function (a) {
    this.$t = a;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Series.prototype.init.call(this);
    this.ht(this.hy())
}, hq: null, ht: function (c) {
    if (arguments.length === 1) {
        var d = this.ht() != c;
        if (d) {
            this.hq = c;
            this.hx()
        }
        return c
    } else {
        return this.hq
    }
}, hx: function () {
    this.e9(this.ht());
    this.hu().ch()
}, eh: function (b) {
    return this.ei(this.ht(), b)
}, hy: function () {
}, ed: function () {
    return new $.ig.HostSeriesView$1(this.$t, this)
}, ea: function (b) {
    $.ig.Series.prototype.ea.call(this, b);
    this.hu(b)
}, _hu: null, hu: function (b) {
    if (arguments.length === 1) {
        this._hu = b;
        return b
    } else {
        return this._hu
    }
}, visibleFromScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicMapSeriesHost$1.prototype.visibleFromScaleProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicMapSeriesHost$1.prototype.visibleFromScaleProperty)
    }
}, e6: function (g, h, i, j) {
    var f = this;
    $.ig.Series.prototype.e6.call(this, g, h, i, j);
    switch (h) {
        case $.ig.Series.prototype.bc:
            this.ht().seriesViewer(this.seriesViewer());
            if (i != null) {
                (i).removeSeries(this.ht())
            }
            if (j != null) {
                this.seriesViewer().attachSeries(this.ht())
            }
            this.ht().provideViewport(this.d6());
            this.ht().index(this.index());
            var k = $.ig.util.cast($.ig.SeriesViewer.prototype.$type, j);
            if (k != null) {
                k.actualWindowRectChanged = $.ig.Delegate.prototype.remove(k.actualWindowRectChanged, this.h2.on(this))
            }
            if (this.seriesViewer() != null) {
                this.seriesViewer().actualWindowRectChanged = $.ig.Delegate.prototype.combine(this.seriesViewer().actualWindowRectChanged, this.h2.on(this))
            }
            this.h1();
            break;
        case $.ig.Series.prototype.bb:
            this.ht().syncLink(this.syncLink());
            break;
        case $.ig.GeographicMapSeriesHost$1.prototype.hp:
            this.h1();
            break;
        case $.ig.GeographicMapSeriesHost$1.prototype.bl:
            this.ht().index(this.index());
            break;
        case $.ig.GeographicMapSeriesHost$1.prototype.bd:
            this.hu().ci();
            break;
        case $.ig.GeographicMapSeriesHost$1.prototype.bp:
            this.hu().cj();
            break;
        case $.ig.GeographicMapSeriesHost$1.prototype.bn:
            this.hu().ck();
            break
    }
}, h1: function () {
    if (this.seriesViewer() == null || this.ht() == null) {
        return
    }
    if (this.seriesViewer().actualWindowRect().width() > this.visibleFromScale()) {
        this.ht().__visibility = $.ig.Visibility.prototype.collapsed
    } else {
        this.ht().__visibility = $.ig.Visibility.prototype.visible
    }
}, h2: function (c, d) {
    this.h1()
}, renderSeries: function (b) {
    $.ig.Series.prototype.renderSeries.call(this, b);
    if (this.ht() != null) {
        this.ht().renderSeries(b)
    }
}, getHitDataContext: function (b) {
    return this.ht().getHitDataContext(b)
}, styleUpdated: function () {
    $.ig.Series.prototype.styleUpdated.call(this);
    this.ht().styleUpdated()
}, coercionMethods: function (b) {
    if (arguments.length === 1) {
        this.__coercionMethods = b;
        this.ht().coercionMethods(b);
        return b
    } else {
        return this.__coercionMethods
    }
}, $type: new $.ig.Type("GeographicMapSeriesHost$1", $.ig.Series.prototype.$type)}, true);
$.ig.util.defType("GeographicXYTriangulatingSeries", "GeographicMapSeriesHost$1", {init: function () {
    $.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.XYTriangulatingSeries.prototype.$type)
}, ed: function () {
    return new $.ig.GeographicXYTriangulatingSeriesView(this)
}, ea: function (b) {
    $.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, b);
    this.ii(b)
}, _ii: null, ii: function (b) {
    if (arguments.length === 1) {
        this._ii = b;
        return b
    } else {
        return this._ii
    }
}, longitudeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicXYTriangulatingSeries.prototype.longitudeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicXYTriangulatingSeries.prototype.longitudeMemberPathProperty)
    }
}, latitudeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicXYTriangulatingSeries.prototype.latitudeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicXYTriangulatingSeries.prototype.latitudeMemberPathProperty)
    }
}, trianglesSource: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicXYTriangulatingSeries.prototype.trianglesSourceProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicXYTriangulatingSeries.prototype.trianglesSourceProperty)
    }
}, triangleVertexMemberPath1: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath1Property, b);
        return b
    } else {
        return this.b($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath1Property)
    }
}, triangleVertexMemberPath2: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath2Property, b);
        return b
    } else {
        return this.b($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath2Property)
    }
}, triangleVertexMemberPath3: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath3Property, b);
        return b
    } else {
        return this.b($.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath3Property)
    }
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.Series.prototype.bc:
            this.ii().cp();
            break;
        case $.ig.GeographicXYTriangulatingSeries.prototype.h4:
            this.ii().cq();
            break;
        case $.ig.GeographicXYTriangulatingSeries.prototype.h5:
            this.ii().cr();
            break;
        case $.ig.GeographicXYTriangulatingSeries.prototype.h6:
            this.ii().cs();
            break;
        case $.ig.GeographicXYTriangulatingSeries.prototype.h7:
            this.ii().ct();
            break;
        case $.ig.GeographicXYTriangulatingSeries.prototype.h8:
            this.ii().cu();
            break;
        case $.ig.GeographicXYTriangulatingSeries.prototype.h9:
            this.ii().cv();
            break
    }
}, $type: new $.ig.Type("GeographicXYTriangulatingSeries", $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.XYTriangulatingSeries.prototype.$type))}, true);
$.ig.util.defType("GeographicContourLineSeries", "GeographicXYTriangulatingSeries", {init: function () {
    $.ig.GeographicXYTriangulatingSeries.prototype.init.call(this);
    this.a3($.ig.GeographicContourLineSeries.prototype.$type)
}, hx: function () {
    var a = this;
    $.ig.GeographicMapSeriesHost$1.prototype.hx.call(this);
    this.ht().d($.ig.ContourLineSeries.prototype.valueMemberPathProperty, (function () {
        var b = new $.ig.Binding(1, $.ig.GeographicContourLineSeries.prototype.is);
        b.d(a);
        return b
    }()));
    this.ht().d($.ig.ContourLineSeries.prototype.fillScaleProperty, (function () {
        var b = new $.ig.Binding(1, $.ig.GeographicContourLineSeries.prototype.it);
        b.d(a);
        return b
    }()))
}, _i1: null, i1: function (b) {
    if (arguments.length === 1) {
        this._i1 = b;
        return b
    } else {
        return this._i1
    }
}, hy: function () {
    this.i1(new $.ig.ContourLineSeries());
    this.i1().triangulationStatusChanged = $.ig.Delegate.prototype.combine(this.i1().triangulationStatusChanged, this.i5.on(this));
    return this.i1()
}, i5: function (c, d) {
    if (this.triangulationStatusChanged != null) {
        this.triangulationStatusChanged(this, d)
    }
}, valueMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicContourLineSeries.prototype.valueMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicContourLineSeries.prototype.valueMemberPathProperty)
    }
}, fillScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicContourLineSeries.prototype.fillScaleProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicContourLineSeries.prototype.fillScaleProperty)
    }
}, ed: function () {
    return new $.ig.GeographicContourLineSeriesView(this)
}, ea: function (b) {
    $.ig.GeographicXYTriangulatingSeries.prototype.ea.call(this, b);
    this.i2(b)
}, _i2: null, i2: function (b) {
    if (arguments.length === 1) {
        this._i2 = b;
        return b
    } else {
        return this._i2
    }
}, valueResolver: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicContourLineSeries.prototype.valueResolverProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicContourLineSeries.prototype.valueResolverProperty)
    }
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.GeographicXYTriangulatingSeries.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.GeographicContourLineSeries.prototype.it:
            this.i2().c0();
            break;
        case $.ig.GeographicContourLineSeries.prototype.is:
            this.i2().c1();
            break;
        case $.ig.GeographicContourLineSeries.prototype.iu:
            this.i1().valueResolver(this.valueResolver());
            break;
        case $.ig.Series.prototype.bx:
            this.i1().thickness(this.thickness());
            break;
        case $.ig.Series.prototype.bz:
            this.i1().dashArray(this.dashArray());
            break;
        case $.ig.Series.prototype.by:
            this.i1().dashCap(this.dashCap());
            break;
        case $.ig.Series.prototype.bw:
            this.i1().miterLimit(this.miterLimit());
            break
    }
}, triangulationStatusChanged: null, $type: new $.ig.Type("GeographicContourLineSeries", $.ig.GeographicXYTriangulatingSeries.prototype.$type)}, true);
$.ig.util.defType("GeographicXYTriangulatingSeriesView", "HostSeriesView$1", {init: function (b) {
    $.ig.HostSeriesView$1.prototype.init.call(this, $.ig.XYTriangulatingSeries.prototype.$type, b);
    this.cm(b)
}, _cm: null, cm: function (b) {
    if (arguments.length === 1) {
        this._cm = b;
        return b
    } else {
        return this._cm
    }
}, ch: function () {
    $.ig.HostSeriesView$1.prototype.ch.call(this);
    this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
    this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
    this.cm().ht().trianglesSource(this.cm().trianglesSource());
    this.cm().ht().triangleVertexMemberPath1(this.cm().triangleVertexMemberPath1());
    this.cm().ht().triangleVertexMemberPath2(this.cm().triangleVertexMemberPath2());
    this.cm().ht().triangleVertexMemberPath3(this.cm().triangleVertexMemberPath3())
}, cp: function () {
    if (this.cm().seriesViewer() == null) {
        this.cm().ht().xAxis(null);
        this.cm().ht().yAxis(null);
        return
    }
    this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
    this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis())
}, cq: function () {
    this.cm().ht().xMemberPath(this.cm().longitudeMemberPath())
}, cr: function () {
    this.cm().ht().yMemberPath(this.cm().latitudeMemberPath())
}, cs: function () {
    this.cm().ht().trianglesSource(this.cm().trianglesSource())
}, ct: function () {
    this.cm().ht().triangleVertexMemberPath1(this.cm().triangleVertexMemberPath1())
}, cu: function () {
    this.cm().ht().triangleVertexMemberPath2(this.cm().triangleVertexMemberPath2())
}, cv: function () {
    this.cm().ht().triangleVertexMemberPath3(this.cm().triangleVertexMemberPath3())
}, $type: new $.ig.Type("GeographicXYTriangulatingSeriesView", $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.XYTriangulatingSeries.prototype.$type))}, true);
$.ig.util.defType("GeographicContourLineSeriesView", "GeographicXYTriangulatingSeriesView", {init: function (b) {
    $.ig.GeographicXYTriangulatingSeriesView.prototype.init.call(this, b);
    this.cx(b)
}, _cx: null, cx: function (b) {
    if (arguments.length === 1) {
        this._cx = b;
        return b
    } else {
        return this._cx
    }
}, ch: function () {
    $.ig.GeographicXYTriangulatingSeriesView.prototype.ch.call(this);
    if (this.cx().ht() != null) {
        this.cx().i1().fillScale(this.cx().fillScale());
        this.cx().i1().valueMemberPath(this.cx().valueMemberPath())
    }
}, c0: function () {
    if (this.cx().i1() != null) {
        this.cx().i1().fillScale(this.cx().fillScale())
    }
}, c1: function () {
    if (this.cx().i1() != null) {
        this.cx().i1().valueMemberPath(this.cx().valueMemberPath())
    }
}, $type: new $.ig.Type("GeographicContourLineSeriesView", $.ig.GeographicXYTriangulatingSeriesView.prototype.$type)}, true);
$.ig.util.defType("GeographicHighDensityScatterSeries", "GeographicMapSeriesHost$1", {init: function () {
    $.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.HighDensityScatterSeries.prototype.$type);
    this.a3($.ig.GeographicHighDensityScatterSeries.prototype.$type)
}, ed: function () {
    return new $.ig.GeographicHighDensityScatterSeriesView(this)
}, ea: function (b) {
    $.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, b);
    this.io(b)
}, _io: null, io: function (b) {
    if (arguments.length === 1) {
        this._io = b;
        return b
    } else {
        return this._io
    }
}, hy: function () {
    return new $.ig.HighDensityScatterSeries()
}, _ip: null, ip: function (b) {
    if (arguments.length === 1) {
        this._ip = b;
        return b
    } else {
        return this._ip
    }
}, latitudeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicHighDensityScatterSeries.prototype.latitudeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicHighDensityScatterSeries.prototype.latitudeMemberPathProperty)
    }
}, longitudeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicHighDensityScatterSeries.prototype.longitudeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicHighDensityScatterSeries.prototype.longitudeMemberPathProperty)
    }
}, useBruteForce: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicHighDensityScatterSeries.prototype.useBruteForceProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicHighDensityScatterSeries.prototype.useBruteForceProperty)
    }
}, progressiveLoad: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicHighDensityScatterSeries.prototype.progressiveLoadProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicHighDensityScatterSeries.prototype.progressiveLoadProperty)
    }
}, mouseOverEnabled: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicHighDensityScatterSeries.prototype.mouseOverEnabledProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicHighDensityScatterSeries.prototype.mouseOverEnabledProperty)
    }
}, useSquareCutoffStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicHighDensityScatterSeries.prototype.useSquareCutoffStyleProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicHighDensityScatterSeries.prototype.useSquareCutoffStyleProperty)
    }
}, heatMinimum: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicHighDensityScatterSeries.prototype.heatMinimumProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicHighDensityScatterSeries.prototype.heatMinimumProperty)
    }
}, heatMaximum: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicHighDensityScatterSeries.prototype.heatMaximumProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicHighDensityScatterSeries.prototype.heatMaximumProperty)
    }
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.Series.prototype.bc:
            this.io().cx();
            break;
        case $.ig.GeographicHighDensityScatterSeries.prototype.h5:
            this.io().cp();
            break;
        case $.ig.GeographicHighDensityScatterSeries.prototype.h4:
            this.io().cq();
            break;
        case $.ig.GeographicHighDensityScatterSeries.prototype.h6:
            this.io().cr();
            break;
        case $.ig.GeographicHighDensityScatterSeries.prototype.h7:
            this.io().cs();
            break;
        case $.ig.GeographicHighDensityScatterSeries.prototype.h8:
            this.io().ct();
            break;
        case $.ig.GeographicHighDensityScatterSeries.prototype.h9:
            this.io().cu();
            break;
        case $.ig.XamGeographicMap.prototype.kh:
            this.io().cy();
            break;
        case $.ig.XamGeographicMap.prototype.ki:
            this.io().cz();
            break;
        case $.ig.GeographicHighDensityScatterSeries.prototype.ia:
            this.io().cv();
            break;
        case $.ig.GeographicHighDensityScatterSeries.prototype.ib:
            this.io().cw();
            break
    }
}, d3: function () {
    return true
}, $type: new $.ig.Type("GeographicHighDensityScatterSeries", $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.HighDensityScatterSeries.prototype.$type))}, true);
$.ig.util.defType("GeographicHighDensityScatterSeriesView", "HostSeriesView$1", {init: function (b) {
    $.ig.HostSeriesView$1.prototype.init.call(this, $.ig.HighDensityScatterSeries.prototype.$type, b);
    this.cm(b)
}, _cm: null, cm: function (b) {
    if (arguments.length === 1) {
        this._cm = b;
        return b
    } else {
        return this._cm
    }
}, ch: function () {
    $.ig.HostSeriesView$1.prototype.ch.call(this);
    this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
    this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
    this.cm().ht().useBruteForce(this.cm().useBruteForce());
    this.cm().ht().progressiveLoad(this.cm().progressiveLoad());
    this.cm().ht().mouseOverEnabled(this.cm().mouseOverEnabled());
    this.cm().ht().useSquareCutoffStyle(this.cm().useSquareCutoffStyle());
    this.cm().ht().heatMinimum(this.cm().heatMinimum());
    this.cm().ht().heatMaximum(this.cm().heatMaximum())
}, cp: function () {
    this.cm().ht().xMemberPath(this.cm().longitudeMemberPath())
}, cq: function () {
    this.cm().ht().yMemberPath(this.cm().latitudeMemberPath())
}, cr: function () {
    this.cm().ht().useBruteForce(this.cm().useBruteForce())
}, cs: function () {
    this.cm().ht().progressiveLoad(this.cm().progressiveLoad())
}, ct: function () {
    this.cm().ht().mouseOverEnabled(this.cm().mouseOverEnabled())
}, cu: function () {
    this.cm().ht().useSquareCutoffStyle(this.cm().useSquareCutoffStyle())
}, cv: function () {
    this.cm().ht().heatMinimum(this.cm().heatMinimum())
}, cw: function () {
    this.cm().ht().heatMaximum(this.cm().heatMaximum())
}, cx: function () {
    if (this.cm().seriesViewer() == null) {
        this.cm().ht().xAxis(null);
        this.cm().ht().yAxis(null);
        return
    }
    this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
    this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis())
}, cy: function () {
    this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis())
}, cz: function () {
    this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis())
}, $type: new $.ig.Type("GeographicHighDensityScatterSeriesView", $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.HighDensityScatterSeries.prototype.$type))}, true);
$.ig.util.defType("GeographicShapeSeriesBase", "GeographicMapSeriesHost$1", {init: function () {
    $.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.ShapeSeriesBase.prototype.$type)
}, ed: function () {
    return new $.ig.GeographicShapeSeriesBaseView(this)
}, _id: null, id: function (b) {
    if (arguments.length === 1) {
        this._id = b;
        return b
    } else {
        return this._id
    }
}, ea: function (b) {
    $.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, b);
    this.id(b)
}, shapeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeriesBase.prototype.shapeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeriesBase.prototype.shapeMemberPathProperty)
    }
}, shapeStyleSelector: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeriesBase.prototype.shapeStyleSelectorProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeriesBase.prototype.shapeStyleSelectorProperty)
    }
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.Series.prototype.bc:
            this.id().cp();
            break;
        case"ActualBrush":
            this.id().cq();
            break;
        case"ActualOutline":
            this.id().cr();
            break;
        case $.ig.ShapeSeries.prototype.hp:
            this.id().cs();
            break;
        case $.ig.GeographicShapeSeriesBase.prototype.h5:
            this.id().ct();
            break;
        case $.ig.GeographicShapeSeriesBase.prototype.h6:
            this.id().cu();
            break;
        case $.ig.GeographicShapeSeriesBase.prototype.bx:
            this.id().cv();
            break;
        case $.ig.GeographicShapeSeriesBase.prototype.h7:
            this.id().cw();
            break
    }
}, shapeStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeriesBase.prototype.shapeStyleProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeriesBase.prototype.shapeStyleProperty)
    }
}, shapeFilterResolution: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeriesBase.prototype.shapeFilterResolutionProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeriesBase.prototype.shapeFilterResolutionProperty)
    }
}, d3: function () {
    return true
}, $type: new $.ig.Type("GeographicShapeSeriesBase", $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.ShapeSeriesBase.prototype.$type))}, true);
$.ig.util.defType("GeographicPolylineSeries", "GeographicShapeSeriesBase", {init: function () {
    $.ig.GeographicShapeSeriesBase.prototype.init.call(this);
    this.a3($.ig.GeographicPolylineSeries.prototype.$type)
}, hy: function () {
    return new $.ig.PolylineSeries()
}, $type: new $.ig.Type("GeographicPolylineSeries", $.ig.GeographicShapeSeriesBase.prototype.$type)}, true);
$.ig.util.defType("GeographicProportionalSymbolSeries", "GeographicMapSeriesHost$1", {init: function () {
    $.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.BubbleSeries.prototype.$type);
    this.a3($.ig.GeographicProportionalSymbolSeries.prototype.$type)
}, ed: function () {
    return new $.ig.GeographicProportionalSymbolSeriesView(this)
}, ea: function (b) {
    $.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, b);
    this.iy(b)
}, _iy: null, iy: function (b) {
    if (arguments.length === 1) {
        this._iy = b;
        return b
    } else {
        return this._iy
    }
}, hy: function () {
    return new $.ig.BubbleSeries()
}, _iz: null, iz: function (b) {
    if (arguments.length === 1) {
        this._iz = b;
        return b
    } else {
        return this._iz
    }
}, latitudeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.latitudeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.latitudeMemberPathProperty)
    }
}, longitudeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.longitudeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.longitudeMemberPathProperty)
    }
}, markerType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerTypeProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerTypeProperty)
    }
}, markerCollisionAvoidance: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerCollisionAvoidanceProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerCollisionAvoidanceProperty)
    }
}, markerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerTemplateProperty)
    }
}, markerBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerBrushProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerBrushProperty)
    }
}, markerOutline: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.markerOutlineProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.markerOutlineProperty)
    }
}, maximumMarkers: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.maximumMarkersProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.maximumMarkersProperty)
    }
}, radiusMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.radiusMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.radiusMemberPathProperty)
    }
}, radiusScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.radiusScaleProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.radiusScaleProperty)
    }
}, labelMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.labelMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.labelMemberPathProperty)
    }
}, fillMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.fillMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.fillMemberPathProperty)
    }
}, fillScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicProportionalSymbolSeries.prototype.fillScaleProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicProportionalSymbolSeries.prototype.fillScaleProperty)
    }
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.Series.prototype.bc:
            this.iy().cw();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.h5:
            this.iy().cp();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.h4:
            this.iy().cq();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.h8:
            this.iy().cx();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.h6:
            this.iy().cr();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.h7:
            this.iy().cs();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.ib:
            this.iy().ct();
            break;
        case $.ig.XamGeographicMap.prototype.kh:
            this.iy().cu();
            break;
        case $.ig.XamGeographicMap.prototype.ki:
            this.iy().cv();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.h9:
            this.iy().cy();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.ia:
            this.iy().cz();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.ic:
            this.iy().c0();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.id:
            this.iy().c1();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.ie:
            this.iy().c2();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.ig:
            this.iy().c4();
            break;
        case $.ig.GeographicProportionalSymbolSeries.prototype.ih:
            this.iy().c3();
            break
    }
}, $type: new $.ig.Type("GeographicProportionalSymbolSeries", $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.BubbleSeries.prototype.$type))}, true);
$.ig.util.defType("GeographicScatterAreaSeries", "GeographicXYTriangulatingSeries", {init: function () {
    $.ig.GeographicXYTriangulatingSeries.prototype.init.call(this);
    this.a3($.ig.GeographicScatterAreaSeries.prototype.$type)
}, colorMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicScatterAreaSeries.prototype.colorMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicScatterAreaSeries.prototype.colorMemberPathProperty)
    }
}, iu: null, colorScale: function (d) {
    if (arguments.length === 1) {
        var e = this.iu != d;
        if (e) {
            var f = this.iu;
            this.iu = d;
            this.ej($.ig.GeographicScatterAreaSeries.prototype.it, f, this.iu);
            if (this.iz() != null) {
                this.iz().colorScale(d)
            }
        }
        return d
    } else {
        return this.iu
    }
}, _iz: null, iz: function (b) {
    if (arguments.length === 1) {
        this._iz = b;
        return b
    } else {
        return this._iz
    }
}, hy: function () {
    this.iz(new $.ig.ScatterAreaSeries());
    this.iz().triangulationStatusChanged = $.ig.Delegate.prototype.combine(this.iz().triangulationStatusChanged, this.i3.on(this));
    return this.iz()
}, i3: function (c, d) {
    if (this.triangulationStatusChanged != null) {
        this.triangulationStatusChanged(this, d)
    }
}, ed: function () {
    return new $.ig.GeographicScatterAreaSeriesView(this)
}, ea: function (b) {
    $.ig.GeographicXYTriangulatingSeries.prototype.ea.call(this, b);
    this.i0(b)
}, _i0: null, i0: function (b) {
    if (arguments.length === 1) {
        this._i0 = b;
        return b
    } else {
        return this._i0
    }
}, e6: function (e, f, g, h) {
    $.ig.GeographicXYTriangulatingSeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.GeographicScatterAreaSeries.prototype.is:
            this.i0().c0();
            break;
        case $.ig.GeographicScatterAreaSeries.prototype.it:
            this.i0().c1();
            break
    }
}, triangulationStatusChanged: null, d3: function () {
    return true
}, $type: new $.ig.Type("GeographicScatterAreaSeries", $.ig.GeographicXYTriangulatingSeries.prototype.$type)}, true);
$.ig.util.defType("GeographicScatterAreaSeriesView", "GeographicXYTriangulatingSeriesView", {init: function (b) {
    $.ig.GeographicXYTriangulatingSeriesView.prototype.init.call(this, b);
    this.cx(b)
}, _cx: null, cx: function (b) {
    if (arguments.length === 1) {
        this._cx = b;
        return b
    } else {
        return this._cx
    }
}, ch: function () {
    $.ig.GeographicXYTriangulatingSeriesView.prototype.ch.call(this);
    if (this.cx().iz() != null) {
        this.cx().iz().colorMemberPath(this.cx().colorMemberPath());
        this.cx().iz().colorScale(this.cx().colorScale())
    }
}, c0: function () {
    if (this.cx().iz() != null) {
        this.cx().iz().colorMemberPath(this.cx().colorMemberPath())
    }
}, c1: function () {
    if (this.cx().iz() != null) {
        this.cx().iz().colorScale(this.cx().colorScale())
    }
}, $type: new $.ig.Type("GeographicScatterAreaSeriesView", $.ig.GeographicXYTriangulatingSeriesView.prototype.$type)}, true);
$.ig.util.defType("GeographicShapeSeries", "GeographicShapeSeriesBase", {init: function () {
    $.ig.GeographicShapeSeriesBase.prototype.init.call(this);
    this.a3($.ig.GeographicShapeSeries.prototype.$type)
}, ed: function () {
    return new $.ig.GeographicShapeSeriesView(this)
}, _iy: null, iy: function (b) {
    if (arguments.length === 1) {
        this._iy = b;
        return b
    } else {
        return this._iy
    }
}, ea: function (b) {
    $.ig.GeographicShapeSeriesBase.prototype.ea.call(this, b);
    this.iy(b)
}, hy: function () {
    return new $.ig.ShapeSeries()
}, markerType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeries.prototype.markerTypeProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeries.prototype.markerTypeProperty)
    }
}, markerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeries.prototype.markerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeries.prototype.markerTemplateProperty)
    }
}, markerBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeries.prototype.markerBrushProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeries.prototype.markerBrushProperty)
    }
}, markerOutline: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeries.prototype.markerOutlineProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeries.prototype.markerOutlineProperty)
    }
}, markerStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeries.prototype.markerStyleProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeries.prototype.markerStyleProperty)
    }
}, markerCollisionAvoidance: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicShapeSeries.prototype.markerCollisionAvoidanceProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicShapeSeries.prototype.markerCollisionAvoidanceProperty)
    }
}, e6: function (e, f, g, h) {
    $.ig.GeographicShapeSeriesBase.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.GeographicShapeSeries.prototype.il:
            this.iy().c1();
            break;
        case $.ig.GeographicShapeSeries.prototype.iq:
            this.iy().c2();
            break;
        case $.ig.GeographicShapeSeries.prototype.ik:
            this.iy().c3();
            break;
        case $.ig.GeographicShapeSeries.prototype.im:
            this.iy().c4();
            break;
        case $.ig.GeographicShapeSeries.prototype.io:
            this.iy().c5();
            break;
        case $.ig.GeographicShapeSeries.prototype.ip:
            this.iy().c6();
            break
    }
}, $type: new $.ig.Type("GeographicShapeSeries", $.ig.GeographicShapeSeriesBase.prototype.$type)}, true);
$.ig.util.defType("GeographicShapeSeriesBaseView", "HostSeriesView$1", {init: function (b) {
    $.ig.HostSeriesView$1.prototype.init.call(this, $.ig.ShapeSeriesBase.prototype.$type, b);
    this.cm(b)
}, _cm: null, cm: function (b) {
    if (arguments.length === 1) {
        this._cm = b;
        return b
    } else {
        return this._cm
    }
}, ch: function () {
    $.ig.HostSeriesView$1.prototype.ch.call(this);
    this.cm().ht().shapeMemberPath(this.cm().shapeMemberPath());
    this.cm().ht().brush(this.cm().actualBrush());
    this.cm().ht().outline(this.cm().actualOutline())
}, cp: function () {
    if (this.cm().seriesViewer() == null) {
        this.cm().ht().xAxis(null);
        this.cm().ht().yAxis(null);
        return
    }
    this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
    this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis())
}, cq: function () {
    this.cm().ht().brush(this.cm().actualBrush())
}, cr: function () {
    this.cm().ht().outline(this.cm().actualOutline())
}, cs: function () {
    this.cm().ht().shapeMemberPath(this.cm().shapeMemberPath())
}, ct: function () {
    this.cm().ht().shapeStyleSelector(this.cm().shapeStyleSelector())
}, cu: function () {
    this.cm().ht().shapeStyle(this.cm().shapeStyle())
}, cv: function () {
    this.cm().ht().thickness(this.cm().thickness())
}, cw: function () {
    this.cm().ht().shapeFilterResolution(this.cm().shapeFilterResolution())
}, $type: new $.ig.Type("GeographicShapeSeriesBaseView", $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.ShapeSeriesBase.prototype.$type))}, true);
$.ig.util.defType("GeographicShapeSeriesView", "GeographicShapeSeriesBaseView", {init: function (b) {
    $.ig.GeographicShapeSeriesBaseView.prototype.init.call(this, b);
    this.cy(b);
    if (!this.ad()) {
        this.cy().shapeMemberPath("points")
    }
}, _cy: null, cy: function (b) {
    if (arguments.length === 1) {
        this._cy = b;
        return b
    } else {
        return this._cy
    }
}, ch: function () {
    $.ig.GeographicShapeSeriesBaseView.prototype.ch.call(this);
    (this.cy().ht()).markerTemplate(this.cy().markerTemplate());
    (this.cy().ht()).markerCollisionAvoidance(this.cy().markerCollisionAvoidance())
}, c1: function () {
    (this.cy().ht()).markerTemplate(this.cy().markerTemplate())
}, c2: function () {
    (this.cy().ht()).markerCollisionAvoidance(this.cy().markerCollisionAvoidance())
}, c3: function () {
    (this.cy().ht()).markerType(this.cy().markerType())
}, c4: function () {
    (this.cy().ht()).markerBrush(this.cy().markerBrush())
}, c5: function () {
    (this.cy().ht()).markerOutline(this.cy().markerOutline())
}, c6: function () {
    (this.cy().ht()).markerStyle(this.cy().markerStyle())
}, $type: new $.ig.Type("GeographicShapeSeriesView", $.ig.GeographicShapeSeriesBaseView.prototype.$type)}, true);
$.ig.util.defType("GeographicSymbolSeries", "GeographicMapSeriesHost$1", {init: function () {
    $.ig.GeographicMapSeriesHost$1.prototype.init.call(this, $.ig.ScatterSeries.prototype.$type);
    this.a3($.ig.GeographicSymbolSeries.prototype.$type)
}, ed: function () {
    return new $.ig.GeographicSymbolSeriesView(this)
}, ea: function (b) {
    $.ig.GeographicMapSeriesHost$1.prototype.ea.call(this, b);
    this.io(b)
}, _io: null, io: function (b) {
    if (arguments.length === 1) {
        this._io = b;
        return b
    } else {
        return this._io
    }
}, hy: function () {
    return new $.ig.ScatterSeries()
}, _ip: null, ip: function (b) {
    if (arguments.length === 1) {
        this._ip = b;
        return b
    } else {
        return this._ip
    }
}, latitudeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicSymbolSeries.prototype.latitudeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicSymbolSeries.prototype.latitudeMemberPathProperty)
    }
}, longitudeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicSymbolSeries.prototype.longitudeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicSymbolSeries.prototype.longitudeMemberPathProperty)
    }
}, markerType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicSymbolSeries.prototype.markerTypeProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicSymbolSeries.prototype.markerTypeProperty)
    }
}, markerCollisionAvoidance: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicSymbolSeries.prototype.markerCollisionAvoidanceProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicSymbolSeries.prototype.markerCollisionAvoidanceProperty)
    }
}, markerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicSymbolSeries.prototype.markerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicSymbolSeries.prototype.markerTemplateProperty)
    }
}, markerBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicSymbolSeries.prototype.markerBrushProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicSymbolSeries.prototype.markerBrushProperty)
    }
}, markerOutline: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicSymbolSeries.prototype.markerOutlineProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicSymbolSeries.prototype.markerOutlineProperty)
    }
}, maximumMarkers: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.GeographicSymbolSeries.prototype.maximumMarkersProperty, b);
        return b
    } else {
        return this.b($.ig.GeographicSymbolSeries.prototype.maximumMarkersProperty)
    }
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.GeographicMapSeriesHost$1.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.Series.prototype.bc:
            this.io().cw();
            break;
        case $.ig.GeographicSymbolSeries.prototype.h5:
            this.io().cp();
            break;
        case $.ig.GeographicSymbolSeries.prototype.h4:
            this.io().cq();
            break;
        case $.ig.GeographicSymbolSeries.prototype.h8:
            this.io().cx();
            break;
        case $.ig.GeographicSymbolSeries.prototype.h6:
            this.io().cr();
            break;
        case $.ig.GeographicSymbolSeries.prototype.h7:
            this.io().cs();
            break;
        case $.ig.GeographicSymbolSeries.prototype.ib:
            this.io().ct();
            break;
        case $.ig.XamGeographicMap.prototype.kh:
            this.io().cu();
            break;
        case $.ig.XamGeographicMap.prototype.ki:
            this.io().cv();
            break;
        case $.ig.GeographicSymbolSeries.prototype.h9:
            this.io().cy();
            break;
        case $.ig.GeographicSymbolSeries.prototype.ia:
            this.io().cz();
            break
    }
}, $type: new $.ig.Type("GeographicSymbolSeries", $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($.ig.ScatterSeries.prototype.$type))}, true);
$.ig.util.defType("GeographicSymbolSeriesView", "HostSeriesView$1", {init: function (b) {
    $.ig.HostSeriesView$1.prototype.init.call(this, $.ig.ScatterSeries.prototype.$type, b);
    this.cm(b)
}, _cm: null, cm: function (b) {
    if (arguments.length === 1) {
        this._cm = b;
        return b
    } else {
        return this._cm
    }
}, ch: function () {
    $.ig.HostSeriesView$1.prototype.ch.call(this);
    this.cm().ht().xMemberPath(this.cm().longitudeMemberPath());
    this.cm().ht().yMemberPath(this.cm().latitudeMemberPath());
    this.cm().ht().markerType(this.cm().markerType());
    this.cm().ht().markerTemplate(this.cm().markerTemplate())
}, cp: function () {
    this.cm().ht().xMemberPath(this.cm().longitudeMemberPath())
}, cq: function () {
    this.cm().ht().yMemberPath(this.cm().latitudeMemberPath())
}, cr: function () {
    this.cm().ht().markerType(this.cm().markerType())
}, cs: function () {
    this.cm().ht().markerTemplate(this.cm().markerTemplate())
}, ct: function () {
    this.cm().ht().maximumMarkers(this.cm().maximumMarkers())
}, cu: function () {
    this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis())
}, cv: function () {
    this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis())
}, cw: function () {
    if (this.cm().seriesViewer() == null) {
        this.cm().ht().xAxis(null);
        this.cm().ht().yAxis(null);
        return
    }
    this.cm().ht().xAxis((this.cm().seriesViewer()).xAxis());
    this.cm().ht().yAxis((this.cm().seriesViewer()).yAxis())
}, cx: function () {
    this.cm().ht().markerCollisionAvoidance(this.cm().markerCollisionAvoidance())
}, cy: function () {
    this.cm().ht().markerBrush(this.cm().markerBrush())
}, cz: function () {
    this.cm().ht().markerOutline(this.cm().markerOutline())
}, $type: new $.ig.Type("GeographicSymbolSeriesView", $.ig.HostSeriesView$1.prototype.$type.specialize($.ig.ScatterSeries.prototype.$type))}, true);
$.ig.util.defType("XYTriangulatingSeries", "Series", {init: function () {
    $.ig.Series.prototype.init.call(this)
}, xMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XYTriangulatingSeries.prototype.xMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.XYTriangulatingSeries.prototype.xMemberPathProperty)
    }
}, yMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XYTriangulatingSeries.prototype.yMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.XYTriangulatingSeries.prototype.yMemberPathProperty)
    }
}, h3: null, io: function (d) {
    if (arguments.length === 1) {
        var e = this.io() != d;
        if (e) {
            var f = this.io();
            this.h3 = d;
            this.ej($.ig.XYTriangulatingSeries.prototype.hr, f, this.io())
        }
        return d
    } else {
        return this.h3
    }
}, h4: null, ip: function (d) {
    if (arguments.length === 1) {
        var e = this.ip() != d;
        if (e) {
            var f = this.ip();
            this.h4 = d;
            this.ej($.ig.XYTriangulatingSeries.prototype.hs, f, this.ip())
        }
        return d
    } else {
        return this.h4
    }
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XYTriangulatingSeries.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.XYTriangulatingSeries.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XYTriangulatingSeries.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.XYTriangulatingSeries.prototype.yAxisProperty)
    }
}, _iq: null, iq: function (b) {
    if (arguments.length === 1) {
        this._iq = b;
        return b
    } else {
        return this._iq
    }
}, eo: function (c) {
    var d = this.dx() != null && this.is() == null && this.ir() == null && this.io() != null && this.ip() != null && this.io().count() >= 3 && this.ip().count() >= 3 && !this.iq();
    if (d) {
        this.i2();
        this.iq(true)
    }
}, i2: function () {
    this.h5 = new $.ig.Triangulator(this.dx().g(), this.io(), this.ip());
    this.h5.triangulationStatusChanged = $.ig.Delegate.prototype.combine(this.h5.triangulationStatusChanged, this.i4.on(this));
    this.h5.m()
}, i3: function () {
    if (this.h5 == null) {
        return
    }
    this.h5.v();
    this.h5.triangulationStatusChanged = $.ig.Delegate.prototype.remove(this.h5.triangulationStatusChanged, this.i4.on(this));
    this.h5 = null
}, h5: null, triangulationStatusChanged: null, i4: function (e, f) {
    var d = this;
    if (this.triangulationStatusChanged != null) {
        this.triangulationStatusChanged(this, new $.ig.TriangulationStatusEventArgs(f.currentStatus()))
    }
    if (f.currentStatus() >= 100) {
        if (this.h5 == null) {
            return
        }
        this.h5.triangulationStatusChanged = $.ig.Delegate.prototype.remove(this.h5.triangulationStatusChanged, this.i4.on(this));
        this.ir(this.h5.r());
        this.h5 = null;
        var g = (function () {
            var a = new $.ig.FastItemsSource();
            a.f(d.ir());
            return a
        }());
        this.it(this.i5(g, "v1"));
        this.iu(this.i5(g, "v2"));
        this.iv(this.i5(g, "v3"));
        this.renderSeries(false)
    }
}, i5: function (e, f) {
    if (f == null) {
        return e.aa(null, null)
    }
    var g = null;
    var h = $.ig.SeriesViewer.prototype.getCoercionMethod(f, this.coercionMethods());
    f = h.c();
    g = h.d();
    return e.aa(f, g)
}, e6: function (j, k, l, m) {
    var i = this;
    $.ig.Series.prototype.e6.call(this, j, k, l, m);
    switch (k) {
        case $.ig.XYTriangulatingSeries.prototype.be:
            var n = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, l);
            if (n != null) {
                n.ac(this.io());
                n.ac(this.ip());
                this.io(null);
                this.ip(null)
            }
            this.i6();
            var o = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, m);
            if (o != null) {
                this.io(this.gs(this.xMemberPath()));
                this.ip(this.gs(this.yMemberPath()))
            }
            this.renderSeries(false);
            break;
        case $.ig.XYTriangulatingSeries.prototype.hp:
            if (this.dx() != null) {
                this.dx().ac(this.io());
                this.io(this.gs(this.xMemberPath()))
            }
            this.i6();
            this.renderSeries(false);
            break;
        case $.ig.XYTriangulatingSeries.prototype.hq:
            if (this.dx() != null) {
                this.dx().ac(this.ip());
                this.ip(this.gs(this.yMemberPath()))
            }
            this.i6();
            this.renderSeries(false);
            break;
        case $.ig.XYTriangulatingSeries.prototype.ht:
            if (l != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, l)).deregisterSeries(this)
            }
            if (m != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, m)).registerSeries(this)
            }
            if ((this.xAxis() != null && !this.xAxis().updateRange()) || (m == null && l != null)) {
                this.renderSeries(false)
            }
            break;
        case $.ig.XYTriangulatingSeries.prototype.hu:
            if (l != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, l)).deregisterSeries(this)
            }
            if (m != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, m)).registerSeries(this)
            }
            if ((this.yAxis() != null && !this.yAxis().updateRange()) || (m == null && l != null)) {
                this.renderSeries(false)
            }
            break;
        case $.ig.XYTriangulatingSeries.prototype.hv:
            if (this.trianglesSource() != null) {
                this.i3();
                this.is((function () {
                    var a = new $.ig.FastItemsSource();
                    a.f(i.trianglesSource());
                    return a
                }()))
            } else {
                this.is(null)
            }
            break;
        case $.ig.XYTriangulatingSeries.prototype.hw:
            var p = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, l);
            if (p != null) {
                p.ac(this.it());
                p.ac(this.iu());
                p.ac(this.iv());
                this.it(null);
                this.iu(null);
                this.iv(null)
            }
            var q = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, m);
            if (q != null) {
                this.it(this.i5(q, this.triangleVertexMemberPath1()));
                this.iu(this.i5(q, this.triangleVertexMemberPath2()));
                this.iv(this.i5(q, this.triangleVertexMemberPath3()))
            }
            this.renderSeries(false);
            break;
        case $.ig.XYTriangulatingSeries.prototype.hx:
            if (this.is() != null) {
                this.is().ac(this.it());
                this.it(this.i5(this.is(), this.triangleVertexMemberPath1()))
            }
            this.renderSeries(false);
            break;
        case $.ig.XYTriangulatingSeries.prototype.hy:
            if (this.is() != null) {
                this.is().ac(this.iu());
                this.iu(this.i5(this.is(), this.triangleVertexMemberPath2()))
            }
            this.renderSeries(false);
            break;
        case $.ig.XYTriangulatingSeries.prototype.hz:
            if (this.is() != null) {
                this.is().ac(this.iv());
                this.iv(this.i5(this.is(), this.triangleVertexMemberPath3()))
            }
            this.renderSeries(false);
            break
    }
}, es: function (d, e, f) {
    return $.ig.Series.prototype.es.call(this, d, e, f) && this.dx() != null && this.xAxis() != null && this.yAxis() != null && d.width() > 0 && d.height() > 0 && this.it() != null && this.it().count() > 0 && this.iu() != null && this.iu().count() > 0 && this.iv() != null && this.iv().count() > 0 && this.io() != null && this.io().count() > 0 && this.ip() != null && this.ip().count() > 0
}, i6: function () {
    if (this.trianglesSource() == null) {
        this.ir(null);
        this.it(null);
        this.iu(null);
        this.iv(null);
        this.iq(false)
    }
}, _ir: null, ir: function (b) {
    if (arguments.length === 1) {
        this._ir = b;
        return b
    } else {
        return this._ir
    }
}, fs: function () {
    $.ig.Series.prototype.fs.call(this);
    if (this.xAxis() != null) {
        this.xAxis().renderAxis()
    }
    if (this.yAxis() != null) {
        this.yAxis().renderAxis()
    }
}, fc: function (e, f, g, h) {
    $.ig.Series.prototype.fc.call(this, e, f, g, h);
    this.i6();
    this.renderSeries(false)
}, em: function (b) {
    if (b != null && b == this.xAxis() && this.io() != null) {
        return new $.ig.AxisRange(this.io().minimum(), this.io().maximum())
    }
    if (b != null && b == this.yAxis() && this.ip() != null) {
        return new $.ig.AxisRange(this.ip().minimum(), this.ip().maximum())
    }
    return null
}, ey: function (c, d) {
    this.renderSeries(false)
}, ez: function (c, d) {
    this.renderSeries(false)
}, trianglesSource: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XYTriangulatingSeries.prototype.trianglesSourceProperty, b);
        return b
    } else {
        return this.b($.ig.XYTriangulatingSeries.prototype.trianglesSourceProperty)
    }
}, is: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XYTriangulatingSeries.prototype.h7, b);
        return b
    } else {
        return this.b($.ig.XYTriangulatingSeries.prototype.h7)
    }
}, triangleVertexMemberPath1: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath1Property, b);
        return b
    } else {
        return this.b($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath1Property)
    }
}, triangleVertexMemberPath2: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath2Property, b);
        return b
    } else {
        return this.b($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath2Property)
    }
}, triangleVertexMemberPath3: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath3Property, b);
        return b
    } else {
        return this.b($.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath3Property)
    }
}, h8: null, it: function (d) {
    if (arguments.length === 1) {
        var e = this.it() != d;
        if (e) {
            var f = this.it();
            this.h8 = d;
            this.ej($.ig.XYTriangulatingSeries.prototype.h0, f, this.it())
        }
        return d
    } else {
        return this.h8
    }
}, h9: null, iu: function (d) {
    if (arguments.length === 1) {
        var e = this.iu() != d;
        if (e) {
            var f = this.iu();
            this.h9 = d;
            this.ej($.ig.XYTriangulatingSeries.prototype.h1, f, this.iu())
        }
        return d
    } else {
        return this.h9
    }
}, ia: null, iv: function (d) {
    if (arguments.length === 1) {
        var e = this.iv() != d;
        if (e) {
            var f = this.iv();
            this.ia = d;
            this.ej($.ig.XYTriangulatingSeries.prototype.h2, f, this.iv())
        }
        return d
    } else {
        return this.ia
    }
}, $type: new $.ig.Type("XYTriangulatingSeries", $.ig.Series.prototype.$type)}, true);
$.ig.util.defType("ContourLineSeries", "XYTriangulatingSeries", {init: function () {
    $.ig.XYTriangulatingSeries.prototype.init.call(this);
    this.a3($.ig.ContourLineSeries.prototype.$type);
    this.valueResolver(new $.ig.LinearContourValueResolver())
}, _jz: null, jz: function (b) {
    if (arguments.length === 1) {
        this._jz = b;
        return b
    } else {
        return this._jz
    }
}, ed: function () {
    this.jz(new $.ig.ContourLineSeriesView(this));
    return this.jz()
}, valueMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ContourLineSeries.prototype.valueMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.ContourLineSeries.prototype.valueMemberPathProperty)
    }
}, ju: null, j0: function (d) {
    if (arguments.length === 1) {
        var e = this.j0() != d;
        if (e) {
            var f = this.j0();
            this.ju = d;
            this.ej($.ig.ContourLineSeries.prototype.jr, f, this.j0())
        }
        return d
    } else {
        return this.ju
    }
}, e6: function (i, j, k, l) {
    $.ig.XYTriangulatingSeries.prototype.e6.call(this, i, j, k, l);
    switch (j) {
        case $.ig.ContourLineSeries.prototype.be:
            var m = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, k);
            if (m != null) {
                m.ac(this.j0());
                this.j0(null)
            }
            var n = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, l);
            if (n != null) {
                this.j0(this.gs(this.valueMemberPath()))
            }
            this.renderSeries(false);
            break;
        case $.ig.ContourLineSeries.prototype.jq:
            if (this.dx() != null) {
                this.dx().ac(this.j0());
                this.j0(this.gs(this.valueMemberPath()))
            }
            this.renderSeries(false);
            break;
        case $.ig.ContourLineSeries.prototype.jt:
            this.renderSeries(false);
            break;
        case $.ig.ContourLineSeries.prototype.js:
            var o = k;
            var p = l;
            if (o != null) {
                o.unregisterSeries(this)
            }
            if (p != null) {
                p.registerSeries(this)
            }
            this.renderSeries(false);
            break;
        case $.ig.ContourLineSeries.prototype.bs:
            this.renderSeries(false);
            break
    }
}, eu: function (c, d) {
    $.ig.Series.prototype.eu.call(this, c, d);
    if (c) {
        (d).cw(c)
    }
}, eo: function (B) {
    var A = this;
    $.ig.XYTriangulatingSeries.prototype.eo.call(this, B);
    if (this.ew(this.view())) {
        return
    }
    var ai;
    var aj;
    (function () {
        var a = A.getViewInfo(aj, ai);
        aj = a.viewportRect;
        ai = a.windowRect;
        return a.ret
    }());
    var ak = new $.ig.ScalerParams(ai, aj, this.xAxis().isInverted());
    ak.c = this.seriesViewer().effectiveViewport();
    var al = new $.ig.ScalerParams(ai, aj, this.yAxis().isInverted());
    al.c = this.seriesViewer().effectiveViewport();
    var am = this.xAxis();
    var an = this.yAxis();
    var ao = this.it().count();
    var ap;
    var aN = this.io().asArray();
    ap = aN.slice(0);
    var aq;
    var aP = this.ip().asArray();
    aq = aP.slice(0);
    var ar = this.j0().asArray();
    var aA = this.it().asArray();
    var aB = this.iu().asArray();
    var aC = this.iv().asArray();
    var aD = this.valueResolver().f(this.j0());
    var aE = new $.ig.List$1(Number, 1, aD).x();
    am.getScaledValueList(ap, 0, ap.length, ak);
    an.getScaledValueList(aq, 0, aq.length, al);
    var aF = aE.length;
    var aG = new Array(aF);
    for (var aH = 0; aH < aF; ++aH) {
        aG[aH] = new $.ig.ContourBuilder()
    }
    var aI = this.d6().top();
    var aJ = this.d6().left();
    var aK = this.d6().right();
    var aL = this.d6().bottom();
    var aM;
    var aO;
    var aQ;
    var I;
    var J = ap.length;
    for (var K = 0; K < ao; K++) {
        var L = aA[K];
        var M = aB[K];
        var N = aC[K];
        if ((L >= J) || (M >= J) || (N >= J) || (L < 0) || (M < 0) || (N < 0)) {
            continue
        }
        var O = ap[L];
        var P = aq[L];
        var Q = {__x: O, __y: P, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var R = ap[M];
        var S = aq[M];
        var T = {__x: R, __y: S, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var U = ap[N];
        var V = aq[N];
        var W = {__x: U, __y: V, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        aM = T.__y < W.__y ? T.__y : W.__y;
        aM = Q.__y < aM ? Q.__y : aM;
        aO = T.__y > W.__y ? T.__y : W.__y;
        aO = Q.__y > aO ? Q.__y : aO;
        aQ = T.__x < W.__x ? T.__x : W.__x;
        aQ = Q.__x < aQ ? Q.__x : aQ;
        I = T.__x > W.__x ? T.__x : W.__x;
        I = Q.__x > I ? Q.__x : I;
        if (aM < aL && aO > aI && aQ < aK && I > aJ) {
            var X = ar[L];
            var Y = ar[M];
            var Z = ar[N];
            if (isNaN(X) || isNaN(Y) || isNaN(Z)) {
                continue
            }
            for (var aa = 0; aa < aF; aa++) {
                var ab = aE[aa];
                var ac = aG[aa];
                switch ((X < ab ? 1 : 0) | (Y < ab ? 2 : 0) | (Z < ab ? 4 : 0)) {
                    case 0:
                        break;
                    case 1:
                        ac.e(ac.n(L, Q.__x, Q.__y, X, M, T.__x, T.__y, Y, ab), ac.n(N, W.__x, W.__y, Z, L, Q.__x, Q.__y, X, ab));
                        break;
                    case 2:
                        ac.e(ac.n(M, T.__x, T.__y, Y, N, W.__x, W.__y, Z, ab), ac.n(L, Q.__x, Q.__y, X, M, T.__x, T.__y, Y, ab));
                        break;
                    case 3:
                        ac.e(ac.n(M, T.__x, T.__y, Y, N, W.__x, W.__y, Z, ab), ac.n(N, W.__x, W.__y, Z, L, Q.__x, Q.__y, X, ab));
                        break;
                    case 4:
                        ac.e(ac.n(N, W.__x, W.__y, Z, L, Q.__x, Q.__y, X, ab), ac.n(M, T.__x, T.__y, Y, N, W.__x, W.__y, Z, ab));
                        break;
                    case 5:
                        ac.e(ac.n(L, Q.__x, Q.__y, X, M, T.__x, T.__y, Y, ab), ac.n(M, T.__x, T.__y, Y, N, W.__x, W.__y, Z, ab));
                        break;
                    case 6:
                        ac.e(ac.n(N, W.__x, W.__y, Z, L, Q.__x, Q.__y, X, ab), ac.n(L, Q.__x, Q.__y, X, M, T.__x, T.__y, Y, ab));
                        break;
                    case 7:
                        break
                }
            }
        }
    }
    var ad = new $.ig.Clipper(0, aj.inflate11(2), false);
    var ae = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type)), 0);
    for (var af = 0; af < aF; ++af) {
        var ag = aG[af];
        var ah = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
        var C = ag.d();
        for (var D = 0; D < C.count(); D++) {
            var E = C.__inner[D];
            var F = new $.ig.List$1($.ig.Point.prototype.$type, 0);
            ad.h(F);
            var H = E.getEnumerator();
            while (H.moveNext()) {
                var G = H.current();
                ad.l({__x: ag.j().item(G), __y: ag.k().item(G), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
            }
            ad.h(null);
            ah.add(F)
        }
        ae.add(ah)
    }
    this.jz().cv(ae, aE)
}, fillScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ContourLineSeries.prototype.fillScaleProperty, b);
        return b
    } else {
        return this.b($.ig.ContourLineSeries.prototype.fillScaleProperty)
    }
}, jv: null, valueResolver: function (d) {
    if (arguments.length === 1) {
        var e = d != this.valueResolver();
        if (e) {
            if (this.jv != null) {
                this.jv.updated = $.ig.Delegate.prototype.remove(this.jv.updated, this.j5.on(this))
            }
            var f = this.jv;
            this.jv = d;
            if (this.jv != null) {
                this.jv.updated = $.ig.Delegate.prototype.combine(this.jv.updated, this.j5.on(this))
            }
            this.ej($.ig.ContourLineSeries.prototype.jt, f, d);
            this.renderSeries(false)
        }
        return d
    } else {
        return this.jv
    }
}, j5: function (c, d) {
    this.renderSeries(false)
}, es: function (d, e, f) {
    return $.ig.XYTriangulatingSeries.prototype.es.call(this, d, e, f) && this.valueResolver() != null && this.io() != null && this.ip() != null && this.it() != null && this.iu() != null && this.iv() != null && this.io().count() > 0 && this.ip().count() > 0 && this.it().count() > 0 && this.iu().count() > 0 && this.iv().count() > 0
}, $type: new $.ig.Type("ContourLineSeries", $.ig.XYTriangulatingSeries.prototype.$type)}, true);
$.ig.util.defType("PolylineBuilder", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.List$1.prototype.$type.specialize($.ig.Number.prototype.$type), 0);
    this.b = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.List$1.prototype.$type.specialize($.ig.Number.prototype.$type), 0)
}, c: function () {
    this.a.clear();
    this.b.clear()
}, d: function () {
    var d = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Number.prototype.$type), 0);
    var f = this.a.values().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        d.add(e)
    }
    return d
}, e: function (g, h) {
    var f = this;
    var i = null;
    var j = null;
    (function () {
        var a = f.b.tryGetValue(g, i);
        i = a.value;
        return a.ret
    }());
    (function () {
        var a = f.a.tryGetValue(h, j);
        j = a.value;
        return a.ret
    }());
    if (i == null && j == null) {
        var k = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        k.add(g);
        k.add(h);
        this.a.add(g, k);
        this.b.add(h, k)
    }
    if (i == null && j != null) {
        this.a.remove(h);
        j.insert(0, g);
        this.a.add(g, j)
    }
    if (i != null && j == null) {
        this.b.remove(g);
        i.add(h);
        this.b.add(h, i)
    }
    if (i != null && j != null) {
        if (i == j) {
            i.add(h);
            this.b.remove(g)
        } else {
            this.a.remove(j.__inner[0]);
            this.b.remove(j.__inner[j.count() - 1]);
            this.b.remove(i.__inner[i.count() - 1]);
            i.w(j);
            this.b.add(i.__inner[i.count() - 1], i)
        }
    }
}, a: null, b: null, $type: new $.ig.Type("PolylineBuilder", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ContourBuilder", "PolylineBuilder", {init: function () {
    $.ig.PolylineBuilder.prototype.init.call(this);
    this.g = new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.Number.prototype.$type, 0);
    this.h = new $.ig.List$1($.ig.Single.prototype.$type, 0);
    this.i = new $.ig.List$1($.ig.Single.prototype.$type, 0)
}, c: function () {
    $.ig.PolylineBuilder.prototype.c.call(this);
    this.g.c();
    this.h.c();
    this.i.c()
}, j: function () {
    return this.h
}, k: function () {
    return this.i
}, n: function (n, o, p, q, r, s, t, u, v) {
    var m = this;
    var w = Math.min(n, r) + $.ig.ContourBuilder.prototype.f * Math.max(n, r);
    var x = -1;
    if (!(function () {
        var a = m.g.tryGetValue(w, x);
        x = a.value;
        return a.ret
    }())) {
        x = this.h.count();
        var y = (v - q) / (u - q);
        this.g.add(w, x);
        this.h.add((o + y * (s - o)));
        this.i.add((p + y * (t - p)))
    }
    return x
}, g: null, h: null, i: null, $type: new $.ig.Type("ContourBuilder", $.ig.PolylineBuilder.prototype.$type)}, true);
$.ig.util.defType("ContourLineSeriesView", "SeriesView", {_ci: null, ci: function (b) {
    if (arguments.length === 1) {
        this._ci = b;
        return b
    } else {
        return this._ci
    }
}, _cj: null, cj: function (b) {
    if (arguments.length === 1) {
        this._cj = b;
        return b
    } else {
        return this._cj
    }
}, init: function (c) {
    var b = this;
    this.ce = new $.ig.List$1($.ig.Brush.prototype.$type, 0);
    $.ig.SeriesView.prototype.init.call(this, c);
    this.ck(new $.ig.List$1($.ig.Path.prototype.$type, 0));
    this.cj(c);
    this.ci((function () {
        var a = new $.ig.Pool$1($.ig.Path.prototype.$type);
        a.create(b.cr.on(b));
        a.destroy(b.cu.on(b));
        a.activate(b.cs.on(b));
        a.disactivate(b.ct.on(b));
        return a
    }()))
}, _ck: null, ck: function (b) {
    if (arguments.length === 1) {
        this._ck = b;
        return b
    } else {
        return this._ck
    }
}, cr: function () {
    var b = this;
    var c = new $.ig.Path();
    c.dataContext((function () {
        var a = new $.ig.DataContext();
        a.series(b.u());
        return a
    }()));
    this.ck().add(c);
    return c
}, cs: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, ct: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, cu: function (b) {
    this.ck().remove(b)
}, ce: null, cv: function (n, o) {
    var m = this;
    var p = 0;
    this.ce.clear();
    for (var q = 0; q < o.length; q++) {
        var r = o[q];
        var s = n.__inner[p];
        var t = new $.ig.PathGeometry();
        for (var u = 0; u < s.count(); u++) {
            var v = s.__inner[u];
            if (v.count() == 0) {
                continue
            }
            var w = v.toPointCollection();
            var x = (function () {
                var a = new $.ig.PathFigure();
                a.__isClosed = false;
                a.__isFilled = false;
                a.__startPoint = w.__inner[0];
                return a
            }());
            x.__segments.add((function () {
                var a = new $.ig.PolyLineSegment();
                a.__points = w;
                return a
            }()));
            t.d().add(x)
        }
        this.ci().item(p).bp(t);
        if (this.ci().item(p).dataContext() != null) {
            (this.ci().item(p).dataContext()).item(r)
        }
        if (this.cj().fillScale() != null) {
            var y = this.cj().fillScale().getBrushByValue(r, this.cj().j0());
            if (y == null) {
                y = this.u().actualBrush()
            }
            this.ce.add(y)
        } else {
            this.ce.add(this.u().actualBrush())
        }
        p++
    }
    this.ci().g(p);
    this.an()
}, ar: function (d, e) {
    $.ig.SeriesView.prototype.ar.call(this, d, e);
    var f = d;
    f.__stroke = this.ce.__inner[e];
    f.a7(this.u().thickness());
    if (f.ab() != null) {
        this.z().aa(f, f.ab())
    }
}, at: function (e, f) {
    $.ig.SeriesView.prototype.at.call(this, e, f);
    var g = e;
    var h = this.ay(f);
    g.__stroke = h;
    g.a7(this.u().thickness() + $.ig.ShapeSeriesViewBase.prototype.cd)
}, a0: function (e, f) {
    $.ig.SeriesView.prototype.a0.call(this, e, f);
    for (var g = 0; g < this.ck().count(); g++) {
        var h = this.ck().__inner[g];
        if (h.__visibility != $.ig.Visibility.prototype.collapsed) {
            this.ap(h, g, f);
            e.g(h)
        }
    }
}, cw: function (b) {
    this.ci().g(0)
}, $type: new $.ig.Type("ContourLineSeriesView", $.ig.SeriesView.prototype.$type)}, true);
$.ig.util.defType("ContourValueResolver", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this)
}, f: function (b) {
}, g: function (d, e, f) {
    if (this.updated != null) {
        this.updated(this, $.ig.EventArgs.prototype.empty)
    }
}, updated: null, $type: new $.ig.Type("ContourValueResolver", $.ig.DependencyObject.prototype.$type)}, true);
$.ig.util.defType("LinearContourValueResolver", "ContourValueResolver", {init: function () {
    $.ig.ContourValueResolver.prototype.init.call(this)
}, m: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.LinearContourValueResolver.prototype.k, b);
        return b
    } else {
        return this.b($.ig.LinearContourValueResolver.prototype.k)
    }
}, f: function (d) {
    var c = this;
    var b = function () {
        return function (e) {
            return{$state: 0, $this: c, $current: null, getEnumerator: function () {
                if (this.$state === -1) {
                    this.$state = 0
                }
                return this
            }, current: function () {
                return this.$current
            }, moveNext: function () {
                do {
                    switch (this.$state) {
                        case 0:
                            this.$state = 1;
                            break;
                        case 1:
                            this.$b = 0;
                            this.$state = 5;
                            break;
                        case 2:
                            this.$current = e.minimum() + (e.maximum() - e.minimum()) * (this.$b + 1) / (this.$this.m() + 1);
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$b++;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$b < this.$this.m()) {
                                this.$state = 2
                            } else {
                                this.$state = 6
                            }
                            break;
                        case 6:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(d)
    };
    return new $.ig.GenericEnumerable$1(Number, b)
}, $type: new $.ig.Type("LinearContourValueResolver", $.ig.ContourValueResolver.prototype.$type)}, true);
$.ig.util.defType("ShapeSeriesBase", "Series", {init: function () {
    this.h0 = null;
    this.h1 = null;
    this.h3 = null;
    this.h4 = null;
    this.h5 = null;
    this.h6 = null;
    $.ig.Series.prototype.init.call(this);
    this.it(this.shapeFilterResolution());
    this.iq(new $.ig.Dictionary$2($.ig.Number.prototype.$type, $.ig.FlattenedShape.prototype.$type, 0));
    this.h8 = $.ig.Rect.prototype.empty()
}, shapeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeriesBase.prototype.shapeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeriesBase.prototype.shapeMemberPathProperty)
    }
}, hz: null, im: function (d) {
    if (arguments.length === 1) {
        var e = this.im() != d;
        if (e) {
            var f = this.im();
            this.hz = d;
            this.ej($.ig.ShapeSeriesBase.prototype.hq, f, this.im())
        }
        return d
    } else {
        return this.hz
    }
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeriesBase.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeriesBase.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeriesBase.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeriesBase.prototype.yAxisProperty)
    }
}, iw: function (c) {
    var b = $.isArray(c);
    return b
}, convertToListList: function (i) {
    var j = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
    var k;
    var l;
    var m;
    var n;
    for (var o = 0; o < i.length; o++) {
        k = i[o];
        var p = new $.ig.List$1($.ig.Point.prototype.$type, 0);
        for (var q = 0; q < k.length; q++) {
            l = k[q];
            m = l.x;
            n = l.y;
            p.add({__x: m, __y: n, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
        j.add(p)
    }
    return j
}, gu: function (b) {
    if (this.dx() != null && this.iw(this.itemsSource()) && b != null && b.split("!").length != 2) {
        if (this.coercionMethods() == null) {
            this.coercionMethods({})
        }
        var c = this.coercionMethods();
        c.convertToListList = this.convertToListList;
        b += "!convertToListList"
    }
    return $.ig.Series.prototype.gu.call(this, b)
}, e6: function (j, k, l, m) {
    var i = this;
    $.ig.Series.prototype.e6.call(this, j, k, l, m);
    switch (k) {
        case $.ig.ShapeSeriesBase.prototype.be:
            var n = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, l);
            if (n != null) {
                n.ac(this.im());
                n.ac(this.ir());
                this.im(null);
                this.ir(null)
            }
            var o = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, m);
            if (o != null) {
                this.im(this.gu(this.shapeMemberPath()));
                this.ir(this.gs(this.fillMemberPath()))
            }
            this.renderSeries(false);
            break;
        case $.ig.ShapeSeriesBase.prototype.hp:
            if (this.dx() != null) {
                this.dx().ac(this.im());
                this.im(this.gu(this.shapeMemberPath()))
            }
            break;
        case $.ig.ShapeSeriesBase.prototype.hq:
            this.iz();
            break;
        case $.ig.ShapeSeriesBase.prototype.hu:
            if (this.dx() != null) {
                this.dx().ac(this.ir());
                this.ir(this.gs(this.fillMemberPath()))
            }
            break;
        case $.ig.ShapeSeriesBase.prototype.hr:
        case $.ig.ShapeSeriesBase.prototype.hs:
            this.h0 = this.xAxis();
            this.h1 = this.yAxis();
            var p = l;
            var q = m;
            this.je(p);
            this.jd(q);
            if ((q != null && !q.updateRange()) || (q == null && p != null)) {
                this.renderSeries(false)
            }
            break;
        case $.ig.ShapeSeriesBase.prototype.hx:
            this.is().dm();
            this.renderSeries(false);
            break;
        case $.ig.ShapeSeriesBase.prototype.hw:
            this.is().dl();
            this.renderSeries(false);
            break;
        case $.ig.ShapeSeries.prototype.jy:
            this.renderSeries(false);
            break;
        case $.ig.ShapeSeriesBase.prototype.bp:
            this.h2 = this.resolution();
            break;
        case $.ig.Series.prototype.bs:
            this.renderSeries(false);
            break;
        case $.ig.ShapeSeriesBase.prototype.hy:
            this.it(this.shapeFilterResolution());
            this.renderSeries(false);
            break
    }
}, h0: null, h1: null, h2: null, _io: null, io: function (b) {
    if (arguments.length === 1) {
        this._io = b;
        return b
    } else {
        return this._io
    }
}, iz: function () {
    this.io(null);
    if (this.im() == null) {
        return
    }
    this.io(new $.ig.List$1($.ig.Rect.prototype.$type, 2, this.im().count()));
    for (var c = 0; c < this.im().count(); c++) {
        if ($.ig.util.cast($.ig.IEnumerable$1.prototype.$type.specialize($.ig.IEnumerable$1.prototype.$type.specialize($.ig.Point.prototype.$type)), this.im().item(c)) !== null) {
            this.io().add((this.im().item(c)).getBounds11())
        } else {
            if ($.ig.util.cast($.ig.IEnumerable$1.prototype.$type.specialize($.ig.Point.prototype.$type), this.im().item(c)) !== null) {
                var d = this.im().item(c);
                this.io().add(d.getBounds())
            }
        }
    }
}, i0: function (f, g, h, i) {
    var j = g;
    return this.i9(f, j, h, i)
}, h3: null, h4: null, h5: null, h6: null, ip: function () {
    return true
}, _iq: null, iq: function (b) {
    if (arguments.length === 1) {
        this._iq = b;
        return b
    } else {
        return this._iq
    }
}, i4: function () {
    return false
}, eo: function (B) {
    var A = this;
    if (this.ew(this.view())) {
        return
    }
    var M;
    var N;
    (function () {
        var a = A.getViewInfo(N, M);
        N = a.viewportRect;
        M = a.windowRect;
        return a.ret
    }());
    if (N.width() < 1 || N.height() < 1) {
        return
    }
    var O = this.xAxis();
    var P = this.yAxis();
    var Q = this.seriesViewer().effectiveViewport();
    var R = new $.ig.ScalerParams(M, N, O.isInverted());
    R.c = Q;
    var S = new $.ig.ScalerParams(M, N, P.isInverted());
    S.c = Q;
    this.is().da(N.width(), N.height());
    this.is().c6();
    var T = new $.ig.Rect(0, 0, 0, 0, 0);
    var U;
    var V;
    var W;
    var X;
    var Y = this.im().count();
    if (this.h4 == null || this.h4.length != Y) {
        this.h4 = new Array(Y);
        this.h3 = new Array(Y);
        this.h5 = new Array(Y);
        this.h6 = new Array(Y)
    }
    var Z = this.h4;
    var aa = this.h3;
    var ab = this.h5;
    var ac = this.h6;
    var ad;
    for (var ae = 0; ae < Y; ae++) {
        ad = this.io().__inner[ae];
        Z[ae] = ad.top();
        aa[ae] = ad.left();
        ab[ae] = ad.right();
        ac[ae] = ad.bottom()
    }
    this.h0.getScaledValueList(aa, 0, aa.length, R);
    this.h0.getScaledValueList(ab, 0, ab.length, R);
    this.h1.getScaledValueList(Z, 0, Z.length, S);
    this.h1.getScaledValueList(ac, 0, ac.length, S);
    this.is().dp(aa, Z, ab, ac);
    var af = this.im();
    var ag = this.dx();
    this.jc();
    var ah = N.left();
    var ai = N.right();
    var aj = N.top();
    var ak = N.bottom();
    var C = null;
    if (this.h8.isEmpty()) {
        C = null
    } else {
        C = new $.ig.Clipper(1, this.h8.left(), this.h8.bottom(), this.h8.right(), this.h8.top(), this.ip())
    }
    var D = this.i4();
    if (D) {
        this.iq().clear()
    }
    var E;
    for (var F = 0; F < Y; F++) {
        W = aa[F];
        U = Z[F];
        V = ac[F];
        X = ab[F];
        T.x(Math.min(W, X));
        T.y(Math.min(U, V));
        T.width(Math.max(W, X) - T.x());
        T.height(Math.max(U, V) - T.y());
        if (T.intersectsWith(N)) {
            if (T.x() < ah || T.y() < aj || T.x() > ai || T.y() > ak) {
                E = C
            } else {
                E = null
            }
            var G = this.i0(E, af.item(F), R, S);
            if (D) {
                var H = 0;
                var I = null;
                for (var J = 0; J < G.count(); J++) {
                    var K = G.__inner[J];
                    var L = K.e().width() * K.e().height();
                    if (L > H) {
                        H = L;
                        I = K
                    }
                }
                this.iq().add(F, I)
            }
            this.is().cy(F, ag.item(F), T, G)
        }
    }
    this.is().c7()
}, fs: function () {
    $.ig.Series.prototype.fs.call(this);
    if (this.xAxis() != null) {
        this.xAxis().renderAxis()
    }
    if (this.yAxis() != null) {
        this.yAxis().renderAxis()
    }
}, ey: function (c, d) {
    this.renderSeries(false)
}, ez: function (c, d) {
    this.renderSeries(false)
}, fillScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeriesBase.prototype.fillScaleProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeriesBase.prototype.fillScaleProperty)
    }
}, fillMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeriesBase.prototype.fillMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeriesBase.prototype.fillMemberPathProperty)
    }
}, h7: null, ir: function (d) {
    if (arguments.length === 1) {
        var e = this.ir() != d;
        if (e) {
            var f = this.ir();
            this.h7 = d;
            this.ej($.ig.ShapeSeriesBase.prototype.hv, f, this.ir())
        }
        return d
    } else {
        return this.h7
    }
}, fc: function (g, h, i, j) {
    $.ig.Series.prototype.fc.call(this, g, h, i, j);
    switch (g) {
        case $.ig.FastItemsSourceEventAction.prototype.change:
            if (j == this.shapeMemberPath()) {
                this.io().__inner[h] = (this.im().item(h)).getBounds3()
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.insert:
            for (var k = h; k < h + i; k++) {
                this.io().insert(k, (this.im().item(k)).getBounds3())
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            this.io().q(h, i);
            break;
        case $.ig.FastItemsSourceEventAction.prototype.replace:
            for (var l = h; l < h + i; l++) {
                this.io().__inner[l] = (this.im().item(l)).getBounds3()
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            this.iz();
            break
    }
    this.renderSeries(false)
}, es: function (d, e, f) {
    return $.ig.Series.prototype.es.call(this, d, e, f) && this.im() != null && this.xAxis() != null && this.yAxis() != null && d.width() > 0 && d.height() > 0
}, ea: function (b) {
    $.ig.Series.prototype.ea.call(this, b);
    this.is($.ig.util.cast($.ig.ShapeSeriesViewBase.prototype.$type, b))
}, _is: null, is: function (b) {
    if (arguments.length === 1) {
        this._is = b;
        return b
    } else {
        return this._is
    }
}, i9: function (j, k, l, m) {
    var n = new $.ig.List$1($.ig.FlattenedShape.prototype.$type, 0);
    var o;
    var p = k.count();
    for (var q = 0; q < p; q++) {
        o = k.__inner[q];
        var r = this.ja(j, o, l, m);
        if (r == null) {
            continue
        }
        n.add(r)
    }
    return n
}, ja: function (y, z, A, B) {
    var C = this.jb(z, A, B);
    var D = C.c();
    var E = C.d();
    var F = D.length;
    var G = Number.MAX_VALUE;
    var H = Number.MAX_VALUE;
    var I = -Number.MAX_VALUE;
    var J = -Number.MAX_VALUE;
    var K;
    var L;
    for (var M = 0; M < F; M++) {
        K = D[M];
        L = E[M];
        G = K < G ? K : G;
        H = L < H ? L : H;
        I = K > I ? K : I;
        J = L > J ? L : J
    }
    var N = !(G > this.h8.right() || I < this.h8.left() || H > this.h8.bottom() || J < this.h8.top());
    if (!N) {
        return null
    }
    var O = y != null && (G < this.h8.left() || H < this.h8.top() || I > this.h8.right() || J > this.h8.bottom());
    var P = new $.ig.Rect(0, G, H, I - G, J - H);
    if (!this.is().cu(P)) {
        return null
    }
    G = G < this.h8.left() ? this.h8.left() : G;
    I = I > this.h8.right() ? this.h8.right() : I;
    H = H < this.h8.top() ? this.h8.top() : H;
    J = J > this.h8.bottom() ? this.h8.bottom() : J;
    var Q = $.ig.PolySimplification.prototype.a(C, this.resolution());
    var R = new $.ig.DefaultFlattener().d(C.c(), C.d(), Q, this.h2);
    var S = R.count();
    if (O) {
        var T = new $.ig.List$1($.ig.Point.prototype.$type, 0);
        y.h(T);
        for (var U = 0; U < S; U++) {
            y.l(R.__inner[U])
        }
        y.h(null);
        R = T
    }
    var V = new $.ig.FlattenedShape();
    V.d(R);
    V.e(new $.ig.Rect(0, G, H, I - G, J - H));
    V.f(P);
    return V
}, jb: function (j, k, l) {
    var m = this.h0;
    var n = this.h1;
    var o = j.count();
    var p = new Array(o);
    var q = new Array(o);
    for (var r = 0; r < o; r++) {
        p[r] = j.__inner[r].__x;
        q[r] = j.__inner[r].__y
    }
    m.getScaledValueList(p, 0, p.length, k);
    n.getScaledValueList(q, 0, q.length, l);
    return new $.ig.Tuple$2($.ig.Array.prototype.$type, $.ig.Array.prototype.$type, p, q)
}, shapeStyleSelector: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeriesBase.prototype.shapeStyleSelectorProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeriesBase.prototype.shapeStyleSelectorProperty)
    }
}, shapeStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeriesBase.prototype.shapeStyleProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeriesBase.prototype.shapeStyleProperty)
    }
}, h8: null, jc: function () {
    this.is().dq()
}, eu: function (d, e) {
    $.ig.Series.prototype.eu.call(this, d, e);
    var f = e;
    f.db()
}, jd: function (b) {
    if (b != null) {
        b.registerSeries(this)
    }
}, je: function (b) {
    if (b != null) {
        b.deregisterSeries(this)
    }
}, getHitDataContext: function (d) {
    var e = this.is().dn(d);
    var f = null;
    if (e != null) {
        f = e.dataContext()
    }
    if (f != null) {
        return f
    }
    return $.ig.Series.prototype.getHitDataContext.call(this, d)
}, jf: function (b) {
    return this.dx().item(b)
}, d3: function () {
    return true
}, shapeFilterResolution: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeriesBase.prototype.shapeFilterResolutionProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeriesBase.prototype.shapeFilterResolutionProperty)
    }
}, _it: null, it: function (b) {
    if (arguments.length === 1) {
        this._it = b;
        return b
    } else {
        return this._it
    }
}, $type: new $.ig.Type("ShapeSeriesBase", $.ig.Series.prototype.$type)}, true);
$.ig.util.defType("PolylineSeries", "ShapeSeriesBase", {init: function () {
    $.ig.ShapeSeriesBase.prototype.init.call(this);
    this.a3($.ig.PolylineSeries.prototype.$type)
}, ed: function () {
    return new $.ig.PolylineSeriesView(this)
}, ip: function () {
    return false
}, $type: new $.ig.Type("PolylineSeries", $.ig.ShapeSeriesBase.prototype.$type)}, true);
$.ig.util.defType("ShapeSeriesViewBase", "SeriesView", {init: function (b) {
    this.ce = new $.ig.List$1($.ig.ShapeHitRegion.prototype.$type, 0);
    this.cf = null;
    this.cg = null;
    $.ig.SeriesView.prototype.init.call(this, b);
    this.cp(b);
    this.cs(this.ct());
    this.cr(new $.ig.List$1($.ig.Path.prototype.$type, 0))
}, ct: function () {
    var a = this;
    return(function () {
        var b = new $.ig.Pool$1($.ig.FrameworkElement.prototype.$type);
        b.create(a.de.on(a));
        b.activate(a.df.on(a));
        b.disactivate(a.dg.on(a));
        b.destroy(a.dh.on(a));
        return b
    }())
}, cu: function (b) {
    return b.width() >= this.cp().it() && b.height() >= this.cp().it()
}, cv: function (g) {
    var h = new $.ig.List$1($.ig.PointCollection.prototype.$type, 0);
    var i;
    var j = g.count();
    for (var k = 0; k < j; k++) {
        i = g.__inner[k];
        var l = new $.ig.PointCollection(1, i.d());
        h.add(l)
    }
    return h
}, _cp: null, cp: function (b) {
    if (arguments.length === 1) {
        this._cp = b;
        return b
    } else {
        return this._cp
    }
}, ce: null, cy: function (j, k, l, m) {
    if (m != null && m.count() > 0) {
        var n = $.ig.ShapeSeriesViewBase.prototype.cv(m);
        l.intersect(this.ab());
        if (!this.cu(l)) {
        } else {
            var o = this.c5(j, n);
            if (o != null) {
                var p = this.cs().item(this.cq());
                for (var q = 0; q < m.count(); q++) {
                    var r = new $.ig.ShapeHitRegion();
                    r.a = m.__inner[q].e();
                    r.b = m.__inner[q].d();
                    r.c = j;
                    r.d = p;
                    this.ce.add(r)
                }
                if (p.dataContext() != null) {
                    (p.dataContext()).item(k)
                }
                this.c2(p);
                this.cz(p, o);
                this.c1(p, k);
                this.cq(this.cq() + 1)
            }
        }
    }
}, cz: function (c, d) {
}, c0: function (d, e, f) {
    if (e.__fill == null) {
        e.__fill = d.u().actualBrush()
    }
    if (e.__stroke == null) {
        e.__stroke = d.u().actualOutline()
    }
}, c1: function (c, d) {
    if (c == null) {
        return
    }
    if (this.cf != null) {
        c.ab(this.cf.selectStyle(d, c))
    }
    if (c.ab() == null) {
        c.ab(this.cp().shapeStyle())
    }
}, c2: function (b) {
}, c3: function (i, j) {
    var k = Math.floor(i.left());
    var l = Math.ceil(i.right());
    var m = Math.floor(i.top());
    var n = Math.ceil(i.bottom());
    for (var o = k; o < l; o++) {
        for (var p = m; p < n; p++) {
            this.c4(o, p, j)
        }
    }
}, c4: function (d, e, f) {
}, c5: function (c, d) {
}, c6: function () {
    this.cq(0)
}, c7: function () {
    this.cs().g(this.cq());
    this.an()
}, _cq: null, cq: function (b) {
    if (arguments.length === 1) {
        this._cq = b;
        return b
    } else {
        return this._cq
    }
}, da: function (c, d) {
}, db: function () {
    this.cs().g(0)
}, _cr: null, cr: function (b) {
    if (arguments.length === 1) {
        this._cr = b;
        return b
    } else {
        return this._cr
    }
}, de: function () {
    var c = this;
    var d = this.cp();
    var e = (function () {
        var a = new $.ig.Path();
        a.dataContext((function () {
            var b = new $.ig.DataContext();
            b.series(d);
            return b
        }()));
        return a
    }());
    this.cr().add(e);
    return e
}, df: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, dg: function (b) {
    (b.dataContext()).item(null);
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, dh: function (b) {
    this.cr().remove1(b)
}, _cs: null, cs: function (b) {
    if (arguments.length === 1) {
        this._cs = b;
        return b
    } else {
        return this._cs
    }
}, dk: function (j, k, l) {
    if (k == null) {
        return null
    }
    var m = new $.ig.PathGeometry();
    var n;
    var o = k.count();
    for (var p = 0; p < o; p++) {
        n = k.__inner[p];
        if (n.count() < 1) {
            continue
        }
        var q = new $.ig.PolyLineSegment();
        q.__points = n;
        var r = new $.ig.PathFigure();
        r.__isFilled = l;
        r.__isClosed = l;
        r.__startPoint = n.__inner[0];
        r.__segments.add(q);
        m.d().add(r)
    }
    return m
}, ar: function (d, e) {
    $.ig.SeriesView.prototype.ar.call(this, d, e);
    var f = d;
    f.__fill = this.u().actualBrush();
    f.__stroke = this.u().actualOutline();
    f.a7(this.u().thickness());
    if (f.ab() != null) {
        this.z().aa(f, f.ab())
    }
}, at: function (e, f) {
    $.ig.SeriesView.prototype.at.call(this, e, f);
    var g = e;
    var h = this.ay(f);
    g.__fill = h;
    g.__stroke = h;
    g.a7(this.u().thickness() + $.ig.ShapeSeriesViewBase.prototype.cd)
}, a0: function (e, f) {
    $.ig.SeriesView.prototype.a0.call(this, e, f);
    for (var g = 0; g < this.cr().count(); g++) {
        var h = this.cr().__inner[g];
        if (h.__visibility != $.ig.Visibility.prototype.collapsed) {
            this.ap(h, g, f);
            e.g(h)
        }
    }
}, cf: null, cg: null, dl: function () {
    this.cf = this.cp().shapeStyleSelector()
}, dm: function () {
    this.cg = this.cp().shapeStyle()
}, dn: function (h) {
    if (this.ce.count() == 0) {
        return null
    }
    var i = h.__x;
    var j = h.__y;
    var k = this.ce.count();
    var l = this.ce;
    var m = null;
    for (var n = 0; n < k; n++) {
        m = l.__inner[n];
        if (i >= m.a.left() && i <= m.a.right() && j >= m.a.top() && j <= m.a.bottom()) {
            if ($.ig.PolygonUtil.prototype.a(m.b, h)) {
                return m.d
            }
        }
    }
    return null
}, ch: null, ci: null, cj: null, ck: null, dp: function (e, f, g, h) {
    this.ch = e;
    this.ci = f;
    this.cj = g;
    this.ck = h;
    this.ce.clear()
}, dq: function () {
    var c = this;
    var d = this.ab();
    var e = (function () {
        var a = new $.ig.Path();
        a.ab(c.cp().shapeStyle());
        return a
    }());
    if (this.z() != null) {
        this.z().aa(e, e.ab())
    }
    this.cp().h8 = d.inflate11(e.a7())
}, $type: new $.ig.Type("ShapeSeriesViewBase", $.ig.SeriesView.prototype.$type)}, true);
$.ig.util.defType("PolylineSeriesView", "ShapeSeriesViewBase", {init: function (b) {
    $.ig.ShapeSeriesViewBase.prototype.init.call(this, b)
}, c5: function (c, d) {
    return this.dk(c, d, false)
}, c1: function (c, d) {
    $.ig.ShapeSeriesViewBase.prototype.c1.call(this, c, d);
    $.ig.ShapeSeriesViewBase.prototype.c0(this, c, d)
}, cz: function (d, e) {
    var f = $.ig.util.cast($.ig.Path.prototype.$type, d);
    if (f == null) {
        return
    }
    f.bp(e)
}, c2: function (b) {
    $.ig.ShapeSeriesViewBase.prototype.c2.call(this, b)
}, ar: function (d, e) {
    $.ig.ShapeSeriesViewBase.prototype.ar.call(this, d, e);
    var f = d;
    f.__fill = null
}, at: function (d, e) {
    $.ig.ShapeSeriesViewBase.prototype.at.call(this, d, e);
    var f = d;
    f.__fill = null
}, cu: function (b) {
    return b.width() >= this.cp().it() || b.height() >= this.cp().it()
}, $type: new $.ig.Type("PolylineSeriesView", $.ig.ShapeSeriesViewBase.prototype.$type)}, true);
$.ig.util.defType("ScatterAreaSeries", "XYTriangulatingSeries", {jt: null, init: function () {
    $.ig.XYTriangulatingSeries.prototype.init.call(this);
    this.a3($.ig.ScatterAreaSeries.prototype.$type)
}, ju: null, colorScale: function (d) {
    if (arguments.length === 1) {
        var e = this.ju != d;
        if (e) {
            var f = this.ju;
            if (this.ju != null) {
                this.ju.propertyChanged = $.ig.Delegate.prototype.remove(this.ju.propertyChanged, this.j4.on(this))
            }
            this.ju = d;
            if (this.ju != null) {
                this.ju.propertyChanged = $.ig.Delegate.prototype.combine(this.ju.propertyChanged, this.j4.on(this))
            }
            this.ej($.ig.ScatterAreaSeries.prototype.jq, f, this.ju)
        }
        return d
    } else {
        return this.ju
    }
}, j4: function (c, d) {
    this.renderSeries(false)
}, colorMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ScatterAreaSeries.prototype.colorMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.ScatterAreaSeries.prototype.colorMemberPathProperty)
    }
}, jv: null, j0: function (d) {
    if (arguments.length === 1) {
        var e = this.j0() != d;
        if (e) {
            var f = this.j0();
            this.jv = d;
            this.ej($.ig.ScatterAreaSeries.prototype.js, f, this.j0())
        }
        return d
    } else {
        return this.jv
    }
}, d3: function () {
    return true
}, e6: function (g, h, i, j) {
    $.ig.XYTriangulatingSeries.prototype.e6.call(this, g, h, i, j);
    switch (h) {
        case $.ig.ScatterAreaSeries.prototype.be:
            var k = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, i);
            if (k != null) {
                k.ac(this.j0());
                this.j0(null)
            }
            var l = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, j);
            if (l != null) {
                this.j0(this.gs(this.colorMemberPath()))
            }
            this.renderSeries(false);
            break;
        case $.ig.ScatterAreaSeries.prototype.jr:
            if (this.dx() != null) {
                this.dx().ac(this.j0());
                this.j0(this.gs(this.colorMemberPath()))
            }
            this.renderSeries(false);
            break;
        case $.ig.ScatterAreaSeries.prototype.jq:
            this.renderSeries(false);
            break
    }
}, eo: function (l) {
    var k = this;
    $.ig.XYTriangulatingSeries.prototype.eo.call(this, l);
    if (this.ew(this.view())) {
        return
    }
    var m;
    var n;
    (function () {
        var a = k.getViewInfo(n, m);
        n = a.viewportRect;
        m = a.windowRect;
        return a.ret
    }());
    var o = null;
    var p = null;
    var q = this.xAxis();
    var r = this.yAxis();
    var s = this.seriesViewer().effectiveViewport();
    var t = new $.ig.ScalerParams(m, n, q.isInverted());
    t.c = s;
    var u = new $.ig.ScalerParams(m, n, r.isInverted());
    u.c = s;
    p = this.kc(t, u);
    if (p != null) {
        this.j3().cw(p)
    } else {
        this.j3().cy(o)
    }
}, j7: function () {
    var d = Math.round(this.d6().width()) * Math.round(this.d6().height());
    if (this.jt == null || this.jt.length != d) {
        this.jt = new Array(d);
        for (var e = 0; e < d; e++) {
            this.jt[e] = 0
        }
    } else {
        for (var f = 0; f < d; f++) {
            this.jt[f] = 0
        }
    }
}, eh: function (x) {
    var y = Math.round(this.d6().width());
    var z = Math.round(this.d6().height());
    if (this.jt == null || this.jt.length != (y * z) || this.it() == null || this.it().count() < 1 || this.iu() == null || this.iu().count() < 1 || this.iv() == null || this.iv().count() < 1) {
        return null
    }
    var A = this.seriesViewer().windowRect();
    var B = (x.__x - A.left()) / A.width();
    var C = (x.__y - A.top()) / A.height();
    var D = Math.round(y * B);
    var E = Math.round(z * C);
    var F = (y * E) + D;
    if (F < 0 || F > this.jt.length - 1) {
        return null
    }
    var G = this.jt[F] - 1;
    if (G < 0 || G > this.it().count()) {
        return null
    }
    var H = this.j1().length;
    var I = this.it().item(G);
    var J = this.iu().item(G);
    var K = this.iv().item(G);
    if ((I >= H) || (J >= H) || (K >= H)) {
        return null
    }
    var L = (this.j1()[I] - this.d6().left()) / this.d6().width();
    var M = (this.j2()[I] - this.d6().top()) / this.d6().height();
    var N = (this.j1()[J] - this.d6().left()) / this.d6().width();
    var O = (this.j2()[J] - this.d6().top()) / this.d6().height();
    var P = (this.j1()[K] - this.d6().left()) / this.d6().width();
    var Q = (this.j2()[K] - this.d6().top()) / this.d6().height();
    var R = Math.pow(L - B, 2) + Math.pow(M - C, 2);
    var S = Math.pow(N - B, 2) + Math.pow(O - C, 2);
    var T = Math.pow(P - B, 2) + Math.pow(Q - C, 2);
    if (R < S && R < T) {
        return this.dx().item(I)
    }
    if (S < R && S < T) {
        return this.dx().item(J)
    }
    if (T < R && T < S) {
        return this.dx().item(K)
    }
    return this.dx().item(I)
}, _j1: null, j1: function (b) {
    if (arguments.length === 1) {
        this._j1 = b;
        return b
    } else {
        return this._j1
    }
}, _j2: null, j2: function (b) {
    if (arguments.length === 1) {
        this._j2 = b;
        return b
    } else {
        return this._j2
    }
}, kc: function (B, O) {
    var A = this;
    var P = this.xAxis();
    var Q = this.yAxis();
    var R = this.it().count();
    var S;
    var al = this.io().asArray();
    S = al.slice(0);
    var T;
    var an = this.ip().asArray();
    T = an.slice(0);
    var U = this.j0().asArray();
    var V = this.it().asArray();
    var W = this.iu().asArray();
    var X = this.iv().asArray();
    this.j1(S);
    this.j2(T);
    P.getScaledValueList(S, 0, S.length, B);
    Q.getScaledValueList(T, 0, T.length, O);
    var Y = this.colorScale();
    if (Y == null) {
        Y = (function () {
            var a = new $.ig.CustomPaletteColorScale();
            a.palette(new $.ig.ObservableCollection$1($.ig.Color.prototype.$type, 1, (function () {
                var b = new Array();
                b.add($.ig.Color.prototype.s(0, 0, 0, 0));
                b.add($.ig.Color.prototype.s(1, 0, 0, 0));
                return b
            }())));
            a.interpolationMode($.ig.ColorScaleInterpolationMode.prototype.interpolateHSV);
            return a
        }())
    }
    var Z = this.j3().cv(B.b, Y, this.j0());
    var aa = this.d6().top();
    var ab = this.d6().left();
    var ac = this.d6().right();
    var ad = this.d6().bottom();
    var ae;
    var af;
    var ag;
    var ah;
    this.j7();
    var ai = S.length;
    for (var aj = 0; aj < R; aj++) {
        var ak = V[aj];
        var am = W[aj];
        var ao = X[aj];
        if ((ak >= ai) || (am >= ai) || (ao >= ai) || (ak < 0) || (am < 0) || (ao < 0)) {
            continue
        }
        var C = S[ak];
        var D = T[ak];
        var E = {__x: C, __y: D, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var F = S[am];
        var G = T[am];
        var H = {__x: F, __y: G, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var I = S[ao];
        var J = T[ao];
        var K = {__x: I, __y: J, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        ae = H.__y < K.__y ? H.__y : K.__y;
        ae = E.__y < ae ? E.__y : ae;
        af = H.__y > K.__y ? H.__y : K.__y;
        af = E.__y > af ? E.__y : af;
        ag = H.__x < K.__x ? H.__x : K.__x;
        ag = E.__x < ag ? E.__x : ag;
        ah = H.__x > K.__x ? H.__x : K.__x;
        ah = E.__x > ah ? E.__x : ah;
        if (ae < ad && af > aa && ag < ac && ah > ab) {
            var L = U[ak];
            var M = U[am];
            var N = U[ao];
            Z.z(aj, this.jt, E, H, K, L, M, N)
        }
    }
    return Z
}, eu: function (d, e) {
    $.ig.Series.prototype.eu.call(this, d, e);
    var f = e;
    f.cx()
}, ed: function () {
    return new $.ig.ScatterAreaSeriesView(this)
}, ea: function (b) {
    $.ig.Series.prototype.ea.call(this, b);
    this.j3($.ig.util.cast($.ig.ScatterAreaSeriesView.prototype.$type, b))
}, _j3: null, j3: function (b) {
    if (arguments.length === 1) {
        this._j3 = b;
        return b
    } else {
        return this._j3
    }
}, $type: new $.ig.Type("ScatterAreaSeries", $.ig.XYTriangulatingSeries.prototype.$type)}, true);
$.ig.util.defType("TriangleRasterizer", "Object", {init: function (h, i, j, k, l, m, n) {
    this.b = 0;
    this.c = 0;
    this.f = null;
    this.g = null;
    $.ig.Object.prototype.init.call(this);
    if (h == null || i == null || l == null) {
        throw new $.ig.Error(0)
    }
    this.a = h;
    this.l(i);
    this.m(l);
    this.h(m);
    this.i(n);
    this.d = j;
    this.e = k
}, a: null, b: null, h: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        return b
    } else {
        return this.b
    }
}, c: null, i: function (b) {
    if (arguments.length === 1) {
        this.c = b;
        return b
    } else {
        return this.c
    }
}, d: null, j: function (b) {
    if (arguments.length === 1) {
        this.d = b;
        return b
    } else {
        return this.d
    }
}, e: null, k: function (b) {
    if (arguments.length === 1) {
        this.e = b;
        return b
    } else {
        return this.e
    }
}, f: null, l: function (b) {
    if (arguments.length === 1) {
        this.f = b;
        return b
    } else {
        return this.f
    }
}, g: null, m: function (b) {
    if (arguments.length === 1) {
        this.g = b;
        return b
    } else {
        return this.g
    }
}, z: function (A, K, L, M, N, O, P, Q) {
    var R = this.b;
    var S = this.c;
    var T;
    var U;
    if (M.__y > N.__y) {
        T = M;
        M = N;
        N = T;
        U = P;
        P = Q;
        Q = U
    }
    if (L.__y > N.__y) {
        T = L;
        L = N;
        N = T;
        U = O;
        O = Q;
        Q = U
    }
    if (L.__y > M.__y) {
        T = L;
        L = M;
        M = T;
        U = O;
        O = P;
        P = U
    }
    var V = Math.round(L.__y);
    var W = Math.round(M.__y);
    var X = Math.round(N.__y);
    if (X == V) {
        return
    }
    if (isNaN(O) || isNaN(P) || isNaN(Q)) {
        return
    }
    var Y = (M.__x - L.__x) * (N.__y - L.__y) - (N.__x - L.__x) * (M.__y - L.__y) >= 0;
    var Z = Math.max(0, V);
    var aa = Math.min(S - 1, W);
    for (var ab = Z; ab < aa; ++ab) {
        var ac = ((ab - V)) / ((W - V));
        var ad = L.__x + ac * (M.__x - L.__x);
        var ae = O + ac * (P - O);
        var af = ((ab - V)) / ((X - V));
        var ag = L.__x + af * (N.__x - L.__x);
        var ah = O + af * (Q - O);
        if (Y) {
            this.aa(A, K, ab, Math.round(ag), Math.round(ad), ah, ae)
        } else {
            this.aa(A, K, ab, Math.round(ad), Math.round(ag), ae, ah)
        }
    }
    var ai = Math.min(S - 1, Math.max(0, W));
    var B = Math.min(S - 1, X);
    var C = 0;
    var D = M.__x + C * (N.__x - M.__x);
    var E = P + C * (Q - P);
    var F = ai;
    var G = (X - V);
    var H = ((F - V)) / G;
    var I = L.__x + H * (N.__x - L.__x);
    var J = O + H * (Q - O);
    do {
        if (Y) {
            this.aa(A, K, F, Math.round(I), Math.round(D), J, E)
        } else {
            this.aa(A, K, F, Math.round(D), Math.round(I), E, J)
        }
        ++F;
        C = ((F - W)) / ((X - W));
        D = M.__x + C * (N.__x - M.__x);
        E = P + C * (Q - P);
        H = ((F - V)) / G;
        I = L.__x + H * (N.__x - L.__x);
        J = O + H * (Q - O)
    } while (F < B)
}, aa: function (t, u, v, x, y, z, A) {
    var B = this.b;
    var C = x > 0 ? x : 0;
    var D = y < B - 1 ? y : B - 1;
    var E = v * B * 4 + (C * 4);
    var F = A - z;
    var G = 1 / (y - x);
    var H = this.g;
    var I = this.d;
    var J = this.e;
    var K = v * B;
    for (var L = C; L <= D; L++) {
        var M = z + F * (L - x) * G;
        var w = this.f.getColor(M, I, J, H);
        this.a[E] = w.__r;
        this.a[E + 1] = w.__g;
        this.a[E + 2] = w.__b;
        this.a[E + 3] = w.__a;
        u[K + L] = t + 1;
        E += 4
    }
}, ab: function () {
}, $type: new $.ig.Type("TriangleRasterizer", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ScatterAreaSeriesView", "SeriesView", {_ch: null, ch: function (b) {
    if (arguments.length === 1) {
        this._ch = b;
        return b
    } else {
        return this._ch
    }
}, init: function (b) {
    $.ig.SeriesView.prototype.init.call(this, b);
    this.ch(b)
}, cn: function (c, d) {
}, _ci: null, ci: function (b) {
    if (arguments.length === 1) {
        this._ci = b;
        return b
    } else {
        return this._ci
    }
}, _cj: null, cj: function (b) {
    if (arguments.length === 1) {
        this._cj = b;
        return b
    } else {
        return this._cj
    }
}, _ck: null, ck: function (b) {
    if (arguments.length === 1) {
        this._ck = b;
        return b
    } else {
        return this._ck
    }
}, cu: function () {
    if (this.cj() == null) {
        this.cj($("<canvas></canvas>"));
        var f = (this.cj()[0]).getContext("2d");
        this.ck(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), f))
    }
    var g = Math.round(this.ab().left());
    var h = Math.round(this.ab().left());
    var i = Math.round(this.ab().width());
    var j = Math.round(this.ab().height());
    this.cj().attr("width", i.toString());
    this.cj().attr("height", j.toString());
    this.ci((this.ck().c()).getImageData(0, 0, i, j));
    return this.ci().data
}, cv: function (h, i, j) {
    var k = Math.round(this.ab().left());
    var l = Math.round(this.ab().left());
    var m = Math.round(this.ab().width());
    var n = Math.round(this.ab().height());
    return new $.ig.TriangleRasterizer(this.cu(), i, j.minimum(), j.maximum(), j, m, n)
}, cw: function (b) {
    this.cy(null)
}, cx: function () {
    if (this.ck() != null) {
        this.ck().t(this.ab().left(), this.ab().top(), this.ab().width(), this.ab().height())
    }
}, a0: function (h, i) {
    $.ig.SeriesView.prototype.a0.call(this, h, i);
    if (this.cj() == null) {
        return
    }
    if (i) {
        var j = new $.ig.Rectangle();
        j.y(this.ab().left());
        j.x(this.ab().top());
        j.v(this.ab().width());
        j.w(this.ab().height());
        j.__fill = this.az();
        h.f(j)
    } else {
        var k = Math.round(this.ab().left());
        var l = Math.round(this.ab().left());
        var m = Math.round(this.ab().width());
        var n = Math.round(this.ab().height());
        h.v(this.cj()[0], k, l, m, n)
    }
}, cy: function (f) {
    var g = Math.round(this.ab().left());
    var h = Math.round(this.ab().left());
    var i = Math.round(this.ab().width());
    var j = Math.round(this.ab().height());
    (this.ck().c()).putImageData(this.ci(), 0, 0);
    this.an()
}, $type: new $.ig.Type("ScatterAreaSeriesView", $.ig.SeriesView.prototype.$type)}, true);
$.ig.util.defType("ShapeSeries", "ShapeSeriesBase", {init: function () {
    var a = this;
    this.j3 = new $.ig.ScalerParams($.ig.ShapeSeries.prototype.j2, $.ig.ShapeSeries.prototype.j2, false);
    this.j4 = new $.ig.ScalerParams($.ig.ShapeSeries.prototype.j2, $.ig.ShapeSeries.prototype.j2, false);
    $.ig.ShapeSeriesBase.prototype.init.call(this);
    this.a3($.ig.ShapeSeries.prototype.$type);
    this.jz = new $.ig.NumericMarkerManager(1, function (b) {
        return a.kg().dx().item(b)
    }, function (c) {
        return a.kh().k().item(c)
    }, function (b) {
        var i = new $.ig.List$1($.ig.Object.prototype.$type, 0);
        var k = a.kg().dx().i().getEnumerator();
        while (k.moveNext()) {
            var j = k.current();
            if (!b.containsKey(j)) {
                i.add1(j)
            }
        }
        var m = i.getEnumerator();
        while (m.moveNext()) {
            var l = m.current();
            a.kg().dx().u(l)
        }
    }, function () {
        if (a.j0 == null || a.j0.length != a.kh().k().g()) {
            a.j0 = new Array(a.kh().k().g());
            for (var d = 0; d < a.kh().k().g(); d++) {
                a.j0[d] = new $.ig.Point(0)
            }
        }
        var e = a.kh().g().getUnscaledValue(a.j3.b.left(), a.j3);
        var f = a.kh().g().getUnscaledValue(a.j3.b.right(), a.j3);
        var g = a.kh().h().getUnscaledValue(a.j4.b.bottom(), a.j4);
        var h = a.kh().h().getUnscaledValue(a.j4.b.top(), a.j4);
        if (a.kh().i()) {
            var A = e;
            e = f;
            f = A
        }
        if (a.kh().j()) {
            var B = g;
            g = h;
            h = B
        }
        var C = a.kh();
        var D = C.g();
        var E = C.h();
        var F;
        var G;
        var H = a.j3.b.left();
        var I = a.j3.b.right();
        var J = a.j4.b.top();
        var K = a.j4.b.bottom();
        for (var L = 0; L < a.kh().k().g(); L++) {
            F = 0;
            G = 0;
            var M = null;
            (function () {
                var i = a.iq().tryGetValue(L, M);
                M = i.value;
                return i.ret
            }());
            if (M == null) {
                a.j0[L].__x = NaN;
                a.j0[L].__y = NaN
            } else {
                var b = M.f();
                var c = b.getCenter();
                F = c.__x;
                G = c.__y;
                if (F >= H && F <= I && G >= J && G <= K) {
                    a.j0[L].__x = F;
                    a.j0[L].__y = G
                } else {
                    a.j0[L].__x = NaN;
                    a.j0[L].__y = NaN
                }
            }
        }
        return a.j0
    }, function () {
        if (a.j1 == null || a.j1.length != a.kg().dx().j()) {
            a.j1 = new Array(a.kg().dx().j())
        }
        var b = 0;
        var c = a.dx();
        var e = a.kg().dx().i().getEnumerator();
        while (e.moveNext()) {
            var d = e.current();
            a.j1[b] = c.x(d);
            b++
        }
        return a.j1
    }, function () {
        return a.markerCollisionAvoidance()
    });
    this.jz.an(this.kg().eh.on(this.kg()))
}, i4: function () {
    return this.ki()
}, eo: function (g) {
    var f = this;
    $.ig.ShapeSeriesBase.prototype.eo.call(this, g);
    if (this.ew(this.view())) {
        return
    }
    var h, i;
    (function () {
        var a = f.getViewInfo(h, i);
        h = a.viewportRect;
        i = a.windowRect;
        return a.ret
    }());
    var j = this.seriesViewer().effectiveViewport();
    this.j3 = new $.ig.ScalerParams(i, h, this.xAxis().isInverted());
    this.j3.c = j;
    this.j4 = new $.ig.ScalerParams(i, h, this.yAxis().isInverted());
    this.j4.c = j;
    if (h.width() < 1 || h.height() < 1) {
        return
    }
    this.kh((function () {
        var a = new $.ig.ShapeAxisInfoCache();
        a.g(f.xAxis());
        a.h(f.yAxis());
        a.i(f.xAxis().isInverted());
        a.j(f.yAxis().isInverted());
        a.k(f.dx());
        a.l(f.im());
        return a
    }()));
    if (this.ki()) {
        var k = new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 0);
        this.jz.y(k, 400, i, h, this.resolution());
        this.jz.z(k, false)
    }
}, ki: function () {
    return this.actualMarkerTemplate() != null && ((this.markerType() != $.ig.MarkerType.prototype.none && this.markerType() != $.ig.MarkerType.prototype.unset) || this.markerTemplate() != null)
}, ed: function () {
    return new $.ig.ShapeSeriesView(this)
}, ea: function (b) {
    $.ig.ShapeSeriesBase.prototype.ea.call(this, b);
    this.kg(b)
}, _kg: null, kg: function (b) {
    if (arguments.length === 1) {
        this._kg = b;
        return b
    } else {
        return this._kg
    }
}, _kh: null, kh: function (b) {
    if (arguments.length === 1) {
        this._kh = b;
        return b
    } else {
        return this._kh
    }
}, jz: null, j0: null, j1: null, j3: null, j4: null, ds: function () {
    return true
}, markerType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeries.prototype.markerTypeProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeries.prototype.markerTypeProperty)
    }
}, markerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeries.prototype.markerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeries.prototype.markerTemplateProperty)
    }
}, actualMarkerTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeries.prototype.actualMarkerTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeries.prototype.actualMarkerTemplateProperty)
    }
}, markerBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeries.prototype.markerBrushProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeries.prototype.markerBrushProperty)
    }
}, actualMarkerBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeries.prototype.actualMarkerBrushProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeries.prototype.actualMarkerBrushProperty)
    }
}, markerOutline: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeries.prototype.markerOutlineProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeries.prototype.markerOutlineProperty)
    }
}, actualMarkerOutline: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeries.prototype.actualMarkerOutlineProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeries.prototype.actualMarkerOutlineProperty)
    }
}, markerStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeries.prototype.markerStyleProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeries.prototype.markerStyleProperty)
    }
}, markerCollisionAvoidance: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapeSeries.prototype.markerCollisionAvoidanceProperty, b);
        return b
    } else {
        return this.b($.ig.ShapeSeries.prototype.markerCollisionAvoidanceProperty)
    }
}, fj: function () {
    $.ig.Series.prototype.fj.call(this);
    if (this.markerTemplate() != null) {
        this.kg().ec()
    } else {
        var c = $.ig.MarkerSeries.prototype.resolveMarkerType(this, this.markerType());
        var d = $.ig.MarkerSeries.prototype.getMarkerTemplatePropertyName(c);
        if (d == null) {
            this.actualMarkerTemplate($.ig.MarkerSeries.prototype.nullMarkerTemplate)
        } else {
            this.kg().ef(d)
        }
    }
    if (this.markerBrush() != null) {
        this.kg().ed()
    } else {
        this.actualMarkerBrush(this.seriesViewer() == null ? null : this.seriesViewer().getMarkerBrushByIndex(this.index()))
    }
    if (this.markerOutline() != null) {
        this.kg().ee()
    } else {
        this.actualMarkerOutline(this.seriesViewer() == null ? null : this.seriesViewer().getMarkerOutlineByIndex(this.index()))
    }
}, e6: function (e, f, g, h) {
    $.ig.ShapeSeriesBase.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.ShapeSeries.prototype.jt:
        case $.ig.ShapeSeries.prototype.jq:
        case $.ig.ShapeSeries.prototype.jv:
        case $.ig.ShapeSeries.prototype.jr:
            this.fj();
            this.renderSeries(false);
            break;
        case $.ig.ShapeSeries.prototype.js:
            if (g == $.ig.MarkerSeries.prototype.nullMarkerTemplate || h == $.ig.MarkerSeries.prototype.nullMarkerTemplate || (g == null || h != null)) {
                this.kg().eg();
                this.renderSeries(false)
            }
            this.renderSeries(false);
            break
    }
}, getHitDataContext: function (d) {
    var e = this.kg().ei(d);
    var f = null;
    if (e != null) {
        f = e.a9()
    }
    if (f != null) {
        return f
    }
    return $.ig.ShapeSeriesBase.prototype.getHitDataContext.call(this, d)
}, $type: new $.ig.Type("ShapeSeries", $.ig.ShapeSeriesBase.prototype.$type)}, true);
$.ig.util.defType("ShapeAxisInfoCache", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _g: null, g: function (b) {
    if (arguments.length === 1) {
        this._g = b;
        return b
    } else {
        return this._g
    }
}, _h: null, h: function (b) {
    if (arguments.length === 1) {
        this._h = b;
        return b
    } else {
        return this._h
    }
}, _i: null, i: function (b) {
    if (arguments.length === 1) {
        this._i = b;
        return b
    } else {
        return this._i
    }
}, _j: null, j: function (b) {
    if (arguments.length === 1) {
        this._j = b;
        return b
    } else {
        return this._j
    }
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, _l: null, l: function (b) {
    if (arguments.length === 1) {
        this._l = b;
        return b
    } else {
        return this._l
    }
}, $type: new $.ig.Type("ShapeAxisInfoCache", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("FlattenedShape", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, _e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, _f: null, f: function (b) {
    if (arguments.length === 1) {
        this._f = b;
        return b
    } else {
        return this._f
    }
}, $type: new $.ig.Type("FlattenedShape", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ShapeSeriesView", "ShapeSeriesViewBase", {init: function (b) {
    this.dr = false;
    this.ds = null;
    $.ig.ShapeSeriesViewBase.prototype.init.call(this, b);
    this.dw(b);
    this.dx(new $.ig.HashPool$2($.ig.Object.prototype.$type, $.ig.Marker.prototype.$type));
    this.dy(new $.ig.List$1($.ig.Marker.prototype.$type, 0));
    this.d4(this.dx())
}, _dw: null, dw: function (b) {
    if (arguments.length === 1) {
        this._dw = b;
        return b
    } else {
        return this._dw
    }
}, c5: function (c, d) {
    return this.dk(c, d, true)
}, c1: function (c, d) {
    $.ig.ShapeSeriesViewBase.prototype.c1.call(this, c, d);
    $.ig.ShapeSeriesViewBase.prototype.c0(this, c, d)
}, cz: function (d, e) {
    var f = d;
    if (f == null) {
        return
    }
    f.bp(e)
}, dr: null, _dx: null, dx: function (b) {
    if (arguments.length === 1) {
        this._dx = b;
        return b
    } else {
        return this._dx
    }
}, d3: function (b) {
    this.dx().w(b)
}, d4: function (b) {
    b.create(this.d5.on(this));
    b.destroy(this.d8.on(this));
    b.activate(this.d9.on(this));
    b.disactivate(this.ea.on(this))
}, d5: function () {
    var b = this;
    var c = new $.ig.Marker();
    if (!this.dr) {
        c.a9((function () {
            var a = new $.ig.DataContext();
            a.series(b.u());
            return a
        }()))
    }
    c.ba((this.u()).actualMarkerTemplate());
    this.dy().add(c);
    return c
}, _dy: null, dy: function (b) {
    if (arguments.length === 1) {
        this._dy = b;
        return b
    } else {
        return this._dy
    }
}, d8: function (b) {
    b.a9(null);
    this.dy().remove(b)
}, d9: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, ea: function (b) {
    if (b.a9() != null) {
        ($.ig.util.cast($.ig.DataContext.prototype.$type, b.a9())).item(null)
    }
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, eb: function (b) {
    this.dr = b
}, c2: function (b) {
    $.ig.ShapeSeriesViewBase.prototype.c2.call(this, b)
}, as: function (e, f) {
    $.ig.SeriesView.prototype.as.call(this, e, f);
    var g = e;
    var h = g.a9();
    if (h != null) {
        if (this.dw().actualMarkerBrush() != null) {
            h.actualItemBrush(this.dw().actualMarkerBrush())
        } else {
            h.actualItemBrush(this.cp().actualBrush())
        }
        if (this.dw().actualMarkerBrush() != null) {
            h.outline(this.dw().actualMarkerOutline())
        } else {
            h.outline(this.cp().actualOutline())
        }
        h.thickness(0.5)
    }
}, au: function (f, g) {
    $.ig.SeriesView.prototype.au.call(this, f, g);
    var h = f;
    var i = this.ay(g);
    var j = h.a9();
    if (j != null) {
        j.actualItemBrush(i);
        j.outline(i);
        j.thickness(1 + $.ig.ShapeSeriesViewBase.prototype.cd)
    }
}, a1: function (n, o) {
    $.ig.SeriesView.prototype.a1.call(this, n, o);
    var p = new $.ig.DataTemplatePassInfo();
    p.isHitTestRender = o;
    p.context = n.c();
    p.viewportTop = this.ab().top();
    p.viewportLeft = this.ab().left();
    p.viewportWidth = this.ab().width();
    p.viewportHeight = this.ab().height();
    p.passID = "Markers";
    var q = new $.ig.DataTemplateRenderInfo();
    q.passInfo = p;
    q.isHitTestRender = o;
    var r = new $.ig.DataTemplateMeasureInfo();
    r.passInfo = p;
    var s = false;
    var t = n.c();
    r.context = t;
    q.context = t;
    var u = 0;
    var v = 0;
    var w = true;
    if (this.dw().actualMarkerTemplate() != null && this.dw().actualMarkerTemplate().passStarting() != null) {
        this.dw().actualMarkerTemplate().passStarting()(p)
    }
    for (var x = 0; x < this.dy().count(); x++) {
        var y = this.dy().__inner[x];
        if (y.__visibility == $.ig.Visibility.prototype.collapsed) {
            continue
        }
        this.aq(y, x, o);
        if (!s) {
            r.width = y.v();
            r.height = y.w();
            var z = y.ba();
            if (z.measure() != null) {
                r.data = y.a9();
                z.measure()(r);
                s = r.isConstant;
                if (s) {
                    u = r.width;
                    v = r.height
                }
            }
            q.availableWidth = r.width;
            q.availableHeight = r.height
        } else {
            q.availableWidth = u;
            q.availableHeight = v
        }
        if (!isNaN(y.v()) && !Number.isInfinity(y.v())) {
            q.availableWidth = y.v()
        }
        if (!isNaN(y.w()) && !Number.isInfinity(y.w())) {
            q.availableHeight = y.w()
        }
        w = false;
        n.l(q, y);
        y.t(q.availableWidth);
        y.u(q.availableHeight)
    }
    if (this.dw().actualMarkerTemplate() != null && this.dw().actualMarkerTemplate().passCompleted() != null) {
        this.dw().actualMarkerTemplate().passCompleted()(p)
    }
}, ec: function () {
    this.dw().actualMarkerTemplate(null);
    this.dw().actualMarkerTemplate(this.dw().markerTemplate())
}, ed: function () {
    this.dw().actualMarkerBrush(null);
    this.dw().actualMarkerBrush(this.dw().markerBrush())
}, ee: function () {
    this.dw().actualMarkerOutline(null);
    this.dw().actualMarkerOutline(this.dw().markerOutline())
}, ef: function (c) {
    var b = this;
    switch (c) {
        case"CircleMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().circleMarkerTemplate());
            break;
        case"TriangleMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().triangleMarkerTemplate());
            break;
        case"PyramidMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().pyramidMarkerTemplate());
            break;
        case"SquareMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().squareMarkerTemplate());
            break;
        case"DiamondMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().diamondMarkerTemplate());
            break;
        case"PentagonMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().pentagonMarkerTemplate());
            break;
        case"HexagonMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().hexagonMarkerTemplate());
            break;
        case"TetragramMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().pentagonMarkerTemplate());
            break;
        case"PentagramMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().pentagramMarkerTemplate());
            break;
        case"HexagramMarkerTemplate":
            this.dw().actualMarkerTemplate(this.dw().seriesViewer().hexagramMarkerTemplate());
            break
    }
}, eg: function () {
    var d = this.dy().getEnumerator();
    while (d.moveNext()) {
        var c = d.current();
        c.ba(this.dw().actualMarkerTemplate())
    }
    this.an()
}, ds: null, eh: function (c) {
    if (this.ds == null) {
        this.ds = new $.ig.DataTemplateMeasureInfo();
        this.ds.context = this.z().c()
    }
    this.ds.width = c.v();
    this.ds.height = c.w();
    this.ds.data = c.a9();
    var d = c.ba();
    if (d.measure() != null) {
        d.measure()(this.ds)
    }
    return new $.ig.Size(this.ds.width, this.ds.height)
}, ei: function (f) {
    var h = this.dy().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        if (g.__visibility == $.ig.Visibility.prototype.collapsed) {
            continue
        }
        var i = (g.t() / 2) + $.ig.ShapeSeriesView.prototype.cd;
        var j = (g.u() / 2) + $.ig.ShapeSeriesView.prototype.cd;
        if (g.y() - i <= f.__x && g.y() + i >= f.__x && g.x() - j <= f.__y && g.x() + j >= f.__y) {
            return g
        }
    }
    return null
}, $type: new $.ig.Type("ShapeSeriesView", $.ig.ShapeSeriesViewBase.prototype.$type)}, true);
$.ig.util.defType("ShapeHitRegion", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, $type: new $.ig.Type("ShapeHitRegion", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ShapefileRecord", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this)
}, fields: null, points: null, f: function (b) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(b))
    }
}, propertyChanged: null, $type: new $.ig.Type("ShapefileRecord", $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("ShapefileConverter", "DependencyObjectNotifier", {init: function () {
    var a = this;
    $.ig.DependencyObjectNotifier.prototype.init.call(this);
    this.records(new $.ig.ObservableCollection$1($.ig.ShapefileRecord.prototype.$type, 0));
    this.records().collectionChanged = $.ig.Delegate.prototype.combine(this.records().collectionChanged, function (c, d) {
        if (a.collectionChanged != null) {
            a.collectionChanged(a, d)
        }
    })
}, worldRect: function (c) {
    if (arguments.length === 1) {
        if (this.j != c) {
            var d = this.j;
            this.j = c;
            this.s($.ig.ShapefileConverter.prototype.g, d, this.j)
        }
        return c
    } else {
        return this.j
    }
}, j: null, shapefileSource: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapefileConverter.prototype.shapefileSourceProperty, b);
        return b
    } else {
        return $.ig.util.cast($.ig.Uri.prototype.$type, this.b($.ig.ShapefileConverter.prototype.shapefileSourceProperty))
    }
}, databaseSource: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ShapefileConverter.prototype.databaseSourceProperty, b);
        return b
    } else {
        return $.ig.util.cast($.ig.Uri.prototype.$type, this.b($.ig.ShapefileConverter.prototype.databaseSourceProperty))
    }
}, s: function (d, e, f) {
    switch (d) {
        case $.ig.ShapefileConverter.prototype.h:
        case $.ig.ShapefileConverter.prototype.i:
            if (this.shapefileSource() != null && this.databaseSource() != null) {
                this.u()
            }
            break
    }
    this.f(d)
}, importCompleted: null, t: function (b) {
    if (this.importCompleted != null) {
        this.importCompleted(this, b)
    }
}, u: function () {
    var d = this;
    var e = null;
    var f = null;
    var g = function () {
        if (e != null && f != null) {
            d.v(e, f);
            d.t(new $.ig.AsyncCompletedEventArgs(null, false, null))
        }
    };
    $.ig.BinaryFileDownloader.prototype.a(this.shapefileSource().value(), function (a) {
        e = new $.ig.BinaryReader(a, false);
        g()
    }, function (a) {
        throw new $.ig.Error(1, "shape file download error: " + a)
    });
    $.ig.BinaryFileDownloader.prototype.a(this.databaseSource().value(), function (a) {
        f = new $.ig.BinaryReader(a, false);
        g()
    }, function (a) {
        throw new $.ig.Error(1, "dbf file download error: " + a)
    })
}, v: function (g, h) {
    var i = $.ig.ShapeFileUtil.prototype.b(g, h);
    this.worldRect(i.e());
    var j = g.d();
    var k = g.e();
    while (j < k) {
        var l = $.ig.ShapeFileUtil.prototype.c(i, g, h);
        var m = l;
        if (m.fields != null) {
            m.fieldValues = m.fields.__inner.proxy
        }
        this.records().add(l);
        j = g.d();
        k = g.e()
    }
}, l: null, records: function (b) {
    if (arguments.length === 1) {
        this.l = b;
        return b
    } else {
        return this.l
    }
}, collectionChanged: null, indexOf: function (b) {
    return this.l.indexOf(b)
}, insert: function (c, d) {
    this.l.insert(c, d)
}, removeAt: function (b) {
    this.l.removeAt(b)
}, item: function (d, c) {
    if (arguments.length === 2) {
        this.l.__inner[d] = c;
        return c
    } else {
        return this.l.__inner[d]
    }
}, add: function (b) {
    this.l.add(b)
}, clear: function () {
    this.l.clear()
}, contains: function (b) {
    return this.l.contains(b)
}, copyTo: function (c, d) {
    this.l.copyTo(c, d)
}, count: function () {
    return this.l.count()
}, isReadOnly: function () {
    return(this.l).isReadOnly()
}, remove: function (b) {
    return this.l.remove(b)
}, getEnumerator: function () {
    return this.l.getEnumerator()
}, $type: new $.ig.Type("ShapefileConverter", $.ig.DependencyObjectNotifier.prototype.$type, [$.ig.IList$1.prototype.$type.specialize($.ig.ShapefileRecord.prototype.$type), $.ig.INotifyCollectionChanged.prototype.$type])}, true);
$.ig.util.defType("ShapeFileUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, b: function (l, m) {
    if ($.ig.ShapeFileUtil.prototype.a == null) {
        $.ig.ShapeFileUtil.prototype.l()
    }
    var n = new $.ig.Header();
    var o = $.ig.ShapeFileUtil.prototype.d(l.p());
    if (o != 9994) {
        throw new $.ig.Error(1, "Corrupt Shp file - incorrect file code")
    }
    l.p();
    l.p();
    l.p();
    l.p();
    l.p();
    $.ig.ShapeFileUtil.prototype.d(l.p());
    l.p();
    n.d(l.p());
    var p = new $.ig.Point(0);
    var q = new $.ig.Point(0);
    p.__x = l.q();
    p.__y = l.q();
    q.__x = l.q();
    q.__y = l.q();
    l.q();
    l.q();
    l.q();
    l.q();
    n.e(new $.ig.Rect(0, p.__x, p.__y, q.__x - p.__x, q.__y - p.__y));
    if (m != null) {
        var r = m.l();
        if (r != 3) {
            throw new $.ig.Error(1, "Corrupt Dbf file - wrong version number")
        }
        m.l();
        m.l();
        m.l();
        m.n();
        m.o();
        var s = m.o();
        m.m(2);
        m.m(1);
        m.m(1);
        m.m(4);
        m.m(8);
        m.m(1);
        m.m(1);
        m.m(2);
        var t = 0;
        while (t < s - 1) {
            var u = new $.ig.XBaseField();
            u.a = $.ig.Encoding.prototype.uTF8().getString(m.m(11), 0, 10).replace("\0", "");
            var v = $.ig.Encoding.prototype.uTF8().getString(m.m(1), 0, 1).charAt(0);
            u.b = $.ig.ShapeFileUtil.prototype.a.item(v);
            m.m(4);
            u.c = m.l();
            m.m(15);
            n.a.add(u);
            t += u.c
        }
        if (m.l() != 13) {
            throw new $.ig.Error(1, "Corrup Dbf file - Missing field descriptor array terminator")
        }
    }
    return n
}, c: function (r, s, t) {
    var u = $.ig.ShapeFileUtil.prototype.d(s.p());
    var v = $.ig.ShapeFileUtil.prototype.d(s.p());
    var w = s.p();
    var x = null;
    switch (w) {
        case $.ig.ShapeType.prototype.none:
            break;
        case $.ig.ShapeType.prototype.point:
            x = $.ig.ShapeFileUtil.prototype.e(s);
            break;
        case $.ig.ShapeType.prototype.polyLine:
            x = $.ig.ShapeFileUtil.prototype.h(s);
            break;
        case $.ig.ShapeType.prototype.polygon:
            x = $.ig.ShapeFileUtil.prototype.j(s);
            break;
        case $.ig.ShapeType.prototype.polyPoint:
            break;
        case $.ig.ShapeType.prototype.pointZ:
            break;
        case $.ig.ShapeType.prototype.polyLineZ:
            x = $.ig.ShapeFileUtil.prototype.f(s);
            break;
        case $.ig.ShapeType.prototype.polygonZ:
            x = $.ig.ShapeFileUtil.prototype.i(s);
            break;
        case $.ig.ShapeType.prototype.polyPointZ:
            break;
        case $.ig.ShapeType.prototype.pointM:
            break;
        case $.ig.ShapeType.prototype.polyLineM:
            break;
        case $.ig.ShapeType.prototype.polygonM:
            break;
        case $.ig.ShapeType.prototype.polyPointM:
            break;
        case $.ig.ShapeType.prototype.polyPatch:
            break;
        default:
            break
    }
    if (x == null) {
        throw new $.ig.Error(1, "Corrupt Shp file - failed to read " + w.toString())
    }
    if (t != null) {
        t.m(1);
        x.fields = new $.ig.Dictionary$2(String, $.ig.Object.prototype.$type, 0);
        var z = r.a.getEnumerator();
        while (z.moveNext()) {
            var y = z.current();
            var A = t.m(y.c);
            var B = $.ig.Encoding.prototype.uTF8().getString(A, 0, y.c);
            var C;
            var D;
            var E;
            switch (y.b) {
                case $.ig.XBaseDataType.prototype.number:
                    var F = parseFloat(B);
                    if (!isNaN(F)) {
                        x.fields.add(y.a, F)
                    }
                    break;
                case $.ig.XBaseDataType.prototype.floatingPoint:
                    var G = parseFloat(B);
                    if (!isNaN(G)) {
                        x.fields.add(y.a, G)
                    }
                    break;
                case $.ig.XBaseDataType.prototype.character:
                    x.fields.add(y.a, B.trim());
                    break;
                case $.ig.XBaseDataType.prototype.date:
                    var I = B;
                    var H = Date.parse(I);
                    x.fields.add(y.a, H);
                    break;
                default:
                    throw new $.ig.Error(1, "Unrecognized field type")
            }
        }
    }
    return x
}, d: function (b) {
    return(((b & 255) << 24) | ((b & 65280) << 8) | ((b & 16711680) >> 8) | ((b & 4278190080) >> 24))
}, e: function (d) {
    var c = this;
    var e = (function () {
        var a = new $.ig.Point(0);
        a.__x = d.q();
        a.__y = d.q();
        return a
    }());
    return(function () {
        var a = new $.ig.ShapefileRecord();
        a.points = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 1, (function () {
            var b = new Array();
            b.add(new $.ig.List$1($.ig.Point.prototype.$type, 1, (function () {
                var f = new Array();
                f.add(e);
                return f
            }())));
            return b
        }()));
        return a
    }())
}, f: function (h) {
    var g = this;
    var i, j;
    var k = (function () {
        var a = $.ig.ShapeFileUtil.prototype.g(h, i, j);
        i = a.numParts;
        j = a.numPoints;
        return a.ret
    }());
    h.q();
    h.q();
    for (var l = 0; l < j; l++) {
        h.q()
    }
    h.q();
    h.q();
    for (var m = 0; m < j; m++) {
        h.q()
    }
    return k
}, g: function (p, q, r) {
    var o = this;
    var s = new $.ig.Point(0);
    var t = (function () {
        var a = new $.ig.Point(0);
        a.__x = p.q();
        a.__y = p.q();
        return a
    }());
    var u = (function () {
        var a = new $.ig.Point(0);
        a.__x = p.q();
        a.__y = p.q();
        return a
    }());
    var v = new $.ig.Rect(0, t.__x, t.__y, u.__x - t.__x, u.__y - t.__y);
    q = p.p();
    r = p.p();
    var w = new Array(q);
    for (var x = 0; x < q; ++x) {
        w[x] = p.p()
    }
    var y = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
    for (var z = 0; z < q; ++z) {
        var A = (z < q - 1 ? w[z + 1] : r) - w[z];
        var B = new $.ig.List$1($.ig.Point.prototype.$type, 2, A - 1);
        for (var C = 0; C < A; ++C) {
            s = new $.ig.Point(0);
            s.__x = p.q();
            s.__y = p.q();
            B.add(s)
        }
        if (B.count() > 0) {
            y.add(B)
        }
    }
    return{ret: (function () {
        var a = new $.ig.ShapefileRecord();
        a.points = y;
        return a
    }()), numParts: q, numPoints: r};
    return{numParts: q, numPoints: r}
}, h: function (e) {
    var d = this;
    var f, g;
    return(function () {
        var a = $.ig.ShapeFileUtil.prototype.g(e, f, g);
        f = a.numParts;
        g = a.numPoints;
        return a.ret
    }())
}, i: function (h) {
    var g = this;
    var i, j;
    var k = (function () {
        var a = $.ig.ShapeFileUtil.prototype.k(h, i, j);
        i = a.numParts;
        j = a.numPoints;
        return a.ret
    }());
    h.q();
    h.q();
    for (var l = 0; l < j; l++) {
        h.q()
    }
    h.q();
    h.q();
    for (var m = 0; m < j; m++) {
        h.q()
    }
    return k
}, j: function (e) {
    var d = this;
    var f, g;
    return(function () {
        var a = $.ig.ShapeFileUtil.prototype.k(e, f, g);
        f = a.numParts;
        g = a.numPoints;
        return a.ret
    }())
}, k: function (p, q, r) {
    var o = this;
    var s = (function () {
        var a = new $.ig.Point(0);
        a.__x = p.q();
        a.__y = p.q();
        return a
    }());
    var t = (function () {
        var a = new $.ig.Point(0);
        a.__x = p.q();
        a.__y = p.q();
        return a
    }());
    var u = new $.ig.Rect(0, s.__x, s.__y, t.__x - s.__x, t.__y - s.__y);
    var v = new $.ig.Point(0);
    q = p.p();
    r = p.p();
    var w = new Array(q);
    for (var x = 0; x < q; ++x) {
        w[x] = p.p()
    }
    var y = new $.ig.List$1($.ig.List$1.prototype.$type.specialize($.ig.Point.prototype.$type), 0);
    for (var z = 0; z < q; ++z) {
        var A = (z < q - 1 ? w[z + 1] : r) - w[z];
        var B = new $.ig.List$1($.ig.Point.prototype.$type, 2, A);
        v = new $.ig.Point(0);
        v.__x = p.q();
        v.__y = p.q();
        for (var C = 1; C < A; ++C) {
            v = new $.ig.Point(0);
            v.__x = p.q();
            v.__y = p.q();
            B.add(v)
        }
        if (B.count() > 1) {
            y.add(B)
        }
    }
    return{ret: (function () {
        var a = new $.ig.ShapefileRecord();
        a.points = y;
        return a
    }()), numParts: q, numPoints: r};
    return{numParts: q, numPoints: r}
}, a: null, l: function () {
    $.ig.ShapeFileUtil.prototype.a = new $.ig.Dictionary$2($.ig.String.prototype.$type, $.ig.XBaseDataType.prototype.$type, 0);
    $.ig.ShapeFileUtil.prototype.a.item("C", $.ig.XBaseDataType.prototype.character);
    $.ig.ShapeFileUtil.prototype.a.item("N", $.ig.XBaseDataType.prototype.number);
    $.ig.ShapeFileUtil.prototype.a.item("L", $.ig.XBaseDataType.prototype.logical);
    $.ig.ShapeFileUtil.prototype.a.item("D", $.ig.XBaseDataType.prototype.date);
    $.ig.ShapeFileUtil.prototype.a.item("M", $.ig.XBaseDataType.prototype.memo);
    $.ig.ShapeFileUtil.prototype.a.item("F", $.ig.XBaseDataType.prototype.floatingPoint);
    $.ig.ShapeFileUtil.prototype.a.item("B", $.ig.XBaseDataType.prototype.binary);
    $.ig.ShapeFileUtil.prototype.a.item("G", $.ig.XBaseDataType.prototype.general);
    $.ig.ShapeFileUtil.prototype.a.item("P", $.ig.XBaseDataType.prototype.picture);
    $.ig.ShapeFileUtil.prototype.a.item("Y", $.ig.XBaseDataType.prototype.currency);
    $.ig.ShapeFileUtil.prototype.a.item("T", $.ig.XBaseDataType.prototype.dateTime);
    $.ig.ShapeFileUtil.prototype.a.item("I", $.ig.XBaseDataType.prototype.integer);
    $.ig.ShapeFileUtil.prototype.a.item("V", $.ig.XBaseDataType.prototype.variField);
    $.ig.ShapeFileUtil.prototype.a.item("X", $.ig.XBaseDataType.prototype.variant);
    $.ig.ShapeFileUtil.prototype.a.item("@", $.ig.XBaseDataType.prototype.timestamp);
    $.ig.ShapeFileUtil.prototype.a.item("O", $.ig.XBaseDataType.prototype.double1);
    $.ig.ShapeFileUtil.prototype.a.item("+", $.ig.XBaseDataType.prototype.autoIncrement)
}, staticInit: function () {
    $.ig.ShapeFileUtil.prototype.l()
}, $type: new $.ig.Type("ShapeFileUtil", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Header", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.List$1($.ig.XBaseField.prototype.$type, 0)
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, _e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, f: function () {
    return{__x: this.e().left(), __y: this.e().top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, g: function () {
    return{__x: this.e().right(), __y: this.e().bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, a: null, $type: new $.ig.Type("Header", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("XBaseField", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, $type: new $.ig.Type("XBaseField", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("StyleSelector", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, selectStyle: function (c, d) {
    return null
}, $type: new $.ig.Type("StyleSelector", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ItfConverter", "DependencyObject", {init: function () {
    $.ig.DependencyObject.prototype.init.call(this)
}, source: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ItfConverter.prototype.sourceProperty, b);
        return b
    } else {
        return $.ig.util.cast($.ig.Uri.prototype.$type, this.b($.ig.ItfConverter.prototype.sourceProperty))
    }
}, g: null, triangulationSource: function (d) {
    if (arguments.length === 1) {
        var e = d != this.triangulationSource();
        if (e) {
            var f = this.g;
            this.g = d;
            this.o($.ig.ItfConverter.prototype.f, f, this.triangulationSource())
        }
        return d
    } else {
        return this.g
    }
}, l: function () {
    var c = this;
    var d = null;
    var e = function () {
        if (d != null) {
            c.triangulationSource($.ig.TriangulationSource.prototype.loadItf(d))
        }
        c.m(new $.ig.AsyncCompletedEventArgs(null, false, null))
    };
    $.ig.BinaryFileDownloader.prototype.a(this.source().value(), function (a) {
        d = new $.ig.BinaryReader(a, false);
        e()
    }, function (a) {
        throw new $.ig.Error(1, "itf file download error: " + a)
    })
}, importCompleted: null, m: function (b) {
    if (this.importCompleted != null) {
        this.importCompleted(this, b)
    }
}, n: function (d, e, f) {
    switch (d) {
        case $.ig.ItfConverter.prototype.e:
            if (this.source() != null) {
                this.l()
            }
            break
    }
}, o: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    this.n(d, e, f)
}, propertyChanged: null, $type: new $.ig.Type("ItfConverter", $.ig.DependencyObject.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("Triangle", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, v1: null, v2: null, v3: null, $type: new $.ig.Type("Triangle", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TriangulationSource", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, create: function (n, o, p) {
    var q = new $.ig.TriangulationSource();
    var r = new Array(n);
    var s;
    var t;
    var u = new Array(n);
    var v = new Array(n);
    var w = 0;
    var x = 0;
    for (var y = 0; y < n; y++) {
        s = new $.ig.TriangulationSourcePointRecord();
        t = o(y);
        w = t.__x;
        x = t.__y;
        s.pointX = w;
        s.pointY = x;
        s.value = p(y);
        r[y] = s;
        u[y] = w;
        v[y] = x
    }
    q.points(r);
    var z = new $.ig.Triangulator(n, u, v);
    z.n();
    q.triangles((z.r().asArrayList()));
    return q
}, loadItf: function (m) {
    m.m(5);
    var n = m.p();
    var o = m.p();
    var p = m.p();
    var q = m.p();
    m.m(q);
    var r = new $.ig.TriangulationSource();
    var s = new Array(n);
    var t;
    for (var u = 0; u < n; u++) {
        t = new $.ig.TriangulationSourcePointRecord();
        t.pointX = m.q();
        t.pointY = m.q();
        t.value = m.r();
        s[u] = t
    }
    r.points(s);
    var v = new Array(o);
    var w;
    for (var x = 0; x < o; x++) {
        w = new $.ig.Triangle();
        w.v1 = m.p();
        w.v2 = m.p();
        w.v3 = m.p();
        v[x] = w
    }
    r.triangles(v);
    return r
}, _points: null, points: function (b) {
    if (arguments.length === 1) {
        this._points = b;
        return b
    } else {
        return this._points
    }
}, _triangles: null, triangles: function (b) {
    if (arguments.length === 1) {
        this._triangles = b;
        return b
    } else {
        return this._triangles
    }
}, $type: new $.ig.Type("TriangulationSource", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TriangulatorContext", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null, i: null, j: null, k: null, l: null, m: null, n: null, o: null, p: null, $type: new $.ig.Type("TriangulatorContext", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Triangulator", "DependencyObject", {e: null, f: null, g: null, init: function (d, e, f) {
    this.h = 0;
    $.ig.DependencyObject.prototype.init.call(this);
    this.e = d;
    this.f = e;
    this.g = f
}, m: function () {
    this.o();
    this.k().p = true;
    this.w()
}, n: function () {
    this.o();
    this.k().p = false;
    this.w()
}, o: function () {
    var g = this;
    var h = this.e;
    var C = this.f;
    var D = this.g;
    var E = new $.ig.List$1($.ig.Triangle.prototype.$type, 0);
    if (h >= 3) {
        var F = (function () {
            var a = new $.ig.List$1($.ig.Number.prototype.$type, 0);
            a.h(h);
            return a
        }());
        for (var G = 0; G < h; ++G) {
            F.add(G)
        }
        var H = function (a, b) {
            if (C.item(a) < C.item(b)) {
                return -1
            } else {
                if (C.item(a) > C.item(b)) {
                    return 1
                }
            }
            if (D.item(a) < D.item(b)) {
                return -1
            } else {
                if (D.item(a) > D.item(b)) {
                    return 1
                }
            }
            return 0
        };
        F.t(H);
        var I = C.item(F.__inner[0]);
        var J = C.item(F.__inner[h - 1]);
        var K = D.item(F.__inner[0]);
        var L = K;
        for (var M = 1; M < h; M++) {
            K = Math.min(K, D.item(F.__inner[M]));
            L = Math.max(L, C.item(F.__inner[M]))
        }
        var N = J - I;
        var O = L - K;
        var P = Math.max(N, O);
        var Q = (J + I) / 2;
        var R = (L + K) / 2;
        var S = {__x: Q - 20 * P, __y: R - P, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var T = {__x: Q, __y: R + 20 * P, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var U = {__x: Q + 20 * P, __y: R - P, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var V = new $.ig.LinkedList$1($.ig.Triangle.prototype.$type);
        var W = new $.ig.LinkedList$1($.ig.Triangle.prototype.$type);
        var X = new $.ig.HalfEdgeSet();
        var Y = new $.ig.PointTester();
        V.g((function () {
            var a = new $.ig.Triangle();
            a.v1 = h;
            a.v2 = h + 1;
            a.v3 = h + 2;
            return a
        }()));
        var A = new $.ig.TriangulatorContext();
        A.a = h;
        A.e = S;
        A.f = T;
        A.g = U;
        A.i = W;
        A.k = X;
        A.j = F;
        A.l = Y;
        A.d = E;
        A.h = V;
        A.b = C;
        A.c = D;
        var B = 1;
        if (h > 3000) {
            B = 20
        }
        A.m = Math.ceil(h / B);
        A.n = 0;
        A.o = A.m;
        this.h = 0;
        this.p();
        this.k(A)
    }
}, p: function () {
    this.q()
}, q: function () {
    if (this.triangulationStatusChanged != null) {
        this.triangulationStatusChanged(this, new $.ig.TriangulationStatusEventArgs(this.h))
    }
}, r: function () {
    if (this.k() == null) {
        return null
    }
    return this.k().d
}, _k: null, k: function (b) {
    if (arguments.length === 1) {
        this._k = b;
        return b
    } else {
        return this._k
    }
}, u: function () {
    var A = this;
    if (this.k() == null) {
        return
    }
    var B = this.k();
    var M = this.k().a;
    var N = this.k().b;
    var O = this.k().c;
    var P = this.k().j;
    var Q = this.k().e;
    var R = this.k().f;
    var S = this.k().g;
    var T = this.k().d;
    var U = this.k().h;
    var V = this.k().i;
    var W = this.k().l;
    var X = this.k().k;
    var Y = this.k().n;
    var Z = this.k().o;
    var aa;
    var ab;
    var ac;
    var ad;
    var ae;
    var af;
    var ag;
    var ah;
    var ai;
    var aj;
    var ak;
    var C;
    for (var D = Y; D < Z; ++D) {
        X.e();
        if (D < M) {
            aa = N.item(P.__inner[D]);
            ab = O.item(P.__inner[D])
        } else {
            if (D == M) {
                aa = Q.__x;
                ab = Q.__y
            } else {
                if (D == M + 1) {
                    aa = R.__x;
                    ab = R.__y
                } else {
                    aa = S.__x;
                    ab = S.__y
                }
            }
        }
        var E = null;
        for (var F = U.c(); F != null; F = E) {
            E = F.b;
            C = F.d();
            ac = C.v1;
            af = C.v2;
            ai = C.v3;
            if (ac < M) {
                ad = N.item(P.__inner[ac]);
                ae = O.item(P.__inner[ac])
            } else {
                if (ac == M) {
                    ad = Q.__x;
                    ae = Q.__y
                } else {
                    if (ac == M + 1) {
                        ad = R.__x;
                        ae = R.__y
                    } else {
                        ad = S.__x;
                        ae = S.__y
                    }
                }
            }
            if (af < M) {
                ag = N.item(P.__inner[af]);
                ah = O.item(P.__inner[af])
            } else {
                if (af == M) {
                    ag = Q.__x;
                    ah = Q.__y
                } else {
                    if (af == M + 1) {
                        ag = R.__x;
                        ah = R.__y
                    } else {
                        ag = S.__x;
                        ah = S.__y
                    }
                }
            }
            if (ai < M) {
                aj = N.item(P.__inner[ai]);
                ak = O.item(P.__inner[ai])
            } else {
                if (ai == M) {
                    aj = Q.__x;
                    ak = Q.__y
                } else {
                    if (ai == M + 1) {
                        aj = R.__x;
                        ak = R.__y
                    } else {
                        aj = S.__x;
                        ak = S.__y
                    }
                }
            }
            W.c(aa, ab, ad, ae, ag, ah, aj, ak);
            if (W.a) {
                V.h(C);
                U.i(F)
            }
            if (W.b) {
                var G;
                G = new $.ig.HalfEdge(ac, af);
                if (X.g(G)) {
                    X.d(G)
                } else {
                    X.c(G)
                }
                G = new $.ig.HalfEdge(af, ai);
                if (X.g(G)) {
                    X.d(G)
                } else {
                    X.c(G)
                }
                G = new $.ig.HalfEdge(ai, ac);
                if (X.g(G)) {
                    X.d(G)
                } else {
                    X.c(G)
                }
                U.i(F)
            }
        }
        var I = X.getEnumerator();
        while (I.moveNext()) {
            var H = I.current();
            var J = new $.ig.Triangle();
            J.v1 = H.c();
            J.v2 = H.d();
            J.v3 = D;
            U.h(J)
        }
    }
    if (Z == M) {
        for (var K = V.c(); K != null; K = K.b) {
            C = K.d();
            if (C.v1 < M && C.v2 < M && C.v3 < M) {
                T.add((function () {
                    var a = new $.ig.Triangle();
                    a.v1 = P.__inner[C.v1];
                    a.v2 = P.__inner[C.v2];
                    a.v3 = P.__inner[C.v3];
                    return a
                }()))
            }
        }
        for (var L = U.c(); L != null; L = L.b) {
            C = L.d();
            if (C.v1 < M && C.v2 < M && C.v3 < M) {
                T.add((function () {
                    var a = new $.ig.Triangle();
                    a.v1 = P.__inner[C.v1];
                    a.v2 = P.__inner[C.v2];
                    a.v3 = P.__inner[C.v3];
                    return a
                }()))
            }
        }
        this.h = 100;
        this.p()
    } else {
        Y = Z;
        Z += B.m;
        if (Z > M) {
            Z = M
        }
        B.n = Y;
        B.o = Z;
        this.h += Math.floor(100 / 20);
        this.p();
        this.w()
    }
}, v: function () {
    this.k(null)
}, w: function () {
    if (this.k().p) {
        window.setTimeout(this.u.on(this), 0)
    } else {
        this.u()
    }
}, h: null, l: function () {
    return this.h
}, triangulationStatusChanged: null, $type: new $.ig.Type("Triangulator", $.ig.DependencyObject.prototype.$type)}, true);
$.ig.util.defType("TriangulationStatusEventArgs", "EventArgs", {_currentStatus: null, currentStatus: function (b) {
    if (arguments.length === 1) {
        this._currentStatus = b;
        return b
    } else {
        return this._currentStatus
    }
}, init: function (b) {
    $.ig.EventArgs.prototype.init.call(this);
    this.currentStatus(b)
}, $type: new $.ig.Type("TriangulationStatusEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("HalfEdge", "Object", {init: function (c, d) {
    $.ig.Object.prototype.init.call(this);
    this.c(c);
    this.d(d)
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, $type: new $.ig.Type("HalfEdge", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("HalfEdgeSet", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.Dictionary$2($.ig.HalfEdge.prototype.$type, $.ig.Object.prototype.$type, 2, new $.ig.EdgeComparer())
}, getEnumerator: function () {
    return this.a.keys().getEnumerator()
}, c: function (b) {
    this.a.add(b, null)
}, d: function (b) {
    this.a.remove(b)
}, e: function () {
    this.a.clear()
}, b: function () {
    return this.a.count()
}, g: function (b) {
    return this.a.containsKey(b)
}, a: null, $type: new $.ig.Type("HalfEdgeSet", $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize($.ig.HalfEdge.prototype.$type)])}, true);
$.ig.util.defType("EdgeComparer", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, equals: function (c, d) {
    return(c.c() == d.c() && c.d() == d.d()) || (c.c() == d.d() && c.d() == d.c())
}, getHashCode: function (b) {
    return 65536 * Math.max(b.c(), b.d()) + Math.min(b.c(), b.d())
}, $type: new $.ig.Type("EdgeComparer", $.ig.Object.prototype.$type, [$.ig.IEqualityComparer$1.prototype.$type.specialize($.ig.HalfEdge.prototype.$type)])}, true);
$.ig.util.defType("PointTester", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, c: function (w, x, y, z, A, B, C, D) {
    var E = Math.abs(z - B);
    var F = Math.abs(B - D);
    var G = 0;
    var H = 0;
    if (E == 0 && F == 0) {
        return false
    }
    if (E == 0 && F != 0) {
        G = (A + y) / 2;
        H = (-(C - A) / (D - B)) * (G - ((A + C) / 2)) + ((B + D) / 2)
    }
    if (E != 0 && F == 0) {
        G = (C + A) / 2;
        H = (-(A - y) / (B - z)) * (G - ((y + A) / 2)) + ((z + B) / 2)
    }
    if (E != 0 && F != 0) {
        var I = -(A - y) / (B - z);
        var J = -(C - A) / (D - B);
        var K = (y + A) / 2;
        var L = (A + C) / 2;
        var M = (z + B) / 2;
        var N = (B + D) / 2;
        G = (I * K - J * L + N - M) / (I - J);
        H = E > F ? I * (G - K) + M : J * (G - L) + N
    }
    var O = A - G;
    var P = B - H;
    var Q = O * O + P * P;
    O = w - G;
    P = x - H;
    var R = O * O + P * P;
    this.b = R <= Q;
    this.a = G < w && ((w - G) * (w - G)) > Q;
    return true
}, a: null, b: null, $type: new $.ig.Type("PointTester", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TriangulationSourcePointRecord", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, pointX: null, pointY: null, value: null, $type: new $.ig.Type("TriangulationSourcePointRecord", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("XamGeographicMap", "SeriesViewer", {init: function () {
    var c = this;
    this.kq = {__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    $.ig.SeriesViewer.prototype.init.call(this);
    this.kk = $.ig.SphericalMercatorVerticalScaler.prototype.aw($.ig.XamGeographicMap.prototype.kj.bottom()) - $.ig.SphericalMercatorVerticalScaler.prototype.aw($.ig.XamGeographicMap.prototype.kj.top());
    this.a3($.ig.XamGeographicMap.prototype.$type);
    this.backgroundContent(new $.ig.OpenStreetMapImagery());
    var d = (function () {
        var a = new $.ig.NumericXAxis();
        a.seriesViewer(c);
        return a
    }());
    d.isDisabled(true);
    this.xAxis(d);
    this.xAxis().scaler(new $.ig.SphericalMercatorHorizontalScaler());
    var e = (function () {
        var a = new $.ig.NumericYAxis();
        a.seriesViewer(c);
        return a
    }());
    e.isDisabled(true);
    this.yAxis(e);
    this.yAxis().scaler(new $.ig.SphericalMercatorVerticalScaler());
    this.ky();
    this.k8()
}, kk: null, worldRect: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.XamGeographicMap.prototype.worldRectProperty, b);
        return b
    } else {
        return this.b($.ig.XamGeographicMap.prototype.worldRectProperty)
    }
}, kl: null, actualWorldRect: function (d) {
    if (arguments.length === 1) {
        var e = this.kl != d;
        if (e) {
            var f = this.kl;
            this.kl = d;
            this.f2($.ig.XamGeographicMap.prototype.kf, f, d)
        }
        return d
    } else {
        return this.kl
    }
}, ky: function () {
    if (this.worldRect().isEmpty()) {
        return
    }
    this.actualWorldRect(this.kz(this.worldRect()))
}, kz: function (p) {
    var q = p.top();
    var r = p.left();
    var s = p.width();
    var t = p.height();
    var u = $.ig.SphericalMercatorVerticalScaler.prototype.aw(p.bottom());
    var v = $.ig.SphericalMercatorVerticalScaler.prototype.aw(p.top());
    var w = u - v;
    var x = p.width() / $.ig.XamGeographicMap.prototype.kj.width();
    if (w / x > this.kk) {
        var y = w / this.kk;
        var z = y - x;
        r = r - (z / 2) * $.ig.XamGeographicMap.prototype.kj.width();
        s = y * $.ig.XamGeographicMap.prototype.kj.width()
    } else {
        if (w / x < this.kk) {
            var A = this.kk * x;
            var B = A - w;
            var C = v - (B / 2);
            var D = u + (B / 2);
            q = $.ig.SphericalMercatorVerticalScaler.prototype.ax(C);
            t = $.ig.SphericalMercatorVerticalScaler.prototype.ax(D) - q
        }
    }
    return new $.ig.Rect(0, r, q, s, t)
}, backgroundContent: function (d) {
    if (arguments.length === 1) {
        var e = d != this.backgroundContent();
        if (e) {
            var f = this.backgroundContent();
            this.km = d;
            this.f2($.ig.XamGeographicMap.prototype.kg, f, d)
        }
        return d
    } else {
        return this.km
    }
}, km: null, xAxis: function (d) {
    if (arguments.length === 1) {
        var e = d != this.xAxis();
        if (e) {
            var f = this.xAxis();
            this.kn = d;
            this.f2($.ig.XamGeographicMap.prototype.kh, f, d)
        }
        return d
    } else {
        return this.kn
    }
}, kn: null, yAxis: function (d) {
    if (arguments.length === 1) {
        var e = d != this.yAxis();
        if (e) {
            var f = this.yAxis();
            this.ko = d;
            this.f2($.ig.XamGeographicMap.prototype.ki, f, d)
        }
        return d
    } else {
        return this.ko
    }
}, ko: null, _kv: null, kv: function (b) {
    if (arguments.length === 1) {
        this._kv = b;
        return b
    } else {
        return this._kv
    }
}, getZoomFromGeographic: function (p) {
    var q = this.kz(p);
    var r = this.xAxis();
    var s = this.yAxis();
    var t = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), r.isInverted());
    t.c = this.effectiveViewport();
    var u = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), s.isInverted());
    u.c = this.effectiveViewport();
    var v = this.xAxis().getScaledValue(q.left(), t);
    var w = this.xAxis().getScaledValue(q.right(), t);
    var x = this.yAxis().getScaledValue(q.top(), u);
    var y = this.yAxis().getScaledValue(q.bottom(), u);
    var z = v / this.viewportRect().width();
    var A = y / this.viewportRect().height();
    var B = (w - v) / this.viewportRect().width();
    var C = (x - y) / this.viewportRect().height();
    var D = new $.ig.Rect(0, z, A, B, C);
    D.intersect($.ig.XamGeographicMap.prototype.kp);
    if (D.isEmpty()) {
        D = $.ig.XamGeographicMap.prototype.kp
    }
    return D
}, getZoomFromGeographic1: function (h, i) {
    var j = h.__x;
    var k = i.__y;
    var l = i.__x - h.__x;
    var m = h.__y - i.__y;
    if (l < 0 || m < 0) {
        return $.ig.XamGeographicMap.prototype.kp
    } else {
        var n = new $.ig.Rect(0, j, k, l, m);
        return this.getZoomFromGeographic(n)
    }
}, getGeographicFromZoom: function (m) {
    var n = this.xAxis();
    var o = this.yAxis();
    var p = new $.ig.ScalerParams(m, this.viewportRect(), n.isInverted());
    p.c = this.effectiveViewport();
    var q = new $.ig.ScalerParams(m, this.viewportRect(), o.isInverted());
    q.c = this.effectiveViewport();
    var r = n.getUnscaledValue(this.effectiveViewport().left(), p);
    var s = o.getUnscaledValue(this.effectiveViewport().top(), q);
    var t = n.getUnscaledValue(this.effectiveViewport().right(), p);
    var u = o.getUnscaledValue(this.effectiveViewport().bottom(), q);
    var v = t - r;
    var w = s - u;
    var x = new $.ig.Rect(0, r, u, v, w);
    x.intersect($.ig.XamGeographicMap.prototype.kj);
    if (x.isEmpty()) {
        x = $.ig.XamGeographicMap.prototype.kj
    }
    return x
}, getGeographicPoint: function (d) {
    var e = this.xAxis().unscaleValue(d.__x);
    var f = this.yAxis().unscaleValue(d.__y);
    return{__x: e, __y: f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, getWindowPoint: function (d) {
    var e = this.xAxis().scaleValue(d.__x);
    var f = this.yAxis().scaleValue(d.__y);
    return{__x: e, __y: f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, k2: function (b) {
}, getMarkerBrushByIndex: function (b) {
    return this.kw().fc(b)
}, getMarkerOutlineByIndex: function (b) {
    return this.kw().fd(b)
}, useFixedAspectZoom: function () {
    return true
}, styleUpdated: function () {
    this.kw().d1();
    var d = this.series().getEnumerator();
    while (d.moveNext()) {
        var c = d.current();
        c.styleUpdated()
    }
}, kq: null, k3: function () {
    var c = this.xAxis().unscaleValue(this.viewportRect().left());
    var d = this.yAxis().unscaleValue(this.viewportRect().top());
    this.kq = {__x: c, __y: d, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, k4: function () {
    if (isNaN(this.kq.__x) || isNaN(this.kq.__y)) {
        this.k3()
    }
    var k = this.kq.__x;
    var l = this.kq.__y;
    if (!isNaN(k) & !isNaN(l)) {
        var m = this.actualWindowRect().left();
        var n = this.actualWindowRect().top();
        var o = this.actualWindowRect().width();
        var p = this.actualWindowRect().height();
        if (o > this.kr.width()) {
        } else {
            var q = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), this.xAxis().isInverted());
            q.c = this.effectiveViewport();
            var r = this.xAxis().getScaledValue(k, q);
            m = r / this.viewportRect().width();
            if (m + o > this.kr.right()) {
                m = this.kr.right() - o
            } else {
                if (m < this.kr.left()) {
                    m = this.kr.left()
                }
            }
        }
        if (p > this.kr.height()) {
        } else {
            var s = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), this.yAxis().isInverted());
            s.c = this.effectiveViewport();
            var t = this.yAxis().getScaledValue(l, s);
            n = t / this.viewportRect().height();
            if (n + p > this.kr.bottom()) {
                n = this.kr.bottom() - p
            } else {
                if (n < this.kr.top()) {
                    n = this.kr.top()
                }
            }
        }
        this.actualWindowRect(new $.ig.Rect(0, m, n, o, p))
    }
}, kr: null, i2: function () {
    var j = $.ig.SeriesViewer.prototype.i2.call(this);
    if (this.xAxis() == null || this.yAxis() == null) {
        return j
    }
    var k = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), this.xAxis().isInverted());
    k.c = this.effectiveViewport();
    var l = new $.ig.ScalerParams($.ig.XamGeographicMap.prototype.kp, this.viewportRect(), this.yAxis().isInverted());
    l.c = this.effectiveViewport();
    var m = this.xAxis().getScaledValue($.ig.XamGeographicMap.prototype.kj.left(), k);
    var n = this.xAxis().getScaledValue($.ig.XamGeographicMap.prototype.kj.right(), k);
    var o = this.yAxis().getScaledValue($.ig.XamGeographicMap.prototype.kj.top(), l);
    var p = this.yAxis().getScaledValue($.ig.XamGeographicMap.prototype.kj.bottom(), l);
    this.kr = new $.ig.Rect(0, m / this.viewportRect().width(), p / this.viewportRect().height(), (n - m) / this.viewportRect().width(), (o - p) / this.viewportRect().height());
    var q = j.left();
    var r = j.top();
    if (this.windowRect().width() > this.kr.width()) {
        q = 0.5 - (this.windowRect().width() / 2)
    } else {
        if (q + j.width() > this.kr.right()) {
            q = this.kr.right() - this.windowRect().width()
        } else {
            if (q < this.kr.left()) {
                q = this.kr.left()
            }
        }
    }
    if (this.windowRect().height() > this.kr.height()) {
        r = 0.5 - (this.windowRect().height() / 2)
    } else {
        if (r + this.windowRect().height() > this.kr.bottom()) {
            r = this.kr.bottom() - this.windowRect().height()
        } else {
            if (r < this.kr.top()) {
                r = this.kr.top()
            }
        }
    }
    return new $.ig.Rect(0, q, r, j.width(), j.height())
}, gi: function (e) {
    if (e.isEmpty()) {
        return $.ig.Rect.prototype.empty()
    }
    var f;
    if (e.width() > e.height()) {
        var g = $.ig.intDivide((e.width() - e.height()), 2);
        f = new $.ig.Rect(0, e.left() + g, e.top(), e.height(), e.height())
    } else {
        var h = $.ig.intDivide((e.height() - e.width()), 2);
        f = new $.ig.Rect(0, e.left(), e.top() + h, e.width(), e.width())
    }
    return f
}, k5: function (b) {
    return this.gi(b)
}, io: function () {
    return new $.ig.XamGeographicMapView(this)
}, fx: function (b) {
    return this.kw().fe(b)
}, fy: function (b) {
    return this.kw().ff(b)
}, k6: function (b) {
    if (b != null) {
        b.seriesViewer(this)
    }
}, ip: function (b) {
    $.ig.SeriesViewer.prototype.ip.call(this, b);
    this.kw(b)
}, gk: function (c, d) {
    $.ig.SeriesViewer.prototype.gk.call(this, c, d);
    this.gj(this.xAxis());
    this.gj(this.yAxis());
    if (c != d) {
        this.k4()
    }
}, ig: function (g, h, i, j) {
    switch (h) {
        case $.ig.XamGeographicMap.prototype.ba:
            this.k3();
            break
    }
    $.ig.SeriesViewer.prototype.ig.call(this, g, h, i, j);
    switch (h) {
        case $.ig.XamGeographicMap.prototype.kg:
            if (this.kv() != null) {
                if (this.kv().bg() != null) {
                    this.kv().bg().b4(null)
                }
            }
            this.kv($.ig.util.cast($.ig.GeographicMapImagery.prototype.$type, this.backgroundContent()));
            if (this.kv() != null) {
                if (this.kv().bg() != null) {
                    this.kv().bg().b4(this)
                }
            }
            this.kw().fr($.ig.util.cast($.ig.GeographicMapImagery.prototype.$type, i), $.ig.util.cast($.ig.GeographicMapImagery.prototype.$type, j));
            if (this.kv() != null) {
                this.kv().geographicMap(this);
                this.kw().fq(this.actualWindowRect())
            }
            break;
        case $.ig.XamGeographicMap.prototype.ki:
        case $.ig.XamGeographicMap.prototype.kh:
            this.k7(i);
            this.k6(j);
            break;
        case $.ig.XamGeographicMap.prototype.ke:
            this.windowRect($.ig.XamGeographicMap.prototype.kp);
            this.ky();
            this.k8();
            this.k3();
            this.actualWindowRect(this.i2());
            this.kw().fj();
            break;
        case $.ig.SeriesViewer.prototype.ci:
            this.kw().fq(this.actualWindowRect());
            break;
        case $.ig.XamGeographicMap.prototype.kf:
            var l = this.series().getEnumerator();
            while (l.moveNext()) {
                var k = l.current();
                k.renderSeries(false)
            }
            break
    }
}, k7: function (b) {
    if (b != null) {
        b.seriesViewer(null)
    }
}, k8: function () {
    if (this.xAxis() != null) {
        this.xAxis().minimumValue(this.actualWorldRect().left());
        this.xAxis().maximumValue(this.actualWorldRect().right())
    }
    if (this.yAxis() != null) {
        this.yAxis().minimumValue(this.actualWorldRect().top());
        this.yAxis().maximumValue(this.actualWorldRect().bottom())
    }
    this.xAxis().updateRange1(true);
    this.yAxis().updateRange1(true)
}, _kw: null, kw: function (b) {
    if (arguments.length === 1) {
        this._kw = b;
        return b
    } else {
        return this._kw
    }
}, is: function () {
    return this.kw().e8()
}, ir: function () {
    return this.kw().e9()
}, iq: function () {
    return this.kw().e7()
}, ix: function (e, f) {
    if ($.ig.util.cast($.ig.ItfConverter.prototype.$type, f) !== null) {
        var g = (f);
        var h = (e);
        h.itemsSource(g.triangulationSource().points());
        h.trianglesSource(g.triangulationSource().triangles())
    } else {
        $.ig.SeriesViewer.prototype.ix.call(this, e, f)
    }
}, register: function (c, d) {
    this.i9(c, d)
}, unRegister: function (b) {
    this.ja(b)
}, deferredRefresh: function () {
    this.jb()
}, $type: new $.ig.Type("XamGeographicMap", $.ig.SeriesViewer.prototype.$type, [$.ig.IMapRenderDeferralHandler.prototype.$type])}, true);
$.ig.util.defType("XamGeographicMapView", "SeriesViewerView", {init: function (b) {
    $.ig.SeriesViewerView.prototype.init.call(this, b);
    this.e6($.ig.Rect.prototype.empty());
    this.e5(b);
    this.e5().dragModifier($.ig.ModifierKeys.prototype.control)
}, eu: function (b) {
    return $.ig.InteractionState.prototype.dragPan
}, ef: function (b) {
    this.eg(b)
}, _e5: null, e5: function (b) {
    if (arguments.length === 1) {
        this._e5 = b;
        return b
    } else {
        return this._e5
    }
}, ec: function () {
    var f = this;
    var g;
    var h;
    var i;
    var j;
    var k;
    (function () {
        var a = f.aq().a1(g, h, i, j, k);
        g = a.brushes;
        h = a.outlines;
        i = a.fontBrush;
        j = a.font;
        k = a.axisLineBrush;
        return a.ret
    }());
    this.e7(i);
    this.e9(j);
    this.e8(k)
}, fc: function (c) {
    var b = this;
    return(function () {
        var a = new $.ig.Brush();
        a.__fill = "rgba(0,0,0,1)";
        return a
    }())
}, fd: function (c) {
    var b = this;
    return(function () {
        var a = new $.ig.Brush();
        a.__fill = "white";
        return a
    }())
}, fe: function (c) {
    var b = this;
    return(function () {
        var a = new $.ig.Brush();
        a.__fill = "rgba(50,50,50,.5)";
        return a
    }())
}, ff: function (c) {
    var b = this;
    return(function () {
        var a = new $.ig.Brush();
        a.__fill = "white";
        return a
    }())
}, de: function (c) {
    $.ig.SeriesViewerView.prototype.de.call(this, c);
    if (this.e5().backgroundContent() != null) {
        var d = this.e5().backgroundContent();
        d.bv(c)
    }
}, _e6: null, e6: function (b) {
    if (arguments.length === 1) {
        this._e6 = b;
        return b
    } else {
        return this._e6
    }
}, du: function (c) {
    $.ig.SeriesViewerView.prototype.du.call(this, c);
    this.e6(c);
    if (this.e5().backgroundContent() != null) {
        var d = this.e5().backgroundContent();
        d.bw(this.e6())
    }
}, fi: function () {
    return new $.ig.Rect(0, 0, 0, this.e6().width(), this.e6().height())
}, fj: function () {
    if (this.e5().backgroundContent() != null) {
        var b = this.e5().backgroundContent();
        b.bx()
    }
}, _e7: null, e7: function (b) {
    if (arguments.length === 1) {
        this._e7 = b;
        return b
    } else {
        return this._e7
    }
}, _e8: null, e8: function (b) {
    if (arguments.length === 1) {
        this._e8 = b;
        return b
    } else {
        return this._e8
    }
}, _e9: null, e9: function (b) {
    if (arguments.length === 1) {
        this._e9 = b;
        return b
    } else {
        return this._e9
    }
}, fq: function (b) {
    if (this.e5().kv() != null) {
        this.e5().kv().windowRect(b)
    }
}, fr: function (e, f) {
    if (this.e5().kv() != null) {
        this.e5().kv().windowRect(this.e5().actualWindowRect())
    }
    if (e != null) {
        var g = e.bg();
        if (g != null) {
            this.e5().canvasRenderScheduler().h().remove(g.cf())
        }
        e.bv(null)
    }
    if (f != null) {
        var h = f.bg();
        if (h != null) {
            this.e5().canvasRenderScheduler().h().add(h.cf())
        }
        if (!this.e6().isEmpty()) {
            this.du(this.e6())
        }
        if (this.ar() != null) {
            this.de(this.ar())
        }
    }
    if (f == null) {
        this.fs(this.ar())
    }
}, fs: function (b) {
    b.t(this.e6().left(), this.e6().top(), this.e6().width(), this.e6().height())
}, dx: function () {
    this.ap().a7(1);
    this.ao().a7(1);
    this.ap().__stroke = this.e7();
    this.ao().__stroke = this.e7();
    $.ig.SeriesViewerView.prototype.dx.call(this)
}, bq: function () {
    $.ig.SeriesViewerView.prototype.bq.call(this);
    if (this.ak().count() == 0) {
        if (this.at() != null && this.e6() != null && !this.e6().isEmpty()) {
            this.at().t(this.e6().left(), this.e6().top(), this.e6().width(), this.e6().height())
        }
    }
}, $type: new $.ig.Type("XamGeographicMapView", $.ig.SeriesViewerView.prototype.$type)}, true);
$.ig.ShapeType.prototype.none = 0;
$.ig.ShapeType.prototype.point = 1;
$.ig.ShapeType.prototype.polyLine = 3;
$.ig.ShapeType.prototype.polygon = 5;
$.ig.ShapeType.prototype.polyPoint = 8;
$.ig.ShapeType.prototype.pointZ = 11;
$.ig.ShapeType.prototype.polyLineZ = 13;
$.ig.ShapeType.prototype.polygonZ = 15;
$.ig.ShapeType.prototype.polyPointZ = 18;
$.ig.ShapeType.prototype.pointM = 21;
$.ig.ShapeType.prototype.polyLineM = 23;
$.ig.ShapeType.prototype.polygonM = 25;
$.ig.ShapeType.prototype.polyPointM = 28;
$.ig.ShapeType.prototype.polyPatch = 31;
$.ig.XBaseDataType.prototype.character = 0;
$.ig.XBaseDataType.prototype.number = 1;
$.ig.XBaseDataType.prototype.logical = 2;
$.ig.XBaseDataType.prototype.date = 3;
$.ig.XBaseDataType.prototype.memo = 4;
$.ig.XBaseDataType.prototype.floatingPoint = 5;
$.ig.XBaseDataType.prototype.binary = 6;
$.ig.XBaseDataType.prototype.general = 7;
$.ig.XBaseDataType.prototype.picture = 8;
$.ig.XBaseDataType.prototype.currency = 9;
$.ig.XBaseDataType.prototype.dateTime = 10;
$.ig.XBaseDataType.prototype.integer = 11;
$.ig.XBaseDataType.prototype.variField = 12;
$.ig.XBaseDataType.prototype.variant = 13;
$.ig.XBaseDataType.prototype.timestamp = 14;
$.ig.XBaseDataType.prototype.double1 = 15;
$.ig.XBaseDataType.prototype.autoIncrement = 16;
$.ig.ColorScaleInterpolationMode.prototype.select = 0;
$.ig.ColorScaleInterpolationMode.prototype.interpolateRGB = 1;
$.ig.ColorScaleInterpolationMode.prototype.interpolateHSV = 2;
$.ig.SphericalMercatorVerticalScaler.prototype.al = 85.05112878;
$.ig.SphericalMercatorVerticalScaler.prototype.am = -85.05112878;
$.ig.SphericalMercatorVerticalScaler.prototype.aj = Math.PI / 180;
$.ig.CustomPaletteColorScale.prototype.g = "MinimumValue";
$.ig.CustomPaletteColorScale.prototype.h = "MaximumValue";
$.ig.CustomPaletteColorScale.prototype.i = "Palette";
$.ig.CustomPaletteColorScale.prototype.j = "InterpolationMode";
$.ig.CustomPaletteColorScale.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CustomPaletteColorScale.prototype.g, Number, $.ig.CustomPaletteColorScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.CustomPaletteColorScale.prototype.$type, c)).f($.ig.CustomPaletteColorScale.prototype.g, d.f(), d.e())
}));
$.ig.CustomPaletteColorScale.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CustomPaletteColorScale.prototype.h, Number, $.ig.CustomPaletteColorScale.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.CustomPaletteColorScale.prototype.$type, c)).f($.ig.CustomPaletteColorScale.prototype.h, d.f(), d.e())
}));
$.ig.CustomPaletteColorScale.prototype.interpolationModeProperty = $.ig.DependencyProperty.prototype.l($.ig.CustomPaletteColorScale.prototype.j, $.ig.ColorScaleInterpolationMode.prototype.$type, $.ig.CustomPaletteColorScale.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.ColorScaleInterpolationMode.prototype.select, function (c, d) {
    ($.ig.util.cast($.ig.CustomPaletteColorScale.prototype.$type, c)).f($.ig.CustomPaletteColorScale.prototype.j, d.f(), d.e())
}));
$.ig.GeographicMapImagery.prototype.a7 = "MultiScaleImage";
$.ig.GeographicMapImagery.prototype.a8 = "WindowRect";
$.ig.GeographicMapImagery.prototype.a9 = "GeographicMap";
$.ig.GeographicMapImagery.prototype.windowRectProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicMapImagery.prototype.a8, $.ig.Rect.prototype.$type, $.ig.GeographicMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Rect.prototype.empty(), function (c, d) {
    ($.ig.util.cast($.ig.GeographicMapImagery.prototype.$type, c)).bn($.ig.GeographicMapImagery.prototype.a8, d.f(), d.e())
}));
$.ig.GeographicMapImagery.prototype.geographicMapProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicMapImagery.prototype.a9, $.ig.XamGeographicMap.prototype.$type, $.ig.GeographicMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.GeographicMapImagery.prototype.bo));
$.ig.BingMapsMapImagery.prototype.bz = "TilePath";
$.ig.BingMapsMapImagery.prototype.b0 = "SubDomains";
$.ig.BingMapsMapImagery.prototype.b1 = "CultureName";
$.ig.BingMapsMapImagery.prototype.tilePathProperty = $.ig.DependencyProperty.prototype.l($.ig.BingMapsMapImagery.prototype.bz, String, $.ig.BingMapsMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsMapImagery.prototype.b6));
$.ig.BingMapsMapImagery.prototype.subDomainsProperty = $.ig.DependencyProperty.prototype.l($.ig.BingMapsMapImagery.prototype.b0, $.ig.ObservableCollection$1.prototype.$type.specialize(String), $.ig.BingMapsMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsMapImagery.prototype.b7));
$.ig.BingMapsMapImagery.prototype.cultureNameProperty = $.ig.DependencyProperty.prototype.l($.ig.BingMapsMapImagery.prototype.b1, String, $.ig.BingMapsMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.BingMapsMapImagery.prototype.b8));
$.ig.CloudMadeMapImagery.prototype.bz = "Key";
$.ig.CloudMadeMapImagery.prototype.b0 = "Parameter";
$.ig.CloudMadeMapImagery.prototype.keyProperty = $.ig.DependencyProperty.prototype.l($.ig.CloudMadeMapImagery.prototype.bz, String, $.ig.CloudMadeMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.CloudMadeMapImagery.prototype.b5));
$.ig.CloudMadeMapImagery.prototype.parameterProperty = $.ig.DependencyProperty.prototype.l($.ig.CloudMadeMapImagery.prototype.b0, String, $.ig.CloudMadeMapImagery.prototype.$type, new $.ig.PropertyMetadata(1, null, $.ig.CloudMadeMapImagery.prototype.b6));
$.ig.GeographicMapSeriesHost$1.prototype.hp = "VisibleFromScale";
$.ig.GeographicMapSeriesHost$1.prototype.visibleFromScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicMapSeriesHost$1.prototype.hp, Number, $.ig.GeographicMapSeriesHost$1.prototype.$type.specialize(this.$t), new $.ig.PropertyMetadata(1, 1, function (c, d) {
    ($.ig.util.cast($.ig.GeographicMapSeriesHost$1.prototype.$type.specialize($self.$t), c)).ej($.ig.GeographicMapSeriesHost$1.prototype.hp, d.f(), d.e())
}));
$.ig.GeographicXYTriangulatingSeries.prototype.h4 = "LongitudeMemberPath";
$.ig.GeographicXYTriangulatingSeries.prototype.h5 = "LatitudeMemberPath";
$.ig.GeographicXYTriangulatingSeries.prototype.h6 = "TrianglesSource";
$.ig.GeographicXYTriangulatingSeries.prototype.h7 = "TriangleVertexMemberPath1";
$.ig.GeographicXYTriangulatingSeries.prototype.h8 = "TriangleVertexMemberPath2";
$.ig.GeographicXYTriangulatingSeries.prototype.h9 = "TriangleVertexMemberPath3";
$.ig.GeographicXYTriangulatingSeries.prototype.longitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h4, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "pointX", function (c, d) {
    (c).ej($.ig.GeographicXYTriangulatingSeries.prototype.h4, d.f(), d.e())
}));
$.ig.GeographicXYTriangulatingSeries.prototype.latitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h5, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "pointY", function (c, d) {
    (c).ej($.ig.GeographicXYTriangulatingSeries.prototype.h5, d.f(), d.e())
}));
$.ig.GeographicXYTriangulatingSeries.prototype.trianglesSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h6, $.ig.IEnumerable.prototype.$type, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicXYTriangulatingSeries.prototype.h6, d.f(), d.e())
}));
$.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath1Property = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h7, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "v1", function (c, d) {
    (c).ej($.ig.GeographicXYTriangulatingSeries.prototype.h7, d.f(), d.e())
}));
$.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath2Property = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h8, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "v2", function (c, d) {
    (c).ej($.ig.GeographicXYTriangulatingSeries.prototype.h8, d.f(), d.e())
}));
$.ig.GeographicXYTriangulatingSeries.prototype.triangleVertexMemberPath3Property = $.ig.DependencyProperty.prototype.l($.ig.GeographicXYTriangulatingSeries.prototype.h9, String, $.ig.GeographicXYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, "v3", function (c, d) {
    (c).ej($.ig.GeographicXYTriangulatingSeries.prototype.h9, d.f(), d.e())
}));
$.ig.GeographicContourLineSeries.prototype.is = "ValueMemberPath";
$.ig.GeographicContourLineSeries.prototype.it = "FillScale";
$.ig.GeographicContourLineSeries.prototype.iu = "ValueResolver";
$.ig.GeographicContourLineSeries.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicContourLineSeries.prototype.is, String, $.ig.GeographicContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, "value", function (c, d) {
    (c).ej($.ig.GeographicContourLineSeries.prototype.is, d.f(), d.e())
}));
$.ig.GeographicContourLineSeries.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicContourLineSeries.prototype.it, $.ig.ValueBrushScale.prototype.$type, $.ig.GeographicContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicContourLineSeries.prototype.it, d.f(), d.e())
}));
$.ig.GeographicContourLineSeries.prototype.valueResolverProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicContourLineSeries.prototype.iu, $.ig.ContourValueResolver.prototype.$type, $.ig.GeographicContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicContourLineSeries.prototype.iu, d.f(), d.e())
}));
$.ig.GeographicHighDensityScatterSeries.prototype.h4 = "LatitudeMemberPath";
$.ig.GeographicHighDensityScatterSeries.prototype.h5 = "LongitudeMemberPath";
$.ig.GeographicHighDensityScatterSeries.prototype.h6 = "UseBruteForce";
$.ig.GeographicHighDensityScatterSeries.prototype.h7 = "ProgressiveLoad";
$.ig.GeographicHighDensityScatterSeries.prototype.h8 = "MouseOverEnabled";
$.ig.GeographicHighDensityScatterSeries.prototype.h9 = "UseSquareCutoffStyle";
$.ig.GeographicHighDensityScatterSeries.prototype.ia = "HeatMinimum";
$.ig.GeographicHighDensityScatterSeries.prototype.ib = "HeatMaximum";
$.ig.GeographicHighDensityScatterSeries.prototype.latitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h4, String, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicHighDensityScatterSeries.prototype.h4, d.f(), d.e())
}));
$.ig.GeographicHighDensityScatterSeries.prototype.longitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h5, String, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicHighDensityScatterSeries.prototype.h5, d.f(), d.e())
}));
$.ig.GeographicHighDensityScatterSeries.prototype.useBruteForceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h6, $.ig.Boolean.prototype.$type, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    (c).ej($.ig.GeographicHighDensityScatterSeries.prototype.h6, d.f(), d.e())
}));
$.ig.GeographicHighDensityScatterSeries.prototype.progressiveLoadProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h7, $.ig.Boolean.prototype.$type, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, true, function (c, d) {
    (c).ej($.ig.GeographicHighDensityScatterSeries.prototype.h7, d.f(), d.e())
}));
$.ig.GeographicHighDensityScatterSeries.prototype.mouseOverEnabledProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h8, $.ig.Boolean.prototype.$type, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    (c).ej($.ig.GeographicHighDensityScatterSeries.prototype.h8, d.f(), d.e())
}));
$.ig.GeographicHighDensityScatterSeries.prototype.useSquareCutoffStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.h9, $.ig.Boolean.prototype.$type, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    (c).ej($.ig.GeographicHighDensityScatterSeries.prototype.h9, d.f(), d.e())
}));
$.ig.GeographicHighDensityScatterSeries.prototype.heatMinimumProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.ia, Number, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    (c).ej($.ig.GeographicHighDensityScatterSeries.prototype.ia, d.f(), d.e())
}));
$.ig.GeographicHighDensityScatterSeries.prototype.heatMaximumProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicHighDensityScatterSeries.prototype.ib, Number, $.ig.GeographicHighDensityScatterSeries.prototype.$type, new $.ig.PropertyMetadata(1, 50, function (c, d) {
    (c).ej($.ig.GeographicHighDensityScatterSeries.prototype.ib, d.f(), d.e())
}));
$.ig.GeographicShapeSeriesBase.prototype.h4 = "ShapeMemberPath";
$.ig.GeographicShapeSeriesBase.prototype.h5 = "ShapeStyleSelector";
$.ig.GeographicShapeSeriesBase.prototype.h6 = "ShapeStyle";
$.ig.GeographicShapeSeriesBase.prototype.h7 = "ShapeFilterResolution";
$.ig.GeographicShapeSeriesBase.prototype.shapeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeriesBase.prototype.h4, String, $.ig.GeographicShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, "points", function (c, d) {
    ($.ig.util.cast($.ig.GeographicShapeSeriesBase.prototype.$type, c)).ej($.ig.GeographicShapeSeriesBase.prototype.h4, d.f(), d.e())
}));
$.ig.GeographicShapeSeriesBase.prototype.shapeStyleSelectorProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeriesBase.prototype.h5, $.ig.StyleSelector.prototype.$type, $.ig.GeographicShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicShapeSeriesBase.prototype.h5, d.f(), d.e())
}));
$.ig.GeographicShapeSeriesBase.prototype.shapeStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeriesBase.prototype.h6, $.ig.Style.prototype.$type, $.ig.GeographicShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicShapeSeriesBase.prototype.h6, d.f(), d.e())
}));
$.ig.GeographicShapeSeriesBase.prototype.shapeFilterResolutionProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeriesBase.prototype.h7, Number, $.ig.GeographicShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.GeographicShapeSeriesBase.prototype.$type, c)).ej($.ig.GeographicShapeSeriesBase.prototype.h7, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.h4 = "LatitudeMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.h5 = "LongitudeMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.h6 = "MarkerType";
$.ig.GeographicProportionalSymbolSeries.prototype.h7 = "MarkerTemplate";
$.ig.GeographicProportionalSymbolSeries.prototype.h8 = "MarkerCollisionAvoidance";
$.ig.GeographicProportionalSymbolSeries.prototype.h9 = "MarkerBrush";
$.ig.GeographicProportionalSymbolSeries.prototype.ia = "MarkerOutline";
$.ig.GeographicProportionalSymbolSeries.prototype.ib = "MaximumMarkers";
$.ig.GeographicProportionalSymbolSeries.prototype.ic = "RadiusMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.id = "RadiusScale";
$.ig.GeographicProportionalSymbolSeries.prototype.ie = "LabelMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.ig = "FillMemberPath";
$.ig.GeographicProportionalSymbolSeries.prototype.ih = "FillScale";
$.ig.GeographicProportionalSymbolSeries.prototype.latitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h4, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.h4, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.longitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h5, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.h5, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h6, $.ig.MarkerType.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.none, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.h6, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h7, $.ig.DataTemplate.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.h7, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h8, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.h8, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.h9, $.ig.Brush.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.h9, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ia, $.ig.Brush.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.ia, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.maximumMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ib, $.ig.Number.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, 400, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.ib, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.radiusMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ic, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.ic, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.radiusScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.id, $.ig.SizeScale.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.id, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.labelMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ie, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.ie, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.fillMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ig, String, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.ig, d.f(), d.e())
}));
$.ig.GeographicProportionalSymbolSeries.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicProportionalSymbolSeries.prototype.ih, $.ig.BrushScale.prototype.$type, $.ig.GeographicProportionalSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicProportionalSymbolSeries.prototype.ih, d.f(), d.e())
}));
$.ig.GeographicScatterAreaSeries.prototype.is = "ColorMemberPath";
$.ig.GeographicScatterAreaSeries.prototype.it = "ColorScale";
$.ig.GeographicScatterAreaSeries.prototype.colorMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicScatterAreaSeries.prototype.is, String, $.ig.GeographicScatterAreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, "value", function (c, d) {
    (c).ej($.ig.GeographicScatterAreaSeries.prototype.is, d.f(), d.e())
}));
$.ig.GeographicShapeSeries.prototype.ik = "MarkerType";
$.ig.GeographicShapeSeries.prototype.il = "MarkerTemplate";
$.ig.GeographicShapeSeries.prototype.im = "MarkerBrush";
$.ig.GeographicShapeSeries.prototype.io = "MarkerOutline";
$.ig.GeographicShapeSeries.prototype.ip = "MarkerStyle";
$.ig.GeographicShapeSeries.prototype.iq = "MarkerCollisionAvoidance";
$.ig.GeographicShapeSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.ik, $.ig.MarkerType.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.none, function (c, d) {
    (c).ej($.ig.GeographicShapeSeries.prototype.ik, d.f(), d.e())
}));
$.ig.GeographicShapeSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.il, $.ig.DataTemplate.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicShapeSeries.prototype.il, d.f(), d.e())
}));
$.ig.GeographicShapeSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.im, $.ig.Brush.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicShapeSeries.prototype.im, d.f(), d.e())
}));
$.ig.GeographicShapeSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.io, $.ig.Brush.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicShapeSeries.prototype.io, d.f(), d.e())
}));
$.ig.GeographicShapeSeries.prototype.markerStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.ip, $.ig.Style.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicShapeSeries.prototype.ip, d.f(), d.e())
}));
$.ig.GeographicShapeSeries.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicShapeSeries.prototype.iq, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.GeographicShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (c, d) {
    (c).ej($.ig.GeographicShapeSeries.prototype.iq, d.f(), d.e())
}));
$.ig.GeographicSymbolSeries.prototype.h4 = "LatitudeMemberPath";
$.ig.GeographicSymbolSeries.prototype.h5 = "LongitudeMemberPath";
$.ig.GeographicSymbolSeries.prototype.h6 = "MarkerType";
$.ig.GeographicSymbolSeries.prototype.h7 = "MarkerTemplate";
$.ig.GeographicSymbolSeries.prototype.h8 = "MarkerCollisionAvoidance";
$.ig.GeographicSymbolSeries.prototype.h9 = "MarkerBrush";
$.ig.GeographicSymbolSeries.prototype.ia = "MarkerOutline";
$.ig.GeographicSymbolSeries.prototype.ib = "MaximumMarkers";
$.ig.GeographicSymbolSeries.prototype.latitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h4, String, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicSymbolSeries.prototype.h4, d.f(), d.e())
}));
$.ig.GeographicSymbolSeries.prototype.longitudeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h5, String, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicSymbolSeries.prototype.h5, d.f(), d.e())
}));
$.ig.GeographicSymbolSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h6, $.ig.MarkerType.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.automatic, function (c, d) {
    (c).ej($.ig.GeographicSymbolSeries.prototype.h6, d.f(), d.e())
}));
$.ig.GeographicSymbolSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h7, $.ig.DataTemplate.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.GeographicSymbolSeries.prototype.h7, d.f(), d.e())
}));
$.ig.GeographicSymbolSeries.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h8, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (c, d) {
    (c).ej($.ig.GeographicSymbolSeries.prototype.h8, d.f(), d.e())
}));
$.ig.GeographicSymbolSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.h9, $.ig.Brush.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicSymbolSeries.prototype.h9, d.f(), d.e())
}));
$.ig.GeographicSymbolSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.ia, $.ig.Brush.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.GeographicSymbolSeries.prototype.ia, d.f(), d.e())
}));
$.ig.GeographicSymbolSeries.prototype.maximumMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.GeographicSymbolSeries.prototype.ib, $.ig.Number.prototype.$type, $.ig.GeographicSymbolSeries.prototype.$type, new $.ig.PropertyMetadata(1, 400, function (c, d) {
    (c).ej($.ig.GeographicSymbolSeries.prototype.ib, d.f(), d.e())
}));
$.ig.XYTriangulatingSeries.prototype.hp = "XMemberPath";
$.ig.XYTriangulatingSeries.prototype.hq = "YMemberPath";
$.ig.XYTriangulatingSeries.prototype.hr = "XColumn";
$.ig.XYTriangulatingSeries.prototype.hs = "YColumn";
$.ig.XYTriangulatingSeries.prototype.ht = "XAxis";
$.ig.XYTriangulatingSeries.prototype.hu = "YAxis";
$.ig.XYTriangulatingSeries.prototype.hv = "TrianglesSource";
$.ig.XYTriangulatingSeries.prototype.hw = "FastTrianglesSource";
$.ig.XYTriangulatingSeries.prototype.hx = "TriangleVertexMemberPath1";
$.ig.XYTriangulatingSeries.prototype.hy = "TriangleVertexMemberPath2";
$.ig.XYTriangulatingSeries.prototype.hz = "TriangleVertexMemberPath3";
$.ig.XYTriangulatingSeries.prototype.h0 = "TriangleVertexColumn1";
$.ig.XYTriangulatingSeries.prototype.h1 = "TriangleVertexColumn2";
$.ig.XYTriangulatingSeries.prototype.h2 = "TriangleVertexColumn3";
$.ig.XYTriangulatingSeries.prototype.xMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hp, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.XYTriangulatingSeries.prototype.hp, d.f(), d.e())
}));
$.ig.XYTriangulatingSeries.prototype.yMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hq, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.XYTriangulatingSeries.prototype.hq, d.f(), d.e())
}));
$.ig.XYTriangulatingSeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.ht, $.ig.NumericXAxis.prototype.$type, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.XYTriangulatingSeries.prototype.ht, d.f(), d.e())
}));
$.ig.XYTriangulatingSeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hu, $.ig.NumericYAxis.prototype.$type, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.XYTriangulatingSeries.prototype.hu, d.f(), d.e())
}));
$.ig.XYTriangulatingSeries.prototype.trianglesSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hv, $.ig.IEnumerable.prototype.$type, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.XYTriangulatingSeries.prototype.hv, d.f(), d.e())
}));
$.ig.XYTriangulatingSeries.prototype.h7 = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hw, $.ig.FastItemsSource.prototype.$type, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.XYTriangulatingSeries.prototype.hw, d.f(), d.e())
}));
$.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath1Property = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hx, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.XYTriangulatingSeries.prototype.hx, d.f(), d.e())
}));
$.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath2Property = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hy, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.XYTriangulatingSeries.prototype.$type, c)).ej($.ig.XYTriangulatingSeries.prototype.hy, d.f(), d.e())
}));
$.ig.XYTriangulatingSeries.prototype.triangleVertexMemberPath3Property = $.ig.DependencyProperty.prototype.l($.ig.XYTriangulatingSeries.prototype.hz, String, $.ig.XYTriangulatingSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.XYTriangulatingSeries.prototype.hz, d.f(), d.e())
}));
$.ig.ContourLineSeries.prototype.jq = "ValueMemberPath";
$.ig.ContourLineSeries.prototype.jr = "ValueColumn";
$.ig.ContourLineSeries.prototype.js = "FillScale";
$.ig.ContourLineSeries.prototype.jt = "ValueResolver";
$.ig.ContourLineSeries.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ContourLineSeries.prototype.jq, String, $.ig.ContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.ContourLineSeries.prototype.jq, d.f(), d.e())
}));
$.ig.ContourLineSeries.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.ContourLineSeries.prototype.js, $.ig.ValueBrushScale.prototype.$type, $.ig.ContourLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.ContourLineSeries.prototype.js, d.f(), d.e())
}));
$.ig.ContourBuilder.prototype.f = 4294967296;
$.ig.ContourLineSeriesView.prototype.cd = 3;
$.ig.LinearContourValueResolver.prototype.j = "ValueCount";
$.ig.LinearContourValueResolver.prototype.k = $.ig.DependencyProperty.prototype.l($.ig.LinearContourValueResolver.prototype.j, $.ig.Number.prototype.$type, $.ig.LinearContourValueResolver.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (c, d) {
    (c).g($.ig.LinearContourValueResolver.prototype.j, d.f(), d.e())
}));
$.ig.ShapeSeriesBase.prototype.hp = "ShapeMemberPath";
$.ig.ShapeSeriesBase.prototype.hq = "ShapeColumn";
$.ig.ShapeSeriesBase.prototype.hr = "XAxis";
$.ig.ShapeSeriesBase.prototype.hs = "YAxis";
$.ig.ShapeSeriesBase.prototype.ht = "FillScale";
$.ig.ShapeSeriesBase.prototype.hu = "FillMemberPath";
$.ig.ShapeSeriesBase.prototype.hv = "FillColumn";
$.ig.ShapeSeriesBase.prototype.hw = "ShapeStyleSelector";
$.ig.ShapeSeriesBase.prototype.hx = "ShapeStyle";
$.ig.ShapeSeriesBase.prototype.hy = "ShapeFilterResolution";
$.ig.ShapeSeriesBase.prototype.shapeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hp, String, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ShapeSeriesBase.prototype.$type, c)).ej($.ig.ShapeSeriesBase.prototype.hp, d.f(), d.e())
}));
$.ig.ShapeSeriesBase.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hr, $.ig.NumericXAxis.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ShapeSeriesBase.prototype.$type, c)).ej($.ig.ShapeSeriesBase.prototype.hr, d.f(), d.e())
}));
$.ig.ShapeSeriesBase.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hs, $.ig.NumericYAxis.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ShapeSeriesBase.prototype.$type, c)).ej($.ig.ShapeSeriesBase.prototype.hs, d.f(), d.e())
}));
$.ig.ShapeSeriesBase.prototype.fillScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.ht, $.ig.ValueBrushScale.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.ShapeSeriesBase.prototype.ht, d.f(), d.e())
}));
$.ig.ShapeSeriesBase.prototype.fillMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hu, String, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ShapeSeriesBase.prototype.$type, c)).ej($.ig.ShapeSeriesBase.prototype.hu, d.f(), d.e())
}));
$.ig.ShapeSeriesBase.prototype.shapeStyleSelectorProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hw, $.ig.StyleSelector.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.ShapeSeriesBase.prototype.hw, d.f(), d.e())
}));
$.ig.ShapeSeriesBase.prototype.shapeStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hx, $.ig.Style.prototype.$type, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.ShapeSeriesBase.prototype.hx, d.f(), d.e())
}));
$.ig.ShapeSeriesBase.prototype.shapeFilterResolutionProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeriesBase.prototype.hy, Number, $.ig.ShapeSeriesBase.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    (c).ej($.ig.ShapeSeriesBase.prototype.hy, d.f(), d.e())
}));
$.ig.ShapeSeriesViewBase.prototype.cd = 3;
$.ig.ScatterAreaSeries.prototype.jq = "ColorScale";
$.ig.ScatterAreaSeries.prototype.jr = "ColorMemberPath";
$.ig.ScatterAreaSeries.prototype.js = "ColorColumn";
$.ig.ScatterAreaSeries.prototype.colorMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.ScatterAreaSeries.prototype.jr, String, $.ig.ScatterAreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.ScatterAreaSeries.prototype.jr, d.f(), d.e())
}));
$.ig.ShapeSeries.prototype.jq = "MarkerType";
$.ig.ShapeSeries.prototype.jr = "MarkerTemplate";
$.ig.ShapeSeries.prototype.js = "ActualMarkerTemplate";
$.ig.ShapeSeries.prototype.jt = "MarkerBrush";
$.ig.ShapeSeries.prototype.ju = "ActualMarkerBrush";
$.ig.ShapeSeries.prototype.jv = "MarkerOutline";
$.ig.ShapeSeries.prototype.jw = "ActualMarkerOutline";
$.ig.ShapeSeries.prototype.jx = "MarkerStyle";
$.ig.ShapeSeries.prototype.jy = "MarkerCollisionAvoidance";
$.ig.ShapeSeries.prototype.j2 = new $.ig.Rect(0, 0, 0, 1, 1);
$.ig.ShapeSeries.prototype.markerTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jq, $.ig.MarkerType.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.MarkerType.prototype.none, function (c, d) {
    (c).ej($.ig.ShapeSeries.prototype.jq, d.f(), d.e())
}));
$.ig.ShapeSeries.prototype.markerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jr, $.ig.DataTemplate.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.ShapeSeries.prototype.jr, d.f(), d.e())
}));
$.ig.ShapeSeries.prototype.actualMarkerTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.js, $.ig.DataTemplate.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    (c).ej($.ig.ShapeSeries.prototype.js, d.f(), d.e())
}));
$.ig.ShapeSeries.prototype.markerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jt, $.ig.Brush.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.ShapeSeries.prototype.jt, d.f(), d.e())
}));
$.ig.ShapeSeries.prototype.actualMarkerBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.ju, $.ig.Brush.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.ShapeSeries.prototype.ju, d.f(), d.e())
}));
$.ig.ShapeSeries.prototype.markerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jv, $.ig.Brush.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.ShapeSeries.prototype.jv, d.f(), d.e())
}));
$.ig.ShapeSeries.prototype.actualMarkerOutlineProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jw, $.ig.Brush.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.ShapeSeries.prototype.jw, d.f(), d.e())
}));
$.ig.ShapeSeries.prototype.markerStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jx, $.ig.Style.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    (c).ej($.ig.ShapeSeries.prototype.jx, d.f(), d.e())
}));
$.ig.ShapeSeries.prototype.markerCollisionAvoidanceProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapeSeries.prototype.jy, $.ig.CollisionAvoidanceType.prototype.$type, $.ig.ShapeSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.CollisionAvoidanceType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.ShapeSeries.prototype.$type, c)).ej($.ig.ShapeSeries.prototype.jy, d.f(), d.e())
}));
$.ig.ShapefileConverter.prototype.g = "WorldRect";
$.ig.ShapefileConverter.prototype.h = "ShapefileSource";
$.ig.ShapefileConverter.prototype.i = "DatabaseSource";
$.ig.ShapefileConverter.prototype.shapefileSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapefileConverter.prototype.h, $.ig.Uri.prototype.$type, $.ig.ShapefileConverter.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ShapefileConverter.prototype.$type, c)).s($.ig.ShapefileConverter.prototype.h, d.f(), d.e())
}));
$.ig.ShapefileConverter.prototype.databaseSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.ShapefileConverter.prototype.i, $.ig.Uri.prototype.$type, $.ig.ShapefileConverter.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ShapefileConverter.prototype.$type, c)).s($.ig.ShapefileConverter.prototype.i, d.f(), d.e())
}));
$.ig.ItfConverter.prototype.e = "Source";
$.ig.ItfConverter.prototype.f = "TriangulationSource";
$.ig.ItfConverter.prototype.sourceProperty = $.ig.DependencyProperty.prototype.l($.ig.ItfConverter.prototype.e, $.ig.Uri.prototype.$type, $.ig.ItfConverter.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.ItfConverter.prototype.$type, c)).n($.ig.ItfConverter.prototype.e, d.f(), d.e())
}));
$.ig.TriangulationSource.prototype.a = "LOCAL_CS[]";
$.ig.XamGeographicMap.prototype.ke = "WorldRect";
$.ig.XamGeographicMap.prototype.kf = "ActualWorldRect";
$.ig.XamGeographicMap.prototype.kg = "BackgroundContent";
$.ig.XamGeographicMap.prototype.kh = "XAxis";
$.ig.XamGeographicMap.prototype.ki = "YAxis";
$.ig.XamGeographicMap.prototype.kj = new $.ig.Rect(2, {__x: -180, __y: -85.05112878, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, {__x: 180, __y: 85.05112878, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
$.ig.XamGeographicMap.prototype.worldRectProperty = $.ig.DependencyProperty.prototype.l($.ig.XamGeographicMap.prototype.ke, $.ig.Rect.prototype.$type, $.ig.XamGeographicMap.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.XamGeographicMap.prototype.kj, function (c, d) {
    (c).f2($.ig.XamGeographicMap.prototype.ke, d.f(), d.e())
}));
$.ig.XamGeographicMap.prototype.kp = new $.ig.Rect(0, 0, 0, 1, 1);
$.ig.util.extCopy($.ig.ArrayUtil, [
    [
        [$.ig.ShapefileConverter],
        ["shuffle$1", "insertionIndex$1", "insertionIndex$11111", "binarySearch$1"]
    ]
]);
$.ig.util.extCopy($.ig.PointCollectionUtil, [
    [
        [$.ig.ShapefileConverter],
        ["flattenTo", "getBounds2", "clipTo"]
    ],
    [
        [$.ig.ShapefileConverter, $.ig.HalfEdgeSet],
        ["getBounds", "getBounds11", "getCentroid", "toPointCollection", "toPointList"]
    ]
]);
$.ig.util.extCopy($.ig.Enumerable, [
    [
        [$.ig.ShapefileConverter, $.ig.HalfEdgeSet],
        ["where$1", "where$11111", "select$2", "selectMany$2", "last$1", "first$1", "firstOrDefault$1", "orderBy$2", "toList$1", "concat$1", "max", "max$111", "min", "min$111", "count$1", "reverse$1", "take$1", "skip$1", "any$1", "contains$1", "union$1", "toArray$1", "elementAt$1"]
    ],
    [
        [$.ig.ShapefileConverter, $.ig.HalfEdgeSet],
        ["ofType$1", "cast$1"]
    ]
]);
$.ig.util.extCopy($.ig.Queryable, [
    [
        [$.ig.ShapefileConverter, $.ig.HalfEdgeSet],
        ["asQueryable"]
    ]
]);
(function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({position: "fixed", bottom: 0, right: 0, zIndex: 1000}).addClass("ui-igtrialwatermark")
    })
}(jQuery));