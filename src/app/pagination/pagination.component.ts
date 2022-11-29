import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() {

  }

  // @Input()
  //  totalCount!: number;

  private _totalCount!: number;

  get totalCount(): number {
    return this._totalCount;
  }

  @Input()
  set totalCount(count: number) {
    this._totalCount = count;
    this.recalculate();
  }

  @Input()
  itemsPerPage!: number;

  @Output()
  selectPage = new EventEmitter<number>();

  pages: number[] = [];
  selectedPage: number = 1;

  onPageSelect(index: number) {
    this.selectPage.emit(index);
    this.selectedPage = index;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.recalculate();
  // }

  ngOnInit(): void {
    this.recalculate();
  }

  recalculate(): void {
    this.pages = [];
    for (let i = 1; i <= Math.ceil(this.totalCount / this.itemsPerPage); i++) {
      this.pages.push(i);
    }
    if (this.pages.length == 1) {
      this.pages = [];
    }
    this.selectedPage = 1;
  }

}
