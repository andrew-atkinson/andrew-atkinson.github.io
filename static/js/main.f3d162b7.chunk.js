(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),o=n(78),r=n.n(o),c=(n(77),n(79)),s=n(80),l=n(82),d=n(81),u=n(83);function h(e){var t=e.image,n=e.title,a=e.color,o=e.body,r=e.links;return i.a.createElement("section",null,i.a.createElement("h2",{className:"text",style:{backgroundImage:"url(".concat(t,")"),WebkitBackgroundClip:"text"}},n),i.a.createElement("div",{className:"box",style:{backgroundImage:"url(".concat(t,")"),color:"".concat(a||"black")}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"text-body"},o.map(function(e,t){return i.a.createElement("p",{key:t},e)})),i.a.createElement("div",{className:"link"},r.map(function(e,t){return i.a.createElement("p",{key:t},i.a.createElement("a",{key:t,href:e.href,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{key:t,className:"fa fa-fw ".concat(e.icon," fa-2x"),"aria-hidden":"true"}),e.name?e.name:null))})))))}var m={title:"Andrew Atkinson Projects",sections:[{image:"img/nimbus.jpg",color:"white",title:"NIMBUS, INC",body:["A hypothetical e-commerce site selling unusual weather","PostgreSQL maintains \u2018inventory\u2019 with Sequelize and Express, Node serves the project with React, Redux and Bootstrap giving a seamless user experience, with OAuth and sessions providing authentication. Created db schemas, Express routes for products, front-end through bootstrap, and managed the project through git and Waffle.io"],links:[{href:"https://github.com/nimbusInc/cloudslanger",icon:"fa-github",name:"Source"},{href:"https://nimbus-inc.herokuapp.com",icon:"fa-external-link",name:"Deploy"}]},{image:"img/2020logo.jpg",title:"20-20",body:["Media availability can broaden our perspectives. However, with advancements in consumer targeting, news organizations have increasingly directed politics. 20-20 aggregates and provides comprehensive information, showcasing content in a web application and chrome extension."],links:[{href:"https://github.com/20-20/twentytwenty",icon:"fa-github",name:"Source"}]},{image:"img/comp-1-esja-4+5.jpg",title:"PHOTOGRAPHY",body:["A site dedicated to photographic projects on Iceland and whaling, spaces underneath NYC highways, and others."],links:[{href:"http://andrewatkinson.net",icon:"fa-external-link",name:"Website"}]},{image:"img/about.jpg",title:"ABOUT",body:["Art educator turned software developer. As an educator I direct the MFA Studio Art program where I mentor students through an intensive two-year process from conceptualization, through development and to thesis exhibition with printed monographs. I also co-authored the rewrite for the Art and Design Department\u2019s degrees. The new degrees integrate art/design-focused digital technologies to update the curriculum, resulting in a relevant and competitive program to benefit students entering the creative workforce today. This rewriting process revealed the exciting potential for creative problem solving in software development, which brought me to javascript development and Fullstack Academy.","Proficient: JavaScript/ES6, Node, Express, React, Redux, PostgreSQL, Git/Github, HTML, Sequelize :: Knowledgeable: D3.js, CSS, Bootstrap, Mocha, Chai, Jasmine :: Some Familiarity: Sass, jQuery, Socket.io"],links:[{href:"mailto:blind.sam@gmail.com",icon:"fa-envelope"},{href:"https://www.linkedin.com/in/andrewpeteratkinson/",icon:"fa-linkedin-square"},{href:"https://twitter.com/andrewatkinson",icon:"fa-twitter"}]}]},g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).state=m,e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"content"},this.state&&this.state.sections.map(function(e){return i.a.createElement(h,{image:e.image,color:e.color,title:e.title,body:e.body,links:e.links})})),i.a.createElement("div",{className:"title"},this.state.title))}}]),t}(a.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/andrew-atkinson.github.io",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/andrew-atkinson.github.io","/service-worker.js");p?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):f(e)})}}()},77:function(e,t,n){},84:function(e,t,n){e.exports=n(178)}},[[84,1,2]]]);
//# sourceMappingURL=main.f3d162b7.chunk.js.map