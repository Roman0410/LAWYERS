Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".language").click(function (event) {
  $(".language-list").toggleClass("open");
});
$(window).scroll(function () {
  let header = $(".header");
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > 150) {
    header.addClass("header-scroll");
  } else {
    header.removeClass("header-scroll");
  }
});
$(".filter-item").click(function (event) {
  let wiki = $(".wiki");
  $(this).closest(wiki).find(".filter-item").removeClass("current");
  $(this).addClass("current");
});
$(".filter-name").click(function (event) {
  let wiki = $(".wiki");
  $(this).closest(wiki).find(".filter-name").removeClass("current");
  $(this).addClass("current");
});

// let filter = $("[data-filter]");

// filter.on("click", function () {
//   let filterItem = $(this).data("filter");
//   let wiki = $(this).closest(".wiki");
//   $("[data-serv]").each(function () {
//     let serviceInfo = $(this).data("serv");

//     if (serviceInfo != filterItem) {
//       $(this).addClass("hide");
//     } else {
//       $(this).removeClass("hide");
//     }
//   });
// });
$("[data-filter]").on("click", function () {
  let filterItem = $(this).data("filter");
  let $filterContainer = $(this).closest(".wiki");
  $filterContainer.find("[data-serv]").each(function () {
    let serviceInfo = $(this).data("serv");

    if (serviceInfo !== filterItem) {
      $(this).addClass("hide");
    } else {
      $(this).removeClass("hide");
    }
  });
});
