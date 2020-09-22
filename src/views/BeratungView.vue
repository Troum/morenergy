<template>

    <b-row class="m-0  mb-3">
        <b-col cols="12" xl="4" class="m-0 me_video-component page-paddings-left me-gray-back">
            <b-row>
                <b-col cols="11" align-h="center" class="mt-4 p-4 mt-xl-auto pl-xl-5 mx-auto">
                    <img class="img-fluid" src="../assets/images/beraman.png" >
                </b-col>
            </b-row>
        </b-col>

        <b-col cols="12" xl="8" class="m-0 me_video-component me-gray-back" align-v="center">
            <b-row>
                <b-col cols="11" align-h="center" class="mt-4 p-4 mt-xl-auto pl-xl-5 mx-auto">
                    <p class="me_video-component-title text-center text-xl-left">{{$ml.get('beratung1.pagetitle')}}</p>
                    <hr class="me_video-component-title-underline ">
                </b-col>
            </b-row>
        </b-col>


        <b-col cols="12" xl="6" class="m-0 pt-5 pb-5 page-paddings-left">
            <b-row>
                <b-col cols="11" align-h="center" class="mt-4 mt-xl-auto pl-xl-5 mx-auto">
                    <p class="me_video-component-title text-center text-xl-left">{{$ml.get('beratung1.title')}}</p>
                </b-col>
                <b-col cols="11" align-h="center" class="pl-xl-5 mx-auto">
                    <div class="me_video-component-description text-justify text-xl-left" v-html="$ml.get('beratung1.text')"></div>
                </b-col>
            </b-row>
        </b-col>

        <b-col cols="12" xl="6" class="m-0 pt-5 pb-5 page-paddings-right">
            <b-row>
                <b-col cols="11" align-h="center" class="mt-4 mt-xl-auto pl-xl-5 mx-auto">
                    <p class="me_video-component-title text-center text-xl-left">{{$ml.get('beratung1.title2')}}</p>
                </b-col>
                <b-col cols="11" align-h="center" class="pl-xl-5 mx-auto">
                    <p class="me_video-component-description text-justify text-xl-left">{{$ml.get('beratung1.text2')}}</p>
                </b-col>
            </b-row>
        </b-col>
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
    .me-gray-back {
        background: rgba(10, 39, 55, 0.07);
    }

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
    .page-paddings-left {
         padding-left: 13%;
    }
    .page-paddings-right {
         padding-right: 13%;
    }

</style>
