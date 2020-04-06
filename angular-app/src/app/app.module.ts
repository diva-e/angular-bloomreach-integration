import {BrowserModule} from '@angular/platform-browser';
import {ApplicationRef, Inject, NgModule} from '@angular/core';

import {provideRoutes} from "@angular/router";
import {NewsLoaderComponent} from "./news-loader.component";
import {ContactLoaderComponent} from "./contact-loader.component";
import {DOCUMENT} from "@angular/common";

@NgModule({
  declarations: [
    NewsLoaderComponent,
    ContactLoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideRoutes([
      {loadChildren : () => import('./news/news.module').then(m => m.NewsModule)}, // new dynamic import method
      {loadChildren : () => import('./contact/contact.module').then(m => m.ContactModule)}
    ])],
  entryComponents: [
    NewsLoaderComponent,
    ContactLoaderComponent
  ]
})
export class AppModule {
  private browser_document;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.browser_document = document;
  }

  ngDoBootstrap(appRef: ApplicationRef) {

    if (this.browser_document.getElementsByTagName('app-news-loader').length > 0) {
      appRef.bootstrap(NewsLoaderComponent);
    }

    if (this.browser_document.getElementsByTagName('app-contact-loader').length > 0) {
      appRef.bootstrap(ContactLoaderComponent);
    }
  }
}
