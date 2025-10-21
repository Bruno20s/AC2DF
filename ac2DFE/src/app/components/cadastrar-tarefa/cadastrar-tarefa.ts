import { Component } from '@angular/core';
import { TarefaService } from '../tarefa-service'
import { FormsModule } from '@angular/forms';

interface Tarefa {
   nome: string;
   descricao: string;
   concluido: boolean
}

@Component({
   selector: 'app-cadastrar-tarefa',
   imports: [FormsModule],
   templateUrl: './cadastrar-tarefa.html',
   styleUrl: './cadastrar-tarefa.css'
})
export class CadastrarTarefa {
   tarefa: Tarefa = {nome: '', descricao: '', concluido: false}

   constructor (private tarefaService: TarefaService) {}

   adicionar(): void {
      this.tarefaService.adicionar({...this.tarefa})
      this.tarefa = {nome: '', descricao: '', concluido: false}
   }
}