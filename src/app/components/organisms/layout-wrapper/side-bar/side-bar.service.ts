import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarDataService {
  getSideBarData() {
    return [
      {
        link: '/questions',
        icon: '🌐', // Replace with appropriate icon
        text: 'Questions'
      },
      {
        link: '/tags',
        text: 'Tags'
      },
      {
        link: '/users',
        text: 'Users'
      },
      {
        link: '/jobs',
        text: 'Jobs'
      }
    ];
  }
}