import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {

                if (!res.ok) {
                    throw Error('could not fetch the data')
                }
                return res.json();
            })
            .then((data) => {
                setIsPending(false)
                setData(data)
                setError(false)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                }
                else {
                    console.log(err.message)
                    setError(err.message)
                    setIsPending(false)
                }

            })

        return () => { console.log('cleanup'); abortCont.abort(); }
    }, [url])

    return { data, isPending, error }
}

export default useFetch