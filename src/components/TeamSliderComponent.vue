<template>
    <div id="team-carousel"
         class="carousel w-100 slide"
         data-ride="carousel" data-interval="false">
        <div class="carousel-inner me_team-carousel-inner">
            <div v-for="(slide, i) in slides" :key="i" :class="{'carousel-item h-100':true, 'active': active === slide.id }">
                <div class="row m-0 mt-3 p-0">
                    <div class="col-xl-8 d-none d-xl-block mx-auto p-0">
                        <p class="h5 font-weight-bold d-inline-block">{{ slide.name }}</p>
                    </div>
                    <div class="col-2 ml-auto mr-xl-2 p-0">
                        <button v-if="type === 'team'" type="button" class="close d-inline-block"
                                style="z-index: 2" @click="$bvModal.hide('team-modal')">
                            <span class="me_team-carousel-component-close-button" aria-hidden="true"></span>
                        </button>
                        <button v-else type="button" class="close d-inline-block"
                                style="z-index: 2" @click="$bvModal.hide('mentor-modal')">
                            <span class="me_team-carousel-component-close-button" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="col-xl-11 d-none d-xl-block mx-auto pl-2">
                        {{ $ml.current === 'DE' ? slide.position : slide.en_position }}
                    </div>
                </div>
                <div class="row m-0 mt-4 mt-xl-3 p-0 h-100">
                    <div class="col-11 mx-auto p-0 h-100">
                        <div class="row">
                            <div class="col-11 col-xl-5 mx-auto mx-xl-0 h-100">
                                <img class="img-fluid me-team-img-modal"
                                     :src="slide.full_image"
                                     :alt="slide.name">
                            </div>
                            <div class="col-11 d-block d-xl-none mx-auto mt-3 p-0 text-center">
                                <p class="h5 font-weight-bold d-inline-block">{{ slide.name }}</p>
                            </div>
                            <div class="col-11 d-block d-xl-none mx-auto mt-3 mb-3 p-0 text-center">
                                {{ $ml.current === 'DE' ? slide.position : slide.en_position }}
                            </div>
                            <div class="col-11 col-xl-7 mx-auto mx-xl-0 me_team-carousel-description">
                                <p class="text-justify font-weight-light"><tui-editor-viewer :value="$ml.current === 'DE' ? slide.description : slide.en_description"/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev me_team-carousel-control-prev" href="#team-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon me_team-carousel-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next me_team-carousel-control-next" href="#team-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon me_team-carousel-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    import TuiEditorViewer from "@toast-ui/vue-editor/src/Viewer";
    export default {
        components: {TuiEditorViewer},
        props: {
            slides: null,
            active: null,
            type: null,
        }
    }
</script>

<style lang="scss">
    @import "../scss/mixins";
    .me_team-carousel-component-close-button {
        display: block;
        background-image: url("../assets/images/close.png");
        background-repeat: no-repeat;
        background-size: contain;
    }
    .me_team-carousel-inner {
        width: 100%;
    }
    .me_team-carousel-item {
        height: 100%!important;
    }

    .me_team-carousel-control-prev, .me_team-carousel-control-next {
        width: 5%;
    }
    .me_team-carousel-prev-icon {
        @include backgroundImage("../assets/images/team-prev.png")
    }
    .me_team-carousel-next-icon {
        @include backgroundImage("../assets/images/team-next.png")
    }

    @media (max-width: 1199px) {
        .me_team-carousel-component-close-button {
            width: 18px;
            height: 18px;
        }
        .me_team-carousel-inner {
            min-height: 100%;
        }
        .me_team-carousel-control-prev, .me_team-carousel-control-next {
            width: 5%;
            height: 10%;
            top: 25%!important;
        }
    }
    @media (min-width: 1200px) {
        .me_team-carousel-component-close-button {
            width: 25px;
            height: 25px;
        }
        .me_team-carousel-inner {
            height: 500px;
        }
        .me_team-carousel-description {
            height: 450px;
            overflow-y: auto;
        }
        .me_team-carousel-control-prev, .me_team-carousel-control-next {
            height: 10%;
            top: 45%;
            visibility: visible;
            width: 5%;
        }
    }

</style>
