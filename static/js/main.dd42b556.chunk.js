(this.webpackJsonpusersreact=this.webpackJsonpusersreact||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(2),u=n.n(s),c=n(3),i=n(4),l=n(5),o=n(6),d=(n(12),function(e){return r.a.createElement("button",{className:"add-user-button",onClick:e.addUser},"Add")}),m=(n(13),function(e){return r.a.createElement("input",{onChange:e.getNewUserName,type:"text",name:"name",placeholder:"User name",value:e.newUser,className:"newUserInput"})}),f=(n(14),function(e){return r.a.createElement("form",{className:"add-user-form",onClick:function(e){e.preventDefault()}},r.a.createElement(m,{getNewUserName:e.getNewUserName,newUser:e.newUser}),r.a.createElement(d,{addUser:e.addUser}))}),U=(n(15),function(e){return r.a.createElement("div",{className:"user",onClick:function(){return e.deleteUser(e.id)}},e.name)}),w=(n(16),function(e){var t=e.users.map((function(t){return r.a.createElement("div",{className:"user",key:t.id},r.a.createElement(U,{name:t.name,deleteUser:e.deleteUser,id:t.id}))}));return r.a.createElement("div",{className:"users-container"},t)}),N=(n(17),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).id=3,e.state={newUser:"",users:[{id:0,name:"Maurycjusz"},{id:1,name:"\u017banklod"},{id:2,name:"Oktawiusz"}]},e.addUser=function(){if(e.InputValidation()){var t={id:e.id,name:e.state.newUser};e.setState({users:e.state.users.concat(t),newUser:""}),e.id++}},e.InputValidation=function(){return""!==e.state.newUser.trim()},e.getNewUserName=function(t){e.setState({newUser:t.target.value})},e.deleteUser=function(t){var n=e.state.users.filter((function(e){return e.id!==t}));e.setState({users:n})},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f,{newUser:this.state.newUser,addUser:this.addUser,getNewUserName:this.getNewUserName}),r.a.createElement(w,{users:this.state.users,deleteUser:this.deleteUser}))}}]),n}(r.a.Component));var p=function(){return r.a.createElement("div",null,r.a.createElement(N,null))};u.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.dd42b556.chunk.js.map