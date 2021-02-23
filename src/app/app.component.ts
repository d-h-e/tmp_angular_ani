import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition('* => *', [
        query(':enter', [
          stagger(50, [
            // animate('3000ms ease-out', style({ opacity: 1, width: '*' })),
            animate('5000ms linear',
              keyframes([
                style({ transform: 'scale(1)' }),
                style({ transform: 'scale(0.8)' }),
                style({ transform: 'scale(1)' }),
                style({ transform: 'scale(0.8)' }),
                style({ transform: 'scale(1)' }),
                style({ transform: 'scale(0.8)' }),
                style({ transform: 'scale(1)' }),
                style({ transform: 'scale(0.8)' }),
                style({ transform: 'scale(1)' }),
                style({ transform: 'scale(0.8)' }),
                style({ transform: 'scale(1)' }),
                style({ transform: 'scale(0.8)' }),
                style({ transform: 'scale(1)' }),
                style({ transform: 'scale(0.8)' }),
                style({ transform: 'scale(1)' }),
              ])
            ),
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
