import React, {Fragment, useEffect, useState} from "react";
import Card from "./Card";
import {getFeaturedDentists, toggleFeaturedDentist} from "./utils/global.context";

const DentistsTable = ({dentists, updateFn}) => {
    const [data, setData] = useState(dentists);
    const [toggle, setToggle] = useState(false);
    let [index, countElements] = useState(0)

    useEffect(() => {
        updateData();
    }, [toggle]);


    const toggleFn = (den) => {
        toggleFeaturedDentist(den);
        if (updateFn !== undefined) {
            const featured = getFeaturedDentists();
            updateFn(featured);
            setData(featured);
        }

        setToggle(!toggle);
    };

    const updateData = () => {
        const featured = getFeaturedDentists();
        featured.forEach(fav => {
            data.forEach(den => {
                if (fav.id === den.id) {
                    den.featured = true;
                }
            })
        });
        setData(data);
    };

    const maxCols = 3;

    return (
        <Fragment>
            <div className="table card-grid">
                {data?.map((den) => {
                    return (
                        <div className={"border"} key={den.id}>
                            <Card dentist={den} toggleFn={toggleFn}></Card>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
}

export default DentistsTable;
