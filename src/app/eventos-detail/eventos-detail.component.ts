import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../recursos/Evento';

@Component({
  selector: 'app-eventos-detail',
  templateUrl: './eventos-detail.component.html',
  styleUrls: ['./eventos-detail.component.css']
})
export class EventosDetailComponent implements OnInit {
  @Input() event: Evento;

  constructor() { }

  ngOnInit() {
  }

}
