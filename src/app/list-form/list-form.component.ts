import { Component, OnInit } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {
  newGoal = new List(0,"","",);
  constructor() { }

  ngOnInit(): void {
  }

}
