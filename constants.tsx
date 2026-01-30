
import { Role, User, Property, PropertyStatus, PropertyType, Activity, Task, ListingCategory } from './types.ts';

export const INITIAL_USERS: User[] = [
  { 
    id: 'u1', 
    name: 'Ahmet Yılmaz', 
    username: 'admin', 
    password: '123', 
    email: 'ahmet@emlak.com', 
    role: Role.ADMIN, 
    createdAt: new Date().toISOString() 
  },
  { 
    id: 'u2', 
    name: 'Ayşe Kaya', 
    username: 'danisman1', 
    password: '123', 
    email: 'ayse@emlak.com', 
    role: Role.USER, 
    createdAt: new Date().toISOString() 
  },
];

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: 'p1',
    title: 'Boğaz Manzaralı Lüks Rezidans',
    category: ListingCategory.SALE,
    type: PropertyType.RESIDENTIAL,
    status: PropertyStatus.ACTIVE,
    city: 'İstanbul',
    district: 'Beşiktaş',
    neighborhood: 'Bebek Mah.',
    price: 15500000,
    area: 185,
    rooms: '3+1',
    floor: '12. Kat',
    buildingAge: 5,
    heating: 'Merkezi Pay Ölçer',
    expectedCommission: 310000,
    description: 'Bebek sahil hattında, full boğaz manzaralı, özel dekorasyonlu lüks daire.',
    ownerName: 'Mehmet Bey',
    ownerPhone: '0555 111 22 33',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    createdBy: 'u2',
    createdAt: new Date().toISOString(),
  }
];

export const INITIAL_ACTIVITIES: Activity[] = [
  {
    id: 'a1',
    propertyId: 'p1',
    date: '2023-11-20',
    clientName: 'Can Tekin',
    clientPhone: '0532 987 65 43',
    clientBudget: '14.000.000 TL',
    status: 'Gösterildi',
    notes: 'Bütçe artırımı için görüşülecek.',
    createdBy: 'u2'
  }
];

export const INITIAL_TASKS: Task[] = [
  { id: 't1', title: 'Tapu Randevusu - Bebek Villa', date: new Date().toISOString().split('T')[0], time: '14:30', priority: 'Yüksek', isCompleted: false, createdBy: 'u1' },
  { id: 't2', title: 'Sözleşme Yenileme - Levent Ofis', date: new Date().toISOString().split('T')[0], time: '10:00', priority: 'Orta', isCompleted: true, createdBy: 'u1' }
];
