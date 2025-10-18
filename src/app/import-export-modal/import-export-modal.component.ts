import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ItemService } from '../item-service.service';
import { Item } from '../item';

export function debounce(func: (...args: any) => any, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
}

@Component({
  selector: 'poe-import-export-modal',
  templateUrl: './import-export-modal.component.html',
  styleUrls: ['../alert-modal/alert-modal.component.scss', './import-export-modal.component.scss']
})
export class ImportExportModalComponent implements OnInit {

  @Output() public close: EventEmitter<void> = new EventEmitter();

  private _item: Item;

  public get item() {
    return this._item;
  }

  public set item(value: Item) {
    this._item = value;
    this.export();
  }

  itemDataTextarea: string = '';
  gisturl = '';

  jsonError: string = '';
  debounceLoadJSON = debounce(() => this.loadJSON(), 500);

  constructor(private is: ItemService) {
    this._item = this.is.item;
  }

  ngOnInit() {
    this.export();
  }

  export() {
    this.jsonError = '';
    this.itemDataTextarea = JSON.stringify(this.is.export(this._item));
  }

  reload() {
    this.item = this.is.item;
  }

  async loadJSON() {
    this.jsonError = '';
    try {
      this._item = await this.is.parse(this.itemDataTextarea);
    }
    catch (error) {
      this.jsonError = "Failed to parse JSON data.";
    }
  }

  async import() {
    await this.is.import(this.itemDataTextarea);
    this.close.emit();
  }

  async importgist() {
    this.item = await this.is.importgist(this.gisturl);
  }

  closeClick() {
    this.close.emit();
  }

}
