// src/app/pipes/inject-ellipsis.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'injectEllipsis',
  standalone: true
})
export class InjectEllipsisPipe implements PipeTransform {

  transform(html: string): string {
    const re = /<\/p>/g;
    const str = html;
    let lastMatchIndex;
    let match;

    while ((match = re.exec(str)) != null) {
      lastMatchIndex = match.index;
    }

    return lastMatchIndex !== undefined
      ? html.substring(0, lastMatchIndex) + "..." + html.substring(lastMatchIndex)
      : html;
  }
}