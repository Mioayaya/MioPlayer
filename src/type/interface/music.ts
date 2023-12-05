export interface Isong {
  id: number
  name: string
  picUrl: string
  song: {
    artists: {
      id: string
      name: string
      img1v1Url: string
      [str:string]: any
    }[]
    [str:string]: any
  }
  [str:string]: any
}