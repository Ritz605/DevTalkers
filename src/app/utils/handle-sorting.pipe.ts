// src/app/pipes/sorting.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
  standalone: true
})
export class SortingPipe implements PipeTransform {

  transform(items: any[], sortType: string, page: string = ''): any[] {
    if (!items || !sortType) {
      return items;
    }

    let temp = sortType;

    if (page === 'users' && temp === 'Name') {
      temp = 'Username';
    } else if (page === 'users' && temp === 'Popular') {
      temp = 'Popular users';
    }

    const todayDate = Date.now();

    function getTime(a: string): number {
      return new Date(a).getTime();
    }

    const milliSecDay = 86300000;
    const milliSecWeek = 604800000;
    const milliSecMonth = 2628000000;
    const milliSecYear = 31540000000;

    const sortFunction = (a: any, b: any) => {
      switch (temp) {
        case 'Newest':
        case 'New':
        case 'New Users':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'Top':
          return (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count);
        case 'Active':
          return (b.posts_count + b.tags_count) - (a.posts_count + a.tags_count);
        case 'Views':
          return b.views - a.views;
        case 'Oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'Popular':
          return b.posts_count - a.posts_count;
        case 'Name':
          return a.tagname.localeCompare(b.tagname);
        case 'Username':
          return a.username.localeCompare(b.username);
        case 'Popular users':
          return b.views - a.views;
        case 'Today':
          const aDateToday = todayDate - getTime(a.created_at);
          const bDateToday = todayDate - getTime(b.created_at);
          if (aDateToday < milliSecDay && bDateToday < milliSecDay) {
            return (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count);
          }
          return 0;
        case 'Week':
          const aDateWeek = todayDate - getTime(a.created_at);
          const bDateWeek = todayDate - getTime(b.created_at);
          if (aDateWeek < milliSecWeek && bDateWeek < milliSecWeek) {
            return (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count);
          }
          return 0;
        case 'Month':
          const aDateMonth = todayDate - getTime(a.created_at);
          const bDateMonth = todayDate - getTime(b.created_at);
          if (aDateMonth < milliSecMonth && bDateMonth < milliSecMonth) {
            return (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count);
          }
          return 0;
        case 'Year':
          const aDateYear = todayDate - getTime(a.created_at);
          const bDateYear = todayDate - getTime(b.created_at);
          if (aDateYear < milliSecYear && bDateYear < milliSecYear) {
            return (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count);
          }
          return 0;
        default:
          return 0;
      }
    };

    return items.sort(sortFunction);
  }
}