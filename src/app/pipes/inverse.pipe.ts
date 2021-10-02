import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverse'
})
export class InversePipe implements PipeTransform {

  transform(value: boolean | null, ...args: unknown[]): unknown {
    return !value;
  }

}
