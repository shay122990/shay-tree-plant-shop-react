import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 12.99,
    image: img1,
    description:
      "The snake plant is a popular indoor plant known for its air-purifying qualities.",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 24.99,
    image: img2,
    description:
      "The fiddle leaf fig is a trendy houseplant with large, glossy leaves.",
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: 19.99,
    image: img3,
    description:
      "The ZZ plant is a low-maintenance houseplant that thrives in low-light conditions.",
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    price: 29.99,
    image: img4,
    description:
      "The Monstera Deliciosa, also known as the Swiss cheese plant, is famous for its unique leaves.",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 17.99,
    image: img5,
    description:
      "The rubber plant is a popular choice for indoor gardens due to its attractive foliage.",
  },
  {
    id: 6,
    name: "Pothos",
    price: 14.99,
    image: img6,
    description:
      "Pothos, also known as devil's ivy, is an easy-to-care-for houseplant with trailing vines.",
  },
  {
    id: 7,
    name: "Spider Plant",
    price: 11.99,
    image: img7,
    description:
      "The spider plant is a classic choice for hanging baskets with its arching leaves.",
  },
  {
    id: 8,
    name: "Peace Lily",
    price: 21.99,
    image: img8,
    description:
      "The peace lily is a popular choice for its elegant white flowers and air-purifying qualities.",
  },
  {
    id: 9,
    name: "Aloe Vera",
    price: 9.99,
    image: img9,
    description:
      "Aloe vera is a versatile plant known for its soothing gel, commonly used in skincare products.",
  },
  {
    id: 10,
    name: "Jade Plant",
    price: 15.99,
    image: img10,
    description:
      "The jade plant, also known as the money tree, is a symbol of prosperity and good luck.",
  },
  {
    id: 11,
    name: "Bird of Paradise",
    price: 34.99,
    image: img11,
    description:
      "The bird of paradise plant is known for its striking orange and blue flowers resembling a bird in flight.",
  },
];
const categories = [
  {
    name: "Low-light",
    plantIds: [1, 3, 7, 10],
  },
  {
    name: "Indoor",
    plantIds: [plants.length],
  },
  {
    name: "Outdoor",
    plantIds: [11, 9],
  },
  {
    name: "Tropical",
    plantIds: [11, 4],
  },
  {
    name: "Air-Purifiers",
    plantIds: [1, 3, 7],
  },
];
export { plants, categories };
