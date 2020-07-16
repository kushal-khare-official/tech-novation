import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import PriceTag from "../PriceTag/PriceTag";

const Card = (props) => {
  useEffect(() => {
    $(function () {
      $(".material-card > .mc-btn-action").click(function () {
        var card = $(this).parent(".material-card");
        var icon = $(this).children("i");
        icon.addClass("fa-spin-fast");

        if (card.hasClass("mc-active")) {
          $(".price-tag").css({ display: "block" });

          card.removeClass("mc-active");

          window.setTimeout(function () {
            icon
              .removeClass("fa-arrow-left")
              .removeClass("fa-spin-fast")
              .addClass("fa-bars");
          }, 800);
        } else {
          $(".price-tag").css({ display: "none" });

          card.addClass("mc-active");

          window.setTimeout(function () {
            icon
              .removeClass("fa-bars")
              .removeClass("fa-spin-fast")
              .addClass("fa-arrow-left");
          }, 800);
        }
      });
    });
  }, []);

  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <PriceTag price={props.price} />
      <article className={"material-card " + props.color}>
        <h2>
          <span>{props.name}</span>
          <strong>
            <i className="fa fa-fw fa-star"></i>
            {props.altName}
          </strong>
        </h2>
        <div className="mc-content">
          <div className="img-container">
            <img
              alt={props.imgDesc}
              className="img-responsive"
              src={props.imgSrc}
              height="718px"
              width="718px"
            />
          </div>
          <div className="mc-description">{props.desc}</div>
        </div>
        <a className="mc-btn-action">
          <i className="fa fa-bars"></i>
        </a>
        <div className="mc-footer">
          <Link to={`/events/${props.event}`}>
            <i>Detail</i>
          </Link>
          <a href="/">
            <i className="fa fa-cart-plus"></i>
          </a>
        </div>
      </article>
    </div>
  );
};

export default Card;
