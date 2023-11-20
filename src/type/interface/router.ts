import { ReactElement } from 'react';

export interface IrouterElementChild {
  key: string
  path: string
  element: ReactElement
  children?: null | Array<object>
}

export interface IrouterElement {
  key: string
  path: string
  element: ReactElement
  children: null | IrouterElementChild[]
}

// 路由

export interface IrouterListChild {
  index?: boolean
  path?: string
  element: ReactElement
}

export interface IrouterList {
  path: string
  element?: ReactElement
  children?: IrouterListChild[]
}
