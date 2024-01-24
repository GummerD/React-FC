
import React, {useState} from 'react'

export default function useFetching(callbeack) {
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErorr] = useState();

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callbeack();
        } catch (e) {
            setErorr(e.message);
        }finally{
            setIsLoading(false);
        }

    }

    return [fetching, isLoading, error];
    
}
