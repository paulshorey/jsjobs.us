/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch(e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/ 	
/******/ 	function hotDisposeChunk(chunkId) { //eslint-disable-line no-unused-vars
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "8d3bd651e8e18b9a5c6a"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/***/ (function(module, exports) {

module.exports = {"client":{"js":"http://localhost:3001/static/js/bundle.js"}}

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");

	if(unacceptedModules.length > 0) {
		log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if(!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if(typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if(numberIds)
			log("info", "[HMR] Consider using the NamedModulesPlugin for module names.");
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog = (logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if(shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if(shouldLog(level)) {
		if(level === "info") {
			console.log(msg);
		} else if(level === "warning") {
			console.warn(msg);
		} else if(level === "error") {
			console.error(msg);
		}
	}
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?300":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if(true) {
	var hotPollInterval = +(__resourceQuery.substr(1)) || (10 * 60 * 1000);
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if(module.hot.status() === "idle") {
			module.hot.check(true).then(function(updatedModules) {
				if(!updatedModules) {
					if(fromUpdate) log("info", "[HMR] Update applied.");
					return;
				}
				__webpack_require__("./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
				checkForUpdate(true);
			}).catch(function(err) {
				var status = module.hot.status();
				if(["abort", "fail"].indexOf(status) >= 0) {
					log("warning", "[HMR] Cannot apply update.");
					log("warning", "[HMR] " + err.stack || err.message);
					log("warning", "[HMR] You need to restart the application!");
				} else {
					log("warning", "[HMR] Update failed: " + err.stack || err.message);
				}
			});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}

/* WEBPACK VAR INJECTION */}.call(exports, "?300"))

/***/ }),

/***/ "./src/Document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after__ = __webpack_require__("@jaredpalmer/after");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_error_PrimaryErrorBoundary_js__ = __webpack_require__("./src/components/error/PrimaryErrorBoundary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Document_styled_js__ = __webpack_require__("./src/Document.styled.js");







var _jsxFileName = "/www/jsjobs/app/src/Document.js";
// ./src/Document.js






var Document = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Document, _React$Component);

	function Document() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Document);

		return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Document.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Document)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Document, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    helmet = _props.helmet,
			    assets = _props.assets,
			    data = _props.data,
			    styleTags = _props.styleTags;
			// get attributes from React Helmet

			var htmlAttrs = helmet.htmlAttributes.toComponent();
			var bodyAttrs = helmet.bodyAttributes.toComponent();

			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				"html",
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, htmlAttrs, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 28
					}
				}),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"head",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 29
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge", __source: {
							fileName: _jsxFileName,
							lineNumber: 30
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { charSet: "utf-8", __source: {
							fileName: _jsxFileName,
							lineNumber: 31
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"title",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 32
							}
						},
						"After.js | PS"
					),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
							fileName: _jsxFileName,
							lineNumber: 33
						}
					}),
					helmet.title.toComponent(),
					helmet.meta.toComponent(),
					helmet.link.toComponent(),
					assets.client.css && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("link", { rel: "stylesheet", href: assets.client.css, __source: {
							fileName: _jsxFileName,
							lineNumber: 37
						}
					}),
					styleTags,
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("link", { rel: "stylesheet", type: "text/css", href: "/assets/icomoon/style.css", __source: {
							fileName: _jsxFileName,
							lineNumber: 39
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { httpEquiv: "cache-control", content: "max-age=0", __source: {
							fileName: _jsxFileName,
							lineNumber: 41
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { httpEquiv: "cache-control", content: "no-cache", __source: {
							fileName: _jsxFileName,
							lineNumber: 42
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { httpEquiv: "expires", content: "0", __source: {
							fileName: _jsxFileName,
							lineNumber: 43
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { httpEquiv: "expires", content: "Tue, 01 Jan 1980 1:00:00 GMT", __source: {
							fileName: _jsxFileName,
							lineNumber: 44
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { httpEquiv: "pragma", content: "no-cache", __source: {
							fileName: _jsxFileName,
							lineNumber: 45
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"body",
					__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, bodyAttrs, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 47
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_10__components_error_PrimaryErrorBoundary_js__["a" /* default */],
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 48
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after__["AfterRoot"], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 49
							}
						}),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after__["AfterData"], { data: data, __source: {
								fileName: _jsxFileName,
								lineNumber: 51
							}
						}),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("script", { type: "text/javascript", src: assets.client.js, defer: true, crossOrigin: "anonymous", __source: {
								fileName: _jsxFileName,
								lineNumber: 52
							}
						})
					)
				)
			);
		}
	}], [{
		key: "getInitialProps",

		// without styled-components:
		// static getInitialProps({ assets, data, renderPage }) {
		//   const page = renderPage();
		//   return { assets, data, ...page };
		// }
		value: function getInitialProps(_ref) {
			var assets = _ref.assets,
			    data = _ref.data,
			    renderPage = _ref.renderPage;

			var sheet = new __WEBPACK_IMPORTED_MODULE_9_styled_components__["ServerStyleSheet"]();
			var page = renderPage(function (App) {
				return function (props) {
					return sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(App, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 16
						}
					})));
				};
			});
			var styleTags = sheet.getStyleElement();
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({ assets: assets, data: data }, page, { styleTags: styleTags });
		}
	}]);

	return Document;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Document);

/***/ }),

/***/ "./src/Document.styled.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\n\t/**************************************************\n\t\treset\n\t**************************************************/\n\thtml, body, #app, #pages {\n\t\theight:100%;\n\t\twidth:100%;\n\t}\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n        color:navy;      \n        background:lightblue;\n\t}\n\tpre {\n\t\tmargin:0;\n\t}\n\t::-webkit-input-placeholder {\n\t\t/* Chrome/Opera/Safari */\n\t\tcolor: #999;\n\t}\n\t::-moz-placeholder {\n\t\t/* Firefox 19+ */\n\t\tcolor: #999;\n\t}\n\t:-ms-input-placeholder {\n\t\t/* IE 10+ */\n\t\tcolor: #999;\n\t}\n\t:-moz-placeholder {\n\t\t/* Firefox 18- */\n\t\tcolor: #999;\n\t}\n\tul, li {list-style:none;padding:0;margin:0;text-indent: 0;}\n\n\t/**************************************************\n\t\tresponsive text\n\t**************************************************/\n\tbody {\n\t\tmargin: 0;\n\t}\n\thtml {\n\t\tfont-size:14px;\n\t}\n\t@media (max-width:950px), (max-height:750px) {\n\t\thtml {\n\t\t\tfont-size:14px;\n\t\t}\n\t}\n\t@media (max-width:750px), (max-height:650px) {\n\t\thtml {\n\t\t\tfont-size:14px;\n\t\t}\n\t}\n\t@media (max-width:380px), (max-height:380px) {\n\t\thtml {\n\t\t\tfont-size:12px;\n\t\t}\n\t}\n\t@media (max-width:330px), (max-height:330px) {\n\t\thtml {\n\t\t\tfont-size:10px;\n\t\t}\n\t}\n\th1,h2,h3,h4,h5,h6,p {\n\t\tmargin:0;\n\t\tpadding:0;\n\t\tline-height:1.5rem;\n\t}\n\tp {\n\t\tmargin:0.75rem 0;\n\t\tfont-size:1rem;\n\t}\n\th1 {\n\t\tfont-size:1.9rem;\n\t}\n\th2 {\n\t\tfont-size:1.75rem;\n\t}\n\th3 {\n\t\tfont-size:1.6rem;\n\t}\n\th4 {\n\t\tfont-size:1.45rem;\n\t}\n\th5 {\n\t\tfont-size:1.3rem;\n\t}\n\th6 {\n\t\tfont-size:1.15rem;\n\t}\n\n\t/**************************************************\n\t\tstyle\n\t**************************************************/\n\t* {\n\t\tfont-family: ", " !important;\n\t\tvertical-align:middle; /* hope this doesn't mess anything up - but in my experience, having vertical-align middle was always more useful than not - PS */\n\t}\n\tbody {\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t}\n\ta {\n\t\tcolor:", ";\n\t\ttext-decoration: none;\n\t}\n"], ["\n\n\t/**************************************************\n\t\treset\n\t**************************************************/\n\thtml, body, #app, #pages {\n\t\theight:100%;\n\t\twidth:100%;\n\t}\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n        color:navy;      \n        background:lightblue;\n\t}\n\tpre {\n\t\tmargin:0;\n\t}\n\t::-webkit-input-placeholder {\n\t\t/* Chrome/Opera/Safari */\n\t\tcolor: #999;\n\t}\n\t::-moz-placeholder {\n\t\t/* Firefox 19+ */\n\t\tcolor: #999;\n\t}\n\t:-ms-input-placeholder {\n\t\t/* IE 10+ */\n\t\tcolor: #999;\n\t}\n\t:-moz-placeholder {\n\t\t/* Firefox 18- */\n\t\tcolor: #999;\n\t}\n\tul, li {list-style:none;padding:0;margin:0;text-indent: 0;}\n\n\t/**************************************************\n\t\tresponsive text\n\t**************************************************/\n\tbody {\n\t\tmargin: 0;\n\t}\n\thtml {\n\t\tfont-size:14px;\n\t}\n\t@media (max-width:950px), (max-height:750px) {\n\t\thtml {\n\t\t\tfont-size:14px;\n\t\t}\n\t}\n\t@media (max-width:750px), (max-height:650px) {\n\t\thtml {\n\t\t\tfont-size:14px;\n\t\t}\n\t}\n\t@media (max-width:380px), (max-height:380px) {\n\t\thtml {\n\t\t\tfont-size:12px;\n\t\t}\n\t}\n\t@media (max-width:330px), (max-height:330px) {\n\t\thtml {\n\t\t\tfont-size:10px;\n\t\t}\n\t}\n\th1,h2,h3,h4,h5,h6,p {\n\t\tmargin:0;\n\t\tpadding:0;\n\t\tline-height:1.5rem;\n\t}\n\tp {\n\t\tmargin:0.75rem 0;\n\t\tfont-size:1rem;\n\t}\n\th1 {\n\t\tfont-size:1.9rem;\n\t}\n\th2 {\n\t\tfont-size:1.75rem;\n\t}\n\th3 {\n\t\tfont-size:1.6rem;\n\t}\n\th4 {\n\t\tfont-size:1.45rem;\n\t}\n\th5 {\n\t\tfont-size:1.3rem;\n\t}\n\th6 {\n\t\tfont-size:1.15rem;\n\t}\n\n\t/**************************************************\n\t\tstyle\n\t**************************************************/\n\t* {\n\t\tfont-family: ", " !important;\n\t\tvertical-align:middle; /* hope this doesn't mess anything up - but in my experience, having vertical-align middle was always more useful than not - PS */\n\t}\n\tbody {\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t}\n\ta {\n\t\tcolor:", ";\n\t\ttext-decoration: none;\n\t}\n"]);




/**************************************************
THIS LOADS INLINE IN HEAD
Pro: It loads instantly before page is loaded - so, put any background colors, fonts, sizes, and noticeable styles here
Con: THIS BLOCKS ALL HTML - SO BE VERY BRIEF - PUT EVERYTHING POSSIBLE INTO /src/client.css
**************************************************/

Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["injectGlobal"])(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].fontFamily, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_bg1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_text1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_link1);

/***/ }),

/***/ "./src/Document.theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	fontFamily: "sans-serif",
	color_jsYellow: "#f6da1d",
	/* #1 - white background */
	color_bg1: "#fff",
	color_title1: "#111",
	color_text1: "rgb(173, 173, 173)",
	color_link1: "rgb(100,175,200)",
	color_border1: "rgb(188, 188, 188)",
	color_textGreen1: "rgb(57, 209, 3)",
	color_textRed1: "rgb(252, 101, 75)",
	/* #2 - grey background */
	color_bg2: "#ccc",
	color_title2: "#111",
	color_text2: "rgb(173, 173, 173)",
	color_link2: "rgb(100,175,200)",
	color_border2: "#999",
	color_textGreen2: "rgb(75,190,0)",
	color_textRed2: "rgb(252, 101, 75)",
	/* #3 - black background */
	color_bg3: "#111",
	color_title3: "rgb(173, 173, 173)",
	color_text3: "rgb(173, 173, 173)",
	color_link3: "rgb(100,175,200)",
	color_border3: "rgb(188, 188, 188)",
	color_textGreen3: "rgb(57, 209, 3)",
	color_textRed3: "rgb(252, 101, 75)"
});

/***/ }),

/***/ "./src/components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_Header_js__ = __webpack_require__("./src/components/header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_persist__ = __webpack_require__("redux-persist");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_persist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_redux_persist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_reducers__ = __webpack_require__("./src/data/reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_redux_logger__ = __webpack_require__("redux-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_actions__ = __webpack_require__("./src/data/actions/index.js");








var _jsxFileName = "/www/jsjobs/app/src/components/Layout.js";
/*
	DOCS:
	* this is 3 components: 1) the actual <Layout /> 2) <ConnectedLayout /> with Redux data 3) <LayoutExport /> which connects the Redux store and provider
	* this seems complicated, and is, but actually relieves complications later on in the app
	* this can possibly be divided into separate files, but that would not bring any additional benefits, because these 3 components are divided and exported as one because of Redux data stucture concerns, not modular architecture concerns
	* UNFORTUNATELY, unable to include Redux store provider in a more global file like App.js or Document.js (there is no App.js, and Document.js is weird SSR After.js/Next.js code)
	* UNFORTUNATELY ALSO, unable to include any Redux in the "src/routes/*.js" components/pages
*/


/* redux initialize */





/* redux connect */


/* redux store */
var logger = Object(__WEBPACK_IMPORTED_MODULE_14_redux_logger__["createLogger"])({
	collapsed: true
});
var store = Object(__WEBPACK_IMPORTED_MODULE_10_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_13__data_reducers__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_10_redux__["applyMiddleware"])(logger));
// const store = createStore(reducer, compose(applyMiddleware(logger), autoRehydrate()));
/*
	Original layout template
*/

var Layout = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Layout, _React$Component);

	function Layout() {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Layout);

		return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Layout.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Layout)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Layout, [{
		key: "render",
		value: function render() {
			if (this.props.area_key !== undefined) {
				this.props.dispatch(__WEBPACK_IMPORTED_MODULE_15__data_actions__["a" /* my_area */](this.props.area_key));
			}
			return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
				"div",
				{ className: "Layout", style: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ minHeight: "100vh" }, this.props.style || {}), __source: {
						fileName: _jsxFileName,
						lineNumber: 35
					}
				},
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__header_Header_js__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 36
					}
				}),
				this.props.children || null
			);
		}
	}]);

	return Layout;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);
/*
	Connect redux data
*/


var mapStateToProps = function mapStateToProps(data, ownProps) {
	/*
 	do not return {data.my} properties as props --- because {data.my.area_key} it is updated in this same component's "render" function, which is, yes, dangerous, so do not remove this comment
 */
	return {};
};
var ConnectedLayout = Object(__WEBPACK_IMPORTED_MODULE_12_react_redux__["connect"])(mapStateToProps)(Layout);
/*
	Layout as the page component will receive it
*/

var LayoutExport = function (_React$Component2) {
	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(LayoutExport, _React$Component2);

	function LayoutExport() {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, LayoutExport);

		return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (LayoutExport.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(LayoutExport)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(LayoutExport, [{
		key: "render",
		value: function render() {
			// if (this.props.purge) {
			// 	persistStore(store)
			// 		.purge()
			// 		.then(function(what) {
			// 			console.info("PURGE", what);
			// 		})
			// 		.catch(function(what) {
			// 			console.error("PURGE", what);
			// 		});
			// } else {
			// 	persistStore(store);
			// }
			var _props = this.props,
			    children = _props.children,
			    props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ["children"]);

			return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_12_react_redux__["Provider"],
				{ store: store, __source: {
						fileName: _jsxFileName,
						lineNumber: 71
					}
				},
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
					ConnectedLayout,
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 72
						}
					}),
					children
				)
			);
		}
	}]);

	return LayoutExport;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LayoutExport);

/***/ }),

/***/ "./src/components/error/PrimaryErrorBoundary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PrimaryErrorBoundary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);






var _jsxFileName = "/www/jsjobs/app/src/components/error/PrimaryErrorBoundary.js";


var PrimaryErrorBoundary = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(PrimaryErrorBoundary, _Component);

	function PrimaryErrorBoundary() {
		var _ref;

		var _temp, _this, _ret;

		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, PrimaryErrorBoundary);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = PrimaryErrorBoundary.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PrimaryErrorBoundary)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			hasError: false
		}, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(PrimaryErrorBoundary, [{
		key: "componentDidCatch",
		value: function componentDidCatch(error, info) {
			this.setState(function (state) {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state, { hasError: true });
			});
		}
	}, {
		key: "render",
		value: function render() {
			if (this.state.hasError) {
				return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{ style: { margin: 20 }, __source: {
							fileName: _jsxFileName,
							lineNumber: 24
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 25
						}
					}),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"h3",
						{ style: { color: "red" }, __source: {
								fileName: _jsxFileName,
								lineNumber: 26
							}
						},
						"Sorry, something went wrong."
					)
				);
			} else {
				return this.props.children;
			}
		}
	}]);

	return PrimaryErrorBoundary;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PrimaryErrorBoundary);

/***/ }),

/***/ "./src/components/header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styled_Header_js__ = __webpack_require__("./src/components/header/styled/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_actions__ = __webpack_require__("./src/data/actions/index.js");






var _jsxFileName = "/www/jsjobs/app/src/components/header/Header.js";



/* redux */



var Header = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Header, _React$Component);

	function Header() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Header);

		return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Header.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Header)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Header, [{
		key: "render",

		// componentWillMount() {
		// 	this.unlisten = this.props.history.listen((location, action) => {
		// 		const area_key_arr = location.split("/");
		// 		console.log("history change array ", area_key_arr);
		// 		const area_key = area_key_arr[area_key_arr.length - 1] || "";
		// 		console.log("history change key ", area_key);
		// 		this.props.dispatch(actions.my_area(area_key));
		// 	});
		// }
		// componentWillUnmount() {
		// 	this.unlisten();
		// }

		value: function render() {
			var RightIcons = [];
			if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.props.items_my).length && this.props.items_status === "new") {
				// RightIcons.push(
				// 	<Link to="/my" key="my">
				// 		<span className="caption">
				// 			<span className="ext only-wide">MY</span>
				// 			<span style={{ display: "inline-block", width: "0.1rem" }} />
				// 			<span>JOBS</span>
				// 		</span>
				// 		<span className="icon-user-check" />
				// 	</Link>
				// );
				RightIcons.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Link"],
					{ to: "/my", key: "my", __source: {
							fileName: _jsxFileName,
							lineNumber: 36
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"span",
						{ className: "caption", __source: {
								fileName: _jsxFileName,
								lineNumber: 37
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
							"span",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 38
								}
							},
							"SAVE"
						)
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-user-check", __source: {
							fileName: _jsxFileName,
							lineNumber: 40
						}
					})
				));
			}
			// RightIcons.push(
			// 	<Link to="/about">
			// 		<span className="caption">Etc</span>
			// 		<span className="icon-delete" />
			// 	</Link>
			// );
			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__styled_Header_js__["a" /* Header */],
				{ className: "row", __source: {
						fileName: _jsxFileName,
						lineNumber: 51
					}
				},
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{ className: "row_left", __source: {
							fileName: _jsxFileName,
							lineNumber: 52
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Link"],
						{ to: "/", __source: {
								fileName: _jsxFileName,
								lineNumber: 53
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-top-logo", __source: {
								fileName: _jsxFileName,
								lineNumber: 54
							}
						}),
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
							"span",
							{ className: "caption", __source: {
									fileName: _jsxFileName,
									lineNumber: 55
								}
							},
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 56
									}
								},
								"JOBS"
							),
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								"span",
								{ className: "ext only-wide", __source: {
										fileName: _jsxFileName,
										lineNumber: 57
									}
								},
								".US"
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{ className: "row_right", __source: {
							fileName: _jsxFileName,
							lineNumber: 76
						}
					},
					RightIcons
				)
			);
		}
	}]);

	return Header;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/*
		Connect redux data
	*/


var mapStateToProps = function mapStateToProps(data, ownProps) {
	return {
		items_my: data.my.items,
		items_status: data.my.items_status || "new"
	};
};
var ConnectedHeader = Object(__WEBPACK_IMPORTED_MODULE_9_react_redux__["connect"])(mapStateToProps)(Header);

/*
		Components
	*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedHeader);

/***/ }),

/***/ "./src/components/header/styled/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t&.row {\n\t\tposition: relative;\n\t\tpadding: 0.75rem;\n\t\tbackground: #111;\n\t\tdisplay: flex;\n\t\talign-items: baseline;\n\t\ta {\n\t\t\tcolor: ", ";\n\t\t}\n\t\t@media (max-width: 600px) {\n\t\t\t.only-wide {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 1080px) {\n\t\t\t.only-fullsize {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t}\n\t\t[class^=\"icon-\"] {\n\t\t\tfont-size: 2.1rem;\n\t\t\tline-height: 1.25rem;\n\t\t\t&.icon-ui-more {\n\t\t\t\tfont-size: 2.2rem;\n\t\t\t}\n\t\t}\n\t\t[class^=\"row_\"] {\n\t\t\tfont-size: 1.25rem;\n\t\t\tcolor: white;\n\t\t\ttext-align: center;\n\t\t\t/* vertical-align: bottom; */\n\t\t\t/* * {\n\t\t\t\tvertical-align: bottom;\n\t\t\t} */\n\t\t\t.caption {\n\t\t\t\tcolor: #fff;\n\t\t\t\tfont-size: 1.25rem;\n\t\t\t\tline-height: 1.25rem;\n\t\t\t\tpadding: 0.75rem 0.33rem 0;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\t.ext {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.row_left {\n\t\t\tflex-grow: 1;\n\t\t\ttext-align: left;\n\t\t\tcolor: ", ";\n\t\t}\n\t\t.row_center {\n\t\t\tflex-grow: 1;\n\t\t\twhite-space: nowrap;\n\t\t\t.caption {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t\tspan.icon-select {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t.row_right {\n\t\t\tflex-grow: 1;\n\t\t\tpadding-left: 0.75rem;\n\t\t\ttext-align: right;\n\t\t\t.icon-ui-thumbs-up {\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tline-height: 1rem;\n\t\t\t\tmargin-top: 0.4rem;\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\t&.row {\n\t\tposition: relative;\n\t\tpadding: 0.75rem;\n\t\tbackground: #111;\n\t\tdisplay: flex;\n\t\talign-items: baseline;\n\t\ta {\n\t\t\tcolor: ", ";\n\t\t}\n\t\t@media (max-width: 600px) {\n\t\t\t.only-wide {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 1080px) {\n\t\t\t.only-fullsize {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t}\n\t\t[class^=\"icon-\"] {\n\t\t\tfont-size: 2.1rem;\n\t\t\tline-height: 1.25rem;\n\t\t\t&.icon-ui-more {\n\t\t\t\tfont-size: 2.2rem;\n\t\t\t}\n\t\t}\n\t\t[class^=\"row_\"] {\n\t\t\tfont-size: 1.25rem;\n\t\t\tcolor: white;\n\t\t\ttext-align: center;\n\t\t\t/* vertical-align: bottom; */\n\t\t\t/* * {\n\t\t\t\tvertical-align: bottom;\n\t\t\t} */\n\t\t\t.caption {\n\t\t\t\tcolor: #fff;\n\t\t\t\tfont-size: 1.25rem;\n\t\t\t\tline-height: 1.25rem;\n\t\t\t\tpadding: 0.75rem 0.33rem 0;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\t.ext {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.row_left {\n\t\t\tflex-grow: 1;\n\t\t\ttext-align: left;\n\t\t\tcolor: ", ";\n\t\t}\n\t\t.row_center {\n\t\t\tflex-grow: 1;\n\t\t\twhite-space: nowrap;\n\t\t\t.caption {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t\tspan.icon-select {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t.row_right {\n\t\t\tflex-grow: 1;\n\t\t\tpadding-left: 0.75rem;\n\t\t\ttext-align: right;\n\t\t\t.icon-ui-thumbs-up {\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tline-height: 1rem;\n\t\t\t\tmargin-top: 0.4rem;\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\t\t}\n\t}\n"]);




var Header = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_jsYellow, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_jsYellow, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_text1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_jsYellow);

/***/ }),

/***/ "./src/components/search/Filters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Filters_js__ = __webpack_require__("./src/components/search/styled/Filters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_actions__ = __webpack_require__("./src/data/actions/index.js");





var _jsxFileName = "/www/jsjobs/app/src/components/search/Filters.js";
/*jshint esversion: 6 */



/* redux */


/* 
	Component 
*/

var Filters = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Filters, _Component);

	function Filters() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Filters);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Filters.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Filters)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Filters, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var filters = this.props.area.filters;
			// filter the filters
			var Filters = [];

			var _loop = function _loop(fil) {
				var filter = filters[fil];
				// const FilterMultipliers = [];
				// const FilterOperator = filter.multiplier > 0 ? <span className="icon-plus" /> : <span className="icon-minus" />;
				// console.log("fil", fil, FilterOperator);
				// let m = 0;
				// while (m < filter.multiplier) {
				// 	FilterMultipliers.push(<b key={"op" + m}>{FilterOperator}</b>);
				// 	m++;
				// }
				// filter.multiplier = parseInt(filter.multiplier);
				Filters.push(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ key: fil, className: "filter" + (filter.multiplier > 0 ? " plus" : " minus"), __source: {
							fileName: _jsxFileName,
							lineNumber: 28
						}
					},
					filter.multiplier !== 0 ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 30
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"span",
							{ className: "value", __source: {
									fileName: _jsxFileName,
									lineNumber: 31
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"i",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 32
									}
								},
								"\""
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"b",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 33
									}
								},
								filter.value.replace(/\\\\/g, "\\").replace(/\\\\/g, "").replace(/\|/g, " | ")
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"i",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 39
									}
								},
								"\""
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"span",
							{ className: "multiplier_text", __source: {
									fileName: _jsxFileName,
									lineNumber: 41
								}
							},
							filter.multiplier > 0 ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 42
								}
							}) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 42
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"b",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 43
									}
								},
								Math.abs(filter.multiplier)
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
							className: "delete icon-delete",
							onClick: function onClick() {
								_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_9__data_actions__["c" /* my_filter_remove */](filter, _this2.props.area_key));
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 45
							}
						})
					) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{ className: "value example", __source: {
								fileName: _jsxFileName,
								lineNumber: 53
							}
						},
						filter.value
					)
				));
			};

			for (var fil in filters) {
				_loop(fil);
			}
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_Filters_js__["a" /* Filters */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 59
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ className: "filters", __source: {
							fileName: _jsxFileName,
							lineNumber: 60
						}
					},
					Filters
				)
			);
		}
	}]);

	return Filters;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

var mapStateToProps = function mapStateToProps(data, ownProps) {
	var data_area = data.areas[ownProps.area_key];
	return {
		area: {
			filters: data.my.filters.length ? data.my.filters : []
		}
	};
};
var ConnectedFilters = Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__["connect"])(mapStateToProps)(Filters);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedFilters);

/***/ }),

/***/ "./src/components/search/Links.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Links_js__ = __webpack_require__("./src/components/search/styled/Links.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_actions__ = __webpack_require__("./src/data/actions/index.js");






var _jsxFileName = "/www/jsjobs/app/src/components/search/Links.js";




/* redux */



/* 
	Component 
*/

var AreaLinks = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(AreaLinks, _React$Component);

	function AreaLinks() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, AreaLinks);

		return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AreaLinks.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(AreaLinks)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(AreaLinks, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var areas = this.props.areas; // from Redux connect
			var Links = [];

			var _loop = function _loop(key) {
				var area = areas[key];
				var area_key_arr = area.route.split("/");
				var area_key = area_key_arr[area_key_arr.length - 1] || "";
				Links.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
					{
						className: "option " + (_this2.props.area_key === area_key ? " selected" : ""),
						to: area.route,
						key: area.route,
						onClick: function onClick(e) {
							if (area_key === _this2.props.area_key) {
								e.preventDefault();
							}
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 21
						}
					},
					area.label
				));
			};

			for (var key in areas) {
				_loop(key);
			}
			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_Links_js__["a" /* AreaLinks */],
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
					innerRef: function innerRef(el) {
						_this2.AreaLinks = el;
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 36
					}
				}),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
					className: "overlay",
					ref: "overlay",
					onClick: function onClick(e) {
						_this2.AreaLinks.classList.toggle("active");
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 42
					}
				}),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{
						className: "content",
						ref: "content",
						onClick: function onClick(e) {
							_this2.AreaLinks.classList.remove("active");
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 49
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"div",
						{
							className: "dropdown",
							onClick: function onClick(e) {
								e.stopPropagation();
								_this2.AreaLinks.classList.toggle("active");
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 56
							}
						},
						Links
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"span",
						{
							className: "button",
							onClick: function onClick(e) {
								e.stopPropagation();
								_this2.AreaLinks.classList.toggle("active");
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 65
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-ui-select-thin", __source: {
								fileName: _jsxFileName,
								lineNumber: 72
							}
						})
					)
				)
			);
		}
	}]);

	return AreaLinks;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

var mapStateToProps = function mapStateToProps(store, ownProps) {
	return {
		areas: store.areas
	};
};
var ConnectedAreaLinks = Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps)(AreaLinks);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedAreaLinks);

/***/ }),

/***/ "./src/components/search/Query.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styled_Query_js__ = __webpack_require__("./src/components/search/styled/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_actions__ = __webpack_require__("./src/data/actions/index.js");





var _jsxFileName = "/www/jsjobs/app/src/components/search/Query.js";


/* redux */



// this will be useful to "reset" the setState
var constructInitialState = function constructInitialState() {
	return {
		qInput_value: "",
		qInput_multiplier: 1
	};
};

/* 
	Component 
*/

var Query = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Query, _React$Component);

	function Query(props) {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Query);

		var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Query.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Query)).call(this, props));

		_this.inputValueChange = function (e) {
			var value = e.target.value;
			// set value:
			_this.setState({ qInput_value: value });
		};

		_this.multiplierClick = function (multiplier) {
			// set value:
			_this.setState({ qInput_multiplier: multiplier });
			// on "closing", second click, submit value
			if (_this.query_group.classList.contains("active") && _this.refs.qInput.value) {
				_this.inputValueSubmit(multiplier); // pass multiplier, because setState is Async, and doesnt change fast enough
			}
			// on "opening", initial click, open the dropdown
			_this.query_group.classList.toggle("active");
		};

		_this.inputValueSubmit = function (multiplier) {
			// change it in multiplierClick, then call this to finalize, or just call this on its own, to send current value
			_this.props.dispatch(__WEBPACK_IMPORTED_MODULE_8__data_actions__["b" /* my_filter_add */]({ value: _this.refs.qInput.value, multiplier: multiplier || _this.state.qInput_multiplier, property: _this.props.queryProperty }, _this.props.area_key));
			_this.setState(constructInitialState(_this.props));
		};

		_this.state = constructInitialState();
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Query, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			// slight UX addition:
			setTimeout(function () {
				_this2.refs.qInput.focus();
			}, 300);
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			// value + multiplier
			var multiplier = this.state.qInput_multiplier;
			var placeholder = this.props.placeholder || "Search description...";
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_6__styled_Query_js__["a" /* Query */],
				{
					className: "query_group " + (this.state.qInput_value || this.props.expanded ? " expanded " : ""),
					innerRef: function innerRef(el) {
						_this3.query_group = el;
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 54
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", {
					className: "query_input " + (this.props.isLoading ? " isLoading" : ""),
					placeholder: placeholder,
					ref: "qInput",
					onChange: function onChange(e) {
						_this3.inputValueChange(e);
					},
					value: this.state.qInput_value,
					onKeyPress: function onKeyPress(e) {
						if ((e.charCode || e.keyCode) === 13) {
							_this3.inputValueSubmit();
						}
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 60
					}
				}),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ className: "query_select selected_" + (multiplier > 0 ? "positive" : "negative"), __source: {
							fileName: _jsxFileName,
							lineNumber: 74
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
						className: "overlay",
						onClick: function onClick() {
							_this3.query_group.classList.remove("active");
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 75
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"div",
						{ className: "dropdown", __source: {
								fileName: _jsxFileName,
								lineNumber: 81
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 10 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(10);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 82
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 88
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 89
									}
								},
								"10"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 3 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(3);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 91
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 97
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 98
									}
								},
								"3"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 2 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(2);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 100
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 106
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 107
									}
								},
								"2"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 1 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(1);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 109
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 115
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 116
									}
								},
								"1"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -1 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-1);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 118
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 124
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 125
									}
								},
								"-1"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -2 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-2);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 127
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 133
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 134
									}
								},
								"-2"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -3 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-3);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 136
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 142
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 143
									}
								},
								"-3"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -10 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-10);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 145
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 151
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 152
									}
								},
								"-10"
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"div",
						{
							className: "icon",
							onClick: function onClick() {
								_this3.inputValueSubmit();
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 155
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-top-add", __source: {
								fileName: _jsxFileName,
								lineNumber: 161
							}
						})
					)
				)
			);
		}
	}]);

	return Query;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {};
};
var ConnectedQuery = Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps)(Query);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedQuery);

/***/ }),

/***/ "./src/components/search/Results__my.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__ = __webpack_require__("babel-runtime/helpers/typeof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styled_Results_js__ = __webpack_require__("./src/components/search/styled/Results.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_actions__ = __webpack_require__("./src/data/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Query__ = __webpack_require__("./src/components/search/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Links__ = __webpack_require__("./src/components/search/Links.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Filters__ = __webpack_require__("./src/components/search/Filters.js");







var _jsxFileName = "/www/jsjobs/app/src/components/search/Results__my.js";




/* redux */


/* components */



/*
	lib
*/
var sort_items_object_to_array = function sort_items_object_to_array(items_object, filters_array) {
	/*
 	filter the filters (needs refactor!)
 */
	var filters = filters_array.map(function (filter) {
		filter.value = filter.value.replace(/ \| /g, "|");
		filter.value = filter.value.replace(/\?/g, "\\?");
		filter.value = filter.value.replace(/\+/g, "\\+");
		filter.value = filter.value.replace(/\]\\\+/g, "]+");
		filter.value = filter.value.replace(/\*/g, "\\*");
		filter.value = filter.value.replace(/\$/g, "\\$");
		return filter;
	});
	/*
 	iterate items
 */
	var items = [];
	for (var i in items_object) {
		var item = items_object[i];
		if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(item)) !== "object") {
			continue;
		}
		item._status = item._status || "new";
		item._rating = 1000;
		// use filters
		for (var fil in filters) {
			var filter = filters[fil];
			if (filter.multiplier) {
				var reg = RegExp("" + filter.value + "", "i");
				var match = reg.test(" " + item.location + " " + item.company + " " + item.name + " " + item.text + " ");
				if (match) {
					item._rating += filter.multiplier;
				}
			}
		}
		// except
		// if (item._status === this.props.items_status) {
		if (!filters.length || item._rating >= 1000 + filters.length) {
			items.push(item);
		}
		// }
	}
	// items.sort(function(a, b) {
	// 	return b.posted > a.posted;
	// });
	items.sort(function (a, b) {
		return b._rating > a._rating;
	});
	return items;
};
/* 
	component 
*/

var Results = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Results, _Component);

	function Results() {
		var _ref;

		var _temp, _this, _ret;

		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Results);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Results.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Results, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.dispatch(__WEBPACK_IMPORTED_MODULE_12__data_actions__["e" /* my_items_status */](this.props.items_status));
		}
		/*
  	view
  */

	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var area_key = this.props.area_key;
			var items_array = sort_items_object_to_array(this.props.items, this.props.filters);
			var results_length = /*Object.keys(this.props.items).length -*/items_array.length;
			// make Array
			var Items = [];
			if (items_array.length) {
				var i = 0;
				// limit items on page - soon add pagination or auto-loading on scroll

				var _loop = function _loop() {
					// item = current item
					var item = items_array[i];
					if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(item)) !== "object") {
						i++;
						return "continue";
					}
					// item.rating
					var rating = item._rating - 1000;
					var Rating = null;
					if (rating > 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating plus", __source: {
									fileName: _jsxFileName,
									lineNumber: 97
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 98
								}
							}),
							rating
						);
					}
					if (rating < 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating minus", __source: {
									fileName: _jsxFileName,
									lineNumber: 105
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 106
								}
							}),
							rating
						);
					}
					// add to view
					Items.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ key: item._id + i, className: "item status--" + item._status, __source: {
								fileName: _jsxFileName,
								lineNumber: 113
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 114
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"a",
								{ href: item.link, target: "_blank", __source: {
										fileName: _jsxFileName,
										lineNumber: 115
									}
								},
								item.name
							)
						),
						" ",
						"- ",
						item.text,
						" \xA0",
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "meta", __source: {
									fileName: _jsxFileName,
									lineNumber: 120
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 121
									}
								},
								"#",
								i,
								" - ",
								item._status
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 124
									}
								},
								Rating
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "location", __source: {
										fileName: _jsxFileName,
										lineNumber: 125
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://www.google.com/maps/place/" + item.location + "", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 126
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-navigation", __source: {
											fileName: _jsxFileName,
											lineNumber: 127
										}
									}),
									" ",
									item.location
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "company", __source: {
										fileName: _jsxFileName,
										lineNumber: 130
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://google.com/search?q=" + item.company + " company glassdoor", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 131
										}
									},
									item.company
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "pills", __source: {
										fileName: _jsxFileName,
										lineNumber: 135
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill status--applied",
										onClick: function onClick() {
											// NOT immutable: immediately assigns to existing, rendered item - handle all immutability in Redux actions
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_12__data_actions__["d" /* my_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item, { _status: "applied" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 136
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-check", __source: {
											fileName: _jsxFileName,
											lineNumber: 143
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 143
											}
										},
										"applied"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill status--intrigued",
										onClick: function onClick() {
											// NOT immutable: immediately assigns to existing, rendered item - handle all immutability in Redux actions
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_12__data_actions__["d" /* my_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item, { _status: "intrigued" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 145
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
											fileName: _jsxFileName,
											lineNumber: 152
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 152
											}
										},
										"intrigued"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill status--ignored",
										onClick: function onClick() {
											// NOT immutable: immediately assigns to existing, rendered item - handle all immutability in Redux actions
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_12__data_actions__["d" /* my_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item, { _status: "ignored" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 154
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-delete", __source: {
											fileName: _jsxFileName,
											lineNumber: 161
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 161
											}
										},
										"ignored"
									)
								)
							)
						)
					));
					i++;
				};

				while (i < 100) {
					var _ret2 = _loop();

					if (_ret2 === "continue") continue;
				}
			} else {
				Items.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 171
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 172
							}
						},
						"No results :("
					),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 173
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_10_react_router_dom__["Link"],
							{ to: "/", __source: {
									fileName: _jsxFileName,
									lineNumber: 174
								}
							},
							"Go back to homepage"
						),
						", and click some buttons!"
					),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 176
							}
						},
						"But, this functionality needs a lot of work! Please do check back in a week. Should be working then."
					)
				));
			}
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__styled_Results_js__["a" /* Results */],
				{ className: "Items " + (this.props.className || ""), __source: {
						fileName: _jsxFileName,
						lineNumber: 181
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "queries", __source: {
							fileName: _jsxFileName,
							lineNumber: 182
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"h1",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 183
							}
						},
						"This functionality needs a lot of work!"
					),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 184
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_10_react_router_dom__["Link"],
							{ to: "/in/" + this.props.my_area, __source: {
									fileName: _jsxFileName,
									lineNumber: 185
								}
							},
							"\xAB back to search page"
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "content", __source: {
							fileName: _jsxFileName,
							lineNumber: 188
						}
					},
					Items
				)
			);
		}
	}]);

	return Results;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/*
	Connect redux data
*/


var mapStateToProps = function mapStateToProps(data, ownProps) {
	var filters = data.my.filters || [];
	var items = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, data.my.items);
	return {
		my_area: data.my.area_key,
		items: items,
		items_status: ownProps.items_status || "new",
		filters: filters
	};
};
var ConnectedResults = Object(__WEBPACK_IMPORTED_MODULE_11_react_redux__["connect"])(mapStateToProps)(Object(__WEBPACK_IMPORTED_MODULE_9_react_router__["withRouter"])(Results));

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedResults);

/***/ }),

/***/ "./src/components/search/Results__new.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__ = __webpack_require__("babel-runtime/helpers/typeof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styled_Results_js__ = __webpack_require__("./src/components/search/styled/Results.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_actions__ = __webpack_require__("./src/data/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Query__ = __webpack_require__("./src/components/search/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Links__ = __webpack_require__("./src/components/search/Links.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Filters__ = __webpack_require__("./src/components/search/Filters.js");







var _jsxFileName = "/www/jsjobs/app/src/components/search/Results__new.js";



/* redux */


/* components */



/*
	lib
*/
var sort_items_object_to_array = function sort_items_object_to_array(items_object, filters_array) {
	/*
 	filter the filters (needs refactor!)
 */
	var filters = filters_array.map(function (filter) {
		filter.value = filter.value.replace(/ \| /g, "|");
		filter.value = filter.value.replace(/\?/g, "\\?");
		filter.value = filter.value.replace(/\+/g, "\\+");
		filter.value = filter.value.replace(/\]\\\+/g, "]+");
		filter.value = filter.value.replace(/\*/g, "\\*");
		filter.value = filter.value.replace(/\$/g, "\\$");
		return filter;
	});
	/*
 	iterate items
 */
	var items = [];
	for (var i in items_object) {
		var item = items_object[i];
		if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(item)) !== "object") {
			continue;
		}
		item._status = item._status || "new";
		item._rating = 1000;
		// use filters
		for (var fil in filters) {
			var filter = filters[fil];
			if (filter.multiplier) {
				var reg = RegExp("" + filter.value + "", "i");
				var match = reg.test(" " + item.location + " " + item.company + " " + item.name + " " + item.text + " ");
				if (match) {
					item._rating += filter.multiplier;
				}
			}
		}
		// except
		// if (item._status === this.props.items_status) {
		if (!filters.length || item._rating >= 1000 + filters.length) {
			items.push(item);
		}
		// }
	}
	// items.sort(function(a, b) {
	// 	return b.posted > a.posted;
	// });
	items.sort(function (a, b) {
		return b._rating > a._rating;
	});
	return items;
};
/* 
	component 
*/

var Results = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Results, _Component);

	function Results() {
		var _ref;

		var _temp, _this, _ret;

		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Results);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Results.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.item_mutate_and_save = function (item, changes) {
			// MUTABLE: assign() directly to item --- this assignment is temporary for the current scope --- it is separate from Redux action, which performs its own immutable Object.assign({}, item)
			var mutated_item = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, changes);
			// OK, below is normal
			_this.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["d" /* my_item_save */](mutated_item, _this.props.area_key));
		}, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Results, [{
		key: "render",

		/*
  	view
  */
		value: function render() {
			var _this2 = this;

			var area_key = this.props.area_key;
			var items_array = sort_items_object_to_array(this.props.items, this.props.filters);
			var results_length = /*Object.keys(this.props.items).length -*/items_array.length;
			// make Array
			var Items = [];
			if (items_array.length) {
				var i = 0;
				// limit items on page - soon add pagination or auto-loading on scroll

				var _loop = function _loop() {
					// item = current item
					var item = items_array[i];
					if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(item)) !== "object") {
						i++;
						return "continue";
					}
					// item.rating
					var rating = item._rating - 1000;
					var Rating = null;
					if (rating > 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating plus", __source: {
									fileName: _jsxFileName,
									lineNumber: 99
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 100
								}
							}),
							rating
						);
					}
					if (rating < 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating minus", __source: {
									fileName: _jsxFileName,
									lineNumber: 107
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 108
								}
							}),
							rating
						);
					}
					// add to view
					Items.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ key: item._id + i, className: "item new status--" + item._status + (item._status !== "new" ? " not_new" : ""), __source: {
								fileName: _jsxFileName,
								lineNumber: 115
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 116
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"a",
								{ href: item.link, target: "_blank", __source: {
										fileName: _jsxFileName,
										lineNumber: 117
									}
								},
								item.name
							)
						),
						" ",
						"- ",
						item.text,
						" \xA0",
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "meta", __source: {
									fileName: _jsxFileName,
									lineNumber: 122
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 123
									}
								},
								Rating
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "location", __source: {
										fileName: _jsxFileName,
										lineNumber: 124
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://www.google.com/maps/place/" + item.location + "", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 125
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-navigation", __source: {
											fileName: _jsxFileName,
											lineNumber: 126
										}
									}),
									" ",
									item.location
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "company", __source: {
										fileName: _jsxFileName,
										lineNumber: 129
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://google.com/search?q=" + item.company + " company glassdoor", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 130
										}
									},
									item.company
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "pills", __source: {
										fileName: _jsxFileName,
										lineNumber: 134
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill status--applied",
										onClick: function onClick() {
											_this2.item_mutate_and_save(item, { _status: "applied" });
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 135
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-check", __source: {
											fileName: _jsxFileName,
											lineNumber: 141
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 141
											}
										},
										"applied"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill status--intrigued",
										onClick: function onClick() {
											_this2.item_mutate_and_save(item, { _status: "intrigued" });
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 143
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
											fileName: _jsxFileName,
											lineNumber: 149
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 149
											}
										},
										"intrigued"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill status--ignored",
										onClick: function onClick() {
											_this2.item_mutate_and_save(item, { _status: "ignored" });
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 151
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-delete", __source: {
											fileName: _jsxFileName,
											lineNumber: 157
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 157
											}
										},
										"ignored"
									)
								)
							)
						)
					));
					i++;
				};

				while (i < 100) {
					var _ret2 = _loop();

					if (_ret2 === "continue") continue;
				}
			} else {
				Items.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ key: "null", __source: {
							fileName: _jsxFileName,
							lineNumber: 167
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 168
							}
						},
						"No results :("
					),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 169
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 170
								}
							},
							"Try to delete some of your search terms, above."
						)
					)
				));
			}
			var placeholder = "Search...";
			// const placeholder = (this.props.filters.length ? "Filter" : "Search") + " " + results_length + " " + (this.props.filters.length ? "results" : "jobs") + "...";
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__styled_Results_js__["a" /* Results */],
				{ className: "Items " + (this.props.className || ""), __source: {
						fileName: _jsxFileName,
						lineNumber: 178
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "queries", __source: {
							fileName: _jsxFileName,
							lineNumber: 179
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__Links__["a" /* default */], { area_key: this.props.area_key, __source: {
							fileName: _jsxFileName,
							lineNumber: 180
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Query__["a" /* default */], { area_key: this.props.area_key, expanded: this.state.searchQueryExpanded, placeholder: placeholder, __source: {
							fileName: _jsxFileName,
							lineNumber: 181
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__Filters__["a" /* default */], { area_key: this.props.area_key, __source: {
							fileName: _jsxFileName,
							lineNumber: 182
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ className: "moreOptions", ref: "moreOptions", __source: {
								fileName: _jsxFileName,
								lineNumber: 183
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "moreOptions_content", __source: {
									fileName: _jsxFileName,
									lineNumber: 184
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"p",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 185
									}
								},
								"Tip: use RegEx in search term. For example: ",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("br", {
									__source: {
										fileName: _jsxFileName,
										lineNumber: 186
									}
								}),
								"\"",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"b",
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 186
										}
									},
									"[^a-zA-Z]+C[^a-zA-Z]+"
								),
								"\" or \"",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"b",
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 186
										}
									},
									"java[^s]+ | JSP"
								),
								"\""
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"p",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 188
									}
								},
								"Then, choose a +/- thumbs up/down value, to weigh its importance."
							)
						),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"p",
							{ className: "moreOptions_link", __source: {
									fileName: _jsxFileName,
									lineNumber: 190
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{
									onClick: function onClick(e) {
										_this2.refs.moreOptions.classList.toggle("active");
										_this2.setState({ searchQueryExpanded: !_this2.state.searchQueryExpanded });
									},
									__source: {
										fileName: _jsxFileName,
										lineNumber: 191
									}
								},
								"..."
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "content", __source: {
							fileName: _jsxFileName,
							lineNumber: 202
						}
					},
					Items
				)
			);
		}
	}]);

	return Results;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/*
	Connect redux data
*/


var mapStateToProps = function mapStateToProps(data, ownProps) {
	var data_area = data.areas[ownProps.area_key || ""];
	return {
		items: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, ownProps.items),
		items_status: data.my.items_status || "new",
		filters: data.my.filters || []
	};
};
var ConnectedResults = Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps)(Object(__WEBPACK_IMPORTED_MODULE_9_react_router__["withRouter"])(Results));

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedResults);

/***/ }),

/***/ "./src/components/search/styled/Filters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filters; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t.filter {\n\t\tdisplay: block;\n\t\ttext-align: center;\n\t\tmargin-bottom: 0.33rem;\n\t\tmargin: 0.5rem 0 0.33rem 0;\n\t\t> * {\n\t\t\tvertical-align: middle;\n\t\t\tdisplay: inline-block;\n\t\t\t&::after {\n\t\t\t\tcontent: \" \";\n\t\t\t}\n\t\t}\n\n\t\tcolor: #666;\n\t\t.value {\n\t\t\ti {\n\t\t\t\tcolor: #666;\n\t\t\t\t&::after {\n\t\t\t\t\tcontent: \" \";\n\t\t\t\t}\n\t\t\t}\n\t\t\tb {\n\t\t\t\tfont-weight: 600;\n\t\t\t\tletter-spacing: 0.25px;\n\t\t\t}\n\t\t\t&.example {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t}\n\t\t.multiplier {\n\t\t\tfont-size: 75%;\n\t\t\t.icon-plus {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t\t.icon-minus {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t.multiplier_text {\n\t\t\tpadding-left: 0.33rem;\n\t\t\tfont-weight: normal;\n\t\t}\n\t\t.delete {\n\t\t\tcursor: pointer;\n\t\t\tpadding-left: 0.5rem;\n\t\t\tfont-size: 1.25rem;\n\t\t\tmargin-top: 0.125rem;\n\t\t\tdisplay: inline-block;\n\t\t\tcolor: #666;\n\t\t}\n\t\t.x {\n\t\t\tcursor: pointer;\n\t\t\tpadding-left: 0.5rem;\n\t\t\tfont-size: 1.5rem;\n\t\t\tmargin-top: -0.175rem;\n\t\t}\n\t\t&.plus {\n\t\t\t.multiplier_text,\n\t\t\tb {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.minus {\n\t\t\t.multiplier_text,\n\t\t\tb {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\t.filter {\n\t\tdisplay: block;\n\t\ttext-align: center;\n\t\tmargin-bottom: 0.33rem;\n\t\tmargin: 0.5rem 0 0.33rem 0;\n\t\t> * {\n\t\t\tvertical-align: middle;\n\t\t\tdisplay: inline-block;\n\t\t\t&::after {\n\t\t\t\tcontent: \" \";\n\t\t\t}\n\t\t}\n\n\t\tcolor: #666;\n\t\t.value {\n\t\t\ti {\n\t\t\t\tcolor: #666;\n\t\t\t\t&::after {\n\t\t\t\t\tcontent: \" \";\n\t\t\t\t}\n\t\t\t}\n\t\t\tb {\n\t\t\t\tfont-weight: 600;\n\t\t\t\tletter-spacing: 0.25px;\n\t\t\t}\n\t\t\t&.example {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t}\n\t\t.multiplier {\n\t\t\tfont-size: 75%;\n\t\t\t.icon-plus {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t\t.icon-minus {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t.multiplier_text {\n\t\t\tpadding-left: 0.33rem;\n\t\t\tfont-weight: normal;\n\t\t}\n\t\t.delete {\n\t\t\tcursor: pointer;\n\t\t\tpadding-left: 0.5rem;\n\t\t\tfont-size: 1.25rem;\n\t\t\tmargin-top: 0.125rem;\n\t\t\tdisplay: inline-block;\n\t\t\tcolor: #666;\n\t\t}\n\t\t.x {\n\t\t\tcursor: pointer;\n\t\t\tpadding-left: 0.5rem;\n\t\t\tfont-size: 1.5rem;\n\t\t\tmargin-top: -0.175rem;\n\t\t}\n\t\t&.plus {\n\t\t\t.multiplier_text,\n\t\t\tb {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.minus {\n\t\t\t.multiplier_text,\n\t\t\tb {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t}\n"]);




var Filters = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed2);

/***/ }),

/***/ "./src/components/search/styled/Links.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaLinks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\tposition: relative;\n\ttext-align: center;\n\t.overlay {\n\t\tdisplay: none;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t&.active .overlay {\n\t\tdisplay: block;\n\t}\n\t.content {\n\t\tposition: relative;\n\t\tmin-height: 2rem;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\t.button {\n\t\t\tcursor: pointer;\n\t\t\tmin-width: 2rem;\n\t\t\tspan {\n\t\t\t\tfont-size: 2.1rem;\n\t\t\t\tline-height: 1.25rem;\n\t\t\t\tcolor: #111;\n\t\t\t}\n\t\t}\n\t\t.dropdown {\n\t\t\t.option {\n\t\t\t\theight: 1.5rem;\n\t\t\t\tline-height: 1.5rem;\n\t\t\t\tfont-size: 1.25rem;\n\t\t\t\tpadding: 0.25rem;\n\t\t\t\tdisplay: none;\n\t\t\t\tcolor: ", ";\n\t\t\t\t&.selected {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t&.active .content {\n\t\t.dropdown {\n\t\t\tborder: solid 1px ", ";\n\t\t\tposition: absolute;\n\t\t\tbackground: #fff;\n\t\t\tpadding: 0.5rem 1.6rem 0.5rem 1.5rem;\n\t\t\tmargin: -0.75rem -1.5rem -0.75rem -1rem;\n\t\t\tborder-radius: 1rem;\n\t\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n\t\t\t.option {\n\t\t\t\tpadding: 0.5rem;\n\t\t\t\tdisplay: block;\n\t\t\t\t&.selected {\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tposition: relative;\n\ttext-align: center;\n\t.overlay {\n\t\tdisplay: none;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t&.active .overlay {\n\t\tdisplay: block;\n\t}\n\t.content {\n\t\tposition: relative;\n\t\tmin-height: 2rem;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\t.button {\n\t\t\tcursor: pointer;\n\t\t\tmin-width: 2rem;\n\t\t\tspan {\n\t\t\t\tfont-size: 2.1rem;\n\t\t\t\tline-height: 1.25rem;\n\t\t\t\tcolor: #111;\n\t\t\t}\n\t\t}\n\t\t.dropdown {\n\t\t\t.option {\n\t\t\t\theight: 1.5rem;\n\t\t\t\tline-height: 1.5rem;\n\t\t\t\tfont-size: 1.25rem;\n\t\t\t\tpadding: 0.25rem;\n\t\t\t\tdisplay: none;\n\t\t\t\tcolor: ", ";\n\t\t\t\t&.selected {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t&.active .content {\n\t\t.dropdown {\n\t\t\tborder: solid 1px ", ";\n\t\t\tposition: absolute;\n\t\t\tbackground: #fff;\n\t\t\tpadding: 0.5rem 1.6rem 0.5rem 1.5rem;\n\t\t\tmargin: -0.75rem -1.5rem -0.75rem -1rem;\n\t\t\tborder-radius: 1rem;\n\t\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n\t\t\t.option {\n\t\t\t\tpadding: 0.5rem;\n\t\t\t\tdisplay: block;\n\t\t\t\t&.selected {\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);




var AreaLinks = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_title2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2);

/***/ }),

/***/ "./src/components/search/styled/Query.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Query; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\ttext-align: center;\n\tdisplay: block;\n\tmargin: 0.33rem auto;\n\tmax-width: 52rem;\n\t> * {\n\t\tbackground: #fff;\n\t}\n\t.query_go {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\twidth: 1.8rem;\n\t\tborder-radius: 50%;\n\t\tmargin-left: 0.2rem;\n\t\t> * {\n\t\t\tdisplay: block;\n\t\t\twhite-space: nowrap;\n\t\t\tpadding: 0.4rem 0.33rem;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.2rem;\n\t\t\tline-height: 1.2rem;\n\t\t\tcolor: #333;\n\t\t\tfont-weight: normal;\n\t\t}\n\t}\n\t.query_input,\n\t.query_select {\n\t\tline-height: 1.5rem;\n\t\tborder-radius: 1rem;\n\t}\n\t.query_input {\n\t\tfont-size: 1.2rem;\n\t\tpadding: 0.3rem 0.6rem 0.3rem 2rem;\n\t\tflex-grow: 1;\n\t\tmin-width: 21rem;\n\t\tmargin: 0 auto;\n\t\tborder: solid 1px ", ";\n\t\t&.isLoading {\n\t\t\tbackground:yellow;\n\t\t}\n\t}\n\t.query_select {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tborder-top-left-radius: 0;\n\t\tborder-bottom-left-radius: 0;\n\t\t/* border: solid 1px ", "; */\n\t\tborder-left: none;\n\t\twidth: 30%;\n\t\t.icon {\n\t\t\tposition: absolute;\n\t\t\tright: 0.175rem;\n\t\t\ttop: 0;\n\t\t\tpadding: 0.25rem 0.33rem;\n\t\t\tfont-size: 1.25rem;\n\t\t}\n\t\t.overlay {\n\t\t\tdisplay: none;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\t/* background: rgba(0, 0, 0, 0.25); */\n\t\t}\n\t\t.dropdown {\n\t\t\tposition: relative;\n\t\t\tpadding: 0.15rem 0.3rem 0.2rem 0.3rem;\n\t\t\twidth: calc(100% + 4px);\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: solid 1px ", ";\n\t\t\tborder-left: none;\n\t\t\tborder-radius: 1rem;\n\t\t\tborder-top-left-radius: 0;\n\t\t\tborder-bottom-left-radius: 0;\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: top;\n\t\t\t> * {\n\t\t\t\tpadding: 0.25rem;\n\t\t\t\tdisplay: none;\n\t\t\t\tvertical-align: baseline;\n\t\t\t\tline-height: 1rem;\n\t\t\t\tspan {\n\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t&:first-child {\n\t\t\t\t\t\tfont-size: 1.1rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.selected {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t&.green {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t\t&.red {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t&.active .query_input {\n\t\tborder-right:none;\n\t}\n\t&.active .query_select {\n\t\t.overlay {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.dropdown {\n\t\t\tz-index: 1000;\n\t\t\tpadding: 0.4rem 0.2rem;\n\t\t\tborder-bottom-left-radius: 1rem;\n\t\t\tposition: absolute;\n\t\t\tbackground: white;\n\t\t\tbox-shadow: 3px 3px 10px;\n\t\t\t> * {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-bottom: 0.33rem;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tpadding: 0.3rem;\n\t\t\t}\n\t\t}\n\t}\n\t&.selected_positive {\n\t\t/* background: #9ad35b;\n\t\tborder-color: #9ad35b; */\n\t\tbackground-image: linear-gradient(to bottom, #abde6f, #9ad35b, #64b40a);\n\t\tborder-top-color: #abde6f;\n\t\tborder-right-color: #9ad35b;\n\t\tborder-bottom-color: #64b40a;\n\t\t&:not(.active) {\n\t\t\t.dropdown {\n\t\t\t\tcolor: white;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-shadow: 0 0 2px #64b40a;\n\t\t\t}\n\t\t}\n\t}\n\t&.expanded {\n\t\tdisplay: flex;\n\t\t.query_input {\n\t\t\tborder-top-right-radius: 0;\n\t\t\tborder-bottom-right-radius: 0;\n\t\t}\n\t\t.query_select {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.query_go {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n"], ["\n\ttext-align: center;\n\tdisplay: block;\n\tmargin: 0.33rem auto;\n\tmax-width: 52rem;\n\t> * {\n\t\tbackground: #fff;\n\t}\n\t.query_go {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\twidth: 1.8rem;\n\t\tborder-radius: 50%;\n\t\tmargin-left: 0.2rem;\n\t\t> * {\n\t\t\tdisplay: block;\n\t\t\twhite-space: nowrap;\n\t\t\tpadding: 0.4rem 0.33rem;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.2rem;\n\t\t\tline-height: 1.2rem;\n\t\t\tcolor: #333;\n\t\t\tfont-weight: normal;\n\t\t}\n\t}\n\t.query_input,\n\t.query_select {\n\t\tline-height: 1.5rem;\n\t\tborder-radius: 1rem;\n\t}\n\t.query_input {\n\t\tfont-size: 1.2rem;\n\t\tpadding: 0.3rem 0.6rem 0.3rem 2rem;\n\t\tflex-grow: 1;\n\t\tmin-width: 21rem;\n\t\tmargin: 0 auto;\n\t\tborder: solid 1px ", ";\n\t\t&.isLoading {\n\t\t\tbackground:yellow;\n\t\t}\n\t}\n\t.query_select {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tborder-top-left-radius: 0;\n\t\tborder-bottom-left-radius: 0;\n\t\t/* border: solid 1px ", "; */\n\t\tborder-left: none;\n\t\twidth: 30%;\n\t\t.icon {\n\t\t\tposition: absolute;\n\t\t\tright: 0.175rem;\n\t\t\ttop: 0;\n\t\t\tpadding: 0.25rem 0.33rem;\n\t\t\tfont-size: 1.25rem;\n\t\t}\n\t\t.overlay {\n\t\t\tdisplay: none;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\t/* background: rgba(0, 0, 0, 0.25); */\n\t\t}\n\t\t.dropdown {\n\t\t\tposition: relative;\n\t\t\tpadding: 0.15rem 0.3rem 0.2rem 0.3rem;\n\t\t\twidth: calc(100% + 4px);\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: solid 1px ", ";\n\t\t\tborder-left: none;\n\t\t\tborder-radius: 1rem;\n\t\t\tborder-top-left-radius: 0;\n\t\t\tborder-bottom-left-radius: 0;\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: top;\n\t\t\t> * {\n\t\t\t\tpadding: 0.25rem;\n\t\t\t\tdisplay: none;\n\t\t\t\tvertical-align: baseline;\n\t\t\t\tline-height: 1rem;\n\t\t\t\tspan {\n\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t&:first-child {\n\t\t\t\t\t\tfont-size: 1.1rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.selected {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t&.green {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t\t&.red {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t&.active .query_input {\n\t\tborder-right:none;\n\t}\n\t&.active .query_select {\n\t\t.overlay {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.dropdown {\n\t\t\tz-index: 1000;\n\t\t\tpadding: 0.4rem 0.2rem;\n\t\t\tborder-bottom-left-radius: 1rem;\n\t\t\tposition: absolute;\n\t\t\tbackground: white;\n\t\t\tbox-shadow: 3px 3px 10px;\n\t\t\t> * {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-bottom: 0.33rem;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tpadding: 0.3rem;\n\t\t\t}\n\t\t}\n\t}\n\t&.selected_positive {\n\t\t/* background: #9ad35b;\n\t\tborder-color: #9ad35b; */\n\t\tbackground-image: linear-gradient(to bottom, #abde6f, #9ad35b, #64b40a);\n\t\tborder-top-color: #abde6f;\n\t\tborder-right-color: #9ad35b;\n\t\tborder-bottom-color: #64b40a;\n\t\t&:not(.active) {\n\t\t\t.dropdown {\n\t\t\t\tcolor: white;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-shadow: 0 0 2px #64b40a;\n\t\t\t}\n\t\t}\n\t}\n\t&.expanded {\n\t\tdisplay: flex;\n\t\t.query_input {\n\t\t\tborder-top-right-radius: 0;\n\t\t\tborder-bottom-right-radius: 0;\n\t\t}\n\t\t.query_select {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.query_go {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n"]);




var Query = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed1);

/***/ }),

/***/ "./src/components/search/styled/Results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Results; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t&.Items {\n\t\t&.isLoading {\n\t\t\t.title {\n\t\t\t\tbackground: url(\"/assets/loading/3dots.gif\") center -13px no-repeat;\n\t\t\t\tspan {\n\t\t\t\t\topacity:0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.title {\n\t\t\tfont-size:1.25rem;\n\t\t\tline-height: 1.25rem;\n\t\t\ttext-align:center;\n\t\t\tcolor:#111;\n\t\t\tspan {\n\t\t\t\ttransition: opacity 0.2s;\n\t\t\t}\n\t\t}\n\t\t.content {\n\t\t\tmax-width: 53.8rem;\n\t\t\tmargin: 0.5rem auto;\n\t\t\t.item {\n\t\t\t\t/* display: flex; */\n\t\t\t\tmargin: 1.5rem 1rem;\n\t\t\t\t&.new.not_new {\n\t\t\t\t\tdisplay:none; /* because Javascript was being buggy! */\n\t\t\t\t}\n\t\t\t\ta {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\ttext-decoration:underline;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.meta {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t\t* {\n\t\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\t}\n\t\t\t\t\t> * {\n\t\t\t\t\t\tmargin:0.2rem 0.2rem 0;\n\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t}\n\t\t\t\t\t.pills {\n\t\t\t\t\t\twhite-space:nowrap;\n\t\t\t\t\t\t.pill {\n\t\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\t\tborder: solid 1px #999;\n\t\t\t\t\t\t\tmargin:0 0 0 0.4rem;\n\t\t\t\t\t\t\tpadding: 0rem 0.5rem 0.1rem;\n\t\t\t\t\t\t\tborder-radius: 1rem;\n\t\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t\t\t[class^=\"icon-\"] {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\ttop:0.1rem;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t&:hover {\n\t\t\t\t\t\t\t\tbackground:#999;\n\t\t\t\t\t\t\t\tcolor:#fff;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.status--applied .pill.status--applied,\n\t\t\t\t&.status--intrigued .pill.status--intrigued,\n\t\t\t\t&.status--ignored .pill.status--ignored {\n\t\t\t\t\tbackground:#999;\n\t\t\t\t\tcolor:#fff;\n\t\t\t\t}\n\t\t\t\t&.first {\n\t\t\t\t\t.meta {\n\t\t\t\t\t\t.pills {\n\t\t\t\t\t\t\tmargin-top:0.4rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&:not(.first) {\n\t\t\t\t\t.pill {\n\t\t\t\t\t\t.icon-check,\n\t\t\t\t\t\t.icon-ui-thumbs-up {\n\t\t\t\t\t\t\t/* margin:0 -0.2rem 0 0.2rem; */\n\t\t\t\t\t\t\ttop:0.05rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.text {\n\t\t\t\t\t\t\tdisplay:none;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.controls {\n\t\t\t\t\tmargin: 0.125rem;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tspan {\n\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\tmargin: 0.125rem 0.125rem 0.25rem 0.125rem;\n\t\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.content {\n\t\t\t\t}\n\t\t\t\t.location,\n\t\t\t\t.location a {\n\t\t\t\t\tcolor: salmon; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.company,\n\t\t\t\t.company a {\n\t\t\t\t\tcolor: slategrey; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.rating {\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tcolor:#999;\n\t\t\t\t\t&.plus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t\t&.minus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t[class^=\"icon-\"],\n\t\t\t[class*=\" icon-\"] {\n\t\t\t\tvertical-align: baseline;\n\t\t\t}\n\t\t}\n\t\t.queries {\n\t\t\tmargin-bottom: 1rem;\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\tbackground: #cccccc;\n\t\t\tborder-bottom: solid 1px ", ";\n\t\t\ttext-align: center;\n\t\t\toverflow: visible;\n\t\t\tcolor:#999;\n\t\t\ta {\n\t\t\t\tcolor:darkslateblue;\n\t\t\t}\n\t\t\t.moreOptions {\n\t\t\t\tp {\n\t\t\t\t\tmargin: 0.5rem 0 0.33rem;\n\t\t\t\t\tline-height: 1rem;\n\t\t\t\t}\n\t\t\t\tb {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t\tfont-weight:normal;\n\t\t\t\t}\n\t\t\t\t.moreOptions_link {\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t\tline-height: 0.5rem;\n\t\t\t\t\tpadding: 0 0 0.5rem;\n\t\t\t\t\tspan {\n\t\t\t\t\t\tpadding:0 2rem;\n\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.moreOptions_content {\n\t\t\t\t\tdisplay:none;\n\t\t\t\t}\n\t\t\t\t&.active {\n\t\t\t\t\t.moreOptions_content {\n\t\t\t\t\t\tdisplay:block;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\t&.Items {\n\t\t&.isLoading {\n\t\t\t.title {\n\t\t\t\tbackground: url(\"/assets/loading/3dots.gif\") center -13px no-repeat;\n\t\t\t\tspan {\n\t\t\t\t\topacity:0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.title {\n\t\t\tfont-size:1.25rem;\n\t\t\tline-height: 1.25rem;\n\t\t\ttext-align:center;\n\t\t\tcolor:#111;\n\t\t\tspan {\n\t\t\t\ttransition: opacity 0.2s;\n\t\t\t}\n\t\t}\n\t\t.content {\n\t\t\tmax-width: 53.8rem;\n\t\t\tmargin: 0.5rem auto;\n\t\t\t.item {\n\t\t\t\t/* display: flex; */\n\t\t\t\tmargin: 1.5rem 1rem;\n\t\t\t\t&.new.not_new {\n\t\t\t\t\tdisplay:none; /* because Javascript was being buggy! */\n\t\t\t\t}\n\t\t\t\ta {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\ttext-decoration:underline;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.meta {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t\t* {\n\t\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\t}\n\t\t\t\t\t> * {\n\t\t\t\t\t\tmargin:0.2rem 0.2rem 0;\n\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t}\n\t\t\t\t\t.pills {\n\t\t\t\t\t\twhite-space:nowrap;\n\t\t\t\t\t\t.pill {\n\t\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t\t\tborder: solid 1px #999;\n\t\t\t\t\t\t\tmargin:0 0 0 0.4rem;\n\t\t\t\t\t\t\tpadding: 0rem 0.5rem 0.1rem;\n\t\t\t\t\t\t\tborder-radius: 1rem;\n\t\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t\t\t[class^=\"icon-\"] {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\ttop:0.1rem;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t&:hover {\n\t\t\t\t\t\t\t\tbackground:#999;\n\t\t\t\t\t\t\t\tcolor:#fff;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.status--applied .pill.status--applied,\n\t\t\t\t&.status--intrigued .pill.status--intrigued,\n\t\t\t\t&.status--ignored .pill.status--ignored {\n\t\t\t\t\tbackground:#999;\n\t\t\t\t\tcolor:#fff;\n\t\t\t\t}\n\t\t\t\t&.first {\n\t\t\t\t\t.meta {\n\t\t\t\t\t\t.pills {\n\t\t\t\t\t\t\tmargin-top:0.4rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&:not(.first) {\n\t\t\t\t\t.pill {\n\t\t\t\t\t\t.icon-check,\n\t\t\t\t\t\t.icon-ui-thumbs-up {\n\t\t\t\t\t\t\t/* margin:0 -0.2rem 0 0.2rem; */\n\t\t\t\t\t\t\ttop:0.05rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.text {\n\t\t\t\t\t\t\tdisplay:none;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.controls {\n\t\t\t\t\tmargin: 0.125rem;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tspan {\n\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\tmargin: 0.125rem 0.125rem 0.25rem 0.125rem;\n\t\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.content {\n\t\t\t\t}\n\t\t\t\t.location,\n\t\t\t\t.location a {\n\t\t\t\t\tcolor: salmon; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.company,\n\t\t\t\t.company a {\n\t\t\t\t\tcolor: slategrey; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.rating {\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tcolor:#999;\n\t\t\t\t\t&.plus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t\t&.minus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t[class^=\"icon-\"],\n\t\t\t[class*=\" icon-\"] {\n\t\t\t\tvertical-align: baseline;\n\t\t\t}\n\t\t}\n\t\t.queries {\n\t\t\tmargin-bottom: 1rem;\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\tbackground: #cccccc;\n\t\t\tborder-bottom: solid 1px ", ";\n\t\t\ttext-align: center;\n\t\t\toverflow: visible;\n\t\t\tcolor:#999;\n\t\t\ta {\n\t\t\t\tcolor:darkslateblue;\n\t\t\t}\n\t\t\t.moreOptions {\n\t\t\t\tp {\n\t\t\t\t\tmargin: 0.5rem 0 0.33rem;\n\t\t\t\t\tline-height: 1rem;\n\t\t\t\t}\n\t\t\t\tb {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t\tfont-weight:normal;\n\t\t\t\t}\n\t\t\t\t.moreOptions_link {\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t\tline-height: 0.5rem;\n\t\t\t\t\tpadding: 0 0 0.5rem;\n\t\t\t\t\tspan {\n\t\t\t\t\t\tpadding:0 2rem;\n\t\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.moreOptions_content {\n\t\t\t\t\tdisplay:none;\n\t\t\t\t}\n\t\t\t\t&.active {\n\t\t\t\t\t.moreOptions_content {\n\t\t\t\t\t\tdisplay:block;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);




var Results = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_mapsLink, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_mapsLink, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2);

/***/ }),

/***/ "./src/data/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export area_status_change */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return my_area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return my_item_save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return my_items_status; });
/* unused harmony export area_item_add */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return my_filter_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return my_filter_remove; });
var area_status_change = function area_status_change(status, area_key) {
	return {
		type: "area_status_change",
		status: status,
		area_key: area_key
	};
};
// export const area_items_set = (items, area_key) => {
// 	return {
// 		type: "area_items_set",
// 		items,
// 		area_key
// 	};
// };
var my_area = function my_area(area_key) {
	return {
		type: "my_area",
		area_key: area_key
	};
};
var my_item_save = function my_item_save(item, area_key) {
	return {
		type: "my_item_save",
		item: item,
		area_key: area_key
	};
};
var my_items_status = function my_items_status(items_status) {
	return {
		type: "my_items_status",
		items_status: items_status
	};
};
var area_item_add = function area_item_add(item, area_key) {
	return {
		type: "area_item_add",
		item: item,
		area_key: area_key
	};
};
var my_filter_add = function my_filter_add(filter, area_key) {
	return {
		type: "my_filter_add",
		filter: filter,
		area_key: area_key
	};
};
var my_filter_remove = function my_filter_remove(filter, area_key) {
	return {
		type: "my_filter_remove",
		filter: filter,
		area_key: area_key
	};
};

/***/ }),

/***/ "./src/data/reducers/areas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initialState = {
	us: { route: "/", key: "us", label: "Select region..." },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)" },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)" },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)" }
};
var areas = function areas() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		default:
			return state;
			break;
	}
};
/* harmony default export */ __webpack_exports__["a"] = (areas);

/***/ }),

/***/ "./src/data/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__areas__ = __webpack_require__("./src/data/reducers/areas.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my__ = __webpack_require__("./src/data/reducers/my.js");




var data = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
	areas: __WEBPACK_IMPORTED_MODULE_1__areas__["a" /* default */],
	my: __WEBPACK_IMPORTED_MODULE_2__my__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (data);

/***/ }),

/***/ "./src/data/reducers/my.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var initialState = { filters: [], items: {}, items_status: "new", area_key: "us" };
var my = function my() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "my_item_save":
			state.items[action.item._id] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, action.item);
			state.items = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state.items);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
		case "my_area":
			state.area_key = action.area_key;
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
		case "my_items_status":
			state.items_status = action.items_status;
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		case "my_filter_add":
			var _id = "";
			for (var prop in action.filter) {
				_id += action.filter[prop];
			}
			action.filter._id = _id;
			state.filters.push(action.filter);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		case "my_filter_remove":
			var f_index = state.filters.findIndex(function (filter) {
				return filter._id === action.filter._id;
			});
			state.filters.splice(f_index, 1);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		default:
			return state;
			break;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (my);

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__("./src/server.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);



var server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_0__server__["default"]);

var currentApp = __WEBPACK_IMPORTED_MODULE_0__server__["default"];

server.listen("3000" || 3000, function (error) {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

if (true) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept("./src/server.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__("./src/server.js"); (function () {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    var newApp = __webpack_require__("./src/server.js").default;
    server.on('request', newApp);
    currentApp = newApp;
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ }),

/***/ "./src/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__ = __webpack_require__("@jaredpalmer/after");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__);
var _jsxFileName = "/www/jsjobs/app/src/routes.js";




/* harmony default export */ __webpack_exports__["a"] = ([{
	path: "/",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/Search.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 11
					}
				},
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "/in/:area_key?",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/Search.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 19
					}
				},
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "/my/:thing?",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/My.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 27
					}
				},
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "/about",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/About.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 35
					}
				},
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "*",
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/404.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 42
					}
				},
				"...Page Not Found..."
			);
		} // this is optional, just returns null by default
	})
}]);

/***/ }),

/***/ "./src/routes/404.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Page_js__ = __webpack_require__("./src/routes/styled/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");





var _jsxFileName = "/www/jsjobs/app/src/routes/404.js";





var Home = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);

	function Home() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__components_Layout_js__["a" /* default */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 9
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_7__styled_Page_js__["a" /* Page */],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 10
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"h2",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 11
							}
						},
						"Page Not Found"
					)
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/routes/About.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Page_js__ = __webpack_require__("./src/routes/styled/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");





var _jsxFileName = "/www/jsjobs/app/src/routes/About.js";





var Search = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Search, _Component);

	function Search() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Search);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Search.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Search)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Search, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__components_Layout_js__["a" /* default */],
				{ purge: true, __source: {
						fileName: _jsxFileName,
						lineNumber: 9
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_7__styled_Page_js__["a" /* Page */],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 10
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"h2",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 11
							}
						},
						"About..."
					),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 12
							}
						},
						"This app needs a lot of work, but it is coming along nicely, with SSR, super fast loading for SEO, and now adding a persistent offline-data-store."
					),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 13
							}
						},
						"Search: ",
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"a",
							{ href: "/in/la", __source: {
									fileName: _jsxFileName,
									lineNumber: 14
								}
							},
							"/in/la"
						)
					)
				)
			);
		}
	}]);

	return Search;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/routes/My.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Page_js__ = __webpack_require__("./src/routes/styled/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_Results_my__ = __webpack_require__("./src/components/search/Results__my.js");





var _jsxFileName = "/www/jsjobs/app/src/routes/My.js";





/*
    components
*/

var My = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(My, _Component);

	function My() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, My);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (My.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(My)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(My, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__components_Layout_js__["a" /* default */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 12
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_7__styled_Page_js__["a" /* Page */],
					{ className: "Page", __source: {
							fileName: _jsxFileName,
							lineNumber: 13
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_search_Results_my__["a" /* default */], { items: {}, items_status: this.props.match.params.thing, __source: {
							fileName: _jsxFileName,
							lineNumber: 14
						}
					})
				)
			);
		}
	}]);

	return My;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (My);

/***/ }),

/***/ "./src/routes/Search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styled_Page_js__ = __webpack_require__("./src/routes/styled/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_Results_new__ = __webpack_require__("./src/components/search/Results__new.js");







var _jsxFileName = "/www/jsjobs/app/src/routes/Search.js";





/*
    components
*/

var Search = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Search, _Component);

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Search, null, [{
		key: "getInitialProps",
		value: function () {
			var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
				var match = _ref.match;

				var props, res, data, items_object, _res, json, _items_object;

				return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								/*
        	props modified and propagated by SSR
        */
								props = {
									area_key: match.params.area_key || "",
									items: []
								};
								/*
        	fetch content - initial data
        */

								_context.prev = 1;
								_context.next = 4;
								return fetch("https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs" + props.area_key + "-50.json");

							case 4:
								res = _context.sent;
								_context.next = 7;
								return res.json();

							case 7:
								data = _context.sent;

								// convert to object
								items_object = {};

								data.forEach(function (item) {
									items_object[item._id] = item;
								});
								// done converting, use {items_object}
								props.items = items_object;
								return _context.abrupt("return", props);

							case 14:
								_context.prev = 14;
								_context.t0 = _context["catch"](1);
								_context.prev = 16;
								_context.next = 19;
								return fetch("http://localhost:1080/api/v1/jobs" + props.area_key + ".json?limit=50");

							case 19:
								_res = _context.sent;
								_context.next = 22;
								return _res.json();

							case 22:
								json = _context.sent;

								// convert to object
								_items_object = {};

								json.data.forEach(function (item) {
									_items_object[item._id] = item;
								});
								// done converting, use {items_object}
								props.items = _items_object;
								return _context.abrupt("return", props);

							case 29:
								_context.prev = 29;
								_context.t1 = _context["catch"](16);
								return _context.abrupt("return", props);

							case 32:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this, [[1, 14], [16, 29]]);
			}));

			function getInitialProps(_x) {
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
		/*
  	initial data in {this.props.items}, more complete data in {this.state.items}
  */

	}]);

	function Search() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Search);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Search.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Search)).call(this));

		_this.state = {
			items: [],
			isLoading: false
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Search, [{
		key: "updateContent",
		value: function () {
			var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
				var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var res, data, items_object, _res2, json, _items_object2;

				return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (props.area_key) {
									_context2.next = 2;
									break;
								}

								return _context2.abrupt("return");

							case 2:
								this.setState({ isLoading: true });
								/*
        	fetch content - all data
        */
								_context2.prev = 3;
								_context2.next = 6;
								return fetch("https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs" + props.area_key + ".json");

							case 6:
								res = _context2.sent;
								_context2.next = 9;
								return res.json();

							case 9:
								data = _context2.sent;

								// convert to object
								items_object = {};

								data.forEach(function (item) {
									items_object[item._id] = item;
								});
								// done converting, use {items_object}
								this.setState({ items: items_object, isLoading: false });
								_context2.next = 31;
								break;

							case 15:
								_context2.prev = 15;
								_context2.t0 = _context2["catch"](3);
								_context2.prev = 17;
								_context2.next = 20;
								return fetch("http://localhost:1080/api/v1/jobs" + props.area_key + ".json");

							case 20:
								_res2 = _context2.sent;
								_context2.next = 23;
								return _res2.json();

							case 23:
								json = _context2.sent;

								// convert to object
								_items_object2 = {};

								json.data.forEach(function (item) {
									_items_object2[item._id] = item;
								});
								// done converting, use {items_object}
								this.setState({ items: _items_object2, isLoading: false });
								_context2.next = 31;
								break;

							case 29:
								_context2.prev = 29;
								_context2.t1 = _context2["catch"](17);

							case 31:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this, [[3, 15], [17, 29]]);
			}));

			function updateContent() {
				return _ref3.apply(this, arguments);
			}

			return updateContent;
		}()
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps() {
			var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			/*
   	update Content - when page route changed
   */
			if (props.items && props.items.length) {
				/*
    	first - throw out old state and replace with new props
    */
				this.setState({ items: props.items });
				/*
    	then - fetch the rest
    */
				this.updateContent(props);
			}
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			/*
   	update Content - only initial page load after page SSR'd with getInitialProps()
   */
			if (!this.state.items.length && this.props.area_key) {
				this.updateContent(this.props);
			}
		}
	}, {
		key: "render",
		value: function render() {
			/*
   	this.props || this.state
   */
			console.log("Search.js render ", this.props);
			var items = this.state.items.length ? this.state.items : this.props.items;
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */],
				{ area_key: this.props.area_key, __source: {
						fileName: _jsxFileName,
						lineNumber: 146
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_9__styled_Page_js__["a" /* Page */],
					{ className: "Page " + (this.state.isLoading ? " isLoading" : ""), __source: {
							fileName: _jsxFileName,
							lineNumber: 147
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_search_Results_new__["a" /* default */], { area_key: this.props.area_key, items: items || {}, className: this.state.isLoading ? " isLoading" : "", __source: {
							fileName: _jsxFileName,
							lineNumber: 148
						}
					})
				)
			);
		}
	}]);

	return Search;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/routes/styled/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t&.isLoading {\n\t\t.query_input {\n\t\t\tbackground: #fff url(\"/assets/loading/3dots.gif\") center no-repeat;\n\t\t}\n\t}\n\t.bottom {\n\t\tbackground: #111;\n\t\tcolor: #fff;\n\t\tpadding: 1rem;\n\t\t* {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.queries {\n\t\tpadding: 0.5rem 0;\n\t\tbackground: #cccccc;\n\t}\n\t.page-title {\n\t\tmargin: 2rem auto 1rem;\n\t\ttext-align: center;\n\t\tcolor: ", ";\n\t\twhite-space: nowrap;\n\t\t> * {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n\t.home-map {\n\t\tmargin: 1.5rem 0 1.5rem 0;\n\t}\n\t.home-map-content {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tpadding: 30% 0;\n\t\tbackground: url(/images/map-outline-us-states.png) no-repeat;\n\t\tbackground-size: contain;\n\t}\n\t.ui-hotspot.home-map-hotspot {\n\t\twidth: 2rem;\n\t\theight: 2rem;\n\t\t&:before {\n\t\t\tbackground: #ffd700;\n\t\t}\n\t\t&:after {\n\t\t\t/* background-image: radial-gradient(circle, #ffd700, #ffca00, #ffbe00, #ffb100, #ffa505); */\n\t\t\tbackground: #ffbe00;\n\t\t}\n\t}\n\t.ui-hotspot {\n\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\tbox-shadow: 0 0 10px #ffffff;\n\t\t@keyframes pulse {\n\t\t\t0% {\n\t\t\t\ttransform: scale(1);\n\t\t\t\topacity: 0.5;\n\t\t\t}\n\t\t\t70%,\n\t\t\t100% {\n\t\t\t\ttransform: scale(2);\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t&:before {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: inline-block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0%;\n\t\t\tleft: 0%;\n\t\t\tbackground: rgb(222, 222, 222);\n\t\t\topacity: 0.5;\n\t\t\tanimation: pulse 3s ease-in-out infinite;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: inline-block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0%;\n\t\t\tleft: 0%;\n\t\t\tbackground: orange;\n\t\t\topacity: 1;\n\t\t}\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tlabel {\n\t\t\tcursor: pointer;\n\t\t\tposition: absolute;\n\t\t\ttop: -0.05rem;\n\t\t\tleft: 2.5rem;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 1.25rem;\n\t\t\tcolor: #ffa505;\n\t\t\ttext-shadow: 0 0 10px #ffffff;\n\t\t}\n\t}\n"], ["\n\t&.isLoading {\n\t\t.query_input {\n\t\t\tbackground: #fff url(\"/assets/loading/3dots.gif\") center no-repeat;\n\t\t}\n\t}\n\t.bottom {\n\t\tbackground: #111;\n\t\tcolor: #fff;\n\t\tpadding: 1rem;\n\t\t* {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.queries {\n\t\tpadding: 0.5rem 0;\n\t\tbackground: #cccccc;\n\t}\n\t.page-title {\n\t\tmargin: 2rem auto 1rem;\n\t\ttext-align: center;\n\t\tcolor: ", ";\n\t\twhite-space: nowrap;\n\t\t> * {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n\t.home-map {\n\t\tmargin: 1.5rem 0 1.5rem 0;\n\t}\n\t.home-map-content {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tpadding: 30% 0;\n\t\tbackground: url(/images/map-outline-us-states.png) no-repeat;\n\t\tbackground-size: contain;\n\t}\n\t.ui-hotspot.home-map-hotspot {\n\t\twidth: 2rem;\n\t\theight: 2rem;\n\t\t&:before {\n\t\t\tbackground: #ffd700;\n\t\t}\n\t\t&:after {\n\t\t\t/* background-image: radial-gradient(circle, #ffd700, #ffca00, #ffbe00, #ffb100, #ffa505); */\n\t\t\tbackground: #ffbe00;\n\t\t}\n\t}\n\t.ui-hotspot {\n\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\tbox-shadow: 0 0 10px #ffffff;\n\t\t@keyframes pulse {\n\t\t\t0% {\n\t\t\t\ttransform: scale(1);\n\t\t\t\topacity: 0.5;\n\t\t\t}\n\t\t\t70%,\n\t\t\t100% {\n\t\t\t\ttransform: scale(2);\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t&:before {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: inline-block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0%;\n\t\t\tleft: 0%;\n\t\t\tbackground: rgb(222, 222, 222);\n\t\t\topacity: 0.5;\n\t\t\tanimation: pulse 3s ease-in-out infinite;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: inline-block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0%;\n\t\t\tleft: 0%;\n\t\t\tbackground: orange;\n\t\t\topacity: 1;\n\t\t}\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tlabel {\n\t\t\tcursor: pointer;\n\t\t\tposition: absolute;\n\t\t\ttop: -0.05rem;\n\t\t\tleft: 2.5rem;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 1.25rem;\n\t\t\tcolor: #ffa505;\n\t\t\ttext-shadow: 0 0 10px #ffffff;\n\t\t}\n\t}\n"]);




var Page = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_title1);

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jaredpalmer_after__ = __webpack_require__("@jaredpalmer/after");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jaredpalmer_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__jaredpalmer_after__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Document__ = __webpack_require__("./src/Document.js");



var _this = this;






var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_2_express___default()();
server.disable("x-powered-by").use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static("/www/jsjobs/app/public")).get("/*", function () {
	var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
		var html;
		return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return Object(__WEBPACK_IMPORTED_MODULE_3__jaredpalmer_after__["render"])({
							req: req,
							res: res,
							routes: __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */],
							assets: assets,
							document: __WEBPACK_IMPORTED_MODULE_5__Document__["a" /* default */],
							// Anything else you add here will be made available
							// within getInitialProps(ctx)
							// e.g a redux store...
							customThing: "thing"
						});

					case 3:
						html = _context.sent;

						res.send(html);
						_context.next = 10;
						break;

					case 7:
						_context.prev = 7;
						_context.t0 = _context["catch"](0);

						res.json(_context.t0);

					case 10:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, _this, [[0, 7]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack/hot/poll.js?300");
module.exports = __webpack_require__("./src/index.js");


/***/ }),

/***/ "@jaredpalmer/after":
/***/ (function(module, exports) {

module.exports = require("@jaredpalmer/after");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/core-js/object/keys":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/objectWithoutProperties":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/taggedTemplateLiteral":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "babel-runtime/helpers/typeof":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-persist":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map