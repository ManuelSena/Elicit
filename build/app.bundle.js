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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(23);
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
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "eheader" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "/home", className: "glow pull-left" }, "Elicit"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "mainListDiv" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/home", className: "btn" }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/podcast", className: "btn " }, "Podcast"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/about", className: "btn " }, "About"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/contactus", className: "btn" }, "Contact Us"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Footer_FooterContainer__["a" /* FooterContainer */], null));
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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPrivatePolicyList */
/* unused harmony export postPrivatePolicyList */
/* unused harmony export updatePrivatePolicyList */
/* unused harmony export deletePrivatePolicyList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePolicyApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(17);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AboutUs_AboutUsPage__ = __webpack_require__(59);



//import { ContactUs } from "../ContactUs/ContactUs";
var HomePage = function HomePage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "home hero-image" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "btn contactus", href: "mailto:Manny@elicit.us" }, "Contact Us")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__AboutUs_AboutUsPage__["a" /* AboutUsPage */], null)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Podcast_index__["a" /* Podcast */], null)));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Podcast__ = __webpack_require__(56);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(17);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAboutUs; });
/* unused harmony export postAboutUs */
/* unused harmony export updateAboutUs */
/* unused harmony export deleteAboutUs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(17);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_contactus_ContactUsApi__ = __webpack_require__(141);
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
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-md-6 col-sm-12 col-xs-12" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { action: "#", method: "post", className: "tg-commentform help-form", id: "tg-commentform" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("fieldset", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tg-section-heading" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Contact Elicit")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", { style: { color: "red" }, className: "contactus" }, "NOTE:"), " Please use this ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "contactus", href: "mailto:Manny@elicit.us" }, "Contact Us HERE"), ". We'd be stoked to hear from you!"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_components_form_input__["a" /* Input */], { type: "text", label: "Name", name: "name", value: this.state.contactUs.name, placeholder: "Name", onChange: this.onFieldChange }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_components_form_input__["a" /* Input */], { type: "text", label: "Topic", name: "topic", value: this.state.contactUs.topic, placeholder: "Subject", onChange: this.onFieldChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__common_components_form_input__["a" /* Input */], { label: "Email", name: "email", value: this.state.contactUs.email, placeholder: "Email", onChange: this.onFieldChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__common_components_form_index__["c" /* Textarea */], { label: "Message", name: "message", value: this.state.contactUs.message, placeholder: "Enter Your Message", onChange: this.onFieldChange }, "rows=", 8)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: "contactus", onClick: this.sendEmailButtonClick }, "Send")))))));
        }
    }]);

    return ContactUs;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sendEmailContactUs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiExecute__ = __webpack_require__(17);

var sendEmailContactUs = function sendEmailContactUs(data) {
    var sendEmailContactUsURL = "/api/contactUs";
    return Object(__WEBPACK_IMPORTED_MODULE_0__apiExecute__["a" /* apiExecute */])(sendEmailContactUsURL, "POST", data);
};
var ContactUsApi = {
    sendEmailContactUs: sendEmailContactUs
};

/***/ }),

/***/ 17:
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

/***/ 49:
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

/***/ 56:
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

/***/ 59:
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(36);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AboutUs_AboutUsPage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PrivatePolicy_PrivatePolicy__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ContactUs_ContactUs__ = __webpack_require__(140);








var AppRouter = function AppRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_2__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/home", component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/podcast", component: __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__["a" /* Podcast */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_5__components_AboutUs_AboutUsPage__["a" /* AboutUsPage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/contactus", component: __WEBPACK_IMPORTED_MODULE_7__components_ContactUs_ContactUs__["a" /* ContactUs */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/privatepolicy", component: __WEBPACK_IMPORTED_MODULE_6__components_PrivatePolicy_PrivatePolicy__["a" /* PrivatePolicy */] })));
};

/***/ })

},[61]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeU1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUxpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9idXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vcGFzc3dvcmQudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdExpc3QudHN4Iiwid2VicGFjazovLy8uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdFVzL0NvbnRhY3RVcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL2NvbnRhY3R1cy9Db250YWN0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2FwaS9hcGlFeGVjdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3QudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3JvdXRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTSxNQUFvQyxTQUFwQyxHQUFvQyxDQUFDLEtBQUQsRUFBVTtBQUV2RCxXQUNJLGtFQUNJLHFEQUFDLHlFQUFELEVBQU8sSUFBUCxDQURKLEVBRUssTUFBTSxRQUZYLENBREo7QUFRSCxDQVZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUVPLElBQU0sTUFBYjtBQUFBOztBQUVJLG9CQUFZLEtBQVosRUFBaUI7QUFBQTs7QUFBQSxvSEFDUCxLQURPOztBQUViLGNBQUssS0FBTCxHQUFhLEVBQWI7QUFGYTtBQUdoQjtBQUVEOzs7QUFQSjtBQUFBO0FBQUEsaUNBUWlCO0FBQ1QsbUJBQ0kscURBQUMsK0NBQUQsRUFBZSxJQUFmLEVBRUksOERBQUssV0FBVSxLQUFmLElBQ0ksOERBQUssV0FBVSxTQUFmLElBQ0kscUVBQ0ksNERBQUcsTUFBSyxPQUFSLEVBQWdCLFdBQVUsZ0JBQTFCLElBQTBDLFFBQTFDLENBREosQ0FESixDQURKLEVBUUksOERBQUssV0FBVSxhQUFmLElBQ0kscURBQUMsa0RBQUQsRUFBSyxFQUFDLElBQUcsT0FBSixFQUFZLFdBQVUsS0FBdEIsRUFBTCxFQUFnQyxNQUFoQyxDQURKLEVBRUkscURBQUMsa0RBQUQsRUFBSyxFQUFDLElBQUcsVUFBSixFQUFlLFdBQVUsTUFBekIsRUFBTCxFQUFvQyxTQUFwQyxDQUZKLEVBR0kscURBQUMsa0RBQUQsRUFBSyxFQUFDLElBQUcsUUFBSixFQUFhLFdBQVUsTUFBdkIsRUFBTCxFQUFrQyxPQUFsQyxDQUhKLEVBSUkscURBQUMsa0RBQUQsRUFBSyxFQUFDLElBQUcsWUFBSixFQUFpQixXQUFVLEtBQTNCLEVBQUwsRUFBcUMsWUFBckMsQ0FKSixDQVJKLENBRkosRUFzQkkscURBQUMsZ0ZBQUQsRUFBZ0IsSUFBaEIsQ0F0QkosQ0FESjtBQTJCSDtBQXBDTDs7QUFBQTtBQUFBLEVBQTRCLGdEQUE1QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFTyxJQUFNLGVBQWI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGlDQUNpQjtBQUNULG1CQUNJLDhEQUFLLFdBQVUsY0FBZixJQUNJLHFFQUNJLDhEQUFLLFdBQVUsY0FBZixJQUNJLCtEQUFNLFdBQVUsY0FBaEIsRUFBK0IsT0FBTyxFQUFDLE9BQU0sT0FBUCxFQUF0QyxJQUFxRCx5Q0FBckQsQ0FESixFQUVJLDhEQUFLLFdBQVUsdUJBQWYsSUFDUSxpRUFDSSxpRUFBSSxxREFBQyxtRkFBRCxFQUFjLElBQWQsQ0FBSixDQURKLENBRFIsQ0FGSixDQURKLENBREosQ0FESjtBQWNIO0FBaEJMOztBQUFBO0FBQUEsRUFBcUMsZ0RBQXJDLEU7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxJQUFNLFVBQVUsR0FBaEI7QUFFTyxJQUFNLHVCQUF1QixTQUF2QixvQkFBdUIsR0FBbUI7QUFDbkQsUUFBTSxTQUFZLE9BQVosc0JBQU47QUFDQSxXQUFPLCtFQUFVLENBQUMsTUFBWCxFQUFtQixLQUFuQixFQUEwQixJQUExQixDQUFQO0FBQ0gsQ0FITTtBQUtBLElBQU0sd0JBQXdCLFNBQXhCLHFCQUF3QixDQUFDLElBQUQsRUFBMkM7QUFDNUUsUUFBTSw4QkFBTjtBQUNBLFdBQU8sK0VBQVUsQ0FBQyxPQUFYLEVBQW9CLE1BQXBCLEVBQTRCLElBQTVCLENBQVA7QUFDSCxDQUhNO0FBS0EsSUFBTSwwQkFBMEIsU0FBMUIsdUJBQTBCLENBQUMsSUFBRCxFQUEyQztBQUM5RSxRQUFNLFNBQVksT0FBWiwwQkFBd0MsS0FBSyxFQUFuRDtBQUNBLFdBQU8sK0VBQVUsQ0FBQyxNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLElBQTFCLENBQVA7QUFDSCxDQUhNO0FBS0EsSUFBTSwwQkFBMEIsU0FBMUIsdUJBQTBCLENBQUMsSUFBRCxFQUErQjtBQUNsRSxRQUFNLFlBQWUsT0FBZiwwQkFBMkMsSUFBakQ7QUFDQSxXQUFPLCtFQUFVLENBQUMsU0FBWCxFQUFzQixRQUF0QixFQUFnQyxJQUFoQyxDQUFQO0FBQ0gsQ0FITTtBQU1BLElBQU0sbUJBQW1CO0FBQzVCLDhDQUQ0QixFQUNOLDRDQURNLEVBQ2lCLGdEQURqQixFQUMwQztBQUQxQyxDQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJQO0FBT08sSUFBTSxrQkFBYjtBQUFBOztBQUNJLGdDQUFZLEtBQVosRUFBc0M7QUFBQTs7QUFBQSx1SUFDNUIsS0FENEI7QUFFckM7O0FBSEw7QUFBQTtBQUFBLGlDQUtpQjtBQUNULGdCQUFJLENBQUMsS0FBSyxLQUFMLENBQVcsU0FBaEIsRUFDSSxPQUFPLElBQVA7QUFDSixnQkFBTSxnQkFBcUM7QUFDdkMsMEJBQVUsT0FENkI7QUFFdkMscUJBQUssQ0FGa0M7QUFHdkMsd0JBQVEsQ0FIK0I7QUFJdkMsc0JBQU0sQ0FKaUM7QUFLdkMsdUJBQU8sQ0FMZ0M7QUFNdkMsaUNBQWlCLGlCQU5zQjtBQU92Qyx5QkFBUyxFQVA4QjtBQVF2Qyx3QkFBUSxHQVIrQjtBQVN2QywwQkFBVTtBQVQ2QixhQUEzQztBQVdBLGdCQUFNLGFBQWtDO0FBQ3BDLGlDQUFpQixNQURtQjtBQUVwQyw4QkFBYyxDQUZzQjtBQUdwQywwQkFBVSxHQUgwQjtBQUlwQywyQkFBVyxHQUp5QjtBQUtwQyx3QkFBUSxRQUw0QjtBQU1wQyx5QkFBUyxFQU4yQjtBQU9wQyx3QkFBUTtBQVA0QixhQUF4QztBQVNBLGdCQUFNLFlBQWlDO0FBQ25DLGlDQUFpQixNQURrQjtBQUVuQyw4QkFBYyxDQUZxQjtBQUduQywwQkFBVSxHQUh5QjtBQUluQywyQkFBVyxHQUp3QjtBQUtuQyx3QkFBUSxRQUwyQjtBQU1uQyx5QkFBUyxFQU4wQjtBQU9uQyx3QkFBUSxJQVAyQjtBQVEvQyw2QkFBYSxXQUFXO0FBUnVCLGFBQXZDO0FBWUEsbUJBQ0ksOERBQUssV0FBVSxVQUFmLEVBQTBCLE9BQU8sYUFBakMsSUFDSSw4REFBSyxPQUFPLFVBQVosSUFDSSxpRUFBSSwwRkFBSixDQURKLEVBRUksZ0VBRkosRUFHSSxnRUFISixFQUlJLDhEQUFLLE9BQU8sU0FBWixJQUNLLEtBQUssS0FBTCxDQUFXLFFBRGhCLENBSkosRUFPSSw4REFBSyxXQUFVLFFBQWYsSUFDSSxnRUFESixFQUVJLGdFQUZKLEVBR0ksaUVBQVEsV0FBVSxnQkFBbEIsRUFBbUMsU0FBUyxLQUFLLEtBQUwsQ0FBVyxPQUF2RCxJQUE4RCxPQUE5RCxDQUhKLENBUEosQ0FESixDQURKO0FBbUJIO0FBM0RMOztBQUFBO0FBQUEsRUFBd0MsZ0RBQXhDLEU7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFJTyxJQUFNLG9CQUF5RSxTQUF6RSxpQkFBeUUsQ0FBQyxLQUFELEVBQXFDO0FBQ3ZILFdBQ0kscURBQUMsK0NBQUQsRUFBZSxJQUFmLEVBQ0ksOERBQUssV0FBVSxLQUFmLElBQ0ssTUFBTSxhQUFOLElBQXVCLElBQXZCLEdBQ0csTUFBTSxhQUFOLENBQW9CLEdBQXBCLENBQXdCLFVBQUMsR0FBRCxFQUFNLENBQU4sRUFBVztBQUMvQixlQUFPLDhEQUFLLEtBQUssQ0FBVixFQUFhLFdBQVcsSUFBSSxXQUE1QixJQUF5QyxxRUFBUyxJQUFJLFVBQWIsQ0FBekMsQ0FBUDtBQUNILEtBRkQsQ0FESCxHQUtNLEVBTlgsQ0FESixFQVVLLE1BQU0sU0FBTixDQUFnQixHQUFoQixDQUFvQixTQUFTLEtBQVQsQ0FBcEIsQ0FWTCxDQURKO0FBY0gsQ0FmTTtBQWlCUCxJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsS0FBRDtBQUFBLFdBQXNDLFVBQUMsR0FBRCxFQUFzQixHQUF0QixFQUFxQztBQUN4RixlQUFRLDhEQUFLLFdBQVUsS0FBZixFQUFxQixLQUFLLEdBQTFCLElBQ0osZ0VBREksRUFFSiw4REFBSyxXQUFVLFdBQWYsSUFBMkIsZ0VBQUcscUVBQVMsSUFBSSxpQkFBYixFQUEwQyxJQUExQyxDQUFILENBQTNCLENBRkksRUFHSixnRUFISSxFQUlKLDhEQUFLLFdBQVUsV0FBZixJQUE0QixJQUFJLG9CQUFoQyxDQUpJLEVBS0osZ0VBTEksQ0FBUjtBQU9ILEtBUmdCO0FBQUEsQ0FBakI7QUFVQSxJQUFNLGNBQWMsU0FBZCxXQUFjLENBQUMsS0FBRCxFQUFtQyxFQUFuQyxFQUErQyxNQUEvQztBQUFBLFdBQWtFLFVBQUMsQ0FBRCxFQUErQztBQUNqSSxjQUFNLGFBQU4sQ0FBb0IsRUFBcEIsRUFBd0IsTUFBeEI7QUFDSCxLQUZtQjtBQUFBLENBQXBCLEM7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUVPLElBQU0sV0FBeUMsU0FBekMsUUFBeUMsR0FBSztBQUV2RCxXQUNJLHFEQUFDLCtDQUFELEVBQWUsSUFBZixFQUNJLDhEQUFLLFdBQVUsaUJBQWYsSUFDSSw0REFBRyxXQUFVLGVBQWIsRUFBNkIsTUFBSyx3QkFBbEMsSUFBMEQsWUFBMUQsQ0FESixDQURKLEVBSUksa0VBQ0kscURBQUMseUVBQUQsRUFBWSxJQUFaLENBREosQ0FKSixFQU9JLGtFQUNBLHFEQUFDLCtEQUFELEVBQVEsSUFBUixDQURBLENBUEosQ0FESjtBQWNILENBaEJNO0FBbUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUTs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTSxVQUFVLEdBQWhCO0FBRU8sSUFBTSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBbUI7QUFDN0MsUUFBTSxTQUFZLE9BQVosZ0JBQU47QUFDQSxXQUFPLCtFQUFVLENBQUMsTUFBWCxFQUFtQixLQUFuQixFQUEwQixJQUExQixDQUFQO0FBQ0gsQ0FITTtBQUtBLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsSUFBRCxFQUFxQztBQUNoRSxRQUFNLHdCQUFOO0FBQ0EsV0FBTywrRUFBVSxDQUFDLE9BQVgsRUFBb0IsTUFBcEIsRUFBNEIsSUFBNUIsQ0FBUDtBQUNILENBSE07QUFLQSxJQUFNLG9CQUFvQixTQUFwQixpQkFBb0IsQ0FBQyxJQUFELEVBQXFDO0FBQ2xFLFFBQU0sU0FBWSxPQUFaLG9CQUFrQyxLQUFLLEVBQTdDO0FBQ0EsV0FBTywrRUFBVSxDQUFDLE1BQVgsRUFBbUIsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBUDtBQUNILENBSE07QUFLQSxJQUFNLG9CQUFvQixTQUFwQixpQkFBb0IsQ0FBQyxJQUFELEVBQStCO0FBQzVELFFBQU0sWUFBZSxPQUFmLG9CQUFxQyxJQUEzQztBQUNBLFdBQU8sK0VBQVUsQ0FBQyxTQUFYLEVBQXNCLFFBQXRCLEVBQWdDLElBQWhDLENBQVA7QUFDSCxDQUhNLEM7Ozs7Ozs7O0FDcEJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQVlPLElBQU0sY0FBMEQsU0FBMUQsV0FBMEQsQ0FBQyxLQUFELEVBQTRCO0FBQy9GLFdBQ0ksOERBQUssV0FBVSxxQkFBZixFQUFxQyxPQUFPLEVBQUUsT0FBTyxPQUFULEVBQTVDLElBQ0ksOERBQUssV0FBVSxhQUFmLElBQ0ksOERBQUssV0FBVSw2QkFBZixJQUNJLDRFQURKLENBREosRUFJSSw4REFBSyxXQUFVLG1CQUFmLElBQ0ksOERBQUssV0FBVSxpQkFBZixJQUNJLG1FQUNJLHVFQUVJLDhEQUFLLFdBQVUsWUFBZixJQUNJLHFEQUFDLDRFQUFELEVBQU0sRUFDRixPQUFNLE1BREosRUFFRixNQUFLLGFBRkgsRUFHRixPQUFPLE1BQU0sV0FBTixDQUFrQixXQUh2QixFQUlGLGFBQVksWUFKVixFQUtGLFVBQVUsTUFBTSxRQUxkLEVBQU4sQ0FESixDQUZKLEVBV0ksOERBQUssV0FBVSxZQUFmLElBQ0kscURBQUMsK0VBQUQsRUFBUyxFQUNMLE9BQU0sU0FERCxFQUVMLE1BQUssZ0JBRkEsRUFHTCxPQUFPLE1BQU0sV0FBTixDQUFrQixjQUhwQixFQUlMLGFBQVksb0JBSlAsRUFLTCxVQUFVLE1BQU0sUUFMWCxFQUFULENBREosQ0FYSixFQW1CSSw4REFBSyxXQUFVLFlBQWYsSUFDSSxxREFBQyw0RUFBRCxFQUFNLEVBQ0YsT0FBTSxjQURKLEVBRUYsTUFBSyxvQkFGSCxFQUdGLE9BQU8sTUFBTSxXQUFOLENBQWtCLGtCQUh2QixFQUlGLGFBQVksY0FKVixFQUtGLFVBQVUsTUFBTSxRQUxkLEVBQU4sQ0FESixDQW5CSixFQTJCSSw4REFBSyxXQUFVLFlBQWYsSUFDSSxxREFBQyw0RUFBRCxFQUFNLEVBQ0YsT0FBTSxnQkFESixFQUVGLE1BQUssc0JBRkgsRUFHRixPQUFPLE1BQU0sV0FBTixDQUFrQixvQkFIdkIsRUFJRixhQUFZLGdCQUpWLEVBS0YsVUFBVSxNQUFNLFFBTGQsRUFBTixDQURKLENBM0JKLEVBb0NJLHFEQUFDLDZFQUFELEVBQU8sRUFBQyxXQUFVLHVCQUFYLEVBQ0gsT0FBTSxRQURILEVBRUgsU0FBUyxNQUFNLFFBRlosRUFBUCxDQXBDSixFQTBDSSxxREFBQyw2RUFBRCxFQUFPLEVBQUMsV0FBVSx1QkFBWCxFQUNILE9BQU0sUUFESCxFQUVILFNBQVMsTUFBTSxRQUZaLEVBQVAsQ0ExQ0osQ0FESixDQURKLENBREosQ0FKSixDQURKLENBREo7QUErREgsQ0FoRU0sQzs7Ozs7Ozs7QUNkUDtBQUFBO0FBQUE7QUFBQTtBQUlPLElBQU0sU0FBaUQsU0FBakQsTUFBaUQsQ0FBQyxLQUFELEVBQVU7QUFDcEUsV0FDSSxpRUFDSSxPQUFPLEVBQUUsT0FBTyxPQUFULEVBRFgsRUFFSSxNQUFLLFFBRlQsRUFHSSxXQUFXLE1BQU0sU0FIckIsRUFJSSxTQUFTLE1BQU0sT0FKbkIsSUFNSyxNQUFNLEtBTlgsQ0FESjtBQVVILENBWE0sQzs7Ozs7Ozs7QUNKUDtBQUFBO0FBQUE7QUFBQTtBQUdBLElBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixDQUFDLEtBQUQsRUFBdUI7QUFDOUMsUUFBTSxlQUFlLFlBQXJCO0FBQ0EsV0FBTyxNQUFNLEtBQU4sR0FBaUIsWUFBakIsa0JBQTRDLFlBQW5EO0FBQ0gsQ0FIRDtBQUtBLElBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLENBQUMsS0FBRDtBQUFBLFdBQXdCLFVBQUMsQ0FBRCxFQUEyQztBQUNyRixjQUFNLFFBQU4sQ0FBZSxFQUFFLE1BQUYsQ0FBUyxJQUF4QixFQUE4QixFQUFFLE1BQUYsQ0FBUyxLQUF2QztBQUNILEtBRnFCO0FBQUEsQ0FBdEI7QUFJTyxJQUFNLFdBQWtELFNBQWxELFFBQWtELENBQUMsS0FBRCxFQUFVO0FBRXJFLFdBQ0ksOERBQUssV0FBVyxtQkFBbUIsS0FBbkIsQ0FBaEIsSUFDSSxnRUFBTyxTQUFTLE1BQU0sSUFBdEIsSUFBNkIsTUFBTSxLQUFuQyxDQURKLEVBRUksOERBQUssV0FBVSxPQUFmLElBQ0ksZ0VBQU8sTUFBSyxVQUFaLEVBQ0ksTUFBTSxNQUFNLElBRGhCLEVBRUksV0FBVSxjQUZkLEVBR0ksYUFBYSxNQUFNLFdBSHZCLEVBSUksT0FBTyxNQUFNLEtBSmpCLEVBS0ksVUFBVSxjQUFjLEtBQWQsQ0FMZCxHQURKLENBRkosRUFXSSw4REFBSyxXQUFVLFlBQWYsSUFBNkIsTUFBTSxLQUFuQyxDQVhKLENBREo7QUFnQkgsQ0FsQk0sQzs7Ozs7Ozs7QUNaUDtBQUFBO0FBQUE7QUFBQTtBQUdBLElBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixDQUFDLEtBQUQsRUFBOEI7QUFDckQsUUFBTSxlQUFlLFlBQXJCO0FBQ0EsV0FBTyxNQUFNLEtBQU4sR0FBaUIsWUFBakIsa0JBQTRDLFlBQW5EO0FBQ0gsQ0FIRDtBQUtBLElBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLENBQUMsS0FBRDtBQUFBLFdBQStCLFVBQUMsQ0FBRCxFQUE0QztBQUM3RixjQUFNLFFBQU4sQ0FBZSxFQUFFLE1BQUYsQ0FBUyxJQUF4QixFQUE4QixFQUFFLE1BQUYsQ0FBUyxLQUF2QztBQUNILEtBRnFCO0FBQUEsQ0FBdEI7QUFJTyxJQUFNLGVBQTZELFNBQTdELFlBQTZELENBQUMsS0FBRCxFQUFVO0FBQ2hGLFFBQUksVUFBVSxNQUFNLE9BQU4sQ0FBYyxHQUFkLENBQWtCLFVBQUMsTUFBRCxFQUFXO0FBQ3ZDLGVBQ0ksaUVBQVEsS0FBSyxPQUFPLEdBQXBCLEVBQXlCLE9BQU8sT0FBTyxHQUF2QyxJQUE2QyxPQUFPLEtBQXBELENBREo7QUFHSCxLQUphLENBQWQ7QUFNQSxXQUNJLDhEQUFLLFdBQVcsbUJBQW1CLEtBQW5CLENBQWhCLElBQ0ksZ0VBQU8sU0FBUyxNQUFNLElBQXRCLElBQTZCLE1BQU0sS0FBbkMsQ0FESixFQUVJLDhEQUFLLFdBQVUsT0FBZixJQUNJLGlFQUFRLE9BQU8sTUFBTSxhQUFyQixFQUFvQyxVQUFVLGNBQWMsS0FBZCxDQUE5QyxFQUFvRSxJQUFJLE1BQU0sSUFBOUUsRUFBb0YsV0FBVSxjQUE5RixJQUE4RyxPQUE5RyxDQURKLENBRkosQ0FESjtBQVFILENBZk0sQzs7Ozs7Ozs7QUNaUDtBQUFBO0FBQUE7QUFBQTtBQUdPLElBQU0sV0FBcUQsU0FBckQsUUFBcUQsQ0FBQyxLQUFELEVBQVU7QUFDeEUsV0FDSSw4REFBSyxXQUFXLG1CQUFtQixLQUFuQixDQUFoQixJQUNJLGdFQUFPLFNBQVMsTUFBTSxJQUF0QixJQUE2QixNQUFNLEtBQW5DLENBREosRUFFSSw4REFBSyxXQUFVLE9BQWYsSUFDSSxtRUFBVSxVQUFVLE1BQU0sUUFBMUIsRUFDSSxNQUFNLE1BQU0sSUFEaEIsRUFFSSxXQUFXLE1BQU0sU0FBTixHQUFtQixNQUFNLFNBQU4sR0FBa0IsY0FBckMsR0FBdUQsY0FGdEUsRUFHSSxhQUFhLE1BQU0sV0FIdkIsRUFJSSxPQUFPLE1BQU0sS0FKakIsRUFLSSxVQUFVLGNBQWMsS0FBZCxDQUxkLEVBTUksTUFBTSxNQUFNLElBTmhCLEVBT0ksT0FBTyxNQUFNLEtBUGpCLEdBREosQ0FGSixFQWFJLDhEQUFLLFdBQVUsWUFBZixJQUE2QixNQUFNLEtBQW5DLENBYkosQ0FESjtBQWlCSCxDQWxCTTtBQW9CUCxJQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsQ0FBQyxLQUFELEVBQTBCO0FBQ2pELFFBQU0sZUFBZSxZQUFyQjtBQUNBLFdBQU8sTUFBTSxLQUFOLEdBQWlCLFlBQWpCLGtCQUE0QyxZQUFuRDtBQUNILENBSEQ7QUFLQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixDQUFDLEtBQUQ7QUFBQSxXQUEyQixVQUFDLENBQUQsRUFBOEM7QUFDM0YsY0FBTSxRQUFOLENBQWUsRUFBRSxNQUFGLENBQVMsSUFBeEIsRUFBOEIsRUFBRSxNQUFGLENBQVMsS0FBdkM7QUFDSCxLQUZxQjtBQUFBLENBQXRCO0FBSUEsSUFBTSxTQUFTLFNBQVQsTUFBUyxDQUFDLEtBQUQ7QUFBQSxXQUEyQixVQUFDLENBQUQsRUFBOEM7QUFDcEYsWUFBSSxNQUFNLE1BQVYsRUFBa0I7QUFDZCxrQkFBTSxNQUFOLENBQWEsRUFBRSxNQUFGLENBQVMsSUFBdEIsRUFBNEIsRUFBRSxNQUFGLENBQVMsS0FBckM7QUFDSDtBQUNKLEtBSmM7QUFBQSxDQUFmLEM7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBZ0JPLElBQU0sY0FBbUYsU0FBbkYsV0FBbUYsQ0FBQyxLQUFELEVBQXFEO0FBQ2pKLFdBQ0kscURBQUMsK0NBQUQsRUFBZSxJQUFmLEVBRUksOERBQUssV0FBVSxpQ0FBZixFQUFpRCxPQUFPLEVBQUUsT0FBTyxPQUFULEVBQXhELElBQ0ksOERBQUssV0FBVSxxQkFBZixJQUNJLHlFQURKLENBREosRUFJSSw4REFBSyxXQUFVLG1CQUFmLElBQ0ksOERBQUssV0FBVSxpQkFBZixJQUNJLDhEQUFLLFdBQVUsWUFBZixJQUNJLGdFQUFPLE9BQU8sRUFBRSxZQUFZLE9BQWQsRUFBdUIsT0FBTyxPQUE5QixFQUFkLEVBQXdELFdBQVUscUJBQWxFLElBQ0ksb0VBQ0ksaUVBQ0ssTUFBTSxhQUFOLElBQXVCLElBQXZCLEdBQ0csTUFBTSxhQUFOLENBQW9CLEdBQXBCLENBQXdCLFVBQUMsR0FBRCxFQUFNLENBQU4sRUFBVztBQUMvQixlQUFPLDZEQUFJLEtBQUssQ0FBVCxFQUFZLFdBQVcsSUFBSSxXQUEzQixJQUF3QyxxRUFBUyxJQUFJLFVBQWIsQ0FBeEMsQ0FBUDtBQUNILEtBRkQsQ0FESCxHQUtNLEVBTlgsQ0FESixDQURKLEVBWUssTUFBTSxTQUFOLENBQWdCLEdBQWhCLENBQW9CLFNBQVMsS0FBVCxDQUFwQixDQVpMLENBREosQ0FESixDQURKLEVBbUJJLDhEQUFLLFdBQVUscUJBQWYsSUFDSSw4REFBSyxXQUFVLGdCQUFmLEdBREosQ0FuQkosQ0FKSixDQUZKLENBREo7QUFpQ0gsQ0FsQ007QUFvQ1AsSUFBTSxXQUFXLFNBQVgsUUFBVyxDQUFDLEtBQUQ7QUFBQSxXQUFzRCxVQUFDLEdBQUQsRUFBb0IsR0FBcEIsRUFBbUM7QUFDdEcsZUFDSSxnRUFBTyxLQUFLLEdBQVosSUFDSSxpRUFDSSw2REFBSSxXQUFVLFVBQWQsSUFBMEIsSUFBSSxXQUE5QixDQURKLEVBRUksNkRBQUksV0FBVSxVQUFkLElBQTBCLElBQUksY0FBOUIsQ0FGSixFQUdJLDZEQUFJLFdBQVUsVUFBZCxJQUEwQixJQUFJLGtCQUE5QixDQUhKLEVBSUksNkRBQUksV0FBVSxVQUFkLElBQTBCLElBQUksb0JBQTlCLENBSkosRUFLSSw2REFBSSxXQUFVLFVBQWQsSUFBMEIsSUFBSSxpQkFBOUIsQ0FMSixFQU1JLDZEQUFJLFdBQVUsVUFBZCxJQUNLLE1BQU0sY0FBTixHQUF3QixpRUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSx1QkFBaEMsRUFBd0QsU0FBUyxZQUFZLEtBQVosRUFBbUIsSUFBSSxFQUF2QixFQUEyQixNQUEzQixDQUFqRSxJQUFtRyxNQUFuRyxDQUF4QixHQUErSSxFQURwSixFQUVLLE1BQU0sZ0JBQU4sR0FBMEIsaUVBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsbUJBQWhDLEVBQW9ELFNBQVMsWUFBWSxLQUFaLEVBQW1CLElBQUksRUFBdkIsRUFBMkIsUUFBM0IsQ0FBN0QsSUFBaUcsUUFBakcsQ0FBMUIsR0FBaUosRUFGdEosQ0FOSixDQURKLENBREo7QUFlSCxLQWhCZ0I7QUFBQSxDQUFqQjtBQWtCQSxJQUFNLGNBQWMsU0FBZCxXQUFjLENBQUMsS0FBRCxFQUFtRCxFQUFuRCxFQUErRCxNQUEvRDtBQUFBLFdBQWtGLFVBQUMsQ0FBRCxFQUErQztBQUNqSixjQUFNLGFBQU4sQ0FBb0IsRUFBcEIsRUFBd0IsTUFBeEI7QUFDSCxLQUZtQjtBQUFBLENBQXBCLEM7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLElBQU0sVUFBVSxHQUFoQjtBQUVPLElBQU0sYUFBYSxTQUFiLFVBQWEsR0FBbUI7QUFDekMsUUFBTSxTQUFZLE9BQVosZ0JBQU47QUFDQSxXQUFPLCtFQUFVLENBQUMsTUFBWCxFQUFtQixLQUFuQixFQUEwQixJQUExQixDQUFQO0FBQ0gsQ0FITTtBQUtBLElBQU0sY0FBYyxTQUFkLFdBQWMsQ0FBQyxJQUFELEVBQXFDO0FBQzVELFFBQU0sd0JBQU47QUFDQSxXQUFPLCtFQUFVLENBQUMsT0FBWCxFQUFvQixNQUFwQixFQUE0QixJQUE1QixDQUFQO0FBQ0gsQ0FITTtBQUtBLElBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLENBQUMsSUFBRCxFQUFxQztBQUM5RCxRQUFNLFNBQVksT0FBWixvQkFBa0MsS0FBSyxFQUE3QztBQUNBLFdBQU8sK0VBQVUsQ0FBQyxNQUFYLEVBQW1CLEtBQW5CLEVBQTBCLElBQTFCLENBQVA7QUFDSCxDQUhNO0FBS0EsSUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBQyxJQUFELEVBQStCO0FBQ3hELFFBQU0sWUFBZSxPQUFmLG9CQUFxQyxJQUEzQztBQUNBLFdBQU8sK0VBQVUsQ0FBQyxTQUFYLEVBQXNCLFFBQXRCLEVBQWdDLElBQWhDLENBQVA7QUFDSCxDQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY08sSUFBTSxTQUFiO0FBQUE7O0FBQ0ksdUJBQVksS0FBWixFQUFpQjtBQUFBOztBQUFBLDBIQUNQLEtBRE87O0FBRWIsY0FBSyxLQUFMLEdBQWE7QUFDVCx1QkFBVztBQUNQLHNCQUFNLEVBREM7QUFFUCx1QkFBTyxFQUZBO0FBR1AsdUJBQU8sRUFIQTtBQUlQLHlCQUFTO0FBSkY7QUFERixTQUFiO0FBU0E7QUFDQSxjQUFLLGFBQUwsR0FBcUIsTUFBSyxhQUFMLENBQW1CLElBQW5CLE9BQXJCO0FBQ0EsY0FBSyxvQkFBTCxHQUE0QixNQUFLLG9CQUFMLENBQTBCLElBQTFCLE9BQTVCO0FBYmE7QUFjaEI7O0FBZkw7QUFBQTtBQUFBLHNDQWlCMEIsU0FqQjFCLEVBaUI2QyxVQWpCN0MsRUFpQitEO0FBRXZELGdCQUFNLFlBQVMsa0JBQ1IsS0FBSyxLQURHLEVBQ0UsRUFDYixXQUFTLGtCQUNGLEtBQUssS0FBTCxDQUFXLFNBRFQsc0JBRUosU0FGSSxFQUVRLFVBRlIsRUFESSxFQURGLENBQWY7QUFPQSxpQkFBSyxRQUFMLENBQWMsU0FBZCxFQVR1RCxDQVM3QjtBQUM3QjtBQTNCTDtBQUFBO0FBQUEsK0NBNkJnQztBQUFBOztBQUV4Qiw2RkFBWSxDQUFDLGtCQUFiLENBQWdDLEtBQUssS0FBTCxDQUFXLFNBQTNDLEVBRUssSUFGTCxDQUVVLFVBQUMsUUFBRCxFQUFhO0FBQ2YsdUJBQUssUUFBTCxDQUFhLGtCQUNOLE9BQUssS0FEQyxFQUNJLEVBQ2IsV0FBVztBQUNQLDhCQUFNLEVBREM7QUFFUCwrQkFBTyxFQUZBO0FBR1AsK0JBQU8sRUFIQTtBQUlQLGlDQUFTO0FBSkYscUJBREUsRUFESixDQUFiO0FBVUgsYUFiTCxFQWVLLEtBZkwsQ0FlVyxVQUFDLEdBQUQsRUFBUTtBQUNYLHdCQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0gsYUFqQkw7QUFtQkg7QUFsREw7QUFBQTtBQUFBLGlDQXFEaUI7QUFDVCxtQkFDSSw4REFBSyxXQUFVLDhCQUFmLElBRUksK0RBQU0sUUFBTyxHQUFiLEVBQWlCLFFBQU8sTUFBeEIsRUFBK0IsV0FBVSwwQkFBekMsRUFBb0UsSUFBRyxnQkFBdkUsSUFDSSx1RUFDSSw4REFBSyxXQUFVLFlBQWYsSUFDRSw4REFBSyxXQUFVLG9CQUFmLElBQW9DLGtGQUFwQyxDQURGLEVBR0ksZ0VBQUcsaUVBQVEsT0FBTyxFQUFFLE9BQU8sS0FBVCxFQUFmLEVBQWlDLFdBQVUsV0FBM0MsSUFBc0QsT0FBdEQsQ0FBSCxFLG1CQUFBLEVBQXlGLDREQUFHLFdBQVUsV0FBYixFQUF5QixNQUFLLHdCQUE5QixJQUFzRCxpQkFBdEQsQ0FBekYsRUFBeU0sb0NBQXpNLENBSEosRUFRSSw4REFBSyxXQUFVLFlBQWYsSUFDSSxxREFBQyw0RUFBRCxFQUFNLEVBQ0YsTUFBSyxNQURILEVBRUYsT0FBTSxNQUZKLEVBR0YsTUFBSyxNQUhILEVBSUYsT0FBTyxLQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLElBSjFCLEVBS0YsYUFBWSxNQUxWLEVBTUYsVUFBVSxLQUFLLGFBTmIsRUFBTixDQURKLEVBVUEsOERBQUssV0FBVSxZQUFmLElBQ0kscURBQUMsNEVBQUQsRUFBTSxFQUNGLE1BQUssTUFESCxFQUVGLE9BQU0sT0FGSixFQUdGLE1BQUssT0FISCxFQUlGLE9BQU8sS0FBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixLQUoxQixFQUtGLGFBQVksU0FMVixFQU1GLFVBQVUsS0FBSyxhQU5iLEVBQU4sQ0FESixDQVZBLEVBbUJBLDhEQUFLLFdBQVUsWUFBZixJQUNJLHFEQUFDLDRFQUFELEVBQU0sRUFDRixPQUFNLE9BREosRUFFRixNQUFLLE9BRkgsRUFHRixPQUFPLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FBcUIsS0FIMUIsRUFJRixhQUFZLE9BSlYsRUFLRixVQUFVLEtBQUssYUFMYixFQUFOLENBREosQ0FuQkEsRUEyQkEsOERBQUssV0FBVSxZQUFmLElBQ0kscURBQUMsK0VBQUQsRUFBUyxFQUNMLE9BQU0sU0FERCxFQUVMLE1BQUssU0FGQSxFQUdMLE9BQU8sS0FBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixPQUh2QixFQUlMLGFBQVksb0JBSlAsRUFLTCxVQUFVLEtBQUssYUFMVixFQUFULEUsT0FBQSxFQU1VLENBTlYsQ0FESixDQTNCQSxFQW9DQSw4REFBSyxXQUFVLFlBQWYsSUFDSSxpRUFDSSxNQUFLLFFBRFQsRUFFSSxXQUFVLFdBRmQsRUFHSSxTQUFTLEtBQUssb0JBSGxCLElBR3NDLE1BSHRDLENBREosQ0FwQ0EsQ0FSSixDQURKLENBREosQ0FGSixDQURKO0FBOERIO0FBcEhMOztBQUFBO0FBQUEsRUFBK0IsZ0RBQS9CLEU7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBTSxxQkFBcUIsU0FBckIsa0JBQXFCLENBQUMsSUFBRCxFQUFtQztBQUNqRSxRQUFNLHdDQUFOO0FBQ0EsV0FBTyx1RUFBVSxDQUFDLHFCQUFYLEVBQWtDLE1BQWxDLEVBQTBDLElBQTFDLENBQVA7QUFDSCxDQUhNO0FBS0EsSUFBTSxlQUFlO0FBQ3hCO0FBRHdCLENBQXJCLEM7Ozs7Ozs7O0FDUlA7QUFBQTtBQUFBO0FBQUE7QUFFQSw2Q0FBSyxDQUFDLFFBQU4sQ0FBZSxPQUFmLENBQXVCLElBQXZCLENBQTRCLGNBQTVCLElBQThDLG1DQUE5QztBQUVPLElBQU0sYUFBYSxTQUFiLFVBQWEsQ0FBQyxHQUFELEVBQWMsTUFBZCxFQUE4QixJQUE5QixFQUF5RDtBQUUvRSxZQUFRLE1BQVI7QUFDSSxhQUFLLEtBQUw7QUFDSSxtQkFBTyw2Q0FBSyxDQUFDLEdBQU4sQ0FBVSxHQUFWLEVBQWUsRUFBRSxpQkFBaUIsSUFBbkIsRUFBZixFQUNGLElBREUsQ0FDRyxVQUFDLFFBQUQ7QUFBQSx1QkFBZSxTQUFTLElBQXhCO0FBQUEsYUFESCxFQUNrQyxVQUFDLEdBQUQsRUFBUTtBQUN6Qyx1QkFBTyxRQUFRLE1BQVIsQ0FBZSxHQUFmLENBQVA7QUFDSCxhQUhFLEVBSUYsS0FKRSxDQUlJLFVBQUMsR0FBRCxFQUFRO0FBQ1gsd0JBQVEsR0FBUixDQUFZLFdBQVosRUFBeUIsR0FBekI7QUFDQSx1QkFBTyxRQUFRLE1BQVIsQ0FBZSxHQUFmLENBQVA7QUFDSCxhQVBFLENBQVA7QUFRSixhQUFLLE1BQUw7QUFDSSxtQkFBTyw2Q0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFYLEVBQWdCLElBQWhCLEVBQXNCLEVBQUUsaUJBQWlCLElBQW5CLEVBQXRCLEVBQ0YsSUFERSxDQUNHLFVBQUMsUUFBRDtBQUFBLHVCQUFlLFNBQVMsSUFBeEI7QUFBQSxhQURILEVBQ2tDLFVBQUMsR0FBRCxFQUFRO0FBQ3pDLHVCQUFPLFFBQVEsTUFBUixDQUFlLEdBQWYsQ0FBUDtBQUNILGFBSEUsRUFJRixLQUpFLENBSUksVUFBQyxHQUFELEVBQVE7QUFDWCx3QkFBUSxHQUFSLENBQVksV0FBWixFQUF5QixHQUF6QjtBQUNBLHVCQUFPLFFBQVEsTUFBUixDQUFlLEdBQWYsQ0FBUDtBQUNILGFBUEUsQ0FBUDtBQVFKLGFBQUssS0FBTDtBQUNJLG1CQUFPLDZDQUFLLENBQUMsR0FBTixDQUFVLEdBQVYsRUFBZSxJQUFmLEVBQXFCLEVBQUUsaUJBQWlCLElBQW5CLEVBQXJCLEVBQ0YsSUFERSxDQUNHLFVBQUMsUUFBRDtBQUFBLHVCQUFlLFNBQVMsSUFBeEI7QUFBQSxhQURILEVBQ2tDLFVBQUMsR0FBRCxFQUFRO0FBQ3pDLHVCQUFPLFFBQVEsTUFBUixDQUFlLEdBQWYsQ0FBUDtBQUNILGFBSEUsRUFJRixLQUpFLENBSUksVUFBQyxHQUFELEVBQVE7QUFDWCx3QkFBUSxHQUFSLENBQVksV0FBWixFQUF5QixHQUF6QjtBQUNBLHVCQUFPLFFBQVEsTUFBUixDQUFlLEdBQWYsQ0FBUDtBQUNILGFBUEUsQ0FBUDtBQVFKLGFBQUssUUFBTDtBQUNJLG1CQUFPLDZDQUFLLENBQUMsTUFBTixDQUFhLEdBQWIsRUFBa0IsRUFBRSxpQkFBaUIsSUFBbkIsRUFBbEIsRUFDRixJQURFLENBQ0csVUFBQyxRQUFEO0FBQUEsdUJBQWUsU0FBUyxJQUF4QjtBQUFBLGFBREgsRUFDa0MsVUFBQyxHQUFELEVBQVE7QUFDekMsdUJBQU8sUUFBUSxNQUFSLENBQWUsR0FBZixDQUFQO0FBQ0gsYUFIRSxFQUlGLEtBSkUsQ0FJSSxVQUFDLEdBQUQsRUFBUTtBQUNYLHdCQUFRLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLEdBQXpCO0FBQ0EsdUJBQU8sUUFBUSxNQUFSLENBQWUsR0FBZixDQUFQO0FBQ0gsYUFQRSxDQUFQO0FBN0JSO0FBc0NILENBeENNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUdBO0FBQ0E7QUFDQTtBQVFPLElBQU0sYUFBYjtBQUFBOztBQUNJLDJCQUFZLEtBQVosRUFBaUI7QUFBQTs7QUFBQSxrSUFDUCxLQURPOztBQUViLGNBQUssS0FBTCxHQUFhO0FBQ1QsdUJBQVcsS0FERjtBQUVULHlDQUE2QjtBQUZwQixTQUFiO0FBSUEsY0FBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxDQUFpQixJQUFqQixPQUFuQjtBQUNBLGNBQUssT0FBTCxHQUFlLE1BQUssT0FBTCxDQUFhLElBQWIsT0FBZjtBQVBhO0FBUWhCOztBQVRMO0FBQUE7QUFBQSw0Q0FXNEI7QUFDcEIsaUJBQUssWUFBTDtBQUNIO0FBYkw7QUFBQTtBQUFBLHNDQWV1QjtBQUNmLGlCQUFLLFFBQUwsQ0FBYyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxTQUF6QixFQUFkO0FBQ0g7QUFqQkw7QUFBQTtBQUFBLGtDQW1CbUI7QUFDWCxpQkFBSyxRQUFMLENBQWMsRUFBRSxXQUFXLENBQUMsS0FBSyxLQUFMLENBQVcsU0FBekIsRUFBZDtBQUNIO0FBckJMO0FBQUE7QUFBQSx1Q0FzQndCO0FBQUE7O0FBQ2hCLHlHQUFnQixDQUFDLG9CQUFqQixHQUNLLElBREwsQ0FDVSxVQUFDLFFBQUQsRUFBYTtBQUNmLHVCQUFLLFFBQUwsQ0FBYyxFQUFFLDZCQUE2QixTQUFTLEtBQXhDLEVBQWQ7QUFDQSx3QkFBUSxHQUFSLENBQVksUUFBWjtBQUNILGFBSkwsRUFLSyxLQUxMLENBS1csVUFBQyxHQUFELEVBQVE7QUFBRyx3QkFBUSxHQUFSLENBQVksUUFBWixFQUFzQixHQUF0QjtBQUE2QixhQUxuRDtBQU1IO0FBN0JMO0FBQUE7QUFBQSxpQ0FrQ2lCO0FBQ1QsbUJBQ0ksa0VBQ0ksaUVBQVEsU0FBUyxLQUFLLFdBQXRCLEVBQW1DLFdBQVUsU0FBN0MsSUFBc0QsU0FBdEQsQ0FESixFQUVJLHFEQUFDLCtFQUFELEVBQW1CLEVBQ2YsV0FBVyxLQUFLLEtBQUwsQ0FBVyxTQURQLEVBRWYsU0FBUyxLQUFLLE9BRkMsRUFBbkIsRUFHSSxxREFBQyw2RUFBRCxFQUFrQixFQUNkLFdBQVcsS0FBSyxLQUFMLENBQVcsMkJBRFIsRUFFZCxlQUFlLEtBQUssWUFGTixFQUFsQixDQUhKLENBRkosQ0FESjtBQWFIO0FBaERMOztBQUFBO0FBQUEsRUFBbUMsZ0RBQW5DLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFZTyxJQUFNLE9BQWI7QUFBQTs7QUFDSSxxQkFBWSxLQUFaLEVBQWlCO0FBQUE7O0FBQUEsc0hBQ1AsS0FETzs7QUFFYixjQUFLLEtBQUwsR0FBYTtBQUNULHlCQUFhO0FBQ1Qsb0JBQUksQ0FESztBQUVULDZCQUFhLEVBRko7QUFHVCxnQ0FBZ0IsRUFIUDtBQUlULG1DQUFtQixJQUFJLElBQUosRUFKVjtBQUtULG9DQUFvQixFQUxYO0FBTVQsc0NBQXNCO0FBTmIsYUFESjtBQVVULDhCQUFrQjtBQVZULFNBQWI7QUFhQTtBQUNBLGNBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEI7QUFDQSxjQUFLLGFBQUwsR0FBcUIsTUFBSyxhQUFMLENBQW1CLElBQW5CLE9BQXJCO0FBQ0EsY0FBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUNBLGNBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEI7QUFDQSxjQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCO0FBQ0EsY0FBSyxpQkFBTCxHQUF5QixNQUFLLGlCQUFMLENBQXVCLElBQXZCLE9BQXpCO0FBQ0EsY0FBSyxpQkFBTCxHQUF5QixNQUFLLGlCQUFMLENBQXVCLElBQXZCLE9BQXpCO0FBdkJhO0FBd0JoQjs7QUF6Qkw7QUFBQTtBQUFBLHNDQTJCMEIsU0EzQjFCLEVBMkI2QyxVQTNCN0MsRUEyQitEO0FBQ3ZELGdCQUFNLFlBQVMsa0JBQ1IsS0FBSyxLQURHLEVBQ0UsRUFDYixhQUFXLGtCQUNKLEtBQUssS0FBTCxDQUFXLFdBRFAsc0JBRU4sU0FGTSxFQUVNLFVBRk4sRUFERSxFQURGLENBQWY7QUFPQSxpQkFBSyxRQUFMLENBQWMsU0FBZDtBQUNIO0FBcENMO0FBQUE7QUFBQSx3Q0FzQzRCLEVBdEM1QixFQXNDd0MsTUF0Q3hDLEVBc0NzRDtBQUM5QyxnQkFBSSxNQUFNLEtBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLFNBQTVCLENBQXNDO0FBQUEsdUJBQUssRUFBRSxFQUFGLEtBQVMsRUFBZDtBQUFBLGFBQXRDLENBQVY7QUFFQSxnQkFBSSxXQUFXLE1BQWYsRUFBdUI7QUFDbkIsb0JBQUksT0FBTyxDQUFYLEVBQWM7QUFDVix5QkFBSyxRQUFMLENBQWMsRUFBRSxhQUFhLEtBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLEdBQTVCLENBQWYsRUFBZDtBQUNIO0FBQ0osYUFKRCxNQU1LLElBQUksV0FBVyxRQUFmLEVBQXlCO0FBQzFCLHFCQUFLLEtBQUwsQ0FBVyxnQkFBWCxDQUE0QixNQUE1QixDQUFtQyxHQUFuQyxFQUF3QyxDQUF4QztBQUNBLG9CQUFJLG9DQUNHLEtBQUssS0FBTCxDQUFXLGdCQURkLEVBQUo7QUFHQSxxQkFBSyxhQUFMLENBQW1CLEVBQW5CO0FBQ0EscUJBQUssWUFBTDtBQUNIO0FBQ0o7QUF2REw7QUFBQTtBQUFBLDRDQXlENkI7QUFDckIsaUJBQUssUUFBTCxDQUFjO0FBQ1YsNkJBQWE7QUFDVCx3QkFBSSxDQURLO0FBRVQsaUNBQWEsRUFGSjtBQUdULG9DQUFnQixFQUhQO0FBSVQsdUNBQW1CLElBQUksSUFBSixFQUpWO0FBS1Qsd0NBQW9CLEVBTFg7QUFNVCwwQ0FBc0I7QUFOYixpQkFESDtBQVVWLGtDQUFrQjtBQVZSLGFBQWQ7QUFhSDtBQXZFTDtBQUFBO0FBQUEsbUNBeUVvQjtBQUFBOztBQUNaLHdHQUFlLENBQUMsS0FBSyxLQUFMLENBQVcsV0FBM0IsRUFDSyxJQURMLENBQ1UsVUFBQyxRQUFELEVBQWE7QUFDZix3QkFBUSxHQUFSLENBQVksTUFBWjtBQUNBLHVCQUFLLGlCQUFMO0FBQ0EsdUJBQUssWUFBTDtBQUNBLHdCQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsYUFOTCxFQU1PLFVBQUMsR0FBRCxFQUFRLENBQ1YsQ0FQTCxFQVFLLEtBUkwsQ0FRVyxVQUFDLEdBQUQsRUFBUTtBQUNYLHdCQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0gsYUFWTDtBQVdIO0FBckZMO0FBQUE7QUFBQSxtQ0F1Rm9CO0FBQUE7O0FBQ1osMEdBQWlCLENBQUMsS0FBSyxLQUFMLENBQVcsV0FBN0IsRUFDSyxJQURMLENBQ1UsVUFBQyxRQUFELEVBQWE7QUFDZix3QkFBUSxHQUFSLENBQVksS0FBWjtBQUNBLHVCQUFLLGlCQUFMO0FBQ0EsdUJBQUssWUFBTDtBQUNILGFBTEwsRUFLTyxVQUFDLEdBQUQsRUFBUSxDQUFJLENBTG5CLEVBS3FCLEtBTHJCLENBSzJCLFVBQUMsR0FBRCxFQUFRO0FBQzNCLHdCQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0gsYUFQTDtBQVFIO0FBaEdMO0FBQUE7QUFBQSxzQ0FrRzBCLEVBbEcxQixFQWtHNEI7QUFBQTs7QUFDcEIsMEdBQWlCLENBQUMsRUFBbEIsRUFDSyxJQURMLENBQ1UsVUFBQyxRQUFELEVBQWE7QUFDZix1QkFBSyxZQUFMO0FBQ0gsYUFITCxFQUdPLFVBQUMsR0FBRCxFQUFRLENBQUksQ0FIbkIsRUFHcUIsS0FIckIsQ0FHMkIsVUFBQyxHQUFELEVBQVEsQ0FBSSxDQUh2QztBQUlIO0FBdkdMO0FBQUE7QUFBQSx1Q0F5R3dCO0FBQUE7O0FBQ2hCLHVHQUFjLEdBQ1QsSUFETCxDQUNVLFVBQUMsUUFBRCxFQUFhO0FBQ2YsdUJBQUssUUFBTCxDQUFjLEVBQUUsa0JBQWtCLFNBQVMsS0FBN0IsRUFBZDtBQUNBLHdCQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0gsYUFKTCxFQUlPLFVBQUMsR0FBRCxFQUFRLENBQUksQ0FKbkIsRUFJcUIsS0FKckIsQ0FJMkIsVUFBQyxHQUFELEVBQVEsQ0FBSSxDQUp2QztBQUtIO0FBL0dMO0FBQUE7QUFBQSw0Q0FpSDRCO0FBR3BCLGlCQUFLLFlBQUw7QUFDSDtBQXJITDtBQUFBO0FBQUEsaUNBdUhpQjtBQUVULG1CQUVJLDhEQUFLLFdBQVUsU0FBZixJQUNJLDJFQURKLEVBR0ksK0VBSEosQ0FGSjtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUE1Skw7O0FBQUE7QUFBQSxFQUE2QixnREFBN0IsRTs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUlPLElBQU0sUUFBK0MsU0FBL0MsS0FBK0MsQ0FBQyxLQUFELEVBQVU7QUFFbEUsV0FDSSw4REFBSyxXQUFXLG1CQUFtQixLQUFuQixDQUFoQixJQUNJLGdFQUFPLFNBQVMsTUFBTSxJQUF0QixJQUE2QixNQUFNLEtBQW5DLENBREosRUFFSSw4REFBSyxXQUFVLE9BQWYsSUFDSSxnRUFDSSxNQUFNLE1BQU0sSUFEaEIsRUFFSSxNQUFNLE1BQU0sSUFGaEIsRUFHSSxXQUFVLGNBSGQsRUFJSSxhQUFhLE1BQU0sV0FKdkIsRUFLSSxPQUFPLE1BQU0sS0FMakIsRUFNSSxVQUFVLGNBQWMsS0FBZCxDQU5kLEdBREosQ0FGSixFQVlJLDhEQUFLLFdBQVUsWUFBZixJQUE2QixNQUFNLEtBQW5DLENBWkosQ0FESjtBQWlCSCxDQW5CTTtBQXFCUCxJQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsQ0FBQyxLQUFELEVBQXVCO0FBQzlDLFFBQU0sZUFBZSxZQUFyQjtBQUNBLFdBQU8sTUFBTSxLQUFOLEdBQWlCLFlBQWpCLGtCQUE0QyxZQUFuRDtBQUNILENBSEQ7QUFLQSxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixDQUFDLEtBQUQ7QUFBQSxXQUF3QixVQUFDLENBQUQsRUFBMkM7QUFDckYsY0FBTSxRQUFOLENBQWUsRUFBRSxNQUFGLENBQVMsSUFBeEIsRUFBOEIsRUFBRSxNQUFGLENBQVMsS0FBdkM7QUFDSCxLQUZxQjtBQUFBLENBQXRCO0FBSUEsSUFBTSxhQUFhLFNBQWIsVUFBYSxDQUFDLEtBQUQ7QUFBQSxXQUF3QixVQUFDLENBQUQsRUFBNkM7QUFDcEYsWUFBSSxNQUFNLE9BQVYsRUFBbUI7QUFDZixnQkFBSSxFQUFFLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ25CLHNCQUFNLE9BQU47QUFDSDtBQUNKO0FBQ0osS0FOa0I7QUFBQSxDQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUdBO0FBUU8sSUFBTSxXQUFiO0FBQUE7O0FBQ0kseUJBQVksS0FBWixFQUFpQjtBQUFBOztBQUFBLDhIQUNQLEtBRE87O0FBRWIsY0FBSyxLQUFMLEdBQWE7QUFDVCw4QkFBa0I7QUFDZCxvQkFBSSxDQURVO0FBRWQsZ0NBQWdCLEVBRkY7QUFHZCxnQ0FBZ0IsRUFIRjtBQUlkLDJCQUFXLEVBSkc7QUFLZCw0QkFBWSxFQUxFO0FBTWQsK0JBQWUsRUFORDtBQU9kLDBCQUFVLEVBUEk7QUFRZCxnQ0FBZ0IsRUFSRjtBQVNkLCtCQUFlLEVBVEQ7QUFVZCwrQkFBZSxFQVZEO0FBV2QsbUNBQW1CO0FBWEwsYUFEVDtBQWNULDhCQUFrQjtBQWRULFNBQWI7QUFpQkEsY0FBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEI7QUFuQmE7QUFvQmhCOztBQXJCTDtBQUFBO0FBQUEsNENBdUI0QjtBQUNwQixpQkFBSyxRQUFMO0FBQ0g7QUF6Qkw7QUFBQTtBQUFBLG1DQTZCb0I7QUFBQTs7QUFDWiwrRkFBVSxHQUNMLElBREwsQ0FDVSxVQUFDLFFBQUQsRUFBYTtBQUNmLHVCQUFLLFFBQUwsQ0FBYyxFQUFFLGtCQUFrQixTQUFTLEtBQTdCLEVBQWQ7QUFDQSx3QkFBUSxHQUFSLENBQVksUUFBWjtBQUNILGFBSkwsRUFJTyxVQUFDLEdBQUQsRUFBUSxDQUFJLENBSm5CLEVBS0ssS0FMTCxDQUtXLFVBQUMsR0FBRCxFQUFRO0FBQ1gsd0JBQVEsR0FBUixDQUFZLEdBQVo7QUFDSCxhQVBMO0FBUUg7QUFDZTtBQUNKO0FBQ0E7O0FBekNoQjtBQUFBO0FBQUEsaUNBMENpQjtBQUNULG1CQUNJLDhEQUFLLE9BQU8sRUFBRSxXQUFXLFFBQWIsRUFBdUIsT0FBTyxTQUE5QixFQUF5QyxPQUFPLE1BQWhELEVBQXdELFNBQVMsV0FBakUsRUFBOEUsaUJBQWlCLFNBQS9GLEVBQVosSUFDRyw4YUFESCxDQURKO0FBVUg7QUFyREw7O0FBQUE7QUFBQSxFQUFpQyxnREFBakMsRTs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxrREFDSSxxREFBQyw4REFBRCxFQUFVLElBQVYsQ0FESixFQUVJLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUZKLEU7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRU8sSUFBTSxZQUEwQyxTQUExQyxTQUEwQyxHQUFLO0FBQ3hELFdBQ0kscURBQUMsb0RBQUQsRUFBTyxFQUFDLFNBQVMsNERBQVYsRUFBUCxFQUNJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLEdBQU4sRUFBVSxXQUFXLGlEQUFyQixFQUFOLEVBQ0kscURBQUMsd0RBQUQsRUFBVyxFQUFDLFdBQVcsdUVBQVosRUFBWCxDQURKLEVBRUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssT0FBTixFQUFjLFdBQVcsdUVBQXpCLEVBQU4sQ0FGSixFQUdJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLFVBQU4sRUFBaUIsV0FBVyw0RUFBNUIsRUFBTixDQUhKLEVBSUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssUUFBTixFQUFlLFdBQVcsb0ZBQTFCLEVBQU4sQ0FKSixFQUtJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLFlBQU4sRUFBbUIsV0FBVyxrRkFBOUIsRUFBTixDQUxKLEVBTUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssZ0JBQU4sRUFBdUIsV0FBVyw4RkFBbEMsRUFBTixDQU5KLENBREosQ0FESjtBQWVILENBaEJNLEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvLzxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtdG9wXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwICUgXCIsIGZsb2F0OiBcImxlZnRcIiwgcGFkZGluZzogXCIzMHB4IDBcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIgfX0gPlxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvaG9tZVwiIGNsYXNzTmFtZT1cImdsb3cgcHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxpY2l0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluTGlzdERpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwiYnRuXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcG9kY2FzdFwiIGNsYXNzTmFtZT1cImJ0biBcIj5Qb2RjYXN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImJ0biBcIj5BYm91dDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdHVzXCIgY2xhc3NOYW1lPVwiYnRuXCI+Q29udGFjdCBVczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvb3RlckNvbnRhaW5lciAvPlxyXG5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiOyBcclxuaW1wb3J0IHsgUHJpdmF0ZVBvbGljeSB9IGZyb20gXCIuLi9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcC1mb290ZXJiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXAtY29weXJpZ2h0XCIgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT5FbGljaXQgwqkyMDIwICB8ICBBbGwgUmlnaHRzIFJlc2VydmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZvb3Rlci1uYXYgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxQcml2YXRlUG9saWN5IC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyLnRzeCIsImltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9hcGlFeGVjdXRlXCI7XHJcbmltcG9ydCB7IElQcml2YXRlUG9saWN5UGFnZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ludGVyZmFjZXMvcHJpdmF0ZXBvbGljeS9JUHJpdmF0ZVBvbGljeVBhZ2VcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcIi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcml2YXRlUG9saWN5TGlzdCA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvcHJpdmF0ZXBvbGljeWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UHJpdmF0ZVBvbGljeUxpc3QgPSAoZGF0YTogSVByaXZhdGVQb2xpY3lQYWdlKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHBvc3RVUkwgPSBgL2FwaS9wcml2YXRlcG9saWN5YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHBvc3RVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUHJpdmF0ZVBvbGljeUxpc3QgPSAoZGF0YTogSVByaXZhdGVQb2xpY3lQYWdlKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHB1dFVSTCA9IGAke2Jhc2VVUkx9YXBpL3ByaXZhdGVwb2xpY3kvJHtkYXRhLmlkfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwdXRVUkwsIFwiUFVUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQcml2YXRlUG9saWN5TGlzdCA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvcHJpdmF0ZXBvbGljeS8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcml2YXRlUG9saWN5QXBpID0ge1xyXG4gICAgZ2V0UHJpdmF0ZVBvbGljeUxpc3QsIHBvc3RQcml2YXRlUG9saWN5TGlzdCwgdXBkYXRlUHJpdmF0ZVBvbGljeUxpc3QsIGRlbGV0ZVByaXZhdGVQb2xpY3lMaXN0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJpdmF0ZVBvbGljeU1vZGFsIHtcclxuICAgIHNob3dNb2RhbDogYm9vbGVhbjtcclxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlUG9saWN5TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByaXZhdGVQb2xpY3lNb2RhbCwge30+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcml2YXRlUG9saWN5TW9kYWwpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc2hvd01vZGFsKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBiYWNrZHJvcFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMyknLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MCxcclxuICAgICAgICAgICAgekluZGV4OiA5OTksXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1vZGFsU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogNTAwLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMCxcclxuICAgICAgICAgICAgekluZGV4OiAxMDAxXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBtb2RhbEJvZHk6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMCxcclxuICAgICAgICAgICAgekluZGV4OiAxMDAxLFxyXG4vKnNjcm9sbGJhciovb3ZlcmZsb3dZOiBcInNjcm9sbFwiIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2Ryb3BcIiBzdHlsZT17YmFja2Ryb3BTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+PHN0cm9uZz5Qcml2YXRlIFBvbGljaWVzOiA8L3N0cm9uZz48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lNb2RhbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVByaXZhdGVQb2xpY3ksIElHcmlkVmlldyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2luZGV4XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByaXZhdGVQb2xpY3lMaXN0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUdyaWRWaWV3PElQcml2YXRlUG9saWN5Pj4gPSAocHJvcHM6IElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmhlYWRlckNvbHVtbnMgIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oZWFkZXJDb2x1bW5zLm1hcCgoaXRtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtpdG0uY29sdW1uU3R5bGV9PjxzdHJvbmc+e2l0bS5jb2x1bW5OYW1lfTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoXCJcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kYXRhSXRlbXMubWFwKGJ1aWxkUm93KHByb3BzKSl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgYnVpbGRSb3cgPSAocHJvcHM6IElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4pID0+IChpdG06IElQcml2YXRlUG9saWN5LCBuZHg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT17bmR4fT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjx1PjxzdHJvbmc+e2l0bS5wcml2YXRlUG9saWN5TmFtZX06IDwvc3Ryb25nPjwvdT48L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPntpdG0ucHJpdmF0ZVBvbGljeURldGFpbHN9PC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5jb25zdCBidXR0b25DbGljayA9IChwcm9wczogSUdyaWRWaWV3PElQcml2YXRlUG9saWN5PiwgaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpID0+IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQnV0dG9uQ2xpY2soaWQsIGFjdGlvbik7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUxpc3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBvZGNhc3QgfSBmcm9tIFwiLi4vUG9kY2FzdC9pbmRleFwiO1xyXG5pbXBvcnQgeyBBYm91dFVzUGFnZSB9IGZyb20gXCIuLi9BYm91dFVzL0Fib3V0VXNQYWdlXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEdyYXlCYW5uZXIgfSBmcm9tIFwiLi4vQmFubmVycy9HcmV5QmFubmVyXCI7XHJcbmltcG9ydCB7IEFib3V0VXNGb3JtIH0gZnJvbSBcIi4uL0Fib3V0VXMvQWJvdXRVc0Zvcm1cIjtcclxuLy9pbXBvcnQgeyBDb250YWN0VXMgfSBmcm9tIFwiLi4vQ29udGFjdFVzL0NvbnRhY3RVc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVQYWdlOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUgaGVyby1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGNvbnRhY3R1c1wiIGhyZWY9XCJtYWlsdG86TWFubnlAZWxpY2l0LnVzXCI+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8QWJvdXRVc1BhZ2UgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQb2RjYXN0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbi8vPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuLy8gICAgPGlmcmFtZSBzcmM9J2h0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vZWxpY2l0LnVzL2hhbGZUaG91Z2h0MS5tcDQnXHJcbi8vICAgICAgICBmcmFtZUJvcmRlcj0nMCdcclxuLy8gICAgICAgIC8vYWxsb3c9J2F1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWEnXHJcbi8vICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuLy8gICAgICAgIHRpdGxlPSd2aWRlbydcclxuLy8gICAgLz5cclxuLy88L2Rpdj4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ib21lL0hvbWUudHN4IiwiZXhwb3J0ICogZnJvbSBcIi4vUG9kY2FzdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9Qb2RjYXN0Rm9ybVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9Qb2RjYXN0TGlzdFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9pbmRleC50c3giLCJpbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcbmltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9hcGlFeGVjdXRlXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCIvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9kY2FzdExpc3QgPSAoKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGdldFVSTCA9IGAke2Jhc2VVUkx9YXBpL3BvZGNhc3RgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoZ2V0VVJMLCBcIkdFVFwiLCBudWxsKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFBvZGNhc3RMaXN0ID0gKGRhdGE6IElQb2RjYXN0TGlzdCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwb3N0VVJMID0gYC9hcGkvcG9kY2FzdGA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwb3N0VVJMLCBcIlBPU1RcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBvZGNhc3RMaXN0ID0gKGRhdGE6IElQb2RjYXN0TGlzdCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9wb2RjYXN0LyR7ZGF0YS5pZH1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocHV0VVJMLCBcIlBVVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9kY2FzdExpc3QgPSAoZGF0YTogbnVtYmVyKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGRlbGV0ZVVSTCA9IGAke2Jhc2VVUkx9YXBpL3BvZGNhc3QvJHtkYXRhfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShkZWxldGVVUkwsIFwiREVMRVRFXCIsIGRhdGEpXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGkudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElQb2RjYXN0TGlzdCB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0ludGVyZmFjZXMvaW5kZXhcIjtcclxuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiwgVGV4dGFyZWEgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbmRleFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBJUG9kY2FzdExpc3RGb3JtIHtcclxuICAgIHBvZGNhc3RMaXN0OiBJUG9kY2FzdExpc3Q7XHJcbiAgICBvbkNoYW5nZTogKGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgb25TdWJtaXQ6ICgpID0+IHZvaWQ7XHJcbiAgICBvblVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUG9kY2FzdEZvcm06IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJUG9kY2FzdExpc3RGb3JtPiA9IChwcm9wczogSVBvZGNhc3RMaXN0Rm9ybSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLXNpbmdsZS1jb21wb25lbnRcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWZvcm1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1oZWFkZXIgZ3JleS1iZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Qb2RjYXN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tY29tcG9uZW50LWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWhlbHBlci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucG9kY2FzdExpc3QucG9kY2FzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvZGNhc3REZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wb2RjYXN0TGlzdC5wb2RjYXN0RGV0YWlsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBEZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwbG9hZCBWaWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9kY2FzdFZpZGVvVXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wb2RjYXN0TGlzdC5wb2RjYXN0VmlkZW9VcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVwbG9hZCBWaWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVcGxvYWQgUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9kY2FzdFBpY3R1cmVVcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3RQaWN0dXJlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVcGxvYWQgUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYW4tYnRuIGFuLWJ0bi1wcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYW4tYnRuIGFuLWJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVcGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0Rm9ybS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUJ1dHRvblByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2J1dHRvbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUlucHV0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQYXNzd29yZDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHByb3BzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj57cHJvcHMuZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vcGFzc3dvcmQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElLZXlWYWx1ZSwgSURyb3BEb3duTGlzdFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IGZvcm1hdFdyYXBwZXJDbGFzcyA9IChwcm9wczogSURyb3BEb3duTGlzdFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICByZXR1cm4gcHJvcHMuZXJyb3IgPyBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOiB3cmFwcGVyQ2xhc3M7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IElEcm9wRG93bkxpc3RQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRHJvcERvd25MaXN0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SURyb3BEb3duTGlzdFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5rZXl9IHZhbHVlPXtvcHRpb24ua2V5fT57b3B0aW9uLnZhbHVlfTwvb3B0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3Byb3BzLnNlbGVjdGVkVmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHByb3BzKX0gaWQ9e3Byb3BzLm5hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPntvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2Ryb3Bkb3dubGlzdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVRleHRhcmVhUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRhcmVhOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SVRleHRhcmVhUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtYXRXcmFwcGVyQ2xhc3MocHJvcHMpfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcmVxdWlyZWQ9e3Byb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWUgPyAocHJvcHMuY2xhc3NOYW1lICsgXCJmb3JtLWNvbnRyb2xcIikgOiBcImZvcm0tY29udHJvbFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e3Byb3BzLnJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPntwcm9wcy5lcnJvcn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdFdyYXBwZXJDbGFzcyA9IChwcm9wczogSVRleHRhcmVhUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSVRleHRhcmVhUHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBvbkJsdXIgPSAocHJvcHM6IElUZXh0YXJlYVByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcclxuICAgIGlmIChwcm9wcy5vbkJsdXIpIHtcclxuICAgICAgICBwcm9wcy5vbkJsdXIoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS90ZXh0YXJlYS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVBvZGNhc3RMaXN0IH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW50ZXJmYWNlcy9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8VD4ge1xyXG4gICAgZGF0YUl0ZW1zOiBUW107XHJcbiAgICBzaG93RWRpdEJ1dHRvbjogYm9vbGVhbjtcclxuICAgIHNob3dEZWxldGVCdXR0b246IGJvb2xlYW47XHJcbiAgICBvbkJ1dHRvbkNsaWNrOiAoaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBoZWFkZXJDb2x1bW5zPzogSUhlYWRlckNvbHVtbltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIZWFkZXJDb2x1bW4ge1xyXG4gICAgY29sdW1uTmFtZTogc3RyaW5nO1xyXG4gICAgY29sdW1uU3R5bGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBvZGNhc3RMaXN0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SVBvZGNhc3RMaXN0R3JpZFZpZXdPcHRpb25zPElQb2RjYXN0TGlzdD4+ID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLXNpbmdsZS1jb21wb25lbnQgd2l0aC1zaGFkb3dcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1jb21wb25lbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkxpc3Q6PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1jb21wb25lbnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4taGVscGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIiB9fSAgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmhlYWRlckNvbHVtbnMgIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oZWFkZXJDb2x1bW5zLm1hcCgoaXRtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5PXtpfSBjbGFzc05hbWU9e2l0bS5jb2x1bW5TdHlsZX0+PHN0cm9uZz57aXRtLmNvbHVtbk5hbWV9PC9zdHJvbmc+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YUl0ZW1zLm1hcChidWlsZFJvdyhwcm9wcykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zY3JvbGxiYXIteS1yYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtc2Nyb2xsYmFyLXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBidWlsZFJvdyA9IChwcm9wczogSVBvZGNhc3RMaXN0R3JpZFZpZXdPcHRpb25zPElQb2RjYXN0TGlzdD4pID0+IChpdG06IElQb2RjYXN0TGlzdCwgbmR4OiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRib2R5IGtleT17bmR4fT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0RGV0YWlsc308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0VmlkZW9VcGxvYWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiYXNpcy0yMFwiPntpdG0ucG9kY2FzdFBpY3R1cmVVcGxvYWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiYXNpcy0yMFwiPntpdG0ucG9kY2FzdFVwbG9hZERhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJiYXNpcy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93RWRpdEJ1dHRvbiA/ICg8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtidXR0b25DbGljayhwcm9wcywgaXRtLmlkLCBcImVkaXRcIil9PkVkaXQ8L2J1dHRvbj4pIDogKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93RGVsZXRlQnV0dG9uID8gKDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFuLWJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17YnV0dG9uQ2xpY2socHJvcHMsIGl0bS5pZCwgXCJkZWxldGVcIil9PkRlbGV0ZTwvYnV0dG9uPikgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBidXR0b25DbGljayA9IChwcm9wczogSVBvZGNhc3RMaXN0R3JpZFZpZXdPcHRpb25zPElQb2RjYXN0TGlzdD4sIGlkOiBudW1iZXIsIGFjdGlvbjogc3RyaW5nKSA9PiAoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkJ1dHRvbkNsaWNrKGlkLCBhY3Rpb24pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0TGlzdC50c3giLCJpbXBvcnQgeyBhcGlFeGVjdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9hcGkvYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzL2Fib3V0dXMvSUFib3V0VXNQYWdlXCI7XHJcblxyXG5jb25zdCBiYXNlVVJMID0gXCIvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWJvdXRVcyA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvYWJvdXR1c2A7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0QWJvdXRVcyA9IChkYXRhOiBJQWJvdXRVc1BhZ2UpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgcG9zdFVSTCA9IGAvYXBpL2Fib3V0dXNgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocG9zdFVSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVBYm91dFVzID0gKGRhdGE6IElBYm91dFVzUGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwdXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9hYm91dHVzLyR7ZGF0YS5pZH1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocHV0VVJMLCBcIlBVVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQWJvdXRVcyA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvYWJvdXR1cy8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2Fib3V0dXMvQWJvdXRVc0FwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgeyBJQ29udGFjdFVzIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvQ29udGFjdFVzL0lDb250YWN0VXNcIjtcclxuaW1wb3J0IHsgQ29udGFjdFVzQXBpLCBzZW5kRW1haWxDb250YWN0VXMgfSBmcm9tIFwiLi4vLi4vYXBpL2NvbnRhY3R1cy9Db250YWN0VXNBcGlcIjtcclxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2lucHV0XCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbi8vaW1wb3J0IHsgQ29udGFjdFVzRm9ybSB9IGZyb20gXCIuL0NvbnRhY3RVc0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RVcyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgdG9waWM6IHN0cmluZztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0VXNTdGF0ZSB7XHJcbiAgICBjb250YWN0VXM6IElDb250YWN0VXM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0VXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElDb250YWN0VXNTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29udGFjdFVzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0b3BpYzogXCJcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9iaW5kXHJcbiAgICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlID0gdGhpcy5vbkZpZWxkQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZW5kRW1haWxCdXR0b25DbGljayA9IHRoaXMuc2VuZEVtYWlsQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRmllbGRDaGFuZ2UoZmllbGROYW1lOiBzdHJpbmcsIGZpZWxkVmFsdWU6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIGNvbnRhY3RVczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5jb250YWN0VXMsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogZmllbGRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTsgLy8sICgpID0+IHsgdGhpcy52YWxpZGF0ZUZpZWxkKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRW1haWxCdXR0b25DbGljaygpIHtcclxuXHJcbiAgICAgICAgQ29udGFjdFVzQXBpLnNlbmRFbWFpbENvbnRhY3RVcyh0aGlzLnN0YXRlLmNvbnRhY3RVcylcclxuXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWN0VXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJ0Zy1jb21tZW50Zm9ybSBoZWxwLWZvcm1cIiBpZD1cInRnLWNvbW1lbnRmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRnLXNlY3Rpb24taGVhZGluZ1wiPjxoMj5Db250YWN0IEVsaWNpdDwvaDI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZyBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fSBjbGFzc05hbWU9XCJjb250YWN0dXNcIj5OT1RFOjwvc3Ryb25nPiBQbGVhc2UgdXNlIHRoaXMgPGEgY2xhc3NOYW1lPVwiY29udGFjdHVzXCIgaHJlZj1cIm1haWx0bzpNYW5ueUBlbGljaXQudXNcIj5Db250YWN0IFVzIEhFUkU8L2E+LiBXZSdkIGJlIHN0b2tlZCB0byBoZWFyIGZyb20geW91ITwvcD5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3RVcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkQ2hhbmdlfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRvcGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvcGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLnRvcGljfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkQ2hhbmdlfT48L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3RVcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3RVcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs4fTwvVGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3R1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VuZEVtYWlsQnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db250YWN0VXMvQ29udGFjdFVzLnRzeCIsImltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vYXBpRXhlY3V0ZVwiO1xyXG5pbXBvcnQgeyBJQ29udGFjdFVzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFjdFVzL0NvbnRhY3RVc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbENvbnRhY3RVcyA9IChkYXRhOiBJQ29udGFjdFVzKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHNlbmRFbWFpbENvbnRhY3RVc1VSTCA9IGAvYXBpL2NvbnRhY3RVc2A7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShzZW5kRW1haWxDb250YWN0VXNVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdFVzQXBpID0ge1xyXG4gICAgc2VuZEVtYWlsQ29udGFjdFVzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvY29udGFjdHVzL0NvbnRhY3RVc0FwaS50c3giLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpRXhlY3V0ZSA9ICh1cmw6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuZGF0YSksIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F0Y2ggZXJyXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsIGRhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnB1dCh1cmwsIGRhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2FwaUV4ZWN1dGUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBJUHJpdmF0ZVBvbGljeSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL1ByaXZhdGVQb2xpY3kvSVByaXZhdGVQb2xpY3lcIjtcclxuaW1wb3J0IHsgUHJpdmF0ZVBvbGljeUFwaSB9IGZyb20gXCIuLi8uLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpXCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3lNb2RhbCB9IGZyb20gXCIuL1ByaXZhdGVQb2xpY3lNb2RhbFwiO1xyXG5pbXBvcnQgeyBQcml2YXRlUG9saWN5TGlzdCB9IGZyb20gXCIuL1ByaXZhdGVQb2xpY3lMaXN0XCI7XHJcblxyXG4vL1wiQmx1ZXByaW50XCIgb3IgaW50ZXJmYWNlIGZvciBvdXIgTW9kYWwgU3RhdGVcclxuaW50ZXJmYWNlIElQdWJsaWNQcml2YWN5TW9kYWxXaW5kb3dTdGF0ZSB7XHJcbiAgICBwcml2YXRlUG9saWNpZXNEaXNwbGF5SXRlbXM6IElQcml2YXRlUG9saWN5W107XHJcbiAgICBzaG93TW9kYWw6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlUG9saWN5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJUHVibGljUHJpdmFjeU1vZGFsV2luZG93U3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHByaXZhdGVQb2xpY2llc0Rpc3BsYXlJdGVtczogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubW9kYWxUb2dnbGUgPSB0aGlzLm1vZGFsVG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb2RhbFRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGxvYWREYXRhTGlzdCgpIHtcclxuICAgICAgICBQcml2YXRlUG9saWN5QXBpLmdldFByaXZhdGVQb2xpY3lMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpdmF0ZVBvbGljaWVzRGlzcGxheUl0ZW1zOiByZXNwb25zZS5pdGVtcyB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4geyBjb25zb2xlLmxvZyhcImVycm9yIVwiLCBlcnIpOyB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5tb2RhbFRvZ2dsZX0gY2xhc3NOYW1lPVwicHJpdmFjeVwiPlByaXZhY3k8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxQcml2YXRlUG9saWN5TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaXZhdGVQb2xpY3lMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJdGVtcz17dGhpcy5zdGF0ZS5wcml2YXRlUG9saWNpZXNEaXNwbGF5SXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQnV0dG9uQ2xpY2s9e3RoaXMubG9hZERhdGFMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1ByaXZhdGVQb2xpY3lNb2RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRQb2RjYXN0TGlzdCwgcG9zdFBvZGNhc3RMaXN0LCB1cGRhdGVQb2RjYXN0TGlzdCwgZGVsZXRlUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGlcIjtcclxuaW1wb3J0IHsgUG9kY2FzdEZvcm0sIFBvZGNhc3RMaXN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgR3JheUJhbm5lciB9IGZyb20gXCIuLi9CYW5uZXJzL0dyZXlCYW5uZXJcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuaW1wb3J0IHsgSVBvZGNhc3RMaXN0IH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW50ZXJmYWNlcy9pbmRleFwiO1xyXG5pbXBvcnQgeyBEcm9wRG93bkxpc3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9kcm9wZG93bmxpc3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvZGNhc3RMaXN0U3RhdGUge1xyXG4gICAgcG9kY2FzdExpc3Q6IElQb2RjYXN0TGlzdDtcclxuICAgIHBvZGNhc3RMaXN0SXRlbXM6IElQb2RjYXN0TGlzdFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUG9kY2FzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSVBvZGNhc3RMaXN0U3RhdGU+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcG9kY2FzdExpc3Q6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0RGV0YWlsczogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RVcGxvYWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFZpZGVvVXBsb2FkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFBpY3R1cmVVcGxvYWQ6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdEl0ZW1zOiBbXSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vYmluZCBoZXJlIHBsZWFzZVxyXG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZSA9IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2sgPSB0aGlzLm9uRGVsZXRlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRmllbGRDaGFuZ2UgPSB0aGlzLm9uRmllbGRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCA9IHRoaXMubG9hZERhdGFMaXN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5saXN0QnV0dG9uQ2xpY2sgPSB0aGlzLmxpc3RCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTdGF0ZUFuZEZvcm0gPSB0aGlzLmNsZWFyU3RhdGVBbmRGb3JtLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IHRoaXMuY29tcG9uZW50RGlkTW91bnQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRmllbGRDaGFuZ2UoZmllbGROYW1lOiBzdHJpbmcsIGZpZWxkVmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgcG9kY2FzdExpc3Q6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucG9kY2FzdExpc3QsXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogZmllbGRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxpc3RCdXR0b25DbGljayhpZDogbnVtYmVyLCBhY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIGxldCBuZHggPSB0aGlzLnN0YXRlLnBvZGNhc3RMaXN0SXRlbXMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gaWQpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aW9uID09PSBcImVkaXRcIikge1xyXG4gICAgICAgICAgICBpZiAobmR4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb2RjYXN0TGlzdDogdGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zW25keF0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJkZWxldGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBvZGNhc3RMaXN0SXRlbXMuc3BsaWNlKG5keCwgMSlcclxuICAgICAgICAgICAgbGV0IGl0bXMgPSBbXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvZGNhc3RMaXN0SXRlbXNcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrKGlkKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhclN0YXRlQW5kRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcG9kY2FzdExpc3Q6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0RGV0YWlsczogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3RVcGxvYWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFZpZGVvVXBsb2FkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFBpY3R1cmVVcGxvYWQ6IFwiXCIsXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdEl0ZW1zOiBbXSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblN1Ym1pdCgpIHtcclxuICAgICAgICBwb3N0UG9kY2FzdExpc3QodGhpcy5zdGF0ZS5wb2RjYXN0TGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBPU1RcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0ZUFuZEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdXBkYXRlUG9kY2FzdExpc3QodGhpcy5zdGF0ZS5wb2RjYXN0TGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBVVFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0YXRlQW5kRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRGVsZXRlQ2xpY2soaWQpIHtcclxuICAgICAgICBkZWxldGVQb2RjYXN0TGlzdChpZClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7IH0pLmNhdGNoKChlcnIpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkRGF0YUxpc3QoKSB7XHJcbiAgICAgICAgZ2V0UG9kY2FzdExpc3QoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb2RjYXN0TGlzdEl0ZW1zOiByZXNwb25zZS5pdGVtcyB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7IH0pLmNhdGNoKChlcnIpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9kY2FzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlBvZGNhc3Q8L2gyPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwPkNPTUlORyBTT09OITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAvL3JldHVybiAoXHJcbiAgICAgICAgLy8gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAvLyAgICAgICAgPFBvZGNhc3RGb3JtXHJcbiAgICAgICAgLy8gICAgICAgICAgICBwb2RjYXN0TGlzdD17dGhpcy5zdGF0ZS5wb2RjYXN0TGlzdH1cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uVXBkYXRlPXt0aGlzLm9uVXBkYXRlfVxyXG4gICAgICAgIC8vICAgICAgICAvPlxyXG5cclxuICAgICAgICAvLyAgICAgICAgPFBvZGNhc3RMaXN0XHJcbiAgICAgICAgLy8gICAgICAgICAgICBkYXRhSXRlbXM9e3RoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtc31cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uQnV0dG9uQ2xpY2s9e3RoaXMubGlzdEJ1dHRvbkNsaWNrfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgc2hvd0RlbGV0ZUJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAvLyAgICAgICAgICAgIHNob3dFZGl0QnV0dG9uPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgaGVhZGVyQ29sdW1ucz17W1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHsgY29sdW1uTmFtZTogXCJOYW1lXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiRGV0YWlsc1wiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIlVwbG9hZCBWaWRlb1wiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIlVwbG9hZCBQaWN0dXJlXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiVXBsb2FkIERhdGVcIiwgY29sdW1uU3R5bGU6IFwiYmFzaXMtMjBcIiB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBdfVxyXG4gICAgICAgIC8vICAgICAgICAvPlxyXG5cclxuICAgICAgICAvLyAgICAgICAgPGRpdj5cclxuICAgICAgICAvLyAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgPC9kaXY+XHJcbiAgICAgICAgLy8pXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0LnRzeCIsImV4cG9ydCAqIGZyb20gXCIuL2J1dHRvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pbnB1dFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYXNzd29yZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kcm9wZG93bmxpc3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdGV4dGFyZWFcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dChwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+e3Byb3BzLmVycm9yfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdFdyYXBwZXJDbGFzcyA9IChwcm9wczogSUlucHV0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSUlucHV0UHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBvbktleVByZXNzID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGlmIChwcm9wcy5vbkVudGVyKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uRW50ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbnB1dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuaW1wb3J0IHsgSUFib3V0VXNQYWdlIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvYWJvdXR1cy9JQWJvdXRVc1BhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0QWJvdXRVcyB9IGZyb20gXCIuLi8uLi9hcGkvYWJvdXR1cy9BYm91dFVzQXBpXCI7XHJcbmltcG9ydCB7IEFib3V0VXNGb3JtIH0gZnJvbSBcIi4vQWJvdXRVc0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFib3V0VXNTdGF0ZSB7XHJcbiAgICBhYm91dFVzUGFnZVN0YXRlOiBJQWJvdXRVc1BhZ2U7XHJcbiAgICBhYm91dFVzTGlzdEl0ZW1zOiBJQWJvdXRVc1BhZ2VbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFib3V0VXNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJQWJvdXRVc1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhYm91dFVzUGFnZVN0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIGFib3V0VXNTdW1tYXJ5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRVc1BpY3R1cmU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dFRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXROaWNrbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0QmlvOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRJbnN0YWdyYW06IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dEZhY2Vib29rOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRMaW5rZWRJbjogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0RW1haWxDb250YWN0OiBcIlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhYm91dFVzTGlzdEl0ZW1zOiBbXSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZERhdGEgPSB0aGlzLmxvYWREYXRhLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgZ2V0QWJvdXRVcygpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFib3V0VXNMaXN0SXRlbXM6IHJlc3BvbnNlLml0ZW1zIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy88QWJvdXRVc0Zvcm1cclxuICAgICAgICAgICAgICAgIC8vICAgIGFib3V0VXM9e3RoaXMuc3RhdGUuYWJvdXRVc0xpc3RJdGVtc31cclxuICAgICAgICAgICAgICAgIC8vLz5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcIiNmOGY4ZmZcIiwgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjMwcHggMzBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMFwiIH19PlxyXG4gICAgICAgICAgICAgICA8cD4gRWxpY2l0IGlzIGRlZGljYXRlZCB0byB0aGUgY3JlYXRpb24gJiBtYWludGFpbmluZyBvZiBjb21tdW5pdHkgY29ubmVjdGlvbnMgYmV0d2VlbiBncm91cHMgYW5kIGluZGl2aWR1YWxzIHdob3NlIGxpdmVzIGFyZSBlbm1lc2hlZCBpbiB0aGUgTXVzaWMsIEFydCwgYW5kIEVudGVydGFpbm1lbnQgSW5kdXN0cnkuIE91ciBwcmlvcml0eSBpcyB0byBmYWNpbGl0YXRlIHRoZSBzdXBwb3J0IG9mIGJhbmRzLCBncm91cHMsIGFuZCBwZW9wbGUgaW52b2x2ZWQgaW4gb3JkZXIgdG8gc3ByZWFkIHRoZWlyIGNyZWF0aXZlIHdvcmsgYW5kIHBlcnNvbmFsIG1lc3NhZ2UuICAgICBXZSB3b3JrIGZvciB0aGUgQXNwaXJpbmcgYW5kIEluc3BpcmluZy5cclxuICAgIDwvcD5cclxuICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Fib3V0VXMvQWJvdXRVc1BhZ2UudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQXBwUm91dGVyIH0gZnJvbSBcIi4uL3NyYy9yb3V0ZXJcIjtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHBSb3V0ZXIgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcclxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGUsIGJyb3dzZXJIaXN0b3J5LCBJbmRleFJvdXRlLCBSb3V0ZXIsIGhhc2hIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9hcHBcIjtcclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWUvSG9tZVwiO1xyXG5pbXBvcnQgeyBQb2RjYXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RcIjtcclxuaW1wb3J0IHsgQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Fib3V0VXMvQWJvdXRVc1BhZ2VcIjtcclxuaW1wb3J0IHsgUnNzRmVlZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvUnNzRmVlZC9Sc3NGZWVkXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBQcml2YXRlUG9saWN5IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lcIjtcclxuaW1wb3J0IHsgQ29udGFjdFVzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Db250YWN0VXMvQ29udGFjdFVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwUm91dGVyOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxyXG4gICAgICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9kY2FzdFwiIGNvbXBvbmVudD17UG9kY2FzdH0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dFVzUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbnRhY3R1c1wiIGNvbXBvbmVudD17Q29udGFjdFVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJpdmF0ZXBvbGljeVwiIGNvbXBvbmVudD17UHJpdmF0ZVBvbGljeX0gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JvdXRlci50c3giXSwic291cmNlUm9vdCI6IiJ9