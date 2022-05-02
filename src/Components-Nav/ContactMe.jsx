import React from 'react'
import ScriptTag from 'react-script-tag';


const ContactMe = () => {
  return (
    <div>
      <ScriptTag isHydrating={true} type="text/javascript" 
      src="https://platform.linkedin.com/badges/js/profile.js" />
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="sharad-kushwah" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sharad-kushwah?trk=profile-badge">Sharad Kushwah</a></div>
    </div>
  )
}

export default ContactMe