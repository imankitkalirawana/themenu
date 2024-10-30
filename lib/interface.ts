export type role = 'admin' | 'moderator' | 'client';

interface Base {
  _id: string;
  addedBy: string;
  modifiedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Credentials {
  id: string;
  password: string;
  role: role;
}

export interface User extends Base {
  email: string;
  phone: string;
  password: string;
  name: string;
  role: 'admin' | 'moderator';
}

export interface Client extends Base {
  name: string;
  email: string;
  phone: string;
  address: string;
  plan?: string;
  expiringOn?: string;
  role: 'client';
  password: string;
}

export interface SubscriptionPlan extends Base {
  codename: string;
  name: string;
  price: number;
  interval: 'monthly' | 'yearly';
  features: string[];
  description?: string;
  isRecommended?: boolean;
  trialDays?: number;
}
