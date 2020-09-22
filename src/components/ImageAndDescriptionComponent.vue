<template>
    <b-row class="mw-100 mx-auto page-paddings mb-4">
        <b-col cols="12" xl="6" class="p-4 me_image-and-description-component-block order-1 order-xl-0">
            <b-row>
                <b-col cols="11" class="mx-auto">
                    <p class="me_image-and-description-component-title">{{ title }}</p>
                    <hr class="me_image-and-description-component-title-underline">
                </b-col>
                <b-col cols="11" class="mx-auto mt-3">
                    <p class="me_image-and-description-component-description">{{ description }}</p>
                </b-col>
                <b-col cols="11" class="mx-auto mt-3 text-center text-xl-left">
                    <b-button pill class="me_image-and-description-component-button pl-2 pr-2">
                        <router-link :to="link">{{ buttonText }}</router-link>
                    </b-button>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="12" xl="6" class="p-0 order-0 order-xl-1">
            <img :src="imageSrc" alt="" class="img-fluid">
        </b-col>
    </b-row>
</template>

<script>
    export default {
        props: {
            title: null,
            description: null,
            imageSrc: null,
            link: null,
            buttonText: null
        }
    }
</script>

<style lang="scss">
    .me_image-and-description-component-block {
        display: flex;
        align-items: center;
        background-color: #0A2737;
    }
    .me_image-and-description-component-title {
        font-weight: 600;
        font-size: 1.6rem;
        color: #fff;
    }
    .me_image-and-description-component-title-underline {
        background-color: #fff;
        border-radius: 5.5px;
        width: 80px;
        height: 5px;
    }
    .me_image-and-description-component-description {
        font-weight: 300;
        color: #fff;
        font-size: 0.8rem;
        line-height: 1.3rem;
    }
    .me_image-and-description-component-button {
        background-color: #ffffff;
        color: #0A2737;
        font-weight: 600;
        transition: .3s ease-in-out;
        & > a {
            color: inherit!important;
            &:hover {
                text-decoration: none!important;
                color: inherit!important;
            }
        }
    }
    @media (max-width: 1199px) {
        .me_image-and-description-component-title {
            text-align: center;
        }

        .me_image-and-description-component-description {
            font-size: 90%;
            text-align: justify;
        }

        .me_image-and-description-component-button {
            width: 75%!important;
        }
    }
    @media (min-width: 1200px) {

        .me_image-and-description-component-description {
            text-align: left;
        }

        .me_image-and-description-component-title-underline {
            margin-left: 0;
        }

        .me_image-and-description-component-title {
            text-align: left;
        }

        .me_image-and-description-component-button {
            width: 50%!important;
        }
    }
</style>
