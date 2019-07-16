import React from "react";
import { Link } from "react-router-dom";
import cyf from "../image/cyf_brand.png";
import "./index.css";

function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <a href="index.html">
                <img src={cyf} alt="code your future logo" />
              </a>
            </div>
            <div className="col-xs-6 signin text-right navbar-nav">
              <Link to="/" classNameName="navLink">
                Sign in
              </Link>
              &nbsp; &nbsp;
              <Link to="/signUp" classNameName="navLink">
                Sign up
              </Link>
            </div>
          </div>
          <section id="invite" className="pad-lg light-gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2 text-center">
                  <i className="fa fa-envelope-o margin-40" />
                  <h2 className="black">Get the invite</h2>

                  <p className="black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam viverra orci ut.
                  </p>

                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                      <form role="form">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Email"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Request Invite
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}

export default Header;
