import { Heart, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">BREND.UZ</h1>

        <div className="flex items-center gap-8">
<a href="/catalog" className="hover:text-gray-300 transition">
  Каталог
</a>

<a href="/contacts" className="hover:text-gray-300 transition">
  Контакты
</a>

          <Heart className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}