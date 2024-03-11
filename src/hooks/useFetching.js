
import React, {useState} from 'react'

export default function useFetching(callback) {
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErorr] = useState();

    const fetching = async (params) => {
        try {
            setIsLoading(true);
            await callback(params);
        } catch (e) {
            setErorr(e.message);
        }finally{
            setIsLoading(false);
        }

    }

    return [fetching, isLoading, error];
    
}
