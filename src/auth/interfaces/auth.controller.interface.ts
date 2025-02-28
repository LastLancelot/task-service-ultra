import { RegisterDto } from '../dto/register.dto';

export interface IAuthController {
  register(form: RegisterDto);
  login();
  checkUsernameExistance(username: string);
  extractPayload(token: string);
}
