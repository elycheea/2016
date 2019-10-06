// import { Link } from "gatsby";
import React from "react";
import moment from 'moment';

import "./case-header.css";

const CaseHeader = (props) => (
  

  <header className="case__header">
    <div className="post__info">
      <div className="post__metadata">
        <time datetime={props.date}>{ moment(props.date).format("MMMM YYYY") }</time>
        {props.tags && 
          // <span class="tag-separator">/</span>
          <ul className="post__tag-list">
            {props.tags.map((tag, index) => (
              <li className="post__tag" key={index}>{tag}</li>
            ))}
          </ul>
        }
      </div>
      <h1 className="post__title">{props.title}</h1>
      <p className="post__intro">{props.intro}</p>
    </div>
  </header>
)

export default CaseHeader
