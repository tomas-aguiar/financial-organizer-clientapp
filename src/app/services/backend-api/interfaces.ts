export interface Category {
  id: number;
  name: string;
}

export interface Flexibility {
  id: number;
  name: string;
}

export interface Order {
  id: number;
  name: string;
}

export interface Periodicity {
  id: number;
  name: string;
}

export interface Type {
  id: number;
  name: string;
}

export interface SubCategory {
  id: number;
  name: string;
  categoryId: number;
  category: Category;
  periodicityId: number;
  periodicity: Periodicity;
  orderId: number;
  order: Order;
  flexibilityId: number;
  flexibility: Flexibility;
}

export interface Transaction {
  id: number;
  category: string;
  subCategory: string;
  type: string;
  value: number;
  date: string;
  info: string;
}
