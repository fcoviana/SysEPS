import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ListStoreComponent } from "./pages/store/list-store/list-store.component";
import { ListProductComponent } from "./pages/product/list-product/list-product.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "lojas", component: ListStoreComponent },
  { path: "produtos", component: ListProductComponent },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
