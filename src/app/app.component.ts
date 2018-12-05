import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cardList: CardInterface[] = [];

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.cardList.push({
        imgSrc: 'http://via.placeholder.com/300',
        title: 'Card No. ' + i,
        description:
          'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
          This module provides Angular developers with component layout features using a custom Layout API, \
          mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
      });
    }
  }
}

export interface CardInterface {
  imgSrc: string;
  title: string;
  description: string;
}
