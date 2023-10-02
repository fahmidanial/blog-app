import "./write.css"

export default function Write() {
  return (
    <div className="write">
          <img 
            className="writeImg" 
            src="https://images.pexels.com/photos/3040260/pexels-photo-3040260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" 
          /> 
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="fa-solid fa-folder-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        </form>
    </div>
  )
}
