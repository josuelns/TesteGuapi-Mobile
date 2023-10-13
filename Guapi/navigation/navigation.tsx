import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import AuthMiddleware from '../middlewares/authMiddlewares';
import PublicRoutes from './publicRoutes';
import ProtectRoutes from './protectRoutes';

const Navigation = () => {
  const authData = useSelector((state: any) => state.auth);
  const [autheticate, setAuthenticate] = useState<string | null>(null)

  useEffect(() => {
    AuthMiddleware().then((auth) => {
      setAuthenticate(auth)
    })
  }, [authData]);

  return (
    <>
      {autheticate ? <ProtectRoutes /> : <PublicRoutes />}
    </>
  );
};

export default Navigation;