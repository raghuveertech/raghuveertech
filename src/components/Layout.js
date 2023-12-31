import "./../scss/layout.scss";

const Layout = (props) => {
  return <section className="main">{props.children}</section>;
};

export default Layout;
