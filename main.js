var data;
$(document).ready(function () {
  page.init();
});

var page = {
  url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=e70dcfdcf18b2523bd529274a81155ae%3A8%3A73361668',
  init: function () {
    page.getMostPop();
    page.myEach();
  },

  getMostPop: function () {
      $.ajax({
        dataType: "json",
        url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=e70dcfdcf18b2523bd529274a81155ae%3A8%3A73361668',
        method: "GET",
        data: 'JSONP',
        success: function(myData){
          data = myData.results;
          console.log("SUCCESS: ", myData);
          myData.results.forEach(function(el,idx,arr) {
            var uRL = el.url;
            var theTitle = el.title;
            var byline = el.byline;
            $('.mostPop').append("<h2><a href='" + uRL+ "'>" + theTitle + "</a></h2>" + "<h4>"+ byline + "</h4>" + "<br>");



          })



        },
        error: function(myData) {
          console.log("FAILURE: ", myData);
          data = myData;
        }
      });
    },
    myEach: function() {
      // var dataRes = data.results
      //
      // var uRL = $.each( dataRes, function(){
      //   for (var i=0; i< dataRes.length; i++)
      //       for (var name in dataRes[i]) {
      //           $(".link").append(dataRes[i].url);
      //       }
      //     });
      //   var theTitle = $.each( dataRes, function(){
      //     for (var i=0; i< dataRes.length; i++)
      //         for (var name in dataRes[i]) {
      //             $(".title").append(dataRes[i].title);
      //         }
      //       });
      //   var byLine = $.each( dataRes, function(){
      //     for (var i=0; i< dataRes.length; i++)
      //         for (var name in dataRes[i]) {
      //             $(".byline").append(dataRes[i].byline);
      //       }
      //   });
      //
      // $('.mostPop').append(uRL + theTitle + byline);
    },


  }
    // data.results[0].url
    // data.results[0].title
    // data.results[0].byline


// console.log(data.id);
// $.getJSON("http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=e70dcfdcf18b2523bd529274a81155ae%3A8%3A73361668");
// },
