import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
  FirstTabComponent,
  SecondTabComponent,
} from './tab-content/first-tab.component';

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: 'tab-group-dynamic-example',
  templateUrl: 'tab-group-dynamic-example.html',
  styleUrls: ['tab-group-dynamic-example.css'],
})
export class TabGroupDynamicExample {
  tabs = [];
  selected = new FormControl(0);
  FirstTabComponent = FirstTabComponent;
  SecondTabComponent = SecondTabComponent;

  addTab(selectAfterAdding: boolean, tabName: string, selector: any) {
    let tab = {
      tabName: tabName,
      selector: this.tabs.length === 0 ? FirstTabComponent : SecondTabComponent,
    };
    this.tabs.push(tab);

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
