"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const ExtWallet_1 = __importDefault(require("../klaytn/ExtWallet"));
const RiraTomozMinter_json_1 = __importDefault(require("./abi/artifacts/contracts/RiraTomozMinter.sol/RiraTomozMinter.json"));
const Contract_1 = __importDefault(require("./Contract"));
class RiraTomozMinterContract extends Contract_1.default {
    constructor() {
        super("0x2Ab28bbd424d5ecBA1f3D6381026B3cD16B4bE59", RiraTomozMinter_json_1.default.abi);
    }
    async mintPrice() {
        return bignumber_1.BigNumber.from(await this.runMethod("mintPrice"));
    }
    async limit() {
        return bignumber_1.BigNumber.from(await this.runMethod("limit"));
    }
    async mint(count) {
        const limit = (await this.limit()).toNumber();
        if (count > limit) {
            alert(`남은 개수는 ${limit}개입니다.`);
        }
        else {
            const price = (await this.mintPrice()).mul(count);
            const balance = await ExtWallet_1.default.loadBalance();
            if (balance.lt(price)) {
                alert("Klay가 부족합니다.");
            }
            else {
                await this.runWalletMethodWithValue(price, "mint", count);
            }
        }
    }
}
exports.default = new RiraTomozMinterContract();
//# sourceMappingURL=RiraTomozMinterContract.js.map