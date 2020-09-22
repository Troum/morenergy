<template>
  <b-row class="m-0 p-0">
    <image-greeting-component :greeting="$ml.get('news')"/>
    <newscards-component class="mt-5" :news="news"/>
  </b-row>
</template>

<script>
import NewscardsComponent from '../components/NewscardsComponent';
import ImageGreetingComponent from '../components/ImageGreetingComponent';
export default {
  components: {
    NewscardsComponent,
    ImageGreetingComponent
  },
  data() {
    return {
      news: []
    }
  },
  mounted() {
    this.getAktuelles();
  },
  methods: {
    async getAktuelles () {
      await this.$axios.get('/v1/posts')
          .then((response) => {
            this.news = response.data.posts;
          })
    }
  }
}
</script>

<style lang="scss">
@media (min-width: 1200px){
  .container {
    max-width: 1920px!important;
    padding-left: 0;
    padding-right: 0;
  }}

.page-paddings {
  padding-right: 13%;
  padding-left: 13%;
}

</style>
