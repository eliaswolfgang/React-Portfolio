(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{33:function(e,t){!function(){function e(e){e.preventDefault();var t=e.target,a=function(e){var t,a=e.elements,r=Object.keys(a).filter((function(e){return"honeypot"!==a[e].name||(t=a[e].value,!1)})).map((function(e){return void 0!==a[e].name?a[e].name:a[e].length>0?a[e].item(0).name:void 0})).filter((function(e,t,a){return a.indexOf(e)==t&&e})),n={};return r.forEach((function(e){var t=a[e];if(n[e]=t.value,t.length){for(var r=[],s=0;s<t.length;s++){var i=t.item(s);(i.checked||i.selected)&&r.push(i.value)}n[e]=r.join(", ")}})),n.formDataNameOrder=JSON.stringify(r),n.formGoogleSheetName=e.dataset.sheet||"responses",n.formGoogleSendEmail=e.dataset.email||"",{data:n,honeypot:t}}(t),r=a.data;if(a.honeypot)return!1;!function(e){for(var t=e.querySelectorAll("button"),a=0;a<t.length;a++)t[a].disabled=!0}(t);var n=t.action,s=new XMLHttpRequest;s.open("POST",n),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){if(4===s.readyState&&200===s.status){t.reset();var e=t.querySelector(".form-elements");e&&(e.style.display="none");var a=t.querySelector(".thankyou_message");a&&(a.style.display="block")}};var i=Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])})).join("&");s.send(i)}document.addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll("form.gform"),a=0;a<t.length;a++)t[a].addEventListener("submit",e,!1)}),!1)}()},45:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(19),i=a.n(s),c=(a(30),a(45),a(16)),o=a(7),l=a(31),d=a(62),h=a(63),j=a.p+"static/media/IMG_1130.35e8c386.jpeg",b=a(60),m=a(61),p=a(8),u=a(21),g=a(1);var f=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(b.a,{children:Object(g.jsx)(m.a,{children:Object(g.jsxs)(p.a,{className:"bg-dark text-white",children:[Object(g.jsx)(p.a.Title,{children:"About Me"}),Object(g.jsx)(p.a.Body,{className:"row",children:Object(g.jsxs)(m.a,{children:[Object(g.jsx)("img",{src:j,id:"headshot",className:"rounded float-left px-2",alt:"Headshot1",width:"45%"}),Object(g.jsx)(p.a.Text,{children:"My name is Ian E. W. Von Fange. I'm a former barista and forever coffee nerd who loves to figure stuff out! I'm a third generation Kansas Citian, but I studied theatre and creative writing at the University of Rochester in Rochester, NY, earning my Bachelor of Arts in English in 2017."}),Object(g.jsx)(p.a.Text,{children:"My education in literature, creative writing, and theatre performance has taught me strong analytical, synthetic, and creative skills, which I apply to every application I develop. As an experienced barista and trainer in the coffee industry, I\u2019ve also developed strong team-building and communication skills, particularly for giving constructive feedback. Learning the MERN stack - MongoDB, Express.js, React.js, and Node.js - has intensified my love for language, as I\u2019ve worked to understand the rich, complex syntax of JavaScript and its infinite uses."})]})}),Object(g.jsx)(p.a.Body,{className:"row",children:Object(g.jsx)(m.a,{children:Object(g.jsx)(p.a.Text,{children:"I\u2019m interested in software that improves communication, enriches natural language, and utilizes dynamic UIs. I currently work as an Application Developer for KVC Health Systems. My first major project with the development team is building React applications based on legacy AngularJS apps."})})})]})})}),Object(g.jsx)(b.a,{children:Object(g.jsx)(u.a,{children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)("h3",{children:"Front-end Technical Skills"}),Object(g.jsx)("p",{children:"HTML5, CSS3, JavaScript, jQuery (v3.4+), Handlebars.js, Express-Handlebars npm, Bootstrap CSS (v4.0+), Materialize CSS (v1.0), React.js"}),Object(g.jsx)("h3",{children:"Back-end Technical Skills"}),Object(g.jsx)("p",{children:"Node.js, Express.js, MySQL, Sequelize npm, MongoDB, Mongoose npm, Jest.js"})]})})})]})})},x=a(32),O=[{name:"fanPagr",description:"A customizable fan page generator built using Materialize and jQuery.",website:"https://cmoss703.github.io/fanPagR/",gitHub:"https://github.com/cmoss703/fanPagR"},{name:"Weather Dashboard",description:"A basic weather app built using Bootstrap, jQuery, and the Open Weather Map API.",website:"https://eliaswolfgang.github.io/Weather-Dashboard/",gitHub:"https://github.com/eliaswolfgang/Weather-Dashboard"},{name:"Node Note Taker",description:"A simple note-taking application built using Express and Node.js.",website:"https://agile-caverns-54810.herokuapp.com/notes",gitHub:"https://github.com/eliaswolfgang/Node-Note-Taker"},{name:"Progressive Budget App",description:"A progressive web app for budgeting which works offline - if you lose your internet connection, no worries!",website:"https://eliaswolfgang-budgeter.herokuapp.com/",gitHub:"https://github.com/eliaswolfgang/Progressive-Budget-App"},{name:"Employee Directory",description:"An app for sorting and filtering employee information (first and last names and email addresses) retrieved from the Random User API.",website:"https://eliaswolfgang.github.io/Employee-Directory/",gitHub:"https://github.com/eliaswolfgang/Employee-Directory"},{name:"Routinify",description:"A full-stack task management app (Express, Handlebars, Sequelize).",website:"https://routinify.herokuapp.com/",gitHub:"https://github.com/Keaton-Brewster/project-2"},{name:"Vision Boarder",description:"Single-page app allowing users to create vision boards, spurring inspiration and motivation for their next project. (Sequelize, Express, React)",website:"https://vision-board-learning-place.herokuapp.com",gitHub:"https://github.com/maggiemaywilder/vision-board"},{name:"Password Generator",description:"Dynamic password generator application that randomly generates a password based on a length specified by the user. Through a series of prompts, users are given the option to include lowercase letters, uppercase letters, numbers, and special characters in their passwords.",website:"https://eliaswolfgang.github.io/Password-Generator/",gitHub:"https://github.com/eliaswolfgang/Password-Generator"}];var v=function(){return Object(g.jsxs)(l.a,{fluid:!0,children:[Object(g.jsx)(u.a,{fluid:!0,children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)("h1",{className:"display-4",children:"Portfolio"}),Object(g.jsx)("p",{className:"lead",children:"A selection of my ongoing development projects."}),Object(g.jsxs)("p",{className:"lead",children:["Visit my full GitHub profile ",Object(g.jsx)("a",{href:"https://github.com/eliaswolfgang",target:"_blank",rel:"noreferrer",children:"here."})]}),Object(g.jsxs)("p",{class:"lead",children:["View my ",Object(g.jsx)("a",{href:"https://docs.google.com/document/d/1JOCRGQITE9N4LsHuiA14MfYbMVawxcAnWeXtKnUNF34/edit?usp=sharing",target:"_blank",rel:"noreferrer",children:"resum\xe9."})]})]})}),Object(g.jsx)(b.a,{children:O.map((function(e,t){return Object(g.jsx)(m.a,{lg:6,children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(p.a.Body,{children:[Object(g.jsx)(p.a.Title,{children:e.name}),Object(g.jsx)(p.a.Subtitle,{children:e.description}),Object(g.jsx)(x.a,{children:Object(g.jsx)("embed",{src:e.website})}),Object(g.jsx)(p.a.Link,{children:Object(g.jsx)("a",{href:e.website,target:"_blank",rel:"noreferrer",children:"Visit this website"})}),Object(g.jsx)(p.a.Link,{children:Object(g.jsx)("a",{href:e.gitHub,target:"_blank",rel:"noreferrer",children:"View the GitHub repository"})})]})})},t)}))})]})},w=a(33),y=a.n(w);var k=function(){return Object(r.useEffect)((function(){var e=document.createElement("script");return e.src={contactForm:y.a},e.async=!0,function(){document.body.appendChild(e)}}),[]),Object(g.jsx)(l.a,{children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(m.a,{lg:8,children:Object(g.jsx)(p.a,{className:"bg-dark text-white",children:Object(g.jsxs)("form",{className:"gform",method:"POST","data-email":"wolfgangvonfange@gmail.com",action:"https://script.google.com/macros/s/AKfycbyIJ2AtKpSLjwWWuJbgp4eKRbueHqQW-AsCUHioRNIaAy3Eh88G/exec",children:[Object(g.jsx)("div",{className:"thankyou_message",children:Object(g.jsxs)("h2",{children:[Object(g.jsx)("em",{children:"Thanks"})," for contacting me! I'll be in touch soon!"]})}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{for:"formGroupName",children:"Name"}),Object(g.jsx)("input",{type:"text",className:"form-control",id:"formGroupName",placeholder:"John Smith",name:"name"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{for:"formGroupEmail",children:"Email"}),Object(g.jsx)("input",{type:"text",className:"form-control",id:"formGroupEmail",placeholder:"example@example.com",name:"email"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{for:"formGroupMessage",children:"Message"}),Object(g.jsx)("textarea",{className:"form-control",id:"formGroupMessage",rows:"8",name:"message"})]}),Object(g.jsx)("button",{className:"btn btn-info btn-lg",type:"submit",children:"Submit"})]})})}),Object(g.jsxs)(m.a,{lg:4,children:[Object(g.jsxs)(p.a,{className:"bg-dark",children:[Object(g.jsx)("div",{className:"card-header text-white",children:"Connect on GitHub, LinkedIn, and Twitter"}),Object(g.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(g.jsxs)("li",{className:"list-group-item",children:[Object(g.jsx)("i",{className:"fab fa-github-square","aria-hidden":"true"}),Object(g.jsx)("a",{href:"https://github.com/eliaswolfgang",target:"_blank",rel:"noreferrer",children:"  /eliaswolfgang"})]}),Object(g.jsxs)("li",{className:"list-group-item",children:[Object(g.jsx)("i",{className:"fab fa-linkedin","aria-hidden":"true"}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/ian-von-fange/",target:"_blank",rel:"noreferrer",children:"  ian-von-fange"})]}),Object(g.jsxs)("li",{className:"list-group-item",children:[Object(g.jsx)("i",{className:"fab fa-twitter-square","aria-hidden":"true"}),Object(g.jsx)("a",{href:"https://twitter.com/elias_wolfgang",target:"_blank",rel:"noreferrer",children:"  @elias_wolfgang"})]})]})]}),Object(g.jsx)(b.a,{children:Object(g.jsxs)("h4",{children:["Or email me at ",Object(g.jsx)("a",{href:"mailto:ianewvf@gmail.com",children:"ianewvf@gmail.com"})]})})]})]})})};var N=function(){return Object(g.jsx)(l.a,{fluid:!0,children:Object(g.jsxs)(c.a,{children:[Object(g.jsxs)(d.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"dark",fluid:!0,children:[Object(g.jsxs)(d.a.Brand,{children:[" ",Object(g.jsx)(c.b,{to:"/",children:"Ian Von Fange"})]}),Object(g.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(g.jsxs)(h.a,{className:"mr-auto",children:[Object(g.jsxs)(h.a.Link,{children:[" ",Object(g.jsx)(c.b,{to:"/",children:"About Me"})]}),Object(g.jsxs)(h.a.Link,{children:[" ",Object(g.jsx)(c.b,{to:"/portfolio",children:"Portfolio"})]}),Object(g.jsxs)(h.a.Link,{children:[" ",Object(g.jsx)(c.b,{to:"/contact",children:"Contact"})]})]})})]}),Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/",children:Object(g.jsx)(f,{})}),Object(g.jsx)(o.a,{path:"/portfolio",children:Object(g.jsx)(v,{})}),Object(g.jsx)(o.a,{path:"/contact",children:Object(g.jsx)(k,{})})]})]})})},S=a(37),A=a(38),E=a(40),I=a(39),H=function(e){Object(E.a)(a,e);var t=Object(I.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(A.a)(a,[{key:"render",value:function(){return Object(g.jsx)(l.a,{className:"text-center bg-light text-black",children:Object(g.jsx)("span",{className:"text-muted",children:"\xa9 Ian Von Fange 2021 | Powered by React-Bootstrap (v4.6)"})})}}]),a}(r.Component);var M=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"main",children:Object(g.jsx)(N,{})}),Object(g.jsx)("div",{className:"footer",children:Object(g.jsx)(H,{})})]})};i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(c.a,{children:Object(g.jsx)(M,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.3e970807.chunk.js.map