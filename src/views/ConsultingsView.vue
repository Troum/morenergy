<template>
    <b-row class="m-0 p-0">
        <image-greeting-component class="me_consaltings-greeting" :greeting="$ml.get('consulting.greeting')"/>
        <title-component class="mt-5 big-screen-top-pad" :title="$ml.get('consulting.title')"
                         :background-color="$ml.get('consulting.bg')"
                         :text-color="$ml.get('consulting.color')"/>
        <b-col cols="12">
            <hr class="me_title_underline mb-3">
        </b-col>


        <b-col cols="12" xl="6" class="mt-4 mb-4 mt-xl-5 mb-xl-5 me_detailed-component-block page-paddings-left">
            <b-row class="h-100">
                <b-col cols="4" xl="3" class="d-flex h-100">
                    <img class="me_icon_consult" alt="Netzimpedanz Speziallösungen" src="../assets/images/beraman.png" >
                </b-col>
                <b-col cols="8" xl="9" class="h-100 me-consulting-pad-container">
                    <b-row class="h-100">
                        <b-col cols="11" class="mx-auto font-weight-bold me_detailed-component-title">{{$ml.get('beratung.title')}}</b-col>
                        <b-col cols="11" class="mx-auto me_detailed-component-description mt-3 mb-3 mt-xl-3 mb-xl-3">{{$ml.get('beratung.text')}}</b-col>
                        <b-col cols="11" class="mx-auto d-flex align-items-end">
                            <b-button class="me_detailed-component-button" pill @click="$router.push({name:'entwicklung' })">
                                Details
                            </b-button>
                        </b-col>
                    </b-row>
                </b-col>
                </b-row>

        </b-col>

        <b-col cols="12" xl="6" class="mt-4 mb-4 mt-xl-5 mb-xl-5 me_detailed-component-block page-paddings-right">
            <b-row class="h-100">
                <b-col cols="4" xl="3" class="d-flex h-100">
                    <img class="me_icon_consult" alt="Netzintegrationsstudien" src="../assets/images/beracnt.png" >
                </b-col>
                <b-col cols="8" xl="9" class="h-100 me-consulting-pad-container">
                    <b-row class="h-100">
                        <b-col cols="11" class="mx-auto font-weight-bold me_detailed-component-title">{{$ml.get('beratung.title1')}}</b-col>
                        <b-col cols="11" class="mx-auto me_detailed-component-description mt-3 mb-3 mt-xl-3 mb-xl-3">{{$ml.get('beratung.text1')}}</b-col>
                        <b-col cols="11" class="mx-auto d-flex align-items-end">
                            <b-button class="me_detailed-component-button" pill @click="$router.push({name:'studien' })">
                                Details
                            </b-button>
                        </b-col>
                    </b-row>
                </b-col>
               </b-row>
        </b-col>

        <b-col cols="12" xl="6" class="mt-4 mb-4 mt-xl-5 mb-xl-5 me_detailed-component-block page-paddings-left">
            <b-row class="h-100">
                <b-col cols="4" xl="3" class="d-flex h-100">
                    <img class="me_icon_consult me-simulation-icon" alt="Simulation " src="../assets/images/berasim.png" >
                </b-col>
                <b-col cols="8" xl="9" class="h-100 me-consulting-pad-container">
                    <b-row class="h-100">
                        <b-col cols="11" class="mx-auto font-weight-bold me_detailed-component-title">{{$ml.get('beratung.title2')}}</b-col>
                        <b-col cols="11" class="mx-auto me_detailed-component-description mt-3 mb-3 mt-xl-3 mb-xl-3">{{$ml.get('beratung.text2')}}</b-col>
                        <b-col cols="11" class="mx-auto d-flex align-items-end">
                            <b-button class="me_detailed-component-button" pill @click="$router.push({name:'simulation' })">
                                Details
                            </b-button>
                        </b-col>
                    </b-row>
                </b-col>
                </b-row>
        </b-col>

        <b-col cols="12" xl="6" class="mt-4 mb-4 mt-xl-5 mb-xl-5 me_detailed-component-block page-paddings-right">
            <b-row class="h-100">
                <b-col cols="4" xl="3" class="d-flex h-100">
                    <img class="me_icon_consult" alt="Power Quality von Stromnetzen" src="../assets/images/beraoil.png" >
                </b-col>
                <b-col cols="8" xl="9" class="h-100 me-consulting-pad-container">
                    <b-row class="h-100">
                        <b-col cols="11" class="mx-auto font-weight-bold me_detailed-component-title">{{$ml.get('beratung.title3')}}</b-col>
                        <b-col cols="11" class="mx-auto me_detailed-component-description mt-3 mb-3 mt-xl-3 mb-xl-3">{{$ml.get('beratung.text3')}}</b-col>
                        <b-col cols="11" class="mx-auto d-flex align-items-end">
                            <b-button class="me_detailed-component-button" pill @click="$router.push({name:'power' })">
                                Details
                            </b-button>
                        </b-col>
                    </b-row>
                </b-col>
               </b-row>
        </b-col>

        <title-component class="mt-5 pt-5 page-paddings w-100 me_grey_background"
                         :title="$ml.get('consulting.title2')"
                         :text-color="$ml.get('consulting.color')"/>

        <b-col cols="12" class="me_grey_background">
            <hr class="me_title_underline mb-3">
        </b-col>

        <b-col cols="12" class="me_video-component page-paddings me_grey_background">
            <b-row class="p-0 pt-5 pb-5 m-0">
                <b-col cols="12" xl="6" class="m-0 me_video-component-line-right">
                    <b-row>
                        <b-col cols="12" class="d-flex align-items-left me-messungen-image">
                            <img src="../assets/images/Messungen-min.jpg" alt="Power Quality Messung" class="w-100 h-100">
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" xl="6" class="m-0 me_video-component-line-left">
                    <b-row>
                        <b-col cols="12" align-h="center" class="">
                            <p class="me_video-component-description">
                                {{$ml.get('consulting.messdescription')}}
                            </p>
                        </b-col>
                        <b-col cols="11" align-h="center" class="">
                            <p class="me_video-component-info">{{$ml.get('consulting.info')}}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>

        <b-col cols="12" xl="6" class="pt-4 pb-5 me_detailed-component-block me_video-component page-paddings-left me_grey_background">
            <b-row class="h-100">
                <b-col cols="4" xl="3" class="d-flex h-100">
                    <img class="me_icon_consult" alt="DGUV V3 Messungen" src="../assets/images/messpl.png" >
                </b-col>
                <b-col cols="8" xl="9" class="h-100 me-consulting-pad-container">
                    <b-row class="h-100">
                        <b-col cols="11" class="mx-auto font-weight-bold me_detailed-component-title">{{$ml.get('beratung.title4')}}</b-col>
                        <b-col cols="11" class="mx-auto me_detailed-component-description mt-3 mb-3 mt-xl-3 mb-xl-3">{{$ml.get('beratung.text4')}}</b-col>
                        <b-col cols="11" class="mx-auto d-flex align-items-end">
                            <b-button class="me_detailed-component-button" pill @click="$router.push({name:'dguv' })">
                                Details
                            </b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

        </b-col>

        <b-col cols="12" xl="6" class="pt-4 pb-5 me_detailed-component-block me_video-component page-paddings-right me_grey_background">
            <b-row class="h-100">
                <b-col cols="4" xl="3" class="d-flex h-100">
                    <img class="me_icon_consult" alt="Netzimpedanzmessungen und Ermittlung Supraharmonische" src="../assets/images/messvolt.png" >
                </b-col>
                <b-col cols="8" xl="9" class="h-100 me-consulting-pad-container">
                    <b-row class="h-100">
                        <b-col cols="11" class="mx-auto font-weight-bold me_detailed-component-title">{{$ml.get('beratung.title5')}}</b-col>
                        <b-col cols="11" class="mx-auto me_detailed-component-description mt-3 mb-3 mt-xl-3 mb-xl-3">{{$ml.get('beratung.text5')}}</b-col>
                        <b-col cols="11" class="mx-auto d-flex align-items-end">
                            <b-button class="me_detailed-component-button" pill @click="$router.push({name:'netzimpedanzmessungen' })">
                                Details
                            </b-button>

                        </b-col>
                    </b-row>
                </b-col>
               </b-row>
        </b-col>
    </b-row>
</template>

<script>
    import ImageGreetingComponent from '../components/ImageGreetingComponent';
    import TitleComponent from '../components/TitleComponent';

    export default {
      metaInfo: {
        title: 'BeratungStromnetze',
        titleTemplate: null,
        meta: [
          { name: 'description', content: 'Wir beraten rund um Stromnetze' }
        ]
      },
        components: {
            ImageGreetingComponent,
            TitleComponent
        },
        data() {
            return {
                details: null
            }
        },
        beforeMount() {
            this.$axios.get('/consultings')
                .then(response => {
                    this.details = response.data.consultings
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
</script>

<style>
    @media screen and (max-width: 576px){
        .me-messungen-image {
            margin: auto;
            padding-bottom: 30px;
        }
        .me_video-component-description {
            text-align: justify;
        }
        .me-simulation-icon {
            width: 100px;
        }
    }

    .me_icon_consult {
        height: fit-content;
    }
    .me_grey_background {
        background: rgba(10, 39, 55, 0.07);
    }
    @media (min-width: 1200px){
        .container {
            max-width: 1920px!important;
            padding-left: 0;
            padding-right: 0;
        }
        .img-fluid {
            max-width: 100%;
            height: auto;
             /*width: 50%;*/
        }
    }

    @media (min-width: 1600px){
        .big-screen-top-pad {
            padding-top: 3%;
        }

    }

    .page-paddings {
        padding-right: 13%;
        padding-left: 13%;
    }
    .page-paddings-left {
        padding-left: 13%;
    }
    .page-paddings-right {
    padding-right:13%}

    .me_video-component {
        margin: 0;
    }
    .me_top_pad {
        padding-top: 10%;
    }
    .me_detailed-component-block {
        min-height: 35%;
    }
    .me_detailed-component-title {
        color: #0A2737;
        font-size: 1.2rem;
    }
    .me_detailed-component-description {
        color: #0A2737;
        font-weight: 300;
        font-size: 1rem;
    }
    .me_detailed-component-button {
        background: transparent;
        width: 35%;
        color: #0A2737;
        border-color: #0A2737;
        transition: .3s ease-in-out;}
    .me_detailed-component-button:hover {
        background: #0A2737;
        color: #fff;
    }


    .me_detailed-component-separator {
        position: absolute;
        top: 50%;
        right: -17.8%;
        transform: rotate(90deg);
        width: 40%;
        height: 2px;
        color: #F0EEEE;
    }
    @media (max-width: 1199px) {
        .me_detailed-component-button {
            width: 50%;
            font-size: 60%;
        }

        .me_detailed-component-title {
            font-size: 70%;
        }

        .me_detailed-component-description {
            font-size: 70%;
        }

        .me_detailed-component-border {
            height: 2px!important;
            background-color: #F0EEEE;
        }

        .me_detailed-component-bottom-line {
            display: none;
        }
        .me_detailed-component-separator {
            display: none;
        }
    }

    .me_title_underline {
        background-color: #6DC286;
        width: 160px;
        height: 4px;
        border-radius: 5.5px;
    }

    @media (max-width: 1199px) and (min-width: 577px){
        .me-consulting-pad-container{
            padding-left: 0!important;
        }
        .me_detailed-component-block {
            padding-right: 0!important;
            padding-left: 0!important;
        }
    }

</style>
