import { TarefaService } from './tarefa-service';
import { Tarefa } from './app/tarefa';

import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent {
  private tarefaService: TarefaService;
  tituloTarefa: string = '';
  tarefas: Tarefa[] = [];

  constructor() {
    this.tarefaService = new TarefaService();
    this.atualizarLista();
  }

  adicionar() {
    if (this.tituloTarefa.trim() !== '') {
      this.tarefaService.adicionar(this.tituloTarefa);
      this.tituloTarefa = '';
      this.atualizarLista();
    }
  }

  remover(id: number) {
    this.tarefaService.remover(id);
    this.atualizarLista();
  }

  marcarConcluida(id: number) {
    this.tarefaService.marcarConcluida(id);
    this.atualizarLista();
  }

  atualizarLista() {
    this.tarefas = this.tarefaService.listar();
  }
}
