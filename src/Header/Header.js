import {Link} from 'react-router-dom';

function Header(props) {
    const itemList = props.data.nav.map(item => <li><Link key={item.text} to={item.link}>{item.text}</Link></li>);
    return (
        <nav>
            <ul>
                {itemList}                
            </ul>
        </nav>
    );
}

export default Header;
