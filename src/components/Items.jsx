const images = import.meta.glob('../assets/Starterkit/*.{png,jpg,jpeg,gif}', { eager: true });
const groupedImages = {};

Object.entries(images).forEach(([path, module]) => {
  const baseName = path.split('/').pop().replace(/\d*\.(png|jpe?g|gif)$/, '');
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
  desc: `Uwell Caliburn G3 Lite is the most cost-effective choice for almost all beginners who care about flavor and price\nG3 Lite joins hands with G3 pre-filled pod, offering ten flavor options to users. Also, it is compatible with all G3 cartridges(0.6ohm/0.9ohm/1.2ohm), satisfying the needs from freebase to nic salt. The U² Anti-leak Mechanism(Ultrasonic Welding * U-shaped Channel) within the cartridge ensures a 150% anti-leak enhancement compared to others on the market. Experience Caliburn Flavor 3.0 at its greatest extent, it delivers unmatched flavor satisfaction in every puff. The advanced 1200 mAh battery promises a longer-lasting vape and stops anxiety for frequent charging.
  
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
},
{
  id:'product-19',
  price:'5500',
  price2:'6000',
  desc:`The Vaporesso XROS 4 pod kit is a fantastic option for vapers who prefer a straightforward device with easy-to-use features. It offers an excellent balance of style, convenience, and performance as well as being compatible with the full range of Xros pods, making it an ideal choice for both beginners and experienced users.

The device comes equipped with a built-in 1000mAh battery that charges quickly and can be fully recharged in as little as 30 minutes, providing you with a long-lasting vaping experience. Additionally, the kit includes two pods, one for MTL (Mouth to Lung) vaping and the other for RDTL (Restricted Direct to Lung) vaping. The pods are easily interchangeable, allowing you to switch between the two styles of vaping quickly.

The XROS 4 features a single-button design, making it easy to operate. To start vaping, simply click the button four times to unlock the device, and then press and hold the button or inhale on the mouthpiece. You can adjust the feel of each draw by clicking the button three times to select one of the three power output levels. The LED screen displays the chosen level and also shows the battery level, making it easy to keep track of your device’s performance.`
},
{
  id:'product-13',
  image1:'https://vapeparadiseindia.in/cdn/shop/files/UWELL-CALIBURN-GZ2-Pod-System-s_1024x1024@2x.jpg?v=1712747827',
  price:'4400',
  price2:'5000',
  desc:`The Uwell Caliburn GZ2 pod kit is a small and simple option that’s ideal for beginner vapers or anyone in need of a pocket-friendly refillable vape. Its compact, boxy build fits in the palm of your hand but still manages to find room for a large 850mAh battery. Capable of a 17W output, it creates a discreet amount of vapour that feels more like a cigarette. Each kit comes complete with a refillable 2ml Caliburn G2 pod and two Caliburn G coils to get you started.
  Featuring a buttonless design, the GZ2 Caliburn is inhale activated, all you need to do is inhale on the mouthpiece to get started. When you do, your kit will create a small amount of vapour for an authentic MTL (Mouth To Lung) vape. There are three different coils to choose from (two are included) and whichever you go for, the GZ2 will recognise it and set the correct wattage automatically.
The Caliburn G2 pod is easy to fill – you don’t even need to remove it from the pod – just pop off the mouthpiece to reveal the filling port. Changing your coil is simple too, pull out the old one, insert a new one, and refill your pod. When it comes to picking an e-liquid, we recommend either a 50/50 or high PG liquid, nic salts are a popular option and perfect if you’re looking for a smoother vape.`,
  colors:['Black','Silver']
},
{
  id:'product-1',
  image1:'https://yoyovapes.com/wp-content/uploads/2024/03/uwell-caliburn-a3s-kit-1-400x400.webp',
  price:'4400',
  price2:'5000',
  desc:`The CALIBURN A3S is easy to operate. Built-in 520mAh Battery, hold 2ml ejuice capacity with the side filling syetem, Without any button designed, the device is draw-activated, which is very friendly to vape beginners who pursue simplicity. With laser pattern finely printed on the smooth aluminum alloy device, it looks sleek and exquisite. During vaping, the logo-shape animated light matrix will flash. In your video, you can stress the simple and elegant design of the device.
`,
  colors:['Ocean Flame','Midnight Black', 'Space grey']
},
  {
    id:'product-12',
    image1:'https://yoyovapes.com/wp-content/uploads/2024/03/uwell_G3_1800_600_2048x2048-800x267.webp',
    price:'4800',
    price2:'4900',
    desc:`UWELL’s Caliburn G3 Pod Kit is a powerful addition to the ever-popular Caliburn G range of open pod system vaporisers. Levelling up from the Caliburn G2 to the G3 comes with a 20% improvement in performance, thanks to the generous 900mAh battery capacity. The G3 is the first in the G series to offer 0.6ohm resistance, and with a maximum 25W output power, this pod is perfect for RDL freebase users and open MTL nicotine salt users. Alternatively, you can opt for 0.9ohm replacement pods. Experience simplicity without sacrificing power. The Caliburn G3 features a single button, allowing you to lock, unlock or switch between inhale or button activation.

Caliburn G3 Cartridges feature integrated coils and an air-tight design for enhanced leak resistance. No coil replacements, no e-juice spills, no hassle. Enjoy a smooth throat hit and consistently excellent flavour and vapour production. In another first for Caliburn’s G series, the G3 features an OLED display that allows users to fine-turn their vaping experience. Easily view your current firing mode, as well as performance details. Select from 3 firing modes, including auto draw activation, trigger button lock, or dual action mode, allowing you to combine both. Adjustable power. Display wattage puff counter and resistance This low-maintenance, high-quality pod vape is ideal for beginner and advanced vapers.

Child Lock Mechanism: To lock/unlock, press the fire button FIVE times. The device will automatically lock within 10 minutes.
  `,
    colors:['Blue','Grey','Silver','Midnight Gold'],

  },
  {
    id:'product-17',
    image1:'https://cdn.shopify.com/s/files/1/0548/9593/5747/files/vaporesso-xros-pro-intro-image.png?v=1703770161',
    image2:'https://cdn.shopify.com/s/files/1/0548/9593/5747/files/vaporesso-xros-pro-1200mah-battery-35-minute-charge-time.png?v=1703770161',
    image3:'https://cdn.shopify.com/s/files/1/0548/9593/5747/files/vaporesso-xros-pro-dual-activation-modes.png?v=1703770161',
    image4:'https://cdn.shopify.com/s/files/1/0548/9593/5747/files/vaporesso-xros-pro-industry-first-pod-with-lock-button.png?v=1703770161',
    price:'5100',
    price2:'6100',
    desc:`Introducing the Vaporesso XROS Pro, the ground-breaking Super Pulse pod system vape kit equipped with a substantial 1200mAh built-in battery, delivering up to 30W power output. With adjustable airflow control and a swift 35-minute quick charging capability, this Pro kit is designed to elevate your vaping journey. Its customisable features are meticulously crafted to provide a seamless vaping experience suitable for all levels of expertise.
    The Vaporesso XROS Pro features a large capacity 1200 mAh fixed battery that will provide all-day power on a single charge. When the battery runs low, the 2A USB-C charging capabilities will fully charge the battery in only 35 minutes. `,
    colors:['Black','Green'],

  },
  {
    id:'product-8',
    image1:'https://yoyovapes.com/wp-content/uploads/2024/02/caliburn-gk3-battery.jpg',
    image2:'https://yoyovapes.com/wp-content/uploads/2024/02/uwell-caliburn-gk3-specs.jpg',
    image3:'https://yoyovapes.com/wp-content/uploads/2024/02/uwell-caliburn-gk3-kit-contents-587x400.jpg',
    image4:'https://yoyovapes.com/wp-content/uploads/2024/02/caliburn-gk3-colours.jpg',
    price:'4999',
    price2:'5999',
    desc:`Uwell Caliburn GK3 Pod Kit
*100% Authentic by Uwell Tech

Uwell Caliburn GK3 Kit is compatible with a 2.5ml Caliburn G3 cartridge with an integrated mesh coil. The internal battery is listed at 900mAh and rated for up to 25W output. The see-through cases achieve a futuristic look, and they can offer you mouth-to-lung satisfaction. The box-style Caliburn device is paired with a dual airflow system, and there has an LCD display screen is located on the front, which makes it easy to read the information about power, resistance, battery capacity, and puffs draw. The Caliburn GK3 pod system brings a richer taste and restores the flavor of nicotine, as well as improving 150% leakproof.`,
    colors:['Graphite','Pitch Black'],

  },
  {
    id:'product-4',
    image1:'https://yoyovapes.com/wp-content/uploads/2023/10/lost-vape-ursa-baby-pro-pod-system-downtown-vapoury-durban-umhlanga-salts-rock-ballito-vape-shop-e-cigs-vaping-ejuice-e-juice-dab-pen-cbd-vape-disposable-vapes-vape-devices-online-vap-510x510.webp',
    price2:'5000',
    price:'4700',
    colors:['Golden Knight'],
  },
  {
    id:'product-15',
    image1:'https://cdn11.bigcommerce.com/s-13r9u32/product_images/uploaded_images/vaporesso-luxe-x-pro-pod-kit-13.jpg',
    image2:'https://cdn11.bigcommerce.com/s-13r9u32/product_images/uploaded_images/vaporesso-luxe-x-pro-pod-kit-04.jpg',
    image3:'https://cdn11.bigcommerce.com/s-13r9u32/product_images/uploaded_images/vaporesso-luxe-x-pro-pod-kit-01.jpg',
    image4:'https://cdn11.bigcommerce.com/s-13r9u32/product_images/uploaded_images/vaporesso-luxe-x-pro-pod-kit-03.jpg',
    price:'6000',
    price2:'7000',
    desc:`Introducing the all new Vaporesso LUXE X Pro Kit!

The built-in 1500mAh battery of the Vaporesso Luxe X Pro Pod Kit, along with the auto draw activation and dual activation mode, make it much simpler to begin vaping. The dual activation option greatly simplifies the beginning of your vaping when combined with the auto draw activation. It may offer professional-level operations to customize your experience from RDL to MTL thanks to the precisely adjustable wattage and airflow.

The entire line of Luxe X Pods and Luxe XR Pods with GTX coils are also completely compatible with the Luxe X Pro. Luxe X Pro takes the product to a whole new level and exhibits a more robust yet futuristic appearance thanks to its improved metal texture.

The Vaporesso Luxe X Pro uses a 0.42″ OLED panel so that you can better understand how you vape and take charge with precise power adjustments, enabling you to find your ideal vaping. In addition to the button activation, the fastest ignition and dependably smooth experience with delicate inhalation are provided by the most responsive auto draw specifically built for RDL.

You may more easily transition from MTL to RDL experience and from smaller clouds to greater clouds thanks to the exact airflow adjustment. All Luxe X pods with built-in coils and Luxe XR pods with GTX coils are compatible with the Luxe X Pro. More uniform heating and greater liquid delivery are made possible by the special Morph-Mesh construction and fluffier COREX cotton. `,
    colors:['Black','Blue','Pink'],

  },
  {
    id:'product-16',
    image1:'https://www.blacknote.com/wp-content/uploads/2023/10/Vaporesso-Luxe-XR-Max-Pod-Mod-4.webp',
    image2:'https://www.blacknote.com/wp-content/uploads/2023/10/Vaporesso-Luxe-XR-Max-Pod-Mod-4.webp',
    image3:'https://www.blacknote.com/wp-content/uploads/2023/10/Vaporesso-Luxe-XR-Max-Pod-Mod-3.webp',
    image4:'https://www.blacknote.com/wp-content/uploads/2023/10/Vaporesso-Luxe-XR-Max-Pod-Mod-2.webp',
    price:'6499',
    price2:'6999',
    desc:`Explore the capabilities of the Vaporesso LUXE XR Max 80W Pod Kit, equipped with the sophisticated AXON Chipset, capable of reaching an 80W max output for an enriched vaping experience. The device supports Luxe X System coils and pods, encased in a sturdy zinc-alloy body for resilience and longevity. A substantial 2800mAh battery, a vivid 0.54″ OLED display, and a suite of innovative features like SMART Mode and SSS Leak-Resistance Technology make the LUXE XR Max a premium choice for discerning vapers. `,
    colors:['Green'],

  },
    {
      id:'product-3',
      price:'3250',
      price2:'3500',
      desc:`Now with more cigarette-like satisfaction, JUUL2 is an easy-to-use, next generation JUUL Device designed for adult smokers looking for an alternative to cigarettes.
      
JUUL 2 Device Kit – Key Features
– Replacement battery by JUUL 
– 250mAh battery
– Available in Slate Grey
– Draw-activated
– USB charger included
– Dimensions: 70mm x 11mm x 7mm`,
  image:'https://yoyovapes.com/wp-content/uploads/2023/07/162397-510x510.webp'
    },
    {
      id:'product-5',
      image:'https://yoyovapes.com/wp-content/uploads/2023/05/709691c4-d1d9-4eb1-82b5-2d104d363497.jpg',
      image1:'https://res.smoktech.com/www/files/v2/product/Z3p1RwR05jcejGzQ6NdvU6G9KKgK.jpeg',
      image2:'https://res.smoktech.com/www/files/v2/product/Ko1dKzGLelcKegJ6xNv5I1Kp1b91.jpeg',
      image3:'https://res.smoktech.com/www/files/v2/product/q3xQ5jQ2aLu6G1W7X61BimRVAylN.jpeg',
      image4:'https://res.smoktech.com/www/files/v2/product/q3xQ5jQ2aLu6G1W7X61BimRVAylN.jpeg',
      image5:'https://res.smoktech.com/www/files/v2/product/4jpY1gvE6XSoBpLmKErQsPQZRw1.jpeg',
      price:'4200',
      price2:'4500',
      desc:`We portray SOLUS G-BOX as a pioneer in the revolutionary change of the vaping device that undoubtedly accommodates

all elements that lead to a model taste, including the sufficient battery capacity, stable output, meshed coil and customized airflow, 

and boldly breaks the routine on the appearance design that visualizes the cover, providing a superb view

when switching the lighting effect. Innovation keeps changing the vaping experience.` ,
      colors:['Transparent','Transparent Purple'],
  
    },
    {
      id:'product-2',
      image:'https://yoyovapes.com/wp-content/uploads/2023/03/IQOS-3-DUO13-400x400-1.jpeg',
      price:'12500',
      price2:'12000',
      desc:`IQOS impressed us all with the release if the IQOS 2.4 and the 2.4+, revolutionising the market with a completely unique product. Now they’ve improved on what was already a flawless product to bring your the IQOS 3. Not only improving the design with this sleek and stunning new kit. But offering faster charging times, longer battery lifespan, a sturdier and more robust casing and even offering a huge array of coloured accessories to really make your IQOS kit your own.
IQOS uses revolutionary technology that heats tobacco without burning it, giving you the true taste of tobacco with no smoke, no ash and less smell. This is ideal for health-conscious smokers who don’t wish to vape who would still like the closest alternative experience to smoking on the market. `,
      colors:['Blue','Grey Black'],
  
    },
    {
      id:'product-10',
      image:'https://yoyovapes.com/wp-content/uploads/2023/02/uwell-caliburn-a3-pod-kit-4_800x-510x510.webp',
      image1:'https://yoyovapes.com/wp-content/uploads/2023/02/A32.jpg',
      image2:'https://cdn.shopify.com/s/files/1/0474/6526/7356/files/CALIBURNA3Pod-Page-Web-Pics_02_600x600.jpg?v=1668678236',
      image3:'https://yoyovapes.com/wp-content/uploads/2023/02/UWELL-CALIBURN-A3-POD-KIT-510x510.jpg',
      image4:'https://yoyovapes.com/wp-content/uploads/2023/03/IQOS-3-DUO13-400x400-1.jpeg',
      price:'4500',
      price2:'5000',
      desc:`Constructed from a durable aluminum-alloy chassis, the Caliburn A3 offers direct voltage based output dependent on the current battery life up to 15W of power. Freely draw vapor between either of the integrated dual-activation methods; firing button activation or draw-activation for a natural sensation. Enjoy enhanced flavor from your favorite e-liquids with Uwell’s signature Pro-FOCS flavor technology integrated within the device. Additionally, the 2mL capacity A3 replacement pods feature a magnetic connection affixed to the base of the pod, and a top-fill system located beneath the removeable mouthpiece for added leakage prevention.`,
      colors:['Grey','Black'],
  
    },
    {
      id:'product-9',
      image1:'https://yoyovapes.com/wp-content/uploads/2022/11/Caliburn-X-Pod-Kit-Uwell-1-510x510.webp',
      image2:'https://yoyovapes.com/wp-content/uploads/2022/11/UWELL-CALIBURN-X-POD-KIT-20W-3-510x510.webp',
      image3:'https://yoyovapes.com/wp-content/uploads/2022/11/uwell-caliburn-x-pod-system-ink-blue-510x510.jpg',
      image4:'https://yoyovapes.com/wp-content/uploads/2022/11/5ed94b0b-0f2f-7c1b-89ca-631ed366f661-510x510.jpg',
      price:'5000',
      price2:'6000',
      desc:`Discover the Uwell Caliburn X 20W Pod System, featuring an integrated 850mAh battery, 5-20W output range, and is compatible with both G/G2 Coils. Constructed from durable aluminum-alloy, the chassis of the Caliburn X Pod System offers a strong and resilient chassis against light falls and drops. Equipped with an 850mAh battery, the integrated battery delivers plenty of vapor throughout the day, allowing the Uwell Caliburn X to output 5-20W easily. In addition, the refillable pods hold up to 3mL, and utilizes a juice viewing window to ensure a minimum fill level to prevent any dry hits or burning of the coil.
Make sure to properly prime each coils and pods before use.

Warning: If the coils has a sub-ohm resistance, please make sure you have a great understanding and technical knowledge on how to use mods and batteries that can handle Sub-Ohm coils. Do not use short or flat 510 connection on any hybrid or hybrid style device. If you are not familiar or unsure of particular products or set-ups, please do not use it. Always use proper precautions and handling.

Note: There is always an inherent risk when using any rechargeable batteries at anytime and under any circumstances. ElementVape.com and any of ElementVape.com’s parent and subsidiary companies are not held responsible for any damage for any modification of the batteries, chargers, devices and other products that we carry in any form or shape, this is including pack making.

ElementVape.com and any or all of ElementVape.com’s parent and subsidiary companies will not be held responsible or liable for any injury, damage, or defect, permanent or temporary that may be caused by the improper use of a Li-ion (Lithium-ion), LiPo (Lithium-ion Polymer) and any rechargeable battery/batteries as well as chargers. Please have a greater understanding of the batteries/chargers you are using and how to care for them properly.

When working with Li-ion (Lithium-ion), LiPo (Lithium-ion Polymer) and any rechargeable cells, please be cautious and carefully use as they are very sensitive to charging characteristics and may explode or burn if mishandled. Please make sure that you have great knowledge on all rechargeable batteries before you use them. Always charge batteries at the clean and fire-proof surface. Never leave charging batteries unattended. If you see that there are visible damages on the batteries, please do not use. Always keep, store and transport the rechargeable cells in a safe, non-conductive container in controlled environment.`,
      colors:['Ink Blue','Lilac Purple','Matte Black'],
  
    },
    {
      id:'product-18',
      image1:'https://www.greensmoking.co.il/image/catalog/Vaporesso%20Zero%202/Vaporesso-Zero-2-Pod-Kit_05_ZbdQi.jpeg',
      image2:'https://www.greensmoking.co.il/image/catalog/Vaporesso%20Zero%202/Vaporesso-Zero-2-Pod-Kit_01_sccGp.jpeg',
      image3:'https://www.greensmoking.co.il/image/catalog/Vaporesso%20Zero%202/Vaporesso-Zero-2-Pod-Kit_03_aBjit.jpeg',
      image4:'https://www.greensmoking.co.il/image/catalog/Vaporesso%20Zero%202/Vaporesso-Zero-2-Pod-Kit_06_owKe7.jpeg',
      price:'4300',
      price2:'5000',
      desc:`1. New 3ml Zero 2 Cartridge, with press-to-fill structure & SSS leak-resistant technology
2. Built-in 1.0ohm MESH/1.3ohm CCELL Coil for different vaping experience
3. 800mAh built-in battery, with dynamic tidal light on the mod
4. Futuristic streamlined body, with radiant cosmos design`,
      colors:['Carbon Fiber'],
  
    }


];

const combinedArray = itemsArray.map(item => {
  const productDetails = array2.find(details => details.id === item.id);
  return { ...item, ...productDetails };
});

const snusarr = [{
  id:'product-20',
 image:'https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.01.40-e1721387952269-510x528.jpeg',
 title:'Unibar Blueberry Ice Nicotine Pouches – 10mg/17mg – 20 Pouches Per Pack',
 price:'1150',
 price2:'1250',
 colors:['6mg'],
 desc:`Experience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.

Unibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.`
},
{
  id:'product-21',
  image:'https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.01.20-e1721388108263-510x515.jpeg',
  title:'Unibar Cool Storm Nicotine Pouches – 11mg – 20 Pouches Per Pack',
  price:'1150',
  price2:'1250',
  desc:`Experience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.
 
 Unibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.`
 },
{
  id:'product-23',
  image:'https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.02.41-e1721387801832-510x530.jpeg',
  title:'Unibar Freeze Nicotine Pouches – 11mg/17mg – 20 Pouches Per Pack',
  price:'1150',
  price2:'1250',
  colors:['11mg','17mg'],
  desc:`Experience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.
 
 Unibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.`
 
},
{
  id:'product-24',
  image:'https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.02.33-e1721388418314-510x495.jpeg',
  title:'Unibar Ice Cool Nicotine Pouches – 10mg – 20 Pouches Per Pack',
  price:'1150',
  price2:'1250',
  desc:`Experience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.
 
 Unibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.`
 
},
{
  id:'product-25',
  image:'https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.01.35-e1721387477417-510x521.jpeg',
  title:'Unibar Polar Mint Nicotine Pouches – 6mg/17mg – 20 Pouches Per Pack',
  price:'1150',
  price2:'1250',
  desc:`Experience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.
   
 Unibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.`,
 colors:['11mg','17mg'],
},
{
  id:'product-26',
  image:'https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.01.05-e1721388308754-510x540.jpeg',
  title:'Unibar Royal Purple Nicotine Pouches – 10mg – 20 Pouches Per Pack',
  price:'1150',
  price2:'1250',
  desc:`Experience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.
 
 Unibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.`
 
},{
  id:'product-27',
  image:'https://yoyovapes.com/wp-content/uploads/2024/07/white-fox-peppered-mint-nicotine-pouch-15mg-510x510.jpg',
  title:'White Fox Pepper Mint Slim Nicotine Snus Pouch Made in Sweden – 12mg – 20 Pouches Per Pack',
  price:'1150',
  price2:'2000',
  desc:`White Fox Peeper Mint Slim All White is an all white snus with high nicotine content of 12mg/g with extra fresh minty flavor.
The pouches are delivered in slim format and the portion “fleece bags” enables a better release of nicotine and taste, compared to the traditional portion material.

CONTENT AND INFORMATION
Nicotine mg/pouch: 12mg
Format: Slim
Manufacturer: GN Tobacco

Declaration of content
Filler (E460), xanthan gum (E415), nicotine, acidity regulator (E500), natural flavors, humectant (E1520).`
 
}
]

const regEj = [{
  id:'product-28',
  title:'DINNER LADY FREEBASE E-JUICES – 5 BOTTLES COMBO OFFER – 60ML (0MG/3MG/6MG)',
  price:'7500',
  price2:'8000',
  image:'https://yoyovapes.com/wp-content/uploads/2022/11/s-l500.png',
  desc:'DINNER LADY FREEBASE E-JUICES – 5 BOTTLES COMBO OFFER – 60ML (0MG/3MG/6MG)',
  colors : [  
    "STRAWBERRY BIKINI ICE-3MG",  
    "STRAWBERRY BIKINI ICE-6MG",  
    "LYCHEE ICE-3MG",  
    "LYCHEE ICE-6MG",  
    "BLACKBERRY CRUMBLE-3MG",  
    "BLACKBERRY CRUMBLE-6MG",  
    "COOL TOBACCO -3MG",  
    "SWEET FUSION ICE-3MG",  
    "SWEET FUSION ICE-6MG",  
    "STRAWBERRY MACAROON-3MG",  
    "STRAWBERRY MACAROON-6MG",  
    "WATERMELON SLICES ICE-6MG",  
    "WATERMELON SLICES ICE-3MG",  
    "SWEET TOBACCO-3MG",  
    "SWEET TOBACCO-6MG",  
    "SMOOTH TOBACCO-3MG",  
    "SMOOTH TOBACCO-6MG",  
    "CAFE TOBACCO-3MG",  
    "GRAPE STAR ICE-3MG",  
    "GRAPE STAR ICE-6MG",  
    "BLUE MENTHOL ICE-3MG",  
    "PURPLE RAIN-6MG",  
    "BERRY BLAST-6MG",  
    "COLA SHADES-3MG",  
    "COLA SHADES-6MG",  
    "BLACK ORANGE CRUSH-3MG",  
    "BLACK ORANGE CRUSH-6MG",  
    "BUBBLE TROUBLE ICE-6MG",  
    "PEACH BUBBLE ICE-3MG",  
    "BUBBLE TROUBLE-3MG",  
    "MANGO ICE-3MG",  
    "LEMON TART"  
]
},
{
  id:'product-29',
  title:'CORE BY DINNER LADY – GRAPE VINE – 120ML',
  price:'1999',
  price2:'2199',
  colors:['3mg','6mg'],
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/Grape-Vine-Core-by-Dinner-Lady-120ml--510x510.jpg',
  desc:`Grape Vine by Core Dinner lady Marvin called this out in 1968. ‘’I heard it through the grape-vine’’. Purple and Red grapes, sweet, slightly sour, and punchy.

Manufacturer: Dinner Lady
Available Strengths: 3mg & 6mg
PG/VG: 30/70
Size: 120ml
Primary Flavors: Grape`
},
{
  id:'product-30',
  title:'CORE BY DINNER LADY – PINK LEMONADE – 120ML',
  price:'1999',
  colors:['3mg','6mg'],
  price2:'2199',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/CORE-BY-DINNER-LADY-PINK-LEMONADE-120ML_1024x1024@2x-510x510.webp',
  desc:`Strawberry Apple by Core Dinner lady is a succulent green and red apples, blended with rich, full bodied candy Strawberries.

Manufacturer: Dinner Lady
Available Strengths: 3mg & 6mg
PG/VG: 30/70
Size: 120ml
Primary Flavors: Strawberry, Apple`
},{
  id:'product-31',
  title:'CORE BY DINNER LADY – STRAWBERRY APPLE – 120ML',
  price:'1999',
  colors:['3mg','6mg'],
  price2:'2199',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/Core_Strawberry_Apple_120ml_1024x1024@2x-510x510.png',
  desc:`Strawberry Apple by Core Dinner lady is a succulent green and red apples, blended with rich, full bodied candy Strawberries.

Manufacturer: Dinner Lady
Available Strengths: 3mg & 6mg
PG/VG: 30/70
Size: 120ml
Primary Flavors: Strawberry, Apple`
},{
  id:'product-32',
  title:'CORE BY DINNER LADY – HONEYDEW MELONADE – 120ML',
  price:'1999',
  colors:['3mg','6mg'],
  price2:'2199',
  image:'https://yoyovapes.com/wp-content/uploads/2023/05/honeydew-melonade-by-core-vapr_800x_0fad8b6c-51e4-49cc-bfdd-9f9ab42e6620_800x-510x510.webp',
  desc:`CORE BY DINNER LADY – HONEYDEW MELONADE – 120ML

Honeydew Melonade by Core Dinner lady is a subtle, sweet & refreshingly juicy honey melon vape, layered within our secret homemade lemonade on crushed ice.

Manufacturer: Dinner Lady
Available Strengths: 3mg & 6mg
PG/VG: 30/70
Size: 120ml
Primary Flavors: Honeydew, Melon, Ice`
},
{
  id:'product-33',
  title:'CORE BY DINNER LADY – TROPIC MANGO CHILL – 120ML',
  price:'1999',
  colors:['3mg','6mg'],
  price2:'2199',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/CORE-BY-DINNER-LADY-TROPIC-MANGO-CHILL-120ML_700x-510x510.webp',
  desc:`Tropic Mango Chill by Core Dinner lady is a deliciously chilled tropical fusion, Sweet and juicy Mango’s fused with a fresh and cooling hit.

Manufacturer: Dinner Lady
Available Strengths: 3mg & 6mg
PG/VG: 30/70
Size: 120ml
Primary Flavors: Mango, Menthol`
},{
  id:'product-34',
  title:'CORE BY DINNER LADY – TROPIC THUNDER – 120ML',
  price:'1999',
  colors:['3mg','6mg'],
  price2:'2199',
  image:'https://yoyovapes.com/wp-content/uploads/2023/05/CORE-BY-DINNER-LADY-TROPIC-THUNDER-120ML_1024x1024@2x-510x510.webp',
  desc:`Tropic Thunder by Core Dinner lady is an electric fusion of worldly tropical fruits! Top notes of rich Pineapple, Mango & Guava, to mid notes of crisp Apple, Citric fruits, and sweet passion fruits!

Manufacturer: Dinner Lady
Available Strengths: 3mg & 6mg
PG/VG: 30/70
Size: 120ml
Primary Flavors: Pineapple, Mango, Guava`
},{
  id:'product-35',
  title:'CORE BY DINNER LADY – VANILLA CUSTARD – 120ML',
  price:'1999',
  colors:['3mg','6mg'],
  price2:'2199',
  image:'https://yoyovapes.com/wp-content/uploads/2023/05/CORE-BY-DINNER-LADY-VANILLA-CUSTARD-120ML_1024x1024@2x-510x510.webp',
  desc:`Vanilla Custard by Core Dinner lady is a sweet, velvety, rich, and creamy custard blend.

Manufacturer: Dinner Lady
Available Strengths: 3mg & 6mg
PG/VG: 30/70
Size: 120ml
Primary Flavors: Vanilla, Custard, Cream`
},{
  id:'product-36',
  title:'CORE BY DINNER LADY – VANILLA TOBACCO – 120ML',
  price:'1999',
  colors:['3mg','6mg'],
  price2:'2199',
  image:'https://yoyovapes.com/wp-content/uploads/2023/05/CORE-BY-DINNER-LADY-VANILLA-TOBACCO-120ML_1024x1024@2x-510x510.webp',
  desc:`CORE BY DINNER LADY – VANILLA TOBACCO – 120ML

Vanilla Tobacco by Core Dinner lady is a lather your taste buds with this creamy vanilla and tobacco blend. this flavour is rich, lightly sweetened and has subtle fresh tobacco tones.

Manufacturer: Dinner Lady
Available Strengths: 3mg & 6mg
PG/VG: 30/70
Size: 120ml
Primary Flavors: Vanilla, Tobacco`
},{
  id:'product-37',
  title:'CORE BY DINNER LADY – WATERMELON CHILL – 120ML',
  price:'1999',
  colors:['3mg','6mg'],
  price2:'2199',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/CORE-BY-DINNER-LADY-WATERMELON-CHILL-120ML_1024x1024@2x-510x510.webp',
  desc:`Watermelon Chill by Core Dinner lady is a Iconic fusion of sweet, Watermelon, Melon and Cantaloupe bound together on crushed ice.

Manufacturer: Dinner Lady
Available Strengths: 3mg & 6mg
PG/VG: 30/70
Size: 120ml
Primary Flavors: Watermelon, Melon, Cantaloupe, Menthol`
},{
  id:'product-38',
  title:'DINNER LADY – Blackberry Crumble – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/DinnerLady-Desserts-Blackberry-Crumble-3070-Shortfill-_SNV_-UK_2000x-510x510.jpg.webp',
  desc:`Reminiscent of a blackberry pie with a short crust pastry, this Dinner Lady Blackberry Crumble combines 70% VG and 30% PG to create impressive, dense clouds with a rich flavor. Can be vaped as a 0mg liquid.

PG/VG Ratio:  70 VG / 30 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-39',
  title:'DINNER LADY – Flip Flop Lychee Ice – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2022/01/summer-holidays-flip-flop-lychee_1024x1024@2x.jpg',
  desc:`Flip Flop Lychee e-liquid by Summer Holidays features a combination of sweet and tart notes throughout. A delicate lychee flavor gets things started, countered on exhale by a combination of citrus and ice for a sharp endnote.

70% VG / 30% PG
Designed For Sub Ohm Vaping
Made In UK
Childproof Cap`
},{
  id:'product-40',
  title:'DINNER LADY – Smooth Tobacco – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/11/Smooth-Tobacco-Dinner-Lady-60mL_1024x1024@2x-510x510.jpg',
  desc:`Smooth Tobacco by Dinner Lady vape juice combines sweet and woody flavors within a formulation containing 70% VG and 30% PG to create impressive, dense clouds with a rich flavor.

Blend : 70/320
Content : 60ml
Strength : 3mg | 6mg`
},{
  id:'product-41',
  title:'DINNER LADY – Berry Blast – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2022/08/pret-a-booster-berry-blast1_1024x1024@2x.jpg',
  desc:`Try out Berry Blast by Vape Dinner Lady, capturing a sweet blend of tangy raspberries accented with a splash of cherry juice for a decadent vape juice.

Vape Dinner Lady E-Liquid – Berry Blast Features:
60mL Unicorn Bottle
Child Resistant Cap
30% PG
70% VG
Made in USA`
},{
  id:'product-42',
  title:'DINNER LADY – PURPLE RAIN (raspberry, blueberry and lemon) – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/11/DinnerLady-Fruits-Purple-Rain-3070-Shortfill-_SNV_-UK_2000x-510x510.jpg',
  desc:`Purple Rain by Vape Dinner Lady E-Liquid captures sweet and sour flavors of raspberries, blueberries, and lemon, to create a trifecta of mouth puckering fruity vape juice that will keep the senses guessing.

Vape Dinner Lady E-Liquid – Purple Rain Features:

60mL Unicorn Bottle
Child Resistant Cap
50% PG
70% VG
Made in USA
Available nicotine: 3mg, 6mg`
},{
  id:'product-43',
  title:'DINNER LADY – Strawberry Bikini Ice – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/11/Strawberry-Bikini-Shortfill-E-Liquid-by-Dinner-Lady-510x510.jpg',
  desc:`Dinner Lady Strawberry Ice 50:50 is a soda-inspired sensation that combines the tang of cloudy lemonade with vibrant strawberry for a sharp, fruity vape. If you’re looking for a sweet and refreshing e-liquid for summer, Dinner Lady Strawberry Ice could be the one for you.

This e-liquid is part of Dinner Lady’s 50/50 range, and is perfect for use with your vape pen or a similar vape kit. These Dinner Lady e-liquids have a 30% PG, 70% VG formula and are available in nicotine strengths of 6mg.`
},{
  id:'product-44',
  title:'DINNER LADY – Blue Menthol Ice – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/e-liquid-dinner-lady-blue-menthol-ice-13505930887257-510x510.jpg.webp',
  desc:`About Dinner Lady Blue Menthol E-Liquid:
A clash of cool, sweet and tangy flavours that are guaranteed to liven up a dreary day. Dinner Lady Blue Menthol fuses a chilled base of icy menthol and a heap of mixed berries, igniting prominent notes of blueberry, raspberry and blackcurrant for your enjoyment.

PG/VG Ratio:  70 VG / 30 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-45',
  title:'DINNER LADY – BUBBLE TROUBLE ICE – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/07/troubble-510x510.jpg.webp',
  desc:`Tuck Shop – Bubble Trouble ICE by Vape Dinner Lady E-Liquid is a vapable reiteration of bubble gum and menthol, capturing the sweet and upliftingly chill scent, translating into a delicious flavor that will have 4/5 vapers agree that this is it.

Dinner Lady E-Liquid – Tuck Shop – Bubble Trouble ICE Features:

60mL Unicorn Bottle
Child Resistant Cap
30% PG.
70% VG
Made in USA
Available nicotine: 0mg, 3mg, 6mg
CALIFORNIA PROPOSITION 65 – Warning: This product contains nicotine, a chemical known to the state of California to cause birth defects or other reproductive harm.`
},{
  id:'product-46',
  title:'DINNER LADY – BUBBLE TROUBLE – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/07/troubble-510x510.jpg.webp',
  desc:`Bubble Trouble is inspired by the iconic tuck shop favorite; bubble-gum. Fruity notes of classic bubblegum are apparent throughout, to create an authentic-tasting flavor.

Featuring a 70% VG 30% PG ratio.

70% VG / 50% PG
Designed For Sub Ohm Vaping
Made In The UK
Childproof Cap
Tamper Evident Seal`
},{
  id:'product-47',
  title:'DINNER LADY – CAFE TOBACCO – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/cafe-tobacco-50ml-eliquid-shortfills-by-dinner-lady-tobacco-range-510x510.jpg.webp',
  desc:`Combining the familiar hints of tobacco with a light hint of coffee, Café Tobacco provides a familiarity for smokers transitioning from smoking to vaping. Dinner Lady e-liquids contains even measures of VG and PG (70:30) for the perfect balance of flavor and vapor. Available in nicotine strengths of 3mg, 6mg

PG/VG Ratio:  70 VG / 30 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-48',
  title:'DINNER LADY – COOL TOBACCO – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/ROW_60ml_0mg_bottle_Cool_Tobacco_copy_480x480_ccf6c389-a01a-4ed2-b15e-5daf45544f32_2000x.jpg.webp',
  desc:`This cool minty tobacco hit will almost take your  breath away

Now available in store from our Melbourne Vape Shops located in Bundoora, Cheltenham, Dandenong, Nunawading and Pakenham or Order online for prompt delivery Australia Wide!

Primary Flavors: Mint, Tobacco

PG/VG Ratio:  70 VG / 30 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-49',
  title:'DINNER LADY – Lemon Tart – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/DinnerLady-Desserts-LemonTart-3070-Shortfill_SNV_-UKNEWcopy_300x300-280x280.jpg.webp',
  desc:`Dinner Lady’s award-winning Lemon Tart flavor, combining 70% VG and 30% PG to create impressive, dense clouds with a rich flavor. Can be vaped as a 0mg liquid.

PG/VG Ratio:  70 VG / 30 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-50',
  title:'DINNER LADY – MANGO ICE – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/SunTanMango-Dinner-Lady.png',
  desc:`Mango Ice e-liquid by Dinner Lady is a fruit blend with rich notes. A tropical mango flavour makes up the base with sweet, juicy notes and a tart aftertaste. On exhale, a fusion of ice and honey creates a cool and floral finish.

PG/VG Ratio:  70 VG / 30 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-1',
  title:'DINNER LADY – GRAPE STAR ICE – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2023/01/Moments_60ml-03_345x@2x-510x510.webp',
  desc:`Dinner Lady’s Grape Star is part of our new Moments range. The profile combines fruity red and black grapes, with an added kick of aniseed koolada which delivers an, consistent, and completely unique taste.

Dinner Lady Shortfills combine 70% VG and 30% PG to create impressive, dense clouds with a rich flavour. Can be vaped as a 0mg liquid, alternatively add a nicotine or CBD shot to personalise your experience.

Dinner Lady E-Liquids – Tuck Shop – Sweet Fusion Features:

60mL Glass Dropper Bottle
30% PG
70% VG
Made in UK
Available in 3mg, 6mg
Manufactured by Dinner Lady Fam (UK)`
},{
  id:'product-52',
  title:'DINNER LADY – SWEET FUSION ICE – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2022/01/DinnerLady-Ice-Sweet-Fusion-3070-Shortfill-_SNV_-UK_2000x-510x510.webp',
  desc:`Mixing sweet fruits and bitter citrus berries with icy cool koolada for a fresh intake, Dinner Lady’s Sweet Fusion Ice contains 70% VG and 30% PG to create impressive, dense clouds with a rich flavor. Can be vaped as a 0mg liquid, alternatively add a nicotine or CBD shot to personalise your experience.

Dinner Lady E-Liquids – Tuck Shop – Sweet Fusion Features:

60ml
50% PG
70% VG
Made in UK
Available in 3mg, 6mg
Manufactured by Dinner Lady Fam (UK)`
},{
  id:'product-53',
  title:'DINNER LADY – Strawberry Macaroon – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/dinner-lady-strawberry-macaroon-50ml-510x510.jpg.webp',
  desc:`Mixing an almond and coconut macaroon base with sweet strawberry, Dinner Lady Shortfills combine 70% VG and 30% PG to create impressive, dense clouds with a rich flavour. Can be vaped as a 0mg liquid.

PG/VG Ratio:  70 VG / 30 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-54',
  title:'DINNER LADY – SWEET TOBACCO – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/dinner-lady-tobacco-sweet-tobacco-us-import-dinner-lady-423336_2000x-510x510.jpg.webp',
  desc:`Vanilla creme with dark caramel subtly mixed with earthy tobacco.

PG/VG Ratio:  70 VG / 50 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-55',
  title:'DINNER LADY – BLACK ORANGE CRUSH – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2022/08/images-510x510.jpeg',
  desc:`Dinner Lady Black Orange Crush Liquid 60 ml for Electric Cigarettes

The Dinner Lady Black Orange Crush Liquid tastes deliciously blended with black currants with orange, ice and a secret ingredient.

PG/VG Ratio:  70 VG / 30 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-56',
  title:'DINNER LADY – ICE MOMENTS PEACH BUBBLE ICE – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-05-at-7.10.25-PM-510x510.jpeg',
  desc:`Bursting at the seams with pure flavor, Dinner Lady Ice moments Peach Bubble 60ml e-liquid presents a fruit blend with a candied twist. Notes of juicy ripe peaches are complemented by hints of sugary bubblegum for a sweet flavor profile guaranteed to delight.

PG/VG Ratio:  70 VG / 30 PG

Bottle Sizes:  60ml

Bottle Type:  60ml Chubby Gorilla`
},{
  id:'product-57',
  title:'DINNER LADY – Watermelon Slices Ice – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/watermelon-slices-ice-by-dinner-lady-tuck-shop-e-liquid-60ml-14395698249794-510x510.webp',
  desc:`Tuck Shop – Watermelon Slices ICE by Vape Dinner Lady E-Liquid is a tasty combination of a sun-kissed watermelon picked at the peak of perfection, mixing the extracted nectar to create a deliciously fruity eJuice touched with a hint of menthol.

Dinner Lady E-Liquid – Tuck Shop – Watermelon Slices ICE Features:

60mL Unicorn Bottle
Child Resistant Cap
30% PG
70% VG
Made in USA
Available nicotine: 0mg, 3mg, 6mg`
},{
  id:'product-58',
  title:'DINNER LADY -COLA SHADES ICE – 60ml',
  price:'1599',
  colors:['3mg','6mg'],
  price2:'2000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/07/DinnerLady-Ice-Cola-Shades-3070-Shortfill-_SNV_-UK_300x300-280x280.jpg',
  desc:`Cola Shades by Vape Dinner Lady is part of the exhilarating Summer Holidays Collection, delivering a thirst-quenching blend of authentic cola soda with subtle notes of lemon served on rocks.

Vape Dinner Lady – Summer Holidays – Cola Shades Features:
60ml
Dropper in Bottle
70% VG
50% PG
Made in USA`
},{
  id:'product-59',
  title:'NASTY FREEBASE DEVIL TEETH MADE FROM NASTY 60ml',
  price:'1600',
  colors:['3mg','6mg'],
  price2:'3000',
  image:'https://yoyovapes.com/wp-content/uploads/2021/08/devil_teeth_1024x1024-510x510.jpg.webp',
  desc:`Devil Teeth By Nasty Juice 60ml Review
Devil Teeth by Nasty Juice 60ml vape juice is a yummy and interesting mix of honeydew melon and a hint of menthol.

If you are looking for a serious thirst-quencher, Devil Teeth vape juice from Nasty Juice is the way to go. This refreshing honeydew flavor has that zesty tang and exhilarating sweetness that makes the taste buds tingle. Each puff is like sipping on cold honeydew juice on a hot summer day.

Devil Teeth vape juice is made with outstanding ingredients, ensuring a deeply authentic honeydew melon taste. If you like your ejuice flavors to taste like freshly-cut fruit, Nasty Juice has got your back. Every inhale and exhale of Devil Teeth is a truly rejuvenating experience.

As you inhale Devil Teeth vape juice, a burst of tangy honeydew melon flavor teases the palate with its titillating taste. As this flavor sits on the tongue, its sweetness begins to intensify, satisfying your sweet tooth. When you exhale, a surprisingly creamy taste from the natural melon flavor as well as that hint of menthol will be like ecstasy for your taste buds.

Devil Teeth vape juice  by Nasty Juice comes in a 60ml dropper bottle for easy pouring and is available in three nicotine strengths . Its 70 percent vegetable glycerin (VG) and 30 percent propylene glycol (PG) base is perfect for vape enthusiasts who crave a good throat hit as well as big, thick, and puffy clouds of vapor.

Devil Teeth vape juice is the ultimate treat for honeydew melon fanatics. When it comes to delivering those complex layers of fresh melon flavor, Nasty Juice does it best.

Package Contents Include:

1 x 60ml dropper bottle of Devil Teeth by Nasty Juice
VG/PG: 70/30
Flavor Profile: Honeydew, Menthol`
}
]
const iqos = [{
  id:'product-60',
  title:'IQOS 3 Duo Starter Kit',
  colors:['Blue','Grey Black'],
  price:'12000',
  price2:'12500',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/IQOS-3-DUO13-400x400-1.jpeg',
  desc:`IQOS impressed us all with the release if the IQOS 2.4 and the 2.4+, revolutionising the market with a completely unique product. Now they’ve improved on what was already a flawless product to bring your the IQOS 3. Not only improving the design with this sleek and stunning new kit. But offering faster charging times, longer battery lifespan, a sturdier and more robust casing and even offering a huge array of coloured accessories to really make your IQOS kit your own.

IQOS uses revolutionary technology that heats tobacco without burning it, giving you the true taste of tobacco with no smoke, no ash and less smell. This is ideal for health-conscious smokers who don’t wish to vape who would still like the closest alternative experience to smoking on the market.

New features on the IQOS 3:

New vibrating IQOS Holder
Beautifully simple and sophisticated new design
Array of colour option accessories
Faster charging between Heets
Longer lasting battery life
This new heat not burn technology heats the mini tobacco sticks (called Heets) but doesn’t actually burn them – so in comparison to a conventional cigarette which burns at 800 degrees, the IQOS heats the tobacco to 350 degrees  and instead produces a smoke vapour rather than traditional smoke.

This results in an average reduction of 90%-95% in the levels of toxicity and harmful substances found in tobacco IQOS vapour compared to smoke from a cigarette.

On top of that, the IQOS has no ash, no smoke, and of course significantly less smell. And because its not LIT tobacco, it also avoids the smoking ban and can be used indoors (where permitted).

Therefore moving to IQOS is a much better choice than smoking`
},
{
  id:'product-61',
  title:'IQOS HEETS Amber Selection',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/heets-amber_1024x1024@2x-510x509.webp',
  desc:`This carton contains 10 packs of HEETS tobacco sticks. Each pack contains 20 sticks, for a total of 200 sticks.

IQOS HEETS are real tobacco sticks made for IQOS ‘Heat Not Burn’ products.

Amber Selection HEETS – A rich tobacco blend.

IQOS have created an alternative for adult smokers who would otherwise continue to smoke cigarettes and want to enjoy real tobacco taste without the smoke or ash of cigarettes. This product is not intended for non smokers or ex smokers and is compatible only with the IQOS device. Do not smoke or use with other devices.

Each HEETS stick contains 0.5mg of nicotine and other flavor options are available.`
},{
  id:'product-62',
  title:'IQOS HEETS Bronze Selection',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/5917537425dde9838583580.34102933-510x510.jpg',
  desc:`HEETS made for IQOS. Real Tobacco Reimagined.
HEETS are a completely new way to enjoy tobacco. Made from the finest leaf and produced into small ‘sticks’, they open up a whole new world of taste and flavour.

Carton contains 10 packs of HEETS tobacco sticks. Each pack contains 20 sticks, for a total of 200 sticks.
IQOS HEETS are real tobacco sticks made for IQOS ‘Heat Not Burn’ products.`
},{
  id:'product-63',
  title:'IQOS HEETS Gold Selection',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2023/08/2993983505d715172efd7a3.89056249-510x510.jpg',
  desc:`Heets Gold Selection has a velvety flavour of special roasted tobacco with some woody notes and a light refreshing shade.

Carton contains 10 packs of HEETS tobacco sticks. Each pack contains 20 sticks, for a total of 200 sticks.
IQOS HEETS are real tobacco sticks made for IQOS ‘Heat Not Burn’ products.`
},{
  id:'product-64',
  title:'IQOS HEETS Green Zing',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/BEST-IQOS-HEETS-GREEN-ZING-INDIA_520x-510x490.webp',
  desc:`Spicy and fresh tobacco from Green Label HEETS delights with a feeling of cool menthol taste, filled with citrus and spicy herbal notes. HEETS Green Zing Label flavor has a peppermint flavor of roasted tobacco blend with citrus and spicy herbs.

Carton contains 10 packs of HEETS tobacco sticks. Each pack contains 20 sticks, for a total of 200 sticks.
IQOS HEETS are real tobacco sticks made for IQOS ‘Heat Not Burn’ products.`
},{
  id:'product-65',
  title:'IQOS HEETS Ruby Fuse',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2023/07/heets-ruby-fuse_1024x1024@2x-510x510.webp',
  desc:`Ruby Fuse Heets is a gentle and fragrant tobacco blend complemented by impressive berry notes with a light floral shade. For use with IQOS devices.

Carton contains 10 packs of HEETS tobacco sticks. Each pack contains 20 sticks, for a total of 200 sticks.
IQOS HEETS are real tobacco sticks made for IQOS ‘Heat Not Burn’ products.`
},{
  id:'product-66',
  title:'IQOS HEETS Slate Selection ( ex Yellow Selection )',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2023/07/Heets-Parliament-Slate-Selection_1024x1024@2x.webp',
  desc:`Heets Slate Selection (ex Yellow Selection) flavor is soft and fragrant mellow tobacco blend with some spicy notes. For use with IQOS devices.

Carton contains 10 packs of HEETS tobacco sticks. Each pack contains 20 sticks, for a total of 200 sticks.
IQOS HEETS are real tobacco sticks made for IQOS ‘Heat Not Burn’ products.`
},{
  id:'product-67',
  title:'IQOS HEETS Purple Wave',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/heets-purple_1024x1024@2x.webp',
  desc:`Purple Wave Selection Label IQOS HEETS Purple Wave (previously known as Purple Label) flavor has strong tobacco flavour with a taste almost heavy as cigars. For use only with IQOS devices. Buy IQOS Purple Heets India at your doorstep.
This carton contains 10 packs of HEETS tobacco sticks. Each pack contains 20 sticks, for a total of 200 sticks.

IQOS HEETS are real tobacco sticks made for IQOS ‘Heat Not Burn’ products.`
},{
  id:'product-68',
  title:'IQOS HEETS Silver Selection',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/Heets-Silver-Selection-India_1024x1024@2x-510x510.webp',
  desc:`Silver Label flavor has smooth taste of traditional tobacco, as light as a breeze. Philip Morris international created the IQOS Heated Tobacco technology to give adult smokers a better alternative to smoking.

Carton contains 10 packs of HEETS tobacco sticks. Each pack contains 20 sticks, for a total of 200 sticks.
IQOS HEETS are real tobacco sticks made for IQOS ‘Heat Not Burn’`
},{
  id:'product-69',
  title:'IQOS HEETS Summer Breeze',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2023/03/heets-summer-breeze_1024x1024@2x-510x510.webp',
  desc:`This carton contains 10 packs of HEETS tobacco sticks. Each pack contains 20 sticks, for a total of 200 sticks.

IQOS HEETS are real tobacco sticks made for IQOS ‘Heat Not Burn’ products.

Summer Breeze HEETS – New menthol cooling sensation enriched with bold fruity aroma notes and floral nuances is HEETS Summer Breeze in a peach-colored pack.

IQOS have created an alternative for adult smokers who would otherwise continue to smoke cigarettes and want to enjoy real tobacco taste without the smoke or ash of cigarettes. This product is not intended for non smokers or ex smokers and is compatible only with the IQOS device. Do not smoke or use with other devices.

Each HEETS stick contains 0.5mg of nicotine and other flavor options are available.`
},{
  id:'product-70',
  title:'IQOS HEETS CREATIONS – Arbour',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2024/08/heets-creations-arbor-510x510.webp',
  desc:`Heets Creations Arbor has a rich tobacco flavor with malt notes. Pressing a button reveals a fresh taste of juicy fruits. For use with IQOS 3 Duo & earlier devices.
1 carton contains 10 packs x 20 sticks = 200 sticks.
HEETS made for IQOS. Real Tobacco Reimagined.
HEETS are a completely new way to enjoy tobacco. Made from the finest leaf and produced into small ‘sticks’, they open up a whole new world of taste and flavor.`
},{
  id:'product-71',
  title:'IQOS HEETS CREATIONS – Twilight',
  price:'700',
  price2:'750',
  image:'https://yoyovapes.com/wp-content/uploads/2024/08/heets-creations-twilight-510x510.webp',
  desc:`Heets Creations Arbor has a rich tobacco flavor with malt notes. Pressing a button reveals a fresh taste of juicy fruits. For use with IQOS 3 Duo & earlier devices.
1 carton contains 10 packs x 20 sticks = 200 sticks.
HEETS made for IQOS. Real Tobacco Reimagined.
HEETS are a completely new way to enjoy tobacco. Made from the finest leaf and produced into small ‘sticks’, they open up a whole new world of taste and flavor.`
},{
  id:'product-72',
  title:'IQOS TEREA – Amber',
  price:'850',
  price2:'950',
  image:'https://yoyovapes.com/wp-content/uploads/2024/08/terea-amber-10-packs-510x510.webp',
  desc:`The new TEREA tobacco sticks by IQOS are specifically designed for the IQOS ILUMA range of devices. An evolutionary bladeless SMARTCORE INDUCTION SYSTEM consists of a stainless steel element embedded within the TEREA stick which heats to 350C via electromagnetic induction and emits a genuine tobacco flavoured vapour. The TEREA sticks are sealed at both ends which eradicates any loose tobacco or residue, ensuring a mess free vaping experience. Amber TEREA sticks for the IQOS ILUMA presents a balanced blend of roasted tobacco blend with woody and nut tones.

Note: All IQOS products including device and HEETS do not accumulate points towards our rewards programme. TEREA sticks are only compatible with the IQOS ILUMA & ILUMA one devices.`
},{
  id:'product-73',
  title:'IQOS TEREA – Silver',
  price:'850',
  price2:'950',
  image:'https://yoyovapes.com/wp-content/uploads/2024/08/terea-silver-10-packs-510x510.webp',
  desc:`Balanced blend of toasted tobacco, delicately refined with light aromatic notes of spicy herbs. For use with IQOS Iluma devices only.
The innovative heating technology in new IQOS Iluma devices is the Smartcore Induction System that heats the tobacco from within the new Terea Smartcore stick. These newly designed sticks are to be used only with IQOS Iluma, which features an auto-start function that detects when the Terea stick is inserted and automatically turns on the device.
These bladeless devices offer a cleaner way to heat tobacco from the core, without burning it, to provide a more consistent experience, no tobacco residue, and no need to clean the device.

Additionally, they generate no combustion and no smoke, and PMI’s market research indicates that IQOS ILUMA provides a more pleasurable experience compared to previous IQOS generations.`
},{
  id:'product-74',
  title:'IQOS TEREA – Sun Pearl',
  price:'850',
  price2:'950',
  image:'https://yoyovapes.com/wp-content/uploads/2024/08/terea-sun-pearl-10-packs-2-1-510x510.webp',
  desc:`1 carton contains 10 packs x 20 sticks = 200 sticks

The innovative heating technology in new IQOS Iluma devices is the Smartcore Induction System that heats the tobacco from within the new Terea Smartcore stick. These newly designed sticks are to be used only with IQOS Iluma, which features an auto-start function that detects when the Terea stick is inserted and automatically turns on the device.

These bladeless devices offer a cleaner way to heat tobacco from the core, without burning it, to provide a more consistent experience, no tobacco residue, and no need to clean the device.
Additionally, they generate no combustion and no smoke, and PMI’s market research indicates that IQOS ILUMA provides a more pleasurable experience compared to previous IQOS generations.`
},{
  id:'product-75',
  title:'IQOS HEETS Silver Selection',
  price:'850',
  price2:'950',
  image:'https://yoyovapes.com/wp-content/uploads/2024/08/terea-yellow-10-packs-510x510.webp',
  desc:`A smooth and finely balanced tobacco blend.

Discover TEREA tobacco sticks, made exclusively for IQOS ILUMA heated tobacco device. Using the innovative SMARTCORE INDUCTION SYSTEM™, TEREA paired with IQOS ILUMA bring you next level heated tobacco experience with improved draw, taste consistency and less smell*, according to most consumers.

Each TEREA packet consists of 20 specially crafted Tobacco sticks designed for use with IQOS ILUMA Devices and Kits.

Make sure you only use TEREA sticks with your IQOS ILUMA. They are single use so ensure you do not reinsert a used one.

Do not use IQOS ILUMA and TEREA sticks with previous IQOS generations, as this may cause damage to your device.`
}]
const coils = [{
    id:'product-76',
  title:'Uwell Caliburn Explorer Empty Pod – Pack of 2 Pods',
  image:'https://yoyovapes.com/wp-content/uploads/2024/04/FDA2-510x510.webp',
  price:'1100',
  price2:'1500',
  image2:'',
  desc:`Caliburn Explorer Empty Pod :
Capacity: 4mL (2mL for each cartridge)
Dual Side-Refill Design
Dual Airflow System
Super Wide ClearView (Juice Window)
INCLUDES :
2 x Uwell Caliburn Explorer Empty Replacement Pods`,
},
{
  id:'product-77',
title:'VAPORESSO LUXE X POD – Pack of 2 Pods',
image:'https://yoyovapes.com/wp-content/uploads/2023/11/group-vaporesso-luxe-x-replacement-pods.webp',
price:'1600',
price2:'1999',
image1:'https://www.vaporesso.com/hubfs/imgs/2022/pro/pod/luxe-x-pod/pic_pod-1.png',
desc:`The LUXE X pod can provide both MTL and DTL experience with 0.4Ω and 0.8Ω pods. The COREX heating technology, applied with Morph-MESH and Cumulus Cotton, ensures rapid and even heating and provide a surprisingly boosted flavor and bigger clouds from the luxe x pod.

The SSS Leak-resistant Technology with built in coil can guarantee a more mess free experience.

The unique Morph-Mesh structure of COREX ensures a more rapidly and evenly heating to improve the Vaporization Efficiency Ratio by 50%, providing bigger clouds and boosted flavor even with such a small pod.`,
},{
  id:'product-78',
title:'VAPORESSO LUXE XR MTL Pod – Pack of 2 Pods',
image:'https://yoyovapes.com/wp-content/uploads/2023/11/LuxeXRPodReplacement-Vaporesso-MTL.webp',
price:'1400',
price2:'2000',
image2:'',
desc:`The LUXE XR pod is the replaceable coil version of LUXE X pod which can also provide MTL and DTL experience. The COREX heating technology, applied on the GTX coils, ensures rapid and even heating and provide a surprisingly boosted flavor and bigger clouds.

It’s also compatible with the GTX coil platform and the LUXE X POD.

The unique Morph-Mesh structure of COREX ensures a more rapidly and evenly heating to improve the Vaporization Efficiency Ratio by 50%, providing bigger clouds and boosted flavor even with such a small pod.

The LUXE XR POD has two customized options for both MTL and DTL experience to fit with the GTX 0.4Ω MESH coil and GTX 0.8Ω MESH coil. It’s compatible with other GTX Coil platform and also compatible on the LUXE X.

The LUXE XR POD has two customized options for both MTL and DTL experience to fit with the GTX 0.4Ω MESH coil and GTX 0.8Ω MESH coil. It’s compatible with other GTX Coil platform and also compatible on the LUXE X.SSS Leak-Resistant Technology to lock the liquid inside and maximally reduce the leakage.

• 2 x VAPORESSO LUXE XR RDL/MTL POD(5ml)
• 1 x User Manual`,
},{
  id:'product-79',
title:'Vaporesso X Tank Pod – Pack of 2 Pods',
image:'https://yoyovapes.com/wp-content/uploads/2023/10/PhotoRoom_20230530_103029am.webp',
price:'900',
price2:'800',
image2:'',
desc:`Vaporesso X Tank pod is a new pod tank designed to rival the subohm tank.

The integrated top airflow and top filling, together with SSS Leak-Resistant Technology, it gives a Quadra leak resistance, better than a tank.

The Vaporesso X Tank Pod can also be fully compatible with the whole GTX coil platform.

Combined the SSS Leak-Resistant Technology and Liquid Self-Circulation System, double leak resistance in the bottom.

Compatible With Vaporesso Gen PT 60 and Gen PT 80S only`,
},{
  id:'product-80',
title:'SMOK RPM 25W KIT REPLACEMENT PODS – PACK OF 3 PODS (Compatible with LP1 coil)',
image:'https://yoyovapes.com/wp-content/uploads/2023/04/850-510x510.webp',
price:'1699',
price2:'1999',
image2:'',
desc:`Discover SMOK RPM 25 Pods (3-Pack), featuring a 2mL capacity, LP1 Coil Series Support, and delivers delicious flavor and vapor from your favorite eJuice.

SMOK RPM 25 Replacement Pods Features:
2mL Pod Capacity
Bottom Fill System – Silicone Stoppered
SMOK LP1 Coil Series
0.9ohm LP1 Coils
Press Fit Coil Installation
Magnetic Pod Connection
Comes in a pack of three (3)`,
},{
  id:'product-81',
title:'UWELL CROWN X EMPTY POD CARTRIDGE 5.3ML – PACK OF 2 PODS',
image:'https://yoyovapes.com/wp-content/uploads/2024/08/uwell-crown-x-pods-5.3ml-pack-of-2-72952-p-510x510.jpg',
price:'700',
price2:'750',
image2:'',
desc:`Don’t forget to buy replacement pods for your Uwell Crown X pod kit.  Featuring a 5.3mL capacity and convenient top-fill design.`,
},
{
  id:'product-82',
title:'Uwell Crown X Replacement Coils – 0.3ohm/0.6ohm – Pack of 4 Coils',
image:'https://yoyovapes.com/wp-content/uploads/2024/08/Crown-X-Coil-1-510x510.webp',
price:'2000',
price2:'2500',
image2:'',
desc:`0.3ohm Coil: This lower resistance coil is typically suited for direct-to-lung (DTL) vaping, providing a looser draw and the ability to produce larger, denser clouds of vapor. It’s ideal for vapers who prioritize cloud production and a more intense flavor experience.
0.6ohm Coil: The higher resistance coil is more conducive to mouth-to-lung (MTL) vaping, offering a tighter draw that mimics the sensation of smoking a traditional cigarette. It’s perfect for those who prefer a more discreet vapor production and a focused flavor profile.`,
},
{
  id:'product-83',
title:'Vaporesso GTi Coils – Pack of 5 Coils',
image:'https://yoyovapes.com/wp-content/uploads/2023/05/group-vaporesso-gti-mesh-replacement-coils_1.webp',
price:'1999',
price2:'2199',
colors:['0.4ohm','0.5ohm'],
image2:'',
desc:`Pack of 5 genuine replacement Vaporesso GTi mesh coils.

Applicable to the following Vaporesso devices (this list may date as new products are released):

Target 80 (iTank)
Target 100 (iTank)
Target 200 (iTank)
Wattage range 75-90W (best 85W).

Ensure you’re using the original tank that comes as part of the kit (iTank tank) to ensure you have the correct coils.

Packaging comes with Vaporesso hologram and authenticity sticker.

Coils in the Vaporesso GTi series:

0.15Ω Ohm – mesh 75-90W (best 85W)
0.2Ω Ohm – mesh 60-75W
0.4Ω Ohm – mesh 50-60W
0.5Ω Ohm – mesh 30-40W`,
},
{
  id:'product-84',
title:'Uwell Caliburn G3 Pod-PACK OF 2 PODS',
image:'https://yoyovapes.com/wp-content/uploads/2024/03/images-3-510x510.jpeg',
price:'1100',
price2:'1400',
image2:'',
desc:`Keep your Uwell Caliburn G3 kit hitting high notes with these replacement pods. Designed specifically for the Caliburn G3, these pods deliver crisp flavour and satisfying vapour in your choice of 0.6 ohm, 0.9 ohms or 1.2-ohm resistance. An enhanced mesh coil provides a balanced vaping experience whether you prefer restrictive direct-lung or tighter mouth-to-lung draws. The pods feature a leak-resistant design and plug directly into your Caliburn G3 kit for an easy, tool-free replacement. Keep a pack handy so you’re never without the flavour and vapour that makes the Caliburn G3 an instant classic, now in a compact, ergonomic design. Make the most of your Caliburn G3’s full potential with pods made just for it.

Integrated G3 coil cartridge
Leak-Free
Pro-FOCS flavour adjustment technology
G3 pod offers more efficient airflow
Side-filling
Resistances:

0.6Ω RDL
0.9Ω RDL/MTL
1.2Ω MTL`,
},
{
  id:'product-85',
title:'Uwell Caliburn G3 Pod-PACK OF 4 PODS',
image:'https://yoyovapes.com/wp-content/uploads/2024/03/images-3-510x510.jpeg',
price:'2000',
price2:'2300',
image2:'',
desc:`Keep your Uwell Caliburn G3 kit hitting high notes with these replacement pods. Designed specifically for the Caliburn G3, these pods deliver crisp flavour and satisfying vapour in your choice of 0.6 ohm, 0.9 ohms or 1.2-ohm resistance. An enhanced mesh coil provides a balanced vaping experience whether you prefer restrictive direct-lung or tighter mouth-to-lung draws. The pods feature a leak-resistant design and plug directly into your Caliburn G3 kit for an easy, tool-free replacement. Keep a pack handy so you’re never without the flavour and vapour that makes the Caliburn G3 an instant classic, now in a compact, ergonomic design. Make the most of your Caliburn G3’s full potential with pods made just for it.

Integrated G3 coil cartridge
Leak-Free
Pro-FOCS flavour adjustment technology
G3 pod offers more efficient airflow
Side-filling
Resistances:

0.6Ω RDL
0.9Ω RDL/MTL
1.2Ω MTL`,
},{
  id:'product-86',
title:'Uwell Caliburn A3/A3s/AK3 Replacement Pods 1.0Ω – pack of 4 Pods',
image:'https://yoyovapes.com/wp-content/uploads/2024/08/uwell-crown-x-pods-5.3ml-pack-of-2-72952-p-510x510.jpg',
price:'2000',
price2:'2500',
image2:'https://yoyovapes.com/wp-content/uploads/2023/02/uwell_caliburn_a3_replacement_pods_dr_vapes_592x592-510x510.webp',
desc:`The Uwell Caliburn A3 Replacement Pods feature a capacity of 2ml and is designed for use with the UWELL Caliburn A3 Pod System. The refillable UWELL Caliburn A3 replacement pod has a top-fill port and a removable mouthpiece. The visibility of the pod allows for easy tracking of e-juice levels. Furthermore, the magnetic connection between the pod and the device ensures a secure fit. Caliburn A3 Replacement Pod comes in a 4-Pack with an integrated 1.0ohm meshed coil.
Uwell Caliburn A3 Replacement Pods Features

Uwell Caliburn A3 Pod Series
Pod Capacity: 2ml
1.0ohm Meshed Pod Pre-Installed
Top Fill System
E-Liquid Viewing Window
Magnetic Pod Connection
What’s Included

4x Uwell Caliburn A3 Replacement Pods`,
},{
  id:'product-87',
title:'ORIGINAL JUUL CHARGER',
image:'https://yoyovapes.com/wp-content/uploads/2022/06/IMG-20220627-WA0003-510x510.jpg',
price:'1500',
price2:'2000',
image2:'',
desc:`ORIGINAL JUUL CHARGER`,
},{
  id:'product-88',
title:'SMOK NFIX PRO REPLACEMENT PODS',
image:'https://yoyovapes.com/wp-content/uploads/2022/08/SmokNfixProEmptyReplacementPod-2_600x-510x510.webp',
price:'600',
price2:'700',
image2:'',
desc:`Shop the SMOK NFIX Pro Replacement Pods, featuring a 2mL capacity, side fill system, and utilizes the LP1 Coil Series to create unrivaled vapor and flavor.

SMOK NFIX PRO Replacement Pods Features:
2mL Refillable Pod
Side Fill System – Silicone Stoppered
LP1 Mesh Coil Series
0.9ohm LP1 Mesh Coils
1.2ohm LP1 Mesh Coils
Press-Fit Coil Installation
Magnetic Pod Connection`,
},{
  id:'product-89',
title:'SMOK Stick M17 CORE COILS (0.6 Ohm) – Pack of 5 Coils',
image:'https://yoyovapes.com/wp-content/uploads/2022/08/smok_stick_m17_replacement_coils_1-510x510.jpg',
price:'1400',
price2:'1800',
image2:'',
desc:`0.6 Ohm coils for the brand new SMOK M17 All In One Vape Pen
Stainless Steel and Organic Cotton
Recommended Wattage: 25w-45w (Best 35w)
Keep this product out of the reach of children
This product contains nicotine which is highly addictive substance, the following warning only applies when the product is used with nicotine containing e-liquid.`,
},{
  id:'product-90',
title:'UWELL CALIBURN A2/A2S/AK2 PODS 1.2OHM – PACK OF 2 PODS',
image:'https://yoyovapes.com/wp-content/uploads/2022/10/cbe61b73-46bb-bcab-8c1a-63070faee164-510x510.jpg',
price:'1000',
price2:'1200',
image2:'https://yoyovapes.com/wp-content/uploads/2022/10/Caliburn-A2-Side-Refilling-Pod-1-510x510.webp',
desc:`Caliburn A2S Replacement Pod 1.2ohm by UWELL (2pcs/pack)

The Uwell Caliburn A2S Replacement Pod is the original pod cartridge designed for Caliburn A2S Pod System, also compatible with Caliburn A2. Featuring a silicone stoppered side filling to hold 2.0ml of your favorite E-juices or nicotine salts, the Caliburn A2S Pod comes with an integrated 1.2ohm mesh coil to provide delicious vapor.

Uwell Caliburn A2S Replacement Pod Features:

For Caliburn A2S Pod System
Compatible with Caliburn A2
2.0ml Pod Capacity
Silicone Stoppered Side Filling
Integrated 1.2ohm Mesh Coil
Magnetic Pod Connection
Easy to Replace
Package Includes:

2 x Uwell Caliburn A2S Replacement Pod`,
},{
  id:'product-91',
title:'UWELL CALIBURN A2/A2S/AK2 PODS 1.2OHM – PACK OF 4 PODS',
image:'https://yoyovapes.com/wp-content/uploads/2022/10/CaliburnA2SPodReplacement-Uwell-1.2ohm_500x.webp',
price:'2000',
price2:'2100',
image2:'https://yoyovapes.com/wp-content/uploads/2022/10/Caliburn-A2-Side-Refilling-Pod-1-510x510.webp',
desc:`Caliburn A2S Replacement Pod 1.2ohm by UWELL (4pcs/pack)

The Uwell Caliburn A2S Replacement Pod is the original pod cartridge designed for Caliburn A2S Pod System, also compatible with Caliburn A2. Featuring a silicone stoppered side filling to hold 2.0ml of your favorite E-juices or nicotine salts, the Caliburn A2S Pod comes with an integrated 1.2ohm mesh coil to provide delicious vapor.

Uwell Caliburn A2S Replacement Pod Features:

For Caliburn A2S Pod System
Compatible with Caliburn A2
2.0ml Pod Capacity
Silicone Stoppered Side Filling
Integrated 1.2ohm Mesh Coil
Magnetic Pod Connection
Easy to Replace
Package Includes:

4 x Uwell Caliburn A2S Replacement Pod`,
},{
  id:'product-92',
title:'UWELL CALIBURN X EMPTY POD CARTRIDGE 3ML',
image:'https://yoyovapes.com/wp-content/uploads/2022/11/UWELLCALIBURNXEMPTYREPLACEMENTPOD1-510x510.webp',
price:'700',
price2:'800',
image2:'https://yoyovapes.com/wp-content/uploads/2022/11/caliburn-x-empty-pods-2pk-800x800-1-510x510.webp',
desc:`Uwell Caliburn X Empty Pod Cartridge

Uwell Caliburn X Empty Pod Cartridge is the perfect companion for the newly released Uwell Caliburn X Kit. Having a few spares does no harm and can ensure you have several e-liquids of your choice on the go! Fear not these are available with XL capacity and come in 2 pieces per pack!

These replacement pods are compatible with the Caliburn Series Coils which are simply pushed in at the base ensuring they line up with the recess of the pod itself. Fitted with good quality O rings these are claimed to be leak free.

Uwell Caliburn X Empty Pod Cartridge Parameters
Brand: Uwell
Unit: 2pcs/pack
Capacity: XL
Compatible with: All Caliburn G and G2 Coils
Package: Simple Packing

It comes with
x2 pcs per pack`,
},{
  id:'product-93',
title:'Vaporesso Luxe Q/Q2 Replacement Pods',
image:'https://yoyovapes.com/wp-content/uploads/2022/08/vaporesso_luxe_q_replacement_pods_0.8ohm_packaging_1024x1024@2x.jpg',
price:'1100',
price2:'1500',
image2:'https://yoyovapes.com/wp-content/uploads/2022/08/2397d9_6546546c9c104a309b46bd94629d97dd_mv2-400x400.jpg',
image3:'https://yoyovapes.com/wp-content/uploads/2022/08/vaporesso_luxe_q_replacement_pods_0.8ohm_packaging_1024x1024@2x.jpg',
colors:['0.8 ohm mesh (pack of 2)','1.2 ohm mesh (pack of 2)'],
desc:`Shop the Vaporesso LUXE Q Replacement Pods, featuring a 2mL capacity, integrated 0.8ohm or 1.2ohm coils, and offers a leak-free top fill system.

Vaporesso LUXE Q Replacement Pods Features:

2mL Pod Capacity

E-Juice Viewing Window

Top Fill System – Mouthpiece Cover

SSS Leak-Resistant Technology

Integrated 0.8ohm Mesh Coil

Integrated 1.2ohm Mesh Coil

Magnetic Pod Connection

Make sure to properly prime each coils and pods before use.`,
},{
  id:'product-94',
title:'UWELL CALIBURN G2 REPLACEMENT PODS – Pack of 2 Pods',
image:'https://yoyovapes.com/wp-content/uploads/2022/03/uwell_-_caliburn_g2_empty_cartridge_-_accessories_-_2ml.png',
price:'1200',
price2:'1400',
image2:'',
desc:`Discover the Uwell Caliburn G2 Replacement Pods, featuring a 2mL pod capacity, Caliburn G2 Coil Series compatibility, and leak-free top fill system.

Uwell Caliburn G2 Replacement Pods Features:
2mL Pod Capacity
Top Fill System – Mouthpiece Cap
E-Liquid Viewing Window
Uwell Caliburn G2 Coil Series
Press Fit Coil Installation
Magnetic Pod Connection`,
},{
  id:'product-95',
title:'UWELL CALIBURN G2 REPLACEMENT PODS – SINGLE POD',
image:'https://yoyovapes.com/wp-content/uploads/2022/08/uwell-caliburn-g2-replacement-pod_2-510x510.jpg',
price:'700',
price2:'800',
image2:'',
desc:`Discover the Uwell Caliburn G2 Replacement Pods, featuring a 2mL pod capacity, Caliburn G2 Coil Series compatibility, and leak-free top fill system.

Uwell Caliburn G2 Replacement Pods Features:
2mL Pod Capacity
Top Fill System – Mouthpiece Cap
E-Liquid Viewing Window
Uwell Caliburn G2 Coil Series
Press Fit Coil Installation
Magnetic Pod Connection`,
},{
  id:'product-96',
title:'SMOK Stick M17 CORE COILS (0.6 Ohm) – Pack of 5 Coils',
image:'https://yoyovapes.com/wp-content/uploads/2022/08/smok_stick_m17_replacement_coils_1-510x510.jpg',
price:'1400',
price2:'1800',
image2:'',
desc:`0.6 Ohm coils for the brand new SMOK M17 All In One Vape Pen
Stainless Steel and Organic Cotton
Recommended Wattage: 25w-45w (Best 35w)
Keep this product out of the reach of children
This product contains nicotine which is highly addictive substance, the following warning only applies when the product is used with nicotine containing e-liquid.`,
},{
  id:'product-97',
title:'VAPORESSO QF REPLACEMENT COILS – Pack of 3 Coils',
image:'https://yoyovapes.com/wp-content/uploads/2022/02/vaporesso_skrr_qf_replacement_mesh_coils.jpg',
price:'2500',
price2:'1399',
colors:['Mesh 0.2ohm','Strip 0.15ohm'],
image2:'',
desc:`The Vaporesso QF Replacement Coils uses the combination of cotton and flax materials for a long-lasting yet flavor-enhanced performance with the following coil options: 0.2ohm QF Meshed and 0.15ohm QF Strip, and 0.5ohm QF CCELL. Comes in a package of three coils. It is introduced with the SKRR Sub-Ohm Tank and it is compatible with the Vaporesso GT Coils, but does not fit in small tanks such as the Cascade Baby or smaller-diameter glass.

Compatibility:
Vaporesso LUXE 220W Starter Kit
Vaporesso SKRR Sub-Ohm Tank
Vaporesso SKRR-S Sub-Ohm Tank
Vaporesso SKRR-S Mini Sub-Ohm Tank
Vaporesso SKY SOLO PLUS Starter Kit

Vaporesso QF Replacement Coils Features:

Vaporesso QF Coil System – Flax & Cotton Wicks
0.2ohm QF Meshed – Rated for 55-85W
0.15ohm QF Strip – Rated for 50-80W
0.5ohm QF CCELL SS316L – Rated for 50-75W
Vaporesso GT Coil Compatible — Does not fit with smaller tanks.`,
},{
  id:'product-98',
title:'UWELL CALIBURN A2, A2S & AK2 REPLACEMENT PODS 0.9ohm – PACK OF 2 PODS',
image:'https://yoyovapes.com/wp-content/uploads/2022/03/IMG_20210910_062748-510x505.jpg',
price:'1000',
price2:'1500',
image2:'',
desc:`Check out the Uwell Caliburn A2 Replacement Pods, featuring a 2mL pod capacity, 0.9ohm meshed coil, and is equipped Pro FOCS technology.

Uwell Caliburn A2 Replacement Pods Features:
Uwell Caliburn A2 Pod Series
2mL Pod Capacity
Top Fill System
0.9ohm UN2 Meshed Coil Pod
Pro-FOCS Technology
Magnetic Pod Connection

Make sure to properly prime each coils and pods before use.`,
},{
  id:'product-99',
title:'UWELL CALIBURN A2, A2s & AK2 REPLACEMENT PODS 0.90hm – PACK OF 4 PODS',
image:'https://yoyovapes.com/wp-content/uploads/2022/01/uwell-caliburn-a2-replacement-pods-p9811-31251_medium_cd595523-95de-4921-8b9d-077f804e5727_540x-510x510.jpg',
price:'2000',
price2:'2500',
image2:'',
desc:`Check out the Uwell Caliburn A2 Replacement Pods, featuring a 2mL pod capacity, 0.9ohm meshed coil, and is equipped Pro FOCS technology.

Uwell Caliburn A2 Replacement Pods Features:
Uwell Caliburn A2 Pod Series
2mL Pod Capacity
Top Fill System
0.9ohm UN2 Meshed Coil Pod
Pro-FOCS Technology
Magnetic Pod Connection

Make sure to properly prime each coils and pods before use.`,
},{
  id:'product-100',
title:'Smok LP1 Replacement Coils ( Pack of 5 Coils )',
image:'https://yoyovapes.com/wp-content/uploads/2021/07/smok-novo_4_replacement_coils-5pk_500x.png.webp',
price:'2500',
price2:'1999',
image2:'',
colors:['0.8ohm LP1 DC MTL Coil'],
desc:`The SMOK Novo 4 Replacement Coil is the original LP1 Coil Series for Novo 4 Pod. Adopting three silicone rings with press fit coil installation for a perfect leakproof performance, the Novo 4 Coil features a 0.8ohm Mesh Coil, 0.8ohm DC MTL Coil and 1.0ohm DC MTL Coil to extract purest flavor from your favorite E-juices or nic salts.

Get the replacement coil to refresh your Novo 4 Pod to a peak performance!

SMOK Novo 4 Replacement Coil Features:
SMOK LP1 Coil Series
0.8ohm LP1 Mesh Coil (Best 12W)
0.8ohm LP1 DC MTL Coil (12 – 25W)
1.0ohm LP1 DC MTL Coil (10 – 15W)
Three Rings Leakproof Design
Press Fit Coil Installation
Easy to Replace
Package Includes:
5 x SMOK Novo 4 Replacement Coil`,
}]
const concated = combinedArray.concat(snusarr,regEj,iqos,coils)
const combinedArray_final = {combinedArray,snusarr,concated,regEj,iqos,coils}
export default combinedArray_final
