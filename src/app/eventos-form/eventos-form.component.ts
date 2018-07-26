import { Component, OnInit } from '@angular/core';
import { Evento } from '../recursos/Evento';

@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {

  model = new Evento('0', 'Seminario chido', '28/07/2018', 200, 0);
  submitted = false;

  onSubmit() { this.submitted = !this.submitted; }

  constructor() { }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
