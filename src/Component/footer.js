import React from "react";

function footer() {
  return (
    <div>
      {/* start footer */}
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="footer-widget">
                  <h5>Top destination</h5>
                  <ul>
                    <li>
                      <a href="#">Indonesia, Jakarta</a>
                    </li>
                    <li>
                      <a href="#">Maldives, Malé</a>
                    </li>
                    <li>
                      <a href="#">Australia, Canberra</a>
                    </li>
                    <li>
                      <a href="#">Thailand, Bangkok</a>
                    </li>
                    <li>
                      <a href="#">Morocco, Rabat</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-2">
                <div className="footer-widget">
                  <h5>Categories</h5>
                  <ul>
                    <li>
                      <a href="#">Travel</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Fashion</a>
                    </li>
                    <li>
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <a href="#">Food &amp; Drink</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-2">
                <div className="footer-widget">
                  <h5>Quick links</h5>
                  <ul>
                    <li>
                      <a href="about-us.html">About</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                    <li>
                      <a href="tours.html">Tours</a>
                    </li>
                    <li>
                      <a href="booking.html">Booking</a>
                    </li>
                    <li>
                      <a href="terms-conditions.html">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-5">
                <div className="footer-widget">
                  <h5>Get a newsletter</h5>
                  <p>
                    For the latest deals and tips, travel no further than your
                    inbox
                  </p>
                  <form className="maan-coupon-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-8 col-lg-9">
                <div className="footer-left">
                  <img src="img/footer-logo.png" alt="" />
                  <div className="h-border" />
                  <div className="copyright">
                    <p>© 2023 All Right Reserved </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <ul className="team-social footer-social">
                  <li className="share-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="share-icon">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="share-icon">
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="share-icon">
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="share-icon">
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}

      {/* Bact to top */}
      <div className="back-top">
        <a href="#">
          <i className="fa fa-angle-up" />
        </a>
      </div>
      <div className="modal fade" tabIndex={-1} role="dialog" id="video-modal">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/ScMzIvxBSi4"
                  title="YouTube video player"
                  style={{ border: 0, width: "100%", height: 500 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}
    </div>
  );
}

export default footer;
