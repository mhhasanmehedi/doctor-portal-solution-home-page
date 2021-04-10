import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{height:"600px"}}>
             <div className="col-md-4 offset-md-1">
                 <h1>Your New Smile <br/> Starts Here</h1>
                 <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and <br/>
                 typesetting industry. Lorem ipsum has been the <br/>
                 industry's standard dummy text ever since the</p>
                 <button className="btn">GET APPOINTMENT</button>
             </div>
             <div className="col-md-6">
                 <img src={chair} alt="" className="img-fluid"/>
             </div>
        </main>
    );
};

export default HeaderMain;