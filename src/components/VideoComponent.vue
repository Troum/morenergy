<template>
    <b-col cols="12"  ref="meVideo" class="p-0 me_video-component">
        <b-row class="p-0 m-0">
            <b-col cols="12" :xl="title && description ? 6 : 12" class="m-0 me_video-component-line-right">
                <b-row>
                    <b-col cols="10" class="mx-auto d-flex justify-content-center align-items-center">
                        <div v-if="isVideo" class="w-100 d-flex justify-content-center align-items-center video-ccontainer">
                            <video id="video" ref="video" class="img-fluid d-block"
                                   v-bind:poster="videoPoster"
                                   preload="metadata"
                                   v-bind:src="videoUrl">
                            </video>
                            <button class="me_video-component-button" @click="play"
                                    :class="onplay ? 'me_video-component-pause' : 'me_video-component-play'" type="button">
                            </button>
                            <button class="me_video-component-fullscreen-button me_video-component-fullscreen-on"
                                    @click="expand" type="button"></button>
                        </div>
                        <img v-else class="me-imageincomp" :src="videoPoster" :alt="videoPoster">
                    </b-col>
                    <b-col cols="10" v-if="name" class="mx-auto">
                        <p class="me-video-name mb-0 my-2">{{ name }}</p>
                    </b-col>
                </b-row>
            </b-col>
            <b-col v-if="!name" cols="12" xl="6" class="m-0 me_video-component-line-left">
                <b-row>
                    <b-col cols="11" align-h="center" class="mt-4 mt-xl-auto pl-xl-5 mx-auto">
                        <p class="me_video-component-title text-center text-xl-left">{{ title }}</p>
                        <hr class="me_video-component-title-underline mb-5">
                    </b-col>
                    <b-col cols="11" align-h="center" class="pl-xl-5 mx-auto">
                        <div class="me_video-component-description text-justify text-xl-left" v-html="description"></div>
                    </b-col>
                    <b-col cols="11" align-h="center" class="pl-xl-5 mx-auto">
                        <p class="me_video-component-info">{{ info }}</p>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    export default {
        props: {
            title: String,
            description: String,
            info: String,
            videoUrl: String,
            videoPoster: String,
            isVideo: Boolean,
            name: String
        },
        data() {
            return {
                onplay: false
            }
        },
        mounted(){
            document.addEventListener("webkitfullscreenchange", () => {
                if (document.webkitCurrentFullScreenElement) {
                        this.$refs.meVideo.classList.add('removeHeight');
                } else {
                    this.$refs.meVideo.classList.remove('removeHeight');
                }
            });

        },
        methods: {
            play() {
                if (this.onplay) {
                    this.$refs.video.pause();
                } else {
                    this.$refs.video.play();
                }
                this.onplay = !this.onplay;
            },
            expand() {
                this.$refs.video.webkitRequestFullscreen();
            }
        }
    }
</script>

<style lang="scss">
    .me_video-component {
        margin: 0 0 20px 0;
        background-color: #fff;
    }

    .me_video-component-title {
        font-size: 1.5rem;
        font-weight: 800;
        color: #0A2737;
    }
    .me_video-component-description {
        font-size: 0.9rem;
        font-weight: 300;
        color: #0A2737;
    }
    .me_video-component-info {
        font-size: 0.9rem;
        font-weight: 600;
        color: #0A2737;
    }
    .me_video-component-title-underline {
        background-color: #6DC286;
        border-radius: 5.5px;
        width: 160px;
        height: 4px;
        margin: auto;

    }
    .video-ccontainer {

    }
    .me_video-component {

        & video {
            max-height: 300px;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 0 0 3rem rgba(0,0,0,.175)!important;
            &:hover {
                cursor: pointer;
            };
            &:hover + .me_video-component-button {
                opacity: 1;
            };
            &:hover ~ .me_video-component-fullscreen-button {
                opacity: 1;
            }
            &:not(:fullscreen) {
                &::-webkit-media-controls {
                    display: none;
                }
            }
        }

        &.removeHeight video {
            max-height: 100%;
        }

    }
    .me_video-component-play {
        background-image: url("../assets/images/play.png");
    }
    .me_video-component-pause {
        background-image: url("../assets/images/pause.png");
    }
    .me_video-component-fullscreen-on {
        background-image: url("../assets/images/expand.png");
    }
    .me_video-component-button {
        position: absolute;
        opacity: 0;
        transition: .3s ease-in-out;
        border: none;
        background-color: #0A2737;
        background-repeat: no-repeat;
        background-position: center center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        &:hover {
            opacity: 1;
        }
    }
    .me_video-component-fullscreen-button {
        position: absolute;
        opacity: 0;
        transition: .3s ease-in-out;
        border: none;
        background-color: #0A2737;
        background-repeat: no-repeat;
        background-position: center center;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        &:hover {
            opacity: 1;
        }
    }
    @media (max-width: 1199px) {
        .me_video-component-button {
            left: 47%;
        }
        .me_video-component-fullscreen-button {
            right: 6%;
            bottom: 3%;
        }
    }
    @media (min-width: 1200px) {
        .me_video-component-title-underline {
            margin-left: 0;
        }
        .me_video-component-line-right {
            border-right: 1px solid #F0EEEE;
        }
        .me_video-component-line-left {
            border-left: 1px solid #F0EEEE
        }
        .me_video-component-button {
            left: 47%;
        }
        .me_video-component-fullscreen-button {
            right: 4%;
            bottom: 3%;
        }
    }
</style>