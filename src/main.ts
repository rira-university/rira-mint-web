import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import BrowserInfo from "./BrowserInfo";
import Home from "./view/Home";

(async () => {
    msg.language = BrowserInfo.language;

    SkyRouter.route("", Home);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();