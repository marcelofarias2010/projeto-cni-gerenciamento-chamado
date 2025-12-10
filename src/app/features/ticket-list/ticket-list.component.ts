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
    <div class="card p-4">
      <div class="flex justify-content-between align-items-center mb-4">
        <h2>Meus Chamados</h2>
        <p-button styleClass="p-button-info" label="Novo Chamado" icon="pi pi-plus" routerLink="/create"></p-button>
      </div>

      <p-table styleClass="p-datatable-striped p-datatable-sm shadow-2 border-round" [value]="(tickets$ | async)!" [tableStyle]="{ 'min-width': '50rem' }" responsiveLayout="scroll">
        <ng-template pTemplate="header">
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Descrição</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-ticket>
          <tr>
            <td>{{ ticket.id }}</td>
            <td class="font-bold">{{ ticket.title }}</td>
            <td>
              <span class="p-tag p-tag-info">{{ ticket.category }}</span>
            </td>
            <td>{{ ticket.description }}</td>
          </tr>
        </ng-template>
        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="4">Nenhum chamado encontrado.</td>
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
