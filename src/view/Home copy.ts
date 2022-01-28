import { BodyNode, DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import CommonUtil from "../CommonUtil";
import RiraTomozMinterContract from "../contracts/RiraTomozMinterContract";
import Wallet from "../klaytn/Wallet";

export default class old_Home implements View {

    private TODAY_COUNT = 4000;

    private container: DomNode;
    private interval: any;

    private mintPrice: DomNode;
    private balance: DomNode;
    private connectButton: DomNode;
    private addressInput: DomNode<HTMLInputElement>;
    private bar: DomNode;
    private progressText: DomNode;

    constructor() {
        this.container = el(".home-view",
            this.mintPrice = el(".mint-price", "mint price:"),
            this.balance = el(".mint-price", "your mix:"),
            el("img.logo", { src: "/images/logo.png" }),
            this.connectButton = el("button.connect", "Connect Wallet", {
                click: async () => {
                    if (await Wallet.connected() !== true) {
                        await Wallet.connect();
                    }
                }
            }),
            el(".input-container", el(".label", "Address"), this.addressInput = el("input.address", { placeholder: "0x1234...", readonly: "readonly" })),
            el("button.mint", "Mint", {
                click: async () => {
                    //await RiraTomozMinterContract.mint(1);
                }
            }),
            el(".bottom-container",
                el("a.go-klubs", el("img", { src: "/images/klubs.png" }), el("a.link", "Go to Klubs"), { href: "https://klu.bs/pfp/0x0a412f094C15010bbd413BE0fC07b8da26b0B05F", target: "_blank" }),
                el(".progress", this.bar = el(".progress__bar"), el(".text-container", el(".progress-text", "mint progress"), this.progressText = el(".progress-text"))),
                el("a", el("a.go-home"), el("img", { src: "/images/home.png" }), el("a.link", "Go to Home"), { href: "https://klits.xyz", target: "_blank" }),
            )
        ).appendTo(BodyNode);

        this.loadPrice();
        Wallet.on("connect", () => this.loadBalance());
        this.progress();
        this.interval = setInterval(() => this.progress(), 1000);
    }

    private async loadPrice() {
        const price = await RiraTomozMinterContract.mintPrice();
        this.mintPrice.empty().appendText(`mint price: ${CommonUtil.numberWithCommas(utils.formatEther(price))} MIX`);
    }

    private async loadBalance() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            this.connectButton.style({ display: "none" });
            this.addressInput.domElement.value = address;
            //const balance = await MixContract.balanceOf(address);
            //this.balance.empty().appendText(`your mix: ${CommonUtil.numberWithCommas(utils.formatEther(balance))} MIX`);
        }
    }

    private async progress() {
        const remains = (await RiraTomozMinterContract.remains()).toNumber();
        this.bar.style({ width: `${(this.TODAY_COUNT - remains) / this.TODAY_COUNT * 100}%` });
        this.progressText.empty().appendText(`${this.TODAY_COUNT - remains}/${this.TODAY_COUNT}`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}