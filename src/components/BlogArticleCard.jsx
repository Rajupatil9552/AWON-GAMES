import React from 'react';
import { Link } from 'react-router-dom';

const BlogArticleCard = ({ id, category, categoryColor, date, title, description, imageUrl, iconPlaceholder }) => {
    return (
        <article className="group bg-card-dark rounded-lg border border-white/5 overflow-hidden transition-all duration-300 card-hover-glow flex flex-col h-full">
            <Link to={`/blog/${id || 1}`} className="block relative h-56 overflow-hidden shrink-0">
                {imageUrl ? (
                    <img alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={imageUrl} />
                ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-600 text-5xl">{iconPlaceholder || 'image_search'}</span>
                    </div>
                )}
                <div className="absolute top-4 left-4">
                    <span className={`${categoryColor} backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest`}>
                        {category}
                    </span>
                </div>
            </Link>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">{date}</span>
                    <button className="text-slate-500 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">bookmark</span></button>
                </div>
                <Link to={`/blog/${id || 1}`}>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{title}</h3>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">{description}</p>
                <Link to={`/blog/${id || 1}`} className="text-primary text-sm font-bold flex items-center gap-2 group/link mt-auto w-fit">
                    Read More <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">trending_flat</span>
                </Link>
            </div>
        </article>
    );
};

export default BlogArticleCard;
