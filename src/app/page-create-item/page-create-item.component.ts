import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Rarity, RarityThickness, Influence } from '../rarity';
import { Item } from '../item';
import { PropertyType } from '../property';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../item-service.service';

@Component({
  selector: 'poe-page-create-item',
  templateUrl: './page-create-item.component.html',
  styleUrls: ['./page-create-item.component.scss']
})
export class PageCreateItemComponent implements OnInit {
  public get item(): Item {
    return this.is.item;
  }
  get types(): PropertyType[] { return PropertyType.types }
  get Rarity(): any { return Rarity }
  get RarityThickness(): any { return RarityThickness }
  get Influence(): any { return Influence }

  public maxWidth: number = 440;
  
  constructor(private route: ActivatedRoute, private http: HttpClient, public is: ItemService, private router: Router) { }
  
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

}
