import React, { useState, useEffect } from 'react';

const pets = [
  {
    name: "Sombra",
    age: 0.5,
    color: "black",
    icon_color: "#333",
    is_awake: false,
    is_affectionate: true,
  }, {
    name: "Grizelle",
    age: 5,
    color: "brown",
    icon_color: "#612f24",
    is_awake: true,
    is_affectionate: true,
  }, {
    name: "Maxi",
    age: 4,
    color: "brown ombre",
    icon_color: "#c96",
    is_awake: true,
    is_affectionate: true,
  }, {
    name: "Dexter",
    age: 7,
    color: "black",
    icon_color: "#000",
    is_awake: false,
    is_affectionate: true,
  },
  {
    name: "Bazel",
    age: 2.5,
    color: "light brown",
    icon_color: "#35241A",
    is_awake: true,
    is_affectionate: true,
  }
]

const ListCardItem = (props) => {
  return (<div className="d-flex text-muted pt-3">
    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill={props.fill ? props.fill : "#007bff"}></rect><text x="50%" y="50%" fill={props.fill ? props.fill : "#007bff"} dy=".3em">32x32</text></svg>

    <p className="pb-3 mb-0 small lh-sm border-bottom w-100 text-start">
      <strong className="d-block text-gray-dark">@{props.user ? props.user : "username"}</strong>
      {props.children}
    </p>
  </div>);
}


const ListCard = () => {
  const [comments, setComments] = useState([]);
  const [render, rerender] = useState(true);
  
  const createPetComment = () => {
    let pet = pets[Math.floor(Math.random() * pets.length)];
    let updatedComment = comments;
    updatedComment.push({
      user: pet.name,
      color: pet.icon_color,
      message: "This is a random message from a pet."
    });
    setComments(updatedComment);
    rerender(!render);
  }

  useEffect(() => {
    setComments([
      {
        user: "Shane",
        color: "#09c",
        message: "Now this text will show up in the component."
      },
      {
        user: "Jang",
        color: "#0df",
        message: "This is Jang's comments on this particular event."
      },
      {
        user: "Sombra",
        color: "#000",
        message: "How can I even type?  I'm a cat."
      },
    ])
  }, [])

  return (<div className="my-3 p-3 bg-body rounded shadow-sm">
    <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
    {comments.map((comment, idx) => {
      return (
        <ListCardItem key={idx} user={comment.user} fill={comment.color}>{comment.message}</ListCardItem>
      )
    })}
    <small className="d-block text-end mt-3">
      <button className="btn btn-primary" onClick={createPetComment}>All updates</button>
    </small>
  </div>)
}

export { ListCard };