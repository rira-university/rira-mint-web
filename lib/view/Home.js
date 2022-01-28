"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
class Home {
    constructor() {
        this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("main", (0, skynode_1.el)("h1", "Rira Institute Of Technology"), (0, skynode_1.el)(".content", (0, skynode_1.el)("img", { src: "/images/profile.png", srcset: "/images/profile@2x.png 2x" }), (0, skynode_1.el)(".inner", (0, skynode_1.el)("p", (0, msg_js_1.default)({
            en: "This is to certify that",
            ko: "본 학생은 리라공과대학의 입학을 허가하며",
            ja: "当学生はリラ工科大学入学を許可します。",
        })), (0, skynode_1.el)("p", (0, msg_js_1.default)({
            en: "is registered as a student at our institution.",
            ko: "이에 본 증서를 수여합니다.",
            ja: "入学を証明するためにこの証書を授与します。",
        })), (0, skynode_1.el)("a", "Wallet Connect"), (0, skynode_1.el)("select", (0, skynode_1.el)("option", "Mint 1 TOMOZ"), (0, skynode_1.el)("option", "Mint 5 TOMOZ")), (0, skynode_1.el)(".progress", this.bar = (0, skynode_1.el)(".progress-bar"), (0, skynode_1.el)(".text-container", (0, skynode_1.el)(".progress-text", "Mint Progress"), this.progressText = (0, skynode_1.el)(".progress-text"))))))).appendTo(skynode_1.BodyNode);
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map