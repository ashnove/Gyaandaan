import React, {useCallback, useState, useContext} from 'react';
import Toggle from 'rsuite/Toggle';
import ProfileContext from '../../context/ProfileContext';


function AsyncToggle(props) {
     const profileContext = useContext(ProfileContext);
    const { ProfileData, getProfileData, changeUserType } = profileContext;
    const {type } = ProfileData;
    const [checked, setChecked] = useState(type == 2 ? true : false);
    const [loading, setLoading] = useState(false);
  
    const toggle = useCallback(() => {
      setLoading(true);
					
			setChecked(checked => !checked);
			if(checked == true){
				changeUserType(1);
			}
			else {
				changeUserType(2);
			}
			
			setLoading(false);
    }, []);
  
    return <Toggle loading={loading} checked={checked} onChange={toggle} {...props} />;
  }

export default AsyncToggle;
