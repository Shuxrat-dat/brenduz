export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-30 animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full blur-[180px] opacity-30 animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full blur-[180px] opacity-30 animate-pulse"></div>
      </div>

      <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl">
        Premium Fashion Store
      </span>

      <h1 className="text-8xl font-black mt-8">
        BREND.UZ
      </h1>

      <p className="mt-6 text-gray-300 text-xl max-w-2xl">
        Современная брендовая одежда для мужчин и женщин.
        Лучшие коллекции и тренды сезона.
      </p>

      <div className="flex gap-4 mt-10">
        <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold">
          Каталог
        </button>

        <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl">
          Новинки
        </button>
      </div>
    </section>
  );
}