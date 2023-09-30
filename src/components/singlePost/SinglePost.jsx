import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img
                src="https://picsum.photos/536/354"
                alt=""
                className="singlePostImg"
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>fahmi danial</b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod nemo debitis? Eius voluptatum molestias aperiam
            </p>
        </div>
    </div>
  )
}
