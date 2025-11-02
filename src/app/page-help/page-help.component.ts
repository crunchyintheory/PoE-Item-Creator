import { Component, OnInit } from '@angular/core';
import { Item } from "../item";
import { Rarity } from "../rarity";
import { Property, PropertyType } from "../property";
import { ItemService } from "../item-service.service";
import { Router } from "@angular/router";
import { Alert, AlertStatus, AlertType } from "../alert.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'poe-page-help',
  templateUrl: './page-help.component.html',
  styleUrls: ['./page-help.component.scss']
})
export class PageHelpComponent implements OnInit {

  formats = [
    ["i", "Italics"],
    ["em", "Italics"],
    ["strong", "Bold"],
    ["bold", "Bold"],
    ["u", "Underline"],
    ["g", "Gray"],
    ["w", "White"],
    ["b", "Blue"],
    ["fire", "Fire"],
    ["cold", "Cold"],
    ["lightning", "Lightning"],
    ["chaos", "Chaos"],
    ["crucible", "Crucible"],
    ["crafted", "Crafted"],
    ["fractured", "Fractured"],
    ["foulborn", "Foulborn"],
    ["color#b83fdc", "Custom Hex Colors"]
  ];

  formatsItem: Item;

  stashAlert: Alert;

  constructor(public is: ItemService, public router: Router, private title: Title) {
    let properties = this.formats.map(format => {
      return new Property(
        PropertyType.Affix,
        "",
        `%%${format[0]}%%${format[1]}%%${format[0]}%%`
      )
    });
    this.formatsItem = new Item(
      Rarity.Normal,
      "",
      "Text Formats",
      "",
      "",
      properties
    );

    this.stashAlert = new Alert({ type: AlertType.Toast, title: 'Note', text: 'The stash is stored locally in your browser, so clearing your cache will delete these items.', status: AlertStatus.Warning });

    this.title.setTitle("Path of Exile Item Creator - Help");
  }

  ngOnInit(): void {

  }

  import(item: Item) {
    this.is.import(this.is.export(item));
    this.router.navigate(["/create"]);
  }

}
