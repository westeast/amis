define("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/utils/strings",function(e,t){"use strict";function n(e,t){if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function r(e,t){var n=e.length-t.length;return n>0?e.lastIndexOf(t)===n:0===n?e===t:!1}function s(e,t,n){void 0===n&&(n=4);var r=Math.abs(e.length-t.length);if(r>n)return 0;var s,i,l=[],g=[];for(s=0;s<t.length+1;++s)g.push(0);for(s=0;s<e.length+1;++s)l.push(g);for(s=1;s<e.length+1;++s)for(i=1;i<t.length+1;++i)l[s][i]=e[s-1]===t[i-1]?l[s-1][i-1]+1:Math.max(l[s-1][i],l[s][i-1]);return l[e.length][t.length]-Math.sqrt(r)}function i(e,t){return void 0===t&&(t=!0),e?e.length<140?e:e.slice(0,140)+(t?"…":""):""}Object.defineProperty(t,"__esModule",{value:!0}),t.startsWith=n,t.endsWith=r,t.difference=s,t.getLimitedString=i});