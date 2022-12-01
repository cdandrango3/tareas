import { Component, OnInit } from '@angular/core';
import { ServiciotareasService } from '../service/serviciotareas.service';
import axios from 'axios';
interface Tarea {
  description: string;
  status:number
  id_author:number,
  finish_at: string
}
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
listaTareas: any[];
listaTareasComplete: any[];
numero:number
tareas: Tarea={
  description: 's',
  status:0,
  id_author:3,
  finish_at: "2022-06-03T21:47:23.000Z"
};

  constructor(private service:ServiciotareasService) { 
    this.listaTareas=[]
    this.listaTareasComplete=[]
    this.numero=0
    
  }

  ngOnInit(): void {
    this.service.getTareas().then((data) => {
      console.log(data)
      this.listaTareas = data.data;
      console.log(this.listaTareas)
    this.listaTareasComplete = this.listaTareas.filter((tarea) => tarea.status == 1);
    this.numero=this.listaTareasComplete.length

    })
    
  }
  agregarTarea() {
    console.log(this.tareas)
    this.service.createTarea(this.tareas).then((data) => {
      console.log(data)
      this.listaTareas.push(data.data);
    })
  }
  actualizarEstado(id:number,indice:number){
    this.tareas.description=this.listaTareas[indice].description
    this.tareas.status=1
    this.service.updateTarea(this.tareas,id).then((data) => {
      this.listaTareasComplete=this.listaTareas.filter((tarea) => tarea.status == 1);
      this.numero=this.listaTareasComplete.length
    })
  }
  eliminarTarea(id: number) {
    this.service.deleteTarea(id).then((data) => {
      console.log(data)
      this.listaTareas = this.listaTareas.filter((tarea) => tarea.id !== id);
    })
  }

}
