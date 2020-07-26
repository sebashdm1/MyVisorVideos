import React from 'react';
import Header from '../component/Header';
import Search from '../component/Search';
import Carousel from '../component/Carousel';
import Categories from '../component/Categories';
import CarouselItem from '../component/CarouselItem';
import Footer from '../component/Footer';
import '../assets/styles/App.scss';

const App = () => (
    <div className = "App">
         <Header/>
         <Search/>
         <Categories title="Mi lista">
             <Carousel>
                 <CarouselItem/>
                 <CarouselItem/>
                 <CarouselItem/>
                 <CarouselItem/>
             </Carousel>
         </Categories>
         <Categories title="Tendencias">
             <Carousel>
                 <CarouselItem/>
                 <CarouselItem/>
                 <CarouselItem/>
                 <CarouselItem/>
             </Carousel>
         </Categories>
         <Categories title="Productos de sebas">
             <Carousel>
                 <CarouselItem/>
                 <CarouselItem/>
                 <CarouselItem/>
                 <CarouselItem/>
             </Carousel>
         </Categories>
         <Footer/>
    </div>
);

export default App;