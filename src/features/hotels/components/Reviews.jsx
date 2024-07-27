import React from "react";

function Reviews() {
  return (
    <div className="col-md-6">
      <div className="review-card p-4 mb-4 shadow bg-white rounded">
        <h5>Reviews</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>username1</strong> - <span>3/5</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li className="list-group-item">
            <strong>username2</strong> - <span>4/5</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
        <button type="button" className="btn btn-primary btn-block mt-2">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Reviews;
