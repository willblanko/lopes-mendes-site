export interface Lawyer {
  name: string;
  photo: string;
  role?: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  href: string;
}

export interface NewsItem {
  date: string;
  category?: string;
  title: string;
  excerpt?: string;
  href: string;
  featured?: boolean;
}

export interface OfficeLocation {
  city: string;
  address: string;
  cep: string;
  state: string;
  phone: string;
}
