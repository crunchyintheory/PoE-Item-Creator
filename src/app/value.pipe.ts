import { Pipe, PipeTransform } from '@angular/core';
import { PropertyType } from './property';

@Pipe({
  name: 'value',
  pure: false
})
export class ValuePipe implements PipeTransform {

  private replacements: [RegExp, string][] = [
    [/\<g\>(.*)\<\/g\>/g, '<span class="prop-gray">$1</span>'],
    [/\<chaos\>(.*)\<\/chaos\>/g, '<span class="prop-chaos">$1</span>'],
    [/\<fire\>(.*)\<\/fire\>/g, '<span class="prop-fire">$1</span>'],
    [/\<cold\>(.*)\<\/cold\>/g, '<span class="prop-cold">$1</span>'],
    [/\<lightning\>(.*)\<\/lightning\>/g, '<span class="prop-lightning">$1</span>']
  ];

  transform(value: any, args?: any): any {
    if(value.type.className === PropertyType.StatReq.className) {
      return value.value.replace(/(\d+)/g, '<span class="prop-white">$1</span>');
    }
    else {
      return this.replacements.reduce((acc, [regex, replacement]) => {
        return acc.replaceAll(regex, replacement);
      }, value.value as string);
    }
  }

}
