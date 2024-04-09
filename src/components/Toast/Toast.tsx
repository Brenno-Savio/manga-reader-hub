import { Toaster } from 'react-hot-toast';

const Toast = () => (
  <Toaster
    toastOptions={{
      duration: 3000,
      success: { style: { background: '#28A745' } },
      error: { style: { background: '#93050E' } },
      style: {
        color: 'white'
      }
    }}
  />
);

export default Toast;
