import React, { useState, useEffect } from 'react';
import { portfolioItems } from '../data/portfolio';
import { services } from '../data/services';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    const observer = new MutationObserver(handleChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      observer.disconnect();
    };
  }, []);

  const updatedPortfolioItems = portfolioItems.map((item) => {
    if (item.id === '2') {
      return {
        ...item,
        imageUrl: isDarkMode
          ? '/images/WhiteAnand25Logo.png'
          : '/images/Anand25Logo.png',
      };
    }
    return item;
  });

  const filteredItems =
    activeFilter === 'all'
      ? updatedPortfolioItems
      : updatedPortfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Explore a collection of my recent work across various design
            disciplines. Each project reflects a unique approach tailored to the
            client's needs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Work
          </button>

          {services.map((service) => (
            <button
              key={service.slug}
              onClick={() => setActiveFilter(service.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === service.slug
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                {item.imageUrl.endsWith('.mp4') ? (
                  <video
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                  >
                    <source src={item.imageUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              {/* Only show overlay for non-video items */}
              {!item.imageUrl.endsWith('.mp4') && (
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none group-hover:pointer-events-auto">
                  <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-block px-3 py-1 bg-blue-600/80 rounded-full text-xs font-medium text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                    {services.find((service) => service.slug === item.category)
                      ?.title || item.category}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;