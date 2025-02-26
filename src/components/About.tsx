import React from 'react';
import Card from './Card';

const About: React.FC = () => {
  return (
    <section className='pt-[50px]'>
      <h2>This About page</h2>
      <Card imageSrc="source" title="title" description="description"/>
    </section>
  )
}

export default About
