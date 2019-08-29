import authReducer from '../../reducers/auth';

test('should login and set uid successfully', () => {
   const action = {
      type: 'LOGIN',
      uid: '123abc'
   };
   const state = authReducer({ }, action);
   expect(state.uid).toBe(action.uid);
});

test('should logout and delete uid successfully', () => {
   const action = {
      type: 'LOGOUT'
   };
   const state = authReducer({ uid: 'anything' }, action);
   expect(state).toEqual({ });
});