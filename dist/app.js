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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeU1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUxpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9idXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vcGFzc3dvcmQudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdExpc3QudHN4Iiwid2VicGFjazovLy8uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdFVzL0NvbnRhY3RVcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL2NvbnRhY3R1cy9Db250YWN0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2FwaS9hcGlFeGVjdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3QudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3JvdXRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTSxNQUFvQyxTQUFwQyxHQUFvQyxDQUFDLEtBQUQsRUFBVTtBQUV2RCxXQUNJLGtFQUNJLHFEQUFDLHlFQUFELEVBQU8sSUFBUCxDQURKLEVBRUssTUFBTSxRQUZYLENBREo7QUFRSCxDQVZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUVPLElBQU0sTUFBYjtBQUFBOztBQUVJLG9CQUFZLEtBQVosRUFBaUI7QUFBQTs7QUFBQSxvSEFDUCxLQURPOztBQUViLGNBQUssS0FBTCxHQUFhLEVBQWI7QUFGYTtBQUdoQjtBQUVEOzs7QUFQSjtBQUFBO0FBQUEsaUNBUWlCO0FBQ1QsbUJBQ0kscURBQUMsK0NBQUQsRUFBZSxJQUFmLEVBRUksOERBQUssV0FBVSxLQUFmLElBQ0ksOERBQUssV0FBVSxTQUFmLElBQ0kscUVBQ0ksNERBQUcsTUFBSyxPQUFSLEVBQWdCLFdBQVUsZ0JBQTFCLElBQTBDLFFBQTFDLENBREosQ0FESixDQURKLEVBUUksOERBQUssV0FBVSxhQUFmLElBQ0kscURBQUMsa0RBQUQsRUFBSyxFQUFDLElBQUcsT0FBSixFQUFZLFdBQVUsS0FBdEIsRUFBTCxF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RUFBTyxFQUFDLFNBQVMsNERBQVYsRUFBUCxFQUNJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLEdBQU4sRUFBVSxXQUFXLGlEQUFyQixFQUFOLEVBQ0kscURBQUMsd0RBQUQsRUFBVyxFQUFDLFdBQVcsdUVBQVosRUFBWCxDQURKLEVBRUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssT0FBTixFQUFjLFdBQVcsdUVBQXpCLEVBQU4sQ0FGSixFQUdJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLFVBQU4sRUFBaUIsV0FBVyw0RUFBNUIsRUFBTixDQUhKLEVBSUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssUUFBTixFQUFlLFdBQVcsb0ZBQTFCLEVBQU4sQ0FKSixFQUtJLHFEQUFDLG1EQUFELEVBQU0sRUFBQyxNQUFLLFlBQU4sRUFBbUIsV0FBVyxrRkFBOUIsRUFBTixDQUxKLEVBTUkscURBQUMsbURBQUQsRUFBTSxFQUFDLE1BQUssZ0JBQU4sRUFBdUIsV0FBVyw4RkFBbEMsRUFBTixDQU5KLENBREosQ0FESjtBQWVILENBaEJNLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT57XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vPGRpdiBjbGFzc05hbWU9XCJmaXhlZC10b3BcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAgJSBcIiwgZmxvYXQ6IFwibGVmdFwiLCBwYWRkaW5nOiBcIjMwcHggMFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIiB9fSA+XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ob21lXCIgY2xhc3NOYW1lPVwiZ2xvdyBwdWxsLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGljaXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5MaXN0RGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2hvbWVcIiBjbGFzc05hbWU9XCJidG5cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wb2RjYXN0XCIgY2xhc3NOYW1lPVwiYnRuIFwiPlBvZGNhc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwiYnRuIFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb250YWN0dXNcIiBjbGFzc05hbWU9XCJidG5cIj5Db250YWN0IFVzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyQ29udGFpbmVyIC8+XHJcblxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7IFxyXG5pbXBvcnQgeyBQcml2YXRlUG9saWN5IH0gZnJvbSBcIi4uL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVwLWZvb3RlcmJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcC1jb3B5cmlnaHRcIiBzdHlsZT17e2NvbG9yOlwid2hpdGVcIn19PkVsaWNpdCDCqTIwMjAgIHwgIEFsbCBSaWdodHMgUmVzZXJ2ZWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZm9vdGVyLW5hdiBwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PFByaXZhdGVQb2xpY3kgLz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJDb250YWluZXIudHN4IiwiaW1wb3J0IHsgYXBpRXhlY3V0ZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpL2FwaUV4ZWN1dGVcIjtcclxuaW1wb3J0IHsgSVByaXZhdGVQb2xpY3lQYWdlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlcy9wcml2YXRlcG9saWN5L0lQcml2YXRlUG9saWN5UGFnZVwiO1xyXG5cclxuY29uc3QgYmFzZVVSTCA9IFwiL1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByaXZhdGVQb2xpY3lMaXN0ID0gKCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBnZXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9wcml2YXRlcG9saWN5YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGdldFVSTCwgXCJHRVRcIiwgbnVsbClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RQcml2YXRlUG9saWN5TGlzdCA9IChkYXRhOiBJUHJpdmF0ZVBvbGljeVBhZ2UpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgcG9zdFVSTCA9IGAvYXBpL3ByaXZhdGVwb2xpY3lgO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUocG9zdFVSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQcml2YXRlUG9saWN5TGlzdCA9IChkYXRhOiBJUHJpdmF0ZVBvbGljeVBhZ2UpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgcHV0VVJMID0gYCR7YmFzZVVSTH1hcGkvcHJpdmF0ZXBvbGljeS8ke2RhdGEuaWR9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHB1dFVSTCwgXCJQVVRcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByaXZhdGVQb2xpY3lMaXN0ID0gKGRhdGE6IG51bWJlcik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBkZWxldGVVUkwgPSBgJHtiYXNlVVJMfWFwaS9wcml2YXRlcG9saWN5LyR7ZGF0YX1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoZGVsZXRlVVJMLCBcIkRFTEVURVwiLCBkYXRhKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByaXZhdGVQb2xpY3lBcGkgPSB7XHJcbiAgICBnZXRQcml2YXRlUG9saWN5TGlzdCwgcG9zdFByaXZhdGVQb2xpY3lMaXN0LCB1cGRhdGVQcml2YXRlUG9saWN5TGlzdCwgZGVsZXRlUHJpdmF0ZVBvbGljeUxpc3RcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lBcGkudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcml2YXRlUG9saWN5TW9kYWwge1xyXG4gICAgc2hvd01vZGFsOiBib29sZWFuO1xyXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhdGVQb2xpY3lNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJpdmF0ZVBvbGljeU1vZGFsLCB7fT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByaXZhdGVQb2xpY3lNb2RhbCkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5zaG93TW9kYWwpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGJhY2tkcm9wU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC4zKScsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwLFxyXG4gICAgICAgICAgICB6SW5kZXg6IDk5OSxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgbW9kYWxTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDUwMCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwLFxyXG4gICAgICAgICAgICB6SW5kZXg6IDEwMDFcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1vZGFsQm9keTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDUwMCxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgICAgICAgICB6SW5kZXg6IDEwMDEsXHJcbi8qc2Nyb2xsYmFyKi9vdmVyZmxvd1k6IFwic2Nyb2xsXCIgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZHJvcFwiIHN0eWxlPXtiYWNrZHJvcFN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT48c3Ryb25nPlByaXZhdGUgUG9saWNpZXM6IDwvc3Ryb25nPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bW9kYWxCb2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeU1vZGFsLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJUHJpdmF0ZVBvbGljeSwgSUdyaWRWaWV3IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvaW5kZXhcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJpdmF0ZVBvbGljeUxpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJR3JpZFZpZXc8SVByaXZhdGVQb2xpY3k+PiA9IChwcm9wczogSUdyaWRWaWV3PElQcml2YXRlUG9saWN5PikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaGVhZGVyQ29sdW1ucyAhPSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmhlYWRlckNvbHVtbnMubWFwKChpdG0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2l0bS5jb2x1bW5TdHlsZX0+PHN0cm9uZz57aXRtLmNvbHVtbk5hbWV9PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6IChcIlwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Byb3BzLmRhdGFJdGVtcy5tYXAoYnVpbGRSb3cocHJvcHMpKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBidWlsZFJvdyA9IChwcm9wczogSUdyaWRWaWV3PElQcml2YXRlUG9saWN5PikgPT4gKGl0bTogSVByaXZhdGVQb2xpY3ksIG5keDogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PXtuZHh9PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+PHU+PHN0cm9uZz57aXRtLnByaXZhdGVQb2xpY3lOYW1lfTogPC9zdHJvbmc+PC91PjwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+e2l0bS5wcml2YXRlUG9saWN5RGV0YWlsc308L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbkNsaWNrID0gKHByb3BzOiBJR3JpZFZpZXc8SVByaXZhdGVQb2xpY3k+LCBpZDogbnVtYmVyLCBhY3Rpb246IHN0cmluZykgPT4gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgcHJvcHMub25CdXR0b25DbGljayhpZCwgYWN0aW9uKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5TGlzdC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUG9kY2FzdCB9IGZyb20gXCIuLi9Qb2RjYXN0L2luZGV4XCI7XHJcbmltcG9ydCB7IEFib3V0VXNQYWdlIH0gZnJvbSBcIi4uL0Fib3V0VXMvQWJvdXRVc1BhZ2VcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuaW1wb3J0IHsgR3JheUJhbm5lciB9IGZyb20gXCIuLi9CYW5uZXJzL0dyZXlCYW5uZXJcIjtcclxuaW1wb3J0IHsgQWJvdXRVc0Zvcm0gfSBmcm9tIFwiLi4vQWJvdXRVcy9BYm91dFVzRm9ybVwiO1xyXG4vL2ltcG9ydCB7IENvbnRhY3RVcyB9IGZyb20gXCIuLi9Db250YWN0VXMvQ29udGFjdFVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVBhZ2U6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZSBoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gY29udGFjdHVzXCIgaHJlZj1cIm1haWx0bzpNYW5ueUBlbGljaXQudXNcIj5Db250YWN0IFVzPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBYm91dFVzUGFnZSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBvZGNhc3QgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuLy88ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9lbGljaXQudXMvaGFsZlRob3VnaHQxLm1wNCdcclxuLy8gICAgICAgIGZyYW1lQm9yZGVyPScwJ1xyXG4vLyAgICAgICAgLy9hbGxvdz0nYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYSdcclxuLy8gICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4vLyAgICAgICAgdGl0bGU9J3ZpZGVvJ1xyXG4vLyAgICAvPlxyXG4vLzwvZGl2PiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hvbWUvSG9tZS50c3giLCJleHBvcnQgKiBmcm9tIFwiLi9Qb2RjYXN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1BvZGNhc3RGb3JtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1BvZGNhc3RMaXN0XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L2luZGV4LnRzeCIsImltcG9ydCB7IElQb2RjYXN0TGlzdCB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0ludGVyZmFjZXMvaW5kZXhcIjtcclxuaW1wb3J0IHsgYXBpRXhlY3V0ZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpL2FwaUV4ZWN1dGVcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcIi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb2RjYXN0TGlzdCA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvcG9kY2FzdGA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UG9kY2FzdExpc3QgPSAoZGF0YTogSVBvZGNhc3RMaXN0KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHBvc3RVUkwgPSBgL2FwaS9wb2RjYXN0YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHBvc3RVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUG9kY2FzdExpc3QgPSAoZGF0YTogSVBvZGNhc3RMaXN0KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHB1dFVSTCA9IGAke2Jhc2VVUkx9YXBpL3BvZGNhc3QvJHtkYXRhLmlkfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwdXRVUkwsIFwiUFVUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb2RjYXN0TGlzdCA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvcG9kY2FzdC8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL3BvZGNhc3QvUG9kY2FzdEFwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVBvZGNhc3RMaXN0IH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW50ZXJmYWNlcy9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQb2RjYXN0TGlzdEZvcm0ge1xyXG4gICAgcG9kY2FzdExpc3Q6IElQb2RjYXN0TGlzdDtcclxuICAgIG9uQ2hhbmdlOiAoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBvblN1Ym1pdDogKCkgPT4gdm9pZDtcclxuICAgIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQb2RjYXN0Rm9ybTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElQb2RjYXN0TGlzdEZvcm0+ID0gKHByb3BzOiBJUG9kY2FzdExpc3RGb3JtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tc2luZ2xlLWNvbXBvbmVudFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tZm9ybWFyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tY29tcG9uZW50LWhlYWRlciBncmV5LWJnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlBvZGNhc3RzPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1jb21wb25lbnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4taGVscGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvZGNhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wb2RjYXN0TGlzdC5wb2RjYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9kY2FzdERldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3REZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIERldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXBsb2FkIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0VmlkZW9VcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3RWaWRlb1VwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXBsb2FkIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwbG9hZCBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0UGljdHVyZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucG9kY2FzdExpc3QucG9kY2FzdFBpY3R1cmVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVwbG9hZCBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RGb3JtLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBmb3JtYXRXcmFwcGVyQ2xhc3MgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICByZXR1cm4gcHJvcHMuZXJyb3IgPyBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOiB3cmFwcGVyQ2xhc3M7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPntwcm9wcy5lcnJvcn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9wYXNzd29yZC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUtleVZhbHVlLCBJRHJvcERvd25MaXN0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJRHJvcERvd25MaXN0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSURyb3BEb3duTGlzdFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wRG93bkxpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJRHJvcERvd25MaXN0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLmtleX0gdmFsdWU9e29wdGlvbi5rZXl9PntvcHRpb24udmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cHJvcHMuc2VsZWN0ZWRWYWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfSBpZD17cHJvcHMubmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+e29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJVGV4dGFyZWFQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dGFyZWE6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJVGV4dGFyZWFQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZSA/IChwcm9wcy5jbGFzc05hbWUgKyBcImZvcm0tY29udHJvbFwiKSA6IFwiZm9ybS1jb250cm9sXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dChwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17cHJvcHMucm93c31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+e3Byb3BzLmVycm9yfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJVGV4dGFyZWFQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJVGV4dGFyZWFQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IG9uQmx1ciA9IChwcm9wczogSVRleHRhcmVhUHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKHByb3BzLm9uQmx1cikge1xyXG4gICAgICAgIHByb3BzLm9uQmx1cihlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb2RjYXN0TGlzdEdyaWRWaWV3T3B0aW9uczxUPiB7XHJcbiAgICBkYXRhSXRlbXM6IFRbXTtcclxuICAgIHNob3dFZGl0QnV0dG9uOiBib29sZWFuO1xyXG4gICAgc2hvd0RlbGV0ZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIG9uQnV0dG9uQ2xpY2s6IChpZDogbnVtYmVyLCBhY3Rpb246IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGhlYWRlckNvbHVtbnM/OiBJSGVhZGVyQ29sdW1uW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlckNvbHVtbiB7XHJcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmc7XHJcbiAgICBjb2x1bW5TdHlsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUG9kY2FzdExpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0Pj4gPSAocHJvcHM6IElQb2RjYXN0TGlzdEdyaWRWaWV3T3B0aW9uczxJUG9kY2FzdExpc3Q+KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tc2luZ2xlLWNvbXBvbmVudCB3aXRoLXNoYWRvd1wiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+TGlzdDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1oZWxwZXItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBjb2xvcjogXCJibGFja1wiIH19ICBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaGVhZGVyQ29sdW1ucyAhPSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhlYWRlckNvbHVtbnMubWFwKChpdG0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0aCBrZXk9e2l9IGNsYXNzTmFtZT17aXRtLmNvbHVtblN0eWxlfT48c3Ryb25nPntpdG0uY29sdW1uTmFtZX08L3N0cm9uZz48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhSXRlbXMubWFwKGJ1aWxkUm93KHByb3BzKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXNjcm9sbGJhci15LXJhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zY3JvbGxiYXIteVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkUm93ID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PikgPT4gKGl0bTogSVBvZGNhc3RMaXN0LCBuZHg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGJvZHkga2V5PXtuZHh9PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3REZXRhaWxzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3RWaWRlb1VwbG9hZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0UGljdHVyZVVwbG9hZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0VXBsb2FkRGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dFZGl0QnV0dG9uID8gKDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFuLWJ0biBhbi1idG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2J1dHRvbkNsaWNrKHByb3BzLCBpdG0uaWQsIFwiZWRpdFwiKX0+RWRpdDwvYnV0dG9uPikgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEZWxldGVCdXR0b24gPyAoPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYW4tYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXtidXR0b25DbGljayhwcm9wcywgaXRtLmlkLCBcImRlbGV0ZVwiKX0+RGVsZXRlPC9idXR0b24+KSA6IChcIlwiKX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbkNsaWNrID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PiwgaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpID0+IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQnV0dG9uQ2xpY2soaWQsIGFjdGlvbik7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RMaXN0LnRzeCIsImltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9hcGlFeGVjdXRlXCI7XHJcbmltcG9ydCB7IElBYm91dFVzUGFnZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ludGVyZmFjZXMvYWJvdXR1cy9JQWJvdXRVc1BhZ2VcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcIi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBYm91dFVzID0gKCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBnZXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9hYm91dHVzYDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGdldFVSTCwgXCJHRVRcIiwgbnVsbClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RBYm91dFVzID0gKGRhdGE6IElBYm91dFVzUGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwb3N0VVJMID0gYC9hcGkvYWJvdXR1c2A7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwb3N0VVJMLCBcIlBPU1RcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFib3V0VXMgPSAoZGF0YTogSUFib3V0VXNQYWdlKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHB1dFVSTCA9IGAke2Jhc2VVUkx9YXBpL2Fib3V0dXMvJHtkYXRhLmlkfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwdXRVUkwsIFwiUFVUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVBYm91dFVzID0gKGRhdGE6IG51bWJlcik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBkZWxldGVVUkwgPSBgJHtiYXNlVVJMfWFwaS9hYm91dHVzLyR7ZGF0YX1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoZGVsZXRlVVJMLCBcIkRFTEVURVwiLCBkYXRhKVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvYWJvdXR1cy9BYm91dFVzQXBpLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCB7IElDb250YWN0VXMgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9Db250YWN0VXMvSUNvbnRhY3RVc1wiO1xyXG5pbXBvcnQgeyBDb250YWN0VXNBcGksIHNlbmRFbWFpbENvbnRhY3RVcyB9IGZyb20gXCIuLi8uLi9hcGkvY29udGFjdHVzL0NvbnRhY3RVc0FwaVwiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4XCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuLy9pbXBvcnQgeyBDb250YWN0VXNGb3JtIH0gZnJvbSBcIi4vQ29udGFjdFVzRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdFVzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICB0b3BpYzogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RVc1N0YXRlIHtcclxuICAgIGNvbnRhY3RVczogSUNvbnRhY3RVcztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RVcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSUNvbnRhY3RVc1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb250YWN0VXM6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRvcGljOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2JpbmRcclxuICAgICAgICB0aGlzLm9uRmllbGRDaGFuZ2UgPSB0aGlzLm9uRmllbGRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlbmRFbWFpbEJ1dHRvbkNsaWNrID0gdGhpcy5zZW5kRW1haWxCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GaWVsZENoYW5nZShmaWVsZE5hbWU6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgY29udGFjdFVzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmNvbnRhY3RVcyxcclxuICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZFZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpOyAvLywgKCkgPT4geyB0aGlzLnZhbGlkYXRlRmllbGQoZmllbGROYW1lLCBmaWVsZFZhbHVlKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRFbWFpbEJ1dHRvbkNsaWNrKCkge1xyXG5cclxuICAgICAgICBDb250YWN0VXNBcGkuc2VuZEVtYWlsQ29udGFjdFVzKHRoaXMuc3RhdGUuY29udGFjdFVzKVxyXG5cclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RVczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInRnLWNvbW1lbnRmb3JtIGhlbHAtZm9ybVwiIGlkPVwidGctY29tbWVudGZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGctc2VjdGlvbi1oZWFkaW5nXCI+PGgyPkNvbnRhY3QgRWxpY2l0PC9oMj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19IGNsYXNzTmFtZT1cImNvbnRhY3R1c1wiPk5PVEU6PC9zdHJvbmc+IFBsZWFzZSB1c2UgdGhpcyA8YSBjbGFzc05hbWU9XCJjb250YWN0dXNcIiBocmVmPVwibWFpbHRvOk1hbm55QGVsaWNpdC51c1wiPkNvbnRhY3QgVXMgSEVSRTwvYT4uIFdlJ2QgYmUgc3Rva2VkIHRvIGhlYXIgZnJvbSB5b3UhPC9wPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9waWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb250YWN0VXMudG9waWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9PC9UZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZW5kRW1haWxCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbnRhY3RVcy9Db250YWN0VXMudHN4IiwiaW1wb3J0IHsgYXBpRXhlY3V0ZSB9IGZyb20gXCIuLi9hcGlFeGVjdXRlXCI7XHJcbmltcG9ydCB7IElDb250YWN0VXMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWN0VXMvQ29udGFjdFVzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsQ29udGFjdFVzID0gKGRhdGE6IElDb250YWN0VXMpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3Qgc2VuZEVtYWlsQ29udGFjdFVzVVJMID0gYC9hcGkvY29udGFjdFVzYDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHNlbmRFbWFpbENvbnRhY3RVc1VSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWN0VXNBcGkgPSB7XHJcbiAgICBzZW5kRW1haWxDb250YWN0VXNcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9jb250YWN0dXMvQ29udGFjdFVzQXBpLnRzeCIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlFeGVjdXRlID0gKHVybDogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wb3N0KHVybCwgZGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucHV0KHVybCwgZGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvYXBpRXhlY3V0ZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uXCI7XHJcbmltcG9ydCB7IElQcml2YXRlUG9saWN5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvUHJpdmF0ZVBvbGljeS9JUHJpdmF0ZVBvbGljeVwiO1xyXG5pbXBvcnQgeyBQcml2YXRlUG9saWN5QXBpIH0gZnJvbSBcIi4uLy4uL2FwaS9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lBcGlcIjtcclxuaW1wb3J0IHsgUHJpdmF0ZVBvbGljeU1vZGFsIH0gZnJvbSBcIi4vUHJpdmF0ZVBvbGljeU1vZGFsXCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3lMaXN0IH0gZnJvbSBcIi4vUHJpdmF0ZVBvbGljeUxpc3RcIjtcclxuXHJcbi8vXCJCbHVlcHJpbnRcIiBvciBpbnRlcmZhY2UgZm9yIG91ciBNb2RhbCBTdGF0ZVxyXG5pbnRlcmZhY2UgSVB1YmxpY1ByaXZhY3lNb2RhbFdpbmRvd1N0YXRlIHtcclxuICAgIHByaXZhdGVQb2xpY2llc0Rpc3BsYXlJdGVtczogSVByaXZhdGVQb2xpY3lbXTtcclxuICAgIHNob3dNb2RhbDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhdGVQb2xpY3kgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElQdWJsaWNQcml2YWN5TW9kYWxXaW5kb3dTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJpdmF0ZVBvbGljaWVzRGlzcGxheUl0ZW1zOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbFRvZ2dsZSA9IHRoaXMubW9kYWxUb2dnbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vZGFsVG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSlcclxuICAgIH1cclxuICAgIHByaXZhdGUgbG9hZERhdGFMaXN0KCkge1xyXG4gICAgICAgIFByaXZhdGVQb2xpY3lBcGkuZ2V0UHJpdmF0ZVBvbGljeUxpc3QoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcml2YXRlUG9saWNpZXNEaXNwbGF5SXRlbXM6IHJlc3BvbnNlLml0ZW1zIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7IGNvbnNvbGUubG9nKFwiZXJyb3IhXCIsIGVycik7IH0pXHJcbiAgICB9XHJcblxyXG5cclxuICBcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm1vZGFsVG9nZ2xlfSBjbGFzc05hbWU9XCJwcml2YWN5XCI+UHJpdmFjeTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFByaXZhdGVQb2xpY3lNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVBvbGljeUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUl0ZW1zPXt0aGlzLnN0YXRlLnByaXZhdGVQb2xpY2llc0Rpc3BsYXlJdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CdXR0b25DbGljaz17dGhpcy5sb2FkRGF0YUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUHJpdmF0ZVBvbGljeU1vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3kudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFBvZGNhc3RMaXN0LCBwb3N0UG9kY2FzdExpc3QsIHVwZGF0ZVBvZGNhc3RMaXN0LCBkZWxldGVQb2RjYXN0TGlzdCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpL3BvZGNhc3QvUG9kY2FzdEFwaVwiO1xyXG5pbXBvcnQgeyBQb2RjYXN0Rm9ybSwgUG9kY2FzdExpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBHcmF5QmFubmVyIH0gZnJvbSBcIi4uL0Jhbm5lcnMvR3JleUJhbm5lclwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcbmltcG9ydCB7IERyb3BEb3duTGlzdCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2Ryb3Bkb3dubGlzdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9kY2FzdExpc3RTdGF0ZSB7XHJcbiAgICBwb2RjYXN0TGlzdDogSVBvZGNhc3RMaXN0O1xyXG4gICAgcG9kY2FzdExpc3RJdGVtczogSVBvZGNhc3RMaXN0W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2RjYXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJUG9kY2FzdExpc3RTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3REZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFVwbG9hZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0VmlkZW9VcGxvYWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0UGljdHVyZVVwbG9hZDogXCJcIixcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0SXRlbXM6IFtdLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9iaW5kIGhlcmUgcGxlYXNlXHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IHRoaXMub25EZWxldGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25GaWVsZENoYW5nZSA9IHRoaXMub25GaWVsZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubG9hZERhdGFMaXN0ID0gdGhpcy5sb2FkRGF0YUxpc3QuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmxpc3RCdXR0b25DbGljayA9IHRoaXMubGlzdEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0YXRlQW5kRm9ybSA9IHRoaXMuY2xlYXJTdGF0ZUFuZEZvcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GaWVsZENoYW5nZShmaWVsZE5hbWU6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdDoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wb2RjYXN0TGlzdCxcclxuICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZFZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGlzdEJ1dHRvbkNsaWNrKGlkOiBudW1iZXIsIGFjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG5keCA9IHRoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtcy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBpZCk7XHJcblxyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZWRpdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChuZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvZGNhc3RMaXN0OiB0aGlzLnN0YXRlLnBvZGNhc3RMaXN0SXRlbXNbbmR4XSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSBcImRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtcy5zcGxpY2UobmR4LCAxKVxyXG4gICAgICAgICAgICBsZXQgaXRtcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtc1xyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2soaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyU3RhdGVBbmRGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3REZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFVwbG9hZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0VmlkZW9VcGxvYWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0UGljdHVyZVVwbG9hZDogXCJcIixcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0SXRlbXM6IFtdLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHBvc3RQb2RjYXN0TGlzdCh0aGlzLnN0YXRlLnBvZGNhc3RMaXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE9TVFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0YXRlQW5kRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBvblVwZGF0ZSgpIHtcclxuICAgICAgICB1cGRhdGVQb2RjYXN0TGlzdCh0aGlzLnN0YXRlLnBvZGNhc3RMaXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUFVUXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RhdGVBbmRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7IH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EZWxldGVDbGljayhpZCkge1xyXG4gICAgICAgIGRlbGV0ZVBvZGNhc3RMaXN0KGlkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHsgfSkuY2F0Y2goKGVycikgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWREYXRhTGlzdCgpIHtcclxuICAgICAgICBnZXRQb2RjYXN0TGlzdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvZGNhc3RMaXN0SXRlbXM6IHJlc3BvbnNlLml0ZW1zIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHsgfSkuY2F0Y2goKGVycikgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2RjYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+UG9kY2FzdDwvaDI+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHA+Q09NSU5HIFNPT04hPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIC8vcmV0dXJuIChcclxuICAgICAgICAvLyAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIC8vICAgICAgICA8UG9kY2FzdEZvcm1cclxuICAgICAgICAvLyAgICAgICAgICAgIHBvZGNhc3RMaXN0PXt0aGlzLnN0YXRlLnBvZGNhc3RMaXN0fVxyXG4gICAgICAgIC8vICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX1cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgIC8vICAgICAgICAgICAgb25VcGRhdGU9e3RoaXMub25VcGRhdGV9XHJcbiAgICAgICAgLy8gICAgICAgIC8+XHJcblxyXG4gICAgICAgIC8vICAgICAgICA8UG9kY2FzdExpc3RcclxuICAgICAgICAvLyAgICAgICAgICAgIGRhdGFJdGVtcz17dGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgb25CdXR0b25DbGljaz17dGhpcy5saXN0QnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBzaG93RGVsZXRlQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgc2hvd0VkaXRCdXR0b249e3RydWV9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBoZWFkZXJDb2x1bW5zPXtbXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIk5hbWVcIiwgY29sdW1uU3R5bGU6IFwiYmFzaXMtMjBcIiB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHsgY29sdW1uTmFtZTogXCJEZXRhaWxzXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiVXBsb2FkIFZpZGVvXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiVXBsb2FkIFBpY3R1cmVcIiwgY29sdW1uU3R5bGU6IFwiYmFzaXMtMjBcIiB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHsgY29sdW1uTmFtZTogXCJVcGxvYWQgRGF0ZVwiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH1cclxuICAgICAgICAvLyAgICAgICAgICAgIF19XHJcbiAgICAgICAgLy8gICAgICAgIC8+XHJcblxyXG4gICAgICAgIC8vICAgICAgICA8ZGl2PlxyXG4gICAgICAgIC8vICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICA8L2Rpdj5cclxuICAgICAgICAvLylcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3QudHN4IiwiZXhwb3J0ICogZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2lucHV0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Bhc3N3b3JkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Ryb3Bkb3dubGlzdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXh0YXJlYVwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElJbnB1dFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQ6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJSW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtYXRXcmFwcGVyQ2xhc3MocHJvcHMpfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHByb3BzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj57cHJvcHMuZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IG9uS2V5UHJlc3MgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKHByb3BzLm9uRW50ZXIpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgcHJvcHMub25FbnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2lucHV0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBJQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9hYm91dHVzL0lBYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRBYm91dFVzIH0gZnJvbSBcIi4uLy4uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGlcIjtcclxuaW1wb3J0IHsgQWJvdXRVc0Zvcm0gfSBmcm9tIFwiLi9BYm91dFVzRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQWJvdXRVc1N0YXRlIHtcclxuICAgIGFib3V0VXNQYWdlU3RhdGU6IElBYm91dFVzUGFnZTtcclxuICAgIGFib3V0VXNMaXN0SXRlbXM6IElBYm91dFVzUGFnZVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRVc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElBYm91dFVzU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFib3V0VXNQYWdlU3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRVc1N1bW1hcnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dFVzUGljdHVyZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0VGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dE5pY2tuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRCaW86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dEluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0RmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dExpbmtlZEluOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRFbWFpbENvbnRhY3Q6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFib3V0VXNMaXN0SXRlbXM6IFtdLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSA9IHRoaXMubG9hZERhdGEuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcclxuICAgICAgICBnZXRBYm91dFVzKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWJvdXRVc0xpc3RJdGVtczogcmVzcG9uc2UuaXRlbXMgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLzxBYm91dFVzRm9ybVxyXG4gICAgICAgICAgICAgICAgLy8gICAgYWJvdXRVcz17dGhpcy5zdGF0ZS5hYm91dFVzTGlzdEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgLy8vPlxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiI2Y4ZjhmZlwiLCB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiMzBweCAzMHB4XCIsIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgIDxwPiBFbGljaXQgaXMgZGVkaWNhdGVkIHRvIHRoZSBjcmVhdGlvbiAmIG1haW50YWluaW5nIG9mIGNvbW11bml0eSBjb25uZWN0aW9ucyBiZXR3ZWVuIGdyb3VwcyBhbmQgaW5kaXZpZHVhbHMgd2hvc2UgbGl2ZXMgYXJlIGVubWVzaGVkIGluIHRoZSBNdXNpYywgQXJ0LCBhbmQgRW50ZXJ0YWlubWVudCBJbmR1c3RyeS4gT3VyIHByaW9yaXR5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHN1cHBvcnQgb2YgYmFuZHMsIGdyb3VwcywgYW5kIHBlb3BsZSBpbnZvbHZlZCBpbiBvcmRlciB0byBzcHJlYWQgdGhlaXIgY3JlYXRpdmUgd29yayBhbmQgcGVyc29uYWwgbWVzc2FnZS4gICAgIFdlIHdvcmsgZm9yIHRoZSBBc3BpcmluZyBhbmQgSW5zcGlyaW5nLlxyXG4gICAgPC9wPlxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tIFwiLi4vc3JjL3JvdXRlclwiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEFwcFJvdXRlciAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgYnJvd3Nlckhpc3RvcnksIEluZGV4Um91dGUsIFJvdXRlciwgaGFzaEhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZS9Ib21lXCI7XHJcbmltcG9ydCB7IFBvZGNhc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdFwiO1xyXG5pbXBvcnQgeyBBYm91dFVzUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBSc3NGZWVkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Sc3NGZWVkL1Jzc0ZlZWRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3kgfSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeVwiO1xyXG5pbXBvcnQgeyBDb250YWN0VXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RVcy9Db250YWN0VXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBSb3V0ZXI6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb2RjYXN0XCIgY29tcG9uZW50PXtQb2RjYXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0VXNQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdHVzXCIgY29tcG9uZW50PXtDb250YWN0VXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcml2YXRlcG9saWN5XCIgY29tcG9uZW50PXtQcml2YXRlUG9saWN5fSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcm91dGVyLnRzeCJdLCJzb3VyY2VSb290IjoiIn0=