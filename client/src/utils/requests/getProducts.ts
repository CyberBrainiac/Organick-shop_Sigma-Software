function getAllProduct() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        [
          {
            id: 1,
            categories: ["vegetable", "discount",],
            imgUrl: '/src/assets/images/products-imgs/Broccoli.png',
            name: 'broccoli',
            price: 20,
            discount: 13,
            stars: 5,
          },
          {
            id: 2,
            categories: ["fresh", "discount"],
            imgUrl: '/src/assets/images/products-imgs/Banana.png',
            name: 'banana',
            price: 20,
            discount: 14,
            stars: 4,
          },
        ]
      );
    }, 1000);
  });
}

export {
  getAllProduct,
}