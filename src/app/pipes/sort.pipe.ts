// src/app/pipes/sort.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(array: any[], sortType: string, page: string = ''): any[] {
    if (!array || !sortType) {
      return array;
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

    switch (temp) {
      case 'Newest':
      case 'New':
      case 'New Users':
        return array.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      case 'Top':
        return array.sort((a, b) => (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count));
      case 'Active':
        return array.sort((a, b) => (b.posts_count + b.tags_count) - (a.posts_count + a.tags_count));
      case 'Views':
        return array.sort((a, b) => b.views - a.views);
      case 'Oldest':
        return array.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
      case 'Popular':
        return array.sort((a, b) => b.posts_count - a.posts_count);
      case 'Name':
        return array.sort((a, b) => a.tagname.localeCompare(b.tagname));
      case 'Username':
        return array.sort((a, b) => a.username.localeCompare(b.username));
      case 'Popular users':
        return array.sort((a, b) => b.views - a.views);
      case 'Today':
        return array.filter(a => todayDate - getTime(a.created_at) < milliSecDay)
                    .sort((a, b) => (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count));
      case 'Week':
        return array.filter(a => todayDate - getTime(a.created_at) < milliSecWeek)
                    .sort((a, b) => (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count));
      case 'Month':
        return array.filter(a => todayDate - getTime(a.created_at) < milliSecMonth)
                    .sort((a, b) => (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count));
      case 'Year':
        return array.filter(a => todayDate - getTime(a.created_at) < milliSecYear)
                    .sort((a, b) => (b.answer_count + b.comment_count) - (a.answer_count + a.comment_count));
      default:
        return array;
    }
  }
}