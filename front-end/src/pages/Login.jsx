import React, {/* useState */} from 'react';

export default function Login() {
  // const [displayLog, setDisplayLog] = useState('hidden');
  return (
    <>
      <p
        data-testid="common_login__element-invalid-email"
        display="hidden"
      >
        invalid credential
      </p>
      <input
        type="text"
        data-testid="common_login__input-email"
      />
      <input
        type="text"
        data-testid="common_login__input-password"
      />
      <button
        type="submit"
        data-testid="common_login__button-login"
      >
        login
      </button>
      <button
        type="submit"
        data-testid="common_login__button-register"
      >
        register now
      </button>
    </>
  );
}
