import React from 'react'

export const Card = (props) => {
    return (
        <li className="card">
          <div className="card__header">
            <img className="card__profile-img" src={props.data.profileImg} alt="c3po"/>
            <div className="card__meta">
              <div className="card__meta__displayname">
                {props.data.displayName}
              </div>
              <div className="card__meta__username">
                @{props.data.userName}
              </div>
              <div className="card__meta__timestamp">
                {props.data.timeStamp}
              </div>
            </div>
            <div className="card__menu">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          
          <div className="card__body">
            {props.data.message}
          </div>
          
          <div className="card__footer">
            <span className="card__footer__like">
              <i className="far fa-heart"></i> {props.data.likes}
            </span>
            <span className="card__footer__comment">
              <i className="far fa-comment"></i> {props.data.comments}
            </span>
            <span className="card__footer__share">
              <i className="fas fa-share-alt"></i>
            </span>
          </div>
        </li>
    )
}