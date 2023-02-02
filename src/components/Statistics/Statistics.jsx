import css from './Statistics.module.css';
import { Notification } from '../Notification/Notification';
import PropTypes from 'prop-types';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <>
            {total > 0 && (
                <ul className={css.statisticList}>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>
                        Positive Percentage: {positivePercentage}%
                    </li>
                </ul>
            )}
            {total === 0 && <Notification message="No Feedback given" />}
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};