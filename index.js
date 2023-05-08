let video_sea = document.getElementById("video_sea");

    video_sea.addEventListener("timeupdate", function(){
        if(video_sea.currentTime >= video_sea.duration - 0.15){
            video_sea.currentTime = 0.15;
        };

    });




