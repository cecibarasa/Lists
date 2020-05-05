import { Component, OnInit } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:List[] = [
    new List(1,'Eat','Ata sijui'),
    new List(2,'Study', 'Angular'),
    new List(3,'Make calls','You know it!'),
    new List(4,'Get Angular one hunnid','Skrrt!'),
  ];

  toggleDetails(index){
    this.list[index].showDescription = !this.list[index].showDescription;
  }
  completeList(isComplete, index){
    if (isComplete) {
      this.list.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}