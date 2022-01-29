import { BigNumber } from "@ethersproject/bignumber";
import ExtWallet from "../klaytn/ExtWallet";
import RiraTomozMinterArtifact from "./abi/artifacts/contracts/RiraTomozMinter.sol/RiraTomozMinter.json";
import Contract from "./Contract";

class RiraTomozMinterContract extends Contract {

    constructor() {
        super("0xc36291d43d7c33b3d261e775d712404c3e386db9", RiraTomozMinterArtifact.abi);
    }

    public async mintPrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("mintPrice"));
    }

    public async limit(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("limit"));
    }

    public async mint(count: number): Promise<void> {
        const limit = (await this.limit()).toNumber();
        if (count > limit) {
            alert(`남은 개수는 ${limit}개입니다.`);
        } else {
            const price = (await this.mintPrice()).mul(count);
            const balance = await ExtWallet.loadBalance();
            if (balance.lt(price)) {
                alert("Klay가 부족합니다.");
            } else {
                await this.runWalletMethodWithValue(price, "mint", count);
            }
        }
    }
}

export default new RiraTomozMinterContract();
