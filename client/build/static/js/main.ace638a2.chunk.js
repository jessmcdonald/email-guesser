(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),s=n(18),o=n.n(s),c=(n(24),n(19)),l=n(3),r=n(4),u=n(7),h=n(6),m=n(5),d=(n(25),n(9)),b=n.n(d),j=(n(44),n(0)),f=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).handleChange=function(t){e.props.onChange(t)},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit()},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"input-form",onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{htmlFor:"fname",children:"Full name:"}),Object(j.jsx)("input",{type:"text",id:"name",name:"fullName",placeholder:"Jeff Mangum",value:this.props.fullName,onChange:this.handleChange}),Object(j.jsx)("label",{htmlFor:"lname",children:"Domain:"}),Object(j.jsx)("input",{type:"text",id:"domain",name:"domain",placeholder:"@babbel.com",value:this.props.domain,onChange:this.handleChange}),Object(j.jsx)("input",{type:"submit",className:"submit-button",value:"Submit"})]})}}]),n}(a.Component),p=(n(46),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"result-header",children:"I guessss their email is:"}),Object(j.jsx)("h2",{className:"result",children:this.props.emailAddress})]})}}]),n}(a.Component)),O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.onSubmit=function(){console.log("you are submitting"+a.state.fullName+a.state.domain),b.a.post("/api/v1/ahoy-there",{FullName:a.state.fullName,Domain:a.state.domain}).then((function(e){var t=e.data;console.log(t.body),a.setState({fullName:"",domain:"",emailAddress:t.body})})).catch((function(e){a.setState({error:e.message}),console.log(e)}))},a.onChange=a.onChange.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a.state={fullName:"",domain:"",emailAddress:"howdy@dogs.com",response:""},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/v1/ahoy-there").then((function(t){var n=t.data;e.setState({response:n})}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Email guessser!"}),Object(j.jsx)(f,{fullName:this.state.fullName,domain:this.state.domain,onChange:this.onChange,onSubmit:this.onSubmit}),this.state.emailAddress?Object(j.jsx)(p,{emailAddress:this.state.emailAddress}):Object(j.jsx)("div",{children:" No result yet :("})]})})}}]),n}(a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.ace638a2.chunk.js.map