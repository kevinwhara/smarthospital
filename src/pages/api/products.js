const products = [
    {
        id: 1,
        name: "Prove D3-1000 IU 10 Tablet",
        price: 54000,
        discount: 30,
        rating: 4.5,
        per: "strip",
        imageURL: "/image/productImage/product1.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
    },
    {
        id: 2,
        name: "Halowell D3 1000 IU 10 Tablet",
        price: 24,
        discount: 30,
        rating: 4.5,
        per: "strip",
        imageURL: "/image/productImage/product2.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
    },
    {
        id: 3,
        name: "Vitamin D3 1000 IU IPI 75 Tablet",
        price: 54,
        discount: 30,
        rating: 4.5,
        per: "strip",
        imageURL: "/image/productImage/product3.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
    },
    {
        id: 4,
        name: "Prove D3-1000 IU 10 Tablet",
        price: 54,
        discount: 30,
        rating: 4.5,
        per: "strip",
        imageURL: "/image/productImage/product4.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
    },
    {
        id: 5,
        name: "Prove D3-1000 IU 10 Tablet",
        price: 54,
        discount: 30,
        rating: 4.5,
        per: "strip",
        imageURL: "/image/productImage/product5.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
    },
    {
        id: 6,
        name: "Prove D3-1000 IU 10 Tablet",
        price: 54,
        discount: 30,
        rating: 4.5,
        per: "strip",
        imageURL: "/image/productImage/product6.svg",
        description: "intine vitamin yang membuat tubuhmu kuat seperti pahlawan tanpa celana",
    },
    // Tambahkan produk lainnya di sini
  ];
  
  // Handler untuk endpoint API /api/products
  export default function handler(req, res) {
    // Metode HTTP GET digunakan untuk mengambil data produk
    if (req.method === 'GET') {
      // Mengirimkan data produk sebagai respons
      res.status(200).json(products);
      console.log(products)
    } else {
      // Metode HTTP lainnya tidak didukung
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  