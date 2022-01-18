import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="cmp-modal" data-modal-id="timeline-modal">
        <div class="cmp cmp-timeline">
          <div class="common-wrapper">
            <div class="cmp-timeline__container">
              <div class="cmp-timeline__lateral-wrapper">
                <div class="cmp-timeline__lateral-text-wrapper">
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
                <div class="cmp-timeline__content-rectangle"></div>
                <div class="cmp-timeline__content-image-container">
                  <div class="cmp-timeline__content-image-wrapper">
                    <img
                      src="//images.ctfassets.net/m8onsx4mm13s/54fAGu71OGGdZzJW6ebVfs/1a1d52b6bf0914e19359c63395b2f447/timeline-content-1962-img.jpg"
                      alt="Maestro Timeline image"
                      class="cmp-timeline__content-image-elem"
                    />
                  </div>
                </div>
                <div class="cmp-timeline__content-text-wrapper">
                  <h1>The Maestro Jukebox Timeline</h1>
                  <div class="cmp-timeline__content-desc-desktop">
                    <p>
                      <p>
                        Maybe you've never heard of Maestro. But you've
                        definitely <em>heard</em> Maestro. Starting with that
                        opening riff of the Rolling Stones'
                        &quot;Satisfaction,&quot; our pedals and effects have
                        been used by the world's best producers and musicians to
                        shape the sounds that defined entire decades.
                      </p>
                    </p>
                  </div>
                  <a
                    href="#timeline-lern-more"
                    class="cmp-timeline__content-scroll-container"
                  >
                    <span class="cmp-timeline__content-scroll-text">
                      CLICK TO LEARN MORE
                    </span>
                    <span class="cmp-timeline__content-scroll-icon"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="cmp-timeline__data" id="timeline-lern-more">
              <div class="cmp-timeline__data-nav-year">
                <div class="cmp-timeline__data-nav-year--container">
                  <a
                    href="#year-1962"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    1960
                  </a>
                  <a
                    href="#year-1970"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    1970
                  </a>
                  <a
                    href="#year-1986"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    1980
                  </a>
                  <a
                    href="#year-1996"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    1990
                  </a>
                  <a
                    href="#year-2003"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    2000
                  </a>
                  <a
                    href="#year-2016"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    2010
                  </a>
                  <a
                    href="#year-2022"
                    class="cmp-timeline__data-nav-year--item"
                  >
                    2020
                  </a>
                </div>
              </div>
              <div class="cmp-timeline__data-content-year">
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1962"
                  >
                    <p class="cmp-timeline-content__year-title">1962</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>Maestro introduces the Fuzz-Tone FZ-1 pedal</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              When Maestro first debuted with the FZ-1
                              Fuzz-Tone, in 1962, no one could have predicted
                              its trailblazing success. By that time, Gibson,
                              then operating under parent company Chicago
                              Musical Instruments (CMI), had already used the
                              Maestro brand name on accordions, accordion
                              amplifiers, and the legendary Echoplex Tape Delay.
                              When the FZ-1 was released, the guitar pedal
                              market was nonexistent, and this odd effect,
                              intended to conjure something resembling a horn
                              sound, fell largely on deaf ears.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/VAWwBEx3Qkc"
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
                    <p class="cmp-timeline-content__year-title">1965</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Keith Richards plays the Fuzz-Tone on The Rolling
                              Stones' &quot;(I Can’t Get No) Satisfaction&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              But then Keith Richards came along, and the
                              Rolling Stones guitarist used the FZ-1 as a demo
                              track on “Satisfaction” to signal how and when a
                              horn section should enter the mix. “But he never
                              meant for the part to be used on the final
                              recording,” says Phil O’Keefe, Senior Editor,
                              Gibson Brands. “It was strictly a demo. He
                              thought, well, this is what we want the horns to
                              do... Then that scratch track winds up on the
                              final version, and ‘Satisfaction’ turns out to be
                              the song of the summer in ‘65.” Gibson sold every
                              FZ-1 in stock. It was really the first
                              commercially successful pedal,” O’Keefe continues.
                              “And it set the entire pedal world into motion.”
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/2PzU4IB8Dr6mxV3lHuaG34?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p>
                              Soon after Keith Richards' iconic riff, the next
                              prominent use of the FZ-1 pedal is Tommy Tedesco
                              playing on the decidedly hokey theme song to the
                              television show <em>Green Acres</em> — an early
                              indication that this new sound would work its way
                              into many genres.
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/6WtBVAdqQWFz739kV7zQvV?utm_source=generator"
                                width="100%"
                                height="80"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p></p>
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
                    <p class="cmp-timeline-content__year-title">1967</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Pete Townshend of The Who plays a Maestro FZ-1A
                              Fuzz-Tone at the Monterey Pop Festival
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Within a few years, the fuzz was familiar to fans
                              of rock and roll. Here, Pete Townshend of The Who
                              plays a Maestro FZ-1A Fuzz-Tone at the 1967
                              Monterey Pop Festival.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/gr3zad8df3c?start=450"
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
                    <p class="cmp-timeline-content__year-title">1967</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Doors guitarist Robbie Kreiger plays Fuzz-Tone on
                              &quot;My Eyes Have Seen You.&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              "I used a Gibson Maestro fuzz pedal for the solo,"
                              Doors guitarist Robbie Kreiger told{" "}
                              <em>Guitar Player</em> magazine. Not that it was
                              much of a choice. the FZ-1 "was about the only
                              effect we had in those days."{" "}
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/6HSQ5z5afdLjhphHWfPiEG?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p></p>
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
                    <p class="cmp-timeline-content__year-title">1967</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper cmp-timeline-content__wrapper-with-img">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Maestro introduces the BG-1 Boomerang Wah pedal
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              For Christmas shoppers in 1967, the new Boomerang
                              Wah pedal was advertised as "the latest in
                              electronic sound." The foot pedal looked like the
                              accelerator of a muscle car, and it bent notes and
                              chords into a round, wide "wah" — or "WOW," as
                              this store in Tampa, Florida, described it.
                            </p>
                          </div>
                        </div>
                        <div class="cmp-timeline-content__year-img-wrapper">
                          <img
                            class="cmp-timeline-content__year-img-desc"
                            alt="Primary Image"
                            src="//images.ctfassets.net/m8onsx4mm13s/1GwWMs6Fu15NIQu7Qa84w8/3e19f3b1a14b54fc6a3989720f4fbc53/Boomerang_Wah_Pedal_Nov_1967_THUMB.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1969"
                  >
                    <p class="cmp-timeline-content__year-title">1969</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Tony Joe White plays Boomerang Wah on &quot;Polk
                              Salad Annie&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Tony Joe White played the Boomerang Wah on his
                              bluesy hit "Polk Salad Annie" — though with a
                              lighter touch than many of the funkier sounds to
                              come.
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/0jtz7Ia3HahOqXWnKad0rn?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1969"
                  >
                    <p class="cmp-timeline-content__year-title">1969</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              New parent company Norlin takes over Gibson and
                              hires Tom Oberheim, inventor of the Ring Modulator
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Norlin replaces CMI as the new parent company of
                              Gibson, and they approach legendary engineer Tom
                              Oberheim to join as a manufacturing contractor.
                              The company soon begins marketing Oberheim’s ring
                              modulator as the Maestro RM-1A.{" "}
                            </p>
                            <p>
                              Oberheim's device produces an eerie, otherworldly
                              sound perfect for science fiction. Film composer
                              Leonard Rosenman employs a ring modulator on the
                              soundtrack to the 1970 movie{" "}
                              <em>Beneath the Planet of the Apes.</em>
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/mi7S47pbj4g"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1970"
                  >
                    <p class="cmp-timeline-content__year-title">1970</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>Maestro introduces the PS-1 Phase Shifter</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Synth Pioneer Tom Oberheim begins designing and
                              manufacturing electronics for Gibson in Santa
                              Monica, California. His Maestro PS-1 becomes the
                              first commercially available phase-shifter, and
                              creates a new sound that defines the early 1970s.
                              Like the Fuzz-Tone, <em>Guitar Player</em>{" "}
                              magazine cites its introduction as one of the "101
                              Greatest Moments in Guitar History"
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/mCI1Jb0Fqlo"
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
                    id="year-1971"
                  >
                    <p class="cmp-timeline-content__year-title">1971</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Charles “Skip” Pitts plays the Boomerang Wah on
                              &quot;Theme from <em>Shaft</em>&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              What was subtle shading in the hands of Tony Joe
                              White becomes bold strokes in the hands of Charles
                              “Skip” Pitts, who seems to inaugurate the 70s with
                              this Boomerang Wah-laced guitar on Isaac Hayes'
                              "Theme from <em>Shaft</em>."{" "}
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/7KMILVTQdVS4zQ8ilTcpRO?si=d471b514d361424a?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p></p>
                            <p>
                              The Maestro BG-2 pedal Pitts used on that track is
                              ensconced in the Stax Records Museum in Memphis,
                              Tennessee — alongside other Gibson relics
                              including a Les Paul that belonged to Pops
                              Staples, Little Milton's ES-335, and one of Albert
                              King's Flying Vs.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/6lV5sE9GrwM?start=533"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1973"
                  >
                    <p class="cmp-timeline-content__year-title">1973</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Anthony Jackson plays a Maestro Phase Pedal for
                              the distinctive bassline on the O'Jays' &quot;For
                              the Love of Money&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              "As I recall," Jackson told Bass Player magazine,
                              "it was my decision to use a pick and my Maestro
                              Phaser pedal. I knew what they were trying to do,
                              which was to make the 'For the Love of Money'
                              concept into something they could continue to run
                              with. That never really happened, partly I think
                              because playing with the pick and flange was
                              simply more involved than slapping, which people
                              were able to emulate fairly quickly and easily.
                              You need to learn how to use the pick really well
                              to pull it off."
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/3p1JoOEhVkEnTaa4JzTMSk?si=5d8525935ebe43c7?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
                    id="year-1973"
                  >
                    <p class="cmp-timeline-content__year-title">1973</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Isley Brothers use the PS-1 on &quot;That
                              Lady&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              The Phase Shifter powers the spacey groove on the
                              Isley Brothers inquisitive homage to mysterious
                              beauty.
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/46pW0poQYEb2bVaqozGO59?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1974"
                  >
                    <p class="cmp-timeline-content__year-title">1974</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Brian May of Queen employs a Maestro Echoplex on
                              &quot;Brighton Rock&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              The Echoplex tape delay was first released by
                              Gibson under the Maestro banner in 1962, but it
                              enjoyed fresh fame among guitar bands of the 70s,
                              such as Queen and Rush.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/-T8n1hVqtKM"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/4ObxJP7kYUkBqpiklCzrBo?si=085236991cc54407?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
                    id="year-1974"
                  >
                    <p class="cmp-timeline-content__year-title">1974</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Alex Lifeson of Rush uses multiple Maestro pedals
                              on the band's debut LP
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Alex Lifeson of Rush uses a Maestro Phase Shifter
                              and an Echoplex, among other effects, to achieve
                              the band's signature sound on their self-titled
                              debut record.
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/6POxVhw9vbWKn4vXrLo3St?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
                    id="year-1975"
                  >
                    <p class="cmp-timeline-content__year-title">1975</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Moog replaces Oberheim as designer for Maestro
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Having acquired synthesizer and effects brand Moog
                              two years earlier, Gibson's parent company,
                              Norlin, puts Robert Moog in charge of pedal design
                              for Maestro. Matt Koehler, head of product
                              development for Gibson, says "When Moog comes into
                              the picture, he designs unique circuits with a
                              specific take on a fuzz and a phaser. And he
                              pushes the limits of sonic development in his own
                              way.”
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
                    id="year-1975"
                  >
                    <p class="cmp-timeline-content__year-title">1975</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              George Harrison plays Maestro Phaser on &quot;This
                              Guitar (Can't Keep From Crying)&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              George Harrison, who'd used a Fuzz-Tone in the
                              Beatles era, turns up the Phaser on "This Guitar
                              (Can't Keep From Crying)"
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/0c9KJWGOMroYUMVr5Xx5Qu?si=9b3a92c214ab40f8?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
                    id="year-1975"
                  >
                    <p class="cmp-timeline-content__year-title">1975</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Waylon Jennings plays PS-1 on{" "}
                              <em>Dreaming My Dreams</em>
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Waylon Jennings made the Maestro PS-1 work for his
                              outlaw country sound on the album{" "}
                              <em>Dreaming My Dreams</em>, perhaps most
                              prominently on the song "Are You Sure Hank Done It
                              This Way."{" "}
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/5Z0Khiz8xgC8AYMr4ctS8Y?si=21ddcad7ce2a426b?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
                    id="year-1976"
                  >
                    <p class="cmp-timeline-content__year-title">1976</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Melvin &quot;Wah Wah&quot; Watson's album{" "}
                              <em>Elementary</em>
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Renowned session guitarist Melvin "Wah Wah" Watson
                              used a room full of Maestro on his own album
                              *Elementary,* including a Maestro Universal
                              Synthesizer System, an Echoplex, a Maestro Sample
                              And Hold Unit, and of course, the Boomerang Wah.
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/0QlElL39pJBNijyLaCrp56?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1979"
                  >
                    <p class="cmp-timeline-content__year-title">1979</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Billy Gibbons plays a Ring Modulator on ZZ Top's
                              &quot;Cheap Sunglasses&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              In a <em>Guitar World</em> article, lead guitarist
                              Billy Gibbons revealed that he used a Marshall
                              Major amplifier and a Maestro Ring Modulator on
                              this song, from ZZ Top's 1979 album Degüello, and
                              that the amplifier had a blown tube during
                              recording which added to the tonal character of
                              the song.
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/23GKaCeOwUt6MQyCwi4M26?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1979"
                  >
                    <p class="cmp-timeline-content__year-title">1979</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Gibson ceases production of Maestro electronics
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              By 1979, Norlin, in financial distress and
                              struggling to retain its footing in a changing and
                              growing industry, ceases production of all Maestro
                              products.
                            </p>
                            <p>
                              Maestro, the brand that quite literally put guitar
                              effect pedals on the map in the 60s and then led
                              the industry’s expansion into new sonic
                              territories in the 70s, went dormant just as the
                              pedal explosion kicked into overdrive in the 80s
                              and 90s.
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
                    id="year-1986"
                  >
                    <p class="cmp-timeline-content__year-title">1986</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>Norlin Sells Gibson</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Parent Company Norlin Sells Gibson to a group led
                              by Henry Juszkiewicz and David H. Berryman
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
                    id="year-1996"
                  >
                    <p class="cmp-timeline-content__year-title">1996</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Los Lobos' David Hidalgo solos with a Maestro
                              Parametric EQ pedal
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Almost twenty years after the brand went dormant,
                              vintage Maestro effects remain in use among those
                              in the know. On the solo for "Mas y Mas," for
                              instance, Los Lobos' David Hidalgo plays an early
                              70s three-pickup Les Paul Custom and an "old
                              Maestro Parametric EQ pedal with those big knobs
                              on the sides that you can work with your foot," he
                              told <em>Guitar Player </em>magazine.{" "}
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/6gMScrAoEiAk8jWo9JvIH8?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-1998"
                  >
                    <p class="cmp-timeline-content__year-title">1998</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Jon Spencer uses a vintage Maestro Octave Box to
                              play a mock bass line on &quot;Calvin&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              The Jon Spencer Blues Explosion is a band without
                              a bass player. But Spencer plugged into a vintage
                              Maestro Octave Box to play a fat and dirty mock
                              bass line on songs like "Calvin."
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/5ytqlD1Nwaf1dxvPDUKQeA?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                              ></iframe>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmp cmp-timeline-content">
                  <div
                    class="cmp-timeline-content__year-wrapper"
                    id="year-2003"
                  >
                    <p class="cmp-timeline-content__year-title">2003</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Dan Auerbach of the Black Keys plays a Maestro
                              fuzz pedal on <em>Thickfreakness</em>
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Dan Auerbach of the Black Keys often played a ‘73
                              Maestro fuzz MFZ-1 in the early 2000s to get the
                              growling blues sound of their early Fat Possom
                              records releases.
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/4m6uJViB1sb3OXErHUkkWk?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
                    id="year-2016"
                  >
                    <p class="cmp-timeline-content__year-title">2016</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Maestro fuzz effects on Childish Gambino's
                              &quot;Redbone&quot;
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Producer Ludwig Göransson uses the fuzz and octave
                              effects from a vintage Maestro G-2 Rythm N Sound
                              unit on the guitar track of Childish Gambino's
                              "Redbone."
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/lGKlIJsz7bM?start=300"
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
                    id="year-2017"
                  >
                    <p class="cmp-timeline-content__year-title">2017</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Adrian Quesada shows off an MFZ-1 Fuzz pedal and
                              Maestro Echoplex
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Guitarist and producer Adrian Quesada, before
                              forming the Black Pumas with Eric Burton, showed
                              off his{" "}
                              <a
                                href="https://www.instagram.com/p/BWYwgf2hPy7/"
                                title=""
                              >
                                #maestrofuzz
                              </a>{" "}
                              and his{" "}
                              <a
                                href="https://www.instagram.com/p/BTrcTnDDK-k/"
                                title=""
                              >
                                #maestroechoplex
                              </a>{" "}
                              on Instagram. Hear him put his effects to work
                              here on the <em>Look at My Soul</em>:
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/4Y2bC7jC07xjmiMC7oaxPJ?si=085236991cc54407?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
                    id="year-2019"
                  >
                    <p class="cmp-timeline-content__year-title">2019</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>
                              Seratones guitarist Travis Stewart wields an old
                              Maestro fuzz pedal
                            </p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              Forty years after the brand goes dormant, bands
                              like the southern soul rock band the Seratones are
                              still finding vintage Maestro pedals. "I think
                              that's just a really badass kind of a sound,"
                              Travis Stewart told <em>Guitar Player</em>.
                            </p>
                            <p>
                              <iframe
                                src="https://open.spotify.com/embed/track/1yMcvgZJ4RERujKSTRMt5U?utm_source=generator"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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
                    id="year-2022"
                  >
                    <p class="cmp-timeline-content__year-title">2022</p>
                    <div class="cmp-timeline-content__data-desc-wrapper">
                      <div class="cmp-timeline-content__wrapper ">
                        <div class="cmp-timeline-content__top-wrapper">
                          <h1>
                            <p>Gibson re-launches Maestro</p>
                          </h1>
                          <div class="cmp-timeline-content__body-copy-wrapper">
                            <p>
                              A newly reinvigorated Gibson relaunches Maestro
                              with an all-new line of five effect pedals. The
                              Maestro Original Collection includes a new
                              Fuzz-Tone FZ-M, reminiscent of the instantly
                              recognizable tones of the first-ever Maestro
                              pedal, the much-mythologized FZ-1. Alongside it,
                              the Ranger Overdrive, the Invader Distortion, the
                              Comet Chorus, and the Discoverer Delay.
                            </p>
                            <p>
                              <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/VLy5gUNcoZ4"
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
