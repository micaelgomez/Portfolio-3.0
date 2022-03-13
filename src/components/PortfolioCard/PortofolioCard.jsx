import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import './PortfolioCard.scss'


export default function PortofolioCard({id,title,img,page,code}) {
  return (
    <div id={id} className="item">
    <img src={img} alt="foto" />
        <div className="abs">
            <h3>{title}</h3>
              <div className="abs-cont">
                  <a href={page} target="_blank" rel="noreferrer"  className="btn">
                  <FavoriteIcon />
                  Link</a>
                  <a href={code} target="_blank" rel="noreferrer"  className="btn">
                  <GitHubIcon />
                  Code</a>
              </div>
        </div> 
  </div>
  )
}
