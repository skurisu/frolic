$(function(){

  render(testObj);
  
  $("#test1").click(function() {
    render(testObj);
  });
  
  $("#test2").click(function () {
    render(testObj2);
  });

});

function render (myObj) {
  $("div.name").html(myObj.name);
  $("div.description").html(myObj.description);
  $("div.location").html(myObj.location);
  $("div.map").html('<iframe class="google-map" height="300" width="600" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJ2XQnZtD-O5nFyeQmEGyTBMVRJRRPVPo&q=' + myObj.location + '"></iframe>');

  $("div.photos").empty();

  myObj.photos.map(function (photo, index) {
    var classes = 'single-pic';
    if(index !== 0) {
      classes += ' hide-pic';
    }
    $("div.photos").append("<img src='"+ photo +"' class=" + "'" + classes + "'" + ">");
  });

  $("div.associated-pages").empty();

  myObj.associated_pages.map(function (article) {
    $("div.associated-pages").append('<div class="individual-article">' + '<img src=' + article.thumbnail +' class="thumbnail">' + '<a href="' + article.link + '">' + article.title + '</a>' + '</div>');
  });
}


var testObj = {
    name: "RESTAURANT NAME",
    photos: [
        "http://toonbarn.com/wordpress/wp-content/uploads/2011/02/Despicable-Mes-Minions-and-the-Despicable-Banana.jpg",
        "http://www.reactiongifs.us/wp-content/uploads/2014/02/banana_despicable_me.gif",
        "http://i.ytimg.com/vi/f3ratSbJ3Ls/maxresdefault.jpg"
    ],
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam totam fuga ad sint facilis consequatur eligendi, officiis enim delectus incidunt suscipit neque, inventore deserunt, magni minima explicabo consectetur odit illo!",
    location: "2904 E Manoa Rd, Honolulu HI 96822",
    associated_pages: [
      {thumbnail: "http://www-static.weddingbee.com/pics/241570/mint-green.jpeg", title: "This is the title of my article blah blah blah asdffdsa", link: "http://www.google.com"},
      {thumbnail: "http://www-static.weddingbee.com/pics/241570/mint-green.jpeg", title: "It's kind of long", link: "http://www.buzzfeed.com"},
      {thumbnail: "http://www-static.weddingbee.com/pics/241570/mint-green.jpeg", title: "But I don't really care", link: "http://www.yahoo.com"}]
};

var testObj2 = {
    name: "toni toni toni",
    photos: [
        "http://www.shorsterriers.com/images/rusty/rustyconfo.jpg",
        "http://www.yhenjyty.com/nyyti3kkpieni.JPG",
        "http://britishgrit.com/wp-content/uploads/2013/02/068.jpg"
    ],
    description: "arf! my house!",
    location: "1925 Judd Hillside Rd Honolulu, HI 96822",
    associated_pages: [
      {thumbnail: "http://www-static.weddingbee.com/pics/241570/mint-green.jpeg", title: "This is the title of my article blah blah blah asdffdsa", link: "http://www.google.com"},
      {thumbnail: "http://www-static.weddingbee.com/pics/241570/mint-green.jpeg", title: "It's kind of long", link: "http://www.buzzfeed.com"},
      {thumbnail: "http://www-static.weddingbee.com/pics/241570/mint-green.jpeg", title: "But I don't really care", link: "http://www.yahoo.com"}]
};

