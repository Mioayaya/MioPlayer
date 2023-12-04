export interface Islice {
  userSlice: IuserSlice
}

/** user */ 

export interface IuserData {
  [s:string]: string
}

export interface IuserSlice {
  isSign: boolean
  userData: IuserData | {}
}

/** --user--end-- */

