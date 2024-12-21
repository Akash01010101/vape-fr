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



const concated = combinedArray.concat(snusarr)
const combinedArray_final = {combinedArray,snusarr,concated}
export default combinedArray_final
