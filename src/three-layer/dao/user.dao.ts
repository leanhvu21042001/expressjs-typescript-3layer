import UserDto from '../dto/user.dto'
import Database from './Database'

export default class UserDao extends Database {
  constructor() {
    super()
  }

  public static async insertUser(user: UserDto) {
    user.email = user.email.toLowerCase()
    const query = `INSERT INTO users (name, email, password) VALUES (${user.name}, ${user.email})`
    return this.execute(query)
  }

  public static async getUserByEmail(email: UserDto['email']) {
    const query = `SELECT * FROM users WHERE email = ${email}`
    return this.execute(query)
  }

  public static async getUserByName(name: UserDto['name']) {
    const query = `SELECT * FROM users WHERE name = ${name}`
    return this.execute(query)
  }

  public static async getListUser() {
    const query = `SELECT * FROM users`
    return this.execute(query)
  }
}
