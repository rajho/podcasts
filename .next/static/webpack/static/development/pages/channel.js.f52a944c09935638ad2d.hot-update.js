webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/LatestPodcastsWithClick.js":
/*!***********************************************!*\
  !*** ./components/LatestPodcastsWithClick.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          audioClips = _this$props.audioClips,
          onClickPodcast = _this$props.onClickPodcast;
      return;
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3134622600"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-3134622600"
      }, "Ultimos podcasts"), audioClips.map(function (podcast) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/".concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(podcast.channel.title), ".").concat(podcast.channel.id, "/").concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(podcast.title), ".").concat(podcast.id),
          key: podcast.id,
          onClick: function onClick(event) {
            return onClickPodcast(event, podcast);
          },
          className: "jsx-3134622600" + " " + 'podcast'
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3134622600"
        }, podcast.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3134622600" + " " + 'meta'
        }, Math.ceil(podcast.duration / 60), " minutes"));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3134622600",
        css: ".podcast.jsx-3134622600{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-3134622600:hover{color:#000;}.podcast.jsx-3134622600 h3.jsx-3134622600{margin:0;}.podcast.jsx-3134622600 .meta.jsx-3134622600{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWpoby93b3Jrc3BhY2UvcG9kY2FzdHMvY29tcG9uZW50cy9MYXRlc3RQb2RjYXN0c1dpdGhDbGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Qm9CLEFBRzJCLEFBUUgsQUFHRixBQUdFLFNBRmIsRUFIQSxBQU1tQixHQWRJLGNBZUwsZ0JBQ2xCLG9CQWZhLFdBQ0UsYUFDMkIsd0NBQ3pCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9yYWpoby93b3Jrc3BhY2UvcG9kY2FzdHMvY29tcG9uZW50cy9MYXRlc3RQb2RjYXN0c1dpdGhDbGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1ZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhdWRpb0NsaXBzLCBvbkNsaWNrUG9kY2FzdCB9ID0gdGhpcy5wcm9wcyAgICBcblxuICAgIHJldHVybiBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5VbHRpbW9zIHBvZGNhc3RzPC9oMj5cbiAgICAgICAge1xuICAgICAgICAgIGF1ZGlvQ2xpcHMubWFwKChwb2RjYXN0KSA9PiAoXG4gICAgICAgICAgICA8YSBocmVmPXtgLyR7c2x1Zyhwb2RjYXN0LmNoYW5uZWwudGl0bGUpfS4ke3BvZGNhc3QuY2hhbm5lbC5pZH0vJHtzbHVnKHBvZGNhc3QudGl0bGUpfS4ke3BvZGNhc3QuaWR9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwb2RjYXN0JyBcbiAgICAgICAgICAgICAga2V5PXtwb2RjYXN0LmlkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsgKGV2ZW50KSA9PiBvbkNsaWNrUG9kY2FzdChldmVudCwgcG9kY2FzdCkgfT5cblxuICAgICAgICAgICAgICA8aDM+eyBwb2RjYXN0LnRpdGxlIH08L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWV0YSc+XG4gICAgICAgICAgICAgICAgeyBNYXRoLmNlaWwocG9kY2FzdC5kdXJhdGlvbiAvIDYwKSB9IG1pbnV0ZXNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSkgXG4gICAgICAgIH1cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnBvZGNhc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9kY2FzdDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvZGNhc3QgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9kY2FzdCAubWV0YSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICB9XG59Il19 */\n/*@ sourceURL=/Users/rajho/workspace/podcasts/components/LatestPodcastsWithClick.js */"
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.f52a944c09935638ad2d.hot-update.js.map