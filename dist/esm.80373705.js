// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1c5yZ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "40233f9780373705";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hBhEd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _web3Js = require("@solana/web3.js");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Wallet extends (0, _eventemitter3Default.default) {
    constructor(provider, _network){
        super();
        this._network = _network;
        this._publicKey = null;
        this._popup = null;
        this._handlerAdded = false;
        this._nextRequestId = 1;
        this._autoApprove = false;
        this._responsePromises = new Map();
        this.handleMessage = (e)=>{
            var _a;
            if (this._injectedProvider && e.source === window || e.origin === ((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.origin) && e.source === this._popup) {
                if (e.data.method === "connected") {
                    const newPublicKey = new (0, _web3Js.PublicKey)(e.data.params.publicKey);
                    if (!this._publicKey || !this._publicKey.equals(newPublicKey)) {
                        if (this._publicKey && !this._publicKey.equals(newPublicKey)) this.handleDisconnect();
                        this._publicKey = newPublicKey;
                        this._autoApprove = !!e.data.params.autoApprove;
                        this.emit("connect", this._publicKey);
                    }
                } else if (e.data.method === "disconnected") this.handleDisconnect();
                else if (e.data.result || e.data.error) {
                    const promises = this._responsePromises.get(e.data.id);
                    if (promises) {
                        const [resolve, reject] = promises;
                        if (e.data.result) resolve(e.data.result);
                        else reject(new Error(e.data.error));
                    }
                }
            }
        };
        this._beforeUnload = ()=>{
            this.disconnect();
        };
        if (isInjectedProvider(provider)) this._injectedProvider = provider;
        else if (isString(provider)) {
            this._providerUrl = new URL(provider);
            this._providerUrl.hash = new URLSearchParams({
                origin: window.location.origin,
                network: this._network
            }).toString();
        } else throw new Error("provider parameter must be an injected provider or a URL string.");
    }
    handleConnect() {
        var _a;
        if (!this._handlerAdded) {
            this._handlerAdded = true;
            window.addEventListener("message", this.handleMessage);
            window.addEventListener("beforeunload", this._beforeUnload);
        }
        if (this._injectedProvider) return new Promise((resolve)=>{
            this.sendRequest("connect", {});
            resolve();
        });
        else {
            window.name = "parent";
            this._popup = window.open((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.toString(), "_blank", "location,resizable,width=460,height=675");
            return new Promise((resolve)=>{
                this.once("connect", resolve);
            });
        }
    }
    handleDisconnect() {
        if (this._handlerAdded) {
            this._handlerAdded = false;
            window.removeEventListener("message", this.handleMessage);
            window.removeEventListener("beforeunload", this._beforeUnload);
        }
        if (this._publicKey) {
            this._publicKey = null;
            this.emit("disconnect");
        }
        this._responsePromises.forEach(([, reject], id)=>{
            this._responsePromises.delete(id);
            reject(new Error("Wallet disconnected"));
        });
    }
    sendRequest(method, params) {
        return __awaiter(this, void 0, void 0, function*() {
            if (method !== "connect" && !this.connected) throw new Error("Wallet not connected");
            const requestId = this._nextRequestId;
            ++this._nextRequestId;
            return new Promise((resolve, reject)=>{
                var _a, _b, _c, _d;
                this._responsePromises.set(requestId, [
                    resolve,
                    reject
                ]);
                if (this._injectedProvider) this._injectedProvider.postMessage({
                    jsonrpc: "2.0",
                    id: requestId,
                    method,
                    params: Object.assign({
                        network: this._network
                    }, params)
                });
                else {
                    (_a = this._popup) === null || _a === void 0 || _a.postMessage({
                        jsonrpc: "2.0",
                        id: requestId,
                        method,
                        params
                    }, (_c = (_b = this._providerUrl) === null || _b === void 0 ? void 0 : _b.origin) !== null && _c !== void 0 ? _c : "");
                    if (!this.autoApprove) (_d = this._popup) === null || _d === void 0 || _d.focus();
                }
            });
        });
    }
    get publicKey() {
        return this._publicKey;
    }
    get connected() {
        return this._publicKey !== null;
    }
    get autoApprove() {
        return this._autoApprove;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this._popup) this._popup.close();
            yield this.handleConnect();
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this._injectedProvider) yield this.sendRequest("disconnect", {});
            if (this._popup) this._popup.close();
            this.handleDisconnect();
        });
    }
    sign(data, display) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(data instanceof Uint8Array)) throw new Error("Data must be an instance of Uint8Array");
            const response = yield this.sendRequest("sign", {
                data,
                display
            });
            const signature = (0, _bs58Default.default).decode(response.signature);
            const publicKey = new (0, _web3Js.PublicKey)(response.publicKey);
            return {
                signature,
                publicKey
            };
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function*() {
            const response = yield this.sendRequest("signTransaction", {
                message: (0, _bs58Default.default).encode(transaction.serializeMessage())
            });
            const signature = (0, _bs58Default.default).decode(response.signature);
            const publicKey = new (0, _web3Js.PublicKey)(response.publicKey);
            transaction.addSignature(publicKey, signature);
            return transaction;
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function*() {
            const response = yield this.sendRequest("signAllTransactions", {
                messages: transactions.map((tx)=>(0, _bs58Default.default).encode(tx.serializeMessage()))
            });
            const signatures = response.signatures.map((s)=>(0, _bs58Default.default).decode(s));
            const publicKey = new (0, _web3Js.PublicKey)(response.publicKey);
            transactions = transactions.map((tx, idx)=>{
                tx.addSignature(publicKey, signatures[idx]);
                return tx;
            });
            return transactions;
        });
    }
    diffieHellman(publicKey) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(publicKey instanceof Uint8Array)) throw new Error("Data must be an instance of Uint8Array");
            const response = yield this.sendRequest("diffieHellman", {
                publicKey
            });
            return response;
        });
    }
}
exports.default = Wallet;
function isString(a) {
    return typeof a === "string";
}
function isInjectedProvider(a) {
    return isObject(a) && "postMessage" in a && typeof a.postMessage === "function";
}
function isObject(a) {
    return typeof a === "object" && a !== null;
}

},{"eventemitter3":"3fnfh","@solana/web3.js":"lPtKl","bs58":"4ji3p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPtKl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Account", ()=>Account);
parcelHelpers.export(exports, "Authorized", ()=>Authorized);
parcelHelpers.export(exports, "BLOCKHASH_CACHE_TIMEOUT_MS", ()=>BLOCKHASH_CACHE_TIMEOUT_MS);
parcelHelpers.export(exports, "BPF_LOADER_DEPRECATED_PROGRAM_ID", ()=>BPF_LOADER_DEPRECATED_PROGRAM_ID);
parcelHelpers.export(exports, "BPF_LOADER_PROGRAM_ID", ()=>BPF_LOADER_PROGRAM_ID);
parcelHelpers.export(exports, "BpfLoader", ()=>BpfLoader);
parcelHelpers.export(exports, "COMPUTE_BUDGET_INSTRUCTION_LAYOUTS", ()=>COMPUTE_BUDGET_INSTRUCTION_LAYOUTS);
parcelHelpers.export(exports, "ComputeBudgetInstruction", ()=>ComputeBudgetInstruction);
parcelHelpers.export(exports, "ComputeBudgetProgram", ()=>ComputeBudgetProgram);
parcelHelpers.export(exports, "Connection", ()=>Connection);
parcelHelpers.export(exports, "Ed25519Program", ()=>Ed25519Program);
parcelHelpers.export(exports, "Enum", ()=>Enum);
parcelHelpers.export(exports, "EpochSchedule", ()=>EpochSchedule);
parcelHelpers.export(exports, "FeeCalculatorLayout", ()=>FeeCalculatorLayout);
parcelHelpers.export(exports, "Keypair", ()=>Keypair);
parcelHelpers.export(exports, "LAMPORTS_PER_SOL", ()=>LAMPORTS_PER_SOL);
parcelHelpers.export(exports, "Loader", ()=>Loader);
parcelHelpers.export(exports, "Lockup", ()=>Lockup);
parcelHelpers.export(exports, "MAX_SEED_LENGTH", ()=>MAX_SEED_LENGTH);
parcelHelpers.export(exports, "Message", ()=>Message);
parcelHelpers.export(exports, "NONCE_ACCOUNT_LENGTH", ()=>NONCE_ACCOUNT_LENGTH);
parcelHelpers.export(exports, "NonceAccount", ()=>NonceAccount);
parcelHelpers.export(exports, "PACKET_DATA_SIZE", ()=>PACKET_DATA_SIZE);
parcelHelpers.export(exports, "PublicKey", ()=>PublicKey);
parcelHelpers.export(exports, "SIGNATURE_LENGTH_IN_BYTES", ()=>SIGNATURE_LENGTH_IN_BYTES);
parcelHelpers.export(exports, "SOLANA_SCHEMA", ()=>SOLANA_SCHEMA);
parcelHelpers.export(exports, "STAKE_CONFIG_ID", ()=>STAKE_CONFIG_ID);
parcelHelpers.export(exports, "STAKE_INSTRUCTION_LAYOUTS", ()=>STAKE_INSTRUCTION_LAYOUTS);
parcelHelpers.export(exports, "SYSTEM_INSTRUCTION_LAYOUTS", ()=>SYSTEM_INSTRUCTION_LAYOUTS);
parcelHelpers.export(exports, "SYSVAR_CLOCK_PUBKEY", ()=>SYSVAR_CLOCK_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_EPOCH_SCHEDULE_PUBKEY", ()=>SYSVAR_EPOCH_SCHEDULE_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_INSTRUCTIONS_PUBKEY", ()=>SYSVAR_INSTRUCTIONS_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_RECENT_BLOCKHASHES_PUBKEY", ()=>SYSVAR_RECENT_BLOCKHASHES_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_RENT_PUBKEY", ()=>SYSVAR_RENT_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_REWARDS_PUBKEY", ()=>SYSVAR_REWARDS_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_SLOT_HASHES_PUBKEY", ()=>SYSVAR_SLOT_HASHES_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_SLOT_HISTORY_PUBKEY", ()=>SYSVAR_SLOT_HISTORY_PUBKEY);
parcelHelpers.export(exports, "SYSVAR_STAKE_HISTORY_PUBKEY", ()=>SYSVAR_STAKE_HISTORY_PUBKEY);
parcelHelpers.export(exports, "Secp256k1Program", ()=>Secp256k1Program);
parcelHelpers.export(exports, "SendTransactionError", ()=>SendTransactionError);
parcelHelpers.export(exports, "StakeAuthorizationLayout", ()=>StakeAuthorizationLayout);
parcelHelpers.export(exports, "StakeInstruction", ()=>StakeInstruction);
parcelHelpers.export(exports, "StakeProgram", ()=>StakeProgram);
parcelHelpers.export(exports, "Struct", ()=>Struct);
parcelHelpers.export(exports, "SystemInstruction", ()=>SystemInstruction);
parcelHelpers.export(exports, "SystemProgram", ()=>SystemProgram);
parcelHelpers.export(exports, "Transaction", ()=>Transaction);
parcelHelpers.export(exports, "TransactionInstruction", ()=>TransactionInstruction);
parcelHelpers.export(exports, "TransactionStatus", ()=>TransactionStatus);
parcelHelpers.export(exports, "VALIDATOR_INFO_KEY", ()=>VALIDATOR_INFO_KEY);
parcelHelpers.export(exports, "VOTE_PROGRAM_ID", ()=>VOTE_PROGRAM_ID);
parcelHelpers.export(exports, "ValidatorInfo", ()=>ValidatorInfo);
parcelHelpers.export(exports, "VoteAccount", ()=>VoteAccount);
parcelHelpers.export(exports, "VoteAuthorizationLayout", ()=>VoteAuthorizationLayout);
parcelHelpers.export(exports, "VoteInit", ()=>VoteInit);
parcelHelpers.export(exports, "VoteInstruction", ()=>VoteInstruction);
parcelHelpers.export(exports, "VoteProgram", ()=>VoteProgram);
parcelHelpers.export(exports, "clusterApiUrl", ()=>clusterApiUrl);
parcelHelpers.export(exports, "sendAndConfirmRawTransaction", ()=>sendAndConfirmRawTransaction);
parcelHelpers.export(exports, "sendAndConfirmTransaction", ()=>sendAndConfirmTransaction);
var _tweetnacl = require("tweetnacl");
var _tweetnaclDefault = parcelHelpers.interopDefault(_tweetnacl);
var _buffer = require("buffer");
var _bnJs = require("bn.js");
var _bnJsDefault = parcelHelpers.interopDefault(_bnJs);
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
var _borsh = require("borsh");
var _bufferLayout = require("@solana/buffer-layout");
var _bigintBuffer = require("bigint-buffer");
var _superstruct = require("superstruct");
var _rpcWebsockets = require("rpc-websockets");
var _browser = require("jayson/lib/client/browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
var _secp256K1 = require("secp256k1");
var _secp256K1Default = parcelHelpers.interopDefault(_secp256K1);
var _jsSha3 = require("js-sha3");
var _jsSha3Default = parcelHelpers.interopDefault(_jsSha3);
const toBuffer = (arr)=>{
    if ((0, _buffer.Buffer).isBuffer(arr)) return arr;
    else if (arr instanceof Uint8Array) return (0, _buffer.Buffer).from(arr.buffer, arr.byteOffset, arr.byteLength);
    else return (0, _buffer.Buffer).from(arr);
};
var hash$1 = {};
var utils$9 = {};
var minimalisticAssert = assert$6;
function assert$6(val, msg) {
    if (!val) throw new Error(msg || "Assertion failed");
}
assert$6.equal = function assertEqual(l, r1, msg) {
    if (l != r1) throw new Error(msg || "Assertion failed: " + l + " != " + r1);
};
var inherits_browser = {
    exports: {}
};
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};
var assert$5 = minimalisticAssert;
var inherits = inherits_browser.exports;
utils$9.inherits = inherits;
function isSurrogatePair(msg, i) {
    if ((msg.charCodeAt(i) & 0xFC00) !== 0xD800) return false;
    if (i < 0 || i + 1 >= msg.length) return false;
    return (msg.charCodeAt(i + 1) & 0xFC00) === 0xDC00;
}
function toArray(msg, enc) {
    if (Array.isArray(msg)) return msg.slice();
    if (!msg) return [];
    var res = [];
    if (typeof msg === "string") {
        if (!enc) {
            // Inspired by stringToUtf8ByteArray() in closure-library by Google
            // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143
            // Apache License 2.0
            // https://github.com/google/closure-library/blob/master/LICENSE
            var p = 0;
            for(var i = 0; i < msg.length; i++){
                var c = msg.charCodeAt(i);
                if (c < 128) res[p++] = c;
                else if (c < 2048) {
                    res[p++] = c >> 6 | 192;
                    res[p++] = c & 63 | 128;
                } else if (isSurrogatePair(msg, i)) {
                    c = 0x10000 + ((c & 0x03FF) << 10) + (msg.charCodeAt(++i) & 0x03FF);
                    res[p++] = c >> 18 | 240;
                    res[p++] = c >> 12 & 63 | 128;
                    res[p++] = c >> 6 & 63 | 128;
                    res[p++] = c & 63 | 128;
                } else {
                    res[p++] = c >> 12 | 224;
                    res[p++] = c >> 6 & 63 | 128;
                    res[p++] = c & 63 | 128;
                }
            }
        } else if (enc === "hex") {
            msg = msg.replace(/[^a-z0-9]+/ig, "");
            if (msg.length % 2 !== 0) msg = "0" + msg;
            for(i = 0; i < msg.length; i += 2)res.push(parseInt(msg[i] + msg[i + 1], 16));
        }
    } else for(i = 0; i < msg.length; i++)res[i] = msg[i] | 0;
    return res;
}
utils$9.toArray = toArray;
function toHex(msg) {
    var res = "";
    for(var i = 0; i < msg.length; i++)res += zero2(msg[i].toString(16));
    return res;
}
utils$9.toHex = toHex;
function htonl(w) {
    var res = w >>> 24 | w >>> 8 & 0xff00 | w << 8 & 0xff0000 | (w & 0xff) << 24;
    return res >>> 0;
}
utils$9.htonl = htonl;
function toHex32(msg, endian) {
    var res = "";
    for(var i = 0; i < msg.length; i++){
        var w = msg[i];
        if (endian === "little") w = htonl(w);
        res += zero8(w.toString(16));
    }
    return res;
}
utils$9.toHex32 = toHex32;
function zero2(word) {
    if (word.length === 1) return "0" + word;
    else return word;
}
utils$9.zero2 = zero2;
function zero8(word) {
    if (word.length === 7) return "0" + word;
    else if (word.length === 6) return "00" + word;
    else if (word.length === 5) return "000" + word;
    else if (word.length === 4) return "0000" + word;
    else if (word.length === 3) return "00000" + word;
    else if (word.length === 2) return "000000" + word;
    else if (word.length === 1) return "0000000" + word;
    else return word;
}
utils$9.zero8 = zero8;
function join32(msg, start, end, endian) {
    var len = end - start;
    assert$5(len % 4 === 0);
    var res = new Array(len / 4);
    for(var i = 0, k = start; i < res.length; i++, k += 4){
        var w;
        if (endian === "big") w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];
        else w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
        res[i] = w >>> 0;
    }
    return res;
}
utils$9.join32 = join32;
function split32(msg, endian) {
    var res = new Array(msg.length * 4);
    for(var i = 0, k = 0; i < msg.length; i++, k += 4){
        var m = msg[i];
        if (endian === "big") {
            res[k] = m >>> 24;
            res[k + 1] = m >>> 16 & 0xff;
            res[k + 2] = m >>> 8 & 0xff;
            res[k + 3] = m & 0xff;
        } else {
            res[k + 3] = m >>> 24;
            res[k + 2] = m >>> 16 & 0xff;
            res[k + 1] = m >>> 8 & 0xff;
            res[k] = m & 0xff;
        }
    }
    return res;
}
utils$9.split32 = split32;
function rotr32$1(w, b) {
    return w >>> b | w << 32 - b;
}
utils$9.rotr32 = rotr32$1;
function rotl32$2(w, b) {
    return w << b | w >>> 32 - b;
}
utils$9.rotl32 = rotl32$2;
function sum32$3(a, b) {
    return a + b >>> 0;
}
utils$9.sum32 = sum32$3;
function sum32_3$1(a, b, c) {
    return a + b + c >>> 0;
}
utils$9.sum32_3 = sum32_3$1;
function sum32_4$2(a, b, c, d) {
    return a + b + c + d >>> 0;
}
utils$9.sum32_4 = sum32_4$2;
function sum32_5$2(a, b, c, d, e) {
    return a + b + c + d + e >>> 0;
}
utils$9.sum32_5 = sum32_5$2;
function sum64$1(buf, pos, ah, al) {
    var bh = buf[pos];
    var bl = buf[pos + 1];
    var lo = al + bl >>> 0;
    var hi = (lo < al ? 1 : 0) + ah + bh;
    buf[pos] = hi >>> 0;
    buf[pos + 1] = lo;
}
utils$9.sum64 = sum64$1;
function sum64_hi$1(ah, al, bh, bl) {
    var lo = al + bl >>> 0;
    var hi = (lo < al ? 1 : 0) + ah + bh;
    return hi >>> 0;
}
utils$9.sum64_hi = sum64_hi$1;
function sum64_lo$1(ah, al, bh, bl) {
    var lo = al + bl;
    return lo >>> 0;
}
utils$9.sum64_lo = sum64_lo$1;
function sum64_4_hi$1(ah, al, bh, bl, ch, cl, dh, dl) {
    var carry = 0;
    var lo = al;
    lo = lo + bl >>> 0;
    carry += lo < al ? 1 : 0;
    lo = lo + cl >>> 0;
    carry += lo < cl ? 1 : 0;
    lo = lo + dl >>> 0;
    carry += lo < dl ? 1 : 0;
    var hi = ah + bh + ch + dh + carry;
    return hi >>> 0;
}
utils$9.sum64_4_hi = sum64_4_hi$1;
function sum64_4_lo$1(ah, al, bh, bl, ch, cl, dh, dl) {
    var lo = al + bl + cl + dl;
    return lo >>> 0;
}
utils$9.sum64_4_lo = sum64_4_lo$1;
function sum64_5_hi$1(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
    var carry = 0;
    var lo = al;
    lo = lo + bl >>> 0;
    carry += lo < al ? 1 : 0;
    lo = lo + cl >>> 0;
    carry += lo < cl ? 1 : 0;
    lo = lo + dl >>> 0;
    carry += lo < dl ? 1 : 0;
    lo = lo + el >>> 0;
    carry += lo < el ? 1 : 0;
    var hi = ah + bh + ch + dh + eh + carry;
    return hi >>> 0;
}
utils$9.sum64_5_hi = sum64_5_hi$1;
function sum64_5_lo$1(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
    var lo = al + bl + cl + dl + el;
    return lo >>> 0;
}
utils$9.sum64_5_lo = sum64_5_lo$1;
function rotr64_hi$1(ah, al, num) {
    var r2 = al << 32 - num | ah >>> num;
    return r2 >>> 0;
}
utils$9.rotr64_hi = rotr64_hi$1;
function rotr64_lo$1(ah, al, num) {
    var r3 = ah << 32 - num | al >>> num;
    return r3 >>> 0;
}
utils$9.rotr64_lo = rotr64_lo$1;
function shr64_hi$1(ah, al, num) {
    return ah >>> num;
}
utils$9.shr64_hi = shr64_hi$1;
function shr64_lo$1(ah, al, num) {
    var r4 = ah << 32 - num | al >>> num;
    return r4 >>> 0;
}
utils$9.shr64_lo = shr64_lo$1;
var common$5 = {};
var utils$8 = utils$9;
var assert$4 = minimalisticAssert;
function BlockHash$4() {
    this.pending = null;
    this.pendingTotal = 0;
    this.blockSize = this.constructor.blockSize;
    this.outSize = this.constructor.outSize;
    this.hmacStrength = this.constructor.hmacStrength;
    this.padLength = this.constructor.padLength / 8;
    this.endian = "big";
    this._delta8 = this.blockSize / 8;
    this._delta32 = this.blockSize / 32;
}
common$5.BlockHash = BlockHash$4;
BlockHash$4.prototype.update = function update(msg, enc) {
    // Convert message to array, pad it, and join into 32bit blocks
    msg = utils$8.toArray(msg, enc);
    if (!this.pending) this.pending = msg;
    else this.pending = this.pending.concat(msg);
    this.pendingTotal += msg.length;
    // Enough data, try updating
    if (this.pending.length >= this._delta8) {
        msg = this.pending;
        // Process pending data in blocks
        var r5 = msg.length % this._delta8;
        this.pending = msg.slice(msg.length - r5, msg.length);
        if (this.pending.length === 0) this.pending = null;
        msg = utils$8.join32(msg, 0, msg.length - r5, this.endian);
        for(var i = 0; i < msg.length; i += this._delta32)this._update(msg, i, i + this._delta32);
    }
    return this;
};
BlockHash$4.prototype.digest = function digest(enc) {
    this.update(this._pad());
    assert$4(this.pending === null);
    return this._digest(enc);
};
BlockHash$4.prototype._pad = function pad() {
    var len = this.pendingTotal;
    var bytes = this._delta8;
    var k = bytes - (len + this.padLength) % bytes;
    var res = new Array(k + this.padLength);
    res[0] = 0x80;
    for(var i = 1; i < k; i++)res[i] = 0;
    // Append length
    len <<= 3;
    if (this.endian === "big") {
        for(var t = 8; t < this.padLength; t++)res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = len >>> 24 & 0xff;
        res[i++] = len >>> 16 & 0xff;
        res[i++] = len >>> 8 & 0xff;
        res[i++] = len & 0xff;
    } else {
        res[i++] = len & 0xff;
        res[i++] = len >>> 8 & 0xff;
        res[i++] = len >>> 16 & 0xff;
        res[i++] = len >>> 24 & 0xff;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        for(t = 8; t < this.padLength; t++)res[i++] = 0;
    }
    return res;
};
var sha = {};
var common$4 = {};
var utils$7 = utils$9;
var rotr32 = utils$7.rotr32;
function ft_1$1(s1, x, y, z) {
    if (s1 === 0) return ch32$1(x, y, z);
    if (s1 === 1 || s1 === 3) return p32(x, y, z);
    if (s1 === 2) return maj32$1(x, y, z);
}
common$4.ft_1 = ft_1$1;
function ch32$1(x, y, z) {
    return x & y ^ ~x & z;
}
common$4.ch32 = ch32$1;
function maj32$1(x, y, z) {
    return x & y ^ x & z ^ y & z;
}
common$4.maj32 = maj32$1;
function p32(x, y, z) {
    return x ^ y ^ z;
}
common$4.p32 = p32;
function s0_256$1(x) {
    return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}
common$4.s0_256 = s0_256$1;
function s1_256$1(x) {
    return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}
common$4.s1_256 = s1_256$1;
function g0_256$1(x) {
    return rotr32(x, 7) ^ rotr32(x, 18) ^ x >>> 3;
}
common$4.g0_256 = g0_256$1;
function g1_256$1(x) {
    return rotr32(x, 17) ^ rotr32(x, 19) ^ x >>> 10;
}
common$4.g1_256 = g1_256$1;
var utils$6 = utils$9;
var common$3 = common$5;
var shaCommon$1 = common$4;
var rotl32$1 = utils$6.rotl32;
var sum32$2 = utils$6.sum32;
var sum32_5$1 = utils$6.sum32_5;
var ft_1 = shaCommon$1.ft_1;
var BlockHash$3 = common$3.BlockHash;
var sha1_K = [
    0x5A827999,
    0x6ED9EBA1,
    0x8F1BBCDC,
    0xCA62C1D6
];
function SHA1() {
    if (!(this instanceof SHA1)) return new SHA1();
    BlockHash$3.call(this);
    this.h = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    this.W = new Array(80);
}
utils$6.inherits(SHA1, BlockHash$3);
var _1 = SHA1;
SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;
SHA1.prototype._update = function _update(msg, start) {
    var W = this.W;
    for(var i = 0; i < 16; i++)W[i] = msg[start + i];
    for(; i < W.length; i++)W[i] = rotl32$1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
    var a = this.h[0];
    var b = this.h[1];
    var c = this.h[2];
    var d = this.h[3];
    var e = this.h[4];
    for(i = 0; i < W.length; i++){
        var s2 = ~~(i / 20);
        var t = sum32_5$1(rotl32$1(a, 5), ft_1(s2, b, c, d), e, W[i], sha1_K[s2]);
        e = d;
        d = c;
        c = rotl32$1(b, 30);
        b = a;
        a = t;
    }
    this.h[0] = sum32$2(this.h[0], a);
    this.h[1] = sum32$2(this.h[1], b);
    this.h[2] = sum32$2(this.h[2], c);
    this.h[3] = sum32$2(this.h[3], d);
    this.h[4] = sum32$2(this.h[4], e);
};
SHA1.prototype._digest = function digest(enc) {
    if (enc === "hex") return utils$6.toHex32(this.h, "big");
    else return utils$6.split32(this.h, "big");
};
var utils$5 = utils$9;
var common$2 = common$5;
var shaCommon = common$4;
var assert$3 = minimalisticAssert;
var sum32$1 = utils$5.sum32;
var sum32_4$1 = utils$5.sum32_4;
var sum32_5 = utils$5.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;
var BlockHash$2 = common$2.BlockHash;
var sha256_K = [
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
];
function SHA256$1() {
    if (!(this instanceof SHA256$1)) return new SHA256$1();
    BlockHash$2.call(this);
    this.h = [
        0x6a09e667,
        0xbb67ae85,
        0x3c6ef372,
        0xa54ff53a,
        0x510e527f,
        0x9b05688c,
        0x1f83d9ab,
        0x5be0cd19
    ];
    this.k = sha256_K;
    this.W = new Array(64);
}
utils$5.inherits(SHA256$1, BlockHash$2);
var _256 = SHA256$1;
SHA256$1.blockSize = 512;
SHA256$1.outSize = 256;
SHA256$1.hmacStrength = 192;
SHA256$1.padLength = 64;
SHA256$1.prototype._update = function _update(msg, start) {
    var W = this.W;
    for(var i = 0; i < 16; i++)W[i] = msg[start + i];
    for(; i < W.length; i++)W[i] = sum32_4$1(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);
    var a = this.h[0];
    var b = this.h[1];
    var c = this.h[2];
    var d = this.h[3];
    var e = this.h[4];
    var f1 = this.h[5];
    var g = this.h[6];
    var h = this.h[7];
    assert$3(this.k.length === W.length);
    for(i = 0; i < W.length; i++){
        var T1 = sum32_5(h, s1_256(e), ch32(e, f1, g), this.k[i], W[i]);
        var T2 = sum32$1(s0_256(a), maj32(a, b, c));
        h = g;
        g = f1;
        f1 = e;
        e = sum32$1(d, T1);
        d = c;
        c = b;
        b = a;
        a = sum32$1(T1, T2);
    }
    this.h[0] = sum32$1(this.h[0], a);
    this.h[1] = sum32$1(this.h[1], b);
    this.h[2] = sum32$1(this.h[2], c);
    this.h[3] = sum32$1(this.h[3], d);
    this.h[4] = sum32$1(this.h[4], e);
    this.h[5] = sum32$1(this.h[5], f1);
    this.h[6] = sum32$1(this.h[6], g);
    this.h[7] = sum32$1(this.h[7], h);
};
SHA256$1.prototype._digest = function digest(enc) {
    if (enc === "hex") return utils$5.toHex32(this.h, "big");
    else return utils$5.split32(this.h, "big");
};
var utils$4 = utils$9;
var SHA256 = _256;
function SHA224() {
    if (!(this instanceof SHA224)) return new SHA224();
    SHA256.call(this);
    this.h = [
        0xc1059ed8,
        0x367cd507,
        0x3070dd17,
        0xf70e5939,
        0xffc00b31,
        0x68581511,
        0x64f98fa7,
        0xbefa4fa4
    ];
}
utils$4.inherits(SHA224, SHA256);
var _224 = SHA224;
SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;
SHA224.prototype._digest = function digest(enc) {
    // Just truncate output
    if (enc === "hex") return utils$4.toHex32(this.h.slice(0, 7), "big");
    else return utils$4.split32(this.h.slice(0, 7), "big");
};
var utils$3 = utils$9;
var common$1 = common$5;
var assert$2 = minimalisticAssert;
var rotr64_hi = utils$3.rotr64_hi;
var rotr64_lo = utils$3.rotr64_lo;
var shr64_hi = utils$3.shr64_hi;
var shr64_lo = utils$3.shr64_lo;
var sum64 = utils$3.sum64;
var sum64_hi = utils$3.sum64_hi;
var sum64_lo = utils$3.sum64_lo;
var sum64_4_hi = utils$3.sum64_4_hi;
var sum64_4_lo = utils$3.sum64_4_lo;
var sum64_5_hi = utils$3.sum64_5_hi;
var sum64_5_lo = utils$3.sum64_5_lo;
var BlockHash$1 = common$1.BlockHash;
var sha512_K = [
    0x428a2f98,
    0xd728ae22,
    0x71374491,
    0x23ef65cd,
    0xb5c0fbcf,
    0xec4d3b2f,
    0xe9b5dba5,
    0x8189dbbc,
    0x3956c25b,
    0xf348b538,
    0x59f111f1,
    0xb605d019,
    0x923f82a4,
    0xaf194f9b,
    0xab1c5ed5,
    0xda6d8118,
    0xd807aa98,
    0xa3030242,
    0x12835b01,
    0x45706fbe,
    0x243185be,
    0x4ee4b28c,
    0x550c7dc3,
    0xd5ffb4e2,
    0x72be5d74,
    0xf27b896f,
    0x80deb1fe,
    0x3b1696b1,
    0x9bdc06a7,
    0x25c71235,
    0xc19bf174,
    0xcf692694,
    0xe49b69c1,
    0x9ef14ad2,
    0xefbe4786,
    0x384f25e3,
    0x0fc19dc6,
    0x8b8cd5b5,
    0x240ca1cc,
    0x77ac9c65,
    0x2de92c6f,
    0x592b0275,
    0x4a7484aa,
    0x6ea6e483,
    0x5cb0a9dc,
    0xbd41fbd4,
    0x76f988da,
    0x831153b5,
    0x983e5152,
    0xee66dfab,
    0xa831c66d,
    0x2db43210,
    0xb00327c8,
    0x98fb213f,
    0xbf597fc7,
    0xbeef0ee4,
    0xc6e00bf3,
    0x3da88fc2,
    0xd5a79147,
    0x930aa725,
    0x06ca6351,
    0xe003826f,
    0x14292967,
    0x0a0e6e70,
    0x27b70a85,
    0x46d22ffc,
    0x2e1b2138,
    0x5c26c926,
    0x4d2c6dfc,
    0x5ac42aed,
    0x53380d13,
    0x9d95b3df,
    0x650a7354,
    0x8baf63de,
    0x766a0abb,
    0x3c77b2a8,
    0x81c2c92e,
    0x47edaee6,
    0x92722c85,
    0x1482353b,
    0xa2bfe8a1,
    0x4cf10364,
    0xa81a664b,
    0xbc423001,
    0xc24b8b70,
    0xd0f89791,
    0xc76c51a3,
    0x0654be30,
    0xd192e819,
    0xd6ef5218,
    0xd6990624,
    0x5565a910,
    0xf40e3585,
    0x5771202a,
    0x106aa070,
    0x32bbd1b8,
    0x19a4c116,
    0xb8d2d0c8,
    0x1e376c08,
    0x5141ab53,
    0x2748774c,
    0xdf8eeb99,
    0x34b0bcb5,
    0xe19b48a8,
    0x391c0cb3,
    0xc5c95a63,
    0x4ed8aa4a,
    0xe3418acb,
    0x5b9cca4f,
    0x7763e373,
    0x682e6ff3,
    0xd6b2b8a3,
    0x748f82ee,
    0x5defb2fc,
    0x78a5636f,
    0x43172f60,
    0x84c87814,
    0xa1f0ab72,
    0x8cc70208,
    0x1a6439ec,
    0x90befffa,
    0x23631e28,
    0xa4506ceb,
    0xde82bde9,
    0xbef9a3f7,
    0xb2c67915,
    0xc67178f2,
    0xe372532b,
    0xca273ece,
    0xea26619c,
    0xd186b8c7,
    0x21c0c207,
    0xeada7dd6,
    0xcde0eb1e,
    0xf57d4f7f,
    0xee6ed178,
    0x06f067aa,
    0x72176fba,
    0x0a637dc5,
    0xa2c898a6,
    0x113f9804,
    0xbef90dae,
    0x1b710b35,
    0x131c471b,
    0x28db77f5,
    0x23047d84,
    0x32caab7b,
    0x40c72493,
    0x3c9ebe0a,
    0x15c9bebc,
    0x431d67c4,
    0x9c100d4c,
    0x4cc5d4be,
    0xcb3e42b6,
    0x597f299c,
    0xfc657e2a,
    0x5fcb6fab,
    0x3ad6faec,
    0x6c44198c,
    0x4a475817
];
function SHA512$1() {
    if (!(this instanceof SHA512$1)) return new SHA512$1();
    BlockHash$1.call(this);
    this.h = [
        0x6a09e667,
        0xf3bcc908,
        0xbb67ae85,
        0x84caa73b,
        0x3c6ef372,
        0xfe94f82b,
        0xa54ff53a,
        0x5f1d36f1,
        0x510e527f,
        0xade682d1,
        0x9b05688c,
        0x2b3e6c1f,
        0x1f83d9ab,
        0xfb41bd6b,
        0x5be0cd19,
        0x137e2179
    ];
    this.k = sha512_K;
    this.W = new Array(160);
}
utils$3.inherits(SHA512$1, BlockHash$1);
var _512 = SHA512$1;
SHA512$1.blockSize = 1024;
SHA512$1.outSize = 512;
SHA512$1.hmacStrength = 192;
SHA512$1.padLength = 128;
SHA512$1.prototype._prepareBlock = function _prepareBlock(msg, start) {
    var W = this.W;
    // 32 x 32bit words
    for(var i = 0; i < 32; i++)W[i] = msg[start + i];
    for(; i < W.length; i += 2){
        var c0_hi = g1_512_hi(W[i - 4], W[i - 3]); // i - 2
        var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
        var c1_hi = W[i - 14]; // i - 7
        var c1_lo = W[i - 13];
        var c2_hi = g0_512_hi(W[i - 30], W[i - 29]); // i - 15
        var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
        var c3_hi = W[i - 32]; // i - 16
        var c3_lo = W[i - 31];
        W[i] = sum64_4_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
        W[i + 1] = sum64_4_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
    }
};
SHA512$1.prototype._update = function _update(msg, start) {
    this._prepareBlock(msg, start);
    var W = this.W;
    var ah = this.h[0];
    var al = this.h[1];
    var bh = this.h[2];
    var bl = this.h[3];
    var ch = this.h[4];
    var cl = this.h[5];
    var dh = this.h[6];
    var dl = this.h[7];
    var eh = this.h[8];
    var el = this.h[9];
    var fh = this.h[10];
    var fl = this.h[11];
    var gh = this.h[12];
    var gl = this.h[13];
    var hh = this.h[14];
    var hl = this.h[15];
    assert$2(this.k.length === W.length);
    for(var i = 0; i < W.length; i += 2){
        var c0_hi = hh;
        var c0_lo = hl;
        var c1_hi = s1_512_hi(eh, el);
        var c1_lo = s1_512_lo(eh, el);
        var c2_hi = ch64_hi(eh, el, fh, fl, gh);
        var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
        var c3_hi = this.k[i];
        var c3_lo = this.k[i + 1];
        var c4_hi = W[i];
        var c4_lo = W[i + 1];
        var T1_hi = sum64_5_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
        var T1_lo = sum64_5_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
        c0_hi = s0_512_hi(ah, al);
        c0_lo = s0_512_lo(ah, al);
        c1_hi = maj64_hi(ah, al, bh, bl, ch);
        c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
        var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
        var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        eh = sum64_hi(dh, dl, T1_hi, T1_lo);
        el = sum64_lo(dl, dl, T1_hi, T1_lo);
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
        al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
    }
    sum64(this.h, 0, ah, al);
    sum64(this.h, 2, bh, bl);
    sum64(this.h, 4, ch, cl);
    sum64(this.h, 6, dh, dl);
    sum64(this.h, 8, eh, el);
    sum64(this.h, 10, fh, fl);
    sum64(this.h, 12, gh, gl);
    sum64(this.h, 14, hh, hl);
};
SHA512$1.prototype._digest = function digest(enc) {
    if (enc === "hex") return utils$3.toHex32(this.h, "big");
    else return utils$3.split32(this.h, "big");
};
function ch64_hi(xh, xl, yh, yl, zh) {
    var r6 = xh & yh ^ ~xh & zh;
    if (r6 < 0) r6 += 0x100000000;
    return r6;
}
function ch64_lo(xh, xl, yh, yl, zh, zl) {
    var r7 = xl & yl ^ ~xl & zl;
    if (r7 < 0) r7 += 0x100000000;
    return r7;
}
function maj64_hi(xh, xl, yh, yl, zh) {
    var r8 = xh & yh ^ xh & zh ^ yh & zh;
    if (r8 < 0) r8 += 0x100000000;
    return r8;
}
function maj64_lo(xh, xl, yh, yl, zh, zl) {
    var r9 = xl & yl ^ xl & zl ^ yl & zl;
    if (r9 < 0) r9 += 0x100000000;
    return r9;
}
function s0_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 28);
    var c1_hi = rotr64_hi(xl, xh, 2); // 34
    var c2_hi = rotr64_hi(xl, xh, 7); // 39
    var r10 = c0_hi ^ c1_hi ^ c2_hi;
    if (r10 < 0) r10 += 0x100000000;
    return r10;
}
function s0_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 28);
    var c1_lo = rotr64_lo(xl, xh, 2); // 34
    var c2_lo = rotr64_lo(xl, xh, 7); // 39
    var r11 = c0_lo ^ c1_lo ^ c2_lo;
    if (r11 < 0) r11 += 0x100000000;
    return r11;
}
function s1_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 14);
    var c1_hi = rotr64_hi(xh, xl, 18);
    var c2_hi = rotr64_hi(xl, xh, 9); // 41
    var r12 = c0_hi ^ c1_hi ^ c2_hi;
    if (r12 < 0) r12 += 0x100000000;
    return r12;
}
function s1_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 14);
    var c1_lo = rotr64_lo(xh, xl, 18);
    var c2_lo = rotr64_lo(xl, xh, 9); // 41
    var r13 = c0_lo ^ c1_lo ^ c2_lo;
    if (r13 < 0) r13 += 0x100000000;
    return r13;
}
function g0_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 1);
    var c1_hi = rotr64_hi(xh, xl, 8);
    var c2_hi = shr64_hi(xh, xl, 7);
    var r14 = c0_hi ^ c1_hi ^ c2_hi;
    if (r14 < 0) r14 += 0x100000000;
    return r14;
}
function g0_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 1);
    var c1_lo = rotr64_lo(xh, xl, 8);
    var c2_lo = shr64_lo(xh, xl, 7);
    var r15 = c0_lo ^ c1_lo ^ c2_lo;
    if (r15 < 0) r15 += 0x100000000;
    return r15;
}
function g1_512_hi(xh, xl) {
    var c0_hi = rotr64_hi(xh, xl, 19);
    var c1_hi = rotr64_hi(xl, xh, 29); // 61
    var c2_hi = shr64_hi(xh, xl, 6);
    var r16 = c0_hi ^ c1_hi ^ c2_hi;
    if (r16 < 0) r16 += 0x100000000;
    return r16;
}
function g1_512_lo(xh, xl) {
    var c0_lo = rotr64_lo(xh, xl, 19);
    var c1_lo = rotr64_lo(xl, xh, 29); // 61
    var c2_lo = shr64_lo(xh, xl, 6);
    var r17 = c0_lo ^ c1_lo ^ c2_lo;
    if (r17 < 0) r17 += 0x100000000;
    return r17;
}
var utils$2 = utils$9;
var SHA512 = _512;
function SHA384() {
    if (!(this instanceof SHA384)) return new SHA384();
    SHA512.call(this);
    this.h = [
        0xcbbb9d5d,
        0xc1059ed8,
        0x629a292a,
        0x367cd507,
        0x9159015a,
        0x3070dd17,
        0x152fecd8,
        0xf70e5939,
        0x67332667,
        0xffc00b31,
        0x8eb44a87,
        0x68581511,
        0xdb0c2e0d,
        0x64f98fa7,
        0x47b5481d,
        0xbefa4fa4
    ];
}
utils$2.inherits(SHA384, SHA512);
var _384 = SHA384;
SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;
SHA384.prototype._digest = function digest(enc) {
    if (enc === "hex") return utils$2.toHex32(this.h.slice(0, 12), "big");
    else return utils$2.split32(this.h.slice(0, 12), "big");
};
sha.sha1 = _1;
sha.sha224 = _224;
sha.sha256 = _256;
sha.sha384 = _384;
sha.sha512 = _512;
var ripemd = {};
var utils$1 = utils$9;
var common = common$5;
var rotl32 = utils$1.rotl32;
var sum32 = utils$1.sum32;
var sum32_3 = utils$1.sum32_3;
var sum32_4 = utils$1.sum32_4;
var BlockHash = common.BlockHash;
function RIPEMD160() {
    if (!(this instanceof RIPEMD160)) return new RIPEMD160();
    BlockHash.call(this);
    this.h = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    this.endian = "little";
}
utils$1.inherits(RIPEMD160, BlockHash);
ripemd.ripemd160 = RIPEMD160;
RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;
RIPEMD160.prototype._update = function update(msg, start) {
    var A = this.h[0];
    var B = this.h[1];
    var C = this.h[2];
    var D = this.h[3];
    var E = this.h[4];
    var Ah = A;
    var Bh = B;
    var Ch = C;
    var Dh = D;
    var Eh = E;
    for(var j = 0; j < 80; j++){
        var T = sum32(rotl32(sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)), s[j]), E);
        A = E;
        E = D;
        D = rotl32(C, 10);
        C = B;
        B = T;
        T = sum32(rotl32(sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)), sh[j]), Eh);
        Ah = Eh;
        Eh = Dh;
        Dh = rotl32(Ch, 10);
        Ch = Bh;
        Bh = T;
    }
    T = sum32_3(this.h[1], C, Dh);
    this.h[1] = sum32_3(this.h[2], D, Eh);
    this.h[2] = sum32_3(this.h[3], E, Ah);
    this.h[3] = sum32_3(this.h[4], A, Bh);
    this.h[4] = sum32_3(this.h[0], B, Ch);
    this.h[0] = T;
};
RIPEMD160.prototype._digest = function digest(enc) {
    if (enc === "hex") return utils$1.toHex32(this.h, "little");
    else return utils$1.split32(this.h, "little");
};
function f(j, x, y, z) {
    if (j <= 15) return x ^ y ^ z;
    else if (j <= 31) return x & y | ~x & z;
    else if (j <= 47) return (x | ~y) ^ z;
    else if (j <= 63) return x & z | y & ~z;
    else return x ^ (y | ~z);
}
function K(j) {
    if (j <= 15) return 0x00000000;
    else if (j <= 31) return 0x5a827999;
    else if (j <= 47) return 0x6ed9eba1;
    else if (j <= 63) return 0x8f1bbcdc;
    else return 0xa953fd4e;
}
function Kh(j) {
    if (j <= 15) return 0x50a28be6;
    else if (j <= 31) return 0x5c4dd124;
    else if (j <= 47) return 0x6d703ef3;
    else if (j <= 63) return 0x7a6d76e9;
    else return 0x00000000;
}
var r = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8,
    3,
    10,
    14,
    4,
    9,
    15,
    8,
    1,
    2,
    7,
    0,
    6,
    13,
    11,
    5,
    12,
    1,
    9,
    11,
    10,
    0,
    8,
    12,
    4,
    13,
    3,
    7,
    15,
    14,
    5,
    6,
    2,
    4,
    0,
    5,
    9,
    7,
    12,
    2,
    10,
    14,
    1,
    3,
    8,
    11,
    6,
    15,
    13
];
var rh = [
    5,
    14,
    7,
    0,
    9,
    2,
    11,
    4,
    13,
    6,
    15,
    8,
    1,
    10,
    3,
    12,
    6,
    11,
    3,
    7,
    0,
    13,
    5,
    10,
    14,
    15,
    8,
    12,
    4,
    9,
    1,
    2,
    15,
    5,
    1,
    3,
    7,
    14,
    6,
    9,
    11,
    8,
    12,
    2,
    10,
    0,
    4,
    13,
    8,
    6,
    4,
    1,
    3,
    11,
    15,
    0,
    5,
    12,
    2,
    13,
    9,
    7,
    10,
    14,
    12,
    15,
    10,
    4,
    1,
    5,
    8,
    7,
    6,
    2,
    13,
    14,
    0,
    3,
    9,
    11
];
var s = [
    11,
    14,
    15,
    12,
    5,
    8,
    7,
    9,
    11,
    13,
    14,
    15,
    6,
    7,
    9,
    8,
    7,
    6,
    8,
    13,
    11,
    9,
    7,
    15,
    7,
    12,
    15,
    9,
    11,
    7,
    13,
    12,
    11,
    13,
    6,
    7,
    14,
    9,
    13,
    15,
    14,
    8,
    13,
    6,
    5,
    12,
    7,
    5,
    11,
    12,
    14,
    15,
    14,
    15,
    9,
    8,
    9,
    14,
    5,
    6,
    8,
    6,
    5,
    12,
    9,
    15,
    5,
    11,
    6,
    8,
    13,
    12,
    5,
    12,
    13,
    14,
    11,
    8,
    5,
    6
];
var sh = [
    8,
    9,
    9,
    11,
    13,
    15,
    15,
    5,
    7,
    7,
    8,
    11,
    14,
    14,
    12,
    6,
    9,
    13,
    15,
    7,
    12,
    8,
    9,
    11,
    7,
    7,
    12,
    7,
    6,
    15,
    13,
    11,
    9,
    7,
    15,
    11,
    8,
    6,
    6,
    14,
    12,
    13,
    5,
    14,
    13,
    13,
    7,
    5,
    15,
    5,
    8,
    11,
    14,
    14,
    6,
    14,
    6,
    9,
    12,
    9,
    12,
    5,
    15,
    8,
    8,
    5,
    12,
    9,
    12,
    5,
    14,
    6,
    8,
    13,
    6,
    5,
    15,
    13,
    11,
    11
];
var utils = utils$9;
var assert$1 = minimalisticAssert;
function Hmac(hash1, key, enc) {
    if (!(this instanceof Hmac)) return new Hmac(hash1, key, enc);
    this.Hash = hash1;
    this.blockSize = hash1.blockSize / 8;
    this.outSize = hash1.outSize / 8;
    this.inner = null;
    this.outer = null;
    this._init(utils.toArray(key, enc));
}
var hmac = Hmac;
Hmac.prototype._init = function init(key) {
    // Shorten key, if needed
    if (key.length > this.blockSize) key = new this.Hash().update(key).digest();
    assert$1(key.length <= this.blockSize);
    // Add padding to key
    for(var i = key.length; i < this.blockSize; i++)key.push(0);
    for(i = 0; i < key.length; i++)key[i] ^= 0x36;
    this.inner = new this.Hash().update(key);
    // 0x36 ^ 0x5c = 0x6a
    for(i = 0; i < key.length; i++)key[i] ^= 0x6a;
    this.outer = new this.Hash().update(key);
};
Hmac.prototype.update = function update(msg, enc) {
    this.inner.update(msg, enc);
    return this;
};
Hmac.prototype.digest = function digest(enc) {
    this.outer.update(this.inner.digest());
    return this.outer.digest(enc);
};
(function(exports) {
    var hash2 = exports;
    hash2.utils = utils$9;
    hash2.common = common$5;
    hash2.sha = sha;
    hash2.ripemd = ripemd;
    hash2.hmac = hmac;
    // Proxy hash functions to the main object
    hash2.sha1 = hash2.sha.sha1;
    hash2.sha256 = hash2.sha.sha256;
    hash2.sha224 = hash2.sha.sha224;
    hash2.sha384 = hash2.sha.sha384;
    hash2.sha512 = hash2.sha.sha512;
    hash2.ripemd160 = hash2.ripemd.ripemd160;
})(hash$1);
var hash = hash$1;
const version$2 = "logger/5.6.0";
let _permanentCensorErrors = false;
let _censorErrors = false;
const LogLevels = {
    debug: 1,
    "default": 2,
    info: 2,
    warning: 3,
    error: 4,
    off: 5
};
let _logLevel = LogLevels["default"];
let _globalLogger = null;
function _checkNormalize() {
    try {
        const missing = [];
        // Make sure all forms of normalization are supported
        [
            "NFD",
            "NFC",
            "NFKD",
            "NFKC"
        ].forEach((form)=>{
            try {
                if ("test".normalize(form) !== "test") throw new Error("bad normalize");
            } catch (error) {
                missing.push(form);
            }
        });
        if (missing.length) throw new Error("missing " + missing.join(", "));
        if (String.fromCharCode(0xe9).normalize("NFD") !== String.fromCharCode(0x65, 0x0301)) throw new Error("broken implementation");
    } catch (error) {
        return error.message;
    }
    return null;
}
const _normalizeError = _checkNormalize();
var LogLevel;
(function(LogLevel1) {
    LogLevel1["DEBUG"] = "DEBUG";
    LogLevel1["INFO"] = "INFO";
    LogLevel1["WARNING"] = "WARNING";
    LogLevel1["ERROR"] = "ERROR";
    LogLevel1["OFF"] = "OFF";
})(LogLevel || (LogLevel = {}));
var ErrorCode;
(function(ErrorCode1) {
    ///////////////////
    // Generic Errors
    // Unknown Error
    ErrorCode1["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    // Not Implemented
    ErrorCode1["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
    // Unsupported Operation
    //   - operation
    ErrorCode1["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION";
    // Network Error (i.e. Ethereum Network, such as an invalid chain ID)
    //   - event ("noNetwork" is not re-thrown in provider.ready; otherwise thrown)
    ErrorCode1["NETWORK_ERROR"] = "NETWORK_ERROR";
    // Some sort of bad response from the server
    ErrorCode1["SERVER_ERROR"] = "SERVER_ERROR";
    // Timeout
    ErrorCode1["TIMEOUT"] = "TIMEOUT";
    ///////////////////
    // Operational  Errors
    // Buffer Overrun
    ErrorCode1["BUFFER_OVERRUN"] = "BUFFER_OVERRUN";
    // Numeric Fault
    //   - operation: the operation being executed
    //   - fault: the reason this faulted
    ErrorCode1["NUMERIC_FAULT"] = "NUMERIC_FAULT";
    ///////////////////
    // Argument Errors
    // Missing new operator to an object
    //  - name: The name of the class
    ErrorCode1["MISSING_NEW"] = "MISSING_NEW";
    // Invalid argument (e.g. value is incompatible with type) to a function:
    //   - argument: The argument name that was invalid
    //   - value: The value of the argument
    ErrorCode1["INVALID_ARGUMENT"] = "INVALID_ARGUMENT";
    // Missing argument to a function:
    //   - count: The number of arguments received
    //   - expectedCount: The number of arguments expected
    ErrorCode1["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
    // Too many arguments
    //   - count: The number of arguments received
    //   - expectedCount: The number of arguments expected
    ErrorCode1["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT";
    ///////////////////
    // Blockchain Errors
    // Call exception
    //  - transaction: the transaction
    //  - address?: the contract address
    //  - args?: The arguments passed into the function
    //  - method?: The Solidity method signature
    //  - errorSignature?: The EIP848 error signature
    //  - errorArgs?: The EIP848 error parameters
    //  - reason: The reason (only for EIP848 "Error(string)")
    ErrorCode1["CALL_EXCEPTION"] = "CALL_EXCEPTION";
    // Insufficient funds (< value + gasLimit * gasPrice)
    //   - transaction: the transaction attempted
    ErrorCode1["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
    // Nonce has already been used
    //   - transaction: the transaction attempted
    ErrorCode1["NONCE_EXPIRED"] = "NONCE_EXPIRED";
    // The replacement fee for the transaction is too low
    //   - transaction: the transaction attempted
    ErrorCode1["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED";
    // The gas limit could not be estimated
    //   - transaction: the transaction passed to estimateGas
    ErrorCode1["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT";
    // The transaction was replaced by one with a higher gas price
    //   - reason: "cancelled", "replaced" or "repriced"
    //   - cancelled: true if reason == "cancelled" or reason == "replaced")
    //   - hash: original transaction hash
    //   - replacement: the full TransactionsResponse for the replacement
    //   - receipt: the receipt of the replacement
    ErrorCode1["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED";
})(ErrorCode || (ErrorCode = {}));
const HEX = "0123456789abcdef";
class Logger {
    constructor(version1){
        Object.defineProperty(this, "version", {
            enumerable: true,
            value: version1,
            writable: false
        });
    }
    _log(logLevel, args) {
        const level = logLevel.toLowerCase();
        if (LogLevels[level] == null) this.throwArgumentError("invalid log level name", "logLevel", logLevel);
        if (_logLevel > LogLevels[level]) return;
        console.log.apply(console, args);
    }
    debug(...args) {
        this._log(Logger.levels.DEBUG, args);
    }
    info(...args) {
        this._log(Logger.levels.INFO, args);
    }
    warn(...args) {
        this._log(Logger.levels.WARNING, args);
    }
    makeError(message, code, params) {
        // Errors are being censored
        if (_censorErrors) return this.makeError("censored error", code, {});
        if (!code) code = Logger.errors.UNKNOWN_ERROR;
        if (!params) params = {};
        const messageDetails = [];
        Object.keys(params).forEach((key)=>{
            const value = params[key];
            try {
                if (value instanceof Uint8Array) {
                    let hex = "";
                    for(let i = 0; i < value.length; i++){
                        hex += HEX[value[i] >> 4];
                        hex += HEX[value[i] & 0x0f];
                    }
                    messageDetails.push(key + "=Uint8Array(0x" + hex + ")");
                } else messageDetails.push(key + "=" + JSON.stringify(value));
            } catch (error) {
                messageDetails.push(key + "=" + JSON.stringify(params[key].toString()));
            }
        });
        messageDetails.push(`code=${code}`);
        messageDetails.push(`version=${this.version}`);
        const reason = message;
        let url = "";
        switch(code){
            case ErrorCode.NUMERIC_FAULT:
                {
                    url = "NUMERIC_FAULT";
                    const fault = message;
                    switch(fault){
                        case "overflow":
                        case "underflow":
                        case "division-by-zero":
                            url += "-" + fault;
                            break;
                        case "negative-power":
                        case "negative-width":
                            url += "-unsupported";
                            break;
                        case "unbound-bitwise-result":
                            url += "-unbound-result";
                            break;
                    }
                    break;
                }
            case ErrorCode.CALL_EXCEPTION:
            case ErrorCode.INSUFFICIENT_FUNDS:
            case ErrorCode.MISSING_NEW:
            case ErrorCode.NONCE_EXPIRED:
            case ErrorCode.REPLACEMENT_UNDERPRICED:
            case ErrorCode.TRANSACTION_REPLACED:
            case ErrorCode.UNPREDICTABLE_GAS_LIMIT:
                url = code;
                break;
        }
        if (url) message += " [ See: https://links.ethers.org/v5-errors-" + url + " ]";
        if (messageDetails.length) message += " (" + messageDetails.join(", ") + ")";
        // @TODO: Any??
        const error = new Error(message);
        error.reason = reason;
        error.code = code;
        Object.keys(params).forEach(function(key) {
            error[key] = params[key];
        });
        return error;
    }
    throwError(message, code, params) {
        throw this.makeError(message, code, params);
    }
    throwArgumentError(message, name, value) {
        return this.throwError(message, Logger.errors.INVALID_ARGUMENT, {
            argument: name,
            value: value
        });
    }
    assert(condition, message, code, params) {
        if (!!condition) return;
        this.throwError(message, code, params);
    }
    assertArgument(condition, message, name, value) {
        if (!!condition) return;
        this.throwArgumentError(message, name, value);
    }
    checkNormalize(message) {
        if (_normalizeError) this.throwError("platform missing String.prototype.normalize", Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "String.prototype.normalize",
            form: _normalizeError
        });
    }
    checkSafeUint53(value, message) {
        if (typeof value !== "number") return;
        if (message == null) message = "value not safe";
        if (value < 0 || value >= 0x1fffffffffffff) this.throwError(message, Logger.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: value
        });
        if (value % 1) this.throwError(message, Logger.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: value
        });
    }
    checkArgumentCount(count, expectedCount, message) {
        if (message) message = ": " + message;
        else message = "";
        if (count < expectedCount) this.throwError("missing argument" + message, Logger.errors.MISSING_ARGUMENT, {
            count: count,
            expectedCount: expectedCount
        });
        if (count > expectedCount) this.throwError("too many arguments" + message, Logger.errors.UNEXPECTED_ARGUMENT, {
            count: count,
            expectedCount: expectedCount
        });
    }
    checkNew(target, kind) {
        if (target === Object || target == null) this.throwError("missing new", Logger.errors.MISSING_NEW, {
            name: kind.name
        });
    }
    checkAbstract(target, kind) {
        if (target === kind) this.throwError("cannot instantiate abstract class " + JSON.stringify(kind.name) + " directly; use a sub-class", Logger.errors.UNSUPPORTED_OPERATION, {
            name: target.name,
            operation: "new"
        });
        else if (target === Object || target == null) this.throwError("missing new", Logger.errors.MISSING_NEW, {
            name: kind.name
        });
    }
    static globalLogger() {
        if (!_globalLogger) _globalLogger = new Logger(version$2);
        return _globalLogger;
    }
    static setCensorship(censorship, permanent) {
        if (!censorship && permanent) this.globalLogger().throwError("cannot permanently disable censorship", Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "setCensorship"
        });
        if (_permanentCensorErrors) {
            if (!censorship) return;
            this.globalLogger().throwError("error censorship permanent", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            });
        }
        _censorErrors = !!censorship;
        _permanentCensorErrors = !!permanent;
    }
    static setLogLevel(logLevel) {
        const level = LogLevels[logLevel.toLowerCase()];
        if (level == null) {
            Logger.globalLogger().warn("invalid log level - " + logLevel);
            return;
        }
        _logLevel = level;
    }
    static from(version2) {
        return new Logger(version2);
    }
}
Logger.errors = ErrorCode;
Logger.levels = LogLevel;
const version$1 = "bytes/5.6.0";
const logger = new Logger(version$1);
///////////////////////////////
function isHexable(value) {
    return !!value.toHexString;
}
function addSlice(array) {
    if (array.slice) return array;
    array.slice = function() {
        const args = Array.prototype.slice.call(arguments);
        return addSlice(new Uint8Array(Array.prototype.slice.apply(array, args)));
    };
    return array;
}
function isInteger(value) {
    return typeof value === "number" && value == value && value % 1 === 0;
}
function isBytes(value) {
    if (value == null) return false;
    if (value.constructor === Uint8Array) return true;
    if (typeof value === "string") return false;
    if (!isInteger(value.length) || value.length < 0) return false;
    for(let i = 0; i < value.length; i++){
        const v = value[i];
        if (!isInteger(v) || v < 0 || v >= 256) return false;
    }
    return true;
}
function arrayify(value, options) {
    if (!options) options = {};
    if (typeof value === "number") {
        logger.checkSafeUint53(value, "invalid arrayify value");
        const result = [];
        while(value){
            result.unshift(value & 0xff);
            value = parseInt(String(value / 256));
        }
        if (result.length === 0) result.push(0);
        return addSlice(new Uint8Array(result));
    }
    if (options.allowMissingPrefix && typeof value === "string" && value.substring(0, 2) !== "0x") value = "0x" + value;
    if (isHexable(value)) value = value.toHexString();
    if (isHexString(value)) {
        let hex = value.substring(2);
        if (hex.length % 2) {
            if (options.hexPad === "left") hex = "0x0" + hex.substring(2);
            else if (options.hexPad === "right") hex += "0";
            else logger.throwArgumentError("hex data is odd-length", "value", value);
        }
        const result = [];
        for(let i = 0; i < hex.length; i += 2)result.push(parseInt(hex.substring(i, i + 2), 16));
        return addSlice(new Uint8Array(result));
    }
    if (isBytes(value)) return addSlice(new Uint8Array(value));
    return logger.throwArgumentError("invalid arrayify value", "value", value);
}
function isHexString(value, length) {
    if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) return false;
    if (length && value.length !== 2 + 2 * length) return false;
    return true;
}
const version = "sha2/5.6.0";
new Logger(version);
function sha256(data) {
    return "0x" + hash.sha256().update(arrayify(data)).digest("hex");
}
class Struct {
    constructor(properties){
        Object.assign(this, properties);
    }
    encode() {
        return (0, _buffer.Buffer).from((0, _borsh.serialize)(SOLANA_SCHEMA, this));
    }
    static decode(data) {
        return (0, _borsh.deserialize)(SOLANA_SCHEMA, this, data);
    }
    static decodeUnchecked(data) {
        return (0, _borsh.deserializeUnchecked)(SOLANA_SCHEMA, this, data);
    }
} // Class representing a Rust-compatible enum, since enums are only strings or
// numbers in pure JS
class Enum extends Struct {
    constructor(properties){
        super(properties);
        this.enum = "";
        if (Object.keys(properties).length !== 1) throw new Error("Enum can only take single value");
        Object.keys(properties).map((key)=>{
            this.enum = key;
        });
    }
}
const SOLANA_SCHEMA = new Map();
/**
 * Maximum length of derived pubkey seed
 */ const MAX_SEED_LENGTH = 32;
/**
 * Value to be converted into public key
 */ function isPublicKeyData(value) {
    return value._bn !== undefined;
}
/**
 * A public key
 */ class PublicKey extends Struct {
    /** @internal */ /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */ constructor(value){
        super({});
        this._bn = void 0;
        if (isPublicKeyData(value)) this._bn = value._bn;
        else {
            if (typeof value === "string") {
                // assume base 58 encoding by default
                const decoded = (0, _bs58Default.default).decode(value);
                if (decoded.length != 32) throw new Error(`Invalid public key input`);
                this._bn = new (0, _bnJsDefault.default)(decoded);
            } else this._bn = new (0, _bnJsDefault.default)(value);
            if (this._bn.byteLength() > 32) throw new Error(`Invalid public key input`);
        }
    }
    /**
   * Default public key value. (All zeros)
   */ /**
   * Checks if two publicKeys are equal
   */ equals(publicKey1) {
        return this._bn.eq(publicKey1._bn);
    }
    /**
   * Return the base-58 representation of the public key
   */ toBase58() {
        return (0, _bs58Default.default).encode(this.toBytes());
    }
    toJSON() {
        return this.toBase58();
    }
    /**
   * Return the byte array representation of the public key
   */ toBytes() {
        return this.toBuffer();
    }
    /**
   * Return the Buffer representation of the public key
   */ toBuffer() {
        const b = this._bn.toArrayLike((0, _buffer.Buffer));
        if (b.length === 32) return b;
        const zeroPad = (0, _buffer.Buffer).alloc(32);
        b.copy(zeroPad, 32 - b.length);
        return zeroPad;
    }
    /**
   * Return the base-58 representation of the public key
   */ toString() {
        return this.toBase58();
    }
    /**
   * Derive a public key from another key, a seed, and a program ID.
   * The program ID will also serve as the owner of the public key, giving
   * it permission to write data to the account.
   */ /* eslint-disable require-await */ static async createWithSeed(fromPublicKey, seed, programId) {
        const buffer = (0, _buffer.Buffer).concat([
            fromPublicKey.toBuffer(),
            (0, _buffer.Buffer).from(seed),
            programId.toBuffer()
        ]);
        const hash3 = sha256(new Uint8Array(buffer)).slice(2);
        return new PublicKey((0, _buffer.Buffer).from(hash3, "hex"));
    }
    /**
   * Derive a program address from seeds and a program ID.
   */ /* eslint-disable require-await */ static createProgramAddressSync(seeds, programId) {
        let buffer = (0, _buffer.Buffer).alloc(0);
        seeds.forEach(function(seed) {
            if (seed.length > MAX_SEED_LENGTH) throw new TypeError(`Max seed length exceeded`);
            buffer = (0, _buffer.Buffer).concat([
                buffer,
                toBuffer(seed)
            ]);
        });
        buffer = (0, _buffer.Buffer).concat([
            buffer,
            programId.toBuffer(),
            (0, _buffer.Buffer).from("ProgramDerivedAddress")
        ]);
        let hash4 = sha256(new Uint8Array(buffer)).slice(2);
        let publicKeyBytes = new (0, _bnJsDefault.default)(hash4, 16).toArray(undefined, 32);
        if (is_on_curve(publicKeyBytes)) throw new Error(`Invalid seeds, address must fall off the curve`);
        return new PublicKey(publicKeyBytes);
    }
    /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   */ /* eslint-disable require-await */ static async createProgramAddress(seeds, programId) {
        return this.createProgramAddressSync(seeds, programId);
    }
    /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */ static findProgramAddressSync(seeds, programId) {
        let nonce = 255;
        let address;
        while(nonce != 0){
            try {
                const seedsWithNonce = seeds.concat((0, _buffer.Buffer).from([
                    nonce
                ]));
                address = this.createProgramAddressSync(seedsWithNonce, programId);
            } catch (err) {
                if (err instanceof TypeError) throw err;
                nonce--;
                continue;
            }
            return [
                address,
                nonce
            ];
        }
        throw new Error(`Unable to find a viable program address nonce`);
    }
    /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   */ static async findProgramAddress(seeds, programId) {
        return this.findProgramAddressSync(seeds, programId);
    }
    /**
   * Check that a pubkey is on the ed25519 curve.
   */ static isOnCurve(pubkeyData) {
        const pubkey = new PublicKey(pubkeyData);
        return is_on_curve(pubkey.toBytes()) == 1;
    }
}
PublicKey.default = new PublicKey("11111111111111111111111111111111");
SOLANA_SCHEMA.set(PublicKey, {
    kind: "struct",
    fields: [
        [
            "_bn",
            "u256"
        ]
    ]
}); // @ts-ignore
let naclLowLevel = (0, _tweetnaclDefault.default).lowlevel; // Check that a pubkey is on the curve.
// This function and its dependents were sourced from:
// https://github.com/dchest/tweetnacl-js/blob/f1ec050ceae0861f34280e62498b1d3ed9c350c6/nacl.js#L792
function is_on_curve(p) {
    var r18 = [
        naclLowLevel.gf(),
        naclLowLevel.gf(),
        naclLowLevel.gf(),
        naclLowLevel.gf()
    ];
    var t = naclLowLevel.gf(), chk = naclLowLevel.gf(), num = naclLowLevel.gf(), den = naclLowLevel.gf(), den2 = naclLowLevel.gf(), den4 = naclLowLevel.gf(), den6 = naclLowLevel.gf();
    naclLowLevel.set25519(r18[2], gf1);
    naclLowLevel.unpack25519(r18[1], p);
    naclLowLevel.S(num, r18[1]);
    naclLowLevel.M(den, num, naclLowLevel.D);
    naclLowLevel.Z(num, num, r18[2]);
    naclLowLevel.A(den, r18[2], den);
    naclLowLevel.S(den2, den);
    naclLowLevel.S(den4, den2);
    naclLowLevel.M(den6, den4, den2);
    naclLowLevel.M(t, den6, num);
    naclLowLevel.M(t, t, den);
    naclLowLevel.pow2523(t, t);
    naclLowLevel.M(t, t, num);
    naclLowLevel.M(t, t, den);
    naclLowLevel.M(t, t, den);
    naclLowLevel.M(r18[0], t, den);
    naclLowLevel.S(chk, r18[0]);
    naclLowLevel.M(chk, chk, den);
    if (neq25519(chk, num)) naclLowLevel.M(r18[0], r18[0], I);
    naclLowLevel.S(chk, r18[0]);
    naclLowLevel.M(chk, chk, den);
    if (neq25519(chk, num)) return 0;
    return 1;
}
let gf1 = naclLowLevel.gf([
    1
]);
let I = naclLowLevel.gf([
    0xa0b0,
    0x4a0e,
    0x1b27,
    0xc4ee,
    0xe478,
    0xad2f,
    0x1806,
    0x2f43,
    0xd7a7,
    0x3dfb,
    0x0099,
    0x2b4d,
    0xdf0b,
    0x4fc1,
    0x2480,
    0x2b83
]);
function neq25519(a, b) {
    var c = new Uint8Array(32), d = new Uint8Array(32);
    naclLowLevel.pack25519(c, a);
    naclLowLevel.pack25519(d, b);
    return naclLowLevel.crypto_verify_32(c, 0, d, 0);
}
/**
 * An account key pair (public and secret keys).
 *
 * @deprecated since v1.10.0, please use {@link Keypair} instead.
 */ class Account {
    /** @internal */ /**
   * Create a new Account object
   *
   * If the secretKey parameter is not provided a new key pair is randomly
   * created for the account
   *
   * @param secretKey Secret key for the account
   */ constructor(secretKey){
        this._keypair = void 0;
        if (secretKey) this._keypair = (0, _tweetnaclDefault.default).sign.keyPair.fromSecretKey(toBuffer(secretKey));
        else this._keypair = (0, _tweetnaclDefault.default).sign.keyPair();
    }
    /**
   * The public key for this account
   */ get publicKey() {
        return new PublicKey(this._keypair.publicKey);
    }
    /**
   * The **unencrypted** secret key for this account
   */ get secretKey() {
        return toBuffer(this._keypair.secretKey);
    }
}
const BPF_LOADER_DEPRECATED_PROGRAM_ID = new PublicKey("BPFLoader1111111111111111111111111111111111");
/**
 * Maximum over-the-wire size of a Transaction
 *
 * 1280 is IPv6 minimum MTU
 * 40 bytes is the size of the IPv6 header
 * 8 bytes is the size of the fragment header
 */ const PACKET_DATA_SIZE = 1232;
const SIGNATURE_LENGTH_IN_BYTES = 64;
/**
 * Layout for a public key
 */ const publicKey = (property = "publicKey")=>{
    return _bufferLayout.blob(32, property);
};
/**
 * Layout for a Rust String type
 */ const rustString = (property = "string")=>{
    const rsl = _bufferLayout.struct([
        _bufferLayout.u32("length"),
        _bufferLayout.u32("lengthPadding"),
        _bufferLayout.blob(_bufferLayout.offset(_bufferLayout.u32(), -8), "chars")
    ], property);
    const _decode = rsl.decode.bind(rsl);
    const _encode = rsl.encode.bind(rsl);
    const rslShim = rsl;
    rslShim.decode = (b, offset)=>{
        const data = _decode(b, offset);
        return data["chars"].toString();
    };
    rslShim.encode = (str, b, offset)=>{
        const data = {
            chars: (0, _buffer.Buffer).from(str, "utf8")
        };
        return _encode(data, b, offset);
    };
    rslShim.alloc = (str)=>{
        return _bufferLayout.u32().span + _bufferLayout.u32().span + (0, _buffer.Buffer).from(str, "utf8").length;
    };
    return rslShim;
};
/**
 * Layout for an Authorized object
 */ const authorized = (property = "authorized")=>{
    return _bufferLayout.struct([
        publicKey("staker"),
        publicKey("withdrawer")
    ], property);
};
/**
 * Layout for a Lockup object
 */ const lockup = (property = "lockup")=>{
    return _bufferLayout.struct([
        _bufferLayout.ns64("unixTimestamp"),
        _bufferLayout.ns64("epoch"),
        publicKey("custodian")
    ], property);
};
/**
 *  Layout for a VoteInit object
 */ const voteInit = (property = "voteInit")=>{
    return _bufferLayout.struct([
        publicKey("nodePubkey"),
        publicKey("authorizedVoter"),
        publicKey("authorizedWithdrawer"),
        _bufferLayout.u8("commission")
    ], property);
};
function getAlloc(type, fields) {
    let alloc = 0;
    type.layout.fields.forEach((item)=>{
        if (item.span >= 0) alloc += item.span;
        else if (typeof item.alloc === "function") alloc += item.alloc(fields[item.property]);
    });
    return alloc;
}
function decodeLength(bytes) {
    let len = 0;
    let size = 0;
    for(;;){
        let elem = bytes.shift();
        len |= (elem & 0x7f) << size * 7;
        size += 1;
        if ((elem & 0x80) === 0) break;
    }
    return len;
}
function encodeLength(bytes, len) {
    let rem_len = len;
    for(;;){
        let elem = rem_len & 0x7f;
        rem_len >>= 7;
        if (rem_len == 0) {
            bytes.push(elem);
            break;
        } else {
            elem |= 0x80;
            bytes.push(elem);
        }
    }
}
/**
 * The message header, identifying signed and read-only account
 */ const PUBKEY_LENGTH = 32;
/**
 * List of instructions to be processed atomically
 */ class Message {
    constructor(args){
        this.header = void 0;
        this.accountKeys = void 0;
        this.recentBlockhash = void 0;
        this.instructions = void 0;
        this.indexToProgramIds = new Map();
        this.header = args.header;
        this.accountKeys = args.accountKeys.map((account)=>new PublicKey(account));
        this.recentBlockhash = args.recentBlockhash;
        this.instructions = args.instructions;
        this.instructions.forEach((ix)=>this.indexToProgramIds.set(ix.programIdIndex, this.accountKeys[ix.programIdIndex]));
    }
    isAccountSigner(index) {
        return index < this.header.numRequiredSignatures;
    }
    isAccountWritable(index) {
        return index < this.header.numRequiredSignatures - this.header.numReadonlySignedAccounts || index >= this.header.numRequiredSignatures && index < this.accountKeys.length - this.header.numReadonlyUnsignedAccounts;
    }
    isProgramId(index) {
        return this.indexToProgramIds.has(index);
    }
    programIds() {
        return [
            ...this.indexToProgramIds.values()
        ];
    }
    nonProgramIds() {
        return this.accountKeys.filter((_, index)=>!this.isProgramId(index));
    }
    serialize() {
        const numKeys = this.accountKeys.length;
        let keyCount = [];
        encodeLength(keyCount, numKeys);
        const instructions = this.instructions.map((instruction)=>{
            const { accounts , programIdIndex  } = instruction;
            const data = Array.from((0, _bs58Default.default).decode(instruction.data));
            let keyIndicesCount = [];
            encodeLength(keyIndicesCount, accounts.length);
            let dataCount = [];
            encodeLength(dataCount, data.length);
            return {
                programIdIndex,
                keyIndicesCount: (0, _buffer.Buffer).from(keyIndicesCount),
                keyIndices: accounts,
                dataLength: (0, _buffer.Buffer).from(dataCount),
                data
            };
        });
        let instructionCount = [];
        encodeLength(instructionCount, instructions.length);
        let instructionBuffer = (0, _buffer.Buffer).alloc(PACKET_DATA_SIZE);
        (0, _buffer.Buffer).from(instructionCount).copy(instructionBuffer);
        let instructionBufferLength = instructionCount.length;
        instructions.forEach((instruction)=>{
            const instructionLayout = _bufferLayout.struct([
                _bufferLayout.u8("programIdIndex"),
                _bufferLayout.blob(instruction.keyIndicesCount.length, "keyIndicesCount"),
                _bufferLayout.seq(_bufferLayout.u8("keyIndex"), instruction.keyIndices.length, "keyIndices"),
                _bufferLayout.blob(instruction.dataLength.length, "dataLength"),
                _bufferLayout.seq(_bufferLayout.u8("userdatum"), instruction.data.length, "data")
            ]);
            const length = instructionLayout.encode(instruction, instructionBuffer, instructionBufferLength);
            instructionBufferLength += length;
        });
        instructionBuffer = instructionBuffer.slice(0, instructionBufferLength);
        const signDataLayout = _bufferLayout.struct([
            _bufferLayout.blob(1, "numRequiredSignatures"),
            _bufferLayout.blob(1, "numReadonlySignedAccounts"),
            _bufferLayout.blob(1, "numReadonlyUnsignedAccounts"),
            _bufferLayout.blob(keyCount.length, "keyCount"),
            _bufferLayout.seq(publicKey("key"), numKeys, "keys"),
            publicKey("recentBlockhash")
        ]);
        const transaction = {
            numRequiredSignatures: (0, _buffer.Buffer).from([
                this.header.numRequiredSignatures
            ]),
            numReadonlySignedAccounts: (0, _buffer.Buffer).from([
                this.header.numReadonlySignedAccounts
            ]),
            numReadonlyUnsignedAccounts: (0, _buffer.Buffer).from([
                this.header.numReadonlyUnsignedAccounts
            ]),
            keyCount: (0, _buffer.Buffer).from(keyCount),
            keys: this.accountKeys.map((key)=>toBuffer(key.toBytes())),
            recentBlockhash: (0, _bs58Default.default).decode(this.recentBlockhash)
        };
        let signData = (0, _buffer.Buffer).alloc(2048);
        const length1 = signDataLayout.encode(transaction, signData);
        instructionBuffer.copy(signData, length1);
        return signData.slice(0, length1 + instructionBuffer.length);
    }
    /**
   * Decode a compiled message into a Message object.
   */ static from(buffer) {
        // Slice up wire data
        let byteArray = [
            ...buffer
        ];
        const numRequiredSignatures = byteArray.shift();
        const numReadonlySignedAccounts = byteArray.shift();
        const numReadonlyUnsignedAccounts = byteArray.shift();
        const accountCount = decodeLength(byteArray);
        let accountKeys = [];
        for(let i = 0; i < accountCount; i++){
            const account = byteArray.slice(0, PUBKEY_LENGTH);
            byteArray = byteArray.slice(PUBKEY_LENGTH);
            accountKeys.push((0, _bs58Default.default).encode((0, _buffer.Buffer).from(account)));
        }
        const recentBlockhash = byteArray.slice(0, PUBKEY_LENGTH);
        byteArray = byteArray.slice(PUBKEY_LENGTH);
        const instructionCount = decodeLength(byteArray);
        let instructions = [];
        for(let i1 = 0; i1 < instructionCount; i1++){
            const programIdIndex = byteArray.shift();
            const accountCount = decodeLength(byteArray);
            const accounts = byteArray.slice(0, accountCount);
            byteArray = byteArray.slice(accountCount);
            const dataLength = decodeLength(byteArray);
            const dataSlice = byteArray.slice(0, dataLength);
            const data = (0, _bs58Default.default).encode((0, _buffer.Buffer).from(dataSlice));
            byteArray = byteArray.slice(dataLength);
            instructions.push({
                programIdIndex,
                accounts,
                data
            });
        }
        const messageArgs = {
            header: {
                numRequiredSignatures,
                numReadonlySignedAccounts,
                numReadonlyUnsignedAccounts
            },
            recentBlockhash: (0, _bs58Default.default).encode((0, _buffer.Buffer).from(recentBlockhash)),
            accountKeys,
            instructions
        };
        return new Message(messageArgs);
    }
}
function assert(condition, message) {
    if (!condition) throw new Error(message || "Assertion failed");
}
let TransactionStatus;
/**
 * Default (empty) signature
 */ (function(TransactionStatus1) {
    TransactionStatus1[TransactionStatus1["BLOCKHEIGHT_EXCEEDED"] = 0] = "BLOCKHEIGHT_EXCEEDED";
    TransactionStatus1[TransactionStatus1["PROCESSED"] = 1] = "PROCESSED";
    TransactionStatus1[TransactionStatus1["TIMED_OUT"] = 2] = "TIMED_OUT";
})(TransactionStatus || (TransactionStatus = {}));
const DEFAULT_SIGNATURE = (0, _buffer.Buffer).alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);
/**
 * Account metadata used to define instructions
 */ /**
 * Transaction Instruction class
 */ class TransactionInstruction {
    /**
   * Public keys to include in this transaction
   * Boolean represents whether this pubkey needs to sign the transaction
   */ /**
   * Program Id to execute
   */ /**
   * Program input
   */ constructor(opts){
        this.keys = void 0;
        this.programId = void 0;
        this.data = (0, _buffer.Buffer).alloc(0);
        this.programId = opts.programId;
        this.keys = opts.keys;
        if (opts.data) this.data = opts.data;
    }
    /**
   * @internal
   */ toJSON() {
        return {
            keys: this.keys.map(({ pubkey , isSigner , isWritable  })=>({
                    pubkey: pubkey.toJSON(),
                    isSigner,
                    isWritable
                })),
            programId: this.programId.toJSON(),
            data: [
                ...this.data
            ]
        };
    }
}
/**
 * Pair of signature and corresponding public key
 */ /**
 * Transaction class
 */ class Transaction {
    /**
   * Signatures for the transaction.  Typically created by invoking the
   * `sign()` method
   */ /**
   * The first (payer) Transaction signature
   */ get signature() {
        if (this.signatures.length > 0) return this.signatures[0].signature;
        return null;
    }
    /**
   * The transaction fee payer
   */ /**
   * Construct an empty Transaction
   */ constructor(opts){
        this.signatures = [];
        this.feePayer = void 0;
        this.instructions = [];
        this.recentBlockhash = void 0;
        this.lastValidBlockHeight = void 0;
        this.nonceInfo = void 0;
        this._message = void 0;
        this._json = void 0;
        if (!opts) return;
        else if (Object.prototype.hasOwnProperty.call(opts, "lastValidBlockHeight")) {
            const newOpts = opts;
            Object.assign(this, newOpts);
            this.recentBlockhash = newOpts.blockhash;
            this.lastValidBlockHeight = newOpts.lastValidBlockHeight;
        } else {
            const oldOpts = opts;
            Object.assign(this, oldOpts);
            this.recentBlockhash = oldOpts.recentBlockhash;
        }
    }
    /**
   * @internal
   */ toJSON() {
        return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo ? {
                nonce: this.nonceInfo.nonce,
                nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
            } : null,
            instructions: this.instructions.map((instruction)=>instruction.toJSON()),
            signers: this.signatures.map(({ publicKey: publicKey2  })=>{
                return publicKey2.toJSON();
            })
        };
    }
    /**
   * Add one or more instructions to this Transaction
   */ add(...items) {
        if (items.length === 0) throw new Error("No instructions");
        items.forEach((item)=>{
            if ("instructions" in item) this.instructions = this.instructions.concat(item.instructions);
            else if ("data" in item && "programId" in item && "keys" in item) this.instructions.push(item);
            else this.instructions.push(new TransactionInstruction(item));
        });
        return this;
    }
    /**
   * Compile transaction data
   */ compileMessage() {
        if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
        const { nonceInfo  } = this;
        if (nonceInfo && this.instructions[0] != nonceInfo.nonceInstruction) {
            this.recentBlockhash = nonceInfo.nonce;
            this.instructions.unshift(nonceInfo.nonceInstruction);
        }
        const { recentBlockhash  } = this;
        if (!recentBlockhash) throw new Error("Transaction recentBlockhash required");
        if (this.instructions.length < 1) console.warn("No instructions provided");
        let feePayer;
        if (this.feePayer) feePayer = this.feePayer;
        else if (this.signatures.length > 0 && this.signatures[0].publicKey) // Use implicit fee payer
        feePayer = this.signatures[0].publicKey;
        else throw new Error("Transaction fee payer required");
        for(let i = 0; i < this.instructions.length; i++){
            if (this.instructions[i].programId === undefined) throw new Error(`Transaction instruction index ${i} has undefined program id`);
        }
        const programIds = [];
        const accountMetas = [];
        this.instructions.forEach((instruction)=>{
            instruction.keys.forEach((accountMeta)=>{
                accountMetas.push({
                    ...accountMeta
                });
            });
            const programId = instruction.programId.toString();
            if (!programIds.includes(programId)) programIds.push(programId);
        }); // Append programID account metas
        programIds.forEach((programId)=>{
            accountMetas.push({
                pubkey: new PublicKey(programId),
                isSigner: false,
                isWritable: false
            });
        }); // Cull duplicate account metas
        const uniqueMetas = [];
        accountMetas.forEach((accountMeta)=>{
            const pubkeyString = accountMeta.pubkey.toString();
            const uniqueIndex = uniqueMetas.findIndex((x)=>{
                return x.pubkey.toString() === pubkeyString;
            });
            if (uniqueIndex > -1) {
                uniqueMetas[uniqueIndex].isWritable = uniqueMetas[uniqueIndex].isWritable || accountMeta.isWritable;
                uniqueMetas[uniqueIndex].isSigner = uniqueMetas[uniqueIndex].isSigner || accountMeta.isSigner;
            } else uniqueMetas.push(accountMeta);
        }); // Sort. Prioritizing first by signer, then by writable
        uniqueMetas.sort(function(x, y) {
            if (x.isSigner !== y.isSigner) // Signers always come before non-signers
            return x.isSigner ? -1 : 1;
            if (x.isWritable !== y.isWritable) // Writable accounts always come before read-only accounts
            return x.isWritable ? -1 : 1;
             // Otherwise, sort by pubkey.
            return x.pubkey._bn.cmp(y.pubkey._bn);
        }); // Move fee payer to the front
        const feePayerIndex = uniqueMetas.findIndex((x)=>{
            return x.pubkey.equals(feePayer);
        });
        if (feePayerIndex > -1) {
            const [payerMeta] = uniqueMetas.splice(feePayerIndex, 1);
            payerMeta.isSigner = true;
            payerMeta.isWritable = true;
            uniqueMetas.unshift(payerMeta);
        } else uniqueMetas.unshift({
            pubkey: feePayer,
            isSigner: true,
            isWritable: true
        });
         // Disallow unknown signers
        for (const signature of this.signatures){
            const uniqueIndex = uniqueMetas.findIndex((x)=>{
                return x.pubkey.equals(signature.publicKey);
            });
            if (uniqueIndex > -1) {
                if (!uniqueMetas[uniqueIndex].isSigner) {
                    uniqueMetas[uniqueIndex].isSigner = true;
                    console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release.");
                }
            } else throw new Error(`unknown signer: ${signature.publicKey.toString()}`);
        }
        let numRequiredSignatures = 0;
        let numReadonlySignedAccounts = 0;
        let numReadonlyUnsignedAccounts = 0; // Split out signing from non-signing keys and count header values
        const signedKeys = [];
        const unsignedKeys = [];
        uniqueMetas.forEach(({ pubkey , isSigner , isWritable  })=>{
            if (isSigner) {
                signedKeys.push(pubkey.toString());
                numRequiredSignatures += 1;
                if (!isWritable) numReadonlySignedAccounts += 1;
            } else {
                unsignedKeys.push(pubkey.toString());
                if (!isWritable) numReadonlyUnsignedAccounts += 1;
            }
        });
        const accountKeys = signedKeys.concat(unsignedKeys);
        const instructions = this.instructions.map((instruction)=>{
            const { data , programId  } = instruction;
            return {
                programIdIndex: accountKeys.indexOf(programId.toString()),
                accounts: instruction.keys.map((meta)=>accountKeys.indexOf(meta.pubkey.toString())),
                data: (0, _bs58Default.default).encode(data)
            };
        });
        instructions.forEach((instruction)=>{
            assert(instruction.programIdIndex >= 0);
            instruction.accounts.forEach((keyIndex)=>assert(keyIndex >= 0));
        });
        return new Message({
            header: {
                numRequiredSignatures,
                numReadonlySignedAccounts,
                numReadonlyUnsignedAccounts
            },
            accountKeys,
            recentBlockhash,
            instructions
        });
    }
    /**
   * @internal
   */ _compile() {
        const message = this.compileMessage();
        const signedKeys = message.accountKeys.slice(0, message.header.numRequiredSignatures);
        if (this.signatures.length === signedKeys.length) {
            const valid = this.signatures.every((pair, index)=>{
                return signedKeys[index].equals(pair.publicKey);
            });
            if (valid) return message;
        }
        this.signatures = signedKeys.map((publicKey3)=>({
                signature: null,
                publicKey: publicKey3
            }));
        return message;
    }
    /**
   * Get a buffer of the Transaction data that need to be covered by signatures
   */ serializeMessage() {
        return this._compile().serialize();
    }
    /**
   * Get the estimated fee associated with a transaction
   */ async getEstimatedFee(connection) {
        return (await connection.getFeeForMessage(this.compileMessage())).value;
    }
    /**
   * Specify the public keys which will be used to sign the Transaction.
   * The first signer will be used as the transaction fee payer account.
   *
   * Signatures can be added with either `partialSign` or `addSignature`
   *
   * @deprecated Deprecated since v0.84.0. Only the fee payer needs to be
   * specified and it can be set in the Transaction constructor or with the
   * `feePayer` property.
   */ setSigners(...signers) {
        if (signers.length === 0) throw new Error("No signers");
        const seen = new Set();
        this.signatures = signers.filter((publicKey4)=>{
            const key = publicKey4.toString();
            if (seen.has(key)) return false;
            else {
                seen.add(key);
                return true;
            }
        }).map((publicKey5)=>({
                signature: null,
                publicKey: publicKey5
            }));
    }
    /**
   * Sign the Transaction with the specified signers. Multiple signatures may
   * be applied to a Transaction. The first signature is considered "primary"
   * and is used identify and confirm transactions.
   *
   * If the Transaction `feePayer` is not set, the first signer will be used
   * as the transaction fee payer account.
   *
   * Transaction fields should not be modified after the first call to `sign`,
   * as doing so may invalidate the signature and cause the Transaction to be
   * rejected.
   *
   * The Transaction must be assigned a valid `recentBlockhash` before invoking this method
   */ sign(...signers) {
        if (signers.length === 0) throw new Error("No signers");
         // Dedupe signers
        const seen = new Set();
        const uniqueSigners = [];
        for (const signer1 of signers){
            const key = signer1.publicKey.toString();
            if (seen.has(key)) continue;
            else {
                seen.add(key);
                uniqueSigners.push(signer1);
            }
        }
        this.signatures = uniqueSigners.map((signer)=>({
                signature: null,
                publicKey: signer.publicKey
            }));
        const message = this._compile();
        this._partialSign(message, ...uniqueSigners);
    }
    /**
   * Partially sign a transaction with the specified accounts. All accounts must
   * correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * All the caveats from the `sign` method apply to `partialSign`
   */ partialSign(...signers) {
        if (signers.length === 0) throw new Error("No signers");
         // Dedupe signers
        const seen = new Set();
        const uniqueSigners = [];
        for (const signer of signers){
            const key = signer.publicKey.toString();
            if (seen.has(key)) continue;
            else {
                seen.add(key);
                uniqueSigners.push(signer);
            }
        }
        const message = this._compile();
        this._partialSign(message, ...uniqueSigners);
    }
    /**
   * @internal
   */ _partialSign(message, ...signers) {
        const signData = message.serialize();
        signers.forEach((signer)=>{
            const signature = (0, _tweetnaclDefault.default).sign.detached(signData, signer.secretKey);
            this._addSignature(signer.publicKey, toBuffer(signature));
        });
    }
    /**
   * Add an externally created signature to a transaction. The public key
   * must correspond to either the fee payer or a signer account in the transaction
   * instructions.
   */ addSignature(pubkey, signature) {
        this._compile(); // Ensure signatures array is populated
        this._addSignature(pubkey, signature);
    }
    /**
   * @internal
   */ _addSignature(pubkey, signature) {
        assert(signature.length === 64);
        const index = this.signatures.findIndex((sigpair)=>pubkey.equals(sigpair.publicKey));
        if (index < 0) throw new Error(`unknown signer: ${pubkey.toString()}`);
        this.signatures[index].signature = (0, _buffer.Buffer).from(signature);
    }
    /**
   * Verify signatures of a complete, signed Transaction
   */ verifySignatures() {
        return this._verifySignatures(this.serializeMessage(), true);
    }
    /**
   * @internal
   */ _verifySignatures(signData, requireAllSignatures) {
        for (const { signature , publicKey: publicKey6  } of this.signatures)if (signature === null) {
            if (requireAllSignatures) return false;
        } else {
            if (!(0, _tweetnaclDefault.default).sign.detached.verify(signData, signature, publicKey6.toBuffer())) return false;
        }
        return true;
    }
    /**
   * Serialize the Transaction in the wire format.
   */ serialize(config) {
        const { requireAllSignatures , verifySignatures  } = Object.assign({
            requireAllSignatures: true,
            verifySignatures: true
        }, config);
        const signData = this.serializeMessage();
        if (verifySignatures && !this._verifySignatures(signData, requireAllSignatures)) throw new Error("Signature verification failed");
        return this._serialize(signData);
    }
    /**
   * @internal
   */ _serialize(signData) {
        const { signatures  } = this;
        const signatureCount = [];
        encodeLength(signatureCount, signatures.length);
        const transactionLength = signatureCount.length + signatures.length * 64 + signData.length;
        const wireTransaction = (0, _buffer.Buffer).alloc(transactionLength);
        assert(signatures.length < 256);
        (0, _buffer.Buffer).from(signatureCount).copy(wireTransaction, 0);
        signatures.forEach(({ signature  }, index)=>{
            if (signature !== null) {
                assert(signature.length === 64, `signature has invalid length`);
                (0, _buffer.Buffer).from(signature).copy(wireTransaction, signatureCount.length + index * 64);
            }
        });
        signData.copy(wireTransaction, signatureCount.length + signatures.length * 64);
        assert(wireTransaction.length <= PACKET_DATA_SIZE, `Transaction too large: ${wireTransaction.length} > ${PACKET_DATA_SIZE}`);
        return wireTransaction;
    }
    /**
   * Deprecated method
   * @internal
   */ get keys() {
        assert(this.instructions.length === 1);
        return this.instructions[0].keys.map((keyObj)=>keyObj.pubkey);
    }
    /**
   * Deprecated method
   * @internal
   */ get programId() {
        assert(this.instructions.length === 1);
        return this.instructions[0].programId;
    }
    /**
   * Deprecated method
   * @internal
   */ get data() {
        assert(this.instructions.length === 1);
        return this.instructions[0].data;
    }
    /**
   * Parse a wire transaction into a Transaction object.
   */ static from(buffer) {
        // Slice up wire data
        let byteArray = [
            ...buffer
        ];
        const signatureCount = decodeLength(byteArray);
        let signatures = [];
        for(let i = 0; i < signatureCount; i++){
            const signature = byteArray.slice(0, SIGNATURE_LENGTH_IN_BYTES);
            byteArray = byteArray.slice(SIGNATURE_LENGTH_IN_BYTES);
            signatures.push((0, _bs58Default.default).encode((0, _buffer.Buffer).from(signature)));
        }
        return Transaction.populate(Message.from(byteArray), signatures);
    }
    /**
   * Populate Transaction object from message and signatures
   */ static populate(message, signatures = []) {
        const transaction = new Transaction();
        transaction.recentBlockhash = message.recentBlockhash;
        if (message.header.numRequiredSignatures > 0) transaction.feePayer = message.accountKeys[0];
        signatures.forEach((signature, index)=>{
            const sigPubkeyPair = {
                signature: signature == (0, _bs58Default.default).encode(DEFAULT_SIGNATURE) ? null : (0, _bs58Default.default).decode(signature),
                publicKey: message.accountKeys[index]
            };
            transaction.signatures.push(sigPubkeyPair);
        });
        message.instructions.forEach((instruction)=>{
            const keys = instruction.accounts.map((account)=>{
                const pubkey = message.accountKeys[account];
                return {
                    pubkey,
                    isSigner: transaction.signatures.some((keyObj)=>keyObj.publicKey.toString() === pubkey.toString()) || message.isAccountSigner(account),
                    isWritable: message.isAccountWritable(account)
                };
            });
            transaction.instructions.push(new TransactionInstruction({
                keys,
                programId: message.accountKeys[instruction.programIdIndex],
                data: (0, _bs58Default.default).decode(instruction.data)
            }));
        });
        transaction._message = message;
        transaction._json = transaction.toJSON();
        return transaction;
    }
}
const SYSVAR_CLOCK_PUBKEY = new PublicKey("SysvarC1ock11111111111111111111111111111111");
const SYSVAR_EPOCH_SCHEDULE_PUBKEY = new PublicKey("SysvarEpochSchedu1e111111111111111111111111");
const SYSVAR_INSTRUCTIONS_PUBKEY = new PublicKey("Sysvar1nstructions1111111111111111111111111");
const SYSVAR_RECENT_BLOCKHASHES_PUBKEY = new PublicKey("SysvarRecentB1ockHashes11111111111111111111");
const SYSVAR_RENT_PUBKEY = new PublicKey("SysvarRent111111111111111111111111111111111");
const SYSVAR_REWARDS_PUBKEY = new PublicKey("SysvarRewards111111111111111111111111111111");
const SYSVAR_SLOT_HASHES_PUBKEY = new PublicKey("SysvarS1otHashes111111111111111111111111111");
const SYSVAR_SLOT_HISTORY_PUBKEY = new PublicKey("SysvarS1otHistory11111111111111111111111111");
const SYSVAR_STAKE_HISTORY_PUBKEY = new PublicKey("SysvarStakeHistory1111111111111111111111111");
/**
 * Sign, send and confirm a transaction.
 *
 * If `commitment` option is not specified, defaults to 'max' commitment.
 *
 * @param {Connection} connection
 * @param {Transaction} transaction
 * @param {Array<Signer>} signers
 * @param {ConfirmOptions} [options]
 * @returns {Promise<TransactionSignature>}
 */ async function sendAndConfirmTransaction(connection, transaction, signers, options) {
    const sendOptions = options && {
        skipPreflight: options.skipPreflight,
        preflightCommitment: options.preflightCommitment || options.commitment,
        maxRetries: options.maxRetries
    };
    const signature = await connection.sendTransaction(transaction, signers, sendOptions);
    const status = transaction.recentBlockhash != null && transaction.lastValidBlockHeight != null ? (await connection.confirmTransaction({
        signature: signature,
        blockhash: transaction.recentBlockhash,
        lastValidBlockHeight: transaction.lastValidBlockHeight
    }, options && options.commitment)).value : (await connection.confirmTransaction(signature, options && options.commitment)).value;
    if (status.err) throw new Error(`Transaction ${signature} failed (${JSON.stringify(status)})`);
    return signature;
}
// zzz
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
/**
 * Populate a buffer of instruction data using an InstructionType
 * @internal
 */ function encodeData(type, fields) {
    const allocLength = type.layout.span >= 0 ? type.layout.span : getAlloc(type, fields);
    const data = (0, _buffer.Buffer).alloc(allocLength);
    const layoutFields = Object.assign({
        instruction: type.index
    }, fields);
    type.layout.encode(layoutFields, data);
    return data;
}
/**
 * Decode instruction data buffer using an InstructionType
 * @internal
 */ function decodeData(type, buffer) {
    let data;
    try {
        data = type.layout.decode(buffer);
    } catch (err) {
        throw new Error("invalid instruction; " + err);
    }
    if (data.instruction !== type.index) throw new Error(`invalid instruction; instruction index mismatch ${data.instruction} != ${type.index}`);
    return data;
}
/**
 * https://github.com/solana-labs/solana/blob/90bedd7e067b5b8f3ddbb45da00a4e9cabb22c62/sdk/src/fee_calculator.rs#L7-L11
 *
 * @internal
 */ const FeeCalculatorLayout = _bufferLayout.nu64("lamportsPerSignature");
/**
 * Calculator for transaction fees.
 */ /**
 * See https://github.com/solana-labs/solana/blob/0ea2843ec9cdc517572b8e62c959f41b55cf4453/sdk/src/nonce_state.rs#L29-L32
 *
 * @internal
 */ const NonceAccountLayout = _bufferLayout.struct([
    _bufferLayout.u32("version"),
    _bufferLayout.u32("state"),
    publicKey("authorizedPubkey"),
    publicKey("nonce"),
    _bufferLayout.struct([
        FeeCalculatorLayout
    ], "feeCalculator")
]);
const NONCE_ACCOUNT_LENGTH = NonceAccountLayout.span;
/**
 * NonceAccount class
 */ class NonceAccount {
    /**
   * @internal
   */ constructor(args){
        this.authorizedPubkey = void 0;
        this.nonce = void 0;
        this.feeCalculator = void 0;
        this.authorizedPubkey = args.authorizedPubkey;
        this.nonce = args.nonce;
        this.feeCalculator = args.feeCalculator;
    }
    /**
   * Deserialize NonceAccount from the account data.
   *
   * @param buffer account data
   * @return NonceAccount
   */ static fromAccountData(buffer) {
        const nonceAccount = NonceAccountLayout.decode(toBuffer(buffer), 0);
        return new NonceAccount({
            authorizedPubkey: new PublicKey(nonceAccount.authorizedPubkey),
            nonce: new PublicKey(nonceAccount.nonce).toString(),
            feeCalculator: nonceAccount.feeCalculator
        });
    }
}
const encodeDecode = (layout)=>{
    const decode = layout.decode.bind(layout);
    const encode = layout.encode.bind(layout);
    return {
        decode,
        encode
    };
};
const bigInt = (length)=>(property)=>{
        const layout = (0, _bufferLayout.blob)(length, property);
        const { encode , decode  } = encodeDecode(layout);
        const bigIntLayout = layout;
        bigIntLayout.decode = (buffer, offset)=>{
            const src = decode(buffer, offset);
            return (0, _bigintBuffer.toBigIntLE)((0, _buffer.Buffer).from(src));
        };
        bigIntLayout.encode = (bigInt1, buffer, offset)=>{
            const src = (0, _bigintBuffer.toBufferLE)(bigInt1, length);
            return encode(src, buffer, offset);
        };
        return bigIntLayout;
    };
const u64 = bigInt(8);
/**
 * Create account system transaction params
 */ /**
 * System Instruction class
 */ class SystemInstruction {
    /**
   * @internal
   */ constructor(){}
    /**
   * Decode a system instruction and retrieve the instruction type.
   */ static decodeInstructionType(instruction) {
        this.checkProgramId(instruction.programId);
        const instructionTypeLayout = _bufferLayout.u32("instruction");
        const typeIndex = instructionTypeLayout.decode(instruction.data);
        let type;
        for (const [ixType, layout] of Object.entries(SYSTEM_INSTRUCTION_LAYOUTS))if (layout.index == typeIndex) {
            type = ixType;
            break;
        }
        if (!type) throw new Error("Instruction type incorrect; not a SystemInstruction");
        return type;
    }
    /**
   * Decode a create account system instruction and retrieve the instruction params.
   */ static decodeCreateAccount(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { lamports , space , programId  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.Create, instruction.data);
        return {
            fromPubkey: instruction.keys[0].pubkey,
            newAccountPubkey: instruction.keys[1].pubkey,
            lamports,
            space,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode a transfer system instruction and retrieve the instruction params.
   */ static decodeTransfer(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { lamports  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.Transfer, instruction.data);
        return {
            fromPubkey: instruction.keys[0].pubkey,
            toPubkey: instruction.keys[1].pubkey,
            lamports
        };
    }
    /**
   * Decode a transfer with seed system instruction and retrieve the instruction params.
   */ static decodeTransferWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { lamports , seed , programId  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed, instruction.data);
        return {
            fromPubkey: instruction.keys[0].pubkey,
            basePubkey: instruction.keys[1].pubkey,
            toPubkey: instruction.keys[2].pubkey,
            lamports,
            seed,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode an allocate system instruction and retrieve the instruction params.
   */ static decodeAllocate(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 1);
        const { space  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.Allocate, instruction.data);
        return {
            accountPubkey: instruction.keys[0].pubkey,
            space
        };
    }
    /**
   * Decode an allocate with seed system instruction and retrieve the instruction params.
   */ static decodeAllocateWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 1);
        const { base , seed , space , programId  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed, instruction.data);
        return {
            accountPubkey: instruction.keys[0].pubkey,
            basePubkey: new PublicKey(base),
            seed,
            space,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode an assign system instruction and retrieve the instruction params.
   */ static decodeAssign(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 1);
        const { programId  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.Assign, instruction.data);
        return {
            accountPubkey: instruction.keys[0].pubkey,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode an assign with seed system instruction and retrieve the instruction params.
   */ static decodeAssignWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 1);
        const { base , seed , programId  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed, instruction.data);
        return {
            accountPubkey: instruction.keys[0].pubkey,
            basePubkey: new PublicKey(base),
            seed,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode a create account with seed system instruction and retrieve the instruction params.
   */ static decodeCreateWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { base , seed , lamports , space , programId  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed, instruction.data);
        return {
            fromPubkey: instruction.keys[0].pubkey,
            newAccountPubkey: instruction.keys[1].pubkey,
            basePubkey: new PublicKey(base),
            seed,
            lamports,
            space,
            programId: new PublicKey(programId)
        };
    }
    /**
   * Decode a nonce initialize system instruction and retrieve the instruction params.
   */ static decodeNonceInitialize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { authorized: authorized1  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount, instruction.data);
        return {
            noncePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: new PublicKey(authorized1)
        };
    }
    /**
   * Decode a nonce advance system instruction and retrieve the instruction params.
   */ static decodeNonceAdvance(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        decodeData(SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount, instruction.data);
        return {
            noncePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey
        };
    }
    /**
   * Decode a nonce withdraw system instruction and retrieve the instruction params.
   */ static decodeNonceWithdraw(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 5);
        const { lamports  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount, instruction.data);
        return {
            noncePubkey: instruction.keys[0].pubkey,
            toPubkey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[4].pubkey,
            lamports
        };
    }
    /**
   * Decode a nonce authorize system instruction and retrieve the instruction params.
   */ static decodeNonceAuthorize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { authorized: authorized2  } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount, instruction.data);
        return {
            noncePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[1].pubkey,
            newAuthorizedPubkey: new PublicKey(authorized2)
        };
    }
    /**
   * @internal
   */ static checkProgramId(programId) {
        if (!programId.equals(SystemProgram.programId)) throw new Error("invalid instruction; programId is not SystemProgram");
    }
    /**
   * @internal
   */ static checkKeyLength(keys, expectedLength) {
        if (keys.length < expectedLength) throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
}
/**
 * An enumeration of valid SystemInstructionType's
 */ /**
 * An enumeration of valid system InstructionType's
 * @internal
 */ const SYSTEM_INSTRUCTION_LAYOUTS = Object.freeze({
    Create: {
        index: 0,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports"),
            _bufferLayout.ns64("space"),
            publicKey("programId")
        ])
    },
    Assign: {
        index: 1,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("programId")
        ])
    },
    Transfer: {
        index: 2,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            u64("lamports")
        ])
    },
    CreateWithSeed: {
        index: 3,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("base"),
            rustString("seed"),
            _bufferLayout.ns64("lamports"),
            _bufferLayout.ns64("space"),
            publicKey("programId")
        ])
    },
    AdvanceNonceAccount: {
        index: 4,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    WithdrawNonceAccount: {
        index: 5,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports")
        ])
    },
    InitializeNonceAccount: {
        index: 6,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("authorized")
        ])
    },
    AuthorizeNonceAccount: {
        index: 7,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("authorized")
        ])
    },
    Allocate: {
        index: 8,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("space")
        ])
    },
    AllocateWithSeed: {
        index: 9,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("base"),
            rustString("seed"),
            _bufferLayout.ns64("space"),
            publicKey("programId")
        ])
    },
    AssignWithSeed: {
        index: 10,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("base"),
            rustString("seed"),
            publicKey("programId")
        ])
    },
    TransferWithSeed: {
        index: 11,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            u64("lamports"),
            rustString("seed"),
            publicKey("programId")
        ])
    }
});
/**
 * Factory class for transactions to interact with the System program
 */ class SystemProgram {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the System program
   */ /**
   * Generate a transaction instruction that creates a new account
   */ static createAccount(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.Create;
        const data = encodeData(type, {
            lamports: params.lamports,
            space: params.space,
            programId: toBuffer(params.programId.toBuffer())
        });
        return new TransactionInstruction({
            keys: [
                {
                    pubkey: params.fromPubkey,
                    isSigner: true,
                    isWritable: true
                },
                {
                    pubkey: params.newAccountPubkey,
                    isSigner: true,
                    isWritable: true
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that transfers lamports from one account to another
   */ static transfer(params) {
        let data;
        let keys;
        if ("basePubkey" in params) {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed;
            data = encodeData(type, {
                lamports: BigInt(params.lamports),
                seed: params.seed,
                programId: toBuffer(params.programId.toBuffer())
            });
            keys = [
                {
                    pubkey: params.fromPubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.basePubkey,
                    isSigner: true,
                    isWritable: false
                },
                {
                    pubkey: params.toPubkey,
                    isSigner: false,
                    isWritable: true
                }
            ];
        } else {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.Transfer;
            data = encodeData(type, {
                lamports: BigInt(params.lamports)
            });
            keys = [
                {
                    pubkey: params.fromPubkey,
                    isSigner: true,
                    isWritable: true
                },
                {
                    pubkey: params.toPubkey,
                    isSigner: false,
                    isWritable: true
                }
            ];
        }
        return new TransactionInstruction({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that assigns an account to a program
   */ static assign(params) {
        let data;
        let keys;
        if ("basePubkey" in params) {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed;
            data = encodeData(type, {
                base: toBuffer(params.basePubkey.toBuffer()),
                seed: params.seed,
                programId: toBuffer(params.programId.toBuffer())
            });
            keys = [
                {
                    pubkey: params.accountPubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.basePubkey,
                    isSigner: true,
                    isWritable: false
                }
            ];
        } else {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.Assign;
            data = encodeData(type, {
                programId: toBuffer(params.programId.toBuffer())
            });
            keys = [
                {
                    pubkey: params.accountPubkey,
                    isSigner: true,
                    isWritable: true
                }
            ];
        }
        return new TransactionInstruction({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that creates a new account at
   *   an address generated with `from`, a seed, and programId
   */ static createAccountWithSeed(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed;
        const data = encodeData(type, {
            base: toBuffer(params.basePubkey.toBuffer()),
            seed: params.seed,
            lamports: params.lamports,
            space: params.space,
            programId: toBuffer(params.programId.toBuffer())
        });
        let keys = [
            {
                pubkey: params.fromPubkey,
                isSigner: true,
                isWritable: true
            },
            {
                pubkey: params.newAccountPubkey,
                isSigner: false,
                isWritable: true
            }
        ];
        if (params.basePubkey != params.fromPubkey) keys.push({
            pubkey: params.basePubkey,
            isSigner: true,
            isWritable: false
        });
        return new TransactionInstruction({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction that creates a new Nonce account
   */ static createNonceAccount(params) {
        const transaction = new Transaction();
        if ("basePubkey" in params && "seed" in params) transaction.add(SystemProgram.createAccountWithSeed({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.noncePubkey,
            basePubkey: params.basePubkey,
            seed: params.seed,
            lamports: params.lamports,
            space: NONCE_ACCOUNT_LENGTH,
            programId: this.programId
        }));
        else transaction.add(SystemProgram.createAccount({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.noncePubkey,
            lamports: params.lamports,
            space: NONCE_ACCOUNT_LENGTH,
            programId: this.programId
        }));
        const initParams = {
            noncePubkey: params.noncePubkey,
            authorizedPubkey: params.authorizedPubkey
        };
        transaction.add(this.nonceInitialize(initParams));
        return transaction;
    }
    /**
   * Generate an instruction to initialize a Nonce account
   */ static nonceInitialize(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount;
        const data = encodeData(type, {
            authorized: toBuffer(params.authorizedPubkey.toBuffer())
        });
        const instructionData = {
            keys: [
                {
                    pubkey: params.noncePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        };
        return new TransactionInstruction(instructionData);
    }
    /**
   * Generate an instruction to advance the nonce in a Nonce account
   */ static nonceAdvance(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount;
        const data = encodeData(type);
        const instructionData = {
            keys: [
                {
                    pubkey: params.noncePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: params.authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        };
        return new TransactionInstruction(instructionData);
    }
    /**
   * Generate a transaction instruction that withdraws lamports from a Nonce account
   */ static nonceWithdraw(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount;
        const data = encodeData(type, {
            lamports: params.lamports
        });
        return new TransactionInstruction({
            keys: [
                {
                    pubkey: params.noncePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.toPubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: params.authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that authorizes a new PublicKey as the authority
   * on a Nonce account.
   */ static nonceAuthorize(params) {
        const type = SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount;
        const data = encodeData(type, {
            authorized: toBuffer(params.newAuthorizedPubkey.toBuffer())
        });
        return new TransactionInstruction({
            keys: [
                {
                    pubkey: params.noncePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction instruction that allocates space in an account without funding
   */ static allocate(params) {
        let data;
        let keys;
        if ("basePubkey" in params) {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed;
            data = encodeData(type, {
                base: toBuffer(params.basePubkey.toBuffer()),
                seed: params.seed,
                space: params.space,
                programId: toBuffer(params.programId.toBuffer())
            });
            keys = [
                {
                    pubkey: params.accountPubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: params.basePubkey,
                    isSigner: true,
                    isWritable: false
                }
            ];
        } else {
            const type = SYSTEM_INSTRUCTION_LAYOUTS.Allocate;
            data = encodeData(type, {
                space: params.space
            });
            keys = [
                {
                    pubkey: params.accountPubkey,
                    isSigner: true,
                    isWritable: true
                }
            ];
        }
        return new TransactionInstruction({
            keys,
            programId: this.programId,
            data
        });
    }
}
SystemProgram.programId = new PublicKey("11111111111111111111111111111111");
// rest of the Transaction fields
//
// TODO: replace 300 with a proper constant for the size of the other
// Transaction fields
const CHUNK_SIZE = PACKET_DATA_SIZE - 300;
/**
 * Program loader interface
 */ class Loader {
    /**
   * @internal
   */ constructor(){}
    /**
   * Amount of program data placed in each load Transaction
   */ /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */ static getMinNumSignatures(dataLength) {
        return 2 * (Math.ceil(dataLength / Loader.chunkSize) + 1 + 1 // Add one for Finalize transaction
        );
    }
    /**
   * Loads a generic program
   *
   * @param connection The connection to use
   * @param payer System account that pays to load the program
   * @param program Account to load the program into
   * @param programId Public key that identifies the loader
   * @param data Program octets
   * @return true if program was loaded successfully, false if program was already loaded
   */ static async load(connection, payer, program, programId, data) {
        {
            const balanceNeeded = await connection.getMinimumBalanceForRentExemption(data.length); // Fetch program account info to check if it has already been created
            const programInfo = await connection.getAccountInfo(program.publicKey, "confirmed");
            let transaction = null;
            if (programInfo !== null) {
                if (programInfo.executable) {
                    console.error("Program load failed, account is already executable");
                    return false;
                }
                if (programInfo.data.length !== data.length) {
                    transaction = transaction || new Transaction();
                    transaction.add(SystemProgram.allocate({
                        accountPubkey: program.publicKey,
                        space: data.length
                    }));
                }
                if (!programInfo.owner.equals(programId)) {
                    transaction = transaction || new Transaction();
                    transaction.add(SystemProgram.assign({
                        accountPubkey: program.publicKey,
                        programId
                    }));
                }
                if (programInfo.lamports < balanceNeeded) {
                    transaction = transaction || new Transaction();
                    transaction.add(SystemProgram.transfer({
                        fromPubkey: payer.publicKey,
                        toPubkey: program.publicKey,
                        lamports: balanceNeeded - programInfo.lamports
                    }));
                }
            } else transaction = new Transaction().add(SystemProgram.createAccount({
                fromPubkey: payer.publicKey,
                newAccountPubkey: program.publicKey,
                lamports: balanceNeeded > 0 ? balanceNeeded : 1,
                space: data.length,
                programId
            }));
             // If the account is already created correctly, skip this step
            // and proceed directly to loading instructions
            if (transaction !== null) await sendAndConfirmTransaction(connection, transaction, [
                payer,
                program
            ], {
                commitment: "confirmed"
            });
        }
        const dataLayout = _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.u32("offset"),
            _bufferLayout.u32("bytesLength"),
            _bufferLayout.u32("bytesLengthPadding"),
            _bufferLayout.seq(_bufferLayout.u8("byte"), _bufferLayout.offset(_bufferLayout.u32(), -8), "bytes")
        ]);
        const chunkSize = Loader.chunkSize;
        let offset = 0;
        let array = data;
        let transactions = [];
        while(array.length > 0){
            const bytes = array.slice(0, chunkSize);
            const data = (0, _buffer.Buffer).alloc(chunkSize + 16);
            dataLayout.encode({
                instruction: 0,
                // Load instruction
                offset,
                bytes: bytes,
                bytesLength: 0,
                bytesLengthPadding: 0
            }, data);
            const transaction = new Transaction().add({
                keys: [
                    {
                        pubkey: program.publicKey,
                        isSigner: true,
                        isWritable: true
                    }
                ],
                programId,
                data
            });
            transactions.push(sendAndConfirmTransaction(connection, transaction, [
                payer,
                program
            ], {
                commitment: "confirmed"
            })); // Delay between sends in an attempt to reduce rate limit errors
            if (connection._rpcEndpoint.includes("solana.com")) {
                const REQUESTS_PER_SECOND = 4;
                await sleep(1000 / REQUESTS_PER_SECOND);
            }
            offset += chunkSize;
            array = array.slice(chunkSize);
        }
        await Promise.all(transactions); // Finalize the account loaded with program data for execution
        {
            const dataLayout = _bufferLayout.struct([
                _bufferLayout.u32("instruction")
            ]);
            const data = (0, _buffer.Buffer).alloc(dataLayout.span);
            dataLayout.encode({
                instruction: 1 // Finalize instruction
            }, data);
            const transaction = new Transaction().add({
                keys: [
                    {
                        pubkey: program.publicKey,
                        isSigner: true,
                        isWritable: true
                    },
                    {
                        pubkey: SYSVAR_RENT_PUBKEY,
                        isSigner: false,
                        isWritable: false
                    }
                ],
                programId,
                data
            });
            await sendAndConfirmTransaction(connection, transaction, [
                payer,
                program
            ], {
                commitment: "confirmed"
            });
        }
        return true;
    }
}
Loader.chunkSize = CHUNK_SIZE;
const BPF_LOADER_PROGRAM_ID = new PublicKey("BPFLoader2111111111111111111111111111111111");
/**
 * Factory class for transactions to interact with a program loader
 */ class BpfLoader {
    /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */ static getMinNumSignatures(dataLength) {
        return Loader.getMinNumSignatures(dataLength);
    }
    /**
   * Load a BPF program
   *
   * @param connection The connection to use
   * @param payer Account that will pay program loading fees
   * @param program Account to load the program into
   * @param elf The entire ELF containing the BPF program
   * @param loaderProgramId The program id of the BPF loader to use
   * @return true if program was loaded successfully, false if program was already loaded
   */ static load(connection, payer, program, elf, loaderProgramId) {
        return Loader.load(connection, payer, program, loaderProgramId, elf);
    }
}
/**
 * Compute Budget Instruction class
 */ class ComputeBudgetInstruction {
    /**
   * @internal
   */ constructor(){}
    /**
   * Decode a compute budget instruction and retrieve the instruction type.
   */ static decodeInstructionType(instruction) {
        this.checkProgramId(instruction.programId);
        const instructionTypeLayout = _bufferLayout.u8("instruction");
        const typeIndex = instructionTypeLayout.decode(instruction.data);
        let type;
        for (const [ixType, layout] of Object.entries(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS))if (layout.index == typeIndex) {
            type = ixType;
            break;
        }
        if (!type) throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
        return type;
    }
    /**
   * Decode request units compute budget instruction and retrieve the instruction params.
   */ static decodeRequestUnits(instruction) {
        this.checkProgramId(instruction.programId);
        const { units , additionalFee  } = decodeData(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits, instruction.data);
        return {
            units,
            additionalFee
        };
    }
    /**
   * Decode request heap frame compute budget instruction and retrieve the instruction params.
   */ static decodeRequestHeapFrame(instruction) {
        this.checkProgramId(instruction.programId);
        const { bytes  } = decodeData(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame, instruction.data);
        return {
            bytes
        };
    }
    /**
   * Decode set compute unit limit compute budget instruction and retrieve the instruction params.
   */ static decodeSetComputeUnitLimit(instruction) {
        this.checkProgramId(instruction.programId);
        const { units  } = decodeData(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit, instruction.data);
        return {
            units
        };
    }
    /**
   * Decode set compute unit price compute budget instruction and retrieve the instruction params.
   */ static decodeSetComputeUnitPrice(instruction) {
        this.checkProgramId(instruction.programId);
        const { microLamports  } = decodeData(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice, instruction.data);
        return {
            microLamports
        };
    }
    /**
   * @internal
   */ static checkProgramId(programId) {
        if (!programId.equals(ComputeBudgetProgram.programId)) throw new Error("invalid instruction; programId is not ComputeBudgetProgram");
    }
}
/**
 * An enumeration of valid ComputeBudgetInstructionType's
 */ /**
 * An enumeration of valid ComputeBudget InstructionType's
 * @internal
 */ const COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = Object.freeze({
    RequestUnits: {
        index: 0,
        layout: _bufferLayout.struct([
            _bufferLayout.u8("instruction"),
            _bufferLayout.u32("units"),
            _bufferLayout.u32("additionalFee")
        ])
    },
    RequestHeapFrame: {
        index: 1,
        layout: _bufferLayout.struct([
            _bufferLayout.u8("instruction"),
            _bufferLayout.u32("bytes")
        ])
    },
    SetComputeUnitLimit: {
        index: 2,
        layout: _bufferLayout.struct([
            _bufferLayout.u8("instruction"),
            _bufferLayout.u32("units")
        ])
    },
    SetComputeUnitPrice: {
        index: 3,
        layout: _bufferLayout.struct([
            _bufferLayout.u8("instruction"),
            u64("microLamports")
        ])
    }
});
/**
 * Factory class for transaction instructions to interact with the Compute Budget program
 */ class ComputeBudgetProgram {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the Compute Budget program
   */ static requestUnits(params) {
        const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits;
        const data = encodeData(type, params);
        return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data
        });
    }
    static requestHeapFrame(params) {
        const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame;
        const data = encodeData(type, params);
        return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data
        });
    }
    static setComputeUnitLimit(params) {
        const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit;
        const data = encodeData(type, params);
        return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data
        });
    }
    static setComputeUnitPrice(params) {
        const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice;
        const data = encodeData(type, {
            microLamports: BigInt(params.microLamports)
        });
        return new TransactionInstruction({
            keys: [],
            programId: this.programId,
            data
        });
    }
}
ComputeBudgetProgram.programId = new PublicKey("ComputeBudget111111111111111111111111111111");
var objToString = Object.prototype.toString;
var objKeys = Object.keys || function(obj) {
    var keys = [];
    for(var name in obj)keys.push(name);
    return keys;
};
function stringify(val, isArrayProp) {
    var i, max, str, keys, key, propVal, toStr;
    if (val === true) return "true";
    if (val === false) return "false";
    switch(typeof val){
        case "object":
            if (val === null) return null;
            else if (val.toJSON && typeof val.toJSON === "function") return stringify(val.toJSON(), isArrayProp);
            else {
                toStr = objToString.call(val);
                if (toStr === "[object Array]") {
                    str = "[";
                    max = val.length - 1;
                    for(i = 0; i < max; i++)str += stringify(val[i], true) + ",";
                    if (max > -1) str += stringify(val[i], true);
                    return str + "]";
                } else if (toStr === "[object Object]") {
                    // only object is left
                    keys = objKeys(val).sort();
                    max = keys.length;
                    str = "";
                    i = 0;
                    while(i < max){
                        key = keys[i];
                        propVal = stringify(val[key], false);
                        if (propVal !== undefined) {
                            if (str) str += ",";
                            str += JSON.stringify(key) + ":" + propVal;
                        }
                        i++;
                    }
                    return "{" + str + "}";
                } else return JSON.stringify(val);
            }
        case "function":
        case "undefined":
            return isArrayProp ? null : undefined;
        case "string":
            return JSON.stringify(val);
        default:
            return isFinite(val) ? val : null;
    }
}
var fastStableStringify = function(val) {
    var returnVal = stringify(val, false);
    if (returnVal !== undefined) return "" + returnVal;
};
var fastStableStringify$1 = fastStableStringify;
const MINIMUM_SLOT_PER_EPOCH = 32; // Returns the number of trailing zeros in the binary representation of self.
function trailingZeros(n) {
    let trailingZeros1 = 0;
    while(n > 1){
        n /= 2;
        trailingZeros1++;
    }
    return trailingZeros1;
} // Returns the smallest power of two greater than or equal to n
function nextPowerOfTwo(n) {
    if (n === 0) return 1;
    n--;
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    n |= n >> 32;
    return n + 1;
}
/**
 * Epoch schedule
 * (see https://docs.solana.com/terminology#epoch)
 * Can be retrieved with the {@link connection.getEpochSchedule} method
 */ class EpochSchedule {
    /** The maximum number of slots in each epoch */ /** The number of slots before beginning of an epoch to calculate a leader schedule for that epoch */ /** Indicates whether epochs start short and grow */ /** The first epoch with `slotsPerEpoch` slots */ /** The first slot of `firstNormalEpoch` */ constructor(slotsPerEpoch, leaderScheduleSlotOffset, warmup, firstNormalEpoch, firstNormalSlot){
        this.slotsPerEpoch = void 0;
        this.leaderScheduleSlotOffset = void 0;
        this.warmup = void 0;
        this.firstNormalEpoch = void 0;
        this.firstNormalSlot = void 0;
        this.slotsPerEpoch = slotsPerEpoch;
        this.leaderScheduleSlotOffset = leaderScheduleSlotOffset;
        this.warmup = warmup;
        this.firstNormalEpoch = firstNormalEpoch;
        this.firstNormalSlot = firstNormalSlot;
    }
    getEpoch(slot) {
        return this.getEpochAndSlotIndex(slot)[0];
    }
    getEpochAndSlotIndex(slot) {
        if (slot < this.firstNormalSlot) {
            const epoch = trailingZeros(nextPowerOfTwo(slot + MINIMUM_SLOT_PER_EPOCH + 1)) - trailingZeros(MINIMUM_SLOT_PER_EPOCH) - 1;
            const epochLen = this.getSlotsInEpoch(epoch);
            const slotIndex = slot - (epochLen - MINIMUM_SLOT_PER_EPOCH);
            return [
                epoch,
                slotIndex
            ];
        } else {
            const normalSlotIndex = slot - this.firstNormalSlot;
            const normalEpochIndex = Math.floor(normalSlotIndex / this.slotsPerEpoch);
            const epoch = this.firstNormalEpoch + normalEpochIndex;
            const slotIndex = normalSlotIndex % this.slotsPerEpoch;
            return [
                epoch,
                slotIndex
            ];
        }
    }
    getFirstSlotInEpoch(epoch) {
        if (epoch <= this.firstNormalEpoch) return (Math.pow(2, epoch) - 1) * MINIMUM_SLOT_PER_EPOCH;
        else return (epoch - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
    }
    getLastSlotInEpoch(epoch) {
        return this.getFirstSlotInEpoch(epoch) + this.getSlotsInEpoch(epoch) - 1;
    }
    getSlotsInEpoch(epoch) {
        if (epoch < this.firstNormalEpoch) return Math.pow(2, epoch + trailingZeros(MINIMUM_SLOT_PER_EPOCH));
        else return this.slotsPerEpoch;
    }
}
class SendTransactionError extends Error {
    constructor(message, logs){
        super(message);
        this.logs = void 0;
        this.logs = logs;
    }
}
var fetchImpl = globalThis.fetch;
// TODO: These constants should be removed in favor of reading them out of a
// Syscall account
/**
 * @internal
 */ const NUM_TICKS_PER_SECOND = 160;
/**
 * @internal
 */ const DEFAULT_TICKS_PER_SLOT = 64;
/**
 * @internal
 */ const NUM_SLOTS_PER_SECOND = NUM_TICKS_PER_SECOND / DEFAULT_TICKS_PER_SLOT;
/**
 * @internal
 */ const MS_PER_SLOT = 1000 / NUM_SLOTS_PER_SECOND;
class TransactionExpiredBlockheightExceededError extends Error {
    constructor(signature){
        super(`Signature ${signature} has expired: block height exceeded.`);
        this.signature = void 0;
        this.signature = signature;
    }
}
Object.defineProperty(TransactionExpiredBlockheightExceededError.prototype, "name", {
    value: "TransactionExpiredBlockheightExceededError"
});
class TransactionExpiredTimeoutError extends Error {
    constructor(signature, timeoutSeconds){
        super(`Transaction was not confirmed in ${timeoutSeconds.toFixed(2)} seconds. It is ` + "unknown if it succeeded or failed. Check signature " + `${signature} using the Solana Explorer or CLI tools.`);
        this.signature = void 0;
        this.signature = signature;
    }
}
Object.defineProperty(TransactionExpiredTimeoutError.prototype, "name", {
    value: "TransactionExpiredTimeoutError"
});
function makeWebsocketUrl(endpoint1) {
    let url = new URL(endpoint1);
    const useHttps = url.protocol === "https:";
    url.protocol = useHttps ? "wss:" : "ws:";
    url.host = ""; // Only shift the port by +1 as a convention for ws(s) only if given endpoint
    // is explictly specifying the endpoint port (HTTP-based RPC), assuming
    // we're directly trying to connect to solana-validator's ws listening port.
    // When the endpoint omits the port, we're connecting to the protocol
    // default ports: http(80) or https(443) and it's assumed we're behind a reverse
    // proxy which manages WebSocket upgrade and backend port redirection.
    if (url.port !== "") url.port = String(Number(url.port) + 1);
    return url.toString();
}
const PublicKeyFromString = (0, _superstruct.coerce)((0, _superstruct.instance)(PublicKey), (0, _superstruct.string)(), (value)=>new PublicKey(value));
const RawAccountDataResult = (0, _superstruct.tuple)([
    (0, _superstruct.string)(),
    (0, _superstruct.literal)("base64")
]);
const BufferFromRawAccountData = (0, _superstruct.coerce)((0, _superstruct.instance)((0, _buffer.Buffer)), RawAccountDataResult, (value)=>(0, _buffer.Buffer).from(value[0], "base64"));
/**
 * Attempt to use a recent blockhash for up to 30 seconds
 * @internal
 */ const BLOCKHASH_CACHE_TIMEOUT_MS = 30000;
/**
 * HACK.
 * Copied from rpc-websockets/dist/lib/client.
 * Otherwise, `yarn build` fails with:
 * https://gist.github.com/steveluscher/c057eca81d479ef705cdb53162f9971d
 */ /**
 * @internal
 */ function createRpcResult(result) {
    return (0, _superstruct.union)([
        (0, _superstruct.type)({
            jsonrpc: (0, _superstruct.literal)("2.0"),
            id: (0, _superstruct.string)(),
            result
        }),
        (0, _superstruct.type)({
            jsonrpc: (0, _superstruct.literal)("2.0"),
            id: (0, _superstruct.string)(),
            error: (0, _superstruct.type)({
                code: (0, _superstruct.unknown)(),
                message: (0, _superstruct.string)(),
                data: (0, _superstruct.optional)((0, _superstruct.any)())
            })
        })
    ]);
}
const UnknownRpcResult = createRpcResult((0, _superstruct.unknown)());
/**
 * @internal
 */ function jsonRpcResult(schema) {
    return (0, _superstruct.coerce)(createRpcResult(schema), UnknownRpcResult, (value)=>{
        if ("error" in value) return value;
        else return {
            ...value,
            result: (0, _superstruct.create)(value.result, schema)
        };
    });
}
/**
 * @internal
 */ function jsonRpcResultAndContext(value) {
    return jsonRpcResult((0, _superstruct.type)({
        context: (0, _superstruct.type)({
            slot: (0, _superstruct.number)()
        }),
        value
    }));
}
/**
 * @internal
 */ function notificationResultAndContext(value) {
    return (0, _superstruct.type)({
        context: (0, _superstruct.type)({
            slot: (0, _superstruct.number)()
        }),
        value
    });
}
/**
 * The level of commitment desired when querying state
 * <pre>
 *   'processed': Query the most recent block which has reached 1 confirmation by the connected node
 *   'confirmed': Query the most recent block which has reached 1 confirmation by the cluster
 *   'finalized': Query the most recent block which has been finalized by the cluster
 * </pre>
 */ const GetInflationGovernorResult = (0, _superstruct.type)({
    foundation: (0, _superstruct.number)(),
    foundationTerm: (0, _superstruct.number)(),
    initial: (0, _superstruct.number)(),
    taper: (0, _superstruct.number)(),
    terminal: (0, _superstruct.number)()
});
/**
 * The inflation reward for an epoch
 */ /**
 * Expected JSON RPC response for the "getInflationReward" message
 */ const GetInflationRewardResult = jsonRpcResult((0, _superstruct.array)((0, _superstruct.nullable)((0, _superstruct.type)({
    epoch: (0, _superstruct.number)(),
    effectiveSlot: (0, _superstruct.number)(),
    amount: (0, _superstruct.number)(),
    postBalance: (0, _superstruct.number)()
}))));
/**
 * Information about the current epoch
 */ const GetEpochInfoResult = (0, _superstruct.type)({
    epoch: (0, _superstruct.number)(),
    slotIndex: (0, _superstruct.number)(),
    slotsInEpoch: (0, _superstruct.number)(),
    absoluteSlot: (0, _superstruct.number)(),
    blockHeight: (0, _superstruct.optional)((0, _superstruct.number)()),
    transactionCount: (0, _superstruct.optional)((0, _superstruct.number)())
});
const GetEpochScheduleResult = (0, _superstruct.type)({
    slotsPerEpoch: (0, _superstruct.number)(),
    leaderScheduleSlotOffset: (0, _superstruct.number)(),
    warmup: (0, _superstruct.boolean)(),
    firstNormalEpoch: (0, _superstruct.number)(),
    firstNormalSlot: (0, _superstruct.number)()
});
/**
 * Leader schedule
 * (see https://docs.solana.com/terminology#leader-schedule)
 */ const GetLeaderScheduleResult = (0, _superstruct.record)((0, _superstruct.string)(), (0, _superstruct.array)((0, _superstruct.number)()));
/**
 * Transaction error or null
 */ const TransactionErrorResult = (0, _superstruct.nullable)((0, _superstruct.union)([
    (0, _superstruct.type)({}),
    (0, _superstruct.string)()
]));
/**
 * Signature status for a transaction
 */ const SignatureStatusResult = (0, _superstruct.type)({
    err: TransactionErrorResult
});
/**
 * Transaction signature received notification
 */ const SignatureReceivedResult = (0, _superstruct.literal)("receivedSignature");
/**
 * Version info for a node
 */ const VersionResult = (0, _superstruct.type)({
    "solana-core": (0, _superstruct.string)(),
    "feature-set": (0, _superstruct.optional)((0, _superstruct.number)())
});
const SimulatedTransactionResponseStruct = jsonRpcResultAndContext((0, _superstruct.type)({
    err: (0, _superstruct.nullable)((0, _superstruct.union)([
        (0, _superstruct.type)({}),
        (0, _superstruct.string)()
    ])),
    logs: (0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.string)())),
    accounts: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.nullable)((0, _superstruct.type)({
        executable: (0, _superstruct.boolean)(),
        owner: (0, _superstruct.string)(),
        lamports: (0, _superstruct.number)(),
        data: (0, _superstruct.array)((0, _superstruct.string)()),
        rentEpoch: (0, _superstruct.optional)((0, _superstruct.number)())
    }))))),
    unitsConsumed: (0, _superstruct.optional)((0, _superstruct.number)())
}));
/**
 * Expected JSON RPC response for the "getBlockProduction" message
 */ const BlockProductionResponseStruct = jsonRpcResultAndContext((0, _superstruct.type)({
    byIdentity: (0, _superstruct.record)((0, _superstruct.string)(), (0, _superstruct.array)((0, _superstruct.number)())),
    range: (0, _superstruct.type)({
        firstSlot: (0, _superstruct.number)(),
        lastSlot: (0, _superstruct.number)()
    })
}));
/**
 * A performance sample
 */ function createRpcClient(url, useHttps, httpHeaders, customFetch, fetchMiddleware, disableRetryOnRateLimit) {
    const fetch = customFetch ? customFetch : fetchImpl;
    let fetchWithMiddleware;
    if (fetchMiddleware) fetchWithMiddleware = async (info, init)=>{
        const modifiedFetchArgs = await new Promise((resolve, reject)=>{
            try {
                fetchMiddleware(info, init, (modifiedInfo, modifiedInit)=>resolve([
                        modifiedInfo,
                        modifiedInit
                    ]));
            } catch (error) {
                reject(error);
            }
        });
        return await fetch(...modifiedFetchArgs);
    };
    const clientBrowser = new (0, _browserDefault.default)(async (request, callback)=>{
        const agent = undefined;
        const options = {
            method: "POST",
            body: request,
            agent,
            headers: Object.assign({
                "Content-Type": "application/json"
            }, httpHeaders || {})
        };
        try {
            let too_many_requests_retries = 5;
            let res;
            let waitTime = 500;
            for(;;){
                if (fetchWithMiddleware) res = await fetchWithMiddleware(url, options);
                else res = await fetch(url, options);
                if (res.status !== 429) break;
                if (disableRetryOnRateLimit === true) break;
                too_many_requests_retries -= 1;
                if (too_many_requests_retries === 0) break;
                console.log(`Server responded with ${res.status} ${res.statusText}.  Retrying after ${waitTime}ms delay...`);
                await sleep(waitTime);
                waitTime *= 2;
            }
            const text = await res.text();
            if (res.ok) callback(null, text);
            else callback(new Error(`${res.status} ${res.statusText}: ${text}`));
        } catch (err) {
            if (err instanceof Error) callback(err);
        } finally{}
    }, {});
    return clientBrowser;
}
function createRpcRequest(client) {
    return (method, args)=>{
        return new Promise((resolve, reject)=>{
            client.request(method, args, (err, response)=>{
                if (err) {
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    };
}
function createRpcBatchRequest(client) {
    return (requests)=>{
        return new Promise((resolve, reject)=>{
            // Do nothing if requests is empty
            if (requests.length === 0) resolve([]);
            const batch = requests.map((params)=>{
                return client.request(params.methodName, params.args);
            });
            client.request(batch, (err, response)=>{
                if (err) {
                    reject(err);
                    return;
                }
                resolve(response);
            });
        });
    };
}
/**
 * Expected JSON RPC response for the "getInflationGovernor" message
 */ const GetInflationGovernorRpcResult = jsonRpcResult(GetInflationGovernorResult);
/**
 * Expected JSON RPC response for the "getEpochInfo" message
 */ const GetEpochInfoRpcResult = jsonRpcResult(GetEpochInfoResult);
/**
 * Expected JSON RPC response for the "getEpochSchedule" message
 */ const GetEpochScheduleRpcResult = jsonRpcResult(GetEpochScheduleResult);
/**
 * Expected JSON RPC response for the "getLeaderSchedule" message
 */ const GetLeaderScheduleRpcResult = jsonRpcResult(GetLeaderScheduleResult);
/**
 * Expected JSON RPC response for the "minimumLedgerSlot" and "getFirstAvailableBlock" messages
 */ const SlotRpcResult = jsonRpcResult((0, _superstruct.number)());
/**
 * Supply
 */ /**
 * Expected JSON RPC response for the "getSupply" message
 */ const GetSupplyRpcResult = jsonRpcResultAndContext((0, _superstruct.type)({
    total: (0, _superstruct.number)(),
    circulating: (0, _superstruct.number)(),
    nonCirculating: (0, _superstruct.number)(),
    nonCirculatingAccounts: (0, _superstruct.array)(PublicKeyFromString)
}));
/**
 * Token amount object which returns a token amount in different formats
 * for various client use cases.
 */ /**
 * Expected JSON RPC structure for token amounts
 */ const TokenAmountResult = (0, _superstruct.type)({
    amount: (0, _superstruct.string)(),
    uiAmount: (0, _superstruct.nullable)((0, _superstruct.number)()),
    decimals: (0, _superstruct.number)(),
    uiAmountString: (0, _superstruct.optional)((0, _superstruct.string)())
});
/**
 * Token address and balance.
 */ /**
 * Expected JSON RPC response for the "getTokenLargestAccounts" message
 */ const GetTokenLargestAccountsResult = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.type)({
    address: PublicKeyFromString,
    amount: (0, _superstruct.string)(),
    uiAmount: (0, _superstruct.nullable)((0, _superstruct.number)()),
    decimals: (0, _superstruct.number)(),
    uiAmountString: (0, _superstruct.optional)((0, _superstruct.string)())
})));
/**
 * Expected JSON RPC response for the "getTokenAccountsByOwner" message
 */ const GetTokenAccountsByOwner = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: (0, _superstruct.type)({
        executable: (0, _superstruct.boolean)(),
        owner: PublicKeyFromString,
        lamports: (0, _superstruct.number)(),
        data: BufferFromRawAccountData,
        rentEpoch: (0, _superstruct.number)()
    })
})));
const ParsedAccountDataResult = (0, _superstruct.type)({
    program: (0, _superstruct.string)(),
    parsed: (0, _superstruct.unknown)(),
    space: (0, _superstruct.number)()
});
/**
 * Expected JSON RPC response for the "getTokenAccountsByOwner" message with parsed data
 */ const GetParsedTokenAccountsByOwner = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: (0, _superstruct.type)({
        executable: (0, _superstruct.boolean)(),
        owner: PublicKeyFromString,
        lamports: (0, _superstruct.number)(),
        data: ParsedAccountDataResult,
        rentEpoch: (0, _superstruct.number)()
    })
})));
/**
 * Pair of an account address and its balance
 */ /**
 * Expected JSON RPC response for the "getLargestAccounts" message
 */ const GetLargestAccountsRpcResult = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.type)({
    lamports: (0, _superstruct.number)(),
    address: PublicKeyFromString
})));
/**
 * @internal
 */ const AccountInfoResult = (0, _superstruct.type)({
    executable: (0, _superstruct.boolean)(),
    owner: PublicKeyFromString,
    lamports: (0, _superstruct.number)(),
    data: BufferFromRawAccountData,
    rentEpoch: (0, _superstruct.number)()
});
/**
 * @internal
 */ const KeyedAccountInfoResult = (0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: AccountInfoResult
});
const ParsedOrRawAccountData = (0, _superstruct.coerce)((0, _superstruct.union)([
    (0, _superstruct.instance)((0, _buffer.Buffer)),
    ParsedAccountDataResult
]), (0, _superstruct.union)([
    RawAccountDataResult,
    ParsedAccountDataResult
]), (value)=>{
    if (Array.isArray(value)) return (0, _superstruct.create)(value, BufferFromRawAccountData);
    else return value;
});
/**
 * @internal
 */ const ParsedAccountInfoResult = (0, _superstruct.type)({
    executable: (0, _superstruct.boolean)(),
    owner: PublicKeyFromString,
    lamports: (0, _superstruct.number)(),
    data: ParsedOrRawAccountData,
    rentEpoch: (0, _superstruct.number)()
});
const KeyedParsedAccountInfoResult = (0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: ParsedAccountInfoResult
});
/**
 * @internal
 */ const StakeActivationResult = (0, _superstruct.type)({
    state: (0, _superstruct.union)([
        (0, _superstruct.literal)("active"),
        (0, _superstruct.literal)("inactive"),
        (0, _superstruct.literal)("activating"),
        (0, _superstruct.literal)("deactivating")
    ]),
    active: (0, _superstruct.number)(),
    inactive: (0, _superstruct.number)()
});
/**
 * Expected JSON RPC response for the "getConfirmedSignaturesForAddress2" message
 */ const GetConfirmedSignaturesForAddress2RpcResult = jsonRpcResult((0, _superstruct.array)((0, _superstruct.type)({
    signature: (0, _superstruct.string)(),
    slot: (0, _superstruct.number)(),
    err: TransactionErrorResult,
    memo: (0, _superstruct.nullable)((0, _superstruct.string)()),
    blockTime: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)()))
})));
/**
 * Expected JSON RPC response for the "getSignaturesForAddress" message
 */ const GetSignaturesForAddressRpcResult = jsonRpcResult((0, _superstruct.array)((0, _superstruct.type)({
    signature: (0, _superstruct.string)(),
    slot: (0, _superstruct.number)(),
    err: TransactionErrorResult,
    memo: (0, _superstruct.nullable)((0, _superstruct.string)()),
    blockTime: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)()))
})));
/***
 * Expected JSON RPC response for the "accountNotification" message
 */ const AccountNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: notificationResultAndContext(AccountInfoResult)
});
/**
 * @internal
 */ const ProgramAccountInfoResult = (0, _superstruct.type)({
    pubkey: PublicKeyFromString,
    account: AccountInfoResult
});
/***
 * Expected JSON RPC response for the "programNotification" message
 */ const ProgramAccountNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: notificationResultAndContext(ProgramAccountInfoResult)
});
/**
 * @internal
 */ const SlotInfoResult = (0, _superstruct.type)({
    parent: (0, _superstruct.number)(),
    slot: (0, _superstruct.number)(),
    root: (0, _superstruct.number)()
});
/**
 * Expected JSON RPC response for the "slotNotification" message
 */ const SlotNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: SlotInfoResult
});
/**
 * Slot updates which can be used for tracking the live progress of a cluster.
 * - `"firstShredReceived"`: connected node received the first shred of a block.
 * Indicates that a new block that is being produced.
 * - `"completed"`: connected node has received all shreds of a block. Indicates
 * a block was recently produced.
 * - `"optimisticConfirmation"`: block was optimistically confirmed by the
 * cluster. It is not guaranteed that an optimistic confirmation notification
 * will be sent for every finalized blocks.
 * - `"root"`: the connected node rooted this block.
 * - `"createdBank"`: the connected node has started validating this block.
 * - `"frozen"`: the connected node has validated this block.
 * - `"dead"`: the connected node failed to validate this block.
 */ /**
 * @internal
 */ const SlotUpdateResult = (0, _superstruct.union)([
    (0, _superstruct.type)({
        type: (0, _superstruct.union)([
            (0, _superstruct.literal)("firstShredReceived"),
            (0, _superstruct.literal)("completed"),
            (0, _superstruct.literal)("optimisticConfirmation"),
            (0, _superstruct.literal)("root")
        ]),
        slot: (0, _superstruct.number)(),
        timestamp: (0, _superstruct.number)()
    }),
    (0, _superstruct.type)({
        type: (0, _superstruct.literal)("createdBank"),
        parent: (0, _superstruct.number)(),
        slot: (0, _superstruct.number)(),
        timestamp: (0, _superstruct.number)()
    }),
    (0, _superstruct.type)({
        type: (0, _superstruct.literal)("frozen"),
        slot: (0, _superstruct.number)(),
        timestamp: (0, _superstruct.number)(),
        stats: (0, _superstruct.type)({
            numTransactionEntries: (0, _superstruct.number)(),
            numSuccessfulTransactions: (0, _superstruct.number)(),
            numFailedTransactions: (0, _superstruct.number)(),
            maxTransactionsPerEntry: (0, _superstruct.number)()
        })
    }),
    (0, _superstruct.type)({
        type: (0, _superstruct.literal)("dead"),
        slot: (0, _superstruct.number)(),
        timestamp: (0, _superstruct.number)(),
        err: (0, _superstruct.string)()
    })
]);
/**
 * Expected JSON RPC response for the "slotsUpdatesNotification" message
 */ const SlotUpdateNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: SlotUpdateResult
});
/**
 * Expected JSON RPC response for the "signatureNotification" message
 */ const SignatureNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: notificationResultAndContext((0, _superstruct.union)([
        SignatureStatusResult,
        SignatureReceivedResult
    ]))
});
/**
 * Expected JSON RPC response for the "rootNotification" message
 */ const RootNotificationResult = (0, _superstruct.type)({
    subscription: (0, _superstruct.number)(),
    result: (0, _superstruct.number)()
});
const ContactInfoResult = (0, _superstruct.type)({
    pubkey: (0, _superstruct.string)(),
    gossip: (0, _superstruct.nullable)((0, _superstruct.string)()),
    tpu: (0, _superstruct.nullable)((0, _superstruct.string)()),
    rpc: (0, _superstruct.nullable)((0, _superstruct.string)()),
    version: (0, _superstruct.nullable)((0, _superstruct.string)())
});
const VoteAccountInfoResult = (0, _superstruct.type)({
    votePubkey: (0, _superstruct.string)(),
    nodePubkey: (0, _superstruct.string)(),
    activatedStake: (0, _superstruct.number)(),
    epochVoteAccount: (0, _superstruct.boolean)(),
    epochCredits: (0, _superstruct.array)((0, _superstruct.tuple)([
        (0, _superstruct.number)(),
        (0, _superstruct.number)(),
        (0, _superstruct.number)()
    ])),
    commission: (0, _superstruct.number)(),
    lastVote: (0, _superstruct.number)(),
    rootSlot: (0, _superstruct.nullable)((0, _superstruct.number)())
});
/**
 * Expected JSON RPC response for the "getVoteAccounts" message
 */ const GetVoteAccounts = jsonRpcResult((0, _superstruct.type)({
    current: (0, _superstruct.array)(VoteAccountInfoResult),
    delinquent: (0, _superstruct.array)(VoteAccountInfoResult)
}));
const ConfirmationStatus = (0, _superstruct.union)([
    (0, _superstruct.literal)("processed"),
    (0, _superstruct.literal)("confirmed"),
    (0, _superstruct.literal)("finalized")
]);
const SignatureStatusResponse = (0, _superstruct.type)({
    slot: (0, _superstruct.number)(),
    confirmations: (0, _superstruct.nullable)((0, _superstruct.number)()),
    err: TransactionErrorResult,
    confirmationStatus: (0, _superstruct.optional)(ConfirmationStatus)
});
/**
 * Expected JSON RPC response for the "getSignatureStatuses" message
 */ const GetSignatureStatusesRpcResult = jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.nullable)(SignatureStatusResponse)));
/**
 * Expected JSON RPC response for the "getMinimumBalanceForRentExemption" message
 */ const GetMinimumBalanceForRentExemptionRpcResult = jsonRpcResult((0, _superstruct.number)());
const ConfirmedTransactionResult = (0, _superstruct.type)({
    signatures: (0, _superstruct.array)((0, _superstruct.string)()),
    message: (0, _superstruct.type)({
        accountKeys: (0, _superstruct.array)((0, _superstruct.string)()),
        header: (0, _superstruct.type)({
            numRequiredSignatures: (0, _superstruct.number)(),
            numReadonlySignedAccounts: (0, _superstruct.number)(),
            numReadonlyUnsignedAccounts: (0, _superstruct.number)()
        }),
        instructions: (0, _superstruct.array)((0, _superstruct.type)({
            accounts: (0, _superstruct.array)((0, _superstruct.number)()),
            data: (0, _superstruct.string)(),
            programIdIndex: (0, _superstruct.number)()
        })),
        recentBlockhash: (0, _superstruct.string)()
    })
});
const ParsedInstructionResult = (0, _superstruct.type)({
    parsed: (0, _superstruct.unknown)(),
    program: (0, _superstruct.string)(),
    programId: PublicKeyFromString
});
const RawInstructionResult = (0, _superstruct.type)({
    accounts: (0, _superstruct.array)(PublicKeyFromString),
    data: (0, _superstruct.string)(),
    programId: PublicKeyFromString
});
const InstructionResult = (0, _superstruct.union)([
    RawInstructionResult,
    ParsedInstructionResult
]);
const UnknownInstructionResult = (0, _superstruct.union)([
    (0, _superstruct.type)({
        parsed: (0, _superstruct.unknown)(),
        program: (0, _superstruct.string)(),
        programId: (0, _superstruct.string)()
    }),
    (0, _superstruct.type)({
        accounts: (0, _superstruct.array)((0, _superstruct.string)()),
        data: (0, _superstruct.string)(),
        programId: (0, _superstruct.string)()
    })
]);
const ParsedOrRawInstruction = (0, _superstruct.coerce)(InstructionResult, UnknownInstructionResult, (value)=>{
    if ("accounts" in value) return (0, _superstruct.create)(value, RawInstructionResult);
    else return (0, _superstruct.create)(value, ParsedInstructionResult);
});
/**
 * @internal
 */ const ParsedConfirmedTransactionResult = (0, _superstruct.type)({
    signatures: (0, _superstruct.array)((0, _superstruct.string)()),
    message: (0, _superstruct.type)({
        accountKeys: (0, _superstruct.array)((0, _superstruct.type)({
            pubkey: PublicKeyFromString,
            signer: (0, _superstruct.boolean)(),
            writable: (0, _superstruct.boolean)()
        })),
        instructions: (0, _superstruct.array)(ParsedOrRawInstruction),
        recentBlockhash: (0, _superstruct.string)()
    })
});
const TokenBalanceResult = (0, _superstruct.type)({
    accountIndex: (0, _superstruct.number)(),
    mint: (0, _superstruct.string)(),
    owner: (0, _superstruct.optional)((0, _superstruct.string)()),
    uiTokenAmount: TokenAmountResult
});
/**
 * @internal
 */ const ConfirmedTransactionMetaResult = (0, _superstruct.type)({
    err: TransactionErrorResult,
    fee: (0, _superstruct.number)(),
    innerInstructions: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.type)({
        index: (0, _superstruct.number)(),
        instructions: (0, _superstruct.array)((0, _superstruct.type)({
            accounts: (0, _superstruct.array)((0, _superstruct.number)()),
            data: (0, _superstruct.string)(),
            programIdIndex: (0, _superstruct.number)()
        }))
    })))),
    preBalances: (0, _superstruct.array)((0, _superstruct.number)()),
    postBalances: (0, _superstruct.array)((0, _superstruct.number)()),
    logMessages: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.string)()))),
    preTokenBalances: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)(TokenBalanceResult))),
    postTokenBalances: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)(TokenBalanceResult)))
});
/**
 * @internal
 */ const ParsedConfirmedTransactionMetaResult = (0, _superstruct.type)({
    err: TransactionErrorResult,
    fee: (0, _superstruct.number)(),
    innerInstructions: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.type)({
        index: (0, _superstruct.number)(),
        instructions: (0, _superstruct.array)(ParsedOrRawInstruction)
    })))),
    preBalances: (0, _superstruct.array)((0, _superstruct.number)()),
    postBalances: (0, _superstruct.array)((0, _superstruct.number)()),
    logMessages: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)((0, _superstruct.string)()))),
    preTokenBalances: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)(TokenBalanceResult))),
    postTokenBalances: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.array)(TokenBalanceResult)))
});
/**
 * Expected JSON RPC response for the "getBlock" message
 */ const GetBlockRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    transactions: (0, _superstruct.array)((0, _superstruct.type)({
        transaction: ConfirmedTransactionResult,
        meta: (0, _superstruct.nullable)(ConfirmedTransactionMetaResult)
    })),
    rewards: (0, _superstruct.optional)((0, _superstruct.array)((0, _superstruct.type)({
        pubkey: (0, _superstruct.string)(),
        lamports: (0, _superstruct.number)(),
        postBalance: (0, _superstruct.nullable)((0, _superstruct.number)()),
        rewardType: (0, _superstruct.nullable)((0, _superstruct.string)())
    }))),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)()),
    blockHeight: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected JSON RPC response for the "getConfirmedBlock" message
 *
 * @deprecated Deprecated since Solana v1.8.0. Please use {@link GetBlockRpcResult} instead.
 */ const GetConfirmedBlockRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    transactions: (0, _superstruct.array)((0, _superstruct.type)({
        transaction: ConfirmedTransactionResult,
        meta: (0, _superstruct.nullable)(ConfirmedTransactionMetaResult)
    })),
    rewards: (0, _superstruct.optional)((0, _superstruct.array)((0, _superstruct.type)({
        pubkey: (0, _superstruct.string)(),
        lamports: (0, _superstruct.number)(),
        postBalance: (0, _superstruct.nullable)((0, _superstruct.number)()),
        rewardType: (0, _superstruct.nullable)((0, _superstruct.string)())
    }))),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected JSON RPC response for the "getBlock" message
 */ const GetBlockSignaturesRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    previousBlockhash: (0, _superstruct.string)(),
    parentSlot: (0, _superstruct.number)(),
    signatures: (0, _superstruct.array)((0, _superstruct.string)()),
    blockTime: (0, _superstruct.nullable)((0, _superstruct.number)())
})));
/**
 * Expected JSON RPC response for the "getTransaction" message
 */ const GetTransactionRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    slot: (0, _superstruct.number)(),
    meta: ConfirmedTransactionMetaResult,
    blockTime: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)())),
    transaction: ConfirmedTransactionResult
})));
/**
 * Expected parsed JSON RPC response for the "getTransaction" message
 */ const GetParsedTransactionRpcResult = jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.type)({
    slot: (0, _superstruct.number)(),
    transaction: ParsedConfirmedTransactionResult,
    meta: (0, _superstruct.nullable)(ParsedConfirmedTransactionMetaResult),
    blockTime: (0, _superstruct.optional)((0, _superstruct.nullable)((0, _superstruct.number)()))
})));
/**
 * Expected JSON RPC response for the "getRecentBlockhash" message
 *
 * @deprecated Deprecated since Solana v1.8.0. Please use {@link GetLatestBlockhashRpcResult} instead.
 */ const GetRecentBlockhashAndContextRpcResult = jsonRpcResultAndContext((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    feeCalculator: (0, _superstruct.type)({
        lamportsPerSignature: (0, _superstruct.number)()
    })
}));
/**
 * Expected JSON RPC response for the "getLatestBlockhash" message
 */ const GetLatestBlockhashRpcResult = jsonRpcResultAndContext((0, _superstruct.type)({
    blockhash: (0, _superstruct.string)(),
    lastValidBlockHeight: (0, _superstruct.number)()
}));
const PerfSampleResult = (0, _superstruct.type)({
    slot: (0, _superstruct.number)(),
    numTransactions: (0, _superstruct.number)(),
    numSlots: (0, _superstruct.number)(),
    samplePeriodSecs: (0, _superstruct.number)()
});
/*
 * Expected JSON RPC response for "getRecentPerformanceSamples" message
 */ const GetRecentPerformanceSamplesRpcResult = jsonRpcResult((0, _superstruct.array)(PerfSampleResult));
/**
 * Expected JSON RPC response for the "getFeeCalculatorForBlockhash" message
 */ const GetFeeCalculatorRpcResult = jsonRpcResultAndContext((0, _superstruct.nullable)((0, _superstruct.type)({
    feeCalculator: (0, _superstruct.type)({
        lamportsPerSignature: (0, _superstruct.number)()
    })
})));
/**
 * Expected JSON RPC response for the "requestAirdrop" message
 */ const RequestAirdropRpcResult = jsonRpcResult((0, _superstruct.string)());
/**
 * Expected JSON RPC response for the "sendTransaction" message
 */ const SendTransactionRpcResult = jsonRpcResult((0, _superstruct.string)());
/**
 * Information about the latest slot being processed by a node
 */ /**
 * @internal
 */ const LogsResult = (0, _superstruct.type)({
    err: TransactionErrorResult,
    logs: (0, _superstruct.array)((0, _superstruct.string)()),
    signature: (0, _superstruct.string)()
});
/**
 * Logs result.
 */ /**
 * Expected JSON RPC response for the "logsNotification" message.
 */ const LogsNotificationResult = (0, _superstruct.type)({
    result: notificationResultAndContext(LogsResult),
    subscription: (0, _superstruct.number)()
});
/**
 * Filter for log subscriptions.
 */ /**
 * A connection to a fullnode JSON RPC endpoint
 */ class Connection {
    /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal
   * A number that we increment every time an active connection closes.
   * Used to determine whether the same socket connection that was open
   * when an async operation started is the same one that's active when
   * its continuation fires.
   *
   */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /** @internal */ /**
   * Special case.
   * After a signature is processed, RPCs automatically dispose of the
   * subscription on the server side. We need to track which of these
   * subscriptions have been disposed in such a way, so that we know
   * whether the client is dealing with a not-yet-processed signature
   * (in which case we must tear down the server subscription) or an
   * already-processed signature (in which case the client can simply
   * clear out the subscription locally without telling the server).
   *
   * NOTE: There is a proposal to eliminate this special case, here:
   * https://github.com/solana-labs/solana/issues/18892
   */ /** @internal */ /**
   * Establish a JSON RPC connection
   *
   * @param endpoint URL to the fullnode JSON RPC endpoint
   * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
   */ constructor(endpoint2, commitmentOrConfig){
        this._commitment = void 0;
        this._confirmTransactionInitialTimeout = void 0;
        this._rpcEndpoint = void 0;
        this._rpcWsEndpoint = void 0;
        this._rpcClient = void 0;
        this._rpcRequest = void 0;
        this._rpcBatchRequest = void 0;
        this._rpcWebSocket = void 0;
        this._rpcWebSocketConnected = false;
        this._rpcWebSocketHeartbeat = null;
        this._rpcWebSocketIdleTimeout = null;
        this._rpcWebSocketGeneration = 0;
        this._disableBlockhashCaching = false;
        this._pollingBlockhash = false;
        this._blockhashInfo = {
            latestBlockhash: null,
            lastFetch: 0,
            transactionSignatures: [],
            simulatedSignatures: []
        };
        this._nextClientSubscriptionId = 0;
        this._subscriptionDisposeFunctionsByClientSubscriptionId = {};
        this._subscriptionCallbacksByServerSubscriptionId = {};
        this._subscriptionsByHash = {};
        this._subscriptionsAutoDisposedByRpc = new Set();
        let url = new URL(endpoint2);
        const useHttps = url.protocol === "https:";
        let wsEndpoint;
        let httpHeaders;
        let fetch;
        let fetchMiddleware;
        let disableRetryOnRateLimit;
        if (commitmentOrConfig && typeof commitmentOrConfig === "string") this._commitment = commitmentOrConfig;
        else if (commitmentOrConfig) {
            this._commitment = commitmentOrConfig.commitment;
            this._confirmTransactionInitialTimeout = commitmentOrConfig.confirmTransactionInitialTimeout;
            wsEndpoint = commitmentOrConfig.wsEndpoint;
            httpHeaders = commitmentOrConfig.httpHeaders;
            fetch = commitmentOrConfig.fetch;
            fetchMiddleware = commitmentOrConfig.fetchMiddleware;
            disableRetryOnRateLimit = commitmentOrConfig.disableRetryOnRateLimit;
        }
        this._rpcEndpoint = endpoint2;
        this._rpcWsEndpoint = wsEndpoint || makeWebsocketUrl(endpoint2);
        this._rpcClient = createRpcClient(url.toString(), useHttps, httpHeaders, fetch, fetchMiddleware, disableRetryOnRateLimit);
        this._rpcRequest = createRpcRequest(this._rpcClient);
        this._rpcBatchRequest = createRpcBatchRequest(this._rpcClient);
        this._rpcWebSocket = new (0, _rpcWebsockets.Client)(this._rpcWsEndpoint, {
            autoconnect: false,
            max_reconnects: Infinity
        });
        this._rpcWebSocket.on("open", this._wsOnOpen.bind(this));
        this._rpcWebSocket.on("error", this._wsOnError.bind(this));
        this._rpcWebSocket.on("close", this._wsOnClose.bind(this));
        this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this));
        this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this));
        this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this));
        this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this));
        this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this));
        this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this));
        this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this));
    }
    /**
   * The default commitment used for requests
   */ get commitment() {
        return this._commitment;
    }
    /**
   * The RPC endpoint
   */ get rpcEndpoint() {
        return this._rpcEndpoint;
    }
    /**
   * Fetch the balance for the specified public key, return with context
   */ async getBalanceAndContext(publicKey7, commitment) {
        const args = this._buildArgs([
            publicKey7.toBase58()
        ], commitment);
        const unsafeRes = await this._rpcRequest("getBalance", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.number)()));
        if ("error" in res) throw new Error("failed to get balance for " + publicKey7.toBase58() + ": " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the balance for the specified public key
   */ async getBalance(publicKey8, commitment) {
        return await this.getBalanceAndContext(publicKey8, commitment).then((x)=>x.value).catch((e)=>{
            throw new Error("failed to get balance of account " + publicKey8.toBase58() + ": " + e);
        });
    }
    /**
   * Fetch the estimated production time of a block
   */ async getBlockTime(slot) {
        const unsafeRes = await this._rpcRequest("getBlockTime", [
            slot
        ]);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.nullable)((0, _superstruct.number)())));
        if ("error" in res) throw new Error("failed to get block time for slot " + slot + ": " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */ async getMinimumLedgerSlot() {
        const unsafeRes = await this._rpcRequest("minimumLedgerSlot", []);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.number)()));
        if ("error" in res) throw new Error("failed to get minimum ledger slot: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */ async getFirstAvailableBlock() {
        const unsafeRes = await this._rpcRequest("getFirstAvailableBlock", []);
        const res = (0, _superstruct.create)(unsafeRes, SlotRpcResult);
        if ("error" in res) throw new Error("failed to get first available block: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch information about the current supply
   */ async getSupply(config) {
        let configArg = {};
        if (typeof config === "string") configArg = {
            commitment: config
        };
        else if (config) configArg = {
            ...config,
            commitment: config && config.commitment || this.commitment
        };
        else configArg = {
            commitment: this.commitment
        };
        const unsafeRes = await this._rpcRequest("getSupply", [
            configArg
        ]);
        const res = (0, _superstruct.create)(unsafeRes, GetSupplyRpcResult);
        if ("error" in res) throw new Error("failed to get supply: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the current supply of a token mint
   */ async getTokenSupply(tokenMintAddress, commitment) {
        const args = this._buildArgs([
            tokenMintAddress.toBase58()
        ], commitment);
        const unsafeRes = await this._rpcRequest("getTokenSupply", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
        if ("error" in res) throw new Error("failed to get token supply: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the current balance of a token account
   */ async getTokenAccountBalance(tokenAddress, commitment) {
        const args = this._buildArgs([
            tokenAddress.toBase58()
        ], commitment);
        const unsafeRes = await this._rpcRequest("getTokenAccountBalance", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
        if ("error" in res) throw new Error("failed to get token account balance: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch all the token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>>}
   */ async getTokenAccountsByOwner(ownerAddress, filter, commitment) {
        let _args = [
            ownerAddress.toBase58()
        ];
        if ("mint" in filter) _args.push({
            mint: filter.mint.toBase58()
        });
        else _args.push({
            programId: filter.programId.toBase58()
        });
        const args = this._buildArgs(_args, commitment, "base64");
        const unsafeRes = await this._rpcRequest("getTokenAccountsByOwner", args);
        const res = (0, _superstruct.create)(unsafeRes, GetTokenAccountsByOwner);
        if ("error" in res) throw new Error("failed to get token accounts owned by account " + ownerAddress.toBase58() + ": " + res.error.message);
        return res.result;
    }
    /**
   * Fetch parsed token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<ParsedAccountData>}>>>}
   */ async getParsedTokenAccountsByOwner(ownerAddress, filter, commitment) {
        let _args = [
            ownerAddress.toBase58()
        ];
        if ("mint" in filter) _args.push({
            mint: filter.mint.toBase58()
        });
        else _args.push({
            programId: filter.programId.toBase58()
        });
        const args = this._buildArgs(_args, commitment, "jsonParsed");
        const unsafeRes = await this._rpcRequest("getTokenAccountsByOwner", args);
        const res = (0, _superstruct.create)(unsafeRes, GetParsedTokenAccountsByOwner);
        if ("error" in res) throw new Error("failed to get token accounts owned by account " + ownerAddress.toBase58() + ": " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the 20 largest accounts with their current balances
   */ async getLargestAccounts(config) {
        const arg = {
            ...config,
            commitment: config && config.commitment || this.commitment
        };
        const args = arg.filter || arg.commitment ? [
            arg
        ] : [];
        const unsafeRes = await this._rpcRequest("getLargestAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, GetLargestAccountsRpcResult);
        if ("error" in res) throw new Error("failed to get largest accounts: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */ async getTokenLargestAccounts(mintAddress, commitment) {
        const args = this._buildArgs([
            mintAddress.toBase58()
        ], commitment);
        const unsafeRes = await this._rpcRequest("getTokenLargestAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, GetTokenLargestAccountsResult);
        if ("error" in res) throw new Error("failed to get token largest accounts: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch all the account info for the specified public key, return with context
   */ async getAccountInfoAndContext(publicKey9, commitment) {
        const args = this._buildArgs([
            publicKey9.toBase58()
        ], commitment, "base64");
        const unsafeRes = await this._rpcRequest("getAccountInfo", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.nullable)(AccountInfoResult)));
        if ("error" in res) throw new Error("failed to get info about account " + publicKey9.toBase58() + ": " + res.error.message);
        return res.result;
    }
    /**
   * Fetch parsed account info for the specified public key
   */ async getParsedAccountInfo(publicKey10, commitment) {
        const args = this._buildArgs([
            publicKey10.toBase58()
        ], commitment, "jsonParsed");
        const unsafeRes = await this._rpcRequest("getAccountInfo", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.nullable)(ParsedAccountInfoResult)));
        if ("error" in res) throw new Error("failed to get info about account " + publicKey10.toBase58() + ": " + res.error.message);
        return res.result;
    }
    /**
   * Fetch all the account info for the specified public key
   */ async getAccountInfo(publicKey11, commitment) {
        try {
            const res = await this.getAccountInfoAndContext(publicKey11, commitment);
            return res.value;
        } catch (e) {
            throw new Error("failed to get info about account " + publicKey11.toBase58() + ": " + e);
        }
    }
    /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */ async getMultipleAccountsInfoAndContext(publicKeys, commitment) {
        const keys = publicKeys.map((key)=>key.toBase58());
        const args = this._buildArgs([
            keys
        ], commitment, "base64");
        const unsafeRes = await this._rpcRequest("getMultipleAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.array)((0, _superstruct.nullable)(AccountInfoResult))));
        if ("error" in res) throw new Error("failed to get info for accounts " + keys + ": " + res.error.message);
        return res.result;
    }
    /**
   * Fetch all the account info for multiple accounts specified by an array of public keys
   */ async getMultipleAccountsInfo(publicKeys, commitment) {
        const res = await this.getMultipleAccountsInfoAndContext(publicKeys, commitment);
        return res.value;
    }
    /**
   * Returns epoch activation information for a stake account that has been delegated
   */ async getStakeActivation(publicKey12, commitment, epoch) {
        const args = this._buildArgs([
            publicKey12.toBase58()
        ], commitment, undefined, epoch !== undefined ? {
            epoch
        } : undefined);
        const unsafeRes = await this._rpcRequest("getStakeActivation", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult(StakeActivationResult));
        if ("error" in res) throw new Error(`failed to get Stake Activation ${publicKey12.toBase58()}: ${res.error.message}`);
        return res.result;
    }
    /**
   * Fetch all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>}
   */ async getProgramAccounts(programId, configOrCommitment) {
        const extra = {};
        let commitment;
        let encoding;
        if (configOrCommitment) {
            if (typeof configOrCommitment === "string") commitment = configOrCommitment;
            else {
                commitment = configOrCommitment.commitment;
                encoding = configOrCommitment.encoding;
                if (configOrCommitment.dataSlice) extra.dataSlice = configOrCommitment.dataSlice;
                if (configOrCommitment.filters) extra.filters = configOrCommitment.filters;
            }
        }
        const args = this._buildArgs([
            programId.toBase58()
        ], commitment, encoding || "base64", extra);
        const unsafeRes = await this._rpcRequest("getProgramAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)(KeyedAccountInfoResult)));
        if ("error" in res) throw new Error("failed to get accounts owned by program " + programId.toBase58() + ": " + res.error.message);
        return res.result;
    }
    /**
   * Fetch and parse all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer | ParsedAccountData>}>>}
   */ async getParsedProgramAccounts(programId, configOrCommitment) {
        const extra = {};
        let commitment;
        if (configOrCommitment) {
            if (typeof configOrCommitment === "string") commitment = configOrCommitment;
            else {
                commitment = configOrCommitment.commitment;
                if (configOrCommitment.filters) extra.filters = configOrCommitment.filters;
            }
        }
        const args = this._buildArgs([
            programId.toBase58()
        ], commitment, "jsonParsed", extra);
        const unsafeRes = await this._rpcRequest("getProgramAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)(KeyedParsedAccountInfoResult)));
        if ("error" in res) throw new Error("failed to get accounts owned by program " + programId.toBase58() + ": " + res.error.message);
        return res.result;
    }
    // eslint-disable-next-line no-dupe-class-members
    async confirmTransaction(strategy, commitment) {
        let rawSignature;
        if (typeof strategy == "string") rawSignature = strategy;
        else {
            const config = strategy;
            rawSignature = config.signature;
        }
        let decodedSignature;
        try {
            decodedSignature = (0, _bs58Default.default).decode(rawSignature);
        } catch (err1) {
            throw new Error("signature must be base58 encoded: " + rawSignature);
        }
        assert(decodedSignature.length === 64, "signature has invalid length");
        const subscriptionCommitment = commitment || this.commitment;
        let timeoutId;
        let subscriptionId;
        let done = false;
        const confirmationPromise = new Promise((resolve, reject)=>{
            try {
                subscriptionId = this.onSignature(rawSignature, (result, context)=>{
                    subscriptionId = undefined;
                    const response = {
                        context,
                        value: result
                    };
                    done = true;
                    resolve({
                        __type: TransactionStatus.PROCESSED,
                        response
                    });
                }, subscriptionCommitment);
            } catch (err) {
                reject(err);
            }
        });
        const checkBlockHeight = async ()=>{
            try {
                const blockHeight = await this.getBlockHeight(commitment);
                return blockHeight;
            } catch (_e) {
                return -1;
            }
        };
        const expiryPromise = new Promise((resolve)=>{
            if (typeof strategy === "string") {
                let timeoutMs = this._confirmTransactionInitialTimeout || 60000;
                switch(subscriptionCommitment){
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip":
                        timeoutMs = this._confirmTransactionInitialTimeout || 30000;
                        break;
                }
                timeoutId = setTimeout(()=>resolve({
                        __type: TransactionStatus.TIMED_OUT,
                        timeoutMs
                    }), timeoutMs);
            } else {
                let config = strategy;
                (async ()=>{
                    let currentBlockHeight = await checkBlockHeight();
                    if (done) return;
                    while(currentBlockHeight <= config.lastValidBlockHeight){
                        await sleep(1000);
                        if (done) return;
                        currentBlockHeight = await checkBlockHeight();
                        if (done) return;
                    }
                    resolve({
                        __type: TransactionStatus.BLOCKHEIGHT_EXCEEDED
                    });
                })();
            }
        });
        let result1;
        try {
            const outcome = await Promise.race([
                confirmationPromise,
                expiryPromise
            ]);
            switch(outcome.__type){
                case TransactionStatus.BLOCKHEIGHT_EXCEEDED:
                    throw new TransactionExpiredBlockheightExceededError(rawSignature);
                case TransactionStatus.PROCESSED:
                    result1 = outcome.response;
                    break;
                case TransactionStatus.TIMED_OUT:
                    throw new TransactionExpiredTimeoutError(rawSignature, outcome.timeoutMs / 1000);
            }
        } finally{
            clearTimeout(timeoutId);
            if (subscriptionId) this.removeSignatureListener(subscriptionId);
        }
        return result1;
    }
    /**
   * Return the list of nodes that are currently participating in the cluster
   */ async getClusterNodes() {
        const unsafeRes = await this._rpcRequest("getClusterNodes", []);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)(ContactInfoResult)));
        if ("error" in res) throw new Error("failed to get cluster nodes: " + res.error.message);
        return res.result;
    }
    /**
   * Return the list of nodes that are currently participating in the cluster
   */ async getVoteAccounts(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getVoteAccounts", args);
        const res = (0, _superstruct.create)(unsafeRes, GetVoteAccounts);
        if ("error" in res) throw new Error("failed to get vote accounts: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the current slot that the node is processing
   */ async getSlot(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getSlot", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.number)()));
        if ("error" in res) throw new Error("failed to get slot: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the current slot leader of the cluster
   */ async getSlotLeader(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getSlotLeader", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.string)()));
        if ("error" in res) throw new Error("failed to get slot leader: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */ async getSlotLeaders(startSlot, limit) {
        const args = [
            startSlot,
            limit
        ];
        const unsafeRes = await this._rpcRequest("getSlotLeaders", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)(PublicKeyFromString)));
        if ("error" in res) throw new Error("failed to get slot leaders: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the current status of a signature
   */ async getSignatureStatus(signature, config) {
        const { context , value: values  } = await this.getSignatureStatuses([
            signature
        ], config);
        assert(values.length === 1);
        const value = values[0];
        return {
            context,
            value
        };
    }
    /**
   * Fetch the current statuses of a batch of signatures
   */ async getSignatureStatuses(signatures, config) {
        const params = [
            signatures
        ];
        if (config) params.push(config);
        const unsafeRes = await this._rpcRequest("getSignatureStatuses", params);
        const res = (0, _superstruct.create)(unsafeRes, GetSignatureStatusesRpcResult);
        if ("error" in res) throw new Error("failed to get signature status: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the current transaction count of the cluster
   */ async getTransactionCount(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getTransactionCount", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.number)()));
        if ("error" in res) throw new Error("failed to get transaction count: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the current total currency supply of the cluster in lamports
   *
   * @deprecated Deprecated since v1.2.8. Please use {@link getSupply} instead.
   */ async getTotalSupply(commitment) {
        const result = await this.getSupply({
            commitment,
            excludeNonCirculatingAccountsList: true
        });
        return result.value.total;
    }
    /**
   * Fetch the cluster InflationGovernor parameters
   */ async getInflationGovernor(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getInflationGovernor", args);
        const res = (0, _superstruct.create)(unsafeRes, GetInflationGovernorRpcResult);
        if ("error" in res) throw new Error("failed to get inflation: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */ async getInflationReward(addresses, epoch, commitment) {
        const args = this._buildArgs([
            addresses.map((pubkey)=>pubkey.toBase58())
        ], commitment, undefined, {
            epoch
        });
        const unsafeRes = await this._rpcRequest("getInflationReward", args);
        const res = (0, _superstruct.create)(unsafeRes, GetInflationRewardResult);
        if ("error" in res) throw new Error("failed to get inflation reward: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the Epoch Info parameters
   */ async getEpochInfo(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getEpochInfo", args);
        const res = (0, _superstruct.create)(unsafeRes, GetEpochInfoRpcResult);
        if ("error" in res) throw new Error("failed to get epoch info: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the Epoch Schedule parameters
   */ async getEpochSchedule() {
        const unsafeRes = await this._rpcRequest("getEpochSchedule", []);
        const res = (0, _superstruct.create)(unsafeRes, GetEpochScheduleRpcResult);
        if ("error" in res) throw new Error("failed to get epoch schedule: " + res.error.message);
        const epochSchedule = res.result;
        return new EpochSchedule(epochSchedule.slotsPerEpoch, epochSchedule.leaderScheduleSlotOffset, epochSchedule.warmup, epochSchedule.firstNormalEpoch, epochSchedule.firstNormalSlot);
    }
    /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */ async getLeaderSchedule() {
        const unsafeRes = await this._rpcRequest("getLeaderSchedule", []);
        const res = (0, _superstruct.create)(unsafeRes, GetLeaderScheduleRpcResult);
        if ("error" in res) throw new Error("failed to get leader schedule: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */ async getMinimumBalanceForRentExemption(dataLength, commitment) {
        const args = this._buildArgs([
            dataLength
        ], commitment);
        const unsafeRes = await this._rpcRequest("getMinimumBalanceForRentExemption", args);
        const res = (0, _superstruct.create)(unsafeRes, GetMinimumBalanceForRentExemptionRpcResult);
        if ("error" in res) {
            console.warn("Unable to fetch minimum balance for rent exemption");
            return 0;
        }
        return res.result;
    }
    /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */ async getRecentBlockhashAndContext(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getRecentBlockhash", args);
        const res = (0, _superstruct.create)(unsafeRes, GetRecentBlockhashAndContextRpcResult);
        if ("error" in res) throw new Error("failed to get recent blockhash: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch recent performance samples
   * @return {Promise<Array<PerfSample>>}
   */ async getRecentPerformanceSamples(limit) {
        const args = this._buildArgs(limit ? [
            limit
        ] : []);
        const unsafeRes = await this._rpcRequest("getRecentPerformanceSamples", args);
        const res = (0, _superstruct.create)(unsafeRes, GetRecentPerformanceSamplesRpcResult);
        if ("error" in res) throw new Error("failed to get recent performance samples: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getFeeForMessage} instead.
   */ async getFeeCalculatorForBlockhash(blockhash, commitment) {
        const args = this._buildArgs([
            blockhash
        ], commitment);
        const unsafeRes = await this._rpcRequest("getFeeCalculatorForBlockhash", args);
        const res = (0, _superstruct.create)(unsafeRes, GetFeeCalculatorRpcResult);
        if ("error" in res) throw new Error("failed to get fee calculator: " + res.error.message);
        const { context , value  } = res.result;
        return {
            context,
            value: value !== null ? value.feeCalculator : null
        };
    }
    /**
   * Fetch the fee for a message from the cluster, return with context
   */ async getFeeForMessage(message, commitment) {
        const wireMessage = message.serialize().toString("base64");
        const args = this._buildArgs([
            wireMessage
        ], commitment);
        const unsafeRes = await this._rpcRequest("getFeeForMessage", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResultAndContext((0, _superstruct.nullable)((0, _superstruct.number)())));
        if ("error" in res) throw new Error("failed to get slot: " + res.error.message);
        if (res.result === null) throw new Error("invalid blockhash");
        return res.result;
    }
    /**
   * Fetch a recent blockhash from the cluster
   * @return {Promise<{blockhash: Blockhash, feeCalculator: FeeCalculator}>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */ async getRecentBlockhash(commitment) {
        try {
            const res = await this.getRecentBlockhashAndContext(commitment);
            return res.value;
        } catch (e) {
            throw new Error("failed to get recent blockhash: " + e);
        }
    }
    /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */ async getLatestBlockhash(commitment) {
        try {
            const res = await this.getLatestBlockhashAndContext(commitment);
            return res.value;
        } catch (e) {
            throw new Error("failed to get recent blockhash: " + e);
        }
    }
    /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */ async getLatestBlockhashAndContext(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getLatestBlockhash", args);
        const res = (0, _superstruct.create)(unsafeRes, GetLatestBlockhashRpcResult);
        if ("error" in res) throw new Error("failed to get latest blockhash: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the node version
   */ async getVersion() {
        const unsafeRes = await this._rpcRequest("getVersion", []);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult(VersionResult));
        if ("error" in res) throw new Error("failed to get version: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the genesis hash
   */ async getGenesisHash() {
        const unsafeRes = await this._rpcRequest("getGenesisHash", []);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.string)()));
        if ("error" in res) throw new Error("failed to get genesis hash: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch a processed block from the cluster.
   */ async getBlock(slot, opts) {
        const args = this._buildArgsAtLeastConfirmed([
            slot
        ], opts && opts.commitment);
        const unsafeRes = await this._rpcRequest("getBlock", args);
        const res = (0, _superstruct.create)(unsafeRes, GetBlockRpcResult);
        if ("error" in res) throw new Error("failed to get confirmed block: " + res.error.message);
        const result = res.result;
        if (!result) return result;
        return {
            ...result,
            transactions: result.transactions.map(({ transaction , meta  })=>{
                const message = new Message(transaction.message);
                return {
                    meta,
                    transaction: {
                        ...transaction,
                        message
                    }
                };
            })
        };
    }
    /*
   * Returns the current block height of the node
   */ async getBlockHeight(commitment) {
        const args = this._buildArgs([], commitment);
        const unsafeRes = await this._rpcRequest("getBlockHeight", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.number)()));
        if ("error" in res) throw new Error("failed to get block height information: " + res.error.message);
        return res.result;
    }
    /*
   * Returns recent block production information from the current or previous epoch
   */ async getBlockProduction(configOrCommitment) {
        let extra;
        let commitment;
        if (typeof configOrCommitment === "string") commitment = configOrCommitment;
        else if (configOrCommitment) {
            const { commitment: c , ...rest } = configOrCommitment;
            commitment = c;
            extra = rest;
        }
        const args = this._buildArgs([], commitment, "base64", extra);
        const unsafeRes = await this._rpcRequest("getBlockProduction", args);
        const res = (0, _superstruct.create)(unsafeRes, BlockProductionResponseStruct);
        if ("error" in res) throw new Error("failed to get block production information: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */ async getTransaction(signature, opts) {
        const args = this._buildArgsAtLeastConfirmed([
            signature
        ], opts && opts.commitment);
        const unsafeRes = await this._rpcRequest("getTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, GetTransactionRpcResult);
        if ("error" in res) throw new Error("failed to get transaction: " + res.error.message);
        const result = res.result;
        if (!result) return result;
        return {
            ...result,
            transaction: {
                ...result.transaction,
                message: new Message(result.transaction.message)
            }
        };
    }
    /**
   * Fetch parsed transaction details for a confirmed or finalized transaction
   */ async getParsedTransaction(signature, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            signature
        ], commitment, "jsonParsed");
        const unsafeRes = await this._rpcRequest("getTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, GetParsedTransactionRpcResult);
        if ("error" in res) throw new Error("failed to get transaction: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */ async getParsedTransactions(signatures, commitment) {
        const batch = signatures.map((signature)=>{
            const args = this._buildArgsAtLeastConfirmed([
                signature
            ], commitment, "jsonParsed");
            return {
                methodName: "getTransaction",
                args
            };
        });
        const unsafeRes1 = await this._rpcBatchRequest(batch);
        const res1 = unsafeRes1.map((unsafeRes)=>{
            const res = (0, _superstruct.create)(unsafeRes, GetParsedTransactionRpcResult);
            if ("error" in res) throw new Error("failed to get transactions: " + res.error.message);
            return res.result;
        });
        return res1;
    }
    /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link TransactionResponse}.
   */ async getTransactions(signatures, commitment) {
        const batch = signatures.map((signature)=>{
            const args = this._buildArgsAtLeastConfirmed([
                signature
            ], commitment);
            return {
                methodName: "getTransaction",
                args
            };
        });
        const unsafeRes2 = await this._rpcBatchRequest(batch);
        const res2 = unsafeRes2.map((unsafeRes)=>{
            const res = (0, _superstruct.create)(unsafeRes, GetTransactionRpcResult);
            if ("error" in res) throw new Error("failed to get transactions: " + res.error.message);
            return res.result;
        });
        return res2;
    }
    /**
   * Fetch a list of Transactions and transaction statuses from the cluster
   * for a confirmed block.
   *
   * @deprecated Deprecated since v1.13.0. Please use {@link getBlock} instead.
   */ async getConfirmedBlock(slot, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            slot
        ], commitment);
        const unsafeRes = await this._rpcRequest("getConfirmedBlock", args);
        const res = (0, _superstruct.create)(unsafeRes, GetConfirmedBlockRpcResult);
        if ("error" in res) throw new Error("failed to get confirmed block: " + res.error.message);
        const result = res.result;
        if (!result) throw new Error("Confirmed block " + slot + " not found");
        const block = {
            ...result,
            transactions: result.transactions.map(({ transaction , meta  })=>{
                const message = new Message(transaction.message);
                return {
                    meta,
                    transaction: {
                        ...transaction,
                        message
                    }
                };
            })
        };
        return {
            ...block,
            transactions: block.transactions.map(({ transaction , meta  })=>{
                return {
                    meta,
                    transaction: Transaction.populate(transaction.message, transaction.signatures)
                };
            })
        };
    }
    /**
   * Fetch confirmed blocks between two slots
   */ async getBlocks(startSlot, endSlot, commitment) {
        const args = this._buildArgsAtLeastConfirmed(endSlot !== undefined ? [
            startSlot,
            endSlot
        ] : [
            startSlot
        ], commitment);
        const unsafeRes = await this._rpcRequest("getBlocks", args);
        const res = (0, _superstruct.create)(unsafeRes, jsonRpcResult((0, _superstruct.array)((0, _superstruct.number)())));
        if ("error" in res) throw new Error("failed to get blocks: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */ async getBlockSignatures(slot, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            slot
        ], commitment, undefined, {
            transactionDetails: "signatures",
            rewards: false
        });
        const unsafeRes = await this._rpcRequest("getBlock", args);
        const res = (0, _superstruct.create)(unsafeRes, GetBlockSignaturesRpcResult);
        if ("error" in res) throw new Error("failed to get block: " + res.error.message);
        const result = res.result;
        if (!result) throw new Error("Block " + slot + " not found");
        return result;
    }
    /**
   * Fetch a list of Signatures from the cluster for a confirmed block, excluding rewards
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getBlockSignatures} instead.
   */ async getConfirmedBlockSignatures(slot, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            slot
        ], commitment, undefined, {
            transactionDetails: "signatures",
            rewards: false
        });
        const unsafeRes = await this._rpcRequest("getConfirmedBlock", args);
        const res = (0, _superstruct.create)(unsafeRes, GetBlockSignaturesRpcResult);
        if ("error" in res) throw new Error("failed to get confirmed block: " + res.error.message);
        const result = res.result;
        if (!result) throw new Error("Confirmed block " + slot + " not found");
        return result;
    }
    /**
   * Fetch a transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getTransaction} instead.
   */ async getConfirmedTransaction(signature, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            signature
        ], commitment);
        const unsafeRes = await this._rpcRequest("getConfirmedTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, GetTransactionRpcResult);
        if ("error" in res) throw new Error("failed to get transaction: " + res.error.message);
        const result = res.result;
        if (!result) return result;
        const message = new Message(result.transaction.message);
        const signatures = result.transaction.signatures;
        return {
            ...result,
            transaction: Transaction.populate(message, signatures)
        };
    }
    /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransaction} instead.
   */ async getParsedConfirmedTransaction(signature, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            signature
        ], commitment, "jsonParsed");
        const unsafeRes = await this._rpcRequest("getConfirmedTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, GetParsedTransactionRpcResult);
        if ("error" in res) throw new Error("failed to get confirmed transaction: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransactions} instead.
   */ async getParsedConfirmedTransactions(signatures, commitment) {
        const batch = signatures.map((signature)=>{
            const args = this._buildArgsAtLeastConfirmed([
                signature
            ], commitment, "jsonParsed");
            return {
                methodName: "getConfirmedTransaction",
                args
            };
        });
        const unsafeRes3 = await this._rpcBatchRequest(batch);
        const res3 = unsafeRes3.map((unsafeRes)=>{
            const res = (0, _superstruct.create)(unsafeRes, GetParsedTransactionRpcResult);
            if ("error" in res) throw new Error("failed to get confirmed transactions: " + res.error.message);
            return res.result;
        });
        return res3;
    }
    /**
   * Fetch a list of all the confirmed signatures for transactions involving an address
   * within a specified slot range. Max range allowed is 10,000 slots.
   *
   * @deprecated Deprecated since v1.3. Please use {@link getConfirmedSignaturesForAddress2} instead.
   *
   * @param address queried address
   * @param startSlot start slot, inclusive
   * @param endSlot end slot, inclusive
   */ async getConfirmedSignaturesForAddress(address, startSlot, endSlot) {
        let options = {};
        let firstAvailableBlock = await this.getFirstAvailableBlock();
        while(!("until" in options)){
            startSlot--;
            if (startSlot <= 0 || startSlot < firstAvailableBlock) break;
            try {
                const block = await this.getConfirmedBlockSignatures(startSlot, "finalized");
                if (block.signatures.length > 0) options.until = block.signatures[block.signatures.length - 1].toString();
            } catch (err) {
                if (err instanceof Error && err.message.includes("skipped")) continue;
                else throw err;
            }
        }
        let highestConfirmedRoot = await this.getSlot("finalized");
        while(!("before" in options)){
            endSlot++;
            if (endSlot > highestConfirmedRoot) break;
            try {
                const block = await this.getConfirmedBlockSignatures(endSlot);
                if (block.signatures.length > 0) options.before = block.signatures[block.signatures.length - 1].toString();
            } catch (err) {
                if (err instanceof Error && err.message.includes("skipped")) continue;
                else throw err;
            }
        }
        const confirmedSignatureInfo = await this.getConfirmedSignaturesForAddress2(address, options);
        return confirmedSignatureInfo.map((info)=>info.signature);
    }
    /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */ async getConfirmedSignaturesForAddress2(address, options, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            address.toBase58()
        ], commitment, undefined, options);
        const unsafeRes = await this._rpcRequest("getConfirmedSignaturesForAddress2", args);
        const res = (0, _superstruct.create)(unsafeRes, GetConfirmedSignaturesForAddress2RpcResult);
        if ("error" in res) throw new Error("failed to get confirmed signatures for address: " + res.error.message);
        return res.result;
    }
    /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */ async getSignaturesForAddress(address, options, commitment) {
        const args = this._buildArgsAtLeastConfirmed([
            address.toBase58()
        ], commitment, undefined, options);
        const unsafeRes = await this._rpcRequest("getSignaturesForAddress", args);
        const res = (0, _superstruct.create)(unsafeRes, GetSignaturesForAddressRpcResult);
        if ("error" in res) throw new Error("failed to get signatures for address: " + res.error.message);
        return res.result;
    }
    /**
   * Fetch the contents of a Nonce account from the cluster, return with context
   */ async getNonceAndContext(nonceAccount, commitment) {
        const { context , value: accountInfo  } = await this.getAccountInfoAndContext(nonceAccount, commitment);
        let value = null;
        if (accountInfo !== null) value = NonceAccount.fromAccountData(accountInfo.data);
        return {
            context,
            value
        };
    }
    /**
   * Fetch the contents of a Nonce account from the cluster
   */ async getNonce(nonceAccount, commitment) {
        return await this.getNonceAndContext(nonceAccount, commitment).then((x)=>x.value).catch((e)=>{
            throw new Error("failed to get nonce for account " + nonceAccount.toBase58() + ": " + e);
        });
    }
    /**
   * Request an allocation of lamports to the specified address
   *
   * ```typescript
   * import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
   *
   * (async () => {
   *   const connection = new Connection("https://api.testnet.solana.com", "confirmed");
   *   const myAddress = new PublicKey("2nr1bHFT86W9tGnyvmYW4vcHKsQB3sVQfnddasz4kExM");
   *   const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL);
   *   await connection.confirmTransaction(signature);
   * })();
   * ```
   */ async requestAirdrop(to, lamports) {
        const unsafeRes = await this._rpcRequest("requestAirdrop", [
            to.toBase58(),
            lamports
        ]);
        const res = (0, _superstruct.create)(unsafeRes, RequestAirdropRpcResult);
        if ("error" in res) throw new Error("airdrop to " + to.toBase58() + " failed: " + res.error.message);
        return res.result;
    }
    /**
   * @internal
   */ async _blockhashWithExpiryBlockHeight(disableCache) {
        if (!disableCache) {
            // Wait for polling to finish
            while(this._pollingBlockhash)await sleep(100);
            const timeSinceFetch = Date.now() - this._blockhashInfo.lastFetch;
            const expired = timeSinceFetch >= BLOCKHASH_CACHE_TIMEOUT_MS;
            if (this._blockhashInfo.latestBlockhash !== null && !expired) return this._blockhashInfo.latestBlockhash;
        }
        return await this._pollNewBlockhash();
    }
    /**
   * @internal
   */ async _pollNewBlockhash() {
        this._pollingBlockhash = true;
        try {
            const startTime = Date.now();
            const cachedLatestBlockhash = this._blockhashInfo.latestBlockhash;
            const cachedBlockhash = cachedLatestBlockhash ? cachedLatestBlockhash.blockhash : null;
            for(let i = 0; i < 50; i++){
                const latestBlockhash = await this.getLatestBlockhash("finalized");
                if (cachedBlockhash !== latestBlockhash.blockhash) {
                    this._blockhashInfo = {
                        latestBlockhash,
                        lastFetch: Date.now(),
                        transactionSignatures: [],
                        simulatedSignatures: []
                    };
                    return latestBlockhash;
                } // Sleep for approximately half a slot
                await sleep(MS_PER_SLOT / 2);
            }
            throw new Error(`Unable to obtain a new blockhash after ${Date.now() - startTime}ms`);
        } finally{
            this._pollingBlockhash = false;
        }
    }
    /**
   * Simulate a transaction
   */ async simulateTransaction(transactionOrMessage, signers, includeAccounts) {
        let transaction;
        if (transactionOrMessage instanceof Transaction) {
            let originalTx = transactionOrMessage;
            transaction = new Transaction();
            transaction.feePayer = originalTx.feePayer;
            transaction.instructions = transactionOrMessage.instructions;
            transaction.nonceInfo = originalTx.nonceInfo;
            transaction.signatures = originalTx.signatures;
        } else {
            transaction = Transaction.populate(transactionOrMessage); // HACK: this function relies on mutating the populated transaction
            transaction._message = transaction._json = undefined;
        }
        if (transaction.nonceInfo && signers) transaction.sign(...signers);
        else {
            let disableCache = this._disableBlockhashCaching;
            for(;;){
                const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
                transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
                transaction.recentBlockhash = latestBlockhash.blockhash;
                if (!signers) break;
                transaction.sign(...signers);
                if (!transaction.signature) throw new Error("!signature"); // should never happen
                const signature = transaction.signature.toString("base64");
                if (!this._blockhashInfo.simulatedSignatures.includes(signature) && !this._blockhashInfo.transactionSignatures.includes(signature)) {
                    // The signature of this transaction has not been seen before with the
                    // current recentBlockhash, all done. Let's break
                    this._blockhashInfo.simulatedSignatures.push(signature);
                    break;
                } else // This transaction would be treated as duplicate (its derived signature
                // matched to one of already recorded signatures).
                // So, we must fetch a new blockhash for a different signature by disabling
                // our cache not to wait for the cache expiration (BLOCKHASH_CACHE_TIMEOUT_MS).
                disableCache = true;
            }
        }
        const message = transaction._compile();
        const signData = message.serialize();
        const wireTransaction = transaction._serialize(signData);
        const encodedTransaction = wireTransaction.toString("base64");
        const config = {
            encoding: "base64",
            commitment: this.commitment
        };
        if (includeAccounts) {
            const addresses = (Array.isArray(includeAccounts) ? includeAccounts : message.nonProgramIds()).map((key)=>key.toBase58());
            config["accounts"] = {
                encoding: "base64",
                addresses
            };
        }
        if (signers) config.sigVerify = true;
        const args = [
            encodedTransaction,
            config
        ];
        const unsafeRes = await this._rpcRequest("simulateTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, SimulatedTransactionResponseStruct);
        if ("error" in res) {
            let logs;
            if ("data" in res.error) {
                logs = res.error.data.logs;
                if (logs && Array.isArray(logs)) {
                    const traceIndent = "\n    ";
                    const logTrace = traceIndent + logs.join(traceIndent);
                    console.error(res.error.message, logTrace);
                }
            }
            throw new SendTransactionError("failed to simulate transaction: " + res.error.message, logs);
        }
        return res.result;
    }
    /**
   * Sign and send a transaction
   */ async sendTransaction(transaction, signers, options) {
        if (transaction.nonceInfo) transaction.sign(...signers);
        else {
            let disableCache = this._disableBlockhashCaching;
            for(;;){
                const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
                transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
                transaction.recentBlockhash = latestBlockhash.blockhash;
                transaction.sign(...signers);
                if (!transaction.signature) throw new Error("!signature"); // should never happen
                const signature = transaction.signature.toString("base64");
                if (!this._blockhashInfo.transactionSignatures.includes(signature)) {
                    // The signature of this transaction has not been seen before with the
                    // current recentBlockhash, all done. Let's break
                    this._blockhashInfo.transactionSignatures.push(signature);
                    break;
                } else // This transaction would be treated as duplicate (its derived signature
                // matched to one of already recorded signatures).
                // So, we must fetch a new blockhash for a different signature by disabling
                // our cache not to wait for the cache expiration (BLOCKHASH_CACHE_TIMEOUT_MS).
                disableCache = true;
            }
        }
        const wireTransaction = transaction.serialize();
        return await this.sendRawTransaction(wireTransaction, options);
    }
    /**
   * Send a transaction that has already been signed and serialized into the
   * wire format
   */ async sendRawTransaction(rawTransaction, options) {
        const encodedTransaction = toBuffer(rawTransaction).toString("base64");
        const result = await this.sendEncodedTransaction(encodedTransaction, options);
        return result;
    }
    /**
   * Send a transaction that has already been signed, serialized into the
   * wire format, and encoded as a base64 string
   */ async sendEncodedTransaction(encodedTransaction, options) {
        const config = {
            encoding: "base64"
        };
        const skipPreflight = options && options.skipPreflight;
        const preflightCommitment = options && options.preflightCommitment || this.commitment;
        if (options && options.maxRetries) config.maxRetries = options.maxRetries;
        if (skipPreflight) config.skipPreflight = skipPreflight;
        if (preflightCommitment) config.preflightCommitment = preflightCommitment;
        const args = [
            encodedTransaction,
            config
        ];
        const unsafeRes = await this._rpcRequest("sendTransaction", args);
        const res = (0, _superstruct.create)(unsafeRes, SendTransactionRpcResult);
        if ("error" in res) {
            let logs;
            if ("data" in res.error) logs = res.error.data.logs;
            throw new SendTransactionError("failed to send transaction: " + res.error.message, logs);
        }
        return res.result;
    }
    /**
   * @internal
   */ _wsOnOpen() {
        this._rpcWebSocketConnected = true;
        this._rpcWebSocketHeartbeat = setInterval(()=>{
            // Ping server every 5s to prevent idle timeouts
            this._rpcWebSocket.notify("ping").catch(()=>{});
        }, 5000);
        this._updateSubscriptions();
    }
    /**
   * @internal
   */ _wsOnError(err) {
        this._rpcWebSocketConnected = false;
        console.error("ws error:", err.message);
    }
    /**
   * @internal
   */ _wsOnClose(code) {
        this._rpcWebSocketConnected = false;
        this._rpcWebSocketGeneration++;
        if (this._rpcWebSocketHeartbeat) {
            clearInterval(this._rpcWebSocketHeartbeat);
            this._rpcWebSocketHeartbeat = null;
        }
        if (code === 1000) {
            // explicit close, check if any subscriptions have been made since close
            this._updateSubscriptions();
            return;
        } // implicit close, prepare subscriptions for auto-reconnect
        this._subscriptionCallbacksByServerSubscriptionId = {};
        Object.entries(this._subscriptionsByHash).forEach(([hash5, subscription])=>{
            this._subscriptionsByHash[hash5] = {
                ...subscription,
                state: "pending"
            };
        });
    }
    /**
   * @internal
   */ async _updateSubscriptions() {
        if (Object.keys(this._subscriptionsByHash).length === 0) {
            if (this._rpcWebSocketConnected) {
                this._rpcWebSocketConnected = false;
                this._rpcWebSocketIdleTimeout = setTimeout(()=>{
                    this._rpcWebSocketIdleTimeout = null;
                    try {
                        this._rpcWebSocket.close();
                    } catch (err) {
                        // swallow error if socket has already been closed.
                        if (err instanceof Error) console.log(`Error when closing socket connection: ${err.message}`);
                    }
                }, 500);
            }
            return;
        }
        if (this._rpcWebSocketIdleTimeout !== null) {
            clearTimeout(this._rpcWebSocketIdleTimeout);
            this._rpcWebSocketIdleTimeout = null;
            this._rpcWebSocketConnected = true;
        }
        if (!this._rpcWebSocketConnected) {
            this._rpcWebSocket.connect();
            return;
        }
        const activeWebSocketGeneration = this._rpcWebSocketGeneration;
        const isCurrentConnectionStillActive = ()=>{
            return activeWebSocketGeneration === this._rpcWebSocketGeneration;
        };
        await Promise.all(// `_updateSubscriptions` recursively when processing the state,
        // so it's important that we look up the *current* version of
        // each subscription, every time we process a hash.
        Object.keys(this._subscriptionsByHash).map(async (hash6)=>{
            const subscription = this._subscriptionsByHash[hash6];
            if (subscription === undefined) // This entry has since been deleted. Skip.
            return;
            switch(subscription.state){
                case "pending":
                case "unsubscribed":
                    if (subscription.callbacks.size === 0) {
                        /**
             * You can end up here when:
             *
             * - a subscription has recently unsubscribed
             *   without having new callbacks added to it
             *   while the unsubscribe was in flight, or
             * - when a pending subscription has its
             *   listeners removed before a request was
             *   sent to the server.
             *
             * Being that nobody is interested in this
             * subscription any longer, delete it.
             */ delete this._subscriptionsByHash[hash6];
                        if (subscription.state === "unsubscribed") delete this._subscriptionCallbacksByServerSubscriptionId[subscription.serverSubscriptionId];
                        await this._updateSubscriptions();
                        return;
                    }
                    await (async ()=>{
                        const { args , method  } = subscription;
                        try {
                            this._subscriptionsByHash[hash6] = {
                                ...subscription,
                                state: "subscribing"
                            };
                            const serverSubscriptionId = await this._rpcWebSocket.call(method, args);
                            this._subscriptionsByHash[hash6] = {
                                ...subscription,
                                serverSubscriptionId,
                                state: "subscribed"
                            };
                            this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId] = subscription.callbacks;
                            await this._updateSubscriptions();
                        } catch (e) {
                            if (e instanceof Error) console.error(`${method} error for argument`, args, e.message);
                            if (!isCurrentConnectionStillActive()) return;
                             // TODO: Maybe add an 'errored' state or a retry limit?
                            this._subscriptionsByHash[hash6] = {
                                ...subscription,
                                state: "pending"
                            };
                            await this._updateSubscriptions();
                        }
                    })();
                    break;
                case "subscribed":
                    if (subscription.callbacks.size === 0) // By the time we successfully set up a subscription
                    // with the server, the client stopped caring about it.
                    // Tear it down now.
                    await (async ()=>{
                        const { serverSubscriptionId , unsubscribeMethod  } = subscription;
                        if (this._subscriptionsAutoDisposedByRpc.has(serverSubscriptionId)) /**
                 * Special case.
                 * If we're dealing with a subscription that has been auto-
                 * disposed by the RPC, then we can skip the RPC call to
                 * tear down the subscription here.
                 *
                 * NOTE: There is a proposal to eliminate this special case, here:
                 * https://github.com/solana-labs/solana/issues/18892
                 */ this._subscriptionsAutoDisposedByRpc.delete(serverSubscriptionId);
                        else {
                            this._subscriptionsByHash[hash6] = {
                                ...subscription,
                                state: "unsubscribing"
                            };
                            try {
                                await this._rpcWebSocket.call(unsubscribeMethod, [
                                    serverSubscriptionId
                                ]);
                            } catch (e) {
                                if (e instanceof Error) console.error(`${unsubscribeMethod} error:`, e.message);
                                if (!isCurrentConnectionStillActive()) return;
                                 // TODO: Maybe add an 'errored' state or a retry limit?
                                this._subscriptionsByHash[hash6] = {
                                    ...subscription,
                                    state: "subscribed"
                                };
                                await this._updateSubscriptions();
                                return;
                            }
                        }
                        this._subscriptionsByHash[hash6] = {
                            ...subscription,
                            state: "unsubscribed"
                        };
                        await this._updateSubscriptions();
                    })();
                    break;
            }
        }));
    }
    /**
   * @internal
   */ _handleServerNotification(serverSubscriptionId, callbackArgs) {
        const callbacks = this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId];
        if (callbacks === undefined) return;
        callbacks.forEach((cb)=>{
            try {
                cb(// `TCallback` which is certainly compatible with `Parameters<TCallback>`.
                // See https://github.com/microsoft/TypeScript/issues/47615
                // @ts-ignore
                ...callbackArgs);
            } catch (e) {
                console.error(e);
            }
        });
    }
    /**
   * @internal
   */ _wsOnAccountNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, AccountNotificationResult);
        this._handleServerNotification(subscription, [
            result.value,
            result.context
        ]);
    }
    /**
   * @internal
   */ _makeSubscription(subscriptionConfig, /**
   * When preparing `args` for a call to `_makeSubscription`, be sure
   * to carefully apply a default `commitment` property, if necessary.
   *
   * - If the user supplied a `commitment` use that.
   * - Otherwise, if the `Connection::commitment` is set, use that.
   * - Otherwise, set it to the RPC server default: `finalized`.
   *
   * This is extremely important to ensure that these two fundamentally
   * identical subscriptions produce the same identifying hash:
   *
   * - A subscription made without specifying a commitment.
   * - A subscription made where the commitment specified is the same
   *   as the default applied to the subscription above.
   *
   * Example; these two subscriptions must produce the same hash:
   *
   * - An `accountSubscribe` subscription for `'PUBKEY'`
   * - An `accountSubscribe` subscription for `'PUBKEY'` with commitment
   *   `'finalized'`.
   *
   * See the 'making a subscription with defaulted params omitted' test
   * in `connection-subscriptions.ts` for more.
   */ args) {
        const clientSubscriptionId = this._nextClientSubscriptionId++;
        const hash7 = fastStableStringify$1([
            subscriptionConfig.method,
            args
        ], true);
        const existingSubscription = this._subscriptionsByHash[hash7];
        if (existingSubscription === undefined) this._subscriptionsByHash[hash7] = {
            ...subscriptionConfig,
            args,
            callbacks: new Set([
                subscriptionConfig.callback
            ]),
            state: "pending"
        };
        else existingSubscription.callbacks.add(subscriptionConfig.callback);
        this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId] = async ()=>{
            delete this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
            const subscription = this._subscriptionsByHash[hash7];
            assert(subscription !== undefined, `Could not find a \`Subscription\` when tearing down client subscription #${clientSubscriptionId}`);
            subscription.callbacks.delete(subscriptionConfig.callback);
            await this._updateSubscriptions();
        };
        this._updateSubscriptions();
        return clientSubscriptionId;
    }
    /**
   * Register a callback to be invoked whenever the specified account changes
   *
   * @param publicKey Public key of the account to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @return subscription id
   */ onAccountChange(publicKey13, callback, commitment) {
        const args = this._buildArgs([
            publicKey13.toBase58()
        ], commitment || this._commitment || "finalized", "base64");
        return this._makeSubscription({
            callback,
            method: "accountSubscribe",
            unsubscribeMethod: "accountUnsubscribe"
        }, args);
    }
    /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */ async removeAccountChangeListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "account change");
    }
    /**
   * @internal
   */ _wsOnProgramAccountNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, ProgramAccountNotificationResult);
        this._handleServerNotification(subscription, [
            {
                accountId: result.value.pubkey,
                accountInfo: result.value.account
            },
            result.context
        ]);
    }
    /**
   * Register a callback to be invoked whenever accounts owned by the
   * specified program change
   *
   * @param programId Public key of the program to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @param filters The program account filters to pass into the RPC method
   * @return subscription id
   */ onProgramAccountChange(programId, callback, commitment, filters) {
        const args = this._buildArgs([
            programId.toBase58()
        ], commitment || this._commitment || "finalized", "base64", filters ? {
            filters: filters
        } : undefined);
        return this._makeSubscription({
            callback,
            method: "programSubscribe",
            unsubscribeMethod: "programUnsubscribe"
        }, args);
    }
    /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */ async removeProgramAccountChangeListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "program account change");
    }
    /**
   * Registers a callback to be invoked whenever logs are emitted.
   */ onLogs(filter, callback, commitment) {
        const args = this._buildArgs([
            typeof filter === "object" ? {
                mentions: [
                    filter.toString()
                ]
            } : filter
        ], commitment || this._commitment || "finalized" // Apply connection/server default.
        );
        return this._makeSubscription({
            callback,
            method: "logsSubscribe",
            unsubscribeMethod: "logsUnsubscribe"
        }, args);
    }
    /**
   * Deregister a logs callback.
   *
   * @param id client subscription id to deregister.
   */ async removeOnLogsListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "logs");
    }
    /**
   * @internal
   */ _wsOnLogsNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, LogsNotificationResult);
        this._handleServerNotification(subscription, [
            result.value,
            result.context
        ]);
    }
    /**
   * @internal
   */ _wsOnSlotNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, SlotNotificationResult);
        this._handleServerNotification(subscription, [
            result
        ]);
    }
    /**
   * Register a callback to be invoked upon slot changes
   *
   * @param callback Function to invoke whenever the slot changes
   * @return subscription id
   */ onSlotChange(callback) {
        return this._makeSubscription({
            callback,
            method: "slotSubscribe",
            unsubscribeMethod: "slotUnsubscribe"
        }, []);
    }
    /**
   * Deregister a slot notification callback
   *
   * @param id client subscription id to deregister
   */ async removeSlotChangeListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "slot change");
    }
    /**
   * @internal
   */ _wsOnSlotUpdatesNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, SlotUpdateNotificationResult);
        this._handleServerNotification(subscription, [
            result
        ]);
    }
    /**
   * Register a callback to be invoked upon slot updates. {@link SlotUpdate}'s
   * may be useful to track live progress of a cluster.
   *
   * @param callback Function to invoke whenever the slot updates
   * @return subscription id
   */ onSlotUpdate(callback) {
        return this._makeSubscription({
            callback,
            method: "slotsUpdatesSubscribe",
            unsubscribeMethod: "slotsUpdatesUnsubscribe"
        }, []);
    }
    /**
   * Deregister a slot update notification callback
   *
   * @param id client subscription id to deregister
   */ async removeSlotUpdateListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "slot update");
    }
    /**
   * @internal
   */ async _unsubscribeClientSubscription(clientSubscriptionId, subscriptionName) {
        const dispose = this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
        if (dispose) await dispose();
        else console.warn("Ignored unsubscribe request because an active subscription with id " + `\`${clientSubscriptionId}\` for '${subscriptionName}' events ` + "could not be found.");
    }
    _buildArgs(args, override, encoding, extra) {
        const commitment = override || this._commitment;
        if (commitment || encoding || extra) {
            let options = {};
            if (encoding) options.encoding = encoding;
            if (commitment) options.commitment = commitment;
            if (extra) options = Object.assign(options, extra);
            args.push(options);
        }
        return args;
    }
    /**
   * @internal
   */ _buildArgsAtLeastConfirmed(args, override, encoding, extra) {
        const commitment = override || this._commitment;
        if (commitment && ![
            "confirmed",
            "finalized"
        ].includes(commitment)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
        return this._buildArgs(args, override, encoding, extra);
    }
    /**
   * @internal
   */ _wsOnSignatureNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, SignatureNotificationResult);
        if (result.value !== "receivedSignature") /**
       * Special case.
       * After a signature is processed, RPCs automatically dispose of the
       * subscription on the server side. We need to track which of these
       * subscriptions have been disposed in such a way, so that we know
       * whether the client is dealing with a not-yet-processed signature
       * (in which case we must tear down the server subscription) or an
       * already-processed signature (in which case the client can simply
       * clear out the subscription locally without telling the server).
       *
       * NOTE: There is a proposal to eliminate this special case, here:
       * https://github.com/solana-labs/solana/issues/18892
       */ this._subscriptionsAutoDisposedByRpc.add(subscription);
        this._handleServerNotification(subscription, result.value === "receivedSignature" ? [
            {
                type: "received"
            },
            result.context
        ] : [
            {
                type: "status",
                result: result.value
            },
            result.context
        ]);
    }
    /**
   * Register a callback to be invoked upon signature updates
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param commitment Specify the commitment level signature must reach before notification
   * @return subscription id
   */ onSignature(signature, callback, commitment) {
        const args = this._buildArgs([
            signature
        ], commitment || this._commitment || "finalized" // Apply connection/server default.
        );
        const clientSubscriptionId = this._makeSubscription({
            callback: (notification, context)=>{
                if (notification.type === "status") {
                    callback(notification.result, context); // Signatures subscriptions are auto-removed by the RPC service
                    // so no need to explicitly send an unsubscribe message.
                    try {
                        this.removeSignatureListener(clientSubscriptionId); // eslint-disable-next-line no-empty
                    } catch (_err) {}
                }
            },
            method: "signatureSubscribe",
            unsubscribeMethod: "signatureUnsubscribe"
        }, args);
        return clientSubscriptionId;
    }
    /**
   * Register a callback to be invoked when a transaction is
   * received and/or processed.
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param options Enable received notifications and set the commitment
   *   level that signature must reach before notification
   * @return subscription id
   */ onSignatureWithOptions(signature, callback, options) {
        const { commitment , ...extra } = {
            ...options,
            commitment: options && options.commitment || this._commitment || "finalized" // Apply connection/server default.
        };
        const args = this._buildArgs([
            signature
        ], commitment, undefined, extra);
        const clientSubscriptionId = this._makeSubscription({
            callback: (notification, context)=>{
                callback(notification, context); // Signatures subscriptions are auto-removed by the RPC service
                // so no need to explicitly send an unsubscribe message.
                try {
                    this.removeSignatureListener(clientSubscriptionId); // eslint-disable-next-line no-empty
                } catch (_err) {}
            },
            method: "signatureSubscribe",
            unsubscribeMethod: "signatureUnsubscribe"
        }, args);
        return clientSubscriptionId;
    }
    /**
   * Deregister a signature notification callback
   *
   * @param id client subscription id to deregister
   */ async removeSignatureListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "signature result");
    }
    /**
   * @internal
   */ _wsOnRootNotification(notification) {
        const { result , subscription  } = (0, _superstruct.create)(notification, RootNotificationResult);
        this._handleServerNotification(subscription, [
            result
        ]);
    }
    /**
   * Register a callback to be invoked upon root changes
   *
   * @param callback Function to invoke whenever the root changes
   * @return subscription id
   */ onRootChange(callback) {
        return this._makeSubscription({
            callback,
            method: "rootSubscribe",
            unsubscribeMethod: "rootUnsubscribe"
        }, []);
    }
    /**
   * Deregister a root notification callback
   *
   * @param id client subscription id to deregister
   */ async removeRootChangeListener(clientSubscriptionId) {
        await this._unsubscribeClientSubscription(clientSubscriptionId, "root change");
    }
}
/**
 * Keypair signer interface
 */ /**
 * An account keypair used for signing transactions.
 */ class Keypair {
    /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param keypair ed25519 keypair
   */ constructor(keypair){
        this._keypair = void 0;
        if (keypair) this._keypair = keypair;
        else this._keypair = (0, _tweetnaclDefault.default).sign.keyPair();
    }
    /**
   * Generate a new random keypair
   */ static generate() {
        return new Keypair((0, _tweetnaclDefault.default).sign.keyPair());
    }
    /**
   * Create a keypair from a raw secret key byte array.
   *
   * This method should only be used to recreate a keypair from a previously
   * generated secret key. Generating keypairs from a random seed should be done
   * with the {@link Keypair.fromSeed} method.
   *
   * @throws error if the provided secret key is invalid and validation is not skipped.
   *
   * @param secretKey secret key byte array
   * @param options: skip secret key validation
   */ static fromSecretKey(secretKey, options) {
        const keypair = (0, _tweetnaclDefault.default).sign.keyPair.fromSecretKey(secretKey);
        if (!options || !options.skipValidation) {
            const encoder = new TextEncoder();
            const signData = encoder.encode("@solana/web3.js-validation-v1");
            const signature = (0, _tweetnaclDefault.default).sign.detached(signData, keypair.secretKey);
            if (!(0, _tweetnaclDefault.default).sign.detached.verify(signData, signature, keypair.publicKey)) throw new Error("provided secretKey is invalid");
        }
        return new Keypair(keypair);
    }
    /**
   * Generate a keypair from a 32 byte seed.
   *
   * @param seed seed byte array
   */ static fromSeed(seed) {
        return new Keypair((0, _tweetnaclDefault.default).sign.keyPair.fromSeed(seed));
    }
    /**
   * The public key for this keypair
   */ get publicKey() {
        return new PublicKey(this._keypair.publicKey);
    }
    /**
   * The raw secret key for this keypair
   */ get secretKey() {
        return this._keypair.secretKey;
    }
}
const PRIVATE_KEY_BYTES$1 = 64;
const PUBLIC_KEY_BYTES$1 = 32;
const SIGNATURE_BYTES = 64;
/**
 * Params for creating an ed25519 instruction using a public key
 */ const ED25519_INSTRUCTION_LAYOUT = _bufferLayout.struct([
    _bufferLayout.u8("numSignatures"),
    _bufferLayout.u8("padding"),
    _bufferLayout.u16("signatureOffset"),
    _bufferLayout.u16("signatureInstructionIndex"),
    _bufferLayout.u16("publicKeyOffset"),
    _bufferLayout.u16("publicKeyInstructionIndex"),
    _bufferLayout.u16("messageDataOffset"),
    _bufferLayout.u16("messageDataSize"),
    _bufferLayout.u16("messageInstructionIndex")
]);
class Ed25519Program {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the ed25519 program
   */ /**
   * Create an ed25519 instruction with a public key and signature. The
   * public key must be a buffer that is 32 bytes long, and the signature
   * must be a buffer of 64 bytes.
   */ static createInstructionWithPublicKey(params) {
        const { publicKey: publicKey14 , message , signature , instructionIndex  } = params;
        assert(publicKey14.length === PUBLIC_KEY_BYTES$1, `Public Key must be ${PUBLIC_KEY_BYTES$1} bytes but received ${publicKey14.length} bytes`);
        assert(signature.length === SIGNATURE_BYTES, `Signature must be ${SIGNATURE_BYTES} bytes but received ${signature.length} bytes`);
        const publicKeyOffset = ED25519_INSTRUCTION_LAYOUT.span;
        const signatureOffset = publicKeyOffset + publicKey14.length;
        const messageDataOffset = signatureOffset + signature.length;
        const numSignatures = 1;
        const instructionData = (0, _buffer.Buffer).alloc(messageDataOffset + message.length);
        const index = instructionIndex == null ? 0xffff // An index of `u16::MAX` makes it default to the current instruction.
         : instructionIndex;
        ED25519_INSTRUCTION_LAYOUT.encode({
            numSignatures,
            padding: 0,
            signatureOffset,
            signatureInstructionIndex: index,
            publicKeyOffset,
            publicKeyInstructionIndex: index,
            messageDataOffset,
            messageDataSize: message.length,
            messageInstructionIndex: index
        }, instructionData);
        instructionData.fill(publicKey14, publicKeyOffset);
        instructionData.fill(signature, signatureOffset);
        instructionData.fill(message, messageDataOffset);
        return new TransactionInstruction({
            keys: [],
            programId: Ed25519Program.programId,
            data: instructionData
        });
    }
    /**
   * Create an ed25519 instruction with a private key. The private key
   * must be a buffer that is 64 bytes long.
   */ static createInstructionWithPrivateKey(params) {
        const { privateKey , message , instructionIndex  } = params;
        assert(privateKey.length === PRIVATE_KEY_BYTES$1, `Private key must be ${PRIVATE_KEY_BYTES$1} bytes but received ${privateKey.length} bytes`);
        try {
            const keypair = Keypair.fromSecretKey(privateKey);
            const publicKey15 = keypair.publicKey.toBytes();
            const signature = (0, _tweetnaclDefault.default).sign.detached(message, keypair.secretKey);
            return this.createInstructionWithPublicKey({
                publicKey: publicKey15,
                message,
                signature,
                instructionIndex
            });
        } catch (error) {
            throw new Error(`Error creating instruction; ${error}`);
        }
    }
}
Ed25519Program.programId = new PublicKey("Ed25519SigVerify111111111111111111111111111");
/**
 * Address of the stake config account which configures the rate
 * of stake warmup and cooldown as well as the slashing penalty.
 */ const STAKE_CONFIG_ID = new PublicKey("StakeConfig11111111111111111111111111111111");
/**
 * Stake account authority info
 */ class Authorized {
    /** stake authority */ /** withdraw authority */ /**
   * Create a new Authorized object
   * @param staker the stake authority
   * @param withdrawer the withdraw authority
   */ constructor(staker, withdrawer){
        this.staker = void 0;
        this.withdrawer = void 0;
        this.staker = staker;
        this.withdrawer = withdrawer;
    }
}
/**
 * Stake account lockup info
 */ class Lockup {
    /** Unix timestamp of lockup expiration */ /** Epoch of lockup expiration */ /** Lockup custodian authority */ /**
   * Create a new Lockup object
   */ constructor(unixTimestamp, epoch, custodian){
        this.unixTimestamp = void 0;
        this.epoch = void 0;
        this.custodian = void 0;
        this.unixTimestamp = unixTimestamp;
        this.epoch = epoch;
        this.custodian = custodian;
    }
}
Lockup.default = new Lockup(0, 0, PublicKey.default);
/**
 * Stake Instruction class
 */ class StakeInstruction {
    /**
   * @internal
   */ constructor(){}
    /**
   * Decode a stake instruction and retrieve the instruction type.
   */ static decodeInstructionType(instruction) {
        this.checkProgramId(instruction.programId);
        const instructionTypeLayout = _bufferLayout.u32("instruction");
        const typeIndex = instructionTypeLayout.decode(instruction.data);
        let type;
        for (const [ixType, layout] of Object.entries(STAKE_INSTRUCTION_LAYOUTS))if (layout.index == typeIndex) {
            type = ixType;
            break;
        }
        if (!type) throw new Error("Instruction type incorrect; not a StakeInstruction");
        return type;
    }
    /**
   * Decode a initialize stake instruction and retrieve the instruction params.
   */ static decodeInitialize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { authorized: authorized3 , lockup: lockup1  } = decodeData(STAKE_INSTRUCTION_LAYOUTS.Initialize, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            authorized: new Authorized(new PublicKey(authorized3.staker), new PublicKey(authorized3.withdrawer)),
            lockup: new Lockup(lockup1.unixTimestamp, lockup1.epoch, new PublicKey(lockup1.custodian))
        };
    }
    /**
   * Decode a delegate stake instruction and retrieve the instruction params.
   */ static decodeDelegate(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 6);
        decodeData(STAKE_INSTRUCTION_LAYOUTS.Delegate, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            votePubkey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[5].pubkey
        };
    }
    /**
   * Decode an authorize stake instruction and retrieve the instruction params.
   */ static decodeAuthorize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { newAuthorized , stakeAuthorizationType  } = decodeData(STAKE_INSTRUCTION_LAYOUTS.Authorize, instruction.data);
        const o = {
            stakePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey,
            newAuthorizedPubkey: new PublicKey(newAuthorized),
            stakeAuthorizationType: {
                index: stakeAuthorizationType
            }
        };
        if (instruction.keys.length > 3) o.custodianPubkey = instruction.keys[3].pubkey;
        return o;
    }
    /**
   * Decode an authorize-with-seed stake instruction and retrieve the instruction params.
   */ static decodeAuthorizeWithSeed(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 2);
        const { newAuthorized , stakeAuthorizationType , authoritySeed , authorityOwner  } = decodeData(STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed, instruction.data);
        const o = {
            stakePubkey: instruction.keys[0].pubkey,
            authorityBase: instruction.keys[1].pubkey,
            authoritySeed: authoritySeed,
            authorityOwner: new PublicKey(authorityOwner),
            newAuthorizedPubkey: new PublicKey(newAuthorized),
            stakeAuthorizationType: {
                index: stakeAuthorizationType
            }
        };
        if (instruction.keys.length > 3) o.custodianPubkey = instruction.keys[3].pubkey;
        return o;
    }
    /**
   * Decode a split stake instruction and retrieve the instruction params.
   */ static decodeSplit(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { lamports  } = decodeData(STAKE_INSTRUCTION_LAYOUTS.Split, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            splitStakePubkey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey,
            lamports
        };
    }
    /**
   * Decode a merge stake instruction and retrieve the instruction params.
   */ static decodeMerge(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        decodeData(STAKE_INSTRUCTION_LAYOUTS.Merge, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            sourceStakePubKey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[4].pubkey
        };
    }
    /**
   * Decode a withdraw stake instruction and retrieve the instruction params.
   */ static decodeWithdraw(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 5);
        const { lamports  } = decodeData(STAKE_INSTRUCTION_LAYOUTS.Withdraw, instruction.data);
        const o = {
            stakePubkey: instruction.keys[0].pubkey,
            toPubkey: instruction.keys[1].pubkey,
            authorizedPubkey: instruction.keys[4].pubkey,
            lamports
        };
        if (instruction.keys.length > 5) o.custodianPubkey = instruction.keys[5].pubkey;
        return o;
    }
    /**
   * Decode a deactivate stake instruction and retrieve the instruction params.
   */ static decodeDeactivate(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        decodeData(STAKE_INSTRUCTION_LAYOUTS.Deactivate, instruction.data);
        return {
            stakePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey
        };
    }
    /**
   * @internal
   */ static checkProgramId(programId) {
        if (!programId.equals(StakeProgram.programId)) throw new Error("invalid instruction; programId is not StakeProgram");
    }
    /**
   * @internal
   */ static checkKeyLength(keys, expectedLength) {
        if (keys.length < expectedLength) throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
}
/**
 * An enumeration of valid StakeInstructionType's
 */ /**
 * An enumeration of valid stake InstructionType's
 * @internal
 */ const STAKE_INSTRUCTION_LAYOUTS = Object.freeze({
    Initialize: {
        index: 0,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            authorized(),
            lockup()
        ])
    },
    Authorize: {
        index: 1,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("newAuthorized"),
            _bufferLayout.u32("stakeAuthorizationType")
        ])
    },
    Delegate: {
        index: 2,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    Split: {
        index: 3,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports")
        ])
    },
    Withdraw: {
        index: 4,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports")
        ])
    },
    Deactivate: {
        index: 5,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    Merge: {
        index: 7,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction")
        ])
    },
    AuthorizeWithSeed: {
        index: 8,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("newAuthorized"),
            _bufferLayout.u32("stakeAuthorizationType"),
            rustString("authoritySeed"),
            publicKey("authorityOwner")
        ])
    }
});
/**
 * Stake authorization type
 */ /**
 * An enumeration of valid StakeAuthorizationLayout's
 */ const StakeAuthorizationLayout = Object.freeze({
    Staker: {
        index: 0
    },
    Withdrawer: {
        index: 1
    }
});
/**
 * Factory class for transactions to interact with the Stake program
 */ class StakeProgram {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the Stake program
   */ /**
   * Generate an Initialize instruction to add to a Stake Create transaction
   */ static initialize(params) {
        const { stakePubkey , authorized: authorized4 , lockup: maybeLockup  } = params;
        const lockup2 = maybeLockup || Lockup.default;
        const type = STAKE_INSTRUCTION_LAYOUTS.Initialize;
        const data = encodeData(type, {
            authorized: {
                staker: toBuffer(authorized4.staker.toBuffer()),
                withdrawer: toBuffer(authorized4.withdrawer.toBuffer())
            },
            lockup: {
                unixTimestamp: lockup2.unixTimestamp,
                epoch: lockup2.epoch,
                custodian: toBuffer(lockup2.custodian.toBuffer())
            }
        });
        const instructionData = {
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        };
        return new TransactionInstruction(instructionData);
    }
    /**
   * Generate a Transaction that creates a new Stake account at
   *   an address generated with `from`, a seed, and the Stake programId
   */ static createAccountWithSeed(params) {
        const transaction = new Transaction();
        transaction.add(SystemProgram.createAccountWithSeed({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.stakePubkey,
            basePubkey: params.basePubkey,
            seed: params.seed,
            lamports: params.lamports,
            space: this.space,
            programId: this.programId
        }));
        const { stakePubkey , authorized: authorized5 , lockup: lockup3  } = params;
        return transaction.add(this.initialize({
            stakePubkey,
            authorized: authorized5,
            lockup: lockup3
        }));
    }
    /**
   * Generate a Transaction that creates a new Stake account
   */ static createAccount(params) {
        const transaction = new Transaction();
        transaction.add(SystemProgram.createAccount({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.stakePubkey,
            lamports: params.lamports,
            space: this.space,
            programId: this.programId
        }));
        const { stakePubkey , authorized: authorized6 , lockup: lockup4  } = params;
        return transaction.add(this.initialize({
            stakePubkey,
            authorized: authorized6,
            lockup: lockup4
        }));
    }
    /**
   * Generate a Transaction that delegates Stake tokens to a validator
   * Vote PublicKey. This transaction can also be used to redelegate Stake
   * to a new validator Vote PublicKey.
   */ static delegate(params) {
        const { stakePubkey , authorizedPubkey , votePubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Delegate;
        const data = encodeData(type);
        return new Transaction().add({
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: votePubkey,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: STAKE_CONFIG_ID,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */ static authorize(params) {
        const { stakePubkey , authorizedPubkey , newAuthorizedPubkey , stakeAuthorizationType , custodianPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Authorize;
        const data = encodeData(type, {
            newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
            stakeAuthorizationType: stakeAuthorizationType.index
        });
        const keys = [
            {
                pubkey: stakePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: authorizedPubkey,
                isSigner: true,
                isWritable: false
            }
        ];
        if (custodianPubkey) keys.push({
            pubkey: custodianPubkey,
            isSigner: false,
            isWritable: false
        });
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */ static authorizeWithSeed(params) {
        const { stakePubkey , authorityBase , authoritySeed , authorityOwner , newAuthorizedPubkey , stakeAuthorizationType , custodianPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
        const data = encodeData(type, {
            newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
            stakeAuthorizationType: stakeAuthorizationType.index,
            authoritySeed: authoritySeed,
            authorityOwner: toBuffer(authorityOwner.toBuffer())
        });
        const keys = [
            {
                pubkey: stakePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: authorityBase,
                isSigner: true,
                isWritable: false
            },
            {
                pubkey: SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: false
            }
        ];
        if (custodianPubkey) keys.push({
            pubkey: custodianPubkey,
            isSigner: false,
            isWritable: false
        });
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * @internal
   */ static splitInstruction(params) {
        const { stakePubkey , authorizedPubkey , splitStakePubkey , lamports  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Split;
        const data = encodeData(type, {
            lamports
        });
        return new TransactionInstruction({
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: splitStakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that splits Stake tokens into another stake account
   */ static split(params) {
        const transaction = new Transaction();
        transaction.add(SystemProgram.createAccount({
            fromPubkey: params.authorizedPubkey,
            newAccountPubkey: params.splitStakePubkey,
            lamports: 0,
            space: this.space,
            programId: this.programId
        }));
        return transaction.add(this.splitInstruction(params));
    }
    /**
   * Generate a Transaction that splits Stake tokens into another account
   * derived from a base public key and seed
   */ static splitWithSeed(params) {
        const { stakePubkey , authorizedPubkey , splitStakePubkey , basePubkey , seed , lamports  } = params;
        const transaction = new Transaction();
        transaction.add(SystemProgram.allocate({
            accountPubkey: splitStakePubkey,
            basePubkey,
            seed,
            space: this.space,
            programId: this.programId
        }));
        return transaction.add(this.splitInstruction({
            stakePubkey,
            authorizedPubkey,
            splitStakePubkey,
            lamports
        }));
    }
    /**
   * Generate a Transaction that merges Stake accounts.
   */ static merge(params) {
        const { stakePubkey , sourceStakePubKey , authorizedPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Merge;
        const data = encodeData(type);
        return new Transaction().add({
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: sourceStakePubKey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that withdraws deactivated Stake tokens.
   */ static withdraw(params) {
        const { stakePubkey , authorizedPubkey , toPubkey , lamports , custodianPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Withdraw;
        const data = encodeData(type, {
            lamports
        });
        const keys = [
            {
                pubkey: stakePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: toPubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: false
            },
            {
                pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
                isSigner: false,
                isWritable: false
            },
            {
                pubkey: authorizedPubkey,
                isSigner: true,
                isWritable: false
            }
        ];
        if (custodianPubkey) keys.push({
            pubkey: custodianPubkey,
            isSigner: false,
            isWritable: false
        });
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a Transaction that deactivates Stake tokens.
   */ static deactivate(params) {
        const { stakePubkey , authorizedPubkey  } = params;
        const type = STAKE_INSTRUCTION_LAYOUTS.Deactivate;
        const data = encodeData(type);
        return new Transaction().add({
            keys: [
                {
                    pubkey: stakePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: authorizedPubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        });
    }
}
StakeProgram.programId = new PublicKey("Stake11111111111111111111111111111111111111");
StakeProgram.space = 200;
const { publicKeyCreate , ecdsaSign  } = (0, _secp256K1Default.default);
const PRIVATE_KEY_BYTES = 32;
const ETHEREUM_ADDRESS_BYTES = 20;
const PUBLIC_KEY_BYTES = 64;
const SIGNATURE_OFFSETS_SERIALIZED_SIZE = 11;
/**
 * Params for creating an secp256k1 instruction using a public key
 */ const SECP256K1_INSTRUCTION_LAYOUT = _bufferLayout.struct([
    _bufferLayout.u8("numSignatures"),
    _bufferLayout.u16("signatureOffset"),
    _bufferLayout.u8("signatureInstructionIndex"),
    _bufferLayout.u16("ethAddressOffset"),
    _bufferLayout.u8("ethAddressInstructionIndex"),
    _bufferLayout.u16("messageDataOffset"),
    _bufferLayout.u16("messageDataSize"),
    _bufferLayout.u8("messageInstructionIndex"),
    _bufferLayout.blob(20, "ethAddress"),
    _bufferLayout.blob(64, "signature"),
    _bufferLayout.u8("recoveryId")
]);
class Secp256k1Program {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the secp256k1 program
   */ /**
   * Construct an Ethereum address from a secp256k1 public key buffer.
   * @param {Buffer} publicKey a 64 byte secp256k1 public key buffer
   */ static publicKeyToEthAddress(publicKey16) {
        assert(publicKey16.length === PUBLIC_KEY_BYTES, `Public key must be ${PUBLIC_KEY_BYTES} bytes but received ${publicKey16.length} bytes`);
        try {
            return (0, _buffer.Buffer).from((0, _jsSha3Default.default).keccak_256.update(toBuffer(publicKey16)).digest()).slice(-ETHEREUM_ADDRESS_BYTES);
        } catch (error) {
            throw new Error(`Error constructing Ethereum address: ${error}`);
        }
    }
    /**
   * Create an secp256k1 instruction with a public key. The public key
   * must be a buffer that is 64 bytes long.
   */ static createInstructionWithPublicKey(params) {
        const { publicKey: publicKey17 , message , signature , recoveryId , instructionIndex  } = params;
        return Secp256k1Program.createInstructionWithEthAddress({
            ethAddress: Secp256k1Program.publicKeyToEthAddress(publicKey17),
            message,
            signature,
            recoveryId,
            instructionIndex
        });
    }
    /**
   * Create an secp256k1 instruction with an Ethereum address. The address
   * must be a hex string or a buffer that is 20 bytes long.
   */ static createInstructionWithEthAddress(params) {
        const { ethAddress: rawAddress , message , signature , recoveryId , instructionIndex =0  } = params;
        let ethAddress;
        if (typeof rawAddress === "string") {
            if (rawAddress.startsWith("0x")) ethAddress = (0, _buffer.Buffer).from(rawAddress.substr(2), "hex");
            else ethAddress = (0, _buffer.Buffer).from(rawAddress, "hex");
        } else ethAddress = rawAddress;
        assert(ethAddress.length === ETHEREUM_ADDRESS_BYTES, `Address must be ${ETHEREUM_ADDRESS_BYTES} bytes but received ${ethAddress.length} bytes`);
        const dataStart = 1 + SIGNATURE_OFFSETS_SERIALIZED_SIZE;
        const ethAddressOffset = dataStart;
        const signatureOffset = dataStart + ethAddress.length;
        const messageDataOffset = signatureOffset + signature.length + 1;
        const numSignatures = 1;
        const instructionData = (0, _buffer.Buffer).alloc(SECP256K1_INSTRUCTION_LAYOUT.span + message.length);
        SECP256K1_INSTRUCTION_LAYOUT.encode({
            numSignatures,
            signatureOffset,
            signatureInstructionIndex: instructionIndex,
            ethAddressOffset,
            ethAddressInstructionIndex: instructionIndex,
            messageDataOffset,
            messageDataSize: message.length,
            messageInstructionIndex: instructionIndex,
            signature: toBuffer(signature),
            ethAddress: toBuffer(ethAddress),
            recoveryId
        }, instructionData);
        instructionData.fill(toBuffer(message), SECP256K1_INSTRUCTION_LAYOUT.span);
        return new TransactionInstruction({
            keys: [],
            programId: Secp256k1Program.programId,
            data: instructionData
        });
    }
    /**
   * Create an secp256k1 instruction with a private key. The private key
   * must be a buffer that is 32 bytes long.
   */ static createInstructionWithPrivateKey(params) {
        const { privateKey: pkey , message , instructionIndex  } = params;
        assert(pkey.length === PRIVATE_KEY_BYTES, `Private key must be ${PRIVATE_KEY_BYTES} bytes but received ${pkey.length} bytes`);
        try {
            const privateKey = toBuffer(pkey);
            const publicKey18 = publicKeyCreate(privateKey, false).slice(1); // throw away leading byte
            const messageHash = (0, _buffer.Buffer).from((0, _jsSha3Default.default).keccak_256.update(toBuffer(message)).digest());
            const { signature , recid: recoveryId  } = ecdsaSign(messageHash, privateKey);
            return this.createInstructionWithPublicKey({
                publicKey: publicKey18,
                message,
                signature,
                recoveryId,
                instructionIndex
            });
        } catch (error) {
            throw new Error(`Error creating instruction; ${error}`);
        }
    }
}
Secp256k1Program.programId = new PublicKey("KeccakSecp256k11111111111111111111111111111");
const VALIDATOR_INFO_KEY = new PublicKey("Va1idator1nfo111111111111111111111111111111");
/**
 * @internal
 */ const InfoString = (0, _superstruct.type)({
    name: (0, _superstruct.string)(),
    website: (0, _superstruct.optional)((0, _superstruct.string)()),
    details: (0, _superstruct.optional)((0, _superstruct.string)()),
    keybaseUsername: (0, _superstruct.optional)((0, _superstruct.string)())
});
/**
 * ValidatorInfo class
 */ class ValidatorInfo {
    /**
   * validator public key
   */ /**
   * validator information
   */ /**
   * Construct a valid ValidatorInfo
   *
   * @param key validator public key
   * @param info validator information
   */ constructor(key, info){
        this.key = void 0;
        this.info = void 0;
        this.key = key;
        this.info = info;
    }
    /**
   * Deserialize ValidatorInfo from the config account data. Exactly two config
   * keys are required in the data.
   *
   * @param buffer config account data
   * @return null if info was not found
   */ static fromConfigData(buffer) {
        const PUBKEY_LENGTH1 = 32;
        let byteArray = [
            ...buffer
        ];
        const configKeyCount = decodeLength(byteArray);
        if (configKeyCount !== 2) return null;
        const configKeys = [];
        for(let i = 0; i < 2; i++){
            const publicKey19 = new PublicKey(byteArray.slice(0, PUBKEY_LENGTH1));
            byteArray = byteArray.slice(PUBKEY_LENGTH1);
            const isSigner = byteArray.slice(0, 1)[0] === 1;
            byteArray = byteArray.slice(1);
            configKeys.push({
                publicKey: publicKey19,
                isSigner
            });
        }
        if (configKeys[0].publicKey.equals(VALIDATOR_INFO_KEY)) {
            if (configKeys[1].isSigner) {
                const rawInfo = rustString().decode((0, _buffer.Buffer).from(byteArray));
                const info = JSON.parse(rawInfo);
                (0, _superstruct.assert)(info, InfoString);
                return new ValidatorInfo(configKeys[1].publicKey, info);
            }
        }
        return null;
    }
}
const VOTE_PROGRAM_ID = new PublicKey("Vote111111111111111111111111111111111111111");
/**
 * See https://github.com/solana-labs/solana/blob/8a12ed029cfa38d4a45400916c2463fb82bbec8c/programs/vote_api/src/vote_state.rs#L68-L88
 *
 * @internal
 */ const VoteAccountLayout = _bufferLayout.struct([
    publicKey("nodePubkey"),
    publicKey("authorizedWithdrawer"),
    _bufferLayout.u8("commission"),
    _bufferLayout.nu64(),
    _bufferLayout.seq(_bufferLayout.struct([
        _bufferLayout.nu64("slot"),
        _bufferLayout.u32("confirmationCount")
    ]), _bufferLayout.offset(_bufferLayout.u32(), -8), "votes"),
    _bufferLayout.u8("rootSlotValid"),
    _bufferLayout.nu64("rootSlot"),
    _bufferLayout.nu64(),
    _bufferLayout.seq(_bufferLayout.struct([
        _bufferLayout.nu64("epoch"),
        publicKey("authorizedVoter")
    ]), _bufferLayout.offset(_bufferLayout.u32(), -8), "authorizedVoters"),
    _bufferLayout.struct([
        _bufferLayout.seq(_bufferLayout.struct([
            publicKey("authorizedPubkey"),
            _bufferLayout.nu64("epochOfLastAuthorizedSwitch"),
            _bufferLayout.nu64("targetEpoch")
        ]), 32, "buf"),
        _bufferLayout.nu64("idx"),
        _bufferLayout.u8("isEmpty")
    ], "priorVoters"),
    _bufferLayout.nu64(),
    _bufferLayout.seq(_bufferLayout.struct([
        _bufferLayout.nu64("epoch"),
        _bufferLayout.nu64("credits"),
        _bufferLayout.nu64("prevCredits")
    ]), _bufferLayout.offset(_bufferLayout.u32(), -8), "epochCredits"),
    _bufferLayout.struct([
        _bufferLayout.nu64("slot"),
        _bufferLayout.nu64("timestamp")
    ], "lastTimestamp")
]);
/**
 * VoteAccount class
 */ class VoteAccount {
    /**
   * @internal
   */ constructor(args){
        this.nodePubkey = void 0;
        this.authorizedWithdrawer = void 0;
        this.commission = void 0;
        this.rootSlot = void 0;
        this.votes = void 0;
        this.authorizedVoters = void 0;
        this.priorVoters = void 0;
        this.epochCredits = void 0;
        this.lastTimestamp = void 0;
        this.nodePubkey = args.nodePubkey;
        this.authorizedWithdrawer = args.authorizedWithdrawer;
        this.commission = args.commission;
        this.rootSlot = args.rootSlot;
        this.votes = args.votes;
        this.authorizedVoters = args.authorizedVoters;
        this.priorVoters = args.priorVoters;
        this.epochCredits = args.epochCredits;
        this.lastTimestamp = args.lastTimestamp;
    }
    /**
   * Deserialize VoteAccount from the account data.
   *
   * @param buffer account data
   * @return VoteAccount
   */ static fromAccountData(buffer) {
        const versionOffset = 4;
        const va = VoteAccountLayout.decode(toBuffer(buffer), versionOffset);
        let rootSlot = va.rootSlot;
        if (!va.rootSlotValid) rootSlot = null;
        return new VoteAccount({
            nodePubkey: new PublicKey(va.nodePubkey),
            authorizedWithdrawer: new PublicKey(va.authorizedWithdrawer),
            commission: va.commission,
            votes: va.votes,
            rootSlot,
            authorizedVoters: va.authorizedVoters.map(parseAuthorizedVoter),
            priorVoters: getPriorVoters(va.priorVoters),
            epochCredits: va.epochCredits,
            lastTimestamp: va.lastTimestamp
        });
    }
}
function parseAuthorizedVoter({ authorizedVoter , epoch  }) {
    return {
        epoch,
        authorizedVoter: new PublicKey(authorizedVoter)
    };
}
function parsePriorVoters({ authorizedPubkey , epochOfLastAuthorizedSwitch , targetEpoch  }) {
    return {
        authorizedPubkey: new PublicKey(authorizedPubkey),
        epochOfLastAuthorizedSwitch,
        targetEpoch
    };
}
function getPriorVoters({ buf , idx , isEmpty  }) {
    if (isEmpty) return [];
    return [
        ...buf.slice(idx + 1).map(parsePriorVoters),
        ...buf.slice(0, idx).map(parsePriorVoters)
    ];
}
/**
 * Vote account info
 */ class VoteInit {
    /** [0, 100] */ constructor(nodePubkey, authorizedVoter, authorizedWithdrawer, commission){
        this.nodePubkey = void 0;
        this.authorizedVoter = void 0;
        this.authorizedWithdrawer = void 0;
        this.commission = void 0;
        this.nodePubkey = nodePubkey;
        this.authorizedVoter = authorizedVoter;
        this.authorizedWithdrawer = authorizedWithdrawer;
        this.commission = commission;
    }
}
/**
 * Create vote account transaction params
 */ /**
 * Vote Instruction class
 */ class VoteInstruction {
    /**
   * @internal
   */ constructor(){}
    /**
   * Decode a vote instruction and retrieve the instruction type.
   */ static decodeInstructionType(instruction) {
        this.checkProgramId(instruction.programId);
        const instructionTypeLayout = _bufferLayout.u32("instruction");
        const typeIndex = instructionTypeLayout.decode(instruction.data);
        let type;
        for (const [ixType, layout] of Object.entries(VOTE_INSTRUCTION_LAYOUTS))if (layout.index == typeIndex) {
            type = ixType;
            break;
        }
        if (!type) throw new Error("Instruction type incorrect; not a VoteInstruction");
        return type;
    }
    /**
   * Decode an initialize vote instruction and retrieve the instruction params.
   */ static decodeInitializeAccount(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 4);
        const { voteInit: voteInit1  } = decodeData(VOTE_INSTRUCTION_LAYOUTS.InitializeAccount, instruction.data);
        return {
            votePubkey: instruction.keys[0].pubkey,
            nodePubkey: instruction.keys[3].pubkey,
            voteInit: new VoteInit(new PublicKey(voteInit1.nodePubkey), new PublicKey(voteInit1.authorizedVoter), new PublicKey(voteInit1.authorizedWithdrawer), voteInit1.commission)
        };
    }
    /**
   * Decode an authorize instruction and retrieve the instruction params.
   */ static decodeAuthorize(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { newAuthorized , voteAuthorizationType  } = decodeData(VOTE_INSTRUCTION_LAYOUTS.Authorize, instruction.data);
        return {
            votePubkey: instruction.keys[0].pubkey,
            authorizedPubkey: instruction.keys[2].pubkey,
            newAuthorizedPubkey: new PublicKey(newAuthorized),
            voteAuthorizationType: {
                index: voteAuthorizationType
            }
        };
    }
    /**
   * Decode a withdraw instruction and retrieve the instruction params.
   */ static decodeWithdraw(instruction) {
        this.checkProgramId(instruction.programId);
        this.checkKeyLength(instruction.keys, 3);
        const { lamports  } = decodeData(VOTE_INSTRUCTION_LAYOUTS.Withdraw, instruction.data);
        return {
            votePubkey: instruction.keys[0].pubkey,
            authorizedWithdrawerPubkey: instruction.keys[2].pubkey,
            lamports,
            toPubkey: instruction.keys[1].pubkey
        };
    }
    /**
   * @internal
   */ static checkProgramId(programId) {
        if (!programId.equals(VoteProgram.programId)) throw new Error("invalid instruction; programId is not VoteProgram");
    }
    /**
   * @internal
   */ static checkKeyLength(keys, expectedLength) {
        if (keys.length < expectedLength) throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
}
/**
 * An enumeration of valid VoteInstructionType's
 */ const VOTE_INSTRUCTION_LAYOUTS = Object.freeze({
    InitializeAccount: {
        index: 0,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            voteInit()
        ])
    },
    Authorize: {
        index: 1,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            publicKey("newAuthorized"),
            _bufferLayout.u32("voteAuthorizationType")
        ])
    },
    Withdraw: {
        index: 3,
        layout: _bufferLayout.struct([
            _bufferLayout.u32("instruction"),
            _bufferLayout.ns64("lamports")
        ])
    }
});
/**
 * VoteAuthorize type
 */ /**
 * An enumeration of valid VoteAuthorization layouts.
 */ const VoteAuthorizationLayout = Object.freeze({
    Voter: {
        index: 0
    },
    Withdrawer: {
        index: 1
    }
});
/**
 * Factory class for transactions to interact with the Vote program
 */ class VoteProgram {
    /**
   * @internal
   */ constructor(){}
    /**
   * Public key that identifies the Vote program
   */ /**
   * Generate an Initialize instruction.
   */ static initializeAccount(params) {
        const { votePubkey , nodePubkey , voteInit: voteInit2  } = params;
        const type = VOTE_INSTRUCTION_LAYOUTS.InitializeAccount;
        const data = encodeData(type, {
            voteInit: {
                nodePubkey: toBuffer(voteInit2.nodePubkey.toBuffer()),
                authorizedVoter: toBuffer(voteInit2.authorizedVoter.toBuffer()),
                authorizedWithdrawer: toBuffer(voteInit2.authorizedWithdrawer.toBuffer()),
                commission: voteInit2.commission
            }
        });
        const instructionData = {
            keys: [
                {
                    pubkey: votePubkey,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: SYSVAR_RENT_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: SYSVAR_CLOCK_PUBKEY,
                    isSigner: false,
                    isWritable: false
                },
                {
                    pubkey: nodePubkey,
                    isSigner: true,
                    isWritable: false
                }
            ],
            programId: this.programId,
            data
        };
        return new TransactionInstruction(instructionData);
    }
    /**
   * Generate a transaction that creates a new Vote account.
   */ static createAccount(params) {
        const transaction = new Transaction();
        transaction.add(SystemProgram.createAccount({
            fromPubkey: params.fromPubkey,
            newAccountPubkey: params.votePubkey,
            lamports: params.lamports,
            space: this.space,
            programId: this.programId
        }));
        return transaction.add(this.initializeAccount({
            votePubkey: params.votePubkey,
            nodePubkey: params.voteInit.nodePubkey,
            voteInit: params.voteInit
        }));
    }
    /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account.
   */ static authorize(params) {
        const { votePubkey , authorizedPubkey , newAuthorizedPubkey , voteAuthorizationType  } = params;
        const type = VOTE_INSTRUCTION_LAYOUTS.Authorize;
        const data = encodeData(type, {
            newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
            voteAuthorizationType: voteAuthorizationType.index
        });
        const keys = [
            {
                pubkey: votePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: SYSVAR_CLOCK_PUBKEY,
                isSigner: false,
                isWritable: false
            },
            {
                pubkey: authorizedPubkey,
                isSigner: true,
                isWritable: false
            }
        ];
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
    /**
   * Generate a transaction to withdraw from a Vote account.
   */ static withdraw(params) {
        const { votePubkey , authorizedWithdrawerPubkey , lamports , toPubkey  } = params;
        const type = VOTE_INSTRUCTION_LAYOUTS.Withdraw;
        const data = encodeData(type, {
            lamports
        });
        const keys = [
            {
                pubkey: votePubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: toPubkey,
                isSigner: false,
                isWritable: true
            },
            {
                pubkey: authorizedWithdrawerPubkey,
                isSigner: true,
                isWritable: false
            }
        ];
        return new Transaction().add({
            keys,
            programId: this.programId,
            data
        });
    }
}
VoteProgram.programId = new PublicKey("Vote111111111111111111111111111111111111111");
VoteProgram.space = 3731;
/**
 * Send and confirm a raw transaction
 *
 * If `commitment` option is not specified, defaults to 'max' commitment.
 *
 * @param {Connection} connection
 * @param {Buffer} rawTransaction
 * @param {BlockheightBasedTransactionConfirmationStrategy} confirmationStrategy
 * @param {ConfirmOptions} [options]
 * @returns {Promise<TransactionSignature>}
 */ /**
 * @deprecated Calling `sendAndConfirmRawTransaction()` without a `confirmationStrategy`
 * is no longer supported and will be removed in a future version.
 */ // eslint-disable-next-line no-redeclare
// eslint-disable-next-line no-redeclare
async function sendAndConfirmRawTransaction(connection, rawTransaction, confirmationStrategyOrConfirmOptions, maybeConfirmOptions) {
    let confirmationStrategy;
    let options;
    if (confirmationStrategyOrConfirmOptions && Object.prototype.hasOwnProperty.call(confirmationStrategyOrConfirmOptions, "lastValidBlockHeight")) {
        confirmationStrategy = confirmationStrategyOrConfirmOptions;
        options = maybeConfirmOptions;
    } else options = confirmationStrategyOrConfirmOptions;
    const sendOptions = options && {
        skipPreflight: options.skipPreflight,
        preflightCommitment: options.preflightCommitment || options.commitment
    };
    const signature = await connection.sendRawTransaction(rawTransaction, sendOptions);
    const commitment = options && options.commitment;
    const confirmationPromise = confirmationStrategy ? connection.confirmTransaction(confirmationStrategy, commitment) : connection.confirmTransaction(signature, commitment);
    const status = (await confirmationPromise).value;
    if (status.err) throw new Error(`Raw transaction ${signature} failed (${JSON.stringify(status)})`);
    return signature;
}
const endpoint = {
    http: {
        devnet: "http://api.devnet.solana.com",
        testnet: "http://api.testnet.solana.com",
        "mainnet-beta": "http://api.mainnet-beta.solana.com/"
    },
    https: {
        devnet: "https://api.devnet.solana.com",
        testnet: "https://api.testnet.solana.com",
        "mainnet-beta": "https://api.mainnet-beta.solana.com/"
    }
};
/**
 * Retrieves the RPC API URL for the specified cluster
 */ function clusterApiUrl(cluster, tls) {
    const key = tls === false ? "http" : "https";
    if (!cluster) return endpoint[key]["devnet"];
    const url = endpoint[key][cluster];
    if (!url) throw new Error(`Unknown ${key} cluster: ${cluster}`);
    return url;
}
/**
 * There are 1-billion lamports in one SOL
 */ const LAMPORTS_PER_SOL = 1000000000;

},{"tweetnacl":"3J9rh","buffer":"4V252","bn.js":"VopIn","bs58":"4ji3p","borsh":"4JCmN","@solana/buffer-layout":"jD9A8","bigint-buffer":"b5EGn","superstruct":"kxTXl","rpc-websockets":"lJhzp","jayson/lib/client/browser":"ckwy4","secp256k1":"eY5po","js-sha3":"7x0z6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4V252":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("base64-js");
const ieee754 = require("ieee754");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i1;
    if (dir) {
        let foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength1 && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength2, this.length);
    let val = this[offset + --byteLength2];
    let mul = 1;
    while(byteLength2 > 0 && (mul *= 0x100))val += this[offset + --byteLength2] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength3 && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength4, noAssert) {
    offset = offset >>> 0;
    byteLength4 = byteLength4 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength4, this.length);
    let i = byteLength4;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength4);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 65536 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength5, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength5 = byteLength5 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength5) - 1;
        checkInt(this, value, offset, byteLength5, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength5 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength5;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength6, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength6 = byteLength6 >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength6) - 1;
        checkInt(this, value, offset, byteLength6, maxBytes, 0);
    }
    let i = byteLength6 - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength6;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength7, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength7 - 1);
        checkInt(this, value, offset, byteLength7, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength7 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength7;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength8, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength8 - 1);
        checkInt(this, value, offset, byteLength8, limit - 1, -limit);
    }
    let i = byteLength8 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength8;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength9) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength9] === undefined) boundsError(offset, buf.length - (byteLength9 + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength10) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength10 > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength10 + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength10 + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength10 + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength10);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"base64-js":"eIiSV","ieee754":"cO95r"}]},["1c5yZ"], null, "parcelRequirea48b")

//# sourceMappingURL=esm.80373705.js.map
