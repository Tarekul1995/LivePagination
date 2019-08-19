import React,{useState,useEffect} from 'react';
import axios from "axios";
import PostBlog from "./component/post";
import Paginate from "./component/pagination";
function App() {
  const [data,setData] = useState({
    post:[],
    loading:false,
    currentPage:1,
    postPerpage:10
  });

  useEffect(()=>{
    const fetchPost = async () =>{
      setData({...data,loading:true})
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData({...data,post:res.data,loading:false})
      
      
    }
    fetchPost()
  },[])

  const indexOfLastpage = data.currentPage * data.postPerpage
  const indexOfFirstpage = indexOfLastpage - data.postPerpage
  const currentPosts = data.post.slice(indexOfFirstpage,indexOfLastpage)

  const handlePage = (number) =>setData({...data,currentPage:number})

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <PostBlog posts={currentPosts} loading={data.loading} />
      <Paginate postPerpage={data.postPerpage} totalpost={data.post.length} changeNumber={handlePage} currentPage={data.currentPage} />
    </div>
  );
}

export default App;
