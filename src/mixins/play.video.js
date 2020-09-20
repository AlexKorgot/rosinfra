const video = {
    methods: {
        play(){
            let vid = document.getElementById("video");
            vid.requestFullscreen()
            vid.play();
        }
    }
}
export {video}