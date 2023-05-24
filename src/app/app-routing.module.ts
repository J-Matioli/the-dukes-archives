import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { toolbar: false } },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
