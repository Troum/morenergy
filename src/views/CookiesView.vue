<template>
    <b-row class="m-0 p-0 mb-3">

        <title-component class="mt-4" :title="$ml.get('cookies.title')"
                         :background-color="$ml.get('impressum.title.bg')"
                         :text-color="$ml.get('impressum.title.color')"/>
        <b-col class="m-0 bg-white p-xl-4" cols="12">
            <div class="mt-4 mb-4" v-for="(item, i) in $ml.get('cookies.positions')" :key="i">
                <p class="font-weight-bolder" :style="{'color' : $ml.get('impressum.title.bg')}">{{ item.title }}</p>
                <p v-html="item.description"></p>
            </div>
        </b-col>
    </b-row>
</template>

<script>
    import TitleComponent from '../components/TitleComponent';
    export default {
        components: {
            TitleComponent
        }
    }
</script>

<style scoped>


</style>
