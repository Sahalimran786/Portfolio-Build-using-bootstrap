$(document).ready(function(){
    $(window).scroll(function () {
        if (this.scrollY > 100) {
          $(".scroll-up-btn").addClass("show");
        } else {
          $(".scroll-up-btn").removeClass("show");
        }
      });
      $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
      });
});