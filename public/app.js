(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("components/404/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_React$Component) {
	_inherits(NotFound, _React$Component);

	function NotFound() {
		_classCallCheck(this, NotFound);

		return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
	}

	_createClass(NotFound, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'404 Not Found'
			);
		}
	}]);

	return NotFound;
}(_react2.default.Component);

exports.default = NotFound;

});

require.register("components/header-nav/index.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderNav = function (_React$Component) {
    _inherits(HeaderNav, _React$Component);

    function HeaderNav(props) {
        _classCallCheck(this, HeaderNav);

        var _this = _possibleConstructorReturn(this, (HeaderNav.__proto__ || Object.getPrototypeOf(HeaderNav)).call(this, props));

        _this.state = {
            username: props.username
        };
        return _this;
    }

    _createClass(HeaderNav, [{
        key: "getLoginElem",
        value: function getLoginElem() {
            if (this.props.loggedIn) {
                return _react2.default.createElement(
                    "div",
                    { className: "dropdown" },
                    _react2.default.createElement(
                        "a",
                        { className: "dropdown-toggle", type: "button", id: "dropdownMenu1", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true" },
                        _react2.default.createElement(
                            "span",
                            null,
                            this.state.username
                        ),
                        _react2.default.createElement("span", { className: "caret" })
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "dropdown-menu", "aria-labelledby": "dropdownMenu1" },
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "/newpoll" },
                                "New Poll"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "/mypolls" },
                                "My Polls"
                            )
                        ),
                        _react2.default.createElement("li", { role: "separator", className: "divider" }),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "/auth/logout" },
                                "Log Out"
                            )
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    "a",
                    { href: "/auth/facebook" },
                    "Log in with Facebook"
                );
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "header-nav" },
                _react2.default.createElement(
                    "a",
                    { href: "/home" },
                    "Home"
                ),
                _react2.default.createElement(
                    "h1",
                    null,
                    "Vote"
                ),
                this.getLoginElem()
            );
        }
    }]);

    return HeaderNav;
}(_react2.default.Component);

exports.default = HeaderNav;

});

require.register("components/home/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pollList = require('components/poll-list');

var _pollList2 = _interopRequireDefault(_pollList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.state = {
			polls: []
		};
		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			$.get('/db/polls', function (data) {
				_this2.setState({
					polls: data
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'home' },
				_react2.default.createElement(
					'h2',
					null,
					'All Polls'
				),
				_react2.default.createElement(_pollList2.default, { polls: this.state.polls })
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

});

require.register("components/my-polls/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pollList = require('components/poll-list');

var _pollList2 = _interopRequireDefault(_pollList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyPolls = function (_React$Component) {
	_inherits(MyPolls, _React$Component);

	function MyPolls(props) {
		_classCallCheck(this, MyPolls);

		var _this = _possibleConstructorReturn(this, (MyPolls.__proto__ || Object.getPrototypeOf(MyPolls)).call(this, props));

		_this.state = {
			polls: []
		};
		return _this;
	}

	_createClass(MyPolls, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			$.get('/db/polls/user', function (data) {
				_this2.setState({
					polls: data
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'my-polls' },
				_react2.default.createElement(
					'h2',
					null,
					'My Polls'
				),
				_react2.default.createElement(_pollList2.default, { polls: this.state.polls })
			);
		}
	}]);

	return MyPolls;
}(_react2.default.Component);

exports.default = MyPolls;

});

require.register("components/new-poll/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPoll = function (_React$Component) {
	_inherits(NewPoll, _React$Component);

	function NewPoll(props) {
		_classCallCheck(this, NewPoll);

		var _this = _possibleConstructorReturn(this, (NewPoll.__proto__ || Object.getPrototypeOf(NewPoll)).call(this, props));

		_this.state = {
			name: '',
			options: []
		};
		return _this;
	}

	_createClass(NewPoll, [{
		key: 'handleName',
		value: function handleName(e) {
			var value = e.target.value;

			this.setState(function () {
				return {
					name: value
				};
			});
		}
	}, {
		key: 'handleOptions',
		value: function handleOptions(e) {
			var value = e.target.value.split(',').map(function (text) {
				return text.trim();
			});

			this.setState(function () {
				return {
					options: value
				};
			});
		}
	}, {
		key: 'submitForm',
		value: function submitForm(e) {
			e.preventDefault();

			if (this.state.name.length > 0 && this.state.options.length > 0) {
				$.post('/db/poll', { name: this.state.name, options: this.state.options }, function (data) {
					window.location = "/poll/" + data._id;
				}).fail(function (err) {
					console.error('Something went wrong creating the new poll.', err);
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'new-poll', className: 'well' },
				_react2.default.createElement(
					'form',
					{ className: 'clearfix', onSubmit: this.submitForm.bind(this) },
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'vote-options' },
							'Name'
						),
						_react2.default.createElement('input', { type: 'text', className: 'form-control', onChange: this.handleName.bind(this), required: true })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'vote-options' },
							'Options'
						),
						_react2.default.createElement('textarea', { className: 'form-control', onChange: this.handleOptions.bind(this), required: true }),
						_react2.default.createElement(
							'small',
							null,
							'Options should be comma separated'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group button-form-group' },
						_react2.default.createElement(
							'button',
							{ type: 'submit', className: 'btn btn-primary' },
							'Submit'
						)
					)
				)
			);
		}
	}]);

	return NewPoll;
}(_react2.default.Component);

exports.default = NewPoll;

});

require.register("components/poll-list/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PollList = function (_React$Component) {
	_inherits(PollList, _React$Component);

	function PollList(props) {
		_classCallCheck(this, PollList);

		return _possibleConstructorReturn(this, (PollList.__proto__ || Object.getPrototypeOf(PollList)).call(this, props));
	}

	_createClass(PollList, [{
		key: 'getPollList',
		value: function getPollList() {
			var listItems = this.props.polls.map(function (poll, i) {
				return _react2.default.createElement(
					'div',
					{ className: 'poll-list-item', key: 'poll-' + i },
					_react2.default.createElement(
						'a',
						{ href: '/poll/' + poll._id },
						poll.name
					)
				);
			});

			return listItems;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'poll-list' },
				this.getPollList()
			);
		}
	}]);

	return PollList;
}(_react2.default.Component);

exports.default = PollList;

});

require.register("components/poll/deleteModal.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeleteModal = function (_React$Component) {
    _inherits(DeleteModal, _React$Component);

    function DeleteModal(props) {
        _classCallCheck(this, DeleteModal);

        return _possibleConstructorReturn(this, (DeleteModal.__proto__ || Object.getPrototypeOf(DeleteModal)).call(this, props));
    }

    _createClass(DeleteModal, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactModal2.default,
                { id: 'delete-modal', style: this.props.style, isOpen: this.props.isOpen, contentLabel: 'Modal' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Delete Poll'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Are you sure you want to delete this poll?'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'You cannot undo this action.'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'form-group button-form-group' },
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-default', onClick: this.props.cancelAction },
                        'Cancel'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'btn btn-danger', onClick: this.props.deleteAction },
                        'Delete'
                    )
                )
            );
        }
    }]);

    return DeleteModal;
}(_react2.default.Component);

exports.default = DeleteModal;

});

require.register("components/poll/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _deleteModal = require('components/poll/deleteModal');

var _deleteModal2 = _interopRequireDefault(_deleteModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Poll = function (_React$Component) {
    _inherits(Poll, _React$Component);

    function Poll(props) {
        _classCallCheck(this, Poll);

        var _this = _possibleConstructorReturn(this, (Poll.__proto__ || Object.getPrototypeOf(Poll)).call(this, props));

        _this.initialState = {
            poll: {},
            vote: null,
            selectedValue: '',
            custom: false,
            banner: false,
            bannerMessage: null,
            bannerStatus: null,
            modalOpen: false
        };
        _this.state = _this.initialState;
        return _this;
    }

    _createClass(Poll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getPoll();
        }
    }, {
        key: 'popupHandler',
        value: function popupHandler(e) {
            var value = e.target.value;

            this.setState(function () {
                var custom = value === 'custom';

                return {
                    vote: custom || value.length === 0 ? null : value,
                    selectedValue: value,
                    custom: custom,
                    banner: false
                };
            });
        }
    }, {
        key: 'textHandler',
        value: function textHandler(e) {
            var value = e.target.value.trim();
            var exists = this.state.poll.options.includes(value);

            this.setState(function () {
                return {
                    vote: value.length > 0 ? value : null,
                    banner: exists,
                    bannerMessage: 'Duplicate options are not allowed.',
                    bannerStatus: 'danger'
                };
            });
        }
    }, {
        key: 'deleteHandler',
        value: function deleteHandler() {
            this.setState(function () {
                return {
                    modalOpen: true
                };
            });
        }
    }, {
        key: 'getPoll',
        value: function getPoll() {
            var _this2 = this;

            var pollId = window.location.pathname.replace(/\/poll\//, '');

            $.get('/db/poll/' + pollId, function (data) {
                if (data) {
                    _this2.setState(function () {
                        var state = _this2.initialState;
                        state.poll = data;
                        return state;
                    });
                }
            }).fail(function () {
                _this2.setState(function () {
                    return {
                        banner: true,
                        bannerMessage: 'Poll not found',
                        bannerStatus: 'danger'
                    };
                });
            });
        }
    }, {
        key: 'submitForm',
        value: function submitForm(e) {
            var _this3 = this;

            e.preventDefault();

            if (this.state.vote && !this.state.banner) {
                if (this.state.custom) {
                    $.post('/db/poll/' + this.state.poll._id + '/option', { option: this.state.vote }).fail(function (err) {
                        console.error('Something went wrong adding the new option.', err);
                    }).done(function () {
                        _this3.postVote();
                    });
                } else {
                    this.postVote();
                }
            } else {
                this.setState(function () {
                    return {
                        banner: true,
                        bannerMessage: 'All fields must be completed before submitting.',
                        bannerStatus: 'danger'
                    };
                });
            }
        }
    }, {
        key: 'postVote',
        value: function postVote() {
            var _this4 = this;

            var foundOption = this.state.poll.options.findIndex(function (val) {
                return val === _this4.state.vote;
            });
            var vote = this.state.custom ? this.state.poll.options.length : foundOption;

            $.post('/db/poll/' + this.state.poll._id + '/vote', { vote: vote }).fail(function (err) {
                console.error('Something went wrong adding the new vote.', err);
            }).done(function () {
                _this4.getPoll();
            });
        }
    }, {
        key: 'showBanner',
        value: function showBanner() {
            if (this.state.banner) {
                return _react2.default.createElement(
                    'p',
                    { className: "bg-" + this.state.bannerStatus },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.bannerMessage
                    )
                );
            } else {
                return null;
            }
        }
    }, {
        key: 'listOptions',
        value: function listOptions() {
            var authOption = this.props.loggedIn ? [_react2.default.createElement(
                'option',
                { value: 'custom', key: 'vote-custom' },
                'New Option'
            )] : [];
            var options = this.state.poll.options || [];
            options = options.map(function (option, i) {
                return _react2.default.createElement(
                    'option',
                    { value: option, 'data-index': i, key: 'vote-' + i },
                    option
                );
            }).concat(authOption);

            return _react2.default.createElement(
                'select',
                { id: 'vote-options', className: 'form-control', value: this.state.selectedValue, onChange: this.popupHandler.bind(this), required: true },
                _react2.default.createElement(
                    'option',
                    { value: '' },
                    'Choose an option'
                ),
                options
            );
        }
    }, {
        key: 'showCustomText',
        value: function showCustomText() {
            if (this.state.custom) {
                return _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'vote-custom' },
                        'New Option'
                    ),
                    _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'vote-custom', onChange: this.textHandler.bind(this), required: true })
                );
            } else {
                return null;
            }
        }
    }, {
        key: 'showButtons',
        value: function showButtons() {
            var href = encodeURIComponent(window.location.href);
            var shareURL = 'http://www.facebook.com/dialog/send?app_id=305124166585583&link=' + href + '&redirect_uri=' + href;
            var shareButton = this.props.loggedIn ? _react2.default.createElement(
                'a',
                { className: 'btn btn-primary', id: 'facebook-share', href: shareURL },
                'Share on Facebook'
            ) : null;
            var deleteButton = this.props.loggedIn && this.props.userID === this.state.poll.created ? _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-danger', onClick: this.deleteHandler.bind(this) },
                'Delete Poll'
            ) : null;

            return _react2.default.createElement(
                'div',
                null,
                shareButton,
                _react2.default.createElement(
                    'div',
                    { className: 'form-group button-form-group' },
                    deleteButton,
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-primary' },
                        'Submit'
                    )
                )
            );
        }
    }, {
        key: 'cancelModal',
        value: function cancelModal() {
            this.setState(function () {
                return {
                    modalOpen: false
                };
            });
        }
    }, {
        key: 'deleteAction',
        value: function deleteAction() {
            var _this5 = this;

            $.post('/db/poll/' + this.state.poll._id + '/delete', function (data) {
                _this5.setState(function () {
                    return {
                        poll: {},
                        banner: true,
                        bannerMessage: 'Poll successfully deleted.',
                        bannerStatus: 'success'
                    };
                });
            }).fail(function () {
                _this5.setState(function () {
                    return {
                        banner: true,
                        bannerMessage: 'Something went wrong deleting the poll.',
                        bannerStatus: 'danger'
                    };
                });
            });
        }
    }, {
        key: 'showPollData',
        value: function showPollData() {
            var modalStyles = {
                content: {
                    bottom: 'auto'
                },
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }
            };

            if (this.state.poll.name) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        this.state.poll.name
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.submitForm.bind(this), className: 'clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                { htmlFor: 'vote-options' },
                                'Options'
                            ),
                            this.listOptions()
                        ),
                        this.showCustomText(),
                        this.showButtons()
                    ),
                    _react2.default.createElement(_deleteModal2.default, { style: modalStyles, isOpen: this.state.modalOpen, cancelAction: this.cancelModal.bind(this), deleteAction: this.deleteAction.bind(this) })
                );
            } else {
                return null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'poll', className: 'well' },
                this.showBanner(),
                this.showPollData()
            );
        }
    }]);

    return Poll;
}(_react2.default.Component);

exports.default = Poll;

});

require.register("index.js", function(exports, require, module) {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('routes');

var _routes2 = _interopRequireDefault(_routes);

var _headerNav = require('components/header-nav');

var _headerNav2 = _interopRequireDefault(_headerNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

document.addEventListener('DOMContentLoaded', function () {

  $.get('/db/user', function (data) {
    var loggedIn = (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object";
    var username = data && data.facebook ? data.facebook.name : '';
    var userID = data ? data._id : '';

    _reactDom2.default.render(_react2.default.createElement(
      'div',
      { id: 'app' },
      _react2.default.createElement(_headerNav2.default, { loggedIn: loggedIn, username: username }),
      _react2.default.createElement(_routes2.default, { history: history, loggedIn: loggedIn, userID: userID })
    ), document.querySelector('#root'));
  });
});

});

require.register("routes.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _home = require('components/home');

var _home2 = _interopRequireDefault(_home);

var _poll = require('components/poll');

var _poll2 = _interopRequireDefault(_poll);

var _newPoll = require('components/new-poll');

var _newPoll2 = _interopRequireDefault(_newPoll);

var _myPolls = require('components/my-polls');

var _myPolls2 = _interopRequireDefault(_myPolls);

var _ = require('components/404');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes(props) {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        props,
        _react2.default.createElement(
            'div',
            { className: 'main-content' },
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/home' });
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/home', render: function render() {
                        return _react2.default.createElement(_home2.default, { loggedIn: props.loggedIn });
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/poll', render: function render() {
                        return _react2.default.createElement(_poll2.default, { loggedIn: props.loggedIn, userID: props.userID });
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/newpoll', component: _newPoll2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/mypolls', component: _myPolls2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _2.default })
            )
        )
    );
};

exports.default = Routes;

});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  

// Auto-loaded modules from config.npm.globals.
window.jQuery = require("jquery");
window["$"] = require("jquery");
window.bootstrap = require("bootstrap");


});})();require('___globals___');


//# sourceMappingURL=app.js.map