import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <section className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center justify-between gap-20 px-6">
        <div className="max-w-2xl">
          <p className="mb-2 text-blue-500">Welcome to TechStore</p>

          <h1 className="mb-6 text-7xl font-bold leading-tight text-white">
            Modern Technology.
            <br />
            Delivered Simplicity.
          </h1>
          <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
          <p className="mb-8 text-lg text-slate-400">
            Discover premium laptops, smartphones and accessories at unbeatable
            prices.
          </p>

          <Link
            to="/products"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-duration-300 hover:scale-105 hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>

        <div>
          <img
            src="images/hero.jpg"
            alt="TechStore Hero"
            className="h-[500px] w-[800px] rounded-3xl border border-slate-800 object-cover object-right gap-32 shadow-2xl shadow-blue-500/10"
          ></img>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Categories
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
            <img
              src="/images/maccbook.webp"
              className="mb-4 h-40 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
            ></img>
            <h3 className="text-2xl font-semibold text-white">Laptops</h3>
          </div>

          <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
            <img
              src="/images/Iphone.jpg"
              className="mb-4 h-40 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
            ></img>
            <h3 className="text-2xl font-semibold text-white">Smartphones</h3>
          </div>

          <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
            <img
              src="/images/setuppgaming.jpg"
              className="mb-4 h-40 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
            ></img>
            <h3 className="text-2xl font-semibold text-white">Components</h3>
          </div>
        </div>
      </section>
    </div>
  );
};
