<template>
    <b-row class="w-100 mt-0 mb-4 mx-auto bg-white d-flex justify-content-between align-items-center page-paddings">
        <b-col :cols="partners[0].name ? 12 : 4" :xl="(12 / partners.length)"
               :class="partners[0].name ? 'p-5' : 'p-4 mx-auto'"
               v-for="(partner, i) in partners"
               :key="i">
            <b-row class="p-0 m-0">
                <b-col :cols="partner.name ? 3 : 12" xl="12" class="p-0 m-0 text-center">
                    <a v-if="partner.link" :href="partner.link" target="_blank">
                        <img :src="partner.image" :alt="partner.alt" class="img-fluid me_cooperating-component-partner-image">
                    </a>
                    <img v-if="!partner.link" :src="partner.image" :alt="partner.alt" class="img-fluid me_cooperating-component-partner-image">

                </b-col>
                <b-col v-if="partner.name" cols="9" xl="12"
                       class="pl-4 m-0 p-xl-0 mt-xl-4 d-flex justify-content-start justify-content-xl-center align-items-center me_cooperating-component-partner-name">
                    <a :href="partner.link">  {{ partner.name }}</a>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        props: {
            partners: null
        }
    }
</script>

<style lang="scss">
    .me_cooperating-component-partner-image {
        transition: .3s ease-in-out;
        width: 30%;

        &:hover {
            cursor: pointer;
            filter: drop-shadow(0 4px 2px rgba(0,0,0,0.44));
            transform: scale(1.01, 1.01);
        }
    }
    .me_cooperating-component-partner-name a{
        color: #0A2737;
        font-weight: 600;
    }

    @media (max-width: 1199px) {
        .me_cooperating-component-partner-name {
            font-weight: 800;
        }
    }
</style>
