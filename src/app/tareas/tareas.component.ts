import { Component, OnInit } from '@angular/core';
import { ServiciotareasService } from '../service/serviciotareas.service';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
listaTareas: any[];
  constructor(private service:ServiciotareasService) { 
    this.listaTareas=[]
  }

  ngOnInit(): void {
    this.service.getTareas().then((data) => {
      console.log(data)
      this.listaTareas = data.data;
      console.log(this.listaTareas)
    })
  }

}
