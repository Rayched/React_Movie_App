import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail(){
    const [MovieInfo, setMovieInfo] = useState([]);
    const [DirName, setDirName] = useState();
    const {id} = useParams();

    const getMovieDetail = async() => {
        const MovieData= await(
            await fetch(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=3a15c5393ac14d11f6b132d6a07f330c&movieCd=${id}`)
        ).json();
        setMovieInfo(MovieData);
    };

    useEffect(() => {
        getMovieDetail();
    }, []);

    console.log(MovieInfo);

    return (
        <div>
            <h3>영화 명: {MovieInfo.movieInfoResult.movieInfo.movieNm}</h3>
            <p>개봉 일: {MovieInfo.movieInfoResult.movieInfo.prdtYear}년</p>
            <p>상영 시간: {MovieInfo.movieInfoResult.movieInfo.showTm}분</p>
            <p>감독: </p>
        </div>
    );
}

export default MovieDetail;