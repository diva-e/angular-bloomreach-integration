<#include "../include/imports.ftl">

<h1>This is the contact app module!</h1>
<app-contact-loader></app-contact-loader>

<@hst.link var="inlinejs" path="/js/angular/inline.bundle.js" />
<script type="text/javascript" src="${inlinejs}"></script>
<@hst.link var="polyfillsjs" path="/js/angular/polyfills.bundle.js" />
<script type="text/javascript" src="${polyfillsjs}"></script>
<@hst.link var="vendorjs" path="/js/angular/vendor.bundle.js" />
<script type="text/javascript" src="${vendorjs}"></script>
<@hst.link var="stylesjs" path="/js/angular/styles.bundle.js" />
<script type="text/javascript" src="${stylesjs}"></script>
<@hst.link var="mainjs" path="/js/angular/main.bundle.js" />
<script type="text/javascript" src="${mainjs}"></script>
