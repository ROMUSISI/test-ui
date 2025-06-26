const getBaseUrl = () => {
  
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  if (!baseUrl) {
    console.warn('VITE_API_BASE_URL is not defined in the environment variables.');
  }

  return baseUrl;

};

export {getBaseUrl}