(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var a=e(0),l=e(1),c=e.n(l),i=e(8),r=e.n(i),o=e(2),s=e(3),d=e(5),j=e(4),h=(e(14),function(t){Object(d.a)(e,t);var n=Object(j.a)(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(s.a)(e,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"component-display",children:Object(a.jsx)("div",{children:this.props.value})})}}]),e}(c.a.Component)),u=(e(15),function(t){Object(d.a)(e,t);var n=Object(j.a)(e);function e(){var t;Object(o.a)(this,e);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(t=n.call.apply(n,[this].concat(l))).handleClick=function(){t.props.clickHandler(t.props.name)},t}return Object(s.a)(e,[{key:"render",value:function(){var t=["component-button",this.props.orange?"orange":"",this.props.wide?"wide":""];return Object(a.jsx)("div",{className:t.join(" ").trim(),children:Object(a.jsx)("button",{onClick:this.handleClick,children:this.props.name})})}}]),e}(c.a.Component)),x=(e(16),function(t){Object(d.a)(e,t);var n=Object(j.a)(e);function e(){var t;Object(o.a)(this,e);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(t=n.call.apply(n,[this].concat(l))).handleClick=function(n){t.props.clickHandler(n)},t}return Object(s.a)(e,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"component-button-panel",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{name:"AC",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"+/-",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"%",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"\xf7",clickHandler:this.handleClick,orange:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{name:"7",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"8",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"9",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"x",clickHandler:this.handleClick,orange:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{name:"4",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"5",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"6",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"-",clickHandler:this.handleClick,orange:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{name:"1",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"2",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"3",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"+",clickHandler:this.handleClick,orange:!0})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{name:"0",clickHandler:this.handleClick,wide:!0}),Object(a.jsx)(u,{name:".",clickHandler:this.handleClick}),Object(a.jsx)(u,{name:"=",clickHandler:this.handleClick,orange:!0})]})]})}}]),e}(c.a.Component)),p=e(6),b=e.n(p);function k(t,n,e){var a=b()(t||"0"),l=b()(n||("\xf7"===e||"x"===e?"1":"0"));if("+"===e)return a.plus(l).toString();if("-"===e)return a.minus(l).toString();if("x"===e)return a.times(l).toString();if("\xf7"===e)return 0===l?(alert("Divide by 0 error"),"0"):a.div(l).toString();throw Error("Unknown operation '".concat(e,"'"))}function O(t,n){if("AC"===n)return{total:null,next:null,operation:null};if(/[0-9]+/.test(n))return"0"===n&&"0"===t.next?{}:t.operation?t.next?{next:t.next+n}:{next:n}:t.next?{next:"0"===t.next?n:t.next+n,total:null}:{next:n,total:null};if("%"===n){if(t.operation&&t.next){var e=k(t.total,t.next,t.operation);return{total:b()(e).div(b()("100")).toString(),next:null,operation:null}}return t.next?{next:b()(t.next).div(b()("100")).toString()}:{}}return"."===n?t.next?t.next.includes(".")?{}:{next:t.next+"."}:{next:"0."}:"="===n?t.next&&t.operation?{total:k(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?{total:k(t.total,t.next,t.operation),next:null,operation:n}:t.next?{total:t.next,next:null,operation:n}:{operation:n}}e(17);var m=function(t){Object(d.a)(e,t);var n=Object(j.a)(e);function e(){var t;Object(o.a)(this,e);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(t=n.call.apply(n,[this].concat(l))).state={total:null,next:null,operation:null},t.handleClick=function(n){t.setState(O(t.state,n))},t}return Object(s.a)(e,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"compenent-app",children:[Object(a.jsx)(h,{value:this.state.next||this.state.total||"0"}),Object(a.jsx)(x,{clickHandler:this.handleClick})]})}}]),e}(c.a.Component);e(18);r.a.render(Object(a.jsx)(m,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.1fb748aa.chunk.js.map