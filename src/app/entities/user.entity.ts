export class UserEntity {
  email: string;
  password: string;
  created_at: Date;
  _updated_at?: Date | null;

  constructor(n: string, p: string, cr?: Date, up?: Date) {
    this.email = n;
    this.password = p;
    this.created_at = new Date();
    this._updated_at = null;
  }

  set updated_at(time: Date | null | undefined) {
    this._updated_at = new Date();
  }

  get updated_at(): Date | null | undefined {
    return this._updated_at;
  }
}
