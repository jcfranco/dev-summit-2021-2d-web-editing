<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-1.png" data-background-size="cover" -->

# ArcGIS API for JavaScript: Web Editing in 2D

#### Heather Gonzago
#### Paul Barker
#### JC Franco

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover" -->

## Agenda

* Web Editing
* Editor Widget
* Smart Forms
* Customizing the Editor
* Q&A

---

## Web Editing

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover" -->

---

## Data in a feature service

* One or more feature layers
* Editable

---

## Edit your feature layer

<u>ArcGIS REST API</u>

ArcGIS Online

ArcGIS API for Python

ArcGIS API for JavaScript

---

## Web editing in the browser

1. What to add: [FeatureTemplates](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html)
2. Geometry: [SketchViewModel](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch-SketchViewModel.html)
3. Fields/attributes: [FeatureForm](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html)
3. Attachments: [Attachments](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Attachments.html)
4. [FeatureLayer.applyEdits](http://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#applyEdits)
<hr>
5. Editor widget

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png" data-background-size="cover" -->

## Demo

[<img src="./images/editor-in-action.gif" height="400" style="margin-left:10px; margin-right: 10px;"/>](../demos/basic-editing/)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover" -->

## Smart Forms

---

# Smart Forms

* Consistent editing experience
* Improve the quality of your data
* Provide logic and structure
* Data driven rules and validation

---

## Demo

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png" data-background-size="cover" -->

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover" -->

## Customizing the Editor

---

## Editor API

[ArcGIS SDK - Editor](https://next.sites.afd.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html) 

---

## Customization options

1. <!-- .element: class="fragment" data-fragment-index="0" --> Control edit options per layer
    - <!-- .element: class="fragment" data-fragment-index="0" --> toggle whether add/update/delete/attachments are allowed
1. <!-- .element: class="fragment" data-fragment-index="1" --> Define form templates locally 
1. <!-- .element: class="fragment" data-fragment-index="2" --> Enable snapping
1. <!-- .element: class="fragment" data-fragment-index="3" --> Use properties from supporting widgets to tweak experience
1. <!-- .element: class="fragment" data-fragment-index="4" --> Start editor workflows at different steps
1. <!-- .element: class="fragment" data-fragment-index="5" --> Watch viewModel properties to react to workflow steps

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-4.png" data-background-size="cover" -->

## Demo

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover" -->

## Recap

* Web editing overview 
* OOB Editor features  
* Smart Forms in the Editor 
* Customized Editor 

---

## Additional Resources

- [JavaScript API SDK](https://developers.arcgis.com/javascript/)
- [Arcade - expression language](https://developers.arcgis.com/javascript/latest/guide/arcade/index.html)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-3.png" data-background-size="cover" -->


# Questions? 🤔

> Where can I find the slides/source?

[bit.ly/editing2dds21](http://bit.ly/editing2dds21)

> Where can I submit a question?

[bit.ly/askjsapi](http://bit.ly/askjsapi)

---

<section data-markdown data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-5.png">

Please provide your feedback for this session by clicking on the session survey link directly below the video

<!-- .element: style="margin: 0 20%;" -->

---

<section data-markdown data-background="../node_modules/esri-reveal.js-templates/img/2021/dev-summit/bg-5.png">

<img src="../node_modules/esri-reveal.js-templates/img/esri-science-logo-white.png" />
