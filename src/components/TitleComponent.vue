<template>
    <b-row class="m-0 w-100 page-paddings">
        <b-col :cols="$route.name === 'consulting' || $route.name === 'produkt' || $route.name === 'impressum' ? 12 : 10" :xl="$route.name === 'consulting' || $route.name === 'produkt' ? 12 : 6" class="d-flex justify-content-center align-items-center mx-auto p-2" :style="{'background-color': backgroundColor}">
            <p class="text-center me_title-component-title m-auto" :style="{'color' : textColor}">{{ title }}</p>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        props: {
            backgroundColor: null,
            textColor: null,
            title: null
        }
    }
</script>

<style lang="scss">
    .me_title-component-title {
        font-weight: 600;
    }

    @media (max-width: 1199px) {
        .me_title-component-title {
            font-size: 1rem;
        }
    }
    @media (min-width: 1200px) {
        .me_title-component-title {
            font-size: 1.75rem;
        }
    }
</style>
