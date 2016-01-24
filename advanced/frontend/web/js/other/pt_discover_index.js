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
	Fp = be("nej.e"),
	bj = be("nej.v"),
	bm = be("nej.u"),
	bK = be("nej.ut"),
	bH = be("nej.j"),
	bp = be("nm.d"),
	bq = be("nm.x"),
	bM = be("nm.m"),
	bE = be("nm.m.disc"),
	bo = be("nm.l"),
	bb,
	bJ;
	bE.Dz = NEJ.C();
	bb = bE.Dz.bN(bM.dM);
	bb.cE = function (bf) {
		this.cL();
		this.FU = bp.fY.bL({
				onitemadd : this.oH.bh(this)
			});
		this.bwT = bp.qE.bL();
		this.qW = undefined;
		this.bwS();
		this.bwR();
		this.bwQ();
		this.wy = [];
		Array.prototype.push.apply(this.wy, Fp.bP("album-roller", "j-img"));
		Array.prototype.push.apply(this.wy, Fp.bP("top-flag", "j-img"));
		Array.prototype.push.apply(this.wy, Fp.bP("hotdj-list", "j-img"));
		bj.bs(window, "scroll", this.PX.bh(this));
		bj.bs(window, "resize", this.PX.bh(this));
		bj.bs("top-flag", "click", this.bwF.bh(this));
		bj.bs("personalRec", "click", this.bwE.bh(this));
		bj.bs("discover-module", "click", this.gI.bh(this));
		this.PX();
		this.bxc()
	};
	bb.PX = function () {
		var bwA = function (jc, cl, gk) {
			var Cw = cl.y < jc.scrollTop + jc.clientHeight;
			return Cw
		};
		return function (bc) {
			if (this.wy.length < 1)
				return;
			var jc = Fp.mW();
			for (var i = 0, jG = this.wy, cl; i < jG.length; ++i) {
				cl = Fp.mV(jG[i]);
				if (bwA(jc, cl)) {
					jG[i].src = Fp.bI(jG[i], "src");
					this.wy.splice(i, 1);
					--i
				}
			}
		}
	}
	();
	bb.bwF = function (bc) {
		var bid = bj.cf(bc, "subscribe-flag");
		if (!!bid && !Fp.cJ(bid, "s-bg-10-slt")) {
			bj.cG(bc);
			var sU = bq.He();
			if (!sU) {
				top.login();
				return
			}
			var bwv = parseInt(Fp.bI(bid, "plid"));
			this.FU.jo({
				key : "playlist_fav-" + GUser.userId,
				data : {
					id : bwv
				},
				ext : {
					node : bid
				}
			})
		}
	};
	bb.bwS = function () {
		var pY = window.Gbanners;
		var CB = pY.length;
		var Gm = Fp.bw("index-banner");
		var bLk = Fp.bP(document.body, "d-flag");
		var bwt = bLk[0];
		var PQ = bLk[1];
		var PO = bLk[2];
		var wN = 0;
		var PK = false;
		var PF = Fp.bP(Gm, "pg-flag");
		var Ge = function (bu) {
			bu = (bu + CB) % CB;
			Fp.gK(PO, "src", pY[bu].picUrl);
			Fp.gK(PQ, "href", pY[bu].url);
			if ((pY[bu].targetType == 1003 || pY[bu].targetType == 3e3) && pY[bu].url.indexOf(location.hostname + "/#") < 0) {
				Fp.gK(PQ, "target", "_blank")
			} else {
				Fp.gK(PQ, "target", "")
			}
			Fp.bY(bwt, "background-image", "url(" + pY[bu].backgroundUrl + ")");
			Fp.bR(PF[wN], "z-slt");
			Fp.bV(PF[bu], "z-slt");
			wN = bu;
			Vd((bu + 1 + CB) % CB)
		};
		var bwa = function (bu) {
			Fp.bR(PF[wN], "z-slt");
			Fp.bxk(PO, {
				timing : "ease-in",
				opacity : .2,
				onstop : function (bc) {
					Ge(bu);
					Fp.Ux(PO, {
						timing : "ease-out",
						onstop : function (bc) {},
						onplaystate : function (bc) {}

					})
				},
				onplaystate : function (bc) {}

			})
		};
		var Vf = function (cg) {
			var img = new Image;
			img.src = cg
		};
		var Vd = function (bu) {
			Vf(pY[bu].backgroundUrl);
			Vf(pY[bu].picUrl)
		};
		bj.bs(Gm, "click", function (bc) {
			var bid = bj.cf(bc, "click-flag");
			if (!!bid) {
				bj.cG(bc);
				if (Fp.cJ(bid, "btnl")) {
					Ge(wN - 1)
				} else if (Fp.cJ(bid, "btnr")) {
					Ge(wN + 1)
				} else if (Fp.cJ(bid, "pg-flag")) {
					var bu = parseInt(Fp.bI(bid, "index"));
					Ge(bu)
				}
			}
		}
			.bh(this));
		bj.bs(Gm, "mouseover", function (bc) {
			PK = true
		}
			.bh(this));
		bj.bs(Gm, "mouseout", function (bc) {
			PK = false
		}
			.bh(this));
		setInterval(function () {
			if (!PK) {
				bwa((wN + 1) % CB)
			}
		}
			.bh(this), 5e3);
		Vd(1)
	};
	bb.bwR = function () {
		var Vg = Fp.bw("album-roller");
		var Gd = Fp.bP(Vg, "roller-flag");
		var rp = Gd.length;
		var FZ = 1;
		var isOnPlay = false;
		var Vk = function (bf) {
			isOnPlay = true;
			var FV = bf.direction == "left" ? "-" : "";
			var FR = FV == "-" ? (FZ + 1 + rp) % rp : (FZ - 1 + rp) % rp;
			var bvX = FV == "-" ? (FR + 1 + rp) % rp : (FR - 1 + rp) % rp;
			Fp.UC(Gd[FZ], "left:" + FV + "645", {
				timing : "ease-out",
				delay : 0,
				duration : 1,
				onstop : function (bc) {
					FZ = FR;
					Fp.bY(Gd[bvX], "left", -645 * parseInt(FV + "1") + "px");
					setTimeout(function () {
						isOnPlay = false
					}, 200)
				},
				onplaystate : function (bc) {}

			});
			Fp.UC(Gd[FR], "left:0", {
				timing : "ease-out",
				delay : 0,
				duration : 1,
				onstop : function (bc) {},
				onplaystate : function (bc) {}

			})
		};
		var leftRoll = function () {
			if (!isOnPlay) {
				Vk({
					direction : "left"
				})
			}
		};
		var rightRoll = function () {
			if (!isOnPlay) {
				Vk({
					direction : "right"
				})
			}
		};
		bj.bs(Vg, "click", function (bc) {
			var bid = bj.cf(bc, "click-flag");
			if (!!bid) {
				bj.cG(bc);
				if (Fp.cJ(bid, "pre")) {
					rightRoll()
				} else if (Fp.cJ(bid, "nxt")) {
					leftRoll()
				}
			}
		}
			.bh(this))
	};
	bb.bwQ = function () {
		var bid = Fp.bw("personalRec");
		bH.cR("/api/discovery/recommend/resource", {
			type : "json",
			onload : function (bc) {
				var qP = new Date,
				qL,
				bl,
				tS,
				bLj,
				Co;
				Co = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
				if (GUser) {
					qL = new Date(parseInt(GUser.birthday))
				}
				bLj = qP.getDate();
				tS = Co[qP.getDay()];
				if (qL && qP.getMonth() == qL.getMonth() && qP.getDate() == qL.getDate()) {
					bl = {
						weekday : tS,
						day : bLj,
						dec1 : "生日特别推荐",
						dec2 : "亲爱的" + GUser.nickname + "，",
						dec3 : "祝你生日快乐"
					}
				} else {
					bl = {
						weekday : tS,
						day : bLj,
						dec1 : "每日歌曲推荐",
						dec2 : "根据你的口味生成，",
						dec3 : "每天6:00更新"
					}
				}
				if (bc.code == 200) {
					var HL = [];
					if (bc.recommend && bc.recommend.length) {
						for (var i = 0; i < bc.recommend.length; i++) {
							var xq = {};
							xq.position = i;
							xq.id = bc.recommend[i].id;
							xq.alg = bc.recommend[i].alg;
							switch (bc.recommend[i].type) {
							case 0:
								bc.recommend[i].rtype = 17;
								bc.recommend[i].link = "/dj?id=" + bc.recommend[i].id;
								xq.scene = "user-dj-recommend";
								break;
							case 1:
								bc.recommend[i].rtype = 13;
								bc.recommend[i].link = "/playlist?id=" + bc.recommend[i].id;
								xq.scene = "user-playlist";
								break
							}
							if (i < 3)
								HL.push({
									action : "recommendimpress",
									json : xq
								})
						}
						this.bwT.bge(HL);
						bid.innerHTML = Fp.cV("m-wgt-rmd", {
								data : bl,
								recommend : bc.recommend.slice(0, 3)
							}, {
								getPlayCount : bq.bMA,
								cutString : bq.yi
							})
					}
				}
			}
			.bh(this),
			onerror : function () {}

		})
	};
	bb.oH = function (bc) {
		Fp.bV(bc.ext.node, "s-bg-10-slt");
		bc.ext.node.title = "已收藏"
	};
	bb.bwE = function (bc) {
		var bid = bj.cf(bc, "d:action");
		var cv = Fp.bI(bid, "action");
		var bC,
		bDM,
		ES,
		cC;
		if (cv)
			bj.cG(bc);
		switch (cv) {
		case "dislike":
			bC = Fp.bI(bid, "resId");
			bDM = Fp.bI(bid, "resType");
			ES = Fp.bI(bid, "alg");
			this.qW = Fp.bI(bid, "index");
			cC = {
				resId : bC,
				resType : bDM,
				alg : ES
			};
			bH.cR("/api/discovery/recommend/dislike", {
				type : "json",
				query : bm.eK(cC),
				onload : function (bc) {
					if (bc.code == 200) {
						var qZ = bc.data[this.qW];
						if (qZ.type == 0) {
							qZ.rtype = 17;
							qZ.link = "/dj?id=" + qZ.id
						} else if (qZ.type == 1) {
							qZ.rtype = 13;
							qZ.link = "/playlist?id=" + qZ.id
						}
						bid.parentNode.parentNode.innerHTML = Fp.cV("m-rmd-item", {
								rec : qZ,
								index : this.qW
							})
					} else {
						bo.cq.bO({
							tip : "暂无更多推荐",
							autoclose : true
						})
					}
				}
				.bh(this),
				onerror : function () {
					bo.cq.bO({
						tip : "暂无更多推荐",
						autoclose : true
					})
				}
			});
			break
		}
	};
	bb.gI = function (bc) {
		var bid = bj.cf(bc, "d:action");
		switch (Fp.bI(bid, "action")) {
		case "checkfee":
			bj.cu(bc);
			bq.fE("", Fp.bI(bid, "resId"), Fp.bI(bid, "resType"));
			break;
		case "checkin":
			bH.cR("/api/point/dailyTask", {
				type : "json",
				method : "get",
				query : {
					type : 1
				},
				onload : function (bc) {
					if (bc.code == 200) {
						var tc = Fp.tU(bq.gN('<div class="tip s-bg s-bg-14 f-pa">获得 <span class="s-fc6 f-fw1">{0}</span> 积分</div>', bc.point || 0));
						bid.parentNode.appendChild(tc);
						bid.innerHTML = "<i>已签到</i>";
						Fp.fC(bid, "u-btn2-2", "u-btn2-dis");
						window.setTimeout(function () {
							Fp.fx(tc)
						}, 1500);
						var bgU = Fp.bI(bid, "needSafety") == "true";
						if (bgU) {
							bq.vE({
								title : "安全认证提示",
								clazz : "m-layer-w5",
								html : Fp.cV("m-popup-info", {
									tip : "您目前的积分数额较高，为避免安全风险<br>请尽快完成安全认证。",
									oktext : "去安全认证",
									cctext : "我知道了"
								}),
								onaction : function (bc) {
									if (bc.action == "ok") {
										window.open("/#/store/security/");
										bc.stopped = true;
										window.g_cbSafety = function () {
											location.reload()
										}
									}
								}
							})
						}
					} else {}

				}
			});
			break
		}
	};
	bb.bxc = function () {
		var cC = bm.mk(location.search.slice(1)),
		bwZ = cC.pids;
		if (bwZ) {
			bH.cR("/api/song/detail", {
				query : {
					ids : bwZ
				},
				type : "json",
				method : "get",
				onload : function (bc) {
					var bk = bq.bOk(bc.songs, true),
					cK = [];
					if (!bk)
						return;
					bm.bLt(JSON.parse(bwZ), function (bC) {
						var hJ = bm.dY(bk, function (eD) {
								return eD.id == bC
							});
						if (hJ >= 0) {
							cK.push(bk[hJ])
						}
					});
					top.player.addTo(cK, false, true)
				}
			})
		}
	};
	Fp.dN("template-box");
	new bE.Dz
})()
