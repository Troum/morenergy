<template>
  <b-row class="m-0 p-0">

    <slider-component :slides="$ml.get('slider')"/>
    <video-component class="pt-5 pb-5 me-gray-back"
                     :is-video="true"
                     :title="$ml.get('fontpageNews.0.title')"
                     :description="$ml.get('fontpageNews.0.description')"
                     :videoUrl="$ml.get('fontpageNews.0.videoUrl')"
                     :video-poster="$ml.get('fontpageNews.0.posterUrl')" />
    <title-component :hr="true" :title="$ml.get('fontpageNews.2.title')"
                     :background-color="$ml.get('reason.title.bg')"
                     :text-color="$ml.get('reason.title.color')"/>
    <top-block-with-image-component :data="info"/>
    <title-component :title="$ml.get('reason.title.title')"
                     :background-color="$ml.get('reason.title.bg')"
                     :text-color="$ml.get('reason.title.color')"/>
    <top-block-with-image-component :data="produktes"/>
    <cooperating-component class="me-reason-npcontainer" :partners="$ml.get('reason.points')"/>
    <video-component class="pt-5 pb-5 me_mome-container"
                     :is-video="false"
                     :title="$ml.get('fontpageNews.1.title')"
                     :description="$ml.get('fontpageNews.1.description')"
                     :video-poster="$ml.get('fontpageNews.1.posterUrl')" />
    <image-and-description-component class="pt-5 pb-5"
                                     :title="$ml.get('team.title')"
                                     :image-src="$ml.get('team.image')"
                                     :description="$ml.get('team.description')"
                                     :button-text="$ml.get('team.button')"
                                     :link="$ml.get('team.link')"/>
    <title-component :title="$ml.get('partners.title')"
                     :background-color="$ml.get('partners.bg')"
                     :text-color="$ml.get('partners.color')"/>
    <b-col cols="12" class="">
      <hr class="me_title_underline mb-3">
    </b-col>
    <cooperating-component class="me_partners-main" :partners="partners"/>
  </b-row>
</template>

<script>
import SliderComponent from '../components/SliderComponent';
import TitleComponent from '../components/TitleComponent';
import VideoComponent from '../components/VideoComponent';

import ImageAndDescriptionComponent from '../components/ImageAndDescriptionComponent';
import CooperatingComponent from '../components/CooperatingComponent';
import TopBlockWithImageComponent from "../components/TopBlockWithImageComponent";
export default {
  components: {
    SliderComponent,
    TitleComponent,
    VideoComponent,

    ImageAndDescriptionComponent,
    CooperatingComponent,
    TopBlockWithImageComponent
  },
  data() {
    return {
      details: null,
      innerImage: 'me_carousel-inner-homepage',
      produktes: [],
      partners: [
        {
          title: 'Astrol',
          alt: 'Astrol',
          image: require('../assets/images/astrol.png')
        },
        {
          title: 'Renewable Energy Hamburg',
          alt: 'Renewable Energy Hamburg',
          image: require('../assets/images/member.png')
        },
        {
          title: 'HSU',
          alt: 'HSU',
          image: require('../assets/images/HSU.png')
        },
        {
          title: 'Bild',
          alt: 'Bild',
          image: require('../assets/images/Bild.png')
        },
        {
          title: '8.2.group',
          alt: '8.2.group',
          image: require('../assets/images/8_2_group.png')
        }
      ]
    }
  },
  beforeMount() {
    this.$axios.get('/consultings')
        .then(response => {
          this.details = response.data.consultings
        })
        .catch(error => {
          console.log(error);
        });
    this.$axios.get('/products')
        .then((response) => {
          response.data.products.filter((item, key) => {
            key === 0 ? this.produktes.push(item) : null;
          });
        })
        .catch(error => {
          console.log(error.response.data.message);
        })


  },
  computed: {
    info () {

      return [
        {
          description: this.$ml.get('fontpageNews.2.description'),
          en_description: 'morEnergy originated from the network impedance research. As a Hamburg based company we want to offer our technology to the world market to support decentralized power generation. With our patented Online Network Impedance Spectrometer ONIS high-frequency power quality measurements can be performed. Our speciality is network impedance measurement for the detection of dangerous resonances up to 50 kHz in the power grid. With this solution we stand out from the competition and can detect problems before they occur. We offer on-site measurements to identify weak points and, as experts, we can show you proposed solutions<p><strong>Please contact us by phone for more information.</strong></p>',
          image: this.$ml.get('fontpageNews.2.posterUrl'),
        }
      ]
    }
  }
}
// beforeUpdate() {
//     alert('Diese Website verwendet Cookies, um Ihre Erfahrungen zu verbessern. Wir gehen davon aus, dass dies für Sie in Ordnung ist, aber Sie können die Verwendung von Cookies ablehnen, wenn Sie dies wünschen.');
// }

</script>

<style>
.me-gray-back {
  background: rgba(10, 39, 55, 0.07);
}
.me_title_underline {
  background-color: #6DC286;
  width: 160px;
  height: 4px;
  border-radius: 5.5px;
}
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
.page-paddings-right {
  padding-right: 13%;
}
.page-paddings-left {
  padding-left: 13%;
}
</style>
