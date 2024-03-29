import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, MovieName, openDate, AudiCount}){
    let AudiC = parseInt(AudiCount);
    let ConvertAudiC = AudiC.toLocaleString("ko-KR");
    
    return (
        <div className="MovieItemBox">
            <div className="MovieItem">
                <Link to={`/movie/${id}`}>
                    <h4 className="MovieTitle">
                        {MovieName}
                    </h4>
                    <p>개봉: {openDate}</p>
                    <p>누적 관객: {ConvertAudiC}명</p>
                </Link>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    MovieName: PropTypes.string.isRequired,
    openDate: PropTypes.string.isRequired,
    AudiCount: PropTypes.string
};

export default Movie; 