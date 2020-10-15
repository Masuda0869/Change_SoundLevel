


async function getMedia(constraints){
  let stream = null;
  try{
    stream = await navigator.mediaDevices.getUserMedia(constraints);
  }catch(err){
    console.log("error");
  }
  return stream;
}

(async function main() {
    const localVideo = document.getElementById('js-local-video');

    const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });

    localVideo.srcObject = localStream;
})();
