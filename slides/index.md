<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-1.png" data-background-size="cover" -->

# ArcGIS API for JavaScript: Web Editing in 2D

#### Heather Gonzago
#### Paul Barker
#### JC Franco

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover" -->

## Agenda

* Web editing
* Editor widget
* WebMap Forms
* Custom workflows
* Q&A

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-2.png" data-background-size="cover" -->

## Data in a feature service

* One or more feature layers
* Editable

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-2.png" data-background-size="cover" -->

## Edit your feature layer

<u>ArcGIS REST API</u>

ArcGIS Online

ArcGIS API for Python

ArcGIS API for JavaScript

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-2.png" data-background-size="cover" -->

## Web editing in the browser

1. What to add: [FeatureTemplates](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html)
2. Geometry: [Sketch](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html)
3. Fields/attributes: [FeatureForm](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html)
4. [FeatureLayer.applyEdits](http://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#applyEdits)
<hr>
5. Editor widget

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png" data-background-size="cover" -->

## Editor widget

[<img src="./images/editor-in-action.gif" height="400" style="margin-left:10px; margin-right: 10px;"/>](../demos/basic-editing/)

✨**New in 4.11**✨

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png" data-background-size="cover" -->

# WebMap Forms
* Consistent editing experience 
* Improve the quality of your data
* Provide logic and structure
* Data driven rules and validation

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png" data-background-size="cover" -->

# Custom Workflows

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png" data-background-size="cover" -->

## Form-based

[<img src="images/ff-in-action.gif" height="400" style="margin-left:10px; margin-right: 10px;"/>](https://developers.arcgis.com/javascript/latest/sample-code/editing-groupedfeatureform/index.html)

☝ `FeatureForm`

---

## [`FeatureForm`](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html)

* Renders input fields from attributes<!-- .element: class="fragment" data-fragment-index="1" -->
* Configurable<!-- .element: class="fragment" data-fragment-index="2" -->
  * Field order
  * Label/description
  * Groups
  * Visibility expression (✨New in 4.11✨)

---

## `FeatureForm` Demo

[<img src="images/ff-demo.png" height="400" style="margin-left:10px; margin-right: 10px;"/>](../../demos/feature-form/index.html)

---

## Advanced `FeatureForm` Demo

[<img src="images/form-based-editing.gif" height="400" style="margin-left:10px; margin-right: 10px;"/>](https://jcfranco.github.io/dev-summit-2021-plenary-demos/form-based-editing/)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover" -->

# Geometry-based

<img src="images/sketch-basic-updating.png" height="400" style="margin-left:10px; margin-right: 10px;"/>

☝ `Sketch`

---

## [`Sketch`](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html)

* Provides ability to manipulate geometries<!-- .element: class="fragment" data-fragment-index="1" -->
* Configurable<!-- .element: class="fragment" data-fragment-index="2" -->
  * Tool options (create and update)
  * Internal view listener for activating update workflow

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png" data-background-size="cover" -->

## Geometry-based Demos

* Sketch with applyEdits
* SketchViewModel with applyEdits
* Sketch with custom tools
* Sketch with custom snapping and validation

<!-- add screenshot for geometry-based demo -->

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png" data-background-size="cover" -->

## Recap

* Web editing
* Editor widgets
* Custom workflows

---

## Additional Resources

- [JavaScript API SDK](https://developers.arcgis.com/javascript/)
- [Arcade - expression language](https://developers.arcgis.com/javascript/latest/guide/arcade/index.html)

---

<!-- SURVEY SLIDE: -->
<section data-markdown data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png">

---

## Questions?

##### For example

> 🤔 Where can I find the slides/source?

👉 [bit.ly/editing2dds21](http://bit.ly/editing2dds21) 👈

---

<section data-markdown data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-5.png">

<img src="../node_modules/esri-reveal.js-templates/img/esri-science-logo-white.png" />
