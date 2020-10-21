import React from 'react';
import propTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName  }) => {
    return (
        <>


            <h1 style={{color: 'Purple', fontSize:'7rem', backgroundColor:'Highlight'}}>{fullName}</h1>
            
            <h2 style={{ fontSize:'5rem', backgroundColor:'pink'}}>{bio}</h2>
           
            <h3 style={{color: 'Green', fontSize:'5rem', backgroundColor:'turquoise'}}>{profession }</h3>
            
            {children}
            <br></br>
            <button style={{color: 'Green' }} onClick={()=>handleName(fullName)}>Click Me</button>

        </>

    );

};




Profile.defaultProps = {

    fullName: "Foulen Elfoulani",

    bio: '25 years, from Nabul, foulen@gmail.com',

    profession: 'your profession',

    children: <p>Attention , you need a profile pic here!
        <br></br>
        <img src= "https://cdn.onlinewebfonts.com/svg/img_454260.png" width='150px' height='150px' alt='defaultpic' />
    </p>,



}

Profile.propTypes = {

    fullName: propTypes.string,

    bio: propTypes.string,

    profession: propTypes.string,

    children: propTypes.node.isRequired

}

export default Profile
