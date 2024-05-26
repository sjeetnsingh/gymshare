import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  items = [{"value":1,"name":"1 day"},
   {value: 2, "name":"2-3 days"},
   {value:3,
    "name":"5-6 days"},
    {value:4, name:"7 days"}]
}
