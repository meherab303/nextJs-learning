import React from 'react';

const PersonalDetails = ({params,searchParams}) => {
    console.log('hello world')
    return (
        <div>
            perosnla details:{params.personalDetails}:{searchParams.laptop}
        </div>
    );
};

export default PersonalDetails;