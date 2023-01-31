export const foodMenu = [
  {
    id: 1,
    pic: require("assets/home/pad_thai.jpg"),
    name: "Tomyum",
    type: "soup",
    price: "20.00",
    description:
      "Tomyum is one of the popular thai food that most people around the world claim that this food is so spicy and delicious at the same time",
  },
  {
    id: 2,
    pic: require("assets/home/pad_thai.jpg"),
    name: "Green curry",
    type: "curry",
    price: "20.00",
    description:
      "Curry is one of the popular thai food that most people around the world claim that this food is so spicy and delicious at the same time",
  },
  {
    id: 3,
    pic: require("assets/home/pad_thai.jpg"),
    name: "Sweet and Sour",
    type: "wok",
    price: "20.00",
    description:
      "Sweet and Sour is one of the popular thai food that most people around the world claim that this food is so spicy and delicious at the same time",
  },
  {
    id: 4,
    pic: require("assets/home/pad_thai.jpg"),
    name: "Yum Gai Zab",
    type: "salad",
    price: "20.00",
    description:
      "Yum Gai Zab is one of the popular thai food that most people around the world claim that this food is so spicy and delicious at the same time",
  },
  {
    id: 5,
    pic: require("assets/home/pad_thai.jpg"),
    name: "Sizzling Meat",
    type: "sizzling",
    price: "20.00",
    description:
      "Sizzling Meat is one of the popular thai food that most people around the world claim that this food is so spicy and delicious at the same time",
  },
  {
    id: 6,
    pic: require("assets/home/pad_thai.jpg"),
    name: "Thai Fried Rice",
    type: "riceAndNoodle",
    price: "20.00",
    description:
      "Thai Fried Rice is one of the popular thai food that most people around the world claim that this food is so spicy and delicious at the same time",
  },
  {
    id: 7,
    pic: require("assets/home/pad_thai.jpg"),
    name: "Satay Chicken",
    type: "appetizers",
    price: "20.00",
    description:
      "Satay chicken is one of the popular thai food that most people around the world claim that this food is so spicy and delicious at the same time",
  },
  {
    id: 8,
    pic: require("assets/home/pad_thai.jpg"),
    name: "Ice-cream Sundayn",
    type: "dessert",
    price: "20.00",
    description:
      "Ice-cream Sundayn is one of the popular thai food that most people around the world claim that this food is so spicy and delicious at the same time",
  },
];

export const menuTypes = [
  {
    id: 2,
    type: "soup",
    label: "Soup",
    picPath: require("assets/menu_types/tom_yum.jpg"),
  },
  {
    id: 3,
    type: "curry",
    label: "Curry",
    picPath: require("assets/menu_types/green_curry.jpg"),
  },
  {
    id: 4,
    type: "wok",
    label: "Wok",
    picPath: require("assets/menu_types/wok.jpg"),
  },
  {
    id: 5,
    type: "salad",
    label: "Thai Salad",
    picPath: require("assets/menu_types/sizzling.jpg"),
  },
  {
    id: 6,
    type: "sizzling",
    label: "Sizzling",
    picPath: require("assets/menu_types/sizzling.jpg"),
  },
  {
    id: 7,
    type: "riceAndNoodle",
    label: "Rice & Noodle",
    picPath: require("assets/menu_types/pad_thai.jpg"),
  },
  {
    id: 8,
    type: "appetizers",
    label: "Appetizers",
    picPath: require("assets//menu_types/thai_salad.jpg"),
  },
  {
    id: 9,
    type: "dessert",
    label: "Dessert",
    picPath: require("assets//menu_types/icecream.jpg"),
  },
];

export const showMenuTypes = [
  { id: 1, type: "all", label: "All" },
  ...menuTypes,
];
