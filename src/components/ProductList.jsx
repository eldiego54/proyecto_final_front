"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Modal_compra from "./Modal_compra";



const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await axios.get("http://localhost:3001/product_cart");
        setProducts(res.data);
      } catch (err) {
        console.error("Error loading products", err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Cargando productos...</p>;

  return (
    <section className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {products.map(product => (
        <article key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img src={product.image} alt={product.name} className="w-fit h-auto object-cover rounded mb-3" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-sm text-gray-400">{product.category}</p>
          <Modal_compra product={product} />
        </article>
      ))}
    </section>
  )
};

export default ProductList;

