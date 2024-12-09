import { plants } from "./plants-data";

export const categories = [
  {
    name: "Low-light",
    plantIds: [1, 3, 7, 10, 16, 19, 21, 24, 30],
    image:
      "https://firebasestorage.googleapis.com/v0/b/shay-tree-db-bb835.appspot.com/o/plants%2Fimg21.jpg?alt=media&token=2141efa7-688a-4a69-83ba-10ae8e5c60c4",
  },
  {
    name: "Indoor",
    plantIds: plants.map((plant) => plant.id),
    image:
      "https://firebasestorage.googleapis.com/v0/b/shay-tree-db-bb835.appspot.com/o/plants%2Fimg14.jpg?alt=media&token=9f4a2908-b31b-42e4-b388-a2cb108da5ab",
  },
  {
    name: "Outdoor",
    plantIds: [11, 9, 27, 25, 14, 28, 29],
    image:
      "https://firebasestorage.googleapis.com/v0/b/shay-tree-db-bb835.appspot.com/o/plants%2Fimg31.jpg?alt=media&token=26487700-1c0e-4620-9762-7248f1b27276",
  },
  {
    name: "Tropical",
    plantIds: [11, 4, 18, 27, 30, 32, 34],
    image:
      "https://firebasestorage.googleapis.com/v0/b/shay-tree-db-bb835.appspot.com/o/plants%2Fimg4.jpg?alt=media&token=0a7a5ff0-d5bf-4f34-9b3b-f26eeee81d11",
  },
  {
    name: "Air-Purifiers",
    plantIds: [1, 3, 7, 8, 20, 22, 26],
    image:
      "https://firebasestorage.googleapis.com/v0/b/shay-tree-db-bb835.appspot.com/o/plants%2Fimg12.jpg?alt=media&token=38baaa45-09db-46d3-a6fb-de34f05caf45",
  },
  {
    name: "Pet Friendly",
    plantIds: [1, 3, 7, 10, 13, 16, 19, 24, 30],
    image:
      "https://firebasestorage.googleapis.com/v0/b/shay-tree-db-bb835.appspot.com/o/plants%2Fimg7.jpg?alt=media&token=3a32f8c6-c1ae-4338-94c5-b1ce04140d85",
  },
  {
    name: "Best Sellers",
    plantIds: [1, 3, 7, 10, 19, 30],
    image:
      "https://firebasestorage.googleapis.com/v0/b/shay-tree-db-bb835.appspot.com/o/plants%2Fimg4.jpg?alt=media&token=0a7a5ff0-d5bf-4f34-9b3b-f26eeee81d11",
  },
];
