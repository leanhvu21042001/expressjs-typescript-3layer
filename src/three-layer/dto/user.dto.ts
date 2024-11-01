export default class UserDto {
  private _employeeID: string = ''
  private _name: string = ''
  private _email: string = ''

  get employeeID(): string {
    return this._employeeID
  }

  set employeeID(value: string) {
    this._employeeID = value
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get email(): string {
    return this._email
  }

  set email(value: string) {
    this._email = value
  }
}
