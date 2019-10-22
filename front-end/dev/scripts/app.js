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
/******/ 	return __webpack_require__(__webpack_require__.s = "../scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/art-template/lib/compile/runtime.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/felix/Desktop/workspace/gp14-15/Node.js/lagou-admin/front-end/node_modules/art-template/lib/compile/runtime.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n/*! art-template@runtime | https://github.com/aui/art-template */\n\nvar globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};\n\nvar runtime = Object.create(globalThis);\nvar ESCAPE_REG = /[\"&'<>]/;\n\n/**\n * 编码模板输出的内容\n * @param  {any}        content\n * @return {string}\n */\nruntime.$escape = function (content) {\n    return xmlEscape(toString(content));\n};\n\n/**\n * 迭代器，支持数组与对象\n * @param {array|Object} data\n * @param {function}     callback\n */\nruntime.$each = function (data, callback) {\n    if (Array.isArray(data)) {\n        for (var i = 0, len = data.length; i < len; i++) {\n            callback(data[i], i);\n        }\n    } else {\n        for (var _i in data) {\n            callback(data[_i], _i);\n        }\n    }\n};\n\n// 将目标转成字符\nfunction toString(value) {\n    if (typeof value !== 'string') {\n        if (value === undefined || value === null) {\n            value = '';\n        } else if (typeof value === 'function') {\n            value = toString(value.call(value));\n        } else {\n            value = JSON.stringify(value);\n        }\n    }\n\n    return value;\n}\n\n// 编码 HTML 内容\nfunction xmlEscape(content) {\n    var html = '' + content;\n    var regexResult = ESCAPE_REG.exec(html);\n    if (!regexResult) {\n        return content;\n    }\n\n    var result = '';\n    var i = void 0,\n        lastIndex = void 0,\n        char = void 0;\n    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n        switch (html.charCodeAt(i)) {\n            case 34:\n                char = '&#34;';\n                break;\n            case 38:\n                char = '&#38;';\n                break;\n            case 39:\n                char = '&#39;';\n                break;\n            case 60:\n                char = '&#60;';\n                break;\n            case 62:\n                char = '&#62;';\n                break;\n            default:\n                continue;\n        }\n\n        if (lastIndex !== i) {\n            result += html.substring(lastIndex, i);\n        }\n\n        lastIndex = i + 1;\n        result += char;\n    }\n\n    if (lastIndex !== i) {\n        return result + html.substring(lastIndex, i);\n    } else {\n        return result;\n    }\n}\n\nmodule.exports = runtime;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:////Users/felix/Desktop/workspace/gp14-15/Node.js/lagou-admin/front-end/node_modules/art-template/lib/compile/runtime.js?");

/***/ }),

/***/ "../../node_modules/art-template/lib/runtime.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/felix/Desktop/workspace/gp14-15/Node.js/lagou-admin/front-end/node_modules/art-template/lib/runtime.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./compile/runtime */ \"../../node_modules/art-template/lib/compile/runtime.js\");\n\n//# sourceURL=webpack:////Users/felix/Desktop/workspace/gp14-15/Node.js/lagou-admin/front-end/node_modules/art-template/lib/runtime.js?");

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "../scripts/app.js":
/*!*************************!*\
  !*** ../scripts/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/layout */ \"../scripts/controllers/layout.js\");\n/* harmony import */ var _controllers_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/users */ \"../scripts/controllers/users.js\");\n\n\n\n//# sourceURL=webpack:///../scripts/app.js?");

/***/ }),

/***/ "../scripts/controllers/layout.js":
/*!****************************************!*\
  !*** ../scripts/controllers/layout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_layout_art__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/layout.art */ \"../scripts/views/layout.art\");\n/* harmony import */ var _views_layout_art__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_layout_art__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Layout {\n  constructor() {\n    this.render()\n  }\n\n  render() {\n    let html = _views_layout_art__WEBPACK_IMPORTED_MODULE_0___default()()\n    $('#root').html(html)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Layout());\n\n//# sourceURL=webpack:///../scripts/controllers/layout.js?");

/***/ }),

/***/ "../scripts/controllers/users.js":
/*!***************************************!*\
  !*** ../scripts/controllers/users.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_nav_art__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/nav.art */ \"../scripts/views/nav.art\");\n/* harmony import */ var _views_nav_art__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_nav_art__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/http */ \"../scripts/models/http.js\");\n\n\n\n\nclass Users {\n  constructor() {\n    this.render()\n  }\n\n  render() {\n    let html = _views_nav_art__WEBPACK_IMPORTED_MODULE_0___default()()\n    $('#nav').html(html)\n\n    // 提交\n    $('#btn-submit').on('click', this.handleSubmit.bind(this))\n  }\n\n  async handleSubmit() {\n    let data = $('.form-horizontal').serialize()\n\n    let result = await _models_http__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get({\n      url: '/api/users/signup',\n      data\n    })\n\n    this.handleSubmitSucc(result)\n  }\n\n  handleSubmitSucc(result) {\n    console.log(result)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Users());\n\n//# sourceURL=webpack:///../scripts/controllers/users.js?");

/***/ }),

/***/ "../scripts/models/http.js":
/*!*********************************!*\
  !*** ../scripts/models/http.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get({url, type='GET', data={}}) {\n    return $.ajax({\n      url: '/api/users/signup',\n      type: 'POST',\n      data,\n      success: (result) => {\n        return result\n      }\n    })\n  }\n});\n\n//# sourceURL=webpack:///../scripts/models/http.js?");

/***/ }),

/***/ "../scripts/views/layout.art":
/*!***********************************!*\
  !*** ../scripts/views/layout.art ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ \"../../node_modules/art-template/lib/runtime.js\");\nmodule.exports = function ($data) {\n    'use strict';\n    $data = $data || {};\n    var $$out = '';\n    $$out += '<!-- Main Header -->\\n<header class=\"main-header\">\\n\\n  <!-- Logo -->\\n  <a href=\"index2.html\" class=\"logo\">\\n    <!-- mini logo for sidebar mini 50x50 pixels -->\\n    <span class=\"logo-mini\"><b>拉勾</b></span>\\n    <!-- logo for regular state and mobile devices -->\\n    <span class=\"logo-lg\"><b>拉勾网</b>管理系统</span>\\n  </a>\\n\\n  <!-- Header Navbar -->\\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\" id=\"nav\"></nav>\\n</header>\\n<!-- Left side column. contains the logo and sidebar -->\\n<aside class=\"main-sidebar\">\\n\\n  <!-- sidebar: style can be found in sidebar.less -->\\n  <section class=\"sidebar\">\\n\\n    <!-- Sidebar user panel (optional) -->\\n    <div class=\"user-panel\">\\n      <div class=\"pull-left image\">\\n        <img ';\n    $$out += 'src=\"/assets/images/user2-160x160.jpg\"';\n    $$out += ' class=\"img-circle\" alt=\"User Image\">\\n      </div>\\n      <div class=\"pull-left info\">\\n        <p>Alexander Pierce</p>\\n        <!-- Status -->\\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> 在线</a>\\n      </div>\\n    </div>\\n\\n    <!-- search form (Optional) -->\\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\\n      <div class=\"input-group\">\\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\\n            <span class=\"input-group-btn\">\\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\\n              </button>\\n            </span>\\n      </div>\\n    </form>\\n    <!-- /.search form -->\\n\\n    <!-- Sidebar Menu -->\\n    <ul class=\"sidebar-menu\">\\n      <li class=\"header\">HEADER</li>\\n      <!-- Optionally, you can add icons to the links -->\\n      <li class=\"active\"><a href=\"#\"><i class=\"fa fa-link\"></i> <span>Link</span></a></li>\\n      <li><a href=\"#\"><i class=\"fa fa-link\"></i> <span>Another Link</span></a></li>\\n      <li class=\"treeview\">\\n        <a href=\"#\"><i class=\"fa fa-link\"></i> <span>多级菜单</span>\\n          <span class=\"pull-right-container\">\\n            <i class=\"fa fa-angle-left pull-right\"></i>\\n          </span>\\n        </a>\\n        <ul class=\"treeview-menu\">\\n          <li><a href=\"#\">Link in level 2</a></li>\\n          <li><a href=\"#\">Link in level 2</a></li>\\n        </ul>\\n      </li>\\n    </ul>\\n    <!-- /.sidebar-menu -->\\n  </section>\\n  <!-- /.sidebar -->\\n</aside>\\n\\n<!-- Content Wrapper. Contains page content -->\\n<div class=\"content-wrapper\">\\n  <!-- Content Header (Page header) -->\\n  <section class=\"content-header\">\\n    <h1>\\n      Page Header\\n      <small>Optional description</small>\\n    </h1>\\n    <ol class=\"breadcrumb\">\\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\\n      <li class=\"active\">Here</li>\\n    </ol>\\n  </section>\\n\\n  <!-- Main content -->\\n  <section class=\"content\">\\n\\n    <!-- Your Page Content Here -->\\n\\n  </section>\\n  <!-- /.content -->\\n</div>\\n<!-- /.content-wrapper -->\\n\\n<!-- Main Footer -->\\n<footer class=\"main-footer\">\\n  <!-- To the right -->\\n  <div class=\"pull-right hidden-xs\">\\n    Anything you want\\n  </div>\\n  <!-- Default to the left -->\\n  <strong>Copyright &copy; 2016 <a href=\"#\">Company</a>.</strong> All rights reserved.\\n</footer>\\n\\n<!-- Control Sidebar -->\\n<aside class=\"control-sidebar control-sidebar-dark\">\\n  <!-- Create the tabs -->\\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\\n    <li class=\"active\"><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\\n  </ul>\\n  <!-- Tab panes -->\\n  <div class=\"tab-content\">\\n    <!-- Home tab content -->\\n    <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\\n      <h3 class=\"control-sidebar-heading\">近期活动</h3>\\n      <ul class=\"control-sidebar-menu\">\\n        <li>\\n          <a href=\"javascript::;\">\\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\\n\\n            <div class=\"menu-info\">\\n              <h4 class=\"control-sidebar-subheading\">Langdon 的生日</h4>\\n\\n              <p>Will be 23 on April 24th</p>\\n            </div>\\n          </a>\\n        </li>\\n      </ul>\\n      <!-- /.control-sidebar-menu -->\\n\\n      <h3 class=\"control-sidebar-heading\"> 任务进度</h3>\\n      <ul class=\"control-sidebar-menu\">\\n        <li>\\n          <a href=\"javascript::;\">\\n            <h4 class=\"control-sidebar-subheading\">\\n                自定义模板设计\\n              <span class=\"pull-right-container\">\\n                <span class=\"label label-danger pull-right\">70%</span>\\n              </span>\\n            </h4>\\n\\n            <div class=\"progress progress-xxs\">\\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\\n            </div>\\n          </a>\\n        </li>\\n      </ul>\\n      <!-- /.control-sidebar-menu -->\\n\\n    </div>\\n    <!-- /.tab-pane -->\\n    <!--  统计信息选项卡内容 -->\\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\"> 统计信息选项卡内容</div>\\n    <!-- /.tab-pane -->\\n    <!-- Settings tab content -->\\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\\n      <form method=\"post\">\\n        <h3 class=\"control-sidebar-heading\">常规设置项</h3>\\n\\n        <div class=\"form-group\">\\n          <label class=\"control-sidebar-subheading\">\\n            报告面板用法\\n            <input type=\"checkbox\" class=\"pull-right\" checked>\\n          </label>\\n\\n          <p>\\n            常规设置选项的相关信息\\n          </p>\\n        </div>\\n        <!-- /.form-group -->\\n      </form>\\n    </div>\\n    <!-- /.tab-pane -->\\n  </div>\\n</aside>\\n<!-- /.control-sidebar -->\\n<!-- Add the sidebar\\'s background. This div must be placed\\n      immediately after the control sidebar -->\\n<div class=\"control-sidebar-bg\"></div>';\n    return $$out;\n};\n\n//# sourceURL=webpack:///../scripts/views/layout.art?");

/***/ }),

/***/ "../scripts/views/nav.art":
/*!********************************!*\
  !*** ../scripts/views/nav.art ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ \"../../node_modules/art-template/lib/runtime.js\");\nmodule.exports = function ($data) {\n    'use strict';\n    $data = $data || {};\n    var $$out = '';\n    $$out += '<!-- Sidebar toggle button-->\\n<a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\\n  <span class=\"sr-only\">切换导航</span>\\n</a>\\n<!-- Navbar Right Menu -->\\n<div class=\"navbar-custom-menu\">\\n  <ul class=\"nav navbar-nav\">\\n    <!-- Messages: style can be found in dropdown.less-->\\n    <li class=\"dropdown messages-menu\">\\n      <!-- Menu toggle button -->\\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\\n        <i class=\"fa fa-envelope-o\"></i>\\n        <span class=\"label label-success\">4</span>\\n      </a>\\n      <ul class=\"dropdown-menu\">\\n        <li class=\"header\">You have 4 messages</li>\\n        <li>\\n          <!-- inner menu: contains the messages -->\\n          <ul class=\"menu\">\\n            <li><!-- start message -->\\n              <a href=\"#\">\\n                <div class=\"pull-left\">\\n                  <!-- User Image -->\\n                  <img ';\n    $$out += 'src=\"/assets/images/user2-160x160.jpg\"';\n    $$out += ' class=\"img-circle\" alt=\"User Image\">\\n                </div>\\n                <!-- Message title and timestamp -->\\n                <h4>\\n                  Support Team\\n                  <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\\n                </h4>\\n                <!-- The message -->\\n                <p>Why not buy a new awesome theme?</p>\\n              </a>\\n            </li>\\n            <!-- end message -->\\n          </ul>\\n          <!-- /.menu -->\\n        </li>\\n        <li class=\"footer\"><a href=\"#\">查看所有消息</a></li>\\n      </ul>\\n    </li>\\n    <!-- /.messages-menu -->\\n\\n    <!-- Notifications Menu -->\\n    <li class=\"dropdown notifications-menu\">\\n      <!-- Menu toggle button -->\\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\\n        <i class=\"fa fa-bell-o\"></i>\\n        <span class=\"label label-warning\">10</span>\\n      </a>\\n      <ul class=\"dropdown-menu\">\\n        <li class=\"header\">You have 10 notifications</li>\\n        <li>\\n          <!-- Inner Menu: contains the notifications -->\\n          <ul class=\"menu\">\\n            <li><!-- start notification -->\\n              <a href=\"#\">\\n                <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\\n              </a>\\n            </li>\\n            <!-- end notification -->\\n          </ul>\\n        </li>\\n        <li class=\"footer\"><a href=\"#\">全部</a></li>\\n      </ul>\\n    </li>\\n    <!-- Tasks Menu -->\\n    <li class=\"dropdown tasks-menu\">\\n      <!-- Menu Toggle Button -->\\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\\n        <i class=\"fa fa-flag-o\"></i>\\n        <span class=\"label label-danger\">9</span>\\n      </a>\\n      <ul class=\"dropdown-menu\">\\n        <li class=\"header\">You have 9 tasks</li>\\n        <li>\\n          <!-- Inner menu: contains the tasks -->\\n          <ul class=\"menu\">\\n            <li><!-- Task item -->\\n              <a href=\"#\">\\n                <!-- Task title and progress text -->\\n                <h3>\\n                  设计按钮\\n                  <small class=\"pull-right\">20%</small>\\n                </h3>\\n                <!-- The progress bar -->\\n                <div class=\"progress xs\">\\n                  <!-- Change the css width attribute to simulate progress -->\\n                  <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\\n                    <span class=\"sr-only\">20% Complete</span>\\n                  </div>\\n                </div>\\n              </a>\\n            </li>\\n            <!-- end task item -->\\n          </ul>\\n        </li>\\n        <li class=\"footer\">\\n          查看所有任务\\n        </li>\\n      </ul>\\n    </li>\\n    <!-- User Account Menu -->\\n    <li class=\"dropdown user user-menu\">\\n      <!-- Menu Toggle Button -->\\n      <a href=\"#\" class=\"dropdown-toggle btn-user\" data-toggle=\"dropdown\">\\n        <!-- The user image in the navbar-->\\n        <img ';\n    $$out += 'src=\"/assets/images/user2-160x160.jpg\"';\n    $$out += ' class=\"user-image\" alt=\"User Image\">\\n        <!-- hidden-xs hides the username on small devices so only the image appears. -->\\n        <span class=\"hidden-xs\" id=\"btn-signin\">登录</span>\\n        <span class=\"hidden-xs\" id=\"btn-signup\">注册</span>\\n      </a>\\n      <ul class=\"dropdown-menu\">\\n        <!-- The user image in the menu -->\\n        <li class=\"user-header\">\\n          <div class=\"box box-info\">\\n            <!-- /.box-header -->\\n            <!-- form start -->\\n            <form class=\"form-horizontal\">\\n              <div class=\"box-body\">\\n                <div class=\"form-group\">\\n                  <label for=\"inputEmail3\" class=\"col-sm-3 control-label\">账号</label>\\n\\n                  <div class=\"col-sm-9\">\\n                    <input type=\"email\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Email\">\\n                  </div>\\n                </div>\\n                <div class=\"form-group\">\\n                  <label for=\"inputPassword3\" class=\"col-sm-3 control-label\">密码</label>\\n\\n                  <div class=\"col-sm-9\">\\n                    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\">\\n                  </div>\\n                </div>\\n                \\n              </div>\\n              \\n            </form>\\n          </div>\\n        </li>\\n        <!--li class=\"user-header\">\\n          <img ';\n    $$out += 'src=\"/assets/images/user2-160x160.jpg\"';\n    $$out += ' class=\"img-circle\" alt=\"User Image\">\\n\\n          <p>\\n            Alexander Pierce - Web Developer\\n            <small>Member since Nov. 2012</small>\\n          </p>\\n        </li-->\\n        <!-- Menu Body -->\\n        <!--li class=\"user-body\">\\n          <div class=\"row\">\\n            <div class=\"col-xs-4 text-center\">\\n              <a href=\"#\">花朵</a>\\n            </div>\\n            <div class=\"col-xs-4 text-center\">\\n              <a href=\"#\">销量</a>\\n            </div>\\n            <div class=\"col-xs-4 text-center\">\\n              <a href=\"#\">好友</a>\\n            </div>\\n          </div-->\\n          <!-- /.row -->\\n        </li>\\n        <!-- Menu Footer-->\\n        <li class=\"user-footer\">\\n          <div class=\"pull-left\">\\n            <a href=\"#\" class=\"btn btn-default btn-flat\">取消</a>\\n          </div>\\n          <div class=\"pull-right\" id=\"btn-submit\">\\n            <a href=\"javascript:;\" class=\"btn btn-primary btn-flat\">确定</a>\\n          </div>\\n        </li>\\n      </ul>\\n    </li>\\n    <!-- Control Sidebar Toggle Button -->\\n    <li>\\n      <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\\n    </li>\\n  </ul>\\n</div>';\n    return $$out;\n};\n\n//# sourceURL=webpack:///../scripts/views/nav.art?");

/***/ })

/******/ });