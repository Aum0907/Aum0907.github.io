import React from 'react';
import { testimonials } from '../data/testimonials';

// Define the Testimonial type for TypeScript
interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-blue-300 text-sm">{testimonial.role}, {testimonial.company}</p>
              </div>

              <blockquote className="text-blue-100 italic mb-4">
                "{testimonial.testimonial}"
              </blockquote>

              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
