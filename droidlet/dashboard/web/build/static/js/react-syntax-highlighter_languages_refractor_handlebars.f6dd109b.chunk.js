(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[51,81],{404:function(e,n,a){"use strict";function t(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,o,r){if(a.language===t){var s=a.tokenStack=[];a.code=a.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,i=s.length;-1!==a.code.indexOf(o=n(t,i));)++i;return s[i]=e,o})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var o=0,r=Object.keys(a.tokenStack);!function s(i){for(var l=0;l<i.length&&!(o>=r.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=r[o],p=a.tokenStack[c],g="string"===typeof u?u:u.content,d=n(t,c),f=g.indexOf(d);if(f>-1){++o;var k=g.substring(0,f),b=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),h=g.substring(f+d.length),m=[];k&&m.push.apply(m,s([k])),m.push(b),h&&m.push.apply(m,s([h])),"string"===typeof u?i.splice.apply(i,[l,1].concat(m)):u.content=m}}else u.content&&s(u.content)}return i}(a.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]},496:function(e,n,a){"use strict";var t=a(404);function o(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=o,o.displayName="handlebars",o.aliases=[]}}]);