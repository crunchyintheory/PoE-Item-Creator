import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'poe-page-stash',
  templateUrl: './page-stash.component.html',
  styleUrls: ['./page-stash.component.scss']
})
export class PageStashComponent implements OnInit {

  public items: Item[] = [];
  public hovered = -1;

  constructor() { }

  ngOnInit(): void {
    let items: Item[] = JSON.parse(localStorage.getItem("stash") ?? "[]");
    this.items = items;
  }

  public onClick(index: number) {
    let item = this.items[index];
  }

  public onHover(index: number) {
    console.log("foo");
    this.hovered = index;
  }

}
