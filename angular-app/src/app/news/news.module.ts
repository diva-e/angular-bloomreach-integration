import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRootComponent } from './news-root/news-root.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsRootComponent],
  bootstrap: [NewsRootComponent]
})
export class NewsModule {
  static entry = NewsRootComponent
}
