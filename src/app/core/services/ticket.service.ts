import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  // Mock inicial de dados
  private mockData: Ticket[] = [
    { id: '1', title: 'Erro no Outlook', description: 'Não consigo enviar e-mails', category: 'Software', createdAt: new Date() },
    { id: '2', title: 'Monitor piscando', description: 'O monitor desliga sozinho', category: 'Hardware', createdAt: new Date() }
  ];

  private ticketsSubject = new BehaviorSubject<Ticket[]>(this.mockData);

  getTickets(): Observable<Ticket[]> {
    // delay simula latência de rede
    return this.ticketsSubject.asObservable().pipe(delay(500));
  }

  createTicket(ticket: Omit<Ticket, 'id' | 'createdAt'>): Observable<Ticket> {
    const newTicket: Ticket = {
      ...ticket,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date()
    };
    
    const currentTickets = this.ticketsSubject.value;
    this.ticketsSubject.next([...currentTickets, newTicket]);
    
    return of(newTicket).pipe(delay(500));
  }
}