
import './App.css';
//importar las rutas a utiulizar
import routes from './config/routes'
import {Routes,Route} from 'react-router-dom'


function App() {



  return (
    <div className="App">

    <Routes>
      {routes().map(({path,element},index_route)=>
                  // esto es lo mismo que path={path} element={element}

                  <Route key={path} {...{path,element}} />

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
