function outputText(time) {
    document.getElementById("time-output").innerHTML="";
    //remove exisiting user_table, if exist
    var elem = document.getElementById("user_paces");
    if(elem != null) {
      elem.parentNode.removeChild(elem);
    }


    var table, i, minutes, name, a, b, answer, times;
    var row = "";
    table = "";
    if(validateTime(time)) {
        var headers = [11];
        var values = [11];
        headers = ["5k", "800", "Mile", "3k", "5k", "6k", "8k", "10k", "vLT", "Half marathon", "Marathon"];

        minutes = timeToSeconds(time);
        times = calculatePaces(minutes);
        //save values of times in correct format
        values[0] = convertPaces(minutes);
        for(i = 0; i < times.length; i++) {
            var temp = i+1;
            values[temp] = convertPaces(times[i]);
        }

        constructTable(headers, values);
        return true;
    }
    else if(time == "") {
        document.getElementById("time-output").innerHTML="";
    }
    else {
        document.getElementById("time-output").innerHTML="Invalid time";
    }
}

function constructTable(headers, values) {
    var i;
    var x = document.createElement("table");
    x.setAttribute("id", "user_paces");
    document.getElementById("time-output").appendChild(x);

    //table header
    var y;
    //table headers
    y = document.createElement("TR");
    y.setAttribute("id", "TR1");

    for(i = 0; i < headers.length; i++) {
        var y= document.createElement("TH");
        y.setAttribute("id", "myTH");
        document.getElementById("user_paces").appendChild(y);
        var id = "myTH" + i; 
        y.setAttribute("id", id);
        var t = document.createTextNode(headers[i]);
        y.appendChild(t);
        document.getElementById("user_paces").appendChild(y);
    }

    //table row
    y = document.createElement("TR");
    y.setAttribute("id", "TR2");
    document.getElementById("user_paces").appendChild(y);  

    //create table data
    for(i = 0; i < values.length; i++) {
        var z = document.createElement("TD");
        var t = document.createTextNode(values[i]);
        z.appendChild(t);
        y.appendChild(z);
    }
    document.getElementById("user_paces").appendChild(y);
}
  
    /* takes the string time input 
       converts to a number of seconds
       then divides seconds into mintutes
     */
function timeToSeconds(time) {
    var times = time.split(":");
    times.reverse();
    var x = times.length, y = 0, z;

    if(x == 1) {
        return times[0];
    }

    for (var i = 0; i < x; i++) {
        z = times[i] * Math.pow(60, i);
        y += z;
    }

    y =  y/ 60;

    return y;
}

function convertPaces(time) {
    var i = 0;
    var result = "";
    var row = "";
    var minutes = Math.floor(time);
    var seconds = Math.round((time-minutes) *60);
    if(seconds == 60) {
        minutes += 1;
        seconds = 0;
    }  
    if(seconds < 10) {
      result += "" + minutes + ":0" + seconds + "\t";
    }
    else
      result = "" + minutes + ":" + seconds + "\t";
  
    return result;
}  
    
//calculate paces and return the string result
function calculatePaces(minutes) { 
    var text = "";
    var i = 0;
    var time = 0;
    var _5k_mile_converion = 0.3218;
    var _800m = 1.13;
    var mile = 1;
    var _3k = 0.94;
    var _5k = .89;
    var _6k = .88;
    var _8k = .87;
    var _10k = 0.86;
    var vLT = .835;
    var half_marathon = 0.81;
    var marathon = 0.77;
    var mile_conversion = 0.89;
    var paces = [_800m, mile,  _3k, _5k, _6k, _8k, _10k, vLT, half_marathon, marathon];
    var times = [9];
    var pace = minutes * _5k_mile_converion * mile_conversion;
    
    for (i = 0; i < paces.length; i++) { 
        time = pace / paces[i];
        times[i] = time;
    }      
    return times;
}
  
//validates time
//single number entered is assumed to be minutes
//if a colon is used, format is MM:SS
//hours are not allowed
function validateTime(time) {
    var re1 = /^[\d]{1,2}$/;
    var re2 = /^[\d]{1,2}:{1}[\d]{2}$/;
  
    return re1.test(time) || re2.test(time);
}
