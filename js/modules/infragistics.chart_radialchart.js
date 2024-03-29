﻿/*
 * Infragistics.Web.ClientUI infragistics.chart_radialchart.js 12.2.20122.1021
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
$.ig.util.defType("UnknownValuePlotting", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("UnknownValuePlotting", $.ig.Object.prototype.$type)}, true);
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
$.ig.UnknownValuePlotting.prototype.linearInterpolate = 0;
$.ig.UnknownValuePlotting.prototype.dontPlot = 1;
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
$.ig.util.defType("RadialAxes", "Object", {_d: null, d: function (b) {
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
}, a: null, j: function (f, g, h, i) {
    var j = this.a.__x + (g * Math.cos(f));
    return $.ig.ViewportUtils.prototype.a(j, h, i)
}, k: function (q, r, s, t, u, v, w) {
    var x = Math.min(r != null ? r.count() : 0, s != null ? s.count() : 0);
    var y = false;
    if (q.count() == x) {
        y = true
    }
    var z;
    var A;
    var B = this.a.__x;
    var C = this.a.__y;
    var D;
    var E;
    for (var F = 0; F < x; F++) {
        z = this.e().getScaledAngle(r.item(F));
        A = this.d().getScaledValue2(s.item(F));
        D = B + (A * v(F, z));
        E = C + (A * w(F, z));
        D = u.left() + u.width() * (D - t.left()) / t.width();
        E = u.top() + u.height() * (E - t.top()) / t.height();
        if (!y) {
            q.add({__x: D, __y: E, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        } else {
            q.item(F, {__x: D, __y: E, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, l: function (k, l, m, n, o, p) {
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
}, m: function (f, g, h, i) {
    var j = this.a.__y + (g * Math.sin(f));
    return $.ig.ViewportUtils.prototype.c(j, h, i)
}, n: function (d) {
    var e = Math.sqrt(Math.pow(d.__x - this.a.__x, 2) + Math.pow(d.__y - this.a.__y, 2));
    var f = Math.acos((d.__x - this.a.__x) / e);
    if ((d.__y - this.a.__y) < 0) {
        f = (2 * Math.PI) - f
    }
    return f
}, $type: new $.ig.Type("RadialAxes", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("CategoryLineRasterizer", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this);
    this.a = new $.ig.PointCollection(0)
}, _c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, a: null, d: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        return b
    } else {
        return this.a
    }
}, i: function (B, Y, Z, aa, ab, ac, ad, ae, af, ag) {
    var A = this;
    var ah = new $.ig.PathGeometry();
    var ai = new $.ig.PathGeometry();
    var aj = new $.ig.PathGeometry();
    B.bp(ah);
    Y.bp(ai);
    Z.bp(aj);
    ah.d(new $.ig.PathFigureCollection());
    ai.d(new $.ig.PathFigureCollection());
    aj.d(new $.ig.PathFigureCollection());
    var ak = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var al = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var am = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var an = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    if (ad == $.ig.UnknownValuePlotting.prototype.linearInterpolate || ad == $.ig.UnknownValuePlotting.prototype.dontPlot) {
        var ao = ad == $.ig.UnknownValuePlotting.prototype.dontPlot ? ae : null;
        var ap = 0;
        for (var aq = 0; aq < aa; aq++) {
            if (isNaN(ab.__inner[aq][1])) {
                var ar = aq - ap;
                var at = (ad == $.ig.UnknownValuePlotting.prototype.linearInterpolate && ar > 0) || (ad == $.ig.UnknownValuePlotting.prototype.dontPlot && ar > 1);
                if (at) {
                    if (ad == $.ig.UnknownValuePlotting.prototype.dontPlot || ak.count() == 0) {
                        var au = new $.ig.PolyLineSegment();
                        var av = new $.ig.PolyLineSegment();
                        var aw = new $.ig.PolyLineSegment();
                        var ax = new $.ig.PolyLineSegment();
                        ak.add(au);
                        al.add(av);
                        am.add(aw);
                        an.add(ax)
                    }
                    this.o(ak.__inner[ak.count() - 1].__points, al.__inner[al.count() - 1].__points, am.__inner[am.count() - 1].__points, an.__inner[an.count() - 1].__points, ap, aq - 1, ab, ac, ao, af, ag)
                }
                ap = aq + 1
            }
        }
        if (ad == $.ig.UnknownValuePlotting.prototype.dontPlot || ak.count() == 0) {
            var C = new $.ig.PolyLineSegment();
            var D = new $.ig.PolyLineSegment();
            var E = new $.ig.PolyLineSegment();
            var F = new $.ig.PolyLineSegment();
            ak.add(C);
            al.add(F);
            am.add(D);
            an.add(E)
        }
        this.o(ak.__inner[ak.count() - 1].__points, al.__inner[al.count() - 1].__points, am.__inner[am.count() - 1].__points, an.__inner[an.count() - 1].__points, ap, aa - 1, ab, ac, ao, af, ag);
        if (ao == null && ak.count() == 1 && ae != null) {
            this.j(ak.__inner[0], ae)
        }
    } else {
        ak.add(new $.ig.PolyLineSegment());
        al.add(new $.ig.PolyLineSegment());
        am.add(new $.ig.PolyLineSegment());
        an.add(new $.ig.PolyLineSegment());
        this.l(ak.__inner[0].__points, al.__inner[0].__points, am.__inner[0].__points, an.__inner[0].__points, aa, ab, ac, ae, af, ag)
    }
    for (var G = 0; G < ak.count(); G++) {
        var H = ak.__inner[G];
        var I = al.__inner[G];
        var J = am.__inner[G];
        var K = an.__inner[G];
        if (H.__points.count() > 0) {
            var L = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = H.__points.__inner[0];
                return a
            }());
            L.__segments.add(H);
            ah.d().add(L)
        }
        if (I.__points.count() > 0) {
            var M = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = I.__points.__inner[0];
                return a
            }());
            M.__segments.add(I);
            aj.d().add(M)
        }
        if (J.__points.count() > 0 && K.__points.count() > 0) {
            var N = new $.ig.PolyLineSegment();
            if (ae != null) {
                var O = ae.i();
                ae.i(true);
                ae.h(N.__points);
                var Q = J.__points.getEnumerator();
                while (Q.moveNext()) {
                    var P = Q.current();
                    ae.l(P)
                }
                var S = K.__points.reverse$1($.ig.Point.prototype.$type).getEnumerator();
                while (S.moveNext()) {
                    var R = S.current();
                    ae.l(R)
                }
                ae.h(null);
                ae.i(O)
            } else {
                var U = J.__points.getEnumerator();
                while (U.moveNext()) {
                    var T = U.current();
                    N.__points.add(T)
                }
                var W = K.__points.reverse$1($.ig.Point.prototype.$type).getEnumerator();
                while (W.moveNext()) {
                    var V = W.current();
                    N.__points.add(V)
                }
            }
            if (N.__points.count() > 0) {
                var X = (function () {
                    var a = new $.ig.PathFigure();
                    a.__startPoint = N.__points.__inner[0];
                    return a
                }());
                X.__segments.add(N);
                ai.d().add(X)
            }
        }
    }
}, j: function (f, g) {
    var h = f.__points;
    g.h(f.__points = new $.ig.PointCollection(0));
    var j = h.getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        g.l(i)
    }
    g.h(null)
}, k: function (k, l, m, n, o, p, q, r, s, t) {
    k.bn().clear();
    m.bn().clear();
    n.bn().clear();
    l.bn().clear();
    this.l(k.bn(), l.bn(), m.bn(), n.bn(), o, p, q, r, s, t);
    k.a6(k.bn().count() > 0);
    m.a6(m.bn().count() > 0);
    n.a6(n.bn().count() > 0);
    l.a6(l.bn().count() > 0)
}, l: function (k, l, m, n, o, p, q, r, s, t) {
    this.o(k, l, m, n, 0, o - 1, p, q, r, s, t)
}, m: function (t, u, v, w, x, y, z) {
    var A = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), w, x, y, u, v, z);
    var B = 0;
    var C = A.count();
    var D;
    var E;
    var F;
    if (x) {
        for (var G = 0; G < C; G++) {
            B = A.__inner[G];
            D = w.__inner[B];
            E = D[0];
            F = D[1];
            var H = {__x: E, __y: F, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
            t.add(H)
        }
    } else {
        if (y) {
            for (var I = 0; I < C; I++) {
                B = A.__inner[I];
                D = w.__inner[B];
                E = D[0];
                F = D[2];
                var J = {__x: E, __y: F, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                t.add(J)
            }
        } else {
            for (var K = 0; K < C; K++) {
                B = A.__inner[K];
                D = w.__inner[B];
                E = D[2];
                F = D[3];
                var L = {__x: E, __y: F, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
                t.add(L)
            }
        }
    }
}, n: function (f, g, h, i) {
    h.h(f);
    for (var j = 0; j < g.count(); j++) {
        h.l(g.__inner[j])
    }
    h.h(null)
}, o: function (y, z, A, B, C, D, E, F, G, H, I) {
    if (D > -1) {
        if (H == 1 && !this.c()) {
            var J = new $.ig.PointCollection(0);
            this.m(J, C, D, E, true, F, I);
            if (G != null) {
                this.n(y, J, G, I)
            } else {
                var L = J.getEnumerator();
                while (L.moveNext()) {
                    var K = L.current();
                    y.add(K)
                }
            }
        } else {
            var M = new $.ig.PointCollection(0);
            var N = new $.ig.PointCollection(0);
            this.m(M, C, D, E, true, F, I);
            this.m(N, C, D, E, false, F, I);
            var P = M.getEnumerator();
            while (P.moveNext()) {
                var O = P.current();
                A.add(O)
            }
            var R = N.getEnumerator();
            while (R.moveNext()) {
                var Q = R.current();
                B.add(Q)
            }
            if (G != null) {
                this.n(y, M, G, I);
                this.n(z, N, G, I)
            } else {
                var T = M.getEnumerator();
                while (T.moveNext()) {
                    var S = T.current();
                    y.add(S)
                }
                var V = N.getEnumerator();
                while (V.moveNext()) {
                    var U = V.current();
                    z.add(U)
                }
            }
        }
    }
}, p: function (B, Q, R, S, T, U, V, W, X, Y, Z) {
    var A = this;
    var aa = new $.ig.PathGeometry();
    var ab = new $.ig.PathGeometry();
    var ac = new $.ig.PathGeometry();
    var ad = new $.ig.PathGeometry();
    B.bp(aa);
    Q.bp(ab);
    R.bp(ac);
    S.bp(ad);
    aa.d(new $.ig.PathFigureCollection());
    ab.d(new $.ig.PathFigureCollection());
    ac.d(new $.ig.PathFigureCollection());
    ad.d(new $.ig.PathFigureCollection());
    var ae = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var af = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var ag = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    var ah = new $.ig.List$1($.ig.PolyLineSegment.prototype.$type, 0);
    if (Z == $.ig.UnknownValuePlotting.prototype.linearInterpolate || Z == $.ig.UnknownValuePlotting.prototype.dontPlot) {
        var ai = 0;
        for (var aj = 0; aj < T; aj++) {
            if (isNaN(U.__inner[aj][1])) {
                var ak = aj - ai;
                var al = (Z == $.ig.UnknownValuePlotting.prototype.linearInterpolate && ak > 0) || (Z == $.ig.UnknownValuePlotting.prototype.dontPlot && ak > 1);
                if (al) {
                    if (Z == $.ig.UnknownValuePlotting.prototype.dontPlot || af.count() == 0) {
                        var am = new $.ig.PolyLineSegment();
                        var an = new $.ig.PolyLineSegment();
                        var ao = new $.ig.PolyLineSegment();
                        var C = new $.ig.PolyLineSegment();
                        ae.add(am);
                        af.add(an);
                        ag.add(ao);
                        ah.add(C)
                    }
                    this.q(ae.__inner[ae.count() - 1].__points, af.__inner[af.count() - 1].__points, ag.__inner[ag.count() - 1].__points, ah.__inner[ah.count() - 1].__points, ai, aj - 1, U, V, W, X);
                    if (Z == $.ig.UnknownValuePlotting.prototype.dontPlot) {
                        Y(ae.__inner[ae.count() - 1].__points, af.__inner[af.count() - 1].__points, ag.__inner[ag.count() - 1].__points, ah.__inner[ah.count() - 1].__points, false)
                    }
                }
                ai = aj + 1
            }
        }
        if (Z == $.ig.UnknownValuePlotting.prototype.dontPlot || af.count() == 0) {
            var D = new $.ig.PolyLineSegment();
            var E = new $.ig.PolyLineSegment();
            var F = new $.ig.PolyLineSegment();
            var G = new $.ig.PolyLineSegment();
            ae.add(D);
            af.add(E);
            ag.add(F);
            ah.add(G)
        }
        this.q(ae.__inner[ae.count() - 1].__points, af.__inner[af.count() - 1].__points, ag.__inner[ag.count() - 1].__points, ah.__inner[ah.count() - 1].__points, ai, T - 1, U, V, W, X);
        Y(ae.__inner[ae.count() - 1].__points, af.__inner[af.count() - 1].__points, ag.__inner[ag.count() - 1].__points, ah.__inner[ah.count() - 1].__points, true)
    } else {
        ae.add(new $.ig.PolyLineSegment());
        af.add(new $.ig.PolyLineSegment());
        ag.add(new $.ig.PolyLineSegment());
        ah.add(new $.ig.PolyLineSegment());
        this.q(ae.__inner[0].__points, af.__inner[0].__points, ag.__inner[0].__points, ah.__inner[0].__points, 0, T - 1, U, V, W, X);
        Y(ae.__inner[0].__points, af.__inner[0].__points, ag.__inner[0].__points, ah.__inner[0].__points, true)
    }
    for (var H = 0; H < af.count(); H++) {
        var I = ae.__inner[H];
        var J = af.__inner[H];
        var K = ag.__inner[H];
        var L = ah.__inner[H];
        if (I.__points.count() > 0) {
            var M = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = I.__points.__inner[0];
                return a
            }());
            M.__segments.add(I);
            aa.d().add(M)
        }
        if (J.__points.count() > 0) {
            var N = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = J.__points.__inner[0];
                return a
            }());
            N.__segments.add(J);
            ab.d().add(N)
        }
        if (K.__points.count() > 0) {
            var O = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = K.__points.__inner[0];
                return a
            }());
            O.__segments.add(K);
            ac.d().add(O)
        }
        if (L.__points.count() > 0) {
            var P = (function () {
                var a = new $.ig.PathFigure();
                a.__startPoint = L.__points.__inner[0];
                return a
            }());
            P.__segments.add(L);
            ad.d().add(P)
        }
    }
}, q: function (A, E, F, G, H, I, J, K, L, M) {
    this.d().clear();
    if (L == 1 && !this.c()) {
        var N = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), J, true, K, H, I, M);
        var O = N.count();
        var P = 0;
        var Q;
        var R;
        var S;
        for (var T = 0; T < O; T++) {
            P = N.__inner[T];
            Q = J.__inner[P];
            R = Q[0];
            S = Q[1];
            A.add({__x: R, __y: S, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            G.add({__x: R, __y: S, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            this.d().add({__x: R, __y: S, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    } else {
        var U = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), J, true, K, H, I, M);
        var V = $.ig.Flattener.prototype.j(new $.ig.List$1($.ig.Number.prototype.$type, 0), J, false, K, H, I, M);
        var W = U.count();
        var X = V.count();
        var Y = 0;
        var Z;
        var aa;
        var ab;
        for (var ac = 0; ac < W; ac++) {
            Y = U.__inner[ac];
            Z = J.__inner[Y];
            aa = Z[0];
            ab = Z[1];
            A.add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            E.add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            F.add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            this.d().add({__x: aa, __y: ab, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
        var B;
        var C;
        for (var D = X - 1; D >= 0; D--) {
            Y = V.__inner[D];
            Z = J.__inner[Y];
            if (K) {
                B = Z[0];
                C = Z[2]
            } else {
                B = Z[2];
                C = Z[3]
            }
            G.add({__x: B, __y: C, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
            F.add({__x: B, __y: C, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
        }
    }
}, $type: new $.ig.Type("CategoryLineRasterizer", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("CategoryMarkerManager", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (g, h, i, j) {
    var k = g.ie();
    if (i == null) {
        return
    }
    if (k) {
        for (var l = 0; l < h.count(); ++l) {
            $.ig.CategoryMarkerManager.prototype.b(i, l, h, j)
        }
    }
}, b: function (e, f, g, h) {
    e.item(f).y(g.__inner[f].__x);
    e.item(f).x(g.__inner[f].__y)
}, $type: new $.ig.Type("CategoryMarkerManager", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("RadialTrendLineManager", "TrendLineManagerBase$1", {init: function () {
    $.ig.TrendLineManagerBase$1.prototype.init.call(this, Number)
}, ao: function (m, r, s, t, u, v, w, x) {
    var l = this;
    var y = w.h() * w.j();
    var z = w.i() * w.j();
    var A = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    if (!w.l().isEmpty() && !w.k().isEmpty()) {
        if (r == $.ig.TrendLineType.prototype.none) {
            this.m(null);
            this.l().clear();
            return
        }
        if (this.u(r)) {
            this.l().clear();
            this.m($.ig.TrendFitCalculator.prototype.a(A, r, w, this.m(), s.count(), function (a) {
                return a + 1
            }, function (a) {
                return s.item(a)
            }, u, v, y, z))
        }
        if (this.v(r)) {
            this.m(null);
            $.ig.TrendAverageCalculator.prototype.b(r, this.l(), s, t);
            for (var B = w.h(); B <= w.i(); B += 1) {
                var C = (B % s.count()) * w.j();
                if (C >= 0 && C < this.l().count()) {
                    var D = u(C);
                    var E = v(this.l().__inner[C]);
                    if (!isNaN(D) && !isNaN(E)) {
                        A.add({__x: D + w.n(), __y: E, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
                    }
                }
            }
        }
        if (A.count() > 0) {
            this.y(A, w, m, x)
        }
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
            return e.am()(f.item(b).__x, f.item(b).__y)
        });
        a.t(function (b) {
            return e.an()(f.item(b).__x, f.item(b).__y)
        });
        a.o(true);
        a.w(g.k());
        a.x(g.l());
        return a
    }());
    k.bf()
}, $type: new $.ig.Type("RadialTrendLineManager", $.ig.TrendLineManagerBase$1.prototype.$type.specialize(Number))}, true);
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
$.ig.util.defType("RadialBase", "MarkerSeries", {ea: function (b) {
    $.ig.MarkerSeries.prototype.ea.call(this, b);
    this.i2(b)
}, _i2: null, i2: function (b) {
    if (arguments.length === 1) {
        this._i2 = b;
        return b
    } else {
        return this._i2
    }
}, init: function () {
    var a = this;
    this.it = new $.ig.RadialFrame(3);
    this.iu = new $.ig.RadialFrame(3);
    this.iv = new $.ig.RadialFrame(3);
    $.ig.MarkerSeries.prototype.init.call(this);
    this.i3(new $.ig.SeriesRenderer$2($.ig.RadialFrame.prototype.$type, $.ig.RadialBaseView.prototype.$type, 1, this.i8.on(this), this.i9.on(this), this.fo.on(this), this.fp.on(this), function (b) {
        return a.i2().da().q(a.resolution())
    }))
}, categoryAxis: function () {
    return this.angleAxis()
}, _i3: null, i3: function (b) {
    if (arguments.length === 1) {
        this._i3 = b;
        return b
    } else {
        return this._i3
    }
}, angleAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RadialBase.prototype.angleAxisProperty, b);
        return b
    } else {
        return this.b($.ig.RadialBase.prototype.angleAxisProperty)
    }
}, valueAxis: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RadialBase.prototype.valueAxisProperty, b);
        return b
    } else {
        return this.b($.ig.RadialBase.prototype.valueAxisProperty)
    }
}, clipSeriesToBounds: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RadialBase.prototype.clipSeriesToBoundsProperty, b);
        return b
    } else {
        return this.b($.ig.RadialBase.prototype.clipSeriesToBoundsProperty)
    }
}, ey: function (c, d) {
    this.i2().da().q(this.resolution());
    this.renderSeries(false)
}, ez: function (c, d) {
    this.i2().da().q(this.resolution());
    this.renderSeries(false)
}, preferredCategoryMode: function (b) {
}, e6: function (f, g, h, i) {
    var e = this;
    $.ig.MarkerSeries.prototype.e6.call(this, f, g, h, i);
    switch (g) {
        case $.ig.RadialBase.prototype.bc:
            if (h != null && i == null) {
                if (this.angleAxis() != null) {
                    this.angleAxis().deregisterSeries(this)
                }
                if (this.valueAxis() != null) {
                    this.valueAxis().deregisterSeries(this)
                }
            }
            if (h == null && i != null) {
                if (this.angleAxis() != null) {
                    this.angleAxis().registerSeries(this)
                }
                if (this.valueAxis() != null) {
                    this.valueAxis().registerSeries(this)
                }
            }
            this.i2().da().q(this.resolution());
            this.renderSeries(false);
            break;
        case $.ig.RadialBase.prototype.iq:
            if (this.angleAxis() != null && this.valueAxis() != null) {
                this.iw = new $.ig.RadialAxes(this.valueAxis(), this.angleAxis())
            }
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            this.i2().da().q(this.resolution());
            this.renderSeries(false);
            break;
        case $.ig.RadialBase.prototype.ir:
            if (this.angleAxis() != null && this.valueAxis() != null) {
                this.iw = new $.ig.RadialAxes(this.valueAxis(), this.angleAxis())
            }
            if (h != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, h)).deregisterSeries(this)
            }
            if (i != null) {
                ($.ig.util.cast($.ig.Axis.prototype.$type, i)).registerSeries(this)
            }
            this.i2().da().q(this.resolution());
            if (this.valueAxis() == null || !this.valueAxis().updateRange()) {
                this.renderSeries(false)
            }
            break;
        case $.ig.Series.prototype.bb:
            if (this.syncLink() != null && this.seriesViewer() != null) {
                this.i2().da().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.RadialBase.prototype.bo:
            this.iu.a(this.dz(), this.it, this.iv);
            if (this.ew(this.view())) {
                return
            }
            if (this.dz() == 1) {
                this.i9(this.iv, this.i2())
            } else {
                this.i9(this.iu, this.i2())
            }
            break;
        case $.ig.RadialBase.prototype.is:
            this.renderSeries(false);
            this.e5();
            break;
        case $.ig.Series.prototype.a9:
            if (h != $.ig.Visibility.prototype.visible && i == $.ig.Visibility.prototype.visible) {
                this.i2().da().q(this.resolution())
            }
            break
    }
}, eh: function (c) {
    var d = this.eg(c);
    return d >= 0 && this.dx() != null && d < this.dx().g() ? this.dx().item(d) : null
}, eg: function (h) {
    var i = this.view().ac();
    var j = this.view().ab();
    var k = -1;
    if (this.angleAxis() != null && !i.isEmpty() && !j.isEmpty() && this.iw != null) {
        var l = this.iw.n(h);
        if (l < 0) {
            l += Math.PI * 2
        }
        if (l > Math.PI * 2) {
            l -= Math.PI * 2
        }
        var m = this.angleAxis().getUnscaledAngle(l);
        if (this.angleAxis().categoryMode() != $.ig.CategoryMode.prototype.mode0) {
            m -= 0.5
        }
        var n = Math.round(m);
        k = n
    }
    return k
}, scrollIntoView: function (b) {
    return false
}, it: null, iu: null, iv: null, i8: function (c, d) {
}, i9: function (c, d) {
}, iw: null, fs: function () {
    $.ig.Series.prototype.fs.call(this);
    if (this.angleAxis() != null) {
        this.angleAxis().es(false)
    }
    if (this.valueAxis() != null) {
        this.valueAxis().es(false)
    }
}, es: function (f, g, h) {
    var i = true;
    var j = h;
    if (!$.ig.Series.prototype.es.call(this, f, g, h) || !h.cc() || g.isEmpty() || f.isEmpty() || this.angleAxis() == null || this.angleAxis().itemsSource() == null || this.valueAxis() == null || this.iw == null || this.dx() == null || this.angleAxis().seriesViewer() == null || this.valueAxis().seriesViewer() == null || this.valueAxis().actualMinimumValue() == this.valueAxis().actualMaximumValue()) {
        j.da().h(0);
        i = false
    }
    return i
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
    var i = new $.ig.SeriesRenderingArguments(this, h, g, f);
    (function () {
        var a = e.i3().v(i, e.it, e.iv, e.iu, e.i2());
        e.it = a.previousFrame;
        e.iv = a.currentFrame;
        e.iu = a.transitionFrame;
        return a.ret
    }())
}, ja: function () {
    var e = 0;
    var g = this.seriesViewer().series().getEnumerator();
    while (g.moveNext()) {
        var f = g.current();
        if (f == this) {
            return e
        }
        var h = $.ig.util.cast($.ig.RadialBase.prototype.$type, f);
        if (h != null && h.angleAxis() == this.angleAxis() && h.preferredCategoryMode(h.angleAxis()) == $.ig.CategoryMode.prototype.mode2) {
            e++
        }
    }
    $.ig.Debug.prototype.a(false, "RadialBase.GetMode2Index failed to find series");
    return -1
}, $type: new $.ig.Type("RadialBase", $.ig.MarkerSeries.prototype.$type, [$.ig.IHasCategoryModePreference.prototype.$type])}, true);
$.ig.util.defType("AnchoredRadialSeries", "RadialBase", {ed: function () {
    return new $.ig.AnchoredRadialSeriesView(this)
}, ea: function (b) {
    $.ig.RadialBase.prototype.ea.call(this, b);
    this.ju(b)
}, _ju: null, ju: function (b) {
    if (arguments.length === 1) {
        this._ju = b;
        return b
    } else {
        return this._ju
    }
}, init: function () {
    this.ji = {__x: 0, __y: 0, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    $.ig.RadialBase.prototype.init.call(this);
    this.jv(new $.ig.CategoryLineRasterizer())
}, _jv: null, jv: function (b) {
    if (arguments.length === 1) {
        this._jv = b;
        return b
    } else {
        return this._jv
    }
}, valueMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredRadialSeries.prototype.valueMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredRadialSeries.prototype.valueMemberPathProperty)
    }
}, jw: function (c) {
    if (arguments.length === 1) {
        if (this.jh != c) {
            var d = this.jh;
            this.jh = c;
            this.ej($.ig.AnchoredRadialSeries.prototype.jg, d, this.jh)
        }
        return c
    } else {
        return this.jh
    }
}, jh: null, trendLineType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredRadialSeries.prototype.trendLineTypeProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredRadialSeries.prototype.trendLineTypeProperty)
    }
}, trendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredRadialSeries.prototype.trendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredRadialSeries.prototype.trendLineBrushProperty)
    }
}, actualTrendLineBrush: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredRadialSeries.prototype.actualTrendLineBrushProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredRadialSeries.prototype.actualTrendLineBrushProperty)
    }
}, trendLineThickness: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredRadialSeries.prototype.trendLineThicknessProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredRadialSeries.prototype.trendLineThicknessProperty)
    }
}, trendLineDashCap: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredRadialSeries.prototype.trendLineDashCapProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredRadialSeries.prototype.trendLineDashCapProperty)
    }
}, trendLineDashArray: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredRadialSeries.prototype.trendLineDashArrayProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredRadialSeries.prototype.trendLineDashArrayProperty)
    }
}, trendLinePeriod: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredRadialSeries.prototype.trendLinePeriodProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredRadialSeries.prototype.trendLinePeriodProperty)
    }
}, trendLineZIndex: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.AnchoredRadialSeries.prototype.trendLineZIndexProperty, b);
        return b
    } else {
        return this.b($.ig.AnchoredRadialSeries.prototype.trendLineZIndexProperty)
    }
}, em: function (b) {
    if (b != null && b == this.angleAxis() && this.jw() != null && this.jw().count() > 0) {
        return new $.ig.AxisRange(0, this.jw().count() - 1)
    }
    if (b != null && b == this.valueAxis() && this.jw() != null && this.jw().count() > 0) {
        return new $.ig.AxisRange(this.jw().minimum(), this.jw().maximum())
    }
    return null
}, e6: function (f, g, h, i) {
    $.ig.RadialBase.prototype.e6.call(this, f, g, h, i);
    if (this.ju().dt().ae(f, g, h, i, this.trendLineDashArray())) {
        this.renderSeries(false);
        this.e5()
    }
    var j = $.ig.util.cast($.ig.NumericAxisBase.prototype.$type, this.valueAxis());
    switch (g) {
        case $.ig.Series.prototype.be:
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, h)).ac(this.jw());
                this.jw(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, i) != null) {
                this.jw(this.gs(this.valueMemberPath()));
                this.ju().da().q(this.resolution())
            }
            if (j != null && !j.updateRange()) {
                this.ju().da().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.AnchoredRadialSeries.prototype.jf:
            if (this.dx() != null) {
                this.dx().ac(this.jw());
                this.jw(this.gs(this.valueMemberPath()))
            }
            break;
        case $.ig.AnchoredRadialSeries.prototype.jg:
            if (j != null && !j.updateRange()) {
                this.ju().da().q(this.resolution());
                this.renderSeries(false)
            }
            break;
        case $.ig.AnchoredRadialSeries.prototype.b6:
            this.fj();
            break;
        case $.ig.AnchoredRadialSeries.prototype.b4:
            this.e5();
            break
    }
}, fc: function (e, f, g, h) {
    switch (e) {
        case $.ig.FastItemsSourceEventAction.prototype.reset:
        case $.ig.FastItemsSourceEventAction.prototype.insert:
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            this.ju().da().q(this.resolution());
            break
    }
    this.ju().dt().ad(e, f, g, h);
    switch (e) {
        case $.ig.FastItemsSourceEventAction.prototype.reset:
            if (this.valueAxis() != null && !this.valueAxis().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.insert:
            if (this.valueAxis() != null && !this.valueAxis().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.remove:
            if (this.valueAxis() != null && !this.valueAxis().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.replace:
            if (this.valueMemberPath() != null && this.ju().da().h() > 0 && this.valueAxis() != null && !this.valueAxis().updateRange()) {
                this.renderSeries(true)
            }
            break;
        case $.ig.FastItemsSourceEventAction.prototype.change:
            if (h == this.valueMemberPath()) {
                if (this.valueAxis() != null && !this.valueAxis().updateRange()) {
                    this.renderSeries(true)
                }
            }
            break
    }
}, es: function (f, g, h) {
    var i = $.ig.RadialBase.prototype.es.call(this, f, g, h);
    var j = h;
    if (this.dx() == null || this.dx().g() == 0 || this.angleAxis() == null || this.jw() == null || this.angleAxis().itemsCount() == 0 || this.valueAxis() == null || Number.isInfinity(this.valueAxis().actualMinimumValue()) || Number.isInfinity(this.valueAxis().actualMaximumValue()) || j.da().h() < 1) {
        i = false
    }
    return i
}, jx: function () {
    return false
}, i8: function (q, C) {
    var p = this;
    var D = C.ac();
    var E = C.ab();
    var F = this.angleAxis();
    var G = this.valueAxis();
    var H = G.actualMinimumValue();
    var I = G.actualMaximumValue();
    q.d.clear();
    q.f.clear();
    q.g.clear();
    var J = this.ie();
    var K = 0;
    var L = C;
    var M = new $.ig.CollisionAvoider();
    var N = 0;
    var O = C.da().g();
    var P = this.preferredCategoryMode(F);
    if (P == $.ig.CategoryMode.prototype.mode0 && F.categoryMode() != $.ig.CategoryMode.prototype.mode0) {
        P = $.ig.CategoryMode.prototype.mode1
    }
    switch (P) {
        case $.ig.CategoryMode.prototype.mode0:
            N = 0;
            break;
        case $.ig.CategoryMode.prototype.mode1:
            N = 0.5 * F.getCategorySize(D, E);
            break;
        case $.ig.CategoryMode.prototype.mode2:
            N = F.getGroupCenter(this.ja(), D, E);
            break
    }
    if (F.isInverted()) {
        N = -N
    }
    L.dt().ak(this.valueAxis().im());
    L.dt().al(this.valueAxis().io());
    L.dt().am(function (a, b) {
        return p.j6(a, b, D, E)
    });
    L.dt().an(function (a, b) {
        return p.j7(a, b, D, E)
    });
    var Q = (function () {
        var a = new $.ig.Clipper(0, E, false);
        a.h(q.g);
        return a
    }());
    var R = (function () {
        var a = new $.ig.TrendResolutionParams();
        a.j(C.da().h());
        a.h(C.da().f());
        a.i(O);
        a.n(N);
        a.m(p.resolution());
        a.k(E);
        a.l(D);
        return a
    }());
    L.dt().ao(q.g, this.trendLineType(), this.jw(), this.trendLinePeriod(), function (a) {
        return p.angleAxis().getScaledAngle(a)
    }, function (a) {
        return p.valueAxis().getScaledValue2(a)
    }, R, Q);
    var S = true;
    if (this.j8(C)) {
        O--
    }
    for (var T = C.da().f(); T <= O; ++T) {
        var U = T;
        if (U * C.da().h() >= this.angleAxis().itemsCount()) {
            U -= $.ig.intDivide((this.angleAxis().itemsCount()), C.da().h())
        }
        var r = C.da().getBucket(U);
        if (!isNaN(r[0])) {
            r[0] = (F.getScaledAngle(r[0]) + N);
            if (r[1] < H || r[1] > I) {
                continue
            }
            r[1] = G.getScaledValue2(r[1]);
            if (C.da().h() > 1) {
                if (r[2] < H || r[2] > I) {
                    continue
                }
                r[2] = G.getScaledValue2(r[2])
            } else {
                r[2] = r[1]
            }
            if ((isNaN(r[1]) || isNaN(r[2])) && S && this.jx() && this.kb()) {
                O++
            } else {
                S = false
            }
            q.d.add(r);
            if (J) {
                var s = Math.min(U * C.da().h(), this.dx().g() - 1);
                var v = this.iw.j(r[0], r[1], D, E);
                var w = this.iw.m(r[0], r[1], D, E);
                var A = new $.ig.Rect(0, v - 5, w - 5, 11, 11);
                if (!isNaN(v) && !isNaN(w) && !Number.isInfinity(v) && !Number.isInfinity(w) && M.tryAdd(A)) {
                    q.f.add({__x: v, __y: w, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
                    var B = C.dc().item(K);
                    ($.ig.util.cast($.ig.DataContext.prototype.$type, B.a9())).item(this.dx().item(s));
                    ++K
                }
            }
        } else {
            if (S && this.jx() && this.kb()) {
                O++
            }
        }
    }
    C.dc().g(K);
    return
}, j6: function (e, f, g, h) {
    return this.iw.j(e, f, g, h)
}, j7: function (e, f, g, h) {
    return this.iw.m(e, f, g, h)
}, j8: function (c) {
    var d = c;
    return !this.jx() && d.da().f() == 0 && d.da().g() == this.angleAxis().itemsCount()
}, j9: function (k, l, m) {
    var n = null;
    var o = m.ac();
    var p = m.ab();
    if (l > -1 && !o.isEmpty() && !p.isEmpty()) {
        var q = k.__inner[0][0] < p.left() - 2000 ? p.left() - 10 : NaN;
        var r = p.bottom() + 10;
        var s = k.__inner[l][0] > p.right() + 2000 ? p.right() + 10 : NaN;
        var t = p.top() - 10;
        n = new $.ig.Clipper(1, q, r, s, t, false)
    }
    return n
}, ji: null, ka: function (f, g, h, i, j) {
    if (f.count() > 0 && i.count() > 0) {
        if (!j || this.kc()) {
            f.add(this.ji);
            f.add(f.__inner[0]);
            i.add(this.ji);
            i.add(i.__inner[0])
        }
    }
}, kb: function () {
    return !this.kc()
}, kc: function () {
    var b = this.view().ac();
    return !b.contains1({__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName})
}, eu: function (d, e) {
    $.ig.Series.prototype.eu.call(this, d, e);
    var f = e;
    if (d) {
        f.dc().clear()
    }
    f.dt().ab()
}, i9: function (f, g) {
    var h = g.ac();
    var i = g.ab();
    var j = g;
    j.dt().t(f.g);
    $.ig.CategoryMarkerManager.prototype.a(this, f.f, j.dc(), this.useLightweightMarkers());
    j.c1();
    this.kd(i, h, j)
}, kd: function (d, e, f) {
    f.dy(d, e)
}, fj: function () {
    $.ig.MarkerSeries.prototype.fj.call(this);
    if (this.index() < 0) {
        return
    }
    this.ju().dz()
}, el: function (c, d) {
    if (c == this.ju().dt().n()) {
        return null
    }
    return $.ig.Series.prototype.el.call(this, c, d)
}, scrollIntoView: function (i) {
    var j = this.view().ac();
    var k = this.view().ab();
    var l = !j.isEmpty() && !k.isEmpty() && this.dx() != null ? this.dx().item1(i) : -1;
    if (this.angleAxis() == null || this.jw() == null || this.valueAxis() == null) {
        return false
    }
    if (l < 0 || l > this.jw().count() - 1) {
        return false
    }
    var m = this.angleAxis().getScaledAngle(l);
    var n = this.valueAxis().getScaledValue2(this.jw().item(l));
    if (isNaN(n)) {
        n = (this.valueAxis().io() + this.valueAxis().im()) / 2
    }
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
}, er: function (e, f) {
    $.ig.Series.prototype.er.call(this, e, f);
    if (!this.dv()) {
        this.view().b4(f);
        return
    }
    this.view().b4(f);
    var g = $.ig.util.cast($.ig.AnchoredRadialSeriesView.prototype.$type, this.dt());
    g.da().q(this.resolution());
    if (this.ew(this.dt())) {
        return
    }
    var h = new $.ig.RadialFrame(3);
    this.i8(h, g);
    this.i9(h, g);
    this.dv(false)
}, gw: function (c) {
    $.ig.MarkerSeries.prototype.gw.call(this, c);
    var d = new $.ig.PolyLineVisualData(1, "trendLine", this.ju().dt().n());
    d.tags().add("Trend");
    c.shapes().add(d)
}, $type: new $.ig.Type("AnchoredRadialSeries", $.ig.RadialBase.prototype.$type)}, true);
$.ig.util.defType("RadialBucketCalculator", "Object", {_e: null, e: function (b) {
    if (arguments.length === 1) {
        this._e = b;
        return b
    } else {
        return this._e
    }
}, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.e(b)
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
}, getBucket: function (b) {
    throw new $.ig.NotImplementedException()
}, getErrorBucket: function (c, d) {
    return NaN
}, getBucketInfo: function (e, f, g, h) {
    e = this.f();
    f = this.g();
    g = this.h();
    h = this.e().db().resolution();
    return{firstBucket: e, lastBucket: f, bucketSize: g, resolution: h}
}, q: function (k) {
    var l = this.e().ac();
    var m = this.e().ab();
    var n = this.e().db().angleAxis();
    if (l.isEmpty() || m.isEmpty() || n == null || this.e().db().dx() == null || this.e().db().dx().g() == 0) {
        this.h(0);
        return
    }
    var o = Math.floor(n.h4(m, l));
    var p = Math.ceil(n.h5(m, l));
    if (n.isInverted()) {
        p = Math.ceil(n.h4(m, l));
        o = Math.floor(n.h5(m, l))
    }
    if (p < o) {
        p = n.itemsCount() + p
    }
    var q = this.e().db().valueAxis();
    var r = q != null ? q.im() : 0.75;
    var s = Math.min(m.width(), m.height()) * 0.5 * (r) * 2 * Math.PI;
    var t = Math.floor((p - o + 1) * k / s);
    this.h(Math.max(1, t));
    this.f(Math.max(0, Math.floor(o / this.h()) - 1));
    this.g(Math.ceil(p / this.h()))
}, cacheValues: function () {
}, unCacheValues: function () {
}, $type: new $.ig.Type("RadialBucketCalculator", $.ig.Object.prototype.$type, [$.ig.IBucketizer.prototype.$type])}, true);
$.ig.util.defType("AnchoredRadialBucketCalculator", "RadialBucketCalculator", {_s: null, s: function (b) {
    if (arguments.length === 1) {
        this._s = b;
        return b
    } else {
        return this._s
    }
}, init: function (b) {
    $.ig.RadialBucketCalculator.prototype.init.call(this, b);
    this.s(b)
}, getBucket: function (j) {
    var i = this;
    var k = this.s().ds().jw();
    var l = Math.min(j * this.h(), k.count() - 1);
    var m = Math.min(l + this.h() - 1, k.count() - 1);
    var n = NaN;
    var o = NaN;
    for (var p = l; p <= m; ++p) {
        var q = k.item(p);
        if (!isNaN(n)) {
            if (!isNaN(q)) {
                n = Math.min(n, q);
                o = Math.max(o, q)
            }
        } else {
            n = q;
            o = q
        }
    }
    if (!isNaN(n)) {
        return(function () {
            var a = new Array();
            a.add((0.5 * (l + m)));
            a.add(n);
            a.add(o);
            return a
        }())
    }
    return(function () {
        var a = new Array();
        a.add((0.5 * (l + m)));
        a.add(NaN);
        a.add(NaN);
        return a
    }())
}, $type: new $.ig.Type("AnchoredRadialBucketCalculator", $.ig.RadialBucketCalculator.prototype.$type)}, true);
$.ig.util.defType("RadialBaseView", "MarkerSeriesView", {_da: null, da: function (b) {
    if (arguments.length === 1) {
        this._da = b;
        return b
    } else {
        return this._da
    }
}, _db: null, db: function (b) {
    if (arguments.length === 1) {
        this._db = b;
        return b
    } else {
        return this._db
    }
}, init: function (b) {
    $.ig.MarkerSeriesView.prototype.init.call(this, b);
    this.db(b);
    this.dc(new $.ig.Pool$1($.ig.Marker.prototype.$type));
    this.c3(this.dc())
}, _dc: null, dc: function (b) {
    if (arguments.length === 1) {
        this._dc = b;
        return b
    } else {
        return this._dc
    }
}, cp: function (b) {
    this.dc().p(b)
}, _dd: null, dd: function (b) {
    if (arguments.length === 1) {
        this._dd = b;
        return b
    } else {
        return this._dd
    }
}, _de: null, de: function (b) {
    if (arguments.length === 1) {
        this._de = b;
        return b
    } else {
        return this._de
    }
}, $type: new $.ig.Type("RadialBaseView", $.ig.MarkerSeriesView.prototype.$type)}, true);
$.ig.util.defType("AnchoredRadialSeriesView", "RadialBaseView", {_ds: null, ds: function (b) {
    if (arguments.length === 1) {
        this._ds = b;
        return b
    } else {
        return this._ds
    }
}, init: function (b) {
    $.ig.RadialBaseView.prototype.init.call(this, b);
    this.da(new $.ig.AnchoredRadialBucketCalculator(this));
    this.ds(b);
    this.dt(new $.ig.RadialTrendLineManager())
}, _dt: null, dt: function (b) {
    if (arguments.length === 1) {
        this._dt = b;
        return b
    } else {
        return this._dt
    }
}, dy: function (c, d) {
}, dz: function () {
    this.ds().actualTrendLineBrush(null);
    if (this.ds().trendLineBrush() != null) {
        this.ds().actualTrendLineBrush(this.ds().trendLineBrush())
    } else {
        this.ds().actualTrendLineBrush(this.ds().actualBrush())
    }
}, a1: function (c, d) {
    $.ig.MarkerSeriesView.prototype.a1.call(this, c, d)
}, $type: new $.ig.Type("AnchoredRadialSeriesView", $.ig.RadialBaseView.prototype.$type)}, true);
$.ig.util.defType("RadialFrame", "CategoryFrame", {init: function (b) {
    $.ig.CategoryFrame.prototype.init.call(this, b)
}, $type: new $.ig.Type("RadialFrame", $.ig.CategoryFrame.prototype.$type)}, true);
$.ig.util.defType("RadialColumnSeries", "AnchoredRadialSeries", {ed: function () {
    return new $.ig.RadialColumnSeriesView(this)
}, ea: function (b) {
    $.ig.AnchoredRadialSeries.prototype.ea.call(this, b);
    this.kl(b)
}, _kl: null, kl: function (b) {
    if (arguments.length === 1) {
        this._kl = b;
        return b
    } else {
        return this._kl
    }
}, init: function () {
    $.ig.AnchoredRadialSeries.prototype.init.call(this);
    this.a3($.ig.RadialColumnSeries.prototype.$type)
}, onApplyTemplate: function () {
    $.ig.Control.prototype.a6.call(this);
    this.renderSeries(false)
}, radiusX: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RadialColumnSeries.prototype.radiusXProperty, b);
        return b
    } else {
        return this.b($.ig.RadialColumnSeries.prototype.radiusXProperty)
    }
}, radiusY: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RadialColumnSeries.prototype.radiusYProperty, b);
        return b
    } else {
        return this.b($.ig.RadialColumnSeries.prototype.radiusYProperty)
    }
}, preferredCategoryMode: function (b) {
    return b != null && b == this.angleAxis() ? $.ig.CategoryMode.prototype.mode2 : $.ig.CategoryMode.prototype.mode0
}, eu: function (d, e) {
    $.ig.AnchoredRadialSeries.prototype.eu.call(this, d, e);
    var f = e;
    if (d) {
        f.d0.g(0)
    }
}, i9: function (A, P) {
    $.ig.AnchoredRadialSeries.prototype.i9.call(this, A, P);
    var Q = A.d;
    var R = P.ac();
    var S = P.ab();
    var T = this.valueAxis().hq(S, R);
    var U = P;
    var V = this.valueAxis();
    var W = Math.max(0, 0.5 * V.io());
    W = Math.max(W, T.minLength() * 0.9);
    var X = $.ig.ViewportUtils.prototype.e(W, R, S);
    var Y = this.angleAxis().gz(R, S);
    var Z = Math.max(0.1 * this.valueAxis().im(), W);
    var aa = this.iw.j(0, Z, R, S);
    var ab = this.iw.m(0, Z, R, S);
    var ac = this.iw.j(Y, Z, R, S);
    var ad = this.iw.m(Y, Z, R, S);
    var ae = Math.sqrt((aa - ac) * (aa - ac) + (ab - ad) * (ab - ad));
    var af = {__x: $.ig.ViewportUtils.prototype.a(0.5, R, S), __y: $.ig.ViewportUtils.prototype.c(0.5, R, S), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    for (var ag = 0; ag < Q.count(); ++ag) {
        var ah = Math.min(A.d.__inner[ag][2], T.maxLength() * 1.1);
        var ai = this.iw.j(A.d.__inner[ag][0], ah, R, S);
        var aj = this.iw.m(A.d.__inner[ag][0], ah, R, S);
        var ak = Math.sqrt((ai - af.__x) * (ai - af.__x) + (aj - af.__y) * (aj - af.__y));
        var al = ak;
        var am = X;
        var an = A.d.__inner[ag][0] - (Math.PI / 2);
        var B = U.d0.item(ag);
        var C = 0 - (ae / 2);
        var D = (ae / 2);
        var E = Math.max(am, al);
        var F = Math.min(am, al);
        var G = Math.cos(an);
        var H = Math.sin(an);
        var I = {__x: af.__x + (C * G - E * H), __y: af.__y + (C * H + E * G), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var J = {__x: af.__x + (D * G - E * H), __y: af.__y + (D * H + E * G), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var K = {__x: af.__x + (D * G - F * H), __y: af.__y + (D * H + F * G), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var L = {__x: af.__x + (C * G - F * H), __y: af.__y + (C * H + F * G), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
        var M = new $.ig.PathGeometry();
        var N = new $.ig.PathFigure();
        N.__startPoint = I;
        N.__isClosed = true;
        var O = new $.ig.PolyLineSegment();
        O.__points.add(J);
        O.__points.add(K);
        O.__points.add(L);
        N.__segments.add(O);
        M.d().add(N);
        B.bp(M)
    }
    U.d0.g(Q.count());
    this.kl().ee()
}, $type: new $.ig.Type("RadialColumnSeries", $.ig.AnchoredRadialSeries.prototype.$type)}, true);
$.ig.util.defType("RadialColumnSeriesView", "AnchoredRadialSeriesView", {_d3: null, d3: function (b) {
    if (arguments.length === 1) {
        this._d3 = b;
        return b
    } else {
        return this._d3
    }
}, init: function (c) {
    var b = this;
    $.ig.AnchoredRadialSeriesView.prototype.init.call(this, c);
    this.d3(c);
    this.d0 = (function () {
        var a = new $.ig.Pool$1($.ig.Path.prototype.$type);
        a.create(b.d9.on(b));
        a.activate(b.ea.on(b));
        a.disactivate(b.eb.on(b));
        a.destroy(b.ec.on(b));
        return a
    }())
}, d0: null, ag: function () {
    var a = this;
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    this.d4(new $.ig.List$1($.ig.Path.prototype.$type, 0));
    if (!this.ad()) {
        this.u().resolution(4);
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, _d4: null, d4: function (b) {
    if (arguments.length === 1) {
        this._d4 = b;
        return b
    } else {
        return this._d4
    }
}, d9: function () {
    var b = new $.ig.Path();
    this.d4().add(b);
    b.__visibility = $.ig.Visibility.prototype.collapsed;
    return b
}, ea: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, eb: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, ec: function (b) {
    this.d4().remove(b)
}, ed: function (g, h, i, j, k, l) {
    this.an()
}, ar: function (d, e) {
    $.ig.SeriesView.prototype.ar.call(this, d, e);
    var f = d;
    f.__fill = this.u().actualBrush();
    f.__stroke = this.u().actualOutline();
    f.a7(this.u().thickness());
    f.a8(this.u().dashArray());
    f.a9(this.u().dashCap())
}, at: function (e, f) {
    $.ig.SeriesView.prototype.at.call(this, e, f);
    var g = e;
    var h = this.ay(f);
    g.__fill = h;
    g.__stroke = h;
    g.a7(this.u().thickness() + $.ig.SeriesView.prototype.b)
}, a0: function (e, f) {
    $.ig.SeriesView.prototype.a0.call(this, e, f);
    if (e.b()) {
        for (var g = 0; g < this.d4().count(); g++) {
            var h = this.d4().__inner[g];
            this.ap(h, g, f);
            if (this.k && !f) {
                e.e($.ig.GradientDirection.prototype.radial, null)
            }
            e.g(h)
        }
    }
}, b5: function (f) {
    $.ig.SeriesView.prototype.b5.call(this, f);
    var g = 0;
    var i = this.d0.h().getEnumerator();
    while (i.moveNext()) {
        var h = i.current();
        var j = new $.ig.PathVisualData(1, "column" + g, h);
        j.tags().add("Main");
        f.shapes().add(j);
        g++
    }
}, ee: function () {
    this.an()
}, $type: new $.ig.Type("RadialColumnSeriesView", $.ig.AnchoredRadialSeriesView.prototype.$type)}, true);
$.ig.util.defType("RadialLineSeries", "AnchoredRadialSeries", {ed: function () {
    return new $.ig.RadialLineSeriesView(this)
}, ea: function (b) {
    $.ig.AnchoredRadialSeries.prototype.ea.call(this, b);
    this.kj(b)
}, _kj: null, kj: function (b) {
    if (arguments.length === 1) {
        this._kj = b;
        return b
    } else {
        return this._kj
    }
}, init: function () {
    $.ig.AnchoredRadialSeries.prototype.init.call(this);
    this.a3($.ig.RadialLineSeries.prototype.$type)
}, onApplyTemplate: function () {
    $.ig.Control.prototype.a6.call(this)
}, preferredCategoryMode: function (b) {
    return $.ig.CategoryMode.prototype.mode0
}, eu: function (d, e) {
    $.ig.AnchoredRadialSeries.prototype.eu.call(this, d, e);
    var f = e;
    f.d7()
}, i9: function (m, n) {
    $.ig.AnchoredRadialSeries.prototype.i9.call(this, m, n);
    var o = n.ac();
    var p = n.ab();
    var q = m.d;
    var r = q.count();
    var s = new $.ig.List$1($.ig.Array.prototype.$type, 2, r);
    var t = 0;
    for (var u = 0; u < r; u++) {
        var v = new Array(4);
        s.add(v);
        v[0] = this.iw.j(m.d.__inner[u][0], m.d.__inner[u][1], o, p);
        v[1] = this.iw.m(m.d.__inner[u][0], m.d.__inner[u][1], o, p);
        v[2] = this.iw.j(m.d.__inner[u][0], m.d.__inner[u][2], o, p);
        var w = m.d.__inner[u][2];
        v[3] = this.iw.m(m.d.__inner[u][0], w, o, p);
        if (w > t) {
            t = w
        }
    }
    var x = n;
    x.d8(r, s, false, this.unknownValuePlotting(), this.j9(s, r - 1, n), x.da().h(), this.resolution())
}, unknownValuePlotting: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RadialLineSeries.prototype.unknownValuePlottingProperty, b);
        return b
    } else {
        return this.b($.ig.RadialLineSeries.prototype.unknownValuePlottingProperty)
    }
}, e6: function (e, f, g, h) {
    $.ig.AnchoredRadialSeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.RadialLineSeries.prototype.kg:
            this.renderSeries(false);
            this.e5();
            break
    }
}, jx: function () {
    return true
}, $type: new $.ig.Type("RadialLineSeries", $.ig.AnchoredRadialSeries.prototype.$type)}, true);
$.ig.util.defType("RadialLineSeriesView", "AnchoredRadialSeriesView", {_d4: null, d4: function (b) {
    if (arguments.length === 1) {
        this._d4 = b;
        return b
    } else {
        return this._d4
    }
}, init: function (b) {
    this.d0 = new $.ig.Path();
    this.d1 = new $.ig.Path();
    this.d2 = new $.ig.Path();
    $.ig.AnchoredRadialSeriesView.prototype.init.call(this, b);
    this.d4(b)
}, ag: function () {
    $.ig.MarkerSeriesView.prototype.ag.call(this)
}, d0: null, d1: null, d2: null, d7: function () {
    this.d0.bp(null);
    this.d1.bp(null);
    this.d2.bp(null);
    this.an()
}, d8: function (h, i, j, k, l, m, n) {
    this.ds().jv().i(this.d0, this.d1, this.d2, h, i, j, k, l, m, n);
    this.an()
}, aw: function () {
    $.ig.SeriesView.prototype.aw.call(this);
    this.d0.__stroke = this.u().actualBrush();
    this.d0.a7(this.u().thickness());
    this.d0.a8(this.u().dashArray());
    this.d0.a9(this.u().dashCap());
    this.d2.__stroke = this.u().actualBrush();
    this.d2.a7(this.u().thickness());
    this.d2.a8(this.u().dashArray());
    this.d2.a9(this.u().dashCap());
    this.d1.__fill = this.u().actualBrush();
    this.d1.__opacity = 0.75
}, ax: function () {
    $.ig.SeriesView.prototype.ax.call(this);
    var b = this.az();
    this.d0.__stroke = b;
    this.d0.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.d2.__stroke = b;
    this.d2.a7(this.u().thickness() + $.ig.SeriesView.prototype.b);
    this.d1.__fill = b;
    this.d1.__opacity = 1
}, a0: function (c, d) {
    $.ig.SeriesView.prototype.a0.call(this, c, d);
    if (c.b()) {
        if (this.k && !d) {
            c.e($.ig.GradientDirection.prototype.radial, null)
        }
        c.g(this.d1);
        c.g(this.d0);
        c.g(this.d2)
    }
}, b5: function (e) {
    $.ig.SeriesView.prototype.b5.call(this, e);
    var f = new $.ig.PathVisualData(1, "lowerShape", this.d0);
    f.tags().add("Lower");
    f.tags().add("Main");
    var g = new $.ig.PathVisualData(1, "upperShape", this.d2);
    g.tags().add("Upper");
    var h = new $.ig.PathVisualData(1, "translucentShape", this.d1);
    h.tags().add("Translucent");
    e.shapes().add(f);
    e.shapes().add(g);
    e.shapes().add(h)
}, $type: new $.ig.Type("RadialLineSeriesView", $.ig.AnchoredRadialSeriesView.prototype.$type)}, true);
$.ig.util.defType("RadialPieSeries", "AnchoredRadialSeries", {ed: function () {
    return new $.ig.RadialPieSeriesView(this)
}, ea: function (b) {
    $.ig.AnchoredRadialSeries.prototype.ea.call(this, b);
    this.kl(b)
}, _kl: null, kl: function (b) {
    if (arguments.length === 1) {
        this._kl = b;
        return b
    } else {
        return this._kl
    }
}, init: function () {
    $.ig.AnchoredRadialSeries.prototype.init.call(this);
    this.a3($.ig.RadialPieSeries.prototype.$type)
}, radiusX: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RadialPieSeries.prototype.radiusXProperty, b);
        return b
    } else {
        return this.b($.ig.RadialPieSeries.prototype.radiusXProperty)
    }
}, radiusY: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.RadialPieSeries.prototype.radiusYProperty, b);
        return b
    } else {
        return this.b($.ig.RadialPieSeries.prototype.radiusYProperty)
    }
}, preferredCategoryMode: function (b) {
    return b != null && b == this.angleAxis() ? $.ig.CategoryMode.prototype.mode2 : $.ig.CategoryMode.prototype.mode0
}, eu: function (d, e) {
    $.ig.AnchoredRadialSeries.prototype.eu.call(this, d, e);
    var f = e;
    if (d && f.d0 != null) {
        f.d0.g(0)
    }
}, i9: function (w, x) {
    $.ig.AnchoredRadialSeries.prototype.i9.call(this, w, x);
    var y = x;
    var z = x.ac();
    var A = x.ab();
    var B = this.valueAxis().hq(A, z);
    var C = w.d;
    var D = this.valueAxis();
    var E = Math.max(0, 0.5 * D.io());
    var F = E;
    F = Math.max(F, B.minLength());
    var G = this.angleAxis().gz(z, A);
    var H = {__x: 0.5, __y: 0.5, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var I = this.radiusX();
    var J = this.radiusY();
    var K = (I > 0 && J > 0);
    var L = 0;
    for (var M = 0; M < C.count(); ++M) {
        var N = y.d0.item(M);
        var O = C.__inner[M][0];
        var P = Math.min(C.__inner[M][2], B.maxLength());
        var Q = null;
        if (K) {
            Q = this.kp(z, A, O - (G * 0.5), O + (G * 0.5), F, P, H, I, J)
        } else {
            Q = this.ko(z, A, O - (G * 0.5), O + (G * 0.5), F, P, H)
        }
        N.bp(Q);
        var R = C.__inner[M][2];
        if (R > L) {
            L = R
        }
    }
    y.dd($.ig.ViewportUtils.prototype.e(L, z, A));
    y.de({__x: $.ig.ViewportUtils.prototype.a(H.__x, z, A), __y: $.ig.ViewportUtils.prototype.c(H.__y, z, A), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName});
    y.d0.g(C.count());
    y.ed()
}, ko: function (l, m, n, o, p, q, r) {
    var k = this;
    var s = $.ig.SliceCoords.prototype.aw(l, m, n, o, p, q, r);
    var t = new $.ig.PathFigure();
    t.__startPoint = s.m();
    t.__isClosed = true;
    t.__segments.add((function () {
        var a = new $.ig.LineSegment(1);
        a.d(s.n());
        return a
    }()));
    t.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h(s.o());
        a.k(s.v());
        a.j($.ig.SweepDirection.prototype.clockwise);
        a.i(s.u());
        return a
    }()));
    t.__segments.add((function () {
        var a = new $.ig.LineSegment(1);
        a.d(s.p());
        return a
    }()));
    t.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h(s.m());
        a.k(s.w());
        a.j($.ig.SweepDirection.prototype.counterclockwise);
        a.i(s.u());
        return a
    }()));
    var u = new $.ig.PathGeometry();
    u.d().add(t);
    return u
}, kp: function (p, q, r, s, t, u, v, w, x) {
    var o = this;
    var y = $.ig.SliceCoords.prototype.ax(p, q, r, s, t, u, v, w, x);
    if (y == null) {
        return this.ko(p, q, r, s, t, u, v)
    }
    var z = new $.ig.PathFigure();
    z.__startPoint = y.m();
    z.__isClosed = true;
    var A = ((r + ((s - r) * 0.5)) * 180 / Math.PI) + 90;
    var B = new $.ig.Size(y.x().c() * (t / u), y.x().d() * (t / u));
    z.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h(y.q());
        a.k(B);
        a.l(A);
        a.j($.ig.SweepDirection.prototype.clockwise);
        a.i(false);
        return a
    }()));
    z.__segments.add((function () {
        var a = new $.ig.LineSegment(1);
        a.d(y.n());
        return a
    }()));
    z.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h(y.r());
        a.k(y.x());
        a.l(A);
        a.j($.ig.SweepDirection.prototype.clockwise);
        a.i(false);
        return a
    }()));
    z.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h(y.o());
        a.k(y.v());
        a.j($.ig.SweepDirection.prototype.clockwise);
        a.i(y.u());
        return a
    }()));
    z.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h(y.s());
        a.k(y.x());
        a.l(A);
        a.j($.ig.SweepDirection.prototype.clockwise);
        a.i(false);
        return a
    }()));
    z.__segments.add((function () {
        var a = new $.ig.LineSegment(1);
        a.d(y.p());
        return a
    }()));
    z.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h(y.t());
        a.k(B);
        a.l(A);
        a.j($.ig.SweepDirection.prototype.clockwise);
        a.i(false);
        return a
    }()));
    z.__segments.add((function () {
        var a = new $.ig.ArcSegment();
        a.h(y.m());
        a.k(y.w());
        a.j($.ig.SweepDirection.prototype.counterclockwise);
        a.i(y.u());
        return a
    }()));
    var C = new $.ig.PathGeometry();
    C.d().add(z);
    return C
}, e6: function (e, f, g, h) {
    $.ig.AnchoredRadialSeries.prototype.e6.call(this, e, f, g, h);
    switch (f) {
        case $.ig.RadialPieSeries.prototype.kg:
        case $.ig.RadialPieSeries.prototype.kh:
            this.renderSeries(false);
            break
    }
}, $type: new $.ig.Type("RadialPieSeries", $.ig.AnchoredRadialSeries.prototype.$type)}, true);
$.ig.util.defType("SliceCoords", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
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
}, aw: function (B, H, I, J, K, L, M) {
    var A = this;
    var N = Math.min(I, J);
    var O = Math.max(I, J);
    var P = Math.cos(N);
    var Q = Math.sin(N);
    var R = Math.max(0, K);
    var S = L;
    var T = M.__x + P * R;
    var U = M.__y + Q * R;
    var V = M.__x + P * S;
    var W = M.__y + Q * S;
    var X = Math.cos(O);
    var Y = Math.sin(O);
    var Z = M.__x + X * R;
    var aa = M.__y + Y * R;
    var ab = M.__x + X * S;
    var ac = M.__y + Y * S;
    T = $.ig.ViewportUtils.prototype.a(T, B, H);
    U = $.ig.ViewportUtils.prototype.c(U, B, H);
    V = $.ig.ViewportUtils.prototype.a(V, B, H);
    W = $.ig.ViewportUtils.prototype.c(W, B, H);
    Z = $.ig.ViewportUtils.prototype.a(Z, B, H);
    aa = $.ig.ViewportUtils.prototype.c(aa, B, H);
    ab = $.ig.ViewportUtils.prototype.a(ab, B, H);
    ac = $.ig.ViewportUtils.prototype.c(ac, B, H);
    var ad = {__x: T, __y: U, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var ae = {__x: V, __y: W, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var af = {__x: ab, __y: ac, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var C = {__x: Z, __y: aa, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var D = $.ig.ViewportUtils.prototype.e(S, B, H);
    var E = $.ig.ViewportUtils.prototype.g(S, B, H);
    var F = $.ig.ViewportUtils.prototype.e(R, B, H);
    var G = $.ig.ViewportUtils.prototype.g(R, B, H);
    return(function () {
        var a = new $.ig.SliceCoords();
        a.m(ad);
        a.n(ae);
        a.o(af);
        a.p(C);
        a.u(((O - N) > Math.PI));
        a.v(new $.ig.Size(D, E));
        a.w(new $.ig.Size(F, G));
        return a
    }())
}, ax: function (q, r, s, t, u, v, w, x, y) {
    var z = $.ig.ViewportUtils.prototype.f(y, q, r);
    var A = v - u;
    if (A < 0) {
        return null
    }
    if ($.ig.ViewportUtils.prototype.e(A, q, r) < 2) {
        return null
    }
    if (z * 2 > A) {
        z = A / 2;
        y = $.ig.ViewportUtils.prototype.e(z, q, r)
    }
    var B = $.ig.ViewportUtils.prototype.f(x, q, r);
    var C = B / (v - z);
    var D = Math.atan(C);
    if (D * 2 > Math.abs(t - s)) {
        D = Math.abs(t - s) / 2;
        x = $.ig.ViewportUtils.prototype.e(Math.tan(D) * (v - z), q, r)
    }
    var E = $.ig.SliceCoords.prototype.aw(q, r, s + D, t - D, u, v, w);
    var F = $.ig.SliceCoords.prototype.aw(q, r, s, t, u + (z * (u / v)), v - z, w);
    E.r(E.n());
    E.t(E.p());
    E.q(F.m());
    E.n(F.n());
    E.s(F.o());
    E.p(F.p());
    E.x(new $.ig.Size(x, y));
    return E
}, $type: new $.ig.Type("SliceCoords", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("RadialPieSeriesView", "AnchoredRadialSeriesView", {_d3: null, d3: function (b) {
    if (arguments.length === 1) {
        this._d3 = b;
        return b
    } else {
        return this._d3
    }
}, init: function (c) {
    var b = this;
    $.ig.AnchoredRadialSeriesView.prototype.init.call(this, c);
    this.d3(c);
    this.d0 = (function () {
        var a = new $.ig.Pool$1($.ig.Path.prototype.$type);
        a.create(b.d9.on(b));
        a.activate(b.ea.on(b));
        a.disactivate(b.eb.on(b));
        a.destroy(b.ec.on(b));
        return a
    }())
}, d0: null, ag: function () {
    var a = this;
    $.ig.MarkerSeriesView.prototype.ag.call(this);
    this.d4(new $.ig.List$1($.ig.Path.prototype.$type, 0));
    if (!this.ad()) {
        this.u().resolution(4);
        this.u().legendItemBadgeTemplate((function () {
            var b = new $.ig.DataTemplate();
            b.render($.ig.LegendTemplates.prototype.l);
            b.measure($.ig.LegendTemplates.prototype.k);
            return b
        }()))
    }
}, _d4: null, d4: function (b) {
    if (arguments.length === 1) {
        this._d4 = b;
        return b
    } else {
        return this._d4
    }
}, d9: function () {
    var b = this;
    var c = (function () {
        var a = new $.ig.Path();
        a.dataContext((function () {
            var d = new $.ig.DataContext();
            d.series(b.u());
            return d
        }()));
        return a
    }());
    this.d4().add(c);
    c.__visibility = $.ig.Visibility.prototype.collapsed;
    return c
}, ea: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, eb: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, ec: function (b) {
    this.d4().remove(b)
}, ar: function (d, e) {
    $.ig.SeriesView.prototype.ar.call(this, d, e);
    var f = d;
    f.__stroke = this.u().actualOutline();
    f.a7(this.u().thickness());
    f.__fill = this.u().actualBrush();
    f.a8(this.u().dashArray());
    f.a9(this.u().dashCap())
}, at: function (e, f) {
    $.ig.SeriesView.prototype.at.call(this, e, f);
    var g = e;
    var h = this.ay(f);
    g.__stroke = h;
    g.a7(this.u().thickness());
    g.__fill = h
}, a0: function (g, h) {
    $.ig.SeriesView.prototype.a0.call(this, g, h);
    if (g.b()) {
        for (var i = 0; i < this.d4().count(); i++) {
            var j = this.d4().__inner[i];
            this.ap(j, i, h);
            if (this.k && !h) {
                var k = this.dd() * 2;
                var l = j.__fill != null && j.__fill.isGradient() && this.de() != null ? new $.ig.Rect(0, this.de().__x - this.dd(), this.de().__y - this.dd(), k, k) : null;
                g.e($.ig.GradientDirection.prototype.radial, l)
            }
            g.g(j)
        }
    }
}, ed: function () {
    this.an()
}, b5: function (f) {
    $.ig.SeriesView.prototype.b5.call(this, f);
    var g = 0;
    var i = this.d0.h().getEnumerator();
    while (i.moveNext()) {
        var h = i.current();
        var j = new $.ig.PathVisualData(1, "slice" + g, h);
        j.tags().add("Main");
        f.shapes().add(j);
        g++
    }
}, $type: new $.ig.Type("RadialPieSeriesView", $.ig.AnchoredRadialSeriesView.prototype.$type)}, true);
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
$.ig.util.defType("CollisionAvoider", "Object", {init: function () {
    this.a = new $.ig.List$1($.ig.Rect.prototype.$type, 0);
    $.ig.Object.prototype.init.call(this)
}, tryAdd: function (d) {
    var c = this;
    for (var e = this.a.count() - 1; e >= 0; --e) {
        if (d.left() > this.a.__inner[e].right()) {
            break
        }
        if (this.a.__inner[e].intersectsWith(d)) {
            return false
        }
    }
    if (this.a.count() == 0 || d.right() >= this.a.__inner[this.a.count() - 1].right()) {
        this.a.add(d)
    } else {
        this.a.add(d);
        this.a.t(function (a, b) {
            return Math.sign(a.right() - b.right())
        })
    }
    return true
}, clear: function () {
    this.a.clear()
}, a: null, $type: new $.ig.Type("CollisionAvoider", $.ig.Object.prototype.$type, [$.ig.IDetectsCollisions.prototype.$type])}, true);
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
$.ig.Legend.prototype.cc = "Orientation";
$.ig.RadialBase.prototype.iq = "AngleAxis";
$.ig.RadialBase.prototype.ir = "ValueAxis";
$.ig.RadialBase.prototype.is = "ClipSeriesToBounds";
$.ig.RadialBase.prototype.angleAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialBase.prototype.iq, $.ig.CategoryAngleAxis.prototype.$type, $.ig.RadialBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.RadialBase.prototype.$type, c)).ej($.ig.RadialBase.prototype.iq, d.f(), d.e())
}));
$.ig.RadialBase.prototype.valueAxisProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialBase.prototype.ir, $.ig.NumericRadiusAxis.prototype.$type, $.ig.RadialBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.RadialBase.prototype.$type, c)).ej($.ig.RadialBase.prototype.ir, d.f(), d.e())
}));
$.ig.RadialBase.prototype.clipSeriesToBoundsProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialBase.prototype.is, $.ig.Boolean.prototype.$type, $.ig.RadialBase.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    ($.ig.util.cast($.ig.RadialBase.prototype.$type, c)).ej($.ig.RadialBase.prototype.is, d.f(), d.e())
}));
$.ig.AnchoredRadialSeries.prototype.jf = "ValueMemberPath";
$.ig.AnchoredRadialSeries.prototype.jg = "ValueColumn";
$.ig.AnchoredRadialSeries.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.jf, String, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, c)).ej($.ig.AnchoredRadialSeries.prototype.jf, d.f(), d.e())
}));
$.ig.AnchoredRadialSeries.prototype.trendLineTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b4, $.ig.TrendLineType.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.TrendLineType.prototype.none, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, c)).ej($.ig.AnchoredRadialSeries.prototype.b4, d.f(), d.e())
}));
$.ig.AnchoredRadialSeries.prototype.trendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b6, $.ig.Brush.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, c)).ej($.ig.AnchoredRadialSeries.prototype.b6, d.f(), d.e())
}));
$.ig.AnchoredRadialSeries.prototype.actualTrendLineBrushProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b7, $.ig.Brush.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, c)).ej($.ig.AnchoredRadialSeries.prototype.b7, d.f(), d.e())
}));
$.ig.AnchoredRadialSeries.prototype.trendLineThicknessProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b8, Number, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, 1.5, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, c)).ej($.ig.AnchoredRadialSeries.prototype.b8, d.f(), d.e())
}));
$.ig.AnchoredRadialSeries.prototype.trendLineDashCapProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b9, $.ig.PenLineCap.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, c)).ej($.ig.AnchoredRadialSeries.prototype.b9, d.f(), d.e())
}));
$.ig.AnchoredRadialSeries.prototype.trendLineDashArrayProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b3, $.ig.DoubleCollection.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, c)).ej($.ig.AnchoredRadialSeries.prototype.b3, d.f(), d.e())
}));
$.ig.AnchoredRadialSeries.prototype.trendLinePeriodProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.b5, $.ig.Number.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, 7, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, c)).ej($.ig.AnchoredRadialSeries.prototype.b5, d.f(), d.e())
}));
$.ig.AnchoredRadialSeries.prototype.trendLineZIndexProperty = $.ig.DependencyProperty.prototype.l($.ig.AnchoredRadialSeries.prototype.ca, $.ig.Number.prototype.$type, $.ig.AnchoredRadialSeries.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    ($.ig.util.cast($.ig.AnchoredRadialSeries.prototype.$type, c)).ej($.ig.AnchoredRadialSeries.prototype.ca, d.f(), d.e())
}));
$.ig.RadialColumnSeries.prototype.kg = "RadiusX";
$.ig.RadialColumnSeries.prototype.kh = "RadiusY";
$.ig.RadialColumnSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialColumnSeries.prototype.kg, Number, $.ig.RadialColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.RadialColumnSeries.prototype.$type, c)).ej($.ig.RadialColumnSeries.prototype.kg, d.f(), d.e())
}));
$.ig.RadialColumnSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialColumnSeries.prototype.kh, Number, $.ig.RadialColumnSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.RadialColumnSeries.prototype.$type, c)).ej($.ig.RadialColumnSeries.prototype.kh, d.f(), d.e())
}));
$.ig.RadialLineSeries.prototype.kg = "UnknownValuePlotting";
$.ig.RadialLineSeries.prototype.unknownValuePlottingProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialLineSeries.prototype.kg, $.ig.UnknownValuePlotting.prototype.$type, $.ig.RadialLineSeries.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.UnknownValuePlotting.prototype.dontPlot, function (c, d) {
    ($.ig.util.cast($.ig.RadialLineSeries.prototype.$type, c)).ej($.ig.RadialLineSeries.prototype.kg, d.f(), d.e())
}));
$.ig.RadialPieSeries.prototype.kg = "RadiusX";
$.ig.RadialPieSeries.prototype.kh = "RadiusY";
$.ig.RadialPieSeries.prototype.radiusXProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialPieSeries.prototype.kg, Number, $.ig.RadialPieSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.RadialPieSeries.prototype.$type, c)).ej($.ig.RadialPieSeries.prototype.kg, d.f(), d.e())
}));
$.ig.RadialPieSeries.prototype.radiusYProperty = $.ig.DependencyProperty.prototype.l($.ig.RadialPieSeries.prototype.kh, Number, $.ig.RadialPieSeries.prototype.$type, new $.ig.PropertyMetadata(1, 2, function (c, d) {
    ($.ig.util.cast($.ig.RadialPieSeries.prototype.$type, c)).ej($.ig.RadialPieSeries.prototype.kh, d.f(), d.e())
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