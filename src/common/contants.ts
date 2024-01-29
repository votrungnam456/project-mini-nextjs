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
    review: ['this product 1 is a good choice', 'cool product'],
  },
  {
    id: 2,
    name: "product 2",
    price: "210000",
    image:
      "https://sanbox-integration.foloosi.com/wp-content/uploads/2022/12/istockphoto-491520707-612x612-1.jpeg",
    review: ['this product 2is the best', 'best product'],
  },
]
const loginList = [
  {
    id: 1,
    username: 'user1',
    password: '123',
  },
  {
    id: 2,
    username: 'user2',
    password: '123',
  }
]
export { menu, product, loginList };