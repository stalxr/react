import React from "react";

const PostItem = (props) => {
    console.log();
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>JavaScript - Язык программирования</div>
        </div>

        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;