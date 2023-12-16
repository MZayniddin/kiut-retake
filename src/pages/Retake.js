import {
  Card,
  Col,
  Row,
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  Button,
} from "antd";

const Retake = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Card title="Fill the form" bordered={false}>
        <Row gutter={[24, 0]}>
          <Col>
            <Form.Item
              label="Subject Name"
              name="subject"
              rules={[
                { required: true, message: "Please input subject name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col></Col>

          <Col>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input placeholder="Enter phone number" />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label="Case"
              name="case"
              rules={[{ required: true, message: "Please choose a case!" }]}
            >
              <Select placeholder="Choose case">
                <Select.Option value="1">Case 1</Select.Option>
                <Select.Option value="2">Case 2</Select.Option>
                <Select.Option value="3">Case 3</Select.Option>
                <Select.Option value="4">Case 4</Select.Option>
                <Select.Option value="5">Case 5</Select.Option>
                <Select.Option value="6">Case 6</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col>
            <Form.Item label="Language" name="language">
              <Radio.Group>
                <Radio value="english">EN</Radio>
                <Radio value="spanish">RU</Radio>
                <Radio value="french">UZ</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              label="User Agreement"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox>I agree to the terms and conditions</Checkbox>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};

export default Retake;
