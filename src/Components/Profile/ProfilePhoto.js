import React from "react";
import myProfileImageUrl from "../../images/imageInSrc.jpg"

const ProfilePhoto = () => {
 return <img 
            style={{width:"260px", height:"260px", borderRadius:"180px" ,  border:"solid 3px #2E4053"}}
            src={myProfileImageUrl} alt="profileimage"></img>;
};
export default ProfilePhoto;