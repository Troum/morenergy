<template>
    <b-col cols="12" class="">
        <b-row class="w-100 mx-auto">
            <b-col v-for="(item, i) in displayed" cols="12" xl="6" :key="i"
                   :class="{
                   'mt-3 mb-3' : true,
                    'me_news-card-component-item-edged-left-padding' : i === 0 || ((i + 1) % 2 === 0 && (i + 1) % 4 === 0),
                    'me_news-card-component-item-edged-right-padding' : ((i + 1) % 2 !== 0 && (i + 1) % 3 === 0) || ((i + 1) % 2 === 0 && (i + 1) % 3 === 0),
                    'me_news-card-component-item-center-padding' : ((i + 1) % 2 === 0 && (i + 1) % 4 !== 0 && (i + 1) % 3 !== 0) || ((i + 1) % 5 === 0),
                   }"

            >
                <video-component :isVideo="true" :videoUrl="item.slug" :name="item.name" :video-poster="$ml.get('fontpageNews.0.posterUrl')"></video-component>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
    import VideoComponent from "./VideoComponent";
    export default {
        components: {
          VideoComponent
        },
        data() {
          return {
              videos: [],
              pages: 0,
              perPage: 6,
              paginated: [],
              currentPage: 1
          }
        },
        mounted() {
            this.getVideos();
        },
        methods: {
            paginatePages(pages) {
                for (let i = 0; i < pages.length; i = i + this.perPage) {
                    this.paginated[this.pages] = pages.slice(
                        i,
                        i + this.perPage
                    );
                    this.pages++;
                }
                return this.paginated[this.currentPage - 1];
            },
            async getVideos () {
              await this.$axios.get('v1/videos')
                  .then((response) => {
                    this.videos = [...response.data.videos];
                  })
            }
        },
        computed: {
            displayed () {
                return this.paginatePages(this.videos)
            }
        }

    }
</script>
<style>
    .me-top-pad-wide {
        padding-top: 10%;
    }

</style>
