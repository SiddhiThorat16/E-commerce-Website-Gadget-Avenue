import React, { useContext } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const cables = [
  {
    id: 1,
    name: "AmazonBasics USB-A to USB-C",
    price: "₹399",
    image: "../assets/AmazonBasics_USB_C.jpg",
  },
  {
    id: 2,
    name: "boAt Type-C Rapid Charger Cable",
    price: "₹299",
    image: "../assets/Boat_Type_C_Cable.jpg",
  },
  {
    id: 3,
    name: "MI 2-in-1 USB Cable",
    price: "₹249",
    image: "../assets/MI_2in1_Cable.png",
  },
  {
    id: 4,
    name: "Anker Powerline II Lightning Cable",
    price: "₹1,199",
    image: "../assets/Anker_Lightning_Cable.jfif",
  },
  {
    id: 5,
    name: "Portronics Konnect L POR-1060",
    price: "₹199",
    image: "../assets/Portronics_Konnect_L.jpg",
  },
  {
    id: 6,
    name: "Belkin Braided Lightning Cable",
    price: "₹1,499",
    image: "../assets/Belkin_Braided_Lightning.png",
  },
  {
    id: 7,
    name: "Stuffcool Type C to C Cable",
    price: "₹799",
    image: "../assets/Stuffcool_Type_C_to_C.jpg",
  },
  {
    id: 8,
    name: "Samsung Original USB-C Cable",
    price: "₹699",
    image: "../assets/Samsung_USB_C_Cable.jfif",
  },
  {
    id: 9,
    name: "OnePlus Warp Charge Type-C Cable",
    price: "₹799",
    image: "../assets/OnePlus_Warp_Cable.jpg",
  },
  {
    id: 10,
    name: "URBN Micro USB Fast Charging Cable",
    price: "₹159",
    image: "../assets/URBN_Micro_USB.jfif",
  },
  {
    id: 11,
    name: "Zebronics USB to Lightning Cable",
    price: "₹299",
    image: "../assets/Zebronics_Lightning_Cable.webp",
  },
  {
    id: 12,
    name: "Tukzer Nylon Braided USB-C Cable",
    price: "₹349",
    image: "../assets/Tukzer_Braided_USB_C.jpg",
  }
];

function CableProducts() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // For redirecting
    const handleBuyNow = () => {
      navigate("/payment");
    };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Charging & Data Cables</h2>
      <div className="row">
        {cables.map((item) => (
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
                <button className="btn btn-secondary w-100 mb-2" onClick={() => addToCart(cables)}> Add to Cart </button>
                <button className="btn btn-primary w-100" onClick={handleBuyNow}>         Buy Now </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CableProducts;


/*
During the late 16th century, the Mughal Empire was at its peak under Emperor **Akbar the Great**, known for his wisdom, diplomacy, and strong administration. He had a son, **Prince Salim**, who would later become **Emperor Jahangir**. Salim, raised in the lap of luxury, was destined to inherit one of the richest empires in the world. But his heart chose a path that defied royal expectations.

Enter **Anarkali**, a stunningly beautiful and graceful courtesan of Persian origin. Her name, which means “pomegranate blossom,” symbolized her radiant youth. She was an entertainer in the court of Akbar, skilled in music, poetry, and dance. As fate would have it, she caught the eye of the young prince Salim.

Their love blossomed in secret, away from the watchful eyes of the court. It was intense, passionate, and all-consuming. But in the rigidly structured world of royal politics, a relationship between a future emperor and a mere courtesan was not only scandalous — it was dangerous.

When Emperor Akbar came to know of this affair, he was furious. He believed this relationship threatened not only the dignity of the royal house but also the discipline of the prince, who was known for being rebellious. Akbar warned Salim to stay away from Anarkali. But love, by nature, refuses to obey.

Salim defied his father, declaring his love openly. This act of rebellion led to a severe rift between father and son. Some historical sources and legends even suggest that Salim attempted a revolt against Akbar, which was swiftly crushed by the emperor’s army.

The punishment for Anarkali was cruel. Though exact historical facts are debated, one of the most popular versions of the story says Akbar ordered that Anarkali be **buried alive** in a wall while Salim was kept away. It is said she was entombed behind a brick wall while still breathing, a slow, suffocating death meant to end not just her life, but the love that dared to rise above caste and class.

Before her death, some say she left a final message for Salim, carved on a wall or written in a secret note, expressing undying love.

Years later, when Salim became Emperor Jahangir, he built a mausoleum in Lahore — believed by many to be Anarkali’s tomb — with the inscription:

> “**Ta uss nāzuk badan ke sāye mein, harmūzam kiā hotā,
> Agar phir jindagī hotī to phir terī hi mohabbat hotī.**”
> (“Ah! Could I behold the face of my beloved once more,
> I would give away the empire of the world for a single sight of her.”)

---

### **Legacy**

Though historians debate how much of the story is fact and how much is legend, the tale of **Salim and Anarkali** continues to live on in Indian culture, inspiring countless poems, plays, books, and films. It is remembered as a tragic symbol of love caught in the crossfire of power and politics — a love that dared, but could not survive.

Would you like another true love story from a different part of the world or era?

*/