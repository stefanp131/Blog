import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: Article[];

  constructor() {
    this.articles = [
      {
        title: `World's puzzle`,
        flavour: 'Pastila de Vineri, 08.06.2018'
      },
      {
        title: 'The wireless network , the collective consciousness, love and human relationships',
        // tslint:disable-next-line:max-line-length
        flavour: 'If we want to move forward as a humanity we must be aware of the collective consciousness. In the previous chapter I was asserting that space connects us all. Well, it does. We are interconnected. We are connected through space…'
      },
      {
        title: 'A fi sau a nu fi filozof? Aceasta e întrebarea!',
        // tslint:disable-next-line:max-line-length
        flavour: 'Ce este filozofia şi care este importanţa ei?  Ce este cultura? Ce este limba? Aceste întrebări sunt foarte grele. Nu voi avea pretenția că voi găsi răspunsul într-un articol. Voi încerca să fac o scurtă sinteză despre ce cred…'
      },
      {
        title: 'Mircea Eliade, Dumnezeu, Sacru și Profanul, Istoria Religiilor, Istoria Omenirii',
        // tslint:disable-next-line:max-line-length
        flavour: 'Mircea Eliade a fost o mare personalitate a omenirii. Este considerat părintele istoriei religiilor. El a avut contacte cu numeroase personalități ale acelei vremi : Mahatma Gandhi, Carl Gustav Jung, Georges Papini și alții. Mircea Eliade a fost o fire enciclopedică…'
      },
      {
        title: 'Câteva gânduri și idei despre cultura și literatura românească – Part 2',
        // tslint:disable-next-line:max-line-length
        flavour: 'În perioada interbelică s-au pus bazele filozofiei Românești. Romantismul lui Eminescu și comediile lui Caragiale erau apuse, nu se mai regăseau în contextul acelei epoci. Realitatea era mai sobră și mai crudă. România a trecut printr-o perioada sângeroasă...'
      },
      {
        title: 'Câteva gânduri și idei despre cultura și literatura românească – Part 1',
        // tslint:disable-next-line:max-line-length
        flavour: 'POEZIA În primul rând trebuie să stabilim de la bun început, pentru a nu ne minți pe noi înșine, că România nu are o cultură bogată. Cultura României nu se compară cu cea a Angliei, Franței, Germaniei, Spaniei, Americii, Rusiei,…'
      }
    ];
  }

  ngOnInit() {
  }

}
