(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(133),o=n(161),c=n(155);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},133:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(131),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(137),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},137:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},152:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(46),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,n){e.exports=n.p+"static/trifoia-full-color-rgb-6d1c7660dfcb9464632a4379f1a375e3.png"},154:function(e,t){e.exports="data:image/svg+xml;base64,77u/PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIHZpZXdCb3g9JzAgMCA4MDAgNDAwJz48cmVjdCBmaWxsPScjZmZmZmZmJyB3aWR0aD0nODAwJyBoZWlnaHQ9JzQwMCcvPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0nYScgY3g9JzM5NicgY3k9JzI4MScgcj0nNTE0JyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZSc+PHN0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPScjNmNlYjc0Jy8+PHN0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPScjZmZmZmZmJy8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9J2InIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyB4MT0nNDAwJyB5MT0nMTQ4JyB4Mj0nNDAwJyB5Mj0nMzMzJz48c3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyNGQTMnIHN0b3Atb3BhY2l0eT0nMCcvPjxzdG9wIG9mZnNldD0nMScgc3RvcC1jb2xvcj0nI0ZBMycgc3RvcC1vcGFjaXR5PScwLjUnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSd1cmwoI2EpJyB3aWR0aD0nODAwJyBoZWlnaHQ9JzQwMCcvPjxnIGZpbGwtb3BhY2l0eT0nMC40Jz48Y2lyY2xlIGZpbGw9J3VybCgjYiknIGN4PScyNjcuNScgY3k9JzYxJyByPSczMDAnLz48Y2lyY2xlIGZpbGw9J3VybCgjYiknIGN4PSc1MzIuNScgY3k9JzYxJyByPSczMDAnLz48Y2lyY2xlIGZpbGw9J3VybCgjYiknIGN4PSc0MDAnIGN5PSczMCcgcj0nMzAwJy8+PC9nPjwvc3ZnPg=="},155:function(e,t,n){"use strict";var a=n(156),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(175),s=n.n(l),m=n(133);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(m.StaticQuery,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var u="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},161:function(e,t,n){"use strict";var a=n(150),r=n.n(a),i=n(151),o=n(0),c=n.n(o),l=n(4),s=n.n(l),m=n(133),d=n(132),u=d.b.hr.withConfig({displayName:"separator__SeparatorHr",componentId:"aimypd-0"})(["width:3px;height:2.5rem;background:linear-gradient(to right,#fff,#00000000,#00000000,#fff),linear-gradient(#fff,#00000000,#fff),linear-gradient(#7497E1,#7497E1);border:none;@media (max-width:800px){width:80%;height:1px;}"]),p=function(){return c.a.createElement(u,null)},f=d.b.ul.withConfig({displayName:"navbar__NavList",componentId:"sc-1lkjaee-0"})(["list-style:none;margin:auto;display:flex;align-items:center;justify-content:space-evenly;max-width:600px;padding:0;padding-bottom:1rem;@media (max-width:800px){flex-direction:column;}"]),y=d.b.li.withConfig({displayName:"navbar__NavLi",componentId:"sc-1lkjaee-1"})(["display:inline-block;margin-right:1rem;"]),h=d.b.a.withConfig({displayName:"navbar__Link",componentId:"sc-1lkjaee-2"})(["color:#2b2b2b;text-decoration:none;"]),g=function(e){return c.a.createElement(y,null,c.a.createElement(h,{href:e.to},e.children))},b=function(){return c.a.createElement("div",null,c.a.createElement(f,null,c.a.createElement(g,{to:"https://trifori.com/who-we-are"},"Who We Are"),c.a.createElement(p,null),c.a.createElement(g,{to:"https://trifori.com/what-we-do"},"What We Do"),c.a.createElement(p,null),c.a.createElement(g,{to:"https://trifori.com/how-we-do-it"},"How We Do It"),c.a.createElement(p,null),c.a.createElement(g,{to:"https://trifori.com/whats-happening"},"What's Happening")))},w=n(153),x=n.n(w),v=n(173),E=n(174),z=d.b.div.withConfig({displayName:"contact__ContactContainer",componentId:"sc-14l232v-0"})(["display:grid;float:right;align-items:center;grid-template-columns:repeat(3,auto);grid-gap:10px;margin-right:10%;@media (max-width:800px){margin:0 auto;}"]),k=d.b.a.withConfig({displayName:"contact__A",componentId:"sc-14l232v-1"})(["text-decoration:none;color:black;margin:10px;& svg{font-size:3rem;@media (max-width:800px){font-size:2rem;}}"]),j=function(){return c.a.createElement("div",{className:"socMeds"},c.a.createElement(k,{href:"https://www.facebook.com/trifoia",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(v.a,{icon:E.a,color:"#3b5998"})),c.a.createElement(k,{href:"https://www.linkedin.com/company/trifoia/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(v.a,{icon:E.b,color:"#0077B5"})),c.a.createElement(k,{href:"https://twitter.com/TeamTrifoia",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(v.a,{icon:E.c,color:"#38A1F3"})))},P=function(){return c.a.createElement(z,null,c.a.createElement(k,{href:"https://trifoia.com/say-hello"},"Say Hello"),c.a.createElement(p,null),c.a.createElement(j,null))},C=d.b.header.withConfig({displayName:"header__HeaderStyled",componentId:"sc-31ozxh-0"})(["margin:0 auto;padding-top:2rem;position:sticky;top:0;background:white;@media (max-width:800px){display:flex;flex-direction:column;justify-content:center;}"]),J=d.b.img.withConfig({displayName:"header__Trifoia",componentId:"sc-31ozxh-1"})(["max-width:250px;margin-left:15%;@media (max-width:800px){margin:0 auto;}"]),N=function(e){e.siteTitle;return c.a.createElement(C,null,c.a.createElement("a",{href:"https://trifoia.com"},c.a.createElement(J,{src:x.a,alt:"Trifoia"})),c.a.createElement(P,null),c.a.createElement(b,null))};N.propTypes={siteTitle:s.a.string},N.defaultProps={siteTitle:""};var Z=N,M=d.b.footer.withConfig({displayName:"footer__StyledFooter",componentId:"r54yyk-0"})(["display:flex;justify-content:space-between;padding:1rem 2rem;background:#202121;color:#ccc;.footerLinks{display:flex;flex-direction:column;a{text-decoration:none;color:#ccc;font-size:1rem;}}.footerCopyright{font-size:1rem;text-align:right;margin-top:auto;}"]),G=function(){return c.a.createElement(M,null,c.a.createElement("div",{className:"footerLinks"},c.a.createElement("a",{href:"https://trifoia.com/terms-of-use"},"Terms of Use"),c.a.createElement("a",{href:"https://trifoia.com/privacy-policy"},"Privacy Policy"),c.a.createElement("a",{href:"https://trifoia.com/coi-policy"},"COI Policy"),c.a.createElement("a",{href:Document.URL},"Careers"),c.a.createElement("a",{href:"https://trifoia.com/projects"},"Projects")),c.a.createElement("p",{className:"footerCopyright"},"© 2018 Trifoia. All rights reserved."))},S=n(154),I=n.n(S);function W(){var e=r()(["\n  @import url('https://fonts.googleapis.com/css?family=Thasadith');\n\n  html,\n  body {\n    font-family: 'Thasadith', sans-serif;\n    font-size: 15px;\n    margin: 0;\n    background-image: url(",");\n    background-size: cover;\n    box-sizing: border-box;\n  }\n\n  p,\n  a,\n  label {\n    font-size: 1.25rem;\n  }\n  li,\n  input,\n  textarea,\n  button {\n    font-size: 1.1rem;\n    font-family: 'Thasadith', sans-serif;\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  h2 {\n    font-size: 1.7rem;\n  }\n\n  h3 {\n    font-size: 1.5rem;\n  }\n\n  body {\n  }\n  @media (max-width: 800px) {\n    label, textarea, input, button {\n      font-size:1rem;\n    }\n  }\n"]);return W=function(){return e},e}var T=d.b.div.withConfig({displayName:"layout__StyledLayout",componentId:"ii2kc2-0"})(["margin:0 auto;max-width:840px;background:#ffffffb0;"]),Y=function(e){var t=e.children;return c.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,null),c.a.createElement(Z,{siteTitle:e.site.siteMetadata.title}),c.a.createElement(T,null,t,c.a.createElement(G,null)))},data:i})};Y.propTypes={children:s.a.node.isRequired};var A=Object(d.a)(W(),I.a);t.a=Y}}]);
//# sourceMappingURL=component---src-pages-page-2-js-3585b9d6741d277ccecf.js.map