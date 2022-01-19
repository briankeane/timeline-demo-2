import { useRef, useEffect, useState } from "react";
import "./App.scss";
import "./components/Timeline/Timeline.scss";
import "./components/TimelineContent/TimelineContent.scss";
import "./components/TimelineHeader/TimelineHeader.scss";
import Specs from "./components/Specs/Specs";

function App() {
  const [offset, setOffset] = useState(0);

  const lateralTextWrapperRef = useRef(null);
  const navYearsRef = useRef(null);
  const navYearsChildRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      let headFixedHeight = lateralTextWrapperRef.current.offsetHeight;
      let navPosition = navYearsRef.current.getBoundingClientRect().top;
      let diff = navPosition - headFixedHeight;
      if (diff <= 0) {
        navYearsChildRef.current.classList.add("fixed");
      } else {
        navYearsChildRef.current.classList.remove("fixed");
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);
  return (
    <div className="App">
      <div class="cmp-modal" data-modal-id="timeline-modal">
        <div class="cmp cmp-timeline">
          <div class="common-wrapper">
            <div class="cmp-timeline__container">
              <div class="cmp-timeline__lateral-wrapper">
                <div
                  class="cmp-timeline__lateral-text-wrapper"
                  ref={lateralTextWrapperRef}
                >
                  <a href="#" class="cmp-timeline__lateral-back">
                    <img
                      alt="arrow back"
                      src="https://images.ctfassets.net/m8onsx4mm13s/4E3WUXd15vd8DsdjgbRfC/7955b3a733db54b13e462bea70bc863d/Back.svg"
                    />
                    <span>Back</span>
                  </a>
                  <div class="cmp-timeline__logo-wrapper">
                    <img
                      class="cmp-timeline__logo"
                      alt="Maestro Logo"
                      src="//images.ctfassets.net/m8onsx4mm13s/1Hg7UwqsduBXi1TY1xrfjo/1c796493be53537d142a59f5f983aeb7/Maestro.svg"
                    />
                  </div>
                </div>
              </div>

              <div class="cmp-timeline__content-wrapper">
                <div class="cmp-timeline__content-text-wrapper">
                  <h1>Your Guitar</h1>

                  <div class="cmp-timeline__content-desc-desktop"></div>
                </div>
              </div>
            </div>

            <div class="cmp-timeline__data" id="timeline-lern-more">
              <div class="cmp-timeline__data-nav-year" ref={navYearsRef}>
                <div
                  class="cmp-timeline__data-nav-year--container"
                  ref={navYearsChildRef}
                >
                  <a
                    href="#year-1962"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    2 Weeks Ago
                  </a>
                  <a
                    href="#year-1970"
                    class="cmp-timeline__data-nav-year--item active"
                  >
                    1 Week Ago
                  </a>
                  <a
                    href="#year-1986"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    Today
                  </a>
                  <a
                    href="#year-1996"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    Approx 1 Week
                  </a>
                  <a
                    href="#year-2003"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    Approx 2 Weeks
                  </a>
                  <a
                    href="#year-2016"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    Approx 3 Weeks
                  </a>
                  <a
                    href="#year-2022"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    Approx 4 Weeks
                  </a>
                </div>
              </div>
              <div class="cmp-timeline__data-content-year">
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1962"
                  >
                    <p class="cmp-timeline-content__year-title"></p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <Specs />
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              The wood to build your guitar has arrived at the
                              factory. We've carefully checked it's moisture
                              content to make sure it's between 8% and 10%.\n\n
                            </p>
                            <p>
                              Starting with the raw mahogany lumber, we've
                              carefully cut it into strips and glued the strips
                              together to create the body.
                            </p>
                            <p>
                              Finally, we've bookmatched the maple top and glue
                              it to the mahogany body.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/npOOEWaTadA?start=15"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1962"
                  >
                    <p class="cmp-timeline-content__year-title">
                      11:24am, Jan 10, 2022
                    </p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>A Block of Wood</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              The wood to build your guitar has arrived at the
                              factory. We've carefully checked it's moisture
                              content to make sure it's between 8% and 10%.\n\n
                            </p>
                            <p>
                              Starting with the raw mahogany lumber, we've
                              carefully cut it into strips and glued the strips
                              together to create the body.
                            </p>
                            <p>
                              Finally, we've bookmatched the maple top and glue
                              it to the mahogany body.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/npOOEWaTadA?start=15"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1965"
                  >
                    <p class="cmp-timeline-content__year-title">
                      4:25pm , Jan 11, 2022
                    </p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>The Raw Neck</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              We've received a raw piece of wood for your neck.
                              It's been stacked with several other raw pieces of
                              wood and put into our kiln to be treated.
                            </p>
                            <p>
                              We've cut the basic shape on our rotating rotary
                              table, inserted the truss rod (a Gibson invention
                              that enables a thinner neck that is adjustable).
                              We've drilled locator holes, installed dowel pins,
                              and attached the fingerboard.
                            </p>
                            <p>
                              All six tuner holes are drilled at once on our
                              special machine, and now the neck will be sent to
                              the finishing factory for it's final touches.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/npOOEWaTadA?start=15"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022
                    </p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>The Binding</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Your Les Paul body has arrived at the factory and
                              our craftsmen have begun to apply the binding.
                            </p>
                            <p>
                              Each guitar binding is applied by hand with a
                              specially made binding glue, and held in place by
                              a very specific wrapping sequence that takes our
                              craftsmen 2 months of training to master.
                            </p>
                            <p>
                              Your guitar has been placed on a rack to wait for
                              the binding to dry before the binding is sanded
                              clean and flush against the body. Then a final
                              sand has been applied to the body with a special
                              belt sander.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022
                    </p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>The Binding</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Your Les Paul body has arrived at the factory and
                              our craftsmen have begun to apply the binding.
                            </p>
                            <p>
                              Each guitar binding is applied by hand with a
                              specially made binding glue, and held in place by
                              a very specific wrapping sequence that takes our
                              craftsmen 2 months of training to master.
                            </p>
                            <p>
                              Your guitar has been placed on a rack to wait for
                              the binding to dry before the binding is sanded
                              clean and flush against the body. Then a final
                              sand has been applied to the body with a special
                              belt sander.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022
                    </p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>The Binding</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Your Les Paul body has arrived at the factory and
                              our craftsmen have begun to apply the binding.
                            </p>
                            <p>
                              Each guitar binding is applied by hand with a
                              specially made binding glue, and held in place by
                              a very specific wrapping sequence that takes our
                              craftsmen 2 months of training to master.
                            </p>
                            <p>
                              Your guitar has been placed on a rack to wait for
                              the binding to dry before the binding is sanded
                              clean and flush against the body. Then a final
                              sand has been applied to the body with a special
                              belt sander.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022
                    </p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>The Binding</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Your Les Paul body has arrived at the factory and
                              our craftsmen have begun to apply the binding.
                            </p>
                            <p>
                              Each guitar binding is applied by hand with a
                              specially made binding glue, and held in place by
                              a very specific wrapping sequence that takes our
                              craftsmen 2 months of training to master.
                            </p>
                            <p>
                              Your guitar has been placed on a rack to wait for
                              the binding to dry before the binding is sanded
                              clean and flush against the body. Then a final
                              sand has been applied to the body with a special
                              belt sander.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022
                    </p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>The Binding</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Your Les Paul body has arrived at the factory and
                              our craftsmen have begun to apply the binding.
                            </p>
                            <p>
                              Each guitar binding is applied by hand with a
                              specially made binding glue, and held in place by
                              a very specific wrapping sequence that takes our
                              craftsmen 2 months of training to master.
                            </p>
                            <p>
                              Your guitar has been placed on a rack to wait for
                              the binding to dry before the binding is sanded
                              clean and flush against the body. Then a final
                              sand has been applied to the body with a special
                              belt sander.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
