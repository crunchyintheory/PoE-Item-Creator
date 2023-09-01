import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { StashService } from '../stash.service';

@Component({
  selector: 'poe-page-stash',
  templateUrl: './page-stash.component.html',
  styleUrls: ['./page-stash.component.scss']
})
export class PageStashComponent implements OnInit {

  public items: Item[] = [];
  public hovered = -1;

  constructor(private stash: StashService) { }

  ngOnInit(): void {
    this.stash.Stash.subscribe(items => {
      this.items = items;
    });
  }

  public onClick(index: number) {
    this.stash.RemoveFromStash(index);
    let item = this.items[index];
  }

  public onHover(index: number) {
    this.hovered = index;
  }

}
