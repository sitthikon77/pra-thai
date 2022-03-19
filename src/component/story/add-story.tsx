import "./story.css"

const AddStoryComponent = () => {
    return (
        <div className="middle_feed">
            <div className="story">
                <ul className="add-story-list">
                    <li>
                        <a href="#">
                            <div className="create_story">
                                <div className="story_thumb">
                                    <img src="./image/story/plus.png"/>
                                </div>
                                <div className="story_btn">
                                    <span><img className="plus" src="./image/story/plus.png"/></span>
                                    <p className="add-text">เพิ่มสตอรี่</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AddStoryComponent