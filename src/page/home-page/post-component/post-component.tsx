import { useState } from "react"
import "./post-component.css"
import  propTypes  from "prop-types"
import Post from "./post"

const PostComponent = () => {
    const [input, setInput] = useState('')

    const [posts, setPosts] = useState([])

    let id = 1;
  
    function addPost(title:any) {
      const newPost = {id, title}
      setPosts([newPost, ...posts] as any)
      id += 1;
    }

    function onChange(event:any) {
        setInput(event.target.value);
    }

    function onKeydown(event:any) {
        const title = event.target.value

        if (event.key === 'Enter' && title) {
            addPost(title);
            setInput('');
        }
    }

    return (
        <div className="container-fluid" id="body-post">
            <div className="Input">
                <div className="Input_header" id="text-header-post">โพสต์ขายทางนี้</div>

                <input 
                                            className="form-control" 
                                            type="text" 
                                            placeholder="คุณกำลังขายจะพระอะไร ?" 
                                            aria-label="default input example" 
                                            id="text-field-post" 
                                            value={input} 
                                            onChange={onChange}
                                            onKeyDown={onKeydown}
                                            />


                <div className="d-grid gap-2">

                    {/* <!-- Modal --> */}
                    {/* <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="input-button-post">คุณกำลังจะขายพระอะไร ?</button> */}

                    
                    {/* <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel"><p>โพสต์ขายทางนี้</p></h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form id="text-field-post">
                                    <div className="modal-body">

                                        
                                            <input 
                                            className="form-control" 
                                            type="text" 
                                            placeholder="คุณกำลังขายพระอะไร ?" 
                                            aria-label="default input example" 
                                            id="text-field-post" 
                                            value={input} 
                                            onChange={onChange}
                                            onKeyDown={onKeydown}
                                            />
                                        

                                    </div>
                                    <div className="modal-footer" id="modal-footer-id">
                                        <button 

                                        data-bs-dismiss="modal" 
                                        aria-label="Close"
                                        type="button" 
                                        className="btn btn-primary" 
                                        id="button-post-2">โพสต์
                                        

                                        </button>
                                    
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- Modal --> */}

                </div>
                    <button className="btn btn-primary" type="button" id="button-post">โพสต์</button>
                    {posts.map((post) => <Post key={post['id']} id={post['id']} title={post['title']}/>)}
            </div>
        </div>
    )
}

PostComponent.propTypes = {
    addPost: propTypes.func.isRequired
};

export default PostComponent