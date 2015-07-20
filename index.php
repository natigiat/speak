<?php

$voice = file_get_contents('http://www.google.com/intl/en/chrome/demos/speech.html');
echo $voice;
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
  <head>
    <title>online markdown editor</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    
    <!-- Styles -->
    <link type="text/css" rel="stylesheet" href="css/style.css"/>
    <link type="text/css" rel="stylesheet" href="css/theme-balupton.css"/>
  
    <!-- jquery ui css -->
    <link rel="stylesheet" href="jquery-ui-1.11.2.custom/jquery-ui.css">

    <!-- Bootstrap CSS -->
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
    <!-- <!-- side menu -->
    <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="side-menu/style.css" type="text/css" rel="stylesheet" media="screen,projection" />

    <!-- Font Awesome icons -->
    <link rel="stylesheet" href="http://weloveiconfonts.com/api/?family=fontawesome">
    <!-- edito line number -->
    <link href="line_number/jquery-linedtextarea.css" type="text/css" rel="stylesheet" />

    <!-- heylight code -->
    <link href="textHeylayt/jquery.highlighttextarea.css" type="text/css" rel="stylesheet">

    <link href="syntaxhighlighter_3.0.83/styles/shCore.css" type="text/css" rel="stylesheet">
    <link href="syntaxhighlighter_3.0.83/styles/shThemeDefault.css" type="text/css" rel="stylesheet">

   
  </head>
  <body>
    
    <div id="home" class="container">
      
        <!-- Add an optional button to open the popup -->

        <!-- Add content to the popup -->
        <div id="my_popup">

         <div id="preview" class="wmd-preview"></div>

          <!-- Add an optional button to close the popup -->
          <button class="my_popup_close">Close</button>

        </div>
      
      <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
     <!--  <ul class="nav navbar-nav navbar-right">
        <li><img src="images/chrome_ico.png" height="30" width="30" class="browser_icon my_popup_open" id="chrome"></li>
        <li><img src="images/firefox_original.png" height="30" width="30" class="browser_icon"></li>
        <li><img src="images/internet_explorer.png" height="30" width="30" class="browser_icon"></li>
        <li><img src="images/opera.png" height="30" width="30" class="browser_icon"></li>
        <li><img src="images/safari.png" height="30" width="30" class="browser_icon"></li>
      </ul> -->
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav><!-- end navbar -->



       
   



      <div class="row">
            <div class="col-md-4">
                <div id="files"></div>
               
            </div>
            <div class="col-md-8">
                <textarea id="editor" class="lined brush: js" rows="30" cols="160"></textarea>
            </div>


    </div>

    </div>   
    

    <!-- bower:js -->
    <script src="app/components/jquery/dist/jquery.js"></script>
    <script src="app/components/jqueryui/jquery-ui.js"></script>
    <script src="app/components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="app/components/jquery-highlighttextarea/jquery.highlighttextarea.js"></script>
    <!-- endbower -->

    <!-- jQuery and Syntax Highlight -->
    <script type="text/javascript" src="js/jquery.syntaxhighlighter.min.js"></script>

    <!-- Additional scripts -->
    <script type="text/javascript" src="js/functions.js"></script>

    <!-- jQuery Popup Overlay -->
    <script src="popup/jquery.popupoverlay.js"></script>
    <script src="app.js"></script>

    <!-- editor line -->
    <script src="line_number/jquery-linedtextarea.js"></script>
    <script src="js/editor.js"></script>

    <!-- betiful code -->
    <script src="beautify-master/beautify-css.js"></script>
    <script src="beautify-master/beautify-html.js"></script>
    <script src="beautify-master/beautify-js.js"></script>

    <!-- Include required JS files -->
    <script type="text/javascript" src="syntaxhighlighter_3.0.83/scripts/shCore.js"></script>
    <script type="text/javascript" src="syntaxhighlighter_3.0.83/scripts/shAutoloader.js"></script>
    <script type="text/javascript" src="syntaxhighlighter_3.0.83/scripts/shBrushCss.js"></script>
    <script type="text/javascript" src="syntaxhighlighter_3.0.83/scripts/shBrushCSharp.js"></script>
    <script type="text/javascript" src="syntaxhighlighter_3.0.83/scripts/shBrushJScript.js"></script>
    <script type="text/javascript" src="syntaxhighlighter_3.0.83/scripts/shBrushPhp.js"></script>
    <script type="text/javascript" src="syntaxhighlighter_3.0.83/scripts/shBrushSql.js"></script>
  


    
  </body>
</html>

