import { images } from "@/data/images";
import type { MenuItem } from "@/types/content";

export const menu: MenuItem[] = [
  {
    id: "oyster",
    course: "To begin",
    name: "Warm oyster",
    detail: "Brown butter, finger lime",
    story:
      "One oyster, warmed in brown butter until the edges curl. Finger lime instead of a lemon wedge, so the acidity stays bright.",
    price: 9,
    tags: ["Shellfish"],
  },
  {
    id: "tartare",
    course: "To begin",
    name: "Beef tartare",
    detail: "Smoked marrow, rye",
    story:
      "Hand-cut, kept cold, and finished with marrow that has spent time over the fire. Rye toast on the side, not under it.",
    price: 24,
    tags: [],
    pairing: "Grower Champagne",
  },
  {
    id: "chicories",
    course: "To begin",
    name: "Chicories",
    detail: "Pear, hazelnut, vin jaune",
    story:
      "Bitter leaves, a ripe pear, and a dressing made with vin jaune. It is the plate we send to guests who say they do not want a salad.",
    price: 18,
    tags: ["Vegetarian"],
    image: images.salad,
    imageAlt: "A bitter-green salad with fruit and nuts on a ceramic plate",
  },
  {
    id: "crab",
    course: "To begin",
    name: "Crab doughnut",
    detail: "Yuzu kosho",
    story:
      "Fried to order. The heat from the yuzu kosho sits on top of sweet crab. We serve one, and most tables ask for a second.",
    price: 16,
    tags: ["Shellfish"],
  },
  {
    id: "duck",
    course: "From the fire",
    name: "Dry-aged duck",
    detail: "Black garlic, cherry",
    story:
      "The breast goes over the coals for the skin. The leg is confit. Cherry and black garlic keep the richness from sitting still.",
    price: 46,
    tags: ["Gluten free"],
    pairing: "Etna Rosso",
    image: images.grill,
    imageAlt: "Meat searing over an open grill",
  },
  {
    id: "pork",
    course: "From the fire",
    name: "Heritage pork chop",
    detail: "Grilled peach, mustard green",
    story:
      "Brined, glazed, and left on the bone. A grilled peach and a sharp green are there so the chop does not taste only of itself.",
    price: 42,
    tags: ["Gluten free"],
  },
  {
    id: "cauliflower",
    course: "From the fire",
    name: "Coal-roasted cauliflower",
    detail: "Romesco, almond",
    story:
      "A whole cauliflower, turned on the grate until the outside is dark and the center is custard. Romesco, toasted almond, nothing dairy.",
    price: 28,
    tags: ["Vegan", "Gluten free"],
  },
  {
    id: "ribeye",
    course: "From the fire",
    name: "Ribeye for two",
    detail: "Marrow butter, onion",
    story:
      "Dry-aged, sliced at the table, with a marrow butter and onions cooked down in the dripping. Please allow extra time.",
    price: 128,
    tags: ["For two"],
    image: images.steak,
    imageAlt: "A sliced steak with browned butter on a dark plate",
  },
  {
    id: "scallops",
    course: "From the water",
    name: "Montauk scallops",
    detail: "Saffron beurre blanc, sea herbs",
    story:
      "Seared hard, centers barely warm. Saffron butter, a few sea herbs, and the plate you can turn in the window of this site.",
    price: 38,
    tags: ["Shellfish", "Gluten free"],
    pairing: "Chablis, Premier Cru",
    image: images.seafood,
    imageAlt: "A seafood plate with herbs and citrus",
  },
  {
    id: "branzino",
    course: "From the water",
    name: "Whole branzino",
    detail: "Preserved lemon, fennel",
    story:
      "Grilled on the bone and taken apart at the table. Preserved lemon and fennel, dressed with the cooking juices.",
    price: 44,
    tags: ["Gluten free"],
  },
  {
    id: "lobster",
    course: "From the water",
    name: "Lobster",
    detail: "Brown butter, tarragon",
    story:
      "A half lobster, butter mounted with tarragon, and nothing else in the way. We will split it for the table if you ask.",
    price: 52,
    tags: ["Shellfish", "Gluten free"],
  },
  {
    id: "agnolotti",
    course: "Garden",
    name: "Hand-cut agnolotti",
    detail: "Brown butter, sage, pecorino",
    story:
      "Ricotta and lemon zest inside, brown butter and enough sage that you smell the plate before it lands.",
    price: 32,
    tags: ["Vegetarian"],
    image: images.pasta,
    imageAlt: "A pasta plate finished with herbs and cheese",
  },
  {
    id: "leeks",
    course: "Garden",
    name: "Charred leeks",
    detail: "Cultured cream, trout roe",
    story:
      "The leeks spend a long time on the grate. Cultured cream cools them down. Trout roe is optional if you would rather keep it vegetarian.",
    price: 26,
    tags: ["Ask for vegetarian"],
  },
  {
    id: "cake",
    course: "To close",
    name: "Olive oil cake",
    detail: "Citrus, crème fraîche",
    story:
      "Warm, not sweet-loud. Olive oil in the crumb, citrus on top, and crème fraîche instead of a sauce.",
    price: 16,
    tags: ["Vegetarian"],
    image: images.dessert,
    imageAlt: "A cream dessert with citrus fruit",
  },
  {
    id: "chocolate",
    course: "To close",
    name: "Dark chocolate",
    detail: "Smoked salt, buckwheat",
    story:
      "A thin tart. The salt has been near the hearth, and the buckwheat crust keeps the chocolate from feeling heavy.",
    price: 17,
    tags: ["Vegetarian"],
    image: images.chocolate,
    imageAlt: "A dark chocolate dessert broken open on a plate",
  },
  {
    id: "cheese",
    course: "To close",
    name: "Cheese",
    detail: "Honeycomb, seeded cracker",
    story:
      "Two cheeses, chosen that morning. Honeycomb from a farm we trust, and a cracker baked downstairs.",
    price: 22,
    tags: ["Vegetarian"],
  },
  {
    id: "champagne",
    course: "By the glass",
    name: "Grower Champagne",
    detail: "Côte des Bar",
    story:
      "A grower bottling, not a house pour. Dry, a little oxidative, and the glass we open the evening with.",
    price: 24,
    tags: ["5 oz"],
    image: images.wine,
    imageAlt: "Wine glasses on a set table",
  },
  {
    id: "chablis",
    course: "By the glass",
    name: "Chablis",
    detail: "Premier Cru",
    story:
      "Tight, mineral, and the bottle we pour next to the scallops. If you want one glass before deciding, start here.",
    price: 22,
    tags: ["5 oz"],
  },
  {
    id: "etna",
    course: "By the glass",
    name: "Etna Rosso",
    detail: "Nerello Mascalese",
    story:
      "Pale red, savory, and light enough to drink with the duck. Served a little cool.",
    price: 18,
    tags: ["5 oz"],
  },
  {
    id: "quince",
    course: "By the glass",
    name: "Quince ferment",
    detail: "No alcohol",
    story:
      "Pressed quince, fermented in-house, and poured with the same glassware as the wine. It is not an afterthought.",
    price: 12,
    tags: ["Non-alcoholic"],
  },
];

export const featuredIds = ["scallops", "duck", "cake"] as const;

export function featuredDishes() {
  return featuredIds.map((id) => {
    const item = menu.find((dish) => dish.id === id);
    if (!item) {
      throw new Error(`Missing featured dish: ${id}`);
    }
    return item;
  });
}
