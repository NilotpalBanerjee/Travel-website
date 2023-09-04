import React from "react";
import Header1 from "../Component/header1";
import Footer from "../Component/footer";

function booking() {
  return (
    <div>
      <Header1 />
      {/* start banner */}
      <section
        className="inner-banner"
        style={{ backgroundImage: "url(img/banner/sub-page.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="banner-content">
                <h2>Bookings</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end banner */}

      {/* start booking */}
      <section className="section-spacing booking">
        <div className="container">
          <div className="row">
            <div className="booking-bg">
              <form className="row g-3">
                <div className="col-sm-12">
                  <h2 className="form-hader"> Book This Tour </h2>
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control booking-from"
                    id="inputAddress"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="col-md-6">
                  <select id="country" className="choose-option form-select">
                    <option selected="">Country</option>
                    <option>United States</option>
                    <option>France</option>
                    <option>UK</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <div className="input-group date">
                    <input
                      type="text"
                      data-provide="datepicker"
                      className="form-control start-date"
                      placeholder="Date to"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <select id="date_to" className="choose-option form-select">
                    <option selected="">Choose time</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select id="guest" className="choose-option form-select">
                    <option selected="">Guests</option>
                    <option>Guests 1</option>
                    <option>Guests 2</option>
                    <option>Guests 3</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <p className="from-text">Add Extra</p>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      {" "}
                      Service per booking{" "}
                      <span className="booking-price">$50.00</span>
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      {" "}
                      Service per person{" "}
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <p>
                    <span className="service-price">Adult: $50</span>
                    <span className="service-price">Youth: $55</span>
                    <span className="service-price">Children: $ 30</span>
                  </p>
                </div>
                <div className="col-12">
                  <button type="submit" className="booking-bt btn btn-primary">
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="faq">
              <div className="col-md-12">
                <h2 className="faq-hedar">Frequently Asked Question</h2>
              </div>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {" "}
                      Can I book extra nights of hotel accommodation before or
                      after my tour?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div>
                      <p className="faq-text">
                        {" "}
                        Starting and ending hotels are listed on your travel
                        voucher and in the Trip Details document. We use a
                        variety of hotels en-route and so a complete list of
                        hotels won't be provided until day 1 of your tour. If
                        your family requires contact information, or in case of
                        emergency, please have them phone 1-800-708- 7761. If
                        our office is closed please refer to the emergency phone
                        number that is found on the Trip Details document, this
                        number can be reached 24 hours a day, 7 days a week.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      {" "}
                      Can you provide me with a list of the hotels we will be
                      staying at?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div>
                      <p className="faq-text">
                        {" "}
                        Starting and ending hotels are listed on your travel
                        voucher and in the Trip Details document. We use a
                        variety of hotels en-route and so a complete list of
                        hotels won't be provided until day 1 of your tour. If
                        your family requires contact information, or in case of
                        emergency, please have them phone 1-800-708- 7761. If
                        our office is closed please refer to the emergency phone
                        number that is found on the Trip Details document, this
                        number can be reached 24 hours a day, 7 days a week.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      {" "}
                      What vaccinations are recommended for this adventure?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div>
                      <p className="faq-text">
                        {" "}
                        Starting and ending hotels are listed on your travel
                        voucher and in the Trip Details document. We use a
                        variety of hotels en-route and so a complete list of
                        hotels won't be provided until day 1 of your tour. If
                        your family requires contact information, or in case of
                        emergency, please have them phone 1-800-708- 7761. If
                        our office is closed please refer to the emergency phone
                        number that is found on the Trip Details document, this
                        number can be reached 24 hours a day, 7 days a week.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingfour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsefour"
                      aria-expanded="false"
                      aria-controls="flush-collapsefour"
                    >
                      {" "}
                      What are your booking terms and conditions?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingfour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div>
                      <p className="faq-text">
                        {" "}
                        Starting and ending hotels are listed on your travel
                        voucher and in the Trip Details document. We use a
                        variety of hotels en-route and so a complete list of
                        hotels won't be provided until day 1 of your tour. If
                        your family requires contact information, or in case of
                        emergency, please have them phone 1-800-708- 7761. If
                        our office is closed please refer to the emergency phone
                        number that is found on the Trip Details document, this
                        number can be reached 24 hours a day, 7 days a week.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end booking */}

      <Footer />
    </div>
  );
}

export default booking;
