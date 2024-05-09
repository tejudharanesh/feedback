import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  //conditional class
  //   return <div className={`card ${reverse && 'reverse'}`}>
  //     {children}</div>;

  //conditional style
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "black" : "white",
        color: reverse ? "white" : "black",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
    reverse: true,
}

Card.propTypes = {
    children : PropTypes.node.isRequired,
    reverse : PropTypes.bool,
}


export default Card;
