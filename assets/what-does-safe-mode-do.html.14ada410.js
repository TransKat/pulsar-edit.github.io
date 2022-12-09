import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,a as o,b as e,d as s,e as d,r as c}from"./app.a9756049.js";const r={},l=d('<h3 id="what-does-safe-mode-do" tabindex="-1"><a class="header-anchor" href="#what-does-safe-mode-do" aria-hidden="true">#</a> What does Safe Mode do?</h3><p>Atom&#39;s Safe Mode, which can be activated by completely exiting all instances of Atom and launching it again using the command <code>atom --safe</code> from the command line, does the following:</p><ol><li>Does <strong>not</strong> load any packages from <code>~/.atom/packages</code> or <code>~/.atom/dev/packages</code></li><li>Does <strong>not</strong> run your <code>init.coffee</code></li><li>Loads only default-installed themes</li></ol><p>The intent of Safe Mode is to determine if a problem is being caused by a community package or is caused by built-in functionality of Atom. Disabling the init script was added because people tend to use the init script as a mini-package of sorts by adding code, commands and other functionality that would normally be in a package.</p>',4),m={href:"http://flight-manual.atom.io/hacking-atom/sections/debugging/",target:"_blank",rel:"noopener noreferrer"};function f(h,g){const a=c("ExternalLinkIcon");return n(),i("div",null,[l,o("p",null,[e("For more information on Safe Mode, check the "),o("a",m,[e("debugging section"),s(a)]),e(".")])])}const _=t(r,[["render",f],["__file","what-does-safe-mode-do.html.vue"]]);export{_ as default};
