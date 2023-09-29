import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg" 
            src="https://www.bikesrepublic.com/wp-content/uploads/2017/01/SYM-E-Bonus-110-1.jpg" 
            alt="sym ebonus" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCats">SYM</span>
                <span className="postCats"> MY MOTORCYCLE</span>
            </div>
            <span className="postTitle">
                lorem ipsum dolor sit amet
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
    </div>
  )
}
