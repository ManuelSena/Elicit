webpackJsonp([1],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePolicyModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePolicyList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Podcast_index__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AboutUs_AboutUsPage__ = __webpack_require__(52);



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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Podcast__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Podcast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PodcastForm__ = __webpack_require__(121);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PodcastList__ = __webpack_require__(126);
/* unused harmony namespace reexport */




/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPodcastList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postPodcastList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updatePodcastList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deletePodcastList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(15);

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

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PodcastForm */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_form_index__ = __webpack_require__(50);


var PodcastForm = function PodcastForm(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-single-component", style: { color: "white" } }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-formarea" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-component-header grey-bg" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Podcasts")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-component-body" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "an-helper-block" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("fieldset", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["b" /* Input */], { label: "Name", name: "podcastName", value: props.podcastList.podcastName, placeholder: "Enter Name", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["c" /* Textarea */], { label: "Details", name: "podcastDetails", value: props.podcastList.podcastDetails, placeholder: "Enter Your Details", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["b" /* Input */], { label: "Upload Video", name: "podcastVideoUpload", value: props.podcastList.podcastVideoUpload, placeholder: "Upload Video", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "form-group" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["b" /* Input */], { label: "Upload Picture", name: "podcastPictureUpload", value: props.podcastList.podcastPictureUpload, placeholder: "Upload Picture", onChange: props.onChange })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["a" /* Button */], { className: "an-btn an-btn-primary", label: "Submit", onClick: props.onSubmit }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form_index__["a" /* Button */], { className: "an-btn an-btn-primary", label: "Update", onClick: props.onUpdate })))))));
};

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Button = function Button(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { style: { color: "black" }, type: "button", className: props.className, onClick: props.onClick }, props.label);
};

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Password */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DropDownList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Textarea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PodcastList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAboutUs; });
/* unused harmony export postAboutUs */
/* unused harmony export updateAboutUs */
/* unused harmony export deleteAboutUs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(15);

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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_contactus_ContactUsApi__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_components_form_index__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_form_input__ = __webpack_require__(51);
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

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sendEmailContactUs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiExecute__ = __webpack_require__(15);

var sendEmailContactUs = function sendEmailContactUs(data) {
    var sendEmailContactUsURL = "/api/contactUs";
    return Object(__WEBPACK_IMPORTED_MODULE_0__apiExecute__["a" /* apiExecute */])(sendEmailContactUsURL, "POST", data);
};
var ContactUsApi = {
    sendEmailContactUs: sendEmailContactUs
};

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiExecute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(43);
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

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePolicy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_PrivatePolicy_PrivatePolicyApi__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PrivatePolicyModal__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PrivatePolicyList__ = __webpack_require__(117);
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Podcast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_api_podcast_PodcastApi__ = __webpack_require__(120);
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(122);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(123);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdownlist__ = __webpack_require__(124);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textarea__ = __webpack_require__(125);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__textarea__["a"]; });






/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_aboutus_AboutUsApi__ = __webpack_require__(127);
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_router__ = __webpack_require__(62);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__src_router__["a" /* AppRouter */], null), document.getElementById("root"));

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_AboutUs_AboutUsPage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_PrivatePolicy_PrivatePolicy__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ContactUs_ContactUs__ = __webpack_require__(128);








var AppRouter = function AppRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_2__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/home", component: __WEBPACK_IMPORTED_MODULE_3__components_Home_Home__["a" /* HomePage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/podcast", component: __WEBPACK_IMPORTED_MODULE_4__components_Podcast_Podcast__["a" /* Podcast */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_5__components_AboutUs_AboutUsPage__["a" /* AboutUsPage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/contactus", component: __WEBPACK_IMPORTED_MODULE_7__components_ContactUs_ContactUs__["a" /* ContactUs */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/privatepolicy", component: __WEBPACK_IMPORTED_MODULE_6__components_PrivatePolicy_PrivatePolicy__["a" /* PrivatePolicy */] })));
};

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header_header__ = __webpack_require__(95);


var App = function App(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_Header_header__["a" /* Header */], null), props.children);
};

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_FooterContainer__ = __webpack_require__(96);
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

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PrivatePolicy_PrivatePolicy__ = __webpack_require__(42);
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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPrivatePolicyList */
/* unused harmony export postPrivatePolicyList */
/* unused harmony export updatePrivatePolicyList */
/* unused harmony export deletePrivatePolicyList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePolicyApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_api_apiExecute__ = __webpack_require__(15);

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

/***/ })

},[54]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeU1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUxpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS9Ib21lLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwaS9wb2RjYXN0L1BvZGNhc3RBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9kY2FzdC9Qb2RjYXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9idXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vcGFzc3dvcmQudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdExpc3QudHN4Iiwid2VicGFjazovLy8uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFjdFVzL0NvbnRhY3RVcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL2NvbnRhY3R1cy9Db250YWN0VXNBcGkudHN4Iiwid2VicGFjazovLy8uL2FwaS9hcGlFeGVjdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3QudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3JvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUFwaS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9PLElBQU0sa0JBQWI7QUFBQTs7QUFDSSxnQ0FBWSxLQUFaLEVBQXNDO0FBQUE7O0FBQUEsdUlBQzVCLEtBRDRCO0FBRXJDOztBQUhMO0FBQUE7QUFBQSxpQ0FLaUI7QUFDVCxnQkFBSSxDQUFDLEtBQUssS0FBTCxDQUFXLFNBQWhCLEVBQ0ksT0FBTyxJQUFQO0FBQ0osZ0JBQU0sZ0JBQXFDO0FBQ3ZDLDBCQUFVLE9BRDZCO0FBRXZDLHFCQUFLLENBRmtDO0FBR3ZDLHdCQUFRLENBSCtCO0FBSXZDLHNCQUFNLENBSmlDO0FBS3ZDLHVCQUFPLENBTGdDO0FBTXZDLGlDQUFpQixpQkFOc0I7QUFPdkMseUJBQVMsRUFQOEI7QUFRdkMsd0JBQVEsR0FSK0I7QUFTdkMsMEJBQVU7QUFUNkIsYUFBM0M7QUFXQSxnQkFBTSxhQUFrQztBQUNwQyxpQ0FBaUIsTUFEbUI7QUFFcEMsOEJBQWMsQ0FGc0I7QUFHcEMsMEJBQVUsR0FIMEI7QUFJcEMsMkJBQVcsR0FKeUI7QUFLcEMsd0JBQVEsUUFMNEI7QUFNcEMseUJBQVMsRUFOMkI7QUFPcEMsd0JBQVE7QUFQNEIsYUFBeEM7QUFTQSxnQkFBTSxZQUFpQztBQUNuQyxpQ0FBaUIsTUFEa0I7QUFF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U0FBeEIscUJBQXdCLENBQUMsSUFBRCxFQUEyQztBQUM1RSxRQUFNLDhCQUFOO0FBQ0EsV0FBTywrRUFBVSxDQUFDLE9BQVgsRUFBb0IsTUFBcEIsRUFBNEIsSUFBNUIsQ0FBUDtBQUNILENBSE07QUFLQSxJQUFNLDBCQUEwQixTQUExQix1QkFBMEIsQ0FBQyxJQUFELEVBQTJDO0FBQzlFLFFBQU0sU0FBWSxPQUFaLDBCQUF3QyxLQUFLLEVBQW5EO0FBQ0EsV0FBTywrRUFBVSxDQUFDLE1BQVgsRUFBbUIsS0FBbkIsRUFBMEIsSUFBMUIsQ0FBUDtBQUNILENBSE07QUFLQSxJQUFNLDBCQUEwQixTQUExQix1QkFBMEIsQ0FBQyxJQUFELEVBQStCO0FBQ2xFLFFBQU0sWUFBZSxPQUFmLDBCQUEyQyxJQUFqRDtBQUNBLFdBQU8sK0VBQVUsQ0FBQyxTQUFYLEVBQXNCLFFBQXRCLEVBQWdDLElBQWhDLENBQVA7QUFDSCxDQUhNO0FBTUEsSUFBTSxtQkFBbUI7QUFDNUIsOENBRDRCLEVBQ04sNENBRE0sRUFDaUIsZ0RBRGpCLEVBQzBDO0FBRDFDLENBQXpCLEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJpdmF0ZVBvbGljeU1vZGFsIHtcclxuICAgIHNob3dNb2RhbDogYm9vbGVhbjtcclxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YXRlUG9saWN5TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByaXZhdGVQb2xpY3lNb2RhbCwge30+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcml2YXRlUG9saWN5TW9kYWwpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuc2hvd01vZGFsKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBiYWNrZHJvcFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMyknLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MCxcclxuICAgICAgICAgICAgekluZGV4OiA5OTksXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1vZGFsU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogNTAwLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMCxcclxuICAgICAgICAgICAgekluZGV4OiAxMDAxXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBtb2RhbEJvZHk6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMCxcclxuICAgICAgICAgICAgekluZGV4OiAxMDAxLFxyXG4vKnNjcm9sbGJhciovb3ZlcmZsb3dZOiBcInNjcm9sbFwiIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2Ryb3BcIiBzdHlsZT17YmFja2Ryb3BTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXttb2RhbFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+PHN0cm9uZz5Qcml2YXRlIFBvbGljaWVzOiA8L3N0cm9uZz48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e21vZGFsQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lNb2RhbC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVByaXZhdGVQb2xpY3ksIElHcmlkVmlldyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2luZGV4XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByaXZhdGVQb2xpY3lMaXN0OiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUdyaWRWaWV3PElQcml2YXRlUG9saWN5Pj4gPSAocHJvcHM6IElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmhlYWRlckNvbHVtbnMgIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oZWFkZXJDb2x1bW5zLm1hcCgoaXRtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtpdG0uY29sdW1uU3R5bGV9PjxzdHJvbmc+e2l0bS5jb2x1bW5OYW1lfTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoXCJcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kYXRhSXRlbXMubWFwKGJ1aWxkUm93KHByb3BzKSl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgYnVpbGRSb3cgPSAocHJvcHM6IElHcmlkVmlldzxJUHJpdmF0ZVBvbGljeT4pID0+IChpdG06IElQcml2YXRlUG9saWN5LCBuZHg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT17bmR4fT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPjx1PjxzdHJvbmc+e2l0bS5wcml2YXRlUG9saWN5TmFtZX06IDwvc3Ryb25nPjwvdT48L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPntpdG0ucHJpdmF0ZVBvbGljeURldGFpbHN9PC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5jb25zdCBidXR0b25DbGljayA9IChwcm9wczogSUdyaWRWaWV3PElQcml2YXRlUG9saWN5PiwgaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpID0+IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQnV0dG9uQ2xpY2soaWQsIGFjdGlvbik7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeUxpc3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBvZGNhc3QgfSBmcm9tIFwiLi4vUG9kY2FzdC9pbmRleFwiO1xyXG5pbXBvcnQgeyBBYm91dFVzUGFnZSB9IGZyb20gXCIuLi9BYm91dFVzL0Fib3V0VXNQYWdlXCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEdyYXlCYW5uZXIgfSBmcm9tIFwiLi4vQmFubmVycy9HcmV5QmFubmVyXCI7XHJcbmltcG9ydCB7IEFib3V0VXNGb3JtIH0gZnJvbSBcIi4uL0Fib3V0VXMvQWJvdXRVc0Zvcm1cIjtcclxuLy9pbXBvcnQgeyBDb250YWN0VXMgfSBmcm9tIFwiLi4vQ29udGFjdFVzL0NvbnRhY3RVc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVQYWdlOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUgaGVyby1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIHdhcm5pbmcgY29udGFjdHVzXCIgaHJlZj1cIm1haWx0bzpNYW5ueUBlbGljaXQudXNcIj5Db250YWN0IFVzPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxBYm91dFVzUGFnZSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBvZGNhc3QgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuLy88ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9lbGljaXQudXMvaGFsZlRob3VnaHQxLm1wNCdcclxuLy8gICAgICAgIGZyYW1lQm9yZGVyPScwJ1xyXG4vLyAgICAgICAgLy9hbGxvdz0nYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYSdcclxuLy8gICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4vLyAgICAgICAgdGl0bGU9J3ZpZGVvJ1xyXG4vLyAgICAvPlxyXG4vLzwvZGl2PiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hvbWUvSG9tZS50c3giLCJleHBvcnQgKiBmcm9tIFwiLi9Qb2RjYXN0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1BvZGNhc3RGb3JtXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL1BvZGNhc3RMaXN0XCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L2luZGV4LnRzeCIsImltcG9ydCB7IElQb2RjYXN0TGlzdCB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0ludGVyZmFjZXMvaW5kZXhcIjtcclxuaW1wb3J0IHsgYXBpRXhlY3V0ZSB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpL2FwaUV4ZWN1dGVcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcIi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb2RjYXN0TGlzdCA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvcG9kY2FzdGA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UG9kY2FzdExpc3QgPSAoZGF0YTogSVBvZGNhc3RMaXN0KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHBvc3RVUkwgPSBgL2FwaS9wb2RjYXN0YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHBvc3RVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUG9kY2FzdExpc3QgPSAoZGF0YTogSVBvZGNhc3RMaXN0KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHB1dFVSTCA9IGAke2Jhc2VVUkx9YXBpL3BvZGNhc3QvJHtkYXRhLmlkfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwdXRVUkwsIFwiUFVUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb2RjYXN0TGlzdCA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvcG9kY2FzdC8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL3BvZGNhc3QvUG9kY2FzdEFwaS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVBvZGNhc3RMaXN0IH0gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvSW50ZXJmYWNlcy9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQb2RjYXN0TGlzdEZvcm0ge1xyXG4gICAgcG9kY2FzdExpc3Q6IElQb2RjYXN0TGlzdDtcclxuICAgIG9uQ2hhbmdlOiAoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBvblN1Ym1pdDogKCkgPT4gdm9pZDtcclxuICAgIG9uVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQb2RjYXN0Rm9ybTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElQb2RjYXN0TGlzdEZvcm0+ID0gKHByb3BzOiBJUG9kY2FzdExpc3RGb3JtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tc2luZ2xlLWNvbXBvbmVudFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tZm9ybWFyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tY29tcG9uZW50LWhlYWRlciBncmV5LWJnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPlBvZGNhc3RzPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1jb21wb25lbnQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4taGVscGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvZGNhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5wb2RjYXN0TGlzdC5wb2RjYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGV0YWlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9kY2FzdERldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3REZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIERldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXBsb2FkIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0VmlkZW9VcGxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnBvZGNhc3RMaXN0LnBvZGNhc3RWaWRlb1VwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXBsb2FkIFZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwbG9hZCBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwb2RjYXN0UGljdHVyZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucG9kY2FzdExpc3QucG9kY2FzdFBpY3R1cmVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVwbG9hZCBQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vblN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhbi1idG4gYW4tYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RGb3JtLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMubGFiZWx9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBmb3JtYXRXcmFwcGVyQ2xhc3MgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICByZXR1cm4gcHJvcHMuZXJyb3IgPyBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOiB3cmFwcGVyQ2xhc3M7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPntwcm9wcy5lcnJvcn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9wYXNzd29yZC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUtleVZhbHVlLCBJRHJvcERvd25MaXN0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJRHJvcERvd25MaXN0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSURyb3BEb3duTGlzdFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wRG93bkxpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJRHJvcERvd25MaXN0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLmtleX0gdmFsdWU9e29wdGlvbi5rZXl9PntvcHRpb24udmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cHJvcHMuc2VsZWN0ZWRWYWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfSBpZD17cHJvcHMubmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+e29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vZHJvcGRvd25saXN0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJVGV4dGFyZWFQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dGFyZWE6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJVGV4dGFyZWFQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByZXF1aXJlZD17cHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZSA/IChwcm9wcy5jbGFzc05hbWUgKyBcImZvcm0tY29udHJvbFwiKSA6IFwiZm9ybS1jb250cm9sXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dChwcm9wcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17cHJvcHMucm93c31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrXCI+e3Byb3BzLmVycm9yfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJVGV4dGFyZWFQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJVGV4dGFyZWFQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IG9uQmx1ciA9IChwcm9wczogSVRleHRhcmVhUHJvcHMpID0+IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKHByb3BzLm9uQmx1cikge1xyXG4gICAgICAgIHByb3BzLm9uQmx1cihlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL3RleHRhcmVhLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb2RjYXN0TGlzdEdyaWRWaWV3T3B0aW9uczxUPiB7XHJcbiAgICBkYXRhSXRlbXM6IFRbXTtcclxuICAgIHNob3dFZGl0QnV0dG9uOiBib29sZWFuO1xyXG4gICAgc2hvd0RlbGV0ZUJ1dHRvbjogYm9vbGVhbjtcclxuICAgIG9uQnV0dG9uQ2xpY2s6IChpZDogbnVtYmVyLCBhY3Rpb246IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGhlYWRlckNvbHVtbnM/OiBJSGVhZGVyQ29sdW1uW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlckNvbHVtbiB7XHJcbiAgICBjb2x1bW5OYW1lOiBzdHJpbmc7XHJcbiAgICBjb2x1bW5TdHlsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUG9kY2FzdExpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0Pj4gPSAocHJvcHM6IElQb2RjYXN0TGlzdEdyaWRWaWV3T3B0aW9uczxJUG9kY2FzdExpc3Q+KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW4tc2luZ2xlLWNvbXBvbmVudCB3aXRoLXNoYWRvd1wiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+TGlzdDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuLWNvbXBvbmVudC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbi1oZWxwZXItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBjb2xvcjogXCJibGFja1wiIH19ICBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaGVhZGVyQ29sdW1ucyAhPSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhlYWRlckNvbHVtbnMubWFwKChpdG0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0aCBrZXk9e2l9IGNsYXNzTmFtZT17aXRtLmNvbHVtblN0eWxlfT48c3Ryb25nPntpdG0uY29sdW1uTmFtZX08L3N0cm9uZz48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhSXRlbXMubWFwKGJ1aWxkUm93KHByb3BzKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXNjcm9sbGJhci15LXJhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zY3JvbGxiYXIteVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGJ1aWxkUm93ID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PikgPT4gKGl0bTogSVBvZGNhc3RMaXN0LCBuZHg6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGJvZHkga2V5PXtuZHh9PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3REZXRhaWxzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYmFzaXMtMjBcIj57aXRtLnBvZGNhc3RWaWRlb1VwbG9hZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0UGljdHVyZVVwbG9hZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTIwXCI+e2l0bS5wb2RjYXN0VXBsb2FkRGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJhc2lzLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dFZGl0QnV0dG9uID8gKDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFuLWJ0biBhbi1idG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2J1dHRvbkNsaWNrKHByb3BzLCBpdG0uaWQsIFwiZWRpdFwiKX0+RWRpdDwvYnV0dG9uPikgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3dEZWxldGVCdXR0b24gPyAoPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYW4tYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXtidXR0b25DbGljayhwcm9wcywgaXRtLmlkLCBcImRlbGV0ZVwiKX0+RGVsZXRlPC9idXR0b24+KSA6IChcIlwiKX1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IGJ1dHRvbkNsaWNrID0gKHByb3BzOiBJUG9kY2FzdExpc3RHcmlkVmlld09wdGlvbnM8SVBvZGNhc3RMaXN0PiwgaWQ6IG51bWJlciwgYWN0aW9uOiBzdHJpbmcpID0+IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQnV0dG9uQ2xpY2soaWQsIGFjdGlvbik7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3RMaXN0LnRzeCIsImltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9hcGlFeGVjdXRlXCI7XHJcbmltcG9ydCB7IElBYm91dFVzUGFnZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ludGVyZmFjZXMvYWJvdXR1cy9JQWJvdXRVc1BhZ2VcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcIi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBYm91dFVzID0gKCk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBnZXRVUkwgPSBgJHtiYXNlVVJMfWFwaS9hYm91dHVzYDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGdldFVSTCwgXCJHRVRcIiwgbnVsbClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RBYm91dFVzID0gKGRhdGE6IElBYm91dFVzUGFnZSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBwb3N0VVJMID0gYC9hcGkvYWJvdXR1c2A7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwb3N0VVJMLCBcIlBPU1RcIiwgZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFib3V0VXMgPSAoZGF0YTogSUFib3V0VXNQYWdlKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHB1dFVSTCA9IGAke2Jhc2VVUkx9YXBpL2Fib3V0dXMvJHtkYXRhLmlkfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwdXRVUkwsIFwiUFVUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVBYm91dFVzID0gKGRhdGE6IG51bWJlcik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBkZWxldGVVUkwgPSBgJHtiYXNlVVJMfWFwaS9hYm91dHVzLyR7ZGF0YX1gO1xyXG4gICAgcmV0dXJuIGFwaUV4ZWN1dGUoZGVsZXRlVVJMLCBcIkRFTEVURVwiLCBkYXRhKVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvYWJvdXR1cy9BYm91dFVzQXBpLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL2ltcG9ydCB7IElDb250YWN0VXMgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9Db250YWN0VXMvSUNvbnRhY3RVc1wiO1xyXG5pbXBvcnQgeyBDb250YWN0VXNBcGksIHNlbmRFbWFpbENvbnRhY3RVcyB9IGZyb20gXCIuLi8uLi9hcGkvY29udGFjdHVzL0NvbnRhY3RVc0FwaVwiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2luZGV4XCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXJDb250YWluZXJcIjtcclxuLy9pbXBvcnQgeyBDb250YWN0VXNGb3JtIH0gZnJvbSBcIi4vQ29udGFjdFVzRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdFVzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICB0b3BpYzogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RVc1N0YXRlIHtcclxuICAgIGNvbnRhY3RVczogSUNvbnRhY3RVcztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RVcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSUNvbnRhY3RVc1N0YXRlPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb250YWN0VXM6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRvcGljOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2JpbmRcclxuICAgICAgICB0aGlzLm9uRmllbGRDaGFuZ2UgPSB0aGlzLm9uRmllbGRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlbmRFbWFpbEJ1dHRvbkNsaWNrID0gdGhpcy5zZW5kRW1haWxCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GaWVsZENoYW5nZShmaWVsZE5hbWU6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgY29udGFjdFVzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmNvbnRhY3RVcyxcclxuICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZFZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpOyAvLywgKCkgPT4geyB0aGlzLnZhbGlkYXRlRmllbGQoZmllbGROYW1lLCBmaWVsZFZhbHVlKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRFbWFpbEJ1dHRvbkNsaWNrKCkge1xyXG5cclxuICAgICAgICBDb250YWN0VXNBcGkuc2VuZEVtYWlsQ29udGFjdFVzKHRoaXMuc3RhdGUuY29udGFjdFVzKVxyXG5cclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RVczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cInRnLWNvbW1lbnRmb3JtIGhlbHAtZm9ybVwiIGlkPVwidGctY29tbWVudGZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGctc2VjdGlvbi1oZWFkaW5nXCI+PGgyPkNvbnRhY3QgRWxpY2l0PC9oMj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19IGNsYXNzTmFtZT1cImNvbnRhY3R1c1wiPk5PVEU6PC9zdHJvbmc+IFBsZWFzZSB1c2UgdGhpcyA8YSBjbGFzc05hbWU9XCJjb250YWN0dXNcIiBocmVmPVwibWFpbHRvOk1hbm55QGVsaWNpdC51c1wiPkNvbnRhY3QgVXMgSEVSRTwvYT4uIFdlJ2QgYmUgc3Rva2VkIHRvIGhlYXIgZnJvbSB5b3UhPC9wPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9waWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG9waWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb250YWN0VXMudG9waWN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9PjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX0+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGFjdFVzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezh9PC9UZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZW5kRW1haWxCdXR0b25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbnRhY3RVcy9Db250YWN0VXMudHN4IiwiaW1wb3J0IHsgYXBpRXhlY3V0ZSB9IGZyb20gXCIuLi9hcGlFeGVjdXRlXCI7XHJcbmltcG9ydCB7IElDb250YWN0VXMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWN0VXMvQ29udGFjdFVzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsQ29udGFjdFVzID0gKGRhdGE6IElDb250YWN0VXMpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3Qgc2VuZEVtYWlsQ29udGFjdFVzVVJMID0gYC9hcGkvY29udGFjdFVzYDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHNlbmRFbWFpbENvbnRhY3RVc1VSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWN0VXNBcGkgPSB7XHJcbiAgICBzZW5kRW1haWxDb250YWN0VXNcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9jb250YWN0dXMvQ29udGFjdFVzQXBpLnRzeCIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlFeGVjdXRlID0gKHVybDogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wb3N0KHVybCwgZGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucHV0KHVybCwgZGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvYXBpRXhlY3V0ZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vYnV0dG9uXCI7XHJcbmltcG9ydCB7IElQcml2YXRlUG9saWN5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvUHJpdmF0ZVBvbGljeS9JUHJpdmF0ZVBvbGljeVwiO1xyXG5pbXBvcnQgeyBQcml2YXRlUG9saWN5QXBpIH0gZnJvbSBcIi4uLy4uL2FwaS9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lBcGlcIjtcclxuaW1wb3J0IHsgUHJpdmF0ZVBvbGljeU1vZGFsIH0gZnJvbSBcIi4vUHJpdmF0ZVBvbGljeU1vZGFsXCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3lMaXN0IH0gZnJvbSBcIi4vUHJpdmF0ZVBvbGljeUxpc3RcIjtcclxuXHJcbi8vXCJCbHVlcHJpbnRcIiBvciBpbnRlcmZhY2UgZm9yIG91ciBNb2RhbCBTdGF0ZVxyXG5pbnRlcmZhY2UgSVB1YmxpY1ByaXZhY3lNb2RhbFdpbmRvd1N0YXRlIHtcclxuICAgIHByaXZhdGVQb2xpY2llc0Rpc3BsYXlJdGVtczogSVByaXZhdGVQb2xpY3lbXTtcclxuICAgIHNob3dNb2RhbDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhdGVQb2xpY3kgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElQdWJsaWNQcml2YWN5TW9kYWxXaW5kb3dTdGF0ZT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJpdmF0ZVBvbGljaWVzRGlzcGxheUl0ZW1zOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbFRvZ2dsZSA9IHRoaXMubW9kYWxUb2dnbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vZGFsVG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSlcclxuICAgIH1cclxuICAgIHByaXZhdGUgbG9hZERhdGFMaXN0KCkge1xyXG4gICAgICAgIFByaXZhdGVQb2xpY3lBcGkuZ2V0UHJpdmF0ZVBvbGljeUxpc3QoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcml2YXRlUG9saWNpZXNEaXNwbGF5SXRlbXM6IHJlc3BvbnNlLml0ZW1zIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7IGNvbnNvbGUubG9nKFwiZXJyb3IhXCIsIGVycik7IH0pXHJcbiAgICB9XHJcblxyXG5cclxuICBcclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm1vZGFsVG9nZ2xlfSBjbGFzc05hbWU9XCJwcml2YWN5XCI+UHJpdmFjeTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFByaXZhdGVQb2xpY3lNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVBvbGljeUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUl0ZW1zPXt0aGlzLnN0YXRlLnByaXZhdGVQb2xpY2llc0Rpc3BsYXlJdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CdXR0b25DbGljaz17dGhpcy5sb2FkRGF0YUxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUHJpdmF0ZVBvbGljeU1vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3kudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFBvZGNhc3RMaXN0LCBwb3N0UG9kY2FzdExpc3QsIHVwZGF0ZVBvZGNhc3RMaXN0LCBkZWxldGVQb2RjYXN0TGlzdCB9IGZyb20gXCIuLi8uLi8uLi9zcmMvYXBpL3BvZGNhc3QvUG9kY2FzdEFwaVwiO1xyXG5pbXBvcnQgeyBQb2RjYXN0Rm9ybSwgUG9kY2FzdExpc3QgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgeyBHcmF5QmFubmVyIH0gZnJvbSBcIi4uL0Jhbm5lcnMvR3JleUJhbm5lclwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBJUG9kY2FzdExpc3QgfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9JbnRlcmZhY2VzL2luZGV4XCI7XHJcbmltcG9ydCB7IERyb3BEb3duTGlzdCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2Ryb3Bkb3dubGlzdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9kY2FzdExpc3RTdGF0ZSB7XHJcbiAgICBwb2RjYXN0TGlzdDogSVBvZGNhc3RMaXN0O1xyXG4gICAgcG9kY2FzdExpc3RJdGVtczogSVBvZGNhc3RMaXN0W107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2RjYXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJUG9kY2FzdExpc3RTdGF0ZT57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3REZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFVwbG9hZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0VmlkZW9VcGxvYWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0UGljdHVyZVVwbG9hZDogXCJcIixcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0SXRlbXM6IFtdLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9iaW5kIGhlcmUgcGxlYXNlXHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IHRoaXMub25EZWxldGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25GaWVsZENoYW5nZSA9IHRoaXMub25GaWVsZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubG9hZERhdGFMaXN0ID0gdGhpcy5sb2FkRGF0YUxpc3QuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmxpc3RCdXR0b25DbGljayA9IHRoaXMubGlzdEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbGVhclN0YXRlQW5kRm9ybSA9IHRoaXMuY2xlYXJTdGF0ZUFuZEZvcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GaWVsZENoYW5nZShmaWVsZE5hbWU6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdDoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wb2RjYXN0TGlzdCxcclxuICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZFZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGlzdEJ1dHRvbkNsaWNrKGlkOiBudW1iZXIsIGFjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG5keCA9IHRoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtcy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBpZCk7XHJcblxyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZWRpdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChuZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvZGNhc3RMaXN0OiB0aGlzLnN0YXRlLnBvZGNhc3RMaXN0SXRlbXNbbmR4XSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSBcImRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtcy5zcGxpY2UobmR4LCAxKVxyXG4gICAgICAgICAgICBsZXQgaXRtcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucG9kY2FzdExpc3RJdGVtc1xyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVsZXRlQ2xpY2soaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFyU3RhdGVBbmRGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwb2RjYXN0TGlzdDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBvZGNhc3REZXRhaWxzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcG9kY2FzdFVwbG9hZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0VmlkZW9VcGxvYWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb2RjYXN0UGljdHVyZVVwbG9hZDogXCJcIixcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvZGNhc3RMaXN0SXRlbXM6IFtdLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHBvc3RQb2RjYXN0TGlzdCh0aGlzLnN0YXRlLnBvZGNhc3RMaXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUE9TVFwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclN0YXRlQW5kRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBvblVwZGF0ZSgpIHtcclxuICAgICAgICB1cGRhdGVQb2RjYXN0TGlzdCh0aGlzLnN0YXRlLnBvZGNhc3RMaXN0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUFVUXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RhdGVBbmRGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhTGlzdCgpO1xyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7IH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25EZWxldGVDbGljayhpZCkge1xyXG4gICAgICAgIGRlbGV0ZVBvZGNhc3RMaXN0KGlkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFMaXN0KCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHsgfSkuY2F0Y2goKGVycikgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWREYXRhTGlzdCgpIHtcclxuICAgICAgICBnZXRQb2RjYXN0TGlzdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvZGNhc3RMaXN0SXRlbXM6IHJlc3BvbnNlLml0ZW1zIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHsgfSkuY2F0Y2goKGVycikgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YUxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2RjYXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+UG9kY2FzdDwvaDI+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHA+Q09NSU5HIFNPT04hPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIC8vcmV0dXJuIChcclxuICAgICAgICAvLyAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIC8vICAgICAgICA8UG9kY2FzdEZvcm1cclxuICAgICAgICAvLyAgICAgICAgICAgIHBvZGNhc3RMaXN0PXt0aGlzLnN0YXRlLnBvZGNhc3RMaXN0fVxyXG4gICAgICAgIC8vICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX1cclxuICAgICAgICAvLyAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxyXG4gICAgICAgIC8vICAgICAgICAgICAgb25VcGRhdGU9e3RoaXMub25VcGRhdGV9XHJcbiAgICAgICAgLy8gICAgICAgIC8+XHJcblxyXG4gICAgICAgIC8vICAgICAgICA8UG9kY2FzdExpc3RcclxuICAgICAgICAvLyAgICAgICAgICAgIGRhdGFJdGVtcz17dGhpcy5zdGF0ZS5wb2RjYXN0TGlzdEl0ZW1zfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgb25CdXR0b25DbGljaz17dGhpcy5saXN0QnV0dG9uQ2xpY2t9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBzaG93RGVsZXRlQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgc2hvd0VkaXRCdXR0b249e3RydWV9XHJcbiAgICAgICAgLy8gICAgICAgICAgICBoZWFkZXJDb2x1bW5zPXtbXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgeyBjb2x1bW5OYW1lOiBcIk5hbWVcIiwgY29sdW1uU3R5bGU6IFwiYmFzaXMtMjBcIiB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHsgY29sdW1uTmFtZTogXCJEZXRhaWxzXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiVXBsb2FkIFZpZGVvXCIsIGNvbHVtblN0eWxlOiBcImJhc2lzLTIwXCIgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB7IGNvbHVtbk5hbWU6IFwiVXBsb2FkIFBpY3R1cmVcIiwgY29sdW1uU3R5bGU6IFwiYmFzaXMtMjBcIiB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHsgY29sdW1uTmFtZTogXCJVcGxvYWQgRGF0ZVwiLCBjb2x1bW5TdHlsZTogXCJiYXNpcy0yMFwiIH1cclxuICAgICAgICAvLyAgICAgICAgICAgIF19XHJcbiAgICAgICAgLy8gICAgICAgIC8+XHJcblxyXG4gICAgICAgIC8vICAgICAgICA8ZGl2PlxyXG4gICAgICAgIC8vICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICA8L2Rpdj5cclxuICAgICAgICAvLylcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb2RjYXN0L1BvZGNhc3QudHN4IiwiZXhwb3J0ICogZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2lucHV0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Bhc3N3b3JkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Ryb3Bkb3dubGlzdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi90ZXh0YXJlYVwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElJbnB1dFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQ6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJSW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtYXRXcmFwcGVyQ2xhc3MocHJvcHMpfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHByb3BzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj57cHJvcHMuZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmNvbnN0IG9uS2V5UHJlc3MgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKHByb3BzLm9uRW50ZXIpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgcHJvcHMub25FbnRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2lucHV0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBJQWJvdXRVc1BhZ2UgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9hYm91dHVzL0lBYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBnZXRBYm91dFVzIH0gZnJvbSBcIi4uLy4uL2FwaS9hYm91dHVzL0Fib3V0VXNBcGlcIjtcclxuaW1wb3J0IHsgQWJvdXRVc0Zvcm0gfSBmcm9tIFwiLi9BYm91dFVzRm9ybVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQWJvdXRVc1N0YXRlIHtcclxuICAgIGFib3V0VXNQYWdlU3RhdGU6IElBYm91dFVzUGFnZTtcclxuICAgIGFib3V0VXNMaXN0SXRlbXM6IElBYm91dFVzUGFnZVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRVc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElBYm91dFVzU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGFib3V0VXNQYWdlU3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRVc1N1bW1hcnk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dFVzUGljdHVyZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0VGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dE5pY2tuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRCaW86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dEluc3RhZ3JhbTogXCJcIixcclxuICAgICAgICAgICAgICAgIGFib3V0RmFjZWJvb2s6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhYm91dExpbmtlZEluOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYWJvdXRFbWFpbENvbnRhY3Q6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFib3V0VXNMaXN0SXRlbXM6IFtdLFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSA9IHRoaXMubG9hZERhdGEuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcclxuICAgICAgICBnZXRBYm91dFVzKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWJvdXRVc0xpc3RJdGVtczogcmVzcG9uc2UuaXRlbXMgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSwgKGVycikgPT4geyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLzxBYm91dFVzRm9ybVxyXG4gICAgICAgICAgICAgICAgLy8gICAgYWJvdXRVcz17dGhpcy5zdGF0ZS5hYm91dFVzTGlzdEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgLy8vPlxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiI2Y4ZjhmZlwiLCB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiMzBweCAzMHB4XCIsIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgIDxwPiBFbGljaXQgaXMgZGVkaWNhdGVkIHRvIHRoZSBjcmVhdGlvbiAmIG1haW50YWluaW5nIG9mIGNvbW11bml0eSBjb25uZWN0aW9ucyBiZXR3ZWVuIGdyb3VwcyBhbmQgaW5kaXZpZHVhbHMgd2hvc2UgbGl2ZXMgYXJlIGVubWVzaGVkIGluIHRoZSBNdXNpYywgQXJ0LCBhbmQgRW50ZXJ0YWlubWVudCBJbmR1c3RyeS4gT3VyIHByaW9yaXR5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHN1cHBvcnQgb2YgYmFuZHMsIGdyb3VwcywgYW5kIHBlb3BsZSBpbnZvbHZlZCBpbiBvcmRlciB0byBzcHJlYWQgdGhlaXIgY3JlYXRpdmUgd29yayBhbmQgcGVyc29uYWwgbWVzc2FnZS4gICAgIFdlIHdvcmsgZm9yIHRoZSBBc3BpcmluZyBhbmQgSW5zcGlyaW5nLlxyXG4gICAgPC9wPlxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tIFwiLi4vc3JjL3JvdXRlclwiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEFwcFJvdXRlciAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgYnJvd3Nlckhpc3RvcnksIEluZGV4Um91dGUsIFJvdXRlciwgaGFzaEhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZS9Ib21lXCI7XHJcbmltcG9ydCB7IFBvZGNhc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL1BvZGNhc3QvUG9kY2FzdFwiO1xyXG5pbXBvcnQgeyBBYm91dFVzUGFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvQWJvdXRVcy9BYm91dFVzUGFnZVwiO1xyXG5pbXBvcnQgeyBSc3NGZWVkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Sc3NGZWVkL1Jzc0ZlZWRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFByaXZhdGVQb2xpY3kgfSBmcm9tIFwiLi9jb21wb25lbnRzL1ByaXZhdGVQb2xpY3kvUHJpdmF0ZVBvbGljeVwiO1xyXG5pbXBvcnQgeyBDb250YWN0VXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRhY3RVcy9Db250YWN0VXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBSb3V0ZXI6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb2RjYXN0XCIgY29tcG9uZW50PXtQb2RjYXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0VXNQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdHVzXCIgY29tcG9uZW50PXtDb250YWN0VXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcml2YXRlcG9saWN5XCIgY29tcG9uZW50PXtQcml2YXRlUG9saWN5fSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcm91dGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlci9oZWFkZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb250YWluZXIgfSBmcm9tIFwiLi4vRm9vdGVyL0Zvb3RlckNvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvLzxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtdG9wXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwICUgXCIsIGZsb2F0OiBcImxlZnRcIiwgcGFkZGluZzogXCIzMHB4IDBcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIgfX0gPlxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvaG9tZVwiIGNsYXNzTmFtZT1cImdsb3cgcHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxpY2l0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluTGlzdERpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ob21lXCIgY2xhc3NOYW1lPVwiYnRuXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcG9kY2FzdFwiIGNsYXNzTmFtZT1cImJ0biBcIj5Qb2RjYXN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImJ0biBcIj5BYm91dDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdHVzXCIgY2xhc3NOYW1lPVwiYnRuXCI+Q29udGFjdCBVczwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvb3RlckNvbnRhaW5lciAvPlxyXG5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiOyBcclxuaW1wb3J0IHsgUHJpdmF0ZVBvbGljeSB9IGZyb20gXCIuLi9Qcml2YXRlUG9saWN5L1ByaXZhdGVQb2xpY3lcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcC1mb290ZXJiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXAtY29weXJpZ2h0XCIgc3R5bGU9e3tjb2xvcjpcIndoaXRlXCJ9fT5FbGljaXQgwqkyMDIwICB8ICBBbGwgUmlnaHRzIFJlc2VydmVkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZvb3Rlci1uYXYgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxQcml2YXRlUG9saWN5IC8+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29udGFpbmVyLnRzeCIsImltcG9ydCB7IGFwaUV4ZWN1dGUgfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2FwaS9hcGlFeGVjdXRlXCI7XHJcbmltcG9ydCB7IElQcml2YXRlUG9saWN5UGFnZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ludGVyZmFjZXMvcHJpdmF0ZXBvbGljeS9JUHJpdmF0ZVBvbGljeVBhZ2VcIjtcclxuXHJcbmNvbnN0IGJhc2VVUkwgPSBcIi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcml2YXRlUG9saWN5TGlzdCA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZ2V0VVJMID0gYCR7YmFzZVVSTH1hcGkvcHJpdmF0ZXBvbGljeWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShnZXRVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UHJpdmF0ZVBvbGljeUxpc3QgPSAoZGF0YTogSVByaXZhdGVQb2xpY3lQYWdlKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHBvc3RVUkwgPSBgL2FwaS9wcml2YXRlcG9saWN5YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKHBvc3RVUkwsIFwiUE9TVFwiLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUHJpdmF0ZVBvbGljeUxpc3QgPSAoZGF0YTogSVByaXZhdGVQb2xpY3lQYWdlKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHB1dFVSTCA9IGAke2Jhc2VVUkx9YXBpL3ByaXZhdGVwb2xpY3kvJHtkYXRhLmlkfWA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShwdXRVUkwsIFwiUFVUXCIsIGRhdGEpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQcml2YXRlUG9saWN5TGlzdCA9IChkYXRhOiBudW1iZXIpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlVVJMID0gYCR7YmFzZVVSTH1hcGkvcHJpdmF0ZXBvbGljeS8ke2RhdGF9YDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlKGRlbGV0ZVVSTCwgXCJERUxFVEVcIiwgZGF0YSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcml2YXRlUG9saWN5QXBpID0ge1xyXG4gICAgZ2V0UHJpdmF0ZVBvbGljeUxpc3QsIHBvc3RQcml2YXRlUG9saWN5TGlzdCwgdXBkYXRlUHJpdmF0ZVBvbGljeUxpc3QsIGRlbGV0ZVByaXZhdGVQb2xpY3lMaXN0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvUHJpdmF0ZVBvbGljeS9Qcml2YXRlUG9saWN5QXBpLnRzeCJdLCJzb3VyY2VSb290IjoiIn0=