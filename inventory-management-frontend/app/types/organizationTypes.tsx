export interface OrganizationFormData {
  name: string;
  businessType: string;
  country: string;
  currency: string;
}

export enum BusinessType {
  Restaurant = 'restaurante',
  Bakery = 'panaderia',
  Catering = 'catering',
  CoffeeShop = 'cafeteria',
  Other = 'otro'
}