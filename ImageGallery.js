import React from 'react'
import { imgObj } from './Data'
import './index.css';
export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: imgObj

    } 
  }

  render() {
    let pictures = this.state.image.map((val) => {
      if (val.category.indexOf(this.props.imagename) >= 0) {
        return (
          <div className='imagegallery'>
            <div ><img src={val.img} /></div>
          </div>

        )
      }
    })
    return (
      <div className='dispan'>
        <div className='pict'>{pictures}</div>
      </div>
    )
  }
}