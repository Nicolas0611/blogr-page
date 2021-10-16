import React from 'react';
import Header from './components/Header';
import Design from './components/Design';
import Infrastructure from './components/Infrastructure';
import Powerful from './components/Powerful';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header
        title='A modern publishing platform'
        span='Grow your audience and build your online brand'
      />
      <Design
        title='Designed for the future'
        subtitle1='Introducing an extensible editor'
        text1='Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
        subtitle2='Robust content management'
        text2='Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized
        categories, sections, format, or flow. With this functionality, you’re in full control.'
       />
      <Infrastructure
        title='State of the Art Infrastructure'
        text='With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.'
       />
      <Powerful
        subtitle1='Free, open, simple'
        text1='Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
        subtitle2='Powerful tooling'
        text2='Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized
        categories, sections, format, or flow. With this functionality, you’re in full control.'
      />
      <Footer/>
    </>
  );
}

export default App;