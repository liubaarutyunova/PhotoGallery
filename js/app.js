//Problem: user when clicking on image goes to a dead end
//Solution: create an overlaw with the larg image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")

 // An image to overlay
$overlay.append($image);

 // A caption to overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay);


//capture the click on a link to an image					 
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
 // Update overlay with the image linked in the link
$image.attr("src", imageLocation);	
	

 //show the overlay
		$overlay.show();

 //Get child's alt attribute and set caption
var caprionText = $(this).children("img").attr("alt");
$caption.text(caprionText);
	
});

//When overlay is clicked
$overlay.click(function() {
	$overlay.hide();
})
 //Hide the overlay
 







