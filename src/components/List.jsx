import styles from './List.module.css';
import PropTypes from 'prop-types';

function List({ items, category, className }) {
    const allItems = items;
    const itemsList = allItems.map((item, index) => <li key={index}>{item}</li>);

    return (
        <div className={`${styles.List} ${className}`}>
            <h2>{category}</h2>
            <ul>{itemsList}</ul>
        </div>
    );
}

List.defaultProps = {
    category: 'My Skills',
    items: []
};

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.array
};

export default List;