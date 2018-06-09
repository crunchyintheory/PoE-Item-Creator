import { Pipe, PipeTransform } from '@angular/core';
import { PropertyType } from './property';

@Pipe({
  name: 'value',
  pure: false
})
export class ValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.type === PropertyType.StatReq) {
      return value.value.replace(/(\d+)/g, '<span class="prop-white">$1</span>');
    }
    else {
      return value.value;
    }
  }

}
