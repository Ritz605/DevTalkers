// src/app/pipes/html-substring.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlSubstring',
  standalone: true
})
export class HtmlSubstringPipe implements PipeTransform {

  transform(s: string, n: number): string {
    let m, r = /<([^>\s]*)[^>]*>/g,
        stack = [],
        lasti = 0,
        result = '';

    // For each tag, while we don't have enough characters
    while ((m = r.exec(s)) && n) {
      // Get the text substring between the last tag and this one
      const temp = s.substring(lasti, m.index).substr(0, n);
      // Append to the result and count the number of characters added
      result += temp;
      n -= temp.length;
      lasti = r.lastIndex;

      if (n) {
        result += m[0];
        if (m[1].indexOf('/') === 0) {
          // If this is a closing tag, then pop the stack (does not account for bad HTML)
          stack.pop();
        } else if (m[1].lastIndexOf('/') !== m[1].length - 1) {
          // If this is not a self-closing tag then push it in the stack
          stack.push(m[1]);
        }
      }
    }

    // Add the remainder of the string, if needed (there are no more tags in here)
    result += s.substr(lasti, n);

    // Fix the unclosed tags
    while (stack.length) {
      result += '</' + stack.pop() + '>';
    }

    return result;
  }
}