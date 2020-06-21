/**
 * auth-context - can share between our compontents to share some data behind we can initialized.
 *
 */
import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {}
});
