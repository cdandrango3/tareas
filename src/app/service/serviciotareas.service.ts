import { Injectable } from '@angular/core';
import axios from 'axios';
interface Tarea {
  descripcion: string;
  status:number
  id_author:3,
  finish_at: "2022-06-03T21:47:23.000Z"
}
@Injectable({
  providedIn: 'root'
})
export class ServiciotareasService {
path:string 
id_author:number
  constructor() {
    this.path = 'https://bp-todolist.herokuapp.com/';
    this.id_author=3
  }
  async getTareas() {
    const response = await axios.get(this.path +"?id_author="+this.id_author);
    return response.data;
  }
  async createTarea(tareas: Tarea) {
    const response = await axios.post(this.path +"?id_author="+this.id_author, {tareas});
    return response.data;
  }
   async updateTarea(tareas: Tarea,id:number) {
    const response = await axios.put(this.path+id, {tareas});
    return response.data;
   }
    async deleteTarea(id: number) {
    const response = await axios.delete(this.path + id);
    return response.data;
    }
  }
