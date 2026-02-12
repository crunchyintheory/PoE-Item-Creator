import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { PropertyType } from './property';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'value',
  pure: false
})
export class ValuePipe implements PipeTransform {

  public constructor(public sanitizer: DomSanitizer) {}

  private replacements: [RegExp, string][] = [
    [/%%g%%(.*)%%g%%/gi, '<span class="prop-gray">$1</span>'],
    [/%%w%%(.*)%%w%%/gi, '<span class="prop-white">$1</span>'],
    [/%%b%%(.*)%%b%%/gi, '<span class="prop-blue">$1</span>'],
    [/%%(?<tag>chaos|fire|cold|lightning|crafted|crucible|fractured|foulborn)%%(.*)%%\k<tag>%%/gi, '<span class="prop-$1">$2</span>'],
    [/%%(?<tag>normal|magic|rare|unique|currency|gem|prophecy|passive)%%(.*)%%\k<tag>%%/gi, '<span class="prop-$1">$2</span>'],
    [/%%(?<tag>i|em|strong)%%(.*)%%\k<tag>%%/gi, '<$1>$2</$1>'],
    [/%%u%%(.*)%%u%%/gi, '<span style="text-decoration: underline">$1</span>'],
    [/%%bold%%(.*)%%bold%%/gi, '<strong>$1</strong>'],
    [/%%color(#[a-fA-F0-9]{3,8})%%(.*)%%color(#[a-fA-F0-9]{3,8})?%%/gi, '<span class="prop-color" style="color: $1">$2</span>']
  ];

  transform(value: any, args?: any): any {
    let text = value;
    if(typeof value === 'object') {
      text = value.value;
    }
    if(typeof text == "string") text = (text as string).replaceAll(/<\/?|>/g, "%%");
    text = this.sanitizer.sanitize(SecurityContext.HTML, text);
    if(value.type?.className === PropertyType.StatReq.className) {
      return text.replace(/(\d+)/g, '<span class="prop-white">$1</span>');
    }
    else {
      let t = this.replacements.reduce((acc, [regex, replacement]) => {
        return acc.replaceAll(regex, replacement);
      }, text as string);
      return this.sanitizer.bypassSecurityTrustHtml(t); // We have just sanitized the text and replaced the contents with known-safe fixed templates.
    }
  }

}
