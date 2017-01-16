import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {HeroesComponent}     from './heroes.component';


@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])],
  declarations: [AppComponent, HeroesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
