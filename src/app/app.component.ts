import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Rarity, RarityThickness } from './rarity';
import { Item } from './item';
import { PropertyType, Property } from './property';
import { Templates } from './templates';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { ItemService } from './item-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public get item(): Item {
    return this.is.item;
  }
  get types(): PropertyType[] { return PropertyType.types }
  get Rarity(): any { return Rarity }
  get RarityThickness(): any { return RarityThickness }

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
}
