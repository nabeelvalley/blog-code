import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async get() {
        return await User.all()
    }

    public async post({ request }: HttpContextContract) {
        const newUser = request.all() as Partial<User>
        const user = await User.create(newUser)
        return user;
    }
}
