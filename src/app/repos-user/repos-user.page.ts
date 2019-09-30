import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { UsersService } from "../services/users/users.service";

import { Repository } from "../model/Repository";

@Component({
  selector: "app-repos-user",
  templateUrl: "./repos-user.page.html",
  styleUrls: ["./repos-user.page.scss"]
})
export class ReposUserPage implements OnInit {
  title: string = "My Repositories";
  starred: boolean = false;
  login: string;
  repositories: Repository[];
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getRepositories(): void {
    if (!this.starred) {
      this.usersService
        .getUserRepositories(this.login)
        .subscribe(repositories => {
          this.title = "My Repositories";
          this.repositories = repositories;
        });
    } else {
      this.usersService.getUserStarred(this.login).subscribe(repositories => {
        this.title = "My Starred Repositories";
        this.repositories = repositories;
      });
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.login = this.router.getCurrentNavigation().extras.state.login;
        this.starred = this.router.getCurrentNavigation().extras.state.starred;
        this.getRepositories();
      }
    });
  }
}
