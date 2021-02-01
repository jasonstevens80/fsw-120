import blogItems from './BlogItems'
import BlogPost from './BlogPost'
import Footer from './Footer'
import NavBar from './NavBar'

function App() {
  const blogComponents = blogItems.map(function(blog) {
    return (
      <BlogPost title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date}/>
    )
  })
  return (
    <div className="App">
      <NavBar />
      {blogComponents}
      <button style ={{float: 'right', height:'52px', width: '177px', paddingLeft: '15px', backgroundColor:"#00657b", color:'#fff', borderColor:'#00657b'}}>OLDER POSTS</button>
      <Footer />
    </div>
  );
}

export default App;