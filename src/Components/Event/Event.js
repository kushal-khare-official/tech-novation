import React, { useEffect } from "react";
import { Close } from "@material-ui/icons";
import $ from "jquery";

import "./Event.css";
import Debate from "../../assets/images/debate.jpg";
import PriceTag from "../PriceTag/PriceTag";

const Event = (props) => {
  function toggle_video_modal() {
    // Click on video thumbnail or link
    $(".js-trigger-video-modal").on("click", function (e) {
      // prevent default behavior for a-tags, button tags, etc.
      e.preventDefault();

      // Grab the video ID from the element clicked
      // var id = $(this).attr("data-youtube-id");

      // // Autoplay when the modal appears
      // // Note: this is intetnionally disabled on most mobile devices
      // // If critical on mobile, then some alternate method is needed
      // var autoplay = "?autoplay=1";

      // // Don't show the 'Related Videos' view when the video ends
      // var related_no = "&rel=0";

      // // String the ID and param variables together
      // var src = "//www.youtube.com/embed/" + id + autoplay + related_no;

      // // Pass the YouTube video ID into the iframe template...
      // // Set the source on the iframe to match the video ID
      // $("#youtube").attr("src", src);

      // Add class to the body to visually reveal the modal
      $("body").addClass("show-video-modal noscroll");
    });

    // Close and Reset the Video Modal
    function close_video_modal() {
      //   event.preventDefault();

      // re-hide the video modal
      $("body").removeClass("show-video-modal noscroll");

      // reset the source attribute for the iframe template, kills the video
      // $("#youtube").attr("src", "");
    }
    // if the 'close' button/element, or the overlay are clicked
    $("body").on(
      "click",
      ".close-video-modal, .video-modal .overlay",
      function (event) {
        // call the close and reset function
        close_video_modal();
      }
    );
    // if the ESC key is tapped
    $("body").keyup(function (e) {
      // ESC key maps to keycode `27`
      if (e.keyCode === 27) {
        // call the close and reset function
        close_video_modal();
      }
    });
  }

  useEffect(() => {
    toggle_video_modal();
  }, []);
  return (
    <>
      <section
        className="column left banner"
        style={{
          background: `url(${Debate})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PriceTag price="25" style={{ marginTop: "2rem" }} />
        {/* <a className="video-banner js-trigger-video-modal">
          <img className="video-banner-img" src={Debate} alt="debate" />
          <span className="video-banner-headline">DARE TO SPEAK</span>
        </a> */}
      </section>

      <section className="column right">
        <article className="content">
          <h1>
            DARE
            <br />
            TO SPEAK
          </h1>

          <p>
            In this demo I worked out how to leverage just the YouTube video’s
            unique ID, and pass it in to a reusable modal component that takes
            advantage of YouTube’s embed&nbsp;method.
          </p>

          <h2>Launch From Thumbnails</h2>

          <div className="video-thumb-grid">
            <a className="video-thumb js-trigger-video-modal">
              <img
                className="video-banner-img"
                src="http://i3.ytimg.com/vi/hrB-_nIer88/maxresdefault.jpg"
                width="100%"
                height="100%"
                alt=""
              />
            </a>
          </div>

          <h2>RULES</h2>

          <ol>
            <li>
              Each of the participants will be getting a topic on which they
              have to speak for half a minute.
            </li>
            <li>
              After the topic is revealed to them, each participant gets ten
              seconds to think about the topic.
            </li>
            <li>
              The participants are not allowed to do formalities as in normal
              debates like introducing themselves, greeting the audience, saying
              thank you,etc.
            </li>
            <li>
              All the remaining participant can interrupt the speaker on the any
              of the following criterias:
              <ul>
                <li>
                  {" "}
                  Hesitation: a momentary pause/ tripping over one's word
                </li>
                <li>
                  Repetition: repetition of any word/ phrase again and again.
                  Though repetition of common words like 'and' may not be
                  considered under this except during extreme cases.
                </li>
                <li>
                  Deviation: deviation from the subject, grammer, truth, or
                  logic
                </li>
              </ul>
            </li>
            <li>
              If an interruption is deemed valid by the judge, the participant
              interrupting gets to speak for the remaining of the allotted time.
            </li>
            <li>
              The participant who is speaking during the end of the allotted
              time gains +2 points
            </li>
            <li>
              All interruptions deemed invalid are penalised with -1 points.
            </li>
          </ol>
        </article>
      </section>

      <section className="video-modal">
        <div id="video-modal-content" className="video-modal-content">
          <iframe
            title="debate"
            id="youtube"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            src="https://drive.google.com/file/d/1UQIns15roWvRlEkzkBUUC8v-UeKpqbXB/preview"
          ></iframe>

          <a className="close-video-modal">
            <Close />
          </a>
        </div>

        <div className="overlay"></div>
      </section>
      
      <div className="button-group">
        <a className=" button primary js-trigger-video-modal">Add To Cart</a>

        <a className=" button js-trigger-video-modal">Add to Wishlist</a>
      </div>
    </>
  );
};

export default Event;
