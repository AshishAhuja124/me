import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from'@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { EmpService } from './emp.service';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DetailsGuardService } from './details/details-guard.service';
import { EmpPipe } from './delete/emp.pipe';
import { HighlightDirective } from './delete/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    DetailsComponent,
    EmpPipe,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'/Home', pathMatch:'full' },
      {path:'Home',component:DeleteComponent},
      {path:'add', component:AddComponent},
      {path:'edit/:id', component:EditComponent},
    
    {path:'detail/:code',canActivate:[DetailsGuardService],component:DetailsComponent}
    ])      

  ],
  providers: [EmpService,DetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
