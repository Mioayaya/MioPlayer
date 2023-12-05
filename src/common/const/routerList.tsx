import { lazy } from "react";
import { Irouter } from "../../type";


const MioHome = lazy(() => import("../../pages/home"));
const MioSearch = lazy(() => import("../../pages/search"));

const MioTest = lazy(() => import("../../components/router-test"));
const MioMobHome = lazy(() => import("../../mobile/home"));

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
    path: '/search',
    element: <MioSearch/>,
    children: null
  },
];

// 手机端路由
export const mobileRouter:Irouter.IrouterElement[] = [
  {
    key: 'mob_0',
    path: '/home',
    element: <MioMobHome />,
    children: null
    // children: [{
    //   key: 'mob_0_0',
    //   path: '/home/test',
    //   element: <MioMobHomeTest />
    // }]
  },
  {
    key: 'mob_1',
    path: '/test',
    element: <MioTest />,
    children: null
  }
];