'use client'
import { getUserAgentDetails } from '@/utils/userAgent';
import { useState, useEffect } from 'react';

const useShowSignUp = () => {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  useEffect(() => {
    const details = getUserAgentDetails(navigator, window.location);
    const showSignUp=details.host.endsWith('co.il')
    setShowSignUp(!showSignUp);
  }, []);

  return showSignUp;
};

export default useShowSignUp;
