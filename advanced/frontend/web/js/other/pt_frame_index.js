(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	fP = NEJ.R,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bv = be("nej.ut"),
	rW;
	if (!!bv.HM)
		return;
	bv.HM = NEJ.C();
	rW = bv.HM.bN(bv.eW);
	rW.dv = function () {
		this.hP = {
			onchange : this.wZ.bh(this),
			ondragend : this.wZ.gz(this, !0)
		};
		this.dF()
	};
	rW.cw = function (bf) {
		this.cA(bf);
		this.hP.view = Fp.bw(bf.track);
		this.hP.body = Fp.bw(bf.slide);
		this.hP.mbar = this.hP.view;
		this.Mk(bf.range);
		this.dA([[this.hP.view, "mousedown", this.brE.bh(this)]]);
		this.lb = bv.yo.bL(this.hP)
	};
	rW.cX = function () {
		this.dc();
		this.lb.ch();
		delete this.lb;
		delete this.iS;
		delete this.hP.view;
		delete this.hP.body;
		delete this.hP.mbar
	};
	rW.wZ = function (bc, iy) {
		var XG = bc.left / this.iS.x[1],
		XH = bc.top / this.iS.y[1],
		XI = this.iS.x,
		XJ = this.iS.y;
		this.bG("onchange", {
			stopped : !!iy,
			x : {
				rate : XG,
				value : XG * (XI[1] - XI[0])
			},
			y : {
				rate : XH,
				value : XH * (XJ[1] - XJ[0])
			}
		})
	};
	rW.brE = function (bc) {
		var cl = Fp.mV(this.hP.view),
		XK = {
			x : bj.lB(bc),
			y : bj.oj(bc)
		},
		dP = {
			x : Math.floor(this.hP.body.offsetWidth / 2),
			y : Math.floor(this.hP.body.offsetHeight / 2)
		};
		this.lb.fJ({
			top : XK.y - cl.y - dP.y,
			left : XK.x - cl.x - dP.x
		})
	};
	rW.Mk = function (gl) {
		var sf;
		if (!!this.iS) {
			var kt = this.lb.KI();
			sf = {
				x : kt.left / this.iS.x[1],
				y : kt.top / this.iS.y[1]
			}
		}
		gl = gl || bZ;
		var brB = (gl.x || fP)[1] || this.hP.view.clientWidth - this.hP.body.offsetWidth,
		brr = (gl.y || fP)[1] || this.hP.view.clientHeight - this.hP.body.offsetHeight;
		this.iS = {
			x : gl.x || [0, brB],
			y : gl.y || [0, brr]
		};
		if (!!sf)
			this.fJ(sf);
		return this
	};
	rW.fJ = function (sf) {
		sf = sf || bZ;
		this.lb.fJ({
			top : this.iS.y[1] * (sf.y || 0),
			left : this.iS.x[1] * (sf.x || 0)
		})
	}
})();
(function () {
	var bv = NEJ.P("nej.ut"),
	XO;
	if (!!bv.Bd)
		return;
	bv.Bd = NEJ.C();
	XO = bv.Bd.bN(bv.HM);
	XO.dv = function () {
		this.dF();
		this.hP.direction = 2
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bv = be("nej.p"),
	eQ = be("nej.ui"),
	ib = be("nej.ut"),
	bEZ = be("nm.w"),
	bb,
	bJ;
	bEZ.rP = NEJ.C();
	bb = bEZ.rP.bN(eQ.ic);
	bJ = bEZ.rP.du;
	bb.dv = function () {
		this.dF()
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.bB = Fp.bw(bf.content);
		this.hn = Fp.bw(bf.slide);
		this.fw = Fp.bw(bf.track);
		this.Zk = bf.speed;
		this.Kb = this.bB.scrollHeight - this.bB.clientHeight;
		Fp.bY(this.hn, "height", (this.bB.clientHeight / this.bB.scrollHeight * parseInt(Fp.bIU(this.fw, "height")) || 0) + "px");
		if (this.bB.scrollHeight <= this.bB.clientHeight)
			Fp.bY(this.hn, "display", "none");
		else
			Fp.bY(this.hn, "display", "block");
		this.oK = ib.Bd.bL({
				slide : this.hn,
				track : this.fw,
				onchange : this.JT.bh(this)
			});
		if (bv.dp.browser != "firefox")
			this.dA([[this.bB, "mousewheel", this.si.bh(this)]]);
		else {
			this.bB.addEventListener("DOMMouseScroll", this.si.bh(this), false)
		}
	};
	bb.cX = function () {
		this.dc();
		this.oK.ch();
		delete this.bB;
		delete this.hn;
		delete this.fw;
		delete this.iS;
		delete this.Zk
	};
	bb.JT = function (bc) {
		this.bB.scrollTop = parseInt(this.Kb * bc.y.rate)
	};
	bb.si = function (bc) {
		bj.cG(bc);
		this.Kb = this.bB.scrollHeight - this.bB.clientHeight;
		var dP = 0,
		xj,
		dT,
		bim;
		dT = parseInt(this.fw.clientHeight) - parseInt(Fp.bIU(this.hn, "height"));
		dP = bc.wheelDelta ? bc.wheelDelta / 120 : -bc.detail / 3;
		xj = parseInt(Fp.bIU(this.hn, "top")) - dP * this.Zk;
		if (xj < 0)
			xj = 0;
		if (xj > dT)
			xj = dT;
		Fp.bY(this.hn, "top", xj + "px");
		bim = parseInt(Fp.bIU(this.hn, "top"));
		this.oK.bG("onchange", {
			y : {
				rate : bim / dT
			}
		})
	};
	bb.lO = function () {
		this.Kb = this.bB.scrollHeight - this.bB.clientHeight;
		this.oK.fJ({
			x : 0,
			y : 0
		});
		Fp.bY(this.hn, "height", this.bB.clientHeight / this.bB.scrollHeight * parseInt(this.fw.clientHeight) + "px");
		this.oK.Mk({
			x : [],
			y : [0, this.fw.clientHeight - parseInt(Fp.bIU(this.hn, "height"))]
		});
		if (this.bB.scrollHeight <= this.bB.clientHeight)
			Fp.bY(this.hn, "display", "none");
		else
			Fp.bY(this.hn, "display", "block")
	};
	bb.fJ = function (hO) {
		this.oK.fJ(hO)
	};
	bb.sr = function (JE) {
		var bpI = parseInt(Fp.bIU(this.hn, "height"));
		var bpH = parseInt(Fp.bIU(this.fw, "height"));
		var vc = bpH - bpI;
		var bim = parseInt(vc * JE) + "px";
		Fp.bY(this.hn, "top", bim)
	};
	bb.Zv = function () {
		if (this.bB.scrollHeight <= this.bB.clientHeight)
			return;
		var JE = this.bB.scrollTop / (this.bB.scrollHeight - this.bB.clientHeight);
		this.sr(JE)
	};
	bb.byA = function () {
		if (this.oK)
			this.oK.Mk()
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bm = be("nej.u"),
	bH = be("nej.j"),
	bq = be("nm.x");
	var SETTING_KEY = "player-setting";
	var ri = {
		mode : 4,
		volume : .8,
		autoPlay : false,
		index : 0,
		lock : false
	};
	ri = bH.vz(SETTING_KEY) || ri;
	bq.bOz = function () {
		return ri
	};
	bq.bND = function (bNX) {
		if (bNX) {
			ri = bNX;
			bH.yX(SETTING_KEY, bNX)
		}
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	xq = be("nm.w.player.log");
	var bwT = bp.qE.bL();
	var LogLevel = {
		ERROR : 10,
		INFO : 6,
		DEBUG : 2
	};
	var AZ = function (bDM, cD, bNu) {
		var fc = bq.gN("{0} {1} {2}", bm.sW(new Date, "yyyy-MM-dd HH:mm:ss"), bDM, cD);
		if (bNu == LogLevel.ERROR) {
			bwT.tq("playerror", {
				message : cD
			})
		}
		if (bNu >= LogLevel.INFO) {
			bwT.bPG(fc)
		}
		if (location.hostname.indexOf("igame.163.com") != -1) {
			console.log(fc)
		}
	};
	xq.cP = function () {
		AZ("PLAY_ERROR", bq.gN.apply(null, arguments), LogLevel.ERROR)
	};
	xq.sn = function () {
		AZ("PLAY_INFO", bq.gN.apply(null, arguments), LogLevel.INFO)
	};
	xq.bPI = function () {
		AZ("PLAY_DEBUG", bq.gN.apply(null, arguments), LogLevel.DEBUG)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bEZ = be("nm.w"),
	yI = be("flash.cb"),
	bb;
	var MediaWrap = function (bKN, bNy) {
		var zp = this,
		ez = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
		var el = function (bc) {
			bj.bG(zp, bc.type, bc)
		};
		bK.hh.bL({
			element : this,
			event : ez
		});
		bm.bLt(ez, function (bDM) {
			if (bNy == "flash") {
				yI[bDM] = el;
				bKN.addCallback(bDM, "flash.cb." + bDM)
			} else {
				bj.bs(bKN, bDM, el)
			}
		});
		this.type = bNy;
		this.destroy = function () {
			Fp.fx(bKN)
		};
		this.play = function () {
			if (bNy == "flash") {
				bKN.as_play()
			} else {
				bKN.play()
			}
		};
		this.pause = function () {
			if (bNy == "flash") {
				bKN.as_pause()
			} else {
				bKN.pause()
			}
		};
		this.load = function () {
			if (bNy == "flash") {
				bKN.as_load()
			} else {
				bKN.load()
			}
		};
		var btp = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
		bm.bLt(btp, function (bX) {
			var bNR = "get" + bX,
			bNS = "set" + bX;
			if (bNy == "flash") {
				this[bNR] = function () {
					return bKN[bNR]()
				};
				this[bNS] = function (value) {
					bKN[bNS](value)
				}
			} else {
				var bOp = bX.slice(0, 1).toLowerCase() + bX.slice(1);
				this[bNR] = function () {
					return bKN[bOp]
				};
				this[bNS] = function (value) {
					bKN[bOp] = value
				}
			}
		}, this)
	};
	bEZ.bPv = function (bDM, fF) {
		var rB = bDM != "flash" ? Fp.gH("audio") : null;
		if (rB && rB.canPlayType && rB.canPlayType("audio/mpeg")) {
			Fp.bY(rB, "display", "none");
			document.body.appendChild(rB);
			fF(new MediaWrap(rB, "audio"))
		} else {
			Fp.qK({
				src : "/style/swf/music/music.swf?v=20151204",
				hidden : true,
				params : {
					allowscriptaccess : "always"
				},
				onready : function (gh) {
					fF(new MediaWrap(gh, "flash"))
				}
				.bh(this)
			})
		}
	}
})();
(function () {
	var be = NEJ.P,
	bj = be("nej.v"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	dE = be("nej.p"),
	bEZ = be("nm.w"),
	bq = be("nm.x"),
	xq = be("nm.w.player.log"),
	bb;
	var DEFAULT_BR = 128e3;
	var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
	var MAX_STALLED_RETRY = 2;
	var MediaError = {
		MEDIA_ERR_ABORTED : 1,
		MEDIA_ERR_NETWORK : 2,
		MEDIA_ERR_DECODE : 3,
		MEDIA_ERR_SRC_NOT_SUPPORTED : 4
	};
	var ErrorType = {
		INFO_GET_ERR : 1,
		NET_ERR : 2,
		UNKNOWN_ERR : 10
	};
	var LoadState = {
		LOAD_START : 1,
		LOADED_META : 2,
		IN_RELOAD : 3,
		IN_RE_GET_URL : 4,
		IN_SWITCH_CDN : 5,
		IN_SWITCH_MEDIA : 6
	};
	var RetryLevel = {
		NONE : 0,
		GET_URL : 1,
		RELOAD : 2,
		SWITCH_CDN : 3
	};
	var ko = false;
	bEZ.ig = NEJ.C();
	bb = bEZ.ig.bN(bK.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.cs = {};
		this.brT(bf.media);
		bH.cR("/api/cdns", {
			type : "json",
			onload : function (bc) {
				if (bc.code) {
					this.oc = bc.data
				}
			}
			.bh(this)
		})
	};
	bb.cX = function () {
		this.dc();
		delete this.cs
	};
	bb.bOq = function (eD) {
		if (!eD)
			return;
		var bMV = this.cs.volume;
		if (this.wx) {
			this.wx.pause()
		}
		this.cs = {
			time : 0,
			id : eD.id,
			duration : eD.duration / 1e3,
			play : this.cs.play,
			stalledRetryCount : 0
		};
		if (bMV != null) {
			this.cs.volume = bMV
		}
		this.cs.loadState = LoadState.LOAD_START;
		this.bOr(eD.id);
		xq.sn("play song id: {0}", eD.id)
	};
	bb.gJ = function () {
		if (this.cs.error) {
			this.cs.error = null;
			if (this.cs.error == ErrorType.INFO_GET_ERR || this.bOs()) {
				this.bOt()
			} else {
				this.bNC()
			}
		} else {
			if (this.wx && this.cs.loadState == LoadState.LOADED_META) {
				this.wx.play()
			}
		}
		this.cs.play = true;
		this.xy("play")
	};
	bb.hY = function () {
		if (this.wx) {
			this.wx.pause()
		}
		this.cs.play = false;
		this.xy("pause")
	};
	bb.lu = function (cr) {
		if (this.wx) {
			this.wx.setCurrentTime(cr)
		}
		this.cs.time = cr;
		xq.sn("seek to: {0}", cr)
	};
	bb.bNV = function () {
		return this.cs.duration || 0
	};
	bb.pn = function () {
		return !!this.cs.play
	};
	bb.jZ = function (bMM) {
		this.cs.volume = bMM;
		if (this.wx) {
			this.wx.setVolume(bMM)
		}
	};
	bb.bOu = function () {
		return this.cs.time
	};
	bb.brT = function (bDM) {
		bEZ.bPv(bDM, function (bKN) {
			this.wx = bKN;
			xq.sn("media loaded: {0}", bKN.type);
			this.dA([[this.wx, "loadedmetadata", this.bPu.bh(this)], [this.wx, "ended", this.bPt.bh(this)], [this.wx, "waiting", this.bNB.bh(this)], [this.wx, "playing", this.bNT.bh(this)], [this.wx, "timeupdate", this.bPs.bh(this)], [this.wx, "progress", this.LO.bh(this)], [this.wx, "stalled", this.bPr.bh(this)], [this.wx, "error", this.jh.bh(this)]]);
			if (this.cs) {
				if (this.cs.loadState == LoadState.LOAD_START || this.cs.loadState == LoadState.IN_SWITCH_MEDIA) {
					this.bNU();
					if (this.cs.volume != null) {
						this.wx.setVolume(this.cs.volume)
					}
				}
			}
		}
			.bh(this))
	};
	bb.qd = function (bDM) {
		this.btJ();
		this.wx.destroy();
		this.cs.loadState = LoadState.IN_SWITCH_MEDIA;
		this.bNB();
		this.brT(bDM);
		xq.sn("switch media")
	};
	bb.bOr = function () {
		this.bNB();
		bH.cR("/api/song/enhance/player/url", {
			type : "json",
			query : {
				ids : JSON.stringify([this.cs.id]),
				br : DEFAULT_BR
			},
			onload : this.bOv.bh(this),
			onerror : this.bOv.bh(this)
		})
	};
	bb.bOv = function (bc) {
		if (bc.code == 200 && bc.data && bc.data.length) {
			var dD = bc.data[0];
			this.cs.mp3url = dD.url;
			this.cs.expireTime = (new Date).getTime() + dD.expi * 1e3;
			this.bNU()
		} else {
			this.wx.setSrc("");
			this.cs.error = ErrorType.INFO_GET_ERR;
			this.xy("error", {
				code : this.cs.error
			});
			xq.cP("info load error")
		}
	};
	bb.bNU = function () {
		if (this.wx) {
			var cg = this.cs.mp3url;
			if (this.cs.time > 0 && (this.cs.loadState == LoadState.IN_RE_GET_URL || this.cs.loadState == LoadState.IN_RE_GET_URL)) {
				cg += "#t=" + this.cs.time
			}
			this.wx.setSrc(cg);
			xq.sn("load mp3: {0},loadState: {1}.", cg, this.cs.loadState)
		}
	};
	bb.bOw = function () {
		if (/#t=(\d+)$/.test(this.wx.getSrc())) {
			return parseInt(RegExp.$1) || 0
		} else {
			return 0
		}
	};
	bb.bNC = function () {
		var cr = parseInt(this.cs.time) || 0,
		bPq = this.bOw();
		if (cr === bPq) {
			this.wx.load()
		} else {
			this.wx.setSrc(this.cs.mp3url + "#t=" + cr)
		}
		this.cs.loadState = LoadState.IN_RELOAD;
		this.bNB();
		xq.sn("reload from: {0}", cr)
	};
	bb.bOt = function () {
		this.cs.loadState = LoadState.IN_RE_GET_URL;
		this.bOr()
	};
	bb.bOx = function () {
		var tl = getHost(this.cs.mp3url);
		if (tl) {
			for (var i = 0; i < this.oc.length; i++) {
				var nc = this.oc[i] || [],
				bu = nc.indexOf(tl);
				if (bu >= 0 && nc.length > 1) {
					return nc[(bu + 1) % nc.length]
				}
			}
		}
		function getHost(cg) {
			if (CDN_HOST_REG.test(cg))
				return RegExp.$1
		}
	};
	bb.bPp = function () {
		this.cs.mp3url = this.cs.mp3url.replace(CDN_HOST_REG, this.bOx());
		this.cs.loadState = LoadState.IN_SWITCH_CDN;
		this.bNU();
		this.bNB()
	};
	bb.bPu = function () {
		if (this.cs.loadState == LoadState.LOAD_START) {
			this.cs.loadState = LoadState.LOADED_META;
			if (this.wx.type == "audio") {
				this.cs.duration = this.wx.getDuration()
			}
			this.xy("loadedmeta", {
				duration : this.cs.duration
			})
		} else {
			this.cs.loadState = LoadState.LOADED_META
		}
		if (this.cs.play) {
			this.wx.play()
		} else {
			this.wx.pause()
		}
		if (this.cs.time && parseInt(this.cs.time) != this.bOw()) {
			this.wx.setCurrentTime(this.cs.time)
		}
		this.bNW();
		this.bNT();
		ko = true;
		xq.sn("loaded meta")
	};
	bb.bPt = function () {
		this.cs.ended = true;
		this.xy("ended")
	};
	bb.bNB = function () {
		if (!this.cs.waiting) {
			this.cs.waiting = true;
			this.cs.waitTimestamp =  + (new Date);
			this.xy("waiting")
		}
	};
	bb.bNT = function () {
		this.cs.waiting = false;
		this.cs.waitTimestamp = 0;
		this.xy("playing")
	};
	bb.bPs = function () {
		if (this.cs.loadState != LoadState.LOADED_META)
			return;
		var cr = this.wx.getCurrentTime();
		if (this.cs.waiting && cr > this.cs.time) {
			this.bNT()
		}
		this.cs.time = cr;
		this.xy("timeupdate", {
			time : this.cs.time,
			duration : this.cs.duration
		})
	};
	bb.LO = function (bc) {
		if (this.cs.loadState != LoadState.LOADED_META)
			return;
		var bn = {};
		if (bc.data) {
			bn.total = bc.data.total;
			bn.loaded = bc.data.loaded
		} else {
			var bNK = this.wx.getBuffered(),
			cr = this.wx.getCurrentTime(),
			nF = 0;
			for (var i = 0; i < bNK.length; i++) {
				if (cr > bNK.start(i) && cr < bNK.end(i)) {
					nF = bNK.end(i);
					break
				}
			}
			bn.total = this.cs.duration;
			bn.loaded = Math.min(nF, bn.total)
		}
		this.xy("progress", bn)
	};
	bb.bNW = function () {
		if (this.cs.retry) {
			clearTimeout(this.cs.retry.tid);
			this.cs.retry = null
		}
	};
	bb.jh = function () {
		var cS = this.wx.getError();
		xq.cP("media error code: {0}, netState: {1}", cS.code, this.wx.getNetworkState());
		if (cS.code == MediaError.MEDIA_ERR_NETWORK || cS.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
			var bNX = bq.bOz();
			if (!this.cs.retry) {
				this.cs.retry = {
					level : RetryLevel.NONE
				}
			} else {
				window.clearTimeout(this.cs.retry.tid)
			}
			if (this.cs.retry.level == RetryLevel.NONE) {
				if (this.bOs()) {
					this.cs.retry.level = RetryLevel.GET_URL;
					this.bOt();
					xq.sn("Url expired, get url.")
				} else {
					this.cs.retry.level = RetryLevel.RELOAD;
					this.cs.retry.tid = setTimeout(this.bNC.bh(this), 3e3);
					xq.sn("Reload mp3 3s later.")
				}
			} else if (this.cs.retry.level == RetryLevel.GET_URL) {
				this.cs.retry.level = RetryLevel.RELOAD;
				this.cs.retry.tid = setTimeout(this.bNC.bh(this), 3e3);
				xq.sn("Reload mp3 3s later.")
			} else if (this.cs.retry.level == RetryLevel.RELOAD) {
				this.cs.retry.level = RetryLevel.SWITCH_CDN;
				if (this.bOx()) {
					this.cs.retry.tid = setTimeout(this.bPp.bh(this), 5e3);
					xq.sn("Switch CDN 5s later.")
				} else {
					this.cs.retry.tid = setTimeout(this.bNC.bh(this), 5e3);
					xq.sn("Reload mp3 5s later.")
				}
			} else if (!ko && this.wx.type == "audio" && !bNX.useFlash && !dE.Nn.mac && bq.bcx().supported) {
				bNX.useFlash = true;
				bq.bND(bNX);
				this.qd("flash")
			} else {
				this.bNW();
				this.hY();
				this.cs.error = ErrorType.NET_ERR;
				this.xy("error", {
					code : this.cs.error
				});
				xq.cP("error can not retry.")
			}
		} else {
			this.bNW();
			this.hY();
			this.cs.error = ErrorType.UNKNOWN_ERR;
			this.xy("error", {
				code : this.cs.error
			});
			xq.cP("error can not retry.")
		}
	};
	bb.bPr = function () {
		var vo = 0,
		bOy = 5e3;
		return function () {
			this.bNB();
			clearTimeout(vo);
			setTimeout(function () {
				var lk =  + (new Date);
				if (this.cs.waiting && lk - this.cs.waitTimestamp >= bOy && this.cs.stalledRetryCount < MAX_STALLED_RETRY) {
					xq.sn("stalled too long retry.");
					this.cs.stalledRetryCount++;
					this.bNC()
				}
			}
				.bh(this), bOy);
			xq.sn("stalled")
		}
	}
	();
	bb.bOs = function () {
		var lk =  + (new Date);
		return lk > this.cs.expireTime
	};
	bb.xy = function (cv, bl) {
		bj.bG(bEZ.ig, "playaction", {
			action : cv,
			data : bl || {}

		})
	};
	bK.hh.bL({
		element : bEZ.ig,
		event : ["playaction"]
	})
})();
(function () {
	var p = NEJ.P("nej.u");
	var jt = 8;
	var FI = function (bJx, dm) {
		return bJx << dm | bJx >>> 32 - dm
	};
	var iI = function (x, y) {
		var bco = (x & 65535) + (y & 65535),
		bkW = (x >> 16) + (y >> 16) + (bco >> 16);
		return bkW << 16 | bco & 65535
	};
	var blb = function (t, b, c, d) {
		if (t < 20)
			return b & c | ~b & d;
		if (t < 40)
			return b^c^d;
		if (t < 60)
			return b & c | b & d | c & d;
		return b^c^d
	};
	var bli = function (t) {
		if (t < 20)
			return 1518500249;
		if (t < 40)
			return 1859775393;
		if (t < 60)
			return -1894007588;
		return -899497514
	};
	var oZ = function () {
		var vi = function (i) {
			return i % 32
		},
		vj = function (i) {
			return 32 - jt - i % 32
		};
		return function (dL, vk) {
			var zK = [],
			ih = (1 << jt) - 1,
			lF = vk ? vi : vj;
			for (var i = 0, l = dL.length * jt; i < l; i += jt)
				zK[i >> 5] |= (dL.charCodeAt(i / jt) & ih) << lF(i);
			return zK
		}
	}
	();
	var zG = function () {
		var bbU = "0123456789abcdef",
		vi = function (i) {
			return i % 4
		},
		vj = function (i) {
			return 3 - i % 4
		};
		return function (qG, vk) {
			var cK = [],
			lF = vk ? vi : vj;
			for (var i = 0, l = qG.length * 4; i < l; i++) {
				cK.push(bbU.charAt(qG[i >> 2] >> lF(i) * 8 + 4 & 15) + bbU.charAt(qG[i >> 2] >> lF(i) * 8 & 15))
			}
			return cK.join("")
		}
	}
	();
	var Ep = function () {
		var vi = function (i) {
			return i % 32
		},
		vj = function (i) {
			return 32 - jt - i % 32
		};
		return function (zK, vk) {
			var cK = [],
			ih = (1 << jt) - 1,
			lF = vk ? vi : vj;
			for (var i = 0, l = zK.length * 32; i < l; i += jt)
				cK.push(String.fromCharCode(zK[i >> 5] >>> lF(i) & ih));
			return cK.join("")
		}
	}
	();
	var Eh = function () {
		var blL = "=",
		blM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
		vi = function (i) {
			return i % 4
		},
		vj = function (i) {
			return 3 - i % 4
		};
		return function (qG, vk) {
			var cK = [],
			lF = vk ? vi : vj;
			for (var i = 0, bbI; i < qG.length * 4; i += 3) {
				bbI = (qG[i >> 2] >> 8 * lF(i) & 255) << 16 | (qG[i + 1 >> 2] >> 8 * lF(i + 1) & 255) << 8 | qG[i + 2 >> 2] >> 8 * lF(i + 2) & 255;
				for (var j = 0; j < 4; j++)
					cK.push(i * 8 + j * 6 > qG.length * 32 ? blL : blM.charAt(bbI >> 6 * (3 - j) & 63))
			}
			return cK.join("")
		}
	}
	();
	var Hr = function (q, a, b, x, s, t) {
		return iI(FI(iI(iI(a, q), iI(x, t)), s), b)
	};
	var kl = function (a, b, c, d, x, s, t) {
		return Hr(b & c | ~b & d, a, b, x, s, t)
	};
	var kn = function (a, b, c, d, x, s, t) {
		return Hr(b & d | c & ~d, a, b, x, s, t)
	};
	var ky = function (a, b, c, d, x, s, t) {
		return Hr(b^c^d, a, b, x, s, t)
	};
	var kE = function (a, b, c, d, x, s, t) {
		return Hr(c^(b | ~d), a, b, x, s, t)
	};
	var xQ = function (x, y) {
		x[y >> 5] |= 128 << y % 32;
		x[(y + 64 >>> 9 << 4) + 14] = y;
		var a = 1732584193,
		b = -271733879,
		c = -1732584194,
		d = 271733878;
		for (var i = 0, l = x.length, bbH, bbF, bbD, bbC; i < l; i += 16) {
			bbH = a;
			bbF = b;
			bbD = c;
			bbC = d;
			a = kl(a, b, c, d, x[i + 0], 7, -680876936);
			d = kl(d, a, b, c, x[i + 1], 12, -389564586);
			c = kl(c, d, a, b, x[i + 2], 17, 606105819);
			b = kl(b, c, d, a, x[i + 3], 22, -1044525330);
			a = kl(a, b, c, d, x[i + 4], 7, -176418897);
			d = kl(d, a, b, c, x[i + 5], 12, 1200080426);
			c = kl(c, d, a, b, x[i + 6], 17, -1473231341);
			b = kl(b, c, d, a, x[i + 7], 22, -45705983);
			a = kl(a, b, c, d, x[i + 8], 7, 1770035416);
			d = kl(d, a, b, c, x[i + 9], 12, -1958414417);
			c = kl(c, d, a, b, x[i + 10], 17, -42063);
			b = kl(b, c, d, a, x[i + 11], 22, -1990404162);
			a = kl(a, b, c, d, x[i + 12], 7, 1804603682);
			d = kl(d, a, b, c, x[i + 13], 12, -40341101);
			c = kl(c, d, a, b, x[i + 14], 17, -1502002290);
			b = kl(b, c, d, a, x[i + 15], 22, 1236535329);
			a = kn(a, b, c, d, x[i + 1], 5, -165796510);
			d = kn(d, a, b, c, x[i + 6], 9, -1069501632);
			c = kn(c, d, a, b, x[i + 11], 14, 643717713);
			b = kn(b, c, d, a, x[i + 0], 20, -373897302);
			a = kn(a, b, c, d, x[i + 5], 5, -701558691);
			d = kn(d, a, b, c, x[i + 10], 9, 38016083);
			c = kn(c, d, a, b, x[i + 15], 14, -660478335);
			b = kn(b, c, d, a, x[i + 4], 20, -405537848);
			a = kn(a, b, c, d, x[i + 9], 5, 568446438);
			d = kn(d, a, b, c, x[i + 14], 9, -1019803690);
			c = kn(c, d, a, b, x[i + 3], 14, -187363961);
			b = kn(b, c, d, a, x[i + 8], 20, 1163531501);
			a = kn(a, b, c, d, x[i + 13], 5, -1444681467);
			d = kn(d, a, b, c, x[i + 2], 9, -51403784);
			c = kn(c, d, a, b, x[i + 7], 14, 1735328473);
			b = kn(b, c, d, a, x[i + 12], 20, -1926607734);
			a = ky(a, b, c, d, x[i + 5], 4, -378558);
			d = ky(d, a, b, c, x[i + 8], 11, -2022574463);
			c = ky(c, d, a, b, x[i + 11], 16, 1839030562);
			b = ky(b, c, d, a, x[i + 14], 23, -35309556);
			a = ky(a, b, c, d, x[i + 1], 4, -1530992060);
			d = ky(d, a, b, c, x[i + 4], 11, 1272893353);
			c = ky(c, d, a, b, x[i + 7], 16, -155497632);
			b = ky(b, c, d, a, x[i + 10], 23, -1094730640);
			a = ky(a, b, c, d, x[i + 13], 4, 681279174);
			d = ky(d, a, b, c, x[i + 0], 11, -358537222);
			c = ky(c, d, a, b, x[i + 3], 16, -722521979);
			b = ky(b, c, d, a, x[i + 6], 23, 76029189);
			a = ky(a, b, c, d, x[i + 9], 4, -640364487);
			d = ky(d, a, b, c, x[i + 12], 11, -421815835);
			c = ky(c, d, a, b, x[i + 15], 16, 530742520);
			b = ky(b, c, d, a, x[i + 2], 23, -995338651);
			a = kE(a, b, c, d, x[i + 0], 6, -198630844);
			d = kE(d, a, b, c, x[i + 7], 10, 1126891415);
			c = kE(c, d, a, b, x[i + 14], 15, -1416354905);
			b = kE(b, c, d, a, x[i + 5], 21, -57434055);
			a = kE(a, b, c, d, x[i + 12], 6, 1700485571);
			d = kE(d, a, b, c, x[i + 3], 10, -1894986606);
			c = kE(c, d, a, b, x[i + 10], 15, -1051523);
			b = kE(b, c, d, a, x[i + 1], 21, -2054922799);
			a = kE(a, b, c, d, x[i + 8], 6, 1873313359);
			d = kE(d, a, b, c, x[i + 15], 10, -30611744);
			c = kE(c, d, a, b, x[i + 6], 15, -1560198380);
			b = kE(b, c, d, a, x[i + 13], 21, 1309151649);
			a = kE(a, b, c, d, x[i + 4], 6, -145523070);
			d = kE(d, a, b, c, x[i + 11], 10, -1120210379);
			c = kE(c, d, a, b, x[i + 2], 15, 718787259);
			b = kE(b, c, d, a, x[i + 9], 21, -343485551);
			a = iI(a, bbH);
			b = iI(b, bbF);
			c = iI(c, bbD);
			d = iI(d, bbC)
		}
		return [a, b, c, d]
	};
	var OO = function (bF, bl) {
		var oJ = oZ(bF, !0);
		if (oJ.length > 16)
			oJ = xQ(oJ, bF.length * jt);
		var zm = Array(16),
		zj = Array(16);
		for (var i = 0; i < 16; i++) {
			zm[i] = oJ[i]^909522486;
			zj[i] = oJ[i]^1549556828
		}
		var bLw = xQ(zm.concat(oZ(bl, !0)), 512 + bl.length * jt);
		return xQ(zj.concat(bLw), 512 + 128)
	};
	var xX = function (x, ck) {
		x[ck >> 5] |= 128 << 24 - ck % 32;
		x[(ck + 64 >> 9 << 4) + 15] = ck;
		var w = Array(80),
		a = 1732584193,
		b = -271733879,
		c = -1732584194,
		d = 271733878,
		e = -1009589776;
		for (var i = 0, l = x.length, bbB, bbA, Hj, bbz, bby; i < l; i += 16) {
			bbB = a;
			bbA = b;
			Hj = c;
			bbz = d;
			bby = e;
			for (var j = 0; j < 80; j++) {
				w[j] = j < 16 ? x[i + j] : FI(w[j - 3]^w[j - 8]^w[j - 14]^w[j - 16], 1);
				var t = iI(iI(FI(a, 5), blb(j, b, c, d)), iI(iI(e, w[j]), bli(j)));
				e = d;
				d = c;
				c = FI(b, 30);
				b = a;
				a = t
			}
			a = iI(a, bbB);
			b = iI(b, bbA);
			c = iI(c, Hj);
			d = iI(d, bbz);
			e = iI(e, bby)
		}
		return [a, b, c, d, e]
	};
	var OZ = function (bF, bl) {
		var oJ = oZ(bF);
		if (oJ.length > 16)
			oJ = xX(oJ, bF.length * jt);
		var zm = Array(16),
		zj = Array(16);
		for (var i = 0; i < 16; i++) {
			zm[i] = oJ[i]^909522486;
			zj[i] = oJ[i]^1549556828
		}
		var bLw = xX(zm.concat(oZ(bl)), 512 + bl.length * jt);
		return xX(zj.concat(bLw), 512 + 160)
	};
	p.bzi = function (bF, bl) {
		return zG(OZ(bF, bl))
	};
	p.bzh = function (bF, bl) {
		return Eh(OZ(bF, bl))
	};
	p.bzg = function (bF, bl) {
		return Ep(OZ(bF, bl))
	};
	p.bze = function (bF, bl) {
		return zG(OO(bF, bl), !0)
	};
	p.bzc = function (bF, bl) {
		return Eh(OO(bF, bl), !0)
	};
	p.bzb = function (bF, bl) {
		return Ep(OO(bF, bl), !0)
	};
	p.bza = function (bl) {
		return zG(xX(oZ(bl), bl.length * jt))
	};
	p.byX = function (bl) {
		return Eh(xX(oZ(bl), bl.length * jt))
	};
	p.byV = function (bl) {
		return Ep(xX(oZ(bl), bl.length * jt))
	};
	p.mi = function (bl) {
		return zG(xQ(oZ(bl, !0), bl.length * jt), !0)
	};
	p.byU = function (bl) {
		return Eh(xQ(oZ(bl, !0), bl.length * jt), !0)
	};
	p.byR = function (bl) {
		return Ep(xQ(oZ(bl, !0), bl.length * jt), !0)
	};
	p.byQ = function (bl) {
		return zG(oZ(bl, !0), !0)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bH = be("nej.j"),
	bZ = be("nej.o"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	eQ = be("nej.ui"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.Xg = NEJ.C();
	bb = bo.Xg.bN(bo.eH, !0);
	bb.dv = function () {
		this.dF()
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.vO = bk[0];
		this.Nb = bk[1];
		this.Nc = bk[2];
		bj.bs(bk[3], "click", this.Nd.bh(this))
	};
	bb.bLv = function () {
		this.dn = "ntp-alert"
	};
	bb.cw = function (bf) {
		bf.parent = bf.parent || document.body;
		this.cA(bf);
		Fp.bY(this.vO, "display", "");
		if (bf.type == "noicon") {
			Fp.bY(this.vO, "display", "none")
		} else if (bf.type == "success") {
			Fp.fC(this.vO, "u-icn-88", "u-icn-89")
		} else {
			Fp.fC(this.vO, "u-icn-89", "u-icn-88")
		}
		this.Nb.innerHTML = bf.mesg || "";
		if (bf.mesg2) {
			Fp.bR(this.Nc, "f-hide");
			this.Nc.innerHTML = bf.mesg2 || ""
		} else {
			Fp.bV(this.Nc, "f-hide")
		}
	};
	bb.cX = function () {
		this.dc()
	};
	bb.Nd = function (bc) {
		this.bG("onnotice");
		this.cj()
	};
	bo.ep = function (bf) {
		if (this.qe) {
			this.qe.ch();
			delete this.qe
		}
		this.qe = bo.Xg.bL(bf);
		this.qe.bO()
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	bF = "RADIO_LATEST_MAP",
	bb,
	bJ;
	bp.gN({
		"radio_crt-list" : {
			url : "/api/djradio/get/byuser",
			format : function (bHN, bf) {
				var bk = bHN.djRadios;
				return {
					total : bk.length || 0,
					list : bk
				}
			}
		},
		"radio_sub-list" : {
			url : "/api/djradio/get/subed",
			format : function (bHN, bf) {
				var bk = bHN.djRadios;
				bf.data.time = bHN.time;
				return {
					total : bHN.count || 0,
					list : bk
				}
			}
		},
		"radio_sub-add" : {
			url : "/api/djradio/sub",
			filter : function (bf) {
				bf.data = {
					id : bf.id
				}
			},
			format : function (bHN, bf) {
				if (this.Hv("firstSub")) {
					bo.ep({
						title : "订阅成功",
						type : "noicon",
						mesg : "可以在“我的音乐-我的电台”收到节目更新"
					})
				} else {
					bo.cq.bO({
						tip : "订阅成功"
					})
				}
				var dS = this.fh(bf.id) || bf.ext.data;
				dS.subCount += 1;
				dS.subed = true;
				return dS
			},
			finaly : function (bc, bf) {
				bj.bG(bp.jQ, "listchange", bc);
				bj.bG(bp.jQ, "itemchange", {
					attr : "subCount",
					data : bc.data
				})
			},
			onmessage : function (dU) {}

		},
		"radio_sub-del" : {
			url : "/api/djradio/unsub",
			filter : function (bf) {
				bf.data = {
					id : bf.id
				}
			},
			format : function (bHN, bf) {
				bo.cq.bO({
					tip : "取消订阅成功"
				});
				var dS = this.fh(bf.id) || bf.ext.data;
				dS.subCount -= 1;
				dS.subed = false;
				return dS
			},
			finaly : function (bc, bf) {
				bj.bG(bp.jQ, "listchange", bc);
				bj.bG(bp.jQ, "itemchange", {
					attr : "subCount",
					data : bc.data
				})
			}
		}
	});
	bp.jQ = NEJ.C();
	bb = bp.jQ.bN(bp.gY);
	bb.TZ = function (cY, cr) {
		var bLs = this.zq(bF, {});
		bLs[cY.radio.id] = {
			id : cY.id,
			name : cY.name,
			time : cr || 0
		};
		this.sv(bF, bLs)
	};
	bb.buj = function (bC) {
		return this.zq(bF, {})[bC]
	};
	bb.TV = function (dS) {
		var fT = {
			key : "radio_sub",
			ext : {}

		};
		if (bm.bLC(dS)) {
			fT.id = dS.id;
			fT.ext.data = dS
		} else {
			fT.id = dS
		}
		return fT
	};
	bb.iE = function (dS) {
		if (bq.uH())
			this.jo(this.TV(dS))
	};
	bb.TU = function (dS) {
		bq.bKQ({
			btnok : "确定",
			btncc : "取消",
			message : "确定取消订阅？",
			action : function (bz) {
				if (bz == "ok") {
					this.Ae(this.TV(dS))
				}
			}
			.bh(this)
		})
	};
	bb.Hv = function () {
		var qR = "RADIO_UPGRADE_TIP";
		return function (bDM) {
			var bl = this.zq(qR, {});
			if (bl[bDM]) {
				return false
			} else {
				bl[bDM] = true;
				this.sv(qR, bl);
				return true
			}
		}
	}
	();
	bK.hh.bL({
		element : bp.jQ,
		event : ["listchange", "itemchange"]
	})
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bj = be("nej.v"),
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bH = be("nej.j"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bEZ = be("nm.w"),
	bb;
	var QUEUE_KEY = "track-queue";
	var PlayMode = {
		SINGLE_CYCLE : 2,
		LIST_LOOP : 4,
		RANDOM : 5
	};
	bEZ.uv = NEJ.C();
	bb = bEZ.uv.bN(bK.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.cz = bEZ.ig.mh();
		this.dl = [];
		this.yt = [];
		this.ri = bq.bOz();
		this.bHO = 0;
		this.dA([[bEZ.ig, "playaction", this.bNv.bh(this)]]);
		this.bwT = bp.qE.bL();
		this.lh = bp.jQ.bL();
		this.bPo()
	};
	bb.cX = function () {
		this.dc();
		delete this.dl;
		delete this.yt;
		delete this.ri
	};
	bb.bNY = function () {
		bH.yX(QUEUE_KEY, this.dl)
	};
	bb.bPn = function () {
		var pe = [PlayMode.SINGLE_CYCLE, PlayMode.LIST_LOOP, PlayMode.RANDOM];
		return function () {
			var eU,
			bu = bm.dY(pe, this.ri.mode);
			eU = bu < 0 ? PlayMode.LIST_LOOP : pe[(bu + 1) % 3];
			this.ri.mode = eU;
			if (this.bNE()) {
				this.bNZ()
			}
			bq.bND(this.ri);
			return this.ri.mode
		}
	}
	();
	bb.bPm = function () {
		return this.ri.mode
	};
	bb.kW = function () {
		this.bNx(this.bOB(+1), "ui")
	};
	bb.wQ = function () {
		this.bNx(this.bOB(-1), "ui")
	};
	bb.sp = function () {
		return this.dl[this.bHO]
	};
	bb.bPl = function (jF, Lq, dB) {
		if (!jF || !jF.length)
			return;
		var bLs = {},
		bdO = jF[0];
		if (!Lq) {
			bm.bLt(this.dl, function (eD) {
				bLs[eD.id] = eD
			});
			bm.bLt(jF, function (eD) {
				if (bLs[eD.id]) {
					if (bdO.id == eD.id) {
						bdO = bLs[eD.id]
					}
				} else {
					this.dl.push(eD)
				}
			}, this)
		} else {
			this.dl = jF
		}
		if (this.bNE()) {
			this.bNZ()
		}
		if (dB) {
			this.bNx(bm.dY(this.dl, bdO));
			this.cz.gJ()
		}
		this.bNY();
		bj.bG(bEZ.uv, "queuechange", {
			cmd : dB ? "play" : "addto"
		})
	};
	bb.oE = function (bkY) {
		var bu = bm.dY(this.dl, function (eD) {
				return eD.id == bkY
			});
		if (bu != -1) {
			var bPk = bu == this.bHO && this.dl.length > 1,
			bPj = bu == this.dl.length - 1,
			eD = this.dl[bu];
			this.dl.splice(bu, 1);
			if (this.bNE()) {
				this.yt.splice(bm.dY(this.yt, eD), 1)
			}
			if (bPk) {
				if (bPj) {
					this.bNx(bu - 1)
				} else {
					this.bNx(bu)
				}
			} else if (bu < this.bHO) {
				this.bHO--
			}
			this.bNY();
			bj.bG(bEZ.uv, "queuechange", {
				cmd : "delete"
			})
		}
	};
	bb.xv = function () {
		this.dl = [];
		this.yt = [];
		this.ri.index = this.bHO = 0;
		bq.bND(this.ri);
		this.bNY();
		bj.bG(bEZ.uv, "queuechange", {
			cmd : "clear"
		})
	};
	bb.sp = function () {
		return this.dl[this.bHO]
	};
	bb.bOC = function () {
		return this.dl
	};
	bb.kN = function () {
		return this.dl.length
	};
	bb.bOa = function (bC) {
		var bu = bm.dY(this.dl, function (eD) {
				return bC == eD.id
			});
		if (bu >= 0) {
			return this.dl[bu]
		}
	};
	bb.bPi = function (bC) {
		var bu = bm.dY(this.dl, function (eD) {
				return bC == eD.id
			});
		if (bu >= 0) {
			this.bNx(bu);
			this.cz.gJ()
		}
	};
	bb.bPo = function () {
		this.dl = bH.vz(QUEUE_KEY) || [];
		this.bHO = this.ri.index || 0;
		if (this.dl.length && this.bNE()) {
			this.bNZ()
		}
		this.cz.bOq(this.sp())
	};
	bb.bOB = function (dP) {
		if (this.bNE()) {
			var bvD = this.sp(),
			bu = inRange(bm.dY(this.yt, bvD) + dP, this.yt.length);
			return bm.dY(this.dl, this.yt[bu])
		} else {
			return inRange(this.bHO + dP, this.dl.length)
		}
		function inRange(bu, ck) {
			return bu < 0 ? ck - 1 : bu >= ck ? 0 : bu
		}
	};
	bb.bNZ = function () {
		var bk = this.dl.slice(0);
		this.yt = [];
		while (bk.length) {
			var bu = bm.DZ(0, bk.length - 1);
			this.yt.push(bk[bu]);
			bk.splice(bu, 1)
		}
	};
	bb.bNx = function (bu, bDM) {
		if (!this.dl.length)
			return;
		var lm,
		lZ = this.sp(),
		bOD = this.cz.bOu();
		this.bHO = bu;
		this.ri.index = this.bHO;
		lm = this.dl[this.bHO];
		bq.bND(this.ri);
		bj.bG(bEZ.uv, "playchange", {
			old : lZ,
			"new" : lm,
			type : bDM
		});
		this.cz.bOq(this.sp());
		if (lZ && bOD > 3) {
			this.bwT.Sh(lZ.id, bOD, lZ.source, bDM || "interrupt")
		}
		if (lm && lm.program)
			this.lh.TZ(lm.program, 0)
	};
	bb.bNE = function () {
		return this.ri.mode == PlayMode.RANDOM
	};
	bb.bNv = function (bc) {
		if (bc.action == "ended") {
			if (this.ri.mode == PlayMode.SINGLE_CYCLE) {
				this.bNx(this.bHO, "playend")
			} else {
				this.kW()
			}
		}
	};
	bK.hh.bL({
		element : bEZ.uv,
		event : ["queuechange", "playchange"]
	})
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	dE = be("nej.p"),
	bH = be("nej.j"),
	cQ = be("nej.ui"),
	bK = be("nej.ut"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bq = be("nm.x"),
	eb = be("nm.u"),
	bEZ = be("nm.w"),
	bE = be("nm.m.f"),
	bb,
	bJ;
	bE.bOE = NEJ.C();
	bb = bE.bOE.bN(cQ.ic);
	bb.dv = function () {
		this.dF();
		this.qT = bEZ.uv.mh();
		bj.bs(bEZ.uv, "queuechange", this.nj.bh(this));
		bj.bs(bEZ.uv, "playchange", this.bJI.bh(this))
	};
	bb.bLv = function () {
		this.dn = "m-player-panel"
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.bNL = bk[0];
		this.la = bk[1];
		this.bNF = bk[2];
		this.dk = bk[3];
		this.bGf = bk[4];
		this.gu = bEZ.rP.bL({
				track : this.bGf,
				slide : Fp.dh(this.bGf)[0],
				content : this.dk,
				speed : 4
			});
		this.cO = {
			nask : bk[5],
			nmenu : bk[6],
			nlist : bk[7],
			nscroll : bk[8]
		};
		bj.bs(this.bB, "click", this.gI.bh(this));
		bj.bs(this.bNF, "load", this.Rf.bh(this))
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.gQ = bEZ.bfB.bL(this.cO);
		this.bJI({
			"new" : this.qT.sp()
		});
		this.gu.lO();
		var bk = Fp.bP(this.dk, "z-sel");
		if (bk.length) {
			var cl = Fp.mV(bk[0], this.dk);
			this.dk.scrollTop = this.dk.scrollTop + (cl.y - (this.dk.scrollTop + 112));
			this.gu.Zv()
		}
	};
	bb.cX = function () {
		this.bG("onclose");
		if (this.gQ) {
			this.gQ.ch();
			delete this.gQ
		}
		this.dc()
	};
	bb.nj = function (bc) {
		Fp.ne(this.dk, "m-player-queue", {
			queue : this.qT.bOC(),
			current : this.qT.sp()
		}, {
			dur2time : bq.lx,
			getArtistName : bq.ls
		});
		this.bNL.innerText = this.qT.kN();
		if (bc && bc.cmd == "delete")
			return;
		var bk = Fp.bP(this.dk, "z-sel");
		if (bk.length) {
			var cl = Fp.mV(bk[0], this.dk);
			this.dk.scrollTop = Math.max(Math.min(cl.y, this.dk.scrollTop), cl.y - 224);
			this.gu.Zv()
		}
	};
	bb.gI = function (bc) {
		var bid,
		bC;
		bid = bj.cf(bc, "a:href");
		if (bid && bid.tagName.toLocaleLowerCase() == "a" && /^http/.test(bid.href)) {
			return
		}
		bj.lg(bc);
		bid = bj.cf(bc, "d:action");
		bC = Fp.bI(bid, "id");
		switch (Fp.bI(bid, "action")) {
		case "likeall":
			var gw = this.qT.bOC();
			if (gw && gw.length) {
				var bk = [];
				bm.bLt(gw, function (bt) {
					if (!bt.program)
						bk.push(bt)
				});
				window.subscribe(bk, !1);
				this.ch()
			}
			break;
		case "delete":
			this.qT.oE(bC);
			bj.cu(bc);
			break;
		case "like":
			var eD = this.qT.bOa(bC);
			window.subscribe(eD, false);
			bj.cu(bc);
			this.ch();
			break;
		case "share":
			eD = this.qT.bOa(bC);
			!eD.program ? bq.nw({
				rid : eD.id,
				type : 18,
				purl : eD.album.picUrl
			}) : bq.nw({
				rid : eD.program.id,
				type : 17,
				purl : eD.album.coverUrl
			});
			bj.cu(bc);
			this.ch();
			break;
		case "download":
			eD = this.qT.bOa(bC);
			if (eD.program) {
				bq.bNg({
					type : 17,
					id : eD.program.id
				})
			} else {
				bq.bNg({
					type : 18,
					id : eD.id
				})
			}
			this.ch();
			break;
		case "play":
			this.qT.bPi(bC);
			break;
		case "clear":
			this.qT.xv();
			break;
		case "close":
			this.ch();
			break
		}
	};
	bb.bJI = function (bc) {
		var bHu = bc["new"];
		if (bHu) {
			this.gQ && this.gQ.bPh(bHu);
			if (bHu.program) {
				this.bNF.src = bHu.program.blurCoverUrl;
				this.la.innerText = bHu.program.name
			} else {
				this.bNF.src = "http://music.163.com/api/img/blur/" + (bHu.album.pic || bHu.album.picId || bHu.album.picStr);
				this.la.innerText = bHu.name
			}
		}
		this.nj()
	};
	bb.Rf = function (bc) {
		var dT = this.bNF.clientHeight,
		bPg = this.dk.parentNode.clientHeight;
		Fp.bY(this.bNF, "top", (bPg - dT) / 2 + "px")
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bv = be("nej.ut"),
	bb;
	if (!!bv.Sx)
		return;
	bv.Sx = NEJ.C();
	bb = bv.Sx.bN(bv.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.Il = bf.to || bZ;
		this.Dw = bf.from || {};
		this.bhj = Math.max(0, parseInt(bf.delay) || 0)
	};
	bb.cX = function () {
		this.dc();
		this.cu();
		if (!!this.Dv) {
			window.clearTimeout(this.Dv);
			delete this.Dv
		}
		delete this.Il;
		delete this.Dw
	};
	bb.Tc = function (cr) {
		if (!this.Dw)
			return;
		if (("" + cr).indexOf(".") >= 0)
			cr =  + (new Date);
		if (this.Td(cr)) {
			this.cu();
			return
		}
		this.dQ = requestAnimationFrame(this.Tc.bh(this))
	};
	bb.Td = co;
	bb.gJ = function () {
		var bhk = function () {
			this.Dv = window.clearTimeout(this.Dv);
			this.Dw.time =  + (new Date);
			this.dQ = requestAnimationFrame(this.Tc.bh(this))
		};
		return function () {
			this.Dv = window.setTimeout(bhk.bh(this), this.bhj);
			return this
		}
	}
	();
	bb.cu = function () {
		this.dQ = cancelRequestAnimationFrame(this.dQ);
		this.bG("onstop");
		return this
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bm = be("nej.u"),
	bv = be("nej.ut"),
	bb,
	bJ;
	if (!!bv.tj)
		return;
	bv.tj = NEJ.C();
	bb = bv.tj.bN(bv.Sx);
	bJ = bv.tj.du;
	bb.cw = function (bf) {
		this.cA(bf);
		this.So = bf.duration || 200;
		this.bjo = 1 / (200 * this.So);
		this.bjB(bf.timing);
		this.bjN()
	};
	bb.cX = function () {
		this.dc();
		delete this.wH;
		delete this.Sa
	};
	bb.bjB = function () {
		var fg = /^cubic\-bezier\((.*?)\)$/i,
		hy = /\s*,\s*/i,
		Tm = {
			linear : [0, 0, 1, 1],
			ease : [.25, .1, .25, 1],
			easein : [.42, 0, 1, 1],
			easeout : [0, 0, .58, 1],
			easeinout : [0, 0, .58, 1]
		};
		var bkz = function (bz, bu, bk) {
			bk[bu] = parseFloat(bz)
		};
		return function (HT) {
			HT = (HT || "").toLowerCase();
			this.wH = Tm[HT];
			if (fg.test(HT)) {
				this.wH = RegExp.$1.split(hy);
				bm.bLt(this.wH, bkz)
			}
			if (!!this.wH)
				return;
			this.wH = Tm.ease
		}
	}
	();
	bb.bjN = function () {
		var xi = this.wH,
		RW = 3 * xi[0],
		Tr = 3 * (xi[2] - xi[0]) - RW,
		bkU = 1 - RW - Tr,
		RV = 3 * xi[1],
		Tu = 3 * (xi[3] - xi[1]) - RV,
		blO = 1 - RV - Tu;
		this.Sa = {
			ax : bkU,
			ay : blO,
			bx : Tr,
			by : Tu,
			cx : RW,
			cy : RV
		}
	};
	bb.bfG = function () {
		var Tx = function (cr, le) {
			return ((le.ax * cr + le.bx) * cr + le.cx) * cr
		};
		var bnh = function (cr, le) {
			return ((le.ay * cr + le.by) * cr + le.cy) * cr
		};
		var bod = function (cr, le) {
			return (3 * le.ax * cr + 2 * le.bx) * cr + le.cx
		};
		var bpo = function (cr, TC, le) {
			var t0,
			t1,
			t2,
			x2,
			d2,
			i;
			for (t2 = cr, i = 0; i < 8; i++) {
				x2 = Tx(t2, le) - cr;
				if (Math.abs(x2) < TC)
					return t2;
				d2 = bod(t2, le);
				if (Math.abs(d2) < 1e-6)
					break;
				t2 = t2 - x2 / d2
			}
			t0 = 0;
			t1 = 1;
			t2 = cr;
			if (t2 < t0)
				return t0;
			if (t2 > t1)
				return t1;
			while (t0 < t1) {
				x2 = Tx(t2, le);
				if (Math.abs(x2 - cr) < TC)
					return t2;
				if (cr > x2)
					t0 = t2;
				else
					t1 = t2;
				t2 = (t1 - t0) * .5 + t0
			}
			return t2
		};
		return function (dP) {
			return bnh(bpo(dP / this.So, this.bjo, this.Sa), this.Sa)
		}
	}
	();
	bb.Td = function (cr) {
		var dP = cr - this.Dw.time,
		lS = this.bfG(dP),
		cl = bm.Cy(this.Dw.offset * (1 - lS) + this.Il.offset * lS, 2),
		nH = !1;
		if (dP >= this.So) {
			cl = this.Il.offset;
			nH = !0
		}
		this.bG("onupdate", {
			offset : cl
		});
		return nH
	};
	bb.cu = function () {
		this.bG("onupdate", {
			offset : this.Il.offset
		});
		bJ.cu.apply(this, arguments);
		return this
	}
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.ut"),
	bb;
	if (!!bv.wi)
		return;
	bv.wi = NEJ.C();
	bb = bv.wi.bN(bv.tj);
	bb.cw = function (bf) {
		bf = NEJ.X({}, bf);
		bf.timing = "easein";
		this.cA(bf)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bv = be("nej.ut"),
	pp;
	bv.wd = NEJ.C();
	pp = bv.wd.bN(bv.eW);
	pp.cw = function (bf) {
		this.cA(bf);
		this.brb = !!bf.reset;
		this.HY = parseInt(bf.delta) || 0;
		this.fw = Fp.bw(bf.track);
		this.XT = Fp.bw(bf.progress);
		this.dA([[bf.thumb, "mousedown", this.bra.bh(this)], [document, "mousemove", this.XV.bh(this)], [document, "mouseup", this.Mf.bh(this)], [this.fw, "mousedown", this.bqW.bh(this)]]);
		var hW = bf.value;
		if (hW == null) {
			hW = this.XT.offsetWidth / this.fw.offsetWidth
		}
		this.fJ(hW)
	};
	pp.cX = function () {
		if (!!this.brb)
			this.Hu(0);
		this.dc()
	};
	pp.bra = function (bc) {
		if (!!this.gd)
			return;
		bj.cu(bc);
		this.gd = bj.lB(bc);
		this.XZ = this.fw.offsetWidth
	};
	pp.XV = function (bc) {
		if (!this.gd)
			return;
		var cl = bj.lB(bc),
		dP = cl - this.gd;
		this.gd = cl;
		this.Hu(this.we + dP / this.XZ);
		this.bG("onslidechange", {
			ratio : this.we
		})
	};
	pp.Mf = function (bc) {
		if (!this.gd)
			return;
		this.XV(bc);
		delete this.gd;
		delete this.XZ;
		this.bG("onslidestop", {
			ratio : this.we
		})
	};
	pp.bqW = function (bc) {
		var bqT = Fp.mV(this.fw).x,
		bqP = bj.lB(bc);
		this.Hu((bqP - bqT + this.HY) / this.fw.offsetWidth);
		this.bG("onslidestop", {
			ratio : this.we
		})
	};
	pp.Hu = function (hW) {
		this.we = Math.max(0, Math.min(1, hW));
		Fp.bY(this.XT, "width", this.we * 100 + "%")
	};
	pp.fJ = function (hW) {
		if (!!this.gd)
			return;
		this.Hu(hW)
	};
	pp.KI = function (hW) {
		return this.we
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	fS = be("nm.ut");
	fS.bFm = function () {
		var bFf = function (cK, eh, tY, ud, bFc) {
			if (tY < ud) {
				var bFd = Math.floor((tY + ud) / 2);
				bFf(cK, eh, tY, bFd, bFc);
				bFf(cK, eh, bFd + 1, ud, bFc);
				bFl(cK, eh, tY, bFd, ud, bFc)
			}
		};
		var bFl = function (cK, eh, tY, bFd, ud, bFc) {
			var i = tY,
			j = bFd + 1,
			k = tY;
			while (i <= bFd && j <= ud) {
				if (bFc(cK[i], cK[j]) <= 0) {
					eh[k++] = cK[i++]
				} else {
					eh[k++] = cK[j++]
				}
			}
			while (i <= bFd) {
				eh[k++] = cK[i++]
			}
			while (j <= ud) {
				eh[k++] = cK[j++]
			}
			for (i = tY; i <= ud; i++) {
				cK[i] = eh[i]
			}
		};
		var bFk = function (ox, bFj) {
			return ox < bFj
		};
		return function (cK, bFc) {
			if (!cK || cK.length == 0)
				return cK;
			bFc = bFc || bFk;
			bFf(cK, new Array(cK.length), 0, cK.length - 1, bFc);
			return cK
		}
	}
	();
	fS.bEO = function () {
		var fg = /\r\n|\r|\n/,
		hy = /\[(.*?)\]/gi,
		II = {
			ar : "artist",
			ti : "track",
			al : "album",
			offset : "offset"
		};
		var IH = function (bn, iD) {
			var cK = [];
			iD = iD.replace(hy, function ($1, $2) {
					var cr = IF.call(this, bn, $2);
					if (cr != null) {
						cK.push({
							time : cr,
							tag : $2
						});
						bn.scrollable = !0
					}
					return ""
				}
					.bh(this)).trim();
			if (!cK.length) {
				if (!iD || iD.length == 0)
					return;
				cK.push({
					time : -1
				})
			}
			bm.bLt(cK, function (bt) {
				bt.lyric = iD
			});
			var ps = bn.lines;
			ps.push.apply(ps, cK)
		};
		var IF = function (bn, cr) {
			var cK = cr.split(":"),
			oO = cK.shift(),
			bF = II[oO];
			if (!!bF) {
				bn[bF] = cK.join(":");
				return null
			}
			oO = parseInt(oO);
			if (isNaN(oO)) {
				return null
			} else {
				var cl = parseInt(bn.offset) || 0;
				return oO * 60 + parseFloat(cK.join(".")) + cl / 1e3
			}
		};
		var SL = function (SD, SC) {
			return SD.time - SC.time
		};
		return function (bC, ci) {
			var bn = {
				id : bC,
				lines : [],
				scrollable : !1,
				source : ci
			};
			bm.bLt((ci || "").trim().split(fg), IH.bh(null, bn));
			if (bn.scrollable) {
				fS.bFm(bn.lines, SL);
				var bu;
				for (var i = 0; i < bn.lines.length; i++) {
					if (!!bn.lines[i].lyric) {
						bu = i;
						break
					}
				}
				bn.lines.splice(0, bu)
			}
			return bn
		}
	}
	();
	fS.bET = function (bDu, bEI) {
		var bEP = fS.bEO(0, bDu),
		bEQ = fS.bEO(0, bEI);
		if (bEP.scrollable && bEQ.scrollable) {
			bm.bLt(bEP.lines, function (bt) {
				var bES = getTranslate(bt.time);
				if (bES) {
					bt.lyric = bt.lyric + "<br>" + bES.lyric
				}
			})
		}
		return bEP;
		function getTranslate(cr) {
			var bu = bm.dY(bEQ.lines, function (bt) {
					return bt.time == cr
				});
			if (bu != -1) {
				return bEQ.lines[bu]
			}
		}
	}
})();
(function () {
	var bv = NEJ.P("nej.ut"),
	TE;
	if (!!bv.RP)
		return;
	bv.RP = NEJ.C();
	TE = bv.RP.bN(bv.tj);
	TE.cw = function (bf) {
		bf = NEJ.X({}, bf);
		bf.timing = "linear";
		this.cA(bf)
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
	var bEa = function (bl) {
		if (bl.errorType == 6 || bl.errorType == 7 || bl.errorType == 8) {
			if (!bq.uH())
				return;
			bq.vE({
				txt : "m-report-point",
				title : "提示",
				onaction : bEb.bh(this, bl)
			})
		} else {
			bEb(bl)
		}
	};
	var bEq = function (bc) {
		var bid = bj.cf(bc, "d:action");
		if (Fp.bI(bid, "action") == "feedLyric") {
			bj.cu(bc);
			var dU = Fp.bI(bid, "code"),
			bl = {
				songId : Fp.bI(bid, "id"),
				errorType : dU
			};
			bEa(bl)
		}
	};
	var bEb = function (bl, bc) {
		if (!bc || bc.action == "ok") {
			bH.cR("/api/v1/feedback/lyric", {
				type : "json",
				method : "post",
				data : bm.eK(bl),
				onload : function (bc) {
					if (bc.code == 200) {
						bo.cq.bO({
							tip : "提交成功"
						});
						if (bm.gj(bl.onok)) {
							bl.onok()
						}
					} else if (bc.code == -2) {
						bq.bKQ({
							title : "提示",
							message : "您的积分不足",
							btnok : "赚积分",
							action : function (cv) {
								if (cv == "ok") {
									location.dispatch2("/store/gain/index")
								}
							}
						})
					} else {
						bo.cq.bO({
							type : 2,
							tip : "提交失败"
						})
					}
				}
			})
		}
	};
	bq.bEc = function (bid) {
		var bid = bid || document.body,
		yI = bEq.bh(this);
		bj.bs(bid, "click", yI);
		return {
			destroy : function () {
				bj.nt(bid, "click", yI)
			}
		}
	};
	bq.bEB = function (bl) {
		bEa(bl)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	bv = be("nej.p"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	eb = be("nm.ut"),
	bEZ = be("nm.w"),
	bb,
	bJ;
	var bOb = {};
	bEZ.bfB = NEJ.C();
	bb = bEZ.bfB.bN(bK.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.dk = bf.nlist;
		this.bNG = bf.nmenu;
		this.bOF = bf.nask;
		this.yA = {
			track : bf.nscroll,
			slide : Fp.dh(bf.nscroll)[0],
			content : this.dk,
			speed : 4
		};
		this.bOc = this.si.bh(this);
		this.dA([[bf.nask, "click", this.bPf.bh(this)], [this.yA.slide, "mousedown", this.zJ.bh(this)], [document, "mouseup", this.zF.bh(this)], [bEZ.ig, "playaction", this.bNv.bh(this)]]);
		if (bv.dp.browser != "firefox") {
			this.dA([[this.dk, "mousewheel", this.bOc]])
		} else {
			this.dk.addEventListener("DOMMouseScroll", this.bOc, false)
		}
		this.gu = bEZ.rP.bL(this.yA);
		this.bOd = bq.bEc(this.dk);
		this.cz = bEZ.ig.mh()
	};
	bb.cX = function () {
		this.dc();
		delete this.bHv;
		delete this.tb;
		delete this.bNM;
		if (this.bOd) {
			this.bOd.destroy();
			delete this.bOd
		}
		if (bv.dp.browser == "firefox") {
			this.dk.removeEventListener("DOMMouseScroll", this.bOc)
		}
		Fp.bY(this.bNG, "display", "none")
	};
	bb.bPf = function () {
		if (Fp.bIU(this.bNG, "display") == "none") {
			Fp.bY(this.bNG, "display", "block")
		} else {
			Fp.bY(this.bNG, "display", "none")
		}
	};
	bb.bOe = function () {
		var vo = 0;
		return function (PW) {
			clearTimeout(vo);
			this.bNM = true;
			if (this.tb) {
				this.tb.ch();
				delete this.tb
			}
			if (!PW) {
				vo = setTimeout(function () {
						delete this.bNM
					}
						.bh(this), 3e3)
			}
		}
	}
	();
	bb.si = function () {
		this.bOe()
	};
	bb.zJ = function () {
		this.bOe(true)
	};
	bb.bNv = function (bc) {
		if (bc.action == "timeupdate") {
			this.bOG(bc.data.time, true)
		}
	};
	bb.bOG = function (cr, bPe) {
		if (!(this.bHv && this.bHv.scrollable) || this.bNM)
			return;
		var i = this.bHv.lines.length - 1,
		ii,
		dP,
		bu = -1,
		bOH = 0,
		hg = 0;
		for (; i >= 0; i--) {
			ii = this.bHv.lines[i];
			dP = ii.time - cr;
			if (dP < 0 && (i > 0 || dP <= -2)) {
				bu = i;
				break
			}
		}
		for (var j = 0, jj; j < this.bOf.length; j++) {
			jj = this.bOf[j];
			if (j < bu) {
				bOH += jj.clientHeight
			}
			if (bu == j) {
				Fp.bV(jj, "z-sel")
			} else {
				Fp.bR(jj, "z-sel")
			}
		}
		if (bu < 0 || Fp.mV(this.bOf[bu], this.dk).y < 96) {
			hg = 0
		} else {
			hg = bOH - 96
		}
		if (Math.abs(hg - this.dk.scrollTop) <= 4 || this.tb)
			return;
		if (bPe) {
			var fT = {
				from : {
					offset : this.dk.scrollTop
				},
				to : {
					offset : hg
				},
				duration : 500,
				onupdate : function (bc) {
					this.dk.scrollTop = bc.offset;
					this.gu.sr(this.dk.scrollTop / (this.dk.scrollHeight - this.dk.clientHeight))
				}
				.bh(this),
				onstop : function () {
					if (this.tb) {
						this.tb.ch();
						delete this.tb
					}
				}
				.bh(this)
			};
			this.tb = bK.RP.bL(fT);
			this.tb.gJ()
		} else {
			this.dk.scrollTop = hg;
			this.gu.sr(this.dk.scrollTop / (this.dk.scrollHeight - this.dk.clientHeight))
		}
	};
	bb.bPh = function (eD) {
		this.bNN = eD;
		delete this.bHv;
		if (eD && !eD.program) {
			var cg = "/api/song/lyric",
			cC = {
				id : eD.id,
				lv : -1,
				tv : -1
			};
			if (bOb[eD.id]) {
				this.bOg(bOb[eD.id])
			} else {
				bH.cR(cg, {
					sync : false,
					type : "json",
					query : cC,
					method : "get",
					onload : this.bOg.gz(this, eD.id),
					onerror : this.bOg.bh(this)
				})
			}
			Fp.bR(this.bOF, "f-hide")
		} else {
			Fp.bV(this.bOF, "f-hide");
			this.HK({})
		}
	};
	bb.bOg = function (bc, bC) {
		if (bc.code == 200) {
			if (bC) {
				bOb[bC] = bc
			}
			var bDu = bc.lrc || {},
			bES = bc.tlyric || {};
			if (!bDu.lyric) {
				this.HK(bc)
			} else {
				this.bHv = eb.bET(bDu.lyric, bES.lyric);
				bc.scrollable = this.bHv.scrollable;
				Fp.ne(this.dk, "m-lyric-line", {
					id : this.bNN.id,
					lines : this.bHv.lines,
					scrollable : this.bHv.scrollable
				});
				this.bOf = Fp.bP(this.dk, "j-flag")
			}
			bc.songId = this.bNN.id;
			Fp.ne(this.bNG, "m-player-lyric-ask", bc)
		} else {}

		if (this.tb) {
			this.tb.ch();
			delete this.tb
		}
		this.gu.lO();
		this.bOG(this.cz.bOu() || 0, false)
	};
	bb.zF = function () {
		if (this.bNM) {
			this.bOe()
		}
	};
	bb.HK = function (bl) {
		if (this.bNN.program) {
			this.dk.innerHTML = '<div class="nocnt nolyric"><span class="s-fc4">电台节目，无歌词</span></div>'
		} else if (bl.nolyric) {
			this.dk.innerHTML = '<div class="nocnt nolyric"><span class="s-fc4">纯音乐，无歌词</span></div>'
		} else {
			this.dk.innerHTML = '<div class="nocnt nolyric"><span class="s-fc4">暂时没有歌词</span><a data-action="feedLyric" data-code="6"' + "data-id=" + this.bNN.id + ' href="#" class="f-tdu">求歌词</a></div>'
		}
		this.gu && this.gu.lO()
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	dE = be("nej.p"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bq = be("nm.x"),
	eb = be("nm.u"),
	bEZ = be("nm.w"),
	bE = be("nm.m.f"),
	gi = be("player"),
	bb,
	bJ;
	bE.Dm = NEJ.C();
	bb = bE.Dm.bN(bK.eW);
	bb.dv = function () {
		this.dF();
		this.bEF = Fp.bw("g_player");
		this.sl = this.bEF.parentNode;
		var bk = Fp.bP(this.bEF, "j-flag");
		this.ju = bk[0];
		this.pM = bk[1];
		this.la = bk[2];
		this.Dn = bk[3];
		this.hZ = bk[4];
		this.nG = bk[5];
		bk = Fp.dh(bk[6]);
		this.bMO = bk[0];
		this.bMT = bk[1];
		this.bOI = bk[2];
		this.bNL = bk[3];
		this.Rh = bk[4];
		this.Ia = Fp.dh(this.bNL)[0];
		this.bNw = bq.bOz();
		this.bNO(3e3);
		this.brV();
		this.bPd();
		this.bPc();
		this.bOJ();
		gi.setLike = this.QX.bh(this);
		bj.bs(this.sl, "click", this.gI.bh(this));
		bj.bs(bEZ.ig, "playaction", this.bNv.bh(this));
		bj.bs(bEZ.uv, "queuechange", this.nj.bh(this));
		bj.bs(bEZ.uv, "playchange", this.bJI.bh(this));
		bj.bs(this.sl, dE.dp.browser == "ie" ? "mouseleave" : "mouseout", this.bfp.bh(this, !1));
		bj.bs(this.sl, dE.dp.browser == "ie" ? "mouseenter" : "mouseover", this.bfp.bh(this, !0));
		bj.bs(document, "keyup", this.bOK.bh(this));
		bj.bs(window, "iframeclick", this.pL.bh(this));
		bj.bs(document, "click", this.pL.bh(this));
		bj.bs(this.bMO, "click", bj.cu.bh(bj));
		gi.hotkeys = this.bOK.bh(this);
		this.bOL = bm.nq()
	};
	bb.bOJ = function () {
		if (this.bNw.lock) {
			Fp.bR(this.sl, "m-playbar-unlock");
			Fp.bV(this.sl, "m-playbar-lock")
		} else {
			Fp.bV(this.sl, "m-playbar-unlock");
			Fp.bR(this.sl, "m-playbar-lock")
		}
	};
	bb.brV = function () {
		var bk = Fp.dh(this.Dn);
		this.bOM = bk[0];
		this.bNP = Fp.dh(bk[1])[0];
		this.bON = bK.wd.bL({
				track : this.Dn,
				thumb : this.bNP,
				progress : bk[1],
				onslidestop : function (bc) {
					this.bOO = false;
					this.cz.lu(this.cz.bNV() * bc.ratio)
				}
				.bh(this),
				onslidechange : function (bc) {
					this.bOO = true;
					this.bOh({
						time : bc.ratio * this.cz.bNV(),
						duration : this.cz.bNV()
					})
				}
				.bh(this)
			})
	};
	bb.bPc = function () {
		var bk = Fp.bP(this.bMO, "j-t"),
		hW = bk[1],
		bMV = this.bNw.volume;
		if (bMV == null) {
			bMV = .8
		}
		this.AC = bK.Bd.bL({
				track : bk[0],
				slide : bk[2],
				onchange : function (bc) {
					var bz = 1 - bc.y.rate,
					dT = 93 * bz;
					Fp.bY(hW, "height", dT + "px");
					dT > 0 ? Fp.bR(this.bMT, "icn-volno") : Fp.bV(this.bMT, "icn-volno");
					this.cz.jZ(bz);
					this.bNw.volume = bz;
					bq.bND(this.bNw)
				}
				.bh(this)
			});
		this.AC.fJ({
			x : 0,
			y : 1 - bMV
		})
	};
	bb.bPd = function () {
		var cC = bm.mk(location.hash.slice(1)) || {},
		bDM = cC["__media"] || this.bNw.useFlash && "flash" || "auto";
		this.cz = bEZ.ig.mh({
				media : bDM
			});
		this.qT = bEZ.uv.mh();
		gi.addTo = function (jF, Lq, dB) {
			this.qT.bPl(JSON.parse(JSON.stringify(jF)), Lq, dB)
		}
		.bh(this);
		gi.tipPlay = this.bOi.bh(this);
		gi.getPlaying = function () {
			return {
				track : this.qT.sp(),
				playing : this.cz.pn()
			}
		}
		.bh(this);
		gi.pause = this.cz.hY.bh(this.cz);
		var bvD = this.qT.sp();
		if (bvD) {
			this.bOP(bvD)
		}
		this.bOQ(this.qT.bPm());
		this.bOR()
	};
	bb.nj = function () {
		var vo = 0;
		return function (bc) {
			if (bc.cmd == "play" || bc.cmd == "addto") {
				this.bOi(bc.cmd == "play" ? "已开始播放" : "已添加到播放列表")
			}
			this.bOR()
		}
	}
	();
	bb.bJI = function (bc) {
		var eD = bc["new"];
		this.bOP(eD);
		if (this.cz.pn()) {
			document.title = decodeURIComponent("%E2%96%B6%20") + eD.name
		}
		bj.bG(window, "playchange", {
			trackId : eD.id,
			track : eD
		})
	};
	bb.gI = function (bc) {
		var bid = bj.cf(bc, "d:action"),
		cv = Fp.bI(bid, "action"),
		tu = bj.cf(bc, "a:href");
		if (tu && tu.tagName.toLocaleLowerCase() == "a" && /^http/.test(tu.href)) {
			this.ch();
			return
		} else {
			bj.cu(bc)
		}
		switch (cv) {
		case "lock":
			this.bNw.lock = !Fp.cJ(this.sl, "m-playbar-lock");
			bq.bND(this.bNw);
			this.bOJ();
			break;
		case "prev":
			this.qT.wQ();
			break;
		case "next":
			this.qT.kW();
			break;
		case "play":
			this.cz.gJ();
			break;
		case "pause":
			this.cz.hY();
			break;
		case "like":
			var eD = this.qT.sp();
			if (eD) {
				window.subscribe(eD, eD.program)
			}
			!eD.program && this.vd && this.vd.ch();
			break;
		case "share":
			var eD = this.qT.sp();
			if (eD) {
				!eD.program ? bq.nw({
					rid : eD.id,
					type : 18,
					purl : eD.album.picUrl
				}) : bq.nw({
					rid : eD.program.id,
					type : 17,
					purl : eD.program.coverUrl
				})
			}
			this.vd && this.vd.ch();
			break;
		case "mode":
			this.bOQ(this.qT.bPn(), true);
			break;
		case "volume":
			bj.cu(bc);
			if (this.bMO.style.visibility != "hidden") {
				Fp.bY(this.bMO, "visibility", "hidden")
			} else {
				Fp.bY(this.bMO, "visibility", "visible")
			}
			break;
		case "panel":
			bj.cu(bc);
			if (!this.vd) {
				this.vd = bE.bOE.bL({
						parent : this.sl,
						onclose : function () {
							delete this.vd;
							this.bNO()
						}
						.bh(this)
					})
			} else {
				if (this.vd) {
					this.vd.ch();
					delete this.vd
				}
			}
			break
		}
	};
	bb.bOh = function (bc) {
		this.hZ.innerHTML = bq.gN("<em>{0}</em> / {1}", bq.lx(bc.time), bq.lx(bc.duration))
	};
	bb.bOQ = function (eU, eG) {
		var bLs = {
			2 : {
				icn : "icn-one",
				title : "单曲循环"
			},
			4 : {
				icn : "icn-loop",
				title : "循环"
			},
			5 : {
				icn : "icn-shuffle",
				title : "随机"
			}
		},
		bQ = bLs[eU];
		Fp.fC(this.bOI, "icn-one icn-loop icn-shuffle", bQ.icn);
		this.Rh.innerText = this.bOI.title = bQ.title;
		clearTimeout(this.bPb);
		if (eG) {
			Fp.bY(this.Rh, "display", "");
			this.bPb = setTimeout(function () {
					Fp.bY(this.Rh, "display", "none")
				}
					.bh(this), 2e3)
		}
	};
	bb.QX = function (cY) {
		var bvD = this.qT.sp();
		if (bvD && bvD.program && bvD.program.id == cY.id) {
			bvD.program.liked = cY.liked;
			this.nG.title = "赞";
			if (cY.liked) {
				Fp.fC(this.nG, "icn-zan", "icn-yizan")
			} else {
				Fp.fC(this.nG, "icn-yizan", "icn-zan")
			}
			this.qT.bNY()
		}
	};
	bb.bOP = function (eD) {
		var dD;
		Fp.bY(this.bOM, "width", 0);
		this.bOh(0);
		this.bON.fJ(0);
		if (eD) {
			dD = this.bPa(eD);
			if (eD.program) {
				Fp.fC(this.nG, "icn-add", "icn-zan");
				this.nG.title = "赞";
				bH.mB(this.pK);
				this.pK = bH.cR("/api/dj/program/detail", {
						type : "json",
						query : {
							id : eD.program.id
						},
						onload : function (bc) {
							if (bc.code == 200) {
								this.QX(bc.program)
							}
						}
						.bh(this)
					})
			} else {
				Fp.fC(this.nG, "icn-zan icn-yizan", "icn-add");
				this.nG.title = "收藏"
			}
			this.pM.innerHTML = bq.gN('<img src="{0}?param=34y34"><a href="{1}" hidefocus="true" class="mask"></a>', dD.cover, dD.titleUrl);
			Fp.ne(this.la, "m-player-playinfo", dD)
		}
	};
	bb.bOR = function () {
		var bk = Fp.dh(this.bNL);
		bk[1].innerText = this.qT.kN()
	};
	bb.bPa = function (eD) {
		var bn = {
			duration : eD.duration,
			cover : "http://s4.music.126.net/style/web2/img/default_album.jpg",
			source : eD.source
		};
		if (eD.program) {
			bn.type = "program";
			bn.name = bm.eZ(eD.program.name);
			bn.cover = eD.program.coverUrl;
			bn.titleUrl = "/program?id=" + eD.program.id;
			bn.artistHtml = bq.gN('<a hidefocus="true" href="/radio?id={0}" title="{1}">{1}</a>', eD.program.radio.id, bm.eZ(eD.program.radio.name))
		} else {
			bn.type = "song";
			bn.name = eD.name;
			bn.mvid = eD.mvid;
			if (!eD.album) {
				eD.album = {}

			}
			if (eD.album.pic && eD.album.picUrl) {
				bn.cover = eD.album.picUrl
			}
			bn.titleUrl = "/song?id=" + eD.id;
			bn.artistHtml = bq.ls(eD.artists)
		}
		return bn
	};
	bb.bNv = function (bc) {
		var bl = bc.data;
		switch (bc.action) {
		case "play":
			Fp.bV(this.ju, "pas");
			Fp.bI(this.ju, "action", "pause");
			bH.fN("playerid", this.bOL);
			var eD = this.qT.sp();
			if (eD) {
				document.title = decodeURIComponent("%E2%96%B6%20") + eD.name
			}
			break;
		case "pause":
			Fp.bR(this.ju, "pas");
			Fp.bI(this.ju, "action", "play");
			document.title = this.An() || "网易云音乐 听见好时光";
			break;
		case "timeupdate":
			if (this.bOO)
				return;
			var bAr = bH.fN("playerid");
			if (bAr && bAr !== this.bOL) {
				this.cz.hY()
			}
			this.bON.fJ(bl.time / bl.duration);
			this.bOh(bl);
			break;
		case "progress":
			Fp.bY(this.bOM, "width", bl.loaded * 100 / bl.total + "%");
			break;
		case "error":
			this.bOi("播放失败");
			Fp.bR(this.bNP, "z-load");
			break;
		case "playing":
			Fp.bR(this.bNP, "z-load");
			break;
		case "waiting":
			Fp.bV(this.bNP, "z-load");
			break
		}
	};
	bb.bOi = function () {
		var vo = 0;
		return function (hA) {
			if (hA) {
				this.Ia.innerText = hA;
				Fp.bY(this.Ia, "display", "");
				clearTimeout(vo);
				vo = setTimeout(function () {
						Fp.bY(this.Ia, "display", "none")
					}
						.bh(this), 2e3);
				this.bEl(true);
				this.bNO(2e3)
			}
		}
	}
	();
	bb.bfp = function (sN, bc) {
		if (!this.vd) {
			if (sN) {
				if (!bq.Ki(this.sl, bc.relatedTarget || bc.fromElement)) {
					this.bEl(true)
				}
			} else {
				if (!bq.Ki(this.sl, bc.relatedTarget || bc.toElement)) {
					this.bNO()
				}
			}
		}
	};
	bb.bNO = function (uw) {
		clearTimeout(this.bOS);
		this.bOS = setTimeout(function () {
				if (!this.bNw.lock) {
					this.bEl(false)
				}
			}
				.bh(this), uw || 500)
	};
	bb.bEl = function () {
		var sF,
		qb = true;
		return function (so) {
			clearTimeout(this.bOS);
			if (sF || so == qb)
				return;
			qb = so;
			sF = bK.wi.bL({
					to : {
						offset : so ? -53 : -7
					},
					from : {
						offset : so ? -7 : -53
					},
					onstop : function () {
						sF.ch();
						sF = null
					},
					onupdate : function (bc) {
						Fp.bY(this.sl, "top", bc.offset + "px")
					}
					.bh(this),
					duration : so ? 100 : 350
				});
			sF.gJ()
		}
	}
	();
	bb.bOK = function (bc) {
		if (bc.keyCode == 80 && !bq.bcM()) {
			this.cz.pn() ? this.cz.hY() : this.cz.gJ()
		} else if (bc.ctrlKey) {
			switch (bc.keyCode) {
			case 37:
				this.qT.wQ();
				break;
			case 39:
				this.qT.kW();
				break
			}
		}
	};
	bb.pL = function () {
		Fp.bY(this.bMO, "visibility", "hidden");
		this.vd && this.vd.ch()
	};
	bb.An = function () {
		var fe = Fp.bw("g_iframe");
		if (fe) {
			return fe.contentWindow.document.title
		} else {
			return ""
		}
	};
	bb.bO = function () {
		Fp.bY(this.sl, "visibility", "visible")
	};
	bb.cj = function () {
		this.cz.hY();
		Fp.bY(this.sl, "visibility", "hidden")
	}
})();
(function () {
	var be = NEJ.P,
	eL = window,
	co = NEJ.F,
	bH = be("nej.j"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bb,
	bJ;
	bp.gN({
		"netease-login" : {
			url : "/api/login/",
			onload : "onlogin",
			onerror : "onloginerror"
		},
		"captcha-send" : {
			url : "/api/sms/captcha/sent/",
			onload : "onsendcaptcha",
			onerror : "onsendcaptchaerror",
			format : function (bn, bf) {
				bn.mobile = bf.data.cellphone;
				return bn
			}
		},
		"captcha-verify" : {
			url : "/api/sms/captcha/verify/",
			onload : "onverifycaptcha",
			onerror : "onverifycaptchaerror",
			format : function (bn, bf) {
				bn.mobile = bf.data.cellphone;
				bn.captcha = bf.data.captcha;
				return bn
			}
		},
		"mobile-login" : {
			url : "/api/login/cellphone/",
			onload : "onmobilelogin",
			onerror : "onmobileloginerror"
		},
		"mobile-check" : {
			url : "/api/cellphone/existence/check/",
			onload : "onmobilecheck",
			onerror : "onmobilecheckerror",
			format : function (bn, bf) {
				bn.mobile = bf.data.cellphone;
				bn.captcha = bf.data.captcha;
				return bn
			}
		},
		"mobile-regist" : {
			url : "/api/register/cellphone",
			onload : "onmobileregist",
			onerror : "onmobileregisterror"
		},
		"mobile-updatepwd" : {
			url : "/api/login/password/update",
			onload : "onmobileupdatepwd",
			onerror : "onmobileupdatepwderror",
			format : function (bn, bf) {
				bn.mobile = bf.data.phone;
				bn.password = bf.data.password;
				return bn
			}
		},
		"mobile-resetpwd" : {
			url : "/api/login/password/reset",
			onload : "onmobileresetpwd",
			onerror : "onmobileresetpwderror",
			format : function (bn, bf) {
				bn.mobile = bf.data.phone;
				bn.password = bf.data.password;
				return bn
			}
		},
		"nickname-set" : {
			url : "/api/activate/initProfile",
			onload : "onactive",
			onerror : "onactiveerror"
		},
		logout : {
			url : "/logout",
			onload : "onlogout"
		},
		"logout-quiet" : {
			url : "/logout"
		},
		"oauth-nickname" : {
			url : "/oauth/init_profile",
			onload : "onactive",
			onerror : "onactiveerror"
		},
		"mobile-nickname" : {
			url : "/oauth/register/cellphone",
			onload : "onmobileregist",
			onerror : "onmobileregisterror"
		},
		"mobile-bind" : {
			url : "/api/user/bindingCellphone",
			onload : "onmobilebind",
			onerror : "onmobilebinderror",
			format : function (bn, bf) {
				bn.mobile = bf.data.phone;
				bn.captcha = bf.data.captcha;
				return bn
			}
		},
		"mobile-relogin" : {
			url : "/api/mainAccount/set",
			onload : "onmobilelogin",
			onerror : "onmobileloginerror"
		},
		"mainaccount-replace" : {
			url : "/api/user/replaceMainAccount",
			onload : "onmainaccountreplace",
			onerror : "onmainaccountreplaceerror"
		},
		"binding-delete" : {
			url : "/api/user/deleteBinding",
			onload : "ondeletebinding",
			onerror : "ondeletebindingerror"
		},
		"mobile-change" : {
			url : "/api/v1/user/replaceCellphone",
			onload : "onchangemobile",
			onerror : "onchangemobileerror"
		},
		"urs-bind" : {
			url : "/api/user/bindingUrs",
			onload : "onbindurs",
			onerror : "onbindurserror"
		}
	});
	bp.mj = NEJ.C();
	bb = bp.mj.bN(bp.gY);
	bb.bcU = function (bf) {
		bf = bf || {};
		this.dg(bp.bw("logout"), bf)
	};
	bb.bjZ = function (bf) {
		bf = bf || {};
		this.dg(bp.bw("logout-quiet"), bf)
	};
	bb.bkb = function (bf) {
		this.dg(bp.bw("netease-login"), bf)
	};
	bb.Io = function (bf) {
		this.dg(bp.bw("captcha-send"), bf)
	};
	bb.NN = function (bf) {
		this.dg(bp.bw("captcha-verify"), bf)
	};
	bb.bcP = function (bf) {
		this.dg(bp.bw("mobile-login"), bf)
	};
	bb.bkj = function (bf) {
		this.dg(bp.bw("mobile-check"), bf)
	};
	bb.bkk = function (bf) {
		this.dg(bp.bw("mobile-regist"), bf)
	};
	bb.bcG = function (bf) {
		this.dg(bp.bw("mobile-resetpwd"), bf)
	};
	bb.bkv = function (bf) {
		this.dg(bp.bw("mobile-updatepwd"), bf)
	};
	bb.bcz = function (bf) {
		this.dg(bp.bw("nickname-set"), bf)
	};
	bb.bkA = function (bf) {
		this.dg(bp.bw("oauth-nickname"), bf)
	};
	bb.bkB = function (bf) {
		this.dg(bp.bw("mobile-nickname"), bf)
	};
	bb.bzs = function (bf) {
		this.dg(bp.bw("mobile-bind"), bf)
	};
	bb.bkG = function (bf) {
		this.dg(bp.bw("mobile-relogin"), bf)
	};
	bb.bkH = function (bf) {
		this.dg(bp.bw("mainaccount-replace"), bf)
	};
	bb.buC = function (bf) {
		this.dg(bp.bw("binding-delete"), bf)
	};
	bb.bQw = function (bf) {
		this.dg(bp.bw("mobile-change"), bf)
	};
	bb.bQv = function (bf) {
		this.dg(bp.bw("urs-bind"), bf)
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	cQ = be("nej.ui"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bEZ = be("nm.w"),
	bb;
	bEZ.Sg = NEJ.C();
	bb = bEZ.Sg.bN(cQ.ic);
	bb.cw = function (bf) {
		this.cA(bf);
		if (bf.txt) {
			this.bB.innerHTML = Fp.ku(bf.txt)
		} else if (bf.html) {
			this.bB.innerHTML = bf.html
		}
		this.Js = bf.captchaId;
		var bk = Fp.bP(this.bB, "j-flag");
		this.iB = bk[0];
		this.LF = bk[1];
		this.dA([[this.LF, "click", this.bsV.bh(this)], [this.iB, "keypress", this.bQu.bh(this)]]);
		this.LF.src = "/captcha?id=" + this.Js
	};
	bb.cX = function () {
		this.dc()
	};
	bb.bsV = function () {
		bH.cR("/api/image/captcha/verify/hf", {
			type : "json",
			query : {
				id : this.Js,
				captcha : 0
			},
			onload : function (bn) {
				if (bn.code == 200) {
					this.Js = bn.captchaId;
					this.LF.src = "/captcha?id=" + this.Js
				}
			}
			.bh(this)
		})
	};
	bb.bQu = function (bc) {
		if (bc.keyCode == 13)
			this.bG("onaction", bc)
	};
	bb.bsW = function () {
		var bn = {},
		dU = this.iB.value;
		if (!dU) {
			bn.message = "请输入验证码"
		} else {
			bH.cR("/api/image/captcha/verify/hf", {
				type : "json",
				sync : true,
				query : {
					id : this.Js,
					captcha : dU
				},
				onload : cbVerify.bh(this),
				onerror : cbVerify.bh(this)
			})
		}
		return bn;
		function cbVerify(bc) {
			if (bc.code == 200) {
				if (bc.result) {
					bn.success = true
				} else {
					bn.message = "验证码错误";
					if (bc.captchaId) {
						this.Js = bc.captchaId;
						this.LF.src = "/captcha?id=" + this.Js
					}
				}
			} else {
				bn.message = "验证出错"
			}
		}
	};
	bb.fo = function () {
		return this.iB.value
	};
	bb.yf = function () {
		return this.Js
	};
	bb.bV = function (but) {
		Fp.bV(this.iB, but)
	};
	bb.bR = function (but) {
		Fp.bR(this.iB, but)
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
	bo.Ug = NEJ.C();
	bb = bo.Ug.bN(bo.eH);
	bJ = bo.Ug.du;
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.iB = bk[0];
		this.eN = bk[1];
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.bLv = function () {
		this.dn = "m-captcha-layer"
	};
	bb.cw = function (bf) {
		bf.clazz = "m-layer-captcha";
		bf.parent = bf.parent || document.body;
		bf.title = "输入验证码";
		bf.draggable = !0;
		bf.destroyable = true;
		bf.mask = true;
		this.cA(bf);
		this.bJi = bEZ.Sg.bL({
				parent : this.iB,
				html : '<input class="u-txt txt f-fl j-flag"/><img class="captcha f-fl j-flag" src=""/>',
				captchaId : bf.captchaId
			})
	};
	bb.cX = function () {
		this.bG("ondestroy");
		this.dc();
		if (this.bJi) {
			this.bJi.ch();
			delete this.bJi
		}
	};
	bb.gI = function (bc) {
		var bid = bj.cf(bc, "d:action");
		switch (Fp.bI(bid, "action")) {
		case "ok":
			var dD = this.bJi.bsW();
			if (!dD.success) {
				this.eN.innerHTML = '<i class="u-icn u-icn-25"></i>' + dD.message;
				Fp.bR(this.eN, "f-hide")
			} else {
				Fp.bV(this.eN, "f-hide");
				this.cj()
			}
			break;
		case "cc":
			this.cj();
			break
		}
	};
	bq.bFo = function (bf) {
		bo.Ug.bL(bf).bO()
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bH = be("nej.j"),
	bZ = be("nej.o"),
	bm = be("nej.u"),
	bj = be("nej.v"),
	eQ = be("nej.ui"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.Ww = NEJ.C();
	bb = bo.Ww.bN(bo.eH, !0);
	bb.dv = function () {
		this.dF()
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.Nb = bk[0];
		bj.bs(bk[1], "click", this.Nd.bh(this))
	};
	bb.bLv = function () {
		this.dn = "m-layer-tip"
	};
	bb.cw = function (bf) {
		bf.parent = bf.parent || document.body;
		this.cA(bf);
		this.Nb.innerHTML = bf.mesg || ""
	};
	bb.cX = function () {
		this.dc()
	};
	bb.Nd = function (bc) {
		this.bG("onnotice");
		this.cj()
	};
	bo.Hk = function (bf) {
		if (this.qe) {
			this.qe.ch();
			delete this.qe
		}
		this.qe = bo.Ww.bL(bf);
		this.qe.bO()
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bEZ = be("nm.w"),
	bb;
	bEZ.WZ = NEJ.C();
	bb = bEZ.WZ.bN(bK.eW);
	bb.dv = function () {
		this.dF()
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.iB = bf.input;
		this.Pq = bf.img;
		this.dA([[bf.img, "click", this.Ny.bh(this)]]);
		this.Ny()
	};
	bb.cX = function () {
		this.dc()
	};
	bb.bsV = function () {
		this.Ny()
	};
	bb.bsW = function (jn, bsX) {
		bH.cR("/api/image/captcha/verify", {
			type : "json",
			sync : !!bsX,
			method : "get",
			timeout : 8e3,
			query : {
				id : this.bsY,
				captcha : this.iB.value
			},
			onload : this.bsZ.bh(this, jn)
		})
	};
	bb.Ny = function () {
		bH.cR("/api/image/captcha/get", {
			type : "json",
			method : "get",
			onload : this.bta.bh(this)
		})
	};
	bb.bta = function (bc) {
		if (bc.code == 200) {
			this.bsY = bc.captchaId;
			this.Pq.src = "/captcha?id=" + bc.captchaId
		}
	};
	bb.bsZ = function (jn, bc) {
		if (bc.code == 200 && bc.result) {
			this.bG("onverified", {
				ext : jn,
				result : true,
				captchaId : this.bsY,
				captcha : this.iB.value
			})
		} else {
			this.bG("onverified", {
				ext : jn,
				result : false
			});
			this.bsV()
		}
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bq = be("nm.x"),
	bEZ = be("nm.w"),
	bb,
	bJ;
	bo.nE = NEJ.C();
	bb = bo.nE.bN(bo.eH);
	bJ = bo.nE.du;
	bb.cw = function (bf) {
		this.cA(bf);
		this.BU = bf;
		this.bJi = bEZ.WZ.bL({
				input : this.bpx,
				img : this.bHC,
				onverified : this.bsZ.bh(this)
			})
	};
	bb.cX = function () {
		this.dc();
		if (this.bJi) {
			this.bJi.ch();
			delete this.bJi
		}
	};
	bb.bLv = function () {
		this.dn = "ntp-setnickname"
	};
	bb.bFa = function () {
		this.bLu();
		this.cZ = Fp.bP(this.bB, "js-input")[0];
		Fp.fm(this.cZ, "holder");
		bj.bs(this.cZ, "focus", this.ey.bh(this));
		bj.bs(this.cZ, "keypress", this.jH.bh(this));
		bj.bs(this.cZ, "keyup", this.bup.bh(this));
		var buL = Fp.bP(this.bB, "js-vcode");
		this.bpx = buL[0];
		this.bHC = buL[1];
		bj.bs(this.bpx, "focus", this.ey.bh(this));
		bj.bs(this.bpx, "keypress", this.jH.bh(this));
		this.eN = Fp.bP(this.bB, "u-err")[0];
		this.eC = Fp.bP(this.bB, "js-primary")[0];
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.bO = function () {
		bJ.bO.apply(this, arguments);
		this.cP(false);
		this.cI(false);
		this.cZ.value = "";
		this.bpx.value = ""
	};
	bb.ey = function () {
		Fp.bR(this.cZ, "u-txt-err");
		Fp.bR(this.bpx, "u-txt-err")
	};
	bb.jH = function (bc) {
		if (bc.keyCode == 13)
			this.RB()
	};
	bb.gI = function (bc) {
		var bD = bj.cf(bc, "d:action");
		if (!bD)
			return;
		var cv = Fp.bI(bD, "action");
		switch (cv) {
		case "ok":
			this.RB(bc);
			break
		}
	};
	bb.RB = function (bc) {
		bj.cG(bc);
		if (this.cI())
			return;
		if (!(this.sM = this.yq()))
			return;
		if (!this.bpx.value.trim())
			return this.cP("请输入验证码", "captcha");
		this.bJi.bsW()
	};
	bb.bsZ = function (bc) {
		if (bc.result) {
			this.cI(true);
			this.cP(false);
			if (this.BU.onok) {
				this.BU.onok({
					nickname : this.sM,
					captchaId : bc.captchaId,
					captcha : bc.captcha
				})
			}
		} else {
			this.cP("验证码错误", "captcha")
		}
	};
	bb.yq = function () {
		var iC = this.cZ.value.trim(),
		oM = iC.replace(/[^\x00-\xff]/g, "**");
		if (!iC)
			return this.cP("请输入昵称", "nickname");
		if (oM.length < 4 || oM.length > 30)
			return this.cP("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		if (!/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/.test(iC))
			return this.cP("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		return iC
	};
	bb.bup = function (bc) {
		var iC = this.cZ.value.trim(),
		oM = iC.replace(/[^\x00-\xff]/g, "**");
		if (this.brp == iC)
			return;
		this.brp = iC;
		if (bc.keyCode == 13)
			return;
		if (/[^\u4e00-\u9fa5\w-]/.test(iC))
			return this.cP("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		if (iC && oM.length > 30)
			return this.cP("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		this.cP(false)
	};
	bb.yR = function () {
		if (!this.bJi)
			return true;
		var dD = this.bJi.bsW();
		if (dD.success)
			return true;
		this.cP(dD.message, "captcha");
		return false
	};
	bb.cP = function (cD, UF) {
		this.bxe(this.eN, cD);
		Fp.bR(this.cZ, "u-txt-err");
		Fp.bR(this.bpx, "u-txt-err");
		if (UF == "nickname") {
			Fp.bV(this.cZ, "u-txt-err")
		} else if (UF == "captcha") {
			Fp.bV(this.bpx, "u-txt-err")
		}
	};
	bb.cI = function (cN) {
		return this.dG(this.eC, cN, "开启云音乐", "设置中...")
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bq = be("nm.x"),
	bb,
	bJ;
	bo.Qq = NEJ.C();
	bb = bo.Qq.bN(bo.eH);
	bJ = bo.Qq.du;
	bb.cw = function (bf) {
		this.cA(bf);
		this.bA = bp.mj.bL();
		this.bA.bs("onsendcaptcha", this.rf.bh(this));
		this.bA.bs("onsendcaptchaerror", this.Ya.bh(this));
		this.bA.bs("onverifycaptcha", this.yK.bh(this));
		this.bA.bs("onverifycaptchaerror", this.bQt.bh(this));
		if (this.dQ)
			this.dQ = clearInterval(this.dQ)
	};
	bb.cX = function () {
		this.dc();
		this.bA.ch()
	};
	bb.bLv = function () {
		this.dn = "ntp-verifycaptcha"
	};
	bb.bFa = function () {
		this.bLu();
		this.dI = Fp.bP(this.bB, "js-tip")[0];
		var bAi = Fp.bP(this.bB, "js-mobwrap");
		this.bvl = bAi[0];
		this.bxV = bAi[1];
		this.kd = Fp.bP(this.bB, "js-mob")[0];
		this.baV = Fp.bP(this.bB, "js-lbl")[0];
		var gD = Fp.bP(this.bB, "js-txt");
		this.Fu = gD[0];
		this.Oa = gD[1];
		Fp.fm(this.Fu, "holder");
		Fp.fm(this.Oa, "holder");
		bj.bs(this.Fu, "focus", this.bnX.bh(this));
		bj.bs(this.Fu, "keypress", this.baQ.bh(this));
		bj.bs(this.Fu, "keyup", this.bde.bh(this));
		bj.bs(this.Oa, "focus", this.bQs.bh(this));
		bj.bs(this.Oa, "keypress", this.bQr.bh(this));
		this.yM = Fp.bP(this.bB, "js-cd")[0];
		this.kG = Fp.bP(this.bB, "js-send")[0];
		this.eN = Fp.bP(this.bB, "u-err")[0];
		this.hR = Fp.bP(this.bB, "js-next")[0];
		this.XY = Fp.bP(this.bB, "js-btmbar")[0];
		this.bqO = Fp.bP(this.bB, "js-back")[0];
		this.bzS = Fp.bP(this.bB, "js-skip")[0];
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.bnX = function () {
		Fp.bR(this.Fu, "u-txt-err")
	};
	bb.bQs = function () {
		Fp.bR(this.Oa, "u-txt-err")
	};
	bb.baQ = function (bc) {
		if (bc.keyCode == 0) {
			if (bc.charCode < 48 || bc.charCode > 57)
				bj.cG(bc)
		} else if (bc.charCode == 0) {
			if (bc.keyCode == 13)
				return this.baP()
		} else {
			if (bc.keyCode == 13)
				return this.baP();
			if (bc.keyCode < 48 || bc.keyCode > 57)
				bj.cG(bc)
		}
	};
	bb.bde = function (bc) {
		if (/[^\d]/.test(this.Fu.value))
			this.Fu.value = this.Fu.value.replace(/[^\d]/g, "")
	};
	bb.bQr = function (bc) {
		if (bc.keyCode == 13)
			this.baP()
	};
	bb.bO = function (bf) {
		bJ.bO.apply(this, arguments);
		this.BU = bf;
		this.cP(false);
		this.cI(false);
		if (bf.tip) {
			this.dI.innerHTML = bf.tip;
			Fp.bR(this.dI, "f-hide")
		} else {
			Fp.bV(this.dI, "f-hide")
		}
		this.hS = bf.mobile || "";
		if (this.hS) {
			this.kd.innerText = bq.bEp(this.hS) || "";
			Fp.bV(this.bxV, "f-hide");
			Fp.bR(this.bvl, "f-hide");
			this.yl()
		} else {
			this.baV.innerHTML = bf.mobileLabel || "手机号：";
			this.kG.innerHTML = "<i>获取验证码</i>";
			Fp.bV(this.bvl, "f-hide");
			Fp.bR(this.bxV, "f-hide");
			Fp.bV(this.yM, "f-hide");
			Fp.bR(this.kG, "f-hide")
		}
		this.Fu.value = "";
		this.Oa.value = "";
		bf.okbutton = bf.okbutton || "下一步";
		this.hR.innerHTML = "<i>" + bf.okbutton + "</i>";
		Fp.bV(this.XY, "f-hide");
		Fp.bV(this.bqO, "f-hide");
		Fp.bV(this.bzS, "f-hide");
		if (bf.backbutton) {
			this.bqO.innerHTML = bf.backbutton || "";
			Fp.bR(this.bqO, "f-hide");
			Fp.bR(this.XY, "f-hide")
		}
		if (bf.canskip) {
			Fp.bR(this.bzS, "f-hide");
			Fp.bR(this.XY, "f-hide")
		}
	};
	bb.gI = function (bc) {
		var bD = bj.cf(bc, "d:action");
		if (!bD)
			return;
		var cv = Fp.bI(bD, "action");
		switch (cv) {
		case "next":
			this.baP(bc);
			break;
		case "send":
			this.kj(bc);
			break;
		case "back":
			this.rX(bc);
			break;
		case "skip":
			this.bgT(bc);
			break
		}
	};
	bb.rX = function (bc) {
		bj.cG(bc);
		this.cj();
		if (this.BU.onback)
			return this.BU.onback()
	};
	bb.bgT = function (bc) {
		bj.cG(bc);
		this.cj();
		if (this.BU.onskip)
			return this.BU.onskip()
	};
	bb.kj = function (bc) {
		bj.cG(bc);
		if (!!this.dQ)
			return;
		var eF = this.qa();
		if (!eF)
			return;
		this.bA.Io({
			data : {
				cellphone : eF
			}
		})
	};
	bb.rf = function (bn) {
		this.yl()
	};
	bb.Ya = function (bn) {
		this.cI(false);
		this.cP("验证码发送失败")
	};
	bb.baP = function (bc) {
		bj.cG(bc);
		if (this.cI())
			return;
		var CD = this.DR();
		if (!CD)
			return;
		this.cI(true);
		this.bA.NN({
			data : {
				cellphone : CD.mobile,
				captcha : CD.captcha
			}
		})
	};
	bb.yK = function (bn) {
		if (this.BU.onok)
			this.BU.onok(bn)
	};
	bb.bQt = function (bn) {
		this.cI(false);
		if (bn.code == 503) {
			this.cP("验证码错误", "captcha")
		} else if (this.BU.onerror) {
			this.BU.onerror(bn)
		}
	};
	bb.qa = function () {
		var eF = this.hS || this.Fu.value.trim();
		if (!eF)
			return this.cP("请输入手机号", "mobile");
		if (!bq.rT(eF))
			return this.cP("请输入11位数字的手机号", "mobile");
		return eF
	};
	bb.DR = function () {
		var eF = this.hS || this.Fu.value.trim(),
		ki = this.Oa.value.trim();
		if (!eF)
			return this.cP("请输入手机号", "mobile");
		if (!ki)
			return this.cP("请输入验证码", "captcha");
		if (!bq.rT(eF))
			return this.cP("请输入11位数字的手机号", "mobile");
		this.cP(false);
		return {
			mobile : eF,
			captcha : ki
		}
	};
	bb.yl = function () {
		var cr;
		var rH = function () {
			cr--;
			this.yM.innerText = " 00:" + (cr >= 10 ? cr : "0" + cr) + " ";
			if (cr == 0) {
				this.dQ = clearInterval(this.dQ);
				this.kG.innerHTML = "<i>重新发送</i>";
				Fp.bV(this.yM, "f-hide");
				Fp.bR(this.kG, "f-hide")
			}
		};
		return function () {
			cr = 60;
			this.dQ = clearInterval(this.dQ);
			this.dQ = setInterval(rH.bh(this), 1e3);
			rH.call(this);
			Fp.bV(this.kG, "f-hide");
			Fp.bR(this.yM, "f-hide")
		}
	}
	();
	bb.cP = function (cD, UF) {
		this.bxe(this.eN, cD);
		Fp.bR(this.Fu, "u-txt-err");
		Fp.bR(this.Oa, "u-txt-err");
		if (UF == "mobile") {
			Fp.bV(this.Fu, "u-txt-err")
		} else if (UF == "captcha") {
			Fp.bV(this.Oa, "u-txt-err")
		}
	};
	bb.cI = function (cN) {
		return this.dG(this.hR, cN, this.BU.okbutton, "验证中...")
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	ib = be("nej.ut"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.QZ = NEJ.C();
	bb = bo.QZ.bN(ib.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.BU = bf;
		this.Ho = bf.user;
		this.bA = bp.mj.bL();
		this.bA.bs("onmobilebind", this.bgR.bh(this));
		this.bA.bs("onmobilebinderror", this.bgQ.bh(this));
		this.bA.bs("onactive", this.PP.bh(this));
		this.bA.bs("onactiveerror", this.bgH.bh(this));
		if (bf.requiremobile && !this.bQq(this.Ho)) {
			this.BX = bo.Qq.bO({
					title : "绑定手机号",
					onok : this.bgF.bh(this),
					canskip : true,
					onskip : this.bfU.bh(this)
				})
		} else {
			this.bfU()
		}
	};
	bb.cX = function () {
		this.dc();
		this.bA.ch();
		if (this.BX)
			this.BX.ch();
		if (this.Dl)
			this.Dl.ch()
	};
	bb.bgF = function (bd) {
		this.hS = bd.mobile;
		this.bfv = bd.captcha;
		this.bA.bzs({
			data : {
				phone : this.hS,
				captcha : this.bfv
			}
		})
	};
	bb.bfU = function () {
		if (this.Dl)
			this.Dl.ch();
		this.Dl = bo.nE.bO({
				title : "设置昵称",
				onok : this.bQp.bh(this)
			})
	};
	bb.bgR = function () {
		this.BX.cj();
		this.bfU()
	};
	bb.bgQ = function (bd) {
		if (bd.code == 506) {
			this.BX.cI(false);
			this.BX.cP(bd.message, "mobile")
		} else {
			this.BX.cj();
			this.bfU()
		}
	};
	bb.bQp = function (bd) {
		this.bA.bcz({
			data : {
				nickname : bd.nickname,
				captchaId : bd.captchaId,
				captcha : bd.captcha
			}
		})
	};
	bb.PP = function (bd) {
		this.Dl.cj();
		this.Ho.profile = bd.profile;
		bj.bG(window, "login", {
			user : this.Ho
		})
	};
	bb.bgH = function (bd) {
		this.Dl.cI(false);
		if (bd.code == 505)
			return this.Dl.cP("该昵称已被占用", "nickname");
		if (bd.code == 407)
			return this.Dl.cP("该昵称包含关键词", "nickname");
		bo.cq.bO({
			tip : bd.message || "登录失败，请重试",
			type : 2
		});
		this.Dl.cj()
	};
	bb.bQq = function (gr) {
		var lH = gr.bindings || [];
		return bm.dY(lH, function (bt) {
			return bt.type == 1
		}) >= 0
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.vG = NEJ.C();
	bb = bo.vG.bN(bo.eH);
	bJ = bo.vG.du;
	bb.bLv = function () {
		this.dn = "ntp-reg-mobile"
	};
	bb.bFa = function () {
		this.bLu();
		var gE = Fp.bP(this.bB, "u-txt");
		this.kd = gE[0];
		this.es = gE[1];
		Fp.fm(this.kd, "holder");
		Fp.fm(this.es, "holder");
		bj.bs(this.kd, "focus", this.bnX.bh(this));
		bj.bs(this.kd, "keypress", this.baQ.bh(this));
		bj.bs(this.kd, "keyup", this.bde.bh(this));
		bj.bs(this.es, "focus", this.Rs.bh(this));
		bj.bs(this.es, "keypress", this.Rt.bh(this));
		this.eN = Fp.bP(this.bB, "u-err")[0];
		this.eC = Fp.bP(this.bB, "u-btn2")[0];
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.bnX = function () {
		Fp.bR(this.kd, "u-txt-err")
	};
	bb.Rs = function () {
		Fp.bR(this.es, "u-txt-err")
	};
	bb.baQ = function (bc) {
		if (bc.keyCode == 0) {
			if (bc.charCode < 48 || bc.charCode > 57)
				bj.cG(bc)
		} else if (bc.charCode == 0) {
			if (bc.keyCode == 13)
				return this.Qh()
		} else {
			if (bc.keyCode == 13)
				return this.Qh();
			if (bc.keyCode < 48 || bc.keyCode > 57)
				bj.cG(bc)
		}
	};
	bb.bde = function (bc) {
		if (/[^\d]/.test(this.kd.value))
			this.kd.value = this.kd.value.replace(/[^\d]/g, "")
	};
	bb.Rt = function (bc) {
		if (bc.keyCode == 13)
			this.Qh()
	};
	bb.bO = function (bf) {
		bJ.bO.apply(this, arguments);
		this.BU = bf;
		this.cP(false);
		this.cI(false);
		this.kd.value = bf.mobile || "";
		this.es.value = ""
	};
	bb.gI = function (bc) {
		var bD = bj.cf(bc, "d:action");
		if (!bD)
			return;
		var cv = Fp.bI(bD, "action");
		switch (cv) {
		case "ok":
			this.Qh(bc);
			break;
		case "back":
			this.rX(bc);
			break
		}
	};
	bb.rX = function (bc) {
		bj.cG(bc);
		this.cj();
		bo.kA.bO({
			title : "登录"
		})
	};
	bb.Qh = function (bc) {
		bj.cG(bc);
		var CD = this.DR();
		if (!CD)
			return;
		this.cI(true);
		if (this.BU.onok)
			this.BU.onok({
				mobile : CD.mobile,
				password : CD.password
			})
	};
	bb.DR = function () {
		var eF = this.kd.value.trim();
		var eE = this.es.value;
		if (!eF)
			return this.cP("请输入手机号", "mobile");
		if (!eE)
			return this.cP("请输入登录密码", "password");
		if (!bq.rT(eF))
			return this.cP("请输入11位数字的手机号", "mobile");
		if (eE.length < 6 || eE.length > 16)
			return this.cP("请输入6-16位的密码", "password");
		return {
			mobile : eF,
			password : eE
		}
	};
	bb.cP = function (cD, UF) {
		this.bxe(this.eN, cD);
		Fp.bR(this.kd, "u-txt-err");
		Fp.bR(this.es, "u-txt-err");
		if (UF == "mobile") {
			Fp.bV(this.kd, "u-txt-err")
		} else if (UF == "password") {
			Fp.bV(this.es, "u-txt-err")
		}
	};
	bb.cI = function (cN) {
		return this.dG(this.eC, cN, "下一步", "发送中...")
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bEZ = be("nm.w"),
	bb,
	bJ;
	bo.Po = NEJ.C();
	bb = bo.Po.bN(bo.eH);
	bJ = bo.Po.du;
	bb.cw = function (bf) {
		this.cA(bf);
		this.bA = bp.mj.bL();
		this.bA.bs("onmobileregist", this.bmF.bh(this));
		this.bA.bs("onmobileregisterror", this.ek.bh(this))
	};
	bb.cX = function () {
		this.dc();
		this.bA.ch();
		if (this.bJi) {
			this.bJi.ch();
			delete this.bJi
		}
	};
	bb.bLv = function () {
		this.dn = "ntp-reg-setting"
	};
	bb.bFa = function () {
		this.bLu();
		this.dI = Fp.bP(this.bB, "js-tip")[0];
		this.ho = Fp.bP(this.bB, "js-input")[0];
		Fp.fm(this.ho, "holder");
		bj.bs(this.ho, "focus", this.bmU.bh(this));
		bj.bs(this.ho, "keypress", this.bQo.bh(this));
		bj.bs(this.ho, "keyup", this.bup.bh(this));
		this.eN = Fp.bP(this.bB, "u-err")[0];
		this.eC = Fp.bP(this.bB, "js-primary")[0];
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.bO = function (bf) {
		bJ.bO.apply(this, arguments);
		this.hS = bf.mobile || "";
		this.Hy = bf.password || "";
		this.bQn = bf.captcha || "";
		if (bf.tip) {
			this.dI.innerHTML = bf.tip
		}
		this.cP(false);
		this.cI(false);
		this.ho.value = ""
	};
	bb.gI = function (bc) {
		var bD = bj.cf(bc, "d:action");
		if (!bD)
			return;
		var cv = Fp.bI(bD, "action");
		switch (cv) {
		case "ok":
			this.ym(bc);
			break
		}
	};
	bb.bmU = function () {
		Fp.bR(this.ho, "u-txt-err")
	};
	bb.bQo = function (bc) {
		if (bc.keyCode == 13)
			this.ym()
	};
	bb.ym = function (bc) {
		bj.cG(bc);
		if (this.cI())
			return;
		var CD = this.DR();
		if (!CD)
			return;
		var bl = {
			phone : this.hS,
			password : bm.mi(this.Hy),
			nickname : CD.nickname,
			captcha : this.bQn
		};
		this.cI(true);
		this.bA.bkk({
			data : bl
		})
	};
	bb.bmF = function (bn) {
		this.cI(false);
		this.cj();
		localCache.nK("user", bn);
		bj.bG(window, "login", {
			user : bn
		})
	};
	bb.ek = function (bd) {
		this.cI(false);
		if (bd.code == 415) {
			if (this.bJi) {
				this.bJi.ch();
				this.cP("验证码错误", "captcha")
			}
			this.bJi = bEZ.Sg.bL({
					captchaId : bd.captchaId,
					txt : "txt-login-captcha",
					onaction : this.ym.bh(this)
				});
			this.eN.insertAdjacentElement("beforeBegin", this.bJi.kw());
			return
		}
		if (bd.code == 505)
			return this.cP("该昵称已被占用", "nickname");
		if (bd.code == 407)
			return this.cP("该昵称包含关键词", "nickname");
		if (bd.message) {
			this.cP(bd.message)
		} else {
			bo.cq.bO({
				tip : "注册失败，请重试",
				type : 2
			})
		}
	};
	bb.DR = function () {
		var iC = this.ho.value.trim(),
		oM = iC.replace(/[^\x00-\xff]/g, "**"),
		ki = "";
		if (!iC)
			return this.cP("请输入昵称", "nickname");
		if (this.bJi) {
			ki = this.bJi.fo();
			if (!ki)
				return this.cP("请输入验证码", "captcha")
		}
		if (oM.length < 4 || oM.length > 30)
			return this.cP("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		if (!/^[\u4e00-\u9fa5A-Za-z0-9-_]*$/.test(iC))
			return this.cP("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		return {
			nickname : iC,
			captcha : ki
		}
	};
	bb.bup = function (bc) {
		var iC = this.ho.value.trim(),
		oM = iC.replace(/[^\x00-\xff]/g, "**");
		if (this.brp == iC)
			return;
		this.brp = iC;
		if (bc.keyCode == 13)
			return;
		if (/[^\u4e00-\u9fa5\w-]/.test(iC))
			return this.cP("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		if (iC && oM.length > 30)
			return this.cP("昵称应该是4-30个字，且不包含除-和_以外的特殊字符", "nickname");
		this.cP(false)
	};
	bb.cP = function (cD, UF) {
		this.bxe(this.eN, cD);
		Fp.bR(this.ho, "u-txt-err");
		if (this.bJi)
			this.bJi.bR("u-txt-err");
		if (UF == "nickname") {
			Fp.bV(this.ho, "u-txt-err")
		} else if (UF == "captcha") {
			if (this.bJi)
				this.bJi.bV("u-txt-err")
		}
	};
	bb.cI = function (cN) {
		return this.dG(this.eC, cN, "开启云音乐", "设置中...")
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	ib = be("nej.ut"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	var MOB_CHECK = {
		MAIN : 1,
		SNS : 2,
		NETEASE : 3,
		NULL : -1
	};
	bo.bfD = NEJ.C();
	bb = bo.bfD.bN(ib.eW);
	bb.cw = function (bf) {
		bf = bf || {};
		this.cA(bf);
		this.bA = bp.mj.bL();
		this.bA.bs("onsendcaptcha", this.rf.bh(this));
		this.bA.bs("onsendcaptchaerror", this.bgC.bh(this));
		this.bA.bs("onmobilecheck", this.bnv.bh(this));
		this.bA.bs("onmobilecheckerror", this.bfg.bh(this));
		this.bA.bs("onmobileregist", this.bmF.bh(this));
		this.bA.bs("onmobileregisterror", this.bfE.bh(this));
		this.Jc = bo.vG.bO({
				title : "手机号注册",
				onok : this.bgz.bh(this)
			})
	};
	bb.cX = function () {
		this.dc();
		this.bA.ch();
		if (this.Jc)
			this.Jc.ch();
		if (this.BX)
			this.BX.ch()
	};
	bb.bgz = function (bd) {
		this.hS = bd.mobile;
		this.Hy = bd.password;
		this.bA.Io({
			data : {
				cellphone : bd.mobile
			}
		})
	};
	bb.rf = function () {
		this.Jc.cj();
		this.BX = bo.Qq.bO({
				title : "手机号注册",
				mobile : this.hS,
				okbutton : "下一步",
				onok : this.bgy.bh(this),
				backbutton : "&lt;&nbsp;&nbsp;返回登录",
				onback : this.bgx.bh(this)
			})
	};
	bb.bgC = function (bd) {
		this.Jc.cI(false);
		bo.cq.bO({
			tip : bd.message || "验证码发送失败",
			type : 2
		})
	};
	bb.bgy = function (bd) {
		this.hS = bd.mobile;
		this.bJi = bd.captcha;
		this.bA.bkj({
			data : {
				cellphone : bd.mobile,
				captcha : bd.captcha
			}
		})
	};
	bb.bnv = function (bd) {
		this.BX.cj();
		switch (bd.exist) {
		case MOB_CHECK.NULL:
			bo.Po.bO({
				title : "手机号注册",
				mobile : this.hS,
				password : this.Hy,
				captcha : this.bJi
			});
			break;
		case MOB_CHECK.MAIN:
		case MOB_CHECK.SNS:
		case MOB_CHECK.NETEASE:
			this.bAb(this.hS, this.Hy, this.bJi);
			break
		}
	};
	bb.bfg = function (bd) {
		bo.cq.bO({
			tip : bd.message || "验证码发送失败",
			type : 2
		})
	};
	bb.bmF = function (bd) {
		localCache.nK("user", bd);
		if (!bd.profile) {
			if (this.Dr)
				this.Dr.ch();
			this.Dr = bo.QZ.bL({
					user : bd,
					requiremobile : false,
					onsuccess : this.No.bh(this)
				})
		} else {
			bq.ep({
				clazz : "m-layer-w2",
				title : "手机号注册",
				message : '该手机号已与云音乐帐号 <strong class="s-fc1">' + bm.eZ(bd.profile.nickname) + "</strong> 绑定，<br/><br/>以后你可以直接用该手机号+密码登录",
				btntxt : "知道了",
				action : bj.bG.bh(bj, window, "login", {
					user : bd
				}),
				onclose : bj.bG.bh(bj, window, "login", {
					user : bd
				})
			})
		}
	};
	bb.No = function (bc) {
		bj.bG(window, "login", {
			user : bc.user
		})
	};
	bb.bfE = function (bd) {
		if (bd.code == 415) {
			bq.bFo({
				captchaId : bd.captchaId,
				ondestroy : this.bAb.bh(this, this.hS, this.Hy, this.bJi)
			})
		} else {
			bo.cq.bO({
				tip : bd.message || "注册失败，请重试",
				type : 2
			})
		}
	};
	bb.bgx = function () {
		this.BX.cj();
		bo.kA.bO({
			title : "登录"
		})
	};
	bb.bAb = function (eF, eE, ki) {
		this.bA.bkk({
			data : {
				phone : eF,
				password : bm.mi(eE),
				captcha : ki
			}
		})
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	ib = be("nej.ut"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	var MOB_CHECK = {
		MAIN : 1,
		SNS : 2,
		NETEASE : 3,
		NULL : -1
	};
	bo.bAc = NEJ.C();
	bb = bo.bAc.bN(ib.eW);
	bb.cw = function (bf) {
		bf = bf || {};
		this.cA(bf);
		this.bA = bp.mj.bL();
		this.bA.bs("onsendcaptcha", this.rf.bh(this));
		this.bA.bs("onsendcaptchaerror", this.bgC.bh(this));
		this.bA.bs("onmobilecheck", this.bnv.bh(this));
		this.bA.bs("onmobilecheckerror", this.bfg.bh(this));
		this.bA.bs("onmobileregist", this.bmF.bh(this));
		this.bA.bs("onmobileregisterror", this.bfE.bh(this));
		this.Jc = bo.vG.bO({
				title : "重设密码",
				mobile : bf.mobile || "",
				onok : this.bgz.bh(this)
			})
	};
	bb.cX = function () {
		this.dc();
		this.bA.ch();
		if (this.Jc)
			this.Jc.ch();
		if (this.BX)
			this.BX.ch()
	};
	bb.bgz = function (bd) {
		this.hS = bd.mobile;
		this.Hy = bd.password;
		this.bA.Io({
			data : {
				cellphone : bd.mobile
			}
		})
	};
	bb.rf = function () {
		this.Jc.cj();
		this.BX = bo.Qq.bO({
				title : "重设密码",
				mobile : this.hS,
				okbutton : "下一步",
				onok : this.bgy.bh(this),
				backbutton : "&lt;&nbsp;&nbsp;返回登录",
				onback : this.bgx.bh(this),
				onerror : this.bfE.bh(this)
			})
	};
	bb.bgC = function (bd) {
		this.Jc.cI(false);
		bo.cq.bO({
			tip : bd.message || "验证码发送失败",
			type : 2
		})
	};
	bb.bgy = function (bd) {
		this.hS = bd.mobile;
		this.bJi = bd.captcha;
		this.bA.bkj({
			data : {
				cellphone : bd.mobile,
				captcha : bd.captcha
			}
		})
	};
	bb.bnv = function (bd) {
		this.BX.cj();
		switch (bd.exist) {
		case MOB_CHECK.NULL:
			bo.Po.bO({
				title : "设置昵称",
				tip : "该手机号尚未注册，取一个昵称，马上开通",
				mobile : this.hS,
				password : this.Hy,
				captcha : this.bJi
			});
			break;
		case MOB_CHECK.MAIN:
		case MOB_CHECK.SNS:
		case MOB_CHECK.NETEASE:
			this.bA.bkk({
				data : {
					phone : this.hS,
					password : bm.mi(this.Hy),
					captcha : this.bJi
				}
			});
			break
		}
	};
	bb.bfg = function (bd) {
		bo.cq.bO({
			tip : bd.message || "验证码发送失败",
			type : 2
		})
	};
	bb.bgx = function () {
		this.BX.cj();
		bo.kA.bO({
			title : "登录"
		})
	};
	bb.bmF = function (bn) {
		localCache.nK("user", bn);
		if (!bn.profile) {
			if (this.Dr)
				this.Dr.ch();
			this.Dr = bo.QZ.bL({
					user : bn,
					requiremobile : false,
					onsuccess : this.No.bh(this)
				})
		} else {
			bj.bG(window, "login", {
				user : bn
			})
		}
	};
	bb.No = function (bc) {
		bj.bG(window, "login", {
			user : bc.user
		})
	};
	bb.bfE = function (bn) {
		if (bn.code == 415) {
			bq.bFo({
				captchaId : bn.captchaId,
				ondestroy : function () {
					this.bA.bkk({
						data : {
							phone : this.hS,
							password : bm.mi(this.Hy),
							captcha : this.bJi
						}
					})
				}
				.bh(this)
			})
		} else {
			bo.cq.bO({
				tip : "重设密码失败，请重试",
				type : 2
			})
		}
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bEZ = be("nm.w"),
	bb,
	bJ;
	bo.kQ = NEJ.C();
	bb = bo.kQ.bN(bo.eH);
	bJ = bo.kQ.du;
	bb.cw = function (bf) {
		this.cA(bf);
		this.bA = bp.mj.bL();
		this.bA.bs("onmobilelogin", this.iJ.bh(this));
		this.bA.bs("onmobileloginerror", this.ek.bh(this))
	};
	bb.cX = function () {
		this.dc();
		this.bA.ch();
		if (this.bJi) {
			this.bJi.ch();
			delete this.bJi
		}
		if (this.IO)
			this.IO.ch()
	};
	bb.bLv = function () {
		this.dn = "ntp-login-mobile"
	};
	bb.bFa = function () {
		this.bLu();
		var gD = Fp.bP(this.bB, "js-input");
		this.kd = gD[0];
		this.es = gD[1];
		Fp.fm(this.kd, "holder");
		Fp.fm(this.es, "holder");
		bj.bs(this.kd, "focus", this.bnX.bh(this));
		bj.bs(this.kd, "keypress", this.baQ.bh(this));
		bj.bs(this.kd, "keyup", this.bde.bh(this));
		bj.bs(this.es, "focus", this.Rs.bh(this));
		bj.bs(this.es, "keypress", this.Rt.bh(this));
		this.eN = Fp.bP(this.bB, "u-err")[0];
		this.bfi = Fp.bP(this.bB, "u-auto")[0];
		this.eC = Fp.bP(this.bB, "js-primary")[0];
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.bO = function () {
		bJ.bO.apply(this, arguments);
		this.cP(false);
		this.cI(false);
		this.kd.value = "";
		this.es.value = "";
		this.bfi.checked = true
	};
	bb.bnX = function () {
		Fp.bR(this.kd, "u-txt-err")
	};
	bb.Rs = function () {
		Fp.bR(this.es, "u-txt-err")
	};
	bb.baQ = function (bc) {
		if (bc.keyCode == 0) {
			if (bc.charCode < 48 || bc.charCode > 57)
				bj.cG(bc)
		} else if (bc.charCode == 0) {
			if (bc.keyCode == 13)
				return this.gy()
		} else {
			if (bc.keyCode == 13)
				return this.gy();
			if (bc.keyCode < 48 || bc.keyCode > 57)
				bj.cG(bc)
		}
	};
	bb.bde = function (bc) {
		if (/[^\d]/.test(this.kd.value))
			this.kd.value = this.kd.value.replace(/[^\d]/g, "")
	};
	bb.Rt = function (bc) {
		if (bc.keyCode == 13)
			this.gy()
	};
	bb.gI = function (bc) {
		var bD = bj.cf(bc, "d:action");
		if (!bD)
			return;
		var cv = Fp.bI(bD, "action");
		switch (cv) {
		case "login":
			this.gy(bc);
			break;
		case "forget":
			bj.cu(bc);
			this.cj();
			bo.bAc.bL({
				mobile : this.kd.value
			});
			break;
		case "select":
			this.bgq(bc);
			break;
		case "reg":
			this.bQm(bc);
			break
		}
	};
	bb.gy = function (bc) {
		bj.cG(bc);
		if (this.cI())
			return;
		var CD = this.DR();
		if (!CD)
			return;
		if (!this.yR())
			return;
		if (this.bJi) {
			this.bJi.ch();
			delete this.bJi
		}
		var bl = {
			phone : CD.mobile,
			password : bm.mi(CD.password),
			rememberLogin : this.bfi.checked
		};
		this.cI(true);
		this.cP(false);
		this.bA.bcP({
			data : bl
		})
	};
	bb.iJ = function (bn) {
		this.cI(false);
		this.cj();
		localCache.nK("user", bn);
		if (!bn.profile) {
			if (this.Dr)
				this.Dr.ch();
			this.Dr = bo.QZ.bL({
					user : bn,
					requiremobile : false,
					onsuccess : this.No.bh(this)
				})
		} else {
			bj.bG(window, "login", {
				user : bn
			})
		}
	};
	bb.No = function (bc) {
		bj.bG(window, "login", {
			user : bc.user
		})
	};
	bb.ek = function (bd) {
		this.cI(false);
		if (bd.code == 415) {
			if (this.bJi)
				this.bJi.ch();
			this.bJi = bEZ.Sg.bL({
					captchaId : bd.captchaId,
					txt : "txt-login-captcha",
					onaction : this.gy.bh(this)
				});
			this.eN.insertAdjacentElement("beforeBegin", this.bJi.kw());
			return
		}
		if (bd.code == 501) {
			this.cP("该手机号尚未注册", "mobile");
			return
		}
		if (bd.code == 10002 || bd.code == 502 || bd.code == 501) {
			this.cP("手机号或密码错误");
			return
		}
		if (bd.message) {
			this.cP(bd.message)
		} else {
			bo.cq.bO({
				tip : "登录失败，请重试",
				type : 2
			})
		}
	};
	bb.bgq = function (bc) {
		bj.cu(bc);
		bo.kA.bO({
			title : "登录"
		})
	};
	bb.bQm = function (bc) {
		bj.cu(bc);
		this.cj();
		if (this.IO)
			this.IO.ch();
		this.IO = bo.bfD.bL()
	};
	bb.DR = function () {
		var eF = this.kd.value.trim();
		var eE = this.es.value;
		if (!eF)
			return this.cP("请输入手机号", "mobile");
		if (!eE)
			return this.cP("请输入登录密码", "password");
		if (!bq.rT(eF))
			return this.cP("请输入11位数字的手机号", "mobile");
		return {
			mobile : eF,
			password : eE
		}
	};
	bb.yR = function () {
		if (!this.bJi)
			return true;
		var dD = this.bJi.bsW();
		if (dD.success)
			return true;
		this.cP(dD.message, "captcha");
		return false
	};
	bb.cP = function (cD, UF) {
		this.bxe(this.eN, cD);
		Fp.bR(this.kd, "u-txt-err");
		Fp.bR(this.es, "u-txt-err");
		if (this.bJi)
			this.bJi.bR("u-txt-err");
		if (UF == "mobile") {
			Fp.bV(this.kd, "u-txt-err")
		} else if (UF == "password") {
			Fp.bV(this.es, "u-txt-err")
		} else if (UF == "captcha") {
			if (this.bJi)
				this.bJi.bV("u-txt-err")
		}
	};
	bb.cI = function (cN) {
		return this.dG(this.eC, cN, "登　录", "登录中...")
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	dE = be("nej.p"),
	bv = be("nej.ut"),
	kP,
	bny;
	if (!!bv.vC)
		return;
	bv.vC = NEJ.C();
	kP = bv.vC.bN(bv.eW);
	bny = bv.vC.du;
	kP.cw = function (bf) {
		this.cA(bf);
		this.bB = Fp.bw(bf.body);
		this.eR = Fp.bw(bf.input);
		this.hQ = bf.selected || "js-selected";
		this.dw = 0;
		this.dA([[this.eR, "input", this.is.bh(this)], [this.eR, "blur", this.QO.bh(this, "blur")], [this.bB, "mouseover", this.vB.bh(this)], [this.bB, "click", this.iF.bh(this)], [document, "keydown", this.bnJ.bh(this)], [document, "keypress", this.bnM.bh(this)]]);
		if (dE.dp.release == "5.0") {
			this.dA([[this.eR, "keydown", this.baG.bh(this)], [this.eR, "keyup", this.baG.bh(this)]])
		}
	};
	kP.cX = function () {
		this.dc();
		this.baE();
		delete this.hQ;
		delete this.eR;
		delete this.bB;
		delete this.baD;
		delete this.QV
	};
	kP.bnP = function (bD) {
		return bD.flag != null
	};
	kP.baE = function () {
		var bnR = function (bid) {
			bm.Ec(bid, "flag")
		};
		return function () {
			bm.bLt(this.dK, bnR);
			delete this.dK;
			delete this.dw
		}
	}
	();
	kP.QY = function (bu) {
		if (this.dw === bu)
			return;
		this.dw = bu;
		Fp.bV(this.dK[this.dw], this.hQ)
	};
	kP.baA = function (bu) {
		if (this.dw !== bu)
			return;
		Fp.bR(this.dK[this.dw], this.hQ);
		delete this.dw
	};
	kP.QO = function (bDM) {
		this.Ra = setTimeout(function () {
				if (!this.dK)
					return;
				var bt = this.dK[this.dw] || this.dK[0],
				bz = Fp.bI(bt, "value") || bt.innerText;
				this.eR.value = bz;
				this.pW();
				this.QV = !0;
				this.bG("onselect", bz, {
					type : bDM
				});
				this.QV = !1
			}
				.bh(this), bDM == "blur" ? 200 : 0)
	};
	kP.is = function () {
		var bz = this.eR.value.trim();
		if (!bz) {
			this.pW()
		} else {
			if (this.QV)
				return;
			this.bG("onchange", bz)
		}
	};
	kP.vB = function (bc) {
		var bD = bj.cf(bc, this.bnP);
		if (!!bD) {
			this.baA(this.dw);
			this.QY(bD.flag)
		}
	};
	kP.iF = function () {
		if (this.Ra) {
			this.Ra = clearTimeout(this.Ra)
		}
		this.QO("click")
	};
	kP.bnJ = function (bc) {
		var eu = 0,
		dU = bc.keyCode;
		if (dU == 38)
			eu = -1;
		if (dU == 40)
			eu = 1;
		if (!eu)
			return;
		bj.cu(bc);
		var bu = Math.max(0, Math.min(this.dw + eu, this.dK.length - 1));
		if (bu === this.dw)
			return;
		this.baA(this.dw);
		this.QY(bu)
	};
	kP.bnM = function (bc) {
		var bDM = "enter";
		if (bc.keyCode == 13)
			this.QO(bDM)
	};
	kP.baG = function (bc) {
		if (bc.type == "keydown") {
			this.baD = this.eR.value
		} else if (this.baD != this.eR.value && !!this.dK) {
			this.is()
		}
	};
	kP.pW = function () {
		var bnT = function (bid, bu) {
			bid.flag = bu
		};
		return function (bk) {
			this.baE();
			if (!bk || !bk.length) {
				this.bB.style.visibility = "hidden";
				return this
			}
			this.dK = bk;
			var bu = bm.dY(this.dK, function (bid) {
					return Fp.cJ(bid, this.hQ)
				});
			this.QY(Math.max(0, bu));
			bm.bLt(this.dK, bnT);
			this.bB.style.visibility = "visible";
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
	bK = be("nej.ut"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bEZ = be("nm.w"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.pV = NEJ.C();
	bb = bo.pV.bN(bo.eH);
	bJ = bo.pV.du;
	bb.cw = function (bf) {
		this.cA(bf);
		this.bA = bp.mj.bL();
		this.bA.bs("onlogin", this.iJ.bh(this));
		this.bA.bs("onloginerror", this.ek.bh(this))
	};
	bb.cX = function () {
		this.dc();
		if (this.bJi) {
			this.bJi.ch();
			delete this.bJi
		}
	};
	bb.bLv = function () {
		this.dn = "ntp-login-netease"
	};
	bb.bFa = function () {
		this.bLu();
		var gD = Fp.bP(this.bB, "js-input");
		this.ho = gD[0];
		this.es = gD[1];
		Fp.fm(this.ho, "holder");
		Fp.fm(this.es, "holder");
		bj.bs(this.ho, "focus", this.bnW.bh(this));
		bj.bs(this.es, "focus", this.Rs.bh(this));
		bj.bs(this.es, "keypress", this.Rt.bh(this));
		this.mX = Fp.bP(this.bB, "js-suggest")[0];
		this.nP = bK.vC.bL({
				body : this.mX,
				input : this.ho,
				onchange : this.vy.bh(this),
				onselect : this.vx.bh(this)
			});
		this.eN = Fp.bP(this.bB, "u-err")[0];
		this.bfi = Fp.bP(this.bB, "u-auto")[0];
		this.eC = Fp.bP(this.bB, "js-primary")[0];
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.bO = function () {
		bJ.bO.apply(this, arguments);
		this.cP(false);
		this.cI(false);
		this.ho.value = "";
		this.es.value = "";
		this.bfi.checked = true
	};
	bb.bnW = function () {
		Fp.bR(this.ho, "u-txt-err")
	};
	bb.Rs = function () {
		Fp.bR(this.es, "u-txt-err")
	};
	bb.Rt = function (bc) {
		if (bc.keyCode == 13)
			this.gy()
	};
	bb.gI = function (bc) {
		var bD = bj.cf(bc, "d:action");
		if (!bD)
			return;
		var cv = Fp.bI(bD, "action");
		switch (cv) {
		case "login":
			this.gy(bc);
			break;
		case "suggest":
			this.bnU(bc);
			break;
		case "select":
			this.bgq(bc);
			break
		}
	};
	bb.bnU = function (bc) {
		var bid = bj.cf(bc);
		if (bid.href) {
			bj.cG(bc)
		}
	};
	bb.vy = function (bz) {
		if (!bz)
			return this.nP.pW([]);
		var hU = ["163.com", "126.com", "yeah.net", "vip.163.com", "vip.126.com", "188.com"];
		var hJ = bz.indexOf("@"),
		i,
		hl;
		if (hJ < 0) {
			for (i = 0, hl = []; i < hU.length; ++i) {
				hl.push(bz + "@" + hU[i])
			}
		} else {
			var mr = bz.substring(hJ + 1),
			ck = mr.length;
			for (i = 0, hl = []; i < hU.length; ++i) {
				if (hU[i].substr(0, ck) == mr) {
					hl.push(bz.substring(0, hJ) + "@" + hU[i])
				}
			}
		}
		this.mX.innerHTML = Fp.cV("jst-login-suggest", {
				suggests : hl
			});
		this.nP.pW(Fp.dh(this.mX))
	};
	bb.vx = function (bz) {
		this.ho.value = bz;
		this.es.focus()
	};
	bb.gy = function (bc) {
		bj.cG(bc);
		if (this.cI())
			return;
		var CD = this.DR();
		if (!CD)
			return;
		if (!this.yR())
			return;
		if (this.bJi) {
			this.bJi.ch();
			delete this.bJi
		}
		var bl = {
			username : CD.username,
			password : bm.mi(CD.password),
			rememberLogin : this.bfi.checked
		};
		this.cI(true);
		this.cP(false);
		this.bA.bkb({
			data : bl
		})
	};
	bb.iJ = function (bn) {
		this.cI(false);
		this.cj();
		localCache.nK("user", bn);
		if (!bn.profile) {
			if (this.Dr)
				this.Dr.ch();
			this.Dr = bo.QZ.bL({
					user : bn,
					requiremobile : false,
					onsuccess : this.No.bh(this)
				})
		} else {
			bj.bG(window, "login", {
				user : bn
			})
		}
	};
	bb.No = function (bc) {
		bj.bG(window, "login", {
			user : bc.user
		})
	};
	bb.ek = function (bd) {
		this.cI(false);
		if (bd.code == 415) {
			if (this.bJi)
				this.bJi.ch();
			this.bJi = bEZ.Sg.bL({
					captchaId : bd.captchaId,
					txt : "txt-login-captcha",
					onaction : this.gy.bh(this)
				});
			this.eN.insertAdjacentElement("beforeBegin", this.bJi.kw());
			return
		}
		if (bd.code == 10002 || bd.code == 502 || bd.code == 501) {
			this.cP("帐号或密码错误");
			return
		}
		if (bd.message) {
			this.cP(bd.message)
		} else {
			bo.cq.bO({
				tip : "登录失败，请重试",
				type : 2
			})
		}
	};
	bb.bgq = function (bc) {
		bj.cu(bc);
		bo.kA.bO({
			title : "登录"
		})
	};
	bb.DR = function () {
		var iV = this.ho.value.trim(),
		eE = this.es.value;
		if (!iV) {
			this.cP("请输入邮箱帐号", "username");
			return null
		}
		if (!eE) {
			this.cP("请输入登录密码", "password");
			return null
		}
		this.cP(false);
		return {
			username : iV,
			password : eE
		}
	};
	bb.cP = function (cD, UF) {
		this.bxe(this.eN, cD);
		Fp.bR(this.ho, "u-txt-err");
		Fp.bR(this.es, "u-txt-err");
		if (this.bJi)
			this.bJi.bR("u-txt-err");
		if (UF == "username") {
			Fp.bV(this.ho, "u-txt-err")
		} else if (UF == "password") {
			Fp.bV(this.es, "u-txt-err")
		} else if (UF == "captcha") {
			if (this.bJi)
				this.bJi.bV("u-txt-err")
		}
	};
	bb.cI = function (cN) {
		return this.dG(this.eC, cN, "登　录", "登录中...")
	};
	bb.yR = function () {
		if (!this.bJi)
			return true;
		var dD = this.bJi.bsW();
		if (dD.success)
			return true;
		this.cP(dD.message, "captcha");
		return false
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.kA = NEJ.C();
	bb = bo.kA.bN(bo.eH);
	bb.bLv = function () {
		this.dn = "ntp-login-nav"
	};
	bb.bFa = function () {
		this.bLu();
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.gI = function (bc) {
		var bD = bj.cf(bc, "d:action");
		if (!bD)
			return;
		var cv = Fp.bI(bD, "action"),
		bDM = Fp.bI(bD, "type");
		this.cj();
		switch (cv) {
		case "login":
			if (bDM == "mobile") {
				bj.cu(bc);
				bo.kQ.bO({
					title : "手机号登录"
				})
			} else if (bDM == "netease") {
				bo.pV.bO({
					title : "邮箱登录"
				})
			}
			break;
		case "reg":
			bj.cu(bc);
			if (this.IO)
				this.IO.ch();
			this.IO = bo.bfD.bL();
			break
		}
	};
	bo.kA.bO = bo.kA.bO.ee(function (bc) {
			bo.kQ.cj();
			bo.pV.cj()
		})
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bq = be("nm.x"),
	bb,
	bJ;
	bo.Wx = NEJ.C();
	bb = bo.Wx.bN(bo.eH);
	bJ = bo.Wx.du;
	bb.bLv = function () {
		this.dn = "ntp-setpassword"
	};
	bb.bFa = function () {
		this.bLu();
		var bgm = Fp.bP(this.bB, "js-tip");
		this.dI = bgm[0];
		this.bIj = bgm[1];
		this.bLz = bgm[2];
		this.kd = Fp.bP(this.bB, "js-mob")[0];
		this.es = Fp.bP(this.bB, "js-input")[0];
		Fp.fm(this.es, "holder");
		bj.bs(this.es, "focus", this.ey.bh(this));
		bj.bs(this.es, "keypress", this.jH.bh(this));
		this.eN = Fp.bP(this.bB, "u-err")[0];
		this.eC = Fp.bP(this.bB, "js-primary")[0];
		this.XY = Fp.bP(this.bB, "js-btmbar")[0];
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.BU = bf;
		this.cP(false);
		this.cI(false);
		if (bf.tip) {
			this.dI.innerHTML = bf.tip;
			Fp.bR(this.dI, "f-hide")
		} else {
			Fp.bV(this.dI, "f-hide")
		}
		if (bf.mobile) {
			this.kd.innerHTML = bq.bEp(bf.mobile) || "";
			Fp.bV(this.bLz, "f-hide");
			Fp.bR(this.bIj, "f-hide")
		} else {
			Fp.bV(this.bIj, "f-hide");
			Fp.bR(this.bLz, "f-hide")
		}
		this.es.value = "";
		bf.okbutton = bf.okbutton || "下一步";
		this.eC.innerHTML = "<i>" + bf.okbutton + "</i>";
		if (bf.canskip) {
			Fp.bR(this.XY, "f-hide")
		} else {
			Fp.bV(this.XY, "f-hide")
		}
	};
	bb.gI = function (bc) {
		var bD = bj.cf(bc, "d:action");
		if (!bD)
			return;
		var cv = Fp.bI(bD, "action");
		switch (cv) {
		case "ok":
			this.RB(bc);
			break;
		case "skip":
			this.bgT(bc);
			break
		}
	};
	bb.ey = function () {
		Fp.bR(this.es, "u-txt-err")
	};
	bb.jH = function (bc) {
		if (bc.keyCode == 13)
			this.RB()
	};
	bb.bgT = function (bc) {
		bj.cG(bc);
		this.cj();
		if (this.BU.onskip)
			this.BU.onskip()
	};
	bb.RB = function (bc) {
		bj.cG(bc);
		if (this.cI())
			return;
		var eE;
		if (!(eE = this.nS()))
			return;
		this.cI(true);
		if (this.BU.onok)
			this.BU.onok({
				password : eE,
				mobile : this.BU.mobile
			})
	};
	bb.nS = function () {
		var eE = this.es.value;
		if (!eE)
			return this.cP("请输入密码", "password");
		if (eE.length < 6 || eE.length > 16)
			return this.cP("请输入6-16位的密码", "password");
		if (/[^\x00-\xff]/.test(eE))
			return this.cP("密码不支持中文字符", "password");
		return eE
	};
	bb.cP = function (cD, UF) {
		this.bxe(this.eN, cD);
		Fp.bR(this.es, "u-txt-err");
		if (UF == "password") {
			Fp.bV(this.es, "u-txt-err")
		}
	};
	bb.cI = function (cN) {
		return this.dG(this.eC, cN, this.BU.okbutton, "设置中...")
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	ib = be("nej.ut"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.bLH = NEJ.C();
	bb = bo.bLH.bN(ib.eW);
	var MOB_CHECK = {
		MAIN : 1,
		SNS : 2,
		NETEASE : 3,
		NULL : -1
	};
	var ACCOUNT_TYPE = {
		MOBILE : 1,
		TWEIBO : 6
	};
	var LOGIN_ACCOUNT = [{
			type : 1,
			title : "手机",
			key : "cellphone"
		}, {
			type : 0,
			title : "网易邮箱帐号",
			key : "email"
		}, {
			type : 2,
			title : "新浪微博",
			key : "name"
		}, {
			type : 10,
			title : "微信",
			key : "nickname"
		}, {
			type : 5,
			title : "QQ",
			key : "nickname"
		}
	];
	bb.cw = function (bf) {
		this.cA(bf);
		this.BU = bf;
		this.Ho = bf.user;
		this.bA = bp.mj.bL();
		this.bA.bs("onmobilecheck", this.bnv.bh(this));
		this.bA.bs("onmobilecheckerror", this.bfg.bh(this));
		this.bA.bs("onmobilebind", this.VH.bh(this));
		this.bA.bs("onmobilebinderror", this.SF.bh(this));
		this.bA.bs("onmobileupdatepwd", this.VH.bh(this));
		this.bA.bs("onmobileupdatepwderror", this.SF.bh(this));
		this.bA.bs("onactive", this.PP.bh(this));
		this.bA.bs("onactiveerror", this.bgH.bh(this));
		var bfF = this.bQl(this.Ho);
		this.bLJ = bfF;
		this.bLK = this.bQk(this.Ho);
		if (bf.user.account.type == ACCOUNT_TYPE.MOBILE || bf.user.account.type == ACCOUNT_TYPE.TWEIBO) {
			if (!bfF) {
				this.bQj()
			} else {
				if (bfF.hasPassword) {
					this.bLL()
				} else {
					this.bLN({
						tip : '云音乐将不再支持 <strong class="s-fc1">腾讯微博</strong> 登录方式，<br/>设置登录密码，以后可以使用手机号登录',
						mobile : bfF.uid
					})
				}
			}
		} else {
			this.bLL()
		}
	};
	bb.cX = function () {
		this.dc();
		this.bA.ch();
		if (this.BX)
			this.BX.ch();
		if (this.Dl)
			this.Dl.ch();
		if (this.Db)
			this.Db.ch()
	};
	bb.bLL = function () {
		var bLs = {
			0 : "邮箱帐号",
			1 : "手机号",
			2 : "新浪微博",
			5 : "QQ",
			10 : "微信"
		},
		gr = this.Ho,
		bfK = this.bLK.type == ACCOUNT_TYPE.TWEIBO ? this.bLJ : this.bLK;
		if (!gr.profile) {
			if (this.Dr)
				this.Dr.ch();
			this.Dr = bo.QZ.bL({
					user : gr,
					requiremobile : false,
					onsuccess : this.No.bh(this)
				})
		} else {
			bq.bKQ({
				title : "提示",
				message : "云音乐即将不支持腾讯微博登录<br/>建议你后续使用以下绑定的" + (bLs[bfK.type] || "帐号") + "登录<br/><strong>" + (bfK.type == ACCOUNT_TYPE.MOBILE ? bq.bEp(bfK.uid) : bm.eZ(bfK.uid)) + "</strong>",
				btnok : "查看详情",
				btncc : "知道了",
				okstyle : "u-btn2-w1",
				ccstyle : "u-btn2-w1",
				action : function (bDM) {
					if (bDM == "ok") {
						location.hash = "/user/binding/#/list"
					} else {
						bj.bG(window, "login", {
							user : gr
						})
					}
				},
				onclose : bj.bG.bh(bj, window, "login", {
					user : gr
				})
			})
		}
	};
	bb.No = function (bc) {
		bj.bG(window, "login", {
			user : bc.user
		})
	};
	bb.bQj = function () {
		this.BX = bo.Qq.bO({
				title : "绑定手机号",
				tip : '云音乐将不再支持 <strong class="s-fc1">腾讯微博</strong> 登录方式，<br/>请绑定手机号，以免后续无法使用该帐号',
				onok : this.bQi.bh(this)
			})
	};
	bb.bQi = function (bd) {
		this.hS = bd.mobile;
		this.bfv = bd.captcha;
		this.bA.bkj({
			data : {
				cellphone : bd.mobile,
				captcha : bd.captcha
			}
		})
	};
	bb.bnv = function (bd) {
		if (bd.nickname) {
			this.BX.cI(false);
			this.BX.cP("绑定失败，该手机号已与云音乐帐号 " + bm.eZ(bd.nickname) + " 绑定", "mobile")
		} else {
			this.bLN()
		}
	};
	bb.bfg = function () {
		this.BX.cj();
		bo.cq.bO({
			tip : "登录失败，请重试",
			type : 2
		})
	};
	bb.bLN = function (de) {
		if (this.BX)
			this.BX.cj();
		de = de || {};
		this.Db = bo.Wx.bO({
				title : "设置密码",
				tip : de.tip,
				mobile : de.mobile,
				onok : this.bQh.bh(this)
			})
	};
	bb.bQh = function (bd) {
		if (this.bLJ) {
			this.bA.bkv({
				data : {
					phone : this.hS,
					password : bm.mi(bd.password),
					captcha : this.bfv
				}
			})
		} else {
			this.bA.bzs({
				data : {
					phone : this.hS,
					captcha : this.bfv,
					password : bm.mi(bd.password)
				}
			})
		}
	};
	bb.VH = function (bd) {
		this.Db.cj();
		if (this.Ho.profile || this.Ho.account.type == ACCOUNT_TYPE.MOBILE) {
			bj.bG(window, "login", {
				user : this.Ho
			})
		} else if (this.Ho.account.type == ACCOUNT_TYPE.TWEIBO) {
			this.Dl = bo.nE.bO({
					title : "设置昵称",
					onok : this.bQg.bh(this)
				})
		}
	};
	bb.SF = function (bd) {
		this.Db.cj();
		bo.cq.bO({
			tip : bd.message || "登录失败，请重试",
			type : 2
		})
	};
	bb.bQg = function (bd) {
		this.bA.bcz({
			data : {
				nickname : bd.nickname,
				captchaId : bd.captchaId,
				captcha : bd.captcha
			}
		})
	};
	bb.PP = function (bd) {
		this.Dl.cj();
		this.Ho.profile = bd.profile;
		bj.bG(window, "login", {
			user : this.Ho
		})
	};
	bb.bgH = function (bd) {
		this.Dl.cI(false);
		if (bd.code == 505)
			return this.Dl.cP("该昵称已被占用", "nickname");
		if (bd.code == 407)
			return this.Dl.cP("该昵称包含关键词", "nickname");
		this.Dl.cj();
		bo.cq.bO({
			tip : bd.message || "登录失败，请重试",
			type : 2
		})
	};
	bb.bQl = function (gr) {
		var lH = gr.bindings || [];
		var bu = bm.dY(lH, function (bt) {
				return bt.type == ACCOUNT_TYPE.MOBILE
			});
		var Du = bu >= 0 ? lH[bu] : null;
		if (!Du)
			return null;
		var lM = JSON.parse(Du.tokenJsonStr);
		Du.uid = lM.cellphone;
		Du.hasPassword = lM.hasPassword;
		return Du
	};
	bb.bQk = function (gr) {
		var lH = gr.bindings || [];
		var bu = bm.dY(lH, function (bt) {
				return bt.type == gr.account.type
			});
		var Du = bu >= 0 ? lH[bu] : null;
		if (!Du)
			return null;
		var lM = JSON.parse(Du.tokenJsonStr);
		Du.uid = lM.cellphone || lM.email || lM.name || lM.nickname || "";
		return Du
	}
})();
(function () {
	var be = NEJ.P,
	bK = be("nej.ut"),
	bj = be("nej.v"),
	bH = be("nej.j"),
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bM = be("nm.m"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	bM.bgl = NEJ.C();
	bb = bM.bgl.bN(bK.eW);
	var LOGIN_ACCOUNT = [{
			type : 1,
			title : "手机",
			icon : "mb",
			key : "cellphone",
			uidkey : "cellphone"
		}, {
			type : 10,
			title : "微信",
			icon : "wx",
			key : "nickname",
			uidkey : "unionid"
		}, {
			type : 5,
			title : "QQ",
			icon : "qq",
			key : "nickname",
			uidkey : "openid"
		}, {
			type : 2,
			title : "新浪微博",
			icon : "sn",
			key : "name",
			uidkey : "uid"
		}, {
			type : 0,
			title : "网易邮箱帐号",
			icon : "urs",
			key : "email",
			uidkey : "email"
		}
	];
	var SHARE_ACCOUNT = [{
			type : 4,
			title : "人人",
			icon : "rr",
			key : "user.name",
			uidkey : "user.id"
		}, {
			type : 3,
			title : "豆瓣",
			icon : "db",
			key : "douban_user_name",
			uidkey : "douban_user_id"
		}
	];
	var TWEIBO = {
		type : 6,
		title : "腾讯微博",
		icon : "tc",
		key : "nick",
		uidkey : "openId"
	};
	var ALL_ACCOUNT = LOGIN_ACCOUNT.concat(SHARE_ACCOUNT, TWEIBO);
	bb.dv = function (bf) {
		this.dF(bf);
		window.login = this.bht.bh(this);
		window.logout = this.bhu.bh(this);
		window.reg = this.bQf.bh(this);
		bj.bs(window, "login", this.pk.bh(this));
		window.g_cbLogin = this.iJ.bh(this);
		window.g_cbBind = this.By.bh(this);
		window.g_cbDeleteBind = this.Iw.bh(this);
		this.bhx()
	};
	bb.bhx = function () {
		var gr = {
			account : {},
			profile : {},
			bindings : []
		};
		if (typeof GUser !== "undefined") {
			gr.profile.userId = GUser.userId;
			gr.profile.nickname = GUser.nickname;
			gr.profile.avatarUrl = GUser.avatarUrl
		}
		if (typeof GBinds !== "undefined") {
			gr.bindings = GBinds
		}
		localCache.nK("user", gr);
		this.xw = bp.mj.bL();
		this.xw.bs("onlogout", this.bhz.bh(this));
		this.xw.bs("onmainaccountreplace", this.iJ.bh(this));
		if (!this.bQe(gr))
			this.bhu()
	};
	bb.bht = function (bDM) {
		bo.kA.cj();
		bo.kQ.cj();
		bo.pV.cj();
		if (typeof bDM === "undefined")
			return bo.kA.bO({
				title : "登录"
			});
		if (bDM === 0)
			return bo.kQ.bO({
				title : "手机号登录"
			});
		return bo.pV.bO({
			title : "网易邮箱帐号登录"
		})
	};
	bb.bQf = function () {
		if (this.IO)
			this.IO.ch();
		this.IO = bo.bfD.bL()
	};
	bb.pk = function (bc) {
		if (typeof GUser === "object" && bc.user && bc.user.profile) {
			var Of = bc.user.profile;
			GUser.userId = Of.userId;
			GUser.nickname = Of.nickname;
			GUser.avatarUrl = Of.avatarUrl;
			GUser.djStatus = Of.djStatus
		}
		if (this.byl("loginsuccess")) {
			this.bG("loginsuccess")
		} else {
			location.reload()
		}
	};
	bb.iJ = function (bn) {
		if (!bn || bn.code != 200)
			return;
		var gZ = JSON.stringify(bn);
		localCache.nK("user", JSON.parse(gZ));
		if (bn.loginType == 6) {
			if (this.bLO)
				this.bLO.ch();
			this.bLO = bo.bLH.bL({
					user : bn,
					onsuccess : this.pk.bh(this)
				})
		} else {
			if (bn.profile) {
				this.pk({
					user : bn
				})
			} else {
				if (this.Dr)
					this.Dr.ch();
				this.Dr = bo.QZ.bL({
						user : bn,
						requiremobile : true,
						onsuccess : this.pk.bh(this)
					})
			}
		}
	};
	bb.By = function (bd) {
		var bc = bd.code == 200 ? "snsbind" : "snsbinderror",
		fe = Fp.bw("g_iframe");
		if (bd.code == 200) {
			bH.cR("/api/point/sns", {
				type : "json",
				method : "get",
				query : {
					snsType : bd.type
				},
				onload : function (bl) {
					var hp = bd.point || bl.point;
					if (hp > 0) {
						bo.ep({
							title : "绑定成功",
							type : "success",
							mesg : '绑定成功 获得<em class="s-fc6">' + hp + "积分</em>"
						})
					} else {
						bo.cq.bO({
							tip : "绑定成功"
						})
					}
				}
				.bh(this)
			})
		} else {
			var bu = bm.dY(ALL_ACCOUNT, function (bt) {
					return bt.type == bd.type
				});
			var hm = bu >= 0 ? ALL_ACCOUNT[bu].title : "";
			if (bd.message) {
				bo.ep({
					title : "绑定" + hm,
					type : "fail",
					mesg : "绑定失败",
					mesg2 : bd.message
				})
			} else {
				bo.cq.bO({
					tip : "绑定失败，请重试",
					type : 2
				})
			}
		}
		try {
			var fZ = fe.contentWindow;
			fZ.nej.v.bG(fZ, bc, {
				result : bd
			})
		} catch (e) {}

		bj.bG(window, bc, {
			result : bd
		})
	};
	bb.Iw = function (bd) {
		var bc = bd.code == 200 ? "snsunbind" : "snsunbinderror",
		fe = Fp.bw("g_iframe");
		if (bd.code == 200) {
			bo.cq.bO({
				tip : "已解除绑定"
			})
		} else if (bd.message) {
			bo.ep({
				title : "解除绑定",
				type : "fail",
				mesg : "解绑失败",
				mesg2 : bd.message
			})
		} else {
			bo.cq.bO({
				tip : "解绑失败，请重试",
				type : 2
			})
		}
		try {
			var fZ = fe.contentWindow;
			fZ.nej.v.bG(fZ, bc, {
				result : bd
			})
		} catch (e) {}

		bj.bG(window, bc, {
			result : bd
		})
	};
	bb.bhu = function () {
		bH.fN("MUSIC_U", {
			expires : -1
		});
		this.xw.bcU();
		window.GUser = {};
		this.bG("logoutbefore")
	};
	bb.bhz = function (bn) {
		localCache.fx("user");
		localCache.fx("host-plist");
		if (typeof GUser === "object") {
			GUser.userId = 0;
			GUser.nickname = "";
			GUser.avatarUrl = ""
		}
		if (this.byl("logoutsuccess")) {
			this.bG("logoutsuccess")
		} else {
			location.reload()
		}
	};
	bb.bQe = function (gr) {
		var bgk = false;
		if (!gr.bindings || gr.bindings.length == 0)
			return true;
		bm.bLt(gr.bindings, function (bt) {
			if (bt.type == 0 || bt.type == 2 || bt.type == 5 || bt.type == 10) {
				bgk = true
			} else if (bt.type == 1) {
				var lM = JSON.parse(bt.tokenJsonStr || "{}");
				if (lM.hasPassword) {
					bgk = true
				}
			}
		});
		return bgk
	};
	bK.hh.bL({
		element : window,
		event : ["login", "snsbind", "snsbinderror", "snsunbind", "snsunbinderror"]
	});
	bM.bgl.mh()
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	cQ = be("nej.ui"),
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bEZ = be("nm.w"),
	bb;
	bEZ.bBF = NEJ.C();
	bb = bEZ.bBF.bN(cQ.ic);
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.dh(this.bB);
		this.bDQ = bk[0];
		this.eC = bk[1];
		this.dk = bk[2]
	};
	bb.bLv = function () {
		this.dn = "g-select"
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.dA([[this.eC, "click", this.bEl.bh(this)], [this.dk, "click", this.ry.bh(this)], [document, "click", this.nr.bh(this)]]);
		this.bDz = bf.filter || this.bEk;
		this.pW(bf.list)
	};
	bb.cX = function () {
		this.dc();
		delete this.dK;
		delete this.bDA;
		delete this.bDz
	};
	bb.pW = function (bk, mP) {
		if (!bk) {
			this.bDQ.innerText = "－请选择－";
			return
		}
		this.dK = bk;
		Fp.ne(this.dk, "g-select-item", {
			options : bk
		}, {
			filter : this.bDz
		});
		this.iU(mP || bk[0])
	};
	bb.zS = function () {
		return this.dK
	};
	bb.fo = function () {
		return this.bDA
	};
	bb.iU = function (bz) {
		if (this.bDA != bz) {
			this.bDA = bz;
			this.bDQ.innerText = this.bDz(bz);
			this.bG("onchange", bz)
		}
	};
	bb.bEl = function (bc) {
		bj.cu(bc);
		if (Fp.cJ(this.dk, "f-hide")) {
			if (!this.dK || !this.dK.length)
				return;
			Fp.bR(this.dk, "f-hide")
		} else {
			Fp.bV(this.dk, "f-hide")
		}
	};
	bb.nr = function () {
		Fp.bV(this.dk, "f-hide")
	};
	bb.ry = function (bc) {
		var bid = bj.cf(bc, "d:index"),
		bu = Fp.bI(bid, "index");
		if (bid) {
			this.iU(this.dK[bu])
		}
	};
	bb.bEk = function (hO) {
		return hO.name
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	bj = be("nej.v"),
	Fp = be("nej.e"),
	bH = be("nej.j"),
	bm = be("nej.u"),
	bo = be("nm.l"),
	bEZ = be("nm.w"),
	eQ = be("nej.ui"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bb,
	bJ;
	bo.bDB = NEJ.C();
	bb = bo.bDB.bN(bo.eH);
	bJ = bo.bDB.du;
	bb.bLv = function () {
		this.dn = "m-question"
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.iB = bk[1];
		this.yN = bk[2];
		this.Go = bEZ.bBF.bL({
				filter : this.bEj,
				parent : bk[0]
			});
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.cw = function (bf) {
		bf.parent = bf.parent || document.body;
		bf.title = "回答安全问题";
		bf.draggable = !0;
		bf.destroyalbe = !0;
		bf.mask = true;
		this.cA(bf);
		this.Go.pW(bf.data || [])
	};
	bb.cX = function () {
		this.dc();
		this.iB.value = ""
	};
	bb.vD = function () {
		this.cj()
	};
	bb.gI = function (bc) {
		var bid = bj.cf(bc, "d:action");
		switch (Fp.bI(bid, "action")) {
		case "back":
			this.bG("onback");
			this.cj();
			break;
		case "next":
			var bDR = this.iB.value.trim();
			if (!bDR) {
				this.bDh("请输入回答");
				return
			}
			var bl = {
				questionId : this.Go.fo().id,
				answer : bm.mi(bDR)
			};
			this.bDh(null);
			bH.cR("/store/api/security/validateAnswer", {
				type : "json",
				method : "post",
				data : bm.eK(bl),
				onload : this.bDS.bh(this),
				onerror : this.bDS.bh(this)
			});
			break
		}
	};
	bb.bEj = function (bt) {
		return bt.question
	};
	bb.bDh = function (eG) {
		if (eG) {
			this.yN.innerHTML = '<i class="u-icn u-icn-25"></i>' + eG;
			Fp.bR(this.yN, "f-hide")
		} else {
			Fp.bV(this.yN, "f-hide")
		}
	};
	bb.bDS = function (bc) {
		if (bc && bc.code == 200) {
			this.bG("onnext");
			this.cj()
		} else {
			var bLs = {
				"-3" : "回答错误，您还有" + bc.times + "次机会！"
			};
			if (bc.code == -2 || bc.code == -4) {
				bq.ep({
					clazz : "m-layer-w2",
					title : "更换手机号",
					message : "<p>帐号已被锁定，请联系客服</p>" + '<p class="f-mgt10">回答错误的次数过多，您的帐号已被锁定，将无法进行任何商城交易，<br/>' + "请联系客服解锁。</p>" + '<p class="f-mgt10">电话：0571-89853546<br/>' + "邮箱：cloudmusicservice@163.com</>",
					btntxt : "知道了"
				});
				this.cj()
			} else {
				this.bDh(bLs[bc.code] || "回答出错")
			}
		}
	};
	bq.bDK = function (bf) {
		var bDT = function (bc) {
			if (bc && bc.code == 200) {
				bf.data = bc.data;
				bo.bDB.bL(bf).bO()
			} else {
				bq.ep({
					clazz : "m-layer-w2",
					message : "请联系客服电话0571-89853546"
				})
			}
		};
		bH.cR("/store/api/security/getQuestion", {
			type : "json",
			method : "get",
			onload : bDT,
			onerror : bDT
		})
	}
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	ib = be("nej.ut"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.bfR = NEJ.C();
	bb = bo.bfR.bN(ib.eW);
	bb.cw = function (bf) {
		this.cA(bf);
		this.BU = bf;
		this.bPN = bf.mobile;
		this.bA = bp.mj.bL();
		this.bA.bs("onsendcaptcha", this.rf.bh(this));
		this.bA.bs("onsendcaptchaerror", this.Ya.bh(this));
		this.bA.bs("onchangemobile", this.bQd.bh(this));
		this.bA.bs("onchangemobileerror", this.bQc.bh(this));
		this.buI()
	};
	bb.cX = function () {
		this.dc();
		this.bA.ch();
		if (this.BX)
			this.BX.ch();
		if (this.bfO)
			this.bfO.ch()
	};
	bb.buI = function () {
		if (this.BX)
			this.BX.cj();
		if (this.bfO)
			this.bfO.ch();
		this.bfO = bq.vE({
				title : "更换手机号",
				clazz : "m-layer-find",
				txt : "txt-mobilestatus",
				onaction : function (bc) {
					if (bc.action == "valid") {
						this.bA.Io({
							data : {
								cellphone : this.bPN
							}
						})
					} else {
						bq.bDK({
							title : "更换手机号",
							onback : this.buI.bh(this),
							onnext : this.bPP.bh(this)
						})
					}
				}
				.bh(this)
			})
	};
	bb.rf = function (bd) {
		this.BX = bo.Qq.bO({
				title : "更换手机号",
				mobile : this.bPN,
				okbutton : "下一步",
				onok : this.bPP.bh(this),
				backbutton : "&lt;&nbsp;&nbsp;上一步",
				onback : this.buI.bh(this)
			})
	};
	bb.Ya = function () {
		bo.cq.bO({
			tip : "更换失败，请重试",
			type : 2
		})
	};
	bb.bPP = function () {
		this.BX = bo.Qq.bO({
				title : "更换手机号",
				mobileLabel : "新手机号：",
				okbutton : "完成",
				onok : this.bQb.bh(this)
			})
	};
	bb.bQb = function (bd) {
		this.bPQ = bd.mobile;
		this.bJi = bd.captcha;
		this.bA.bQw({
			data : {
				phone : this.bPQ,
				captcha : this.bJi
			}
		})
	};
	bb.bQd = function (bd) {
		this.BX.cj();
		bo.cq.bO({
			tip : "更换成功"
		});
		if (this.BU.onsuccess)
			this.BU.onsuccess({
				mobile : this.bPQ
			})
	};
	bb.bQc = function (bd) {
		if (bd.code == 506) {
			this.BX.cI(false);
			this.BX.cP(bd.message, "mobile")
		} else {
			this.BX.cj();
			bo.cq.bO({
				tip : "更换失败，请重试",
				type : 2
			})
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
	bK = be("nej.ut"),
	bm = be("nej.u"),
	bq = be("nm.x"),
	bo = be("nm.l"),
	blh = be("api"),
	bEZ = be("nm.w");
	var buK = null,
	bPR = null;
	var bDF = function (eF, bEf) {
		if (buK)
			buK.ch();
		buK = bo.bfR.bL({
				title : "更换手机号",
				mobile : eF,
				onsuccess : function (bd) {
					if (bEf)
						bEf({
							cellphone : bd.mobile
						})
				}
			})
	};
	var bDZ = function (bf) {
		bH.cR("/api/sms/captcha/sent/", {
			type : "json",
			query : {
				cellphone : bf.mobile,
				channel : "new"
			},
			onload : function (bc) {
				if (bc.code != 200)
					return bo.cq.bO({
						tip : "验证码发送失败",
						type : 2
					});
				bPR = bo.Qq.bO({
						title : bf.title || "验证手机号",
						mobile : bf.mobile,
						okbutton : bf.ntext || "下一步",
						onok : function (bd) {
							bPR.cj();
							if (bf.onnext)
								bf.onnext(bd)
						}
					})
			},
			onerror : function () {
				bo.cq.bO({
					tip : "验证码发送失败",
					type : 2
				})
			}
		})
	};
	blh.changePhone = bDF;
	blh.phoneCode = bDZ;
	blh.validateQuestion = bq.bDK
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bT = be("nej.h"),
	bv = be("nej.p");
	var mr = {
		opacity : 1,
		"z-index" : 1,
		background : 1,
		"font-weight" : 1,
		filter : 1
	};
	bT.SQ = function (hK) {
		return mr[hK] === undefined && hK.indexOf("color") < 0
	};
	bT.vY = function (bid, pZ, lW) {
		lW = lW.slice(0, -1);
		Fp.bY(bid, "transition", lW);
		Fp.pD(bid, pZ);
		return this
	};
	bT.Dy = function (bid, dO, nH) {
		Fp.pD(bid, dO);
		Fp.bY(bid, "transition", "none");
		nH.call(null, dO);
		return this
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bT = be("nej.h"),
	bv = be("nej.p");
	if (bv.jN.trident1)
		return;
	bT.tf = function () {
		return !0
	}
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.ut"),
	bb;
	if (!!bv.RL)
		return;
	bv.RL = NEJ.C();
	bb = bv.RL.bN(bv.tj);
	bb.cw = function (bf) {
		bf = NEJ.X({}, bf);
		bf.timing = "easeout";
		this.cA(bf)
	}
})();
(function () {
	var be = NEJ.P,
	bv = be("nej.ut"),
	bb;
	if (!!bv.RJ)
		return;
	bv.RJ = NEJ.C();
	bb = bv.RJ.bN(bv.tj);
	bb.cw = function (bf) {
		bf = NEJ.X({}, bf);
		bf.timing = "easeinout";
		this.cA(bf)
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bT = be("nej.h"),
	bv = be("nej.p"),
	dr = be("nej.x"),
	ib = be("nej.ut");
	if (bv.jN.trident)
		return;
	var TJ = {
		linear : ib.RP,
		"ease-in" : ib.wi,
		"ease-out" : ib.RL,
		"ease-in-out" : ib.RJ
	};
	bT.vY = function () {
		var bsd = function (pZ, lW) {
			var dL = "";
			bm.eJ(pZ, function (bz, bX) {
				dL += lW.replace("all", bX)
			});
			return dL
		};
		var bto = function (bz, hK) {
			if (hK === "filter") {
				bz = bm.Cy(bz, 0);
				bz = "alpha(opacity=" + bz + ")"
			}
			if (hK === "z-index")
				bz = bm.Cy(bz, 0);
			return bz
		};
		var bts = function (bz) {
			return TJ[bz.split(" ")[2]]
		};
		var btB = function (bid, bz, pZ, nH, bu) {
			var bz = bz.split(" "),
			hK = bz[0],
			dz = parseFloat(Fp.bIU(bid, hK)) || 0,
			km = parseFloat(pZ[hK]) || 0,
			btE = TJ[bz[2]],
			RH = bz[1].slice(0, -1) * 1e3 + bz[3].slice(0, 1) * 1e3;
			if (RH >= bid.sumTime) {
				bid.sumTime = RH;
				bid.isLastOne = bu
			}
			var Dh = nej.p.dp.engine === "trident" && nej.p.dp.release - 5 < 0;
			if (hK === "opacity" && Dh) {
				hK = "filter";
				var eg = Fp.bIU(bid, hK);
				dz = parseFloat(eg.split("=")[1]) || 0;
				km = km * 100
			}
			var bf = {
				from : {
					offset : dz
				},
				to : {
					offset : km
				},
				duration : RH,
				onupdate : function (cl) {
					var bz = cl.offset;
					if (!bT.SQ(hK)) {
						bz = bto(bz, hK);
						Fp.bY(bid, hK, bz)
					} else {
						Fp.bY(bid, hK, bz + "px")
					}
				},
				onstop : function (hK) {
					var wI = bid.effects[bu];
					if (!wI)
						return;
					wI = btE.ch(wI);
					if (bid.isLastOne === bu)
						nH.apply(this)
				}
				.bh(this, bu)
			};
			return bf
		};
		return bT.vY.ee(function (bc) {
			bc.stopped = !0;
			var bk = bc.args;
			var bid = bk[0],
			pZ = bk[1],
			lW = bk[2],
			nH = bk[3];
			bid.sumTime = 0,
			bid.isLastOne = 0;
			var TS = [];
			if (lW.indexOf("all") > -1)
				lW = bsd(pZ, lW);
			var Rz = lW.slice(0, -1);
			Rz = Rz.split(",");
			bid.effects = [];
			bm.bLt(Rz, function (bz, bu) {
				var bf = btB(bid, bz, pZ, nH, bu);
				TS.push({
					o : bf,
					c : bts(bz)
				})
			});
			bm.bLt(TS, function (bt, bu) {
				var wI = bt.c.bL(bt.o);
				bid.effects[bu] = wI;
				wI.gJ()
			});
			return this
		})
	}
	();
	bT.Dy = bT.Dy.ee(function (bc) {
			bc.stopped = !0;
			var bk = bc.args;
			var bid = bk[0];
			bm.bLt(bid.effects, function (bZ) {
				bZ.cu()
			});
			bid.effects = [];
			return this
		})
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bT = be("nej.h"),
	Fp = be("nej.e"),
	bv = be("nej.p");
	if (bv.jN.gecko)
		return;
	bT.vY = function (bid, pZ, lW) {
		lW = lW.slice(0, -1);
		Fp.bY(bid, "transition", lW);
		setTimeout(function () {
			Fp.pD(bid, pZ)
		}, 33);
		return this
	}
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bT = be("nej.h"),
	bv = be("nej.p");
	if (bv.jN.webkit)
		return
})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bT = be("nej.h"),
	bv = be("nej.p");
	if (bv.jN.presto)
		return
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	bm = be("nej.u"),
	bT = be("nej.h"),
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bv = be("nej.ut"),
	oe;
	if (!!bv.mx)
		return;
	bv.mx = NEJ.C();
	oe = bv.mx.bN(bv.eW);
	oe.cw = function (bf) {
		this.cA(bf);
		this.xc = Fp.bw(bf.node);
		this.TX = bf.styles || [];
		this.TY = bf.onstop || co;
		this.Ru = bf.transition || [];
		this.Dd = {};
		this.Ub = this.bvn();
		if (!!bT.tf && bT.tf()) {
			setTimeout(this.tf.bh(this), this.Rg * 1e3)
		} else {
			this.dA([[this.xc, "transitionend", this.tf.bh(this)]])
		}
	};
	oe.cX = function () {
		if (!!this.wj) {
			this.wj = window.clearInterval(this.wj)
		}
		delete this.xc;
		delete this.TX;
		delete this.Ub;
		delete this.Dd;
		delete this.Qx;
		delete this.Ru;
		delete this.wj;
		this.dc()
	};
	oe.tf = function (bc) {
		if (!!bT.tf && bT.tf()) {
			this.Qv = !1;
			this.cu();
			return
		}
		if (!!this.Qv && this.bxd(bc)) {
			this.Qv = !1;
			this.cu()
		}
	};
	oe.bxd = function (bc) {
		var bX = bc.propertyName;
		if (bX === this.Qx || bX.indexOf(this.Qx) > -1)
			return !0;
		else
			return !1
	};
	oe.bvn = function () {
		var bxt = function (di) {
			var bk = di.split(":"),
			hK = bk[0],
			bz = bk[1],
			bid = this.xc;
			if (bz.indexOf("=") > -1) {
				var Uj = parseInt(Fp.bIU(bid, hK)) || 0;
				var dE = parseInt(bz.split("=")[1]);
				if (bz.indexOf("+") > -1)
					bz = Uj + dE;
				else
					bz = Uj - dE
			}
			if (bT.SQ(hK)) {
				if (bz.toString().indexOf("px") < 0)
					bz += "px"
			}
			this.Dd[hK] = bz
		};
		var bxw = function (bu) {
			if (!this.Ru[bu])
				return "";
			var mM = this.Ru[bu],
			bK = mM.duration + mM.delay;
			if (bK >= this.Rg) {
				this.Rg = bK;
				this.Qx = mM.property
			}
			return mM.property + " " + mM.duration + "s " + mM.timing + " " + mM.delay + "s,"
		};
		return function () {
			var Um = "";
			this.Rg = 0;
			bm.bLt(this.TX, function (di, bu) {
				bxt.call(this, di);
				Um += bxw.call(this, bu)
			}
				.bh(this));
			return Um
		}
	}
	();
	oe.bxs = function () {
		this.rd = {};
		bm.eJ(this.Dd, function (bz, hK) {
			this.rd[hK] = Fp.bIU(this.xc, hK)
		}
			.bh(this));
		this.bG("onplaystate", this.rd)
	};
	oe.sw = function () {
		this.Qv = !0;
		bT.vY(this.xc, this.Dd, this.Ub, this.TY);
		this.wj = window.setInterval(this.bxs.bh(this), 49);
		return this
	};
	oe.cu = function () {
		bT.Dy(this.xc, this.Dd, this.TY);
		this.wj = window.clearInterval(this.wj);
		return this
	};
	oe.bxH = function () {};
	oe.bxI = function () {}

})();
(function () {
	var be = NEJ.P,
	co = NEJ.F,
	bm = be("nej.u"),
	Fp = be("nej.e"),
	bm = be("nej.u"),
	bv = be("nej.ut");
	Fp.GF = function (bf) {
		bf = bf || {};
		bf.onstop = bf.onstop || co;
		bf.onplaystate = bf.onplaystate || co;
		return bf
	};
	Fp.Us = function () {
		var bxm = function (bid, GE, Dh) {
			var bJx,
			eu = true;
			if (!!Dh) {
				bm.eJ(GE, function (bz, bX) {
					if (bX === "opacity") {
						bX = "filter";
						var eg = Fp.bIU(bid, bX);
						if (eg === "") {
							Fp.bY(bid, "filter", "alpha(opacity=100)");
							bJx = 100
						} else {
							bJx = parseFloat(eg.split("=")[1]) || 0
						}
						bz = bz * 100
					} else {
						bJx = Fp.bIU(bid, bX)
					}
					if (parseInt(bJx) === bz)
						eu = false
				}
					.bh(this))
			} else {
				bm.eJ(GE, function (bz, bX) {
					bJx = Fp.bIU(bid, bX);
					if (parseInt(bJx) === bz)
						eu = false
				}
					.bh(this))
			}
			return eu
		};
		return function (bid, GE) {
			var Dh = nej.p.dp.engine === "trident" && nej.p.dp.release - 5 < 0;
			if (!bxm(bid, GE, Dh))
				return !1;
			return !0
		}
	}
	();
	Fp.Uv = function () {
		var bxl = function (bid) {
			var DO = Fp.bIU(bid, "display");
			if (DO === "none")
				return !1;
			return !0
		};
		return function (bid, bf, mP) {
			var NC = bf.opacity || mP;
			bid = Fp.bw(bid);
			if (!bxl.call(bid))
				return !1;
			if (!!bid.effect)
				return !1;
			if (!Fp.Us(bid, {
					opacity : NC
				}))
				return !1;
			bf = Fp.GF(bf);
			bid.effect = bv.mx.bL({
					node : bid,
					transition : [{
							property : "opacity",
							timing : bf.timing || "ease-in",
							delay : bf.delay || 0,
							duration : bf.duration || 1
						}
					],
					styles : ["opacity:" + NC],
					onstop : function (dO) {
						bid.effect = bv.mx.ch(bid.effect);
						bf.onstop.call(null, dO)
					},
					onplaystate : bf.onplaystate.bh(bid.effect)
				});
			bid.effect.sw();
			return this
		}
	}
	.bh(this)();
	Fp.Ux = function (bid, bf) {
		return Fp.Uv(bid, bf, 1)
	};
	Fp.bxk = function (bid, bf) {
		return Fp.Uv(bid, bf, 0)
	};
	Fp.bxh = function (bid) {
		Fp.bxg(bid);
		return this
	};
	Fp.bxg = function (bid) {
		bid = Fp.bw(bid);
		if (bid.effect && bid.effect.cu()) {
			if (!!bid.effect)
				bid.effect = bv.mx.ch(bid.effect)
		}
		return this
	};
	Fp.bxJ = function (bid, kt, bf) {
		bid = Fp.bw(bid);
		if (!!bid.effect)
			return !1;
		if (!Fp.Us(bid, kt))
			return !1;
		bf = Fp.GF(bf);
		bf.duration = bf.duration || [];
		var bim = kt.top || 0,
		ox = kt.left || 0;
		bid.effect = bv.mx.bL({
				node : bid,
				transition : [{
						property : "top",
						timing : bf.timing || "ease-in",
						delay : bf.delay || 0,
						duration : bf.duration[0] || 1
					}, {
						property : "left",
						timing : bf.timing || "ease-in",
						delay : bf.delay || 0,
						duration : bf.duration[1] || 1
					}
				],
				styles : ["top:" + bim, "left:" + ox],
				onstop : function (dO) {
					bf.onstop.call(null, dO);
					bid.effect = bv.mx.ch(bid.effect)
				},
				onplaystate : bf.onplaystate.bh(bid.effect)
			});
		bid.effect.sw();
		return this
	};
	Fp.UC = function () {
		return function (bid, kt, bf) {
			bid = Fp.bw(bid);
			if (!!bid.effect)
				return !1;
			bf = Fp.GF(bf);
			var bk = kt.split(":"),
			bxb = bk[0],
			UE = [];
			UE.push(kt);
			bid.effect = bv.mx.bL({
					node : bid,
					transition : [{
							property : bxb,
							timing : bf.timing || "ease-in",
							delay : bf.delay || 0,
							duration : bf.duration || 1
						}
					],
					styles : UE,
					onstop : function (dO) {
						bf.onstop.call(null, dO);
						bid.effect = bv.mx.ch(bid.effect)
					},
					onplaystate : bf.onplaystate.bh(bid.effect)
				});
			bid.effect.sw();
			return this
		}
	}
	();
	Fp.bxK = function () {
		var Qm = function (bid, bDM) {
			return bDM == "height" ? bid.clientHeight : bid.clientWidth
		};
		return function (bid, bDM, bf) {
			bid = Fp.bw(bid);
			if (!!bid.effect)
				return !1;
			bf = Fp.GF(bf);
			var bz = bf.value || false;
			if (!bz) {
				Fp.bY(bid, "display", "block");
				var bid = Fp.bw(bid);
				bz = Qm(bid, bDM)
			}
			var eu = Fp.bIU(bid, "visibility");
			if (eu === "hidden") {
				bid.style.height = 0;
				Fp.bY(bid, "visibility", "inherit");
				bid.effect = bv.mx.bL({
						node : bid,
						transition : [{
								property : bDM,
								timing : bf.timing || "ease-in",
								delay : bf.delay || 0,
								duration : bf.duration || 1
							}
						],
						styles : [bDM + ":" + bz],
						onstop : function (dO) {
							bf.onstop.call(null, dO);
							bid.effect = bv.mx.ch(bid.effect);
							Gy = window.clearTimeout(Gy)
						},
						onplaystate : bf.onplaystate.bh(bid.effect)
					})
			} else {
				bid.style.height = bz;
				bid.effect = bv.mx.bL({
						node : bid,
						transition : [{
								property : bDM,
								timing : bf.timing || "ease-in",
								delay : bf.delay || 0,
								duration : bf.duration || 1
							}
						],
						styles : [bDM + ":" + 0],
						onstop : function (dO) {
							Fp.bY(bid, "visibility", "hidden");
							Fp.bY(bid, bDM, "auto");
							bf.onstop.call(null, dO);
							bid.effect = bv.mx.ch(bid.effect);
							Gy = window.clearTimeout(Gy)
						},
						onplaystate : bf.onplaystate.bh(bid.effect)
					})
			}
			var Gy = window.setTimeout(function () {
					bid.effect.sw()
				}
					.bh(this), 0);
			return this
		}
	}
	()
})();
(function () {
	var be = NEJ.P,
	bZ = NEJ.O,
	co = NEJ.F,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bK = be("nej.ut"),
	bm = be("nej.u"),
	eQ = be("nej.ui"),
	bq = be("nm.x"),
	bp = be("nm.d"),
	bEZ = be("nm.w"),
	blh = be("api"),
	bb,
	bJ;
	bEZ.bBk = NEJ.C();
	bb = bEZ.bBk.bN(eQ.ic);
	bJ = bEZ.bBk.du;
	bb.bLv = function () {
		this.dn = "m-image-preview"
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.bGf = bk[0];
		this.byo = bk[1];
		this.LF = bk[2];
		this.bFT = bk[3];
		this.bFB = bk[4];
		this.bFA = bk[5]
	};
	bb.cw = function (bf) {
		this.cA(bf);
		this.bGS();
		this.bEN = bf.urls;
		this.gS = this.bEN.length;
		if (this.gS == 1) {
			Fp.bY(this.bFB, "display", "none");
			Fp.bY(this.bFA, "display", "none")
		}
		this.dA([[this.bB, "click", this.gI.bh(this)], [document, "keydown", this.bGR.bh(this)]]);
		bq.bGe(this.bEN, function (bEY, ip) {
			this.qM = ip;
			this.bEJ(bf.index || 0)
		}
			.bh(this))
	};
	bb.cX = function () {
		this.dc();
		Fp.bV(this.byo, "fail-loading");
		Fp.bR(this.byo, "f-hide");
		Fp.bY(this.bFB, "display", "");
		Fp.bY(this.bFA, "display", "");
		Fp.bR(this.bFB, "z-cntdis");
		Fp.bR(this.iK, "z-cntdis");
		Fp.bR(this.bFA, "z-cntdis");
		Fp.bR(this.byq, "z-cntdis");
		this.LF.src = "";
		delete this.bEN;
		delete this.gS
	};
	bb.gI = function (bc) {
		var bid = bj.cf(bc, "action");
		if (Fp.cJ(bid, "z-dis"))
			return;
		switch (Fp.bI(bid, "action")) {
		case "close":
			this.ch();
			break;
		case "prev":
			this.bEJ(this.dw - 1);
			break;
		case "next":
			this.bEJ(this.dw + 1);
			break;
		case "go":
			this.bEJ(Fp.bI(bid, "index"));
			break
		}
	};
	bb.bEJ = function (bu) {
		if (bu <= 0) {
			Fp.bV(this.bFB, "z-cntdis")
		} else {
			Fp.bR(this.bFB, "z-cntdis")
		}
		if (bu >= this.gS - 1) {
			Fp.bV(this.bFA, "z-cntdis")
		} else {
			Fp.bR(this.bFA, "z-cntdis")
		}
		if (bu < 0 || bu >= this.bEN.length)
			return;
		var mz = this.bEN[bu];
		this.bFT.href = mz;
		if (this.qM[bu]) {
			Fp.bV(this.byo, "f-hide");
			this.LF.src = mz
		} else {
			this.LF.src = "";
			Fp.bR(this.byo, "f-hide");
			Fp.bR(this.byo, "fail-loading")
		}
		this.dw = bu
	};
	blh.imageView = function (bEY, bu) {
		bEZ.bBk.bL({
			parent : document.body,
			urls : bEY,
			index : bu
		})
	};
	bb.bGR = function (bc) {
		bj.cu(bc);
		switch (bc.keyCode) {
		case 37:
			this.bEJ(this.dw - 1);
			break;
		case 39:
			this.bEJ(this.dw + 1);
			break;
		case 27:
			this.ch();
			break;
		case 38:
			this.bGf.scrollTop -= 20;
			break;
		case 40:
			this.bGf.scrollTop += 20;
			break
		}
	};
	bb.bGS = function () {
		var bDX = Fp.gH("input");
		this.bB.appendChild(bDX);
		bDX.focus();
		Fp.fx(bDX)
	}
})();
(function () {
	var be = NEJ.P,
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	dE = be("nej.p"),
	bH = be("nej.j"),
	fS = be("nm.ut"),
	bEZ = be("nm.w"),
	bo = be("nm.l"),
	bq = be("nm.x"),
	bb,
	bJ;
	bo.NQ = NEJ.C();
	bb = bo.NQ.bN(bo.eH);
	bJ = bo.NQ.du;
	bb.dv = function (bf) {
		bf.title = "转发动态";
		this.dF(bf)
	};
	bb.cw = function (bf) {
		if (bf.onclose === undefined)
			bf.onclose = function () {
				this.cj()
			}
		.bh(this);
		this.cA(bf);
		this.gx = bf.rid;
		this.mZ = bf.uid;
		this.bkh = bf.text;
		this.eY.value = this.bkh;
		this.gG = bEZ.AE.bL({
				parent : document.body,
				target : this.eY
			})
	};
	bb.bLv = function () {
		this.dn = "m-wgt-forward"
	};
	bb.bFa = function () {
		this.bLu();
		var cm = Fp.bP(this.bB, "j-flag");
		this.vP = cm[0];
		this.eY = cm[1];
		this.Oz = cm[2];
		this.bke = cm[3];
		this.AF = cm[4];
		this.jz = cm[5];
		this.bcN = cm[6];
		this.bkd = cm[7];
		this.qp = cm[8];
		bj.bs(this.eY, "input", this.is.bh(this));
		bj.bs(this.eY, "keyup", this.IE.bh(this));
		bj.bs(this.eY, "click", this.iO.bh(this));
		bj.bs(this.AF, "click", this.OE.bh(this));
		bj.bs(this.bke, "click", this.OF.bh(this));
		bj.bs(this.bcN, "click", this.bkc.bh(this));
		bj.bs(this.bkd, "click", this.NL.bh(this))
	};
	bb.cX = function () {
		this.dc();
		if (this.fR) {
			this.fR.ch();
			delete this.fR
		}
		if (this.gG) {
			this.gG.ch();
			delete this.gG
		}
	};
	bb.is = function (bc) {
		dE.dp.browser == "ie" && dE.dp.version < "7.0" ? setTimeout(this.gb.bh(this), 0) : this.gb()
	};
	bb.IE = function (bc) {
		this.iO();
		this.is()
	};
	bb.gb = function () {
		var ck = this.eY.value.trim().length;
		this.jz.innerHTML = !ck ? "140" : 140 - ck;
		ck > 140 ? Fp.bV(this.jz, "s-fc6") : Fp.bR(this.jz, "s-fc6");
		if (!ck || ck == 0)
			Fp.bY(this.vP, "display", "block");
		else
			Fp.bY(this.vP, "display", "none")
	};
	bb.OE = function (bc) {
		bj.cu(bc);
		!!this.fR && this.fR.cj();
		this.gG.AB();
		this.gb()
	};
	bb.OF = function (bc) {
		bj.cu(bc);
		if (!this.fR) {
			this.fR = bo.xt.bL({
					parent : this.Oz
				});
			this.fR.bs("onselect", this.qx.bh(this))
		}
		this.fR.bO()
	};
	bb.qx = function (bc) {
		var ci = "[" + bc.text + "]";
		fS.xk(this.eY, this.kJ, ci);
		this.gb();
		bj.bG(this.eY, "keyup")
	};
	bb.iO = function () {
		this.kJ = fS.ov(this.eY)
	};
	bb.bkc = function (bc) {
		bj.cu(bc);
		if (this.dG())
			return;
		if (this.eY.value.trim().length > 140) {
			this.bxe("字数超过140个字符");
			return
		}
		var bka = this.eY.value.trim();
		var il = window.GUser.userId;
		var bC = this.gx;
		var cg = "/api/event/forward";
		var bl = {
			forwards : bka,
			id : this.gx,
			eventUserId : this.mZ
		};
		bl = bm.eK(bl);
		this.dG(!0);
		var fb = bH.cR(cg, {
				sync : false,
				type : "json",
				data : bl,
				method : "POST",
				onload : this.RU.bh(this),
				onerror : this.jh.bh(this)
			})
	};
	bb.RU = function (bn) {
		this.dG(!1);
		if (bn.code != 200) {
			var cD = "转发失败";
			switch (bn.code) {
			case 404:
				cD = bn.message || "该动态已被删除";
				break;
			case 407:
				cD = "输入内容包含有关键字";
				break;
			case 408:
				cD = "转发太快了，过会再分享吧";
				break
			}
			this.bxe(cD);
			return
		}
		fS.YX(this.eY.value);
		this.cj();
		bo.cq.bO({
			tip : "转发成功！",
			autoclose : true
		});
		this.bG("onforward", {
			id : this.gx,
			eventUserId : this.mZ
		})
	};
	bb.jh = function (bl) {
		this.dG(!1);
		this.bxe(cD)
	};
	bb.dG = function (cN) {
		return bJ.dG(this.bcN, cN, "转发", "转发中 ...")
	};
	bb.bxe = function (cD) {
		return bJ.bxe(this.qp, cD)
	};
	bb.NL = function (bc) {
		bj.cG(bc);
		this.cj()
	};
	bb.jq = function () {
		this.eY.focus();
		if (dE.dp.browser == "ie" && parseInt(dE.dp.version) < 10)
			return;
		fS.HN(this.eY, {
			start : 0,
			end : 0
		});
		this.iO()
	};
	bb.cj = function () {
		bJ.cj.call(this);
		if (this.fR) {
			this.fR.ch();
			delete this.fR
		}
		if (this.gG) {
			this.gG.ch();
			delete this.gG
		}
	};
	bb.bO = function (bf) {
		bJ.bO.call(this);
		this.bxe();
		this.dG(!1);
		this.gb();
		this.jq();
		this.kJ = fS.ov(this.eY)
	};
	bq.NK = function (bf) {
		if (!GUser || !GUser.userId || GUser.userId <= 0) {
			bo.kA.bO({
				title : "登录"
			});
			return
		}
		if (bf.title === undefined)
			bf.title = "转发动态";
		bo.NQ.bO(bf)
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
	fS = be("nm.ut"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.Mu = NEJ.C();
	bb = bo.Mu.bN(bo.eH);
	bJ = bo.Mu.du;
	bb.dv = function () {
		this.dF()
	};
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		this.gM = bk[0];
		this.Ls = bk[1];
		this.dI = bk[2];
		this.Xw = bk[3];
		this.eN = bk[4];
		bj.bs(this.bB, "click", this.dC.bh(this));
		bj.bs(this.gM, "input", this.is.bh(this));
		bj.bs(this.gM, "keyup", this.tG.bh(this))
	};
	bb.bLv = function () {
		this.dn = "m-sharesingle-layer"
	};
	bb.cw = function (bf) {
		bf.parent = bf.parent || document.body;
		bf.title = bf.title || "分享";
		bf.draggable = !0;
		bf.mask = !0;
		bf.clazz = "m-layer m-layer-w2";
		this.cA(bf);
		this.gM.value = bf.mesg || "";
		this.bS = {
			id : bf.rid,
			type : bf.type,
			picUrl : bf.purl,
			snsType : bf.snsType,
			resourceUrl : bf.rurl
		};
		if (!this.bS.resourceUrl)
			delete this.bS.resourceUrl;
		this.uE();
		this.bxe(null);
		this.dG(false)
	};
	bb.dC = function (bc) {
		var bid = bj.cf(bc, "d:action"),
		cv = Fp.bI(bid, "action");
		bj.cG(bc);
		switch (cv) {
		case "txt":
			this.iO();
			break;
		case "emt":
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
		case "ok":
			this.bxe(null);
			if (this.kO)
				return;
			if (this.gM.value.trim().length > 140) {
				this.bxe("字数超过140个字符");
				return
			}
			this.dG(true);
			this.bS.msg = this.gM.value;
			if (!this.bS.resourceUrl) {
				delete this.bS.resourceUrl
			}
			bH.cR("/sns/share/resource", {
				type : "json",
				method : "post",
				data : bm.eK(this.bS),
				onload : this.uu.bh(this),
				onerror : this.uu.bh(this)
			});
			break;
		case "cc":
			this.cj();
			break
		}
	};
	bb.qx = function (bc) {
		var ci = "[" + bc.text + "]";
		fS.xk(this.gM, this.kJ, ci);
		this.uE()
	};
	bb.is = function () {
		this.uE();
		this.iO()
	};
	bb.tG = function () {
		this.uE();
		this.iO()
	};
	bb.uE = function () {
		var ck = this.gM.value.trim().length;
		this.dI.innerText = 140 - ck;
		ck > 140 ? Fp.fC(this.dI, "s-fc4", "s-fc6") : Fp.fC(this.dI, "s-fc6", "s-fc4")
	};
	bb.iO = function () {
		this.kJ = fS.ov(this.gM)
	};
	bb.uu = function (bc) {
		var gR = {
			407 : "输入内容包含有关键字",
			404 : "分享的资源不存在",
			408 : "分享太快了，过会再分享吧"
		};
		if (bc.code == 200) {
			this.bG("onsuccess", bc);
			if (!bc.stopped) {
				bo.cq.bO({
					tip : "分享成功！",
					autoclose : true
				})
			}
			this.cj()
		} else {
			this.bxe(gR[bc.code] || "分享失败")
		}
		this.dG(false)
	};
	bb.bxe = function (Xv) {
		if (Xv) {
			this.eN.innerHTML = '<i class="u-icn u-icn-25"></i>' + Xv;
			Fp.bR(this.eN, "f-hide")
		} else {
			Fp.bV(this.eN, "f-hide")
		}
	};
	bb.dG = function (vX) {
		this.kO = vX;
		if (vX) {
			this.Xw.innerHTML = "<i>分享中...</i>"
		} else {
			this.Xw.innerHTML = "<i>分享</i>"
		}
	};
	bb.bO = function () {
		bJ.bO.call(this);
		var jx = this.gM.value.length;
		fS.HN(this.gM, {
			start : jx,
			end : jx,
			text : ""
		});
		this.iO()
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
	blh = be("api"),
	bo = be("nm.l"),
	bb,
	bJ;
	bo.bEd = NEJ.C();
	bb = bo.bEd.bN(bo.eH);
	bb.bFa = function () {
		this.bLu();
		var bk = Fp.bP(this.bB, "j-flag");
		bj.bs(this.bB, "click", this.gI.bh(this))
	};
	bb.bLv = function () {
		this.dn = "m-simple-share-layer"
	};
	bb.cw = function (bf) {
		bf.clazz = "m-layer-w6";
		if (!bf.shareType)
			bf.parent = bf.parent || document.body;
		bf.title = bf.title || "分享";
		bf.draggable = !0;
		bf.mask = bf.mask || true;
		this.cA(bf);
		this.bS = {
			id : bf.id || 0,
			type : bf.type || "activity",
			picUrl : bf.picUrl,
			msg : bf.text,
			resourceUrl : bf.resourceUrl,
			summary : bf.summary
		};
		this.dA([[window, "snsbind", this.uF.bh(this)], [window, "snsbinderror", this.cj.bh(this)]]);
		this.yA = {
			rid : this.bS.id,
			rurl : this.bS.resourceUrl,
			purl : this.bS.picUrl,
			mesg : this.bS.msg,
			type : this.bS.type,
			onsuccess : bf.onsuccess
		};
		if (bf.shareType) {
			this.bKf(bf.shareType)
		}
	};
	bb.gI = function (bc) {
		var bid = bj.cf(bc, "d:type"),
		bDM = Fp.bI(bid, "type");
		this.bKf(bDM)
	};
	bb.bKf = function (bDM) {
		switch (bDM) {
		case "xlwb":
		case "rr":
		case "db":
			var nM = {
				xlwb : 2,
				rr : 4,
				db : 3
			},
			bhH = nM[bDM],
			lH = localCache.OG("user.bindings") || [],
			bu = bm.dY(lH, function (bt) {
					return bt.type == bhH && !bt.expired
				});
			if (bu >= 0) {
				this.wm(bhH)
			} else {
				var hM = {
					snsType : bhH,
					callbackType : "Binding",
					clientType : "web2",
					forcelogin : true,
					csrf_token : bH.fN("__csrf")
				};
				top.window.open("/api/sns/authorize?" + bm.eK(hM))
			}
			break;
		case "wx":
		case "yx":
			var hM = {
				resourceUrl : this.bS.resourceUrl,
				type : bDM
			};
			top.open("/share/QRCode?" + bm.eK(hM));
			this.cj();
			break;
		case "qzone":
			var jT = {
				url : this.bS.resourceUrl,
				title : this.bS.msg || "",
				pics : this.bS.picUrl,
				summary : this.bS.summary
			};
			top.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + bm.eK(jT));
			this.cj();
			break;
		case "lofter":
			var jT = {
				from : "cloudmusic",
				image : this.bS.picUrl,
				source : "网易云音乐",
				sourceurl : this.bS.resourceUrl,
				content : this.bS.msg
			};
			top.open("http://www.lofter.com/sharephoto/?" + bm.eK(jT));
			this.cj();
			break
		}
	};
	bb.uF = function (bc) {
		this.wm(bc.result.type)
	};
	bb.wm = function (bDM) {
		this.cj();
		if (this.Iv) {
			this.Iv.ch();
			delete this.Iv
		}
		this.yA.snsType = bDM;
		this.Iv = bo.Mu.bL(this.yA);
		this.Iv.bO()
	};
	var dx = null;
	blh.simpleShare = function (bf) {
		if (dx)
			dx.ch();
		dx = bo.bEd.bL(bf).bO()
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
	bp = be("nm.d"),
	bq = be("nm.x"),
	bM = be("nm.m"),
	bo = be("nm.l"),
	bE = be("nm.m.f"),
	blh = be("api"),
	rn = /#(.*?)$/,
	bb,
	bJ;
	bE.beK = NEJ.C();
	bb = bE.beK.bN(bK.bFb);
	bb.cE = function () {
		this.cL();
		window.onHashChange = this.Hp.bh(this);
		window.log = this.AZ.bh(this);
		window.share = this.wm.bh(this);
		window.subscribe = this.EV.bh(this);
		window.onIframeClick = this.bhv.bh(this);
		bj.bs(window, "playchange", this.bJI.bh(this));
		bj.bs(window, "playstatechange", this.bhw.bh(this));
		this.FQ = bM.bgl.mh();
		this.FQ.bs("loginsuccess", this.bQa.bh(this));
		this.FQ.bs("logoutbefore", this.bPZ.bh(this));
		this.FQ.bs("logoutsuccess", this.bPY.bh(this));
		this.bhx();
		this.cz = bE.Dm.bL();
		this.cz.bG("onshow", {});
		bH.cR("/api/login/token/refresh", {
			type : "json",
			method : "post"
		});
		this.Hp(bq.uy());
		this.byu = bM.bEe.bL();
		blh.refreshUserInfo = this.byu.bDx.bh(this.byu);
		this.bHW()
	};
	bb.bhx = function () {
		this.gV = bp.qE.bL()
	};
	bb.Hp = function (bLw) {
		var bc = location.parse(bLw);
		this.nz(bc)
	};
	bb.nz = function (bc, bDM) {
		var fe = Fp.bw("g_iframe"),
		gv = bc.path,
		cC = bc.query,
		bLi = fe.contentWindow.location;
		this.rQ = fe;
		if (/^\/mv/.test(gv)) {
			if (this.cz)
				this.cz.cj();
			this.oh = document.title
		} else {
			if (this.cz)
				this.cz.bO();
			document.title = this.oh || bq.Ig()
		}
		if (cC.play == "true" && /^\/(m\/)?song/.test(gv)) {
			if (this.cz)
				this.cz.sJ(18, cC.id, true)
		}
		if (/^\/my\/m\/music\/playlist/.test(gv)) {
			var sU = bq.He();
			if (!sU && !!cC.id) {
				location.dispatch2("/playlist?id=" + cC.id);
				return
			}
		}
		if (bDM !== undefined)
			return GDispatcher.refreshIFrame(bc.href)
	};
	bb.bQa = function () {
		var bLw = rn.test(location.href) ? RegExp.$1 : "",
		bc = location.parse(bLw);
		this.byu.bDx();
		this.nz(bc, "urlchange")
	};
	bb.bPZ = function () {
		bo.Fw.cj();
		this.byu.bDx()
	};
	bb.bPY = function () {
		if (!location.hash || location.hash == "#") {
			var bLw = rn.test(location.href) ? RegExp.$1 : "",
			bc = location.parse(bLw);
			this.nz(bc, "urlchange");
			return
		}
		location.hash = "#"
	};
	bb.bJI = function (bc) {
		if (this.rQ) {
			var fZ = this.rQ.contentWindow;
			if (fZ.nej && fZ.nej.v)
				fZ.nej.v.bG(fZ, "playchange", bc)
		}
	};
	bb.bhw = function (bc) {
		if (!this.rQ)
			return;
		var fZ = this.rQ.contentWindow;
		try {
			if (fZ.nej && fZ.nej.v)
				fZ.nej.v.bG(fZ, "playstatechange", bc)
		} catch (e) {}

	};
	bb.AZ = function (cv, bQ) {
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
	};
	bb.wm = function () {
		if (this.rQ.contentWindow.share) {
			this.rQ.contentWindow.share.apply(this.rQ.contentWindow, arguments)
		}
	};
	bb.EV = function (bU, bhI) {
		var fZ = this.rQ.contentWindow;
		if (fZ.nm && fZ.nm.x) {
			if (!fZ.nm.x.iE) {
				fZ = top.window
			}
			if (bhI && fZ.nm.x.bae) {
				fZ.nm.x.bae({
					data : bU.program
				})
			} else if (fZ.nm.x.iE) {
				var bk = bm.fz(bU) ? bU : [bU];
				fZ.nm.x.iE({
					tracks : bk
				})
			}
		}
	};
	bb.bhv = function (bc) {
		bj.bG(window, "iframeclick")
	};
	bb.bHW = function () {
		bH.cR("/api/copyright/pay_fee_message/config", {
			type : "json",
			onload : function (bc) {
				if (bc.code == 200) {
					blh.feeMessage = bc.config
				}
			}
		})
	};
	bK.hh.bL({
		element : window,
		event : ["playchange", "iframeclick", "playstatechange"]
	});
	Fp.dN("template-box");
	new bE.beK
})()
