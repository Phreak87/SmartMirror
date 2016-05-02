function zodiac_sign(date) {
    // Date to zodiac unicode sign

    // http://stackoverflow.com/questions/3274597/how-would-i-determine-zodiac-astrological-star-sign-from-a-birthday-in-python
   
    // http://stackoverflow.com/questions/1267283/how-can-i-create-a-zerofilled-value-using-javascript
    function zeroFill( number, width ) {
        width -= number.toString().length;
        if ( width > 0 ) {
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
        }
        return number + ""; // always return a string
    }

   
    mdd = (date.getMonth() + 1) + zeroFill( date.getDate(), 2);
    // console.log(mdd);
	
    if (mdd < 120) {
        sign = "Steinbock";
    } else if (mdd < 218) {
        sign = "Wassermann";
    } else if (mdd < 320) {
        sign = "Fisch";
    } else if (mdd < 420) {
        sign = "Widder";
    } else if (mdd < 521) {
        sign = "Stier";
    } else if (mdd < 621) {
        sign = "Zwillinge";
    } else if (mdd < 722) {
        sign = "Krebs";
    } else if (mdd < 823) {
        sign = "Loewe";
    } else if (mdd < 923) {
        sign = "Jungfrau";
    } else if (mdd < 1023) {
        sign = "Waage";
    } else if (mdd < 1122) {
        sign = "Scorpion";
    } else if (mdd < 1222) {
        sign = "Schuetze";
    } else if (mdd < 1231) {
        sign = "Steinbock";
    }
    return sign;
}
