import { TarefaService } from './tarefa-service';
import { Tarefa } from './app/tarefa';

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
