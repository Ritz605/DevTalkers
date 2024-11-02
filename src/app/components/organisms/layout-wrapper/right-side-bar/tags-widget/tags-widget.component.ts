import { Component, OnInit } from '@angular/core';
import { TagsService } from './tags.service';
import { TagsWidgetItemComponent } from './tags-widget-item/tags-widget-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags-widget',
  standalone: true,
  imports: [TagsWidgetItemComponent, CommonModule],
  templateUrl: './tags-widget.component.html',
  styleUrls: ['./tags-widget.component.css']
})
export class TagsWidgetComponent implements OnInit {
  tags = [];
  loading = true;
  numList = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

  constructor(private tagsService: TagsService) {}

  ngOnInit() {
    this.tagsService.getTags().subscribe(data => {
      this.tags = data;
      this.loading = false;
    });
  }
}