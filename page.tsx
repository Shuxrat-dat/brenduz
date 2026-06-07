"use client";

import { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  price: number;
};

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      if (Array.isArray(data)) {
        setProducts(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const createProduct = async () => {
    try {
      await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          price: Number(price),
        }),
      });

      setTitle("");
      setPrice("");

      await loadProducts();

      alert("Товар добавлен");
    } catch (error) {
      console.error(error);
      alert("Ошибка добавления товара");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Админ-панель
      </h1>

      <div className="max-w-xl bg-white/5 p-8 rounded-3xl">
        <input
          value={title}
          placeholder="Название товара"
          className="w-full p-3 mb-4 rounded-xl bg-black border border-white/10"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          value={price}
          placeholder="Цена"
          className="w-full p-3 mb-4 rounded-xl bg-black border border-white/10"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          onClick={createProduct}
          className="w-full p-3 rounded-xl bg-white text-black font-bold"
        >
          Добавить товар
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-5">
          Все товары
        </h2>

        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white/5 p-4 rounded-2xl mb-3"
          >
            <h3 className="text-xl font-bold">
              {product.title}
            </h3>

            <p>{product.price} сум</p>
          </div>
        ))}
      </div>
    </main>
  );
}