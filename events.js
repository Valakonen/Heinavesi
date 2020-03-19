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
  audioInfoBtn.play();

  if(infoActivated == false)
  {
    if(lastDetectedMarker != null)
    {
      infoActivated == true;
      changeProductInfo(lastDetectedMarker);
    }
  }
  else
  {
    infoActivated == false;
  }
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
        lastDetectedMarker = markerValue;

				// TODO: Add your own code here to react to the marker being found.
        if (markerValue == 0)
        {

        }
        else if (markerValue == 1)
        {
          
        }
        else if (markerValue == 3)
        {

        }

        else if (markerValue == 4)
        {

        }

			});

			marker.addEventListener('markerLost', function() {
				// TODO: Add your own code here to react to the marker being lost.

			});
		}
  });
