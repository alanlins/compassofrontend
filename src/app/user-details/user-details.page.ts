import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { User } from "../model/user";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.page.html",
  styleUrls: ["./user-details.page.scss"]
})
export class UserDetailsPage implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private router: Router) {}

  openReposUsu(user) {
    let navigationExtras: NavigationExtras = {
      state: {
        login: user.login,
        starred: false
      }
    };
    this.router.navigate(["/repos-user"], navigationExtras);
  }

  openStarUsu(user) {
    let navigationExtras: NavigationExtras = {
      state: {
        login: user.login,
        starred: true
      }
    };
    this.router.navigate(["/repos-user"], navigationExtras);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }
}
