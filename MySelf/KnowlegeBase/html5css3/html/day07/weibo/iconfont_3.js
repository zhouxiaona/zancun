(function(window){var svgSprite='<svg><symbol id="icon-dianzan" viewBox="0 0 1024 1024"><path d="M816.872727 384.387879c-29.090909-7.628283-97.486869-7.49899-197.559596-10.214142 4.783838-21.850505 5.818182-41.50303 5.818182-76.541414 0-83.523232-60.767677-157.090909-114.682828-157.090909-38.012121 0-69.30101 31.030303-69.818182 69.30101-0.517172 46.80404-14.99798 127.870707-93.090909 168.856566-5.688889 2.973737-22.109091 11.119192-24.436364 12.153535l1.163637 1.034344c-12.282828-10.472727-29.220202-18.618182-46.545455-18.618182h-69.818182c-38.529293 0-69.818182 31.288889-69.818182 69.818182v372.363636c0 38.529293 31.288889 69.818182 69.818182 69.818182h69.818182c27.668687 0 50.812121-16.678788 62.060606-40.210101 0.258586 0.129293 0.775758 0.258586 1.034344 0.258586 1.551515 0.387879 3.361616 0.905051 5.559596 1.422222 0.387879 0.129293 0.646465 0.129293 1.034343 0.258586 13.446465 3.361616 39.175758 9.438384 94.383838 22.238384 11.894949 2.715152 74.214141 16.032323 138.989899 16.032323h127.224243c38.787879 0 67.490909-14.480808 83.393939-44.864647 15.515152-27.022222 91.410101-171.959596 91.280808-376.242424 0.129293-29.220202-20.169697-66.715152-65.810101-79.773737z m-515.878788 431.191919c0 12.929293-10.472727 23.272727-23.272727 23.272727h-69.818182c-12.8 0-23.272727-10.472727-23.272727-23.272727v-372.363636c0-12.8 10.472727-23.272727 23.272727-23.272728h69.818182c12.8 0 23.272727 10.343434 23.272727 23.272728v372.363636z m534.755556-336.678788c-9.69697 233.890909-85.20404 339.652525-85.20404 339.652525-6.981818 12.670707-18.359596 20.29899-42.408081 20.29899h-127.224243c-63.870707 0-127.353535-14.480808-128.90505-14.868687-96.711111-22.238384-101.753535-24.048485-107.830303-25.729293l3.361616-341.979798c0-35.426263 0.775758-26.505051 0-25.987878 106.278788-43.959596 138.731313-140.541414 139.636364-219.79798 0.129293-11.119192 8.791919-23.272727 23.272727-23.272727 24.565657 0 68.137374 49.389899 68.137374 110.545454 0 55.208081-2.19798 64.775758-21.59192 122.181818 232.727273 0 231.046465 3.361616 251.604041 8.662627 25.470707 7.240404 27.668687 28.315152 27.668687 35.684848 0 8.016162-0.258586 6.852525-0.517172 14.610101z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)