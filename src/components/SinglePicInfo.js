// Component for when user clicks a single photo
// Shows information gathered by the API call (title, date, explanation of photo)
// Single photo pages will use the photo date as a unique identifier since there is only ever one photo per day

/* 
Example response for API Call by date YYYY-MM-DD
GET https://api.nasa.gov/planetary/apod?api_key=HwOHpSPCCVunbSFRGfICfoaOpIJhA8Bdlume5yGS&date=2023-09-01

{
	"copyright": "Serge Brunier, Jean-François Bax, David Vernet",
	"date": "2023-09-01",
	"explanation": "In 1716, English astronomer Edmond Halley noted, \"This is but a little Patch, but it shows itself to the naked Eye, when the Sky is serene and the Moon absent.\" Of course, M13 is now less modestly recognized as the Great Globular Cluster in Hercules, one of the brightest globular star clusters in the northern sky. Sharp telescopic views like this one reveal the spectacular cluster's hundreds of thousands of stars. At a distance of 25,000 light-years, the cluster stars crowd into a region 150 light-years in diameter. Approaching the cluster core, upwards of 100 stars could be contained in a cube just 3 light-years on a side. For comparison, the closest star to the Sun is over 4 light-years away. The remarkable range of brightness recorded in this image follows stars into the dense cluster core.",
	"hdurl": "https://apod.nasa.gov/apod/image/2309/M13-totale-en-cours-crop8.jpg",
	"media_type": "image",
	"service_version": "v1",
	"title": "The Great Globular Cluster in Hercules",
	"url": "https://apod.nasa.gov/apod/image/2309/M13-totale-en-cours-crop8_1024.jpg"
}
*/