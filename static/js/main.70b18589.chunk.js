(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{101:function(e,t,i){},104:function(e,t,i){"use strict";i.r(t);var n,c=i(1),s=i.n(c),o=i(15),A=i.n(o),a=(i(85),i(23)),r=i(7),l=(i(86),i(87),i(8)),d=i(9),h=i(10),j=i(12),m=i(11),p=i(29),b=(i(91),i(80)),u=i(53),O=i(54),g=i(2),x=["style_props"],v=Object(O.a)((function(e){e.style_props;var t=Object(b.a)(e,x);return Object(g.jsx)("li",Object(p.a)({},t))}))(n||(n=Object(u.a)(["   color: ",";\n"])),(function(e){var t;return(null===e||void 0===e||null===(t=e.style_props)||void 0===t?void 0:t.color)||"red"})),f=i(59),w=i(58),k=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={menu_visible:!1,links:[{text:"Home",path:"",initial:!0,id:"profile"},{text:"Skills",path:"/#skills",id:"skills"},{text:"Projects",path:"/#projects",id:"projects"},{text:"Contact",path:"/#contact_me",id:"contact_me"}],menu_height:0,menu_scale:.2},e.initial_path="",e.initial_hash="",e.lastScrollOffset=0,e.scrolling=!1,e.setMenuHeight=function(){e.setState({menu_height:document.querySelector(".menu-ul").scrollHeight})},e.scrollToTargetAdjusted=function(t){console.log("scrollToTargetAdjusted",t);var i=document.querySelector(t).getBoundingClientRect().top+window.pageYOffset-100;e.lastScrollOffset=i,window.scrollTo({top:i,behavior:"smooth"})},e.isInViewport=function(e){var t=document.querySelector(e).getBoundingClientRect();if(t.height<window.innerHeight){var i=window.innerHeight/t.height;return t.top<=window.innerHeight&&t.bottom<=1.4*t.height*i&&t.top>=-1.4*t.height&&t.bottom>=.4*window.innerHeight}return t.top<=.4*window.innerHeight&&t.bottom<=1.4*t.height&&t.top>=-1.4*t.height&&t.bottom>=.4*window.innerHeight},e.onScroll=function(){document.querySelectorAll(".my-nav-link").forEach((function(e){return e.removeAttribute("highlight")}));for(var t=0;t<e.state.links.length;t++){var i=e.state.links[t];if(i.id&&e.isInViewport("#"+i.id)){document.querySelectorAll(".my-nav-link")[t].setAttribute("highlight","true"),document.querySelector(".my-nav-link-highlight").style.marginLeft="".concat(t/e.state.links.length*100,"%");break}}},e.isActive=function(e,t){var i=window.location.href.replace(window.location.origin,"");try{var n=i.match(/\/?([^ \/]*)\/?/),c=i.match(/\/?#\/?([^ \/]*)\/?/),s=window.location.pathname==e;return(null===n||void 0===n?void 0:n.length)>=2&&(s=s||n[1]==e),(null===c||void 0===c?void 0:c.length)>=2&&(s=(s=(s=s||c[1]==e)||"/"+c[1]==e)||"/#"+c[1]==e),s}catch(o){return console.log(o),!1}},e.getActiveIndex=function(){var t=0,i=window.location.href.replace(window.location.origin,"");return e.state.links.forEach((function(e,n){var c=e.path;try{var s=i.match(/\/?([^ \/]*)\/?/),o=i.match(/\/?#\/?([^ \/]*)\/?/),A=window.location.pathname==c;(null===s||void 0===s?void 0:s.length)>=2&&(A=A||s[1]==c),(null===o||void 0===o?void 0:o.length)>=2&&(A=(A=(A=A||o[1]==c)||"/"+o[1]==c)||"/#"+o[1]==c),A&&(t=n)}catch(a){}})),t},e.toggle_menu=function(t){e.setState({menu_visible:!e.state.menu_visible})},e}return Object(h.a)(i,[{key:"componentDidMount",value:function(){this.setMenuHeight(),window.addEventListener("resize",this.setMenuHeight),document.addEventListener("scroll",this.onScroll),this.initial_path=window.location.pathname,this.initial_hash=window.location.hash,this.setState({menu_scale:1});try{console.log(".............componentDidMount"),this.scrollToTargetAdjusted(window.location.hash.split("/").slice(-1))}catch(e){console.log(e),this.lastScrollOffset=0,document.body.scrollIntoView({behavior:"smooth",block:"start"})}}},{key:"componentDidUpdate",value:function(){if(console.log("componentDidUpdate",this.initial_hash,window.location.hash),this.initial_path!=window.location.pathname){this.initial_path=window.location.pathname,console.log(".............componentDidUpdate1");try{this.scrollToTargetAdjusted(window.location.hash.split("/").slice(-1))}catch(e){this.lastScrollOffset=0,document.body.scrollIntoView({behavior:"smooth",block:"start"})}}if(this.initial_hash!=window.location.hash){console.log(".............componentDidUpdate2","initial_hash",this.initial_hash,"window",window.location.hash),this.initial_hash=window.location.hash;try{this.scrollToTargetAdjusted(window.location.hash.split("/").slice(-1))}catch(e){this.lastScrollOffset=0,document.body.scrollIntoView({behavior:"smooth",block:"start"})}}}},{key:"render",value:function(){var e=this;return console.log(window.location),Object(g.jsx)("div",{className:"navBar-component","theme-mode":this.props.theme_mode,children:Object(g.jsxs)("div",{className:"my-navbar","theme-mode":this.props.theme_mode,children:[Object(g.jsxs)("div",{className:"left-end",children:[Object(g.jsx)("div",{className:"my-mobile-mode",children:Object(g.jsx)(w.a,{className:"my-menu-icon",onClick:this.toggle_menu,"theme-mode":this.props.theme_mode})}),Object(g.jsx)("div",{className:"menu-wrapper",children:Object(g.jsxs)("ul",{className:"menu-ul ".concat(this.state.menu_visible?"":"hide_menu"),style:{"--min-height":"".concat(this.state.menu_height,"px"),transform:"scale(".concat(this.state.menu_scale,")")},children:[this.state.links.map((function(t,i){return Object(g.jsx)(v,Object(p.a)(Object(p.a)({style_props:{color:"black"}},e.isActive(t.path,i)?{highlight:"true"}:{}),{},{style:{"--link-width":"".concat(1/e.state.links.length*100,"%")},onClick:function(t){return e.setState({active_index:i})},className:"my-nav-link",children:Object(g.jsx)(a.b,{"theme-mode":e.props.theme_mode,to:t.path,children:t.text})}))})),Object(g.jsx)("hr",{style:{marginLeft:"".concat(this.getActiveIndex()/this.state.links.length*100,"%"),width:"".concat(1/this.state.links.length*100,"%")},"theme-mode":this.props.theme_mode,className:"my-nav-link-highlight"})]})})]}),Object(g.jsx)("div",{className:"right-end",children:Object(g.jsx)(f.a,{className:"dark-mode-icon","theme-mode":this.props.theme_mode,onClick:function(t){return e.props.setTheme("dark"==e.props.theme_mode?"light":"dark")}})})]})})}}]),i}(c.Component),R=Object(l.b)((function(e){return{theme_mode:e.theme}}),(function(e){return{setTheme:function(t){return e({type:"SET_THEME",payload:t})}}}))(k),S=(i(95),i(44)),I=i(60),K=i(61),y=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"footer-component","theme-mode":this.props.theme_mode,children:Object(g.jsxs)("div",{id:"contact_me",children:[Object(g.jsxs)("div",{className:"social_links",children:[Object(g.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/brguru90/",children:Object(g.jsx)(S.c,{className:"social_links_icon"})}),Object(g.jsx)("a",{target:"_blank",href:"https://www.instagram.com/brguru95/",children:Object(g.jsx)(S.b,{className:"social_links_icon"})}),Object(g.jsx)("a",{target:"_blank",href:"https://www.facebook.com/brguru90",children:Object(g.jsx)(S.a,{className:"social_links_icon"})})]}),Object(g.jsxs)("div",{className:"social_links",children:[Object(g.jsx)("span",{className:"contact_links",children:Object(g.jsxs)("a",{className:"no_color",href:"mailto:brguru90@gmail.com",children:[" ",Object(g.jsx)(I.a,{})," brguru90@gmail.com"]})}),Object(g.jsx)("span",{className:"separator",children:"|"}),Object(g.jsx)("span",{className:"contact_links",children:Object(g.jsxs)("a",{className:"no_color",href:"tel:+91-948-239-9078",children:["  ",Object(g.jsx)(K.a,{})," +91-9482399078"]})})]})]})})}}]),i}(c.Component),N=Object(l.b)((function(e){return{theme_mode:e.theme}}),(function(e){return{setTheme:function(t){return e({type:"SET_THEME",payload:t})}}}))(y),T=function(e){return function(t){Object(j.a)(n,t);var i=Object(m.a)(n);function n(){return Object(d.a)(this,n),i.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(R,{}),Object(g.jsx)(e,{}),Object(g.jsx)(N,{})]})}}]),n}(c.Component)};i(96);function U(e){return Object(g.jsx)("div",{children:e.children})}i(97);var F=i.p+"static/media/profile_fullsize.df034b14.jpg",V=i(62),H=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){return Object(g.jsx)("div",Object(p.a)(Object(p.a)({className:"profile-component"},this.props),{},{"theme-mode":this.props.theme_mode,children:Object(g.jsxs)("div",{className:"container-fluid",id:"profile",children:[Object(g.jsx)(U,{children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsxs)("div",{className:"profile_pic_sect",children:[Object(g.jsx)("div",{className:"profile_pic","theme-mode":this.props.theme_mode,style:{backgroundImage:"url(".concat(F,")")}}),Object(g.jsx)("div",{className:"profile_short_expl my_name",children:"Guruprasad BR"}),Object(g.jsx)("div",{className:"profile_short_expl",children:"Software Engineer at Terralogic, Bangalore"})]})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsxs)("div",{className:"profile_detail_sect",children:[Object(g.jsxs)("div",{className:"profession_short_expl my_domain",children:["Full stack web ",Object(g.jsx)("br",{}),"Developer",Object(g.jsxs)("span",{className:"code",children:["<",Object(g.jsx)("div",{className:"cursor",children:"/"}),">"]})]}),Object(g.jsxs)("div",{className:"profession_long_expl",children:[Object(g.jsx)("p",{children:"I have good experience in developing both frontend app and backend server & also in deployment of website  on linux machine."}),Object(g.jsxs)("p",{children:["I am currently working in ",Object(g.jsx)("b",{children:"Terralogic"})," software solution since last 2 years.Completed graduation in Bachelor of engineering with computer science as a major in Dr.Ambedkar institute of Technology, Bangalore."]}),Object(g.jsx)("p",{children:Object(g.jsxs)("a",{target:"_blank",className:"no_color",href:"https://drive.google.com/file/d/1KNvbnZmSYRMIQxlI_5yGBtlHA5e0xHN7/view?usp=sharing",children:["View Resume   ",Object(g.jsx)(V.a,{})]})})]})]})})]})}),Object(g.jsx)(U,{children:Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"col-xl-12",children:Object(g.jsx)("div",{className:"more_points_about_profession",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)("span",{children:"Planning and Designing the Web App architecture, Ex: Making a database Replicas,Choosing the tech stack etc"})}),Object(g.jsx)("li",{children:Object(g.jsx)("span",{children:"Designing Responsive UI,adding the smooth animation & creating cool design"})}),Object(g.jsx)("li",{children:Object(g.jsx)("span",{children:"Good backend skills,building optimized APIs,Choosing the async or threaded API based on requirement "})}),Object(g.jsx)("li",{children:Object(g.jsx)("span",{children:"Have experience with MySQL and Mongo Database & SQL queries "})}),Object(g.jsx)("li",{children:Object(g.jsx)("span",{children:"Deployment of Web App both on bare VM or docker"})}),Object(g.jsx)("li",{children:Object(g.jsx)("span",{children:"CICD using GitLab"})})]})})})})})]})}))}}]),i}(c.Component),B=Object(l.b)((function(e){return{theme_mode:e.theme}}))(H),E=(i(98),i(106)),J=i.p+"static/media/js.16de3b93.svg",G=i.p+"static/media/jquery.eb105fbb.png",M=i.p+"static/media/css3.3001f030.svg",C=i.p+"static/media/html.e4498983.svg",D=(i.p,i.p+"static/media/react.a900547a.svg"),L=i.p+"static/media/redux.06ff246e.svg",_=i.p+"static/media/sass.b0e830ec.svg",W=(i.p,i.p+"static/media/nodejs.6f01b9a1.png"),Y=i.p+"static/media/apache.2c992ddb.png",P=i.p+"static/media/mongoDB.fc47a395.svg",Q=i.p+"static/media/mysql.cdd30395.png",X=i.p+"static/media/docker.56f0d51c.png",q=i.p+"static/media/git.7d2439e8.svg",Z=i.p+"static/media/gitlab.c99d619c.png",z=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"skills-component",id:"skills","theme-mode":this.props.theme_mode,children:Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsxs)(U,{children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("div",{className:"technology_know_description full_width",children:Object(g.jsx)("div",{className:"technology_short_expl",children:Object(g.jsx)("span",{children:"UI Development"})})})}),Object(g.jsx)("div",{className:"col-lg-6 mobile_compatible"})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("div",{className:"technology_know_description",children:Object(g.jsxs)("div",{className:"technology_long_expl",children:[Object(g.jsx)("p",{children:"Have the good experience in React JS library and entry level experience in Angular Framework."}),Object(g.jsx)("p",{children:"I have 2 year of experience in integrating the APIs to front end using fetch,axios & Ajax.Experience in Additional things like Server sent event,Websocket."})]})})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("div",{className:"technology_know_icons",children:Object(g.jsxs)("div",{className:"group_logos",children:[Object(g.jsx)(E.a,{title:"Javascript",color:"#deaa00",children:Object(g.jsx)("img",{src:J})}),Object(g.jsx)(E.a,{title:"CSS",color:"blue",children:Object(g.jsx)("img",{src:M})}),Object(g.jsx)(E.a,{title:"CSS",color:"volcano",children:Object(g.jsx)("img",{src:C})}),Object(g.jsx)(E.a,{title:"SCSS",color:"pink",children:Object(g.jsx)("img",{src:_})}),Object(g.jsx)("hr",{className:"just_invisible_break"}),Object(g.jsx)(E.a,{title:"React JS",color:"#00bbfa",children:Object(g.jsx)("img",{src:D})}),Object(g.jsx)(E.a,{title:"Redux",color:"purple",children:Object(g.jsx)("img",{src:L})}),Object(g.jsx)(E.a,{title:"Jquery",color:"#172C45",children:Object(g.jsx)("img",{src:G})})]})})})]})]}),Object(g.jsxs)(U,{children:[Object(g.jsxs)("div",{className:"row reversed_row",children:[Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("div",{className:"technology_know_description full_width",children:Object(g.jsx)("div",{className:"technology_short_expl",children:Object(g.jsx)("span",{children:"Backend Development"})})})}),Object(g.jsx)("div",{className:"col-lg-6 mobile_compatible"})]}),Object(g.jsxs)("div",{className:"row reversed_row",children:[Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("div",{className:"technology_know_description",children:Object(g.jsxs)("div",{className:"technology_long_expl",children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Backend Frameworks:"})," Have the good experience in Django's (Python3.8) both wsgi & asgi interface & Express JS(NodeJS 14) frame work."]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Deployment:"})," Also experience in deploying same application through Apache+wsgi, Nginx+uwsgi+hypercorn & pm2. Have good knowledge in Linux platform(Ubuntu 18+ & CentOS 7+) and Docker containers."]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("b",{children:"Version control:"})," git, bitbucket and GitLab(with CICD)"]})]})})}),Object(g.jsx)("div",{className:"col-lg-6",children:Object(g.jsx)("div",{className:"technology_know_icons",children:Object(g.jsxs)("div",{className:"group_logos",children:[Object(g.jsx)(E.a,{title:"Node JS",color:"#77B060",children:Object(g.jsx)("img",{src:W})}),Object(g.jsx)(E.a,{title:"Django",color:"#0A2F20",children:Object(g.jsx)("img",{src:"data:image/png;base64,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"})}),Object(g.jsx)(E.a,{title:"MySQL",color:"#015F8B",children:Object(g.jsx)("img",{src:Q})}),Object(g.jsx)(E.a,{title:"Mongo",color:"#419444",children:Object(g.jsx)("img",{src:P})}),Object(g.jsx)("hr",{className:"just_invisible_break"}),Object(g.jsx)(E.a,{title:"Git",color:"#DE4C36",children:Object(g.jsx)("img",{src:q})}),Object(g.jsx)(E.a,{title:"Apache",color:"#C73C57",children:Object(g.jsx)("img",{src:Y})}),Object(g.jsx)(E.a,{title:"Nginx",color:"#0CA652",children:Object(g.jsx)("img",{src:"data:image/png;base64,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"})}),Object(g.jsx)(E.a,{title:"Docker",color:"#227082",children:Object(g.jsx)("img",{src:X})}),Object(g.jsx)(E.a,{title:"GitLab",color:"#E53A35",children:Object(g.jsx)("img",{src:Z})})]})})})]})]})]})})}}]),i}(c.Component),$=Object(l.b)((function(e){return{theme_mode:e.theme}}))(z),ee=i(74),te=i.n(ee),ie=(i(101),i.p,i.p+"static/media/desktop.32a54ffd.png"),ne=i.p+"static/media/smarthire.600f276d.png",ce=i.p+"static/media/cesg.23095b0b.png",se=i.p+"static/media/xreasy.2cb2a966.png",oe=i.p+"static/media/webopt.fa597e80.png",Ae=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(d.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).timeline=[{description:{title:"Smarthire",date_time:"July 2019\n-\nOct 2019",descriptions:["This was an internal project in Terralogic, which is used for hiring candidates by conducting tests.","it provides 2 type of test the interviewer can choose, one is MCQ contains a multiple set of \n                    technical questions from different category such as python programming, \n                    analytics etc and another one is the Coding test where candidate can write,run code & evaluate \n                    output with 1 exposed & 4 hidden output."]},image:ne},{description:{title:" CESG Dashboard",date_time:"Oct 2019\n-\nApril 2020",descriptions:["This is a dashboard gets the data from bulk of logs from testing team & shows the performance of \n                    the platform on which they are running test, it shows metrics in a simplified UI like Charts, \n                    summarized tabular format & groups the data while providing required filters to quickly analyse\n                    data."]},image:ce},{description:{title:"Web optimizer",date_time:"April 2020\n-\nJune 2021",descriptions:["This was a second internal project, this is a tool which allow developer to analyse the performance \n                    of website, also perform security checks & suggest best practices.","The supporting library we used for this projects are Google lighthouse, nmap port scanner, Apache \n                    HTTP server benchmark, OpenSSL etc."]},image:oe},{description:{title:"XREasyOnBoard",date_time:"June 2021\n-\nPresent",descriptions:["Tool development: It\u2019s a tool used to trigger firmware installation to the router, view logs of installation.","Dashboard development: It\u2019s a dashboard which shows the metrics generated by tool, provides charts & tabular data to \n                    simplify the analysis of installations."]},image:se}],e.state={svg_data:"",svg_width:window.innerWidth,svg_height:window.innerHeight},e.resizeBgSVG=function(){e.configure_svg_bg()},e.configure_svg_bg=function(){var t=document.querySelector(".projects-component").offsetWidth,i=e.generate_bg_img(t,e.timeline.length);e.setState(i)},e.generate_bg_img=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="dark"==e.props.theme_mode?"orange":"tomato";i<2&&(i=2),console.log("innerWidth",t);for(var c=600,s=350,o=400,A=[],a=2;a<=i;a++)A.push("T".concat(c,",").concat(o*a));A=A.join(" ");var r=o*i,l=Object(g.jsxs)("svg",{viewBox:"0 0 ".concat(1200," ",r),xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:[Object(g.jsxs)("filter",{id:"dropshadow",height:"200%",children:[Object(g.jsx)("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"3"}),Object(g.jsx)("feOffset",{dx:"2",dy:"2",result:"offsetblur"}),Object(g.jsx)("feComponentTransfer",{children:Object(g.jsx)("feFuncA",{type:"linear",slope:"0.5"})}),Object(g.jsxs)("feMerge",{children:[Object(g.jsx)("feMergeNode",{}),Object(g.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),Object(g.jsx)("path",{d:"M".concat(c,",0  Q").concat(s,",200 ").concat(c,",400 ").concat(A),fill:"none",stroke:n,strokeWidth:"10"})]}),d='<?xml version="1.0" standalone="no"?>\n'+te.a.renderToStaticMarkup(l);console.log("htmlString",d);var h=encodeURIComponent(d),j="data:image/svg+xml;charset=utf-8,";return console.log("b64Start",j+h),{svg_bg:j+h,svg_width:t,svg_height:t*(r>1200?r/1200:1200/r),blk_height:t*(400/1200)}},e}return Object(h.a)(i,[{key:"componentDidMount",value:function(){this.configure_svg_bg(),window.addEventListener("resize",this.resizeBgSVG)}},{key:"componentDidUpdate",value:function(e,t,i){var n;(null===e||void 0===e?void 0:e.theme_mode)!=(null===(n=this.props)||void 0===n?void 0:n.theme_mode)&&this.configure_svg_bg()}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"projects-component",id:"projects","theme-mode":this.props.theme_mode,children:Object(g.jsx)("div",{className:"bg_img",style:{backgroundImage:"url(".concat(this.state.svg_bg,")"),width:this.state.svg_width,height:this.state.svg_height},"theme-mode":this.props.theme_mode,children:Object(g.jsx)("div",{className:"container-fluid","theme-mode":this.props.theme_mode,children:this.timeline.map((function(t,i){return Object(g.jsx)(U,{children:Object(g.jsx)("div",{className:"project_blk",style:{height:e.state.blk_height},"theme-mode":e.props.theme_mode,children:Object(g.jsxs)("div",{className:"row ".concat(i%2==0?"left_aligned_img":"right_aligned_img"),children:[Object(g.jsx)("div",{className:"col-md-5 project_img",children:Object(g.jsxs)("p",{className:"img_wrapper",children:[Object(g.jsx)("img",{src:ie,className:"desktop_cover"}),Object(g.jsx)("img",{src:t.image,className:"project_thumbnail"})]})}),Object(g.jsx)("div",{className:"col-md-2 project_date_time_wrap",children:Object(g.jsx)("div",{className:"project_date_time",children:Object(g.jsx)("div",{children:t.description.date_time.split("\n").map((function(e){return Object(g.jsxs)("p",{children:[e," "]})}))})})}),Object(g.jsx)("div",{className:"col-md-5 project_desc","theme-mode":e.props.theme_mode,children:Object(g.jsxs)("div",{className:"project_desc_content",children:[Object(g.jsx)("h1",{children:t.description.title}),t.description.descriptions.map((function(e){return Object(g.jsx)("p",{children:e.split("\n")})}))]})})]})})})}))})})})}}]),i}(c.Component),ae=Object(l.b)((function(e){return{theme_mode:e.theme}}))(Ae),re=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"home-component",children:[Object(g.jsxs)(U,{children:[" ",Object(g.jsx)(B,{})," "]}),Object(g.jsxs)(U,{children:["  ",Object(g.jsx)($,{}),"  "]}),Object(g.jsxs)(U,{children:[" ",Object(g.jsx)(ae,{}),"  "]})]})}}]),i}(c.Component);var le=function(){var e=Object(l.c)((function(e){return e.theme}));return Object(g.jsx)(re,{"theme-data":e})};var de=function(){var e=Object(l.c)((function(e){return e.theme}));return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Page1"}),Object(g.jsx)(re,{"theme-data":e})]})},he=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){return Object(g.jsx)("h1",{children:"Page2"})}}]),i}(c.Component),je=T(function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){return Object(g.jsxs)(r.c,{children:[Object(g.jsx)(r.a,{path:"/",exact:!0,component:le}),Object(g.jsx)(r.a,{path:"/test1",component:de}),Object(g.jsx)(r.a,{path:"/test2",exact:!0,component:he})]})}}]),i}(c.Component));Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CI=!1;var me=function(){var e=Object(l.c)((function(e){return e.theme}));return Object(c.useEffect)((function(){document.title="Portfolio"}),[]),Object(g.jsx)("div",{className:"App","theme-mode":e,children:Object(g.jsx)(a.a,{children:Object(g.jsx)(r.c,{children:Object(g.jsx)(r.a,{path:"",component:je})})})})},pe=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,107)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),s(e),o(e)}))},be=i(21),ue=i(75),Oe="light",ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_THEME":return t.payload;case"RESET_THEME":return Oe;default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_R2":return t.payload;case"RESET_R2":return null;default:return e}},ve=i(43),fe=i(76),we={key:"root",storage:i.n(fe).a},ke=Object(be.b)({theme:ge,data_2:xe}),Re=Object(ve.a)(we,ke),Se=i(77),Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25})||be.c,Ke=Object(be.d)(Re,Ie(Object(be.a)(ue.a))),ye=Object(ve.b)(Ke);A.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(l.a,{store:Ke,children:Object(g.jsx)(Se.a,{persistor:ye,children:Object(g.jsx)(me,{})})})}),document.getElementById("root")),pe()},85:function(e,t,i){},86:function(e,t,i){},91:function(e,t,i){},95:function(e,t,i){},96:function(e,t,i){},97:function(e,t,i){},98:function(e,t,i){}},[[104,1,2]]]);
//# sourceMappingURL=main.70b18589.chunk.js.map