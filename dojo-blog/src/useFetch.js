import { useState, useEffect } from "react"
const useFetch = (url)=>{
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(false)
    useEffect(()=>{
        fetch(url)
            .then(res=>{
                
                if(!res.ok)
                {
                    throw Error('could not fetch the data')
                }
                return res.json();
            })
            .then((data)=>{
                setIsPending(false)
                setData(data)
                setError(false)
            })
            .catch(err=>{
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            })
    },[url])

    return {data, isPending, error}
}

export default useFetch