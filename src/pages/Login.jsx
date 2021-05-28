/* import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header';
import Heading from '../components/Heading';

import AuthContext from '../context/AuthContext';
import { BASE_URL, AUTH_PATH } from '../utils/constants'; */

const Login = () => {
  /*  const [, setAuth] = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      const res = await axios.post(`${BASE_URL}${AUTH_PATH}`, data);
      setAuth(res.data);

      if (res.status === 200) {
        history.push('/admin');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  document.title = 'Grafix | Login';
  let pageHeading = document.title.replace('Grafix |', '');
  return (
    <div>
      <Header />
      <Heading title={pageHeading} />
    </div>
  ); */
};

export default Login;
