import CategoryDescription from '../CategoryDescription/CategoryDescription';
// import {useLocation} from 'react-router-dom';

function Category() {
    // let url = useLocation();
    // console.log(url);
    return (
        <>
        <h1>Category</h1>
            <CategoryDescription />
            <a href="/cat">Назад</a>
            <ul>
                <li><a href="/cat/notebook">Ноутбуки</a></li>
                <li><a href="/cat/monitor">Мониторы</a></li>
                <li><a href="/cat/cellphone">Мобильные телефоны</a></li>
            </ul>
        </>
    );
}

export default Category;