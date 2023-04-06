import React, {Fragment, useEffect, useState} from "react";
import DentistsTable from "../Components/DentistsTable";

const Home = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [dentists, setDentists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDentists(data)
                setLoading(false);
            });
    }, [loading]);

    return (
        <Fragment>
            {loading ? 'Cargando...' :
                <Fragment>
                    <div className="content-top-margin">
                        <h1>HOME</h1>
                        <DentistsTable dentists={dentists}></DentistsTable>
                    </div>
                </Fragment>}
        </Fragment>
    );
};

export default Home;