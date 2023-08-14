export const COLORS = {
  white: "#ffffff",
  black: "#000000",
  lightGray: "#B3B4B6",
  accent: "#FFC231",
  accentRed: "#FB5D2E",
  accentPink: "#F96165",
  blur: "#f1f1f1",
};

export const Categories = [
  {
    name: "Burger",
    image: require("../assets/images/burger_preview_rev_1.png"),
    items: [
      {
        id: 1,
        name: "Classic Burger",
        weight: 120,
        rating: "5.0",
        price: 5,
        isTopOfTheWeek: true,
        image: require("../assets/images/Classic-Burger.png"),
        size: 'Large 8"',
        crust: "Thick Crust",
        delivery: 25,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
      {
        id: 2,
        name: "Aloo Tikki Burger",
        weight: 150,
        rating: "4.5",
        price: 7,
        isTopOfTheWeek: false,
        image: require("../assets/images/aloo-tikki-burger_preview_rev_1.png"),
        size: 'Large 12"',
        crust: "Thick Crust",
        delivery: 20,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
      {
        id: 3,
        name: "Biggie Cheese",
        weight: 250,
        rating: "4.2",
        price: 8,
        isTopOfTheWeek: false,
        image: require("../assets/images/biggie-cheese_preview_rev_1.png"),
        size: 'Large 10"',
        crust: "Thick Crust",
        delivery: 35,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
      {
        id: 4,
        name: "Burger Cranberry",
        weight: 230,
        rating: "4.7",
        price: 6,
        isTopOfTheWeek: true,
        image: require("../assets/images/burger-cranberry_preview_rev_1.png"),
        size: 'Large 9"',
        crust: "Thick Crust",
        delivery: 30,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
      {
        id: 5,
        name: "Turkey Burger ",
        weight: 240,
        rating: "4.5",
        price: 15,
        isTopOfTheWeek: false,
        image: require("../assets/images/Turkey-Burger.png"),
        size: 'Large 10"',
        crust: "Thick Crust",
        delivery: 33,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
      {
        id: 6,
        name: "Blue Cheese Burger",
        weight: 230,
        rating: "4.4",
        price: 10,
        isTopOfTheWeek: true,
        image: require("../assets/images/Blue-Cheese-Burger.png"),
        size: 'Large 8"',
        crust: "Thick Crust",
        delivery: 27,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
      {
        id: 7,
        name: "Salmon Burger",
        weight: 240,
        rating: "4.6",
        price: 11,
        isTopOfTheWeek: true,
        image: require("../assets/images/Salmon-Burger_preview_rev_1.png"),
        size: 'Large 9"',
        crust: "Thick Crust",
        delivery: 25,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
    ],
  },
  {
    name: "Pizza",
    image: require("../assets/images/pizza.png"),
    items: [
      {
        id: 8,
        name: "Pepperoni Pizza",
        weight: 250,
        rating: "5.0",
        price: 18,
        isTopOfTheWeek: true,
        image: require("../assets/images/Pepperoni-Pizza.png"),
        size: 'Large 14"',
        crust: "Thin Crust",
        delivery: 30,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
      {
        id: 9,
        name: "Plain Cheese Pizza",
        weight: 22,
        rating: "4.5",
        price: 25,
        isTopOfTheWeek: false,
        image: require("../assets/images/Plain-Cheese-Pizza.png"),
        size: 'Large 16"',
        crust: "Thin Cheese",
        delivery: 25,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
      {
        id: 10,
        name: "Mexican Green Wave",
        weight: 350,
        rating: "4.2",
        price: 30,
        isTopOfTheWeek: true,
        image: require("../assets/images/Mexican-Green-Wave.png"),
        size: 'Large 15"',
        crust: "Thin Crust",
        delivery: 15,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
      {
        id: 11,
        name: "Neapolitan Pizza",
        weight: 320,
        rating: "4.4",
        price: 28,
        isTopOfTheWeek: false,
        image: require("../assets/images/Neapolitan-pizza.png"),
        size: 'Large 14"',
        crust: "Thin Crust",
        delivery: 25,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },

      {
        id: 12,
        name: "Pizza Chicago",
        weight: 350,
        rating: "4.7",
        price: 20,
        isTopOfTheWeek: true,
        image: require("../assets/images/Pizza-Chicago.png"),
        size: 'Large 10"',
        crust: "Thin Crust",
        delivery: 35,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },

      {
        id: 13,
        name: "Pizza California",
        weight: 350,
        rating: "5.0",
        price: 35,
        isTopOfTheWeek: false,
        image: require("../assets/images/Pizza-California.png"),
        size: 'Large 13"',
        crust: "Thin Crust",
        delivery: 35,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },

      {
        id: 14,
        name: "Pizza Sicilian",
        weight: 350,
        rating: "4.8",
        price: 30,
        isTopOfTheWeek: true,
        image: require("../assets/images/Pizza-Sicilian.png"),
        size: 'Large 12"',
        crust: "Thin Crust",
        delivery: 45,
        ingredients: [
          require("../assets/images/cheese_preview_rev_1.png"),
          require("../assets/images/radish_preview_rev_1.png"),
          require("../assets/images/tomato_preview_rev_1.png"),
          require("../assets/images/flour_preview_rev_1.png"),
          require("../assets/images/beef_preview_rev_1.png"),
        ],
        qty: 1,
        like: false,
      },
    ],
  },
  {
    name: "Soft Drinks",
    image: require("../assets/images/drinks_preview_rev_1.png"),
    items: [
      {
        id: 15,
        name: "Coco Cola",
        weight: 200,
        rating: "5.0",
        price: 3,
        isTopOfTheWeek: true,
        image: require("../assets/images/drinks_preview_rev_1.png"),
        size: "Medium Glass",
        crust: "Small Ice",
        delivery: 10,
        ingredients: [],
        qty: 1,
        like: false,
      },
      {
        id: 16,
        name: "Orange Juice",
        weight: 500,
        rating: "4.5",
        price: 5,
        isTopOfTheWeek: false,
        image: require("../assets/images/orange-juice.png"),
        size: "LArge Glass",
        crust: "Large Ice",
        delivery: 8,
        ingredients: [],
        qty: 1,
        like: false,
      },
      {
        id: 17,
        name: "Mango Juice",
        weight: 150,
        rating: "4.2",
        price: 4,
        isTopOfTheWeek: false,
        image: require("../assets/images/Mango-Juice.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        ingredients: [],
        qty: 1,
        like: false,
      },
      {
        id: 18,
        name: "Watermelon juice",
        weight: 170,
        rating: "4.5",
        price: 5,
        isTopOfTheWeek: true,
        image: require("../assets/images/Watermelon-juice.png"),
        size: "Small Glass",
        crust: "Small Ice",
        delivery: 5,
        ingredients: [],
        qty: 1,
        like: false,
      },
      {
        id: 19,
        name: "Avocado smoothie",
        weight: 200,
        rating: "5.0",
        price: 10,
        isTopOfTheWeek: true,
        image: require("../assets/images/Avocado-smoothie.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        ingredients: [],
        qty: 1,
        like: false,
      },
      {
        id: 20,
        name: "Pepsi",
        weight: 200,
        rating: "4.5",
        price: 3,
        isTopOfTheWeek: false,
        image: require("../assets/images/Pepsi.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        ingredients: [],
        qty: 1,
        like: false,
      },
      {
        id: 21,
        name: "Milk Tea",
        weight: 250,
        rating: "4.2",
        price: 6,
        isTopOfTheWeek: true,
        image: require("../assets/images/Milk-Tea.png"),
        size: "Large Glass",
        crust: "Small Ice",
        delivery: 5,
        ingredients: [],
        qty: 1,
        like: false,
      },
    ],
  },
];
