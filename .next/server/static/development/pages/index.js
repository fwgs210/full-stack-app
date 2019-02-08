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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_views_containers_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/views/containers/Home */ "./src/views/containers/Home.js");
var _jsxFileName = "/Users/User/full-stack-app/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_views_containers_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
});

/***/ }),

/***/ "./src/controllers/Actions.js":
/*!************************************!*\
  !*** ./src/controllers/Actions.js ***!
  \************************************/
/*! exports provided: finishLoading, startLoading, setError, clearError, login, clearInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishLoading", function() { return finishLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLoading", function() { return startLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setError", function() { return setError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearError", function() { return clearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInput", function() { return clearInput; });
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

/***/ "./src/views/components/Comment/actions.js":
/*!*************************************************!*\
  !*** ./src/views/components/Comment/actions.js ***!
  \*************************************************/
/*! exports provided: editingComment, updateComment, deleteComment, typeComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editingComment", function() { return editingComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateComment", function() { return updateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeComment", function() { return typeComment; });
var editingComment = function editingComment(id, description) {
  return {
    type: 'EDITING_COMMENT',
    id: id,
    description: description
  };
};
var updateComment = function updateComment() {
  return {
    type: 'UPDATE_COMMENT'
  };
};
var deleteComment = function deleteComment(id) {
  return {
    type: 'DELETE_COMMENT',
    id: id
  };
};
var typeComment = function typeComment(editingComment) {
  return {
    type: 'INPUT_EDITING_COMMENT',
    editingComment: editingComment.target.value
  };
};

/***/ }),

/***/ "./src/views/components/Comment/index.js":
/*!***********************************************!*\
  !*** ./src/views/components/Comment/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/Input */ "./src/utils/Input.js");
/* harmony import */ var _utils_globalFunc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/globalFunc */ "./src/utils/globalFunc.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions */ "./src/views/components/Comment/actions.js");
var _jsxFileName = "/Users/User/full-stack-app/src/views/components/Comment/index.js";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: #4285F4;\n  padding: .375rem .75rem;\n  border-radius: 100px;\n  border: 1px solid;\n  margin-right: 1rem;\n  text-decoration: none;\n  font-size: 0.875rem;\n\n  &:hover {\n    color:#fff;\n    background-color: #4285F4;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 1rem;\n  box-shadow: 0 0 8px 2px rgba(65,64,66,.1);\n  margin-bottom: 1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display:flex;\n  align-items:center;\n  text-align: left;\n  width: 50%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display:flex;\n  align-items:center;\n  justify-content: flex-end;\n  text-align: right;\n  width: 50%;\n  font-size: .875rem;\n  color: rgba(0,0,0,0.6);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.25rem;\n    width: 100%;\n    margin-bottom: 1rem;\n    background: #f8f8f8;\n    padding: 15px;\n    border-radius: .5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  border-bottom: 1px solid #eee;\n  padding: 1rem 0;\n  display:flex;\n  flex-wrap:wrap;\n  margin-top: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var CommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.summary(_templateObject());
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var AuthorContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.aside(_templateObject3());
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.aside(_templateObject4());
var UpdateContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5());
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span(_templateObject6());

var deleteThisComment = function deleteThisComment(id, deleteComment) {
  if (Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_7__["confirmPopUp"])("Want to delete?")) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/user-comments/".concat(id));
    deleteComment(id);
  }
};

var updateThisComment = function updateThisComment(editingCommentId, editingComment, updateComment) {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/user-comments/edit', {
    id: editingCommentId,
    description: editingComment
  }).then(updateComment);
};

var EditComment = function EditComment(_ref) {
  var typeComment = _ref.typeComment,
      editingComment = _ref.editingComment,
      editingCommentId = _ref.editingCommentId,
      updateComment = _ref.updateComment;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UpdateContentContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_6__["InputTextarea"], {
    onChange: function onChange(e) {
      return typeComment(e);
    },
    value: editingComment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_6__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_6__["InputButton"], {
    type: "button",
    onClick: function onClick() {
      return updateThisComment(editingCommentId, editingComment, updateComment);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Update")));
}; // EditComment.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   editingComment: PropTypes.string.isRequired,
//   updateTodo: PropTypes.func.isRequired
// }


var Comment = function Comment(props) {
  var deleteComment = props.deleteComment,
      updateComment = props.updateComment,
      description = props.description,
      id = props.id,
      userPosted = props.userPosted,
      profileImg = props.profileImg,
      editing = props.editing,
      editingComment = props.editingComment,
      editingCommentId = props.editingCommentId,
      loggedIn = props.loggedIn,
      userRole = props.userRole,
      typeComment = props.typeComment,
      editThisComment = props.editThisComment;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommentContainer, {
    key: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, editing && editingCommentId === id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditComment, {
    updateComment: updateComment,
    typeComment: typeComment,
    editingComment: editingComment,
    editingCommentId: editingCommentId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, (loggedIn || userRole === 'administrator') && !editing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    onClick: function onClick() {
      return deleteThisComment(id, deleteComment);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    prefix: "far",
    icon: "trash-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), " delete"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    onClick: function onClick() {
      return editThisComment(id, description);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    prefix: "fas",
    icon: "edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), " edit")) : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthorContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, profileImg && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "32",
    style: {
      'borderRadius': '100%'
    },
    src: profileImg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), "\xA0\xA0By ", userPosted));
};

Comment.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  userPosted: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    editing: state.user.editing,
    editingComment: state.user.editingComment,
    editingCommentId: state.user.editingCommentId,
    loggedIn: state.user.loggedIn,
    userRole: state.user.userRole
  };
}; //this method is used to pass state down functions


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    //this method is used to pass function down functions
    editThisComment: function editThisComment(id, description) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["editingComment"])(id, description));
    },
    typeComment: function typeComment(editingComment) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["typeComment"])(editingComment));
    },
    updateComment: function updateComment() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["updateComment"])());
    },
    deleteComment: function deleteComment(id) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["deleteComment"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Comment));

/***/ }),

/***/ "./src/views/components/Loader/index.js":
/*!**********************************************!*\
  !*** ./src/views/components/Loader/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/User/full-stack-app/src/views/components/Loader/index.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: #fff;\n    display: flex;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var styles = {
  root: {
    flexGrow: 1
  }
};
var LoaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var LinearIndeterminate = function LinearIndeterminate(props) {
  var classes = props.classes,
      loaded = props.loaded;

  if (!loaded) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoaderContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  }

  return null;
};

LinearIndeterminate.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(LinearIndeterminate));

/***/ }),

/***/ "./src/views/components/ShowComment/actions.js":
/*!*****************************************************!*\
  !*** ./src/views/components/ShowComment/actions.js ***!
  \*****************************************************/
/*! exports provided: loadComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComments", function() { return loadComments; });
var loadComments = function loadComments(allComments) {
  return {
    type: 'LOAD_COMMENTS',
    allComments: allComments
  };
};

/***/ }),

/***/ "./src/views/components/ShowComment/index.js":
/*!***************************************************!*\
  !*** ./src/views/components/ShowComment/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Comment */ "./src/views/components/Comment/index.js");
/* harmony import */ var _utils_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/Input */ "./src/utils/Input.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./src/views/components/ShowComment/actions.js");
/* harmony import */ var _controllers_Actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../controllers/Actions */ "./src/controllers/Actions.js");

var _jsxFileName = "/Users/User/full-stack-app/src/views/components/ShowComment/index.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ShowComments =
/*#__PURE__*/
function (_Component) {
  _inherits(ShowComments, _Component);

  function ShowComments(props) {
    var _this;

    _classCallCheck(this, ShowComments);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShowComments).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      displayComments: 5
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadAllComments", function () {
      _this.loadingStart();

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/all-comments').then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(res.data.payload && res.status === 200)) {
                    _context.next = 7;
                    break;
                  }

                  _this.allComments = res.data.payload;
                  _context.next = 4;
                  return _this.loadComments(res.data.payload);

                case 4:
                  _this.loadingEnd();

                  _context.next = 9;
                  break;

                case 7:
                  _this.setError('Server Error');

                  _this.loadingEnd();

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadUserComments", function () {
      _this.loadingStart();

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/user-comments', {}, {
        headers: {
          'Authorization': 'bearer ' + _this.token
        }
      }).then(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(res.data.payload && res.status === 200)) {
                    _context2.next = 7;
                    break;
                  }

                  _this.allComments = res.data.payload;
                  _context2.next = 4;
                  return _this.loadComments(res.data.payload);

                case 4:
                  _this.loadingEnd();

                  _context2.next = 9;
                  break;

                case 7:
                  _this.setError('Server Error');

                  _this.loadingEnd();

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    });

    _this.allComments = props.allComments;
    _this.userRole = props.userRole;
    _this.loadingStart = props.loadingStart;
    _this.loadingEnd = props.loadingEnd;
    _this.loadComments = props.loadComments;
    _this.loggedInAs = props.loggedInAs;
    _this.loggedIn = props.loggedIn;
    _this.token = props.token;
    _this.clearError = props.clearError;
    _this.setError = props.setError;
    _this.loaded = props.loaded;
    return _this;
  }

  _createClass(ShowComments, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.sessionStorage['token']) {
        this.loadAllComments();
      }

      if (this.loggedIn) {
        this.loadUserComments();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.allComments = nextProps.allComments;
      this.loggedIn = nextProps.loggedIn;
      this.userRole = nextProps.userRole;
      this.loggedInAs = nextProps.loggedInAs;
      this.token = nextProps.token;
      this.loaded = nextProps.loaded;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.allComments.slice(0, this.state.displayComments).map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_3__["default"], {
          description: comment.description,
          profileImg: comment.userId.profileImg ? comment.userId.profileImg : '',
          id: comment._id,
          key: comment._id,
          userPosted: comment.userId.username,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        });
      }), this.state.displayComments >= this.allComments.length ? '' : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_4__["LineButton"], {
        style: {
          "display": "block",
          "margin": "20px auto 5px"
        },
        onClick: function onClick() {
          _this2.setState({
            displayComments: _this2.state.displayComments + 5
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Load More"));
    }
  }]);

  return ShowComments;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state.user, state.loading);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    //this method is used to pass function down functions
    loadComments: function loadComments(allComments) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_6__["loadComments"])(allComments));
    },
    loadingStart: function loadingStart() {
      return dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_7__["startLoading"])());
    },
    loadingEnd: function loadingEnd() {
      return dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_7__["finishLoading"])());
    },
    setError: function setError(errorMessage) {
      return dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_7__["setError"])(errorMessage));
    },
    clearError: function clearError() {
      return dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_7__["clearError"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(ShowComments));

/***/ }),

/***/ "./src/views/components/UserForm/actions.js":
/*!**************************************************!*\
  !*** ./src/views/components/UserForm/actions.js ***!
  \**************************************************/
/*! exports provided: login, logout, typeUsername, typePassword, typeConfirmPassword, typeEmail, chooseProfile, setRegistering, setForgetPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeUsername", function() { return typeUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typePassword", function() { return typePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeConfirmPassword", function() { return typeConfirmPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeEmail", function() { return typeEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseProfile", function() { return chooseProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRegistering", function() { return setRegistering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setForgetPass", function() { return setForgetPass; });
var login = function login(userData) {
  return {
    type: 'USER_LOGIN',
    userData: userData
  };
};
var logout = function logout() {
  return {
    type: 'USER_LOGOUT'
  };
};
var typeUsername = function typeUsername(username) {
  return {
    type: 'INPUT_USERNAME',
    username: username.target.value.toLowerCase()
  };
};
var typePassword = function typePassword(password) {
  return {
    type: 'INPUT_PASSWORD',
    password: password.target.value
  };
};
var typeConfirmPassword = function typeConfirmPassword(rePassword) {
  return {
    type: 'INPUT_CONFIRM_PASSWORD',
    rePassword: rePassword.target.value
  };
};
var typeEmail = function typeEmail(email) {
  return {
    type: 'INPUT_EMAIL',
    email: email.target.value
  };
};
var chooseProfile = function chooseProfile(profileImg) {
  return {
    type: 'INPUT_PROFILE_IMAGE',
    profileImg: profileImg
  };
};
var setRegistering = function setRegistering(bool) {
  return {
    type: 'SET_REGISTERING',
    registering: bool
  };
};
var setForgetPass = function setForgetPass(bool) {
  return {
    type: 'SET_FORGETPASS',
    forgetPass: bool
  };
};

/***/ }),

/***/ "./src/views/components/UserForm/index.js":
/*!************************************************!*\
  !*** ./src/views/components/UserForm/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loader */ "./src/views/components/Loader/index.js");
/* harmony import */ var _utils_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/Input */ "./src/utils/Input.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions */ "./src/views/components/UserForm/actions.js");
/* harmony import */ var _ShowComment_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ShowComment/actions */ "./src/views/components/ShowComment/actions.js");
/* harmony import */ var _controllers_Actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../controllers/Actions */ "./src/controllers/Actions.js");
/* harmony import */ var _utils_globalFunc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils/globalFunc */ "./src/utils/globalFunc.js");

var _jsxFileName = "/Users/User/full-stack-app/src/views/components/UserForm/index.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    label > span {\n        font-weight: 500;\n        line-height: 1;\n        text-transform: uppercase;\n        letter-spacing: .2em;\n        color: rgba(0,0,0,0.6);\n        font-size: 12px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #D31C1D;\n  text-align: center;\n  font-size: .875rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap:wrap;\n  align-items: center;\n\n  [type=\"radio\"] {\n      margin-top: .5rem;\n  }\n\n  img {\n      width: 48px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 450px;\n  margin: 40px auto 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }















var UserLogin = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var RadioOption = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span(_templateObject2());
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var StyledFormGroup = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5___default.a)(_templateObject4());

var UserForm =
/*#__PURE__*/
function (_Component) {
  _inherits(UserForm, _Component);

  function UserForm(props) {
    var _this;

    _classCallCheck(this, UserForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserForm).call(this, props)); //function

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      customProfile: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sessionLogin", function () {
      _this.loadingStart();

      var token = window.sessionStorage['token'];
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login/sso', {}, {
        headers: {
          'Authorization': 'bearer ' + token
        }
      }).then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
          var _res$data$user, _id, profileImg, role, username;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(res.status === 200)) {
                    _context.next = 18;
                    break;
                  }

                  _res$data$user = res.data.user, _id = _res$data$user._id, profileImg = _res$data$user.profileImg, role = _res$data$user.role, username = _res$data$user.username;
                  _context.next = 4;
                  return _this.login({
                    username: username,
                    loggedInAs: _id,
                    token: token,
                    profileImg: profileImg,
                    userRole: role
                  });

                case 4:
                  _context.next = 6;
                  return _this.loadAllComments();

                case 6:
                  _context.next = 8;
                  return _this.clearInput();

                case 8:
                  _context.next = 10;
                  return role;

                case 10:
                  _context.t0 = _context.sent;

                  if (!(_context.t0 === 'administrator')) {
                    _context.next = 15;
                    break;
                  }

                  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/admin', "/admin/".concat(_id));
                  _context.next = 16;
                  break;

                case 15:
                  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/user", "/user/".concat(_id));

                case 16:
                  _context.next = 20;
                  break;

                case 18:
                  _this.setError(res.data.message);

                  _this.loadingEnd();

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "userLogin", function (e) {
      e.preventDefault();

      _this.loadingStart();

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/login', {
        username: Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_14__["stripSpaces"])(_this.username),
        password: Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_14__["stripSpaces"])(_this.password)
      }).then(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
          var _res$data$user2, _id, profileImg, role, username;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(res.status === 200)) {
                    _context2.next = 11;
                    break;
                  }

                  _res$data$user2 = res.data.user, _id = _res$data$user2._id, profileImg = _res$data$user2.profileImg, role = _res$data$user2.role, username = _res$data$user2.username;
                  window.sessionStorage.setItem('token', res.data.token);
                  _context2.next = 5;
                  return _this.login({
                    username: username,
                    loggedInAs: _id,
                    token: res.data.token,
                    profileImg: profileImg,
                    userRole: role
                  });

                case 5:
                  _this.loadAllComments();

                  _this.clearInput();

                  _this.clearError();

                  role === 'administrator' ? next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/admin', "/admin/".concat(_id)) : next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/user", "/user/".concat(_id));
                  _context2.next = 13;
                  break;

                case 11:
                  _this.setError(res.data.message);

                  _this.loadingEnd();

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createNewUser", function (e) {
      e.preventDefault();

      if (_this.password !== _this.rePassword) {
        _this.setError("You passwords don't match");

        return null;
      }

      if (!Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_14__["validatePassword"])(_this.password)) {
        _this.setError("Please make sure your password has uppercase, lowercase letter, number, special character and no space.");

        return null;
      }

      if (!Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_14__["validateEmail"])(_this.email)) {
        _this.setError("this email address ".concat(_this.email, " is not valid."));

        return null;
      }

      _this.loadingStart(); // upload profile image


      if (_this.state.customProfile) {
        var data = new FormData();
        data.append('file', _this.profileImg[0]);
        data.append('upload_preset', 'user_profile');
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('https://api.cloudinary.com/v1_1/fwgs210/image/upload', data).then(function (res) {
          if (res.status === 200) {
            _this.chooseProfile(res.data.secure_url);

            _this.registerUser();
          } else {
            _this.setError('Fail to upload your image.');

            _this.loadingEnd();

            return null;
          }
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        _this.registerUser();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerUser", function () {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/newuser', {
        username: Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_14__["stripSpaces"])(_this.username),
        email: Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_14__["stripSpaces"])(_this.email),
        password: Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_14__["stripSpaces"])(_this.password),
        profileImg: _this.profileImg
      }).then(
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(res) {
          var _res$data$user3, _id, role, profileImg;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(res.status === 200)) {
                    _context3.next = 16;
                    break;
                  }

                  _res$data$user3 = res.data.user, _id = _res$data$user3._id, role = _res$data$user3.role, profileImg = _res$data$user3.profileImg;
                  _context3.next = 4;
                  return _this.login({
                    loggedInAs: _id,
                    token: res.data.token,
                    profileImg: profileImg,
                    userRole: role
                  });

                case 4:
                  _context3.next = 6;
                  return _this.loadAllComments();

                case 6:
                  _context3.next = 8;
                  return window.sessionStorage.setItem('token', res.data.token);

                case 8:
                  _context3.next = 10;
                  return _this.clearInput();

                case 10:
                  _context3.next = 12;
                  return _this.clearError();

                case 12:
                  _context3.next = 14;
                  return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/userdashboard?userId=".concat(_id), "/user/".concat(_id));

                case 14:
                  _context3.next = 18;
                  break;

                case 16:
                  _this.setError(res.data.message);

                  _this.loadingEnd();

                case 18:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "forgetPassRequest", function (e) {
      e.preventDefault();

      _this.loadingStart();

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/retrieve-user-info', {
        email: Object(_utils_globalFunc__WEBPACK_IMPORTED_MODULE_14__["stripSpaces"])(_this.email)
      }).then(function (res) {
        if (res.status === 200) {
          _this.setError(res.data.message);

          _this.clearInput();

          _this.loadingEnd();
        }

        if (res.status === 203) {
          _this.setError(res.data.message);

          _this.loadingEnd();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadAllComments", function () {
      _this.loadingStart();

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/all-comments').then(
      /*#__PURE__*/
      function () {
        var _ref4 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(res.data.payload && res.status === 200)) {
                    _context4.next = 5;
                    break;
                  }

                  _context4.next = 3;
                  return _this.loadComments(res.data.payload);

                case 3:
                  _context4.next = 7;
                  break;

                case 5:
                  _this.setError('Server Error');

                  _this.loadingEnd();

                case 7:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFile", function (e) {
      return _this.chooseProfile(e.target.files);
    });

    _this.login = props.login;
    _this.logout = props.logout;
    _this.clearInput = props.clearInput;
    _this.setError = props.setError;
    _this.clearError = props.clearError;
    _this.loadingStart = props.loadingStart;
    _this.loadingEnd = props.loadingEnd;
    _this.typeUsername = props.typeUsername;
    _this.typePassword = props.typePassword;
    _this.typeConfirmPassword = props.typeConfirmPassword;
    _this.typeEmail = props.typeEmail;
    _this.chooseProfile = props.chooseProfile;
    _this.setRegistering = props.setRegistering;
    _this.setForgetPass = props.setForgetPass;
    _this.loadComments = props.loadComments; //data

    _this.forgetPass = props.forgetPass;
    _this.registering = props.registering;
    _this.username = props.username;
    _this.email = props.email;
    _this.password = props.password;
    _this.rePassword = props.rePassword; // this.token = props.token

    _this.profileImg = props.profileImg;
    _this.loggedInAs = props.loggedInAs;
    _this.loggedIn = props.loggedIn;
    _this.userRole = props.userRole;
    _this.loaded = props.loaded;
    _this.errorMessage = props.errorMessage;
    return _this;
  }

  _createClass(UserForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.sessionStorage['token']) {
        this.sessionLogin();
      } else {
        this.loadingEnd();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.forgetPass = nextProps.forgetPass;
      this.registering = nextProps.registering;
      this.username = nextProps.username;
      this.email = nextProps.email;
      this.password = nextProps.password;
      this.rePassword = nextProps.rePassword; // this.token = nextProps.token

      this.profileImg = nextProps.profileImg;
      this.loggedInAs = nextProps.loggedInAs;
      this.loggedIn = nextProps.loggedIn;
      this.userRole = nextProps.userRole;
      this.loaded = nextProps.loaded;
      this.errorMessage = nextProps.errorMessage;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.registering) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserLogin, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: function onSubmit(e) {
            return _this2.createNewUser(e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFormGroup, {
          row: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
          control: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
            checked: this.state.customProfile,
            onChange: function onChange(event) {
              return _this2.setState({
                'customProfile': event.target.checked
              });
            },
            color: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            },
            __self: this
          }),
          label: "Custom profile picture",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        })), this.state.customProfile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          type: "file",
          onChange: this.uploadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          },
          __self: this
        })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          style: {
            'flexDirection': 'row'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioOption, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          alt: "avatar1",
          src: "https://res.cloudinary.com/fwgs210/image/upload/v1549488926/user_profile/resoxynwrkrn1jvwbpee.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "selectMyAvatar",
          onChange: function onChange() {
            return _this2.chooseProfile('https://res.cloudinary.com/fwgs210/image/upload/v1549488926/user_profile/resoxynwrkrn1jvwbpee.png');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioOption, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          alt: "avatar2",
          src: "https://res.cloudinary.com/fwgs210/image/upload/v1549489254/user_profile/vrahhosrv2davfyigrl9.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "selectMyAvatar",
          onChange: function onChange() {
            return _this2.chooseProfile('https://res.cloudinary.com/fwgs210/image/upload/v1549489254/user_profile/vrahhosrv2davfyigrl9.png');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioOption, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          alt: "avatar3",
          src: "https://res.cloudinary.com/fwgs210/image/upload/v1549489062/user_profile/atkyy6u92kvm3n69kxns.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "selectMyAvatar",
          onChange: function onChange() {
            return _this2.chooseProfile('https://res.cloudinary.com/fwgs210/image/upload/v1549489062/user_profile/atkyy6u92kvm3n69kxns.png');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioOption, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          alt: "avatar4",
          src: "https://res.cloudinary.com/fwgs210/image/upload/v1549489268/user_profile/oi25fck46ihcur6qeflm.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "selectMyAvatar",
          onChange: function onChange() {
            return _this2.chooseProfile('https://res.cloudinary.com/fwgs210/image/upload/v1549489268/user_profile/oi25fck46ihcur6qeflm.png');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioOption, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          alt: "avatar5",
          src: "https://res.cloudinary.com/fwgs210/image/upload/v1549489251/user_profile/nv0mmscejjfjmchxpjxn.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "selectMyAvatar",
          onChange: function onChange() {
            return _this2.chooseProfile('https://res.cloudinary.com/fwgs210/image/upload/v1549489251/user_profile/nv0mmscejjfjmchxpjxn.png');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioOption, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          alt: "avatar6",
          src: "https://res.cloudinary.com/fwgs210/image/upload/v1549489271/user_profile/gszzb66osbypomnsrbht.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "selectMyAvatar",
          onChange: function onChange() {
            return _this2.chooseProfile('https://res.cloudinary.com/fwgs210/image/upload/v1549489271/user_profile/gszzb66osbypomnsrbht.png');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 326
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }, "username (no upper case)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          value: this.username,
          onChange: this.typeUsername,
          type: "text",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }, "email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          value: this.email,
          onChange: this.typeEmail,
          type: "email",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        }, "password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          value: this.password,
          onChange: this.typePassword,
          type: "password",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, "Re-type password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          value: this.rePassword,
          onChange: this.typeConfirmPassword,
          type: "password",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputButton"], {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: this
        }, "Register"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["LineButton"], {
          onClick: function onClick() {
            return _this2.setRegistering(false);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }, "Login")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorMessage, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          },
          __self: this
        }, this.errorMessage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
          loaded: this.loaded,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          },
          __self: this
        }));
      }

      if (this.forgetPass) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserLogin, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 357
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: function onSubmit(e) {
            return _this2.forgetPassRequest(e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360
          },
          __self: this
        }, "email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          value: this.email,
          onChange: this.typeEmail,
          type: "email",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 361
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputButton"], {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          },
          __self: this
        }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["LineButton"], {
          onClick: function onClick() {
            return _this2.setForgetPass(false);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          },
          __self: this
        }, "Login")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorMessage, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          },
          __self: this
        }, this.errorMessage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
          loaded: this.loaded,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370
          },
          __self: this
        }));
      }

      if (!this.loggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserLogin, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 378
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: function onSubmit(e) {
            return _this2.userLogin(e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          },
          __self: this
        }, "username"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          value: this.username,
          onChange: this.typeUsername,
          type: "text",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 382
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 384
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          },
          __self: this
        }, "password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputField"], {
          value: this.password,
          onChange: this.typePassword,
          type: "password",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["InputButton"], {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          },
          __self: this
        }, "login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["LineButton"], {
          onClick: function onClick() {
            return _this2.setRegistering(true);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390
          },
          __self: this
        }, "Register here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_Input__WEBPACK_IMPORTED_MODULE_9__["LineButton"], {
          onClick: function onClick() {
            return _this2.setForgetPass(true);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391
          },
          __self: this
        }, "forgot password?")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorMessage, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395
          },
          __self: this
        }, this.errorMessage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
          loaded: this.loaded,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
        loaded: this.loaded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      });
    }
  }]);

  return UserForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state.user, state.loading);
}; //this method is used to pass state down functions


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    //this method is used to pass function down functions
    login: function login(userData) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["login"])(userData));
    },
    logout: function logout() {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["logout"])());
    },
    loadComments: function loadComments(allComments) {
      return dispatch(Object(_ShowComment_actions__WEBPACK_IMPORTED_MODULE_12__["loadComments"])(allComments));
    },
    typeUsername: function typeUsername(username) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["typeUsername"])(username));
    },
    typePassword: function typePassword(password) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["typePassword"])(password));
    },
    typeConfirmPassword: function typeConfirmPassword(rePassword) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["typeConfirmPassword"])(rePassword));
    },
    typeEmail: function typeEmail(email) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["typeEmail"])(email));
    },
    chooseProfile: function chooseProfile(profileImg) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["chooseProfile"])(profileImg));
    },
    clearInput: function clearInput() {
      return dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_13__["clearInput"])());
    },
    setError: function setError(errorMessage) {
      return dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_13__["setError"])(errorMessage));
    },
    clearError: function clearError() {
      return dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_13__["clearError"])());
    },
    loadingStart: function loadingStart() {
      return dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_13__["startLoading"])());
    },
    loadingEnd: function loadingEnd() {
      return dispatch(Object(_controllers_Actions__WEBPACK_IMPORTED_MODULE_13__["finishLoading"])());
    },
    setRegistering: function setRegistering(bool) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["setRegistering"])(bool));
    },
    setForgetPass: function setForgetPass(bool) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["setForgetPass"])(bool));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(UserForm));

/***/ }),

/***/ "./src/views/containers/Home.js":
/*!**************************************!*\
  !*** ./src/views/containers/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ShowComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ShowComment */ "./src/views/components/ShowComment/index.js");
/* harmony import */ var _components_UserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserForm */ "./src/views/components/UserForm/index.js");
var _jsxFileName = "/Users/User/full-stack-app/src/views/containers/Home.js";




var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShowComment__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=index.js.map