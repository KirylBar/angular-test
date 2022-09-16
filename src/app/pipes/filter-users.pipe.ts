import { TypeUser } from './../models/userData';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'filterUsers' })
export class FilterUsersPipe implements PipeTransform {
  transform(users: TypeUser[], type: string): number {
    const arr = users.filter((el) =>
      el.type.toLowerCase().includes(type.toLowerCase())
    );
    return arr.length
  }
}
