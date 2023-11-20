import { CONFIG } from "../common";
import { Irouter } from "../type";
import { assessFunc } from "../utils";
import routeMob from "./settings/mobile";
import routeWeb from "./settings/web";

const assessFlag = assessFunc.assessPage();
let route:Irouter.IrouterList[];
assessFlag===CONFIG.ASSESS.MOBILE?route=routeMob:route=routeWeb;

export default route;
