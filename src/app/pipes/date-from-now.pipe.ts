import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'dateFromNow',
  standalone: true
})
export class DateFromNowPipe implements PipeTransform {
  transform(value: string): string {
    return moment(value).fromNow(false);
  }
}