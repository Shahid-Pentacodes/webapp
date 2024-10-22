import Breadcrumb from '../components/sections/home1/Breadcrumb';
import AboutHome from '../components/sections/home1/About';
import Video from '../components/sections/home1/Video';
// import Brand from '../components/sections/home1/Brand';
import Funfacts from '../components/sections/home1/Funfacts';
import Testimonial from '../components/sections/home1/Testimonial';

export default function About() {

  const title = 'About';
  const breadcrumbs = [
      { name: 'Home', link: '/' },
      { name: 'About' } // No link for the current page
  ];

  return (
    <div>
          <Breadcrumb title={title} breadcrumbs={breadcrumbs}/>
          <AboutHome />
          <Video />
          <Funfacts />
          <Testimonial />
    </div>
  );
}
