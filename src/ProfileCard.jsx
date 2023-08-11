
function ProfileCard({title, handle, image, alt, description}){

    return (
    <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={image} alt={alt} />
            </figure>
        </div>

        <div className="card-content">
            <div className="media-content">
                <h2 className="title is-4">Title is {title}</h2> 
                <h3 className="subtitle is-6">Handle is {handle}</h3>
            </div>
            <div className="content">{description}</div>
        </div>
    </div>
    )
}

export default ProfileCard