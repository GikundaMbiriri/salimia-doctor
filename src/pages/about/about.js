import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './about.css'
import salimia from '../../images/salimia.jpg';
import hosi1 from '../../images/hospital1.jpg';

function about() {
    return (
        <div>
            <div className="navbar-area">
          <Navbar/>  
          </div>
          <div className="about">
              <h1>About Us</h1>
              
          </div>
          <div className="about-content">
              <div className="desc">
               <h3>Health is wealth</h3>
               <p>At Salimia app, we value your well-being.We team up with a number of hospitals to bring you the best doctors at the the comfort of your home.Freds Academy Annexe is a state of art facility established in 2013 with essence of offering quality education and holistic development to children. We are located in Meru County and cater for kindergarten and lower primary (class 1-3). We are the feeder school for Freds Academy Main School where our student join for Class 4-8 to continue their education.</p>
              </div>
              <div >
                    <img className="salimia" src={salimia}/>
              </div>
                        </div>
                        <div className="team">
                            <h2>Our Hospitals</h2>
                        </div>
                        <div className="hospitals">
                            <div className="hosi">
                                <img src={hosi1} className="hosi1"/>
                                <h3>St Anne</h3>
                                <div>At Freds Annexe, we strive to offer an enabling environment for each child to thrive. We do this in a friendly and loving atmosphere and through several programs that are all geared towards holistic development, academic excellence and a high level of discipline grounded on Christian values. Values lay a strong foundation for our pupils to exude confidence and excel in academic, co-curricular activities and most of all form attitudes that are positive and enabling, inspiring each child to Aspire for excellence. The Competency Based Curriculum
                                 (CBC) which we offer complements our philosophy of nurturing holistic development founded on</div>
                            </div>
                            <div className="hosi">
                                <img src={hosi1} className="hosi1"/>
                                <h3>St Anne</h3>
                                <div>At Freds Annexe, we strive to offer an enabling environment for each child to thrive. We do this in a friendly and loving atmosphere and through several programs that are all geared towards holistic development, academic excellence and a high level of discipline grounded on Christian values. Values lay a strong foundation for our pupils to exude confidence and excel in academic, co-curricular activities and most of all form attitudes that are positive and enabling, inspiring each child to Aspire for excellence. The Competency Based Curriculum
                                 (CBC) which we offer complements our philosophy of nurturing holistic development founded on</div>
                            </div>
                            <div className="hosi">
                                <img src={hosi1} className="hosi1"/>
                                <h3>St Anne</h3>
                                <div>At Freds Annexe, we strive to offer an enabling environment for each child to thrive. We do this in a friendly and loving atmosphere and through several programs that are all geared towards holistic development, academic excellence and a high level of discipline grounded on Christian values. Values lay a strong foundation for our pupils to exude confidence and excel in academic, co-curricular activities and most of all form attitudes that are positive and enabling, inspiring each child to Aspire for excellence. The Competency Based Curriculum
                                 (CBC) which we offer complements our philosophy of nurturing holistic development founded on</div>
                            </div>
                            <div className="hosi">
                                <img src={hosi1} className="hosi1"/>
                                <h3>St Anne</h3>
                                <div>At Freds Annexe, we strive to offer an enabling environment for each child to thrive. We do this in a friendly and loving atmosphere and through several programs that are all geared towards holistic development, academic excellence and a high level of discipline grounded on Christian values. Values lay a strong foundation for our pupils to exude confidence and excel in academic, co-curricular activities and most of all form attitudes that are positive and enabling, inspiring each child to Aspire for excellence. The Competency Based Curriculum
                                 (CBC) which we offer complements our philosophy of nurturing holistic development founded on</div>
                            </div>
                        </div>
                        
        </div>
    )
}

export default about
