<template>

    <b-row class="m-0 p-0 mb-3">

        <b-col cols="12" xl="6" class="m-0 pt-5 page-paddings-left">
            <b-row>
                <b-col cols="12" align-h="center" class="mt-4 mt-xl-auto pl-xl-5 mx-auto">
                    <img class="img-fluid me_beratung-img" src="../assets/images/network.png" >
                </b-col>
                <b-col cols="12" align-h="center" class="mt-4 mt-xl-auto pl-xl-5 mx-auto">
                    <p class="me_video-component-title text-center text-xl-left pt-3">{{$ml.get('reason.subpage2.pagetitle')}}</p>
                    <hr class="me_video-component-title-underline mb-5">
                </b-col>
            </b-row>
        </b-col>

        <b-col cols="12"  class="m-0 pt-5 pb-5 page-paddings">
            <b-row>
                <b-col cols="12" align-h="center" class="mt-4 mt-xl-auto pl-xl-5 mx-auto">
                    <p class="me_video-component-title text-center text-xl-left">{{$ml.get('reason.subpage2.title1')}}</p>
                </b-col>
                <b-col cols="12" align-h="center" class="pl-xl-5 mx-auto">
                    <p class="me_video-component-description text-justify">{{$ml.get('reason.subpage2.text2')}}</p>
                </b-col>
            </b-row>
        </b-col>

        <b-col cols="12" class="m-0 pb-5 page-paddings">
            <b-row>
                <b-col cols="12" align-h="center" class="mt-4 mt-xl-auto pl-xl-5 mx-auto">
                    <p class="me_video-component-title text-center text-xl-left">{{$ml.get('reason.subpage2.title2')}}</p>
                </b-col>
                <b-col cols="12" align-h="center" class="pl-xl-5 mx-auto">
                    <p class="me_video-component-description text-justify">{{$ml.get('reason.subpage2.text2')}}</p>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="12" class="m-0 pb-5 page-paddings">
            <b-row>
                <b-col cols="12" align-h="center" class="mt-4 mt-xl-auto pl-xl-5 mx-auto">
                    <p class="me_video-component-title text-center text-xl-left">{{$ml.get('reason.subpage2.title3')}}</p>
                </b-col>
                <b-col cols="12" align-h="center" class="pl-xl-5 mx-auto">
                    <div class="me_video-component-description text-justify" v-html="$ml.get('reason.subpage2.text3')"></div>

                </b-col>
            </b-row>
        </b-col>


    </b-row>
</template>

<script>

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
    .page-paddings-right {
        padding-right: 13%;
        padding-left: 0;
    }
    .page-paddings-left {
        padding-left: 13%;
        padding-right: 0}

</style>
