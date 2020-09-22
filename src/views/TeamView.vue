<template>
    <b-row class="m-0 p-0 mb-3">
        <image-greeting-component class="me-team-greeting mb-5" :greeting="isMobile ? $ml.get('teamView.greetingMobile') : $ml.get('teamView.greeting')"/>
        <title-component class="mt-5" :title="$ml.get('teamView.title.title')"
                         :background-color="$ml.get('teamView.title.bg')"
                         :text-color="$ml.get('teamView.title.color')"/>
        <teamscards-component class="page-paddings" :teams="teams"/>

        <title-component v-if="mentors.length > 0" class="mt-5" :title="$ml.get('teamView.title.mentor')"
                         :background-color="$ml.get('teamView.title.bg')"
                         :text-color="$ml.get('teamView.title.color')"/>
        <mentors-cards-component v-if="mentors.length > 0" class="page-paddings" :mentors="mentors"/>

    </b-row>
</template>

<script>
    import ImageGreetingComponent from '../components/ImageGreetingComponent';
    import TitleComponent from '../components/TitleComponent';
    import TeamscardsComponent from "../components/TeamscardsComponent";
    import MentorsCardsComponent from "../components/MentorsCardsComponent";
    export default {
        components: {
            TeamscardsComponent,
            ImageGreetingComponent,
            TitleComponent,
            MentorsCardsComponent
        },
        data() {
            return {
                teams: [],
                mentors: [],
                isMobile: false
            }
        },
        beforeMount() {
            if (window.innerWidth <= 992 ) {
                this.isMobile = true;
            }
            this.$axios.get('/teams')
                .then((response) => {
                    this.teams = response.data.teams;
                    this.mentors = response.data.mentors;
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error.response.data.message);
                })
        }
    }
</script>

<style>
    .me-top-pad-wide {
        padding-top: 10%;
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
    @media (min-width: 1600px) {

    }
</style>
