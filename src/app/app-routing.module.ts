import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path : 'home' , component : PortfolioComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'item/:productID' , component : ProductComponent},
  {path : '**' , pathMatch: 'full', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
