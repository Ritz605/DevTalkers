import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

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

    const milliSecSec = 1000;
    const milliSecDay = 86300000;
    const milliSecWeek = 604800000;
    const milliSecMonth = 2628000000;
    const milliSecYear = 31540000000;

    const handleToday = (a: any) => {
      const aDate = todayDate - getTime(a.created_at);
      return aDate < milliSecDay && aDate > milliSecSec;
    };

    const handleWeek = (a: any) => {
      const aDate = todayDate - getTime(a.created_at);
      return aDate < milliSecWeek;
    };

    const handleMonth = (a: any) => {
      const aDate = todayDate - getTime(a.created_at);
      return aDate < milliSecMonth;
    };

    const handleYear = (a: any) => {
      const aDate = todayDate - getTime(a.created_at);
      return aDate < milliSecYear;
    };

    switch (temp) {
      case 'Today':
        return items.filter(handleToday);
      case 'Week':
        return items.filter(handleWeek);
      case 'Month':
        return items.filter(handleMonth);
      case 'Year':
        return items.filter(handleYear);
      default:
        return items;
    }
  }
}