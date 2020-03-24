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

window.addEventListener('camera-init', (data) => {
    console.log('camera-init', data);
})

window.addEventListener('camera-error', (error) => {
    console.log('camera-error', error);
})

// Register events
AFRAME.registerComponent('registerevents', {
		init: function () {
			var marker = this.el;

			marker.addEventListener('markerFound', function() {
				var markerValue = marker.getAttribute("value");

        // update variable so info window can load right product

        // if same marker detected again do not update audio source
        if (lastDetectedMarker != markerValue)
        {
          lastDetectedMarker = markerValue;
          changeAudioSource(lastDetectedMarker);
        }

				// TODO: Add your own code here to react to the marker being found.
        if (markerValue == 0)
        {

        }
        else if (markerValue == 1)
        {

        }
        else if (markerValue == 2)
        {

        }

        else if (markerValue == 3)
        {

        }

			});

			marker.addEventListener('markerLost', function() {
				// TODO: Add your own code here to react to the marker being lost.

			});
		}
  });
