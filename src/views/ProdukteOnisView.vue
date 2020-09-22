<template>

    <b-row class="m-0 p-0 mb-3">
        <image-greeting-component :greeting="$ml.get('productonis')"/>

        <b-col cols="12" class="page-paddings">
            <b-row class="p-0 pt-5 pb-5 m-0">
                <b-col cols="12" xl="6" class="m-0">
                    <b-row>
                        <b-col cols="11" align-h="center" class="mt-4 mt-xl-auto pl-xl-5 mx-auto">
                            <p class="me_video-component-title text-center text-xl-left">{{$ml.get('productonisdetail.name')}}</p>
                        </b-col>
                        <b-col cols="11" align-h="center" class="pl-xl-5 mx-auto">
                            <p class="me_video-component-description text-left text-xl-left"><div class="text-left me_video-component-description" v-html="$ml.get('productonisdetail.text')"></div></p>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" xl="6" class="m-0 me_video-component-line-right">
                    <b-row>
                        <b-col cols="10" class="mx-auto d-flex align-items-center justify-content-center">
                            <img class="img-fluid" src="../assets/images/onis-diag.png" alt="">
                        </b-col>
                    </b-row>
                </b-col>

            </b-row>
        </b-col>
        <video-component :is-video="false"
                         :title="$ml.get('productonisdetail.title')"
                         :description="$ml.get('productonisdetail.description')"
                         :video-poster="$ml.get('productonisdetail.posterUrl')" />
    </b-row>
</template>

<script>
    import ImageGreetingComponent from '../components/ImageGreetingComponent';
    import TopBlockWithImageComponent from '../components/TopBlockWithImageComponent';
    import VideoComponent from "../components/VideoComponent";
    export default {
        components: {
            ImageGreetingComponent,
            TopBlockWithImageComponent,
            VideoComponent
        },
        data() {
            return {
                produktes: []
            }
        },
        beforeMount() {
            this.$axios.get('/products')
                .then((response) => {
                    this.produktes = response.data.products;
                })
                .catch(error => {
                    console.log(error.response.data.message);
                })
        }
    }
</script>

<style>
    @media (min-width: 1200px){
        .container {
            max-width: 1920px!important;
            padding-left: 0;
            padding-right: 0;
        }}

    .page-paddings {
        padding-right: 13%;
        padding-left: 13%;
    }

</style>
