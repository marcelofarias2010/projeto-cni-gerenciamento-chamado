import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// PrimeNG Imports
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { TicketService } from '../../core/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterModule,
    InputTextModule, 
    InputTextareaModule, 
    DropdownModule, 
    ButtonModule, 
    ToastModule
  ],
  providers: [MessageService], // Provider local para feedback
  template: `
    <p-toast></p-toast>
    <div class="flex justify-content-center p-4">
      <div class="card w-full md:w-6 p-4 surface-card shadow-2 border-round">
        <h2 class="mb-4">Novo Chamado</h2>
        
        <form [formGroup]="ticketForm" (ngSubmit)="onSubmit()" class="flex flex-column gap-3">
          
          <div class="flex flex-column gap-2">
            <label for="title">Título</label>
            <input pInputText id="title" formControlName="title" placeholder="Resumo do problema" />
            <small class="p-error" *ngIf="isFieldInvalid('title')">Título é obrigatório.</small>
          </div>
        
          <div class="flex flex-column gap-2">
            <label for="description">Descrição</label>
            <textarea 
              pInputTextarea 
              id="description" 
              formControlName="description" 
              rows="5" 
              class="w-full">
            </textarea>
            <small class="p-error" *ngIf="isFieldInvalid('description')">Descrição é obrigatória.</small>
          </div>

          <div class="flex flex-column gap-2">
            <label for="category">Categoria</label>
            <p-dropdown 
              [options]="categories" 
              formControlName="category" 
              placeholder="Selecione uma categoria"
              [style]="{'width':'100%'}">
            </p-dropdown>
          </div>

          <div class="flex justify-content-between mt-3">
            <p-button label="Voltar" icon="pi pi-arrow-left" styleClass="p-button-secondary p-button-text" routerLink="/list"></p-button>
            <p-button label="Salvar Chamado" icon="pi pi-check" type="submit" [loading]="loading"></p-button>
          </div>

        </form>
      </div>
    </div>
  `
})
export class TicketFormComponent {
  private fb = inject(FormBuilder);
  private ticketService = inject(TicketService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  loading = false;
  categories = ['Hardware', 'Software', 'Rede', 'Outro'];

  ticketForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: ['Software', Validators.required]
  });

  isFieldInvalid(field: string): boolean {
    const control = this.ticketForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.ticketForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Preencha todos os campos obrigatórios.' });
      this.ticketForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const { title, description, category } = this.ticketForm.value;

    this.ticketService.createTicket({ 
      title: title!, 
      description: description!, 
      category: category as any 
    }).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Chamado criado com sucesso!' });
        setTimeout(() => this.router.navigate(['/list']), 1000);
      },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Falha ao salvar chamado.' });
      }
    });
  }
}