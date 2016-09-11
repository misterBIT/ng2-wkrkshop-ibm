import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LetterSelectorComponent }  from './shared/letter-selector.component';
import { AppComponent }  from './app.component';
import { PetInputComponent }  from './pet-input.component';
import { PetListComponent }  from './pet-list.component';
import { PetComponent }  from './pet.component';
import { PetSearchPipe }  from './pet-search.pipe';
import { PetService }  from './pet.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PetInputComponent, PetListComponent, PetComponent, PetSearchPipe, LetterSelectorComponent ],
  providers:    [ PetService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
