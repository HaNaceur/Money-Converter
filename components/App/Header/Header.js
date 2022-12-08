import PropTypes from 'prop-types';

function Header({
  title,
  topTitle,
  children,
  ...rest 
}) {
  console.log(children);
  return (
    <header
      className="container"
      {...rest} 
    >
      {topTitle}
      <h1 className="title">{title}</h1>
      {children}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;