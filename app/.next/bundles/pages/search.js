module.exports=__NEXT_REGISTER_PAGE("/search",function(){var e=webpackJsonp([2],{212:function(e,t,n){e.exports=n(213)},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(17);var o=n.n(r);var a=n(5);var u=n.n(a);var i=n(65);var c=n.n(i);var s=n(37);var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function f(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a);var i=u.value}catch(e){n(e);return}if(u.done)e(i);else return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)})}return r("next")})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var y=function e(){if("undefined"===typeof window){console.log("lets try localhost");return"http://localhost"}else{console.log(window.location.protocol+"//"+window.location.hostname);return window.location.protocol+"//"+window.location.hostname}};var b=function(e){v(t,e);function t(){p(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"render",value:function e(){var t=[];if(this.props&&this.props.jobs)this.props.jobs.forEach(function(e,n){t.push(u.a.createElement("div",{key:e._id},u.a.createElement("div",null,e.text),u.a.createElement("sup",null,e.location)))});return u.a.createElement("div",null,u.a.createElement(s["a"],null),u.a.createElement("h2",null,'Search "',this.props.url.query.search,'" results: ',this.props.jobs_count),u.a.createElement("div",null,t))}}],[{key:"getInitialProps",value:function(){var e=f(o.a.mark(function e(t){var n,r;return o.a.wrap(function e(o){while(1)switch(o.prev=o.next){case 0:o.next=2;return fetch(y()+"/api/v1/jobs?text="+(t.query.search||""));case 2:n=o.sent;o.next=5;return n.json();case 5:r=o.sent;return o.abrupt("return",{jobs_count:r.results,jobs:r.data});case 7:case"end":return o.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]);return t}(u.a.Component);t["default"]=b}},[212]);return{page:e.default}});