
export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export enum PropertyStatus {
  ACTIVE = 'Aktif',
  SOLD = 'Satıldı',
  RENTED = 'Kiralandı',
  PENDING = 'Beklemede'
}

export enum PropertyType {
  RESIDENTIAL = 'Konut',
  COMMERCIAL = 'Ticari',
  LAND = 'Arsa',
  PROJECT = 'Proje'
}

export enum ListingCategory {
  SALE = 'Satılık',
  RENTAL = 'Kiralık'
}

export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  role: Role;
  createdAt: string;
}

export interface Activity {
  id: string;
  propertyId: string;
  date: string;
  clientName: string;
  clientPhone: string;
  clientBudget: string;
  status: 'Gösterildi' | 'Gösterilmedi' | 'İptal Edildi';
  notes: string;
  createdBy: string;
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  preferredRegions: string[];
  maxBudget: number;
  minRooms?: string;
  notes: string;
  lastContactDate: string;
  isHot: boolean; // Acil alıcı mı?
  createdBy: string;
}

export interface Task {
  id: string;
  title: string;
  date: string;
  time: string;
  priority: 'Düşük' | 'Orta' | 'Yüksek';
  isCompleted: boolean;
  createdBy: string;
}

export interface Property {
  id: string;
  title: string;
  category: ListingCategory;
  type: PropertyType;
  status: PropertyStatus;
  city: string;
  district: string;
  neighborhood: string;
  price: number;
  description: string;
  area?: number;
  rooms?: string;
  floor?: string; // Bulunduğu Kat
  totalFloors?: number; // Binadaki Toplam Kat
  buildingAge?: number;
  heating?: string;
  expectedCommission: number; 
  ownerName: string;
  ownerPhone: string;
  imageUrl: string;
  createdBy: string;
  createdAt: string;
}
