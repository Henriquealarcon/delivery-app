const getProducts = () => {
  const response = [{
    id: '1',
    title: 'Skol Lata 250ml',
    price: '2.20',
    image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  },
  {
    id: '2',
    title: 'Heineken 600ml',
    price: '7.50',
    image: 'http://localhost:3001/images/heineken_600ml.jpg',
  },
  {
    id: '3',
    title: 'Antarctica Pilsen 300ml',
    price: '2.49',
    image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
  },
  {
    id: '4',
    title: 'Brahma 600ml',
    price: '7.50',
    image: 'http://localhost:3001/images/brahma_600ml.jpg',
  },

  ];
  return response;
};

export default getProducts;
