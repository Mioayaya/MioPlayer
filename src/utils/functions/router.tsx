import { ReactElement, Suspense } from "react";
import { Navigate } from "react-router";

import MioNotFound from "../../components/404";
import { Irouter } from "../../type";

export const lazyLoad = (children: ReactElement) => {
  return <Suspense fallback={<>loading···</>}>{children}</Suspense>
}

export const toRoute = (routerList:Irouter.IrouterElement[]):Irouter.IrouterList[] => {
  const firstItem:Irouter.IrouterList = {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to={routerList[0].path} />
      },
      {
        path: '*',
        element: lazyLoad(<MioNotFound />)
      }
    ]
  }

  const _route:Irouter.IrouterList[] = [];
  _route.push(firstItem);

  for(let i in routerList) {
    let item:Irouter.IrouterList = {
      path: routerList[i].path,
      element: routerList[i].element
    }
    const child = routerList[i].children;
    if(child) {
      item.children = [];
      for(let j in child) {
        if(j==='0') {
          item.children.push({
            index: true,
            element: <Navigate to={child[j].path} />
          })
          item.children.push({
            path: '*',
            element: lazyLoad(<MioNotFound />)
          })
        }
        item.children.push({
          path: child[j].path,
          element: child[j].element
        })    
      }
    }
    _route.push(item);
  }

  return _route;
}