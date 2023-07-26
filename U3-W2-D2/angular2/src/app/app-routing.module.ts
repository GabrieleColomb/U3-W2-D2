import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { HomeComponent } from './pages/home/home.component';
import { PostInattiviComponent } from './pages/post-inattivi/post-inattivi.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'post-attivi',
    component: PostAttiviComponent
  },
  {
    path: 'post-inattivi',
    component: PostInattiviComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
