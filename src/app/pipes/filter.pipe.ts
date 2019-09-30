import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../model/user";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], text: string): User[] {
    if (text.length === 0) {
      return users;
    }
    if (users) {
      text = text.toLocaleLowerCase();
      return users.filter(user => {
        return (
          user.login.toLocaleLowerCase().includes(text) ||
          user.id.toString().includes(text)
        );
      });
    }
  }
}
