﻿/*
 * Infragistics.Web.ClientUI infragistics.chart_financialchart.js 12.2.20122.1021
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
$.ig.util.defType("Extensions", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, reset: function () {
    this.d().clear();
    this.d().add(new $.ig.PathFigure());
    this.d().removeAt(0)
}, reset1: function () {
    this.d().clear();
    this.d().add(new $.ig.PathGeometry());
    this.d().removeAt(0)
}, detach: function () {
    if (this == null) {
        return
    }
    var a = $.ig.util.cast($.ig.Panel.prototype.$type, this.aa());
    if (a != null) {
        a.a3().remove(this);
        return
    }
    var d = $.ig.util.cast($.ig.ContentControl.prototype.$type, this.aa());
    if (d != null) {
        d.a9(null);
        return
    }
}, transferChildrenTo: function (a) {
    var h = new $.ig.List$1($.ig.UIElement.prototype.$type, 0);
    var j = this.a3().ofType$1($.ig.UIElement.prototype.$type).getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        h.add(i)
    }
    var l = h.getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        this.a3().remove(k);
        a.a3().add(k)
    }
}, isPlottable: function () {
    return !isNaN(this.__x) && !isNaN(this.__y) && !Number.isInfinity(this.__x) && !Number.isInfinity(this.__y)
}, isPlottable1: function () {
    return !isNaN(this.left()) && !isNaN(this.right()) && !isNaN(this.top()) && !isNaN(this.bottom()) && !Number.isInfinity(this.left()) && !Number.isInfinity(this.right()) && !Number.isInfinity(this.top()) && !Number.isInfinity(this.bottom())
}, $type: new $.ig.Type("Extensions", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("PathFigureUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, duplicate: function () {
    var a = new $.ig.PathFigureCollection();
    var f = this.getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        a.add(e.duplicate1())
    }
    return a
}, duplicate1: function () {
    var a = this;
    if (this == null) {
        return null
    }
    var m = new $.ig.PathSegmentCollection();
    var o = this.__segments.getEnumerator();
    while (o.moveNext()) {
        var n = o.current();
        switch (n.a()) {
            case $.ig.PathSegmentType.prototype.arc:
                var p = n;
                var q = new $.ig.ArcSegment();
                q.i(p.i());
                q.h(p.h());
                q.l(p.l());
                q.k(p.k());
                q.j(p.j());
                m.add(q);
                break;
            case $.ig.PathSegmentType.prototype.line:
                var r = n;
                var s = new $.ig.LineSegment(1);
                s.d(r.d());
                m.add(s);
                break;
            case $.ig.PathSegmentType.prototype.polyLine:
                var t = n;
                var u = new $.ig.PolyLineSegment();
                var w = t.__points.getEnumerator();
                while (w.moveNext()) {
                    var v = w.current();
                    u.__points.add(v)
                }
                m.add(u);
                break
        }
    }
    return(function () {
        var b = new $.ig.PathFigure();
        b.__isClosed = a.__isClosed;
        b.__isFilled = a.__isFilled;
        b.__startPoint = a.__startPoint;
        b.__segments = m;
        return b
    }())
}, $type: new $.ig.Type("PathFigureUtil", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("PriceDisplayType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("PriceDisplayType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("TimeAxisDisplayType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("TimeAxisDisplayType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IndicatorDisplayType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("IndicatorDisplayType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CategoryDateTimeXAxis", "CategoryAxisBase", {init: function () {
    $.ig.CategoryAxisBase.prototype.init.call(this);
    this.hl = new Date();
    this.hm = new Date()
}, dl: function () {
    return new $.ig.CategoryDateTimeXAxisView(this)
}, dp: function (b) {
    $.ig.CategoryAxisBase.prototype.dp.call(this, b);
    this.hw(b)
}, _hw: null, hw: function (b) {
    if (arguments.length === 1) {
        this._hw = b;
        return b
    } else {
        return this._hw
    }
}, displayType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.displayTypeProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.displayTypeProperty)
    }
}, minimumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.minimumValueProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.minimumValueProperty)
    }
}, maximumValue: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.maximumValueProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.maximumValueProperty)
    }
}, interval: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.intervalProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.intervalProperty)
    }
}, dr: function () {
    return new $.ig.HorizontalAxisLabelPanel()
}, getCategorySize: function (c, d) {
    return d.width() / (this.itemsCount() * c.width())
}, getGroupCenter: function (d, e, f) {
    return this.getCategorySize(e, f) * 0.5
}, gz: function (f, g) {
    var h = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
    var i = 1 - 0.5 * h;
    var j = this.getCategorySize(f, g) * i;
    return j
}, hk: null, hx: function (b) {
    if (arguments.length === 1) {
        this.hk = b;
        return b
    } else {
        return this.hk
    }
}, ey: function (A) {
    var N = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var O = !N.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
    var P = new $.ig.ScalerParams(N, O, this.isInverted());
    var Q = this.cz().au();
    var R = this.cz().av();
    var S = this.cz().aw();
    var T = this.cz().ax();
    this.d2();
    this.eq(Q);
    this.eq(R);
    this.eq(S);
    this.eq(T);
    this.c4().clear();
    this.c5().clear();
    this.c6().br(this);
    this.c6().bw(N);
    this.c6().bu(O);
    if (N.isEmpty() || O.isEmpty()) {
        this.df().g(0)
    }
    if (this.df().g() == 0) {
        this.c6().a3().clear()
    }
    if (this.labelSettings() != null) {
        this.labelSettings().r(this)
    }
    this.h6();
    if (!N.isEmpty() && !O.isEmpty() && this.h0() != null) {
        var U = O.bottom();
        if (this.crossingAxis() != null) {
            var V = $.ig.util.cast($.ig.NumericYAxis.prototype.$type, this.crossingAxis());
            if (V != null) {
                var W = new $.ig.ScalerParams(N, O, V.isInverted());
                U = this.crossingValue();
                U = V.getScaledValue(U, W);
                if (U < O.top()) {
                    U = O.top()
                } else {
                    if (U > O.bottom()) {
                        U = O.bottom()
                    }
                }
            }
        }
        if (isNaN(U)) {
            U = 0
        }
        this.en(Q, U, O);
        this.c6().bx(U);
        if (this.displayType() == $.ig.TimeAxisDisplayType.prototype.discrete) {
            var X = (this).getFirstVisibleIndex(N, O);
            var Y = (this).getLastVisibleIndex(N, O);
            if (X < 0 || Y < 0) {
                return
            }
            for (var Z = X; Z <= Y; Z++) {
                var aa = this.hx() == null ? Z : this.hx().__inner[Z];
                var ab = this.getScaledValue(this.h0().item(aa).getTime(), P);
                if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
                    ab += this.isInverted() ? -this.getGroupCenter(Z, N, O) : this.getGroupCenter(Z, N, O)
                }
                if (ab < O.left() || ab > O.right()) {
                    continue
                }
                this.ep(S, ab, O);
                if (this.gn() != null && Z < this.gn().g()) {
                    var ac = this.gn().item(aa);
                    var ad = $.ig.Axis.prototype.e2.call(this, ac);
                    if (!isNaN(ab) && !Number.isInfinity(ab)) {
                        this.c4().add1(ad);
                        this.c5().add(new $.ig.LabelPosition(ab))
                    }
                }
            }
        } else {
            var ae = this.getUnscaledValue(O.left(), P);
            var af = this.getUnscaledValue(O.right(), P);
            var ah = Math.min(ae, af);
            var ai = Math.max(ae, af);
            var aj = new $.ig.LinearNumericSnapper(0, ah, ai, O.width());
            var ak = this.hy() ? this.h5() : aj.h();
            var al = Math.floor((ah - this.actualMinimumValue().getTime()) / ak);
            var am = Math.ceil((ai - this.actualMinimumValue().getTime()) / ak);
            var B = 0;
            if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
                B = this.getGroupCenter(0, N, O);
                B = this.isInverted() ? -B : B
            }
            var C = Math.ceil(O.right());
            var D = Math.floor(O.left());
            var E = this.getScaledValue(this.actualMinimumValue().getTime() + al * ak, P) + B;
            for (var F = al; F <= am; F++) {
                var G = this.getScaledValue(this.actualMinimumValue().getTime() + (F + 1) * ak, P) + B;
                if (!isNaN(E) && !Number.isInfinity(E)) {
                    var H = Math.round(E);
                    if (H <= C) {
                        if (F % 2 == 0) {
                            this.eo(R, E, G, O)
                        }
                        this.ep(S, E, O);
                        for (var I = 1; I < aj.j(); ++I) {
                            var J = this.getScaledValue(this.actualMinimumValue().getTime() + F * ak + (I * ak) / aj.j(), P) + B;
                            this.ep(T, J, O)
                        }
                    }
                    if (H >= D && H <= C) {
                        var K = this.actualMinimumValue().getTime() + F * ak;
                        var ag = Math.floor(K);
                        var L = new Date(ag);
                        var M = this.e2(L);
                        this.c4().add1(M);
                        this.c5().add(new $.ig.LabelPosition(E))
                    }
                }
                E = G
            }
        }
        if ((this.labelSettings() == null || this.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && this.crossingAxis() != null) {
            if (this.labelSettings() != null && (this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideTop || this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
                this.seriesViewer().ic()
            }
        }
        this.c6().bs(this.c4());
        this.c6().bt(this.c5());
        this.g9()
    }
}, h5: function () {
    return this.hz()
}, h6: function () {
    var j = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var k = !j.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
    var l = new Date();
    var m = new Date();
    if (!j.isEmpty() && !k.isEmpty() && this.h0() != null) {
        var n = $.ig.util.cast($.ig.FastItemDateTimeColumn.prototype.$type, this.h0());
        if (n != null) {
            if (this.hx() == null) {
                this.hx(n.u())
            }
        } else {
            this.hx(null)
        }
        if (this.h0().count() > 0) {
            var o = this.hx() == null ? 0 : this.hx().__inner[0];
            var p = this.hx() == null ? this.h0().count() - 1 : this.hx().__inner[this.h0().count() - 1];
            l = this.h0().item(o);
            m = this.h0().item(p);
            this.hy(false);
            if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
                var q = m.getTime() - l.getTime();
                var u = Math.round(q * 1.25 / this.itemsCount() / 2);
                if (u == 0) {
                    u = 1
                }
                var t = l.getTime();
                var s = m.getTime();
                l = new Date(t - u);
                m = new Date(s + u)
            }
            if (this.h9()) {
                l = this.minimumValue()
            }
            if (this.ia()) {
                m = this.maximumValue()
            }
            if (this.h7()) {
                this.hz(this.interval());
                var r = Math.abs(m.getTime() - l.getTime());
                this.hy(this.h8() || (this.displayType() == $.ig.TimeAxisDisplayType.prototype.discrete) || (1 * r / this.h5() > k.width()) ? false : true)
            }
        }
    }
    this.actualMinimumValue(l);
    this.actualMaximumValue(m)
}, h7: function () {
    return this.interval() != 0
}, h8: function () {
    return this.hz() == 0
}, h9: function () {
    return this.minimumValue() != null
}, ia: function () {
    return this.maximumValue() != null
}, hl: null, actualMinimumValue: function (d) {
    if (arguments.length === 1) {
        var e = this.hl != d;
        if (e) {
            var f = this.hl;
            this.hl = d;
            this.ez($.ig.CategoryDateTimeXAxis.prototype.hg, f, d)
        }
        return d
    } else {
        return this.hl
    }
}, hm: null, actualMaximumValue: function (d) {
    if (arguments.length === 1) {
        var e = this.hm != d;
        if (e) {
            var f = this.hm;
            this.hm = d;
            this.ez($.ig.CategoryDateTimeXAxis.prototype.hh, f, d)
        }
        return d
    } else {
        return this.hm
    }
}, _hy: null, hy: function (b) {
    if (arguments.length === 1) {
        this._hy = b;
        return b
    } else {
        return this._hy
    }
}, hn: null, hz: function (b) {
    if (arguments.length === 1) {
        this.hn = b;
        return b
    } else {
        return this.hn
    }
}, getScaledValue: function (e, f) {
    var g;
    if (this.actualMaximumValue() == this.actualMinimumValue()) {
        g = -1
    } else {
        g = (e - this.actualMinimumValue().getTime()) / (this.actualMaximumValue().getTime() - this.actualMinimumValue().getTime())
    }
    var h = 0;
    if (this.categoryMode() == $.ig.CategoryMode.prototype.mode2) {
        h = this.getGroupCenter(0, f.a, f.b)
    }
    if (this.isInverted()) {
        g = 1 - g;
        h = -h
    }
    return f.b.left() + f.b.width() * (g - f.a.left()) / f.a.width() - h
}, getUnscaledValue: function (c, d) {
    return this.gy(c, d.a, d.b, this.categoryMode())
}, gy: function (f, g, h, i) {
    var j = g.left() + g.width() * (f - h.left()) / h.width();
    if (this.isInverted()) {
        j = 1 - j
    }
    return Math.floor(this.actualMinimumValue().getTime() + j * (this.actualMaximumValue().getTime() - this.actualMinimumValue().getTime()))
}, ii: function (b) {
    return this.h0() == null ? $.ig.Date.prototype.minValue() : this.h0().item(b)
}, dateTimeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryDateTimeXAxis.prototype.dateTimeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryDateTimeXAxis.prototype.dateTimeMemberPathProperty)
    }
}, h0: function (c) {
    if (arguments.length === 1) {
        if (this.ho != c) {
            var d = this.ho;
            this.ho = c;
            this.ez($.ig.CategoryDateTimeXAxis.prototype.hj, d, this.ho)
        }
        return c
    } else {
        return this.ho
    }
}, ho: null, il: function (d) {
    if (d == null) {
        return this.gn().y(null, null)
    }
    var e = null;
    var f = $.ig.SeriesViewer.prototype.getCoercionMethod(d, this.coercionMethods());
    d = f.c();
    e = f.d();
    return this.gn().y(d, e)
}, eg: function (g, h, i, j) {
    $.ig.CategoryAxisBase.prototype.eg.call(this, g, h, i, j);
    switch (h) {
        case $.ig.CategoryDateTimeXAxis.prototype.f6:
            var k = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, i);
            if (k != null) {
                k.ac(this.h0());
                this.h0(null);
                k.event = $.ig.Delegate.prototype.remove(k.event, this.im.on(this))
            }
            var l = $.ig.util.cast($.ig.FastItemsSource.prototype.$type, j);
            if (l != null) {
                this.hx(null);
                this.h0(this.il(this.dateTimeMemberPath()));
                l.event = $.ig.Delegate.prototype.combine(l.event, this.im.on(this))
            }
            this.io(false);
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.hi:
            if (this.gn() != null) {
                this.gn().ac(this.h0());
                this.h0(this.il(this.dateTimeMemberPath()));
                this.hx(null)
            }
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.hc:
            this.c7(true);
            this.es(false);
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.hd:
            this.updateRange();
            this.io(false);
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.he:
            this.updateRange();
            this.io(false);
            break;
        case $.ig.CategoryDateTimeXAxis.prototype.hf:
            this.c7(true);
            this.es(false);
            break
    }
}, im: function (c, d) {
    this.hx(null)
}, io: function (d) {
    if (this.gn() == null) {
        return
    }
    this.ey(d);
    var f = this.fl().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        e.renderSeries(d)
    }
}, ex: function () {
    var f = this.actualMinimumValue().getTime();
    var g = this.actualMaximumValue().getTime();
    var h = !this.h9() ? this.actualMinimumValue().getTime() : this.minimumValue().getTime();
    var i = !this.ia() ? this.actualMaximumValue().getTime() : this.maximumValue().getTime();
    var j = new $.ig.AxisRangeChangedEventArgs(f, h, g, i);
    this.dx(j);
    return true
}, sortedIndices: function () {
    if (this.hx() == null) {
        var a = $.ig.util.cast($.ig.FastItemDateTimeColumn.prototype.$type, this.h0());
        if (a != null) {
            this.hx(a.u())
        } else {
            this.hx(null)
        }
    }
    return this.hx()
}, getFirstVisibleIndex: function (i, j) {
    var k = new $.ig.ScalerParams(i, j, this.isInverted());
    var l, m;
    if (this.isInverted()) {
        m = this.getUnscaledValue(j.left(), k);
        l = this.getUnscaledValue(j.right(), k)
    } else {
        l = this.getUnscaledValue(j.left(), k);
        m = this.getUnscaledValue(j.right(), k)
    }
    var n = 0;
    for (var o = 0; o < this.hx().count(); o++) {
        if (this.h0() == null) {
            break
        }
        var p = this.h0().item(this.hx().__inner[o]);
        if (p.getTime() >= l) {
            break
        }
        n = o
    }
    return n
}, getLastVisibleIndex: function (k, l) {
    var m = new $.ig.ScalerParams(k, l, this.isInverted());
    var n, o;
    if (this.isInverted()) {
        o = this.getUnscaledValue(l.left(), m);
        n = this.getUnscaledValue(l.right(), m)
    } else {
        n = this.getUnscaledValue(l.left(), m);
        o = this.getUnscaledValue(l.right(), m)
    }
    var p = this.hx().count() - 1;
    var q = p;
    for (var r = p; r >= 0; r--) {
        if (this.h0() == null || this.hx().count() <= r) {
            break
        }
        var s = this.hx().__inner[r];
        if (s >= this.h0().count()) {
            break
        }
        var t = this.h0().item(s);
        if (t.getTime() < o) {
            break
        }
        q = Math.min(r + 1, this.hx().count() - 1)
    }
    return q
}, getUnscaledValueAt: function (b) {
    return this.h0() == null ? NaN : this.h0().item(b).getTime()
}, getIndexClosestToUnscaledValue: function (j) {
    var f = this;
    var k = this;
    if (this.h0() == null || k.sortedIndices() == null) {
        return -1
    }
    var l = new $.ig.SortedListView$1($.ig.Date.prototype.$type, this.h0(), k.sortedIndices());
    var r = j;
    var m = new Date(r);
    var n = -1;
    var o = l.binarySearch$1($.ig.Date.prototype.$type, function (a) {
        if (m < a) {
            return -1
        }
        if (m > a) {
            return 1
        }
        return 0
    });
    if (o >= 0) {
        n = o
    } else {
        n = ~o
    }
    if (n >= 0 && n < k.sortedIndices().count() && n - 1 >= 0 && n - 1 < k.sortedIndices().count()) {
        var p = m - l.item(n - 1);
        var q = l.item(n) - m;
        if (p < q) {
            n = n - 1
        }
    }
    if (n >= 0 && n < k.sortedIndices().count()) {
        return k.sortedIndices().__inner[n]
    }
    return -1
}, notifyDataChanged: function () {
    this.hx(null);
    this.renderAxis()
}, dd: function () {
    return $.ig.AxisOrientation.prototype.horizontal
}, $type: new $.ig.Type("CategoryDateTimeXAxis", $.ig.CategoryAxisBase.prototype.$type, [$.ig.ISortingAxis.prototype.$type])}, true);
$.ig.util.defType("CategoryDateTimeXAxisView", "CategoryAxisBaseView", {_bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, init: function (b) {
    $.ig.CategoryAxisBaseView.prototype.init.call(this, b);
    this.bo(b)
}, $type: new $.ig.Type("CategoryDateTimeXAxisView", $.ig.CategoryAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("CategoryXAxis", "CategoryAxisBase", {dl: function () {
    return new $.ig.CategoryXAxisView(this)
}, dp: function (b) {
    $.ig.CategoryAxisBase.prototype.dp.call(this, b);
    this.hh(b)
}, _hh: null, hh: function (b) {
    if (arguments.length === 1) {
        this._hh = b;
        return b
    } else {
        return this._hh
    }
}, init: function () {
    this.hd = 1;
    this.he = 1;
    $.ig.CategoryAxisBase.prototype.init.call(this)
}, hd: null, hi: function (b) {
    if (arguments.length === 1) {
        this.hd = b;
        return b
    } else {
        return this.hd
    }
}, he: null, hj: function (b) {
    if (arguments.length === 1) {
        this.he = b;
        return b
    } else {
        return this.he
    }
}, dr: function () {
    return new $.ig.HorizontalAxisLabelPanel()
}, getCategorySize: function (c, d) {
    return d.width() / (this.itemsCount() * c.width())
}, gz: function (h, i) {
    var j = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
    var k = 0;
    if (!isNaN(this.overlap())) {
        k = Math.min(this.overlap(), 1)
    } else {
        k = 0
    }
    var l = 1 - 0.5 * j;
    var m = this.go() == 0 ? 1 : this.go();
    var n = this.getCategorySize(h, i) * l / (m - (m - 1) * k);
    return n
}, getGroupCenter: function (j, k, l) {
    var m = 0.5;
    if (this.go() > 1) {
        var n = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
        var o = 0;
        if (!isNaN(this.overlap())) {
            o = Math.min(this.overlap(), 1)
        }
        var p = 1 - 0.5 * n;
        var q = p / (this.go() - (this.go() - 1) * o);
        var r = (p - q) / (this.go() - 1);
        m = 0.25 * n + 0.5 * q + j * r
    }
    return this.getCategorySize(k, l) * m
}, scrollIntoView: function (h) {
    var i = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var j = this.c2();
    var k = new $.ig.Rect(0, 0, 0, 1, 1);
    var l = new $.ig.ScalerParams(k, k, this.isInverted());
    var m = !i.isEmpty() && !j.isEmpty() && this.gn() != null ? this.gn().x(h) : -1;
    var n = m > -1 ? this.getScaledValue(m, l) : NaN;
    if (!isNaN(n) && this.seriesViewer().fl()) {
        if (!isNaN(n)) {
            if (n < i.left() + 0.1 * i.width()) {
                n = n + 0.4 * i.width();
                i.x(n - 0.5 * i.width())
            }
            if (n > i.right() - 0.1 * i.width()) {
                n = n - 0.4 * i.width();
                i.x(n - 0.5 * i.width())
            }
        }
        this.seriesViewer().hx(i)
    }
}, getScaledValue: function (e, f) {
    var g = this.categoryMode() == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
    if (g < 0) {
        g = 0
    }
    var h = g >= 1 ? (e) / (g) : g == 0 ? 0.5 : NaN;
    if (this.c1()) {
        h = 1 - h
    }
    return f.b.left() + f.b.width() * (h - f.a.left()) / f.a.width()
}, getUnscaledValue: function (c, d) {
    return this.gy(c, d.a, d.b, this.categoryMode())
}, gy: function (g, h, i, j) {
    var k = h.left() + (g - i.left()) * h.width() / i.width();
    if (this.c1()) {
        k = 1 - k
    }
    var l = j == $.ig.CategoryMode.prototype.mode0 ? this.itemsCount() - 1 : this.itemsCount();
    if (l < 0) {
        l = 0
    }
    return k * l
}, ey: function (A) {
    var K = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var L = this.c2();
    var M = new $.ig.ScalerParams(K, L, this.isInverted());
    var N = this.cz().au();
    var O = this.cz().av();
    var P = this.cz().aw();
    var Q = this.cz().ax();
    this.d2();
    this.eq(N);
    this.eq(O);
    this.eq(P);
    this.eq(Q);
    this.c4().clear();
    this.c5().clear();
    this.cz().az(this, K, L);
    if (K.isEmpty() || L.isEmpty()) {
        this.df().g(0)
    }
    if (this.df().g() == 0) {
        this.cz().a0()
    }
    if (this.labelSettings() != null) {
        this.labelSettings().r(this)
    }
    if (this.itemsSource() == null) {
        return
    }
    if (!K.isEmpty() && !L.isEmpty()) {
        var R = this.getUnscaledValue(L.left(), M);
        var S = this.getUnscaledValue(L.right(), M);
        if (this.isInverted()) {
            R = Math.ceil(R);
            S = Math.floor(S)
        } else {
            R = Math.floor(R);
            S = Math.ceil(S)
        }
        var T = L.bottom();
        if (this.crossingAxis() != null) {
            var U = $.ig.util.cast($.ig.NumericYAxis.prototype.$type, this.crossingAxis());
            if (U != null) {
                var V = new $.ig.ScalerParams(K, L, U.isInverted());
                T = this.crossingValue();
                T = U.getScaledValue(T, V);
                if (T < L.top()) {
                    T = L.top()
                } else {
                    if (T > L.bottom()) {
                        T = L.bottom()
                    }
                }
            }
        }
        this.en(N, T, L);
        this.cz().a3(T);
        var W = Math.min(R, S);
        var X = Math.max(R, S);
        var Y = new $.ig.LinearCategorySnapper(1, W, X, L.width(), this.interval(), this.categoryMode());
        var Z = Math.floor((W - 0) / Y.g());
        var aa = Math.ceil((X - 0) / Y.g());
        if (!isNaN(Z) && !isNaN(aa)) {
            var ab = Z;
            var ac = aa;
            var ad = this.getScaledValue(0 + ab * Y.g(), M);
            this.cz().a1(this.getScaledValue(Y.g(), M));
            var ae = Math.ceil(L.right());
            var af = Math.floor(L.left());
            for (var ag = ab; ag <= ac; ++ag) {
                var ah = this.getScaledValue(0 + (ag + 1) * Y.g(), M);
                if (ad <= L.right()) {
                    if (ag % 2 == 0) {
                        this.eo(O, ad, ah, L)
                    }
                    this.ep(P, ad, L);
                    if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0 && this.go() != 0 && this.c9()) {
                        for (var ai = 0; ai < Y.g(); ai++) {
                            for (var B = 0; B < this.go(); B++) {
                                var C = this.getGroupCenter(B, K, L);
                                if (this.isInverted()) {
                                    C = -C
                                }
                                var D = this.getScaledValue(ai + ag * Y.g(), M) + C;
                                this.ep(Q, D, L)
                            }
                        }
                    }
                }
                var E = ad;
                if (this.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
                    var F = this.getScaledValue(ag * Y.g() + 1, M);
                    E = (ad + F) / 2
                }
                var G = Math.round(E);
                if (G >= af && G <= ae) {
                    var H = 0;
                    if (Y.g() >= 1) {
                        H = ag * Math.floor(Y.g())
                    } else {
                        if ((ag * Y.g()) * 2 % 2 == 0) {
                            H = Math.floor(ag * Y.g())
                        } else {
                            H = -1
                        }
                    }
                    if (this.gn() != null && H < this.gn().g() && H >= 0) {
                        var I = this.gn().item(H);
                        var J = this.e2(I);
                        if (!isNaN(E) && !Number.isInfinity(E)) {
                            this.c4().add1(J);
                            this.c5().add(new $.ig.LabelPosition(E))
                        }
                    }
                }
                ad = ah
            }
        }
        if ((this.labelSettings() == null || this.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && this.crossingAxis() != null) {
            if (this.labelSettings() != null && (this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideTop || this.labelSettings().location() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
                this.seriesViewer().ic()
            }
        }
        this.cz().a2(this.c4(), this.c5());
        this.g9()
    }
}, ex: function () {
    if (this.gn() == null) {
        return false
    }
    var c = this.gn().g();
    if (c != this.hj()) {
        var d = new $.ig.AxisRangeChangedEventArgs(1, 1, this.hj(), c);
        this.hj(c);
        this.dx(d);
        return true
    }
    return false
}, interval: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryXAxis.prototype.intervalProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryXAxis.prototype.intervalProperty)
    }
}, g2: function (c) {
    if (c == null) {
        return false
    }
    var d = this.fg();
    if (d == null) {
        return false
    }
    return d.synchronizeHorizontally()
}, dd: function () {
    return $.ig.AxisOrientation.prototype.horizontal
}, $type: new $.ig.Type("CategoryXAxis", $.ig.CategoryAxisBase.prototype.$type)}, true);
$.ig.util.defType("CategoryXAxisView", "CategoryAxisBaseView", {_bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, init: function (b) {
    $.ig.CategoryAxisBaseView.prototype.init.call(this, b);
    this.bo(b)
}, $type: new $.ig.Type("CategoryXAxisView", $.ig.CategoryAxisBaseView.prototype.$type)}, true);
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
$.ig.util.defType("CategoryTrendLineManagerBase", "TrendLineManagerBase$1", {init: function () {
    $.ig.TrendLineManagerBase$1.prototype.init.call(this, Number)
}, prepareLine: function (h, i, j, k, l, m, n) {
}, af: function (f, g, h, i) {
    var e = this;
    if (g != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, g) !== null) {
        if (f != null) {
            f.aa()
        }
        var j = new $.ig.SortingTrendLineManager(function (a) {
            var b = a;
            var c = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, g);
            if (c != null) {
                a = Math.min(a, c.sortedIndices().count() - 1);
                b = c.sortedIndices().__inner[a]
            }
            return c.getUnscaledValueAt(b)
        }, function (a, b, c) {
            var d = new $.ig.ScalerParams(c, b, g.isInverted());
            return g.getUnscaledValue(a, d)
        });
        j.z(h, i);
        return j
    } else {
        if (!($.ig.util.cast($.ig.CategoryTrendLineManager.prototype.$type, f) !== null)) {
            if (f != null) {
                f.aa()
            }
            var k = new $.ig.CategoryTrendLineManager();
            k.z(h, i);
            return k
        }
    }
    return f
}, $type: new $.ig.Type("CategoryTrendLineManagerBase", $.ig.TrendLineManagerBase$1.prototype.$type.specialize(Number), [$.ig.IPreparesCategoryTrendline.prototype.$type])}, true);
$.ig.util.defType("CategoryTrendLineManager", "CategoryTrendLineManagerBase", {init: function () {
    $.ig.CategoryTrendLineManagerBase.prototype.init.call(this)
}, prepareLine: function (l, q, r, s, t, u, v) {
    var k = this;
    var w = v.h() * v.j();
    var x = v.i() * v.j();
    var y = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    if (q == $.ig.TrendLineType.prototype.none) {
        this.m(null);
        this.l().clear();
        return
    }
    if (this.u(q)) {
        this.l().clear();
        this.m($.ig.TrendFitCalculator.prototype.a(y, q, v, this.m(), r.count(), function (a) {
            return a + 1
        }, function (a) {
            return r.item(a)
        }, t, u, w, x))
    }
    if (this.v(q)) {
        this.m(null);
        $.ig.TrendAverageCalculator.prototype.b(q, this.l(), r, s);
        for (var z = v.h(); z <= v.i(); z += 1) {
            var A = z * v.j();
            if (A >= 0 && A < this.l().count()) {
                var B = t(A);
                var C = u(this.l().__inner[A]);
                y.add({__x: B + v.n(), __y: C, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
            }
        }
    }
    this.x(y, v, l)
}, $type: new $.ig.Type("CategoryTrendLineManager", $.ig.CategoryTrendLineManagerBase.prototype.$type)}, true);
$.ig.util.defType("FinancialSeries", "Series", {ea: function (b) {
    $.ig.Series.prototype.ea.call(this, b);
    this.i0(b)
}, _i0: null, i0: function (b) {
    if (arguments.length === 1) {
        this._i0 = b;
        return b
    } else {
        return this._i0
    }
}, init: function () {
    this.h7 = new $.ig.Dictionary$2($.ig.IFastItemColumn$1.prototype.$type.specialize(Number), String, 0);
    this.h8 = new $.ig.Dictionary$2(String, String, 0);
    this.h9 = false;
    this.ig = false;
    $.ig.Series.prototype.init.call(this);
    this.a3($.ig.FinancialSeries.prototype.$type)
}, negativeBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialSeries.prototype.negativeBrushProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialSeries.prototype.negativeBrushProperty)
    }
}, xAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialSeries.prototype.xAxisProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialSeries.prototype.xAxisProperty)
    }
}, yAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialSeries.prototype.yAxisProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialSeries.prototype.yAxisProperty)
    }
}, openMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialSeries.prototype.openMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialSeries.prototype.openMemberPathProperty)
    }
}, i1: function (c) {
    if (arguments.length === 1) {
        if (this.h2 != c) {
            var d = this.h2;
            this.h2 = c;
            this.ej($.ig.FinancialSeries.prototype.ht, d, this.h2)
        }
        return c
    } else {
        return this.h2
    }
}, h2: null, highMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialSeries.prototype.highMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialSeries.prototype.highMemberPathProperty)
    }
}, i2: function (c) {
    if (arguments.length === 1) {
        if (this.h3 != c) {
            var d = this.h3;
            this.h3 = c;
            this.ej($.ig.FinancialSeries.prototype.hv, d, this.h3)
        }
        return c
    } else {
        return this.h3
    }
}, h3: null, lowMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialSeries.prototype.lowMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialSeries.prototype.lowMemberPathProperty)
    }
}, i3: function (c) {
    if (arguments.length === 1) {
        if (this.h4 != c) {
            var d = this.h4;
            this.h4 = c;
            this.ej($.ig.FinancialSeries.prototype.hx, d, this.h4)
        }
        return c
    } else {
        return this.h4
    }
}, h4: null, closeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialSeries.prototype.closeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialSeries.prototype.closeMemberPathProperty)
    }
}, i4: function (c) {
    if (arguments.length === 1) {
        if (this.h5 != c) {
            var d = this.h5;
            this.h5 = c;
            this.ej($.ig.FinancialSeries.prototype.hz, d, this.h5)
        }
        return c
    } else {
        return this.h5
    }
}, h5: null, volumeMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialSeries.prototype.volumeMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialSeries.prototype.volumeMemberPathProperty)
    }
}, i5: function (c) {
    if (arguments.length === 1) {
        if (this.h6 != c) {
            var d = this.h6;
            this.h6 = c;
            this.ej($.ig.FinancialSeries.prototype.h1, d, this.h6)
        }
        return c
    } else {
        return this.h6
    }
}, h6: null, fs: function () {
    $.ig.Series.prototype.fs.call(this);
    if (this.xAxis() != null) {
        this.xAxis().es(false)
    }
    if (this.yAxis() != null) {
        this.yAxis().es(false)
    }
}, ey: function (c, d) {
    this.i0().cg().q(this.resolution());
    this.renderSeries(false)
}, ez: function (c, d) {
    this.i0().cg().q(this.resolution());
    this.renderSeries(false)
}, h7: null, h8: null, jm: function (e, f, g) {
    var h = this.gs(f);
    this.h7.add(h, f);
    this.h8.add(f, g);
    return h
}, jn: function (d, e) {
    if (e == null) {
        return
    }
    d.ac(e);
    var f = this.h7.item(e);
    this.h8.remove(f);
    this.h7.remove(e)
}, h9: null, e6: function (f, g, h, i) {
    var e = this;
    $.ig.Series.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.Series.prototype.bb:
            if (this.syncLink() != null && this.seriesViewer() != null) {
                this.i0().cg().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.FinancialSeries.prototype.bc:
            if (h != null && i == null) {
                if (this.xAxis() != null) {
                    this.xAxis().deregisterSeries(this)
                }
                if (this.yAxis() != null) {
                    this.yAxis().deregisterSeries(this)
                }
            }
            if (h == null && i != null) {
                if (this.xAxis() != null) {
                    this.xAxis().registerSeries(this)
                }
                if (this.yAxis() != null) {
                    this.yAxis().registerSeries(this)
                }
            }
            this.i0().cg().q(this.resolution());
            this.renderSeries(false);
            break;
        case $.ig.FinancialSeries.prototype.be:
            this.h9 = true;
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h) != null) {
                this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h), this.i1());
                this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h), this.i2());
                this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h), this.i3());
                this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h), this.i4());
                this.jn($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h), this.i5());
                this.i1(null);
                this.i2(null);
                this.i3(null);
                this.i4(null);
                this.i5(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i) != null) {
                if (this.openMemberPath() != null) {
                    this.i1(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i), this.openMemberPath(), $.ig.FinancialSeries.prototype.ht))
                }
                if (this.highMemberPath() != null) {
                    this.i2(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i), this.highMemberPath(), $.ig.FinancialSeries.prototype.hv))
                }
                if (this.lowMemberPath() != null) {
                    this.i3(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i), this.lowMemberPath(), $.ig.FinancialSeries.prototype.hx))
                }
                if (this.closeMemberPath() != null) {
                    this.i4(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i), this.closeMemberPath(), $.ig.FinancialSeries.prototype.hz))
                }
                if (this.volumeMemberPath() != null) {
                    this.i5(this.jm($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i), this.volumeMemberPath(), $.ig.FinancialSeries.prototype.h1))
                }
            }
            this.h9 = false;
            if (this.yAxis() != null && !this.yAxis().updateRange()) {
                this.i0().cg().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.FinancialSeries.prototype.hs:
            if (this.dx() != null) {
                this.jn(this.dx(), this.i1());
                this.i1(this.jm(this.dx(), this.openMemberPath(), $.ig.FinancialSeries.prototype.ht))
            }
            break;
        case $.ig.FinancialSeries.prototype.ht:
            if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
                this.i0().cg().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.FinancialSeries.prototype.hu:
            if (this.dx() != null) {
                this.jn(this.dx(), this.i2());
                this.i2(this.jm(this.dx(), this.highMemberPath(), $.ig.FinancialSeries.prototype.hv))
            }
            break;
        case $.ig.FinancialSeries.prototype.hv:
            if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
                this.i0().cg().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.FinancialSeries.prototype.hw:
            if (this.dx() != null) {
                this.jn(this.dx(), this.i3());
                this.i3(this.jm(this.dx(), this.lowMemberPath(), $.ig.FinancialSeries.prototype.hx))
            }
            break;
        case $.ig.FinancialSeries.prototype.hx:
            if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
                this.i0().cg().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.FinancialSeries.prototype.hy:
            if (this.dx() != null) {
                this.jn(this.dx(), this.i4());
                this.i4(this.jm(this.dx(), this.closeMemberPath(), $.ig.FinancialSeries.prototype.hz))
            }
            break;
        case $.ig.FinancialSeries.prototype.hz:
            if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
                this.i0().cg().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.FinancialSeries.prototype.h0:
            if (this.dx() != null) {
                this.jn(this.dx(), this.i5());
                this.i5(this.jm(this.dx(), this.volumeMemberPath(), $.ig.FinancialSeries.prototype.h1))
            }
            break;
        case $.ig.FinancialSeries.prototype.h1:
            if (this.yAxis() != null && !this.yAxis().updateRange() && !this.h9) {
                this.i0().cg().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.FinancialSeries.prototype.hq:
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            this.i0().cg().q(this.resolution());
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.FinancialSeries.prototype.hr:
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            this.i0().cg().q(this.resolution());
            if (this.yAxis() != null && !this.yAxis().updateRange()) {
                this.renderSeries(false)
            }
            this.e5();
            break;
        case $.ig.FinancialSeries.prototype.bo:
            this.ib.a(this.dz(), this.ia, this.ic);
            if (this.ew(this.view())) {
                return
            }
            if (this.dz() == 1) {
                this.jq(this.ic, this.i0())
            } else {
                this.jq(this.ib, this.i0())
            }
            break;
        case $.ig.FinancialSeries.prototype.hp:
            this.renderSeries(false);
            break
    }
}, eg: function (g) {
    var h = this.view().ac();
    var i = this.view().ab();
    var j = -1;
    if (!h.isEmpty() && !i.isEmpty()) {
        var k = (g.__x - h.left()) / h.width();
        var l = this.i0().cg().f() + Math.round((k * (this.i0().cg().g() - this.i0().cg().f())));
        j = l * this.i0().cg().h()
    }
    return j
}, jo: function (k) {
    var l = this.view().ac();
    var m = this.view().ab();
    if (l.isEmpty() || m.isEmpty()) {
        return -1
    }
    var n = new $.ig.ScalerParams(l, m, this.xAxis().isInverted());
    var o = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
    var p = this.xAxis().getUnscaledValue(m.left(), n);
    var q = this.xAxis().getUnscaledValue(m.right(), n);
    var r = (k.__x - l.left()) / l.width();
    var s = p + ((q - p) * r);
    var t = o.getIndexClosestToUnscaledValue(s);
    return t
}, eh: function (c) {
    var d = 0;
    if ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        d = this.jo(c);
        if (d == -1) {
            return null
        }
    } else {
        d = this.eg(c)
    }
    return d >= 0 && this.dx() != null && d < this.dx().g() ? this.dx().item(d) : null
}, ia: null, ib: null, ic: null, jp: function (c, d) {
}, jq: function (c, d) {
}, es: function (f, g, h) {
    var i = $.ig.Series.prototype.es.call(this, f, g, h);
    var j = h;
    if (this.dx() == null || this.dx().g() == 0 || !h.cc() || g.isEmpty() || f.isEmpty() || this.xAxis() == null || this.yAxis() == null || j.cg().h() < 1 || this.xAxis().seriesViewer() == null || this.yAxis().seriesViewer() == null || this.yAxis().actualMinimumValue() == this.yAxis().actualMaximumValue()) {
        j.cg().h(0);
        i = false
    }
    return i
}, getViewInfo: function (c, d) {
    d = this.view().ac();
    c = this.view().ab();
    return{viewportRect: c, windowRect: d}
}, eo: function (c) {
    if (this.ew(this.view())) {
        return
    }
    if (this.gm(c)) {
        var d = this.ia;
        if (this.fo()) {
            this.ia = this.ib;
            this.ib = d
        } else {
            this.ia = this.ic;
            this.ic = d
        }
        this.i0().cg().q(this.resolution());
        this.jp(this.ic, this.i0());
        this.fp()
    } else {
        this.i0().cg().q(this.resolution());
        this.jp(this.ic, this.i0());
        this.jq(this.ic, this.i0())
    }
}, typical: null, typicalBasedOn: null, jr: function (d) {
    var f = d.getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        switch (e) {
            case"HighColumn":
                if (this.i2() == null) {
                    return false
                }
                break;
            case"LowColumn":
                if (this.i3() == null) {
                    return false
                }
                break;
            case"OpenColumn":
                if (this.i1() == null) {
                    return false
                }
                break;
            case"CloseColumn":
                if (this.i4() == null) {
                    return false
                }
                break;
            case"VolumeColumn":
                if (this.i5() == null) {
                    return false
                }
                break
        }
    }
    return true
}, i6: function () {
    return this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null
}, i7: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, $b: null, getEnumerator: function () {
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
                            this.$b = false;
                            this.$state = 1;
                            break;
                        case 1:
                            if (this.$this.typical != null) {
                                this.$state = 2
                            } else {
                                this.$state = 11
                            }
                            break;
                        case 2:
                            this.$c = this.$this.jy(0, this.$this.dx().g());
                            this.$this.typical(this.$this, new $.ig.FinancialEventArgs(0, this.$this.dx().g(), this.$c, this.$this.j0(this.$c)));
                            this.$state = 3;
                            break;
                        case 3:
                            if (this.$c.typicalColumn() != null) {
                                this.$state = 4
                            } else {
                                this.$state = 10
                            }
                            break;
                        case 4:
                            this.$b = true;
                            this.$state = 5;
                            break;
                        case 5:
                            this.$e = this.$c.typicalColumn().getEnumerator();
                            this.$state = 8;
                            break;
                        case 6:
                            this.$d = this.$e.current();
                            this.$current = this.$d;
                            this.$state = 7;
                            return true;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            if (this.$e.moveNext()) {
                                this.$state = 6
                            } else {
                                this.$state = 9
                            }
                            break;
                        case 9:
                            this.$state = 10;
                            break;
                        case 10:
                            this.$state = 11;
                            break;
                        case 11:
                            this.$state = 12;
                            break;
                        case 12:
                            if (!this.$b) {
                                this.$state = 13
                            } else {
                                this.$state = 30
                            }
                            break;
                        case 13:
                            this.$state = 14;
                            break;
                        case 14:
                            if (this.$this.i6() && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices() != null) {
                                this.$state = 15
                            } else {
                                this.$state = 22
                            }
                            break;
                        case 15:
                            this.$f = this.$this.dx().g();
                            this.$g = ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices();
                            this.$state = 16;
                            break;
                        case 16:
                            this.$h = 0;
                            this.$state = 20;
                            break;
                        case 17:
                            this.$current = (this.$this.i2().item(this.$g.item(this.$h)) + this.$this.i3().item(this.$g.item(this.$h)) + this.$this.i4().item(this.$g.item(this.$h))) / 3;
                            this.$state = 18;
                            return true;
                        case 18:
                            this.$state = 19;
                            break;
                        case 19:
                            ++this.$h;
                            this.$state = 20;
                            break;
                        case 20:
                            if (this.$h < this.$f) {
                                this.$state = 17
                            } else {
                                this.$state = 21
                            }
                            break;
                        case 21:
                            this.$state = 29;
                            break;
                        case 22:
                            this.$i = this.$this.dx().g();
                            this.$state = 23;
                            break;
                        case 23:
                            this.$j = 0;
                            this.$state = 27;
                            break;
                        case 24:
                            this.$current = (this.$this.i2().item(this.$j) + this.$this.i3().item(this.$j) + this.$this.i4().item(this.$j)) / 3;
                            this.$state = 25;
                            return true;
                        case 25:
                            this.$state = 26;
                            break;
                        case 26:
                            ++this.$j;
                            this.$state = 27;
                            break;
                        case 27:
                            if (this.$j < this.$i) {
                                this.$state = 24
                            } else {
                                this.$state = 28
                            }
                            break;
                        case 28:
                            this.$state = 29;
                            break;
                        case 29:
                            this.$state = 30;
                            break;
                        case 30:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(Number, a)
}, i8: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
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
                            if (this.$this.i6() && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices() != null) {
                                this.$state = 2
                            } else {
                                this.$state = 13
                            }
                            break;
                        case 2:
                            this.$b = this.$this.i2().count();
                            this.$c = ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices();
                            this.$state = 3;
                            break;
                        case 3:
                            if (this.$b > 0) {
                                this.$state = 4
                            } else {
                                this.$state = 6
                            }
                            break;
                        case 4:
                            this.$current = this.$this.jz(this.$this.i2().item(this.$c.item(0)) - this.$this.i3().item(this.$c.item(0)));
                            this.$state = 5;
                            return true;
                        case 5:
                            this.$state = 6;
                            break;
                        case 6:
                            this.$state = 7;
                            break;
                        case 7:
                            this.$d = 1;
                            this.$state = 11;
                            break;
                        case 8:
                            this.$current = Math.max(this.$this.jz(this.$this.i2().item(this.$c.item(this.$d)) - this.$this.i3().item(this.$c.item(this.$d))), Math.max(this.$this.jz(Math.abs(this.$this.i2().item(this.$c.item(this.$d)) - this.$this.i4().item(this.$c.item(this.$d - 1)))), this.$this.jz(Math.abs(this.$this.i3().item(this.$c.item(this.$d)) - this.$this.i4().item(this.$c.item(this.$d - 1))))));
                            this.$state = 9;
                            return true;
                        case 9:
                            this.$state = 10;
                            break;
                        case 10:
                            ++this.$d;
                            this.$state = 11;
                            break;
                        case 11:
                            if (this.$d < this.$b) {
                                this.$state = 8
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 12:
                            this.$state = 24;
                            break;
                        case 13:
                            this.$e = this.$this.i2().count();
                            this.$state = 14;
                            break;
                        case 14:
                            if (this.$e > 0) {
                                this.$state = 15
                            } else {
                                this.$state = 17
                            }
                            break;
                        case 15:
                            this.$current = this.$this.jz(this.$this.i2().item(0) - this.$this.i3().item(0));
                            this.$state = 16;
                            return true;
                        case 16:
                            this.$state = 17;
                            break;
                        case 17:
                            this.$state = 18;
                            break;
                        case 18:
                            this.$f = 1;
                            this.$state = 22;
                            break;
                        case 19:
                            this.$current = Math.max(this.$this.jz(this.$this.i2().item(this.$f) - this.$this.i3().item(this.$f)), Math.max(this.$this.jz(Math.abs(this.$this.i2().item(this.$f) - this.$this.i4().item(this.$f - 1))), this.$this.jz(Math.abs(this.$this.i3().item(this.$f) - this.$this.i4().item(this.$f - 1)))));
                            this.$state = 20;
                            return true;
                        case 20:
                            this.$state = 21;
                            break;
                        case 21:
                            ++this.$f;
                            this.$state = 22;
                            break;
                        case 22:
                            if (this.$f < this.$e) {
                                this.$state = 19
                            } else {
                                this.$state = 23
                            }
                            break;
                        case 23:
                            this.$state = 24;
                            break;
                        case 24:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(Number, a)
}, i9: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, getEnumerator: function () {
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
                            if (this.$this.i6() && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices() != null) {
                                this.$state = 2
                            } else {
                                this.$state = 13
                            }
                            break;
                        case 2:
                            this.$b = this.$this.i3().count();
                            this.$c = ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.$this.xAxis())).sortedIndices();
                            this.$state = 3;
                            break;
                        case 3:
                            if (this.$b > 0) {
                                this.$state = 4
                            } else {
                                this.$state = 6
                            }
                            break;
                        case 4:
                            this.$current = this.$this.jz(this.$this.i3().item(this.$c.item(0)));
                            this.$state = 5;
                            return true;
                        case 5:
                            this.$state = 6;
                            break;
                        case 6:
                            this.$state = 7;
                            break;
                        case 7:
                            this.$d = 1;
                            this.$state = 11;
                            break;
                        case 8:
                            this.$current = Math.min(this.$this.jz(this.$this.i3().item(this.$c.item(this.$d))), this.$this.jz(this.$this.i4().item(this.$c.item(this.$d - 1))));
                            this.$state = 9;
                            return true;
                        case 9:
                            this.$state = 10;
                            break;
                        case 10:
                            this.$d++;
                            this.$state = 11;
                            break;
                        case 11:
                            if (this.$d < this.$b) {
                                this.$state = 8
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 12:
                            this.$state = 24;
                            break;
                        case 13:
                            this.$e = this.$this.i3().count();
                            this.$state = 14;
                            break;
                        case 14:
                            if (this.$e > 0) {
                                this.$state = 15
                            } else {
                                this.$state = 17
                            }
                            break;
                        case 15:
                            this.$current = this.$this.jz(this.$this.i3().item(0));
                            this.$state = 16;
                            return true;
                        case 16:
                            this.$state = 17;
                            break;
                        case 17:
                            this.$state = 18;
                            break;
                        case 18:
                            this.$f = 1;
                            this.$state = 22;
                            break;
                        case 19:
                            this.$current = Math.min(this.$this.jz(this.$this.i3().item(this.$f)), this.$this.jz(this.$this.i4().item(this.$f - 1)));
                            this.$state = 20;
                            return true;
                        case 20:
                            this.$state = 21;
                            break;
                        case 21:
                            this.$f++;
                            this.$state = 22;
                            break;
                        case 22:
                            if (this.$f < this.$e) {
                                this.$state = 19
                            } else {
                                this.$state = 23
                            }
                            break;
                        case 23:
                            this.$state = 24;
                            break;
                        case 24:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }()
    };
    return new $.ig.GenericEnumerable$1(Number, a)
}, jw: function (b) {
    if (b == null) {
        return null
    }
    if (this.i6() && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).sortedIndices() != null) {
        return new $.ig.SafeSortedReadOnlyDoubleCollection(b, ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).sortedIndices())
    }
    return new $.ig.SafeReadOnlyDoubleCollection(b)
}, ig: null, jx: function () {
    var d = new $.ig.List$1(String, 0);
    d.add("HighColumn");
    d.add("LowColumn");
    d.add("CloseColumn");
    if (this.typicalBasedOn != null && this.dx() != null && !this.ig) {
        this.ig = true;
        var e = this.jy(0, this.dx().g());
        this.ig = false;
        var f = new $.ig.FinancialEventArgs(0, this.dx().g(), e, this.j0(e));
        this.typicalBasedOn(this, f);
        if (f.basedOn() != null && f.basedOn().count() > 0) {
            return f.basedOn()
        }
    }
    return d
}, ih: null, getOpenColumnAsArray: function () {
    if (this.i1() == null) {
        return null
    }
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        if (this.ih != null) {
            return this.ih.asArrayList()
        }
        var e = new $.ig.List$1(Number, 2, this.i1().count());
        var f = (this.xAxis()).sortedIndices();
        var g = this.i1().asArray();
        for (var h = 0; h < f.count(); h++) {
            e.add(g[f.__inner[h]])
        }
        this.ih = e;
        return this.ih.asArrayList()
    } else {
        return this.i1().asArray()
    }
}, ii: null, getHighColumnAsArray: function () {
    if (this.i2() == null) {
        return null
    }
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        if (this.ii != null) {
            return this.ii.asArrayList()
        }
        var e = new $.ig.List$1(Number, 2, this.i2().count());
        var f = (this.xAxis()).sortedIndices();
        var g = this.i2().asArray();
        for (var h = 0; h < f.count(); h++) {
            e.add(g[f.__inner[h]])
        }
        this.ii = e;
        return this.ii.asArrayList()
    } else {
        return this.i2().asArray()
    }
}, ij: null, getLowColumnAsArray: function () {
    if (this.i3() == null) {
        return null
    }
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        if (this.ij != null) {
            return this.ij.asArrayList()
        }
        var e = new $.ig.List$1(Number, 2, this.i3().count());
        var f = (this.xAxis()).sortedIndices();
        var g = this.i3().asArray();
        for (var h = 0; h < f.count(); h++) {
            e.add(g[f.__inner[h]])
        }
        this.ij = e;
        return this.ij.asArrayList()
    } else {
        return this.i3().asArray()
    }
}, ik: null, getCloseColumnAsArray: function () {
    if (this.i4() == null) {
        return null
    }
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        if (this.ik != null) {
            return this.ik.asArrayList()
        }
        var e = new $.ig.List$1(Number, 2, this.i4().count());
        var f = (this.xAxis()).sortedIndices();
        var g = this.i4().asArray();
        for (var h = 0; h < f.count(); h++) {
            e.add(g[f.__inner[h]])
        }
        this.ik = e;
        return this.ik.asArrayList()
    } else {
        return this.i4().asArray()
    }
}, il: null, getVolumeColumnAsArray: function () {
    if (this.i5() == null) {
        return null
    }
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        if (this.il != null) {
            return this.il.asArrayList()
        }
        var e = new $.ig.List$1(Number, 2, this.i5().count());
        var f = (this.xAxis()).sortedIndices();
        var g = this.i5().asArray();
        for (var h = 0; h < f.count(); h++) {
            e.add(g[f.__inner[h]])
        }
        this.il = e;
        return this.il.asArrayList()
    } else {
        return this.i5().asArray()
    }
}, fc: function (j, k, l, m) {
    $.ig.Series.prototype.fc.call(this, j, k, l, m);
    if (this.xAxis() == null || !($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null)) {
        return
    }
    var n = (this.xAxis()).sortedIndices();
    switch (j) {
        case $.ig.FastItemsSourceEventAction.prototype.insert:
            for (var o = k; o < l; o++) {
                var p = n.__inner[o];
                if (this.ih != null) {
                    this.ih.insert(o, this.i1().item(p))
                }
                if (this.ii != null) {
                    this.ii.insert(o, this.i2().item(p))
                }
                if (this.ij != null) {
                    this.ij.insert(o, this.i3().item(p))
                }
                if (this.ik != null) {
                    this.ik.insert(o, this.i4().item(p))
                }
                if (this.il != null) {
                    this.il.insert(o, this.i5().item(p))
                }
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            if (this.ih != null) {
                this.ih.q(k, l)
            }
            if (this.ii != null) {
                this.ii.q(k, l)
            }
            if (this.ij != null) {
                this.ij.q(k, l)
            }
            if (this.ik != null) {
                this.ik.q(k, l)
            }
            if (this.il != null) {
                this.il.q(k, l)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            if (this.ih != null) {
                this.ih = new $.ig.List$1(Number, 0)
            }
            if (this.ii != null) {
                this.ii = new $.ig.List$1(Number, 0)
            }
            if (this.ij != null) {
                this.ij = new $.ig.List$1(Number, 0)
            }
            if (this.ik != null) {
                this.ik = new $.ig.List$1(Number, 0)
            }
            if (this.il != null) {
                this.il = new $.ig.List$1(Number, 0)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.change:
        case $.ig.FastItemsSourceEventAction.prototype.replace:
            for (var q = k; q < l; q++) {
                var r = n.__inner[q];
                if (this.ih != null) {
                    this.ih.__inner[q] = this.i1().item(r)
                }
                if (this.ii != null) {
                    this.ii.__inner[q] = this.i2().item(r)
                }
                if (this.ij != null) {
                    this.ij.__inner[q] = this.i3().item(r)
                }
                if (this.ik != null) {
                    this.ik.__inner[q] = this.i4().item(r)
                }
                if (this.il != null) {
                    this.il.__inner[q] = this.i5().item(r)
                }
            }
            break
    }
}, jy: function (j, k) {
    var i = this;
    var l = this.jw(this.i1());
    var m = this.jw(this.i4());
    var n = this.jw(this.i2());
    var o = this.jw(this.i3());
    var p = this.jw(this.i5());
    var q = (function () {
        var a = new $.ig.FinancialCalculationDataSource();
        a.typicalColumn(new $.ig.CalculatedColumn(1, new $.ig.SafeEnumerable(i.i7()), i.jx()));
        a.trueRange(new $.ig.CalculatedColumn(1, new $.ig.SafeEnumerable(i.i8()), (function () {
            var b = new $.ig.List$1(String, 0);
            b.add("HighColumn");
            b.add("LowColumn");
            b.add("CloseColumn");
            return b
        }())));
        a.trueLow(new $.ig.CalculatedColumn(1, new $.ig.SafeEnumerable(i.i9()), (function () {
            var b = new $.ig.List$1(String, 0);
            b.add("LowColumn");
            b.add("CloseColumn");
            return b
        }())));
        a.openColumn(l);
        a.closeColumn(m);
        a.highColumn(n);
        a.lowColumn(o);
        a.volumeColumn(p);
        a.calculateFrom(j);
        a.calculateCount(k);
        a.minimumValue(NaN);
        a.maximumValue(NaN);
        a.count(i.dx() != null ? i.dx().g() : 0);
        return a
    }());
    return q
}, jz: function (b) {
    if (Number.isInfinity(b) || isNaN(b)) {
        return 0
    }
    return b
}, j0: function (c) {
    var b = this;
    return(function () {
        var a = new $.ig.FinancialCalculationSupportingCalculations();
        a.l(new $.ig.ColumnSupportingCalculation(1, $.ig.Series.prototype.eMA, new $.ig.List$1(String, 0)));
        a.m(new $.ig.ColumnSupportingCalculation(1, $.ig.Series.prototype.sMA, new $.ig.List$1(String, 0)));
        a.n(new $.ig.ColumnSupportingCalculation(1, $.ig.Series.prototype.sTDEV, new $.ig.List$1(String, 0)));
        a.o(new $.ig.ColumnSupportingCalculation(1, $.ig.Series.prototype.movingSum, new $.ig.List$1(String, 0)));
        a.p(new $.ig.DataSourceSupportingCalculation(1, function (d) {
            return $.ig.Series.prototype.eMA(d.volumeColumn(), d.shortPeriod())
        }, (function () {
            var d = new $.ig.List$1(String, 0);
            d.add($.ig.FinancialSeries.prototype.h1);
            return d
        }())));
        a.q(new $.ig.DataSourceSupportingCalculation(1, function (d) {
            return $.ig.Series.prototype.eMA(d.volumeColumn(), d.longPeriod())
        }, (function () {
            var d = new $.ig.List$1(String, 0);
            d.add($.ig.FinancialSeries.prototype.h1);
            return d
        }())));
        a.r(new $.ig.DataSourceSupportingCalculation(1, function (e) {
            return $.ig.Series.prototype.eMA(e.typicalColumn(), e.shortPeriod())
        }, c.typicalColumn().basedOn()));
        a.s(new $.ig.DataSourceSupportingCalculation(1, function (d) {
            return $.ig.Series.prototype.eMA(d.typicalColumn(), d.longPeriod())
        }, c.typicalColumn().basedOn()));
        a.t($.ig.Series.prototype.toEnumerableRange);
        a.u($.ig.Series.prototype.toEnumerable);
        a.v(b.jz.on(b));
        return a
    }())
}, categoryAxis: function () {
    return this.xAxis()
}, er: function (e, f) {
    $.ig.Series.prototype.er.call(this, e, f);
    if (!this.dv()) {
        this.view().b4(f);
        return
    }
    var g = $.ig.util.cast($.ig.FinancialSeriesView.prototype.$type, this.dt());
    this.view().b4(f);
    g.cg().q(this.resolution());
    if (this.ew(this.dt())) {
        return
    }
    var h = new $.ig.CategoryFrame(3);
    this.jp(h, g);
    this.jq(h, g);
    this.dv(false)
}, $type: new $.ig.Type("FinancialSeries", $.ig.Series.prototype.$type, [$.ig.IHasCategoryAxis.prototype.$type])}, true);
$.ig.util.defType("FinancialIndicator", "FinancialSeries", {ed: function () {
    return new $.ig.FinancialIndicatorView(this)
}, ea: function (b) {
    $.ig.FinancialSeries.prototype.ea.call(this, b);
    this.ks(b)
}, _ks: null, ks: function (b) {
    if (arguments.length === 1) {
        this._ks = b;
        return b
    } else {
        return this._ks
    }
}, init: function () {
    $.ig.FinancialSeries.prototype.init.call(this);
    this.ia = new $.ig.CategoryFrame(3);
    this.ib = new $.ig.CategoryFrame(3);
    this.ic = new $.ig.CategoryFrame(3);
    this.kt(new $.ig.List$1(Number, 0));
    this.ku(new $.ig.AxisRange(-100, 100))
}, kx: function (b) {
    if (this.yAxis() != null && !this.yAxis().updateRange()) {
        this.renderSeries(true)
    }
}, fc: function (j, k, l, m) {
    var i = this;
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).notifyDataChanged()
    }
    this.ks().cy().ad(j, k, l, m);
    if (m != null && this.h8.containsKey(m)) {
        (function () {
            var a = i.h8.tryGetValue(m, m);
            m = a.value;
            return a.ret
        }())
    }
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        j = $.ig.FastItemsSourceEventAction.prototype.reset;
        k = 0;
        l = this.dx().g()
    }
    switch (j) {
        case $.ig.FastItemsSourceEventAction.prototype.change:
            if (this.k6(k, l, m)) {
                this.k7(k, l, m);
                this.kx(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.replace:
            if (this.k6(k, this.dx().g() - k, m)) {
                this.k7(k, this.dx().g() - k, m);
                this.kx(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.insert:
            if (this.k6(k, this.dx().g() - k, m)) {
                var n = new Array(l);
                for (var o = 0; o < l; o++) {
                    n[o] = 0
                }
                this.kt().p(k, n);
                this.k7(k, this.dx().g() - k, m);
                this.kx(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            if (this.k6(k, this.dx().g() - k, m)) {
                this.kt().q(k, l);
                this.k7(k, this.dx().g() - k, m);
                this.kx(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            if (this.k6(k, this.dx().g() - k, m)) {
                this.kt(new $.ig.List$1(Number, 2, this.dx().g()));
                var p = new Array(l);
                for (var q = 0; q < l; q++) {
                    p[q] = 0
                }
                this.kt().p(0, p);
                this.k7(k, this.dx().g() - k, m);
                this.kx(true)
            }
            break
    }
}, displayType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.displayTypeProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.displayTypeProperty)
    }
}, ignoreFirst: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.ignoreFirstProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.ignoreFirstProperty)
    }
}, trendLineType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.trendLineTypeProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.trendLineTypeProperty)
    }
}, trendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.trendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.trendLineBrushProperty)
    }
}, actualTrendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.actualTrendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.actualTrendLineBrushProperty)
    }
}, trendLineThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.trendLineThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.trendLineThicknessProperty)
    }
}, trendLineDashCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.trendLineDashCapProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.trendLineDashCapProperty)
    }
}, trendLineDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.trendLineDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.trendLineDashArrayProperty)
    }
}, trendLinePeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.trendLinePeriodProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.trendLinePeriodProperty)
    }
}, kz: function () {
    return -1
}, trendLineZIndex: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialIndicator.prototype.trendLineZIndexProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialIndicator.prototype.trendLineZIndexProperty)
    }
}, _kt: null, kt: function (b) {
    if (arguments.length === 1) {
        this._kt = b;
        return b
    } else {
        return this._kt
    }
}, _ku: null, ku: function (b) {
    if (arguments.length === 1) {
        this._ku = b;
        return b
    } else {
        return this._ku
    }
}, k4: function (c, d) {
}, k5: function (c, d) {
}, e6: function (j, k, l, m) {
    var i = this;
    switch (k) {
        case $.ig.FinancialIndicator.prototype.hq:
            this.ks().cy($.ig.CategoryTrendLineManagerBase.prototype.af(this.ks().cy(), this.xAxis(), this.rootCanvas(), this));
            break
    }
    $.ig.FinancialSeries.prototype.e6.call(this, j, k, l, m);
    if (this.ks().cy().ae(j, k, l, m, this.trendLineDashArray())) {
        this.renderSeries(false);
        this.e5()
    }
    switch (k) {
        case $.ig.FinancialIndicator.prototype.be:
            if (this.dx() != null) {
                this.kt(new $.ig.List$1(Number, 2, this.dx().g()));
                var n = new Array(this.dx().g());
                for (var o = 0; o < this.dx().g(); o++) {
                    n[o] = 0
                }
                this.kt().p(0, n);
                this.k7(0, this.dx().g(), null);
                if (this.yAxis() != null && !this.yAxis().updateRange()) {
                    this.i0().cg().q(this.resolution());
                    this.renderSeries(false)
                }
            }
            break;
        case $.ig.FinancialIndicator.prototype.b6:
            this.fj();
            break;
        case $.ig.FinancialIndicator.prototype.kd:
            this.eu(true, this.view());
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.FinancialIndicator.prototype.ht:
        case $.ig.FinancialIndicator.prototype.hv:
        case $.ig.FinancialIndicator.prototype.hx:
        case $.ig.FinancialIndicator.prototype.hz:
        case $.ig.FinancialIndicator.prototype.h1:
            if (this.dx() != null) {
                if (this.kt().count() != this.dx().g()) {
                    this.kt(new $.ig.List$1(Number, 2, this.dx().g()));
                    var p = new Array(this.dx().g());
                    for (var q = 0; q < this.dx().g(); q++) {
                        p[q] = 0
                    }
                    this.kt().p(0, p)
                }
                if (this.k6(0, this.dx().g() - 1, k)) {
                    this.la()
                }
            }
            break;
        case $.ig.FinancialIndicator.prototype.hq:
            if (this.xAxis() != null && ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null || $.ig.util.cast($.ig.ISortingAxis.prototype.$type, l) !== null)) {
                this.la()
            }
            break;
        case $.ig.FinancialIndicator.prototype.hr:
        case $.ig.FinancialIndicator.prototype.ke:
            this.la();
            this.e5();
            break;
        case $.ig.FinancialIndicator.prototype.b4:
            this.e5();
            break
    }
}, k6: function (d, e, f) {
    if (f == null) {
        return true
    }
    if (this.k5(d, e).contains(f)) {
        return true
    }
    return false
}, k7: function (d, e, f) {
    this.k4(d, e)
}, em: function (b) {
    if (this.dx() == null) {
        return null
    }
    if (b != null && b == this.yAxis()) {
        return this.ku()
    }
    return null
}, scrollIntoView: function (i) {
    var j = this.dx() != null ? this.dx().item1(i) : -1;
    var k = this.view().ac();
    var l = this.view().ab();
    var m = new $.ig.ScalerParams(k, l, this.xAxis().isInverted());
    var n = new $.ig.ScalerParams(k, l, this.yAxis().isInverted());
    if (j >= 0 && k != null && l != null) {
        if (this.xAxis() != null) {
            var o = this.xAxis().getScaledValue(j, m);
            if (o < k.left() + 0.1 * k.width()) {
                o = o + 0.4 * k.width()
            }
            if (o > k.right() - 0.1 * k.width()) {
                o = o - 0.4 * k.width()
            }
            k.x(o - 0.5 * k.width())
        }
        if (this.yAxis() != null && this.kt() != null && j < this.kt().count()) {
            var p = this.yAxis().getScaledValue(this.kt().__inner[j], n);
            if (p < k.top() + 0.1 * k.height()) {
                p = p + 0.4 * k.height()
            }
            if (p > k.bottom() - 0.1 * k.height()) {
                p = p - 0.4 * k.height()
            }
            k.y(p - 0.5 * k.height())
        }
        this.syncLink().bp(this.seriesViewer(), k)
    }
    return j >= 0
}, es: function (e, f, g) {
    var h = $.ig.FinancialSeries.prototype.es.call(this, e, f, g);
    if (this.kt() == null || this.kt().count() == 0) {
        h = false
    }
    return h
}, jp: function (o, z) {
    var n = this;
    var A = z.ac();
    var B = z.ab();
    var C = this.xAxis();
    var D = this.yAxis();
    var E = new $.ig.ScalerParams(A, B, C.isInverted());
    var F = new $.ig.ScalerParams(A, B, D.isInverted());
    o.d.clear();
    o.f.clear();
    o.g.clear();
    var G = 0;
    var H = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
    if (H != null && H.sortedIndices().count() != this.dx().g()) {
        return
    }
    var I = this.xAxis().categoryMode();
    switch (I) {
        case $.ig.CategoryMode.prototype.mode0:
            G = 0;
            break;
        case $.ig.CategoryMode.prototype.mode1:
            G = 0.5 * this.xAxis().getCategorySize(A, B);
            break;
        case $.ig.CategoryMode.prototype.mode2:
            G = this.xAxis().getGroupCenter(this.index(), A, B);
            break
    }
    var J = this.kz();
    if (J == -1) {
        J = this.trendLinePeriod()
    }
    var K = $.ig.util.cast($.ig.FinancialIndicatorView.prototype.$type, z);
    K.cy().prepareLine(o.g, this.trendLineType(), this.kt(), J, function (a) {
        return n.xAxis().getScaledValue(a, E)
    }, function (a) {
        return n.yAxis().getScaledValue(a, F)
    }, (function () {
        var a = new $.ig.TrendResolutionParams();
        a.j(z.cg().h());
        a.h(z.cg().f());
        a.i(z.cg().g());
        a.n(G);
        a.m(n.resolution());
        a.k(B);
        a.l(A);
        return a
    }()));
    var L = this.k8(this.xAxis().getUnscaledValue(2, E) - this.xAxis().getUnscaledValue(1, E));
    for (var M = z.cg().f(); M <= z.cg().g(); ++M) {
        var N;
        if (H == null) {
            N = z.cg().getBucket(M)
        } else {
            var O = H.sortedIndices().__inner[M];
            var P = H.getUnscaledValueAt(O);
            var Q = this.k8(this.kt().__inner[M]);
            var R = Q;
            var S = P;
            while (M < z.cg().g()) {
                O = H.sortedIndices().__inner[M + 1];
                S = H.getUnscaledValueAt(O);
                if (S - P > L) {
                    break
                }
                M++;
                var T = this.k8(this.kt().__inner[M]);
                Q = Math.min(Q, T);
                R = Math.max(R, T)
            }
            var U = NaN;
            if (!isNaN(P)) {
                U = this.xAxis().getScaledValue(P, E)
            }
            N = (function () {
                var a = new Array();
                a.add(n.k8(U));
                a.add(Q);
                a.add(R);
                return a
            }())
        }
        if (!isNaN(N[0])) {
            if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
                N[0] = (N[0] + G)
            } else {
                N[0] = (C.getScaledValue(N[0], E) + G)
            }
            N[1] = D.getScaledValue(N[1], F);
            if (z.cg().h() > 1 || H != null) {
                N[2] = D.getScaledValue(N[2], F)
            } else {
                N[2] = N[1]
            }
            o.d.add(N)
        }
    }
    return
}, k8: function (b) {
    return b
}, eu: function (d, e) {
    $.ig.Series.prototype.eu.call(this, d, e);
    var f = e;
    f.c5(d)
}, jq: function (f, h) {
    var d = this;
    var j = $.ig.util.cast($.ig.FinancialIndicatorView.prototype.$type, h);
    j.c5(false);
    var n = function (a) {
        return f.d.__inner[a][0]
    };
    var o = function (a) {
        return f.d.__inner[a][1]
    };
    var p = function (a) {
        return f.d.__inner[a][0]
    };
    var q = function (a) {
        return f.d.__inner[a][2]
    };
    j.cy().t(f.g);
    var r = h.ab();
    var s = 0;
    if (f.d.count() > 0) {
        switch (this.displayType()) {
            case $.ig.IndicatorDisplayType.prototype.line:
                j.c7(f.d.count(), n, o, p, q, true);
                break;
            case $.ig.IndicatorDisplayType.prototype.area:
                if (this.yAxis() != null) {
                    s = this.k9(h)
                } else {
                    s = 0.5 * (r.top() + r.bottom())
                }
                j.c8(f.d.count(), n, o, p, q, true, s);
                break;
            case $.ig.IndicatorDisplayType.prototype.column:
                s = this.k9(h);
                j.c9(f.d.count(), n, o, p, q, true, s);
                break;
            default:
                throw new $.ig.NotImplementedException()
        }
    }
    j.c6()
}, k9: function (f) {
    var g = 0;
    var h = f.ac();
    var i = f.ab();
    if (!h.isEmpty() && !i.isEmpty() && this.yAxis() != null) {
        var j = new $.ig.ScalerParams(h, i, this.yAxis().isInverted());
        g = this.yAxis().getScaledValue(this.yAxis().referenceValue(), j)
    }
    return g
}, fj: function () {
    $.ig.Series.prototype.fj.call(this);
    if (this.index() < 0) {
        return
    }
    this.ks().da()
}, la: function () {
    this.ks().cy().ac();
    this.k4(0, this.kt().count());
    if (this.yAxis() != null && !this.yAxis().updateRange()) {
        this.renderSeries(false)
    }
}, gw: function (c) {
    $.ig.Series.prototype.gw.call(this, c);
    var d = new $.ig.PolyLineVisualData(1, "trendLine", this.ks().cy().n());
    d.tags().add("Trend");
    c.shapes().add(d)
}, $type: new $.ig.Type("FinancialIndicator", $.ig.FinancialSeries.prototype.$type)}, true);
$.ig.util.defType("StrategyBasedIndicator", "FinancialIndicator", {init: function () {
    $.ig.FinancialIndicator.prototype.init.call(this);
    this.ls(this.lt());
    this.a3(this.lu())
}, _ls: null, ls: function (b) {
    if (arguments.length === 1) {
        this._ls = b;
        return b
    } else {
        return this._ls
    }
}, _lt: null, lt: function () {
    return this._lt
}, _lu: null, lu: function () {
    return this._lu
}, lz: function () {
    return -Number.MAX_VALUE
}, l0: function () {
    return -Number.MAX_VALUE
}, l1: function () {
    return -Number.MAX_VALUE
}, l2: function (e, g, h) {
    var d = this;
    var i = $.ig.DependencyProperty.prototype.l(h, $.ig.Number.prototype.$type, g, new $.ig.PropertyMetadata(1, e, function (a, b) {
        ($.ig.util.cast($.ig.StrategyBasedIndicator.prototype.$type, a)).ej(h, b.f(), b.e())
    }));
    $.ig.StrategyBasedIndicator.prototype.lp.add(h);
    return i
}, l3: function (c, d) {
    return $.ig.StrategyBasedIndicator.prototype.l2(c, d, $.ig.StrategyBasedIndicator.prototype.ll)
}, l4: function (c, d) {
    return $.ig.StrategyBasedIndicator.prototype.l2(c, d, $.ig.StrategyBasedIndicator.prototype.lm)
}, l5: function (c, d) {
    return $.ig.StrategyBasedIndicator.prototype.l2(c, d, $.ig.StrategyBasedIndicator.prototype.ln)
}, k5: function (e, f) {
    var g = this.jy(e, f);
    var h = this.j0(g);
    return this.ls().b(g, h)
}, k4: function (g, h) {
    var i = this.jy(g, h);
    if (h == 0) {
        return false
    }
    if (!this.jr(this.k5(g, h))) {
        return false
    }
    var j = this.j0(i);
    if (this.ku() != null) {
        i.minimumValue(this.ku().c());
        i.maximumValue(this.ku().d())
    }
    var k = this.ls().a(i, j);
    for (var l = 0; l < this.ignoreFirst() && l < i.indicatorColumn().count(); l++) {
        i.indicatorColumn().item(l, NaN)
    }
    if (this.yAxis() != null && this.l6(i)) {
        this.yAxis().updateRange()
    }
    return k
}, l6: function (h) {
    if (!isNaN(h.minimumValue()) && !isNaN(h.maximumValue()) && h.specifiesRange()) {
        var i = this.ku();
        this.ku(new $.ig.AxisRange(h.minimumValue(), h.maximumValue()));
        return this.l7(i, this.ku())
    }
    var j = Number.MAX_VALUE;
    var k = -Number.MAX_VALUE;
    var m = h.indicatorColumn().getEnumerator();
    while (m.moveNext()) {
        var l = m.current();
        if (!isNaN(l)) {
            j = Math.min(j, l);
            k = Math.max(k, l)
        }
    }
    var n = this.ku();
    this.ku(new $.ig.AxisRange(j, k));
    return this.l7(n, this.ku())
}, l7: function (c, d) {
    if (c == null || d == null) {
        return true
    }
    if (c.c() != d.c()) {
        return true
    }
    if (c.d() != d.d()) {
        return true
    }
    return false
}, l8: function (b) {
    if (b == -Number.MAX_VALUE) {
        return 0
    }
    if (b > this.kt().count() && this.kt().count() > 0) {
        b = this.kt().count() - 1
    }
    if (b < 1) {
        return 1
    }
    return b
}, jy: function (d, e) {
    var f = $.ig.FinancialSeries.prototype.jy.call(this, d, e);
    f.indicatorColumn(this.kt());
    f.period(this.l8(this.lz()));
    f.shortPeriod(this.l8(this.l0()));
    f.longPeriod(this.l8(this.l1()));
    f.multiplier(this.l9());
    return f
}, l9: function () {
    return 1
}, ma: function (d, f) {
    var c = this;
    var g = $.ig.DependencyProperty.prototype.l($.ig.StrategyBasedIndicator.prototype.lo, Number, f, new $.ig.PropertyMetadata(1, d, function (a, b) {
        ($.ig.util.cast($.ig.StrategyBasedIndicator.prototype.$type, a)).ej($.ig.StrategyBasedIndicator.prototype.lo, b.f(), b.e())
    }));
    $.ig.StrategyBasedIndicator.prototype.lp.add($.ig.StrategyBasedIndicator.prototype.lo);
    return g
}, e6: function (e, f, g, h) {
    $.ig.FinancialIndicator.prototype.e6.call(this, e, f, g, h);
    if ($.ig.StrategyBasedIndicator.prototype.lp.contains(f)) {
        if (this.yAxis() != null && !this.yAxis().updateRange()) {
            this.i0().cg().q(this.resolution());
            this.k4(0, this.kt().count());
            this.ks().cy().ac();
            this.renderSeries(false)
        }
    }
}, $type: new $.ig.Type("StrategyBasedIndicator", $.ig.FinancialIndicator.prototype.$type)}, true);
$.ig.util.defType("AbsoluteVolumeOscillatorIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.AbsoluteVolumeOscillatorIndicatorStrategy()
}, lu: function () {
    return $.ig.AbsoluteVolumeOscillatorIndicator.prototype.$type
}, shortPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AbsoluteVolumeOscillatorIndicator.prototype.shortPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.AbsoluteVolumeOscillatorIndicator.prototype.shortPeriodProperty)
    }
}, l0: function () {
    return this.shortPeriod()
}, longPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AbsoluteVolumeOscillatorIndicator.prototype.longPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.AbsoluteVolumeOscillatorIndicator.prototype.longPeriodProperty)
    }
}, l1: function () {
    return this.longPeriod()
}, $type: new $.ig.Type("AbsoluteVolumeOscillatorIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("IndicatorCalculationStrategy", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (c, d) {
}, b: function (c, d) {
}, $type: new $.ig.Type("IndicatorCalculationStrategy", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AbsoluteVolumeOscillatorIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(e.p().d());
    f.w(e.q().d());
    return f
}, a: function (h, i) {
    var j = i.p().c()(h).getEnumerator();
    var k = i.q().c()(h).getEnumerator();
    var l = h.indicatorColumn();
    var m = 0;
    while (j.moveNext() && k.moveNext()) {
        var n = j.current() - k.current();
        l.item(m, i.v()(n));
        ++m
    }
    return true
}, $type: new $.ig.Type("AbsoluteVolumeOscillatorIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("AccumulationDistributionIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.AccumulationDistributionIndicatorStrategy()
}, lu: function () {
    return $.ig.AccumulationDistributionIndicator.prototype.$type
}, $type: new $.ig.Type("AccumulationDistributionIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("StreamingIndicatorCalculationStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, c: function (c, d) {
}, $type: new $.ig.Type("StreamingIndicatorCalculationStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("AccumulationDistributionIndicatorStrategy", "StreamingIndicatorCalculationStrategy", {init: function () {
    $.ig.StreamingIndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hz);
    f.add($.ig.FinancialSeries.prototype.hx);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.add($.ig.FinancialSeries.prototype.h1);
    return f
}, a: function (f, g) {
    var h = 0;
    var j = this.c(f, g).getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        f.indicatorColumn().item(h, i);
        h++
    }
    return true
}, c: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: 0, $d: 0, $e: 0, $f: 0, $g: 0, $h: 0, $i: 0, $j: 0, getEnumerator: function () {
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
                            this.$c = 0;
                            this.$d = Number.POSITIVE_INFINITY;
                            this.$e = Number.NEGATIVE_INFINITY;
                            this.$f = g.indicatorColumn() != null ? g.indicatorColumn().count() : 0;
                            this.$g = g.closeColumn() != null ? g.closeColumn().count() : 0;
                            this.$h = g.highColumn() != null ? g.highColumn().count() : 0;
                            this.$i = g.volumeColumn() != null ? g.volumeColumn().count() : 0;
                            this.$j = Math.min(this.$f, Math.min(this.$g, Math.min(this.$h, this.$i)));
                            this.$state = 1;
                            break;
                        case 1:
                            this.$k = 0;
                            this.$state = 5;
                            break;
                        case 2:
                            this.$l = g.closeColumn().item(this.$k);
                            this.$m = g.lowColumn().item(this.$k);
                            this.$n = g.highColumn().item(this.$k);
                            this.$o = g.volumeColumn().item(this.$k);
                            this.$p = ((this.$l - this.$m) - (this.$n - this.$l)) / (this.$n - this.$m);
                            this.$c += h.v()(this.$p * this.$o);
                            this.$d = Math.min(this.$d, this.$c);
                            this.$e = Math.max(this.$e, this.$c);
                            this.$current = this.$c;
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            ++this.$k;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$k < this.$j) {
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
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, $type: new $.ig.Type("AccumulationDistributionIndicatorStrategy", $.ig.StreamingIndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("AverageDirectionalIndexIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.AverageDirectionalIndexIndicatorStrategy()
}, lu: function () {
    return $.ig.AverageDirectionalIndexIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AverageDirectionalIndexIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.AverageDirectionalIndexIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("AverageDirectionalIndexIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("AverageDirectionalIndexIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hx);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.w(d.trueRange().basedOn());
    f.w(e.l().d());
    return f
}, c: function (d, e, f) {
    return e.item(d) - e.item(d - 1)
}, d: function (d, e, f) {
    return f.item(d - 1) - f.item(d)
}, e: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: 0, $d: 0, getEnumerator: function () {
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
                            this.$current = 0;
                            this.$state = 1;
                            return true;
                        case 1:
                            this.$c = 0;
                            this.$d = 0;
                            this.$state = 2;
                            break;
                        case 2:
                            this.$e = 1;
                            this.$state = 11;
                            break;
                        case 3:
                            this.$c = this.$this.c(this.$e, g, h);
                            this.$d = this.$this.d(this.$e, g, h);
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$c > this.$d && this.$c > 0) {
                                this.$state = 5
                            } else {
                                this.$state = 7
                            }
                            break;
                        case 5:
                            this.$current = this.$c;
                            this.$state = 6;
                            return true;
                        case 6:
                            this.$state = 9;
                            break;
                        case 7:
                            this.$current = 0;
                            this.$state = 8;
                            return true;
                        case 8:
                            this.$state = 9;
                            break;
                        case 9:
                            this.$state = 10;
                            break;
                        case 10:
                            this.$e++;
                            this.$state = 11;
                            break;
                        case 11:
                            if (this.$e < g.count()) {
                                this.$state = 3
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 12:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, f: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: 0, $d: 0, getEnumerator: function () {
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
                            this.$current = 0;
                            this.$state = 1;
                            return true;
                        case 1:
                            this.$c = 0;
                            this.$d = 0;
                            this.$state = 2;
                            break;
                        case 2:
                            this.$e = 1;
                            this.$state = 11;
                            break;
                        case 3:
                            this.$c = this.$this.c(this.$e, g, h);
                            this.$d = this.$this.d(this.$e, g, h);
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$d > this.$c && this.$d > 0) {
                                this.$state = 5
                            } else {
                                this.$state = 7
                            }
                            break;
                        case 5:
                            this.$current = this.$d;
                            this.$state = 6;
                            return true;
                        case 6:
                            this.$state = 9;
                            break;
                        case 7:
                            this.$current = 0;
                            this.$state = 8;
                            return true;
                        case 8:
                            this.$state = 9;
                            break;
                        case 9:
                            this.$state = 10;
                            break;
                        case 10:
                            this.$e++;
                            this.$state = 11;
                            break;
                        case 11:
                            if (this.$e < g.count()) {
                                this.$state = 3
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 12:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, g: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: null, $d: null, getEnumerator: function () {
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
                            this.$c = h.l().c()(this.$this.e(g.highColumn(), g.lowColumn()), g.period()).getEnumerator();
                            this.$d = h.l().c()(g.trueRange(), g.period()).getEnumerator();
                            this.$state = 1;
                            break;
                        case 1:
                            this.$state = 4;
                            break;
                        case 2:
                            this.$current = h.v()(this.$c.current() / this.$d.current());
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$c.moveNext() && this.$d.moveNext()) {
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
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, h: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: null, $d: null, getEnumerator: function () {
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
                            this.$c = h.l().c()(this.$this.f(g.highColumn(), g.lowColumn()), g.period()).getEnumerator();
                            this.$d = h.l().c()(g.trueRange(), g.period()).getEnumerator();
                            this.$state = 1;
                            break;
                        case 1:
                            this.$state = 4;
                            break;
                        case 2:
                            this.$current = h.v()(this.$c.current() / this.$d.current());
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$c.moveNext() && this.$d.moveNext()) {
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
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, i: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: null, $d: null, getEnumerator: function () {
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
                            this.$c = this.$this.g(g, h).getEnumerator();
                            this.$d = this.$this.h(g, h).getEnumerator();
                            this.$c.moveNext();
                            this.$d.moveNext();
                            this.$state = 1;
                            break;
                        case 1:
                            this.$state = 4;
                            break;
                        case 2:
                            this.$current = Math.abs(h.v()((this.$c.current() - this.$d.current()) / (this.$c.current() + this.$d.current())));
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$c.moveNext() && this.$d.moveNext()) {
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
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, j: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: null, getEnumerator: function () {
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
                            this.$c = h.l().c()(this.$this.i(g, h), g.period()).getEnumerator();
                            this.$current = 0;
                            this.$state = 1;
                            return true;
                        case 1:
                            this.$state = 2;
                            break;
                        case 2:
                            this.$state = 5;
                            break;
                        case 3:
                            this.$current = this.$c.current() * 100;
                            this.$state = 4;
                            return true;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$c.moveNext()) {
                                this.$state = 3
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
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, a: function (f, g) {
    var h = this.j(f, g).getEnumerator();
    var i = f.indicatorColumn();
    for (var j = 0; j < i.count(); j++) {
        if (h.moveNext()) {
            i.item(j, h.current())
        }
    }
    return true
}, $type: new $.ig.Type("AverageDirectionalIndexIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("AverageTrueRangeIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.AverageTrueRangeIndicatorStrategy()
}, lu: function () {
    return $.ig.AverageTrueRangeIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AverageTrueRangeIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.AverageTrueRangeIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("AverageTrueRangeIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("AverageTrueRangeIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(d.trueRange().basedOn());
    f.w(e.l().d());
    return f
}, a: function (f, g) {
    var h = 0;
    var j = g.l().c()(f.trueRange(), f.period()).getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        f.indicatorColumn().item(h, i);
        ++h
    }
    return true
}, $type: new $.ig.Type("AverageTrueRangeIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("FinancialOverlay", "FinancialSeries", {init: function () {
    $.ig.FinancialSeries.prototype.init.call(this);
    this.kg(false)
}, fc: function (e, f, g, h) {
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).notifyDataChanged()
    }
    this.i0().cg().q(this.resolution());
    this.kj();
    if (this.yAxis() != null) {
        this.yAxis().updateRange()
    }
    this.renderSeries(true)
}, ignoreFirst: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialOverlay.prototype.ignoreFirstProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialOverlay.prototype.ignoreFirstProperty)
    }
}, e6: function (e, f, g, h) {
    switch (f) {
        case $.ig.FinancialOverlay.prototype.be:
            this.kg(false);
            break;
        case $.ig.FinancialOverlay.prototype.kd:
            this.kg(false);
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.FinancialOverlay.prototype.hq:
            this.kg(false);
            break
    }
    $.ig.FinancialSeries.prototype.e6.call(this, e, f, g, h)
}, onApplyTemplate: function () {
    $.ig.Control.prototype.a6.call(this);
    this.renderSeries(false)
}, scrollIntoView: function (l) {
    var m = this.dx() != null ? this.dx().item1(l) : -1;
    var n = this.view().ac();
    var o = this.view().ab();
    var p = new $.ig.Rect(0, 0, 0, 1, 1);
    var q = new $.ig.ScalerParams(p, p, this.xAxis().isInverted());
    var r = new $.ig.ScalerParams(p, p, this.yAxis().isInverted());
    if (m >= 0 && n != null && o != null) {
        if (this.xAxis() != null) {
            var s = this.xAxis().getScaledValue(m, q);
            if (s < n.left() + 0.1 * n.width()) {
                s = s + 0.4 * n.width()
            }
            if (s > n.right() - 0.1 * n.width()) {
                s = s - 0.4 * n.width()
            }
            n.x(s - 0.5 * n.width())
        }
        if (this.yAxis() != null && this.i3() != null && this.i2() != null && m < this.i3().count() && m < this.i2().count()) {
            var t = this.yAxis().getScaledValue(this.i3().item(m), r);
            var u = this.yAxis().getScaledValue(this.i2().item(m), r);
            if (!isNaN(t) && !isNaN(u)) {
                var v = Math.abs(t - u);
                if (n.height() < v) {
                    n.height(v);
                    n.y(Math.min(t, u))
                } else {
                    if (t < n.top() + 0.1 * n.height()) {
                        t = t + 0.4 * n.height()
                    }
                    if (t > n.bottom() - 0.1 * n.height()) {
                        t = t - 0.4 * n.height()
                    }
                    n.y(t - 0.5 * n.height())
                }
            }
        }
        this.syncLink().bp(this.seriesViewer(), n)
    }
    return m >= 0
}, em: function (b) {
    if (b != null && b == this.yAxis() && this.i3() != null && this.i2() != null) {
        return new $.ig.AxisRange(this.i3().minimum(), this.i2().maximum())
    }
    return null
}, _kg: null, kg: function (b) {
    if (arguments.length === 1) {
        this._kg = b;
        return b
    } else {
        return this._kg
    }
}, kj: function () {
}, $type: new $.ig.Type("FinancialOverlay", $.ig.FinancialSeries.prototype.$type)}, true);
$.ig.util.defType("BollingerBandsOverlay", "FinancialOverlay", {init: function () {
    this.kp = new $.ig.List$1(Number, 0);
    this.kq = new $.ig.List$1(Number, 0);
    $.ig.FinancialOverlay.prototype.init.call(this);
    this.a3($.ig.BollingerBandsOverlay.prototype.$type);
    this.ia = new $.ig.CategoryFrame(4);
    this.ib = new $.ig.CategoryFrame(4);
    this.ic = new $.ig.CategoryFrame(4)
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BollingerBandsOverlay.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.BollingerBandsOverlay.prototype.periodProperty)
    }
}, multiplier: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BollingerBandsOverlay.prototype.multiplierProperty, b);
        return b
    } else {
        return this.b($.ig.BollingerBandsOverlay.prototype.multiplierProperty)
    }
}, e6: function (e, f, g, h) {
    if (this.jx().contains(f)) {
        this.kg(false)
    }
    $.ig.FinancialOverlay.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.BollingerBandsOverlay.prototype.kl:
            this.kg(false);
            this.renderSeries(false);
            break;
        case $.ig.BollingerBandsOverlay.prototype.km:
            this.renderSeries(false);
            break
    }
}, kn: null, ko: null, kj: function () {
    this.kp.clear();
    this.kq.clear();
    var f = $.ig.Series.prototype.sMA(new $.ig.SafeEnumerable(this.i7()), this.period()).getEnumerator();
    var g = $.ig.Series.prototype.sTDEV(new $.ig.SafeEnumerable(this.i7()), this.period()).getEnumerator();
    this.ko = Number.MAX_VALUE;
    this.kn = -Number.MAX_VALUE;
    var h = true;
    var i = true;
    var j = this.multiplier();
    while (h || i) {
        if (f.moveNext()) {
            this.kp.add(f.current())
        } else {
            h = false
        }
        if (g.moveNext()) {
            this.kq.add(g.current())
        } else {
            i = false
        }
        if (h && i) {
            this.ko = Math.min(this.ko, f.current() - g.current() * j);
            this.kn = Math.max(this.kn, f.current() + g.current() * j)
        }
    }
    return true
}, em: function (c) {
    if (this.kp == null || this.kq == null || c == null || this.dx() == null || c != this.yAxis()) {
        return null
    }
    var d = new $.ig.AxisRange(this.ko, this.kn);
    return d
}, kp: null, kq: null, kv: function (b) {
    return b
}, jp: function (B, E) {
    var A = this;
    var F = E.ac();
    var G = E.ab();
    var H = this.xAxis();
    var I = this.yAxis();
    var J = new $.ig.ScalerParams(F, G, H.isInverted());
    var K = new $.ig.ScalerParams(F, G, I.isInverted());
    B.d.clear();
    B.f.clear();
    B.g.clear();
    var L = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
    if (L != null && L.sortedIndices().count() != this.dx().g()) {
        return
    }
    var M = 0;
    var N = this.xAxis().categoryMode();
    switch (N) {
        case $.ig.CategoryMode.prototype.mode0:
            M = 0;
            break;
        case $.ig.CategoryMode.prototype.mode1:
            M = 0.5 * this.xAxis().getCategorySize(F, G);
            break;
        case $.ig.CategoryMode.prototype.mode2:
            var O = this.index();
            M = this.xAxis().getGroupCenter(this.index(), F, G);
            break
    }
    if (!this.kg()) {
        this.kg(this.kj());
        if (this.yAxis() != null) {
            this.yAxis().updateRange()
        }
    }
    var P = this.kv(this.xAxis().getUnscaledValue(2, J) - this.xAxis().getUnscaledValue(1, J));
    for (var Q = E.cg().f(); Q <= E.cg().g(); ++Q) {
        var R;
        if (L == null) {
            R = E.cg().getBucket(Q)
        } else {
            var S = L.sortedIndices().__inner[Q];
            var T = L.getUnscaledValueAt(S);
            var U = this.kv(this.kp.__inner[Q]);
            var V = this.kv(this.kq.__inner[Q]);
            var W = U;
            var X = V;
            var Y = T;
            var Z = 1;
            while (Q < E.cg().g()) {
                S = L.sortedIndices().__inner[Q + 1];
                Y = L.getUnscaledValueAt(S);
                if (Y - T > P) {
                    break
                }
                Q++;
                W += this.kv(this.kp.__inner[Q]);
                X += this.kv(this.kq.__inner[Q]);
                Z++
            }
            W /= Z;
            X /= Z;
            var aa = this.kv(W - X * this.multiplier());
            var ab = this.kv(W);
            var ac = this.kv(W + X * this.multiplier());
            var C = NaN;
            if (!isNaN(T)) {
                C = this.xAxis().getScaledValue(T, J)
            }
            R = (function () {
                var a = new Array();
                a.add(A.kv(C));
                a.add(aa);
                a.add(ab);
                a.add(ac);
                return a
            }())
        }
        var D = Math.max(1, P);
        if (!isNaN(R[0]) && Q * D >= this.ignoreFirst()) {
            if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
                R[0] = (R[0] + M)
            } else {
                R[0] = (H.getScaledValue(R[0], J) + M)
            }
            R[1] = I.getScaledValue(R[1], K);
            R[2] = I.getScaledValue(R[2], K);
            R[3] = I.getScaledValue(R[3], K);
            B.d.add(R)
        }
    }
}, eu: function (d, e) {
    $.ig.Series.prototype.eu.call(this, d, e);
    var f = e;
    if (f != null) {
        f.cv()
    }
}, es: function (e, f, g) {
    var h = $.ig.FinancialSeries.prototype.es.call(this, e, f, g);
    if (!this.jr(this.jx())) {
        h = false
    }
    return h
}, jq: function (g, i) {
    var e = this;
    var k = $.ig.util.cast($.ig.BollingerBandsOverlayView.prototype.$type, i);
    k.cv();
    var m = g.d.count();
    var o = function (a) {
        return g.d.__inner[a][0]
    };
    var p = function (a) {
        return g.d.__inner[m - 1 - a][0]
    };
    var q = function (a) {
        return g.d.__inner[a][1]
    };
    var r = function (a) {
        return g.d.__inner[a][2]
    };
    var s = function (a) {
        return g.d.__inner[m - 1 - a][3]
    };
    k.cu(m, o, p, q, r, s)
}, ed: function () {
    return new $.ig.BollingerBandsOverlayView(this)
}, ea: function (b) {
    $.ig.FinancialSeries.prototype.ea.call(this, b);
    this.ku($.ig.util.cast($.ig.BollingerBandsOverlayView.prototype.$type, b))
}, _ku: null, ku: function (b) {
    if (arguments.length === 1) {
        this._ku = b;
        return b
    } else {
        return this._ku
    }
}, $type: new $.ig.Type("BollingerBandsOverlay", $.ig.FinancialOverlay.prototype.$type)}, true);
$.ig.util.defType("FinancialBucketCalculator", "Object", {_e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    if (b == null) {
        throw new $.ig.ArgumentNullException("view")
    }
    this.e(b);
    this.f(-1);
    this.g(this.g());
    this.h(0)
}, getBucket: function (b) {
    return null
}, getErrorBucket: function (c, d) {
    return NaN
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
}, getBucketInfo: function (e, f, g, h) {
    e = this.f();
    f = this.g();
    g = this.h();
    h = this.e().cf().resolution();
    return{firstBucket: e, lastBucket: f, bucketSize: g, resolution: h}
}, q: function (j) {
    var k = this.e().ac();
    var l = this.e().ab();
    if (k.isEmpty() || l.isEmpty() || this.e().cf().xAxis() == null) {
        this.h(0);
        return
    }
    var m = (this.e().cf().xAxis() != null) ? this.e().cf().xAxis().isInverted() : false;
    var n = new $.ig.ScalerParams(k, l, m);
    var o = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.e().cf().xAxis());
    if (o == null || o.sortedIndices() == null) {
        var p = Math.floor(this.e().cf().xAxis().getUnscaledValue(l.left(), n));
        var q = Math.ceil(this.e().cf().xAxis().getUnscaledValue(l.right(), n));
        if (this.e().cf().xAxis().isInverted()) {
            q = Math.ceil(this.e().cf().xAxis().getUnscaledValue(l.left(), n));
            p = Math.floor(this.e().cf().xAxis().getUnscaledValue(l.right(), n))
        }
        var r = Math.floor((q - p + 1) * j / l.width());
        this.h(Math.max(1, r));
        this.f(Math.floor(p / this.h()));
        this.g(Math.ceil(q / this.h()))
    } else {
        this.f(o.getFirstVisibleIndex(k, l));
        this.g(o.getLastVisibleIndex(k, l));
        this.h(1)
    }
}, cacheValues: function () {
}, unCacheValues: function () {
}, $type: new $.ig.Type("FinancialBucketCalculator", $.ig.Object.prototype.$type, [$.ig.IBucketizer.prototype.$type])}, true);
$.ig.util.defType("BollingerBandsBucketCalculator", "FinancialBucketCalculator", {init: function (b) {
    $.ig.FinancialBucketCalculator.prototype.init.call(this, b);
    this.s(b)
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, getBucket: function (j) {
    var i = this;
    var k = j * this.h();
    var l = Math.min(k + this.h() - 1, this.e().cf().dx().g() - 1);
    if (k <= l) {
        var m = this.s().cr().multiplier();
        var n = 0;
        var o = 0;
        var p = 0;
        for (var q = k; q <= l; ++q) {
            if (!isNaN(this.s().cr().kp.__inner[q]) && !isNaN(this.s().cr().kq.__inner[q])) {
                n += this.s().cr().kp.__inner[q];
                o += this.s().cr().kq.__inner[q];
                ++p
            }
        }
        if (p > 0) {
            n = n / p;
            o = o / p;
            return(function () {
                var a = new Array();
                a.add((0.5 * (k + l)));
                a.add((n - o * m));
                a.add((n));
                a.add((n + o * m));
                return a
            }())
        }
    }
    return(function () {
        var a = new Array();
        a.add(NaN);
        a.add(NaN);
        a.add(NaN);
        a.add(NaN);
        return a
    }())
}, $type: new $.ig.Type("BollingerBandsBucketCalculator", $.ig.FinancialBucketCalculator.prototype.$type)}, true);
$.ig.util.defType("FinancialSeriesView", "SeriesView", {_cf: null, cf: function (b) {
    if (arguments.length === 1) {
        this._cf = b;
        return b
    } else {
        return this._cf
    }
}, _cg: null, cg: function (b) {
    if (arguments.length === 1) {
        this._cg = b;
        return b
    } else {
        return this._cg
    }
}, init: function (b) {
    $.ig.SeriesView.prototype.init.call(this, b);
    this.cf(b);
    this.cg(this.cl())
}, cl: function () {
}, ag: function () {
    var a = this;
    $.ig.SeriesView.prototype.ag.call(this);
    if (!this.ad()) {
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.q);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, $type: new $.ig.Type("FinancialSeriesView", $.ig.SeriesView.prototype.$type)}, true);
$.ig.util.defType("BollingerBandsOverlayView", "FinancialSeriesView", {_cr: null, cr: function (b) {
    if (arguments.length === 1) {
        this._cr = b;
        return b
    } else {
        return this._cr
    }
}, init: function (b) {
    this.cm = new $.ig.Polygon();
    this.cn = new $.ig.Polyline();
    this.co = new $.ig.Polyline();
    this.cp = new $.ig.Polyline();
    $.ig.FinancialSeriesView.prototype.init.call(this, b);
    this.cr(b)
}, cl: function () {
    return new $.ig.BollingerBandsBucketCalculator(this)
}, cu: function (m, n, o, p, q, r) {
    var t = $.ig.Flattener.prototype.c(m, n, p, this.u().resolution()).getEnumerator();
    while (t.moveNext()) {
        var s = t.current();
        this.cm.bn().add({__x: n(s), __y: p(s), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        this.cn.bn().add({__x: n(s), __y: p(s), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
    var v = $.ig.Flattener.prototype.c(m, n, q, this.u().resolution()).getEnumerator();
    while (v.moveNext()) {
        var u = v.current();
        this.co.bn().add({__x: n(u), __y: q(u), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
    var x = $.ig.Flattener.prototype.c(m, o, r, this.u().resolution()).getEnumerator();
    while (x.moveNext()) {
        var w = x.current();
        this.cm.bn().add({__x: o(w), __y: r(w), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        this.cp.bn().add({__x: o(w), __y: r(w), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
    this.an()
}, cv: function () {
    this.cm.bn().clear();
    this.cn.bn().clear();
    this.co.bn().clear();
    this.cp.bn().clear();
    this.an()
}, cm: null, cn: null, co: null, cp: null, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.cn.__stroke = this.u().actualOutline();
    this.cn.a7(this.u().thickness());
    this.co.__stroke = this.u().actualOutline();
    this.co.a7(this.u().thickness());
    this.co.a8(this.u().dashArray());
    this.co.a9(this.u().dashCap());
    this.cp.__stroke = this.u().actualOutline();
    this.cp.a7(this.u().thickness());
    this.cm.__fill = this.u().actualBrush();
    this.cm.__opacity = 0.75
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.cn.__stroke = b;
    this.cn.a7(this.u().thickness() + $.ig.BollingerBandsOverlayView.prototype.b);
    this.co.__stroke = b;
    this.co.a7(this.u().thickness() + $.ig.BollingerBandsOverlayView.prototype.b);
    this.co.a8(this.u().dashArray());
    this.co.a9(this.u().dashCap());
    this.cp.__stroke = b;
    this.cp.a7(this.u().thickness() + $.ig.BollingerBandsOverlayView.prototype.b);
    this.cm.__fill = b;
    this.cm.__opacity = 1
}, a0: function (c, d) {
    $.ig.SeriesView.prototype.a0.call(this, c, d);
    if (c.b()) {
        c.j(this.cm);
        c.k(this.cn);
        c.k(this.co);
        c.k(this.cp)
    }
}, $type: new $.ig.Type("BollingerBandsOverlayView", $.ig.FinancialSeriesView.prototype.$type)}, true);
$.ig.util.defType("BollingerBandWidthIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.BollingerBandWidthIndicatorStrategy()
}, lu: function () {
    return $.ig.BollingerBandWidthIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BollingerBandWidthIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.BollingerBandWidthIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, multiplier: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.BollingerBandWidthIndicator.prototype.multiplierProperty, b);
        return b
    } else {
        return this.b($.ig.BollingerBandWidthIndicator.prototype.multiplierProperty)
    }
}, l9: function () {
    return this.multiplier()
}, $type: new $.ig.Type("BollingerBandWidthIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("BollingerBandWidthIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(d.typicalColumn().basedOn());
    f.w(e.m().d());
    f.w(e.n().d());
    return f
}, a: function (m, n) {
    var o = n.m().c()(m.typicalColumn(), m.period()).getEnumerator();
    var p = n.n().c()(m.typicalColumn(), m.period()).getEnumerator();
    var q = m.multiplier();
    var r = m.indicatorColumn();
    var s = 0;
    while (o.moveNext() && p.moveNext()) {
        var t = p.current() * q;
        var u = o.current() + t;
        var v = o.current() - t;
        var w = o.current();
        var x = n.v()((u - v) / w);
        r.item(s, x);
        s++
    }
    return true
}, $type: new $.ig.Type("BollingerBandWidthIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("ChaikinOscillatorIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.ChaikinOscillatorIndicatorStrategy()
}, lu: function () {
    return $.ig.ChaikinOscillatorIndicator.prototype.$type
}, shortPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ChaikinOscillatorIndicator.prototype.shortPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.ChaikinOscillatorIndicator.prototype.shortPeriodProperty)
    }
}, l0: function () {
    return this.shortPeriod()
}, longPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ChaikinOscillatorIndicator.prototype.longPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.ChaikinOscillatorIndicator.prototype.longPeriodProperty)
    }
}, l1: function () {
    return this.longPeriod()
}, $type: new $.ig.Type("ChaikinOscillatorIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("ChaikinOscillatorIndicatorStrategy", "IndicatorCalculationStrategy", {_d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this);
    this.d(new $.ig.AccumulationDistributionIndicatorStrategy())
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(this.d().b(d, e));
    f.w(e.l().d());
    return f
}, a: function (h, i) {
    var j = h.indicatorColumn();
    var k = this.d().c(h, i);
    var l = i.l().c()(k, h.shortPeriod()).getEnumerator();
    var m = i.l().c()(k, h.longPeriod()).getEnumerator();
    var n = 0;
    while (l.moveNext() && m.moveNext()) {
        j.item(n, l.current() - m.current());
        n++
    }
    return true
}, $type: new $.ig.Type("ChaikinOscillatorIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("ChaikinVolatilityIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.ChaikinVolatilityIndicatorStrategy()
}, lu: function () {
    return $.ig.ChaikinVolatilityIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ChaikinVolatilityIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.ChaikinVolatilityIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("ChaikinVolatilityIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("ChaikinVolatilityIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.add($.ig.FinancialSeries.prototype.hx);
    f.w(e.l().d());
    return f
}, a: function (l, m) {
    var c = this;
    var n = m.u()(function (a) {
        return l.highColumn().item(a) - l.lowColumn().item(a)
    }, l.count());
    var o = m.l().c()(n, l.period()).getEnumerator();
    var p = l.indicatorColumn();
    var q = new Array(l.period());
    for (var r = 0; r < l.period(); r++) {
        q[r] = 0
    }
    var s = 0;
    while (o.moveNext()) {
        var t = s % l.period();
        var u = m.v()((o.current() - q[t]) / (q[t] * 100));
        if (s < l.period()) {
            p.item(s, 0)
        } else {
            p.item(s, u)
        }
        q[t] = o.current();
        s++
    }
    return true
}, $type: new $.ig.Type("ChaikinVolatilityIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("CommodityChannelIndexIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.CommodityChannelIndexIndicatorStrategy()
}, lu: function () {
    return $.ig.CommodityChannelIndexIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CommodityChannelIndexIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.CommodityChannelIndexIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("CommodityChannelIndexIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("CommodityChannelIndexIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(d.typicalColumn().basedOn());
    f.w(e.m().d());
    return f
}, a: function (m, n) {
    var o = m.period();
    var p = m.typicalColumn();
    var q = m.indicatorColumn();
    var r = n.m().c()(p, o).getEnumerator();
    var s = p.getEnumerator();
    var t = new Array(o);
    for (var u = 0; u < o; u++) {
        t[u] = 0
    }
    var v = 0;
    while (s.moveNext() && r.moveNext()) {
        t[v % o] = s.current();
        var w = 0;
        for (var x = 0; x < o; ++x) {
            w += Math.abs(r.current() - t[x])
        }
        w /= o;
        q.item(v, n.v()((s.current() - r.current()) / (0.015 * w)));
        ++v
    }
    return true
}, $type: new $.ig.Type("CommodityChannelIndexIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("CustomIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.CustomIndicatorStrategy()
}, lu: function () {
    return $.ig.CustomIndicator.prototype.$type
}, k5: function (i, j) {
    var k = this.jy(i, j);
    var l = this.j0(k);
    var m = new $.ig.List$1(String, 0);
    if (this.md != null) {
        var n = new $.ig.FinancialEventArgs(k.calculateFrom(), k.calculateCount(), k, l);
        this.md(this, n);
        if (n.basedOn() != null) {
            var p = n.basedOn().getEnumerator();
            while (p.moveNext()) {
                var o = p.current();
                m.add(o)
            }
        }
    }
    return m
}, mc: null, indicator: function (b) {
    if (arguments.length === 1) {
        this.mc = b;
        this.la();
        return b
    } else {
        return this.mc
    }
}, md: null, basedOnColumns: function (b) {
    if (arguments.length === 1) {
        this.md = b;
        return b
    } else {
        return this.md
    }
}, k4: function (d, e) {
    $.ig.StrategyBasedIndicator.prototype.k4.call(this, d, e);
    if (this.mc != null) {
        var f = this.jy(d, e);
        if (e == 0) {
            return false
        }
        if (!this.jr(this.k5(d, e))) {
            return false
        }
        this.mc(this, new $.ig.FinancialEventArgs(d, e, f, this.j0(f)));
        if (this.l6(f) && this.yAxis() != null) {
            this.yAxis().updateRange()
        }
        return true
    }
    return false
}, $type: new $.ig.Type("CustomIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("CustomIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, a: function (c, d) {
    return true
}, b: function (c, d) {
    return new $.ig.List$1(String, 0)
}, $type: new $.ig.Type("CustomIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("PriceChannelOverlayView", "FinancialSeriesView", {cm: null, cn: null, co: null, _cq: null, cq: function (b) {
    if (arguments.length === 1) {
        this._cq = b;
        return b
    } else {
        return this._cq
    }
}, init: function (b) {
    this.cm = new $.ig.Polygon();
    this.cn = new $.ig.Polyline();
    this.co = new $.ig.Polyline();
    $.ig.FinancialSeriesView.prototype.init.call(this, b);
    this.cq(b)
}, cl: function () {
    return new $.ig.PriceChannelBucketCalculator(this)
}, ct: function () {
    this.cm.bn().clear();
    this.cn.bn().clear();
    this.co.bn().clear();
    this.an()
}, cu: function (j, k, l, m, n) {
    var p = $.ig.Flattener.prototype.c(j, k, m, this.u().resolution()).getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        this.cm.bn().add({__x: k(o), __y: m(o), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        this.cn.bn().add({__x: k(o), __y: m(o), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
    var r = $.ig.Flattener.prototype.c(j, l, n, this.u().resolution()).getEnumerator();
    while (r.moveNext()) {
        var q = r.current();
        this.cm.bn().add({__x: l(q), __y: n(q), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        this.co.bn().add({__x: l(q), __y: n(q), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.cn.__stroke = this.u().actualOutline();
    this.cn.a7(this.u().thickness());
    this.cn.a8(this.u().dashArray());
    this.cn.a9(this.u().dashCap());
    this.co.__stroke = this.u().actualOutline();
    this.co.a7(this.u().thickness());
    this.co.a8(this.u().dashArray());
    this.co.a9(this.u().dashCap());
    this.cm.__fill = this.u().actualBrush();
    this.cm.__opacity = 0.75
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.cn.__stroke = b;
    this.cn.a7(this.u().thickness() + $.ig.PriceChannelOverlayView.prototype.b);
    this.cn.a8(this.u().dashArray());
    this.cn.a9(this.u().dashCap());
    this.co.__stroke = b;
    this.co.a7(this.u().thickness() + $.ig.PriceChannelOverlayView.prototype.b);
    this.co.a8(this.u().dashArray());
    this.co.a9(this.u().dashCap());
    this.cm.__fill = b;
    this.cm.__opacity = 1
}, a0: function (c, d) {
    $.ig.SeriesView.prototype.a0.call(this, c, d);
    if (c.b()) {
        c.j(this.cm);
        c.k(this.cn);
        c.k(this.co)
    }
}, $type: new $.ig.Type("PriceChannelOverlayView", $.ig.FinancialSeriesView.prototype.$type)}, true);
$.ig.util.defType("DetrendedPriceOscillatorIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.DetrendedPriceOscillatorIndicatorStrategy()
}, lu: function () {
    return $.ig.DetrendedPriceOscillatorIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.DetrendedPriceOscillatorIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.DetrendedPriceOscillatorIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("DetrendedPriceOscillatorIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("DetrendedPriceOscillatorIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hz);
    f.w(e.m().d());
    return f
}, a: function (n, o) {
    var p = n.period();
    var q = n.closeColumn();
    var r = n.indicatorColumn();
    var s = o.m().c()(q, p).getEnumerator();
    var t = ($.ig.intDivide(p, 2)) + 1;
    var u = new Array(t);
    for (var v = 0; v < t; v++) {
        u[v] = 0
    }
    for (var w = 1; w < Math.min(t + 1, r.count()); ++w) {
        var x = w % t;
        r.item(w, 0);
        s.moveNext();
        u[x] = s.current()
    }
    for (var y = t + 1; y < r.count(); y++) {
        var z = y % t;
        r.item(y, q.item(y) - u[z]);
        s.moveNext();
        u[z] = s.current()
    }
    return true
}, $type: new $.ig.Type("DetrendedPriceOscillatorIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("EaseOfMovementIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.EaseOfMovementIndicatorStrategy()
}, lu: function () {
    return $.ig.EaseOfMovementIndicator.prototype.$type
}, $type: new $.ig.Type("EaseOfMovementIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("EaseOfMovementIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.add($.ig.FinancialSeries.prototype.hx);
    f.add($.ig.FinancialSeries.prototype.h1);
    return f
}, a: function (n, o) {
    var p = n.indicatorColumn();
    var q = n.highColumn();
    var r = n.lowColumn();
    var s = n.volumeColumn();
    var t = n.count();
    if (t > 0) {
        p.item(0, 0)
    }
    for (var u = 1; u < t; u++) {
        var v = (q.item(u) + r.item(u)) / 2;
        var w = (q.item(u - 1) + r.item(u - 1)) / 2;
        var x = v - w;
        var y = 10000;
        var z = o.v()((s.item(u) / y) / (q.item(u) - r.item(u)));
        p.item(u, o.v()(x / z))
    }
    return true
}, $type: new $.ig.Type("EaseOfMovementIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("FastStochasticOscillatorIndicator", "StrategyBasedIndicator", {init: function () {
    var a = this;
    $.ig.StrategyBasedIndicator.prototype.init.call(this);
    this.trendLineBrush((function () {
        var b = new $.ig.Brush();
        b.__fill = "Blue";
        return b
    }()));
    this.trendLineType($.ig.TrendLineType.prototype.exponentialAverage);
    this.trendLinePeriod(3)
}, lt: function () {
    return new $.ig.FastStochasticOscillatorIndicatorStrategy()
}, lu: function () {
    return $.ig.FastStochasticOscillatorIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FastStochasticOscillatorIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.FastStochasticOscillatorIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("FastStochasticOscillatorIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("FastStochasticOscillatorIndicatorStrategy", "IndicatorCalculationStrategy", {_d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this);
    this.d(new $.ig.PercentKCalculationStrategy())
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(this.d().b(d, e));
    return f
}, a: function (g, h) {
    var i = this.d().c(g, h);
    var j = 0;
    var l = i.getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        g.indicatorColumn().item(j, k);
        j++
    }
    return true
}, $type: new $.ig.Type("FastStochasticOscillatorIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("FinancialIndicatorBucketCalculator", "FinancialBucketCalculator", {init: function (b) {
    $.ig.FinancialBucketCalculator.prototype.init.call(this, b);
    this.s(b)
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, getBucket: function (i) {
    var h = this;
    var j = i * this.h();
    var k = Math.min(j + this.h() - 1, this.s().cx().kt().count() - 1);
    var l = NaN;
    var m = NaN;
    for (var n = j; n <= k; ++n) {
        var o = this.s().cx().kt().__inner[n];
        if (!isNaN(l)) {
            if (!isNaN(o)) {
                l = Math.min(l, o);
                m = Math.max(m, o)
            }
        } else {
            l = o;
            m = o
        }
    }
    if (!isNaN(l)) {
        return(function () {
            var a = new Array();
            a.add((0.5 * (j + k)));
            a.add(l);
            a.add(m);
            return a
        }())
    }
    return(function () {
        var a = new Array();
        a.add(NaN);
        a.add(NaN);
        a.add(NaN);
        return a
    }())
}, $type: new $.ig.Type("FinancialIndicatorBucketCalculator", $.ig.FinancialBucketCalculator.prototype.$type)}, true);
$.ig.util.defType("FinancialIndicatorView", "FinancialSeriesView", {_cx: null, cx: function (b) {
    if (arguments.length === 1) {
        this._cx = b;
        return b
    } else {
        return this._cx
    }
}, init: function (c) {
    var b = this;
    this.cn = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.PathGeometry());
        return a
    }());
    this.co = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.PathGeometry());
        return a
    }());
    this.cp = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.PathGeometry());
        return a
    }());
    this.cq = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.PathGeometry());
        return a
    }());
    this.cr = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.PathGeometry());
        return a
    }());
    this.cs = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.PathGeometry());
        return a
    }());
    this.ct = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.GeometryGroup());
        return a
    }());
    this.cu = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.GeometryGroup());
        return a
    }());
    $.ig.FinancialSeriesView.prototype.init.call(this, c);
    this.cx(c);
    this.cm = (function () {
        var a = new $.ig.Pool$1($.ig.LineGeometry.prototype.$type);
        a.create(b.c1.on(b));
        a.destroy(b.c2.on(b));
        return a
    }());
    this.cy(new $.ig.CategoryTrendLineManager())
}, cl: function () {
    return new $.ig.FinancialIndicatorBucketCalculator(this)
}, ag: function () {
    var a = this;
    $.ig.FinancialSeriesView.prototype.ag.call(this);
    if (!this.ad()) {
        this.cf().negativeBrush((function () {
            var b = new $.ig.Brush();
            b.__fill = "#415460";
            return b
        }()))
    }
}, cm: null, c1: function () {
    return new $.ig.LineGeometry()
}, c2: function (b) {
}, cn: null, co: null, cp: null, cq: null, cr: null, cs: null, ct: null, cu: null, _cy: null, cy: function (b) {
    if (arguments.length === 1) {
        this._cy = b;
        return b
    } else {
        return this._cy
    }
}, c5: function (b) {
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cn.bp())).reset();
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cp.bp())).reset();
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cr.bp())).reset();
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.co.bp())).reset();
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cq.bp())).reset();
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.cs.bp())).reset();
    ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.ct.bp())).reset1();
    ($.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cu.bp())).reset1();
    if (b) {
        this.cm.g(0)
    }
    this.cy().ab();
    this.an()
}, c6: function () {
}, c7: function (g, h, i, j, k, l) {
    $.ig.IndicatorRenderer.prototype.b(g, h, i, j, k, l, this.ac(), this.ab(), this.cn, this.cp, this.cr, this.co, this.cq, this.cs, this.cg().h(), this.u().resolution());
    this.an()
}, c8: function (h, i, j, k, l, m, n) {
    $.ig.IndicatorRenderer.prototype.c(h, i, j, k, l, m, this.ac(), this.ab(), this.cn, this.cp, this.cr, this.co, this.cq, this.cs, n, this.cg().h(), this.u().resolution());
    this.an()
}, c9: function (h, i, j, k, l, m, n) {
    $.ig.IndicatorRenderer.prototype.d(h, i, j, k, l, m, n, this.cm, this.ct, this.cu);
    this.an()
}, da: function () {
    this.cx().actualTrendLineBrush(null);
    if (this.cx().trendLineBrush() != null) {
        this.cx().actualTrendLineBrush(this.cx().trendLineBrush())
    } else {
        this.cx().actualTrendLineBrush(this.cx().actualBrush())
    }
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.cn.__stroke = this.u().actualBrush();
    this.cr.__stroke = this.u().actualBrush();
    this.cn.a7(this.u().thickness());
    this.cr.a7(this.u().thickness());
    this.cn.a8(this.u().dashArray());
    this.cr.a9(this.u().dashCap());
    this.cn.a8(this.u().dashArray());
    this.cn.a9(this.u().dashCap());
    this.cp.__fill = this.u().actualBrush();
    this.cp.__opacity = 0.8;
    this.co.__stroke = this.cf().negativeBrush();
    this.cs.__stroke = this.cf().negativeBrush();
    this.co.a7(this.u().thickness());
    this.cs.a7(this.u().thickness());
    this.co.a8(this.cf().dashArray());
    this.cs.a8(this.cf().dashArray());
    this.co.a9(this.cf().dashCap());
    this.cs.a9(this.cf().dashCap());
    this.cq.__fill = this.cf().negativeBrush();
    this.cq.__opacity = 0.8;
    this.ct.__stroke = this.u().actualBrush();
    this.ct.a7(this.u().thickness());
    this.ct.a8(this.u().dashArray());
    this.ct.a9(this.u().dashCap());
    this.cu.__stroke = this.cf().negativeBrush();
    this.cu.a7(this.u().thickness());
    this.cu.a8(this.u().dashArray());
    this.cu.a9(this.u().dashCap())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.cn.__stroke = b;
    this.cr.__stroke = b;
    this.cn.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.cr.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.cp.__fill = b;
    this.cp.__opacity = 0.8;
    this.co.__stroke = b;
    this.cs.__stroke = b;
    this.co.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.cs.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.cq.__fill = b;
    this.cq.__opacity = 0.8;
    this.ct.__stroke = b;
    this.ct.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.cu.__stroke = b;
    this.cu.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (c, d) {
    $.ig.SeriesView.prototype.a0.call(this, c, d);
    if (c.b()) {
        if (this.cx().displayType() == $.ig.IndicatorDisplayType.prototype.column) {
            if (this.k && !d) {
                c.e($.ig.GradientDirection.prototype.bottomTop, null)
            }
            c.g(this.ct);
            c.g(this.cu)
        } else {
            if (this.k && !d) {
                c.e($.ig.GradientDirection.prototype.bottomTop, null)
            }
            c.g(this.cp);
            c.g(this.cn);
            c.g(this.cr);
            c.g(this.cq);
            c.g(this.co);
            c.g(this.cs)
        }
    }
}, a1: function (d, e) {
    if (d.b()) {
        if (this.cx().trendLineType() != $.ig.TrendLineType.prototype.none && !e) {
            var f = this.cy().n();
            f.a7(this.cx().trendLineThickness());
            f.__stroke = this.cx().actualTrendLineBrush();
            f.a9(this.cx().trendLineDashCap());
            f.a8(this.cx().trendLineDashArray());
            if (this.k && !e) {
                d.e($.ig.GradientDirection.prototype.bottomTop, null)
            }
            d.k(f)
        }
    }
    $.ig.SeriesView.prototype.a1.call(this, d, e)
}, b5: function (j) {
    $.ig.SeriesView.prototype.b5.call(this, j);
    var k = new $.ig.PathVisualData(1, "positiveColumnsShape", this.ct);
    k.tags().add("Positive");
    var l = new $.ig.PathVisualData(1, "negativeColumnsShape", this.cu);
    l.tags().add("Negative");
    var m = new $.ig.PathVisualData(1, "positive0", this.cn);
    var n = new $.ig.PathVisualData(1, "positive1", this.cr);
    var o = new $.ig.PathVisualData(1, "positive01", this.cp);
    var p = new $.ig.PathVisualData(1, "negative0", this.co);
    var q = new $.ig.PathVisualData(1, "negative1", this.cs);
    var r = new $.ig.PathVisualData(1, "negative01", this.cq);
    j.shapes().add(m);
    j.shapes().add(n);
    j.shapes().add(o);
    j.shapes().add(p);
    j.shapes().add(q);
    j.shapes().add(r)
}, $type: new $.ig.Type("FinancialIndicatorView", $.ig.FinancialSeriesView.prototype.$type)}, true);
$.ig.util.defType("ForceIndexIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this);
    this.displayType($.ig.IndicatorDisplayType.prototype.area)
}, lt: function () {
    return new $.ig.ForceIndexIndicatorStrategy()
}, lu: function () {
    return $.ig.ForceIndexIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.ForceIndexIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.ForceIndexIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("ForceIndexIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("ForceIndexIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hz);
    f.add($.ig.FinancialSeries.prototype.h1);
    f.w(e.l().d());
    return f
}, c: function (d) {
    var c = this;
    var b = function () {
        return function (e) {
            return{$state: 0, $this: c, $current: null, $b: 0, $c: null, $d: null, $e: null, getEnumerator: function () {
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
                            this.$b = 0;
                            this.$c = e.closeColumn();
                            this.$d = e.volumeColumn();
                            this.$e = e.indicatorColumn();
                            this.$state = 1;
                            break;
                        case 1:
                            if (this.$c != null && this.$d != null) {
                                this.$state = 2
                            } else {
                                this.$state = 3
                            }
                            break;
                        case 2:
                            this.$b = Math.min(this.$c.count(), this.$d.count());
                            this.$state = 3;
                            break;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$b > 0) {
                                this.$state = 5
                            } else {
                                this.$state = 7
                            }
                            break;
                        case 5:
                            this.$current = 0;
                            this.$state = 6;
                            return true;
                        case 6:
                            this.$state = 7;
                            break;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            this.$f = 1;
                            this.$state = 12;
                            break;
                        case 9:
                            this.$current = this.$d.item(this.$f) * (this.$c.item(this.$f) - this.$c.item(this.$f - 1));
                            this.$state = 10;
                            return true;
                        case 10:
                            this.$state = 11;
                            break;
                        case 11:
                            ++this.$f;
                            this.$state = 12;
                            break;
                        case 12:
                            if (this.$f < this.$b) {
                                this.$state = 9
                            } else {
                                this.$state = 13
                            }
                            break;
                        case 13:
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
}, a: function (i, j) {
    var k = this.c(i);
    var l = i.period();
    var m = i.indicatorColumn();
    if (l != 0 && !isNaN(l) && !Number.isInfinity(l)) {
        k = j.l().c()(k, i.period())
    }
    var n = 0;
    var p = k.getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        m.item(n, o);
        ++n
    }
    return true
}, $type: new $.ig.Type("ForceIndexIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("FullStochasticOscillatorIndicator", "StrategyBasedIndicator", {init: function () {
    var a = this;
    $.ig.StrategyBasedIndicator.prototype.init.call(this);
    this.trendLineBrush((function () {
        var b = new $.ig.Brush();
        b.__fill = "Blue";
        return b
    }()));
    this.trendLineType($.ig.TrendLineType.prototype.exponentialAverage);
    this.trendLinePeriod(3)
}, lt: function () {
    return new $.ig.FullStochasticOscillatorIndicatorStrategy()
}, lu: function () {
    return $.ig.FullStochasticOscillatorIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FullStochasticOscillatorIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.FullStochasticOscillatorIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, smoothingPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FullStochasticOscillatorIndicator.prototype.smoothingPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.FullStochasticOscillatorIndicator.prototype.smoothingPeriodProperty)
    }
}, l0: function () {
    return this.smoothingPeriod()
}, triggerPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FullStochasticOscillatorIndicator.prototype.triggerPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.FullStochasticOscillatorIndicator.prototype.triggerPeriodProperty)
    }
}, l1: function () {
    return this.triggerPeriod()
}, kz: function () {
    return this.triggerPeriod()
}, $type: new $.ig.Type("FullStochasticOscillatorIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("FullStochasticOscillatorIndicatorStrategy", "IndicatorCalculationStrategy", {_d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this);
    this.d(new $.ig.PercentKCalculationStrategy())
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(this.d().b(d, e));
    f.w(e.l().d());
    return f
}, a: function (h, i) {
    var j = this.d().c(h, i);
    var k = i.l().c()(j, h.shortPeriod());
    var l = 0;
    var n = k.getEnumerator();
    while (n.moveNext()) {
        var m = n.current();
        h.indicatorColumn().item(l, m);
        l++
    }
    return true
}, $type: new $.ig.Type("FullStochasticOscillatorIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("PercentKCalculationStrategy", "StreamingIndicatorCalculationStrategy", {init: function () {
    $.ig.StreamingIndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.add($.ig.FinancialSeries.prototype.hx);
    f.add($.ig.FinancialSeries.prototype.hz);
    return f
}, c: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: 0, $d: null, $e: null, getEnumerator: function () {
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
                            this.$c = g.period();
                            this.$d = g.highColumn();
                            this.$e = g.lowColumn();
                            this.$state = 1;
                            break;
                        case 1:
                            this.$f = 0;
                            this.$state = 16;
                            break;
                        case 2:
                            this.$g = Math.min(this.$c, this.$f);
                            this.$h = -Number.MAX_VALUE;
                            this.$i = Number.MAX_VALUE;
                            this.$state = 3;
                            break;
                        case 3:
                            this.$j = 0;
                            this.$state = 12;
                            break;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            if (!isNaN(this.$d.item(this.$f - this.$j))) {
                                this.$state = 6
                            } else {
                                this.$state = 7
                            }
                            break;
                        case 6:
                            this.$h = Math.max(this.$h, this.$d.item(this.$f - this.$j));
                            this.$state = 7;
                            break;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            if (!isNaN(this.$e.item(this.$f - this.$j))) {
                                this.$state = 9
                            } else {
                                this.$state = 10
                            }
                            break;
                        case 9:
                            this.$i = Math.min(this.$i, this.$e.item(this.$f - this.$j));
                            this.$state = 10;
                            break;
                        case 10:
                            this.$state = 11;
                            break;
                        case 11:
                            this.$j++;
                            this.$state = 12;
                            break;
                        case 12:
                            if (this.$j < this.$g) {
                                this.$state = 4
                            } else {
                                this.$state = 13
                            }
                            break;
                        case 13:
                            this.$current = h.v()((g.closeColumn().item(this.$f) - this.$i) / (this.$h - this.$i) * 100);
                            this.$state = 14;
                            return true;
                        case 14:
                            this.$state = 15;
                            break;
                        case 15:
                            this.$f++;
                            this.$state = 16;
                            break;
                        case 16:
                            if (this.$f < g.count()) {
                                this.$state = 2
                            } else {
                                this.$state = 17
                            }
                            break;
                        case 17:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, a: function (f, g) {
    var h = 0;
    var j = this.c(f, g).getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        f.indicatorColumn().item(h, i);
        h++
    }
    return true
}, $type: new $.ig.Type("PercentKCalculationStrategy", $.ig.StreamingIndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("IndicatorRenderer", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (j, k, l, m) {
    var i = this;
    var n = new $.ig.PathFigure();
    var o = $.ig.Flattener.prototype.e(new $.ig.List$1($.ig.Number.prototype.$type, 0), j, k, l, 0, j.count() - 1, m);
    for (var p = 0; p < o.count(); p++) {
        var q = o.item(p);
        n.__segments.add((function () {
            var a = new $.ig.LineSegment(1);
            a.d({__x: k(q), __y: l(q), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return a
        }()))
    }
    n.__startPoint = ($.ig.util.cast($.ig.LineSegment.prototype.$type, n.__segments.__inner[0])).d();
    return n
}, b: function (A, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V) {
    var W = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, O.bp())).d();
    var X = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, R.bp())).d();
    if (U == 1) {
        var Y = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        var Z = W;
        var aa = 0;
        Y.add(0);
        for (var ab = 0, ac = 1; ac < A; ab = ac++) {
            var ad = aa;
            var ae = I(ac) - I(ab);
            if (L && !isNaN(ae)) {
                ad = Math.sign(ae)
            }
            if (ad != 0 && ad != aa) {
                Z.add($.ig.IndicatorRenderer.prototype.a(Y, H, I, V));
                aa = ad;
                Z = aa == 1 ? X : W;
                Y.clear();
                Y.add(ab)
            }
            Y.add(ac)
        }
        Z.add($.ig.IndicatorRenderer.prototype.a(Y, H, I, V))
    } else {
        var af = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        var B = W;
        var C = 0;
        af.add(0);
        for (var D = 0, E = 1; E < A; D = E++) {
            var F = C;
            var G = I(E) - I(D);
            if (L && !isNaN(G)) {
                F = Math.sign(G)
            }
            if (F != 0 && F != C) {
                if (af.count() > 0) {
                    B.add($.ig.IndicatorRenderer.prototype.a(af, H, I, V))
                }
                C = F;
                B = C == 1 ? X : W;
                af.clear();
                af.add(D)
            }
            af.add(E)
        }
        if (af.count() > 0) {
            B.add($.ig.IndicatorRenderer.prototype.a(af, H, I, V))
        }
    }
}, c: function (B, V, W, X, Y, Z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak) {
    var A = this;
    var al = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, ac.bp())).d();
    var am = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, ad.bp())).d();
    var an = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, af.bp())).d();
    var ao = ($.ig.util.cast($.ig.PathGeometry.prototype.$type, ag.bp())).d();
    if (aj == 1) {
        var ap = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        var aq = al;
        var ar = am;
        var at = 0;
        ap.add(0);
        for (var au = 0, C = 1; C < B; au = C++) {
            var D = at;
            var E = W(C) - W(au);
            if (Z && !isNaN(E)) {
                D = Math.sign(E)
            }
            if (D != 0 && D != at) {
                if (ap.count() > 0) {
                    var F = $.ig.IndicatorRenderer.prototype.a(ap, V, W, ak);
                    var G = F.duplicate1();
                    G.__segments.add((function () {
                        var a = new $.ig.LineSegment(1);
                        a.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, F.__segments.__inner[F.__segments.count() - 1])).d().__x, __y: ai, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                        return a
                    }()));
                    G.__segments.add((function () {
                        var a = new $.ig.LineSegment(1);
                        a.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, F.__segments.__inner[0])).d().__x, __y: ai, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                        return a
                    }()));
                    aq.add(F);
                    ar.add(G)
                }
                at = D;
                aq = at == 1 ? an : al;
                ar = at == 1 ? ao : am;
                ap.clear();
                ap.add(au)
            }
            ap.add(C)
        }
        var H = $.ig.IndicatorRenderer.prototype.a(ap, V, W, ak);
        var I = H.duplicate1();
        I.__segments.add((function () {
            var a = new $.ig.LineSegment(1);
            a.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, H.__segments.__inner[H.__segments.count() - 1])).d().__x, __y: ai, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return a
        }()));
        I.__segments.add((function () {
            var a = new $.ig.LineSegment(1);
            a.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, H.__segments.__inner[0])).d().__x, __y: ai, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return a
        }()));
        aq.add(H);
        ar.add(I)
    } else {
        var J = new $.ig.List$1($.ig.Number.prototype.$type, 0);
        var K = al;
        var L = am;
        var M = 0;
        J.add(0);
        for (var N = 0, O = 1; O < B; N = O++) {
            var P = M;
            var Q = (W(O) + Y(O)) - (W(N) + Y(N));
            if (Z && !isNaN(Q)) {
                P = Math.sign(Q)
            }
            if (P != 0 && P != M) {
                if (J.count() > 0) {
                    var R = $.ig.IndicatorRenderer.prototype.a(J, V, W, ak);
                    var S = R.duplicate1();
                    S.__segments.add((function () {
                        var a = new $.ig.LineSegment(1);
                        a.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, R.__segments.__inner[R.__segments.count() - 1])).d().__x, __y: ai, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                        return a
                    }()));
                    S.__segments.add((function () {
                        var a = new $.ig.LineSegment(1);
                        a.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, R.__segments.__inner[0])).d().__x, __y: ai, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                        return a
                    }()));
                    K.add(R);
                    L.add(S)
                }
                M = P;
                K = M == 1 ? an : al;
                L = M == 1 ? ao : am;
                J.clear();
                J.add(N)
            }
            J.add(O)
        }
        var T = $.ig.IndicatorRenderer.prototype.a(J, V, W, ak);
        var U = T.duplicate1();
        U.__segments.add((function () {
            var a = new $.ig.LineSegment(1);
            a.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, T.__segments.__inner[T.__segments.count() - 1])).d().__x, __y: ai, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return a
        }()));
        U.__segments.add((function () {
            var a = new $.ig.LineSegment(1);
            a.d({__x: ($.ig.util.cast($.ig.LineSegment.prototype.$type, T.__segments.__inner[0])).d().__x, __y: ai, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            return a
        }()));
        K.add(T);
        L.add(U)
    }
}, d: function (p, q, r, s, t, u, v, w, x, y) {
    var z = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, x.bp());
    var A = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, y.bp());
    for (var B = 0; B < p; ++B) {
        var C = w.item(B);
        C.e({__x: q(B), __y: v, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        C.f({__x: q(B), __y: r(B), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        var D = false;
        if (B > 0) {
            if (r(B) <= r(B - 1)) {
                D = true
            }
        } else {
            if (p > 1) {
                if (r(B + 1) <= r(B)) {
                    D = true
                }
            }
        }
        if (D) {
            z.d().add(C)
        } else {
            A.d().add(C)
        }
    }
    w.g(p)
}, $type: new $.ig.Type("IndicatorRenderer", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ItemwiseIndicatorCalculationStrategy", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (d, e, f) {
}, b: function (c, d) {
}, $type: new $.ig.Type("ItemwiseIndicatorCalculationStrategy", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ItemwiseStrategyBasedIndicator", "StrategyBasedIndicator", {_md: null, md: function (b) {
    if (arguments.length === 1) {
        this._md = b;
        return b
    } else {
        return this._md
    }
}, _me: null, me: function () {
    return this._me
}, lt: function () {
    return new $.ig.ItemwiseStrategyCalculationStrategy()
}, init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this);
    this.md(this.me());
    (this.ls()).d(this.md())
}, $type: new $.ig.Type("ItemwiseStrategyBasedIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("ItemwiseStrategyCalculationStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, b: function (c, d) {
    return this.d().b(c, d)
}, a: function (e, f) {
    var g = true;
    for (var h = e.calculateFrom(); h < e.calculateFrom() + e.calculateCount(); h++) {
        g = this.d().a(e, f, h);
        if (!g) {
            return false
        }
    }
    return g
}, $type: new $.ig.Type("ItemwiseStrategyCalculationStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("MarketFacilitationIndexIndicator", "ItemwiseStrategyBasedIndicator", {init: function () {
    $.ig.ItemwiseStrategyBasedIndicator.prototype.init.call(this);
    this.displayType($.ig.IndicatorDisplayType.prototype.area)
}, me: function () {
    return new $.ig.MarketFacilitationIndexIndicatorStrategy()
}, lu: function () {
    return $.ig.MarketFacilitationIndexIndicator.prototype.$type
}, $type: new $.ig.Type("MarketFacilitationIndexIndicator", $.ig.ItemwiseStrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("MarketFacilitationIndexIndicatorStrategy", "ItemwiseIndicatorCalculationStrategy", {init: function () {
    $.ig.ItemwiseIndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.add($.ig.FinancialSeries.prototype.hx);
    f.add($.ig.FinancialSeries.prototype.h1);
    return f
}, a: function (d, e, f) {
    d.indicatorColumn().item(f, e.v()((d.highColumn().item(f) - d.lowColumn().item(f)) / d.volumeColumn().item(f)));
    return true
}, $type: new $.ig.Type("MarketFacilitationIndexIndicatorStrategy", $.ig.ItemwiseIndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("MassIndexIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.MassIndexIndicatorStrategy()
}, lu: function () {
    return $.ig.MassIndexIndicator.prototype.$type
}, $type: new $.ig.Type("MassIndexIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("MassIndexIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.add($.ig.FinancialSeries.prototype.hx);
    f.w(e.l().d());
    return f
}, c: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, getEnumerator: function () {
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
                            this.$c = 0;
                            this.$state = 5;
                            break;
                        case 2:
                            this.$current = g.item(this.$c) - h.item(this.$c);
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$c++;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$c < (Math.min(g.count(), h.count()))) {
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
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, a: function (o, p) {
    var q = 9;
    var r = o.highColumn();
    var s = o.lowColumn();
    var t = o.indicatorColumn();
    var u = p.l().c()(this.c(r, s), q).getEnumerator();
    var v = p.l().c()(p.l().c()(this.c(r, s), q), q).getEnumerator();
    var w = new Array(q);
    for (var x = 0; x < q; x++) {
        w[x] = 0
    }
    var y = 0;
    for (var z = 0; z < t.count(); z++) {
        var A = z % q;
        y -= w[A];
        u.moveNext();
        v.moveNext();
        var B = p.v()(u.current() / v.current());
        y += B;
        t.item(z, y);
        w[A] = B
    }
    return true
}, $type: new $.ig.Type("MassIndexIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("MedianPriceIndicator", "ItemwiseStrategyBasedIndicator", {init: function () {
    $.ig.ItemwiseStrategyBasedIndicator.prototype.init.call(this)
}, me: function () {
    return new $.ig.MedianPriceIndicatorStrategy()
}, lu: function () {
    return $.ig.MedianPriceIndicator.prototype.$type
}, $type: new $.ig.Type("MedianPriceIndicator", $.ig.ItemwiseStrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("MedianPriceIndicatorStrategy", "ItemwiseIndicatorCalculationStrategy", {init: function () {
    $.ig.ItemwiseIndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.add($.ig.FinancialSeries.prototype.hx);
    return f
}, a: function (d, e, f) {
    d.indicatorColumn().item(f, (d.highColumn().item(f) + d.lowColumn().item(f)) / 2);
    return true
}, $type: new $.ig.Type("MedianPriceIndicatorStrategy", $.ig.ItemwiseIndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("MoneyFlowIndexIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this);
    this.displayType($.ig.IndicatorDisplayType.prototype.area)
}, lt: function () {
    return new $.ig.MoneyFlowIndexIndicatorStrategy()
}, lu: function () {
    return $.ig.MoneyFlowIndexIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MoneyFlowIndexIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.MoneyFlowIndexIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("MoneyFlowIndexIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("MoneyFlowIndexIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(d.typicalColumn().basedOn());
    f.add($.ig.FinancialSeries.prototype.h1);
    return f
}, a: function (o, p) {
    var q = o.typicalColumn().getEnumerator();
    var r = o.volumeColumn().getEnumerator();
    var s = o.period();
    var t = 0;
    var u = new Array(s);
    for (t = 0; t < s; t++) {
        u[t] = 0
    }
    var v = 0;
    var w = new Array(s);
    for (t = 0; t < s; t++) {
        w[t] = 0
    }
    var x = 0;
    var y = 0;
    t = 0;
    while (q.moveNext() && r.moveNext()) {
        var z = t % s;
        var A = q.current() * r.current();
        v -= u[z];
        x -= w[z];
        switch (Math.sign(A - y)) {
            case -1:
                u[z] = 0;
                w[z] = A;
                break;
            case 0:
                u[z] = 0;
                w[z] = 0;
                break;
            case 1:
                u[z] = A;
                w[z] = 0;
                break
        }
        v += u[z];
        x += w[z];
        var B = p.v()(100 * v / (v + x));
        o.indicatorColumn().item(t, B);
        y = A;
        ++t
    }
    return true
}, $type: new $.ig.Type("MoneyFlowIndexIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("MovingAverageConvergenceDivergenceIndicator", "StrategyBasedIndicator", {init: function () {
    var a = this;
    $.ig.StrategyBasedIndicator.prototype.init.call(this);
    this.trendLineBrush((function () {
        var b = new $.ig.Brush();
        b.__fill = "Blue";
        return b
    }()));
    this.trendLineType($.ig.TrendLineType.prototype.exponentialAverage);
    this.trendLinePeriod(9)
}, lt: function () {
    return new $.ig.MovingAverageConvergenceDivergenceIndicatorStrategy()
}, lu: function () {
    return $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.$type
}, shortPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.shortPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.shortPeriodProperty)
    }
}, l0: function () {
    return this.shortPeriod()
}, longPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.longPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.longPeriodProperty)
    }
}, l1: function () {
    return this.longPeriod()
}, signalPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.signalPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.MovingAverageConvergenceDivergenceIndicator.prototype.signalPeriodProperty)
    }
}, kz: function () {
    return this.signalPeriod()
}, $type: new $.ig.Type("MovingAverageConvergenceDivergenceIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("MovingAverageConvergenceDivergenceIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(d.typicalColumn().basedOn());
    f.w(e.l().d());
    return f
}, a: function (k, l) {
    var m = k.typicalColumn();
    var n = k.indicatorColumn();
    var o = k.shortPeriod();
    var p = k.longPeriod();
    var q = l.l().c()(m, o).getEnumerator();
    var r = l.l().c()(m, p).getEnumerator();
    var s = 0;
    while (q.moveNext() && r.moveNext()) {
        var t = l.v()(q.current() - r.current());
        n.item(s, t);
        s++
    }
    return true
}, $type: new $.ig.Type("MovingAverageConvergenceDivergenceIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("NegativeVolumeIndexIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.NegativeVolumeIndexIndicatorStrategy()
}, lu: function () {
    return $.ig.NegativeVolumeIndexIndicator.prototype.$type
}, $type: new $.ig.Type("NegativeVolumeIndexIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("NegativeVolumeIndexIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hz);
    f.add($.ig.FinancialSeries.prototype.h1);
    return f
}, a: function (j, k) {
    var l = j.closeColumn();
    var m = j.volumeColumn();
    var n = j.indicatorColumn();
    var o = 0;
    var p = 0;
    var q = 0;
    if (n.count() > 0) {
        n.item(0, o)
    }
    for (var r = 1; r < n.count(); r++) {
        if (m.item(r) < m.item(r - 1)) {
            p = k.v()((l.item(r) - l.item(r - 1)) / l.item(r - 1));
            if (q != 0) {
                o += p * q
            } else {
                o += p
            }
        }
        n.item(r, o);
        q = o
    }
    return true
}, $type: new $.ig.Type("NegativeVolumeIndexIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("OnBalanceVolumeIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.OnBalanceVolumeIndicatorStrategy()
}, lu: function () {
    return $.ig.OnBalanceVolumeIndicator.prototype.$type
}, $type: new $.ig.Type("OnBalanceVolumeIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("OnBalanceVolumeIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hz);
    f.add($.ig.FinancialSeries.prototype.h1);
    return f
}, a: function (i, j) {
    var k = i.closeColumn();
    var l = i.volumeColumn();
    var m = i.indicatorColumn();
    var n = 0;
    if (k != null && l != null) {
        n = Math.min(k.count(), l.count())
    }
    var o = 0;
    if (n > 0) {
        o = l.item(0);
        m.item(0, o)
    }
    for (var p = 1; p < n; ++p) {
        switch (Math.sign(k.item(p) - k.item(p - 1))) {
            case -1:
                o -= l.item(p);
                break;
            case 1:
                o += l.item(p);
                break
        }
        m.item(p, o)
    }
    return true
}, $type: new $.ig.Type("OnBalanceVolumeIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("PercentagePriceOscillatorIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.PercentagePriceOscillatorIndicatorStrategy()
}, lu: function () {
    return $.ig.PercentagePriceOscillatorIndicator.prototype.$type
}, shortPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PercentagePriceOscillatorIndicator.prototype.shortPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.PercentagePriceOscillatorIndicator.prototype.shortPeriodProperty)
    }
}, l0: function () {
    return this.shortPeriod()
}, longPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PercentagePriceOscillatorIndicator.prototype.longPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.PercentagePriceOscillatorIndicator.prototype.longPeriodProperty)
    }
}, l1: function () {
    return this.longPeriod()
}, $type: new $.ig.Type("PercentagePriceOscillatorIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("PercentagePriceOscillatorIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(e.r().d());
    f.w(e.s().d());
    return f
}, a: function (h, i) {
    var j = h.indicatorColumn();
    var k = i.r().c()(h).getEnumerator();
    var l = i.s().c()(h).getEnumerator();
    var m = 0;
    while (k.moveNext() && l.moveNext()) {
        var n = i.v()(100 * (k.current() - l.current()) / l.current());
        j.item(m, n);
        ++m
    }
    return true
}, $type: new $.ig.Type("PercentagePriceOscillatorIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("PercentageVolumeOscillatorIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.PercentageVolumeOscillatorIndicatorStrategy()
}, lu: function () {
    return $.ig.PercentageVolumeOscillatorIndicator.prototype.$type
}, shortPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PercentageVolumeOscillatorIndicator.prototype.shortPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.PercentageVolumeOscillatorIndicator.prototype.shortPeriodProperty)
    }
}, l0: function () {
    return this.shortPeriod()
}, longPeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PercentageVolumeOscillatorIndicator.prototype.longPeriodProperty, b);
        return b
    } else {
        return this.b($.ig.PercentageVolumeOscillatorIndicator.prototype.longPeriodProperty)
    }
}, l1: function () {
    return this.longPeriod()
}, $type: new $.ig.Type("PercentageVolumeOscillatorIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("PercentageVolumeOscillatorIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(e.p().d());
    f.w(e.q().d());
    return f
}, a: function (h, i) {
    var j = i.p().c()(h).getEnumerator();
    var k = i.q().c()(h).getEnumerator();
    var l = h.indicatorColumn();
    var m = 0;
    while (j.moveNext() && k.moveNext()) {
        var n = i.v()(100 * (j.current() - k.current()) / k.current());
        l.item(m, n);
        ++m
    }
    return true
}, $type: new $.ig.Type("PercentageVolumeOscillatorIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("PositiveVolumeIndexIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.PositiveVolumeIndexIndicatorStrategy()
}, lu: function () {
    return $.ig.PositiveVolumeIndexIndicator.prototype.$type
}, $type: new $.ig.Type("PositiveVolumeIndexIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("PositiveVolumeIndexIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hz);
    f.add($.ig.FinancialSeries.prototype.h1);
    return f
}, a: function (j, k) {
    var l = j.closeColumn();
    var m = j.volumeColumn();
    var n = j.indicatorColumn();
    var o = 0;
    var p = 0;
    var q = 0;
    if (n.count() > 0) {
        n.item(0, o)
    }
    for (var r = 1; r < n.count(); r++) {
        if (m.item(r) > m.item(r - 1)) {
            p = k.v()((l.item(r) - l.item(r - 1)) / l.item(r - 1));
            if (q != 0) {
                o += p * q
            } else {
                o += p
            }
        }
        n.item(r, o);
        q = o
    }
    return true
}, $type: new $.ig.Type("PositiveVolumeIndexIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("PriceChannelOverlay", "FinancialOverlay", {init: function () {
    this.km = new $.ig.List$1(Number, 0);
    this.kn = new $.ig.List$1(Number, 0);
    $.ig.FinancialOverlay.prototype.init.call(this);
    this.a3($.ig.PriceChannelOverlay.prototype.$type);
    this.ia = new $.ig.CategoryFrame(3);
    this.ib = new $.ig.CategoryFrame(3);
    this.ic = new $.ig.CategoryFrame(3)
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PriceChannelOverlay.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.PriceChannelOverlay.prototype.periodProperty)
    }
}, e6: function (e, f, g, h) {
    switch (f) {
        case $.ig.PriceChannelOverlay.prototype.hv:
        case $.ig.PriceChannelOverlay.prototype.hx:
            this.kg(false);
            break
    }
    $.ig.FinancialOverlay.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.PriceChannelOverlay.prototype.kl:
            this.kg(false);
            this.renderSeries(false);
            break
    }
}, es: function (e, f, g) {
    var h = $.ig.FinancialSeries.prototype.es.call(this, e, f, g);
    if (this.i2() == null || this.i3() == null) {
        h = false
    }
    return h
}, kj: function () {
    this.km.clear();
    this.kn.clear();
    var j = $.ig.MathUtil.prototype.i(this.period(), 0, this.dx().g());
    var k = Math.min(this.i2().count(), this.i3().count());
    var l = this.jw(this.i2());
    var m = this.jw(this.i3());
    for (var n = 0; n < k; n++) {
        var o = Math.min(j, n);
        var p = -Number.MAX_VALUE;
        var q = Number.MAX_VALUE;
        for (var r = 0; r < o; r++) {
            if (!isNaN(l.item(n - r))) {
                p = Math.max(p, l.item(n - r))
            }
            if (!isNaN(m.item(n - r))) {
                q = Math.min(q, m.item(n - r))
            }
        }
        if (n == 0) {
            q = m.item(0);
            p = l.item(0)
        }
        this.km.add(p);
        this.kn.add(q)
    }
    return true
}, kr: function (b) {
    return b
}, jp: function (z, A) {
    var y = this;
    var B = A.ac();
    var C = A.ab();
    var D = new $.ig.ScalerParams(B, C, this.xAxis().isInverted());
    var E = new $.ig.ScalerParams(B, C, this.yAxis().isInverted());
    var F = this.xAxis();
    var G = this.yAxis();
    z.d.clear();
    z.f.clear();
    z.g.clear();
    var H = 0;
    var I = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
    if (I != null && I.sortedIndices().count() != this.dx().g()) {
        return
    }
    var J = this.xAxis().categoryMode();
    switch (J) {
        case $.ig.CategoryMode.prototype.mode0:
            H = 0;
            break;
        case $.ig.CategoryMode.prototype.mode1:
            H = 0.5 * this.xAxis().getCategorySize(B, C);
            break;
        case $.ig.CategoryMode.prototype.mode2:
            var K = this.index();
            H = this.xAxis().getGroupCenter(this.index(), B, C);
            break
    }
    if (!this.kg()) {
        this.kg(this.kj())
    }
    var L = this.kr(this.xAxis().getUnscaledValue(2, D) - this.xAxis().getUnscaledValue(1, D));
    for (var M = A.cg().f(); M <= A.cg().g(); ++M) {
        var N;
        if (I == null) {
            N = A.cg().getBucket(M)
        } else {
            var O = I.sortedIndices().__inner[M];
            var P = I.getUnscaledValueAt(O);
            var Q = this.kr(this.km.__inner[M]);
            var R = this.kr(this.kn.__inner[M]);
            var S = Q;
            var T = R;
            var U = P;
            while (M < A.cg().g()) {
                O = I.sortedIndices().__inner[M + 1];
                U = I.getUnscaledValueAt(O);
                if (U - P > L) {
                    break
                }
                M++;
                S = Math.max(Q, this.kr(this.km.__inner[M]));
                T = Math.min(R, this.kr(this.kn.__inner[M]))
            }
            if (!$.ig.Single.prototype.isInfinity(T) && !$.ig.Single.prototype.isInfinity(S)) {
                var V = NaN;
                if (!isNaN(P)) {
                    V = this.xAxis().getScaledValue(P, D)
                }
                N = (function () {
                    var a = new Array();
                    a.add(y.kr(V));
                    a.add(T);
                    a.add(S);
                    return a
                }())
            } else {
                N = (function () {
                    var a = new Array();
                    a.add(NaN);
                    a.add(NaN);
                    a.add(NaN);
                    return a
                }())
            }
        }
        var W = Math.max(1, L);
        if (!isNaN(N[0]) && M * W >= this.ignoreFirst()) {
            if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
                N[0] = (N[0] + H)
            } else {
                N[0] = (F.getScaledValue(N[0], D) + H)
            }
            N[1] = G.getScaledValue(N[1], E);
            N[2] = G.getScaledValue(N[2], E);
            z.d.add(N)
        }
    }
}, eu: function (d, e) {
    $.ig.Series.prototype.eu.call(this, d, e);
    var f = e;
    if (f != null) {
        f.ct()
    }
}, jq: function (g, i) {
    var e = this;
    var k = $.ig.util.cast($.ig.PriceChannelOverlayView.prototype.$type, i);
    if (k == null) {
        return
    }
    k.ct();
    var m = g.d.count();
    var n = function (a) {
        return g.d.__inner[a][0]
    };
    var o = function (a) {
        return g.d.__inner[m - 1 - a][0]
    };
    var p = function (a) {
        return g.d.__inner[a][1]
    };
    var q = function (a) {
        return g.d.__inner[m - 1 - a][2]
    };
    k.cu(m, n, o, p, q)
}, km: null, kn: null, ed: function () {
    return new $.ig.PriceChannelOverlayView(this)
}, ea: function (b) {
    $.ig.FinancialSeries.prototype.ea.call(this, b);
    this.kq($.ig.util.cast($.ig.PriceChannelOverlayView.prototype.$type, b))
}, _kq: null, kq: function (b) {
    if (arguments.length === 1) {
        this._kq = b;
        return b
    } else {
        return this._kq
    }
}, $type: new $.ig.Type("PriceChannelOverlay", $.ig.FinancialOverlay.prototype.$type)}, true);
$.ig.util.defType("PriceChannelBucketCalculator", "FinancialBucketCalculator", {init: function (b) {
    $.ig.FinancialBucketCalculator.prototype.init.call(this, b);
    this.s(b)
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, getBucket: function (i) {
    var h = this;
    var j = i * this.h();
    var k = Math.min(j + this.h() - 1, this.e().cf().dx().g() - 1);
    if (j <= k) {
        var l = -Number.MAX_VALUE;
        var m = Number.MAX_VALUE;
        var n = 0;
        for (var o = j; o <= k; ++o) {
            if (!isNaN(this.s().cq().km.__inner[o]) && !isNaN(this.s().cq().kn.__inner[o])) {
                l = Math.max(l, this.s().cq().km.__inner[o]);
                m = Math.min(m, this.s().cq().kn.__inner[o]);
                ++n
            }
        }
        if (n > 0 && m != Number.MAX_VALUE && l != -Number.MAX_VALUE) {
            return(function () {
                var a = new Array();
                a.add((0.5 * (j + k)));
                a.add((m));
                a.add((l));
                return a
            }())
        }
    }
    return(function () {
        var a = new Array();
        a.add(NaN);
        a.add(NaN);
        a.add(NaN);
        return a
    }())
}, $type: new $.ig.Type("PriceChannelBucketCalculator", $.ig.FinancialBucketCalculator.prototype.$type)}, true);
$.ig.util.defType("PriceVolumeTrendIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.PriceVolumeTrendIndicatorStrategy()
}, lu: function () {
    return $.ig.PriceVolumeTrendIndicator.prototype.$type
}, $type: new $.ig.Type("PriceVolumeTrendIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("PriceVolumeTrendIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.h1);
    f.add($.ig.FinancialSeries.prototype.hz);
    return f
}, a: function (i, j) {
    var k = 0;
    var l = i.indicatorColumn();
    var m = i.volumeColumn();
    var n = i.closeColumn();
    var o = i.count();
    if (o > 0) {
        l.item(0, k)
    }
    for (var p = 1; p < o; ++p) {
        k = k + j.v()(m.item(p) * (n.item(p) - n.item(p - 1)) / n.item(p - 1));
        l.item(p, k)
    }
    return true
}, $type: new $.ig.Type("PriceVolumeTrendIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("RateOfChangeAndMomentumIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.RateOfChangeAndMomentumIndicatorStrategy()
}, lu: function () {
    return $.ig.RateOfChangeAndMomentumIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RateOfChangeAndMomentumIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.RateOfChangeAndMomentumIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("RateOfChangeAndMomentumIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("RateOfChangeAndMomentumIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hz);
    return f
}, a: function (l, m) {
    var n = l.closeColumn();
    var o = l.indicatorColumn();
    var p = l.period();
    var q = 0;
    var r = new Array(p);
    for (q = 0; q < p; q++) {
        r[q] = 0
    }
    q = 0;
    var t = n.getEnumerator();
    while (t.moveNext()) {
        var s = t.current();
        var u = q % p;
        var v = m.v()(100 * (s - r[u]) / r[u]);
        o.item(q, v);
        r[u] = s;
        ++q
    }
    return true
}, $type: new $.ig.Type("RateOfChangeAndMomentumIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("RelativeStrengthIndexIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this);
    this.displayType($.ig.IndicatorDisplayType.prototype.area)
}, lt: function () {
    return new $.ig.RelativeStrengthIndexIndicatorStrategy()
}, lu: function () {
    return $.ig.RelativeStrengthIndexIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RelativeStrengthIndexIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.RelativeStrengthIndexIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("RelativeStrengthIndexIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("RelativeStrengthIndexIndicatorStrategy", "StreamingIndicatorCalculationStrategy", {init: function () {
    $.ig.StreamingIndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hz);
    return f
}, a: function (f, g) {
    var h = 0;
    var j = this.c(f, g).getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        f.indicatorColumn().item(h, i);
        h++
    }
    return true
}, c: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: 0, $d: 0, $e: 0, $f: 0, $g: null, $h: null, getEnumerator: function () {
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
                            this.$c = g.period();
                            this.$d = 2 / (this.$c + 1);
                            this.$e = 0;
                            this.$f = 0;
                            this.$g = g.indicatorColumn();
                            this.$h = g.closeColumn();
                            this.$state = 1;
                            break;
                        case 1:
                            if (this.$g.count() > 0) {
                                this.$state = 2
                            } else {
                                this.$state = 4
                            }
                            break;
                        case 2:
                            this.$current = 0;
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            this.$i = 1;
                            this.$state = 9;
                            break;
                        case 6:
                            this.$j = this.$h.item(this.$i) - this.$h.item(this.$i - 1);
                            this.$k = this.$j > 0 ? this.$j : 0;
                            this.$l = this.$j > 0 ? 0 : -this.$j;
                            this.$e += this.$k / (this.$c - 1);
                            this.$f += this.$l / (this.$c - 1);
                            this.$current = 0;
                            this.$state = 7;
                            return true;
                        case 7:
                            this.$state = 8;
                            break;
                        case 8:
                            ++this.$i;
                            this.$state = 9;
                            break;
                        case 9:
                            if (this.$i < Math.min(g.period(), this.$g.count())) {
                                this.$state = 6
                            } else {
                                this.$state = 10
                            }
                            break;
                        case 10:
                            this.$state = 11;
                            break;
                        case 11:
                            this.$m = g.period();
                            this.$state = 15;
                            break;
                        case 12:
                            this.$n = this.$h.item(this.$m) - this.$h.item(this.$m - 1);
                            this.$o = this.$n > 0 ? this.$n : 0;
                            this.$p = this.$n > 0 ? 0 : -this.$n;
                            this.$e = (this.$e * (this.$c - 1) + this.$o) / this.$c;
                            this.$f = (this.$f * (this.$c - 1) + this.$p) / this.$c;
                            this.$current = h.v()(this.$e != 0 ? 100 * this.$e / (this.$e + this.$f) : 0);
                            this.$state = 13;
                            return true;
                        case 13:
                            this.$state = 14;
                            break;
                        case 14:
                            ++this.$m;
                            this.$state = 15;
                            break;
                        case 15:
                            if (this.$m < this.$g.count()) {
                                this.$state = 12
                            } else {
                                this.$state = 16
                            }
                            break;
                        case 16:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1(Number, c)
}, $type: new $.ig.Type("RelativeStrengthIndexIndicatorStrategy", $.ig.StreamingIndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("SlowStochasticOscillatorIndicator", "StrategyBasedIndicator", {init: function () {
    var a = this;
    $.ig.StrategyBasedIndicator.prototype.init.call(this);
    this.trendLineBrush((function () {
        var b = new $.ig.Brush();
        b.__fill = "Blue";
        return b
    }()));
    this.trendLineType($.ig.TrendLineType.prototype.exponentialAverage);
    this.trendLinePeriod(3)
}, lt: function () {
    return new $.ig.SlowStochasticOscillatorIndicatorStrategy()
}, lu: function () {
    return $.ig.SlowStochasticOscillatorIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.SlowStochasticOscillatorIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.SlowStochasticOscillatorIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("SlowStochasticOscillatorIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("SlowStochasticOscillatorIndicatorStrategy", "IndicatorCalculationStrategy", {_d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this);
    this.d(new $.ig.PercentKCalculationStrategy())
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(this.d().b(d, e));
    f.w(e.l().d());
    return f
}, a: function (h, i) {
    var j = this.d().c(h, i);
    var k = i.l().c()(j, 3);
    var l = 0;
    var n = k.getEnumerator();
    while (n.moveNext()) {
        var m = n.current();
        h.indicatorColumn().item(l, m);
        l++
    }
    return true
}, $type: new $.ig.Type("SlowStochasticOscillatorIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("StandardDeviationIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.StandardDeviationIndicatorStrategy()
}, lu: function () {
    return $.ig.StandardDeviationIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.StandardDeviationIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.StandardDeviationIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("StandardDeviationIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("StandardDeviationIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(d.typicalColumn().basedOn());
    f.w(e.n().d());
    return f
}, a: function (f, g) {
    var h = g.n().c()(f.typicalColumn(), f.period()).getEnumerator();
    var i = f.indicatorColumn();
    var j = 0;
    while (h.moveNext()) {
        i.item(j, h.current());
        j++
    }
    return true
}, $type: new $.ig.Type("StandardDeviationIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("StochRSIIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.StochRSIIndicatorStrategy()
}, lu: function () {
    return $.ig.StochRSIIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.StochRSIIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.StochRSIIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("StochRSIIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("StochRSIIndicatorStrategy", "IndicatorCalculationStrategy", {_d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this);
    this.d(new $.ig.RelativeStrengthIndexIndicatorStrategy())
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(this.d().b(d, e));
    return f
}, a: function (m, n) {
    var o = this.d().c(m, n).getEnumerator();
    var p = m.period();
    var q = 0;
    var r = new Array(p);
    for (q = 0; q < p; q++) {
        r[q] = 0
    }
    q = 0;
    while (o.moveNext()) {
        var s = Math.min(p, q);
        var t = -Number.MAX_VALUE;
        var u = Number.MAX_VALUE;
        var v = q % p;
        for (var w = 0; w < s; w++) {
            if (!isNaN(r[s - w - 1])) {
                t = Math.max(t, r[s - w - 1])
            }
            if (!isNaN(r[s - w - 1])) {
                u = Math.min(u, r[s - w - 1])
            }
        }
        r[v] = o.current();
        var x = n.v()((o.current() - u) / (t - u));
        m.indicatorColumn().item(q, x);
        q++
    }
    return true
}, $type: new $.ig.Type("StochRSIIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("TRIXIndicator", "StrategyBasedIndicator", {init: function () {
    var a = this;
    $.ig.StrategyBasedIndicator.prototype.init.call(this);
    this.displayType($.ig.IndicatorDisplayType.prototype.line);
    this.trendLineBrush((function () {
        var b = new $.ig.Brush();
        b.__fill = "Blue";
        return b
    }()));
    this.trendLineType($.ig.TrendLineType.prototype.simpleAverage);
    this.trendLinePeriod(9)
}, lt: function () {
    return new $.ig.TRIXIndicatorStrategy()
}, lu: function () {
    return $.ig.TRIXIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.TRIXIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.TRIXIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("TRIXIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("TRIXIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hz);
    f.w(e.l().d());
    return f
}, a: function (i, j) {
    var k = j.l().c()(i.closeColumn(), i.period());
    var l = j.l().c()(k, i.period());
    var m = j.l().c()(l, i.period()).getEnumerator();
    var n = i.indicatorColumn();
    if (n.count() > 0) {
        n.item(0, 0)
    }
    var o = 1;
    m.moveNext();
    var p = m.current();
    while (m.moveNext()) {
        n.item(o, j.v()((m.current() - p) / p));
        p = m.current();
        o++
    }
    return true
}, $type: new $.ig.Type("TRIXIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("TypicalPriceIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.TypicalPriceIndicatorStrategy()
}, lu: function () {
    return $.ig.TypicalPriceIndicator.prototype.$type
}, $type: new $.ig.Type("TypicalPriceIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("TypicalPriceIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(d.typicalColumn().basedOn());
    return f
}, a: function (f, g) {
    var h = 0;
    var j = f.typicalColumn().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        f.indicatorColumn().item(h, i);
        h++
    }
    return true
}, $type: new $.ig.Type("TypicalPriceIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("UltimateOscillatorIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.UltimateOscillatorIndicatorCalculationStrategy()
}, lu: function () {
    return $.ig.UltimateOscillatorIndicator.prototype.$type
}, $type: new $.ig.Type("UltimateOscillatorIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("UltimateOscillatorIndicatorCalculationStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.w(d.trueLow().basedOn());
    f.add($.ig.FinancialSeries.prototype.hz);
    f.w(d.trueRange().basedOn());
    f.w(e.o().d());
    return f
}, c: function (d) {
    var c = this;
    var b = function () {
        return function (e) {
            return{$state: 0, $this: c, $current: null, $b: 0, $c: null, getEnumerator: function () {
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
                            this.$b = 0;
                            this.$c = e.trueLow().getEnumerator();
                            this.$state = 1;
                            break;
                        case 1:
                            this.$state = 4;
                            break;
                        case 2:
                            this.$current = e.closeColumn().item(this.$b) - this.$c.current();
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$b++;
                            this.$state = 4;
                            break;
                        case 4:
                            if (this.$c.moveNext()) {
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
        }(d)
    };
    return new $.ig.GenericEnumerable$1(Number, b)
}, a: function (n, o) {
    var p = this.c(n);
    var q = n.trueRange();
    var r = o.o().c()(p, 7).getEnumerator();
    var s = o.o().c()(q, 7).getEnumerator();
    var t = o.o().c()(p, 14).getEnumerator();
    var u = o.o().c()(q, 14).getEnumerator();
    var v = o.o().c()(p, 28).getEnumerator();
    var w = o.o().c()(q, 28).getEnumerator();
    var x = 0;
    while (r.moveNext() && s.moveNext() && t.moveNext() && u.moveNext() && v.moveNext() && w.moveNext()) {
        var y = o.v()(4 * (r.current() / s.current()) + 2 * (t.current() / u.current()) + (v.current() / w.current()));
        var z = (y / (4 + 2 + 1)) * 100;
        n.indicatorColumn().item(x, z);
        x++
    }
    return true
}, $type: new $.ig.Type("UltimateOscillatorIndicatorCalculationStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("WeightedCloseIndicator", "ItemwiseStrategyBasedIndicator", {init: function () {
    $.ig.ItemwiseStrategyBasedIndicator.prototype.init.call(this)
}, me: function () {
    return new $.ig.WeightedCloseIndicatorStrategy()
}, lu: function () {
    return $.ig.WeightedCloseIndicator.prototype.$type
}, $type: new $.ig.Type("WeightedCloseIndicator", $.ig.ItemwiseStrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("WeightedCloseIndicatorStrategy", "ItemwiseIndicatorCalculationStrategy", {init: function () {
    $.ig.ItemwiseIndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.add($.ig.FinancialSeries.prototype.hx);
    f.add($.ig.FinancialSeries.prototype.hz);
    return f
}, a: function (d, e, f) {
    d.indicatorColumn().item(f, (d.highColumn().item(f) + d.lowColumn().item(f) + (d.closeColumn().item(f) * 2)) / 4);
    return true
}, $type: new $.ig.Type("WeightedCloseIndicatorStrategy", $.ig.ItemwiseIndicatorCalculationStrategy.prototype.$type)}, true);
$.ig.util.defType("WilliamsPercentRIndicator", "StrategyBasedIndicator", {init: function () {
    $.ig.StrategyBasedIndicator.prototype.init.call(this)
}, lt: function () {
    return new $.ig.WilliamsPercentRIndicatorStrategy()
}, lu: function () {
    return $.ig.WilliamsPercentRIndicator.prototype.$type
}, period: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.WilliamsPercentRIndicator.prototype.periodProperty, b);
        return b
    } else {
        return this.b($.ig.WilliamsPercentRIndicator.prototype.periodProperty)
    }
}, lz: function () {
    return this.period()
}, $type: new $.ig.Type("WilliamsPercentRIndicator", $.ig.StrategyBasedIndicator.prototype.$type)}, true);
$.ig.util.defType("WilliamsPercentRIndicatorStrategy", "IndicatorCalculationStrategy", {init: function () {
    $.ig.IndicatorCalculationStrategy.prototype.init.call(this)
}, b: function (d, e) {
    var f = new $.ig.List$1(String, 0);
    f.add($.ig.FinancialSeries.prototype.hv);
    f.add($.ig.FinancialSeries.prototype.hx);
    f.add($.ig.FinancialSeries.prototype.hz);
    return f
}, a: function (k, l) {
    var m = k.period();
    var n = k.highColumn();
    var o = k.lowColumn();
    for (var p = 0; p < k.count(); p++) {
        var q = Math.min(m, p);
        var r = -Number.MAX_VALUE;
        var s = Number.MAX_VALUE;
        for (var t = 0; t < q; t++) {
            if (!isNaN(n.item(p - t))) {
                r = Math.max(r, n.item(p - t))
            }
            if (!isNaN(o.item(p - t))) {
                s = Math.min(s, o.item(p - t))
            }
        }
        k.indicatorColumn().item(p, l.v()((k.closeColumn().item(p) - r) / (r - s) * 100))
    }
    return true
}, $type: new $.ig.Type("WilliamsPercentRIndicatorStrategy", $.ig.IndicatorCalculationStrategy.prototype.$type)}, true);
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
$.ig.util.defType("SortingTrendLineManager", "CategoryTrendLineManagerBase", {init: function (c, d) {
    $.ig.CategoryTrendLineManagerBase.prototype.init.call(this);
    this.aj(c);
    this.ak(d)
}, _aj: null, aj: function (b) {
    if (arguments.length === 1) {
        this._aj = b;
        return b
    } else {
        return this._aj
    }
}, _ak: null, ak: function (b) {
    if (arguments.length === 1) {
        this._ak = b;
        return b
    } else {
        return this._ak
    }
}, prepareLine: function (l, m, n, o, p, q, w) {
    var k = this;
    var x = w.h() * w.j();
    var y = w.i() * w.j();
    var z = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    if (m == $.ig.TrendLineType.prototype.none) {
        this.m(null);
        this.l().clear();
        return
    }
    if (this.u(m)) {
        this.l().clear();
        this.m($.ig.TrendFitCalculator.prototype.a(z, m, w, this.m(), n.count(), function (a) {
            return a + 1
        }, function (a) {
            return n.item(a)
        }, function (a) {
            var b = Math.floor(a);
            var c = Math.ceil(a);
            var d = a - b;
            var e;
            if (c <= y) {
                e = k.aj()(b) + d * (k.aj()(c) - k.aj()(b))
            } else {
                e = k.aj()(b) + d * (k.aj()(y) - k.aj()(b))
            }
            return p(e)
        }, q, x, y))
    }
    if (this.v(m)) {
        this.m(null);
        $.ig.TrendAverageCalculator.prototype.b(m, this.l(), n, o);
        for (var A = w.h(); A <= w.i(); A += 1) {
            var B = A * w.j();
            var C = this.aj()(B);
            if (B >= 0 && B < this.l().count()) {
                var D = p(C);
                var E = q(this.l().__inner[B]);
                z.add({__x: D + w.n(), __y: E, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
            }
        }
    }
    this.x(z, w, l)
}, $type: new $.ig.Type("SortingTrendLineManager", $.ig.CategoryTrendLineManagerBase.prototype.$type)}, true);
$.ig.util.defType("FinancialEventArgs", "EventArgs", {init: function (e, f, g, h) {
    $.ig.EventArgs.prototype.init.call(this);
    this.position(e);
    this.count(f);
    this.dataSource(g);
    this.supportingCalculations(h)
}, _position: null, position: function (b) {
    if (arguments.length === 1) {
        this._position = b;
        return b
    } else {
        return this._position
    }
}, _count: null, count: function (b) {
    if (arguments.length === 1) {
        this._count = b;
        return b
    } else {
        return this._count
    }
}, _dataSource: null, dataSource: function (b) {
    if (arguments.length === 1) {
        this._dataSource = b;
        return b
    } else {
        return this._dataSource
    }
}, _supportingCalculations: null, supportingCalculations: function (b) {
    if (arguments.length === 1) {
        this._supportingCalculations = b;
        return b
    } else {
        return this._supportingCalculations
    }
}, _basedOn: null, basedOn: function (b) {
    if (arguments.length === 1) {
        this._basedOn = b;
        return b
    } else {
        return this._basedOn
    }
}, $type: new $.ig.Type("FinancialEventArgs", $.ig.EventArgs.prototype.$type)}, true);
$.ig.util.defType("FinancialPriceSeries", "FinancialSeries", {ed: function () {
    return new $.ig.FinancialPriceSeriesView(this)
}, ea: function (b) {
    $.ig.FinancialSeries.prototype.ea.call(this, b);
    this.kp(b)
}, _kp: null, kp: function (b) {
    if (arguments.length === 1) {
        this._kp = b;
        return b
    } else {
        return this._kp
    }
}, init: function () {
    $.ig.FinancialSeries.prototype.init.call(this);
    this.a3($.ig.FinancialPriceSeries.prototype.$type);
    this.ia = new $.ig.CategoryFrame(5);
    this.ib = new $.ig.CategoryFrame(5);
    this.ic = new $.ig.CategoryFrame(5)
}, trendLineType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialPriceSeries.prototype.trendLineTypeProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialPriceSeries.prototype.trendLineTypeProperty)
    }
}, trendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialPriceSeries.prototype.trendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialPriceSeries.prototype.trendLineBrushProperty)
    }
}, actualTrendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialPriceSeries.prototype.actualTrendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialPriceSeries.prototype.actualTrendLineBrushProperty)
    }
}, trendLineThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialPriceSeries.prototype.trendLineThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialPriceSeries.prototype.trendLineThicknessProperty)
    }
}, trendLineDashCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialPriceSeries.prototype.trendLineDashCapProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialPriceSeries.prototype.trendLineDashCapProperty)
    }
}, trendLineDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialPriceSeries.prototype.trendLineDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialPriceSeries.prototype.trendLineDashArrayProperty)
    }
}, trendLinePeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialPriceSeries.prototype.trendLinePeriodProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialPriceSeries.prototype.trendLinePeriodProperty)
    }
}, trendLineZIndex: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialPriceSeries.prototype.trendLineZIndexProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialPriceSeries.prototype.trendLineZIndexProperty)
    }
}, fc: function (e, f, g, h) {
    if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
        ($.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis())).notifyDataChanged()
    }
    this.kp().cg().q(this.resolution());
    this.kp().cr().ad(e, f, g, h);
    if (this.yAxis() != null) {
        this.yAxis().updateRange()
    }
    this.renderSeries(true)
}, displayType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.FinancialPriceSeries.prototype.displayTypeProperty, b);
        return b
    } else {
        return this.b($.ig.FinancialPriceSeries.prototype.displayTypeProperty)
    }
}, e6: function (e, f, g, h) {
    switch (f) {
        case $.ig.FinancialPriceSeries.prototype.hq:
            this.kp().cr($.ig.CategoryTrendLineManagerBase.prototype.af(this.kp().cr(), this.xAxis(), this.rootCanvas(), this));
            break
    }
    $.ig.FinancialSeries.prototype.e6.call(this, e, f, g, h);
    if (this.kp().cr() != null && this.kp().cr().ae(e, f, g, h, this.trendLineDashArray())) {
        this.renderSeries(false);
        this.e5()
    }
    switch (f) {
        case $.ig.FinancialPriceSeries.prototype.kd:
            if (this.rootCanvas() != null) {
                this.kt();
                this.jq(this.ic, this.kp())
            }
            this.e5();
            break;
        case $.ig.FinancialPriceSeries.prototype.b6:
            this.fj();
            break;
        case $.ig.FinancialPriceSeries.prototype.b4:
            this.e5();
            break
    }
}, kt: function () {
    this.kp().cw();
    if (this.dt() != null) {
        (this.dt()).cw()
    }
}, em: function (b) {
    if (b != null && b == this.yAxis() && this.i3() != null && !isNaN(this.i3().minimum()) && this.i2() != null && !isNaN(this.i2().maximum())) {
        return new $.ig.AxisRange(this.i3().minimum(), this.i2().maximum())
    }
    return null
}, scrollIntoView: function (l) {
    var m = this.dx() != null ? this.dx().item1(l) : -1;
    var n = this.view().ac();
    var o = this.view().ab();
    var p = new $.ig.Rect(0, 0, 0, 1, 1);
    var q = new $.ig.ScalerParams(p, p, this.yAxis().isInverted());
    if (m >= 0 && n != null && o != null) {
        if (this.xAxis() != null) {
            var r = new $.ig.ScalerParams(n, o, this.xAxis().isInverted());
            var s = this.xAxis().getScaledValue(m, r);
            if (s < n.left() + 0.1 * n.width()) {
                s = s + 0.4 * n.width()
            }
            if (s > n.right() - 0.1 * n.width()) {
                s = s - 0.4 * n.width()
            }
            n.x(s - 0.5 * n.width())
        }
        if (this.yAxis() != null && this.i3() != null && this.i2() != null && m < this.i3().count() && m < this.i2().count()) {
            var t = this.yAxis().getScaledValue(this.i3().item(m), q);
            var u = this.yAxis().getScaledValue(this.i2().item(m), q);
            if (!isNaN(t) && !isNaN(u)) {
                var v = Math.abs(t - u);
                if (n.height() < v) {
                    n.height(v);
                    n.y(Math.min(t, u))
                } else {
                    if (t < n.top() + 0.1 * n.height()) {
                        t = t + 0.4 * n.height()
                    }
                    if (t > n.bottom() - 0.1 * n.height()) {
                        t = t - 0.4 * n.height()
                    }
                    n.y(t - 0.5 * n.height())
                }
            }
        }
        this.syncLink().bp(this.seriesViewer(), n)
    }
    return m >= 0
}, es: function (e, f, g) {
    var h = $.ig.FinancialSeries.prototype.es.call(this, e, f, g);
    if (this.i1() == null || this.i4() == null || this.i2() == null || this.i3() == null) {
        h = false
    }
    return h
}, ku: function (b) {
    return b
}, jp: function (r, H) {
    var q = this;
    var I = H.ac();
    var J = H.ab();
    var K = this.xAxis();
    var L = this.yAxis();
    var M = new $.ig.ScalerParams(I, J, K.isInverted());
    var N = new $.ig.ScalerParams(I, J, L.isInverted());
    r.d.clear();
    r.f.clear();
    r.g.clear();
    var O = 0;
    var P = $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis());
    if (P != null && P.sortedIndices().count() != this.dx().g()) {
        return
    }
    var Q = this.xAxis().categoryMode();
    switch (Q) {
        case $.ig.CategoryMode.prototype.mode0:
            O = 0;
            break;
        case $.ig.CategoryMode.prototype.mode1:
            O = 0.5 * this.xAxis().getCategorySize(I, J);
            break;
        case $.ig.CategoryMode.prototype.mode2:
            O = this.xAxis().getGroupCenter(this.index(), I, J);
            break
    }
    var R = $.ig.util.cast($.ig.FinancialPriceSeriesView.prototype.$type, H);
    if (this.trendLineType() != $.ig.TrendLineType.prototype.none) {
        var S = new Array(this.dx().g());
        var T = 0;
        var V = this.i7().getEnumerator();
        while (V.moveNext()) {
            var U = V.current();
            S[T] = U;
            T++
        }
        R.cr().prepareLine(r.g, this.trendLineType(), S, this.trendLinePeriod(), function (a) {
            return q.xAxis().getScaledValue(a, M)
        }, function (a) {
            return q.yAxis().getScaledValue(a, N)
        }, (function () {
            var a = new $.ig.TrendResolutionParams();
            a.j(H.cg().h());
            a.h(H.cg().f());
            a.i(H.cg().g());
            a.n(O);
            a.m(q.resolution());
            a.k(J);
            return a
        }()))
    }
    var W = this.ku(this.xAxis().getUnscaledValue(2, M) - this.xAxis().getUnscaledValue(1, M));
    for (var X = H.cg().f(); X <= H.cg().g(); ++X) {
        var Y;
        if (P == null) {
            Y = H.cg().getBucket(X)
        } else {
            var Z = P.sortedIndices().__inner[X];
            var aa = P.getUnscaledValueAt(Z);
            var ab = this.ku(this.i1().item(Z));
            var ac = this.ku(this.i2().item(Z));
            var ad = this.ku(this.i3().item(Z));
            var A = this.ku(this.i4().item(Z));
            var B = ab;
            var C = ac;
            var D = ad;
            var E = A;
            var F = aa;
            while (X < H.cg().g()) {
                Z = P.sortedIndices().__inner[X + 1];
                F = P.getUnscaledValueAt(Z);
                if (F - aa > W) {
                    break
                }
                X++;
                C = Math.max(ac, this.ku(this.i2().item(Z)));
                D = Math.min(ad, this.ku(this.i3().item(Z)));
                E = this.ku(this.i4().item(Z))
            }
            var G = NaN;
            if (!isNaN(aa)) {
                G = this.xAxis().getScaledValue(aa, M)
            }
            Y = (function () {
                var a = new Array();
                a.add(q.ku(G));
                a.add(B);
                a.add(C);
                a.add(D);
                a.add(E);
                return a
            }())
        }
        if (!isNaN(Y[0])) {
            if (this.xAxis() != null && $.ig.util.cast($.ig.ISortingAxis.prototype.$type, this.xAxis()) !== null) {
                Y[0] = (Y[0] + O)
            } else {
                Y[0] = (K.getScaledValue(Y[0], M) + O)
            }
            Y[1] = L.getScaledValue(Y[1], N);
            Y[2] = L.getScaledValue(Y[2], N);
            Y[3] = L.getScaledValue(Y[3], N);
            Y[4] = L.getScaledValue(Y[4], N);
            r.d.add(Y)
        }
    }
    return
}, eu: function (d, e) {
    $.ig.Series.prototype.eu.call(this, d, e);
    var f = $.ig.util.cast($.ig.FinancialPriceSeriesView.prototype.$type, e);
    f.cx();
    if (f.cr() != null) {
        f.cr().ab()
    }
}, jq: function (v, w) {
    var u = this;
    if (this.xAxis() == null || this.yAxis() == null) {
        return
    }
    var x = $.ig.util.cast($.ig.FinancialPriceSeriesView.prototype.$type, w);
    x.cx();
    if (x.cr() != null) {
        x.cr().ab()
    }
    var y = this.displayType();
    var z = this.xAxis().gz(w.ac(), w.ab()) / 2;
    z = Math.max(z, $.ig.FinancialPriceSeries.prototype.ke);
    var A = $.ig.util.cast($.ig.FinancialPriceSeriesView.prototype.$type, w);
    var B = A.cy();
    var C = A.cz();
    if (this.trendLineType() != $.ig.TrendLineType.prototype.none) {
        x.cr().t(v.g)
    }
    var D = v.d;
    for (var E = 0; E < D.count(); ++E) {
        var F = D.__inner[E][0] - z;
        var G = D.__inner[E][0];
        var H = D.__inner[E][0] + z;
        var I = D.__inner[E][1];
        var J = D.__inner[E][2];
        var K = D.__inner[E][3];
        var L = D.__inner[E][4];
        if (isNaN(I) || isNaN(J) || isNaN(K) || isNaN(L)) {
            continue
        }
        var M = I < L;
        var N = M ? C : B;
        switch (y) {
            case $.ig.PriceDisplayType.prototype.candlestick:
                if (M) {
                    var O = I;
                    I = L;
                    L = O
                }
                N.d().add((function () {
                    var a = new $.ig.LineGeometry();
                    a.e({__x: G, __y: K, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    a.f({__x: G, __y: I, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    return a
                }()));
                N.d().add((function () {
                    var a = new $.ig.RectangleGeometry();
                    a.f(new $.ig.Rect(0, F, L, H - F, I - L));
                    return a
                }()));
                N.d().add((function () {
                    var a = new $.ig.LineGeometry();
                    a.e({__x: G, __y: L, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    a.f({__x: G, __y: J, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    return a
                }()));
                break;
            case $.ig.PriceDisplayType.prototype.oHLC:
                N.d().add((function () {
                    var a = new $.ig.LineGeometry();
                    a.e({__x: F, __y: I, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    a.f({__x: G, __y: I, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    return a
                }()));
                N.d().add((function () {
                    var a = new $.ig.LineGeometry();
                    a.e({__x: G, __y: K, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    a.f({__x: G, __y: J, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    return a
                }()));
                N.d().add((function () {
                    var a = new $.ig.LineGeometry();
                    a.e({__x: G, __y: L, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    a.f({__x: H, __y: L, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    return a
                }()));
                break
        }
    }
}, el: function (c, d) {
    if (c == this.kp().cr().n()) {
        return null
    }
    return $.ig.Series.prototype.el.call(this, c, d)
}, fj: function () {
    $.ig.Series.prototype.fj.call(this);
    if (this.index() < 0) {
        return
    }
    this.kp().c0()
}, gw: function (c) {
    $.ig.Series.prototype.gw.call(this, c);
    var d = new $.ig.PolyLineVisualData(1, "trendLine", this.kp().cr().n());
    d.tags().add("Trend");
    c.shapes().add(d)
}, $type: new $.ig.Type("FinancialPriceSeries", $.ig.FinancialSeries.prototype.$type)}, true);
$.ig.util.defType("FinancialPriceBucketCalculator", "FinancialBucketCalculator", {init: function (b) {
    $.ig.FinancialBucketCalculator.prototype.init.call(this, b)
}, getBucket: function (j) {
    var i = this;
    var k = j * this.h();
    var l = Math.min(k + this.h() - 1, this.e().cf().dx().g() - 1);
    if (k <= l && k >= 0 && l >= 0) {
        var m = this.e().cf().i1().item(k);
        var n = Number.NEGATIVE_INFINITY;
        var o = Number.POSITIVE_INFINITY;
        var p = this.e().cf().i4().item(l);
        for (var q = k; q <= l; ++q) {
            n = Math.max(n, this.e().cf().i2().item(q));
            o = Math.min(o, this.e().cf().i3().item(q))
        }
        o = Math.min(m, o);
        n = Math.max(p, n);
        return(function () {
            var a = new Array();
            a.add((0.5 * (k + l)));
            a.add(m);
            a.add(n);
            a.add(o);
            a.add(p);
            return a
        }())
    }
    return(function () {
        var a = new Array();
        a.add(NaN);
        a.add(NaN);
        a.add(NaN);
        a.add(NaN);
        a.add(NaN);
        return a
    }())
}, $type: new $.ig.Type("FinancialPriceBucketCalculator", $.ig.FinancialBucketCalculator.prototype.$type)}, true);
$.ig.util.defType("FinancialPriceSeriesView", "FinancialSeriesView", {_cq: null, cq: function (b) {
    if (arguments.length === 1) {
        this._cq = b;
        return b
    } else {
        return this._cq
    }
}, init: function (b) {
    this.cm = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.GeometryGroup());
        return a
    }());
    this.cn = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.GeometryGroup());
        return a
    }());
    $.ig.FinancialSeriesView.prototype.init.call(this, b);
    this.cq(b);
    this.cr(new $.ig.CategoryTrendLineManager())
}, cl: function () {
    return new $.ig.FinancialPriceBucketCalculator(this)
}, ag: function () {
    var a = this;
    $.ig.FinancialSeriesView.prototype.ag.call(this);
    if (!this.ad()) {
        this.cf().negativeBrush((function () {
            var b = new $.ig.Brush();
            b.__fill = "#415460";
            return b
        }()));
        this.cf().resolution(2);
        this.cf().thickness(1);
        this.cf().outline((function () {
            var b = new $.ig.Brush();
            b.__fill = "#222222";
            return b
        }()))
    }
}, cm: null, cn: null, _cr: null, cr: function (b) {
    if (arguments.length === 1) {
        this._cr = b;
        return b
    } else {
        return this._cr
    }
}, cw: function () {
    if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
        this.cm.__stroke = this.u().actualBrush()
    } else {
        this.cm.__stroke = this.u().actualOutline()
    }
    if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
        this.cn.__stroke = this.cf().negativeBrush()
    } else {
        this.cn.__stroke = this.u().actualOutline()
    }
}, cx: function () {
    var c = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cm.bp());
    var d = $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cn.bp());
    c.reset1();
    d.reset1();
    this.an()
}, cy: function () {
    this.an();
    return $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cm.bp())
}, cz: function () {
    this.an();
    return $.ig.util.cast($.ig.GeometryGroup.prototype.$type, this.cn.bp())
}, c0: function () {
    this.cq().actualTrendLineBrush(null);
    if (this.cq().trendLineBrush() != null) {
        this.cq().actualTrendLineBrush(this.cq().trendLineBrush())
    } else {
        this.cq().actualTrendLineBrush(this.cq().actualBrush())
    }
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.cm.a7(this.u().thickness());
    this.cm.a8(this.u().dashArray());
    this.cm.a9(this.u().dashCap());
    if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
        this.cm.__stroke = this.u().actualBrush()
    } else {
        this.cm.__stroke = this.u().actualOutline();
        this.cm.__fill = this.u().actualBrush()
    }
    this.cn.a7(this.u().thickness());
    this.cn.a8(this.u().dashArray());
    this.cn.a9(this.u().dashCap());
    if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
        this.cn.__stroke = this.cf().negativeBrush()
    } else {
        this.cn.__stroke = this.u().actualOutline();
        this.cn.__fill = this.cf().negativeBrush()
    }
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.cm.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
        this.cm.__stroke = b
    } else {
        this.cm.__stroke = b;
        this.cm.__fill = b
    }
    this.cn.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    if (this.cq().displayType() == $.ig.PriceDisplayType.prototype.oHLC) {
        this.cn.__stroke = b
    } else {
        this.cn.__stroke = b;
        this.cn.__fill = b
    }
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.b8(this.cq().yAxis());
            d.e($.ig.GradientDirection.prototype.bottomTop, f)
        }
        d.g(this.cm);
        d.g(this.cn)
    }
}, a1: function (d, e) {
    if (d.b()) {
        if (this.cq().trendLineType() != $.ig.TrendLineType.prototype.none && !e) {
            var f = this.cr().n();
            f.a7(this.cq().trendLineThickness());
            f.__stroke = this.cq().actualTrendLineBrush();
            f.a8(this.cq().trendLineDashArray());
            f.a9(this.cq().trendLineDashCap());
            if (this.k && !e) {
                d.e($.ig.GradientDirection.prototype.bottomTop, null)
            }
            d.k(f)
        }
    }
    $.ig.SeriesView.prototype.a1.call(this, d, e)
}, b5: function (d) {
    $.ig.SeriesView.prototype.b5.call(this, d);
    var e = new $.ig.PathVisualData(1, "positivePathShape", this.cm);
    e.tags().add("Positive");
    e.tags().add("Main");
    var f = new $.ig.PathVisualData(1, "negativePathShape", this.cn);
    f.tags().add("Negative");
    d.shapes().add(e);
    d.shapes().add(f)
}, $type: new $.ig.Type("FinancialPriceSeriesView", $.ig.FinancialSeriesView.prototype.$type)}, true);
$.ig.util.defType("FinancialCalculationDataSource", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, _openColumn: null, openColumn: function (b) {
    if (arguments.length === 1) {
        this._openColumn = b;
        return b
    } else {
        return this._openColumn
    }
}, _closeColumn: null, closeColumn: function (b) {
    if (arguments.length === 1) {
        this._closeColumn = b;
        return b
    } else {
        return this._closeColumn
    }
}, _highColumn: null, highColumn: function (b) {
    if (arguments.length === 1) {
        this._highColumn = b;
        return b
    } else {
        return this._highColumn
    }
}, _lowColumn: null, lowColumn: function (b) {
    if (arguments.length === 1) {
        this._lowColumn = b;
        return b
    } else {
        return this._lowColumn
    }
}, _volumeColumn: null, volumeColumn: function (b) {
    if (arguments.length === 1) {
        this._volumeColumn = b;
        return b
    } else {
        return this._volumeColumn
    }
}, _indicatorColumn: null, indicatorColumn: function (b) {
    if (arguments.length === 1) {
        this._indicatorColumn = b;
        return b
    } else {
        return this._indicatorColumn
    }
}, _typicalColumn: null, typicalColumn: function (b) {
    if (arguments.length === 1) {
        this._typicalColumn = b;
        return b
    } else {
        return this._typicalColumn
    }
}, _trueRange: null, trueRange: function (b) {
    if (arguments.length === 1) {
        this._trueRange = b;
        return b
    } else {
        return this._trueRange
    }
}, _trueLow: null, trueLow: function (b) {
    if (arguments.length === 1) {
        this._trueLow = b;
        return b
    } else {
        return this._trueLow
    }
}, _period: null, period: function (b) {
    if (arguments.length === 1) {
        this._period = b;
        return b
    } else {
        return this._period
    }
}, _shortPeriod: null, shortPeriod: function (b) {
    if (arguments.length === 1) {
        this._shortPeriod = b;
        return b
    } else {
        return this._shortPeriod
    }
}, _longPeriod: null, longPeriod: function (b) {
    if (arguments.length === 1) {
        this._longPeriod = b;
        return b
    } else {
        return this._longPeriod
    }
}, _count: null, count: function (b) {
    if (arguments.length === 1) {
        this._count = b;
        return b
    } else {
        return this._count
    }
}, _calculateFrom: null, calculateFrom: function (b) {
    if (arguments.length === 1) {
        this._calculateFrom = b;
        return b
    } else {
        return this._calculateFrom
    }
}, _calculateCount: null, calculateCount: function (b) {
    if (arguments.length === 1) {
        this._calculateCount = b;
        return b
    } else {
        return this._calculateCount
    }
}, _multiplier: null, multiplier: function (b) {
    if (arguments.length === 1) {
        this._multiplier = b;
        return b
    } else {
        return this._multiplier
    }
}, _minimumValue: null, minimumValue: function (b) {
    if (arguments.length === 1) {
        this._minimumValue = b;
        return b
    } else {
        return this._minimumValue
    }
}, _maximumValue: null, maximumValue: function (b) {
    if (arguments.length === 1) {
        this._maximumValue = b;
        return b
    } else {
        return this._maximumValue
    }
}, _specifiesRange: null, specifiesRange: function (b) {
    if (arguments.length === 1) {
        this._specifiesRange = b;
        return b
    } else {
        return this._specifiesRange
    }
}, $type: new $.ig.Type("FinancialCalculationDataSource", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("FinancialCalculationSupportingCalculations", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
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
}, _s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
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
}, $type: new $.ig.Type("FinancialCalculationSupportingCalculations", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SupportingCalculation$1", "Object", {$tCalculationStrategy: null, init: function (b, d, c) {
    if (d > 0) {
        switch (d) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    this.$tCalculationStrategy = b;
    this.$type = this.$type.specialize(this.$tCalculationStrategy);
    $.ig.Object.prototype.init.call(this);
    this.a = c;
    this.b = new $.ig.List$1(String, 0)
}, init1: function (c, f, d, e) {
    this.$tCalculationStrategy = c;
    this.$type = this.$type.specialize(this.$tCalculationStrategy);
    $.ig.Object.prototype.init.call(this);
    this.a = d;
    this.b = new $.ig.List$1(String, 1, e)
}, a: null, b: null, c: function () {
    return this.a
}, d: function () {
    return this.b
}, $type: new $.ig.Type("SupportingCalculation$1", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("ColumnSupportingCalculation", "SupportingCalculation$1", {init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.SupportingCalculation$1.prototype.init.call(this, $.ig.SupportingCalculationStrategy.prototype.$type, b)
}, init1: function (e, c, d) {
    $.ig.SupportingCalculation$1.prototype.init1.call(this, $.ig.SupportingCalculationStrategy.prototype.$type, 1, c, d)
}, $type: new $.ig.Type("ColumnSupportingCalculation", $.ig.SupportingCalculation$1.prototype.$type.specialize($.ig.SupportingCalculationStrategy.prototype.$type))}, true);
$.ig.util.defType("DataSourceSupportingCalculation", "SupportingCalculation$1", {init: function (c, b) {
    if (c > 0) {
        switch (c) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.SupportingCalculation$1.prototype.init.call(this, $.ig.ProvideColumnValuesStrategy.prototype.$type, b)
}, init1: function (e, c, d) {
    $.ig.SupportingCalculation$1.prototype.init1.call(this, $.ig.ProvideColumnValuesStrategy.prototype.$type, 1, c, d)
}, $type: new $.ig.Type("DataSourceSupportingCalculation", $.ig.SupportingCalculation$1.prototype.$type.specialize($.ig.ProvideColumnValuesStrategy.prototype.$type))}, true);
$.ig.util.defType("CalculatedColumn", "Object", {init: function (e, c, d) {
    if (e > 0) {
        switch (e) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.Object.prototype.init.call(this);
    this.__valuesProvider = c;
    this.a = new $.ig.List$1(String, 1, d)
}, init1: function (e, c, d) {
    $.ig.Object.prototype.init.call(this);
    this.__valuesProvider = c;
    this.a = new $.ig.List$1(String, 1, d)
}, __valuesProvider: null, a: null, basedOn: function () {
    return this.a
}, getEnumerator: function () {
    return this.__valuesProvider.getEnumerator()
}, $type: new $.ig.Type("CalculatedColumn", $.ig.Object.prototype.$type, [$.ig.IEnumerable$1.prototype.$type.specialize(Number)])}, true);
$.ig.util.defType("Legend", "LegendBase", {bu: function () {
    return new $.ig.LegendView(this)
}, bv: function (b) {
    $.ig.LegendBase.prototype.bv.call(this, b);
    this.ce(b)
}, _ce: null, ce: function (b) {
    if (arguments.length === 1) {
        this._ce = b;
        return b
    } else {
        return this._ce
    }
}, init: function () {
    var a = this;
    $.ig.LegendBase.prototype.init.call(this);
    this.a3($.ig.Legend.prototype.$type);
    this.children().collectionChanged = $.ig.Delegate.prototype.combine(this.children().collectionChanged, function (g, h) {
        if (h.oldItems() != null) {
            var j = h.oldItems().getEnumerator();
            while (j.moveNext()) {
                var i = j.current();
                a.ce().aa(i)
            }
        }
        if (h.newItems() != null) {
            var l = h.newItems().getEnumerator();
            while (l.moveNext()) {
                var k = l.current();
                a.ce().ab(k)
            }
        }
    })
}, by: function (l, m) {
    var k = this;
    var n = 0;
    var p = this.children().getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        var q;
        var r;
        var s;
        (function () {
            var a = k.bq().u(o, q, r, s);
            q = a.chart;
            r = a.series;
            s = a.item;
            return a.ret
        }());
        if (m.seriesViewer() != null && q != null && (this.ch(m.seriesViewer()) < this.ch(q) || (this.ch(m.seriesViewer()) == -1 && this.ch(q) == -1 && m.seriesViewer().getHashCode() < q.getHashCode()))) {
            break
        }
        if (m.seriesViewer() != null && q != null && m.seriesViewer() == q && r != null) {
            var t = m.index();
            var u = r.index();
            if (t <= u) {
                break
            }
        }
        n++
    }
    this.children().insert(n, l)
}, ch: function (b) {
    return -1
}, $type: new $.ig.Type("Legend", $.ig.LegendBase.prototype.$type)}, true);
$.ig.util.defType("LegendView", "LegendBaseView", {init: function (b) {
    $.ig.LegendBaseView.prototype.init.call(this, b);
    this.aq(b)
}, _aq: null, aq: function (b) {
    if (arguments.length === 1) {
        this._aq = b;
        return b
    } else {
        return this._aq
    }
}, r: function () {
    $.ig.LegendBaseView.prototype.r.call(this)
}, $type: new $.ig.Type("LegendView", $.ig.LegendBaseView.prototype.$type)}, true);
$.ig.util.defType("PolyLineVisualData", "PrimitiveVisualData", {type: function () {
    return"Polyline"
}, init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.PrimitiveVisualData.prototype.init.call(this, "polyLine1")
}, init1: function (e, c, d) {
    $.ig.PrimitiveVisualData.prototype.init.call(this, c);
    this.points(d.bn());
    $.ig.AppearanceHelper.prototype.getShapeAppearance(this.appearance(), d)
}, _points: null, points: function (b) {
    if (arguments.length === 1) {
        this._points = b;
        return b
    } else {
        return this._points
    }
}, scaleByViewport: function (c) {
    $.ig.PrimitiveVisualData.prototype.scaleByViewport.call(this, c);
    for (var d = 0; d < this.points().count(); d++) {
        this.points().__inner[d] = {__x: (this.points().__inner[d].__x - c.left()) / c.width(), __y: (this.points().__inner[d].__y - c.top()) / c.height(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
}, getPointsOverride: function (e, f) {
    var g = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    e.add(g);
    for (var h = 0; h < this.points().count(); h++) {
        g.add(this.points().__inner[h])
    }
}, $type: new $.ig.Type("PolyLineVisualData", $.ig.PrimitiveVisualData.prototype.$type)}, true);
$.ig.util.defType("SortedListView$1", "Object", {$t: null, a: null, b: null, init: function (c, d, e) {
    this.a = null;
    this.b = null;
    this.$t = c;
    this.$type = this.$type.specialize(this.$t);
    $.ig.Object.prototype.init.call(this);
    this.a = e;
    this.b = d
}, add: function (b) {
    throw new $.ig.NotImplementedException()
}, clear: function () {
    throw new $.ig.NotImplementedException()
}, contains: function (b) {
    return this.b.contains(b)
}, indexOf: function (b) {
    return this.a.indexOf(this.b.indexOf(b))
}, insert: function (c, d) {
    throw new $.ig.NotImplementedException()
}, c: function () {
    return true
}, isReadOnly: function () {
    return true
}, remove: function (b) {
    throw new $.ig.NotImplementedException()
}, removeAt: function (b) {
    throw new $.ig.NotImplementedException()
}, item: function (d, c) {
    if (arguments.length === 2) {
        throw new $.ig.NotImplementedException();
        return c
    } else {
        return this.b.item(this.a.item(d))
    }
}, count: function () {
    return this.b.count()
}, d: function () {
    throw new $.ig.NotImplementedException()
}, e: function () {
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
                            this.$a = 0;
                            this.$state = 5;
                            break;
                        case 2:
                            this.$current = this.$this.item(this.$a);
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            this.$a++;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$a < this.$this.count()) {
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
        }()
    };
    return new $.ig.AbstractEnumerator(a())
}, copyTo: function (c, d) {
    throw new $.ig.NotImplementedException()
}, $type: new $.ig.Type("SortedListView$1", $.ig.Object.prototype.$type, [$.ig.IList$1.prototype.$type.specialize(0)])}, true);
$.ig.PriceDisplayType.prototype.candlestick = 0;
$.ig.PriceDisplayType.prototype.oHLC = 1;
$.ig.TimeAxisDisplayType.prototype.continuous = 0;
$.ig.TimeAxisDisplayType.prototype.discrete = 1;
$.ig.IndicatorDisplayType.prototype.line = 0;
$.ig.IndicatorDisplayType.prototype.area = 1;
$.ig.IndicatorDisplayType.prototype.column = 2;
$.ig.CategoryDateTimeXAxis.prototype.hc = "DisplayType";
$.ig.CategoryDateTimeXAxis.prototype.hd = "MinimumValue";
$.ig.CategoryDateTimeXAxis.prototype.he = "MaximumValue";
$.ig.CategoryDateTimeXAxis.prototype.hf = "Interval";
$.ig.CategoryDateTimeXAxis.prototype.hg = "ActualMinimumValue";
$.ig.CategoryDateTimeXAxis.prototype.hh = "ActualMaximumValue";
$.ig.CategoryDateTimeXAxis.prototype.hi = "DateTimeMemberPath";
$.ig.CategoryDateTimeXAxis.prototype.hj = "DateTimeColumn";
$.ig.CategoryDateTimeXAxis.prototype.displayTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hc, $.ig.TimeAxisDisplayType.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TimeAxisDisplayType.prototype.continuous, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.hc, d.f(), d.e())
}));
$.ig.CategoryDateTimeXAxis.prototype.minimumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hd, $.ig.Date.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.hd, d.f(), d.e())
}));
$.ig.CategoryDateTimeXAxis.prototype.maximumValueProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.he, $.ig.Date.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.he, d.f(), d.e())
}));
$.ig.CategoryDateTimeXAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hf, $.ig.Number.prototype.$type, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.hf, d.f(), d.e())
}));
$.ig.CategoryDateTimeXAxis.prototype.dateTimeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryDateTimeXAxis.prototype.hi, String, $.ig.CategoryDateTimeXAxis.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.CategoryDateTimeXAxis.prototype.$type, c)).ez($.ig.CategoryDateTimeXAxis.prototype.hi, d.f(), d.e())
}));
$.ig.CategoryXAxis.prototype.hc = "Interval";
$.ig.CategoryXAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryXAxis.prototype.hc, Number, $.ig.CategoryXAxis.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.CategoryXAxis.prototype.$type, c)).ez($.ig.CategoryXAxis.prototype.hc, d.f(), d.e());
    ($.ig.util.cast($.ig.CategoryXAxis.prototype.$type, c)).es(false)
}));
$.ig.TrendLineManagerBase$1.prototype.a = "TrendLineDashArray";
$.ig.TrendLineManagerBase$1.prototype.b = "TrendLineType";
$.ig.TrendLineManagerBase$1.prototype.c = "TrendLinePeriod";
$.ig.TrendLineManagerBase$1.prototype.d = "TrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.e = "ActualTrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.f = "TrendLineThickness";
$.ig.TrendLineManagerBase$1.prototype.g = "TrendLineDashCap";
$.ig.TrendLineManagerBase$1.prototype.h = "TrendLineZIndex";
$.ig.FinancialSeries.prototype.hp = "NegativeBrush";
$.ig.FinancialSeries.prototype.hq = "XAxis";
$.ig.FinancialSeries.prototype.hr = "YAxis";
$.ig.FinancialSeries.prototype.hs = "OpenMemberPath";
$.ig.FinancialSeries.prototype.ht = "OpenColumn";
$.ig.FinancialSeries.prototype.hu = "HighMemberPath";
$.ig.FinancialSeries.prototype.hv = "HighColumn";
$.ig.FinancialSeries.prototype.hw = "LowMemberPath";
$.ig.FinancialSeries.prototype.hx = "LowColumn";
$.ig.FinancialSeries.prototype.hy = "CloseMemberPath";
$.ig.FinancialSeries.prototype.hz = "CloseColumn";
$.ig.FinancialSeries.prototype.h0 = "VolumeMemberPath";
$.ig.FinancialSeries.prototype.h1 = "VolumeColumn";
$.ig.FinancialSeries.prototype.negativeBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hp, $.ig.Brush.prototype.$type, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, c)).ej($.ig.FinancialSeries.prototype.hp, d.f(), d.e())
}));
$.ig.FinancialSeries.prototype.xAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hq, $.ig.CategoryAxisBase.prototype.$type, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, c)).ej($.ig.FinancialSeries.prototype.hq, d.f(), d.e())
}));
$.ig.FinancialSeries.prototype.yAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hr, $.ig.NumericYAxis.prototype.$type, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, c)).ej($.ig.FinancialSeries.prototype.hr, d.f(), d.e())
}));
$.ig.FinancialSeries.prototype.openMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hs, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, c)).ej($.ig.FinancialSeries.prototype.hs, d.f(), d.e())
}));
$.ig.FinancialSeries.prototype.highMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hu, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, c)).ej($.ig.FinancialSeries.prototype.hu, d.f(), d.e())
}));
$.ig.FinancialSeries.prototype.lowMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hw, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, c)).ej($.ig.FinancialSeries.prototype.hw, d.f(), d.e())
}));
$.ig.FinancialSeries.prototype.closeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.hy, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, c)).ej($.ig.FinancialSeries.prototype.hy, d.f(), d.e())
}));
$.ig.FinancialSeries.prototype.volumeMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialSeries.prototype.h0, String, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialSeries.prototype.$type, c)).ej($.ig.FinancialSeries.prototype.h0, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.kd = "DisplayType";
$.ig.FinancialIndicator.prototype.ke = "IgnoreFirst";
$.ig.FinancialIndicator.prototype.displayTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.kd, $.ig.IndicatorDisplayType.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.IndicatorDisplayType.prototype.line, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.kd, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.ignoreFirstProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.ke, $.ig.Number.prototype.$type, $.ig.FinancialSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.ke, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.b4, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b6, $.ig.Brush.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.b6, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b7, $.ig.Brush.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.b7, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b8, Number, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.b8, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.b9, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.b3, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.b5, $.ig.Number.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.b5, d.f(), d.e())
}));
$.ig.FinancialIndicator.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialIndicator.prototype.ca, $.ig.Number.prototype.$type, $.ig.FinancialIndicator.prototype.$type, new $.ig.PropertyMetadata(1, 1001, function (c, d) {
    ($.ig.util.cast($.ig.FinancialIndicator.prototype.$type, c)).ej($.ig.FinancialIndicator.prototype.ca, d.f(), d.e())
}));
$.ig.StrategyBasedIndicator.prototype.ll = "Period";
$.ig.StrategyBasedIndicator.prototype.lm = "LongPeriod";
$.ig.StrategyBasedIndicator.prototype.ln = "ShortPeriod";
$.ig.StrategyBasedIndicator.prototype.lo = "Multiplier";
$.ig.StrategyBasedIndicator.prototype.lp = new $.ig.List$1(String, 0);
$.ig.AbsoluteVolumeOscillatorIndicator.prototype.shortPeriodProperty = $.ig.AbsoluteVolumeOscillatorIndicator.prototype.l5(10, $.ig.AbsoluteVolumeOscillatorIndicator.prototype.$type);
$.ig.AbsoluteVolumeOscillatorIndicator.prototype.longPeriodProperty = $.ig.AbsoluteVolumeOscillatorIndicator.prototype.l4(30, $.ig.AbsoluteVolumeOscillatorIndicator.prototype.$type);
$.ig.AverageDirectionalIndexIndicator.prototype.periodProperty = $.ig.AverageDirectionalIndexIndicator.prototype.l3(14, $.ig.AverageDirectionalIndexIndicator.prototype.$type);
$.ig.AverageTrueRangeIndicator.prototype.periodProperty = $.ig.AverageTrueRangeIndicator.prototype.l3(14, $.ig.AverageTrueRangeIndicator.prototype.$type);
$.ig.FinancialOverlay.prototype.kd = "IgnoreFirst";
$.ig.FinancialOverlay.prototype.ignoreFirstProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialOverlay.prototype.kd, $.ig.Number.prototype.$type, $.ig.FinancialOverlay.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.FinancialOverlay.prototype.$type, c)).ej($.ig.FinancialOverlay.prototype.kd, d.f(), d.e())
}));
$.ig.BollingerBandsOverlay.prototype.kl = "Period";
$.ig.BollingerBandsOverlay.prototype.km = "Multiplier";
$.ig.BollingerBandsOverlay.prototype.periodProperty = $.ig.DependencyProperty.prototype.l($.ig.BollingerBandsOverlay.prototype.kl, $.ig.Number.prototype.$type, $.ig.BollingerBandsOverlay.prototype.$type, new $.ig.PropertyMetadata(1, 14, function (c, d) {
    ($.ig.util.cast($.ig.BollingerBandsOverlay.prototype.$type, c)).ej($.ig.BollingerBandsOverlay.prototype.kl, d.f(), d.e())
}));
$.ig.BollingerBandsOverlay.prototype.multiplierProperty = $.ig.DependencyProperty.prototype.l($.ig.BollingerBandsOverlay.prototype.km, Number, $.ig.BollingerBandsOverlay.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.BollingerBandsOverlay.prototype.$type, c)).ej($.ig.BollingerBandsOverlay.prototype.km, d.f(), d.e())
}));
$.ig.BollingerBandWidthIndicator.prototype.periodProperty = $.ig.BollingerBandWidthIndicator.prototype.l3(20, $.ig.BollingerBandWidthIndicator.prototype.$type);
$.ig.BollingerBandWidthIndicator.prototype.multiplierProperty = $.ig.BollingerBandWidthIndicator.prototype.ma(2, $.ig.BollingerBandWidthIndicator.prototype.$type);
$.ig.ChaikinOscillatorIndicator.prototype.shortPeriodProperty = $.ig.ChaikinOscillatorIndicator.prototype.l5(3, $.ig.ChaikinOscillatorIndicator.prototype.$type);
$.ig.ChaikinOscillatorIndicator.prototype.longPeriodProperty = $.ig.ChaikinOscillatorIndicator.prototype.l4(10, $.ig.ChaikinOscillatorIndicator.prototype.$type);
$.ig.ChaikinVolatilityIndicator.prototype.periodProperty = $.ig.ChaikinVolatilityIndicator.prototype.l3(10, $.ig.ChaikinVolatilityIndicator.prototype.$type);
$.ig.CommodityChannelIndexIndicator.prototype.periodProperty = $.ig.CommodityChannelIndexIndicator.prototype.l3(20, $.ig.CommodityChannelIndexIndicator.prototype.$type);
$.ig.DetrendedPriceOscillatorIndicator.prototype.periodProperty = $.ig.DetrendedPriceOscillatorIndicator.prototype.l3(20, $.ig.DetrendedPriceOscillatorIndicator.prototype.$type);
$.ig.FastStochasticOscillatorIndicator.prototype.periodProperty = $.ig.FastStochasticOscillatorIndicator.prototype.l3(14, $.ig.FastStochasticOscillatorIndicator.prototype.$type);
$.ig.ForceIndexIndicator.prototype.periodProperty = $.ig.ForceIndexIndicator.prototype.l3(0, $.ig.ForceIndexIndicator.prototype.$type);
$.ig.FullStochasticOscillatorIndicator.prototype.periodProperty = $.ig.FullStochasticOscillatorIndicator.prototype.l3(14, $.ig.FullStochasticOscillatorIndicator.prototype.$type);
$.ig.FullStochasticOscillatorIndicator.prototype.smoothingPeriodProperty = $.ig.FullStochasticOscillatorIndicator.prototype.l2(3, $.ig.FullStochasticOscillatorIndicator.prototype.$type, "SmoothingPeriod");
$.ig.FullStochasticOscillatorIndicator.prototype.triggerPeriodProperty = $.ig.FullStochasticOscillatorIndicator.prototype.l2(3, $.ig.FullStochasticOscillatorIndicator.prototype.$type, "TriggerPeriod");
$.ig.MoneyFlowIndexIndicator.prototype.periodProperty = $.ig.MoneyFlowIndexIndicator.prototype.l3(14, $.ig.MoneyFlowIndexIndicator.prototype.$type);
$.ig.MovingAverageConvergenceDivergenceIndicator.prototype.mc = "SignalPeriod";
$.ig.MovingAverageConvergenceDivergenceIndicator.prototype.shortPeriodProperty = $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.l5(10, $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.$type);
$.ig.MovingAverageConvergenceDivergenceIndicator.prototype.longPeriodProperty = $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.l4(30, $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.$type);
$.ig.MovingAverageConvergenceDivergenceIndicator.prototype.signalPeriodProperty = $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.l2(9, $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.$type, $.ig.MovingAverageConvergenceDivergenceIndicator.prototype.mc);
$.ig.PercentagePriceOscillatorIndicator.prototype.shortPeriodProperty = $.ig.PercentagePriceOscillatorIndicator.prototype.l5(10, $.ig.PercentagePriceOscillatorIndicator.prototype.$type);
$.ig.PercentagePriceOscillatorIndicator.prototype.longPeriodProperty = $.ig.PercentagePriceOscillatorIndicator.prototype.l4(30, $.ig.PercentagePriceOscillatorIndicator.prototype.$type);
$.ig.PercentageVolumeOscillatorIndicator.prototype.shortPeriodProperty = $.ig.PercentageVolumeOscillatorIndicator.prototype.l5(10, $.ig.PercentageVolumeOscillatorIndicator.prototype.$type);
$.ig.PercentageVolumeOscillatorIndicator.prototype.longPeriodProperty = $.ig.PercentageVolumeOscillatorIndicator.prototype.l4(30, $.ig.PercentageVolumeOscillatorIndicator.prototype.$type);
$.ig.PriceChannelOverlay.prototype.kl = "Period";
$.ig.PriceChannelOverlay.prototype.periodProperty = $.ig.DependencyProperty.prototype.l($.ig.PriceChannelOverlay.prototype.kl, $.ig.Number.prototype.$type, $.ig.PriceChannelOverlay.prototype.$type, new $.ig.PropertyMetadata(1, 14, function (c, d) {
    ($.ig.util.cast($.ig.PriceChannelOverlay.prototype.$type, c)).ej($.ig.PriceChannelOverlay.prototype.kl, d.f(), d.e())
}));
$.ig.RateOfChangeAndMomentumIndicator.prototype.periodProperty = $.ig.RateOfChangeAndMomentumIndicator.prototype.l3(14, $.ig.RateOfChangeAndMomentumIndicator.prototype.$type);
$.ig.RelativeStrengthIndexIndicator.prototype.periodProperty = $.ig.RelativeStrengthIndexIndicator.prototype.l3(14, $.ig.RelativeStrengthIndexIndicator.prototype.$type);
$.ig.SlowStochasticOscillatorIndicator.prototype.periodProperty = $.ig.SlowStochasticOscillatorIndicator.prototype.l3(14, $.ig.SlowStochasticOscillatorIndicator.prototype.$type);
$.ig.StandardDeviationIndicator.prototype.periodProperty = $.ig.StandardDeviationIndicator.prototype.l3(20, $.ig.StandardDeviationIndicator.prototype.$type);
$.ig.StochRSIIndicator.prototype.periodProperty = $.ig.StochRSIIndicator.prototype.l3(14, $.ig.StochRSIIndicator.prototype.$type);
$.ig.TRIXIndicator.prototype.periodProperty = $.ig.TRIXIndicator.prototype.l3(15, $.ig.TRIXIndicator.prototype.$type);
$.ig.WilliamsPercentRIndicator.prototype.periodProperty = $.ig.WilliamsPercentRIndicator.prototype.l3(14, $.ig.WilliamsPercentRIndicator.prototype.$type);
$.ig.FinancialPriceSeries.prototype.kd = "DisplayType";
$.ig.FinancialPriceSeries.prototype.ke = 3;
$.ig.FinancialPriceSeries.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, c)).ej($.ig.FinancialPriceSeries.prototype.b4, d.f(), d.e())
}));
$.ig.FinancialPriceSeries.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b6, $.ig.Brush.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, c)).ej($.ig.FinancialPriceSeries.prototype.b6, d.f(), d.e())
}));
$.ig.FinancialPriceSeries.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b7, $.ig.Brush.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, c)).ej($.ig.FinancialPriceSeries.prototype.b7, d.f(), d.e())
}));
$.ig.FinancialPriceSeries.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b8, Number, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (c, d) {
    ($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, c)).ej($.ig.FinancialPriceSeries.prototype.b8, d.f(), d.e())
}));
$.ig.FinancialPriceSeries.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, c)).ej($.ig.FinancialPriceSeries.prototype.b9, d.f(), d.e())
}));
$.ig.FinancialPriceSeries.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, c)).ej($.ig.FinancialPriceSeries.prototype.b3, d.f(), d.e())
}));
$.ig.FinancialPriceSeries.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.b5, $.ig.Number.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (c, d) {
    ($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, c)).ej($.ig.FinancialPriceSeries.prototype.b5, d.f(), d.e())
}));
$.ig.FinancialPriceSeries.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.ca, $.ig.Number.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, 1001, function (c, d) {
    ($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, c)).ej($.ig.FinancialPriceSeries.prototype.ca, d.f(), d.e())
}));
$.ig.FinancialPriceSeries.prototype.displayTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.FinancialPriceSeries.prototype.kd, $.ig.PriceDisplayType.prototype.$type, $.ig.FinancialPriceSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.PriceDisplayType.prototype.candlestick, function (c, d) {
    ($.ig.util.cast($.ig.FinancialPriceSeries.prototype.$type, c)).ej($.ig.FinancialPriceSeries.prototype.kd, d.f(), d.e())
}));
$.ig.Legend.prototype.cc = "Orientation";
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
(function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({position: "fixed", bottom: 0, right: 0, zIndex: 1000}).addClass("ui-igtrialwatermark")
    })
}(jQuery));