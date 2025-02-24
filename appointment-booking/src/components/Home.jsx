import React from 'react';
import './styles/Home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="image-slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src="https://img.freepik.com/premium-photo/portrait-diverse-team-doctors-nurses-standing-together-using-digital-tablet-hospital_360066-5485.jpg?w=900" alt="Team of doctors and nurses" className="hospital-image" />
                    </div>
                    <div className="slide">
                        <img src="https://www.shutterstock.com/image-photo/medical-team-performing-surgical-operation-600nw-741433855.jpg" alt="Medical team performing surgery" className="hospital-image" />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlFaalkX1udwLNgPQoonaULoVeNYWHh2b1Q&s" alt="Medical equipment" className="hospital-image" />
                    </div>
                    <div className="slide">
                        <img src="https://t3.ftcdn.net/jpg/01/75/04/02/360_F_175040239_Yo0W1I6rNOhULu6AI1uC5RKvt0rHLoqk.jpg" alt="Successful medical team" className="hospital-image" />
                    </div>
                    <div className="slide">
                        <img src="https://t4.ftcdn.net/jpg/01/59/14/49/360_F_159144982_IKvdIy2Gs5gGuc3P5cxLH3zBnK5USezb.jpg" alt="Doctor examining child" className="hospital-image" />
                    </div>
                    <div className="slide">
                        <img src="https://www.shutterstock.com/shutterstock/videos/1109713317/thumb/1.jpg?ip=x480" alt="Team of doctors and nurses" className="hospital-image" />
                    </div>
                    <div className="slide">
                        <img src="https://www.shutterstock.com/image-photo/medical-team-performing-surgical-operation-600nw-741433855.jpg" alt="Medical team performing surgery" className="hospital-image" />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlFaalkX1udwLNgPQoonaULoVeNYWHh2b1Q&s" alt="Medical equipment" className="hospital-image" />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3pWGC0xieoxCCorYo6s-YjVW9bWLOyz_vA&s" alt="Successful medical team" className="hospital-image" />
                    </div>
                    <div className="slide">
                        <img src="https://www.shutterstock.com/shutterstock/videos/1109713317/thumb/1.jpg?ip=x480" alt="Doctor examining child" className="hospital-image" />
                    </div>
                </div>
            </div>
            <div className="home-container">
                <h1>CTS-MEDI-CARE-Hospital</h1>
                <section className="hospital-history">
                    <h2>Hospital History</h2>
                    <p>CTS-MEDI-CARE-Hospital has been serving the community for over 50 years with excellence in medical care. Our history is marked by a commitment to quality, compassion, and innovation in healthcare.</p>
                </section>
                <section className="about-us">
                    <h2>About Us</h2>
                    <p>Our hospital is known for its world-class medical facilities, experienced and dedicated staff, and a patient-centric approach. We offer a wide range of medical services, from primary care to specialized treatments. Our benefits include state-of-the-art equipment, personalized care, and a focus on patient well-being and satisfaction.</p>
                </section>
                <section className="hospital-specialties">
                    <h2>Hospital Specialties and Benefits</h2>
                    <p>At CTS-MEDI-CARE-Hospital, we specialize in a variety of medical fields to provide comprehensive care. Our specialties include cardiology, neurology, pediatrics, orthopedics, and more. We are equipped with the latest technology and staffed by highly trained professionals to ensure the best possible outcomes for our patients.</p>
                </section>
                <section className="main-pillars">
                    <h2>Main Pillars</h2>
                    <div className="pillars-container">
                        <div className="pillar-box">
                            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5VZGC6UMX01NHNhVEPI_GcQcdJHeg-JLM8PGV8Q0jzCmgO6hpWi1Ha7VRwt57uDJa0r5erOxQ17-F1cyTcwzouxCESCXlkj2jj47s_A" alt="CEO Ravi Kumar" className="pillar-image" />
                            <h3>Ravi Kumar</h3>
                            <p>Chief Executive Officer</p>
                        </div>
                        <div className="pillar-box">
                            <img src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1603871267/1603871265.jpg" alt="Chairman Rajesh Nambiar" className="pillar-image" />
                            <h3>Rajesh Nambiar</h3>
                            <p>Chairman</p>
                        </div>
                        <div className="pillar-box">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEThQUbVGqS1R5It04Q6RHskHbDPCJBvdV27ddO09-hVq1sHcP2iYicoULlbamGNUzn08&usqp=CAU" alt="Vice President Maya" className="pillar-image" />
                            <h3>Maya</h3>
                            <p>Vice President</p>
                        </div>
                    </div>
                </section>
                <section className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Address:</strong> 24/7 CTS- Healthcare, Coimbatore, Tamil Nadu, India</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> contact@cts-medicare.com</p>
                    <p><strong>Follow us:</strong> 
                        <a href="http://facebook.com/ctsmedicare"> Facebook</a>, 
                        <a href="http://twitter.com/ctsmedicare"> Twitter</a>, 
                        <a href="http://instagram.com/ctsmedicare"> Instagram</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Home;
