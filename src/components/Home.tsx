import React from 'react';
import Hero from './Hero';
import Catalogue from './Catalogue';

const Home: React.FC = () => {
  return (
    <main>
      <Hero/>
     
      <Catalogue/>
      <section className='px-[15px]'>
      <h2 className="text-3xl font-bold text-orange-600">Hello</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, ipsam nulla. Eaque cum facilis, qui veritatis molestias consectetur ut, sapiente sed placeat enim voluptatibus, perferendis veniam voluptatum vero deserunt ratione.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At omnis dicta provident, minus doloremque esse id commodi placeat libero optio laboriosam itaque ullam quasi ad adipisci numquam quod voluptatem cumque?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fugit exercitationem reiciendis, molestias porro iure, consequatur sint deleniti tempora veritatis non dolore alias beatae, blanditiis velit consequuntur odit animi aspernatur.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eum dolore quibusdam magni harum incidunt qui ex voluptates expedita eligendi, quis ratione consequatur quia totam rerum pariatur cupiditate nihil officiis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto, aspernatur odit corporis quasi nisi vero iure. Reiciendis odio repellendus, magni quos aspernatur harum. Consequuntur voluptates nobis a iure eaque.
      </p>
      </section>
      <div className='h-screen bg-gray-300'>
      </div>
    </main>
  )
}

export default Home
