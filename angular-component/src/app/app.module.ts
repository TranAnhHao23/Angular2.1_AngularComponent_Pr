import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import {LikeComponent} from './like/like.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {TodoComponent} from './todo/todo.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { TestAngularComponent } from './test-angular/test-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    TodoComponent,
    RegisterFormComponent,
    TestAngularComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
