import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaNosotrosComponent } from './Componets/acerca-nosotros/acerca-nosotros.component';
import { NuestrosProductosComponent } from './Componets/nuestros-productos/nuestros-productos.component';
import { HomeComponent } from './Componets/home/home.component';

const routes: Routes = [  
  {path:'Home',component: HomeComponent},
  {path:'NuestrosProductos',component: NuestrosProductosComponent},
  {path:'AcercaNosotros',component: AcercaNosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
