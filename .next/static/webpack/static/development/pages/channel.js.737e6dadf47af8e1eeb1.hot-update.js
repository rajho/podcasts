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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3605175331"
      }, audioClips.map(function (podcast) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/".concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(podcast.channel.title), ".").concat(podcast.channel.id, "/").concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(podcast.title), ".").concat(podcast.id),
          key: podcast.id,
          onClick: function onClick(event) {
            return onClickPodcast(event, podcast);
          },
          className: "jsx-3605175331" + " " + 'podcast'
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3605175331"
        }, podcast.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3605175331" + " " + 'meta'
        }, Math.ceil(podcast.duration / 60), " minutes"));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3605175331",
        css: ".podcast.jsx-3605175331{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-3605175331:hover{color:#000;}.podcast.jsx-3605175331 h3.jsx-3605175331{margin:0;}.podcast.jsx-3605175331 .meta.jsx-3605175331{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J0b3JyZWpvbi93b3Jrc3BhY2UvcG9kY2FzdHMvY29tcG9uZW50cy9MYXRlc3RQb2RjYXN0c1dpdGhDbGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBR3lCLEFBUUgsQUFHRixBQUdFLFNBRmIsRUFIQSxBQU1tQixHQWRJLGNBZUwsZ0JBQ2xCLG9CQWZhLFdBQ0UsYUFDMkIsd0NBQ3pCLGVBQ2pCIiwiZmlsZSI6Ii9ob21lL3J0b3JyZWpvbi93b3Jrc3BhY2UvcG9kY2FzdHMvY29tcG9uZW50cy9MYXRlc3RQb2RjYXN0c1dpdGhDbGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbHVnIGZyb20gJy4uL2hlbHBlcnMvc2x1ZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhdWRpb0NsaXBzLCBvbkNsaWNrUG9kY2FzdCB9ID0gdGhpcy5wcm9wcyAgICBcblxuICAgIHJldHVybiA8ZGl2PlxuICAgICAgeyBhdWRpb0NsaXBzLm1hcCgocG9kY2FzdCkgPT4gKFxuICAgICAgICA8YSBocmVmPXtgLyR7c2x1Zyhwb2RjYXN0LmNoYW5uZWwudGl0bGUpfS4ke3BvZGNhc3QuY2hhbm5lbC5pZH0vJHtzbHVnKHBvZGNhc3QudGl0bGUpfS4ke3BvZGNhc3QuaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9J3BvZGNhc3QnIFxuICAgICAgICAgIGtleT17cG9kY2FzdC5pZH1cbiAgICAgICAgICBvbkNsaWNrPXsgKGV2ZW50KSA9PiBvbkNsaWNrUG9kY2FzdChldmVudCwgcG9kY2FzdCkgfT5cblxuICAgICAgICAgIDxoMz57IHBvZGNhc3QudGl0bGUgfTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21ldGEnPlxuICAgICAgICAgICAgeyBNYXRoLmNlaWwocG9kY2FzdC5kdXJhdGlvbiAvIDYwKSB9IG1pbnV0ZXNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgKSkgfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb2RjYXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucG9kY2FzdDpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnBvZGNhc3QgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAucG9kY2FzdCAubWV0YSB7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICB9XG59Il19 */\n/*@ sourceURL=/home/rtorrejon/workspace/podcasts/components/LatestPodcastsWithClick.js */"
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.737e6dadf47af8e1eeb1.hot-update.js.map