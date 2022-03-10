import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import './PortfolioCard.scss'

export default function PortofolioCard() {
  return (
    <div className="item">
    <img src="assets/descarga.jpg" alt="foto" />
        <div className="abs">
            <h3>Banking App</h3>
              <div className="abs-cont">
                  
                  <a href="#" className="btn">
                  <FavoriteIcon />
                  Link</a>
                  <a href="#" className="btn">
                  <GitHubIcon />
                  Code</a>
              </div>
        </div> 
  </div>
  )
}
