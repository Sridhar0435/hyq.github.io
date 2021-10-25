// const data = require("../../json/data.json");
// console.log(data);
fetch("https://sridhar0435.github.io/hyq.github.io/json/banner.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((val) => {
      $("#silderbanner").append(
        '<div class="swiper-slide">' +
          '<div class="page-banner home-banner">' +
          '<div class="row align-items-center flex-wrap-reverse h-100">' +
          '<div class="col-md-6 py-5 wow zoomIn">' +
          '<h3 class="mb-4">' +
          val.title1 +
          "</h3>" +
          '<p class="text-lg text-grey mb-5">' +
          val.title2 +
          " " +
          "</p>" +
          //   '<a href="#" class="btn btn-primary btn-split">Watch Video <div class="fab"><span' +
          //   ' class="mai-play"></span>' +
          //   " </div></a>" +
          " </div>" +
          ' <div class="col-md-6 py-5 wow zoomIn">' +
          '<div class="img-fluid text-center banner_image">' +
          ' <img src="' +
          val.image +
          '" alt="">' +
          " </div>" +
          " </div>" +
          " </div>" +
          //   ' <a href="#about" class="btn-scroll" data-role="smoothscroll"><span class="mai-arrow-down"></span></a>' +
          "</div>" +
          "</div>"
      );
    });
  })
  .catch((error) => console.log(error));

//Best Seller
fetch("https://sridhar0435.github.io/hyq.github.io/json/bestseller.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((val) => {
      $("#bestseller").append(
        '<div class="col-lg-4">' +
          '<div class="card-service wow fadeInUp">' +
          '<div class="header">' +
          '<img style="width:100%" src="' +
          val.image +
          '" alt="">' +
          "</div>" +
          '<div class="body">' +
          "<p>" +
          val.description +
          "</p>" +
          '<a href="service.html" class="btn btn-primary buybtn">Buy</a>' +
          "</div>" +
          "</div>" +
          "</div>"
      );
    });
  })
  .catch((error) => console.log(error));
