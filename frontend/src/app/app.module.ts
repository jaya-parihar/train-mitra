import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTrainComponent } from './components/search-train/search-train.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListTrainsComponent } from './components/list-trains/list-trains.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TrainStatusComponent } from './components/train-status/train-status.component';
import { TrainInfoComponent } from './components/train-info/train-info.component';
import { MovingTrainSvgComponent } from './components/moving-train-svg/moving-train-svg.component';
import { ClassesComponent } from './components/classes/classes.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

  
@NgModule({
  declarations: [
    AppComponent,
    SearchTrainComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ListTrainsComponent,
    TruncatePipe,
    TrainStatusComponent,
    TrainInfoComponent,
    MovingTrainSvgComponent,
    ClassesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClient
    // BrowserAnimationsModule.withConfig(config)
    // StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [
    provideAnimationsAsync(),
    // MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
