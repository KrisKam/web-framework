interface UserProps {
  name: string,
  age: number
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName];
  }
}