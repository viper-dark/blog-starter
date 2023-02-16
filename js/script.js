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
      let d = Math.floor(seconds / (3600*24));
      let h = Math.floor(seconds % (3600*24) / 3600);
      let m = Math.floor(seconds % 3600 / 60);
      let s = Math.floor(seconds % 60);
      
      let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
      let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
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
    document.getElementsByClassName("speed")[0].innerHTML = downS;

    // alert("the speed "+speed+ "base "+speedBase)
  });


  //copy to clipboard
  new ClipboardJS('.btn');
