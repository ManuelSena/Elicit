webpackJsonp([3],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(148);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(23)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./site.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./site.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand:400,500,700);", ""]);

// module
exports.push([module.i, "#root {\r\n    /*height: 100vh;*/\r\n    margin: 0;\r\n}\r\n\r\nbody > container\r\n{\r\n    padding-top: 60px;\r\n    padding-bottom: 40px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-size: 62.5%;\r\n    font-size: 15px;\r\n    background: black;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: url('https://s3-us-west-1.amazonaws.com/elicit.us/App+Images/chalkboard.jpg');\r\n}\r\n/*-- Inspiration taken from abdo steif -->\r\n/* --> https://codepen.io/abdosteif/pen/bRoyMb?editors=1100*/\r\n.container {\r\n    padding: 0px;\r\n    /*margin-left: 0px;*/\r\n    padding-top: 80px;\r\n}\r\n\r\n.private {\r\n    color: white;\r\n}\r\n.podcast{\r\n    padding-bottom: 50px;\r\n    color:white;\r\n    text-align: center;\r\n}\r\n.glow {\r\n    padding-left: 10px;\r\n    font-size: 40px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    -webkit-animation: glow 1s ease-in-out infinite alternate;\r\n    -moz-animation: glow 1s ease-in-out infinite alternate;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n    from {\r\n        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f2f2f2, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000, 0 0 70px #ff0000;\r\n    }\r\n\r\n    to {\r\n        text-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000, 0 0 70px #ff0000, 0 0 80px #ff0000;\r\n    }\r\n}\r\n\r\n/* Navbar section */\r\n.hero-image {\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"https://s3-us-west-1.amazonaws.com/elicit.us/elicitLogo.jpg\");\r\n    height: 250px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    /*position: relative;*/\r\n    background-size: 50%;\r\n}\r\n\r\n    .hero-image a {\r\n        background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n        box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n    }\r\n.nav {\r\n    width: 100%;\r\n    height: 85px;\r\n    position: fixed;\r\n    line-height: 65px;\r\n    text-align: right;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: auto;\r\n}\r\n\r\n    .nav div.logo {\r\n        float: left;\r\n        width: auto;\r\n        height: auto;\r\n        padding-left: 1rem;\r\n    }\r\n\r\n        .nav div.logo a {\r\n            text-decoration: none;\r\n            color: #fff;\r\n            font-size: 2.5rem;\r\n        }\r\n\r\n            .nav div.logo a:hover {\r\n                color: #00E676;\r\n            }\r\n\r\n    .nav div.main_list {\r\n        height: 65px;\r\n        float: right;\r\n    }\r\n\r\n        .nav div.main_list ul {\r\n            width: 100%;\r\n            height: 65px;\r\n            display: flex;\r\n            list-style: none;\r\n            margin: 0;\r\n            padding: 0;\r\n        }\r\n\r\n            .nav div.main_list ul li {\r\n                width: auto;\r\n                height: 65px;\r\n                padding: 0;\r\n                padding-right: 3rem;\r\n            }\r\n\r\n                .nav div.main_list ul li a {\r\n                    text-decoration: none;\r\n                    color: #fff;\r\n                    line-height: 65px;\r\n                    font-size: 2.4rem;\r\n                }\r\n\r\n                    .nav div.main_list ul li a:hover {\r\n                        color: #00E676;\r\n                    }\r\n.mainListDiv a .btn:active {\r\n}\r\n\r\n.social-media a{\r\nmargin-left: 5px;\r\n}\r\n\r\n.meetthesegents {\r\n    margin-top: 30px;\r\n}\r\n/* Home section */\r\n.btn {\r\n    color:white;\r\n}\r\n.contactus {\r\n    \r\n    color:white;\r\n    margin-top: 50px;\r\n    -webkit-animation: glow 1s ease-in-out infinite alternate;\r\n    -moz-animation: glow 1s ease-in-out infinite alternate;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n.navTrigger {\r\n    display: none;\r\n}\r\n\r\n.nav {\r\n    padding-bottom: 20px;\r\n    -webkit-transition: all 0.4s ease;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n.fa-linkedin {\r\n    background-color: #0e76a8;\r\n    color: white;\r\n    height: 40px;\r\n    width: 40px;\r\n    padding-top: 4px;\r\n    padding-left: 8px;\r\n}\r\n\r\n.fa-facebook {\r\n    background-color: #4267b2;\r\n    color: white;\r\n    padding-top: 4.5px;\r\n    padding-left: 10.5px;\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\n.fa-instagram {\r\n    color: white;\r\n    padding-top: 4.5px;\r\n    padding-left: 7.5px;\r\n    height: 40px;\r\n    width: 40px;\r\n    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.logo {\r\n    opacity: 0.2;\r\n    height: 10px;\r\n    width: 10px;\r\n}\r\n.logoimage {\r\n    height:100px;\r\n    width: 100px;\r\n\r\n}\r\n.home {\r\n    background-color: black;\r\n    padding-top: 150px;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 30px;\r\n}\r\n/*footer*/\r\n.fixed-bottom {\r\n    position: fixed;\r\n    width: 100%;\r\n    left: 0px;\r\n    bottom: 0px;\r\n\r\n    /*height: 70px;*/\r\n    background-color: #000000;\r\n}\r\n\r\n.ep-footer {\r\n    background: #000000;\r\n}\r\n\r\n.ep-footerbar {\r\n    width: 100%;\r\n    float: left;\r\n    background: #000000;\r\n}\r\n\r\n.ep-copyright {\r\n    color: #fff;\r\n    float: left;\r\n    padding: 20px 10px;\r\n    font-size: 15px;\r\n    line-height: 20px;\r\n}\r\n\r\n.footer-nav ul{\r\n\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.privacy {\r\n    padding-top: 20px;\r\n    padding-right: 15px;\r\n    color: #fff;\r\n    display: block;\r\n    line-height: 20px;\r\n    background: transparent;\r\n    text-decoration: underline;\r\n    border: none;\r\n}\r\n\r\n.tep-footernav ul {\r\n    width: 100%;\r\n    line-height: 20px;\r\n    list-style: none;\r\n}\r\n\r\n\r\n\r\n/* Media qurey section */\r\n\r\n@media screen and (min-width: 789px) and (max-width: 1024px) {\r\n    .container {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:789px) {\r\n    .navTrigger {\r\n        display: block;\r\n    }\r\n\r\n    .nav div.logo {\r\n        margin-left: 15px;\r\n    }\r\n\r\n    .nav div.main_list {\r\n        width: 100%;\r\n        height: 0;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .nav div.show_list {\r\n        height: auto;\r\n        display: none;\r\n    }\r\n\r\n    .nav div.main_list ul {\r\n        flex-direction: column;\r\n        width: 100%;\r\n        height: 100vh;\r\n        right: 0;\r\n        left: 0;\r\n        bottom: 0;\r\n        background-color: #111;\r\n        background-position: center top;\r\n    }\r\n\r\n        .nav div.main_list ul li {\r\n            width: 100%;\r\n            text-align: right;\r\n        }\r\n\r\n            .nav div.main_list ul li a {\r\n                text-align: center;\r\n                width: 100%;\r\n                font-size: 3rem;\r\n                padding: 20px;\r\n            }\r\n\r\n    .nav div.media_button {\r\n        display: block;\r\n    }\r\n}\r\n\r\n\r\n/* Animation */\r\n/* Inspiration taken from Dicson https://codemyui.com/simple-hamburger-menu-x-mark-animation/ */\r\n\r\n.navTrigger {\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 25px;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 30px;\r\n    top: 0;\r\n    bottom: 0;\r\n}\r\n\r\n    .navTrigger i {\r\n        background-color: #fff;\r\n        border-radius: 2px;\r\n        content: '';\r\n        display: block;\r\n        width: 100%;\r\n        height: 4px;\r\n    }\r\n\r\n        .navTrigger i:nth-child(1) {\r\n            -webkit-animation: outT 0.8s backwards;\r\n            animation: outT 0.8s backwards;\r\n            -webkit-animation-direction: reverse;\r\n            animation-direction: reverse;\r\n        }\r\n\r\n        .navTrigger i:nth-child(2) {\r\n            margin: 5px 0;\r\n            -webkit-animation: outM 0.8s backwards;\r\n            animation: outM 0.8s backwards;\r\n            -webkit-animation-direction: reverse;\r\n            animation-direction: reverse;\r\n        }\r\n\r\n        .navTrigger i:nth-child(3) {\r\n            -webkit-animation: outBtm 0.8s backwards;\r\n            animation: outBtm 0.8s backwards;\r\n            -webkit-animation-direction: reverse;\r\n            animation-direction: reverse;\r\n        }\r\n\r\n    .navTrigger.active i:nth-child(1) {\r\n        -webkit-animation: inT 0.8s forwards;\r\n        animation: inT 0.8s forwards;\r\n    }\r\n\r\n    .navTrigger.active i:nth-child(2) {\r\n        -webkit-animation: inM 0.8s forwards;\r\n        animation: inM 0.8s forwards;\r\n    }\r\n\r\n    .navTrigger.active i:nth-child(3) {\r\n        -webkit-animation: inBtm 0.8s forwards;\r\n        animation: inBtm 0.8s forwards;\r\n    }\r\n\r\n@-webkit-keyframes inM {\r\n    50% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(45deg);\r\n    }\r\n}\r\n\r\n@keyframes inM {\r\n    50% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(45deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes outM {\r\n    50% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(45deg);\r\n    }\r\n}\r\n\r\n@keyframes outM {\r\n    50% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(45deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes inT {\r\n    0% {\r\n        -webkit-transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateY(9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: translateY(9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@keyframes inT {\r\n    0% {\r\n        transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes outT {\r\n    0% {\r\n        -webkit-transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateY(9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: translateY(9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@keyframes outT {\r\n    0% {\r\n        transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes inBtm {\r\n    0% {\r\n        -webkit-transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateY(-9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: translateY(-9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@keyframes inBtm {\r\n    0% {\r\n        transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(-9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(-9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes outBtm {\r\n    0% {\r\n        -webkit-transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateY(-9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: translateY(-9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@keyframes outBtm {\r\n    0% {\r\n        transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(-9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(-9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n.affix {\r\n    padding: 0;\r\n    background-color: #111;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.myH2 {\r\n    text-align: center;\r\n    font-size: 4rem;\r\n}\r\n\r\n.myP {\r\n    text-align: justify;\r\n    padding-left: 15%;\r\n    padding-right: 15%;\r\n    font-size: 20px;\r\n}\r\n\r\n@media all and (max-width:700px) {\r\n    .myP {\r\n        padding: 2%;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n.container {\r\n    padding-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.fixed-bottom {\r\n    position: fixed;\r\n    top: auto;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #000000;\r\n    text-align: center;\r\n}\r\n\r\n.navbar .nav .active, .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n    background: #e7e7e7 !important;\r\n    color: #333 !important;\r\n}\r\n\r\nbody > #root {\r\n    height: 100vh;\r\n    margin: 0;\r\n}\r\n\r\n\r\n/*.nav {\r\n    width: 100%;\r\n    height: 65px;\r\n    position: fixed;\r\n    line-height: 65px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n    .nav div.logo {\r\n        float: left;\r\n        width: auto;\r\n        height: auto;\r\n        padding-left: 3rem;\r\n    }\r\n\r\n        .nav div.logo a {\r\n            text-decoration: none;\r\n            color: #fff;\r\n            font-size: 2.5rem;\r\n        }\r\n\r\n            .nav div.logo a:hover {\r\n                color: #00E676;\r\n            }\r\n\r\n    .nav div.main_list {\r\n        height: 65px;\r\n        float: right;\r\n    }\r\n\r\n        .nav div.main_list ul {\r\n            width: 100%;\r\n            height: 65px;\r\n            display: flex;\r\n            list-style: none;\r\n            margin: 0;\r\n            padding: 0;\r\n        }\r\n\r\n            .nav div.main_list ul li {\r\n                width: auto;\r\n                height: 65px;\r\n                padding: 0;\r\n                padding-right: 3rem;\r\n            }\r\n\r\n                .nav div.main_list ul li a {\r\n                    text-decoration: none;\r\n                    color: #fff;\r\n                    line-height: 65px;\r\n                    font-size: 2.4rem;\r\n                }\r\n\r\n                    .nav div.main_list ul li a:hover {\r\n                        color: #00E676;\r\n                    }\r\n\r\n.home {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-image: url(https://s3-us-west-1.amazonaws.com/elicit.us/elicitLogo.jpg);\r\n    background-position: center top;\r\n    background-size: cover;\r\n}\r\n\r\n.navTrigger {\r\n    display: none;\r\n}\r\n\r\n.nav {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    -webkit-transition: all 0.4s ease;\r\n    transition: all 0.4s ease;\r\n}*/\r\n\r\n\r\n\r\n/*html, body {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: black;\r\n    color: black;*/\r\n/* The image used */\r\n/*background-image: url(\"img_parallax.jpg\");*/\r\n/* Set a specific height */\r\n/*min-height: 500px;*/\r\n/* Create the parallax scrolling effect */\r\n/*background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}/*\r\n\r\n.glow {\r\n    font-size: 80px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    -webkit-animation: glow 1s ease-in-out infinite alternate;\r\n    -moz-animation: glow 1s ease-in-out infinite alternate;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n    from {\r\n        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f2f2f2, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000, 0 0 70px #ff0000;\r\n    }\r\n\r\n    to {\r\n        text-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000, 0 0 70px #ff0000, 0 0 80px #ff0000;\r\n    }\r\n}\r\n\r\n/*HEADER*/\r\n/**\r\n.fixed-top {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n}\r\n\r\n/*BODY*/\r\n/**\r\n.ep-haslayout {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.ep-main-section {\r\n    padding: 80px 0;\r\n    overflow: hidden;\r\n}\r\n\r\n    .ep-main-section > div {\r\n        position: relative;\r\n    }\r\n\r\n\r\n/*FOOTER*/\r\n\r\n/**\r\n.ep-footer {\r\n    background: #000000;\r\n}\r\n\r\n.ep-footerbar {\r\n    width: 100%;\r\n    float: left;\r\n    background: #000000;\r\n}\r\n\r\n.ep-copyright {\r\n    color: #fff;\r\n    float: left;\r\n    padding: 20px 0;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n}\r\n\r\n.ep-footernav {\r\n    float: right;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    font-weight: 300;\r\n    padding: 20px 0;\r\n    font-family: 'Oswald', Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.tep-footernav ul {\r\n    width: 100%;\r\n    float: left;\r\n    line-height: 20px;\r\n    list-style: none;\r\n}\r\n\r\n.ep-footernav ul li {\r\n    float: left;\r\n    line-height: 20px;\r\n    padding: 0 0 0 20px;\r\n    list-style-type: none;\r\n}\r\n\r\n    .ep-footernav ul li a {\r\n        color: #fff;\r\n        display: block;\r\n        line-height: 20px;\r\n    }\r\n\r\n  **/\r\n", ""]);

// exports


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(35);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 35:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

},[147]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3Mvc2l0ZS5jc3M/MGU0MyIsIndlYnBhY2s6Ly8vLi9jc3Mvc2l0ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLGNBQWMsbUJBQU8sQ0FBQyxHQUFxRDs7QUFFM0UsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLEVBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVU7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUM1Q0EsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7QUFDQSxjQUFjLFFBQVMsOEVBQThFOztBQUVyRztBQUNBLGNBQWMsUUFBUyxVQUFVLHdCQUF3QixvQkFBb0IsS0FBSyw2QkFBNkIsMEJBQTBCLDZCQUE2QixLQUFLLHVCQUF1QixtQkFBbUIsK0JBQStCLCtDQUErQyx5QkFBeUIsd0JBQXdCLDBCQUEwQixvQ0FBb0MsK0JBQStCLG9CQUFvQixxQkFBcUIsa0dBQWtHLEtBQUssK0hBQStILHFCQUFxQiwyQkFBMkIsNEJBQTRCLEtBQUssa0JBQWtCLHFCQUFxQixLQUFLLGFBQWEsNkJBQTZCLG9CQUFvQiwyQkFBMkIsS0FBSyxXQUFXLDJCQUEyQix3QkFBd0IsdUJBQXVCLDJCQUEyQixrRUFBa0UsK0RBQStELDBEQUEw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QUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0WEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NpdGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NpdGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zaXRlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY3NzL3NpdGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjQwMCw1MDAsNzAwKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNyb290IHtcXHJcXG4gICAgLypoZWlnaHQ6IDEwMHZoOyovXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSA+IGNvbnRhaW5lclxcclxcbntcXHJcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2VsaWNpdC51cy9BcHArSW1hZ2VzL2NoYWxrYm9hcmQuanBnJyk7XFxyXFxufVxcclxcbi8qLS0gSW5zcGlyYXRpb24gdGFrZW4gZnJvbSBhYmRvIHN0ZWlmIC0tPlxcclxcbi8qIC0tPiBodHRwczovL2NvZGVwZW4uaW8vYWJkb3N0ZWlmL3Blbi9iUm95TWI/ZWRpdG9ycz0xMTAwKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICAvKm1hcmdpbi1sZWZ0OiAwcHg7Ki9cXHJcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcml2YXRlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ucG9kY2FzdHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5nbG93IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgLW1vei1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgICBhbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvdyB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCAzMHB4ICNmMmYyZjIsIDAgMCA0MHB4ICNmZjAwMDAsIDAgMCA1MHB4ICNmZjAwMDAsIDAgMCA2MHB4ICNmZjAwMDAsIDAgMCA3MHB4ICNmZjAwMDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4ICNmZjAwMDAsIDAgMCAzMHB4ICNmZjAwMDAsIDAgMCA0MHB4ICNmZjAwMDAsIDAgMCA1MHB4ICNmZjAwMDAsIDAgMCA2MHB4ICNmZjAwMDAsIDAgMCA3MHB4ICNmZjAwMDAsIDAgMCA4MHB4ICNmZjAwMDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2YmFyIHNlY3Rpb24gKi9cXHJcXG4uaGVyby1pbWFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcXFwiaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9lbGljaXQudXMvZWxpY2l0TG9nby5qcGdcXFwiKTtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5oZXJvLWltYWdlIGEge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjkzMjNjLCAjNDg1NTYzLCAjMmI1ODc2LCAjNGU0Mzc2KTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDQ1LCA1NCwgNjUsIDAuNzUpO1xcclxcbiAgICB9XFxyXFxuLm5hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDg1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5uYXYgZGl2LmxvZ28ge1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdiBkaXYubG9nbyBhIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hdiBkaXYubG9nbyBhOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMEU2NzY7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAubmF2IGRpdi5tYWluX2xpc3Qge1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSBhIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIGE6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBFNjc2O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbi5tYWluTGlzdERpdiBhIC5idG46YWN0aXZlIHtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYSBhe1xcclxcbm1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWV0dGhlc2VnZW50cyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcbi8qIEhvbWUgc2VjdGlvbiAqL1xcclxcbi5idG4ge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuLmNvbnRhY3R1cyB7XFxyXFxuICAgIFxcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgICAtbW96LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAgIGFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcbi5uYXZUcmlnZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5mYSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5mYS1saW5rZWRpbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc2YTg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1mYWNlYm9vayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjY3YjI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQuNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwLjVweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWluc3RhZ3JhbSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQuNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDcuNXB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAzNSUgOTAlLCAjZmVjNTY0LCB0cmFuc3BhcmVudCA1MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAwIDE0MCUsICNmZWM1NjQsIHRyYW5zcGFyZW50IDUwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCAwIC0yNSUsICM1MjU4Y2YsIHRyYW5zcGFyZW50IDUwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCAyMCUgLTUwJSwgIzUyNThjZiwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDEwMCUgMCwgIzg5M2RjMiwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDYwJSAtMjAlLCAjODkzZGMyLCB0cmFuc3BhcmVudCA1MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAwJSAxMDAlLCAjZDkzMTdhLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgjNjU1OWNhLCAjYmMzMThmIDMwJSwgI2UzM2Y1ZiA1MCUsICNmNzc2MzggNzAlLCAjZmVjNjZkIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuLmxvZ29pbWFnZSB7XFxyXFxuICAgIGhlaWdodDoxMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcblxcclxcbn1cXHJcXG4uaG9tZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcbi8qZm9vdGVyKi9cXHJcXG4uZml4ZWQtYm90dG9tIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG5cXHJcXG4gICAgLypoZWlnaHQ6IDcwcHg7Ki9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVwLWZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5lcC1mb290ZXJiYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5lcC1jb3B5cmlnaHQge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1uYXYgdWx7XFxyXFxuXFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpdmFjeSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlcC1mb290ZXJuYXYgdWwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIE1lZGlhIHF1cmV5IHNlY3Rpb24gKi9cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4OXB4KSB7XFxyXFxuICAgIC5uYXZUcmlnZ2VyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYgZGl2LmxvZ28ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiBkaXYubWFpbl9saXN0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2IGRpdi5zaG93X2xpc3Qge1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwgbGkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSBhIHtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiBkaXYubWVkaWFfYnV0dG9uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcbi8qIEluc3BpcmF0aW9uIHRha2VuIGZyb20gRGljc29uIGh0dHBzOi8vY29kZW15dWkuY29tL3NpbXBsZS1oYW1idXJnZXItbWVudS14LW1hcmstYW5pbWF0aW9uLyAqL1xcclxcblxcclxcbi5uYXZUcmlnZ2VyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDMwcHg7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLm5hdlRyaWdnZXIgaSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYXZUcmlnZ2VyIGk6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogb3V0VCAwLjhzIGJhY2t3YXJkcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IG91dFQgMC44cyBiYWNrd2FyZHM7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2VHJpZ2dlciBpOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogb3V0TSAwLjhzIGJhY2t3YXJkcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IG91dE0gMC44cyBiYWNrd2FyZHM7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2VHJpZ2dlciBpOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG91dEJ0bSAwLjhzIGJhY2t3YXJkcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IG91dEJ0bSAwLjhzIGJhY2t3YXJkcztcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdlRyaWdnZXIuYWN0aXZlIGk6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBpblQgMC44cyBmb3J3YXJkcztcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogaW5UIDAuOHMgZm9yd2FyZHM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdlRyaWdnZXIuYWN0aXZlIGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBpbk0gMC44cyBmb3J3YXJkcztcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogaW5NIDAuOHMgZm9yd2FyZHM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdlRyaWdnZXIuYWN0aXZlIGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBpbkJ0bSAwLjhzIGZvcndhcmRzO1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBpbkJ0bSAwLjhzIGZvcndhcmRzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGluTSB7XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBpbk0ge1xcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIG91dE0ge1xcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3V0TSB7XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5UIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGluVCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIG91dFQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3V0VCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGluQnRtIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaW5CdG0ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIG91dEJ0bSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG91dEJ0bSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWZmaXgge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubXlIMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlQIHtcXHJcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjcwMHB4KSB7XFxyXFxuICAgIC5teVAge1xcclxcbiAgICAgICAgcGFkZGluZzogMiU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZml4ZWQtYm90dG9tIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IGF1dG87XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAubmF2IC5hY3RpdmUsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpob3ZlciwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiAjcm9vdCB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyoubmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsaW5lLWhlaWdodDogNjVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLm5hdiBkaXYubG9nbyB7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2IGRpdi5sb2dvIGEge1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAubmF2IGRpdi5sb2dvIGE6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwRTY3NjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwgbGkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIGEge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwgbGkgYTpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMEU2NzY7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vZWxpY2l0LnVzL2VsaWNpdExvZ28uanBnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdlRyaWdnZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxufSovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLypodG1sLCBib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgY29sb3I6IGJsYWNrOyovXFxyXFxuLyogVGhlIGltYWdlIHVzZWQgKi9cXHJcXG4vKmJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaW1nX3BhcmFsbGF4LmpwZ1xcXCIpOyovXFxyXFxuLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXFxyXFxuLyptaW4taGVpZ2h0OiA1MDBweDsqL1xcclxcbi8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xcclxcbi8qYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn0vKlxcclxcblxcclxcbi5nbG93IHtcXHJcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAgIC1tb3otYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGdsb3cge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZjJmMmYyLCAwIDAgNDBweCAjZmYwMDAwLCAwIDAgNTBweCAjZmYwMDAwLCAwIDAgNjBweCAjZmYwMDAwLCAwIDAgNzBweCAjZmYwMDAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMjBweCAjZmYwMDAwLCAwIDAgMzBweCAjZmYwMDAwLCAwIDAgNDBweCAjZmYwMDAwLCAwIDAgNTBweCAjZmYwMDAwLCAwIDAgNjBweCAjZmYwMDAwLCAwIDAgNzBweCAjZmYwMDAwLCAwIDAgODBweCAjZmYwMDAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qSEVBREVSKi9cXHJcXG4vKipcXHJcXG4uZml4ZWQtdG9wIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxMDMwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkJPRFkqL1xcclxcbi8qKlxcclxcbi5lcC1oYXNsYXlvdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5lcC1tYWluLXNlY3Rpb24ge1xcclxcbiAgICBwYWRkaW5nOiA4MHB4IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiAgICAuZXAtbWFpbi1zZWN0aW9uID4gZGl2IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbi8qRk9PVEVSKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4uZXAtZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVwLWZvb3RlcmJhciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVwLWNvcHlyaWdodCB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXAtZm9vdGVybmF2IHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlcC1mb290ZXJuYXYgdWwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZXAtZm9vdGVybmF2IHVsIGxpIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiAgICAuZXAtZm9vdGVybmF2IHVsIGxpIGEge1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAqKi9cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL2Nzcy9zaXRlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyJdLCJzb3VyY2VSb290IjoiIn0=