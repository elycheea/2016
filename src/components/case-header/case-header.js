// import { Link } from "gatsby";
import React from "react";
import moment from 'moment';

import "./case-header.css";

const CaseHeader = (props) => (
  

  <header>
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
    <h1>{props.title}</h1>
    <h2>{props.intro}</h2>
  </header>
)

export default CaseHeader
