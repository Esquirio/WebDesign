import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const textBtn = showAdd ? 'Close' : 'Add';
    const colorBtn = showAdd ? 'red' : 'green';
    const location = useLocation()

    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button bgColor={colorBtn} text={textBtn} onClick={onAdd} />)}
            {/* <Button color='blue' text='Hello 1'/>
            <Button color='red' text='Hello 2'/> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
            