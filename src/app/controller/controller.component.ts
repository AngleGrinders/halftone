import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
  providers: [NgbPaginationConfig]
})
export class ControllerComponent implements OnInit {

  private mState: StateService;
  public isCollapsed = false;

  // Paginator variables
  // TODO get the collectionSize from StateService
  collectionSize = 9;
  page = 1;
  maxSize = 2;
  title = "Diag";


  constructor(private state: StateService, private config: NgbPaginationConfig) {
    this.mState = state;
    // customize default values of paginations used by this component tree
    config.size = 'lg';
    config.boundaryLinks = true;
    config.pageSize = 3;
    config.maxSize = 3;
  }

  ngOnInit()
  {
  }

  prev(): void {
    let index = this.mState.getIndex();
    if (index > 1) {
      location.hash = "#" + (index - 1);
      this.page = index - 1 ;
    }
  }

  next(): void {
    let index = this.mState.getIndex();
    if (true) //TODO: limit by number of dots
    {
      location.hash = "#" + (index + 1);
      this.page = index + 1;
    }
  }
  pageChange(page: number): void{
    location.hash = "#" + (page);
  }

  togleShowEditor(): void {
   this.mState.togleShowEditor();
  }
}
