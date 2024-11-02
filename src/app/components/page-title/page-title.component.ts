import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-title',
  template: '',
})
export class PageTitleComponent implements OnInit {
  @Input() title: string = '';
  defaultTitle: string = 'CLONE Stack Overflow - Where Developers Learn, Share, & Build Careers';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title || this.defaultTitle);
  }
}