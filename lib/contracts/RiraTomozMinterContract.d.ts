import { BigNumber } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class RiraTomozMinterContract extends Contract {
    constructor();
    mintPrice(): Promise<BigNumber>;
    remains(): Promise<BigNumber>;
}
declare const _default: RiraTomozMinterContract;
export default _default;
//# sourceMappingURL=RiraTomozMinterContract.d.ts.map