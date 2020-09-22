<template>
    <b-row class="m-0 pr-0 pl-0 pb-5 mb-3">
        <image-greeting-component :greeting="$ml.get('products')"/>
        <b-col cols="12" class="page-paddings me_top-block-with-image-component m-0 big-screen-top-pad">
            <b-row class="pt-5" >
                <b-col cols="11" align-h="center" class="mx-auto ">
                    <p class="me_top-block-produkt-title">ONIS-690V</p>
                    <hr class="me_top-block-with-image-component-title-underline mb-3">
                </b-col>

                <b-col cols="12" xl="6" class="m-0 d-flex align-items-center me_top-block-with-image-component-line-right">
                    <b-row class="mx-auto p-0">
                        <b-col cols="12" xl="10" class="mx-auto text-center">
                         <a href="/produkte/onis">
                            <img src="../assets/images/onis.png" alt="" class="me_top-block-with-image-image">
                         </a>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" xl="6" class="m-0 me_top-block-with-image-component-line-left">
                    <b-row>

                        <b-col cols="11" align-h="center" class="mx-auto pl-xl-5">
                            <p class="me_top-block-description-product">{{$ml.get('products.caption')}}</p>
                            <b-button class="me_detailed-component-button" pill @click="$router.push({name:'produkt.onis' })">Details</b-button>
                        </b-col>
                        <b-col cols="11" align-h="center" class="mx-auto pl-xl-5">
                            <p class="me_top-block-with-image-component-info"></p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>


        <b-col cols="12" class="page-paddings me_top-block-with-image-component m-0 pt-5">
            <b-row class="" >
                <b-col cols="11" align-h="center" class="mx-auto">
                    <p class="me_top-block-produkt-title">MoMe - Für das Netz 4.0</p>
                    <hr class="me_top-block-with-image-component-title-underline mb-3">
                </b-col>

                <b-col cols="12" xl="6" class="m-0 d-flex align-items-center me_top-block-with-image-component-line-right">
                    <b-row class="p-0 mx-auto">
                        <b-col cols="12" xl="10" class="mx-auto text-center">
                            <a href="/produkte/mome">
                            <img src="../assets/images/MoMeshad.png" alt="" class="me_top-block-with-image-image">
                            </a>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" xl="6" class="m-0 me_top-block-with-image-component-line-left pt-5">
                    <b-row>

                        <b-col cols="11" align-h="center" class="mx-auto pl-xl-5">
                            <p class="me_top-block-description-product">
                                {{$ml.get('productmome.caption')}}
                               </p>
                            <b-button class="me_detailed-component-button" pill @click="$router.push({name:'produkt.mome' })">Details</b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
    import ImageGreetingComponent from '../components/ImageGreetingComponent';
    import TopBlockWithImageComponent from '../components/TopBlockWithImageComponent';
    export default {
        components: {
            ImageGreetingComponent,
            TopBlockWithImageComponent
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
    .me_pad_top {
        padding-top: 10%;
    }
    .me_top-block-produkt-title {
        font-weight: bold;
        font-size: 28px;
        text-align: center;
    }
    .me_top-block-description-product {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 28px;
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
    @media screen and (max-width: 576px){
        .me_top-block-with-image-image {
            max-width: 100%;
        }
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
        }}

    @media (min-width: 1600px){
        .big-screen-top-pad {
            padding-top: 10%;
        }
    }

    .page-paddings {
        padding-right: 13%;
        padding-left: 13%;
    }
    .page-paddings-right {
        padding-right: 13%;
    }
    .page-paddings-left {
        padding-left: 13%; }
</style>
