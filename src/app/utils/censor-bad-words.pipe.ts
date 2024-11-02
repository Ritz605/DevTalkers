import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from 'bad-words';

@Pipe({
  name: 'censorBadWords',
  standalone: true
})
export class CensorBadWordsPipe implements PipeTransform {
  private badWordsFilter = new Filter({
    replaceRegex: /(?<=.).+(?=.)/
  });

  transform(value: string): string {
    let censored = value;
    const containsEnglishWords = /\b/.test(value);

    if (value && containsEnglishWords) {
      const toFilter = JSON.stringify(value);
      censored = JSON.parse(this.badWordsFilter.clean(toFilter));
    }
    return censored;
  }
}