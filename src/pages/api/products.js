const products = [
    {
        id: 1,
        name: "Prove D3-1000 IU 10 Tablet",
        price: 54000,
        discount: 30,
        rating: 4.5,
        per: "Strip",
        imageURL: "/productImage/product1.svg",
        description: "PROVE D3-1000 IU, mengandung Vitamin D3 1000 IU untuk Memenuhi kebutuhan Vitamin D ",
        stock: 10,
        dosis: "Dewasa: 1 kali sehari, 1 kapsul lunak",
        kandungan: "Vitamin D3 (cholecalciferol) 1000 IU (25 mcg) ",
    },
    {
        id: 2,
        name: "Halowell D3 1000 IU 10 Tablet",
        price: 24000,
        discount: 20,
        rating: 4.5,
        per: "Strip",
        imageURL: "/productImage/product2.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
        stock: 15,
        dosis: "Dewasa: 1 kali sehari, 1 kapsul lunak",
        kandungan: "Vitamin D3 (cholecalciferol) 1000 IU (25 mcg) ",
    },
    {
        id: 3,
        name: "Vitamin D3 1000 IU IPI 75 Tablet",
        price: 12000,
        discount: 5,
        rating: 4.5,
        per: "Strip",
        imageURL: "/productImage/product3.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
        stock: 0,
        dosis: "Dewasa: 1 kali sehari, 1 kapsul lunak",
        kandungan: "Vitamin D3 (cholecalciferol) 1000 IU (25 mcg) ",
    },
    {
        id: 4,
        name: "Fortiboost Vitamin D3 1000 IU 30...",
        price: 98000,
        discount: 10,
        rating: 4.5,
        per: "Strip",
        imageURL: "/productImage/product4.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
        stock: 0,
        dosis: "Dewasa: 1 kali sehari, 1 kapsul lunak",
        kandungan: "Vitamin D3 (cholecalciferol) 1000 IU (25 mcg) ",
    },
    {
        id: 5,
        name: "Nutrimax Vitamin D3 1000 IU 60...",
        price: 140000,
        discount: 40,
        rating: 4.5,
        per: "Strip",
        imageURL: "/productImage/product5.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
        stock: 0,
        dosis: "Dewasa: 1 kali sehari, 1 kapsul lunak",
        kandungan: "Vitamin D3 (cholecalciferol) 1000 IU (25 mcg) ",
    },
    {
        id: 6,
        name: "HiVit Vitamin D3 1000 IU 6 Tablet",
        price: 21000,
        discount: 30,
        rating: 4.5,
        per: "Strip",
        imageURL: "/productImage/product6.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
        stock: 0,
        dosis: "Dewasa: 1 kali sehari, 1 kapsul lunak",
        kandungan: "Vitamin D3 (cholecalciferol) 1000 IU (25 mcg) ",
    },
  ];
  
  // Handler untuk endpoint API /api/products
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(products);
      console.log(products)
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  