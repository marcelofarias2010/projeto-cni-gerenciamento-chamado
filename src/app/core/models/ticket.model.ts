export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: 'Hardware' | 'Software' | 'Rede' | 'Outro';
  createdAt: Date;
}