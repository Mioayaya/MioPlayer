
export const getImgBySize = (url:string,size:number) => {
  return `${url}?param=${size}y${size}`;
}