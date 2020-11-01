webpackJsonp([1],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header_header__ = __webpack_require__(107);


var App = function App(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_Header_header__["a" /* Header */], null), props.children);
};

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_FooterContainer__ = __webpack_require__(108);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {};
        return _this;
    }
    //<div className="fixed-top" style={{ width: "100 % ", float: "left", padding: "30px 0", overflow: "hidden", backgroundColor: "#000000" }} >


    _createClass(Header, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "eheader" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "/home", className: "glow pull-left" }, "Elicit"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "mainListDiv" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/home", className: "btn" }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/podcast", className: "btn" }, "Podcast"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/about", className: "btn " }, "About"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/contactus", className: "btn" }, "Contact Us"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Footer_FooterContainer__["a" /* FooterContainer */], null));
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PrivatePolicy_PrivatePolicy__ = __webpack_require__(49);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FooterContainer = function (_React$Component) {
    _inherits(FooterContainer, _React$Component);

    function FooterContainer() {
        _classCallCheck(this, FooterContainer);

        return _possibleConstructorReturn(this, (FooterContainer.__proto__ || Object.getPrototypeOf(FooterContainer)).apply(this, arguments));
    }

    _createClass(FooterContainer, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fixed-bottom" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("footer", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ep-footerbar" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "ep-copyright", style: { color: "white" } }, "Elicit \xA92020  |  All Rights Reserved"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("nav", { className: "footer-nav pull-right" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__PrivatePolicy_PrivatePolicy__["a" /* PrivatePolicy */], null)))))));
        }
    }]);

    return FooterContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPrivatePolicyList */
/* unused harmony export postPrivatePolicyList */
/* unused harmony export updatePrivatePolicyList */
/* unused harmony export deletePrivatePolicyList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePolicyApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(14);

var baseURL = "/";
var getPrivatePolicyList = function getPrivatePolicyList() {
    var getURL = baseURL + "api/privatepolicy";
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(getURL, "GET", null);
};
var postPrivatePolicyList = function postPrivatePolicyList(data) {
    var postURL = "/api/privatepolicy";
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(postURL, "POST", data);
};
var updatePrivatePolicyList = function updatePrivatePolicyList(data) {
    var putURL = baseURL + "api/privatepolicy/" + data.id;
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(putURL, "PUT", data);
};
var deletePrivatePolicyList = function deletePrivatePolicyList(data) {
    var deleteURL = baseURL + "api/privatepolicy/" + data;
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(deleteURL, "DELETE", data);
};
var PrivatePolicyApi = {
    getPrivatePolicyList: getPrivatePolicyList, postPrivatePolicyList: postPrivatePolicyList, updatePrivatePolicyList: updatePrivatePolicyList, deletePrivatePolicyList: deletePrivatePolicyList
};

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePolicyModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var PrivatePolicyModal = function (_React$Component) {
    _inherits(PrivatePolicyModal, _React$Component);

    function PrivatePolicyModal(props) {
        _classCallCheck(this, PrivatePolicyModal);

        return _possibleConstructorReturn(this, (PrivatePolicyModal.__proto__ || Object.getPrototypeOf(PrivatePolicyModal)).call(this, props));
    }

    _createClass(PrivatePolicyModal, [{
        key: 'render',
        value: function render() {
            if (!this.props.showModal) return null;
            var backdropStyle = {
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                padding: 50,
                zIndex: 999,
                overflow: 'auto'
            };
            var modalStyle = {
                backgroundColor: '#fff',
                borderRadius: 5,
                maxWidth: 500,
                maxHeight: 500,
                margin: '0 auto',
                padding: 30,
                zIndex: 1001
            };
            var modalBody = {
                backgroundColor: '#fff',
                borderRadius: 5,
                maxWidth: 500,
                maxHeight: 200,
                margin: '0 auto',
                padding: 20,
                zIndex: 1001,
                /*scrollbar*/overflowY: "scroll"
            };
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "backdrop", style: backdropStyle }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: modalStyle }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, "Private Policies: ")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: modalBody }, this.props.children), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "footer" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn btn-danger", onClick: this.props.onClose }, "Close"))));
        }
    }]);

    return PrivatePolicyModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePolicyList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var PrivatePolicyList = function PrivatePolicyList(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" }, props.headerColumns != null ? props.headerColumns.map(function (itm, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: i, className: itm.columnStyle }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, itm.columnName));
    }) : ""), props.dataItems.map(buildRow(props)));
};
var buildRow = function buildRow(props) {
    return function (itm, ndx) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row", key: ndx }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-12" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("u", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, itm.privatePolicyName, ": "))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-12" }, itm.privatePolicyDetails), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null));
    };
};
var buttonClick = function buttonClick(props, id, action) {
    return function (e) {
        props.onButtonClick(id, action);
    };
};

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Podcast_index__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AboutUs_AboutUsPage__ = __webpack_require__(139);



//import { ContactUs } from "../ContactUs/ContactUs";
var HomePage = function HomePage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "home hero-image" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "btn warning contactus", href: "mailto:Manny@elicit.us" }, "Contact Us")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__AboutUs_AboutUsPage__["a" /* AboutUsPage */], null)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Podcast_index__["a" /* Podcast */], null)));
};
//<div className="container">
//    <iframe src='https://s3-us-west-1.amazonaws.com/elicit.us/halfThought1.mp4'
//        frameBorder='0'
//        //allow='autoplay; encrypted-media'
//        allowFullScreen
//        title='video'
//    />
//</div>

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Podcast__ = __webpack_require__(56);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Podcast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PodcastForm__ = __webpack_require__(133);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PodcastList__ = __webpack_require__(138);
/* unused harmony namespace reexport */




/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPodcastList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postPodcastList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updatePodcastList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deletePodcastList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(14);

var baseURL = "/";
var getPodcastList = function getPodcastList() {
    var getURL = baseURL + "api/podcast";
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(getURL, "GET", null);
};
var postPodcastList = function postPodcastList(data) {
    var postURL = "/api/podcast";
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(postURL, "POST", data);
};
var updatePodcastList = function updatePodcastList(data) {
    var putURL = baseURL + "api/podcast/" + data.id;
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(putURL, "PUT", data);
};
var deletePodcastList = function deletePodcastList(data) {
    var deleteURL = baseURL + "api/podcast/" + data;
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(deleteURL, "DELETE", data);
};

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_object_assign__);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var Iframe = function (_a) {
    var url = _a.url, allowFullScreen = _a.allowFullScreen, position = _a.position, display = _a.display, height = _a.height, width = _a.width, overflow = _a.overflow, styles = _a.styles, onLoad = _a.onLoad, onMouseOver = _a.onMouseOver, onMouseOut = _a.onMouseOut, scrolling = _a.scrolling, id = _a.id, frameBorder = _a.frameBorder, ariaHidden = _a.ariaHidden, sandbox = _a.sandbox, allow = _a.allow, className = _a.className, title = _a.title, ariaLabel = _a.ariaLabel, ariaLabelledby = _a.ariaLabelledby, name = _a.name, target = _a.target, loading = _a.loading, importance = _a.importance, referrerpolicy = _a.referrerpolicy, allowpaymentrequest = _a.allowpaymentrequest, src = _a.src;
    var defaultProps = __WEBPACK_IMPORTED_MODULE_1_object_assign___default()({
        src: src || url,
        target: target || null,
        style: {
            position: position || null,
            display: display || "block",
            overflow: overflow || null
        },
        scrolling: scrolling || null,
        allowpaymentrequest: allowpaymentrequest || null,
        importance: importance || null,
        sandbox: sandbox || null,
        loading: loading || null,
        styles: styles || null,
        name: name || null,
        className: className || null,
        referrerpolicy: referrerpolicy || null,
        title: title || null,
        allow: allow || null,
        id: id || null,
        "aria-labelledby": ariaLabelledby || null,
        "aria-hidden": ariaHidden || null,
        "aria-label": ariaLabel || null,
        width: width || null,
        height: height || null,
        onLoad: onLoad || null,
        onMouseOver: onMouseOver || null,
        onMouseOut: onMouseOut || null
    });
    var props = Object.create(null);
    for (var _i = 0, _b = Object.keys(defaultProps); _i < _b.length; _i++) {
        var prop = _b[_i];
        if (defaultProps[prop] != null) {
            props[prop] = defaultProps[prop];
        }
    }
    for (var _c = 0, _d = Object.keys(props.style); _c < _d.length; _c++) {
        var i = _d[_c];
        if (props.style[i] == null) {
            delete props.style[i];
        }
    }
    if (allowFullScreen) {
        if ("allow" in props) {
            var currentAllow = props.allow.replace("fullscreen", "");
            props.allow = ("fullscreen " + currentAllow.trim()).trim();
        }
        else {
            props.allow = "fullscreen";
        }
    }
    if (frameBorder >= 0) {
        if (!props.style.hasOwnProperty("border")) {
            props.style.border = frameBorder;
        }
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", __assign({}, props));
};
/* harmony default export */ __webpack_exports__["a"] = (Iframe);


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PodcastForm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_form_index__ = __webpack_require__(57);


var PodcastForm = function PodcastForm(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-single-component", style: { color: "white" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-formarea" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-component-header grey-bg" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Podcasts")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-component-body" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-helper-block" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("fieldset", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["b" /* Input */], { label: "Name", name: "podcastName", value: props.podcastList.podcastName, placeholder: "Enter Name", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["c" /* Textarea */], { label: "Details", name: "podcastDetails", value: props.podcastList.podcastDetails, placeholder: "Enter Your Details", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["b" /* Input */], { label: "Upload Video", name: "podcastVideoUpload", value: props.podcastList.podcastVideoUpload, placeholder: "Upload Video", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["b" /* Input */], { label: "Upload Picture", name: "podcastPictureUpload", value: props.podcastList.podcastPictureUpload, placeholder: "Upload Picture", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["a" /* Button */], { className: "an-btn an-btn-primary", label: "Submit", onClick: props.onSubmit }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["a" /* Button */], { className: "an-btn an-btn-primary", label: "Update", onClick: props.onUpdate })))))));
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Button = function Button(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { style: { color: "black" }, type: "button", className: props.className, onClick: props.onClick }, props.label);
};

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Password */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};
var Password = function Password(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "field" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "password", name: props.name, className: "form-control", placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props) })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "help-block" }, props.error));
};

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DropDownList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};
var DropDownList = function DropDownList(props) {
    var options = props.options.map(function (option) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: option.key, value: option.key }, option.value);
    });
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "field" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { value: props.selectedValue, onChange: onChangeInput(props), id: props.name, className: "form-control" }, options)));
};

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Textarea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Textarea = function Textarea(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "field" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("textarea", { required: props.required, name: props.name, className: props.className ? props.className + "form-control" : "form-control", placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props), rows: props.rows, style: props.style })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "help-block" }, props.error));
};
var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};
var onBlur = function onBlur(props) {
    return function (e) {
        if (props.onBlur) {
            props.onBlur(e.target.name, e.target.value);
        }
    };
};

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PodcastList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var PodcastList = function PodcastList(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-single-component with-shadow", style: { color: "white" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-component-header" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "List:")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-component-body" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-helper-block" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "scrollable" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { style: { background: "white", color: "black" }, className: "table table-striped" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, props.headerColumns != null ? props.headerColumns.map(function (itm, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", { key: i, className: itm.columnStyle }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, itm.columnName));
    }) : "")), props.dataItems.map(buildRow(props))))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ps-scrollbar-y-rail" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ps-scrollbar-y" })))));
};
var buildRow = function buildRow(props) {
    return function (itm, ndx) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", { key: ndx }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", { className: "basis-20" }, itm.podcastName), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", { className: "basis-20" }, itm.podcastDetails), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", { className: "basis-20" }, itm.podcastVideoUpload), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", { className: "basis-20" }, itm.podcastPictureUpload), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", { className: "basis-20" }, itm.podcastUploadDate), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", { className: "basis-10" }, props.showEditButton ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: "an-btn an-btn-primary", onClick: buttonClick(props, itm.id, "edit") }, "Edit") : "", props.showDeleteButton ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: "an-btn btn-danger", onClick: buttonClick(props, itm.id, "delete") }, "Delete") : "")));
    };
};
var buttonClick = function buttonClick(props, id, action) {
    return function (e) {
        props.onButtonClick(id, action);
    };
};

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_aboutus_AboutUsApi__ = __webpack_require__(140);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AboutUsPage = function (_React$Component) {
    _inherits(AboutUsPage, _React$Component);

    function AboutUsPage(props) {
        _classCallCheck(this, AboutUsPage);

        var _this = _possibleConstructorReturn(this, (AboutUsPage.__proto__ || Object.getPrototypeOf(AboutUsPage)).call(this, props));

        _this.state = {
            aboutUsPageState: {
                id: 0,
                aboutUsSummary: "",
                aboutUsPicture: "",
                aboutName: "",
                aboutTitle: "",
                aboutNickname: "",
                aboutBio: "",
                aboutInstagram: "",
                aboutFacebook: "",
                aboutLinkedIn: "",
                aboutEmailContact: ""
            },
            aboutUsListItems: []
        };
        _this.loadData = _this.loadData.bind(_this);
        return _this;
    }

    _createClass(AboutUsPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: "loadData",
        value: function loadData() {
            var _this2 = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__api_aboutus_AboutUsApi__["a" /* getAboutUs */])().then(function (response) {
                _this2.setState({ aboutUsListItems: response.items });
                console.log(response);
            }, function (err) {}).catch(function (err) {
                console.log(err);
            });
        }
        //<AboutUsForm
        //    aboutUs={this.state.aboutUsListItems}ww
        ///>

    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { textAlign: "center", color: "#f8f8ff", width: "100%", padding: "30px 30px 0px 30px", backgroundColor: "#000000" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, " Elicit is dedicated to the creation & maintaining of community connections between groups and individuals whose lives are enmeshed in the Music, Art, and Entertainment Industry. Our priority is to facilitate the support of bands, groups, and people involved in order to spread their creative work and personal message.     We work for the Aspiring and Inspiring."));
        }
    }]);

    return AboutUsPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiExecute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var apiExecute = function apiExecute(url, action, data) {
    switch (action) {
        case "GET":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "POST":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url, data, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "PUT":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put(url, data, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "DELETE":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(url, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
    }
};

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAboutUs; });
/* unused harmony export postAboutUs */
/* unused harmony export updateAboutUs */
/* unused harmony export deleteAboutUs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(14);

var baseURL = "/";
var getAboutUs = function getAboutUs() {
    var getURL = baseURL + "api/aboutus";
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(getURL, "GET", null);
};
var postAboutUs = function postAboutUs(data) {
    var postURL = "/api/aboutus";
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(postURL, "POST", data);
};
var updateAboutUs = function updateAboutUs(data) {
    var putURL = baseURL + "api/aboutus/" + data.id;
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(putURL, "PUT", data);
};
var deleteAboutUs = function deleteAboutUs(data) {
    var deleteURL = baseURL + "api/aboutus/" + data;
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(deleteURL, "DELETE", data);
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_contactus_ContactUsApi__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_components_form_index__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_form_input__ = __webpack_require__(58);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


//import { IContactUs } from "../Interfaces/ContactUs/IContactUs";



var ContactUs = function (_React$Component) {
    _inherits(ContactUs, _React$Component);

    function ContactUs(props) {
        _classCallCheck(this, ContactUs);

        var _this = _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).call(this, props));

        _this.state = {
            contactUs: {
                name: "",
                email: "",
                topic: "",
                message: ""
            }
        };
        //bind
        _this.onFieldChange = _this.onFieldChange.bind(_this);
        _this.sendEmailButtonClick = _this.sendEmailButtonClick.bind(_this);
        return _this;
    }

    _createClass(ContactUs, [{
        key: "onFieldChange",
        value: function onFieldChange(fieldName, fieldValue) {
            var nextState = Object.assign({}, this.state, { contactUs: Object.assign({}, this.state.contactUs, _defineProperty({}, fieldName, fieldValue)) });
            this.setState(nextState); //, () => { this.validateField(fieldName, fieldValue) });
        }
    }, {
        key: "sendEmailButtonClick",
        value: function sendEmailButtonClick() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__api_contactus_ContactUsApi__["a" /* ContactUsApi */].sendEmailContactUs(this.state.contactUs).then(function (response) {
                _this2.setState(Object.assign({}, _this2.state, { contactUs: {
                        name: "",
                        email: "",
                        topic: "",
                        message: ""
                    } }));
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-6 col-sm-12 col-xs-12" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { action: "#", className: "tg-commentform help-form", id: "tg-commentform" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("fieldset", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tg-section-heading" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Contact Elicit")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", { style: { color: "red" }, className: "contactus" }, "NOTE:"), " Please use this ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "contactus", href: "mailto:Manny@elicit.us" }, "Contact Us HERE"), ". We'd be stoked to hear from you!"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_components_form_input__["a" /* Input */], { type: "text", label: "Name", name: "name", value: this.state.contactUs.name, placeholder: "Name", onChange: this.onFieldChange }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_components_form_input__["a" /* Input */], { type: "text", label: "Topic", name: "topic", value: this.state.contactUs.topic, placeholder: "Subject", onChange: this.onFieldChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_components_form_input__["a" /* Input */], { label: "Email", name: "email", value: this.state.contactUs.email, placeholder: "Email", onChange: this.onFieldChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_components_form_index__["c" /* Textarea */], { label: "Message", name: "message", value: this.state.contactUs.message, placeholder: "Enter Your Message", onChange: this.onFieldChange }, "rows=", 8)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: "contactus", onClick: this.sendEmailButtonClick }, "Send")))))));
        }
    }]);

    return ContactUs;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sendEmailContactUs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiExecute__ = __webpack_require__(14);

var sendEmailContactUs = function sendEmailContactUs(data) {
    var sendEmailContactUsURL = "/api/contactUs";
    return Object(__WEBPACK_IMPORTED_MODULE_0__apiExecute__["a" /* apiExecute */])(sendEmailContactUsURL, "POST", data);
};
var ContactUsApi = {
    sendEmailContactUs: sendEmailContactUs
};

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastHostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_podcast_PodcastHostApi__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PodcastHostForm__ = __webpack_require__(145);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PodcastHostPage = function (_React$Component) {
    _inherits(PodcastHostPage, _React$Component);

    function PodcastHostPage(props) {
        _classCallCheck(this, PodcastHostPage);

        var _this = _possibleConstructorReturn(this, (PodcastHostPage.__proto__ || Object.getPrototypeOf(PodcastHostPage)).call(this, props));

        _this.state = {
            //podcastHostPageState: {
            //    id: 0,
            //    podcastHostPicture: "",
            //    podcastHostName: "",
            //    podcastHostTitle: "",
            //    podcastHostNickname: "",
            //    podcastHostFavoriteBands: "",
            //    podcastHostBio: "",
            //    podcastHostInstagram: "",
            //    podcastHostFacebook: "",
            //    podcastHostLinkedIn: "",
            //    podcastHostEmailContact: "",
            //    displayOrder: 0
            //},
            podcastHostListItems: []
        };
        _this.loadData = _this.loadData.bind(_this);
        return _this;
    }

    _createClass(PodcastHostPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: "loadData",
        value: function loadData() {
            var _this2 = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__api_podcast_PodcastHostApi__["a" /* getPodcastHost */])().then(function (response) {
                _this2.setState({ podcastHostListItems: response.items });
                console.log(response);
            }, function (err) {}).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { textAlign: "center", color: "#f8f8ff", width: "100%", padding: "100px 0 0 100px", backgroundColor: "#000000" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__PodcastHostForm__["a" /* PodcastHostForm */], { podcastHost: this.state.podcastHostListItems }));
        }
    }]);

    return PodcastHostPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPodcastHost; });
/* unused harmony export postPodcastHost */
/* unused harmony export updatePodcastHost */
/* unused harmony export deletePodcastHost */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(14);

var baseURL = "/";
var getPodcastHost = function getPodcastHost() {
    var getURL = baseURL + "api/podcasthost";
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(getURL, "GET", null);
};
var postPodcastHost = function postPodcastHost(data) {
    var postURL = "/api/podcasthost";
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(postURL, "POST", data);
};
var updatePodcastHost = function updatePodcastHost(data) {
    var putURL = baseURL + "api/podcasthost/" + data.id;
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(putURL, "PUT", data);
};
var deletePodcastHost = function deletePodcastHost(data) {
    var deleteURL = baseURL + "api/podcasthost/" + data;
    return Object(__WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__["a" /* apiExecute */])(deleteURL, "DELETE", data);
};

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PodcastHostForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var PodcastHostForm = function PodcastHostForm(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, " MEET THE TEAM "), props.podcastHost.map(function (podcastHost, i) {
        if (podcastHost.id > 1) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "meetthesegents", key: i }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: podcastHost.podcastHostPicture, style: { height: 200, width: 100 } }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, podcastHost.podcastHostName), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, podcastHost.podcastHostNickname), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "mailto: {podcastHost.PodcastHostEmailContact}" }, podcastHost.podcastHostEmailContact), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, podcastHost.podcastHostBio), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "social-media" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "fa fa-instagram", target: "_blank", href: podcastHost.podcastHostInstagram }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "fa fa-facebook", target: "_blank", href: podcastHost.podcastHostFacebook }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "fa fa-linkedin", target: "_blank", href: podcastHost.podcastHostLinkedIn })));
        }
    }));
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePolicy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_PrivatePolicy_PrivatePolicyApi__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PrivatePolicyModal__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PrivatePolicyList__ = __webpack_require__(128);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PrivatePolicy = function (_React$Component) {
    _inherits(PrivatePolicy, _React$Component);

    function PrivatePolicy(props) {
        _classCallCheck(this, PrivatePolicy);

        var _this = _possibleConstructorReturn(this, (PrivatePolicy.__proto__ || Object.getPrototypeOf(PrivatePolicy)).call(this, props));

        _this.state = {
            showModal: false,
            privatePoliciesDisplayItems: []
        };
        _this.modalToggle = _this.modalToggle.bind(_this);
        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }

    _createClass(PrivatePolicy, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadDataList();
        }
    }, {
        key: "modalToggle",
        value: function modalToggle() {
            this.setState({ showModal: !this.state.showModal });
        }
    }, {
        key: "onClose",
        value: function onClose() {
            this.setState({ showModal: !this.state.showModal });
        }
    }, {
        key: "loadDataList",
        value: function loadDataList() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__api_PrivatePolicy_PrivatePolicyApi__["a" /* PrivatePolicyApi */].getPrivatePolicyList().then(function (response) {
                _this2.setState({ privatePoliciesDisplayItems: response.items });
                console.log(response);
            }).catch(function (err) {
                console.log("error!", err);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: this.modalToggle, className: "privacy" }, "Privacy"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__PrivatePolicyModal__["a" /* PrivatePolicyModal */], { showModal: this.state.showModal, onClose: this.onClose }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__PrivatePolicyList__["a" /* PrivatePolicyList */], { dataItems: this.state.privatePoliciesDisplayItems, onButtonClick: this.loadDataList })));
        }
    }]);

    return PrivatePolicy;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Podcast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_api_podcast_PodcastApi__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_iframe__ = __webpack_require__(132);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Podcast = function (_React$Component) {
    _inherits(Podcast, _React$Component);

    function Podcast(props) {
        _classCallCheck(this, Podcast);

        var _this = _possibleConstructorReturn(this, (Podcast.__proto__ || Object.getPrototypeOf(Podcast)).call(this, props));

        _this.state = {
            podcastList: {
                id: 0,
                podcastName: "",
                podcastDetails: "",
                podcastUploadDate: new Date(),
                podcastVideoUpload: "",
                podcastPictureUpload: ""
            },
            podcastListItems: []
        };
        //bind here please
        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.onUpdate = _this.onUpdate.bind(_this);
        _this.onDeleteClick = _this.onDeleteClick.bind(_this);
        _this.onFieldChange = _this.onFieldChange.bind(_this);
        _this.loadDataList = _this.loadDataList.bind(_this);
        _this.listButtonClick = _this.listButtonClick.bind(_this);
        _this.clearStateAndForm = _this.clearStateAndForm.bind(_this);
        _this.componentDidMount = _this.componentDidMount.bind(_this);
        return _this;
    }

    _createClass(Podcast, [{
        key: "onFieldChange",
        value: function onFieldChange(fieldName, fieldValue) {
            var nextState = Object.assign({}, this.state, { podcastList: Object.assign({}, this.state.podcastList, _defineProperty({}, fieldName, fieldValue)) });
            this.setState(nextState);
        }
    }, {
        key: "listButtonClick",
        value: function listButtonClick(id, action) {
            var ndx = this.state.podcastListItems.findIndex(function (x) {
                return x.id === id;
            });
            if (action === "edit") {
                if (ndx >= 0) {
                    this.setState({ podcastList: this.state.podcastListItems[ndx] });
                }
            } else if (action === "delete") {
                this.state.podcastListItems.splice(ndx, 1);
                var itms = [].concat(_toConsumableArray(this.state.podcastListItems));
                this.onDeleteClick(id);
                this.loadDataList();
            }
        }
    }, {
        key: "clearStateAndForm",
        value: function clearStateAndForm() {
            this.setState({
                podcastList: {
                    id: 0,
                    podcastName: "",
                    podcastDetails: "",
                    podcastUploadDate: new Date(),
                    podcastVideoUpload: "",
                    podcastPictureUpload: ""
                },
                podcastListItems: []
            });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit() {
            var _this2 = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__src_api_podcast_PodcastApi__["c" /* postPodcastList */])(this.state.podcastList).then(function (response) {
                console.log("POST");
                _this2.clearStateAndForm();
                _this2.loadDataList();
                console.log(response);
            }, function (err) {}).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: "onUpdate",
        value: function onUpdate() {
            var _this3 = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__src_api_podcast_PodcastApi__["d" /* updatePodcastList */])(this.state.podcastList).then(function (response) {
                console.log("PUT");
                _this3.clearStateAndForm();
                _this3.loadDataList();
            }, function (err) {}).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: "onDeleteClick",
        value: function onDeleteClick(id) {
            var _this4 = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__src_api_podcast_PodcastApi__["a" /* deletePodcastList */])(id).then(function (response) {
                _this4.loadDataList();
            }, function (err) {}).catch(function (err) {});
        }
    }, {
        key: "loadDataList",
        value: function loadDataList() {
            var _this5 = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__src_api_podcast_PodcastApi__["b" /* getPodcastList */])().then(function (response) {
                _this5.setState({ podcastListItems: response.items });
                console.log(response);
            }, function (err) {}).catch(function (err) {});
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadDataList();
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "podcast" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Podcast"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_iframe__["a" /* default */], { url: "https://oembed.libsyn.com/embed?item_id=16631408", src: "//html5-player.libsyn.com/embed/episode/id/16631408/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/f30c0c/", width: "75%", height: "150px", id: "punchBoxProduction", display: "inline", className: "betoPodcast" }));
            //return (
            //    <div className="container">
            //        <PodcastForm
            //            podcastList={this.state.podcastList}
            //            onChange={this.onFieldChange}
            //            onSubmit={this.onSubmit}
            //            onUpdate={this.onUpdate}
            //        />
            //        <PodcastList
            //            dataItems={this.state.podcastListItems}
            //            onButtonClick={this.listButtonClick}
            //            showDeleteButton={true}
            //            showEditButton={true}
            //            headerColumns={[
            //                { columnName: "Name", columnStyle: "basis-20" },
            //                { columnName: "Details", columnStyle: "basis-20" },
            //                { columnName: "Upload Video", columnStyle: "basis-20" },
            //                { columnName: "Upload Picture", columnStyle: "basis-20" },
            //                { columnName: "Upload Date", columnStyle: "basis-20" }
            //            ]}
            //        />
            //        <div>
            //        </div>
            //    </div>
            //)
        }
    }]);

    return Podcast;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(134);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(58);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(135);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdownlist__ = __webpack_require__(136);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textarea__ = __webpack_require__(137);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__textarea__["a"]; });






/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Input = function Input(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "field" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { name: props.name, type: props.type, className: "form-control", placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props) })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "help-block" }, props.error));
};
var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};
var onKeyPress = function onKeyPress(props) {
    return function (e) {
        if (props.onEnter) {
            if (e.key === 'Enter') {
                props.onEnter();
            }
        }
    };
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_router__ = __webpack_require__(71);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__src_router__["a" /* AppRouter */], null), document.getElementById("root"));

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_PrivatePolicy_PrivatePolicy__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContactUs_ContactUs__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Podcast_PodcastHostPage__ = __webpack_require__(143);








var AppRouter = function AppRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_2__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/home", component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/podcast", component: __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__["a" /* Podcast */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_7__components_Podcast_PodcastHostPage__["a" /* PodcastHostPage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/contactus", component: __WEBPACK_IMPORTED_MODULE_6__components_ContactUs_ContactUs__["a" /* ContactUs */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/privatepolicy", component: __WEBPACK_IMPORTED_MODULE_5__components_PrivatePolicy_PrivatePolicy__["a" /* PrivatePolicy */] })));
};

/***/ })

},[60]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeU1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUxpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGkudHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaWZyYW1lL2Rpc3QvZXMvaWZyYW1lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9idXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vcGFzc3dvcmQudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdExpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL2FwaUV4ZWN1dGUudHN4Iiwid2VicGFjazovLy8uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdFVzL0NvbnRhY3RVcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL2NvbnRhY3R1cy9Db250YWN0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0SG9zdFBhZ2UudHN4Iiwid2VicGFjazovLy8uL2FwaS9wb2RjYXN0L1BvZGNhc3RIb3N0QXBpLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdEhvc3RGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3QudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXQudHN4Iiwid2VicGFjazovLy8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9yb3V0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU0sTUFBb0MsU0FBcEMsR0FBb0MsQ0FBQyxLQUFELEVBQVU7QUFFdkQsV0FDSSxrRUFDSSxxREFBQyx5RUFBRCxFQUFPLElBQVAsQ0FESixFQUVLLE1BQU0sUUFGWCxDQURKO0FBUUgsQ0FWTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUNBO0FBQ0E7QUFFTyxJQUFNLE1BQWI7QUFBQTs7QUFFSSxvQkFBWSxLQUFaLEVBQWlCO0FBQUE7O0FBQUEsb0hBQ1AsS0FETzs7QUFFYixjQUFLLEtBQUwsR0FBYSxFQUFiO0FBRmE7QUFHaEI7QUFFRDs7O0FBUEo7QUFBQTtBQUFBLGlDQVFpQjtBQUNULG1CQUNJLHFE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QUNKO0FBQ0osS0FOa0I7QUFBQSxDQUFuQixDOzs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxrREFDSSxxREFBQyw4REFBRCxFQUFVLElBQVYsQ0FESixFQUVJLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUZKLEU7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRU8sSUFBTSxZQUEwQyxTQUExQyxTQUEwQyxHQUFLO0FBQ3hELFdBQ0kscURBQUMsb0RBQUQsRUFBTyxFQUFDLFNBQVMsNERBQVYsRUFBUCxFQUNJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLEdBQU4sRUFBVSxXQUFXLGlEQUFyQixFQUFOLEVBQ0kscURBQUMsd0RBQUQsRUFBVyxFQUFDLFdBQVcsdUVBQVosRUFBWCxDQURKLEVBRUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssT0FBTixFQUFjLFdBQVcsdUVBQXpCLEVBQU4sQ0FGSixFQUdJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLFVBQU4sRUFBaUIsV0FBVyw0RUFBNUIsRUFBTixDQUhKLEVBSUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssUUFBTixFQUFlLFdBQVcsNEZBQTFCLEVBQU4sQ0FKSixFQUtJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLFlBQU4sRUFBbUIsV0FBVyxrRkFBOUIsRUFBTixDQUxKLEVBTUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssZ0JBQU4sRUFBdUIsV0FBVyw4RkFBbEMsRUFBTixDQU5KLENBREosQ0FESjtBQWVILENBaEJNLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT57XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vPGRpdiBjbGFzc05hbWU9XCJmaXhlZC10b3BcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAgJSBcIiwgZmxvYXQ6IFwibGVmdFwiLCBwYWRkaW5nOiBcIjMwcHggMFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIiB9fSA+XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ob21lXCIgY2xhc3NOYW1lPVwiZ2xvdyBwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGljaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5MaXN0RGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidG5cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wb2RjYXN0XCIgY2xhc3NOYW1lPVwiYnRuXCI+UG9kY2FzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJidG4gXCI+QWJvdXQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3R1c1wiIGNsYXNzTmFtZT1cImJ0blwiPkNvbnRhY3QgVXM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJDb250YWluZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjsgXHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3kgfSBmcm9tIFwiLi4vUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXAtZm9vdGVyYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVwLWNvcHlyaWdodFwiIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+RWxpY2l0IMKpMjAyMCAgfCAgQWxsIFJpZ2h0cyBSZXNlcnZlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmb290ZXItbmF2IHB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48UHJpdmF0ZVBvbGljeSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckNvbnRhaW5lci50c3giLCJpbXBvcnQgeyBhcGlFeGVjdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGkvYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJUHJpdmF0ZVBvbGljeVBhZ2UgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzL3ByaXZhdGVwb2xpY3kvSVByaXZhdGVQb2xpY3lQYWdlXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCIvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJpdmF0ZVBvbGljeUxpc3QgPSAoKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGdldFVSTCA9IGAke2Jhc2VVUkx9YXBpL3ByaXZhdGVwb2xpY3lgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoZ2V0VVJMLCBcIkdFVFwiLCBudWxsKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFByaXZhdGVQb2xpY3lMaXN0ID0gKGRhdGE6IElQcml2YXRlUG9saWN5UGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwb3N0VVJMID0gYC9hcGkvcHJpdmF0ZXBvbGljeWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwb3N0VVJMLCBcIlBPU1RcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByaXZhdGVQb2xpY3lMaXN0ID0gKGRhdGE6IElQcml2YXRlUG9saWN5UGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9wcml2YXRlcG9saWN5LyR7ZGF0YS5pZH1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocHV0VVJMLCBcIlBVVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUHJpdmF0ZVBvbGljeUxpc3QgPSAoZGF0YTogbnVtYmVyKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGRlbGV0ZVVSTCA9IGAke2Jhc2VVUkx9YXBpL3ByaXZhdGVwb2xpY3kvJHtkYXRhfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShkZWxldGVVUkwsIFwiREVMRVRFXCIsIGRhdGEpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJpdmF0ZVBvbGljeUFwaSA9IHtcclxuICAgIGdldFByaXZhdGVQb2xpY3lMaXN0LCBwb3N0UHJpdmF0ZVBvbGljeUxpc3QsIHVwZGF0ZVByaXZhdGVQb2xpY3lMaXN0LCBkZWxldGVQcml2YXRlUG9saWN5TGlzdFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUFwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByaXZhdGVQb2xpY3lNb2RhbCB7XHJcbiAgICBzaG93TW9kYWw6IGJvb2xlYW47XHJcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZVBvbGljeU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcml2YXRlUG9saWN5TW9kYWwsIHt9PntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJpdmF0ZVBvbGljeU1vZGFsKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNob3dNb2RhbClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgYmFja2Ryb3BTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjMpJyxcclxuICAgICAgICAgICAgcGFkZGluZzogNTAsXHJcbiAgICAgICAgICAgIHpJbmRleDogOTk5LFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBtb2RhbFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogNTAwLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICAgICAgcGFkZGluZzogMzAsXHJcbiAgICAgICAgICAgIHpJbmRleDogMTAwMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbW9kYWxCb2R5OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogNTAwLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDIwMCxcclxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICAgICAgcGFkZGluZzogMjAsXHJcbiAgICAgICAgICAgIHpJbmRleDogMTAwMSxcclxuLypzY3JvbGxiYXIqL292ZXJmbG93WTogXCJzY3JvbGxcIiBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tkcm9wXCIgc3R5bGU9e2JhY2tkcm9wU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bW9kYWxTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPjxzdHJvbmc+UHJpdmF0ZSBQb2xpY2llczogPC9zdHJvbmc+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5TW9kYWwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElQcml2YXRlUG9saWN5LCBJR3JpZFZpZXcgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pbmRleFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcml2YXRlUG9saWN5TGlzdDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4+ID0gKHByb3BzOiBJR3JpZFZpZXc8SVByaXZhdGVQb2xpY3k+KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5oZWFkZXJDb2x1bW5zICE9IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGVhZGVyQ29sdW1ucy5tYXAoKGl0bSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17aXRtLmNvbHVtblN0eWxlfT48c3Ryb25nPntpdG0uY29sdW1uTmFtZX08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKFwiXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cHJvcHMuZGF0YUl0ZW1zLm1hcChidWlsZFJvdyhwcm9wcykpfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkUm93ID0gKHByb3BzOiBJR3JpZFZpZXc8SVByaXZhdGVQb2xpY3k+KSA9PiAoaXRtOiBJUHJpdmF0ZVBvbGljeSwgbmR4OiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e25keH0+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48dT48c3Ryb25nPntpdG0ucHJpdmF0ZVBvbGljeU5hbWV9OiA8L3N0cm9uZz48L3U+PC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj57aXRtLnByaXZhdGVQb2xpY3lEZXRhaWxzfTwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5cclxuY29uc3QgYnV0dG9uQ2xpY2sgPSAocHJvcHM6IElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4sIGlkOiBudW1iZXIsIGFjdGlvbjogc3RyaW5nKSA9PiAoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkJ1dHRvbkNsaWNrKGlkLCBhY3Rpb24pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lMaXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQb2RjYXN0IH0gZnJvbSBcIi4uL1BvZGNhc3QvaW5kZXhcIjtcclxuaW1wb3J0IHsgQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vQWJvdXRVcy9BYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBHcmF5QmFubmVyIH0gZnJvbSBcIi4uL0Jhbm5lcnMvR3JleUJhbm5lclwiO1xyXG5pbXBvcnQgeyBBYm91dFVzRm9ybSB9IGZyb20gXCIuLi9BYm91dFVzL0Fib3V0VXNGb3JtXCI7XHJcbi8vaW1wb3J0IHsgQ29udGFjdFVzIH0gZnJvbSBcIi4uL0NvbnRhY3RVcy9Db250YWN0VXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lUGFnZTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lIGhlcm8taW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biB3YXJuaW5nIGNvbnRhY3R1c1wiIGhyZWY9XCJtYWlsdG86TWFubnlAZWxpY2l0LnVzXCI+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QWJvdXRVc1BhZ2UgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQb2RjYXN0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbi8vPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy8gICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vZWxpY2l0LnVzL2hhbGZUaG91Z2h0MS5tcDQnXHJcbi8vICAgICAgICBmcmFtZUJvcmRlcj0nMCdcclxuLy8gICAgICAgIC8vYWxsb3c9J2F1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWEnXHJcbi8vICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuLy8gICAgICAgIHRpdGxlPSd2aWRlbydcclxuLy8gICAgLz5cclxuLy88L2Rpdj4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ib21lL0hvbWUudHN4IiwiZXhwb3J0ICogZnJvbSBcIi4vUG9kY2FzdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9Qb2RjYXN0Rm9ybVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9Qb2RjYXN0TGlzdFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9pbmRleC50c3giLCJpbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcbmltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9hcGlFeGVjdXRlXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCIvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9kY2FzdExpc3QgPSAoKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGdldFVSTCA9IGAke2Jhc2VVUkx9YXBpL3BvZGNhc3RgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoZ2V0VVJMLCBcIkdFVFwiLCBudWxsKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFBvZGNhc3RMaXN0ID0gKGRhdGE6IElQb2RjYXN0TGlzdCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwb3N0VVJMID0gYC9hcGkvcG9kY2FzdGA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwb3N0VVJMLCBcIlBPU1RcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBvZGNhc3RMaXN0ID0gKGRhdGE6IElQb2RjYXN0TGlzdCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9wb2RjYXN0LyR7ZGF0YS5pZH1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocHV0VVJMLCBcIlBVVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9kY2FzdExpc3QgPSAoZGF0YTogbnVtYmVyKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGRlbGV0ZVVSTCA9IGAke2Jhc2VVUkx9YXBpL3BvZGNhc3QvJHtkYXRhfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShkZWxldGVVUkwsIFwiREVMRVRFXCIsIGRhdGEpXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGkudHN4IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBvYmplY3RBc3NpZ24gZnJvbSBcIm9iamVjdC1hc3NpZ25cIjtcbnZhciBJZnJhbWUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdXJsID0gX2EudXJsLCBhbGxvd0Z1bGxTY3JlZW4gPSBfYS5hbGxvd0Z1bGxTY3JlZW4sIHBvc2l0aW9uID0gX2EucG9zaXRpb24sIGRpc3BsYXkgPSBfYS5kaXNwbGF5LCBoZWlnaHQgPSBfYS5oZWlnaHQsIHdpZHRoID0gX2Eud2lkdGgsIG92ZXJmbG93ID0gX2Eub3ZlcmZsb3csIHN0eWxlcyA9IF9hLnN0eWxlcywgb25Mb2FkID0gX2Eub25Mb2FkLCBvbk1vdXNlT3ZlciA9IF9hLm9uTW91c2VPdmVyLCBvbk1vdXNlT3V0ID0gX2Eub25Nb3VzZU91dCwgc2Nyb2xsaW5nID0gX2Euc2Nyb2xsaW5nLCBpZCA9IF9hLmlkLCBmcmFtZUJvcmRlciA9IF9hLmZyYW1lQm9yZGVyLCBhcmlhSGlkZGVuID0gX2EuYXJpYUhpZGRlbiwgc2FuZGJveCA9IF9hLnNhbmRib3gsIGFsbG93ID0gX2EuYWxsb3csIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgdGl0bGUgPSBfYS50aXRsZSwgYXJpYUxhYmVsID0gX2EuYXJpYUxhYmVsLCBhcmlhTGFiZWxsZWRieSA9IF9hLmFyaWFMYWJlbGxlZGJ5LCBuYW1lID0gX2EubmFtZSwgdGFyZ2V0ID0gX2EudGFyZ2V0LCBsb2FkaW5nID0gX2EubG9hZGluZywgaW1wb3J0YW5jZSA9IF9hLmltcG9ydGFuY2UsIHJlZmVycmVycG9saWN5ID0gX2EucmVmZXJyZXJwb2xpY3ksIGFsbG93cGF5bWVudHJlcXVlc3QgPSBfYS5hbGxvd3BheW1lbnRyZXF1ZXN0LCBzcmMgPSBfYS5zcmM7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IG9iamVjdEFzc2lnbih7XG4gICAgICAgIHNyYzogc3JjIHx8IHVybCxcbiAgICAgICAgdGFyZ2V0OiB0YXJnZXQgfHwgbnVsbCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbiB8fCBudWxsLFxuICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSB8fCBcImJsb2NrXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogb3ZlcmZsb3cgfHwgbnVsbFxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxpbmc6IHNjcm9sbGluZyB8fCBudWxsLFxuICAgICAgICBhbGxvd3BheW1lbnRyZXF1ZXN0OiBhbGxvd3BheW1lbnRyZXF1ZXN0IHx8IG51bGwsXG4gICAgICAgIGltcG9ydGFuY2U6IGltcG9ydGFuY2UgfHwgbnVsbCxcbiAgICAgICAgc2FuZGJveDogc2FuZGJveCB8fCBudWxsLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8IG51bGwsXG4gICAgICAgIHN0eWxlczogc3R5bGVzIHx8IG51bGwsXG4gICAgICAgIG5hbWU6IG5hbWUgfHwgbnVsbCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgfHwgbnVsbCxcbiAgICAgICAgcmVmZXJyZXJwb2xpY3k6IHJlZmVycmVycG9saWN5IHx8IG51bGwsXG4gICAgICAgIHRpdGxlOiB0aXRsZSB8fCBudWxsLFxuICAgICAgICBhbGxvdzogYWxsb3cgfHwgbnVsbCxcbiAgICAgICAgaWQ6IGlkIHx8IG51bGwsXG4gICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGFyaWFMYWJlbGxlZGJ5IHx8IG51bGwsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogYXJpYUhpZGRlbiB8fCBudWxsLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsIHx8IG51bGwsXG4gICAgICAgIHdpZHRoOiB3aWR0aCB8fCBudWxsLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCB8fCBudWxsLFxuICAgICAgICBvbkxvYWQ6IG9uTG9hZCB8fCBudWxsLFxuICAgICAgICBvbk1vdXNlT3Zlcjogb25Nb3VzZU92ZXIgfHwgbnVsbCxcbiAgICAgICAgb25Nb3VzZU91dDogb25Nb3VzZU91dCB8fCBudWxsXG4gICAgfSk7XG4gICAgdmFyIHByb3BzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9iID0gT2JqZWN0LmtleXMoZGVmYXVsdFByb3BzKTsgX2kgPCBfYi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHByb3AgPSBfYltfaV07XG4gICAgICAgIGlmIChkZWZhdWx0UHJvcHNbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSBkZWZhdWx0UHJvcHNbcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2MgPSAwLCBfZCA9IE9iamVjdC5rZXlzKHByb3BzLnN0eWxlKTsgX2MgPCBfZC5sZW5ndGg7IF9jKyspIHtcbiAgICAgICAgdmFyIGkgPSBfZFtfY107XG4gICAgICAgIGlmIChwcm9wcy5zdHlsZVtpXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJvcHMuc3R5bGVbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFsbG93RnVsbFNjcmVlbikge1xuICAgICAgICBpZiAoXCJhbGxvd1wiIGluIHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEFsbG93ID0gcHJvcHMuYWxsb3cucmVwbGFjZShcImZ1bGxzY3JlZW5cIiwgXCJcIik7XG4gICAgICAgICAgICBwcm9wcy5hbGxvdyA9IChcImZ1bGxzY3JlZW4gXCIgKyBjdXJyZW50QWxsb3cudHJpbSgpKS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9wcy5hbGxvdyA9IFwiZnVsbHNjcmVlblwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmcmFtZUJvcmRlciA+PSAwKSB7XG4gICAgICAgIGlmICghcHJvcHMuc3R5bGUuaGFzT3duUHJvcGVydHkoXCJib3JkZXJcIikpIHtcbiAgICAgICAgICAgIHByb3BzLnN0eWxlLmJvcmRlciA9IGZyYW1lQm9yZGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIsIF9fYXNzaWduKHt9LCBwcm9wcykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IElmcmFtZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1pZnJhbWUvZGlzdC9lcy9pZnJhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVBvZGNhc3RMaXN0IH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW50ZXJmYWNlcy9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQb2RjYXN0TGlzdEZvcm0ge1xyXG4gICAgcG9kY2FzdExpc3Q6IElQb2RjYXN0TGlzdDtcclxuICAgIG9uQ2hhbmdlOiAoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBvblN1Ym1pdDogKCkgPT4gdm9pZDtcclxuICAgIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQb2RjYXN0Rm9ybTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElQb2RjYXN0TGlzdEZvcm0+ID0gKHByb3BzOiBJUG9kY2FzdExpc3RGb3JtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tc2luZ2xlLWNvbXBvbmVudFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tZm9ybWFyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tY29tcG9uZW50LWhlYWRlciBncmV5LWJnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlBvZGNhc3RzPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1jb21wb25lbnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4taGVscGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvZGNhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wb2RjYXN0TGlzdC5wb2RjYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9kY2FzdERldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3REZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIERldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXBsb2FkIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0VmlkZW9VcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3RWaWRlb1VwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXBsb2FkIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwbG9hZCBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0UGljdHVyZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucG9kY2FzdExpc3QucG9kY2FzdFBpY3R1cmVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVwbG9hZCBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RGb3JtLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBmb3JtYXRXcmFwcGVyQ2xhc3MgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICByZXR1cm4gcHJvcHMuZXJyb3IgPyBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOiB3cmFwcGVyQ2xhc3M7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPntwcm9wcy5lcnJvcn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9wYXNzd29yZC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUtleVZhbHVlLCBJRHJvcERvd25MaXN0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJRHJvcERvd25MaXN0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSURyb3BEb3duTGlzdFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wRG93bkxpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJRHJvcERvd25MaXN0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLmtleX0gdmFsdWU9e29wdGlvbi5rZXl9PntvcHRpb24udmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cHJvcHMuc2VsZWN0ZWRWYWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfSBpZD17cHJvcHMubmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+e29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJVGV4dGFyZWFQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dGFyZWE6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJVGV4dGFyZWFQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZSA/IChwcm9wcy5jbGFzc05hbWUgKyBcImZvcm0tY29udHJvbFwiKSA6IFwiZm9ybS1jb250cm9sXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dChwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17cHJvcHMucm93c31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+e3Byb3BzLmVycm9yfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJVGV4dGFyZWFQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJVGV4dGFyZWFQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IG9uQmx1ciA9IChwcm9wczogSVRleHRhcmVhUHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKHByb3BzLm9uQmx1cikge1xyXG4gICAgICAgIHByb3BzLm9uQmx1cihlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb2RjYXN0TGlzdEdyaWRWaWV3T3B0aW9uczxUPiB7XHJcbiAgICBkYXRhSXRlbXM6IFRbXTtcclxuICAgIHNob3dFZGl0QnV0dG9uOiBib29sZWFuO1xyXG4gICAgc2hvd0RlbGV0ZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIG9uQnV0dG9uQ2xpY2s6IChpZDogbnVtYmVyLCBhY3Rpb246IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGhlYWRlckNvbHVtbnM/OiBJSGVhZGVyQ29sdW1uW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlckNvbHVtbiB7XHJcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmc7XHJcbiAgICBjb2x1bW5TdHlsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUG9kY2FzdExpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0Pj4gPSAocHJvcHM6IElQb2RjYXN0TGlzdEdyaWRWaWV3T3B0aW9uczxJUG9kY2FzdExpc3Q+KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tc2luZ2xlLWNvbXBvbmVudCB3aXRoLXNoYWRvd1wiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+TGlzdDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1oZWxwZXItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBjb2xvcjogXCJibGFja1wiIH19ICBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaGVhZGVyQ29sdW1ucyAhPSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhlYWRlckNvbHVtbnMubWFwKChpdG0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0aCBrZXk9e2l9IGNsYXNzTmFtZT17aXRtLmNvbHVtblN0eWxlfT48c3Ryb25nPntpdG0uY29sdW1uTmFtZX08L3N0cm9uZz48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhSXRlbXMubWFwKGJ1aWxkUm93KHByb3BzKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXNjcm9sbGJhci15LXJhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zY3JvbGxiYXIteVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkUm93ID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PikgPT4gKGl0bTogSVBvZGNhc3RMaXN0LCBuZHg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGJvZHkga2V5PXtuZHh9PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3REZXRhaWxzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3RWaWRlb1VwbG9hZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0UGljdHVyZVVwbG9hZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0VXBsb2FkRGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dFZGl0QnV0dG9uID8gKDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFuLWJ0biBhbi1idG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2J1dHRvbkNsaWNrKHByb3BzLCBpdG0uaWQsIFwiZWRpdFwiKX0+RWRpdDwvYnV0dG9uPikgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEZWxldGVCdXR0b24gPyAoPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYW4tYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXtidXR0b25DbGljayhwcm9wcywgaXRtLmlkLCBcImRlbGV0ZVwiKX0+RGVsZXRlPC9idXR0b24+KSA6IChcIlwiKX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbkNsaWNrID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PiwgaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpID0+IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQnV0dG9uQ2xpY2soaWQsIGFjdGlvbik7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RMaXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBJQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9hYm91dHVzL0lBYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRBYm91dFVzIH0gZnJvbSBcIi4uLy4uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGlcIjtcclxuaW1wb3J0IHsgQWJvdXRVc0Zvcm0gfSBmcm9tIFwiLi9BYm91dFVzRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQWJvdXRVc1N0YXRlIHtcclxuICAgIGFib3V0VXNQYWdlU3RhdGU6IElBYm91dFVzUGFnZTtcclxuICAgIGFib3V0VXNMaXN0SXRlbXM6IElBYm91dFVzUGFnZVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRVc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElBYm91dFVzU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFib3V0VXNQYWdlU3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRVc1N1bW1hcnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dFVzUGljdHVyZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0VGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dE5pY2tuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRCaW86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dEluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0RmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dExpbmtlZEluOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRFbWFpbENvbnRhY3Q6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFib3V0VXNMaXN0SXRlbXM6IFtdLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSA9IHRoaXMubG9hZERhdGEuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcclxuICAgICAgICBnZXRBYm91dFVzKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWJvdXRVc0xpc3RJdGVtczogcmVzcG9uc2UuaXRlbXMgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLzxBYm91dFVzRm9ybVxyXG4gICAgICAgICAgICAgICAgLy8gICAgYWJvdXRVcz17dGhpcy5zdGF0ZS5hYm91dFVzTGlzdEl0ZW1zfXd3XHJcbiAgICAgICAgICAgICAgICAvLy8+XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCIjZjhmOGZmXCIsIHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZzogXCIzMHB4IDMwcHggMHB4IDMwcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIiB9fT5cclxuICAgICAgICAgICAgICAgPHA+IEVsaWNpdCBpcyBkZWRpY2F0ZWQgdG8gdGhlIGNyZWF0aW9uICYgbWFpbnRhaW5pbmcgb2YgY29tbXVuaXR5IGNvbm5lY3Rpb25zIGJldHdlZW4gZ3JvdXBzIGFuZCBpbmRpdmlkdWFscyB3aG9zZSBsaXZlcyBhcmUgZW5tZXNoZWQgaW4gdGhlIE11c2ljLCBBcnQsIGFuZCBFbnRlcnRhaW5tZW50IEluZHVzdHJ5LiBPdXIgcHJpb3JpdHkgaXMgdG8gZmFjaWxpdGF0ZSB0aGUgc3VwcG9ydCBvZiBiYW5kcywgZ3JvdXBzLCBhbmQgcGVvcGxlIGludm9sdmVkIGluIG9yZGVyIHRvIHNwcmVhZCB0aGVpciBjcmVhdGl2ZSB3b3JrIGFuZCBwZXJzb25hbCBtZXNzYWdlLiAgICAgV2Ugd29yayBmb3IgdGhlIEFzcGlyaW5nIGFuZCBJbnNwaXJpbmcuXHJcbiAgICA8L3A+XHJcbiAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BYm91dFVzL0Fib3V0VXNQYWdlLnRzeCIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlFeGVjdXRlID0gKHVybDogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wb3N0KHVybCwgZGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucHV0KHVybCwgZGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvYXBpRXhlY3V0ZS50c3giLCJpbXBvcnQgeyBhcGlFeGVjdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGkvYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzL2Fib3V0dXMvSUFib3V0VXNQYWdlXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCIvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWJvdXRVcyA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvYWJvdXR1c2A7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0QWJvdXRVcyA9IChkYXRhOiBJQWJvdXRVc1BhZ2UpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgcG9zdFVSTCA9IGAvYXBpL2Fib3V0dXNgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocG9zdFVSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVBYm91dFVzID0gKGRhdGE6IElBYm91dFVzUGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9hYm91dHVzLyR7ZGF0YS5pZH1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocHV0VVJMLCBcIlBVVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQWJvdXRVcyA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvYWJvdXR1cy8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2Fib3V0dXMvQWJvdXRVc0FwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgeyBJQ29udGFjdFVzIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvQ29udGFjdFVzL0lDb250YWN0VXNcIjtcclxuaW1wb3J0IHsgQ29udGFjdFVzQXBpLCBzZW5kRW1haWxDb250YWN0VXMgfSBmcm9tIFwiLi4vLi4vYXBpL2NvbnRhY3R1cy9Db250YWN0VXNBcGlcIjtcclxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2lucHV0XCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbi8vaW1wb3J0IHsgQ29udGFjdFVzRm9ybSB9IGZyb20gXCIuL0NvbnRhY3RVc0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RVcyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgdG9waWM6IHN0cmluZztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0VXNTdGF0ZSB7XHJcbiAgICBjb250YWN0VXM6IElDb250YWN0VXM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0VXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElDb250YWN0VXNTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29udGFjdFVzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzogXCJcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9iaW5kXHJcbiAgICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlID0gdGhpcy5vbkZpZWxkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZW5kRW1haWxCdXR0b25DbGljayA9IHRoaXMuc2VuZEVtYWlsQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRmllbGRDaGFuZ2UoZmllbGROYW1lOiBzdHJpbmcsIGZpZWxkVmFsdWU6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIGNvbnRhY3RVczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0VXMsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogZmllbGRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTsgLy8sICgpID0+IHsgdGhpcy52YWxpZGF0ZUZpZWxkKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRW1haWxCdXR0b25DbGljaygpIHtcclxuXHJcbiAgICAgICAgQ29udGFjdFVzQXBpLnNlbmRFbWFpbENvbnRhY3RVcyh0aGlzLnN0YXRlLmNvbnRhY3RVcylcclxuICAgICAgIFxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RVczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzc05hbWU9XCJ0Zy1jb21tZW50Zm9ybSBoZWxwLWZvcm1cIiBpZD1cInRnLWNvbW1lbnRmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRnLXNlY3Rpb24taGVhZGluZ1wiPjxoMj5Db250YWN0IEVsaWNpdDwvaDI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZyBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fSBjbGFzc05hbWU9XCJjb250YWN0dXNcIj5OT1RFOjwvc3Ryb25nPiBQbGVhc2UgdXNlIHRoaXMgPGEgY2xhc3NOYW1lPVwiY29udGFjdHVzXCIgaHJlZj1cIm1haWx0bzpNYW5ueUBlbGljaXQudXNcIj5Db250YWN0IFVzIEhFUkU8L2E+LiBXZSdkIGJlIHN0b2tlZCB0byBoZWFyIGZyb20geW91ITwvcD5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3RVcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkQ2hhbmdlfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvcGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLnRvcGljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkQ2hhbmdlfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3RVcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3RVcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs4fTwvVGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3R1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VuZEVtYWlsQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db250YWN0VXMvQ29udGFjdFVzLnRzeCIsImltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJQ29udGFjdFVzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFjdFVzL0NvbnRhY3RVc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbENvbnRhY3RVcyA9IChkYXRhOiBJQ29udGFjdFVzKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHNlbmRFbWFpbENvbnRhY3RVc1VSTCA9IGAvYXBpL2NvbnRhY3RVc2A7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShzZW5kRW1haWxDb250YWN0VXNVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdFVzQXBpID0ge1xyXG4gICAgc2VuZEVtYWlsQ29udGFjdFVzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvY29udGFjdHVzL0NvbnRhY3RVc0FwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuaW1wb3J0IHsgSVBvZGNhc3RIb3N0UGFnZSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL1BvZGNhc3QvSVBvZGNhc3RIb3N0UGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRQb2RjYXN0SG9zdCB9IGZyb20gXCIuLi8uLi9hcGkvcG9kY2FzdC9Qb2RjYXN0SG9zdEFwaVwiO1xyXG5pbXBvcnQgeyBQb2RjYXN0SG9zdEZvcm0gfSBmcm9tIFwiLi9Qb2RjYXN0SG9zdEZvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvZGNhc3RIb3N0U3RhdGUge1xyXG4gICAgLy9wb2RjYXN0SG9zdFBhZ2VTdGF0ZTogSVBvZGNhc3RIb3N0UGFnZTtcclxuICAgIHBvZGNhc3RIb3N0TGlzdEl0ZW1zOiBJUG9kY2FzdEhvc3RQYWdlW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2RjYXN0SG9zdFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElQb2RjYXN0SG9zdFN0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAvL3BvZGNhc3RIb3N0UGFnZVN0YXRlOiB7XHJcbiAgICAgICAgICAgIC8vICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAvLyAgICBwb2RjYXN0SG9zdFBpY3R1cmU6IFwiXCIsXHJcbiAgICAgICAgICAgIC8vICAgIHBvZGNhc3RIb3N0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgLy8gICAgcG9kY2FzdEhvc3RUaXRsZTogXCJcIixcclxuICAgICAgICAgICAgLy8gICAgcG9kY2FzdEhvc3ROaWNrbmFtZTogXCJcIixcclxuICAgICAgICAgICAgLy8gICAgcG9kY2FzdEhvc3RGYXZvcml0ZUJhbmRzOiBcIlwiLFxyXG4gICAgICAgICAgICAvLyAgICBwb2RjYXN0SG9zdEJpbzogXCJcIixcclxuICAgICAgICAgICAgLy8gICAgcG9kY2FzdEhvc3RJbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgICAgICAgIC8vICAgIHBvZGNhc3RIb3N0RmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICAgIC8vICAgIHBvZGNhc3RIb3N0TGlua2VkSW46IFwiXCIsXHJcbiAgICAgICAgICAgIC8vICAgIHBvZGNhc3RIb3N0RW1haWxDb250YWN0OiBcIlwiLFxyXG4gICAgICAgICAgICAvLyAgICBkaXNwbGF5T3JkZXI6IDBcclxuICAgICAgICAgICAgLy99LFxyXG4gICAgICAgICAgICBwb2RjYXN0SG9zdExpc3RJdGVtczogW10sXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWREYXRhID0gdGhpcy5sb2FkRGF0YS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcclxuICAgICAgICBnZXRQb2RjYXN0SG9zdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvZGNhc3RIb3N0TGlzdEl0ZW1zOiByZXNwb25zZS5pdGVtcyB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiI2Y4ZjhmZlwiLCB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiMTAwcHggMCAwIDEwMHB4XCIsIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIgfX0+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UG9kY2FzdEhvc3RGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgcG9kY2FzdEhvc3Q9e3RoaXMuc3RhdGUucG9kY2FzdEhvc3RMaXN0SXRlbXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RIb3N0UGFnZS50c3giLCJpbXBvcnQgeyBhcGlFeGVjdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGkvYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJUG9kY2FzdEhvc3RQYWdlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlcy9Qb2RjYXN0L0lQb2RjYXN0SG9zdFBhZ2VcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcIi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb2RjYXN0SG9zdCA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvcG9kY2FzdGhvc3RgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoZ2V0VVJMLCBcIkdFVFwiLCBudWxsKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFBvZGNhc3RIb3N0ID0gKGRhdGE6IElQb2RjYXN0SG9zdFBhZ2UpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgcG9zdFVSTCA9IGAvYXBpL3BvZGNhc3Rob3N0YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHBvc3RVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUG9kY2FzdEhvc3QgPSAoZGF0YTogSVBvZGNhc3RIb3N0UGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9wb2RjYXN0aG9zdC8ke2RhdGEuaWR9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHB1dFVSTCwgXCJQVVRcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVBvZGNhc3RIb3N0ID0gKGRhdGE6IG51bWJlcik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBkZWxldGVVUkwgPSBgJHtiYXNlVVJMfWFwaS9wb2RjYXN0aG9zdC8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9wb2RjYXN0L1BvZGNhc3RIb3N0QXBpLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBJUG9kY2FzdEhvc3RQYWdlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvUG9kY2FzdC9JUG9kY2FzdEhvc3RQYWdlXCI7XHJcblxyXG5pbnRlcmZhY2UgSVBvZGNhc3RIb3N0SW5kZXhTaW5nbGUge1xyXG4gICAgcG9kY2FzdEhvc3Q6IElQb2RjYXN0SG9zdFBhZ2VbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBvZGNhc3RIb3N0Rm9ybTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElQb2RjYXN0SG9zdEluZGV4U2luZ2xlPiA9IChwcm9wczogSVBvZGNhc3RIb3N0SW5kZXhTaW5nbGUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxPiBNRUVUIFRIRSBURUFNIDwvaDE+XHJcbiAgICAgICAgICAgIHtwcm9wcy5wb2RjYXN0SG9zdC5tYXAoZnVuY3Rpb24gKHBvZGNhc3RIb3N0LCBpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9kY2FzdEhvc3QuaWQgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWV0dGhlc2VnZW50c1wiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9kY2FzdEhvc3QucG9kY2FzdEhvc3RQaWN0dXJlfSBzdHlsZT17eyBoZWlnaHQ6IDIwMCwgd2lkdGg6IDEwMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntwb2RjYXN0SG9zdC5wb2RjYXN0SG9zdE5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cG9kY2FzdEhvc3QucG9kY2FzdEhvc3ROaWNrbmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoge3BvZGNhc3RIb3N0LlBvZGNhc3RIb3N0RW1haWxDb250YWN0fVwiPntwb2RjYXN0SG9zdC5wb2RjYXN0SG9zdEVtYWlsQ29udGFjdH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9kY2FzdEhvc3QucG9kY2FzdEhvc3RCaW99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtwb2RjYXN0SG9zdC5wb2RjYXN0SG9zdEluc3RhZ3JhbX0+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17cG9kY2FzdEhvc3QucG9kY2FzdEhvc3RGYWNlYm9va30+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17cG9kY2FzdEhvc3QucG9kY2FzdEhvc3RMaW5rZWRJbn0+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RIb3N0Rm9ybS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uXCI7XHJcbmltcG9ydCB7IElQcml2YXRlUG9saWN5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvUHJpdmF0ZVBvbGljeS9JUHJpdmF0ZVBvbGljeVwiO1xyXG5pbXBvcnQgeyBQcml2YXRlUG9saWN5QXBpIH0gZnJvbSBcIi4uLy4uL2FwaS9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lBcGlcIjtcclxuaW1wb3J0IHsgUHJpdmF0ZVBvbGljeU1vZGFsIH0gZnJvbSBcIi4vUHJpdmF0ZVBvbGljeU1vZGFsXCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3lMaXN0IH0gZnJvbSBcIi4vUHJpdmF0ZVBvbGljeUxpc3RcIjtcclxuXHJcbi8vXCJCbHVlcHJpbnRcIiBvciBpbnRlcmZhY2UgZm9yIG91ciBNb2RhbCBTdGF0ZVxyXG5pbnRlcmZhY2UgSVB1YmxpY1ByaXZhY3lNb2RhbFdpbmRvd1N0YXRlIHtcclxuICAgIHByaXZhdGVQb2xpY2llc0Rpc3BsYXlJdGVtczogSVByaXZhdGVQb2xpY3lbXTtcclxuICAgIHNob3dNb2RhbDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhdGVQb2xpY3kgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElQdWJsaWNQcml2YWN5TW9kYWxXaW5kb3dTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJpdmF0ZVBvbGljaWVzRGlzcGxheUl0ZW1zOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbFRvZ2dsZSA9IHRoaXMubW9kYWxUb2dnbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vZGFsVG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSlcclxuICAgIH1cclxuICAgIHByaXZhdGUgbG9hZERhdGFMaXN0KCkge1xyXG4gICAgICAgIFByaXZhdGVQb2xpY3lBcGkuZ2V0UHJpdmF0ZVBvbGljeUxpc3QoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcml2YXRlUG9saWNpZXNEaXNwbGF5SXRlbXM6IHJlc3BvbnNlLml0ZW1zIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7IGNvbnNvbGUubG9nKFwiZXJyb3IhXCIsIGVycik7IH0pXHJcbiAgICB9XHJcblxyXG5cclxuICBcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm1vZGFsVG9nZ2xlfSBjbGFzc05hbWU9XCJwcml2YWN5XCI+UHJpdmFjeTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFByaXZhdGVQb2xpY3lNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVBvbGljeUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUl0ZW1zPXt0aGlzLnN0YXRlLnByaXZhdGVQb2xpY2llc0Rpc3BsYXlJdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CdXR0b25DbGljaz17dGhpcy5sb2FkRGF0YUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUHJpdmF0ZVBvbGljeU1vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3kudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFBvZGNhc3RMaXN0LCBwb3N0UG9kY2FzdExpc3QsIHVwZGF0ZVBvZGNhc3RMaXN0LCBkZWxldGVQb2RjYXN0TGlzdCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpL3BvZGNhc3QvUG9kY2FzdEFwaVwiO1xyXG5pbXBvcnQgeyBQb2RjYXN0Rm9ybSwgUG9kY2FzdExpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBHcmF5QmFubmVyIH0gZnJvbSBcIi4uL0Jhbm5lcnMvR3JleUJhbm5lclwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcbmltcG9ydCB7IERyb3BEb3duTGlzdCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2Ryb3Bkb3dubGlzdFwiO1xyXG5pbXBvcnQgSWZyYW1lIGZyb20gJ3JlYWN0LWlmcmFtZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb2RjYXN0TGlzdFN0YXRlIHtcclxuICAgIHBvZGNhc3RMaXN0OiBJUG9kY2FzdExpc3Q7XHJcbiAgICBwb2RjYXN0TGlzdEl0ZW1zOiBJUG9kY2FzdExpc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvZGNhc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElQb2RjYXN0TGlzdFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIHBvZGNhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdERldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0VXBsb2FkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RWaWRlb1VwbG9hZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RQaWN0dXJlVXBsb2FkOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9kY2FzdExpc3RJdGVtczogW10sXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2JpbmQgaGVyZSBwbGVhc2VcclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gdGhpcy5vbkRlbGV0ZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlID0gdGhpcy5vbkZpZWxkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QgPSB0aGlzLmxvYWREYXRhTGlzdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubGlzdEJ1dHRvbkNsaWNrID0gdGhpcy5saXN0QnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsZWFyU3RhdGVBbmRGb3JtID0gdGhpcy5jbGVhclN0YXRlQW5kRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSB0aGlzLmNvbXBvbmVudERpZE1vdW50LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkZpZWxkQ2hhbmdlKGZpZWxkTmFtZTogc3RyaW5nLCBmaWVsZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0OiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvZGNhc3RMaXN0LFxyXG4gICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IGZpZWxkVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0QnV0dG9uQ2xpY2soaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbmR4ID0gdGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGlkKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJlZGl0XCIpIHtcclxuICAgICAgICAgICAgaWYgKG5keCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9kY2FzdExpc3Q6IHRoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtc1tuZHhdIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zLnNwbGljZShuZHgsIDEpXHJcbiAgICAgICAgICAgIGxldCBpdG1zID0gW1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHRoaXMub25EZWxldGVDbGljayhpZCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJTdGF0ZUFuZEZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIHBvZGNhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdERldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0VXBsb2FkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RWaWRlb1VwbG9hZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RQaWN0dXJlVXBsb2FkOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9kY2FzdExpc3RJdGVtczogW10sXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgcG9zdFBvZGNhc3RMaXN0KHRoaXMuc3RhdGUucG9kY2FzdExpc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQT1NUXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RhdGVBbmRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHVwZGF0ZVBvZGNhc3RMaXN0KHRoaXMuc3RhdGUucG9kY2FzdExpc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQVVRcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0ZUFuZEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHsgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRlbGV0ZUNsaWNrKGlkKSB7XHJcbiAgICAgICAgZGVsZXRlUG9kY2FzdExpc3QoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KS5jYXRjaCgoZXJyKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZERhdGFMaXN0KCkge1xyXG4gICAgICAgIGdldFBvZGNhc3RMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9kY2FzdExpc3RJdGVtczogcmVzcG9uc2UuaXRlbXMgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KS5jYXRjaCgoZXJyKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3RcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Qb2RjYXN0PC9oMj5cclxuICAgICAgICAgICAgICAgIDxJZnJhbWUgdXJsPVwiaHR0cHM6Ly9vZW1iZWQubGlic3luLmNvbS9lbWJlZD9pdGVtX2lkPTE2NjMxNDA4XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvL2h0bWw1LXBsYXllci5saWJzeW4uY29tL2VtYmVkL2VwaXNvZGUvaWQvMTY2MzE0MDgvaGVpZ2h0LzkwL3RoZW1lL2N1c3RvbS90aHVtYm5haWwveWVzL2RpcmVjdGlvbi9iYWNrd2FyZC9yZW5kZXItcGxheWxpc3Qvbm8vY3VzdG9tLWNvbG9yL2YzMGMwYy9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzUlXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwdW5jaEJveFByb2R1Y3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJldG9Qb2RjYXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAvL3JldHVybiAoXHJcbiAgICAgICAgLy8gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAvLyAgICAgICAgPFBvZGNhc3RGb3JtXHJcbiAgICAgICAgLy8gICAgICAgICAgICBwb2RjYXN0TGlzdD17dGhpcy5zdGF0ZS5wb2RjYXN0TGlzdH1cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uVXBkYXRlPXt0aGlzLm9uVXBkYXRlfVxyXG4gICAgICAgIC8vICAgICAgICAvPlxyXG5cclxuICAgICAgICAvLyAgICAgICAgPFBvZGNhc3RMaXN0XHJcbiAgICAgICAgLy8gICAgICAgICAgICBkYXRhSXRlbXM9e3RoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtc31cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uQnV0dG9uQ2xpY2s9e3RoaXMubGlzdEJ1dHRvbkNsaWNrfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgc2hvd0RlbGV0ZUJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgIHNob3dFZGl0QnV0dG9uPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgaGVhZGVyQ29sdW1ucz17W1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHsgY29sdW1uTmFtZTogXCJOYW1lXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiRGV0YWlsc1wiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIlVwbG9hZCBWaWRlb1wiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIlVwbG9hZCBQaWN0dXJlXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiVXBsb2FkIERhdGVcIiwgY29sdW1uU3R5bGU6IFwiYmFzaXMtMjBcIiB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBdfVxyXG4gICAgICAgIC8vICAgICAgICAvPlxyXG5cclxuICAgICAgICAvLyAgICAgICAgPGRpdj5cclxuICAgICAgICAvLyAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgPC9kaXY+XHJcbiAgICAgICAgLy8pXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0LnRzeCIsImV4cG9ydCAqIGZyb20gXCIuL2J1dHRvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbnB1dFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYXNzd29yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kcm9wZG93bmxpc3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dGFyZWFcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dChwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+e3Byb3BzLmVycm9yfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdFdyYXBwZXJDbGFzcyA9IChwcm9wczogSUlucHV0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSUlucHV0UHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBvbktleVByZXNzID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGlmIChwcm9wcy5vbkVudGVyKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uRW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbnB1dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tIFwiLi4vc3JjL3JvdXRlclwiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEFwcFJvdXRlciAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgYnJvd3Nlckhpc3RvcnksIEluZGV4Um91dGUsIFJvdXRlciwgaGFzaEhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZS9Ib21lXCI7XHJcbmltcG9ydCB7IFBvZGNhc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdFwiO1xyXG5pbXBvcnQgeyBBYm91dFVzUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBSc3NGZWVkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Sc3NGZWVkL1Jzc0ZlZWRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3kgfSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeVwiO1xyXG5pbXBvcnQgeyBDb250YWN0VXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RVcy9Db250YWN0VXNcIjtcclxuaW1wb3J0IHsgUG9kY2FzdEhvc3RQYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RIb3N0UGFnZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcFJvdXRlcjogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cclxuICAgICAgICAgICAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9ob21lXCIgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3BvZGNhc3RcIiBjb21wb25lbnQ9e1BvZGNhc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17UG9kY2FzdEhvc3RQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdHVzXCIgY29tcG9uZW50PXtDb250YWN0VXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcml2YXRlcG9saWN5XCIgY29tcG9uZW50PXtQcml2YXRlUG9saWN5fSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcm91dGVyLnRzeCJdLCJzb3VyY2VSb290IjoiIn0=