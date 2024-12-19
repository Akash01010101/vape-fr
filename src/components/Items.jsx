const images = import.meta.glob('../assets/Starterkit/*.{png,jpg,jpeg,gif}', { eager: true });

// Group images by their base name
const groupedImages = {};

Object.entries(images).forEach(([path, module]) => {
  // Extract the base name of the image (e.g., 'ball' from 'ball.png', 'ball1.png', etc.)
  const baseName = path.split('/').pop().replace(/\d*\.(png|jpe?g|gif)$/, '');
  
  // Initialize the group if it doesn't exist
  if (!groupedImages[baseName]) {
    groupedImages[baseName] = [];
  }
  
  // Add the image to the group
  groupedImages[baseName].push(module.default || module);
});

// Convert grouped images into an array of objects with an id
const itemsArray = Object.entries(groupedImages).map(([title, images], index) => {
  const formattedItem = {
    id: `product-${index + 1}`, // Generate unique ID based on index
    title: title,               // Base object with title
  };
  
  images.forEach((image, idx) => {
    formattedItem[`image${idx ? `-${idx + 1}` : ''}`] = image;  // Dynamically set keys like 'image', 'image-2', etc.
  });

  return formattedItem;
});

// Second array with product details
let array2 = [{
  id: 'product-11',  // Match this ID with the one in itemsArray
  price: "4200",
  price2: '5000',
  colors: ['Basalt Grey', 'Pearl White'],
  desc: `Uwell Caliburn G3 Lite is the most cost-effective choice for almost all beginners who care about flavor and price. G3 Lite joins hands with G3 pre-filled pod, offering ten flavor options to users. Also, it is compatible with all G3 cartridges(0.6ohm/0.9ohm/1.2ohm), satisfying the needs from freebase to nic salt. The U² Anti-leak Mechanism(Ultrasonic Welding * U-shaped Channel) within the cartridge ensures a 150% anti-leak enhancement compared to others on the market. Experience Caliburn Flavor 3.0 at its greatest extent, it delivers unmatched flavor satisfaction in every puff. The advanced 1200 mAh battery promises a longer-lasting vape and stops anxiety for frequent charging.
  
Brand: Uwell
Unit: 1Set
Materials: PCTG, PC
Dimensions: 111.4 mm * 28.8 mm * 16.3 mm
E-liquid Capacity: 2.5ml (INT./FDA), 2ml (TPD)
Output Power: Maximum 25W
Cartridge Specifications: FeCrAl Meshed 0.6ohm Caliburn G3 Integrated Coil Cartridge (side refill)(INT./FDA), FeCrAl Meshed 0.9ohm Caliburn G3 Integrated Coil Cartridge (top refill)(TPD)
Battery Capacity: 1200mAh
Package: Gifts Box
`,set:`Each set contains:
1pc Caliburn G3 Lite Device
1pc 0.6ohm Caliburn G3 Integrated Coil Cartridge (side refill)
1pc User Manual`
},
{id:'product-7',price:'5750',price2:'6500',desc:`The Uwell Caliburn G3 Pro kit features a full-screen dynamic display screen with a built-in 1000 mAh battery, providing an adjustable power of up to 35 watts. This intuitive pod vaping kit has fine-tuning airflow control and a new Caliburn G3 0.4Ω pod cartridge, delivering a satisfyingly unbeatable flavour-boosted restricted-direct-to-lung (RDTL) vaping experience.

Important: If you are an MTL vaper, it is advised to use the 0.9Ω Caliburn G3 pod as the preinstalled 0.4Ω Caliburn G3 pod is a powerful RDTL pod which can run into issues with leaking when using nicotine salts and the mouth-to-lung vaping style.
`,specs:['Dimensions27.8 x 16.8 x 117.4mm','Weight92g','Battery Capacity1000 mAh','ScreenFull-screen dynamic UI','MaterialPCTG + Zinc Alloy','AirflowSide Airflow Control','Charging5V / 2A Type-C'],set:`What’s in the Box?
1 x Caliburn G3 Pro device
1 x 0.4Ω Top-filling Caliburn G3 pod
1 x 0.9Ω Top-filling Caliburn G3 pod
1 x Type-C USB charging cable
User Manual`}
,
{
  id:'product-6',
  price:'5900',
  price2:'6900',
  desc:`Each set contain:
1pc CALIBURN G3 PRO KOKO Device
1pc 0.4ohm CALIBURN G3 Cartridge 3ml (side fill)
1pc 0.9ohm CALIBURN G3 Cartridge 2.5ml (side fill)
1pc User Manual
1pc Type-c Charging Cable`
}
];

// Combine the arrays based on the 'id'
const combinedArray = itemsArray.map(item => {
  // Find the matching item in array2 based on 'id'
  const productDetails = array2.find(details => details.id === item.id);
  
  // Merge the details into the item
  return { ...item, ...productDetails };
});

export default combinedArray
