<template>
    <b-row class="m-0 p-0 mb-3">
        <title-component class="mt-4" :title="$ml.get('impressum.title.title')"
                         :background-color="$ml.get('impressum.title.bg')"
                         :text-color="$ml.get('impressum.title.color')"/>
        <b-col class="m-0 bg-white" cols="12">
            <p class="h4 text-center mt-4 mb-4" :style="{'color' : $ml.get('impressum.title.bg', 'font-weight: 600')}">
                {{ $ml.get('impressum.content.title') }}
            </p>
            <ul class="list-unstyled text-center">
                <li class="mb-2" v-for="(item, i) in $ml.get('impressum.content.positions')" :key="i" v-html="item"></li>
            </ul>
        </b-col>
        <title-component class="mt-4" :title="$ml.get('impressum.content.second.title')"
                         :background-color="$ml.get('impressum.title.bg')"
                         :text-color="$ml.get('impressum.title.color')"/>
        <b-col class="m-0 bg-white p-xl-4" cols="12">
            <div class="mt-4 mb-4" v-for="(item, i) in $ml.get('impressum.content.second.positions')" :key="i">
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
