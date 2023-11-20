import { CONFIG } from "../../common";

export const assessPage = ():string => {
  const ua = window.navigator.userAgent.toLocaleLowerCase();
  const reg = /iphone|android|symbianos|windows\sphone/g;

  if(reg.test(ua)) {
    // 手机端
    return CONFIG.ASSESS.MOBILE;
  }else {
    // pc端
    return CONFIG.ASSESS.WEB;
  }
}