<template>
  <b-col cols="12" class="">
    <b-row class="w-100 mx-auto">
      <b-col v-for="(item, i) in displayed" cols="12" xl="4" :key="i"
             :class="{
                   'mt-3 mb-3' : true,
                    'me_news-card-component-item-edged-left-padding' : i === 0 || ((i + 1) % 2 === 0 && (i + 1) % 4 === 0),
                    'me_news-card-component-item-edged-right-padding' : ((i + 1) % 2 !== 0 && (i + 1) % 3 === 0) || ((i + 1) % 2 === 0 && (i + 1) % 3 === 0),
                    'me_news-card-component-item-center-padding' : ((i + 1) % 2 === 0 && (i + 1) % 4 !== 0 && (i + 1) % 3 !== 0) || ((i + 1) % 5 === 0),
                   }"

      >
        <template v-if="item.extension.includes('mp4')">
          <video-component :isVideo="true"
                           :videoUrl="item.link"
                           :name="item.title"
                           :video-poster="$ml.get('fontpageNews.0.posterUrl')"></video-component>
        </template>
        <template v-if="item.extension.includes('pptx')">
          <div class="d-flex justify-content-center align-items-center flex-column">
            <img src="@/assets/images/pptx.png" alt="Presentation PPTX">
            <a :href="item.link"
               :download="item.title"
               target="_blank">{{ item.title }}</a>
          </div>
        </template>
        <template v-if="item.extension.includes('pdf')">
          <div class="d-flex justify-content-center align-items-center flex-column">
            <div class="pdf-preview mb-3" :data-src="item.link"></div>
            <a :href="apiUrl + item.link"
               class="presentation_link"
               :download="item.title"
               target="_blank">{{ item.title }}</a>
          </div>
        </template>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import VideoComponent from "./VideoComponent";
import axios from 'axios'
export default {
  components: {
    VideoComponent
  },
  data() {
    return {
      presentations: [],
      pages: 0,
      perPage: 6,
      paginated: [],
      currentPage: 1
    }
  },
  mounted() {
    this.getVideos();
    setTimeout(() => {
      this.createPDFThumbnails();
    }, 1500)

  },
  methods: {
    createPDFThumbnails(){
      let pdfjsLib = window['pdfjs-dist/build/pdf'];
      if (typeof pdfjsLib === 'undefined') {
        throw Error("pdf.js is not loaded. Please include it before pdfThumbnails.js.");
      }
      // eslint-disable-next-line no-undef
      pdfjsLib.disableWorker = false;

      document.querySelectorAll('div.pdf-preview').forEach((element) => {
        const link = element.dataset.src;

        axios.get(`${process.env.VUE_APP_API_URL}/api/v1/pdf/${link}`, {
          responseType: 'arraybuffer',
        }).then(response => {
          const file = new Blob([response.data],{type: 'application/pdf'})
          pdfjsLib.getDocument(URL.createObjectURL(file)).then((pdf) => {
            pdf.getPage(1).then((page) => {
              let canvas = document.createElement("canvas");
              let viewport = page.getViewport(1.0);
              let context = canvas.getContext('2d');

              canvas.height = viewport.height;
              canvas.width = viewport.width;

              page.render({
                canvasContext: context,
                viewport: viewport
              }).then(() => {
                let img = document.createElement('img')
                img.style.maxWidth = '250px'
                img.classList.add('img-fluid')
                img.setAttribute('src', canvas.toDataURL());
                element.appendChild(img)
              });
            })
          })
        })

      });
    },
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
      await this.$axios.get('v1/presentation')
          .then((response) => {
            this.presentations = [...response.data.presentations];
          })
    }
  },
  computed: {
    displayed () {
      return this.paginatePages(this.presentations)
    },
    apiUrl () {
      return process.env.NODE_ENV === 'production' ?
          process.env.VUE_APP_API_URL + '/storage/app/public/presentations/' :
              process.env.VUE_APP_API_URL + '/presentations/';
    }
  }

}
</script>
<style>
.me-top-pad-wide {
  padding-top: 10%;
}
.presentation_link {
  font-weight: 600;
  transition: .3s ease-in-out;
  font-size: 1.13rem;
  color: rgba(0, 0, 0, .5) !important;
}

.presentation_link:hover {
  text-decoration: none !important;
  color: rgba(0, 0, 0, .8) !important;
}

</style>
