import React from 'react'

export const Card = () => {
    return (
        <li class="card">
          <div class="card__header">
            <img class="card__profile-img" src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/syfywire_cover_media/2018/09/c-3po-see-threepio_68fe125c.jpg" alt="c3po"/>
            <div class="card__meta">
              <div class="card__meta__displayname">
                C-3PO
              </div>
              <div class="card__meta__username">
                @humancyborgrelations
              </div>
              <div class="card__meta__timestamp">
                1 day ago
              </div>
            </div>
            <div class="card__menu">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
          
          <div class="card__body">
            I have a bad feeling about this!
          </div>
          
          <div class="card__footer">
            <span class="card__footer__like">
              <i class="far fa-heart"></i> 13
            </span>
            <span class="card__footer__comment">
              <i class="far fa-comment"></i> 2
            </span>
            <span class="card__footer__share">
              <i class="fas fa-share-alt"></i>
            </span>
          </div>
        </li>
    )
}