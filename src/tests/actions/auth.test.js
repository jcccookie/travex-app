import { login, logout } from '../../actions/auth';

test('should set login uid correctly', () => {
   const uid = 'sldkfje10238';
   const action = login(uid);
   expect(action).toEqual({
      type: 'LOGIN',
      uid: uid
   });
});

test('should set logout correctly', () => {
   const action = logout();
   expect(action).toEqual({ type: 'LOGOUT' });
});