import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

 

export class CadastrarComponent {
      id: number = 0;
      titulo: string = "";
      descricao: string = "";
      dataDeCriacao: string = "";
      concluida: boolean = false;
  snackBar: any;
      
    
      constructor(
        private client: HttpClient,
        private router: Router,
        
      ) {}
    
      ngOnInit(): void {
      
      }
    
      cadastrar(): void {
        let tarefa: Tarefa = {
          titulo: this.titulo,
          descricao: this.descricao,
          id: 0,
          concluida: false
        };
    
        this.client
          .post<Tarefa>(
            "https://localhost:7195/api/tarefa/cadastrar",
            tarefa
          )
          .subscribe({
            //A requição funcionou
            next: (produto) => {
              this.snackBar.open(
                "Produto cadastrado com sucesso!!",
                "E-commerce",
                {
                  duration: 1500,
                  horizontalPosition: "right",
                  verticalPosition: "top",
                }
              );
              this.router.navigate(["pages/produto/listar"]);
            },
            //A requição não funcionou
            error: (erro) => {
              console.log(erro);
            },
          });
      }
    }