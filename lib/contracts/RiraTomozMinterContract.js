"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const RiraTomozMinter_json_1 = __importDefault(require("./abi/artifacts/contracts/RiraTomozMinter.sol/RiraTomozMinter.json"));
const Contract_1 = __importDefault(require("./Contract"));
class RiraTomozMinterContract extends Contract_1.default {
    constructor() {
        super("0x8FFc61c21553D893BBA612F9895547B5B95A9AE1", RiraTomozMinter_json_1.default.abi);
    }
    async mintPrice() {
        return bignumber_1.BigNumber.from(await this.runMethod("mintPrice"));
    }
    async remains() {
        return bignumber_1.BigNumber.from(await this.runMethod("remains"));
    }
}
exports.default = new RiraTomozMinterContract();
//# sourceMappingURL=RiraTomozMinterContract.js.map