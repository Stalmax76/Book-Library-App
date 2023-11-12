import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice';

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatсh = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispatсh(clearError());
    }
  }, [errorMessage, dispatсh]);
  return <ToastContainer position="top-right" autoClose={3000} theme="dark" />;
};

export default Error;
