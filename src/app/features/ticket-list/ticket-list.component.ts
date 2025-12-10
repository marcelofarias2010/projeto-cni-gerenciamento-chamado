import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TicketService } from '../../core/services/ticket.service';
import { Ticket } from '../../core/models/ticket.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  template: `
    <div class="card fadein animation-duration-500">
      <div class="flex flex-column md:flex-row justify-content-between align-items-start md:align-items-center mb-4 gap-3">
        <h2 class="m-0 text-primary-700">Meus Chamados</h2>
        <p-button 
            label="Novo Chamado" 
            icon="pi pi-plus" 
            routerLink="/create" 
            styleClass="p-button-primary w-full md:w-auto"> </p-button>
      </div>

      <p-table 
          [value]="(tickets$ | async)!" 
          [breakpoint]="'960px'"
          responsiveLayout="stack" 
          styleClass="p-datatable-striped shadow-2 border-round surface-card">
        
        <ng-template pTemplate="header">
          <tr>
            <th class="w-1">ID</th> <th class="w-3">Título</th>
            <th class="w-2">Categoria</th>
            <th class="w-6">Descrição</th>
          </tr>
        </ng-template>
        
        <ng-template pTemplate="body" let-ticket>
          <tr>
            <td><span class="p-column-title font-bold">ID</span>{{ ticket.id }}</td>
            <td><span class="p-column-title font-bold">Título</span><span class="font-bold">{{ ticket.title }}</span></td>
            <td>
              <span class="p-column-title font-bold">Categoria</span>
              <span class="p-tag p-tag-info text-sm">{{ ticket.category }}</span>
            </td>
            <td><span class="p-column-title font-bold">Descrição</span>{{ ticket.description }}</td>
          </tr>
        </ng-template>

        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="4" class="text-center p-4">Nenhum chamado encontrado.</td>
            </tr>
        </ng-template>
      </p-table>
    </div>
  `
})
export class TicketListComponent implements OnInit {
  private ticketService = inject(TicketService);
  tickets$!: Observable<Ticket[]>;

  ngOnInit() {
    this.tickets$ = this.ticketService.getTickets();
  }
}