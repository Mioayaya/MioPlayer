import { ReactElement, Suspense, lazy } from "react";
import { Navigate } from "react-router";
import { Irouter } from "../../type";

const MioNotFound = lazy(() => import('../../components/404'))

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

  for(const i in routerList) {
    const item:Irouter.IrouterList = {
      path: routerList[i].path,
      element: lazyLoad(routerList[i].element)
    }
    const child = routerList[i].children;
    if(child) {
      item.children = [];
      for(const j in child) {
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
          element: lazyLoad(child[j].element)
        })    
      }
    }
    _route.push(item);
  }

  return _route;
}