import {Form, Modal } from 'antd';
import {FormItem } from '../components'
import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom" //el navigate me va a ayudar a navegar entre vistas o páginas.
import {loginWs, signupWs} from "../services/auth-ws.js"

const AuthPage = (props) => {
const location = useLocation ()
const navigate = useNavigate ();


  const onFinish = (values) => {

    if ( location.pathname === "/signup" && values.password !== values.confirmPassword){
      return Modal.error({content:"hey que pedo, las contrasen1as no coinciden"})
    }

    const service = location.pathname === "/signup" ? signupWs(values) : loginWs(values)



    service.then(res => {
const {data,status,errorMessage} = res;

if (status){
  console.log("data",data)
  props.authentication(data.user)
  Modal.success({content:"todo chido ya pudiste entrar"})
  navigate("/profile") // esto es como un redirect. 
  return
}else {
  //puden guardar el errorMessage en un state para mostrarlo en un html
  Modal.error({content:errorMessage})
}


    })
    .catch(error=>{
Modal.error({content:error})
    })
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

{location.pathname === '/signup' && <FormItem
label="Name"
name="firstName"
type="text"
/>}

{location.pathname === '/signup' &&
<FormItem
label="Last name"
name="lastName"
type="text"
/>}



      <FormItem
        label="Email"
        name="email"
        type="text"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      />


      <FormItem
        label="Password"
        name="password"
        type="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      />

{location.pathname === '/signup' &&
      <FormItem
      label="Confirm Password"
      name="confirmPassword"
      type="password"
      rules={[
          {
            required: true,
            message: 'Please match your password!',
          },
        ]}

      />}

      <FormItem
      type="button"
      button_text = "Send"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        
      />

{location.pathname === "/signup" ?
<p>Si ya tienes cuenta, <Link to="/login">ingresa</Link></p>
:
<p>Si aún no tienes cuenta, <Link to="/signup">registrate</Link></p>
}

    </Form>
  );
};

export default AuthPage;