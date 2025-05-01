import React from 'react';
import { services } from '../data/services';
import { 
  Palette, Monitor, Video, Instagram, Layout, Badge
} from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'palette':
        return <Palette className="h-10 w-10 text-blue-600" />;
      case 'monitor':
        return <Monitor className="h-10 w-10 text-blue-600" />;
      case 'video':
        return <Video className="h-10 w-10 text-blue-600" />;
      case 'instagram':
        return <Instagram className="h-10 w-10 text-blue-600" />;
      case 'layout':
        return <Layout className="h-10 w-10 text-blue-600" />;
      case 'badge':
        return <Badge className="h-10 w-10 text-blue-600" />;
      default:
        return <Palette className="h-10 w-10 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group">
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Providing creative solutions tailored to your brand's unique needs. 
            Each service is designed to help your business stand out and connect with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;