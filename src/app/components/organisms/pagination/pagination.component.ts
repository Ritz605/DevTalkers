import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgbPaginationModule, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() itemList: any[] = [];
  @Input() itemsPerPage: number = 10;
  @Output() paginationChange = new EventEmitter<number>();

  get pageCount(): number {
    return Math.ceil(this.itemList.length / this.itemsPerPage);
  }

  onPageChange(event: any): void {
    this.paginationChange.emit(event.page);
  }
}