import { Response, Request } from "express";
import { AuthenticateuserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response)  {
    const { email, password } = request.body

    const authenticateUserService = new AuthenticateuserService()

    const token = await authenticateUserService.execute({ email, password })

    return response.json(token)
  }
}

export { AuthenticateUserController }