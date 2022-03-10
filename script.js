const videoElement=document.getElementById("video")
const start = document.getElementById("start")
const stop = document.getElementById("stop")

// Options for getDisplayMedia()
let displayMediaOptions={
    video:{
        cursor:'always'
    },
    audio:false
}

// Set event listeners for the start and stop buttons
start.addEventListener("click",function(e){
    startCapture()
},false)

stop.addEventListener("click",function(e){
    stopCapture()
},false)


//The startCapture() method, below, starts the capture of a MediaStream
async function startCapture(){
    try{
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
    }catch(err){
        console.log("error"+ err)
    }
}

    //The stopCapture() method is called when the "Stop Capture" button is clicked
 function stopCapture(e){
 let tracks = videoElement.srcObject.getTracks()
   tracks.forEach(track=>track.stop())
   videoElement.srcObject = null
    }
