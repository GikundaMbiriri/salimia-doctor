import React,{useEffect} from 'react'
import AOS from 'aos';
import './about.css';
import salimia from '../../images/salimia.jpg';
import hosi1 from '../../images/hospital1.jpg';
import hosi2 from '../../images/hospital2.jpg';
import hosi3 from '../../images/hospital3.jpg';
import hosi4 from '../../images/hospital4.jpg';

import "aos/dist/aos.css";

function About1() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div>
             <div className="about" data-aos="zoom-in">
              <h1>About Us</h1>
              
          </div>
  
          <div className="about-content">
          <div  >
                    <img className="salimia" src={salimia} />
              </div>
              <div className="desc" data-aos="flip-left">
               <div className="ds"><h3>Health is wealth</h3></div>
               <p>At Salimia app, we value your well-being.We team up with a number of hospitals to bring you the best doctors at the the comfort of your home.Freds Academy Annexe is a state of art facility established in 2013 with essence of offering quality education and holistic development to children. We are located in Meru County and cater for kindergarten and lower primary (class 1-3). We are the feeder school for Freds Academy Main School where our student join for Class 4-8 to continue their education.</p>
              </div>
            
                        </div>
                        <div className="team" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                            <h2>Our Hospitals</h2>
                        </div>
                        <div className="hospitals"  data-aos="fade-up">
                            <div className="hosi" data-aos="zoom-in">
                 

                                <img src={hosi1} className="hosi1"/>

                                <h3>St Anne</h3>
                                <div>At Freds Annexe, we str tere and through sd towards holistic development, academic excellence and a high level of discipline grounded on Christian values. Values lay a strong foundation for our pupils to exude confidence and excel in academic, co-curricular activities and most of all form attitudes that are positive and enabling, inspiring each child to Aspire for excellence. The Competency Based Curriculum
                                 (CBC) which we offer complements our phint founded on</div>
                                  
                            </div>
                             

                            <div className="hosi" data-aos="zoom-in-left">
                                <img src={hosi2} className="hosi1"/>
                                <h3>St Anne</h3>
                                <div>At Freds Annexe, we strive to offer an thrive. We do this in a friendly and loving atmosphere and through several programs that are all geared towards holistic development, academic excellence and a high level of discipline grounded on Christian values. Values lay a strong foundation for our pupils to exude confidence and excel in academic, co-curricular activities and most of all form attitudes that are positive and enabling, inspiring each child to Aspire for excellence. The Competency Based Curriculum
                                 (CBC) which velopment founded on</div>
                            </div>
                            <div className="hosi" data-aos="zoom-out-up">
                                <img src={hosi3} className="hosi1"/>
                                <h3>St Anne</h3>
                                <div>At Freds  for each child to thrive. We do this in a friendly and loving atmosphere and through several programs that are all geared towards holistic development, academic excellence and a high level of discipline grounded on Christian values. Values lay a strong foundation for our pupils to exude confidence and excel in academic, co-curricular activities and most of all form attitudes that are positive and enabling, inspiring each child to Aspire for excellence. The Competency Based Curriculum
                                 (CBC) which nt founded on</div>
                            </div>
                            <div className="hosi" data-aos="flip-up">
                                <img src={hosi4} className="hosi1"/>
                                <h3>St Anne</h3>
                                <div>Att for each child to thrive. We do this in a friendly and loving atmosphere and through several programs that are all geared towards holistic development, academic excellence and a high level of discipline grounded on Christian values. Values lay a strong foundation for our pupils to exude confidence and excel in academic, co-curricular activities and most of all form attitudes that are positive and enabling, inspiring each child to Aspire for excellence. The Competency Based Curriculum
                                 (CBC) founded on</div>
                            </div>

                        </div> 
        </div>
    )
}

export default About1
