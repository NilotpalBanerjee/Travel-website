import React from 'react'
import Header1 from "../Component/header1";
import Footer from "../Component/footer";
function tours() {
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
                    <h2>Tours List</h2>
                    
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* end banner */}

        {/* start popular tours */}
        <section className="section-spacing-tours tours">
            <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                <div className="search-form">
                    <h2 className="form-title">Search</h2>
                    <form>
                    <div className="input-group from-group">
                        <i className="fas fa-map-marker-alt" />
                        <select  className="form-select">
                        <option selected="">All destinations</option>
                        <option value="Paris, France">Paris, France</option>
                        <option value="Jakarta, Indonesia">Jakarta, Indonesia</option>
                        <option value="Male, Maldives">Male, Maldives</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <i className="far fa-calendar" />
                        <input
                        type="date"
                        className="form-control start-date"
                        placeholder="Date from"
                        />
                        {/* <i className="fas fa-chevron-down icon-right" /> */}
                    </div>
                    <div className="input-group">
                        <i className="far fa-calendar" />
                        <input
                        type="date"
                        className="form-control start-date"
                        placeholder="Date to"
                        />
                        {/* <i className="fas fa-chevron-down icon-right" /> */}
                    </div>
                    <div className="input-group from-group">
                        <i className="far fa-user" />
                        <select aria-label="Default select example" className="form-select">
                        <option selected="">Guests</option>
                        <option value="User One">User One</option>
                        <option value="User Two">User Two</option>
                        <option value="User Three">User Three</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <button className="btn btn-primary">Search</button>
                    </div>
                    </form>
                </div>
                <div className="price-range-box">
                    <div className="price-range-slider">
                    <h4 className="price-box-title">Price Range</h4>
                    <div id="slider-range" className="range-bar" />
                    <p className="range-value">
                        <input type="text" id="amount" readOnly="" />
                    </p>
                    </div>
                    <div className="price-review-box">
                    <h4 className="price-box-title">Review Score</h4>
                    <div className="review-form">
                        <form>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault1"
                            />
                            <label
                            className="form-check-label review-score"
                            htmlFor="flexCheckDefault1"
                            >
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault2"
                            />
                            <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault2"
                            >
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                            />
                            <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault3"
                            >
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault4"
                            />
                            <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault4"
                            >
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault5"
                            />
                            <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault5"
                            >
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            </label>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="price-category-box">
                    <h4 className="price-box-title">Categories</h4>
                    <ul>
                        <li>
                        <a href="#">Beaches (10)</a>
                        </li>
                        <li>
                        <a href="#">City Tours (5)</a>
                        </li>
                        <li>
                        <a href="#">Cruises (8)</a>
                        </li>
                        <li>
                        <a href="#">Hiking (4)</a>
                        </li>
                        <li>
                        <a href="#">Historical (8)</a>
                        </li>
                        <li>
                        <a href="#">Museum Tours (5)</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="discount-offer">
                    <img src="img/tour/black-friday.png" alt="Discount Image" />
                </div>
                </div>
                <div className="col-md-12 col-lg-8">
                <div className="row align-items-center tour-bar-row">
                    <div className="col">
                    <p className="tour-bar-text">Showing 1-6 of 20 results</p>
                    </div>
                    <div className="col d-flex justify-content-end">
                    <div className="custom-select">
                        <select>
                        <option value={0}>Sort</option>
                        <option value={1}>Date</option>
                        <option value={2}>Rating</option>
                        </select>
                    </div>
                    <a href="tours-list" className="tour-bar-icon">
                        <i className="fas fa-bars" />
                    </a>
                    <a href="tours" className="tour-bar-icon">
                        <i className="fas fa-th-large" />
                    </a>
                    </div>
                </div>
                <a href="tours-details">
                    <div className="card tour-list-card tour-card wow fadeIn">
                    <img className="card-img-top" src="img/tour/1.png" alt="" />
                    <span className="tour-duration">
                        <i className="fas fa-history" /> 12 Days{" "}
                    </span>
                    <div className="card-body">
                        <div className="tour-tags">
                        <span className="tour-price">From $50.00</span>
                        <span className="tour-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" /> (2){" "}
                        </span>
                        </div>
                        <h6>
                        A good traveler has no fixed plans and is not intent on
                        arriving.
                        </h6>
                        <p className="mb-0">
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some.
                        </p>
                        <span className="tour-place">Paris, France</span>
                    </div>
                    </div>
                </a>
                <a href="tours-details">
                    <div className="card tour-list-card tour-card wow fadeIn">
                    <img className="card-img-top" src="img/tour/2.png" alt="" />
                    <span className="tour-duration">
                        <i className="fas fa-history" /> 12 Days{" "}
                    </span>
                    <div className="card-body">
                        <div className="tour-tags">
                        <span className="tour-price">From $50.00</span>
                        <span className="tour-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" /> (2){" "}
                        </span>
                        </div>
                        <h6>
                        A good traveler has no fixed plans and is not intent on
                        arriving.
                        </h6>
                        <p className="mb-0">
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some.
                        </p>
                        <span className="tour-place">Jakarta, Indonesia</span>
                    </div>
                    </div>
                </a>
                <a href="tours-details">
                    <div className="card tour-list-card tour-card wow fadeIn">
                    <img className="card-img-top" src="img/tour/3.png" alt="" />
                    <span className="tour-duration">
                        <i className="fas fa-history" /> 12 Days{" "}
                    </span>
                    <div className="card-body">
                        <div className="tour-tags">
                        <span className="tour-price">From $50.00</span>
                        <span className="tour-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" /> (2){" "}
                        </span>
                        </div>
                        <h6>
                        A good traveler has no fixed plans and is not intent on
                        arriving.
                        </h6>
                        <p className="mb-0">
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some.
                        </p>
                        <span className="tour-place">Male, Maldives</span>
                    </div>
                    </div>
                </a>
                <a href="tours-details">
                    <div className="card tour-list-card tour-card wow fadeIn">
                    <img className="card-img-top" src="img/tour/1.png" alt="" />
                    <span className="tour-duration">
                        <i className="fas fa-history" /> 12 Days{" "}
                    </span>
                    <div className="card-body">
                        <div className="tour-tags">
                        <span className="tour-price">From $50.00</span>
                        <span className="tour-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" /> (2){" "}
                        </span>
                        </div>
                        <h6>
                        A good traveler has no fixed plans and is not intent on
                        arriving.
                        </h6>
                        <p className="mb-0">
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some.
                        </p>
                        <span className="tour-place">Male, Maldives</span>
                    </div>
                    </div>
                </a>
                <a href="tours-details">
                    <div className="card tour-list-card tour-card wow fadeIn">
                    <img className="card-img-top" src="img/tour/3.png" alt="" />
                    <span className="tour-duration">
                        <i className="fas fa-history" /> 12 Days{" "}
                    </span>
                    <div className="card-body">
                        <div className="tour-tags">
                        <span className="tour-price">From $50.00</span>
                        <span className="tour-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" /> (2){" "}
                        </span>
                        </div>
                        <h6>
                        A good traveler has no fixed plans and is not intent on
                        arriving.
                        </h6>
                        <p className="mb-0">
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some.
                        </p>
                        <span className="tour-place">Male, Maldives</span>
                    </div>
                    </div>
                </a>
                <a href="tours-details">
                    <div className="card tour-list-card tour-card wow fadeIn">
                    <img className="card-img-top" src="img/tour/2.png" alt="" />
                    <span className="tour-duration">
                        <i className="fas fa-history" /> 12 Days{" "}
                    </span>
                    <div className="card-body">
                        <div className="tour-tags">
                        <span className="tour-price">From $50.00</span>
                        <span className="tour-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" /> (2){" "}
                        </span>
                        </div>
                        <h6>
                        A good traveler has no fixed plans and is not intent on
                        arriving.
                        </h6>
                        <p className="mb-0">
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some.
                        </p>
                        <span className="tour-place">Male, Maldives</span>
                    </div>
                    </div>
                </a>
                </div>
            </div>
            <div className="row">
                <div className="pagination-container">
                <ul className="pagination justify-content-end">
                    <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">
                        <i className="fa fa-angle-double-left" />
                        </span>
                    </a>
                    </li>
                    <li className="active">
                    <a href="#">1</a>
                    </li>
                    <li>
                    <a href="#">2</a>
                    </li>
                    <li>
                    <a href="#">3</a>
                    </li>
                    <li>
                    <a href="#">4</a>
                    </li>
                    <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">
                        <i className="fa fa-angle-double-right" />
                        </span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>
        {/* end popular tours */}

        <Footer />
    </div>
  )
}

export default tours