import { ChangeEvent, FormEvent, useState, useEffect, useContext } from 'react';
import logoNg from '/src/assets/nglogo.png';
import {
  Container,
  FormContainer,
  Title,
  LogoContainer,
} from "./styles"
import Footer from '../Footer';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import { AuthContext } from '../../contexts/Auth';
import { Api } from '../../services/api';

interface IForm {
  username: string,
  password: string
}

type FormError = {
  username: string,
  password: string

}


const RegistrationForm: React.FC = () => {
  const { signUp } = useContext(AuthContext)
  const initialValue = { username: '', password: '' }
  const [formValues, setFormValues] = useState<IForm>(initialValue);
  const [formErrors, setFormErrors] = useState<FormError>(
    {
      username: '',
      password: '',
    }
  );
  const [isSubmit, setIsSubmit] = useState(false);



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    signUp(formValues.username, formValues.password);
  }


  useEffect(() => {
    console.log('Erro', formErrors);
    console.log(Object.keys(formErrors).length)
    if (Object.keys(formErrors).length === 2 && isSubmit) {
      console.log('valor dentro', formValues);
    }
  }, [formErrors]);

  // const validate = (values: IForm) => {
  //   if (!values.username) {
  //     setFormErrors(curr => ({
  //       ...curr,
  //       usernameError: 'O nome de usuário é obrigatório!'
  //     }))

  //     if (!values.password) {
  //       setFormErrors(curr => ({
  //         ...curr,
  //         passwordError: 'A senha é obrigatória!'
  //       }))
  //     }
  //   }
  // }

  const validate = (values: FormError) => {
    const errors = { username: '', password: '' }
    // const upperCaseLetter = /[A-Z]+/;
    // const oneDigit = /(?=.*?[0-9])/;

    if (!values.username) {
      errors.username = 'O nome do usuário é obrigatório!';
    }

    if (!values.password) {
      errors.password = 'A senha é obrigatória!';
    }

    return errors;
  }

  return (
    <Container>
      <FormContainer>
        <LogoContainer>
          <img src={logoNg} alt="logo-ng" />
        </LogoContainer>
        <Title>Cadastro</Title>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Crie seu nome de usuário'
            name='username'
            placeholder='Digite seu nome de usuário'
            type='text'
            value={formValues.username}
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>

          <FormInput
            label='Crie sua senha'
            name='password'
            placeholder='Digite seu nome de usuário'
            type='password'
            value={formValues.password}
            onChange={handleChange}
          />
          <p>{formErrors.password}</p>

          <FormButton type='submit' text='Cadastrar' />
        </form>
        <Footer isLoginPage={false} />
      </FormContainer>
    </Container>
  )
}

export default RegistrationForm;
