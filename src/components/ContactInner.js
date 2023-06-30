import React, { useRef } from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactInner = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "", //YOUR_SERVICE_ID
        "", //YOUR_TEMPLATE_ID
        form.current,
        "" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* contact area start */}
      <div className="container">
        <div className="contact-area mg-top-120 mb-120">
          <div className="row g-0 justify-content-center">
            <div className="col-lg-7">
              <form
                className="contact-form text-center"
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>GET A QUOTE</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <FaUserAlt />
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        name="user_name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <FaRegEnvelope />
                      </label>
                      <input
                        type="text"
                        placeholder="Your email"
                        name="user_email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <FaCalculator />
                      </label>
                      <input type="text" placeholder=" Phone number" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-select-inner">
                      <label>
                        <FaFileAlt />
                      </label>
                      <select className="single-select">
                        <option>Subject</option>
                        <option value={1}>Some option</option>
                        <option value={2}>Another option</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner">
                      <label>
                        <FaPencilAlt />
                      </label>
                      <textarea
                        placeholder="Write massage"
                        defaultValue={""}
                        id="massage"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-base" type="submit">
                      {" "}
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="contact-information-wrap">
                <h3>CONTACT INFORMATION</h3>
                <div className="single-contact-info-wrap">
                  <h6>Contact Number:</h6>
                  <div className="media">
                    <div className="icon">
                      <FaPhoneAlt />
                    </div>
                    <div className="media-body">
                      <p>+91 9876543211</p>
                      <p>+91 1234567899</p>
                    </div>
                  </div>
                </div>
                <div className="single-contact-info-wrap">
                  <h6>Mail Address:</h6>
                  <div className="media">
                    <div className="icon" style={{ background: "#080C24" }}>
                      <FaRegEnvelope />
                    </div>
                    <div className="media-body">
                      <p>info@perennial.com</p>
                      <p>perennial@co.com</p>
                    </div>
                  </div>
                </div>
                <div className="single-contact-info-wrap mb-0">
                  <h6>Office Location:</h6>
                  <div className="media">
                    <div className="icon" style={{ background: "#565969" }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className="media-body">
                      <p>abc nagar</p>
                      <p>Hosur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}

      <div className="contact-g-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62266.151531456264!2d77.76439968504503!3d12.737252514415951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae71dbf989a53b%3A0xfffb472a60530bf6!2sPerennial%20IT%20Solutions%2C%20Post%2C%20Hosur%2C%20Tamil%20Nadu!3m2!1d12.737255699999999!2d77.8055996!5e0!3m2!1sen!2sin!4v1687861086673!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactInner;
