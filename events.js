let places;

fetch("./places.json")
  .then(function(resp)
{
  return resp.json();
})
.then(function(data)
{
  console.log(data);
  places = data;
})

// Info screen toggle
let infoActivated = false;
let lastDetectedMarker;

function disablear()
{
  document.getElementById("arView").style.display = "none";
};

function toggleInfo()
{

  if (document.getElementById("info").style.display == "block")
  {
    document.getElementById("info").style.display = "none";
  }
  else
  {
    document.getElementById("info").style.display = "block";
  }

  if(infoActivated == false)
  {
    if(lastDetectedMarker != null)
    {
      infoActivated == true;
      changePlaceInfo(lastDetectedMarker);
    }
  }
  else
  {
    infoActivated == false;
  }
};

function changeAudioSource(markerNumber)
{
  document.getElementById("audioPlayer").setAttribute('src', places[markerNumber].narrationLink);
};

// changes info text, image and video to match marker
function changePlaceInfo(markerNumber)
{
  document.getElementById("placeTitle").innerHTML = places[markerNumber].name;
  document.getElementById("placeDescription").innerHTML = places[markerNumber].description;
  document.getElementById("infoVideo").src = places[markerNumber].videoLink;
  document.getElementById("map").src = places[markerNumber].mapImage;
};
