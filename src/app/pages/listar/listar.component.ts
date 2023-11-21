import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

  export class ListarComponent {
    colunasTabela: string[] = [
      "id",
      "titulo",
      "descricao",
      "dataDeCriacao",
      "concluida"
    ];

    tarefas: Tarefa[] = [];
  
    constructor(
      private client: HttpClient      
    ){
      //Um problema de CORS ao fazer uma requisição para a
      //nossa API
    }
  
    ngOnInit(): void {
      this.client
        .get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
        .subscribe({
          //Requisição com sucesso
          next: (tarefas) => {
            console.table(tarefas);
            this.tarefas = tarefas;
          },
          //Requisição com erro
          error: (erro) => {
            console.log(erro);
          },
        });
    }
}
