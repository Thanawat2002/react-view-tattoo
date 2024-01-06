import PropTypes from 'prop-types';
import './TattooItem.css';

function TattooItem(props) {
    const { tattoo, onTattooClick } = props;

    return (
        <div className="tattoo-item">
            <img src={tattoo.smallUrl} alt={tattoo.smallUrl} onClick={() => {onTattooClick(tattoo)}} />
            <h4>{tattoo.title}</h4>
        </div>
    );
}

TattooItem.propTypes = {
    tattoo: PropTypes.shape({
        smallUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default TattooItem;
