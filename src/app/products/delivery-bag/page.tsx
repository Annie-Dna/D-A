import ProductDetail from '@/components/products/ProductDetail';

const DeliveryBagPage = () => {
  const productData = {
    title: 'Delivery Bag',
    description: 'Premium quality delivery bag designed for motorcycle couriers. Waterproof, durable, and spacious with multiple compartments for secure transportation. Perfect for food delivery, document courier services, and small parcel delivery.',
    features: [
      'Waterproof and weather-resistant material',
      'Multiple secure compartments',
      'Reinforced stitching for durability',
      'Adjustable shoulder straps',
      'Reflective safety strips',
      'Thermal insulation',
      'Easy-clean interior',
      'Quick-access pockets'
    ],
    specifications: {
      'Material': 'High-density waterproof polyester',
      'Capacity': '45 liters',
      'Dimensions': '40cm x 30cm x 45cm',
      'Weight': '1.2 kg',
      'Max Load': '25 kg',
      'Color': 'Red with black accents',
      'Insulation': 'Double-layer thermal protection',
      'Warranty': '1 year manufacturer warranty'
    },
    mainImage: '/images/delivery-bag-main.jpg',
    images: [
      '/images/delivery-bag-1.jpg',
      '/images/delivery-bag-2.jpg',
      '/images/delivery-bag-3.jpg',
      '/images/delivery-bag-4.jpg'
    ]
  };

  return <ProductDetail {...productData} />;
};

export default DeliveryBagPage;
