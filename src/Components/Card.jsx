import React, {Fragment, useEffect, useState} from "react";
import { MdStar, MdStarBorder} from "react-icons/md";
import {Link} from "react-router-dom";
import {contextDentistDetail} from "./utils/global.context";

const Card = ({dentist, toggleFn}) => {

    const [dent, setDent] = useState(dentist);

    useEffect(() => {
        setDent(dentist);
    }, [dentist])

    const toggle = () => {
        dentist.featured = !dentist.featured;
        toggleFn(dentist);
        setDent(dentist);
    };

    return (
        <Fragment>
            <div className="card">
                <div className="img-container">
                    <img src="images/doctor.jpg"></img>
                </div>
                <Link to={`/dentist/${dent.id}`} onClick={() => contextDentistDetail(dentist)}>
                    <h3>{dent.name}</h3>
                </Link>
                <h4>{dent.username}</h4>
                <button onClick={toggle} className="favButton">
                    {dent.featured ? <><MdStar color={"gold"} size={60} /></>
                        : <><MdStarBorder color={"gold"} size={60}/></>}
                </button>
            </div>
        </Fragment>
    );
};

export default Card;
