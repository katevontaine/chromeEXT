$(document).ready(function () {
  page.init();
});

var page = {
  url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=e70dcfdcf18b2523bd529274a81155ae%3A8%3A73361668',
  init: function () {
  page.getMostPop;
  page.myEach;
  },

getMostPop: function () {
      $.ajax({
        dataType: "json",
        url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=e70dcfdcf18b2523bd529274a81155ae%3A8%3A73361668',
        method: "GET",
        data: page,
        success: function(myData){
          console.log(myData.url);
        }
      });
    }
  };
myEach: function(){
var dataRes = data.results

var uRL = $.each( dataRes, function(){
  for (var i=0; i< dataRes.length; i++)
      for (var name in dataRes[idx]) {
          $(".link").append(dataRes[idx].url);
      }
    });
  var theTitle = $.each( dataRes, function(){
      for (var i=0; i< dataRes.length; i++)
          for (var name in dataRes[idx]) {
              $(".title").append(dataRes[idx].title);
          }
        });
        var byLine = $.each( dataRes, function(){
          for (var i=0; i< dataRes.length; i++)
              for (var name in dataRes[idx]) {
                  $(".byline").append(dataRes[idx].byline);
              }
            });

        $('.mostPop').append(url + theTitle + byline);
});
    // data.results[0].url
    // data.results[0].title
    // data.results[0].byline



// console.log(data.id);
// $.getJSON("http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=e70dcfdcf18b2523bd529274a81155ae%3A8%3A73361668");
// },
