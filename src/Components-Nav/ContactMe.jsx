import React, { useEffect } from 'react'


const ContactMe = () => {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

  return (
    <div>
      <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="sharad-kushwah" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sharad-kushwah?trk=profile-badge">Sharad Kushwah</a></div>
    </div>
  )
}

export default ContactMe