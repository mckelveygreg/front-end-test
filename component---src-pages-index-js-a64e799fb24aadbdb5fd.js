(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{130:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(161),o=n(155),l=(n(67),n(47),n(384)),c=n(255),s=n(132),d=Object(s.b)(l.b).withConfig({displayName:"contactForm__StyledForm",componentId:"sc-1mpgppg-0"})(["display:grid;grid-template-columns:1fr 3fr;grid-gap:10px;padding:2rem;textarea{height:100px;border-radius:5px;font-family:inherit;font-weight:bold;}label{text-align:right;}input{width:250px;border-radius:5px;}button{margin:0 auto;width:250px;grid-column:1 / 3;background:#2b2b2b;border:none;height:3rem;border-radius:5px;box-shadow:0px 1px 5px #333;color:white;}"]),m=function(e){var t=e.className;return i.a.createElement("div",null,i.a.createElement(l.c,{className:t,initialValues:{name:"",email:"",phone:"",message:""},validationSchema:c.object().shape({name:c.string().required("IDENTIFY YOURSELF!"),email:c.string().email("We can't hire you without a proper email").required("We can't hire you without a proper email")}),onSubmit:!0,render:function(e){e.values,e.touched,e.errors,e.dirty;var t=e.isSubmitting;return i.a.createElement(d,null,i.a.createElement("label",{htmlFor:"name"},"Full Name:"),i.a.createElement(l.a,{id:"name",type:"text",name:"name",required:!0}),i.a.createElement("label",null,"Email:"),i.a.createElement(l.a,{type:"email",name:"email",label:"Email",required:!0}),i.a.createElement("label",null,"Phone Number:"),i.a.createElement(l.a,{type:"phone",name:"phone"}),i.a.createElement("label",null,"Anything you would like us to know?"),i.a.createElement(l.a,{component:"textarea",name:"message",placeholder:"I love learning! ;)",required:!0}),i.a.createElement("label",null,"Upload Resume =>"),i.a.createElement("input",{type:"file",required:!0}),i.a.createElement("label",null,"Upload Cover Letter =>"),i.a.createElement("input",{type:"file",required:!0}),i.a.createElement("button",{type:"submit",disabled:t},"Submit"))}}))},u=n(383),p=n(133),f=s.b.div.withConfig({displayName:"careers__StyledCareers",componentId:"sc-1osur7-0"})(["padding:0 2rem;@media (max-width:800px){padding:0;}"]),h=function(){return i.a.createElement(p.StaticQuery,{query:"221861638",render:function(e){return i.a.createElement(f,{dangerouslySetInnerHTML:{__html:e.markdownRemark.html}})},data:u})};t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement(h,null),i.a.createElement(m,null))}},133:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(131),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(137),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(28);n.d(t,"parsePath",function(){return m.a});var u=i.a.createContext({}),p=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},137:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},152:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(46),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,n){e.exports=n.p+"static/trifoia-full-color-rgb-6d1c7660dfcb9464632a4379f1a375e3.png"},154:function(e,t){e.exports="data:image/svg+xml;base64,77u/PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIHZpZXdCb3g9JzAgMCA4MDAgNDAwJz48cmVjdCBmaWxsPScjZmZmZmZmJyB3aWR0aD0nODAwJyBoZWlnaHQ9JzQwMCcvPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0nYScgY3g9JzM5NicgY3k9JzI4MScgcj0nNTE0JyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZSc+PHN0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPScjNmNlYjc0Jy8+PHN0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPScjZmZmZmZmJy8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9J2InIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyB4MT0nNDAwJyB5MT0nMTQ4JyB4Mj0nNDAwJyB5Mj0nMzMzJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNGQTMnIHN0b3Atb3BhY2l0eT0nMCcvPjxzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nI0ZBMycgc3RvcC1vcGFjaXR5PScwLjUnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSd1cmwoI2EpJyB3aWR0aD0nODAwJyBoZWlnaHQ9JzQwMCcvPjxnIGZpbGwtb3BhY2l0eT0nMC40Jz48Y2lyY2xlIGZpbGw9J3VybCgjYiknIGN4PScyNjcuNScgY3k9JzYxJyByPSczMDAnLz48Y2lyY2xlIGZpbGw9J3VybCgjYiknIGN4PSc1MzIuNScgY3k9JzYxJyByPSczMDAnLz48Y2lyY2xlIGZpbGw9J3VybCgjYiknIGN4PSc0MDAnIGN5PSczMCcgcj0nMzAwJy8+PC9nPjwvc3ZnPg=="},155:function(e,t,n){"use strict";var a=n(156),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(175),s=n.n(c),d=n(133);function m(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,l=e.title;return r.a.createElement(d.StaticQuery,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var u="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},161:function(e,t,n){"use strict";var a=n(150),i=n.n(a),r=n(151),o=n(0),l=n.n(o),c=n(4),s=n.n(c),d=n(133),m=n(132),u=m.b.hr.withConfig({displayName:"separator__SeparatorHr",componentId:"aimypd-0"})(["width:3px;height:2.5rem;background:linear-gradient(to right,#fff,#00000000,#00000000,#fff),linear-gradient(#fff,#00000000,#fff),linear-gradient(#7497E1,#7497E1);border:none;@media (max-width:800px){width:80%;height:1px;}"]),p=function(){return l.a.createElement(u,null)},f=m.b.ul.withConfig({displayName:"navbar__NavList",componentId:"sc-1lkjaee-0"})(["list-style:none;margin:auto;display:flex;align-items:center;justify-content:space-evenly;max-width:600px;padding:0;padding-bottom:1rem;@media (max-width:800px){flex-direction:column;}"]),h=m.b.li.withConfig({displayName:"navbar__NavLi",componentId:"sc-1lkjaee-1"})(["display:inline-block;margin-right:1rem;"]),g=m.b.a.withConfig({displayName:"navbar__Link",componentId:"sc-1lkjaee-2"})(["color:#2b2b2b;text-decoration:none;"]),y=function(e){return l.a.createElement(h,null,l.a.createElement(g,{href:e.to},e.children))},b=function(){return l.a.createElement("div",null,l.a.createElement(f,null,l.a.createElement(y,{to:"https://trifori.com/who-we-are"},"Who We Are"),l.a.createElement(p,null),l.a.createElement(y,{to:"https://trifori.com/what-we-do"},"What We Do"),l.a.createElement(p,null),l.a.createElement(y,{to:"https://trifori.com/how-we-do-it"},"How We Do It"),l.a.createElement(p,null),l.a.createElement(y,{to:"https://trifori.com/whats-happening"},"What's Happening")))},w=n(153),x=n.n(w),v=n(173),E=n(174),S=m.b.div.withConfig({displayName:"contact__ContactContainer",componentId:"sc-14l232v-0"})(["display:grid;float:right;align-items:center;grid-template-columns:repeat(3,auto);grid-gap:10px;margin-right:10%;@media (max-width:800px){margin:0 auto;}"]),k=m.b.a.withConfig({displayName:"contact__A",componentId:"sc-14l232v-1"})(["text-decoration:none;color:black;margin:10px;& svg{font-size:3rem;@media (max-width:800px){font-size:2rem;}}"]),C=function(){return l.a.createElement("div",{className:"socMeds"},l.a.createElement(k,{href:"https://www.facebook.com/trifoia",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(v.a,{icon:E.a,color:"#3b5998"})),l.a.createElement(k,{href:"https://www.linkedin.com/company/trifoia/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(v.a,{icon:E.b,color:"#0077B5"})),l.a.createElement(k,{href:"https://twitter.com/TeamTrifoia",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(v.a,{icon:E.c,color:"#38A1F3"})))},P=function(){return l.a.createElement(S,null,l.a.createElement(k,{href:"https://trifoia.com/say-hello"},"Say Hello"),l.a.createElement(p,null),l.a.createElement(C,null))},M=m.b.header.withConfig({displayName:"header__HeaderStyled",componentId:"sc-31ozxh-0"})(["margin:0 auto;padding-top:2rem;position:sticky;top:0;background:white;@media (max-width:800px){display:flex;flex-direction:column;justify-content:center;}"]),N=m.b.img.withConfig({displayName:"header__Trifoia",componentId:"sc-31ozxh-1"})(["max-width:250px;margin-left:15%;@media (max-width:800px){margin:0 auto;}"]),j=function(e){e.siteTitle;return l.a.createElement(M,null,l.a.createElement("a",{href:"https://trifoia.com"},l.a.createElement(N,{src:x.a,alt:"Trifoia"})),l.a.createElement(P,null),l.a.createElement(b,null))};j.propTypes={siteTitle:s.a.string},j.defaultProps={siteTitle:""};var z=j,T=m.b.footer.withConfig({displayName:"footer__StyledFooter",componentId:"r54yyk-0"})(["display:flex;justify-content:space-between;padding:1rem 2rem;background:#202121;color:#ccc;.footerLinks{display:flex;flex-direction:column;a{text-decoration:none;color:#ccc;font-size:1rem;}}.footerCopyright{font-size:1rem;text-align:right;margin-top:auto;}"]),I=function(){return l.a.createElement(T,null,l.a.createElement("div",{className:"footerLinks"},l.a.createElement("a",{href:"https://trifoia.com/terms-of-use"},"Terms of Use"),l.a.createElement("a",{href:"https://trifoia.com/privacy-policy"},"Privacy Policy"),l.a.createElement("a",{href:"https://trifoia.com/coi-policy"},"COI Policy"),l.a.createElement("a",{href:(void 0).props.location},"Careers"),l.a.createElement("a",{href:"https://trifoia.com/projects"},"Projects")),l.a.createElement("p",{className:"footerCopyright"},"© 2018 Trifoia. All rights reserved."))},J=n(154),W=n.n(J);function G(){var e=i()(["\n  @import url('https://fonts.googleapis.com/css?family=Thasadith');\n\n  html,\n  body {\n    font-family: 'Thasadith', sans-serif;\n    font-size: 15px;\n    margin: 0;\n    background-image: url(",");\n    background-size: cover;\n    box-sizing: border-box;\n  }\n\n  p,\n  a,\n  label {\n    font-size: 1.25rem;\n  }\n  li,\n  input,\n  textarea,\n  button {\n    font-size: 1.1rem;\n    font-family: 'Thasadith', sans-serif;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  h2 {\n    font-size: 1.7rem;\n  }\n\n  h3 {\n    font-size: 1.5rem;\n  }\n\n  body {\n  }\n  @media (max-width: 800px) {\n    label, textarea, input, button {\n      font-size:1rem;\n    }\n  }\n"]);return G=function(){return e},e}var Z=m.b.div.withConfig({displayName:"layout__StyledLayout",componentId:"ii2kc2-0"})(["margin:0 auto;max-width:840px;background:#ffffffb0;"]),D=function(e){var t=e.children;return l.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement(z,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(Z,null,t,l.a.createElement(I,null)))},data:r})};D.propTypes={children:s.a.node.isRequired};var A=Object(m.a)(G(),W.a);t.a=D},383:function(e){e.exports={data:{markdownRemark:{html:"<h1>Work with Trifoia</h1>\n<h2>About Trifoia</h2>\n<p>Trifoia is an equal opportunity employer committed to cultural diversity. Trifoia encourages all qualified individuals to apply, and does not discriminate on the basis of any protected status, including race, gender, veteran and disability status.</p>\n<h2>Trifoia is proud to offer a robust benefits package to eligible employees, including health insurance, retirement plans and paid time off.</h2>\n<h2>Current Open Positions</h2>\n<h3>Front End Developer</h3>\n<p>We are currently looking for a Front-End Developer who can advance our mission to craft exceptional digital learning experiences. We build media-rich websites and mobile applications for customers in need of customized training. The Front-End Developer will be responsible for programming and maintaining all aspects of the project’s front-end, user facing components. You will work closely with the Production Department and internal clients in the Research and Design Department to ensure delivery of quality projects that are on time and on budget.</p>\n<p>The Front-End Developer has a deep understanding of responsive design principles (mobile first development); test driven development; development for accessibility, usability, and design; agile development practices; and predicting time required for projects. Strong competency in working collaboratively with small, diverse teams, working against tight deadlines, time management and tracking, attention to detail, and a growth mindset are required.</p>\n<p>Reports to: Director of Production</p>\n<p>Classification: Full-time non-exempt</p>\n<p>Skills and Qualifications:</p>\n<ul>\n<li>\n<p>Demonstrable Skill Using the Following Systems:</p>\n<ul>\n<li>HTML</li>\n<li>HTML Preprocessors (PUG, EJS)</li>\n<li>CSS</li>\n<li>CSS Methodologies (BEM, SMACSS, OOCSS)</li>\n<li>CSS preprocessors (LESS, SCSS, PostCSS)</li>\n<li>Modern CSS (Flexbox, Grid)</li>\n<li>Modern JavaScript (ES6+)</li>\n<li>Classic JavaScript (ES5)</li>\n<li>Browser technology and quirks (Chrome, Safari, IE)</li>\n<li>Build Tools (Make, Gulp, NPM Scripts)</li>\n<li>Asset Bundlers (WebPack, Browserify)</li>\n<li>Testing Frameworks (Mocha, Karma)</li>\n<li>Git and GitHub</li>\n<li>Microsoft Office Suite (Word, Excel, Outlook)</li>\n<li>Remote working and communication tools (GoToMeeting, Slack, Asana)</li>\n<li>Adobe Creative Suite</li>\n</ul>\n</li>\n<li>\n<p>Familiarity with the Following Systems:</p>\n<ul>\n<li>Node.js</li>\n<li>NPM</li>\n<li>Wordpress</li>\n<li>Virtual Machines (Virtual Box)</li>\n<li>Video Streaming (dashjs)</li>\n</ul>\n</li>\n<li>\n<p>Skill / Familiarity with these systems is a bonus:</p>\n<ul>\n<li>AWS (S3, EC2, CodeBuild, CodePipeline, etc)</li>\n<li>Wordpress Theme Development</li>\n<li>PHP</li>\n<li>Ubuntu Server</li>\n<li>xAPI</li>\n<li>Learning Management Systems (Litmos, Canvas)</li>\n<li>Learning Record Stores (Learning Locker)</li>\n</ul>\n</li>\n</ul>\n<p>To Apply:\nThis position is OPEN UNTIL FILLED</p>\n<p>Please fill out the form below to apply. Don’t forget to attach your resume, cover letter and provide a link to your portfolio.</p>\n<h2>If you are selected for the candidate pool you will be asked to complete a skills assessment.</h2>\n<h2>Interested?</h2>\n<p>Trifoia is a team of content developers, instructional designers, technology experts, researchers, media producers, and storytellers who produce training content for maximum impact and reach.</p>\n<p>Do you like to analyze problems and build solutions? Do you feel you have more to offer and would like to contribute to projects that help people? Do you take your work seriously but like to play and enjoy life?</p>\n<p>If so, attach your resume and cover letter and drop us a line through the contact form below.</p>"}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-a64e799fb24aadbdb5fd.js.map