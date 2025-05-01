export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
}