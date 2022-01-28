import { BigNumber } from "@ethersproject/bignumber";
import RiraTomozMinterArtifact from "./abi/artifacts/contracts/RiraTomozMinter.sol/RiraTomozMinter.json";
import Contract from "./Contract";

class RiraTomozMinterContract extends Contract {

    constructor() {
        super("0x8FFc61c21553D893BBA612F9895547B5B95A9AE1", RiraTomozMinterArtifact.abi);
    }

    public async mintPrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("mintPrice"));
    }

    public async remains(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("remains"));
    }
}

export default new RiraTomozMinterContract();
