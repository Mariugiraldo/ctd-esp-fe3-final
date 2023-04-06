import React, {Fragment, useEffect, useState} from "react";
import {MdOutlineStar, MdOutlineStarOutline} from "react-icons/md";

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
                <h3>{dent.name}</h3>
                <h4>{dent.username}</h4>
                <button onClick={toggle} className="favButton">
                    {dent.featured ? <><MdOutlineStar/> Remove from favorites</> : <><MdOutlineStarOutline/> Add to favorites</>}
                </button>
            </div>
        </Fragment>
    );
};

export default Card;
