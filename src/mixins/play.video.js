
const video = {
    methods: {
        play(index){
            window.$.fancybox.open({
                src: `${'#video' + index}`,
            })
        }
    }
}
export {video}