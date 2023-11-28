const menu = [
  {
    id: 1,
    name: "HomePage",
    redirect: "/",
  },
  {
    id: 2,
    name: "Product",
    redirect: "/product/list",
  },
];
const product = [
  {
    id: 1,
    name: "product 1",
    price: "10000",
    image:
      "https://sanbox-integration.foloosi.com/wp-content/uploads/2022/12/istockphoto-491520707-612x612-1.jpeg",
    redirect: "/item?id=1",
  },
  {
    id: 2,
    name: "product 2",
    price: "210000",
    image:
      "https://sanbox-integration.foloosi.com/wp-content/uploads/2022/12/istockphoto-491520707-612x612-1.jpeg",
    redirect: "/item?id=2",
  },
]

export { menu, product };