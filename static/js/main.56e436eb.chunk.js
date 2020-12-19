(this["webpackJsonpemployee-online-yellowbook"]=this["webpackJsonpemployee-online-yellowbook"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),r=n.n(a),i=n(16),l=n.n(i),c=n(3),o=n(4),p=n(6),m=n(5);n(23);var d=function(){return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("div",{className:"title",children:"Employee Directory"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"tagline",children:"Employee Information for all employees anywhere anytime!"})]})};n(24),n(25),n(26);var h=function(e){return Object(s.jsxs)("div",{className:"card2",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{alt:e.last,src:e.image})}),Object(s.jsxs)("div",{children:[e.title," ",e.first," ",e.last," "]}),Object(s.jsx)("div",{children:e.gender}),Object(s.jsx)("div",{children:e.age}),Object(s.jsx)("div",{children:e.phone}),Object(s.jsx)("div",{children:e.email})]})},j=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={alphabetical:!0,ascending:!0,sortedEmployees:[],employees:[]},e.sortName=function(){var t=[];t=e.state.alphabetical?e.props.empList.sort((function(e,t){var n=e.name.last.toLowerCase(),s=t.name.last.toLowerCase();return n<s?-1:n>s?1:0})):e.props.empList.sort((function(e,t){var n=e.name.last.toLowerCase(),s=t.name.last.toLowerCase();return n>s?-1:n<s?1:0})),e.setState({alphabetical:!e.state.alphabetical,sortedEmployees:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.state.sortedEmployees.length<1&&this.setState({sortedEmployees:this.props.empList})}},{key:"componentDidUpdate",value:function(e){this.props.empList!==e.empList&&this.setState({sortedEmployees:this.props.empList})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{children:"Photo"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{onClick:this.sortName,className:"name",children:"Name"})," "]}),Object(s.jsx)("div",{children:"Gender"}),Object(s.jsx)("div",{children:"Age"}),Object(s.jsx)("div",{children:"Phone"}),Object(s.jsx)("div",{children:"E-mail"})]}),this.state.sortedEmployees.length>0&&this.state.sortedEmployees.map((function(e,t){return Object(s.jsx)(h,{image:e.picture.large,first:e.name.first,last:e.name.last,title:e.name.title,gender:e.gender,age:e.dob.age,phone:e.cell,email:e.email})}))]})}}]),n}(r.a.Component),u=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={searchTerm:"",filteredEmployees:[]},e.handleInputChange=function(t){e.setState({searchTerm:t.target.value});var n=t.target.value,s=e.props.employees.filter((function(e){return-1!==(e.name.title+e.name.first+e.name.last+e.gender+e.dob.age+e.email+e.cell).indexOf(n)}));e.setState({filteredEmployees:s})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.state.filteredEmployees.length<1&&this.setState({filteredEmployees:this.props.employees})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("form",{className:"form",children:Object(s.jsx)("input",{value:this.state.searchTerm,name:"searchTerm",onChange:function(t){return e.handleInputChange(t)},type:"text",placeholder:"Search"})}),this.state.filteredEmployees.length>0&&Object(s.jsx)(j,{empList:this.state.filteredEmployees})]})}}]),n}(a.Component),b=n(17),f=n.n(b),v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={employees:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://randomuser.me/api/?results=20&nat=Aus").then((function(t){e.setState({employees:t.data.results})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{classname:"App",children:[Object(s.jsx)(d,{}),this.state.employees.length>0&&Object(s.jsx)(u,{employees:this.state.employees})]})}}]),n}(a.Component);n(44);var y=function(){return Object(s.jsx)(v,{})};n(45),n(46);l.a.render(Object(s.jsx)(y,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.56e436eb.chunk.js.map