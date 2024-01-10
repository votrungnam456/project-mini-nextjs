type TPropsMenu = {
  idMenu: number;
};
type TProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
};
type TCardProduct = {
  product: TProduct;
};
type TCartList = TProduct & {
  quantity: number;
};
type THeader = {
  idMenu: number;
};
