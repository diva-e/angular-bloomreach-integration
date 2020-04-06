import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRootComponent } from './contact-root/contact-root.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactRootComponent],
  bootstrap: [ContactRootComponent]
})
export class ContactModule {
  static entry = ContactRootComponent;
}
