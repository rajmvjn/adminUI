import { useState, useCallback } from 'react';

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const makeHttpCall = useCallback( async (url, postHttpCallMethod = ()=>{}, method="get", requestData = {}) => {

       setIsLoading(true) 
       const response = await fetch(url, requestData);
       const data = await response.json();     
       //console.log(data);
       postHttpCallMethod(data);
       setIsLoading(false);

    }, []);

    return {
        isLoading,
        error,
        makeHttpCall
    }

}

export default useHttp;