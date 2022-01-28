import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { RiraTomozMinter } from "../RiraTomozMinter";
export declare class RiraTomozMinter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_nft: string, _feeTo: string, overrides?: Overrides): Promise<RiraTomozMinter>;
    getDeployTransaction(_nft: string, _feeTo: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): RiraTomozMinter;
    connect(signer: Signer): RiraTomozMinter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RiraTomozMinter;
}
//# sourceMappingURL=RiraTomozMinter__factory.d.ts.map