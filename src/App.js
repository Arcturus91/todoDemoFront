import { useState, useEffect } from "react";
import "./App.css";
//importar las rutas a utiulizar
import routes from "./config/routes";
import { Routes, Route, useNavigate } from "react-router-dom";
//importar los componentes que sean globales
import { Navbar } from "./components";
import { logoutWs } from "./services/auth-ws";
import { Modal } from "antd";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  console.log("use navigate", navigate);

  //funciones globales!
  function authentication(user) {
    setUser(user);
  }

  function handleLogout() {
    //ejecutar el end point para hacer logout y borrar el usuario del state.

    Modal.confirm({
      title: "cerrar sesion",
      content: "estas seguro de lo que vas a hacer?",
      onOk() {
        logoutWs().then((res) => {
          const { data, status, errorMessage } = res;

          if (status) {
            Modal.success({
              content: data.successMessage,
            });
            navigate("/");
            setUser(null);
          } else {
            alert(errorMessage);
          }
        });
      },
    });
  }

  return (
    <div className="App">
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        {routes({ user, handleLogout, authentication }).map(
          ({ path, element }, index_route) => (
            // esto es lo mismo que path={path} element={element}

            <Route key={path} {...{ path, element }} />
          )
        )}
      </Routes>
    </div>
  );
}

export default App;

/* 

import { Button, Form, Input } from 'antd';

import {loginWs} from './services/auth-ws';
import axios from 'axios';


  const onFinish = (values) => {
    console.log('Success:', values);
    loginWs(values).then(res=>{
      console.log("la respuesta", res)
    })
    .catch(err => {console.log("el error",err)})
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



<Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Correo electrónico"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

 */
