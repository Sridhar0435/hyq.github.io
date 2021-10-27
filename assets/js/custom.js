// const data = require("../../json/data.json");
// console.log(data);
fetch("json/banner.json")
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
<<<<<<< Updated upstream
fetch("/json/bestseller.json")
=======
fetch("json/bestseller.json")
>>>>>>> Stashed changes
  .then((response) => response.json())
  .then((data) => {
    data.map((val) => {
      $("#bestseller").append(
        '<div class="col-lg-4 col-md-6 col-xs-6 ">' +
          '<div class="card-service wow fadeInUp bestsellerclass" onclick=description(' +
          val.id +
          ")>" +
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

$(".mobile").click(function () {
  $(".ul_mobile").hide();
});

$(".navbar-toggler").click(function () {
  $(".ul_mobile").show();
});

function description(id) {
  location.href = "/description.html?Id=" + id;
}
$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get("Id");

  fetch("json/description.json")
    .then((response) => response.json())
    .then((data) => {
      data.filter((val) => {
        if (val.id === idParam) {
          var input = "";

          for (var i = 0; i < val.image.length; i++) {
            input +=
              '<div class="carousel-item">' +
              '<img class="d-block w-100" src=' +
              val.image[i] +
              ' alt="">' +
              "</div>";
          }

          $("#setImage").append(input);
          $("#setImage .carousel-item:first-child").addClass("active");
          $("#productDetails").append(
            "<tr>" +
              "<td>Title</td>" +
              "<td>" +
              val.title +
              "</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Description</td>" +
              "<td class='descriptionReadmore'>" +
              val.description +
              "</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Display Type</td>" +
              "<td>" +
              val.displayType +
              "</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Display Size</td>" +
              "<td>" +
              val.displaySize +
              "</td>" +
              "</tr>" +
              "<tr>" +
              " <td>Speaker Output</td>" +
              "  <td>" +
              val.speakerOutput +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "   <td>Power Requirement</td>" +
              "   <td>" +
              val.powerRequirement +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "   <td>Connectivity Features</td>" +
              "  <td>" +
              val.connectivityFeatures +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>MountingType</td>" +
              "    <td>" +
              val.mountingType +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Resolution</td>" +
              "     <td>" +
              val.resolution +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Warranty</td>" +
              "     <td>" +
              val.warranty +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Brightness</td>" +
              "     <td>" +
              val.brightness +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Model Number</td>" +
              "     <td>" +
              val.modelNumber +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Supported Apps</td>" +
              "     <td>" +
              val.supportedApps +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>InBox</td>" +
              "     <td>" +
              val.inBox +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>RefreshRate</td>" +
              "     <td>" +
              val.refreshRate +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Price</td>" +
              "      <td>" +
              val.price +
              "</td>" +
              "  </tr>" +
              "  <tr>" +
              "     <td>Discount</td>" +
              "     <td>" +
              val.discount +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Operating System</td>" +
              "     <td>" +
              val.operatingSystem +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Panel Material</td>" +
              "     <td>" +
              val.panelMaterial +
              "</td>" +
              "  </tr>" +
              "  <tr>" +
              "     <td>Aspect Ratio</td>" +
              "     <td>" +
              val.aspectRatio +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "    <td>Color</td>" +
              "    <td>" +
              val.color +
              "</td>" +
              "  </tr>" +
              "  <tr>" +
              "      <td>CapacityKg</td>" +
              "     <td>" +
              val.capacityKg +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Function Type</td>" +
              "     <td>" +
              val.functionType +
              "</td>" +
              " </tr>" +
              "  <tr>" +
              "      <td>Loading Type</td>" +
              "      <td>" +
              val.loadingType +
              "</td>" +
              "  </tr>" +
              "  <tr>" +
              "      <td>Country Of Origin</td>" +
              "      <td>" +
              val.countryOfOrigin +
              "</td>" +
              "  </tr>" +
              " <tr>" +
              "     <td>Minimum Order Quantity</td>" +
              "     <td>" +
              val.minimumOrderQuantity +
              "</td>" +
              " </tr>" +
              " <tr>" +
              "     <td>Delivery Time</td>" +
              "     <td>" +
              val.deliveryTime +
              "</td>" +
              " </tr>"
          );
        }
      });
    })
    .catch((error) => console.log(error));
});
