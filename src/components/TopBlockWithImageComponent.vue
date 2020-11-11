<template>
    <b-col cols="12" class="page-paddings me_top-block-with-image-component m-0">
        <b-row :class="{'p-0 pt-5 pb-5 bg-white mw-100 mx-auto' : true, 'me_top-block-with-image-component-product-row' : $route.name === 'produkt.onis'}" v-for="(item, i) in data" :key="i" @click="toProduct(item.slug)" >

            <b-col cols="11" align-h="center" class="mx-auto">
                <p class="me_top-block-with-image-component-title">{{ $ml.current === 'DE' ? item.name : item.en_name }}</p>
                <hr v-if="item.name" class="me_top-block-with-image-component-title-underline mb-3">
            </b-col>

            <b-col cols="12" xl="6" class="m-0 d-flex align-items-center me_top-block-with-image-component-line-right">
                <b-row class="m-0 p-0 w-100">
                    <b-col cols="12" class="mx-auto text-center">
                        <img :src="item.image" alt="" class="img-fluid me_top-block-with-image-image">
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" xl="6" class="m-0 me_top-block-with-image-component-line-left">
                <b-row>

                    <b-col cols="11" align-h="center" class="mx-auto pl-xl-5">
                        <p class="me_top-block-with-image-component-description">
                          <tui-editor-viewer :value="$ml.current === 'DE' ? item.description : item.en_description"/></p>
                    </b-col>
                    <b-col cols="11" align-h="center" class="mx-auto pl-xl-5">
                        <p class="me_top-block-with-image-component-info">{{ $ml.current === 'DE' ? item.info : item.en_info }}</p>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    import TuiEditorViewer from "@toast-ui/vue-editor/src/Viewer";
    export default {
        components: {TuiEditorViewer},
        props: {
            data: null
        },
        methods: {
            toProduct(slug) {
                this.$router.push({name: 'produkt.onis', params: {slug: slug}});
            }
        }
    }
</script>

<style lang="scss">

    .me_top-block-with-image-component-product-row {
        transition: .3s ease-in-out;
        &:hover {
            cursor: pointer;

        }
    }

    .me_top-block-with-image-component {
        margin: 80px 0 20px 0;
    }
    .me_top-block-with-image-component-title {
        font-size: 1.3rem;
        font-weight: 800;
        color: #0A2737;
        text-align: center;
    }
    .me_top-block-with-image-component-description {
        font-size: 0.9rem;
        font-weight: 300;
        color: #0A2737;
    }
    .me_top-block-with-image-component-info {
        font-size: 0.9rem;
        font-weight: 600;
        color: #0A2737;
    }
    .me_top-block-with-image-component-title-underline {
        background-color: #6DC286;
        border-radius: 5.5px;
        width: 160px;
        height: 4px;
        margin: auto;
    }
    .me_top-block-with-image-image {
        cursor: pointer;
    }
    @media (max-width: 1199px) {
        .me_top-block-with-image-component-title {
            font-size: .8em;
            text-align: center;
        }
        .me_top-block-with-image-component-description {
            text-align: justify;
        }
    }
    @media (min-width: 1500px) {
        .me_top-block-with-image-component-line-left {
            padding-top: 6%!important;
        }
    }
</style>
