// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

    public async get() {
        return [
            {
                id: 1,
                name: "Bob Smith",
                email: "bob@smithmail.com"
            }
        ]
    }

}
