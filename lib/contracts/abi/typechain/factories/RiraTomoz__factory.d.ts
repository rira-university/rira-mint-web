import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { RiraTomoz } from "../RiraTomoz";
export declare class RiraTomoz__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<RiraTomoz>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): RiraTomoz;
    connect(signer: Signer): RiraTomoz__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RiraTomoz;
}
//# sourceMappingURL=RiraTomoz__factory.d.ts.map