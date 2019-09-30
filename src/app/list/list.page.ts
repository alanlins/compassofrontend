import { Component, OnInit } from "@angular/core";
import { User } from "../model/user";
import { UsersService } from "../services/users/users.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public users: User[] = [];
  textFilter: string = "";
  constructor(private usersService: UsersService, private router: Router) {}

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  selectUser(u: User): void {
    let navigationExtras: NavigationExtras = {
      state: {
        user: u
      }
    };
    this.router.navigate(["/user-details"], navigationExtras);
  }

  filterUsers(event) {
    const text = event.target.value;
    this.textFilter = text;
  }

  ngOnInit() {
    this.getUsers();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
