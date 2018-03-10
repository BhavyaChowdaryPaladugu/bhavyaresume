function newpage(){
  window.open("resume.html","_self",true);
}

function loadJSON(file,callback) {
  var rawFile= new XMLHttpRequest();
  rawFile.overrideMineType("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function(){
    if (rawFile.readyState===4  && rawFile.status=="200") {
      callback(rawFile.responseText);
    }
  }
rawFile.send();
}
loadJSON("resources/resume.json",function (text) {
  var data=JSON.parse(text);
console.log(data);

});
