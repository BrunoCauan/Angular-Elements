import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

// import { CardComponent } from './card/card.component';
import { GameCardComponent } from './game-card/game-card.component';

@NgModule({
  declarations: [ GameCardComponent ],
  imports: [ BrowserModule ],
  entryComponents: [ GameCardComponent ]
})
export class AppModule {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        const GameCardElement = createCustomElement(GameCardComponent, { injector: this.injector });

        customElements.define('game-card', GameCardElement);
    }
}
