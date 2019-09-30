import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "list",
    loadChildren: () => import("./list/list.module").then(m => m.ListPageModule)
  },
  {
    path: "user-details",
    loadChildren: () =>
      import("./user-details/user-details.module").then(
        m => m.UserDetailsPageModule
      )
  },
  {
    path: "repos-user",
    loadChildren: "./repos-user/repos-user.module#ReposUserPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
