import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  // {children} is a special prop that handles everything between the element tags for the given component

  // Conditional class using ternary operator
  return <div className={reverse ? 'card reverse' : 'card'}>{children}</div>

  // A more complicated way to do the same...
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>

  // Conditional style using ternary operator
  //   return (
  //     <div
  //       className="card"
  //       style={{
  //         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //         color: reverse ? '#fff' : '#000',
  //       }}
  //     >
  //       {children}
  //     </div>
  //   )
}

Card.defaultProps = { reverse: false }

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
