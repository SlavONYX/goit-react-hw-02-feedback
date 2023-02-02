import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
    return (
        <button
            className={css.btn}
            
            type="button"
            data-feedback={feedback}
            onClick={onLeaveFeedback}
        >
            {feedback}
        </button>
    );
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.btnList}>
            {options.map(option => (
                <FeedbackBtn
                    key={option}
                    feedback={option}
                    onLeaveFeedback={onLeaveFeedback}
                />
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};