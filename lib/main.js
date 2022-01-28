"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const msg_js_1 = __importDefault(require("msg.js"));
const skyrouter_1 = require("skyrouter");
const BrowserInfo_1 = __importDefault(require("./BrowserInfo"));
const Home_1 = __importDefault(require("./view/Home"));
(async () => {
    msg_js_1.default.language = BrowserInfo_1.default.language;
    skyrouter_1.SkyRouter.route("", Home_1.default);
    if (sessionStorage.__spa_path) {
        skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();
//# sourceMappingURL=main.js.map