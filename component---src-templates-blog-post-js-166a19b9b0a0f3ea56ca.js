(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(e,t,a){"use strict";a.r(t);a(34);var A=a(5),n=a.n(A),i=a(0),r=a.n(i),o=a(157),c=a(192),l=a.n(c),s=a(232),m=a.n(s),d=(a(178),a(166)),u=a(164),g="https://github.com/jay-hankins/jayhankins.me/tree/master/content/blog",p=function(e){var t=e.slug;return r.a.createElement("div",{className:"PGPInfo"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:""+g+t},"View Post Source")),r.a.createElement("li",null,r.a.createElement("a",{href:""+g+t+"index.md.asc"},"View PGP Signature"))))},E=a(158),h=a(55),f=a(246),y=a.n(f);a.d(t,"pageQuery",function(){return b});var w=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,A=a.previous,n=a.next;return r.a.createElement(d.a,{location:this.props.location,title:t},r.a.createElement(u.a,{title:e.frontmatter.title,description:e.excerpt}),r.a.createElement("h1",null,e.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(E.b)(-.2),{display:"block",marginBottom:Object(E.a)(1),marginTop:Object(E.a)(-1)})},e.frontmatter.date),r.a.createElement(h.a.Consumer,null,function(t){return r.a.createElement(y.a,{transitionName:"cross-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},r.a.createElement("div",{key:t.darkMode},r.a.createElement(l.a,{value:m()(e.frontmatter.title),displayValue:!1,height:25,width:1.5,margin:0,background:t.darkMode?"#2a2b2d":"#ffffff",lineColor:t.darkMode?"#F2A300":"#2a2b2d"})))}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),r.a.createElement("hr",{style:{marginBottom:Object(E.a)(1)}}),r.a.createElement(p,{slug:e.fields.slug}),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,A&&r.a.createElement(o.a,{to:A.fields.slug,rel:"prev"},"← ",A.frontmatter.title)),r.a.createElement("li",null,n&&r.a.createElement(o.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(r.a.Component),b=(t.default=w,"2721321469")},157:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var A=a(0),n=a.n(A),i=a(4),r=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(159);var l=n.a.createContext({}),s=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},158:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return d});var A=a(172),n=a.n(A),i=a(173),r=a.n(i),o=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],c=[].concat(o),l=["IBM Plex Sans"].concat(o);r.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},body:{color:"#333"},h1:{fontFamily:l.join(","),fontWeight:600},h2:{fontWeight:600},h3:{fontWeight:600},p:{}}},delete r.a.googleFonts,r.a.headerFontFamily=l,r.a.bodyFontFamily=c;var s=new n.a(r.a);var m=s.rhythm,d=s.scale},159:function(e,t,a){var A;e.exports=(A=a(161))&&A.default||A},161:function(e,t,a){"use strict";a.r(t);a(34);var A=a(0),n=a.n(A),i=a(4),r=a.n(i),o=a(56),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAG1BMVEUAAACAgIDAwMD///8AAAAAAIAAAP+AgAD//wCgvZcpAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhoANCHQ/7HbAAAAqUlEQVQ4y93SsQ3CMBAFULMBF2cBbgUWcKKQAZC8gtNTpaYIjI05xyaxvzsauPI/fZ9OslJ/NQcignnDzFTJkegzB8kf1Bwlq2muiAcsmrutHDdwoST9qd3AaKNQTztwqxB1GQQhACIIbottEEx3564I5io8vgbTE4J1bl5K8Jd5SQ2ToF0lwKeg1BAkgFGFCAz7jyIiYFQpEEQgiEB4S7E7Cs69VPIfnhcEe0eClgGH3wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo1MjozMy0wNDowMEq1nrQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NTI6MzMtMDQ6MDA76CYIAAAAAElFTkSuQmCC"},163:function(e,t){e.exports="data:image/png;base64,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"},164:function(e,t,a){"use strict";var A=a(165),n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(174),l=a.n(c),s=a(157);function m(e){var t=e.description,a=e.lang,n=e.meta,r=e.keywords,o=e.title;return i.a.createElement(s.b,{query:d,render:function(e){var A=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"charSet",content:"utf-8"},{name:"description",content:A},{property:"og:title",content:o},{property:"og:description",content:A},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:A}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})},data:A})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},165:function(e){e.exports={data:{site:{siteMetadata:{title:"jhankins.dev",description:"Jay Hankins is a software engineer and this is his blog.",author:"Jay Hankins"}}}}},166:function(e,t,a){"use strict";var A=a(5),n=a.n(A),i=a(0),r=a.n(i),o=a(157),c=a(158),l=(a(149),a(55)),s=a(162),m=a.n(s),d=a(163),u=a.n(d),g=a(167),p=g.a.footer.withConfig({displayName:"Footer__FancyFooter",componentId:"sc-1gi1jxo-0"})(["background-color:#2a2b2d;color:white;"]),E=g.a.p.withConfig({displayName:"Footer__Ffp",componentId:"sc-1gi1jxo-1"})(["margin:0;font-size:small;"]),h=g.a.a.withConfig({displayName:"Footer__Ffa",componentId:"sc-1gi1jxo-2"})(["color:white;"]),f=function(e){return r.a.createElement(p,{theme:!0},r.a.createElement("div",{style:{marginLeft:"10%",marginRight:"10%",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},r.a.createElement(E,null,"© ",(new Date).getFullYear()," Jay Hankins"),r.a.createElement(E,null,"Except where otherwise noted, content on this site is licensed under a",r.a.createElement("br",null)," ",r.a.createElement(h,{href:"http://creativecommons.org/licenses/by-sa/4.0/"},"Creative Commons Attribution-ShareAlike 4.0 International License"),".")))},y=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=(t.location,t.title),A=t.children;return e=r.a.createElement("h3",{style:{marginTop:0,fontWeight:500}},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),r.a.createElement(l.a.Consumer,null,function(t){return r.a.createElement("div",{className:t.darkMode?"dark-mode":"light-mode",style:{display:"flex",flexDirection:"column",minHeight:"100vh"}},r.a.createElement("div",{style:{flex:"1"}},r.a.createElement("div",{style:{marginLeft:"10%",marginRight:"10%",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e,r.a.createElement("button",{className:"darkmode-switcher",onClick:t.toggleDarkMode},t.darkMode?r.a.createElement("div",null,r.a.createElement("span",{className:"darkmode-label"},"Light mode"),r.a.createElement("span",{className:"emoji"},"️",r.a.createElement("img",{src:u.a,alt:"Wake Icon"}))):r.a.createElement("div",null,r.a.createElement("span",{className:"darkmode-label"},"Dark mode"),r.a.createElement("span",{className:"emoji"},"️",r.a.createElement("img",{src:m.a,alt:"Windows 98 Standby Icon"})))),A,r.a.createElement("hr",null))),r.a.createElement(f,{theme:!0}))})},t}(r.a.Component);t.a=y},178:function(e,t,a){"use strict";a(179),a(181),a(0),a(157),a(182),a(158)},181:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIE/9oADAMBAAIQAxAAAAHOs1rc3EgJs+zTl4LP/8QAGRAAAwEBAQAAAAAAAAAAAAAAAQIRAAME/9oACAEBAAEFAkFLcyhZ9yMc1tCN5gBxmp3/xAAXEQEAAwAAAAAAAAAAAAAAAAAAARAS/9oACAEDAQE/AWk1/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAIQEf/aAAgBAgEBPwFiNf/EABwQAAICAgMAAAAAAAAAAAAAAAABAhEQISJBgf/aAAgBAQAGPwI3XhoVKxpROSZGu1n/xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMWFxUf/aAAgBAQABPyGoDlyBtha1NTpE1seDYT0vKiihvkoIGi/ZQbCd0//aAAwDAQACAAMAAAAQv8gA/8QAGREBAQEAAwAAAAAAAAAAAAAAAREAECFR/9oACAEDAQE/EBAvmp7ubXj/xAAXEQEBAQEAAAAAAAAAAAAAAAARAAEh/9oACAECAQE/EB0ubOEX/8QAHBABAQADAQADAAAAAAAAAAAAAREAITFBUXGB/9oACAEBAAE/EGZ7AbncbRDGjz4/MoQgRuLcZEoIccwq7cqGByfWSU/j4y7Jo203uC4BcaJWf//Z",width:50,height:50,src:"/static/a3ce3e51478e47ec4d8f1371c7914e14/c15d6/profile-pic.jpg",srcSet:"/static/a3ce3e51478e47ec4d8f1371c7914e14/c15d6/profile-pic.jpg 1x,\n/static/a3ce3e51478e47ec4d8f1371c7914e14/43c20/profile-pic.jpg 1.5x,\n/static/a3ce3e51478e47ec4d8f1371c7914e14/da97e/profile-pic.jpg 2x,\n/static/a3ce3e51478e47ec4d8f1371c7914e14/3e75a/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Jay Hankins",social:{twitter:"jay_hankins"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-166a19b9b0a0f3ea56ca.js.map