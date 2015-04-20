$(function(){

  render(testObj);
  
  $("#test1").click(function() {
    render(testObj);
  });
  
  $("#test2").click(function () {
    render(testObj2);
  });

});

function render(myObj) {
  $("div.name").html(myObj.name);
  $("div.review").html(myObj.review);
  $("div.location").html(myObj.location);
  $("div.map").html('<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJ2XQnZtD-O5nFyeQmEGyTBMVRJRRPVPo&q=' + myObj.location + '"></iframe>');

  $("div.photos").empty();

  myObj.photos.map(function (photo, index) {
    var classes = 'single-pic';
    if(index !== 0) {
      classes += ' hide-pic';
    }
    $("div.photos").append("<img src='"+ photo +"' class=" + "'" + classes + "'" + ">");
  });

  $("div.associated_pages").empty();

  myObj.associated_pages.map(function (url) {
    $("div.associated_pages").append('<a href="' + url.link + '">' + url.title + '</a>');
  });
}


var testObj = {
    name: "RESTAURANT NAME",
    photos: [
        "http://toonbarn.com/wordpress/wp-content/uploads/2011/02/Despicable-Mes-Minions-and-the-Despicable-Banana.jpg",
        "http://www.reactiongifs.us/wp-content/uploads/2014/02/banana_despicable_me.gif",
        "http://i.ytimg.com/vi/f3ratSbJ3Ls/maxresdefault.jpg"
    ],
    review: "this is my review",
    location: "2904 E Manoa Rd Honolulu, HI 96822",
    associated_pages: [
      {title: "article1", link: "http://www.google.com"},
      {title: "article2", link: "http://www.buzzfeed.com"},
      {title: "article3", link: "http://www.yahoo.com"}]
};

var testObj2 = {
    name: "toni toni toni",
    photos: [
        "http://www.shorsterriers.com/images/rusty/rustyconfo.jpg",
        "http://www.yhenjyty.com/nyyti3kkpieni.JPG",
        "http://britishgrit.com/wp-content/uploads/2013/02/068.jpg"
    ],
    review: "arf! my house!",
    location: "1925 Judd Hillside Rd Honolulu, HI 96822",
    associated_pages: [
      {title: "article1", link: "http://www.google.com"},
      {title: "article2", link: "http://www.buzzfeed.com"},
      {title: "article3", link: "http://www.yahoo.com"}]
};

