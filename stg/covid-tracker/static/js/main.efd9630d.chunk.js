(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{122:function(a,e,t){},210:function(a,e,t){a.exports=t(490)},217:function(a,e,t){},312:function(a,e,t){},313:function(a,e,t){},314:function(a,e,t){},489:function(a,e,t){},490:function(a,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),l=t(16),o=t.n(l),c=t(8),i=t(44),s=t(180),u={AFG:"Afghanistan",ALB:"Albania",DZA:"Algeria",AND:"Andorra",AGO:"Angola",AIA:"Anguilla",ATG:"Antigua and Barbuda",ARG:"Argentina",ARM:"Armenia",ABW:"Aruba",AUS:"Australia",AUT:"Austria",AZE:"Azerbaijan",BHS:"Bahamas",BHR:"Bahrain",BGD:"Bangladesh",BRB:"Barbados",BLR:"Belarus",BEL:"Belgium",BLZ:"Belize",BEN:"Benin",BMU:"Bermuda",BTN:"Bhutan",BOL:"Bolivia",BIH:"Bosnia",BWA:"Botswana",BRA:"Brazil",VGB:"British Virgin Islands",BRN:"Brunei",BGR:"Bulgaria",BFA:"Burkina Faso",BDI:"Burundi",CPV:"Cabo Verde",KHM:"Cambodia",CMR:"Cameroon",CAN:"Canada",BES:"Caribbean Netherlands",CYM:"Cayman Islands",CAF:"Central African Republic",TCD:"Chad",JEY:"Channel Islands",CHL:"Chile",CHN:"China",COL:"Colombia",COG:"Congo",CRI:"Costa Rica",HRV:"Croatia",CUB:"Cuba",CUW:"Cura\xe7ao",CYP:"Cyprus",CZE:"Czechia",CIV:"C\xf4te d'Ivoire",COD:"DRC",DNK:"Denmark",DJI:"Djibouti",DMA:"Dominica",DOM:"Dominican Republic",ECU:"Ecuador",EGY:"Egypt",SLV:"El Salvador",GNQ:"Equatorial Guinea",ERI:"Eritrea",EST:"Estonia",ETH:"Ethiopia",FLK:"Falkland Islands (Malvinas)",FRO:"Faroe Islands",FJI:"Fiji",FIN:"Finland",FRA:"France",GUF:"French Guiana",PYF:"French Polynesia",GAB:"Gabon",GMB:"Gambia",GEO:"Georgia",DEU:"Germany",GHA:"Ghana",GIB:"Gibraltar",GRC:"Greece",GRL:"Greenland",GRD:"Grenada",GLP:"Guadeloupe",GTM:"Guatemala",GIN:"Guinea",GNB:"Guinea-Bissau",GUY:"Guyana",HTI:"Haiti",VAT:"Holy See (Vatican City State)",HND:"Honduras",HKG:"Hong Kong",HUN:"Hungary",ISL:"Iceland",IND:"India",IDN:"Indonesia",IRN:"Iran",IRQ:"Iraq",IRL:"Ireland",IMN:"Isle of Man",ISR:"Israel",ITA:"Italy",JAM:"Jamaica",JPN:"Japan",JOR:"Jordan",KAZ:"Kazakhstan",KEN:"Kenya",KWT:"Kuwait",KGZ:"Kyrgyzstan",LAO:"Lao People's Democratic Republic",LVA:"Latvia",LBN:"Lebanon",LBR:"Liberia",LBY:"Libyan Arab Jamahiriya",LIE:"Liechtenstein",LTU:"Lithuania",LUX:"Luxembourg",MAC:"Macao",MKD:"Macedonia",MDG:"Madagascar",MWI:"Malawi",MYS:"Malaysia",MDV:"Maldives",MLI:"Mali",MLT:"Malta",MTQ:"Martinique",MRT:"Mauritania",MUS:"Mauritius",MYT:"Mayotte",MEX:"Mexico",MDA:"Moldova",MCO:"Monaco",MNG:"Mongolia",MNE:"Montenegro",MSR:"Montserrat",MAR:"Morocco",MOZ:"Mozambique",MMR:"Myanmar",NAM:"Namibia",NPL:"Nepal",NLD:"Netherlands",NCL:"New Caledonia",NZL:"New Zealand",NIC:"Nicaragua",NER:"Niger",NGA:"Nigeria",NOR:"Norway",OMN:"Oman",PAK:"Pakistan",PSE:"Palestine",PAN:"Panama",PNG:"Papua New Guinea",PRY:"Paraguay",PER:"Peru",PHL:"Philippines",POL:"Poland",PRT:"Portugal",QAT:"Qatar",ROU:"Romania",RUS:"Russia",RWA:"Rwanda",REU:"R\xe9union",KOR:"S. Korea",KNA:"Saint Kitts and Nevis",LCA:"Saint Lucia",MAF:"Saint Martin",SPM:"Saint Pierre Miquelon",VCT:"Saint Vincent and the Grenadines",SMR:"San Marino",STP:"Sao Tome and Principe",SAU:"Saudi Arabia",SEN:"Senegal",SRB:"Serbia",SYC:"Seychelles",SLE:"Sierra Leone",SGP:"Singapore",SXM:"Sint Maarten",SVK:"Slovakia",SVN:"Slovenia",SOM:"Somalia",ZAF:"South Africa",SSD:"South Sudan",ESP:"Spain",LKA:"Sri Lanka",BLM:"St. Barth",SDN:"Sudan",SUR:"Suriname",SWZ:"Swaziland",SWE:"Sweden",CHE:"Switzerland",SYR:"Syrian Arab Republic",TWN:"Taiwan",TZA:"Tanzania",THA:"Thailand",TLS:"Timor-Leste",TGO:"Togo",TTO:"Trinidad and Tobago",TUN:"Tunisia",TUR:"Turkey",TCA:"Turks and Caicos Islands",ARE:"UAE",GBR:"UK",USA:"USA",UGA:"Uganda",UKR:"Ukraine",URY:"Uruguay",UZB:"Uzbekistan",VEN:"Venezuela",VNM:"Vietnam",ESH:"Western Sahara",YEM:"Yemen",ZMB:"Zambia",ZWE:"Zimbabwe"},d=(t(217),{global:"#fb542b",active:"#3F51B5",recover:"#32970a",death:"#d2173b"}),m={global:"/1.png",recover:"/2.png",active:"/3.png",death:"/4.png",today:"/5.png"},E=function(a){return a?{color:d[a]||d.dark,borderColor:d[a]||d.dark}:{}};var v=function(a){var e=a.title,t=a.count,n=a.total,l=a.variant,o=n?(t/n*100).toFixed(2):0;return r.a.createElement("div",{className:"card",style:E(l)},r.a.createElement("h3",{className:"card-title"},e),r.a.createElement("img",{src:"."+m[l],alt:"covid",width:"30"}),r.a.createElement("div",{className:"card-info"},r.a.createElement("h2",{className:"count"},t.toLocaleString()),"100.00"!==o&&r.a.createElement("h4",{className:"count"},"".concat(o,"%"))))};var h=function(){return r.a.createElement("footer",null,r.a.createElement("br",null),r.a.createElement("h6",null,"Data Source:",r.a.createElement("a",{href:"https://corona.lmao.ninja/",target:"BLANk"},"https://corona.lmao.ninja/")))};var S=function(){return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h3",null,"COVID-19 Tracker")))},N=t(168);var b=function(){return r.a.createElement("div",{className:"spinner"})},A=t(99),M=t.n(A),g=t(170);var p=function(a){var e=Object(n.useState)(),t=Object(c.a)(e,2),r=t[0],l=t[1],o=Object(n.useState)(),i=Object(c.a)(o,2),s=i[0],u=i[1],d=Object(n.useState)(),m=Object(c.a)(d,2),E=m[0],v=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),v(),e.next=4,fetch(a).then((function(a){return a.json()})).catch((function(a){v(a||"Failed to load data!")}));case 4:(t=e.sent)?l(t):v("Failed to load data!"),u(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),{stats:r,loading:s,error:E}};t(312);var C=r.a.memo((function(a){var e=a.url,t=p(e),n=t.stats,l=t.error,o=t.loading,c={labels:[],datasets:[{data:[],backgroundColor:["#3F51B5","#32970a","#d2173b"]}]};return n&&(c.labels=["Active","Recovered","Deaths"],c.datasets[0].data=[n.active,n.recovered,n.deaths]),r.a.createElement("div",{className:"container"},l?r.a.createElement("h4",{className:"error"},"Looks like there is a problem..."):null,o?r.a.createElement(b,null):null,!n||o||l?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-container"},r.a.createElement(v,{title:"Total cases",count:n.error?0:n.cases,total:n.error?0:n.cases,variant:"global"}),r.a.createElement(v,{title:"Active cases",count:n.error?0:n.active,total:n.error?0:n.cases,variant:"active"}),r.a.createElement(v,{title:"Recovered",count:n.error?0:n.recovered,total:n.error?0:n.cases,variant:"recover"}),r.a.createElement(v,{title:"Deaths",count:n.error?0:n.deaths,total:n.error?0:n.cases,variant:"death"}),r.a.createElement(v,{title:"Today cases",count:n.error?0:n.todayCases,total:n.error?0:n.cases,variant:"today"}),r.a.createElement(v,{title:"Today deaths",count:n.error?0:n.todayDeaths,total:n.error?0:n.cases,variant:"today"})),r.a.createElement("div",{className:"graph"},r.a.createElement(N.a,{data:c,options:{title:{display:!0,text:"Cases distribution",fontSize:20},legend:{display:!0},responsive:!0,maintainAspectRatio:!0}}))))}));var B=r.a.memo((function(a){var e=a.count,t=void 0===e?0:e,n=a.type;return r.a.createElement("div",null,r.a.createElement("h5",{className:"color-".concat(n)},t.toLocaleString()),r.a.createElement("p",null,n))}));var R=r.a.memo((function(a){var e=a.title,t=a.count,n=t.cases,l=t.active,o=t.recovered,c=t.deaths;return r.a.createElement("div",{className:"list-item"},r.a.createElement("div",{className:"title"},r.a.createElement("h5",null,e)),r.a.createElement("div",{className:"count"},r.a.createElement(B,{count:n,type:"total"}),r.a.createElement(B,{count:l,type:"active"}),r.a.createElement(B,{count:o,type:"recovered"}),r.a.createElement(B,{count:c,type:"deaths"})))}));t(122);var y=function(){var a=p("https://corona.lmao.ninja/v2/countries?sort=cases"),e=a.stats,t=a.loading,n=a.error;return r.a.createElement("div",{className:"stats-container"},n?r.a.createElement("h4",{className:"error"},"Looks like there is a problem..."):null,t?r.a.createElement(b,null):null,!e||t||n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"All countries"),e.map((function(a){var e=a.cases,t=a.active,n=a.country,l=a.recovered,o=a.deaths;return r.a.createElement(R,{title:n,count:{cases:e,active:t,recovered:l,deaths:o},key:n})}))))};t(313);t(314);var G=t(11);var L=function(a){var e=a.url,t=a.selectedCountryCode;console.log(e);var n=p(e),l=n.stats,o=n.loading,c=n.error,i=[],s=[];return l&&(i=t?l.timeline:l,console.log(t),console.log(l),console.log(i),i&&i.cases&&Object.keys(i.cases).map((function(a){var e={};return e.dates=a,e.cases=i.cases[a],e.recovered=i.recovered[a],e.deaths=i.deaths[a],s.push(e),s}))),console.log(s),r.a.createElement("div",{className:"curve-container"},c?r.a.createElement("h4",{className:"error"},"Looks like there is a problem..."):null,o?r.a.createElement(b,null):null,!i||o||c?null:r.a.createElement("div",{className:"curve"},r.a.createElement("h3",null,"Curve"),r.a.createElement(G.d,{width:530,height:250,data:s,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(G.a,{strokeDasharray:"1"}),r.a.createElement(G.f,{dataKey:"dates"}),r.a.createElement(G.g,null),r.a.createElement(G.e,null),r.a.createElement(G.b,null),r.a.createElement(G.c,{dot:!1,dataKey:"cases",stroke:"#fb542b",activeDot:{r:8}}),r.a.createElement(G.c,{dot:!1,dataKey:"recovered",stroke:"#32970a",activeDot:{r:8}}),r.a.createElement(G.c,{dot:!1,dataKey:"deaths",stroke:"#d2173b",activeDot:{r:8}}))))};t(489);var f=function(){var a=Object(n.useState)(""),e=Object(c.a)(a,2),t=e[0],l=e[1],o=[];return Object.entries(u).map((function(a){var e=Object(c.a)(a,2),t=e[0],n=e[1];return o.push({value:t,label:n})})),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu-ul"},r.a.createElement("li",null,t?u[t]:"Global"))),r.a.createElement("div",{className:"stats-section"},r.a.createElement(s.a,{options:o,label:"Select country",className:"select-css",isClearable:!0,onChange:function(a){i.a.event({category:"Selected country",action:a&&a.value?u[a.value]:"Global"}),a&&a.value?l(a.value):l("")}})),r.a.createElement("div",{className:"stats-cards"},t?r.a.createElement(C,{url:"https://corona.lmao.ninja/v2/countries/".concat(t)}):r.a.createElement(C,{url:"https://corona.lmao.ninja/v2/all"})),r.a.createElement("br",null),t?r.a.createElement(L,{url:"https://corona.lmao.ninja/v2/historical/".concat(t,"?lastdays=60"),selectedCountryCode:t}):r.a.createElement(L,{url:"https://corona.lmao.ninja/v2/historical/all?lastdays=60"}),r.a.createElement("br",null),r.a.createElement(y,null),r.a.createElement(h,null))};i.a.initialize("UA-164329346-1"),i.a.pageview(window.location.pathname+window.location.search),o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.efd9630d.chunk.js.map