<template>
    <b-row class="m-0 p-0 mb-3">
        <image-greeting-component class="mb-5" :greeting="$ml.get('jobs.presentations')"/>
        <presentations-component class="pb-5 me-videos-container"/>
    </b-row>
</template>

<script>
    import ImageGreetingComponent from '../components/ImageGreetingComponent';
    import PresentationsComponent from '../components/PresentationsComponent';

    export default {
        components: {
            ImageGreetingComponent,
            PresentationsComponent
        }
    }
</script>

<style>
    @media screen and (max-width: 576px){
        .me-videos-container {

        }
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
    .page-paddings-right {
        padding-right: 13%;
    }
    .page-paddings-left {
        padding-left: 13%;
    }
    .me-video-name {
        text-align: center;
    }

</style>
