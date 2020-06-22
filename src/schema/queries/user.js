import User from '../types/User';
import { getMe } from '../../services/user-service';

const me = {
  type: User,
  resolve: (rawUserData, args, req) => {
    if (req.token) {
      return getMe(req.token);
    }
    console.warn("Token is required")
    return null;
  },
};

export { me };
