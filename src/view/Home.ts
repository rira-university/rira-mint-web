import { BodyNode, DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import BrowserInfo from "../BrowserInfo";
import RiraTomozMinterContract from "../contracts/RiraTomozMinterContract";
import Wallet from "../klaytn/Wallet";

export default class Home implements View {

    private TODAY_COUNT = 1000;

    private container: DomNode;
    private interval: any;

    private connectButton: DomNode;
    private addressInput: DomNode<HTMLInputElement>;
    private countSelect: DomNode<HTMLSelectElement>;
    private bar: DomNode;
    private progressText: DomNode;

    constructor() {
        this.container = el(".home-view",
            el("main",
                el(".language",
                    el("a.en", "EN", {
                        click: () => BrowserInfo.changeLanguage("en"),
                    }),
                    el("a.kr", "KR", {
                        click: () => BrowserInfo.changeLanguage("ko"),
                    }),
                    el("a.jp", "JP", {
                        click: () => BrowserInfo.changeLanguage("ja"),
                    }),
                ),
                el("h1", "Rira Institute Of Technology"),
                el(".content",
                    el("img", { src: "/images/profile.png", srcset: "/images/profile@2x.png 2x" }),
                    el(".inner",
                        el("p", msg({
                            en: "This is to certify that",
                            ko: "본 학생에게 리라공과대학의 입학을 허가하며",
                            ja: "当学生はリラ工科大学入学を許可します。",
                        })),
                        this.addressInput = el("input", { placeholder: "0x1234...", readonly: "readonly" }),
                        el("p", msg({
                            en: "is registered as a student at our institution.",
                            ko: "이에 본 증서를 수여합니다.",
                            ja: "入学を証明するためにこの証書を授与します。",
                        })),
                        el(".buttons",
                            this.connectButton = el("a", "Wallet Connect", {
                                click: async () => {
                                    if (await Wallet.connected() !== true) {
                                        await Wallet.connect();
                                    }
                                }
                            }),
                            this.countSelect = el("select",
                                el("option", "Mint 1 TOMOZ", { value: "1" }),
                                el("option", "Mint 5 TOMOZ", { value: "5" }),
                            ),
                        ),
                        el(".progress-text-container",
                            el(".progress-text", "Mint Progress"),
                            this.progressText = el(".progress-text"),
                        ),
                        el(".progress",
                            this.bar = el(".progress-bar"),
                        ),
                    ),
                ),
            ),
        ).appendTo(BodyNode);

        Wallet.on("connect", () => this.loadAddress());
        this.progress();
        this.interval = setInterval(() => this.progress(), 1000);
    }

    private async loadAddress() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            this.addressInput.domElement.value = address;
            this.connectButton.empty().appendText("Mint");
            this.connectButton.domElement.onclick = () => {
                RiraTomozMinterContract.mint(parseInt(this.countSelect.domElement.value, 10));
            };
        }
    }

    private async progress() {
        const remains = (await RiraTomozMinterContract.limit()).toNumber();
        const d = this.TODAY_COUNT - remains > this.TODAY_COUNT ? this.TODAY_COUNT : this.TODAY_COUNT - remains;
        this.bar.style({ width: `${d / this.TODAY_COUNT * 100}%` });
        this.progressText.empty().appendText(`${d}/${this.TODAY_COUNT}`);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}