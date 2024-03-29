﻿/*
 * Infragistics.Web.ClientUI infragistics.chart_piechart.js 12.2.20122.1021
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
$.ig.util.defType("GeometryUtil", "Object", {init: function () {
    $.ig.Object.prototype.init.call(this)
}, a: function (b) {
    if (isNaN(b) || Number.isInfinity(b)) {
        return b
    }
    while (b > 360) {
        b -= 360
    }
    while (b < 0) {
        b += 360
    }
    return b
}, b: function (b) {
    return Math.atan(b)
}, c: function (c, d) {
    return(d.__y - c.__y) / (d.__x - c.__x)
}, d: function (b) {
    return 1 - Math.pow(b.height() / 2, 2) / Math.pow(b.width() / 2, 2)
}, e: function (i, j, k, l, m) {
    var n = Math.cos(i);
    var o = Math.sin(i);
    var p = Math.sqrt(l * l / (1 - (j * Math.pow(n, 2))));
    p *= m;
    return{__x: p * n + k.__x, __y: p * o + k.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, f: function (g, h, i, j, k) {
    var l;
    if (i) {
        l = $.ig.GeometryUtil.prototype.g({__x: g / 2, __y: h / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}, j, k)
    } else {
        l = {__x: g / 2, __y: h / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
    }
    return l
}, g: function (f, g, h) {
    g = g / 180 * Math.PI;
    var i = f.__y + h * Math.sin(g);
    var j = f.__x + h * Math.cos(g);
    return{__x: j, __y: i, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, $type: new $.ig.Type("GeometryUtil", $.ig.Object.prototype.$type)}, true);
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
$.ig.util.defType("OthersCategoryType", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("OthersCategoryType", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("LabelsPosition", "Enum", {init: function () {
    $.ig.Enum.prototype.init.call(this)
}, $type: new $.ig.Type("LabelsPosition", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PieChartViewManager", "Object", {_q: null, q: function (b) {
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
}, a: null, b: null, _v: null, v: function (b) {
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
}, c: null, init: function (b) {
    this.a = 0;
    this.b = 0;
    this.d = false;
    $.ig.Object.prototype.init.call(this);
    this.c = b
}, d: null, ay: function (c, d) {
    this.ab().v(new $.ig.Rect(0, 0, 0, c, d));
    if (this.a != c) {
        this.d = true
    }
    this.a = c;
    if (this.b != d) {
        this.d = true
    }
    this.b = d;
    this.c.a9()
}, az: function () {
    this.v(new $.ig.Rect(0, 0, 0, this.a, this.b));
    this.r().attr("width", this.a.toString());
    this.r().attr("height", this.b.toString());
    this.t().attr("width", this.a.toString());
    this.t().attr("height", this.b.toString());
    this.u().attr("width", this.a.toString());
    this.u().attr("height", this.b.toString());
    this.s().attr("width", this.a.toString());
    this.s().attr("height", this.b.toString());
    return this.v()
}, a0: function () {
    var d = $("<span>M</span>");
    var b = $("body");
    b.append(d);
    d.css("font", this.c.z());
    var c = d.attr("offsetHeight");
    if (isNaN(c)) {
        c = d[0].offsetHeight
    }
    d.remove();
    return parseInt(c)
}, a1: function () {
    var b = $.ig.DOMEventProxy.prototype.c4(this.q());
    return new $.ig.Size(b.left(), b.top())
}, a2: function (f, g) {
    var h = new Array(2);
    g.addClass(f);
    var i = new $.ig.Brush();
    i.__fill = g.css("background-color");
    var j = new $.ig.Brush();
    j.__fill = g.css("border-top-color");
    g.removeClass(f);
    h[0] = i;
    h[1] = j;
    return h
}, a3: function (b) {
    window.setTimeout(b, 0)
}, a4: function (A, B, C, D) {
    A = new $.ig.BrushCollection();
    B = new $.ig.BrushCollection();
    var E = 1;
    var F = $("<div></div>");
    var G = $.ig.util.getClassCount(".ui-chart-palette-", true);
    if (G == 0) {
        var H = new $.ig.Brush();
        H.__fill = "#B1BFC9";
        var I = new $.ig.Brush();
        I.__fill = "#50a8be";
        var J = new $.ig.Brush();
        J.__fill = "#798995";
        var K = new $.ig.Brush();
        K.__fill = "#fc6754";
        var L = new $.ig.Brush();
        L.__fill = "#4F606C";
        var M = new $.ig.Brush();
        M.__fill = "#fec33c";
        var N = new $.ig.Brush();
        N.__fill = "#374650";
        var O = new $.ig.Brush();
        O.__fill = "#3c6399";
        var P = new $.ig.Brush();
        P.__fill = "#162C3B";
        var Q = new $.ig.Brush();
        Q.__fill = "#91af49";
        A.add(I);
        A.add(K);
        A.add(M);
        A.add(O);
        A.add(Q);
        B.add(H);
        B.add(J);
        B.add(L);
        B.add(N);
        B.add(P);
        E = 6;
        G = 5
    }
    this.q().append(F);
    for (var R = E; R <= G; R++) {
        var S = this.a2("ui-chart-palette-" + R, F);
        A.add(S[0]);
        B.add(S[1])
    }
    F.remove();
    C = new $.ig.Brush();
    C.__fill = this.q().css("color");
    var T = this.q().css("font-style");
    var U = this.q().css("font-variant");
    var V = this.q().css("font-weight");
    var W = this.q().css("font-size");
    var X = this.q().css("line-height");
    var Y = this.q().css("font-family");
    D = "";
    var Z = true;
    if (T.length > 0) {
        if (!Z) {
            D += " "
        } else {
            Z = false
        }
        D += T
    }
    if (U.length > 0) {
        if (!Z) {
            D += " "
        } else {
            Z = false
        }
        D += U
    }
    if (V.length > 0) {
        if (!Z) {
            D += " "
        } else {
            Z = false
        }
        D += V
    }
    if (W.length > 0) {
        if (!Z) {
            D += " "
        } else {
            Z = false
        }
        D += W
    }
    if (X.length > 0) {
        if (!Z) {
            D += "/"
        } else {
            Z = false
        }
        D += X
    }
    if (Y.length > 0) {
        if (!Z) {
            D += " "
        } else {
            Z = false
        }
        D += Y
    }
    return{brushes: A, outlines: B, fontBrush: C, font: D}
}, a5: function (c) {
    var b = this;
    c.__stroke = (function () {
        var a = new $.ig.Brush();
        a.__fill = "#000000";
        return a
    }());
    c.__fill = (function () {
        var a = new $.ig.Brush();
        a.__fill = "#222222";
        return a
    }())
}, _ab: null, ab: function (b) {
    if (arguments.length === 1) {
        this._ab = b;
        return b
    } else {
        return this._ab
    }
}, a8: function (c) {
    if (c == null) {
        if (this.ab() != null) {
            this.ab().bf()
        }
        this.q(null);
        this.r(null);
        this.t(null);
        this.u(null);
        this.s(null);
        this.w(null);
        this.x(null);
        this.y(null);
        this.z(null);
        this.ab(null);
        return
    }
    var d = c;
    this.q($(d));
    this.c.ar();
    this.c.b5();
    this.q().css("position", "relative");
    this.q().addClass("ui-corner-all ui-widget-content");
    this.r($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.t($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.u($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.s($('<canvas style="position : absolute; top : 0; left : 0" />'));
    this.q().append(this.r());
    this.q().append(this.t());
    this.q().append(this.u());
    this.q().append(this.s());
    this.w(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.r()[0]).getContext("2d")));
    this.x(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.t()[0]).getContext("2d")));
    this.y(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.u()[0]).getContext("2d")));
    this.z(new $.ig.RenderingContext(new $.ig.CanvasViewRenderer(), (this.s()[0]).getContext("2d")));
    this.ab(new $.ig.DOMEventProxy(this.s()));
    this.ab().onMouseOver = $.ig.Delegate.prototype.combine(this.ab().onMouseOver, this.c.bg.on(this.c));
    this.ab().onMouseLeave = $.ig.Delegate.prototype.combine(this.ab().onMouseLeave, this.c.bh.on(this.c));
    this.ab().onMouseDown = $.ig.Delegate.prototype.combine(this.ab().onMouseDown, this.c.bi.on(this.c));
    this.ab().onMouseUp = $.ig.Delegate.prototype.combine(this.ab().onMouseUp, this.c.bj.on(this.c));
    this.ay(this.q().width(), this.q().height())
}, a9: function (b) {
    this.q().append(b)
}, $type: new $.ig.Type("PieChartViewManager", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("PieSliceDataContext", "DataContext", {init: function () {
    $.ig.DataContext.prototype.init.call(this)
}, _slice: null, slice: function (b) {
    if (arguments.length === 1) {
        this._slice = b;
        return b
    } else {
        return this._slice
    }
}, _percentValue: null, percentValue: function (b) {
    if (arguments.length === 1) {
        this._percentValue = b;
        return b
    } else {
        return this._percentValue
    }
}, $type: new $.ig.Type("PieSliceDataContext", $.ig.DataContext.prototype.$type)}, true);
$.ig.util.defType("SliceClickEventArgs", "EventArgs", {init: function (b) {
    $.ig.EventArgs.prototype.init.call(this);
    this.slice(b);
    if (b == null) {
        return
    }
    this.isSelected(b.isSelected());
    this.isExploded(b.isExploded())
}, _slice: null, slice: function (b) {
    if (arguments.length === 1) {
        this._slice = b;
        return b
    } else {
        return this._slice
    }
}, isSelected: function (b) {
    if (arguments.length === 1) {
        this.a = b;
        this.slice().isSelected(b);
        return b
    } else {
        return this.a
    }
}, a: null, isExploded: function (b) {
    if (arguments.length === 1) {
        this.b = b;
        this.slice().isExploded(b);
        return b
    } else {
        return this.b
    }
}, b: null, isOthersSlice: function () {
    return this.slice().cw()
}, dataContext: function () {
    if (this.slice() != null) {
        return this.slice().dataContext()
    }
    return null
}, $type: new $.ig.Type("SliceClickEventArgs", $.ig.EventArgs.prototype.$type)}, true);
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
$.ig.util.defType("PieChartBase", "Control", {d3: function () {
    return new $.ig.PieChartBaseView(this)
}, d4: function (b) {
    this.dn(b)
}, _dn: null, dn: function (b) {
    if (arguments.length === 1) {
        this._dn = b;
        return b
    } else {
        return this._dn
    }
}, init: function () {
    var b = this;
    this.b2 = false;
    this.b3 = false;
    this.b4 = false;
    this.b5 = false;
    this.b6 = false;
    this.cf = new $.ig.IndexCollection();
    this.cg = new $.ig.IndexCollection();
    this.cm = null;
    $.ig.Control.prototype.init.call(this);
    var c = this.d3();
    this.d4(c);
    c.aq();
    this.a3($.ig.PieChartBase.prototype.$type);
    this.dt(new $.ig.List$1($.ig.Number.prototype.$type, 0));
    this.du(new $.ig.List$1($.ig.Number.prototype.$type, 0));
    this.dv(new $.ig.List$1($.ig.Object.prototype.$type, 0));
    this.b7 = function (a, d) {
        b.fi(a, d.propertyName(), d.oldValue(), d.newValue())
    };
    this.b8 = function (a, f) {
        b.fd();
        b.ff()
    };
    this.ca = function (a, d) {
        if (b.allowSliceExplosion()) {
            b.e9();
            b.fa();
            b.fd();
            b.fe()
        }
    };
    this.b9 = function (a, d) {
        if (b.allowSliceSelection()) {
            b.e9();
            b.fd();
            b.ff()
        }
    };
    this.cb = function (a, d) {
        b.e6(d.action(), d.position(), d.count(), d.propertyName())
    };
    this.propertyUpdated = $.ig.Delegate.prototype.combine(this.propertyUpdated, this.b7);
    this.selectedSlices().collectionChanged = $.ig.Delegate.prototype.combine(this.selectedSlices().collectionChanged, this.b9);
    this.b5 = true;
    this.explodedSlices().collectionChanged = $.ig.Delegate.prototype.combine(this.explodedSlices().collectionChanged, this.ca);
    this.b6 = true;
    this.ci = (function () {
        var a = new $.ig.Pool$1($.ig.Slice.prototype.$type);
        a.create(b.dn().bs.on(b.dn()));
        a.activate(b.dn().bt.on(b.dn()));
        a.disactivate(b.dn().bu.on(b.dn()));
        a.destroy(b.dn().bv.on(b.dn()));
        return a
    }());
    this.cj = (function () {
        var a = new $.ig.Pool$1($.ig.PieLabel.prototype.$type);
        a.create(b.dn().by.on(b.dn()));
        a.activate(b.dn().bz.on(b.dn()));
        a.disactivate(b.dn().b0.on(b.dn()));
        a.destroy(b.dn().b1.on(b.dn()));
        return a
    }())
}, b2: null, b3: null, b4: null, b5: null, b6: null, b7: null, b8: null, b9: null, ca: null, cb: null, dp: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.cc, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.cc)
    }
}, cd: null, dq: function (c) {
    if (arguments.length === 1) {
        if (this.cd != c) {
            var d = this.cd;
            this.cd = c;
            this.fj($.ig.PieChartBase.prototype.a9, d, this.cd)
        }
        return c
    } else {
        return this.cd
    }
}, _dr: null, dr: function (b) {
    if (arguments.length === 1) {
        this._dr = b;
        return b
    } else {
        return this._dr
    }
}, _ds: null, ds: function (b) {
    if (arguments.length === 1) {
        this._ds = b;
        return b
    } else {
        return this._ds
    }
}, _dt: null, dt: function (b) {
    if (arguments.length === 1) {
        this._dt = b;
        return b
    } else {
        return this._dt
    }
}, _du: null, du: function (b) {
    if (arguments.length === 1) {
        this._du = b;
        return b
    } else {
        return this._du
    }
}, _dv: null, dv: function (b) {
    if (arguments.length === 1) {
        this._dv = b;
        return b
    } else {
        return this._dv
    }
}, _dw: null, dw: function (b) {
    if (arguments.length === 1) {
        this._dw = b;
        return b
    } else {
        return this._dw
    }
}, _dx: null, dx: function (b) {
    if (arguments.length === 1) {
        this._dx = b;
        return b
    } else {
        return this._dx
    }
}, dy: function () {
    return 0
}, itemsSource: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.itemsSourceProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.itemsSourceProperty)
    }
}, valueMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.valueMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.valueMemberPathProperty)
    }
}, labelMemberPath: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.labelMemberPathProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.labelMemberPathProperty)
    }
}, ce: null, dz: function (c) {
    if (arguments.length === 1) {
        if (this.ce != c) {
            var d = this.dz();
            this.ce = c;
            this.fj($.ig.PieChartBase.prototype.bd, d, this.dz())
        }
        return c
    } else {
        return this.ce
    }
}, labelsPosition: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.labelsPositionProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.labelsPositionProperty)
    }
}, leaderLineVisibility: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.leaderLineVisibilityProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.leaderLineVisibilityProperty)
    }
}, leaderLineStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.leaderLineStyleProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.leaderLineStyleProperty)
    }
}, toolTip: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.toolTipProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.toolTipProperty)
    }
}, othersCategoryThreshold: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.othersCategoryThresholdProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.othersCategoryThresholdProperty)
    }
}, othersCategoryType: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.othersCategoryTypeProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.othersCategoryTypeProperty)
    }
}, othersCategoryText: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.othersCategoryTextProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.othersCategoryTextProperty)
    }
}, explodedRadius: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.explodedRadiusProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.explodedRadiusProperty)
    }
}, d0: function () {
    var a = this.explodedRadius();
    if (isNaN(a) || Number.isInfinity(a) || a < 0) {
        return 0
    }
    if (a > 1) {
        return 1
    }
    return a
}, radiusFactor: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.radiusFactorProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.radiusFactorProperty)
    }
}, d1: function () {
    var a = this.radiusFactor();
    if (isNaN(a) || Number.isInfinity(a) || a < 0) {
        return 0
    }
    if (a > 1) {
        return 1
    }
    return a
}, allowSliceSelection: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.allowSliceSelectionProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.allowSliceSelectionProperty)
    }
}, allowSliceExplosion: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.allowSliceExplosionProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.allowSliceExplosionProperty)
    }
}, explodedSlices: function (b) {
    if (arguments.length === 1) {
        this.cf.collectionChanged = $.ig.Delegate.prototype.remove(this.cf.collectionChanged, this.ca);
        this.b6 = false;
        this.cf = b;
        if (this.cf != null) {
            this.cf.collectionChanged = $.ig.Delegate.prototype.combine(this.cf.collectionChanged, this.ca);
            this.b6 = true
        }
        if (this.allowSliceExplosion()) {
            this.e9();
            this.fa();
            this.fd();
            this.fe()
        }
        return b
    } else {
        return this.cf
    }
}, cf: null, legend: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.legendProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.legendProperty)
    }
}, labelExtent: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.labelExtentProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.labelExtentProperty)
    }
}, startAngle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.startAngleProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.startAngleProperty)
    }
}, sweepDirection: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.sweepDirectionProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.sweepDirectionProperty)
    }
}, selectedSlices: function (b) {
    if (arguments.length === 1) {
        this.cg.collectionChanged = $.ig.Delegate.prototype.remove(this.cg.collectionChanged, this.b9);
        this.b5 = false;
        this.cg = b;
        if (this.cg != null) {
            this.cg.collectionChanged = $.ig.Delegate.prototype.combine(this.cg.collectionChanged, this.b9);
            this.b5 = true
        }
        if (this.allowSliceSelection()) {
            this.e9();
            this.fd();
            this.ff()
        }
        return b
    } else {
        return this.cg
    }
}, cg: null, othersCategoryStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.othersCategoryStyleProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.othersCategoryStyleProperty)
    }
}, selectedStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.selectedStyleProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.selectedStyleProperty)
    }
}, toolTipStyle: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.toolTipStyleProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.toolTipStyleProperty)
    }
}, brushes: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.brushesProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.brushesProperty)
    }
}, outlines: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.outlinesProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.outlinesProperty)
    }
}, legendItemTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.legendItemTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.legendItemTemplateProperty)
    }
}, legendItemBadgeTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.legendItemBadgeTemplateProperty, b);
        return b
    } else {
        return this.b($.ig.PieChartBase.prototype.legendItemBadgeTemplateProperty)
    }
}, labelTemplate: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.PieChartBase.prototype.labelTemplateProperty, b);
        return b
    } else {
        return $.ig.util.cast($.ig.DataTemplate.prototype.$type, this.b($.ig.PieChartBase.prototype.labelTemplateProperty))
    }
}, sliceClick: null, eu: function (c, d) {
    if (this.sliceClick != null) {
        this.sliceClick(c, d)
    }
}, ci: null, cj: null, ev: function (c, d) {
    if (!this.explodedSlices().contains(c.c1()) && d) {
        this.explodedSlices().add(c.c1())
    }
    if (this.explodedSlices().contains(c.c1()) && !d) {
        this.explodedSlices().remove(c.c1())
    }
}, ew: function (c, d) {
    if (!this.selectedSlices().contains(c.c1()) && d) {
        this.selectedSlices().add(c.c1())
    }
    if (this.selectedSlices().contains(c.c1()) && !d) {
        this.selectedSlices().remove(c.c1())
    }
}, ex: function (b) {
    this.dn().b2(b)
}, ey: function (b) {
    return this.dn().b3(b)
}, ez: function (d, e) {
    var f = new $.ig.Rect(0, 0, 0, 0, 0);
    return f
}, e0: function (m, n) {
    var o = m.bc();
    if (o == null) {
        return false
    }
    var p = o.ej();
    var q = this.sweepDirection() == $.ig.SweepDirection.prototype.clockwise ? o.cs() : o.ct();
    var r = this.sweepDirection() == $.ig.SweepDirection.prototype.clockwise ? o.ct() : o.cs();
    var s = false;
    var t = false;
    var u = $.ig.GeometryUtil.prototype.g(p, q, o.cz());
    var v = $.ig.GeometryUtil.prototype.g(p, r, o.cz());
    q = $.ig.PieChartBase.prototype.e3(u.__x, p.__x, u.__y, p.__y);
    r = $.ig.PieChartBase.prototype.e3(v.__x, p.__x, v.__y, p.__y);
    if (this.e2(o)) {
        t = true
    }
    var w;
    w = $.ig.MathUtil.prototype.f(m.bd().right() - p.__x, m.bd().top() - p.__y);
    if (w > o.cz()) {
        return false
    }
    w = $.ig.MathUtil.prototype.f(m.bd().right() - p.__x, m.bd().bottom() - p.__y);
    if (w > o.cz()) {
        return false
    }
    w = $.ig.MathUtil.prototype.f(m.bd().left() - p.__x, m.bd().top() - p.__y);
    if (w > o.cz()) {
        return false
    }
    w = $.ig.MathUtil.prototype.f(m.bd().left() - p.__x, m.bd().bottom() - p.__y);
    if (w > o.cz()) {
        return false
    }
    if (t) {
        return true
    }
    if (q > r) {
        q = q - 360;
        s = true
    }
    var x;
    x = $.ig.PieChartBase.prototype.e3(m.bd().right(), p.__x, m.bd().top(), p.__y);
    if (s && x > 180 && x < 360) {
        x = x - 360
    }
    if (x < q || x > r) {
        return false
    }
    x = $.ig.PieChartBase.prototype.e3(m.bd().right(), p.__x, m.bd().bottom(), p.__y);
    if (s && x > 180 && x < 360) {
        x = x - 360
    }
    if (x < q || x > r) {
        return false
    }
    x = $.ig.PieChartBase.prototype.e3(m.bd().left(), p.__x, m.bd().top(), p.__y);
    if (s && x > 180 && x < 360) {
        x = x - 360
    }
    if (x < q || x > r) {
        return false
    }
    x = $.ig.PieChartBase.prototype.e3(m.bd().left(), p.__x, m.bd().bottom(), p.__y);
    if (s && x > 180 && x < 360) {
        x = x - 360
    }
    if (x < q || x > r) {
        return false
    }
    return true
}, e1: function (c) {
    var d = Math.round(c * Math.pow(10, 5)) / Math.pow(10, 5);
    return d
}, e2: function (b) {
    return $.ig.PieChartBase.prototype.e1(Math.abs(b.ct() - b.cs())) == 360
}, e3: function (g, h, i, j) {
    var k = $.ig.MathUtil.prototype.f(g - h, i - j);
    var l = Math.asin((i - j) / k) * 180 / Math.PI;
    if (g < h) {
        l = 180 - l
    }
    if (g > h) {
        l = 360 + l
    }
    if (l == 360) {
        l = 0
    }
    return $.ig.GeometryUtil.prototype.a(l)
}, e4: function (e) {
    for (var f = 0; f < e.count(); f++) {
        for (var g = f + 1; g < e.count(); g++) {
            if (e.__inner[f].bd().top() > e.__inner[g].bd().top()) {
                var h = e.__inner[f];
                e.__inner[f] = e.__inner[g];
                e.__inner[g] = h
            }
        }
    }
}, e5: function (A) {
    if (A.count() == 0) {
        return
    }
    var O = this.dn().af().width();
    var P = this.dn().af().height();
    var Q = A.count();
    var R = A.__inner[0].bc().cz();
    var S = A.__inner[0].bc().ej();
    var T = true;
    var U = 0;
    var V = Number.POSITIVE_INFINITY;
    var W = Number.NEGATIVE_INFINITY;
    for (var X = 0; X < Q - 1; X++) {
        var Y = A.__inner[X];
        var Z = A.__inner[X + 1];
        if (Y.bd().intersectsWith(Z.bd())) {
            U++
        }
    }
    var aa = 0;
    var ac = A.getEnumerator();
    while (ac.moveNext()) {
        var ab = ac.current();
        V = Math.min(V, ab.bd().height());
        W = Math.max(W, ab.bd().height());
        aa += ab.bd().height()
    }
    if (aa > P) {
        T = false
    }
    if (T && U > 0) {
        for (var ad = 0; ad < Q - 1; ad++) {
            for (var ae = ad + 1; ae < Q; ae++) {
                var af = A.__inner[ad];
                var ag = A.__inner[ae];
                if (af.bd().intersectsWith(ag.bd())) {
                    var ah = ag.bd();
                    ah.y(Math.min(af.bd().bottom() + 0.01, P - V));
                    var ai = this.labelExtent() + R;
                    var aj = Math.abs(S.__y - (ah.y() + V / 2));
                    var ak = Math.sqrt(Math.abs(ai * ai - aj * aj));
                    var al = $.ig.GeometryUtil.prototype.a(ag.be());
                    if (al > 90 && al < 270) {
                        ak = (ah.width() + ak) * -1
                    }
                    ah.x(S.__x + ak);
                    ag.bd(ah)
                }
            }
        }
        for (var am = Q - 1; am > 0; am--) {
            for (var B = am - 1; B >= 0; B--) {
                var C = A.__inner[am];
                var D = A.__inner[B];
                if (C.bd().intersectsWith(D.bd())) {
                    var E = D.bd();
                    E.y(Math.max(C.bd().top() - V - 0.01, 0));
                    var F = this.labelExtent() + R;
                    var G = Math.abs(S.__y - (E.y() + V / 2));
                    var H = Math.sqrt(Math.abs(F * F - G * G));
                    var I = $.ig.GeometryUtil.prototype.a(D.be());
                    if (I > 90 && I < 270) {
                        H = (E.width() + H) * -1
                    }
                    E.x(S.__x + H);
                    D.bd(E)
                }
            }
        }
    }
    var K = A.getEnumerator();
    while (K.moveNext()) {
        var J = K.current();
        var L = J.bd();
        if (L.left() > O || L.right() < 0) {
            J.__visibility = $.ig.Visibility.prototype.collapsed;
            J.bg().__visibility = $.ig.Visibility.prototype.collapsed
        } else {
            if (L.left() < 0) {
                var M = Math.abs(L.x());
                L.x(0);
                if (M > L.width()) {
                    L.width(0)
                } else {
                    L.width(M)
                }
                J.bd(L)
            } else {
                if (L.right() > O) {
                    var N = L.right() - O;
                    if (N > L.width()) {
                        L.width(0)
                    } else {
                        L.width(N)
                    }
                    J.bd(L)
                }
            }
        }
    }
}, e6: function (e, f, g, h) {
    this.e7()
}, e7: function () {
    this.e8();
    this.e9();
    this.fa();
    this.fd();
    this.fe();
    this.ff();
    this.dn().cd()
}, e8: function () {
    this.ds(0);
    this.dr(0);
    this.dt().clear();
    this.du().clear();
    this.dv().clear();
    if (this.itemsSource() == null || this.dp() == null) {
        return
    }
    if (this.dq() == null || this.dq().count() == 0) {
        return
    }
    var h = this.dq().getEnumerator();
    while (h.moveNext()) {
        var g = h.current();
        if (isNaN(g) || Number.isInfinity(g) || g <= 0) {
            continue
        }
        this.ds(this.ds() + g)
    }
    for (var i = 0; i < this.dq().count(); i++) {
        var j = this.dq().item(i);
        if (isNaN(j) || Number.isInfinity(j) || j <= 0) {
            continue
        }
        var k = this.othersCategoryType() == $.ig.OthersCategoryType.prototype.percent ? j / this.ds() : j;
        var l = this.othersCategoryType() == $.ig.OthersCategoryType.prototype.percent ? this.othersCategoryThreshold() / 100 : this.othersCategoryThreshold();
        if (k <= l) {
            this.dr(this.dr() + j);
            this.du().add(i);
            this.dv().add1(this.dp().item(i))
        } else {
            this.dt().add(i)
        }
    }
}, e9: function () {
    if (this.itemsSource() == null || this.dp() == null) {
        this.ci.g(0);
        return
    }
    var i = this.dt().count();
    var j = this.du().count() > 0;
    var k = $.ig.PieChartBase.prototype.e1(this.dw());
    var l = $.ig.PieChartBase.prototype.e1(this.dw());
    if (j) {
        i++
    }
    for (var m = 0; m < i; m++) {
        var n = false;
        var o;
        if (m == i - 1 && j) {
            o = this.dr();
            n = true
        } else {
            o = this.dq().item(this.dt().__inner[m])
        }
        if (this.sweepDirection() == $.ig.SweepDirection.prototype.clockwise) {
            l += $.ig.PieChartBase.prototype.e1(Math.abs(o) * 360 / this.ds())
        } else {
            l -= $.ig.PieChartBase.prototype.e1(Math.abs(o) * 360 / this.ds())
        }
        var p = this.ci.item(m);
        p.cs(k);
        p.ct(l);
        p.cu(p.cv(this.dy()));
        p.cw(n);
        p.c0(this.d0());
        p.c1(m);
        p.dataContext(n ? this.dv() : this.dp().item(this.dt().__inner[m]));
        p.isExploded(this.explodedSlices().contains(m));
        p.isSelected(this.selectedSlices().contains(m));
        k = l
    }
    this.ci.g(i)
}, fa: function () {
    var h = this;
    if (this.itemsSource() == null || this.dp() == null) {
        this.cj.g(0);
        return
    }
    if (this.dz() == null || this.dz().count() == 0 || this.labelsPosition() == $.ig.LabelsPosition.prototype.none) {
        this.cj.g(0);
        return
    }
    var i = this.dt().count();
    if (this.du().count() > 0) {
        i++
    }
    this.dn().ce();
    for (var j = 0; j < i; j++) {
        var k;
        var l = false;
        var m;
        if (j == i - 1 && this.du().count() > 0) {
            m = null;
            l = true;
            k = this.othersCategoryText()
        } else {
            m = this.dz().item(this.dt().__inner[j]);
            k = m.toString()
        }
        var n = this.cj.item(j);
        var o = this.ci.item(j);
        o.c5(n);
        n.be($.ig.GeometryUtil.prototype.a((o.cs() + o.ct()) / 2));
        n.bc(o);
        n.bf((function () {
            var a = new $.ig.TextBlock();
            a.a5(k);
            return a
        }()));
        if (this.labelTemplate() == null) {
            n.dataContext(l ? this.dv() : this.dp().item(this.dt().__inner[j]));
            n.br()
        } else {
        }
        n.__visibility = $.ig.Visibility.prototype.visible;
        n.bd(this.dn().b9(n))
    }
    this.cj.g(i)
}, _d2: null, d2: function (b) {
    if (arguments.length === 1) {
        this._d2 = b;
        return b
    } else {
        return this._d2
    }
}, fd: function () {
    if (this.itemsSource() == null || this.dp() == null) {
        return
    }
    var g = this.dn().ca();
    this.d2(new $.ig.Rect(0, 0, 0, g.c(), g.d()));
    var h = {__x: g.c() / 2, __y: g.d() / 2, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var i = Math.min(g.d() / 2, g.c() / 2) * this.d1();
    var k = this.ci.h().getEnumerator();
    while (k.moveNext()) {
        var j = k.current();
        var l = $.ig.GeometryUtil.prototype.f(g.c(), g.d(), true, (j.cs() + j.ct()) / 2, i * this.d0());
        j.cu(j.cv(this.dy()));
        j.cz(i);
        j.c0(this.d0());
        j.cx(h);
        j.cy(l);
        this.ex(j);
        j.ek()
    }
    this.dn().cd()
}, fe: function () {
    var A = this.dn().af().width();
    var D = this.dn().af().height();
    if (D == 0 || A == 0) {
        return
    }
    if (this.cj.h().count() == 0 || this.labelsPosition() == $.ig.LabelsPosition.prototype.none) {
        this.cj.g(0);
        return
    }
    var E = new $.ig.List$1($.ig.PieLabel.prototype.$type, 0);
    var F = new $.ig.List$1($.ig.PieLabel.prototype.$type, 0);
    var G = new $.ig.List$1($.ig.PieLabel.prototype.$type, 0);
    var H = new $.ig.List$1($.ig.PieLabel.prototype.$type, 0);
    var J = this.cj.h().getEnumerator();
    while (J.moveNext()) {
        var I = J.current();
        var K = I.bc();
        if (K == null) {
            continue
        }
        var L = K.ej();
        var M = I.bd().width();
        var N = I.bd().height();
        if (this.labelsPosition() == $.ig.LabelsPosition.prototype.center || this.labelsPosition() == $.ig.LabelsPosition.prototype.bestFit) {
            var O = $.ig.GeometryUtil.prototype.g(L, I.be(), K.cz() / 2);
            I.bd(new $.ig.Rect(0, O.__x - M / 2, O.__y - N / 2, M, N));
            var P = this.e0(I, O);
            if (P || this.labelsPosition() == $.ig.LabelsPosition.prototype.center) {
                G.add(I);
                I.bg().__visibility = $.ig.Visibility.prototype.collapsed;
                if (!P && this.labelsPosition() == $.ig.LabelsPosition.prototype.center) {
                    I.__visibility = $.ig.Visibility.prototype.collapsed
                } else {
                    I.__visibility = $.ig.Visibility.prototype.visible
                }
                continue
            }
        }
        if (this.labelsPosition() == $.ig.LabelsPosition.prototype.insideEnd || this.labelsPosition() == $.ig.LabelsPosition.prototype.bestFit) {
            var Q = 5;
            var R = I.be() * Math.PI / 180;
            Q += Math.abs(I.bd().width() / 2 * Math.cos(R)) + Math.abs(I.bd().height() / 2 * Math.sin(R));
            var S = $.ig.GeometryUtil.prototype.g(L, I.be(), K.cz() - Q);
            I.bd(new $.ig.Rect(0, S.__x - M / 2, S.__y - N / 2, M, N));
            var T = this.e0(I, S);
            if (T || this.labelsPosition() == $.ig.LabelsPosition.prototype.insideEnd) {
                H.add(I);
                I.bg().__visibility = $.ig.Visibility.prototype.collapsed;
                if (!T && this.labelsPosition() == $.ig.LabelsPosition.prototype.insideEnd) {
                    I.__visibility = $.ig.Visibility.prototype.collapsed
                } else {
                    I.__visibility = $.ig.Visibility.prototype.visible
                }
                continue
            }
        }
        var U = $.ig.GeometryUtil.prototype.g(L, I.be(), K.cz());
        var V = $.ig.GeometryUtil.prototype.g(L, I.be(), K.cz() + this.labelExtent());
        I.bg().bq(U.__x);
        I.bg().bs(U.__y);
        I.bg().__visibility = this.leaderLineVisibility();
        I.__visibility = $.ig.Visibility.prototype.visible;
        I.bs();
        if (I.be() < 90 && I.be() >= 0) {
            I.bd(new $.ig.Rect(0, V.__x, V.__y, M, N));
            E.add(I)
        } else {
            if (I.be() < 180 && I.be() >= 90) {
                I.bd(new $.ig.Rect(0, V.__x - M, V.__y, M, N));
                F.add(I)
            } else {
                if (I.be() < 270 && I.be() >= 180) {
                    I.bd(new $.ig.Rect(0, V.__x - M, V.__y - N, M, N));
                    F.add(I)
                } else {
                    I.bd(new $.ig.Rect(0, V.__x, V.__y - N, M, N));
                    E.add(I)
                }
            }
        }
        if (I.bd().y() < 0) {
            I.bd(new $.ig.Rect(0, I.bd().x(), 0, I.bd().width(), I.bd().height()))
        }
        if (I.bd().bottom() > D) {
            I.bd(new $.ig.Rect(0, I.bd().x(), D - I.bd().height(), I.bd().width(), I.bd().height()))
        }
    }
    $.ig.PieChartBase.prototype.e4(E);
    this.e5(E);
    $.ig.PieChartBase.prototype.e4(F);
    this.e5(F);
    var X = G.getEnumerator();
    while (X.moveNext()) {
        var W = X.current();
        this.dn().cb(W, W.bd().x(), W.bd().y())
    }
    var Z = H.getEnumerator();
    while (Z.moveNext()) {
        var Y = Z.current();
        this.dn().cb(Y, Y.bd().x(), Y.bd().y())
    }
    var ab = E.getEnumerator();
    while (ab.moveNext()) {
        var aa = ab.current();
        this.dn().cb(aa, aa.bd().x(), aa.bd().y());
        aa.bt(aa.bd().left(), (aa.bd().top() + aa.bd().bottom()) / 2)
    }
    var C = F.getEnumerator();
    while (C.moveNext()) {
        var B = C.current();
        this.dn().cb(B, B.bd().x(), B.bd().y());
        B.bt(B.bd().right(), (B.bd().top() + B.bd().bottom()) / 2)
    }
    this.dn().cd()
}, ff: function () {
    var g = this;
    var h = $.ig.util.cast($.ig.ItemLegend.prototype.$type, this.legend());
    if (h == null) {
        return
    }
    if (this.dz() == null || this.dz().count() == 0) {
        h.cl(this);
        return
    }
    this.dx(new $.ig.List$1($.ig.UIElement.prototype.$type, 0));
    var j = this.ci.h().getEnumerator();
    while (j.moveNext()) {
        var i = j.current();
        var k = new $.ig.ContentControl();
        var l = this.ey(i);
        var m = i.c9();
        k.a9((function () {
            var a = new $.ig.PieSliceDataContext();
            a.series(g);
            a.slice(i);
            a.item(i.dataContext());
            a.itemBrush(m);
            a.itemLabel(l != null ? l.toString() : null);
            a.percentValue(g.fp(i));
            return a
        }()));
        k.ba(this.legendItemTemplate());
        this.dx().add(k)
    }
    h.bz(this.dx(), this)
}, fg: function (c) {
    var d = null;
    return this.dp().ab(c, d)
}, fh: function (c) {
    var d = null;
    return this.dp().z(c, d)
}, fi: function (k, l, m, n) {
    var j = this;
    switch (l) {
        case $.ig.PieChartBase.prototype.ba:
            this.dp((function () {
                var a = new $.ig.FastItemsSource();
                a.f(n);
                return a
            }()));
            break;
        case $.ig.PieChartBase.prototype.a8:
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, m) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, m)).event = $.ig.Delegate.prototype.remove(($.ig.util.cast($.ig.FastItemsSource.prototype.$type, m)).event, this.cb);
                this.b4 = false;
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, m)).ac(this.dq());
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, m)).ac(this.dz());
                this.dq(null);
                this.dz(null)
            }
            if ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n) != null) {
                ($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).event = $.ig.Delegate.prototype.combine(($.ig.util.cast($.ig.FastItemsSource.prototype.$type, n)).event, this.cb);
                this.b4 = true;
                this.dq(this.fg(this.valueMemberPath()));
                this.dz(this.fh(this.labelMemberPath()))
            }
            this.e7();
            break;
        case $.ig.PieChartBase.prototype.bb:
            if (this.dp() != null) {
                this.dp().ac(this.dq());
                this.dq(this.fg(this.valueMemberPath()))
            }
            break;
        case $.ig.PieChartBase.prototype.bc:
            if (this.dp() != null) {
                this.dp().ac(this.dz());
                this.dz(this.fh(this.labelMemberPath()));
                this.fa();
                this.fe();
                this.ff()
            }
            break;
        case $.ig.PieChartBase.prototype.br:
            this.dw(n);
            this.e9();
            this.fa();
            this.fd();
            this.fe();
            break;
        case $.ig.PieChartBase.prototype.bh:
            this.dn().cc(this.toolTip());
            break;
        case $.ig.PieChartBase.prototype.bp:
            var o = $.ig.util.cast($.ig.ItemLegend.prototype.$type, m);
            if (o != null) {
                o.cl(this)
            }
            this.ff();
            break;
        case $.ig.PieChartBase.prototype.bz:
        case $.ig.PieChartBase.prototype.by:
            this.ff();
            break;
        case $.ig.PieChartBase.prototype.bm:
        case $.ig.PieChartBase.prototype.bl:
        case $.ig.PieChartBase.prototype.bs:
            this.e9();
            this.fa();
            this.fd();
            this.fe();
            break;
        case $.ig.PieChartBase.prototype.bt:
        case $.ig.PieChartBase.prototype.bu:
            this.fd();
            this.ff();
            break;
        case $.ig.PieChartBase.prototype.bw:
            if (m != null) {
                var p = m;
                p.collectionChanged = $.ig.Delegate.prototype.remove(p.collectionChanged, this.b8);
                this.b2 = false
            }
            if (n != null) {
                var q = n;
                q.collectionChanged = $.ig.Delegate.prototype.combine(q.collectionChanged, this.b8);
                this.b2 = true
            }
            this.fd();
            this.ff();
            break;
        case $.ig.PieChartBase.prototype.bx:
            if (m != null) {
                var r = m;
                r.collectionChanged = $.ig.Delegate.prototype.remove(r.collectionChanged, this.b8);
                this.b3 = false
            }
            if (n != null) {
                var s = n;
                s.collectionChanged = $.ig.Delegate.prototype.combine(s.collectionChanged, this.b8);
                this.b3 = true
            }
            this.fd();
            this.ff();
            break;
        case $.ig.PieChartBase.prototype.a9:
        case $.ig.PieChartBase.prototype.bi:
        case $.ig.PieChartBase.prototype.bj:
        case $.ig.PieChartBase.prototype.bo:
        case $.ig.PieChartBase.prototype.bn:
            this.e7();
            break;
        case $.ig.PieChartBase.prototype.be:
        case $.ig.PieChartBase.prototype.bq:
            this.fa();
            this.fe();
            break;
        case $.ig.PieChartBase.prototype.bk:
            this.fa();
            this.fe();
            this.ff();
            break;
        case $.ig.PieChartBase.prototype.bf:
            this.fe();
            break;
        case $.ig.PieChartBase.prototype.bg:
            break;
        case $.ig.PieChartBase.prototype.b1:
            this.dn().cs();
            break;
        case $.ig.PieChartBase.prototype.b0:
            this.fa();
            this.fe();
            break
    }
}, propertyChanged: null, propertyUpdated: null, fj: function (d, e, f) {
    if (this.propertyChanged != null) {
        this.propertyChanged(this, new $.ig.PropertyChangedEventArgs(d))
    }
    if (this.propertyUpdated != null) {
        this.propertyUpdated(this, new $.ig.PropertyUpdatedEventArgs(d, e, f))
    }
}, fk: function (d, e) {
    var f = new $.ig.SliceClickEventArgs(d);
    this.eu(this, f);
    this.dn().bp(d, e)
}, fl: function (c, d) {
    this.dn().bp(c, d)
}, fm: function (c, d) {
    this.dn().bp(c, d)
}, fn: function (c, d) {
    this.dn().bo()
}, fo: function () {
    this.e7()
}, provideContainer: function (b) {
    this.dn().a6(b)
}, onContainerResized: function (c, d) {
    this.dn().cg(c, d)
}, getContainerRect: function () {
    return this.dn().a7()
}, getContainerOffsets: function () {
    return this.dn().a8()
}, destroy: function () {
    this.removeWidgetLevelDataSource();
    this.dn().a6(null)
}, cm: null, textStyle: function (c) {
    if (arguments.length === 1) {
        var d = this.cm;
        this.cm = c;
        this.fj($.ig.PieChartBase.prototype.b1, d, c);
        return c
    } else {
        return this.cm
    }
}, fp: function (b) {
    if (b == null || this.dq() == null || this.dt() == null) {
        return NaN
    }
    if (b.cw()) {
        return this.dr() / this.ds() * 100
    } else {
        return this.dq().item(this.dt().__inner[b.c1()]) / this.ds() * 100
    }
}, notifySetItem: function (i, e, f, g) {
    if (i.dataView && i.dataSource) {
        i = i.dataView()
    }
    if (i != this.itemsSource()) {
        return
    }
    var h = this.dp();
    if (h == null) {
        return
    }
    h.ae(new $.ig.NotifyCollectionChangedEventArgs(2, $.ig.NotifyCollectionChangedAction.prototype.replace, g, f, e))
}, notifyClearItems: function (c) {
    if (c.dataView && c.dataSource) {
        c = c.dataView()
    }
    if (c != this.itemsSource()) {
        return
    }
    var b = this.dp();
    b.ae(new $.ig.NotifyCollectionChangedEventArgs(0, $.ig.NotifyCollectionChangedAction.prototype.reset))
}, notifyInsertItem: function (g, d, e) {
    if (g.dataView && g.dataSource) {
        g = g.dataView()
    }
    if (g != this.itemsSource()) {
        return
    }
    var f = this.dp();
    if (f == null) {
        return
    }
    f.ae(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.add, e, d))
}, notifyRemoveItem: function (g, d, e) {
    if (g.dataView && g.dataSource) {
        g = g.dataView()
    }
    if (g != this.itemsSource()) {
        return
    }
    var f = this.dp();
    if (f == null) {
        return
    }
    f.ae(new $.ig.NotifyCollectionChangedEventArgs(1, $.ig.NotifyCollectionChangedAction.prototype.remove, e, d))
}, setWidgetLevelDataSource: function (a) {
    if (a.dataView && a.dataSource) {
        a = a.dataView()
    }
    this.itemsSource(a)
}, removeWidgetLevelDataSource: function () {
    this.itemsSource(null)
}, styleUpdated: function () {
    this.dn().cs()
}, $type: new $.ig.Type("PieChartBase", $.ig.Control.prototype.$type, [$.ig.INotifyPropertyChanged.prototype.$type])}, true);
$.ig.util.defType("PieLabel", "Control", {init: function () {
    $.ig.Control.prototype.init.call(this)
}, _bc: null, bc: function (b) {
    if (arguments.length === 1) {
        this._bc = b;
        return b
    } else {
        return this._bc
    }
}, _bd: null, bd: function (b) {
    if (arguments.length === 1) {
        this._bd = b;
        return b
    } else {
        return this._bd
    }
}, _be: null, be: function (b) {
    if (arguments.length === 1) {
        this._be = b;
        return b
    } else {
        return this._be
    }
}, _bf: null, bf: function (b) {
    if (arguments.length === 1) {
        this._bf = b;
        return b
    } else {
        return this._bf
    }
}, _bg: null, bg: function (b) {
    if (arguments.length === 1) {
        this._bg = b;
        return b
    } else {
        return this._bg
    }
}, br: function () {
}, bs: function () {
}, bt: function (c, d) {
    this.bg().br(c);
    this.bg().bt(d)
}, $type: new $.ig.Type("PieLabel", $.ig.Control.prototype.$type)}, true);
$.ig.util.defType("IndexCollection", "ObservableCollection$1", {init: function () {
    $.ig.ObservableCollection$1.prototype.init.call(this, $.ig.Number.prototype.$type)
}, j: function (c, d) {
    if (!this.contains(d)) {
        $.ig.ObservableCollection$1.prototype.j.call(this, c, d)
    }
}, i: function (c, d) {
    if (this.contains(d)) {
        this.remove(d);
        this.j(c, d)
    } else {
        $.ig.ObservableCollection$1.prototype.i.call(this, c, d)
    }
}, $type: new $.ig.Type("IndexCollection", $.ig.ObservableCollection$1.prototype.$type.specialize($.ig.Number.prototype.$type))}, true);
$.ig.util.defType("PieChartBaseView", "Object", {init: function (b) {
    this.b = false;
    this.c = $.ig.Rect.prototype.empty();
    this.d = false;
    this.e = true;
    this.__toolTipObject = null;
    this.f = null;
    $.ig.Object.prototype.init.call(this);
    this.x(b);
    this.ae(new $.ig.PieChartViewManager(this))
}, _x: null, x: function (b) {
    if (arguments.length === 1) {
        this._x = b;
        return b
    } else {
        return this._x
    }
}, aq: function () {
    var a = this;
    this.an(new $.ig.PieSliceDataContext());
    this.an().series(this.x());
    this.af($.ig.Rect.prototype.empty());
    this.ah(new $.ig.List$1($.ig.Slice.prototype.$type, 0));
    this.ai(new $.ig.List$1($.ig.PieLabel.prototype.$type, 0));
    this.x().legendItemTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.LegendTemplates.prototype.c);
        b.measure($.ig.LegendTemplates.prototype.i);
        return b
    }()));
    this.x().legendItemBadgeTemplate((function () {
        var b = new $.ig.DataTemplate();
        b.render($.ig.LegendTemplates.prototype.e);
        b.measure($.ig.LegendTemplates.prototype.k);
        return b
    }()))
}, ar: function () {
    var e = this;
    var f = new $.ig.BrushCollection();
    var g = new $.ig.BrushCollection();
    var h;
    var i;
    (function () {
        var a = e.ae().a4(f, g, h, i);
        f = a.brushes;
        g = a.outlines;
        h = a.fontBrush;
        i = a.font;
        return a.ret
    }());
    this.x().brushes(f);
    this.x().outlines(g);
    this.y(h);
    if (this.x().textStyle() != null) {
        this.z(this.x().textStyle())
    } else {
        this.z(i)
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
}, _ac: null, ac: function (b) {
    if (arguments.length === 1) {
        this._ac = b;
        return b
    } else {
        return this._ac
    }
}, _ad: null, ad: function (b) {
    if (arguments.length === 1) {
        this._ad = b;
        return b
    } else {
        return this._ad
    }
}, _ae: null, ae: function (b) {
    if (arguments.length === 1) {
        this._ae = b;
        return b
    } else {
        return this._ae
    }
}, a6: function (b) {
    if (b == null) {
        this.ae().a8(null);
        this.aa(null);
        this.ab(null);
        this.ac(null);
        this.ad(null);
        return
    }
    this.ae().a8(b);
    this.aa(this.ae().w());
    this.ab(this.ae().x());
    this.ac(this.ae().y());
    this.ad(this.ae().y());
    this.b5();
    this.ar()
}, a7: function () {
    return this.af()
}, a8: function () {
    return this.ae().a1()
}, a9: function () {
    this.af(this.ae().az());
    this.x().fo()
}, _af: null, af: function (b) {
    if (arguments.length === 1) {
        this._af = b;
        return b
    } else {
        return this._af
    }
}, b: null, bc: function () {
    if (!this.b) {
        this.b = true;
        this.ae().a3(this.bd.on(this))
    }
}, bd: function () {
    this.b = false;
    this.be()
}, c: null, be: function () {
    this.cf();
    if (!this.c.isEmpty()) {
        if (this.ad().b()) {
            this.ad().t(this.c.left(), this.c.top(), this.c.width(), this.c.height())
        }
        if (this.ac().b()) {
            this.ac().t(this.c.left(), this.c.top(), this.c.width(), this.c.height())
        }
        if (this.ab().b()) {
            this.ab().t(this.c.left(), this.c.top(), this.c.width(), this.c.height())
        }
        if (this.aa().b()) {
            this.aa().t(this.c.left(), this.c.top(), this.c.width(), this.c.height())
        }
    }
    this.bf()
}, d: null, bf: function () {
    this.c = this.af();
    if (this.ab().b()) {
        var l = this.ah().getEnumerator();
        while (l.moveNext()) {
            var k = l.current();
            if (k.__visibility == $.ig.Visibility.prototype.visible) {
                var m = k.cr().k();
                this.ae().a5(m);
                m.a7(1);
                if (k.c9() != null) {
                    m.__fill = k.c9()
                }
                if (k.da() != null) {
                    m.__stroke = k.da()
                }
                if (k.ab() != null) {
                    this.ab().aa(m, k.ab())
                }
                if (m.f() != null) {
                    this.ab().o();
                    this.ab().m(m.f())
                }
                if (this.d) {
                    var n;
                    if (k.c9() == null || !k.c9().isGradient()) {
                        n = null
                    } else {
                        var o = k.isExploded() ? k.cy() : k.cx();
                        var p = k.cz();
                        n = new $.ig.Rect(0, o.__x - p, o.__y - p, p * 2, p * 2)
                    }
                    this.ab().e($.ig.GradientDirection.prototype.radial, n)
                }
                this.ab().g(m);
                if (m.f() != null) {
                    this.ab().p()
                }
            }
        }
    }
    if (this.ac().b()) {
        var q = this.z();
        if (this.x().textStyle() != null) {
            q = this.x().textStyle()
        }
        this.ac().x(q);
        var s = this.ai().getEnumerator();
        while (s.moveNext()) {
            var r = s.current();
            if (r.__visibility == $.ig.Visibility.prototype.visible) {
                var t = r.bf();
                if (t != null) {
                    t.a6(this.y());
                    this.ac().i(t)
                }
                if (r.bg() != null) {
                    r.bg().__stroke = r.bc().c9();
                    this.ac().n(r.bg())
                }
            }
        }
    }
}, bg: function (h, i, j) {
    var g = this;
    var k = this.ag();
    this.bm(h);
    if (this.ag() == null && k != null) {
        var l = (function () {
            var a = new $.ig.MouseEventArgs();
            a.position(h);
            return a
        }());
        this.x().fn(this.ag(), l)
    } else {
        if (this.ag() != null) {
            var m = (function () {
                var a = new $.ig.MouseEventArgs();
                a.position(h);
                return a
            }());
            this.x().fm(this.ag(), m)
        }
    }
}, bh: function (e) {
    var d = this;
    var f = this.ag();
    this.bm(e);
    var g = (function () {
        var a = new $.ig.MouseEventArgs();
        a.position(e);
        return a
    }());
    this.x().fn(f, g)
}, bi: function (b) {
    this.bm(b)
}, bj: function (d) {
    var c = this;
    this.bm(d);
    if (this.ag() != null) {
        var e = (function () {
            var a = new $.ig.MouseButtonEventArgs();
            a.position(d);
            return a
        }());
        this.x().fk(this.ag(), e)
    }
}, _ag: null, ag: function (b) {
    if (arguments.length === 1) {
        this._ag = b;
        return b
    } else {
        return this._ag
    }
}, bm: function (c) {
    this.ag(null);
    for (var d = 0; d < this.ah().count(); d++) {
        if (this.ah().__inner[d].__visibility == $.ig.Visibility.prototype.visible && this.ah().__inner[d].el(c)) {
            this.ag(this.ah().__inner[d]);
            break
        }
    }
}, bn: function () {
    this.x().fo()
}, bo: function () {
    this.cp()
}, bp: function (d, e) {
    var f = e;
    this.cr(f.position(), d, e)
}, _ah: null, ah: function (b) {
    if (arguments.length === 1) {
        this._ah = b;
        return b
    } else {
        return this._ah
    }
}, bs: function () {
    var b = new $.ig.Slice();
    b.c4(this.x());
    this.ah().add(b);
    return b
}, bt: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, bu: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, bv: function (b) {
    b.c4(null);
    this.ah().remove(b)
}, _ai: null, ai: function (b) {
    if (arguments.length === 1) {
        this._ai = b;
        return b
    } else {
        return this._ai
    }
}, by: function () {
    var b = new $.ig.PieLabel();
    b.bg(new $.ig.Line());
    this.ai().add(b);
    return b
}, bz: function (b) {
    b.__visibility = $.ig.Visibility.prototype.visible
}, b0: function (b) {
    b.__visibility = $.ig.Visibility.prototype.collapsed
}, b1: function (b) {
    this.ai().remove(b)
}, b2: function (d) {
    if (this.x().othersCategoryStyle() != null && d.cw()) {
        d.ab(this.x().othersCategoryStyle())
    } else {
        if (d.isSelected() && this.x().allowSliceSelection() && this.x().selectedStyle() != null) {
            d.ab(this.x().selectedStyle())
        } else {
            d.ab(null);
            var e;
            var f;
            if (this.x().brushes() != null && d.c1() >= 0 && this.x().brushes().count() > 0) {
                e = this.x().brushes().item(d.c1() % this.x().brushes().count())
            } else {
                e = null
            }
            if (this.x().outlines() != null && d.c1() >= 0 && this.x().outlines().count() > 0) {
                f = this.x().outlines().item(d.c1() % this.x().outlines().count())
            } else {
                f = null
            }
            d.c9(e);
            d.da(f)
        }
    }
}, b3: function (d) {
    if (d == null || d.c5() == null) {
        return this.x().labelMemberPath()
    }
    var e = d.c5();
    var f = e.bf();
    if ($.ig.util.cast($.ig.TextBlock.prototype.$type, f) !== null) {
        return($.ig.util.cast($.ig.TextBlock.prototype.$type, f)).a5()
    }
    return f
}, b4: function (c) {
    var d = $.ig.util.cast($.ig.TextBlock.prototype.$type, c);
    if (d != null && d.a5() != null) {
        return this.ac().y(d.a5()) + $.ig.PieChartBaseView.prototype.a
    }
    return 0
}, b5: function () {
    this.aj(this.ae().a0())
}, _aj: null, aj: function (b) {
    if (arguments.length === 1) {
        this._aj = b;
        return b
    } else {
        return this._aj
    }
}, b8: function (b) {
    return this.aj() + $.ig.PieChartBaseView.prototype.a
}, b9: function (e) {
    var f = e.bf();
    if ($.ig.util.cast($.ig.TextBlock.prototype.$type, f) !== null) {
        var g = this.b4(f);
        var h = this.b8(f);
        return new $.ig.Rect(0, 0, 0, g, h)
    }
    return $.ig.Rect.prototype.empty()
}, ca: function () {
    return new $.ig.Size(this.af().width(), this.af().height())
}, cb: function (e, f, g) {
    var h = $.ig.util.cast($.ig.TextBlock.prototype.$type, e.bf());
    if (h != null) {
        h.y(f);
        h.x(g)
    }
    this.bc()
}, cc: function (b) {
    this.cq(b)
}, cd: function () {
    this.bc()
}, ce: function () {
    this.cf()
}, cf: function () {
    var b = this.z();
    if (this.x().textStyle() != null) {
        b = this.x().textStyle()
    }
    this.ac().x(b)
}, cg: function (c, d) {
    this.ae().ay(c, d)
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
}, e: null, __toolTipObject: null, f: null, cp: function () {
    this.am(false);
    if (this.__toolTipObject != null) {
        var a = this.an();
        if (this.__toolTipObject.hideToolTip) {
            this.__toolTipObject.hideToolTip(a)
        }
    }
}, cq: function (b) {
    this.f = null;
    this.__toolTipObject = null;
    if ($.ig.util.cast(String, b) !== null || typeof b === "string") {
        this.f = b
    } else {
        this.__toolTipObject = b;
        this.__toolTipObject.css("position", "absolute");
        this.__toolTipObject.css("top", "0");
        this.__toolTipObject.css("left", "0");
        this.__toolTipObject.css("z-index", "10000")
    }
}, cr: function (e, f, g) {
    this.am(true);
    this.ak(e);
    if (f == null) {
        this.al(null);
        this.an().item(null)
    } else {
        this.al((f).dataContext());
        this.an().item((f).dataContext())
    }
    var i = this.x().getContainerOffsets();
    var j = {__x: e.__x + 15 + i.c(), __y: e.__y + 15 + i.d(), $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName};
    var h = this.an();
    if (this.__toolTipObject != null) {
        if (this.e) {
            this.ae().a9(this.__toolTipObject);
            this.e = false
        }
        h.hideOthers = true;
        if (this.__toolTipObject.updateToolTip) {
            this.__toolTipObject.updateToolTip(h)
        }
        if (this.__toolTipObject.offset) {
            this.__toolTipObject.offset({left: j.__x, top: j.__y})
        }
    }
}, cs: function () {
    this.ar();
    this.b5();
    this.x().e7()
}, $type: new $.ig.Type("PieChartBaseView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("Slice", "ContentControl", {db: function () {
    return new $.ig.SliceView(this)
}, dc: function (b) {
    this.cr(b)
}, _cr: null, cr: function (b) {
    if (arguments.length === 1) {
        this._cr = b;
        return b
    } else {
        return this._cr
    }
}, init: function () {
    $.ig.ContentControl.prototype.init.call(this);
    var b = this.db();
    this.dc(b);
    b.i()
}, cs: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.bs, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.bs)
    }
}, ct: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.bt, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.bt)
    }
}, cu: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.bu, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.bu)
    }
}, cv: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.bv, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.bv)
    }
}, isSelected: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.bw, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.bw)
    }
}, isExploded: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.bx, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.bx)
    }
}, cw: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.by, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.by)
    }
}, cx: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.bz, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.bz)
    }
}, cy: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.b0, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.b0)
    }
}, cz: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.b1, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.b1)
    }
}, c0: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.b2, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.b2)
    }
}, c1: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.b3, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.b3)
    }
}, c2: function (b) {
    if (arguments.length === 1) {
        this.c($.ig.Slice.prototype.b4, b);
        return b
    } else {
        return this.b($.ig.Slice.prototype.b4)
    }
}, _c3: null, c3: function (b) {
    if (arguments.length === 1) {
        this._c3 = b;
        return b
    } else {
        return this._c3
    }
}, _c4: null, c4: function (b) {
    if (arguments.length === 1) {
        this._c4 = b;
        return b
    } else {
        return this._c4
    }
}, _c5: null, c5: function (b) {
    if (arguments.length === 1) {
        this._c5 = b;
        return b
    } else {
        return this._c5
    }
}, _c6: null, c6: function (b) {
    if (arguments.length === 1) {
        this._c6 = b;
        return b
    } else {
        return this._c6
    }
}, _c7: null, c7: function (b) {
    if (arguments.length === 1) {
        this._c7 = b;
        return b
    } else {
        return this._c7
    }
}, _c8: null, c8: function (b) {
    if (arguments.length === 1) {
        this._c8 = b;
        return b
    } else {
        return this._c8
    }
}, a6: function () {
    $.ig.Control.prototype.a6.call(this);
    this.cr().j()
}, ei: function () {
    var c = (this.c4() != null && this.c4().allowSliceExplosion()) ? true : false;
    if (this.isExploded() && c) {
        var d = new $.ig.Rect(0, this.cy().__x - this.cz(), this.cy().__y - this.cz(), this.cz() * 2, this.cz() * 2);
        return d
    }
    return new $.ig.Rect(0, this.cx().__x - this.cz(), this.cx().__y - this.cz(), this.cz() * 2, this.cz() * 2)
}, ej: function () {
    if (this.isExploded() && this.c4() != null && this.c4().allowSliceExplosion()) {
        if (this.c8()) {
            return this.c7()
        }
        return this.cy()
    }
    return this.cx()
}, ek: function () {
    var A = this;
    var B = this.cr().k();
    var C = this.c4().d2();
    if (isNaN(this.cs()) || isNaN(this.ct()) || isNaN(this.cz()) || isNaN(this.c0()) || this.c1() < 0 || this.c4() == null || C.width() == 0 || C.height() == 0 || (this.cx().__x == 0 && this.cx().__y == 0) || (this.cy().__x == 0 && this.cy().__y == 0)) {
        return
    }
    this.c3(this.ei());
    var D = $.ig.GeometryUtil.prototype.d(this.c3());
    var E = this.c3().height() / 2;
    var F = this.c3().getCenter();
    var G = $.ig.Slice.prototype.en($.ig.MathUtil.prototype.j(this.cs()), D, F, E, 100);
    var H = $.ig.Slice.prototype.en($.ig.MathUtil.prototype.j(this.ct()), D, F, E, 100);
    var I = $.ig.Slice.prototype.en($.ig.MathUtil.prototype.j(this.ct()), D, F, E, this.cv());
    var J = $.ig.Slice.prototype.en($.ig.MathUtil.prototype.j(this.cs()), D, F, E, this.cu());
    var K = Math.abs($.ig.PieChartBase.prototype.e1(this.ct() - this.cs())) == 360;
    if (K) {
        var L = (function () {
            var a = new $.ig.EllipseGeometry();
            a.f(F);
            a.g(A.cz());
            a.h(A.cz());
            return a
        }());
        B.bp(L);
        return
    }
    var M = new $.ig.PathGeometry();
    B.bp(M);
    var N = (function () {
        var a = new $.ig.PathFigure();
        a.__isClosed = true;
        return a
    }());
    M.d(new $.ig.PathFigureCollection());
    M.d().add(N);
    N.__startPoint = G;
    var O = Math.abs(this.ct() - this.cs()) > 180;
    var P = new $.ig.ArcSegment();
    P.h(H);
    P.k(new $.ig.Size(this.c3().width() / 2, this.c3().height() / 2));
    P.i(O);
    if (this.ct() > this.cs()) {
        P.j($.ig.SweepDirection.prototype.clockwise)
    } else {
        P.j($.ig.SweepDirection.prototype.counterclockwise)
    }
    N.__segments = new $.ig.PathSegmentCollection();
    N.__segments.add(P);
    var Q = new $.ig.LineSegment(1);
    Q.d(I);
    N.__segments.add(Q);
    var R = new $.ig.ArcSegment();
    R.h(J);
    R.k(P.k());
    R.i(P.i());
    R.j(P.j());
    N.__segments.add(R);
    var S = this.em(B, G, H, this.cs(), this.ct(), F, this.cz());
    if (this.c3().height() > 0 && this.c3().width() > 0 && !C.contains2(S)) {
        var T = S;
        var U = new $.ig.Rect(0, 0, 0, C.width(), C.height());
        U.intersect(T);
        var V = $.ig.GeometryUtil.prototype.a((this.cs() + this.ct()) / 2);
        var W = V / 180 * Math.PI;
        var X = Math.abs((T.height() - U.height()) / Math.sin(W));
        var Y = Math.abs((T.width() - U.width()) / Math.cos(W));
        if (isNaN(X) || Number.isInfinity(X)) {
            X = 0
        }
        if (isNaN(Y) || Number.isInfinity(Y)) {
            Y = 0
        }
        var Z = Math.max(X, Y);
        var aa = $.ig.GeometryUtil.prototype.f(this.c4().d2().width(), this.c4().d2().height(), true, V, this.cz() * this.c4().d0() - Z);
        this.cr().l(aa.__x - this.cy().__x, aa.__y - this.cy().__y);
        this.c8(true);
        this.c7(aa);
        this.c6(new $.ig.Rect(0, T.x() - (aa.__x - this.cy().__x), T.y() - (aa.__y - this.cy().__y), T.width(), T.height()))
    } else {
        this.c8(false);
        this.cr().m()
    }
}, el: function (l) {
    var m = this.c4().d2();
    if (this.__visibility == $.ig.Visibility.prototype.collapsed) {
        return false
    }
    if (isNaN(this.cs()) || isNaN(this.ct()) || isNaN(this.cz()) || isNaN(this.c0()) || this.c1() < 0 || this.c4() == null || m.width() == 0 || m.height() == 0 || (this.cx().__x == 0 && this.cx().__y == 0) || (this.cy().__x == 0 && this.cy().__y == 0)) {
        return false
    }
    var n = (this.cv() * this.cz());
    var o = this.cz();
    var p = this.cx();
    if (this.isExploded()) {
        p = this.cy();
        if (this.c8()) {
            p = this.c7()
        }
    }
    var q = n * n;
    var r = o * o;
    var s = Math.pow(l.__x - p.__x, 2) + Math.pow(l.__y - p.__y, 2);
    if (s < q || s > r) {
        return false
    }
    var t = Math.atan2(l.__y - p.__y, l.__x - p.__x);
    t = t * 180 / Math.PI;
    t = $.ig.GeometryUtil.prototype.a(t);
    var u = $.ig.GeometryUtil.prototype.a((this.cs() + this.ct()) / 2);
    var v = Math.abs(this.ct() - this.cs()) / 2;
    if (t > (u + v) || t < (u - v)) {
        return false
    }
    return true
}, em: function (o, p, q, r, s, t, u) {
    var v = new $.ig.List$1($.ig.Point.prototype.$type, 0);
    v.add(p);
    v.add(q);
    v.add(t);
    r = $.ig.GeometryUtil.prototype.a(r);
    s = $.ig.GeometryUtil.prototype.a(s);
    if ((0 > r && 0 < s) || (360 > r && 360 < s) || (s < r)) {
        v.add($.ig.GeometryUtil.prototype.g(t, 0, u))
    }
    if (90 > r && 90 < s) {
        v.add($.ig.GeometryUtil.prototype.g(t, 90, u))
    }
    if (180 > r && 180 < s) {
        v.add($.ig.GeometryUtil.prototype.g(t, 180, u))
    }
    if (270 > r && 270 < s) {
        v.add($.ig.GeometryUtil.prototype.g(t, 270, u))
    }
    var w = Number.MAX_VALUE;
    var x = Number.MAX_VALUE;
    var y = -Number.MAX_VALUE;
    var z = -Number.MAX_VALUE;
    var B = v.getEnumerator();
    while (B.moveNext()) {
        var A = B.current();
        w = Math.min(w, A.__x);
        x = Math.min(x, A.__y);
        y = Math.max(y, A.__x);
        z = Math.max(z, A.__y)
    }
    return new $.ig.Rect(0, w, x, y - w, z - x)
}, en: function (i, j, k, l, m) {
    var n = Math.cos(i);
    var o = Math.sin(i);
    var p = Math.sqrt(l * l / (1 - (j * Math.pow(n, 2))));
    p *= (m / 100);
    return{__x: p * n + k.__x, __y: p * o + k.__y, $type: $.ig.Point.prototype.$type, getType: $.ig.Object.prototype.getType, getGetHashCode: $.ig.Object.prototype.getGetHashCode, typeName: $.ig.Object.prototype.typeName}
}, _c9: null, c9: function (b) {
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
}, $type: new $.ig.Type("Slice", $.ig.ContentControl.prototype.$type)}, true);
$.ig.util.defType("SliceView", "Object", {_c: null, c: function (b) {
    if (arguments.length === 1) {
        this._c = b;
        return b
    } else {
        return this._c
    }
}, init: function (b) {
    $.ig.Object.prototype.init.call(this);
    this.c(b)
}, _d: null, d: function (b) {
    if (arguments.length === 1) {
        this._d = b;
        return b
    } else {
        return this._d
    }
}, i: function () {
    this.d(new $.ig.Path());
    this.c().a9(this.d())
}, j: function () {
    this.c().ek()
}, k: function () {
    return this.d()
}, l: function (d, e) {
    var c = this;
    this.d().f((function () {
        var a = new $.ig.TranslateTransform();
        a.g(d);
        a.h(e);
        return a
    }()))
}, m: function () {
    this.d().f(null)
}, $type: new $.ig.Type("SliceView", $.ig.Object.prototype.$type)}, true);
$.ig.util.defType("XamPieChart", "PieChartBase", {d3: function () {
    return new $.ig.XamPieChartView(this)
}, d4: function (b) {
    $.ig.PieChartBase.prototype.d4.call(this, b);
    this.gn(b)
}, _gn: null, gn: function (b) {
    if (arguments.length === 1) {
        this._gn = b;
        return b
    } else {
        return this._gn
    }
}, init: function () {
    $.ig.PieChartBase.prototype.init.call(this);
    this.a3($.ig.XamPieChart.prototype.$type)
}, $type: new $.ig.Type("XamPieChart", $.ig.PieChartBase.prototype.$type)}, true);
$.ig.util.defType("XamPieChartView", "PieChartBaseView", {_cu: null, cu: function (b) {
    if (arguments.length === 1) {
        this._cu = b;
        return b
    } else {
        return this._cu
    }
}, init: function (b) {
    $.ig.PieChartBaseView.prototype.init.call(this, b);
    this.cu(b)
}, $type: new $.ig.Type("XamPieChartView", $.ig.PieChartBaseView.prototype.$type)}, true);
$.ig.OthersCategoryType.prototype.number = 0;
$.ig.OthersCategoryType.prototype.percent = 1;
$.ig.LabelsPosition.prototype.none = 0;
$.ig.LabelsPosition.prototype.center = 1;
$.ig.LabelsPosition.prototype.insideEnd = 2;
$.ig.LabelsPosition.prototype.outsideEnd = 3;
$.ig.LabelsPosition.prototype.bestFit = 4;
$.ig.Legend.prototype.cc = "Orientation";
$.ig.PieChartBase.prototype.a7 = "ContentPresenter";
$.ig.PieChartBase.prototype.a8 = "FastItemsSource";
$.ig.PieChartBase.prototype.a9 = "ValueColumn";
$.ig.PieChartBase.prototype.ba = "ItemsSource";
$.ig.PieChartBase.prototype.bb = "ValueMemberPath";
$.ig.PieChartBase.prototype.bc = "LabelMemberPath";
$.ig.PieChartBase.prototype.bd = "LabelColumn";
$.ig.PieChartBase.prototype.be = "LabelsPosition";
$.ig.PieChartBase.prototype.bf = "LeaderLineVisibility";
$.ig.PieChartBase.prototype.bg = "LeaderLineStyle";
$.ig.PieChartBase.prototype.bh = "ToolTip";
$.ig.PieChartBase.prototype.bi = "OthersCategoryThreshold";
$.ig.PieChartBase.prototype.bj = "OthersCategoryType";
$.ig.PieChartBase.prototype.bk = "OthersCategoryText";
$.ig.PieChartBase.prototype.bl = "ExplodedRadius";
$.ig.PieChartBase.prototype.bm = "RadiusFactor";
$.ig.PieChartBase.prototype.bn = "AllowSliceSelection";
$.ig.PieChartBase.prototype.bo = "AllowSliceExplosion";
$.ig.PieChartBase.prototype.bp = "Legend";
$.ig.PieChartBase.prototype.bq = "LabelExtent";
$.ig.PieChartBase.prototype.br = "StartAngle";
$.ig.PieChartBase.prototype.bs = "SweepDirection";
$.ig.PieChartBase.prototype.bt = "OthersCategoryStyle";
$.ig.PieChartBase.prototype.bu = "SelectedStyle";
$.ig.PieChartBase.prototype.bv = "ToolTipStyle";
$.ig.PieChartBase.prototype.bw = "Brushes";
$.ig.PieChartBase.prototype.bx = "Outlines";
$.ig.PieChartBase.prototype.by = "LegendItemTemplate";
$.ig.PieChartBase.prototype.bz = "LegendItemBadgeTemplate";
$.ig.PieChartBase.prototype.b0 = "LabelTemplate";
$.ig.PieChartBase.prototype.b1 = "TextStyle";
$.ig.PieChartBase.prototype.cc = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.a8, $.ig.FastItemsSource.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.a8, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.itemsSourceProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.ba, $.ig.IEnumerable.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.ba, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.valueMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bb, String, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bb, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.labelMemberPathProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bc, String, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(0, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bc, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.labelsPositionProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.be, $.ig.LabelsPosition.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.LabelsPosition.prototype.center, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.be, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.leaderLineVisibilityProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bf, $.ig.Visibility.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.Visibility.prototype.visible, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bf, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.leaderLineStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bg, $.ig.Style.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bg, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.toolTipProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bh, $.ig.Object.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bh, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.othersCategoryThresholdProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bi, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 3, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bi, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.othersCategoryTypeProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bj, $.ig.OthersCategoryType.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.OthersCategoryType.prototype.percent, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bj, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.othersCategoryTextProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bk, String, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, "Others", function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bk, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.explodedRadiusProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bl, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 0.2, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bl, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.radiusFactorProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bm, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 0.9, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bm, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.allowSliceSelectionProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bn, $.ig.Boolean.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, true, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bn, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.allowSliceExplosionProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bo, $.ig.Boolean.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, true, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bo, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.legendProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bp, $.ig.LegendBase.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bp, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.labelExtentProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bq, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 10, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bq, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.startAngleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.br, Number, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.br, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.sweepDirectionProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bs, $.ig.SweepDirection.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, $.ig.SweepDirection.prototype.clockwise, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bs, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.othersCategoryStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bt, $.ig.Style.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bt, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.selectedStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bu, $.ig.Style.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bu, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.toolTipStyleProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bv, $.ig.Style.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bv, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.brushesProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bw, $.ig.BrushCollection.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bw, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.outlinesProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bx, $.ig.BrushCollection.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bx, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.legendItemTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.by, $.ig.DataTemplate.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.by, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.legendItemBadgeTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.bz, $.ig.DataTemplate.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.bz, d.f(), d.e())
}));
$.ig.PieChartBase.prototype.labelTemplateProperty = $.ig.DependencyProperty.prototype.l($.ig.PieChartBase.prototype.b0, $.ig.DataTemplate.prototype.$type, $.ig.PieChartBase.prototype.$type, new $.ig.PropertyMetadata(1, null, function (c, d) {
    ($.ig.util.cast($.ig.PieChartBase.prototype.$type, c)).fj($.ig.PieChartBase.prototype.b0, d.f(), d.e())
}));
$.ig.PieChartBaseView.prototype.a = 0;
$.ig.Slice.prototype.bf = "StartAngle";
$.ig.Slice.prototype.bg = "EndAngle";
$.ig.Slice.prototype.bh = "InnerExtentStart";
$.ig.Slice.prototype.bi = "InnerExtentEnd";
$.ig.Slice.prototype.bj = "IsSelected";
$.ig.Slice.prototype.bk = "IsExploded";
$.ig.Slice.prototype.bl = "IsOtherSlice";
$.ig.Slice.prototype.bm = "Origin";
$.ig.Slice.prototype.bn = "ExplodedOrigin";
$.ig.Slice.prototype.bo = "Radius";
$.ig.Slice.prototype.bp = "ExplodedRadius";
$.ig.Slice.prototype.bq = "Index";
$.ig.Slice.prototype.br = "StrokeThickness";
$.ig.Slice.prototype.bs = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bf, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.bt = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bg, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.bu = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bh, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.bv = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bi, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.bw = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bj, $.ig.Boolean.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, false, function (e, f) {
    var g = $.ig.util.cast($.ig.Slice.prototype.$type, e);
    var h = f.e();
    g.c4().ew(g, h)
}));
$.ig.Slice.prototype.bx = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bk, $.ig.Boolean.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, false, function (e, f) {
    var g = $.ig.util.cast($.ig.Slice.prototype.$type, e);
    var h = f.e();
    g.c4().ev(g, h)
}));
$.ig.Slice.prototype.by = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bl, $.ig.Boolean.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, false, function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.bz = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bm, $.ig.Point.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, new $.ig.Point(0), function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.b0 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bn, $.ig.Point.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, new $.ig.Point(0), function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.b1 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bo, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.b2 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bp, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 0, function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.b3 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.bq, $.ig.Number.prototype.$type, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, -1, function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
}));
$.ig.Slice.prototype.b4 = $.ig.DependencyProperty.prototype.l($.ig.Slice.prototype.br, Number, $.ig.Slice.prototype.$type, new $.ig.PropertyMetadata(1, 1, function (c, d) {
    return($.ig.util.cast($.ig.Slice.prototype.$type, c)).ek()
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