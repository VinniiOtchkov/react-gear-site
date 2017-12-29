import React from 'react';

const Post = (props) => {
  return (
    <div>
      <div className="list-group">
        <span className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="d-flex w-100 justify-content-between"></div>
          <p className="mb-1">{props.gear.name}</p>
          <small>Released: {props.gear.year}</small>
        </span>
        <span className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <img src={props.gear.imageUrl} alt={props.gear.name} />
          </div>
          <small className="text-muted">Price: ${props.gear.price}.00</small>
        </span>
      </div>
    </div>
  )
}
export default Post;
