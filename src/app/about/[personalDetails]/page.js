export const metadata={
    title:'perosnal details',
    description:"this is personal details page"

}

const PersonalDetails = ({params,searchParams}) => {
    console.log('hello world')
    return (
        <div>
            perosnla details:{params.personalDetails}:{searchParams.laptop}
        </div>
    );
};

export default PersonalDetails;