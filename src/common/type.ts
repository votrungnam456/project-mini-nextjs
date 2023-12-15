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
  setCartList: (data: TCartList[]) => void;
};
type TCartList = TProduct & {
  quantity: number;
};
type THeader = {
  idMenu: number;
  cartList?: TCartList[];
};
