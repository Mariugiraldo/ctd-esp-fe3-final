import React, {Fragment, useState} from 'react'
import DentistsTable from '../Components/DentistsTable';
import { getFeaturedDentists } from "../Components/utils/global.context";

const Favorites = () => {

    const [favorites, setFavorites] = useState(
        getFeaturedDentists()
    );

    function updateFn(favs) {
        setFavorites(favs)
    }

    return (
        <Fragment>
            <div className="content-top-margin">
                <h1>FAVORITE DENTISTS</h1>
                <DentistsTable dentists={favorites} updateFn={updateFn}></DentistsTable>
            </div>
        </Fragment>
    )
}

export default Favorites