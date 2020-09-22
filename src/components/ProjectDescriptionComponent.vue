<template>
    <b-row class="w-100 mx-auto page-paddings">

        <b-col id="image-greeting" class="col-sm-12 col-lg-4 pr-sm-0 pr-md-0 pr-lg-1 pr-xl-1">
            <b-row class="m-0 p-0 d-flex position-relative">
                <b-col cols="12" class="p-0 m-0">
                    <img class="img-contento-top" src="../assets/images/contento1.png" alt="">
                </b-col>
                <b-col offset-xl="6" cols="12" xl="6" class="me_greeting-component-caption-container">
                    <b-row>
                        <b-col cols="11" xl="10" class="mx-auto">
                            <p class="me_greeting-component-caption-project pt-2">{{$ml.get('references.content.toptext.text')}}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>

        <b-col id="image-greeting" class="col-sm-12 col-lg-4 pl-sm-0 pl-md-0 pl-lg-2 pl-xl-2  pr-sm-0 pr-md-0 pr-lg-2 pr-xl-2">
            <b-row class="m-0 p-0 d-flex position-relative">
                <b-col cols="12" class="p-0 m-0">
                    <img class="img-contento-top" src="../assets/images/contento2.png" alt="">
                </b-col>
                <b-col offset-xl="6" cols="12" xl="6" class="me_greeting-component-caption-container">
                    <b-row>
                        <b-col cols="11" xl="10" class="mx-auto">
                            <p class="me_greeting-component-caption-project pt-2">{{$ml.get('references.content.toptext.text2')}}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>

        <b-col id="image-greeting" class="col-sm-12 col-lg-4 pl-sm-0 pl-md-0 pl-lg-1 pl-xl-1">
            <b-row class="m-0 p-0 d-flex position-relative">
                <b-col cols="12" class="p-0 m-0">
                    <img class="img-contento-top" src="../assets/images/contento3.png" alt="">
                </b-col>
                <b-col offset-xl="6" cols="12" xl="6" class="me_greeting-component-caption-container">
                    <b-row>
                        <b-col cols="11" xl="10" class="mx-auto">
                            <p class="me_greeting-component-caption-project pt-2">{{$ml.get('references.content.toptext.text3')}}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>


        <b-col id="image-greeting" class="pt-4 col-sm-12 col-lg-6 pr-sm-0 pr-md-0 pr-lg-2 pr-xl-2">
            <b-row class="m-0 p-0 d-flex position-relative">
                <b-col cols="12" class="p-0 m-0">
                    <img class="img-contento-bot" src="../assets/images/contento4.png" alt="">
                </b-col>
                <b-col offset-xl="4" cols="12" xl="8" class="me_greeting-component-caption-container">
                    <b-row>
                        <b-col cols="11" xl="10" class="mx-auto">
                            <p class="me_greeting-component-caption-project pt-2">{{$ml.get('references.content.toptext.text4')}}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>

        <b-col  id="image-greeting" class="col-sm-12 col-lg-6 pt-4 pl-sm-0 pl-md-0 pl-lg-2 pl-xl-2">
            <b-row class="m-0 p-0 d-flex position-relative">
                <b-col cols="12" class="p-0 m-0">
                    <img class="img-contento-bot" src="../assets/images/contento5.png" alt="">
                </b-col>
                <b-col offset-xl="4" cols="12" xl="8" class="me_greeting-component-caption-container">
                    <b-row>
                        <b-col cols="11" xl="10" class="mx-auto">
                            <p class="me_greeting-component-caption-project pt-2">{{$ml.get('references.content.toptext.text5')}}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
    import TuiEditorViewer from "@toast-ui/vue-editor/src/Viewer";
    export default {
        components: {TuiEditorViewer},
        props: {
            greeting: null
        }
    }
</script>

<style lang="scss">
    .me_greeting-component-caption-project {
        font-size: 0.75rem!important;
    }
    .img-contento-top {
        width: 50%;
    }
    .img-contento-bot {
        width: 34%;
    }

    .me_greeting-component-caption-title .tui-editor-contents p, .me_greeting-component-caption-project .tui-editor-contents p {
        color: #fff!important;
    }
    .me_greeting-component-caption-container {
        display: inline-flex;
        height: 100%!important;
        align-items: center;
        background-color: rgba(10, 39, 55, 0.95);
    }
    .me_greeting-component-caption-title {
        font-weight: 800;
        color: #fff;
    }
    .me_greeting-component-caption-project {
        font-weight: 300;
        color: #fff;
    }
    @media (max-width: 1199px) {

        .img-contento-top {
            width: 100%;
        }
        .img-contento-bot {
            width: 100%;
        }
        .me_greeting-component-container {
            padding: 0;
        }
        .me_greeting-component-caption-title, .me_greeting-component-caption-title .tui-editor-contents p {
            font-size: 80%;
        }
        .me_greeting-component-caption-project, .me_greeting-component-caption-project .tui-editor-contents p {
            font-size: 70%;
        }

        .me_greeting-component-caption-title .tui-editor-contents p, .me_greeting-component-caption-project .tui-editor-contents p {
            color: #fff;
        }
    }
    @media (min-width: 1200px) {
        .me_greeting-component-caption-container {
            position: absolute;
        }
        .me_greeting-component-container {
            padding: 0;
        }

        .me_greeting-component-caption-title, .me_greeting-component-caption-title .tui-editor-contents p {
            font-size: 2rem;
        }

    }
</style>
