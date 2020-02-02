import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MainLayoutComponent } from "./shared/components/main-layout/main-layout.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PostPageComponent } from "./post-page/post-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", redirectTo: "/", pathMatch: "full" },
      { path: "", component: HomePageComponent },
      { path: "post/:id", component: PostPageComponent }
    ]
  },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules //adminka будет загружаться в фоне когда мы будем на главной и когда мы перейдем на нее adminka будет загружена
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
