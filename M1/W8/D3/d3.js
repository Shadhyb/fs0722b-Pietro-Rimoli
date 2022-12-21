var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(tasseinps, tasseirpef) {
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    return Tasse;
}());
var commerciante = /** @class */ (function (_super) {
    __extends(commerciante, _super);
    function commerciante(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        var _this = _super.call(this, tasseinps, tasseirpef) || this;
        _this.codredd = codredd;
        _this.redditoannuolordo = redditoannuolordo;
        return _this;
    }
    commerciante.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * this.codredd;
    };
    commerciante.prototype.getTasseInps = function () {
        return this.redditoannuolordo * this.tasseinps;
    };
    commerciante.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * this.tasseirpef;
    };
    commerciante.prototype.getredditoannuonetto = function () {
        return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd;
    };
    return commerciante;
}(Tasse));
var liberoProfessionista = /** @class */ (function (_super) {
    __extends(liberoProfessionista, _super);
    function liberoProfessionista(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        var _this = _super.call(this, tasseinps, tasseirpef) || this;
        _this.codredd = codredd;
        _this.redditoannuolordo = redditoannuolordo;
        return _this;
    }
    liberoProfessionista.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * this.codredd;
    };
    liberoProfessionista.prototype.getTasseInps = function () {
        return this.redditoannuolordo * this.tasseinps;
    };
    liberoProfessionista.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * this.tasseirpef;
    };
    liberoProfessionista.prototype.getredditoannuonetto = function () {
        return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd;
    };
    return liberoProfessionista;
}(Tasse));
var artigiano = /** @class */ (function (_super) {
    __extends(artigiano, _super);
    function artigiano(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        var _this = _super.call(this, tasseinps, tasseirpef) || this;
        _this.codredd = codredd;
        _this.redditoannuolordo = redditoannuolordo;
        return _this;
    }
    artigiano.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * this.codredd;
    };
    artigiano.prototype.getTasseInps = function () {
        return this.redditoannuolordo * this.tasseinps;
    };
    artigiano.prototype.getTasseIrpef = function () {
        return this.redditoannuolordo * this.tasseirpef;
    };
    artigiano.prototype.getredditoannuonetto = function () {
        return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd;
    };
    return artigiano;
}(Tasse));
var luca = new commerciante(0.58, 20000, 0.25, 0.35);
var mario = new liberoProfessionista(0.78, 30000, 0.15, 0.20);
var raffaele = new artigiano(0.49, 15000, 0.20, 0.30);
console.log("il reddito a netto delle tasse INPS è:" + luca.getTasseInps());
console.log("il reddito a netto delle tasse IRPEF è:" + luca.getTasseIrpef());
console.log("l'utile a netto delle tasse è:" + luca.getUtileTasse());
console.log("il reddito netto è:" + luca.getredditoannuonetto());
console.log("il reddito a netto delle tasse INPS è:" + mario.getTasseInps());
console.log("il reddito a netto delle tasse IRPEF è:" + mario.getTasseIrpef());
console.log("l'utile a netto è:" + mario.getUtileTasse());
console.log("il reddito netto è:" + mario.getredditoannuonetto());
console.log("il reddito a netto delle tasse INPS è:" + raffaele.getTasseInps());
console.log("il reddito a netto delle tasse IRPEF è:" + raffaele.getTasseIrpef());
console.log("l'utile a netto delle tasse è:" + raffaele.getUtileTasse());
console.log("il reddito netto è:" + raffaele.getredditoannuonetto());
