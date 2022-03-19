import "./story.css"

const StoryComponent = ({name,image,profile} : {name:any,image:any,profile:any}) => {
    return(
            <div className="middle_feed">
                <div className="story">
                    <ul className="story-list">

                        <li className="story-list-other">
                            <a href="#">
                                <div className="create_story other-story">
                                    <div className="story_thumb">
                                        <img src={image}/>
                                    </div>
                                    <div className="story_profile">
                                        <span className="round-img"><img src={profile}/></span>
                                    </div>
                                    <div className="story_name">
                                        <p>{name}</p>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
    )
}

export default StoryComponent