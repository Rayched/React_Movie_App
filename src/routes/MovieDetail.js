import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail(){
    const [Loading, setLoading] = useState(true);
    const [MovieInfo, setMovieInfo] = useState([]);
    const [DirName, setDirName] = useState();
    const {id} = useParams();

    const getMovieDetail = async() => {
        const MovieData= await(
            await fetch(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=3a15c5393ac14d11f6b132d6a07f330c&movieCd=${id}`)
        ).json();
        setMovieInfo(MovieData.movieInfoResult.movieInfo);
        setLoading(false);
    };

    useEffect(() => {
        getMovieDetail();
    }, []);

    useEffect(() => {
        if (MovieInfo.length === 0){
            return;
        } else {0
            console.log(MovieInfo);
        }
    }, [MovieInfo])

    return (
        <div>
            {
                Loading ? <h3>영화 정보를 가져오고 있습니다...</h3>
                :<div>
                    <h3>영화 명: {MovieInfo.movieNm}</h3>
                    <p>개봉 일: {MovieInfo.prdtYear}년</p>
                    <p>상영 시간: {MovieInfo.showTm}분</p>
                    <p>감독: </p>
                </div>
            }
        </div>
    );
}

export default MovieDetail;