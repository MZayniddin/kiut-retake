import { Card, Table, Button, Typography } from "antd";

const { Title } = Typography;

const columns = [
  {
    title: "SUBJECT NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
  },

  {
    title: "DATE",
    key: "date",
    dataIndex: "date",
  },
  {
    title: "TIME",
    key: "time",
    dataIndex: "time",
  },
  {
    title: "ROOM",
    key: "room",
    dataIndex: "room",
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
];

const data = [
  {
    key: "1",
    name: <Title level={5}>Korean Language 1</Title>,
    type: <Title level={5}>TEST</Title>,
    date: <Title level={5}>18/11/2023</Title>,
    time: <Title level={5}>12:00</Title>,
    room: <Title level={5}>C 201</Title>,
    status: (
      <Button type="primary" className="tag-primary">
        ACTIVE
      </Button>
    ),
  },
  {
    key: "2",
    name: <Title level={5}>Programming</Title>,
    type: <Title level={5}>PROJECT</Title>,
    date: <Title level={5}>-</Title>,
    time: <Title level={5}>-</Title>,
    room: <Title level={5}>-</Title>,
    status: (
      <Button type="primary" className="tag-badge">
        PENDING
      </Button>
    ),
  },
  {
    key: "3",
    name: <Title level={5}>Math 1</Title>,
    type: <Title level={5}>TEST</Title>,
    date: <Title level={5}>-</Title>,
    time: <Title level={5}>-</Title>,
    room: <Title level={5}>-</Title>,
    status: (
      <Button type="primary" className="tag-badge">
        PENDING
      </Button>
    ),
  },
  {
    key: "4",
    name: <Title level={5}>UI/UX</Title>,
    type: <Title level={5}>TEST</Title>,
    date: <Title level={5}>25/11/2023</Title>,
    time: <Title level={5}>09:00 </Title>,
    room: <Title level={5}>A320</Title>,
    status: (
      <Button type="primary" className="tag-primary">
        ACTIVE
      </Button>
    ),
  },
  {
    key: "5",
    name: <Title level={5}>Probability and Statistics</Title>,
    type: <Title level={5}>TEST</Title>,
    date: <Title level={5}>18/11/2023</Title>,
    time: <Title level={5}>15:00</Title>,
    room: <Title level={5}>A 305</Title>,
    status: (
      <Button type="primary" className="tag-primary">
        ACTIVE
      </Button>
    ),
  },
];

const Schedule = () => {
  return (
    <Card
      bordered={false}
      className="criclebox tablespace mb-24"
      title="Upcoming Exams"
      // extra={
      // <>
      //   <Radio.Group onChange={() => {}} defaultValue="a">
      //     <Radio.Button value="a">All</Radio.Button>
      //     <Radio.Button value="b">ACTIVE</Radio.Button>
      //   </Radio.Group>
      // </>
      // }
    >
      <div className="table-responsive">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="ant-border-space"
        />
      </div>
    </Card> 
  );
};

export default Schedule;
