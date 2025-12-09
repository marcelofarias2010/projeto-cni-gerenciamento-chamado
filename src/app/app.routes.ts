import { Routes } from '@angular/router';
import { TicketListComponent } from './features/ticket-list/ticket-list.component';
import { TicketFormComponent } from './features/ticket-form/ticket-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TicketListComponent },
  { path: 'create', component: TicketFormComponent },
  { path: '**', redirectTo: 'list' }
];