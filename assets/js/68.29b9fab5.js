(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{419:function(s,n,e){"use strict";e.r(n);var a=e(14),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[s._v("#")]),s._v(" Promise")]),s._v(" "),n("h2",{attrs:{id:"promise核心点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise核心点"}},[s._v("#")]),s._v(" Promise核心点")]),s._v(" "),n("ul",[n("li",[s._v("构造函数\n"),n("ul",[n("li",[s._v("resolve、reject")]),s._v(" "),n("li",[s._v("状态处理：fulfilled/rejected/pedding，状态具有凝固性")]),s._v(" "),n("li",[s._v("结果传递")]),s._v(" "),n("li",[s._v("异步处理：setTimeout模拟、库MutationObserver来模拟nextTick")])])]),s._v(" "),n("li",[s._v("then方法\n"),n("ul",[n("li",[s._v("多个then注册: 使用数组储存onFulfilledArr")]),s._v(" "),n("li",[s._v("链式回调：防止死循环、返回一个promise")]),s._v(" "),n("li",[s._v("穿透")])])])]),s._v(" "),n("h2",{attrs:{id:"promise-a"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise-a"}},[s._v("#")]),s._v(" Promise/A+")]),s._v(" "),n("ul",[n("li",[s._v("npm install promises-aplus-tests")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const isFunction = obj => typeof obj === 'function';\nconst isObject = obj => !!(obj && typeof obj === 'object');\nconst isThenable = obj => (isFunction(obj) || isObject(obj)) && 'then' in obj;\nconst isPromise = promise => promise instanceof Promise;\n\nconst PENDING = 'pending';\nconst FULFILLED = 'fulfilled';\nconst REJECTED = 'rejected';\n\nconst handleCallback = (callback, state, result) => {\n    let {\n        onFulfilled, onRejected, resolve, reject\n    } = callback;\n    try {\n        if (state === FULFILLED) {\n            isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result); \n        } else if (state === REJECTED) {\n            isFunction(onRejected) ? resolve(onRejected(result)) : reject(result); \n        }\n    } catch(error) {\n        reject(error);\n    }\n}\n\nconst handleCallbacks = (callback, state, result) => {\n    while (callback.length) handleCallback(callbacks.shift(), state, result);\n}\nconst transition = (promise, state, result) {\n    if (promise.state ! == PENDING) return;\n    promise.state = state;\n    promise.result = result;\n    setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0);\n}\n\nconst resolvePromise = (promise, result, resolve, reject) => {\n    // 如果result === promise本身，抛出TypeError错误\n    if (result === promise) {\n        let reason = new TypeError('Can not fulfill promise with itself')\n        return reject(reason);\n    }\n    // result是不是promise类型，then(resolve, reject)取它的value或reason\n    if (isPromise(result)) {\n        return result.then(resolve, rejecet);\n    }\n    // result是不是thenable对象，是取出then,再用newPromise进入The Promise Resolution Procedure过程\n    if (isThenable(result)) {\n        try {\n            let then = result.then;\n            if (isFunction(then)) {\n                return new Promise(then.bind(result)).then(resolve, reject);\n            }\n        } catch(error) {\n            return reject(error);\n        }\n    }\n\n    resolve(result);\n};\n\n// f构造函数\nfunction Promise(f) {\n    this.state = PENDING;\n    this.result = null;\n    this.callbacks = [];\n\n    let onFulfilled = value => transition(this, FULFILLED, value);\n    let onRejected = reason => transition(this, REJECTED, reason);\n\n    let ignore = false;\n\n    let resolve = value => {\n        if (ignore) return;\n        ignore = true;\n        resolvePromise(this, value, onFulfilled, onRejected);\n    }\n    let reject = reason => {\n        if (ignore) return;\n        ignore = true;\n        onRejected(reason);\n    }\n\n    try {\n        f(resolve, reject);\n    } catch (error) {\n        reject(error);\n    }\n}\n\n// 构造下一个promise的result\nPromise.prototype.then = function(onFulfilled, onRejected) {\n    return new Promise((resolve, reject) => {\n        let callback = {\n            onFulfilled, onRejected, resolve, reject\n        };\n        \n        if (this.state === PENDING) {\n            this.callbacks.push(callback);\n        } else {\n            setTimeout(() => handleCallback(\n                callback, this.state, this.result\n            ), 0);\n        }\n    });\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);