"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiraTomozMinter__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class RiraTomozMinter__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_nft, _feeTo, overrides) {
        return super.deploy(_nft, _feeTo, overrides || {});
    }
    getDeployTransaction(_nft, _feeTo, overrides) {
        return super.getDeployTransaction(_nft, _feeTo, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.RiraTomozMinter__factory = RiraTomozMinter__factory;
const _abi = [
    {
        constant: true,
        inputs: [],
        name: "feeTo",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "addrs",
                type: "address[]",
            },
        ],
        name: "removeWhitelist2",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_limit",
                type: "uint256",
            },
        ],
        name: "setLimit",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
        ],
        name: "whitelist2",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "nft",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "mintPrice",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "addrs",
                type: "address[]",
            },
        ],
        name: "removeWhitelist1",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "maxCount",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "count",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_maxCount",
                type: "uint256",
            },
        ],
        name: "setMaxCount",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "limit",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "step",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "addrs",
                type: "address[]",
            },
        ],
        name: "addWhitelist2",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "addrs",
                type: "address[]",
            },
        ],
        name: "addWhitelist1",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_feeTo",
                type: "address",
            },
        ],
        name: "setFeeTo",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_price",
                type: "uint256",
            },
        ],
        name: "setMintPrice",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_step",
                type: "uint256",
            },
        ],
        name: "setStep",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
        ],
        name: "whitelist1",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                name: "_nft",
                type: "address",
            },
            {
                name: "_feeTo",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
];
const _bytecode = "0x60806040526802b5e3af16b18800006002556005600455600060065534801561002757600080fd5b50604051604080611b148339810180604052604081101561004757600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a381600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050611963806101b16000396000f3fe6080604052600436106101355760003560e01c8063a0712d68116100ab578063ecb353db1161006f578063ecb353db146105d0578063f2fde38b14610656578063f46901ed146106a7578063f4a0a528146106f8578063f8dcbddb14610733578063fcdf3ae21461076e57610135565b8063a0712d681461048b578063a35e617f146104b9578063a4d66daf146104f4578063e25fe1751461051f578063ebbcf2671461054a57610135565b80636817c76c116100fd5780636817c76c14610312578063715018a61461033d5780638da5cb5b146103545780638f32d59b146103ab5780639ac406c7146103da5780639ef2d87a1461046057610135565b8063017e7e581461013a5780631e75da071461019157806327ea6f2b146102175780633ad504c01461025257806347ccca02146102bb575b600080fd5b34801561014657600080fd5b5061014f6107d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019d57600080fd5b50610215600480360360208110156101b457600080fd5b81019080803590602001906401000000008111156101d157600080fd5b8201836020820111156101e357600080fd5b8035906020019184602083028401116401000000008311171561020557600080fd5b90919293919293905050506107fd565b005b34801561022357600080fd5b506102506004803603602081101561023a57600080fd5b8101908080359060200190929190505050610928565b005b34801561025e57600080fd5b506102a16004803603602081101561027557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109ac565b604051808215151515815260200191505060405180910390f35b3480156102c757600080fd5b506102d06109cc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561031e57600080fd5b506103276109f2565b6040518082815260200191505060405180910390f35b34801561034957600080fd5b506103526109f8565b005b34801561036057600080fd5b50610369610b31565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103b757600080fd5b506103c0610b5a565b604051808215151515815260200191505060405180910390f35b3480156103e657600080fd5b5061045e600480360360208110156103fd57600080fd5b810190808035906020019064010000000081111561041a57600080fd5b82018360208201111561042c57600080fd5b8035906020019184602083028401116401000000008311171561044e57600080fd5b9091929391929390505050610bb1565b005b34801561046c57600080fd5b50610475610cdc565b6040518082815260200191505060405180910390f35b6104b7600480360360208110156104a157600080fd5b8101908080359060200190929190505050610ce2565b005b3480156104c557600080fd5b506104f2600480360360208110156104dc57600080fd5b8101908080359060200190929190505050611042565b005b34801561050057600080fd5b506105096110c6565b6040518082815260200191505060405180910390f35b34801561052b57600080fd5b506105346110cc565b6040518082815260200191505060405180910390f35b34801561055657600080fd5b506105ce6004803603602081101561056d57600080fd5b810190808035906020019064010000000081111561058a57600080fd5b82018360208201111561059c57600080fd5b803590602001918460208302840111640100000000831117156105be57600080fd5b90919293919293905050506110d2565b005b3480156105dc57600080fd5b50610654600480360360208110156105f357600080fd5b810190808035906020019064010000000081111561061057600080fd5b82018360208201111561062257600080fd5b8035906020019184602083028401116401000000008311171561064457600080fd5b90919293919293905050506111fd565b005b34801561066257600080fd5b506106a56004803603602081101561067957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611328565b005b3480156106b357600080fd5b506106f6600480360360208110156106ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113ae565b005b34801561070457600080fd5b506107316004803603602081101561071b57600080fd5b810190808035906020019092919050505061146c565b005b34801561073f57600080fd5b5061076c6004803603602081101561075657600080fd5b81019080803590602001909291905050506114f0565b005b34801561077a57600080fd5b506107bd6004803603602081101561079157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611574565b604051808215151515815260200191505060405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610805610b5a565b610877576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60008090505b828290508110156109235760006008600085858581811061089a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061091c60018261159490919063ffffffff16565b905061087d565b505050565b610930610b5a565b6109a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060058190555050565b60086020528060005260406000206000915054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b610a00610b5a565b610a72576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b610bb9610b5a565b610c2b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60008090505b82829050811015610cd757600060076000858585818110610c4e57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610cd060018261159490919063ffffffff16565b9050610c31565b505050565b60045481565b6005548111158015610cf657506004548111155b610cff57600080fd5b610d148160025461161c90919063ffffffff16565b3414610d1f57600080fd5b6001600654148015610d7a5750600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b80610ddc57506002600654148015610ddb5750600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b5b80610de957506003600654145b610df257600080fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e5c57600080fd5b505afa158015610e70573d6000803e3d6000fd5b505050506040513d6020811015610e8657600080fd5b8101908080519060200190929190505050905060008190505b610eb2838361159490919063ffffffff16565b811015610fb957600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610f6257600080fd5b505af1158015610f76573d6000803e3d6000fd5b505050506040513d6020811015610f8c57600080fd5b810190808051906020019092919050505050610fb260018261159490919063ffffffff16565b9050610e9f565b50600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015611022573d6000803e3d6000fd5b50611038826005546116a290919063ffffffff16565b6005819055505050565b61104a610b5a565b6110bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060048190555050565b60055481565b60065481565b6110da610b5a565b61114c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60008090505b828290508110156111f85760016008600085858581811061116f57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506111f160018261159490919063ffffffff16565b9050611152565b505050565b611205610b5a565b611277576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60008090505b828290508110156113235760016007600085858581811061129a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061131c60018261159490919063ffffffff16565b905061127d565b505050565b611330610b5a565b6113a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6113ab816116ec565b50565b6113b6610b5a565b611428576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b611474610b5a565b6114e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060028190555050565b6114f8610b5a565b61156a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060068190555050565b60076020528060005260406000206000915054906101000a900460ff1681565b600080828401905083811015611612576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008083141561162f576000905061169c565b600082840290508284828161164057fe5b0414611697576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806119176021913960400191505060405180910390fd5b809150505b92915050565b60006116e483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611830565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611772576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806118f16026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008383111582906118dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156118a2578082015181840152602081019050611887565b50505050905090810190601f1680156118cf5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a72305820dfbbc004cd977aff99d4cc6a1d48da251acd9b24775e08179c3c9f640ac414800029";
//# sourceMappingURL=RiraTomozMinter__factory.js.map