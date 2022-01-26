import { useRef, useEffect, useState } from "react";
import "./App.scss";
import "./components/Timeline/Timeline.scss";
import "./components/TimelineContent/TimelineContent.scss";
import "./components/TimelineHeader/TimelineHeader.scss";
import Specs from "./components/Specs/Specs";

const TimelineState = {
  FIXED: "FIXED",
  FLOATING: "FLOATING",
};

function App() {
  const ActiveDates = {
    TWO_WEEKS_AGO: useRef(null),
    ONE_WEEK_AGO: useRef(null),
    TODAY: useRef(null),
    ONE_WEEK_FROM_NOW: useRef(null),
    TWO_WEEKS_FROM_NOW: useRef(null),
    THREE_WEEKS_FROM_NOW: useRef(null),
    FOUR_WEEKS_FROM_NOW: useRef(null),
  };

  const [activeDate, setActiveDate] = useState(null);

  const lateralTextWrapperRef = useRef(null);
  const navYearsRef = useRef(null);
  const navYearsChildRef = useRef(null);

  const twoWeeksAgoContentRef = useRef(null);

  const [timelineState, setTimelineState] = useState();

  const determineAndSetTimelineState = () => {
    let headFixedHeight = lateralTextWrapperRef.current.offsetHeight;
    let navPosition = navYearsRef.current.getBoundingClientRect().top;
    let diff = navPosition - headFixedHeight;
    if (diff <= 0 && timelineState !== TimelineState.FIXED) {
      setTimelineState(TimelineState.FIXED);
    } else if (diff > 0 && timelineState !== TimelineState.FLOATING) {
      setTimelineState(TimelineState.FLOATING);
    }
  };

  const determineAndSetActiveComponent = () => {
    var bottomToTopOrder = [
      ActiveDates.FOUR_WEEKS_FROM_NOW,
      ActiveDates.THREE_WEEKS_FROM_NOW,
      ActiveDates.TWO_WEEKS_FROM_NOW,
      ActiveDates.ONE_WEEK_FROM_NOW,
      ActiveDates.TODAY,
      ActiveDates.ONE_WEEK_AGO,
      ActiveDates.TWO_WEEKS_AGO,
    ];
    for (let activeDate of bottomToTopOrder) {
      if (activeDate.current.getBoundingClientRect().top < 10) {
        setActiveDate(activeDate);
        return;
      }
    }
  };

  const onScroll = () => {
    determineAndSetTimelineState();
    determineAndSetActiveComponent();
  };

  useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <div>
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
                      alt="Gibson Logo"
                      src="images/gibson-logo-white.svg"
                    />
                  </div>
                </div>
              </div>

              <div class="cmp-timeline__content-wrapper">
                <div class="cmp-timeline__content-text-wrapper">
                  <div class="img-container">
                    <img
                      class="header-background-image"
                      src="images/guitar-background.png"
                      width={"100%"}
                      style={{ maxHeight: "250px" }}
                      alt="Guitar Background"
                    />
                    <h1 class="centered-text">Your Guitar</h1>
                  </div>

                  <div class="cmp-timeline__content-desc-desktop"></div>
                </div>
                <Specs />
              </div>
            </div>

            <div class="cmp-timeline__data" id="timeline-lern-more">
              <div class="cmp-timeline__data-nav-year" ref={navYearsRef}>
                <div
                  class={
                    "cmp-timeline__data-nav-year--container" +
                    (timelineState === TimelineState.FIXED ? " fixed" : "")
                  }
                  ref={navYearsChildRef}
                >
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      ActiveDates.TWO_WEEKS_AGO.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href="#"
                    class={
                      "cmp-timeline__data-nav-year--item" +
                      (activeDate === ActiveDates.TWO_WEEKS_AGO
                        ? " active"
                        : "")
                    }
                  >
                    2 Weeks Ago
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      ActiveDates.ONE_WEEK_AGO.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href="#"
                    class={
                      "cmp-timeline__data-nav-year--item" +
                      (activeDate === ActiveDates.ONE_WEEK_AGO ? " active" : "")
                    }
                  >
                    1 Week Ago
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      ActiveDates.TODAY.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href=""
                    class={
                      "cmp-timeline__data-nav-year--item" +
                      (activeDate === ActiveDates.TODAY ? " active" : "")
                    }
                  >
                    Today
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      ActiveDates.ONE_WEEK_FROM_NOW.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    class={
                      "cmp-timeline__data-nav-year--item" +
                      (activeDate === ActiveDates.ONE_WEEK_FROM_NOW
                        ? " active"
                        : "")
                    }
                  >
                    ~ 1 Week
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      ActiveDates.TWO_WEEKS_FROM_NOW.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href="#year-2003"
                    class={
                      "cmp-timeline__data-nav-year--item" +
                      (activeDate === ActiveDates.TWO_WEEKS_FROM_NOW
                        ? " active"
                        : "")
                    }
                  >
                    ~ 2 Weeks
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      ActiveDates.THREE_WEEKS_FROM_NOW.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href="#year-2016"
                    class={
                      "cmp-timeline__data-nav-year--item" +
                      (activeDate === ActiveDates.THREE_WEEKS_FROM_NOW
                        ? " active"
                        : "")
                    }
                  >
                    ~ 3 Weeks
                  </a>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      ActiveDates.FOUR_WEEKS_FROM_NOW.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    href="#year-2022"
                    class={
                      "cmp-timeline__data-nav-year--item" +
                      (activeDate === ActiveDates.FOUR_WEEKS_FROM_NOW
                        ? " active"
                        : "")
                    }
                  >
                    ~ 4 Weeks
                  </a>
                </div>
              </div>

              <div class="cmp-timeline__data-content-year">
                <div class="gibson-card py-4 only-desktop">
                  <div class="gibson-diamond"></div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    ref={ActiveDates.TWO_WEEKS_AGO}
                    id="year-1962"
                  >
                    <p class="cmp-timeline-content__year-title">
                      11:24am, Jan 10, 2022 - Nashville, TN
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
                            <iframe
                              width="60%"
                              height="300"
                              style={{ marginLeft: "20%" }}
                              src="https://www.youtube.com/embed/npOOEWaTadA?start=15"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gibson-card py-4">
                  <div class="gibson-diamond"></div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1965"
                    ref={ActiveDates.ONE_WEEK_AGO}
                  >
                    <p class="cmp-timeline-content__year-title">
                      4:25pm , Jan 11, 2022 - Nashville, TN
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
                            <iframe
                              width="60%"
                              height="300"
                              style={{ marginLeft: "20%" }}
                              src="https://www.youtube.com/embed/npOOEWaTadA?start=15"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gibson-card py-4">
                  <div class="gibson-diamond"></div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                    ref={ActiveDates.TODAY}
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022 - Nashville, TN
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
                            <iframe
                              width="60%"
                              height="300"
                              style={{ marginLeft: "20%" }}
                              src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gibson-card py-4">
                  <div class="gibson-diamond"></div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                    ref={ActiveDates.ONE_WEEK_FROM_NOW}
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022 - Nashville, TN
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
                            <iframe
                              width="60%"
                              height="300"
                              style={{ marginLeft: "20%" }}
                              src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gibson-card py-4">
                  <div class="gibson-diamond"></div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                    ref={ActiveDates.TWO_WEEKS_FROM_NOW}
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022 - Nashville, TN
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
                            <iframe
                              width="60%"
                              height="300"
                              style={{ marginLeft: "20%" }}
                              src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gibson-card py-4">
                  <div class="gibson-diamond"></div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                    ref={ActiveDates.THREE_WEEKS_FROM_NOW}
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022 - Nashville, TN
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
                            <iframe
                              width="60%"
                              height="300"
                              style={{ marginLeft: "20%" }}
                              src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gibson-card py-4">
                  <div class="gibson-diamond"></div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1967"
                    ref={ActiveDates.FOUR_WEEKS_FROM_NOW}
                  >
                    <p class="cmp-timeline-content__year-title">
                      3:23pm , Jan 14, 2022 - Nashville, TN
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
                            <iframe
                              width="60%"
                              height="300"
                              style={{ marginLeft: "20%" }}
                              src="https://www.youtube.com/embed/d05le5SY2X8?start=87"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
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
