/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/scripts/index.js":
/*!*************************************!*\
  !*** ./client/src/scripts/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* \n    Need to fsreadJSON data \n    Once data is done, build the html divs with JavaScript \n    Get the server working first, then once this is done, focus \n    on styling and make sure that everything is responsive\n    and function correctly. \n\n    TODO: \n      Reimplement FakeDataToRender in order to receive the entire object\n      and then convert it into a storage. \n\n      Fit guide \n      Care \n      Material\n  */\n\nvar _this = this;\n\nvar fakeObj = [{\n  header: 'Fit Guide',\n  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam. Risus feugiat in ante metus dictum at tempor. Ut lectus arcu bibendum at varius vel pharetra vel. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Sit amet tellus cras adipiscing enim eu turpis egestas. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Vel quam elementum pulvinar etiam non quam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nulla at volutpat diam ut venenatis tellus. Felis eget velit aliquet sagittis id consectetur purus ut. Egestas diam in arcu cursus euismod. Duis at consectetur lorem donec. Malesuada bibendum arcu vitae elementum curabitur vitae. Lectus sit amet est placerat in egestas erat imperdiet.'\n}, {\n  header: 'Care',\n  description: 'Aenean vel felis eu ipsum pharetra finibus. Proin accumsan eleifend dui, in convallis mauris varius sed. Nam luctus justo ut placerat efficitur. Morbi aliquet, lacus a dictum luctus, neque neque fermentum risus, rhoncus accumsan ex sapien ut nisi. Aenean sit amet mattis turpis. Nullam diam erat, sagittis sed laoreet sed, porta a nulla. Mauris luctus aliquet est, sit amet maximus dolor tincidunt vitae. Vestibulum porttitor maximus arcu, et bibendum urna semper id. Integer id sagittis urna. Curabitur nisl sapien, pharetra placerat quam a, tempus dignissim dui. Nunc fermentum dui nec ex blandit, vitae lacinia ante laoreet.'\n}, {\n  header: 'Materials',\n  type: {\n    Cashmere: '50%',\n    Wool: '46%',\n    Modal: '4%'\n  },\n  description: 'Aenean vel felis eu ipsum pharetra finibus. Proin accumsan eleifend dui, in convallis mauris varius sed. Nam luctus justo ut placerat efficitur. Morbi aliquet, lacus a dictum luctus, neque neque fermentum risus, rhoncus accumsan ex sapien ut nisi. Aenean sit amet mattis turpis. Nullam diam erat, sagittis sed laoreet sed, porta a nulla. Mauris luctus aliquet est, sit amet maximus dolor tincidunt vitae. Vestibulum porttitor maximus arcu, et bibendum urna semper id. Integer id sagittis urna. Curabitur nisl sapien, pharetra placerat quam a, tempus dignissim dui. Nunc fermentum dui nec ex blandit, vitae lacinia ante laoreet.'\n}];\n\nvar FakeDataToRender = function FakeDataToRender(obj) {\n  _this.storage = {};\n  var storeData = obj;\n  var newDataObj = {};\n  storeData.forEach(function (data, i, arr) {\n    var description = data.description;\n    var materialType = data.type;\n    newDataObj[data.header] = {\n      description: description,\n      materialType: materialType\n    };\n  });\n  _this.storage = newDataObj;\n};\n\nFakeDataToRender.prototype.renderData = function () {\n  var object = _this.storage;\n  var fit = document.getElementById('fit');\n  var care = document.getElementById('care');\n  var materials = document.getElementById('materials');\n  var materialStats = document.getElementById('material-stats');\n\n  for (var keys in object) {\n    var label = document.createElement('LABEL');\n    var labelDiv = document.createElement('DIV');\n    labelDiv.classList.add('label-title');\n    var paragraph = document.createElement('P');\n    var panel = document.createElement('DIV');\n    panel.classList.add('panel');\n    var description = object[keys].description;\n    var materialObj = object[keys].materialType;\n\n    switch (keys) {\n      case 'Fit Guide':\n        label.innerHTML = keys;\n        paragraph.innerHTML = description;\n        panel.appendChild(paragraph);\n        panel.classList.add('active-others');\n        labelDiv.appendChild(label);\n        labelDiv.classList.add('active');\n        fit.appendChild(labelDiv);\n        fit.appendChild(panel);\n        break;\n\n      case 'Care':\n        label.innerHTML = keys;\n        paragraph.innerHTML = description;\n        panel.appendChild(paragraph);\n        labelDiv.appendChild(label);\n        care.appendChild(labelDiv);\n        care.appendChild(panel);\n        break;\n\n      case 'Materials':\n        label.innerHTML = keys;\n        paragraph.innerHTML = description;\n        labelDiv.appendChild(label);\n\n        for (var _keys in materialObj) {\n          var singleMaterialDiv = document.createElement('DIV');\n          singleMaterialDiv.classList.add('material');\n          var materialP = document.createElement('P');\n          var span = document.createElement('SPAN');\n          materialP.innerHTML = materialObj[_keys];\n          span.innerHTML = _keys;\n          singleMaterialDiv.appendChild(materialP);\n          singleMaterialDiv.appendChild(span);\n          materialStats.appendChild(singleMaterialDiv);\n          panel.appendChild(materialStats);\n        }\n\n        materials.insertBefore(labelDiv, materials.childNodes[0]);\n        panel.appendChild(paragraph);\n        materials.appendChild(panel);\n        break;\n\n      default:\n    }\n  }\n};\n\nvar AnimationAndEventTriggers = function AnimationAndEventTriggers() {\n  _this.storage = [];\n};\n\nAnimationAndEventTriggers.prototype.accordion = function () {\n  var accordion = document.getElementsByClassName('label-title');\n\n  var clickAccordion = function clickAccordion(event) {\n    var panel = document.querySelectorAll('.panel');\n\n    for (var i = 0; i < panel.length; i++) {\n      panel[i].classList.remove('active-mobile');\n      accordion[i].classList.remove('active');\n      panel[i].classList.remove('active-others');\n    }\n\n    var clickedAccordion = event.currentTarget;\n    var panelSibling = clickedAccordion.nextElementSibling;\n    var panelClassList = panelSibling.classList;\n    clickedAccordion.classList.add('active');\n    panelClassList.add('active-mobile');\n    event.preventDefault();\n  };\n\n  for (var i = 0; i < accordion.length; i++) {\n    accordion[i].addEventListener('click', clickAccordion);\n  }\n};\n\nAnimationAndEventTriggers.prototype.tabToggle = function () {\n  var tabs = document.getElementsByClassName('tab');\n\n  var clickTabs = function clickTabs(event) {\n    var panel = document.querySelectorAll('.panel');\n\n    for (var i = 0; i < tabs.length; i++) {\n      tabs[i].classList.remove('active');\n    }\n\n    var clickedTab = event.currentTarget;\n    clickedTab.classList.add('active');\n    event.preventDefault();\n\n    for (i = 0; i < panel.length; i++) {\n      panel[i].classList.remove('active-others');\n      panel[i].classList.remove('active-mobile');\n    }\n\n    var anchorReference = event.target;\n    var activePaneId = anchorReference.getAttribute('href');\n    var activePane = document.querySelector(activePaneId);\n    var activatePanel = activePane.querySelector('.panel');\n    activatePanel.classList.add('active-others');\n  };\n\n  for (var i = 0; i < tabs.length; i++) {\n    tabs[i].addEventListener('click', clickTabs);\n  }\n};\n\nvar newData = new FakeDataToRender(fakeObj);\nnewData.renderData();\nvar animation = new AnimationAndEventTriggers();\nanimation.tabToggle();\nanimation.accordion();\n\n//# sourceURL=webpack:///./client/src/scripts/index.js?");

/***/ })

/******/ });