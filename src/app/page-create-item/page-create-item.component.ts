import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Item } from '../item';
import { ItemService } from '../item-service.service';
import { ItemRendererComponent } from "../item-renderer/item-renderer.component";
import html2canvas from "html2canvas";

@Component({
  selector: 'poe-page-create-item',
  templateUrl: './page-create-item.component.html',
  styleUrls: ['./page-create-item.component.scss']
})
export class PageCreateItemComponent implements OnInit {
  public get item(): Item {
    return this.is.item;
  }

  public maxWidth: number = 500;

  @ViewChild("renderer", { static: false }) renderer?: ItemRendererComponent;

  constructor(private route: ActivatedRoute, public is: ItemService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['username'] && params['gistid'] && params['fileid'] && params['filename']) {
        console.log(params);
        this.is.importgist(`https://gist.githubusercontent.com/${params['username']}/${params['gistid']}/raw/${params['fileid']}/${params['filename']}`)
      }
    });
  }

  updateMaxWidth(width: number) {
    this.maxWidth = width;
  }

  async capture() {
    if(!this.renderer || !this.renderer.container) return;

    let canvas = await html2canvas(this.renderer.container.nativeElement, {
      backgroundColor: "#000000",
      onclone: (document, element) => {
        element.querySelectorAll(".itemheader html2canvaspseudoelement,.image-foil").forEach(item => {
          item.remove();
        });
        element.querySelectorAll(".itemheader, .itemheader .left, .itemheader .right").forEach(item => {
          (item as HTMLElement).style.backgroundImage = (item as HTMLElement).style.backgroundImage.replace("_foil", "");
        });
      },
      useCORS: true
    });

    let url = canvas.toDataURL("image/png");
    window.open(url, "_blank");
  }

}
