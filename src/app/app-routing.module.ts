import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { AlterarComponent } from './pages/alterar/alterar.component';
import { ListarConcluidasComponent } from './pages/listar-concluidas/listar-concluidas.component';
import { ListarNaoConcluidasComponent } from './pages/listar-nao-concluidas/listar-nao-concluidas.component';

const routes: Routes = [
  {
    path: "",
    component: ListarComponent,
  },
  {
    path: "pages/tarefa/listar",
    component: ListarComponent,
  },
  {
    path: "pages/tarefa/cadastrar",
    component: CadastrarComponent,
  },
  {
    path: "pages/tarefa/alterar/:id",
    component: AlterarComponent,
  },
  {
    path: "pages/tarefa/concluidas",
    component: ListarConcluidasComponent
  },
  {
    path: "pages/tarefa/naoconcluidas",
    component: ListarNaoConcluidasComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
