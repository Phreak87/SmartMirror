function Mondberechnungen(){
	phase_junk(moon_day(new Date()));
    var lon = 13.31315;
    var lat = 48.40149;
    var today = today || new Date();
    var year = today.getFullYear();
    var day = today.getDate();
    var month = today.getMonth()+1; // 0 index :(
    var hours = today.getHours();
    var tz = -today.getTimezoneOffset()/60;
    var mj = mjd(day, month, year, 0.0);
    var riset = find_moonrise_set(mj, tz, lon, lat);
    var moonrise = riset[0];
    var moonset = riset[1];
    var sunrs = find_sun_and_twi_events_for_date(mj, tz, lon, lat).split(" ");
    var sunrise = sunrs[1];
    var sunset = sunrs[2];
    document.getElementById('riseset').style.visibility = 'visible';
    document.getElementById('moonrise').innerHTML = moonrise;
    document.getElementById('moonset').innerHTML = moonset;
    document.getElementById('sunrise').innerHTML = sunrise;
    document.getElementById('sunset').innerHTML = sunset;
    document.getElementById('zodiac').innerHTML = zodiac_sign(today);
}