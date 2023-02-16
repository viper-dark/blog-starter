const TRILLION = 1000000000000;
const BILLION = 1000000000;
const MILION = 1000000;
const TOUSAND = 1000;

const p = document
  .getElementById("calculateButton")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const speed = document.getElementById("internetSpeed").value;
    const speedBase = document.getElementById("internetSpeedBase").value;
    const size = document.getElementById("fileSize").value;
    const sizeBase = document.getElementById("fileSizeBase").value;

    //setting the result visibility to visible
    document.getElementById("results").style.visibility = "visible";

    //calculating the the result

    //speed in bits per second
    const bandwidth = Number(speed) * 10 ** Number(speedBase.at(-1));

    //size in bytes
    const bytes = Number(size) * 2 ** Number(sizeBase);

    const timeInS = (bytes * 8) / bandwidth;
    const bandInBYTE= bandwidth / 8
    function secondsToDhms(seconds) {
      seconds = Number(seconds);
      var d = Math.floor(seconds / (3600*24));
      var h = Math.floor(seconds % (3600*24) / 3600);
      var m = Math.floor(seconds % 3600 / 60);
      var s = Math.floor(seconds % 60);
      
      var dDisplay = d > 0 ? d + (d == 1 ? " يوم, " : " أيام, ") : "";
      var hDisplay = h > 0 ? h + (h == 1 ? " ساعة, " : " ساعات, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " دقيقة, " : " دقائق, ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " ثانية" : " ثواني") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
      }
      console.log(secondsToDhms(timeInS))
     
    let downS = "";
    let s;
    if (bandInBYTE > TRILLION) {
      downS = bandInBYTE/TRILLION+"TB";

    }
    else if (bandInBYTE > BILLION) {
      downS = bandInBYTE/BILLION+"GB";

    } else if (bandInBYTE > MILION) {
      downS = bandInBYTE/MILION+"MB";
    } else {
      downS = bandInBYTE/TOUSAND + "KB";

    }

    document.getElementsByClassName("time")[0].innerHTML = secondsToDhms(timeInS);
console.log(secondsToDhms(timeInS))
    document.getElementsByClassName("speed")[0].innerHTML = downS;
    var select = document.getElementById('fileSizeBase');
var text = select.options[select.selectedIndex].text;
    document.getElementsByClassName("size")[0].innerHTML =size+text

    // alert("the speed "+speed+ "base "+speedBase)
  });


  //copy to clipboard
  new ClipboardJS('.btn');
