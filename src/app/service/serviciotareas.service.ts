import { Injectable } from '@angular/core';
import axios from 'axios';
interface Tarea {
  description: string;
  status:number
  id_author:number,
  finish_at: string
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
    const response = await axios.post(this.path +"?id_author="+this.id_author, tareas);
    return response.data;
  }
   async updateTarea(tareas: Tarea,id:number) {
    const response = await axios.put(this.path+id, tareas);
    return response.data;
   }
    async deleteTarea(id: number) {
    const response = await axios.delete(this.path + id);
    return response.data;
    }
  }
