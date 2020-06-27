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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3Mvc2l0ZS5jc3M/MGU0MyIsIndlYnBhY2s6Ly8vLi9jc3Mvc2l0ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLGNBQWMsbUJBQU8sQ0FBQyxHQUFxRDs7QUFFM0UsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLEVBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVU7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUM1Q0EsMkJBQTJCLG1CQUFPLENBQUMsRUFBK0M7QUFDbEY7QUFDQSxjQUFjLFFBQVMsOEVBQThFOztBQUVyRztBQUNBLGNBQWMsUUFBUyxVQUFVLHdCQUF3QixvQkFBb0IsS0FBSyw2QkFBNkIsMEJBQTBCLDZCQUE2QixLQUFLLHVCQUF1QixtS0FBbUssbUJBQW1CLCtCQUErQiwrQ0FBK0MseUJBQXlCLHdCQUF3QiwwQkFBMEIsb0NBQW9DLCtCQUErQixvQkFBb0IscUJBQXFCLEtBQUssK0hBQStILHFCQUFxQiwyQkFBMkIsNEJBQTRCLEtBQUssa0JBQWtCLHFCQUFxQixLQUFLLGNBQWMsNkJBQTZCLHFCQUFxQiwyQkFBMkIsS0FBSyxXQUFXLDJCQUEyQix3QkFBd0IsdUJBQXVCLDJCQUEyQixrRUFBa0UsK0RBQStELDBEQUEwRCxLQUFLLGlDQUFpQyxjQUFjLGdKQUFnSixTQUFTLGdCQUFnQixzSkFBc0osU0FBUyxLQUFLLHNEQUFzRCxrR0FBa0csS0FBSyxxQkFBcUIsd0pBQXdKLG9DQUFvQyxxQ0FBcUMsK0JBQStCLDZCQUE2QiwrQkFBK0IsS0FBSywyQkFBMkIsNEZBQTRGLDREQUE0RCxTQUFTLFVBQVUsb0JBQW9CLHFCQUFxQix3QkFBd0IsMEJBQTBCLDBCQUEwQixlQUFlLGdCQUFnQixxQkFBcUIsS0FBSywyQkFBMkIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsK0JBQStCLFNBQVMsaUNBQWlDLHNDQUFzQyw0QkFBNEIsa0NBQWtDLGFBQWEsMkNBQTJDLGlDQUFpQyxpQkFBaUIsZ0NBQWdDLHlCQUF5Qix5QkFBeUIsU0FBUyx1Q0FBdUMsNEJBQTRCLDZCQUE2Qiw4QkFBOEIsaUNBQWlDLDBCQUEwQiwyQkFBMkIsYUFBYSw4Q0FBOEMsZ0NBQWdDLGlDQUFpQywrQkFBK0Isd0NBQXdDLGlCQUFpQixvREFBb0QsOENBQThDLG9DQUFvQywwQ0FBMEMsMENBQTBDLHFCQUFxQiw4REFBOEQsMkNBQTJDLHlCQUF5QixnQ0FBZ0MsS0FBSyxrQkFBa0IsYUFBYSx5QkFBeUIseUJBQXlCLEtBQUsseUJBQXlCLHlCQUF5QixLQUFLLGdDQUFnQyxvQkFBb0IsS0FBSyxnQkFBZ0IseUJBQXlCLHlCQUF5QixrRUFBa0UsK0RBQStELDBEQUEwRCxLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyxjQUFjLDBDQUEwQyxrQ0FBa0MsS0FBSyxhQUFhLHNCQUFzQix3QkFBd0Isb0JBQW9CLDJCQUEyQiw4QkFBOEIsMkJBQTJCLEtBQUssc0JBQXNCLGtDQUFrQyxxQkFBcUIscUJBQXFCLG9CQUFvQix5QkFBeUIsMEJBQTBCLEtBQUssc0JBQXNCLGtDQUFrQyxxQkFBcUIsMkJBQTJCLDZCQUE2QixxQkFBcUIsb0JBQW9CLEtBQUssdUJBQXVCLHFCQUFxQiwyQkFBMkIsNEJBQTRCLHFCQUFxQixvQkFBb0Isc29CQUFzb0IsS0FBSyxpQkFBaUIsOEJBQThCLEtBQUssZUFBZSxxQkFBcUIscUJBQXFCLG9CQUFvQixLQUFLLGdCQUFnQixxQkFBcUIscUJBQXFCLFNBQVMscUJBQXFCLHFCQUFxQiw2QkFBNkIsYUFBYSxXQUFXLGdDQUFnQywyQkFBMkIsMkJBQTJCLHFCQUFxQix3QkFBd0IsS0FBSyxpQ0FBaUMsd0JBQXdCLG9CQUFvQixrQkFBa0Isb0JBQW9CLCtCQUErQixvQ0FBb0MsS0FBSyxvQkFBb0IsNEJBQTRCLEtBQUssdUJBQXVCLG9CQUFvQixvQkFBb0IsNEJBQTRCLEtBQUssdUJBQXVCLG9CQUFvQixvQkFBb0IsMkJBQTJCLHdCQUF3QiwwQkFBMEIsS0FBSyx1QkFBdUIsa0NBQWtDLGtCQUFrQixtQkFBbUIsS0FBSyxrQkFBa0IsMEJBQTBCLDRCQUE0QixvQkFBb0IsdUJBQXVCLDBCQUEwQixnQ0FBZ0MsbUNBQW1DLHFCQUFxQixLQUFLLDJCQUEyQixvQkFBb0IsMEJBQTBCLHlCQUF5QixLQUFLLCtHQUErRyxvQkFBb0Isc0JBQXNCLFNBQVMsS0FBSyw2Q0FBNkMscUJBQXFCLDJCQUEyQixTQUFTLDJCQUEyQiw4QkFBOEIsU0FBUyxnQ0FBZ0Msd0JBQXdCLHNCQUFzQiw2QkFBNkIsU0FBUyxnQ0FBZ0MseUJBQXlCLDBCQUEwQixTQUFTLG1DQUFtQyxtQ0FBbUMsd0JBQXdCLDBCQUEwQixxQkFBcUIsb0JBQW9CLHNCQUFzQixtQ0FBbUMsNENBQTRDLFNBQVMsMENBQTBDLDRCQUE0QixrQ0FBa0MsYUFBYSxnREFBZ0QsdUNBQXVDLGdDQUFnQyxvQ0FBb0Msa0NBQWtDLGlCQUFpQixtQ0FBbUMsMkJBQTJCLFNBQVMsS0FBSyxvSkFBb0osd0JBQXdCLG9CQUFvQixxQkFBcUIscUJBQXFCLDJCQUEyQixvQkFBb0IsZUFBZSxrQkFBa0IsS0FBSywyQkFBMkIsbUNBQW1DLCtCQUErQix3QkFBd0IsMkJBQTJCLHdCQUF3Qix3QkFBd0IsU0FBUyw0Q0FBNEMsdURBQXVELCtDQUErQyxxREFBcUQsNkNBQTZDLGFBQWEsNENBQTRDLDhCQUE4Qix1REFBdUQsK0NBQStDLHFEQUFxRCw2Q0FBNkMsYUFBYSw0Q0FBNEMseURBQXlELGlEQUFpRCxxREFBcUQsNkNBQTZDLGFBQWEsK0NBQStDLGlEQUFpRCx5Q0FBeUMsU0FBUywrQ0FBK0MsaURBQWlELHlDQUF5QyxTQUFTLCtDQUErQyxtREFBbUQsMkNBQTJDLFNBQVMsZ0NBQWdDLGFBQWEsNENBQTRDLFNBQVMsa0JBQWtCLDZDQUE2QyxTQUFTLEtBQUssd0JBQXdCLGFBQWEsb0NBQW9DLFNBQVMsa0JBQWtCLHFDQUFxQyxTQUFTLEtBQUssaUNBQWlDLGFBQWEsNENBQTRDLFNBQVMsa0JBQWtCLDZDQUE2QyxTQUFTLEtBQUsseUJBQXlCLGFBQWEsb0NBQW9DLFNBQVMsa0JBQWtCLHFDQUFxQyxTQUFTLEtBQUssZ0NBQWdDLFlBQVksNERBQTRELFNBQVMsaUJBQWlCLDREQUE0RCxTQUFTLGtCQUFrQiw4REFBOEQsU0FBUyxLQUFLLHdCQUF3QixZQUFZLG9EQUFvRCxTQUFTLGlCQUFpQixvREFBb0QsU0FBUyxrQkFBa0Isc0RBQXNELFNBQVMsS0FBSyxpQ0FBaUMsWUFBWSw0REFBNEQsU0FBUyxpQkFBaUIsNERBQTRELFNBQVMsa0JBQWtCLDhEQUE4RCxTQUFTLEtBQUsseUJBQXlCLFlBQVksb0RBQW9ELFNBQVMsaUJBQWlCLG9EQUFvRCxTQUFTLGtCQUFrQixzREFBc0QsU0FBUyxLQUFLLGtDQUFrQyxZQUFZLDREQUE0RCxTQUFTLGlCQUFpQiw2REFBNkQsU0FBUyxrQkFBa0IsK0RBQStELFNBQVMsS0FBSywwQkFBMEIsWUFBWSxvREFBb0QsU0FBUyxpQkFBaUIscURBQXFELFNBQVMsa0JBQWtCLHVEQUF1RCxTQUFTLEtBQUssbUNBQW1DLFlBQVksNERBQTRELFNBQVMsaUJBQWlCLDZEQUE2RCxTQUFTLGtCQUFrQiwrREFBK0QsU0FBUyxLQUFLLDJCQUEyQixZQUFZLG9EQUFvRCxTQUFTLGlCQUFpQixxREFBcUQsU0FBUyxrQkFBa0IsdURBQXVELFNBQVMsS0FBSyxnQkFBZ0IsbUJBQW1CLCtCQUErQixLQUFLLG1DQUFtQywyQkFBMkIsd0JBQXdCLEtBQUssY0FBYyw0QkFBNEIsMEJBQTBCLDJCQUEyQix3QkFBd0IsS0FBSywwQ0FBMEMsY0FBYyx3QkFBd0IsU0FBUyxLQUFLLG1IQUFtSCwwQkFBMEIsNEJBQTRCLEtBQUssMkJBQTJCLHdCQUF3QixrQkFBa0IsZ0JBQWdCLGtCQUFrQixvQkFBb0Isa0NBQWtDLDJCQUEyQixLQUFLLDJLQUEySyx1Q0FBdUMsK0JBQStCLEtBQUssc0JBQXNCLHNCQUFzQixrQkFBa0IsS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQix3QkFBd0IsMEJBQTBCLDJCQUEyQixLQUFLLCtCQUErQix3QkFBd0Isd0JBQXdCLHlCQUF5QiwrQkFBK0IsU0FBUyxpQ0FBaUMsc0NBQXNDLDRCQUE0QixrQ0FBa0MsYUFBYSwyQ0FBMkMsbUNBQW1DLGlCQUFpQixnQ0FBZ0MseUJBQXlCLHlCQUF5QixTQUFTLHVDQUF1Qyw0QkFBNEIsNkJBQTZCLDhCQUE4QixpQ0FBaUMsMEJBQTBCLDJCQUEyQixhQUFhLDhDQUE4QyxnQ0FBZ0MsaUNBQWlDLCtCQUErQix3Q0FBd0MsaUJBQWlCLG9EQUFvRCw4Q0FBOEMsb0NBQW9DLDBDQUEwQywwQ0FBMEMscUJBQXFCLDhEQUE4RCwyQ0FBMkMseUJBQXlCLGVBQWUsb0JBQW9CLHNCQUFzQiwyRkFBMkYsd0NBQXdDLCtCQUErQixLQUFLLHFCQUFxQixzQkFBc0IsS0FBSyxjQUFjLDBCQUEwQiw2QkFBNkIsMENBQTBDLGtDQUFrQyxLQUFLLGdDQUFnQyxvQkFBb0IscUJBQXFCLGtCQUFrQixtQkFBbUIsMEJBQTBCLHFCQUFxQiw0RUFBNEUseURBQXlELG1GQUFtRixvQ0FBb0MscUNBQXFDLCtCQUErQixLQUFLLGlCQUFpQix3QkFBd0IsdUJBQXVCLDJCQUEyQixrRUFBa0UsK0RBQStELDBEQUEwRCxLQUFLLGlDQUFpQyxjQUFjLGdKQUFnSixTQUFTLGdCQUFnQixzSkFBc0osU0FBUyxLQUFLLHlDQUF5Qyx3QkFBd0IsZUFBZSxpQkFBaUIsZ0JBQWdCLHNCQUFzQixLQUFLLDBDQUEwQyxvQkFBb0Isb0JBQW9CLEtBQUssMEJBQTBCLHdCQUF3Qix5QkFBeUIsS0FBSyxvQ0FBb0MsK0JBQStCLFNBQVMsaURBQWlELDRCQUE0QixLQUFLLHVCQUF1QixvQkFBb0Isb0JBQW9CLDRCQUE0QixLQUFLLHVCQUF1QixvQkFBb0Isb0JBQW9CLHdCQUF3Qix3QkFBd0IsMEJBQTBCLEtBQUssdUJBQXVCLHFCQUFxQix3QkFBd0IsMEJBQTBCLHlCQUF5Qix3QkFBd0IsNERBQTRELEtBQUssMkJBQTJCLG9CQUFvQixvQkFBb0IsMEJBQTBCLHlCQUF5QixLQUFLLDZCQUE2QixvQkFBb0IsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsS0FBSyxtQ0FBbUMsd0JBQXdCLDJCQUEyQiw4QkFBOEIsU0FBUzs7QUFFLzNqQjs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxFQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHBTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zaXRlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zaXRlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc2l0ZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Nzcy9zaXRlLmNzc1xuLy8gbW9kdWxlIGlkID0gMTQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1aWNrc2FuZDo0MDAsNTAwLDcwMCk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjcm9vdCB7XFxyXFxuICAgIC8qaGVpZ2h0OiAxMDB2aDsqL1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBjb250YWluZXJcXHJcXG57XFxyXFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSwgdXJsKFxcXCJodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2VsaWNpdC51cy9BcHArSW1hZ2VzL2NoYWxrYm9hcmQuanBnXFxcIik7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4vKi0tIEluc3BpcmF0aW9uIHRha2VuIGZyb20gYWJkbyBzdGVpZiAtLT5cXHJcXG4vKiAtLT4gaHR0cHM6Ly9jb2RlcGVuLmlvL2FiZG9zdGVpZi9wZW4vYlJveU1iP2VkaXRvcnM9MTEwMCovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgLyptYXJnaW4tbGVmdDogMHB4OyovXFxyXFxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpdmF0ZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLnBvZGNhc3Qge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5nbG93IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgLW1vei1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgICBhbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvdyB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCAzMHB4ICNmMmYyZjIsIDAgMCA0MHB4ICNmZjAwMDAsIDAgMCA1MHB4ICNmZjAwMDAsIDAgMCA2MHB4ICNmZjAwMDAsIDAgMCA3MHB4ICNmZjAwMDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4ICNmZjAwMDAsIDAgMCAzMHB4ICNmZjAwMDAsIDAgMCA0MHB4ICNmZjAwMDAsIDAgMCA1MHB4ICNmZjAwMDAsIDAgMCA2MHB4ICNmZjAwMDAsIDAgMCA3MHB4ICNmZjAwMDAsIDAgMCA4MHB4ICNmZjAwMDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTmF2YmFyIHNlY3Rpb24gKi9cXHJcXG5cXHJcXG4udGctbWFpbi1zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2VsaWNpdC51cy9BcHArSW1hZ2VzL2NoYWxrYm9hcmQuanBnJyk7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWltYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSwgdXJsKFxcXCJodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2VsaWNpdC51cy9lbGljaXRMb2dvLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIC8qcG9zaXRpb246IHJlbGF0aXZlOyovXFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDUlO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmhlcm8taW1hZ2UgYSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyOTMyM2MsICM0ODU1NjMsICMyYjU4NzYsICM0ZTQzNzYpO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoNDUsIDU0LCA2NSwgMC43NSk7XFxyXFxuICAgIH1cXHJcXG4ubmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogODVweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLm5hdiBkaXYubG9nbyB7XFxyXFxuICAgICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2IGRpdi5sb2dvIGEge1xcclxcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAubmF2IGRpdi5sb2dvIGE6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAubmF2IGRpdi5tYWluX2xpc3Qge1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSBhIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIGE6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBFNjc2O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbi5tYWluTGlzdERpdiBhIC5idG46YWN0aXZlIHtcXHJcXG59XFxyXFxuXFxyXFxuLmVoZWFkZXIge1xcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLW1lZGlhIGEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVldHRoZXNlZ2VudHMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG4vKiBIb21lIHNlY3Rpb24gKi9cXHJcXG4uYnRuIHtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbi5jb250YWN0dXMge1xcclxcbiBcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXHJcXG4gICAgLW1vei1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgICBhbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG4ubmF2VHJpZ2dlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5mYSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5mYS1saW5rZWRpbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTc2YTg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1mYWNlYm9vayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjY3YjI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQuNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwLjVweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWluc3RhZ3JhbSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQuNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDcuNXB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAzNSUgOTAlLCAjZmVjNTY0LCB0cmFuc3BhcmVudCA1MCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAwIDE0MCUsICNmZWM1NjQsIHRyYW5zcGFyZW50IDUwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCAwIC0yNSUsICM1MjU4Y2YsIHRyYW5zcGFyZW50IDUwJSksIHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCAyMCUgLTUwJSwgIzUyNThjZiwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDEwMCUgMCwgIzg5M2RjMiwgdHJhbnNwYXJlbnQgNTAlKSwgcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDYwJSAtMjAlLCAjODkzZGMyLCB0cmFuc3BhcmVudCA1MCUpLCByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgMTAwJSAxMDAlLCAjZDkzMTdhLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCgjNjU1OWNhLCAjYmMzMThmIDMwJSwgI2UzM2Y1ZiA1MCUsICNmNzc2MzggNzAlLCAjZmVjNjZkIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuLmxvZ29pbWFnZSB7XFxyXFxuICAgIGhlaWdodDoxMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcblxcclxcbn1cXHJcXG4udGctY29tbWVudGZvcm0ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmhvbWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG4vKmZvb3RlciovXFxyXFxuLmZpeGVkLWJvdHRvbSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qaGVpZ2h0OiA3MHB4OyovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5lcC1mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXAtZm9vdGVyYmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXAtY29weXJpZ2h0IHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbmF2IHVse1xcclxcblxcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaXZhY3kge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50ZXAtZm9vdGVybmF2IHVsIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBNZWRpYSBxdXJleSBzZWN0aW9uICovXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzg5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3ODlweCkge1xcclxcbiAgICAubmF2VHJpZ2dlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2IGRpdi5sb2dvIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMDtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiBkaXYuc2hvd19saXN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwgbGkgYSB7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXYgZGl2Lm1lZGlhX2J1dHRvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG4vKiBJbnNwaXJhdGlvbiB0YWtlbiBmcm9tIERpY3NvbiBodHRwczovL2NvZGVteXVpLmNvbS9zaW1wbGUtaGFtYnVyZ2VyLW1lbnUteC1tYXJrLWFuaW1hdGlvbi8gKi9cXHJcXG5cXHJcXG4ubmF2VHJpZ2dlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5uYXZUcmlnZ2VyIGkge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2VHJpZ2dlciBpOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG91dFQgMC44cyBiYWNrd2FyZHM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBvdXRUIDAuOHMgYmFja3dhcmRzO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdlRyaWdnZXIgaTpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG91dE0gMC44cyBiYWNrd2FyZHM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBvdXRNIDAuOHMgYmFja3dhcmRzO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdlRyaWdnZXIgaTpudGgtY2hpbGQoMykge1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBvdXRCdG0gMC44cyBiYWNrd2FyZHM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBvdXRCdG0gMC44cyBiYWNrd2FyZHM7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZUcmlnZ2VyLmFjdGl2ZSBpOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogaW5UIDAuOHMgZm9yd2FyZHM7XFxyXFxuICAgICAgICBhbmltYXRpb246IGluVCAwLjhzIGZvcndhcmRzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZUcmlnZ2VyLmFjdGl2ZSBpOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogaW5NIDAuOHMgZm9yd2FyZHM7XFxyXFxuICAgICAgICBhbmltYXRpb246IGluTSAwLjhzIGZvcndhcmRzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZUcmlnZ2VyLmFjdGl2ZSBpOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogaW5CdG0gMC44cyBmb3J3YXJkcztcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogaW5CdG0gMC44cyBmb3J3YXJkcztcXHJcXG4gICAgfVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBpbk0ge1xcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaW5NIHtcXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBvdXRNIHtcXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG91dE0ge1xcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGluVCB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBpblQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBvdXRUIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOXB4KSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG91dFQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBpbkJ0bSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGluQnRtIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cHgpIHJvdGF0ZSgxMzVkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBvdXRCdG0ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBvdXRCdG0ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFmZml4IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm15SDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm15UCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo3MDBweCkge1xcclxcbiAgICAubXlQIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qKlxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZpeGVkLWJvdHRvbSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLm5hdiAuYWN0aXZlLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiAuYWN0aXZlID4gYSwgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNyAhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gI3Jvb3Qge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qLm5hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5uYXYgZGl2LmxvZ28ge1xcclxcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLm5hdiBkaXYubG9nbyBhIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hdiBkaXYubG9nbyBhOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMEU2NzY7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAubmF2IGRpdi5tYWluX2xpc3Qge1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubmF2IGRpdi5tYWluX2xpc3QgdWwge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5uYXYgZGl2Lm1haW5fbGlzdCB1bCBsaSBhIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgLm5hdiBkaXYubWFpbl9saXN0IHVsIGxpIGE6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBFNjc2O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MzLXVzLXdlc3QtMS5hbWF6b25hd3MuY29tL2VsaWNpdC51cy9lbGljaXRMb2dvLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZUcmlnZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcclxcbn0qL1xcclxcblxcclxcblxcclxcblxcclxcbi8qaHRtbCwgYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiBibGFjazsqL1xcclxcbi8qIFRoZSBpbWFnZSB1c2VkICovXFxyXFxuLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltZ19wYXJhbGxheC5qcGdcXFwiKTsqL1xcclxcbi8qIFNldCBhIHNwZWNpZmljIGhlaWdodCAqL1xcclxcbi8qbWluLWhlaWdodDogNTAwcHg7Ki9cXHJcXG4vKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cXHJcXG4vKmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59LypcXHJcXG5cXHJcXG4uZ2xvdyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogODBweDtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcclxcbiAgICAtbW96LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxuICAgIGFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBnbG93IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmZiwgMCAwIDIwcHggI2ZmZiwgMCAwIDMwcHggI2YyZjJmMiwgMCAwIDQwcHggI2ZmMDAwMCwgMCAwIDUwcHggI2ZmMDAwMCwgMCAwIDYwcHggI2ZmMDAwMCwgMCAwIDcwcHggI2ZmMDAwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggI2ZmMDAwMCwgMCAwIDMwcHggI2ZmMDAwMCwgMCAwIDQwcHggI2ZmMDAwMCwgMCAwIDUwcHggI2ZmMDAwMCwgMCAwIDYwcHggI2ZmMDAwMCwgMCAwIDcwcHggI2ZmMDAwMCwgMCAwIDgwcHggI2ZmMDAwMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKkhFQURFUiovXFxyXFxuLyoqXFxyXFxuLmZpeGVkLXRvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTAzMDtcXHJcXG59XFxyXFxuXFxyXFxuLypCT0RZKi9cXHJcXG4vKipcXHJcXG4uZXAtaGFzbGF5b3V0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZXAtbWFpbi1zZWN0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogODBweCAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmVwLW1haW4tc2VjdGlvbiA+IGRpdiB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4vKkZPT1RFUiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuLmVwLWZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5lcC1mb290ZXJiYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5lcC1jb3B5cmlnaHQge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVwLWZvb3Rlcm5hdiB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50ZXAtZm9vdGVybmF2IHVsIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVwLWZvb3Rlcm5hdiB1bCBsaSB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmVwLWZvb3Rlcm5hdiB1bCBsaSBhIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgKiovXFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9jc3Mvc2l0ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMiXSwic291cmNlUm9vdCI6IiJ9