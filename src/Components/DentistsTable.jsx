import React, {Fragment, useEffect, useState} from "react";
import Card from "./Card";
import { getFeaturedDentists, toggleFeaturedDentist } from "./utils/global.context";

const DentistsTable = ({dentists, updateFn}) => {
    const [data, setData] = useState(dentists);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        updateData();
    }, [toggle])

    const toggleFn = (den) => {
        toggleFeaturedDentist(den);
        if (updateFn !== undefined){
            const featured = getFeaturedDentists();
            updateFn(featured);
            setData(featured);
        }

        setToggle(!toggle);
    }

    const updateData = () => {
        const featured = getFeaturedDentists();
        featured.forEach(fav => {
            data.forEach(den => {
                if(fav.id === den.id){
                    den.featured = true;
                }
            })
        });
        setData(data);
    }

    return (
        <Fragment>
            <div>
                <div className="table card-grid">
                    {data?.map((den) => {
                        return (
                            <td>
                                <Card dentist={den} toggleFn={toggleFn}></Card>
                            </td>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default DentistsTable;
