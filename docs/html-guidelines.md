# HTML

- - -

## Syntax & Formatting
In general, The Drum should adhere to:

* four (4) spaces indents, no tabs;
* nested elements should be indented once;
* don’t omit optional closing tags;
* always use double quotes, never single quotes, on attributes;
* use a new line for every block, list, or table element, and indent every such child element;
* include a trailing slash in self-closing elements (.e.g ``<br />`` and ``<hr />``)
* don't use HTML entity references;
* detailed comments to help readers.

We use the the HTML 5 Doctype to enforce standards mode and more consistent rendering in every browser possible with this simple doctype at the beginning of every HTML page.

```html
<!-- Example: Yep -->
<!DOCTYPE html>
  <html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <img src="images/company-logo.png" alt="Company">
        <h1 class="hello__world">Hello, world!</h1>
    </body>
</html>
```

### Language Attribute
Given that our sites have a global audience, we set this ``<html>`` attribute dynamically given a user's language preferences.

```html
<!-- Example: Yep (set for UK English dynamically by system) -->
<html lang="en-GB">
</html>
```

### Character Encoding
We ensure proper rendering of content by declaring an explicit character encoding. When doing so, you may avoid using character entities in your HTML, provided their encoding matches that of the document (generally UTF-8).

```html
<!-- Example: Yep -->
<head>
    <meta charset="UTF-8">
</head>
```

### Right to Left (RTL) Support
With HTML, the W3C recommends adding the language direction attribute (dir="rtl") on the root (html) element to define the language direction of the document. Because some browsers incorrectly switch the location of the scroll bar to the left as well, current best-practice is to add the ``dir="rtl"`` attribute to the ``<head>`` tag and to a ``<div>`` wrapping the whole page to directionally reverse the entire document (which is an alternate recommendation by W3C) to ensure that the scrollbar isn't directionally reversed.

Example RTL set-up:
```html
<!DOCTYPE html>
  <html>
    <head dir="rtl">
        ...
    </head>
    <body>
        <div class="wrapper__view" dir="rtl">
            ...
        </div>
    </body>
</html>
```

### Attribute Order
HTML attributes should come in this particular order for easier reading of code.

* ``class``;
* ``type``;
* ``id, name``;
* ``data-*``;
* ``src``, ``for``, ``type``, ``ref``;
* ``placeholder``, ``value``;
* ``title``, ``alt``;
* ``aria-*``, ``role``
* ``checked``, ``required``


### Boolean Attributes
A boolean attribute is one that needs no declared value. XHTML required you to declare a value, but HTML5 has no such requirement. For further reading, consult the WhatWG section on boolean attributes:

> The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.

```html
<!-- Example: Yep -->
<button type="submit" disabled></button>

<input type="checkbox" value="1" checked />

<select>
    <option value="1" selected>1</option>
</select>
```

### Referenced Assets
When referencing assets, we prefer:

* to use an absolute path when referencing an external assets (not hosted by The Drum)
* to use a root relative path when referencing an drum-hosted/managed asset
* only reference assets 

Per HTML5 spec, typically there is no need to specify a type when including CSS and JavaScript files as ``text/css`` and ``text/javascript`` are their respective defaults.

```html
<!-- Example: External CSS -->
<link rel="stylesheet" href="main.min.css">

<!-- Example: In-document CSS -->
<style>
/*  ... */
</style>

<!-- Example: JavaScript -->
<script src="main.min.js"></script>
```

For Performance's sake, it's important to also:

* load style and javascript assets directly needed for the page/view to render (i.e. assets in the critical path for the page) in the ``<head>``
* load supplemental javascript assets for the page/view before the close of the ``<body>`` element (i.e. ``</body>``) or by using the ``async`` attribute on the external reference (e.g. ``<script src="script.js" async></script>``).
* compress and reduce the filesize of production-ready assets as much as possible (with some communication of the compression in their name - ".min."). 

```html
<!DOCTYPE html>
  <html>
    <head>
        <title>Page Title</title>
        <link rel="stylesheet" href="main.min.css">
        <script src="main.min.js"></script>
    </head>
    <body>
        ...
        <script src="view.min.js"></script>
    </body>
</html>
```

### Browser Specific Scoping
We encourage troubleshooting and building code that will work in all browsers that we support without special modifications. For us, this includes more modern versions of Internet Explorer (currently > IE8).

If you need to test in older versions of Internet Explorer, we recommend you to use conditional IE comments for CSS hooks to use in stylesheets. Class the html tag with the appropriate version of IE to be used directly in the master stylesheet that contains the selector being re-written. Here is a common example of how to do so:

```html
<!-- Example: Yep -->
<!--[if IE 8]><html class="ie-8 no-js" lang="en"><![endif]-->
<!--[if IE 9]><html class="ie-9 no-js" lang="en"><![endif]-->
<!--[if gte IE 10]><!--><html lang="en" class="no-js"><!--<![endif]-->
```



#### IE compatibility mode
Internet Explorer supports the use of a document compatibility ``<meta>`` tag to specify what version of IE the page should be rendered as. Unless circumstances require otherwise, it's most useful to instruct IE to use the latest supported mode with edge mode.

```html
<!-- Example: Yep -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

### Inline Documentation
Strive to be clear in explaining why we did something so that the next person or the person 4 years later can follow why or how we were doing something. This means commenting on things like:

* the structure and/or role of a file;
* the goal of a ruleset;
* the reason for a CSS declaration;
* the order of CSS declarations;
* the thought process behind a way of doing things.

#### HTML Comments
Comments in source code are removed when the project is built for release. However, commenting is expected to be included in source files. We write every in-line/explanative HTML comment as such:

```html
<!-- wrapping for positioning/responsive purposes -->
<div class="header__wrapper">
  <header class="header header--global">
      <h1 class="header__logo header__logo__product">
        <!-- need to clear document flow -->
        <img class="logo__product__image clearfix" src="company.png" alt="Company">
        <span class="logo__product__name">Product Name</span>
      </h1>
  </header>
</div>
```

Avoid writing closing tag comments, like ``<!-- /.element -->``. This just adds (albeit a small amount) to page load time and extra clutter in the source code. 

- - -

## File Organization
Symfony 2 file structure be documented by Chris

```
[application-name]
...
├── 
└── 
|   └── 
|   └── 
|   └──
|   └── 
|   └── 
|   └── 
|   └── 
|   └── 
|   └──
|   └── 
|   └── 
└── 
|   └── []            
```

### File Naming
We adhere to the following conventions when naming:

* files should be named in all lowercase with ``-`` separating legible words (e.g. ``footer-global.html``)
* prefix any partial or included file (a file that should not render on its own) with an underscore (e.g. ``_header-primary.html``).

- - -

## Semantics & Elements
Almost all HTML elements carry an inherent meaning and should be used appropriately based on context. Follow these guidelines in that spirit:

* Paragraphs of text should always be placed in a ``<p>`` tag. Never use multiple ``<br>`` tags.
* Items in list form should always be in ``<ul>``, ``<ol>``, or ``<dl>``. Never use a set of ``<div>`` or ``<p>``.
* Every form input that has text attached should utilize a ``<label>`` tag. Especially radio or checkbox elements.
* Always put double quotes around attributes for readability, even though they're optional.
* Don't set tabindex manually—rely on the browser to set the order. The only caveat to this is if you need to set the tabindex for functionality, in which case at tabindex of `-1` would be used.
* Do not use the size attribute on your inputs The size attribute is relative to the font-size of the text inside the input. Style the width in your CSS instead.
* Do not use the size attribute on your images. Instead use CSS.
* Don’t use tables for layout, only for tabular data.
* Make use of ``<thead>``, ``<tbody>``, and ``<th>`` tags (and the ``scope`` attribute) when appropriate with tabular data.
* Be sparing when using extra tags for visual effects (icons, wrappers, etc). * Ideally, every semantic tag on your page should have a specific, non-visual meaning.
* Prefer to use JS to add any non-semantic tags needed for a JS feature.

### Form fields, groups, and field sets
Our form markup should follow the following standards and vocabulary:

* a ``form`` element should wrap all form fields and should have the `.form` class
* group sections of forms (i.e., personal information, optional information, other) via `div` or `fieldset` with the `.form-group` class
* wrap groups of radio buttons and checkboxes in a `fieldset` with the `.field-group` class
* for `legend`'s, use `.form-group-hd` or `.field-group-hd` respectively depending on the above scenario
* we use one form field to one form field wrapper (`.field`)
* we recommend wrapping radio buttons or checkboxes in its respective `label` element, but it is not required; you may display them unwrapped and side-by-side so long as the label's `for` attribute points to the inputs `id` attribute

#### Form field helper text
We provide a nice way to provide additional context for form fields via helper text. When using helper text, make sure and  include the proper ARIA markup to connect the helper text to the input field. An example of this might be:

```
<label for="first-name" class="field__label">First name</label>
<input type="text" class="field__input input__text" id="first-name" name="first-name" aria-describedby="helper-first-name">
<div class="field__hint" id="helper__first-name">How we're refer to you within the form</div>
```

Note how the `id` of the helper text is referenced by the `aria-describedby` of the text field.

#### Using enhanced form fields
While our default form fields have been styled to look sleek, modern, and friendly, we do provide a few enhancements for a handful of types. The input types we've created optional enhanced styles for, are:
* radio buttons
* checkboxes
* select menus

To take advantage of the enhanced input type, simple provide an additional class to each input. 

| Form field    | Replace class       |
|---------------|---------------------|
| Select menus  | `.replace-select`   |
| Checkboxes    | `.replace-checkbox` |
| Radio buttons | `.replace-radio`    |

__Please note:__ _In order to use enhanced input types, the form label must wrap the form input._

### Class and ID Attributes
IDs and Classes should be specific and meaningful. IDs should be avoided where possible, due to their difficulty to override or reuse.

When creating IDs and Classes, try to avoid visual identifiers such as directions and colors like top, left, red and blue unless absolutely necessary on a system of large scale and complexity. This keeps visual meaning out of markup and leaves it up to CSS to define layout. When naming multiple identical regions differentiate by nothing other than position or color, use a numbering sequence (two-digit formatted) such as “section-01” and “group-02”.

### HTML5 Elements
Use parts of HTML5 when appropriate, while ensuring older browsers are handled fairly. Feature availability sites like http://caniuse.com/ are your friend.

#### Article
An independent piece of content, one suitable for putting in an ``<article>`` element, is content that makes sense on its own. This yardstick is up to your interpretation, but an easy smell test is would this make sense in an RSS feed? Of course weblog articles and static pages would make sense in a feed reader, and some sites have weblog comment feeds. On the other hand, a feed with each paragraph of this article as a separate post wouldn’t be very useful. The key point here is that the content has to make sense independent of its context, i.e. when all the surrounding content is stripped away.

#### Aside
The ``<aside>`` element can now represent secondary content when used outside of an article. Keep in mind that aside — and, more generally, secondary content — does not necessarily mean “sidebar”. The style of the content should not dictate the use of the element. For content that is not the primary focus of an article (or page) but is still related to the article (or page), aside is what you need, regardless of its visual design.


#### Header
Well the obvious place to start would be at the beginning of your page. We we can start with something like this that includes your primary page heading.

```html
<header>
    <h1>The most important heading on this page</h1>
    <p>With some supplementary information</p>
</header>
```

An important point to note is that you are not restricted to using one <header> element per site. You can use multiple headers, each of which will then become the ``<header>`` for that section of the document. 

While you can have multiple, the ``header`` element should only be used for 1) **page/view structure** or 2) **pieces of content within the DOM that can stand out on their own without the page's semantics, such as articles, posts, notes, etc.**

You could therefore have the following:

```html
<header>
    <h1>The most important heading on this page</h1>
    <p>With some supplementary information</p>
</header>

<article>
    <header>
        <h2>Title of this article</h2>
        <p>By John Doe</p>
    </header>
        <p> ... </p>
</article>
```

#### Section
``<section>`` elements are blobs of content that you could store as an individual records in a database. They generally looks like this (and note that the heading goes inside the section element, not immediately before it):

```html
<body>
    ...

    <section>
      <h2>level of heading = section nesting level</h2>
      rest of the content
    </section>

    ...
</body>
```

With very few exceptions, a section should not be used if there is no natural semantic heading for it.

#### Nav
The ``<nav>`` element represents navigation for a document. It is also section containing links to other documents or to parts within the current document. Possible uses include:

* **Main Site/Application Navigation**
* **Table of Contents** – primary skip-to navigation for a view or standalone article
* **Previous/next buttons (or pagination)** - important to the overall structure and hierarchy of the blog/site
* **Search form** -  a search form is hugely important to the navigation of a site, particularly large sites which rely almost solely on their search engine.
* **Breadcrumbs** - although breadcrumbs are not always necessary and can be used when not applicable, on large sites a breadcrumb trail can be an important navigation aid.

#### Figure
The ``<figure>`` element is intended to be used in conjunction with the <figcaption> element to mark up diagrams, illustrations, photos, and code examples (among other things).

You should not constrain using ``<figure>`` elements to images and code examples. Other content suitable for use in ``<figure>`` includes audio, video, charts, poems, or tables of statistics.

It may not always be appropriate to use the ``<figure>`` element, though. For example, a graphic banner should not be marked up with ``<figure>``. Instead, simply use the ``<img />`` element.

```html
<!-- Example: Yep (without figcaption) -->
<figure>
    <img src="/orang-utan.jpg" alt="Baby Orang Utan hanging from a rope">
</figure>

<!-- Example: Yep -->
<figure>
    <img src="/macaque.jpg" alt="Macaque in the trees">
    <figcaption>A cheeky macaque, Lower Kintaganban River, Borneo. Original by <a href="http://www.flickr.com/photos/rclark/">Richard Clark</a></figcaption>
</figure>
```

#### Footer
The ``<footer>`` element represents the "footer" of a document or section of a document. The footer element typically contains metadata about its enclosing section

An important point to note is that you are not restricted to use one ``<footer>`` element per site, you can use multiple footers, each of which will then become the ``<footer>`` for that section of the document. You could therefore have a ``<footer>`` for a ``<section>`` or an ``<article>``.

#### Main
The ``<main>`` element is an exact analogue of ARIA's ``role="main"``, and is designed to show screenreaders and assistive technologies exactly where main content begins, so it can be a target for a "skip links" keyboard command, for example. It could also be used for content syndication (Instapaper-ish things); mobile browsers could zoom in on main when encountering non-responsive websites. It should therefore be used once per page. If you use something like ``<div id="main">`` (or similar, such as ``<div id="content">``), simply replace that with ``<main role="main">``.

#### Other HTML5 Elements
The above elements are more structural, but HTML5 offers several other enhancements, including form fields which help improve usability by increased semantics. For example:

* `<input type="tel">` uses a text box, but renders a phone keypad on a mobile device for faster entry
* `<input type="email">` is similar except it includes the necessary email completion keys (`@` and `.com`)
