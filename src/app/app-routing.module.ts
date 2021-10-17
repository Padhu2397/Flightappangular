import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './home/home.component';
import { HomeComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchhomeComponent } from './searchhome/searchhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ViewpnrComponent } from './viewpnr/viewpnr.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: HomeComponent},
  {path:'userhome', component: UserhomeComponent  },
  {path: 'viewpnr', component: ViewpnrComponent},
  {path: 'viewpnr/:pnr', component: ViewpnrComponent},
  {path: 'viewhistory', component: HistoryComponent},
  {path: 'search', component: SearchhomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
