import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ChildComponent } from './my-component/child/child.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvComponent } from './cv/cv.component';
import { CvSelectorComponent } from './cv-selector/cv-selector.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { WebWordComponent } from './web-word/web-word.component';
import { SelectorComponent } from './selector/selector.component';
import { WordInputsComponent } from './word-inputs/word-inputs.component';
import { EditableTextComponent } from './editable-text/editable-text.component';
import { RandomColorComponent } from './random-color/random-color.component';
import { RandomColorDirective } from './directives/random-color.directive';
import { HoverableClickableDirective } from './directives/hoverable-clickable.directive';
import { DefaultImageComponent } from './default-image/default-image.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from "ngx-toastr";
import { ColorPageComponent } from './color-page/color-page.component';
import { CvPageComponent } from './cv-page/cv-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HomeComponent,
    CarteVisiteComponent,
    ChildComponent,
    CvListComponent,
    CvComponent,
    CvSelectorComponent,
    CvItemComponent,
    WebWordComponent,
    SelectorComponent,
    WordInputsComponent,
    EditableTextComponent,
    RandomColorComponent,
    RandomColorDirective,
    HoverableClickableDirective,
    DefaultImageComponent,
    DefaultImagePipe,
    ColorPageComponent,
    CvPageComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
