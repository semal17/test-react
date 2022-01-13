import CategoryDescription from '../CategoryDescription/CategoryDescription';
import {Link} from 'react-router-dom';

function Category(props) {
    const itemList = props.data.nav.map(item => <li><Link key={item.text} to={item.link}>{item.text}</Link></li>);
    
    return (
        <>
            <h1>Category</h1>
            <CategoryDescription />
            <Link to="/cat">Назад</Link>
            <ul>            
                {itemList}
            </ul>


        </>
    );
}

export default Category;