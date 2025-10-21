import { Injectable } from '@angular/core';

export interface Tarefa {
   nome: string;
   descricao: string;
   concluido: boolean
}

@Injectable({
   providedIn: 'root'
})

export class TarefaService {
   private tarefas = [
      { nome: 'dar comida pro cachorro', descricao: 'ração para o cachorro', concluido: false },
      { nome: 'fazer bolo', descricao: 'fazer bolo de aniversario', concluido: false }
   ]

   contador: number = this.tarefas.length

   listar(): Tarefa[] {
      return this.tarefas;
   }

   adicionar(tarefa: Tarefa): void {
      this.tarefas.push(tarefa)
   }

   remover(index: number): void {
      this.tarefas.splice(index, 1)
   }

   marcarConcluida(index: number): void {
      this.tarefas[index].concluido = true;
   }

   
}