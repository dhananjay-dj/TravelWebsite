import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading"> Join the Adventure newsletter to receive our best vacation deals</p>
                <p className="footer-subscription-text"> You can unsubscribe at any time.</p>
                <div className='input-areas'>
                <form>
                    <input type="email" name="email" placeholder="Your e-mail" className="footer-input" />
                    <Button buttonStyle="btn-outline"> SUBSCRIBE </Button>
                </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> About Us </h2>
                        <Link to='/sign-up'> How it Works</Link>
                        <Link to='/'> Testimonials</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/sign-up'> Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Offers</h2>
                        <Link to='/sign-up'> Contact Us</Link>
                        <Link to='/'> Happy weekends</Link>
                        <Link to='/'> Jobs</Link>
                        <Link to='/'> Linkages</Link>
                        <Link to='/sign-up'> Offers</Link>
                    </div>
                    </div>
                    <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2> About </h2>
                        <Link to='/sign-up'> How it Works</Link>
                        <Link to='/'> Testimonials</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/sign-up'> Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2> Videos </h2>
                        <Link to='/sign-up'> Support</Link>
                        <Link to='/'> Submit videos</Link>
                        <Link to='/'> Ambassadors</Link>
                        <Link to='/'> View entries</Link>
                        <Link to='/sign-up'> See lineups</Link>
                    </div>
                    </div>   
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                           TRAWELL <i className="fas fa-globe-europe"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRAWELL © 2021</small>
                    <div  className="social-icons">
                       <Link className="social-icon-link facebook"
                       to="/"
                       target="_blank"
                       aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </Link> 
                        <Link className="social-icon-link instagram"
                       to="/"
                       target="_blank"
                       aria-label='Instagra'>
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'>
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'>
                            <i class='fab fa-twitter' />
                            </Link>
                        <Link
                            class='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn' >
                            <i class='fab fa-linkedin' />
                        </Link> 
                    </div>
                </div>
            </section>
</div>
    );
}

export default Footer;
