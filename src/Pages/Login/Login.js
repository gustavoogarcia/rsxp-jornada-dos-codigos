import React, { useState } from 'react';
import Logo from '../../Components/Logo';
import { email, password } from './loginFields';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../store/actions/userActions';
import Field from '../../Components/Field';
import Button from '../../Components/Button';

export default function Login() {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.user);
    const [fields, setFields] = useState({ email, password });

    const handleSubmit = async e => {
        e.preventDefault();
        let signUpObj = Object.assign({}, { ...fields, });
        let hasError = false;
        for (let field in fields) {
            if (signUpObj[field].required && !signUpObj[field].value) {
                signUpObj[field] = { ...signUpObj[field], error: true, errormessage: signUpObj[field].emptymessage };
                setFields(signUpObj);
                hasError = true;
            }
        };
        if (!hasError) { dispatch(signIn(signUpObj)); };
    };

    return (
        <div className="page pageLogin">
            <Logo />
            <form className="form formLogin" onSubmit={e => handleSubmit(e)}>
            <h2 className="formLabel">Entrar</h2>
            {Object.values(fields).map((field, index) => <Field key={index} setFields={setFields} fields={fields} {...field} />)}
            <Button
              classNames="buttonPrimary"
              label={loading ? '' : 'Entrar'}
              icon={loading ? 'loading' : ''}
              disabled={loading}
              onClick={handleSubmit}
            />
          </form>
        </div>
    );
};