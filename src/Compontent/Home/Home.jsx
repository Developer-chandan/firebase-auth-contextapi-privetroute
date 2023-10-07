// import React from 'react';

const Home = () => {
    return (
        <section>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=800&h=533&q=medium" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.guim.co.uk/img/media/613b3c7fd50c6965f1d096fd1dcb2d8a6af67107/644_0_4919_2953/master/4919.jpg?width=1200&quality=85&auto=format&fit=max&s=1bd6037b77e19cfa20b45d728442dd19" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://cdn3.whatculture.com/images/2014/10/london-skyscrapers.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.insider.com/57b7ff19dd089526678b4ca3?width=1200&format=jpeg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://chandansen.netlify.app/img/chandan.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
        </section>
       
    );
};

export default Home;