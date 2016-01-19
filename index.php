<?php include_once('functions.php'); ?>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
  <title>Styleguide | The Drum</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="public/css/sg-styles.css">
  <link rel="stylesheet" href="public/css/pattern-styles.css">

</head>
<body>

    <a href="#sg-main" class="sg-visually-hidden sg-visually-hidden-focusable">Skip to main content</a>

        <div id="top" class="sg-header cf" role="banner">

            <header>

                <div class="sg-container">

                  <h1 class="sg-logo">
                    <img src="images/logo-the-drum.svg" alt="">
                    <span class="sg-product">| Styleguide</span>
                  </h1>

                  <div class="sg-version sg-small">Version: 1.0.0</div>

                </div>

            </header>

        </div>

    <div class="sg-main" role="main">

        <div class="sg-container">


        <h2 class="sg-h2">About</h2>

        <p>The Visual, UI and front end style guide for the redesign of <a href="http://www.thedrum.com/" target="_blank">thedrum.com</a>. This living styleguide is designed to be an aid to building well-organized documentation of front-end codebases. By "living" we mean the documentation remains in constant sync with the actual code.</p>

        <hr>

        <h2 class="sg-h2">Getting started</h2>

        <ol class="sg-contents">
            <li><a href="#installation">Installation</a></li>
            <li><a href="#colors">Colors</a></li>
            <li><a href="#fonts">Fonts</a></li>
        </ol>

        <hr>

        <?php listFilesInFolder('markup'); ?>

        <h2 class="sg-h2">Guidelines</h2>
        <ol class="sg-contents">
            <li class="sg-disabled">General guidelines&#8599;</li>
            <li class="sg-disabled">Accessibility guidelines&#8599;</li>
            <li class="sg-disabled">HTML guidelines&#8599;</li>
            <li class="sg-disabled">Sass & CSS guidelines&#8599;</li>
            <li class="sg-disabled">Javascript guidelines&#8599;</li>
        </ol>

        <hr>


        <h2 id="installation" class="sg-h2">Installation</h2>

        <p>1. The Styleguide is built using the <a href="https://nodejs.org/en/" target="_blank">Node.js</a> package <a href="http://gulpjs.com/" target="_blank">Gulp.js</a>. To install the Styleguide and contribute to the project you should clone the repo from <a href="https://github.com/thedrum-developers/the-drum-styleguide" target="_blank">Github</a>.</p>

        <div class="code-block">
            <pre><code>$git clone https://github.com/thedrum-developers/the-drum-styleguide</code></pre>
        </div>

        <p>2. In terminal, run Node Package Manager to install the node dependences.</p>

        <div class="code-block">
            <pre><code>$npm install</code></pre>
        </div>

        <p>3. Build the project by running Gulp.</p>

        <div class="code-block">
            <pre><code>$gulp</code></pre>
        </div>

        <a class="sg-btn--top" href="#top">&#8593; Back to Top</a>

        <hr>

        <h2 id="colors" class="sg-h2">Colours</h2>

        <p>Majority of the new colour pallet has still to be formulated. However, the acceptance criteria for commiting new colours into the project will be that they comply with <a href="https://www.w3.org/TR/WCAG20/" target="_blank">WCAG2AA</a>.</p>

        <p>You can test proposed additions with <a href="http://webaim.org/resources/contrastchecker/" target="_blank">Webaim Contrast Checker</a></p>


        <div class="sg-example-color color-shade--100">
            <div class="sg-example-color-info">
                <div>#FFFFFF</div>
                <div>rgb(255, 255, 255)</div>
            </div>
        </div>
        <div class="sg-example-color color-shade--200">
            <div class="sg-example-color-info">
                <div>#F38D90</div>
                <div>rgb(233, 233, 233)</div>
            </div>
        </div>
        <div class="sg-example-color color-shade--300">
            <div class="sg-example-color-info">
                <div>#ED1C24</div>
                <div>rgb(204, 204, 204)</div>
            </div>
        </div>
        <div class="sg-example-color color-shade--400">
            <div class="sg-example-color-info">
                <div>#B30E14</div>
                <div>rgb(67, 60, 62)</div>
            </div>
        </div>
        <div class="sg-example-color color-shade--500">
            <div class="sg-example-color-info">
                <div>#840A0F</div>
                <div>rgb(35, 31, 32)</div>
            </div>
        </div>

        <div class="sg-example-color color-red--300">
            <div class="sg-example-color-info">
                <div>#ED1C24</div>
                <div>rgb(237, 28, 36)</div>
                <div class="sg-small">Font size 24px+</div>
            </div>
        </div>


        <a class="sg-btn--top" href="#top">&#8593; Back to Top</a>

        <hr>

        <h2 id="fonts" class="sg-h2">Font stack</h2>

        <p>The Drum uses multiple font weights from the font families <a href="http://www.linotype.com/2090/avenir-next.html" target="_blank">Avenir Next</a> and <a href="http://www.linotype.com/1386572/ff-marselis-slab-family.html" target="_blank">Marselis Slab</a>.</p>

        <p>Provided by <a href="http://www.monotype.com/" target="_blank">Monotype</a></p>

        <a class="sg-btn--top" href="#top">&#8593; Back to Top</a>

        <hr>


        <?php renderFilesInFolder('markup'); ?>

        </div>

    </div>


    <div class="sg-footer" role="footer">

        <div class="sg-container">

            <footer>

                <p class="sg-small">Build by The Drum</p>

            </footer>

        </div>

    </div>






<!--[if gte IE 9]><!-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<!--<![endif]-->

<!--[if lte IE 8]>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<![endif]-->

<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/highlight.min.js"></script>
<script src="public/js/sg-scripts.js"></script>
<script src="public/js/pattern-scripts.js"></script>

</body>
</html>

