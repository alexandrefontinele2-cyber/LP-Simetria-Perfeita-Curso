export interface ModuleItem {
  id: number;
  title: string;
  badge: string;
  description: string;
  lessons: string[];
  duration: string;
  keyDeliverable: string;
}

export interface BonusItem {
  id: number;
  title: string;
  tag: string;
  originalPrice: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  clinic: string;
  location: string;
  metric: string;
  quote: string;
  highlight: string;
  avatarSeed: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'curso' | 'acesso' | 'garantia' | 'pagamento';
}
