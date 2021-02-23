import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('3000ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
    ]),
  ]
})
export class AppComponent
{
  arrLength = 4;

  myArr: string[] = [];
  origArr = ['das', 'ist', 'ein', 'test', 'mit', 'sehr', 'unterschiedlichen', 'Wörtern', 'wie', 'zum', 'Beispiel', 'bla', 'oder', 'blub', 'vielleicht', 'sogar', 'wurstbrot'];
  maxLength = 17;

  ngOnInit(): void
  {
    this.myArr = this.origArr.slice(0, 4);
  }

  public changeArr(): void
  {
    if (this.arrLength < this.maxLength) this.arrLength++;
    this.myArr = this.origArr.slice(0, this.arrLength);
  }

  public changeBack()
  {
    if (this.arrLength > 1) this.arrLength--;
    this.myArr = this.origArr.slice(0, this.arrLength);
  }
}
