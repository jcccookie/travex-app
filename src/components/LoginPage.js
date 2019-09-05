import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startGuest } from '../actions/auth';

export const LoginPage = ({ startLogin, startGuest }) => (
   <div className='box-layout'>
      <div className='box-layout__box'>
         <h1 className='box-layout__title'>Travex</h1>
         <p>Simple and easy way for managing your travel expenses</p>
         <div className='button-list--login'>
            <button 
               className='button button--login' 
               onClick={startLogin}
            >
               Login with Google
            </button>
            <button
               className='button button--login button--login-guest'
               onClick={startGuest}
            >
               Guest Mode
            </button>
         </div>
      </div>
   </div>
);

const mapDispatchToProps = (dispatch) => ({
   startLogin: () => dispatch(startLogin()),
   startGuest: () => dispatch(startGuest())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);