import UserDao from '../dao/user.dao'
import UserDto from '../dto/user.dto'

export default class UserBus {
  public insertUser(user: UserDto) {
    if (!user.name.trim() || !user.email.trim()) {
      return undefined
    }

    return UserDao.insertUser(user)
  }

  public getListUser() {
    return UserDao.getListUser()
  }
}
