import{_ as n}from"./grammar.a4337400.js";import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as m,a as e,b as t,d as a,w as c,r as o}from"./app.a9756049.js";const h={},d=e("h3",{id:"grammar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#grammar","aria-hidden":"true"},"#"),t(" Grammar")],-1),f=e("p",null,[t("When you load a file, Atom does a little work to try to figure out what type of file it is. Largely this is accomplished by looking at its file extension ("),e("code",null,".md"),t(" is generally a Markdown file, etc), though sometimes it has to inspect the content a bit to figure it out.")],-1),p=e("p",null,[t(`When you open a file and Atom can't determine a grammar for the file, it will default to "Plain Text", which is the simplest one. If it does default to "Plain Text", picks the wrong grammar for the file, or if for any reason you wish to change the selected grammar, you can pull up the Grammar Selector with `),e("kbd",{class:"platform-all"},"Ctrl+Shift+L"),t(".")],-1),u=e("p",null,[e("img",{src:n,alt:"Grammar Selector",title:"Grammar Selector"})],-1),_=e("p",null,"When the grammar of a file is changed, Atom will remember that for the current session.",-1),g={href:"https://github.com/atom/atom/tree/master/packages/grammar-selector",target:"_blank",rel:"noopener noreferrer"};function w(k,y){const r=o("RouterLink"),i=o("ExternalLinkIcon");return l(),m("div",null,[d,e("p",null,[t('The "grammar" of a file is what language Atom has associated with that file. Types of grammars would include "Java" or "GitHub-Flavored Markdown". We looked at this a bit when we created some snippets in '),a(r,{to:"/using-atom/sections/snippets/"},{default:c(()=>[t("Snippets")]),_:1}),t(".")]),f,p,u,_,e("p",null,[t("The Grammar Selector functionality is implemented in the "),e("a",g,[t("grammar-selector"),a(i)]),t(" package.")])])}const L=s(h,[["render",w],["__file","grammar.html.vue"]]);export{L as default};
