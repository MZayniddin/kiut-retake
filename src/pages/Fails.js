import { Badge, Card, Table, Typography } from "antd";

const { Title } = Typography;

const colors = {
  red: "red",
  orange: "orange",
  yellow: "yellow",
  green: "green",
};

const columns = [
  {
    title: "SUBJECT",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "CREDIT",
    dataIndex: "credit",
    key: "credit",
  },

  {
    title: "GRADE POINTS",
    key: "grade",
    dataIndex: "grade",
  },
  {
    title: "SEMESTER",
    key: "semester",
    dataIndex: "semester",
  },
];

const data = [
  {
    key: "1",
    subject: <Title level={5}>Korean Language 1</Title>,
    credit: <Title level={5}>4</Title>,
    grade: (
      <div>
        <Title level={5}>
          <Badge color={colors.orange}></Badge>
          34
        </Title>
      </div>
    ),
    semester: <Title level={5}>1</Title>,
  },
  {
    key: "2",
    subject: <Title level={5}>Programming</Title>,
    credit: <Title level={5}>4</Title>,
    grade: (
      <Title level={5}>
        <Badge color={colors.yellow}></Badge>
        56
      </Title>
    ),
    semester: <Title level={5}>2</Title>,
  },
  {
    key: "3",
    subject: <Title level={5}>Math 1</Title>,
    credit: <Title level={5}>3</Title>,
    grade: (
      <Title level={5}>
        <Badge color={colors.red}></Badge>
        18
      </Title>
    ),
    semester: <Title level={5}>1</Title>,
  },
  {
    key: "4",
    subject: <Title level={5}>UI/UX</Title>,
    credit: <Title level={5}>2</Title>,
    grade: (
      <Title level={5}>
        <Badge color={colors.yellow}></Badge>
        44
      </Title>
    ),
    semester: <Title level={5}>3</Title>,
  },
  {
    key: "6",
    subject: <Title level={5}>Math 2</Title>,
    credit: <Title level={5}>3</Title>,
    grade: (
      <Title level={5}>
        <Badge color={colors.yellow}></Badge>
        48
      </Title>
    ),
    semester: <Title level={5}>2</Title>,
  },
  {
    key: "7",
    subject: <Title level={5}>PHISICS</Title>,
    credit: <Title level={5}>3</Title>,
    grade: (
      <Title level={5}>
        <Badge color={colors.yellow}></Badge>
        20
      </Title>
    ),
    semester: <Title level={5}>1</Title>,
  },
  {
    key: "5",
    subject: <Title level={5}>Probability and Statistics</Title>,
    credit: <Title level={5}>3</Title>,
    grade: (
      <Title level={5}>
        <Badge color={colors.orange}></Badge>
        25
      </Title>
    ),
    semester: <Title level={5}>3</Title>,
  },
];

const Fails = () => {
  return (
    <Card
      bordered={false}
      className="criclebox tablespace mb-24"
      title={`Fails: 7`}
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

export default Fails;
