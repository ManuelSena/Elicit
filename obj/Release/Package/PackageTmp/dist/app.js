webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header_header__ = __webpack_require__(108);


var App = function App(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_Header_header__["a" /* Header */], null), props.children);
};

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_FooterContainer__ = __webpack_require__(109);
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

/***/ 109:
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

/***/ 110:
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

/***/ 128:
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

/***/ 129:
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Podcast_index__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AboutUs_AboutUsPage__ = __webpack_require__(60);



//import { ContactUs } from "../ContactUs/ContactUs";
var HomePage = function HomePage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "home hero-image" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "btn contactus", href: "mailto:Manny@elicit.us" }, "Contact Us")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__AboutUs_AboutUsPage__["a" /* AboutUsPage */], null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Podcast_index__["a" /* Podcast */], null)));
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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Podcast__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Podcast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PodcastForm__ = __webpack_require__(133);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PodcastList__ = __webpack_require__(138);
/* unused harmony namespace reexport */




/***/ }),

/***/ 132:
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

/***/ 133:
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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_React__ = __webpack_require__(141);
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

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(142);
} else {
  module.exports = __webpack_require__(143);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 142:
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

/***/ 143:
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

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_contactus_ContactUsApi__ = __webpack_require__(145);
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

/***/ 145:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_PrivatePolicy_PrivatePolicyApi__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PrivatePolicyModal__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PrivatePolicyList__ = __webpack_require__(129);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_api_podcast_PodcastApi__ = __webpack_require__(132);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(134);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(59);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(135);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdownlist__ = __webpack_require__(136);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textarea__ = __webpack_require__(137);
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_aboutus_AboutUsApi__ = __webpack_require__(139);
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
        //    aboutUs={this.state.aboutUsListItems}
        ///>

    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { textAlign: "center", color: "#f8f8ff", width: "100%", padding: "30px 30px", backgroundColor: "#000000" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, " Elicit is dedicated to the creation & maintaining of community connections between groups and individuals whose lives are enmeshed in the Music, Art, and Entertainment Industry. Our priority is to facilitate the support of bands, groups, and people involved in order to spread their creative work and personal message.     We work for the Aspiring and Inspiring."));
        }
    }]);

    return AboutUsPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_router__ = __webpack_require__(72);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__src_router__["a" /* AppRouter */], null), document.getElementById("root"));

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AboutUs_AboutUsPage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_RssFeed_RssFeed__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PrivatePolicy_PrivatePolicy__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ContactUs_ContactUs__ = __webpack_require__(144);









var AppRouter = function AppRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_2__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/home", component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/podcast", component: __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__["a" /* Podcast */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_5__components_AboutUs_AboutUsPage__["a" /* AboutUsPage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/rss", component: __WEBPACK_IMPORTED_MODULE_6__components_RssFeed_RssFeed__["a" /* RssFeed */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/contactus", component: __WEBPACK_IMPORTED_MODULE_8__components_ContactUs_ContactUs__["a" /* ContactUs */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/privatepolicy", component: __WEBPACK_IMPORTED_MODULE_7__components_PrivatePolicy_PrivatePolicy__["a" /* PrivatePolicy */] })));
};

/***/ })

},[62]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeU1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUxpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9idXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vcGFzc3dvcmQudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdExpc3QudHN4Iiwid2VicGFjazovLy8uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUnNzRmVlZC9Sc3NGZWVkLnRzeCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL1JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvUmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvUmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdFVzL0NvbnRhY3RVcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL2NvbnRhY3R1cy9Db250YWN0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2FwaS9hcGlFeGVjdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3QudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3JvdXRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTSxNQUFvQyxTQUFwQyxHQUFvQyxDQUFDLEtBQUQsRUFBVTtBQUV2RCxXQUNJLGtFQUNJLHFEQUFDLHlFQUFELEVBQU8sSUFBUCxDQURKLEVBRUssTUFBTSxRQUZYLENBREo7QUFRSCxDQVZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUVPLElBQU0sTUFBYjtBQUFBOztBQUVJLG9CQUFZLEtBQVosRUFBaUI7QUFBQTs7QUFBQSxvSEFDUCxLQURPOztBQUViLGNBQUssS0FBTCxHQUFhLEVBQWI7QUFGYTtBQUdoQjtBQUVEOzs7QUFQSjtBQUFBO0FBQUEsaUNBUWlCO0FBQ1QsbUJBQ0kscURB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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YXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT57XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vPGRpdiBjbGFzc05hbWU9XCJmaXhlZC10b3BcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAgJSBcIiwgZmxvYXQ6IFwibGVmdFwiLCBwYWRkaW5nOiBcIjMwcHggMFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIiB9fSA+XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ob21lXCIgY2xhc3NOYW1lPVwiZ2xvdyBwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGljaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5MaXN0RGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidG5cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wb2RjYXN0XCIgY2xhc3NOYW1lPVwiYnRuIFwiPlBvZGNhc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwiYnRuIFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yc3NcIiBjbGFzc05hbWU9XCJidG5cIj5SU1MgRmVlZDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdHVzXCIgY2xhc3NOYW1lPVwiYnRuXCI+Q29udGFjdCBVczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJDb250YWluZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjsgXHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3kgfSBmcm9tIFwiLi4vUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXAtZm9vdGVyYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVwLWNvcHlyaWdodFwiIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0+RWxpY2l0IMKpMjAyMCAgfCAgQWxsIFJpZ2h0cyBSZXNlcnZlZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmb290ZXItbmF2IHB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48UHJpdmF0ZVBvbGljeSAvPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckNvbnRhaW5lci50c3giLCJpbXBvcnQgeyBhcGlFeGVjdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGkvYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJUHJpdmF0ZVBvbGljeVBhZ2UgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzL3ByaXZhdGVwb2xpY3kvSVByaXZhdGVQb2xpY3lQYWdlXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCIvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJpdmF0ZVBvbGljeUxpc3QgPSAoKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGdldFVSTCA9IGAke2Jhc2VVUkx9YXBpL3ByaXZhdGVwb2xpY3lgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoZ2V0VVJMLCBcIkdFVFwiLCBudWxsKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFByaXZhdGVQb2xpY3lMaXN0ID0gKGRhdGE6IElQcml2YXRlUG9saWN5UGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwb3N0VVJMID0gYC9hcGkvcHJpdmF0ZXBvbGljeWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwb3N0VVJMLCBcIlBPU1RcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByaXZhdGVQb2xpY3lMaXN0ID0gKGRhdGE6IElQcml2YXRlUG9saWN5UGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9wcml2YXRlcG9saWN5LyR7ZGF0YS5pZH1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocHV0VVJMLCBcIlBVVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUHJpdmF0ZVBvbGljeUxpc3QgPSAoZGF0YTogbnVtYmVyKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGRlbGV0ZVVSTCA9IGAke2Jhc2VVUkx9YXBpL3ByaXZhdGVwb2xpY3kvJHtkYXRhfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShkZWxldGVVUkwsIFwiREVMRVRFXCIsIGRhdGEpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJpdmF0ZVBvbGljeUFwaSA9IHtcclxuICAgIGdldFByaXZhdGVQb2xpY3lMaXN0LCBwb3N0UHJpdmF0ZVBvbGljeUxpc3QsIHVwZGF0ZVByaXZhdGVQb2xpY3lMaXN0LCBkZWxldGVQcml2YXRlUG9saWN5TGlzdFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUFwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByaXZhdGVQb2xpY3lNb2RhbCB7XHJcbiAgICBzaG93TW9kYWw6IGJvb2xlYW47XHJcbiAgICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmF0ZVBvbGljeU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcml2YXRlUG9saWN5TW9kYWwsIHt9PntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJpdmF0ZVBvbGljeU1vZGFsKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnNob3dNb2RhbClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgYmFja2Ryb3BTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjMpJyxcclxuICAgICAgICAgICAgcGFkZGluZzogNTAsXHJcbiAgICAgICAgICAgIHpJbmRleDogOTk5LFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBtb2RhbFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogNTAwLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICAgICAgcGFkZGluZzogMzAsXHJcbiAgICAgICAgICAgIHpJbmRleDogMTAwMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbW9kYWxCb2R5OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogNTAwLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDIwMCxcclxuICAgICAgICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgICAgICAgcGFkZGluZzogMjAsXHJcbiAgICAgICAgICAgIHpJbmRleDogMTAwMSxcclxuLypzY3JvbGxiYXIqL292ZXJmbG93WTogXCJzY3JvbGxcIiBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tkcm9wXCIgc3R5bGU9e2JhY2tkcm9wU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bW9kYWxTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPjxzdHJvbmc+UHJpdmF0ZSBQb2xpY2llczogPC9zdHJvbmc+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbEJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5TW9kYWwudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElQcml2YXRlUG9saWN5LCBJR3JpZFZpZXcgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pbmRleFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcml2YXRlUG9saWN5TGlzdDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4+ID0gKHByb3BzOiBJR3JpZFZpZXc8SVByaXZhdGVQb2xpY3k+KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5oZWFkZXJDb2x1bW5zICE9IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGVhZGVyQ29sdW1ucy5tYXAoKGl0bSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17aXRtLmNvbHVtblN0eWxlfT48c3Ryb25nPntpdG0uY29sdW1uTmFtZX08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKFwiXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7cHJvcHMuZGF0YUl0ZW1zLm1hcChidWlsZFJvdyhwcm9wcykpfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkUm93ID0gKHByb3BzOiBJR3JpZFZpZXc8SVByaXZhdGVQb2xpY3k+KSA9PiAoaXRtOiBJUHJpdmF0ZVBvbGljeSwgbmR4OiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e25keH0+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj48dT48c3Ryb25nPntpdG0ucHJpdmF0ZVBvbGljeU5hbWV9OiA8L3N0cm9uZz48L3U+PC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj57aXRtLnByaXZhdGVQb2xpY3lEZXRhaWxzfTwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5cclxuY29uc3QgYnV0dG9uQ2xpY2sgPSAocHJvcHM6IElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4sIGlkOiBudW1iZXIsIGFjdGlvbjogc3RyaW5nKSA9PiAoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkJ1dHRvbkNsaWNrKGlkLCBhY3Rpb24pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lMaXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQb2RjYXN0IH0gZnJvbSBcIi4uL1BvZGNhc3QvaW5kZXhcIjtcclxuaW1wb3J0IHsgQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vQWJvdXRVcy9BYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBHcmF5QmFubmVyIH0gZnJvbSBcIi4uL0Jhbm5lcnMvR3JleUJhbm5lclwiO1xyXG5pbXBvcnQgeyBBYm91dFVzRm9ybSB9IGZyb20gXCIuLi9BYm91dFVzL0Fib3V0VXNGb3JtXCI7XHJcbi8vaW1wb3J0IHsgQ29udGFjdFVzIH0gZnJvbSBcIi4uL0NvbnRhY3RVcy9Db250YWN0VXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lUGFnZTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZSBoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gY29udGFjdHVzXCIgaHJlZj1cIm1haWx0bzpNYW5ueUBlbGljaXQudXNcIj5Db250YWN0IFVzPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEFib3V0VXNQYWdlIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQb2RjYXN0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbi8vPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy8gICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vZWxpY2l0LnVzL2hhbGZUaG91Z2h0MS5tcDQnXHJcbi8vICAgICAgICBmcmFtZUJvcmRlcj0nMCdcclxuLy8gICAgICAgIC8vYWxsb3c9J2F1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWEnXHJcbi8vICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuLy8gICAgICAgIHRpdGxlPSd2aWRlbydcclxuLy8gICAgLz5cclxuLy88L2Rpdj4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ib21lL0hvbWUudHN4IiwiZXhwb3J0ICogZnJvbSBcIi4vUG9kY2FzdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9Qb2RjYXN0Rm9ybVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9Qb2RjYXN0TGlzdFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9pbmRleC50c3giLCJpbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcbmltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9hcGlFeGVjdXRlXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCIvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9kY2FzdExpc3QgPSAoKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGdldFVSTCA9IGAke2Jhc2VVUkx9YXBpL3BvZGNhc3RgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoZ2V0VVJMLCBcIkdFVFwiLCBudWxsKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFBvZGNhc3RMaXN0ID0gKGRhdGE6IElQb2RjYXN0TGlzdCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwb3N0VVJMID0gYC9hcGkvcG9kY2FzdGA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwb3N0VVJMLCBcIlBPU1RcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBvZGNhc3RMaXN0ID0gKGRhdGE6IElQb2RjYXN0TGlzdCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9wb2RjYXN0LyR7ZGF0YS5pZH1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocHV0VVJMLCBcIlBVVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9kY2FzdExpc3QgPSAoZGF0YTogbnVtYmVyKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGRlbGV0ZVVSTCA9IGAke2Jhc2VVUkx9YXBpL3BvZGNhc3QvJHtkYXRhfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShkZWxldGVVUkwsIFwiREVMRVRFXCIsIGRhdGEpXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGkudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElQb2RjYXN0TGlzdCB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0ludGVyZmFjZXMvaW5kZXhcIjtcclxuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiwgVGV4dGFyZWEgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbmRleFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBJUG9kY2FzdExpc3RGb3JtIHtcclxuICAgIHBvZGNhc3RMaXN0OiBJUG9kY2FzdExpc3Q7XHJcbiAgICBvbkNoYW5nZTogKGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgb25TdWJtaXQ6ICgpID0+IHZvaWQ7XHJcbiAgICBvblVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUG9kY2FzdEZvcm06IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJUG9kY2FzdExpc3RGb3JtPiA9IChwcm9wczogSVBvZGNhc3RMaXN0Rm9ybSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLXNpbmdsZS1jb21wb25lbnRcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWZvcm1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1oZWFkZXIgZ3JleS1iZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Qb2RjYXN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tY29tcG9uZW50LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWhlbHBlci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucG9kY2FzdExpc3QucG9kY2FzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvZGNhc3REZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wb2RjYXN0TGlzdC5wb2RjYXN0RGV0YWlsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwbG9hZCBWaWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9kY2FzdFZpZGVvVXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wb2RjYXN0TGlzdC5wb2RjYXN0VmlkZW9VcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVwbG9hZCBWaWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVcGxvYWQgUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9kY2FzdFBpY3R1cmVVcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3RQaWN0dXJlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVcGxvYWQgUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYW4tYnRuIGFuLWJ0bi1wcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYW4tYnRuIGFuLWJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVcGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0Rm9ybS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUJ1dHRvblByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2J1dHRvbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUlucHV0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYXNzd29yZDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHByb3BzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj57cHJvcHMuZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vcGFzc3dvcmQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElLZXlWYWx1ZSwgSURyb3BEb3duTGlzdFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IGZvcm1hdFdyYXBwZXJDbGFzcyA9IChwcm9wczogSURyb3BEb3duTGlzdFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICByZXR1cm4gcHJvcHMuZXJyb3IgPyBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOiB3cmFwcGVyQ2xhc3M7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IElEcm9wRG93bkxpc3RQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRHJvcERvd25MaXN0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SURyb3BEb3duTGlzdFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5rZXl9IHZhbHVlPXtvcHRpb24ua2V5fT57b3B0aW9uLnZhbHVlfTwvb3B0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3Byb3BzLnNlbGVjdGVkVmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHByb3BzKX0gaWQ9e3Byb3BzLm5hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPntvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2Ryb3Bkb3dubGlzdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVRleHRhcmVhUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRhcmVhOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SVRleHRhcmVhUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtYXRXcmFwcGVyQ2xhc3MocHJvcHMpfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWUgPyAocHJvcHMuY2xhc3NOYW1lICsgXCJmb3JtLWNvbnRyb2xcIikgOiBcImZvcm0tY29udHJvbFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e3Byb3BzLnJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPntwcm9wcy5lcnJvcn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdFdyYXBwZXJDbGFzcyA9IChwcm9wczogSVRleHRhcmVhUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSVRleHRhcmVhUHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBvbkJsdXIgPSAocHJvcHM6IElUZXh0YXJlYVByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcclxuICAgIGlmIChwcm9wcy5vbkJsdXIpIHtcclxuICAgICAgICBwcm9wcy5vbkJsdXIoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS90ZXh0YXJlYS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVBvZGNhc3RMaXN0IH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW50ZXJmYWNlcy9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8VD4ge1xyXG4gICAgZGF0YUl0ZW1zOiBUW107XHJcbiAgICBzaG93RWRpdEJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dEZWxldGVCdXR0b246IGJvb2xlYW47XHJcbiAgICBvbkJ1dHRvbkNsaWNrOiAoaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBoZWFkZXJDb2x1bW5zPzogSUhlYWRlckNvbHVtbltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJDb2x1bW4ge1xyXG4gICAgY29sdW1uTmFtZTogc3RyaW5nO1xyXG4gICAgY29sdW1uU3R5bGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBvZGNhc3RMaXN0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SVBvZGNhc3RMaXN0R3JpZFZpZXdPcHRpb25zPElQb2RjYXN0TGlzdD4+ID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLXNpbmdsZS1jb21wb25lbnQgd2l0aC1zaGFkb3dcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1jb21wb25lbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkxpc3Q6PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1jb21wb25lbnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4taGVscGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIiB9fSAgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmhlYWRlckNvbHVtbnMgIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oZWFkZXJDb2x1bW5zLm1hcCgoaXRtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5PXtpfSBjbGFzc05hbWU9e2l0bS5jb2x1bW5TdHlsZX0+PHN0cm9uZz57aXRtLmNvbHVtbk5hbWV9PC9zdHJvbmc+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YUl0ZW1zLm1hcChidWlsZFJvdyhwcm9wcykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zY3JvbGxiYXIteS1yYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtc2Nyb2xsYmFyLXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBidWlsZFJvdyA9IChwcm9wczogSVBvZGNhc3RMaXN0R3JpZFZpZXdPcHRpb25zPElQb2RjYXN0TGlzdD4pID0+IChpdG06IElQb2RjYXN0TGlzdCwgbmR4OiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRib2R5IGtleT17bmR4fT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0RGV0YWlsc308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0VmlkZW9VcGxvYWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiYXNpcy0yMFwiPntpdG0ucG9kY2FzdFBpY3R1cmVVcGxvYWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiYXNpcy0yMFwiPntpdG0ucG9kY2FzdFVwbG9hZERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiYXNpcy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93RWRpdEJ1dHRvbiA/ICg8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtidXR0b25DbGljayhwcm9wcywgaXRtLmlkLCBcImVkaXRcIil9PkVkaXQ8L2J1dHRvbj4pIDogKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93RGVsZXRlQnV0dG9uID8gKDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFuLWJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17YnV0dG9uQ2xpY2socHJvcHMsIGl0bS5pZCwgXCJkZWxldGVcIil9PkRlbGV0ZTwvYnV0dG9uPikgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBidXR0b25DbGljayA9IChwcm9wczogSVBvZGNhc3RMaXN0R3JpZFZpZXdPcHRpb25zPElQb2RjYXN0TGlzdD4sIGlkOiBudW1iZXIsIGFjdGlvbjogc3RyaW5nKSA9PiAoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkJ1dHRvbkNsaWNrKGlkLCBhY3Rpb24pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0TGlzdC50c3giLCJpbXBvcnQgeyBhcGlFeGVjdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGkvYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzL2Fib3V0dXMvSUFib3V0VXNQYWdlXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCIvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWJvdXRVcyA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvYWJvdXR1c2A7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0QWJvdXRVcyA9IChkYXRhOiBJQWJvdXRVc1BhZ2UpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgcG9zdFVSTCA9IGAvYXBpL2Fib3V0dXNgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocG9zdFVSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVBYm91dFVzID0gKGRhdGE6IElBYm91dFVzUGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9hYm91dHVzLyR7ZGF0YS5pZH1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocHV0VVJMLCBcIlBVVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQWJvdXRVcyA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvYWJvdXR1cy8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2Fib3V0dXMvQWJvdXRVc0FwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwiUmVhY3RcIjtcclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi4vSG9tZS9Ib21lXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJzc0ZlZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgPCB7fSwge30gPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vcHJpdmF0ZSBMb2FkUnNzRmVlZCgpIHtcclxuICAgIC8vICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vaXRlbXNcIilcclxuICAgIC8vICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbiAgICAvLyAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzLnhtbHtcclxuICAgIC8vICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHhtbDogcmVzcG9uc2UuaXRlbXMgfSk7XHJcbiAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgLy8gICAgICAgIH0sIChlcnIpID0+IHsgfSkuY2F0Y2goKGVycikgPT4geyB9KTtcclxuICAgIC8vfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgKSBcclxuICAgICBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUnNzRmVlZC9Sc3NGZWVkLnRzeCIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL1JlYWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4zLjJcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBtPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49cmVxdWlyZShcImZianMvbGliL2ludmFyaWFudFwiKSxwPXJlcXVpcmUoXCJmYmpzL2xpYi9lbXB0eU9iamVjdFwiKSxxPXJlcXVpcmUoXCJmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uXCIpLHI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sW1wiZm9yXCJdLHQ9cj9TeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLHU9cj9TeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsdj1yP1N5bWJvbFtcImZvclwiXShcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LHc9cj9TeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCx4PXI/U3ltYm9sW1wiZm9yXCJdKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDkseT1yP1N5bWJvbFtcImZvclwiXShcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsej1yP1N5bWJvbFtcImZvclwiXShcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsQT1yP1N5bWJvbFtcImZvclwiXShcInJlYWN0LmZvcndhcmRfcmVmXCIpOlxuNjAxMTIsQj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gQyhhKXtmb3IodmFyIGI9YXJndW1lbnRzLmxlbmd0aC0xLGU9XCJodHRwOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50XFx4M2RcIithLGM9MDtjPGI7YysrKWUrPVwiXFx4MjZhcmdzW11cXHgzZFwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbYysxXSk7bighMSxcIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCAlcyBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuIFwiLGUpfXZhciBEPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fTtcbmZ1bmN0aW9uIEUoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9cDt0aGlzLnVwZGF0ZXI9ZXx8RH1FLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0UucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YT9DKFwiODVcIik6dm9pZCAwO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRigpe31GLnByb3RvdHlwZT1FLnByb3RvdHlwZTtmdW5jdGlvbiBHKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPXA7dGhpcy51cGRhdGVyPWV8fER9dmFyIEg9Ry5wcm90b3R5cGU9bmV3IEY7XG5ILmNvbnN0cnVjdG9yPUc7bShILEUucHJvdG90eXBlKTtILmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBJPXtjdXJyZW50Om51bGx9LEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxLPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBMKGEsYixlKXt2YXIgYz12b2lkIDAsZD17fSxnPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGMgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGc9XCJcIitiLmtleSksYilKLmNhbGwoYixjKSYmIUsuaGFzT3duUHJvcGVydHkoYykmJihkW2NdPWJbY10pO3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZilkLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGYpe2Zvcih2YXIgaz1BcnJheShmKSxsPTA7bDxmO2wrKylrW2xdPWFyZ3VtZW50c1tsKzJdO2QuY2hpbGRyZW49a31pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoYyBpbiBmPWEuZGVmYXVsdFByb3BzLGYpdm9pZCAwPT09ZFtjXSYmKGRbY109ZltjXSk7cmV0dXJueyQkdHlwZW9mOnQsdHlwZTphLGtleTpnLHJlZjpoLHByb3BzOmQsX293bmVyOkkuY3VycmVudH19XG5mdW5jdGlvbiBNKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT10fWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCJcXHgzZFwiOlwiXFx4M2QwXCIsXCI6XCI6XCJcXHgzZDJcIn07cmV0dXJuXCIkXCIrKFwiXCIrYSkucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE49L1xcLysvZyxPPVtdO2Z1bmN0aW9uIFAoYSxiLGUsYyl7aWYoTy5sZW5ndGgpe3ZhciBkPU8ucG9wKCk7ZC5yZXN1bHQ9YTtkLmtleVByZWZpeD1iO2QuZnVuYz1lO2QuY29udGV4dD1jO2QuY291bnQ9MDtyZXR1cm4gZH1yZXR1cm57cmVzdWx0OmEsa2V5UHJlZml4OmIsZnVuYzplLGNvbnRleHQ6Yyxjb3VudDowfX1mdW5jdGlvbiBRKGEpe2EucmVzdWx0PW51bGw7YS5rZXlQcmVmaXg9bnVsbDthLmZ1bmM9bnVsbDthLmNvbnRleHQ9bnVsbDthLmNvdW50PTA7MTA+Ty5sZW5ndGgmJk8ucHVzaChhKX1cbmZ1bmN0aW9uIFIoYSxiLGUsYyl7dmFyIGQ9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWR8fFwiYm9vbGVhblwiPT09ZClhPW51bGw7dmFyIGc9ITE7aWYobnVsbD09PWEpZz0hMDtlbHNlIHN3aXRjaChkKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmc9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHQ6Y2FzZSB1Omc9ITB9fWlmKGcpcmV0dXJuIGUoYyxhLFwiXCI9PT1iP1wiLlwiK1MoYSwwKTpiKSwxO2c9MDtiPVwiXCI9PT1iP1wiLlwiOmIrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGg9MDtoPGEubGVuZ3RoO2grKyl7ZD1hW2hdO3ZhciBmPWIrUyhkLGgpO2crPVIoZCxmLGUsYyl9ZWxzZSBpZihudWxsPT09YXx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhP2Y9bnVsbDooZj1CJiZhW0JdfHxhW1wiQEBpdGVyYXRvclwiXSxmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBmP2Y6bnVsbCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLFxuaD0wOyEoZD1hLm5leHQoKSkuZG9uZTspZD1kLnZhbHVlLGY9YitTKGQsaCsrKSxnKz1SKGQsZixlLGMpO2Vsc2VcIm9iamVjdFwiPT09ZCYmKGU9XCJcIithLEMoXCIzMVwiLFwiW29iamVjdCBPYmplY3RdXCI9PT1lP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmUsXCJcIikpO3JldHVybiBnfWZ1bmN0aW9uIFMoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoYS5rZXkpOmIudG9TdHJpbmcoMzYpfWZ1bmN0aW9uIFQoYSxiKXthLmZ1bmMuY2FsbChhLmNvbnRleHQsYixhLmNvdW50KyspfVxuZnVuY3Rpb24gVShhLGIsZSl7dmFyIGM9YS5yZXN1bHQsZD1hLmtleVByZWZpeDthPWEuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyk7QXJyYXkuaXNBcnJheShhKT9WKGEsYyxlLHEudGhhdFJldHVybnNBcmd1bWVudCk6bnVsbCE9YSYmKE0oYSkmJihiPWQrKCFhLmtleXx8YiYmYi5rZXk9PT1hLmtleT9cIlwiOihcIlwiK2Eua2V5KS5yZXBsYWNlKE4sXCIkXFx4MjYvXCIpK1wiL1wiKStlLGE9eyQkdHlwZW9mOnQsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfSksYy5wdXNoKGEpKX1mdW5jdGlvbiBWKGEsYixlLGMsZCl7dmFyIGc9XCJcIjtudWxsIT1lJiYoZz0oXCJcIitlKS5yZXBsYWNlKE4sXCIkXFx4MjYvXCIpK1wiL1wiKTtiPVAoYixnLGMsZCk7bnVsbD09YXx8UihhLFwiXCIsVSxiKTtRKGIpfVxudmFyIFc9e0NoaWxkcmVuOnttYXA6ZnVuY3Rpb24oYSxiLGUpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGM9W107VihhLGMsbnVsbCxiLGUpO3JldHVybiBjfSxmb3JFYWNoOmZ1bmN0aW9uKGEsYixlKXtpZihudWxsPT1hKXJldHVybiBhO2I9UChudWxsLG51bGwsYixlKTtudWxsPT1hfHxSKGEsXCJcIixULGIpO1EoYil9LGNvdW50OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hPzA6UihhLFwiXCIscS50aGF0UmV0dXJuc051bGwsbnVsbCl9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7dmFyIGI9W107VihhLGIsbnVsbCxxLnRoYXRSZXR1cm5zQXJndW1lbnQpO3JldHVybiBifSxvbmx5OmZ1bmN0aW9uKGEpe00oYSk/dm9pZCAwOkMoXCIxNDNcIik7cmV0dXJuIGF9fSxjcmVhdGVSZWY6ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX0sQ29tcG9uZW50OkUsUHVyZUNvbXBvbmVudDpHLGNyZWF0ZUNvbnRleHQ6ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjp5LFxuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsX2RlZmF1bHRWYWx1ZTphLF9jdXJyZW50VmFsdWU6YSxfY2hhbmdlZEJpdHM6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOngsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX0sZm9yd2FyZFJlZjpmdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6QSxyZW5kZXI6YX19LEZyYWdtZW50OnYsU3RyaWN0TW9kZTp3LHVuc3RhYmxlX0FzeW5jTW9kZTp6LGNyZWF0ZUVsZW1lbnQ6TCxjbG9uZUVsZW1lbnQ6ZnVuY3Rpb24oYSxiLGUpe251bGw9PT1hfHx2b2lkIDA9PT1hP0MoXCIyNjdcIixhKTp2b2lkIDA7dmFyIGM9dm9pZCAwLGQ9bSh7fSxhLnByb3BzKSxnPWEua2V5LGg9YS5yZWYsZj1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYsZj1JLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KTt2YXIgaz12b2lkIDA7YS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzJiZcbihrPWEudHlwZS5kZWZhdWx0UHJvcHMpO2ZvcihjIGluIGIpSi5jYWxsKGIsYykmJiFLLmhhc093blByb3BlcnR5KGMpJiYoZFtjXT12b2lkIDA9PT1iW2NdJiZ2b2lkIDAhPT1rP2tbY106YltjXSl9Yz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWMpZC5jaGlsZHJlbj1lO2Vsc2UgaWYoMTxjKXtrPUFycmF5KGMpO2Zvcih2YXIgbD0wO2w8YztsKyspa1tsXT1hcmd1bWVudHNbbCsyXTtkLmNoaWxkcmVuPWt9cmV0dXJueyQkdHlwZW9mOnQsdHlwZTphLnR5cGUsa2V5OmcscmVmOmgscHJvcHM6ZCxfb3duZXI6Zn19LGNyZWF0ZUZhY3Rvcnk6ZnVuY3Rpb24oYSl7dmFyIGI9TC5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9LGlzVmFsaWRFbGVtZW50Ok0sdmVyc2lvbjpcIjE2LjMuMlwiLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOntSZWFjdEN1cnJlbnRPd25lcjpJLGFzc2lnbjptfX0sWD1PYmplY3QuZnJlZXplKHtkZWZhdWx0Old9KSxcblk9WCYmV3x8WDttb2R1bGUuZXhwb3J0cz1ZW1wiZGVmYXVsdFwiXT9ZW1wiZGVmYXVsdFwiXTpZO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL1JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMy4yXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBlbXB0eU9iamVjdCA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5T2JqZWN0Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi4zLjInO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sWydmb3InXTtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9DQUxMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5jYWxsJykgOiAweGVhYzg7XG52YXIgUkVBQ1RfUkVUVVJOX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5yZXR1cm4nKSA6IDB4ZWFjOTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcblxuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIFJlbHlpbmcgb24gdGhlIGBpbnZhcmlhbnQoKWAgaW1wbGVtZW50YXRpb24gbGV0cyB1c1xuLy8gaGF2ZSBwcmVzZXJ2ZSB0aGUgZm9ybWF0IGFuZCBwYXJhbXMgaW4gdGhlIHd3dyBidWlsZHMuXG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmc7XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdhcm5pbmcoZmFsc2UsIFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICAhKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJykgOiB2b2lkIDA7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuXG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG5cbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbi8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xuXG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuICAgICAgd2FybmluZyhmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBubyBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQGludGVybmFsXG4gKi9cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG5cbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG5cbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307XG5cbiAgICAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTtcbiAgICAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7XG4gICAgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlO1xuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcy4kJHR5cGVvZiA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcHMuJCR0eXBlb2YgIT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgUmVhY3RFbGVtZW50cyBvZiBhIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWZhY3RvcnlcbiAqL1xuXG5cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcblxuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICEhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSA/IGludmFyaWFudChmYWxzZSwgJ1JlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkICVzLicsIGVsZW1lbnQpIDogdm9pZCAwO1xuXG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHZvaWQgMDtcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSB2YWxpZCBjb21wb25lbnQuXG4gKiBAZmluYWxcbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG5cbntcbiAgLy8gQ29tcG9uZW50IHRoYXQgaXMgYmVpbmcgd29ya2VkIG9uXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcbiAgICBpZiAoaW1wbCkge1xuICAgICAgcmV0dXJuIGltcGwoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuXG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcblxuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cblxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcblxudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoIDwgUE9PTF9TSVpFKSB7XG4gICAgdHJhdmVyc2VDb250ZXh0UG9vbC5wdXNoKHRyYXZlcnNlQ29udGV4dCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHZvaWQgMDtcbiAgdmFyIG5leHROYW1lID0gdm9pZCAwO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgIWRpZFdhcm5BYm91dE1hcHMgPyB3YXJuaW5nKGZhbHNlLCAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICsgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4lcycsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpKSA6IHZvaWQgMDtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4uY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbiwgY29udGV4dCkge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwsIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4udG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAhaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJykgOiB2b2lkIDA7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgICEoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IG51bGwgfHwgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nKSA/IHdhcm5pbmcoZmFsc2UsICdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykgOiB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIF9kZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2NoYW5nZWRCaXRzOiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG5cbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICBjb250ZXh0LkNvbnN1bWVyID0gY29udGV4dDtcblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgISh0eXBlb2YgcmVuZGVyID09PSAnZnVuY3Rpb24nKSA/IHdhcm5pbmcoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcikgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbnZhciBkZXNjcmliZUNvbXBvbmVudEZyYW1lID0gZnVuY3Rpb24gKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgKHNvdXJjZSA/ICcgKGF0ICcgKyBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKScgOiBvd25lck5hbWUgPyAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKScgOiAnJyk7XG59O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKGZpYmVyKSB7XG4gIHZhciB0eXBlID0gZmliZXIudHlwZTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnUmVhY3RGcmFnbWVudCc7XG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUmVhY3RQb3J0YWwnO1xuICAgIGNhc2UgUkVBQ1RfQ0FMTF9UWVBFOlxuICAgICAgcmV0dXJuICdSZWFjdENhbGwnO1xuICAgIGNhc2UgUkVBQ1RfUkVUVVJOX1RZUEU6XG4gICAgICByZXR1cm4gJ1JlYWN0UmV0dXJuJztcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IHR5cGUucmVuZGVyLmRpc3BsYXlOYW1lIHx8IHR5cGUucmVuZGVyLm5hbWUgfHwgJyc7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gJ0ZvcndhcmRSZWYoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6ICdGb3J3YXJkUmVmJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICogdGhhdCBzdXBwb3J0IGl0LlxuICovXG5cbnZhciBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IHZvaWQgMDtcbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHZvaWQgMDtcblxudmFyIGdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gKCkge307XG52YXIgZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xuXG4gIGdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyNlbXB0eSc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsZW1lbnQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gJyN0ZXh0JztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC50eXBlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC50eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICByZXR1cm4gJ1JlYWN0LkZyYWdtZW50JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQudHlwZS5kaXNwbGF5TmFtZSB8fCBlbGVtZW50LnR5cGUubmFtZSB8fCAnVW5rbm93bic7XG4gICAgfVxuICB9O1xuXG4gIGdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldERpc3BsYXlOYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lcikpO1xuICAgIH1cbiAgICBzdGFjayArPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50UHJvcHMuX19zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzb3VyY2UgPSBlbGVtZW50UHJvcHMuX19zb3VyY2U7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9ICdcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDwnICsgcGFyZW50TmFtZSArICc+Lic7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuXG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlO1xuXG4gIC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSAnIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tICcgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyKSArICcuJztcbiAgfVxuXG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAge1xuICAgIHdhcm5pbmcoZmFsc2UsICdFYWNoIGNoaWxkIGluIGFuIGFycmF5IG9yIGl0ZXJhdG9yIHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLiVzJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lciwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgfVxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENsYXNzID0gZWxlbWVudC50eXBlO1xuICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuYW1lID0gY29tcG9uZW50Q2xhc3MuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Q2xhc3MubmFtZTtcbiAgdmFyIHByb3BUeXBlcyA9IGNvbXBvbmVudENsYXNzLnByb3BUeXBlcztcbiAgaWYgKHByb3BUeXBlcykge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGNvbXBvbmVudENsYXNzLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgIWNvbXBvbmVudENsYXNzLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA/IHdhcm5pbmcoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBmcmFnbWVudDtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLiVzJywga2V5LCBnZXRTdGFja0FkZGVuZHVtKCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmcoZmFsc2UsICdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiVzJywgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgfVxuXG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpO1xuXG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIGluZm8gKz0gZ2V0U3RhY2tBZGRlbmR1bSgpIHx8ICcnO1xuXG4gICAgdmFyIHR5cGVTdHJpbmcgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHdhcm5pbmcoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgY3JlYXRlUmVmOiBjcmVhdGVSZWYsXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIGZvcndhcmRSZWY6IGZvcndhcmRSZWYsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIHVuc3RhYmxlX0FzeW5jTW9kZTogUkVBQ1RfQVNZTkNfTU9ERV9UWVBFLFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uLFxuICBpc1ZhbGlkRWxlbWVudDogaXNWYWxpZEVsZW1lbnQsXG5cbiAgdmVyc2lvbjogUmVhY3RWZXJzaW9uLFxuXG4gIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOiB7XG4gICAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICAgIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gICAgYXNzaWduOiBfYXNzaWduXG4gIH1cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCwge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cblxuXG52YXIgUmVhY3QkMiA9IE9iamVjdC5mcmVlemUoe1xuXHRkZWZhdWx0OiBSZWFjdFxufSk7XG5cbnZhciBSZWFjdCQzID0gKCBSZWFjdCQyICYmIFJlYWN0ICkgfHwgUmVhY3QkMjtcblxuLy8gVE9ETzogZGVjaWRlIG9uIHRoZSB0b3AtbGV2ZWwgZXhwb3J0IGZvcm0uXG4vLyBUaGlzIGlzIGhhY2t5IGJ1dCBtYWtlcyBpdCB3b3JrIHdpdGggYm90aCBSb2xsdXAgYW5kIEplc3QuXG52YXIgcmVhY3QgPSBSZWFjdCQzWydkZWZhdWx0J10gPyBSZWFjdCQzWydkZWZhdWx0J10gOiBSZWFjdCQzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWN0O1xuICB9KSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL1JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCB7IElDb250YWN0VXMgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9Db250YWN0VXMvSUNvbnRhY3RVc1wiO1xyXG5pbXBvcnQgeyBDb250YWN0VXNBcGksIHNlbmRFbWFpbENvbnRhY3RVcyB9IGZyb20gXCIuLi8uLi9hcGkvY29udGFjdHVzL0NvbnRhY3RVc0FwaVwiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4XCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuLy9pbXBvcnQgeyBDb250YWN0VXNGb3JtIH0gZnJvbSBcIi4vQ29udGFjdFVzRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdFVzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICB0b3BpYzogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RVc1N0YXRlIHtcclxuICAgIGNvbnRhY3RVczogSUNvbnRhY3RVcztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RVcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSUNvbnRhY3RVc1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb250YWN0VXM6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRvcGljOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2JpbmRcclxuICAgICAgICB0aGlzLm9uRmllbGRDaGFuZ2UgPSB0aGlzLm9uRmllbGRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlbmRFbWFpbEJ1dHRvbkNsaWNrID0gdGhpcy5zZW5kRW1haWxCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GaWVsZENoYW5nZShmaWVsZE5hbWU6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgY29udGFjdFVzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmNvbnRhY3RVcyxcclxuICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZFZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpOyAvLywgKCkgPT4geyB0aGlzLnZhbGlkYXRlRmllbGQoZmllbGROYW1lLCBmaWVsZFZhbHVlKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRFbWFpbEJ1dHRvbkNsaWNrKCkge1xyXG5cclxuICAgICAgICBDb250YWN0VXNBcGkuc2VuZEVtYWlsQ29udGFjdFVzKHRoaXMuc3RhdGUuY29udGFjdFVzKVxyXG5cclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RVczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJ0Zy1jb21tZW50Zm9ybSBoZWxwLWZvcm1cIiBpZD1cInRnLWNvbW1lbnRmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGctc2VjdGlvbi1oZWFkaW5nXCI+PGgyPkNvbnRhY3QgRWxpY2l0PC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9waWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb250YWN0VXMudG9waWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9PC9UZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGNvbnRhY3R1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VuZEVtYWlsQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db250YWN0VXMvQ29udGFjdFVzLnRzeCIsImltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJQ29udGFjdFVzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFjdFVzL0NvbnRhY3RVc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbENvbnRhY3RVcyA9IChkYXRhOiBJQ29udGFjdFVzKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHNlbmRFbWFpbENvbnRhY3RVc1VSTCA9IGAvYXBpL2NvbnRhY3RVc2A7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShzZW5kRW1haWxDb250YWN0VXNVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdFVzQXBpID0ge1xyXG4gICAgc2VuZEVtYWlsQ29udGFjdFVzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvY29udGFjdHVzL0NvbnRhY3RVc0FwaS50c3giLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpRXhlY3V0ZSA9ICh1cmw6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuZGF0YSksIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F0Y2ggZXJyXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsIGRhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnB1dCh1cmwsIGRhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2FwaUV4ZWN1dGUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBJUHJpdmF0ZVBvbGljeSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL1ByaXZhdGVQb2xpY3kvSVByaXZhdGVQb2xpY3lcIjtcclxuaW1wb3J0IHsgUHJpdmF0ZVBvbGljeUFwaSB9IGZyb20gXCIuLi8uLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpXCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3lNb2RhbCB9IGZyb20gXCIuL1ByaXZhdGVQb2xpY3lNb2RhbFwiO1xyXG5pbXBvcnQgeyBQcml2YXRlUG9saWN5TGlzdCB9IGZyb20gXCIuL1ByaXZhdGVQb2xpY3lMaXN0XCI7XHJcblxyXG4vL1wiQmx1ZXByaW50XCIgb3IgaW50ZXJmYWNlIGZvciBvdXIgTW9kYWwgU3RhdGVcclxuaW50ZXJmYWNlIElQdWJsaWNQcml2YWN5TW9kYWxXaW5kb3dTdGF0ZSB7XHJcbiAgICBwcml2YXRlUG9saWNpZXNEaXNwbGF5SXRlbXM6IElQcml2YXRlUG9saWN5W107XHJcbiAgICBzaG93TW9kYWw6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlUG9saWN5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJUHVibGljUHJpdmFjeU1vZGFsV2luZG93U3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByaXZhdGVQb2xpY2llc0Rpc3BsYXlJdGVtczogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWxUb2dnbGUgPSB0aGlzLm1vZGFsVG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb2RhbFRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGxvYWREYXRhTGlzdCgpIHtcclxuICAgICAgICBQcml2YXRlUG9saWN5QXBpLmdldFByaXZhdGVQb2xpY3lMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpdmF0ZVBvbGljaWVzRGlzcGxheUl0ZW1zOiByZXNwb25zZS5pdGVtcyB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmxvZyhcImVycm9yIVwiLCBlcnIpOyB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5tb2RhbFRvZ2dsZX0gY2xhc3NOYW1lPVwicHJpdmFjeVwiPlByaXZhY3k8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxQcml2YXRlUG9saWN5TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaXZhdGVQb2xpY3lMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJdGVtcz17dGhpcy5zdGF0ZS5wcml2YXRlUG9saWNpZXNEaXNwbGF5SXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQnV0dG9uQ2xpY2s9e3RoaXMubG9hZERhdGFMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1ByaXZhdGVQb2xpY3lNb2RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRQb2RjYXN0TGlzdCwgcG9zdFBvZGNhc3RMaXN0LCB1cGRhdGVQb2RjYXN0TGlzdCwgZGVsZXRlUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGlcIjtcclxuaW1wb3J0IHsgUG9kY2FzdEZvcm0sIFBvZGNhc3RMaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgR3JheUJhbm5lciB9IGZyb20gXCIuLi9CYW5uZXJzL0dyZXlCYW5uZXJcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuaW1wb3J0IHsgSVBvZGNhc3RMaXN0IH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW50ZXJmYWNlcy9pbmRleFwiO1xyXG5pbXBvcnQgeyBEcm9wRG93bkxpc3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9kcm9wZG93bmxpc3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvZGNhc3RMaXN0U3RhdGUge1xyXG4gICAgcG9kY2FzdExpc3Q6IElQb2RjYXN0TGlzdDtcclxuICAgIHBvZGNhc3RMaXN0SXRlbXM6IElQb2RjYXN0TGlzdFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9kY2FzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSVBvZGNhc3RMaXN0U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcG9kY2FzdExpc3Q6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0RGV0YWlsczogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RVcGxvYWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFZpZGVvVXBsb2FkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFBpY3R1cmVVcGxvYWQ6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdEl0ZW1zOiBbXSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYmluZCBoZXJlIHBsZWFzZVxyXG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSB0aGlzLm9uRGVsZXRlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRmllbGRDaGFuZ2UgPSB0aGlzLm9uRmllbGRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCA9IHRoaXMubG9hZERhdGFMaXN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5saXN0QnV0dG9uQ2xpY2sgPSB0aGlzLmxpc3RCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdGF0ZUFuZEZvcm0gPSB0aGlzLmNsZWFyU3RhdGVBbmRGb3JtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IHRoaXMuY29tcG9uZW50RGlkTW91bnQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRmllbGRDaGFuZ2UoZmllbGROYW1lOiBzdHJpbmcsIGZpZWxkVmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgcG9kY2FzdExpc3Q6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucG9kY2FzdExpc3QsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogZmllbGRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxpc3RCdXR0b25DbGljayhpZDogbnVtYmVyLCBhY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIGxldCBuZHggPSB0aGlzLnN0YXRlLnBvZGNhc3RMaXN0SXRlbXMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aW9uID09PSBcImVkaXRcIikge1xyXG4gICAgICAgICAgICBpZiAobmR4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb2RjYXN0TGlzdDogdGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zW25keF0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJkZWxldGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBvZGNhc3RMaXN0SXRlbXMuc3BsaWNlKG5keCwgMSlcclxuICAgICAgICAgICAgbGV0IGl0bXMgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvZGNhc3RMaXN0SXRlbXNcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrKGlkKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhclN0YXRlQW5kRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcG9kY2FzdExpc3Q6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0RGV0YWlsczogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RVcGxvYWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFZpZGVvVXBsb2FkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFBpY3R1cmVVcGxvYWQ6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdEl0ZW1zOiBbXSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblN1Ym1pdCgpIHtcclxuICAgICAgICBwb3N0UG9kY2FzdExpc3QodGhpcy5zdGF0ZS5wb2RjYXN0TGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBPU1RcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0ZUFuZEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdXBkYXRlUG9kY2FzdExpc3QodGhpcy5zdGF0ZS5wb2RjYXN0TGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBVVFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0YXRlQW5kRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRGVsZXRlQ2xpY2soaWQpIHtcclxuICAgICAgICBkZWxldGVQb2RjYXN0TGlzdChpZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7IH0pLmNhdGNoKChlcnIpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkRGF0YUxpc3QoKSB7XHJcbiAgICAgICAgZ2V0UG9kY2FzdExpc3QoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb2RjYXN0TGlzdEl0ZW1zOiByZXNwb25zZS5pdGVtcyB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7IH0pLmNhdGNoKChlcnIpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9kY2FzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlBvZGNhc3Q8L2gyPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwPkNPTUlORyBTT09OITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAvL3JldHVybiAoXHJcbiAgICAgICAgLy8gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAvLyAgICAgICAgPFBvZGNhc3RGb3JtXHJcbiAgICAgICAgLy8gICAgICAgICAgICBwb2RjYXN0TGlzdD17dGhpcy5zdGF0ZS5wb2RjYXN0TGlzdH1cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uVXBkYXRlPXt0aGlzLm9uVXBkYXRlfVxyXG4gICAgICAgIC8vICAgICAgICAvPlxyXG5cclxuICAgICAgICAvLyAgICAgICAgPFBvZGNhc3RMaXN0XHJcbiAgICAgICAgLy8gICAgICAgICAgICBkYXRhSXRlbXM9e3RoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtc31cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uQnV0dG9uQ2xpY2s9e3RoaXMubGlzdEJ1dHRvbkNsaWNrfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgc2hvd0RlbGV0ZUJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgIHNob3dFZGl0QnV0dG9uPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgaGVhZGVyQ29sdW1ucz17W1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHsgY29sdW1uTmFtZTogXCJOYW1lXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiRGV0YWlsc1wiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIlVwbG9hZCBWaWRlb1wiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIlVwbG9hZCBQaWN0dXJlXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiVXBsb2FkIERhdGVcIiwgY29sdW1uU3R5bGU6IFwiYmFzaXMtMjBcIiB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBdfVxyXG4gICAgICAgIC8vICAgICAgICAvPlxyXG5cclxuICAgICAgICAvLyAgICAgICAgPGRpdj5cclxuICAgICAgICAvLyAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgPC9kaXY+XHJcbiAgICAgICAgLy8pXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0LnRzeCIsImV4cG9ydCAqIGZyb20gXCIuL2J1dHRvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbnB1dFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYXNzd29yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kcm9wZG93bmxpc3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dGFyZWFcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dChwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+e3Byb3BzLmVycm9yfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdFdyYXBwZXJDbGFzcyA9IChwcm9wczogSUlucHV0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSUlucHV0UHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBvbktleVByZXNzID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGlmIChwcm9wcy5vbkVudGVyKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uRW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbnB1dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuaW1wb3J0IHsgSUFib3V0VXNQYWdlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvYWJvdXR1cy9JQWJvdXRVc1BhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0QWJvdXRVcyB9IGZyb20gXCIuLi8uLi9hcGkvYWJvdXR1cy9BYm91dFVzQXBpXCI7XHJcbmltcG9ydCB7IEFib3V0VXNGb3JtIH0gZnJvbSBcIi4vQWJvdXRVc0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFib3V0VXNTdGF0ZSB7XHJcbiAgICBhYm91dFVzUGFnZVN0YXRlOiBJQWJvdXRVc1BhZ2U7XHJcbiAgICBhYm91dFVzTGlzdEl0ZW1zOiBJQWJvdXRVc1BhZ2VbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFib3V0VXNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJQWJvdXRVc1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhYm91dFVzUGFnZVN0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIGFib3V0VXNTdW1tYXJ5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRVc1BpY3R1cmU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dFRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXROaWNrbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0QmlvOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRJbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dEZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRMaW5rZWRJbjogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0RW1haWxDb250YWN0OiBcIlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhYm91dFVzTGlzdEl0ZW1zOiBbXSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZERhdGEgPSB0aGlzLmxvYWREYXRhLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgZ2V0QWJvdXRVcygpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFib3V0VXNMaXN0SXRlbXM6IHJlc3BvbnNlLml0ZW1zIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy88QWJvdXRVc0Zvcm1cclxuICAgICAgICAgICAgICAgIC8vICAgIGFib3V0VXM9e3RoaXMuc3RhdGUuYWJvdXRVc0xpc3RJdGVtc31cclxuICAgICAgICAgICAgICAgIC8vLz5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcIiNmOGY4ZmZcIiwgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjMwcHggMzBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMFwiIH19PlxyXG4gICAgICAgICAgICAgICA8cD4gRWxpY2l0IGlzIGRlZGljYXRlZCB0byB0aGUgY3JlYXRpb24gJiBtYWludGFpbmluZyBvZiBjb21tdW5pdHkgY29ubmVjdGlvbnMgYmV0d2VlbiBncm91cHMgYW5kIGluZGl2aWR1YWxzIHdob3NlIGxpdmVzIGFyZSBlbm1lc2hlZCBpbiB0aGUgTXVzaWMsIEFydCwgYW5kIEVudGVydGFpbm1lbnQgSW5kdXN0cnkuIE91ciBwcmlvcml0eSBpcyB0byBmYWNpbGl0YXRlIHRoZSBzdXBwb3J0IG9mIGJhbmRzLCBncm91cHMsIGFuZCBwZW9wbGUgaW52b2x2ZWQgaW4gb3JkZXIgdG8gc3ByZWFkIHRoZWlyIGNyZWF0aXZlIHdvcmsgYW5kIHBlcnNvbmFsIG1lc3NhZ2UuICAgICBXZSB3b3JrIGZvciB0aGUgQXNwaXJpbmcgYW5kIEluc3BpcmluZy5cclxuICAgIDwvcD5cclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Fib3V0VXMvQWJvdXRVc1BhZ2UudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSBcIi4uL3NyYy9yb3V0ZXJcIjtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHBSb3V0ZXIgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGUsIGJyb3dzZXJIaXN0b3J5LCBJbmRleFJvdXRlLCBSb3V0ZXIsIGhhc2hIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9hcHBcIjtcclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgeyBQb2RjYXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RcIjtcclxuaW1wb3J0IHsgQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fib3V0VXMvQWJvdXRVc1BhZ2VcIjtcclxuaW1wb3J0IHsgUnNzRmVlZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvUnNzRmVlZC9Sc3NGZWVkXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBQcml2YXRlUG9saWN5IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lcIjtcclxuaW1wb3J0IHsgQ29udGFjdFVzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Db250YWN0VXMvQ29udGFjdFVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwUm91dGVyOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxyXG4gICAgICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9kY2FzdFwiIGNvbXBvbmVudD17UG9kY2FzdH0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dFVzUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jzc1wiIGNvbXBvbmVudD17UnNzRmVlZH0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbnRhY3R1c1wiIGNvbXBvbmVudD17Q29udGFjdFVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJpdmF0ZXBvbGljeVwiIGNvbXBvbmVudD17UHJpdmF0ZVBvbGljeX0gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JvdXRlci50c3giXSwic291cmNlUm9vdCI6IiJ9