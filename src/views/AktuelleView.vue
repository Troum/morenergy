<template>
    <b-row class="m-0 mb-3 p-0 mb-xl-3">
        <image-greeting-component class="mb-0 mb-xl-auto me-aktuelle-image-container" :greeting="greeting"/>
        <b-row class="m-0 p-3 p-xl-5 bg-white">
            <b-col cols="12">
                <p class="me_aktuelle-view-title font-weight-bold">{{ $ml.current === 'DE' ? aktuelle.title : aktuelle.en_title }}</p>
            </b-col>
            <b-col cols="12 mt-2 mb-2 mt-xl-3 mb-xl-3">
                <p class="me_aktuelle-view-date">{{ aktuelle.date }}</p>
            </b-col>
            <b-col cols="12" >
                <div v-html="$ml.current === 'DE' ? aktuelle.description : aktuelle.en_description"></div>
            </b-col>
        </b-row>
    </b-row>
</template>

<script>
    import ImageGreetingComponent from '../components/ImageGreetingComponent';
    export default {
        components: {
            ImageGreetingComponent
        },
        data() {
          return {
              loader: null,
              greeting: {
                  caption: null,
                  image: null,
                  title: null
              },
              aktuelle: {
                  title: null,
                  en_title: null,
                  date: null,
                  description: null,
                  en_description: null
              },
          }
        },
        mounted() {
          this.getAktuelle(this.$route.params.slug)
        },
      methods: {
          async getAktuelle (slug) {
            await this.$axios.get(`/v1/posts/${slug}`, {params: {slug: slug}})
                .then(response => {
                  this.greeting.title = this.$options.filters.truncateHtml(response.data.post.title);
                  this.greeting.en_title = this.$options.filters.truncateHtml(response.data.post.en_description);
                  this.greeting.image = response.data.post.full_image;
                  this.aktuelle.title = response.data.post.title;
                  this.aktuelle.en_title = this.$options.filters.truncateHtml(response.data.post.title);
                  this.aktuelle.date = response.data.post.created_at;
                  this.aktuelle.description = this.$options.filters.truncateHtml(response.data.post.description);
                  this.aktuelle.en_description = this.$options.filters.truncateHtml(response.data.post.en_description);
                })
          }
      }
    }
</script>

<style lang="scss">
    @media (max-width: 1199px) {
        .me_aktuelle-view-title {
            font-size: 1.1rem;
        }
        .me_aktuelle-view-date {
            font-size: .9rem;
        }
    }
    @media (min-width: 1200px) {
        .me_aktuelle-view-title {
            font-size: 1.75rem;
        }
        .me_aktuelle-view-date {
            font-size: 1rem;
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
        }

        .me-aktuelle-image-container {
            .img-fluid {
                width: 100% !important;
            }
        }
    }
</style>
