!function(a){var e={};function n(i){if(e[i])return e[i].exports;var t=e[i]={i:i,l:!1,exports:{}};return a[i].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=a,n.c=e,n.d=function(a,e,i){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(a){Object.defineProperty(a,"__esModule",{value:!0})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=5)}([function(a,e,n){a.exports=n.p+"../css/style.css"},function(a){a.exports={AD:"Andorra",AE:["United Arab Emirates","UAE"],AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:"Congo, The Democratic Republic of the",CF:"Central African Republic",CG:"Congo",CH:"Switzerland",CI:"Cote D'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",EU:"European Union",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands (Malvinas)",FM:"Micronesia, Federated States of",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:["United Kingdom","UK"],GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and Mcdonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran, Islamic Republic Of",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:["Democratic People's Republic of Korea","North Korea"],KR:["Korea, Republic of","South Korea"],KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Lao People's Democratic Republic",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libyan Arab Jamahiriya",MA:"Morocco",MC:"Monaco",MD:"Moldova, Republic of",ME:"Montenegro",MG:"Madagascar",MH:"Marshall Islands",MK:"Macedonia, The Former Yugoslav Republic of",ML:"Mali",MM:["Myanmar","Burma"],MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:["Palestinian Territory, Occupied","Palestine"],PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russian Federation",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"Sao Tome and Principe",SV:"El Salvador",SY:"Syrian Arab Republic",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania, United Republic of",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:["United States","USA"],UY:"Uruguay",UZ:"Uzbekistan",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",VN:"Viet Nam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",XK:"Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe"}},function(a,e,n){"use strict";const i=n(1),t=127397,o=/^[a-z]{2}$/i,r=/^.{2,}$/,l=/\uD83C[\uDDE6-\uDDFF]/;function s(a,e){if(-1!==(e=e.toLowerCase()).indexOf(a)||-1!==a.indexOf(e))return!0;if(-1!==e.indexOf(",")){const n=e.split(", ").reverse().join(" ");if(-1!==n.indexOf(a)||-1!==a.indexOf(n))return!0}return!1}function c(a){return a=a.toUpperCase(),i[a]?a:void 0}function u(a){if(!a||!r.test(a))return;a=a.trim().toLowerCase();for(const e in i)if({}.hasOwnProperty.call(i,e)){let n=i[e];Array.isArray(n)||(n=[n]);for(const i of n)if(i.toLowerCase()===a)return e}const e=Object.keys(i).filter(e=>{let n=i[e];Array.isArray(n)||(n=[n]);for(const e of n)if(s(a,e))return!0;return!1});return 1===e.length?e[0]:void 0}function d(a){if(!a||!o.test(a))return;const e=i[a.toUpperCase()];return Array.isArray(e)?e[0]:e}function p(a){if(a&&o.test(a)&&(a=c(a)))return String.fromCodePoint(...[...a].map(a=>t+a.charCodeAt()))}function m(a){if(a&&l.test(a))return c([...a].map(a=>a.codePointAt(0)-t).map(a=>String.fromCharCode(a)).join(""))}a.exports={MAGIC_NUMBER:t,CODE_RE:o,NAME_RE:r,FLAG_RE:l,code:function(a){return m(a)||u(a)},flag:function(a){return o.test(a)&&"UK"!==a||(a=u(a)),p(a)},name:function(a){return l.test(a)&&(a=m(a)),d(a)},isCode:c,fuzzyCompare:s,codeToName:d,codeToFlag:p,nameToCode:u,flagToCode:m}},function(a,e,n){"use strict";const{flag:i,name:t,code:o}=n(2);a.exports={flag:i,name:t,code:o}},function(a,e,n){const{flag:t,name:o,code:r}=n(3),l=[{label:"name",icon:null},{label:"living",icon:"🌞"},{label:"dead",icon:"🌜"},{label:"orchestra",icon:"Or"},{label:"wind band",class:"wind-band",icon:"W"},{label:"chorus",icon:"Cho"},{label:"chamber",icon:"Cha"},{label:"voice",icon:"V"},{label:"opera",icon:"Op"},{label:"jazz/improvisation",class:"jazz",icon:"J"},{label:"film",icon:"F"},{label:"video games",class:"video-games",icon:"VG"},{label:"music theatre",class:"music-theatre",icon:"MT"},{label:"songwriting",icon:"SW"},{label:"electroacoustic & installation",class:"electroacoustic",icon:"EA"},{label:"folk/traditional genres",class:"folk",icon:"F/Tr"},{label:"white",icon:"Wh"},{label:"black",icon:"Bl"},{label:"Latinx",class:"latinx",icon:"Lat"},{label:"Asian",class:"asian",icon:"Asn"},{label:"West Asian/North African",class:"wana",icon:"WANA"},{label:"South Asian",class:"south-asian",icon:"SoAs"},{label:"American Indian",class:"american-indian",icon:"AmIn"},{label:"other",icon:"Oth"},{label:"city/state",icon:null},{label:"country",icon:null},{label:"string quartet",class:"string-quartet",icon:"sq"},{label:"wind quartet",class:"wind-quartet",icon:"WQ"},{label:"brass quintet",class:"brass-quintet",icon:"bq"},{label:"young band",class:"young-band",icon:"YB"},{label:"young orchestra",class:"young-orchestra",icon:"YO"},{label:"young choir",class:"young-choir",icon:"YC"},{label:"young piano",class:"young-piano",icon:"YP"},{label:null,icon:null},{label:null,icon:null},{label:null,icon:null},{label:"URL",icon:"🔗"}];new Vue({el:"#app",data:{title:"Women Composers Database",headings:null,list:null,search:"",filters:new Array(36),filterOptions:filterOptions=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,26,27,28,29,30,31,32],vueFields:l},methods:{getData:function(){this.$http.get("https://sheets.googleapis.com/v4/spreadsheets/191ExX5H64wdAvxqfdaxj13bHn31hDifH8uhczhzkyLU/values/Women%20Composers%20Database!A3:AK?key=AIzaSyA-h6VkeSPqfe299CwSS88O-qwI2MVQw0A").then(function(a){a=a.data.values;this.headings=a[0],this.list=a.slice(1)},function(a){console.log(a.statusText)})},runFiltersOr:function(a){if(-1==this.filters.indexOf(!0))return!0;var e=!1;for(i=0;i<this.filters.length;i++)"X"==a[i]&&1==this.filters[i]&&(e=!0);return e},composerProps:function(a){var e="";for(i=1;i<l.length;i++)"X"==a[i]&&(e+='<span class="'+(l[i].hasOwnProperty("class")?l[i].class:l[i].label)+'" title="'+l[i].label+'">'+l[i].icon+"</span>");return e},composerGeo:function(a){var e="",n=["N/A",""];return n.includes(a[24])||(e=a[24],n.includes(a[25])||(e+=", "+a[25]+(t(a[25])?" "+t(a[25]):""))),""!=e||n.includes(a[25])||(e=a[25]+(t(a[25])?" "+t(a[25]):"")),e}},mounted:function(){this.getData()},template:'\n\t\t<div class="wrapper">\n\t\t\t<h1>{{title}}</h1>\n\t\t\t<div class="inputs">\n\t\t\t\t<input type="text" v-model="search" class="search">\n\t\t\t\t<template v-for="option in filterOptions">\n\t\t\t\t\t<label>{{vueFields[option].label}}<input type="checkbox" value="X" v-model="filters[option]"></label>\n\t\t\t\t</template>\n\t\t\t</div>\n\t\t\t<div class="list-wrapper">\n\t\t\t\t<ul class="composer-list">\n\t\t\t\t\t<template v-for="composer in list" v-if="composer[0].match(new RegExp(search, \'i\'))">\n\t\t\t\t\t\t<template v-if="runFiltersOr(composer)">\n\t\t\t\t\t\t\t<li><span class="name"><a :href="composer[36]" target="_blank">{{composer[0]}}</a></span><span class="composer-props" v-html="composerProps(composer)"></span><span class="composer-geo" v-html="composerGeo(composer)"></span></li>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</template>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t'})},function(a,e,n){n(4),a.exports=n(0)}]);