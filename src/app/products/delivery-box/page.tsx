import ProductDetail from '@/components/products/ProductDetail';

const DeliveryBoxPage = () => {
  const productData = {
    title: 'Delivery Box',
    description: 'Heavy-duty delivery box perfect for commercial deliveries. Features secure locking system, weather-resistant design, and easy mounting mechanism. Ideal for motorcycle couriers, food delivery services, and logistics companies.',
    features: [
      'Secure locking system with key',
      'Weather-resistant construction',
      'Easy mounting mechanism',
      'Impact-resistant material',
      'QR code tracking system',
      'Ventilation design',
      'Anti-theft features',
      'Customizable branding area'
    ],
    specifications: {
      'Material': 'High-impact polypropylene',
      'Capacity': '90 liters',
      'Dimensions': '60cm x 45cm x 50cm',
      'Weight': '4.5 kg',
      'Max Load': '40 kg',
      'Color': 'Black with customizable panels',
      'Lock Type': 'Heavy-duty security lock',
      'Mounting': 'Universal mounting system'
    },
    mainImage: '/images/delivery-box-main.jpg',
    images: [
      '/images/delivery-box-1.jpg',
      '/images/delivery-box-2.jpg',
      '/images/delivery-box-3.jpg',
      '/images/delivery-box-4.jpg'
    ]
  };

  return <ProductDetail {...productData} />;
};

export default DeliveryBoxPage;
