(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{73:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return c})),r.d(a,"metadata",(function(){return l})),r.d(a,"rightToc",(function(){return s})),r.d(a,"default",(function(){return d}));var t=r(2),o=r(6),n=(r(0),r(79)),i=r(80),c={id:"un-recorrido-por-gcp-billing",title:"Google Cloud Billing Admin",description:"Uno de los pilares del cloud es el manejo de costos y la buena administraci\xf3n de estos",keywords:["Google Cloud Platform","GCP","Cloud","Billing"],image:"http://localhost:4444/img/articles/un-recorrido-por-gcp/billing.jpg"},l={unversionedId:"articles/un-recorrido-por-gcp/un-recorrido-por-gcp-billing",id:"articles/un-recorrido-por-gcp/un-recorrido-por-gcp-billing",isDocsHomePage:!1,title:"Google Cloud Billing Admin",description:"Uno de los pilares del cloud es el manejo de costos y la buena administraci\xf3n de estos",source:"@site/docs/articles/un-recorrido-por-gcp/Billing.md",slug:"/articles/un-recorrido-por-gcp/un-recorrido-por-gcp-billing",permalink:"/docs/articles/un-recorrido-por-gcp/un-recorrido-por-gcp-billing",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/articles/un-recorrido-por-gcp/Billing.md",version:"current",sidebar:"someSidebar",previous:{title:"Google Cloud Marketplace",permalink:"/docs/articles/un-recorrido-por-gcp/un-recorrido-por-gcp-marketplace"},next:{title:"Nivelaci\xf3n Kubernetes",permalink:"/docs/architectures/nivelacion-kubernetes"}},s=[{value:"\xbfQue hace y por que existe?",id:"\xbfque-hace-y-por-que-existe",children:[]},{value:"\xbfQue tiene de especial su dise\xf1o?, \xbfPara cu\xe1l o cu\xe1les prop\xf3sitos fue optimizado?",id:"\xbfque-tiene-de-especial-su-dise\xf1o-\xbfpara-cu\xe1l-o-cu\xe1les-prop\xf3sitos-fue-optimizado",children:[]},{value:"\xbfCuando se debe utilizar?, \xbfCuales son sus limitaciones?, \xbfCuando es momento de considerar una alternativa?",id:"\xbfcuando-se-debe-utilizar-\xbfcuales-son-sus-limitaciones-\xbfcuando-es-momento-de-considerar-una-alternativa",children:[]},{value:"\xbfCuales son las caracter\xedsticas clave de este producto o tecnolog\xeda?",id:"\xbfcuales-son-las-caracter\xedsticas-clave-de-este-producto-o-tecnolog\xeda",children:[]},{value:"\xbfPosee un alternativa Open Source?, En caso de existir, \xbfcu\xe1les son los beneficios claves de utilizar el servicio basado en la nube por sobre el Open Source?",id:"\xbfposee-un-alternativa-open-source-en-caso-de-existir-\xbfcu\xe1les-son-los-beneficios-claves-de-utilizar-el-servicio-basado-en-la-nube-por-sobre-el-open-source",children:[]}],u={rightToc:s};function d(e){var a=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(t.a)({},u,r,{components:a,mdxType:"MDXLayout"}),Object(n.b)(i.a,{Photo:"https://miro.medium.com/fit/c/256/256/2*XKiHV-3_LJvO6xeiGKheDQ.png",Name:"Felipe Vel\xe1squez Castro",Position:"Google Developer Expert",mdxType:"Writter"}),Object(n.b)("p",null,Object(n.b)("img",Object(t.a)({parentName:"p"},{src:"http://localhost:4444/img/articles/un-recorrido-por-gcp/Billing.jpg",alt:null}))),Object(n.b)("h3",{id:"\xbfque-hace-y-por-que-existe"},"\xbfQue hace y por que existe?"),Object(n.b)("p",null,"El m\xf3dulo de Billing en realidad no es un producto, por el contrario es el lugar donde se gestiona y administra el gasto que generan los productos que utilizamos dentro de nuestros proyectos. "),Object(n.b)("p",null,"La administraci\xf3n de costos es un aspecto muy importante dentro de la Nube, y Google Cloud nos das muchas herramientas para que podamos tener el control absoluto de los gastos que generamos en GCP."),Object(n.b)("p",null,"Tal como dijimos, el m\xf3dulo de Billing no es un producto, pero no debes ignorarlo, muy por el contrario deber\xedas conocerlo a fondo y vigilar constantemente la efectividad del uso de los recursos."),Object(n.b)("p",null,"A nivel personal el tema del Billing me llama mucho la atenci\xf3n y he tenido la posibilidad de dedicar muchas horas a este asunto. Te dejo una serie de art\xedculos que escrib\xed de como sacar el m\xe1ximo provecho a la capa gratuita de GCP y como administrar el Billing para no perder el control de tus gastos."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"Introducci\xf3n"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(t.a)({parentName:"li"},{href:"../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp"}),"Qu\xe9 es y c\xf3mo funciona la capa gratuita"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"S01 \u2014 Productos, Caracter\xedsticas y c\xf3mo ahorrar en la facturaci\xf3n"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-functions"}),"Cloud Functions"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-pub-sub"}),"Cloud Pub/Sub"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-storage"}),"Cloud Storage"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-bigquery"}),"Big Query"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"../serie-capa-gratuita/entendiendo-la-capa-gratuita-de-gcp-cloud-run"}),"Cloud Run")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"S02 \u2014",Object(n.b)("a",Object(t.a)({parentName:"em"},{href:"../serie-capa-gratuita/vigila-el-uso-de-la-capa-gratuita-desde-data-studio"}),"Vigila el uso de la capa gratuita desde Data Studio")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"../serie-capa-gratuita/vigila-el-uso-de-la-capa-gratuita-desde-data-studio#habilitando-la-exportaci%C3%B3n-de-billing"}),"Habilitar la exportaci\xf3n de Billing (en BigQuery!)"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"../serie-capa-gratuita/vigila-el-uso-de-la-capa-gratuita-desde-data-studio#preparando-los-datos-para-el-dashboard"}),"Dashboard en Data Studio (\u2026 para una facturaci\xf3n sin sorpresas!)")))),Object(n.b)("h3",{id:"\xbfque-tiene-de-especial-su-dise\xf1o-\xbfpara-cu\xe1l-o-cu\xe1les-prop\xf3sitos-fue-optimizado"},"\xbfQue tiene de especial su dise\xf1o?, \xbfPara cu\xe1l o cu\xe1les prop\xf3sitos fue optimizado?"),Object(n.b)("p",null,"\xbfQue tiene de especial?, mucho, ya que por parte de Google no han dejado nada al azar en temas de billing, y si te digo nada, es por que gracias a las herramientas de billing es posible tener registros ",Object(n.b)("strong",{parentName:"p"},"segundo a segundo")," de cada uno de los recursos utilizados por cada producto o servicio, en lo que respecta a CPU, RAM, trafico de entrada y salida de red, entre otros muchos otros recursos, dependiendo del producto que estemos utilizando. En la siguiente im\xe1gen puedes ver una agrupaci\xf3n de los registros de billing en BigQuery de ",Object(n.b)("a",Object(t.a)({parentName:"p"},{href:"https://cloud.google.com/run"}),"Cloud Run"),". "),Object(n.b)("p",null,Object(n.b)("img",Object(t.a)({parentName:"p"},{src:"http://localhost:4444/img/articles/un-recorrido-por-gcp/billing_resources_usage.jpg",alt:null}))),Object(n.b)("p",null,"Dentro de las caracter\xedsticas claves del Modulo de Billing podemos destacar los reporte, con el cual podremos tener una vista general a nivel de proyectos, servicios e incluso SKU (cada uno de los recursos facturables) de cada uno de estos servicios. "),Object(n.b)("p",null,"Tambi\xe9n podemos destacar las alertas de Billing, que permite establecer umbrales en porcentajes a cada proyecto y te notifica al ir cumpliendo cada umbral, ademas de esto puedes configurar un t\xf3pico de pub/sub si quieres automatizar procesos al cumplirse ciertos umbrales. "),Object(n.b)("p",null,"Por otra parte se encuentra la exportaci\xf3n de Billing, que tal como te comentaba en el p\xe1rrafo anterior, que permite registrar en en BigQuery el consumo de billing de cada producto segundo a segundo los cuales podemos analizar en profundidad e incluso crear dashboards personalizados con Datastudio (El \xfaltimo de los art\xedculos de arriba muestra como puedes hacer todos esto por ti mismo) "),Object(n.b)("p",null,Object(n.b)("img",Object(t.a)({parentName:"p"},{src:"http://localhost:4444/img/articles/un-recorrido-por-gcp/billing_menu.jpg",alt:null}))),Object(n.b)("h3",{id:"\xbfcuando-se-debe-utilizar-\xbfcuales-son-sus-limitaciones-\xbfcuando-es-momento-de-considerar-una-alternativa"},"\xbfCuando se debe utilizar?, \xbfCuales son sus limitaciones?, \xbfCuando es momento de considerar una alternativa?"),Object(n.b)("p",null,"mmmmm, esta pregunta no aplica, si quieres sobrevivir utilizando la nube debes medir tus gastos...."),Object(n.b)("h3",{id:"\xbfcuales-son-las-caracter\xedsticas-clave-de-este-producto-o-tecnolog\xeda"},"\xbfCuales son las caracter\xedsticas clave de este producto o tecnolog\xeda?"),Object(n.b)("p",null,"En mi punto de vista, la caracter\xedstica clave de este m\xf3dulo es su versatilidad, es decir, puedes tener un gran controls con solo los reportes y mantener todo bajo control con las alertas de billing. Pero puedes automatizar apagado de productos u otras acciones que ahorren dinero con los eventos a pub/sub y claro, puedes analizar en detalle cada recurso utilizado desde BigQuery. "),Object(n.b)("h3",{id:"\xbfposee-un-alternativa-open-source-en-caso-de-existir-\xbfcu\xe1les-son-los-beneficios-claves-de-utilizar-el-servicio-basado-en-la-nube-por-sobre-el-open-source"},"\xbfPosee un alternativa Open Source?, En caso de existir, \xbfcu\xe1les son los beneficios claves de utilizar el servicio basado en la nube por sobre el Open Source?"),Object(n.b)("p",null,"Esta pregunta tampoco aplica en lo que respecta a Open Source, sin embargo existen servicios de pago de administraci\xf3n y reducci\xf3n en el billing que pueden hacer un an\xe1lisis de tu uso y recomendarte donde y cuando reducir recursos para ahorrar en los costos."),Object(n.b)("p",null,"Bueno eso fue todo por parte del Billing, no dejes de leer los art\xedculos de la capa gratuita y del dashboard de control, te van a encantar."))}d.isMDXComponent=!0},79:function(e,a,r){"use strict";r.d(a,"a",(function(){return d})),r.d(a,"b",(function(){return m}));var t=r(0),o=r.n(t);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var a=o.a.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},d=function(e){var a=u(e.components);return o.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},b=o.a.forwardRef((function(e,a){var r=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=t,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||n;return r?o.a.createElement(m,c(c({ref:a},s),{},{components:r})):o.a.createElement(m,c({ref:a},s))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=r.length,i=new Array(n);i[0]=b;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<n;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},80:function(e,a,r){"use strict";r.d(a,"a",(function(){return n}));var t=r(0),o=r.n(t);const n=({children:e,Name:a,Photo:r,Position:t})=>o.a.createElement("div",{className:"writter"},e,o.a.createElement("div",{className:"ilb"},o.a.createElement("a",{href:r},o.a.createElement("img",{alt:a,className:"",src:r,width:"80",height:"80"}))),o.a.createElement("div",{className:"ilb"},o.a.createElement("div",{className:""},o.a.createElement("p",{className:""},"Written by")),o.a.createElement("div",{className:""},o.a.createElement("h2",{className:""},a),o.a.createElement("div",{className:""})),o.a.createElement("div",{className:""},o.a.createElement("h4",{className:""},t))))}}]);