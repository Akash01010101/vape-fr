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

const salt = [
    {
        id: "product-469",
        title: "TOKYO CRAZY FRUITS NIC SALT SERIES – EXOTIC PASSION 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Tokyo-Crazy-Fruits-Exotic-Passion-Saltnic-510x510.webp",
        desc: "TOKYO CRAZY FRUITS NIC SALT SERIES – EXOTIC PASSION 30ML\n\n\nTokyo Crazy Fruits Exotic Passion is one of the many flavors in Tokyo Crazy Fruits Exotic series. It is a burst of flavor that’s perfect for fruit lovers and vapers who’re looking for sweet and juicy flavors.\n\n\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-470",
        title: "TOKYO CRAZY FRUITS NIC SALT SERIES – GRAPE LITCHI 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/tokyo-crazy-fruit-grape-litchi-30ml-768x768-1-510x510.png",
        desc: "Craving a tastebud trip to Tokyo? Dive into the vibrant fusion of Tokyo Crazy Fruits Grape Litchi e-liquid! This 30ml bottle bursts with juicy green grapes and exotic lychee, swirling into a flavor fiesta with every puff.\nSun-kissed green grapes: Each inhale bursts with the sweet, tangy goodness of freshly picked grapes, their tartness perfectly balanced by a touch of ripeness.\nLuminous lychee: As you exhale, a wave of lychee’s tropical mystique washes over your palate, its floral notes dancing with the grape’s juiciness.\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-471",
        title: "TOKYO CRAZY FRUITS NIC SALT SERIES – GUAVA ICE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/guava_ice_02-768x768-1-510x510.webp",
        desc: "TOKYO CRAZY FRUITS NIC SALT SERIES – GUAVA ICE 30ML\n\n\nGuava Ice by Tokyo E-Juice will have your taste buds begging you for more after every puff you take off of this juice. The flavor of extraordinary guava mixed with the iconic menthol will have you melting in your spot from it.\n\n\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-472",
        title: "TOKYO CRAZY FRUITS NIC SALT SERIES – MANGO MELON 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Tokyo-Crazy-Fruits-MANGO-MELON-768x768-1-510x510.png",
        desc: "TOKYO CRAZY FRUITS MANGO MELON SALT NIC. ELIQUID the luscious sweetness of ripe mangoes with the crispness of juicy melons. Immerse yourself in a tropical paradise with every puff, as the exotic fusion delights your taste buds.\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-473",
        title: "TOKYO CRAZY FRUITS NIC SALT SERIES – GREEN GRAPE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Tokyo-Crazy-Fruits-Green-Grape-Saltnic-510x510.webp",
        desc: "The Tokyo Green Grape Iced Crazy Fruits Nic Salt Series boasts a 50/50 VG/PG ratio, delivering an exceptional vaping experience. Packaged in a convenient 30ml Chubby Gorilla Bottle, it offers nicotine strengths ranging from 35mg to 50mg, catering to your preference. Tokyo E-Liquids prioritizes quality, ensuring you get the best with every puff. Grab a bottle and savor the essence of pure green grapes in every vape!\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-474",
        title: "TOKYO CRAZY FRUITS NIC SALT SERIES – HONEY MELON 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Tokyo-Crazy-Fruits-Honey-Melon-Saltnic-510x510.webp",
        desc: "TOKYO CRAZY FRUITS NIC SALT SERIES – HONEY MELON 30ML\n\n\nTokyo Crazy Fruits Honey Melon is one delicious sweet melon flavor with tender ice.\n\n\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-475",
        title: "TOKYO CRAZY FRUITS NIC SALT SERIES – MULBERRIES 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Tokyo-Crazy-Fruits-Mulberries-Saltnic-510x510.webp",
        desc: "TOKYO CRAZY FRUITS NIC SALT SERIES – MULBERRIES 30ML\n\n\nIntroducing the Tokyo Crazy Fruits Series Salt ? Mulberries 30ml! Dive into a wild burst of flavor with this extraordinary vape juice. Get ready to tantalize your taste buds and embark on a thrilling adventure through the streets of Tokyo!\n\n\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-476",
        title: "TOKYO CRAZY FRUITS NIC SALT SERIES – SNOW PEAR 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/7-1-510x510.png",
        desc: "TOKYO CRAZY FRUITS NIC SALT SERIES – SNOW PEAR 30ML\n\n\nTokyo Crazy Fruits Snow Pear e-Juice is simply delightful. The light and sweet taste delivers a sweet and zesty flavor making it an excellent fruit vape you can enjoy all day long.\n\n\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-477",
        title: "TOKYO CRAZY FRUITS NIC SALT SERIES – TASTY LYCHEE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Tokyo-Crazy-Fruits-Tasty-Lychee-Saltnic-510x510.webp",
        desc: "TOKYO CRAZY FRUITS NIC SALT SERIES – TASTY LYCHEE 30ML\n\n\n\n\n\n\n\nEnjoy the exotic Tokyo Crazy Fruits Tasty Lychee, available all over Pakistan. Its sweet lychee flavor delivers a tropical vaping experience. With 35mg and 50mg nicotine strengths, find your perfect match in this 30ml bottle.\n\n\n\n\n\n\n\n\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-478",
        title: "TOKYO NIC SALTS – ICED GRAPEFRUIT 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Tokyo-Iced-Grapefruit-30ml-01-700x700-1-510x510.webp",
        desc: "Tokyo Iced Grapefruit 30MG 30ML\nImagine a grapefruit where all the bitterness was taken out? Now you can vape it. Our Tokyo grapefruit salt is sweet and tangy grapefruit blended with nice juicy grape, which is very delicious and no bitterness at all.\n\nSize: 30ML\nNicotine Strength: 30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-479",
        title: "TOKYO BLACK NIC SALTS – APPLE RASPBERRY MELON 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/APPLERASPBERRY-510x510.webp",
        desc: "It is a very refreshing chilling mix of juicy watermelon with the crisp taste of red and green apples and sweet-sour raspberry together, the added ice softened the bold fruity notes for a smooth finish..\n\nSize: 30ML\nNicotine Strength: 20MG/30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-480",
        title: "TOKYO BLACK NIC SALTS – CANDY CRUSH 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/CANDYCRUSH-510x510.webp",
        desc: "fruity blend of cooling fresh strawberries and sweet watermelon with a candy crunch. Bubblegum notes have been infused with the delicate exotic fruits to give you a smooth vape with a combination of sweet notes.\n\nSize: 30ML\nNicotine Strength: 20MG/30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-481",
        title: "TOKYO BLACK NIC SALTS – DOUBLE APPLE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/DOUBLEAPPLE_30e74e8a-8986-4de8-8dab-739f463d58de-510x510.webp",
        desc: "Tokyo Juice Black Double Apple 30ml Double Apple blends together the very best of a sour green apple waking up your taste buds and the sweet richness of a delicious red apple rounding out into a satisfying cloud. Our Double Apple Ice has a juicy sour intake with an icy fruity exhale, making this one of our favorite fruit treats…\n\nSize: 30ML\nNicotine Strength: 20MG/30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-482",
        title: "TOKYO BLACK NIC SALTS – GREEN GRAPE APPLE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/GREENGRAPEAPPLE-510x510.webp",
        desc: "A perfect combination of plump juicy grapes with undertones of refreshing crisp apples which produces a great iced fruity taste .\n\nSize: 30ML\nNicotine Strength: 20MG/30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-483",
        title: "TOKYO NIC SALTS – CAPPUCCINO 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/aHR0cDovL3d3dy50b2t5b2VqdWljZS5jb20vcWZ5LWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzA0L2I5NWZjZGRmNGY1OGIxMDZiZmY2YjY0YTJlZGE2NDEwLTQwMHg0MDAtOTAud2VicA_p_p100_p_3D_p_p100_p_3D-400x400-1.webp",
        desc: "Flavor Profile: A hypnotic combination of various coffee beans infused with almond, caramel and cinnamon. This unique coffee flavor is specially for the cold or tough days . With it you will cheer up.\n\nSize: 30ML\nNicotine Strength: 30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-484",
        title: "TOKYO NIC SALTS – ICED BLUEBERRY 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Tokyo-ICed-BLueberry-30ml-510x510.jpg",
        desc: "A perfect blend of tarty blueberry sweetness with an icy, refreshing menthol finish. A perfect flavor for all day vape, Blueberry ice is a great choice for menthol lovers who want a fruit flavor experience that isn’t excessively sweet.\n\nSize: 30ML\nNicotine Strength: 20MG/30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-485",
        title: "TOKYO NIC SALTS – ICED GRAPE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Tokyo-Iced-Grape-30ml-01-800x800-1-510x510.webp",
        desc: "Experience the revitalizing ice blast with a perfectly delicious and authentic purple grape. Your taste buds will be tantalized by the incredible, mouthwatering flavor of grapes combined with a hint of cooling ice. It will definitely gratify your vaping needs.\n\nSize: 30ML\nNicotine Strength: 20MG/30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-486",
        title: "TOKYO NIC SALTS – ICED LEMON 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Tokyo-Iced-Lemon-30ml-01-700x700-1-510x510.webp",
        desc: "Tokyo Iced lemon 20MG 30ML\nFresh zesty lemons combined with icy mint and sweet fragrant honey together, will send your palate back to the very first time you waited in line for this cool delicious flavor.\n\nSize: 30ML\nNicotine Strength: 30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-487",
        title: "TOKYO NIC SALTS – ICED PASSION FRUIT 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Tokyo-Iced-Passion-Fruit-30ml-01-510x510.webp",
        desc: "Introducing the ICED PASSION FRUIT TOKYO CLASSIC SERIES 30ML, where the vibrant streets of Tokyo meet the cool embrace of a summer breeze. Dive into a world of tantalizing flavors that will leave you craving more. Expertly blended to create a smooth and satisfying vaping experience. With a generous 30ml bottle, you’ll have plenty of this delectable concoction to savor, ensuring that the journey never has to end.\nPrepare your taste buds for a symphony of sensations as succulent passion fruit collide in a burst of irresistible goodness. With each inhale, you’ll be whisked away to a blissful oasis, where the tangy sweetness of ripe passion fruit dances on your tongue, awakening your senses with every puff.\n\nSize: 30ML\nNicotine Strength: 20MG/30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-488",
        title: "TOKYO NIC SALTS – ICED PINA COLADA 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Tokyo-Saltnic-Iced-Pina-Colada-30ml_540x_9fa2c0dc-0dc1-4874-89e7-5615902b21b7.webp",
        desc: "Tokyo Iced pina colada Saltnic is a deliciously cool, sweet, and tangy vape juice flavor. With a smooth and creamy base, this vape Juice is infused with succulent pineapple and  for a delightful summer taste. Enjoy a dose of deliciousness with this premium e-liquid. Packed with cool and icy flavor, Tokyo Iced Pina Colada Saltnic will instantly become your all-day vape.\n\nSize: 30ML\nNicotine Strength: 30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-489",
        title: "TOKYO NIC SALTS – ICED STRAWBERRY WATERMELON 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/tokyo-salt-30ml-ice-strawberry-watermelon-copy-510x510.webp",
        desc: "Discover the delightful fusion of Tokyo Iced Strawberry Watermelon, a chilled e-liquid sensation. With Strawberry Watermelon by Tokyo, enjoy a blend of sweet strawberries and juicy watermelon with a cool twist. Available in 30mg, and 50mg nicotine strengths, it caters to your desired hit. The Tokyo Strawberry Watermelon flavor is perfect for an icy refreshment any time of the day. It’s a taste of Tokyo in every puff, offering a unique vaping experience. Dive into the coolness with this flavorful escape that’s both fruity and invigorating.\n\nSize: 30ML\nNicotine Strength: 30MG\nNOT FOR SUB-OHM USE: DO NOT use with Sub-Ohm Atomizers and/or Devices Only for Low Wattage Mouth-to-Lung Devices"
    },
    {
        id: "product-490",
        title: "TOKYO SUPER COOL NIC SALT SERIES – COCA COLA ICE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Coca-Cola-Tokyo-Super-Cool-nic-salt-1-768x768-1-510x510.jpg",
        desc: "Tokyo SUPER COOL NIC SALT SERIES – COCA COLA ICE 30ML\n\nCoca Cola Iced  Super Cool Nic Salt Series 30ml E-Liquids. The iciest cola you’ll ever try, and it’ll make your taste buds go crazy. With its sweet cola flavor Tokyo E-Liquids fans all over the world have been raving about, this crisp cold cola will not disappoint.\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-491",
        title: "TOKYO SUPER COOL NIC SALT SERIES – MATCHA GREEN TEA ICED 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Matcha-Green-Tea-Tokyo-Super-Cool-Nic-Salt-1-510x510.jpg",
        desc: "Tokyo SUPER COOL NIC SALT SERIES – MATCHA GREEN TEA ICED 30ML\n\nTokyo Matcha Green Tea Iced Super Cool Nic Salt Series 30ml E-Liquids. Some describe matcha as earthy, grassy, and slightly bitter. It also has a slightly sweet taste that balances out the other flavors of the tea. In traditional Japanese tea ceremonies, matcha is typically served with sweets to make the natural sweetness of the tea more prominent.\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-492",
        title: "TOKYO SUPER COOL NIC SALT SERIES – MELON MELODY 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Melon-Melody-Tokyo-Super-Cool-Nic-Salt-1-768x768-1-510x510.jpg",
        desc: "Tokyo SUPER COOL NIC SALT SERIES – MELON MELODY 30ML\nTokyo Melon Melody Iced Super Cool Nic Salt Series 30ml E-Liquids. Like sinking your teeth into a ripe melon on a hot day, Melon Medley tastes sweet with strong melon and floral notes.\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-493",
        title: "TOKYO SUPER COOL NIC SALT SERIES – BLOOD ORANGE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Blood-Orange-Tokyo-Super-Cool-Nic-Salt-1-768x768-1-510x510.webp",
        desc: "Tokyo Blood Orange Super Cool Nic Salt Series 30ml E-Liquids. Blood Orange flavor gives you the feel of sweet & tangy oranges & tangy grapefruit & a hint of tart cherries and raspberries with extreme chilled ice.\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-494",
        title: "TOKYO SUPER COOL NIC SALT SERIES – MANGOSTEEN 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Tokyo-Super-Cool-Salt-Mangosteen-30ml-768x768-1-510x510.jpg",
        desc: "Discover the exotic allure of Tokyo Super Cool Mango Steen Ice – a 30ml vape juice available only at vapestation.pk. Immerse yourself in the tropical fusion of juicy mango and the unique sweetness of mangosteen, perfectly chilled with an icy finish.\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-495",
        title: "TOKYO SUPER COOL NIC SALT SERIES – PASSION FRUIT 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Tokyo-Saltnic-Super-Cool-Passion-Fruit-30ml-50mg_2048x2048.webp",
        desc: "This exquisite salt nic e-liquid from Tokyo manufactured to perfection, the Super Cool Passion Fruit e-liquid is a vaping paradise. The combination of sweet and tart passion fruit with an undertone of coolness is an e-liquid experience like no other. Tokyo Super Cool Passion Fruits adds a touch of excitement and sophistication to any smoking session.\nCrafted with meticulous attention to detail, Tokyo Super Cool Passion Fruits tantalizes the palate with its sweet and tangy aroma, reminiscent of freshly harvested passion fruits. Each inhale brings forth a wave of tropical goodness, as the juicy essence of the fruit dances on your taste buds, leaving a delightful sweetness lingering in the air.\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-496",
        title: "TOKYO SUPER COOL NIC SALT SERIES – PEAR ICE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Pear-Tokyo-Super-Cool-Nic-Salt-1-768x768-1-510x510.jpg",
        desc: "Tokyo SUPER COOL NIC SALT SERIES – PEAR ICE 30ML\n\nTokyo Pear Iced Super Cool Nic Salt Series 30ml E-Liquids. Pear flavour is a tart, and sweet pear flavouring. This flavour offers the savory sweetness of a newly picked fresh fruit taste.\n\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-497",
        title: "TOKYO SUPER COOL NIC SALT SERIES – PINEAPPLE ICE 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/TOKYOSALTNICSUPERCOOLPINEAPPLEICE30ML35MG_720x-510x555.webp",
        desc: "Tokyo Saltnic Super Cool Pineapple Ice 30ml is the ultimate vaping experience for those who crave a perfect blend of sweet and icy flavours. This premium e-liquid delivers a burst of juicy pineapple with every inhale, followed by an invigorating blast of menthol that cools your senses. Designed for a smooth and satisfying throat hit, Tokyo Saltnic Super Cool Pineapple Ice is perfect for both seasoned vapers and newcomers looking for a high-quality nicotine salt option. Available in two nicotine strengths, 35mg and 50mg, this e-liquid ensures you can tailor your vaping experience to your personal preference.\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-498",
        title: "TOKYO SUPER COOL NIC SALT SERIES – TROPICAL MANGO 30ML",
        price: "1500",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/TOKYO-SUPER-COOL-TROPICAL-MANGO-510x510.jpg",
        desc: "TOKYO SUPER COOL TROPICAL MANGO SALT NIC. ELIQUID Experience Tropical Bliss, Dive into a tropical paradise with every puff of our mango-infused e-liquid. Let the juicy sweetness transport you to a sunny getaway!\n\n\n1: VG/PG 50/50\n2: 30ml Chubby Gorilla Bottle\n3: Available Nicotine: 35mg-50mg"
    },
    {
        id: "product-499",
        title: "DINNER LADY SALT – 3 BOTTLES COMBO OFFER – 30ML (30MG)",
        price: "4350",
        price2: "4500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/2397d9_f1bd9c19e63c4fef8653a4e954c2ff08_mv2-510x504.png",
        desc: "POD SALT – 3 BOTTLES COMBO OFFER – 30ML (30MG)"
    },
    {
        id: "product-500",
        title: "DINNER LADY SALT – 5 BOTTLES COMBO OFFER – 30ML (30MG)",
        price: "7200",
        price2: "7500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/2397d9_f1bd9c19e63c4fef8653a4e954c2ff08_mv2-510x504.png",
        desc: "DINNER LADY SALT – 5 BOTTLES COMBO OFFER – 30ML (30MG)"
    },
    {
        id: "product-501",
        title: "DINNER LADY SALT – 5 BOTTLES COMBO OFFER – 30ML (50MG)",
        price: "7200",
        price2: "7500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/2397d9_f1bd9c19e63c4fef8653a4e954c2ff08_mv2-510x504.png",
        desc: "DINNER LADY SALT – 5 BOTTLES COMBO OFFER – 30ML (50MG)"
    },
    {
        id: "product-502",
        title: "DINNER LADY SALT – 3 BOTTLES COMBO OFFER – 30ML (50MG)",
        price: "4350",
        price2: "4500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/2397d9_f1bd9c19e63c4fef8653a4e954c2ff08_mv2-510x504.png",
        desc: "DINNER LADY SALT – 3 BOTTLES COMBO OFFER – 30ML (50MG)"
    },
    {
        id: "product-503",
        title: "VGOD SALTS – 5 BOTTLES COMBO OFFER – 30ML (25MG/50MG)",
        price: "8000",
        price2: "8500",
        image: "https://yoyovapes.com/wp-content/uploads/2022/05/Vgod_Group__41521.1579196340-510x510.jpg",
        desc: "VGOD SALTS – 5 BOTTLES COMBO OFFER – 30ML (25MG/50MG)"
    },
    {
        id: "product-504",
        title: "POD SALT – 3 BOTTLES COMBO OFFER – 30ML (25MG)",
        price: "4800",
        price2: "5200",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/1_b0177911-2ce3-4151-a796-387ad0600fae_1024x-510x510.webp",
        desc: "POD SALT – 3 BOTTLES COMBO OFFER – 30ML (25MG)"
    },
    {
        id: "product-505",
        title: "POD SALT – 5 BOTTLES COMBO OFFER – 30ML (25MG)",
        price: "7500",
        price2: "8499",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/1_b0177911-2ce3-4151-a796-387ad0600fae_1024x-510x510.webp",
        desc: "POD SALT – 5 BOTTLES COMBO OFFER – 30ML (25MG)"
    },
    {
        id: "product-506",
        title: "POD SALT – 3 BOTTLES COMBO OFFER – 30ML (50MG)",
        price: "4800",
        price2: "5200",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/1_b0177911-2ce3-4151-a796-387ad0600fae_1024x-510x510.webp",
        desc: "POD SALT – 3 BOTTLES COMBO OFFER – 30ML (50MG)"
    },
    {
        id: "product-507",
        title: "POD SALT – 5 BOTTLES COMBO OFFER – 30ML (50MG)",
        price: "7500",
        price2: "8499",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/1_b0177911-2ce3-4151-a796-387ad0600fae_1024x-510x510.webp",
        desc: "POD SALT – 5 BOTTLES COMBO OFFER – 30ML (50MG)"
    },
    {
        id: "product-508",
        title: "POD SALT – 5 BOTTLES COMBO OFFER – 30ML (20MG)",
        price: "7500",
        price2: "8499",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/1_b0177911-2ce3-4151-a796-387ad0600fae_1024x-510x510.webp",
        desc: "POD SALT – 5 BOTTLES COMBO OFFER – 30ML (20MG)"
    },
    {
        id: "product-509",
        title: "POD SALT – 3 BOTTLES COMBO OFFER – 30ML (20MG)",
        price: "4800",
        price2: "5200",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/1_b0177911-2ce3-4151-a796-387ad0600fae_1024x-510x510.webp",
        desc: "POD SALT – 3 BOTTLES COMBO OFFER – 30ML (20MG)"
    },
    {
        id: "product-510",
        title: "I LOVE SALTS – 3 BOTTLES COMBO OFFER – 30ML (25MG/50MG)",
        price: "4650",
        price2: "4800",
        image: "https://yoyovapes.com/wp-content/uploads/2022/05/US_Warehouse_I_Love_Salts_Collection_30ml_Nic_Salt_Vape_Juice_-510x510.jpg",
        desc: "I LOVE SALTS – 3 BOTTLES COMBO OFFER – 30ML (25MG/50MG)"
    },
    {
        id: "product-511",
        title: "I LOVE SALTS – 5 BOTTLES COMBO OFFER – 30ML (25MG/50MG)",
        price: "7499",
        price2: "7999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/05/US_Warehouse_I_Love_Salts_Collection_30ml_Nic_Salt_Vape_Juice_-510x510.jpg",
        desc: "I LOVE SALTS – 5 BOTTLES COMBO OFFER – 30ML (25MG/50MG)"
    },
    {
        id: "product-512",
        title: "BLVK NIC SALTS – 5 BOTTLES COMBO OFFER – 30ML (35MG/50MG)",
        price: "7500",
        price2: "8000",
        image: "https://yoyovapes.com/wp-content/uploads/2023/01/1b52d70cec14358d317820656b3cb68_png-510x510.webp",
        desc: "BLVK NIC SALTS – 5 BOTTLES COMBO OFFER – 30ML (35MG/50MG)"
    },
    {
        id: "product-513",
        title: "OSKUL (by NKD 100 USA) Nic Salt Gift Box of 10 Flavors – 100ml (10ml each bottle) – 35mg",
        price: "4000",
        price2: "4400",
        image: "https://yoyovapes.com/wp-content/uploads/2023/03/8a0445d2859f4a9d8007a79fe3a43d32_1944x-510x721.webp",
        desc: "Product Features:\n\n\n\n\nASMODUS OSKUL PLUS is in a gift box. There are 10 bottles 10 flavors in the box. The bottle is a Gorilla lq bottle with guaranteed quality, There is not much brilliance in the design of the packaging, Quite conventional. The bottle capacity is 10ml.The nic-salt content currently comes with 35mg.The mix ratio of 50VG/50PG is also conventional.\nWARNING: This product contains nct. nct is an addictive chemical.\n\n\n\n\nProduct Specifications:\n\n\n\n\n Brand\nASMODUS\n\n\n Model\nOSKUL PLUS\n\n\n Capacity\n10ml\n\n\n Flavors\nMango Smoothie/Mango Peach/Lychee Ice/Pineapple Ice/BlackCurrant Fudge/Strawberry Cheese Cake/Grape Fruit/Energy Drink/Lemon Mint/Blueberry Raspberry\n\n\n nct-salt\n35MG\n\n\n Ingredients\nWater,nct,PG,VG,flavorings\n\n\n PG/VG\n50/50\n\n\n Quantity\n10 Bottles/Pack\n\n\n\n\nPackage Contents:\n\n\n\n\n10 x OSKUL PLUS Gift Box"
    },
    {
        id: "product-514",
        title: "NASTY LIQ EDITION- SPEARMINT  BY NASTY SALT 30ML",
        price: "1499",
        price2: "1800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Early-510x510.png",
        desc: "Refresh your senses with the crisp coolness of spearmint, delivering a revitalizing blast of minty freshness that invigorates the palate and leaves you feeling rejuvenated.\nDiscover Nasty Liq Nicotine Salt E-Liquid 30mL offers a unique “disposable-like” experience, characterized by smooth delivery and bold flavors that are usually found in single-use devices. However, the advantage of Nasty Liq is that it can be enjoyed in your preferred open system platforms. Nasty Liq Salt Vape juice is available in a wide range of nicotine concentrations and comes in a 30ml bottle with child resistant cap.\nSPECIFICATIONS:\n\nBottle Size: 30ml\nChubby unicorn Bottle\nNicotine Type: Nicotine Salt\nChild Resistant Cap\nNicotine Level: 35mg and 50mg\nMade in USA\n\nFLAVORS:\nAloe Grape / Cherry Cola / Kiwi Passion Fruit Guava / Mango Peach / Peach Ice / Pomegranate Berry / Vhimto Bull / Watermelon Ice\nIngredients: Vegetable Glycerine, Propylene Glycol, Flavors, Nicotine Salt.\nAbout Nasty Juice:\nNasty – manufactured in the USA, providing a cutting-edge solutions in the vaping world, less harmful than traditional cigarettes – Electronic Nicotine Delivery Systems or ENDS is the most popular and most effective method of smoking cessation in the market.\nWARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.\nE-liquids contain nicotine and other substances which may be toxic. Avoid skin contact or any contact with eyes. Should contact occur, immediately flush with water and seek medical attention. Inhaling e-liquids exposes you to health risks.\nFDA Disclaimer:\nThe statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. For their protection, please keep out of reach of children and pets. Read our terms and conditions page before purchasing our products. Use All Products On This Site At Your Own Risk!"
    },
    {
        id: "product-515",
        title: "NASTY LIQ EDITION- FRUIT FUSION  BY NASTY SALT 30ML",
        price: "1499",
        price2: "1800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/e-510x510.png",
        desc: "Embark on a flavor adventure with a symphony of assorted fruits dancing on your palate, offering a harmonious blend of sweetness and tanginess that’s as complex as it is delightful.\nDiscover Nasty Liq Nicotine Salt E-Liquid 30mL offers a unique “disposable-like” experience, characterized by smooth delivery and bold flavors that are usually found in single-use devices. However, the advantage of Nasty Liq is that it can be enjoyed in your preferred open system platforms. Nasty Liq Salt Vape juice is available in a wide range of nicotine concentrations and comes in a 30ml bottle with child resistant cap.\nSPECIFICATIONS:\n\nBottle Size: 30ml\nChubby unicorn Bottle\nNicotine Type: Nicotine Salt\nChild Resistant Cap\nNicotine Level: 35mg and 50mg\nMade in USA\n\nFLAVORS:\nAloe Grape / Cherry Cola / Kiwi Passion Fruit Guava / Mango Peach / Peach Ice / Pomegranate Berry / Vhimto Bull / Watermelon Ice\nIngredients: Vegetable Glycerine, Propylene Glycol, Flavors, Nicotine Salt.\nAbout Nasty Juice:\nNasty – manufactured in the USA, providing a cutting-edge solutions in the vaping world, less harmful than traditional cigarettes – Electronic Nicotine Delivery Systems or ENDS is the most popular and most effective method of smoking cessation in the market.\nWARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.\nE-liquids contain nicotine and other substances which may be toxic. Avoid skin contact or any contact with eyes. Should contact occur, immediately flush with water and seek medical attention. Inhaling e-liquids exposes you to health risks.\nFDA Disclaimer:\nThe statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. For their protection, please keep out of reach of children and pets. Read our terms and conditions page before purchasing our products. Use All Products On This Site At Your Own Risk!"
    },
    {
        id: "product-516",
        title: "NASTY LIQ EDITION- WATERMELON ICE BY NASTY SALT 30ML",
        price: "1499",
        price2: "1800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/nasty-liq-nicotine-salt-e-liquid-30ml-watermelon-ice-510x510.jpg",
        desc: "Quench your thirst with the crisp juiciness of freshly sliced watermelon, enhanced by a chilling blast of menthol, delivering a revitalizing vaping experience that’s perfect for hot summer days.\nDiscover Nasty Liq Nicotine Salt E-Liquid 30mL offers a unique “disposable-like” experience, characterized by smooth delivery and bold flavors that are usually found in single-use devices. However, the advantage of Nasty Liq is that it can be enjoyed in your preferred open system platforms. Nasty Liq Salt Vape juice is available in a wide range of nicotine concentrations and comes in a 30ml bottle with child resistant cap.\nSPECIFICATIONS:\n\nBottle Size: 30ml\nChubby unicorn Bottle\nNicotine Type: Nicotine Salt\nChild Resistant Cap\nNicotine Level: 35mg and 50mg\nMade in USA\n\nFLAVORS:\nAloe Grape / Cherry Cola / Kiwi Passion Fruit Guava / Mango Peach / Peach Ice / Pomegranate Berry / Vhimto Bull / Watermelon Ice\nIngredients: Vegetable Glycerine, Propylene Glycol, Flavors, Nicotine Salt.\nAbout Nasty Juice:\nNasty – manufactured in the USA, providing a cutting-edge solutions in the vaping world, less harmful than traditional cigarettes – Electronic Nicotine Delivery Systems or ENDS is the most popular and most effective method of smoking cessation in the market.\nWARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.\nE-liquids contain nicotine and other substances which may be toxic. Avoid skin contact or any contact with eyes. Should contact occur, immediately flush with water and seek medical attention. Inhaling e-liquids exposes you to health risks.\nFDA Disclaimer:\nThe statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. For their protection, please keep out of reach of children and pets. Read our terms and conditions page before purchasing our products. Use All Products On This Site At Your Own Risk!"
    },
    {
        id: "product-517",
        title: "NERD PLUS NIC SALTS – ENERGY BLAZE 30ML",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/nerd-plus-salt-nic-30ml-e-liquid-vapeboo-556921_1200x1200-510x714.webp",
        desc: "The Nerd Plus Energy Blaze Nic Salt flavor combines tangy, sweet candy notes with the bold, invigorating taste of energy drink. This blend offers a vibrant and stimulating experience, mixing sugary candy sweetness with a fizzy, citrusy energy boost. Nicotine salt ensures a satisfying, smooth hit.\nThis nicotine salt is recommended for pod system devices and it is better to use it before use. Shake the amount.\nAttributes:\n\nVolume: 30ML\nVegetable glycerin (VG): 50%\nPropylene Glycol (PG): 50%\nNicotine: 25 mg"
    },
    {
        id: "product-518",
        title: "NERD PLUS NIC SALTS – EXOTIC LYCHEE 30ML",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/nerd-plus-salt-nic-30ml-e-liquid-vapeboo-250182_1200x1200-510x714.webp",
        desc: "The Nerd Plus Exotic Lychee Nic Salt flavor combines tangy, sweet candy notes with the tropical, floral sweetness of lychee. This blend offers a refreshing and exotic vaping experience with a perfect balance of candy-like sweetness and juicy, aromatic lychee. Nicotine salt ensures a satisfying, smooth hit.\nThis nicotine salt is recommended for pod system devices and it is better to use it before use. Shake the amount.\nAttributes:\n\nVolume: 30ML\nVegetable glycerin (VG): 50%\nPropylene Glycol (PG): 50%\nNicotine: 25 mg"
    },
    {
        id: "product-519",
        title: "NERD PLUS NIC SALTS – GRAPE EXTREME ICE 30ML",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/nerd-plus-salt-nic-30ml-e-liquid-vapeboo-265099_1200x1200-510x714.webp",
        desc: "The Nerd Plus Grape Extreme Ice Nic Salt flavor combines tangy, sweet candy notes with juicy grape and an intense, cooling menthol finish. This blend offers a nostalgic, fruity sweetness balanced by a refreshing, icy sensation. Nicotine salt ensures a satisfying, smooth hit.\nThis nicotine salt is recommended for pod system devices and it is better to use it before use. Shake the amount.\nAttributes:\n\nVolume: 30ML\nVegetable glycerin (VG): 50%\nPropylene Glycol (PG): 50%\nNicotine: 25 mg"
    },
    {
        id: "product-520",
        title: "NERD PLUS NIC SALTS – LOTUS CHEESE CAKE 30ML",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/nerd-plus-salt-nic-30ml-e-liquid-vapeboo-533660_1200x1200-510x714.webp",
        desc: "The Nerd Plus Lotus Cheesecake Nic Salt flavor combines tangy, sweet candy notes with the rich, creamy taste of cheesecake and the warm, spiced sweetness of Lotus Biscoff. This blend offers a nostalgic, dessert-like experience. Nicotine salt ensures a satisfying, smooth hit.\nThis nicotine salt is recommended for pod system devices and it is better to use it before use. Shake the amount.\nAttributes:\n\nVolume: 30ML\nVegetable glycerin (VG): 50%\nPropylene Glycol (PG): 50%\nNicotine: 25 mg"
    },
    {
        id: "product-521",
        title: "NERD PLUS NIC SALTS – UNICORN 30ML",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/nerd-plus-salt-nic-30ml-e-liquid-vapeboo-338506_1200x1200-510x714.webp",
        desc: "The Nerd Plus Unicorn Nic Salt flavor combines tangy, sweet candy notes with a blend of fruity, creamy, and sugary flavors, reminiscent of a whimsical unicorn treat. This blend offers a playful and magical taste experience, with a perfect balance of sweetness and smoothness. Nicotine salt ensures a satisfying, smooth hit.\nThis nicotine salt is recommended for pod system devices and it is better to use it before use. Shake the amount.\nAttributes:\n\nVolume: 30ML\nVegetable glycerin (VG): 50%\nPropylene Glycol (PG): 50%\nNicotine: 25 mg"
    },
    {
        id: "product-522",
        title: "VUEL NIC SALTS – MAD BLUE CREATED BY NERD 30ML",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/04/madblue-1024x1024-1-510x510.png",
        desc: "Mad Blue by Vuel Nerd is a delicious and complex nicotine salts e-liquid that combines the flavors of blueberries and strawberries into a unique and satisfying vaping experience.\nVuel Created by NERD – Mad Blue Salt 30mL Features:\n\n30mL Bottle\n50% PG\n50% VG\nMade in UK."
    },
    {
        id: "product-523",
        title: "VUEL NIC SALTS – SWEET MELON CREATED BY NERD 30ML",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/04/sweetmelon-1024x1024-1-510x510.png",
        desc: "Made with high-quality ingredients and nicotine salts, Sweet Melon by Vuel Nerd Salts comes in a convenient 30mL bottle and is available in various nicotine strengths to suit every vaper’s needs.\nVuel Created by NERD – Sweet Melon Salt 30ml Features:\n\n30mL Bottle\n50% PG\n50% VG\nMade in UK."
    },
    {
        id: "product-524",
        title: "NASTY LIQ EDITION- GRAPE POMEGRANATE  BY NASTY SALT 30ML",
        price: "1499",
        price2: "1800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/e-4-510x510.png",
        desc: "Nasty Pomegranate Grape Juice is an attractive fruity flavor with a taste of purple grapes and juicy, red pomegranate seeds that invites you to enjoy and delicious vaping.\nDiscover Nasty Liq Nicotine Salt E-Liquid 30mL offers a unique “disposable-like” experience, characterized by smooth delivery and bold flavors that are usually found in single-use devices. However, the advantage of Nasty Liq is that it can be enjoyed in your preferred open system platforms. Nasty Liq Salt Vape juice is available in a wide range of nicotine concentrations and comes in a 30ml bottle with child resistant cap.\nSPECIFICATIONS:\n\nBottle Size: 30ml\nChubby unicorn Bottle\nNicotine Type: Nicotine Salt\nChild Resistant Cap\nNicotine Level: 35mg and 50mg\nMade in USA\n\nFLAVORS:\nAloe Grape / Cherry Cola / Kiwi Passion Fruit Guava / Mango Peach / Peach Ice / Pomegranate Berry / Vhimto Bull / Watermelon Ice\nIngredients: Vegetable Glycerine, Propylene Glycol, Flavors, Nicotine Salt.\nAbout Nasty Juice:\nNasty – manufactured in the USA, providing a cutting-edge solutions in the vaping world, less harmful than traditional cigarettes – Electronic Nicotine Delivery Systems or ENDS is the most popular and most effective method of smoking cessation in the market.\nWARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.\nE-liquids contain nicotine and other substances which may be toxic. Avoid skin contact or any contact with eyes. Should contact occur, immediately flush with water and seek medical attention. Inhaling e-liquids exposes you to health risks.\nFDA Disclaimer:\nThe statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. For their protection, please keep out of reach of children and pets. Read our terms and conditions page before purchasing our products. Use All Products On This Site At Your Own Risk!"
    },
    {
        id: "product-525",
        title: "NASTY LIQ EDITION- CHERRY COLA BY NASTY SALT 30ML",
        price: "1499",
        price2: "1800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/nasty-liq-nicotine-salt-e-liquid-30ml-cherry-cola-510x510.jpg",
        desc: "Indulge in the effervescent nostalgia of everyone’s favorite soda fountain classic infused with the rich sweetness of ripe cherries, creating a symphony of flavors that dance on the palate with each puff.\nDiscover Nasty Liq Nicotine Salt E-Liquid 30mL offers a unique “disposable-like” experience, characterized by smooth delivery and bold flavors that are usually found in single-use devices. However, the advantage of Nasty Liq is that it can be enjoyed in your preferred open system platforms. Nasty Liq Salt Vape juice is available in a wide range of nicotine concentrations and comes in a 30ml bottle with child resistant cap.\nSPECIFICATIONS:\n\nBottle Size: 30ml\nChubby unicorn Bottle\nNicotine Type: Nicotine Salt\nChild Resistant Cap\nNicotine Level: 35mg and 50mg\nMade in USA\n\nFLAVORS:\nAloe Grape / Cherry Cola / Kiwi Passion Fruit Guava / Mango Peach / Peach Ice / Pomegranate Berry / Vhimto Bull / Watermelon Ice\nIngredients: Vegetable Glycerine, Propylene Glycol, Flavors, Nicotine Salt.\nAbout Nasty Juice:\nNasty – manufactured in the USA, providing a cutting-edge solutions in the vaping world, less harmful than traditional cigarettes – Electronic Nicotine Delivery Systems or ENDS is the most popular and most effective method of smoking cessation in the market.\nWARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.\nE-liquids contain nicotine and other substances which may be toxic. Avoid skin contact or any contact with eyes. Should contact occur, immediately flush with water and seek medical attention. Inhaling e-liquids exposes you to health risks.\nFDA Disclaimer:\nThe statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. For their protection, please keep out of reach of children and pets. Read our terms and conditions page before purchasing our products. Use All Products On This Site At Your Own Risk!"
    },
    {
        id: "product-526",
        title: "NASTY LIQ EDITION- POMEGRANATE BERRY BY NASTY SALT 30ML",
        price: "1499",
        price2: "1800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/nasty-liq-nicotine-salt-e-liquid-30ml-pomegranate-berry-510x510.jpg",
        desc: "Immerse yourself in a whirlwind of flavor with the tangy complexity of pomegranate harmonizing with an assortment of succulent berries, offering a tantalizing vaping experience that’s both refreshing and invigorating.\nDiscover Nasty Liq Nicotine Salt E-Liquid 30mL offers a unique “disposable-like” experience, characterized by smooth delivery and bold flavors that are usually found in single-use devices. However, the advantage of Nasty Liq is that it can be enjoyed in your preferred open system platforms. Nasty Liq Salt Vape juice is available in a wide range of nicotine concentrations and comes in a 30ml bottle with child resistant cap.\nSPECIFICATIONS:\n\nBottle Size: 30ml\nChubby unicorn Bottle\nNicotine Type: Nicotine Salt\nChild Resistant Cap\nNicotine Level: 35mg and 50mg\nMade in USA\n\nFLAVORS:\nAloe Grape / Cherry Cola / Kiwi Passion Fruit Guava / Mango Peach / Peach Ice / Pomegranate Berry / Vhimto Bull / Watermelon Ice\nIngredients: Vegetable Glycerine, Propylene Glycol, Flavors, Nicotine Salt.\nAbout Nasty Juice:\nNasty – manufactured in the USA, providing a cutting-edge solutions in the vaping world, less harmful than traditional cigarettes – Electronic Nicotine Delivery Systems or ENDS is the most popular and most effective method of smoking cessation in the market.\nWARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.\nE-liquids contain nicotine and other substances which may be toxic. Avoid skin contact or any contact with eyes. Should contact occur, immediately flush with water and seek medical attention. Inhaling e-liquids exposes you to health risks.\nFDA Disclaimer:\nThe statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. For their protection, please keep out of reach of children and pets. Read our terms and conditions page before purchasing our products. Use All Products On This Site At Your Own Risk!"
    },
    {
        id: "product-527",
        title: "NASTY LIQ EDITION- RASPBERRY WATERMELON  BY NASTY SALT 30ML",
        price: "1499",
        price2: "1800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/e-1-510x510.png",
        desc: "Quench your thirst with the succulent sweetness of ripe raspberries and juicy watermelon, creating a refreshing fusion of fruity flavors that’s perfect for all-day vaping.\nDiscover Nasty Liq Nicotine Salt E-Liquid 30mL offers a unique “disposable-like” experience, characterized by smooth delivery and bold flavors that are usually found in single-use devices. However, the advantage of Nasty Liq is that it can be enjoyed in your preferred open system platforms. Nasty Liq Salt Vape juice is available in a wide range of nicotine concentrations and comes in a 30ml bottle with child resistant cap.\nSPECIFICATIONS:\n\nBottle Size: 30ml\nChubby unicorn Bottle\nNicotine Type: Nicotine Salt\nChild Resistant Cap\nNicotine Level: 35mg and 50mg\nMade in USA\n\nFLAVORS:\nAloe Grape / Cherry Cola / Kiwi Passion Fruit Guava / Mango Peach / Peach Ice / Pomegranate Berry / Vhimto Bull / Watermelon Ice\nIngredients: Vegetable Glycerine, Propylene Glycol, Flavors, Nicotine Salt.\nAbout Nasty Juice:\nNasty – manufactured in the USA, providing a cutting-edge solutions in the vaping world, less harmful than traditional cigarettes – Electronic Nicotine Delivery Systems or ENDS is the most popular and most effective method of smoking cessation in the market.\nWARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.\nE-liquids contain nicotine and other substances which may be toxic. Avoid skin contact or any contact with eyes. Should contact occur, immediately flush with water and seek medical attention. Inhaling e-liquids exposes you to health risks.\nFDA Disclaimer:\nThe statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. For their protection, please keep out of reach of children and pets. Read our terms and conditions page before purchasing our products. Use All Products On This Site At Your Own Risk!"
    },
    {
        id: "product-528",
        title: "NASTY LIQ EDITION- GUAVA ICE  BY NASTY SALT 30ML",
        price: "1499",
        price2: "1800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Early-1-510x510.png",
        desc: "Transport yourself to a tropical oasis with the exotic sweetness of ripe guava balanced by a refreshing menthol finish, creating a vape that’s both fruity and invigorating, perfect for those hot summer days.\nDiscover Nasty Liq Nicotine Salt E-Liquid 30mL offers a unique “disposable-like” experience, characterized by smooth delivery and bold flavors that are usually found in single-use devices. However, the advantage of Nasty Liq is that it can be enjoyed in your preferred open system platforms. Nasty Liq Salt Vape juice is available in a wide range of nicotine concentrations and comes in a 30ml bottle with child resistant cap.\nSPECIFICATIONS:\n\nBottle Size: 30ml\nChubby unicorn Bottle\nNicotine Type: Nicotine Salt\nChild Resistant Cap\nNicotine Level: 35mg and 50mg\nMade in USA\n\nFLAVORS:\nAloe Grape / Cherry Cola / Kiwi Passion Fruit Guava / Mango Peach / Peach Ice / Pomegranate Berry / Vhimto Bull / Watermelon Ice\nIngredients: Vegetable Glycerine, Propylene Glycol, Flavors, Nicotine Salt.\nAbout Nasty Juice:\nNasty – manufactured in the USA, providing a cutting-edge solutions in the vaping world, less harmful than traditional cigarettes – Electronic Nicotine Delivery Systems or ENDS is the most popular and most effective method of smoking cessation in the market.\nWARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.\nE-liquids contain nicotine and other substances which may be toxic. Avoid skin contact or any contact with eyes. Should contact occur, immediately flush with water and seek medical attention. Inhaling e-liquids exposes you to health risks.\nFDA Disclaimer:\nThe statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. For their protection, please keep out of reach of children and pets. Read our terms and conditions page before purchasing our products. Use All Products On This Site At Your Own Risk!"
    },
    {
        id: "product-529",
        title: "NASTY LIQ EDITION- WATERMELON STRAWBERRY  BY NASTY SALT 30ML",
        price: "1499",
        price2: "1800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/e-5-510x510.png",
        desc: "Dive into a fusion of summer’s finest with the luscious sweetness of ripe watermelon intertwined with the succulent essence of sun-kissed strawberries, delivering a burst of refreshing flavor with every inhale and exhale.\nDiscover Nasty Liq Nicotine Salt E-Liquid 30mL offers a unique “disposable-like” experience, characterized by smooth delivery and bold flavors that are usually found in single-use devices. However, the advantage of Nasty Liq is that it can be enjoyed in your preferred open system platforms. Nasty Liq Salt Vape juice is available in a wide range of nicotine concentrations and comes in a 30ml bottle with child resistant cap.\nSPECIFICATIONS:\n\nBottle Size: 30ml\nChubby unicorn Bottle\nNicotine Type: Nicotine Salt\nChild Resistant Cap\nNicotine Level: 35mg and 50mg\nMade in USA\n\nFLAVORS:\nAloe Grape / Cherry Cola / Kiwi Passion Fruit Guava / Mango Peach / Peach Ice / Pomegranate Berry / Vhimto Bull / Watermelon Ice\nIngredients: Vegetable Glycerine, Propylene Glycol, Flavors, Nicotine Salt.\nAbout Nasty Juice:\nNasty – manufactured in the USA, providing a cutting-edge solutions in the vaping world, less harmful than traditional cigarettes – Electronic Nicotine Delivery Systems or ENDS is the most popular and most effective method of smoking cessation in the market.\nWARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.\nE-liquids contain nicotine and other substances which may be toxic. Avoid skin contact or any contact with eyes. Should contact occur, immediately flush with water and seek medical attention. Inhaling e-liquids exposes you to health risks.\nFDA Disclaimer:\nThe statements made regarding these products have not been evaluated by the Food and Drug Administration. The efficacy of these products has not been confirmed by FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any disease. All information presented here is not meant as a substitute for or alternative to information from health care practitioners. For their protection, please keep out of reach of children and pets. Read our terms and conditions page before purchasing our products. Use All Products On This Site At Your Own Risk!"
    },
    {
        id: "product-530",
        title: "NKD 100 SALT – 5 BOTTLES COMBO OFFER – 30ML (35MG)",
        price: "7500",
        price2: "8500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/NakedS-510x510.webp",
        desc: "NKD 100 SALT – 5 BOTTLES COMBO OFFER – 30ML (35MG)"
    },
    {
        id: "product-531",
        title: "POD SALT NICOTINE SALT – BLUEBERRY JAM TART BY JAMMIN – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/Jammin_2_720x_dff3b8a0-91af-4f56-b2e2-4af4b65918e0_720x-510x510.jpg",
        desc: "Blueberry Jam Tart e-liquid by Pod Salt and Jammin’ is a dessert blend with a fruity taste. On inhale a buttery pastry flavour base is detectable straight away. On exhale the blueberry jam is sweet, with a sugary finish.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-532",
        title: "POD SALT NICOTINE SALT – CANDY RUSH BUBBLE BLUE – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/Pod_Salt_Fusion_Range_30ml_Box_and_Bottle_25mg_Mockup_Bubble_Blue-510x510.webp",
        desc: "This retro bubble gum e-liquid from Candy Rush has a sweet, light taste. A celebration of chewy candy in every vape.\nThe Podsalt Fusion range is an exclusive e-liquid collaboration project. Podsalt brings you the world’s biggest brands and blends their signature flavours with our award-winning Nicotine Salt. Designed to taste delicious. Designed to Hit the Spot.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-533",
        title: "POD SALT NICOTINE SALT – BLUE BERG – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/01/pod-salt-likit-692_16915379061-1000-510x510.jpeg",
        desc: "With a flavor as deep as the unseen iceberg, Blue Berg has a mouthwatering combination of sweet blueberries and raspberries, topped with refreshing ice and a hint of anise. Blended with our award-winning Nicotine Salts formula.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-534",
        title: "POD SALT NICOTINE SALT – CHERRY ICE – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/01/cherryice_2-510x510.webp",
        desc: "Rich and tart cherries come together for a deliciously juicy vape. Complimented with an icy breeze for the perfect all-day flavour. Blended with our award-winning Nicotine Salts formula.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-535",
        title: "POD SALT NICOTINE SALT – COLA WITH LIME – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/cola-whit-time-pod-salt-30ml-510x510.jpg",
        desc: "A timeless classic from Big Tasty. Tasty cola is piqued with a fresh bittersweet lime flavour.\nThe pod salt fusion range is an exclusive e-liquid collaboration project. Pod Salt brings you the world’s biggest brands and blends their signature flavours with our award-winning nic salt. Designed to taste delicious. Designed to Hit the Spot.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-536",
        title: "POD SALT NICOTINE SALT – ORIGIN – CUBAN CRÈME – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/Pod_Salt_Core_Range_30ml_Box_and_Bottle_25mg_Mockup_Cuban_Creme_900x-510x510.webp",
        desc: "A unique take on a Cuban tabacco classic. Hand-made cigars with an earthy woody and sharp aroma with hints of sweet vanilla crème.\nThe Podsalt Core range offers a premium selection of British-made flavours. Blended with our award-winning Nicotine Salt to produce a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-537",
        title: "POD SALT NICOTINE SALT – ORIGIN LIQUOR TOBACCO – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/09/pod-salt-origin-liquor-tobacco-eliquid-10ml-510x510.jpg",
        desc: "POD SALT ORIGIN LIQUOR TOBACCO\nDelicious and dark, this full-bodied flavor has the earthy and characteristic flavor of tobacco, complemented by absinth that gives it a bitter and liquory touch.\n\nFlavor Profile: Tobacco, Licorice\nBottle size: 30ml\nNicotine strength: 25 mg/50 mg\nNicotine Type: Nicotine Salts\nRatio: 50VG/50PG\nRecommended for use with: pod devices.\n\nFor the best Pod Salt experience, we recommend vaping MTL style and any low wattage device with a medium to tight draw.\nCharacteristics:\n\nIntense flavor of tobacco and licorice\nMild nicotine salts\n50VG/50PG ratio\nMade in the UK\nTPD compliant"
    },
    {
        id: "product-538",
        title: "POD SALT NICOTINE SALT – BLUE ICE – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/05/blue-ice-pod-salt-30ml-510x510.jpg",
        desc: "A tantalising blueberry fruit flavour with ice menthol for an icy cool finish.\nThe Podsalt Core range offers a premium selection of British-made flavours. Blended with our award-winning Nicotine Salt to produce a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-539",
        title: "POD SALT NICOTINE SALT – NEXUS FUJI APPLE PEACH – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/05/file-1.jpg",
        desc: "Introducing our Fuji Peach fusion. Enliven your senses with sweet, juicy peaches from the traditional Japanese highlands.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-540",
        title: "POD SALT NICOTINE SALT – NEXUS LEMON LIME SORBET – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/01/Early-17-510x510.png",
        desc: "A citrus Nexus flavors kept chillingly cold, like a delicious chilled dessert. Combining sweet and zingy lemon and lime with a cool ice. Totally refreshing and light.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 20/25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-541",
        title: "POD SALT NICOTINE SALT – STRAWBERRY BANANA RHUBARB  – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/download-18.jpg",
        desc: "A delightful hybrid of grapefruit x raspberry x lime creating a perfect burst of citrus and a bittersweet finish.\nRadically different in nature, Nexus says goodbye to cigarettes and instead brings new waves of energy to your vaping experience. Five unique flavors designed to hit the spot and change your perspective. Nexus is blended with Pod Salt’s award-winning Nicotine Salt to provide a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 20/25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-542",
        title: "POD SALT NICOTINE SALT – SUPER LOE – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/superloe_1-510x510.webp",
        desc: "An artist’s infusion of pomegranate x tropical Açai x aloe vera essences. This fruity masterpiece brings a touch of class to your vaping experience.\nRadically divergent in nature, Nexus says goodbye to smoking and instead brings new waves of energy into your vaping experience. Five unique flavours designed to mark the spot and change your perspective. Nexus is blended with Pod Salt’s award-winning Nicotine Salt to produce a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 20/25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-543",
        title: "POD SALT NICOTINE SALT – SWEET TANGERINE COCONUT – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/SweetTangerineCoconut800px_600x600_crop_center_d664725d-cd87-4ec1-8e58-55a9ead74273-510x510.webp",
        desc: "A delightful hybrid of grapefruit x raspberry x lime creating a perfect burst of citrus and a bittersweet finish.\nRadically different in nature, Nexus says goodbye to cigarettes and instead brings new waves of energy to your vaping experience. Five unique flavors designed to hit the spot and change your perspective. Nexus is blended with Pod Salt’s award-winning Nicotine Salt to provide a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 20/25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-544",
        title: "POD SALT NICOTINE SALT – NEXUS BERRY LEMON ICE  (Ice Edition) – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/berry-lemon-ice-nic-salt-e-liquid-by-pod-salt-nexus_2-510x510.jpg",
        desc: "Deliciously nostalgic and full of flavor.  A candy-inspired nexus with sweet and spicy pineapple surrounded by sugary goodness.  Sweet and refreshing vape with an acidic touch.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 20/25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-545",
        title: "POD SALT NICOTINE SALT – NEXUS SOUR BLUE RASPBERRY – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/01/Early-18-510x510.png",
        desc: "Deliciously nostalgic and full of flavor.  A candy-inspired nexus with sweet and spicy pineapple surrounded by sugary goodness.  Sweet and refreshing vape with an acidic touch.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 20/25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-546",
        title: "POD SALT NICOTINE SALT – NEXUS STRAWBERRY WATERMELON KIWI – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/05/nexus-strawberry-watermelon-kiwi-pod-salt-30ml-downtown-vapoury-durban-umhlanga-salts-rock-ballito-vape-shop-e-cigs-vaping-ejuice-e-juice-dab-pen-cbd-vape-disposable-vapes-vape-device-510x510.jpg",
        desc: "Treat the senses with this light and summery Pod Salt Nexus Strawberry Watermelon Kiwi of sunshine-favourite fruits. Enjoy juicy watermelon notes with the sweetest British strawberries, complimented with delicately sweet kiwi slices.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-547",
        title: "POD SALT NICOTINE SALT – ORIGIN MENTHOL TOBACCO – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/05/menthol-tobacco_1_-510x510.webp",
        desc: "Reminiscent of the menthol cigarette, this tobacco tastes just like the hand-rolled flavours you love with a refreshing menthol breeze to cool those warm tastiest. Perfect for those transitioning from smoking to vaping.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-548",
        title: "POD SALT NICOTINE SALT – ORIGIN VIRGINIA GOLD – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/11/virginiagold_1-510x510.webp",
        desc: "For the refined palette, this mellow tobacco is well-rounded and light. Richly highlighted by light caramel that offers sweet notes with each puff.\n• Flavour Profile: Tobacco, Caramel\n• Capacity: 30ml\n• Nicotine Strength: 20mg/25mg/50mg\n• Ratio: 50VG/50PG"
    },
    {
        id: "product-549",
        title: "POD SALT NICOTINE SALT – STRAWBERRY KIWI ICE ( Pacha mama ) – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/Pod_Salt_Fusion_Range_30ml_Box_and_Bottle_50mg_Mockup_Strawberry_Kiwi_Ice-510x510.webp",
        desc: "A fruity blend of ripe strawberries and tropical kiwi finished with a smooth, icy exhale. A magical earthiness lives deep in this all-day vaping experience.\nThe Pod Salt Core range offers a premium selection of British made flavours. Blended with our award-winning nicotine salt to produce a perfectly smooth and effective vaping experience. Designed to be delicious. Designed to hit the bull’s eye.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-550",
        title: "POD SALT NICOTINE SALT – LYCHEE ICE – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/Pod_Salt_Core_Range_30ml_Box_and_Bottle_25mg_Mockup_Lychee_Ice-510x510.webp",
        desc: "Refreshing Lychee fruit given a cool, icy twist. A native delicacy from tropical Southeast Asia, this sweet Lychee blend works wonders in our award-winning Nicotine salt format.\nThe Podsalt Core range offers a premium selection of British-made flavours. Blended with our award-winning Nicotine Salt to produce a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-551",
        title: "POD SALT NICOTINE SALT – Marshmallow Man III – Strawberry Marshmallow – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/pod-salt-marshmallow-man-iii-strawberry-marshmallow-salts-30ml-35mg-1857296-800.jpg",
        desc: "A smooth and creamy blend of fluffy marshmallows and strawberries for an indulgent and fruity vape. Finished with a touch of sweet vanilla. If you like your dessert vapes, you’re going to love Marshmallow Man III\nThis Marshmallow Man III Nicotine Salt E-liquid is a Fusions collaboration by Pod Salt and Marina. An original and exclusive flavour for an all-day vaping experience. In the third instalment of Marina’s Marshmallow Man trilogy, Marshmallow Man III lives up to its name.\nThe Pod Salt Fusions range is an exclusive E-liquid collaboration project. Pod Salt brings you the world’s biggest brands and blends their signature flavours with our award-winning Nicotine Salt. Designed to taste delicious. Designed to Hit the Spot.\n\nPOD SALT Bottle Size – 30 ML\nNicotine Level – 25/50 mg\nIngredients – Propylene Glycol, Vegetable Glycerin, Natural & Artificial Flavours, Nicotine."
    },
    {
        id: "product-552",
        title: "POD SALT NICOTINE SALT BANANA ICE – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/ps_new_flavour-banana_ice_copy_580x-510x510.webp",
        desc: "Get the pick of the bunch with our deliciously sweet and creamy banana flavour with a fresh, icy twist, paired alongside our award-winning Nicotine Salt formula.\nThe Pod Salt Fusions range is an exclusive E-liquid collaboration project. Pod Salt brings you the world’s biggest brands and blends their signature flavours with our award-winning Nicotine Salt. Designed to taste delicious. Designed to Hit the Spot."
    },
    {
        id: "product-553",
        title: "POD SALT NICOTINE SALT BLUEBERRY MIST – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/f1e044b9-0ecf-482f-aeab-18c224ec68d4-510x510.jpg",
        desc: "Blueberry Mist by Pod Salt is a sweet flavor of Blueberry upon inhale and give type refreshing felling of an Icy Menthol on the exhale. Every vape is a celebration with this flavour.\nThe Pod Salt Fusions range is an exclusive E-liquid collaboration project. Pod Salt brings you the world’s biggest brands and blends their signature flavours with our award-winning Nicotine Salt. Designed to taste delicious. Designed to Hit the Spot."
    },
    {
        id: "product-554",
        title: "POD SALT NICOTINE SALT BLUEBERRY POMEGRANATE – 30ML",
        price: "1699",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-09-30-at-11.23.07-AM-510x510.jpeg",
        desc: "A wonderful combination of rich blueberries and exotic pomegranate. Together with our award-winning Nicotine Salt formula, you get the perfect balance between sweet and tangy for your taste buds to enjoy.\nThe Pod Salt Core range offers a premium selection of British-made flavours. Blended with our award-winning Nicotine Salt to produce a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot."
    },
    {
        id: "product-555",
        title: "POD SALT NICOTINE SALT GRAPE – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/09/ps_new_flavour-grape-510x510.webp",
        desc: "Packed full of aromatic, sweet and juicy grapes, this crisp grape flavour has great depth for a taste that’s as refreshing as it is satisfying.\nThe Pod Salt Core range offers a premium selection of British-made flavours. Blended with our award-winning Nicotine Salt to produce a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot."
    },
    {
        id: "product-556",
        title: "POD SALT NICOTINE SALT LEMON SLICE – 30ML",
        price: "1699",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/09/ps_new_flavour-lemon_slice_copy-510x510.webp",
        desc: "A slice of your favourite Lemon sponge cake. A deliciously smooth and creamy dessert making this an irresistible treat.\nThe Pod Salt Core range offers a premium selection of British-made flavours. Blended with our award-winning Nicotine Salt to produce a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot."
    },
    {
        id: "product-557",
        title: "POD SALT NICOTINE SALT MANGO ICE – 30ML",
        price: "1699",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/MangoIceby-PodSalt_dae5c456-8ab0-4783-8509-7f3e27a2e2dc_700x700-510x510.webp",
        desc: "A refreshing blend of exotic mango and ice menthol for a cool, refreshing vape experience.\nThe Pod Salt Core range offers a premium selection of British-made flavours. Blended with our award-winning Nicotine Salt to produce a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot."
    },
    {
        id: "product-558",
        title: "POD SALT NICOTINE SALT MIXED BERRIES ICE – 30ML",
        price: "1699",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/4_38e928d6-62a8-452a-848a-24ec31fab5af_800x-510x510.webp",
        desc: "Mixed Berries nicotine salt e-liquid by Pod Salt is a combination of rich, fruity flavours. The blend of mixed berries delivers a sweet and juicy flavour to create a layered yet simple vape.\nThe Pod Salt Fusions range is an exclusive E-liquid collaboration project. Pod Salt brings you the world’s biggest brands and blends their signature flavours with our award-winning Nicotine Salt. Designed to taste delicious. Designed to Hit the Spot."
    },
    {
        id: "product-559",
        title: "POD SALT NICOTINE SALT CANTALOUPE ICE – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/01/cantaloupe-ice-510x510.webp",
        desc: "Juicy and tender, each inhale delights the taste buds with sweet cantaloupe melon slices. Dashed with ice for a refreshing finish. Blended with our award-winning Nicotine Salts formula.\n• Flavour profile: Cantaloupe, Ice\n• Bottle Size: 30ml\n• Nicotine Strength: 20mg\n• Nicotine type: Nicotine Salts\n• Ratio: 50VG/50PG"
    },
    {
        id: "product-560",
        title: "POD SALT NICOTINE SALT WATERMELON BREEZE – 30ML",
        price: "1699",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-30-at-11.25.33-AM-510x510.jpeg",
        desc: "This combination of refreshing watermelon with an icy breeze makes for a cool and mouth-watering experience.\nThe Pod Salt Core range offers a premium selection of British-made flavours. Blended with our award-winning Nicotine Salt to produce a perfectly smooth and effective vaping experience. Designed to taste delicious. Designed to Hit the Spot."
    },
    {
        id: "product-561",
        title: "VLADDIN Coffee latte Nic Salts 30ml",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/03/cf0fee93-b7fc-9ec6-ac85-6116401adc94-510x510.jpg",
        desc: "Nic salts E-liquid vape juice 30ml 30mg/50mg by Vladdin, to provide you with high quality and good e-liquid, cheer for your every day anytime, anywhere come and buy it."
    },
    {
        id: "product-562",
        title: "VLADDIN Fresh Lychee Nic Salts 30ml",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/10/VLADDIN-FRESH-LYCHEE-ICE-30ML-30mg-in-pakistan-510x510.jpg",
        desc: "Vladdin Salt – Fresh Lychee Ice 30ml (30, 50 mg)\nVladdin Fresh Lychee Saltnic 30ml, a brand familiar to vapers who love the salt nic Pod System. Fresh Lychee by Vladdin gives you the best mouthwatering flavor of LYCHEE with Smoothing ICE.\nVladdin now launches a line of 30mg and 50mg Salt Nicotine essential oils with a combination of tropical fruits with a unique, natural flavor. Enjoy a mixture of flavors at the same time.\nVladdin is gaining popularity in the international market with its high-quality product lines and focus on the best experiences for vapers.\nVladdin Fresh Lychee Saltnic 30ml Features:\n\nFlavour Profile: Lychee with Ice\nNicotine Strength: 30mg-50mg\nPG/VG: 50/50\nBottle Size: 30ml Chubby Gorilla Bottle"
    },
    {
        id: "product-563",
        title: "VLADDIN Green Apple Nic Salts 30ml",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/10/Green-Apple-vladin-tranzax--510x510.jpeg",
        desc: "Vladdin Green Apple Saltnic 30ml, a brand familiar to vapers who love the salt nic Pod System. Green Apple by Vladdin gives you the best mouthwatering flavor of TROPICAL GREEN APPLE with ICE\nVladdin now launches a line of 30mg and 50mg Salt Nicotine essential oils with a combination of tropical fruits with a unique, natural flavor. Enjoy a mixture of flavors at the same time.\nVladdin is gaining popularity in the international market with its high-quality product lines and focus on the best experiences for vapers.\nVladdin Green Apple Saltnic 30ml Features:\nFlavour Profile: Tropical Green Apple With Ice\nNicotine Strength: 30mg-50mg\nPG/VG: 50/50\nBottle Size: 30ml Chubby Gorilla Bottle"
    },
    {
        id: "product-564",
        title: "VLADDIN Gummy Bear Nic Salts 30ml",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/10/5B19ED06-957D-4791-BA45-505E69415B9E-510x510.jpeg",
        desc: "VLADDIN Gummy Bear 30ml is a sweet and fruity vape juice that is perfect for vapers who are looking for a delicious and satisfying vape experience. The juice is made with a blend of gummy bear, strawberry, and watermelon flavors, and it has a smooth and creamy throat hit.\nThe first thing you’ll notice about VLADDIN Gummy Bear 30ml is the delicious aroma. The gummy bear flavor is the most prominent, but there are also hints of strawberry and watermelon. The flavor is very well-balanced, and it’s not too sweet or too tart. The throat hit is smooth and creamy, and it’s not too harsh.\nVLADDIN Gummy Bear 30ml is a great choice for vapers who are looking for a sweet and fruity vape juice with a smooth throat hit. The juice is available in a 30ml bottle, and it has a nicotine strength of 30mg.\nIn addition to the delicious flavor, VLADDIN Gummy Bear 30ml also has a number of other features that make it a great choice for vapers. The juice is made with high-quality ingredients, and it is free of harmful chemicals. The juice is also very smooth, and it does not produce a lot of harshness.\nIf you are looking for a delicious and satisfying vape juice, then VLADDIN Gummy Bear 30ml is a great option. The juice is made with high-quality ingredients, and it has a smooth and creamy throat hit. The flavor is also very well-balanced, and it’s not too sweet or too tart.\nSpecifications:\n\nBrand: Vladdin\nFlavor: Gummy Bear\nNicotine strength: 30mg/50mg"
    },
    {
        id: "product-565",
        title: "VLADDIN Honeydew ice Nic Salts 30ml",
        price: "1499",
        price2: "1999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/03/5c9b427c-f59a-3306-1998-61163ca51614-510x510.jpg",
        desc: "Nic salts E-liquid vape juice 30ml 30mg/50mg by Vladdin, to provide you with high quality and good e-liquid, cheer for your every day anytime, anywhere come and buy it."
    },
    {
        id: "product-566",
        title: "VGOD Mango Bomb 30ml Nic Salt ( Without Ice )",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2021/07/download-5.jpg",
        desc: "Key Features of Mango Bomb Nic Salt Juice by VGOD\n\n30ml nic salt juice by VGOD\nAvailable in 25mg (2.5%) and 50mg (5.0%) nicotine strengths\n45PG / 55VG\nFlavor Profile: Mango\n\nAbout Mango Bomb Nic Salt Juice by VGOD\nBright, refreshing, and perfect for keeping the heat at bay, VGOD’s Mango Bomb Nic Salt Juice offers a wave of fresh island mango and invigorating mint flavors in this mouthwateringly delicious flavor profile. Irresistibly authentic, VGOD’s Mango Bomb Nic Salt Juice delivers a sweet and radiant burst of mango flavor that dissolves into an icy clean mint exhale. If you’re an iced tropical vape enthusiast, you won’t want to miss out on trying VGOD’s refreshing Mango Bomb Nic Salt Juice today.\nVGOD’s Iced Mango Bomb Nic Salt Juice comes in a 30ml bottle of nicotine salt juice with your choice between a 25mg (2.5%) and 50mg (5.0%) nicotine strength. Uninterested in mango? Check out the full selection of VGOD e-liquids."
    },
    {
        id: "product-567",
        title: "VGOD Apple Bomb ICE 30ml Nic Salt",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2022/04/vgod-iced-apple-bomb-in-pakistan_540x-510x510.jpg",
        desc: "Apple Bomb ICE by VGOD SaltNic is a vapable rendition of sour apple belts dusted in sweet sugar, reduced down to a sensational elixir that will befuddle the senses with tasty apple flavored clouds.\nLiquid Details:\n\nBrand: VGOD\nFlavor: ICED Apple Bomb SaltNic\nBottle Size: 30mL\nBottle Type: Chubby Unicorn Bottle\nVG/PG: 45/55\nMade in USA\nNicotine Type: Salt Nicotine\nAvailable Nicotine Levels: 25mg / 50mg"
    },
    {
        id: "product-568",
        title: "VGOD MANGO BOMB ICE 30ml Nic Salt",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2022/04/iced_mango_bomb_-_vgod_e-liquid_-_60ml_-_box_and_bottle.jpg",
        desc: "Shop ICED Mango Bomb by VGOD E-Liquid, featuring a thick mango nectar base enhanced with a uplifting blast of menthol to refresh the senses.\nLiquid Details:\n\nBrand: VGOD\nFlavor: ICED Mango Bomb SaltNic\nBottle Size: 30mL\nBottle Type: Chubby Unicorn Bottle\nVG/PG: 45/55\nMade in USA\nNicotine Type: Salt Nicotine\nAvailable Nicotine Levels: 25mg / 50mg"
    },
    {
        id: "product-569",
        title: "VGOD MIX BLUE RAZZ ICE 30ml Nic Salt",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/VGOD_SaltNic_MIX_IcedBlueRazz_30ml_25mg_ALPHA_800x_56a9f884-83bc-4f60-97f4-9e6e8329a6fd-510x510.webp",
        desc: "Presenting the newly launched VGOD Salt-Nic Iced Blue Razz – the pinnacle of refreshment with each inhale. Plunge into the mouthwatering fusion of arctic coolness and luscious blue raspberry taste with our superior salt nicotine e-liquid. This vape juice delivers precise craftsmanship, delivering a gush of vibrant flavor that beckons for another vape. Relish in the zest of blue raspberries, freshly plucked, and masterfully paired with a frosty aura that invigorate your taste buds. Each breath in sweeps you into a surge of berry bliss, and each breath out persists with a cool, rewarding aftertaste.\nFeatures\n\nFlavor profile: Blue Razz\niced: yes\nNicotine Strength: 50mg\nVG/PG: 50/50\npacking: 30ML gorilla bottle."
    },
    {
        id: "product-570",
        title: "VGOD MIX PEACH MANGO ICE 30ml Nic Salt",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/VGOD_SaltNic_MIX_IcedPachMango_30ml_25mg_ALPHA_800x_182ac366-3ae2-434e-a8e9-4e697d2aad79-510x510.webp",
        desc: "VGOD Mix Iced Peach Mango 30ml: Escape to a Tropical Paradise with Every Puff\nVaping doesn’t get much more refreshing than this. VGOD Mix Iced Peach Mango 30ml is a premium e-liquid that blends the sweet taste of ripe peaches and mangoes with a cool menthol finish. It’s the perfect summertime vape juice, transporting you to a tropical beach with every inhale.\nA Symphony of Sweet and Icy Flavors\nVaping enthusiasts will declare this flavor combination a match made in heaven! The juicy sweetness of peaches hits your taste buds first, followed by the tropical burst of mangoes. The exhale is where the magic happens – a wave of icy menthol coolness takes over, leaving you feeling refreshed and invigorated. It’s a perfect balance of sweet and icy that will tantalize your taste buds and keep you returning for more.\nCrafted for Smooth Vaping\nVgod e-liquid 30ml is formulated with a 55/45 VG/PG ratio. Which, making it ideal for mouth-to-lung (MTL) vapers who prefer a tight draw and a flavor-focused experience. The nic salt formulation delivers a smooth throat hit with two strengths (25mg and 50mg) to cater to various vaper preferences.\nVGOD Mix Iced Peach Mango Parameters\n\nProduct: Mix Iced Peach Mango\nFlavor: Peach, Mango, Menthol\nNicotine Strength: 25mg, 50mg (Nicotine Salts)\nBottle Size: 30ml\nVG/PG Ratio: 55/45\nBest Used With MTL Vape Devices\n\nDevice Parameters:\n\nThis e-liquid is best for low-wattage devices like pod systems and vape pens."
    },
    {
        id: "product-571",
        title: "VGOD PURPLE BOMB ICE 30ml Nic Salt",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2022/04/vgod-salt-nicotine-iced-purple-bomb-25mg-bottle-box_1024x1024@2x.jpg",
        desc: "Iced Purple Bomb by VGOD Salt Nic E-juice is the juiciest, most bulbous concord grapes to create the most in your face grape flavor you will find anywhere. The freshness of natural grape flavor fused with a savory grape candy is a definite mouthwatering treat for all who relish in the enjoyment of purple grapes. VGOD’s ICED Purple Bomb Salt Nic is meant for low wattage pod devices only, and is blended with 25mg and 50mg nicotine strengths. The best way to experience VGOD’s expertly crafted Salt Nicotine E-liquid. Grab one and try it out!\nLiquid Details:\n\nBrand: VGOD\nBottle Size: 30mL\nBottle Type: Chubby Unicorn Bottle\nVG/PG: 45/55\nMade in USA\nNicotine Type: Salt Nicotine\nAvailable Nicotine Levels: 25mg / 50mg"
    },
    {
        id: "product-572",
        title: "VGOD Lush Ice 30ml Nic Salt",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2021/07/vgod-lush-ice-30ml-nic-salt-juice-p6065-18987_image-510x510.jpg",
        desc: "Key Features of Lush Ice Nic Salt Juice by VGOD\n\n30ml nic salt juice by VGOD\nAvailable in 25mg (2.5%) and 50mg (5.0%) nicotine strengths\n45PG / 55VG\nFlavor Profile: Watermelon & mint\n\nAbout Lush Ice Nic Salt Juice by VGOD\nNow you can always keep cool even if the sun sweltering, thanks to this sweet and refreshing Lush Ice Nic Salt Juice by VGOD. An electrically sweet and frosty blend of VGOD’s signature watermelon base with an icy mint infusion, this Lush Ice Nic Salt Juice offers a top-notch duo of two of the industry’s most iconic flavor pairings. A perfect choice for those who enjoy juicy and refreshing iced fruit flavors, VGOD’s Lush Ice Nic Salt Juice serves up a mouthwatering flavor profile that will keep your tastebuds happy, regardless of this season. Try VGOD’s Lush Ice Nic Salt Juice today if you enjoy succulent, smooth, and icy watermelon flavors.\nVGOD’s Lush Ice Nic Salt Juice comes in a 30ml bottle of nicotine salt juice with your choice between a 25mg (2.5%) and 50mg (5.0%) nicotine strength. Not losing it over lush ice? Be sure to check out VGOD’s full selection of nicotine salt juices."
    },
    {
        id: "product-573",
        title: "HAVANA TOBACCO ICE – BLVK TOBACCO SALT – 30ML",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/04/0ca03d6d-322c-41d2-af94-cb1cf570d04c-510x510.webp",
        desc: "As you inhale, you will be enveloped by a smooth fusion of Havana tobacco, offering an earthy and robust base. The real highlight of this creation is the remix layer, where additional notes are expertly blended to enhance the experience. There are hints of rich, indulgent vanilla that add subtle sweetness, while hints of dark-skinned fruit can surprise your taste buds. The result is a truly unique and fascinating tobacco experience.\\\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in pod-based, closed systems devices, and ultra low-output atomizers/mods. Every salt-based nicotine e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience.\nBLVK Salt Features:\n\n\n30ml Bottle\n40% PG\n60% VG\nMade in USA\nAvailable in 35mg, 50mg"
    },
    {
        id: "product-574",
        title: "JUST BERRIES FRUIT ICE- BLVK SALT – 30ML",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/04/BLVK-Fruit-Ice-Nic-Salt-Just-Berries-removebg-preview.png",
        desc: "All favorite wild summer berries make an appearance in this luscious and juicy vape-quenching Nic salt e-liquid blend. Premium quality e-liquid.\n(BLVK Fruit Ice Nic Salt is New line of remix flavors from the blvk fruit series with essences with special fruit and ice flavors.)\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in pod-based, closed systems devices, and ultra low-output atomizers/mods. Every salt-based nicotine e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience.\n\n30ml Bottle\n40% PG\n60% VG\nMade in USA\nAvailable in 35mg, 50mg"
    },
    {
        id: "product-575",
        title: "APPLE NICOTINE SALT – BLVK UNICORN – 30ML",
        price: "1499",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2022/01/blvk_unicorn_-_salt_series_-_salts_-_apple_-_box_bottle.png",
        desc: "Apple Nicotine Salt by BLVK Unicorn delivers the taste of crisp red and green apples collide with a menthol breeze to completely satisfy your senses.\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in pod-based, closed systems devices, and ultra low-output atomizers/mods. Every salt-based nicotine e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience.\nBLVK Unicorn – APPLE NICOTINE SALT Features:\n\n\n30mL Unicorn Bottle\n50% PG\n50% VG\nMade in USA\nAvailable in 35mg, 50mg"
    },
    {
        id: "product-576",
        title: "MELON – NAKED 100 SALT – 30ml",
        price: "1599",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/salt_menthol_melon_35_1200x1200_crop_center-510x510.webp",
        desc: "Melon Menthol (formerly Polar Breeze) by NKD 100 Salt E-Liquid is a special nicotine salt formulation of the fresh Melon flavor, a combination of sweet kiwi, slight tartness of pineapple, and smooth honeydew melons for a mouth-quenching sensation. Manufactured by USA Vape Lab, the new NKD 100 Salt line is a special expansion of Naked 100 Collection catering towards a nicotine-salt based experience with higher nicotine hits that can be managed by a lower-wattage and pod-based system.\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in pod-based, closed systems devices, and ultra low-output atomizers/mods. Every salts-based nicotine e-juice contains significantly higher levels of nicotine per milliliter.\nNKD 100 Salt E-Liquid – Melon Features:\n\n\n30mL Unicorn Bottle\nDropper In Bottle\nNicotine Salts Formulation\nCrafted For Ultra-Low Wattage & Pod-Based System\nMade in USA\nAvailable nicotine: 35mg, 50mg"
    },
    {
        id: "product-577",
        title: "Apple Sours with Ice Nic Salt By Dinner Lady – 30ML",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/07/Ice-Apple-Sours-Nic-Salt30-1-510x510.jpg",
        desc: "A sour blend of apples with icy cool koolada for a fresh intake. Dinner Lady Apple Sours Ice Shortfill contains 70% VG and 30% PG to create impressive, dense clouds with a rich flavour.\n \n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-578",
        title: "ASAP GRAPE BY NASTY SALT – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/nasty-juice-salt-asap_grape-30ml_1024x1024@2x.webp",
        desc: "Nasty asap grape nic salt india conatai Black grape combined with ripe berry and other fruits alike produces this delicious grape juice. The bitter exhale taste of grape is topped with the taste of berry to create a taste that you will never get bored of. Its ASAP Nasty Salt Style….. oh yes baby.\nStrength: 35mg & 50mg\nSize: 30ml\nNote: Nic Salt Ejuices are meant to be used in pod open system devices for a satisfying mouth to lung vaping experience. Nic Salts should never be used in a sub-ohm device of any kind (sub ohm tanks, RTA or RDAs).\nThere is a reason why the creators of nasty asap grape nic salt india e liquid made it their duty to state that this is their best selling salt e liquid they have. If that is the case, then this salt e liquid does not need any special introduction. Asap Grape is the name of the vape juice that you are going to want to get as soon as possible. When you take a pull of this blend, you are going to get several flavors rushing into your mouth almost instantly. The grape flavor is obviously the star of the show here, which is why it is the first fruit to welcome itself in. The grapes are going to taste as rich as the ones you can taste at a popular vineyard that makes sure the grapes that they produce are the best ones. However, it is clear that the owners of this specific vineyard made an intelligent business decision to create a memorable salt e liquid as opposed to several wine bottles. As you are savoring this blend, you are beginning to taste a couple sweet and tart berry notes that are going to enhance the flavors of this salt e liquid. You are also going to taste a couple of extra fruity notes that are going to make your mouth water. The throat hit is going to be smooth and allow the flavors of this blend to become more potent. When you think it is time to let all of the flavors out of your system, you slowly begin to breathe out. The gentle exit is already going to convince you that you should definitely go for a couple more hits. The aromatic clouds coming out of your mouth are going to be small and aromatic for you to enjoy even when the salt e liquid is out of your palette."
    },
    {
        id: "product-579",
        title: "BLUE MENTHOL Nic Salt By Dinner Lady",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/08/Blue-Menthol-Dinner-Lady-Salts-30-ml_521x-510x510.jpg",
        desc: "Blue Menthol salt nicotine e-liquid by Dinner Lady is a berry fruit blend containing an icy kick. A concoction of sweet mixed berries is present on inhale, supported by a sharp ice aftertaste for a distinct flavour.\n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-580",
        title: "BLUE RASPBERRY BY I LOVE SALTS",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/blue_raspberry_-_i_love_salts_-_mad_hatter_juice_-_30ml_1.jpg",
        desc: "Key Features of Blue Raspberry Nic Salt Juice by I Love Salts\n\n30ml nic salt juice by I Love Salts\n50/50 PG/VG\nAvailable in 25mg (2.5%) or 50mg (5%) nicotine strengths\nFlavor Profile: Raspberry & blueberry\n\nAbout Blue Raspberry Nic Salt Juice by I Love Salts\nBlue Raspberry by I Love Salts is a fantastic fruit vape from Mad Hatter’s I Love Salts line. If you’re a fan of any popular blue raspberry flavor, you’ll love this blend of sweet raspberries and slightly tart nicotine salt juice. I Love Salts Blue Raspberry tastes fantastic in any pod mod system, such as the Suorin Drop.\nThis vape juice is from the I Love Salts’ nicotine salt range and is available in two different nicotine strengths: 25mg (2.5%) and 50mg (5%). Vaping nic salts is much smoother than vaping high strengths of standard freebase nicotine and provides a quick and satisfying rush. This I Love Salts juice comes in a 30ml bottle and is not for use in sub-ohm devices."
    },
    {
        id: "product-581",
        title: "BLUE RASPBERRY ICE BY I LOVE SALTS",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/i-love-salts-blue-raspberry-ice-30ml-nic-salt-juice-p6068-19200_medium-510x510.jpg",
        desc: "I Love Salts – Blue Raspberry ICE by Mad Hatter E-Juice is a revamped blend of mythical blue raspberries touched with a hint of menthol to create a powerful nicotine salts formulation that will revive the spirit.\nKey Features of Blue Raspberry Ice Nic Salt Juice by I Love Salts \n\n30ml nic salt juice by I Love Salts\n50/50 PG/VG\nAvailable in 25mg (2.5%) or 50mg (5%) nicotine strengths\nFlavor Profile: Blue raspberry & mint\n\nAbout Blue Raspberry Ice Nic Salt Juice by I Love Salts\nThis Blue Raspberry Ice vape juice from the I Love Salts line by Mad Hatter will have you going mad for more! Savor the flavor of sweet blue raspberry with a refreshing hint menthol in this delicious nicotine salt juice.\nThis vape juice is from the I Love Salts nicotine salt range and is available in two different nicotine strengths: 25mg (2.5%) and 50mg (5%). Vaping nic salts is much smoother than vaping high strengths of standard freebase nicotine and provide a quick and satisfying rush. This I Love Salts juice comes in a 30ml bottle and is not for use in sub-ohm devices.\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in vape pod system and ultra low-output atomizers/mods. Every nicotine salts e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience."
    },
    {
        id: "product-582",
        title: "Nasty Shisha Nic Salt – Grape Raspberry – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-19-at-11.58.59-AM-510x510.jpeg",
        desc: "Nasty Juice Grape Raspberry is from their new Shisha Series and is all about the fantastic flavor combination of grapes and raspberries with a shisha twist. Now available in salt nicotine.\nWe recommend this to those that like the raspberries that want to try a new shisha twist with the addition of sweet green grapes. The raspberries provide an excellent gummy pop to the texture of the clouds when inhaling. It’s a fruity sensation like no other. Highly recommended.\nWhats Included:\n\n1 x 30ml Nasty Shisha Salt Series Grape Raspberry\n\nSpecs and Features:\n\n50%PG / 50%VG, Low Mint\nPrimary Flavors: Green Grape, Raspberry\nChubby Gorilla Bottle\n30ML Bottle Size"
    },
    {
        id: "product-583",
        title: "BUBBLE GUM ICE Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/08/dinner-lady-salts-bubble-gum-ice-us-import-dinner-lady-931097_5000x-510x510.jpg",
        desc: "It’s so good you’ll be chewing your clouds. The iconic tuck shop flavour of bubble-gum with ice!\n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-584",
        title: "Bubble Trouble Ice (bubble gum flavor) Nic Salt By Dinner Lady",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/01/Ice-Bubble-Trouble-Nic-Salt-Dinner-Lady_1024x1024@2x-510x510.jpg",
        desc: "Chewy pink bubble gum is an experience that’ll take you down memory lane. Dinner lady Bubble Trouble Ice is a spot-on bubble gum flavor that won’t have you looking anywhere else.\n \n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-585",
        title: "Cafe Tobacco Nic Salt By Dinner Lady",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/dinner-lady-cafe-tobacco-salts_900x-510x510.jpg",
        desc: "Cafe Tobacco is a combination of rich, robust tastes perfect for those who prefer deep, dark flavours. A woody tobacco provides the base of the vape, fused with a bittersweet yet smooth coffee for a layered e-liquid.\n \n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-586",
        title: "CLASSIC MENTHOL BY I LOVE SALTS",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/i-love-salts-classic-menthol-30ml-nic-salt-juice-p6012-19199_image-510x510.jpg",
        desc: "Classic Menthol by I Love Salts is a reiteration on mentholated “analog vaping”, perfectly recreating the flavor in a mentholated manner.\nKey Features of Classic Menthol Nic Salt Juice by I Love Salts\n\n30ml nic salt juice by I Love Salts\n50/50 PG/VG\nAvailable in 25mg (2.5%) or 50mg (5%) nicotine strengths\nFlavor Profile: Classic menthol\n\nAbout Classic Menthol Nic Salt Juice by I Love Salts\nClassic Menthol never goes out of style! This Classic Menthol is an icy cool nicotine salt by Mad Hatter Juice that will leave you feeling refreshed and revitalized.\nThis vape juice is from the I Love Salts nicotine salt range and is available in two different nicotine strengths: 25mg (2.5%) and 50mg (5%). Vaping nic salts is much smoother than vaping high strengths of standard freebase nicotine and provide a quick and satisfying rush. This I Love Salts juice comes in a 30ml bottle and is not for use in sub-ohm devices.\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in vape pod system and ultra low-output atomizers/mods. Every nicotine salts e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience."
    },
    {
        id: "product-587",
        title: "Cola Shades Nic Salt By Dinner Lady – 30ML",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/07/Dinner-Lady-Salt-Cola-Shades_708x-510x510.webp",
        desc: "Dinner Lady now introduces their same great flavour only now it comes as a Salt Nic Juice! (30ML)\nCola Shades: An Authentic Cola with a twist of Lemon served on the rocks! An interestingly refreshing vape!\n \n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-588",
        title: "Cool Tobacco Nic Salt By Dinner Lady",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/08/image_5000x-510x510.jpg",
        desc: "As part of Dinner Lady’s Tobacco range of nicotine salts, Cool Tobacco seeks to replicate the authentic, earthy flavour of tobacco in a manner that can be reminiscent of the smoking experience. This makes it a perfect product for those seeking to transition towards vaping.\nCool Tobacco, in particular, incorporates strong and sharp notes of icy menthol, delivering a chilling sensation alongside the robust notes of woody tobacco. As such, it is tailor-made for ex-smokers with a penchant for mint cigarettes, but with the smooth throat hit you come to expect from Dinner Lady’s products.\n \n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-589",
        title: "CUSHMAN MANGO BY NASTY SALT – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/NASTY_CUSHMAN_MANGO_30ML_720x.webp",
        desc: "nasty cushman mango nic salt india is one of the best mango flavors around. The authentic taste of ripe mangoes will please your taste buds like no other flavor. A very smooth Nic salt experience.\nStrength: 35mg & 50mg\nSize: 30ml\nNote: Nic Salt Ejuices are meant to be used in pod open system devices for a satisfying mouth to lung vaping experience. Nic Salts should never be used in a sub-ohm device of any kind (sub ohm tanks, RTA or RDAs).\nYou might think that there are already several mango salt e liquids on the market, but to be honest, you have not tried it like this before. nasty cushman mango nic salt india is the name of the salt e liquid that is going to give you the mango flavor with a twist that is going to make it better. When you first take a pull of this vape juice, you are going to feel the creamy mango flavor making its way into your mouth. The mango is going to be amazing and it is going to taste as if it was being given to you straight from the tree it came from. As the flavors roam around your mouth, you are going to feel the tasty fruit notes beginning to make their way down your throat. As it begins its travels, you grow excited because you know that the salt based nicotine inside this vape juice is going to give you a throat hit like no other. You are soon going to experience what a mango salt e liquid is supposed to taste like. When you taste that amazing kick that you are going to get, you are going to feel the explosion of the mango flavor almost instantly. The mango is going to party in your palette as it continues to touch every spot inside of your mouth. When you think you cannot hold the salt e liquid in anymore, mostly because you need to breathe, you slowly exhale so that you can get the last few notes this blend has to offer. As the flavors pass by your lips, you are going to be greeted by a couple aromatic clouds that will allow the vape trip to continue. A smooth throat hit and a couple of clouds to keep the experience treating you well."
    },
    {
        id: "product-590",
        title: "CUSHMAN STRAWBERRY [mango strawberry] BY NASTY SALT – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/09/nasty-juice-salt-cushman_mango_strawberry-30ml_1024x1024@2x.webp",
        desc: "Nasty Juice Cushman Mango Strawberry presents us with yet another combination of everybody’s top flavours, mangoes and strawberries. In the Cushman series, Nasty takes their beloved mango flavor and intertwines it with other flavors to enliven and extend your enjoyment of their classic mango flavor.\nFirst off, we can clearly taste the mango flavor more than the strawberry in our 0.5ohm setup. In terms of the strawberry flavor in this blend, it tastes of strawberry candy strawberry that you find in sweets or lollies. The strawberry flavor is quite light and in the background. The yellow mango here tastes sweet, ripe and luscious. In our testing, the yellow mango flavor is very clearly identifiable with strong aroma and thick with a heavy mouthfeel. The flavor and aroma of mango hits us more than the strawberries. We would say that this blend is maybe 70% mango and 30% strawberries.\nNasty Juice Cushman Mango Strawberry is a delectable fruity vape flavour that is sure to satisfy your sweet tooth for fruity vapes. A smooth exhale leaves your tastebuds wondering which you like better, mangoes? Or strawberries? What you’re certain of is that you’ll need another vape to decide!\nFeaturing a high level of sweetness, get this if you like sweet fruity vape juices.\n\n30ml salt quantity\nChoose strength level with choice- 35mg & 50mg\n50VG/50PG"
    },
    {
        id: "product-591",
        title: "CRYSTAL CLEAR – BLVK BAR SALTS – 30ML",
        price: "1600",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/e-21-510x510.png",
        desc: "The BLVK Salt Crystal Clear flavor profile is known for its clean, crisp, and refreshing taste. This flavor line focuses on delivering pure, straightforward flavors without any complex blends or overpowering sweetness. Typically, the Crystal Clear variants are designed to provide a smooth and balanced vaping experience, making them ideal for those who prefer subtle, all-day vape options. Common flavor notes might include hints of cooling elements, fresh fruits, or even simple, sweet undertones that don’t overwhelm the palate.\n\n\n\n\nCRYSTAL CLEAR – BLVK SALTS – 30ML FEATURES:\n• BOTTLE CAPACITY: 30mL Unicorn Bottle\n• VG: 50%\n• PG: 50%\n• FORMULATION: Nicotine Salts\n• MADE IN: USA\nINCLUDES:\n• 1x30mL Unicorn Bottle\nAVAILABLE OPTIONS:\n• 35mg\n• 50mg"
    },
    {
        id: "product-592",
        title: "KIWI DRAGON FRUIT ICE – BLVK BAR SALTS – 30ML",
        price: "1600",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/e-20-510x510.png",
        desc: "The BLVK Salt Kiwi Dragon Fruit Ice flavor offers a vibrant and refreshing profile. It combines the tangy and slightly sweet notes of kiwi with the exotic, subtly sweet taste of dragon fruit. This blend is enhanced by a cool menthol finish, providing an icy kick that complements the fruity flavors. The result is a balanced vape that is both invigorating and satisfying, making it a great choice for those who enjoy fruit flavors with a refreshing twist.\n\n\n\n\nKIWI DRAGON FRUIT ICE – BLVK SALTS – 30ML FEATURES:\n• BOTTLE CAPACITY: 30mL Unicorn Bottle\n• VG: 50%\n• PG: 50%\n• FORMULATION: Nicotine Salts\n• MADE IN: USA\nINCLUDES:\n• 1x30mL Unicorn Bottle\nAVAILABLE OPTIONS:\n• 35mg\n• 50mg"
    },
    {
        id: "product-593",
        title: "MELON BUBBLEGUM ICE – BLVK BUBBA SALTS – 30ML",
        price: "1600",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/7c02e8e65a62a89273600903a8eadc0c-510x510.png",
        desc: "The BLVK NicSalt Melon Bubblegum Ice juice, from BLVK’s “Bubba” line, brings the irresistible combination of the sweet and refreshing flavor of melon bubblegum with a touch of icy menthol. This line is famous for its fruity bubblegum juices, providing a unique and pleasurable vaping experience. Ideal for those looking for a smooth vapor and striking flavors, Melon Bubblegum Ice offers a perfect blend that captivates and refreshes from the first vapor.\nMelon BubbleGum Ice BLVK Specifications: \n\n30ml tube\nNicotine: Nicsalt\nVG and PG: 60/40\nContent: 35mg and 50mg\nCategory: Fruity, Sweet"
    },
    {
        id: "product-594",
        title: "SOUR APPLE BUBBLEGUM ICE – BLVK BUBBA SALTS – 30ML",
        price: "1600",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/blvk-bubba-sour-apple-bubblegum-salt-30ml-600x600-1-510x510.jpg",
        desc: "Check out Sour Apple Bubblegum by BLVK Bubba Salts, capturing the vibrant flavors of sour green apples with chewy bubblegum and a splash of menthol.\nSOUR APPLE BUBBLEGUM – BLVK BUBBA SALTS – 30ML FEATURES:\n• BOTTLE CAPACITY: 30mL Unicorn Bottle\n• VG: 50%\n• PG: 50%\n• FORMULATION: Nicotine Salts\n• MADE IN: USA\nINCLUDES:\n• 1x30mL Unicorn Bottle\nAVAILABLE OPTIONS:\n• 35mg\n• 50mg"
    },
    {
        id: "product-595",
        title: "JUICY APPLE BY I LOVE SALTS",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/i-love-salts-juicy-apples-30ml-nic-salt-juice-p4793-19192_image-510x510.jpeg",
        desc: "Juicy Apples by Mad Hatter Juice is a treat for apple fanatics everywhere. Brimming with tangy, juicy apple sweetness, Juicy Apples vape juice delivers natural, balanced flavor without ever being overly sweet. Fruit liquid lovers, say hello to your new all-day vape.\nFrom the Mad Hatter line, as the name suggests, Juicy Apples By I Love Salts Mad Hatter nicotine salt delivers nothing but sweet and crisp apple juice that tantalizes every single taste bud. If you’re an apple fiend, Juicy Apples vape juice is for you. Every hit is like a giant gulp of refreshing apple juice.\nWith each inhale of Juicy Apples ejuice, the crisp notes of apples are dominant. A pinch of tartness from green apples lands on the center of your tongue. With every exhale, sugary sweet red apple flavor takes over.\nIf you truly enjoy the luxurious feeling of taking that first bite of apple, you have gotta vape I LOVE SALTS MAD HATTER Juicy Apples nic salt eliquid today.\n\nNot for use in sub-ohm devices\n30ml of liquid\nAvailable in 25mg and 50mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nPerfect for those who enjoy savoring crisp, juicy apples\nContains nicotine, vegetable glycerin, and propyleneglycol\n\nVG/PG: 50/50\nFlavor Profile: Apple"
    },
    {
        id: "product-596",
        title: "ICED BERRY BANANA – SALT PLUS – BLVK UNICORN – 30ML",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2022/06/blvk_unicorn_-_iced_berry_banana_-_box_bottle.png",
        desc: "Discover ICED Berry BANANA Salts by BLVK Unicorn, featuring a frozen banana base accented with delicious notes of sweet strawberry in nicotine salts.\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in vape pod system and ultra low-output atomizers/mods. Every nicotine salts e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience.\nBLVK Unicorn – BLVK Pink Series – ICED Berry BANANA SALT Features:\n30mL Chubby Unicorn Bottle\n50% PG\n50% VG\nNicotine Salts Formulation\nCrafted for Ultra-Low Wattage & Pod-Based System\nMade in USA\nAvailable nicotine: 35mg, 50mg"
    },
    {
        id: "product-597",
        title: "ICED KIWI BERRY – SALT PLUS – BLVK UNICORN – 30ML",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2021/07/IcedBerryKiwi-BLVKPinkCollectionSalt-30ml-1_fe937257-a61d-4445-9606-de558fb33c10_1024x1024-510x510.jpg",
        desc: "Kiwi berry Ice by BLVK Unicorn Salt\nBLVK Unicorn is a prolific brand of premium quality e liquids that for years has dominated the market with a slew of delectable products. Now the BLVK Unicorn Salt series is taking over the scene with flavors like Kiwi Strawberry Ice, a fusion of strawberries, kiwi, and menthol packed into a smooth-hitting nicotine salt vape juice designed for low-wattage pod vapes.\nKiwi Strawberry Ice provides a refreshing duet of sun-ripened strawberries, juicy kiwi chunks, and arctic menthol for a frozen fruit vape experience from inhale to exhale. This flavor is crafted using a 60% VG and 40% PG formula ratio, which means that each hit will balance intense flavors with small and thin clouds.\nBLVK Unicorn Salt packages the Kiwi Strawberry Ice recipe in a 30ml-sized squeeze bottle with 35mg and 50mg nicotine strength options available here at Vape Juice. This flavor is designed for use with a low-wattage, refillable pod vape and should not be vaped using a sub-ohm device.\n\nFlavor Profile: Kiwi, Strawberry, Menthol\nVG/PG Ratio: 60% VG / 40% PG\nBottle Size: 30ml\nNicotine Levels: 35mg, 50mg"
    },
    {
        id: "product-598",
        title: "Berry Blast Nic Salt By Dinner Lady",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/11/dinner-lady-berry-blast_900x-1-510x510.jpg",
        desc: "Dinner Lady’s Berry Blast concentrate is already in the pantheon of colorful fruity DIYs. To a nice crunchy cherry, a delicate raspberry was added to sweeten the whole. What a balancing act!\n\nQuantity: 30ml e liquid concentrated with nicotine."
    },
    {
        id: "product-599",
        title: "Ice Moments Fruit Splash Ice Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/09/DinnerLady-Moments-ICE-Fruit-Splash-30ml-30ml-30mg-NZ-copy-510x510.jpg",
        desc: "Dinner Lady’s Fruit Splash combines a mixed medley of summer fruits; mainly vocalised by notes of currants, mixed berries, and citric notes. Containing PG and food-grade flavourings, Dinner Lady Concentrates are ideal for experienced vapers looking to personalise their vaping experience.\n\n\n\nSPECIFICATION30ml recyclable bottle\nSuggested concentrate mix ratio: 28.7%\nPG:VG ratio: 50VG/50PG"
    },
    {
        id: "product-600",
        title: "Ice Moments Grape Star Ice Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/12/DinnerLady-Moments-ICE-Grape-Star-30ml-30ml-30mg-NZ-copy-510x510.jpg",
        desc: "Dinner Lady’s Grape Star is part of our new Moments range. The profile combines fruity red and black grapes, with an added kick of aniseed koolada which delivers an icy, consistent, and completely unique taste. Containing PG and food-grade flavourings, Dinner Lady Concentrates are ideal for experienced vapers looking to personalise their vaping experience.\n\nSPECIFICATION\n30ml recyclable bottle\nSuggested concentrate mix ratio: 28.7%\nPG:VG ratio: 50VG/50PG"
    },
    {
        id: "product-601",
        title: "Ice Moments Peach Bubble Ice Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/12/DinnerLady-Moments-ICE-Peach-Bubble-3070-30ml-30mg-NZ-copy-510x510.jpg",
        desc: "Dinner Lady’s Peach Bubble combines ripe peaches fused with a taste of sweet bubble gum, to provide vapers with a unique flavour to remember. Containing PG and food-grade flavourings, Dinner Lady Concentrates are ideal for experienced vapers looking to personalise their vaping experience.\n\nSPECIFICATION\n30ml recyclable bottle\nSuggested concentrate mix ratio: 28.7%\nPG:VG ratio: 50VG/50PG"
    },
    {
        id: "product-602",
        title: "Purple Rain (raspberry, blueberry and lemon) Nic Salt By Dinner Lady",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/11/dinner_lady_e_juice_Purple_rain_900x-510x510.jpg",
        desc: "Embrace the fruity fun by letting your senses dance in this purple rain with drops of blueberry, raspberry and lemon.\n\nQuantity: 30ml e liquid concentrated with nicotine."
    },
    {
        id: "product-603",
        title: "Strawberry Bikini Ice Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/11/images.jpeg",
        desc: "The top note in the inhale is strawberry. Freshly picked, ripe, and utterly delicious, the juicy tart flavour profile of this emblematic fruit coats your senses and delivers a refreshing sweetness that is unparalleled. Within seconds, you will perceive the sugary and zesty notes of lemonade, an invigorating beverage that elevates the experience and turns it into a cooling drink-like vape that will quench your thirst and soothe your senses against the heat.\nBut the lemonade is not the only refreshing element in Strawberry Bikini Ice. The eponymous ice is left for the end, delivering a cooling blast that chills your tongue and mind. It is thanks to the koolada, which provides the frosty menthol sensation without mint notes.\nStrawberry Bikini Ice is not a complex flavour blend, but it doesn’t have to be. It’s straightforward, delivering each of its notes cleanly and impeccably.\nSize: 30ml.\nVG/PG Ratio: 50/50.\nNicotine Strengths: 30mg and 50mg."
    },
    {
        id: "product-604",
        title: "Sweet Fusion Ice ( Fruits punch) Salt By Dinner Lady",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/11/Dinner_Lady-Ice-Sweet_Fusion_Ice_Salts-30mg30ml_900x-510x510.jpg",
        desc: "A burst of chewy fruits. This multi-coloured sweet sensation is sure to excite your taste buds. Now with Ice!\n\n\n\nQuantity: 30ml e liquid concentrated with nicotine. Hu"
    },
    {
        id: "product-605",
        title: "Blackberry Crumble Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/12/DinnerLady-Desserts-BlackberryCrumble-Salts-30mg30ml_2000x_2da8de42-63df-4b7a-a45f-dd54f1e010d0_1024x1024@2x-510x510.jpg",
        desc: "Blackberry Crumble SALT by Vape Dinner Lady E-Liquid is a nicotine salt dessert vape that borrows the essence of warm buttery crumble crust combined with the zesty flavorings of sweet blackberries.\nBlackberry Crumble SALT Dinner Lady E-Liquid Specifications:\n\nBottle: 30mL\nNicotine Type: Nicotine Salt\nRatio: 50%PG/50%VG"
    },
    {
        id: "product-606",
        title: "Strawberry Macaroon Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2023/01/Salt-Nic-Strawberry-Macaroon-30ml-510x510.jpg",
        desc: "Delve into Strawberry Macaroon SALTS by Vape Dinner Lady capturing a mixture of sweet coconut, cream, and almonds flavored with delicious strawberries.\nBlackberry Crumble SALT Dinner Lady E-Liquid Specifications:\n\nBottle: 30mL\nNicotine Type: Nicotine Salt\nRatio: 50%PG/50%VG"
    },
    {
        id: "product-607",
        title: "Blackcurrant Ice Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2023/03/dinner-lady-blackcurrant-ice-nic-salts_530x_2x_009410ec-0c55-430e-a23d-cebe293e197e_1024x1024@2x-510x510.webp",
        desc: "Blackcurrant Ice Combining fruity notes of blackcurrant and orange with icy cool Colada for a fresh intake, Blackcurrant Ice is a best-selling part of the Dinner Lady Ice range.\nDinner Lady Nic Salts – Blackcurrant Ice Features:\n\n30mL Chubby Unicorn Bottle\nNicotine Salts Formulation\n50% VG\n50% PG\nChild-Resistant Cap\nAvailable Nicotine: 50mg\nMade in UK"
    },
    {
        id: "product-608",
        title: "Pink Berry Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2023/03/dinner-lady-salts-pink-berry-us-import-dinner-lady-619292_2000x-510x510.webp",
        desc: "Pink Berry by Dinner Lady is a fruit blend fused with a citrus twang. A selection of ripe-tasting mixed berries is countered by a zesty citrus, for an e-liquid which plays between sweet and sharp notes.\n\n30ml Bottles\n50% VG / 50% PG\nSalt Nicotine Blends\n30mg and 50mg Nicotine Strength\nMade In UK"
    },
    {
        id: "product-609",
        title: "Lemon Tart Nic Salt By Dinner Lady",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/Salt_Nic_Lemon_Tart_dinner_lady_900x-510x510.png",
        desc: "A sharp lemon curd topped with gooey meringue, all cradled by a thin pastry crust; the Salt Nicotine version of your favourite Lemon Tart by Dinner Lady is here!\n\n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-610",
        title: "Flip Flop Lychee Ice Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/08/Dinner_Lady_Ice_Lychee_Ice_Salts_300x300.jpg",
        desc: "Mixing the sweet and sharp undertones of exotic lychees, Dinner Lady’s Lychee Ice nicotine salt e liquid is finished off with a minty fresh layer.\n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-611",
        title: "Mango Ice Nic Salt By Dinner Lady",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/08/DinnerLady-Ice-MangoIce-Salts-liquid-nicotine_530x@2x-510x510.jpg",
        desc: "Mango Ice by dinner lady salts is a fruit blend with rich notes. A tropical mango flavour makes up the base with sweet, juicy notes and a tart aftertaste. On exhale, a fusion of ice and honey creates a cool and floral finish.\n \n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-612",
        title: "Pink Lemonade By I Love Salts",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/i-love-salts-pink-lemonade-30ml-nic-salt-juice-p5210-19196_image-510x510.jpeg",
        desc: "I Love Salts Pink Lemonade (formerly Luau Lemonade) vape juice is a remarkably refreshing lemonade flavor that’s infused with the fresh tropical and seasonal juices of crisp pineapples and mouthwatering watermelons.\n\n\n\n\n\nI Love Salts – Pink Lemonade (Formerly Luau Lemonade) by Mad Hatter Juice is a nicotine salt blend, borrowing the essence of tart pineapples and combining it with a splash of refreshing watermelons for a revitalizing juice that will awaken the senses.\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in vape pod system and ultra low-output atomizers/mods. Every nicotine salts e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience.\nI Love Salts – Pink Lemonade Features:\nChild Resistant Cap\n50% VG\n50% PG\nNicotine Salts Formulation\nCrafted For Ultra-Low Wattage & Pod-Based System\nMade in USA\nManufactured by Mad Hatter Juice\nAvailable nicotine: 25mg, 50mg\nCALIFORNIA PROPOSITION 65 – Warning: This product contains nicotine, a chemical known to the state of California to cause birth defects or other reproductive harm."
    },
    {
        id: "product-613",
        title: "NASTY PODMATE GRAPE & MIXED BERRIES BY NASTY SALT – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/04/Nasty_SaltNic_PodMate_Grape_Mixed_Berries_30ml_E-Juice__08511-510x510.jpg",
        desc: "Nasty Salt PodMate Grape Mixed Berries Salt Nic Juice 30ml vape juice consists of black grape combined with ripe mixed berry and other fruits, as well as a slight hint of menthol.\nNasty Podmate Salt Grape And Mixed Berries is a seamless assortment of exotic fruits including blueberry, raspberry, grape & strawberry. This amazing jawbreaker will touch your jaws and heart on every vape you take.\nInformation:\n– Quantity: 30mL\n– Nicotine content: 35mg/mL and 50mg/mL\n– Ratio: VG50/PG50"
    },
    {
        id: "product-614",
        title: "NASTY PODMATE MANGO ICE BY NASTY SALT – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/04/Nasty_SaltNic_PodMate_Mango_Ice_30ml_E-Juice__84443-510x510.jpg",
        desc: "Mango Ice Nasty Podmate Salt Nic 30ml is boldly nuanced and most importantly, is as natural-tasting as they come when vaped from your pod mod.\nUpon the exhale, Nasty Podmate Salt – Mango Ice will blow your taste buds away with the abundance of juicy sweetness and cooling iced menthol finish. The brilliance of a fleshy ripened mango is often described as a hybrid of menthol. Nasty Podmate Salt – Mango Ice is bursting with frosty fruit brilliance and masterfully blended for all refillable low-wattage devices.\nAt first, the bright, tangy notes of these plump gems emerge on the tip of the tongue, making your mouth water instantly, in ways that you didn’t think could be achieved through vaping. Its splendid juiciness soaks into your palate while the natural sweetness gets more powerful. Then, a calming chill brings out that exhilarating sensory experience.\nInformation:\n– Quantity: 30mL\n– Nicotine content: 35mg/mL and 50mg/mL\n– Ratio: VG50/PG50"
    },
    {
        id: "product-615",
        title: "NASTY PODMATE RED RAGE BY NASTY SALT – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2023/07/NastyModmate_RedRage.jpg",
        desc: "Red Rage nic salt by Nasty Juice Podmate is a bubbly blend of mixed fruits and energy drink. You’ll get bold mixed fruit flavours on the inhale, followed by a fizzy energy drink profile on the exhale.\nNasty Juice Podmate e-liquids are designed for low powered mouth to lung devices. Nic salts deliver a higher level of nicotine that are also more readily absorbed meaning you can keep those cravings at bay. They have the added bonus of a mild throat hit and still providing the exceptional flavour you expect from this brand.\nInformation:\n– Quantity: 30mL\n– Nicotine content: 35mg/mL and 50mg/mL\n– Ratio: VG50/PG50"
    },
    {
        id: "product-616",
        title: "NASTY PODMATE WATERMELON ICE BY NASTY SALT – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/04/Nasty_SaltNic_PodMate_Watermelon_Ice_30ml_E-Juice__08912-510x510.jpg",
        desc: "Watermelon Ice Nasty Podmate Salt nic 30ml has the flavor profile of a watermelon fruit straw that is covered in sour sugar crystals with the kick of menthol after taste. The inhale consists of that sour taste that makes the mouth water and the taste buds jump around with excitement. Upon exhaling is when the watermelon fruit taste mixes in with the inhale and makes up the ultimate vape hit experience with icy cooling of menthol on it burst. The throat hit is extremely smooth and subtle and relaxing.\nInformation:\n– Quantity: 30mL\n– Nicotine content: 35mg/mL and 50mg/mL\n– Ratio: VG50/PG50"
    },
    {
        id: "product-617",
        title: "SILVER BLEND [vanilla tobacco] BY NASTY SALT – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/09/Vanilla-Tobacco-Silver-Blend-Nasty-Salt-_-30Ml-Vape-Juice-_-35MG-_-We-Vape-We-Vape-India-55197929-510x510.webp",
        desc: "Silver Blend 30ml shortfill e-liquid is a combination of rich and smooth notes. The tobacco flavour on inhale has a sweet and dark taste, balanced by a layer of vanilla custard on exhale for a sweet finish.\nSilver Blend 30ml e-liquid has been mixed for sub ohm vaping and it features a 70% VG ratio, making it ideal for producing big clouds and flavour. For the best experience, we recommend using this high VG e-liquid with a sub ohm tank or kit.\nNasty Tobacco has been created by the award-winning Nasty Juice, these smooth tobacco blends are combined with creams and custards for a rich vape.\n\n\n\n30ml salt quantity\nChoose strength level with choice- 35mg & 50mg"
    },
    {
        id: "product-618",
        title: "SLOW BLOW [pineapple lemonade] BY NASTY SALT – 30ml",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/Pineapple-Lemonade-Slow-Blow-Nasty-Salt-_-30Ml-Vape-Juice-_-35MG_50MG-_-We-Vape-We-Vape-India-55198519-510x510.webp",
        desc: "Nasty slow blow nic salt india is the flavour of pineapple layered with lime soda is a fresh experience like no other. The rich taste of pineapples ensures that you enjoy the inhale while it’s fresh taste makes this a great all day vape.\nStrength: 35mg & 50mg\nSize: 30ml\nNote: Nic Salt Ejuices are meant to be used in pod open system devices for a satisfying mouth to lung vaping experience. Nic Salts should never be used in a sub-ohm device of any kind (sub ohm tanks, RTA or RDAs).\nA little cocktail never hurt somebody. You know what they say, everything in moderation. However, when you get your hands on this nasty slow blow nic salt india e liquid, moderation is something you are not going to want to think about. Slow Blow is the name of the salt e liquid we are talking about and it is also what you will be doing every time you exhale. Taking a pull of this vape juice, you are first going to taste the base of the cocktail that appears to be the pineapple notes. This pineapple is going to have a tangy flavor that is going to be a little tart, but very juicy at the same time. As you keep pulling, you are going to get the taste of the lime coming in and making you feel as if this cocktail is garnished with a little slice of a citrusy lime. You might even picture yourself picking up that slice and squeezing the juices of the fruit into your beverage. As the savoring continues, you may begin to taste this tiny minty flavor that is going to be subtle, but you might be able to notice it because it may make you feel as if this cocktail is over a couple of rocks. This cocktail is delicious and when you feel that throat hit, you are going to get an eruption of flavors scattering throughout your palette. You might feel a little overwhelmed, but it will all be worth it. When you breathe out slowly, you are going to taste the few notes that exit. At the same time, you are going to be creating a couple of clouds that are going to smell amazing without being too obnoxious. You might enjoy seeing your cloudy friends surround you for a bit, but when you indulge in a salt e liquid this good, you will not be bothered by anything.\n\nNasty SALT – Slow Blow Features:\n\n30mL Unicorn Bottle\nChild Resistant Cap\n50% PG\n50% VG\nNicotine Salts Formulation\nCrafted for Ultra-Low Wattage & Pod Based Systems\nMade in USA\nAvailable nicotine: 35mg, 50mg\n\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in vape pod system and ultra low-output atomizers/mods. Every nicotine salts e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience."
    },
    {
        id: "product-619",
        title: "Smooth Tobacco Nic Salt By Dinner Lady – 30ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/dinner-lady-e-juice-smooth_tobacco_2000x_b2c2d635-6c08-407f-ac52-753e279f3516_900x-510x510.jpg",
        desc: "This smooth tobacco blend is sure to delight the taste buds, and almost sweet, naturally rounded taste.\n\n\n\nNot for use in sub-ohm devices\n30ml of eliquid\nAvailable in 50mg/30mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propyleneglycol"
    },
    {
        id: "product-620",
        title: "SPEARMINT BY I LOVE SALTS",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/i-love-salts-spearmint-30ml-nic-salt-juice-p4797-19188_image-510x510.jpg",
        desc: "Key Features of Spearmint Nic Salt Juice by I Love Salts\n\n30ml vape juice by I Love Salts\n50/50 PG/VG\nAvailable in 25mg (2.5%) or 50mg (5%) nicotine strengths\nFlavor Profile: Sweet spearmint\n\nAbout Spearmint Nic Salt Juice by I Love Salts\nIf you’re looking for an ice-cold experience with a smooth nic salt formula, look no further than I Love Salts’ Spearmint vape juice. Full of frosty spearmint flavor and with a decidedly refreshing exhale, Spearmint is the perfect juice to keep you feeling refreshed throughout the day. Don’t forget to try it in your favorite pod mod today!\nThis vape juice is from the I Love Salts line of the Mad Hatter nicotine salt range and is available in two different nicotine strengths: 25mg (2.5%) and 50mg (5%). Vaping nic salts is much smoother than vaping high strengths of standard freebase nicotine and provide a quick and satisfying rush. This I Love Salts juice comes in a 30ml bottle and are not for use in sub-ohm devices."
    },
    {
        id: "product-621",
        title: "ORANGE PINEAPPLE CRUSH BY I LOVE SALTS – 30ML",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/09/ILoveSaltsOrangePineappleCrush_600x-1.webp",
        desc: "Discover Orange Pineapple Crush by I Love Salts, capturing a blennd of delicious pink lemonade accented by vibrant splashes of oranges and pineapples.\n\nNot for use in sub-ohm devices\n30mL of liquid\nAvailable in 25mg and 50mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propylene glycol\n50% VG, 50% PG\n\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in vape pod system and ultra low-output atomizers/mods. Every nic salt e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience."
    },
    {
        id: "product-622",
        title: "SWEET STRAWBERRY BY I LOVE SALTS",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/12/i_love_salt-sweet_strawberry_.png",
        desc: "I Love Salts – Sweet Strawberry (Formerly Strawberry Candy) is part of the nic salt collection by Mad Hatter Juice, delivering a sweet-tooth fruity experience with vibrant strawberry notes in a perfect candy form for the ultimate treat.\n\nNot for use in sub-ohm devices\n30mL of liquid\nAvailable in 25mg and 50mg nicotine concentration\nSalt nicotine is more efficient and less harsh to vape\nContains nicotine, vegetable glycerin, and propylene glycol\n50% VG, 50% PG\n\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in vape pod system and ultra low-output atomizers/mods. Every nic salt e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience."
    },
    {
        id: "product-623",
        title: "STRAWBERRY ICE BY I LOVE SALTS",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/i-love-salts-strawberry-ice-30ml-nic-salt-juice-p5061-19195_image-510x510.jpg",
        desc: "I Love Salts – Strawberry Ice by Mad Hatter Juice is a powerful nicotine salt blend, taking the essence of sun-ripened strawberries and blasting it with a gust of icy cool menthol for a sensationally sweet but soothing vape experience.\nKey Features of Strawberry Ice Nic Salt Juice by I Love Salts\n\n30ml nic salt juice by I Love Salts\n50/50 PG/VG\nAvailable in 25mg (2.5%) or 50mg (5%) nicotine strengths\nFlavor Profile: Strawberry & mint\n\nAbout Strawberry Ice Nic Salt Juice by I Love Salts\nI Love Salts Strawberry Ice is an icy sweet blast of vine-ripe strawberries and crisp mint. Refreshing, slightly sweet, and oh so delicious, Strawberry Ice vape juice is the perfect juice for taking a stroll in the sun. Its nic salt formula adds an extra dimension to this juice and delivers a quick nic rush that’ll leave you totally satisfied.\nThis vape juice is from the I Love Salts line of Mad Hatter Juice is available in two different nicotine strengths: 25mg (2.5%) and 50mg (5%). Vaping nic salts is much smoother than vaping high strengths of standard freebase nicotine and provides a quick and satisfying rush. This I Love Salts juice comes in a 30ml bottle and is not for use in sub-ohm devices.\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in pod-based, closed systems devices, and ultra low-output atomizers/mods. Every salt-based nicotine e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience."
    },
    {
        id: "product-624",
        title: "SWEET TOBACCO BY I LOVE SALTS",
        price: "1600",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/i-love-salts-sweet-tobacco-30ml-nic-salt-juice-p4795-19193_image-510x510.jpg",
        desc: "I Love Salts – Sweet Tobacco is part of the nic salt collection by Mad Hatter Juice, featuring a smooth nuttiness of earthy tobacco and sweetness from bold vanilla and yummy custard.\n\nKey Features of Sweet Tobacco Nic Salt Juice by I Love Salts\n\n30ml nic salt juice by I Love Salts \n50/50 PG/VG\nAvailable in 25mg (2.5%) or 50mg (5%) nicotine strengths\nFlavor Profile: Sweet tobacco\nCompatible with pod mods\n\nAbout Sweet Tobacco Nic Salt Juice by I Love Salts\nSweet Tobacco by I Love Salts is a must-try for tobacco purists. A classic earthy tobacco flavor topped off with a touch of sugary sweetness and backed up with a smooth nicotine salt formula, I Love Salts Sweet Tobacco is similar to RY4 blends and is great as an all-day vape. Don’t forget to take a look at our pod mods & find that one that fits you best.\nThis vape juice is from the I Love Salts line of Mad Hatter Juice is available in two different nicotine strengths: 25mg (2.5%) and 50mg (5%). Vaping nic salts is much smoother than vaping high strengths of standard freebase nicotine and provide a quick and satisfying rush. This I Love Salts juice comes in a 30ml bottle and is not for use in sub-ohm devices.\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in pod-based, closed systems devices, and ultra low-output atomizers/mods. Every salt-based nicotine e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience."
    },
    {
        id: "product-625",
        title: "TRAP QUEEN [strawberry] BY NASTY SALT",
        price: "1499",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/06/nasty-juice-salt-strawberry_trap_queen-30ml_1024x1024@2x.webp",
        desc: "Trap Queen by Nasty SALT captures the true essence of freshly picked summertime strawberries bursting with juicy flavor, incorporating powerful nicotine salt elements that will send the taste buds on a well-deserved trip\nTrap Queen Salt by Nasty e-liquid contains a flavorful ripe strawberry fruit freshly harvested from farm. You’ll be thrilled with the freshness and the sweetness that will make you feel like you’re in a strawberry farm. A refreshing salt nic e-juice that will add a little pep to your step and energy to your day! Enjoy Nasty’s uniquely designed E Liquid that is best paired with a Pod Starter Kit\nLiquid Details:\n\nBrand: Nasty\nFlavor: Trap Queen Salt\nFlavor Profile: Strawberry / Low Mint / Menthol\nNicotine Type: Salt Nicotine\nBottle Size: 30ml\nBottle Type: Chubby Gorilla\nNicotine Levels: 35mg / 50mg\nVG/PG: 50/50\n\nWarning: This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in vape pod system and ultra low-output atomizers/mods. Every nicotine salts e-juice contains significantly higher levels of nicotine per milliliter, optimal for beginners or experienced vapers looking for a travel-friendly experience.\n."
    },
    {
        id: "product-626",
        title: "VGOD BANANA BOMB ICE Nic Salt – 30ml",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Vgod-Saltnic-Iced-Banana-Bomb-30ml-25-mg-in-Dubai-510x510.jpg",
        desc: "Experience the refreshing combination of ripe bananas and icy menthol with VGOD’s Iced Banana Bomb. This vape juice is conveniently packaged in a 30ml chubby bottle and offers nicotine strengths of 25mg and 50mg.\nWith a perfectly balanced VG/PG ratio of 50/50, it guarantees a smooth and satisfying vaping experience.\nJuice Features:\n\nBrand: VGOD\nFlavor: Iced Banana Bomb\nNicotine Type: Nicotine Salt\nBottle Size: 30ml\nNicotine Levels: 25mg, 50mg\nVG/PG: 50/50\n\nPackage Contents:\n\n1x VGOD Iced Banana Bomb SaltNic 30ml Salt E-Juice"
    },
    {
        id: "product-627",
        title: "VGOD DRY TOBACCO 30ml Nic Salt",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2022/03/s5skay0yuyr1825-550x550.jpg.1620354506-510x510.jpg",
        desc: "DRY TOBACCO BY VGOD SALT NIC COLLECTION 30ML SALT NICOTINE REVIEW\nDry Tobacco by VGOD Salt Nic Collection is the tobacco salt nicotine that you have been looking for. VGOD Salt Nic offers you the spot on and authentic flavor of robust tobacco that you will not be able to find anywhere else, this flavor is truly one of a kind you will not be able to replicate it.\nAs you inhale Dry Tobacco by VGOD Salt Nic Collection the taste of not so sweet robust tobacco surrounds your taste buds leaving you in our own bubble of tobacco bliss. This flavor sends you down a rabbit hole of tobacco salt nicotine hoping to find another as good as Dry Tobacco by VGOD Salt Nic Collection. On the exhale the taste of the robust tobacco starts to fade away leaving you running back, your taste buds will be craving this flavor.\nDry Tobacco by VGOD Salt Nic Collection is everything you would want in your next go to tobacco salt nicotine flavor. You will be falling in love with this salt nicotine from just the first puff of this flavor, you will not be able to put it down no matter how hard you try. VGOD Salt Nic Collection will have you trying every single one o their tobacco flavors and you will be sure to get hooked on every single one of them.\nDry Tobacco by VGOD Salt Nic Collection will be your next go to salt nicotine flavor no matter the time or day, you will be grabbing a bottle of this flavor every chance you get. From inhale to exhale you will be sure to love this deep and robust flavor that you have not been able to find anywhere else. Dry Tobacco by VGOD Salt Nic Collection has a flavor that is like no other to offer you, so you know that the experience vaping this flavor is like no other.\nFLAVOR PROFILE: ROBUST TOBACCO\nBOTTLE SIZE: 30ML\nVG/PG: 50/50"
    },
    {
        id: "product-628",
        title: "VGOD ICE DRY TOBACCO Nic Salt – 30ml",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/VGOD_Iced_Dry_Tobacco_SaltNic_30ml_Salt_E-Juice__55706-510x510.jpg",
        desc: "Introducing Icеd Dry Tobacco by VGOD SaltNic E-Liquid! Expеriеncе thе еpitomе of luxury with this еxquisitе tobacco blеnd, еnhancеd with a dеlightful hint of swееtnеss and a cool mеnthol twist. Packagеd in a convеniеnt 30ml chubby bottlе, this vapе juicе is availablе in nicotinе strеngths of 25mg and 50mg. Its pеrfеctly balancеd VG/PG ratio of 50/50 еnsurеs a smooth and gratifying vaping journey. Gеt ready to indulgе in a truly satisfying еxpеriеncе!\nLiquid Details:\n\nBrand: VGOD\nFlavor: Iced Dry Tobacco\nNicotine Type: Nicotine Salts\nBottle Size: 30ml\nBottle Type: Chubby Gorilla\nNicotine Levels: 25mg / 50mg\nVG/PG: 50/50"
    },
    {
        id: "product-629",
        title: "VGOD Cubano Black ( tobacco ) 30ml Nic Salt",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2022/05/VGOD-Salt-Nic-Cubano-Black_900x-510x510.jpg",
        desc: "Cubano Black is a crafted specialty and has been aged to perfection. It is handcrafted in limited quantities and pre-steeped for months to coalesce to perfection. BOLD is the word you will envision when the robust Cuban cigar flavor hits your palate commingling perfectly with hints of rich creamy custard. The only thing that you will be thinking of as you exhale this smooth, well-balanced flavour, is the anticipation of your next draw of Cubano Black by VGOD.\nE-Liquid Details:\n\nBrand: VGOD\nFlavor: Cubano Black Salt Nic\nBottle Size: 30mL\nBottle Type: Chubby Unicorn Bottle\nVG/PG: 55/45\nMade in USA\nNicotine Type: Salt Nicotine\nAvailable Nicotine Levels: 25mg / 50mg"
    },
    {
        id: "product-630",
        title: "VGOD Cubano Silver ( tobacco ) 30ml Nic Salt",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2021/07/vgod-cubano-silver-30ml-nic-salt-juice-p6067-18991_medium-510x510.jpg",
        desc: "Key Features of Cubano Silver Nic Salt Juice by VGOD\n\n30ml nic salt juice by VGOD\nAvailable in 25mg (2.5%) and 50mg (5.0%) nicotine strengths\n45PG / 55VG\nFlavor Profile: Smooth cigar tobacco & vanilla\n\nAbout Cubano Silver Nic Salt Juice by VGOD\nThe smoothest version of Cubano that VGOD has to offer, this Cubano Silver Nic Salt Juice takes the iconic flavor of cigar tobacco and complements it with notes of warm vanilla to create this complex and medium-bodied tobacco blend. Perfect for those who enjoy lighter varieties of traditional tobaccos, as well as Cuban cigars, VGOD’s Cubano Silver Nic Salt Juice, serves up an ideal choice for those who enjoy tobaccos that are more smooth than they are robust. If you’ve been searching for a rich, subtly sweet tobacco to make your next all-day vape, be sure to give this satisfying Cubano Silver Nic Salt Juice by VGOD a try.\nVGOD’s Cubano Silver Nic Salt Juice comes in a 30ml bottle of nicotine salt juice with your choice between a 25mg (2.5%) and 50mg (5.0%) nicotine strength. Not craving Cubano Silver? Be sure to check out VGOD’s full selection of nicotine salt juices."
    },
    {
        id: "product-631",
        title: "VGOD Berry Bomb ICE 30ml Nic Salt",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2022/04/ice-berry-1.jpg",
        desc: "Key Features of Berry Bomb ICE Nic Salt Juice by VGOD\n\n30ml nic salt juice by VGOD\nAvailable in 25mg (2.5%) and 50mg (5.0%) nicotine strengths\n45PG / 55VG\nFlavor Profile: Strawberry, sour belts & mint\n\nAbout Berry Bomb ICE Nic Salt Juice by VGOD\nDelivering a complex, yet well-balanced flavor profile, VGOD’s Berry Bomb ICE Nic Salt Juice offers the perfect choice for those who enjoy nuanced strawberry flavors with a cool and clean mint finish. Starting with an authentic strawberry inhale, this Berry Bomb ICE Nic Salt Juice is elevated with undertones of sweet and sour strawberry belt and subtle notes of frosty mint to make this vivid and refreshing all-day vape. Slightly sour, frosty, and perfectly sweet, if you enjoy bright and uplifting strawberry e-liquids that leave your palate feeling cool and clean, then VGOD’s Berry Bomb ICE Nic Salt Juice just might be your match.\nVGOD’s Berry Bomb ICE Nic Salt Juice comes in a 30ml bottle of nicotine salt juice with your choice between a 25mg (2.5%) and 50mg (5.0%) nicotine strength. Not interested in berry? Be sure to check out VGOD’s full selection of nicotine salt juices."
    },
    {
        id: "product-632",
        title: "White Fox Pepper Mint Slim Nicotine Snus Pouch Made in Sweden – 12mg – 20 Pouches Per Pack",
        price: "1150",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/white-fox-peppered-mint-nicotine-pouch-15mg-510x510.jpg",
        desc: "White Fox Peeper Mint Slim All White is an all white snus with high nicotine content of 12mg/g with extra fresh minty flavor.\nThe pouches are delivered in slim format and the portion “fleece bags” enables a better release of nicotine and taste, compared to the traditional portion material.\nCONTENT AND INFORMATION\nNicotine mg/pouch: 12mg\nFormat: Slim\nManufacturer: GN Tobacco\nDeclaration of content\nFiller (E460), xanthan gum (E415), nicotine, acidity regulator (E500), natural flavors, humectant (E1520)\nHow to use fox nicotine Pouches\nPlace it between your gum and lip. You’ll feel a tingling, hot sensation – that’s the nicotine being released. You can gently chew it a few times to release the nicotine. Keep the pouch between your gum and lip for a minimum of 5 minutes and a maximum of 60 minutes"
    }
]
const combinedArray = itemsArray.map(item => {
  const productDetails = array2.find(details => details.id === item.id);
  return { ...item, ...productDetails };
});
 const disposable =[
    {
        id: "product-300",
        title: "KangerTech Subox 50000 Puffs Disposable Vape – Grape Ice",
        price: "3500",
        price2: "4000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Grape-Ice-kanger-subox-50000-510x510.jpg",
        desc: "Check out the Kangertech Subox 50000 puffs , featuring multi flavors and LC&HB coil technology beat against 4 mesh coil, Support both DTL&MTL, indurable battery with type C charging port, more economical and competitive.\n\nKanger SUBOX 50000 Disposable Vape offers a powerful, long-lasting experience with up to 50000 puffs in Normal mode. It features a 900mAh rechargeable battery and an impressive 40ml juice tank, loaded with dual flavors for a customizable experience. The LC & HB coil design optimizes both consumption and burst performance, while the digital screen keeps you informed with battery, e-juice, and mode indicators. Effortlessly switch between Normal and Burst modes by double-clicking the charging port, and enjoy adjustable MTL or DL vaping via the bottom airflow wheel. With a 0.35% nicotine strength and USB Type-C charging, this draw-activated vape is designed for convenience and satisfaction."
    },
    {
        id: "product-301",
        title: "KangerTech Subox 50000 Puffs Disposable Vape – Mango Freeze",
        price: "3500",
        price2: "4000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Mango-Freeze-kanger-subox-50000-510x510.jpg",
        desc: "Check out the Kangertech Subox 50000 puffs , featuring multi flavors and LC&HB coil technology beat against 4 mesh coil, Support both DTL&MTL, indurable battery with type C charging port, more economical and competitive.\n\nKanger SUBOX 50000 Disposable Vape offers a powerful, long-lasting experience with up to 50000 puffs in Normal mode. It features a 900mAh rechargeable battery and an impressive 40ml juice tank, loaded with dual flavors for a customizable experience. The LC & HB coil design optimizes both consumption and burst performance, while the digital screen keeps you informed with battery, e-juice, and mode indicators. Effortlessly switch between Normal and Burst modes by double-clicking the charging port, and enjoy adjustable MTL or DL vaping via the bottom airflow wheel. With a 0.35% nicotine strength and USB Type-C charging, this draw-activated vape is designed for convenience and satisfaction."
    },
    {
        id: "product-302",
        title: "KangerTech Subox 50000 Puffs Disposable Vape – Peach Ice",
        price: "3500",
        price2: "4000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Peach-Ice-kanger-subox-50000-510x510.jpg",
        desc: "Check out the Kangertech Subox 50000 puffs , featuring multi flavors and LC&HB coil technology beat against 4 mesh coil, Support both DTL&MTL, indurable battery with type C charging port, more economical and competitive.\n\nKanger SUBOX 50000 Disposable Vape offers a powerful, long-lasting experience with up to 50000 puffs in Normal mode. It features a 900mAh rechargeable battery and an impressive 40ml juice tank, loaded with dual flavors for a customizable experience. The LC & HB coil design optimizes both consumption and burst performance, while the digital screen keeps you informed with battery, e-juice, and mode indicators. Effortlessly switch between Normal and Burst modes by double-clicking the charging port, and enjoy adjustable MTL or DL vaping via the bottom airflow wheel. With a 0.35% nicotine strength and USB Type-C charging, this draw-activated vape is designed for convenience and satisfaction."
    },
    {
        id: "product-303",
        title: "KangerTech Subox 50000 Puffs Disposable Vape – Peach Mango Watermelon",
        price: "3500",
        price2: "4000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Peach-mango-watermelon-510x510.png",
        desc: "Check out the Kangertech Subox 50000 puffs , featuring multi flavors and LC&HB coil technology beat against 4 mesh coil, Support both DTL&MTL, indurable battery with type C charging port, more economical and competitive.\n\nKanger SUBOX 50000 Disposable Vape offers a powerful, long-lasting experience with up to 50000 puffs in Normal mode. It features a 900mAh rechargeable battery and an impressive 40ml juice tank, loaded with dual flavors for a customizable experience. The LC & HB coil design optimizes both consumption and burst performance, while the digital screen keeps you informed with battery, e-juice, and mode indicators. Effortlessly switch between Normal and Burst modes by double-clicking the charging port, and enjoy adjustable MTL or DL vaping via the bottom airflow wheel. With a 0.35% nicotine strength and USB Type-C charging, this draw-activated vape is designed for convenience and satisfaction."
    },
    {
        id: "product-304",
        title: "KangerTech Subox 50000 Puffs Disposable Vape – Strawberry Pitaya",
        price: "3500",
        price2: "4000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Strawberry-Pitaya-510x510.png",
        desc: "Check out the Kangertech Subox 50000 puffs , featuring multi flavors and LC&HB coil technology beat against 4 mesh coil, Support both DTL&MTL, indurable battery with type C charging port, more economical and competitive.\n\nKanger SUBOX 50000 Disposable Vape offers a powerful, long-lasting experience with up to 50000 puffs in Normal mode. It features a 900mAh rechargeable battery and an impressive 40ml juice tank, loaded with dual flavors for a customizable experience. The LC & HB coil design optimizes both consumption and burst performance, while the digital screen keeps you informed with battery, e-juice, and mode indicators. Effortlessly switch between Normal and Burst modes by double-clicking the charging port, and enjoy adjustable MTL or DL vaping via the bottom airflow wheel. With a 0.35% nicotine strength and USB Type-C charging, this draw-activated vape is designed for convenience and satisfaction."
    },
    {
        id: "product-305",
        title: "ELF BAR BC 10000 Puffs Disposable Vapes – 2% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "5850",
        price2: "6000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/02/BC1000.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-306",
        title: "ELF BAR BC 10000 Puffs Disposable Vapes – 2% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "9500",
        price2: "10000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/02/BC1000.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-307",
        title: "ELF BAR COMBO 25000 Puffs Disposable Vapes – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "8199",
        price2: "8400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/elf-bar-combo-200001-510x492.webp",
        desc: ""
    },
    {
        id: "product-308",
        title: "ELF BAR COMBO 25000 Puffs Disposable Vapes – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "13299",
        price2: "14000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/elf-bar-combo-200001-510x492.webp",
        desc: ""
    },
    {
        id: "product-309",
        title: "ELF BAR ICE KING 30000 Puffs Disposable Vapes – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "8800",
        price2: "9000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/EU-Warehouse-Stock-Elfbar-Ice-King-40000-Puff-20ml-E-Liquid-Capacity-Adjustable-Coolness-Disposable-Electronic-Cigarette-510x510.webp",
        desc: ""
    },
    {
        id: "product-310",
        title: "ELF BAR ICE KING 30000 Puffs Disposable Vapes – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "14400",
        price2: "15000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/EU-Warehouse-Stock-Elfbar-Ice-King-40000-Puff-20ml-E-Liquid-Capacity-Adjustable-Coolness-Disposable-Electronic-Cigarette-510x510.webp",
        desc: ""
    },
    {
        id: "product-311",
        title: "ELF WORLD G20000 Disposable Vapes – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "6000",
        price2: "6600",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/elfworld-g20000-510x510.jpg",
        desc: ""
    },
    {
        id: "product-312",
        title: "ELF WORLD G20000 Disposable Vapes – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "10000",
        price2: "11000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/elfworld-g20000-510x510.jpg",
        desc: ""
    },
    {
        id: "product-313",
        title: "DINNER LADY FUYL 8000 PUFFS DISPOSABLE VAPES – 2% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "5400",
        price2: "5700",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/FUYL-Disposable-By-Dinner-Lady.webp",
        desc: ""
    },
    {
        id: "product-314",
        title: "DINNER LADY FUYL 8000 PUFFS DISPOSABLE VAPES – 2% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "9000",
        price2: "9500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/FUYL-Disposable-By-Dinner-Lady.webp",
        desc: ""
    },
    {
        id: "product-315",
        title: "ELF BAR RAYA D2 20000 PUFFS DISPOSABLE VAPES – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "6597",
        price2: "6900",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/d5bfc5e1-1276-494b-abe0-f3b2c22601cb-510x589.webp",
        desc: ""
    },
    {
        id: "product-316",
        title: "ELF BAR RAYA D2 20000 PUFFS DISPOSABLE VAPES – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "10745",
        price2: "13500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/d5bfc5e1-1276-494b-abe0-f3b2c22601cb-510x589.webp",
        desc: ""
    },
    {
        id: "product-317",
        title: "FUMOT DIGITAL BOX Disposable Vapes 12K Puffs – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "5100",
        price2: "5400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/fumot-digital-box-12000-vape-510x510.webp",
        desc: ""
    },
    {
        id: "product-318",
        title: "FUMOT DIGITAL BOX Disposable Vapes 12K Puffs – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "8500",
        price2: "9000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/fumot-digital-box-12000-vape-510x510.webp",
        desc: ""
    },
    {
        id: "product-319",
        title: "NASTY BAR X 14K PUFFS Disposable Vapes – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "5700",
        price2: "6000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/arctic-mint-nasty-bar-x-14000-disposable-vape-5-nasty-shop-buy-online-cape-town-joburg-durban-south-africa-delivery-626453-510x510.webp",
        desc: "NASTY BAR X 14K PUFFA Disposable Vapes – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer"
    },
    {
        id: "product-320",
        title: "NASTY BAR X 14K PUFFS Disposable Vapes – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "9250",
        price2: "10000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/arctic-mint-nasty-bar-x-14000-disposable-vape-5-nasty-shop-buy-online-cape-town-joburg-durban-south-africa-delivery-626453-510x510.webp",
        desc: "NASTY BAR X 14K PUFFA Disposable Vapes – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer"
    },
    {
        id: "product-321",
        title: "ONTO TEMPO 15000 PUFFS Disposable Vapes – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "5100",
        price2: "6000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/ONTO-15000-PUFFS-Disposable-Vape-510x510.png",
        desc: ""
    },
    {
        id: "product-322",
        title: "ONTO TEMPO 15000 PUFFS Disposable Vapes – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "8500",
        price2: "10000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/ONTO-15000-PUFFS-Disposable-Vape-510x510.png",
        desc: ""
    },
    {
        id: "product-323",
        title: "UWELL CALIBURN S12000 Disposable Vapes – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "4800",
        price2: "5100",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/uwell-disposable-vape-uwell-cali__64468-510x510.jpg",
        desc: ""
    },
    {
        id: "product-324",
        title: "UWELL CALIBURN S12000 Disposable Vapes – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "7750",
        price2: "8500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/uwell-disposable-vape-uwell-cali__64468-510x510.jpg",
        desc: ""
    },
    {
        id: "product-325",
        title: "VOZOL VISTA Disposable Vapes 20K Puffs – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "6900",
        price2: "7500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/vozol-vista-20000-vape-510x510.jpg",
        desc: ""
    },
    {
        id: "product-326",
        title: "VOZOL VISTA Disposable Vapes 20K Puffs – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "11500",
        price2: "12500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/vozol-vista-20000-vape-510x510.jpg",
        desc: ""
    },
    {
        id: "product-327",
        title: "YUZU 15000 Puffs Disposable Vapes – 5% nic – Type C Rechargeable – 3 Pcs Combo Offer",
        price: "5100",
        price2: "5700",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-18-510x510.jpg",
        desc: ""
    },
    {
        id: "product-328",
        title: "YUZU 15000 Puffs Disposable Vapes – 5% nic – Type C Rechargeable – 5 Pcs Combo Offer",
        price: "8500",
        price2: "9500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-18-510x510.jpg",
        desc: ""
    },
    {
        id: "product-329",
        title: "YUOTO THANOS DISPOSABLE VAPE – 5 Pcs Combo Offer",
        price: "6500",
        price2: "7750",
        image: "https://yoyovapes.com/wp-content/uploads/2022/10/1-1-500x500-1.jpg",
        desc: "Yuoto Thanos Disposable features pre-filled 14ml e-liquid, rechargeable 650mAh integrated battery, 5%(50mg) salt nicotine, and a mesh coil for approximately 5000 puffs. Looking appealing and maintaining an exaggerated shell, it sports a draw-activated firing mechanism so that there isn’t a need for buttons or any adjustment. It is rechargeable and allows you to explore the full line-up of flavors all day.\nProduct Highlights:\n\nPuffs: 5000 Puffs\nE-Juice Capacity: 14ml\nNicotine strength: 5%, 2%optional\nResistance: 1.0ohm\nBattery Capacity: 650mAh(Rechargeable)\nCharging: Type C Charging Port\nSize: 28.5*24*110.7mm"
    },
    {
        id: "product-330",
        title: "YUOTO THANOS DISPOSABLE VAPE – 3 Pcs Combo Offer",
        price: "3900",
        price2: "4650",
        image: "https://yoyovapes.com/wp-content/uploads/2022/10/1-1-500x500-1.jpg",
        desc: "Yuoto Thanos Disposable features pre-filled 14ml e-liquid, rechargeable 650mAh integrated battery, 5%(50mg) salt nicotine, and a mesh coil for approximately 5000 puffs. Looking appealing and maintaining an exaggerated shell, it sports a draw-activated firing mechanism so that there isn’t a need for buttons or any adjustment. It is rechargeable and allows you to explore the full line-up of flavors all day.\nProduct Highlights:\n\nPuffs: 5000 Puffs\nE-Juice Capacity: 14ml\nNicotine strength: 5%, 2%optional\nResistance: 1.0ohm\nBattery Capacity: 650mAh(Rechargeable)\nCharging: Type C Charging Port\nSize: 28.5*24*110.7mm"
    },
    {
        id: "product-331",
        title: "WAKA soPro By RELX DISPOSABLE VAPE (10k Puffs)- 3 Pcs Combo Offer",
        price: "4800",
        price2: "5100",
        image: "https://yoyovapes.com/wp-content/uploads/2023/06/WAKA-SOPRO-PA10000-510x378.jpg",
        desc: "WAKA soPro By RELX DISPOSABLE VAPE (10k Puffs)- 3 Pcs Combo Offer\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-332",
        title: "WAKA soPro By RELX DISPOSABLE VAPE (10k Puffs)- 5 Pcs Combo Offer",
        price: "8000",
        price2: "8500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/06/WAKA-SOPRO-PA10000-510x378.jpg",
        desc: "WAKA soPro By RELX DISPOSABLE VAPE (10k Puffs)- 5 Pcs Combo Offer\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-333",
        title: "Blueberry Ice – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/11/Waka-SoPro-10000-Puffs-Vape-510x510.webp",
        desc: "Blueberry Ice\n\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-334",
        title: "Berry Lemonade – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/11/Waka-SoPro-10000-Puffs-Vape-510x510.webp",
        desc: "Berry lemonade\n\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-335",
        title: "Berry Shisha – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/04/Waka-SoPro-10000-Puffs-Berry-Shisha-510x510.webp",
        desc: "The WAKA SoPro 10000 &Triple Melon can provide up to 10000 suction cycles. Immerse you in the juicy fusion of three delicious melons, bringing you a delicious and long-lasting tobacco experience. Each time you inhale, you can enjoy the perfect combination of sweet watermelon, juicy honeydew melon and refreshing Hami melon, creating a satisfying feeling of smoking, which makes you unable to stop.\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-336",
        title: "Pineapple Melon – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/20230627115247850-510x510.webp",
        desc: "Elevate your vaping experience with the WAKA SoPro 10000, a device that blends contemporary aesthetics with functional excellence. Designed to appeal to the young and fashion-conscious, this vaporizer is a trendsetter in the vaping community. Its sleek, modern design is complemented by the unique Pineapple Melon flavour, one of the 27 diverse options available to cater to a variety of tastes. The SoPro 10000 stands out for its high-quality build and reliability, a testament to WAKA’s strong reputation and trust within the vaping industry.\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-337",
        title: "Raspberry Tea – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Best-Seller-Waka-Sopro-PA10000-Puffs-Wholesale-I-Vape-5-2-3-18ml-E-Liquid-850mAh-Disposable-Rechargeable-E-Cigarette-510x510.webp",
        desc: "The WAKA SoPro 10000 redefines the vaping experience with its sleek, compact design, making it an ideal companion for work, travel, or leisure. This disposable vape is designed for convenience and adaptability, fitting seamlessly into your lifestyle. It offers a diverse range of 27 flavours, including the unique Raspberry Tea, catering to a wide array of tastes and preferences. Beyond its flavour variety, the SoPro 10000 is celebrated for its exceptional value, making it an accessible choice for those who seek quality without breaking the bank.\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-338",
        title: "Cherry Pomegranate – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Waka-SoPro-10000-Puffs-Cherry-Pomegranate-510x510.webp",
        desc: "WAKA SoPro 10000 Puffs Cherry Pomegranate\n\nThe WAKA SoPro 10000 puffs vapes have all the latest technologies. More importantly, it offers a cost saving way for vaping while getting the best flavours. So, get ready for these innovative new rechargeable vapes!\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-339",
        title: "Fizzy Cherry – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/04/Waka-SoPro-10000-Puffs-Fizzy-Cherry-510x510.webp",
        desc: "The WAKA SoPro 10000 &Triple Melon can provide up to 10000 suction cycles. Immerse you in the juicy fusion of three delicious melons, bringing you a delicious and long-lasting tobacco experience. Each time you inhale, you can enjoy the perfect combination of sweet watermelon, juicy honeydew melon and refreshing Hami melon, creating a satisfying feeling of smoking, which makes you unable to stop.\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-340",
        title: "Grape Ice – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/01/image-510x510.webp",
        desc: "The WAKA SoPro 10000 &Triple Melon can provide up to 10000 suction cycles. Immerse you in the juicy fusion of three delicious melons, bringing you a delicious and long-lasting tobacco experience. Each time you inhale, you can enjoy the perfect combination of sweet watermelon, juicy honeydew melon and refreshing Hami melon, creating a satisfying feeling of smoking, which makes you unable to stop.\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-341",
        title: "Orange Kiwi – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/01/image_93c3623f-bafc-4115-8c55-829b3f162ec0-510x510.webp",
        desc: "The WAKA SoPro 10000 &Triple Melon can provide up to 10000 suction cycles. Immerse you in the juicy fusion of three delicious melons, bringing you a delicious and long-lasting tobacco experience. Each time you inhale, you can enjoy the perfect combination of sweet watermelon, juicy honeydew melon and refreshing Hami melon, creating a satisfying feeling of smoking, which makes you unable to stop.\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-342",
        title: "VOZOL VISTA DISPOSABLE VAPE 20K Puffs – Dragon Fruit Banana Cherry (5% Nic) – Type C Rechargeable",
        price: "2299",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/vozol-vista-20000-vape_mango-ice-510x510.webp",
        desc: "One of the prestigious products of Vapor Expert, Vozol 20000 Puff Vista Dragon Fruit Banana Cherry, delivers the satisfying aroma expected from electronic cigarettes by offering a healthy use. This product has certificates that meet industry standards and can be preferred safely. Prioritizing ease of use and taste, Vozol brand promises a pleasant vapor experience with this product.\nFEATURES\n\nOLED Screen Display for Battery & E-liquid Level\n20,000+ Puffs\n6-level Watt Output Adjustment\n650mAh Rechargeable Battery (Full Charge in 45 Minutes)\nCoil: S.i.L.C Tech Dual Mesh Coil\nProcessing Chip: MCU Chip\nMaterial: 65% PCR (Recyclable Eco-Friendly Plastic Material)\nMTL Vaping\n\n\nThe VOZOL VISTA 20000 is a disposable vape with a vibrant color display that provides easy access to power, oil level, and battery life. Its transparent design allows you to witness the technology in action with every puff, turning vaping into a visual spectacle. With the Ultimate 6-level Wattage control, you can find your perfect intensity by simply twisting the device. This feature not only satisfies your cravings but also helps relieve stress.\n\n\nFLAVOURS\nBlue Razz Ice\nCherry Cola\nGrape Ice\nLemon Lime\nMango Ice\nMiami Mint\nMixed Berries\nPeach Mango Watermelon\nRaspberry Watermelon\nSour Apple Ice\nStrawberry Mango\nStrawberry Raspberry Cherry\nVanicreme Tobacco\nWatermelon Bubble Gum\nPACKAGE CONTAINS\n1x Vozol Vista 20000 Vape\n\n\n\n\n\n\nBattery Capacity\n650mAh\n\n\nBattery Type\nRechargeable\n\n\nCoil Type\nMesh\n\n\nE-liquid Flavours\n15+ flavours\n\n\nDisplay\nOLED Screen\n\n\n\n\n– Vozol VISTA 20000 FAQ’S –\nWhat are key features of the VOZOL VISTA 20000 Vape?\nBattery and liquid level display.\n6-level wattage adjustment. MCU chip.\n65% recyclable eco-friendly plastic material.\nHow long does it take to charge the VOZOL VISTA 20000 Vape?\nIt will take on average a hour to fully charge the VOZOL VISTA 20000 Vape via a USB-C charging cable.\nHow many VOZOL VISTA 20000 Vape flavors are available?\nThe VOZOL VISTA 20000 Vape is available in 24 flavors: Blue Razz Ice, Cherry Cola, Cranberry Mango Grapefruit, Dragon Fruit Banana Cherry, Elderflower Grapefruit, Fucking Fab, Grape Ice, Lava Fire, Lemon Lime, Mexican Mango, Mango Ice, Miami Mint, Mixed Berries, Peach Ice, Peach Mango Watermelon, Raspberry Watermelon, Sour Apple Ice, Strawberry Kiwi, Strawberry Mango, Strawberry Raspberry Cherry, Vanicreme Tobacco, Vzbull, Watermelon Bubble Gum, Watermelon Ice.\nHow long does the VOZOL VISTA 20000 Vape last?\nThe VOZOL VISTA 20000 Vape will last you approximately 20000 puffs of tasty vapor that with the average user will last anywhere from 6-8 days of heavy usage."
    },
    {
        id: "product-343",
        title: "VOZOL VISTA DISPOSABLE VAPE 20K Puffs – Elderflower Grapefruit (5% Nic) – Type C Rechargeable",
        price: "2299",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/vozol-vista-20000-vape_mixed-berries-510x510.webp",
        desc: "Vozol 20000 Puff Vista Elderflower Grapefruit is a premium quality electronic cigarette liquid designed by the Vozol brand. This product draws attention with its ease of use and promises to offer its users a different vapor experience with the unique harmony of the two flavors it contains – elderflower (honeysuckle flower) and grapefruit. The intense vapor and flavor experience it provides is one of the most striking aspects of the product.\nThis product has the necessary globally recognized approvals and the Vozol brand has a good reputation in the industry for quality and reliability. It is designed to provide an experience that suits personal tastes and is offered to all vaping enthusiasts, from beginners to advanced.\nFEATURES\n\nOLED Screen Display for Battery & E-liquid Level\n20,000+ Puffs\n6-level Watt Output Adjustment\n650mAh Rechargeable Battery (Full Charge in 45 Minutes)\nCoil: S.i.L.C Tech Dual Mesh Coil\nProcessing Chip: MCU Chip\nMaterial: 65% PCR (Recyclable Eco-Friendly Plastic Material)\nMTL Vaping\n\n\nThe VOZOL VISTA 20000 is a disposable vape with a vibrant color display that provides easy access to power, oil level, and battery life. Its transparent design allows you to witness the technology in action with every puff, turning vaping into a visual spectacle. With the Ultimate 6-level Wattage control, you can find your perfect intensity by simply twisting the device. This feature not only satisfies your cravings but also helps relieve stress.\n\n\nFLAVOURS\nBlue Razz Ice\nCherry Cola\nGrape Ice\nLemon Lime\nMango Ice\nMiami Mint\nMixed Berries\nPeach Mango Watermelon\nRaspberry Watermelon\nSour Apple Ice\nStrawberry Mango\nStrawberry Raspberry Cherry\nVanicreme Tobacco\nWatermelon Bubble Gum\nPACKAGE CONTAINS\n1x Vozol Vista 20000 Vape\n\n\n\n\n\n\nBattery Capacity\n650mAh\n\n\nBattery Type\nRechargeable\n\n\nCoil Type\nMesh\n\n\nE-liquid Flavours\n15+ flavours\n\n\nDisplay\nOLED Screen\n\n\n\n\n– Vozol VISTA 20000 FAQ’S –\nWhat are key features of the VOZOL VISTA 20000 Vape?\nBattery and liquid level display.\n6-level wattage adjustment. MCU chip.\n65% recyclable eco-friendly plastic material.\nHow long does it take to charge the VOZOL VISTA 20000 Vape?\nIt will take on average a hour to fully charge the VOZOL VISTA 20000 Vape via a USB-C charging cable.\nHow many VOZOL VISTA 20000 Vape flavors are available?\nThe VOZOL VISTA 20000 Vape is available in 24 flavors: Blue Razz Ice, Cherry Cola, Cranberry Mango Grapefruit, Dragon Fruit Banana Cherry, Elderflower Grapefruit, Fucking Fab, Grape Ice, Lava Fire, Lemon Lime, Mexican Mango, Mango Ice, Miami Mint, Mixed Berries, Peach Ice, Peach Mango Watermelon, Raspberry Watermelon, Sour Apple Ice, Strawberry Kiwi, Strawberry Mango, Strawberry Raspberry Cherry, Vanicreme Tobacco, Vzbull, Watermelon Bubble Gum, Watermelon Ice.\nHow long does the VOZOL VISTA 20000 Vape last?\nThe VOZOL VISTA 20000 Vape will last you approximately 20000 puffs of tasty vapor that with the average user will last anywhere from 6-8 days of heavy usage."
    },
    {
        id: "product-344",
        title: "VOZOL VISTA DISPOSABLE VAPE 20K Puffs – Lemon Lime (5% Nic) – Type C Rechargeable",
        price: "2299",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/vozol-vista-20000-vape_cherry-cola-510x510.webp",
        desc: "FEATURES\n\nOLED Screen Display for Battery & E-liquid Level\n20,000+ Puffs\n6-level Watt Output Adjustment\n650mAh Rechargeable Battery (Full Charge in 45 Minutes)\nCoil: S.i.L.C Tech Dual Mesh Coil\nProcessing Chip: MCU Chip\nMaterial: 65% PCR (Recyclable Eco-Friendly Plastic Material)\nMTL Vaping\n\n\nThe VOZOL VISTA 20000 is a disposable vape with a vibrant color display that provides easy access to power, oil level, and battery life. Its transparent design allows you to witness the technology in action with every puff, turning vaping into a visual spectacle. With the Ultimate 6-level Wattage control, you can find your perfect intensity by simply twisting the device. This feature not only satisfies your cravings but also helps relieve stress.\n\n\nFLAVOURS\nBlue Razz Ice\nCherry Cola\nGrape Ice\nLemon Lime\nMango Ice\nMiami Mint\nMixed Berries\nPeach Mango Watermelon\nRaspberry Watermelon\nSour Apple Ice\nStrawberry Mango\nStrawberry Raspberry Cherry\nVanicreme Tobacco\nWatermelon Bubble Gum\nPACKAGE CONTAINS\n1x Vozol Vista 20000 Vape\n\n\n\n\n\n\nBattery Capacity\n650mAh\n\n\nBattery Type\nRechargeable\n\n\nCoil Type\nMesh\n\n\nE-liquid Flavours\n15+ flavours\n\n\nDisplay\nOLED Screen\n\n\n\n\n– Vozol VISTA 20000 FAQ’S –\nWhat are key features of the VOZOL VISTA 20000 Vape?\nBattery and liquid level display.\n6-level wattage adjustment. MCU chip.\n65% recyclable eco-friendly plastic material.\nHow long does it take to charge the VOZOL VISTA 20000 Vape?\nIt will take on average a hour to fully charge the VOZOL VISTA 20000 Vape via a USB-C charging cable.\nHow many VOZOL VISTA 20000 Vape flavors are available?\nThe VOZOL VISTA 20000 Vape is available in 24 flavors: Blue Razz Ice, Cherry Cola, Cranberry Mango Grapefruit, Dragon Fruit Banana Cherry, Elderflower Grapefruit, Fucking Fab, Grape Ice, Lava Fire, Lemon Lime, Mexican Mango, Mango Ice, Miami Mint, Mixed Berries, Peach Ice, Peach Mango Watermelon, Raspberry Watermelon, Sour Apple Ice, Strawberry Kiwi, Strawberry Mango, Strawberry Raspberry Cherry, Vanicreme Tobacco, Vzbull, Watermelon Bubble Gum, Watermelon Ice.\nHow long does the VOZOL VISTA 20000 Vape last?\nThe VOZOL VISTA 20000 Vape will last you approximately 20000 puffs of tasty vapor that with the average user will last anywhere from 6-8 days of heavy usage."
    },
    {
        id: "product-345",
        title: "VOZOL VISTA DISPOSABLE VAPE 20K Puffs – Mango Ice (5% Nic) – Type C Rechargeable",
        price: "2299",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/vozol-vista-20000-vape_mango-ice-510x510.webp",
        desc: "FEATURES\n\nOLED Screen Display for Battery & E-liquid Level\n20,000+ Puffs\n6-level Watt Output Adjustment\n650mAh Rechargeable Battery (Full Charge in 45 Minutes)\nCoil: S.i.L.C Tech Dual Mesh Coil\nProcessing Chip: MCU Chip\nMaterial: 65% PCR (Recyclable Eco-Friendly Plastic Material)\nMTL Vaping\n\n\nThe VOZOL VISTA 20000 is a disposable vape with a vibrant color display that provides easy access to power, oil level, and battery life. Its transparent design allows you to witness the technology in action with every puff, turning vaping into a visual spectacle. With the Ultimate 6-level Wattage control, you can find your perfect intensity by simply twisting the device. This feature not only satisfies your cravings but also helps relieve stress.\n\n\nFLAVOURS\nBlue Razz Ice\nCherry Cola\nGrape Ice\nLemon Lime\nMango Ice\nMiami Mint\nMixed Berries\nPeach Mango Watermelon\nRaspberry Watermelon\nSour Apple Ice\nStrawberry Mango\nStrawberry Raspberry Cherry\nVanicreme Tobacco\nWatermelon Bubble Gum\nPACKAGE CONTAINS\n1x Vozol Vista 20000 Vape\n\n\n\n\n\n\nBattery Capacity\n650mAh\n\n\nBattery Type\nRechargeable\n\n\nCoil Type\nMesh\n\n\nE-liquid Flavours\n15+ flavours\n\n\nDisplay\nOLED Screen\n\n\n\n\n– Vozol VISTA 20000 FAQ’S –\nWhat are key features of the VOZOL VISTA 20000 Vape?\nBattery and liquid level display.\n6-level wattage adjustment. MCU chip.\n65% recyclable eco-friendly plastic material.\nHow long does it take to charge the VOZOL VISTA 20000 Vape?\nIt will take on average a hour to fully charge the VOZOL VISTA 20000 Vape via a USB-C charging cable.\nHow many VOZOL VISTA 20000 Vape flavors are available?\nThe VOZOL VISTA 20000 Vape is available in 24 flavors: Blue Razz Ice, Cherry Cola, Cranberry Mango Grapefruit, Dragon Fruit Banana Cherry, Elderflower Grapefruit, Fucking Fab, Grape Ice, Lava Fire, Lemon Lime, Mexican Mango, Mango Ice, Miami Mint, Mixed Berries, Peach Ice, Peach Mango Watermelon, Raspberry Watermelon, Sour Apple Ice, Strawberry Kiwi, Strawberry Mango, Strawberry Raspberry Cherry, Vanicreme Tobacco, Vzbull, Watermelon Bubble Gum, Watermelon Ice.\nHow long does the VOZOL VISTA 20000 Vape last?\nThe VOZOL VISTA 20000 Vape will last you approximately 20000 puffs of tasty vapor that with the average user will last anywhere from 6-8 days of heavy usage."
    },
    {
        id: "product-346",
        title: "VOZOL VISTA DISPOSABLE VAPE 20K Puffs – Peach Ice (5% Nic) – Type C Rechargeable",
        price: "2299",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/Vozol-20000-Peach-Ice-1-510x510.webp",
        desc: "FEATURES\n\nOLED Screen Display for Battery & E-liquid Level\n20,000+ Puffs\n6-level Watt Output Adjustment\n650mAh Rechargeable Battery (Full Charge in 45 Minutes)\nCoil: S.i.L.C Tech Dual Mesh Coil\nProcessing Chip: MCU Chip\nMaterial: 65% PCR (Recyclable Eco-Friendly Plastic Material)\nMTL Vaping\n\n\nThe VOZOL VISTA 20000 is a disposable vape with a vibrant color display that provides easy access to power, oil level, and battery life. Its transparent design allows you to witness the technology in action with every puff, turning vaping into a visual spectacle. With the Ultimate 6-level Wattage control, you can find your perfect intensity by simply twisting the device. This feature not only satisfies your cravings but also helps relieve stress.\n\n\nFLAVOURS\nBlue Razz Ice\nCherry Cola\nGrape Ice\nLemon Lime\nMango Ice\nMiami Mint\nMixed Berries\nPeach Mango Watermelon\nRaspberry Watermelon\nSour Apple Ice\nStrawberry Mango\nStrawberry Raspberry Cherry\nVanicreme Tobacco\nWatermelon Bubble Gum\nPACKAGE CONTAINS\n1x Vozol Vista 20000 Vape\n\n\n\n\n\n\nBattery Capacity\n650mAh\n\n\nBattery Type\nRechargeable\n\n\nCoil Type\nMesh\n\n\nE-liquid Flavours\n15+ flavours\n\n\nDisplay\nOLED Screen\n\n\n\n\n– Vozol VISTA 20000 FAQ’S –\nWhat are key features of the VOZOL VISTA 20000 Vape?\nBattery and liquid level display.\n6-level wattage adjustment. MCU chip.\n65% recyclable eco-friendly plastic material.\nHow long does it take to charge the VOZOL VISTA 20000 Vape?\nIt will take on average a hour to fully charge the VOZOL VISTA 20000 Vape via a USB-C charging cable.\nHow many VOZOL VISTA 20000 Vape flavors are available?\nThe VOZOL VISTA 20000 Vape is available in 24 flavors: Blue Razz Ice, Cherry Cola, Cranberry Mango Grapefruit, Dragon Fruit Banana Cherry, Elderflower Grapefruit, Fucking Fab, Grape Ice, Lava Fire, Lemon Lime, Mexican Mango, Mango Ice, Miami Mint, Mixed Berries, Peach Ice, Peach Mango Watermelon, Raspberry Watermelon, Sour Apple Ice, Strawberry Kiwi, Strawberry Mango, Strawberry Raspberry Cherry, Vanicreme Tobacco, Vzbull, Watermelon Bubble Gum, Watermelon Ice.\nHow long does the VOZOL VISTA 20000 Vape last?\nThe VOZOL VISTA 20000 Vape will last you approximately 20000 puffs of tasty vapor that with the average user will last anywhere from 6-8 days of heavy usage."
    },
    {
        id: "product-347",
        title: "VOZOL VISTA DISPOSABLE VAPE 20K Puffs – Strawberry Mango (5% Nic) – Type C Rechargeable",
        price: "2299",
        price2: "3000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/vozol-vista-20000-vape_Strawberry-Mango-510x510.webp",
        desc: "FEATURES\n\nOLED Screen Display for Battery & E-liquid Level\n20,000+ Puffs\n6-level Watt Output Adjustment\n650mAh Rechargeable Battery (Full Charge in 45 Minutes)\nCoil: S.i.L.C Tech Dual Mesh Coil\nProcessing Chip: MCU Chip\nMaterial: 65% PCR (Recyclable Eco-Friendly Plastic Material)\nMTL Vaping\n\n\nThe VOZOL VISTA 20000 is a disposable vape with a vibrant color display that provides easy access to power, oil level, and battery life. Its transparent design allows you to witness the technology in action with every puff, turning vaping into a visual spectacle. With the Ultimate 6-level Wattage control, you can find your perfect intensity by simply twisting the device. This feature not only satisfies your cravings but also helps relieve stress.\n\n\nFLAVOURS\nBlue Razz Ice\nCherry Cola\nGrape Ice\nLemon Lime\nMango Ice\nMiami Mint\nMixed Berries\nPeach Mango Watermelon\nRaspberry Watermelon\nSour Apple Ice\nStrawberry Mango\nStrawberry Raspberry Cherry\nVanicreme Tobacco\nWatermelon Bubble Gum\nPACKAGE CONTAINS\n1x Vozol Vista 20000 Vape\n\n\n\n\n\n\nBattery Capacity\n650mAh\n\n\nBattery Type\nRechargeable\n\n\nCoil Type\nMesh\n\n\nE-liquid Flavours\n15+ flavours\n\n\nDisplay\nOLED Screen\n\n\n\n\n– Vozol VISTA 20000 FAQ’S –\nWhat are key features of the VOZOL VISTA 20000 Vape?\nBattery and liquid level display.\n6-level wattage adjustment. MCU chip.\n65% recyclable eco-friendly plastic material.\nHow long does it take to charge the VOZOL VISTA 20000 Vape?\nIt will take on average a hour to fully charge the VOZOL VISTA 20000 Vape via a USB-C charging cable.\nHow many VOZOL VISTA 20000 Vape flavors are available?\nThe VOZOL VISTA 20000 Vape is available in 24 flavors: Blue Razz Ice, Cherry Cola, Cranberry Mango Grapefruit, Dragon Fruit Banana Cherry, Elderflower Grapefruit, Fucking Fab, Grape Ice, Lava Fire, Lemon Lime, Mexican Mango, Mango Ice, Miami Mint, Mixed Berries, Peach Ice, Peach Mango Watermelon, Raspberry Watermelon, Sour Apple Ice, Strawberry Kiwi, Strawberry Mango, Strawberry Raspberry Cherry, Vanicreme Tobacco, Vzbull, Watermelon Bubble Gum, Watermelon Ice.\nHow long does the VOZOL VISTA 20000 Vape last?\nThe VOZOL VISTA 20000 Vape will last you approximately 20000 puffs of tasty vapor that with the average user will last anywhere from 6-8 days of heavy usage."
    },
    {
        id: "product-348",
        title: "NASTY Bar Disposable Vape 8500 Puffs – Red Energy (5% Nic) – Type C Rechargeable",
        price: "1800",
        price2: "2499",
        image: "https://yoyovapes.com/wp-content/uploads/2024/01/Red-Energy-500x500-1.png",
        desc: "Nasty Bar 8500 Puff Disposable with battery indicator & Flavor indicator\n\n\nIntroducing Nasty, a company driven by the mission to redefine the dynamic landscape of smoking. Nasty is committed to continuous innovation, tirelessly refining ENDS (Electronic Nicotine Delivery Systems) solutions to meet the evolving demands of its discerning clientele.\nAs trailblazers in the realm of vape flavors, Nasty prides itself on delivering nothing short of excellence in taste. The latest addition to their lineup, the Nasty Bar 8500 puffs, encapsulates their commitment to flavor mastery. This cutting-edge device is equipped with a mesh coil, boasting a nicotine content of 5mg per puff and an astounding puff count of 8500. Prepare to embark on a sensory journey with a selection of 10 exhilarating flavors, each meticulously crafted to tantalize your taste buds.\nNasty’s innovation extends beyond flavor creation. With the user in mind, the Nasty Bar features a liquid and battery indicator screen, setting a new standard of convenience. Stay effortlessly informed about your device’s status throughout the day, eliminating guesswork. Know precisely when it’s time to recharge and when your tank requires a refill, streamlining your experience.\nEmbrace the future of vaping with Nasty Bar 8.500 puffs – an embodiment of meticulous craftsmanship, sensory delight, and unparalleled user-centric design. Elevate your vaping journey and discover the epitome of taste and convenience, all within the palm of your hand.\n\n\n\n\n\n\n\n8500 PUFFS\n\n\n\n\n5% (50MG)\n\n\n\n\nMESH COIL\n\n\n\n\n650 MAH\n\n\n\n\nUSB – C"
    },
    {
        id: "product-349",
        title: "Kiwi Passion Guava – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/06/ggg_500x.webp",
        desc: "Kiwi Passion Guava: Waka soPro PA10000 Disposable Vape by Relx has one of the biggest 10000 puff with 18ml e-liquid in the market. Prolong your satisfaction with 10,000 quality puffs.\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-350",
        title: "Strawberry Kiwi – WAKA soPro By RELX – 10k Puffs Disposable Vapes (5% nic) – Rechargeable Type C",
        price: "1599",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/06/jhjjg_500x.webp",
        desc: "Strawberry Kiwi: is a fruit explosion of farm-fresh strawberries and succulent kiwi for powerful blend that keeps you wanting more!\n\n10,000 puffs\n850 mAh rechargeable battery – pure cobalt battery for a long lasting experience\n80% of the load in only 45 minutes.\nNicotine content: 50mg/ml\nCapacity: 18 ml of juice\n\nBoost Mode: Activates two MESH coils doubling the satisfaction with much bigger puffs.\nNormal Mode: Reduces the rate of consumption and offers freshness up to 10,000 puffs."
    },
    {
        id: "product-351",
        title: "ELF BAR BC 10000 Puffs – CHERRY WATERMELON – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/02/cherry_watermelon_sunit_b_1160x_crop_center-510x489.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-352",
        title: "ELF BAR BC 10000 Puffs- DOUBLE MANGO – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/02/double_mango_sunit_b_1160x_crop_center-510x489.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 50mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-353",
        title: "ELF BAR BC 10000 Puffs – BLUEBERRY – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Elf-Bar-BC10000-Blueberry-Ice-Dinmol-510x489.jpg",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-354",
        title: "ELF BAR BC 10000 Puffs – GRAPE CHERRY – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/02/grape_cherry_sunit_b_1160x_crop_center-510x489.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-355",
        title: "ELF BAR BC 10000 Puffs – PEACH – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/elf-bar-bc10000-peach-ice-disposable-pod-vape-50mg-510x510.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-356",
        title: "ELF BAR BC 10000 Puffs – PINEAPPLE STRAWBERRY BANANA – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Elfbar_BC10000_PineappleStrawberryBanana-1-510x567.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-357",
        title: "ELF BAR BC 10000 Puffs- BLACKBERRY CRANBERRY – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/blackberrt_cranberry_sunit_b-510x489.jpg",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-358",
        title: "ELF BAR BC 10000 Puffs- BLUEBEERY MINT– 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/blueberry_mint_sunit_b_55c70428-17c2-4b4c-8a1c-13f020118f83_1160x_crop_center-510x489.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-359",
        title: "ELF BAR BC 10000 Puffs- LEMON LIME – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/lemon_lime_sunit_b-510x489.jpg",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-360",
        title: "ELF BAR BC 10000 Puffs- MINT – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/02/miami_mint_dinmol_b-510x489.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (50mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-361",
        title: "ELF BAR BC 10000 Puffs- PEACH MANGO – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/PEACHMANGO_f6a54204-739a-40c3-974a-c5723d137428_1160x_crop_center-510x489.webp",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-362",
        title: "ELF BAR BC 10000 Puffs- RED BERRY CHERRY – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/blackberrt_cranberry_sunit_b-510x489.jpg",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-363",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Berry Lemonade – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Berry-Lemonade_900x-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-364",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Blue Razz Lemonade – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Blue-Razz-Lemonade-4_900x-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-365",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Blueberry Bubblegum – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Blueberry-Bubblegum-1_900x-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-366",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Blueberry Kiwi – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Blueberry-Kiwi-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-367",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Bluesour Raspberry – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Bluesour-Respberry_900x-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-368",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Raspberry Watermelon – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Raspberry-Watermelon_900x-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-369",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Strawberry Kiwi – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Strawberry-Kiwi-14_900x-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-370",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Strawberry Pomp – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Strawberry-Promp_900x-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-371",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Strawberry Red Bull – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Strawberry-Red-Bull_900x-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-372",
        title: "FUMOT DIGITAL BOX DISPOSABLE VAPE 12K Puffs – Vimto – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2800",
        image: "https://yoyovapes.com/wp-content/uploads/2024/03/Vimto_900x-510x510.webp",
        desc: "Digital Box 12000\n\nDisposable Vape with LED Screen Indicator\n\n\n\n\nFumot Digital Box 12000 is a rechargeable disposable vape featuring an LCD display, with indicators for both oil levels and power. Conveniently, it can be charged via the Type-C port on its base.\nPre-filled with 20ml of e-liquid, it’s available in nicotine content: 5%. This vape provides up to 12,000 puffs (in a test environment) and offers a selection of 16 flavors for your enjoyment.\n\n\n\n\n\n\n\nLED Screen Indicator\n\n\n\nDigital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape.\n\n\n\n\n\n\n\n\n\n\nMesh Coil Technology (0.8Ω)\n\n\n\nWe’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape.\n\n\n\nType-C Port\n\n\n\nKeeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go.\n\n\n\n\n\n\n\n\n\n\n\n\n\n550 MAH BATTERY\n\n\n\n\n\n\n\n\n\n\nVape Device Features:\n☑ 20ML\n☑ Up to 12000 puffs\n☑ Type-C port\n☑ 6 RGB lights\n☑ 2 salt levels (5% or 2% )\n☑ 550mAh Battery (rechargeable)"
    },
    {
        id: "product-373",
        title: "VAPESOUL LCD 10000 – TRIPLE MANGO – 5% Nic – Type C Rechargeable",
        price: "1399",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/05/triple_mango_vapesoul_lcd_10000_puffs_mesh_disposable_1-510x510.webp",
        desc: "Experience the pinnacle of vaping pleasure with Triple Mango VapeSoul LCD 10000 Puffs Mesh Disposable. Immerse yourself in the luscious blend of triple mango flavor enhanced by 5% nicotine salt, providing a satisfying and smooth hit. The sleek design is complemented by an LCD display, allowing you to enjoy up to 10000 puffs of tropical indulgence. Elevate your vaping journey with this convenient and flavorful disposable device.\nTriple Mango VapeSoul LCD 10000 Puffs Mesh Disposable Features and Specifications:\n• 10000 Puffs\n• 5% Nicotine Salt\n• E-Liquid & Battery LCD Screen\n• Mesh Coil Technology"
    },
    {
        id: "product-374",
        title: "VAPESOUL LCD 10000 STRAWBERRY ICE 5% Nic Type C Rechargeable",
        price: "1399",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/05/Vapesoul-1000-X-1000_01-1000x1000-1-510x510.jpg",
        desc: "Savor the icy allure of strawberry VapeSoul LCD 10000 Puffs Mesh Disposable. Immerse yourself in the icy strawberry flavor while relishing the convenience of 10000 puffs, 5% nicotine salt, and the innovation of an LCD screen showcasing e-Liquid levels and battery life. Elevate your vaping experience with cutting-edge mesh coil technology for an enhanced, flavorful journey in every draw.\nSTRAWBERRY ICE VapeSoul LCD 10000 Puffs Mesh Disposable Features and Specifications:\n• 10000 Puffs\n• 5% Nicotine Salt\n• E-Liquid & Battery LCD Screen\n• Mesh Coil Technology"
    },
    {
        id: "product-375",
        title: "ELF BAR BC 10000 Puffs- STRAWBERRY – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/02/e-4-510x510.png",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-376",
        title: "ELF BAR BC 10000 Puffs- STRAWBERRY KIWI – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/02/e-5-510x510.png",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-377",
        title: "ELF BAR BC 10000 Puffs- WATERMELON – 2% Nic – Type C Rechargeable",
        price: "1999",
        price2: "3400",
        image: "https://yoyovapes.com/wp-content/uploads/2024/02/e-6-510x510.png",
        desc: "Welcome to the world of vaping elevated to an art form with the Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) Disposable Vape. More than just a device, it’s a reflection of your personal style. Crafted with meticulous attention to detail, its multilayer texture and nanoscale optical coatings ensure it catches the eye and holds it. With its real-time display, you’ll always be in the know about your e-liquid and battery levels, eliminating any guesswork.\nThe Elf Bar BC10000 Disposable Vape transcends mere functionality; it’s a statement of style. Crafted with a captivating multilayer texture and nanoscale optical coatings, it gleams in your grasp, elevating every puff into a display of your individual flair. Bid farewell to guesswork with its real-time display, keeping you informed of e-liquid and battery levels throughout your vape. Boasting an impressive 10,000 puffs, this disposable vape ensures enduring pleasure, complemented by its dry hit prevention feature for consistently smooth vapors. Delivering a nicotine strength of 2% (20mg), it promises gratifying draws without undue harshness. The robust 650mAh rechargeable battery empowers extended sessions, supporting up to 10,000 puffs per charge.\nExperience the perfect balance of strength and smoothness with a nicotine content of 2% (20mg). The robust 650mAh rechargeable battery ensures you can enjoy up to 10,000 puffs per charge, making it perfect for all-day use. And with its USB-C rechargeability, keeping your Elf Bar BC10000 Device (10000 Puffs ) – 2%(20 MG) powered up is a breeze.\nKey Features:\n– 10,000 Puffs\n– 20mL pre-filled e-liquid\n– 20mg Nicotine strength\n– USB-C Rechargeable\nElevate your vaping experience with the Elf Bar BC10000 Disposable Vape. Flaunt your style while enjoying enduring pleasure and smooth vapors—all in the palm of your hand."
    },
    {
        id: "product-378",
        title: "DINNER LADY FUYL 8000 PUFFS DISPOSABLE VAPE – CHERRY COTTON – 2% Nic – Type C Rechargeable",
        price: "1900",
        price2: "2199",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Fuyl-2ml-8000-ROW-Nic-20mg-Cherry-Cotton_8b63147d-97e0-478c-8f5f-47c8937a3f28_1600x-510x510.webp",
        desc: "Fuyl 8000 Disposable Vape is a stylish and portable device. It has a strong 650mAh battery that you can recharge. With this, you get a whopping 8000 puffs, so no need to charge often. It comes filled with 15ml of Dinner Lady Premium E-liquid known for its great flavors. You can quickly recharge the battery with USB-C fast charging. The best part is, you don’t need to press any buttons. Just take a puff, and it works. It also looks cool with its crystal shell. Enjoy a hassle-free, tasty, and long-lasting vaping experience with Fuyl 8000.\nFeatures\n• 650mAh Rechargeable Battery\n• 15ml Prefilled E-liquid\n• 8000 Puff Vapes\n• USB-C Fast Charging\n• Genuine Dinner Lady Premium E-liquid\n• Auto-draw\n• Crystal Shell\nFuyl 8000 Disposable Vape PACKAGE LIST\n1* Fuyl 8000 Disposable Vape"
    },
    {
        id: "product-379",
        title: "DINNER LADY FUYL 8000 PUFFS DISPOSABLE VAPE – PINEAPPLE PEACH MANGO – 2% Nic – Type C Rechargeable",
        price: "1900",
        price2: "2200",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Fuyl-2ml-8000-ROW-Nic-20mg-Pineapple-Peach-Mango_a1e9ca81-bdf9-4f78-94c8-6ee68a71a558_1600x-510x510.webp",
        desc: "Fuyl 8000 Disposable Vape is a stylish and portable device. It has a strong 650mAh battery that you can recharge. With this, you get a whopping 8000 puffs, so no need to charge often. It comes filled with 15ml of Dinner Lady Premium E-liquid known for its great flavors. You can quickly recharge the battery with USB-C fast charging. The best part is, you don’t need to press any buttons. Just take a puff, and it works. It also looks cool with its crystal shell. Enjoy a hassle-free, tasty, and long-lasting vaping experience with Fuyl 8000.\nFeatures\n• 650mAh Rechargeable Battery\n• 15ml Prefilled E-liquid\n• 8000 Puff Vapes\n• USB-C Fast Charging\n• Genuine Dinner Lady Premium E-liquid\n• Auto-draw\n• Crystal Shell\nFuyl 8000 Disposable Vape PACKAGE LIST\n1* Fuyl 8000 Disposable Vape"
    },
    {
        id: "product-380",
        title: "DINNER LADY FUYL 8000 PUFFS DISPOSABLE VAPE – STRAWBERRY DRAGON FRUIT – 2% Nic – Type C Rechargeable",
        price: "1900",
        price2: "2199",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Fuyl-2ml-8000-ROW-Nic-20mg-Strawberry-Dragon-Fruit_0a164a5c-7fe3-44a3-9d3e-d4d0f7dc68d8_1600x-510x510.webp",
        desc: "Fuyl 8000 Disposable Vape is a stylish and portable device. It has a strong 650mAh battery that you can recharge. With this, you get a whopping 8000 puffs, so no need to charge often. It comes filled with 15ml of Dinner Lady Premium E-liquid known for its great flavors. You can quickly recharge the battery with USB-C fast charging. The best part is, you don’t need to press any buttons. Just take a puff, and it works. It also looks cool with its crystal shell. Enjoy a hassle-free, tasty, and long-lasting vaping experience with Fuyl 8000.\nFeatures\n• 650mAh Rechargeable Battery\n• 15ml Prefilled E-liquid\n• 8000 Puff Vapes\n• USB-C Fast Charging\n• Genuine Dinner Lady Premium E-liquid\n• Auto-draw\n• Crystal Shell\nFuyl 8000 Disposable Vape PACKAGE LIST\n1* Fuyl 8000 Disposable Vape"
    },
    {
        id: "product-381",
        title: "ELF BAR COMBO 25000 PUFFS – APPLE AND JUICY PEACH – 5% Nic – Type C Rechargeable",
        price: "2799",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Apple_Juicy_Peach-510x510.jpg",
        desc: "The Elf Bar Combo 25000 can reach up to 25000 puffs. It’s a subversive disposable vape device that uses the most advanced design concepts and production processes to perfectly integrate the combination of triple flavors, dual modes, and dual airflow systems into one device, bringing an unprecedented experience. The flavors combo and dual airflow design are highlights of the Elf bar Combo 25000.\nThree flavors of the Combo 25000 are achieved through the combo switch. The switch is divided into three positions: on both sides and in the middle, and each position corresponds to a different flavor experience mode: 1. The combo switch is adjusted to both sides: When the user adjusts the combo switch to either side, the Combo 25000 will only provide a single flavor set on that side. This design allows users to clearly experience the purity and uniqueness of each flavor, satisfying the taste preferences at different times or in different moods; 2. The combo switch is adjusted to the middle: What is most special is that when the combo switch is adjusted to the middle position, the Combo 25000 will start its unique mixed flavor function. This function not only requires the device to have a built-in precise control system to activate the atomization system of two flavors at the same time, but also requires the perfect cooperation of the dual airflow system.\nThe Elf Bar Combo 25000 is designed to satisfy your cravings with a plethora of tantalizing Elf Bar flavors. Crafted with precision and passion, the Combo 25000 combines cutting-edge technology with an array of mouthwatering flavors, ensuring every puff is a journey of indulgence. From the moment you take your first draw, you’ll be transported to a flavor paradise, where each inhale is a symphony of taste sensations.\nElf Bar Combo 25000 Disposable Vape Details:\n\n850mah Rechargeable Battery\n22ml pre-filled e-liquid\n5% nicotine strength\nReach up to 25000 puffs\nDual airflow systems\nBattery and eliquid Screen Display\nType-C charging port\n10 flavors available\n\nTwo Models:\n\nLite model- supports 15w output power: reach up to 25000 puffs\nTurbo model- supports 35w output power: reach up to 15000 puffs."
    },
    {
        id: "product-382",
        title: "ELF BAR COMBO 25000 PUFFS – BLUE RAZZ AND SOUR LEMONADE – 5% Nic – Type C Rechargeable",
        price: "2799",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Icon_ElfBar_Combo_20000-25000.webp",
        desc: "The Elf Bar Combo 25000 can reach up to 25000 puffs. It’s a subversive disposable vape device that uses the most advanced design concepts and production processes to perfectly integrate the combination of triple flavors, dual modes, and dual airflow systems into one device, bringing an unprecedented experience. The flavors combo and dual airflow design are highlights of the Elf bar Combo 25000.\nThree flavors of the Combo 25000 are achieved through the combo switch. The switch is divided into three positions: on both sides and in the middle, and each position corresponds to a different flavor experience mode: 1. The combo switch is adjusted to both sides: When the user adjusts the combo switch to either side, the Combo 25000 will only provide a single flavor set on that side. This design allows users to clearly experience the purity and uniqueness of each flavor, satisfying the taste preferences at different times or in different moods; 2. The combo switch is adjusted to the middle: What is most special is that when the combo switch is adjusted to the middle position, the Combo 25000 will start its unique mixed flavor function. This function not only requires the device to have a built-in precise control system to activate the atomization system of two flavors at the same time, but also requires the perfect cooperation of the dual airflow system.\nThe Elf Bar Combo 25000 is designed to satisfy your cravings with a plethora of tantalizing Elf Bar flavors. Crafted with precision and passion, the Combo 25000 combines cutting-edge technology with an array of mouthwatering flavors, ensuring every puff is a journey of indulgence. From the moment you take your first draw, you’ll be transported to a flavor paradise, where each inhale is a symphony of taste sensations.\nElf Bar Combo 25000 Disposable Vape Details:\n\n850mah Rechargeable Battery\n22ml pre-filled e-liquid\n5% nicotine strength\nReach up to 25000 puffs\nDual airflow systems\nBattery and eliquid Screen Display\nType-C charging port\n10 flavors available\n\nTwo Models:\n\nLite model- supports 15w output power: reach up to 25000 puffs\nTurbo model- supports 35w output power: reach up to 15000 puffs."
    },
    {
        id: "product-383",
        title: "ELF BAR COMBO 25000 PUFFS – BLUEBERRY RASPBERRY AND BLACKBERRY – 5% Nic – Type C Rechargeable",
        price: "2799",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Blackcurrant_Raspberry_Grape_копия-510x510.jpg",
        desc: "The Elf Bar Combo 25000 can reach up to 25000 puffs. It’s a subversive disposable vape device that uses the most advanced design concepts and production processes to perfectly integrate the combination of triple flavors, dual modes, and dual airflow systems into one device, bringing an unprecedented experience. The flavors combo and dual airflow design are highlights of the Elf bar Combo 25000.\nThree flavors of the Combo 25000 are achieved through the combo switch. The switch is divided into three positions: on both sides and in the middle, and each position corresponds to a different flavor experience mode: 1. The combo switch is adjusted to both sides: When the user adjusts the combo switch to either side, the Combo 25000 will only provide a single flavor set on that side. This design allows users to clearly experience the purity and uniqueness of each flavor, satisfying the taste preferences at different times or in different moods; 2. The combo switch is adjusted to the middle: What is most special is that when the combo switch is adjusted to the middle position, the Combo 25000 will start its unique mixed flavor function. This function not only requires the device to have a built-in precise control system to activate the atomization system of two flavors at the same time, but also requires the perfect cooperation of the dual airflow system.\nThe Elf Bar Combo 25000 is designed to satisfy your cravings with a plethora of tantalizing Elf Bar flavors. Crafted with precision and passion, the Combo 25000 combines cutting-edge technology with an array of mouthwatering flavors, ensuring every puff is a journey of indulgence. From the moment you take your first draw, you’ll be transported to a flavor paradise, where each inhale is a symphony of taste sensations.\nElf Bar Combo 25000 Disposable Vape Details:\n\n850mah Rechargeable Battery\n22ml pre-filled e-liquid\n5% nicotine strength\nReach up to 25000 puffs\nDual airflow systems\nBattery and eliquid Screen Display\nType-C charging port\n10 flavors available\n\nTwo Models:\n\nLite model- supports 15w output power: reach up to 25000 puffs\nTurbo model- supports 35w output power: reach up to 15000 puffs."
    },
    {
        id: "product-384",
        title: "ELF BAR COMBO 25000 PUFFS – GRAPE AND BLACKCURRANT – 5% Nic – Type C Rechargeable",
        price: "2799",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/ElfBar_Combo_20000-25000_BlackcurrantRaspberryGrape-510x567.webp",
        desc: "The Elf Bar Combo 25000 can reach up to 25000 puffs. It’s a subversive disposable vape device that uses the most advanced design concepts and production processes to perfectly integrate the combination of triple flavors, dual modes, and dual airflow systems into one device, bringing an unprecedented experience. The flavors combo and dual airflow design are highlights of the Elf bar Combo 25000.\nThree flavors of the Combo 25000 are achieved through the combo switch. The switch is divided into three positions: on both sides and in the middle, and each position corresponds to a different flavor experience mode: 1. The combo switch is adjusted to both sides: When the user adjusts the combo switch to either side, the Combo 25000 will only provide a single flavor set on that side. This design allows users to clearly experience the purity and uniqueness of each flavor, satisfying the taste preferences at different times or in different moods; 2. The combo switch is adjusted to the middle: What is most special is that when the combo switch is adjusted to the middle position, the Combo 25000 will start its unique mixed flavor function. This function not only requires the device to have a built-in precise control system to activate the atomization system of two flavors at the same time, but also requires the perfect cooperation of the dual airflow system.\nThe Elf Bar Combo 25000 is designed to satisfy your cravings with a plethora of tantalizing Elf Bar flavors. Crafted with precision and passion, the Combo 25000 combines cutting-edge technology with an array of mouthwatering flavors, ensuring every puff is a journey of indulgence. From the moment you take your first draw, you’ll be transported to a flavor paradise, where each inhale is a symphony of taste sensations.\nElf Bar Combo 25000 Disposable Vape Details:\n\n850mah Rechargeable Battery\n22ml pre-filled e-liquid\n5% nicotine strength\nReach up to 25000 puffs\nDual airflow systems\nBattery and eliquid Screen Display\nType-C charging port\n10 flavors available\n\nTwo Models:\n\nLite model- supports 15w output power: reach up to 25000 puffs\nTurbo model- supports 35w output power: reach up to 15000 puffs."
    },
    {
        id: "product-385",
        title: "ELF BAR COMBO 25000 PUFFS – GREEN GRAPE AND GRAPE – 5% Nic – Type C Rechargeable",
        price: "2799",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/ElfBar_Combo_20000-25000_GreenGrapeGrape-510x567.webp",
        desc: "The Elf Bar Combo 25000 can reach up to 25000 puffs. It’s a subversive disposable vape device that uses the most advanced design concepts and production processes to perfectly integrate the combination of triple flavors, dual modes, and dual airflow systems into one device, bringing an unprecedented experience. The flavors combo and dual airflow design are highlights of the Elf bar Combo 25000.\nThree flavors of the Combo 25000 are achieved through the combo switch. The switch is divided into three positions: on both sides and in the middle, and each position corresponds to a different flavor experience mode: 1. The combo switch is adjusted to both sides: When the user adjusts the combo switch to either side, the Combo 25000 will only provide a single flavor set on that side. This design allows users to clearly experience the purity and uniqueness of each flavor, satisfying the taste preferences at different times or in different moods; 2. The combo switch is adjusted to the middle: What is most special is that when the combo switch is adjusted to the middle position, the Combo 25000 will start its unique mixed flavor function. This function not only requires the device to have a built-in precise control system to activate the atomization system of two flavors at the same time, but also requires the perfect cooperation of the dual airflow system.\nThe Elf Bar Combo 25000 is designed to satisfy your cravings with a plethora of tantalizing Elf Bar flavors. Crafted with precision and passion, the Combo 25000 combines cutting-edge technology with an array of mouthwatering flavors, ensuring every puff is a journey of indulgence. From the moment you take your first draw, you’ll be transported to a flavor paradise, where each inhale is a symphony of taste sensations.\nElf Bar Combo 25000 Disposable Vape Details:\n\n850mah Rechargeable Battery\n22ml pre-filled e-liquid\n5% nicotine strength\nReach up to 25000 puffs\nDual airflow systems\nBattery and eliquid Screen Display\nType-C charging port\n10 flavors available\n\nTwo Models:\n\nLite model- supports 15w output power: reach up to 25000 puffs\nTurbo model- supports 35w output power: reach up to 15000 puffs."
    },
    {
        id: "product-386",
        title: "ELF BAR COMBO 25000 PUFFS – PEACH MANGO AND WATERMELON – 5% Nic – Type C Rechargeable",
        price: "2799",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Elf_Bar_COMBO_25000_Peach_Mango_Watermelon-1-510x510.webp",
        desc: "Elf Bar COMBO 25000 – Peach Mango Watermelon introduces a refreshing blend of juicy peach, mango, and watermelon. This vibrant combination promises unforgettable experiences and allows you to savor every inhale.\nThe Elf Bar Combo 25000 can reach up to 25000 puffs. It’s a subversive disposable vape device that uses the most advanced design concepts and production processes to perfectly integrate the combination of triple flavors, dual modes, and dual airflow systems into one device, bringing an unprecedented experience. The flavors combo and dual airflow design are highlights of the Elf bar Combo 25000.\nThree flavors of the Combo 25000 are achieved through the combo switch. The switch is divided into three positions: on both sides and in the middle, and each position corresponds to a different flavor experience mode: 1. The combo switch is adjusted to both sides: When the user adjusts the combo switch to either side, the Combo 25000 will only provide a single flavor set on that side. This design allows users to clearly experience the purity and uniqueness of each flavor, satisfying the taste preferences at different times or in different moods; 2. The combo switch is adjusted to the middle: What is most special is that when the combo switch is adjusted to the middle position, the Combo 25000 will start its unique mixed flavor function. This function not only requires the device to have a built-in precise control system to activate the atomization system of two flavors at the same time, but also requires the perfect cooperation of the dual airflow system.\nThe Elf Bar Combo 25000 is designed to satisfy your cravings with a plethora of tantalizing Elf Bar flavors. Crafted with precision and passion, the Combo 25000 combines cutting-edge technology with an array of mouthwatering flavors, ensuring every puff is a journey of indulgence. From the moment you take your first draw, you’ll be transported to a flavor paradise, where each inhale is a symphony of taste sensations.\nElf Bar Combo 25000 Disposable Vape Details:\n\n850mah Rechargeable Battery\n22ml pre-filled e-liquid\n5% nicotine strength\nReach up to 25000 puffs\nDual airflow systems\nBattery and eliquid Screen Display\nType-C charging port\n10 flavors available\n\nTwo Models:\n\nLite model- supports 15w output power: reach up to 25000 puffs\nTurbo model- supports 35w output power: reach up to 15000 puffs."
    },
    {
        id: "product-387",
        title: "ELF BAR ICE KING 30000 PUFFS – BLACKBERRY CRANBERRY – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/ELF-BAR-ICE-KING-30000-PRICE-IN-DUBAI-BLACKBERRY-CRANBERRY-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-388",
        title: "ELF BAR ICE KING 30000 PUFFS – BLUE RAZZ ICE – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/ELF-BAR-ICE-KING-30000-PRICE-IN-DUBAI-BLUE-RAZZ-ICE-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-389",
        title: "ELF BAR ICE KING 30000 PUFFS – BLUEBERRY ICE – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Original-Elf-Bar-Ice-King-40000-Puffs-Combo-Planet-25000-Puff-Gh23000-V-Touch-30000-Disposable-Vape-EU-Warehouse-China-Wholesale-Factory-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-390",
        title: "ELF BAR ICE KING 30000 PUFFS – BLUEBERRY RASPBERRY WATERMELON – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Original-Elf-Bar-Ice-King-40000-Puffs-Combo-Planet-25000-Puff-Gh23000-V-Touch-30000-Disposable-Vape-EU-Warehouse-China-Wholesale-Factory-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-391",
        title: "ELF BAR ICE KING 30000 PUFFS – GRAPE ICE – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/ELF-BAR-ICE-KING-30000-PRICE-IN-DUBAI-GRAPE-ICE-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-392",
        title: "ELF BAR ICE KING 30000 PUFFS – KIWI PASSION FRUIT GUAVA – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/ELF-BAR-ICE-KING-30000-PRICE-IN-DUBAI-KIWI-PASSION-FRUIT-GUAVA-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-393",
        title: "ELF BAR ICE KING 30000 PUFFS – MIXED BERRY – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/ELF-BAR-ICE-KING-30000-PRICE-IN-DUBAI-MIXED-BERRY-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-394",
        title: "ELF BAR ICE KING 30000 PUFFS – SOURPOP – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/Original-Elf-Bar-Ice-King-40000-Puffs-Combo-Planet-25000-Puff-Gh23000-V-Touch-30000-Disposable-Vape-EU-Warehouse-China-Wholesale-Factory-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-395",
        title: "ELF BAR ICE KING 30000 PUFFS – STRAWBERRY KIWI ICE – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/ELF-BAR-ICE-KING-30000-PRICE-IN-DUBAI-STRAWBERRY-KIWI-ICE-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-396",
        title: "ELF BAR ICE KING 30000 PUFFS – STRAWBERRY WATERMELON – 5% Nic – Type C Rechargeable",
        price: "3000",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/12/ELF-BAR-ICE-KING-30000-PRICE-IN-DUBAI-STRAWBERRY-WATERMELON-510x510.webp",
        desc: "ELFBAR ICE KING 30K – DISPOSABLE POD\nDiscover the Elfbar Ice King 30K,  with 5 adjustable levels to customize the intensity of the refreshing sensation,  an unmatched choice for those looking for a long-lasting and highly adjustable vape device. With a capacity of up to 30,000 puffs and 20 ml of e-liquid, this vape guarantees a prolonged and high-quality experience. Equipped with adjustable levels of freshness, you can customize each pull, bringing more intensity and satisfaction to your favorite flavor.\nHOW IT WORKS\nThe disposable pod is a product that comes ready for immediate use, it already comes with the liquid and battery. Its duration is determined by the number of puffs/puffs, in this case up to a maximum of 30,000 puffs. This model supports battery refills. After the liquid is used up, the product must be disposed of correctly (recyclable waste).\n\nELFBAR ICE KING\n30000💨\nADJUSTABLE COOLNESS⭐\nADJUSTABLE POWER& AIRFLOW⭐\n5 LEVEL ADJUSTABLE COOLNESS⭐"
    },
    {
        id: "product-397",
        title: "ELF BAR RAYA D3 25K PUFFS – BLUE RAZZ ICE – 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/O3HeDhKYkAtyw8eqU-5-510x502.jpg",
        desc: "Elf Bar Raya D3 disposable vape, boasting 25K puffs and a rechargeable design. Its integrated air and pressure adjustment system offers a customized vape. The sleek design features a digital tube side screen and a striking blue outer ring light, setting new aesthetic standards.\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Specifications:\n\nBrand: Elf Bar\nModel: Raya D3\nNicotine: 5% (50mg)\nInternal rechargeable battery: 850mAh (micro USB-C cable not included)\nType C – Rechargeable\nPuffs: 25,000 Puffs\n\n\n\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Includes:\n\n\n\n1x ELF Bar Raya D3 Disposable Pod Device (25K Puffs)"
    },
    {
        id: "product-398",
        title: "ELF BAR RAYA D3 25K PUFFS – GRAPE CHERRY – 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/photo_2024-07-22_22.23.54-510x510.jpeg",
        desc: "Elf Bar Raya D3 disposable vape, boasting 25K puffs and a rechargeable design. Its integrated air and pressure adjustment system offers a customized vape. The sleek design features a digital tube side screen and a striking blue outer ring light, setting new aesthetic standards.\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Specifications:\n\nBrand: Elf Bar\nModel: Raya D3\nNicotine: 5% (50mg)\nInternal rechargeable battery: 850mAh (micro USB-C cable not included)\nType C – Rechargeable\nPuffs: 25,000 Puffs\n\n\n\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Includes:\n\n\n\n1x ELF Bar Raya D3 Disposable Pod Device (25K Puffs)"
    },
    {
        id: "product-399",
        title: "ELF BAR RAYA D3 25K PUFFS – GRAPE ICE – 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/images-7.jpg",
        desc: "Elf Bar Raya D3 disposable vape, boasting 25K puffs and a rechargeable design. Its integrated air and pressure adjustment system offers a customized vape. The sleek design features a digital tube side screen and a striking blue outer ring light, setting new aesthetic standards.\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Specifications:\n\nBrand: Elf Bar\nModel: Raya D3\nNicotine: 5% (50mg)\nInternal rechargeable battery: 850mAh (micro USB-C cable not included)\nType C – Rechargeable\nPuffs: 25,000 Puffs\n\n\n\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Includes:\n\n\n\n1x ELF Bar Raya D3 Disposable Pod Device (25K Puffs)"
    },
    {
        id: "product-400",
        title: "ELF BAR RAYA D3 25K PUFFS – KIWI PASSION FRUIT GUAVA – 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/photo_2024-07-22_22.23.56-510x510.jpg",
        desc: "Elf Bar Raya D3 disposable vape, boasting 25K puffs and a rechargeable design. Its integrated air and pressure adjustment system offers a customized vape. The sleek design features a digital tube side screen and a striking blue outer ring light, setting new aesthetic standards.\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Specifications:\n\nBrand: Elf Bar\nModel: Raya D3\nNicotine: 5% (50mg)\nInternal rechargeable battery: 850mAh (micro USB-C cable not included)\nType C – Rechargeable\nPuffs: 25,000 Puffs\n\n\n\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Includes:\n\n\n\n1x ELF Bar Raya D3 Disposable Pod Device (25K Puffs)"
    },
    {
        id: "product-401",
        title: "ELF BAR RAYA D3 25K PUFFS – PEACH ICE – 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/photo_2024-07-22_22.24.05-510x510.jpeg",
        desc: "Elf Bar Raya D3 disposable vape, boasting 25K puffs and a rechargeable design. Its integrated air and pressure adjustment system offers a customized vape. The sleek design features a digital tube side screen and a striking blue outer ring light, setting new aesthetic standards.\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Specifications:\n\nBrand: Elf Bar\nModel: Raya D3\nNicotine: 5% (50mg)\nInternal rechargeable battery: 850mAh (micro USB-C cable not included)\nType C – Rechargeable\nPuffs: 25,000 Puffs\n\n\n\nELF Bar Raya D3 Disposable Pod Device (25K Puffs) Includes:\n\n\n\n1x ELF Bar Raya D3 Disposable Pod Device (25K Puffs)"
    },
    {
        id: "product-402",
        title: "ELF WORLD G20000 – BLOW POP – 5% Nic – Type C Rechargeable",
        price: "1999",
        price2: "2399",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/blow-pop-g20000-510x510.jpg",
        desc: "ELFWORLD G20000 Disposable Kit INTRODUCTION\nELFWORLD G20000 Disposable Vape is a long-lasting disposable kit pre-loaded with 22ml e-juice and can produce 20000 puffs at most under the Normal Mode. ELFWORLD G20000 is fancy and fashionable. It is equipped with a large full-view display, showing you battery status, e-juice level and the current vaping mode. G20000 supports three vaping modes, including Close, Normal and Plus+. It is more responsible to use a vape with a child lock and the Plus+ Mode boosts the flavors and vapor production. G20000 is an excellent disposable vape with about 20000 puffs.\nFeatures\n• Rechargeable Internal 650mAh Battery\n• Three Vaping Modes: Close (Childproof)/Normal (20000 Puffs)/Plus+ (10000 Puffs)\n• Pre-Filled 22ml E-Juice\n• 5%(50mg) Nicotine Strength\n• Full-view Digital Display Screen\n• USB Type-C Charging (Not Included)\n• Draw-Activated\n• Rapid Type-C Recharging\n• MTL Vaping\nELFWORLD G20000 Disposable Pod Kit PACKAGE LIST\n1 x ELFWORLD G20000"
    },
    {
        id: "product-403",
        title: "ELF WORLD G20000 – BLUE RAZZ ICE – 5% Nic – Type C Rechargeable",
        price: "1999",
        price2: "2399",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/blue-razz-ice-g20000-510x510.jpg",
        desc: "ELFWORLD G20000 Disposable Kit INTRODUCTION\nELFWORLD G20000 Disposable Vape is a long-lasting disposable kit pre-loaded with 22ml e-juice and can produce 20000 puffs at most under the Normal Mode. ELFWORLD G20000 is fancy and fashionable. It is equipped with a large full-view display, showing you battery status, e-juice level and the current vaping mode. G20000 supports three vaping modes, including Close, Normal and Plus+. It is more responsible to use a vape with a child lock and the Plus+ Mode boosts the flavors and vapor production. G20000 is an excellent disposable vape with about 20000 puffs.\nFeatures\n• Rechargeable Internal 650mAh Battery\n• Three Vaping Modes: Close (Childproof)/Normal (20000 Puffs)/Plus+ (10000 Puffs)\n• Pre-Filled 22ml E-Juice\n• 5%(50mg) Nicotine Strength\n• Full-view Digital Display Screen\n• USB Type-C Charging (Not Included)\n• Draw-Activated\n• Rapid Type-C Recharging\n• MTL Vaping\nELFWORLD G20000 Disposable Pod Kit PACKAGE LIST\n1 x ELFWORLD G20000"
    },
    {
        id: "product-404",
        title: "ELF WORLD G20000 – JUICY PEACH ICE – 5% Nic – Type C Rechargeable",
        price: "1999",
        price2: "2399",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/juicy-peach-ice-elfworld-g20000-510x510.jpg",
        desc: "ELFWORLD G20000 Disposable Kit INTRODUCTION\nELFWORLD G20000 Disposable Vape is a long-lasting disposable kit pre-loaded with 22ml e-juice and can produce 20000 puffs at most under the Normal Mode. ELFWORLD G20000 is fancy and fashionable. It is equipped with a large full-view display, showing you battery status, e-juice level and the current vaping mode. G20000 supports three vaping modes, including Close, Normal and Plus+. It is more responsible to use a vape with a child lock and the Plus+ Mode boosts the flavors and vapor production. G20000 is an excellent disposable vape with about 20000 puffs.\nFeatures\n• Rechargeable Internal 650mAh Battery\n• Three Vaping Modes: Close (Childproof)/Normal (20000 Puffs)/Plus+ (10000 Puffs)\n• Pre-Filled 22ml E-Juice\n• 5%(50mg) Nicotine Strength\n• Full-view Digital Display Screen\n• USB Type-C Charging (Not Included)\n• Draw-Activated\n• Rapid Type-C Recharging\n• MTL Vaping\nELFWORLD G20000 Disposable Pod Kit PACKAGE LIST\n1 x ELFWORLD G20000"
    },
    {
        id: "product-405",
        title: "ELF WORLD G20000 – META MOON – 5% Nic – Type C Rechargeable",
        price: "1999",
        price2: "2399",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/meta-moon-elfworld-g20000-510x510.jpg",
        desc: "ELFWORLD G20000 Disposable Kit INTRODUCTION\nELFWORLD G20000 Disposable Vape is a long-lasting disposable kit pre-loaded with 22ml e-juice and can produce 20000 puffs at most under the Normal Mode. ELFWORLD G20000 is fancy and fashionable. It is equipped with a large full-view display, showing you battery status, e-juice level and the current vaping mode. G20000 supports three vaping modes, including Close, Normal and Plus+. It is more responsible to use a vape with a child lock and the Plus+ Mode boosts the flavors and vapor production. G20000 is an excellent disposable vape with about 20000 puffs.\nFeatures\n• Rechargeable Internal 650mAh Battery\n• Three Vaping Modes: Close (Childproof)/Normal (20000 Puffs)/Plus+ (10000 Puffs)\n• Pre-Filled 22ml E-Juice\n• 5%(50mg) Nicotine Strength\n• Full-view Digital Display Screen\n• USB Type-C Charging (Not Included)\n• Draw-Activated\n• Rapid Type-C Recharging\n• MTL Vaping\nELFWORLD G20000 Disposable Pod Kit PACKAGE LIST\n1 x ELFWORLD G20000"
    },
    {
        id: "product-406",
        title: "ELF WORLD G20000 – PINK LEMONADE – 5% Nic – Type C Rechargeable",
        price: "1999",
        price2: "2399",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/pink-lemonade-g20000-510x510.jpg",
        desc: "ELFWORLD G20000 Disposable Kit INTRODUCTION\nELFWORLD G20000 Disposable Vape is a long-lasting disposable kit pre-loaded with 22ml e-juice and can produce 20000 puffs at most under the Normal Mode. ELFWORLD G20000 is fancy and fashionable. It is equipped with a large full-view display, showing you battery status, e-juice level and the current vaping mode. G20000 supports three vaping modes, including Close, Normal and Plus+. It is more responsible to use a vape with a child lock and the Plus+ Mode boosts the flavors and vapor production. G20000 is an excellent disposable vape with about 20000 puffs.\nFeatures\n• Rechargeable Internal 650mAh Battery\n• Three Vaping Modes: Close (Childproof)/Normal (20000 Puffs)/Plus+ (10000 Puffs)\n• Pre-Filled 22ml E-Juice\n• 5%(50mg) Nicotine Strength\n• Full-view Digital Display Screen\n• USB Type-C Charging (Not Included)\n• Draw-Activated\n• Rapid Type-C Recharging\n• MTL Vaping\nELFWORLD G20000 Disposable Pod Kit PACKAGE LIST\n1 x ELFWORLD G20000"
    },
    {
        id: "product-407",
        title: "ELF WORLD G20000 – SOUR APPLE ICE – 5% Nic – Type C Rechargeable",
        price: "1999",
        price2: "2399",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/sour-apple-ice-g20000-510x510.jpg",
        desc: "ELFWORLD G20000 Disposable Kit INTRODUCTION\nELFWORLD G20000 Disposable Vape is a long-lasting disposable kit pre-loaded with 22ml e-juice and can produce 20000 puffs at most under the Normal Mode. ELFWORLD G20000 is fancy and fashionable. It is equipped with a large full-view display, showing you battery status, e-juice level and the current vaping mode. G20000 supports three vaping modes, including Close, Normal and Plus+. It is more responsible to use a vape with a child lock and the Plus+ Mode boosts the flavors and vapor production. G20000 is an excellent disposable vape with about 20000 puffs.\nFeatures\n• Rechargeable Internal 650mAh Battery\n• Three Vaping Modes: Close (Childproof)/Normal (20000 Puffs)/Plus+ (10000 Puffs)\n• Pre-Filled 22ml E-Juice\n• 5%(50mg) Nicotine Strength\n• Full-view Digital Display Screen\n• USB Type-C Charging (Not Included)\n• Draw-Activated\n• Rapid Type-C Recharging\n• MTL Vaping\nELFWORLD G20000 Disposable Pod Kit PACKAGE LIST\n1 x ELFWORLD G20000"
    },
    {
        id: "product-408",
        title: "ELF WORLD G20000 – TROPICAL RAINBOW BLAST – 5% Nic – Type C Rechargeable",
        price: "1999",
        price2: "2399",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/tropical-rainbow-blast-elfworld-g20000-510x510.jpg",
        desc: "ELFWORLD G20000 Disposable Kit INTRODUCTION\nELFWORLD G20000 Disposable Vape is a long-lasting disposable kit pre-loaded with 22ml e-juice and can produce 20000 puffs at most under the Normal Mode. ELFWORLD G20000 is fancy and fashionable. It is equipped with a large full-view display, showing you battery status, e-juice level and the current vaping mode. G20000 supports three vaping modes, including Close, Normal and Plus+. It is more responsible to use a vape with a child lock and the Plus+ Mode boosts the flavors and vapor production. G20000 is an excellent disposable vape with about 20000 puffs.\nFeatures\n• Rechargeable Internal 650mAh Battery\n• Three Vaping Modes: Close (Childproof)/Normal (20000 Puffs)/Plus+ (10000 Puffs)\n• Pre-Filled 22ml E-Juice\n• 5%(50mg) Nicotine Strength\n• Full-view Digital Display Screen\n• USB Type-C Charging (Not Included)\n• Draw-Activated\n• Rapid Type-C Recharging\n• MTL Vaping\nELFWORLD G20000 Disposable Pod Kit PACKAGE LIST\n1 x ELFWORLD G20000"
    },
    {
        id: "product-409",
        title: "ELF WORLD G20000 – WATERMELON ICE – 5% Nic – Type C Rechargeable",
        price: "1999",
        price2: "2399",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/watermelon-ice-g20000-510x510.jpg",
        desc: "ELFWORLD G20000 Disposable Kit INTRODUCTION\nELFWORLD G20000 Disposable Vape is a long-lasting disposable kit pre-loaded with 22ml e-juice and can produce 20000 puffs at most under the Normal Mode. ELFWORLD G20000 is fancy and fashionable. It is equipped with a large full-view display, showing you battery status, e-juice level and the current vaping mode. G20000 supports three vaping modes, including Close, Normal and Plus+. It is more responsible to use a vape with a child lock and the Plus+ Mode boosts the flavors and vapor production. G20000 is an excellent disposable vape with about 20000 puffs.\nFeatures\n• Rechargeable Internal 650mAh Battery\n• Three Vaping Modes: Close (Childproof)/Normal (20000 Puffs)/Plus+ (10000 Puffs)\n• Pre-Filled 22ml E-Juice\n• 5%(50mg) Nicotine Strength\n• Full-view Digital Display Screen\n• USB Type-C Charging (Not Included)\n• Draw-Activated\n• Rapid Type-C Recharging\n• MTL Vaping\nELFWORLD G20000 Disposable Pod Kit PACKAGE LIST\n1 x ELFWORLD G20000"
    },
    {
        id: "product-410",
        title: "ELF WORLD G20000 – WHITE GUMMY ICE – 5% Nic – Type C Rechargeable",
        price: "1999",
        price2: "2399",
        image: "https://yoyovapes.com/wp-content/uploads/2024/08/white-gummy-ice-g20000-510x510.jpg",
        desc: "ELFWORLD G20000 Disposable Kit INTRODUCTION\nELFWORLD G20000 Disposable Vape is a long-lasting disposable kit pre-loaded with 22ml e-juice and can produce 20000 puffs at most under the Normal Mode. ELFWORLD G20000 is fancy and fashionable. It is equipped with a large full-view display, showing you battery status, e-juice level and the current vaping mode. G20000 supports three vaping modes, including Close, Normal and Plus+. It is more responsible to use a vape with a child lock and the Plus+ Mode boosts the flavors and vapor production. G20000 is an excellent disposable vape with about 20000 puffs.\nFeatures\n• Rechargeable Internal 650mAh Battery\n• Three Vaping Modes: Close (Childproof)/Normal (20000 Puffs)/Plus+ (10000 Puffs)\n• Pre-Filled 22ml E-Juice\n• 5%(50mg) Nicotine Strength\n• Full-view Digital Display Screen\n• USB Type-C Charging (Not Included)\n• Draw-Activated\n• Rapid Type-C Recharging\n• MTL Vaping\nELFWORLD G20000 Disposable Pod Kit PACKAGE LIST\n1 x ELFWORLD G20000"
    },
    {
        id: "product-411",
        title: "ELF BAR RAYA D2 20000 Puffs- BLUEBERRY ICE – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/elfbarr-raya-d2-20000-puff-sigara-blueberry_ice-aroma-510x510.jpg",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-412",
        title: "ELF BAR RAYA D2 20000 Puffs- BLUEBERRY RASPBERRY – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/elfbarr-raya-d2-20000-puff-sigara-blueberry_raspberry-aroma-510x510.jpg",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-413",
        title: "ELF BAR RAYA D2 20000 Puffs- DOUBLE APPLE – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/elfbarr-raya-d2-20000-puff-sigara-double_apple-aroma-510x510.jpg",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-414",
        title: "ELF BAR RAYA D2 20000 Puffs- GRAPE ICE – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/elfbarr-raya-d2-20000-puff-sigara-grape-ice-aroma-510x510.jpg",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-415",
        title: "ELF BAR RAYA D2 20000 Puffs – VMT – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/images-12.jpg",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-416",
        title: "ELF BAR RAYA D2 20000 Puffs- KIWI PASSIONFRUIT GUAVA – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/elektronnaya-sigareta-elf-bar-raya-d2-20000-kiwi-passion-fruit-guava-kivi-marakuyya-guava-510x510.webp",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-417",
        title: "ELF BAR RAYA D2 20000 Puffs- MANGO PEACH WATERMELON – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Y3NBdH0A5wltHaqP7niS4Eo6AOpPTLydJxOwNykD-1000x1000-1-510x510.webp",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-418",
        title: "ELF BAR RAYA D2 20000 Puffs- PEACH BERRY – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/elfbarr-raya-d2-20000-puff-sigara-peach_berry-aroma-1-510x510.jpg",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-419",
        title: "ELF BAR RAYA D2 20000 Puffs- PEACH ICE – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/elfbarr-raya-d2-20000-puff-sigara-sefatli-peach-ice-aroma-510x510.jpg",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-420",
        title: "ELF BAR RAYA D2 20000 Puffs- WATERMELON BUBBLEGUM – 5% Nic – Type C Rechargeable",
        price: "2199",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/elfbarr-raya-d2-20000-puff-sigara-watermelon_bubble_gum-aroma-510x510.jpg",
        desc: "ELFBAR RAYA D2 (20,000 Puffs) Disposable Vape with Dynamic Screen and Adjustable Power & Airflow\n\nThe ELFBAR RAYA D2 isn’t just a vape device; it’s an engineering marvel designed to exceed expectations. With an impressive puff count of 20000 in Smooth Mode and 14000 in Turbo Mode, this device ensures prolonged enjoyment without the hassle of frequent refills or recharges. Whether you’re a seasoned vaper or new to the world of vaping, the ELFBAR RAYA D2 caters to your needs and preferences.\nNavigating the ELFBAR RAYA D2 is effortless, thanks to its flat screen with a colorful UI. Whether you’re adjusting settings, monitoring battery life, or selecting your favorite flavor, the intuitive interface makes it easy to customize your vaping experience to perfection. With just a few taps, unlock a world of flavor possibilities and vaping enjoyment.\nThe ELFBAR RAYA D2 is the best vape by ELFBAR in India. It is a small, new design that is an amazing improvement on the old vape pen / smoke puffs. ELFBAR RAYA D2 (20000 Puffs) is made with an easy-to-use mouthpiece, and it has an amazing battery life. The Elf bar 20000 is a chargeable vape. The battery life can last a week on a half charge. This vape is compatible with e-liquid, so it’s the perfect product for any user. The design of the ELFBAR 20000 vape is also perfect for stealth vaping. It’s sleek and lightweight, so it’s perfect for portability. This product is made from a durable and high-quality material, so it can withstand being dropped. Also, it has Dynamic Screen with adjustable Power & Airflow.\nProduct Highlights:\n\n20,000 puffs\nDynamic Screen\nAdjustable Power & Airflow\nDual Mesh Coil\nLong Lasting Flavour & Taste\n50mg salt nicotine content (5%)\nType-C charging port\nConstant voltage from the first to last puff to ensure a smooth and consistent taste throughout\nSlim body design, comfortable mouthpiece, lightweight and pocket-friendly\nWrapped in vacuum sealed packaging for freshness.\nComes with security sticker to verify authenticity"
    },
    {
        id: "product-421",
        title: "NASTY BAR X 14K PUFFS – BLACKBERRY ICE 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Blackberry-Ice-1-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-422",
        title: "NASTY BAR X 14K PUFFS – BLACKCURRANT BERRIES 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Blackcurrant-Berries-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-423",
        title: "NASTY BAR X 14K PUFFS – BLUE RAZZ ICE 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Blue-Razz-Ice-2-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-424",
        title: "NASTY BAR X 14K PUFFS – CHERRY PEACH RASPBERRY 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Cherry-Peach-Raspberry-1-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-425",
        title: "NASTY BAR X 14K PUFFS – CRANBERRY GRAPE 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Cranberry-Grape-3-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-426",
        title: "NASTY BAR X 14K PUFFS – DOUBLE WATERMELON 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Double-Watermelon-2-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-427",
        title: "NASTY BAR X 14K PUFFS – MENTHOL 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Menthol-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-428",
        title: "NASTY BAR X 14K PUFFS – PEACH ICE 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Peach-Ice-5-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-429",
        title: "NASTY BAR X 14K PUFFS – PINEAPPLE ICE 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Pineapple-Ice-4-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-430",
        title: "NASTY BAR X 14K PUFFS – RASPBERRY WATERMELON 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Raspberry-Watermelon-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-431",
        title: "NASTY BAR X 14K PUFFS – SOUR APPLE ICE 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Sour-Apple-Ice-2-860x860-1-510x510.webp",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-432",
        title: "NASTY BAR X 14K PUFFS – STRAWBERRY MELON 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Strawberry-Melon-2-860x860-1-510x510.png",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-433",
        title: "NASTY BAR X 14K PUFFS – STRAWBERRY WATERMELON 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/11/Strawberry-Melon-2-860x860-1-510x510.png",
        desc: "Meet the Nasty X 14K Strong – the reusable vaping device that pushes the boundaries of performance. Designed to deliver an unmatched vaping experience, the Nasty X 14K Strong combines advanced features with cutting-edge technology for maximum satisfaction for discerning vapers.\nNasty X 14K Strong Features:\n\nX-NIC Nicotine Salt Formula : The secret ingredient in Nasty X 14K Strong, X-NIC formula delivers a fast and intense nicotine hit. This technology allows for faster nicotine absorption for instant satisfaction with every puff.\nDynamic Modes : Enjoy complete control with the Dynamic Mode Control system. Choose between single or dual mesh coil configurations to tailor vapor production to your personal preferences. Whether you’re looking for a strong hit or a smoother experience, the Nasty X 14K Strong adapts to your needs.\nAirflow Control : Easily adjust airflow to customize every puff to your preferred vaping style. Airflow control allows you to switch between an airy vape and a more restricted vape to maximize vapor production or flavor concentration.\n680mAh Rechargeable Battery : Equipped with a long-lasting battery, the Nasty X 14K Strong allows you to vape all day long without worrying about frequent recharging. Its power ensures dense and constant vapor, even when the battery level decreases.\nSmart Display : Stay informed with the digital smart screen , an intuitive display that clearly shows the fluid level and battery status. You will no longer be caught off guard, because this screen ensures precise monitoring in real time.\n\nBenefits of Nasty X 14K Strong:\n\nOptimized Performance : Thanks to the synergy between the high-performance battery and the X-NIC formula , you benefit from consistency in flavor and nicotine hit until the last drop. No more compromise on quality at the end of use.\nEase of Use : Unlike other more complex systems, the Nasty X 14K Strong is intuitive and simple to use. Whether you are a beginner or an expert in vaping, this device offers smooth, hassle-free use.\nPortability : Compact and lightweight, the Nasty X 14K Strong is ideal for use on the go. Slip it into your pocket or bag and vape wherever you are, without the hassle.\nVersatility : Thanks to its multiple customization options (airflow control, choice of coils, etc.), it is suitable for all vaper profiles, whether you prefer dense vapor or a more subtle nicotine hit.\n\nWhy Choose Nasty X 14K Strong?\nThe Nasty X 14K Strong stands out for its ability to deliver a tailor-made vape thanks to its sophisticated design and advanced features. Its Dynamic Mode Control with mesh coil options ensures that every vaping session is tailored to your desires. In addition, the exclusive X-NIC formula optimizes the nicotine hit, ensuring a strong experience in flavor and satisfaction.\nWhether you’re looking for a powerful nicotine hit or abundant vapor production, the Nasty X 14K Strong is the perfect device for you. With its adjustable airflow, long-lasting battery, and smart display, you have all the tools you need to control and optimize your vape according to your preferences.\nOptimize Your Vaping Experience Now!\nDive into a new dimension of vaping with the Nasty X 14K Strong . Available today, this device combines advanced technology with a simplified user experience, so you can enjoy every puff. Order the Nasty X 14K Strong and feel the difference today."
    },
    {
        id: "product-434",
        title: "NASTY BAR XL 20000 SLOW BLOW (Pineapple Lemonade) 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/05/combined_nasty20k-1-510x510.webp",
        desc: "Slow Blow: A menthol flavor with pineapples and zesty lemons.\nPresenting the all-new Nasty Bar XL DR20Ki Disposable Vape featuring world’s first dynamic 3-mode control system and an animated motion screen creating a vivid animations with every draw.\nChoose the flavor you love most from the Nasty Bar XL disposable and elevate your vaping sense!\nSPECIFICATIONS:\n\nE-liquid Capacity: 17ml Pre-filled\nNicotine Strength: 5% or 50mg\nPuffs: Eco: 20K, Normal: 15K, Turbo: 10K\nDynamic 3-mode control system\nRechargeable"
    },
    {
        id: "product-435",
        title: "NASTY BAR XL 20000 STRAWBERRY KIWI 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/05/combined_nasty20k-1-510x510.webp",
        desc: "Presenting the all-new Nasty Bar XL DR20Ki Disposable Vape featuring world’s first dynamic 3-mode control system and an animated motion screen creating a vivid animations with every draw.\nChoose the flavor you love most from the Nasty Bar XL disposable and elevate your vaping sense!\nSPECIFICATIONS:\n\nE-liquid Capacity: 17ml Pre-filled\nNicotine Strength: 5% or 50mg\nPuffs: Eco: 20K, Normal: 15K, Turbo: 10K\nDynamic 3-mode control system\nRechargeable"
    },
    {
        id: "product-436",
        title: "NASTY BAR XL 20000 STRAWBERRY PEAR COOLER 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/05/combined_nasty20k-1-510x510.webp",
        desc: "Strawberry Pear Cooler: It combines fresh strawberries, and the juicy taste of pear, with an icy menthol kick.\nPresenting the all-new Nasty Bar XL DR20Ki Disposable Vape featuring world’s first dynamic 3-mode control system and an animated motion screen creating a vivid animations with every draw.\nChoose the flavor you love most from the Nasty Bar XL disposable and elevate your vaping sense!\nSPECIFICATIONS:\n\nE-liquid Capacity: 17ml Pre-filled\nNicotine Strength: 5% or 50mg\nPuffs: Eco: 20K, Normal: 15K, Turbo: 10K\nDynamic 3-mode control system\nRechargeable"
    },
    {
        id: "product-437",
        title: "NASTY BAR XL 20000 TANGY APPLE SPLASH 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/05/combined_nasty20k-1-510x510.webp",
        desc: "Tangy Apple Splash: A flavor of crispy green apples, and red apples.\nPresenting the all-new Nasty Bar XL DR20Ki Disposable Vape featuring world’s first dynamic 3-mode control system and an animated motion screen creating a vivid animations with every draw.\nChoose the flavor you love most from the Nasty Bar XL disposable and elevate your vaping sense!\nSPECIFICATIONS:\n\nE-liquid Capacity: 17ml Pre-filled\nNicotine Strength: 5% or 50mg\nPuffs: Eco: 20K, Normal: 15K, Turbo: 10K\nDynamic 3-mode control system\nRechargeable"
    },
    {
        id: "product-438",
        title: "NASTY BAR XL 20000 TROPICAL CHERRY 5% Nic – Type C Rechargeable",
        price: "2500",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2024/05/combined_nasty20k-1-510x510.webp",
        desc: "Tropical Cherry: A tropical blend of blueberries, juicy cherries, and fresh pineapples.\nPresenting the all-new Nasty Bar XL DR20Ki Disposable Vape featuring world’s first dynamic 3-mode control system and an animated motion screen creating a vivid animations with every draw.\nChoose the flavor you love most from the Nasty Bar XL disposable and elevate your vaping sense!\nSPECIFICATIONS:\n\nE-liquid Capacity: 17ml Pre-filled\nNicotine Strength: 5% or 50mg\nPuffs: Eco: 20K, Normal: 15K, Turbo: 10K\nDynamic 3-mode control system\nRechargeable"
    },
    {
        id: "product-439",
        title: "ONTO TEMPO 15000 PUFFS – BLUEBERRY ICE – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2199",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/ONTO_Tempo_15000_Puffs_blueberry_ice-510x510.webp",
        desc: "Introducing the ONTO Tempo 15000 Puffs, a disposable vape device that redefines convenience and performance in the vaping industry. The ONTO Tempo guarantees extended enjoyment without the need for refills or maintenance, thanks to its remarkable puff count of up to 15000 puffs per device. Designed for vapers who seek simplicity and portability, this sleek device offers a wide range of flavor options to suit every palate. The ONTO Tempo promises a delightful experience with its compact design, long-lasting battery, and rich, satisfying vapor. Say goodbye to cumbersome vape pens and mods – the ONTO Tempo 15000 Puffs is here to elevate your vaping journey to new heights.\nFeatures of ONTO Tempo 15000 Puffs\nDouble Mesh Coil\nThe double mesh coil integrated into the ONTO Tempo 15000 Puffs represents a significant leap forward in vaping technology. This advanced coil design utilizes two layers of mesh material to amplify both flavor and vapor production, resulting in an unparalleled vaping experience. By increasing the surface area in contact with the e-liquid, the double mesh coil ensures rapid and efficient heating, translating into rich, full-bodied flavors with every puff. Moreover, the enhanced airflow design of the coil promotes smoother draws, allowing users to savor the full complexity of their chosen e-liquids. Whether you’re a flavor enthusiast or a cloud chaser, it promises a remarkable journey into the world of vaping, elevating your enjoyment to new heights.\n5% Nicotine Strength\nThe ONTO Tempo 15000 Puffs boasts a nicotine strength of 5%, providing users with a satisfying vaping experience. This nicotine concentration strikes a perfect balance, delivering a smooth throat hit without overwhelming the senses. The 5% nicotine strength of the ONTO Tempo 15000 Puffs ensures that each puff is both satisfying and enjoyable. At this ideal nicotine concentration, individuals have the flexibility to tailor their vaping encounters to align with their desires, whether they seek a gentle buzz or a stronger, more refreshing sensation. Say goodbye to cravings and hello to smooth, flavorful vapor with the ONTO Tempo 15000 Puffs.\n20 ml E-Liquid Capacity\nThe ONTO Tempo 15000 Puffs is outfitted with an abundant reservoir of 20ml e-liquid, guaranteeing uninterrupted vaping enjoyment and eliminating the need for frequent refills. This ample reservoir of e-liquid allows users to enjoy their favorite flavors for an extended period, minimizing interruptions to their vaping experience. Whether you prefer fruity blends, classic tobacco flavors, or indulgent desserts, the 20ml e-liquid capacity of the ONTO 15000 Puffs ensures that you have an abundant supply of your chosen e-liquid at your fingertips. Say goodbye to constantly monitoring e-liquid levels and hello to uninterrupted vaping pleasure with the ONTO 15000 and its ample 20ml e-liquid capacity.\nFlavor Options\nThe ONTO Tempo 15000 Puffs provides an enticing array of flavor options, ensuring a delightful vaping experience for every palate. From refreshing fruit blends to classic tobacco flavors and indulgent desserts, there’s something to suit every taste preference. Every inhalation offers an explosion of taste, enticing the senses and leaving you yearning for another puff. With such a diverse selection of flavors to choose from, vapers can explore new tastes and find their perfect match. Say hello to a world of flavor possibilities with the ONTO Tempo 15000 Puffs, where every puff is a flavorful adventure. The Flavors are Gum Mint |Lush Ice | Grape Ice | Mixed Berries | Blueberry Ice | Strawberry Kiwi | Strawberry Mango | Kiwi Passionfruit | Mango Passionfruit | Strawberry Watermelon\nParameters\n\nBrand: ONTO\nMaterial: PC+ALU\nFull-Screen Display\nNicotine Strength: 5%\nCharging Port: Type-C\nE-juice Capacity: 20ml\nPuffs: Up to 15000 Puffs\nCoil Type: Double mesh coil\nDifferent Output Mode: \n\n\nPulse mode 17.5w.\nregular mode 10.5w."
    },
    {
        id: "product-440",
        title: "ONTO TEMPO 15000 PUFFS – KIWI PASSION FRUIT – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2199",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/ONTO_Tempo_15000_Puffs_kiwi_passionfruit-510x510.webp",
        desc: "Introducing the ONTO Tempo 15000 Puffs, a disposable vape device that redefines convenience and performance in the vaping industry. The ONTO Tempo guarantees extended enjoyment without the need for refills or maintenance, thanks to its remarkable puff count of up to 15000 puffs per device. Designed for vapers who seek simplicity and portability, this sleek device offers a wide range of flavor options to suit every palate. The ONTO Tempo promises a delightful experience with its compact design, long-lasting battery, and rich, satisfying vapor. Say goodbye to cumbersome vape pens and mods – the ONTO Tempo 15000 Puffs is here to elevate your vaping journey to new heights.\nFeatures of ONTO Tempo 15000 Puffs\nDouble Mesh Coil\nThe double mesh coil integrated into the ONTO Tempo 15000 Puffs represents a significant leap forward in vaping technology. This advanced coil design utilizes two layers of mesh material to amplify both flavor and vapor production, resulting in an unparalleled vaping experience. By increasing the surface area in contact with the e-liquid, the double mesh coil ensures rapid and efficient heating, translating into rich, full-bodied flavors with every puff. Moreover, the enhanced airflow design of the coil promotes smoother draws, allowing users to savor the full complexity of their chosen e-liquids. Whether you’re a flavor enthusiast or a cloud chaser, it promises a remarkable journey into the world of vaping, elevating your enjoyment to new heights.\n5% Nicotine Strength\nThe ONTO Tempo 15000 Puffs boasts a nicotine strength of 5%, providing users with a satisfying vaping experience. This nicotine concentration strikes a perfect balance, delivering a smooth throat hit without overwhelming the senses. The 5% nicotine strength of the ONTO Tempo 15000 Puffs ensures that each puff is both satisfying and enjoyable. At this ideal nicotine concentration, individuals have the flexibility to tailor their vaping encounters to align with their desires, whether they seek a gentle buzz or a stronger, more refreshing sensation. Say goodbye to cravings and hello to smooth, flavorful vapor with the ONTO Tempo 15000 Puffs.\n20 ml E-Liquid Capacity\nThe ONTO Tempo 15000 Puffs is outfitted with an abundant reservoir of 20ml e-liquid, guaranteeing uninterrupted vaping enjoyment and eliminating the need for frequent refills. This ample reservoir of e-liquid allows users to enjoy their favorite flavors for an extended period, minimizing interruptions to their vaping experience. Whether you prefer fruity blends, classic tobacco flavors, or indulgent desserts, the 20ml e-liquid capacity of the ONTO 15000 Puffs ensures that you have an abundant supply of your chosen e-liquid at your fingertips. Say goodbye to constantly monitoring e-liquid levels and hello to uninterrupted vaping pleasure with the ONTO 15000 and its ample 20ml e-liquid capacity.\nFlavor Options\nThe ONTO Tempo 15000 Puffs provides an enticing array of flavor options, ensuring a delightful vaping experience for every palate. From refreshing fruit blends to classic tobacco flavors and indulgent desserts, there’s something to suit every taste preference. Every inhalation offers an explosion of taste, enticing the senses and leaving you yearning for another puff. With such a diverse selection of flavors to choose from, vapers can explore new tastes and find their perfect match. Say hello to a world of flavor possibilities with the ONTO Tempo 15000 Puffs, where every puff is a flavorful adventure. The Flavors are Gum Mint |Lush Ice | Grape Ice | Mixed Berries | Blueberry Ice | Strawberry Kiwi | Strawberry Mango | Kiwi Passionfruit | Mango Passionfruit | Strawberry Watermelon\nParameters\n\nBrand: ONTO\nMaterial: PC+ALU\nFull-Screen Display\nNicotine Strength: 5%\nCharging Port: Type-C\nE-juice Capacity: 20ml\nPuffs: Up to 15000 Puffs\nCoil Type: Double mesh coil\nDifferent Output Mode: \n\n\nPulse mode 17.5w.\nregular mode 10.5w."
    },
    {
        id: "product-441",
        title: "ONTO TEMPO 15000 PUFFS – MANGO PASSION FRUIT – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2199",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/ONTO_Tempo_15000_Puffs_Mango_Passionfruit-510x510.webp",
        desc: "Introducing the ONTO Tempo 15000 Puffs, a disposable vape device that redefines convenience and performance in the vaping industry. The ONTO Tempo guarantees extended enjoyment without the need for refills or maintenance, thanks to its remarkable puff count of up to 15000 puffs per device. Designed for vapers who seek simplicity and portability, this sleek device offers a wide range of flavor options to suit every palate. The ONTO Tempo promises a delightful experience with its compact design, long-lasting battery, and rich, satisfying vapor. Say goodbye to cumbersome vape pens and mods – the ONTO Tempo 15000 Puffs is here to elevate your vaping journey to new heights.\nFeatures of ONTO Tempo 15000 Puffs\nDouble Mesh Coil\nThe double mesh coil integrated into the ONTO Tempo 15000 Puffs represents a significant leap forward in vaping technology. This advanced coil design utilizes two layers of mesh material to amplify both flavor and vapor production, resulting in an unparalleled vaping experience. By increasing the surface area in contact with the e-liquid, the double mesh coil ensures rapid and efficient heating, translating into rich, full-bodied flavors with every puff. Moreover, the enhanced airflow design of the coil promotes smoother draws, allowing users to savor the full complexity of their chosen e-liquids. Whether you’re a flavor enthusiast or a cloud chaser, it promises a remarkable journey into the world of vaping, elevating your enjoyment to new heights.\n5% Nicotine Strength\nThe ONTO Tempo 15000 Puffs boasts a nicotine strength of 5%, providing users with a satisfying vaping experience. This nicotine concentration strikes a perfect balance, delivering a smooth throat hit without overwhelming the senses. The 5% nicotine strength of the ONTO Tempo 15000 Puffs ensures that each puff is both satisfying and enjoyable. At this ideal nicotine concentration, individuals have the flexibility to tailor their vaping encounters to align with their desires, whether they seek a gentle buzz or a stronger, more refreshing sensation. Say goodbye to cravings and hello to smooth, flavorful vapor with the ONTO Tempo 15000 Puffs.\n20 ml E-Liquid Capacity\nThe ONTO Tempo 15000 Puffs is outfitted with an abundant reservoir of 20ml e-liquid, guaranteeing uninterrupted vaping enjoyment and eliminating the need for frequent refills. This ample reservoir of e-liquid allows users to enjoy their favorite flavors for an extended period, minimizing interruptions to their vaping experience. Whether you prefer fruity blends, classic tobacco flavors, or indulgent desserts, the 20ml e-liquid capacity of the ONTO 15000 Puffs ensures that you have an abundant supply of your chosen e-liquid at your fingertips. Say goodbye to constantly monitoring e-liquid levels and hello to uninterrupted vaping pleasure with the ONTO 15000 and its ample 20ml e-liquid capacity.\nFlavor Options\nThe ONTO Tempo 15000 Puffs provides an enticing array of flavor options, ensuring a delightful vaping experience for every palate. From refreshing fruit blends to classic tobacco flavors and indulgent desserts, there’s something to suit every taste preference. Every inhalation offers an explosion of taste, enticing the senses and leaving you yearning for another puff. With such a diverse selection of flavors to choose from, vapers can explore new tastes and find their perfect match. Say hello to a world of flavor possibilities with the ONTO Tempo 15000 Puffs, where every puff is a flavorful adventure. The Flavors are Gum Mint |Lush Ice | Grape Ice | Mixed Berries | Blueberry Ice | Strawberry Kiwi | Strawberry Mango | Kiwi Passionfruit | Mango Passionfruit | Strawberry Watermelon\nParameters\n\nBrand: ONTO\nMaterial: PC+ALU\nFull-Screen Display\nNicotine Strength: 5%\nCharging Port: Type-C\nE-juice Capacity: 20ml\nPuffs: Up to 15000 Puffs\nCoil Type: Double mesh coil\nDifferent Output Mode: \n\n\nPulse mode 17.5w.\nregular mode 10.5w."
    },
    {
        id: "product-442",
        title: "ONTO TEMPO 15000 PUFFS – MIXED BERRIES – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2199",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/ONTO_Tempo_15000_Puffs_Mixed_berries-510x510.webp",
        desc: "Introducing the ONTO Tempo 15000 Puffs, a disposable vape device that redefines convenience and performance in the vaping industry. The ONTO Tempo guarantees extended enjoyment without the need for refills or maintenance, thanks to its remarkable puff count of up to 15000 puffs per device. Designed for vapers who seek simplicity and portability, this sleek device offers a wide range of flavor options to suit every palate. The ONTO Tempo promises a delightful experience with its compact design, long-lasting battery, and rich, satisfying vapor. Say goodbye to cumbersome vape pens and mods – the ONTO Tempo 15000 Puffs is here to elevate your vaping journey to new heights.\nFeatures of ONTO Tempo 15000 Puffs\nDouble Mesh Coil\nThe double mesh coil integrated into the ONTO Tempo 15000 Puffs represents a significant leap forward in vaping technology. This advanced coil design utilizes two layers of mesh material to amplify both flavor and vapor production, resulting in an unparalleled vaping experience. By increasing the surface area in contact with the e-liquid, the double mesh coil ensures rapid and efficient heating, translating into rich, full-bodied flavors with every puff. Moreover, the enhanced airflow design of the coil promotes smoother draws, allowing users to savor the full complexity of their chosen e-liquids. Whether you’re a flavor enthusiast or a cloud chaser, it promises a remarkable journey into the world of vaping, elevating your enjoyment to new heights.\n5% Nicotine Strength\nThe ONTO Tempo 15000 Puffs boasts a nicotine strength of 5%, providing users with a satisfying vaping experience. This nicotine concentration strikes a perfect balance, delivering a smooth throat hit without overwhelming the senses. The 5% nicotine strength of the ONTO Tempo 15000 Puffs ensures that each puff is both satisfying and enjoyable. At this ideal nicotine concentration, individuals have the flexibility to tailor their vaping encounters to align with their desires, whether they seek a gentle buzz or a stronger, more refreshing sensation. Say goodbye to cravings and hello to smooth, flavorful vapor with the ONTO Tempo 15000 Puffs.\n20 ml E-Liquid Capacity\nThe ONTO Tempo 15000 Puffs is outfitted with an abundant reservoir of 20ml e-liquid, guaranteeing uninterrupted vaping enjoyment and eliminating the need for frequent refills. This ample reservoir of e-liquid allows users to enjoy their favorite flavors for an extended period, minimizing interruptions to their vaping experience. Whether you prefer fruity blends, classic tobacco flavors, or indulgent desserts, the 20ml e-liquid capacity of the ONTO 15000 Puffs ensures that you have an abundant supply of your chosen e-liquid at your fingertips. Say goodbye to constantly monitoring e-liquid levels and hello to uninterrupted vaping pleasure with the ONTO 15000 and its ample 20ml e-liquid capacity.\nFlavor Options\nThe ONTO Tempo 15000 Puffs provides an enticing array of flavor options, ensuring a delightful vaping experience for every palate. From refreshing fruit blends to classic tobacco flavors and indulgent desserts, there’s something to suit every taste preference. Every inhalation offers an explosion of taste, enticing the senses and leaving you yearning for another puff. With such a diverse selection of flavors to choose from, vapers can explore new tastes and find their perfect match. Say hello to a world of flavor possibilities with the ONTO Tempo 15000 Puffs, where every puff is a flavorful adventure. The Flavors are Gum Mint |Lush Ice | Grape Ice | Mixed Berries | Blueberry Ice | Strawberry Kiwi | Strawberry Mango | Kiwi Passionfruit | Mango Passionfruit | Strawberry Watermelon\nParameters\n\nBrand: ONTO\nMaterial: PC+ALU\nFull-Screen Display\nNicotine Strength: 5%\nCharging Port: Type-C\nE-juice Capacity: 20ml\nPuffs: Up to 15000 Puffs\nCoil Type: Double mesh coil\nDifferent Output Mode: \n\n\nPulse mode 17.5w.\nregular mode 10.5w."
    },
    {
        id: "product-443",
        title: "ONTO TEMPO 15000 PUFFS – STRAWBERRY MANGO – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2199",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Onto-Tempo-15000-Puffs-Disposable-OEM-Custom-Manufacturers-Wholesale-Electronic-E-Cigarette-Bar.webp",
        desc: "Introducing the ONTO Tempo 15000 Puffs, a disposable vape device that redefines convenience and performance in the vaping industry. The ONTO Tempo guarantees extended enjoyment without the need for refills or maintenance, thanks to its remarkable puff count of up to 15000 puffs per device. Designed for vapers who seek simplicity and portability, this sleek device offers a wide range of flavor options to suit every palate. The ONTO Tempo promises a delightful experience with its compact design, long-lasting battery, and rich, satisfying vapor. Say goodbye to cumbersome vape pens and mods – the ONTO Tempo 15000 Puffs is here to elevate your vaping journey to new heights.\nFeatures of ONTO Tempo 15000 Puffs\nDouble Mesh Coil\nThe double mesh coil integrated into the ONTO Tempo 15000 Puffs represents a significant leap forward in vaping technology. This advanced coil design utilizes two layers of mesh material to amplify both flavor and vapor production, resulting in an unparalleled vaping experience. By increasing the surface area in contact with the e-liquid, the double mesh coil ensures rapid and efficient heating, translating into rich, full-bodied flavors with every puff. Moreover, the enhanced airflow design of the coil promotes smoother draws, allowing users to savor the full complexity of their chosen e-liquids. Whether you’re a flavor enthusiast or a cloud chaser, it promises a remarkable journey into the world of vaping, elevating your enjoyment to new heights.\n5% Nicotine Strength\nThe ONTO Tempo 15000 Puffs boasts a nicotine strength of 5%, providing users with a satisfying vaping experience. This nicotine concentration strikes a perfect balance, delivering a smooth throat hit without overwhelming the senses. The 5% nicotine strength of the ONTO Tempo 15000 Puffs ensures that each puff is both satisfying and enjoyable. At this ideal nicotine concentration, individuals have the flexibility to tailor their vaping encounters to align with their desires, whether they seek a gentle buzz or a stronger, more refreshing sensation. Say goodbye to cravings and hello to smooth, flavorful vapor with the ONTO Tempo 15000 Puffs.\n20 ml E-Liquid Capacity\nThe ONTO Tempo 15000 Puffs is outfitted with an abundant reservoir of 20ml e-liquid, guaranteeing uninterrupted vaping enjoyment and eliminating the need for frequent refills. This ample reservoir of e-liquid allows users to enjoy their favorite flavors for an extended period, minimizing interruptions to their vaping experience. Whether you prefer fruity blends, classic tobacco flavors, or indulgent desserts, the 20ml e-liquid capacity of the ONTO 15000 Puffs ensures that you have an abundant supply of your chosen e-liquid at your fingertips. Say goodbye to constantly monitoring e-liquid levels and hello to uninterrupted vaping pleasure with the ONTO 15000 and its ample 20ml e-liquid capacity.\nFlavor Options\nThe ONTO Tempo 15000 Puffs provides an enticing array of flavor options, ensuring a delightful vaping experience for every palate. From refreshing fruit blends to classic tobacco flavors and indulgent desserts, there’s something to suit every taste preference. Every inhalation offers an explosion of taste, enticing the senses and leaving you yearning for another puff. With such a diverse selection of flavors to choose from, vapers can explore new tastes and find their perfect match. Say hello to a world of flavor possibilities with the ONTO Tempo 15000 Puffs, where every puff is a flavorful adventure. The Flavors are Gum Mint |Lush Ice | Grape Ice | Mixed Berries | Blueberry Ice | Strawberry Kiwi | Strawberry Mango | Kiwi Passionfruit | Mango Passionfruit | Strawberry Watermelon\nParameters\n\nBrand: ONTO\nMaterial: PC+ALU\nFull-Screen Display\nNicotine Strength: 5%\nCharging Port: Type-C\nE-juice Capacity: 20ml\nPuffs: Up to 15000 Puffs\nCoil Type: Double mesh coil\nDifferent Output Mode: \n\n\nPulse mode 17.5w.\nregular mode 10.5w."
    },
    {
        id: "product-444",
        title: "PLATINUM BAR 15000 Puffs – APPLE STRAWBERRY – 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2599",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/Apple-strawberry-510x510.jpeg",
        desc: "Delight in the harmonious blend of Apple Strawberry with our vape. This flavor combines the crisp sweetness of fresh apples with the juicy, tangy taste of ripe strawberries, creating a refreshing and balanced vaping experience. Each puff delivers a burst of fruity goodness, making Apple Strawberry an ideal choice for those who enjoy a bright and flavorful sensation. Enjoy the perfect fusion of fruits with Apple Strawberry.\n\n\n\nPlatinum Bar Disposable Vape INTRODUCTION\nPlatinum Bar Disposable Vape has the best capacity on the market—15000 puffs per device, considered one of the best in this class. This exceptional vape is one that is made to last, and there is no replacement or regular charging by the look of things. Good for all lifestyles, be it travelling, socializing, or just revelling in life’s little moments where surely you won’t miss enjoying a puff. Be sure to enjoy savouring through its collection of premium flavours made from the finest ingredients, making each puff consistent in flavour. From fruity concoctions to classic tobacco, it has got you covered with all flavours. Platinum Bar—the best of quality combined with the best of value—is the best-priced high-end vaping experience in the United Kingdom.\nFeatures\n• Puffs: Up to 15000 Puffs Vape\n• Convenience and Longevity\n• Uninterrupted Vaping Pleasure\n• High Performance\n• Sleek Design and Ease of Use"
    },
    {
        id: "product-445",
        title: "PLATINUM BAR 15000 Puffs – FIZZY CHERRY – 5% Nic – Type C Rechargeable",
        price: "2000",
        price2: "2599",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/Fizzy-cherry-510x510.jpeg",
        desc: "Indulge in the playful and vibrant taste of Fizzy Cherry with our vape. This flavor captures the tart sweetness of ripe cherries with a bubbly, effervescent twist, offering a unique and exhilarating vaping experience. Each puff is like a sip of a cherry soda, lively and refreshing. Fizzy Cherry is perfect for vapers looking for a fun, fruity burst with a fizzy finish that dances on the palate. Enjoy the zestful spark of Fizzy Cherry anytime you desire a flavorful lift.\n\n\n\nPlatinum Bar Disposable Vape INTRODUCTION\nPlatinum Bar Disposable Vape has the best capacity on the market—15000 puffs per device, considered one of the best in this class. This exceptional vape is one that is made to last, and there is no replacement or regular charging by the look of things. Good for all lifestyles, be it travelling, socializing, or just revelling in life’s little moments where surely you won’t miss enjoying a puff. Be sure to enjoy savouring through its collection of premium flavours made from the finest ingredients, making each puff consistent in flavour. From fruity concoctions to classic tobacco, it has got you covered with all flavours. Platinum Bar—the best of quality combined with the best of value—is the best-priced high-end vaping experience in the United Kingdom.\nFeatures\n• Puffs: Up to 15000 Puffs Vape\n• Convenience and Longevity\n• Uninterrupted Vaping Pleasure\n• High Performance\n• Sleek Design and Ease of Use"
    },
    {
        id: "product-446",
        title: "UWELL CALIBURN S12000 – BLUE RAZZ ICE – 5% Nic – Type C Rechargeable",
        price: "1700",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Uwell-Caliburn-Bar-S12000-Disposable-Blue-Razz-Ice-510x510.webp",
        desc: "Elevate Your Vaping Experience with Uwell Caliburn Bar S12000 Disposable Vape\nExperience vaping like never before with the Uwell Caliburn Bar S12000 Disposable Vape. Offering an impressive puff count of up to 12000 puffs, this innovative device delivers long-lasting satisfaction in a convenient, user-friendly package. Prefilled with 20.0mL of premium e-liquid featuring a nicotine strength of 50 Mg (5%), and available in a diverse range of 15 tantalizing flavors, the Caliburn Bar S12000 ensures you can enjoy your favorite flavors with ease.\nUnrivaled Performance, Unmatched Convenience\nThe Uwell Caliburn Bar S12000 Disposable Vape is designed to provide an exceptional vaping experience with every puff. Featuring a rechargeable disposable design, this device combines the convenience of a disposable vape with the performance of a rechargeable device. With a built-in 800mAh battery, you can enjoy extended vaping sessions without the need for frequent recharging, making it perfect for on-the-go use.\nIndulge in a World of Flavor\nWith 15 enticing flavors to choose from, the Uwell Caliburn Bar S12000 Disposable Vape offers something to suit every palate. From classic tobacco and refreshing menthol to sweet fruit and decadent dessert flavors, there’s a flavor for every mood and occasion. Whether you’re craving a burst of tropical fruit or a comforting dessert-inspired treat, the Caliburn Bar S12000 has you covered.\nDual Coil Technology for Enhanced Flavor"
    },
    {
        id: "product-447",
        title: "UWELL CALIBURN S12000 – CRAZY BERRY CHERRY – 5% Nic – Type C Rechargeable",
        price: "1700",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/images-2.jpg",
        desc: "Elevate Your Vaping Experience with Uwell Caliburn Bar S12000 Disposable Vape\nExperience vaping like never before with the Uwell Caliburn Bar S12000 Disposable Vape. Offering an impressive puff count of up to 12000 puffs, this innovative device delivers long-lasting satisfaction in a convenient, user-friendly package. Prefilled with 20.0mL of premium e-liquid featuring a nicotine strength of 50 Mg (5%), and available in a diverse range of 15 tantalizing flavors, the Caliburn Bar S12000 ensures you can enjoy your favorite flavors with ease.\nUnrivaled Performance, Unmatched Convenience\nThe Uwell Caliburn Bar S12000 Disposable Vape is designed to provide an exceptional vaping experience with every puff. Featuring a rechargeable disposable design, this device combines the convenience of a disposable vape with the performance of a rechargeable device. With a built-in 800mAh battery, you can enjoy extended vaping sessions without the need for frequent recharging, making it perfect for on-the-go use.\nIndulge in a World of Flavor\nWith 15 enticing flavors to choose from, the Uwell Caliburn Bar S12000 Disposable Vape offers something to suit every palate. From classic tobacco and refreshing menthol to sweet fruit and decadent dessert flavors, there’s a flavor for every mood and occasion. Whether you’re craving a burst of tropical fruit or a comforting dessert-inspired treat, the Caliburn Bar S12000 has you covered.\nDual Coil Technology for Enhanced Flavor"
    },
    {
        id: "product-448",
        title: "UWELL CALIBURN S12000 – MIXED BERRIES – 5% Nic – Type C Rechargeable",
        price: "1700",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/images-1.jpg",
        desc: "Elevate Your Vaping Experience with Uwell Caliburn Bar S12000 Disposable Vape\nExperience vaping like never before with the Uwell Caliburn Bar S12000 Disposable Vape. Offering an impressive puff count of up to 12000 puffs, this innovative device delivers long-lasting satisfaction in a convenient, user-friendly package. Prefilled with 20.0mL of premium e-liquid featuring a nicotine strength of 50 Mg (5%), and available in a diverse range of 15 tantalizing flavors, the Caliburn Bar S12000 ensures you can enjoy your favorite flavors with ease.\nUnrivaled Performance, Unmatched Convenience\nThe Uwell Caliburn Bar S12000 Disposable Vape is designed to provide an exceptional vaping experience with every puff. Featuring a rechargeable disposable design, this device combines the convenience of a disposable vape with the performance of a rechargeable device. With a built-in 800mAh battery, you can enjoy extended vaping sessions without the need for frequent recharging, making it perfect for on-the-go use.\nIndulge in a World of Flavor\nWith 15 enticing flavors to choose from, the Uwell Caliburn Bar S12000 Disposable Vape offers something to suit every palate. From classic tobacco and refreshing menthol to sweet fruit and decadent dessert flavors, there’s a flavor for every mood and occasion. Whether you’re craving a burst of tropical fruit or a comforting dessert-inspired treat, the Caliburn Bar S12000 has you covered.\nDual Coil Technology for Enhanced Flavor"
    },
    {
        id: "product-449",
        title: "UWELL CALIBURN S12000 – PEACH WATERMELON – 5% Nic – Type C Rechargeable",
        price: "1700",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/peach-watermelon-Uwell-Caliburn-Bar-S12000-510x510.jpg",
        desc: "Elevate Your Vaping Experience with Uwell Caliburn Bar S12000 Disposable Vape\nExperience vaping like never before with the Uwell Caliburn Bar S12000 Disposable Vape. Offering an impressive puff count of up to 12000 puffs, this innovative device delivers long-lasting satisfaction in a convenient, user-friendly package. Prefilled with 20.0mL of premium e-liquid featuring a nicotine strength of 50 Mg (5%), and available in a diverse range of 15 tantalizing flavors, the Caliburn Bar S12000 ensures you can enjoy your favorite flavors with ease.\nUnrivaled Performance, Unmatched Convenience\nThe Uwell Caliburn Bar S12000 Disposable Vape is designed to provide an exceptional vaping experience with every puff. Featuring a rechargeable disposable design, this device combines the convenience of a disposable vape with the performance of a rechargeable device. With a built-in 800mAh battery, you can enjoy extended vaping sessions without the need for frequent recharging, making it perfect for on-the-go use.\nIndulge in a World of Flavor\nWith 15 enticing flavors to choose from, the Uwell Caliburn Bar S12000 Disposable Vape offers something to suit every palate. From classic tobacco and refreshing menthol to sweet fruit and decadent dessert flavors, there’s a flavor for every mood and occasion. Whether you’re craving a burst of tropical fruit or a comforting dessert-inspired treat, the Caliburn Bar S12000 has you covered.\nDual Coil Technology for Enhanced Flavor"
    },
    {
        id: "product-450",
        title: "UWELL CALIBURN S12000 – RASPBERRY LIME JAM – 5% Nic – Type C Rechargeable",
        price: "1700",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Uwell-Caliburn-Bar-S18000-Disposable-Raspberry-Lime-Jame.jpg",
        desc: "Elevate Your Vaping Experience with Uwell Caliburn Bar S12000 Disposable Vape\nExperience vaping like never before with the Uwell Caliburn Bar S12000 Disposable Vape. Offering an impressive puff count of up to 12000 puffs, this innovative device delivers long-lasting satisfaction in a convenient, user-friendly package. Prefilled with 20.0mL of premium e-liquid featuring a nicotine strength of 50 Mg (5%), and available in a diverse range of 15 tantalizing flavors, the Caliburn Bar S12000 ensures you can enjoy your favorite flavors with ease.\nUnrivaled Performance, Unmatched Convenience\nThe Uwell Caliburn Bar S12000 Disposable Vape is designed to provide an exceptional vaping experience with every puff. Featuring a rechargeable disposable design, this device combines the convenience of a disposable vape with the performance of a rechargeable device. With a built-in 800mAh battery, you can enjoy extended vaping sessions without the need for frequent recharging, making it perfect for on-the-go use.\nIndulge in a World of Flavor\nWith 15 enticing flavors to choose from, the Uwell Caliburn Bar S12000 Disposable Vape offers something to suit every palate. From classic tobacco and refreshing menthol to sweet fruit and decadent dessert flavors, there’s a flavor for every mood and occasion. Whether you’re craving a burst of tropical fruit or a comforting dessert-inspired treat, the Caliburn Bar S12000 has you covered.\nDual Coil Technology for Enhanced Flavor"
    },
    {
        id: "product-451",
        title: "UWELL CALIBURN S12000 – STRAWBERRY KIWI – 5% Nic – Type C Rechargeable",
        price: "1700",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Uwell-Caliburn-Bar-S18000-Disposable-Strawberry-Kiwi.jpg",
        desc: "Elevate Your Vaping Experience with Uwell Caliburn Bar S12000 Disposable Vape\nExperience vaping like never before with the Uwell Caliburn Bar S12000 Disposable Vape. Offering an impressive puff count of up to 12000 puffs, this innovative device delivers long-lasting satisfaction in a convenient, user-friendly package. Prefilled with 20.0mL of premium e-liquid featuring a nicotine strength of 50 Mg (5%), and available in a diverse range of 15 tantalizing flavors, the Caliburn Bar S12000 ensures you can enjoy your favorite flavors with ease.\nUnrivaled Performance, Unmatched Convenience\nThe Uwell Caliburn Bar S12000 Disposable Vape is designed to provide an exceptional vaping experience with every puff. Featuring a rechargeable disposable design, this device combines the convenience of a disposable vape with the performance of a rechargeable device. With a built-in 800mAh battery, you can enjoy extended vaping sessions without the need for frequent recharging, making it perfect for on-the-go use.\nIndulge in a World of Flavor\nWith 15 enticing flavors to choose from, the Uwell Caliburn Bar S12000 Disposable Vape offers something to suit every palate. From classic tobacco and refreshing menthol to sweet fruit and decadent dessert flavors, there’s a flavor for every mood and occasion. Whether you’re craving a burst of tropical fruit or a comforting dessert-inspired treat, the Caliburn Bar S12000 has you covered.\nDual Coil Technology for Enhanced Flavor"
    },
    {
        id: "product-452",
        title: "UWELL CALIBURN S12000 – WHITE GUMMY – 5% Nic – Type C Rechargeable",
        price: "1700",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/06/Uwell-Caliburn-Bar-S12000-Disposable-White-Gummy-510x510.webp",
        desc: "Elevate Your Vaping Experience with Uwell Caliburn Bar S12000 Disposable Vape\nExperience vaping like never before with the Uwell Caliburn Bar S12000 Disposable Vape. Offering an impressive puff count of up to 12000 puffs, this innovative device delivers long-lasting satisfaction in a convenient, user-friendly package. Prefilled with 20.0mL of premium e-liquid featuring a nicotine strength of 50 Mg (5%), and available in a diverse range of 15 tantalizing flavors, the Caliburn Bar S12000 ensures you can enjoy your favorite flavors with ease.\nUnrivaled Performance, Unmatched Convenience\nThe Uwell Caliburn Bar S12000 Disposable Vape is designed to provide an exceptional vaping experience with every puff. Featuring a rechargeable disposable design, this device combines the convenience of a disposable vape with the performance of a rechargeable device. With a built-in 800mAh battery, you can enjoy extended vaping sessions without the need for frequent recharging, making it perfect for on-the-go use.\nIndulge in a World of Flavor\nWith 15 enticing flavors to choose from, the Uwell Caliburn Bar S12000 Disposable Vape offers something to suit every palate. From classic tobacco and refreshing menthol to sweet fruit and decadent dessert flavors, there’s a flavor for every mood and occasion. Whether you’re craving a burst of tropical fruit or a comforting dessert-inspired treat, the Caliburn Bar S12000 has you covered.\nDual Coil Technology for Enhanced Flavor"
    },
    {
        id: "product-453",
        title: "YUZU 15000 Puffs – BANANA ICE – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-17-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-454",
        title: "YUZU 15000 Puffs – BERRY GRAPE – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-16-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-455",
        title: "YUZU 15000 Puffs – BLUE RAZZ – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-6-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-456",
        title: "YUZU 15000 Puffs – BLUEBERRY FUSION – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-9-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-457",
        title: "YUZU 15000 Puffs – LOVE 66 – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-4-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-458",
        title: "YUZU 15000 Puffs – MANGO ICE – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-3-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-459",
        title: "YUZU 15000 Puffs – PASSION GRAPEFRUIT – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-13-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-460",
        title: "YUZU 15000 Puffs – PEACH ICE – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-1-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-461",
        title: "YUZU 15000 Puffs – STRAWBERRY ICE – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-462",
        title: "YUZU 15000 Puffs – STRAWBERRY MANGO – 5% Nic – Type C Rechargeable",
        price: "1699",
        price2: "2500",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/e-2-510x510.jpg",
        desc: "The BURST is equipped with an innovative Dual Mesh Coil technology, allowing you to switch between Regular Mode and Burst Mode.\n\n\n\n\nIn Regular Mode, you can enjoy a consistent and satisfying vaping experience.\nWhen switching to Burst Mode, prepare yourself for an intense and powerful vaping experience with abundant vapor production.\n\nLarge Capacity for Long-lasting Vaping\n\nWith a generous 16ml capacity, the BURST can provide around 15,000 puffs, giving you an extended vaping period.\n\n\n\n\n\n\n\n\n\n\n\nAirflow Control for a Full Experience\n\nAdjustable airflow provides a customized vaping experience that meets your DTL craving. You can expect a satisfying throat-hit sensation, followed by a maximum vapor production that will impress you thoroughly.\n\n\n\n\n\n\n\n\n\nPuff and Power Digital Display\nStay informed with the LCD screen display, providing real-time information about the battery life and puff count. Always have complete control and know exactly when it’s time for a recharge."
    },
    {
        id: "product-463",
        title: "Yuoto Thanos – Blueberry Ice (5000 Puffs) – 5%(50mg) Rechargeable type-C",
        price: "1299",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/10/BUYYUOTOTHANOSDISPOSABLEVAPEONLINEININDIAATHIGHJACK_2_1946x-510x510.webp",
        desc: "Yuoto Thanos Disposable features pre-filled 14ml e-liquid, rechargeable 650mAh integrated battery, 5%(50mg) salt nicotine, and a mesh coil for approximately 5000 puffs. Looking appealing and maintaining an exaggerated shell, it sports a draw-activated firing mechanism so that there isn’t a need for buttons or any adjustment. It is rechargeable and allows you to explore the full line-up of flavors all day.\nProduct Highlights:\n\nPuffs: 5000 Puffs\nE-Juice Capacity: 14ml\nNicotine strength: 5%, 2%optional\nResistance: 1.0ohm\nBattery Capacity: 650mAh(Rechargeable)\nCharging: Type C Charging Port\nSize: 28.5*24*110.7mm"
    },
    {
        id: "product-464",
        title: "Yuoto Thanos – Strawberry Ice Cream (5000 Puffs) – 5%(50mg) Rechargeable type-C",
        price: "1299",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/11/yuoto-thanos-strawberry-icecream_530x@2x-510x510.webp",
        desc: "Yuoto Thanos Disposable features pre-filled 14ml e-liquid, rechargeable 650mAh integrated battery, 5%(50mg) salt nicotine, and a mesh coil for approximately 5000 puffs. Looking appealing and maintaining an exaggerated shell, it sports a draw-activated firing mechanism so that there isn’t a need for buttons or any adjustment. It is rechargeable and allows you to explore the full line-up of flavors all day.\nProduct Highlights:\n\nPuffs: 5000 Puffs\nE-Juice Capacity: 14ml\nNicotine strength: 5%, 2%optional\nResistance: 1.0ohm\nBattery Capacity: 650mAh(Rechargeable)\nCharging: Type C Charging Port\nSize: 28.5*24*110.7mm"
    },
    {
        id: "product-465",
        title: "Yuoto Thanos – Strawberry Kiwi ice (5000 Puffs) – 5%(50mg) Rechargeable type-C",
        price: "1299",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/10/yuoto-thanos-strawberry-kiwi_1024x1024@2x.jpg-510x510.jpg",
        desc: "Yuoto Thanos Disposable features pre-filled 14ml e-liquid, rechargeable 650mAh integrated battery, 5%(50mg) salt nicotine, and a mesh coil for approximately 5000 puffs. Looking appealing and maintaining an exaggerated shell, it sports a draw-activated firing mechanism so that there isn’t a need for buttons or any adjustment. It is rechargeable and allows you to explore the full line-up of flavors all day.\nProduct Highlights:\n\nPuffs: 5000 Puffs\nE-Juice Capacity: 14ml\nNicotine strength: 5%, 2%optional\nResistance: 1.0ohm\nBattery Capacity: 650mAh(Rechargeable)\nCharging: Type C Charging Port\nSize: 28.5*24*110.7mm"
    },
    {
        id: "product-466",
        title: "Yuoto Thanos – Passion Fruit (5000 Puffs) – 5%(50mg) ( Rechargeable type-C )",
        price: "1299",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2023/02/pc140066913-e_cigarette_yuoto_thanos_5000_puffs_14ml_5_nicotine_650mah_19_flavors.webp",
        desc: "Yuoto Thanos Disposable features pre-filled 14ml e-liquid, rechargeable 650mAh integrated battery, 5%(50mg) salt nicotine, and a mesh coil for approximately 5000 puffs. Looking appealing and maintaining an exaggerated shell, it sports a draw-activated firing mechanism so that there isn’t a need for buttons or any adjustment. It is rechargeable and allows you to explore the full line-up of flavors all day.\nProduct Highlights:\n\nPuffs: 5000 Puffs\nE-Juice Capacity: 14ml\nNicotine strength: 5%, 2%optional\nResistance: 1.0ohm\nBattery Capacity: 650mAh(Rechargeable)\nCharging: Type C Charging Port\nSize: 28.5*24*110.7mm"
    },
    {
        id: "product-467",
        title: "Yuoto Thanos – Strawberry Peach Ice (5000 Puffs) – 5%(50mg) Rechargeable type-C",
        price: "1299",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/10/yuoto-thanos-strawberry-peach-ice_1024x1024@2x-510x510.jpg",
        desc: "Yuoto Thanos Disposable features pre-filled 14ml e-liquid, rechargeable 650mAh integrated battery, 5%(50mg) salt nicotine, and a mesh coil for approximately 5000 puffs. Looking appealing and maintaining an exaggerated shell, it sports a draw-activated firing mechanism so that there isn’t a need for buttons or any adjustment. It is rechargeable and allows you to explore the full line-up of flavors all day.\nProduct Highlights:\n\nPuffs: 5000 Puffs\nE-Juice Capacity: 14ml\nNicotine strength: 5%, 2%optional\nResistance: 1.0ohm\nBattery Capacity: 650mAh(Rechargeable)\nCharging: Type C Charging Port\nSize: 28.5*24*110.7mm"
    },
    {
        id: "product-468",
        title: "Yuoto Thanos – Strawberry Watermelon Ice (5000 Puffs) – 5%(50mg) Rechargeable type-C",
        price: "1299",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/10/yuoto-thanos-strawberry-waterlemon_1024x1024@2x-510x510.webp",
        desc: "Yuoto Thanos Disposable features pre-filled 14ml e-liquid, rechargeable 650mAh integrated battery, 5%(50mg) salt nicotine, and a mesh coil for approximately 5000 puffs. Looking appealing and maintaining an exaggerated shell, it sports a draw-activated firing mechanism so that there isn’t a need for buttons or any adjustment. It is rechargeable and allows you to explore the full line-up of flavors all day.\nProduct Highlights:\n\nPuffs: 5000 Puffs\nE-Juice Capacity: 14ml\nNicotine strength: 5%, 2%optional\nResistance: 1.0ohm\nBattery Capacity: 650mAh(Rechargeable)\nCharging: Type C Charging Port\nSize: 28.5*24*110.7mm"
    }
]
const juul = [
    {
        id: "product-101",
        title: "Juul 2 Basic Kit",
        price: "3250",
        price2: "3500",
        image: "https://yoyovapes.com/wp-content/uploads/2023/07/162397-510x510.webp",
        desc: "Now with more cigarette-like satisfaction, JUUL2 is an easy-to-use, next generation JUUL Device designed for adult smokers looking for an alternative to cigarettes.\nJUUL 2 Device Kit – Key Features\n– Replacement battery by JUUL\n– 250mAh battery\n– Available in Slate Grey\n– Draw-activated\n– USB charger included\n– Dimensions: 70mm x 11mm x 7mm\nINCLUDE:\n\n1X Juul 2 KIT\n1X Charger\n250mAh Battery\nDraw-activated"
    },
    {
        id: "product-102",
        title: "JUUL 2 Autumn Tobacco Pods (2 Pods) – 18MG",
        price: "1999",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/juul2-pods-autumn-tobacco-pods-2-pack-new_1024x1024@2x-510x510.jpg",
        desc: "Autumn tobacco JUUL2 pods feature mellow tobacco flavour with tangy orchard harvest notes.\nJUUL2 pods are only to be used with a JUUL2 Device. The JUUL2 Device is designed to only function with authentic JUUL2 pods manufactured by Juul Labs.\nWhat’s In The Box?\n\n2 x JUUL2 pods\nCrisp Menthol flavour\n1 JUUL2 pod contains: ~1.2 mL\nNicotine concentration: ~18 mg/mL\nTotal nicotine content: ~21.6 mg/JUUL2 pod\n\nJUUL2 pods contain their uniquely satisfying e-liquid.\n18 mg/ml nicotine strength. Each pack contains 2 pods.\nOur e-liquid contains a proprietary formulation which includes Vegetable glycerin, Propylene glycol, Water, Nicotine, Benzoic acid, flavourings. You should not use this product if you are allergic to nicotine or to any other ingredient that it contains. See JUUL2 pods packaging for additional ingredient and safety information."
    },
    {
        id: "product-103",
        title: "JUUL 2 Virginia Tobacco Pods (2 Pods) – 18MG",
        price: "1999",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/juul2-pods-virginia-tobacco-pods2-pack-new_1024x1024@2x-510x510.jpg",
        desc: "Virginia tobacco JUUL2 pods feature a fresh green menthol flavour with a brisk, cooling finish. Each pack contains 2 18mg/mL nicotine strength pods.\nJUUL2 pods are only to be used with a JUUL2 Device. The JUUL2 Device is designed to only function with authentic JUUL2 pods manufactured by Juul Labs.\nWhat’s In The Box?\n\n2 x JUUL2 pods\nVirginia Tobacco flavour\n1 JUUL2 pod contains: ~1.2 mL\nNicotine concentration: ~18 mg/mL\nTotal nicotine content: ~21.6 mg/JUUL2 pod\n\nJUUL2 pods contain their uniquely satisfying e-liquid.\n18 mg/ml nicotine strength. Each pack contains 2 pods.\nOur e-liquid contains a proprietary formulation which includes Vegetable glycerin, Propylene glycol, Water, Nicotine, Benzoic acid, flavourings. You should not use this product if you are allergic to nicotine or to any other ingredient that it contains. See JUUL2 pods packaging for additional ingredient and safety information."
    },
    {
        id: "product-104",
        title: "JUUL 2 Summer Menthol Pods (2 Pods) – 18MG",
        price: "1999",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/juul2-pods-summer-menthol-pods-2-pack-new_1024x1024@2x-510x510.webp",
        desc: "Summer Menthol JUUL2 pods feature a lush, tropical flavour with a breezy cooling exhale.\nJUUL2 pods are only to be used with a JUUL2 Device. The JUUL2 Device is designed to only function with authentic JUUL2 pods manufactured by Juul Labs.\nWhat’s In The Box?\n\n2 x JUUL2 pods\nSummer Menthol flavour\n1 JUUL2 pod contains: ~1.2 mL\nNicotine concentration: ~18 mg/mL\nTotal nicotine content: ~21.6 mg/JUUL2 pod\n\nJUUL2 pods contain their uniquely satisfying e-liquid.\n18 mg/ml nicotine strength. Each pack contains 2 pods.\nOur e-liquid contains a proprietary formulation which includes Vegetable glycerin, Propylene glycol, Water, Nicotine, Benzoic acid, flavourings. You should not use this product if you are allergic to nicotine or to any other ingredient that it contains. See JUUL2 pods packaging for additional ingredient and safety information."
    },
    {
        id: "product-105",
        title: "JUUL 2 Blackcurrant Tobacco Pods (2 Pods) – 18MG",
        price: "1999",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2023/03/juul2-blackcurrant-tobacco-510x510.webp",
        desc: "TRY THE JUUL 2 BLACKCURRANT TOBACCO PODS\nBlackcurrant Tobacco JUUL2 pods feature mellow tobacco flavour coupled with a burst of fresh and ripe blackcurrant..\nKEY FEATURES:\n\n2 JUUL pods\nBlackcurrant Tobacco Flavour\n1 JUUL2 pod contains ~1.2 mL\nNicotine concentration: ~18 mg/mL\nTotal nicotine content: ~21.6 mg/JUUL2 pod\n\nPACKAGE CONTAINS:\n\n2 x Blackcurrant Tobacco JUUL2 Replacement Pods by JUUL"
    },
    {
        id: "product-106",
        title: "JUUL 2 Ruby Menthol Pods (2 Pods) – 18MG",
        price: "1999",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/juul2-pods-ruby-menthol-pods2-pack-new_1024x1024@2x-510x510.jpg",
        desc: "Ruby Menthol JUUL2 pods feature a wild blush medley flavour with a fresh, wintry finish.\nJUUL2 pods are only to be used with a JUUL2 Device. The JUUL2 Device is designed to only function with authentic JUUL2 pods manufactured by Juul Labs.\nWhat’s In The Box?\n\n2 x JUUL2 pods\nRuby Menthol flavour\n1 JUUL2 pod contains: ~1.2 mL\nNicotine concentration: ~18 mg/mL\nTotal nicotine content: ~21.6 mg/JUUL2 pod\n\nJUUL2 pods contain their uniquely satisfying e-liquid.\n18 mg/ml nicotine strength. Each pack contains 2 pods.\nOur e-liquid contains a proprietary formulation which includes Vegetable glycerin, Propylene glycol, Water, Nicotine, Benzoic acid, flavourings. You should not use this product if you are allergic to nicotine or to any other ingredient that it contains. See JUUL2 pods packaging for additional ingredient and safety information."
    },
    {
        id: "product-107",
        title: "JUUL 2 Crisp Menthol Pods (2 Pods) – 18MG",
        price: "1999",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/juul2-pods-crisp-menthol-pods-2-pack-new_1024x1024@2x-510x510.jpg",
        desc: "Crisp menthol JUUL2 pods feature a fresh green menthol flavour with a brisk, cooling finish. Each pack contains 2 18mg/mL nicotine strength pods.\nJUUL2 pods are only to be used with a JUUL2 Device. The JUUL2 Device is designed to only function with authentic JUUL2 pods manufactured by Juul Labs.\nWhat’s In The Box?\n\n2 x JUUL2 pods\nCrisp Menthol flavour\n1 JUUL2 pod contains: ~1.2 mL\nNicotine concentration: ~18 mg/mL\nTotal nicotine content: ~21.6 mg/JUUL2 pod\n\nJUUL2 pods contain their uniquely satisfying e-liquid.\n18 mg/ml nicotine strength. Each pack contains 2 pods.\nOur e-liquid contains a proprietary formulation which includes Vegetable glycerin, Propylene glycol, Water, Nicotine, Benzoic acid, flavourings. You should not use this product if you are allergic to nicotine or to any other ingredient that it contains. See JUUL2 pods packaging for additional ingredient and safety information."
    },
    {
        id: "product-108",
        title: "JUUL 2 Polar Menthol Pods (2 Pods) – 18MG",
        price: "1999",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2022/07/juul2-pods-polar-menthol-pods-2-pack-new_1024x1024@2x-510x510.jpg",
        desc: "Polar menthol JUUL2 pods feature a bold, icy menthol flavour with an intensely cooling finish.\nJUUL2 pods are only to be used with a JUUL2 Device. The JUUL2 Device is designed to only function with authentic JUUL2 pods manufactured by Juul Labs.\nWhat’s In The Box?\n\n2 x JUUL2 pods\nSummer Menthol flavour\n1 JUUL2 pod contains: ~1.2 mL\nNicotine concentration: ~18 mg/mL\nTotal nicotine content: ~21.6 mg/JUUL2 pod\n\nJUUL2 pods contain their uniquely satisfying e-liquid.\n18 mg/ml nicotine strength. Each pack contains 2 pods.\nOur e-liquid contains a proprietary formulation which includes Vegetable glycerin, Propylene glycol, Water, Nicotine, Benzoic acid, flavourings. You should not use this product if you are allergic to nicotine or to any other ingredient that it contains. See JUUL2 pods packaging for additional ingredient and safety information."
    },
    {
        id: "product-109",
        title: "JUUL PODS Peach – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2022/06/peach2_480x480.jpg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip Pods Blueberry Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-110",
        title: "Juul Pods – Virginia Tobacco 5%",
        price: "2399",
        price2: "2999",
        image: "https://yoyovapes.com/wp-content/uploads/2021/07/1juul-virginia-tobacco-pods-5p-510x510.jpeg",
        desc: "Flavour: Juul Virginia Tobacco Pod with a unique Virginia taste as of cigarette tobacco.\nJUUL pods are compatible with the JUUL Starter Kit and JUUL Device kits and have been carefully developed for adult smokers looking to switch from cigarettes.\nJuul’s pods are pre-filled with 0.7ml of JUULsalts™ e liquid which is based on nicotine salt found in the tobacco leaf. Each puff gives a great combination of flavour, nicotine hit and a satisfying vape.\nThese pods have 18mg nicotine strength and deliver approximately 300 puffs per pod."
    },
    {
        id: "product-111",
        title: "Ziip Pods compatible with Juul Device – 5 Combo Offer",
        price: "7000",
        price2: "7500",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/ziip-pods-for-juul-vape.jpg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered."
    },
    {
        id: "product-112",
        title: "JUUL PODS Cappuccino – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-12.07.18-PM-510x510.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nCapture the essence of your local coffee joint with the Ziip Cappucino 4 Pods. Why is this a big deal? Well, this is the next best option to actually drinking your favorite caffeine selection. Without ingesting anything, these ZPods bestow upon your palate a foaming cappuccino flavor, featuring a soothing essence of nicotine salts, which quench your cravings at first puff. Each pod contains 1ml of e-liquid accordingly, optimized for compatibility with Juul systems. These compatible pods come in the strength of 50mg exclusively, perfectly infused with just the right amount of nicotine for the pickiest senses. Don’t take our word for it, see for yourself!.\nZiip Pods Cappuccino Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-113",
        title: "JUUL PODS Ice BlueBerry – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.58.41-AM-510x507.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nSo, you want to experience the lusciousness of the fruit kingdom? Don’t pass up on this golden opportunity to inundate your senses in a world of Ziip Iced Blueberry 4 ZPods, crafted by genius minds to deliver to the doorstep of your palate a new outlook on dessert. What’s the big deal here? Well, your tongue will be swathed by the refreshing deliciousness of blueberries upon your first inhalation. What’s better than that?! Each compatible pod is filled with 1ml of the finest eliquids, made to be compatible with your favorite Juul device. Each listing comes exclusively with one strength, measured in 50mg or 5% salt nicotine.\nZiip Pods Iced blueberry Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-114",
        title: "JUUL PODS Ice Cola – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.24.06-AM-510x505.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nPicture a break at work that is overlaid by a carefree mental attitude, one that feels the coolness of sipping an iced Cola. The Ziip Pods Iced Cola have been designed to create the same kind of experience for the user, allowing for a gentle medium bodied caress of the senses with a saccharine cola flavor. So, what really is the big deal? Perhaps the fact that you get premium flavor in a vapor that isn’t any worse than the liquid it is mimicking itself! Medium bodied in its spirit, this is the perfect vapor for anyone looking to get their feet wet in vaping while experiencing the true goodness of dessert. So, what are you waiting for? Try this Juul-compatible sensual blast now!\nZiip Pods Iced Cola Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-115",
        title: "JUUL PODS Ice grape – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.55.50-AM-510x507.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nWith every single puff, you’ll feel like you’re eating a grape. As you exhale, you become a true witness to some of the most thickest and most beguiling cloud formations. The sweetness that your palate will be endowed with shall not be dismissed, for its medium bodied kick will awaken your senses in ways where they would be tricked into assuming that they are consuming dessert. They will open up completely and immerse themselves in sensational ecstasy. What are you waiting for? True bliss is a click away.\nZiip Pods Iced Grape Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-116",
        title: "JUUL PODS Ice Mango – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.30.58-AM-510x508.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nQuench your cravings with this tropical explosion of flavors! The ZiiP Labs Zpods Iced Mango features a perfect blend of ripe juicy mangoes with a light mint exhale. ZiiP Pods are third party pre-filled salt nicotine cartridges compatible for a JUUL pod vaporizer.\nZiip Pods Iced Mango Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-117",
        title: "JUUL PODS Ice Strawberry – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.49.18-AM-510x504.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nA delicous manifestation of fruits and mint! The ZiiP Labs Zpods Iced Strawberry combines sweet zesty strawberries with a light kick of mint. ZiiP Pods are third party pre-filled salt nicotine cartridges compatible for a JUUL pod vaporizer.\nZiip Pods Iced Strawberry Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-118",
        title: "JUUL PODS Ice Watermelon – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.46.13-AM-510x503.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nExperiential bliss emanates from the art of inundating the senses in a world of savory extremes, which leave a lasting impression upon the palate in the most unforgettable ways. The Ziip Pods Iced Watermelon 4ct are manufactured to bring your senses’ perception of watermelon vapor as close as possible to actually tasting the seed itself. Each of these pods is filled to the brim with 1ml of nicotine salt based liquid, exclusively crafted to quench your cravings for nicotine. Made especially for Juul, these pods come with an exclusive strength of 5% salt nic. With this product, you will never be bound to settle for less!\nZiip Pods Iced Watermelon Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-119",
        title: "JUUL PODS Mango – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.41.01-AM-510x505.jpeg",
        desc: "Ziip Pods compatible with Juul Device\n\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nThis product bursts with flavors like Fruit Gushers® with ever inhalation, featuring a honeyed mango essence that sheathes the coating of the senses in their entirety. The Ziip Mango Pods allow for the manifestation of tropical mango flavors to pronounce themselves whenever the smoker takes their first drags, continually making themselves known throughout the vaping experience. ZiiP pods contain 1ml of salt eliquid, optimized to nourish the strongest nicotine cravings with zero compromises. This product is exclusively endowed with the nicotine strength of 5%. These pods have been synthesized to be compatible with Juul.\nZiip Pods Mango Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-120",
        title: "JUUL PODS Mint – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.43.53-AM-510x503.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nSo, you want to revitalize your senses without chewing or drinking anything? Look no further! Your favorite Ziip Mint Pods have come to your rescue! Let their menthol essence embrace your senses like a blanket embraces a child during a cold night, featuring an exquisite freshening on the breath that eclipses any previously remaining tastes in your mouth. Ziip pods contain 1ml of eliquid in each, comprised of nicotine salts that perfectly quench the cravings in one puffing session. These pods are synthesized to be compatible with Juul, offering an exclusive nicotine strength rating of 5%.\nZiip Pods Mint Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-121",
        title: "JUUL PODS Spearmint – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.38.22-AM-510x510.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nThe true paths to illumination are defined by the ability to tantalize the perceptual senses in ways which awaken and enlighten them. In this case, the Ziip Spearmint Pods hold the key to that mystery. Introducing a pervasive essence of spearmint goodness to jolt awake any part of the palate that is found deep in slumber, this blend proceeds to rush through the senses and perform a deep clean on any part of them that continue to possess latent attributes of previously consumed meals. This medium bodied concoction does its job right without sabotaging or overriding the threshold of the senses, always treated them with the utmost respect and leaving behind a rather pleasant sensation and aroma. The clouds that emanate from Ziip Pods are known to be thick in nature and are famous for leaving behind a refreshing aroma.\nZiip Pods Spearmint Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-122",
        title: "JUUL PODS Tobacco – Brand ZIIP 5% Nicotine – Pack of 4 Pods – 1ml",
        price: "1499",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-19-at-11.35.25-AM-510x513.jpeg",
        desc: "Ziip Pods compatible with Juul Device\nZiip pods are designed from the ground up to be the best disposable vapes. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nZiip pods are designed from the ground up to be the best alternative to existing Juul pods and flavors. Providing a unique selection of flavors, Ziip pods are the best way to expand your current Juul flavor collection and try out something new. Whether you’re looking for something traditional or a bit more exotic and fruity, Ziip pods by Ziip Labs have you covered.\nGot the cravings? ZiiP Pods Tobacco features flavors of medium blend tobacco with a smoky aromatic finish. Perfect for those who miss the taste of tobacco without the lingering smell. ZiiP Pods are third party pre-filled salt nicotine cartridges compatible for a JUUL pod vaporizer.\nZiip Pods Tobacco Features:\n\nJUUL Compatible Pods\n1ml pods\nNicotine salt formula\nPack of four"
    },
    {
        id: "product-123",
        title: "Unibar Blueberry Ice Nicotine Pouches – 10mg/17mg – 20 Pouches Per Pack",
        price: "1150",
        price2: "1250",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.01.40-e1721387952269-510x528.jpeg",
        desc: "Unibar Nicotine Pouches\nExperience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.\nUnibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.\nUnibar Nicotine Pouches Features:\nNicotine Content: Unibar Nicotine Pouches are available in various nicotine strengths, typically ranging from 3 mg to 17 mg per pouch.\nPouch Size: The pouches are generally small and slim, designed to fit comfortably under the lip.\nFlavor Options: Unibar Nicotine Pouches come in a variety of flavors.\nIngredients: These pouches are made with food-grade ingredients, ensuring safety and quality.\nPackaging: Unibar Nicotine Pouches are typically sold in small, portable containers, often holding 15 to 20 pouches per tin."
    },
    {
        id: "product-124",
        title: "Unibar Cool Storm Nicotine Pouches – 11mg – 20 Pouches Per Pack",
        price: "1150",
        price2: "1250",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.01.20-e1721388108263-510x515.jpeg",
        desc: "Unibar Nicotine Pouches\nExperience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.\nUnibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.\nUnibar Nicotine Pouches Features:\nNicotine Content: Unibar Nicotine Pouches are available in various nicotine strengths, typically ranging from 3 mg to 17 mg per pouch.\nPouch Size: The pouches are generally small and slim, designed to fit comfortably under the lip.\nFlavor Options: Unibar Nicotine Pouches come in a variety of flavors.\nIngredients: These pouches are made with food-grade ingredients, ensuring safety and quality.\nPackaging: Unibar Nicotine Pouches are typically sold in small, portable containers, often holding 15 to 20 pouches per tin."
    },
    {
        id: "product-125",
        title: "Unibar Freeze Nicotine Pouches – 11mg/17mg – 20 Pouches Per Pack",
        price: "1150",
        price2: "1250",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.02.41-e1721387801832-510x530.jpeg",
        desc: "Unibar Nicotine Pouches\nExperience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.\nUnibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.\nUnibar Nicotine Pouches Features:\nNicotine Content: Unibar Nicotine Pouches are available in various nicotine strengths, typically ranging from 3 mg to 17 mg per pouch.\nPouch Size: The pouches are generally small and slim, designed to fit comfortably under the lip.\nFlavor Options: Unibar Nicotine Pouches come in a variety of flavors.\nIngredients: These pouches are made with food-grade ingredients, ensuring safety and quality.\nPackaging: Unibar Nicotine Pouches are typically sold in small, portable containers, often holding 15 to 20 pouches per tin."
    },
    {
        id: "product-126",
        title: "Unibar Ice Cool Nicotine Pouches – 10mg – 20 Pouches Per Pack",
        price: "1150",
        price2: "1250",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.02.33-e1721388418314-510x495.jpeg",
        desc: "Unibar Nicotine Pouches\nExperience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.\nUnibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.\nUnibar Nicotine Pouches Features:\nNicotine Content: Unibar Nicotine Pouches are available in various nicotine strengths, typically ranging from 3 mg to 17 mg per pouch.\nPouch Size: The pouches are generally small and slim, designed to fit comfortably under the lip.\nFlavor Options: Unibar Nicotine Pouches come in a variety of flavors.\nIngredients: These pouches are made with food-grade ingredients, ensuring safety and quality.\nPackaging: Unibar Nicotine Pouches are typically sold in small, portable containers, often holding 15 to 20 pouches per tin."
    },
    {
        id: "product-127",
        title: "Unibar Polar Mint Nicotine Pouches – 6mg/17mg – 20 Pouches Per Pack",
        price: "1150",
        price2: "1250",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.01.35-e1721387477417-510x521.jpeg",
        desc: "Unibar Nicotine Pouches\nExperience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.\nUnibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.\nUnibar Nicotine Pouches Features:\nNicotine Content: Unibar Nicotine Pouches are available in various nicotine strengths, typically ranging from 3 mg to 17 mg per pouch.\nPouch Size: The pouches are generally small and slim, designed to fit comfortably under the lip.\nFlavor Options: Unibar Nicotine Pouches come in a variety of flavors.\nIngredients: These pouches are made with food-grade ingredients, ensuring safety and quality.\nPackaging: Unibar Nicotine Pouches are typically sold in small, portable containers, often holding 15 to 20 pouches per tin."
    },
    {
        id: "product-128",
        title: "Unibar Royal Purple Nicotine Pouches – 10mg – 20 Pouches Per Pack",
        price: "1150",
        price2: "1250",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-19-at-14.01.05-e1721388308754-510x540.jpeg",
        desc: "Unibar Nicotine Pouches\nExperience the convenience and satisfaction of Unibar Nicotine Pouches, the perfect alternative for those seeking a smoke-free and discreet nicotine solution. Unibar Nicotine Pouches are expertly crafted to deliver a smooth and satisfying nicotine experience, ideal for on-the-go use without the need for vaping or smoking. Each Unibar Nicotine Pouch is infused with high-quality nicotine, ensuring a consistent and enjoyable experience. These pouches are available in a variety of flavors, from refreshing mint to juicy fruit blends, catering to diverse taste preferences. With a user-friendly design, simply place the pouch under your lip for a long-lasting release of flavor and nicotine, providing a discreet and convenient way to satisfy your cravings.\nUnibar Nicotine Pouches are ideal for both new and experienced users looking for an effective nicotine delivery method without the hassle of traditional tobacco products. Their sleek, portable packaging makes them easy to carry and use anytime, anywhere. Elevate your nicotine experience with Unibar Nicotine Pouches. Enjoy the perfect combination of convenience, flavor, and satisfaction, and discover why Unibar is a top choice among nicotine pouch enthusiasts.\nUnibar Nicotine Pouches Features:\nNicotine Content: Unibar Nicotine Pouches are available in various nicotine strengths, typically ranging from 3 mg to 17 mg per pouch.\nPouch Size: The pouches are generally small and slim, designed to fit comfortably under the lip.\nFlavor Options: Unibar Nicotine Pouches come in a variety of flavors.\nIngredients: These pouches are made with food-grade ingredients, ensuring safety and quality.\nPackaging: Unibar Nicotine Pouches are typically sold in small, portable containers, often holding 15 to 20 pouches per tin."
    },
    {
        id: "product-129",
        title: "White Fox Pepper Mint Slim Nicotine Snus Pouch Made in Sweden – 12mg – 20 Pouches Per Pack",
        price: "1150",
        price2: "2000",
        image: "https://yoyovapes.com/wp-content/uploads/2024/07/white-fox-peppered-mint-nicotine-pouch-15mg-510x510.jpg",
        desc: "White Fox Peeper Mint Slim All White is an all white snus with high nicotine content of 12mg/g with extra fresh minty flavor.\nThe pouches are delivered in slim format and the portion “fleece bags” enables a better release of nicotine and taste, compared to the traditional portion material.\nCONTENT AND INFORMATION\nNicotine mg/pouch: 12mg\nFormat: Slim\nManufacturer: GN Tobacco\nDeclaration of content\nFiller (E460), xanthan gum (E415), nicotine, acidity regulator (E500), natural flavors, humectant (E1520)\nHow to use fox nicotine Pouches\nPlace it between your gum and lip. You’ll feel a tingling, hot sensation – that’s the nicotine being released. You can gently chew it a few times to release the nicotine. Keep the pouch between your gum and lip for a minimum of 5 minutes and a maximum of 60 minutes"
    }
]
const concated = combinedArray.concat(snusarr,regEj,iqos,coils,salt,disposable,juul)
const combinedArray_final = {combinedArray,snusarr,concated,regEj,iqos,coils,salt,disposable,juul}
export default combinedArray_final
