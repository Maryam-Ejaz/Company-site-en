import { Image } from './Image';
import Counter from './Counter'; 
import img from '../../assets/building4.jpg';
import './Counter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const ExampleFixedBackground = () => {
  return (
    <section className="bg-dark">

      <Image src={img} alt="Space Port Background" height="50vh" fixed darken>
        {/* <h3>That's kinda neat, huh</h3> */}
        <div className='couter-div'>
          <div className="sectiontitle">
            <h2>Projects statistics</h2>
            <span className="headerLine"></span>
          </div>

          <div id="projectFacts" className="sectionClass">
            <div className="fullWidth">
              <div className="projectFactsWrap">
                <div className="item">
                <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                  <Counter id="number1" end={12} duration={3000} />
                  <span></span>
                  <p>Projects done</p>
                </div>
                <div className="item">
                  <i className="fa fa-smile-o"></i>
                  <Counter id="number2" end={55} duration={3000} />
                  <span></span>
                  <p>Happy clients</p>
                </div>
                <div className="item">
                  <i className="fa fa-coffee"></i>
                  <Counter id="number3" end={359} duration={2000} />
                  <span></span>
                  <p>Cups of coffee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Image>
    </section>
  );
};
