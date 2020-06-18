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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(25);
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
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "eheader" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "/home", className: "glow pull-left" }, "Elicit"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "mainListDiv" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/home", className: "btn" }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/podcast", className: "btn " }, "Podcast"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/about", className: "btn " }, "About"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/rss", className: "btn" }, "RSS Feed"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/contactus", className: "btn" }, "Contact Us"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Footer_FooterContainer__["a" /* FooterContainer */], null));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PrivatePolicy_PrivatePolicy__ = __webpack_require__(50);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(21);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Banners_GreyBanner__ = __webpack_require__(138);



//import { ContactUs } from "../ContactUs/ContactUs";
var HomePage = function HomePage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "home hero-image" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "btn contactus", href: "mailto:Manny@elicit.us" }, "Contact Us")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Banners_GreyBanner__["a" /* GrayBanner */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Podcast_index__["a" /* Podcast */], null));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Podcast__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Podcast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PodcastForm__ = __webpack_require__(132);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PodcastList__ = __webpack_require__(137);
/* unused harmony namespace reexport */




/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPodcastList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postPodcastList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updatePodcastList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deletePodcastList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(21);

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
/* unused harmony export PodcastForm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_form_index__ = __webpack_require__(58);


var PodcastForm = function PodcastForm(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-single-component", style: { color: "white" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-formarea" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-component-header grey-bg" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Podcasts")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-component-body" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-helper-block" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("fieldset", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["b" /* Input */], { label: "Name", name: "podcastName", value: props.podcastList.podcastName, placeholder: "Enter Name", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["c" /* Textarea */], { label: "Details", name: "podcastDetails", value: props.podcastList.podcastDetails, placeholder: "Enter Your Details", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["b" /* Input */], { label: "Upload Video", name: "podcastVideoUpload", value: props.podcastList.podcastVideoUpload, placeholder: "Upload Video", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["b" /* Input */], { label: "Upload Picture", name: "podcastPictureUpload", value: props.podcastList.podcastPictureUpload, placeholder: "Upload Picture", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["a" /* Button */], { className: "an-btn an-btn-primary", label: "Submit", onClick: props.onSubmit }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["a" /* Button */], { className: "an-btn an-btn-primary", label: "Update", onClick: props.onUpdate })))))));
};

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Button = function Button(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { style: { color: "black" }, type: "button", className: props.className, onClick: props.onClick }, props.label);
};

/***/ }),

/***/ 134:
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

/***/ 135:
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

/***/ 136:
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

/***/ 137:
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

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrayBanner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var GrayBanner = function (_React$Component) {
    _inherits(GrayBanner, _React$Component);

    function GrayBanner() {
        _classCallCheck(this, GrayBanner);

        return _possibleConstructorReturn(this, (GrayBanner.__proto__ || Object.getPrototypeOf(GrayBanner)).apply(this, arguments));
    }

    _createClass(GrayBanner, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tg-haslayout tg-main-section", style: { width: "100%", float: "left", padding: "30px 0", overflow: "hidden", backgroundColor: "#373542" } });
        }
    }]);

    return GrayBanner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_aboutus_AboutUsApi__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AboutUsForm__ = __webpack_require__(141);
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
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__AboutUsForm__["a" /* AboutUsForm */], { aboutUs: this.state.aboutUsListItems }));
        }
    }]);

    return AboutUsPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAboutUs; });
/* unused harmony export postAboutUs */
/* unused harmony export updateAboutUs */
/* unused harmony export deleteAboutUs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(21);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var AboutUsForm = function AboutUsForm(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container", style: { color: "white" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, "ABOUT US"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, props.aboutUs.map(function (d, idx) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: idx }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, d.aboutUsSummary));
    })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, " MEET THE TEAM "), props.aboutUs.map(function (about, i) {
        if (about.id > 1) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "meetthesegents", key: i }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: about.aboutUsPicture, style: { height: 200, width: 100 } }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, about.aboutName), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", null, about.aboutNickname), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "mailto: {about.aboutEmailContact}" }, about.aboutEmailContact), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, about.aboutBio), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "social-media" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "fa fa-instagram", target: "_blank", href: about.aboutInstagram }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "fa fa-facebook", target: "_blank", href: about.aboutFacebook }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "fa fa-linkedin", target: "_blank", href: about.aboutLinkedIn })));
        }
    })));
};

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_React__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_React___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_React__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var RssFeed = function (_React$Component) {
    _inherits(RssFeed, _React$Component);

    function RssFeed(props) {
        _classCallCheck(this, RssFeed);

        var _this = _possibleConstructorReturn(this, (RssFeed.__proto__ || Object.getPrototypeOf(RssFeed)).call(this, props));

        _this.state = {};
        return _this;
    }
    //private LoadRssFeed() {
    //    fetch("https://api.example.com/items")
    //        .then(res => res.json())
    //        .then(response => res.xml{
    //            this.setState({ xml: response.items });
    //            console.log(response)
    //        }, (err) => { }).catch((err) => { });
    //}


    _createClass(RssFeed, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_React__["createElement"]("div", null);
        }
    }]);

    return RssFeed;
}(__WEBPACK_IMPORTED_MODULE_0_React__["Component"]);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(144);
} else {
  module.exports = __webpack_require__(145);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(5),n=__webpack_require__(15),p=__webpack_require__(16),q=__webpack_require__(13),r="function"===typeof Symbol&&Symbol["for"],t=r?Symbol["for"]("react.element"):60103,u=r?Symbol["for"]("react.portal"):60106,v=r?Symbol["for"]("react.fragment"):60107,w=r?Symbol["for"]("react.strict_mode"):60108,x=r?Symbol["for"]("react.provider"):60109,y=r?Symbol["for"]("react.context"):60110,z=r?Symbol["for"]("react.async_mode"):60111,A=r?Symbol["for"]("react.forward_ref"):
60112,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b=arguments.length-1,e="http://reactjs.org/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};
function E(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?C("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];d.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:I.current}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var N=/\/+/g,O=[];function P(a,b,e,c){if(O.length){var d=O.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function Q(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>O.length&&O.push(a)}
function R(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+S(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+S(d,h);g+=R(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+S(d,h++),g+=R(d,f,e,c);else"object"===d&&(e=""+a,C("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function S(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function T(a,b){a.func.call(a.context,b,a.count++)}
function U(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,e,q.thatReturnsArgument):null!=a&&(M(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(N,"$\x26/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function V(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(N,"$\x26/")+"/");b=P(b,g,c,d);null==a||R(a,"",U,b);Q(b)}
var W={Children:{map:function(a,b,e){if(null==a)return a;var c=[];V(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=P(null,null,b,e);null==a||R(a,"",T,b);Q(b)},count:function(a){return null==a?0:R(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];V(a,b,null,q.thatReturnsArgument);return b},only:function(a){M(a)?void 0:C("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:y,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_changedBits:0,Provider:null,Consumer:null};a.Provider={$$typeof:x,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:A,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:z,createElement:L,cloneElement:function(a,b,e){null===a||void 0===a?C("267",a):void 0;var c=void 0,d=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);var k=void 0;a.type&&a.type.defaultProps&&
(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];d.children=k}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:M,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,assign:m}},X=Object.freeze({default:W}),
Y=X&&W||X;module.exports=Y["default"]?Y["default"]:Y;


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.3.2
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var _assign = __webpack_require__(5);
var invariant = __webpack_require__(15);
var emptyObject = __webpack_require__(16);
var warning = __webpack_require__(36);
var emptyFunction = __webpack_require__(13);
var checkPropTypes = __webpack_require__(17);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.3.2';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol['for']('react.strict_mode') : 0xeacc;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol['for']('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol['for']('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol['for']('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol['for']('react.forward_ref') : 0xead0;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    _defaultValue: defaultValue,
    _currentValue: defaultValue,
    _changedBits: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  context.Consumer = context;

  {
    context._currentRenderer = null;
  }

  return context;
}

function forwardRef(render) {
  {
    !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_CALL_TYPE:
      return 'ReactCall';
    case REACT_RETURN_TYPE:
      return 'ReactReturn';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var currentlyValidatingElement = void 0;
var propTypesMisspellWarningShown = void 0;

var getDisplayName = function () {};
var getStackAddendum = function () {};

{
  currentlyValidatingElement = null;

  propTypesMisspellWarningShown = false;

  getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    !componentClass.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
      break;
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else {
      typeString = typeof type;
    }

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3['default'] ? React$3['default'] : React$3;

module.exports = react;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_contactus_ContactUsApi__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_components_form_index__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_form_input__ = __webpack_require__(59);
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
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-6 col-sm-12 col-xs-12" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { action: "#", method: "post", className: "tg-commentform help-form", id: "tg-commentform" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("fieldset", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tg-section-heading" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Contact Elicit")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_components_form_input__["a" /* Input */], { type: "text", label: "Name", name: "name", value: this.state.contactUs.name, placeholder: "Name", onChange: this.onFieldChange }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_components_form_input__["a" /* Input */], { type: "text", label: "Topic", name: "topic", value: this.state.contactUs.topic, placeholder: "Subject", onChange: this.onFieldChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_components_form_input__["a" /* Input */], { label: "Email", name: "email", value: this.state.contactUs.email, placeholder: "Email", onChange: this.onFieldChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_components_form_index__["c" /* Textarea */], { label: "Message", name: "message", value: this.state.contactUs.message, placeholder: "Enter Your Message", onChange: this.onFieldChange }, "rows=", 8)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: "btn contactus", onClick: this.sendEmailButtonClick }, "Send")))))));
        }
    }]);

    return ContactUs;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sendEmailContactUs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiExecute__ = __webpack_require__(21);

var sendEmailContactUs = function sendEmailContactUs(data) {
    var sendEmailContactUsURL = "/api/contactUs";
    return Object(__WEBPACK_IMPORTED_MODULE_0__apiExecute__["a" /* apiExecute */])(sendEmailContactUsURL, "POST", data);
};
var ContactUsApi = {
    sendEmailContactUs: sendEmailContactUs
};

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiExecute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(51);
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

/***/ 50:
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Podcast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_api_podcast_PodcastApi__ = __webpack_require__(131);
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
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "podcast" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Podcast"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "COMING SOON!"));
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(133);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(59);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(134);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdownlist__ = __webpack_require__(135);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textarea__ = __webpack_require__(136);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__textarea__["a"]; });






/***/ }),

/***/ 59:
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(37);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AboutUs_AboutUsPage__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_RssFeed_RssFeed__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PrivatePolicy_PrivatePolicy__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ContactUs_ContactUs__ = __webpack_require__(146);









var AppRouter = function AppRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_2__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/podcast", component: __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__["a" /* Podcast */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_5__components_AboutUs_AboutUsPage__["a" /* AboutUsPage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/rss", component: __WEBPACK_IMPORTED_MODULE_6__components_RssFeed_RssFeed__["a" /* RssFeed */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/contactus", component: __WEBPACK_IMPORTED_MODULE_8__components_ContactUs_ContactUs__["a" /* ContactUs */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/privatepolicy", component: __WEBPACK_IMPORTED_MODULE_7__components_PrivatePolicy_PrivatePolicy__["a" /* PrivatePolicy */] })));
};

/***/ })

},[61]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeU1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUxpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9idXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vcGFzc3dvcmQudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdExpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFubmVycy9HcmV5QmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0VXMvQWJvdXRVc1BhZ2UudHN4Iiwid2VicGFjazovLy8uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sc3NGZWVkL1Jzc0ZlZWQudHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvUmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9SZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9SZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWN0VXMvQ29udGFjdFVzLnRzeCIsIndlYnBhY2s6Ly8vLi9hcGkvY29udGFjdHVzL0NvbnRhY3RVc0FwaS50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL2FwaUV4ZWN1dGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3JvdXRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTSxNQUFvQyxTQUFwQyxHQUFvQyxDQUFDLEtBQUQsRUFBVTtBQUV2RCxXQUNJLGtFQUNJLHFEQUFDLHlFQUFELEVBQU8sSUFBUCxDQURKLEVBRUssTUFBTSxRQUZYLENBREo7QUFRSCxDQVZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUVPLElBQU0sTUFBYjtBQUFBOztBQUVJLG9CQUFZLEtBQVosRUFBaUI7QUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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TixDQUhKLEVBSUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssUUFBTixFQUFlLFdBQVcsb0ZBQTFCLEVBQU4sQ0FKSixFQUtJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLE1BQU4sRUFBYSxXQUFXLDRFQUF4QixFQUFOLENBTEosRUFNSSxxREFBQyxtREFBRCxFQUFNLEVBQUMsTUFBSyxZQUFOLEVBQW1CLFdBQVcsa0ZBQTlCLEVBQU4sQ0FOSixFQU9JLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLGdCQUFOLEVBQXVCLFdBQVcsOEZBQWxDLEVBQU4sQ0FQSixDQURKLENBREo7QUFnQkgsQ0FqQk0sQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PntcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgLy88ZGl2IGNsYXNzTmFtZT1cImZpeGVkLXRvcFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCAlIFwiLCBmbG9hdDogXCJsZWZ0XCIsIHBhZGRpbmc6IFwiMzBweCAwXCIsIG92ZXJmbG93OiBcImhpZGRlblwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMFwiIH19ID5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJnbG93IHB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsaWNpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkxpc3REaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvaG9tZVwiIGNsYXNzTmFtZT1cImJ0blwiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3BvZGNhc3RcIiBjbGFzc05hbWU9XCJidG4gXCI+UG9kY2FzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIiBjbGFzc05hbWU9XCJidG4gXCI+QWJvdXQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Jzc1wiIGNsYXNzTmFtZT1cImJ0blwiPlJTUyBGZWVkPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0dXNcIiBjbGFzc05hbWU9XCJidG5cIj5Db250YWN0IFVzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvb3RlckNvbnRhaW5lciAvPlxyXG5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiOyBcclxuaW1wb3J0IHsgUHJpdmF0ZVBvbGljeSB9IGZyb20gXCIuLi9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcC1mb290ZXJiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXAtY29weXJpZ2h0XCIgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT5FbGljaXQgwqkyMDIwICB8ICBBbGwgUmlnaHRzIFJlc2VydmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZvb3Rlci1uYXYgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxQcml2YXRlUG9saWN5IC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyLnRzeCIsImltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9hcGlFeGVjdXRlXCI7XHJcbmltcG9ydCB7IElQcml2YXRlUG9saWN5UGFnZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ludGVyZmFjZXMvcHJpdmF0ZXBvbGljeS9JUHJpdmF0ZVBvbGljeVBhZ2VcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcIi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcml2YXRlUG9saWN5TGlzdCA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvcHJpdmF0ZXBvbGljeWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UHJpdmF0ZVBvbGljeUxpc3QgPSAoZGF0YTogSVByaXZhdGVQb2xpY3lQYWdlKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHBvc3RVUkwgPSBgL2FwaS9wcml2YXRlcG9saWN5YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHBvc3RVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUHJpdmF0ZVBvbGljeUxpc3QgPSAoZGF0YTogSVByaXZhdGVQb2xpY3lQYWdlKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHB1dFVSTCA9IGAke2Jhc2VVUkx9YXBpL3ByaXZhdGVwb2xpY3kvJHtkYXRhLmlkfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwdXRVUkwsIFwiUFVUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQcml2YXRlUG9saWN5TGlzdCA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvcHJpdmF0ZXBvbGljeS8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcml2YXRlUG9saWN5QXBpID0ge1xyXG4gICAgZ2V0UHJpdmF0ZVBvbGljeUxpc3QsIHBvc3RQcml2YXRlUG9saWN5TGlzdCwgdXBkYXRlUHJpdmF0ZVBvbGljeUxpc3QsIGRlbGV0ZVByaXZhdGVQb2xpY3lMaXN0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJpdmF0ZVBvbGljeU1vZGFsIHtcclxuICAgIHNob3dNb2RhbDogYm9vbGVhbjtcclxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlUG9saWN5TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByaXZhdGVQb2xpY3lNb2RhbCwge30+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcml2YXRlUG9saWN5TW9kYWwpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc2hvd01vZGFsKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBiYWNrZHJvcFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMyknLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MCxcclxuICAgICAgICAgICAgekluZGV4OiA5OTksXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1vZGFsU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogNTAwLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMCxcclxuICAgICAgICAgICAgekluZGV4OiAxMDAxXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBtb2RhbEJvZHk6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMCxcclxuICAgICAgICAgICAgekluZGV4OiAxMDAxLFxyXG4vKnNjcm9sbGJhciovb3ZlcmZsb3dZOiBcInNjcm9sbFwiIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2Ryb3BcIiBzdHlsZT17YmFja2Ryb3BTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+PHN0cm9uZz5Qcml2YXRlIFBvbGljaWVzOiA8L3N0cm9uZz48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lNb2RhbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVByaXZhdGVQb2xpY3ksIElHcmlkVmlldyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2luZGV4XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByaXZhdGVQb2xpY3lMaXN0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUdyaWRWaWV3PElQcml2YXRlUG9saWN5Pj4gPSAocHJvcHM6IElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmhlYWRlckNvbHVtbnMgIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oZWFkZXJDb2x1bW5zLm1hcCgoaXRtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtpdG0uY29sdW1uU3R5bGV9PjxzdHJvbmc+e2l0bS5jb2x1bW5OYW1lfTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoXCJcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kYXRhSXRlbXMubWFwKGJ1aWxkUm93KHByb3BzKSl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgYnVpbGRSb3cgPSAocHJvcHM6IElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4pID0+IChpdG06IElQcml2YXRlUG9saWN5LCBuZHg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT17bmR4fT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjx1PjxzdHJvbmc+e2l0bS5wcml2YXRlUG9saWN5TmFtZX06IDwvc3Ryb25nPjwvdT48L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPntpdG0ucHJpdmF0ZVBvbGljeURldGFpbHN9PC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5jb25zdCBidXR0b25DbGljayA9IChwcm9wczogSUdyaWRWaWV3PElQcml2YXRlUG9saWN5PiwgaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpID0+IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQnV0dG9uQ2xpY2soaWQsIGFjdGlvbik7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUxpc3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBvZGNhc3QgfSBmcm9tIFwiLi4vUG9kY2FzdC9pbmRleFwiO1xyXG5pbXBvcnQgeyBBYm91dFVzUGFnZSB9IGZyb20gXCIuLi9BYm91dFVzL0Fib3V0VXNQYWdlXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEdyYXlCYW5uZXIgfSBmcm9tIFwiLi4vQmFubmVycy9HcmV5QmFubmVyXCI7XHJcbi8vaW1wb3J0IHsgQ29udGFjdFVzIH0gZnJvbSBcIi4uL0NvbnRhY3RVcy9Db250YWN0VXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lUGFnZTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZSBoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gY29udGFjdHVzXCIgaHJlZj1cIm1haWx0bzpNYW5ueUBlbGljaXQudXNcIj5Db250YWN0IFVzPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEdyYXlCYW5uZXIgLz5cclxuICAgICAgICAgICAgPFBvZGNhc3QgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuLy88ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9lbGljaXQudXMvaGFsZlRob3VnaHQxLm1wNCdcclxuLy8gICAgICAgIGZyYW1lQm9yZGVyPScwJ1xyXG4vLyAgICAgICAgLy9hbGxvdz0nYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYSdcclxuLy8gICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4vLyAgICAgICAgdGl0bGU9J3ZpZGVvJ1xyXG4vLyAgICAvPlxyXG4vLzwvZGl2PiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hvbWUvSG9tZS50c3giLCJleHBvcnQgKiBmcm9tIFwiLi9Qb2RjYXN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1BvZGNhc3RGb3JtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1BvZGNhc3RMaXN0XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L2luZGV4LnRzeCIsImltcG9ydCB7IElQb2RjYXN0TGlzdCB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0ludGVyZmFjZXMvaW5kZXhcIjtcclxuaW1wb3J0IHsgYXBpRXhlY3V0ZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpL2FwaUV4ZWN1dGVcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcIi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb2RjYXN0TGlzdCA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvcG9kY2FzdGA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UG9kY2FzdExpc3QgPSAoZGF0YTogSVBvZGNhc3RMaXN0KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHBvc3RVUkwgPSBgL2FwaS9wb2RjYXN0YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHBvc3RVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUG9kY2FzdExpc3QgPSAoZGF0YTogSVBvZGNhc3RMaXN0KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHB1dFVSTCA9IGAke2Jhc2VVUkx9YXBpL3BvZGNhc3QvJHtkYXRhLmlkfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwdXRVUkwsIFwiUFVUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb2RjYXN0TGlzdCA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvcG9kY2FzdC8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL3BvZGNhc3QvUG9kY2FzdEFwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVBvZGNhc3RMaXN0IH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW50ZXJmYWNlcy9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQb2RjYXN0TGlzdEZvcm0ge1xyXG4gICAgcG9kY2FzdExpc3Q6IElQb2RjYXN0TGlzdDtcclxuICAgIG9uQ2hhbmdlOiAoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBvblN1Ym1pdDogKCkgPT4gdm9pZDtcclxuICAgIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQb2RjYXN0Rm9ybTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElQb2RjYXN0TGlzdEZvcm0+ID0gKHByb3BzOiBJUG9kY2FzdExpc3RGb3JtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tc2luZ2xlLWNvbXBvbmVudFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tZm9ybWFyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tY29tcG9uZW50LWhlYWRlciBncmV5LWJnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlBvZGNhc3RzPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1jb21wb25lbnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4taGVscGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvZGNhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wb2RjYXN0TGlzdC5wb2RjYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9kY2FzdERldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3REZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIERldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXBsb2FkIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0VmlkZW9VcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3RWaWRlb1VwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXBsb2FkIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwbG9hZCBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0UGljdHVyZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucG9kY2FzdExpc3QucG9kY2FzdFBpY3R1cmVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVwbG9hZCBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RGb3JtLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBmb3JtYXRXcmFwcGVyQ2xhc3MgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICByZXR1cm4gcHJvcHMuZXJyb3IgPyBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOiB3cmFwcGVyQ2xhc3M7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPntwcm9wcy5lcnJvcn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9wYXNzd29yZC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUtleVZhbHVlLCBJRHJvcERvd25MaXN0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJRHJvcERvd25MaXN0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSURyb3BEb3duTGlzdFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wRG93bkxpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJRHJvcERvd25MaXN0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLmtleX0gdmFsdWU9e29wdGlvbi5rZXl9PntvcHRpb24udmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cHJvcHMuc2VsZWN0ZWRWYWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfSBpZD17cHJvcHMubmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+e29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJVGV4dGFyZWFQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dGFyZWE6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJVGV4dGFyZWFQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZSA/IChwcm9wcy5jbGFzc05hbWUgKyBcImZvcm0tY29udHJvbFwiKSA6IFwiZm9ybS1jb250cm9sXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dChwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17cHJvcHMucm93c31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+e3Byb3BzLmVycm9yfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJVGV4dGFyZWFQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJVGV4dGFyZWFQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IG9uQmx1ciA9IChwcm9wczogSVRleHRhcmVhUHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKHByb3BzLm9uQmx1cikge1xyXG4gICAgICAgIHByb3BzLm9uQmx1cihlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb2RjYXN0TGlzdEdyaWRWaWV3T3B0aW9uczxUPiB7XHJcbiAgICBkYXRhSXRlbXM6IFRbXTtcclxuICAgIHNob3dFZGl0QnV0dG9uOiBib29sZWFuO1xyXG4gICAgc2hvd0RlbGV0ZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIG9uQnV0dG9uQ2xpY2s6IChpZDogbnVtYmVyLCBhY3Rpb246IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGhlYWRlckNvbHVtbnM/OiBJSGVhZGVyQ29sdW1uW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlckNvbHVtbiB7XHJcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmc7XHJcbiAgICBjb2x1bW5TdHlsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUG9kY2FzdExpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0Pj4gPSAocHJvcHM6IElQb2RjYXN0TGlzdEdyaWRWaWV3T3B0aW9uczxJUG9kY2FzdExpc3Q+KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tc2luZ2xlLWNvbXBvbmVudCB3aXRoLXNoYWRvd1wiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+TGlzdDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1oZWxwZXItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBjb2xvcjogXCJibGFja1wiIH19ICBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaGVhZGVyQ29sdW1ucyAhPSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhlYWRlckNvbHVtbnMubWFwKChpdG0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0aCBrZXk9e2l9IGNsYXNzTmFtZT17aXRtLmNvbHVtblN0eWxlfT48c3Ryb25nPntpdG0uY29sdW1uTmFtZX08L3N0cm9uZz48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhSXRlbXMubWFwKGJ1aWxkUm93KHByb3BzKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXNjcm9sbGJhci15LXJhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zY3JvbGxiYXIteVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkUm93ID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PikgPT4gKGl0bTogSVBvZGNhc3RMaXN0LCBuZHg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGJvZHkga2V5PXtuZHh9PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3REZXRhaWxzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3RWaWRlb1VwbG9hZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0UGljdHVyZVVwbG9hZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0VXBsb2FkRGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dFZGl0QnV0dG9uID8gKDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFuLWJ0biBhbi1idG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2J1dHRvbkNsaWNrKHByb3BzLCBpdG0uaWQsIFwiZWRpdFwiKX0+RWRpdDwvYnV0dG9uPikgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEZWxldGVCdXR0b24gPyAoPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYW4tYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXtidXR0b25DbGljayhwcm9wcywgaXRtLmlkLCBcImRlbGV0ZVwiKX0+RGVsZXRlPC9idXR0b24+KSA6IChcIlwiKX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbkNsaWNrID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PiwgaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpID0+IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQnV0dG9uQ2xpY2soaWQsIGFjdGlvbik7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RMaXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXlCYW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIGFueT57XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRnLWhhc2xheW91dCB0Zy1tYWluLXNlY3Rpb25cIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGZsb2F0OiBcImxlZnRcIiwgcGFkZGluZzogXCIzMHB4IDBcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIGJhY2tncm91bmRDb2xvcjogXCIjMzczNTQyXCIgfX0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQmFubmVycy9HcmV5QmFubmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBJQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9hYm91dHVzL0lBYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRBYm91dFVzIH0gZnJvbSBcIi4uLy4uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGlcIjtcclxuaW1wb3J0IHsgQWJvdXRVc0Zvcm0gfSBmcm9tIFwiLi9BYm91dFVzRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQWJvdXRVc1N0YXRlIHtcclxuICAgIGFib3V0VXNQYWdlU3RhdGU6IElBYm91dFVzUGFnZTtcclxuICAgIGFib3V0VXNMaXN0SXRlbXM6IElBYm91dFVzUGFnZVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRVc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElBYm91dFVzU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFib3V0VXNQYWdlU3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRVc1N1bW1hcnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dFVzUGljdHVyZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0VGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dE5pY2tuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRCaW86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dEluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0RmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dExpbmtlZEluOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRFbWFpbENvbnRhY3Q6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFib3V0VXNMaXN0SXRlbXM6IFtdLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSA9IHRoaXMubG9hZERhdGEuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcclxuICAgICAgICBnZXRBYm91dFVzKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWJvdXRVc0xpc3RJdGVtczogcmVzcG9uc2UuaXRlbXMgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QWJvdXRVc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICBhYm91dFVzPXt0aGlzLnN0YXRlLmFib3V0VXNMaXN0SXRlbXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZS50c3giLCJpbXBvcnQgeyBhcGlFeGVjdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGkvYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzL2Fib3V0dXMvSUFib3V0VXNQYWdlXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCIvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWJvdXRVcyA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvYWJvdXR1c2A7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0QWJvdXRVcyA9IChkYXRhOiBJQWJvdXRVc1BhZ2UpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgcG9zdFVSTCA9IGAvYXBpL2Fib3V0dXNgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocG9zdFVSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVBYm91dFVzID0gKGRhdGE6IElBYm91dFVzUGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9hYm91dHVzLyR7ZGF0YS5pZH1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocHV0VVJMLCBcIlBVVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQWJvdXRVcyA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvYWJvdXR1cy8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2Fib3V0dXMvQWJvdXRVc0FwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBJQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2J1dHRvblwiO1xyXG5cclxuaW50ZXJmYWNlIElBYm91dFBhZ2VJbmRleFNpbmdsZSB7XHJcbiAgICBhYm91dFVzOiBJQWJvdXRVc1BhZ2VbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VXNGb3JtOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUFib3V0UGFnZUluZGV4U2luZ2xlPiA9IChwcm9wczogSUFib3V0UGFnZUluZGV4U2luZ2xlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgPGgzPkFCT1VUIFVTPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5hYm91dFVzLm1hcChmdW5jdGlvbiAoZCwgaWR4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZC5hYm91dFVzU3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+IE1FRVQgVEhFIFRFQU0gPC9oMT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5hYm91dFVzLm1hcChmdW5jdGlvbiAoYWJvdXQsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWJvdXQuaWQgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZXR0aGVzZWdlbnRzXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWJvdXQuYWJvdXRVc1BpY3R1cmV9IHN0eWxlPXt7IGhlaWdodDogMjAwLCB3aWR0aDogMTAwIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnthYm91dC5hYm91dE5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2Fib3V0LmFib3V0Tmlja25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOiB7YWJvdXQuYWJvdXRFbWFpbENvbnRhY3R9XCI+e2Fib3V0LmFib3V0RW1haWxDb250YWN0fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YWJvdXQuYWJvdXRCaW99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbVwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2Fib3V0LmFib3V0SW5zdGFncmFtfT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YWJvdXQuYWJvdXRGYWNlYm9va30+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpblwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2Fib3V0LmFib3V0TGlua2VkSW59PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG5cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Fib3V0VXMvQWJvdXRVc0Zvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcIlJlYWN0XCI7XHJcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSBcIi4uL0hvbWUvSG9tZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSc3NGZWVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IDwge30sIHt9ID4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL3ByaXZhdGUgTG9hZFJzc0ZlZWQoKSB7XHJcbiAgICAvLyAgICBmZXRjaChcImh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2l0ZW1zXCIpXHJcbiAgICAvLyAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG4gICAgLy8gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlcy54bWx7XHJcbiAgICAvLyAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB4bWw6IHJlc3BvbnNlLml0ZW1zIH0pO1xyXG4gICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIC8vICAgICAgICB9LCAoZXJyKSA9PiB7IH0pLmNhdGNoKChlcnIpID0+IHsgfSk7XHJcbiAgICAvL31cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICkgXHJcbiAgICAgXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Jzc0ZlZWQvUnNzRmVlZC50c3giLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9SZWFjdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMy4yXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgbT1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPXJlcXVpcmUoXCJmYmpzL2xpYi9pbnZhcmlhbnRcIikscD1yZXF1aXJlKFwiZmJqcy9saWIvZW1wdHlPYmplY3RcIikscT1yZXF1aXJlKFwiZmJqcy9saWIvZW1wdHlGdW5jdGlvblwiKSxyPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbFtcImZvclwiXSx0PXI/U3ltYm9sW1wiZm9yXCJdKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyx1PXI/U3ltYm9sW1wiZm9yXCJdKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LHY9cj9TeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyx3PXI/U3ltYm9sW1wiZm9yXCJdKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgseD1yP1N5bWJvbFtcImZvclwiXShcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LHk9cj9TeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLHo9cj9TeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLEE9cj9TeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTpcbjYwMTEyLEI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIEMoYSl7Zm9yKHZhciBiPWFyZ3VtZW50cy5sZW5ndGgtMSxlPVwiaHR0cDovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudFxceDNkXCIrYSxjPTA7YzxiO2MrKyllKz1cIlxceDI2YXJnc1tdXFx4M2RcIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2MrMV0pO24oITEsXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgJXMgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLiBcIixlKX12YXIgRD17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX07XG5mdW5jdGlvbiBFKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPXA7dGhpcy51cGRhdGVyPWV8fER9RS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtFLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe1wib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWE/QyhcIjg1XCIpOnZvaWQgMDt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0UucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O2Z1bmN0aW9uIEYoKXt9Ri5wcm90b3R5cGU9RS5wcm90b3R5cGU7ZnVuY3Rpb24gRyhhLGIsZSl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1wO3RoaXMudXBkYXRlcj1lfHxEfXZhciBIPUcucHJvdG90eXBlPW5ldyBGO1xuSC5jb25zdHJ1Y3Rvcj1HO20oSCxFLnByb3RvdHlwZSk7SC5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgST17Y3VycmVudDpudWxsfSxKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksSz17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTChhLGIsZSl7dmFyIGM9dm9pZCAwLGQ9e30sZz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihjIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpLGIpSi5jYWxsKGIsYykmJiFLLmhhc093blByb3BlcnR5KGMpJiYoZFtjXT1iW2NdKTt2YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZC5jaGlsZHJlbj1lO2Vsc2UgaWYoMTxmKXtmb3IodmFyIGs9QXJyYXkoZiksbD0wO2w8ZjtsKyspa1tsXT1hcmd1bWVudHNbbCsyXTtkLmNoaWxkcmVuPWt9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGMgaW4gZj1hLmRlZmF1bHRQcm9wcyxmKXZvaWQgMD09PWRbY10mJihkW2NdPWZbY10pO3JldHVybnskJHR5cGVvZjp0LHR5cGU6YSxrZXk6ZyxyZWY6aCxwcm9wczpkLF9vd25lcjpJLmN1cnJlbnR9fVxuZnVuY3Rpb24gTShhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09dH1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiXFx4M2RcIjpcIlxceDNkMFwiLFwiOlwiOlwiXFx4M2QyXCJ9O3JldHVyblwiJFwiKyhcIlwiK2EpLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBOPS9cXC8rL2csTz1bXTtmdW5jdGlvbiBQKGEsYixlLGMpe2lmKE8ubGVuZ3RoKXt2YXIgZD1PLnBvcCgpO2QucmVzdWx0PWE7ZC5rZXlQcmVmaXg9YjtkLmZ1bmM9ZTtkLmNvbnRleHQ9YztkLmNvdW50PTA7cmV0dXJuIGR9cmV0dXJue3Jlc3VsdDphLGtleVByZWZpeDpiLGZ1bmM6ZSxjb250ZXh0OmMsY291bnQ6MH19ZnVuY3Rpb24gUShhKXthLnJlc3VsdD1udWxsO2Eua2V5UHJlZml4PW51bGw7YS5mdW5jPW51bGw7YS5jb250ZXh0PW51bGw7YS5jb3VudD0wOzEwPk8ubGVuZ3RoJiZPLnB1c2goYSl9XG5mdW5jdGlvbiBSKGEsYixlLGMpe3ZhciBkPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1kfHxcImJvb2xlYW5cIj09PWQpYT1udWxsO3ZhciBnPSExO2lmKG51bGw9PT1hKWc9ITA7ZWxzZSBzd2l0Y2goZCl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpnPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSB0OmNhc2UgdTpnPSEwfX1pZihnKXJldHVybiBlKGMsYSxcIlwiPT09Yj9cIi5cIitTKGEsMCk6YiksMTtnPTA7Yj1cIlwiPT09Yj9cIi5cIjpiK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBoPTA7aDxhLmxlbmd0aDtoKyspe2Q9YVtoXTt2YXIgZj1iK1MoZCxoKTtnKz1SKGQsZixlLGMpfWVsc2UgaWYobnVsbD09PWF8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYT9mPW51bGw6KGY9QiYmYVtCXXx8YVtcIkBAaXRlcmF0b3JcIl0sZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZj9mOm51bGwpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxcbmg9MDshKGQ9YS5uZXh0KCkpLmRvbmU7KWQ9ZC52YWx1ZSxmPWIrUyhkLGgrKyksZys9UihkLGYsZSxjKTtlbHNlXCJvYmplY3RcIj09PWQmJihlPVwiXCIrYSxDKFwiMzFcIixcIltvYmplY3QgT2JqZWN0XVwiPT09ZT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjplLFwiXCIpKTtyZXR1cm4gZ31mdW5jdGlvbiBTKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKGEua2V5KTpiLnRvU3RyaW5nKDM2KX1mdW5jdGlvbiBUKGEsYil7YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKX1cbmZ1bmN0aW9uIFUoYSxiLGUpe3ZhciBjPWEucmVzdWx0LGQ9YS5rZXlQcmVmaXg7YT1hLmZ1bmMuY2FsbChhLmNvbnRleHQsYixhLmNvdW50KyspO0FycmF5LmlzQXJyYXkoYSk/VihhLGMsZSxxLnRoYXRSZXR1cm5zQXJndW1lbnQpOm51bGwhPWEmJihNKGEpJiYoYj1kKyghYS5rZXl8fGImJmIua2V5PT09YS5rZXk/XCJcIjooXCJcIithLmtleSkucmVwbGFjZShOLFwiJFxceDI2L1wiKStcIi9cIikrZSxhPXskJHR5cGVvZjp0LHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn0pLGMucHVzaChhKSl9ZnVuY3Rpb24gVihhLGIsZSxjLGQpe3ZhciBnPVwiXCI7bnVsbCE9ZSYmKGc9KFwiXCIrZSkucmVwbGFjZShOLFwiJFxceDI2L1wiKStcIi9cIik7Yj1QKGIsZyxjLGQpO251bGw9PWF8fFIoYSxcIlwiLFUsYik7UShiKX1cbnZhciBXPXtDaGlsZHJlbjp7bWFwOmZ1bmN0aW9uKGEsYixlKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBjPVtdO1YoYSxjLG51bGwsYixlKTtyZXR1cm4gY30sZm9yRWFjaDpmdW5jdGlvbihhLGIsZSl7aWYobnVsbD09YSlyZXR1cm4gYTtiPVAobnVsbCxudWxsLGIsZSk7bnVsbD09YXx8UihhLFwiXCIsVCxiKTtRKGIpfSxjb3VudDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT8wOlIoYSxcIlwiLHEudGhhdFJldHVybnNOdWxsLG51bGwpfSx0b0FycmF5OmZ1bmN0aW9uKGEpe3ZhciBiPVtdO1YoYSxiLG51bGwscS50aGF0UmV0dXJuc0FyZ3VtZW50KTtyZXR1cm4gYn0sb25seTpmdW5jdGlvbihhKXtNKGEpP3ZvaWQgMDpDKFwiMTQzXCIpO3JldHVybiBhfX0sY3JlYXRlUmVmOmZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19LENvbXBvbmVudDpFLFB1cmVDb21wb25lbnQ6RyxjcmVhdGVDb250ZXh0OmZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6eSxcbl9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9kZWZhdWx0VmFsdWU6YSxfY3VycmVudFZhbHVlOmEsX2NoYW5nZWRCaXRzOjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjp4LF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9LGZvcndhcmRSZWY6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOkEscmVuZGVyOmF9fSxGcmFnbWVudDp2LFN0cmljdE1vZGU6dyx1bnN0YWJsZV9Bc3luY01vZGU6eixjcmVhdGVFbGVtZW50OkwsY2xvbmVFbGVtZW50OmZ1bmN0aW9uKGEsYixlKXtudWxsPT09YXx8dm9pZCAwPT09YT9DKFwiMjY3XCIsYSk6dm9pZCAwO3ZhciBjPXZvaWQgMCxkPW0oe30sYS5wcm9wcyksZz1hLmtleSxoPWEucmVmLGY9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihoPWIucmVmLGY9SS5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGc9XCJcIitiLmtleSk7dmFyIGs9dm9pZCAwO2EudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyYmXG4oaz1hLnR5cGUuZGVmYXVsdFByb3BzKTtmb3IoYyBpbiBiKUouY2FsbChiLGMpJiYhSy5oYXNPd25Qcm9wZXJ0eShjKSYmKGRbY109dm9pZCAwPT09YltjXSYmdm9pZCAwIT09az9rW2NdOmJbY10pfWM9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1jKWQuY2hpbGRyZW49ZTtlbHNlIGlmKDE8Yyl7az1BcnJheShjKTtmb3IodmFyIGw9MDtsPGM7bCsrKWtbbF09YXJndW1lbnRzW2wrMl07ZC5jaGlsZHJlbj1rfXJldHVybnskJHR5cGVvZjp0LHR5cGU6YS50eXBlLGtleTpnLHJlZjpoLHByb3BzOmQsX293bmVyOmZ9fSxjcmVhdGVGYWN0b3J5OmZ1bmN0aW9uKGEpe3ZhciBiPUwuYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifSxpc1ZhbGlkRWxlbWVudDpNLHZlcnNpb246XCIxNi4zLjJcIixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7UmVhY3RDdXJyZW50T3duZXI6SSxhc3NpZ246bX19LFg9T2JqZWN0LmZyZWV6ZSh7ZGVmYXVsdDpXfSksXG5ZPVgmJld8fFg7bW9kdWxlLmV4cG9ydHM9WVtcImRlZmF1bHRcIl0/WVtcImRlZmF1bHRcIl06WTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9SZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjMuMlxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgZW1wdHlPYmplY3QgPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eU9iamVjdCcpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMnKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuMy4yJztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbFsnZm9yJ107XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfQ0FMTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QuY2FsbCcpIDogMHhlYWM4O1xudmFyIFJFQUNUX1JFVFVSTl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QucmV0dXJuJykgOiAweGVhYzk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBSZWx5aW5nIG9uIHRoZSBgaW52YXJpYW50KClgIGltcGxlbWVudGF0aW9uIGxldHMgdXNcbi8vIGhhdmUgcHJlc2VydmUgdGhlIGZvcm1hdCBhbmQgcGFyYW1zIGluIHRoZSB3d3cgYnVpbGRzLlxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YXJuaW5nKGZhbHNlLCBcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG5cbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogdm9pZCAwO1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcblxuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuXG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7XG4vLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdm9pZCAwO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZyhmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoZmFsc2UsICclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgbm8gaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIgcHJvcHMgPSB7fTtcblxuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuJCR0eXBlb2YgPT09ICd1bmRlZmluZWQnIHx8IHByb3BzLiQkdHlwZW9mICE9PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICAhIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCAlcy4nLCBlbGVtZW50KSA6IHZvaWQgMDtcblxuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB2b2lkIDA7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgdmFsaWQgY29tcG9uZW50LlxuICogQGZpbmFsXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xuXG57XG4gIC8vIENvbXBvbmVudCB0aGF0IGlzIGJlaW5nIHdvcmtlZCBvblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHJldHVybiBpbXBsKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLFxuICAgIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0Zhcik7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQgPSB2b2lkIDA7XG4gIHZhciBuZXh0TmFtZSA9IHZvaWQgMDtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgICFkaWRXYXJuQWJvdXRNYXBzID8gd2FybmluZyhmYWxzZSwgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgbGlrZWx5IHlpZWxkICcgKyAndW5leHBlY3RlZCByZXN1bHRzLiBDb252ZXJ0IGl0IHRvIGEgc2VxdWVuY2UvaXRlcmFibGUgb2Yga2V5ZWQgJyArICdSZWFjdEVsZW1lbnRzIGluc3RlYWQuJXMnLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKSkgOiB2b2lkIDA7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50KGZhbHNlLCAnT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiAlcykuJXMnLCBjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcsIGFkZGVuZHVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsIGJ1dFxuICogbWlnaHQgYWxzbyBiZSBzcGVjaWZpZWQgdGhyb3VnaCBhdHRyaWJ1dGVzOlxuICpcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbiwgLi4uKWBcbiAqIC0gYHRyYXZlcnNlQWxsQ2hpbGRyZW4odGhpcy5wcm9wcy5sZWZ0UGFuZWxDaGlsZHJlbiwgLi4uKWBcbiAqXG4gKiBUaGUgYHRyYXZlcnNlQ29udGV4dGAgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdGhhdCBpcyBwYXNzZWQgdGhyb3VnaCB0aGVcbiAqIGVudGlyZSB0cmF2ZXJzYWwuIEl0IGNhbiBiZSB1c2VkIHRvIHN0b3JlIGFjY3VtdWxhdGlvbnMgb3IgYW55dGhpbmcgZWxzZSB0aGF0XG4gKiB0aGUgY2FsbGJhY2sgbWlnaHQgZmluZCByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIG9iamVjdC5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBUbyBpbnZva2UgdXBvbiB0cmF2ZXJzaW5nIGVhY2ggY2hpbGQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBmb3IgdHJhdmVyc2FsLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldENvbXBvbmVudEtleShjb21wb25lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgY29tcG9uZW50ICE9PSBudWxsICYmIGNvbXBvbmVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHJldHVybiBlc2NhcGUoY29tcG9uZW50LmtleSk7XG4gIH1cbiAgLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcblxuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4uZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChudWxsLCBudWxsLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG5cbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsXG4gICAgICAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICBrZXlQcmVmaXggKyAobWFwcGVkQ2hpbGQua2V5ICYmICghY2hpbGQgfHwgY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gZXNjYXBlVXNlclByb3ZpZGVkS2V5KG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG4gIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgIGVzY2FwZWRQcmVmaXggPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkocHJlZml4KSArICcvJztcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KGFycmF5LCBlc2NhcGVkUHJlZml4LCBmdW5jLCBjb250ZXh0KTtcbiAgdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4ubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsLCBudWxsKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLnRvYXJyYXlcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4ub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpIDogdm9pZCAwO1xuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICAhKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSBudWxsIHx8IHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nKGZhbHNlLCAnY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICBfZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jaGFuZ2VkQml0czogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuXG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgY29udGV4dC5Db25zdW1lciA9IGNvbnRleHQ7XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgICEodHlwZW9mIHJlbmRlciA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpIDogdm9pZCAwO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xufVxuXG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICByZXR1cm4gJ1xcbiAgICBpbiAnICsgKG5hbWUgfHwgJ1Vua25vd24nKSArIChzb3VyY2UgPyAnIChhdCAnICsgc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknIDogb3duZXJOYW1lID8gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknIDogJycpO1xufTtcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZShmaWJlcikge1xuICB2YXIgdHlwZSA9IGZpYmVyLnR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ1JlYWN0RnJhZ21lbnQnO1xuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1JlYWN0UG9ydGFsJztcbiAgICBjYXNlIFJFQUNUX0NBTExfVFlQRTpcbiAgICAgIHJldHVybiAnUmVhY3RDYWxsJztcbiAgICBjYXNlIFJFQUNUX1JFVFVSTl9UWVBFOlxuICAgICAgcmV0dXJuICdSZWFjdFJldHVybic7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHZhciBmdW5jdGlvbk5hbWUgPSB0eXBlLnJlbmRlci5kaXNwbGF5TmFtZSB8fCB0eXBlLnJlbmRlci5uYW1lIHx8ICcnO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/ICdGb3J3YXJkUmVmKCcgKyBmdW5jdGlvbk5hbWUgKyAnKScgOiAnRm9yd2FyZFJlZic7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlYWN0RWxlbWVudFZhbGlkYXRvciBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIGEgZWxlbWVudCBmYWN0b3J5XG4gKiB3aGljaCB2YWxpZGF0ZXMgdGhlIHByb3BzIHBhc3NlZCB0byB0aGUgZWxlbWVudC4gVGhpcyBpcyBpbnRlbmRlZCB0byBiZVxuICogdXNlZCBvbmx5IGluIERFViBhbmQgY291bGQgYmUgcmVwbGFjZWQgYnkgYSBzdGF0aWMgdHlwZSBjaGVja2VyIGZvciBsYW5ndWFnZXNcbiAqIHRoYXQgc3VwcG9ydCBpdC5cbiAqL1xuXG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSB2b2lkIDA7XG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbnZhciBnZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uICgpIHt9O1xudmFyIGdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcblxuICBnZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcjZW1wdHknO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuICcjdGV4dCc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGVsZW1lbnQudHlwZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgcmV0dXJuICdSZWFjdC5GcmFnbWVudCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnR5cGUuZGlzcGxheU5hbWUgfHwgZWxlbWVudC50eXBlLm5hbWUgfHwgJ1Vua25vd24nO1xuICAgIH1cbiAgfTtcblxuICBnZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnO1xuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXREaXNwbGF5TmFtZShjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIpKTtcbiAgICB9XG4gICAgc3RhY2sgKz0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCkgfHwgJyc7XG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudFByb3BzLl9fc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgc291cmNlID0gZWxlbWVudFByb3BzLl9fc291cmNlO1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSAnXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lcikgKyAnLic7XG4gIH1cblxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhbiBhcnJheSBvciBpdGVyYXRvciBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4lcycsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIsIGdldFN0YWNrQWRkZW5kdW0oKSk7XG4gIH1cbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xufVxuXG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHZhciBjb21wb25lbnRDbGFzcyA9IGVsZW1lbnQudHlwZTtcbiAgaWYgKHR5cGVvZiBjb21wb25lbnRDbGFzcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmFtZSA9IGNvbXBvbmVudENsYXNzLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudENsYXNzLm5hbWU7XG4gIHZhciBwcm9wVHlwZXMgPSBjb21wb25lbnRDbGFzcy5wcm9wVHlwZXM7XG4gIGlmIChwcm9wVHlwZXMpIHtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGdldFN0YWNrQWRkZW5kdW0pO1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcbiAgfSBlbHNlIGlmIChjb21wb25lbnRDbGFzcy5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZyhmYWxzZSwgJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIG5hbWUgfHwgJ1Vua25vd24nKTtcbiAgfVxuICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICFjb21wb25lbnRDbGFzcy5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nKGZhbHNlLCAnZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZnJhZ21lbnQ7XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4lcycsIGtleSwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4lcycsIGdldFN0YWNrQWRkZW5kdW0oKSk7XG4gIH1cblxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTtcblxuICAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShwcm9wcyk7XG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICBpbmZvICs9IGdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nKGZhbHNlLCAnUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG4gIC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcbiAge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbnZhciBSZWFjdCA9IHtcbiAgQ2hpbGRyZW46IHtcbiAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIG9ubHk6IG9ubHlDaGlsZFxuICB9LFxuXG4gIGNyZWF0ZVJlZjogY3JlYXRlUmVmLFxuICBDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgUHVyZUNvbXBvbmVudDogUHVyZUNvbXBvbmVudCxcblxuICBjcmVhdGVDb250ZXh0OiBjcmVhdGVDb250ZXh0LFxuICBmb3J3YXJkUmVmOiBmb3J3YXJkUmVmLFxuXG4gIEZyYWdtZW50OiBSRUFDVF9GUkFHTUVOVF9UWVBFLFxuICBTdHJpY3RNb2RlOiBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFLFxuICB1bnN0YWJsZV9Bc3luY01vZGU6IFJFQUNUX0FTWU5DX01PREVfVFlQRSxcblxuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNyZWF0ZUZhY3Rvcnk6IGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbixcbiAgaXNWYWxpZEVsZW1lbnQ6IGlzVmFsaWRFbGVtZW50LFxuXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDoge1xuICAgIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICAgIGFzc2lnbjogX2Fzc2lnblxuICB9XG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG5cblxudmFyIFJlYWN0JDIgPSBPYmplY3QuZnJlZXplKHtcblx0ZGVmYXVsdDogUmVhY3Rcbn0pO1xuXG52YXIgUmVhY3QkMyA9ICggUmVhY3QkMiAmJiBSZWFjdCApIHx8IFJlYWN0JDI7XG5cbi8vIFRPRE86IGRlY2lkZSBvbiB0aGUgdG9wLWxldmVsIGV4cG9ydCBmb3JtLlxuLy8gVGhpcyBpcyBoYWNreSBidXQgbWFrZXMgaXQgd29yayB3aXRoIGJvdGggUm9sbHVwIGFuZCBKZXN0LlxudmFyIHJlYWN0ID0gUmVhY3QkM1snZGVmYXVsdCddID8gUmVhY3QkM1snZGVmYXVsdCddIDogUmVhY3QkMztcblxubW9kdWxlLmV4cG9ydHMgPSByZWFjdDtcbiAgfSkoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9SZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgeyBJQ29udGFjdFVzIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvQ29udGFjdFVzL0lDb250YWN0VXNcIjtcclxuaW1wb3J0IHsgQ29udGFjdFVzQXBpLCBzZW5kRW1haWxDb250YWN0VXMgfSBmcm9tIFwiLi4vLi4vYXBpL2NvbnRhY3R1cy9Db250YWN0VXNBcGlcIjtcclxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2lucHV0XCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbi8vaW1wb3J0IHsgQ29udGFjdFVzRm9ybSB9IGZyb20gXCIuL0NvbnRhY3RVc0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RVcyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgdG9waWM6IHN0cmluZztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0VXNTdGF0ZSB7XHJcbiAgICBjb250YWN0VXM6IElDb250YWN0VXM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0VXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElDb250YWN0VXNTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29udGFjdFVzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzogXCJcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9iaW5kXHJcbiAgICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlID0gdGhpcy5vbkZpZWxkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZW5kRW1haWxCdXR0b25DbGljayA9IHRoaXMuc2VuZEVtYWlsQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRmllbGRDaGFuZ2UoZmllbGROYW1lOiBzdHJpbmcsIGZpZWxkVmFsdWU6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIGNvbnRhY3RVczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0VXMsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogZmllbGRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTsgLy8sICgpID0+IHsgdGhpcy52YWxpZGF0ZUZpZWxkKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRW1haWxCdXR0b25DbGljaygpIHtcclxuXHJcbiAgICAgICAgQ29udGFjdFVzQXBpLnNlbmRFbWFpbENvbnRhY3RVcyh0aGlzLnN0YXRlLmNvbnRhY3RVcylcclxuXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWN0VXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwidGctY29tbWVudGZvcm0gaGVscC1mb3JtXCIgaWQ9XCJ0Zy1jb21tZW50Zm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRnLXNlY3Rpb24taGVhZGluZ1wiPjxoMj5Db250YWN0IEVsaWNpdDwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3RVcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkQ2hhbmdlfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvcGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLnRvcGljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkQ2hhbmdlfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3RVcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3RVcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs4fTwvVGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBjb250YWN0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRFbWFpbEJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TZW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29udGFjdFVzL0NvbnRhY3RVcy50c3giLCJpbXBvcnQgeyBhcGlFeGVjdXRlIH0gZnJvbSBcIi4uL2FwaUV4ZWN1dGVcIjtcclxuaW1wb3J0IHsgSUNvbnRhY3RVcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhY3RVcy9Db250YWN0VXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kRW1haWxDb250YWN0VXMgPSAoZGF0YTogSUNvbnRhY3RVcyk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBzZW5kRW1haWxDb250YWN0VXNVUkwgPSBgL2FwaS9jb250YWN0VXNgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoc2VuZEVtYWlsQ29udGFjdFVzVVJMLCBcIlBPU1RcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhY3RVc0FwaSA9IHtcclxuICAgIHNlbmRFbWFpbENvbnRhY3RVc1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2NvbnRhY3R1cy9Db250YWN0VXNBcGkudHN4IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUV4ZWN1dGUgPSAodXJsOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QodXJsLCBkYXRhLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuZGF0YSksIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F0Y2ggZXJyXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wdXQodXJsLCBkYXRhLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuZGF0YSksIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F0Y2ggZXJyXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5kZWxldGUodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuZGF0YSksIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F0Y2ggZXJyXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9hcGlFeGVjdXRlLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9idXR0b25cIjtcclxuaW1wb3J0IHsgSVByaXZhdGVQb2xpY3kgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9Qcml2YXRlUG9saWN5L0lQcml2YXRlUG9saWN5XCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3lBcGkgfSBmcm9tIFwiLi4vLi4vYXBpL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUFwaVwiO1xyXG5pbXBvcnQgeyBQcml2YXRlUG9saWN5TW9kYWwgfSBmcm9tIFwiLi9Qcml2YXRlUG9saWN5TW9kYWxcIjtcclxuaW1wb3J0IHsgUHJpdmF0ZVBvbGljeUxpc3QgfSBmcm9tIFwiLi9Qcml2YXRlUG9saWN5TGlzdFwiO1xyXG5cclxuLy9cIkJsdWVwcmludFwiIG9yIGludGVyZmFjZSBmb3Igb3VyIE1vZGFsIFN0YXRlXHJcbmludGVyZmFjZSBJUHVibGljUHJpdmFjeU1vZGFsV2luZG93U3RhdGUge1xyXG4gICAgcHJpdmF0ZVBvbGljaWVzRGlzcGxheUl0ZW1zOiBJUHJpdmF0ZVBvbGljeVtdO1xyXG4gICAgc2hvd01vZGFsOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZVBvbGljeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSVB1YmxpY1ByaXZhY3lNb2RhbFdpbmRvd1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcml2YXRlUG9saWNpZXNEaXNwbGF5SXRlbXM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsVG9nZ2xlID0gdGhpcy5tb2RhbFRvZ2dsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW9kYWxUb2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCB9KVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBsb2FkRGF0YUxpc3QoKSB7XHJcbiAgICAgICAgUHJpdmF0ZVBvbGljeUFwaS5nZXRQcml2YXRlUG9saWN5TGlzdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaXZhdGVQb2xpY2llc0Rpc3BsYXlJdGVtczogcmVzcG9uc2UuaXRlbXMgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHsgY29uc29sZS5sb2coXCJlcnJvciFcIiwgZXJyKTsgfSlcclxuICAgIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMubW9kYWxUb2dnbGV9IGNsYXNzTmFtZT1cInByaXZhY3lcIj5Qcml2YWN5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UHJpdmF0ZVBvbGljeU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcml2YXRlUG9saWN5TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhSXRlbXM9e3RoaXMuc3RhdGUucHJpdmF0ZVBvbGljaWVzRGlzcGxheUl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXt0aGlzLmxvYWREYXRhTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qcml2YXRlUG9saWN5TW9kYWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0UG9kY2FzdExpc3QsIHBvc3RQb2RjYXN0TGlzdCwgdXBkYXRlUG9kY2FzdExpc3QsIGRlbGV0ZVBvZGNhc3RMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGkvcG9kY2FzdC9Qb2RjYXN0QXBpXCI7XHJcbmltcG9ydCB7IFBvZGNhc3RGb3JtLCBQb2RjYXN0TGlzdCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IEdyYXlCYW5uZXIgfSBmcm9tIFwiLi4vQmFubmVycy9HcmV5QmFubmVyXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IElQb2RjYXN0TGlzdCB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0ludGVyZmFjZXMvaW5kZXhcIjtcclxuaW1wb3J0IHsgRHJvcERvd25MaXN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb2RjYXN0TGlzdFN0YXRlIHtcclxuICAgIHBvZGNhc3RMaXN0OiBJUG9kY2FzdExpc3Q7XHJcbiAgICBwb2RjYXN0TGlzdEl0ZW1zOiBJUG9kY2FzdExpc3RbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvZGNhc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElQb2RjYXN0TGlzdFN0YXRlPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIHBvZGNhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdERldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0VXBsb2FkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RWaWRlb1VwbG9hZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RQaWN0dXJlVXBsb2FkOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9kY2FzdExpc3RJdGVtczogW10sXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2JpbmQgaGVyZSBwbGVhc2VcclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gdGhpcy5vbkRlbGV0ZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlID0gdGhpcy5vbkZpZWxkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QgPSB0aGlzLmxvYWREYXRhTGlzdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubGlzdEJ1dHRvbkNsaWNrID0gdGhpcy5saXN0QnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsZWFyU3RhdGVBbmRGb3JtID0gdGhpcy5jbGVhclN0YXRlQW5kRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSB0aGlzLmNvbXBvbmVudERpZE1vdW50LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkZpZWxkQ2hhbmdlKGZpZWxkTmFtZTogc3RyaW5nLCBmaWVsZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0OiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvZGNhc3RMaXN0LFxyXG4gICAgICAgICAgICAgICAgW2ZpZWxkTmFtZV06IGZpZWxkVmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0QnV0dG9uQ2xpY2soaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbmR4ID0gdGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGlkKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJlZGl0XCIpIHtcclxuICAgICAgICAgICAgaWYgKG5keCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9kY2FzdExpc3Q6IHRoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtc1tuZHhdIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zLnNwbGljZShuZHgsIDEpXHJcbiAgICAgICAgICAgIGxldCBpdG1zID0gW1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHRoaXMub25EZWxldGVDbGljayhpZCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJTdGF0ZUFuZEZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0OiB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIHBvZGNhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdERldGFpbHM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0VXBsb2FkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RWaWRlb1VwbG9hZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RQaWN0dXJlVXBsb2FkOiBcIlwiLFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9kY2FzdExpc3RJdGVtczogW10sXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgcG9zdFBvZGNhc3RMaXN0KHRoaXMuc3RhdGUucG9kY2FzdExpc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQT1NUXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RhdGVBbmRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHVwZGF0ZVBvZGNhc3RMaXN0KHRoaXMuc3RhdGUucG9kY2FzdExpc3QpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQVVRcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0ZUFuZEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHsgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRlbGV0ZUNsaWNrKGlkKSB7XHJcbiAgICAgICAgZGVsZXRlUG9kY2FzdExpc3QoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KS5jYXRjaCgoZXJyKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZERhdGFMaXN0KCkge1xyXG4gICAgICAgIGdldFBvZGNhc3RMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9kY2FzdExpc3RJdGVtczogcmVzcG9uc2UuaXRlbXMgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KS5jYXRjaCgoZXJyKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZGNhc3RcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Qb2RjYXN0PC9oMj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8cD5DT01JTkcgU09PTiE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgLy9yZXR1cm4gKFxyXG4gICAgICAgIC8vICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgLy8gICAgICAgIDxQb2RjYXN0Rm9ybVxyXG4gICAgICAgIC8vICAgICAgICAgICAgcG9kY2FzdExpc3Q9e3RoaXMuc3RhdGUucG9kY2FzdExpc3R9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkQ2hhbmdlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBvblVwZGF0ZT17dGhpcy5vblVwZGF0ZX1cclxuICAgICAgICAvLyAgICAgICAgLz5cclxuXHJcbiAgICAgICAgLy8gICAgICAgIDxQb2RjYXN0TGlzdFxyXG4gICAgICAgIC8vICAgICAgICAgICAgZGF0YUl0ZW1zPXt0aGlzLnN0YXRlLnBvZGNhc3RMaXN0SXRlbXN9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXt0aGlzLmxpc3RCdXR0b25DbGlja31cclxuICAgICAgICAvLyAgICAgICAgICAgIHNob3dEZWxldGVCdXR0b249e3RydWV9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBzaG93RWRpdEJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgIGhlYWRlckNvbHVtbnM9e1tcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiTmFtZVwiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIkRldGFpbHNcIiwgY29sdW1uU3R5bGU6IFwiYmFzaXMtMjBcIiB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHsgY29sdW1uTmFtZTogXCJVcGxvYWQgVmlkZW9cIiwgY29sdW1uU3R5bGU6IFwiYmFzaXMtMjBcIiB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHsgY29sdW1uTmFtZTogXCJVcGxvYWQgUGljdHVyZVwiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIlVwbG9hZCBEYXRlXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgXX1cclxuICAgICAgICAvLyAgICAgICAgLz5cclxuXHJcbiAgICAgICAgLy8gICAgICAgIDxkaXY+XHJcbiAgICAgICAgLy8gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgIDwvZGl2PlxyXG4gICAgICAgIC8vKVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdC50c3giLCJleHBvcnQgKiBmcm9tIFwiLi9idXR0b25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaW5wdXRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGFzc3dvcmRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZHJvcGRvd25saXN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RleHRhcmVhXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbmRleC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUlucHV0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPntwcm9wcy5lcnJvcn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5jb25zdCBmb3JtYXRXcmFwcGVyQ2xhc3MgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICByZXR1cm4gcHJvcHMuZXJyb3IgPyBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOiB3cmFwcGVyQ2xhc3M7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxufVxyXG5cclxuY29uc3Qgb25LZXlQcmVzcyA9IChwcm9wczogSUlucHV0UHJvcHMpID0+IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZiAocHJvcHMub25FbnRlcikge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkVudGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSBcIi4uL3NyYy9yb3V0ZXJcIjtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHBSb3V0ZXIgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGUsIGJyb3dzZXJIaXN0b3J5LCBJbmRleFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZS9Ib21lXCI7XHJcbmltcG9ydCB7IFBvZGNhc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdFwiO1xyXG5pbXBvcnQgeyBBYm91dFVzUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBSc3NGZWVkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Sc3NGZWVkL1Jzc0ZlZWRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3kgfSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeVwiO1xyXG5pbXBvcnQgeyBDb250YWN0VXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RVcy9Db250YWN0VXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBSb3V0ZXI6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3BvZGNhc3RcIiBjb21wb25lbnQ9e1BvZGNhc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17QWJvdXRVc1BhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yc3NcIiBjb21wb25lbnQ9e1Jzc0ZlZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb250YWN0dXNcIiBjb21wb25lbnQ9e0NvbnRhY3RVc30gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByaXZhdGVwb2xpY3lcIiBjb21wb25lbnQ9e1ByaXZhdGVQb2xpY3l9IC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICBcclxuICAgICAgICA8L1JvdXRlcj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXIudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==