import { BodyNode, DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";

export default class Home implements View {

    private container: DomNode;
    private bar: DomNode;
    private progressText: DomNode;

    constructor() {
        this.container = el(".home-view",
            el("main",
                el("h1", "Rira Institute Of Technology"),
                el(".content",
                    el("img", { src: "/images/profile.png", srcset: "/images/profile@2x.png 2x" }),
                    el(".inner",
                        el("p", msg({
                            en: "This is to certify that",
                            ko: "본 학생은 리라공과대학의 입학을 허가하며",
                            ja: "当学生はリラ工科大学入学を許可します。",
                        })),
                        el("p", msg({
                            en: "is registered as a student at our institution.",
                            ko: "이에 본 증서를 수여합니다.",
                            ja: "入学を証明するためにこの証書を授与します。",
                        })),
                        el("a", "Wallet Connect"),
                        el("select",
                            el("option", "Mint 1 TOMOZ"),
                            el("option", "Mint 5 TOMOZ"),
                        ),
                        el(".progress",
                            this.bar = el(".progress-bar"),
                            el(".text-container",
                                el(".progress-text", "Mint Progress"),
                                this.progressText = el(".progress-text"),
                            ),
                        ),
                    ),
                ),
            ),
        ).appendTo(BodyNode);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}