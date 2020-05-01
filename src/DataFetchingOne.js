import React, { useEffect , useState} from "react";
import axios from "axios";

const DataFetchingOne = () => {
  const [post, setPost] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/tozzzdos/1")
    .then(res => {
      console.log("res", res.data);
      setPost(res.data)
    setIsLoading(false)

    })
    .catch(err => {
      console.log('err', err)
      setError('theres an error')
    setIsLoading(false)

    })
  }, []);

  return <div>
    {post.title}
    {error}
    {isLoading ? 'loading' :''}
    </div>;
};

export default DataFetchingOne;
