import productImage from "../assets/intelProcessor.webp";

const productData = [
  {
    id: 0,
    name: "Intel Core i5-12400 6-Core 2.5GHz LGA1700 Processor",
    image: productImage,
    rating: 4,
    price: "$249.99",
    status: "In Stock",
    section: "cpu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem.",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 4,
        body: "It works like a charm. Would recommend.",
      },
      {
        reviewer: "Peter Walter",
        rating: 5,
        body: "Best Processor.",
      },
    ],
  },
  {
    id: 1,
    name: "Intel Core i7-12400 8-Core 5GHz LGA1700 Processor",
    image: productImage,
    rating: 5,
    price: "$349.99",
    status: "In Stock",
    section: "cpu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem.",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 4,
        body: "It works like a charm. Would recommend.",
      },
      {
        reviewer: "Peter Walter",
        rating: 5,
        body: "Best Processor.",
      },
    ],
  },
  {
    id: 2,
    name: "Intel Core i7-12400 8-Core 5GHz LGA1700 Processor",
    image: productImage,
    rating: 5,
    price: "$249.99",
    status: "In Stock",
    section: "cpu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem.",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 4,
        body: "It works like a charm. Would recommend.",
      },
      {
        reviewer: "Peter Walter",
        rating: 5,
        body: "Best Processor.",
      },
    ],
  },
  {
    id: 3,
    name: "Intel Core i1 fakeCore 5GHz LGA1700 Processor",
    image: productImage,
    rating: 2,
    price: "$129.99",
    status: "In Stock",
    section: "cpu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem.",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 2,
        body: "Terrible.",
      },
      {
        reviewer: "Peter Walter",
        rating: 1,
        body: "Utter garbage.",
      },
    ],
  },
];

export default productData;
