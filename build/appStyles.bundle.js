webpackJsonp([3],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(143);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(19)(content, options);

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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand:400,500,700);", ""]);

// module
exports.push([module.i, "#root {\r\n    /*height: 100vh;*/\r\n    margin: 0;\r\n}\r\n\r\nbody > container\r\n{\r\n    padding-top: 60px;\r\n    padding-bottom: 40px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"https://s3-us-west-1.amazonaws.com/elicit.us/App+Images/chalkboard.jpg\");\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-size: 62.5%;\r\n    font-size: 15px;\r\n    background: black;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*-- Inspiration taken from abdo steif -->\r\n/* --> https://codepen.io/abdosteif/pen/bRoyMb?editors=1100*/\r\n.container {\r\n    padding: 0px;\r\n    /*margin-left: 0px;*/\r\n    padding-top: 80px;\r\n}\r\n\r\n.private {\r\n    color: white;\r\n}\r\n.podcast {\r\n    padding-bottom: 70px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.glow {\r\n    padding-left: 10px;\r\n    font-size: 40px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    -webkit-animation: glow 1s ease-in-out infinite alternate;\r\n    -moz-animation: glow 1s ease-in-out infinite alternate;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n    from {\r\n        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f2f2f2, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000, 0 0 70px #ff0000;\r\n    }\r\n\r\n    to {\r\n        text-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000, 0 0 70px #ff0000, 0 0 80px #ff0000;\r\n    }\r\n}\r\n\r\n/* Navbar section */\r\n\r\n.tg-main-section {\r\n    background: url('https://s3-us-west-1.amazonaws.com/elicit.us/App+Images/chalkboard.jpg');\r\n}\r\n\r\n.hero-image {\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"https://s3-us-west-1.amazonaws.com/elicit.us/elicitLogo.jpg\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    /*position: relative;*/\r\n    background-size: 45%;\r\n}\r\n\r\n    .hero-image a {\r\n        background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);\r\n        box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);\r\n    }\r\n.nav {\r\n    width: 100%;\r\n    height: 85px;\r\n    position: fixed;\r\n    line-height: 35px;\r\n    text-align: right;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: auto;\r\n}\r\n\r\n    .nav div.logo {\r\n        float: left;\r\n        width: auto;\r\n        height: auto;\r\n        padding-left: 1rem;\r\n    }\r\n\r\n        .nav div.logo a {\r\n            text-decoration: none;\r\n            color: #fff;\r\n            font-size: 2.5rem;\r\n        }\r\n\r\n            .nav div.logo a:hover {\r\n                color: black;\r\n            }\r\n\r\n    .nav div.main_list {\r\n        height: 65px;\r\n        float: right;\r\n    }\r\n\r\n        .nav div.main_list ul {\r\n            width: 100%;\r\n            height: 65px;\r\n            display: flex;\r\n            list-style: none;\r\n            margin: 0;\r\n            padding: 0;\r\n        }\r\n\r\n            .nav div.main_list ul li {\r\n                width: auto;\r\n                height: 65px;\r\n                padding: 0;\r\n                padding-right: 3rem;\r\n            }\r\n\r\n                .nav div.main_list ul li a {\r\n                    text-decoration: none;\r\n                    color: #fff;\r\n                    line-height: 65px;\r\n                    font-size: 2.4rem;\r\n                }\r\n\r\n                    .nav div.main_list ul li a:hover {\r\n                        color: #00E676;\r\n                    }\r\n.mainListDiv a .btn:active {\r\n}\r\n\r\n.eheader {\r\n\r\n\r\n}\r\n\r\n.social-media a {\r\n    margin-left: 5px;\r\n}\r\n\r\n.meetthesegents {\r\n    margin-top: 30px;\r\n}\r\n/* Home section */\r\n.btn {\r\n    color:white;\r\n}\r\n.contactus {\r\n \r\n    color:white;\r\n    margin-top: 50px;\r\n    -webkit-animation: glow 1s ease-in-out infinite alternate;\r\n    -moz-animation: glow 1s ease-in-out infinite alternate;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n.navTrigger {\r\n    display: none;\r\n}\r\n\r\n.nav {\r\n    -webkit-transition: all 0.4s ease;\r\n    transition: all 0.4s ease;\r\n}\r\n\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n\r\n.fa-linkedin {\r\n    background-color: #0e76a8;\r\n    color: white;\r\n    height: 40px;\r\n    width: 40px;\r\n    padding-top: 4px;\r\n    padding-left: 8px;\r\n}\r\n\r\n.fa-facebook {\r\n    background-color: #4267b2;\r\n    color: white;\r\n    padding-top: 4.5px;\r\n    padding-left: 10.5px;\r\n    height: 40px;\r\n    width: 40px;\r\n}\r\n\r\n.fa-instagram {\r\n    color: white;\r\n    padding-top: 4.5px;\r\n    padding-left: 7.5px;\r\n    height: 40px;\r\n    width: 40px;\r\n    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.logo {\r\n    opacity: 0.2;\r\n    height: 10px;\r\n    width: 10px;\r\n}\r\n.logoimage {\r\n    height:100px;\r\n    width: 100px;\r\n\r\n}\r\n.tg-commentform {\r\n    color: white;\r\n    padding-bottom: 20px;\r\n    \r\n}\r\n.home {\r\n    background-color: black;\r\n    padding-top: 100px;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 30px;\r\n}\r\n/*footer*/\r\n.fixed-bottom {\r\n    position: fixed;\r\n    width: 100%;\r\n    left: 0px;\r\n    bottom: 0px;\r\n\r\n\r\n    /*height: 70px;*/\r\n    background-color: #000000;\r\n}\r\n\r\n.ep-footer {\r\n    background: #000000;\r\n}\r\n\r\n.ep-footerbar {\r\n    width: 100%;\r\n    float: left;\r\n    background: #000000;\r\n}\r\n\r\n.ep-copyright {\r\n    color: #fff;\r\n    float: left;\r\n    padding: 20px 10px;\r\n    font-size: 15px;\r\n    line-height: 20px;\r\n}\r\n\r\n.footer-nav ul{\r\n\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.privacy {\r\n    padding-top: 20px;\r\n    padding-right: 15px;\r\n    color: #fff;\r\n    display: block;\r\n    line-height: 20px;\r\n    background: transparent;\r\n    text-decoration: underline;\r\n    border: none;\r\n}\r\n\r\n.tep-footernav ul {\r\n    width: 100%;\r\n    line-height: 20px;\r\n    list-style: none;\r\n}\r\n\r\n\r\n\r\n/* Media qurey section */\r\n\r\n@media screen and (min-width: 789px) and (max-width: 1024px) {\r\n    .container {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:789px) {\r\n    .navTrigger {\r\n        display: block;\r\n    }\r\n\r\n    .nav div.logo {\r\n        margin-left: 15px;\r\n    }\r\n\r\n    .nav div.main_list {\r\n        width: 100%;\r\n        height: 0;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .nav div.show_list {\r\n        height: auto;\r\n        display: none;\r\n    }\r\n\r\n    .nav div.main_list ul {\r\n        flex-direction: column;\r\n        width: 100%;\r\n        height: 100vh;\r\n        right: 0;\r\n        left: 0;\r\n        bottom: 0;\r\n        background-color: #111;\r\n        background-position: center top;\r\n    }\r\n\r\n        .nav div.main_list ul li {\r\n            width: 100%;\r\n            text-align: right;\r\n        }\r\n\r\n            .nav div.main_list ul li a {\r\n                text-align: center;\r\n                width: 100%;\r\n                font-size: 3rem;\r\n                padding: 20px;\r\n            }\r\n\r\n    .nav div.media_button {\r\n        display: block;\r\n    }\r\n}\r\n\r\n\r\n/* Animation */\r\n/* Inspiration taken from Dicson https://codemyui.com/simple-hamburger-menu-x-mark-animation/ */\r\n\r\n.navTrigger {\r\n    cursor: pointer;\r\n    width: 30px;\r\n    height: 25px;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 30px;\r\n    top: 0;\r\n    bottom: 0;\r\n}\r\n\r\n    .navTrigger i {\r\n        background-color: #fff;\r\n        border-radius: 2px;\r\n        content: '';\r\n        display: block;\r\n        width: 100%;\r\n        height: 4px;\r\n    }\r\n\r\n        .navTrigger i:nth-child(1) {\r\n            -webkit-animation: outT 0.8s backwards;\r\n            animation: outT 0.8s backwards;\r\n            -webkit-animation-direction: reverse;\r\n            animation-direction: reverse;\r\n        }\r\n\r\n        .navTrigger i:nth-child(2) {\r\n            margin: 5px 0;\r\n            -webkit-animation: outM 0.8s backwards;\r\n            animation: outM 0.8s backwards;\r\n            -webkit-animation-direction: reverse;\r\n            animation-direction: reverse;\r\n        }\r\n\r\n        .navTrigger i:nth-child(3) {\r\n            -webkit-animation: outBtm 0.8s backwards;\r\n            animation: outBtm 0.8s backwards;\r\n            -webkit-animation-direction: reverse;\r\n            animation-direction: reverse;\r\n        }\r\n\r\n    .navTrigger.active i:nth-child(1) {\r\n        -webkit-animation: inT 0.8s forwards;\r\n        animation: inT 0.8s forwards;\r\n    }\r\n\r\n    .navTrigger.active i:nth-child(2) {\r\n        -webkit-animation: inM 0.8s forwards;\r\n        animation: inM 0.8s forwards;\r\n    }\r\n\r\n    .navTrigger.active i:nth-child(3) {\r\n        -webkit-animation: inBtm 0.8s forwards;\r\n        animation: inBtm 0.8s forwards;\r\n    }\r\n\r\n@-webkit-keyframes inM {\r\n    50% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(45deg);\r\n    }\r\n}\r\n\r\n@keyframes inM {\r\n    50% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(45deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes outM {\r\n    50% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(45deg);\r\n    }\r\n}\r\n\r\n@keyframes outM {\r\n    50% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(45deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes inT {\r\n    0% {\r\n        -webkit-transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateY(9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: translateY(9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@keyframes inT {\r\n    0% {\r\n        transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes outT {\r\n    0% {\r\n        -webkit-transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateY(9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: translateY(9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@keyframes outT {\r\n    0% {\r\n        transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes inBtm {\r\n    0% {\r\n        -webkit-transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateY(-9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: translateY(-9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@keyframes inBtm {\r\n    0% {\r\n        transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(-9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(-9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes outBtm {\r\n    0% {\r\n        -webkit-transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: translateY(-9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: translateY(-9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n@keyframes outBtm {\r\n    0% {\r\n        transform: translateY(0px) rotate(0deg);\r\n    }\r\n\r\n    50% {\r\n        transform: translateY(-9px) rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: translateY(-9px) rotate(135deg);\r\n    }\r\n}\r\n\r\n.affix {\r\n    padding: 0;\r\n    background-color: #111;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.myH2 {\r\n    text-align: center;\r\n    font-size: 4rem;\r\n}\r\n\r\n.myP {\r\n    text-align: justify;\r\n    padding-left: 15%;\r\n    padding-right: 15%;\r\n    font-size: 20px;\r\n}\r\n\r\n@media all and (max-width:700px) {\r\n    .myP {\r\n        padding: 2%;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n.container {\r\n    padding-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.fixed-bottom {\r\n    position: fixed;\r\n    top: auto;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #000000;\r\n    text-align: center;\r\n}\r\n\r\n.navbar .nav .active, .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n    background: #e7e7e7 !important;\r\n    color: #333 !important;\r\n}\r\n\r\nbody > #root {\r\n    height: 100vh;\r\n    margin: 0;\r\n}\r\n\r\n\r\n/*.nav {\r\n    width: 100%;\r\n    height: 65px;\r\n    position: fixed;\r\n    line-height: 65px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n    .nav div.logo {\r\n        float: left;\r\n        width: auto;\r\n        height: auto;\r\n        padding-left: 3rem;\r\n    }\r\n\r\n        .nav div.logo a {\r\n            text-decoration: none;\r\n            color: #fff;\r\n            font-size: 2.5rem;\r\n        }\r\n\r\n            .nav div.logo a:hover {\r\n                color: #00E676;\r\n            }\r\n\r\n    .nav div.main_list {\r\n        height: 65px;\r\n        float: right;\r\n    }\r\n\r\n        .nav div.main_list ul {\r\n            width: 100%;\r\n            height: 65px;\r\n            display: flex;\r\n            list-style: none;\r\n            margin: 0;\r\n            padding: 0;\r\n        }\r\n\r\n            .nav div.main_list ul li {\r\n                width: auto;\r\n                height: 65px;\r\n                padding: 0;\r\n                padding-right: 3rem;\r\n            }\r\n\r\n                .nav div.main_list ul li a {\r\n                    text-decoration: none;\r\n                    color: #fff;\r\n                    line-height: 65px;\r\n                    font-size: 2.4rem;\r\n                }\r\n\r\n                    .nav div.main_list ul li a:hover {\r\n                        color: #00E676;\r\n                    }\r\n\r\n.home {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-image: url(https://s3-us-west-1.amazonaws.com/elicit.us/elicitLogo.jpg);\r\n    background-position: center top;\r\n    background-size: cover;\r\n}\r\n\r\n.navTrigger {\r\n    display: none;\r\n}\r\n\r\n.nav {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    -webkit-transition: all 0.4s ease;\r\n    transition: all 0.4s ease;\r\n}*/\r\n\r\n\r\n\r\n/*html, body {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: black;\r\n    color: black;*/\r\n/* The image used */\r\n/*background-image: url(\"img_parallax.jpg\");*/\r\n/* Set a specific height */\r\n/*min-height: 500px;*/\r\n/* Create the parallax scrolling effect */\r\n/*background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}/*\r\n\r\n.glow {\r\n    font-size: 80px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    -webkit-animation: glow 1s ease-in-out infinite alternate;\r\n    -moz-animation: glow 1s ease-in-out infinite alternate;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n    from {\r\n        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f2f2f2, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000, 0 0 70px #ff0000;\r\n    }\r\n\r\n    to {\r\n        text-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000, 0 0 70px #ff0000, 0 0 80px #ff0000;\r\n    }\r\n}\r\n\r\n/*HEADER*/\r\n/**\r\n.fixed-top {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n}\r\n\r\n/*BODY*/\r\n/**\r\n.ep-haslayout {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.ep-main-section {\r\n    padding: 80px 0;\r\n    overflow: hidden;\r\n}\r\n\r\n    .ep-main-section > div {\r\n        position: relative;\r\n    }\r\n\r\n\r\n/*FOOTER*/\r\n\r\n/**\r\n.ep-footer {\r\n    background: #000000;\r\n}\r\n\r\n.ep-footerbar {\r\n    width: 100%;\r\n    float: left;\r\n    background: #000000;\r\n}\r\n\r\n.ep-copyright {\r\n    color: #fff;\r\n    float: left;\r\n    padding: 20px 0;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n}\r\n\r\n.ep-footernav {\r\n    float: right;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    font-weight: 300;\r\n    padding: 20px 0;\r\n    font-family: 'Oswald', Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.tep-footernav ul {\r\n    width: 100%;\r\n    float: left;\r\n    line-height: 20px;\r\n    list-style: none;\r\n}\r\n\r\n.ep-footernav ul li {\r\n    float: left;\r\n    line-height: 20px;\r\n    padding: 0 0 0 20px;\r\n    list-style-type: none;\r\n}\r\n\r\n    .ep-footernav ul li a {\r\n        color: #fff;\r\n        display: block;\r\n        line-height: 20px;\r\n    }\r\n\r\n  **/\r\n", ""]);

// exports


/***/ }),

/***/ 18:
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

/***/ 19:
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

var	fixUrls = __webpack_require__(33);

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

/***/ 33:
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

},[142]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3Mvc2l0ZS5jc3M/MGU0MyIsIndlYnBhY2s6Ly8vLi9jc3Mvc2l0ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLGNBQWMsbUJBQU8sQ0FBQyxHQUFxRDs7QUFFM0UsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLEVBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVU7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUM1Q0EsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7QUFDQSxjQUFjLFFBQVMsOEVBQThFOztBQUVyRztBQUNBLGNBQWMsUUFBUyxVQUFVLHdCQUF3QixvQkFBb0IsS0FBSyw2QkFBNkIsMEJBQTBCLDZCQUE2QixLQUFLLHVCQUF1QixtS0FBbUssbUJBQW1CLCtCQUErQiwrQ0FBK0MseUJBQXlCLHdCQUF3QiwwQkFBMEIsb0NBQW9DLCtCQUErQixvQkFBb0IscUJBQXFCLEtBQUssK0hBQStILHFCQUFxQiwyQkFBMkIsNEJBQTRCLEtBQUssa0JBQWtCLHFCQUFxQixLQUFLLGNBQWMsNkJBQTZCLHFCQUFxQiwyQkFBMkIsS0FBSyxXQUFXLDJCQUEyQix3QkFBd0IsdUJBQXVCLDJCQUEyQixrRUFBa0UsK0RBQStELDBEQUEw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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHBTdHlsZXMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2l0ZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2l0ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NpdGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jc3Mvc2l0ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQ6NDAwLDUwMCw3MDApO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI3Jvb3Qge1xcclxcbiAgICAvKmhlaWdodDogMTAwdmg7Ki9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gY29udGFpbmVyXFxyXFxue1xcclxcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcXFwiaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9lbGljaXQudXMvQXBwK0ltYWdlcy9jaGFsa2JvYXJkLmpwZ1xcXCIpO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLyotLSBJbnNwaXJhdGlvbiB0YWtlbiBmcm9tIGFiZG8gc3RlaWYgLS0+XFxyXFxuLyogLS0+IGh0dHBzOi8vY29kZXBlbi5pby9hYmRvc3RlaWYvcGVuL2JSb3lNYj9lZGl0b3JzPTExMDAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIC8qbWFyZ2luLWxlZnQ6IDBweDsqL1xcclxcbiAgICBwYWRkaW5nLXRvcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaXZhdGUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5wb2RjYXN0IHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZ2xvdyB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAgIC1tb3otYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGdsb3cge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZjJmMmYyLCAwIDAgNDBweCAjZmYwMDAwLCAwIDAgNTBweCAjZmYwMDAwLCAwIDAgNjBweCAjZmYwMDAwLCAwIDAgNzBweCAjZmYwMDAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMjBweCAjZmYwMDAwLCAwIDAgMzBweCAjZmYwMDAwLCAwIDAgNDBweCAjZmYwMDAwLCAwIDAgNTBweCAjZmYwMDAwLCAwIDAgNjBweCAjZmYwMDAwLCAwIDAgNzBweCAjZmYwMDAwLCAwIDAgODBweCAjZmYwMDAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIE5hdmJhciBzZWN0aW9uICovXFxyXFxuXFxyXFxuLnRnLW1haW4tc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9lbGljaXQudXMvQXBwK0ltYWdlcy9jaGFsa2JvYXJkLmpwZycpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1pbWFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcXFwiaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9lbGljaXQudXMvZWxpY2l0TG9nby5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5oZXJvLWltYWdlIGEge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjkzMjNjLCAjNDg1NTYzLCAjMmI1ODc2LCAjNGU0Mzc2KTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDQ1LCA1NCwgNjUsIDAuNzUpO1xcclxcbiAgICB9XFxyXFxuLm5hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDg1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5uYXYgZGl2LmxvZ28ge1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdiBkaXYubG9nbyBhIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hdiBkaXYubG9nbyBhOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiBkaXYubWFpbl9saXN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwgbGkgYSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwRTY3NjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4ubWFpbkxpc3REaXYgYSAuYnRuOmFjdGl2ZSB7XFxyXFxufVxcclxcblxcclxcbi5laGVhZGVyIHtcXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZWRpYSBhIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZXR0aGVzZWdlbnRzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuLyogSG9tZSBzZWN0aW9uICovXFxyXFxuLmJ0biB7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uY29udGFjdHVzIHtcXHJcXG4gXFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAgIC1tb3otYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuLm5hdlRyaWdnZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtbGlua2VkaW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU3NmE4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZmFjZWJvb2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2N2IyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0LjVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMC41cHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1pbnN0YWdyYW0ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0LjVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA3LjVweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMzUlIDkwJSwgI2ZlYzU2NCwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMCAxNDAlLCAjZmVjNTY0LCB0cmFuc3BhcmVudCA1MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMCAtMjUlLCAjNTI1OGNmLCB0cmFuc3BhcmVudCA1MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMjAlIC01MCUsICM1MjU4Y2YsIHRyYW5zcGFyZW50IDUwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCAxMDAlIDAsICM4OTNkYzIsIHRyYW5zcGFyZW50IDUwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCA2MCUgLTIwJSwgIzg5M2RjMiwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDEwMCUgMTAwJSwgI2Q5MzE3YSwgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQoIzY1NTljYSwgI2JjMzE4ZiAzMCUsICNlMzNmNWYgNTAlLCAjZjc3NjM4IDcwJSwgI2ZlYzY2ZCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBvcGFjaXR5OiAwLjI7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcbi5sb2dvaW1hZ2Uge1xcclxcbiAgICBoZWlnaHQ6MTAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG5cXHJcXG59XFxyXFxuLnRnLWNvbW1lbnRmb3JtIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5ob21lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuLypmb290ZXIqL1xcclxcbi5maXhlZC1ib3R0b20ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcblxcclxcblxcclxcbiAgICAvKmhlaWdodDogNzBweDsqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXAtZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVwLWZvb3RlcmJhciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVwLWNvcHlyaWdodCB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLW5hdiB1bHtcXHJcXG5cXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5wcml2YWN5IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGVwLWZvb3Rlcm5hdiB1bCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogTWVkaWEgcXVyZXkgc2VjdGlvbiAqL1xcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Nzg5cHgpIHtcXHJcXG4gICAgLm5hdlRyaWdnZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiBkaXYubG9nbyB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2IGRpdi5tYWluX2xpc3Qge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYgZGl2LnNob3dfbGlzdCB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIGEge1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAubmF2IGRpdi5tZWRpYV9idXR0b24ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuLyogSW5zcGlyYXRpb24gdGFrZW4gZnJvbSBEaWNzb24gaHR0cHM6Ly9jb2RlbXl1aS5jb20vc2ltcGxlLWhhbWJ1cmdlci1tZW51LXgtbWFyay1hbmltYXRpb24vICovXFxyXFxuXFxyXFxuLm5hdlRyaWdnZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiAgICAubmF2VHJpZ2dlciBpIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdlRyaWdnZXIgaTpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBvdXRUIDAuOHMgYmFja3dhcmRzO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogb3V0VCAwLjhzIGJhY2t3YXJkcztcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYXZUcmlnZ2VyIGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBvdXRNIDAuOHMgYmFja3dhcmRzO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogb3V0TSAwLjhzIGJhY2t3YXJkcztcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYXZUcmlnZ2VyIGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogb3V0QnRtIDAuOHMgYmFja3dhcmRzO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogb3V0QnRtIDAuOHMgYmFja3dhcmRzO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAubmF2VHJpZ2dlci5hY3RpdmUgaTpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGluVCAwLjhzIGZvcndhcmRzO1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBpblQgMC44cyBmb3J3YXJkcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2VHJpZ2dlci5hY3RpdmUgaTpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGluTSAwLjhzIGZvcndhcmRzO1xcclxcbiAgICAgICAgYW5pbWF0aW9uOiBpbk0gMC44cyBmb3J3YXJkcztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2VHJpZ2dlci5hY3RpdmUgaTpudGgtY2hpbGQoMykge1xcclxcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGluQnRtIDAuOHMgZm9yd2FyZHM7XFxyXFxuICAgICAgICBhbmltYXRpb246IGluQnRtIDAuOHMgZm9yd2FyZHM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5NIHtcXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGluTSB7XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0TSB7XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBvdXRNIHtcXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBpblQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaW5UIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0VCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBvdXRUIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5CdG0ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBpbkJ0bSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3V0QnRtIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3V0QnRtIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5hZmZpeCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5teUgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5teVAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NzAwcHgpIHtcXHJcXG4gICAgLm15UCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKipcXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5maXhlZC1ib3R0b20ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogYXV0bztcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIC5uYXYgLmFjdGl2ZSwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGEsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYTpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlN2U3ZTcgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSA+ICNyb290IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKi5uYXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgICAubmF2IGRpdi5sb2dvIHtcXHJcXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5uYXYgZGl2LmxvZ28gYSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5uYXYgZGl2LmxvZ28gYTpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBFNjc2O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiBkaXYubWFpbl9saXN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwgbGkgYSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2NXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwRTY3NjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9lbGljaXQudXMvZWxpY2l0TG9nby5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2VHJpZ2dlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXHJcXG59Ki9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKmh0bWwsIGJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogYmxhY2s7Ki9cXHJcXG4vKiBUaGUgaW1hZ2UgdXNlZCAqL1xcclxcbi8qYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJpbWdfcGFyYWxsYXguanBnXFxcIik7Ki9cXHJcXG4vKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cXHJcXG4vKm1pbi1oZWlnaHQ6IDUwMHB4OyovXFxyXFxuLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXFxyXFxuLypiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufS8qXFxyXFxuXFxyXFxuLmdsb3cge1xcclxcbiAgICBmb250LXNpemU6IDgwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgLW1vei1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgICBhbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvdyB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCAzMHB4ICNmMmYyZjIsIDAgMCA0MHB4ICNmZjAwMDAsIDAgMCA1MHB4ICNmZjAwMDAsIDAgMCA2MHB4ICNmZjAwMDAsIDAgMCA3MHB4ICNmZjAwMDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4ICNmZjAwMDAsIDAgMCAzMHB4ICNmZjAwMDAsIDAgMCA0MHB4ICNmZjAwMDAsIDAgMCA1MHB4ICNmZjAwMDAsIDAgMCA2MHB4ICNmZjAwMDAsIDAgMCA3MHB4ICNmZjAwMDAsIDAgMCA4MHB4ICNmZjAwMDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLypIRUFERVIqL1xcclxcbi8qKlxcclxcbi5maXhlZC10b3Age1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDEwMzA7XFxyXFxufVxcclxcblxcclxcbi8qQk9EWSovXFxyXFxuLyoqXFxyXFxuLmVwLWhhc2xheW91dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmVwLW1haW4tc2VjdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDgwcHggMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5lcC1tYWluLXNlY3Rpb24gPiBkaXYge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuLypGT09URVIqL1xcclxcblxcclxcbi8qKlxcclxcbi5lcC1mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXAtZm9vdGVyYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXAtY29weXJpZ2h0IHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5lcC1mb290ZXJuYXYge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udGVwLWZvb3Rlcm5hdiB1bCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5lcC1mb290ZXJuYXYgdWwgbGkge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAwIDIwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5lcC1mb290ZXJuYXYgdWwgbGkgYSB7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICoqL1xcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vY3NzL3NpdGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIl0sInNvdXJjZVJvb3QiOiIifQ==