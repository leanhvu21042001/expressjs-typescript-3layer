import { Request, Response, Router } from 'express'

import { catchAsync } from '~/shared/wrap-async'
import UserBus from '../bus/user.bus'
import { IBaseController } from 'src/interfaces'

const root = '/user'

export default class UserUI implements IBaseController {
  private userBus = new UserBus()

  constructor() {
    console.log('UserUI constructor')
  }

  public initializeRoutes(appRouter: Router) {
    appRouter.get(`${root}/save`, catchAsync(this.insertUser.bind(this)))
  }

  async insertUser(req: Request, res: Response): Promise<Response> {
    const reqBody = req.body
    const user = await this.userBus.insertUser(reqBody)
    return res.json({
      message: 'User created successfully',
      data: user
    })
  }
}
