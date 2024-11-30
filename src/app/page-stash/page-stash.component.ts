import { Component, OnInit } from '@angular/core';
import { Item, StashedItem } from '../item';
import { StashService } from '../stash.service';
import { ItemService } from '../item-service.service';
import { Alert, AlertService, AlertStatus, AlertType } from '../alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'poe-page-stash',
  templateUrl: './page-stash.component.html',
  styleUrls: ['./page-stash.component.scss']
})
export class PageStashComponent implements OnInit {

  public alert: Alert;

  public items: StashedItem[] = [];
  public hovered = -1;

  constructor(private is: ItemService, private stash: StashService, private alertService: AlertService, private router: Router) {
    this.alert = new Alert({ type: AlertType.Toast, title: 'Note', text: 'The stash is stored locally in your browser, so clearing your cache will delete these items.', status: AlertStatus.Warning });
  }

  ngOnInit(): void {
    this.stash.Stash.subscribe(items => {
      this.items = items;
    });
  }

  public onClick(index: number) {
    let item = this.items[index];
    this.is.item = new StashedItem(item);
    this.router.navigate(["/create"]);
  }

  public onHover(index: number) {
    this.hovered = index;
  }

  public onRightClick(index: number, event: Event) {
    event.stopPropagation();
    this.promptDeletion(index);
    return false;
  }

  public promptDeletion(index: number) {
    this.alertService.Dispatch(new Alert({
      type: AlertType.ModalConfirm,
      status: AlertStatus.Warning,
      title: "Confirm Delete",
      text: "Are you sure you want to delete this item from your stash?",
      lifetime: 1000,
      buttons: [
        {text: "Cancel"},
        {text: "Confirm", callback: () => this.stash.RemoveFromStash(index)}
      ]
    }));
  }

}
