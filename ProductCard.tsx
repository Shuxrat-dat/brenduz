type Props = {
  title: string;
  price: string;
};

export default function ProductCard({
  title,
  price,
}: Props) {
  return (
    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition">
      <div className="h-80 bg-gradient-to-br from-zinc-800 to-zinc-900"></div>

      <div className="p-5">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-400 mt-2">
          Premium Collection
        </p>

        <div className="flex justify-between items-center mt-6">
          <span className="font-bold text-2xl">
            {price}
          </span>

          <button className="px-4 py-2 rounded-xl bg-white text-black">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}