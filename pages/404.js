import React, { useEffect } from "react"
import {useRouter} from 'next/router';

const NotFound =() => {

    const router = useRouter();
    
    useEffect(() => {
        
        setTimeout(() => {
            router.push('/contact');
        },3000)
    },[])
    
    return(
        <div>
            <h2>Page not found. Please try again.</h2>
        </div>
    )
}

export default NotFound