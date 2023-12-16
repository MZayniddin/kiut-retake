import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/kiut-logo-sm.png";
import { deanNavLinks, studentNavLinks } from "../../constants";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <>
      <div className="brand">
        <img src={logo} alt="KIUT" width={100} height={0} />
        <span>Kimyo International University in Tashkent</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        {deanNavLinks.map((link) => (
          <Menu.Item key={link.id}>
            <NavLink to={link.url}>
              <span
                className="icon"
                style={{
                  background: page === link.title.toLowerCase() ? color : "",
                }}
              >
                {link.icon}
              </span>
              <span className="label">{link.title}</span>
            </NavLink>
          </Menu.Item>
        ))}

        <Menu.Item className="menu-item-header" key="51">
          Student Pages
        </Menu.Item>

        {studentNavLinks.map((link) => (
          <Menu.Item key={link.id}>
            <NavLink to={link.url}>
              <span
                className="icon"
                style={{
                  background: page === link.title.toLowerCase() ? color : "",
                }}
              >
                {link.icon}
              </span>
              <span className="label">{link.title}</span>
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
}

export default Sidenav;
