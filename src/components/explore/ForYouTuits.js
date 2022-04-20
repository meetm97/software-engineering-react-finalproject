import {useEffect, useState} from "react";
import * as service from "../../services/topic-service";
import Tuits from "../tuits";

const ForYouTuits = () => {
    const [tuits, setTuits] = useState([]);
    const findMyTuits = () =>
    {console.log("findmytuits")
        service.findAllTuitsByTopic("For You")
            .then(tuits => setTuits(tuits));
    }
    useEffect(findMyTuits, []);
    return(
        <Tuits tuits={tuits}
               refreshTuits={findMyTuits}/>
    );
};

export default ForYouTuits;