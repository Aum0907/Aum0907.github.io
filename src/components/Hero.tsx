import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-pattern opacity-20"></div>
      
      <div className="container mx-auto px-6 pt-28 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
              <span className="block">Elevate Your Brand</span>
              <span className="block text-blue-400">With Creative Design</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg animate-fadeIn animation-delay-200">
              Transforming ideas into visually stunning experiences. 
              Specializing in graphic design, web development, video creation, 
              and social media management.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-400">
              <a 
                href="#portfolio" 
                className="px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Portfolio
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-md bg-transparent border border-white hover:bg-white/10 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative animate-fadeIn animation-delay-600">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-16 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
              
              <div className="relative">
                <img 
                  src="/images/IMG_3049.png" // Add your hero image path here
                  alt="Creative workspace" 
                  className="rounded-lg shadow-2xl object-cover h-64 sm:h-80 md:h-96 w-full" // Adjusted height for smaller screens
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,165.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;