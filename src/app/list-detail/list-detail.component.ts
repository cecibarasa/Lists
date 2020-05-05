import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

@Input() list: List;
@Output() isComplete = new EventEmitter<boolean>();

listDelete(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit(): void {
  }

}
