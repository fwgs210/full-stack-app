module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/reset-password.js":
/*!*********************************!*\
  !*** ./pages/reset-password.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_views_containers_ResetPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/views/containers/ResetPass */ "./src/views/containers/ResetPass.js");
var _jsxFileName = "C:\\Users\\TSu\\Desktop\\github\\full-stack-app\\pages\\reset-password.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_views_containers_ResetPass__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })));
});

/***/ }),

/***/ "./src/controllers/Actions.js":
/*!************************************!*\
  !*** ./src/controllers/Actions.js ***!
  \************************************/
/*! exports provided: finishLoading, startLoading, setError, clearError, login, clearInput, updatedToken, removeToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishLoading", function() { return finishLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLoading", function() { return startLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setError", function() { return setError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearError", function() { return clearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInput", function() { return clearInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatedToken", function() { return updatedToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeToken", function() { return removeToken; });
var finishLoading = function finishLoading() {
  return {
    type: 'SET_LOADED_TRUE'
  };
};
var startLoading = function startLoading() {
  return {
    type: 'SET_LOADED_FALSE'
  };
};
var setError = function setError(errorMessage) {
  return {
    type: 'SET_ERROR',
    errorMessage: errorMessage
  };
};
var clearError = function clearError() {
  return {
    type: 'CLEAR_ERROR'
  };
};
var login = function login(userData) {
  return {
    type: 'USER_LOGIN',
    userData: userData
  };
};
var clearInput = function clearInput() {
  return {
    type: 'CLEAR_USER_INPUT'
  };
};
var updatedToken = function updatedToken(token) {
  window.sessionStorage.setItem('token', token);
  return {
    type: 'UPDATE_TOKEN',
    token: token
  };
};
var removeToken = function removeToken() {
  window.sessionStorage.setItem('token', '');
  return {
    type: 'REMOVE_TOKEN'
  };
};

/***/ }),

/***/ "./src/utils/Input.js":
/*!****************************!*\
  !*** ./src/utils/Input.js ***!
  \****************************/
/*! exports provided: InputGroup, InputLabel, InputField, InputTextarea, InputButton, LineButton, WhiteLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return InputGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputLabel", function() { return InputLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextarea", function() { return InputTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputButton", function() { return InputButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineButton", function() { return LineButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteLink", function() { return WhiteLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    background: none;\n    border: none;\n    color: #fff;\n    font-size: inherit;\n    font-weight: 100;\n    line-height: inherit;\n    cursor: pointer;\n    margin: 20px 10px 5px;\n    text-align: center;\n    display: inline;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    background: none;\n    border: none;\n    color: #999;\n    text-decoration: underline;\n    font-size: inherit;\n    font-weight: 500;\n    line-height: inherit;\n    text-transform: uppercase;\n    cursor: pointer;\n    margin: 20px 10px 5px;\n    text-align: center;\n    display: inline-block;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    outline: none;\n    background: #4285F4;\n    width: 100%;\n    border: 0;\n    border-radius: 4px;\n    padding: 12px 20px;\n    color: #FFFFFF;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: 500;\n    line-height: inherit;\n    text-transform: uppercase;\n    cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    outline: none;\n    display: block;\n    background: rgba(0, 0, 0, 0.1);\n    border: 0;\n    border-radius: 4px;\n    box-sizing: border-box;\n    padding: 12px 20px;\n    color: rgba(0, 0, 0, 0.6);\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: 500;\n    line-height: inherit;\n    transition: 0.3s ease;\n    height: 6rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width:100%;\n  outline: none;\n  display: block;\n  background: rgba(0, 0, 0, 0.1);\n  border: 0;\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 12px 20px;\n  color: rgba(0, 0, 0, 0.6);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n  line-height: inherit;\n  transition: 0.3s ease;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width:100%;\n  display: block;\n  margin: 0 0 10px;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  text-transform: uppercase;\n  letter-spacing: .2em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 0 20px;\n  align-items: center;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label(_templateObject());
var InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label(_templateObject2());
var InputField = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_templateObject3());
var InputTextarea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea(_templateObject4());
var InputButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject5());
var LineButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject6());
var WhiteLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.attrs({
  type: 'button'
})(_templateObject7());

/***/ }),

/***/ "./src/utils/globalFunc.js":
/*!*********************************!*\
  !*** ./src/utils/globalFunc.js ***!
  \*********************************/
/*! exports provided: stripSpaces, confirmPopUp, validatePassword, validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSpaces", function() { return stripSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPopUp", function() { return confirmPopUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
var stripSpaces = function stripSpaces(string) {
  return string.trim().split(' ').join('');
};
var confirmPopUp = function confirmPopUp(message) {
  return window.confirm(message);
};
var validatePassword = function validatePassword(password) {
  var upper = /[A-Z]/;
  var lower = /[a-z]/;
  var numbers = /[0-9]/;
  var special = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var space = /\s/g;
  var valid = !space.test(password) && upper.test(password) && lower.test(password) && numbers.test(password) && special.test(password) && password.length > 7 ? true : false;
  return valid;
};
var validateEmail = function validateEmail(email) {
  var validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validate.test(email);
};

/***/ }),

/***/ "./src/views/containers/ResetPass.js":
/*!*******************************************!*\
  !*** ./src/views/containers/ResetPass.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Input */ "./src/utils/Input.js");
/* harmony import */ var _utils_globalFunc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/globalFunc */ "./src/utils/globalFunc.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _controllers_Actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../controllers/Actions */ "./src/controllers/Actions.js");
var _jsxFileName = "C:\\Users\\TSu\\Desktop\\github\\full-stack-app\\src\\views\\containers\\ResetPass.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n    width: 100%;\n    padding: 1rem;\n    box-shadow: 0 0 8px 2px rgba(65,64,66,.1);\n    margin-bottom: 1.5rem;\n    background-color: #fff;\n    box-sizing:border-box;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #D31C1D;\n  text-align: center;\n  font-size: .875rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form(_templateObject2());

var ResetPass =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResetPass, _React$Component);

  function ResetPass() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResetPass);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResetPass)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      newPass: '',
      reNewPass: '',
      userError: false,
      errorMessage: '',
      token: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearInput", function () {
      return _this.setState({
        newPass: '',
        reNewPass: '',
        userError: false,
        errorMessage: '',
        token: ''
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (nameToUpdate, value) {
      _this.setState(_defineProperty({}, nameToUpdate, value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changePassword", function (e) {
      e.preventDefault();

      if (_this.state.newPass !== _this.state.reNewPass) {
        _this.setState({
          userError: true,
          errorMessage: "You passwords don't match"
        });

        return null;
      }

      if (!Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_5__["validatePassword"])(_this.state.newPass)) {
        _this.setState({
          userError: true,
          errorMessage: "Please make sure your password has uppercase, lowercase letter, number, special character and no space."
        });

        return null;
      }

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/user/change-password', {
        newPassword: Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_5__["stripSpaces"])(_this.state.newPass)
      }, {
        headers: {
          'Authorization': 'bearer ' + _this.state.token
        }
      }).then(function (res) {
        if (res.status === 200) {
          _this.clearInput();

          _this.props.dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_7__["updatedToken"])(res.data.token));

          window.alert(res.data.message + ' And now you will be redirected.');
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
        } else {
          _this.setState({
            userError: true,
            errorMessage: res.data.message
          });
        }
      }).catch(function () {
        return _this.setState({
          userError: true,
          errorMessage: 'Either your token expired or you are unauthorized.'
        });
      });
    });

    return _this;
  }

  _createClass(ResetPass, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.query.token) {
        this.handleChange('token', this.props.query.token);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContainer, {
        onSubmit: this.changePassword,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "new password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
        value: this.state.newPass,
        onChange: function onChange(e) {
          return _this2.handleChange('newPass', e.target.value);
        },
        type: "password",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "re-type new password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
        value: this.state.reNewPass,
        onChange: function onChange(e) {
          return _this2.handleChange('reNewPass', e.target.value);
        },
        type: "password",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_4__["InputButton"], {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Update")), this.state.userError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorMessage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, this.state.errorMessage) : '');
    }
  }]);

  return ResetPass;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state.user;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(ResetPass));

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** multi ./pages/reset-password.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/reset-password.js */"./pages/reset-password.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=reset-password.js.map