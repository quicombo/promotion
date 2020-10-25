<template>

</template>

<script>
  import {gsap} from 'gsap'
    export default {
        mounted: function() {
            this.scrollAnimation();
        },
        methods: {
            scrollAnimation() {
                gsap.timeline({
                    scrollTrigger: {

                        trigger: ".box",
                        start: "center center",
                        end: "bottom top",
                        markers: true,
                        scrub: true,
                        pin: true,
                    }
                })
                    .from(".text1", { x : innerWidth * 1, opacity: 0 })
                    .from(".text2", { x : innerWidth * 1, opacity: 0 })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: ".box2",
                        start: "center center",
                        end: "bottom top",
                        markers: true,
                        scrub: true,
                        pin: true,
                    }
                })
                    .from(".text4", { x : innerWidth * 1, opacity: 0 })
                    .from(".text5", { x : innerWidth * 1, opacity: 0 })
            },
        }
    };
</script>

<style scoped>

</style>
