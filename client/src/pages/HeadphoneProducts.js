import React, { useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const headphones = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    price: "₹29,990",
    image: "../assets/Sony_WH_1000XM5.webp",
  },
  {
    id: 2,
    name: "Bose QuietComfort 45",
    price: "₹27,000",
    image: "../assets/Bose_QC_45.jfif",
  },
  {
    id: 3,
    name: "Apple AirPods Max",
    price: "₹59,900",
    image: "../assets/AirPods_Max.webp",
  },
  {
    id: 4,
    name: "JBL Live 660NC",
    price: "₹11,999",
    image: "../assets/JBL_Live_660NC.jfif",
  },
  {
    id: 5,
    name: "Boat Nirvana 751ANC",
    price: "₹3,999",
    image: "../assets/Boat_Nirvana_751ANC.jfif",
  },
  {
    id: 6,
    name: "Sennheiser HD 450BT",
    price: "₹7,490",
    image: "../assets/Sennheiser_HD_450BT.jfif",
  },
  {
    id: 7,
    name: "Realme Buds Wireless 3",
    price: "₹1,799",
    image: "../assets/Realme_Buds_Wireless_3.png",
  },
  {
    id: 8,
    name: "OnePlus Bullets Wireless Z2",
    price: "₹1,999",
    image: "../assets/OnePlus_Bullets_Z2.png",
  },
  {
    id: 9,
    name: "Noise Cancelling Headphones 700",
    price: "₹34,500",
    image: "../assets/Bose_700.jfif",
  },
  {
    id: 10,
    name: "Marshall Major IV",
    price: "₹14,999",
    image: "../assets/Marshall_Major_IV.jfif",
  },
  {
    id: 11,
    name: "Skullcandy Crusher Evo",
    price: "₹12,999",
    image: "../assets/Skullcandy_Crusher_Evo.jfif",
  },
  {
    id: 12,
    name: "Zebronics Zeb-Rush",
    price: "₹999",
    image: "../assets/Zebronics_Zeb_Rush.jfif",
  },
];

function HeadphoneProducts() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // For redirecting
  const handleBuyNow = () => {
    navigate("/payment");
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Headphones & Accessories</h2>
      <div className="row">
        {headphones.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top product-img"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-secondary w-100 mb-2" onClick={() => addToCart(headphones)}> Add to Cart </button>
                <button className="btn btn-primary w-100" onClick={handleBuyNow}>         Buy Now </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeadphoneProducts;


/*
###  रोमांटिक शायरी

**1.**
तुम्हारी हँसी मेरे दिल की दवा बन गई,
तेरे होने से मेरी दुनिया जवा बन गई।
हर साँस में बस तेरा ही नाम है,
तू पास है तो सब कुछ आसान है।

**2.**
तू मिले या ना मिले, ये मेरी तक़दीर है,
पर तुझसे मोहब्बत मेरी तहरीर है।
तेरे बिना जीना अब लगता नहीं,
क्योंकि तू ही मेरी ज़िंदगी की तस्वीर है।

**3.**
तेरे साथ हर लम्हा खास लगता है,
तेरी आँखों में मुझे आसमां सा एहसास लगता है।
तेरे बिना जो भी जिया वो अधूरा था,
अब हर पल तुझसे जीने की प्यास लगता है।

---

###  दिल तोड़ने वाली शायरी

**1.**
मोहब्बत करके भी जो अपना न बन सके,
वो लोग बहुत अजीब होते हैं।
कसमों में भी झूठ होता है कभी-कभी,
और दिल तोड़ने वाले भी करीब होते हैं।

**2.**
कभी सोचा ना था यूँ जुदा हो जाओगे,
हर मोड़ पर मुझे तन्हा छोड़ जाओगे।
तुम्हारी यादें अब भी साँसों में बसती हैं,
पर तुम हो कि ख्वाबों से भी दूर जाओगे।

**3.**
जिसे चाहा उसे ही खो दिया,
दिल को दर्द का रास्ता दिखा दिया।
वो मुस्कुरा के चल दिए मेरी दुनिया से,
और मैंने अश्कों से दिल को सिला दिया।






Here are some beautiful and popular **shayari** by well-known poets in pure text form:

---

**1. Mirza Ghalib**
*Hazāroñ ḳhvāhisheñ aisī ki har ḳhvāhish pe dam nikle,*
*Bahut nikle mire armān lekin phir bhī kam nikle.*

(Thousands of desires, each worth dying for,
Many of them were fulfilled — yet still too few.)

---

**2. Faiz Ahmed Faiz**
*Gulon mein rang bhare, baad-e-naubahār chale,*
*Chale bhi aao ki gulshan ka kārwāñ chale.*

(May the spring breeze bring color to the flowers again,
Come back, so the garden’s procession may resume.)

---

**3. Rahat Indori**
*Sabhi ka ḳhūn hai shaamil yahāñ kī mittī meñ,*
*Kisī ke bāp kā Hindustān thodī hai?*

(This soil has the blood of everyone,
India doesn't belong to just one person's father.)

---

**4. Ahmad Faraz**
*Suna hai bolē to baaton se phūl jhaṛte haiñ,*
*Ye baat hai to chalo baat karke dekhte haiñ.*

(I’ve heard that when she speaks, flowers bloom,
If that’s true, let’s try talking to her.)

---

**5. Gulzar**
*Dil dhoondta hai phir wahi fursat ke raat din,*
*Baithhe rahein tasavvur-e-jaanaañ kiye hue.*

(The heart longs again for those carefree nights and days,
When I sat quietly, imagining the one I loved.)

---

**6. Jaun Elia**
*Shayad mujhe kisi se mohabbat nahi hui,*
*Lekin yaqeen sab ko dilata raha hoon main.*

(Maybe I never truly fell in love with anyone,
But I kept convincing everyone I did.)

---

Would you like romantic, sad, motivational, or humorous shayari next?

*/