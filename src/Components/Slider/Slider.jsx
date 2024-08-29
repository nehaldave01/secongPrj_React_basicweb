import './Slider.css'
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpg'
import img3 from '../../Images/img3.jpg'
import img4 from '../../Images/img4.jpg'
import img5 from '../../Images/img5.jpg'


function Slider() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..." height={"600px"}/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." height={"600px"}/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." height={"600px"}/>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..." height={"600px"}/>
    </div>    
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="..." height={"600px"}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider