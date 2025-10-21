import { Routes } from '@angular/router';
import { CadastrarTarefa } from './components/cadastrar-tarefa/cadastrar-tarefa';
import { ListarTarefa } from './components/lista-tarefas/lista-tarefas';

export const routes: Routes = [
    { path: 'cadastrar-tarefa', component: CadastrarTarefa},
  { path: 'lista-tarefas', component: ListarTarefa},
];
