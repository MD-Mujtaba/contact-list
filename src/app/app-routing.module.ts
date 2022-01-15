import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'contact-list', component: ContactListComponent},
  {path: 'contact-list/:id', component: UpdateComponent},
  {path: 'login', component: LoginComponent}
 
  // {path: '**', component: ErrorComponet}


];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
