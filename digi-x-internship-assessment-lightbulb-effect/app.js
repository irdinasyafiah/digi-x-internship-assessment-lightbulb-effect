function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulbon")) {
    image.src = "lightoff.png";
  } else {
    image.src = "lighton.png";
  }
}