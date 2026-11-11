function photo(id: string, width = 1800) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const images = {
  diningRoom: photo("1517248135467-4c7edcad34c4"),
  table: photo("1414235077428-338989a2e8c0"),
  evening: photo("1550966871-3ed3cdb5ed0c"),
  service: photo("1559339352-11d035aa65de"),
  finePlate: photo("1424847651672-bf20a4b0982b", 1600),
  steak: photo("1600891964092-4316c288032e", 1600),
  seafood: photo("1559847844-5315695dadae", 1600),
  pasta: photo("1473093295043-cdd812d0e601", 1600),
  dessert: photo("1488477181946-6428a0291777", 1600),
  salad: photo("1540189549336-e6e99c3679fe", 1600),
  grill: photo("1432139555190-58524dae6a55", 1600),
  wine: photo("1510812431401-41d2bd2722f3", 1600),
  chef: photo("1583394293214-28ded15ee548", 1400),
  kitchen: photo("1556910103-1c02745aae4d"),
  chocolate: photo("1606313564200-e75d5e30476c", 1400),
  crowd: photo("1466978913421-dad2ebd01d17"),
} as const;
