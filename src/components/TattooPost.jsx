import PropTypes from 'prop-types';
import './TattooPost.css';


function TattooPost(props) {
    const { tattoo, onBgClick } = props;
    return (
        <div className="tattoo-post">
            <div className="tattoo-post-bg" onClick={onBgClick}></div>
            <div className="tattoo-post-content">
                <img src={tattoo.largeUrl} alt={tattoo.largeUrl} />
                <h4>{tattoo.title}</h4>
            </div>
        </div>
    );
}

TattooPost.propTypes = {
    tattoo: PropTypes.shape({
        largeUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onBgClick: PropTypes.shape({

    }).isRequired
};

export default TattooPost;