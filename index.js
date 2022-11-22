const CoordsMeasurements = (fromLatitude,fromLongitude,toLatitude,toLongitude,unit='km',decimal=0) => {
    let R = 6371; // earth Radius in km
    let dLat = (fromLatitude - toLatitude) * (Math.PI / 180); 
    let dLon = (fromLongitude - toLongitude) * (Math.PI / 180); 
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toLatitude * (Math.PI / 180)) * Math.cos(fromLatitude * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // in km
    if (unit == 'km') {
        if(decimal != 0){
            return d.toFixed(decimal)+' Kilometers';
        }else{
            return d+' Kilometers';
        }
    } else if (unit == 'm') {
        if(decimal != 0){
            return (d * 1000).toFixed(decimal)+' Meters';
        }else{
            return (d * 1000)+' Meters';
        }
    } else if (unit == 'mi') {
        if(decimal != 0){
            return (d / 1.609).toFixed(decimal)+' Miles';
        }else{
            return (d / 1.609)+' Miles';
        }
    } else if (unit == 'nm') {
        if(decimal != 0){
            return (d / 1.852).toFixed(decimal)+' Nautical Miles';
        }else{
            return (d / 1.852)+' Nautical Miles';
        }
    } else {
        return d+' Kilometers';
    }
    }
    module.exports = {CoordsMeasurements};
