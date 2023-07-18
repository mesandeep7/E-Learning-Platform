import './DemoCarousel.css';
import img1 from './wallpaperflare.com_wallpaper (4).jpg';
import img2 from './wallpaperflare.com_wallpaper (5).jpg';
import img3 from './wallpaperflare.com_wallpaper (6).jpg';


export default function DemoCarousel(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h5>Your Dream Learning Platform</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt
                        excepturi quas vero.</p>
                    {/* <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p> */}
                </div>
            </div>
            <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h5>Always Dedicated</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt
                        excepturi quas vero.</p>
                    {/* <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p> */}
                </div>NclassName
            </div>
            <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..."/>
                <div class="carousel-caption">
                    <h5>True E-Learning Platform</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt
                        excepturi quas vero.</p>
                    {/* <p><a href="#" class="btn btn-warning mt-3">Learn More</a></p> */}
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    )
}