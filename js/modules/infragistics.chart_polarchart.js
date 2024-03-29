﻿/*
 * Infragistics.Web.ClientUI infragistics.chart_polarchart.js 12.2.20122.1021
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
$.ig.util.defType("SmartPosition", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("SmartPosition", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("UnknownValuePlotting", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("UnknownValuePlotting", $.ig.Object.prototype.$type)}, true);
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
$.ig.SmartPosition.prototype.leftTop = 0;
$.ig.SmartPosition.prototype.centerTop = 1;
$.ig.SmartPosition.prototype.rightTop = 2;
$.ig.SmartPosition.prototype.leftCenter = 3;
$.ig.SmartPosition.prototype.centerCenter = 4;
$.ig.SmartPosition.prototype.rightCenter = 5;
$.ig.SmartPosition.prototype.leftBottom = 6;
$.ig.SmartPosition.prototype.centerBottom = 7;
$.ig.SmartPosition.prototype.rightBottom = 8;
$.ig.UnknownValuePlotting.prototype.linearInterpolate = 0;
$.ig.UnknownValuePlotting.prototype.dontPlot = 1;
$.ig.SmartPlaceableWrapper$1.prototype.b = [$.ig.SmartPosition.prototype.centerCenter];
$.ig.SmartPlaceableWrapper$1.prototype.c = [$.ig.SmartPosition.prototype.centerCenter, $.ig.SmartPosition.prototype.rightCenter, $.ig.SmartPosition.prototype.rightTop, $.ig.SmartPosition.prototype.centerTop, $.ig.SmartPosition.prototype.rightBottom, $.ig.SmartPosition.prototype.centerBottom, $.ig.SmartPosition.prototype.leftTop, $.ig.SmartPosition.prototype.leftCenter, $.ig.SmartPosition.prototype.leftBottom];
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
$.ig.util.defType("CollisionAvoidanceType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("CollisionAvoidanceType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("AngleAxisLabelPanelView", "AxisLabelPanelBaseView", {_ah: null, ah: function (b) {
    if (arguments.length === 1) {
        this._ah = b;
        return b
    } else {
        return this._ah
    }
}, init: function (b) {
    $.ig.AxisLabelPanelBaseView.prototype.init.call(this, b);
    this.ah(b)
}, u: function () {
    $.ig.AxisLabelPanelBaseView.prototype.u.call(this);
    this.ah().d4(true)
}, l: function () {
    return 0
}, m: function () {
    return 0
}, ak: function (k) {
    this.ah().d6(-Number.MAX_VALUE);
    this.ah().d7(-Number.MAX_VALUE);
    for (var l = 0; l < this.g().by().count(); l++) {
        var m = this.g().by().__inner[l];
        var n = this.g().bt().__inner[l];
        var o = this.ah().d5()(n.b());
        var p = o.__x - this.v(m) / 2;
        var q = o.__y - this.t(m) / 2;
        var r = this.v(m);
        var s = this.t(m);
        this.ah().d6(Math.max(r, this.ah().d6()));
        this.ah().d7(Math.max(s, this.ah().d7()));
        var t = new $.ig.Rect(0, p, q, r, s);
        k.add(t)
    }
}, $type: new $.ig.Type("AngleAxisLabelPanelView", $.ig.AxisLabelPanelBaseView.prototype.$type)}, true);
$.ig.util.defType("AngleAxisLabelPanel", "AxisLabelPanelBase", {b6: function () {
    return new $.ig.AngleAxisLabelPanelView(this)
}, b7: function (b) {
    $.ig.AxisLabelPanelBase.prototype.b7.call(this, b);
    this.d3(b)
}, _d3: null, d3: function (b) {
    if (arguments.length === 1) {
        this._d3 = b;
        return b
    } else {
        return this._d3
    }
}, init: function () {
    $.ig.AxisLabelPanelBase.prototype.init.call(this)
}, _d4: null, d4: function (b) {
    if (arguments.length === 1) {
        this._d4 = b;
        return b
    } else {
        return this._d4
    }
}, _d5: null, d5: function (b) {
    if (arguments.length === 1) {
        this._d5 = b;
        return b
    } else {
        return this._d5
    }
}, da: function (c, d) {
    if (!d.isPlottable1()) {
        return false
    }
    if (this.br() == null || this.br().c2().isEmpty()) {
        return $.ig.AxisLabelPanelBase.prototype.da.call(this, c, d)
    }
    return true
}, _d6: null, d6: function (b) {
    if (arguments.length === 1) {
        this._d6 = b;
        return b
    } else {
        return this._d6
    }
}, _d7: null, d7: function (b) {
    if (arguments.length === 1) {
        this._d7 = b;
        return b
    } else {
        return this._d7
    }
}, c6: function () {
    var j = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
    if (this.by().count() != this.bt().count()) {
        return j
    }
    this.d3().ak(j);
    var k = false;
    this.b0(this.c4(j));
    if (!this.br().e8()) {
        k = true;
        this.b5(this.d6() / 2);
        this.b5(this.b5() + this.ei())
    } else {
        k = true;
        this.d3().w()
    }
    if (k) {
        for (var l = 0; l < j.count(); l++) {
            var m = this.by().__inner[l];
            var n = this.bt().__inner[l];
            var o = j.__inner[l];
            var p = this.d5()(n.b());
            var q = p.__x - this.db(m) / 2;
            var r = p.__y - this.dc(m) / 2;
            o.x(q);
            o.y(r);
            j.__inner[l] = o
        }
    }
    this.b0(this.c4(j));
    if (this.b0()) {
    }
    return j
}, ei: function () {
    var c = this;
    var h;
    var i;
    i = this.br();
    h = null;
    if (i != null) {
        h = $.ig.util.cast($.ig.XamDataChart.prototype.$type, i.seriesViewer())
    }
    if (h == null || i == null) {
        return 0
    }
    var j = (((h.axes()).where$1($.ig.Axis.prototype.$type, function (a) {
        return($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, a) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, a) !== null) && $.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, a.c6()) !== null && ($.ig.util.cast($.ig.AngleAxisLabelPanel.prototype.$type, a.c6())).by().count() > 0 && (!a.e8()) && !a.fk() && (a.crossingAxis() == null || c.br().crossingAxis() == null || ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, a.crossingAxis())).im() == ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, i.crossingAxis())).im())
    }))).toList$1($.ig.Axis.prototype.$type);
    var k = j.indexOf(i);
    if (k == -1) {
        return 0
    }
    var l = 0;
    for (var m = 0; m < k; m++) {
        l += j.__inner[m].c6().b5() * 2 + 5
    }
    return l
}, dj: function () {
    return $.ig.AxisLabelsLocation.prototype.insideTop
}, dk: function (b) {
    return b == $.ig.AxisLabelsLocation.prototype.insideTop || b == $.ig.AxisLabelsLocation.prototype.insideBottom
}, $type: new $.ig.Type("AngleAxisLabelPanel", $.ig.AxisLabelPanelBase.prototype.$type)}, true);
$.ig.util.defType("IAngleScaler", "Object", {$type: new $.ig.Type("IAngleScaler", null)}, true);
$.ig.util.defType("CategoryAngleAxis", "CategoryAxisBase", {dl: function () {
    return new $.ig.CategoryAngleAxisView(this)
}, dp: function (b) {
    $.ig.CategoryAxisBase.prototype.dp.call(this, b);
    this.ho(b)
}, _ho: null, ho: function (b) {
    if (arguments.length === 1) {
        this._ho = b;
        return b
    } else {
        return this._ho
    }
}, he: null, init: function () {
    this.hf = false;
    this.hg = NaN;
    this.hi = 0;
    this.hj = 1;
    $.ig.CategoryAxisBase.prototype.init.call(this);
    this.hp(this.hx());
    this.he = new $.ig.PolarAxisRenderingManager()
}, dr: function () {
    var b = this;
    var c = new $.ig.AngleAxisLabelPanel();
    c.d5(function (a) {
        var e = b.seriesViewer() != null ? b.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
        var f = !e.isEmpty() ? b.c2() : $.ig.Rect.prototype.empty();
        return b.hy(a, {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, e, f, b.c6().b5())
    });
    return c
}, _hp: null, hp: function (b) {
    if (arguments.length === 1) {
        this._hp = b;
        return b
    } else {
        return this._hp
    }
}, hf: null, hw: function (b) {
    return Math.round(b * Math.pow(10, 10)) / Math.pow(10, 10)
}, hg: null, hx: function () {
    var c = this;
    var d = (function () {
        var a = new $.ig.AxisLabelManager();
        a.j(c);
        a.h(c.c5());
        a.g(c.c4());
        a.i(c.c6());
        return a
    }());
    if (this.labelSettings() != null) {
        this.labelSettings().r(this)
    }
    var e = new $.ig.CategoryAxisRenderer(d);
    e.am(function () {
        var a = c.cz().au();
        var b = c.cz().av();
        var g = c.cz().aw();
        var h = c.cz().ax();
        c.d2();
        c.eq(a);
        c.eq(b);
        c.eq(g);
        c.eq(h)
    });
    e.an(function (a, b) {
        return !b.isEmpty() && !a.isEmpty() && c.hq() != null
    });
    e.a1(function (a, b) {
        return c.h0(a, b)
    });
    e.ao(function () {
        if (!c.hf) {
            c.hf = true;
            c.hq().updateRange();
            c.hf = false
        }
    });
    e.a0(function (a) {
        var b = a;
        if (b > c.gn().g() - 1) {
            b -= c.gn().g()
        }
        var f = c.gn().item(b);
        return c.e2(f)
    });
    e.az().k(function (a) {
        if ((c.labelSettings() == null || c.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && c.hq() != null && c.hg != a) {
            var b = $.ig.util.cast($.ig.XamDataChart.prototype.$type, c.seriesViewer());
            if (b == null) {
                return
            }
            c.hg = a;
            c.c6().bx(a);
            b.ic()
        }
    });
    e.ar(function (a, b, f) {
        var g = $.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, a);
        c.he.f(b, f, a.r(), a.s(), g.minLength(), g.maxLength(), g.center())
    });
    e.aq(function (a, b, f, g) {
        var h = $.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, a);
        c.he.e(b, f, g, h.r(), a.s(), h.minLength(), h.maxLength(), h.center())
    });
    e.ap(function (a, b) {
        return c.getScaledAngle(b)
    });
    e.as(function (a, b) {
        if (c.hw(b - c.hi) < 0) {
            return false
        }
        if (c.hw(b - c.hi - (2 * Math.PI)) > 0) {
            return false
        }
        return true
    });
    e.au(function (a) {
        var b = $.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, a);
        if (b.u() == b.t().__inner[0]) {
            c.he.d(a.z(), a.ac(), a.r(), a.s(), b.center(), b.minAngle(), b.maxAngle())
        }
    });
    e.av(function (a) {
        a.ac(c.hz())
    });
    e.aw(function (a, b, f) {
        var g = $.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, a);
        if (f) {
            return false
        }
        var h = c.hy(b, g.center(), a.s(), a.r(), 0);
        if (h.__x < a.r().right() && h.__x >= a.r().left() && h.__y < a.r().bottom() && h.__y >= a.r().top()) {
            return true
        }
        return false
    });
    e.a3(function (a, b, f, g) {
        var h = new $.ig.ScalerParams(a.s(), a.r(), c.isInverted());
        var i = b;
        if (c.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
            var j = (f * g) + 1;
            j = Math.min(j, c.itemsCount());
            var k = c.getScaledValue(j, h);
            i = (b + k) / 2
        }
        return i
    });
    e.a4(this.getGroupCenter.on(this));
    e.a5(this.h3.on(this));
    return e
}, hy: function (j, k, l, m, n) {
    var o = this.hz();
    var p = $.ig.ViewportUtils.prototype.f(n, l, m);
    if (this.labelSettings() != null && (this.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom || this.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.outsideBottom)) {
        p *= -1
    }
    var q = k.__x + (o + p) * Math.cos(j);
    var r = k.__y + (o + p) * Math.sin(j);
    q = $.ig.ViewportUtils.prototype.a(q, l, m);
    r = $.ig.ViewportUtils.prototype.c(r, l, m);
    return{__x: q, __y: r, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, hz: function () {
    if (this.hq() == null) {
        return 0
    }
    if (!this.fk()) {
        return this.hq().i8()
    } else {
        return this.hq().getScaledValue2((this.crossingValue()))
    }
}, h0: function (r, s) {
    if (this.gn() == null) {
        return null
    }
    var t = new $.ig.RadialAxisRenderingParameters();
    var u = this.gn().g() - 1;
    var v = this.cz().au();
    var w = this.cz().av();
    var x = this.cz().aw();
    var y = this.cz().ax();
    t.z(v);
    t.w(w);
    t.x(x);
    t.y(y);
    t.ab(u);
    t.aa(0);
    t.ag(false);
    t.r(r);
    t.s(s);
    t.af(this.h8());
    t.ae(this.interval());
    t.ad(this.label());
    var z = this.he.k(s);
    var A = this.he.l(s);
    var B = 0.5 * this.hq().im();
    var C = 0.5 * this.hq().io();
    var D = z;
    var E = A;
    var F = this.hq().i8();
    if (isNaN(F) || Number.isInfinity(F)) {
        return null
    }
    if (E >= B) {
        E = F
    }
    if (D < C) {
        D = C
    }
    var G = r.width();
    this.he.p(s, t, 0, this.gn().g(), this.isInverted(), this.getUnscaledAngle.on(this), G);
    var H = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    t.center(H);
    t.maxLength(E);
    t.minLength(D);
    t.effectiveMaximum(F);
    t.bl(this.gn().g());
    t.bm(this.categoryMode());
    t.bn(true);
    t.bp(this.isInverted());
    t.bo(this.go());
    t.v(new $.ig.CategoryTickmarkValues());
    t.ah(this.c9());
    return t
}, getMinMaxAngle: function (e, f, g) {
    var d = this;
    (function () {
        var a = d.he.o(e, f, g);
        f = a.minAngle;
        g = a.maxAngle;
        return a.ret
    }());
    return{visibleMinimum: f, visibleMaximum: g}
}, onApplyTemplate: function () {
    $.ig.Axis.prototype.onApplyTemplate.call(this);
    this.es(false)
}, hh: null, hq: function (c) {
    if (arguments.length === 1) {
        this.hh = c;
        return c
    } else {
        if (this.hh != null) {
            return this.hh
        }
        var d = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
        if (d != null) {
            return d.axes().ofType$1($.ig.NumericRadiusAxis.prototype.$type).firstOrDefault$1($.ig.NumericRadiusAxis.prototype.$type)
        }
        return this.hh
    }
}, startAngleOffset: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryAngleAxis.prototype.startAngleOffsetProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryAngleAxis.prototype.startAngleOffsetProperty)
    }
}, hi: null, getCategorySize: function (c, d) {
    return 2 * Math.PI / this.itemsCount()
}, gz: function (f, g) {
    var h = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
    var i = 0;
    if (!isNaN(this.overlap())) {
        i = Math.min(this.overlap(), 1)
    }
    var j = 1 - 0.5 * h;
    return this.getCategorySize(f, g) * j / (this.go() - (this.go() - 1) * i)
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
}, h3: function (h) {
    var i = 0.5;
    if (this.go() > 1) {
        var j = !isNaN(this.gap()) ? $.ig.MathUtil.prototype.i(this.gap(), 0, 1) : 0;
        var k = 0;
        if (!isNaN(this.overlap())) {
            k = Math.min(this.overlap(), 1)
        }
        var l = 1 - 0.5 * j;
        var m = l / (this.go() - (this.go() - 1) * k);
        var n = (l - m) / (this.go() - 1);
        i = 0.25 * j + 0.5 * m + h * n
    }
    return i
}, ey: function (d) {
    var e = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var f = !e.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
    this.hp().ca(d, f, e)
}, h4: function (g, h) {
    var f = this;
    var i;
    var j;
    (function () {
        var a = f.he.o(h, i, j);
        i = a.minAngle;
        j = a.maxAngle;
        return a.ret
    }());
    if (i == 0) {
        if (this.isInverted()) {
            return this.itemsCount()
        } else {
            return 0
        }
    }
    var k = this.getUnscaledAngle(i);
    if (k < 0 || k > this.itemsCount()) {
        k = this.getUnscaledAngle(i + Math.PI * 2)
    }
    return k
}, h5: function (g, h) {
    var f = this;
    var i;
    var j;
    (function () {
        var a = f.he.o(h, i, j);
        i = a.minAngle;
        j = a.maxAngle;
        return a.ret
    }());
    if (j > Math.PI * 2) {
        j = j - Math.PI * 2
    }
    if (j == Math.PI * 2) {
        if (this.isInverted()) {
            return 0
        } else {
            return this.itemsCount()
        }
    }
    var k = this.getUnscaledAngle(j);
    if (k < 0 || k > this.itemsCount()) {
        k = this.getUnscaledAngle(j + Math.PI * 2)
    }
    return k
}, getScaledAngle: function (d) {
    var e = this.itemsCount();
    var f = e >= 2 ? (d) / (e) : e == 1 ? 0.5 : NaN;
    if (this.c1()) {
        f = 1 - f
    }
    return(f * 2 * Math.PI) + this.hi
}, getUnscaledAngle: function (c) {
    var d = (c - this.hi) / (2 * Math.PI);
    if (this.isInverted()) {
        d = 1 - d
    }
    return d * (this.itemsCount())
}, getScaledValue: function (c, d) {
    return(this).getScaledAngle(c)
}, eg: function (m, n, o, p) {
    $.ig.CategoryAxisBase.prototype.eg.call(this, m, n, o, p);
    var q = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
    switch (n) {
        case $.ig.CategoryAngleAxis.prototype.bp:
            var r = $.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, p);
            this.h7(r);
            if (r != null) {
                r.i3(this)
            }
            this.c7(true);
            this.es(false);
            break;
        case $.ig.CategoryAngleAxis.prototype.hc:
            this.hi = this.startAngleOffset();
            while (this.hi < 0) {
                this.hi += 360
            }
            while (this.hi >= 360) {
                this.hi -= 360
            }
            this.hi = (this.hi * Math.PI) / 180;
            this.c7(true);
            this.es(false);
            var t = this.dc().getEnumerator();
            while (t.moveNext()) {
                var s = t.current();
                s.renderSeries(false)
            }
            break;
        case $.ig.CategoryAngleAxis.prototype.br:
            if (q != null) {
                var v = q.axes().getEnumerator();
                while (v.moveNext()) {
                    var u = v.current();
                    u.c7(true);
                    u.renderAxis()
                }
            }
            break;
        case $.ig.CategoryAngleAxis.prototype.bq:
            if (q != null) {
                var x = q.axes().getEnumerator();
                while (x.moveNext()) {
                    var w = x.current();
                    if ($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, w) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, w) !== null) {
                        w.c7(true);
                        w.renderAxis()
                    }
                }
            }
            break;
        case $.ig.CategoryAngleAxis.prototype.bn:
            this.hp(this.hx());
            this.h6();
            this.c7(true);
            this.es(false);
            break
    }
}, h6: function () {
    this.hg = NaN
}, h7: function (b) {
    this.hq(b)
}, interval: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.CategoryAngleAxis.prototype.intervalProperty, b);
        return b
    } else {
        return this.b($.ig.CategoryAngleAxis.prototype.intervalProperty)
    }
}, h8: function () {
    return false
}, dd: function () {
    return $.ig.AxisOrientation.prototype.angular
}, ex: function () {
    if (this.gn() == null) {
        return false
    }
    var c = this.gn().g();
    if (c != this.hr()) {
        var d = new $.ig.AxisRangeChangedEventArgs(1, 1, this.hr(), c);
        this.hr(c);
        this.dx(d);
        return true
    }
    return false
}, hj: null, hr: function (b) {
    if (arguments.length === 1) {
        this.hj = b;
        return b
    } else {
        return this.hj
    }
}, $type: new $.ig.Type("CategoryAngleAxis", $.ig.CategoryAxisBase.prototype.$type, [$.ig.IAngleScaler.prototype.$type])}, true);
$.ig.util.defType("CategoryAngleAxisView", "CategoryAxisBaseView", {_bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, init: function (b) {
    $.ig.CategoryAxisBaseView.prototype.init.call(this, b);
    this.bo(b)
}, $type: new $.ig.Type("CategoryAngleAxisView", $.ig.CategoryAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("CategoryAxisRenderer", "AxisRendererBase", {init: function (b) {
    $.ig.AxisRendererBase.prototype.init.call(this, b)
}, c1: function (k, l, m, n, o) {
    var p = $.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, k);
    var q = $.ig.CategoryMode.prototype.mode0;
    if (p != null) {
        q = p.bm()
    }
    var r = new $.ig.LinearCategorySnapper(1, k.u().f(), k.u().g(), k.u().i(), k.ae(), q);
    l = r.g();
    if (k.u().h() != -1) {
        l = k.u().h()
    }
    var s = Math.floor((k.u().f() - k.aa()) / l);
    var t = Math.ceil((k.u().g() - k.aa()) / l);
    n = s;
    o = t;
    m = r.h();
    if (k.u().j() != -1) {
        m = k.u().j()
    }
    return{interval: l, minorCount: m, first: n, last: o}
}, ch: function (h, i, j, k) {
    var l = $.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, h);
    if (l == null) {
        return null
    }
    var m = 0;
    if (k >= 1) {
        m = j * Math.floor(k)
    } else {
        if ((j * k) * 2 % 2 == 0) {
            m = Math.floor(j * k)
        } else {
            m = -1
        }
    }
    var n = null;
    if ((l.bl() > 0 && m < l.bl() && m >= 0) || l.bn()) {
        while (m >= l.bl() && l.bn()) {
            m -= l.bl()
        }
        n = this.a0()(m)
    }
    return n
}, c2: function (l, m, n, o, p, q) {
    var r = $.ig.util.cast($.ig.CategoryAxisRenderingParameters.prototype.$type, l);
    if (r.bm() != $.ig.CategoryMode.prototype.mode0 && r.bo() != 0) {
        for (var s = 0; s < m; s++) {
            for (var t = 0; t < r.bo(); t++) {
                var u = this.a4()(t, l.s(), l.r());
                if (r.bp()) {
                    u = -u
                }
                var v = this.ap()(l, s + p * m) + u;
                this.ar()(l, l.y(), v)
            }
        }
    }
}, $type: new $.ig.Type("CategoryAxisRenderer", $.ig.AxisRendererBase.prototype.$type)}, true);
$.ig.util.defType("NumericAngleAxis", "NumericAxisBase", {dl: function () {
    return new $.ig.NumericAngleAxisView(this)
}, dp: function (b) {
    $.ig.NumericAxisBase.prototype.dp.call(this, b);
    this.ib(b)
}, _ib: null, ib: function (b) {
    if (arguments.length === 1) {
        this._ib = b;
        return b
    } else {
        return this._ib
    }
}, _ic: null, ic: function (b) {
    if (arguments.length === 1) {
        this._ic = b;
        return b
    } else {
        return this._ic
    }
}, init: function () {
    this.h3 = false;
    this.h4 = NaN;
    this.h5 = 0;
    $.ig.NumericAxisBase.prototype.init.call(this);
    this.ic(new $.ig.PolarAxisRenderingManager());
    this.g3(this.hm())
}, dr: function () {
    var b = this;
    var c = new $.ig.AngleAxisLabelPanel();
    c.d5(function (a) {
        var e = b.seriesViewer() != null ? b.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
        var f = !e.isEmpty() ? b.c2() : $.ig.Rect.prototype.empty();
        return b.il(a, {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, e, f, b.c6().b5())
    });
    return c
}, ij: function () {
    if (this.id() == null) {
        return 0
    }
    if (!this.fk()) {
        return this.id().i8()
    } else {
        return this.id().getScaledValue2((this.crossingValue()))
    }
}, ik: function (b) {
    return Math.round(b * Math.pow(10, 10)) / Math.pow(10, 10)
}, h3: null, h4: null, hm: function () {
    var b = this;
    var c = $.ig.NumericAxisBase.prototype.hm.call(this);
    c.az().k(function (a) {
        if ((b.labelSettings() == null || b.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && b.id() != null && b.h4 != a) {
            var d = $.ig.util.cast($.ig.XamDataChart.prototype.$type, b.seriesViewer());
            if (d == null) {
                return
            }
            b.h4 = a;
            b.c6().bx(a);
            d.ic()
        }
    });
    c.av(function (a) {
        a.ac(b.ij())
    });
    c.au(function (a) {
        var d = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        if (d.u() == d.t().__inner[0]) {
            b.ic().d(a.z(), a.ac(), a.r(), a.s(), d.center(), d.minAngle(), d.maxAngle())
        }
    });
    c.ar(function (a, d, e) {
        var f = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        b.ic().f(d, e, a.r(), a.s(), f.minLength(), f.maxLength(), f.center())
    });
    c.aq(function (a, d, e, f) {
        var g = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        b.ic().e(d, e, f, g.r(), a.s(), g.minLength(), g.maxLength(), g.center())
    });
    c.a1(function (a, d) {
        var e = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, b.hq(a, d));
        return e
    });
    c.ao(function () {
        if (!b.h3) {
            b.h3 = true;
            b.id().updateRange();
            b.h3 = false
        }
    });
    c.ap(function (a, d) {
        return b.getScaledAngle1(d)
    });
    c.an(function (a, d) {
        return !d.isEmpty() && !a.isEmpty() && b.id() != null
    });
    c.as(function (a, d) {
        if (b.ik(d - b.h5) < 0) {
            return false
        }
        if (b.ik(d - b.h5 - (2 * Math.PI)) > 0) {
            return false
        }
        return true
    });
    c.aw(function (g, h, a) {
        var d = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, g);
        var e = b.il(b.getScaledAngle1(d.ab()), d.center(), g.s(), g.r(), 0);
        var f = b.il(h, d.center(), g.s(), g.r(), 0);
        if (a && $.ig.MathUtil.prototype.f(e.__x - f.__x, e.__y - f.__y) < 2) {
            return false
        }
        if (f.__x < g.r().right() && f.__x >= g.r().left() && f.__y < g.r().bottom() && f.__y >= g.r().top()) {
            return true
        }
        return false
    });
    c.a2(function (a, d, e, f) {
        if (d < a.aa() && $.ig.util.cast($.ig.LogarithmicTickmarkValues.prototype.$type, a.v()) !== null) {
            return a.aa()
        } else {
            if (d > a.ab() && ($.ig.util.cast($.ig.LogarithmicTickmarkValues.prototype.$type, a.v()) !== null || a.ag())) {
                return a.ab()
            }
        }
        return d
    });
    return c
}, il: function (j, k, l, m, n) {
    var o = this.ij();
    var p = $.ig.ViewportUtils.prototype.f(n, l, m);
    if (this.labelSettings() != null && (this.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom || this.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.outsideBottom)) {
        p *= -1
    }
    var q = k.__x + (o + p) * Math.cos(j);
    var r = k.__y + (o + p) * Math.sin(j);
    q = $.ig.ViewportUtils.prototype.a(q, l, m);
    r = $.ig.ViewportUtils.prototype.c(r, l, m);
    return{__x: q, __y: r, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, getScaledValue: function (c, d) {
    return this.getScaledAngle1(c)
}, im: function (e, f, g) {
    var h = 0;
    if (f) {
        h = (Math.log(e) - this.gz()) / (this.g0() - this.gz())
    } else {
        h = (e - this.actualMinimumValue()) / (this.actualMaximumValue() - this.actualMinimumValue())
    }
    if (g) {
        h = 1 - h
    }
    return(h * 2 * Math.PI) + this.h5
}, getScaledAngle1: function (b) {
    return this.im(b, this.g1(), this.c1())
}, getUnscaledAngle: function (c) {
    var d = (c - this.h5) / (2 * Math.PI);
    if (this.isInverted()) {
        d = 1 - d
    }
    if (this.g1()) {
        return Math.exp(d * (this.g0() - this.gz()) + this.gz())
    } else {
        return this.actualMinimumValue() + d * (this.actualMaximumValue() - this.actualMinimumValue())
    }
}, startAngleOffset: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericAngleAxis.prototype.startAngleOffsetProperty, b);
        return b
    } else {
        return this.b($.ig.NumericAngleAxis.prototype.startAngleOffsetProperty)
    }
}, h5: null, eg: function (m, n, o, p) {
    $.ig.NumericAxisBase.prototype.eg.call(this, m, n, o, p);
    var q = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
    switch (n) {
        case $.ig.NumericAngleAxis.prototype.bp:
            var r = $.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, p);
            this.ir(r);
            if (r != null) {
                r.i3(this)
            }
            this.es(false);
            break;
        case $.ig.NumericAngleAxis.prototype.h2:
            this.h5 = this.startAngleOffset();
            while (this.h5 < 0) {
                this.h5 += 360
            }
            while (this.h5 >= 360) {
                this.h5 -= 360
            }
            this.h5 = (this.startAngleOffset() * Math.PI) / 180;
            this.es(false);
            var t = this.fl().getEnumerator();
            while (t.moveNext()) {
                var s = t.current();
                s.renderSeries(false)
            }
            break;
        case $.ig.NumericAngleAxis.prototype.br:
            if (q != null) {
                var v = q.axes().getEnumerator();
                while (v.moveNext()) {
                    var u = v.current();
                    u.renderAxis()
                }
            }
            break;
        case $.ig.NumericAngleAxis.prototype.bq:
            if (q != null) {
                var x = q.axes().getEnumerator();
                while (x.moveNext()) {
                    var w = x.current();
                    if ($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, w) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, w) !== null) {
                        w.renderAxis()
                    }
                }
            }
            break;
        case $.ig.NumericAngleAxis.prototype.bn:
            this.g3(this.hm());
            this.io();
            this.c7(true);
            this.es(false);
            break
    }
}, io: function () {
    this.h4 = NaN
}, hn: function () {
    return new $.ig.PolarAxisRenderingParameters()
}, hq: function (m, n) {
    var o = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, $.ig.NumericAxisBase.prototype.hq.call(this, m, n));
    var p = this.ic().k(n);
    var q = this.ic().l(n);
    var r = 0.5 * this.id().im();
    var s = 0.5 * this.id().io();
    var t = p;
    var u = q;
    var v = this.id().i8();
    if (isNaN(v) || Number.isInfinity(v)) {
        return null
    }
    if (u >= r) {
        u = v
    }
    if (t < s) {
        t = s
    }
    var w = m.width();
    this.ic().p(n, o, this.actualMinimumValue(), this.actualMaximumValue(), this.isInverted(), this.getUnscaledAngle.on(this), w);
    var x = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    o.center(x);
    o.maxLength(u);
    o.minLength(t);
    o.effectiveMaximum(v);
    return o
}, getMinMaxAngle: function (e, f, g) {
    var d = this;
    (function () {
        var a = d.ic().o(e, f, g);
        f = a.minAngle;
        g = a.maxAngle;
        return a.ret
    }());
    return{minAngle: f, maxAngle: g}
}, ey: function (d) {
    var e = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var f = !e.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
    this.g3().ca(d, f, e)
}, h6: null, id: function (c) {
    if (arguments.length === 1) {
        this.h6 = c;
        return c
    } else {
        if (this.h6 != null) {
            return this.h6
        }
        var d = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
        if (d != null) {
            return d.axes().ofType$1($.ig.NumericRadiusAxis.prototype.$type).firstOrDefault$1($.ig.NumericRadiusAxis.prototype.$type)
        }
        return this.h6
    }
}, ir: function (b) {
    this.id(b)
}, d9: function (c, d) {
    $.ig.Axis.prototype.d9.call(this, c, d);
    if (d.height() != c.height() || d.width() != c.width()) {
        this.updateRange()
    }
}, dd: function () {
    return $.ig.AxisOrientation.prototype.angular
}, $type: new $.ig.Type("NumericAngleAxis", $.ig.NumericAxisBase.prototype.$type, [$.ig.IAngleScaler.prototype.$type])}, true);
$.ig.util.defType("NumericAngleAxisView", "NumericAxisBaseView", {_bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, init: function (b) {
    $.ig.NumericAxisBaseView.prototype.init.call(this, b);
    this.bo(b)
}, $type: new $.ig.Type("NumericAngleAxisView", $.ig.NumericAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("NumericRadiusAxis", "NumericAxisBase", {dl: function () {
    return new $.ig.NumericRadiusAxisView(this)
}, dp: function (b) {
    $.ig.NumericAxisBase.prototype.dp.call(this, b);
    this.ik(b)
}, _ik: null, ik: function (b) {
    if (arguments.length === 1) {
        this._ik = b;
        return b
    } else {
        return this._ik
    }
}, h4: null, init: function () {
    this.h5 = NaN;
    $.ig.NumericAxisBase.prototype.init.call(this);
    this.im(this.radiusExtentScale());
    this.io(this.innerRadiusExtentScale());
    this.h4 = new $.ig.PolarAxisRenderingManager();
    this.g3(this.hm())
}, dr: function () {
    return new $.ig.RadialAxisLabelPanel()
}, _il: null, il: function (b) {
    if (arguments.length === 1) {
        this._il = b;
        return b
    } else {
        return this._il
    }
}, iv: function (b) {
    return b
}, h5: null, hm: function () {
    var b = this;
    var c = $.ig.NumericAxisBase.prototype.hm.call(this);
    c.az().k(function (a) {
        if ((b.labelSettings() == null || b.labelSettings().visibility() == $.ig.Visibility.prototype.visible) && b.iq() != null) {
            if ((b.labelSettings() == null || (b.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop || b.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom)) && b.h5 != a) {
                b.h5 = a;
                b.c6().bx(a);
                b.seriesViewer().ic()
            }
        }
    });
    c.ar(function (a, g, h) {
        var i = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        b.h4.d(g, h, i.r(), i.s(), i.center(), i.minAngle(), i.maxAngle())
    });
    c.aq(function (a, d, e, f) {
        if (e == f) {
            return
        }
        var l = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        b.h4.b(d, e, f, l.r(), l.s(), l.center(), l.minAngle(), l.maxAngle())
    });
    c.ap(function (a, d) {
        return b.getScaledValue2(d)
    });
    c.as(function (a, d) {
        var e = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        return d <= e.effectiveMaximum()
    });
    c.at(function (a, d) {
        var e = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        return d <= e.effectiveMaximum()
    });
    c.au(function (a) {
        var d = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        b.h4.f(a.z(), d.crossingAngleRadians(), a.r(), a.s(), d.minLength(), d.maxLength(), d.center())
    });
    c.av(function (a) {
        a.ac(b.labelSettings() == null || (b.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop || b.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.outsideTop) ? a.r().top() : a.r().bottom());
        var d = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        d.crossingAngleRadians((b.iv(b.crossingValue()) * Math.PI) / 180);
        if (b.labelSettings() == null || (b.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop || b.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom)) {
            d.ac($.ig.ViewportUtils.prototype.c(0.5, d.s(), d.r()) - a.r().top());
            var e = $.ig.util.cast($.ig.RadialAxisLabelPanel.prototype.$type, b.c6());
            if (e != null) {
                var f = 0;
                if (b.labelSettings() != null && b.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop) {
                    f = 1
                }
                e.ei({__x: $.ig.ViewportUtils.prototype.a(0.5, d.s(), d.r()), __y: f, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                e.ej(d.crossingAngleRadians())
            }
        }
    });
    c.aw(function (j, a, d) {
        var e = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, j);
        if (b.iq() == null) {
            return false
        }
        if (a > e.effectiveMaximum()) {
            return false
        }
        var f = false;
        f = b.labelSettings() == null || (b.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop || b.labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideBottom);
        var g = 0;
        if (f) {
            g = b.ip()
        }
        var h = e.center().__x + a * Math.cos(g);
        var i = e.center().__y + a * Math.sin(g);
        h = $.ig.ViewportUtils.prototype.a(h, e.s(), e.r());
        i = $.ig.ViewportUtils.prototype.c(i, e.s(), e.r());
        if (h <= j.r().right() && h >= j.r().left() && ((i <= j.r().bottom() && i >= j.r().top()) || !f)) {
            return true
        }
        return false
    });
    c.ax(function (a, d) {
        var e = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, a);
        return new $.ig.LabelPosition($.ig.ViewportUtils.prototype.a(e.center().__x + d, e.s(), e.r()))
    });
    c.a2(function (a, d, e, f) {
        if (d < a.aa()) {
            return a.aa()
        } else {
            if (d > a.ab()) {
                return a.ab()
            }
        }
        return d
    });
    return c
}, getScaledValue: function (c, d) {
    return this.getScaledValue2(c)
}, iw: function (g, h, i, j, k) {
    var l = 0;
    if (h) {
        if (g <= 0) {
            l = (Math.log(this.actualMinimumValue()) - this.gz()) / (this.g0() - this.gz())
        } else {
            l = (Math.log(g) - this.gz()) / (this.g0() - this.gz())
        }
    } else {
        l = (g - this.actualMinimumValue()) / (this.actualMaximumValue() - this.actualMinimumValue())
    }
    if (i) {
        l = 1 - l
    }
    l = k + (l * (j - k));
    l /= 2;
    return l
}, getScaledValue2: function (b) {
    return this.iw(b, this.g1(), this.c1(), this.im(), this.io())
}, getUnscaledValue: function (c) {
    var d = c * 2;
    d = (d - this.io()) / (this.im() - this.io());
    if (this.isInverted()) {
        d = 1 - d
    }
    if (this.g1()) {
        return Math.exp(d * (this.g0() - this.gz()) + this.gz())
    } else {
        return this.actualMinimumValue() + d * (this.actualMaximumValue() - this.actualMinimumValue())
    }
}, radiusExtentScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericRadiusAxis.prototype.radiusExtentScaleProperty, b);
        return b
    } else {
        return this.b($.ig.NumericRadiusAxis.prototype.radiusExtentScaleProperty)
    }
}, _im: null, im: function (b) {
    if (arguments.length === 1) {
        this._im = b;
        return b
    } else {
        return this._im
    }
}, innerRadiusExtentScale: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.NumericRadiusAxis.prototype.innerRadiusExtentScaleProperty, b);
        return b
    } else {
        return this.b($.ig.NumericRadiusAxis.prototype.innerRadiusExtentScaleProperty)
    }
}, _io: null, io: function (b) {
    if (arguments.length === 1) {
        this._io = b;
        return b
    } else {
        return this._io
    }
}, eg: function (k, l, m, n) {
    switch (l) {
        case $.ig.NumericRadiusAxis.prototype.bq:
            this.ip(this.iv(this.crossingValue()) * Math.PI / 180);
            break
    }
    $.ig.NumericAxisBase.prototype.eg.call(this, k, l, m, n);
    switch (l) {
        case $.ig.NumericRadiusAxis.prototype.h2:
            this.im(this.radiusExtentScale());
            if (this.im() < 0) {
                this.im(0.1)
            }
            if (this.im() > 1) {
                this.im(1)
            }
            if (this.io() >= this.im()) {
                this.io(this.im() - 0.01);
                if (this.io() < 0) {
                    this.io(0);
                    this.im(0.01)
                }
            }
            this.c7(true);
            this.es(false);
            if (this.iq() != null) {
                this.iq().renderAxis()
            }
            var p = this.fl().getEnumerator();
            while (p.moveNext()) {
                var o = p.current();
                o.renderSeries(false)
            }
            break;
        case $.ig.NumericRadiusAxis.prototype.h3:
            this.io(this.innerRadiusExtentScale());
            if (this.io() < 0) {
                this.io(0.1)
            }
            if (this.io() > 1) {
                this.io(1)
            }
            if (this.io() >= this.im()) {
                this.io(this.im() - 0.01);
                if (this.io() < 0) {
                    this.io(0);
                    this.im(0.01)
                }
            }
            this.c7(true);
            this.es(false);
            if (this.iq() != null) {
                this.iq().renderAxis()
            }
            var r = this.fl().getEnumerator();
            while (r.moveNext()) {
                var q = r.current();
                q.dv(true);
                q.renderSeries(false)
            }
            if (this.seriesViewer() != null) {
                this.seriesViewer().i8()
            }
            break;
        case $.ig.NumericRadiusAxis.prototype.bp:
            var s = $.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, n);
            var t = $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, n);
            if (s == null && t == null) {
                this.i3(null)
            }
            if (s != null) {
                this.i3(s);
                s.ir(this)
            }
            if (t != null) {
                this.i3(t);
                t.h7(this)
            }
            this.c7(true);
            this.es(false);
            break;
        case $.ig.NumericRadiusAxis.prototype.bm:
            if (this.iq() != null) {
                this.iq().c7(true);
                this.iq().es(false)
            }
            break
    }
}, _ip: null, ip: function (b) {
    if (arguments.length === 1) {
        this._ip = b;
        return b
    } else {
        return this._ip
    }
}, i3: function (b) {
    this.iq(b)
}, h6: null, iq: function (d) {
    if (arguments.length === 1) {
        this.h6 = d;
        return d
    } else {
        var c = this;
        if (this.h6 != null) {
            return this.h6
        }
        var e = $.ig.util.cast($.ig.XamDataChart.prototype.$type, this.seriesViewer());
        if (e != null) {
            return e.axes().where$1($.ig.Axis.prototype.$type,function (a) {
                return $.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, a) !== null || $.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, a) !== null
            }).firstOrDefault$1($.ig.Axis.prototype.$type)
        }
        return this.h6
    }
}, hn: function () {
    return new $.ig.PolarAxisRenderingParameters()
}, hq: function (x, y) {
    var w = this;
    var z = $.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, $.ig.NumericAxisBase.prototype.hq.call(this, x, y));
    var A = this.h4.k(y);
    var B = this.h4.l(y);
    var C = 0.5 * this.im();
    var D = 0.5 * this.io();
    var E, F;
    if (y == $.ig.SeriesViewer.prototype.de) {
        F = this.actualMaximumValue();
        E = this.actualMinimumValue()
    } else {
        F = Math.min(B, C);
        E = this.getUnscaledValue(A);
        F = this.getUnscaledValue(F);
        (function () {
            var a = w.i6(x, y, E, F);
            E = a.visibleMinimum;
            F = a.visibleMaximum;
            return a.ret
        }())
    }
    var G = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var H = A;
    var I = B;
    var J = Math.min(x.width(), x.height()) * (this.im() - this.io()) / 2;
    z.center(G);
    var K = Math.max(I, H);
    var L = Math.min(H, I);
    z.maxLength(K);
    z.minLength(L);
    var M = Math.min(E, F);
    var N = Math.max(E, F);
    if (M < this.actualMinimumValue()) {
        M = this.actualMinimumValue()
    }
    if (N > this.actualMaximumValue()) {
        N = this.actualMaximumValue()
    }
    z.t().add((function () {
        var a = new $.ig.RangeInfo();
        a.f(M);
        a.g(N);
        a.i(J);
        return a
    }()));
    var O = $.ig.util.cast($.ig.IAngleScaler.prototype.$type, this.iq());
    if (O != null) {
        var P;
        var Q;
        (function () {
            var a = O.getMinMaxAngle(y, P, Q);
            P = a.minAngle;
            Q = a.maxAngle;
            return a.ret
        }());
        z.minAngle(Math.min(P, Q));
        z.maxAngle(Math.max(P, Q))
    }
    var R = this.i8();
    if (I >= C) {
        I = R
    }
    if (H < D) {
        H = D
    }
    z.minLength(H);
    z.maxLength(I);
    z.effectiveMaximum(R);
    z.v(this.actualTickmarkValues());
    var S = $.ig.util.cast($.ig.LinearTickmarkValues.prototype.$type, z.v());
    if (S != null) {
        S.ad(this.i7(G, z.minLength(), z.maxLength(), y, x))
    }
    return z
}, i6: function (j, k, l, m) {
    var n = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var o = 0;
    if (this.isInverted()) {
        o = this.getScaledValue2(this.actualMinimumValue())
    } else {
        o = this.getScaledValue2(this.actualMaximumValue())
    }
    var p = 0;
    if (this.crossingValue() != null) {
        p = this.ip()
    }
    var q = n.__x + o * Math.cos(p);
    var r = n.__y + o * Math.sin(p);
    n.__x = $.ig.ViewportUtils.prototype.a(n.__x, k, j);
    n.__y = $.ig.ViewportUtils.prototype.c(n.__y, k, j);
    q = $.ig.ViewportUtils.prototype.a(q, k, j);
    r = $.ig.ViewportUtils.prototype.c(r, k, j);
    if (q >= j.left() && q <= j.right() && r >= j.top() && r <= j.bottom()) {
        if (this.isInverted()) {
            m = this.actualMinimumValue()
        } else {
            m = this.actualMaximumValue()
        }
    }
    if (n.__x >= j.left() && n.__x <= j.right() && n.__y >= j.top() && n.__y <= j.bottom()) {
        if (this.isInverted()) {
            l = this.actualMaximumValue()
        } else {
            l = this.actualMinimumValue()
        }
    }
    return{visibleMinimum: l, visibleMaximum: m}
}, i7: function (h, i, j, k, l) {
    var m = $.ig.ViewportUtils.prototype.e(j - i, k, l);
    var n = m / Math.min(l.width(), l.height());
    if (n > 0.7) {
        return 10
    }
    return 5
}, i8: function () {
    var b = 0;
    if (!this.isInverted()) {
        b = this.getScaledValue2(this.actualMaximumValue())
    } else {
        b = this.getScaledValue2(this.actualMinimumValue())
    }
    return b
}, hl: function (b) {
    if (this.iq() != null) {
        this.iq().renderAxis()
    }
}, ey: function (d) {
    var e = this.seriesViewer() != null ? this.seriesViewer().actualWindowRect() : $.ig.Rect.prototype.empty();
    var f = !e.isEmpty() ? this.c2() : $.ig.Rect.prototype.empty();
    this.g3().ca(d, f, e)
}, d9: function (c, d) {
    $.ig.Axis.prototype.d9.call(this, c, d);
    if (d.height() != c.height() || d.width() != c.width()) {
        this.updateRange()
    }
}, i9: function (e, f, g) {
    var h = $.ig.util.cast($.ig.IPolarRadialRenderingParameters.prototype.$type, this.hq(f, g));
    if (h == null) {
        return
    }
    this.h4.b(e.d(), h.minLength(), h.maxLength(), f, g, h.center(), h.minAngle(), h.maxAngle())
}, dd: function () {
    return $.ig.AxisOrientation.prototype.radial
}, $type: new $.ig.Type("NumericRadiusAxis", $.ig.NumericAxisBase.prototype.$type)}, true);
$.ig.util.defType("NumericRadiusAxisView", "NumericAxisBaseView", {_bo: null, bo: function (b) {
    if (arguments.length === 1) {
        this._bo = b;
        return b
    } else {
        return this._bo
    }
}, init: function (b) {
    $.ig.NumericAxisBaseView.prototype.init.call(this, b);
    this.bo(b)
}, $type: new $.ig.Type("NumericRadiusAxisView", $.ig.NumericAxisBaseView.prototype.$type)}, true);
$.ig.util.defType("PolarAxes", "Object", {_d: null, d: function (b) {
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
}, init: function (c, d) {
    this.a = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    $.ig.Object.prototype.init.call(this);
    this.d(c);
    this.e(d)
}, a: null, j: function (g, h, i, j, k) {
    var l = this.a.__x + (h * k(g));
    return $.ig.ViewportUtils.prototype.a(l, i, j)
}, k: function (q, r, s, t, u, v, w, x, y, z) {
    var A = this.e().im(q, u, v);
    var B = this.d().iw(r, w, x, y, z);
    var C = this.a.__x;
    var D = this.a.__y;
    var E = C + (B * Math.cos(A));
    var F = D + (B * Math.sin(A));
    E = t.left() + t.width() * (E - s.left()) / s.width();
    F = t.top() + t.height() * (F - s.top()) / s.height();
    return{__x: E, __y: F, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, l: function (A, B, C, D, E, F, G, H) {
    var I = Math.min(B != null ? B.count() : 0, C != null ? C.count() : 0);
    A.clear();
    var J;
    var K;
    var L = this.a.__x;
    var M = this.a.__y;
    var N;
    var O;
    var P = Math.min(this.e().actualMinimumValue(), this.e().actualMaximumValue());
    var Q = Math.max(this.e().actualMinimumValue(), this.e().actualMaximumValue());
    var R = Math.min(this.d().actualMaximumValue(), this.d().actualMinimumValue());
    var S = Math.max(this.d().actualMaximumValue(), this.d().actualMinimumValue());
    var T = this.e().g1();
    var U = this.e().isInverted();
    var V = this.d().g1();
    var W = this.d().isInverted();
    var X = this.d().im();
    var Y = this.d().io();
    for (var Z = 0; Z < I; Z++) {
        if ((B.item(Z) <= Q && B.item(Z) >= P && C.item(Z) <= S && C.item(Z) >= R) || (isNaN(B.item(Z)) || isNaN(C.item(Z)))) {
            J = this.e().im(B.item(Z), T, U);
            K = this.d().iw(C.item(Z), V, W, X, Y);
            N = L + (K * F(Z, J));
            O = M + (K * G(Z, J));
            N = E.left() + E.width() * (N - D.left()) / D.width();
            O = E.top() + E.height() * (O - D.top()) / D.height();
            A.add({__x: N, __y: O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        } else {
            A.add({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, m: function (k, l, m, n, o, p) {
    var q = $.ig.ViewportUtils.prototype.b(k, m, n);
    var r = $.ig.ViewportUtils.prototype.d(l, m, n);
    var s = Math.sqrt(Math.pow(q - this.a.__x, 2) + Math.pow(r - this.a.__y, 2));
    var t = Math.acos((q - this.a.__x) / s);
    if ((r - this.a.__y) < 0) {
        t = (2 * Math.PI) - t
    }
    o = this.e().getUnscaledAngle(t);
    p = this.d().getUnscaledValue(s);
    return{unscaledAngle: o, unscaledRadius: p}
}, n: function (g, h, i, j, k) {
    var l = this.a.__y + (h * k(g));
    return $.ig.ViewportUtils.prototype.c(l, i, j)
}, $type: new $.ig.Type("PolarAxes", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PolarAxisRenderingManager", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (p, q, r, s, t, u) {
    var o = this;
    var v = $.ig.ViewportUtils.prototype.e(p, t, u);
    var w = $.ig.ViewportUtils.prototype.g(p, t, u);
    var x = $.ig.ViewportUtils.prototype.a(q.__x, t, u);
    var y = $.ig.ViewportUtils.prototype.c(q.__y, t, u);
    if (s - r < Math.PI && s - r > 0) {
        var z = {__x: $.ig.ViewportUtils.prototype.a(q.__x + p * Math.cos(r), t, u), __y: $.ig.ViewportUtils.prototype.c(q.__y + p * Math.sin(r), t, u), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var A = {__x: $.ig.ViewportUtils.prototype.a(q.__x + p * Math.cos(s), t, u), __y: $.ig.ViewportUtils.prototype.c(q.__y + p * Math.sin(s), t, u), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var B = new $.ig.PathFigure();
        B.__startPoint = z;
        B.__isClosed = false;
        B.__segments.add((function () {
            var a = new $.ig.ArcSegment();
            a.i(false);
            a.h(A);
            a.k(new $.ig.Size(v, w));
            a.j($.ig.SweepDirection.prototype.clockwise);
            return a
        }()));
        return B
    } else {
        var C = new $.ig.PathFigure();
        C.__startPoint = {__x: x, __y: y - w, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        C.__isClosed = true;
        C.__segments.add((function () {
            var a = new $.ig.ArcSegment();
            a.i(false);
            a.h({__x: x, __y: y + w, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            a.k(new $.ig.Size(v, w));
            a.j($.ig.SweepDirection.prototype.clockwise);
            return a
        }()));
        C.__segments.add((function () {
            var a = new $.ig.ArcSegment();
            a.i(false);
            a.h({__x: x, __y: y - w, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            a.k(new $.ig.Size(v, w));
            a.j($.ig.SweepDirection.prototype.clockwise);
            return a
        }()));
        return C
    }
}, b: function (w, x, y, z, A, B, C, D) {
    var v = this;
    var E = Math.min(x, y);
    var F = Math.max(x, y);
    var G = new $.ig.PathGeometry();
    var H = null;
    var I = null;
    var J = null;
    var K = null;
    if (E > 0) {
        H = this.a(E, B, C, D, A, z);
        if (D - C < Math.PI && D - C > 0) {
            var L = $.ig.util.cast($.ig.ArcSegment.prototype.$type, H.__segments.__inner[0]);
            if (L != null) {
                var M = {__x: $.ig.ViewportUtils.prototype.a(B.__x + F * Math.cos(D), A, z), __y: $.ig.ViewportUtils.prototype.c(B.__y + F * Math.sin(D), A, z), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                I = (function () {
                    var a = new $.ig.LineSegment(1);
                    a.d(M);
                    return a
                }())
            }
        }
    }
    if (F > 0) {
        J = this.a(F, B, C, D, A, z)
    }
    if (E > 0) {
        if (D - C < Math.PI && D - C > 0) {
            var N = J.__startPoint;
            var O = $.ig.util.cast($.ig.ArcSegment.prototype.$type, J.__segments.__inner[0]);
            if (O != null) {
                J.__startPoint = O.h();
                O.h(N);
                O.j($.ig.SweepDirection.prototype.counterclockwise);
                var P = {__x: $.ig.ViewportUtils.prototype.a(B.__x + E * Math.cos(C), A, z), __y: $.ig.ViewportUtils.prototype.c(B.__y + E * Math.sin(C), A, z), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                K = (function () {
                    var a = new $.ig.LineSegment(1);
                    a.d(P);
                    return a
                }())
            }
        }
    }
    if (I != null && K != null) {
        H.__segments.add(I);
        var Q = J.__segments.__inner[0];
        J.__segments.remove(Q);
        H.__segments.add(Q);
        H.__segments.add(K);
        H.__isClosed = true;
        G.d().add(H)
    } else {
        if (H != null) {
            G.d().add(H);
            this.c(J)
        }
        if (J != null) {
            G.d().add(J)
        }
    }
    w.add(G)
}, c: function (i) {
    if (i.__segments.count() > 1) {
        var j = $.ig.util.cast($.ig.ArcSegment.prototype.$type, i.__segments.__inner[0]);
        var k = $.ig.util.cast($.ig.ArcSegment.prototype.$type, i.__segments.__inner[1]);
        i.__segments.__inner[0] = k;
        i.__segments.__inner[1] = j;
        var l = k.h();
        var m = i.__startPoint;
        var n = j.h();
        i.__startPoint = l;
        k.h(n);
        j.h(m);
        j.j($.ig.SweepDirection.prototype.counterclockwise);
        k.j($.ig.SweepDirection.prototype.counterclockwise)
    } else {
        var o = i.__startPoint;
        var p = $.ig.util.cast($.ig.ArcSegment.prototype.$type, i.__segments.__inner[0]);
        if (p != null) {
            i.__startPoint = p.h();
            p.h(o);
            p.j($.ig.SweepDirection.prototype.counterclockwise)
        }
    }
}, d: function (i, j, k, l, m, n, o) {
    if (j > 0) {
        var p = new $.ig.PathGeometry();
        p.d().add(this.a(j, m, n, o, l, k));
        i.add(p)
    }
}, e: function (A, B, C, D, E, F, G, H) {
    var z = this;
    var I = Math.min(B, C);
    var J = Math.max(B, C);
    var K = false;
    if (J - I > Math.PI) {
        K = true
    }
    var L = Math.cos(I);
    var M = Math.sin(I);
    var N = H.__x + L * F;
    var O = H.__y + M * F;
    var P = H.__x + L * G;
    var Q = H.__y + M * G;
    var R = Math.cos(J);
    var S = Math.sin(J);
    var T = H.__x + R * F;
    var U = H.__y + S * F;
    var V = H.__x + R * G;
    var W = H.__y + S * G;
    N = $.ig.ViewportUtils.prototype.a(N, E, D);
    O = $.ig.ViewportUtils.prototype.c(O, E, D);
    P = $.ig.ViewportUtils.prototype.a(P, E, D);
    Q = $.ig.ViewportUtils.prototype.c(Q, E, D);
    T = $.ig.ViewportUtils.prototype.a(T, E, D);
    U = $.ig.ViewportUtils.prototype.c(U, E, D);
    V = $.ig.ViewportUtils.prototype.a(V, E, D);
    W = $.ig.ViewportUtils.prototype.c(W, E, D);
    var X = new $.ig.PathFigure();
    X.__startPoint = {__x: N, __y: O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    X.__isClosed = true;
    X.__segments.add((function () {
        var a = new $.ig.LineSegment(1);
        a.d({__x: P, __y: Q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    X.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h({__x: V, __y: W, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        a.k(new $.ig.Size($.ig.ViewportUtils.prototype.e(G, E, D), $.ig.ViewportUtils.prototype.g(G, E, D)));
        a.j($.ig.SweepDirection.prototype.clockwise);
        a.i(K);
        return a
    }()));
    X.__segments.add((function () {
        var a = new $.ig.LineSegment(1);
        a.d({__x: T, __y: U, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        return a
    }()));
    X.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h({__x: N, __y: O, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
        a.k(new $.ig.Size($.ig.ViewportUtils.prototype.e(F, E, D), $.ig.ViewportUtils.prototype.g(F, E, D)));
        a.j($.ig.SweepDirection.prototype.counterclockwise);
        a.i(K);
        return a
    }()));
    var Y = new $.ig.PathGeometry();
    Y.d().add(X);
    A.add(Y)
}, f: function (o, p, q, r, s, t, u) {
    var v = new $.ig.LineGeometry();
    var w = Math.cos(p);
    var x = Math.sin(p);
    var y = u.__x + w * s;
    var z = u.__y + x * s;
    var A = u.__x + w * t;
    var B = u.__y + x * t;
    y = $.ig.ViewportUtils.prototype.a(y, r, q);
    z = $.ig.ViewportUtils.prototype.c(z, r, q);
    A = $.ig.ViewportUtils.prototype.a(A, r, q);
    B = $.ig.ViewportUtils.prototype.c(B, r, q);
    v.e({__x: y, __y: z, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    v.f({__x: A, __y: B, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    o.add(v)
}, g: function (c, d) {
    return c.__x >= d.left() && c.__x <= d.right()
}, h: function (c, d) {
    return c.__y >= d.top() && c.__y <= d.bottom()
}, i: function (g, h) {
    var i = Math.sqrt(Math.pow(g.__x - h.left(), 2) + Math.pow(g.__y - h.top(), 2));
    var j = Math.sqrt(Math.pow(g.__x - h.right(), 2) + Math.pow(g.__y - h.top(), 2));
    var k = Math.sqrt(Math.pow(g.__x - h.right(), 2) + Math.pow(g.__y - h.bottom(), 2));
    var l = Math.sqrt(Math.pow(g.__x - h.left(), 2) + Math.pow(g.__y - h.bottom(), 2));
    return Math.min(i, Math.min(j, Math.min(k, l)))
}, j: function (g, h) {
    var i = Math.sqrt(Math.pow(g.__x - h.left(), 2) + Math.pow(g.__y - h.top(), 2));
    var j = Math.sqrt(Math.pow(g.__x - h.right(), 2) + Math.pow(g.__y - h.top(), 2));
    var k = Math.sqrt(Math.pow(g.__x - h.right(), 2) + Math.pow(g.__y - h.bottom(), 2));
    var l = Math.sqrt(Math.pow(g.__x - h.left(), 2) + Math.pow(g.__y - h.bottom(), 2));
    return Math.max(i, Math.max(j, Math.max(k, l)))
}, k: function (c) {
    var d = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    if (this.g(d, c) && this.h(d, c)) {
        return 0
    }
    if (this.g(d, c)) {
        if (d.__y < c.top()) {
            return c.top() - d.__y
        } else {
            return d.__y - c.bottom()
        }
    }
    if (this.h(d, c)) {
        if (d.__x < c.left()) {
            return c.left() - d.__x
        } else {
            return d.__x - c.right()
        }
    }
    return this.i(d, c)
}, l: function (c) {
    var d = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    return this.j(d, c)
}, m: function (e, f) {
    var g = Math.sqrt(Math.pow(f.__x - e.__x, 2) + Math.pow(f.__y - e.__y, 2));
    var h = Math.acos((f.__x - e.__x) / g);
    if ((f.__y - e.__y) < 0) {
        h = (2 * Math.PI) - h
    }
    return h
}, n: function (c, d) {
    return((c.__y - 0.5) * d.__x) + ((0.5 - c.__x) * d.__y) + ((c.__x * 0.5) - (0.5 * c.__y))
}, o: function (i, j, k) {
    var l = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    if (this.g(l, i) && this.h(l, i)) {
        j = 0;
        k = Math.PI * 2;
        return{minAngle: j, maxAngle: k}
    }
    var m = this.m(l, {__x: i.left(), __y: i.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    var n = this.m(l, {__x: i.right(), __y: i.top(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    var o = this.m(l, {__x: i.right(), __y: i.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    var p = this.m(l, {__x: i.left(), __y: i.bottom(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    if (this.h(l, i) && i.left() > l.__x) {
        j = m;
        k = 2 * Math.PI + p;
        return{minAngle: j, maxAngle: k}
    }
    j = Math.min(m, Math.min(n, Math.min(o, p)));
    k = Math.max(m, Math.max(n, Math.max(o, p)));
    return{minAngle: j, maxAngle: k}
}, p: function (w, x, y, z, A, B, C) {
    var v = this;
    var D;
    var E;
    (function () {
        var a = v.o(w, D, E);
        D = a.minAngle;
        E = a.maxAngle;
        return a.ret
    }());
    var F = Math.min(D, E);
    var G = Math.max(D, E);
    if ($.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, x) !== null) {
        ($.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, x)).minAngle(F);
        ($.ig.util.cast($.ig.PolarAxisRenderingParameters.prototype.$type, x)).maxAngle(G)
    } else {
        if ($.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, x) !== null) {
            ($.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, x)).minAngle(F);
            ($.ig.util.cast($.ig.RadialAxisRenderingParameters.prototype.$type, x)).maxAngle(G)
        }
    }
    if (D == 0 && E == Math.PI * 2) {
        var H = y;
        var I = z;
        var J = Math.min(H, I);
        var K = Math.max(H, I);
        x.t().add((function () {
            var a = new $.ig.RangeInfo();
            a.f(J);
            a.g(K);
            a.i(C);
            return a
        }()));
        return
    } else {
        if (E > Math.PI * 2) {
            E = E - Math.PI * 2
        }
        var L = B(D);
        var M = B(E);
        if (L < y || L > z) {
            L = B(D + Math.PI * 2)
        }
        if (M < y || M > z) {
            M = B(E + Math.PI * 2)
        }
        var N = Math.min(L, M);
        var O = Math.max(L, M);
        if ((!A && L > M) || (A && L < M)) {
            var P = (z - O);
            var Q = (N - y);
            x.t().add((function () {
                var a = new $.ig.RangeInfo();
                a.f(O);
                a.g(z);
                a.i((P / (P + Q)) * C);
                return a
            }()));
            x.t().add((function () {
                var a = new $.ig.RangeInfo();
                a.f(y);
                a.g(N);
                a.i((Q / (P + Q)) * C);
                return a
            }()))
        } else {
            x.t().add((function () {
                var a = new $.ig.RangeInfo();
                a.f(N);
                a.g(O);
                a.i(C);
                return a
            }()))
        }
    }
}, $type: new $.ig.Type("PolarAxisRenderingManager", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IPolarRadialRenderingParameters", "Object", {$type: new $.ig.Type("IPolarRadialRenderingParameters", null)}, true);
$.ig.util.defType("PolarAxisRenderingParameters", "NumericAxisRenderingParameters", {init: function () {
    $.ig.NumericAxisRenderingParameters.prototype.init.call(this)
}, _minLength: null, minLength: function (b) {
    if (arguments.length === 1) {
        this._minLength = b;
        return b
    } else {
        return this._minLength
    }
}, _maxLength: null, maxLength: function (b) {
    if (arguments.length === 1) {
        this._maxLength = b;
        return b
    } else {
        return this._maxLength
    }
}, _center: null, center: function (b) {
    if (arguments.length === 1) {
        this._center = b;
        return b
    } else {
        return this._center
    }
}, _minAngle: null, minAngle: function (b) {
    if (arguments.length === 1) {
        this._minAngle = b;
        return b
    } else {
        return this._minAngle
    }
}, _maxAngle: null, maxAngle: function (b) {
    if (arguments.length === 1) {
        this._maxAngle = b;
        return b
    } else {
        return this._maxAngle
    }
}, _crossingAngleRadians: null, crossingAngleRadians: function (b) {
    if (arguments.length === 1) {
        this._crossingAngleRadians = b;
        return b
    } else {
        return this._crossingAngleRadians
    }
}, _effectiveMaximum: null, effectiveMaximum: function (b) {
    if (arguments.length === 1) {
        this._effectiveMaximum = b;
        return b
    } else {
        return this._effectiveMaximum
    }
}, $type: new $.ig.Type("PolarAxisRenderingParameters", $.ig.NumericAxisRenderingParameters.prototype.$type, [$.ig.IPolarRadialRenderingParameters.prototype.$type])}, true);
$.ig.util.defType("RadialAxisRenderingParameters", "CategoryAxisRenderingParameters", {init: function () {
    $.ig.CategoryAxisRenderingParameters.prototype.init.call(this)
}, _minLength: null, minLength: function (b) {
    if (arguments.length === 1) {
        this._minLength = b;
        return b
    } else {
        return this._minLength
    }
}, _maxLength: null, maxLength: function (b) {
    if (arguments.length === 1) {
        this._maxLength = b;
        return b
    } else {
        return this._maxLength
    }
}, _center: null, center: function (b) {
    if (arguments.length === 1) {
        this._center = b;
        return b
    } else {
        return this._center
    }
}, _crossingAngleRadians: null, crossingAngleRadians: function (b) {
    if (arguments.length === 1) {
        this._crossingAngleRadians = b;
        return b
    } else {
        return this._crossingAngleRadians
    }
}, _minAngle: null, minAngle: function (b) {
    if (arguments.length === 1) {
        this._minAngle = b;
        return b
    } else {
        return this._minAngle
    }
}, _maxAngle: null, maxAngle: function (b) {
    if (arguments.length === 1) {
        this._maxAngle = b;
        return b
    } else {
        return this._maxAngle
    }
}, _effectiveMaximum: null, effectiveMaximum: function (b) {
    if (arguments.length === 1) {
        this._effectiveMaximum = b;
        return b
    } else {
        return this._effectiveMaximum
    }
}, $type: new $.ig.Type("RadialAxisRenderingParameters", $.ig.CategoryAxisRenderingParameters.prototype.$type, [$.ig.IPolarRadialRenderingParameters.prototype.$type])}, true);
$.ig.util.defType("RadialAxisLabelPanel", "HorizontalAxisLabelPanelBase", {init: function () {
    $.ig.HorizontalAxisLabelPanelBase.prototype.init.call(this);
    this.ed = new $.ig.List$1($.ig.Number.prototype.$type, 0)
}, b6: function () {
    return new $.ig.RadialAxisLabelPanelView(this)
}, b7: function (b) {
    $.ig.HorizontalAxisLabelPanelBase.prototype.b7.call(this, b);
    this.eh(b)
}, _eh: null, eh: function (b) {
    if (arguments.length === 1) {
        this._eh = b;
        return b
    } else {
        return this._eh
    }
}, _ei: null, ei: function (b) {
    if (arguments.length === 1) {
        this._ei = b;
        return b
    } else {
        return this._ei
    }
}, _ej: null, ej: function (b) {
    if (arguments.length === 1) {
        this._ej = b;
        return b
    } else {
        return this._ej
    }
}, ek: function () {
    return this.br().labelSettings() != null && (this.br().labelSettings().q() != $.ig.AxisLabelsLocation.prototype.insideBottom && this.br().labelSettings().q() != $.ig.AxisLabelsLocation.prototype.insideTop)
}, el: function () {
    return !this.ek()
}, d7: function () {
    return this.b0() && (!this.b1() || this.c9() == -180)
}, eb: function () {
    return !this.b2()
}, c8: function (b) {
    $.ig.AxisLabelPanelBase.prototype.c8.call(this, b);
    if (this.ej() % 360 == 0 || this.ek()) {
        this.eh().at()
    } else {
        this.eh().au(b)
    }
}, c9: function () {
    var b = $.ig.AxisLabelPanelBase.prototype.c9.call(this);
    if (this.el()) {
        b -= (this.ej() * 180) / Math.PI
    }
    return b
}, d6: function () {
    return this.c9() % 360 != 0
}, ec: function () {
    if (this.ek()) {
        return true
    }
    var b = this.ej() * 180 / Math.PI;
    if (b < 30 || b > 330 || (b > 150 && b < 210)) {
        return true
    }
    return false
}, ed: null, df: function (e, f) {
    var g = f * Math.PI / 180;
    var h = Math.abs(Math.sin(g));
    if (this.br().labelSettings() != null && this.br().labelSettings().q() == $.ig.AxisLabelsLocation.prototype.insideTop) {
        h = h * -1
    }
    this.eh().as(e, f, h)
}, eu: function () {
    var d = Number.MAX_VALUE;
    var f = this.bt().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        d = Math.min(e.b(), d)
    }
    return d
}, ev: function () {
    var d = -Number.MAX_VALUE;
    var f = this.bt().getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        d = Math.max(e.b(), d)
    }
    return d
}, d9: function (d) {
    var c = this;
    var f;
    if (this.br().isInverted()) {
        f = this.eu()
    } else {
        f = this.ev()
    }
    var g = ((this.bt()).where$1($.ig.LabelPosition.prototype.$type, function (a) {
        return a.b() == f
    })).select$2($.ig.LabelPosition.prototype.$type, $.ig.Number.prototype.$type, function (a) {
        return c.bt().indexOf(a)
    });
    this.ed = g.toList$1($.ig.Number.prototype.$type);
    this.b0(this.c4(d.where$1($.ig.LabelPosition.prototype.$type,function (a, b) {
        return !c.ed.contains(b)
    }).toList$1($.ig.Number.prototype.$type)))
}, da: function (c, d) {
    if (this.ed.contains(c)) {
        return false
    } else {
        return $.ig.AxisLabelPanelBase.prototype.da.call(this, c, d)
    }
}, ea: function () {
    this.ed = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    $.ig.HorizontalAxisLabelPanelBase.prototype.ea.call(this)
}, dj: function () {
    return $.ig.AxisLabelsLocation.prototype.insideBottom
}, dk: function (b) {
    return b == $.ig.AxisLabelsLocation.prototype.insideBottom || b == $.ig.AxisLabelsLocation.prototype.insideTop || b == $.ig.AxisLabelsLocation.prototype.outsideBottom || b == $.ig.AxisLabelsLocation.prototype.outsideTop
}, $type: new $.ig.Type("RadialAxisLabelPanel", $.ig.HorizontalAxisLabelPanelBase.prototype.$type)}, true);
$.ig.util.defType("RadialAxisLabelPanelView", "HorizontalAxisLabelPanelBaseView", {_ap: null, ap: function (b) {
    if (arguments.length === 1) {
        this._ap = b;
        return b
    } else {
        return this._ap
    }
}, init: function (b) {
    $.ig.HorizontalAxisLabelPanelBaseView.prototype.init.call(this, b);
    this.ap(b)
}, as: function (d, e, f) {
}, at: function () {
}, au: function (b) {
}, ac: function () {
    $.ig.AxisLabelPanelBaseView.prototype.ac.call(this);
    this.g().de(new $.ig.Size(this.g().bv().width(), this.g().bv().height()))
}, $type: new $.ig.Type("RadialAxisLabelPanelView", $.ig.HorizontalAxisLabelPanelBaseView.prototype.$type)}, true);
$.ig.util.defType("CategoryTickmarkValues", "TickmarkValues", {init: function () {
    $.ig.TickmarkValues.prototype.init.call(this)
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
}, o: function (j) {
    $.ig.TickmarkValues.prototype.o.call(this, j);
    var k = j.aa();
    this.ai(k);
    this.aj(j.ab());
    this.ak(j.ac());
    this.al(j.ad());
    this.am(j.ae());
    this.an(j.ah());
    var l = new $.ig.LinearCategorySnapper(1, j.r(), j.s(), j.v(), j.x(), k);
    var m = l.g();
    if (j.y() != -1) {
        m = j.y()
    }
    var n = Math.floor((j.r() - j.t()) / m);
    var o = Math.ceil((j.s() - j.t()) / m);
    var p = n;
    var q = o;
    var r = l.h();
    if (j.z() != -1) {
        r = j.z()
    }
    this.k(m);
    this.l(p);
    this.m(q);
    this.n(r);
    this.ao(j.t())
}, _ao: null, ao: function (b) {
    if (arguments.length === 1) {
        this._ao = b;
        return b
    } else {
        return this._ao
    }
}, x: function () {
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
                            this.$a = this.$this.l();
                            this.$state = 5;
                            break;
                        case 2:
                            this.$b = this.$this.ao() + this.$a * this.$this.k();
                            this.$current = this.$b;
                            this.$state = 3;
                            return true;
                        case 3:
                            this.$state = 4;
                            break;
                        case 4:
                            ++this.$a;
                            this.$state = 5;
                            break;
                        case 5:
                            if (this.$a <= this.$this.m()) {
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
    return new $.ig.GenericEnumerable$1(Number, a)
}, y: function () {
    var b = this;
    var a = function () {
        return function () {
            return{$state: 0, $this: b, $current: null, $a: 0, getEnumerator: function () {
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
                            this.$a = Math.min(this.$this.k(), 20);
                            this.$state = 1;
                            break;
                        case 1:
                            this.$b = this.$this.l();
                            this.$state = 18;
                            break;
                        case 2:
                            this.$state = 3;
                            break;
                        case 3:
                            if (this.$this.ai() != $.ig.CategoryMode.prototype.mode0 && this.$this.aj() != 0) {
                                this.$state = 4
                            } else {
                                this.$state = 16
                            }
                            break;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            this.$c = 0;
                            this.$state = 14;
                            break;
                        case 6:
                            this.$state = 7;
                            break;
                        case 7:
                            this.$d = 0;
                            this.$state = 11;
                            break;
                        case 8:
                            this.$e = this.$this.an()(this.$d);
                            this.$f = this.$c + (this.$b * this.$this.k()) + this.$e;
                            this.$current = this.$f;
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
                            if (this.$d < this.$this.aj()) {
                                this.$state = 8
                            } else {
                                this.$state = 12
                            }
                            break;
                        case 12:
                            this.$state = 13;
                            break;
                        case 13:
                            this.$c++;
                            this.$state = 14;
                            break;
                        case 14:
                            if (this.$c < this.$a) {
                                this.$state = 6
                            } else {
                                this.$state = 15
                            }
                            break;
                        case 15:
                            this.$state = 16;
                            break;
                        case 16:
                            this.$state = 17;
                            break;
                        case 17:
                            ++this.$b;
                            this.$state = 18;
                            break;
                        case 18:
                            if (this.$b < this.$this.m()) {
                                this.$state = 2
                            } else {
                                this.$state = 19
                            }
                            break;
                        case 19:
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
}, $type: new $.ig.Type("CategoryTickmarkValues", $.ig.TickmarkValues.prototype.$type)}, true);
$.ig.util.defType("ViewportUtils", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (d, e, f) {
    return f.left() + f.width() * (d - e.left()) / e.width()
}, b: function (d, e, f) {
    return((d - f.left()) * e.width() / f.width()) + e.left()
}, c: function (d, e, f) {
    return f.top() + f.height() * (d - e.top()) / e.height()
}, d: function (d, e, f) {
    return((d - f.top()) * e.height() / f.height()) + e.top()
}, e: function (d, e, f) {
    return f.width() * d / e.width()
}, f: function (d, e, f) {
    return e.width() * d / f.width()
}, g: function (d, e, f) {
    return f.height() * d / e.height()
}, $type: new $.ig.Type("ViewportUtils", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("PathRenderer", "Object", {_c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, init: function (a) {
    if (a > 0) {
        switch (a) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    $.ig.Object.prototype.init.call(this);
    this.d($.ig.UnknownValuePlotting.prototype.dontPlot)
}, init1: function (c, b) {
    $.ig.Object.prototype.init.call(this);
    this.c(b)
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, i: function (i, j, k) {
    var l = $.ig.NaNSegmenter.prototype.a(j, this.d());
    var m = this.j(l, k);
    var n = new $.ig.PathGeometry();
    var p = m.getEnumerator();
    while (p.moveNext()) {
        var o = p.current();
        n.d().add(o)
    }
    i.bp(n)
}, j: function (e, f) {
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
                            this.$d = g.getEnumerator();
                            this.$state = 7;
                            break;
                        case 2:
                            this.$c = this.$d.current();
                            this.$state = 3;
                            break;
                        case 3:
                            if (this.$c.take$1($.ig.Point.prototype.$type, 2).count$1($.ig.Point.prototype.$type) >= 2) {
                                this.$state = 4
                            } else {
                                this.$state = 6
                            }
                            break;
                        case 4:
                            this.$e = new $.ig.PathFigure();
                            this.$f = this.$c.first$1($.ig.Point.prototype.$type);
                            this.$e.__startPoint = this.$f;
                            this.$g = this.$this.k(this.$c, h);
                            this.$e.__segments.add(this.$g);
                            this.$current = this.$e;
                            this.$state = 5;
                            return true;
                        case 5:
                            this.$state = 6;
                            break;
                        case 6:
                            this.$state = 7;
                            break;
                        case 7:
                            if (this.$d.moveNext()) {
                                this.$state = 2
                            } else {
                                this.$state = 8
                            }
                            break;
                        case 8:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1($.ig.PathFigure.prototype.$type, c)
}, k: function (h, i) {
    var j = new $.ig.PolyLineSegment();
    if (this.c() == null) {
        var l = h.skip$1($.ig.Point.prototype.$type, 1).getEnumerator();
        while (l.moveNext()) {
            var k = l.current();
            j.__points.add(k)
        }
    } else {
        var n = this.c().flatten(h, i).skip$1($.ig.Point.prototype.$type, 1).getEnumerator();
        while (n.moveNext()) {
            var m = n.current();
            j.__points.add(m)
        }
    }
    return j
}, $type: new $.ig.Type("PathRenderer", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("NaNSegmenter", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (e, f) {
    var d = this;
    var c = function () {
        return function (g, h) {
            return{$state: 0, $this: d, $current: null, $c: null, $d: null, $e: null, getEnumerator: function () {
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
                            this.$c = g.getEnumerator();
                            this.$d = new $.ig.List$1($.ig.Point.prototype.$type, 0);
                            this.$e = true;
                            this.$state = 1;
                            break;
                        case 1:
                            this.$state = 12;
                            break;
                        case 2:
                            this.$state = 3;
                            break;
                        case 3:
                            if ($.ig.NaNSegmenter.prototype.b(this.$c.current())) {
                                this.$state = 4
                            } else {
                                this.$state = 10
                            }
                            break;
                        case 4:
                            this.$state = 5;
                            break;
                        case 5:
                            if (!this.$e && h == $.ig.UnknownValuePlotting.prototype.dontPlot) {
                                this.$state = 6
                            } else {
                                this.$state = 8
                            }
                            break;
                        case 6:
                            this.$e = true;
                            this.$f = this.$d;
                            this.$d = new $.ig.List$1($.ig.Point.prototype.$type, 0);
                            this.$current = new $.ig.ReadOnlyCollection$1($.ig.Point.prototype.$type, 1, this.$f);
                            this.$state = 7;
                            return true;
                        case 7:
                            this.$state = 9;
                            break;
                        case 8:
                            continue;
                            this.$state = 9;
                            break;
                        case 9:
                            this.$state = 11;
                            break;
                        case 10:
                            this.$e = false;
                            this.$d.add(this.$c.current());
                            this.$state = 11;
                            break;
                        case 11:
                            this.$state = 12;
                            break;
                        case 12:
                            if (this.$c.moveNext()) {
                                this.$state = 2
                            } else {
                                this.$state = 13
                            }
                            break;
                        case 13:
                            this.$current = new $.ig.ReadOnlyCollection$1($.ig.Point.prototype.$type, 1, this.$d);
                            this.$state = 14;
                            return true;
                        case 14:
                            this.$state = -2;
                            break;
                        case -2:
                            return false
                    }
                } while (this.$state > 0)
            }}
        }(e, f)
    };
    return new $.ig.GenericEnumerable$1($.ig.IList$1.prototype.$type.specialize($.ig.Point.prototype.$type), c)
}, b: function (b) {
    return(isNaN(b.__x) || isNaN(b.__y) || Number.isInfinity(b.__x) || Number.isInfinity(b.__y))
}, c: function (b) {
    return !$.ig.NaNSegmenter.prototype.b(b)
}, $type: new $.ig.Type("NaNSegmenter", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("IFlattener", "Object", {$type: new $.ig.Type("IFlattener", null)}, true);
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
$.ig.util.defType("SeriesRenderingArguments", "Object", {init: function (e, f, g, h) {
    $.ig.Object.prototype.init.call(this);
    this.h(e.transitionDuration());
    this.j(e);
    this.f(f);
    this.g(g);
    this.i(h)
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
}, $type: new $.ig.Type("SeriesRenderingArguments", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("SeriesRenderer$2", "Object", {$tFrame: null, $tView: null, _g: null, g: function (b) {
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
}, init: function (f, g, l, h, i, j, k) {
    if (l > 0) {
        switch (l) {
            case 1:
                this.init1.apply(this, arguments);
                break
        }
        return
    }
    var e = this;
    this.$tFrame = f;
    this.$tView = g;
    this.$type = this.$type.specialize(this.$tFrame, this.$tView);
    $.ig.Object.prototype.init.call(this);
    this.g(h);
    this.h(i);
    this.i(function (a) {
    });
    this.k(j);
    this.j(k)
}, init1: function (g, h, n, i, j, k, l, m) {
    var f = this;
    this.$tFrame = g;
    this.$tView = h;
    this.$type = this.$type.specialize(this.$tFrame, this.$tView);
    $.ig.Object.prototype.init.call(this);
    this.g(i);
    this.h(j);
    this.i(m);
    this.k(k);
    this.j(l)
}, v: function (h, i, j, k, l) {
    var m = 0;
    m = h.h();
    if (h.i() && m > 0) {
        var n = i;
        if (this.k()()) {
            i = k;
            k = n
        } else {
            i = j;
            j = n
        }
        this.i()(j);
        this.g()(j, l);
        this.j()()
    } else {
        this.i()(j);
        this.g()(j, l);
        this.h()(j, l)
    }
    return{previousFrame: i, currentFrame: j, transitionFrame: k}
}, $type: new $.ig.Type("SeriesRenderer$2", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("PolarTrendLineManager", "TrendLineManagerBase$1", {init: function () {
    $.ig.TrendLineManagerBase$1.prototype.init.call(this, $.ig.Point.prototype.$type)
}, ar: function (s, x, y, z, A, B, C, D, E, F, G) {
    var r = this;
    var H = F;
    var I = G;
    var J = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    if (!D.l().isEmpty() && !D.k().isEmpty()) {
        var K = null;
        var L = null;
        if (y != null) {
            K = y.toList$1(Number)
        }
        if (z != null) {
            L = z.toList$1(Number)
        }
        var M = 0;
        if (K != null) {
            M = K.count()
        }
        if (L != null) {
            M = Math.min(M, L.count())
        }
        if (x == $.ig.TrendLineType.prototype.none) {
            this.m(null);
            this.l().clear();
            return
        }
        if (this.u(x)) {
            this.l().clear();
            this.m($.ig.TrendFitCalculator.prototype.a(J, x, D, this.m(), M, function (a) {
                return K.item(a)
            }, function (a) {
                return L.item(a)
            }, B, C, H, I))
        }
        if (this.v(x)) {
            this.m(null);
            $.ig.TrendAverageCalculator.prototype.c(x, this.l(), y, z, A);
            var O = this.l().getEnumerator();
            while (O.moveNext()) {
                var N = O.current();
                var P = B(N.__x);
                var Q = C(N.__y);
                if (!isNaN(P) && !isNaN(Q)) {
                    J.add({__x: P, __y: Q, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
                }
            }
        }
        if (J.count() > 0) {
            this.y(J, D, s, E)
        }
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
}, _ao: null, ao: function (b) {
    if (arguments.length === 1) {
        this._ao = b;
        return b
    } else {
        return this._ao
    }
}, _ap: null, ap: function (b) {
    if (arguments.length === 1) {
        this._ap = b;
        return b
    } else {
        return this._ap
    }
}, _aq: null, aq: function (b) {
    if (arguments.length === 1) {
        this._aq = b;
        return b
    } else {
        return this._aq
    }
}, y: function (f, g, h, j) {
    var e = this;
    if (j != null) {
        j.h(h)
    }
    var k = (function () {
        var a = new $.ig.PolarLinePlanner();
        a.q(function (b) {
            return f.item(b).__x
        });
        a.r(function (b) {
            return f.item(b).__y
        });
        a.y(j);
        a.v(f.count());
        a.u(g.m());
        a.s(function (b) {
            return e.ap()(f.item(b).__x, f.item(b).__y)
        });
        a.t(function (b) {
            return e.aq()(f.item(b).__x, f.item(b).__y)
        });
        a.o(e.al());
        a.p(e.am());
        a.w(g.k());
        a.x(g.l());
        return a
    }());
    k.bf()
}, $type: new $.ig.Type("PolarTrendLineManager", $.ig.TrendLineManagerBase$1.prototype.$type.specialize($.ig.Point.prototype.$type))}, true);
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
$.ig.util.defType("PolarBase", "MarkerSeries", {ed: function () {
    return new $.ig.PolarBaseView(this)
}, ea: function (b) {
    $.ig.MarkerSeries.prototype.ea.call(this, b);
    this.jt(b)
}, _jt: null, jt: function (b) {
    if (arguments.length === 1) {
        this._jt = b;
        return b
    } else {
        return this._jt
    }
}, iz: null, init: function () {
    this.i4 = new $.ig.PolarFrame();
    this.i5 = new $.ig.PolarFrame();
    this.i6 = new $.ig.PolarFrame();
    $.ig.MarkerSeries.prototype.init.call(this);
    this.i5.a9(this.kd.on(this));
    this.i4.a9(this.kd.on(this));
    this.i6.a9(this.kd.on(this));
    this.jw(new $.ig.SeriesRenderer$2($.ig.PolarFrame.prototype.$type, $.ig.PolarBaseView.prototype.$type, 0, this.kg.on(this), this.kh.on(this), this.fo.on(this), this.fp.on(this)))
}, j1: function () {
    var a = this;
    this.i7.l(this.iz.a7(), this.jx(), this.jy(), this.i0, this.i1, function (c, d) {
        return Math.cos(d)
    }, function (b, e) {
        return Math.sin(e)
    })
}, _ju: null, ju: function (b) {
    if (arguments.length === 1) {
        this._ju = b;
        return b
    } else {
        return this._ju
    }
}, _jv: null, jv: function (b) {
    if (arguments.length === 1) {
        this._jv = b;
        return b
    } else {
        return this._jv
    }
}, i0: null, i1: null, _jw: null, jw: function (b) {
    if (arguments.length === 1) {
        this._jw = b;
        return b
    } else {
        return this._jw
    }
}, angleMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.angleMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.angleMemberPathProperty)
    }
}, radiusMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.radiusMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.radiusMemberPathProperty)
    }
}, jx: function (c) {
    if (arguments.length === 1) {
        if (this.i2 != c) {
            var d = this.jx();
            this.i2 = c;
            this.ej($.ig.PolarBase.prototype.is, d, this.jx())
        }
        return c
    } else {
        return this.i2
    }
}, i2: null, jy: function (c) {
    if (arguments.length === 1) {
        if (this.i3 != c) {
            var d = this.jy();
            this.i3 = c;
            this.ej($.ig.PolarBase.prototype.it, d, this.jy())
        }
        return c
    } else {
        return this.i3
    }
}, i3: null, angleAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.angleAxisProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.angleAxisProperty)
    }
}, radiusAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.radiusAxisProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.radiusAxisProperty)
    }
}, useCartesianInterpolation: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.useCartesianInterpolationProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.useCartesianInterpolationProperty)
    }
}, maximumMarkers: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.maximumMarkersProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.maximumMarkersProperty)
    }
}, trendLineType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.trendLineTypeProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.trendLineTypeProperty)
    }
}, trendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.trendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.trendLineBrushProperty)
    }
}, actualTrendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.actualTrendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.actualTrendLineBrushProperty)
    }
}, trendLineThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.trendLineThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.trendLineThicknessProperty)
    }
}, trendLineDashCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.trendLineDashCapProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.trendLineDashCapProperty)
    }
}, trendLineDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.trendLineDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.trendLineDashArrayProperty)
    }
}, trendLinePeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.trendLinePeriodProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.trendLinePeriodProperty)
    }
}, trendLineZIndex: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.trendLineZIndexProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.trendLineZIndexProperty)
    }
}, clipSeriesToBounds: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarBase.prototype.clipSeriesToBoundsProperty, b);
        return b
    } else {
        return this.b($.ig.PolarBase.prototype.clipSeriesToBoundsProperty)
    }
}, i4: null, i5: null, i6: null, i7: null, fs: function () {
    $.ig.Series.prototype.fs.call(this);
    if (this.radiusAxis() != null) {
        this.radiusAxis().es(false)
    }
    if (this.angleAxis() != null) {
        this.angleAxis().es(false)
    }
}, fc: function (f, g, h, i) {
    var j = false;
    this.jt().db().ad(f, g, h, i);
    if (this.angleAxis() != null && !this.angleAxis().updateRange()) {
        j = true
    }
    if (this.radiusAxis() != null && !this.radiusAxis().updateRange()) {
        j = true
    }
    if (j) {
        this.renderSeries(true)
    }
}, ez: function (c, d) {
    this.renderSeries(false)
}, ey: function (c, d) {
    this.renderSeries(false)
}, es: function (e, f, g) {
    var h = true;
    if (!$.ig.Series.prototype.es.call(this, e, f, g) || !g.cc() || f.isEmpty() || e.isEmpty() || this.angleAxis() == null || this.radiusAxis() == null || this.jx() == null || this.jy() == null || this.jx().count() == 0 || this.jy().count() == 0 || this.dx() == null || this.dx().g() != this.jx().count() || this.dx().g() != this.jy().count() || this.i7 == null || this.angleAxis().seriesViewer() == null || this.radiusAxis().seriesViewer() == null || this.angleAxis().actualMinimumValue() == this.angleAxis().actualMaximumValue() || this.radiusAxis().actualMinimumValue() == this.radiusAxis().actualMaximumValue()) {
        h = false
    }
    return h
}, eo: function (f) {
    var e = this;
    var g;
    var h;
    (function () {
        var a = e.getViewInfo(h, g);
        h = a.viewportRect;
        g = a.windowRect;
        return a.ret
    }());
    if (!this.es(h, g, this.view())) {
        this.eu(true, this.view());
        return
    }
    this.i0 = g;
    this.i1 = h;
    this.jv(new $.ig.PolarAxisInfoCache(this.angleAxis(), this.radiusAxis(), this.dx()));
    var i = new $.ig.SeriesRenderingArguments(this, h, g, f);
    (function () {
        var a = e.jw().v(i, e.i4, e.i6, e.i5, e.jt());
        e.i4 = a.previousFrame;
        e.i6 = a.currentFrame;
        e.i5 = a.transitionFrame;
        return a.ret
    }())
}, kd: function (c) {
    var d = this.i7.k(c.__x, c.__y, this.i0, this.i1, this.jv().l(), this.jv().n(), this.jv().m(), this.jv().o(), this.jv().q(), this.jv().r());
    return d
}, em: function (b) {
    if (b != null && b == this.angleAxis() && this.jx() != null) {
        return new $.ig.AxisRange(this.jx().minimum(), this.jx().maximum())
    }
    if (b != null && b == this.radiusAxis() && this.jy() != null) {
        return new $.ig.AxisRange(this.jy().minimum(), this.jy().maximum())
    }
    return null
}, scrollIntoView: function (i) {
    var j = this.view().ac();
    var k = this.view().ab();
    var l = !j.isEmpty() && !k.isEmpty() && this.dx() != null ? this.dx().item1(i) : -1;
    if (this.angleAxis() == null || this.jx() == null || this.radiusAxis() == null || this.jy() == null) {
        return false
    }
    if (l < 0 || l > this.jx().count() - 1 || l > this.jy().count() - 1) {
        return false
    }
    var m = this.angleAxis().getScaledAngle1(this.jx().item(l));
    var n = this.radiusAxis().getScaledValue2(this.jy().item(l));
    var o = 0.5 + (Math.cos(m) * n);
    var p = 0.5 + (Math.sin(m) * n);
    if (!isNaN(o)) {
        if (o < j.left() + 0.1 * j.width()) {
            o = o + 0.4 * j.width();
            j.x(o - 0.5 * j.width())
        }
        if (o > j.right() - 0.1 * j.width()) {
            o = o - 0.4 * j.width();
            j.x(o - 0.5 * j.width())
        }
    }
    if (!isNaN(p)) {
        if (p < j.top() + 0.1 * j.height()) {
            p = p + 0.4 * j.height();
            j.y(p - 0.5 * j.height())
        }
        if (p > j.bottom() - 0.1 * j.height()) {
            p = p - 0.4 * j.height();
            j.y(p - 0.5 * j.height())
        }
    }
    if (this.syncLink() != null) {
        this.syncLink().bp(this.seriesViewer(), j)
    }
    return l >= 0
}, eh: function (b) {
    return null
}, eg: function (b) {
    return -1
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.MarkerSeries.prototype.e6.call(this, f, g, h, i);
    if (this.jt().db().ae(f, g, h, i, this.trendLineDashArray())) {
        this.renderSeries(false);
        this.e5()
    }
    switch (g) {
        case $.ig.PolarBase.prototype.be:
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).ac(this.jx());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).ac(this.jy());
                this.jx(null);
                this.jy(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i) != null) {
                this.jx(this.gs(this.angleMemberPath()));
                this.jy(this.gs(this.radiusMemberPath()))
            }
            if ((this.radiusAxis() != null && !this.radiusAxis().updateRange()) || (this.angleAxis() != null && !this.angleAxis().updateRange())) {
                this.renderSeries(false)
            }
            break;
        case $.ig.PolarBase.prototype.iu:
            if (this.angleAxis() != null && this.radiusAxis() != null) {
                this.i7 = new $.ig.PolarAxes(this.radiusAxis(), this.angleAxis())
            }
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            if (this.angleAxis() != null && !this.angleAxis().updateRange()) {
                this.renderSeries(false)
            } else {
                if (h != null && i == null) {
                    this.eu(true, this.view())
                }
            }
            break;
        case $.ig.PolarBase.prototype.iv:
            if (this.angleAxis() != null && this.radiusAxis() != null) {
                this.i7 = new $.ig.PolarAxes(this.radiusAxis(), this.angleAxis())
            }
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            if (this.radiusAxis() != null && !this.radiusAxis().updateRange()) {
                this.renderSeries(false)
            } else {
                if (h != null && i == null) {
                    this.eu(true, this.view())
                }
            }
            if (this.angleAxis() != null && !this.angleAxis().updateRange()) {
                this.angleAxis().ed()
            }
            break;
        case $.ig.PolarBase.prototype.iq:
            if (this.dx() != null) {
                this.dx().ac(this.jx());
                this.jx(this.gs(this.angleMemberPath()))
            }
            break;
        case $.ig.PolarBase.prototype.is:
            this.jt().db().ac();
            if (this.angleAxis() != null && !this.angleAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.PolarBase.prototype.ir:
            if (this.dx() != null) {
                this.dx().ac(this.jy());
                this.jy(this.gs(this.radiusMemberPath()))
            }
            break;
        case $.ig.PolarBase.prototype.it:
            this.jt().db().ac();
            if (this.radiusAxis() != null && !this.radiusAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.PolarBase.prototype.iw:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.PolarBase.prototype.ix:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.PolarBase.prototype.bo:
            this.jv(new $.ig.PolarAxisInfoCache(this.angleAxis(), this.radiusAxis(), this.dx()));
            this.i0 = this.view().ac();
            this.i1 = this.view().ab();
            this.i5.a8(this.useCartesianInterpolation());
            this.i5.a(this.dz(), this.i4, this.i6);
            if (this.ew(this.view())) {
                return
            }
            if (this.dz() == 1) {
                this.kh(this.i6, this.jt())
            } else {
                this.kh(this.i5, this.jt())
            }
            break;
        case $.ig.PolarBase.prototype.b6:
            this.fj();
            break;
        case $.ig.PolarBase.prototype.iy:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.PolarBase.prototype.b4:
            this.e5();
            break
    }
}, eu: function (d, e) {
    $.ig.Series.prototype.eu.call(this, d, e);
    var f = e;
    if (d) {
        f.dc().clear()
    }
    f.db().ab()
}, ke: function (i, j) {
    var h = this;
    var k = i.top() - 10;
    var l = i.bottom() + 10;
    var m = i.left() - 10;
    var n = i.right() + 10;
    var o = (function () {
        var a = new $.ig.Clipper(1, m, l, n, k, false);
        a.h(j);
        return a
    }());
    return o
}, kf: function (k, l, m, n) {
    var j = this;
    k.u(new $.ig.Dictionary$2($.ig.Object.prototype.$type, $.ig.OwnedPoint.prototype.$type, 1, l));
    var o = this.dx();
    for (var p = 0; p < l; p++) {
        var q = k.a7().__inner[p];
        if (!Number.isInfinity(q.__x) && !Number.isInfinity(q.__y)) {
            var r = {__x: this.jx().item(p), __y: this.jy().item(p), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
            var s = {__x: q.__x, __y: q.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
            k.u().add(o.item(p), (function () {
                var a = new $.ig.OwnedPoint();
                a.e(o.item(p));
                a.f(r);
                a.d(s);
                return a
            }()))
        }
    }
}, kg: function (j, k) {
    var i = this;
    var l = k.ac();
    var m = k.ab();
    j.t().clear();
    j.w().clear();
    var n = Math.min(this.jx() != null ? this.jx().count() : 0, this.jy() != null ? this.jy().count() : 0);
    if (n < 1) {
        return
    }
    this.jv(new $.ig.PolarAxisInfoCache(this.angleAxis(), this.radiusAxis(), this.dx()));
    this.iz = j;
    this.i1 = m;
    this.i0 = l;
    k.da().y(j.t(), this.maximumMarkers(), l, m, this.resolution());
    if (n <= this.maximumMarkers()) {
        this.kf(j, n, l, m)
    }
    var o = this.ke(m, j.w());
    var p = Math.min(this.angleAxis().actualMinimumValue(), this.angleAxis().actualMaximumValue());
    var q = Math.max(this.angleAxis().actualMaximumValue(), this.angleAxis().actualMinimumValue());
    k.db().al(this.useCartesianInterpolation());
    k.db().am($.ig.UnknownValuePlotting.prototype.linearInterpolate);
    k.db().an(this.radiusAxis().im());
    k.db().ao(this.radiusAxis().io());
    k.db().ap(function (a, b) {
        return i.i7.j(a, b, l, m, Math.cos)
    });
    k.db().aq(function (a, b) {
        return i.i7.n(a, b, l, m, Math.sin)
    });
    k.db().ar(j.w(), this.trendLineType(), ((this.jx()).where$1(Number, function (a) {
        return a <= q && a >= p
    })), this.jy(), this.trendLinePeriod(), this.angleAxis().getScaledAngle1.on(this.angleAxis()), this.radiusAxis().getScaledValue2.on(this.radiusAxis()), (function () {
        var a = new $.ig.TrendResolutionParams();
        a.m(i.resolution());
        a.k(m);
        a.l(l);
        return a
    }()), o, p, q)
}, kh: function (f, g) {
    var h = g.ac();
    var i = g.ab();
    this.jv(new $.ig.PolarAxisInfoCache(this.angleAxis(), this.radiusAxis(), this.dx()));
    g.da().z(f.t(), this.useLightweightMarkers());
    g.c1();
    var j = this.ke(i, g.db().n().bn());
    g.db().w(f.w(), j);
    this.ki(i, h, g)
}, ki: function (d, e, f) {
    f.dn(d, e)
}, fj: function () {
    $.ig.MarkerSeries.prototype.fj.call(this);
    if (this.index() < 0) {
        return
    }
    this.jt().dp()
}, er: function (e, f) {
    $.ig.Series.prototype.er.call(this, e, f);
    if (!this.dv()) {
        this.view().b4(f);
        return
    }
    this.view().b4(f);
    if (this.ew(this.dt())) {
        return
    }
    var g = this.dt();
    var h = new $.ig.PolarFrame();
    this.kg(h, g);
    this.kh(h, g);
    this.dv(false)
}, kj: function (h, i) {
    var j = new $.ig.List$1($.ig.Object.prototype.$type, 0);
    var l = i.i().getEnumerator();
    while (l.moveNext()) {
        var k = l.current();
        if (!h.containsKey(k)) {
            j.add1(k)
        }
    }
    var n = j.getEnumerator();
    while (n.moveNext()) {
        var m = n.current();
        i.u(m)
    }
}, kk: function (d, e, f) {
    this.j1();
    return this.iz.a7().x()
}, kl: function (f) {
    var g = new $.ig.List$1($.ig.Number.prototype.$type, 0);
    var h = this.dx();
    var j = this.jt().dc().i().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        g.add(h.x(i))
    }
    return g
}, km: function (b) {
    return{__x: this.jx().item(b), __y: this.jy().item(b), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, gw: function (c) {
    $.ig.MarkerSeries.prototype.gw.call(this, c);
    var d = new $.ig.PolyLineVisualData(1, "trendLine", this.jt().db().n());
    d.tags().add("Trend");
    c.shapes().add(d)
}, $type: new $.ig.Type("PolarBase", $.ig.MarkerSeries.prototype.$type)}, true);
$.ig.util.defType("PolarLineSeriesBase", "PolarBase", {ed: function () {
    return new $.ig.PolarLineSeriesBaseView(this)
}, ea: function (b) {
    $.ig.PolarBase.prototype.ea.call(this, b);
    this.kv(b)
}, _kv: null, kv: function (b) {
    if (arguments.length === 1) {
        this._kv = b;
        return b
    } else {
        return this._kv
    }
}, init: function () {
    $.ig.PolarBase.prototype.init.call(this);
    this.kw(new $.ig.PathRenderer(1, new $.ig.DefaultFlattener()));
    this.kx(new $.ig.PathRenderer(0))
}, _kw: null, kw: function (b) {
    if (arguments.length === 1) {
        this._kw = b;
        return b
    } else {
        return this._kw
    }
}, _kx: null, kx: function (b) {
    if (arguments.length === 1) {
        this._kx = b;
        return b
    } else {
        return this._kx
    }
}, k7: function () {
    return $.ig.UnknownValuePlotting.prototype.dontPlot
}, ky: function () {
    return false
}, kz: function () {
    return false
}, kg: function (i, j) {
    var h = this;
    $.ig.PolarBase.prototype.kg.call(this, i, j);
    i.v().clear();
    var k = j.ac();
    var m = j.ab();
    var p = this.jx() != null ? this.jx().count() : 0;
    var q = this.jy() != null ? this.jy().count() : 0;
    var r = Math.min(p, q);
    var s = (function () {
        var a = new $.ig.PolarLinePlanner();
        a.q(function (b) {
            return h.jv().j().im(h.jx().item(b), h.jv().l(), h.jv().n())
        });
        a.v(r);
        a.r(function (b) {
            return h.radiusAxis().iw(h.jy().item(b), h.jv().m(), h.jv().o(), h.jv().q(), h.jv().r())
        });
        a.u(h.resolution());
        a.o(h.useCartesianInterpolation());
        a.p(h.k7());
        a.s(function (b) {
            return h.la(i, b)
        });
        a.t(function (b) {
            return h.lb(i, b)
        });
        a.w(m);
        a.x(k);
        a.aa(h.kz());
        a.z(h.ky());
        return a
    }());
    var t = (($.ig.Enumerable.prototype.a(0, r)).where$1($.ig.Number.prototype.$type, function (a) {
        return h.le(a)
    }));
    if (this.kz()) {
        var u = new $.ig.List$1($.ig.Number.prototype.$type, 1, $.ig.Enumerable.prototype.a(0, r).where$1($.ig.Number.prototype.$type, this.le.on(this)).take$1($.ig.Number.prototype.$type, 1));
        t = t.concat$1($.ig.Number.prototype.$type, u)
    }
    s.bg(i.v(), t)
}, la: function (c, d) {
    return c.a7().__inner[d].__x
}, lb: function (c, d) {
    return c.a7().__inner[d].__y
}, lc: function () {
    return !this.ld()
}, ld: function () {
    var b = this.seriesViewer().actualWindowRect();
    return !b.contains1({__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, le: function (b) {
    return(this.jx().item(b) >= this.jv().j().actualMinimumValue() && this.jx().item(b) <= this.jv().j().actualMaximumValue() && this.jy().item(b) >= this.jv().k().actualMinimumValue() && this.jy().item(b) <= this.jv().k().actualMaximumValue()) || (isNaN(this.jx().item(b)) || isNaN(this.jy().item(b)))
}, lf: function (b) {
}, lg: function (c, d) {
}, eu: function (c, d) {
    $.ig.PolarBase.prototype.eu.call(this, c, d);
    this.lf(d)
}, _k0: null, k0: function (b) {
    if (arguments.length === 1) {
        this._k0 = b;
        return b
    } else {
        return this._k0
    }
}, kh: function (c, d) {
    $.ig.PolarBase.prototype.kh.call(this, c, d);
    if (this.useCartesianInterpolation()) {
        this.k0(this.kw())
    } else {
        this.k0(this.kx())
    }
    this.k0().d(this.k7());
    this.lf(d);
    this.lg(c, d)
}, $type: new $.ig.Type("PolarLineSeriesBase", $.ig.PolarBase.prototype.$type)}, true);
$.ig.util.defType("PolarAreaSeries", "PolarLineSeriesBase", {ed: function () {
    return new $.ig.PolarAreaSeriesView(this)
}, ea: function (b) {
    $.ig.PolarLineSeriesBase.prototype.ea.call(this, b);
    this.lp(b)
}, _lp: null, lp: function (b) {
    if (arguments.length === 1) {
        this._lp = b;
        return b
    } else {
        return this._lp
    }
}, init: function () {
    $.ig.PolarLineSeriesBase.prototype.init.call(this);
    this.a3($.ig.PolarAreaSeries.prototype.$type)
}, lf: function (c) {
    var d = c;
    d.d5()
}, lg: function (d, e) {
    if (d.v().any$1($.ig.Point.prototype.$type) && d.v().first$1($.ig.Point.prototype.$type) != d.v().last$1($.ig.Point.prototype.$type)) {
        d.v().add(d.v().first$1($.ig.Point.prototype.$type))
    }
    var f = e;
    f.d6(d.v(), this.resolution())
}, kz: function () {
    return true
}, unknownValuePlotting: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarAreaSeries.prototype.unknownValuePlottingProperty, b);
        return b
    } else {
        return this.b($.ig.PolarAreaSeries.prototype.unknownValuePlottingProperty)
    }
}, k7: function () {
    return this.unknownValuePlotting()
}, $type: new $.ig.Type("PolarAreaSeries", $.ig.PolarLineSeriesBase.prototype.$type)}, true);
$.ig.util.defType("PolarBaseView", "MarkerSeriesView", {_c9: null, c9: function (b) {
    if (arguments.length === 1) {
        this._c9 = b;
        return b
    } else {
        return this._c9
    }
}, _da: null, da: function (b) {
    if (arguments.length === 1) {
        this._da = b;
        return b
    } else {
        return this._da
    }
}, init: function (b) {
    $.ig.MarkerSeriesView.prototype.init.call(this, b);
    this.c9(b);
    this.dc(new $.ig.HashPool$2($.ig.Object.prototype.$type, $.ig.Marker.prototype.$type));
    this.c2(this.dc());
    this.db(new $.ig.PolarTrendLineManager())
}, _db: null, db: function (b) {
    if (arguments.length === 1) {
        this._db = b;
        return b
    } else {
        return this._db
    }
}, ag: function () {
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    this.da(this.dj());
    if (!this.ad()) {
        this.c9().maximumMarkers(1000);
        this.cg().markerType($.ig.MarkerType.prototype.automatic)
    }
}, dj: function () {
    var a = this;
    var b = new $.ig.NumericMarkerManager(0, function (c) {
        return a.dc().item(c)
    }, function (c) {
        return a.c9().jv().p().item(c)
    }, this.dk.on(this), this.dl.on(this), this.dm.on(this));
    b.ak(true);
    b.al(this.c9().km.on(this.c9()));
    return b
}, dk: function (b) {
    this.c9().kj(b, this.dc())
}, dl: function () {
    return this.c9().kk(this.dc(), this.ac(), this.ab())
}, dm: function () {
    return this.c9().kl(this.dc())
}, dn: function (d, e) {
    if (this.c9().clipSeriesToBounds()) {
        var f = new $.ig.GeometryGroup();
        this.c9().radiusAxis().i9(f, d, e)
    } else {
    }
}, dp: function () {
    if (this.c9().trendLineBrush() != null) {
        this.c9().actualTrendLineBrush(this.c9().trendLineBrush())
    } else {
        this.c9().actualTrendLineBrush(this.c9().actualBrush())
    }
}, _dc: null, dc: function (b) {
    if (arguments.length === 1) {
        this._dc = b;
        return b
    } else {
        return this._dc
    }
}, cp: function (b) {
    this.dc().w(b)
}, a1: function (c, d) {
    $.ig.MarkerSeriesView.prototype.a1.call(this, c, d)
}, ds: function () {
    return $.ig.Rect.prototype.empty()
}, $type: new $.ig.Type("PolarBaseView", $.ig.MarkerSeriesView.prototype.$type)}, true);
$.ig.util.defType("PolarLineSeriesBaseView", "PolarBaseView", {_dw: null, dw: function (b) {
    if (arguments.length === 1) {
        this._dw = b;
        return b
    } else {
        return this._dw
    }
}, init: function (b) {
    $.ig.PolarBaseView.prototype.init.call(this, b);
    this.dw(b)
}, $type: new $.ig.Type("PolarLineSeriesBaseView", $.ig.PolarBaseView.prototype.$type)}, true);
$.ig.util.defType("PolarAreaSeriesView", "PolarLineSeriesBaseView", {_d2: null, d2: function (b) {
    if (arguments.length === 1) {
        this._d2 = b;
        return b
    } else {
        return this._d2
    }
}, init: function (b) {
    this.dz = new $.ig.Path();
    this.d0 = new $.ig.Path();
    $.ig.PolarLineSeriesBaseView.prototype.init.call(this, b);
    this.d2(b)
}, ag: function () {
    var a = this;
    $.ig.PolarBaseView.prototype.ag.call(this);
    if (!this.ad()) {
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, dz: null, d0: null, d5: function () {
    this.d0.bp(null);
    this.dz.bp(null);
    this.an()
}, d6: function (d, e) {
    var f = new $.ig.List$1($.ig.Point.prototype.$type, 1, d);
    this.d2().k0().i(this.dz, f, e);
    this.d2().k0().i(this.d0, f, e);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.dz.__stroke = this.u().actualOutline();
    this.dz.a7(this.u().thickness());
    this.dz.a8(this.u().dashArray());
    this.dz.a9(this.u().dashCap());
    this.d0.__fill = this.u().actualBrush()
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.dz.__stroke = b;
    this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.d0.__fill = b
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.ds();
            d.e($.ig.GradientDirection.prototype.radial, f)
        }
        d.g(this.d0);
        d.g(this.dz)
    }
}, b5: function (d) {
    $.ig.SeriesView.prototype.b5.call(this, d);
    var e = new $.ig.PathVisualData(1, "polarShape", this.dz);
    e.tags().add("Main");
    var f = new $.ig.PathVisualData(1, "fillShape", this.d0);
    f.tags().add("Fill");
    d.shapes().add(e);
    d.shapes().add(f)
}, $type: new $.ig.Type("PolarAreaSeriesView", $.ig.PolarLineSeriesBaseView.prototype.$type)}, true);
$.ig.util.defType("PolarAxisInfoCache", "Object", {_j: null, j: function (b) {
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
}, init: function (d, e, f) {
    $.ig.Object.prototype.init.call(this);
    this.j(d);
    this.k(e);
    this.l(this.j().g1());
    this.n(this.j().isInverted());
    this.m(this.k().g1());
    this.o(this.k().isInverted());
    this.q(this.k().im());
    this.r(this.k().io());
    this.p(f)
}, $type: new $.ig.Type("PolarAxisInfoCache", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("PolarFrame", "ScatterFrameBase$1", {init: function () {
    $.ig.ScatterFrameBase$1.prototype.init.call(this, $.ig.PolarFrame.prototype.$type);
    this.a7(new $.ig.List$1($.ig.Point.prototype.$type, 0));
    this.a8(true)
}, _a7: null, a7: function (b) {
    if (arguments.length === 1) {
        this._a7 = b;
        return b
    } else {
        return this._a7
    }
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
}, ad: function (f, g, h) {
    var i = $.ig.util.cast($.ig.PolarFrame.prototype.$type, g);
    var j = $.ig.util.cast($.ig.PolarFrame.prototype.$type, h);
    if (i == null || j == null) {
        return
    }
    $.ig.PolarFrame.prototype.b(this.a7(), f, i.a7(), j.a7())
}, ah: function (f, g, h, i) {
    if (this.a8()) {
        $.ig.ScatterFrameBase$1.prototype.ah.call(this, f, g, h, i)
    } else {
        $.ig.ScatterFrameBase$1.prototype.ah.call(this, f, g, h, i);
        if (h != null && i != null && (h.f().__x != i.f().__x || h.f().__y != i.f().__y)) {
            var j = 1 - g;
            f.f({__x: h.f().__x * j + i.f().__x * g, __y: h.f().__y * j + i.f().__y * g, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, bg: function (b) {
    return !isNaN(b.__x) && !isNaN(b.__y) && !Number.isInfinity(b.__x) && !Number.isInfinity(b.__y)
}, aj: function (e, f, g, h) {
    if (this.a8()) {
        $.ig.ScatterFrameBase$1.prototype.aj.call(this, e, f, g, h)
    } else {
        if (g != null && h != null && (g.d().__x != h.d().__x || g.d().__y != h.d().__y) && this.bg(e.f())) {
            e.d(this.a9()(e.f()))
        } else {
            $.ig.ScatterFrameBase$1.prototype.aj.call(this, e, f, g, h)
        }
    }
}, $type: new $.ig.Type("PolarFrame", $.ig.ScatterFrameBase$1.prototype.$type.specialize($.ig.PolarFrame.prototype.$type))}, true);
$.ig.util.defType("AngleRadiusPair", "Object", {init: function () {
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
}, $type: new $.ig.Type("AngleRadiusPair", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PolarLinePlanner", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
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
}, a: null, w: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        return b
    } else {
        return this.a
    }
}, b: null, x: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        return b
    } else {
        return this.b
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
}, _ab: null, ab: function (b) {
    if (arguments.length === 1) {
        this._ab = b;
        return b
    } else {
        return this._ab
    }
}, a4: function () {
    if (this.q() == null || this.r() == null || this.s() == null || this.t() == null || this.w() == $.ig.Rect.prototype.empty() || this.x() == $.ig.Rect.prototype.empty()) {
        return false
    }
    return true
}, a5: function (g, h, i, j) {
    var k = g(j) - g(i);
    var l = h(j) - h(i);
    return k * k + l * l
}, a6: function (j) {
    var k = new $.ig.List$1($.ig.AngleRadiusPair.prototype.$type, 0);
    var l = this.u() * this.u();
    var m;
    if (j != null) {
        m = j
    } else {
        m = $.ig.Enumerable.prototype.a(0, this.v())
    }
    var n = m.getEnumerator();
    var o = true;
    o = n.moveNext();
    var p = n.current();
    while (o) {
        var q = p;
        o = n.moveNext();
        p = n.current();
        while (o && this.a5(this.s(), this.t(), q, p) < l) {
            o = n.moveNext();
            p = n.current()
        }
        var r = new $.ig.AngleRadiusPair();
        r.d(q);
        if (!this.o()) {
            r.e(this.q()(q));
            r.f(this.r()(q))
        }
        k.add(r)
    }
    return k
}, a7: function (d) {
    var f = this.a6(d).getEnumerator();
    while (f.moveNext()) {
        var e = f.current();
        if (isNaN(e.e()) || Number.isInfinity(e.e()) || isNaN(e.f()) || Number.isInfinity(e.f())) {
            this.be({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            continue
        }
        this.be({__x: this.s()(e.d()), __y: this.t()(e.d()), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
    }
}, a8: function () {
    return Math.pow(this.u() / (Math.max(this.w().width() / this.x().width(), this.w().height() / this.x().height())), 2)
}, a9: function (e, f) {
    var g = 0.5 + f * Math.cos(e);
    var h = 0.5 + f * Math.sin(e);
    g = this.a.left() + this.a.width() * (g - this.b.left()) / this.b.width();
    h = this.a.top() + this.a.height() * (h - this.b.top()) / this.b.height();
    this.be({__x: g, __y: h, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, ba: function (k) {
    var l = this.a8();
    var m = this.a6(k);
    var n = m.item(0).e();
    var o = m.item(0).f();
    var p = m.item(0).d();
    for (var q = 1; q < m.count(); q++) {
        var r = m.item(q).e();
        var s = m.item(q).f();
        var t = m.item(q).d();
        if (isNaN(r) || Number.isInfinity(r) || isNaN(s) || Number.isInfinity(s)) {
            this.be({__x: NaN, __y: NaN, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            if (this.p() != $.ig.UnknownValuePlotting.prototype.linearInterpolate) {
                q++;
                if (q < m.count()) {
                    n = m.item(q).e();
                    o = m.item(q).f()
                }
            }
            continue
        }
        this.bb(r, s, n, o, q, l, p > t);
        n = r;
        o = s;
        p = t
    }
}, bb: function (o, p, q, r, s, t, u) {
    var v = false;
    if ((o < q && !u) || (o > q && u)) {
        v = true;
        var w = o;
        o = q;
        q = w;
        w = p;
        p = r;
        r = w
    }
    var x = $.ig.Flattener.prototype.b(q, r, o, p, t);
    if (v) {
        x = x.reverse$1(Number)
    }
    var z = x.getEnumerator();
    while (z.moveNext()) {
        var y = z.current();
        var A = q + y * (o - q);
        var B = r + y * (p - r);
        this.a9(A, B)
    }
}, bc: function (g) {
    var f = this;
    var h = this.w().top() - 10;
    var i = this.w().bottom() + 10;
    var j = this.w().left() - 10;
    var k = this.w().right() + 10;
    if (this.y() == null) {
        this.y((function () {
            var a = new $.ig.Clipper(1, j, i, k, h, f.aa());
            a.h(g);
            return a
        }()))
    }
}, bd: function (b) {
    return !isNaN(b.__x) && !isNaN(b.__y) && !Number.isInfinity(b.__x) && !Number.isInfinity(b.__y)
}, be: function (b) {
    if (this.p() == $.ig.UnknownValuePlotting.prototype.linearInterpolate && !this.bd(b)) {
        return
    }
    if (this.z()) {
        this.ab().add(b)
    } else {
        this.y().l(b)
    }
}, bf: function (b) {
    this.bg(null, null)
}, bg: function (c, d) {
    this.ab(c);
    if (!this.a4()) {
        return
    }
    if (this.v() > 1) {
        this.bc(c);
        if (this.o()) {
            this.a7(d)
        } else {
            this.ba(d)
        }
        this.y().h(null)
    }
}, $type: new $.ig.Type("PolarLinePlanner", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PolarLineSeries", "PolarLineSeriesBase", {ed: function () {
    return new $.ig.PolarLineSeriesView(this)
}, ea: function (b) {
    $.ig.PolarLineSeriesBase.prototype.ea.call(this, b);
    this.lp(b)
}, _lp: null, lp: function (b) {
    if (arguments.length === 1) {
        this._lp = b;
        return b
    } else {
        return this._lp
    }
}, init: function () {
    $.ig.PolarLineSeriesBase.prototype.init.call(this);
    this.a3($.ig.PolarLineSeries.prototype.$type)
}, lf: function (c) {
    var d = c;
    d.d4()
}, lg: function (d, e) {
    var f = e;
    f.d5(d.v(), this.resolution())
}, unknownValuePlotting: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarLineSeries.prototype.unknownValuePlottingProperty, b);
        return b
    } else {
        return this.b($.ig.PolarLineSeries.prototype.unknownValuePlottingProperty)
    }
}, k7: function () {
    return this.unknownValuePlotting()
}, e6: function (e, f, g, h) {
    $.ig.PolarBase.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.PolarLineSeries.prototype.lm:
            this.renderSeries(false);
            this.e5();
            break
    }
}, $type: new $.ig.Type("PolarLineSeries", $.ig.PolarLineSeriesBase.prototype.$type)}, true);
$.ig.util.defType("PolarLineSeriesView", "PolarLineSeriesBaseView", {_d1: null, d1: function (b) {
    if (arguments.length === 1) {
        this._d1 = b;
        return b
    } else {
        return this._d1
    }
}, init: function (b) {
    this.dz = new $.ig.Path();
    $.ig.PolarLineSeriesBaseView.prototype.init.call(this, b);
    this.d1(b)
}, ag: function () {
    $.ig.PolarBaseView.prototype.ag.call(this)
}, dz: null, d4: function () {
    this.dz.bp(null);
    this.an()
}, d5: function (c, d) {
    this.d1().k0().i(this.dz, c, d);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.dz.__stroke = this.u().actualBrush();
    this.dz.a7(this.u().thickness());
    this.dz.a8(this.u().dashArray());
    this.dz.a9(this.u().dashCap())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.dz.__stroke = b;
    this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (c, d) {
    $.ig.SeriesView.prototype.a0.call(this, c, d);
    c.g(this.dz)
}, b5: function (c) {
    $.ig.SeriesView.prototype.b5.call(this, c);
    var d = new $.ig.PathVisualData(1, "polarShape", this.dz);
    d.tags().add("Main");
    c.shapes().add(d)
}, $type: new $.ig.Type("PolarLineSeriesView", $.ig.PolarLineSeriesBaseView.prototype.$type)}, true);
$.ig.util.defType("PolarScatterSeries", "PolarBase", {ed: function () {
    return new $.ig.PolarScatterSeriesView(this)
}, ea: function (b) {
    $.ig.PolarBase.prototype.ea.call(this, b);
    this.ks(b)
}, _ks: null, ks: function (b) {
    if (arguments.length === 1) {
        this._ks = b;
        return b
    } else {
        return this._ks
    }
}, init: function () {
    $.ig.PolarBase.prototype.init.call(this);
    this.a3($.ig.PolarScatterSeries.prototype.$type)
}, $type: new $.ig.Type("PolarScatterSeries", $.ig.PolarBase.prototype.$type)}, true);
$.ig.util.defType("PolarScatterSeriesView", "PolarBaseView", {_dw: null, dw: function (b) {
    if (arguments.length === 1) {
        this._dw = b;
        return b
    } else {
        return this._dw
    }
}, init: function (b) {
    $.ig.PolarBaseView.prototype.init.call(this, b);
    this.dw(b)
}, ag: function () {
    var a = this;
    $.ig.PolarBaseView.prototype.ag.call(this);
    if (!this.ad()) {
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.o);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, $type: new $.ig.Type("PolarScatterSeriesView", $.ig.PolarBaseView.prototype.$type)}, true);
$.ig.util.defType("PolarSplineAreaSeries", "PolarLineSeriesBase", {ed: function () {
    return new $.ig.PolarSplineAreaSeriesView(this)
}, ea: function (b) {
    $.ig.PolarLineSeriesBase.prototype.ea.call(this, b);
    this.lp(b)
}, _lp: null, lp: function (b) {
    if (arguments.length === 1) {
        this._lp = b;
        return b
    } else {
        return this._lp
    }
}, init: function () {
    $.ig.PolarLineSeriesBase.prototype.init.call(this);
    this.a3($.ig.PolarSplineAreaSeries.prototype.$type)
}, lf: function (c) {
    var d = c;
    d.d5()
}, lg: function (d, e) {
    this.lf(e);
    if (d.v().count() < 1) {
        return
    }
    var f = e;
    f.d6(d.v(), this.stiffness())
}, kz: function () {
    return true
}, stiffness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarSplineAreaSeries.prototype.stiffnessProperty, b);
        return b
    } else {
        return this.b($.ig.PolarSplineAreaSeries.prototype.stiffnessProperty)
    }
}, e6: function (e, f, g, h) {
    $.ig.PolarBase.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.PolarSplineAreaSeries.prototype.lm:
            this.renderSeries(false);
            break
    }
}, $type: new $.ig.Type("PolarSplineAreaSeries", $.ig.PolarLineSeriesBase.prototype.$type)}, true);
$.ig.util.defType("PolarSplineAreaSeriesView", "PolarLineSeriesBaseView", {_d2: null, d2: function (b) {
    if (arguments.length === 1) {
        this._d2 = b;
        return b
    } else {
        return this._d2
    }
}, init: function (b) {
    this.dz = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.PathGeometry());
        return a
    }());
    this.d0 = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.PathGeometry());
        return a
    }());
    $.ig.PolarLineSeriesBaseView.prototype.init.call(this, b);
    this.d2(b)
}, ag: function () {
    var a = this;
    $.ig.PolarBaseView.prototype.ag.call(this);
    if (!this.ad()) {
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, dz: null, d0: null, d5: function () {
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.d0.bp())).reset();
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.dz.bp())).reset();
    this.an()
}, d6: function (d, e) {
    var c = this;
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.dz.bp())).d($.ig.Numeric.prototype.g(d.count() + 1, function (a) {
        return a < d.count() ? d.__inner[a].__x : d.__inner[a - d.count()].__x
    }, function (a) {
        return a < d.count() ? d.__inner[a].__y : d.__inner[a - d.count()].__y
    }, e));
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.d0.bp())).d($.ig.Numeric.prototype.g(d.count() + 1, function (a) {
        return a < d.count() ? d.__inner[a].__x : d.__inner[a - d.count()].__x
    }, function (a) {
        return a < d.count() ? d.__inner[a].__y : d.__inner[a - d.count()].__y
    }, e));
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.d0.__fill = this.u().actualBrush();
    this.dz.__stroke = this.u().actualOutline();
    this.dz.a7(this.u().thickness());
    this.dz.a8(this.u().dashArray());
    this.dz.a9(this.u().dashCap())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.d0.__fill = b;
    this.dz.__stroke = b;
    this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (d, e) {
    $.ig.SeriesView.prototype.a0.call(this, d, e);
    if (d.b()) {
        if (this.k && !e) {
            var f = this.ds();
            d.e($.ig.GradientDirection.prototype.radial, f)
        }
        d.g(this.d0);
        d.g(this.dz)
    }
}, $type: new $.ig.Type("PolarSplineAreaSeriesView", $.ig.PolarLineSeriesBaseView.prototype.$type)}, true);
$.ig.util.defType("PolarSplineSeries", "PolarLineSeriesBase", {ed: function () {
    return new $.ig.PolarSplineSeriesView(this)
}, ea: function (b) {
    $.ig.PolarLineSeriesBase.prototype.ea.call(this, b);
    this.lp(b)
}, _lp: null, lp: function (b) {
    if (arguments.length === 1) {
        this._lp = b;
        return b
    } else {
        return this._lp
    }
}, init: function () {
    $.ig.PolarLineSeriesBase.prototype.init.call(this);
    this.a3($.ig.PolarSplineSeries.prototype.$type)
}, stiffness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PolarSplineSeries.prototype.stiffnessProperty, b);
        return b
    } else {
        return this.b($.ig.PolarSplineSeries.prototype.stiffnessProperty)
    }
}, e6: function (e, f, g, h) {
    $.ig.PolarBase.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.PolarSplineSeries.prototype.lm:
            this.renderSeries(false);
            break
    }
}, lf: function (c) {
    var d = c;
    d.d4()
}, lg: function (d, e) {
    this.lf(e);
    var f = e;
    f.d5(d.v(), this.stiffness())
}, $type: new $.ig.Type("PolarSplineSeries", $.ig.PolarLineSeriesBase.prototype.$type)}, true);
$.ig.util.defType("PolarSplineSeriesView", "PolarLineSeriesBaseView", {_d1: null, d1: function (b) {
    if (arguments.length === 1) {
        this._d1 = b;
        return b
    } else {
        return this._d1
    }
}, init: function (b) {
    this.dz = (function () {
        var a = new $.ig.Path();
        a.bp(new $.ig.PathGeometry());
        return a
    }());
    $.ig.PolarLineSeriesBaseView.prototype.init.call(this, b);
    this.d1(b)
}, ag: function () {
    var b = this;
    $.ig.PolarBaseView.prototype.ag.call(this);
    var c = new $.ig.PathGeometry();
    c.d().add((function () {
        var a = new $.ig.PathFigure();
        return a
    }()));
    this.dz.bp(c)
}, dz: null, d4: function () {
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.dz.bp())).reset();
    this.an()
}, d5: function (d, e) {
    var c = this;
    ($.ig.util.cast($.ig.PathGeometry.prototype.$type, this.dz.bp())).d($.ig.Numeric.prototype.g(d.count(), function (a) {
        return d.__inner[a].__x
    }, function (a) {
        return d.__inner[a].__y
    }, e));
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.dz.__stroke = this.u().actualBrush();
    this.dz.a7(this.u().thickness());
    this.dz.a8(this.u().dashArray());
    this.dz.a9(this.u().dashCap())
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.dz.__stroke = b;
    this.dz.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (c, d) {
    $.ig.SeriesView.prototype.a0.call(this, c, d);
    if (this.k && !d) {
        c.e($.ig.GradientDirection.prototype.radial, null)
    }
    c.g(this.dz)
}, $type: new $.ig.Type("PolarSplineSeriesView", $.ig.PolarLineSeriesBaseView.prototype.$type)}, true);
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
$.ig.CollisionAvoidanceType.prototype.none = 0;
$.ig.CollisionAvoidanceType.prototype.omit = 1;
$.ig.CollisionAvoidanceType.prototype.fade = 2;
$.ig.CollisionAvoidanceType.prototype.omitAndShift = 3;
$.ig.CollisionAvoidanceType.prototype.fadeAndShift = 4;
$.ig.CategoryAngleAxis.prototype.hc = "StartAngleOffset";
$.ig.CategoryAngleAxis.prototype.hd = "Interval";
$.ig.CategoryAngleAxis.prototype.startAngleOffsetProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAngleAxis.prototype.hc, Number, $.ig.CategoryAngleAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, c)).ez($.ig.CategoryAngleAxis.prototype.hc, d.f(), d.e())
}));
$.ig.CategoryAngleAxis.prototype.intervalProperty = $.ig.DependencyProperty.prototype.l($.ig.CategoryAngleAxis.prototype.hd, Number, $.ig.CategoryAngleAxis.prototype.$type, new $.ig.PropertyMetadata(1, NaN, function (c, d) {
    ($.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, c)).ez($.ig.CategoryAngleAxis.prototype.hd, d.f(), d.e());
    ($.ig.util.cast($.ig.CategoryAngleAxis.prototype.$type, c)).es(false)
}));
$.ig.NumericAngleAxis.prototype.h2 = "StartAngleOffset";
$.ig.NumericAngleAxis.prototype.startAngleOffsetProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericAngleAxis.prototype.h2, Number, $.ig.NumericAngleAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.NumericAngleAxis.prototype.$type, c)).ez($.ig.NumericAngleAxis.prototype.h2, d.f(), d.e())
}));
$.ig.NumericRadiusAxis.prototype.h2 = "RadiusExtentScale";
$.ig.NumericRadiusAxis.prototype.h3 = "InnerRadiusExtentScale";
$.ig.NumericRadiusAxis.prototype.radiusExtentScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericRadiusAxis.prototype.h2, Number, $.ig.NumericRadiusAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0.75, function (c, d) {
    ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, c)).ez($.ig.NumericRadiusAxis.prototype.h2, d.f(), d.e())
}));
$.ig.NumericRadiusAxis.prototype.innerRadiusExtentScaleProperty = $.ig.DependencyProperty.prototype.l($.ig.NumericRadiusAxis.prototype.h3, Number, $.ig.NumericRadiusAxis.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.NumericRadiusAxis.prototype.$type, c)).ez($.ig.NumericRadiusAxis.prototype.h3, d.f(), d.e())
}));
$.ig.TrendLineManagerBase$1.prototype.a = "TrendLineDashArray";
$.ig.TrendLineManagerBase$1.prototype.b = "TrendLineType";
$.ig.TrendLineManagerBase$1.prototype.c = "TrendLinePeriod";
$.ig.TrendLineManagerBase$1.prototype.d = "TrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.e = "ActualTrendLineBrush";
$.ig.TrendLineManagerBase$1.prototype.f = "TrendLineThickness";
$.ig.TrendLineManagerBase$1.prototype.g = "TrendLineDashCap";
$.ig.TrendLineManagerBase$1.prototype.h = "TrendLineZIndex";
$.ig.DefaultFlattener.prototype.a = 512;
$.ig.Legend.prototype.cc = "Orientation";
$.ig.PolarBase.prototype.iq = "AngleMemberPath";
$.ig.PolarBase.prototype.ir = "RadiusMemberPath";
$.ig.PolarBase.prototype.is = "AngleColumn";
$.ig.PolarBase.prototype.it = "RadiusColumn";
$.ig.PolarBase.prototype.iu = "AngleAxis";
$.ig.PolarBase.prototype.iv = "RadiusAxis";
$.ig.PolarBase.prototype.iw = "UseCartesianInterpolation";
$.ig.PolarBase.prototype.ix = "MaximumMarkers";
$.ig.PolarBase.prototype.iy = "ClipSeriesToBounds";
$.ig.PolarBase.prototype.angleMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iq, String, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.iq, d.f(), d.e())
}));
$.ig.PolarBase.prototype.radiusMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.ir, String, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.ir, d.f(), d.e())
}));
$.ig.PolarBase.prototype.angleAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iu, $.ig.NumericAngleAxis.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.iu, d.f(), d.e())
}));
$.ig.PolarBase.prototype.radiusAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iv, $.ig.NumericRadiusAxis.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.iv, d.f(), d.e())
}));
$.ig.PolarBase.prototype.useCartesianInterpolationProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iw, $.ig.Boolean.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, true, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.iw, d.f(), d.e())
}));
$.ig.PolarBase.prototype.maximumMarkersProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.ix, $.ig.Number.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, 400, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.ix, d.f(), d.e())
}));
$.ig.PolarBase.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.b4, d.f(), d.e())
}));
$.ig.PolarBase.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b6, $.ig.Brush.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.b6, d.f(), d.e())
}));
$.ig.PolarBase.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b7, $.ig.Brush.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.b7, d.f(), d.e())
}));
$.ig.PolarBase.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b8, Number, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.b8, d.f(), d.e())
}));
$.ig.PolarBase.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.b9, d.f(), d.e())
}));
$.ig.PolarBase.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.b3, d.f(), d.e())
}));
$.ig.PolarBase.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.b5, $.ig.Number.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.b5, d.f(), d.e())
}));
$.ig.PolarBase.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.ca, $.ig.Number.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.ca, d.f(), d.e())
}));
$.ig.PolarBase.prototype.clipSeriesToBoundsProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarBase.prototype.iy, $.ig.Boolean.prototype.$type, $.ig.PolarBase.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.PolarBase.prototype.$type, c)).ej($.ig.PolarBase.prototype.iy, d.f(), d.e())
}));
$.ig.PolarAreaSeries.prototype.lm = "UnknownValuePlotting";
$.ig.PolarAreaSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarAreaSeries.prototype.lm, $.ig.UnknownValuePlotting.prototype.$type, $.ig.PolarAreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (c, d) {
    ($.ig.util.cast($.ig.PolarAreaSeries.prototype.$type, c)).ej($.ig.PolarAreaSeries.prototype.lm, d.f(), d.e())
}));
$.ig.PolarLineSeries.prototype.lm = "UnknownValuePlotting";
$.ig.PolarLineSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarLineSeries.prototype.lm, $.ig.UnknownValuePlotting.prototype.$type, $.ig.PolarLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (c, d) {
    ($.ig.util.cast($.ig.PolarLineSeries.prototype.$type, c)).ej($.ig.PolarLineSeries.prototype.lm, d.f(), d.e())
}));
$.ig.PolarSplineAreaSeries.prototype.lm = "Stiffness";
$.ig.PolarSplineAreaSeries.prototype.stiffnessProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarSplineAreaSeries.prototype.lm, Number, $.ig.PolarSplineAreaSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0.5, function (c, d) {
    ($.ig.util.cast($.ig.PolarSplineAreaSeries.prototype.$type, c)).ej($.ig.PolarSplineAreaSeries.prototype.lm, d.f(), d.e())
}));
$.ig.PolarSplineSeries.prototype.lm = "Stiffness";
$.ig.PolarSplineSeries.prototype.stiffnessProperty = $.ig.DependencyProperty.prototype.l($.ig.PolarSplineSeries.prototype.lm, Number, $.ig.PolarSplineSeries.prototype.$type, new $.ig.PropertyMetadata(1, 0.5, function (c, d) {
    ($.ig.util.cast($.ig.PolarSplineSeries.prototype.$type, c)).ej($.ig.PolarSplineSeries.prototype.lm, d.f(), d.e())
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
(function (a) {
    a(document).ready(function () {
        var b = a("#__ig_wm__").length > 0 ? a("#__ig_wm__") : a('<div id="__ig_wm__"></div>').appendTo(document.body);
        b.css({position: "fixed", bottom: 0, right: 0, zIndex: 1000}).addClass("ui-igtrialwatermark")
    })
}(jQuery));