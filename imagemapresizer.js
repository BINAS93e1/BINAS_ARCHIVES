function updateCoords() {
			var img = document.getElementById("myImage");
			var originalWidth = img.naturalWidth;
			var originalHeight = img.naturalHeight;

			var currentWidth = img.clientWidth;
			var currentHeight = img.clientHeight;

			var scaleFactorX = currentWidth / originalWidth;
			var scaleFactorY = currentHeight / originalHeight;

			var areas = document.getElementsByTagName("area");
			for (var i = 0; i < areas.length; i++) {
				var coords = areas[i].getAttribute("coords").split(",");
				for (var j = 0; j < coords.length; j++) {
					if (j % 2 == 0) {
						coords[j] = Math.round(parseInt(coords[j]) * scaleFactorX);
					} else {
						coords[j] = Math.round(parseInt(coords[j]) * scaleFactorY);
					}
				}
				areas[i].setAttribute("coords", coords.join(","));
			}
		}

		window.onload = updateCoords;
		window.onresize = updateCoords;