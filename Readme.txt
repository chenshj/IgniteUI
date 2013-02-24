==============================================================
====              IgniteUI(TM) 2012 Volume 2              ====
==============================================================

  Getting Started with JavaScript and CSS
--------------------------------------------------------------

1. Copy the 'js' and 'css' folders to your website.

        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  Note:
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	This document continues as if the 'js' and 'css' 
	directories are copied to the root of your website.
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
2. jQuery, jQuery UI, and Modernizr are required to use igniteUI.
Modernizr needs to be of a custom build with css-boxsizing enabled
   if targeting IE7: http://modernizr.com/download/

        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  Note:
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	For this README, the CDN versions of jQuery, jQuery UI, and Modernizr.
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

3. Once the 'js' and 'css' folders are copied, the following 
JavaScript and CSS references are recommended in this order:
	
****************************************************************

<!--Infragistics Theme-->
<link href="css/themes/infragistics/infragistics.theme.css" rel="stylesheet" type="text/css" />	

<!--Structure CSS-->
<link href="css/structure/infragistics.css" rel="stylesheet" type="text/css" />
	
<!--jQuery from CDN-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js" type="text/javascript"></script>

<!--jQuery UI from CDN-->
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/jquery-ui.js" type="text/javascript"></script>

<!--Modernizr from CDN. For css-boxsizing support build a custom version here: http://modernizr.com/download/-->
<script src="http://www.modernizr.com/downloads/modernizr-latest.js" type="text/javascript"></script>

<!--igniteUI Combined JavaScript-->
<script src="js/infragistics.js" type="text/javascript"></script>

4. Alternatively Infragistics loader can be used to load only necessary resources.
If that is the choice that is made for your application, instead of placing Infragistics references from above,
only the following are required:

<!--jQuery from CDN-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js" type="text/javascript"></script>

<!--jQuery UI from CDN-->
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/jquery-ui.js" type="text/javascript"></script>

<!--Modernizr from CDN. For css-boxsizing support build a custom version here: http://modernizr.com/download/-->
<script src="http://www.modernizr.com/downloads/modernizr-latest.js" type="text/javascript"></script>

<!--IgniteUI resources loader-->
<script src="js/infragistics.loader.js" type="text/javascript"></script>

To request necessary resources, which include CSS and JavaScript files. The following code may be used:

<script type="text/javascript">
		$.ig.loader({
			scriptPath: './js/',
			cssPath: './css/',
			resources: 'igGrid.Filtering.Sorting,igTree', // This example loads igGrid with Filtering and Sorting features, as well as igTree widgets.
			ready: function () {
				// Initialization code placed here
			}
		});
</script>

****************************************************************

        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	  Note:
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	For more information on using JavaScript and CSS with 
	IgniteUI, see:
		http://help.infragistics.com/*
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

==============================================================
Copyright © 2011-2012 Infragistics, Inc. All rights reserved.
