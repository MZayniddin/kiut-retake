import React, { Component } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import kiutLogo from "../assets/images/kiut-logo-sm.png";

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

export default class SignIn extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <Layout className="layout-default layout-signin">
          <Header>Kimyo International University in Tashkent</Header>
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 2 }}
                md={{ span: 12 }}
              >
                <Title className="mb-15">Sign In</Title>
                <Title className="font-regular text-muted" level={5}>
                  Enter your username and password to sign in
                </Title>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input placeholder="Password" />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    className="aligin-center"
                    valuePropName="checked"
                  >
                    <Switch defaultChecked onChange={onChange} />
                    Remember me
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      SIGN IN
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col
                className="sign-img"
                style={{ padding: 12 }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              >
                <img src={kiutLogo} alt="" />
              </Col>
            </Row>
          </Content>
          <Footer>
            <p className="copyright">
              Copyright © KIUT {new Date().getFullYear()}
            </p>
          </Footer>
        </Layout>
      </>
    );
  }
}
