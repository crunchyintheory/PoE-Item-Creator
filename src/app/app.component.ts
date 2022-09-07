import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Rarity, RarityThickness, Influence } from './rarity';
import { Item } from './item';
import { PropertyType, Property } from './property';
import { Templates } from './templates';
import { HttpClient } from '@angular/common/http';
import { ItemService } from './item-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public get item(): Item {
    return this.is.item;
  }
  get types(): PropertyType[] { return PropertyType.types }
  get Rarity(): any { return Rarity }
  get RarityThickness(): any { return RarityThickness }
  get Influence(): any { return Influence }

  constructor(private route: ActivatedRoute, private http: HttpClient, public is: ItemService, private router: Router) {
  }
  
  ngOnInit() {
    this.is.item = Array.from(Templates.values())[Math.floor(Math.random() * Templates.size)];
    this.route.params.subscribe(params => {
      if(params['username'] && params['gistid'] && params['fileid'] && params['filename']) {
        console.log(params);
        this.is.importgist(`https://gist.githubusercontent.com/${params['username']}/${params['gistid']}/raw/${params['fileid']}/${params['filename']}`)
      }
    });
  }

  reset() {
    this.is.reset().then(() => {
      this.router.navigateByUrl('/');
    })
  }

  getInfluenceBackground(influence: Influence): string {
    if(influence.has_background) {
      return `url("assets/backgrounds/${influence.name}${this.item.size.replaceAll("x", "_")}.png")`.toLowerCase();
    }
    return "";
  }
}
