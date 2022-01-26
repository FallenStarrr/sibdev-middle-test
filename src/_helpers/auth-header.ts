import { authenticationService } from '@/_services';

export function authHeader() {
        const currentUser  = authenticationService.currentUser
        if (currentUser && currentUser.token)  {
          return { Authorization: `Bearer ${currentUser.token} `}
        } else {
          return {}
        }

        
}