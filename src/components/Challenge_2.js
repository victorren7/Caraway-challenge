import React, { useState, useEffect } from 'react';
import { isEmpty, includes } from 'lodash';
import '../App.scss';
import '../styles/Challenge-2.scss';
const Challenge_2 = () => {

  const [isEmail, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isEmailHover, setEmailHover] = useState(false);
  const [isPasswordHover, setPasswordHover] = useState(false);

  const validatedEmail = (email) => {
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(email);
  };

  return (
    <div className='challenge challenge-2'>
      <form className='form'>
        <div>
          {isEmpty(isEmail) &&
            isEmailHover &&
            <label className='label'>Email:</label>
          }
          <a
            className="btn"
            onMouseEnter={() => setEmailHover(true)}
            onMouseLeave={() => setEmailHover(false)}
          >
            <span>
              <span>
                <span>
                  <input
                    className={'input' + ' ' + `${validatedEmail(isEmail) === true && 'text-green' }`}
                    type='text'
                    name='email'
                    placeholder='Email Adress'
                    onChange={e => setEmail(e.target.value)}
                  />
                </span>
              </span>
            </span>
          </a> 
        </div>  
        <div>
          {isEmpty(password) &&
            isPasswordHover &&
            <label className='label'>Password:</label>
          }
          <a
            className="btn"
            onMouseEnter={() => setPasswordHover(true)}
            onMouseLeave={() => setPasswordHover(false)}
          >
            <span>
              <span>
                <span>
                  <input
                    className={'input' + ' ' + `${!isEmpty(password)
                      &&
                      'green-text'}`
                    }
                    type='password'
                    name='password'
                    placeholder=' Password'
                    onChange={e => setPassword(e.target.value)}
                    />
                </span>
              </span>
            </span>
          </a>
        </div>
      </form>
 

    </div>
  );
};

export default Challenge_2;