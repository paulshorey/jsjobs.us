module.exports=__NEXT_REGISTER_PAGE("/search",function(){var e=webpackJsonp([2],{212:function(e,t,n){e.exports=n(213)},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n(26);var r=n.n(o);var a=n(5);var i=n.n(a);var u=n(65);var c=n.n(u);var l=n(37);var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}return function(t,n,o){if(n)e(t.prototype,n);if(o)e(t,o);return t}}();function f(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function o(r,a){try{var i=t[r](a);var u=i.value}catch(e){n(e);return}if(i.done)e(u);else return Promise.resolve(u).then(function(e){o("next",e)},function(e){o("throw",e)})}return o("next")})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function w(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=function e(){if("undefined"===typeof window){console.log("getAPIHostname => http://localhost:1080");return"http://localhost:1080"}else if("localhost"===window.location.hostname){console.log("getAPIHostname => "+window.location.protocol+"//"+window.location.hostname+":1080");return window.location.protocol+"//"+window.location.hostname+":1080"}else{console.log("getAPIHostname => "+window.location.protocol+"//"+window.location.hostname);return window.location.protocol+"//"+window.location.hostname}};var d=function(e){w(t,e);function t(){p(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,[{key:"render",value:function e(){var t=[];if(this.props&&this.props.jobs)this.props.jobs.forEach(function(e,n){t.push(i.a.createElement("div",{key:e._id},i.a.createElement("div",null,e.text),i.a.createElement("sup",null,e.location)))});return i.a.createElement("div",null,i.a.createElement(l["a"],null),i.a.createElement("h2",null,'Search "',this.props.url.query.search,'" results: ',this.props.jobs_count),i.a.createElement("div",null,t))}}],[{key:"getInitialProps",value:function(){var e=f(r.a.mark(function e(t){var n,o;return r.a.wrap(function e(r){while(1)switch(r.prev=r.next){case 0:r.next=2;return fetch(v()+"/api/v1/jobs?text="+(t.query.search||""));case 2:n=r.sent;r.next=5;return n.json();case 5:o=r.sent;return r.abrupt("return",{jobs_count:o.results,jobs:o.data});case 7:case"end":return r.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]);return t}(i.a.Component);t["default"]=d}},[212]);return{page:e.default}});