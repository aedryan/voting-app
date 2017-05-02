!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},n={},o={},r={}.hasOwnProperty,l=/^\.\.?(\/|$)/,a=function(e,t){for(var n,o=[],r=(l.test(t)?e+"/"+t:t).split("/"),a=0,u=r.length;a<u;a++)n=r[a],".."===n?o.pop():"."!==n&&""!==n&&o.push(n);return o.join("/")},u=function(e){return e.split("/").slice(0,-1).join("/")},i=function(t){return function(n){var o=a(u(t),n);return e.require(o,t)}},s=function(e,t){var o=b&&b.createHot(e),r={id:e,exports:{},hot:o};return n[e]=r,t(r.exports,i(e),r),r.exports},c=function(e){return o[e]?c(o[e]):e},f=function(e,t){return c(a(u(e),t))},p=function(e,o){null==o&&(o="/");var l=c(e);if(r.call(n,l))return n[l].exports;if(r.call(t,l))return s(l,t[l]);throw new Error("Cannot find module '"+e+"' from '"+o+"'")};p.alias=function(e,t){o[t]=e};var d=/\.[^.\/]+$/,m=/\/index(\.[^\/]+)?$/,h=function(e){if(d.test(e)){var t=e.replace(d,"");r.call(o,t)&&o[t].replace(d,"")!==t+"/index"||(o[t]=e)}if(m.test(e)){var n=e.replace(m,"");r.call(o,n)||(o[n]=e)}};p.register=p.define=function(e,o){if(e&&"object"==typeof e)for(var l in e)r.call(e,l)&&p.register(l,e[l]);else t[e]=o,delete n[e],h(e)},p.list=function(){var e=[];for(var n in t)r.call(t,n)&&e.push(n);return e};var b=e._hmr&&new e._hmr(f,p,t,n);p._cache=n,p.hmr=b&&b.wrap,p.brunch=!0,e.require=p}}(),function(){var e;"undefined"==typeof window?this:window;require.register("components/404/index.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=t("react"),s=o(i),c=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return s["default"].createElement("div",null,"404 Not Found")}}]),t}(s["default"].Component);e["default"]=c}),require.register("components/header-nav/index.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=t("react"),s=o(i),c=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={username:e.username},n}return a(t,e),u(t,[{key:"getLoginElem",value:function(){return this.props.loggedIn?s["default"].createElement("div",{className:"dropdown"},s["default"].createElement("a",{className:"dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},s["default"].createElement("span",null,this.state.username),s["default"].createElement("span",{className:"caret"})),s["default"].createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},s["default"].createElement("li",null,s["default"].createElement("a",{href:"/newpoll"},"New Poll")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"/mypolls"},"My Polls")),s["default"].createElement("li",{role:"separator",className:"divider"}),s["default"].createElement("li",null,s["default"].createElement("a",{href:"/auth/logout"},"Log Out")))):s["default"].createElement("a",{href:"/auth/facebook"},"Log in with Facebook")}},{key:"render",value:function(){return s["default"].createElement("div",{id:"header-nav"},s["default"].createElement("a",{href:"/home"},"Home"),s["default"].createElement("h1",null,"Vote"),this.getLoginElem())}}]),t}(s["default"].Component);e["default"]=c}),require.register("components/home/index.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=t("react"),s=o(i),c=t("components/poll-list"),f=o(c),p=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={polls:[]},n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;$.get("/db/polls",function(t){e.setState({polls:t})})}},{key:"render",value:function(){return s["default"].createElement("div",{id:"home"},s["default"].createElement("h2",null,"All Polls"),s["default"].createElement(f["default"],{polls:this.state.polls}))}}]),t}(s["default"].Component);e["default"]=p}),require.register("components/my-polls/index.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=t("react"),s=o(i),c=t("components/poll-list"),f=o(c),p=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={polls:[]},n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;$.get("/db/polls/user",function(t){e.setState({polls:t})})}},{key:"render",value:function(){return s["default"].createElement("div",{id:"my-polls"},s["default"].createElement("h2",null,"My Polls"),s["default"].createElement(f["default"],{polls:this.state.polls}))}}]),t}(s["default"].Component);e["default"]=p}),require.register("components/new-poll/index.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=t("react"),s=o(i),c=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"",options:[]},n}return a(t,e),u(t,[{key:"handleName",value:function(e){var t=e.target.value;this.setState(function(){return{name:t}})}},{key:"handleOptions",value:function(e){var t=e.target.value.split(",").map(function(e){return e.trim()});this.setState(function(){return{options:t}})}},{key:"submitForm",value:function(e){e.preventDefault(),this.state.name.length>0&&this.state.options.length>0&&$.post("/db/poll",{name:this.state.name,options:this.state.options},function(e){window.location="/poll/"+e._id}).fail(function(e){console.error("Something went wrong creating the new poll.",e)})}},{key:"render",value:function(){return s["default"].createElement("div",{id:"new-poll",className:"well"},s["default"].createElement("form",{className:"clearfix",onSubmit:this.submitForm.bind(this)},s["default"].createElement("div",{className:"form-group"},s["default"].createElement("label",{htmlFor:"vote-options"},"Name"),s["default"].createElement("input",{type:"text",className:"form-control",onChange:this.handleName.bind(this),required:!0})),s["default"].createElement("div",{className:"form-group"},s["default"].createElement("label",{htmlFor:"vote-options"},"Options"),s["default"].createElement("textarea",{className:"form-control",onChange:this.handleOptions.bind(this),required:!0}),s["default"].createElement("small",null,"Options should be comma separated")),s["default"].createElement("div",{className:"form-group button-form-group"},s["default"].createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}}]),t}(s["default"].Component);e["default"]=c}),require.register("components/poll-list/index.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=t("react"),s=o(i),c=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"getPollList",value:function(){var e=this.props.polls.map(function(e,t){return s["default"].createElement("div",{className:"poll-list-item",key:"poll-"+t},s["default"].createElement("a",{href:"/poll/"+e._id},e.name))});return e}},{key:"render",value:function(){return s["default"].createElement("div",{className:"poll-list"},this.getPollList())}}]),t}(s["default"].Component);e["default"]=c}),require.register("components/poll/deleteModal.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=t("react"),s=o(i),c=t("react-modal"),f=o(c),p=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return s["default"].createElement(f["default"],{id:"delete-modal",style:this.props.style,isOpen:this.props.isOpen,contentLabel:"Modal"},s["default"].createElement("h2",null,"Delete Poll"),s["default"].createElement("p",null,"Are you sure you want to delete this poll?"),s["default"].createElement("p",null,"You cannot undo this action."),s["default"].createElement("div",{className:"form-group button-form-group"},s["default"].createElement("button",{className:"btn btn-default",onClick:this.props.cancelAction},"Cancel"),s["default"].createElement("button",{className:"btn btn-danger",onClick:this.props.deleteAction},"Delete")))}}]),t}(s["default"].Component);e["default"]=p}),require.register("components/poll/index.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=t("react"),s=o(i),c=t("components/poll/deleteModal"),f=o(c),p=t("components/poll/votePieChart"),d=o(p),m=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.initialState={poll:{},vote:null,selectedValue:"",custom:!1,banner:!1,bannerMessage:null,bannerStatus:null,modalOpen:!1},n.state=n.initialState,n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.getPoll()}},{key:"popupHandler",value:function(e){var t=e.target.value;this.setState(function(){var e="custom"===t;return{vote:e||0===t.length?null:t,selectedValue:t,custom:e,banner:!1}})}},{key:"textHandler",value:function(e){var t=e.target.value.trim(),n=this.state.poll.options.includes(t);this.setState(function(){return{vote:t.length>0?t:null,banner:n,bannerMessage:"Duplicate options are not allowed.",bannerStatus:"danger"}})}},{key:"deleteHandler",value:function(){this.setState(function(){return{modalOpen:!0}})}},{key:"getPoll",value:function(){var e=this,t=window.location.pathname.replace(/\/poll\//,"");$.get("/db/poll/"+t,function(t){t&&e.setState(function(){var n=e.initialState;return n.poll=t,n})}).fail(function(){e.setState(function(){return{banner:!0,bannerMessage:"Poll not found",bannerStatus:"danger"}})})}},{key:"submitForm",value:function(e){var t=this;e.preventDefault(),this.state.vote&&!this.state.banner?this.state.custom?$.post("/db/poll/"+this.state.poll._id+"/option",{option:this.state.vote}).fail(function(e){console.error("Something went wrong adding the new option.",e)}).done(function(){t.postVote()}):this.postVote():this.setState(function(){return{banner:!0,bannerMessage:"All fields must be completed before submitting.",bannerStatus:"danger"}})}},{key:"postVote",value:function(){var e=this,t=this.state.poll.options.findIndex(function(t){return t===e.state.vote}),n=this.state.custom?this.state.poll.options.length:t;$.post("/db/poll/"+this.state.poll._id+"/vote",{vote:n}).fail(function(e){console.error("Something went wrong adding the new vote.",e)}).done(function(){e.getPoll()})}},{key:"showBanner",value:function(){return this.state.banner?s["default"].createElement("p",{className:"bg-"+this.state.bannerStatus},s["default"].createElement("span",null,this.state.bannerMessage)):null}},{key:"listOptions",value:function(){var e=this.props.loggedIn?[s["default"].createElement("option",{value:"custom",key:"vote-custom"},"New Option")]:[],t=this.state.poll.options||[];return t=t.map(function(e,t){return s["default"].createElement("option",{value:e,"data-index":t,key:"vote-"+t},e)}).concat(e),s["default"].createElement("select",{id:"vote-options",className:"form-control",value:this.state.selectedValue,onChange:this.popupHandler.bind(this),required:!0},s["default"].createElement("option",{value:""},"Choose an option"),t)}},{key:"showCustomText",value:function(){return this.state.custom?s["default"].createElement("div",{className:"form-group"},s["default"].createElement("label",{htmlFor:"vote-custom"},"New Option"),s["default"].createElement("input",{type:"text",className:"form-control",name:"vote-custom",onChange:this.textHandler.bind(this),required:!0})):null}},{key:"showButtons",value:function(){var e=encodeURIComponent(window.location.href),t="http://www.facebook.com/dialog/send?app_id=305124166585583&link="+e+"&redirect_uri="+e,n=this.props.loggedIn?s["default"].createElement("a",{className:"btn btn-primary",id:"facebook-share",href:t},"Share on Facebook"):null,o=this.props.loggedIn&&this.props.userID===this.state.poll.created?s["default"].createElement("button",{type:"button",className:"btn btn-danger",onClick:this.deleteHandler.bind(this)},"Delete Poll"):null;return s["default"].createElement("div",null,n,s["default"].createElement("div",{className:"form-group button-form-group"},o,s["default"].createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"cancelModal",value:function(){this.setState(function(){return{modalOpen:!1}})}},{key:"deleteAction",value:function(){var e=this;$.post("/db/poll/"+this.state.poll._id+"/delete",function(t){e.setState(function(){return{poll:{},banner:!0,bannerMessage:"Poll successfully deleted.",bannerStatus:"success"}})}).fail(function(){e.setState(function(){return{banner:!0,bannerMessage:"Something went wrong deleting the poll.",bannerStatus:"danger"}})})}},{key:"showPollData",value:function(){var e={content:{bottom:"auto"},overlay:{backgroundColor:"rgba(0,0,0,0.5)"}};return this.state.poll.name?s["default"].createElement("div",null,s["default"].createElement("h2",null,this.state.poll.name),s["default"].createElement("form",{onSubmit:this.submitForm.bind(this),className:"clearfix"},s["default"].createElement("div",{className:"form-group"},s["default"].createElement("label",{htmlFor:"vote-options"},"Options"),this.listOptions()),this.showCustomText(),this.showButtons()),s["default"].createElement(f["default"],{style:e,isOpen:this.state.modalOpen,cancelAction:this.cancelModal.bind(this),deleteAction:this.deleteAction.bind(this)})):null}},{key:"render",value:function(){return s["default"].createElement("div",{id:"poll"},s["default"].createElement("div",{className:"well"},this.showBanner(),this.showPollData()),s["default"].createElement(d["default"],{poll:this.state.poll,width:"250",height:"250"}))}}]),t}(s["default"].Component);e["default"]=m}),require.register("components/poll/votePieChart.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=t("react"),s=o(i),c=t("d3-scale"),f=t("d3-shape"),p=t("d3-selection"),d=(t("d3-collection"),function(e){function t(e){r(this,t);var n=Math.min(e.width,e.height)/2,o=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={poll:{votes:e.poll.votes||[],options:e.poll.votes||[]},color:(0,c.scaleOrdinal)()},o.pie=(0,f.pie)().sort(null).value(function(e){return e.total}),o.arc=(0,f.arc)().outerRadius(n-10).innerRadius(0),o.label=(0,f.arc)().outerRadius(n-40).innerRadius(n-40),o}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.svg=(0,p.select)(this.refs.svgcontainer).append("svg").attr("width",this.props.width).attr("height",this.props.height).append("g").attr("transform","translate("+this.props.width/2+","+this.props.height/2+")")}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState(function(){return{poll:e.poll,color:t.generateColors(e.poll.options)}})}},{key:"randomColor",value:function(){var e="0123456789abcdef",t="#",n=0;for(n;n<6;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}},{key:"generateColors",value:function(e){for(var t=this.state.color.range()||[],n=t.length;n<e.length;n++)t.push(this.randomColor());return(0,c.scaleOrdinal)(t)}},{key:"renderSVG",value:function(){var e=this,t=this.state.poll.votes,n=(this.state.poll.options,t.map(function(e){return Number(e)}).reduce(function(e,t){var n=function(e){return e.name===t},o=e.find(n),r=e.findIndex(n);return o?(e[r].total+=1,e):e.concat([{name:t,total:1}])},[])),o=this.svg.datum(n).selectAll(".arc").data(this.pie).enter();o.append("path").attr("d",this.arc).attr("fill",function(t){return e.state.color(t.data.name)})}},{key:"getColorLegend",value:function(){var e=this,t=this.state.color.domain(),n=this.state.color.range().map(function(n,o){return s["default"].createElement("div",{className:"legend-item",key:"legend-"+o},s["default"].createElement("div",{className:"legend-color",style:{backgroundColor:n}}),s["default"].createElement("div",{className:"legend-name"},e.state.poll.options[t[o]]))});return s["default"].createElement("div",{className:"legend-container"},n)}},{key:"render",value:function(){return this.svg&&this.state.color&&this.state.poll&&this.renderSVG(),s["default"].createElement("div",null,s["default"].createElement("div",null,this.state.poll.votes.length?"":"No votes yet"),s["default"].createElement("div",{ref:"svgcontainer"}),this.getColorLegend())}}]),t}(s["default"].Component));e["default"]=d}),require.register("index.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=t("react-dom"),a=o(l),u=t("react"),i=o(u),s=t("history/createBrowserHistory"),c=o(s),f=t("routes"),p=o(f),d=t("components/header-nav"),m=o(d),h=(0,c["default"])();document.addEventListener("DOMContentLoaded",function(){$.get("/db/user",function(e){var t="object"===("undefined"==typeof e?"undefined":r(e)),n=e?e.name:"",o=e?e.id:"";a["default"].render(i["default"].createElement("div",{id:"app"},i["default"].createElement(m["default"],{loggedIn:t,username:n}),i["default"].createElement(p["default"],{history:h,loggedIn:t,userID:o})),document.querySelector("#root"))})})}),require.register("routes.js",function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var r=t("react"),l=o(r),a=t("react-router-dom"),u=t("components/home"),i=o(u),s=t("components/poll"),c=o(s),f=t("components/new-poll"),p=o(f),d=t("components/my-polls"),m=o(d),h=t("components/404"),b=o(h),y=function(e){return l["default"].createElement(a.BrowserRouter,e,l["default"].createElement("div",{className:"main-content"},l["default"].createElement(a.Switch,null,l["default"].createElement(a.Route,{exact:!0,path:"/",render:function(){return l["default"].createElement(a.Redirect,{to:"/home"})}}),l["default"].createElement(a.Route,{exact:!0,path:"/home",render:function(){return l["default"].createElement(i["default"],{loggedIn:e.loggedIn})}}),l["default"].createElement(a.Route,{path:"/poll",render:function(){return l["default"].createElement(c["default"],{loggedIn:e.loggedIn,userID:e.userID})}}),l["default"].createElement(a.Route,{exact:!0,path:"/newpoll",component:p["default"]}),l["default"].createElement(a.Route,{exact:!0,path:"/mypolls",component:m["default"]}),l["default"].createElement(a.Route,{path:"*",component:b["default"]}))))};e["default"]=y}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,n){window.jQuery=t("jquery"),window.$=t("jquery"),window.bootstrap=t("bootstrap")})}(),require("___globals___");