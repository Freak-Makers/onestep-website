export interface PortfolioItem {
  name: string;
  category: string;
  image: string;
}

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl mb-3 aspect-[4/3] bg-slate-100 dark:bg-slate-800 shadow-sm group-hover:shadow-md transition-shadow">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-sm font-bold border border-white/80 px-5 py-2 rounded-full">
            자세히 보기
          </span>
        </div>
      </div>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{item.name}</h4>
      <p className="text-xs text-slate-400 dark:text-slate-500">{item.category}</p>
    </div>
  );
}
