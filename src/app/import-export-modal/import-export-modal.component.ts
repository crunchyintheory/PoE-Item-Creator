import { Component, Inject, OnInit } from '@angular/core';
import { ItemService } from '../item-service.service';
import { Item } from '../item';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-import-export-modal',
  templateUrl: './import-export-modal.component.html',
  styleUrls: ['./import-export-modal.component.scss']
})
export class ImportExportModalComponent implements OnInit {

  public get item(): Item {
    return this.is.item;
  } 

  itemDataTextarea: string = '';
  gisturl = '';
  
  constructor(private is: ItemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  export() {
    this.is.export().then((x: {}) => {
      this.itemDataTextarea = JSON.stringify(x);
    })
  }

  import() {
    this.is.import(this.itemDataTextarea).then(x => {
      this.router.navigate(['..'], { relativeTo: this.route });
    });
  }

  importgist() {
    this.is.importgist(this.gisturl).add(() => {
      const regex = /https:\/\/gist\.githubusercontent.com\/([\d\w]+)\/([\d\w]+)\/raw\/([\d\w]+)\/([^\x00-\x1F\x7F\x20<>#%"{}|\\^[\]`;\/?:@&=+$,]+)/i
      const matches: any = this.gisturl.match(regex);
      if(matches) {
        this.router.navigateByUrl(`/gist/${matches[1]}/${matches[2]}/${matches[3]}/${matches[4]}`);
      }
    })
  }

}
