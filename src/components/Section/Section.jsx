import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
    <div className={css.section}>
        <h2 className={css.title}> {title}</h2>
        {children}
    </div>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};