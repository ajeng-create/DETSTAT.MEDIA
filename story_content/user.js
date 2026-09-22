function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5prEayVZeSA":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="DETSTATBG.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

