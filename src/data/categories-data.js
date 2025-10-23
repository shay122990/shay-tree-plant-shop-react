import { plants } from "./plants-data";

export const categories = [
  {
    name: "Low-light",
    plantIds: [1, 3, 7, 10, 16, 19, 21, 24, 30],
    image: "/plants/img21.jpg",
  },
  {
    name: "Indoor",
    plantIds: plants.map((plant) => plant.id),
    image: "/plants/img14.jpg",
  },
  {
    name: "Outdoor",
    plantIds: [11, 9, 27, 25, 14, 28, 29],
    image: "/plants/img31.jpg",
  },
  {
    name: "Tropical",
    plantIds: [11, 4, 18, 27, 30, 32, 34],
    image: "/plants/img4.jpg",
  },
  {
    name: "Air-Purifiers",
    plantIds: [1, 3, 7, 8, 20, 22, 26],
    image: "/plants/img12.jpg",
  },
  {
    name: "Pet Friendly",
    plantIds: [1, 3, 7, 10, 13, 16, 19, 24, 30],
    image: "/plants/img7.jpg",
  },
  {
    name: "Best Sellers",
    plantIds: [1, 3, 7, 10, 19, 30],
    image: "/plants/img2.jpg",
  },
];
