import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/images/IMG_3546.JPG" // Add your about section image path here
                alt="Designer workspace"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-6"></div>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Hi there! I'm a passionate designer with over 6 years of
              experience creating meaningful visual experiences that help brands
              connect with their audiences. My approach blends creativity with
              strategic thinking to deliver designs that not only look beautiful
              but also achieve business goals.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I believe in the power of thoughtful design to transform how
              people perceive and interact with brands. Whether it's crafting an
              identity system, designing a website, or creating content for
              social media, my focus is always on creating authentic,
              purpose-driven solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Skills
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">Graphics Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">Video Editing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">Brand Strategy</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">Web Development</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Tools
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">Adobe Creative Suite</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Davinci Resolve Studio
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">Git</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">VS Code</span>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;