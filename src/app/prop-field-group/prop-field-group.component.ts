import { Component, Input, OnInit } from '@angular/core';
import { Property, PropertyType } from '../property';
import { Item } from '../item';
import { ItemService } from '../item-service.service';

@Component({
  selector: 'poe-prop-field-group',
  templateUrl: './prop-field-group.component.html',
  styleUrls: ['./prop-field-group.component.scss']
})
export class PropFieldGroupComponent implements OnInit {
  get types(): { [key: string]: PropertyType[] } { return PropertyType.sortedTypes; }
  public get item(): Item {
    return this.is.item;
  }

  @Input() property!: Property;
  @Input() index!: number;

  constructor(public is: ItemService) { }

  ngOnInit(): void {
  }

}
