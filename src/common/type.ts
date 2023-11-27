type TPropsMenu = {
  idMenu: number;
}
type TProduct = {
  id: number;
  name: string;
  price: string;
  redirect?: string;
  image: string;
}
type TCardProduct = {
  product: TProduct
}