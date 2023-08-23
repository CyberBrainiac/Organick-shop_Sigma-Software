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
            shortDescription: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            productDescription: "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
            additionalInfo: "A refrigerator is the best place to store pistachios if you don't plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.",
          },
          {
            id: 2,
            categories: ["fresh", "discount"],
            imgUrl: '/src/assets/images/products-imgs/Banana.png',
            name: 'banana',
            price: 20,
            // discount: 14,
            stars: 3,
            shortDescription: "",
            productDescription: "Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.",
            additionalInfo: "",
          },
        ]
      );
    }, 1000);
  });
}


export {
  getAllProduct,
}