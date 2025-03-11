

export const ProductData = {
    watercan: [
      {
        id: "1",
        name: "Bisleri Water Can",
        price: "₹50",
        image: "./SRC/images/bisleri.png",
        description: "20L Bisleri water can for your daily hydration needs.",
        size: "5l",
        vendor: {
          name: "Bisleri Vendor",
          rating: 4.5,
        },
        relatedProducts: [
          {
            id: "101",
            name: "Aquafina Water Can",
            image: "./SRC/images/aquafina.png",
          },
          {
            id: "102",
            name: "Blue Star Water Can",
            image: "./SRC/images/bluestar.png",
          },
        ],
        Products: [
          {
            id: "107",
            image: "./SRC/images/bisleri.png",
          }, 
          {
            id: "108",
            image: "./SRC/images/ingre.jpeg",
          },
          {
            id: "109",
            image: "./SRC/images/nut.jpeg",
          },
          {
            id: "110",
            image: "./SRC/images/mai.jpeg",
          },
          {
            id: "101",
            image: "./SRC/images/fssai.jpeg",
          },
          {
            id: "111",
            image: "./SRC/images/bar.jpeg",
          },
        ],
      },
      {
        id: "2",
        name: "Aquafina Water Can",
        price: "₹45",
        image: "./SRC/images/aquafina.png",
        description: "High-quality water in a 20L Aquafina can.",
        vendor: {
          name: "Aquafina Supplier",
          rating: 4.3,
        },
        relatedProducts: [
          {
            id: "103",
            name: "Bisleri Water Can",
            image: "./SRC/images/bisleri.png",
          },
          {
            id: "104",
            name: "Blue Star Water Can",
            image: "./SRC/images/bluestar.png",
          },
        ],
        Products: [
          {
            id: "107",
            image: "./SRC/images/aquafina .png",
          },
          {
            id: "108",
            image: "./SRC/images/ingre.jpeg",
          },
          {
            id: "109",
            image: "./SRC/images/nut.jpeg",
          },
          {
            id: "110",
            image: "./SRC/images/mai.jpeg",
          },
          {
            id: "101",
            image: "./SRC/images/fssai.jpeg",
          },
          {
            id: "111",
            image: "./SRC/images/bar.jpeg",
          },
        ],
      },
    ],
    milk: [
      {
        id: "3",
        name: "Aavin Milk",
        price: "₹25",
        image: "./SRC/images/aavinmilk.png",
        description: "500ml fresh Aavin milk, perfect for your tea and coffee.",
        vendor: {
          name: "Aavin Dairy",
          rating: 4.6,
        },
        relatedProducts: [
          {
            id: "105",
            name: "Arokya Milk",
            image: "./SRC/images/arokyamilk.png",
          },
        ],
        Products: [
          {
            id: "107",
            image: "./SRC/images/bisleri.png",
          },
          {
            id: "108",
            image: "./SRC/images/ingre.jpeg",
          },
          {
            id: "109",
            image: "./SRC/images/nut.jpeg",
          },
          {
            id: "110",
            image: "./SRC/images/mai.jpeg",
          },
          {
            id: "101",
            image: "./SRC/images/fssai.jpeg",
          },
          {
            id: "111",
            image: "./SRC/images/bar.jpeg",
          },
        ],
      },
      {
        id: "4",
        name: "Arokya Milk",
        price: "₹30",
        image: "./SRC/images/arokyamilk.png",
        description: "Fresh and nutritious Arokya milk in 500ml packs.",
        vendor: {
          name: "Arokya Dairy",
          rating: 4.4,
        },
        relatedProducts: [
          {
            id: "106",
            name: "Aavin Milk",
            image: "../images/aavinmilk.png",
          },
        ],
        Products: [
          {
            id: "107",
            image: "./SRC/images/bisleri.png",
          },
          {
            id: "108",
            image: "./SRC/images/ingre.jpeg",
          },
          {
            id: "109",
            image: "./SRC/images/nut.jpeg",
          },
          {
            id: "110",
            image: "./SRC/images/mai.jpeg",
          },
          {
            id: "101",
            image: "./SRC/images/fssai.jpeg",
          },
          {
            id: "111",
            image: "./SRC/images/bar.jpeg",
          },
        ],
      },
    ],
  };
  export const DailySupplies = [
    {
      id: "1",
      name: "Water Can",
      image: require("./SRC/Screen/images/water-can.png"),
      screen: "Product",
      type: "watercan",
    },
    {
      id: "2",
      name: "Milk",
      image: require("./SRC/Screen/images/milk-Bottle.png"),
      screen: "Product",
      type: "milk",
    },
    {
      id: "3",
      name: "Flowers",
      image: require("./SRC/Screen/images/flowers.png"),
      screen: "FlowersScreen",
    },
    {
      id: "4",
      name: "Spinach",
      image: require("./SRC/Screen/images/spinach.png"),
      screen: "SpinachScreen",
    },
    {
      id: "5",
      name: "Post-Workout",
      image: require("./SRC/Screen/images/post-workout.png"),
      screen: "PostWorkoutScreen",
    },
    {
      id: "6",
      name: "Tender Coconut",
      image: require("./SRC/Screen/images/tender-coconut.png"),
      screen: "TenderCoconutScreen",
    },
  ];
  
  export const OtherServices = [
    {
      id: "1",
      name: "Laundry",
      image: require("./SRC/Screen/images/laundry.png"),
      screen: "LaundryScreen",
    },
    {
      id: "2",
      name: "Medicines",
      image: require("./SRC/Screen/images/medicines.png"),
      screen: "MedicinesScreen",
    },
    {
      id: "3",
      name: "Magazines",
      image: require("./SRC/Screen/images/magazines.png"),
      screen: "MagazinesScreen",
    },
  ];