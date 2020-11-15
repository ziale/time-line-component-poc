import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent{

  @Output()
  selection: EventEmitter<string[]> = new  EventEmitter();

  items = ["1992-05-21", "2000-09-01 - 2000-09-01", "2008-07-06"];
  selectedItems  = [];

  isSelected(item) {
    return this.selectedItems.includes(item);
  }

  selectItem(item: string) {
    const index = this.selectedItems.findIndex(element => element === item);
    if(index !== -1) {
      this.selectedItems.splice(index,1)
    } else {
      this.selectedItems.push(item);
    }
    this.selection.emit(this.selectedItems)
  }

  clearSelection() {
    this.selectedItems = [];
    this.selection.emit([])
  }

}