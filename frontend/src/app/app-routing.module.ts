import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTrainComponent } from './components/search-train/search-train.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListTrainsComponent } from './components/list-trains/list-trains.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'search-train', pathMatch: 'full'
  }, {
    path: 'search-train', component: SearchTrainComponent
  },{
    path:'trains', component: ListTrainsComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
