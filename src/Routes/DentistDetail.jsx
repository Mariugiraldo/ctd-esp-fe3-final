import React, {Fragment, useEffect, useState} from "react";
import {getContextDentistDetail} from "../Components/utils/global.context";

const DentistDetail = () => {

    const [dentist, setDentist] = useState(getContextDentistDetail)

    return (<Fragment>
            <div className={"content-top-margin title"}>
                <h3>DENTIST </h3><h3 className={"dent-id"}>{dentist.id}</h3><h3> DETAIL</h3>
            </div>

            <div className="detail-container">
                <div className="detail-col">
                    <div className="detail-row">
                        <div className="detail-col lbl">
                            <h1>Name: </h1>
                        </div>
                        <div className="detail-col">
                            <h2>{dentist?.name}</h2>
                        </div>
                        <div className="detail-col lbl">
                            <h1>Email: </h1>
                        </div>
                        <div className="detail-col">
                            <h2>{dentist?.email}</h2>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-col lbl">
                            <h1>Phone: </h1>
                        </div>
                        <div className="detail-col">
                            <h2>{dentist?.phone}</h2>
                        </div>
                        <div className="detail-col lbl">
                            <h1>Website: </h1>
                        </div>
                        <div className="detail-col">
                            <h2>{dentist?.website}</h2>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default DentistDetail;
