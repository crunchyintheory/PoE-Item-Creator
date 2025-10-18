import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[section-header]'
})
export class SectionHeaderDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.parse();
  }

  parse() {
    let hash = this.el.nativeElement.innerText.replaceAll(" ", "_").replaceAll(/[^\w_]/g, "").toLowerCase();
    this.el.nativeElement.id = hash;
    let anchor = document.createElement("a");
    let url = new URL(window.location.href);
    url.search = "";
    url.hash = hash;
    anchor.href = url.href;
    anchor.innerText = "#";
    anchor.className = "anchor";
    this.el.nativeElement.appendChild(anchor);
  }

}
