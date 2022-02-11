"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
const RiraTomozMinterContract_1 = __importDefault(require("../contracts/RiraTomozMinterContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Home {
    constructor() {
        this.TODAY_COUNT = 0;
        this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("main", (0, skynode_1.el)(".language", (0, skynode_1.el)("a.en", "EN", {
            click: () => BrowserInfo_1.default.changeLanguage("en"),
        }), (0, skynode_1.el)("a.kr", "KR", {
            click: () => BrowserInfo_1.default.changeLanguage("ko"),
        }), (0, skynode_1.el)("a.jp", "JP", {
            click: () => BrowserInfo_1.default.changeLanguage("ja"),
        })), (0, skynode_1.el)("h1", "Rira Institute Of Technology"), (0, skynode_1.el)(".content", (0, skynode_1.el)("img", { src: "/images/profile.png", srcset: "/images/profile@2x.png 2x" }), (0, skynode_1.el)(".inner", (0, skynode_1.el)("p", (0, msg_js_1.default)({
            en: "This certified that",
            ko: "본 학생에게 리라공과대학의 입학을 허가하며",
            ja: "下記学生のリラ工科大学への合格を証明し、",
        })), this.addressInput = (0, skynode_1.el)("input", { placeholder: "0x1234...", readonly: "readonly" }), (0, skynode_1.el)("p", (0, msg_js_1.default)({
            en: "has been accepted to Rira Institue of Technology",
            ko: "이에 본 증서를 수여합니다.",
            ja: "ここに、本学への入学を許可します。",
        })), (0, skynode_1.el)(".buttons", this.connectButton = (0, skynode_1.el)("a", "Wallet Connect", {
            click: async () => {
                if (await Wallet_1.default.connected() !== true) {
                    await Wallet_1.default.connect();
                }
            }
        }), this.countSelect = (0, skynode_1.el)("select", (0, skynode_1.el)("option", "Mint 1 TOMOZ", { value: "1" }), (0, skynode_1.el)("option", "Mint 5 TOMOZ", { value: "5" }))), (0, skynode_1.el)(".progress-text-container", (0, skynode_1.el)(".progress-text", "Mint Progress"), this.progressText = (0, skynode_1.el)(".progress-text")), (0, skynode_1.el)(".progress", this.bar = (0, skynode_1.el)(".progress-bar")))))).appendTo(skynode_1.BodyNode);
        Wallet_1.default.on("connect", () => this.loadAddress());
        this.progress();
        this.interval = setInterval(() => this.progress(), 1000);
    }
    async loadAddress() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            this.addressInput.domElement.value = address;
            this.connectButton.empty().appendText("Mint");
            this.connectButton.domElement.onclick = () => {
                RiraTomozMinterContract_1.default.mint(parseInt(this.countSelect.domElement.value, 10));
            };
        }
    }
    async progress() {
        const remains = (await RiraTomozMinterContract_1.default.limit()).toNumber();
        const d = this.TODAY_COUNT - remains > this.TODAY_COUNT ? this.TODAY_COUNT : this.TODAY_COUNT - remains;
        this.bar.style({ width: `${d / this.TODAY_COUNT * 100}%` });
        this.progressText.empty().appendText(`${d}/${this.TODAY_COUNT}`);
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map