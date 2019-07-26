$(".js-main-tabs").tabs();

$('.route-body').hide();

$(".js-route-header").click(function () {
	$(this).next().slideToggle("middle");
	$(this).find('.js-arrow').toggleClass("js-arrow--active");
	$(this).toggleClass("route-header--active");
});

let _dateOptions = {
   hour: "numeric",
   minute: "numeric"
};

const _timeMethods = {
   getHour: $time => {
      let time = $time.split(":"),
         result = time.reduce((acc, current) => +acc + +current / 60);
      return result;
   },
   comparison: ($timeElems, $currentTime) => {
      $timeElems.each(function() {
         let _thisElem = $(this),
            thisTime = _thisElem.text(),
            timeToHour = _timeMethods.getHour(thisTime);

         if (timeToHour >= $currentTime) {
            $timeElems.parent().removeClass("time--active");
            _thisElem.parent().addClass("time--active");
            return false;
         }
      });
   }
};

let date = $updateVal => {
   let currentTimeBox = $("[data-currenttime]"),
      timeBox = $("[data-timebox]");

   timeBox.each(function() {
      let _thisBox = $(this),
         timeElems = _thisBox.find("[data-time]");

      let _timer = setTimeout(function tick() {
         let currentTime = new Date().toLocaleString("ru", _dateOptions),
            currentTimeToHour = _timeMethods.getHour(currentTime);

         currentTimeBox.text(currentTime);

         _timeMethods.comparison(timeElems, currentTimeToHour);

         _timer = setTimeout(tick, $updateVal);
      }, $updateVal);
   });
};

date(1000);


