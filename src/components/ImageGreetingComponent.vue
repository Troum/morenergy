<template>
    <b-row class="w-100 mx-auto p-0">
        <b-col cols="12" id="image-greeting" class="me_greeting-component-container">
            <b-row class="m-0 p-0 d-flex position-relative">
                <b-col cols="12" class="p-0 m-0 ">
                    <img class="me_greeting-image img-fluid w-sm-100 w-md-100 w-xl-50 w-lg-100" :src="greeting.image" :alt="greeting.caption">
                </b-col>
                <b-col v-if="$route.name !== 'aktuelle'" offset-xl="6" cols="12" xl="6" class="me_greeting-component-caption-container">
                    <b-row>
                        <b-col cols="11" xl="10" class="mx-auto">
                            <p class="me_greeting-component-caption-title pt-2">{{ greeting.title }}</p>
                        </b-col>
                        <b-col cols="11" xl="10" class="mx-auto">
                            <p class="me_greeting-component-caption-description" v-html="greeting.caption"></p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>

    export default {

        props: {
            greeting: null
        }
    }
</script>

<style lang="scss">
    .me_greeting-component-caption-title .tui-editor-contents p, .me_greeting-component-caption-description .tui-editor-contents p {
        color: #fff!important;
    }
    .me_greeting-component-caption-container {
        display: inline-flex;
        height: 100%!important;
        align-items: center;
        background-color: rgba(10, 39, 55, 0.95);
    }
    .me_greeting-component-caption-title {
        font-weight: 400;
        color: #fff;
    }
    .me_greeting-component-caption-description {
        font-weight: 300;
        color: #fff;
    }
    @media (max-width: 1199px) {
        .me_greeting-component-container {
            padding: 0;
        }
        .me_greeting-component-caption-title, .me_greeting-component-caption-title .tui-editor-contents p {
            font-size: 80%;
        }
        .me_greeting-component-caption-description, .me_greeting-component-caption-description .tui-editor-contents p {
            font-size: 70%;
        }

        .me_greeting-component-caption-title .tui-editor-contents p, .me_greeting-component-caption-description .tui-editor-contents p {
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
        .me_greeting-component-caption-description, .me_greeting-component-caption-description .tui-editor-contents p {
            font-size: 1rem;
        }

    }
</style>
