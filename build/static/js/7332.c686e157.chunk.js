(()=>{"use strict";var e={56977:e=>{function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",o=0,s=-1,a=0,i=0;i<=e.length;++i){if(i<e.length)n=e.charCodeAt(i);else{if(47===n)break;n=47}if(47===n){if(s===i-1||1===a);else if(s!==i-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",o=0):o=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),s=i,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,s=i,a=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(s+1,i):r=e.slice(s+1,i),o=i-s-1;s=i,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var a;s>=0?a=arguments[s]:(void 0===e&&(e=process.cwd()),a=e),t(a),0!==a.length&&(r=a+"/"+r,o=47===a.charCodeAt(0))}return r=n(r,!o),o?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var o=arguments[n];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var s=e.length,a=s-o,i=1;i<n.length&&47===n.charCodeAt(i);++i);for(var l=n.length-i,c=a<l?a:l,d=-1,g=0;g<=c;++g){if(g===c){if(l>c){if(47===n.charCodeAt(i+g))return n.slice(i+g+1);if(0===g)return n.slice(i+g)}else a>c&&(47===e.charCodeAt(o+g)?d=g:0===g&&(d=0));break}var h=e.charCodeAt(o+g);if(h!==n.charCodeAt(i+g))break;47===h&&(d=g)}var p="";for(g=o+d+1;g<=s;++g)g!==s&&47!==e.charCodeAt(g)||(0===p.length?p+="..":p+="/..");return p.length>0?p+n.slice(i+d):(i+=d,47===n.charCodeAt(i)&&++i,n.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,o=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(n=e.charCodeAt(a))){if(!s){o=a;break}}else s=!1;return-1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,o=0,s=-1,a=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var i=n.length-1,l=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!a){o=r+1;break}}else-1===l&&(a=!1,l=r+1),i>=0&&(c===n.charCodeAt(i)?-1===--i&&(s=r):(i=-1,s=l))}return o===s?s=l:-1===s&&(s=e.length),e.slice(o,s)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){o=r+1;break}}else-1===s&&(a=!1,s=r+1);return-1===s?"":e.slice(o,s)},extname:function(e){t(e);for(var n=-1,r=0,o=-1,s=!0,a=0,i=e.length-1;i>=0;--i){var l=e.charCodeAt(i);if(47!==l)-1===o&&(s=!1,o=i+1),46===l?-1===n?n=i:1!==a&&(a=1):-1!==n&&(a=-1);else if(!s){r=i+1;break}}return-1===n||-1===o||0===a||1===a&&n===o-1&&n===r+1?"":e.slice(n,o)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,o=e.charCodeAt(0),s=47===o;s?(n.root="/",r=1):r=0;for(var a=-1,i=0,l=-1,c=!0,d=e.length-1,g=0;d>=r;--d)if(47!==(o=e.charCodeAt(d)))-1===l&&(c=!1,l=d+1),46===o?-1===a?a=d:1!==g&&(g=1):-1!==a&&(g=-1);else if(!c){i=d+1;break}return-1===a||-1===l||0===g||1===g&&a===l-1&&a===i+1?-1!==l&&(n.base=n.name=0===i&&s?e.slice(1,l):e.slice(i,l)):(0===i&&s?(n.name=e.slice(1,a),n.base=e.slice(1,l)):(n.name=e.slice(i,a),n.base=e.slice(i,l)),n.ext=e.slice(a,l)),i>0?n.dir=e.slice(0,i-1):s&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(56977),t=n.n(e);function r(e,n){const r=t().normalize(n),o=t().dirname(r).split("/"),s=[];for(const t of o){s.push(t);const n=s.join("/");if(e.FS.analyzePath(n).exists){if(e.FS.isDir(n))throw new Error(`"${n}" already exists and is not a directory.`)}else try{e.FS.mkdir(n)}catch(a){throw console.error(`Failed to create a directory "${n}"`),a}}}function o(e,t,n,o){r(e,t),e.FS.writeFile(t,n,o)}function s(e){e.forEach((e=>{let t;try{t=new URL(e)}catch(n){return}if("emfs:"===t.protocol||"file:"===t.protocol)throw new Error(`"emfs:" and "file:" protocols are not allowed for the requirement (${e})`)}))}function a(e){e.runPython('\nimport micropip\nmicropip.add_mock_package(\n    "pyarrow", "0.0.1",\n    modules={\n        "pyarrow": """\n__version__ = \'0.0.1\'  # TODO: Update when releasing\n\n\nclass Table:\n    @classmethod\n    def from_pandas(*args, **kwargs):\n        raise NotImplementedError("stlite is not supporting this method.")\n"""\n    }\n)\n')}var i=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(t){s(t)}}function i(e){try{l(r.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};let l,c;const d=self,g=new class{constructor(){this.promise=new Promise(((e,t)=>{this.resolveInternal=e,this.rejectInternal=t}))}resolve(e){this.resolveInternal(e)}reject(e){this.rejectInternal(e)}};function h(e){d.postMessage({type:"event:progress",data:{message:e}})}const p="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";const u=function(){return i(this,void 0,void 0,(function*(){const{entrypoint:e,files:t,archives:n,requirements:r,wheels:u,mountedSitePackagesSnapshotFilePath:f,pyodideUrl:m=p,streamlitConfig:y}=yield g.promise;if(h("Loading Pyodide."),console.debug("Loading Pyodide"),l=yield function(e,t){return i(this,void 0,void 0,(function*(){const n=e.slice(0,e.lastIndexOf("/")+1);let r;return e.endsWith(".mjs")?r=(yield import(e)).loadPyodide:(importScripts(e),r=self.loadPyodide),r(Object.assign(Object.assign({},t),{indexURL:n}))}))}(m,{stdout:console.log,stderr:console.error}),console.debug("Loaded Pyodide"),h("Mounting files."),yield Promise.all(Object.keys(t).map((e=>i(this,void 0,void 0,(function*(){const n=t[e];let r;"url"in n?(console.debug(`Fetch a file from ${n.url}`),r=yield fetch(n.url).then((e=>e.arrayBuffer())).then((e=>new Uint8Array(e)))):r=n.data;const{opts:s}=t[e];console.debug(`Write a file "${e}"`),o(l,e,r,s)}))))),h("Unpacking archives."),yield Promise.all(n.map((e=>i(this,void 0,void 0,(function*(){let t;"url"in e?(console.debug(`Fetch an archive from ${e.url}`),t=yield fetch(e.url).then((e=>e.arrayBuffer()))):t=e.buffer;const{format:n,options:r}=e;console.debug("Unpack an archive",{format:n,options:r}),l.unpackArchive(t,n,r)}))))),!f&&!u)throw new Error("Neither snapshot nor wheel files are provided.");f&&(h("Restoring the snapshot."),yield l.runPythonAsync("import tarfile, shutil, site"),yield l.runPythonAsync("\n      site_packages_dirs = site.getsitepackages()\n      for site_packages in site_packages_dirs:\n          shutil.rmtree(site_packages)\n    "),console.debug(`Unarchive ${f}`),yield l.runPythonAsync(`\n      with tarfile.open("${f}", "r") as tar_gz_file:\n          tar_gz_file.extractall("/")\n    `),console.debug("Restored the snapshot"),h("Mocking some packages."),console.debug("Mock pyarrow"),a(l),console.debug("Mocked pyarrow")),s(r),h("Installing packages."),yield l.loadPackage("micropip");const b=l.pyimport("micropip");u?(console.debug("Installing the wheels:",u,"and the requirements:",r),yield b.install.callKwargs([u.stliteServer,u.streamlit,...r],{keep_going:!0}),console.debug("Installed the wheels and the requirements"),h("Mocking some packages."),console.debug("Mock pyarrow"),a(l),console.debug("Mocked pyarrow")):(console.debug("Installing the requirements:",r),yield b.install.callKwargs(r,{keep_going:!0}),console.debug("Installed the requirements")),yield l.runPythonAsync("\n    import importlib\n    importlib.invalidate_caches()\n  "),h("Loading streamlit package."),console.debug("Loading the Streamlit package"),yield l.runPythonAsync("\n      import streamlit.runtime\n      import streamlit.web\n  "),console.debug("Loaded the Streamlit package"),h("Setting up the loggers."),console.debug("Setting the loggers"),yield l.runPythonAsync("\n      import logging\n      import streamlit.logger\n\n      streamlit.logger.get_logger = logging.getLogger\n      streamlit.logger.setup_formatter = None\n      streamlit.logger.update_formatter = lambda *a, **k: None\n      streamlit.logger.set_log_level = lambda *a, **k: None\n  ");self.__logCallback__=e=>{e.startsWith("CRITICAL")||e.startsWith("ERROR")?console.error(e):e.startsWith("WARNING")?console.warn(e):e.startsWith("INFO")?console.info(e):e.startsWith("DEBUG")?console.debug(e):console.log(e)},yield l.runPythonAsync('\n      from js import __logCallback__\n\n\n      class JsHandler(logging.Handler):\n          def emit(self, record):\n              msg = self.format(record)\n              __logCallback__(msg)\n\n\n      main_formatter = logging.Formatter("%(levelname)s:%(name)s:%(message)s")\n\n      js_handler = JsHandler()\n      js_handler.setFormatter(main_formatter)\n\n      root_logger = logging.getLogger()\n      root_logger.handlers.clear()\n      root_logger.addHandler(js_handler)\n      root_logger.setLevel(logging.DEBUG)\n\n      streamlit_handler = logging.getLogger("streamlit")\n      streamlit_handler.setLevel(logging.DEBUG)\n  '),console.debug("Set the loggers"),h("Mocking some Streamlit functions for the browser environment."),console.debug("Mocking some Streamlit functions"),yield l.runPythonAsync("\n    import streamlit\n\n    def is_cacheable_msg(msg):\n        return False\n\n    streamlit.runtime.runtime.is_cacheable_msg = is_cacheable_msg\n  "),console.debug("Mocked some Streamlit functions"),h("Booting up the Streamlit server."),console.debug("Booting up the Streamlit server"),self.__streamlitFlagOptions__=Object.assign(Object.assign({"browser.gatherUsageStats":!1},y),{"runner.fastReruns":!1}),yield l.runPythonAsync(`\n    from stlite_server.bootstrap import load_config_options, prepare\n    from stlite_server.server import Server\n    from js import __streamlitFlagOptions__\n\n    flag_options = __streamlitFlagOptions__.to_py()\n    load_config_options(flag_options)\n\n    main_script_path = "${e}"\n    command_line = None\n    args = []\n\n    prepare(main_script_path, args)\n\n    server = Server(main_script_path, command_line)\n    server.start()\n  `),console.debug("Booted up the Streamlit server"),console.debug("Setting up the HTTP server"),c=l.globals.get("server").copy(),console.debug("Set up the HTTP server"),d.postMessage({type:"event:loaded"})}))}().catch((e=>{throw d.postMessage({type:"event:error",data:{error:e}}),e}));self.onmessage=e=>i(void 0,void 0,void 0,(function*(){const t=e.data;if("initData"===t.type)return void g.resolve(t.data);yield u;const n=e.ports[0];try{switch(t.type){case"websocket:connect":{console.debug("websocket:connect",t.data);const{path:e}=t.data;c.start_websocket(e,((e,t)=>{if(t){const t=e.getBuffer("u8");e.destroy();const n=new Uint8ClampedArray(t.data.buffer,t.data.byteOffset,t.data.byteLength);d.postMessage({type:"websocket:message",data:{payload:new Uint8Array(n)}})}else d.postMessage({type:"websocket:message",data:{payload:e}})})),n.postMessage({type:"reply"});break}case"websocket:send":{console.debug("websocket:send",t.data);const{payload:e}=t.data;c.receive_websocket_from_js(e);break}case"http:request":{console.debug("http:request",t.data);const{request:e}=t.data,r=(e,t,r)=>{const o=t.toJs(),s=r.toJs();console.debug({statusCode:e,headers:o,body:s});const a={type:"http:response",data:{response:{statusCode:e,headers:o,body:s}}};n.postMessage(a)};c.receive_http_from_js(e.method,decodeURIComponent(e.path),e.headers,e.body,r);break}case"file:write":{const{path:e,data:r,opts:s}=t.data;console.debug(`Write a file "${e}"`),o(l,e,r,s),n.postMessage({type:"reply"});break}case"file:rename":{const{oldPath:e,newPath:o}=t.data;console.debug(`Rename "${e}" to ${o}`),function(e,t,n){r(e,n),e.FS.rename(t,n)}(l,e,o),n.postMessage({type:"reply"});break}case"file:unlink":{const{path:e}=t.data;console.debug(`Remove "${e}`),l.FS.unlink(e),n.postMessage({type:"reply"});break}case"install":{const{requirements:e}=t.data,r=l.pyimport("micropip");console.debug("Install the requirements:",e),s(e),yield r.install.callKwargs(e,{keep_going:!0}).then((()=>{if(e.includes("matplotlib"))return l.runPythonAsync("\n                from stlite_server.bootstrap import _fix_matplotlib_crash\n                _fix_matplotlib_crash()\n              ")})).then((()=>{console.debug("Successfully installed"),n.postMessage({type:"reply"})}))}}}catch(a){if(console.error(a),!(a instanceof Error))throw a;const e=new Error(a.message);e.name=a.name,e.stack=a.stack,n.postMessage({type:"reply",error:e})}})),d.postMessage({type:"event:start"})})()})();