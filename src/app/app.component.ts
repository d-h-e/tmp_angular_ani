import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
  public data$ = new BehaviorSubject<any[]>([]);
  public test$ = this.data$.pipe(
    map((a) => (a.map((a) => ({ ...a, ...{ pos: 4 } }))))
  )
  myArr: any = [];
  origArr = ['das', 'ist', 'ein', 'test', 'mit', 'sehr', 'unterschiedlichen', 'Wörtern', 'wie', 'zum', 'Beispiel', 'bla', 'oder', 'blub', 'vielleicht', 'sogar', 'wurstbrot'].map((a) => ({ id: a, name: a, time: new Date(), pos: Math.floor(Math.random() * 2000) }));
  maxLength = 17;

  ngOnInit(): void
  {
    this.myArr = []
  }

  public changeArr(): void
  {
    this.myArr = [...this.myArr, this.origArr[Math.floor(Math.random() * this.origArr.length)]].sort((a, b) => (a.pos - b.pos));
    this.data$.next(this.myArr);
  }

  public changeBack()
  {
    this.myArr = []
  }
}
