import { Irouter } from "../../type";

import MioTest from "../../components/router-test";
import MioMobHome from "../../mobile/home";
import MioHome from "../../pages/home";
import MioMobHomeTest from "../../mobile/home/c-pages/home-test";

// pc路由
export const webRouter:Irouter.IrouterElement[] = [
  {
    key: 'web_0',
    path: '/home',
    element: <MioHome />,
    children: []
  },
  {
    key: 'web_1',
    path: '/test',
    element: <MioTest />,
    children: null
  }
];

// 手机端路由
export const mobileRouter:Irouter.IrouterElement[] = [
  {
    key: 'mob_0',
    path: '/home',
    element: <MioMobHome />,
    children: [{
      key: 'mob_0_0',
      path: '/home/test',
      element: <MioMobHomeTest />
    }]
  },
  {
    key: 'mob_1',
    path: '/test',
    element: <MioTest />,
    children: null
  }
];