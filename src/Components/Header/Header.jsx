import './Header.css'

function Header() {
  return (
    <>
    <div className='container-fluid d-flex justify-content-between align-items-center'>
      <a href="#">
       <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1715904000&semt=sph" alt="" width={"90px"} height={"90px"}/>
       </a>

       <div className=' menu d-flex fst-normal'>
        <a href="#"> <div className='m1'>Home</div> </a>
        <a href=""> <div className='m1'>About</div> </a>
        <a href="#"> <div className='m1'>Gallery</div> </a>
        <a href="#"> <div className='m1'>Reviws</div> </a>
        <a href="#"> <div className='m1'>Contact Us</div> </a>
       </div>
    </div>
  
    </>
  )
}

export default Header