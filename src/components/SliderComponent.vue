<template>
    <div id="carousel" class="carousel w-100 slide carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators me_carousel-indicators">
            <li v-for="(slide, i) in slides"
                :key="i" data-target="#carousel"
                :data-slide-to="i" :class="{'active': i === 0}">
                <span class="mx-auto text-center">{{ slide.indicator }}</span>
            </li>
        </ol>
        <div class="carousel-inner me_carousel-inner">
            <div v-for="(slide, i) in slides" :key="i" :class="[{'carousel-item h-100':true, 'active': i === 0 }]">
                <div class="row m-0 p-0 h-100">
                    <div class="col-12 col-xl-6 p-0">
                        <img class="img-fluid" :src="slide.image">
                    </div>
                    <div class="col-12 col-xl-6 p-0 me_carousel-item">
                        <div class="row mx-auto">
                            <div class="col-11 col-xl-9 mx-auto p-0 p-xl-1">
                                <p class="me_carousel-caption-title">{{ slide.indicator }}</p>
                                <p class="me_carousel-caption-description">{{ isMobile ? slide.mobile : slide.caption }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev me_carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon me_carousel-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next me_carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon me_carousel-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            slides: null
        },
        data() {
            return {
                isMobile: false
            }
        },
        beforeMount() {
            if (window.innerWidth <= 992 ) {
                this.isMobile = true;
            }
        }
    }
</script>

<style lang="scss">
    @import "../scss/mixins";
    #carousel {
        margin-bottom: 60px;
    }

    .me_carousel-indicators {
        width: 100%;
        margin: 0;
        & li {
            display: inline-flex;
            align-items: center;
            text-indent: 0;
            width: 25%;
            height: auto;
            margin: 0 1px 0 1px;
            border-top: none;
            border-bottom: none;
            opacity: 1;
            color: #0A2737;
        };
        & li:first-of-type {
            margin-left: 0;
        };
        & li:last-of-type {
            margin-right: 0;
        };
        & li.active {
            color: #fff;
            background-color: #0A2737;
            outline: none;
        };
    }
    .me_carousel-inner {
        width: 100%;
    }
    .me_carousel-item {
        display: inline-flex;
        align-items: center;
        height: 100%!important;
        background-color: rgba(10, 39, 55, 1);
        color: #fff;
        background-position: center center;
        background-size: cover;
    }
    .me_carousel-caption-title {
        font-weight: 800;
    }
    .me_carousel-caption-description {
        font-weight: 300;
    }
    .me_carousel-control-prev, .me_carousel-control-next {
        width: 5%;
    }
    .me_carousel-prev-icon {
        @include backgroundImage("../assets/images/prev-icon.png")
    }
    .me_carousel-next-icon {
        @include backgroundImage("../assets/images/next-icon.png")
    }

    @media (max-width: 1199px) {
        #carousel {
            height: fit-content;
        }
        .me_carousel-inner {
            height: fit-content;
        }
        .me_carousel-indicators {
            bottom: -10%;
            & li > span {
                padding-top: 5px;
                padding-bottom: 5px;
                font-size: .55rem;
                font-weight: 600;
            }
        }
        .me_carousel-item {
            height: 50%!important;
            top: -50%;
        }

        .me_carousel-caption-title {
            font-size: 95%;
            font-weight: 800;
        }
        .me_carousel-caption-description {
            font-weight: 300;
        }

        .me_carousel-control-prev, .me_carousel-control-next {
            visibility: hidden;
            width: 5%;
        }
    }
    @media (min-width: 1200px) {
        .me_carousel-inner {
            height: 100%;
        }
        .me_carousel-indicators {
            bottom: -60px;
            height: 60px;
            & li > span {
                font-weight: 600;
                font-size: 1.1rem;
            };
        }
        .me_carousel-caption-title {
            font-size: 2rem;
        }
        .me_carousel-caption-description {
            font-size: 1rem;
        }
        .me_carousel-item {
            height: 100%!important;
        }

        .me_carousel-control-prev, .me_carousel-control-next {
            visibility: visible;
            width: 5%;
        }
    }

</style>
