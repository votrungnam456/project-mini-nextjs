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
interface CartState {
  items: TCartList[];
}
interface AuthState {
  loginInfo?: {
    id: number,
    username: string,
  },
  isLogin: boolean,
  isErrorLogin: boolean,
}
type TLoginAccount = {
  username: string;
  password: string;
}
type TChangeQuantityPayload = {
  id: number;
  quantity: number;
  typeChange: number;
}