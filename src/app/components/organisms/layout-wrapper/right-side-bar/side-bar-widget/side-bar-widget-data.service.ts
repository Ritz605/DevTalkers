import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarWidgetDataService {
  getSideBarWidgetData() {
    return [
      {
        type: 'header',
        title: 'The Overflow Blog'
      },
      {
        type: 'item',
        title: 'Celebrating the Stack Exchange sites that turned ten years old in Q1 2022',
        icon: '✏️', // Replace with appropriate icon
        link: 'https://stackoverflow.blog/2022/03/16/celebrating-the-stack-exchange-site-that-turned-ten-years-old-in-q1-2022'
      },
      {
        type: 'item',
        title: 'New data: What makes developers happy at work',
        icon: '✏️', // Replace with appropriate icon
        link: 'https://stackoverflow.blog/2022/03/17/new-data-what-makes-developers-happy-at-work'
      },
      // Add more items as needed
    ];
  }
}