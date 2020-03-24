let lastDetectedMarker;
var parentWindow = window.parent;

function changeAudioSource(markerNumber)
{
  parentWindow.document.getElementById("audioPlayer").setAttribute('src', places[markerNumber].narrationLink);
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
          parentWindow.lastDetectedMarker = markerValue;
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
