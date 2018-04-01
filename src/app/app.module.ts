import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './component/heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import {HeroService} from './service/hero.service';
import { MessagesComponent } from './component/messages/messages.component';
import { MessageService } from './service/message.service'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    HeroService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
