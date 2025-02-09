import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="flex flex-row gap-1">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-1">{news.date}</p>
        <h2 className="font-serif text-md mb-2">
          {news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 hover:text-zinc-600 transition-colors duration-300"
            >
              {news.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            news.title
          )}
        </h2>
        <p className="text-sm text-zinc-600">{news.description}</p>
      </div>
    </div>
  );
}
