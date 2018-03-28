import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0) {
      return value;
    }
    return this.reverse(value);
  }

  reverse(s) {
    return s.split('').reverse().join('');
  }

}
