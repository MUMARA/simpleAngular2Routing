import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> 
 <my-heroes></my-heroes>
 <nav> <a routerLink="/heroes">Heroes</a></nav>
   <router-outlet></router-outlet>
`
})
export class AppComponent  { name = 'Angular'; }
