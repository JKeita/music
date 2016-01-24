(function () {
	window.NEJ = window.NEJ || {};
	NEJ.O = {};
	NEJ.R = [];
	NEJ.F = function () {
		return !1
	};
	NEJ.P = function (bjg) {
		if (!bjg || !bjg.length)
			return null;
		var Fo = window;
		for (var a = bjg.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; Fo = Fo[a[i]] = Fo[a[i]] || {}, i++);
		return Fo
	};
	NEJ.Q = function (fZ, bjg) {
		fZ = fZ || NEJ.O;
		var cK = bjg.split(".");
		for (var i = 0, l = cK.length; i < l; i++) {
			fZ = fZ[cK[i]];
			if (!fZ)
				break
		}
		return fZ
	};
	NEJ.C = function () {
		var SP = function () {
			return NEJ.O.toString.call(arguments[0]) != "[object Function]"
		};
		var SR = function (bz, bLs) {
			for (var x in bLs)
				if (bz == bLs[x])
					return x;
			return null
		};
		var MQ = {
			dv : 0,
			cw : 1,
			cX : 2,
			bFa : 3,
			cE : 4,
			hk : 5,
			jE : 6,
			eo : 7
		},
		ot = {
			dF : 0,
			cA : 1,
			dc : 2,
			bLu : 3,
			cL : 4,
			hz : 5,
			kz : 6,
			gg : 7
		};
		return function () {
			var ed = function () {
				this.SV();
				return this.dv.apply(this, arguments)
			};
			ed.prototype.SV = NEJ.F;
			ed.prototype.dv = NEJ.F;
			ed.bN = function (sE, SZ) {
				if (SP(sE))
					return;
				if (SZ == null || !!SZ)
					NEJ.X(this, sE, SP);
				this.bha = sE;
				this.du = sE.prototype;
				var cU = function () {};
				cU.prototype = sE.prototype;
				this.prototype = new cU;
				var td = this.prototype;
				td.constructor = this;
				var eh;
				for (var x in MQ) {
					eh = SR(MQ[x], ot);
					if (!eh || !this.du[x])
						continue;
					td[x] = function (bX) {
						return function () {
							this[bX].apply(this, arguments)
						}
					}
					(eh)
				}
				var te = {};
				for (var x in ot) {
					eh = SR(ot[x], MQ);
					if (!eh || !this.du[eh])
						continue;
					te[eh] = sE;
					td[x] = function (bX) {
						return function () {
							var bn,
							cU = this.Le[bX],
							Ip = cU.prototype[bX];
							this.Le[bX] = cU.bha || sE;
							if (!!Ip)
								bn = Ip.apply(this, arguments);
							this.Le[bX] = sE;
							return bn
						}
					}
					(eh)
				}
				td.SV = function () {
					this.Le = NEJ.X({}, te)
				};
				td.bzG = td.dF;
				return td
			};
			return ed
		}
	}
	();
	NEJ.X = function (bLx, de, eg) {
		if (!bLx || !de)
			return bLx;
		eg = eg || NEJ.F;
		for (var x in de) {
			if (de.hasOwnProperty(x) && !eg(de[x], x))
				bLx[x] = de[x]
		}
		return bLx
	};
	NEJ.EX = function (bLx, de) {
		if (!bLx || !de)
			return bLx;
		for (var x in bLx) {
			if (bLx.hasOwnProperty(x) && de[x] != null)
				bLx[x] = de[x]
		}
		return bLx
	};
	var wu = Function.prototype;
	wu.ee = function (Km, Kr) {
		var f = NEJ.F,
		Kr = Kr || f,
		Km = Km || f,
		el = this;
		return function () {
			var bc = {
				args : NEJ.R.slice.call(arguments, 0)
			};
			Km(bc);
			if (!bc.stopped) {
				bc.value = el.apply(this, bc.args);
				Kr(bc)
			}
			return bc.value
		}
	};
	wu.bh = function () {
		var ce = arguments,
		bLx = arguments[0],
		Od = this;
		return function () {
			var pX = NEJ.R.slice.call(ce, 1);
			NEJ.R.push.apply(pX, arguments);
			return Od.apply(bLx || window, pX)
		}
	};
	wu.gz = function () {
		var ce = arguments,
		bLx = NEJ.R.shift.call(ce),
		Od = this;
		return function () {
			NEJ.R.push.apply(arguments, ce);
			return Od.apply(bLx || window, arguments)
		}
	};
	var wu = String.prototype;
	if (!wu.trim) {
		wu.trim = function () {
			var dq = /(?:^\s+)|(?:\s+$)/g;
			return function () {
				return this.replace(dq, "")
			}
		}
		()
	}
	if (!window.MWF)
		window.MWF = NEJ;
	if (!window.mwf)
		window.mwf = NEJ.P("nej");
	if (!window.console) {
		NEJ.P("console").log = NEJ.F;
		NEJ.P("console").error = NEJ.F
	}
	var lt,
	gt,
	amp,
	nbsp,
	quot,
	apos,
	copy,
	reg
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bv = be("nej.p"),
	Ii = window.navigator.platform,
	od = window.navigator.userAgent;
	var im = {
		mac : Ii,
		win : Ii,
		linux : Ii,
		ipad : od,
		ipod : od,
		iphone : Ii,
		android : od
	};
	bv.Nn = im;
	for (var x in im)
		im[x] = (new RegExp(x, "i")).test(im[x]);
	im.ios = im.ipad || im.iphone || im.ipod;
	im.tablet = im.ipad;
	im.desktop = im.mac || im.win || im.linux && !im.android;
	var gs = {
		engine : "unknow",
		release : "unknow",
		browser : "unknow",
		version : "unknow",
		prefix : {
			css : "",
			pro : "",
			clz : ""
		}
	};
	bv.dp = gs;
	if (/msie\s+(.*?);/i.test(od) || /trident\/.+rv:([\d\.]+)/i.test(od)) {
		gs.engine = "trident";
		gs.browser = "ie";
		gs.version = RegExp.$1;
		gs.prefix = {
			css : "ms",
			pro : "ms",
			clz : "MS",
			evt : "MS"
		};
		var nL = {
			6 : "2.0",
			7 : "3.0",
			8 : "4.0",
			9 : "5.0",
			10 : "6.0",
			11 : "7.0"
		};
		gs.release = nL[document.documentMode] || nL[parseInt(gs.version)]
	} else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(od)) {
		gs.engine = "webkit";
		gs.release = RegExp.$1 || "";
		gs.prefix = {
			css : "webkit",
			pro : "webkit",
			clz : "WebKit"
		}
	} else if (/rv\:(.*?)\)\s+gecko\//i.test(od)) {
		gs.engine = "gecko";
		gs.release = RegExp.$1 || "";
		gs.browser = "firefox";
		gs.prefix = {
			css : "Moz",
			pro : "moz",
			clz : "Moz"
		};
		if (/firefox\/(.*?)(?=\s|$)/i.test(od))
			gs.version = RegExp.$1 || ""
	} else if (/presto\/(.*?)\s/i.test(od)) {
		gs.engine = "presto";
		gs.release = RegExp.$1 || "";
		gs.browser = "opera";
		gs.prefix = {
			css : "O",
			pro : "o",
			clz : "O"
		};
		if (/version\/(.*?)(?=\s|$)/i.test(od))
			gs.version = RegExp.$1 || ""
	}
	if (gs.browser == "unknow") {
		var nL = ["chrome", "maxthon", "safari"];
		for (var i = 0, l = nL.length, bX; i < l; i++) {
			bX = nL[i] == "safari" ? "version" : nL[i];
			if ((new RegExp(bX + "/(.*?)(?=\\s|$)", "i")).test(od)) {
				gs.browser = nL[i];
				gs.version = RegExp.$1.trim();
				break
			}
		}
	}
	bv.Th = {};
	var Ic = gs.engine != "trident";
	bv.jN = {
		gecko : gs.engine != "gecko",
		webkit : gs.engine != "webkit",
		presto : gs.engine != "presto",
		trident0 : Ic || gs.release > "2.0",
		trident1 : Ic || gs.release < "6.0",
		trident2 : Ic || gs.release > "3.0",
		trident : Ic || gs.release >= "6.0"
	}
})();
(function () {
	var hf = NEJ.P("nej.c"),
	bW = {};
	var Mt = function () {
		var dq = /^([\w]+?:\/\/.*?(?=\/|$))/i;
		return function (cg) {
			cg = cg || "";
			if (dq.test(cg))
				return RegExp.$1;
			return location.protocol + "//" + location.host
		}
	}
	();
	var Ds = function () {
		var Ti = function (bk, bLs) {
			if (!bk || !bk.length)
				return;
			for (var i = 0, l = bk.length, gv; i < l; i++) {
				gv = bk[i];
				if (gv.indexOf("://") > 0)
					bLs[Mt(gv)] = gv
			}
		};
		var bQ = {
			portrait : {
				name : "portrait",
				dft : "portrait/"
			},
			"ajax.swf" : {
				name : "ajax",
				dft : "nej_proxy_flash.swf"
			},
			"chart.swf" : {
				name : "chart",
				dft : "nej_flex_chart.swf"
			},
			"audio.swf" : {
				name : "audio",
				dft : "nej_player_audio.swf"
			},
			"video.swf" : {
				name : "video",
				dft : "nej_player_video.swf"
			},
			"clipboard.swf" : {
				name : "clipboard",
				dft : "nej_clipboard.swf"
			}
		};
		return function (de) {
			hf.wC("root", de.root || "/res/");
			var QS,
			gP = hf.bw("root");
			for (var x in bQ) {
				QS = bQ[x];
				hf.wC(x, de[QS.name] || gP + QS.dft)
			}
			var bjf = de.p_csrf;
			if (bjf == !0) {
				bjf = {
					cookie : "AntiCSRF",
					param : "AntiCSRF"
				}
			}
			hf.wC("csrf", NEJ.EX({
					cookie : "",
					param : ""
				}, bjf));
			bW.frames = {};
			Ti(de.p_frame, bW.frames);
			bW.flashs = {};
			Ti(de.p_flash, bW.flashs)
		}
	}
	();
	hf.wC = function (bF, bz) {
		bW[bF] = bz
	};
	hf.bw = function (bF) {
		return bW[bF]
	};
	hf.bjM = function (cg) {
		var tl = Mt(cg);
		return bW.frames[tl] || tl + "/res/nej_proxy_frame.html"
	};
	hf.bkq = function (cg) {
		return bW.flashs[Mt(cg)]
	};
	Ds(window.NEJ_CONF || NEJ.O)
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.p"),
	hf = be("nej.c"),
	de = window.NEJ_CONF || NEJ.O;
	if (bv.jN.trident)
		return;
	hf.wC("storage.swf", de.storage || hf.bw("root") + "nej_storage.swf");
	if (bv.dp.release < "4.0") {
		hf.wC("blank.png", de.blank || hf.bw("root") + "nej_blank.gif")
	}
	var bk = de.xdr,
	fg = /^(https?:\/\/.*?)(?=\/|$)/i,
	hy = /[\/?=&]/i;
	var To = function (cg) {
		return (fg.test(cg) ? RegExp.$1 : "").toLowerCase()
	};
	if (!!bk && !!bk.length)
		for (var i = bk.length - 1, cg, bF; i >= 0; i--) {
			cg = bk[i];
			bF = To(cg);
			if (!!bF)
				hf.wC(bF, cg)
		}
	hf.bzt = function (cg) {
		var bF = To(cg);
		if (!bF) {
			if (hy.test(cg)) {
				bF = location.protocol + "//" + location.host
			} else if (cg.indexOf("://") < 0) {
				bF = location.protocol + "//" + cg
			} else {
				bF = cg
			}
		}
		return hf.bw(bF) || bF + "/res/nej_xdomain.html"
	}
})();
(function () {
	var be = NEJ.P,
	hf = be("nej.c"),
	bv = be("nej.g"),
	fi =  + (new Date);
	bv.bzr = 1e4 - fi;
	bv.OP = 10001 - fi;
	bv.bzo = 10002 - fi;
	bv.Tt = 10003 - fi;
	bv.bme = 10004 - fi;
	bv.bzd = 10005 - fi;
	bv.QP = 10006 - fi;
	bv.bmf = 10007 - fi;
	bv.wF = "Content-Type";
	bv.byS = "text/plain";
	bv.Df = "multipart/form-data";
	bv.bmC = "application/x-www-form-urlencoded";
	bv.Md = hf.bw("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
	var be = NEJ.P,
	fP = NEJ.R,
	bv = be("nej.p"),
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bT = be("nej.h");
	var iP = bv.dp.prefix,
	TA = bv.Th,
	boH = {
		scale : "scale({x|1},{y|1})",
		rotate : "rotate({a})",
		translate : "translate({x},{y})"
	},
	bqx = {
		scale : "scale3d({x|1},{y|1},{z|1})",
		rotate : "rotate3d({x},{y},{z},{a})",
		translate : "translate3d({x},{y},{z})"
	},
	De = {
		transition : !0,
		transform : !0,
		animation : !0,
		keyframes : !0,
		box : !0,
		"box-pack" : !0,
		"box-flex" : !0,
		marquee : !0,
		"border-radius" : !0,
		"user-select" : !0
	};
	var Ds = function () {
		var nk = bT.TG();
		TA.css3d = !!nk && nk.m41 != null;
		var dq = /-([a-z])/g;
		for (var x in De) {
			De[TK(x)] = De[x]
		}
	};
	var TK = function () {
		var dq = /-([a-z])/g;
		return function (bX) {
			bX = bX || "";
			return bX.replace(dq, function ($1, $2) {
				return $2.toUpperCase()
			})
		}
	}
	();
	var TL = function (bX) {
		return (!TA.css3d ? boH : bqx)[bX]
	};
	var TM = function () {
		var dq = /\s+/;
		return function (ed) {
			ed = (ed || "").trim();
			return !!ed ? ed.split(dq) : null
		}
	}
	();
	var Hx = function (bD, bDM, ed) {
		bD = Fp.bw(bD);
		if (!bD)
			return;
		bm.bLt(TM(ed), function (dZ) {
			bD.classList[bDM](dZ)
		})
	};
	bT.xe = function (bk) {
		return fP.slice.call(bk, 0)
	};
	bT.Rp = function (bD) {
		return bT.xe(bD.children)
	};
	bT.RC = function (bD, ed) {
		return bT.xe(bD.getElementsByClassName(ed))
	};
	bT.Ji = function (bD, xg) {
		Hx(bD, "add", xg)
	};
	bT.JX = function (bD, xs) {
		Hx(bD, "remove", xs)
	};
	bT.CY = function (bD, xs, xg) {
		Hx(bD, "remove", xs);
		Hx(bD, "add", xg)
	};
	bT.Kz = function (bD, ed) {
		bD = Fp.bw(bD);
		if (!bD)
			return !1;
		var bk = bD.classList;
		if (!bk || !bk.length)
			return !1;
		return bm.dY(TM(ed), function (dZ) {
			return bk.contains(dZ)
		}) >= 0
	};
	bT.Ln = function (bD, dZ) {};
	bT.Lp = function (bD) {};
	bT.LZ = function (eX, kt) {
		eX.selectionEnd = kt.end || 0;
		eX.selectionStart = kt.start || 0;
		eX.focus()
	};
	bT.Mo = function (eX) {
		return {
			end : eX.selectionEnd,
			start : eX.selectionStart
		}
	};
	bT.Ms = function () {
		var tx = function (dZ, bc) {
			var bD = bj.cf(bc);
			if (!bD.value)
				Fp.bR(bD, dZ)
		};
		var xB = function (dZ, bc) {
			Fp.bV(bj.cf(bc), dZ)
		};
		return function (bD, eU, dZ) {
			if (eU == 1) {
				bj.bs(bD, "blur", tx.bh(null, dZ))
			}
			if (eU == 1 || eU == -1) {
				bj.bs(bD, "focus", xB.bh(null, dZ))
			}
		}
	}
	();
	bT.NZ = function (tC) {
		return (new XMLSerializer).serializeToString(tC) || ""
	};
	bT.Om = function (rM) {
		var gP = (new DOMParser).parseFromString(rM, "text/xml").documentElement;
		return gP.nodeName == "parsererror" ? null : gP
	};
	bT.OH = function (bD) {};
	bT.og = function (bD) {
		return null
	};
	bT.Pp = function (bD) {
		return null
	};
	bT.Pu = function (bLw) {};
	bT.PI = function () {
		var ce = bT.xe(arguments);
		ce[0] = Fp.bw(ce[0]);
		if (!ce[0])
			return null;
		ce[1] = (ce[1] || "").toLowerCase();
		if (!ce[1])
			return null;
		return ce
	};
	bT.sP = function () {
		var nM = {
			touchstart : "mousedown",
			touchmove : "mousemove",
			touchend : "mouseup"
		},
		gR = {
			transitionend : "TransitionEnd",
			animationend : "AnimationEnd",
			animationstart : "AnimationStart",
			animationiteration : "AnimationIteration"
		};
		var bug = function (bDM) {
			return (iP.evt || iP.pro) + bDM
		};
		return function () {
			var ce = bT.PI.apply(bT, arguments);
			if (!ce)
				return;
			var Hh = gR[ce[1]],
			Hf = nM[ce[1]];
			if (!!Hh) {
				ce[4] = ce[1];
				ce[1] = bug(Hh)
			} else if (!!Hf) {
				var bX = "on" + ce[1];
				if (!(bX in ce[0])) {
					ce[4] = ce[1];
					ce[1] = Hf
				}
			}
			return ce
		}
	}
	();
	bT.QD = function () {
		var ce = arguments;
		ce[0].addEventListener(ce[1], ce[2], !!ce[3])
	};
	bT.Hd = function () {
		var ce = arguments;
		ce[0].removeEventListener(ce[1], ce[2], !!ce[3])
	};
	bT.QJ = function (bD, bDM, bf) {
		var bc = document.createEvent("Event");
		bc.initEvent(bDM, !0, !0);
		NEJ.X(bc, bf);
		bD.dispatchEvent(bc)
	};
	bT.TG = function () {
		var fg = /\((.*?)\)/,
		hy = /\s*,\s*/,
		bk = ["m11", "m12", "m21", "m22", "m41", "m42"];
		var bui = function (nk) {
			var hw = {};
			if (fg.test(nk || "")) {
				bm.bLt(RegExp.$1.split(hy), function (bz, bu) {
					hw[bk[bu]] = bz || ""
				})
			}
			return hw
		};
		return function (nk) {
			if (!!window.CSSMatrix)
				return new CSSMatrix(nk);
			var bX = iP.clz + "CSSMatrix";
			if (!!window[bX])
				return new window[bX](nk || "");
			return bui(nk)
		}
	}
	();
	bT.Ue = function () {
		var dq = /\{(.*?)\}/g;
		return function (bX, bLs) {
			bLs = bLs || o;
			var qv = TL(bX);
			return !qv ? "" : qv.replace(dq, function ($1, $2) {
				var cK = $2.split("|");
				return bLs[cK[0]] || cK[1] || "0"
			})
		}
	}
	();
	bT.Jp = function (bD, bX, bz) {
		bD.style[bT.Uf(bX)] = bz
	};
	bT.Uf = function () {
		var dq = /^[a-z]/,
		Jv = iP.css;
		var bwz = function (bX) {
			return bX.replace(dq, function ($1) {
				return Jv + $1.toUpperCase()
			})
		};
		return function (bX) {
			bX = TK(bX);
			var bwK = bT.bwW(bX, De);
			return bwK ? bwz(bX) : bX
		}
	}
	();
	bT.bwW = function () {
		var dq = /^([a-z]+?)[A-Z]/;
		return function (bX, bLs) {
			if (!bLs[bX]) {
				if (dq.test(bX))
					bX = RegExp.$1
			}
			return !!bLs[bX]
		}
	}
	();
	bT.bxo = function () {
		var dq = /\$<(.*?)>/gi,
		Jv = "-" + iP.css.toLowerCase() + "-";
		return function (iq) {
			return iq.replace(dq, function ($1, $2) {
				var pH = $2,
				cK = pH.split("|"),
				qv = TL(cK[0]);
				if (!!qv) {
					return bT.Ue(cK[0], bm.mk(cK[1]))
				}
				return !bT.bxp(pH, De) ? pH : Jv + pH
			})
		}
	}
	();
	bT.bxp = function (bX, bLs) {
		return !!bLs[bX]
	};
	bT.Lc = function (di, iq) {
		di.textContent = iq
	};
	bT.Lj = function (di, iq) {
		var biZ = di.sheet,
		ck = biZ.cssRules.length;
		biZ.insertRule(iq, ck);
		return biZ.cssRules[ck]
	};
	bT.bxG = function (bD, bf) {};
	bT.GY = function (GT) {
		return (GT || "").toLowerCase() != "transparent"
	};
	bT.bxx = function (bD) {};
	bT.Mr = function (bD, bX) {
		if (!!bD.getAttribute)
			return bD.getAttribute(bX);
		return ""
	};
	bT.GR = function (fe) {
		Fp.fx(fe)
	};
	Ds()
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bv = be("nej.p"),
	bT = be("nej.h");
	if (bv.jN.trident0)
		return;
	var fi =  + (new Date);
	bW = {};
	bT.Ln = bT.Ln.ee(function (bc) {
			bc.stopped = !0;
			var ce = bc.args,
			bC = Fp.ik(ce[0]),
			bF = "hover-" + bC;
			if (!bC || !!bW[bF])
				return;
			bW[bF] = !0;
			bj.bs(bC, "mouseenter", Fp.bV.bh(Fp, bC, ce[1]));
			bj.bs(bC, "mouseleave", Fp.bR.bh(Fp, bC, ce[1]))
		});
	bT.Lp = function () {
		var bxE = function () {};
		return bT.Lp.ee(function (bc) {
			bc.stopped = !0;
			var bD = bc.args[0],
			bC = "fixed-" + Fp.ik(bD);
			if (!!bW[bC])
				return;
			var bQ = {};
			bW[bC] = bQ
		})
	}
	();
	bT.OH = bT.OH.ee(function (bc) {
			bc.stopped = !0;
			var bD = bc.args[0],
			di = bD.style,
			Un = Fp.mW();
			di.width = Un.scrollWidth + "px";
			di.height = Un.scrollHeight + "px"
		});
	bT.og = bT.og.ee(function (bc) {
			bc.stopped = !0;
			var bD = bc.args[0],
			ih = bW[bD.msk];
			if (!ih) {
				bD.msk = fi++;
				ih = Fp.gH("iframe");
				ih.style.position = "absolute";
				bW[bD.msk] = ih
			}
			bc.value = ih;
			var di = ih.style;
			di.top = (parseInt(Fp.bIU(bD, "top")) || 0) + "px";
			di.left = (parseInt(Fp.bIU(bD, "left")) || 0) + "px";
			di.width = bD.offsetWidth + "px";
			di.height = bD.offsetHeight + "px";
			bD.insertAdjacentElement("beforeBegin", ih)
		});
	bT.Pp = bT.Pp.ee(function (bc) {
			bc.stopped = !0;
			var ih = bW[bc.args[0].msk];
			if (!!ih)
				Fp.mH(ih)
		})
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.p"),
	Fp = be("nej.e"),
	bT = be("nej.h");
	if (bv.jN.trident1)
		return;
	bT.sP = function () {
		var nM = {
			touchcancel : "MSPointerCancel",
			touchstart : "MSPointerDown",
			touchmove : "MSPointerMove",
			touchend : "MSPointerUp"
		};
		return bT.sP.ee(function (bc) {
			var ce = bT.PI.apply(bT, bc.args);
			if (!ce) {
				bc.stopped = !0;
				return
			}
			var bDM = nM[ce[1]];
			if (!!bDM && ("on" + bDM).toLowerCase()in ce[0]) {
				ce[4] = ce[1];
				ce[1] = bDM;
				bc.stopped = !0;
				bc.value = ce
			}
		})
	}
	();
	bT.GY = function (GT) {
		return !0
	};
	bT.GR = bT.GR.ee(function (bc) {
			bc.stopped = !0;
			var fe = bc.args[0];
			Fp.bY(fe, "display", "none");
			try {
				fe.contentWindow.document.body.innerHTML = "&nbsp;"
			} catch (ex) {}

		})
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bv = be("nej.p"),
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bT = be("nej.h"),
	ON = {};
	if (bv.jN.trident)
		return;
	bT.xe = bT.xe.ee(function (bc) {
			bc.stopped = !0;
			var bk = bc.args[0];
			if (!bk) {
				bc.value = null;
				return
			}
			var bu = 0,
			bn = [];
			while (!!bk[bu]) {
				bn.push(bk[bu++])
			}
			bc.value = bn
		});
	bT.Rp = bT.Rp.ee(function (bc) {
			bc.stopped = !0;
			var cK = [];
			bm.bLt(bc.args[0].childNodes, function (bid) {
				if (bid.nodeType == 1)
					cK.push(bid)
			});
			bc.value = cK
		});
	bT.RC = bT.RC.ee(function (bc) {
			var bD = bc.args[0];
			if (!!bD.getElementsByClassName)
				return;
			bc.stopped = !0;
			var bn = [],
			bxq = new RegExp("(\\s|^)(?:" + bc.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
			bm.bLt(bD.getElementsByTagName("*"), function (bid) {
				if (bxq.test(bid.className))
					bn.push(bid)
			});
			bc.value = bn
		});
	bT.LZ = bT.LZ.ee(function (bc) {
			var eX = bc.args[0],
			kt = bc.args[1];
			if (eX.selectionStart == null) {
				bc.stopped = !0;
				var gl = eX.createTextRange();
				gl.collapse(!0);
				gl.moveStart("character", kt.start);
				gl.moveEnd("character", kt.end - kt.start);
				gl.select();
				eX.focus()
			}
		});
	bT.Mo = bT.Mo.ee(function (bc) {
			var eX = bc.args[0];
			eX.focus();
			if (eX.selectionStart == null) {
				bc.stopped = !0;
				var Up = document.selection.createRange();
				var Uq = eX.createTextRange();
				Uq.moveToBookmark(Up.getBookmark());
				var PE = eX.createTextRange();
				PE.collapse(!0);
				PE.setEndPoint("EndToStart", Uq);
				var mJ = PE.text.length;
				bc.value = {
					start : mJ,
					end : mJ + Up.text.length
				}
			}
		});
	bT.NZ = bT.NZ.ee(function (bc) {
			if (!!window.XMLSerializer)
				return;
			bc.stopped = !0;
			var bD = bc.args[0];
			bc.value = bD.xml != null ? bD.xml : bD.outHTML
		});
	bT.Om = function () {
		var CM = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
		var bxn = function () {
			try {
				for (var i = 0, l = CM.length; i < l; i++)
					return new ActiveXObject(CM[i])
			} catch (ex) {
				return null
			}
		};
		return bT.Om.ee(function (bc) {
			if (!!window.DOMParser)
				return;
			bc.stopped = !0;
			var GJ = bxn();
			if (!!GJ && GJ.loadXML(bc.args[0]) && !GJ.parseError.errorCode)
				bc.value = GJ.documentElement
		})
	}
	();
	bT.sP = function () {
		var gR = {
			input : "propertychange",
			load : "readystatechange"
		};
		for (var x in gR)
			ON[gR[x]] = !0;
		var bxj = function (bD, bDM) {
			if ("on" + bDM in bD)
				return null;
			return gR[bDM] || ""
		};
		var bxi = function (bDM, el) {
			var fF = el;
			switch (bDM) {
			case "readystatechange":
				fF = function (bc) {
					var bD = bj.cf(bc) || this;
					if (bD.readyState == "loaded" || bD.readyState == "complete") {
						bc.target = bD;
						el.call(bD, bc)
					}
				};
				break;
			case "propertychange":
				fF = function (bc) {
					var bD = bj.cf(bc) || this;
					if ("value" in bD && bc.propertyName == "value") {
						bc.target = bD;
						el.call(bD, bc)
					}
				};
				break
			}
			return fF
		};
		return bT.sP.ee(function (bc) {
			var ce = bT.PI.apply(bT, bc.args);
			if (!ce) {
				bc.stopped = !0;
				return
			}
			var bDM = bxj(ce[0], ce[1]);
			if (!!bDM) {
				bc.stopped = !0;
				ce[4] = ce[1];
				ce[1] = bDM;
				if (!!ce[2]) {
					ce[5] = ce[2];
					ce[2] = bxi(ce[1], ce[2])
				}
				bc.value = ce
			}
		}, function (bc) {
			var ce = bc.value;
			if (!ce[0] || !bm.gj(ce[2]))
				return;
			if (!bm.gj(ce[5]))
				ce[5] = ce[2];
			ce[2] = ce[2].bh(ce[0])
		})
	}
	();
	bT.QD = bT.QD.ee(function (bc) {
			var ce = bc.args;
			if (!!ON[ce[1]] || !document.addEventListener) {
				bc.stopped = !0;
				ce[0].attachEvent("on" + ce[1], ce[2])
			}
		});
	bT.Hd = bT.Hd.ee(function (bc) {
			var ce = bc.args;
			if (!!ON[ce[1]] || !document.removeEventListener) {
				bc.stopped = !0;
				ce[0].detachEvent("on" + ce[1], ce[2])
			}
		});
	bT.QJ = bT.QJ.ee(function (bc) {
			if (!document.createEvent) {
				bc.stopped = !0;
				var ce = bc.args,
				Uz = document.createEventObject();
				NEJ.X(Uz, ce[2]);
				try {
					ce[0].fireEvent("on" + ce[1], Uz)
				} catch (ex) {
					console.error(ex.message);
					console.error(ex.stack)
				}
			}
		});
	bT.Jp = bT.Jp.ee(function (bc) {
			var ce = bc.args,
			bX = ce[1].toLowerCase();
			if (bX == "opacity" && !(bX in document.body.style)) {
				ce[1] = "filter";
				ce[2] = "alpha(opacity=" + ce[2] * 100 + ")"
			}
		});
	bT.Lc = function () {
		var hc = 30;
		return bT.Lc.ee(function (bc) {
			var bD = bc.args[0];
			if (!bD.styleSheet)
				return;
			bc.stopped = !0;
			var iq = bc.args[1];
			var bk = document.styleSheets;
			if (bk.length > hc) {
				bD = bk[hc];
				iq = bD.cssText + iq
			} else {
				bD = bD.styleSheet
			}
			bD.cssText = iq
		})
	}
	();
	bT.Lj = bT.Lj.ee(function (bc) {
			var ce = bc.args,
			biZ = ce[0].sheet;
			if (!!biZ)
				return;
			bc.stopped = !0;
			var biZ = ce[0].styleSheet,
			ck = biZ.rules.length,
			cK = ce[1].split(/[\{\}]/);
			biZ.addRule(cK[0], cK[1], ck);
			bc.value = biZ.rules[ck]
		});
	bT.Ms = function () {
		var tx = function (dZ, bc) {
			Fp.bR(bj.cf(bc), dZ)
		};
		return bT.Ms.ee(function (bc) {
			if (bv.dp.release >= "4.0")
				return;
			var ce = bc.args;
			if (ce[1] != 1) {
				bj.bs(ce[0], "blur", tx.bh(null, ce[2]));
				ce[1] = -1
			}
		})
	}
	();
	bT.GY = function (GT) {
		return !0
	};
	bT.Mr = bT.Mr.ee(function (bc) {
			var ce = bc.args,
			bid = (ce[0].attributes || bZ)[ce[1]];
			if (!!bid) {
				bc.stopped = !0;
				bc.value = bid.value
			}
		}, function (bc) {
			var ce = bc.args;
			if (ce[1] == "maxlength" && bc.value == 2147483647)
				bc.value = ""
		});
	if (bv.dp.release < 5) {
		bT.Pu = function () {
			var fu,
			fe,
			gw = [],
			Rl = "cb-" +  + (new Date),
			ci = '<script>parent.nej.h["' + Rl + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
			var UA = function () {
				fu = window.clearTimeout(fu);
				if (!gw.length)
					return;
				var bLw = gw.shift();
				try {
					var pB = fe.contentWindow.document;
					pB.open();
					pB.write("<head><title>");
					pB.write(document.title);
					pB.write("</title>");
					pB.write(ci.replace("#<HASH>", encodeURIComponent(bLw)));
					pB.write("</head><body></body>");
					if (location.hostname != document.domain)
						pB.domain = document.domain;
					pB.close();
					bT[Rl] = !1
				} catch (ex) {
					console.log(ex.message || ex);
					gw.unshift(bLw)
				}
				fu = window.setTimeout(UA, 50)
			};
			return bT.Pu.ee(function (bc) {
				bc.stopped = !0;
				var bLw = bc.args[0];
				if (!!bT[Rl] || !fe && !bLw)
					return;
				gw.push(bLw);
				if (!fe)
					fe = Fp.GG();
				UA()
			})
		}
		()
	}
	try {
		document.execCommand("BackgroundImageCache", !1, !0)
	} catch (e) {}

})();
(function () {
	var be = NEJ.P,
	bj = be("nej.v"),
	bT = be("nej.h"),
	bv = be("nej.p"),
	UD = bv.Th;
	if (bv.jN.gecko)
		return;
	var Ds = function () {
		UD.css3d = UD.css3d || "MozPerspective" in document.body.style;
		if (!document.body.insertAdjacentElement)
			HTMLElement.prototype.insertAdjacentElement = function (UF, bD) {
				if (!UF || !bD)
					return;
				switch (UF) {
				case "beforeEnd":
					this.appendChild(bD);
					return;
				case "beforeBegin":
					this.parentNode.insertBefore(bD, this);
					return;
				case "afterBegin":
					!this.firstChild ? this.appendChild(bD) : this.insertBefore(bD, this.firstChild);
					return;
				case "afterEnd":
					!this.nextSibling ? this.parentNode.appendChild(bD) : this.parentNode.insertBefore(bD, this.nextSibling);
					return
				}
			};
		if (!("innerText" in document.body)) {
			HTMLElement.prototype["__defineGetter__"]("innerText", function () {
				return this.textContent
			});
			HTMLElement.prototype["__defineSetter__"]("innerText", function (ci) {
				this.textContent = ci
			})
		}
	};
	bT.sP = function () {
		var fg = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
		return bT.sP.ee(function (bc) {
			var ce = bc.args;
			if (fg.test(ce[1] || "")) {
				bc.stopped = !0;
				bc.value = ce
			}
		})
	}
	();
	bT.bxx = function () {
		var bwV = function (bc) {
			bj.cu(bc);
			bj.cf(bc).control.click()
		};
		return function (bD) {
			bj.bs(bD, "click", bwV)
		}
	}
	();
	Ds()
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bT = be("nej.h");
	var Gz = function () {
		var nL = !!document.body.classList;
		return function () {
			return nL
		}
	}
	();
	var UH = function () {
		var dq = /\s+/g;
		return function (ed) {
			ed = (ed || "").trim();
			return !ed ? null : new RegExp("(\\s|^)(?:" + ed.replace(dq, "|") + ")(?=\\s|$)", "g")
		}
	}
	();
	bT.CY = bT.CY.ee(function (bc) {
			if (Gz())
				return;
			bc.stopped = !0;
			var ce = bc.args,
			bD = Fp.bw(ce[0]);
			if (!bD || !ce[1] && !ce[2])
				return;
			var ed = bD.className || "";
			var xg = " " + (ce[2] || ""),
			xs = UH((ce[1] || "") + xg);
			!!xs && (ed = ed.replace(xs, "$1"));
			bD.className = (ed + xg).replace(/\s+/g, " ").trim()
		});
	bT.Ji = bT.Ji.ee(function (bc) {
			if (Gz())
				return;
			bc.stopped = !0;
			var ce = bc.args;
			bT.CY(ce[0], "", ce[1])
		});
	bT.JX = bT.JX.ee(function (bc) {
			if (Gz())
				return;
			bc.stopped = !0;
			var ce = bc.args;
			bT.CY(ce[0], ce[1], "")
		});
	bT.Kz = bT.Kz.ee(function (bc) {
			if (Gz())
				return;
			bc.stopped = !0;
			var ce = bc.args,
			bD = Fp.bw(ce[0]);
			if (!bD) {
				bc.value = !1;
				return
			}
			var dq = UH(ce[1]);
			bc.value = !dq ? !1 : dq.test(bD.className || "")
		})
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.p"),
	bT = be("nej.h");
	if (bv.jN.webkit)
		return;
	bT.GY = function (GT) {
		return !0
	}
})();
(function () {
	var be = NEJ.P,
	bT = be("nej.h"),
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	dr = be("nej.x"),
	bW = {};
	var UI = function (bD) {
		bD = Fp.bw(bD);
		if (!bD || !bW[bD.id])
			return;
		var UL = !0,
		bC = bD.id;
		bm.eJ(bW[bC], function () {
			UL = !1;
			return !0
		});
		if (UL)
			delete bW[bC]
	};
	bj.bs = dr.bs = function () {
		var bwP = function () {
			var ce = bT.sP.apply(bT, arguments);
			if (!ce || !ce[2])
				return;
			var ob = Fp.ik(ce[0]),
			kL = bW[ob] || {};
			bW[ob] = kL;
			ob = ce[4] || ce[1];
			var hx = kL[ob] || [];
			kL[ob] = hx;
			hx.push({
				type : ce[1],
				func : ce[2],
				capt : !!ce[3],
				sfun : ce[5] || ce[2]
			});
			return ce.slice(0, 4)
		};
		return function () {
			var ce = bwP.apply(null, arguments);
			if (!!ce)
				bT.QD.apply(bT, ce);
			return this
		}
	}
	();
	bj.nt = dr.nt = function () {
		var bwO = function () {
			var pX = arguments,
			ob = Fp.ik(pX[0]),
			kL = bW[ob],
			bDM = (pX[1] || "").toLowerCase(),
			bc = pX[2];
			if (!kL || !bDM || !bc)
				return;
			kL = kL[bDM];
			if (!kL)
				return;
			var bwN = !!pX[3],
			bu = bm.dY(kL, function (gR) {
					return bc == gR.sfun && bwN == gR.capt
				});
			if (bu < 0)
				return;
			var gR = kL.splice(bu, 1)[0];
			return !gR ? null : [Fp.bw(ob), gR.type, gR.func, gR.capt]
		};
		return function () {
			var ce = bwO.apply(null, arguments);
			if (!!ce) {
				bT.Hd.apply(bT, ce);
				UI(ce[0])
			}
			return this
		}
	}
	();
	bj.kB = dr.kB = function () {
		var UM = function () {
			var pX = arguments,
			ob = Fp.ik(pX[0]),
			kL = bW[ob],
			hx = (pX[1] || "").toLowerCase();
			if (!kL || !hx)
				return;
			var bD = Fp.bw(ob);
			bm.kx(kL[hx], function (gR, bu, bk) {
				bT.Hd(bD, gR.type, gR.func, gR.capt);
				bk.splice(bu, 1)
			});
			delete kL[hx]
		};
		var bwL = function (bD) {
			bD = Fp.bw(bD);
			if (!bD)
				return;
			var bC = bD.id;
			bm.eJ(bW[bC], function (bk, bDM) {
				UM(bC, bDM)
			});
			delete bW[bC]
		};
		return function (bD, bDM) {
			!bDM ? bwL(bD) : UM(bD, bDM);
			UI(bD);
			return this
		}
	}
	();
	bj.cf = function () {
		var Lo;
		var wD = function (bX, bD) {
			var cK = bX.split(":");
			if (cK.length > 1) {
				if (!Lo)
					Lo = {
						c : Fp.cJ,
						d : Fp.bI,
						a : Fp.gK
					};
				var Gp = Lo[cK[0]];
				if (!!Gp)
					return !!Gp(bD, cK[1]);
				bX = cK[1]
			}
			return !!Fp.gK(bD, bX) || !!Fp.bI(bD, bX) || Fp.cJ(bD, bX)
		};
		return function (bc) {
			if (!bc)
				return null;
			var bD = bc.target || bc.srcElement,
			eg = arguments[1];
			if (!eg)
				return bD;
			if (bm.fX(eg))
				eg = wD.bh(null, eg);
			if (bm.gj(eg)) {
				while (bD) {
					if (!!eg(bD))
						return bD;
					bD = bD.parentNode
				}
				return null
			}
			return bD
		}
	}
	();
	bj.cu = function (bc) {
		bj.lg(bc);
		bj.cG(bc);
		return this
	};
	bj.lg = function (bc) {
		if (!!bc) {
			!!bc.stopPropagation ? bc.stopPropagation() : bc.cancelBubble = !0
		}
		return this
	};
	bj.cG = function (bc) {
		if (!!bc) {
			!!bc.preventDefault ? bc.preventDefault() : bc.returnValue = !1
		}
		return this
	};
	bj.bxL = function () {
		var kb = !1;
		var bwJ = function () {
			if (kb)
				return;
			kb = !0;
			bj.bs(document, "click", bwI, !0)
		};
		var bwI = function (bc) {
			var bD = bj.cf(bc),
			bwH = Fp.bI(bD, "stopped");
			if (bwH == "true") {
				bj.cu(bc);
				Fp.bI(bD, "stopped", "false")
			}
		};
		return function (bc) {
			if (!bc)
				return;
			if (bc.type == "click") {
				bj.cu(bc);
				return
			}
			bwJ();
			Fp.bI(bj.cf(bc), "stopped", "true")
		}
	}
	();
	bj.lB = function (bc) {
		return bc.pageX != null ? bc.pageX : bc.clientX + Fp.mW().scrollLeft
	};
	bj.oj = function (bc) {
		return bc.pageY != null ? bc.pageY : bc.clientY + Fp.mW().scrollTop
	};
	bj.bG = dr.bG = function (bD, bDM, bf) {
		var ce = bT.sP(bD, bDM);
		if (!!ce)
			bT.QJ(ce[0], ce[1], bf);
		return this
	};
	be("dbg").dumpEV = function () {
		return bW
	};
	dr.isChange = !0
})();
(function () {
	var o = !0,
	w = null;
	(function (B) {
		function v(a) {
			if ("bug-string-char-index" == a)
				return "a" != "a"[0];
			var f,
			c = "json" == a;
			if (c || "json-stringify" == a || "json-parse" == a) {
				if ("json-stringify" == a || c) {
					var d = k.stringify,
					b = "function" == typeof d && l;
					if (b) {
						(f = function () {
							return 1
						}).toJSON = f;
						try {
							b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
									a : [f, o, !1, w, "\0\b\n\f\r\t"]
								}) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
						} catch (n) {
							b = !1
						}
					}
					if (!c)
						return b
				}
				if ("json-parse" == a || c) {
					a = k.parse;
					if ("function" == typeof a)
						try {
							if (0 === a("0") && !a(!1)) {
								f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
								var e = 5 == f.a.length && 1 === f.a[0];
								if (e) {
									try {
										e = !a('"\t"')
									} catch (g) {}

									if (e)
										try {
											e = 1 !== a("01")
										} catch (i) {}

								}
							}
						} catch (O) {
							e = !1
						}
					if (!c)
						return e
				}
				return b && e
			}
		}
		var m = {}

		.toString,
		p,
		C,
		r,
		D = typeof define === "function" && define.amd,
		k = "object" == typeof exports && exports;
		k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
		var l = new Date(-0xc782b5b800cec);
		try {
			l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
		} catch (P) {}

		if (!v("json")) {
			var s = v("bug-string-char-index");
			if (!l)
				var t = Math.floor, J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], z = function (a, f) {
					return J[f] + 365 * (a - 1970) + t((a - 1969 + (f =  + (f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
				};
			if (!(p = {}

					.hasOwnProperty))
				p = function (a) {
					var f = {},
					c;
					if ((f.__proto__ = w, f.__proto__ = {
								toString : 1
							}, f).toString != m)
						p = function (a) {
							var f = this.__proto__,
							a = a in(this.__proto__ = w, this);
							this.__proto__ = f;
							return a
						};
					else {
						c = f.constructor;
						p = function (a) {
							var f = (this.constructor || c).prototype;
							return a in this && !(a in f && this[a] === f[a])
						}
					}
					f = w;
					return p.call(this, a)
				};
			var K = {
				"boolean" : 1,
				number : 1,
				string : 1,
				"undefined" : 1
			};
			C = function (a, f) {
				var c = 0,
				b,
				h,
				n;
				(b = function () {
					this.valueOf = 0
				}).prototype.valueOf = 0;
				h = new b;
				for (n in h)
					p.call(h, n) && c++;
				b = h = w;
				if (c)
					c = c == 2 ? function (a, f) {
						var c = {},
						b = m.call(a) == "[object Function]",
						d;
						for (d in a)
							!(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
					}
				 : function (a, f) {
					var c = m.call(a) == "[object Function]",
					b,
					d;
					for (b in a)
						!(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
					(d || p.call(a, b = "constructor")) && f(b)
				};
				else {
					h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
					c = function (a, f) {
						var c = m.call(a) == "[object Function]",
						b,
						d;
						if (d = !c)
							if (d = typeof a.constructor != "function") {
								d = typeof a.hasOwnProperty;
								d = d == "object" ? !!a.hasOwnProperty : !K[d]
							}
						d = d ? a.hasOwnProperty : p;
						for (b in a)
							!(c && b == "prototype") && d.call(a, b) && f(b);
						for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
					}
				}
				c(a, f)
			};
			if (!v("json-stringify")) {
				var L = {
					92 : "\\\\",
					34 : '\\"',
					8 : "\\b",
					12 : "\\f",
					10 : "\\n",
					13 : "\\r",
					9 : "\\t"
				},
				u = function (a, f) {
					return ("000000" + (f || 0)).slice(-a)
				},
				G = function (a) {
					var f = '"',
					b = 0,
					d = a.length,
					h = d > 10 && s,
					n;
					for (h && (n = a.split("")); b < d; b++) {
						var e = a.charCodeAt(b);
						switch (e) {
						case 8:
						case 9:
						case 10:
						case 12:
						case 13:
						case 34:
						case 92:
							f = f + L[e];
							break;
						default:
							if (e < 32) {
								f = f + ("\\u00" + u(2, e.toString(16)));
								break
							}
							f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
						}
					}
					return f + '"'
				},
				E = function (a, b, c, d, h, n, e) {
					var g = b[a],
					i,
					j,
					k,
					l,
					q,
					s,
					v,
					x,
					y;
					try {
						g = b[a]
					} catch (A) {}

					if (typeof g == "object" && g) {
						i = m.call(g);
						if (i == "[object Date]" && !p.call(g, "toJSON"))
							if (g > -1 / 0 && g < 1 / 0) {
								if (z) {
									k = t(g / 864e5);
									for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
									for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
									k = 1 + k - z(i, j);
									l = (g % 864e5 + 864e5) % 864e5;
									q = t(l / 36e5) % 24;
									s = t(l / 6e4) % 60;
									v = t(l / 1e3) % 60;
									l = l % 1e3
								} else {
									i = g.getUTCFullYear();
									j = g.getUTCMonth();
									k = g.getUTCDate();
									q = g.getUTCHours();
									s = g.getUTCMinutes();
									v = g.getUTCSeconds();
									l = g.getUTCMilliseconds()
								}
								g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
							} else
								g = w;
						else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON")))
							g = g.toJSON(a)
					}
					c && (g = c.call(b, a, g));
					if (g === w)
						return "null";
					i = m.call(g);
					if (i == "[object Boolean]")
						return "" + g;
					if (i == "[object Number]")
						return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
					if (i == "[object String]")
						return G("" + g);
					if (typeof g == "object") {
						for (a = e.length; a--; )
							if (e[a] === g)
								throw TypeError();
						e.push(g);
						x = [];
						b = n;
						n = n + h;
						if (i == "[object Array]") {
							j = 0;
							for (a = g.length; j < a; y || (y = o), j++) {
								i = E(j, g, c, d, h, n, e);
								x.push(i === r ? "null" : i)
							}
							a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
						} else {
							C(d || g, function (a) {
								var b = E(a, g, c, d, h, n, e);
								b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
								y || (y = o)
							});
							a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
						}
						e.pop();
						return a
					}
				};
				k.stringify = function (a, b, c) {
					var d,
					h,
					j;
					if (typeof b == "function" || typeof b == "object" && b)
						if (m.call(b) == "[object Function]")
							h = b;
						else if (m.call(b) == "[object Array]") {
							j = {};
							for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
						}
					if (c)
						if (m.call(c) == "[object Number]") {
							if ((c = c - c % 1) > 0) {
								d = "";
								for (c > 10 && (c = 10); d.length < c; d = d + " ");
							}
						} else
							m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
					return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
				}
			}
			if (!v("json-parse")) {
				var M = String.fromCharCode,
				N = {
					92 : "\\",
					34 : '"',
					47 : "/",
					98 : "\b",
					116 : "\t",
					110 : "\n",
					102 : "\f",
					114 : "\r"
				},
				b,
				A,
				j = function () {
					b = A = w;
					throw SyntaxError()
				},
				q = function () {
					for (var a = A, f = a.length, c, d, h, k, e; b < f; ) {
						e = a.charCodeAt(b);
						switch (e) {
						case 9:
						case 10:
						case 13:
						case 32:
							b++;
							break;
						case 123:
						case 125:
						case 91:
						case 93:
						case 58:
						case 44:
							c = s ? a.charAt(b) : a[b];
							b++;
							return c;
						case 34:
							c = "@";
							for (b++; b < f; ) {
								e = a.charCodeAt(b);
								if (e < 32)
									j();
								else if (e == 92) {
									e = a.charCodeAt(++b);
									switch (e) {
									case 92:
									case 34:
									case 47:
									case 98:
									case 116:
									case 110:
									case 102:
									case 114:
										c = c + N[e];
										b++;
										break;
									case 117:
										d = ++b;
										for (h = b + 4; b < h; b++) {
											e = a.charCodeAt(b);
											e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
										}
										c = c + M("0x" + a.slice(d, b));
										break;
									default:
										j()
									}
								} else {
									if (e == 34)
										break;
									e = a.charCodeAt(b);
									for (d = b; e >= 32 && e != 92 && e != 34; )
										e = a.charCodeAt(++b);
									c = c + a.slice(d, b)
								}
							}
							if (a.charCodeAt(b) == 34) {
								b++;
								return c
							}
							j();
						default:
							d = b;
							if (e == 45) {
								k = o;
								e = a.charCodeAt(++b)
							}
							if (e >= 48 && e <= 57) {
								for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
								if (a.charCodeAt(b) == 46) {
									for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
									h == b && j();
									b = h
								}
								e = a.charCodeAt(b);
								if (e == 101 || e == 69) {
									e = a.charCodeAt(++b);
									(e == 43 || e == 45) && b++;
									for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
									h == b && j();
									b = h
								}
								return +a.slice(d, b)
							}
							k && j();
							if (a.slice(b, b + 4) == "true") {
								b = b + 4;
								return o
							}
							if (a.slice(b, b + 5) == "false") {
								b = b + 5;
								return false
							}
							if (a.slice(b, b + 4) == "null") {
								b = b + 4;
								return w
							}
							j()
						}
					}
					return "$"
				},
				F = function (a) {
					var b,
					c;
					a == "$" && j();
					if (typeof a == "string") {
						if ((s ? a.charAt(0) : a[0]) == "@")
							return a.slice(1);
						if (a == "[") {
							for (b = []; ; c || (c = o)) {
								a = q();
								if (a == "]")
									break;
								if (c)
									if (a == ",") {
										a = q();
										a == "]" && j()
									} else
										j();
								a == "," && j();
								b.push(F(a))
							}
							return b
						}
						if (a == "{") {
							for (b = {}; ; c || (c = o)) {
								a = q();
								if (a == "}")
									break;
								if (c)
									if (a == ",") {
										a = q();
										a == "}" && j()
									} else
										j();
								(a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
								b[a.slice(1)] = F(q())
							}
							return b
						}
						j()
					}
					return a
				},
				I = function (a, b, c) {
					c = H(a, b, c);
					c === r ? delete a[b] : a[b] = c
				},
				H = function (a, b, c) {
					var d = a[b],
					h;
					if (typeof d == "object" && d)
						if (m.call(d) == "[object Array]")
							for (h = d.length; h--; )
								I(d, h, c);
						else
							C(d, function (a) {
								I(d, a, c)
							});
					return c.call(a, b, d)
				};
				k.parse = function (a, f) {
					var c,
					d;
					b = 0;
					A = "" + a;
					c = F(q());
					q() != "$" && j();
					b = A = w;
					return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
				}
			}
		}
		D && define(function () {
			return k
		})
	})(this)
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.p");
	if (bv.jN.trident0)
		return;
	JSON.parse = JSON.parse.ee(function (bc) {
			var dL = bc.args[0] || "";
			if (dL.length >= 5e5) {
				bc.stopped = !0;
				bc.value = eval("(" + dL + ")")
			}
		})
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	eL = be("nej.g"),
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	bT = be("nej.h"),
	dr = be("nej.x"),
	wL,
	OC = {},
	bW = document.createDocumentFragment();
	Fp.ik = dr.ik = function (bD) {
		bD = Fp.bw(bD);
		if (!bD)
			return;
		var bC = !!bD.id ? bD.id : "auto-id-" + bm.UN(16);
		bD.id = bC;
		if (Fp.bw(bC) != bD)
			OC[bC] = bD;
		return bC
	};
	Fp.bw = dr.bw = function (bD) {
		var bid = OC["" + bD];
		if (!!bid)
			return bid;
		if (!bm.fX(bD) && !bm.pu(bD))
			return bD;
		return document.getElementById(bD)
	};
	Fp.dh = dr.dh = function (bD, dZ) {
		bD = Fp.bw(bD);
		if (!bD)
			return null;
		var bk = bT.Rp(bD);
		if (!!dZ)
			bm.kx(bk, function (bid, bu) {
				if (!Fp.cJ(bid, dZ))
					bk.splice(bu, 1)
			});
		return bk
	};
	Fp.bP = dr.bP = function (bD, ed) {
		bD = Fp.bw(bD);
		return !bD ? null : bT.RC(bD, ed.trim())
	};
	Fp.UO = dr.UO = function (bD) {
		bD = Fp.bw(bD);
		if (!!bD) {
			bD = bD.parentNode;
			while (!!bD) {
				if (bD.scrollHeight > bD.clientHeight)
					break;
				bD = bD.parentNode
			}
			if (!!bD)
				return bD
		}
		var kL = document.body.scrollHeight,
		hx = document.documentElement.scrollHeight;
		return hx >= kL ? document.documentElement : document.body
	};
	Fp.mW = function () {
		var UP = function (bk) {
			var bn = 0;
			bm.bLt(bk, function (gX) {
				if (!gX)
					return;
				if (!bn) {
					bn = gX
				} else {
					bn = Math.min(bn, gX)
				}
			});
			return bn
		};
		return function (pB) {
			var UQ = pB || document,
			rj = UQ.body,
			rq = UQ.documentElement,
			bn = {
				scrollTop : Math.max(rj.scrollTop, rq.scrollTop),
				scrollLeft : Math.max(rj.scrollLeft, rq.scrollLeft),
				clientWidth : UP([rj.clientWidth, rj.offsetWidth, rq.clientWidth, rq.offsetWidth]),
				clientHeight : UP([rj.clientHeight, rj.offsetHeight, rq.clientHeight, rq.offsetHeight])
			};
			bn.scrollWidth = Math.max(bn.clientWidth, rj.scrollWidth, rq.scrollWidth);
			bn.scrollHeight = Math.max(bn.clientHeight, rj.scrollHeight, rq.scrollHeight);
			return bn
		}
	}
	();
	Fp.bxM = function (hc, kq) {
		var bn = NEJ.X({}, kq),
		US = hc.width / hc.height,
		Gf = kq.width / kq.height;
		if (US > Gf && kq.height > hc.height) {
			bn.height = hc.height;
			bn.width = bn.height * Gf
		}
		if (US < Gf && kq.width > hc.width) {
			bn.width = hc.width;
			bn.height = bn.width / Gf
		}
		return bn
	};
	Fp.bxQ = function () {
		var dq = /\s+/;
		var ow = {
			left : function () {
				return 0
			},
			center : function (kV, kq) {
				return (kV.width - kq.width) / 2
			},
			right : function (kV, kq) {
				return kV.width - kq.width
			},
			top : function () {
				return 0
			},
			middle : function (kV, kq) {
				return (kV.height - kq.height) / 2
			},
			bottom : function (kV, kq) {
				return kV.height - kq.height
			}
		};
		return function (kV, kq, kk) {
			var bn = {},
			cK = (kk || "").split(dq),
			bim = ow[cK[1]] || ow.middle,
			ox = ow[cK[0]] || ow.center;
			bn.top = bim(kV, kq);
			bn.left = ox(kV, kq);
			return bn
		}
	}
	();
	Fp.jK = dr.jK = function (bD, dZ) {
		bT.Ln(bD, dZ || Fp.bI(bD, "hover") || "js-hover");
		return this
	};
	Fp.Cy = dr.Cy = function (bD) {
		bD = Fp.bw(bD);
		if (!bD)
			return;
		bT.Lp(bD)
	};
	Fp.bww = dr.bww = function () {
		var bW = {},
		UV = 2;
		var bwr = function (bC, dZ, bc) {
			bW[bC] = [bj.lB(bc), bj.oj(bc)];
			Fp.bV(bC, dZ)
		};
		var bwq = function (bC, dZ, bc) {
			var hp = bW[bC];
			if (!bm.fz(hp))
				return;
			var bwm = Math.abs(bj.lB(bc) - hp[0]),
			bwl = Math.abs(bj.oj(bc) - hp[1]);
			if (bwm > UV || bwl > UV)
				Jb(bC, dZ)
		};
		var Jb = function (bC, dZ) {
			if (bm.fz(bW[bC])) {
				bW[bC] = -1;
				Fp.bR(bC, dZ)
			}
		};
		return function (bD, dZ) {
			var bC = Fp.ik(bD);
			if (!bC || bW[bC] != null)
				return;
			bW[bC] = -1;
			dZ = dZ || Fp.bI(bC, "highlight") || "js-highlight";
			bj.bs(bC, "touchstart", bwr.bh(null, bC, dZ));
			bj.bs(document, "touchmove", bwq.bh(null, bC, dZ));
			bj.bs(document, "touchend", Jb.bh(null, bC, dZ));
			bj.bs(document, "touchcancel", Jb.bh(null, bC, dZ))
		}
	}
	();
	Fp.mR = dr.mR = function () {
		var bwk = function (bC, dZ, bwj) {
			var bD = Fp.bw(bC),
			bc = {
				clazz : dZ,
				target : bD
			};
			if (Fp.cJ(bD, dZ)) {
				bc.toggled = !1;
				Fp.bR(bD, dZ)
			} else {
				bc.toggled = !0;
				Fp.bV(bD, dZ)
			}
			bwj.call(null, bc)
		};
		return function (bD, bf) {
			bD = Fp.bw(bD);
			if (!!bD) {
				var hw = {
					ontoggle : co,
					clazz : "js-toggle",
					element : bD.parentNode
				};
				if (bm.fX(bf)) {
					var bid = Fp.bw(bf);
					!!bid ? hw.element = bid : hw.clazz = bf
				} else {
					NEJ.EX(hw, bf);
					hw.element = Fp.bw(hw.element)
				}
				var bC = Fp.ik(hw.element);
				bj.bs(bD, "click", bwk.bh(null, bC, hw.clazz, hw.ontoggle || co))
			}
			return this
		}
	}
	();
	Fp.jq = dr.jq = function (bD, bf) {
		bD = Fp.bw(bD);
		if (!bD)
			return;
		var eU = 0,
		dZ = "js-focus";
		if (bm.pu(bf)) {
			eU = bf
		} else if (bm.fX(bf)) {
			dZ = bf
		} else if (bm.bLC(bf)) {
			eU = bf.mode || eU;
			dZ = bf.clazz || dZ
		}
		var bz = parseInt(Fp.bI(bD, "mode"));
		if (!isNaN(bz))
			eU = bz;
		bz = Fp.bI(bD, "focus");
		if (!!bz)
			dZ = bz;
		bT.Ms(bD, eU, dZ);
		return this
	};
	Fp.gH = function () {
		var bLs = {
			a : {
				href : "#",
				hideFocus : !0
			},
			style : {
				type : "text/css"
			},
			link : {
				type : "text/css",
				rel : "stylesheet"
			},
			iframe : {
				frameBorder : 0
			},
			script : {
				defer : !0,
				type : "text/javascript"
			}
		};
		return function (lc, ed, cU) {
			var bD = document.createElement(lc);
			NEJ.X(bD, bLs[lc.toLowerCase()]);
			if (!!ed)
				bD.className = ed;
			cU = Fp.bw(cU);
			if (!!cU)
				cU.appendChild(bD);
			return bD
		}
	}
	();
	Fp.GG = function () {
		var bwh = function () {
			if (location.hostname == document.domain)
				return "about:blank";
			return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
		};
		var bwg = function (bX) {
			bX = bX.trim();
			if (!bX)
				return Fp.gH("iframe");
			var fe;
			try {
				fe = document.createElement('<iframe name="' + bX + '"></iframe>');
				fe.frameBorder = 0
			} catch (e) {
				fe = Fp.gH("iframe");
				fe.name = bX
			}
			return fe
		};
		return function (bf) {
			bf = bf || bZ;
			var fe = bwg(bf.name || "");
			if (!bf.visible)
				fe.style.display = "none";
			if (bm.gj(bf.onload))
				bj.bs(fe, "load", function (bc) {
					if (!fe.src)
						return;
					bj.kB(fe, "load");
					bf.onload(bc)
				});
			var cU = bf.parent;
			if (bm.gj(cU)) {
				try {
					cU(fe)
				} catch (e) {}

			} else {
				(Fp.bw(cU) || document.body).appendChild(fe)
			}
			var dW = bf.src || bwh();
			window.setTimeout(function () {
				fe.src = dW
			}, 0);
			return fe
		}
	}
	();
	Fp.fx = dr.fx = function () {
		var Va = function (Cv) {
			Cv.src = eL.Md
		};
		var Vc = function (mT) {
			mT.src = "about:blank"
		};
		return function (bD, bwb) {
			bD = Fp.bw(bD);
			if (!bD)
				return this;
			if (!bwb)
				bj.kB(bD);
			delete OC[bD.id];
			var lc = bD.tagName;
			if (lc == "IFRAME") {
				Vc(bD)
			} else if (lc == "IMG") {
				Va(bD)
			} else if (!!bD.getElementsByTagName) {
				bm.bLt(bD.getElementsByTagName("img"), Va);
				bm.bLt(bD.getElementsByTagName("iframe"), Vc)
			}
			if (!!bD.parentNode) {
				bD.parentNode.removeChild(bD)
			}
			return this
		}
	}
	();
	Fp.mH = dr.mH = function (bD) {
		bD = Fp.bw(bD);
		if (!!bD)
			bW.appendChild(bD);
		return this
	};
	Fp.Vp = dr.Vp = function (bD) {
		bD = Fp.bw(bD);
		if (!bD)
			return;
		bm.kx(bD.childNodes, function (bid) {
			Fp.fx(bid)
		})
	};
	Fp.xf = dr.xf = function () {
		var dZ,
		fg = /\s+/;
		var bvV = function () {
			if (!!dZ)
				return;
			dZ = Fp.oR(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
			Fp.Vs()
		};
		return function (bD, bf) {
			bD = Fp.bw(bD);
			if (!bD)
				return;
			bvV();
			bf = bf || bZ;
			var cU = bD.parentNode;
			if (!Fp.cJ(cU, dZ)) {
				cU = Fp.gH("span", dZ);
				bD.insertAdjacentElement("beforeBegin", cU);
				cU.appendChild(bD)
			}
			var Vt = bf.nid || "",
			bid = Fp.bP(cU, Vt || dZ + "-show")[0];
			if (!bid) {
				var cW = ((bf.clazz || "") + " " + Vt).trim();
				cW = dZ + "-show" + (!cW ? "" : " ") + cW;
				bid = Fp.gH(bf.tag || "span", cW);
				cU.appendChild(bid)
			}
			var cW = bf.clazz;
			if (!!cW) {
				cW = (cW || "").trim().split(fg)[0] + "-parent";
				Fp.bV(cU, cW)
			}
			return bid
		}
	}
	();
	Fp.bI = dr.bI = function () {
		var Lb = {},
		lc = "data-",
		dq = /\-(.{1})/gi;
		var tT = function (bD) {
			var bC = Fp.ik(bD);
			if (!!Lb[bC])
				return;
			var bLs = {};
			bm.bLt(bD.attributes, function (bid) {
				var bF = bid.nodeName;
				if (bF.indexOf(lc) != 0)
					return;
				bF = bF.replace(lc, "").replace(dq, function ($1, $2) {
						return $2.toUpperCase()
					});
				bLs[bF] = bid.nodeValue || ""
			});
			Lb[bC] = bLs
		};
		return function (bD, bF, bz) {
			bD = Fp.bw(bD);
			if (!bD)
				return null;
			var FG = bD.dataset;
			if (!FG) {
				tT(bD);
				FG = Lb[bD.id]
			}
			if (bz !== undefined)
				FG[bF] = bz;
			return FG[bF]
		}
	}
	();
	Fp.gK = dr.gK = function (bD, bX, bz) {
		bD = Fp.bw(bD);
		if (!bD)
			return "";
		if (bz !== undefined && !!bD.setAttribute)
			bD.setAttribute(bX, bz);
		return bT.Mr(bD, bX)
	};
	Fp.tU = function (fD) {
		var mU = document.createElement("div");
		mU.innerHTML = fD;
		var bk = Fp.dh(mU);
		return bk.length > 1 ? mU : bk[0]
	};
	Fp.bvQ = dr.bvQ = function (bD) {
		bD = Fp.bw(bD);
		return !bD ? "" : bT.NZ(bD)
	};
	Fp.Vu = function (rM) {
		rM = (rM || "").trim();
		return !rM ? null : bT.Om(rM)
	};
	Fp.bvO = function (fc, bDM) {
		fc = fc || "";
		switch (bDM) {
		case "xml":
			fc = Fp.Vu(fc);
			break;
		case "json":
			try {
				fc = JSON.parse(fc)
			} catch (ex) {
				fc = null
			}
			break
		}
		return fc
	};
	Fp.mV = dr.mV = function () {
		var bvM = function (bD) {
			return bD == document.body || bD == document.documentElement
		};
		return function (dz, km) {
			dz = Fp.bw(dz);
			if (!dz)
				return null;
			km = Fp.bw(km) || null;
			var bn = {
				x : 0,
				y : 0
			},
			Mp,
			dP,
			Fx;
			while (!!dz && dz != km) {
				Mp = bvM(dz);
				dP = Mp ? 0 : dz.scrollLeft;
				Fx = parseInt(Fp.bIU(dz, "borderLeftWidth")) || 0;
				bn.x += dz.offsetLeft + Fx - dP;
				dP = Mp ? 0 : dz.scrollTop;
				Fx = parseInt(Fp.bIU(dz, "borderTopWidth")) || 0;
				bn.y += dz.offsetTop + Fx - dP;
				dz = dz.offsetParent
			}
			return bn
		}
	}
	();
	Fp.oY = dr.oY = function (bD) {
		var cl = Fp.mV(bD);
		window.scrollTo(cl.x, cl.y);
		return this
	};
	Fp.bxS = function (nk) {
		nk = (nk || "").trim();
		return bT.TG(nk)
	};
	Fp.bvF = dr.bvF = function (bD, bX, bLs) {
		bD = Fp.bw(bD);
		if (!bD)
			return this;
		var bz = bT.Ue(bX, bLs);
		if (!bz)
			return this;
		Fp.bY(bD, "transform", bz);
		return this
	};
	Fp.pD = dr.pD = function (bD, bLs) {
		bD = Fp.bw(bD);
		if (!!bD)
			bm.eJ(bLs, function (bz, bX) {
				Fp.bY(bD, bX, bz)
			});
		return this
	};
	Fp.bvE = dr.bvE = function (eX, bf) {
		eX = Fp.bw(eX);
		if (!eX)
			return {
				start : 0,
				end : 0
			};
		if (bm.pu(bf))
			bf = {
				start : bf,
				end : bf
			};
		if (bf != null) {
			if (bf.end == null)
				bf.end = bf.start || 0;
			bT.LZ(eX, bf)
		} else {
			bf = bT.Mo(eX)
		}
		return bf
	};
	Fp.bY = dr.bY = function (bD, bX, bz) {
		bD = Fp.bw(bD);
		if (!!bD)
			bT.Jp(bD, bX, bz);
		return this
	};
	Fp.bIU = dr.bIU = function (bD, bX) {
		bD = Fp.bw(bD);
		if (!bD)
			return "";
		var bvD = !window.getComputedStyle ? bD.currentStyle || bZ : window.getComputedStyle(bD, null);
		return bvD[bT.Uf(bX)] || ""
	};
	Fp.VA = function () {
		var dq = /[\s\r\n]+/gi;
		return function (di) {
			di = (di || "").trim().replace(dq, " ");
			if (!di)
				return;
			var bid = Fp.gH("style");
			document.head.appendChild(bid);
			bT.Lc(bid, bT.bxo(di));
			return bid
		}
	}
	();
	Fp.VB = function (Fq) {
		try {
			Fq = Fq.trim();
			if (!!Fq)
				return (new Function(Fq))()
		} catch (ex) {
			console.error(ex.message);
			console.error(ex.stack)
		}
	};
	Fp.oR = function () {
		var dq = /#<.*?>/g,
		fi =  + (new Date);
		return function (iq) {
			if (!wL)
				wL = [];
			var ed = "auto-" + fi++;
			wL.push(iq.replace(dq, ed));
			return ed
		}
	}
	();
	Fp.Vs = function () {
		if (!!wL) {
			Fp.VA(wL.join(""));
			wL = null
		}
		return this
	};
	Fp.bxU = function (di, iq) {
		di = Fp.bw(di);
		return !di ? null : bT.Lj(di, iq)
	};
	Fp.bV = dr.bV = function () {
		bT.Ji.apply(bT, arguments);
		return this
	};
	Fp.bR = dr.bR = function () {
		bT.JX.apply(bT, arguments);
		return this
	};
	Fp.fC = dr.fC = function () {
		bT.CY.apply(bT, arguments);
		return this
	};
	Fp.cJ = dr.cJ = function () {
		return bT.Kz.apply(bT, arguments)
	};
	if (!document.head)
		document.head = document.getElementsByTagName("head")[0] || document.body;
	dr.isChange = !0
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	fP = NEJ.R,
	co = NEJ.F,
	Fp = be("nej.e"),
	bT = be("nej.h"),
	bm = be("nej.u");
	var tX = function (bl, bDM) {
		try {
			bDM = bDM.toLowerCase();
			if (bl === null)
				return bDM == "null";
			if (bl === undefined)
				return bDM == "undefined";
			return bZ.toString.call(bl).toLowerCase() == "[object " + bDM + "]"
		} catch (e) {
			return !1
		}
	};
	bm.gj = function (bl) {
		return tX(bl, "function")
	};
	bm.fX = function (bl) {
		return tX(bl, "string")
	};
	bm.pu = function (bl) {
		return tX(bl, "number")
	};
	bm.bxW = function (bl) {
		return tX(bl, "boolean")
	};
	bm.Fg = function (bl) {
		return tX(bl, "date")
	};
	bm.fz = function (bl) {
		return tX(bl, "array")
	};
	bm.bLC = function (bl) {
		return tX(bl, "object")
	};
	bm.lj = function () {
		var dq = /[^\x00-\xfff]/g;
		return function (ci) {
			return ("" + (ci || "")).replace(dq, "**").length
		}
	}
	();
	bm.dY = function (bk, bt) {
		var eg = bm.gj(bt) ? bt : function (bz) {
			return bz === bt
		},
		bu = bm.eJ(bk, eg);
		return bu != null ? bu : -1
	};
	bm.bxX = function () {
		var VM;
		var Cc = function (bk, tY, ud) {
			if (tY > ud)
				return -1;
			var BW = Math.ceil((tY + ud) / 2),
			bn = VM(bk[BW], BW, bk);
			if (bn == 0)
				return BW;
			if (bn < 0)
				return Cc(bk, tY, BW - 1);
			return Cc(bk, BW + 1, ud)
		};
		return function (bk, Gp) {
			VM = Gp || co;
			return Cc(bk, 0, bk.length - 1)
		}
	}
	();
	bm.kx = function (bk, fF, uj) {
		if (!bk || !bk.length || !bm.gj(fF))
			return null;
		for (var i = bk.length - 1; i >= 0; i--)
			if (!!fF.call(uj, bk[i], i, bk))
				return i;
		return null
	};
	bm.bLt = function (bk, fF, uj) {
		if (!bk || !bk.length || !bm.gj(fF))
			return this;
		if (!!bk.forEach) {
			bk.forEach(fF, uj);
			return this
		}
		for (var i = 0, l = bk.length; i < l; i++)
			fF.call(uj, bk[i], i, bk);
		return this
	};
	bm.eJ = function (bk, fF, uj) {
		if (!bk || !bm.gj(fF))
			return null;
		if (bk.length != null) {
			if (bk.length > 0)
				for (var i = 0, l = bk.length; i < l; i++)
					if (!!fF.call(uj, bk[i], i, bk))
						return i
		}
		if (bm.bLC(bk)) {
			for (var x in bk)
				if (bk.hasOwnProperty(x) && !!fF.call(uj, bk[x], x, bk))
					return x
		}
		return null
	};
	bm.bvd = function (hl, bvb, bf) {
		hl = hl || [];
		bf = bf || bZ;
		var VR = !!bf.union,
		pf = !!bf.begin,
		EI = bf.compare,
		buW = VR && pf ? bm.kx : bm.bLt;
		buW(bvb, function (bt) {
			if (!!EI)
				EI = EI.gz(bt);
			var bu = bm.dY(hl, EI || bt);
			if (bu >= 0)
				hl.splice(bu, 1);
			if (VR)
				hl[pf ? "unshift" : "push"](bt)
		});
		return hl
	};
	bm.BR = function (bLs, ci) {
		if (!bLs || !ci || !ci.replace)
			return ci || "";
		return ci.replace(bLs.r, function ($1) {
			var bn = bLs[!bLs.i ? $1.toLowerCase() : $1];
			return bn != null ? bn : $1
		})
	};
	bm.eZ = function () {
		var bLs = {
			r : /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
			"<" : "&lt;",
			">" : "&gt;",
			"&" : "&amp;",
			" " : "&nbsp;",
			'"' : "&quot;",
			"'" : "&#39;",
			"\n" : "<br/>",
			"\r" : "",
			"&lt;" : "&lt;",
			"&gt;" : "&gt;"
		};
		return function (ci) {
			return bm.BR(bLs, ci)
		}
	}
	();
	bm.bxY = function () {
		var bLs = {
			r : /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
			"&lt;" : "<",
			"&gt;" : ">",
			"&amp;" : "&",
			"&nbsp;" : " ",
			"&#39;" : "'",
			"&quot;" : '"',
			"<br/>" : "\n"
		};
		return function (ci) {
			return bm.BR(bLs, ci)
		}
	}
	();
	bm.sW = function () {
		var bLs = {
			i : !0,
			r : /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
		},
		buT = ["上午", "下午"],
		buS = ["A.M.", "P.M."],
		Qe = ["日", "一", "二", "三", "四", "五", "六"],
		buR = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
		buQ = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
		var BL = function (bJx) {
			bJx = parseInt(bJx) || 0;
			return (bJx < 10 ? "0" : "") + bJx
		};
		var buP = function (yr) {
			return yr < 12 ? 0 : 1
		};
		return function (cr, Ev, buO) {
			if (!cr || !Ev)
				return "";
			cr = bm.Rq(cr);
			bLs.yyyy = cr.getFullYear();
			bLs.yy = ("" + bLs.yyyy).substr(2);
			bLs.M = cr.getMonth() + 1;
			bLs.MM = BL(bLs.M);
			bLs.eM = buQ[bLs.M - 1];
			bLs.cM = buR[bLs.M - 1];
			bLs.d = cr.getDate();
			bLs.dd = BL(bLs.d);
			bLs.H = cr.getHours();
			bLs.HH = BL(bLs.H);
			bLs.m = cr.getMinutes();
			bLs.mm = BL(bLs.m);
			bLs.s = cr.getSeconds();
			bLs.ss = BL(bLs.s);
			bLs.ms = cr.getMilliseconds();
			bLs.w = Qe[cr.getDay()];
			var VU = buP(bLs.H);
			bLs.ct = buT[VU];
			bLs.et = buS[VU];
			if (!!buO) {
				bLs.H = bLs.H % 12
			}
			return bm.BR(bLs, Ev)
		}
	}
	();
	bm.Rq = function (cr) {
		var dJ = cr;
		if (bm.fX(cr))
			dJ = new Date(Date.parse(cr));
		if (!bm.Fg(cr))
			dJ = new Date(cr);
		return dJ
	};
	bm.Cy = function (buJ, buy) {
		return (new Number(buJ)).toFixed(buy)
	};
	bm.RZ = function () {
		var fg = /([^\/:])\/.*$/,
		hy = /\/[^\/]+$/,
		BD = /[#\?]/,
		Si = location.href.split(/[?#]/)[0],
		Su = document.createElement("a");
		var Sw = function (iY) {
			return (iY || "").indexOf("://") > 0
		};
		var We = function (iY) {
			return (iY || "").split(BD)[0].replace(hy, "/")
		};
		var buv = function (iY, gP) {
			if (iY.indexOf("/") == 0)
				return gP.replace(fg, "$1") + iY;
			return We(gP) + iY
		};
		Si = We(Si);
		return function (iY, gP) {
			iY = (iY || "").trim();
			if (!Sw(gP))
				gP = Si;
			if (!iY)
				return gP;
			if (Sw(iY))
				return iY;
			iY = buv(iY, gP);
			Su.href = iY;
			iY = Su.href;
			return Sw(iY) ? iY : Su.getAttribute("href", 4)
		}
	}
	();
	bm.buu = function () {
		var dq = /^([\w]+?:\/\/.*?(?=\/|$))/i;
		return function (cg) {
			if (dq.test(cg || ""))
				return RegExp.$1.toLowerCase();
			return ""
		}
	}
	();
	bm.Wf = function (tC, hw) {
		if (!tC)
			return hw;
		var bX = tC.tagName.toLowerCase(),
		bk = Fp.dh(tC);
		if (!bk || !bk.length) {
			hw[bX] = tC.textContent || tC.text || "";
			return hw
		}
		var eh = {};
		hw[bX] = eh;
		bm.bLt(bk, function (bid) {
			bm.Wf(bid, eh)
		});
		return hw
	};
	bm.byb = function (rM) {
		try {
			return bm.Wf(Fp.Vu(rM), {})
		} catch (ex) {
			return null
		}
	};
	bm.Wj = function (gp, BB) {
		var hw = {};
		bm.bLt((gp || "").split(BB), function (bX) {
			var Ej = bX.split("=");
			if (!Ej || !Ej.length)
				return;
			var bF = Ej.shift();
			if (!bF)
				return;
			hw[decodeURIComponent(bF)] = decodeURIComponent(Ej.join("="))
		});
		return hw
	};
	bm.vL = function (bLx, BB, buk) {
		if (!bLx)
			return "";
		var cK = [];
		for (var x in bLx) {
			cK.push(encodeURIComponent(x) + "=" + (!!buk ? encodeURIComponent(bLx[x]) : bLx[x]))
		}
		return cK.join(BB || ",")
	};
	bm.mk = function (cC) {
		return bm.Wj(cC, "&")
	};
	bm.eK = function (bLx) {
		return bm.vL(bLx, "&", !0)
	};
	bm.bye = function (bLx) {
		return bT.xe(bLx)
	};
	bm.byg = function (bk, eg) {
		var bn = {};
		bm.bLt(bk, function (bt) {
			var bF = bt;
			if (!!eg) {
				bF = eg(bt)
			}
			bn[bF] = bt
		});
		return bn
	};
	bm.byh = function (bJx, ft) {
		var btW = ("" + bJx).length,
		btV = Math.max(1, parseInt(ft) || 0),
		dP = btV - btW;
		if (dP > 0) {
			bJx = (new Array(dP + 1)).join("0") + bJx
		}
		return "" + bJx
	};
	bm.Ec = function (bLx, bX) {
		if (!bm.fz(bX)) {
			try {
				delete bLx[bX]
			} catch (e) {
				bLx[bX] = undefined
			}
			return this
		}
		bm.bLt(bX, bm.Ec.bh(bm, bLx));
		return this
	};
	bm.UN = function () {
		var Wu = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		return function (ck) {
			ck = ck || 10;
			var bn = [];
			for (var i = 0, Wv; i < ck; ++i) {
				Wv = Math.floor(Math.random() * Wu.length);
				bn.push(Wu.charAt(Wv))
			}
			return bn.join("")
		}
	}
	();
	bm.DZ = function (mS, hc) {
		return Math.floor(Math.random() * (hc - mS) + mS)
	};
	bm.nq = function (ck) {
		ck = Math.max(0, Math.min(ck || 8, 30));
		var mS = Math.pow(10, ck - 1),
		hc = mS * 10;
		return bm.DZ(mS, hc).toString()
	};
	bm.Kp = function () {
		var fi =  + (new Date);
		return function () {
			return "" + fi++
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	fP = NEJ.R,
	co = NEJ.F,
	bj = be("nej.v"),
	bm = be("nej.u"),
	bv = be("nej.ut"),
	kr;
	if (!!bv.eW)
		return;
	bv.eW = NEJ.C();
	kr = bv.eW.prototype;
	bv.eW.bL = function (bf) {
		bf = bf || {};
		var dx = !!this.Bv && this.Bv.shift();
		if (!dx) {
			dx = new this(bf);
			this.btQ = (this.btQ || 0) + 1
		}
		dx.cw(bf);
		return dx
	};
	bv.eW.ch = function () {
		var Bs = function (bt, bu, bk) {
			bt.ch();
			bk.splice(bu, 1)
		};
		return function (dx) {
			if (!dx)
				return null;
			if (!bm.fz(dx)) {
				if (!(dx instanceof this)) {
					var ed = dx.constructor;
					if (!!ed.ch)
						ed.ch(dx);
					return null
				}
				if (dx == this.fq)
					delete this.fq;
				if (dx == this.sC)
					delete this.sC;
				dx.cX();
				if (!this.Bv)
					this.Bv = [];
				if (bm.dY(this.Bv, dx) < 0) {
					this.Bv.push(dx)
				}
				return null
			}
			bm.kx(dx, Bs, this)
		}
	}
	();
	bv.eW.mh = function (bf) {
		bf = bf || {};
		if (!this.fq)
			this.fq = this.bL(bf);
		return this.fq
	};
	bv.eW.btO = function (bf, Lq) {
		bf = bf || {};
		if (!!Lq && !!this.sC) {
			this.sC.ch();
			delete this.sC
		}
		if (!this.sC) {
			this.sC = this.bL(bf)
		} else {
			this.sC.cw(bf)
		}
		return this.sC
	};
	kr.dv = function () {
		var fi =  + (new Date);
		return function () {
			this.id = fi++;
			this.iT = {};
			this.Wy = {}

		}
	}
	();
	kr.cw = function (bf) {
		this.LQ(bf)
	};
	kr.cX = function () {
		this.kB();
		this.btJ()
	};
	kr.dA = function () {
		var fi =  + (new Date);
		var btH = function (ce) {
			if (!ce || ce.length < 3)
				return;
			this.Wy["de-" + fi++] = ce;
			bj.bs.apply(bj, ce)
		};
		return function (bk) {
			bm.bLt(bk, btH, this)
		}
	}
	();
	kr.btJ = function () {
		var btG = function (ce, bF, bLs) {
			delete bLs[bF];
			bj.nt.apply(bj, ce)
		};
		return function () {
			bm.eJ(this.Wy, btG)
		}
	}
	();
	kr.byk = function (eg) {
		eg = eg || co;
		bm.eJ(this, function (uq, bF, bLs) {
			if (!!uq && !!uq.ch && !eg(uq)) {
				delete bLs[bF];
				uq.ch()
			}
		})
	};
	kr.ch = function () {
		this.constructor.ch(this)
	};
	kr.byl = function (bDM) {
		var bc = this.iT[bDM.toLowerCase()];
		return !!bc && bc !== co
	};
	kr.bs = function (bDM, bc) {
		this.us.apply(this, arguments);
		return this
	};
	kr.nt = function (bDM, bc) {
		var bDM = (bDM || "").toLowerCase(),
		ez = this.iT[bDM];
		if (!bm.fz(ez)) {
			if (ez == bc)
				delete this.iT[bDM];
			return
		}
		bm.kx(ez, function (lr, bu, bk) {
			if (lr == bc)
				bk.splice(bu, 1)
		})
	};
	kr.us = function (bDM, bc) {
		if (!!bDM && bm.gj(bc))
			this.iT[bDM.toLowerCase()] = bc;
		return this
	};
	kr.LQ = function () {
		var btz = function (bc, bDM) {
			this.us(bDM, bc)
		};
		return function (ez) {
			bm.eJ(ez, btz, this);
			return this
		}
	}
	();
	kr.kB = function () {
		var MB = function (bc, bDM) {
			this.kB(bDM)
		};
		return function (bDM) {
			var bDM = (bDM || "").toLowerCase();
			if (!!bDM) {
				delete this.iT[bDM]
			} else {
				bm.eJ(this.iT, MB, this)
			}
			return this
		}
	}
	();
	kr.btx = function (bDM, bc) {
		if (!bDM || !bm.gj(bc))
			return this;
		bDM = bDM.toLowerCase();
		var ez = this.iT[bDM];
		if (!ez) {
			this.iT[bDM] = bc;
			return this
		}
		if (!bm.fz(ez)) {
			this.iT[bDM] = [ez]
		}
		this.iT[bDM].push(bc);
		return this
	};
	kr.bG = function (bDM) {
		var bc = this.iT[(bDM || "").toLowerCase()];
		if (!bc)
			return this;
		var ce = fP.slice.call(arguments, 1);
		if (!bm.fz(bc))
			return bc.apply(this, ce);
		bm.bLt(bc, function (el) {
			try {
				el.apply(this, ce)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		}, this);
		return this
	};
	bv.Iu = function () {
		var bW = {};
		return function (bC, ed, bf) {
			var ff = ed.btw;
			if (!ff) {
				ff = bm.UN(10);
				ed.btw = ff
			}
			var bF = bC + "-" + ff,
			dx = bW[bF];
			if (!!bf && !dx) {
				dx = ed.bL(bf);
				dx.ch = dx.ch.ee(function (bc) {
						delete bW[bF];
						delete dx.ch
					});
				bW[bF] = dx
			}
			return dx
		}
	}
	()
})();
(function () {
	if (typeof TrimPath === "undefined") {
		TrimPath = {};
		if (typeof exports !== "undefined")
			TrimPath = exports
	}
	var Bl = {},
	Ih = [],
	WJ = /\s+/g,
	fi =  + (new Date),
	vZ,
	de,
	oz;
	var ta = function () {
		var fg = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
		hy = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;]/,
		BD = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
		btg = /^new\s+/,
		bte = /['"]/;
		var btd = function (bz) {
			if (fg.test(bz))
				return;
			bz = bz.split(".")[0].trim();
			if (!bz || bte.test(bz))
				return;
			bz = bz.replace(btg, "");
			try {
				if (BD.test(bz))
					return;
				oz[bz] = 1
			} catch (e) {}

		};
		return function (ci) {
			ci = ci || "";
			if (!ci || fg.test(ci))
				return;
			var cK = ci.split(hy);
			for (var i = 0, l = cK.length; i < l; i++)
				btd(cK[i])
		}
	}
	();
	var bsU = function (ds) {
		if (ds[2] != "in")
			throw "bad for loop statement: " + ds.join(" ");
		Ih.push(ds[1]);
		ta(ds[3]);
		return "var __HASH__" + ds[1] + " = " + ds[3] + "," + ds[1] + "," + ds[1] + "_count=0;" + "if (!!__HASH__" + ds[1] + ")" + "for(var " + ds[1] + "_key in __HASH__" + ds[1] + "){" + ds[1] + " = __HASH__" + ds[1] + "[" + ds[1] + "_key];" + "if (typeof(" + ds[1] + ')=="function") continue;' + ds[1] + "_count++;"
	};
	var bsM = function () {
		var ds = Ih[Ih.length - 1];
		return "}; if(!__HASH__" + ds + "||!" + ds + "_count){"
	};
	var bsK = function () {
		Ih.pop();
		return "};"
	};
	var bsJ = function (ds) {
		if (ds[2] != "as")
			throw "bad for list loop statement: " + ds.join(" ");
		var Be = ds[1].split("..");
		if (Be.length > 1) {
			ta(Be[0]);
			ta(Be[1]);
			return "for(var " + ds[3] + "," + ds[3] + "_index=0," + ds[3] + "_beg=" + Be[0] + "," + ds[3] + "_end=" + Be[1] + "," + ds[3] + "_length=parseInt(" + ds[3] + "_end-" + ds[3] + "_beg+1);" + ds[3] + "_index<" + ds[3] + "_length;" + ds[3] + "_index++){" + ds[3] + " = " + ds[3] + "_beg+" + ds[3] + "_index;"
		} else {
			ta(ds[1]);
			return "for(var __LIST__" + ds[3] + " = " + ds[1] + "," + ds[3] + "," + ds[3] + "_index=0," + ds[3] + "_length=__LIST__" + ds[3] + ".length;" + ds[3] + "_index<" + ds[3] + "_length;" + ds[3] + "_index++){" + ds[3] + " = __LIST__" + ds[3] + "[" + ds[3] + "_index];"
		}
	};
	var bsH = function (ds) {
		if (!ds || !ds.length)
			return;
		ds.shift();
		var bX = ds[0].split("(")[0];
		return "var " + bX + " = function" + ds.join("").replace(bX, "") + "{var __OUT=[];"
	};
	var bsG = function (ds) {
		if (!ds[1])
			throw "bad include statement: " + ds.join(" ");
		return 'if (typeof inline == "function"){__OUT.push(inline('
	};
	var On = function (iP, ds) {
		ta(ds.slice(1).join(" "));
		return iP
	};
	var bsD = function (ds) {
		return On("if(", ds)
	};
	var bsC = function (ds) {
		return On("}else if(", ds)
	};
	var bsB = function (ds) {
		return On("var ", ds)
	};
	de = {
		blk : /^\{(cdata|minify|eval)/i,
		tag : "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
		def : {
			"if" : {
				pfix : bsD,
				sfix : "){",
				pmin : 1
			},
			"else" : {
				pfix : "}else{"
			},
			elseif : {
				pfix : bsC,
				sfix : "){",
				pdft : "true"
			},
			"/if" : {
				pfix : "}"
			},
			"for" : {
				pfix : bsU,
				pmin : 3
			},
			forelse : {
				pfix : bsM
			},
			"/for" : {
				pfix : bsK
			},
			list : {
				pfix : bsJ,
				pmin : 3
			},
			"/list" : {
				pfix : "};"
			},
			"break" : {
				pfix : "break;"
			},
			"var" : {
				pfix : bsB,
				sfix : ";"
			},
			macro : {
				pfix : bsH
			},
			"/macro" : {
				pfix : 'return __OUT.join("");};'
			},
			trim : {
				pfix : function () {
					vZ = !0
				}
			},
			"/trim" : {
				pfix : function () {
					vZ = null
				}
			},
			inline : {
				pfix : bsG,
				pmin : 1,
				sfix : "));}"
			}
		},
		ext : {
			seed : function (iP) {
				return (iP || "") + "" + fi
			},
			"default" : function (bz, mP) {
				return bz || mP
			}
		}
	};
	var bsx = function () {
		var bsw = /\\([\{\}])/g;
		return function (ci, hV) {
			ci = ci.replace(bsw, "$1");
			var ds = ci.slice(1, -1).split(WJ),
			bQ = de.def[ds[0]];
			if (!bQ) {
				Hz(ci, hV);
				return
			}
			if (!!bQ.pmin && bQ.pmin >= ds.length)
				throw "Statement needs more parameters:" + ci;
			hV.push(!!bQ.pfix && typeof bQ.pfix != "string" ? bQ.pfix(ds) : bQ.pfix || "");
			if (!!bQ.sfix) {
				if (ds.length <= 1) {
					if (!!bQ.pdft)
						hV.push(bQ.pdft)
				} else {
					for (var i = 1, l = ds.length; i < l; i++) {
						if (i > 1)
							hV.push(" ");
						hV.push(ds[i])
					}
				}
				hV.push(bQ.sfix)
			}
		}
	}
	();
	var Xr = function (wh, hV) {
		if (!wh || !wh.length)
			return;
		if (wh.length == 1) {
			var Pi = wh.pop();
			ta(Pi);
			hV.push(Pi == "" ? '""' : Pi);
			return
		}
		var Pn = wh.pop().split(":");
		hV.push("__MDF['" + Pn.shift() + "'](");
		Xr(wh, hV);
		if (Pn.length > 0) {
			var ce = Pn.join(":");
			ta(ce);
			hV.push("," + ce)
		}
		hV.push(")")
	};
	var Hz = function (ci, hV) {
		if (!ci)
			return;
		var ps = ci.split("\n");
		if (!ps || !ps.length)
			return;
		for (var i = 0, l = ps.length, iD; i < l; i++) {
			iD = ps[i];
			if (!!vZ) {
				iD = iD.trim();
				if (!iD)
					continue
			}
			bsp(iD, hV);
			if (!!vZ && i < l - 1)
				hV.push("__OUT.push('\\n');")
		}
	};
	var bsp = function () {
		var bso = /\|\|/g,
		bsl = /#@@#/g;
		return function (ci, hV) {
			var AV = "}",
			AU = -1,
			ck = ci.length,
			pf,
			iy,
			wp,
			Gv,
			AO;
			while (AU + AV.length < ck) {
				pf = "${";
				iy = "}";
				wp = ci.indexOf(pf, AU + AV.length);
				if (wp < 0)
					break;
				if (ci.charAt(wp + 2) == "%") {
					pf = "${%";
					iy = "%}"
				}
				Gv = ci.indexOf(iy, wp + pf.length);
				if (Gv < 0)
					break;
				FT(ci.substring(AU + AV.length, wp), hV);
				AO = ci.substring(wp + pf.length, Gv).replace(bso, "#@@#").split("|");
				for (var i = 0, l = AO.length; i < l; AO[i] = AO[i].replace(bsl, "||"), i++);
				hV.push("__OUT.push(");
				Xr(AO, hV);
				hV.push(");");
				AV = iy;
				AU = Gv
			}
			FT(ci.substring(AU + AV.length), hV)
		}
	}
	();
	var FT = function () {
		var bLs = {
			r : /\n|\\|\'/g,
			"\n" : "\\n",
			"\\" : "\\\\",
			"'" : "\\'"
		};
		var bsk = function (ci) {
			return (ci || "").replace(bLs.r, function ($1) {
				return bLs[$1] || $1
			})
		};
		return function (ci, hV) {
			if (!ci)
				return;
			hV.push("__OUT.push('" + bsk(ci) + "');")
		}
	}
	();
	var bsc = function () {
		var brY = /\t/g,
		brN = /\n/g,
		brM = /\r\n?/g;
		var XD = function (ci, pf) {
			var bu = ci.indexOf("}", pf + 1);
			while (ci.charAt(bu - 1) == "\\") {
				bu = ci.indexOf("}", bu + 1)
			}
			return bu
		};
		var brK = function () {
			var cK = [],
			brG = arguments[0];
			for (var x in brG) {
				x = (x || "").trim();
				if (!x)
					continue;
				cK.push(x + "=$v('" + x + "')")
			}
			return cK.length > 0 ? "var " + cK.join(",") + ";" : ""
		};
		return function (ci) {
			oz = {};
			ci = ci.replace(brM, "\n").replace(brY, "    ");
			var mO = ["if(!__CTX) return '';", ""];
			mO.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
			mO.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
			mO.push("__OUT=[];");
			var uL = -1,
			ck = ci.length;
			var jy,
			wG,
			AG,
			Ay,
			se,
			Av,
			RA,
			Au;
			while (uL + 1 < ck) {
				jy = uL;
				jy = ci.indexOf("{", jy + 1);
				while (jy >= 0) {
					wG = XD(ci, jy);
					AG = ci.substring(jy, wG);
					Ay = AG.match(de.blk);
					if (!!Ay) {
						se = Ay[1].length + 1;
						Av = ci.indexOf("}", jy + se);
						if (Av >= 0) {
							RA = Av - jy - se <= 0 ? "{/" + Ay[1] + "}" : AG.substr(se + 1);
							se = ci.indexOf(RA, Av + 1);
							if (se >= 0) {
								Hz(ci.substring(uL + 1, jy), mO);
								Au = ci.substring(Av + 1, se);
								switch (Ay[1]) {
								case "cdata":
									FT(Au, mO);
									break;
								case "minify":
									FT(Au.replace(brN, " ").replace(WJ, " "), mO);
									break;
								case "eval":
									if (!!Au)
										mO.push("__OUT.push((function(){" + Au + "})());");
									break
								}
								jy = uL = se + RA.length - 1
							}
						}
					} else if (ci.charAt(jy - 1) != "$" && ci.charAt(jy - 1) != "\\" && AG.substr(AG.charAt(1) == "/" ? 2 : 1).search(de.tag) == 0) {
						break
					}
					jy = ci.indexOf("{", jy + 1)
				}
				if (jy < 0)
					break;
				wG = XD(ci, jy);
				if (wG < 0)
					break;
				Hz(ci.substring(uL + 1, jy), mO);
				bsx(ci.substring(jy, wG + 1), mO);
				uL = wG
			}
			Hz(ci.substring(uL + 1), mO);
			mO.push(';return __OUT.join("");');
			mO[1] = brK(oz);
			oz = null;
			return new Function("__CTX", "__MDF", mO.join(""))
		}
	}
	();
	TrimPath.seed = function () {
		return fi
	};
	TrimPath.merge = function () {
		var At = {};
		TrimPath.dump = function () {
			return {
				func : At,
				text : Bl
			}
		};
		return function (ff, bl, ma) {
			try {
				bl = bl || {};
				if (!At[ff] && !Bl[ff])
					return "";
				if (!At[ff]) {
					At[ff] = bsc(Bl[ff]);
					delete Bl[ff]
				}
				if (!!ma) {
					for (var x in de.ext)
						if (!ma[x])
							ma[x] = de.ext[x]
				}
				return At[ff](bl, ma || de.ext)
			} catch (ex) {
				return ex.message || ""
			}
		}
	}
	();
	TrimPath.parse = function () {
		var brD =  + (new Date);
		return function (ci, ff) {
			if (!ci)
				return "";
			ff = ff || "ck_" + brD++;
			Bl[ff] = ci;
			return ff
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	jn = {};
	Fp.St = TrimPath.seed;
	Fp.cV = function () {
		var XM = function (bC) {
			return !Fp.ku ? "" : Fp.ku(bC)
		};
		return function (ff, bl, ma) {
			bl = bl || {};
			bl.inline = XM;
			ma = NEJ.X(NEJ.X({}, jn), ma);
			ma.rand = bm.nq;
			ma.format = bm.sW;
			ma.escape = bm.eZ;
			ma.inline = XM;
			return TrimPath.merge(ff, bl, ma)
		}
	}
	();
	Fp.mI = function (ci, brA) {
		if (!ci)
			return "";
		var ff,
		bD = Fp.bw(ci);
		if (!!bD) {
			ff = bD.id;
			ci = bD.value || bD.innerText;
			if (!brA)
				Fp.fx(bD)
		}
		return TrimPath.parse(ci, ff)
	};
	Fp.ne = function (cU, ff, bl, ma) {
		cU = Fp.bw(cU);
		if (!!cU)
			cU.innerHTML = Fp.cV(ff, bl, ma);
		return this
	};
	Fp.byt = function (bLs) {
		NEJ.X(jn, bLs)
	};
	be("dbg").dumpJST = function () {
		return TrimPath.dump()
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bv = be("nej.ut"),
	bb;
	if (!!bv.hh)
		return;
	bv.hh = NEJ.C();
	bb = bv.hh.bN(bv.eW);
	bb.dv = function () {
		this.bA = {};
		this.dF()
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.Ar = Fp.bw(bf.element) || window;
		this.XR(bf.event);
		this.bqY();
		this.bG("oninit")
	};
	bb.cX = function () {
		var uR = function (bz, bF, bLs) {
			if (!bm.fz(bz)) {
				bm.Ec(this.Ar, bF)
			}
			delete bLs[bF]
		};
		return function () {
			this.dc();
			bm.eJ(this.bA, uR, this);
			delete this.Ar
		}
	}
	();
	bb.Ey = function (bD, bDM) {
		bD = Fp.bw(bD);
		return bD == this.Ar && (!bDM || !!this.bA["on" + bDM])
	};
	bb.XR = function (bc) {
		if (bm.fX(bc)) {
			var bX = "on" + bc;
			if (!this.bA[bX]) {
				this.bA[bX] = this.bqU.bh(this, bc)
			}
			this.Yb(bc);
			return
		}
		if (bm.fz(bc)) {
			bm.bLt(bc, this.XR, this)
		}
	};
	bb.Yb = function (bDM) {
		var bc = "on" + bDM,
		el = this.Ar[bc],
		Yc = this.bA[bc];
		if (el != Yc) {
			this.Es(bDM);
			if (!!el && el != co)
				this.Yd(bDM, el);
			this.Ar[bc] = Yc
		}
	};
	bb.Yd = function (bDM, el, bqM) {
		var bk = this.bA[bDM];
		if (!bk) {
			bk = [];
			this.bA[bDM] = bk
		}
		if (bm.gj(el)) {
			!bqM ? bk.push(el) : bk.unshift(el)
		}
	};
	bb.Es = function (bDM, el) {
		var bk = this.bA[bDM];
		if (!bk || !bk.length)
			return;
		if (!el) {
			delete this.bA[bDM];
			return
		}
		bm.kx(bk, function (bz, bu, wR) {
			if (el === bz) {
				wR.splice(bu, 1);
				return !0
			}
		})
	};
	bb.bqU = function (bDM, bc) {
		bc = bc || {
			noargs : !0
		};
		bc.type = bDM;
		this.bG("ondispatch", bc);
		if (!!bc.stopped)
			return;
		bm.bLt(this.bA[bDM], function (el) {
			try {
				el(bc)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		})
	};
	bb.bqY = function () {
		var JG = function (bc) {
			var ce = bc.args,
			bDM = ce[1].toLowerCase();
			if (this.Ey(ce[0], bDM)) {
				bc.stopped = !0;
				this.Yb(bDM);
				this.Yd(bDM, ce[2], ce[3]);
				this.bG("oneventadd", {
					type : bDM,
					listener : ce[2]
				})
			}
		};
		var bqK = function (bc) {
			var ce = bc.args,
			bDM = ce[1].toLowerCase();
			if (this.Ey(ce[0], bDM)) {
				bc.stopped = !0;
				this.Es(bDM, ce[2])
			}
		};
		var MB = function (bc) {
			var ce = bc.args,
			bDM = (ce[1] || "").toLowerCase();
			if (this.Ey(ce[0])) {
				if (!!bDM) {
					this.Es(bDM);
					return
				}
				bm.eJ(this.bA, function (bz, bF) {
					if (bm.fz(bz)) {
						this.Es(bF)
					}
				}, this)
			}
		};
		var bqG = function (bc) {
			var ce = bc.args,
			bDM = ce[1].toLowerCase();
			if (this.Ey(ce[0], bDM)) {
				bc.stopped = !0;
				ce[0]["on" + bDM].apply(ce[0], ce.slice(2))
			}
		};
		return function () {
			if (!!this.bqE)
				return;
			this.bqE = true;
			bj.bs = bj.bs.ee(JG.bh(this));
			bj.nt = bj.nt.ee(bqK.bh(this));
			bj.kB = bj.kB.ee(MB.bh(this));
			bj.bG = bj.bG.ee(bqG.bh(this))
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	eL = be("nej.g"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bv = be("nej.ut.j"),
	iX,
	bqD = 6e4;
	if (!!bv.Am)
		return;
	bv.Am = NEJ.C();
	iX = bv.Am.bN(bK.eW);
	iX.dv = function () {
		this.dF();
		this.Ak = {
			onerror : this.bqC.bh(this),
			onloaded : this.bqt.bh(this)
		};
		if (!this.constructor.bA)
			this.constructor.bA = {
				loaded : {}

			}
	};
	iX.cw = function (bf) {
		this.cA(bf);
		this.Ka = bf.version;
		this.Kh = bf.timeout;
		this.Ak.version = this.Ka;
		this.Ak.timeout = this.Kh
	};
	iX.Yw = function (bF) {
		delete this.constructor.bA[bF]
	};
	iX.rU = function (bF) {
		return this.constructor.bA[bF]
	};
	iX.Yx = function (bF, bl) {
		this.constructor.bA[bF] = bl
	};
	iX.DQ = co;
	iX.YC = function (fb) {
		bj.kB(fb)
	};
	iX.KC = function (fb) {
		fb.src = this.jf;
		document.head.appendChild(fb)
	};
	iX.bqh = function () {
		var bW = this.rU(this.jf);
		if (!bW)
			return;
		window.clearTimeout(bW.timer);
		this.YC(bW.request);
		delete bW.bind;
		delete bW.timer;
		delete bW.request;
		this.Yw(this.jf);
		this.rU("loaded")[this.jf] = !0
	};
	iX.Ix = function (bX) {
		var bW = this.rU(this.jf);
		if (!bW)
			return;
		var bk = bW.bind;
		this.bqh();
		if (!!bk && bk.length > 0) {
			var dx;
			while (bk.length) {
				dx = bk.shift();
				try {
					dx.bG(bX, arguments[1])
				} catch (ex) {
					console.error(ex.message);
					console.error(ex.stack)
				}
				dx.ch()
			}
		}
	};
	iX.jh = function (cS) {
		this.Ix("onerror", cS)
	};
	iX.YD = function () {
		this.Ix("onloaded")
	};
	iX.bqf = function (cg) {
		this.constructor.bL(this.Ak).Ib(cg)
	};
	iX.YE = function (cS) {
		var bW = this.rU(this.pG);
		if (!bW)
			return;
		if (!!cS)
			bW.error++;
		bW.loaded++;
		if (bW.loaded < bW.total)
			return;
		this.Yw(this.pG);
		this.bG(bW.error > 0 ? "onerror" : "onloaded")
	};
	iX.bqC = function (cS) {
		this.YE(!0)
	};
	iX.bqt = function () {
		this.YE()
	};
	iX.Ib = function (cg) {
		cg = bm.RZ(cg);
		if (!cg) {
			this.bG("onerror", {
				code : eL.OP,
				message : "请指定要载入的资源地址！"
			});
			return this
		}
		this.jf = cg;
		if (!!this.Ka)
			this.jf += (this.jf.indexOf("?") < 0 ? "?" : "&") + this.Ka;
		if (this.rU("loaded")[this.jf]) {
			try {
				this.bG("onloaded")
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
			this.ch();
			return this
		}
		var bW = this.rU(this.jf),
		fb;
		if (!!bW) {
			bW.bind.unshift(this);
			bW.timer = window.clearTimeout(bW.timer)
		} else {
			fb = this.DQ();
			bW = {
				request : fb,
				bind : [this]
			};
			this.Yx(this.jf, bW);
			bj.bs(fb, "load", this.YD.bh(this));
			bj.bs(fb, "error", this.jh.bh(this, {
					code : eL.QP,
					message : "无法加载指定资源文件[" + this.jf + "]！"
				}))
		}
		if (this.Kh != 0)
			bW.timer = window.setTimeout(this.jh.bh(this, {
						code : eL.Tt,
						message : "指定资源文件[" + this.jf + "]载入超时！"
					}), this.Kh || bqD);
		if (!!fb)
			this.KC(fb);
		this.bG("onloading");
		return this
	};
	iX.YH = function (bk) {
		if (!bk || !bk.length) {
			this.bG("onerror", {
				code : eL.OP,
				message : "请指定要载入的资源队列！"
			});
			return this
		}
		this.pG = bm.nq();
		var bW = {
			error : 0,
			loaded : 0,
			total : bk.length
		};
		this.Yx(this.pG, bW);
		for (var i = 0, l = bk.length; i < l; i++) {
			if (!bk[i]) {
				bW.total--;
				continue
			}
			this.bqf(bk[i])
		}
		this.bG("onloading");
		return this
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bT = be("nej.h"),
	bv = be("nej.ut.j"),
	Ab;
	if (!!bv.Lr)
		return;
	bv.Lr = NEJ.C();
	Ab = bv.Lr.bN(bv.Am);
	Ab.DQ = function () {
		var fe = Fp.gH("iframe");
		fe.width = 0;
		fe.height = 0;
		fe.style.display = "none";
		return fe
	};
	Ab.KC = function (fb) {
		fb.src = this.jf;
		document.body.appendChild(fb)
	};
	Ab.jh = function (cS) {
		var fe = (this.rU(this.jf) || bZ).request;
		this.Ix("onerror", cS);
		bT.GR(fe)
	};
	Ab.YD = function () {
		var it = null,
		fe = (this.rU(this.jf) || bZ).request;
		try {
			it = fe.contentWindow.document.body
		} catch (ex) {}

		this.Ix("onloaded", it);
		bT.GR(fe)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bv = be("nej.ut.j"),
	LI;
	if (!!bv.Hq)
		return;
	bv.Hq = NEJ.C();
	LI = bv.Hq.bN(bv.Am);
	LI.DQ = function () {
		return Fp.gH("link")
	};
	LI.KC = function (fb) {
		fb.href = this.jf;
		document.head.appendChild(fb)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bv = be("nej.ut.j"),
	Hl;
	if (!!bv.GW)
		return;
	bv.GW = NEJ.C();
	Hl = bv.GW.bN(bv.Am);
	Hl.cw = function (bf) {
		this.cA(bf);
		this.YI = bf.async;
		this.Mc = bf.charset;
		this.Ak.async = !1;
		this.Ak.charset = this.Mc
	};
	Hl.DQ = function () {
		var fb = Fp.gH("script");
		if (this.YI != null)
			fb.async = !!this.YI;
		if (this.Mc != null)
			fb.charset = this.Mc;
		return fb
	};
	Hl.YC = function (fb) {
		Fp.fx(fb)
	}
})();
(function () {
	var be = NEJ.P,
	bH = be("nej.j"),
	bv = be("nej.ut.j");
	bH.byx = function (cg, bf) {
		bv.GW.bL(bf).Ib(cg);
		return this
	};
	bH.bpZ = function (bk, bf) {
		bv.GW.bL(bf).YH(bk);
		return this
	};
	bH.byy = function (cg, bf) {
		bv.Hq.bL(bf).Ib(cg);
		return this
	};
	bH.bpV = function (bk, bf) {
		bv.Hq.bL(bf).YH(bk);
		return this
	};
	bH.YV = function (cg, bf) {
		bv.Lr.bL(bf).Ib(cg);
		return this
	}
})();
(function () {
	var o = NEJ.O,
	u = NEJ.P("nej.u"),
	j = NEJ.P("nej.j");
	j.fN = function () {
		var dJ = new Date,
		bpS = +dJ,
		Mw = 864e5;
		var bpR = function (bX) {
			var mD = document.cookie,
			bEU = "\\b" + bX + "=",
			EZ = mD.search(bEU);
			if (EZ < 0)
				return "";
			EZ += bEU.length - 2;
			var xC = mD.indexOf(";", EZ);
			if (xC < 0)
				xC = mD.length;
			return mD.substring(EZ, xC) || ""
		};
		return function (bX, bl) {
			if (bl === undefined)
				return bpR(bX);
			if (u.fX(bl)) {
				if (!!bl) {
					document.cookie = bX + "=" + bl + ";";
					return bl
				}
				bl = {
					expires : -100
				}
			}
			bl = bl || o;
			var mD = bX + "=" + (bl.value || "") + ";";
			delete bl.value;
			if (bl.expires !== undefined) {
				dJ.setTime(bpS + bl.expires * Mw);
				bl.expires = dJ.toGMTString()
			}
			mD += u.vL(bl, ";");
			document.cookie = mD
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	hf = be("nej.c"),
	eL = be("nej.g"),
	Fp = be("nej.e"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	bv = be("nej.ut.j"),
	bm = be("nej.u"),
	bb;
	if (!!bv.xF)
		return;
	bv.xF = NEJ.C();
	bb = bv.xF.bN(bK.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.pK = {
			noescape : false,
			url : "",
			sync : !1,
			cookie : !1,
			type : "text",
			method : "GET",
			timeout : 6e4
		};
		NEJ.EX(this.pK, bf);
		var bjf = hf.bw("csrf");
		if (!!bjf.cookie && !!bjf.param) {
			var cC = encodeURIComponent(bjf.param) + "=" + encodeURIComponent(bH.fN(bjf.cookie) || ""),
			BB = this.pK.url.indexOf("?") < 0 ? "?" : "&";
			this.pK.url += BB + cC
		}
		this.EC = bf.headers || {};
		var ci = this.EC[eL.wF];
		if (ci == null)
			this.EC[eL.wF] = eL.bmC
	};
	bb.cX = function () {
		this.dc();
		delete this.rE;
		delete this.pK;
		delete this.EC
	};
	bb.bMC = function (ci) {
		var bLs = {
			r : /\<|\>/g,
			"<" : "&lt;",
			">" : "&gt;"
		};
		if (!this.pK.noescape) {
			return bm.BR(bLs, ci)
		} else {
			return ci
		}
	};
	bb.nR = function (bc) {
		var ip = bc.status;
		if (ip == -1) {
			this.bG("onerror", {
				code : eL.Tt,
				message : "请求[" + this.pK.url + "]超时！"
			});
			return
		}
		if (("" + ip).indexOf("2") != 0) {
			this.bG("onerror", {
				data : ip,
				code : eL.QP,
				message : "服务器返回异常状态[" + ip + "]!"
			});
			return
		}
		this.bG("onload", Fp.bvO(this.bMC(bc.result), this.pK.type))
	};
	bb.dg = co;
	bb.MY = function (bl) {
		var cg = this.pK.url;
		if (!cg) {
			this.bG("onerror", {
				code : eL.OP,
				message : "没有输入请求地址！"
			});
			return this
		}
		try {
			this.pK.data = bl == null ? null : bl;
			var bc = {
				request : this.pK,
				headers : this.EC
			};
			try {
				this.bG("onbeforerequest", bc)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
			this.dg(bc)
		} catch (e) {
			this.bG("onerror", {
				code : eL.QP,
				message : "请求[" + cg + "]失败:" + e.message + "！"
			})
		}
		return this
	};
	bb.mB = co
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bT = be("nej.h"),
	eL = be("nej.g"),
	bm = be("nej.u"),
	bv = be("nej.ut.j"),
	bW = {},
	zC;
	if (!!bv.Eq)
		return;
	bv.Eq = NEJ.C();
	zC = bv.Eq.bN(bv.xF);
	zC.cX = function () {
		this.dc();
		window.clearTimeout(this.dQ);
		delete this.dQ;
		try {
			this.mA.onreadystatechange = co;
			this.mA.abort()
		} catch (e) {}

		delete this.mA
	};
	zC.dg = function () {
		var bpM = function (bz, bF) {
			this.mA.setRequestHeader(bF, bz)
		};
		return function (bf) {
			var fb = bf.request,
			xI = bf.headers;
			this.mA = bT.NB();
			if (xI[eL.wF] === eL.Df) {
				delete xI[eL.wF];
				this.mA.upload.onprogress = this.ge.bh(this, 1);
				if (fb.data.tagName === "FORM")
					fb.data = new FormData(fb.data)
			}
			this.mA.onreadystatechange = this.ge.bh(this, 2);
			if (fb.timeout != 0) {
				this.dQ = window.setTimeout(this.ge.bh(this, 3), fb.timeout)
			}
			this.mA.open(fb.method, fb.url, !fb.sync);
			bm.eJ(xI, bpM, this);
			if (!!this.pK.cookie && "withCredentials" in this.mA)
				this.mA.withCredentials = !0;
			this.mA.send(fb.data)
		}
	}
	();
	zC.ge = function (bDM) {
		switch (bDM) {
		case 1:
			this.bG("onuploading", arguments[1]);
			break;
		case 2:
			if (this.mA.readyState == 4)
				this.nR({
					status : this.mA.status,
					result : this.mA.responseText || ""
				});
			break;
		case 3:
			this.nR({
				status : -1
			});
			break
		}
	};
	zC.mB = function () {
		this.nR({
			status : 0
		});
		return this
	}
})();
(function () {
	var dE = NEJ.P("nej.p"),
	bv = window,
	im = dE.Nn,
	Zf = im.ipad || im.iphone;
	if (!Zf && !!bv.requestAnimationFrame && !!bv.cancelRequestAnimationFrame)
		return;
	var iP = dE.dp.prefix.pro;
	if (!Zf && !!bv[iP + "RequestAnimationFrame"] && !!bv[iP + "CancelRequestAnimationFrame"]) {
		bv.requestAnimationFrame = bv[iP + "RequestAnimationFrame"];
		bv.cancelRequestAnimationFrame = bv[iP + "CancelRequestAnimationFrame"];
		return
	}
	var Ea = im.desktop ? 80 : im.ios ? 50 : 30;
	bv.requestAnimationFrame = function (fF) {
		return window.setTimeout(function () {
			try {
				fF( + (new Date))
			} catch (ex) {}

		}, 1e3 / Ea)
	};
	bv.cancelRequestAnimationFrame = function (bC) {
		window.clearTimeout(bC);
		return this
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bm = be("nej.u"),
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bT = be("nej.h"),
	dr = be("nej.x"),
	Is = be("nej.ut.j.cb"),
	iH;
	if (!!Fp.qK)
		return;
	Fp.qK = dr.qK = function () {
		var bW = {},
		fg = /^(?:mouse.*|(?:dbl)?click)$/i;
		window.onflashevent = function (bc) {
			var bC = decodeURIComponent(bc.target),
			bDM = bc.type.toLowerCase();
			var el = bW[bC + "-on" + bDM];
			if (!!el) {
				try {
					el(bc)
				} catch (e) {}

				return
			}
			var cT = bW[bC + "-tgt"];
			if (!!cT && fg.test(bDM)) {
				Zg(cT, bc)
			}
		};
		var Ow = function (bf) {
			var cU = Fp.bw(bf.parent) || document.body,
			fD = Fp.cV(iH, bf);
			cU.insertAdjacentHTML(!bf.hidden ? "beforeEnd" : "afterBegin", fD)
		};
		var Zg = function (bC, bc) {
			var bDM = bc.type.toLowerCase();
			requestAnimationFrame(function () {
				bj.bG(bC, bDM)
			})
		};
		var bpG = function (gh) {
			return !!gh && !!gh.inited && !!gh.inited()
		};
		var zx = function (bC) {
			var cK = [document.embeds[bC], Fp.bw(bC), document[bC], window[bC]],
			bu = bm.eJ(cK, bpG),
			gh = cK[bu],
			OM = bC + "-count";
			bW[OM]++;
			if (!!gh || bW[OM] > 100) {
				bW[bC](gh);
				delete bW[bC];
				delete bW[OM];
				return
			}
			window.setTimeout(zx.bh(null, bC), 300)
		};
		var bpE = function (bf) {
			var bC = bf.id,
			jT = bf.params;
			if (!jT) {
				jT = {};
				bf.params = jT
			}
			var oz = jT.flashvars || "";
			oz += (!oz ? "" : "&") + ("id=" + bC);
			if (!bf.hidden && (!!bf.target || bT.GY(jT.wmode))) {
				var vo = Fp.ik(bf.target) || Fp.ik(bf.parent),
				Zx = bm.Kp();
				Is["cb" + Zx] = Zg.bh(null, vo);
				oz += "&onevent=nej.ut.j.cb.cb" + Zx;
				bW[bC + "-tgt"] = vo
			}
			jT.flashvars = oz;
			bm.eJ(bf, function (bz, bF) {
				if (bm.gj(bz) && bF != "onready") {
					bW[bC + "-" + bF] = bz
				}
			})
		};
		return function (bf) {
			bf = NEJ.X({}, bf);
			if (!bf.src)
				return;
			var bC = "flash_" + bm.Kp();
			bf.id = bC;
			bpE(bf);
			Ow(bf);
			if (!bf.onready)
				return;
			bW[bC] = bf.onready;
			bW[bC + "-count"] = 0;
			zx(bC)
		}
	}
	();
	iH = Fp.mI('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
	dr.isChange = !0
})();
(function () {
	var be = NEJ.P,
	hf = be("nej.c"),
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bv = be("nej.ut.j"),
	Is = be("nej.ut.j.cb"),
	bW = {},
	fi =  + (new Date),
	Pb;
	if (!!bv.Pf)
		return;
	Is["ld" + fi] = function (bF, fc) {
		var he = bW[bF];
		if (!he)
			return;
		delete bW[bF];
		he.nR({
			status : 200,
			result : fc
		})
	};
	Is["er" + fi] = function (bF, ip) {
		var he = bW[bF];
		if (!he)
			return;
		delete bW[bF];
		he.nR({
			status : ip || 0
		})
	};
	bv.Pf = NEJ.C();
	Pb = bv.Pf.bN(bv.xF);
	Pb.dg = function (bf) {
		var gh = bW.flash;
		if (bm.fz(gh)) {
			gh.push(this.dg.bh(this, bf));
			return
		}
		if (!gh) {
			bW.flash = [this.dg.bh(this, bf)];
			Fp.qK({
				hidden : !0,
				src : hf.bw("ajax.swf"),
				onready : function (gh) {
					if (!gh)
						return;
					var bk = bW.flash;
					bW.flash = gh;
					bm.kx(bk, function (el) {
						try {
							el()
						} catch (e) {}

					})
				}
			});
			return
		}
		this.rE = "swf-" + bm.nq();
		bW[this.rE] = this;
		var bl = NEJ.EX({
				url : "",
				data : null,
				method : "GET"
			}, bf.request);
		bl.key = this.rE;
		bl.headers = bf.headers;
		bl.onerror = "nej.ut.j.cb.er" + fi;
		bl.onloaded = "nej.ut.j.cb.ld" + fi;
		var Zy = hf.bkq(bl.url);
		if (!!Zy)
			bl.policyURL = Zy;
		gh.request(bl)
	};
	Pb.mB = function () {
		delete bW[this.rE];
		this.nR({
			status : 0
		});
		return this
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bT = be("nej.h");
	bT.Zz = function () {
		var dq = /^([\w]+?:\/\/.*?(?=\/|$))/i;
		return function (eA) {
			eA = eA || "";
			if (dq.test(eA))
				return RegExp.$1;
			return "*"
		}
	}
	();
	bT.Pv = function (bl) {
		return bl
	};
	bT.Pw = function (ZC, bf) {
		if (!ZC.postMessage)
			return;
		bf = bf || bZ;
		ZC.postMessage(bT.Pv(bf.data), bT.Zz(bf.origin))
	}
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.p"),
	bT = be("nej.h"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	bK = be("nej.ut");
	if (bv.jN.trident)
		return;
	if (!!window.postMessage) {
		bT.Pv = bT.Pv.ee(function (bc) {
				bc.stopped = !0;
				bc.value = JSON.stringify(bc.args[0])
			});
		return
	}
	var bF = "MSG|",
	gw = [];
	var bpz = function () {
		var bX = unescape(window.name || "").trim();
		if (!bX || bX.indexOf(bF) != 0)
			return;
		window.name = "";
		var bn = bm.Wj(bX.replace(bF, ""), "|"),
		eA = (bn.origin || "").toLowerCase();
		if (!!eA && eA != "*" && location.href.toLowerCase().indexOf(eA) != 0)
			return;
		bj.bG(window, "message", {
			data : JSON.parse(bn.data || "null"),
			source : window.frames[bn.self] || bn.self,
			origin : bT.Zz(bn.ref || document.referrer)
		})
	};
	var bpw = function () {
		var GO;
		var bpu = function (bLs, bu, bk) {
			if (bm.dY(GO, bLs.w) < 0) {
				GO.push(bLs.w);
				bk.splice(bu, 1);
				bLs.w.name = bLs.d
			}
		};
		return function () {
			GO = [];
			bm.kx(gw, bpu);
			GO = null
		}
	}
	();
	bT.Pw = function () {
		var bpr = function (bl) {
			var bn = {};
			bl = bl || bZ;
			bn.origin = bl.origin || "";
			bn.ref = location.href;
			bn.self = bl.source;
			bn.data = JSON.stringify(bl.data);
			return bF + bm.vL(bn, "|", !0)
		};
		return bT.Pw.ee(function (bc) {
			bc.stopped = !0;
			var ce = bc.args;
			gw.unshift({
				w : ce[0],
				d : escape(bpr(ce[1]))
			})
		})
	}
	();
	bK.hh.bL({
		element : window,
		event : "message"
	});
	window.setInterval(bpw, 100);
	window.setInterval(bpz, 20)
})();
(function () {
	var be = NEJ.P,
	bT = be("nej.h"),
	Fp = be("nej.e"),
	bH = be("nej.j");
	bH.bpn = function () {
		var zp = window.name || "_parent",
		bpk = {
			bim : window.top,
			zp : window,
			cU : window.parent
		};
		return function (cT, bf) {
			if (typeof cT == "string") {
				cT = bpk[cT] || window.frames[cT];
				if (!cT)
					return this
			}
			var bl = NEJ.X({
					origin : "*",
					source : zp
				}, bf);
			bT.Pw(cT, bl);
			return this
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	hf = be("nej.c"),
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bH = be("nej.j"),
	bv = be("nej.ut.j"),
	bW = {},
	Fh;
	if (!!bv.PY)
		return;
	bv.PY = NEJ.C();
	Fh = bv.PY.bN(bv.xF);
	Fh.dv = function () {
		var eu = "NEJ-AJAX-DATA:",
		tT = !1;
		var Qa = function (bc) {
			var bl = bc.data;
			if (bl.indexOf(eu) != 0)
				return;
			bl = JSON.parse(bl.replace(eu, ""));
			var he = bW[bl.key];
			if (!he)
				return;
			delete bW[bl.key];
			bl.result = decodeURIComponent(bl.result || "");
			he.nR(bl)
		};
		var Qd = function () {
			if (!tT) {
				tT = !0;
				bj.bs(window, "message", Qa)
			}
		};
		return function () {
			this.dF();
			Qd()
		}
	}
	();
	Fh.dg = function (bf) {
		var fb = bf.request,
		he = hf.bjM(fb.url),
		mT = bW[he];
		if (bm.fz(mT)) {
			mT.push(this.dg.bh(this, bf));
			return
		}
		if (!mT) {
			bW[he] = [this.dg.bh(this, bf)];
			Fp.GG({
				src : he,
				visible : !1,
				onload : function (bc) {
					var bk = bW[he];
					bW[he] = bj.cf(bc).contentWindow;
					bm.kx(bk, function (el) {
						try {
							el()
						} catch (e) {}

					})
				}
			});
			return
		}
		this.rE = "frm-" + bm.nq();
		bW[this.rE] = this;
		var bl = NEJ.EX({
				url : "",
				data : null,
				timeout : 0,
				method : "GET"
			}, fb);
		bl.key = this.rE;
		bl.headers = bf.headers;
		bH.bpn(bW[he], {
			data : bl
		})
	};
	Fh.mB = function () {
		delete bW[this.rE];
		this.nR({
			status : 0
		});
		return this
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	eL = be("nej.g"),
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bH = be("nej.j"),
	bv = be("nej.ut.j"),
	bW = {},
	xV;
	if (!!bv.Qi)
		return;
	bv.Qi = NEJ.C();
	xV = bv.Qi.bN(bv.xF);
	xV.dv = function () {
		var eu = "NEJ-UPLOAD-RESULT:",
		tT = !1;
		var Qa = function (bc) {
			var bl = bc.data;
			if (bl.indexOf(eu) != 0)
				return;
			bl = JSON.parse(bl.replace(eu, ""));
			var he = bW[bl.key];
			if (!he)
				return;
			delete bW[bl.key];
			he.nR(decodeURIComponent(bl.result))
		};
		var Qd = function () {
			if (!tT) {
				tT = !0;
				bj.bs(window, "message", Qa)
			}
		};
		return function () {
			this.dF();
			Qd()
		}
	}
	();
	xV.cX = function () {
		this.dc();
		Fp.fx(this.pS);
		delete this.pS;
		window.clearTimeout(this.dQ);
		delete this.dQ
	};
	xV.nR = function (fc) {
		var bHN;
		try {
			bHN = JSON.parse(fc);
			this.bG("onload", bHN)
		} catch (e) {
			this.bG("onerror", {
				code : eL.bme,
				message : fc
			})
		}
	};
	xV.dg = function () {
		var bpj = function () {
			var it,
			fc;
			try {
				var it = this.pS.contentWindow.document.body,
				fc = it.innerText || it.textContent
			} catch (e) {
				return
			}
			this.nR(fc)
		};
		var Qy = function (cg, eU, mD) {
			bH.cR(cg, {
				type : "json",
				method : "POST",
				cookie : mD,
				mode : parseInt(eU) || 0,
				onload : function (bl) {
					if (!this.dQ)
						return;
					this.bG("onuploading", bl);
					this.dQ = window.setTimeout(Qy.bh(this, cg, eU, mD), 1e3)
				}
				.bh(this),
				onerror : function (cS) {
					if (!this.dQ)
						return;
					this.dQ = window.setTimeout(Qy.bh(this, cg, eU, mD), 1e3)
				}
				.bh(this)
			})
		};
		return function (bf) {
			var fb = bf.request,
			xI = bf.headers,
			en = fb.data,
			bX = "fom-" + bm.nq();
			bW[bX] = this;
			en.target = bX;
			en.method = "POST";
			en.enctype = eL.Df;
			en.encoding = eL.Df;
			var cg = en.action || "",
			kZ = cg.indexOf("?") <= 0 ? "?" : "&";
			en.action = cg + kZ + "_proxy_=form";
			this.pS = Fp.GG({
					name : bX,
					onload : function (bc) {
						var mT = bj.cf(bc);
						bj.bs(mT, "load", bpj.bh(this));
						en.submit();
						var ZV = (en.nej_query || bZ).value;
						if (!ZV)
							return;
						var eU = (en.nej_mode || bZ).value,
						mD = (en.nej_cookie || bZ).value == "true";
						this.dQ = window.setTimeout(Qy.bh(this, ZV, eU, mD), 100)
					}
					.bh(this)
				})
		}
	}
	();
	xV.mB = function () {
		this.bG("onerror", {
			code : eL.bmf,
			message : "客户端终止文件上传"
		});
		return this
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bT = be("nej.h"),
	bv = be("nej.ut.j");
	bT.NB = function () {
		return new XMLHttpRequest
	};
	bT.QG = function (eU, ER, bf) {
		var bLs = !!ER ? {
			2 : bv.Qi
		}
		 : {
			2 : bv.PY,
			3 : bv.Pf
		};
		return (bLs[eU] || bv.Eq).bL(bf)
	}
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.p"),
	bT = be("nej.h");
	if (bv.jN.trident)
		return;
	bT.NB = function () {
		var CM = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
		var boY = function () {
			for (var i = 0, l = CM.length; i < l; i++) {
				try {
					return new ActiveXObject(CM[i])
				} catch (e) {}

			}
			return null
		};
		return bT.NB.ee(function (bc) {
			if (!!window.XMLHttpRequest)
				return;
			bc.stopped = !0;
			bc.value = boY()
		})
	}
	();
	bT.QG = function () {
		var te = {
			0 : 2,
			1 : 3
		};
		return bT.QG.ee(function (bc) {
			var ce = bc.args,
			eU = ce[0] || 0;
			ce[0] = !!ce[1] ? 2 : te[eU] || eU
		})
	}
	()
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bT = be("nej.h"),
	eL = be("nej.g"),
	bm = be("nej.u"),
	bH = be("nej.j"),
	bv = be("nej.ut.j"),
	zk = {},
	wD = co;
	bH.mB = function (ff) {
		var bW = zk[ff];
		if (!bW)
			return this;
		bW.req.mB();
		return this
	};
	bH.byE = function (eg) {
		wD = eg || co;
		return this
	};
	bH.cR = function () {
		var bLi = (location.protocol + "//" + location.host).toLowerCase();
		var boT = function (cg) {
			var eA = bm.buu(cg);
			return !!eA && eA != bLi
		};
		var boR = function (xI) {
			return (xI || bZ)[eL.wF] == eL.Df
		};
		var boI = function (bf) {
			var ER = boR(bf.headers);
			if (!boT(bf.url) && !ER)
				return bv.Eq.bL(bf);
			return bT.QG(bf.mode, ER, bf)
		};
		var uR = function (ff) {
			var bW = zk[ff];
			if (!bW)
				return;
			if (!!bW.req)
				bW.req.ch();
			delete zk[ff]
		};
		var baf = function (ff, bDM) {
			var bW = zk[ff];
			if (!bW)
				return;
			uR(ff);
			try {
				var bc = {
					type : bDM,
					result : arguments[2]
				};
				wD(bc);
				if (!bc.stopped)
					(bW[bDM] || co)(bc.result)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex)
			}
		};
		var zi = function (ff, bl) {
			baf(ff, "onload", bl)
		};
		var Rm = function (ff, cS) {
			baf(ff, "onerror", cS)
		};
		return function (cg, bf) {
			bf = bf || {};
			var ff = bm.nq(),
			bW = {
				onload : bf.onload || co,
				onerror : bf.onerror || co
			};
			zk[ff] = bW;
			bf.onload = zi.bh(null, ff);
			bf.onerror = Rm.bh(null, ff);
			if (!!bf.query) {
				var kZ = cg.indexOf("?") < 0 ? "?" : "&",
				cC = bf.query;
				if (bm.bLC(cC))
					cC = bm.eK(cC);
				if (!!cC)
					cg += kZ + cC
			}
			bf.url = cg;
			bW.req = boI(bf);
			bW.req.MY(bf.data);
			return ff
		}
	}
	();
	bH.lX = function (en, bf) {
		var hO = {
			mode : 0,
			type : "json",
			query : null,
			cookie : !1,
			headers : {},
			onload : null,
			onerror : null,
			onuploading : null,
			onbeforerequest : null
		};
		NEJ.EX(hO, bf);
		hO.data = en;
		hO.method = "POST";
		hO.timeout = 0;
		hO.headers[eL.wF] = eL.Df;
		return bH.cR(en.action, hO)
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	bW = {},
	qR =  + (new Date) + "-";
	Fp.dN = function () {
		var dm = 0;
		var zh = function () {
			if (dm > 0)
				return;
			dm = 0;
			bj.bG(document, "templateready");
			bj.kB(document, "templateready")
		};
		var Ez = function (eX, bf) {
			var dW = Fp.bI(eX, "src");
			if (!dW)
				return;
			bf = bf || bZ;
			var gP = bf.root;
			if (!gP) {
				gP = eX.ownerDocument.location.href
			} else {
				gP = bm.RZ(gP)
			}
			dW = dW.split(",");
			bm.bLt(dW, function (bz, bu, bk) {
				bk[bu] = bm.RZ(bz, gP)
			});
			return dW
		};
		var boG = function (eX, bf) {
			if (!eX)
				return;
			var dW = Ez(eX, bf);
			if (!!dW)
				bH.bpV(dW, {
					version : Fp.bI(eX, "version")
				});
			Fp.VA(eX.value)
		};
		var boF = function (bz) {
			dm--;
			Fp.VB(bz);
			zh()
		};
		var boB = function (eX, bf) {
			if (!eX)
				return;
			var dW = Ez(eX, bf),
			pH = eX.value;
			if (!!dW) {
				dm++;
				var bf = {
					version : Fp.bI(eX, "version"),
					onloaded : boF.bh(null, pH)
				};
				window.setTimeout(bH.bpZ.bh(bH, dW, bf), 0);
				return
			}
			Fp.VB(pH)
		};
		var boz = function (it) {
			dm--;
			Fp.dN(it);
			zh()
		};
		var bot = function (eX, bf) {
			if (!eX)
				return;
			var dW = Ez(eX, bf)[0];
			if (!!dW) {
				dm++;
				var bf = {
					version : Fp.bI(eX, "version"),
					onloaded : boz
				};
				window.setTimeout(bH.YV.bh(bH, dW, bf), 0)
			}
		};
		var boo = function (bC, fc) {
			dm--;
			Fp.zf(bC, fc || "");
			zh()
		};
		var bol = function (eX, bf) {
			if (!eX || !eX.id)
				return;
			var bC = eX.id,
			dW = Ez(eX, bf)[0];
			if (!!dW) {
				dm++;
				var cg = dW + (dW.indexOf("?") < 0 ? "?" : "&") + (Fp.bI(eX, "version") || ""),
				bf = {
					type : "text",
					method : "GET",
					onload : boo.bh(null, bC)
				};
				window.setTimeout(bH.cR.bh(bH, cg, bf), 0)
			}
		};
		var bof = function (bid, bf) {
			var bDM = bid.name.toLowerCase();
			switch (bDM) {
			case "jst":
				Fp.mI(bid, !0);
				return;
			case "txt":
				Fp.zf(bid.id, bid.value || "");
				return;
			case "ntp":
				Fp.mo(bid.value || "", bid.id);
				return;
			case "js":
				boB(bid, bf);
				return;
			case "css":
				boG(bid, bf);
				return;
			case "html":
				bot(bid, bf);
				return;
			case "res":
				bol(bid, bf);
				return
			}
		};
		bK.hh.bL({
			element : document,
			event : "templateready",
			oneventadd : zh
		});
		return function (bD, bf) {
			bD = Fp.bw(bD);
			if (!!bD) {
				var bk = bD.tagName == "TEXTAREA" ? [bD] : bD.getElementsByTagName("textarea");
				bm.bLt(bk, function (bid) {
					bof(bid, bf)
				});
				Fp.fx(bD, !0)
			}
			zh();
			return this
		}
	}
	();
	Fp.zf = function (bF, bz) {
		bW[bF] = bz || "";
		return this
	};
	Fp.ku = function (bF) {
		return bW[bF] || ""
	};
	Fp.mo = function (bD, bF) {
		bF = bF || bm.nq();
		bD = Fp.bw(bD) || bD;
		Fp.zf(qR + bF, bD);
		Fp.mH(bD);
		return bF
	};
	Fp.eP = function (bF) {
		if (!bF)
			return null;
		bF = qR + bF;
		var bz = Fp.ku(bF);
		if (!bz)
			return null;
		if (bm.fX(bz)) {
			bz = Fp.tU(bz);
			Fp.zf(bF, bz)
		}
		return bz.cloneNode(!0)
	};
	Fp.sq = function () {
		var wD = function (bz, bF) {
			return bF == "offset" || bF == "limit"
		};
		return function (bk, bt, bf) {
			var cK = [];
			if (!bk || !bk.length || !bt)
				return cK;
			bf = bf || bZ;
			var jx = bk.length,
			iA = parseInt(bf.offset) || 0,
			iy = Math.min(jx, iA + (parseInt(bf.limit) || jx)),
			fT = {
				total : bk.length,
				range : [iA, iy]
			};
			NEJ.X(fT, bf, wD);
			for (var i = iA, dx; i < iy; i++) {
				fT.index = i;
				fT.data = bk[i];
				dx = bt.bL(fT);
				var bC = dx.yf();
				bW[bC] = dx;
				dx.ch = dx.ch.ee(function (bC, dx) {
						delete bW[bC];
						delete dx.ch
					}
						.bh(null, bC, dx));
				cK.push(dx)
			}
			return cK
		}
	}
	();
	Fp.baq = function (bC) {
		return bW[bC]
	};
	Fp.byI = function (cW, bf) {
		bf = bf || bZ;
		Fp.dN(bf.tid || "template-box");
		bj.bs(document, "templateready", function () {
			cW.bL().bG("onshow", bf)
		})
	};
	be("dbg").dumpTC = function () {
		return bW
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bv = be("nej.ui"),
	bb;
	if (!!bv.ic)
		return;
	bv.ic = NEJ.C();
	bb = bv.ic.bN(bK.eW);
	bb.dv = function () {
		this.dF();
		Fp.Vs();
		this.bLv();
		this.bFa()
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.boc(bf.clazz);
		this.bas(bf.parent)
	};
	bb.cX = function () {
		this.dc();
		this.baw();
		delete this.gB;
		Fp.mH(this.bB);
		Fp.bR(this.bB, this.Jg);
		delete this.Jg
	};
	bb.bLv = co;
	bb.bFa = function () {
		if (!this.dn)
			this.bax();
		this.bB = Fp.eP(this.dn);
		if (!this.bB)
			this.bB = Fp.gH("div", this.kT);
		Fp.bV(this.bB, this.kT)
	};
	bb.bax = co;
	bb.boc = function (dZ) {
		this.Jg = dZ || "";
		Fp.bV(this.bB, this.Jg)
	};
	bb.bnO = function () {
		if (!this.kT)
			return;
		Fp.bV(this.gB, this.kT + "-parent")
	};
	bb.baw = function () {
		if (!this.kT)
			return;
		Fp.bR(this.gB, this.kT + "-parent")
	};
	bb.kw = function () {
		return this.bB
	};
	bb.bas = function (cU) {
		if (!this.bB)
			return this;
		this.baw();
		if (bm.gj(cU)) {
			this.gB = cU(this.bB)
		} else {
			this.gB = Fp.bw(cU);
			if (!!this.gB)
				this.gB.appendChild(this.bB)
		}
		this.bnO();
		return this
	};
	bb.bO = function () {
		if (!this.gB || !this.bB || this.bB.parentNode == this.gB)
			return this;
		this.gB.appendChild(this.bB);
		return this
	};
	bb.cj = function () {
		Fp.mH(this.bB);
		return this
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bT = be("nej.h"),
	bv = be("nej.ui"),
	pU,
	baF;
	if (!!bv.za)
		return;
	bv.za = NEJ.C();
	pU = bv.za.bN(bv.ic);
	baF = bv.za.du;
	pU.cw = function (bf) {
		this.cA(bf);
		this.us("oncontentready", bf.oncontentready || this.bnL.bh(this));
		this.bnE = !!bf.nohack;
		this.bnD = !!bf.destroyable;
		this.baL(bf.content)
	};
	pU.cX = function () {
		this.bG("onbeforerecycle");
		this.dc();
		this.DS();
		this.baL("");
		Fp.pD(this.bB, {
			top : "",
			left : ""
		})
	};
	pU.bnL = co;
	pU.yU = co;
	pU.DS = function () {
		Fp.mH(this.bB);
		if (!!this.og) {
			this.og = bT.Pp(this.bB);
			delete this.og
		}
	};
	pU.baL = function (ci) {
		if (!this.bB || !this.bLD || ci == null)
			return this;
		ci = ci || "";
		bm.fX(ci) ? this.bLD.innerHTML = ci : this.bLD.appendChild(ci);
		this.bG("oncontentready", this.bLD);
		return this
	};
	pU.fJ = function (cl) {
		var bz = cl.top;
		if (bz != null) {
			bz += "px";
			Fp.bY(this.bB, "top", bz);
			Fp.bY(this.og, "top", bz)
		}
		var bz = cl.left;
		if (bz != null) {
			bz += "px";
			Fp.bY(this.bB, "left", bz);
			Fp.bY(this.og, "left", bz)
		}
		return this
	};
	pU.bO = function () {
		Fp.bY(this.bB, "visibility", "hidden");
		baF.bO.apply(this, arguments);
		this.yU();
		Fp.bY(this.bB, "visibility", "");
		if (!this.bnE) {
			this.og = bT.og(this.bB)
		}
		return this
	};
	pU.cj = function () {
		this.bnD ? this.ch() : this.DS();
		return this
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bm = be("nej.u"),
	Fp = be("nej.e"),
	bv = be("nej.ui"),
	rx;
	if (!!bv.GN)
		return;
	bv.GN = NEJ.C();
	rx = bv.GN.bN(bv.ic);
	rx.cw = function (bf) {
		this.yT();
		this.cA(this.bnz(bf));
		this.cO.onbeforerecycle = this.ch.bh(this);
		this.mn = this.JW()
	};
	rx.cX = function () {
		this.bG("onbeforerecycle");
		this.dc();
		delete this.cO;
		Fp.mH(this.bB);
		var yS = this.mn;
		if (!!yS) {
			delete this.mn;
			yS.ch()
		}
	};
	rx.JW = co;
	rx.bnz = function (bf) {
		var bn = {};
		bm.eJ(bf, function (bt, bF) {
			this.cO.hasOwnProperty(bF) ? this.cO[bF] = bt : bn[bF] = bt
		}, this);
		return bn
	};
	rx.yT = function () {
		this.cO = {
			clazz : "",
			parent : null,
			content : this.bB,
			destroyable : !1,
			oncontentready : null,
			nohack : !1
		}
	};
	rx.bO = function () {
		if (!!this.mn)
			this.mn.bO();
		this.bG("onaftershow");
		return this
	};
	rx.cj = function () {
		if (!!this.mn)
			this.mn.cj();
		return this
	}
})();
(function () {
	var be = NEJ.P,
	eL = be("nej.g"),
	bT = be("nej.h"),
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	bv = be("nej.ui"),
	yQ,
	baN;
	if (!!bv.yO)
		return;
	var hu = Fp.oR(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + eL.Md + ");}");
	bv.yO = NEJ.C();
	yQ = bv.yO.bN(bv.ic);
	baN = bv.yO.du;
	yQ.cw = function (bf) {
		this.cA(bf);
		var ci = bf.content || "&nbsp;";
		bm.fX(ci) ? this.bB.innerHTML = ci : this.bB.appendChild(ci)
	};
	yQ.cX = function () {
		this.dc();
		this.bB.innerHTML = "&nbsp;"
	};
	yQ.bLv = function () {
		this.kT = hu
	};
	yQ.bO = function () {
		bT.OH(this.bB);
		baN.bO.apply(this, arguments);
		return this
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bv = be("nej.ut"),
	bb;
	if (!!bv.yo)
		return;
	bv.yo = NEJ.C();
	bb = bv.yo.bN(bv.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.bns = !!bf.overflow;
		this.bB = Fp.bw(bf.body);
		this.yJ = Fp.bw(bf.view) || Fp.UO(this.bB);
		this.baR = Fp.bw(bf.mbar) || this.bB;
		this.ET = parseInt(bf.direction) || 0;
		this.dA([[document, "mouseup", this.bnq.bh(this)], [document, "mousemove", this.Kv.bh(this)], [this.baR, "mousedown", this.Kw.bh(this)]])
	};
	bb.cX = function () {
		this.dc();
		delete this.bB;
		delete this.baR;
		delete this.yJ
	};
	bb.baS = function () {
		return {
			x : Math.max(this.yJ.clientWidth, this.yJ.scrollWidth) - this.bB.offsetWidth,
			y : Math.max(this.yJ.clientHeight, this.yJ.scrollHeight) - this.bB.offsetHeight
		}
	};
	bb.Kw = function (bc) {
		bj.cu(bc);
		if (!!this.gd)
			return;
		this.gd = {
			x : bj.lB(bc),
			y : bj.oj(bc)
		};
		this.baT = this.baS()
	};
	bb.Kv = function (bc) {
		if (!this.gd)
			return;
		var cl = {
			x : bj.lB(bc),
			y : bj.oj(bc)
		};
		var vF = cl.x - this.gd.x,
		vH = cl.y - this.gd.y,
		bz = {
			top : (parseInt(Fp.bIU(this.bB, "top")) || 0) + vH,
			left : (parseInt(Fp.bIU(this.bB, "left")) || 0) + vF
		};
		this.gd = cl;
		this.fJ(bz)
	};
	bb.bnq = function (bc) {
		if (!this.gd)
			return;
		delete this.baT;
		delete this.gd;
		this.bG("ondragend", this.KI())
	};
	bb.fJ = function (bc) {
		if (!this.bns) {
			var baU = this.baT || this.baS();
			bc.top = Math.min(baU.y, Math.max(0, bc.top));
			bc.left = Math.min(baU.x, Math.max(0, bc.left))
		}
		var di = this.bB.style;
		if (this.ET == 0 || this.ET == 2)
			di.top = bc.top + "px";
		if (this.ET == 0 || this.ET == 1)
			di.left = bc.left + "px";
		this.bG("onchange", bc);
		return this
	};
	bb.KI = function () {
		return {
			left : parseInt(Fp.bIU(this.bB, "left")) || 0,
			top : parseInt(Fp.bIU(this.bB, "top")) || 0
		}
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = NEJ.P("nej.e"),
	bj = NEJ.P("nej.v"),
	bm = NEJ.P("nej.u"),
	bK = NEJ.P("nej.ut"),
	bv = NEJ.P("nej.ui"),
	hu,
	iH,
	bb,
	bJ;
	if (!!bv.EQ)
		return;
	bv.EQ = NEJ.C();
	bb = bv.EQ.bN(bv.za);
	bJ = bv.EQ.du;
	bb.dv = function () {
		this.Ld = {};
		this.hP = {
			onchange : this.Kv.bh(this)
		};
		this.dF()
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.bnm(bf.mask);
		this.bnl(bf.align);
		this.Lm(bf.title);
		if (!bf.draggable)
			return;
		this.lb = bK.yo.bL(this.hP)
	};
	bb.cX = function () {
		this.dc();
		delete this.lL;
		delete this.yB;
		if (!!this.bjb) {
			this.bjb.ch();
			delete this.bjb
		}
		if (!!this.lb) {
			this.lb.ch();
			delete this.lb
		}
	};
	bb.bLv = function () {
		this.kT = hu;
		this.dn = iH
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.dh(this.bB);
		this.bLD = bk[1];
		this.hP.mbar = bk[0];
		this.hP.body = this.bB;
		bj.bs(bk[2], "mousedown", this.bng.bh(this));
		bj.bs(this.hP.mbar, "mousedown", this.Kw.bh(this));
		this.vI = Fp.dh(this.hP.mbar)[0]
	};
	bb.bng = function (bc) {
		bj.cu(bc);
		this.bG("onclose");
		this.cj()
	};
	bb.Kw = function (bc) {
		bj.bG(document, "click")
	};
	bb.Kv = function (bc) {
		if (!this.og)
			return;
		Fp.pD(this.og, {
			top : bc.top + "px",
			left : bc.left + "px"
		})
	};
	bb.yU = function () {
		var lr = [function () {
				return 0
			}, function (oo, dP, bF) {
				return Math.max(0, oo[bF] + dP[bF] / 2)
			}, function (oo, dP, bF) {
				return oo[bF] + dP[bF]
			}
		],
		bnf = ["left", "top"];
		return function () {
			var bz = {},
			di = this.bB.style,
			jc = Fp.mW(),
			oo = {
				left : jc.scrollLeft,
				top : jc.scrollTop
			},
			dP = {
				left : jc.clientWidth - this.bB.offsetWidth,
				top : jc.clientHeight - this.bB.offsetHeight
			};
			bm.bLt(bnf, function (bF, bu) {
				var el = lr[this.lL[bu]];
				if (!el)
					return;
				bz[bF] = el(oo, dP, bF)
			}, this);
			this.fJ(bz)
		}
	}
	();
	bb.bne = function () {
		if (!this.bjb) {
			if (!this.yB)
				return;
			this.Ld.parent = this.gB;
			this.bjb = this.yB.bL(this.Ld)
		}
		this.bjb.bO()
	};
	bb.DS = function () {
		if (!!this.bjb)
			this.bjb.cj();
		bJ.DS.apply(this, arguments)
	};
	bb.bnm = function (ih) {
		if (!!ih) {
			if (ih instanceof bv.yO) {
				this.bjb = ih;
				return
			}
			if (bm.gj(ih)) {
				this.yB = ih;
				return
			}
			this.yB = bv.yO;
			if (bm.fX(ih))
				this.Ld.clazz = ih;
			return
		}
		this.yB = null
	};
	bb.Lm = function (hm, fD) {
		if (!!this.vI) {
			var Ip = !fD ? "innerText" : "innerHTML";
			this.vI[Ip] = hm || "标题"
		}
		return this
	};
	bb.bnl = function () {
		var dq = /\s+/,
		bnc = {
			left : 0,
			center : 1,
			right : 2,
			auto : 3
		},
		bna = {
			top : 0,
			middle : 1,
			bottom : 2,
			auto : 3
		};
		return function (kk) {
			this.lL = (kk || "").split(dq);
			var eh = bnc[this.lL[0]];
			if (eh == null)
				eh = 1;
			this.lL[0] = eh;
			var eh = bna[this.lL[1]];
			if (eh == null)
				eh = 1;
			this.lL[1] = eh;
			return this
		}
	}
	();
	bb.bO = function () {
		bJ.bO.apply(this, arguments);
		this.bne();
		return this
	};
	hu = Fp.oR(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
	iH = Fp.mo('<div class="' + hu + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
	var be = NEJ.P,
	bm = be("nej.u"),
	bv = be("nej.ui"),
	LX;
	if (!!bv.FD)
		return;
	bv.FD = NEJ.C();
	LX = bv.FD.bN(bv.GN);
	LX.JW = function () {
		return bv.EQ.bL(this.cO)
	};
	LX.yT = function () {
		bv.FD.du.yT.apply(this, arguments);
		this.cO.mask = null;
		this.cO.title = "标题";
		this.cO.align = "";
		this.cO.draggable = !1;
		this.cO.onclose = null
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	cQ = be("nej.ui"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.eH = NEJ.C();
	bb = bo.eH.bN(cQ.FD);
	bb.cw = function (bf) {
		bf.clazz = "m-layer z-show " + (bf.clazz || "");
		bf.nohack = true;
		bf.draggable = true;
		this.cA(bf)
	};
	bb.bxe = function (bid, cD) {
		if (!bid)
			return;
		Fp.bY(bid, "display", !cD ? "none" : "");
		bid.lastChild.innerText = cD || ""
	};
	bb.dG = function (gA, cN, Bk, yE) {
		var cW = "js-lock";
		if (cN === undefined)
			return Fp.cJ(gA, cW);
		!cN ? Fp.bR(gA, cW) : Fp.bV(gA, cW);
		gA.firstChild.innerText = !cN ? Bk : yE
	};
	bo.eH.bO = function (bf) {
		bf = bf || {};
		if (bf.mask === undefined)
			bf.mask = "m-mask";
		if (bf.parent === undefined)
			bf.parent = document.body;
		if (bf.draggable === undefined)
			bf.draggable = true;
		!!this.fq && this.fq.ch();
		this.fq = this.bL(bf);
		this.fq.bO(bf);
		return this.fq
	};
	bo.eH.cj = function () {
		!!this.fq && this.fq.ch()
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.MA = NEJ.C();
	bb = bo.MA.bN(bo.eH);
	bJ = bo.MA.du;
	bb.cw = function (bf) {
		this.cA(bf);
		if (bf.bubble === undefined)
			bf.bubble = true;
		this.yF = bf.bubble;
		this.lY = bf.message || ""
	};
	bb.bLv = function () {
		this.dn = Fp.mo('<div class="lyct f-cb f-tc"></div>')
	};
	bb.bFa = function () {
		this.bLu();
		bj.bs(this.bB, "click", this.dH.bh(this))
	};
	bb.dH = function (bc) {
		var bid = bj.cf(bc, "d:action");
		if (!bid)
			return;
		if (bid.href)
			bj.cG(bc);
		if (Fp.bI(bid, "action") == "close")
			this.cj();
		if (this.yF === !1)
			bj.lg(bc);
		this.bG("onaction", Fp.bI(bid, "action"))
	};
	bb.bO = function () {
		bJ.bO.call(this);
		this.bB.innerHTML = this.lY
	};
	var fi = Fp.mI('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
	bq.Hk = function () {
		var fu;
		var dx;
		var MJ = function (yI, cv) {
			if (bm.gj(yI, "function") && yI(cv) != -1)
				dx.ch()
		};
		var rw = function () {
			!!dx && dx.cj()
		};
		return function (bf) {
			clearTimeout(fu);
			bf = bf || {};
			bf.title = bf.title || "提示";
			bf.clazz = bf.clazz || "";
			bf.parent = bf.parent || document.body;
			bf.buttons = bf.buttons || [];
			bf.message = Fp.cV(fi, bf);
			bf.onaction = MJ.bh(null, bf.action);
			if (bf.mask === undefined)
				bf.mask = true;
			if (bf.draggable === undefined)
				bf.draggable = true;
			!!dx && dx.ch();
			dx = bo.MA.bL(bf);
			dx.bO();
			if (bf.autoclose)
				fu = setTimeout(rw.bh(null), 2e3);
			return dx
		}
	}
	();
	bq.ep = function (bf) {
		bf = bf || {};
		bf.clazz = bf.clazz || "m-layer-w1";
		bf.buttons = [{
				klass : "u-btn2-2",
				action : "close",
				text : bf.btntxt || "确定"
			}
		];
		var dx = bq.Hk(bf);
		return dx
	};
	bq.bKQ = function (bf) {
		bf = bf || {};
		bf.clazz = bf.clazz || "m-layer-w2";
		bf.buttons = [{
				klass : "u-btn2-2",
				action : "ok",
				text : bf.btnok || "确定",
				style : bf.okstyle || ""
			}, {
				klass : "u-btn2-1",
				action : "close",
				text : bf.btncc || "取消",
				style : bf.ccstyle || ""
			}
		];
		var dx = bq.Hk(bf);
		return dx
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u");
	Fp.bqv = function () {
		var fg = /[\r\n]/gi,
		bW = {};
		var bqw = function (dL) {
			return (dL || "").replace(fg, "aa").length
		};
		var Yo = function (bC) {
			var bQ = bW[bC],
			Yn = Fp.bw(bC),
			bqz = Fp.bw(bC + "-counter");
			if (!Yn || !bQ)
				return;
			var bc = {
				input : Yn.value
			};
			bc.length = bQ.onlength(bc.input);
			bc.delta = bQ.max - bc.length;
			bQ.onchange(bc);
			bqz.innerHTML = bc.value || "剩余" + bc.delta + "个字"
		};
		return function (bD, bf) {
			var bC = Fp.ik(bD);
			if (!bC || !!bW[bC])
				return;
			var bQ = NEJ.X({}, bf);
			bQ.onchange = bQ.onchange || co;
			bQ.onlength = bqw;
			if (!bQ.max) {
				var Ym = parseInt(Fp.gK(bC, "maxlength")),
				Yl = parseInt(Fp.bI(bC, "maxLength"));
				bQ.max = Ym || Yl || 100;
				if (!Ym && !!Yl)
					bQ.onlength = bm.lj
			}
			bW[bC] = bQ;
			bj.bs(bC, "input", Yo.bh(null, bC));
			var bid = Fp.xf(bC, {
					nid : bQ.nid || "js-counter",
					clazz : bQ.clazz
				});
			bQ.xid = bC + "-counter";
			bid.id = bQ.xid;
			Yo(bC)
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bT = be("nej.h");
	bT.Jk = function (bD, dZ) {}

})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bv = be("nej.p"),
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bT = be("nej.h");
	if (bv.jN.trident)
		return;
	bT.Jk = function () {
		var bW = {};
		var xB = function (bc) {
			var gD = bj.cf(bc);
			if (!!gD.value)
				return;
			Fp.bY(Fp.xf(gD), "display", "none")
		};
		var tx = function (bc) {
			var gD = bj.cf(bc);
			if (!!gD.value)
				return;
			Fp.bY(Fp.xf(gD), "display", "")
		};
		var bgv = function (gD, dZ) {
			var bC = Fp.ik(gD),
			ly = Fp.xf(gD, {
					tag : "label",
					clazz : dZ
				});
			ly.htmlFor = bC;
			var fc = Fp.gK(gD, "placeholder") || "";
			ly.innerText = fc == "null" ? "" : fc;
			var dT = gD.offsetHeight + "px";
			Fp.pD(ly, {
				left : 0,
				display : !gD.value ? "" : "none"
			})
		};
		return bT.Jk.ee(function (bc) {
			bc.stopped = !0;
			var ce = bc.args,
			gD = Fp.bw(ce[0]);
			if (!!bW[gD.id])
				return;
			bgv(gD, ce[1]);
			bW[gD.id] = !0;
			bj.bs(gD, "blur", tx.bh(null));
			bj.bs(gD, "focus", xB.bh(null))
		})
	}
	()
})();
(function () {
	var be = NEJ.P,
	bT = be("nej.h"),
	Fp = be("nej.e"),
	dr = be("nej.x");
	Fp.fm = dr.fm = function (bD, dZ) {
		bT.Jk(bD, Fp.bI(bD, "holder") || dZ || "js-placeholder");
		return this
	};
	dr.isChange = !0
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bv = be("nej.ut"),
	fV;
	if (!!bv.JM)
		return;
	bv.JM = NEJ.C();
	fV = bv.JM.bN(bv.eW);
	fV.dv = function () {
		this.dF();
		this.uT = {
			tp : {
				nid : "js-nej-tp"
			},
			ok : {
				nid : "js-nej-ok"
			},
			er : {
				nid : "js-nej-er"
			}
		}
	};
	fV.cw = function (bf) {
		this.cA(bf);
		this.fL = document.forms[bf.form] || Fp.bw(bf.form);
		this.dA([[this.fL, "keypress", this.bqF.bh(this)]]);
		this.lY = bf.message || {};
		this.lY.pass = this.lY.pass || "&nbsp;";
		var eU = this.li(this.fL, "focusMode", 1);
		if (!isNaN(eU)) {
			this.Yk = {
				mode : eU,
				clazz : bf.focus
			}
		}
		this.sd = bf.holder;
		this.uT.tp.clazz = "js-mhd " + (bf.tip || "js-tip");
		this.uT.ok.clazz = "js-mhd " + (bf.pass || "js-pass");
		this.uT.er.clazz = "js-mhd " + (bf.error || "js-error");
		this.Yg = bf.invalid || "js-invalid";
		this.bqJ(bf);
		this.gm();
		if (!!this.bLG)
			this.bLG.focus()
	};
	fV.cX = function () {
		this.dc();
		delete this.lY;
		delete this.bLG;
		delete this.uS;
		delete this.fL;
		delete this.Yf;
		delete this.Ap
	};
	fV.li = function (bid, bqN, bDM) {
		var bz = Fp.bI(bid, bqN);
		switch (bDM) {
		case 1:
			return parseInt(bz);
		case 2:
			return (bz || "").toLowerCase() == "true";
		case 3:
			return this.Jx(bz)
		}
		return bz
	};
	fV.ru = function (bz, bDM) {
		if (bDM == "date")
			return this.Jx(bz);
		return parseInt(bz)
	};
	fV.Et = function () {
		var hy = /^button|submit|reset|image|hidden|file$/i;
		return function (bid) {
			bid = this.bw(bid) || bid;
			var bDM = bid.type;
			return !!bid.name && !hy.test(bid.type || "")
		}
	}
	();
	fV.bqQ = function () {
		var hy = /^hidden$/i;
		return function (bid) {
			if (this.Et(bid))
				return !0;
			bid = this.bw(bid) || bid;
			var bDM = bid.type || "";
			return hy.test(bDM)
		}
	}
	();
	fV.Jx = function () {
		var dq = /[-\/]/;
		var bqR = function (bz) {
			if (!bz)
				return "";
			bz = bz.split(dq);
			bz.push(bz.shift());
			return bz.join("/")
		};
		return function (bz) {
			if ((bz || "").toLowerCase() == "now")
				return  + (new Date);
			return Date.parse(bqR(bz))
		}
	}
	();
	fV.bqF = function (bc) {
		if (bc.keyCode != 13)
			return;
		this.bG("onenter", bc)
	};
	fV.bqS = function (bC, bX) {
		var mM = this.Ap[bX],
		bz = this.li(bC, bX);
		if (!bz || !mM)
			return;
		this.Eu(bC, mM);
		this.Jq(bC, bX, bz)
	};
	fV.bqV = function (bC, bX) {
		try {
			var XX = this.li(bC, bX);
			if (!XX)
				return;
			var bz = new RegExp(XX);
			this.Jq(bC, bX, bz);
			this.Eu(bC, this.Ap[bX])
		} catch (e) {}

	};
	fV.bqX = function (bC, bX) {
		var mM = this.Ap[bX];
		if (!!mM && this.li(bC, bX, 2))
			this.Eu(bC, mM)
	};
	fV.Jm = function (bC, bX, bz) {
		bz = parseInt(bz);
		if (isNaN(bz))
			return;
		this.Jq(bC, bX, bz);
		this.Eu(bC, this.Ap[bX])
	};
	fV.XW = function (bC, bX) {
		this.Jm(bC, bX, this.li(bC, bX))
	};
	fV.XU = function (bC, bX) {
		this.Jm(bC, bX, Fp.gK(bC, bX))
	};
	fV.XS = function (bC, bX, bDM) {
		var bz = this.ru(this.li(bC, bX), this.li(bC, "type"));
		this.Jm(bC, bX, bz)
	};
	fV.brc = function () {
		var fg = /^input|textarea$/i;
		var xB = function (bc) {
			this.Jj(bj.cf(bc))
		};
		var tx = function (bc) {
			var bid = bj.cf(bc);
			if (!this.li(bid, "ignore", 2)) {
				this.XQ(bid)
			}
		};
		return function (bid) {
			if (this.li(bid, "autoFocus", 2))
				this.bLG = bid;
			var lC = Fp.gK(bid, "placeholder");
			if (!!lC && lC != "null")
				Fp.fm(bid, this.sd);
			if (!!this.Yk && fg.test(bid.tagName))
				Fp.jq(bid, this.Yk);
			var bC = Fp.ik(bid);
			this.bqX(bC, "required");
			this.bqS(bC, "type");
			this.bqV(bC, "pattern");
			this.XU(bC, "maxlength");
			this.XU(bC, "minlength");
			this.XW(bC, "maxLength");
			this.XW(bC, "minLength");
			this.XS(bC, "min");
			this.XS(bC, "max");
			var bX = bid.name;
			this.lY[bX + "-tip"] = this.li(bid, "tip");
			this.lY[bX + "-error"] = this.li(bid, "message");
			this.Jj(bid);
			var dD = this.uS[bC],
			bl = (dD || bZ).data || bZ,
			BS = this.li(bid, "counter", 2);
			if (BS && (bl.maxlength || bl.maxLength)) {
				Fp.bqv(bC, {
					nid : this.uT.tp.nid,
					clazz : "js-counter"
				})
			}
			if (!!dD && fg.test(bid.tagName)) {
				this.dA([[bid, "focus", xB.bh(this)], [bid, "blur", tx.bh(this)]])
			} else if (this.li(bid, "focus", 2)) {
				this.dA([[bid, "focus", xB.bh(this)]])
			}
		}
	}
	();
	fV.bqJ = function () {
		var tW = {
			number : /^[\d]+$/i,
			url : /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
			email : /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
			date : function (v) {
				return !v || !isNaN(this.Jx(v))
			}
		};
		var brg = {
			required : function (bid) {
				var bDM = bid.type,
				brh = !bid.value,
				bri = (bDM == "checkbox" || bDM == "radio") && !bid.checked;
				if (bri || brh)
					return -1
			},
			type : function (bid, bf) {
				var dq = this.Yf[bf.type],
				pH = bid.value.trim(),
				brj = !!dq.test && !dq.test(pH),
				brk = bm.gj(dq) && !dq.call(this, pH);
				if (brj || brk)
					return -2
			},
			pattern : function (bid, bf) {
				if (!bf.pattern.test(bid.value))
					return -3
			},
			maxlength : function (bid, bf) {
				if (bid.value.length > bf.maxlength)
					return -4
			},
			minlength : function (bid, bf) {
				if (bid.value.length < bf.minlength)
					return -5
			},
			maxLength : function (bid, bf) {
				if (bm.lj(bid.value) > bf.maxLength)
					return -4
			},
			minLength : function (bid, bf) {
				if (bm.lj(bid.value) < bf.minLength)
					return -5
			},
			min : function (bid, bf) {
				var bJx = this.ru(bid.value, bf.type);
				if (isNaN(bJx) || bJx < bf.min)
					return -6
			},
			max : function (bid, bf) {
				var bJx = this.ru(bid.value, bf.type);
				if (isNaN(bJx) || bJx > bf.max)
					return -7
			}
		};
		return function (bf) {
			this.Yf = NEJ.X(NEJ.X({}, tW), bf.type);
			this.Ap = NEJ.X(NEJ.X({}, brg), bf.attr)
		}
	}
	();
	fV.Eu = function (bC, Ca) {
		if (!bm.gj(Ca))
			return;
		var dD = this.uS[bC];
		if (!dD || !dD.func) {
			dD = dD || {};
			dD.func = [];
			this.uS[bC] = dD
		}
		dD.func.push(Ca)
	};
	fV.Jq = function (bC, bX, bz) {
		if (!bX)
			return;
		var dD = this.uS[bC];
		if (!dD || !dD.data) {
			dD = dD || {};
			dD.data = {};
			this.uS[bC] = dD
		}
		dD.data[bX] = bz
	};
	fV.XQ = function (bid) {
		bid = this.bw(bid) || bid;
		var dD = this.uS[Fp.ik(bid)];
		if (!bid || !dD || !this.Et(bid))
			return !0;
		var bn;
		bm.eJ(dD.func, function (lr) {
			bn = lr.call(this, bid, dD.data);
			return bn != null
		}, this);
		if (bn == null) {
			var bc = {
				target : bid,
				form : this.fL
			};
			this.bG("oncheck", bc);
			bn = bc.value
		}
		var bc = {
			target : bid,
			form : this.fL
		};
		if (bn != null) {
			bc.code = bn;
			this.bG("oninvalid", bc);
			if (!bc.stopped) {
				this.brl(bid, bc.value || this.lY[bid.name + bn])
			}
		} else {
			this.bG("onvalid", bc);
			if (!bc.stopped)
				this.brm(bid, bc.value)
		}
		return bn == null
	};
	fV.qk = function () {
		var brn = function (Hh, Hf) {
			return Hh == Hf ? "block" : "none"
		};
		var bro = function (bid, bDM, cD) {
			var lC = XP.call(this, bid, bDM);
			if (!lC && !!cD)
				lC = Fp.xf(bid, this.uT[bDM]);
			return lC
		};
		var XP = function (bid, bDM) {
			var lC;
			if (bDM == "tp")
				lC = Fp.bw(bid.name + "-tip");
			if (!lC)
				lC = Fp.bP(bid.parentNode, this.uT[bDM].nid)[0];
			return lC
		};
		return function (bid, cD, bDM) {
			bid = this.bw(bid) || bid;
			if (!bid)
				return;
			bDM == "er" ? Fp.bV(bid, this.Yg) : Fp.bR(bid, this.Yg);
			var lC = bro.call(this, bid, bDM, cD);
			if (!!lC && !!cD)
				lC.innerHTML = cD;
			bm.eJ(this.uT, function (bz, bF) {
				Fp.bY(XP.call(this, bid, bF), "display", brn(bDM, bF))
			}, this)
		}
	}
	();
	fV.Jj = function (bid, cD) {
		this.qk(bid, cD || this.lY[bid.name + "-tip"], "tp");
		return this
	};
	fV.brm = function (bid, cD) {
		this.qk(bid, cD || this.lY[bid.name + "-pass"] || this.lY.pass, "ok");
		return this
	};
	fV.brl = function (bid, cD) {
		this.qk(bid, cD || this.lY[bid.name + "-error"], "er");
		return this
	};
	fV.iU = function () {
		var fg = /^(?:radio|checkbox)$/i;
		var brq = function (bz) {
			return bz == null ? "" : bz
		};
		var XN = function (bz, bid) {
			if (fg.test(bid.type || "")) {
				bid.checked = bz == bid.value
			} else {
				bid.value = brq(bz)
			}
		};
		return function (bX, bz) {
			var bid = this.bw(bX);
			if (!bid)
				return this;
			if (bid.tagName == "SELECT" || !bid.length) {
				XN(bz, bid)
			} else {
				bm.bLt(bid, XN.bh(null, bz))
			}
			return this
		}
	}
	();
	fV.bw = function (bX) {
		return this.fL.elements[bX]
	};
	fV.bys = function () {
		return this.fL
	};
	fV.brt = function () {
		var fg = /^radio|checkbox$/i,
		hy = /^number|date$/;
		var bru = function (bLs, bid) {
			var bX = bid.name,
			bz = bid.value,
			dD = bLs[bX],
			bDM = this.li(bid, "type");
			if (hy.test(bDM))
				bz = this.ru(bz, bDM);
			if (fg.test(bid.type) && !bid.checked) {
				bz = this.li(bid, "value");
				if (!bz)
					return
			}
			if (!!dD) {
				if (!bm.fz(dD)) {
					dD = [dD];
					bLs[bX] = dD
				}
				dD.push(bz)
			} else {
				bLs[bX] = bz
			}
		};
		return function () {
			var bn = {};
			bm.bLt(this.fL.elements, function (bid) {
				if (this.bqQ(bid))
					bru.call(this, bn, bid)
			}, this);
			return bn
		}
	}
	();
	fV.Za = function () {
		var brv = function (bid) {
			if (this.Et(bid))
				this.Jj(bid)
		};
		return function () {
			this.fL.reset();
			bm.bLt(this.fL.elements, brv, this);
			return this
		}
	}
	();
	fV.byr = function () {
		this.fL.submit();
		return this
	};
	fV.gm = function () {
		var brx = function (bid) {
			if (this.Et(bid))
				this.brc(bid)
		};
		return function () {
			this.uS = {};
			bm.bLt(this.fL.elements, brx, this);
			return this
		}
	}
	();
	fV.bry = function (bid) {
		bid = this.bw(bid) || bid;
		if (!!bid)
			return this.XQ(bid);
		var bn = !0;
		bm.bLt(this.fL.elements, function (bid) {
			var mw = this.bry(bid);
			bn = bn && mw
		}, this);
		return bn
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.MR = NEJ.C();
	bb = bo.MR.bN(bo.eH);
	bJ = bo.MR.du;
	bb.bFa = function () {
		this.bLu();
		bj.bs(this.bB, "click", this.dH.bh(this));
		bj.bs(document, "mousewheel", this.XE.bh(this));
		if (!!document.body.addEventListener)
			document.body.addEventListener("DOMMouseScroll", this.XE.bh(this))
	};
	bb.cw = function (bf) {
		this.cA(bf);
		if (bf.jst) {
			this.bB.innerHTML = Fp.cV(bf.jst, bf.data)
		} else if (bf.ntp) {
			this.bB.appendChild(Fp.eP(bf.ntp))
		} else if (bf.txt) {
			this.bB.innerHTML = Fp.ku(bf.txt)
		} else if (bf.html) {
			this.bB.innerHTML = bf.html
		}
		var bAl = this.bB.getElementsByTagName("form");
		if (bAl.length) {
			this.fL = bK.JM.bL({
					form : bAl[0]
				})
		}
		this.GL = Fp.dh(this.bB)[0]
	};
	bb.cX = function () {
		this.dc();
		this.bB.innerHTML = "";
		delete this.GL
	};
	bb.dH = function (bc) {
		var bid = bj.cf(bc, "d:action"),
		bl = this.fL ? this.fL.brt() : null,
		bc = {
			action : Fp.bI(bid, "action")
		};
		if (bl)
			bc.data = bl;
		if (bc.action) {
			this.bG("onaction", bc);
			if (bc.stopped)
				return;
			this.cj()
		}
	};
	bb.XE = function (bc) {
		if (!this.GL)
			return;
		bj.cu(bc);
		var dP = bc.wheelDelta || -bc.detail;
		this.GL.scrollTop -= dP
	};
	bq.vE = function (bf) {
		bf.destroyable = bf.destroyable || true;
		bf.title = bf.title || "提示";
		bf.draggable = true;
		bf.parent = document.body;
		bf.mask = bf.mask || true;
		var yS = bo.MR.bL(bf);
		yS.bO();
		return yS
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bm = be("nej.u"),
	bp = be("nm.d"),
	de = {};
	bp.bw = function (bF) {
		return de[bF]
	};
	bp.nK = function (bF, bQ) {
		de[bF] = bQ
	};
	bp.gN = function (bl) {
		bm.eJ(bl, function (bt, bF) {
			var bQ = de[bF] || {};
			NEJ.X(bQ, bt);
			de[bF] = bQ
		})
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bT = be("nej.h");
	bT.It = function (bF) {
		return localStorage.getItem(bF)
	};
	bT.EA = function (bF, bz) {
		localStorage.setItem(bF, bz)
	};
	bT.NM = function (bF) {
		localStorage.removeItem(bF)
	};
	bT.NO = function () {
		localStorage.clear()
	};
	bT.bmW = function () {
		var bn = [];
		for (var i = 0, l = localStorage.length; i < l; i++)
			bn.push(localStorage.key(i));
		return bn
	};
	bT.NW = function () {
		(document.onstorageready || co)()
	};
	bT.NY = function () {
		return !0
	}
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.p"),
	hf = be("nej.c"),
	bT = be("nej.h"),
	nf;
	if (bv.jN.trident || !!window.localStorage)
		return;
	var bmV = function () {
		var mU,
		fu;
		var Ow = function () {
			mU = document.createElement("div");
			NEJ.X(mU.style, {
				position : "absolute",
				top : 0,
				left : 0,
				width : "1px",
				height : "1px",
				zIndex : 1e4,
				overflow : "hidden"
			});
			document.body.insertAdjacentElement("afterBegin", mU);
			mU.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' +  + (new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + hf.bw("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
		};
		var zx = function () {
			fu = window.clearTimeout(fu);
			var gh = mU.getElementsByTagName("object")[0];
			if (!!gh.initStorage) {
				delete mU;
				nf = gh;
				nf.initStorage("nej-storage");
				(document.onstorageready || co)();
				return
			}
			fu = window.setTimeout(zx, 500)
		};
		return function () {
			if (!!nf)
				return;
			Ow();
			zx()
		}
	}
	();
	bT.It = bT.It.ee(function (bc) {
			bc.stopped = !0;
			if (!nf)
				return;
			bc.value = nf.getItem(bc.args[0])
		});
	bT.EA = bT.EA.ee(function (bc) {
			bc.stopped = !0;
			if (!nf)
				return;
			var ce = bc.args;
			nf.setItem(ce[0], ce[1])
		});
	bT.NM = bT.NM.ee(function (bc) {
			bc.stopped = !0;
			if (!nf)
				return;
			nf.removeItem(bc.args[0])
		});
	bT.NO = bT.NO.ee(function (bc) {
			bc.stopped = !0;
			if (!!nf)
				nf.clear()
		});
	bT.NW = bT.NW.ee(function (bc) {
			bc.stopped = !0;
			bmV()
		});
	bT.NY = bT.NY.ee(function (bc) {
			bc.stopped = !0;
			bc.value = !!nf
		})
})();
(function () {
	var be = NEJ.P,
	bm = be("nej.u"),
	bj = be("nej.v"),
	bT = be("nej.h"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	bW = {};
	bH.yX = function (bF, bz) {
		var bbb = JSON.stringify(bz);
		try {
			bT.EA(bF, bbb)
		} catch (ex) {
			console.error(ex.message);
			console.error(ex)
		}
		if (bbb != bT.It(bF))
			bW[bF] = bz;
		return this
	};
	bH.vz = function (bF) {
		var bl = JSON.parse(bT.It(bF) || "null");
		return bl == null ? bW[bF] : bl
	};
	bH.byL = function (bF, bz) {
		var bl = bH.vz(bF);
		if (bl == null) {
			bl = bz;
			bH.yX(bF, bl)
		}
		return bl
	};
	bH.HU = function (bF) {
		delete bW[bF];
		bT.NM(bF);
		return this
	};
	bH.byM = function () {
		var Os = function (bt, bF, bLs) {
			delete bLs[bF]
		};
		return function () {
			bm.eJ(bW, Os);
			bT.NO();
			return this
		}
	}
	();
	bH.byN = function (bn) {
		bn = bn || {};
		bm.bLt(bT.bmW(), function (bF) {
			bn[bF] = bH.vz(bF)
		});
		return bn
	};
	bK.hh.bL({
		element : document,
		event : "storageready",
		oneventadd : function () {
			if (bT.NY()) {
				document.onstorageready()
			}
		}
	});
	var bmN = function () {
		var bmM = function (bz, bF, bLs) {
			bT.EA(bF, JSON.stringify(bz));
			delete bLs[bF]
		};
		return function () {
			bm.eJ(bW, bmM)
		}
	}
	();
	bj.bs(document, "storageready", bmN);
	bT.NW()
})();
(function () {
	var be = NEJ.P,
	bj = be("nej.v"),
	bm = be("nej.u"),
	bv = be("nej.ut"),
	xU;
	if (!!bv.Ox)
		return;
	bv.Ox = NEJ.C();
	xU = bv.Ox.bN(bv.eW);
	xU.dv = function () {
		var fi =  + (new Date),
		bin = "dat-" + fi;
		return function () {
			this.dF();
			var bW = this.constructor[bin];
			if (!bW) {
				bW = {};
				this.constructor[bin] = bW
			}
			this.bA = bW
		}
	}
	();
	xU.bw = function (bF) {
		return this.bA[bF]
	};
	xU.nK = function (bF, bz) {
		var lZ = this.bA[bF];
		this.bA[bF] = bz;
		bj.bG(localCache, "cachechange", {
			key : bF,
			type : "set",
			oldValue : lZ,
			newValue : bz
		});
		return this
	};
	xU.fx = function (bF) {
		var lZ = this.bA[bF];
		bm.Ec(this.bA, bF);
		bj.bG(localCache, "cachechange", {
			key : bF,
			type : "delete",
			oldValue : lZ,
			newValue : undefined
		});
		return lZ
	};
	xU.OG = function (bjg) {
		return NEJ.Q(this.bA, bjg)
	};
	window.localCache = bv.Ox.bL();
	bv.hh.bL({
		element : localCache,
		event : "cachechange"
	})
})();
(function () {
	var be = NEJ.P,
	fP = NEJ.R,
	co = NEJ.F,
	bm = be("nej.u"),
	bH = be("nej.j"),
	bv = be("nej.ut"),
	bin = "dat-" +  + (new Date),
	jI;
	if (!!bv.OJ)
		return;
	bv.OJ = NEJ.C();
	jI = bv.OJ.bN(bv.eW);
	jI.dv = function () {
		this.dF();
		this.bA = this.constructor[bin];
		if (!this.bA) {
			this.bA = {};
			this.bA[bin + "-l"] = {};
			this.constructor[bin] = this.bA
		}
	};
	jI.mt = function (bF) {
		return this.bA[bF]
	};
	jI.lI = function (bF, bz) {
		this.bA[bF] = bz
	};
	jI.iG = function (bF, mP) {
		var bl = this.mt(bF);
		if (bl == null) {
			bl = mP;
			this.lI(bF, bl)
		}
		return bl
	};
	jI.bmL = function (bF) {
		if (bF != null) {
			delete this.bA[bF];
			return
		}
		bm.eJ(this.bA, function (bt, bF) {
			if (bF == bin + "-l")
				return;
			this.bmL(bF)
		}, this)
	};
	jI.bxD = function (bF) {
		if (!!bH.HU)
			return bH.HU(bF)
	};
	jI.bmI = function (bF) {
		if (!!bH.vz)
			return bH.vz(bF)
	};
	jI.bmH = function (bF, bz) {
		if (!!bH.yX)
			bH.yX(bF, bz)
	};
	jI.zq = function (bF, mP) {
		var bl = this.Gj(bF);
		if (bl == null) {
			bl = mP;
			this.sv(bF, bl)
		}
		return bl
	};
	jI.Gj = function (bF) {
		var bl = this.mt(bF);
		if (bl != null)
			return bl;
		bl = this.bmI(bF);
		if (bl != null)
			this.lI(bF, bl);
		return bl
	};
	jI.sv = function (bF, bz) {
		this.bmH(bF, bz);
		this.lI(bF, bz)
	};
	jI.bbc = function (bF) {
		if (bF != null) {
			delete this.bA[bF];
			if (!!bH.HU)
				bH.HU(bF);
			return
		}
		bm.eJ(this.bA, function (bt, bF) {
			if (bF == bin + "-l")
				return;
			this.bbc(bF)
		}, this)
	};
	jI.byT = function () {
		this.bbc();
		return this
	};
	jI.Pr = function (bF) {
		var bl = this.bA[bin + "-l"],
		ce = fP.slice.call(arguments, 1);
		bm.bLt(bl[bF], function (fF) {
			try {
				fF.apply(null, ce)
			} catch (ex) {
				console.error(ex.message);
				console.error(ex.stack)
			}
		});
		delete bl[bF]
	};
	jI.Pt = function (bF, fF) {
		fF = fF || co;
		var bk = this.bA[bin + "-l"][bF];
		if (!bk) {
			bk = [fF];
			this.bA[bin + "-l"][bF] = bk;
			return !1
		}
		bk.push(fF);
		return !0
	};
	jI.bmy = function (bk, cl, ft) {
		if (!bk)
			return !1;
		cl = parseInt(cl) || 0;
		ft = parseInt(ft) || 0;
		if (!ft) {
			if (!bk.loaded)
				return !1;
			ft = bk.length
		}
		if (!!bk.loaded)
			ft = Math.min(ft, bk.length - cl);
		for (var i = 0; i < ft; i++)
			if (!bk[cl + i])
				return !1;
		return !0
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bm = be("nej.u"),
	bv = be("nej.ut"),
	bb,
	bJ;
	if (!!bv.zv)
		return;
	bv.zv = NEJ.C();
	bb = bv.zv.bN(bv.OJ);
	bJ = bv.zv.du;
	bb.cw = function (bf) {
		this.cA(bf);
		this.pG = bf.key || "id";
		this.bS = bf.data || bZ;
		this.bmx = !!bf.autogc;
		this.bmu(bf.id)
	};
	bb.cX = function () {
		this.dc();
		if (!!this.dQ) {
			this.bbk()
		}
	};
	bb.bmu = function (bC) {
		var bW;
		if (!!bC) {
			bW = this.bA[bC];
			if (!bW) {
				bW = {};
				this.bA[bC] = bW
			}
		}
		bW = bW || this.bA;
		bW.hash = bW.hash || {};
		this.zw = bW
	};
	bb.bbk = function () {
		this.dQ = window.clearTimeout(this.dQ);
		var bLs = {};
		bm.eJ(this.zw, function (bk, bF) {
			if (bF == "hash")
				return;
			if (!bm.fz(bk))
				return;
			bm.bLt(bk, function (bt) {
				if (!bt)
					return;
				bLs[bt[this.pG]] = !0
			}, this)
		}, this);
		bm.eJ(this.HI(), function (bt, bC, bLw) {
			if (!bLs[bC]) {
				delete bLw[bC]
			}
		})
	};
	bb.bmp = function () {
		if (!!this.dQ) {
			this.dQ = window.clearTimeout(this.dQ)
		}
		this.dQ = window.setTimeout(this.bbk.bh(this), 150)
	};
	bb.vm = function (bt, PJ) {
		bt = this.bmo(bt, PJ) || bt;
		if (!bt)
			return null;
		var bF = bt[this.pG];
		if (bF != null) {
			var zM = this.HI()[bF];
			if (!!zM)
				bt = NEJ.X(zM, bt);
			this.HI()[bF] = bt
		}
		delete bt.bbl;
		return bt
	};
	bb.bmo = co;
	bb.bbm = function (bF, bt) {
		if (!bt)
			return;
		if (!bm.fz(bt)) {
			var bk = this.hX(bF),
			bt = this.vm(bt, bF);
			if (!!bt)
				bk.unshift(bt);
			return
		}
		bm.kx(bt, this.bbm.bh(this, bF))
	};
	bb.zQ = function (bF, df) {
		var bk = this.hX(bF);
		bk.length = Math.max(bk.length, df);
		this.Qb(bF);
		return this
	};
	bb.kN = function (bF) {
		return this.hX(bF).length
	};
	bb.Qb = function (bF, nF) {
		this.hX(bF).loaded = nF != !1;
		return this
	};
	bb.Qf = function (bF) {
		return !!this.hX(bF).loaded
	};
	bb.ro = function (bF, bk) {
		this.pJ(bF);
		this.Ql({
			key : bF,
			offset : 0,
			limit : bk.length + 1
		}, {
			list : bk,
			total : bk.length
		})
	};
	bb.hX = function () {
		var vf = function (bF) {
			return (bF || "") + (!bF ? "" : "-") + "list"
		};
		return function (bF) {
			var bF = vf(bF),
			bk = this.zw[bF];
			if (!bk) {
				bk = [];
				this.zw[bF] = bk
			}
			return bk
		}
	}
	();
	bb.HI = function () {
		var bLw = this.zw.hash;
		if (!bLw) {
			bLw = {};
			this.zw.hash = bLw
		}
		return bLw
	};
	bb.bbo = function () {
		var vf = function (bf) {
			return "r-" + bf.key
		};
		return function (bf) {
			var hH = NEJ.X({}, bf),
			jO = vf(hH);
			if (!this.Pt(jO, this.bG.bh(this))) {
				hH.rkey = jO;
				hH.onload = this.bmi.bh(this, hH);
				this.bG("dopullrefresh", hH)
			}
			return this
		}
	}
	();
	bb.bmi = function (bf, bk) {
		this.bbm(bf.key, bk);
		this.Pr(bf.rkey, "onpullrefresh", bf)
	};
	bb.zS = function () {
		var vf = function (bf) {
			return "r-" + bf.key + "-" + bf.offset + "-" + bf.limit
		};
		return function (bf) {
			bf = bf || bZ;
			var hH = {
				key : "" + bf.key || "",
				ext : bf.ext || null,
				data : bf.data || null,
				offset : parseInt(bf.offset) || 0,
				limit : parseInt(bf.limit) || 0
			},
			bk = this.hX(hH.key);
			if (this.bmy(bk, hH.offset, hH.limit)) {
				this.bG("onlistload", hH);
				return this
			}
			var jO = vf(hH);
			if (!this.Pt(jO, this.bG.bh(this))) {
				hH.rkey = jO;
				hH.onload = this.Ql.bh(this, hH);
				this.bG("doloadlist", hH)
			}
			return this
		}
	}
	();
	bb.Ql = function () {
		var uR = function (bt, bu, bk) {
			if (!!bt) {
				return !0
			}
			bk.splice(bu, 1)
		};
		return function (bf, bn) {
			bf = bf || bZ;
			var bF = bf.key,
			cl = bf.offset,
			bbq = this.hX(bF);
			var bk = bn || [];
			if (!bm.fz(bk)) {
				bk = bn.result || bn.list || [];
				var df = parseInt(bn.total);
				if (!isNaN(df) || df > bk.length) {
					this.zQ(bF, df)
				}
			}
			bm.bLt(bk, function (bt, bu) {
				bbq[cl + bu] = this.vm(bt, bF)
			}, this);
			if (bk.length < bf.limit) {
				this.Qb(bF);
				bm.kx(bbq, uR)
			}
			this.Pr(bf.rkey, "onlistload", bf)
		}
	}
	();
	bb.pJ = function () {
		var uR = function (bt, bu, bk) {
			bk.splice(bu, 1)
		};
		return function (bF) {
			var bk = this.hX(bF);
			bm.kx(bk, uR);
			this.Qb(bF, !1);
			if (this.bmx) {
				this.bmp()
			}
			return this
		}
	}
	();
	bb.bbt = function (bt, PJ) {
		return !bt.bbl
	};
	bb.fh = function (bC) {
		return this.HI()[bC]
	};
	bb.bzf = function (bC) {
		var bt = this.fh(bC);
		if (!!bt)
			bt.bbl = !0
	};
	bb.Aa = function () {
		var vf = function (bf) {
			return "r-" + bf.key + "-" + bf.id
		};
		return function (bf) {
			bf = bf || bZ;
			var bC = bf[this.pG],
			hH = {
				id : bC,
				ext : bf.ext,
				data : bf.data || {},
				key : "" + bf.key || ""
			};
			bt = this.fh(bC);
			hH.data[this.pG] = bC;
			if (!!bt && this.bbt(bt, hH.key)) {
				this.bG("onitemload", hH);
				return this
			}
			var jO = vf(hH);
			if (!this.Pt(jO, this.bG.bh(this))) {
				hH.rkey = jO;
				hH.onload = this.bma.bh(this, hH);
				this.bG("doloaditem", hH)
			}
			return this
		}
	}
	();
	bb.bma = function (bf, bt) {
		bf = bf || bZ;
		this.vm(bt, bf.key);
		this.Pr(bf.rkey, "onitemload", bf)
	};
	bb.jo = function (bf) {
		bf = NEJ.X({}, bf);
		bf.onload = this.xl.bh(this, bf);
		this.bG("doadditem", bf)
	};
	bb.xl = function (bf, bt) {
		var bF = bf.key;
		bt = this.vm(bt, bF);
		if (!!bt) {
			var eu = 0,
			bk = this.hX(bF);
			if (!bf.push) {
				eu = -1;
				var cl = bf.offset || 0;
				bk.splice(cl, 0, bt)
			} else if (bk.loaded) {
				eu = 1;
				bk.push(bt)
			} else {
				bk.length++
			}
		}
		var bc = {
			key : bF,
			flag : eu,
			data : bt,
			action : "add",
			ext : bf.ext
		};
		this.bG("onitemadd", bc);
		return bc
	};
	bb.Ae = function (bf) {
		bf = NEJ.X({}, bf);
		bf.onload = this.QQ.bh(this, bf);
		this.bG("dodeleteitem", bf)
	};
	bb.QQ = function (bf, blV) {
		var bt,
		bF = bf.key;
		if (!!blV) {
			bt = this.fh(bf.id) || null;
			var bC = bf.id,
			blT = this.pG,
			bk = this.hX(bF),
			bu = bm.dY(bk, function (zM) {
					return !!zM && zM[blT] == bC
				});
			if (bu >= 0)
				bk.splice(bu, 1)
		}
		var bc = {
			key : bF,
			data : bt,
			action : "delete",
			ext : bf.ext
		};
		this.bG("onitemdelete", bc);
		return bc
	};
	bb.QW = function (bf) {
		bf = NEJ.X({}, bf);
		bf.onload = this.blS.bh(this, bf);
		this.bG("doupdateitem", bf)
	};
	bb.blS = function (bf, bt) {
		var bF = bf.key;
		if (!!bt)
			bt = this.vm(bt, bF);
		var bc = {
			key : bF,
			data : bt,
			action : "update",
			ext : bf.ext
		};
		this.bG("onitemupdate", bc);
		return bc
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bm = be("nej.u"),
	bv = be("nej.ut"),
	bb;
	if (!!bv.Ri)
		return;
	bv.Ri = NEJ.C();
	bb = bv.Ri.bN(bv.zv);
	bb.cw = function (bf) {
		this.cA(bf);
		this.LQ({
			doloadlist : this.DF.bh(this),
			doloaditem : this.bbu.bh(this),
			doadditem : this.bbv.bh(this),
			dodeleteitem : this.DY.bh(this),
			doupdateitem : this.Ei.bh(this),
			dopullrefresh : this.bbw.bh(this)
		})
	};
	bb.DF = co;
	bb.bbw = co;
	bb.bbu = co;
	bb.bbv = co;
	bb.DY = co;
	bb.Ei = co
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bm = be("nej.u"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bb,
	bJ;
	bp.gY = NEJ.C();
	bb = bp.gY.bN(bK.Ri);
	bb.dg = function () {
		var bbx = location.protocol + "//" + location.host;
		var blN = function (cK, bl) {
			var bLs = {
				conf : {},
				data : {},
				urls : []
			};
			bm.bLt(cK, function (bF, bu, bk) {
				var bQ = bp.bw(bF);
				if (!bQ)
					return;
				var RD = bbJ(bQ.url, bl[bF]);
				bLs.urls.push(RD);
				bLs.conf[RD] = bQ;
				bLs.data[RD] = JSON.stringify(bl[bF] == null ? "" : bl[bF])
			});
			return bLs
		};
		var bbJ = function (cg, bl) {
			return cg.replace(/\{(.*?)\}/gi, function ($1, $2) {
				return bl[$2] || $1
			})
		};
		var bbL = function (bQ, bf, bc) {
			bj.bG(window, "requesterror", bc);
			if (!!bc.stopped)
				return;
			var wU = bQ.onerror || bf.onerror;
			if (bm.fX(wU)) {
				this.bG(wU, bc, bf)
			} else {
				(wU || co).call(this, bc, bf)
			}
			var bc = {
				result : bc,
				option : bf
			};
			this.bG("onerror", bc);
			if (!bc.stopped)
				(bQ.onmessage || co).call(this, bc.result.code, bc.result)
		};
		var bbM = function (bHN, bQ, bf) {
			var bn = bHN;
			if (bm.gj(bQ.format)) {
				bn = bQ.format.call(this, bHN, bf)
			}
			return bn
		};
		var zi = function (bHN, bQ, bf, ot) {
			if (bm.gj(bQ.beforeload)) {
				bQ.beforeload.call(this, bHN, bf, bQ)
			}
			if (bHN.code != null && bHN.code != 200) {
				bbL.call(this, bQ, bf, {
					key : bf.key,
					code : bHN.code,
					message : bHN.message || "",
					captchaId : bHN.captchaId
				});
				return
			}
			var bn = bHN;
			if (!ot) {
				bn = bbM.call(this, bHN, bQ, bf)
			} else if (bm.gj(bQ.format)) {
				var RT = [];
				bm.bLt(ot.urls, function (cg) {
					RT.push(bbM.call(this, bHN[cg], ot.conf[cg], bf))
				}, this);
				RT.push(bf);
				bn = bQ.format.apply(this, RT)
			}
			var nT = bQ.onload || bf.onload,
			bbO = bQ.finaly || bf.finaly || co;
			if (bm.fX(nT)) {
				bbO.call(this, this.bG(nT, bn), bf)
			} else {
				bbO.call(this, (nT || co).call(this, bn), bf)
			}
		};
		var Rm = function (bQ, bf, cS) {
			bbL.call(this, bQ, bf, {
				key : bf.key,
				code : cS.code || -1,
				message : cS.message || ""
			})
		};
		return function (bQ, bf) {
			if (bm.fX(bQ)) {
				bQ = bp.bw(bQ)
			}
			delete bf.value;
			(bQ.filter || co).call(this, bf, bQ);
			var bHN = bf.value;
			if (!!bHN) {
				zi.call(this, bHN, bQ, bf);
				return
			}
			var cg,
			bl = bf.data || bZ,
			qg = {
				cookie : !0,
				type : bQ.rtype || "json",
				method : bQ.type || "POST",
				onerror : Rm.bh(this, bQ, bf),
				noescape : bQ.noescape
			};
			if (bm.fz(bQ.url)) {
				var ot = blN(bQ.url, bl);
				cg = bbx + "/api/batch";
				qg.data = bm.eK(ot.data);
				qg.onload = zi.gz(this, bQ, bf, ot);
				qg.headers = {
					"batch-method" : "POST"
				};
				delete ot.data
			} else {
				var iP = bQ.url.indexOf(":") < 0 ? bbx : "";
				cg = bbJ(iP + bQ.url, bl);
				qg.data = bm.eK(bf.data);
				qg.onload = zi.gz(this, bQ, bf)
			}
			if (qg.method == "GET")
				qg.query = qg.data;
			return bH.cR(cg, qg)
		}
	}
	();
	bb.wT = function () {
		var fg = /^get|list|pull$/i;
		return function (bbS, bf) {
			var bF = bf.key,
			bQ = bp.bw(bF.split("-")[0] + "-" + bbS);
			if (fg.test(bbS) && bF.indexOf("post-") < 0)
				bQ.type = "GET";
			this.dg(bQ, bf)
		}
	}
	();
	bb.bzk = function (bF, bk) {
		var df = bk.length;
		this.Ql({
			key : bF,
			offset : 0,
			limit : df + 1
		}, {
			list : bk,
			total : df
		})
	};
	bb.DF = function (bf) {
		this.wT("list", bf)
	};
	bb.bbu = function (bf) {
		this.wT("get", bf)
	};
	bb.bbw = function (bf) {
		this.wT("pull", bf)
	};
	bb.bbv = function (bf) {
		this.wT("add", bf)
	};
	bb.DY = function (bf) {
		this.wT("del", bf)
	};
	bb.Ei = function (bf) {
		this.wT("update", bf)
	};
	bb.bPH = function (bt) {
		this.vm(bt)
	};
	bK.hh.bL({
		element : window,
		event : "requesterror"
	})
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bj = be("nej.v"),
	bK = be("nej.ut"),
	bp = be("nm.d"),
	Sq = {},
	bb,
	bJ;
	var nZ = function (bn, bf) {
		bn.conf = bf.conf;
		return bn
	};
	bp.gN({
		"res-mv-get" : {
			type : "GET",
			url : "/api/v1/mv/detail",
			format : function (bHN, bf) {
				return nZ({
					mv : bHN
				}, bf)
			}
		},
		"res-song-get" : {
			type : "GET",
			url : "/api/song/detail/",
			format : function (bn, bf) {
				if (!!bn.songs && bn.songs.length > 0)
					bn.song = bn.songs[0];
				else
					bn.song = Sq;
				delete bn.songs;
				return nZ(bn, bf)
			},
			filter : function (bf) {
				bf.data.ids = "[" + bf.data.id + "]"
			}
		},
		"res-program-get" : {
			type : "GET",
			url : "/api/dj/program/detail",
			format : nZ
		},
		"res-album-get" : {
			type : "GET",
			url : "/api/album/{id}",
			format : nZ
		},
		"res-playlist-get" : {
			type : "GET",
			url : "/api/playlist/detail",
			format : function (bn, bf) {
				bn.playlist = bn.result;
				delete bn.result;
				return nZ(bn, bf)
			}
		},
		"res-mv-play" : {
			type : "GET",
			url : "/api/song/mv/play",
			format : nZ
		},
		"res-playlist-play" : {
			type : "GET",
			url : "/api/playlist/update/playcount",
			format : nZ
		},
		"res-program-play" : {
			type : "GET",
			url : "/api/dj/program/listen",
			format : nZ
		},
		"res-djradio-get" : {
			type : "GET",
			url : "/api/dj/program/byradio",
			filter : function (bf) {
				var bk = bf.data.id.split("-");
				bf.data.radioId = bk[0];
				bf.data.asc = bk[1] == 2;
				bf.data.limit = 1e3;
				delete bf.data.id
			},
			format : function (bHN, bf) {
				var blx = {
					id : bf.data.radioId,
					programs : bHN.programs
				};
				return nZ({
					djradio : blx
				}, bf)
			}
		},
		"res-hotSongs-get" : {
			type : "GET",
			url : "/api/artist/{id}",
			format : nZ
		},
		"res-lyric-get" : {
			type : "GET",
			url : "/api/song/lyric",
			filter : function (bf) {
				bf.data.lv = 0
			},
			format : function (bn, bf) {
				var EG = {
					lyric : "",
					nolyric : true
				};
				if (bn.code == 200 && bn.lrc && bn.lrc.lyric) {
					EG.lyric = bn.lrc.lyric;
					EG.nolyric = false
				} else {
					EG.nolyric = true
				}
				return nZ({
					lyric : EG
				}, bf)
			}
		}
	});
	bp.np = NEJ.C();
	bb = bp.np.bN(bp.gY);
	bb.blw = function (bDM, cF) {
		return this.mt(this.Fi(bDM, cF))
	};
	bb.uJ = function (bDM, cF, bf) {
		bf = bf || {};
		var bl = this.mt(this.Fi(bDM, cF));
		if (bl && (bDM != 13 && bDM != 19 || bf.conf && bf.conf.useCache)) {
			this.bG("onresourceload", bDM, cF, bl, bf.conf);
			return
		}
		bf.data = {
			id : cF
		};
		bf.onload = this.blu.bh(this, bDM, cF);
		bf.onerror = this.blt.bh(this, bDM, cF);
		this.dg("res-" + this.sI(bDM) + "-get", bf)
	};
	bb.blu = function (bDM, cF, bn) {
		var bl = bn[this.sI(bDM)];
		this.lI(this.Fi(bDM, cF), bl);
		this.bG("onresourceload", bDM, cF, bl, bn.conf)
	};
	bb.blt = function (bDM, cF, bn, bf) {
		if (bn.code != 404) {
			this.bG("onresourceerror", bDM, cF, bn.code);
			return
		}
		this.lI(this.Fi(bDM, cF), Sq);
		this.bG("onresourceload", bDM, cF, Sq, bf.conf)
	};
	bb.bla = function (bDM, bf) {
		this.dg("res-" + this.sI(bDM) + "-play", bf)
	};
	bb.Fi = function (bDM, cF) {
		return "res-" + this.sI(bDM) + "-" + cF
	};
	bb.sI = function (bDM) {
		var bLs = {
			2 : "hotSongs",
			13 : "playlist",
			17 : "program",
			18 : "song",
			19 : "album",
			21 : "mv",
			41 : "lyric",
			70 : "djradio"
		};
		return bLs[bDM]
	};
	bp.np.wB = function (bDM, cF) {
		if (!this.fq)
			this.fq = bp.np.bL({});
		return this.fq.blw(bDM, cF)
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bj = be("nej.v"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bo = be("nm.l"),
	bq = be("nm.x"),
	bp = be("nm.d");
	if (!bp.np)
		return;
	var bW = bp.np.bL({
			onresourceload : bkZ
		});
	function bkZ(bDM, cF, bl, bQ) {
		var bk = [];
		switch (parseInt(bDM)) {
		case 2:
			bk = bl;
			break;
		case 13:
			bk = bl.tracks;
			break;
		case 18:
			bk.push(bl);
			break;
		case 19:
			bk = bl.songs;
			break;
		case 21:
			if (bl.mp && bl.mp.fee && bl.mp.pl <= 0) {
				bq.bLT(bl.data.id, bl.mp.fee);
				return
			}
			break
		}
		if (bq.bwp(bk, true)) {
			return
		}
		bq.ep({
			clazz : "m-layer-w2",
			bubble : !1,
			message : bQ.message
		})
	}
	function bkV(bc, tQ, bkY) {
		if (bc.action == "ok") {
			if (bkY) {
				location.dispatch2("/payfee?songId=" + bkY)
			} else {
				location.dispatch2("/payfee?fee=" + tQ || 1)
			}
		} else if (bc.action == "song") {
			location.dispatch2("/payfee?singleSong=true&songId=" + bkY)
		}
	}
	bq.fE = function (cD, bC, bDM) {
		cD = cD || "由于版权保护，您所在的地区暂时无法使用。";
		if (bC && bDM) {
			bW.uJ(bDM, bC, {
				conf : {
					message : cD,
					useCache : bDM != 18
				}
			})
		} else {
			bq.ep({
				clazz : "m-layer-w2",
				bubble : !1,
				message : cD
			})
		}
	};
	bq.bHH = function (cD) {
		bq.ep({
			clazz : "m-layer-w2",
			bubble : !1,
			message : cD || "由于版权保护，您所在的地区暂时无法使用。"
		})
	};
	bq.bHG = function (tQ, bkY, bDM) {
		var de,
		qv = "m-popup-info",
		bLU = "单首购买",
		bMd = "马上去订购",
		eG = "唱片公司要求，当前歌曲须付费使用。";
		try {
			de = top.api.feeMessage || {}

		} catch (e) {
			de = {}

		}
		if (tQ == 1 || tQ == 8) {
			if (bDM == "song") {
				qv = "m-popup-song-buy";
				eG = de["vip2"] || eG;
				bMd = de["vip2button"] || "包月购买";
				bLU = de["vip2link"] || bLU
			} else {
				eG = de["vip"] || eG
			}
		} else if (tQ == 4) {
			eG = de["album"] || eG
		} else {
			eG = de["unknow"] || eG
		}
		bq.vE({
			clazz : "m-layer-w5",
			html : Fp.cV(qv, {
				songTxt : bLU,
				tip : eG,
				oktext : bMd,
				cctext : "以后再说"
			}),
			onaction : bkV.gz(null, tQ, bkY)
		})
	};
	bq.bLT = function (bLP, tQ) {
		var de,
		eG = "唱片公司要求，当前歌曲须付费使用。";
		try {
			de = top.api.feeMessage || {}

		} catch (e) {
			de = {}

		}
		if (tQ == 1 || tQ == 8) {
			eG = de["vip"] || eG
		} else if (tQ == 4) {
			eG = de["album"] || eG
		} else {
			eG = de["unknow"] || eG
		}
		return bq.vE({
			clazz : "m-layer-w5",
			html : Fp.cV("m-popup-info", {
				tip : eG,
				oktext : "马上去订购",
				cctext : "以后再说"
			}),
			onaction : function (bc) {
				if (bc.action == "ok") {
					location.dispatch2("/payfee?mvId=" + bLP)
				}
			}
		})
	};
	bq.bwp = function (bk, eG) {
		var UR = 0,
		df = bk.length,
		bao = {};
		if (!bk || !bk.length)
			return;
		for (var i = df - 1, ii; i >= 0; i--) {
			ii = bk[i];
			if (bq.jC(ii)) {
				if (ii.fee > 0 && !window.GAbroad) {
					if (compareFee(ii.fee, bao.fee) > 0)
						bao = ii
				} else
					UR++
			} else {
				return null
			}
		}
		if (bao.id) {
			if (eG) {
				bq.bHG(bao.fee, bao.id)
			}
			return bao
		} else {
			if (eG) {
				bq.bHH()
			}
			return true
		}
		function compareFee(bIo, bIn) {
			var bLs = {
				1 : 99,
				8 : 99,
				4 : 88
			};
			return (bLs[bIo] || 0) - (bLs[bIn] || 0)
		}
	};
	bq.bOk = function (bk, eG) {
		var Ca = [],
		bao = {};
		bm.bLt(bk, function (eD) {
			var bOl = bq.bNA(eD);
			if (bOl == 0) {
				Ca.push(eD)
			} else {
				if (bOl == 10) {
					if (eD.privilege) {
						eD.fee = eD.privilege.fee
					}
					if (compareFee(eD.fee, bao.fee) > 0) {
						bao = eD
					}
				}
			}
		});
		if (Ca.length) {
			return Ca
		} else if (eG) {
			if (bao.id) {
				bq.bHG(bao.fee, bao.id)
			} else {
				bq.bHH()
			}
		}
		function compareFee(bIo, bIn) {
			var bLs = {
				1 : 99,
				8 : 99,
				4 : 88
			};
			return (bLs[bIo] || 0) - (bLs[bIn] || 0)
		}
	};
	bq.bNA = function (eD) {
		var bOj = eD.privilege;
		if (eD.program) {
			return 0
		} else if (window.GAbroad) {
			return 100
		}
		if (bOj) {
			if (bOj.pl > 0) {
				return 0
			} else {
				if (bOj.fee > 0) {
					return 10
				} else {
					return 100
				}
			}
		} else {
			if (eD.status < 0) {
				if (eD.fee > 0) {
					return 10
				} else {
					return 100
				}
			} else {
				return 0
			}
		}
	}
})();
(function () {
	var be = NEJ.P,
	bH = be("nej.j"),
	bm = be("nej.u");
	if (window["GRef"] && window["GRef"] == "mail") {
		bH.cR = bH.cR.ee(function (bc) {
				bf = bc.args[1];
				bf.query = bf.query || {};
				if (bm.fX(bf.query))
					bf.query = bm.mk(bf.query);
				bf.query.ref = "mail"
			})
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bj = be("nej.v"),
	Fp = be("nej.e"),
	bv = be("nej.ui"),
	bb;
	if (!!bv.Sn)
		return;
	var hu = Fp.oR(".#<uispace>{position:absolute;background:#fff;}");
	bv.Sn = NEJ.C();
	bb = bv.Sn.bN(bv.za);
	bb.cw = function (bf) {
		this.cA(bf);
		this.dA([[document, "click", this.pL.bh(this)]]);
		this.bfT = !!bf.nostop;
		this.bfz = {
			top : bf.top,
			left : bf.left
		}
	};
	bb.cX = function () {
		delete this.qA;
		delete this.Sv;
		delete this.lL;
		delete this.bfA;
		delete this.Hw;
		delete this.bfz;
		this.dc()
	};
	bb.bLv = function () {
		this.kT = hu
	};
	bb.bFa = function () {
		this.bLu();
		this.bLD = this.bB;
		bj.bs(this.bB, "click", this.bfQ.bh(this))
	};
	bb.pL = function (bc) {
		if (bc.button != 2)
			this.cj()
	};
	bb.bfQ = function (bc) {
		if (this.bfT)
			return;
		bj.lg(bc);
		var bD = bj.cf(bc);
		if (bD.tagName == "A")
			bj.cG(bc)
	};
	bb.bfP = function () {
		var dq = /\s+/i;
		return function (kk) {
			kk = (kk || "").trim().toLowerCase().split(dq);
			kk[0] = kk[0] || "bottom";
			kk[1] = kk[1] || "left";
			this.lL = kk
		}
	}
	();
	bb.bfN = function (kk) {
		var bn = {},
		jr = this.Sv,
		bzY = Fp.mW(),
		eV = this.bB.offsetWidth,
		dT = this.bB.offsetHeight;
		switch (kk[0]) {
		case "top":
			bn.top = jr.top - dT;
			bn.left = kk[1] == "right" ? jr.left + jr.width - eV : jr.left;
			break;
		case "left":
			bn.left = jr.left - eV;
			bn.top = kk[1] == "bottom" ? jr.top + jr.height - dT : jr.top;
			break;
		case "right":
			bn.left = jr.left + jr.width;
			bn.top = kk[1] == "bottom" ? jr.top + jr.height - dT : jr.top;
			break;
		default:
			bn.top = jr.top + jr.height;
			bn.left = kk[1] == "right" ? jr.left + jr.width - eV : jr.left;
			break
		}
		return bn
	};
	bb.yU = function () {
		if (!this.bfA) {
			this.fJ(this.bfz);
			return
		}
		if (!!this.Hw) {
			this.fJ(this.qA);
			return
		}
		if (!!this.Sv)
			this.fJ(this.bfN(this.lL))
	};
	bb.bfJ = function (bD, dP, bc) {
		dP = dP || bZ;
		var bfC = Fp.mW(),
		dr = bj.lB(bc) + (dP.left || 0),
		gF = bj.oj(bc) + (dP.top || 0),
		eV = bD.offsetWidth + (dP.right || 0),
		dT = bD.offsetHeight + (dP.bottom || 0),
		xD = bfC.scrollWidth,
		IJ = bfC.scrollHeight,
		IK = dr + eV,
		IM = gF + dT;
		switch (this.lL[0]) {
		case "top":
			gF = IM > IJ ? gF - dT : gF;
			if (this.lL[1] == "right") {
				dr = dr - eV < 0 ? 0 : dr - eV
			} else {
				dr = IK > xD ? xD - eV : dr
			}
			break;
		case "left":
			dr = IK > xD ? xD - eV : dr;
			if (this.lL[1] == "top") {
				gF = IM > IJ ? gF - dT : gF
			} else {
				gF = gF - dT < 0 ? gF : gF - dT
			}
			break;
		case "right":
			dr = dr - eV < 0 ? 0 : dr - eV;
			if (this.lL[1] == "top") {
				gF = IM > IJ ? gF - dT : gF
			} else {
				gF = gF - dT < 0 ? gF : gF - dT
			}
			break;
		default:
			gF = gF - dT < 0 ? gF : gF - dT;
			if (this.lL[1] == "left") {
				dr = IK > xD ? xD - eV : dr
			} else {
				dr = dr - eV < 0 ? 0 : dr - eV
			}
			break
		}
		return {
			top : gF,
			left : dr
		}
	};
	bb.IN = function () {
		var blP = function (bD, dP) {
			bD = Fp.bw(bD);
			if (!bD)
				return;
			dP = dP || bZ;
			var cl = Fp.mV(bD);
			return {
				top : cl.y - (dP.top || 0),
				left : cl.x - (dP.left || 0),
				width : bD.offsetWidth + (dP.right || 0),
				height : bD.offsetHeight + (dP.bottom || 0)
			}
		};
		return function (bf) {
			bf = bf || bZ;
			this.Hw = bf.event;
			this.bfP(bf.align);
			if (!!this.Hw)
				this.qA = this.bfJ(bf.target, bf.delta, this.Hw);
			this.Sv = blP(bf.target, bf.delta);
			this.bfA = !!bf.fitable;
			this.bO();
			return this
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bv = be("nej.ui"),
	bb,
	bJ;
	if (!!bv.ty)
		return;
	bv.ty = NEJ.C();
	bb = bv.ty.bN(bv.GN);
	bJ = bv.ty.du;
	bv.ty.bzZ = function () {
		var bfL = function (bc, bC, ed, hC, CX) {
			var dx,
			bF = bC + "-i",
			bW = ed.qj,
			bfy = !!hC.noclear,
			bfx = !!hC.toggled;
			if (bm.gj(hC.onbeforeclick)) {
				var Hj = hC.noclear,
				bfX = hC.toggled;
				try {
					hC.onbeforeclick(hC)
				} catch (e) {}

				bfy = !!hC.noclear;
				bfx = !!hC.toggled;
				hC.toggled = bfX;
				hC.noclear = Hj
			}
			var uq = bW[bF];
			if (bfx && !!uq) {
				uq.cj();
				return
			}
			bj.cu(bc);
			if (!bfy) {
				bj.bG(document, "click");
				dx = ed.bL(hC)
			} else {
				dx = ed.btO(hC, !0)
			}
			bW[bF] = dx;
			dx.us("onbeforerecycle", function () {
				delete bW[bF]
			});
			dx.IN(CX)
		};
		return function (bid, bf) {
			bid = Fp.bw(bid);
			if (!bid)
				return this;
			if (!this.qj)
				this.qj = {};
			var bC = Fp.ik(bid);
			if (!!this.qj[bC])
				return this;
			bf = NEJ.X({}, bf);
			var CX = NEJ.EX({
					align : "",
					delta : null,
					fitable : !1
				}, bf);
			CX.target = bC;
			bf.destroyable = !0;
			if (!bf.fixed) {
				CX.fitable = !0;
				bf.parent = document.body
			}
			this.qj[bC] = [bC, bf.event || "click", bfL.gz(null, bC, this, bf, CX)];
			bj.bs.apply(bj, this.qj[bC]);
			return this
		}
	}
	();
	bv.ty.bzW = function (bid) {
		if (!this.qj)
			return this;
		var bC = Fp.ik(bid),
		bc = this.qj[bC];
		if (!bc)
			return this;
		delete this.qj[bC];
		bj.nt.apply(bj, bc);
		var dx = this.qj[bC + "-i"];
		if (!!dx)
			dx.cj();
		return this
	};
	bb.JW = function () {
		return bv.Sn.bL(this.cO)
	};
	bb.yT = function () {
		bJ.yT.apply(this, arguments);
		this.cO.top = null;
		this.cO.left = null;
		this.cO.nostop = !1
	};
	bb.IN = function (bf) {
		if (!!this.mn)
			this.mn.IN(bf);
		return this
	}
})();
(function () {
	var be = NEJ.P,
	cQ = be("nej.ui"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.Jd = NEJ.C();
	bb = bo.Jd.bN(cQ.ty);
	bb.cw = function (bf) {
		bf.nohack = true;
		this.cA(bf)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.cq = NEJ.C();
	bb = bo.cq.bN(bo.Jd);
	bJ = bo.cq.du;
	bb.cw = function (bf) {
		this.cA(bf);
		this.dV = bf.type || 1
	};
	bb.bFa = function () {
		this.bLu();
		this.bB = Fp.tU(this.bgc());
		var bk = Fp.dh(this.bB);
		this.Hc = bk[0];
		this.dI = bk[1]
	};
	bb.bgc = function () {
		return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
	};
	bb.yU = function () {
		var bz = {},
		di = this.bB.style,
		jc = Fp.mW(),
		oo = {
			left : jc.scrollLeft,
			top : jc.scrollTop
		},
		dP = {
			left : jc.clientWidth - this.bB.offsetWidth,
			top : jc.clientHeight - this.bB.offsetHeight
		};
		bz.top = Math.max(0, oo.top + dP.top / 2);
		bz.left = Math.max(0, oo.left + dP.left / 2);
		this.mn.fJ(bz)
	};
	bb.bO = function (bf) {
		bJ.bO.call(this);
		this.yU();
		this.dV == 1 ? Fp.fC(this.Hc, "u-icn-32", "u-icn-31") : Fp.fC(this.Hc, "u-icn-31", "u-icn-32");
		this.dI.innerHTML = bf.tip || ""
	};
	bo.cq.bO = function () {
		var fu;
		return function (bf) {
			clearTimeout(fu);
			if (bf.parent === undefined)
				bf.parent = document.body;
			if (bf.autoclose === undefined)
				bf.autoclose = true;
			bf.clazz = "m-sysmsg";
			!!this.fq && this.fq.ch();
			this.fq = this.bL(bf);
			this.fq.bO(bf);
			if (bf.autoclose)
				fu = setTimeout(this.cj.bh(this), 2e3)
		}
	}
	();
	bo.cq.cj = function () {
		!!this.fq && this.fq.cj()
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	fP = NEJ.R,
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bF = "playlist-tracks_",
	bb;
	bp.gN({
		"playlist_my-list" : {
			url : "/api/user/playlist",
			type : "GET",
			format : function (bHN, bf) {
				this.biX(bHN.playlist);
				return {
					total : 0,
					list : fP
				}
			},
			onerror : function () {
				this.bG("onlisterror")
			}
		},
		"playlist_new-add" : {
			url : "/api/playlist/create",
			format : function (bHN, bf) {
				var gW = bHN.playlist;
				gW.creator = GUser;
				gW.isHost = !0;
				gW.typeFlag = "playlist";
				return gW
			},
			finaly : function (bc, bf) {
				bj.bG(bp.fY, "listchange", bc)
			},
			onmessage : function () {
				var je = {
					507 : "歌单数量超过上限！",
					405 : "你操作太快了，请休息一会再试！",
					406 : "你操作太快了，请休息一会再试！"
				};
				return function (dU) {
					bo.cq.bO({
						tip : je[dU] || "创建失败",
						type : 2
					})
				}
			}
			()
		},
		"playlist_new-del" : {
			url : "/api/playlist/delete",
			type : "GET",
			filter : function (bf) {
				bf.id = bf.data.pid
			},
			finaly : function (bc, bf) {
				bj.bG(bp.fY, "listchange", bc)
			},
			onmessage : function () {
				var je = {
					404 : "歌单不存在！",
					405 : "你操作太快了，请休息一会再试！",
					406 : "你操作太快了，请休息一会再试！"
				};
				return function (dU) {
					bo.cq.bO({
						tip : je[dU] || "删除失败",
						type : 2
					})
				}
			}
			()
		},
		"playlist_fav-add" : {
			type : "GET",
			url : "/api/playlist/subscribe/",
			filter : function (bf) {
				var jn = bf.ext || {};
				bf.ext = NEJ.X(jn, bf.data);
				bf.data = {
					id : bf.ext.id
				}
			},
			format : function (bHN, bf) {
				bo.cq.bO({
					tip : "收藏成功" + (bHN.point > 0 ? ' 获得<em class="s-fc6">' + bHN.point + "积分</em>" : "")
				});
				var bt = bf.ext;
				bt.subscribedCount++;
				return bt
			},
			finaly : function (bc, bf) {
				bj.bG(bp.bjj, "listchange", bc);
				bj.bG(bp.bjj, "itemchange", {
					attr : "subscribedCount",
					data : bc.data
				})
			},
			onmessage : function () {
				var je = {
					404 : "歌单不存在！",
					501 : "歌单已经收藏！",
					506 : "歌单收藏数量超过上限！"
				};
				return function (dU) {
					bo.cq.bO({
						type : 2,
						tip : je[dU] || "收藏失败，请稍后再试！"
					})
				}
			}
			()
		},
		"playlist_fav-del" : {
			url : "/api/playlist/unsubscribe",
			type : "GET",
			filter : function (bf) {
				bf.id = bf.data.id = bf.data.pid
			},
			finaly : function (bc, bf) {
				bj.bG(bp.fY, "listchange", bc)
			},
			onmessage : function () {
				var je = {
					404 : "歌单不存在！",
					405 : "你操作太快了，请休息一会再试！",
					406 : "你操作太快了，请休息一会再试！"
				};
				return function (dU) {
					bo.cq.bO({
						tip : je[dU],
						type : 2
					})
				}
			}
			()
		},
		"playlist_new-update" : {
			url : ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
			filter : function (bf) {
				var bl = bf.data,
				FM = {};
				FM["playlist-update-name"] = {
					id : bl.id,
					name : bl.name
				};
				FM["playlist-update-tag"] = {
					id : bl.id,
					tags : bl.tags.join(";")
				};
				FM["playlist-update-desc"] = {
					id : bl.id,
					desc : bl.description
				};
				bf.data = FM;
				bf.ext = bl
			},
			format : function (bX, pw, bdt, bf) {
				if (bX.code == 200 && pw.code == 200 && bdt.code == 200) {
					bf.ext.allSuccess = true;
					bo.cq.bO({
						tip : "保存成功"
					})
				} else if (bX.code == 407 || pw.code == 407 || bdt.code == 407) {
					bf.ext.allSuccess = false;
					bo.cq.bO({
						type : 2,
						tip : "输入内容包含关键字"
					})
				} else {
					bf.ext.allSuccess = false;
					bo.cq.bO({
						type : 2,
						tip : "保存失败"
					})
				}
				return this.fh(bf.ext.id)
			},
			finaly : function (bc, bf) {
				bj.bG(bp.fY, "listchange", bc)
			},
			onmessage : function (dU) {
				bo.cq.bO({
					type : 2,
					tip : "保存失败"
				})
			}
		},
		"playlist-update-name" : {
			url : "/api/playlist/update/name",
			format : function (bHN, bf) {
				var bt = this.fh(bf.ext.id);
				if (bHN.code == 200)
					bt.name = bf.ext.name;
				return bHN
			}
		},
		"playlist-update-tag" : {
			url : "/api/playlist/tags/update",
			format : function (bHN, bf) {
				var bt = this.fh(bf.ext.id);
				if (bHN.code == 200)
					bt.tags = bf.ext.tags;
				return bHN
			}
		},
		"playlist-update-desc" : {
			url : "/api/playlist/desc/update",
			format : function (bHN, bf) {
				var bt = this.fh(bf.ext.id);
				if (bHN.code == 200)
					bt.description = bf.ext.description;
				return bHN
			}
		},
		"playlist-update-cover" : {
			url : "/api/playlist/cover/update",
			filter : function (bf) {
				bf.url = bf.data.url;
				delete bf.data.url
			},
			format : function (bHN, bf) {
				bo.cq.bO({
					tip : "保存成功"
				});
				var bt = this.fh(bf.data.id);
				bt.coverImgUrl = bf.url;
				bf.ext = bt;
				return bt
			},
			onmessage : function (dU) {
				bo.cq.bO({
					type : 2,
					tip : "保存失败"
				})
			},
			finaly : function (bc, bf) {
				bj.bG(bp.fY, "itemchange", {
					attr : "coverImgUrl",
					data : bf.ext
				})
			}
		},
		"playlist-upcount" : {
			url : "/api/playlist/update/playcount",
			type : "GET",
			format : function (bHN, bf) {
				var gW = this.fh(bf.data.id);
				if (!gW)
					return;
				gW.playCount++;
				bj.bG(bp.fY, "itemchange", {
					attr : "playcount",
					data : gW
				})
			}
		}
	});
	bp.fY = NEJ.C();
	bb = bp.fY.bN(bp.gY);
	bb.dv = function () {
		this.dF()
	};
	bb.bds = function () {
		var fI = GUser.userId;
		this.zS({
			limit : 1001,
			key : "playlist_my-" + fI,
			data : {
				offset : 0,
				limit : 1001,
				uid : fI
			}
		})
	};
	bb.biX = function (bk) {
		var fI = GUser.userId,
		lm = [],
		bdr = [];
		bm.bLt(bk, function (bt) {
			bt.typeFlag = "playlist";
			if (bt.creator && bt.creator.userId == fI) {
				if (bt.specialType == 5)
					bt.name = "我喜欢的音乐";
				bt.isHost = !0;
				lm.push(bt)
			} else {
				bdr.push(bt)
			}
		});
		this.ro("playlist_new-" + fI, lm);
		this.ro("playlist_fav-" + fI, bdr)
	};
	bb.bjk = function (bl) {
		this.dg("playlist-update-cover", {
			data : bl
		})
	};
	bb.bzD = function () {
		var AI = this.bjA.bw("host-plist");
		if (AI.length == 0) {
			return
		}
		if (AI.length == 1 && AI[0].trackCount <= 0) {
			return
		}
		for (var i = 0, len = AI.length; i < len; i++) {
			var bt = AI[i];
			if (bt.trackCount > 0)
				return bt.id
		}
		return this.bjA.bw("host-plist")[0].id
	};
	bb.AH = function (bC) {
		if (GUser && GUser.userId > 0) {
			this.dg("playlist-upcount", {
				data : {
					id : bC
				}
			})
		}
	};
	bb.uN = function () {
		if (GUser && GUser.userId > 0) {
			return !0
		} else {
			top.login();
			return !1
		}
	};
	bb.bzC = function () {
		return GUser.userId
	};
	bb.MX = function (bt) {
		if (bt.userId == GUser.userId && bt.specialType == 5)
			bt.name = "我喜欢的音乐";
		bj.bG(this.constructor, "itemchange", {
			data : this.vm(bt)
		});
		return bt
	};
	bK.hh.bL({
		element : bp.fY,
		event : ["listchange", "playcountchange", "itemchange"]
	})
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bp = be("nm.d"),
	RM = /^[1-9][0-9]*$/,
	bb,
	bJ;
	var LOCAL_LOG_KEY = "local-log";
	bp.gN({
		"bi-log" : {
			url : "/api/log/web"
		},
		"bi-batch-log" : {
			url : "/api/batchlog/web"
		},
		"plus-mv-count" : {
			url : "/api/song/mv/play"
		},
		"plus-song-count" : {
			url : "/api/song/play"
		},
		"plus-dj-count" : {
			type : "GET",
			url : "/api/dj/program/listen"
		},
		"plus-playlist-count" : {
			type : "GET",
			url : "/api/playlist/update/playcount"
		}
	});
	bp.qE = NEJ.C();
	bb = bp.qE.bN(bp.gY);
	bb.tq = function (cv, bQ) {
		if (!cv || !bQ)
			return;
		var bl = {
			action : cv,
			json : bm.fX(bQ) ? bQ : JSON.stringify(bQ)
		};
		this.dg("bi-log", {
			data : bl
		})
	};
	bb.bge = function (HL) {
		this.dg("bi-batch-log", {
			data : {
				data : JSON.stringify(HL)
			}
		})
	};
	bb.bft = function (bQ) {
		if (!bQ || !bQ.type || !bQ.rid)
			return;
		var kc = bQ.type;
		if (RM.test(kc)) {
			kc = this.sI(kc)
		}
		if (!kc)
			return;
		if (kc == "playlist")
			kc = "list";
		var bl = {
			action : "search",
			json : JSON.stringify({
				type : kc,
				id : bQ.rid,
				keyword : bQ.keyword
			})
		};
		this.dg("bi-log", {
			data : bl
		})
	};
	bb.ww = function () {
		var bfY = /^\/m\/(song|album|playlist)\?id=(\d+)/;
		return function (bQ) {
			if (!bQ || !bQ.type || !bQ.rid)
				return;
			if (bQ.play === undefined)
				bQ.play = true;
			var kc = bQ.type;
			if (RM.test(kc)) {
				kc = this.sI(kc)
			}
			if (!kc)
				return;
			if (kc == "playlist")
				kc = "list";
			var bHN = {
				id : bQ.rid,
				type : kc
			};
			if (kc == "song" && bQ.source) {
				bHN.source = this.bfw(bQ.source);
				if (!!bQ.sourceid)
					bHN.sourceid = bQ.sourceid
			}
			var bl = {
				action : !bQ.play ? "addto" : "play",
				json : JSON.stringify(bHN)
			};
			this.dg("bi-log", {
				data : bl
			});
			if (kc == "song" && bQ.hash && bQ.hash.match(bfY)) {
				bl.json = JSON.stringify({
						type : RegExp.$1,
						id : RegExp.$2
					});
				this.dg("bi-log", {
					data : bl
				})
			}
		}
	}
	();
	bb.Sh = function (bC, cr, dz, Di) {
		var bHN = {
			type : "song",
			wifi : 0,
			download : 0
		};
		var bfW = {
			1 : "ui",
			2 : "playend",
			3 : "interrupt",
			4 : "exception"
		};
		bHN.id = bC;
		bHN.time = Math.round(cr);
		bHN.end = bm.fX(Di) ? Di : bfW[Di] || "";
		if (dz && dz.fid) {
			bHN.source = this.bfw(dz.fid);
			bHN.sourceId = dz.fdata
		}
		this.tq("play", bHN)
	};
	bb.Sm = function (bDM, cF) {
		if (!bDM || !cF)
			return;
		if (RM.test(bDM))
			bDM = this.sI(bDM);
		if (bDM != "playlist" && bDM != "dj")
			return;
		var bQ = bp.bw("plus-" + bDM + "-count");
		if (!bQ)
			return !1;
		this.dg(bQ, {
			data : {
				id : cF
			}
		});
		var bW = this.iG("play-hist-" + bDM, []);
		if (bm.dY(bW, cF) < 0) {
			bW.push(cF);
			return !0
		}
		return !1
	};
	bb.sI = function (bDM) {
		var bLs = {
			1 : "user",
			2 : "artist",
			13 : "playlist",
			17 : "dj",
			18 : "song",
			19 : "album",
			21 : "mv",
			31 : "toplist"
		};
		return bLs[bDM]
	};
	bb.bfw = function (AR) {
		var bLs = {
			1 : "user",
			2 : "artist",
			13 : "list",
			17 : "dj",
			18 : "song",
			19 : "album",
			21 : "mv",
			31 : "toplist",
			32 : "search",
			33 : "search",
			34 : "event",
			35 : "msg"
		};
		return bLs[AR]
	};
	bb.bPG = function (xq) {
		var HL = this.zq(LOCAL_LOG_KEY, []);
		HL.unshift(xq);
		if (HL.length > 200) {
			HL.length = 200
		}
		this.sv(LOCAL_LOG_KEY, HL)
	};
	bb.bPF = function () {
		return this.Gj(LOCAL_LOG_KEY)
	}
})();
(function () {
	var be = NEJ.P,
	fP = NEJ.R,
	co = NEJ.F,
	bZ = NEJ.O,
	bK = be("nej.ut"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	bp.gN({
		"program-get" : {
			url : "/api/dj/program/detail",
			format : function (bHN) {
				return bHN.program
			}
		},
		"program_djradio-list" : {
			type : "GET",
			url : "/api/dj/program/byradio",
			filter : function (bf) {
				bf.data.limit = 1e3;
				delete bf.data.id
			},
			format : function (bHN, bf) {
				return bHN.programs
			}
		},
		"program_fav-list" : {
			url : "/api/djprogram/subscribed/paged/",
			format : function (bHN, bf) {
				return bHN.programs
			},
			onerror : "onlisterror"
		},
		"program_fav-add" : {
			url : "/api/djprogram/subscribe/",
			filter : function (bf) {
				bf.ext = bf.data;
				bf.data = {
					id : bf.ext.id
				};
				bf.id = bf.data.id
			},
			format : function (bHN, bf) {
				bo.cq.bO({
					tip : "收藏成功"
				});
				var bt = bf.ext;
				bt.subscribedCount++;
				bt.subscribed = !0;
				return bt
			},
			finaly : function (bc, bf) {
				bj.bG(bp.jM, "listchange", bc)
			},
			onmessage : function () {
				var je = {
					404 : "节目不存在！",
					501 : "节目已收藏！"
				};
				return function (dU) {
					bo.cq.bO({
						type : 2,
						tip : je[dU] || "收藏失败！"
					})
				}
			}
			()
		},
		"program_fav-del" : {
			url : "/api/djprogram/unsubscribe/",
			finaly : function (bc, bf) {
				bj.bG(bp.jM, "listchange", bc)
			},
			onmessage : function () {
				var je = {
					404 : "节目不存在！",
					502 : "没有收藏此节目！"
				};
				return function (dU) {
					bq.Nf({
						txt : je[dU] || "取消收藏失败！"
					})
				}
			}
			()
		},
		"program-update-count" : {
			type : "GET",
			url : "/api/dj/program/listen",
			filter : function (bf) {
				var bt = this.fh(bf.data.id) || bZ;
				bf.ext = (bt.listenerCount || 0) + 1
			},
			format : function (bHN, bf) {
				var bt = this.fh(bf.data.id);
				if (!!bt) {
					bt.listenerCount = Math.max(bf.ext, bt.listenerCount || 0)
				}
			},
			finaly : function (bc, bf) {
				bj.bG(bp.jM, "itemchange", {
					attr : "playCount",
					data : this.fh(bf.data.id)
				})
			}
		},
		"program-like" : {
			url : "/api/resource/like",
			filter : function (bf) {
				bf.data = {
					threadId : "A_DJ_1_" + bf.id
				}
			},
			format : function (bHN, bf) {
				var bt = bf.ext.data || this.fh(bf.id);
				bt.liked = true;
				bt.likedCount++;
				bf.ext.data = bt;
				try {
					top.player.setLike(bt)
				} catch (e) {}

				return bt
			},
			finaly : function (bc, bf) {
				bj.bG(bp.jM, "itemchange", {
					attr : "likedCount",
					data : bf.ext.data
				})
			}
		},
		"program-unlike" : {
			url : "/api/resource/unlike",
			filter : function (bf) {
				bf.data = {
					threadId : "A_DJ_1_" + bf.id
				}
			},
			format : function (bHN, bf) {
				var bt = bf.ext.data || this.fh(bf.id);
				bt.liked = false;
				bt.likedCount--;
				bf.ext.data = bt;
				try {
					top.player.setLike(bt)
				} catch (e) {}

				return bt
			},
			finaly : function (bc, bf) {
				bj.bG(bp.jM, "itemchange", {
					attr : "likedCount",
					data : bf.ext.data
				})
			}
		}
	});
	bp.jM = NEJ.C();
	bb = bp.jM.bN(bp.gY);
	bb.bos = function () {
		var fI = GUser.userId;
		this.zS({
			limit : 1001,
			key : "program_fav-" + fI,
			data : {
				offset : 0,
				limit : 1e3,
				uid : fI
			}
		})
	};
	bb.byH = function (cY) {
		var hI = cY[this.pG];
		bq.boy(4, function (bW) {
			bW.ro("track_program-" + hI, cY.songs)
		});
		delete cY.songs;
		var bU = cY.mainSong;
		bq.boy(4, function (bW) {
			bW.ro("track_program_main-" + hI, !bU ? [] : [bU])
		});
		cY.mainSong = (bU || bZ).id
	};
	bb.byG = function (bC) {
		var cY = this.fh(bC),
		fI = localCache.OG("host.profile.userId");
		return !!cY && cY.dj.userId == fI
	};
	bb.byF = function (bC) {
		return !1
	};
	bb.MX = function (bt) {
		bj.bG(this.constructor, "itemchange", {
			attr : "detail",
			data : this.vm(bt)
		});
		return bt
	};
	bb.AH = function (bC) {
		this.dg("program-update-count", {
			data : {
				id : bC
			}
		})
	};
	bq.bae = function (bf) {
		var bW = bp.jM.bL({
				onitemadd : function () {
					(bf.onsuccess || co)()
				},
				onerror : function () {
					(bf.onerror || co)()
				}
			});
		if (bf.data.liked) {
			bW.bad(bf.data)
		} else {
			bW.na(bf.data)
		}
	};
	bb.na = function (cY) {
		if (!bq.uH())
			return;
		var fT = {
			ext : {}

		};
		if (bm.bLC(cY)) {
			fT.id = cY.id;
			fT.ext.data = cY
		} else {
			fT.id = cY
		}
		this.dg("program-like", fT)
	};
	bb.bad = function (cY) {
		if (!bq.uH())
			return;
		var fT = {
			ext : {}

		};
		if (bm.bLC(cY)) {
			fT.id = cY.id;
			fT.ext.data = cY
		} else {
			fT.id = cY
		}
		this.dg("program-unlike", fT)
	};
	bK.hh.bL({
		element : bp.jM,
		event : ["listchange", "itemchange"]
	})
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	fP = NEJ.R,
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bq = be("nm.x"),
	bF = "playlist-tracks_",
	bq = be("nm.x"),
	bb;
	bp.gN({
		"track-get" : {
			url : "/api/v3/song/detail",
			filter : function (bf) {
				bf.data.c = JSON.stringify([{
								id : bf.data.id
							}
						])
			},
			format : function (bHN, bf) {
				var eD = bq.bMk(bHN.songs[0]);
				eD.privilege = bHN.privileges[0];
				return eD
			}
		},
		"track_playlist-list" : {
			url : "/api/v3/playlist/detail",
			filter : function (bf) {
				bf.data.n = 1e3
			},
			format : function (bHN, bf) {
				var fy = [];
				this.ns.MX(bHN.playlist);
				bm.bLt(bHN.playlist.tracks, function (bU, bu) {
					var bOA = bq.bMk(bU);
					bOA.privilege = bHN.privileges[bu];
					fy.push(bOA)
				}, this);
				return fy
			}
		},
		"track_album-list" : {
			url : "/api/v1/album/{id}",
			format : function (bHN, bf) {
				var fy = [];
				bm.bLt(bHN.songs, function (eD) {
					fy.push(bq.bMk(eD))
				});
				return fy
			}
		},
		"track_playlist-add" : {
			url : "/api/playlist/manipulate/tracks",
			filter : function (bf) {
				var bLs = {},
				bl = bf.data,
				bjT = this.hX(bf.key) || [];
				pA = [];
				bm.bLt(bjT, function (bU) {
					var bC = bm.bLC(bU) ? bU.id : bU;
					bLs[bC] = true
				});
				bf.ext = [];
				bm.bLt(bl.tracks, function (bU) {
					var bC = bm.bLC(bU) ? bU.id : bU;
					if (!bLs[bC]) {
						pA.push(bC);
						bLs[bC] = true;
						bf.ext.push(bU)
					}
				});
				bl.trackIds = JSON.stringify(pA);
				bl.op = "add";
				if (!pA.length) {
					bf.value = {
						code : 502
					}
				}
			},
			format : function (bHN, bf) {
				bo.cq.bO({
					tip : "已添加至歌单"
				});
				var gW = this.ns.fh(bf.data.pid);
				if (!!bHN.coverImgUrl)
					gW.coverImgUrl = bHN.coverImgUrl;
				bm.kx(bf.ext, function (bU) {
					this.xl(bf, bm.bLC(bU) ? bU : null);
					if (!!gW)
						gW.trackCount++
				}, this);
				bj.bG(bp.fY, "itemchange", {
					data : gW || {},
					cmd : "add"
				});
				this.bG("onaddsuccess");
				return null
			},
			finaly : function (bc, bf) {
				bj.bG(bp.uQ, "listchange", {
					key : bf.key,
					action : "refresh"
				});
				var hI = bf.data.pid,
				df = this.kN(bf.key)
			},
			onmessage : function () {
				var je = {
					502 : "歌曲已存在！"
				};
				return function (dU) {
					setTimeout(function () {
						bo.cq.bO({
							tip : je[dU] || "添加失败，请稍后再试！",
							type : 2
						})
					}, 0)
				}
			}
			()
		},
		"track_playlist-del" : {
			url : "/api/playlist/manipulate/tracks",
			filter : function (bf) {
				var bl = bf.data;
				bf.ext = bl.trackIds;
				bl.trackIds = JSON.stringify(bl.trackIds);
				bl.op = "del"
			},
			format : function (bHN, bf) {
				var gW = this.ns.fh(bf.data.pid);
				bm.bLt(bf.ext, function (bC) {
					this.QQ({
						id : bC,
						key : "track_playlist-" + bf.data.pid
					}, !0);
					if (!!gW)
						gW.trackCount = Math.max(0, gW.trackCount - 1)
				}, this);
				bj.bG(bp.fY, "itemchange", {
					data : gW || {},
					cmd : "del"
				});
				return null
			},
			finaly : function (bc, bf) {
				bj.bG(bp.uQ, "listchange", {
					key : bf.key,
					action : "refresh"
				})
			},
			onmessage : function (dU) {
				bq.Nf({
					text : "歌曲删除失败！"
				})
			}
		},
		"track_program-list" : {
			url : "/api/dj/program/detail",
			format : function (bHN, bf) {
				return this.bdd.MX(bHN.program).songs
			},
			onerror : "onlisterror"
		},
		"track_listen_record-list" : {
			url : "/api/play/record",
			format : function (bHN, bf) {
				var bk = [];
				if (bf.data.type == -1) {
					if (bHN.weekData && bHN.weekData.length) {
						bf.data.type = 1
					} else {
						bf.data.type = 0
					}
				}
				if (bf.data.type == 1) {
					bk = this.bNq(bHN.weekData)
				} else {
					bk = this.bNq(bHN.allData)
				}
				return bk
			},
			onerror : "onlisterror"
		},
		"track_day-list" : {
			url : "/api/v1/discovery/recommend/songs",
			format : function (bHN) {
				var HL = [];
				bm.bLt(bHN.recommend, function (eD, bu) {
					HL.push({
						action : "recommendimpress",
						json : JSON.stringify({
							alg : eD.alg,
							scene : "user-song",
							position : bu,
							id : eD.id
						})
					})
				});
				this.bwT.bge(HL);
				return bHN.recommend
			},
			onerror : "onlisterror"
		}
	});
	bp.uQ = NEJ.C();
	bb = bp.uQ.bN(bp.gY);
	bb.dv = function () {
		this.dF();
		this.ns = bp.fY.bL();
		this.bdd = bp.jM.bL();
		this.bwT = bp.qE.bL()
	};
	bb.bNq = function (bk) {
		var bn = [],
		hc = 0;
		bm.bLt(bk, function (bt, bu) {
			var eD = bq.bMk(bt.song);
			if (bu == 0) {
				hc = bt.score
			}
			eD.max = hc;
			eD.playCount = bt.playCount;
			eD.score = bt.score;
			bn.push(eD)
		});
		return bn
	};
	bK.hh.bL({
		element : bp.uQ,
		event : ["listchange"]
	})
})();
(function () {
	var be = NEJ.P,
	eL = be("nej.g"),
	bH = be("nej.j"),
	bm = be("nej.u"),
	bHd = be("nm.x.ek");
	bHd.emj = {
		"色" : "00e0b",
		"流感" : "509f6",
		"这边" : "259df",
		"弱" : "8642d",
		"嘴唇" : "bc356",
		"亲" : "62901",
		"开心" : "477df",
		"呲牙" : "22677",
		"憨笑" : "ec152",
		"猫" : "b5ff6",
		"皱眉" : "8ace6",
		"幽灵" : "15bb7",
		"蛋糕" : "b7251",
		"发怒" : "52b3a",
		"大哭" : "b17a8",
		"兔子" : "76aea",
		"星星" : "8a5aa",
		"钟情" : "76d2e",
		"牵手" : "41762",
		"公鸡" : "9ec4e",
		"爱意" : "e341f",
		"禁止" : "56135",
		"狗" : "fccf6",
		"亲亲" : "95280",
		"叉" : "104e0",
		"礼物" : "312ec",
		"晕" : "bda92",
		"呆" : "557c9",
		"生病" : "38701",
		"钻石" : "14af6",
		"拜" : "c9d05",
		"怒" : "c4f7f",
		"示爱" : "0c368",
		"汗" : "5b7a4",
		"小鸡" : "6bee2",
		"痛苦" : "55932",
		"撇嘴" : "575cc",
		"惶恐" : "e10b4",
		"口罩" : "24d81",
		"吐舌" : "3cfe4",
		"心碎" : "875d3",
		"生气" : "e8204",
		"可爱" : "7b97d",
		"鬼脸" : "def52",
		"跳舞" : "741d5",
		"男孩" : "46b8e",
		"奸笑" : "289dc",
		"猪" : "6935b",
		"圈" : "3ece0",
		"便便" : "462db",
		"外星" : "0a22b",
		"圣诞" : "8e7",
		"流泪" : "01000",
		"强" : "1",
		"爱心" : "0CoJU",
		"女孩" : "m6Qyw",
		"惊恐" : "8W8ju",
		"大笑" : "d"
	};
	bHd.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
var CryptoJS = CryptoJS || function (u, p) {
	var d = {},
	l = d.lib = {},
	s = function () {},
	t = l.Base = {
		extend : function (a) {
			s.prototype = this;
			var c = new s;
			a && c.mixIn(a);
			c.hasOwnProperty("init") || (c.init = function () {
				c.$super.init.apply(this, arguments)
			});
			c.init.prototype = c;
			c.$super = this;
			return c
		},
		create : function () {
			var a = this.extend();
			a.init.apply(a, arguments);
			return a
		},
		init : function () {},
		mixIn : function (a) {
			for (var c in a)
				a.hasOwnProperty(c) && (this[c] = a[c]);
			a.hasOwnProperty("toString") && (this.toString = a.toString)
		},
		clone : function () {
			return this.init.prototype.extend(this)
		}
	},
	r = l.WordArray = t.extend({
			init : function (a, c) {
				a = this.words = a || [];
				this.sigBytes = c != p ? c : 4 * a.length
			},
			toString : function (a) {
				return (a || v).stringify(this)
			},
			concat : function (a) {
				var c = this.words,
				e = a.words,
				j = this.sigBytes;
				a = a.sigBytes;
				this.clamp();
				if (j % 4)
					for (var k = 0; k < a; k++)
						c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
				else if (65535 < e.length)
					for (k = 0; k < a; k += 4)
						c[j + k >>> 2] = e[k >>> 2];
				else
					c.push.apply(c, e);
				this.sigBytes += a;
				return this
			},
			clamp : function () {
				var a = this.words,
				c = this.sigBytes;
				a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
				a.length = u.ceil(c / 4)
			},
			clone : function () {
				var a = t.clone.call(this);
				a.words = this.words.slice(0);
				return a
			},
			random : function (a) {
				for (var c = [], e = 0; e < a; e += 4)
					c.push(4294967296 * u.random() | 0);
				return new r.init(c, a)
			}
		}),
	w = d.enc = {},
	v = w.Hex = {
		stringify : function (a) {
			var c = a.words;
			a = a.sigBytes;
			for (var e = [], j = 0; j < a; j++) {
				var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
				e.push((k >>> 4).toString(16));
				e.push((k & 15).toString(16))
			}
			return e.join("")
		},
		parse : function (a) {
			for (var c = a.length, e = [], j = 0; j < c; j += 2)
				e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
			return new r.init(e, c / 2)
		}
	},
	b = w.Latin1 = {
		stringify : function (a) {
			var c = a.words;
			a = a.sigBytes;
			for (var e = [], j = 0; j < a; j++)
				e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
			return e.join("")
		},
		parse : function (a) {
			for (var c = a.length, e = [], j = 0; j < c; j++)
				e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
			return new r.init(e, c)
		}
	},
	x = w.Utf8 = {
		stringify : function (a) {
			try {
				return decodeURIComponent(escape(b.stringify(a)))
			} catch (c) {
				throw Error("Malformed UTF-8 data")
			}
		},
		parse : function (a) {
			return b.parse(unescape(encodeURIComponent(a)))
		}
	},
	q = l.BufferedBlockAlgorithm = t.extend({
			reset : function () {
				this.bl = new r.init;
				this.bHs = 0
			},
			bGQ : function (a) {
				"string" == typeof a && (a = x.parse(a));
				this.bl.concat(a);
				this.bHs += a.sigBytes
			},
			bEV : function (a) {
				var c = this.bl,
				e = c.words,
				j = c.sigBytes,
				k = this.blockSize,
				b = j / (4 * k),
				b = a ? u.ceil(b) : u.max((b | 0) - this.bHt, 0);
				a = b * k;
				j = u.min(4 * a, j);
				if (a) {
					for (var q = 0; q < a; q += k)
						this.bHr(e, q);
					q = e.splice(0, a);
					c.sigBytes -= j
				}
				return new r.init(q, j)
			},
			clone : function () {
				var a = t.clone.call(this);
				a.bl = this.bl.clone();
				return a
			},
			bHt : 0
		});
	l.Hasher = q.extend({
			cfg : t.extend(),
			init : function (a) {
				this.cfg = this.cfg.extend(a);
				this.reset()
			},
			reset : function () {
				q.reset.call(this);
				this.bHj()
			},
			update : function (a) {
				this.bGQ(a);
				this.bEV();
				return this
			},
			finalize : function (a) {
				a && this.bGQ(a);
				return this.bEW()
			},
			blockSize : 16,
			bHi : function (a) {
				return function (b, e) {
					return (new a.init(e)).finalize(b)
				}
			},
			bHB : function (a) {
				return function (b, e) {
					return (new n.HMAC.init(a, e)).finalize(b)
				}
			}
		});
	var n = d.algo = {};
	return d
}
(Math);
(function () {
	var u = CryptoJS,
	p = u.lib.WordArray;
	u.enc.Base64 = {
		stringify : function (d) {
			var l = d.words,
			p = d.sigBytes,
			t = this.bLs;
			d.clamp();
			d = [];
			for (var r = 0; r < p; r += 3)
				for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)
					d.push(t.charAt(w >>> 6 * (3 - v) & 63));
			if (l = t.charAt(64))
				for (; d.length % 4; )
					d.push(l);
			return d.join("")
		},
		parse : function (d) {
			var l = d.length,
			s = this.bLs,
			t = s.charAt(64);
			t && (t = d.indexOf(t), -1 != t && (l = t));
			for (var t = [], r = 0, w = 0; w < l; w++)
				if (w % 4) {
					var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
					b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
					t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
					r++
				}
			return p.create(t, r)
		},
		bLs : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
	}
})();
(function (u) {
	function p(b, n, a, c, e, j, k) {
		b = b + (n & a | ~n & c) + e + k;
		return (b << j | b >>> 32 - j) + n
	}
	function d(b, n, a, c, e, j, k) {
		b = b + (n & c | a & ~c) + e + k;
		return (b << j | b >>> 32 - j) + n
	}
	function l(b, n, a, c, e, j, k) {
		b = b + (n^a^c) + e + k;
		return (b << j | b >>> 32 - j) + n
	}
	function s(b, n, a, c, e, j, k) {
		b = b + (a^(n | ~c)) + e + k;
		return (b << j | b >>> 32 - j) + n
	}
	for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
		b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
	r = r.MD5 = v.extend({
			bHj : function () {
				this.bLw = new w.init([1732584193, 4023233417, 2562383102, 271733878])
			},
			bHr : function (q, n) {
				for (var a = 0; 16 > a; a++) {
					var c = n + a,
					e = q[c];
					q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
				}
				var a = this.bLw.words,
				c = q[n + 0],
				e = q[n + 1],
				j = q[n + 2],
				k = q[n + 3],
				z = q[n + 4],
				r = q[n + 5],
				t = q[n + 6],
				w = q[n + 7],
				v = q[n + 8],
				A = q[n + 9],
				B = q[n + 10],
				C = q[n + 11],
				u = q[n + 12],
				D = q[n + 13],
				E = q[n + 14],
				x = q[n + 15],
				f = a[0],
				m = a[1],
				g = a[2],
				h = a[3],
				f = p(f, m, g, h, c, 7, b[0]),
				h = p(h, f, m, g, e, 12, b[1]),
				g = p(g, h, f, m, j, 17, b[2]),
				m = p(m, g, h, f, k, 22, b[3]),
				f = p(f, m, g, h, z, 7, b[4]),
				h = p(h, f, m, g, r, 12, b[5]),
				g = p(g, h, f, m, t, 17, b[6]),
				m = p(m, g, h, f, w, 22, b[7]),
				f = p(f, m, g, h, v, 7, b[8]),
				h = p(h, f, m, g, A, 12, b[9]),
				g = p(g, h, f, m, B, 17, b[10]),
				m = p(m, g, h, f, C, 22, b[11]),
				f = p(f, m, g, h, u, 7, b[12]),
				h = p(h, f, m, g, D, 12, b[13]),
				g = p(g, h, f, m, E, 17, b[14]),
				m = p(m, g, h, f, x, 22, b[15]),
				f = d(f, m, g, h, e, 5, b[16]),
				h = d(h, f, m, g, t, 9, b[17]),
				g = d(g, h, f, m, C, 14, b[18]),
				m = d(m, g, h, f, c, 20, b[19]),
				f = d(f, m, g, h, r, 5, b[20]),
				h = d(h, f, m, g, B, 9, b[21]),
				g = d(g, h, f, m, x, 14, b[22]),
				m = d(m, g, h, f, z, 20, b[23]),
				f = d(f, m, g, h, A, 5, b[24]),
				h = d(h, f, m, g, E, 9, b[25]),
				g = d(g, h, f, m, k, 14, b[26]),
				m = d(m, g, h, f, v, 20, b[27]),
				f = d(f, m, g, h, D, 5, b[28]),
				h = d(h, f, m, g, j, 9, b[29]),
				g = d(g, h, f, m, w, 14, b[30]),
				m = d(m, g, h, f, u, 20, b[31]),
				f = l(f, m, g, h, r, 4, b[32]),
				h = l(h, f, m, g, v, 11, b[33]),
				g = l(g, h, f, m, C, 16, b[34]),
				m = l(m, g, h, f, E, 23, b[35]),
				f = l(f, m, g, h, e, 4, b[36]),
				h = l(h, f, m, g, z, 11, b[37]),
				g = l(g, h, f, m, w, 16, b[38]),
				m = l(m, g, h, f, B, 23, b[39]),
				f = l(f, m, g, h, D, 4, b[40]),
				h = l(h, f, m, g, c, 11, b[41]),
				g = l(g, h, f, m, k, 16, b[42]),
				m = l(m, g, h, f, t, 23, b[43]),
				f = l(f, m, g, h, A, 4, b[44]),
				h = l(h, f, m, g, u, 11, b[45]),
				g = l(g, h, f, m, x, 16, b[46]),
				m = l(m, g, h, f, j, 23, b[47]),
				f = s(f, m, g, h, c, 6, b[48]),
				h = s(h, f, m, g, w, 10, b[49]),
				g = s(g, h, f, m, E, 15, b[50]),
				m = s(m, g, h, f, r, 21, b[51]),
				f = s(f, m, g, h, u, 6, b[52]),
				h = s(h, f, m, g, k, 10, b[53]),
				g = s(g, h, f, m, B, 15, b[54]),
				m = s(m, g, h, f, e, 21, b[55]),
				f = s(f, m, g, h, v, 6, b[56]),
				h = s(h, f, m, g, x, 10, b[57]),
				g = s(g, h, f, m, t, 15, b[58]),
				m = s(m, g, h, f, D, 21, b[59]),
				f = s(f, m, g, h, z, 6, b[60]),
				h = s(h, f, m, g, C, 10, b[61]),
				g = s(g, h, f, m, j, 15, b[62]),
				m = s(m, g, h, f, A, 21, b[63]);
				a[0] = a[0] + f | 0;
				a[1] = a[1] + m | 0;
				a[2] = a[2] + g | 0;
				a[3] = a[3] + h | 0
			},
			bEW : function () {
				var b = this.bl,
				n = b.words,
				a = 8 * this.bHs,
				c = 8 * b.sigBytes;
				n[c >>> 5] |= 128 << 24 - c % 32;
				var e = u.floor(a / 4294967296);
				n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
				n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
				b.sigBytes = 4 * (n.length + 1);
				this.bEV();
				b = this.bLw;
				n = b.words;
				for (a = 0; 4 > a; a++)
					c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
				return b
			},
			clone : function () {
				var b = v.clone.call(this);
				b.bLw = this.bLw.clone();
				return b
			}
		});
	t.MD5 = v.bHi(r);
	t.HmacMD5 = v.bHB(r)
})(Math);
(function () {
	var u = CryptoJS,
	p = u.lib,
	d = p.Base,
	l = p.WordArray,
	p = u.algo,
	s = p.EvpKDF = d.extend({
			cfg : d.extend({
				keySize : 4,
				hasher : p.MD5,
				iterations : 1
			}),
			init : function (d) {
				this.cfg = this.cfg.extend(d)
			},
			compute : function (d, r) {
				for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q; ) {
					n && s.update(n);
					var n = s.update(d).finalize(r);
					s.reset();
					for (var a = 1; a < p; a++)
						n = s.finalize(n), s.reset();
					b.concat(n)
				}
				b.sigBytes = 4 * q;
				return b
			}
		});
	u.EvpKDF = function (d, l, p) {
		return s.create(p).compute(d, l)
	}
})();
CryptoJS.lib.Cipher || function (u) {
	var p = CryptoJS,
	d = p.lib,
	l = d.Base,
	s = d.WordArray,
	t = d.BufferedBlockAlgorithm,
	r = p.enc.Base64,
	w = p.algo.EvpKDF,
	v = d.Cipher = t.extend({
			cfg : l.extend(),
			createEncryptor : function (e, a) {
				return this.create(this.bHk, e, a)
			},
			createDecryptor : function (e, a) {
				return this.create(this.bHA, e, a)
			},
			init : function (e, a, b) {
				this.cfg = this.cfg.extend(b);
				this.bHq = e;
				this.bF = a;
				this.reset()
			},
			reset : function () {
				t.reset.call(this);
				this.bHj()
			},
			process : function (e) {
				this.bGQ(e);
				return this.bEV()
			},
			finalize : function (e) {
				e && this.bGQ(e);
				return this.bEW()
			},
			keySize : 4,
			ivSize : 4,
			bHk : 1,
			bHA : 2,
			bHi : function (e) {
				return {
					encrypt : function (b, k, d) {
						return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
					},
					decrypt : function (b, k, d) {
						return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
					}
				}
			}
		});
	d.StreamCipher = v.extend({
			bEW : function () {
				return this.bEV(!0)
			},
			blockSize : 1
		});
	var b = p.mode = {},
	x = function (e, a, b) {
		var c = this.bHp;
		c ? this.bHp = u : c = this.bHo;
		for (var d = 0; d < b; d++)
			e[a + d] ^= c[d]
	},
	q = (d.BlockCipherMode = l.extend({
				createEncryptor : function (e, a) {
					return this.Encryptor.create(e, a)
				},
				createDecryptor : function (e, a) {
					return this.Decryptor.create(e, a)
				},
				init : function (e, a) {
					this.bHn = e;
					this.bHp = a
				}
			})).extend();
	q.Encryptor = q.extend({
			processBlock : function (e, a) {
				var b = this.bHn,
				c = b.blockSize;
				x.call(this, e, a, c);
				b.encryptBlock(e, a);
				this.bHo = e.slice(a, a + c)
			}
		});
	q.Decryptor = q.extend({
			processBlock : function (e, a) {
				var b = this.bHn,
				c = b.blockSize,
				d = e.slice(a, a + c);
				b.decryptBlock(e, a);
				x.call(this, e, a, c);
				this.bHo = d
			}
		});
	b = b.CBC = q;
	q = (p.pad = {}).Pkcs7 = {
		pad : function (a, b) {
			for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)
				l.push(d);
			c = s.create(l, c);
			a.concat(c)
		},
		unpad : function (a) {
			a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
		}
	};
	d.BlockCipher = v.extend({
			cfg : v.cfg.extend({
				mode : b,
				padding : q
			}),
			reset : function () {
				v.reset.call(this);
				var a = this.cfg,
				b = a.iv,
				a = a.mode;
				if (this.bHq == this.bHk)
					var c = a.createEncryptor;
				else
					c = a.createDecryptor, this.bHt = 1;
				this.eU = c.call(a, this, b && b.words)
			},
			bHr : function (a, b) {
				this.eU.processBlock(a, b)
			},
			bEW : function () {
				var a = this.cfg.padding;
				if (this.bHq == this.bHk) {
					a.pad(this.bl, this.blockSize);
					var b = this.bEV(!0)
				} else
					b = this.bEV(!0), a.unpad(b);
				return b
			},
			blockSize : 4
		});
	var n = d.CipherParams = l.extend({
			init : function (a) {
				this.mixIn(a)
			},
			toString : function (a) {
				return (a || this.formatter).stringify(this)
			}
		}),
	b = (p.format = {}).OpenSSL = {
		stringify : function (a) {
			var b = a.ciphertext;
			a = a.salt;
			return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
		},
		parse : function (a) {
			a = r.parse(a);
			var b = a.words;
			if (1398893684 == b[0] && 1701076831 == b[1]) {
				var c = s.create(b.slice(2, 4));
				b.splice(0, 4);
				a.sigBytes -= 16
			}
			return n.create({
				ciphertext : a,
				salt : c
			})
		}
	},
	a = d.SerializableCipher = l.extend({
			cfg : l.extend({
				format : b
			}),
			encrypt : function (a, b, c, d) {
				d = this.cfg.extend(d);
				var l = a.createEncryptor(c, d);
				b = l.finalize(b);
				l = l.cfg;
				return n.create({
					ciphertext : b,
					key : c,
					iv : l.iv,
					algorithm : a,
					mode : l.mode,
					padding : l.padding,
					blockSize : a.blockSize,
					formatter : d.format
				})
			},
			decrypt : function (a, b, c, d) {
				d = this.cfg.extend(d);
				b = this.bui(b, d.format);
				return a.createDecryptor(c, d).finalize(b.ciphertext)
			},
			bui : function (a, b) {
				return "string" == typeof a ? b.parse(a, this) : a
			}
		}),
	p = (p.kdf = {}).OpenSSL = {
		execute : function (a, b, c, d) {
			d || (d = s.random(8));
			a = w.create({
					keySize : b + c
				}).compute(a, d);
			c = s.create(a.words.slice(b), 4 * c);
			a.sigBytes = 4 * b;
			return n.create({
				key : a,
				iv : c,
				salt : d
			})
		}
	},
	c = d.PasswordBasedCipher = a.extend({
			cfg : a.cfg.extend({
				kdf : p
			}),
			encrypt : function (b, c, d, l) {
				l = this.cfg.extend(l);
				d = l.kdf.execute(d, b.keySize, b.ivSize);
				l.iv = d.iv;
				b = a.encrypt.call(this, b, c, d.key, l);
				b.mixIn(d);
				return b
			},
			decrypt : function (b, c, d, l) {
				l = this.cfg.extend(l);
				c = this.bui(c, l.format);
				d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
				l.iv = d.iv;
				return a.decrypt.call(this, b, c, d.key, l)
			}
		})
}
();
(function () {
	for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)
		a[c] = 128 > c ? c << 1 : c << 1^283;
	for (var e = 0, j = 0, c = 0; 256 > c; c++) {
		var k = j^j << 1^j << 2^j << 3^j << 4,
		k = k >>> 8^k & 255^99;
		l[e] = k;
		s[k] = e;
		var z = a[e],
		F = a[z],
		G = a[F],
		y = 257 * a[k]^16843008 * k;
		t[e] = y << 24 | y >>> 8;
		r[e] = y << 16 | y >>> 16;
		w[e] = y << 8 | y >>> 24;
		v[e] = y;
		y = 16843009 * G^65537 * F^257 * z^16843008 * e;
		b[k] = y << 24 | y >>> 8;
		x[k] = y << 16 | y >>> 16;
		q[k] = y << 8 | y >>> 24;
		n[k] = y;
		e ? (e = z^a[a[a[G^z]]], j ^= a[a[j]]) : e = j = 1
	}
	var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
	d = d.AES = p.extend({
			bHj : function () {
				for (var a = this.bF, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.bHz = d + 6) + 1), e = this.bHy = [], j = 0; j < a; j++)
					if (j < d)
						e[j] = c[j];
					else {
						var k = e[j - 1];
						j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
						e[j] = e[j - d]^k
					}
				c = this.bHx = [];
				for (d = 0; d < a; d++)
					j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]]^x[l[k >>> 16 & 255]]^q[l[k >>> 8 & 255]]^n[l[k & 255]]
			},
			encryptBlock : function (a, b) {
				this.bHm(a, b, this.bHy, t, r, w, v, l)
			},
			decryptBlock : function (a, c) {
				var d = a[c + 1];
				a[c + 1] = a[c + 3];
				a[c + 3] = d;
				this.bHm(a, c, this.bHx, b, x, q, n, s);
				d = a[c + 1];
				a[c + 1] = a[c + 3];
				a[c + 3] = d
			},
			bHm : function (a, b, c, d, e, j, l, f) {
				for (var m = this.bHz, g = a[b]^c[0], h = a[b + 1]^c[1], k = a[b + 2]^c[2], n = a[b + 3]^c[3], p = 4, r = 1; r < m; r++)
					var q = d[g >>> 24]^e[h >>> 16 & 255]^j[k >>> 8 & 255]^l[n & 255]^c[p++], s = d[h >>> 24]^e[k >>> 16 & 255]^j[n >>> 8 & 255]^l[g & 255]^c[p++], t = d[k >>> 24]^e[n >>> 16 & 255]^j[g >>> 8 & 255]^l[h & 255]^c[p++], n = d[n >>> 24]^e[g >>> 16 & 255]^j[h >>> 8 & 255]^l[k & 255]^c[p++], g = q, h = s, k = t;
				q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255])^c[p++];
				s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255])^c[p++];
				t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255])^c[p++];
				n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255])^c[p++];
				a[b] = q;
				a[b + 1] = s;
				a[b + 2] = t;
				a[b + 3] = n
			},
			keySize : 8
		});
	u.AES = p.bHi(d)
})();
function RSAKeyPair(a, b, c) {
	this.e = biFromHex(a),
	this.d = biFromHex(b),
	this.m = biFromHex(c),
	this.chunkSize = 2 * biHighIndex(this.m),
	this.radix = 16,
	this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
	return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
	for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e; )
		c[e] = b.charCodeAt(e), e++;
	for (; 0 != c.length % a.chunkSize; )
		c[e++] = 0;
	for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
		for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h)
			j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
		k = a.barrett.powMod(j, a.e),
		l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
		g += l + " "
	}
	return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
	var e,
	f,
	g,
	h,
	c = b.split(" "),
	d = "";
	for (e = 0; e < c.length; ++e)
		for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f)
			d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
	return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
	d
}
function setMaxDigits(a) {
	maxDigits = a,
	ZERO_ARRAY = new Array(maxDigits);
	for (var b = 0; b < ZERO_ARRAY.length; b++)
		ZERO_ARRAY[b] = 0;
	bigZero = new BigInt,
	bigOne = new BigInt,
	bigOne.digits[0] = 1
}
function BigInt(a) {
	this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
	this.isNeg = !1
}
function biFromDecimal(a) {
	for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c); )
		++c;
	if (c == a.length)
		d = new BigInt;
	else {
		for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length; )
			d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
		d.isNeg = b
	}
	return d
}
function biCopy(a) {
	var b = new BigInt(!0);
	return b.digits = a.digits.slice(0),
	b.isNeg = a.isNeg,
	b
}
function biFromNumber(a) {
	var c,
	b = new BigInt;
	for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0; )
		b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
	return b
}
function reverseStr(a) {
	var c,
	b = "";
	for (c = a.length - 1; c > -1; --c)
		b += a.charAt(c);
	return b
}
function biToString(a, b) {
	var d,
	e,
	c = new BigInt;
	for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero); )
		d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
	return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
	var c,
	d,
	b = new BigInt;
	for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero); )
		c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
	return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
	var b = 15,
	c = "";
	for (i = 0; 4 > i; ++i)
		c += hexToChar[a & b], a >>>= 4;
	return reverseStr(c)
}
function biToHex(a) {
	var d,
	b = "";
	for (biHighIndex(a), d = biHighIndex(a); d > -1; --d)
		b += digitToHex(a.digits[d]);
	return b
}
function charToHex(a) {
	var h,
	b = 48,
	c = b + 9,
	d = 97,
	e = d + 25,
	f = 65,
	g = 90;
	return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
	var d,
	b = 0,
	c = Math.min(a.length, 4);
	for (d = 0; c > d; ++d)
		b <<= 4, b |= charToHex(a.charCodeAt(d));
	return b
}
function biFromHex(a) {
	var d,
	e,
	b = new BigInt,
	c = a.length;
	for (d = c, e = 0; d > 0; d -= 4, ++e)
		b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
	return b
}
function biFromString(a, b) {
	var g,
	h,
	i,
	j,
	c = "-" == a.charAt(0),
	d = c ? 1 : 0,
	e = new BigInt,
	f = new BigInt;
	for (f.digits[0] = 1, g = a.length - 1; g >= d; g--)
		h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
	return e.isNeg = c,
	e
}
function biDump(a) {
	return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
	var c,
	d,
	e,
	f;
	if (a.isNeg != b.isNeg)
		b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
	else {
		for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f)
			e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
		c.isNeg = a.isNeg
	}
	return c
}
function biSubtract(a, b) {
	var c,
	d,
	e,
	f;
	if (a.isNeg != b.isNeg)
		b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
	else {
		for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f)
			d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
		if (-1 == e) {
			for (e = 0, f = 0; f < a.digits.length; ++f)
				d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
			c.isNeg = !a.isNeg
		} else
			c.isNeg = a.isNeg
	}
	return c
}
function biHighIndex(a) {
	for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b]; )
		--b;
	return b
}
function biNumBits(a) {
	var e,
	b = biHighIndex(a),
	c = a.digits[b],
	d = (b + 1) * bitsPerDigit;
	for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
		c <<= 1;
	return e
}
function biMultiply(a, b) {
	var d,
	h,
	i,
	k,
	c = new BigInt,
	e = biHighIndex(a),
	f = biHighIndex(b);
	for (k = 0; f >= k; ++k) {
		for (d = 0, i = k, j = 0; e >= j; ++j, ++i)
			h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
		c.digits[k + e + 1] = d
	}
	return c.isNeg = a.isNeg != b.isNeg,
	c
}
function biMultiplyDigit(a, b) {
	var c,
	d,
	e,
	f;
	for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f)
		e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
	return result.digits[1 + c] = d,
	result
}
function arrayCopy(a, b, c, d, e) {
	var g,
	h,
	f = Math.min(b + e, a.length);
	for (g = b, h = d; f > g; ++g, ++h)
		c[h] = a[g]
}
function biShiftLeft(a, b) {
	var e,
	f,
	g,
	h,
	c = Math.floor(b / bitsPerDigit),
	d = new BigInt;
	for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h)
		d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
	return d.digits[0] = d.digits[g] << e & maxDigitVal,
	d.isNeg = a.isNeg,
	d
}
function biShiftRight(a, b) {
	var e,
	f,
	g,
	h,
	c = Math.floor(b / bitsPerDigit),
	d = new BigInt;
	for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h)
		d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
	return d.digits[d.digits.length - 1] >>>= e,
	d.isNeg = a.isNeg,
	d
}
function biMultiplyByRadixPower(a, b) {
	var c = new BigInt;
	return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
	c
}
function biDivideByRadixPower(a, b) {
	var c = new BigInt;
	return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
	c
}
function biModuloByRadixPower(a, b) {
	var c = new BigInt;
	return arrayCopy(a.digits, 0, c.digits, 0, b),
	c
}
function biCompare(a, b) {
	if (a.isNeg != b.isNeg)
		return 1 - 2 * Number(a.isNeg);
	for (var c = a.digits.length - 1; c >= 0; --c)
		if (a.digits[c] != b.digits[c])
			return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
	return 0
}
function biDivideModulo(a, b) {
	var f,
	g,
	h,
	i,
	j,
	k,
	l,
	m,
	n,
	o,
	p,
	q,
	r,
	s,
	c = biNumBits(a),
	d = biNumBits(b),
	e = b.isNeg;
	if (d > c)
		return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
	for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix; )
		b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
	for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k); )
		++f.digits[j - h], g = biSubtract(g, k);
	for (l = j; l > h; --l) {
		for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s; )
			--f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
		k = biMultiplyByRadixPower(b, l - h - 1),
		g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
		g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
	}
	return g = biShiftRight(g, i),
	f.isNeg = a.isNeg != e,
	a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)),
	0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
	new Array(f, g)
}
function biDivide(a, b) {
	return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
	return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
	return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
	for (var c = bigOne, d = a; ; ) {
		if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b)
			break;
		d = biMultiply(d, d)
	}
	return c
}
function biPowMod(a, b, c) {
	for (var d = bigOne, e = a, f = b; ; ) {
		if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f))
			break;
		e = biMultiplyMod(e, e, c)
	}
	return d
}
function BarrettMu(a) {
	this.modulus = biCopy(a),
	this.k = biHighIndex(this.modulus) + 1;
	var b = new BigInt;
	b.digits[2 * this.k] = 1,
	this.mu = biDivide(b, this.modulus),
	this.bkplus1 = new BigInt,
	this.bkplus1.digits[this.k + 1] = 1,
	this.modulo = BarrettMu_modulo,
	this.multiplyMod = BarrettMu_multiplyMod,
	this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
	var i,
	b = biDivideByRadixPower(a, this.k - 1),
	c = biMultiply(b, this.mu),
	d = biDivideByRadixPower(c, this.k + 1),
	e = biModuloByRadixPower(a, this.k + 1),
	f = biMultiply(d, this.modulus),
	g = biModuloByRadixPower(f, this.k + 1),
	h = biSubtract(e, g);
	for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i; )
		h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
	return h
}
function BarrettMu_multiplyMod(a, b) {
	var c = biMultiply(a, b);
	return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
	var d,
	e,
	c = new BigInt;
	for (c.digits[0] = 1, d = a, e = b; ; ) {
		if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e))
			break;
		d = this.multiplyMod(d, d)
	}
	return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
	function a(a) {
		var d,
		e,
		b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
		c = "";
		for (d = 0; a > d; d += 1)
			e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
		return c
	}
	function b(a, b) {
		var c = CryptoJS.enc.Utf8.parse(b),
		d = CryptoJS.enc.Utf8.parse("0102030405060708"),
		e = CryptoJS.enc.Utf8.parse(a),
		f = CryptoJS.AES.encrypt(e, c, {
				iv : d,
				mode : CryptoJS.mode.CBC
			});
		return f.toString()
	}
	function c(a, b, c) {
		var d,
		e;
		return setMaxDigits(131),
		d = new RSAKeyPair(b, "", c),
		e = encryptedString(d, a)
	}
	function d(d, e, f, g) {
		var h = {},
		i = a(16);
		return h.encText = b(d, g),
		h.encText = b(h.encText, i),
		h.encSecKey = c(i, e, f),
		h
	}
	function e(a, b, d, e) {
		var f = {};
		return f.encText = c(a + e, b, d),
		f
	}
	window.asrsea = d,
	window.ecnonasr = e
}
();
(function () {
	var be = NEJ.P,
	eL = be("nej.g"),
	bH = be("nej.j"),
	bm = be("nej.u"),
	bHd = be("nm.x.ek"),
	bq = be("nm.x");
	if (bH.cR.redefine || !window.GEnc)
		return;
	var bi = function (qr) {
		var bn = [];
		bm.bLt(qr, function (nb) {
			bn.push(bHd.emj[nb])
		});
		return bn.join("")
	};
	var bHw = bH.cR;
	bH.cR = function (cg, bf) {
		var bl = {},
		bf = NEJ.X({}, bf),
		kZ = cg.indexOf("?");
		if (/(^|\.com)\/api/.test(cg) && !(bf.headers && bf.headers[eL.wF] == eL.Df) && !bf.noEnc) {
			if (kZ != -1) {
				bl = bm.mk(cg.substring(kZ + 1));
				cg = cg.substring(0, kZ)
			}
			if (bf.query) {
				bl = NEJ.X(bl, bm.fX(bf.query) ? bm.mk(bf.query) : bf.query)
			}
			if (bf.data) {
				bl = NEJ.X(bl, bm.fX(bf.data) ? bm.mk(bf.data) : bf.data)
			}
			bl["csrf_token"] = bH.fN("__csrf");
			cg = cg.replace("api", "weapi");
			bf.method = "post";
			delete bf.query;
			var bHl = window.asrsea(JSON.stringify(bl), bi(["流泪", "强"]), bi(bHd.md), bi(["爱心", "女孩", "惊恐", "大笑"]));
			bf.data = bm.eK({
					params : bHl.encText,
					encSecKey : bHl.encSecKey
				})
		}
		bHw(cg, bf)
	};
	bH.cR.redefine = true
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	dE = be("nej.p"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	eb = be("nm.u"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bkO = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
	bl = {
		"大笑" : "86",
		"可爱" : "85",
		"憨笑" : "359",
		"色" : "95",
		"亲亲" : "363",
		"惊恐" : "96",
		"流泪" : "356",
		"亲" : "362",
		"呆" : "352",
		"哀伤" : "342",
		"呲牙" : "343",
		"吐舌" : "348",
		"撇嘴" : "353",
		"怒" : "361",
		"奸笑" : "341",
		"汗" : "97",
		"痛苦" : "346",
		"惶恐" : "354",
		"生病" : "350",
		"口罩" : "351",
		"大哭" : "357",
		"晕" : "355",
		"发怒" : "115",
		"开心" : "360",
		"鬼脸" : "94",
		"皱眉" : "87",
		"流感" : "358",
		"爱心" : "33",
		"心碎" : "34",
		"钟情" : "303",
		"星星" : "309",
		"生气" : "314",
		"便便" : "89",
		"强" : "13",
		"弱" : "372",
		"拜" : "14",
		"牵手" : "379",
		"跳舞" : "380",
		"禁止" : "374",
		"这边" : "262",
		"爱意" : "106",
		"示爱" : "376",
		"嘴唇" : "367",
		"狗" : "81",
		"猫" : "78",
		"猪" : "100",
		"兔子" : "459",
		"小鸡" : "450",
		"公鸡" : "461",
		"幽灵" : "116",
		"圣诞" : "411",
		"外星" : "101",
		"钻石" : "52",
		"礼物" : "107",
		"男孩" : "0",
		"女孩" : "1",
		"蛋糕" : "337",
		18 : "186",
		"圈" : "312",
		"叉" : "313"
	};
	bq.jC = function (bU) {
		if (!bU || bU.copyrightId === undefined || !!bU.program)
			return false;
		if (window.GAbroad) {
			bU.fee = 0;
			return true
		}
		if (bU.status < 0)
			return true;
		var AQ;
		if (typeof GCopyrights !== "undefined")
			AQ = GCopyrights;
		try {
			if (!AQ && !!top.GCopyrights)
				AQ = top.GCopyrights
		} catch (e) {}

		if (AQ) {
			var bu = bm.dY(AQ, bU.copyrightId);
			if (bu >= 0)
				return true
		}
		return false
	};
	bq.Gs = function () {
		var rn = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
		nM = {
			2 : "artist",
			13 : "playlist",
			17 : "dj",
			19 : "album",
			18 : "song",
			31 : "toplist",
			32 : "searchsong",
			33 : "searchlyric",
			34 : "event",
			70 : "djradio",
			24 : "day",
			50 : "record"
		},
		bkN = {
			song : "单曲",
			album : "专辑",
			artist : "歌手",
			playlist : "歌单",
			dj : "电台节目",
			searchsong : "单曲搜索",
			searchlyric : "歌词搜索",
			toplist : "榜单",
			event : "动态",
			djradio : "电台",
			day : "每日歌曲推荐",
			record : "听歌排行榜"
		};
		var bkM = function (bF, bl, GA) {
			switch (bF) {
			case "event":
				bl = bl.split("|");
				return "/event?id=" + bl[0] + "&uid=" + bl[1];
			case "searchsong":
			case "searchlyric":
				var bDM = bF == "searchsong" ? 1 : 1006;
				return "/search/m/?s=" + encodeURIComponent(bl) + "&type=" + bDM;
			case "toplist":
				return "/discover/toplist?id=" + bl + "&_hash=songlist-" + GA;
			case "day":
				return "/discover/recommend/taste" + "?_hash=songlist-" + GA; ;
			case "record":
				bl = bl.split("|");
				return "/user/songs/rank?id=" + bl[0] + "&cat=" + bl[1];
				break;
			default:
				return "/" + bF + "?id=" + bl + "&_hash=songlist-" + GA
			}
		};
		return function (dz, GA) {
			if (!dz)
				return null;
			var AR = dz.fid || (dz.type != 18 ? dz.type : null),
			bcp = dz.fdata || dz.rid,
			bcq = dz.page || dz.fhref;
			var bF = nM[AR];
			if (!bF) {
				var rv = (bcq || "").match(rn);
				if (rv)
					bF = rv[1]
			}
			if (!bF)
				return null;
			return {
				title : bkN[bF],
				link : !nM[AR] ? bcq : bkM(bF, bcp, GA),
				fid : AR,
				fdata : bcp
			}
		}
	}
	();
	bq.He = function (mP) {
		var gr = mP;
		if (typeof GUser !== "undefined" && GUser.userId > 0)
			gr = GUser;
		return gr
	};
	bq.uH = function () {
		if (typeof GUser !== "undefined" && GUser.userId > 0) {
			return true
		} else {
			top.login();
			return false
		}
	};
	bq.uy = function () {
		var rn = /#(.*?)$/;
		return function (bim) {
			var bLi = bim === false ? location : top.location;
			return rn.test(bLi.href) ? RegExp.$1 : ""
		}
	}
	();
	bq.wg = function () {
		var bcr = bq.bcx().supported,
		rB = Fp.gH("audio"),
		bcu = rB.canPlayType && rB.canPlayType("audio/mpeg");
		if (dE.Nn.mac) {
			if (bcu)
				return 2;
			if (bcr)
				return 1;
			return 0
		} else {
			if (bcr)
				return 1;
			if (bcu)
				return 2;
			return 0
		}
	};
	bq.bcx = function () {
		var bLx,
		JR = !1,
		JS = "";
		if (dE.dp.browser == "ie") {
			try {
				bLx = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
			} catch (e) {
				bLx = null
			}
			if (bLx) {
				JR = !0;
				JS = bLx.GetVariable("$version")
			}
		} else {
			if (navigator.plugins && navigator.plugins.length > 0) {
				bLx = navigator.plugins["Shockwave Flash"];
				if (bLx) {
					JR = !0;
					JS = bLx.description
				}
			}
		}
		return {
			supported : JR,
			version : JS
		}
	};
	bq.Ig = function () {
		return "网易云音乐 听见好时光"
	};
	bq.bkx = function () {
		return bl
	};
	bq.bcy = function (fc) {
		var bC = bl[fc];
		return bC == null ? "" : bkO.replace("{ID}", bC)
	};
	bq.rF = function (ci, cW, bFQ) {
		if (!ci)
			return "";
		if (!!bFQ) {
			ci = bq.bHc(ci)
		}
		return bq.bcA(bq.bkt(ci, cW))
	};
	bq.bHc = function () {
		var dq = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
		return function (ci) {
			return (ci || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dq, function ($0, $1) {
				return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
			})
		}
	}
	();
	bq.bkt = function () {
		var dq = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
		var lr = function (kF, cW) {
			return '<a href="/user/home?nickname=' + encodeURIComponent(kF) + '" class="' + (cW || "") + '">@' + kF + "</a>"
		};
		return function (ci, cW) {
			return (ci || "").replace(dq, function ($0, $1) {
				return lr($1, cW)
			})
		}
	}
	();
	bq.bcA = function () {
		var dq = /\[(.*?)\]/g;
		return function (ci) {
			return (ci || "").replace(dq, function ($1, $2) {
				var cg = bq.bcy($2);
				return !cg ? $1 : '<img src="' + cg + '"/>'
			})
		}
	}
	();
	bq.mR = function (bD, cW) {
		Fp.cJ(bD, cW) ? Fp.bR(bD, cW) : Fp.bV(bD, cW)
	};
	bq.Ki = function (cT, eA) {
		cT = Fp.bw(cT);
		eA = Fp.bw(eA);
		if (!cT || !eA)
			return !1;
		for (eA = eA.parentNode; !!eA && eA != cT; eA = eA.parentNode);
		return eA == cT
	};
	bq.lx = function () {
		var Bu = function (bJx) {
			return (bJx < 10 ? "0" : "") + bJx
		};
		return function (lw) {
			lw = parseInt(lw) || 0;
			if (!lw)
				return "00:00";
			var Kn = Math.floor(lw % 60),
			Ko = Math.floor(lw / 60);
			return Bu(Ko) + ":" + Bu(Kn)
		}
	}
	();
	bq.ls = function () {
		var BA = function (jA, cW, cT) {
			if (!jA || !jA.name)
				return "";
			if (!jA.id)
				return '<span class="' + cW + '">' + bm.eZ(jA.name) + "</span>";
			return "<a" + (cT ? ' target="_blank"' : "") + ' class="' + cW + '" href="/artist?id=' + jA.id + '" hidefocus="true">' + bm.eZ(jA.name) + "</a>"
		};
		return function (hD, bX, yx, cT) {
			if (!hD || !hD.length)
				return "";
			yx = yx || "/";
			bX = bX || "";
			var hm = [];
			for (var i = 0, bk = [], qy = [], jp; i < hD.length; ++i) {
				hm.push(hD[i].name);
				if (!hD[i] || hD[i].id <= 0) {
					qy.push(hD[i]);
					continue
				}
				if (bm.gj(bX)) {
					jp = bX(hD[i])
				} else {
					jp = BA(hD[i], bX, cT)
				}
				!!jp && bk.push(jp)
			}
			for (var i = 0, jp; i < qy.length; ++i) {
				if (bm.gj(bX)) {
					jp = bX(qy[i])
				} else {
					jp = BA(qy[i], bX, cT)
				}
				!!jp && bk.push(jp)
			}
			return '<span title="' + hm.join(yx) + '">' + bk.join(yx) + "</span>"
		}
	}
	();
	bq.rT = function (eF) {
		return !!eF && /^[0-9]{11}$/.test(eF)
	};
	bq.bks = function (eF) {
		if (!bq.rT(eF))
			return eF;
		return eF.substring(0, 3) + "****" + eF.substr(7)
	};
	bq.hN = function () {
		var dq = /^\s+$/g;
		return function (gp) {
			return !gp || dq.test(gp)
		}
	}
	();
	bq.BJ = function () {
		var KD = /[^\x00-\xfff]/g;
		return function (gp) {
			var bkr = gp.match(KD) || [],
			jx = bkr.length;
			return gp.length + jx
		}
	}
	();
	bq.BQ = function () {
		var KD = /[^\x00-\xfff]/;
		return function (gp, gX) {
			for (var i = 0, len = gp.length; i < len && gX > 0; i++) {
				if (KD.test(gp.charAt(i))) {
					gX -= 2;
					if (gX < 0) {
						break
					}
				} else {
					gX -= 1
				}
			}
			return gp.substring(0, i)
		}
	}
	();
	bq.yi = function (gp, gX, BS) {
		gX = gX || 10;
		BS = BS || nej.p.dp.engine == "trident" && parseInt(nej.p.dp.release) < 5;
		if (BS && bq.BJ(gp) > gX) {
			return bq.BQ(gp, gX) + "..."
		} else {
			return gp
		}
	};
	bq.bcC = function (bid) {
		return bid === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(bid.type || bid.href || ~bid.tabIndex)
	};
	bq.bcD = function (bc, cT) {
		if (!bc || !cT)
			return !0;
		var bid,
		bDM = bc.type.toLowerCase();
		if (bDM == "mouseout") {
			bid = bc.relatedTarget || bc.toElement
		} else if (bDM == "mouseover") {
			bid = bc.relatedTarget || bc.fromElement
		}
		return !bid || bid !== cT && !bq.Ki(cT, bid)
	};
	bq.jK = function () {
		bW = {};
		return function (bid, dZ) {
			var bC = Fp.ik(bid),
			bF = "hover-" + bC;
			if (!dZ || !bC || !!bW[bF])
				return;
			bW[bF] = !0;
			bj.bs(bC, "mouseover", function () {
				var KR = Fp.bP(bid, "hshow") || [];
				var KS = Fp.bP(bid, "icn-dislike") || [];
				Fp.bV(bC, "z-hover");
				Fp.bY(KR[0], "display", "block");
				Fp.bY(KS[0], "display", "block")
			});
			bj.bs(bC, "mouseout", function () {
				var KR = Fp.bP(bid, "hshow") || [];
				var KS = Fp.bP(bid, "icn-dislike") || [];
				Fp.bR(bC, "z-hover");
				Fp.bY(KR[0], "display", "none");
				Fp.bY(KS[0], "display", "none")
			})
		}
	}
	();
	bq.bcI = function () {
		var bLs = {
			r : /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
			"(" : "\\(",
			")" : "\\)",
			"[" : "\\[",
			"]" : "\\]",
			"{" : "\\{",
			"}" : "\\}",
			"*" : "\\*",
			"+" : "\\+",
			"^" : "\\^",
			$ : "\\$",
			"?" : "\\?",
			"!" : "\\!",
			"\\" : "\\\\",
			"|" : "\\|",
			"." : "\\."
		};
		return function (gp) {
			return bm.BR(bLs, gp)
		}
	}
	();
	bq.pa = function (cr) {
		if (bm.Fg(cr))
			cr = cr.getTime();
		var lk = new Date,
		yd = lk.getTime() - cr;
		if (yd <= 6e4)
			return "刚刚";
		var EW = lk.getHours() * 36e5 + lk.getMinutes() * 6e4 + lk.getSeconds() * 1e3;
		if (yd <= EW) {
			if (yd < 36e5) {
				var bkg = Math.floor(yd / 6e4);
				return bkg + "分钟前"
			}
			return bm.sW(cr, "HH:mm")
		} else {
			if (yd < EW + 864e5) {
				return "昨天" + bm.sW(cr, "HH:mm")
			} else {
				var fG = lk.getFullYear(),
				bkf = new Date(fG, 0, 1);
				var EW = lk.getTime() - bkf.getTime();
				if (yd < EW) {
					return bm.sW(cr, "M月d日 HH:mm")
				}
				return bm.sW(cr, "yyyy年M月d日")
			}
		}
	};
	bq.Cb = function () {
		var dq = /\{(.*?)\}/gi;
		return function (qv, bl) {
			return (qv || "").replace(dq, function ($1, $2) {
				var bz = bl[$2];
				return bz == null ? $1 : bz
			})
		}
	}
	();
	bq.gN = function () {
		var ce = Array.prototype.slice.call(arguments, 0),
		qv = ce.shift();
		if (qv) {
			return qv.replace(/{(\d+)}/g, function ($1, $2) {
				return $2 < ce.length ? ce[$2] : $1
			})
		}
		return ""
	};
	bq.qz = function (bk, cW, iP) {
		return "";
		iP = iP || " - ";
		if (bk && bk.length) {
			return iP + (!!cW ? '<span class="' + cW + '">' + bk[0] + "</span>" : bk[0])
		}
		return ""
	};
	bq.bcM = function () {
		if (window.getSelection) {
			var Fa = window.getSelection();
			if (Fa && Fa.focusNode && Fa.focusNode.tagName) {
				var bdf = Fp.dh(Fa.focusNode);
				for (var i = 0, qU; i < bdf.length; ++i) {
					qU = bdf[i].tagName;
					if (!qU)
						continue;
					qU = qU.toLowerCase();
					if (qU == "textarea" || qU == "input")
						return !0
				}
			}
		} else if (document.selection) {
			var gl = document.selection.createRange();
			if (gl) {
				var bid = gl.parentElement();
				if (bid && bid.tagName) {
					var qU = bid.tagName.toLowerCase();
					if (qU == "textarea" || qU == "input")
						return !0
				}
			}
		}
		return !1
	};
	bq.xz = function (eT) {
		if (/^[A-Z]\:\\/i.test(eT)) {
			eT = eT.split("\\")
		} else {
			eT = eT.split("/")
		}
		eT = eT[eT.length - 1];
		return eT
	};
	bq.bjS = function () {
		var tW = [13, 17, 34, 19, 18, 21];
		return function (bC) {
			var cK = (bC || "").split("_");
			return {
				type : tW[cK[2]] || -1,
				id : cK[3] || ""
			}
		}
	}
	();
	bq.bjR = function (gr) {
		if (4 == gr.userType) {
			return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
		} else if (gr.authStatus == 1) {
			return '<sup class="u-icn u-icn-1"></sup>'
		} else if (gr.expertTags && gr.expertTags.length) {
			return '<sup class="u-icn u-icn-84"></sup>'
		}
	};
	bq.bEp = function (bJx) {
		bJx += "";
		if (bJx) {
			return bJx.substr(0, 3) + "****" + bJx.substr(bJx.length - 4)
		}
	};
	bq.bEK = function (bu, df) {
		return (bu % df + df) % df
	};
	bq.bGc = function () {
		var tW = ["playlist", "program", "event", "album", "song", "mv", "topic"];
		return function (bC) {
			var cK = (bC || "").split("_"),
			bn = {
				type : tW[cK[2]] || -1,
				id : cK[3] || ""
			};
			if (bn.type == "event") {
				bn.uid = cK[4] || "";
				return "/" + bn.type + "?id=" + bn.id + "&uid=" + bn.uid
			}
			return "/" + bn.type + "?id=" + bn.id
		}
	}
	();
	bq.bGd = function () {
		var tW = ["歌单", "电台节目", "动态", "专辑", "单曲", "MV", "专题"];
		return function (bC) {
			var cK = (bC || "").split("_");
			return tW[cK[2]] || "资源"
		}
	}
	();
	bq.bHb = function (cC) {
		var qs = cC.length > 0 ? cC.substring(1) : "",
		args = {},
		items = qs.length ? qs.split("&") : [],
		item = null,
		name = null,
		value = null,
		i = 0,
		len = items.length;
		for (i = 0; i < len; i++) {
			item = items[i].split("=");
			name = decodeURIComponent(item[0]);
			value = decodeURIComponent(item[1]);
			if (name.length) {
				args[name] = value
			}
		}
		return args
	};
	bq.bGe = function (bEY, Zu) {
		var bFL = 0,
		ip = new Array;
		bm.bLt(bEY, function (cg, bu) {
			var hv = Fp.gH("img");
			hv.src = cg;
			bj.bs(hv, "load", function (bu, bc) {
				ip[bu] = 1;
				bFL++;
				if (bFL == bEY.length)
					Zu(bEY, ip)
			}
				.bh(this, bu));
			bj.bs(hv, "error", function (bc, bu) {
				ip[bu] = 0;
				bFL++;
				if (bFL == bEY.length)
					Zu(bEY, ip)
			}
				.bh(this, bu))
		})
	};
	bq.bGg = function (bk, eg) {
		var bn = [];
		bm.bLt(bk, function (bt) {
			bn.push(eg(bt))
		});
		return bn
	};
	bq.bHa = function (ci) {
		return bm.eZ((ci || "").replace(/\s{2,}/g, " ").trim())
	};
	bq.bdM = function (eD) {
		if (eD.transNames && eD.transNames.length) {
			return eD.transNames[0]
		} else if (eD.alias && eD.alias.length) {
			return eD.alias[0]
		}
	};
	bq.bdK = function (bdt) {
		if (bdt) {
			return bdt.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
		}
	};
	bq.bHQ = function (bid) {
		var bid = Fp.bw(bid),
		fc = bid && bid.getElementsByTagName("textarea")[0],
		bF = Fp.bI(bid, "key"),
		bIh = bp.uQ.mh();
		if (!(bid && fc && bF))
			return;
		bIh.ro(bF, JSON.parse(fc.value));
		bid.innerHTML = "";
		return bF
	};
	bq.bIg = function (bHE) {
		if (!bHE.onbeforelistload) {
			bHE.onbeforelistload = function (bc) {
				bc.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
			}
		}
		if (!bHE.onemptylist) {
			bHE.onemptylist = function (bc) {
				bc.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (bHE.emptyMsg || "暂时还没有数据") + "</h3></div>"
			}
		}
		return bHE
	};
	bq.bMk = function (bLy) {
		if (!bLy)
			return null;
		var pr = {
			album : bLy.al,
			alias : bLy.alia || bLy.ala || [],
			artists : bLy.ar || [],
			commentThreadId : "R_SO_4_" + bLy.id,
			copyrightId : bLy.cp || 0,
			duration : bLy.dt || 0,
			id : bLy.id,
			mvid : bLy.mv || 0,
			name : bLy.name || "",
			cd : bLy.cd,
			position : bLy.no || 0,
			ringtone : bLy.rt,
			rtUrl : bLy.rtUrl,
			status : bLy.st || 0,
			pstatus : bLy.pst || 0,
			fee : bLy.fee || 0,
			version : bLy.v || 0,
			eq : bLy.eq,
			songType : bLy.t || 0,
			mst : bLy.mst,
			score : bLy.pop || 0,
			ftype : bLy.ftype,
			rtUrls : bLy.rtUrls,
			transNames : bLy.tns,
			privilege : bLy.privilege
		};
		return pr
	};
	bq.bMz = function () {
		var bid = Fp.tU('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
		document.body.appendChild(bid);
		bj.bs(bid, "click", function (bc) {
			bj.cu(bc);
			Fp.fx(bid)
		})
	};
	bq.bMA = function (dm) {
		if (dm < 1e5) {
			return dm
		} else {
			return Math.floor(dm / 1e4) + "万"
		}
	};
	bq.bMX = function (dm, fc) {
		return "<i>" + (dm ? "(" + dm + ")" : fc) + "</i>"
	}
})();
(function () {
	function x() {
		var h = "MmI12c93DJo6px0n".split("");
		this.GB = function (g) {
			if (null == g || void((1464086688^345178714) + (-1094586668^48833490)) == g)
				return g;
			if ((-70715121^-1985074564) + (-420218205^1802163758) != g.length % ((1677721540^1208943436) + (126793362^-746474008)))
				throw Error("1100");
			for (var k = [], l = (867647599^887503956) + (-1899999895^1986973356); l < g.length; l++) {
				(-1353826066^-1682229371) + (-94974223^828130916) == l % ((-585148913^-706166081) + (-1757469750^1614235800)) && k.push("%");
				for (var n = h, w = (352369889^1264400622) + (-430415204^1207572845); w < n.length; w++)
					if (g.charAt(l) == n[w]) {
						k.push(w.toString((1498391092^81701778) + (-1564940465^14029093)));
						break
					}
			}
			return decodeURIComponent(k.join(""))
		}
	}
	var n = (new x).GB,
	h = (new x).GB,
	g = (new x).GB,
	k = (new x).GB,
	l = (new x).GB;
	(function () {
		function x(a) {
			for (var e = [], d = (-1558456649^-156186362) + (-1117841117^386660716); d < a; d++) {
				var b = ((-720177852^-237914700) + (704911192^-247945194)) * Math.random(),
				b = Math.floor(b);
				e.push(n("9mco9IcJ1M91cD92c31m9cc9991Icc9311c29D12c19JcI1c9ocm9619cM9p2n139x20901D2x9n2p1J3M263m2o3I2J312D32233c29392c33223D213J2I3o2m").charAt(b))
			}
			return e.join(g(""))
		}
		function D(a) {
			for (var e = q.cookie.split(l("16IM")), d = (1927624072^2033069835) + (1532648936^-1351698283); d < e.length; d++) {
				var b = e[d].indexOf(k("1x"));
				if ((-652444267^-1511413121) + (-1894101087^202401719) <= b) {
					var c = e[d].substring((-1713931660^-492215387) + (1670666804^-418005989), b),
					b = e[d].substring(b + ((-1055174120^-158181470) + (689042632^-513339761)), e[d].length);
					if (c == a)
						return window.decodeURIComponent(b)
				}
			}
			return null
		}
		function R(a) {
			var e = l("39IM993MIM3cIM9DIM9c91IM9c9x").split(h("IM")),
			d;
			if (null == a || void((2002773766^528368891) + (-710834241^1115675580)) == a)
				return a;
			if (l("9n9I9o9c9132") == typeof a) {
				d = k("36");
				for (var b = (1874585304^299639911) + (1989596223^-150017666); b < e.length; b++)
					if (a.hasOwnProperty(e[b])) {
						var c = l("I3") + e[b] + k("I31oI3"),
						f;
						f = l("") + a[e[b]];
						f = null == f || void((-635311390^-110907233) + (-1640570844^1116423591)) == f ? f : f.replace(/'/g, k("cpI3")).replace(/"/g, k("II"));
						d += c + f + g("I3Ip")
					}
				g("Ip") == d.charAt(d.length - ((462653679^161094991) + (-1383699226^1081083527))) && (d = d.substring((1328204189^167093355) + (-188142489^1307164269), d.length - ((1624794621^924755577) + (1024705287^-1792344198))));
				return d + g("3x")
			}
			return null
		}
		function S(a, e, d, b) {
			var c = [];
			c.push(a + n("1x") + window.encodeURIComponent(e));
			d && (a = new Date(b), b = a.toGMTString(), c.push(g("16IM")), c.push(k("9c3D")), c.push(g("3M9J")), c.push(g("3I9c")), c.push(n("311x")), c.push(b));
			c.push(l("16IM"));
			c.push(h("3M9m"));
			c.push(k("329D1xIn"));
			b = l("I0") + window[g("9p9n919m329J9n90")].hostname;
			null != b && void((179061284^1467923800) + (-919280570^1796859074)) != b && k("") != b && (c.push(n("16IM")), c.push(n("929n")), c.push(l("9x9m9J")), c.push(g("901x")), c.push(b));
			q.cookie = c.join(l(""))
		}
		function T(a, e) {
			for (var d = [], b = (-1104509226^-825727091) + (1157004923^-873766690); b < e; b++)
				d.push(a);
			return d.join(n(""))
		}
		function w(a) {
			if (null == a || void((700941223^848526610) + (-455386495^7363530)) == a || n("") == a)
				return null;
			a = a.split(k("1o"));
			return (-1557661866^-524502748) + (-1937294963^820217885) > a.length || !/[0-9]+/gi.test(a[(344631200^987573575) + (502502715^-866394079)]) ? null : parseInt(a[(-1750267408^-1052254921) + (249382790^-1480037188)])
		}
		function Y() {
			var a = D(h("2oc12cc1c12J2n202J22Ixc3cJcJcJ"));
			if (null == a || void((1263581397^843189941) + (-1361067006^674401698)) == a || k("") == a)
				return (971496910^1933006322) + (-90099355^1334724257);
			a = w(a);
			return null == a ? (1706500058^1937713848) + (49297981^-339218269) : a - ((906156732^787316261) + (-291806312^160048735)) - (new window.Date).getTime()
		}
		function K() {
			var a = !((-1212801847^-45414660) + (-2053184810^815531805)),
			e = {
				v : h("391mI01M")
			},
			d = null;
			e.h = Z;
			var b = (new window.Date).getTime() + ((629098801^78109099) + (2065459112^-1520533234));
			e.u = x((-706704233^-1165407155) + (1695868380^-175973643)) + b + x((-769470868^-2042373527) + (79649474^-1356746436));
			try {
				var c = (new aa).get();
				null != c && void((739491497^277156226) + (662925904^-454417787)) != c && (1770499029^28042716) + (985628904^-1385418465) < c.length ? e.fp = c.join(n("Ip")) : (e.fp = T(g("1M"), (-298276928^-543227816) + (1404825862^-1646024332)), e.ec = l("1m"), a = !((-2086246114^-1184882977) + (-504572115^617963373)))
			} catch (f) {
				e.fp = T(l("1M"), (-1877126245^-1046905181) + (-342429384^1173169130)),
				e.ec = n("1m"),
				a = !((1586692387^1218022507) + (1093871092^-1463396531))
			}
			try {
				if (d = R(e), null == d || void((-418723390^-1322964227) + (1880869226^-640952917)) == d)
					d = n("");
				else {
					var r = U(d),
					B = U(h("1m12131212921J1c111D119192111M131c222m121I211J1191229m2m9c1312191c21292m1c99211M2I1J112I1m")),
					c = r;
					null == c && (c = []);
					e = [];
					for (r = (-1718400663^-722677542) + (238062053^-1129255e3); (508250344^476353526) + (-685264128^720869350) > r; r++) {
						var q = ((-543114457^-1473904605) + (275501194^-1743612554)) * Math.random(),
						q = Math.floor(q);
						e[r] = t(q)
					}
					var B = L(B),
					B = M(B, L(e)),
					q = B = L(B),
					y,
					p = c;
					if (null == p || void((1827539634^2048414340) + (-907961441^552090709)) == p || (-1684630287^-2139176646) + (-124341125^478223950) == p.length)
						y = V((1493082863^1249296114) + (-2051012511^1756884034));
					else {
						var m = p.length,
						c = (175252306^1111984400) + (480227590^-1420434248),
						c = (-1515266927^-1910356948) + (2140553256^-1411045545) >= m % ((-346657995^-1771966827) + (862056242^-1314286190)) ? (-2101448443^-2041369135) + (-741902186^685104122) - m % ((1720926217^689191951) + (-2066803859^884447063)) - ((262441392^1745495276) + (1375757850^-900647758)) : (1872412268^2067371644) + (608380145^-819987327) - m % ((1681597298^231719895) + (1592610896^-924430389)) - ((-704040589^-1989189335) + (557684266^-2119943808)),
						r = [];
						F(p, (1258200654^45832591) + (1582317620^-370509813), r, (164233953^772056713) + (1239902356^-1848233204), m);
						for (p = (1057475589^439040109) + (1399058776^-1984890176); p < c; p++)
							r[m + p] = (2118909340^2064636655) + (103258109^-56864912);
						p = [];
						p[(465317715^636000608) + (-1114835448^2082979781)] = m >>> (20707941^1469226289) + (2057511557^-738870719) & (269989610^997521329) + (-255570227^609808745);
						p[(1954387010^754769288) + (-748142076^1947661363)] = m >>> (763707698^1330845475) + (-1897594552^332179639) & (-639648524^-180603267) + (-158453838^630348228);
						p[(1859456488^1506482853) + (-403501999^789767396)] = m >>> (-1619269137^-1099022303) + (-1660063612^1140270782) & (1181694848^2119552189) + (-1375117985^1774998685);
						p[(433378284^724488145) + (-740628916^517932426)] = m & (1822182792^87694432) + (864850358^-1512751455);
						F(p, (66361984^1870434581) + (1166677164^-688004921), r, m + c, (-1223926804^-1938724912) + (-1151932287^2144611145));
						y = r
					}
					m = y;
					if (null == m || (1975350395^718319355) + (-390062167^1213348393) != m.length % ((-2041381142^-472744009) + (1994073864^-324773397)))
						throw Error(k("1m1M1M1c"));
					y = [];
					for (var c = (2037969104^977802706) + (1336658137^-211496409), v = m.length / ((140002282^1286308004) + (-307800659^1454074207)), r = (141699850^535611341) + (1611268002^-2006389605); r < v; r++)
						for (y[r] = [], p = (-1332366250^-866390395) + (-1966267853^167544606); (2007979427^695703793) + (-601058320^2097914142) > p; p++)
							y[r][p] = m[c++];
					v = [];
					F(e, (711259511^449983994) + (1310009187^-2124670960), v, (-1258806040^-1529308664) + (-658790989^929358995), (802884204^1679147276) + (-140158358^1133801166));
					for (var u = y.length, e = (-417247976^-705330063) + (590898758^-300724015); e < u; e++) {
						var z,
						w,
						N = y[e];
						if (null == N)
							w = null;
						else {
							for (var ba = t((1618945363^1792680915) + (668388705^-762563528)), m = [], ca = N.length, c = (-190881435^-1201924679) + (-846300694^2125656782); c < ca; c++)
								m.push(da(N[c], ba++));
							w = m
						}
						var O,
						m = w;
						if (null == m)
							O = null;
						else {
							for (var ea = t((1999643442^449242729) + (1594705392^-855343315)), c = [], fa = m.length, r = (544890851^1451706578) + (293862301^-1736371374); r < fa; r++)
								c.push(G(m[r], ea--));
							O = c
						}
						var ga = P(O, (1942336381^239978506) + (814403227^-1292023091));
						z = P(ga, (-25459033^-919609492) + (271568030^-662410590));
						var Q = M(z, B),
						H,
						m = Q,
						c = q;
						if (null == m)
							H = null;
						else if (null == c)
							H = m;
						else {
							for (var r = [], C = c.length, p = (-916668707^-732014185) + (1708710818^-2027568364), D = m.length; p < D; p++)
								r[p] = t(m[p] + c[p % C]);
							H = r
						}
						var Q = M(H, q),
						I = W(Q),
						I = W(I);
						F(I, (-2023170950^-1791125252) + (-1341978069^1571402065), v, ((-1099248196^-1028520619) + (1071084354^-1126153195)) * e + ((-1330765500^-619022255) + (1473931262^-1013858031)), (234019070^592520219) + (-1678837518^1253243817));
						q = I
					}
					var A,
					E = v.length;
					if (null == v || (-116149294^-1453578699) + (-374179940^1174543749) > E)
						A = new String(h(""));
					else {
						u = [];
						for (z = (769044734^1835413779) + (1609728875^-524419720); z < E; z++)
							u.push(ha(v[z]));
						A = u.join(k(""))
					}
					d = A
				}
			} catch (J) {
				d = R({
						ec : n("1I"),
						em : J.message
					}),
				a = !((1925969782^761226374) + (-1521854466^86064111))
			}
			S(l("2oc12cc1c12J2n202J22Ixc3cJcJcJ"), d + g("1o") + b, a, b);
			S(h("cn9J3c3m3D9p929x3o3Icn"), (-1926340910^-858979448) + (1683908839^-633157032), a, b);
			window[l("319c32c29J9x9c9n3c32")](K, (1661975233^481543669) + (-454611183^1689854653))
		}
		var Z = window[h("9p9n919m329J9n90")].host,
		q = window[g("929n913c9x9c9032")],
		u = window[l("909m399J939m329n3I")],
		A = function (a, e) {
			if ((2072022071^1744314038) + (-2112011548^1637494683) >= a)
				return [(1188971465^1325674184) + (-639238220^801140043)];
			for (var d = [], b = (-1470592230^-298449689) + (-2118136805^942586904); b < a; b++)
				d.push(e);
			return d
		},
		E = function (a, e, d, b) {
			a = h("") + a;
			if (a.length > d)
				throw Error(k("1m1m1m1m"));
			if (a.length == d)
				return a;
			var c = [];
			e || c.push(a);
			for (var f = a.length; f < d; f++)
				c.push(b);
			e && c.push(a);
			return c.join(g(""))
		},
		J = function (a, e) {
			if ((162574606^2021126398) + (-1689796938^360644774) > a || (-1508959065^-1268319475) + (-513114483^217868013) <= a)
				throw Error(g("1m1m1m1M"));
			for (var d = A(e, k("1M")), b = n("") + a, c = (-633236978^-10222332) + (504870439^-993141039), f = (-1951321106^-1407226925) + (521763962^-951526471); c < d.length && f < b.length; f++)
				n("I0") != b.charAt(f) && (d[c++] = b.charAt(f));
			return parseInt(d.join(g("")))
		},
		C = function (a) {
			var e,
			d,
			b,
			c,
			f;
			e = a.length & (-995340326^-1443424374) + (1683836124^-151393425);
			d = a.length - e;
			b = (-1096907036^-2070641184) + (-856984082^152996085);
			for (f = (-306767e3^-540261865) + (-619777947^378164964); f < d; )
				c = a.charCodeAt(f) & (1706323486^1008175080) + (-1752598647^836067456) | (a.charCodeAt(++f) & (369095635^1822520820) + (-991453222^1111942402)) << (-1692750067^-628920490) + (724887897^-1789733132) | (a.charCodeAt(++f) & (-414318462^-799985601) + (-1214527156^2138773774)) << (247717432^78311331) + (2120319808^-1946727115) | (a.charCodeAt(++f) & (-528397863^-354165784) + (410907721^-304047481)) << (-1319508738^-1586603891) + (-820378547^550651880), ++f, c = 3432918353 * (c & (-813426502^-1268044115) + (-975783086^1103590074)) + ((3432918353 * (c >>> (1683969786^1166387642) + (-1112668205^1670055683)) & (783494488^158787869) + (-321890614^887844208)) << (339292621^1158218719) + (-1257919505^466249233)) & 4294967295, c = c << (1858906058^685189885) + (-903241700^1942868676) | c >>> (287193025^1582961507) + (1524322915^-362772212), c = ((-1575860540^-279730102) + (1976469535^-1148465382)) * (c & (-800332285^-781325776) + (1350899218^-1369446946)) + ((((-1590327587^-277086367) + (-984443218^141176185)) * (c >>> (1744942817^105514993) + (-593474883^1293157821)) & (904246137^740353923) + (-1366320759^1219768972)) << (-1876316886^-198046289) + (905738955^-1374149312)) & 4294967295, b ^= c, b = b << (-260703996^-157083232) + (-931634375^827423824) | b >>> (-701841989^-1561229848) + (2040301197^-222805683), b = ((-522512605^-1301207544) + (1266774714^-422265760)) * (b & (385396895^848038569) + (-1083256276^1692571621)) + ((((-884721053^-1082002630) + (-2108150426^157424586)) * (b >>> (-935221138^-169044762) + (-1780061109^1471459267)) & (1955966197^1425555769) + (-2013494532^1483706575)) << (1358575462^1645092626) + (684780411^-438616857)) & 4294967295, b = (b & (1218338521^793819369) + (-1900227165^378457196)) + ((-620859988^-528137054) + (1689003231^-1591122295)) + (((b >>> (-1227401789^-261061706) + (-47596317^1148294520)) + ((335133579^2065820673) + (-2067214506^333463964)) & (1502544003^540722599) + (372587532^-1870788905)) << (1283290972^2027027625) + (2134713106^-1267837175));
			c = (-489495544^-2074521827) + (-1442046454^863521505);
			switch (e) {
			case (-1008592589^-731235055) + (1568314864^-1257419247):
				c ^= (a.charCodeAt(f + ((-1988889092^-1981749095) + (301110933^-291605496))) & (-1156292323^-1333996914) + (-1553533095^1475459637)) << (-183110279^-510506772) + (-2104532254^1777803417);
			case (-1394741366^-1879769146) + (-1280831991^1870586303):
				c ^= (a.charCodeAt(f + ((916550410^838093415) + (58188200^-69392580))) & (2092972976^1287287027) + (331192077^-600300879)) << (-941586150^-119513518) + (-306681874^759648046);
			case (1472503826^171768346) + (-1082317758^494567867):
				c ^= a.charCodeAt(f) & (1946813904^513214872) + (-1255301894^542074957),
				c = 3432918353 * (c & (971845801^1181552503) + (166349245^-1989506660)) + ((3432918353 * (c >>> (-1679969878^-523705715) + (-1613783450^455422607)) & (1220018752^1334488507) + (405274083^-521556505)) << (-328866022^-1392814894) + (-976485927^2058177937)) & 4294967295,
				c = c << (320082978^510896597) + (-1993747683^2075234565) | c >>> (1723250192^1330862160) + (1172764546^-1812142509),
				b ^= ((870061369^341705793) + (-1129366728^1219108643)) * (c & (1994158495^1008786915) + (569403691^-1795933528)) + ((((-1033594985^-247132403) + (882985446^-591080161)) * (c >>> (657442816^569668112) + (-1186168881^1080572367)) & (296310868^530464093) + (1564206382^-1393393704)) << (1814539133^2123533635) + (831779215^-589748131)) & 4294967295
			}
			b ^= a.length;
			b ^= b >>> (2038002942^1603993988) + (45859060^-609858974);
			b = 2246822507 * (b & (1557598207^554811004) + (472948053^-1643457751)) + ((2246822507 * (b >>> (-1406890365^-1488661241) + (1871589089^-1693349267)) & (-1432203389^-464227919) + (135013102^-1190730973)) << (-1768122999^-124309694) + (-425521525^2002209742)) & 4294967295;
			b ^= b >>> (1499957776^522057247) + (323918609^-1429530385);
			b = 3266489909 * (b & (-1461524821^-1332178085) + (-1189493086^1587498157)) + ((3266489909 * (b >>> (-1668421439^-1611964060) + (1773912194^-1792887063)) & (-1645104722^-1860249080) + (-2065385311^2012556536)) << (-901331761^-1875795691) + (-1885033715^707539259)) & 4294967295;
			a = (b^b >>> (-1588205787^-1977835195) + (58178414^-675216674)) >>> (-1238855983^-1306246957) + (381360191^-314037823);
			e = [];
			e.push(a);
			try {
				var h;
				d = a + k("");
				for (c = b = f = (1353393891^1484727773) + (351480203^-472328887); c < d.length; c++)
					try {
						var q = parseInt(d.charAt(c) + n(""));
						f = q || (-539286457^-265557301) + (-1534363889^1954825851) === q ? f + q : f + ((1507201600^2100105366) + (1379710537^-1992799390));
						b++
					} catch (t) {
						f += (1063156995^936448460) + (-1087658683^1213937271),
						b++
					}
				h = J(((-537594727^-1422590860) + (-745386385^1487780219)) * f / ((982591015^1091671132) + (861399237^-1222073024) == b ? (-552151562^-1809022344) + (1958615551^-1065635444) : b), (308807988^2027158225) + (312867964^-2015235999));
				for (var u, p = Math.floor(h / Math.pow((86369216^1898953462) + (-55510618^2001035122), (-1498684101^-1900187716) + (-711141317^41266497))), q = a + g(""), m = c = b = f = d = (-1389419032^-462710041) + (1244795613^-58109396); m < q.length; m++)
					try {
						var v = parseInt(q.charAt(m) + k(""));
						v || (1638027880^301435048) + (-1025453302^1296758346) === v ? v < p ? (f++, d += v) : (c++, b += v) : (c++, b += p)
					} catch (w) {
						c++,
						b += p
					}
				u = J(((-183536374^-1937683293) + (181854387^-1935202581)) * b / ((891136681^101934226) + (-1263249597^2017814150) == c ? (-729151957^-2058032454) + (-1792635883^990355301) : c) - ((1686391511^1715905266) + (1923103386^-1885524666)) * d / ((-1955526963^-1052562761) + (1632902198^-728117328) == f ? (-320011226^-116596020) + (660758977^-847480618) : f), (103543928^1202359606) + (-91620197^1157069359));
				e.push(E(h, !((-1769329928^-1752246218) + (-1535030683^1517963095)), (-1622407401^-2076558610) + (1719151682^-2098074037), l("1M")));
				e.push(E(u, !((-526591239^-1411033617) + (-793855664^1680394682)), (1347388776^160740508) + (-653213440^2134118158), l("1M")))
			} catch (z) {
				e = [],
				e.push(a),
				e.push(A((2015360955^670651842) + (2093226936^-589478351), g("Ix")).join(l(""))),
				e.push(A((33846686^1407117924) + (-543981368^1907810496), g("Ix")).join(l("")))
			}
			return e.join(k(""))
		},
		aa = function (a) {
			var e = Array.prototype.forEach,
			d = Array.prototype.map,
			b = function (a, b, c) {
				if (null !== a)
					if (e && a.forEach === e)
						a.forEach(b, c);
					else if (a.length === +a.length)
						for (var d = (1785510099^1611182069) + (1228291529^-1129458413), f = a.length; d < f && b.call(c, a[d], d, a) !== {}; d++);
					else
						for (d in a)
							if (a.hasOwnProperty(d) && b.call(c, a[d], d, a) === {})
								break
			},
			c = function (a, c, e) {
				var f = [];
				if (null == a)
					return f;
				if (d && a.map === d)
					return a.map(c, e);
				b(a, function (a, b, d) {
					f[f.length] = c.call(e, a, b, d)
				});
				return f
			},
			f = {
				bFe : C,
				bFg : !((-2123117812^-183933065) + (640652637^-1381316904)),
				bFh : !((1952519850^1857786153) + (-13941360^437140973)),
				bFi : !((-1459179905^-1797781665) + (55083336^-1050028120))
			};
			h("993c9091329J9n90") == typeof a && (f.bFe = a);
			var r = function () {
				try {
					return !!window[h("9p9n919m9pc1329n3I9m939c")]
				} catch (a) {
					return !((798538447^372657983) + (488331622^-615885962))
				}
			},
			t = function () {
				try {
					return !!window[l("319c31319J9n90c1329n3I9m939c")]
				} catch (a) {
					return !((607145191^1378992366) + (-193146399^2105713174))
				}
			},
			w = function () {
				return window[g("2m91329J399ccD2n9I9o9c9132")] ? c(h("2m913I9ncM2229I0cM2229162m929n929II0c1323I9c9m9x162m93219n90323I9n9pI02m93219n90323I9n9p16229c399m9pc9cIcD21323I9pI0229c399m9pc9cIcD21323I9pI01m162x9m913I9n9x9c929J9m299p9m319DcM9m3M9c3II02x9m913I9n9x9c929J9m299p9m319DcM9m3M9c3I162x313D9x9p1II0222n2x229n913c9x9c9032162x313D9x9p1II0cD2x2p2Dc2c2cM16cM2229I0cM929921323I9p16cm3c9J9196c29J9x9cI0cm3c9J9196c29J9x9c16cm3c9J9196c29J9x9c219D9c91962n9I9o9c9132I0cm3c9J9196c29J9x9c219D9c9196I01m163I9x9n913DI0cI9c9m9pcM9p9m3J9c3IIM231IIM219n90323I9n9p163I9x9n913DI0cI9c9m9pcM9p9m3J9c3IIM231IIM219n90323I9n9pI01m16cI9c9m9pcM9p9m3J9c3I16cI9c9m9pcM9p9m3J9c3II0cI9c9m9pcM9p9m3J9c3IID329xIJIM2m91329J399ccDIM219n90323I9n9pIMID111IIx9I9J32IJ16cI9c9m9pc99J929c9nI0cI9c9m9pc99J929c9nID329xIJIM2m91329J399ccDIM219n90323I9n9pIMID111IIx9I9J32IJ163I9x9n913DI0cI9c9m9pcM9p9m3J9c3IIM231IIM219n90323I9n9p16c1913I9J3M329J9093I0229J91329J9n909m3I3J16c19D9c9p9pI0cc2J2D9c9p3M9c3I16c19D9n9196339m399c299p9m319DI0c19D9n9196339m399c299p9m319D16c1c321329pI0c1c321329p16c1963J3M9cI0229c329c91329J9n9016c2222121329pI0c2222121329p16c32xcM9p9m3J9c3II02n21cD").split(k("16")), function (a) {
					try {
						return new(window[k("2m91329J399ccD2n9I9o9c9132")])(a),
						a
					} catch (b) {
						return null
					}
				}).join(h("16")) : h("")
			},
			y = function () {
				if (!u[g("3M9p3c939J9031")])
					return h("");
				var a = [],
				b = {};
				a.push(c(u[l("3M9p3c939J9031")], function (a) {
						b[a.name] = (1270036592^546931475) + (241848991^-1698753023);
						var d = c(a, function (a) {
								return [a.type, a.suffixes].join(n("30"))
							}).join(k("Ip"));
						return [a.name, a.description, d].join(h("1o1o"))
					}, this).join(k("I2")));
				a.push(c(n("12939m9x9c162m929I9p9n9196cM9p3c939J90162m929n9I9c2c3D2x9m902121229c329c9132162m929n9I9c2c3D2x9m90229c329c9132162m9p9m339m3IIM20cM2mcM2JIM3c329J9p31162m9p9J9c929J32IMcM9p3c93Ix2J90162m9p9J3M9m3JIMc19c913c3I9J323JIM219n90323I9n9pIM11162m9p9Jc1c12n2p9n939J90IM3M9p3c939J90162m9x9m3o9n902xcM11229n33909p9n9m929c3IcM9p3c939J90162m2n2pIM2x9c929J9mIMcM9p9m3J9I9m9196IMcM9p3c939J90162m3M3Mcc3M162m3I919D9J212m22162mc923IMc19J329cc19m999c323JIM3M9p3c939J90162I9m9I3J9p9n90IMc29n9n9p2I9m3I162I9m32329p9c9p9n93IM239m9x9cIM2p9m3c90919D9c3I162I9J32219n9x9c322m939c9032162I9J32929c999c90929c3IIMcm3c9J9196c1919m90162I9p3c9cc1329m919631IM2J9031329m9p9pIM229c329c91329n3I16219m329m9p9J909m233I9n3c3MIMcc3M929m329c16219J323I9J3DIM2J212mIM219p9J9c903216219J323I9J3DIM9n909p9J909cIM3M9p3c93Ix9J9016219J323I9J3DIMcI9c919c9J399c3IIMcM9p3c93Ix9J9016219n9n339n90IMcc3M929m329c16229c9m9pcM9p3J2p9J399cIMcc3M929m329c16229c999m3c9p32IM2I3I9n33319c3IIM2D9c9p3M9c3I16229J39cDIM2I3I9n33319c3IIMcM9p3c93Ix2J9016229J39cDIMcM9p3c31IMc39c9IIMcM9p9m3J9c3I16229J39cDIMc92n22IM2D9c9p3M9c3IIMcM9p3c93Ix9J9016929n3c9I9p9cc2339J3132IMc39c9IIMcM9p3c939J9016229n33909p9n9m929c3I31IM3M9p3c939J9016929n33909p9n9m92cc3M929m329c3I169c2x3c319J91cM9p3c939J90IM222p2x19162cc120IM2p9m3c90919DIM2x9n3o9J9p9p9mIMcM9p3c939J90162cc120IMc19n909m3IIM2mcM2J162c3D9J99IM2c399c3I3J339D9c3I9c16299m919c9I9n9n96IMcM9p3c939J9016299J9p9cIM229n33909p9n9m929c3IIMcM9p3c93Ix9J9016299J9p9c2p9m9IIM3M9p3c939J9016299p3J2n3I229J9cIM239m9x9c31IMcM9p3c939J9016299n9p3DIM11IM2I3I9n33319c3IIMcM9p3c939J901629ccco2cc19D9m3I9c1623222pIM2n9I9o9c9132IMc39c9IIMcM9p3c93Ix9J90IM1m19I01M1M1623292m212cIMcM9p3c939J9016239J90939c3I1623909n9x9cIMc19D9c9p9pIM2J90329c933I9m329J9n9016239n9n939p9cIM2c9m3I329DIMcM9p3c939J9016239n9n939p9cIM2c9m3I329DIMcM9p3c93Ix9J9016239n9n939p9cIM239c9m3I31IM1MI01cI01111I01M16239n9n939p9cIMc29m9p96IM2c99999c913231IMcM9p3c939J9016239n9n939p9cIMcc3M929m329c162D9m3I9x9n903JIM299J3I9c999n3DIMcM9p3c939J90162D9m3I9x9n903JIMcM9p3c93Ix2J90162D9c3I9n9c31IMI9IM239c909c3I9m9p31IM9p9J399c162DcM229c329c9132162D329x9p1cIM9p9n919m329J9n90IM3M3I9n399J929c3I162J2cIMc29m9IIM3M9p3c939J90169J239c32329c3Ic1913I9J3M329m9I9p9ccM9p3c939J90169J2x9c319DIM3M9p3c939J9016269m313M9c3I31963JIMcM9m3131339n3I92IM2x9m909m939c3I162p9m3132cM9m3131162p9n932x9c2J90IMcM9p3c939J90IM1mI01MI01MI01J111c162p9n932x9c2J90IMcM9p3c939J90IM1mI01MI01MI01J191m162x9mIx219n90999J93I0919n9xIM3M9p3c939J90162x9J913I9n319n9932IM2n99999J919cIM1I1M1m11162x9J909J9I9m3IcM9p3c939J9016209m329J399cIM219p9J9c903216209J323I9nIMcM2229IMcM9p3c93Ix2J9016209n969J9mIMc13c9J329cIM2c909m9I9p9c3IIMcM9p3c939J9016209n3I329n90IM2J929c90329J323JIMc19m999c16903M2mcM2JIMcM9p3c939J901620cM2p9m3132cM9m31311620cMcM9p9m3J9c3Ic19D9c9p9p16903Mc29n90939I3c2m92929J9016203J3D2p9m3c90919D9c3I162n91329n319D9m3M9cIMc1323I9c9m9x9J9093IMc19c3I399J919c31162n909p9J909cIMc1329n3I9m939cIM3M9p3c93Ix9J90162n3I9I9J32IM229n33909p9n9m929c3I16cM9m90929nIMc39c9IIMcM9p3c939J9016cM9m3I9n9xI0c2c9IM3M9p9m3J9c3IIM3M9p3c939J9016cM2229IM9J90329c933I9m929nIM929nIMc39c9I269J3216cM2229IxcD219D9m90939cIMc99J9c339c3I16cM9D9n329n219c90329c3IcM9p3c939J901mI01mI01II01I16cM9J919m319m16cM9p9m3J2n90IMcM9p3c93Ix9J9016cmcm1I1M1m11IM299J3I9c999n3DIMcM9p3c939J9016cmcm229n33909p9n9m92IMcM9p3c939J9016cmcm2x9J909J222pIMcM9p3c939J9016cmcm2x3c319J9116cI9c9m9p229n33909p9n9m929c3IIMcM9p3c939J9016cI9n9I9p9n3DIM2p9m3c90919D9c3IIMcM9p3c939J9016cI9n91962x9c9p32IMcc3M929m329c16c19m999c3IIMcc3M929m329c16c19m999cc19c9m3I919D16c1913I9J3M329J9093I0229J91329J9n909m3I3J16c19c99219p9J9c9032IMcM9p3c939J9016c19D9c9p9pI0cc2J2D9c9p3M9c3I16c19J9p399c3I9p9J939D32IMcM9p3c93Ix2J9016c19J9x3M9p9cIMcM9m313116c1963J3M9cIMc39c9IIMcM9p3c939J9016c13c9x9m323I9mcM2229IM2I3I9n33319c3IIMcM9p3c939J9016c13J9x9m90329c91IMcM262JIM219p9J9c903216c29c90919c9032IM29c220IM3M9p3c93Ix9J9016c29D3c90929c3IIM229m3M21323I9pIM20cM2mcM2JIMcM9p3c939J9016c29n3I919D2D9c9p3M9c3I16cc909J323JIMcM9p9m3J9c3I16cc3M9p9m3JIMcM2116c9229n33909p9n9m929c3I16c99c9c329p9cIMc2c9IM219n3I9c16c92p21IM2x3c9p329J9x9c929J9mIMcM9p3c939J9016c39c9IIM219n9x3M9n909c90323116c39c9I269J32Ix9J90329c933I9J9c3I329cIMcM222916c32c2Ico2c20IM2I3I9n33319c3IIM2c3D329c90319J9n9016c39n9p993I9m9xIM2x9m329D9c9x9m329J919m16c39n3I92219m3M323c3I9ccD16c3cM2JIM229c329c91329n3IIM1mI01216cJ9m90929c3DIM2x9c929J9mIMcM9p3c939J9016cJ9m90929c3DIMcM2229IMc99J9c339c3I16cJ9n3cc23c9I9cIMcM9p3c93Ix9J90163o9m969n").split(g("16")), function (a) {
						if (b[a])
							return l("");
						a = u[h("3M9p3c939J9031")][a];
						if (!a)
							return k("");
						var d = c(a, function (a) {
								return [a.type, a.suffixes].join(k("30"))
							}).join(l("Ip"));
						return [a.name, a.description, d].join(g("1o1o"))
					}, this).join(g("16")));
				return a.join(g("16"))
			},
			p = function () {
				var a = q.createElement(h("919m90399m31")),
				b = a[h("939c32219n90329c3D32")](h("1I92"));
				b.textBaseline = k("329n3M");
				b.font = n("131M3M3DIMI32m3I9J9m9pI3");
				b.textBaseline = h("9m9p3M9D9m9I9c329J91");
				b.fillStyle = g("I199191M");
				b.fillRect((-880258800^-1552329627) + (408175283^-1889879621), (2021800238^1563364961) + (2086162157^-1509259681), (-1763239775^-943514994) + (1885935055^-558699584), (-470637936^-893879647) + (1988361528^-1607017765));
				b.fillStyle = g("I11M191J");
				b.fillText(g("9x3321IM90969I9m999o9n3I92IM3M9D31939p3JIM9c3D3932IM3o3m9J3cIpIM0m6xoMIM323M9D3132In1oIn3c9D9I93329J91I09x9nIn9p9c39399m"), (-385966307^-1266138413) + (2065230767^-661534309), (-1144630135^-561394360) + (-1549054271^958081167));
				b.fillStyle = g("3I939I9mID1m1M1IIpIM1I1M12IpIM1MIpIM1MI013IJ");
				b.fillText(g("9x3321IM90969I9m999o9n3I92IM3M9D31939p3JIM9c3D3932IM3o3m9J3cIpIM0m6xoMIM323M9D3132In1oIn3c9D9I93329J91I09x9nIn9p9c39399m"), (-653291053^-1217258718) + (1113435662^-740304099), (1367629315^1272790148) + (1509882444^-1135056954));
				return a[h("329n229m329mcccI2p")]()
			},
			m = function () {
				var a = q.createElement(g("929J39")),
				b = [],
				c = h("2m91329J399c2I9n3I929c3IIM2m91329J399c219m3M329J9n90IM2m3M3Mc39n3I96313M9m919cIM2I9m9196933I9n3c9092IM2I3c32329n90299m919cIM2I3c32329n902D9J939D9p9J939D32IM2I3c32329n90c19D9m929n33IM2I3c32329n90c29c3D32IM219m3M329J9n90c29c3D32IM233I9m3Jc29c3D32IM2D9J939D9p9J939D32IM2D9J939D9p9J939D32c29c3D32IM2J909m91329J399c2I9n3I929c3IIM2J909m91329J399c219m3M329J9n90IM2J909m91329J399c219m3M329J9n90c29c3D32IM2J90999n2I9m9196933I9n3c9092IM2J90999nc29c3D32IM2x9c903cIM2x9c903cc29c3D32IMc1913I9n9p9p9I9m3IIMc29D3I9c9c22229m3I96c19D9m929n33IMc29D3I9c9c22299m919cIMc29D3I9c9c222D9J939D9p9J939D32IMc29D3I9c9c222p9J939D32c19D9m929n33IMc29D3I9c9c22c19D9m929n33IMc39J90929n33IMc39J90929n33293I9m9x9cIMc39J90929n33c29c3D32").split(n("IM"));
				if (!window[k("939c32219n9x3M3c329c92c1323J9p9c")])
					return b.join(g(""));
				for (var d = (-1231209509^-1591932031) + (-1641297840^1985218550); d < c.length; d++)
					q.body.appendChild(a), a.style.color = c[d], b.push(c[d]), b.push(window[h("939c32219n9x3M3c329c92c1323J9p9c")](a).getPropertyValue(k("919n9p9n3I"))), q.body.removeChild(a);
				return b.join(n("1o"))
			},
			v = function (a, b) {
				var c = a.createBuffer();
				a.bindBuffer(a.ARRAY_BUFFER, c);
				var d = new Float32Array([ - .2,  - .9, (1469631559^2055475082) + (-16038169^770210516), .4,  - .26, (-103881598^-1667150332) + (-1478359649^1030901989), (-1621610662^-691052996) + (-188798276^1121428518), .732134444, (-934972825^-418105828) + (562541914^-248967457)]);
				a.bufferData(a.ARRAY_BUFFER, d, a.STATIC_DRAW);
				c.itemSize = (-360236342^-836590572) + (-57720444^668278945);
				c.numItems = (-688728134^-1342470171) + (473845971^-1698103433);
				var d = a.createProgram(),
				e = a.createShader(a.VERTEX_SHADER);
				a.shaderSource(e, g("9m32323I9J9I3c329cIM399c911IIM9m32323Ic99c3I329c3D16IM399m3I3J9J9093IM399c911IIM399m3I3J9J90c29c3D219n9n3I929J909m329c16IM3c909J999n3I9xIM399c911IIM3c909J999n3I9x2n9999319c3216IM399n9J92IM9x9m9J90IDIJIM36IMIMIM399m3I3J9J90c29c3D219n9n3I929J909m329cIM1xIM9m32323Ic99c3I329c3DIMI6IM3c909J999n3I9x2n9999319c3216IMIMIM939pcncM9n319J329J9n90IM1xIM399c9112ID9m32323Ic99c3I329c3DIpIM1MIpIM1mIJ16IM3x"));
				a.compileShader(e);
				var f = a.createShader(a.FRAGMENT_SHADER);
				return a.shaderSource(f, l("3M3I9c919J319J9n90IM9x9c929J3c9x3MIM999p9n9m3216IM399m3I3J9J9093IM399c911IIM399m3I3J9J90c29c3D219n9n3I929J909m329c16IM399n9J92IM9x9m9J90IDIJIM36IMIMIM939pcn293I9m93219n9p9n3IIM1xIM399c9112ID399m3I3J9J90c29c3D219n9n3I929J909m329cIpIM1MIpIM1mIJ16IM3x")),
				a.compileShader(f),
				a.attachShader(d, e),
				a.attachShader(d, f),
				a.linkProgram(d),
				a.useProgram(d),
				d.vertexPosAttrib = a.getAttribLocation(d, h("9m32323Ic99c3I329c3D")),
				d.offsetUniform = a.getUniformLocation(d, h("3c909J999n3I9x2n9999319c32")),
				a.enableVertexAttribArray(d.vertexPosArray),
				a.vertexAttribPointer(d.vertexPosAttrib, c.itemSize, a.FLOAT, !((2006802813^1517909371) + (840609725^-536787898)), (1219986388^1708739407) + (-1201390490^1794444035), (-1626230401^-1749958402) + (1460865059^-1605597604)),
				a.uniform2f(d.offsetUniform, (-965874649^-1157642082) + (-946727310^1157614906), (-444834034^-1435326268) + (1654620736^-764507529)),
				a.drawArrays(a.TRIANGLE_STRIP, (-143344006^-1420735231) + (1387128959^-243800838), c.numItems),
				C(b[h("329n229m329mcccI2p")]())
			},
			x = function () {
				var a = null,
				b = q.createElement(h("919m90399m31")),
				d = [];
				try {
					a = b[h("939c32219n90329c3D32")](l("339c9I939p")) || b[g("939c32219n90329c3D32")](h("9c3D3M9c3I9J9x9c90329m9pIx339c9I939p"))
				} catch (c) {}

				if (!a)
					return d;
				try {
					d.push(a.getSupportedExtensions())
				} catch (e) {}

				try {
					d.push(v(a, b))
				} catch (f) {}

				return d.join(k("16"))
			},
			z = function () {
				var a = [l("9x9n909n313M9m919c"), n("319m9031Ix319c3I9J99"), g("319c3I9J99")],
				b = [],
				d = q.body,
				c = q.createElement(n("313M9m90"));
				c.style.fontSize = h("131I3M3D");
				c.style.visibility = h("9D9J92929c90");
				c.innerHTML = k("3333339x9x9x9x9x9x9x9x9x9x9p9p9J");
				for (var e = function (a) {
					var b = {};
					return c.style.fontFamily = a,
					d.appendChild(c),
					b.height = c.offsetHeight,
					b.width = c.offsetWidth,
					d.removeChild(c),
					b
				}, f = (-1758178318^-1337651594) + (-469278086^1015660550); f < a.length; f++)
					b[f] = e(a[f]);
				return function (d) {
					for (var c = (-439354462^-1614197325) + (1147054287^-1045962464); c < b.length; c++) {
						var f = e(d + h("Ip") + a[c]),
						g = b[c];
						if (f.height !== g.height || f.width !== g.width)
							return !((-1435612171^-2117455178) + (409757650^-868753041))
					}
					return !((-1917373501^-1621972726) + (127975534^-356866730))
				}
			},
			A = function () {
				for (var a = k("2m9I9m929JIM2xc2IM219n90929c90319c92IM2p9J939D32162m929n9I9cIM299m9093319n9093IMc13292162m929n9I9cIM2D9c9I3I9c33162m929n9I9cIM2x9J9093IMc13292162m939c90913JIM292I162m3I9m9I162m3I9m9I9J91IMc23J3M9c319c32329J9093162m3I9J9m9pIM2I9p9m9196162I9m329m9093162I9m3c9D9m3c31IM1J11162I9c9p9pIM2xc2162I9J3231323I9c9m9xIMc99c3I9mIMc19c3I9J99162I9n929n909JIM2xc2162I9n9n969x9m90IM2n9p92IMc1323J9p9c162I3I9m93939m929n919J9n162I3I9n9m92339m3J16219m9p9J9I3I9J16219m9p9J999n3I909J9m90IM292I16219m31329c9p9p9m3I16219m313c9m9p16219c90329m3c3I16219c90323c3I3JIM239n329D9J9116219D9m9p96923c31329c3I16219n9p9n90909mIM2xc216219n3M3M9c3I3M9p9m329cIM239n329D9J91IM2p9J939D3216229c9o9mc93cIM2p2321IMc19m9031IM2x9n909n16229c31929c9x9n909m162229269m9JIxc12I16229n323c9x162c90933I9m399c3I31IM2xc2162c3I9m31IM2I9n9p92IM2Jc221162c3c3I9n31329J9p9c16299m9093c19n909316299n3I329c16293I9m90969p9J90IM239n329D9J91IM2D9c9m393J16293I9c90919DIMc1913I9J3M32IM2xc216239m9I3I9J9n9p9m16239J939J16239J319D9m16239n3c923JIM2n9p92IMc1323J9p9c16233c9p9J9x16233c9093c19c9n162D9m9c32329c9031919D339c9J9p9c3I162D9m3I3I9J9093329n90162D9J3I9m939J909nIMc19m9031IM232I162J9x3M9m9132162J90999n3I9x9m9pIMcI9n9x9m9016269m9131322n909c16269J909nIM2xc216269n3o3c969mIM239n329D9J91IMcM3I1920162p9n9D9J32IM233c9o9m3I9m329J162p9n9x9m162p3c919J929mIM2I3I9J939D32162p3c919J929mIM299m3D162x9m93909c329n162x9m9p933c90IM239n329D9J91162x9m323c3I9mIM2xc2IMc1913I9J3M32IM219m3M9J329m9p31162x9c909p9n162x9J90932p9JccIx2c3D322I162x9n9n9p2I9n3I9m90162xc1IMcM2x9J90919D9n162xc1IMcI9c999c3I9c90919cIMc19m9031IMc19c3I9J9916209c3331IM239n329D9J91IM2xc216209J9m939m3I9mIMc19n9p9J9216203J9m9p9m16cM9m9p9m919cIMc1913I9J3M32IM2xc216cM9m3M3J3I3c3116cM9c3I3M9c323c9m16cM9p9m3J9I9J9p9p16cM2x9J90932p9Jcc16cI9m919D9m909m16cI9n9196339c9p9p16c19m339m31929c9c16c1913I9J3M32IM2xc2IM2I9n9p9216c19c939n9cIMcM3I9J903216c19D9n33919m3I92IM239n329D9J9116c19J9x2D9c9J16c1909m3MIM2Jc22116c29p33932x9n909n16c233IM219c90IM2xc2IM219n90929c90319c92IM2c3D323I9mIM2I9n9p9216cc9I3c90323c16cc9x3M3c319D16cc909J399c3I3116cc329n3M9J9m16c99p9m929J9x9J3IIMc1913I9J3M3216c39J929cIM2p9m329J901602666n0co0D6160cDxD009J9D3026Dox0co0D6160cDxD009J9D302666n0co0D6160cDxD009J9D30co0D6026xJ1160cDxD009J9D30c6xoJ026oJm160cDxD009J9D309J96M0JoxDn160cDxD009J9D309oc63026xJ1160cDxD009J9D303JMoc03DnDM160cDxD009J9D30366D90J66Jm160cDxD009J9D30DomDp09oc63160cDxD009J9D30JJo69026Jo9160co0D6026xJ1160c6J6p0cJpD9160c60o00D6xon0JJ6Dc0J66Jm1609J96M0co0D6026xJ11609J96J09oxo10co3Jo026xJ11609J96J09oxo10DDDJI026xJ11609oc63026xJ1160JJo69026Jo9160J66Jm026xJ11609J96M0366D909JDD0026xJ1160366D909JDD0026xJ11609oMD309oc63026xJ11602666n0co0D6cn232I1I111m1I1609oc63026xJ1cn232I1I111m1I160c60o00D6xon09oxo10J66Jm026xJ1160cDxD009J9D30J66Jm026xJ116026D6x0J66JmIMcM3I9n16026D6x0co0D6IMcM3I9n160DD66J09J0Jp026D6x026Dox0J66Jm160DD66J09J0Jp026D6x0366D90co0D6").split(h("16")), b = [], c = (-1197169454^-168811878) + (-2004385278^976026554); c < a.length; c++) {
					var d = a[c];
					z()(d) && b.push(d)
				}
				return b.join(n("16"))
			};
			this.get = function () {
				var a = [];
				a.push(t());
				a.push(r());
				a.push(!!window[n("9J90929c3D9c92222I")]);
				q.body ? a.push(typeof q.body[g("9m92922I9c9D9m399J9n3I")]) : a.push(l("3c90929c999J909c92"));
				a.push(typeof window[h("9n3M9c90229m329m9I9m319c")]);
				a.push(u[h("913M3c219p9m3131")]);
				a.push(u[k("3M9p9m32999n3I9x")]);
				var b;
				if (b = f.bFh)
					b = q.createElement(n("919m90399m31")), b = !(!b[l("939c32219n90329c3D32")] || !b[k("939c32219n90329c3D32")](h("1I92")));
				b && (a.push(p()), a.push(x()));
				a.push(m());
				b = [];
				b.push(A());
				b.push(u[k("3c319c3I2m939c9032")]);
				b.push(u[h("9p9m90933c9m939c")]);
				b.push(window[l("31913I9c9c90")][h("919n9p9n3I229c3M329D")]);
				if (f.bFg) {
					var c = [window[h("31913I9c9c90")].height, window[l("31913I9c9c90")].width];
					l("3c90929c999J909c92") !== typeof c && b.push(c.join(k("3D")))
				}
				b.push((new Date)[l("939c32c29J9x9c3o9n909c2n9999319c32")]());
				b.push(u[n("929n209n32c23I9m9196")]);
				b.push(window[h("2m91329J399ccD2n9I9o9c9132")] && f.bFi ? w() : y());
				c = [];
				f.bFe ? (c.push(f.bFe(a.join(h("I1I1I1")))), c.push(f.bFe(b.join(n("I1I1I1"))))) : (c.push(C(a.join(k("I1I1I1")))), c.push(C(b.join(n("I1I1I1")))));
				return c
			}
		},
		t = function (a) {
			if ((1395141557^84954685) + (-65923695^1440058473) > a)
				return t((1388157449^1001577873) + (-1638052676^145618004) - ((2030137295^952036148) + (-1496885654^411512047) - a));
			if ((517867339^2131356489) + (-781718521^1330642809) <= a && (1873560152^740280379) + (-1974696946^906031634) >= a)
				return a;
			if ((-777237349^-1024460297) + (694937373^-975721458) < a)
				return t((-725930291^-1133673719) + (192752657^-1672184406) + a - ((818699888^500590583) + (-970859366^348396130)));
			throw Error(g("1m1M1M1m"))
		},
		da = function (a, e) {
			return t(a + e)
		},
		G = function (a, e) {
			a = t(a);
			e = t(e);
			return t(a^e)
		},
		M = function (a, e) {
			if (null == a || null == e || a.length != e.length)
				return a;
			for (var d = [], b = (391063462^923887720) + (-612707748^81486446), c = a.length; b < c; b++)
				d[b] = G(a[b], e[b]);
			return d
		},
		X = g("1M1m1I11121c19131D1J9m9I91929c99").split(h("")),
		ha = function (a) {
			var e = [];
			e.push(X[a >>> (572673052^1426640727) + (1230816381^-1047938876) & (655144194^2113758198) + (-30042350^1530641929)]);
			e.push(X[a & (-144784840^-1611687676) + (1299480364^-633676801)]);
			return e.join(l(""))
		},
		ia = function (a) {
			if (null == a || (-2039759924^-1447528796) + (-901594242^443478502) == a.length)
				return [];
			a = new String(a);
			for (var e = [], d = a.length / ((1165046813^1058088127) + (475488471^-1714909257)), b = (-1636867172^-1059037034) + (-1038529654^1667872636), c = (1371507897^1172232769) + (1920157657^-1712460079); c < d; c++) {
				var f = parseInt(a.charAt(b++), (-925824557^-1049066495) + (1009303278^-897659696)) << (1162406888^1308889438) + (776374566^-621441944),
				g = parseInt(a.charAt(b++), (-1355588902^-914226702) + (1042231711^-1487825545));
				e[c] = t(f + g)
			}
			return e
		},
		U = function (a) {
			if (null == a || void((563947122^2002673812) + (1390860732^-69574490)) == a)
				return a;
			a = encodeURIComponent(a);
			for (var e = [], d = a.length, b = (-404839717^-592531227) + (757298763^-374563959); b < d; b++)
				if (l("Ic") == a.charAt(b))
					if (b + ((-716519289^-335602327) + (823614578^-262310298)) < d)
						e.push(ia(a.charAt(++b) + g("") + a.charAt(++b))[(-1097052512^-570391335) + (1274467619^-728375132)]);
					else
						throw Error(g("1m1M1M1J"));
				else
					e.push(a.charCodeAt(b));
			return e
		},
		F = function (a, e, d, b, c) {
			if (null == a || (-2026582115^-1254045934) + (-1160364575^2002635408) == a.length)
				return d;
			if (null == d)
				throw Error(g("1m1M1M12"));
			if (a.length < c)
				throw Error(k("1m1M1M11"));
			for (var f = (1883226690^1679670461) + (-1671027171^2008786716); f < c; f++)
				d[b + f] = a[e + f];
			return d
		},
		V = function (a) {
			for (var e = [], d = (-470271239^-1256049220) + (-1064403149^1772851080); d < a; d++)
				e[d] = (-741535291^-1919678763) + (1516394881^-70995599);
			return e
		},
		ja = [(-93552098^-75212683) + (-1382705336^1401074228), (-1703801449^-574417329) + (-1040049843^2051865914), (394903307^761675227) + (-2088544^988831099), (1315647032^1285676797) + (542087031^-579167839), (-463994884^-1399671723) + (43556765^-1247663217), (1792659108^1925176027) + (-610449435^1006939354), (1405664354^1201632763) + (1269443221^-1610474278), (1363042083^2069370361) + (-44594596^684605079), (-1704972034^-164094244) + (-157574611^1698449423), (-1328459412^-1409708139) + (1322864815^-1441893979), (-345405935^-1895557026) + (-149815691^1820565380), (1970687652^276286712) + (-2146776719^452244528), (1301587082^505264824) + (1113941048^-300710376), (58508321^624207799) + (95826086^-603869982), (879903573^1123571181) + (524308136^-1774868503), (519885989^1219759682) + (1503663827^-266915292), (-329465069^-1877592456) + (1892168927^-209895912), (1591016649^1216295448) + (1197894716^-1372431168), (-678367149^-420360597) + (863306281^-34881506), (1632518916^839987565) + (1734360411^-876564452), (335801373^1468942478) + (965093529^-2047577115), (940273349^1928055676) + (1290975981^-101850954), (-1770235163^-1637501236) + (-1310298638^1174436263), (-1362234482^-170476966) + (-501550933^1191069199), (-865913053^-629723450) + (550066616^-920469617), (818646274^647750478) + (-1842290850^2074037888), (1724657028^1708417953) + (973364185^-958141776), (-1366504303^-1725680619) + (2100784586^-1251972571), (928445381^675509578) + (-27376604^515128578), (-2017584742^-96660868) + (844725550^-1339717190), (1803530629^924892091) + (1656767434^-1050626450), (1059535894^1791533232) + (651317812^-1933430387), (945741484^678308074) + (1093782247^-1359036166), (-1863110778^-1244138467) + (-907955328^322606855), (37687065^1137297839) + (-1076448658^31427553), (443927041^419549422) + (1408603213^-1350668006), (1930180732^352423574) + (-1801170140^223746626), (-1020360554^-840858599) + (1499673186^-1470905929), (1517285173^490899156) + (988142227^-2110305119), (-1644251871^-1757333255) + (-2104478061^2010137655), (607674573^189371386) + (1620403071^-1340379143), (897308632^346542172) + (-1503010921^2018125809), (-451771717^-1667407899) + (-1658417e3^458666617), (1766321222^1775425036) + (-1586217437^1579087874), (-1608870863^-68566837) + (825568815^-1791392433), (787010227^455589430) + (1357481726^-1697049224), (1070426559^1797513761) + (481445978^-1214038976), (1791234429^1793187549) + (207393971^-209274044), (-48845623^-265022535) + (-80622788^166497131), (439980014^696892987) + (1827864468^-1598213733), (-1993920500^-1682875738) + (695441085^-1004928002), (-1757197531^-1079546902) + (246325423^-642416649), (-1271129680^-113235840) + (-1618644205^755416093), (871777181^1337591428) + (-931969077^1270938837), (1060562119^708552727) + (1944939003^-1725965530), (-453936045^-743230065) + (-796088347^405868953), (1350777608^1932596180) + (947799296^-466382242), (-1086156971^-589001938) + (-1793246632^155501013), (-1588171531^-263295452) + (133685911^-1458561217), (668753044^1456735098) + (-1091749367^807049742), (953271507^1561809832) + (1861038758^-187409666), (-724176317^-574984416) + (-22883626^137539825), (686226181^1859105518) + (-1135216429^92491513), (1402111300^298096508) + (-718972875^1754052040), (389268751^1484140790) + (-1259291036^72005562), (-1615089489^-1044693638) + (-1339729669^299510376), (1976214121^1137435453) + (163861569^-1069880489), (-1408375330^-2030592508) + (-1958315231^1581512935), (-521394475^-566791389) + (1368348894^-1867779426), (-710128965^-196460939) + (692084602^-145107918), (125064182^1685313606) + (-588019834^1074525082), (-441358997^-709361617) + (666126457^-398273800), (1224755030^527213581) + (-1962468043^580125165), (2110827284^311920065) + (14127270^-1871756847), (1667273359^1507737e3) + (-1016139066^103785004), (702770215^357468394) + (698349334^-355603393), (1079970571^1086490006) + (1330058239^-1339727079), (-809971774^-41173656) + (539417535^-303409513), (1255763976^1403354183) + (-1814300150^1968705069), (-798025612^-1844530208) + (1197629536^-84134685), (146262010^1093194521) + (-1506443784^274044677), (1678747603^58483892) + (-1343155836^930950419), (2142537227^2054763147) + (764370259^-675473825), (-150601709^-693195013) + (2118948195^-1608792665), (-279119367^-572579005) + (1448875619^-1692388532), (-206904361^-779530516) + (-167102630^735471055), (1730279126^367799464) + (1251515117^-945111087), (1162920575^504543761) + (1654653949^-971144038), (2131431552^2118671537) + (-169276042^190168815), (548117359^509516222) + (-451593658^606062362), (-1977844267^-1802715825) + (-1332516332^1375491547), (682240738^162756622) + (708463007^-186850045), (-865668041^-1696581892) + (324417382^-1171322250), (-1516706959^-648820156) + (2045790749^-87777996), (1548100881^80883952) + (-2139741628^656263283), (783925116^1627921459) + (-844594846^2112282068), (1331475163^1946636578) + (274288513^-721595463), (742438620^847726437) + (-284015238^237652924), (-1150376062^-1505273273) + (-1364819575^1282442175), (1761567330^1924050203) + (-773291860^877048062), (1377797498^1644847532) + (1262507422^-2069213691), (1215949425^1992595788) + (1101858256^-2131785584), (-1242558425^-277569570) + (-179997116^1346242117), (-1742691035^-400250352) + (372391810^-1714827283), (1823604726^435004437) + (-707637131^1601303804), (1054737406^1104117617) + (807058891^-1326170461), (1237012799^1929521312) + (1509532973^-1665195245), (1414288905^194176504) + (-1107303840^501131669), (582070880^369343061) + (-648393525^303545092), (-1293921702^-1184903297) + (589535617^-681313636), (-384214826^-1865614769) + (1231926886^-817370245), (2105806723^686892872) + (945419403^-1831656862), (1733413683^189594101) + (1050117931^-1384822141), (-1223241336^-1775670836) + (-1498810178^2020196312), (873079230^610096057) + (833169917^-570316843), (1030289011^1368670522) + (1414658345^-950882256), (-2030379616^-135266341) + (87312382^-1948345751), (-1151305912^-2077373111) + (-2144619259^1083831044), (190319956^157611100) + (40937508^-5001407), (-325447962^-1841548007) + (1027709627^-1139254966), (305744566^1812080192) + (1034744704^-1134010218), (-1003836812^-854692558) + (527913152^-374576999), (-223162914^-1969706885) + (-977207316^1108698491), (2083481139^1942124330) + (-848152685^1029757222), (-1185599839^-1152158804) + (-1530143314^1496481641), (-886831014^-297324246) + (1486329753^-2113187447), (-1734166018^-236972278) + (-418633913^1907455887), (-1896162455^-1430073139) + (721084842^-247655121), (-1572967143^-1026412849) + (-667037889^1194226489), (1573973101^734950243) + (-954737664^1324792971), (1052086705^521157596) + (537309395^-27466398), (-1210026652^-224332320) + (-456751195^1585051669), (1743747866^952451361) + (497214968^-1116266333), (-846835309^-2039794752) + (2110884514^-909962076), (1143622690^1809698897) + (741741843^-63015239), (-1664748125^-853414306) + (1350580363^-23339805), (-1566629886^-1059578875) + (240457768^-1813128305), (718089345^1483461728) + (-740729536^1585470159), (-1619492856^-1364489193) + (2047880260^-1271080891), (1050662725^767793321) + (307097498^-17932516), (-1425737978^-461487269) + (-785174356^1639349038), (-1088391496^-1549409034) + (1035613622^-557819668), (1647580081^1028389101) + (-931376148^1761363748), (-208570669^-1168227126) + (-55491756^1250004310), (1822475607^1823616966) + (-318052311^317193429), (-1299423369^-686129602) + (-156323351^1825009577), (-442591105^-755005739) + (-603734966^345857483), (-1306804648^-620519382) + (92798176^-1822417605), (1907541478^160960105) + (1967055033^-219425621), (-640058396^-134733620) + (-1835527476^1128707646), (1267726759^1820268856) + (1805046886^-1281766409), (1818070437^2032757077) + (859216128^-641891708), (-1789431649^-833457288) + (30310744^-1523287382), (1382837366^596209073) + (475647943^-1841090144), (799519082^1913249460) + (442188459^-1207250234), (-29756589^-1014548586) + (1846204674^-1404313030), (-2107395777^-638416158) + (318971720^-1217536773), (854393953^1674982808) + (-1425211848^97005692), (1052341837^1248006068) + (1542505405^-791329205), (-1860560116^-1249952195) + (-284104728^881474816), (211574934^1007393767) + (-1430261228^1708652100), (-1152604284^-1662777863) + (-1116492180^1696920550), (1245668397^1789303096) + (149341756^-679426926), (-1170378167^-193149342) + (416403541^-1452303375), (1510138593^785649310) + (-1417159740^548325542), (-1720263808^-1532503117) + (-1957364148^1232862822), (352093879^472983769) + (381740672^-504187081), (1436122568^633448632) + (349982368^-1686412156), (1885668465^2118959371) + (652018004^-687129848), (-1429451100^-1021968321) + (-250663702^1730846151), (-161443359^-1041447406) + (1933970516^-1154110582), (-741194306^-367538497) + (1328899695^-1995500850), (-2136770431^-1587609175) + (-2065990954^1524170117), (-1873812798^-1553723140) + (1580801557^-1829956762), (-1375456959^-890025553) + (220806068^-1776173808), (-1366266820^-600509417) + (163805264^-2070409138), (1186363797^763236538) + (-178356e3^1634277319), (-1523511127^-232764946) + (941375062^-1863149561), (-3162142^-711172525) + (-267731566^631677925), (49341279^1329074118) + (924950577^-2062109912), (-1310084269^-148548206) + (-747428911^1782594293), (-345737741^-421339717) + (773386578^-597580106), (1815995282^1785484831) + (1588276572^-1492818117), (-531472487^-2025804273) + (-1865125544^137986022), (465195396^639833587) + (1417617682^-1776706915), (-890909391^-549296072) + (-52645447^377809727), (1964455276^1745555190) + (949059548^-630015225), (1349589466^1387263359) + (1522226495^-1483061589), (-1105537837^-1916725205) + (345089021^-659189394), (-1741897917^-819892575) + (-265771134^1490717254), (490227391^537055625) + (1664679130^-1577216951), (2060113216^1129834172) + (-1215196478^1911773493), (-83024663^-1196715141) + (1026403683^-2123045518), (285072340^1943237404) + (-870210754^1357968489), (1951720323^1254033199) + (-2064892393^1173890363), (-1879531484^-1604035113) + (-488334336^847748713), (-1912886065^-170068945) + (1648570601^-442787919), (-949111864^-1110704329) + (486063910^-1717498815), (-382195900^-549061015) + (294001332^-670811023), (111621224^1610088440) + (-1853919301^936401704), (1974033785^1769437173) + (71461079^-412893892), (1855109613^77775435) + (-1772825685^60510327), (-233886378^-1154795891) + (89454606^-1282466776), (-1635151993^-1227732522) + (-1282859826^1680680323), (192196402^686875793) + (-1472324384^1950723858), (90035213^1983730014) + (-119265019^1954239350), (-1353817975^-490179230) + (575913056^-1876273565), (-1408104698^-676091455) + (-1612749786^461452441), (-651778826^-998731518) + (-336785406^156031482), (-725657450^-974964958) + (-699687046^954732709), (46474430^209814177) + (1630306716^-1869096002), (1047583825^549191851) + (1495120474^-1204905636), (-1221703408^-1571178222) + (-1592994416^1266997869), (-335775061^-1622395582) + (795672e3^-1541190222), (-12498836^-2053707779) + (882656233^-1313598675), (589553509^707056679) + (-1762911137^1611982906), (1938786029^425881161) + (769576825^-1194534701), (2146965253^40198947) + (-189807997^1993166497), (453822578^1926258948) + (1404440249^-980068254), (1486939753^544764961) + (-1973071434^222444670), (-509985786^-1168018954) + (-792544234^1959136870), (70932116^488126911) + (-712057152^861097625), (641637900^724334614) + (559352436^-742779916), (-181382990^-201957355) + (1699115487^-1669349704), (-832067641^-940814990) + (285105568^-427144846), (1421876899^280691752) + (1271591189^-263318496), (1734945303^554726813) + (1267745693^-233381090), (-128554459^-1638909494) + (1893564600^-383505557), (-19740066^-742001045) + (179191860^-666467464), (168542243^1124182177) + (-1856353790^665836907), (-1803233282^-2026223134) + (-1308538183^1581263658), (387740136^1426925796) + (539667549^-1648096413), (825375323^1734762099) + (611966326^-1915599317), (968503400^1804713390) + (-1217918765^448559405), (2080269223^237764186) + (-403031344^1842370804), (-1186734148^-1776922772) + (-1373580532^2123021469), (-2043346784^-1376186984) + (-1625995816^1260828583), (-295226595^-1649838584) + (1457644757^-623878602), (436707569^945433867) + (-1992366432^1419548489), (-1044081966^-1978888214) + (1033083019^-1985709329), (-967173325^-553291176) + (1737006677^-2128082706), (160055608^1124462678) + (1477313371^-310489643), (192987911^857215561) + (1590968695^-1716293836), (1078083366^756295619) + (921987687^-1537373005), (1822379255^141176509) + (1982513615^-316646234), (2138567728^81259193) + (1738356790^-473769546), (613991581^1070344094) + (-1720678208^2111542672), (-1597798315^-1107653756) + (-1333590273^1380317919), (2017854821^503163959) + (-1894767566^357855839), (986921134^1851750869) + (-1936945836^671036316), (-652864319^-1868186962) + (-1575503132^341568268), (-1302750766^-98021188) + (1559736295^-344352482), (-249957808^-1600904930) + (1871438803^-1040593110), (669687564^1677153693) + (-253732591^1258449929), (989244215^1830936873) + (-849442785^1702247938), (44263116^1130779372) + (990167333^-2059531569)],
		L = function (a) {
			var e = [];
			if (null == a || void((7306580^1175748701) + (1071077026^-2041359275)) == a || (1214869392^32477026) + (808852430^-2041641792) == a.length)
				return V((-2045367310^-1192805483) + (823210697^-266347248));
			if ((1790257052^2054053929) + (-802042190^1058371129) <= a.length) {
				e = [];
				if (null != a && (-464657058^-268110929) + (-1137126524^1468938891) != a.length) {
					if ((-849201059^-1791981068) + (-2101907270^622476845) > a.length)
						throw Error(k("1m1M1M11"));
					for (var d = (-944219032^-1772274704) + (-1255957969^456720967); (1145007042^75215535) + (-1571568615^501801674) > d; d++)
						e[d] = a[(-1186974100^-1265774411) + (-1850486756^1669450043) + d]
				}
				return e
			}
			for (d = (-74778711^-1155694345) + (212247739^-1278333927); (261048521^835257460) + (1300144270^-1933110515) > d; d++)
				e[d] = a[d % a.length];
			return e
		},
		W = function (a) {
			if (null == a)
				return null;
			for (var e = [], d = (-1424345242^-1188349365) + (-468970119^163768234), b = a.length; d < b; d++) {
				var c = a[d];
				e[d] = ja[((915516827^1516208372) + (-1967348132^428700925)) * (c >>> (1279872162^659408273) + (225515991^-1718980858) & (198131128^1790034287) + (722027251^-1249361461)) + (c & (-156827093^-2067587398) + (-1302186228^1073337458))]
			}
			return e
		},
		P = function (a, e) {
			if (null == a)
				return null;
			for (var d = t(e), b = [], c = a.length, f = (1570152647^577657393) + (-75791488^2071758474); f < c; f++)
				b.push(G(a[f], d++));
			return b
		},
		P = function (a, e) {
			if (null == a)
				return null;
			for (var d = t(e), b = [], c = a.length, f = (1906366075^465822469) + (1824806797^-111633137); f < c; f++)
				b.push(G(a[f], d++));
			return b
		};
		if (function () {
			var a = D(l("2oc12cc1c12J2n202J22Ixc3cJcJcJ"));
			if (null == a || void((-456435613^-287530879) + (96110447^-263028623)) == a || k("") == a)
				return !((-1255222112^-1902182001) + (560341088^-450360654));
				var e,
				d = D(n("cn9J3c3m3D9p929x3o3Icn"));
				if (null == d || void((-1233284513^-314680535) + (-1931536528^677585402)) == d || g("") == d)
					e = !((891365750^1436491960) + (1301672428^-757856289));
				else
					try {
						e = (d = parseInt(d)) && (1692474471^277950270) + (677962802^-1545131790) <= d ? !((-1626822972^-1009925278) + (-969501481^1695288973)) : !((-1775602639^-404292967) + (-645273159^1471846624))
					} catch (b) {
						e = !((247355818^1002562329) + (31892501^-882450085))
					}
				e && (a = w(a), a = null == a ? !((-53676543^-695525054) + (2065391623^-1365030726)) : (975310877^1381298654) + (-562712159^1241495868) >= a - (new window.Date).getTime() ? !((234787879^1700088172) + (2009741469^-526509528)) : !((-44169620^-2008617142) + (607699669^-1361062898)), e = !a);
				return e
			}
				()) {
				var ka = Y();
				window[k("319c32c29J9x9c9n3c32")](K, ka)
			}
		else
			K()
	})()
})();
(function () {
	function bjQ() {
		var sy = function (iL) {
			if (iL < -128) {
				return sy(128 - (-128 - iL))
			} else if (iL >= -128 && iL <= 127) {
				return iL
			} else if (iL > 127) {
				return sy(-129 + iL - 127)
			} else {
				throw new Error("1001")
			}
		};
		var bjO = function (iL, cl) {
			return sy(iL + cl)
		};
		var bjK = function (Fy, LP) {
			if (Fy == null) {
				return null
			}
			if (LP == null) {
				return Fy
			}
			var lJ = [];
			var bjJ = LP.length;
			for (var i = 0, ck = Fy.length; i < ck; i++) {
				lJ[i] = bjO(Fy[i], LP[i % bjJ])
			}
			return lJ
		};
		var bjG = function (FF) {
			if (FF == null) {
				return FF
			}
			var lJ = [];
			var bjF = FF.length;
			for (var i = 0, ck = bjF; i < ck; i++) {
				lJ[i] = sy(0 - FF[i])
			}
			return lJ
		};
		var bjC = function (Mb, Cw) {
			Mb = sy(Mb);
			Cw = sy(Cw);
			return sy(Mb^Cw)
		};
		var bdh = function (CA, Mg) {
			if (CA == null || Mg == null || CA.length != Mg.length) {
				return CA
			}
			var lJ = [];
			var bjz = CA.length;
			for (var i = 0, ck = bjz; i < ck; i++) {
				lJ[i] = bjC(CA[i], Mg[i])
			}
			return lJ
		};
		var bdk = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
		var bjr = function (dE) {
			var wM = [];
			wM.push(bdk[dE >>> 4 & 15]);
			wM.push(bdk[dE & 15]);
			return wM.join("")
		};
		var bjp = function (tO) {
			var ck = tO.length;
			if (tO == null || ck < 0) {
				return new String("")
			}
			var wM = [];
			for (var i = 0; i < ck; i++) {
				wM.push(bjr(tO[i]))
			}
			return wM.join("")
		};
		var bdn = function (Gl) {
			if (Gl == null || Gl.length == 0) {
				return Gl
			}
			var Mv = new String(Gl);
			var lJ = [];
			var ck = Mv.length / 2;
			var cl = 0;
			for (var i = 0; i < ck; i++) {
				var ud = parseInt(Mv.charAt(cl++), 16) << 4;
				var tY = parseInt(Mv.charAt(cl++), 16);
				lJ[i] = sy(ud + tY)
			}
			return lJ
		};
		var bjl = function (dL) {
			if (dL == null || dL == undefined) {
				return dL
			}
			var CE = encodeURIComponent(dL);
			var tO = [];
			var bdq = CE.length;
			for (var i = 0; i < bdq; i++) {
				if (CE.charAt(i) == "%") {
					if (i + 2 < bdq) {
						tO.push(bdn(CE.charAt(++i) + "" + CE.charAt(++i))[0])
					} else {
						throw new Error("1009")
					}
				} else {
					tO.push(CE.charCodeAt(i))
				}
			}
			return tO
		};
		var bje = function (po) {
			var cQ = 0;
			cQ += (po[0] & 255) << 24;
			cQ += (po[1] & 255) << 16;
			cQ += (po[2] & 255) << 8;
			cQ += po[3] & 255;
			return cQ
		};
		var bzE = function (cQ) {
			var po = [];
			po[0] = cQ >>> 24 & 255;
			po[1] = cQ >>> 16 & 255;
			po[2] = cQ >>> 8 & 255;
			po[3] = cQ & 255;
			return po
		};
		var bjc = function (dW, ME, ck) {
			var pr = [];
			if (dW == null || dW.length == 0) {
				return pr
			}
			if (dW.length < ck) {
				throw new Error("1003")
			}
			for (var i = 0; i < ck; i++) {
				pr[i] = dW[ME + i]
			}
			return pr
		};
		var MI = function (dW, ME, GC, bja, ck) {
			if (dW == null || dW.length == 0) {
				return GC
			}
			if (GC == null) {
				throw new Error("1004")
			}
			if (dW.length < ck) {
				throw new Error("1003")
			}
			for (var i = 0; i < ck; i++) {
				GC[bja + i] = dW[ME + i]
			}
			return GC
		};
		var biV = function (ck) {
			var cK = [];
			for (var i = 0; i < ck; i++) {
				cK[i] = 0
			}
			return cK
		};
		var biU = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
		var wl = 64;
		var GQ = 64;
		var bdz = 4;
		var biS = function (lV) {
			var bdB = [];
			if (lV == null || lV == undefined || lV.length == 0) {
				return biV(GQ)
			}
			if (lV.length >= GQ) {
				return bjc(lV, 0, GQ)
			} else {
				for (var i = 0; i < GQ; i++) {
					bdB[i] = lV[i % lV.length]
				}
			}
			return bdB
		};
		var biQ = function (GV) {
			if (GV == null || GV.length % wl != 0) {
				throw new Error("1005")
			}
			var MZ = [];
			var cl = 0;
			var biC = GV.length / wl;
			for (var i = 0; i < biC; i++) {
				MZ[i] = [];
				for (var j = 0; j < wl; j++) {
					MZ[i][j] = GV[cl++]
				}
			}
			return MZ
		};
		var biA = function (bdV) {
			var ud = bdV >>> 4 & 15;
			var tY = bdV & 15;
			var cl = ud * 16 + tY;
			return biU[cl]
		};
		var bec = function (Ni) {
			if (Ni == null) {
				return null
			}
			var bed = [];
			for (var i = 0, ck = Ni.length; i < ck; i++) {
				bed[i] = biA(Ni[i])
			}
			return bed
		};
		var biq = function (vR, lV) {
			if (vR == null) {
				return null
			}
			if (vR.length == 0) {
				return []
			}
			if (vR.length % wl != 0) {
				throw new Error("1005")
			}
			lV = biS(lV);
			var Np = lV;
			var Nq = biQ(vR);
			var CR = [];
			var bip = Nq.length;
			for (var i = 0; i < bip; i++) {
				var Nw = bec(Nq[i]);
				Nw = bec(Nw);
				var Nx = bdh(Nw, Np);
				var bio = bjK(Nx, bjG(Np));
				Nx = bdh(bio, lV);
				MI(Nx, 0, CR, i * wl, wl);
				Np = Nq[i]
			}
			var bef = [];
			MI(CR, CR.length - bdz, bef, 0, bdz);
			var ck = bje(bef);
			if (ck > CR.length) {
				throw new Error("1006")
			}
			var lJ = [];
			MI(CR, 0, lJ, 0, ck);
			return lJ
		};
		var bii = function (Hg, bF) {
			if (Hg == null) {
				return null
			}
			var beo = new String(Hg);
			if (beo.length == 0) {
				return []
			}
			var vR = bdn(beo);
			if (bF == null || bF == undefined) {
				throw new Error("1007")
			}
			var lV = bjl(bF);
			return biq(vR, lV)
		};
		this.bhW = function (Hg, bF) {
			var bhU = bii(Hg, bF);
			var NH = new String(bjp(bhU));
			var Hi = [];
			var bhR = NH.length / 2;
			var cl = 0;
			for (var i = 0; i < bhR; i++) {
				Hi.push("%");
				Hi.push(NH.charAt(cl++));
				Hi.push(NH.charAt(cl++))
			}
			return Hi.join("")
		}
	}
	window.settmusic = (new bjQ).bhW
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	bp = be("nm.d"),
	bF = "Search-tracks_",
	bb;
	bp.gN({
		"search-suggest" : {
			url : "/api/search/suggest/web",
			type : "POST",
			format : function (bHN) {
				var bn = bHN.result,
				pe = bn.order = [];
				if (!!bn.songs && !!bn.songs.length)
					pe.push("songs");
				if (!!bn.artists && !!bn.artists.length)
					pe.push("artists");
				if (!!bn.albums && !!bn.albums.length)
					pe.push("albums");
				if (!!bn.playlists && !!bn.playlists.length)
					pe.push("playlists");
				return bHN
			}
		},
		"search-list" : {
			url : "/api/search/get/web",
			type : "post",
			noescape : true,
			format : function (bHN, bf) {
				if (bHN.abroad) {
					try {
						bHN.result = JSON.parse(decodeURIComponent(settmusic(bHN.result, bp.sk)))
					} catch (e) {}

				}
				bHN.result = bHN.result || {};
				var bk,
				df,
				nl = [],
				NS = bf.data.s || "",
				ft = bf.data.limit,
				bDM = parseInt(bf.data.type) || 1,
				bn = bHN.result;
				switch (bDM) {
				case 1:
					bk = this.bev(bn.songs, bf.data.hlpretag, bf.data.hlposttag);
					df = bn.songCount;
					break;
				case 10:
					bk = bn.albums;
					df = bn.albumCount;
					break;
				case 100:
					bk = bn.artists;
					df = bn.artistCount;
					break;
				case 1e3:
					bk = bn.playlists;
					df = bn.playlistCount;
					break;
				case 1002:
					bk = bn.userprofiles;
					df = bn.userprofileCount;
					break;
				case 1006:
					bk = this.bev(bn.songs, bf.data.hlpretag, bf.data.hlposttag);
					df = bn.songCount;
					break;
				case 1009:
					var mK = bn.djRadios;
					if (!!mK) {
						bm.bLt(mK, function (bz, bu, bzF) {
							bz.xid = bz.id;
							bz.id = bz.id + "_rad"
						});
						if (mK.length) {
							this.ro("radio_search-" + bf.data.s, mK)
						}
					}
					bk = bn.djprograms;
					df = Math.min(bn.djprogramCount, 500);
					break
				}
				this.bG("onsearchload", bHN);
				if (bk && bk.length) {
					for (var i = 0; i < ft; i++) {
						if (i < bk.length) {
							nl.push(bk[i])
						} else {
							nl.push(null)
						}
					}
				}
				return {
					more : !0,
					total : Math.min(df || 0, NS.length < 3 ? 500 : 5e3),
					list : nl
				}
			},
			onerror : function (bHN, bf) {
				bf.onload(bf, []);
				if (bm.gj(bf.onerror)) {
					bf.onerror(bHN)
				}
			}
		}
	});
	bp.CW = NEJ.C();
	bb = bp.CW.bN(bp.gY);
	bb.dv = function () {
		this.dF()
	};
	bb.bhO = function (bF, bf) {
		if (!bF)
			return;
		if (!!this.bey)
			bH.mB(this.bey);
		this.bey = this.dg("search-suggest", NEJ.X({
					data : {
						s : bF,
						limit : 8
					}
				}, bf))
	};
	bb.bev = function () {
		var bhK = function (iD, beG, beH) {
			var bhD = iD.match(new RegExp(beG + "(.+?)" + beH, "gi")),
			dm = 0;
			bm.bLt(bhD, function (bt) {
				dm += bt.replace(new RegExp(beG, "g"), "").replace(new RegExp(beH, "g"), "").length
			});
			return dm
		};
		return function (jF, bhB, bhA) {
			bm.bLt(jF, function (eD) {
				var Hm = eD.lyrics || [],
				jx = Hm.length,
				iA = 0,
				df = 4,
				Hn = {
					l : 0,
					v : 0
				},
				Op;
				if (jx > 4) {
					bm.bLt(Hm, function (iD, bu) {
						var beJ = bhK(iD, bhB, bhA);
						if (beJ > Hn.v) {
							Hn.v = beJ;
							Hn.l = bu
						}
					});
					iA = Hn.l;
					iA = Math.max(iA, 0);
					Op = jx - iA - 4;
					if (Op < 0)
						iA += Op;
					eD.lrcAbstractEnd = iA + df - 1
				} else {
					eD.lrcAbstractEnd = jx - 1
				}
				eD.lrcAbstractStart = iA;
				eD.indexId = (Hm && Hm.length ? "L" : "NL") + eD.id
			});
			return jF
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bH = be("nej.j"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bM = be("nm.m"),
	bo = be("nm.l"),
	dX = be("nm.i"),
	bE = be("nm.m.sch"),
	bb,
	bJ;
	var bhs = {
		songs : 1,
		artists : 100,
		albums : 10,
		playlists : 1e3
	};
	bE.Da = NEJ.C();
	bb = bE.Da.bN(bK.eW);
	bb.dv = function (bid) {
		this.dF();
		this.bFa(bid);
		this.bA = bp.CW.mh()
	};
	bb.bFa = function (bid) {
		this.bB = bid;
		var bk = Fp.bP(bid, "j-flag");
		this.cZ = bk[0];
		this.Oy = bk[1];
		this.eC = bk[2];
		this.kf = bk[3];
		bj.bs(this.cZ, "input", this.gb.bh(this));
		bj.bs(this.cZ, "keyup", this.gb.bh(this));
		bj.bs(this.cZ, "focus", this.ey.bh(this));
		bj.bs(this.Oy, "click", this.ey.bh(this));
		bj.bs(this.cZ, "blur", this.OI.bh(this));
		bj.bs(this.eC, "click", this.HB.bh(this));
		bj.bs(this.bB, "keydown", this.OK.bh(this));
		bj.bs(this.bB, "keypress", this.HD.bh(this));
		bj.bs(this.kf, "mouseover", this.Dg.bh(this));
		bj.bs(this.kf, "mouseout", this.Dg.bh(this))
	};
	bb.gb = function (bc) {
		if (bc.type == "keyup" && bc.keyCode == 8 || bc.keyCode == 46) {
			this.tr()
		} else if (bc.type == "input" || bc.type == "propertychange") {
			setTimeout(this.tr.bh(this), 0)
		}
	};
	bb.ey = function () {
		this.sj(this.Oy, !1);
		Fp.bV(this.bB, "m-srch-fcs");
		this.cZ.focus();
		this.tr()
	};
	bb.OI = function () {
		if (!this.cZ.value) {
			this.sj(this.Oy, !0)
		}
		var tn = Fp.bP(this.kf, "slt");
		if (this.HP(this.kf) && tn.length > 0 && Fp.bI(tn[0], "type")) {
			var ht = tn[0].href;
			if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(ht)) {
				window.log("search", {
					rid : RegExp.$2,
					type : RegExp.$1,
					keyword : this.cZ.value
				})
			}
			location.dispatch2(tn[0].href)
		}
		this.sj(this.kf, !1);
		Fp.bR(this.bB, "m-srch-fcs")
	};
	bb.sj = function (bid, so) {
		Fp.bY(bid, "display", !so ? "none" : "")
	};
	bb.HP = function (bid) {
		return Fp.bIU(bid, "display") != "none"
	};
	bb.tr = function () {
		var Pd = function (oV, fc) {
			if (!fc)
				return;
			return fc.replace(new RegExp(bq.bcI(oV), "gi"), function ($1) {
				return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
			})
		};
		var bhp = function (gp) {
			var gX = this.bB.clientWidth > 250 ? 41 : 17;
			if (bq.BJ(gp) > gX) {
				return bq.BQ(gp, gX) + "..."
			} else {
				return gp
			}
		};
		var bho = function (bn) {
			return bn.songs && bn.songs.length || bn.albums && bn.albums.length || bn.artists && bn.artists.length || bn.playlists && bn.playlists.length
		};
		var nT = function (oV, bc) {
			if (!bq.bcC(this.cZ) || bq.hN(this.cZ.value)) {
				this.sj(this.kf, !1);
				return
			}
			bc.keyword = bm.eZ(oV);
			var fD = Fp.cV("m-search-suggest", bc, {
					mark : Pd.bh(this, oV),
					cutStr : bhp.bh(this)
				}),
			pe = bc.result.order;
			this.kf.innerHTML = fD;
			this.sj(this.kf, bho(bc.result) ? !0 : !1);
			if (!!pe && !!pe.length) {
				this.Pj = {
					keyword : oV,
					type : bhs[pe[0]]
				}
			}
		};
		return function () {
			var bz = this.cZ.value;
			if (bq.hN(bz)) {
				this.sj(this.kf, !1);
				return
			}
			this.bA.bhO(bz, {
				onload : nT.bh(this, bz)
			})
		}
	}
	();
	bb.HD = function (bc) {
		if (bc.keyCode != 13)
			return;
		var tn = Fp.bP(this.kf, "slt");
		if (this.HP(this.kf) && tn.length > 0) {
			location.dispatch2(tn[0].href);
			this.sj(this.kf, !1);
			return
		}
		this.HB();
		this.sj(this.kf, !1)
	};
	bb.OK = function (bc) {
		if (!this.HP(this.kf))
			return;
		var bk = Fp.bP(this.kf, "xtag"),
		jx = bk.length,
		bu = bm.dY(bk, function (bt) {
				return Fp.cJ(bt, "slt")
			});
		switch (bc.keyCode) {
		case 38:
			if (bu >= 0)
				Fp.bR(bk[bu], "slt");
			Fp.bV(bk[bu <= 0 ? jx - 1 : bu - 1], "slt");
			break;
		case 40:
			if (bu >= 0)
				Fp.bR(bk[bu], "slt");
			Fp.bV(bk[(bu + 1) % jx], "slt");
			break
		}
	};
	bb.Dg = function (bc) {
		if (!this.HP(this.kf))
			return;
		var Dp,
		bD = bj.cf(bc),
		bk = Fp.bP(this.kf, "xtag");
		if (bD.tagName.toLowerCase() == "a")
			Dp = bD;
		else if (bD.parentNode.tagName.toLowerCase() == "a")
			Dp = bD.parentNode;
		if (!Dp)
			return;
		bm.bLt(bk, function (bt) {
			Fp.bR(bt, "slt");
			Fp.bI(bt, "type", "")
		});
		if (bc.type == "mouseout")
			return;
		Fp.bV(Dp, "slt");
		Fp.bI(Dp, "type", "mouse")
	};
	bb.HB = function () {
		var bLw = location.hash,
		bu = bLw.indexOf("?"),
		cC = bm.mk(bLw.substring(bu + 1));
		cC.s = this.cZ.value;
		if (bq.hN(cC.s))
			return;
		if (!cC.type && this.Pj && this.Pj.keyword == cC.s) {
			cC.type = this.Pj.type
		}
		location.dispatch2("/search/#/?" + bm.eK(cC));
		this.cZ.blur()
	};
	bE.Da.bhn = function () {
		var bk = Fp.bP(document.body, "j-suggest");
		bm.bLt(bk, function (bt) {
			new bE.Da(bt)
		})
	};
	bE.Da.bhn()
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	bp = be("nm.d"),
	bb;
	bp.gN({
		"mv_artist-list" : {
			url : "/api/artist/mvs",
			type : "get",
			format : function (bHN) {
				return {
					total : bHN.size || 0,
					list : bHN.mvs || []
				}
			}
		},
		"album_artist-list" : {
			url : "/api/artist/albums/{id}",
			type : "get",
			format : function (bHN) {
				return {
					total : bHN.size || 0,
					list : bHN.hotAlbums || []
				}
			}
		},
		"ydcailing_post-list" : {
			url : "/api/cailing/all/",
			type : "POST",
			format : function (bHN) {
				return bHN.result.songs
			}
		},
		"wo-list" : {
			url : "/api/unicom/wo/content",
			format : function (bHN, bf) {
				if (bf.offset == 0) {
					var bdO = bHN.data[0];
					this.bG("onfirstload", bdO);
					bHN.data.splice(0, 1);
					return bHN.data
				} else {
					return bHN.data
				}
			}
		}
	});
	bp.xA = NEJ.C();
	bb = bp.xA.bN(bp.gY);
	bb.dv = function () {
		this.dF()
	};
	bb.bDL = function () {
		var qR = "LOCAL_FLAG";
		return function (bDM, bEv) {
			var bl = this.zq(qR, {});
			if (bl[bDM]) {
				return true
			} else {
				if (!bEv) {
					bl[bDM] = true;
					this.sv(qR, bl)
				}
				return false
			}
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bv = be("nej.ut"),
	Oj;
	if (!!bv.qf)
		return;
	bv.qf = NEJ.C();
	Oj = bv.qf.bN(bv.eW);
	Oj.cw = function () {
		var buF = function (bc) {
			bc.matched = bc.source == bc.target
		};
		return function (bf) {
			bf.oncheck = bf.oncheck || buF;
			this.cA(bf);
			this.dK = bf.list;
			this.lf = bf.dataset || "id";
			this.hQ = bf.selected || "js-selected"
		}
	}
	();
	Oj.uf = function (bz) {
		var bD,
		bc = {
			target : bz
		};
		bm.bLt(this.dK, function (bid) {
			delete bc.matched;
			bc.source = Fp.bI(bid, this.lf);
			this.bG("oncheck", bc);
			if (!bc.matched) {
				Fp.bR(bid, this.hQ)
			} else {
				bD = bid;
				Fp.bV(bid, this.hQ)
			}
		}, this);
		return bD
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bv = be("nej.ut"),
	lo;
	if (!!bv.dM)
		return;
	bv.dM = NEJ.C();
	lo = bv.dM.bN(bv.eW);
	lo.dv = function () {
		this.kC = {};
		this.dF();
		this.cE()
	};
	lo.cw = function (bf) {
		this.cA(bf);
		this.PA = bf.umi || "";
		this.sA = bf.dispatcher;
		this.xb = bf.composite || bZ;
		this.LQ({
			onshow : this.hk.bh(this),
			onhide : this.jE.bh(this),
			onrefresh : this.eo.bh(this),
			onmessage : this.th.bh(this),
			onbeforehide : this.bhm.bh(this)
		})
	};
	lo.cX = function () {
		delete this.PA;
		this.kC = {};
		this.dc()
	};
	lo.oX = function (bc) {
		if (!!bc)
			bc.stopped = !0
	};
	lo.cE = co;
	lo.hk = co;
	lo.jE = co;
	lo.eo = co;
	lo.th = co;
	lo.bhm = co;
	lo.PH = function (km, cD, eU) {
		this.sA.bhl({
			to : km,
			mode : eU || 0,
			data : cD,
			from : this.PA
		})
	};
	lo.bzI = function (bDM, bl) {
		this.sA.sH(bDM, {
			from : this.PA,
			data : bl
		})
	};
	lo.bzJ = function () {
		this.sA.iE.apply(this.sA, arguments)
	};
	lo.bhi = function () {
		return this.kC
	};
	Fp.Im = function () {
		if (!!window.dispatcher) {
			dispatcher.beO.apply(dispatcher, arguments)
		}
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bv = be("nej.ut"),
	qV;
	if (!!bv.bFb)
		return;
	bv.bFb = NEJ.C();
	qV = bv.bFb.bN(bv.dM);
	qV.beQ = function (bf) {
		var cU;
		if (!cU) {
			var bl = bf.input || bZ;
			cU = Fp.bw(bl.parent)
		}
		if (!cU) {
			var bl = bf.data || bZ;
			cU = Fp.bw(bl.parent)
		}
		if (!cU) {
			cU = Fp.bw(bf.parent)
		}
		return cU
	};
	qV.hk = function (bf) {
		var cU = this.beQ(bf);
		if (!!cU && !!this.bB)
			cU.appendChild(this.bB);
		this.hz(bf);
		this.beR("onshow", bf);
		this.eo(bf)
	};
	qV.eo = function (bf) {
		this.gg(bf);
		this.beR("onrefresh", bf)
	};
	qV.jE = function () {
		this.kz();
		this.bhe();
		Fp.mH(this.bB)
	};
	qV.beT = function () {
		var fg = /^onshow|onrefresh|delay$/;
		return function (cB) {
			return fg.test(cB)
		}
	}
	();
	qV.beW = co;
	qV.beR = function () {
		var beZ = function (cC, bf, cB, hI) {
			if (this.beT(hI))
				return;
			if (!!cC)
				cB += (cB.indexOf("?") > 1 ? "&" : "?") + cC;
			var gD = this.beW(hI, bf) || {};
			gD.location = bf;
			gD.parent = this.kC[hI];
			this.sA.fl(cB, {
				input : gD
			})
		};
		return function (bDM, bf) {
			if (!bf.nodelay) {
				if (!!this.xb.delay)
					return;
				var bfb = this.xb[bDM] || bZ;
				if (bfb.delay)
					return
			}
			var cC = bm.eK(bf.param) || "";
			if (bDM == "onrefresh") {
				bm.eJ(this.xb, beZ.bh(this, cC, bf))
			}
			bm.eJ(bfb, beZ.bh(this, cC, bf))
		}
	}
	();
	qV.bhe = function () {
		var rw = function (cB, hI) {
			if (!this.beT(hI))
				this.sA.cj(cB)
		};
		return function () {
			bm.eJ(this.xb, rw, this);
			bm.eJ(this.xb.onshow, rw, this);
			bm.eJ(this.xb.onrefresh, rw, this)
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bK = be("nej.ut"),
	bH = be("nej.j"),
	bm = be("nej.u"),
	bM = be("nm.m"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bb,
	bJ;
	bM.bEe = NEJ.C();
	bb = bM.bEe.bN(bK.eW);
	bb.dv = function () {
		this.dF();
		this.bB = Fp.bw("g-topbar");
		var bk = Fp.bP(this.bB, "j-tflag");
		this.bgX = bk[0];
		this.bDn = bk[1];
		this.Nb = bk[2];
		this.bDG = bk[3];
		this.bDy = bk[4];
		this.bEw = bK.qf.bL({
				list : this.bgX.getElementsByTagName("a"),
				selected : "z-slt",
				dataset : "module"
			});
		this.brF = bK.qf.bL({
				list : this.bDy.getElementsByTagName("a"),
				selected : "z-slt",
				dataset : "module"
			});
		this.dA([[this.bDn, "click", this.dH.bh(this)], [this.bDn, "mouseout", this.bff.bh(this, 0)], [this.bDn, "mouseover", this.bff.bh(this, 1)]]);
		window.scrollTopbar = this.bEx.bh(this);
		window.matchNav = this.bDH.bh(this);
		window.polling = this.sV.bh(this);
		this.bDI = bp.xA.bL();
		this.bEy();
		this.bDx();
		var cC = bm.mk(location.href.split("?")[1]) || {};
		if (cC.market) {
			Fp.bw("topbar-download-link").href = "/download?market=" + cC.market
		}
	};
	bb.sV = function (bc) {
		var bLw = bq.uy();
		if (!/^\/msg/.test(bLw)) {
			var ra = 0;
			ra += bc.comment;
			ra += bc.forward;
			ra += bc.msg;
			ra += bc.notice;
			if (ra > 0) {
				this.Nb.innerHTML = Fp.cV("m-topbar-mesg-count", {
						count : ra
					})
			} else {
				this.Nb.innerHTML = ""
			}
			var eO = "/at";
			if (bc.notice)
				eO = "/notify";
			if (bc.comment)
				eO = "/comment";
			if (bc.msg > 0)
				eO = "/private";
			if (bc.forward > 0)
				eO = "/at";
			this.Nb.href = "/msg/#" + eO
		} else {
			this.Nb.innerHTML = ""
		}
		var bk = Fp.bP(this.bgX, "j-t");
		if (!/^\/friend/.test(bLw)) {
			if (bk && bk.length) {
				Fp.bY(bk[0], "display", bc.event > 0 ? "" : "none")
			}
		} else {
			Fp.bY(bk[0], "display", "none")
		}
	};
	bb.dH = function (bc) {
		var bid = bj.cf(bc, "d:action");
		if (bid) {
			bj.cG(bc);
			switch (Fp.bI(bid, "action")) {
			case "login":
				var bDM = Fp.bI(bid, "type");
				if (bDM) {
					if (bDM == "sina" || bDM == "tencent")
						top.open(bid.href);
					else
						top.login(bDM == "mobile" ? 0 : 3)
				} else {
					top.login()
				}
				break;
			case "logout":
				top.logout();
				break;
			case "viewStore":
				if (!this.bDI.bDL("storeNew")) {
					Fp.bV(this.bDw, "f-vhide")
				}
				break;
			case "viewLevel":
				if (!this.bDI.bDL("levelNew")) {
					Fp.bV(this.tK, "f-vhide")
				}
				break
			}
		}
	};
	bb.bff = function (sN, bc) {
		if (this.bDJ) {
			this.bDJ.style.display = !sN ? "none" : ""
		}
	};
	bb.bEx = function (hg) {
		Fp.bY(this.bB, "top", -hg + "px")
	};
	bb.bDH = function (eO, bEz) {
		this.bEw.uf(eO);
		if (eO == "discover") {
			Fp.bV(this.bDG, "f-hide");
			Fp.bR(this.bDy, "f-hide");
			this.brF.uf(bEz)
		} else {
			Fp.bR(this.bDG, "f-hide");
			Fp.bV(this.bDy, "f-hide")
		}
	};
	bb.bEy = function () {
		var bim = Fp.bw("g_iframe").contentWindow.document.getElementById("g_top");
		this.bDH(Fp.bI(bim, "module"), Fp.bI(bim, "sub"))
	};
	bb.bDx = function () {
		if (GUser && GUser.userId) {
			Fp.ne(this.bDn, "m-topbar-user-login", GUser);
			Fp.bY(this.Nb, "display", "")
		} else {
			this.bDn.innerHTML = Fp.ku("m-topbar-user-unlogin");
			this.Nb.innerHTML = "";
			var bk = Fp.bP(this.bgX, "j-t");
			Fp.bY(bk[0], "display", "none");
			Fp.bY(this.Nb, "display", "none")
		}
		var bk = Fp.bP(this.bDn, "j-uflag");
		this.bDJ = bk[0];
		this.bEA = bk[1];
		this.tK = bk[2];
		this.bDw = bk[3];
		if (!this.bDI.bDL("storeNew", true)) {
			Fp.bR(this.bDw, "f-vhide")
		} else {
			Fp.bV(this.bDw, "f-vhide")
		}
		if (!this.bDI.bDL("levelNew", true)) {
			Fp.bR(this.tK, "f-vhide")
		} else {
			Fp.bV(this.tK, "f-vhide")
		}
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bj = be("nej.v"),
	bK = be("nej.ut"),
	bp = be("nm.d"),
	bb,
	bJ;
	bp.gN({
		"polling-get" : {
			type : "GET",
			url : "/api/pl/count",
			format : function (bHN) {
				bj.bG(bp.su, "message", bHN)
			}
		}
	});
	bp.su = NEJ.C();
	bb = bp.su.bN(bp.gY);
	bb.HS = function () {
		this.dg("polling-get", {})
	};
	bb.sw = function () {
		var fu;
		return function () {
			if (!!fu)
				return;
			fu = window.setInterval(this.HS.bh(this), 1e5);
			this.HS()
		}
	}
	();
	bK.hh.bL({
		event : "message",
		element : bp.su
	})
})();
var io = "undefined" === typeof module ? {}

 : module.exports;
(function () {
	(function (exports, global) {
		var io = exports;
		io.version = "0.9.16";
		io.protocol = 1;
		io.transports = [];
		io.j = [];
		io.sockets = {};
		io.connect = function (host, details) {
			var uri = io.util.parseUri(host),
			uuri,
			socket;
			if (global && global.location) {
				uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
				uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
				uri.port = uri.port || global.location.port
			}
			uuri = io.util.uniqueUri(uri);
			var options = {
				host : uri.host,
				secure : "https" == uri.protocol,
				port : uri.port || ("https" == uri.protocol ? 443 : 80),
				query : uri.query || ""
			};
			io.util.merge(options, details);
			if (options["force new connection"] || !io.sockets[uuri]) {
				socket = new io.Socket(options)
			}
			if (!options["force new connection"] && socket) {
				io.sockets[uuri] = socket
			}
			socket = socket || io.sockets[uuri];
			return socket.of(uri.path.length > 1 ? uri.path : "")
		}
	})("object" === typeof module ? module.exports : this.io = {}, this);
	(function (exports, global) {
		var util = exports.util = {};
		var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
		var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
		util.parseUri = function (str) {
			var m = re.exec(str || ""),
			uri = {},
			i = 14;
			while (i--) {
				uri[parts[i]] = m[i] || ""
			}
			return uri
		};
		util.uniqueUri = function (uri) {
			var protocol = uri.protocol,
			host = uri.host,
			port = uri.port;
			if ("document" in global) {
				host = host || document.domain;
				port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
			} else {
				host = host || "localhost";
				if (!port && protocol == "https") {
					port = 443
				}
			}
			return (protocol || "http") + "://" + host + ":" + (port || 80)
		};
		util.query = function (base, addition) {
			var query = util.chunkQuery(base || ""),
			components = [];
			util.merge(query, util.chunkQuery(addition || ""));
			for (var part in query) {
				if (query.hasOwnProperty(part)) {
					components.push(part + "=" + query[part])
				}
			}
			return components.length ? "?" + components.join("&") : ""
		};
		util.chunkQuery = function (qs) {
			var query = {},
			params = qs.split("&"),
			i = 0,
			l = params.length,
			kv;
			for (; i < l; ++i) {
				kv = params[i].split("=");
				if (kv[0]) {
					query[kv[0]] = kv[1]
				}
			}
			return query
		};
		var pageLoaded = false;
		util.load = function (fn) {
			if ("document" in global && document.readyState === "complete" || pageLoaded) {
				return fn()
			}
			util.on(global, "load", fn, false)
		};
		util.on = function (element, event, fn, capture) {
			if (element.attachEvent) {
				element.attachEvent("on" + event, fn)
			} else if (element.addEventListener) {
				element.addEventListener(event, fn, capture)
			}
		};
		util.request = function (xdomain) {
			if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
				return new XDomainRequest
			}
			if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
				return new XMLHttpRequest
			}
			if (!xdomain) {
				try {
					return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
				} catch (e) {}

			}
			return null
		};
		if ("undefined" != typeof window) {
			util.load(function () {
				pageLoaded = true
			})
		}
		util.defer = function (fn) {
			if (!util.ua.webkit || "undefined" != typeof importScripts) {
				return fn()
			}
			util.load(function () {
				setTimeout(fn, 100)
			})
		};
		util.merge = function merge(target, additional, deep, lastseen) {
			var seen = lastseen || [],
			depth = typeof deep == "undefined" ? 2 : deep,
			prop;
			for (prop in additional) {
				if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
					if (typeof target[prop] !== "object" || !depth) {
						target[prop] = additional[prop];
						seen.push(additional[prop])
					} else {
						util.merge(target[prop], additional[prop], depth - 1, seen)
					}
				}
			}
			return target
		};
		util.mixin = function (ctor, ctor2) {
			util.merge(ctor.prototype, ctor2.prototype)
		};
		util.inherit = function (ctor, ctor2) {
			function f() {}

			f.prototype = ctor2.prototype;
			ctor.prototype = new f
		};
		util.isArray = Array.isArray || function (obj) {
			return Object.prototype.toString.call(obj) === "[object Array]"
		};
		util.intersect = function (arr, arr2) {
			var ret = [],
			longest = arr.length > arr2.length ? arr : arr2,
			shortest = arr.length > arr2.length ? arr2 : arr;
			for (var i = 0, l = shortest.length; i < l; i++) {
				if (~util.indexOf(longest, shortest[i]))
					ret.push(shortest[i])
			}
			return ret
		};
		util.indexOf = function (arr, o, i) {
			for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}

			return j <= i ? -1 : i
		};
		util.toArray = function (enu) {
			var arr = [];
			for (var i = 0, l = enu.length; i < l; i++)
				arr.push(enu[i]);
			return arr
		};
		util.ua = {};
		util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
			try {
				var a = new XMLHttpRequest
			} catch (e) {
				return false
			}
			return a.withCredentials != undefined
		}
		();
		util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
		util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
	})("undefined" != typeof io ? io : module.exports, this);
	(function (exports, io) {
		exports.EventEmitter = EventEmitter;
		function EventEmitter() {}

		EventEmitter.prototype.on = function (name, fn) {
			if (!this.$events) {
				this.$events = {}

			}
			if (!this.$events[name]) {
				this.$events[name] = fn
			} else if (io.util.isArray(this.$events[name])) {
				this.$events[name].push(fn)
			} else {
				this.$events[name] = [this.$events[name], fn]
			}
			return this
		};
		EventEmitter.prototype.addListener = EventEmitter.prototype.on;
		EventEmitter.prototype.once = function (name, fn) {
			var self = this;
			function on() {
				self.removeListener(name, on);
				fn.apply(this, arguments)
			}
			on.listener = fn;
			this.on(name, on);
			return this
		};
		EventEmitter.prototype.removeListener = function (name, fn) {
			if (this.$events && this.$events[name]) {
				var list = this.$events[name];
				if (io.util.isArray(list)) {
					var pos = -1;
					for (var i = 0, l = list.length; i < l; i++) {
						if (list[i] === fn || list[i].listener && list[i].listener === fn) {
							pos = i;
							break
						}
					}
					if (pos < 0) {
						return this
					}
					list.splice(pos, 1);
					if (!list.length) {
						delete this.$events[name]
					}
				} else if (list === fn || list.listener && list.listener === fn) {
					delete this.$events[name]
				}
			}
			return this
		};
		EventEmitter.prototype.removeAllListeners = function (name) {
			if (name === undefined) {
				this.$events = {};
				return this
			}
			if (this.$events && this.$events[name]) {
				this.$events[name] = null
			}
			return this
		};
		EventEmitter.prototype.listeners = function (name) {
			if (!this.$events) {
				this.$events = {}

			}
			if (!this.$events[name]) {
				this.$events[name] = []
			}
			if (!io.util.isArray(this.$events[name])) {
				this.$events[name] = [this.$events[name]]
			}
			return this.$events[name]
		};
		EventEmitter.prototype.emit = function (name) {
			if (!this.$events) {
				return false
			}
			var handler = this.$events[name];
			if (!handler) {
				return false
			}
			var args = Array.prototype.slice.call(arguments, 1);
			if ("function" == typeof handler) {
				handler.apply(this, args)
			} else if (io.util.isArray(handler)) {
				var listeners = handler.slice();
				for (var i = 0, l = listeners.length; i < l; i++) {
					listeners[i].apply(this, args)
				}
			} else {
				return false
			}
			return true
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function (exports, nativeJSON) {
		"use strict";
		if (nativeJSON && nativeJSON.parse) {
			return exports.JSON = {
				parse : nativeJSON.parse,
				stringify : nativeJSON.stringify
			}
		}
		var JSON = exports.JSON = {};
		function f(n) {
			return n < 10 ? "0" + n : n
		}
		function date(d, key) {
			return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
		}
		var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		gap,
		indent,
		meta = {
			"\b" : "\\b",
			"\t" : "\\t",
			"\n" : "\\n",
			"\f" : "\\f",
			"\r" : "\\r",
			'"' : '\\"',
			"\\" : "\\\\"
		},
		rep;
		function quote(string) {
			escapable.lastIndex = 0;
			return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
				var c = meta[a];
				return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + string + '"'
		}
		function str(key, holder) {
			var i,
			k,
			v,
			length,
			mind = gap,
			partial,
			value = holder[key];
			if (value instanceof Date) {
				value = date(key)
			}
			if (typeof rep === "function") {
				value = rep.call(holder, key, value)
			}
			switch (typeof value) {
			case "string":
				return quote(value);
			case "number":
				return isFinite(value) ? String(value) : "null";
			case "boolean":
			case "null":
				return String(value);
			case "object":
				if (!value) {
					return "null"
				}
				gap += indent;
				partial = [];
				if (Object.prototype.toString.apply(value) === "[object Array]") {
					length = value.length;
					for (i = 0; i < length; i += 1) {
						partial[i] = str(i, value) || "null"
					}
					v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
					gap = mind;
					return v
				}
				if (rep && typeof rep === "object") {
					length = rep.length;
					for (i = 0; i < length; i += 1) {
						if (typeof rep[i] === "string") {
							k = rep[i];
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ": " : ":") + v)
							}
						}
					}
				} else {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ": " : ":") + v)
							}
						}
					}
				}
				v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
				gap = mind;
				return v
			}
		}
		JSON.stringify = function (value, replacer, space) {
			var i;
			gap = "";
			indent = "";
			if (typeof space === "number") {
				for (i = 0; i < space; i += 1) {
					indent += " "
				}
			} else if (typeof space === "string") {
				indent = space
			}
			rep = replacer;
			if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
				throw new Error("JSON.stringify")
			}
			return str("", {
				"" : value
			})
		};
		JSON.parse = function (text, reviver) {
			var j;
			function walk(holder, key) {
				var k,
				v,
				value = holder[key];
				if (value && typeof value === "object") {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v
							} else {
								delete value[k]
							}
						}
					}
				}
				return reviver.call(holder, key, value)
			}
			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function (a) {
						return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
					})
			}
			if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
				j = eval("(" + text + ")");
				return typeof reviver === "function" ? walk({
					"" : j
				}, "") : j
			}
			throw new SyntaxError("JSON.parse")
		}
	})("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
	(function (exports, io) {
		var parser = exports.parser = {};
		var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
		var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
		var advice = parser.advice = ["reconnect"];
		var JSON = io.JSON,
		indexOf = io.util.indexOf;
		parser.encodePacket = function (packet) {
			var type = indexOf(packets, packet.type),
			id = packet.id || "",
			endpoint = packet.endpoint || "",
			ack = packet.ack,
			data = null;
			switch (packet.type) {
			case "error":
				var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
				adv = packet.advice ? indexOf(advice, packet.advice) : "";
				if (reason !== "" || adv !== "")
					data = reason + (adv !== "" ? "+" + adv : "");
				break;
			case "message":
				if (packet.data !== "")
					data = packet.data;
				break;
			case "event":
				var ev = {
					name : packet.name
				};
				if (packet.args && packet.args.length) {
					ev.args = packet.args
				}
				data = JSON.stringify(ev);
				break;
			case "json":
				data = JSON.stringify(packet.data);
				break;
			case "connect":
				if (packet.qs)
					data = packet.qs;
				break;
			case "ack":
				data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
				break
			}
			var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
			if (data !== null && data !== undefined)
				encoded.push(data);
			return encoded.join(":")
		};
		parser.encodePayload = function (packets) {
			var decoded = "";
			if (packets.length == 1)
				return packets[0];
			for (var i = 0, l = packets.length; i < l; i++) {
				var packet = packets[i];
				decoded += "�" + packet.length + "�" + packets[i]
			}
			return decoded
		};
		var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
		parser.decodePacket = function (data) {
			var pieces = data.match(regexp);
			if (!pieces)
				return {};
			var id = pieces[2] || "",
			data = pieces[5] || "",
			packet = {
				type : packets[pieces[1]],
				endpoint : pieces[4] || ""
			};
			if (id) {
				packet.id = id;
				if (pieces[3])
					packet.ack = "data";
				else
					packet.ack = true
			}
			switch (packet.type) {
			case "error":
				var pieces = data.split("+");
				packet.reason = reasons[pieces[0]] || "";
				packet.advice = advice[pieces[1]] || "";
				break;
			case "message":
				packet.data = data || "";
				break;
			case "event":
				try {
					var opts = JSON.parse(data);
					packet.name = opts.name;
					packet.args = opts.args
				} catch (e) {}

				packet.args = packet.args || [];
				break;
			case "json":
				try {
					packet.data = JSON.parse(data)
				} catch (e) {}

				break;
			case "connect":
				packet.qs = data || "";
				break;
			case "ack":
				var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
				if (pieces) {
					packet.ackId = pieces[1];
					packet.args = [];
					if (pieces[3]) {
						try {
							packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
						} catch (e) {}

					}
				}
				break;
			case "disconnect":
			case "heartbeat":
				break
			}
			return packet
		};
		parser.decodePayload = function (data) {
			if (data.charAt(0) == "�") {
				var ret = [];
				for (var i = 1, length = ""; i < data.length; i++) {
					if (data.charAt(i) == "�") {
						ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
						i += Number(length) + 1;
						length = ""
					} else {
						length += data.charAt(i)
					}
				}
				return ret
			} else {
				return [parser.decodePacket(data)]
			}
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function (exports, io) {
		exports.Transport = Transport;
		function Transport(socket, sessid) {
			this.socket = socket;
			this.sessid = sessid
		}
		io.util.mixin(Transport, io.EventEmitter);
		Transport.prototype.heartbeats = function () {
			return true
		};
		Transport.prototype.onData = function (data) {
			this.clearCloseTimeout();
			if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
				this.setCloseTimeout()
			}
			if (data !== "") {
				var msgs = io.parser.decodePayload(data);
				if (msgs && msgs.length) {
					for (var i = 0, l = msgs.length; i < l; i++) {
						this.onPacket(msgs[i])
					}
				}
			}
			return this
		};
		Transport.prototype.onPacket = function (packet) {
			this.socket.setHeartbeatTimeout();
			if (packet.type == "heartbeat") {
				return this.onHeartbeat()
			}
			if (packet.type == "connect" && packet.endpoint == "") {
				this.onConnect()
			}
			if (packet.type == "error" && packet.advice == "reconnect") {
				this.isOpen = false
			}
			this.socket.onPacket(packet);
			return this
		};
		Transport.prototype.setCloseTimeout = function () {
			if (!this.closeTimeout) {
				var self = this;
				this.closeTimeout = setTimeout(function () {
						self.onDisconnect()
					}, this.socket.closeTimeout)
			}
		};
		Transport.prototype.onDisconnect = function () {
			if (this.isOpen)
				this.close();
			this.clearTimeouts();
			this.socket.onDisconnect();
			return this
		};
		Transport.prototype.onConnect = function () {
			this.socket.onConnect();
			return this
		};
		Transport.prototype.clearCloseTimeout = function () {
			if (this.closeTimeout) {
				clearTimeout(this.closeTimeout);
				this.closeTimeout = null
			}
		};
		Transport.prototype.clearTimeouts = function () {
			this.clearCloseTimeout();
			if (this.reopenTimeout) {
				clearTimeout(this.reopenTimeout)
			}
		};
		Transport.prototype.packet = function (packet) {
			this.send(io.parser.encodePacket(packet))
		};
		Transport.prototype.onHeartbeat = function (heartbeat) {
			this.packet({
				type : "heartbeat"
			})
		};
		Transport.prototype.onOpen = function () {
			this.isOpen = true;
			this.clearCloseTimeout();
			this.socket.onOpen()
		};
		Transport.prototype.onClose = function () {
			var self = this;
			this.isOpen = false;
			this.socket.onClose();
			this.onDisconnect()
		};
		Transport.prototype.prepareUrl = function () {
			var options = this.socket.options;
			return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
		};
		Transport.prototype.ready = function (socket, fn) {
			fn.call(this)
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function (exports, io, global) {
		exports.Socket = Socket;
		function Socket(options) {
			this.options = {
				port : 80,
				secure : false,
				document : "document" in global ? document : false,
				resource : "socket.io",
				transports : io.transports,
				"connect timeout" : 1e4,
				"try multiple transports" : true,
				reconnect : true,
				"reconnection delay" : 500,
				"reconnection limit" : Infinity,
				"reopen delay" : 3e3,
				"max reconnection attempts" : 10,
				"sync disconnect on unload" : false,
				"auto connect" : true,
				"flash policy port" : 10843,
				manualFlush : false
			};
			io.util.merge(this.options, options);
			this.connected = false;
			this.open = false;
			this.connecting = false;
			this.reconnecting = false;
			this.namespaces = {};
			this.buffer = [];
			this.doBuffer = false;
			if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
				var self = this;
				io.util.on(global, "beforeunload", function () {
					self.disconnectSync()
				}, false)
			}
			if (this.options["auto connect"]) {
				this.connect()
			}
		}
		io.util.mixin(Socket, io.EventEmitter);
		Socket.prototype.of = function (name) {
			if (!this.namespaces[name]) {
				this.namespaces[name] = new io.SocketNamespace(this, name);
				if (name !== "") {
					this.namespaces[name].packet({
						type : "connect"
					})
				}
			}
			return this.namespaces[name]
		};
		Socket.prototype.publish = function () {
			this.emit.apply(this, arguments);
			var nsp;
			for (var i in this.namespaces) {
				if (this.namespaces.hasOwnProperty(i)) {
					nsp = this.of(i);
					nsp.$emit.apply(nsp, arguments)
				}
			}
		};
		function empty() {}

		Socket.prototype.handshake = function (fn) {
			var self = this,
			options = this.options;
			function complete(data) {
				if (data instanceof Error) {
					self.connecting = false;
					self.onError(data.message)
				} else {
					fn.apply(null, data.split(":"))
				}
			}
			var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" +  + (new Date))].join("/");
			if (this.isXDomain() && !io.util.ua.hasCORS) {
				var insertAt = document.getElementsByTagName("script")[0],
				script = document.createElement("script");
				script.src = url + "&jsonp=" + io.j.length;
				insertAt.parentNode.insertBefore(script, insertAt);
				io.j.push(function (data) {
					complete(data);
					script.parentNode.removeChild(script)
				})
			} else {
				var xhr = io.util.request();
				xhr.open("GET", url, true);
				if (this.isXDomain()) {
					xhr.withCredentials = true
				}
				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {
						xhr.onreadystatechange = empty;
						if (xhr.status == 200) {
							complete(xhr.responseText)
						} else if (xhr.status == 403) {
							self.onError(xhr.responseText)
						} else {
							self.connecting = false;
							!self.reconnecting && self.onError(xhr.responseText)
						}
					}
				};
				xhr.send(null)
			}
		};
		Socket.prototype.getTransport = function (override) {
			var transports = override || this.transports,
			match;
			for (var i = 0, transport; transport = transports[i]; i++) {
				if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
					return new io.Transport[transport](this, this.sessionid)
				}
			}
			return null
		};
		Socket.prototype.connect = function (fn) {
			if (this.connecting && this.transports != "jsonp-polling") {
				return this
			}
			var self = this;
			self.connecting = true;
			this.handshake(function (sid, heartbeat, close, transports) {
				self.sessionid = sid;
				self.closeTimeout = close * 1e3;
				self.heartbeatTimeout = heartbeat * 1e3;
				var check = function () {
					return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
				};
				if (!check()) {
					transports = "jsonp-polling"
				}
				if (!self.transports)
					self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
				self.setHeartbeatTimeout();
				function connect(transports) {
					if (self.transport)
						self.transport.clearTimeouts();
					self.transport = self.getTransport(transports);
					if (!self.transport)
						return self.publish("connect_failed");
					self.transport.ready(self, function () {
						self.connecting = true;
						self.publish("connecting", self.transport.name);
						self.transport.open();
						if (self.options["connect timeout"]) {
							self.connectTimeoutTimer = setTimeout(function () {
									if (!self.connected) {
										self.connecting = false;
										if (self.options["try multiple transports"]) {
											var remaining = self.transports;
											while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}

											if (remaining.length) {
												connect(remaining)
											} else {
												self.publish("connect_failed")
											}
										}
									}
								}, self.options["connect timeout"])
						}
					})
				}
				connect(self.transports);
				self.once("connect", function () {
					clearTimeout(self.connectTimeoutTimer);
					fn && typeof fn == "function" && fn()
				})
			});
			return this
		};
		Socket.prototype.setHeartbeatTimeout = function () {
			clearTimeout(this.heartbeatTimeoutTimer);
			if (this.transport && !this.transport.heartbeats())
				return;
			var self = this;
			this.heartbeatTimeoutTimer = setTimeout(function () {
					self.transport.onClose()
				}, this.heartbeatTimeout)
		};
		Socket.prototype.packet = function (data) {
			if (this.connected && !this.doBuffer) {
				this.transport.packet(data)
			} else {
				this.buffer.push(data)
			}
			return this
		};
		Socket.prototype.setBuffer = function (v) {
			this.doBuffer = v;
			if (!v && this.connected && this.buffer.length) {
				if (!this.options["manualFlush"]) {
					this.flushBuffer()
				}
			}
		};
		Socket.prototype.flushBuffer = function () {
			this.transport.payload(this.buffer);
			this.buffer = []
		};
		Socket.prototype.disconnect = function () {
			if (this.connected || this.connecting) {
				if (this.open) {
					this.of("").packet({
						type : "disconnect"
					})
				}
				this.onDisconnect("booted")
			}
			return this
		};
		Socket.prototype.disconnectSync = function () {
			var xhr = io.util.request();
			var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
			xhr.open("GET", uri, false);
			xhr.send(null);
			this.onDisconnect("booted")
		};
		Socket.prototype.isXDomain = function () {
			var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
			return this.options.host !== global.location.hostname || this.options.port != port
		};
		Socket.prototype.onConnect = function () {
			if (!this.connected) {
				this.connected = true;
				this.connecting = false;
				if (!this.doBuffer) {
					this.setBuffer(false)
				}
				this.emit("connect")
			}
		};
		Socket.prototype.onOpen = function () {
			this.open = true
		};
		Socket.prototype.onClose = function () {
			this.open = false;
			clearTimeout(this.heartbeatTimeoutTimer)
		};
		Socket.prototype.onPacket = function (packet) {
			this.of(packet.endpoint).onPacket(packet)
		};
		Socket.prototype.onError = function (err) {
			if (err && err.advice) {
				if (err.advice === "reconnect" && (this.connected || this.connecting)) {
					this.disconnect();
					if (this.options.reconnect) {
						this.reconnect()
					}
				}
			}
			this.publish("error", err && err.reason ? err.reason : err)
		};
		Socket.prototype.onDisconnect = function (reason) {
			var wasConnected = this.connected,
			wasConnecting = this.connecting;
			this.connected = false;
			this.connecting = false;
			this.open = false;
			if (wasConnected || wasConnecting) {
				this.transport.close();
				this.transport.clearTimeouts();
				if (wasConnected) {
					this.publish("disconnect", reason);
					if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
						this.reconnect()
					}
				}
			}
		};
		Socket.prototype.reconnect = function () {
			this.reconnecting = true;
			this.reconnectionAttempts = 0;
			this.reconnectionDelay = this.options["reconnection delay"];
			var self = this,
			maxAttempts = this.options["max reconnection attempts"],
			tryMultiple = this.options["try multiple transports"],
			limit = this.options["reconnection limit"];
			function reset() {
				if (self.connected) {
					for (var i in self.namespaces) {
						if (self.namespaces.hasOwnProperty(i) && "" !== i) {
							self.namespaces[i].packet({
								type : "connect"
							})
						}
					}
					self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
				}
				clearTimeout(self.reconnectionTimer);
				self.removeListener("connect_failed", maybeReconnect);
				self.removeListener("connect", maybeReconnect);
				self.reconnecting = false;
				delete self.reconnectionAttempts;
				delete self.reconnectionDelay;
				delete self.reconnectionTimer;
				delete self.redoTransports;
				self.options["try multiple transports"] = tryMultiple
			}
			function maybeReconnect() {
				if (!self.reconnecting) {
					return
				}
				if (self.connected) {
					return reset()
				}
				if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
					return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
				}
				if (self.reconnectionAttempts++ >= maxAttempts) {
					if (!self.redoTransports) {
						self.on("connect_failed", maybeReconnect);
						self.options["try multiple transports"] = true;
						self.transports = self.origTransports;
						self.transport = self.getTransport();
						self.redoTransports = true;
						self.connect()
					} else {
						self.publish("reconnect_failed");
						reset()
					}
				} else {
					if (self.reconnectionDelay < limit) {
						self.reconnectionDelay *= 2
					}
					self.connect();
					self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
					self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
				}
			}
			this.options["try multiple transports"] = false;
			this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
			this.on("connect", maybeReconnect)
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function (exports, io) {
		exports.SocketNamespace = SocketNamespace;
		function SocketNamespace(socket, name) {
			this.socket = socket;
			this.name = name || "";
			this.flags = {};
			this.json = new Flag(this, "json");
			this.ackPackets = 0;
			this.acks = {}

		}
		io.util.mixin(SocketNamespace, io.EventEmitter);
		SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
		SocketNamespace.prototype.of = function () {
			return this.socket.of.apply(this.socket, arguments)
		};
		SocketNamespace.prototype.packet = function (packet) {
			packet.endpoint = this.name;
			this.socket.packet(packet);
			this.flags = {};
			return this
		};
		SocketNamespace.prototype.send = function (data, fn) {
			var packet = {
				type : this.flags.json ? "json" : "message",
				data : data
			};
			if ("function" == typeof fn) {
				packet.id = ++this.ackPackets;
				packet.ack = true;
				this.acks[packet.id] = fn
			}
			return this.packet(packet)
		};
		SocketNamespace.prototype.emit = function (name) {
			var args = Array.prototype.slice.call(arguments, 1),
			lastArg = args[args.length - 1],
			packet = {
				type : "event",
				name : name
			};
			if ("function" == typeof lastArg) {
				packet.id = ++this.ackPackets;
				packet.ack = "data";
				this.acks[packet.id] = lastArg;
				args = args.slice(0, args.length - 1)
			}
			packet.args = args;
			return this.packet(packet)
		};
		SocketNamespace.prototype.disconnect = function () {
			if (this.name === "") {
				this.socket.disconnect()
			} else {
				this.packet({
					type : "disconnect"
				});
				this.$emit("disconnect")
			}
			return this
		};
		SocketNamespace.prototype.onPacket = function (packet) {
			var self = this;
			function ack() {
				self.packet({
					type : "ack",
					args : io.util.toArray(arguments),
					ackId : packet.id
				})
			}
			switch (packet.type) {
			case "connect":
				this.$emit("connect");
				break;
			case "disconnect":
				if (this.name === "") {
					this.socket.onDisconnect(packet.reason || "booted")
				} else {
					this.$emit("disconnect", packet.reason)
				}
				break;
			case "message":
			case "json":
				var params = ["message", packet.data];
				if (packet.ack == "data") {
					params.push(ack)
				} else if (packet.ack) {
					this.packet({
						type : "ack",
						ackId : packet.id
					})
				}
				this.$emit.apply(this, params);
				break;
			case "event":
				var params = [packet.name].concat(packet.args);
				if (packet.ack == "data")
					params.push(ack);
				this.$emit.apply(this, params);
				break;
			case "ack":
				if (this.acks[packet.ackId]) {
					this.acks[packet.ackId].apply(this, packet.args);
					delete this.acks[packet.ackId]
				}
				break;
			case "error":
				if (packet.advice) {
					this.socket.onError(packet)
				} else {
					if (packet.reason == "unauthorized") {
						this.$emit("connect_failed", packet.reason)
					} else {
						this.$emit("error", packet.reason)
					}
				}
				break
			}
		};
		function Flag(nsp, name) {
			this.namespace = nsp;
			this.name = name
		}
		Flag.prototype.send = function () {
			this.namespace.flags[this.name] = true;
			this.namespace.send.apply(this.namespace, arguments)
		};
		Flag.prototype.emit = function () {
			this.namespace.flags[this.name] = true;
			this.namespace.emit.apply(this.namespace, arguments)
		}
	})("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function (exports, io, global) {
		exports.websocket = WS;
		function WS(socket) {
			io.Transport.apply(this, arguments)
		}
		io.util.inherit(WS, io.Transport);
		WS.prototype.name = "websocket";
		WS.prototype.open = function () {
			var query = io.util.query(this.socket.options.query),
			self = this,
			Socket;
			if (!Socket) {
				Socket = global.MozWebSocket || global.WebSocket
			}
			this.websocket = new Socket(this.prepareUrl() + query);
			this.websocket.onopen = function () {
				self.onOpen();
				self.socket.setBuffer(false)
			};
			this.websocket.onmessage = function (ev) {
				self.onData(ev.data)
			};
			this.websocket.onclose = function () {
				self.onClose();
				self.socket.setBuffer(true)
			};
			this.websocket.onerror = function (e) {
				self.onError(e)
			};
			return this
		};
		if (io.util.ua.iDevice) {
			WS.prototype.send = function (data) {
				var self = this;
				setTimeout(function () {
					self.websocket.send(data)
				}, 0);
				return this
			}
		} else {
			WS.prototype.send = function (data) {
				this.websocket.send(data);
				return this
			}
		}
		WS.prototype.payload = function (arr) {
			for (var i = 0, l = arr.length; i < l; i++) {
				this.packet(arr[i])
			}
			return this
		};
		WS.prototype.close = function () {
			this.websocket.close();
			return this
		};
		WS.prototype.onError = function (e) {
			this.socket.onError(e)
		};
		WS.prototype.scheme = function () {
			return this.socket.options.secure ? "wss" : "ws"
		};
		WS.check = function () {
			return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
		};
		WS.xdomainCheck = function () {
			return true
		};
		io.transports.push("websocket")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function (exports, io) {
		exports.flashsocket = Flashsocket;
		function Flashsocket() {
			io.Transport.websocket.apply(this, arguments)
		}
		io.util.inherit(Flashsocket, io.Transport.websocket);
		Flashsocket.prototype.name = "flashsocket";
		Flashsocket.prototype.open = function () {
			var self = this,
			args = arguments;
			WebSocket.Ir(function () {
				io.Transport.websocket.prototype.open.apply(self, args)
			});
			return this
		};
		Flashsocket.prototype.send = function () {
			var self = this,
			args = arguments;
			WebSocket.Ir(function () {
				io.Transport.websocket.prototype.send.apply(self, args)
			});
			return this
		};
		Flashsocket.prototype.close = function () {
			WebSocket.Dx.length = 0;
			io.Transport.websocket.prototype.close.call(this);
			return this
		};
		Flashsocket.prototype.ready = function (socket, fn) {
			function init() {
				var options = socket.options,
				port = options["flash policy port"],
				path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
				if (!Flashsocket.loaded) {
					if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
						WEB_SOCKET_SWF_LOCATION = path.join("/")
					}
					if (port !== 843) {
						WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
					}
					WebSocket.QM();
					Flashsocket.loaded = true
				}
				fn.call(self)
			}
			var self = this;
			if (document.body)
				return init();
			io.util.load(init)
		};
		Flashsocket.check = function () {
			if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject)
				return false;
			return swfobject.getFlashPlayerVersion().major >= 10
		};
		Flashsocket.xdomainCheck = function () {
			return true
		};
		if (typeof window != "undefined") {
			WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
		}
		io.transports.push("flashsocket")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	if ("undefined" != typeof window) {
		var swfobject = function () {
			var D = "undefined",
			r = "object",
			S = "Shockwave Flash",
			W = "ShockwaveFlash.ShockwaveFlash",
			q = "application/x-shockwave-flash",
			R = "SWFObjectExprInst",
			x = "onreadystatechange",
			O = window,
			j = document,
			t = navigator,
			T = false,
			U = [h],
			o = [],
			N = [],
			I = [],
			l,
			Q,
			E,
			B,
			J = false,
			a = false,
			n,
			G,
			m = true,
			M = function () {
				var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
				ah = t.userAgent.toLowerCase(),
				Y = t.platform.toLowerCase(),
				ae = Y ? /win/.test(Y) : /win/.test(ah),
				ac = Y ? /mac/.test(Y) : /mac/.test(ah),
				af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
				X = ! + "1",
				ag = [0, 0, 0],
				ab = null;
				if (typeof t.plugins != D && typeof t.plugins[S] == r) {
					ab = t.plugins[S].description;
					if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
						T = true;
						X = false;
						ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
						ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
						ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
						ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
					}
				} else {
					if (typeof O[["Active"].concat("Object").join("X")] != D) {
						try {
							var ad = new(window[["Active"].concat("Object").join("X")])(W);
							if (ad) {
								ab = ad.GetVariable("$version");
								if (ab) {
									X = true;
									ab = ab.split(" ")[1].split(",");
									ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
								}
							}
						} catch (Z) {}

					}
				}
				return {
					w3 : aa,
					pv : ag,
					wk : af,
					ie : X,
					win : ae,
					mac : ac
				}
			}
			(),
			k = function () {
				if (!M.w3) {
					return
				}
				if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
					f()
				}
				if (!J) {
					if (typeof j.addEventListener != D) {
						j.addEventListener("DOMContentLoaded", f, false)
					}
					if (M.ie && M.win) {
						j.attachEvent(x, function () {
							if (j.readyState == "complete") {
								j.detachEvent(x, arguments.callee);
								f()
							}
						});
						if (O == top) {
							(function () {
								if (J) {
									return
								}
								try {
									j.documentElement.doScroll("left")
								} catch (X) {
									setTimeout(arguments.callee, 0);
									return
								}
								f()
							})()
						}
					}
					if (M.wk) {
						(function () {
							if (J) {
								return
							}
							if (!/loaded|complete/.test(j.readyState)) {
								setTimeout(arguments.callee, 0);
								return
							}
							f()
						})()
					}
					s(f)
				}
			}
			();
			function f() {
				if (J) {
					return
				}
				try {
					var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
					Z.parentNode.removeChild(Z)
				} catch (aa) {
					return
				}
				J = true;
				var X = U.length;
				for (var Y = 0; Y < X; Y++) {
					U[Y]()
				}
			}
			function K(X) {
				if (J) {
					X()
				} else {
					U[U.length] = X
				}
			}
			function s(Y) {
				if (typeof O.addEventListener != D) {
					O.addEventListener("load", Y, false)
				} else {
					if (typeof j.addEventListener != D) {
						j.addEventListener("load", Y, false)
					} else {
						if (typeof O.attachEvent != D) {
							i(O, "onload", Y)
						} else {
							if (typeof O.onload == "function") {
								var X = O.onload;
								O.onload = function () {
									X();
									Y()
								}
							} else {
								O.onload = Y
							}
						}
					}
				}
			}
			function h() {
				if (T) {
					V()
				} else {
					H()
				}
			}
			function V() {
				var X = j.getElementsByTagName("body")[0];
				var aa = C(r);
				aa.setAttribute("type", q);
				var Z = X.appendChild(aa);
				if (Z) {
					var Y = 0;
					(function () {
						if (typeof Z.GetVariable != D) {
							var ab = Z.GetVariable("$version");
							if (ab) {
								ab = ab.split(" ")[1].split(",");
								M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
							}
						} else {
							if (Y < 10) {
								Y++;
								setTimeout(arguments.callee, 10);
								return
							}
						}
						X.removeChild(aa);
						Z = null;
						H()
					})()
				} else {
					H()
				}
			}
			function H() {
				var ag = o.length;
				if (ag > 0) {
					for (var af = 0; af < ag; af++) {
						var Y = o[af].id;
						var ab = o[af].callbackFn;
						var aa = {
							success : false,
							id : Y
						};
						if (M.pv[0] > 0) {
							var ae = c(Y);
							if (ae) {
								if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
									w(Y, true);
									if (ab) {
										aa.success = true;
										aa.ref = z(Y);
										ab(aa)
									}
								} else {
									if (o[af].expressInstall && A()) {
										var ai = {};
										ai.data = o[af].expressInstall;
										ai.width = ae.getAttribute("width") || "0";
										ai.height = ae.getAttribute("height") || "0";
										if (ae.getAttribute("class")) {
											ai.styleclass = ae.getAttribute("class")
										}
										if (ae.getAttribute("align")) {
											ai.align = ae.getAttribute("align")
										}
										var ah = {};
										var X = ae.getElementsByTagName("param");
										var ac = X.length;
										for (var ad = 0; ad < ac; ad++) {
											if (X[ad].getAttribute("name").toLowerCase() != "movie") {
												ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
											}
										}
										P(ai, ah, Y, ab)
									} else {
										p(ae);
										if (ab) {
											ab(aa)
										}
									}
								}
							}
						} else {
							w(Y, true);
							if (ab) {
								var Z = z(Y);
								if (Z && typeof Z.SetVariable != D) {
									aa.success = true;
									aa.ref = Z
								}
								ab(aa)
							}
						}
					}
				}
			}
			function z(aa) {
				var X = null;
				var Y = c(aa);
				if (Y && Y.nodeName == "OBJECT") {
					if (typeof Y.SetVariable != D) {
						X = Y
					} else {
						var Z = Y.getElementsByTagName(r)[0];
						if (Z) {
							X = Z
						}
					}
				}
				return X
			}
			function A() {
				return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
			}
			function P(aa, ab, X, Z) {
				a = true;
				E = Z || null;
				B = {
					success : false,
					id : X
				};
				var ae = c(X);
				if (ae) {
					if (ae.nodeName == "OBJECT") {
						l = g(ae);
						Q = null
					} else {
						l = ae;
						Q = X
					}
					aa.id = R;
					if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
						aa.width = "310"
					}
					if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
						aa.height = "137"
					}
					j.title = j.title.slice(0, 47) + " - Flash Player Installation";
					var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
					ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
					if (typeof ab.flashvars != D) {
						ab.flashvars += "&" + ac
					} else {
						ab.flashvars = ac
					}
					if (M.ie && M.win && ae.readyState != 4) {
						var Y = C("div");
						X += "SWFObjectNew";
						Y.setAttribute("id", X);
						ae.parentNode.insertBefore(Y, ae);
						ae.style.display = "none";
						(function () {
							if (ae.readyState == 4) {
								ae.parentNode.removeChild(ae)
							} else {
								setTimeout(arguments.callee, 10)
							}
						})()
					}
					u(aa, ab, X)
				}
			}
			function p(Y) {
				if (M.ie && M.win && Y.readyState != 4) {
					var X = C("div");
					Y.parentNode.insertBefore(X, Y);
					X.parentNode.replaceChild(g(Y), X);
					Y.style.display = "none";
					(function () {
						if (Y.readyState == 4) {
							Y.parentNode.removeChild(Y)
						} else {
							setTimeout(arguments.callee, 10)
						}
					})()
				} else {
					Y.parentNode.replaceChild(g(Y), Y)
				}
			}
			function g(ab) {
				var aa = C("div");
				if (M.win && M.ie) {
					aa.innerHTML = ab.innerHTML
				} else {
					var Y = ab.getElementsByTagName(r)[0];
					if (Y) {
						var ad = Y.childNodes;
						if (ad) {
							var X = ad.length;
							for (var Z = 0; Z < X; Z++) {
								if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
									aa.appendChild(ad[Z].cloneNode(true))
								}
							}
						}
					}
				}
				return aa
			}
			function u(ai, ag, Y) {
				var X,
				aa = c(Y);
				if (M.wk && M.wk < 312) {
					return X
				}
				if (aa) {
					if (typeof ai.id == D) {
						ai.id = Y
					}
					if (M.ie && M.win) {
						var ah = "";
						for (var ae in ai) {
							if (ai[ae] != Object.prototype[ae]) {
								if (ae.toLowerCase() == "data") {
									ag.movie = ai[ae]
								} else {
									if (ae.toLowerCase() == "styleclass") {
										ah += ' class="' + ai[ae] + '"'
									} else {
										if (ae.toLowerCase() != "classid") {
											ah += " " + ae + '="' + ai[ae] + '"'
										}
									}
								}
							}
						}
						var af = "";
						for (var ad in ag) {
							if (ag[ad] != Object.prototype[ad]) {
								af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
							}
						}
						aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
						N[N.length] = ai.id;
						X = c(ai.id)
					} else {
						var Z = C(r);
						Z.setAttribute("type", q);
						for (var ac in ai) {
							if (ai[ac] != Object.prototype[ac]) {
								if (ac.toLowerCase() == "styleclass") {
									Z.setAttribute("class", ai[ac])
								} else {
									if (ac.toLowerCase() != "classid") {
										Z.setAttribute(ac, ai[ac])
									}
								}
							}
						}
						for (var ab in ag) {
							if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
								e(Z, ab, ag[ab])
							}
						}
						aa.parentNode.replaceChild(Z, aa);
						X = Z
					}
				}
				return X
			}
			function e(Z, X, Y) {
				var aa = C("param");
				aa.setAttribute("name", X);
				aa.setAttribute("value", Y);
				Z.appendChild(aa)
			}
			function y(Y) {
				var X = c(Y);
				if (X && X.nodeName == "OBJECT") {
					if (M.ie && M.win) {
						X.style.display = "none";
						(function () {
							if (X.readyState == 4) {
								b(Y)
							} else {
								setTimeout(arguments.callee, 10)
							}
						})()
					} else {
						X.parentNode.removeChild(X)
					}
				}
			}
			function b(Z) {
				var Y = c(Z);
				if (Y) {
					for (var X in Y) {
						if (typeof Y[X] == "function") {
							Y[X] = null
						}
					}
					Y.parentNode.removeChild(Y)
				}
			}
			function c(Z) {
				var X = null;
				try {
					X = j.getElementById(Z)
				} catch (Y) {}

				return X
			}
			function C(X) {
				return j.createElement(X)
			}
			function i(Z, X, Y) {
				Z.attachEvent(X, Y);
				I[I.length] = [Z, X, Y]
			}
			function F(Z) {
				var Y = M.pv,
				X = Z.split(".");
				X[0] = parseInt(X[0], 10);
				X[1] = parseInt(X[1], 10) || 0;
				X[2] = parseInt(X[2], 10) || 0;
				return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
			}
			function v(ac, Y, ad, ab) {
				if (M.ie && M.mac) {
					return
				}
				var aa = j.getElementsByTagName("head")[0];
				if (!aa) {
					return
				}
				var X = ad && typeof ad == "string" ? ad : "screen";
				if (ab) {
					n = null;
					G = null
				}
				if (!n || G != X) {
					var Z = C("style");
					Z.setAttribute("type", "text/css");
					Z.setAttribute("media", X);
					n = aa.appendChild(Z);
					if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
						n = j.styleSheets[j.styleSheets.length - 1]
					}
					G = X
				}
				if (M.ie && M.win) {
					if (n && typeof n.addRule == r) {
						n.addRule(ac, Y)
					}
				} else {
					if (n && typeof j.createTextNode != D) {
						n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
					}
				}
			}
			function w(Z, X) {
				if (!m) {
					return
				}
				var Y = X ? "visible" : "hidden";
				if (J && c(Z)) {
					c(Z).style.visibility = Y
				} else {
					v("#" + Z, "visibility:" + Y)
				}
			}
			function L(Y) {
				var Z = /[\\\"<>\.;]/;
				var X = Z.exec(Y) != null;
				return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
			}
			var d = function () {
				if (M.ie && M.win) {
					window.attachEvent("onunload", function () {
						var ac = I.length;
						for (var ab = 0; ab < ac; ab++) {
							I[ab][0].detachEvent(I[ab][1], I[ab][2])
						}
						var Z = N.length;
						for (var aa = 0; aa < Z; aa++) {
							y(N[aa])
						}
						for (var Y in M) {
							M[Y] = null
						}
						M = null;
						for (var X in swfobject) {
							swfobject[X] = null
						}
						swfobject = null
					})
				}
			}
			();
			return {
				registerObject : function (ab, X, aa, Z) {
					if (M.w3 && ab && X) {
						var Y = {};
						Y.id = ab;
						Y.swfVersion = X;
						Y.expressInstall = aa;
						Y.callbackFn = Z;
						o[o.length] = Y;
						w(ab, false)
					} else {
						if (Z) {
							Z({
								success : false,
								id : ab
							})
						}
					}
				},
				getObjectById : function (X) {
					if (M.w3) {
						return z(X)
					}
				},
				embedSWF : function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
					var X = {
						success : false,
						id : ah
					};
					if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
						w(ah, false);
						K(function () {
							ae += "";
							ag += "";
							var aj = {};
							if (af && typeof af === r) {
								for (var al in af) {
									aj[al] = af[al]
								}
							}
							aj.data = ab;
							aj.width = ae;
							aj.height = ag;
							var am = {};
							if (ad && typeof ad === r) {
								for (var ak in ad) {
									am[ak] = ad[ak]
								}
							}
							if (Z && typeof Z === r) {
								for (var ai in Z) {
									if (typeof am.flashvars != D) {
										am.flashvars += "&" + ai + "=" + Z[ai]
									} else {
										am.flashvars = ai + "=" + Z[ai]
									}
								}
							}
							if (F(Y)) {
								var an = u(aj, am, ah);
								if (aj.id == ah) {
									w(ah, true)
								}
								X.success = true;
								X.ref = an
							} else {
								if (aa && A()) {
									aj.data = aa;
									P(aj, am, ah, ac);
									return
								} else {
									w(ah, true)
								}
							}
							if (ac) {
								ac(X)
							}
						})
					} else {
						if (ac) {
							ac(X)
						}
					}
				},
				switchOffAutoHideShow : function () {
					m = false
				},
				ua : M,
				getFlashPlayerVersion : function () {
					return {
						major : M.pv[0],
						minor : M.pv[1],
						release : M.pv[2]
					}
				},
				hasFlashPlayerVersion : F,
				createSWF : function (Z, Y, X) {
					if (M.w3) {
						return u(Z, Y, X)
					} else {
						return undefined
					}
				},
				showExpressInstall : function (Z, aa, X, Y) {
					if (M.w3 && A()) {
						P(Z, aa, X, Y)
					}
				},
				removeSWF : function (X) {
					if (M.w3) {
						y(X)
					}
				},
				createCSS : function (aa, Z, Y, X) {
					if (M.w3) {
						v(aa, Z, Y, X)
					}
				},
				addDomLoadEvent : K,
				addLoadEvent : s,
				getQueryParamValue : function (aa) {
					var Z = j.location.search || j.location.hash;
					if (Z) {
						if (/\?/.test(Z)) {
							Z = Z.split("?")[1]
						}
						if (aa == null) {
							return L(Z)
						}
						var Y = Z.split("&");
						for (var X = 0; X < Y.length; X++) {
							if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
								return L(Y[X].substring(Y[X].indexOf("=") + 1))
							}
						}
					}
					return ""
				},
				expressInstallCallback : function () {
					if (a) {
						var X = c(R);
						if (X && l) {
							X.parentNode.replaceChild(l, X);
							if (Q) {
								w(Q, true);
								if (M.ie && M.win) {
									l.style.display = "block"
								}
							}
							if (E) {
								E(B)
							}
						}
						a = false
					}
				}
			}
		}
		()
	}
	(function () {
		if ("undefined" == typeof window || window.WebSocket)
			return;
		var console = window.console;
		if (!console || !console.log || !console.error) {
			console = {
				log : function () {},
				error : function () {}

			}
		}
		if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
			console.error("Flash Player >= 10.0.0 is required.");
			return
		}
		if (location.protocol == "file:") {
			console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
		}
		WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
			var self = this;
			self.hE = WebSocket.bgP++;
			WebSocket.bfh[self.hE] = self;
			self.readyState = WebSocket.CONNECTING;
			self.bufferedAmount = 0;
			self.iT = {};
			if (!protocols) {
				protocols = []
			} else if (typeof protocols == "string") {
				protocols = [protocols]
			}
			setTimeout(function () {
				WebSocket.Ir(function () {
					WebSocket.jv.create(self.hE, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
				})
			}, 0)
		};
		WebSocket.prototype.send = function (data) {
			if (this.readyState == WebSocket.CONNECTING) {
				throw "INVALID_STATE_ERR: Web Socket connection has not been established"
			}
			var result = WebSocket.jv.send(this.hE, encodeURIComponent(data));
			if (result < 0) {
				return true
			} else {
				this.bufferedAmount += result;
				return false
			}
		};
		WebSocket.prototype.close = function () {
			if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
				return
			}
			this.readyState = WebSocket.CLOSING;
			WebSocket.jv.close(this.hE)
		};
		WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
			if (!(type in this.iT)) {
				this.iT[type] = []
			}
			this.iT[type].push(listener)
		};
		WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
			if (!(type in this.iT))
				return;
			var events = this.iT[type];
			for (var i = events.length - 1; i >= 0; --i) {
				if (events[i] === listener) {
					events.splice(i, 1);
					break
				}
			}
		};
		WebSocket.prototype.dispatchEvent = function (event) {
			var events = this.iT[event.type] || [];
			for (var i = 0; i < events.length; ++i) {
				events[i](event)
			}
			var handler = this["on" + event.type];
			if (handler)
				handler(event)
		};
		WebSocket.prototype.bgL = function (flashEvent) {
			if ("readyState" in flashEvent) {
				this.readyState = flashEvent.readyState
			}
			if ("protocol" in flashEvent) {
				this.protocol = flashEvent.protocol
			}
			var jsEvent;
			if (flashEvent.type == "open" || flashEvent.type == "error") {
				jsEvent = this.bfk(flashEvent.type)
			} else if (flashEvent.type == "close") {
				jsEvent = this.bfk("close")
			} else if (flashEvent.type == "message") {
				var data = decodeURIComponent(flashEvent.message);
				jsEvent = this.bgI("message", data)
			} else {
				throw "unknown event type: " + flashEvent.type
			}
			this.dispatchEvent(jsEvent)
		};
		WebSocket.prototype.bfk = function (type) {
			if (document.createEvent && window.Event) {
				var event = document.createEvent("Event");
				event.initEvent(type, false, false);
				return event
			} else {
				return {
					type : type,
					bubbles : false,
					cancelable : false
				}
			}
		};
		WebSocket.prototype.bgI = function (type, data) {
			if (document.createEvent && window.MessageEvent && !window.opera) {
				var event = document.createEvent("MessageEvent");
				event.initMessageEvent("message", false, false, data, null, null, window, null);
				return event
			} else {
				return {
					type : type,
					data : data,
					bubbles : false,
					cancelable : false
				}
			}
		};
		WebSocket.CONNECTING = 0;
		WebSocket.OPEN = 1;
		WebSocket.CLOSING = 2;
		WebSocket.CLOSED = 3;
		WebSocket.jv = null;
		WebSocket.bfh = {};
		WebSocket.Dx = [];
		WebSocket.bgP = 0;
		WebSocket.loadFlashPolicyFile = function (url) {
			WebSocket.Ir(function () {
				WebSocket.jv.loadManualPolicyFile(url)
			})
		};
		WebSocket.QM = function () {
			if (WebSocket.jv)
				return;
			if (WebSocket.bgE) {
				window.WEB_SOCKET_SWF_LOCATION = WebSocket.bgE
			}
			if (!window.WEB_SOCKET_SWF_LOCATION) {
				console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
				return
			}
			var container = document.createElement("div");
			container.id = "webSocketContainer";
			container.style.position = "absolute";
			if (WebSocket.bgB()) {
				container.style.left = "0px";
				container.style.top = "0px"
			} else {
				container.style.left = "-100px";
				container.style.top = "-100px"
			}
			var holder = document.createElement("div");
			holder.id = "webSocketFlash";
			container.appendChild(holder);
			document.body.appendChild(container);
			swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
				hasPriority : true,
				swliveconnect : true,
				allowScriptAccess : "always"
			}, null, function (e) {
				if (!e.success) {
					console.error("[WebSocket] swfobject.embedSWF failed")
				}
			})
		};
		WebSocket.bzM = function () {
			setTimeout(function () {
				WebSocket.jv = document.getElementById("webSocketFlash");
				WebSocket.jv.setCallerUrl(location.href);
				WebSocket.jv.setDebug(!!window.WEB_SOCKET_DEBUG);
				for (var i = 0; i < WebSocket.Dx.length; ++i) {
					WebSocket.Dx[i]()
				}
				WebSocket.Dx = []
			}, 0)
		};
		WebSocket.bzN = function () {
			setTimeout(function () {
				try {
					var events = WebSocket.jv.receiveEvents();
					for (var i = 0; i < events.length; ++i) {
						WebSocket.bfh[events[i].webSocketId].bgL(events[i])
					}
				} catch (e) {
					console.error(e)
				}
			}, 0);
			return true
		};
		WebSocket.bzO = function (message) {
			console.log(decodeURIComponent(message))
		};
		WebSocket.bxe = function (message) {
			console.error(decodeURIComponent(message))
		};
		WebSocket.Ir = function (task) {
			if (WebSocket.jv) {
				task()
			} else {
				WebSocket.Dx.push(task)
			}
		};
		WebSocket.bgB = function () {
			if (!window.navigator || !window.navigator.mimeTypes) {
				return false
			}
			var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
			if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
				return false
			}
			return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
		};
		if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
			if (window.addEventListener) {
				window.addEventListener("load", function () {
					WebSocket.QM()
				}, false)
			} else {
				window.attachEvent("onload", function () {
					WebSocket.QM()
				})
			}
		}
	})();
	(function (exports, io, global) {
		exports.XHR = XHR;
		function XHR(socket) {
			if (!socket)
				return;
			io.Transport.apply(this, arguments);
			this.sendBuffer = []
		}
		io.util.inherit(XHR, io.Transport);
		XHR.prototype.open = function () {
			this.socket.setBuffer(false);
			this.onOpen();
			this.get();
			this.setCloseTimeout();
			return this
		};
		XHR.prototype.payload = function (payload) {
			var msgs = [];
			for (var i = 0, l = payload.length; i < l; i++) {
				msgs.push(io.parser.encodePacket(payload[i]))
			}
			this.send(io.parser.encodePayload(msgs))
		};
		XHR.prototype.send = function (data) {
			this.post(data);
			return this
		};
		function empty() {}

		XHR.prototype.post = function (data) {
			var self = this;
			this.socket.setBuffer(true);
			function stateChange() {
				if (this.readyState == 4) {
					this.onreadystatechange = empty;
					self.posting = false;
					if (this.status == 200) {
						self.socket.setBuffer(false)
					} else {
						self.onClose()
					}
				}
			}
			function onload() {
				this.onload = empty;
				self.socket.setBuffer(false)
			}
			this.sendXHR = this.request("POST");
			if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
				this.sendXHR.onload = this.sendXHR.onerror = onload
			} else {
				this.sendXHR.onreadystatechange = stateChange
			}
			this.sendXHR.send(data)
		};
		XHR.prototype.close = function () {
			this.onClose();
			return this
		};
		XHR.prototype.request = function (method) {
			var req = io.util.request(this.socket.isXDomain()),
			query = io.util.query(this.socket.options.query, "t=" +  + (new Date));
			req.open(method || "GET", this.prepareUrl() + query, true);
			if (method == "POST") {
				try {
					if (req.setRequestHeader) {
						req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
					} else {
						req.contentType = "text/plain"
					}
				} catch (e) {}

			}
			return req
		};
		XHR.prototype.scheme = function () {
			return this.socket.options.secure ? "https" : "http"
		};
		XHR.check = function (socket, xdomain) {
			try {
				var request = io.util.request(xdomain),
				usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
				socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
				isXProtocol = global.location && socketProtocol != global.location.protocol;
				if (request && !(usesXDomReq && isXProtocol)) {
					return true
				}
			} catch (e) {}

			return false
		};
		XHR.xdomainCheck = function (socket) {
			return XHR.check(socket, true)
		}
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function (exports, io) {
		exports.htmlfile = HTMLFile;
		function HTMLFile(socket) {
			io.Transport.XHR.apply(this, arguments)
		}
		io.util.inherit(HTMLFile, io.Transport.XHR);
		HTMLFile.prototype.name = "htmlfile";
		HTMLFile.prototype.get = function () {
			this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
			this.doc.open();
			this.doc.write("<html></html>");
			this.doc.close();
			this.doc.parentWindow.s = this;
			var iframeC = this.doc.createElement("div");
			iframeC.className = "socketio";
			this.doc.body.appendChild(iframeC);
			this.iframe = this.doc.createElement("iframe");
			iframeC.appendChild(this.iframe);
			var self = this,
			query = io.util.query(this.socket.options.query, "t=" +  + (new Date));
			this.iframe.src = this.prepareUrl() + query;
			io.util.on(window, "unload", function () {
				self.destroy()
			})
		};
		HTMLFile.prototype.be = function (data, doc) {
			data = data.replace(/\\\//g, "/");
			this.onData(data);
			try {
				var script = doc.getElementsByTagName("script")[0];
				script.parentNode.removeChild(script)
			} catch (e) {}

		};
		HTMLFile.prototype.destroy = function () {
			if (this.iframe) {
				try {
					this.iframe.src = "about:blank"
				} catch (e) {}

				this.doc = null;
				this.iframe.parentNode.removeChild(this.iframe);
				this.iframe = null;
				CollectGarbage()
			}
		};
		HTMLFile.prototype.close = function () {
			this.destroy();
			return io.Transport.XHR.prototype.close.call(this)
		};
		HTMLFile.check = function (socket) {
			if (typeof window != "undefined" && ["Active"].concat("Object").join("X")in window) {
				try {
					var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
					return a && io.Transport.XHR.check(socket)
				} catch (e) {}

			}
			return false
		};
		HTMLFile.xdomainCheck = function () {
			return false
		};
		io.transports.push("htmlfile")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
	(function (exports, io, global) {
		exports["xhr-polling"] = XHRPolling;
		function XHRPolling() {
			io.Transport.XHR.apply(this, arguments)
		}
		io.util.inherit(XHRPolling, io.Transport.XHR);
		io.util.merge(XHRPolling, io.Transport.XHR);
		XHRPolling.prototype.name = "xhr-polling";
		XHRPolling.prototype.heartbeats = function () {
			return false
		};
		XHRPolling.prototype.open = function () {
			var self = this;
			io.Transport.XHR.prototype.open.call(self);
			return false
		};
		function empty() {}

		XHRPolling.prototype.get = function () {
			if (!this.isOpen)
				return;
			var self = this;
			function stateChange() {
				if (this.readyState == 4) {
					this.onreadystatechange = empty;
					if (this.status == 200) {
						self.onData(this.responseText);
						self.get()
					} else {
						self.onClose()
					}
				}
			}
			function onload() {
				this.onload = empty;
				this.onerror = empty;
				self.retryCounter = 1;
				self.onData(this.responseText);
				self.get()
			}
			function onerror() {
				self.retryCounter++;
				if (!self.retryCounter || self.retryCounter > 3) {
					self.onClose()
				} else {
					self.get()
				}
			}
			this.xhr = this.request();
			if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
				this.xhr.onload = onload;
				this.xhr.onerror = onerror
			} else {
				this.xhr.onreadystatechange = stateChange
			}
			this.xhr.send(null)
		};
		XHRPolling.prototype.onClose = function () {
			io.Transport.XHR.prototype.onClose.call(this);
			if (this.xhr) {
				this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
				try {
					this.xhr.abort()
				} catch (e) {}

				this.xhr = null
			}
		};
		XHRPolling.prototype.ready = function (socket, fn) {
			var self = this;
			io.util.defer(function () {
				fn.call(self)
			})
		};
		io.transports.push("xhr-polling")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	(function (exports, io, global) {
		var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
		exports["jsonp-polling"] = JSONPPolling;
		function JSONPPolling(socket) {
			io.Transport["xhr-polling"].apply(this, arguments);
			this.index = io.j.length;
			var self = this;
			io.j.push(function (msg) {
				self.be(msg)
			})
		}
		io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
		JSONPPolling.prototype.name = "jsonp-polling";
		JSONPPolling.prototype.post = function (data) {
			var self = this,
			query = io.util.query(this.socket.options.query, "t=" +  + (new Date) + "&i=" + this.index);
			if (!this.form) {
				var form = document.createElement("form"),
				area = document.createElement("textarea"),
				id = this.iframeId = "socketio_iframe_" + this.index,
				iframe;
				form.className = "socketio";
				form.style.position = "absolute";
				form.style.top = "0px";
				form.style.left = "0px";
				form.style.display = "none";
				form.target = id;
				form.method = "POST";
				form.setAttribute("accept-charset", "utf-8");
				area.name = "d";
				form.appendChild(area);
				document.body.appendChild(form);
				this.form = form;
				this.area = area
			}
			this.form.action = this.prepareUrl() + query;
			function complete() {
				initIframe();
				self.socket.setBuffer(false)
			}
			function initIframe() {
				if (self.iframe) {
					self.form.removeChild(self.iframe)
				}
				try {
					iframe = document.createElement('<iframe name="' + self.iframeId + '">')
				} catch (e) {
					iframe = document.createElement("iframe");
					iframe.name = self.iframeId
				}
				iframe.id = self.iframeId;
				self.form.appendChild(iframe);
				self.iframe = iframe
			}
			initIframe();
			this.area.value = io.JSON.stringify(data);
			try {
				this.form.submit()
			} catch (e) {}

			if (this.iframe.attachEvent) {
				iframe.onreadystatechange = function () {
					if (self.iframe.readyState == "complete") {
						complete()
					}
				}
			} else {
				this.iframe.onload = complete
			}
			this.socket.setBuffer(true)
		};
		JSONPPolling.prototype.get = function () {
			var self = this,
			script = document.createElement("script"),
			query = io.util.query(this.socket.options.query, "t=" +  + (new Date) + "&i=" + this.index);
			if (this.script) {
				this.script.parentNode.removeChild(this.script);
				this.script = null
			}
			script.async = true;
			script.src = this.prepareUrl() + query;
			script.onerror = function () {
				self.onClose()
			};
			var insertAt = document.getElementsByTagName("script")[0];
			insertAt.parentNode.insertBefore(script, insertAt);
			this.script = script;
			if (indicator) {
				setTimeout(function () {
					var iframe = document.createElement("iframe");
					document.body.appendChild(iframe);
					document.body.removeChild(iframe)
				}, 100)
			}
		};
		JSONPPolling.prototype.be = function (msg) {
			this.onData(msg);
			if (this.isOpen) {
				this.get()
			}
			return this
		};
		JSONPPolling.prototype.ready = function (socket, fn) {
			var self = this;
			if (!indicator)
				return fn.call(this);
			io.util.load(function () {
				fn.call(self)
			})
		};
		JSONPPolling.check = function () {
			return "document" in global
		};
		JSONPPolling.xdomainCheck = function () {
			return true
		};
		io.transports.push("jsonp-polling")
	})("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
	if (typeof define === "function" && define.amd) {
		define([], function () {
			return io
		})
	}
})();
(function () {
	var isArray = Array.isArray;
	if (isArray === undefined) {
		isArray = function (arr) {
			return Object.prototype.toString.call(arr) === "[object Array]"
		}
	}
	var root = this;
	function EventEmitter() {}

	if (typeof module !== "undefined" && module.exports) {
		module.exports.EventEmitter = EventEmitter
	} else {
		root = window;
		root.EventEmitter = EventEmitter
	}
	var defaultMaxListeners = 10;
	EventEmitter.prototype.setMaxListeners = function (n) {
		if (!this.ez)
			this.ez = {};
		this.bfr = n
	};
	EventEmitter.prototype.emit = function () {
		var type = arguments[0];
		if (type === "error") {
			if (!this.ez || !this.ez.error || isArray(this.ez.error) && !this.ez.error.length) {
				if (this.domain) {
					var er = arguments[1];
					er.domain_emitter = this;
					er.domain = this.domain;
					er.domain_thrown = false;
					this.domain.emit("error", er);
					return false
				}
				if (arguments[1]instanceof Error) {
					throw arguments[1]
				} else {
					throw new Error("Uncaught, unspecified 'error' event.")
				}
				return false
			}
		}
		if (!this.ez)
			return false;
		var handler = this.ez[type];
		if (!handler)
			return false;
		if (typeof handler == "function") {
			if (this.domain) {
				this.domain.enter()
			}
			switch (arguments.length) {
			case 1:
				handler.call(this);
				break;
			case 2:
				handler.call(this, arguments[1]);
				break;
			case 3:
				handler.call(this, arguments[1], arguments[2]);
				break;
			default:
				var l = arguments.length;
				var args = new Array(l - 1);
				for (var i = 1; i < l; i++)
					args[i - 1] = arguments[i];
				handler.apply(this, args)
			}
			if (this.domain) {
				this.domain.exit()
			}
			return true
		} else if (isArray(handler)) {
			if (this.domain) {
				this.domain.enter()
			}
			var l = arguments.length;
			var args = new Array(l - 1);
			for (var i = 1; i < l; i++)
				args[i - 1] = arguments[i];
			var listeners = handler.slice();
			for (var i = 0, l = listeners.length; i < l; i++) {
				listeners[i].apply(this, args)
			}
			if (this.domain) {
				this.domain.exit()
			}
			return true
		} else {
			return false
		}
	};
	EventEmitter.prototype.addListener = function (type, listener) {
		if ("function" !== typeof listener) {
			throw new Error("addListener only takes instances of Function")
		}
		if (!this.ez)
			this.ez = {};
		this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
		if (!this.ez[type]) {
			this.ez[type] = listener
		} else if (isArray(this.ez[type])) {
			this.ez[type].push(listener)
		} else {
			this.ez[type] = [this.ez[type], listener]
		}
		if (isArray(this.ez[type]) && !this.ez[type].warned) {
			var m;
			if (this.bfr !== undefined) {
				m = this.bfr
			} else {
				m = defaultMaxListeners
			}
			if (m && m > 0 && this.ez[type].length > m) {
				this.ez[type].warned = true;
				console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.ez[type].length);
				console.trace()
			}
		}
		return this
	};
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	EventEmitter.prototype.once = function (type, listener) {
		if ("function" !== typeof listener) {
			throw new Error(".once only takes instances of Function")
		}
		var self = this;
		function g() {
			self.removeListener(type, g);
			listener.apply(this, arguments)
		}
		g.listener = listener;
		self.on(type, g);
		return this
	};
	EventEmitter.prototype.removeListener = function (type, listener) {
		if ("function" !== typeof listener) {
			throw new Error("removeListener only takes instances of Function")
		}
		if (!this.ez || !this.ez[type])
			return this;
		var list = this.ez[type];
		if (isArray(list)) {
			var position = -1;
			for (var i = 0, length = list.length; i < length; i++) {
				if (list[i] === listener || list[i].listener && list[i].listener === listener) {
					position = i;
					break
				}
			}
			if (position < 0)
				return this;
			list.splice(position, 1)
		} else if (list === listener || list.listener && list.listener === listener) {
			delete this.ez[type]
		}
		return this
	};
	EventEmitter.prototype.removeAllListeners = function (type) {
		if (arguments.length === 0) {
			this.ez = {};
			return this
		}
		var events = this.ez && this.ez[type];
		if (!events)
			return this;
		if (isArray(events)) {
			events.splice(0)
		} else {
			this.ez[type] = null
		}
		return this
	};
	EventEmitter.prototype.listeners = function (type) {
		if (!this.ez)
			this.ez = {};
		if (!this.ez[type])
			this.ez[type] = [];
		if (!isArray(this.ez[type])) {
			this.ez[type] = [this.ez[type]]
		}
		return this.ez[type]
	}
})();
(function () {
	if (typeof Object.create !== "function") {
		Object.create = function (o) {
			function F() {}

			F.prototype = o;
			return new F
		}
	}
	var root = window;
	var pomelo = Object.create(EventEmitter.prototype);
	root.pomelo = pomelo;
	var socket = null;
	var id = 1;
	var callbacks = {};
	var route = "web-connector.messageHandler.";
	var isRegister = false;
	var success = 200;
	var register_ack = "register";
	var bind_ack = "bind";
	var regBind_ack = "registerAndBind";
	var cancelBind_ack = "cancelBind";
	var message_store = {};
	var heartbeat_interval = 1e3 * 60;
	var heartbeat_timer;
	var current_user;
	var current_domain;
	var cacheMessageIds = [];
	var cacheSize = 100;
	pomelo.init = function (host, port, reconnect, cb) {
		var url = "ws://" + host;
		if (port) {
			url += ":" + port
		}
		var params;
		if (reconnect) {
			params = {
				"force new connection" : true,
				reconnect : true,
				"max reconnection attempts" : 50
			}
		} else {
			params = {
				"force new connection" : true,
				reconnect : false
			}
		}
		socket = io.connect(url, params);
		socket.on("connect", function () {
			console.log("[pomeloclient.init] websocket connected!");
			cb()
		});
		socket.on("reconnect", function () {
			pomelo.emit("reconnect")
		});
		socket.on("message", function (data) {
			message_store = {};
			if (typeof data === "string") {
				data = JSON.parse(data)
			}
			if (data instanceof Array) {
				processMessageBatch(data)
			} else {
				processMessage(data);
				emitMessage()
			}
		});
		socket.on("error", function (err) {
			cb(err)
		});
		socket.on("disconnect", function (reason) {
			isRegister = false;
			pomelo.emit("disconnect", reason)
		})
	};
	var request = function (method, opts, cb) {
		if (!method) {
			console.error("request message error with no method.");
			return
		}
		id++;
		callbacks[id] = cb;
		sendMsg(method, id, opts)
	};
	var notify = function (method, msg) {
		if (!method) {
			console.error("notify message error with no method.");
			return
		}
		sendMsg(method, 0, msg)
	};
	var sendMsg = function (method, msgId, msg) {
		var path = route + method;
		var rs = {
			id : msgId,
			route : path,
			msg : msg
		};
		var sg = JSON.stringify(rs);
		socket.send(sg)
	};
	var processMessageBatch = function (msgs) {
		for (var i = 0, l = msgs.length; i < l; i++) {
			processMessage(msgs[i])
		}
		emitMessage()
	};
	var emitMessage = function () {
		for (var key in message_store) {
			pomelo.emit(key, message_store[key])
		}
	};
	var processMessage = function (msg) {
		if (msg.id) {
			var cb = callbacks[msg.id];
			delete callbacks[msg.id];
			if (typeof cb !== "function") {
				console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
				return
			}
			cb(msg.body);
			if (msg.body.type === register_ack && msg.body.code == success) {
				isRegister = true
			}
			if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
				heartbeat_timer = setInterval(function () {
						notify("heartbeat", {
							flag : "online",
							domain : current_domain,
							user : current_user
						})
					}, heartbeat_interval)
			}
			if (msg.body.type === cancelBind_ack && msg.body.code == success) {
				clearInterval(heartbeat_timer)
			}
			return
		} else {
			if (!filterMessage(msg)) {
				return
			}
			if (!message_store[msg.route]) {
				if (msg.body instanceof Array) {
					message_store[msg.route] = msg.body
				} else {
					message_store[msg.route] = [msg.body]
				}
			} else {
				var arr = message_store[msg.route];
				if (msg.body instanceof Array) {
					var messages = msg.body;
					for (var i = 0; i < messages.length; i++) {
						arr.push(messages[i])
					}
				} else {
					arr.push(msg.body)
				}
				message_store[msg.route] = arr
			}
		}
	};
	var filterMessage = function (message) {
		var msgs = message.body;
		var ids = [];
		var results = {};
		if (msgs instanceof Array) {
			for (var i = 0; i < msgs.length; i++) {
				var id = msgs[i].msgId;
				ids.push(id)
			}
			var duplicatedIds = checkMessage(ids);
			if (duplicatedIds.length !== 0) {
				return false
			} else {
				cacheMessageIds = cacheMessageIds.concat(ids);
				if (cacheMessageIds.length > cacheSize) {
					var length = cacheMessageIds - cacheSize;
					for (var i = 0; i < length; i++) {
						cacheMessageIds.shift()
					}
				}
			}
		}
		return true
	};
	var checkMessage = function (ids) {
		var array = [];
		for (var i = 0; i < cacheMessageIds.length; i++) {
			var id = cacheMessageIds[i];
			for (var j = 0; j < ids.length; j++) {
				if (ids[j] === id) {
					array.push(id)
				}
			}
		}
		return array
	};
	pomelo.register = function (opts, cb) {
		request("register", opts, cb)
	};
	pomelo.bind = function (opts, cb) {
		if (isRegister) {
			current_domain = opts.domain;
			current_user = opts.user;
			request("bind", opts, cb)
		} else {
			console.log("cannot bind without registration.")
		}
	};
	pomelo.registerAndBind = function (opts, cb) {
		current_domain = opts.domain;
		current_user = opts.user;
		request("registerAndBind", opts, cb)
	};
	pomelo.cancelBind = function (opts, cb) {
		current_domain = null;
		current_user = null;
		request("cancelBind", opts, cb)
	};
	pomelo.getOnlineUser = function (opts, cb) {
		request("getOnlineUser", opts, cb)
	};
	pomelo.disconnect = function () {
		if (socket) {
			socket.disconnect();
			socket = null
		}
	};
	pomelo.ackMessage = function (domain, msgs) {
		var msgIds = "";
		var types = "";
		var message = {};
		var user;
		for (var i = 0; i < msgs.length; i++) {
			var data = msgs[i];
			if (!user) {
				user = data.user
			}
			msgIds += data.msgId;
			types += data.type;
			if (i !== msgs.length - 1) {
				msgIds += ";";
				types += ";"
			}
		}
		var message = {
			user : user,
			msgIds : msgIds,
			types : types,
			domain : domain
		};
		notify("ack", message)
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bq = be("nm.x"),
	eb = be("nm.u"),
	bp = be("nm.d"),
	Dq = be("pomelo"),
	dO = 0,
	bb,
	bJ;
	bp.gN({
		"polling-init" : {
			url : "/api/push/init",
			format : function (bHN) {
				dO = 2;
				var bLA = {
					domain : "music.163.com",
					host : MUSIC_CONFIG.pushHost,
					port : MUSIC_CONFIG.pushPort,
					key : MUSIC_CONFIG.pushKey,
					secret : "bec0b878892740c498505a85eb3dcec9"
				},
				bl = bHN.account || bZ,
				fI = GUser.userId;
				Dq.init(bLA.host, bLA.port, true, this.bgr.bh(this, {
						user : fI,
						nonce : bl.nonce,
						domain : bLA.domain,
						productKey : bLA.key,
						signature : bl.signature,
						expire_time : bl.expireTime
					}))
			},
			onerror : function () {
				return this.Rx()
			}
		}
	});
	bp.sm = NEJ.C();
	bb = bp.sm.bN(bp.gY);
	bb.dv = function () {
		var kb = !1;
		return function (bf) {
			if (!kb) {
				kb = !0
			}
			this.dF(bf);
			Dq.on("specify", this.th.bh(this));
			Dq.on("broadcast", this.th.bh(this))
		}
	}
	();
	bb.th = function (bc) {
		bm.bLt(bc, function (cD) {
			bj.bG(bp.sm, "message", cD)
		}, this)
	};
	bb.Rx = function () {
		var cr = 500;
		return function () {
			dO = 0;
			Dq.disconnect();
			if (cr > 6e4)
				cr = 500;
			cr *= 2
		}
	}
	();
	bb.bgr = function (bf, cS) {
		if (!!cS) {
			return this.Rx()
		}
		dO = 3;
		Dq.registerAndBind(bf, function (bn) {
			if (bn.code != 200) {
				return this.Rx()
			}
			dO = 4
		}
			.bh(this))
	};
	bb.bzP = function () {
		eb.bgn.mh().bzQ()
	};
	bb.bzR = function () {
		eb.bgn.mh().bzT()
	};
	bb.RI = function () {
		var kb = !1;
		return function () {
			if (kb)
				return;
			kb = !0;
			this.dg("polling-init", {})
		}
	}
	();
	bK.hh.bL({
		event : "message",
		element : bp.sm
	})
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	dE = be("nej.p"),
	bm = be("nej.u"),
	bo = be("nm.l"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	blh = be("api"),
	bb,
	bJ;
	var iH = Fp.mo('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
	bo.Jo = NEJ.C();
	bb = bo.Jo.bN(bo.eH);
	bJ = bo.Jo.du;
	bb.cw = function (bf) {
		bf.title = "意见反馈";
		this.cA(bf)
	};
	bb.bLv = function () {
		this.dn = iH
	};
	bb.bFa = function () {
		this.bLu();
		this.fH = {};
		var vU = Fp.bP;
		var tE = bj.bs;
		this.fH.submit_btn = vU(this.bB, "u-btn2")[0];
		this.fH.cancle_btn = vU(this.bB, "u-btn2")[1];
		this.fH.prompt_msg = vU(this.bB, "u-err")[0];
		this.fH.zs = vU(this.bB, "zs")[0];
		Fp.bY(this.fH.zs, "display", "none");
		this.fH.fb_txt = vU(this.bB, "u-txt")[0];
		this.fH.contact = vU(this.bB, "u-txt")[1];
		Fp.fm(this.fH.fb_txt, "holder");
		Fp.fm(this.fH.contact, "holder");
		if (Fp.cJ(this.fH.fb_txt.parentNode, "holder-parent")) {
			Fp.bY(this.fH.fb_txt.parentNode, "display", "block")
		}
		if (Fp.cJ(this.fH.contact.parentNode, "holder-parent")) {
			Fp.bY(this.fH.contact.parentNode, "display", "block")
		}
		tE(this.fH.submit_btn, "click", this.bgM.bh(this));
		tE(this.fH.cancle_btn, "click", this.bgN.bh(this));
		tE(this.fH.prompt_msg, "msgShow", this.bgO.bh(this));
		tE(this.fH.fb_txt, "keyup", this.tG.bh(this));
		tE(this.fH.fb_txt, "input", this.is.bh(this));
		tE(this.fH.contact, "keyup", this.bgS.bh(this));
		tE(this.fH.contact, "input", this.bfe.bh(this));
		this.bwT = bp.qE.bL()
	};
	bb.bgM = function (bc) {
		bj.cu(bc);
		if (this.cI())
			return;
		var ci = this.fH.fb_txt.value.trim();
		var ck = ci.length;
		var bf = {
			type : "json",
			method : "post",
			noEnc : true
		};
		var bfd = this.fH.contact.value.trim();
		var GD = {
			ua : navigator.userAgent,
			hash : top.location.hash,
			href : location.href,
			flash : bq.bcx(),
			contact : bfd
		};
		var bl = {
			content : ci,
			client : "web",
			xInfo : JSON.stringify(GD)
		},
		HL = this.bwT.bPF();
		if (HL && HL.length) {
			bl.log = HL.join("\n")
		}
		if (ck == 0) {
			this.fH.prompt_msg.innerHTML = "反馈内容不能为空";
			Fp.bY(this.fH.prompt_msg, "display", "block");
			return
		}
		if (bfd.length > 100) {
			this.fH.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
			Fp.bY(this.fH.prompt_msg, "display", "block");
			return
		}
		this.cI(true);
		bf.data = bm.eK(bl);
		bf.onload = this.bgY.bh(this);
		bf.onerror = this.ek.bh(this);
		bH.cR("/api/feedback/web", bf)
	};
	bb.is = function (bc) {
		var ck = this.fH.fb_txt.value.trim().length;
		if (ck > 0)
			Fp.bY(this.fH.prompt_msg, "display", "none");
		dE.dp.browser == "ie" && dE.dp.version < "7.0" ? setTimeout(this.gb.bh(this), 0) : this.gb()
	};
	bb.tG = function (bc) {
		if (bc.keyCode === 8)
			this.gb()
	};
	bb.gb = function () {
		var ck = this.fH.fb_txt.value.trim().length;
		this.fH.zs.innerHTML = !ck ? "0/140" : ck + "/140"
	};
	bb.bfe = function (bc) {
		var ck = this.fH.contact.value.trim().length;
		if (ck > 0)
			Fp.bY(this.fH.prompt_msg, "display", "none")
	};
	bb.bgS = function (bc) {
		if (bc.keyCode === 8)
			this.bfe()
	};
	bb.bgN = function (bc) {
		bj.cG(bc);
		this.cj()
	};
	bb.bgO = function (bc) {
		var bid = bj.cf(bc);
		bid.innerHTML = "请输入反馈内容"
	};
	bb.bzL = function (bzK) {
		var bid = bj.cf(bc);
		bid.innerHTML = ""
	};
	bb.bgY = function (bn) {
		this.cI(false);
		this.cj();
		bo.cq.bO({
			tip : "意见发送成功",
			autoclose : true
		})
	};
	bb.ek = function (bn) {
		this.cI(false);
		bo.cq.bO({
			tip : "意见发送失败",
			autoclose : true
		})
	};
	bb.cI = function (cN) {
		return this.dG(this.fH.submit_btn, cN, "发送意见", "发送中...")
	};
	bb.bO = function () {
		bJ.bO.call(this);
		this.cI(false);
		this.fH.fb_txt.value = "";
		this.fH.contact.value = "";
		Fp.bY(this.fH.prompt_msg, "display", "none");
		this.gb()
	};
	bq.bhb = function (bf) {
		bf = bf || {};
		if (bf.title === undefined)
			bf.title = "意见反馈";
		bo.Jo.bO(bf)
	};
	blh.feedback = bq.feedback = bq.bhb
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bv = be("nej.ui"),
	bb;
	if (!!bv.qn)
		return;
	bv.qn = NEJ.C();
	bb = bv.qn.bN(bv.ic);
	bb.dv = function () {
		this.hE = this.beY();
		this.dF()
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.dw = bf.index;
		this.gS = bf.total;
		this.iS = bf.range;
		this.gm(bf.data)
	};
	bb.cX = function () {
		this.dc();
		delete this.bS;
		delete this.dw;
		delete this.gS;
		delete this.iS
	};
	bb.jl = co;
	bb.beY = function () {
		var fi =  + (new Date);
		return function () {
			return "itm-" + ++fi
		}
	}
	();
	bb.yf = function () {
		return this.hE
	};
	bb.hi = function () {
		return this.bS
	};
	bb.gm = function (bl) {
		this.bS = bl || {};
		this.jl(this.bS)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bv = be("nej.ui"),
	bb,
	bJ;
	if (!!bv.pj)
		return;
	bv.pj = NEJ.C();
	bb = bv.pj.bN(bv.qn);
	bJ = bv.pj.du;
	bb.cw = function (bf) {
		this.bhc = bf.pkey || "id";
		this.cA(bf)
	};
	bb.beV = function (bl) {
		this.bG("ondelete", {
			ext : bl,
			id : this.yf(),
			data : this.hi(),
			body : this.kw()
		})
	};
	bb.beU = function (bl) {
		this.bG("onupdate", {
			ext : bl,
			id : this.yf(),
			data : this.hi(),
			body : this.kw()
		})
	};
	bb.gm = function (bl) {
		bJ.gm.apply(this, arguments);
		this.hE = this.bS[this.bhc] || this.beY()
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	fP = NEJ.R,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bv = be("nej.ui"),
	bb,
	hu,
	Kc;
	if (!!bv.Kd)
		return;
	bv.Kd = NEJ.C();
	bb = bv.Kd.bN(bv.ic);
	bb.cw = function (bf) {
		this.Ga = NEJ.X({}, bf);
		this.fr = NEJ.X({}, bf);
		delete this.Ga.onchange;
		this.fr.onchange = this.wZ.bh(this);
		this.cA(bf);
		this.bhd({
			number : bf.number,
			label : bf.label || bZ
		})
	};
	bb.cX = function () {
		this.dc();
		if (!!this.ir) {
			this.ir.ch();
			delete this.ir
		}
		delete this.Ga;
		delete this.fr;
		this.bhg();
		this.bB.innerHTML = "&nbsp;"
	};
	bb.bLv = function () {
		this.kT = hu
	};
	bb.bhd = function (bl) {
		Fp.ne(this.bB, Kc, bl);
		var fi = Fp.St();
		this.fr.list = Fp.bP(this.bB, "js-i-" + fi);
		this.fr.pbtn = (Fp.bP(this.bB, "js-p-" + fi) || fP)[0];
		this.fr.nbtn = (Fp.bP(this.bB, "js-n-" + fi) || fP)[0]
	};
	bb.bFa = function () {
		this.bLu()
	};
	bb.bzH = function (bl) {
		return Fp.cV(Kc, bl)
	};
	bb.wZ = function (bc) {
		if (this.Cs)
			return;
		var bu = bc.index,
		df = bc.total;
		this.Cs = !0;
		this.Cr(bu, df);
		bm.bLt(this.FH, function (nI) {
			nI.Cr(bu, df)
		});
		this.Cs = !1;
		this.bG("onchange", bc)
	};
	bb.bh = function (cU) {
		cU = Fp.bw(cU);
		if (!cU)
			return this;
		var fT = NEJ.X({}, this.Ga);
		fT.parent = cU;
		fT.index = this.ph();
		fT.total = this.kN();
		var nI = this.constructor.bL(fT);
		nI.us("onchange", this.fr.onchange);
		if (!this.FH)
			this.FH = [];
		this.FH.push(nI);
		return this
	};
	bb.bhg = function () {
		var Os = function (nI, bu, bk) {
			nI.ch();
			bk.splice(bu, 1)
		};
		return function () {
			bm.kx(this.FH, Os)
		}
	}
	();
	bb.bAs = function (bu) {
		if (!this.ir)
			return;
		this.ir.bAs(bu)
	};
	bb.ph = function () {
		if (!this.ir)
			return 1;
		return this.ir.ph()
	};
	bb.kN = function () {
		if (!this.ir)
			return 1;
		return this.ir.kN()
	};
	bb.Cr = function (bu, df) {
		if (!this.ir)
			return;
		this.ir.Cr(bu, df)
	};
	bb.Kt = function (df) {
		if (!this.ir)
			return;
		this.ir.Kt(df)
	};
	hu = Fp.oR(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
	Kc = Fp.mI('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bv = be("nej.ut"),
	bb;
	if (!!bv.Ku)
		return;
	bv.Ku = NEJ.C();
	bb = bv.Ku.bN(bv.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.Ft = bf.pbtn;
		this.eC = bf.nbtn;
		this.Fr = bf.sbtn;
		this.Fn = bf.ebtn;
		this.lf = bf.event || "click";
		this.hQ = bf.selected || "js-selected";
		this.jV = bf.disabled || "js-disabled";
		this.bhy(bf.list);
		this.Cr(bf.index || 1, bf.total || 1)
	};
	bb.cX = function () {
		this.dc();
		delete this.dK;
		delete this.lf;
		delete this.Ft;
		delete this.eC;
		delete this.Fr;
		delete this.Fn;
		delete this.beI;
		delete this.gS;
		delete this.dw;
		delete this.hQ;
		delete this.jV
	};
	bb.bhy = function () {
		var KG = function (bid) {
			this.dK.push(bid);
			this.dA([[bid, this.lf, this.iF.gz(this, 0)]])
		};
		return function (bk) {
			this.dK = [];
			this.dA([[this.Ft, "click", this.iF.gz(this, -1)], [this.eC, "click", this.iF.gz(this, 1)], [this.Fr, "click", this.iF.gz(this, -2)], [this.Fn, "click", this.iF.gz(this, 2)]]);
			bm.bLt(bk, KG, this)
		}
	}
	();
	bb.xJ = function (bid, bu) {
		if (bu == null) {
			bid.innerText = "";
			Fp.bY(bid, "display", "none");
			Fp.bR(bid, this.hQ)
		} else {
			bid.innerText = bu;
			Fp.bY(bid, "display", "");
			bu == this.dw ? Fp.bV(bid, this.hQ) : Fp.bR(bid, this.hQ)
		}
	};
	bb.beA = function () {
		if (this.dw <= 1) {
			Fp.bV(this.Ft, this.jV);
			Fp.bV(this.Fr, this.jV)
		} else {
			Fp.bR(this.Ft, this.jV);
			Fp.bR(this.Fr, this.jV)
		}
		if (this.dw >= this.gS) {
			Fp.bV(this.eC, this.jV);
			Fp.bV(this.Fn, this.jV)
		} else {
			Fp.bR(this.eC, this.jV);
			Fp.bR(this.Fn, this.jV)
		}
	};
	bb.KL = co;
	bb.KM = function () {
		this.KL();
		this.beA();
		this.bG("onchange", {
			last : this.beI,
			total : this.gS,
			index : this.dw,
			ext : this.KN
		})
	};
	bb.bez = function (bu) {
		bu = parseInt(bu);
		if (isNaN(bu) || this.gS == null)
			return !1;
		bu = Math.max(1, Math.min(bu, this.gS));
		this.beI = this.dw;
		this.dw = bu;
		return !0
	};
	bb.KP = function (df) {
		df = parseInt(df);
		if (isNaN(df) || df < 1)
			return !1;
		this.gS = df;
		return !0
	};
	bb.iF = function (bc, eu) {
		bj.cG(bc);
		var bD = bj.cf(bc);
		if (!bD || Fp.cJ(bD, this.hQ) || Fp.cJ(bD, this.jV))
			return;
		var bu = bD.innerText;
		switch (eu) {
		case 1:
		case -1:
			bu = this.dw + eu;
			break;
		case 2:
			bu = this.gS;
			break;
		case -2:
			bu = 1;
			break
		}
		this.bAs(bu)
	};
	bb.ph = function () {
		return this.dw
	};
	bb.bAs = function (bu) {
		var bhN = this.dw;
		this.bez(bu);
		if (bhN != this.dw)
			this.KM();
		return this
	};
	bb.kN = function () {
		return this.gS
	};
	bb.zQ = function (df) {
		if (this.KP(df) && this.dw != null) {
			this.dw = 1;
			this.KM()
		}
		return this
	};
	bb.Kt = function (df) {
		if (this.KP(df)) {
			this.KL();
			this.beA()
		}
		return this
	};
	bb.Cr = function (bu, df) {
		if (!this.KP(df) || !this.bez(bu))
			return this;
		this.KM();
		return this
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	dr = be("nej.x"),
	bv = be("nej.ut"),
	bb;
	if (!!bv.BZ)
		return;
	bv.BZ = NEJ.C();
	bb = bv.BZ.bN(bv.Ku);
	bb.dv = function () {
		this.dF();
		var bid = Fp.gH("span", "zdot");
		bid.innerText = "...";
		this.EP = [bid.cloneNode(true), bid]
	};
	bb.cX = function () {
		this.dc();
		this.bew()
	};
	bb.bew = function () {
		Fp.mH(this.EP[0]);
		Fp.mH(this.EP[1])
	};
	bb.KL = function () {
		this.KN = {
			last : !1,
			first : !1,
			list : this.dK
		};
		this.bew();
		this.xJ(this.dK[0], 1);
		var hp = 1,
		ck = this.dK.length;
		if (this.gS < ck) {
			for (var KU; hp < ck; hp++) {
				KU = hp + 1;
				this.xJ(this.dK[hp], KU > this.gS ? null : KU)
			}
			return
		}
		if (this.dw > 1) {
			var dm = Math.floor((ck - 2) / 2),
			bhQ = this.gS - ck + 2,
			mJ = Math.max(2, this.dw - dm);
			if (this.gS >= ck) {
				mJ = Math.min(mJ, bhQ)
			}
			if (mJ > 2) {
				this.dK[0].insertAdjacentElement("afterEnd", this.EP[0]);
				this.KN.first = !0
			}
			for (var bu; ; hp++) {
				bu = mJ + hp - 1;
				if (bu > this.dw)
					break;
				this.xJ(this.dK[hp], bu)
			}
		}
		if (this.dw < this.gS) {
			var bu,
			mJ = this.dw + 1;
			for (var i = 0, l = ck - 2; ; i++, hp++) {
				bu = mJ + i;
				if (hp > l || bu > this.gS)
					break;
				this.xJ(this.dK[hp], bu)
			}
			if (bu < this.gS) {
				this.dK[hp].insertAdjacentElement("beforeBegin", this.EP[1]);
				this.KN.last = !0
			}
			if (bu <= this.gS) {
				this.xJ(this.dK[hp++], this.gS)
			}
		}
		for (; hp < ck; hp++) {
			this.xJ(this.dK[hp])
		}
	};
	Fp.bib = dr.bib = function (cU, bf) {
		var bC = Fp.ik(cU);
		if (!bC)
			return null;
		if (!bv.Iu(bC, bv.BZ)) {
			bf = bf || {};
			var bk = !bf.clazz ? Fp.dh(bC) : Fp.bP(bC, bf.clazz);
			bf.pbtn = bk.shift();
			bf.nbtn = bk.pop();
			bf.list = bk;
			delete bf.clazz
		}
		return bv.Iu(bC, bv.BZ, bf || bZ)
	};
	dr.isChange = !0
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	fP = NEJ.R,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bv = be("nej.ui"),
	bb,
	bJ,
	iH;
	if (!!bv.ug)
		return;
	bv.ug = NEJ.C();
	bb = bv.ug.bN(bv.Kd);
	bJ = bv.ug.du;
	bb.cw = function (bf) {
		bf.number = parseInt(bf.number) || 9;
		this.cA(bf);
		this.ir = bK.BZ.bL(this.fr)
	};
	bb.wZ = function (bc) {
		if (!!this.Ga.noend) {
			var bep = bc.ext || bZ,
			bk = bep.list || fP;
			if (bep.last) {
				Fp.bY(bk[bk.length - 1], "display", "none")
			}
		}
		bJ.wZ.apply(this, arguments)
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	cQ = be("nej.ui"),
	bv = be("nej.ut"),
	bb;
	if (!!bv.EO)
		return;
	bv.EO = NEJ.C();
	bb = bv.EO.bN(bv.eW);
	bb.cw = function (bf) {
		this.hj = {};
		this.cA(bf);
		this.hd = Fp.bw(bf.parent);
		this.eB = {
			parent : this.hd
		};
		this.ml = parseInt(bf.limit) || 10;
		this.ql = parseInt(bf.first) || this.ml;
		this.bie(bf.item);
		this.bih(bf.cache || bZ);
		this.bij(bf.pager || bZ);
		this.gm()
	};
	bb.cX = function () {
		this.bG("onbeforerecycle");
		this.BK();
		this.dc();
		if (this.hj.clear) {
			this.bA.pJ(this.hj.key)
		}
		this.bA.ch();
		if (!!this.hb) {
			this.hb.ch();
			delete this.hb
		}
		delete this.bej;
		delete this.fr;
		delete this.Em;
		delete this.bA;
		delete this.hd;
		delete this.BC;
		delete this.eB;
		delete this.hj
	};
	bb.beh = function (bC) {
		return bC + "" + Fp.St()
	};
	bb.rO = function (hp, cl, ft, ck) {
		var bn = {
			index : 1,
			total : 1
		};
		if (cl >= hp) {
			bn.index = Math.floor((cl - hp) / ft) + 2
		}
		if (ck > hp) {
			bn.total = Math.ceil((ck - hp) / ft) + 1
		}
		return bn
	};
	bb.bee = function (bF) {
		delete this.BC;
		this.vK = bF;
		this.dA([[this.hd, "click", this.bir.bh(this)]])
	};
	bb.bie = function (bt) {
		if (bm.fX(bt)) {
			this.bee(bt);
			return
		}
		NEJ.X(this.eB, bt);
		var cW = this.eB.klass;
		delete this.eB.klass;
		if (bm.fX(cW)) {
			this.bee(cW);
			return
		}
		delete this.vK;
		this.BC = cW;
		this.eB.ondelete = this.bG.bh(this, "ondelete");
		this.eB.onupdate = this.bG.bh(this, "onupdate")
	};
	bb.bih = function (bW) {
		var cW = bW.klass,
		hC = NEJ.X({}, bW);
		this.hj.key = hC.lkey;
		this.hj.data = hC.data || {};
		this.hj.clear = !!hC.clear;
		this.eB.pkey = hC.key || "id";
		hC.onlistload = this.LC.bh(this);
		hC.onpullrefresh = this.bis.bh(this);
		if (!!cW && "onlistchange" in cW) {
			this.dA([[cW, "listchange", this.LE.bh(this)]])
		} else {
			hC.onitemadd = this.Ee.bh(this);
			hC.onitemdelete = this.Ed.bh(this);
			hC.onitemupdate = this.beb.bh(this)
		}
		this.bA = (cW || bv.zv).bL(hC);
		if (bW.total != null) {
			this.bA.zQ(this.hj.key, bW.total)
		}
		if (!!bW.list) {
			this.bA.ro(this.hj.key, bW.list)
		}
	};
	bb.bij = function (nI) {
		this.bej = nI.klass || cQ.ug;
		this.fr = NEJ.X({}, nI);
		if (bm.fz(nI.parent)) {
			this.fr.parent = nI.parent[0];
			this.Br = nI.parent.slice(1);
			if (!this.Br || !this.Br.length) {
				delete this.Br
			}
		}
		delete this.fr.klass
	};
	bb.BK = function () {
		var fg = /^(?:table|tr|tbody|ul|ol|select)$/i;
		return function () {
			this.bG("onbeforelistclear", {
				parent : this.hd
			});
			if (!!this.dy && this.dy.length > 0) {
				this.dy = this.BC.ch(this.dy);
				delete this.dy
			}
			if (fg.test(this.hd.tagName)) {
				Fp.Vp(this.hd)
			} else {
				this.hd.innerHTML = ""
			}
		}
	}
	();
	bb.LL = function (DO) {
		if (!!this.fr.fixed)
			return;
		Fp.bY(this.fr.parent, "display", DO);
		bm.bLt(this.Br, function (cU) {
			Fp.bY(cU, "display", DO)
		}, this)
	};
	bb.LN = function () {
		var bu = this.fr.index || 1;
		delete this.fr.index;
		if (!!this.hb) {
			bu = this.hb.ph()
		}
		this.rG({
			last : bu,
			index : bu
		})
	};
	bb.rG = function (bc) {
		this.bG("onpagechange", bc)
	};
	bb.bdX = function (cl) {
		this.hj.offset = cl;
		this.DF()
	};
	bb.bdW = function (bf) {
		return bf
	};
	bb.DF = function () {
		this.LR();
		var bl = this.hj.data;
		bl.offset = this.hj.offset;
		var bdO = bl.offset == 0;
		bl.total = bdO;
		this.hj.limit = bdO ? this.ql : this.ml;
		bl.limit = this.hj.limit;
		this.bA.zS(this.bdW(NEJ.X({}, this.hj)))
	};
	bb.LC = function (bf) {
		if (bf.key != this.hj.key || bf.offset != this.hj.offset)
			return;
		this.DH();
		var bk = this.bA.hX(bf.key);
		if (!bk || !bk.length) {
			this.LU();
			return
		}
		var ft = bf.limit,
		cl = bf.offset;
		if (this.LW(bk, cl, ft))
			return;
		this.bG("onbeforelistrender", {
			list : bk,
			offset : cl,
			parent : this.hd
		});
		if (!!this.vK) {
			this.eB.xlist = bk;
			this.eB.beg = cl;
			this.eB.end = Math.min(bk.length, cl + ft) - 1;
			this.eB.act = "list";
			var fD = Fp.cV(this.vK, this.eB);
			this.Ij(fD)
		} else {
			this.eB.limit = ft;
			this.eB.offset = cl;
			var gf = Fp.sq(bk, this.BC, this.eB);
			this.Ie(gf)
		}
		this.bG("onafterlistrender", {
			list : bk,
			offset : cl,
			parent : this.hd
		})
	};
	bb.bis = function (bf) {
		if (!this.Em)
			return;
		delete this.Em;
		this.DH("onafterpullrefresh");
		this.gm()
	};
	bb.bdN = function (bu, df) {
		if (!!this.hb) {
			var xC = this.hb.ph(),
			biJ = this.hb.kN();
			if (xC > df || df != biJ) {
				this.hb.ch();
				delete this.hb;
				this.rG({
					last : xC,
					index : Math.min(bu, df)
				});
				return !0
			}
		} else {
			this.fr.index = bu;
			this.fr.total = df;
			this.hb = this.bej.bL(this.fr);
			this.hb.us("onchange", this.rG.bh(this));
			bm.bLt(this.Br, function (cU) {
				this.hb.bh(cU)
			}, this)
		}
	};
	bb.bdJ = function () {
		var fi =  + (new Date);
		return function (bl) {
			var bC = bl[this.eB.pkey];
			if (!bC) {
				bl["dirty-data"] = !0;
				bl[this.eB.pkey] = "dirty-" + fi++
			}
			return bl
		}
	}
	();
	bb.bdI = function (bl) {
		var bC = bl[this.eB.pkey];
		if (!!bl["dirty-data"]) {
			delete bl["dirty-data"];
			delete bl[this.eB.pkey]
		}
		return bC
	};
	bb.bdH = function () {
		var biK = function (nB, it) {
			this.hd.insertAdjacentElement(nB, it)
		};
		return function (nB, bl) {
			var wR = [bl];
			if (!!this.vK) {
				this.eB.xlist = wR;
				this.eB.beg = 0;
				this.eB.end = 0;
				this.eB.act = "add";
				this.Ij(Fp.cV(this.vK, this.eB), nB)
			} else {
				this.eB.limit = 1;
				this.eB.offset = 0;
				this.eB.parent = biK.bh(this, nB);
				var gf = Fp.sq(wR, this.BC, this.eB);
				this.eB.parent = this.hd;
				this.Ie(gf)
			}
		}
	}
	();
	bb.LR = co;
	bb.DH = function (bX) {
		var bc = {
			parent : this.hd
		};
		this.bG(bX || "onafterlistload", bc);
		if (!bc.stopped) {
			Fp.mH(this.dI)
		}
	};
	bb.LW = co;
	bb.Mi = function (cD, nB) {
		if (bm.fX(cD)) {
			if (!this.dI)
				this.dI = Fp.gH("div");
			this.dI.innerHTML = cD
		} else {
			this.dI = cD
		}
		this.hd.insertAdjacentElement(nB || "beforeEnd", this.dI)
	};
	bb.qk = function (bX, mP, nB) {
		var bc = {
			parent : this.hd
		};
		this.bG(bX, bc);
		if (!bc.stopped) {
			this.Mi(bc.value || mP, nB)
		}
	};
	bb.LU = co;
	bb.Ij = co;
	bb.Ie = co;
	bb.bir = function () {
		var fg = /^(?:delete|update)$/;
		return function (bc) {
			var bid = bj.cf(bc, "d:action");
			if (!bid)
				return;
			var cv = Fp.bI(bid, "action");
			if (!fg.test(cv))
				return;
			var bC = Fp.bI(bid, "id");
			if (!bC)
				return;
			var bt = this.bA.fh(bC);
			if (!bt)
				return;
			bj.cu(bc);
			this.bG("on" + cv, {
				data : bt,
				id : bt[this.eB.pkey],
				body : Fp.bw(this.beh(bC))
			})
		}
	}
	();
	bb.Ee = co;
	bb.DY = function (bc) {
		var bl = bc.data || {},
		bf = {
			data : bl,
			key : this.hj.key,
			id : bl[this.eB.pkey]
		};
		this.bG("onbeforedelete", bf);
		this.bA.Ae(bf)
	};
	bb.Ed = co;
	bb.Ei = function (bc) {
		var bl = bc.data || {},
		bf = {
			data : bl,
			key : this.hj.key
		};
		this.bG("onbeforeupdate", bf);
		this.bA.QW(bf)
	};
	bb.beb = function (bc) {
		this.Bb(bc, "onafterupdate");
		if (bc.stopped)
			return;
		var bC = bc.data[this.eB.pkey];
		if (!!this.dy) {
			var bt = Fp.baq(bC);
			if (!!bt)
				bt.gm(bc.data)
		} else {
			var bid = Fp.bw(bC + "" + Fp.St());
			if (!bid)
				return;
			var bk = this.bA.hX(bc.key),
			bu = bm.dY(bk, bc.data);
			if (bu < 0)
				return;
			this.eB.list = bk;
			this.eB.beg = bu;
			this.eB.end = bu;
			this.eB.act = "update";
			var fD = Fp.cV(this.vK, this.eB);
			bid.insertAdjacentHTML("afterEnd", fD);
			Fp.fx(bid)
		}
	};
	bb.Bb = function (bc, bX) {
		var bt = bc.data;
		if (!bt || bt[this.eB.pkey] == null) {
			this.bG("onerror", bc);
			bc.stopped = !0
		}
		if (!bc.stopped) {
			this.bG(bX, bc)
		}
	};
	bb.Mm = co;
	bb.Mn = co;
	bb.LE = function (bc) {
		if (bc.key != this.hj.key)
			return;
		switch (bc.action) {
		case "add":
			this.Ee(bc);
			break;
		case "delete":
			this.Ed(bc);
			break;
		case "update":
			this.beb(bc);
			break;
		case "refresh":
			this.gm();
			break;
		case "unshift":
			this.Mn(bc.offset, bc.limit);
			break;
		case "append":
			this.Mm(bc.offset, bc.limit);
			break
		}
	};
	bb.lO = function (bt) {
		this.Ei({
			data : bt
		})
	};
	bb.oE = function (bt) {
		this.DY({
			data : bt
		})
	};
	bb.AY = function (bt) {
		this.bA.jo({
			data : bt,
			key : this.hj.key
		})
	};
	bb.AX = function () {
		return this.bA
	};
	bb.bdE = function (bl) {
		this.bdH("afterBegin", this.bdJ(bl));
		return this.bdI(bl)
	};
	bb.biL = function (bl) {
		this.bdH("beforeEnd", this.bdJ(bl));
		return this.bdI(bl)
	};
	bb.gm = function () {
		this.BK();
		this.LN()
	};
	bb.bbo = function () {
		if (!!this.Em)
			return;
		this.Em = !0;
		this.qk("onbeforepullrefresh", "列表刷新中...", "afterBegin");
		this.bA.bbo({
			key : this.hj.key,
			data : this.hj.data
		})
	};
	bb.kN = function () {
		return this.bA.kN(this.hj.key)
	};
	bb.biR = function () {
		return this.hb
	};
	bb.Qf = function () {
		return this.bA.Qf(this.hj.key)
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	fP = NEJ.R,
	bm = be("nej.u"),
	Fp = be("nej.e"),
	bv = be("nej.ut"),
	bb,
	bJ;
	if (!!bv.hr)
		return;
	bv.hr = NEJ.C();
	bb = bv.hr.bN(bv.EO);
	bJ = bv.hr.du;
	bb.rO = function (cl, ck) {
		return bJ.rO.call(this, this.ql, cl, this.ml, ck)
	};
	bb.My = function (bu) {
		var cl = 0;
		if (bu > 1)
			cl = this.ql + (bu - 2) * this.ml;
		return cl
	};
	bb.rG = function (bc) {
		bJ.rG.apply(this, arguments);
		if (!bc.stopped) {
			this.bdX(this.My(bc.index))
		}
	};
	bb.LR = function () {
		this.BK();
		this.qk("onbeforelistload", "列表加载中...")
	};
	bb.DH = function () {
		bJ.DH.apply(this, arguments);
		this.BK()
	};
	bb.LW = function (bk, cl, ft) {
		var dD = this.rO(cl, bk.length);
		if (this.bdN(dD.index, dD.total))
			return !0;
		this.LL(dD.total > 1 ? "" : "none")
	};
	bb.LU = function () {
		this.qk("onemptylist", "没有列表数据！")
	};
	bb.Mi = function (cD, nB) {
		if (!nB && bm.fX(cD)) {
			this.hd.innerHTML = cD;
			return
		}
		bJ.Mi.apply(this, arguments)
	};
	bb.Ij = function (fD) {
		this.hd.innerHTML = fD
	};
	bb.Ie = function (gf) {
		this.dy = gf
	};
	bb.Ee = function (bc) {
		this.Bb(bc, "onafteradd");
		if (!bc.stopped)
			this.gm()
	};
	bb.Ed = function (bc) {
		this.Bb(bc, "onafterdelete");
		if (!bc.stopped)
			this.gm()
	};
	bb.Mm = function (cl, ft) {
		var bu = 1;
		if (!!this.hb) {
			bu = this.hb.ph()
		}
		var iA = this.My(bu),
		iy = iA + (bu > 1 ? this.ml : this.ql);
		if (cl >= iy && !!this.hb) {
			var dD = this.rO(0, this.kN());
			this.hb.Kt(dD.total);
			this.LL(dD.total > 1 ? "" : "none")
		} else {
			this.gm()
		}
	};
	bb.Mn = function (cl, ft) {
		var bu = 1;
		if (!!this.hb) {
			bu = this.hb.ph()
		}
		var iA = this.My(bu),
		dD = this.rO(iA, this.kN());
		this.rG({
			last : bu,
			index : dD.index
		})
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bEZ = be("nm.w"),
	hc = 40,
	bb,
	bJ;
	bEZ.Er = NEJ.C();
	bb = bEZ.Er.bN(bK.eW);
	bJ = bEZ.Er.du;
	bb.dv = function () {
		this.dF()
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.Ao = bf.inputer;
		this.Nl = bf.tipper;
		this.dA([[this.Ao, "input", this.is.bh(this)]])
	};
	bb.cX = function () {
		this.dc();
		this.wS(null, null)
	};
	bb.is = function (bc) {
		if (bc && bc.type == "keyup" && (bc.keyCode != 8 || bc.keyCode != 68))
			return;
		var bX = this.Ao.value,
		bzz;
		if (bq.BJ(bX) > hc) {
			this.Ao.value = bq.BQ(bX, hc);
			this.wS("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.bh(this))
		} else if (bX.indexOf("#") >= 0 || bX.indexOf("@") >= 0) {
			this.wS("歌单名不能包含字符“@”和“#”！")
		} else {
			this.wS(null, null);
			this.bG("onchange", {
				value : bX
			})
		}
	};
	bb.bjY = function () {
		this.is()
	};
	bb.wS = function () {
		var bC = 0;
		return function (hA, bda) {
			if (!!bC)
				window.clearTimeout(bC);
			if (!hA) {
				Fp.bV(this.Nl, "f-vhide");
				this.bcZ = !1;
				return
			}
			this.Nl.innerHTML = '<i class="u-icn u-icn-25"></i>' + hA;
			Fp.bR(this.Nl, "f-vhide");
			this.bcZ = !0;
			if (bm.gj(bda))
				bC = window.setTimeout(function () {
						this.wS(null, null);
						bda()
					}
						.bh(this), 1e3)
		}
	}
	();
	bb.bcY = function () {
		if (this.bcZ)
			return !1;
		if (bq.hN(this.Ao.value)) {
			this.wS("歌单名不能为空");
			return !1
		}
		return !0
	};
	bb.fo = function () {
		return this.Ao.value
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bj = be("nej.v"),
	Fp = be("nej.e"),
	bH = be("nej.j"),
	bo = be("nm.l"),
	bEZ = be("nm.w"),
	eQ = be("nej.ui"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bb,
	bJ;
	bo.El = NEJ.C();
	bb = bo.El.bN(bo.eH);
	bJ = bo.El.du;
	bb.dv = function () {
		this.dF()
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.Ek = {
			inputer : bk[0],
			tipper : bk[1]
		};
		this.hB = {
			onerror : this.bcX.bh(this),
			onitemadd : this.bcX.bh(this)
		};
		this.lP = bk[2];
		bj.bs(bk[2], "click", this.uX.bh(this));
		bj.bs(bk[3], "click", this.vD.bh(this));
		bj.bs(this.bB, "keypress", this.bcW.bh(this))
	};
	bb.bLv = function () {
		this.dn = "m-wgt-create"
	};
	bb.cw = function (bf) {
		bf.clazz = " m-layer-w2";
		bf.parent = bf.parent || document.body;
		bf.title = "新建歌单";
		bf.draggable = !0;
		bf.destroyalbe = !0;
		bf.mask = true;
		this.cA(bf);
		this.Ek.inputer.value = bf.name || "";
		this.oN = bEZ.Er.bL(this.Ek);
		this.oN.bjY();
		this.bA = bp.fY.bL(this.hB);
		setTimeout(function () {
			this.Ek.inputer.focus()
		}
			.bh(this), 0)
	};
	bb.cX = function () {
		this.dc();
		if (this.oN) {
			this.oN.ch();
			delete this.oN
		}
		this.uZ(!1);
		this.Ek.inputer.value = ""
	};
	bb.uZ = function (Ah) {
		this.kO = Ah;
		if (Ah) {
			this.lP.innerHTML = "<i>新建中...</i>";
			Fp.bV(this.lP, "u-btn2-dis")
		} else {
			this.lP.innerHTML = "<i>新 建</i>";
			Fp.bR(this.lP, "u-btn2-dis")
		}
	};
	bb.uX = function () {
		if (this.kO || !this.oN.bcY())
			return;
		var fT = {
			key : "playlist_new-" + GUser.userId,
			data : {
				name : this.oN.fo()
			},
			offset : 1
		};
		this.bA.jo(fT);
		this.uZ(!0)
	};
	bb.bcX = function (bc) {
		var dU = (bc.result || bZ).code;
		if (!dU) {
			this.bG("onsuccess", bc.data)
		} else {
			this.bG("onerror", bc)
		}
		this.cj()
	};
	bb.vD = function () {
		this.cj()
	};
	bb.bcW = function (bc) {
		if (bc.keyCode == 13)
			this.uX()
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bH = be("nej.j"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.RK = NEJ.C();
	bb = bo.RK.bN(bo.eH);
	bJ = bo.RK.du;
	bb.dv = function () {
		this.dF()
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.gC = {
			limit : 301,
			parent : bk[1],
			cache : {
				klass : bp.fY,
				lkey : "playlist_new-" + GUser.userId,
				onlisterror : this.boi.bh(this)
			},
			item : {
				klass : "m-wgt-subscribe-item",
				cutStr : bq.yi,
				escape : bm.eZ
			}
		};
		this.hB = {
			onsuccess : this.EV.bh(this),
			onerror : this.jh.bh(this)
		};
		bj.bs(bk[0], "click", this.uX.bh(this));
		bj.bs(bk[1], "click", this.ry.bh(this))
	};
	bb.bLv = function () {
		this.dn = "m-wgt-subscribe"
	};
	bb.cw = function (bf) {
		bf.parent = bf.parent || document.body;
		bf.clazz = " m-layer-w2";
		bf.title = "添加到歌单";
		bf.draggable = !0;
		bf.mask = !0;
		this.cA(bf);
		this.RS = (bf.tracks || []).reverse();
		this.gC.item.size = this.RS.length;
		this.hB.name = bf.name || "";
		this.zn = bp.uQ.bL({
				onaddsuccess : this.RU.bh(this)
			});
		this.ns = bp.fY.bL({
				onlistload : this.bom.bh(this)
			});
		this.ns.bds();
		bm.bLt(this.RS, function (bt, bu, bk) {
			if (!bm.bLC(bt)) {
				bk[bu] = this.zn.fh(bt) || bt
			}
		}, this)
	};
	bb.bom = function () {
		if (this.fK)
			this.fK.ch();
		this.fK = bK.hr.bL(this.gC)
	};
	bb.uX = function () {
		this.cj();
		if (this.vu)
			this.vu.ch();
		this.vu = bo.El.bL(this.hB);
		this.vu.bO()
	};
	bb.ry = function () {
		var boq = function (bid) {
			while (bid && bid != document) {
				if (bid.tagName.toLowerCase() == "li") {
					return bid
				}
				bid = bid.parentNode
			}
		};
		return function (bc) {
			bj.cG(bc);
			var bD = bj.cf(bc),
			Sd = boq(bD);
			if (!!Sd && !Fp.cJ(Sd, "dis")) {
				this.EV({
					id : Fp.bI(Sd, "id")
				})
			}
		}
	}
	();
	bb.EV = function (bc) {
		var bC = bc.id;
		if (!bC || !this.RS.length)
			return;
		this.zn.jo({
			key : "track_playlist-" + bC,
			data : {
				tracks : this.RS,
				pid : bC
			}
		});
		this.cj()
	};
	bb.RU = function () {
		this.bG("onsuccess");
		bo.cq.bO({
			tip : "收藏成功"
		})
	};
	bb.jh = function (bc) {
		this.cj();
		this.bG("onerror", bc);
		var eG = "收藏失败";
		switch (bc.code) {
		case 405:
			eG = "操作过于频繁，先休息一下再试吧";
			break;
		case 507:
			eG = "歌单数量超过限制";
			break;
		case 502:
			eG = "歌曲已经存在"
		}
		bo.cq.bO({
			tip : eG,
			type : 2
		})
	};
	bb.boi = function () {
		this.cj();
		bo.cq.bO({
			tip : "列表下载失败，请稍后再试",
			type : 2
		})
	};
	bq.iE = function (bf) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			top.login();
			return
		}
		bo.RK.bO(bf)
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	dE = be("nej.p"),
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	bm = be("nej.u"),
	bq = be("nm.x");
	var Ba,
	nF,
	cg = decodeURIComponent(location.href),
	he = /.+(http:\/\/.+\/proxy.html)/.test(cg) ? RegExp.$1 : "";
	if (!!he) {
		bH.yX("mail_proxy_url", he)
	} else {
		he = bH.vz("mail_proxy_url") || "about:blank"
	}
	Ba = Fp.GG({
			src : he,
			onload : function () {
				nF = true
			}
		});
	var bOT = function () {
		bH.fN("USER_TRIGGER", {
			value : true,
			expire : 1 / (24 * 60),
			path : "/"
		})
	};
	var bPE = function () {
		if (dE.dp.browser == "ie" && parseInt(dE.dp.version) < 9) {
			bq.ep({
				clazz : "m-layer-w2",
				message : "当前浏览器版本过低，暂时无法使用，请升级后再试。"
			});
			return false
		}
		return true
	};
	bq.bOU = function (bDM, bC, cv) {
		if (!bPE())
			return;
		bOT();
		if (cv == "stop") {
			if (!nF)
				throw "proxy not loaded";
			bOT();
			Ba.contentWindow.location.replace(he + "#" + bm.eK({
					to : "ifrmMusic",
					message : JSON.stringify({
						s :  + (new Date),
						action : "stop"
					})
				}))
		} else {
			Ba.contentWindow.location.replace(he + "#" + bm.eK({
					to : "ifrmMusic",
					message : JSON.stringify({
						type : bDM,
						id : bC,
						s :  + (new Date),
						action : cv
					})
				}))
		}
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	bp = be("nm.d");
	var bwT = bp.qE.bL();
	var bHK = bp.uQ.bL({
			onlistload : bPD,
			onitemload : bPC,
			onerror : jh
		});
	var TR = bp.jM.bL({
			onlistload : bOZ,
			onitemload : bPB,
			onerror : jh
		});
	var VK = {};
	function bNv(bc) {
		var bid = bj.cf(bc, "d:resAction"),
		cv = Fp.bI(bid, "resAction");
		if (bid && (cv == "play" || cv == "addto")) {
			bOV({
				action : cv,
				type : parseInt(Fp.bI(bid, "resType")),
				id : Fp.bI(bid, "resId"),
				from : Fp.bI(bid, "resFrom"),
				data : Fp.bI(bid, "resData"),
				order : Fp.bI(bid, "resOrder")
			});
			bPA(bid)
		}
	}
	function bOV(de) {
		var cv = de.action,
		bDM = de.type,
		bC = de.id,
		dz = de.from,
		bl = de.data,
		pe = de.order,
		bf = {
			limit : 1e3,
			offset : 0,
			data : {
				id : bC
			},
			ext : {
				id : bC,
				action : cv,
				type : bDM,
				from : dz,
				data : bl
			}
		};
		if (cv != "play" && cv != "addto" || !bDM)
			return;
		if (window.GRef && GRef == "mail") {
			bq.bOU(bDM, bC, cv);
			return
		}
		switch (bDM) {
		case 13:
			bf.key = "track_playlist-" + bC;
			bHK.zS(bf);
			if (cv == "play") {
				bH.cR("/api/playlist/update/playcount", {
					query : {
						id : bC
					}
				})
			}
			break;
		case 17:
			bf.key = "program";
			bf.id = bC;
			TR.Aa(bf);
			if (cv == "play") {
				bH.cR("/api/dj/program/listen", {
					query : {
						id : bC
					}
				})
			}
			break;
		case 18:
			bf.key = "track";
			bf.id = bC;
			bHK.Aa(bf);
			break;
		case 19:
			bf.key = "track_album-" + bC;
			bHK.zS(bf);
			break;
		case 24:
			bf.key = "track_day";
			bHK.zS(bf);
			break;
		case 2:
			bf.key = "track_artist_top-" + bC;
			bHK.zS(bf);
			break;
		case 70:
			bf.key = "program_djradio-" + bC + "-" + pe;
			bf.data.radioId = bC;
			bf.data.asc = pe == 2;
			TR.zS(bf);
			break
		}
	}
	function bOW(bk) {
		var bn = [];
		bm.bLt(bk, function (bt) {
			if (bt.mainSong) {
				bt.mainSong.program = bt;
				bn.push(bt.mainSong);
				bt.localupdatetime =  + (new Date);
				bHK.bPH(bt.mainSong);
				bt.mainTrackId = bt.mainSong.id;
				delete bt.mainSong
			} else {
				var bOX = bHK.fh(bt.mainTrackId);
				bOX && bn.push(bOX)
			}
		});
		return bn
	}
	function bNJ(bk, bf) {
		var Lq = bf.action == "play" && bf.type != 17 && bf.type != 18,
		dB = bf.action == "play";
		if (!bk.length)
			return;
		bk = bq.bOk(bk, true);
		if (!bk || !bk.length)
			return;
		bm.bLt(bk, function (bt) {
			bt.source = bq.Gs({
					fid : bf.from,
					fdata : bf.data,
					type : bf.type,
					rid : bf.id
				}, bt.id)
		});
		top.player.addTo(bk, Lq, dB);
		bwT.ww({
			rid : bf.id,
			type : bf.type,
			hash : bq.uy(),
			play : dB,
			source : bf.from,
			sourceid : bf.data
		})
	}
	function bPD(bc) {
		var bk = bHK.hX(bc.key);
		bNJ(bk, bc.ext)
	}
	function bPC(bc) {
		var bk = [bHK.fh(bc.id)],
		eD = bk[0],
		bNu = bq.bNA(eD);
		if (bNu == 10) {
			bq.bHG(eD.fee, eD.id, "song")
		} else if (bNu == 100) {
			bq.bHH()
		} else {
			bNJ(bk, bc.ext)
		}
	}
	function bOZ(bc) {
		var bk = bOW(TR.hX(bc.key));
		bNJ(bk, bc.ext)
	}
	function bPB(bc) {
		var bk = bOW([TR.fh(bc.id)]);
		bNJ(bk, bc.ext)
	}
	function jh() {
		top.player.tipPlay("无法播放，音乐已下线")
	}
	function bPA(bid) {
		var bDM = Fp.bI(bid, "resType"),
		bC = Fp.bI(bid, "resId"),
		bF = bDM + "-" + bC;
		if (VK[bF])
			return;
		var bOY = Fp.bw("play-count"),
		Ht = Fp.bP(bid.parentNode, "nb"),
		bNz = null;
		if (bOY) {
			bNz = bOY
		} else {
			bNz = !!Ht && !!Ht[0] ? Ht[0] : null
		}
		if (bNz) {
			var dm = bNz.innerHTML;
			if (/^\d+$/.test(dm)) {
				bNz.innerText = +dm + 1
			}
			VK[bF] = true
		}
	}
	bq.bPz = function (bid) {
		bj.bs(bid || document.body, "click", bNv.bh(this))
	};
	bq.bPy = function (cv, bDM, bC) {
		bOV({
			action : cv,
			type : bDM,
			id : bC
		})
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bj = be("nej.v"),
	bK = be("nej.ut"),
	bp = be("nm.d"),
	bb,
	bJ;
	bp.gN({
		"share-all" : {
			url : "/share/resource",
			onload : "onshareall",
			onerror : "onshareerror"
		},
		"share-private" : {
			url : "/api/msg/private/send",
			onload : "onshareprivate",
			onerror : "onshareerror"
		}
	});
	bp.bac = NEJ.C();
	bb = bp.bac.bN(bp.gY);
	bb.boL = function (bf) {
		this.dg("share-all", bf)
	};
	bb.boN = function (bf) {
		this.dg("share-private", bf)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	dE = be("nej.p"),
	bH = be("nej.j"),
	ib = be("nej.ut"),
	eQ = be("nej.ui"),
	bEZ = be("nm.w"),
	bb,
	bJ;
	var boO = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
	bEZ.vq = NEJ.C();
	bb = bEZ.vq.bN(eQ.ic);
	var iH = Fp.mI("m-wgt-receiverInput");
	var boP = Fp.mI("m-wgt-receiverList");
	var hu = Fp.oR(boO);
	var boW = Fp.mI('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
	bb.dv = function (bf) {
		this.bS = [];
		this.pQ = bf.receiver || null;
		this.boZ = bf.unique || false;
		this.pO = bf.err;
		this.ZU(this.ZT, bf.uid);
		this.dF(bf)
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.zz();
		this.zA();
		this.DU();
		if (bf.receiver)
			this.SH(bf.receiver.nickname, bf.receiver.userId);
		Fp.bY(this.sd, "display", "block");
		Fp.bY(this.SK, "cursor", "text");
		Fp.bY(this.sd, "cursor", "text")
	};
	bb.bLv = function () {
		var bl = this.ZS();
		this.dn = Fp.mo(Fp.cV(iH, {
					receiver : this.pQ,
					users : bl
				}));
		this.kT = hu
	};
	bb.bFa = function () {
		this.bLu();
		var cm = Fp.bP(this.bB, "j-flag");
		var gf = Fp.bP(this.bB, "j-item");
		this.SK = cm[0];
		this.ZR = cm[1];
		this.eR = cm[2];
		this.sd = cm[3];
		this.En = cm[4];
		this.ID = cm[5];
		this.dy = gf;
		Fp.bV(this.dy[0], "j-selected");
		bj.bs(this.eR, "keyup", this.IE.bh(this));
		bj.bs(this.eR, "keydown", this.bpa.bh(this));
		bj.bs(this.eR, "focus", this.kI.bh(this));
		bj.bs(this.En, "click", this.bpb.bh(this));
		bj.bs(this.SK, "click", this.bpe.bh(this));
		bj.bs(document.body, "click", this.nr.bh(this));
		bj.bs(this.eR, "input", this.is.bh(this));
		bj.bs(this.eR, "blur", this.zB.bh(this))
	};
	bb.cX = function (bf) {
		bj.nt(document.body, "click", this.nr.bh(this));
		this.dc();
		this.DU();
		this.bpf();
		this.nr()
	};
	bb.IE = function (bc) {
		bj.cu(bc);
		var kD = bc.keyCode || bc.which;
		var ci = this.eR.value;
		var ck = this.dy.length;
		var mC = Fp.bP(this.bB, "j-selected")[0];
		switch (kD) {
		case 13:
			var iV = Fp.gK(mC, "data-username");
			var il = Fp.gK(mC, "data-userId");
			this.SH(iV, il);
			this.nr();
			this.eR.value = "";
			break;
		case 38:
			var bu = Fp.gK(mC, "data-index") - 1 < 0 ? ck - 1 : Fp.gK(mC, "data-index") - 1;
			Fp.bR(mC, "j-selected");
			Fp.bV(this.dy[bu], "j-selected");
			break;
		case 40:
			var bu = parseInt(Fp.gK(mC, "data-index")) + 1 >= ck ? 0 : parseInt(Fp.gK(mC, "data-index")) + 1;
			Fp.bR(mC, "j-selected");
			Fp.bV(this.dy[bu], "j-selected");
			break;
		default:
			this.zE()
		}
	};
	bb.bpa = function (bc) {
		var kD = bc.keyCode || bc.which;
		var ci = this.eR.value;
		var bu = Fp.bP(this.bB, "j-receiver").length - 1;
		if (kD === 8 && ci === "")
			this.bpg(bu)
	};
	bb.is = function (bc) {
		var ci = this.eR.value;
		if (ci.length > 10) {
			this.eR.value = ci.substring(0, 10);
			return
		}
		dE.dp.browser == "ie" && dE.dp.version < "7.0" ? setTimeout(this.IR.bh(this), 0) : this.IR();
		this.zA()
	};
	bb.kI = function () {
		if (this.bS[0])
			this.zE();
		else
			this.ZU(this.bph);
		Fp.bY(this.sd, "display", "none")
	};
	bb.zB = function () {
		var ck = Fp.bP(this.bB, "j-receiver").length;
		if (this.eR.value.trim() == "" && ck <= 0)
			Fp.bY(this.sd, "display", "block")
	};
	bb.SH = function (iV, il) {
		var xE = this.zH();
		if (xE.length >= 10) {
			this.bxe();
			return
		}
		var cQ;
		for (cQ = 0; cQ < xE.length; cQ++) {
			if (xE[cQ] == il) {
				this.nr();
				return
			}
		}
		if (!iV || !il)
			return;
		var bid = Fp.eP(Fp.mo(Fp.cV(boW, {
						username : iV,
						userId : il
					})));
		var cU = this.ZR.parentNode;
		if (this.boZ) {
			this.DU()
		}
		cU.insertBefore(bid, this.ZR);
		this.eR.value = "";
		var ck = Fp.bP(this.bB, "j-receiver").length;
		if (ck > 1)
			Fp.bY(this.sd, "display", "none");
		this.IR();
		this.zA()
	};
	bb.DU = function () {
		var zI = Fp.bP(this.bB, "j-receiver");
		var cQ;
		if (zI.length > 0) {
			for (cQ = 0; cQ < zI.length; cQ++) {
				Fp.fx(zI[cQ], false)
			}
		}
	};
	bb.bpf = function () {
		this.eR.value = ""
	};
	bb.bpg = function (bu) {
		this.bxe(!0);
		var zI = Fp.bP(this.bB, "j-receiver");
		Fp.fx(zI[bu], false);
		this.zA()
	};
	bb.zE = function () {
		var ci = this.eR.value;
		var cC = ci.trim().toLowerCase();
		var bl;
		cC = cC.replace(/\[/g, "\\[");
		cC = cC.replace(/\]/g, "\\]");
		bl = this.ZS(cC);
		this.bpl(bl)
	};
	bb.nr = function (bc) {
		Fp.bY(this.En, "display", "none")
	};
	bb.bxe = function (hO) {
		if (hO && this.pO) {
			Fp.bY(this.pO, "display", "none");
			return
		}
		if (this.pO)
			Fp.bY(this.pO, "display", "block")
	};
	bb.bpb = function (bc) {
		bj.cG(bc);
		var ei = bc.target || bc.srcElement;
		if (Fp.cJ(ei, "j-flag"))
			return;
		var cU = ei.nodeName.toLowerCase() == "a" ? ei.parentNode : ei.parentNode.parentNode;
		var iV = Fp.gK(cU, "data-username");
		var il = Fp.gK(cU, "data-userId");
		this.SH(iV, il);
		this.nr();
		Fp.bY(this.sd, "display", "none")
	};
	bb.bpe = function (bc) {
		bj.cu(bc);
		var ei = bc.target || bc.srcElement;
		if (Fp.cJ(ei.parentNode, "j-receiver")) {
			Fp.fx(ei.parentNode, false);
			this.bxe(!0);
			this.zA()
		} else
			this.eR.focus()
	};
	bb.IR = function () {
		this.ID.innerHTML = this.eR.value;
		var eV = this.ID.offsetWidth + 2;
		Fp.bY(this.eR, "width", eV + "px")
	};
	bb.zA = function () {
		var bpp = Fp.mV(this.eR, this.bB).y;
		var ZH = Math.floor((bpp - 8) / 27);
		if (ZH < 0)
			return;
		Fp.bY(this.SK, "height", 19 + ZH * 29 + "px")
	};
	bb.zz = function () {
		var mc = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
		for (var i = 0; i < mc.length; i++) {
			Fp.bY(this.ID, mc[i], Fp.bIU(this.eR, mc[i]))
		}
	};
	bb.ZU = function (fF, bC) {
		var fI = bC ? bC : window.GUser.userId;
		var cg = "/api/user/getfollows/" + fI;
		var fb = bH.cR(cg, {
				sync : false,
				method : "get",
				query : "offset = 0&limit=1000&order=true",
				onload : fF.bh(this),
				onerror : function (bl) {
					this.bS = []
				},
				onbeforerequest : function (bl) {}

			})
	};
	bb.ZT = function (bl) {
		this.bS = JSON.parse(bl).follow || [];
		var bC = GUser.userId;
		for (var i = 0; i < this.bS.length; i++) {
			if (this.bS[i].userId == bC) {
				this.bS.splice(i, 1);
				continue
			}
			this.bS[i].avatarUrl = this.bS[i].avatarUrl + "?param=30y30"
		}
	};
	bb.bph = function (bl) {
		if (this.bS[0])
			return;
		this.ZT(bl);
		this.zE()
	};
	bb.ZS = function (cC) {
		var cC = cC ? cC : "";
		this.bS = this.bS[0] ? this.bS : [];
		var ck = this.bS.length;
		var zL = this.zH();
		var nC = [];
		var zN,
		zO,
		Jf;
		if (!this.bS[0])
			return nC;
		for (var cQ = 0; cQ < ck; cQ++) {
			Jf = false;
			for (var bH = 0; bH < zL.length; bH++) {
				if (this.bS[cQ].userId == zL[bH]) {
					Jf = true;
					break
				}
			}
			if (Jf)
				continue;
			zN = this.bS[cQ].nickname.toLowerCase().search(cC);
			zO = this.bS[cQ].py ? this.bS[cQ].py.toLowerCase().search(cC) : -1;
			if (zN !== -1 || zO != -1)
				nC.push(this.bS[cQ])
		}
		return nC
	};
	bb.bpl = function (bl) {
		Fp.ne(this.En, boP, {
			users : bl
		});
		Fp.bV(Fp.bP(this.bB, "j-item")[0], "j-selected");
		this.dy = Fp.bP(this.bB, "j-item");
		Fp.bY(this.En, "display", "block")
	};
	bb.zH = function () {
		var nC = Fp.bP(this.bB, "j-receiver") || [];
		var il = [];
		for (var i = 0; i < nC.length; i++) {
			il.push(Fp.gK(nC[i], "data-id"))
		}
		return il
	};
	bb.byC = function () {
		var il = this.zH();
		var nC = [];
		for (var i = 0; i < il.length; i++) {
			for (var j = 0; j < this.bS.length; j++) {
				if (il[i] == this.bS[j].userId)
					nC.push(this.bS[j])
			}
		}
		return nC
	};
	bb.bpt = function () {
		this.DU()
	};
	bEZ.vq.bO = function (bf) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			bo.kA.bO({
				title : "登录"
			});
			return
		}
		bf = bf || {};
		if (bf.parent === undefined)
			bf.parent = document.body;
		!!this.fq && this.fq.ch();
		this.fq = this.bL(bf)
	};
	bEZ.vq.cj = function () {
		!!this.fq && this.fq.ch()
	};
	bEZ.vq.xu = function () {
		return this.nr()
	};
	bEZ.vq.byB = function () {
		return this.zE()
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.xt = NEJ.C();
	bb = bo.xt.bN(bo.Jd);
	bJ = bo.xt.du;
	bb.cw = function () {
		var ve;
		var bpy = function (bz, bF) {
			ve = ve || [];
			if (bF != "18")
				ve.push({
					key : bF,
					value : bz
				})
		};
		return function (bf) {
			this.cA(bf);
			if (!ve) {
				var bLs = bq.bkx();
				bm.eJ(bLs, bpy)
			}
			var ck = ve.length;
			ve.splice(ck - 2, 0, {
				key : "18",
				value : "186"
			});
			this.Gh = ve
		}
	}
	();
	bb.bLv = function () {
		this.dn = "ntp-portrait"
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.dk = bk[0];
		this.bpA = bk[1];
		this.bpB = bk[2];
		this.bpC = bk[3];
		bj.bs(this.dk, "click", this.qx.bh(this));
		bj.bs(this.bpA, "click", this.qw.bh(this, 1));
		bj.bs(this.bpC, "click", this.qw.bh(this, 2))
	};
	bb.Ju = function (bu) {
		this.GU = bu;
		var cl = (bu - 1) * 50;
		var bk = this.Gh.slice(cl, Math.min(cl + 50, this.Gh.length));
		this.dk.innerHTML = Fp.cV("jst-portrait", {
				plist : bk
			}, {
				purl : bq.bcy
			});
		this.bpB.innerText = bu + "/" + Math.ceil(this.Gh.length / 50)
	};
	bb.qw = function (bu) {
		var bpD = Math.ceil(this.Gh.length / 50);
		if (bu == 1 && this.GU == 1 || bu == 2 && this.GU == bpD)
			return;
		bu == 1 ? this.Ju(this.GU - 1) : this.Ju(this.GU + 1)
	};
	bb.qx = function (bc) {
		var bD = bj.cf(bc, "d:text");
		if (!bD)
			return;
		var bc = {
			url : Fp.bI(bD, "url"),
			text : Fp.bI(bD, "text")
		};
		this.bG("onselect", bc);
		if (!bc.stopped)
			this.cj()
	};
	bb.bO = function () {
		bJ.bO.call(this);
		this.Ju(1)
	}
})();
(function () {
	var be = NEJ.P,
	bj = be("nej.v"),
	bm = be("nej.u"),
	dE = be("nej.p"),
	bT = be("nej.h"),
	bK = be("nej.ut"),
	hy = /^[#?]+/,
	BD = /#(.*?)$/,
	qt = window,
	Jy = !history.pushState || dE.Nn.android || !history.auto;
	var GZ = function (cg, JA) {
		qt.history[!JA ? "pushState" : "replaceState"](null, document.title, cg)
	};
	var Hb = function () {
		return location.parse(qt.location.href)
	};
	GZ = GZ.ee(function (bc) {
			if (!Jy)
				return;
			var ce = bc.args;
			bc.stopped = !0;
			cg = ce[0].replace(hy, "");
			!ce[1] ? qt.location.hash = cg : qt.location.replace("#" + cg)
		});
	Hb = Hb.ee(function (bc) {
			if (!Jy)
				return;
			bc.stopped = !0;
			var bLw = BD.test(qt.location.href) ? RegExp.$1 : "";
			bc.value = location.parse(bLw.replace(hy, ""))
		});
	location.redirect = function (cg, JA) {
		GZ(cg, JA);
		return this
	};
	location.active = function () {
		var fu,
		cg,
		bLi,
		cN,
		Zu;
		var JD = function (ht) {
			if (!!cN) {
				cN = !1;
				return
			}
			var bc = {
				oldValue : bLi,
				newValue : Hb()
			};
			if (!!location.ignored) {
				location.ignored = !1
			} else {
				bj.bG(location, "beforeurlchange", bc);
				if (bc.stopped) {
					if (!!bLi) {
						cN = !0;
						GZ(bLi.href, !0)
					}
					return
				}
			}
			cg = qt.location.href;
			bLi = bc.newValue;
			bj.bG(location, "urlchange", bLi);
			bT.Pu(bLi.href)
		};
		var Zr = function () {
			if (cg != qt.location.href)
				JD();
			fu = requestAnimationFrame(Zr)
		};
		return function (fZ) {
			if (!!Zu)
				return this;
			Zu = !0;
			qt = fZ || window;
			if (Jy && "onhashchange" in window && dE.jN.trident2) {
				bj.bs(qt, "hashchange", JD);
				JD()
			} else if (!fu) {
				fu = requestAnimationFrame(Zr)
			}
			return this
		}
	}
	();
	location.parse = function () {
		var fg = /^https?:\/\/.*?\//i,
		hy = /[?#]/;
		return function (cg) {
			var bn = {
				href : cg
			};
			cg = (cg || "").replace(fg, "/").split(hy);
			var dm = 1;
			if (cg[0] == "/" && (cg[1] || "").indexOf("/") == 0)
				dm = 2;
			bn.path = cg.splice(0, dm).join("?");
			bn.query = bm.mk(cg.join("&"));
			return bn
		}
	}
	();
	location.same = function (cg) {
		return Hb().href == cg
	};
	bK.hh.bL({
		element : location,
		event : ["beforeurlchange", "urlchange"]
	})
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	fS = be("nm.ut");
	fS.ov = function (gE) {
		var fB = {
			text : "",
			start : 0,
			end : 0
		};
		if (gE.setSelectionRange) {
			fB.start = gE.selectionStart;
			fB.end = gE.selectionEnd;
			fB.text = fB.start != fB.end ? gE.value.substring(fB.start, fB.end) : ""
		} else if (document.selection) {
			var i,
			HJ = document.selection.createRange(),
			rh = document.body.createTextRange();
			rh.moveToElementText(gE);
			fB.text = HJ.text;
			fB.bookmark = HJ.getBookmark();
			for (i = 0; rh.compareEndPoints("StartToStart", HJ) < 0 && HJ.moveStart("character", -1) !== 0; i++) {
				if (gE.value.charAt(i) == "\n") {
					i++
				}
			}
			fB.start = i;
			fB.end = fB.text.length + fB.start
		}
		return fB
	};
	fS.HN = function (gE, fB) {
		var rh;
		if (!fB) {
			fB = {
				text : "",
				start : 0,
				end : 0
			}
		}
		gE.focus();
		if (gE.setSelectionRange) {
			gE.setSelectionRange(fB.start, fB.end)
		} else if (gE.createTextRange) {
			rh = gE.createTextRange();
			if (gE.value.length === fB.start) {
				rh.collapse(false);
				rh.select()
			} else {
				rh.moveToBookmark(fB.bookmark);
				rh.select()
			}
		}
	};
	fS.xk = function (gE, fB, fc) {
		var fB = fB || {
			text : "",
			start : 0,
			end : 0
		};
		var JN,
		Zq,
		rh,
		Af,
		Zp,
		Zo,
		va;
		this.HN(gE, fB);
		if (gE.setSelectionRange) {
			JN = gE.value;
			Zq = JN.substring(0, fB.start) + fc + JN.substring(fB.end);
			Zp = Zo = fB.start + fc.length;
			va = gE.scrollTop;
			gE.value = Zq;
			if (gE.scrollTop != va) {
				gE.scrollTop = va
			}
			gE.setSelectionRange(Zp, Zo)
		} else if (gE.createTextRange) {
			Af = document.selection.createRange();
			Af.text = fc;
			Af.setEndPoint("StartToEnd", Af);
			Af.select()
		}
		bj.bG(gE, "keyup")
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	dE = be("nej.p"),
	bm = be("nej.u"),
	ib = be("nej.ut"),
	bEZ = be("nm.w"),
	fS = be("nm.ut"),
	bb;
	bEZ.Zn = NEJ.C();
	bb = bEZ.Zn.bN(ib.eW);
	bb.dv = function (bf) {
		this.dF(bf)
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.eY = bf.txt;
		this.uY = bf.sgtsContainer;
		this.Zm = bf.sgtsList[0];
		this.DP = bf.sgtsItem;
		this.kJ = bf.rangeData;
		this.xd = bf.atIndex;
		Fp.bV(this.DP[0], "selected-item");
		this.Ai()
	};
	bb.cX = function () {
		this.dc();
		bj.nt(document.body, "keyup", this.Zl.bh(this));
		bj.nt(document.body, "click", this.Zj.bh(this))
	};
	bb.Ai = function () {
		this.dA([[document.body, "keyup", this.Zl.bh(this)], [document.body, "click", this.Zj.bh(this)], [this.eY, "keydown", this.Zi.bh(this)], [this.eY, "keypress", this.Zi.bh(this)], [this.Zm, "click", this.Zh.bh(this)], [this.Zm, "mouseover", this.vB.bh(this)]])
	};
	bb.vB = function (bc) {
		var ei = bj.cf(bc);
		var bt = Fp.bP(this.uY, "selected-item");
		if (Fp.cJ(ei, "j-sgt")) {
			Fp.bR(bt[0], "selected-item");
			Fp.bV(ei, "selected-item")
		}
	};
	bb.Zl = function (bc) {
		var bt = Fp.bP(this.uY, "selected-item");
		var ck = this.DP.length;
		var kD = bc.keyCode || bc.which;
		var bu,
		bl;
		switch (kD) {
		case 38:
			bu = Fp.gK(bt[0], "data-index") - 1 < 0 ? ck - 1 : Fp.gK(bt[0], "data-index") - 1;
			Fp.bR(bt[0], "selected-item");
			Fp.bV(this.DP[bu], "selected-item");
			break;
		case 40:
			bu = parseInt(Fp.gK(bt[0], "data-index")) + 1 >= ck ? 0 : parseInt(Fp.gK(bt[0], "data-index")) + 1;
			Fp.bR(bt[0], "selected-item");
			Fp.bV(this.DP[bu], "selected-item");
			break;
		case 13:
			this.Zh(bc);
			break;
		case 27:
			this.nr();
			break;
		case 32:
			var ci = this.eY.value;
			var bu = fS.ov(this.eY);
			if (ci.charAt(bu.start - 1) !== " ")
				return;
			this.nr();
			break
		}
	};
	bb.Zi = function (bc) {
		var kD = bc.keyCode || bc.which;
		if (kD === 13 || kD === 38 || kD === 40) {
			bj.cG(bc);
			bc.keyCode = 0;
			bc.which = 0;
			bc.returnvalue = false
		}
	};
	bb.Zj = function (bc) {
		var ei = bc.target || bc.srcElement;
		if (ei === this.eY)
			return;
		this.nr()
	};
	bb.Zh = function (bc) {
		bj.cu(bc);
		var bt = Fp.bP(this.uY, "selected-item")[0];
		var mC = bc.target || bc.srcElement;
		var bDM = bc.type;
		if (Fp.cJ(mC, "lst"))
			return;
		if (bDM == "click") {
			Fp.bR(bt, "selected-item");
			Fp.bV(mC, "selected-item")
		} else
			mC = bt;
		var bl = mC.innerHTML + " ";
		this.nr();
		var fB = this.kJ;
		fB.start = this.xd + 1;
		if (dE.dp.browser == "ie" && dE.dp.version < "9.0") {
			this.eY.value = this.eY.value.substring(0, fB.start) + this.eY.value.substring(fB.end, this.eY.value.length);
			fB.end = fB.start
		}
		fS.xk(this.eY, fB, bl);
		bj.bG(this.eY, "keyup")
	};
	bb.nr = function (bc) {
		if (!!this.uY)
			Fp.bY(this.uY, "display", "none");
		this.ch()
	};
	bb.zE = function (bc) {
		if (!!this.uY)
			Fp.bY(this.uY, "display", "block")
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bH = be("nej.j"),
	bEZ = be("nm.w"),
	ib = be("nej.ut"),
	eQ = be("nej.ui"),
	bb;
	var bpJ = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
	var bpL = Fp.mI("m-wgt-atlist");
	var hu = Fp.oR(bpJ);
	bEZ.Zd = NEJ.C();
	bb = bEZ.Zd.bN(eQ.ic);
	bb.dv = function (bf) {
		this.fr = {};
		this.dF()
	};
	bb.cw = function (bf) {
		this.fr.txt = Fp.bw(bf.target);
		this.fr.data = bf.data;
		this.fr.offset = bf.offset;
		this.fr.rangeData = bf.rangeData;
		this.fr.atIndex = bf.atIndex;
		this.bpO(bf);
		this.cA(bf);
		this.fr.sgtsContainer = this.bB;
		this.fr.sgtsList = Fp.bP(this.bB, "lst");
		this.fr.sgtsItem = Fp.bP(this.bB, "f-thide");
		this.Za(bf);
		this.bpP = bEZ.Zn.bL(this.fr)
	};
	bb.cX = function (bf) {
		this.dc();
		this.bpP.ch()
	};
	bb.bLv = function () {
		this.kT = hu
	};
	bb.bFa = function () {
		this.bLu()
	};
	bb.bpO = function (bf) {
		this.bB = Fp.eP(Fp.mo(Fp.cV(bpL, bf.data)))
	};
	bb.Za = function (bf) {
		var YY = Fp.bP(this.bB, "selected-item")[0];
		if (YY)
			Fp.bR(YY, "selected-item");
		var dr = bf.offset.x + "px";
		var gF = bf.offset.y + "px";
		Fp.bY(this.bB, "left", dr);
		Fp.bY(this.bB, "top", gF)
	}
})();
(function () {
	var be = NEJ.P,
	bH = be("nej.j"),
	fS = be("nm.ut");
	fS.YX = function (ci) {
		if (!GUser || !GUser.userId || GUser.userId <= 0)
			return;
		var dq = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
		var wV = ci.match(dq) || [];
		for (var cQ = 0; cQ < wV.length; cQ++) {
			wV[cQ] = wV[cQ].split("@")[1]
		}
		wV = wV.reverse();
		var il = GUser.userId;
		var bpT = bH.vz("mentioners" + il) || [];
		var gZ = wV.concat(bpT);
		if (gZ.length > 10)
			gZ = gZ.slice(0, 10);
		bH.yX("mentioners" + il, gZ)
	};
	fS.bpU = function () {
		if (!GUser || !GUser.userId || GUser.userId <= 0)
			return;
		var il = GUser.userId;
		return bH.vz("mentioners" + il) || []
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	dE = be("nej.p"),
	bH = be("nej.j"),
	bm = be("nej.u"),
	ib = be("nej.ut"),
	bEZ = be("nm.w"),
	fS = be("nm.ut"),
	bb;
	bEZ.YT = NEJ.C();
	bb = bEZ.YT.bN(ib.eW);
	bb.dv = function (bf) {
		this.dF(bf);
		this.YS()
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.eY = bf.txt;
		this.bB = bf.body;
		this.YR = bf.before;
		this.Cs = bf.flag;
		this.bpW = bf.after;
		this.lK = [];
		if (dE.dp.browser != "ie") {
			setTimeout(function () {
				this.iO()
			}
				.bh(this), 0)
		}
		this.Ai()
	};
	bb.cX = function () {
		this.dc();
		if (this.oT)
			this.oT.ch();
		delete this.oT
	};
	bb.Ai = function () {
		this.dA([[this.eY, "keyup", this.YP.bh(this, this.eY)], [this.eY, "click", this.YP.bh(this, this.eY)], [this.eY, "focus", this.iO.bh(this)]])
	};
	bb.iO = function (bc) {
		this.kJ = fS.ov(this.eY)
	};
	bb.YS = function () {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			window.GFollowers = [];
			return
		}
		var fI = window.GUser.userId;
		var cg = "/api/user/getfollows/" + fI;
		var fb = bH.cR(cg, {
				sync : false,
				method : "get",
				query : "offset = 0&limit=1000&order=true",
				onload : function (bl) {
					window.GFollowers = JSON.parse(bl).follow
				}
				.bh(this),
				onerror : function (bl) {},
				onbeforerequest : function (bl) {}

			})
	};
	bb.YO = function (index) {
		var bz = this.eY.value,
		cl,
		KA,
		KB,
		YN;
		this.YR.innerHTML = bm.eZ(bz.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
		var nL = Fp.bP(this.YR, "j-test");
		for (var cQ = 0; cQ < nL.length; cQ++) {
			nL[cQ].innerText = " "
		}
		this.Cs.innerHTML = bz.charAt(index);
		this.bpW.innerHTML = bm.eZ(bz.substr(index + 1, bz.length));
		YN = parseInt(Fp.bIU(this.eY, "lineHeight"));
		Fp.bY(this.bB, "display", "block");
		KA = Fp.mV(this.Cs, this.bB);
		KB = Fp.mV(this.eY);
		Fp.bY(this.bB, "display", "none");
		var dr = KA.x + KB.x;
		var gF = KA.y + KB.y + YN;
		cl = {
			x : dr,
			y : gF
		};
		this.bpY(cl)
	};
	bb.YP = function (gE, bc) {
		bj.cG(bc);
		var gE = gE;
		var bz = gE.value;
		var ck = bz.length;
		var bu = fS.ov(gE).start;
		var YL = 0;
		var kD = bc.keyCode || bc.which;
		var gZ;
		this.kJ = fS.ov(gE);
		var YK = false;
		for (var i = 1; i < 20; i++) {
			gZ = bu - i;
			if (bz.charAt(gZ) === " ")
				break;
			if (bz.charAt(gZ) === "@") {
				YK = true;
				this.xd = YL = gZ;
				break
			}
		}
		if (YK && bc.shiftKey === false && kD !== 38 && kD !== 40) {
			if (kD !== 27 && kD !== 13) {
				this.oT ? this.oT.ch() : null;
				this.YO(YL)
			}
		} else if (kD !== 38 && kD !== 40 && bc.keyCode !== 32) {
			this.oT ? this.oT.ch() : null
		}
	};
	bb.bpY = function (cl) {
		var cl = cl;
		var bl = this.bqa();
		var bf = {
			parent : document.body,
			offset : cl,
			data : bl,
			target : this.eY,
			rangeData : this.kJ,
			atIndex : this.xd
		};
		this.oT ? this.oT.ch() : null;
		this.oT = bEZ.Zd.bL(bf)
	};
	bb.bqa = function () {
		var bqc = fS.ov(this.eY).start;
		var bqd = this.xd + 1;
		var YG = fS.bpU() || [];
		var YF = [];
		var cC = this.eY.value.substring(bqd, bqc).toLowerCase();
		cC = cC.replace(/\[/g, "\\[");
		cC = cC.replace(/\]/g, "\\]");
		if (window.GFollowers) {
			this.lK = window.GFollowers[0] ? window.GFollowers : []
		} else
			this.lK = [];
		if (!this.lK[0])
			this.YS();
		for (var cQ = 0; cQ < YG.length; cQ++) {
			for (var bH = 0; bH < this.lK.length; bH++) {
				if (this.lK[bH].nickname == YG[cQ])
					YF.push(this.lK[bH])
			}
		}
		this.lK = bm.bvd(this.lK, YF, {
				union : true,
				begin : true
			});
		var bqe = this.lK.length;
		var EU = [];
		var zN,
		zO;
		if (!this.lK[0])
			return {
				suggests : EU
			};
		for (var i = 0; i < bqe; i++) {
			zN = this.lK[i].nickname.toLowerCase().search(cC);
			zO = this.lK[i].py ? this.lK[i].py.toLowerCase().search(cC) : -1;
			if (zN !== -1 || zO != -1)
				EU.push(this.lK[i]);
			if (EU.length === 10)
				break
		}
		return {
			suggests : EU
		}
	};
	bb.AB = function () {
		var fB = this.kJ || {
			text : "",
			start : 0,
			end : 0
		};
		bj.bG(this.eY, "focus");
		fS.xk(this.eY, fB, "@");
		this.kJ = fS.ov(this.eY);
		this.xd = fB.start;
		this.YO(this.xd)
	};
	bb.xu = function () {
		if (this.oT)
			this.oT.ch()
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bH = be("nej.j"),
	bEZ = be("nm.w"),
	ib = be("nej.ut"),
	eQ = be("nej.ui"),
	bb;
	var bqg = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
	var bqi = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
	var iH = Fp.mo(bqi);
	var hu = Fp.oR(bqg);
	bEZ.AE = NEJ.C();
	bb = bEZ.AE.bN(eQ.ic);
	bb.dv = function (bf) {
		this.fr = {};
		this.dF()
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.fr.txt = Fp.bw(bf.target);
		this.zz();
		this.AF = bEZ.YT.bL(this.fr)
	};
	bb.cX = function (bf) {
		this.dc();
		this.AF.ch()
	};
	bb.bLv = function () {
		this.dn = iH;
		this.kT = hu
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.dh(Fp.bw(this.bB));
		this.fr.body = this.bB;
		this.fr.before = bk[0];
		this.fr.flag = bk[1];
		this.fr.after = bk[2]
	};
	bb.zz = function () {
		var mc = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
		for (var i = 0; i < mc.length; i++) {
			if (mc[i] === "width" && Fp.bIU(this.fr.txt, mc[i]) == "100%") {
				Fp.bY(this.bB, mc[i], this.fr.txt.offsetWidth + "px");
				continue
			}
			Fp.bY(this.bB, mc[i], Fp.bIU(this.fr.txt, mc[i]))
		}
	};
	bb.AB = function () {
		this.AF.AB()
	};
	bb.xu = function () {
		this.AF.xu()
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	dr = be("nej.x"),
	bv = be("nej.ut"),
	bb;
	if (!!bv.wK)
		return;
	bv.wK = NEJ.C();
	bb = bv.wK.bN(bv.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.lf = bf.event || "click";
		this.hQ = bf.selected || "js-selected";
		this.jV = bf.disabled || "js-disabled";
		this.YB = !!bf.inverse;
		this.bqj(bf.list);
		this.KV(bf.index || 0)
	};
	bb.cX = function () {
		var bqk = function (bid) {
			this.KX(bid, !1)
		};
		return function () {
			this.dc();
			bm.bLt(this.dK, bqk, this);
			delete this.dK;
			delete this.lf;
			delete this.dw;
			delete this.jV;
			delete this.hQ;
			delete this.YB
		}
	}
	();
	bb.bqj = function () {
		var KG = function (bt) {
			if (!bt)
				return;
			this.dK.push(bt);
			var bu = this.dK.length - 1,
			el = this.KY[bu];
			if (!el) {
				el = this.KV.bh(this, bu);
				this.KY[bu] = el
			}
			this.dA([[bt, this.lf, el]])
		};
		return function (bk) {
			this.dK = [];
			if (!this.KY)
				this.KY = [];
			bm.bLt(bk, KG, this)
		}
	}
	();
	bb.KX = function (bD, bql) {
		!!bql && !this.YB ? Fp.bV(bD, this.hQ) : Fp.bR(bD, this.hQ)
	};
	bb.KV = function (bu, PW) {
		var bD = this.dK[bu];
		if (PW != !0 && (bu == this.dw || !bD || Fp.cJ(bD, this.jV))) {
			bj.cG(arguments[1]);
			return this
		}
		var bc = {
			index : bu,
			last : this.dw,
			list : this.zS(),
			data : Fp.bI(bD, "value")
		};
		this.dw = bu;
		bD = this.dK[bc.last];
		if (!!bD)
			this.KX(bD, !1);
		bD = this.dK[this.dw];
		this.KX(bD, !0);
		this.bG("onchange", bc);
		if (!bc.nostop)
			bj.cG(arguments[1]);
		return this
	};
	bb.ph = function () {
		return this.dw
	};
	bb.zS = function () {
		return this.dK
	};
	Fp.bqo = dr.bqo = function (cU, bf) {
		var bC = Fp.ik(cU);
		if (!bC)
			return null;
		if (!bv.Iu(bC, bv.wK)) {
			bf = bf || {};
			bf.list = !bf.clazz ? Fp.dh(bC) : Fp.bP(bC, bf.clazz);
			delete bf.clazz
		}
		return bv.Iu(bC, bv.wK, bf || bZ)
	};
	dr.isChange = !0
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	dE = be("nej.p"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bH = be("nej.j"),
	bEZ = be("nm.w"),
	fS = be("nm.ut"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	uM = [2, 4, 3],
	cW = ["sn", "rr", "db"],
	bb,
	bJ;
	bo.Fw = NEJ.C();
	bb = bo.Fw.bN(bo.eH);
	bJ = bo.Fw.du;
	bb.cw = function (bf) {
		if (bf.onclose === undefined)
			bf.onclose = this.cj.bh(this);
		this.cA(bf);
		this.gx = bf.rid;
		this.dV = bf.type;
		this.Lf = bf.purl;
		this.qc = {};
		this.bqp = bf.mesg || "";
		var bk,
		lk =  + (new Date);
		try {
			bk = top.localCache.bw("user") || {}

		} catch (e) {
			bk = {}

		}
		for (var i = 0, bk = bk.bindings || [], lM; i < bk.length; ++i) {
			lM = !bk[i].tokenJsonStr ? null : JSON.parse(bk[i].tokenJsonStr);
			if (!lM || lM.expires_in === undefined)
				continue;
			var wA = parseInt(lM.expires_in),
			wz = parseInt(bk[i].refreshTime),
			Ll = (wA + wz) * 1e3 - 5 * 60 * 1e3;
			if (Ll > lk)
				this.qc[bk[i].type] = !0
		}
		this.pQ = bEZ.vq.bL({
				parent : this.FK,
				err : this.Yt
			});
		this.gG = bEZ.AE.bL({
				parent : document.body,
				target : this.gM
			})
	};
	bb.cX = function () {
		this.dc();
		if (this.pQ) {
			this.pQ.ch();
			delete this.pQ
		}
		if (this.gG) {
			this.gG.ch();
			delete this.gG
		}
	};
	bb.bLv = function () {
		this.dn = "m-wgt-sharewin"
	};
	bb.bFa = function () {
		this.bLu();
		this.ny = Fp.dh(this.bB)[0];
		var bLk = Fp.bP(this.bB, "j-flag");
		this.rz = bLk[0];
		this.Yt = bLk[1];
		this.FK = bLk[2];
		this.gM = bLk[3];
		this.Ls = bLk[4];
		this.bqs = bLk[5];
		this.dI = bLk[6];
		this.AP = bLk[7];
		this.byv = bLk[8];
		this.bqq = bLk[9];
		this.eN = bLk[10];
		this.Gn = Fp.bP(this.bqq, "j-t");
		this.Lx = bK.wK.bL({
				list : Fp.dh(this.rz),
				selected : "z-slt",
				onchange : this.Ly.bh(this)
			});
		if (dE.dp.browser == "ie" && dE.dp.version < "8.0") {
			Fp.bY(this.FK, "position", "relative");
			Fp.bY(this.FK, "zIndex", "10")
		}
		bj.bs(window, "snsbind", this.uF.bh(this));
		bj.bs(this.gM, "input", this.is.bh(this));
		bj.bs(this.gM, "keyup", this.tG.bh(this));
		bj.bs(this.bB, "click", this.dH.bh(this));
		this.bA = bp.bac.bL();
		this.bA.bs("onshareall", this.Gr.bh(this, 0));
		this.bA.bs("onshareerror", this.ek.bh(this));
		this.bA.bs("onshareprivate", this.Gr.bh(this, 1))
	};
	bb.Ly = function (bc) {
		bc.index == 0 ? Fp.bR(this.ny, "m-plshare") : Fp.bV(this.ny, "m-plshare");
		this.FK.style.display = bc.index == 0 ? "none" : "";
		this.bqs.style.display = bc.index == 0 ? "" : "none";
		this.Yt.style.display = "none";
		this.gM.value = "";
		this.uE();
		if (bc.index == 0) {
			var eV = Fp.bIU(this.gM, "width");
			if (eV == "auto" || !eV)
				return;
			else
				this.gG = bEZ.AE.bL({
						parent : document.body,
						target : this.gM
					})
		} else {
			if (this.gG) {
				this.gG.ch();
				delete this.gG
			}
		}
	};
	bb.dH = function (bc) {
		var bid = bj.cf(bc, "d:action");
		if (!bid)
			return;
		bj.cG(bc);
		switch (Fp.bI(bid, "action")) {
		case "txt":
			this.iO();
			break;
		case "at":
			bj.lg(bc);
			!!this.fR && this.fR.cj();
			this.gG.AB();
			this.gb();
			break;
		case "emot":
			bj.lg(bc);
			!!this.gG && this.gG.xu();
			if (!this.fR) {
				this.fR = bo.xt.bL({
						parent : this.Ls
					});
				this.fR.bs("onselect", this.qx.bh(this))
			}
			this.fR.bO();
			break;
		case "sns":
			bj.cu(bc);
			var uD,
			cC,
			bDM = Fp.bI(bid, "type");
			if (!this.qc[bDM]) {
				uD = bid.href.split("?");
				cC = bm.mk(uD[1]);
				cC["csrf_token"] = bH.fN("__csrf");
				top.open(uD[0] + "?" + bm.eK(cC));
				return
			}
			var bLs = {
				2 : "sn",
				3 : "db",
				4 : "rr"
			};
			bq.mR(bid, "u-slg-" + bLs[bDM] + "-gray");
			break;
		case "close":
			!!this.fR && this.fR.cj();
			this.cj();
			break;
		case "share":
			this.bqy();
			break
		}
	};
	bb.uF = function (bn) {
		bn = bn.result;
		this.qc[bn.type] = !0;
		var bu = bm.dY(uM, bn.type),
		di = "u-slg-" + cW[bu] + "-gray";
		Fp.bR(this.Gn[bu], di)
	};
	bb.qx = function (bc) {
		var ci = "[" + bc.text + "]";
		fS.xk(this.gM, this.kJ, ci);
		this.gb()
	};
	bb.is = function (bc) {
		dE.dp.browser == "ie" && dE.dp.version < "7.0" ? setTimeout(this.gb.bh(this), 0) : this.gb()
	};
	bb.tG = function (bc) {
		this.iO();
		if (bc.keyCode == 8)
			this.gb()
	};
	bb.gb = function () {
		this.iO();
		this.uE()
	};
	bb.uE = function () {
		var ck = Math.ceil(bm.lj(this.gM.value.trim()) / 2);
		this.dI.innerText = 140 - ck;
		ck > 140 ? Fp.fC(this.dI, "s-fc4", "s-fc6") : Fp.fC(this.dI, "s-fc6", "s-fc4")
	};
	bb.bqy = function () {
		if (this.cI())
			return;
		if (bm.lj(this.gM.value.trim()) > 280) {
			this.cP("字数超过140个字符");
			return
		}
		var bDM = this.Lx.ph(),
		nM = {
			13 : "playlist",
			17 : "djprogram",
			18 : "song",
			19 : "album",
			20 : "artist",
			21 : "mv",
			24 : "topic",
			25 : "activity",
			70 : "djradio"
		};
		if (bDM == 0) {
			for (var i = 0, uC = []; i < this.Gn.length; ++i) {
				if (!Fp.cJ(this.Gn[i], "u-slg-" + cW[i] + "-gray"))
					uC.push(uM[i])
			}
			this.cI(!0);
			this.bA.boL({
				data : {
					id : this.gx,
					msg : this.gM.value.trim(),
					type : nM[this.dV],
					picUrl : this.Lf,
					snsTypes : uC.join(",")
				}
			})
		} else {
			var nC = this.pQ.zH();
			if (nC.length <= 0) {
				this.cP("请至少选择一位好友");
				return
			}
			this.bA.boN({
				data : {
					id : this.gx,
					msg : this.gM.value.trim(),
					type : nM[this.dV],
					userIds : "[" + nC.join(",") + "]"
				}
			})
		}
	};
	bb.Gr = function (bDM, bn) {
		this.cI(!1);
		this.cj();
		bo.cq.bO({
			tip : "分享成功" + (bn.point > 0 ? ' 获得<em class="s-fc6">' + bn.point + "积分</em>" : ""),
			autoclose : true
		});
		this.bG("onshare", {
			type : bDM,
			rid : this.gx,
			rtype : this.dV
		})
	};
	bb.ek = function (bn) {
		this.cI(!1);
		var cD = "分享失败";
		if (bn.code) {
			switch (bn.code) {
			case 404:
				cD = "分享的资源不存在";
				break;
			case 407:
				cD = "输入内容包含有关键字";
				break;
			case 408:
				cD = "分享太快了，过会再分享吧";
				break
			}
		}
		this.cP(cD)
	};
	bb.iO = function () {
		this.kJ = fS.ov(this.gM)
	};
	bb.cP = function (cD) {
		this.bxe(this.eN, cD)
	};
	bb.cI = function (cN) {
		return this.dG(this.AP, cN, "分享", "分享中...")
	};
	bb.bO = function () {
		var bqA = function (bt, bu) {
			var di = "u-slg-" + cW[bu] + "-gray";
			!this.qc[uM[bu]] ? Fp.bV(bt, di) : Fp.bR(bt, di)
		};
		return function () {
			bJ.bO.call(this);
			this.cP();
			this.cI(!1);
			this.Lx.KV(0);
			this.gM.focus();
			this.gM.value = this.bqp || "";
			this.gb();
			this.pQ.bpt();
			bm.bLt(this.Gn, bqA, this);
			this.iO()
		}
	}
	();
	bb.cj = function () {
		bJ.cj.call(this);
		!!this.fR && this.fR.cj();
		if (this.pQ) {
			this.pQ.ch();
			delete this.pQ
		}
		if (this.gG) {
			this.gG.ch();
			delete this.gG
		}
	};
	bq.nw = function (bf) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			top.login();
			return
		}
		if (bf.title === undefined)
			bf.title = "分享";
		bo.Fw.bO(bf)
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bj = be("nej.v"),
	Fp = be("nej.e"),
	bH = be("nej.j"),
	bo = be("nm.l"),
	bEZ = be("nm.w"),
	eQ = be("nej.ui"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bb,
	bJ;
	bo.GK = NEJ.C();
	bb = bo.GK.bN(bo.eH);
	bJ = bo.GK.du;
	bb.dv = function () {
		this.dF()
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		bj.bs(bk[0], "click", this.Nt.bh(this))
	};
	bb.bLv = function () {
		this.dn = "m-import-ok"
	};
	bb.cw = function (bf) {
		bf.parent = bf.parent || document.body;
		bf.title = "歌曲同步完成";
		this.cA(bf)
	};
	bb.cX = function () {
		this.dc()
	};
	bb.Nt = function (bc) {
		this.cj();
		if (location.pathname.indexOf("my") >= 0) {
			location.reload()
		} else {
			location.dispatch2("/my/")
		}
	};
	bb.vD = function () {
		this.cj()
	};
	bb.bcW = function (bc) {
		if (bc.keyCode == 13)
			this.uX()
	}
})();
(function () {
	var p = NEJ.P("nej.u");
	var bNd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
	bNa = {},
	bMY = {};
	for (var i = 0, l = bNd.length, c; i < l; i++) {
		c = bNd.charAt(i);
		bNa[i] = c;
		bMY[c] = i
	}
	var bNl = function (qG) {
		var bu = 0,
		c,
		bn = [];
		while (bu < qG.length) {
			c = qG[bu];
			if (c < 128) {
				bn.push(String.fromCharCode(c));
				bu++
			} else if (c > 191 && c < 224) {
				bn.push(String.fromCharCode((c & 31) << 6 | qG[bu + 1] & 63));
				bu += 2
			} else {
				bn.push(String.fromCharCode((c & 15) << 12 | (qG[bu + 1] & 63) << 6 | qG[bu + 2] & 63));
				bu += 3
			}
		}
		return bn.join("")
	};
	var bNk = function () {
		var iD = /\r\n/g;
		return function (bl) {
			bl = bl.replace(iD, "\n");
			var bn = [],
			nL = String.fromCharCode(237);
			if (nL.charCodeAt(0) < 0)
				for (var i = 0, l = bl.length, c; i < l; i++) {
					c = bl.charCodeAt(i);
					c > 0 ? bn.push(c) : bn.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
				}
			else
				for (var i = 0, l = bl.length, c; i < l; i++) {
					c = bl.charCodeAt(i);
					if (c < 128)
						bn.push(c);
					else if (c > 127 && c < 2048)
						bn.push(c >> 6 | 192, c & 63 | 128);
					else
						bn.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
				}
			return bn
		}
	}
	();
	var Eh = function (qG) {
		var bu = 0,
		bn = [],
		eU = qG.length % 3;
		if (eU == 1)
			qG.push(0, 0);
		if (eU == 2)
			qG.push(0);
		while (bu < qG.length) {
			bn.push(bNa[qG[bu] >> 2], bNa[(qG[bu] & 3) << 4 | qG[bu + 1] >> 4], bNa[(qG[bu + 1] & 15) << 2 | qG[bu + 2] >> 6], bNa[qG[bu + 2] & 63]);
			bu += 3
		}
		if (eU == 1)
			bn[bn.length - 1] = bn[bn.length - 2] = "=";
		if (eU == 2)
			bn[bn.length - 1] = "=";
		return bn.join("")
	};
	var bNj = function () {
		var Lq = /\n|\r|=/g;
		return function (bl) {
			var bu = 0,
			bn = [];
			bl = bl.replace(Lq, "");
			for (var i = 0, l = bl.length; i < l; i += 4)
				bn.push(bMY[bl.charAt(i)] << 2 | bMY[bl.charAt(i + 1)] >> 4, (bMY[bl.charAt(i + 1)] & 15) << 4 | bMY[bl.charAt(i + 2)] >> 2, (bMY[bl.charAt(i + 2)] & 3) << 6 | bMY[bl.charAt(i + 3)]);
			var ck = bn.length,
			eU = bl.length % 4;
			if (eU == 2)
				bn = bn.slice(0, ck - 2);
			if (eU == 3)
				bn = bn.slice(0, ck - 1);
			return bn
		}
	}
	();
	p.bNm = function (bl) {
		return bNl(bNj(bl))
	};
	p.bNi = function (bl) {
		try {
			return window.btoa(bl)
		} catch (ex) {
			return Eh(bNk(bl))
		}
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bj = be("nej.v"),
	Fp = be("nej.e"),
	bH = be("nej.j"),
	bv = be("nej.p"),
	bm = be("nej.u"),
	bo = be("nm.l"),
	bEZ = be("nm.w"),
	eQ = be("nej.ui"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bb,
	bJ;
	var TYPE_MAP = {
		13 : "playlist",
		17 : "program",
		18 : "song",
		19 : "album"
	};
	bo.bNe = NEJ.C();
	bb = bo.bNe.bN(bo.eH);
	bb.bLv = function () {
		this.dn = "m-download-layer"
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.bNc = bk[0];
		this.bNb = bk[1];
		this.bNf = bk[2];
		bH.cR("/client/version/get", {
			type : "json",
			onload : this.bNh.bh(this)
		});
		if (bv.Nn.mac) {
			Fp.bR(this.bNc.parentNode, "f-hide");
			Fp.bV(this.bNb.parentNode, "f-hide");
			Fp.bV(this.bNf, "f-hide")
		} else {
			Fp.bV(this.bNc.parentNode, "f-hide");
			Fp.bR(this.bNb.parentNode, "f-hide");
			Fp.bR(this.bNf, "f-hide")
		}
	};
	bb.cw = function (bf) {
		bf.clazz = " m-layer-down";
		bf.parent = bf.parent || document.body;
		bf.title = "下载";
		bf.draggable = !0;
		bf.destroyalbe = !0;
		bf.mask = true;
		this.cA(bf);
		this.dA([[this.bB, "click", this.gI.bh(this)]]);
		this.dV = TYPE_MAP[bf.type];
		this.hE = bf.id
	};
	bb.cX = function () {
		this.dc()
	};
	bb.vD = function () {
		this.cj()
	};
	bb.Nt = function (bc) {
		this.bG("onok", bz);
		this.cj()
	};
	bb.gI = function (bc) {
		var bid = bj.cf(bc, "d:action");
		switch (Fp.bI(bid, "action")) {
		case "download":
			this.cj();
			window.open(Fp.bI(bid, "src"));
			break;
		case "orpheus":
			this.cj();
			location.href = "orpheus://" + bm.bNi(JSON.stringify({
						type : this.dV,
						id : this.hE,
						cmd : "download"
					}));
			break
		}
	};
	bb.bNh = function (bc) {
		if (bc.code == 200) {
			this.Ka = bc.data;
			this.bNc.innerText = "V" + this.Ka.mac;
			this.bNb.innerText = "V" + this.Ka.pc
		}
	};
	bq.bNg = function (bf) {
		bo.bNe.bL(bf).bO()
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	dE = be("nej.p"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bH = be("nej.j"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bM = be("nm.m"),
	bo = be("nm.l"),
	bE = be("nm.m.f"),
	bb,
	bJ;
	bM.dM = NEJ.C();
	bb = bM.dM.bN(bK.bFb);
	bb.cE = function () {
		var kb = !1;
		return function () {
			if (kb)
				return;
			kb = !0;
			this.cL();
			if (top == self) {
				return
			}
			this.GM = Fp.bw("g_backtop");
			if (window.GRef != "mail") {}
			else {
				this.Yi()
			}
			bK.hh.bL({
				element : window,
				event : ["share", "playchange", "snsbind", "playstatechange"]
			});
			this.dA([[window, "scroll", this.Yh.bh(this)], [document, "keyup", this.GS.bh(this)], [document.body, "click", this.pL.bh(this)], [document, "mouseup", this.bqI.bh(this)], [this.GM, "click", this.bqL.bh(this)], [bp.su, "message", this.sV.bh(this)]]);
			bq.bPz(document.body);
			this.Yh();
			if (this.Ye !== false && typeof GUser !== "undefined" && GUser.userId > 0)
				bp.su.mh().sw();
			try {
				top.GUser = GUser;
				top.api.refreshUserInfo();
				if (dE.dp.browser == "ie" && parseInt(dE.dp.version) < 9 && /#(.*?)$/.test(top.document.title)) {
					top.document.title = "网易云音乐 听见好时光"
				} else {
					var bvD = top.player.getPlaying();
					if (bvD && bvD.track && bvD.playing) {
						top.document.title = decodeURIComponent("%E2%96%B6%20") + bvD.track.name
					} else {
						top.document.title = document.title
					}
				}
			} catch (e) {}

			window.share = this.wm.bh(this);
			this.gV = bp.qE.bL();
			window.log = this.AZ.bh(this);
			var bEU = location.search;
			if (bEU) {
				var cC = bEU.substr(bEU.indexOf("?") + 1),
				bLx = bm.mk(cC);
				if (bLx && bLx["_hash"])
					location.hash = bLx["_hash"]
			}
		}
	}
	();
	bb.GS = function (bc) {
		var bid = bj.cf(bc);
		try {
			if (bc.keyCode == 80 && bq.bcM() || ["textarea", "input"].indexOf(bid.tagName.toLowerCase()) >= 0)
				return;
			bj.bG(top.document, "keyup", {
				ctrlKey : bc.ctrlKey,
				keyCode : bc.keyCode
			})
		} catch (e) {}

	};
	bb.pL = function (bc) {
		var bid = bj.cf(bc);
		if (bid && bid.tagName == "INPUT")
			return;
		var bid = bj.cf(bc, "d:pid");
		if (bid) {
			bj.cG(bc);
			var hI = Fp.bI(bid, "pid"),
			jB = Fp.bI(bid, "ptype"),
			cv = Fp.bI(bid, "action") || "play";
			switch (cv) {
			case "subscribe":
				bq.iE({
					tracks : [hI]
				});
				break
			}
		}
		bid = bj.cf(bc, "d:resAction");
		if (bid && bid.className.indexOf("-dis") == -1) {
			var cF = Fp.bI(bid, "resId"),
			bDM = Fp.bI(bid, "resType"),
			dz = Fp.bI(bid, "resFrom"),
			bl = Fp.bI(bid, "resData"),
			cv = Fp.bI(bid, "resAction"),
			bqZ = Fp.bI(bid, "resCopyright");
			if (cv != "log" && cv != "bilog")
				bj.cG(bc);
			switch (cv) {
			case "log":
				bl = (bl || "").split("|");
				if (!!bl[0]) {
					var bQ = {
						id : cF,
						alg : bl[2] || "itembased",
						scene : bl[3],
						position : bl[1] || 0
					};
					if (!!bl[4])
						bQ.srcid = bl[4];
					window.log(bl[0], bQ)
				}
				break;
			case "bilog":
				var brd = Fp.bI(bid, "logAction"),
				bre = Fp.bI(bid, "logJson");
				window.log(brd, bre);
				break;
			case "share":
				share(cF, bDM, Fp.bI(bid, "resPic"));
				break;
			case "fav":
			case "subscribe":
				if (bDM == 18) {
					var bNu = Fp.bI(bid, "resLevel"),
					tQ = Fp.bI(bid, "resFee");
					if (bNu == 10) {
						bq.bHG(tQ, cF, "song");
						break
					}
					bq.iE({
						tracks : [cF]
					})
				}
				break;
			case "download":
				bq.bNg({
					id : cF,
					type : bDM
				});
				break
			}
		}
		if (top == self)
			return;
		try {
			top.onIframeClick(bc)
		} catch (e) {}

	};
	bb.bqI = function (bc) {
		try {
			bj.bG(top.document, "mouseup")
		} catch (e) {}

	};
	bb.Yh = function () {
		var brC = function () {
			var dT = window.innerHeight;
			if (!bm.pu(dT))
				dT = (document.documentElement || document.body).clientHeight;
			return dT
		};
		return function (bc) {
			if (!this.GM)
				return;
			var brI = brC(),
			hg = document.documentElement.scrollTop || document.body.scrollTop;
			Fp.bY(this.GM, "display", hg > 0 ? "" : "none");
			if (dE.dp.browser == "ie" && dE.dp.version < "7.0") {
				var bim = Math.min(document.body.clientHeight, brI + hg) - 204;
				Fp.bY(this.GM, "top", bim + "px")
			}
		}
	}
	();
	bb.bqL = function (bc) {
		bj.cG(bc);
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0
	};
	bb.wm = function () {
		var brL = function (bc) {
			bj.bG(window, "share", bc)
		};
		return function (cF, bDM, Bg) {
			bq.nw({
				rid : cF,
				type : bDM,
				purl : Bg,
				onshare : brL.bh(this)
			})
		}
	}
	();
	bb.AZ = function (cv, bQ) {
		try {
			top.log(cv, bQ)
		} catch (e) {
			switch (cv) {
			case "play":
				this.gV.gJ(bQ);
				break;
			case "search":
				this.gV.bft(bQ);
				break;
			default:
				this.gV.tq(cv, bQ)
			}
		}
	};
	bb.Yi = function () {
		var HQ,
		Mq = false,
		cK = [45, 60];
		var brP = function (cD) {
			if (cD.title != "MailBoxImport")
				return;
			var bHN = JSON.parse(cD.content || "null") || bZ;
			if (bHN.status == 10) {
				bo.GK.bL().bO();
				window.clearTimeout(HQ)
			}
		};
		var nT = function (bc) {
			if (bc.code == 200) {
				if (bc.status == 1) {
					bj.bs(bp.sm, "message", brP.bh(this));
					bp.sm.bL().RI();
					Mq = true
				} else {
					if (Mq) {
						if (bc.status == 10) {
							bo.GK.bL().bO();
							bj.kB(bp.sm, "message");
							window.clearTimeout(HQ);
							Mq = false
						}
					} else {
						window.clearTimeout(HQ)
					}
				}
			}
		};
		return function () {
			var uw = cK.shift() * 1e3;
			bH.cR("/api/musicbox/mail/status", {
				type : "json",
				method : "get",
				onload : nT.bh(this)
			});
			if (uw) {
				HQ = window.setTimeout(arguments.callee, uw)
			}
		}
	}
	();
	bb.sV = function (bc) {
		try {
			top.polling(bc)
		} catch (e) {}

	}
})()
