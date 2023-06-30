import React from "react";

const FaqTwo = () => {
  return (
    <>
      {/*faq-area start*/}
      <div>
        <div className="container p-sm-0">
          <div className="row">
            <div className="col-xl-6 col-lg-5 order-lg-2">
              <div className="thumb text-center mb-4 mb-lg-0">
                <img
                  src="assets/img/faq/1.png"
                  alt="Falcon
                "
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 order-lg-1">
              <div className="section-title">
                <h4 className="subtitle">Titlle</h4>
                <h2 className="title">Sub-title here</h2>
                <p className="content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aliquam laudantium velit accusantium
                  exercitationem voluptates eveniet nulla nam totam a, natus
                  ipsa temporibus laborum! Ducimus!
                </p>
              </div>
              <div className="accordion faq-accordion" id="accordionExample">
                <div className="accordion-item single-accordion-inner">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>1.</span> Lorem, ipsum dolor. &amp; Lorem, ipsum.
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Esse ipsam a ea, voluptate tempora neque, ullam voluptatem
                      vel quod, minus officiis soluta at natus dolorem!
                    </div>
                  </div>
                </div>
                <div className="accordion-item single-accordion-inner">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>2.</span> Lorem ipsum dolor sit amet.
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati, cupiditate. Magni fugit ipsa sapiente cum
                      ducimus vitae, recusandae nam! Et iste minus consectetur
                      dicta eligendi?
                    </div>
                  </div>
                </div>
                <div className="accordion-item single-accordion-inner mb-0">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>3.</span>Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit.
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel doloribus sapiente expedita, suscipit, quaerat
                      officiis asperiores vitae repellat voluptatem cumque
                      minima molestias perferendis voluptate similique!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*faq-area end*/}
    </>
  );
};

export default FaqTwo;
