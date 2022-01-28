import { BigNumber } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class RiraTomozMinterContract extends Contract {
    constructor();
    mintPrice(): Promise<BigNumber>;
    limit(): Promise<BigNumber>;
    mint(count: number): Promise<void>;
}
declare const _default: RiraTomozMinterContract;
export default _default;
//# sourceMappingURL=RiraTomozMinterContract.d.ts.map