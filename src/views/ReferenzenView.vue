<template>
    <b-row class="m-0 p-0 mb-3">

        <title-component class="mt-4" :title="$ml.get('references.content.projects.title')"
                         :background-color="$ml.get('references.styles.bg')"
                         :text-color="$ml.get('references.styles.color')"/>
        <hr class="me_title_inderline mb-5">

        <project-description-component class="mb-5 me-project-description-container"></project-description-component>

        <title-component class="mt-4" :title="$ml.get('references.content.projects.subtitle')"
                         :background-color="$ml.get('references.styles.bg')"
                         :text-color="$ml.get('references.styles.color')"/>
        <hr class="me_title_inderline">


        <b-col class="m-0 bg-white p-xl-4" cols="12">
            <div class="mt-4 mb-4">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="leistungenBeschreibung projects page-paddings">
                            <p>{{$ml.get('references.content.forschung')}}</p>
                        </div>
                    </div>
                </div>
                <div class="wrapper page-paddings text-center">
                    <div class="box" v-for="item in $ml.get('references.content.gridboxes')" :key="item.year">
                        <h3 class="year">{{item.year}}</h3>
                        <div class="description">
                            <p v-html="item.text"></p>
                            <b-button @click="$root.$emit('company-story', item)" class="me_detailed-component-button" pill>
                                Details
                            </b-button>
                        </div>
                        <div class="left-top"></div>
                        <div class="right-top"></div>
                    </div>
                </div>

            </div>
        </b-col>
    </b-row>
</template>

<script>
    import TitleComponent from '../components/TitleComponent';
    import ProjectDescriptionComponent from "../components/ProjectDescriptionComponent";
    export default {
        components: {
            ProjectDescriptionComponent,
            TitleComponent
        }
    }
</script>

<style>
    .me_title-component-title {
        font-style: normal;
        font-size: 28px!important;
        line-height: 31px;
    }
    hr {
        margin-top: 5px!important;
    }
    .wrapper {
        display: grid;
        grid-template-columns: repeat(5, minmax(187px, auto));
        grid-template-rows: 1fr;
        grid-column-gap: 28px;
    }

    .box {
        display: grid;
        grid-template-columns: 15% 1fr 15%;
        grid-template-rows: 3.5% 3.5% 90%;
        height: 250px;
    }
    .year {
        display: flex;
        justify-content: center;
        align-content: center;
        grid-row: 1/3;
        grid-column: 2/3;
        font-size: .9rem;
        font-weight: 600;
    }

    .description {
        display: grid;
        grid-template-rows: 1fr 40%;
        grid-template-columns: 1fr;
        grid-row: 3/3;
        grid-column: 1/-1;
        border-left: 1px solid #0A2737;
        border-right: 1px solid #0A2737;
        border-bottom: 1px solid #0A2737;
        color: #212529;
    }
    .description :nth-child(1) {
        align-self: center;
        padding: .7rem;
    }
    .description :nth-child(2) {
        align-self: center;
        justify-self: center;
        background: transparent;
        border: 1px solid #0A2737;
        color: #0A2737;
        min-width: 111px;
    }
    .left-top {
        grid-row: 2/3;
        grid-column: 1/2;
        border-left: 1px solid #0A2737;
        border-top: 1px solid #0A2737;
    }
    .right-top {
        grid-row: 2/3;
        grid-column: 3/3;
        border-right: 1px solid #0A2737;
        border-top: 1px solid #0A2737;
    }

    .page-paddings {
        padding-right: 13%;
        padding-left: 13%;
    }

    .me_title_inderline {
        width: 160px;
        height: 4px;
        background: #6DC286;
        border-radius: 5.5px;
    }

    @media (max-width: 576px) {
        .page-paddings {
            padding-left: 6.5%;
            padding-right: 6.5%;
        }
        .wrapper {
            grid-template-columns: auto;
        }

        .box {
            margin: 1.2rem 0 1.2rem 0;
        }
        .me-project-description-container {
            display: block;
        }
        #image-greeting {
            padding-top: 8px!important;
        }
    }
    @media (max-width: 991px) and (min-width: 577px){
        #image-greeting {
            padding-left: 0!important;
            padding-right: 0!important;
            padding-top: 16px!important;}
    }
    @media (max-width: 1199px) and (min-width: 577px){
        .wrapper {
            display: block;
        }
    }


    @media (min-width: 1200px){
        .container {
            max-width: 1920px!important;
            padding-left: 0;
            padding-right: 0;
        }}

</style>
