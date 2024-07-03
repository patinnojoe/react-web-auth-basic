import AuthForm from './AuthForm';

export default function Register() {
  const handlerRegistration = () => {
    console.log('registration');
  };
  return <AuthForm isLogin={false} handler={handlerRegistration} />;
}
