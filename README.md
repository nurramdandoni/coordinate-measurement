# coordinate-measurement
Measurement Beetween Coordinates
<br>Pengukur Antara Kordinat

## How to Use
> npm install coordinate-measurement

> var distance_modul = require('coordinate-measurement');
<br>// add your coordinate 
<br> > var distanceIs = distance.CoordsMeasurements('from-latitude','from-longitude','to-latitude','to-longitude','unit','decimal-place');
<br> > console.log(distanceIs);

### Note
<table>
<tr>
<td>No.</td><td>Parameter</td><td>Value</td><td>Mandatory</td><td>Optional</td>
</tr>
<tr>
<td>1</td><td>from-latitude</td><td>Latitude Coordinate first location</td><td>Yes</td><td>-</td>
</tr>
<tr>
<td>2</td><td>from-longitude</td><td>Longitude Coordinate first location</td><td>Yes</td><td>-</td>
</tr>
<tr>
<td>3</td><td>to-latitude</td><td>Latitude Coordinate second location</td><td>Yes</td><td>-</td>
</tr>
<tr>
<td>4</td><td>to-longitude</td><td>Longitude Coordinate second location</td><td>Yes</td><td>-</td>
</tr>
<tr>
<td>5</td><td>unit</td><td>km,mi,nm,m <i>default(km)</i></td><td>-</td><td>Yes</td>
</tr>
<tr>
<td>6</td><td>decimal-place</td><td>0-8 <i>default(8 place)</i></td><td>-</td><td>Yes</td>
</tr>
</table>

