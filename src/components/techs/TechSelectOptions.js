import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechSelectOption = ({ getTechs, tech:{ techs,loading } }) => {
    useEffect(()=>{
        getTechs();
        // eslint-disable-next-line
    },[]);

    return (
        !loading && techs!==null && techs.map(tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
            {tech.firstName} {tech.lastName}
        </option>)
    )
}

TechSelectOption.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechSelectOption);
