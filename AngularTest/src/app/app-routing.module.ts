import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from "./layout/layout.component";
import { TableComponent } from "./table/table.component";

import { AddComponent } from "./add/add.component";
import { UpdateComponent } from "./update/update.component";
import { DeleteComponent } from "./delete/delete.component";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path:'home',
      component: HomeComponent
    },
    {
      path:'tabla',
      component: TableComponent
    }    ,
    {
      path:'tabla/del/:id',
      component: DeleteComponent
    },

    {
      path:'tabla/upd/:id',
      component: UpdateComponent
    },

    {
      path:'tabla/add',
      component: AddComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
