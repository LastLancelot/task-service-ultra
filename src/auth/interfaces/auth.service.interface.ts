import { RegisterDto } from '../dto/register.dto';

export interface IAuthService {
  register(form: RegisterDto);
  login();
  checkUsernameExistance(username: string);
  extractPayload(token: string);
}
