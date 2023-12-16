import { Row, Col, Card, Descriptions, Avatar, Button } from "antd";
import BgProfile from "../assets/images/bg-profile.jpg";
import profilavatar from "../assets/images/face-6.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const project = [
  {
    title: "Probability and Statistics",
    credit: 3,
    semester: 3,
    score: 25,
  },
  {
    title: "KOREAN LANGUAGE 1",
    credit: 3,
    semester: 1,
    score: 36,
  },
  {
    title: "PHYSICS II",
    credit: 4,
    semester: 2,
    score: 42,
  },
];

function Profile() {
  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      >
        <h2>KIUT</h2>
      </div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">Abdurahmon Asatullayev</h4>
                  <p>ISE-52U</p>
                </div>
              </Avatar.Group>
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
        <Col span={24} md={12} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Student Details</h6>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <Descriptions>
              <Descriptions.Item label="Full Name" span={3}>
                Abudrahmon Assatullayev
              </Descriptions.Item>
              <Descriptions.Item label="Passport" span={3}>
                AA1234567
              </Descriptions.Item>
              <Descriptions.Item label="ID" span={3}>
                1375683
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
                abdurahmon@mail.com
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col span={24} md={12} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Informations</h6>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <Descriptions>
              <Descriptions.Item label="Type of Education" span={3}>
                Full time education
              </Descriptions.Item>
              <Descriptions.Item label="Major" span={3}>
                Infomation Systems Engineering
              </Descriptions.Item>

              <Descriptions.Item label="Level" span={3}>
                3
              </Descriptions.Item>
              <Descriptions.Item label="Fails" span={3}>
                3
              </Descriptions.Item>
              <Descriptions.Item label="GPA" span={3}>
                3.5
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>

      <Card
        bordered={false}
        className="header-solid mb-24"
        title={
          <>
            <h6 className="font-semibold">Recommendations</h6>
            <p>Retake priority subjects</p>
          </>
        }
      >
        <Row gutter={[24, 24]}>
          {project.map((p, index) => (
            <Col span={24} md={12} xl={8} key={index}>
              <Card bordered={false} className="card-project">
                <h5>{p.title}</h5>
                <Descriptions>
                  <Descriptions.Item label="Credit" span={3}>
                    {p.credit}
                  </Descriptions.Item>
                  <Descriptions.Item label="Semester" span={3}>
                    {p.semester}
                  </Descriptions.Item>
                  <Descriptions.Item label="Grade Points" span={3}>
                    {p.score}
                  </Descriptions.Item>
                </Descriptions>
                <Row gutter={[6, 0]} className="card-footer">
                  <Col span={12}>
                      <Link className="tag-primary" to="/retake">
                      APPLICATION
                      </Link>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
          <Col span={24} md={12} xl={6}></Col>
        </Row>
      </Card>
    </>
  );
}

export default Profile;
