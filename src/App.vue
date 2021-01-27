<template>
    <div>
        <b-container class="min-vh-100">
            <header-component/>
            <transition name="fade">
                <router-view/>
            </transition>
            <footer-component/>
        </b-container>
        <b-modal id="story-modal" centered hide-footer size="xl" :title="title">{{content}}</b-modal>
        <b-modal id="banner-modal" centered hide-header size="xl" content-class="rounded-0"
                 ok-only>
          <b-row class="m-0 p-0">
            <b-col cols="12" class="m-0 p-0 text-center">
              <img src="@/assets/banner.jpg" alt="Conference Banner" class="img-fluid">
            </b-col>
          </b-row>
          <template v-slot:modal-footer>
            <b-button class="rounded-0 float-right" variant="success" @click="register">Register</b-button>
            <b-button class="rounded-0 float-right" variant="primary" @click="$bvModal.hide('banner-modal')">Skip</b-button>
          </template>
        </b-modal>
        <div>
            <b-modal id="my-modal" centered hide-footer :no-close-on-backdrop="true" title="Cookie policy">
                <div class="d-block text-center">
                    <p class="me_video-component-description ">Diese Website verwendet Cookies, um Ihre Erfahrungen zu verbessern. Wir gehen davon aus, dass dies für Sie in Ordnung ist, aber Sie können die Verwendung von Cookies ablehnen, wenn Sie dies wünschen. </p>
                </div>
                <b-button class="mt-3" variant="success" block @click="acceptCookies">Akzeptieren</b-button>
            </b-modal>
        </div>
    </div>
</template>
<script>

    import HeaderComponent from './components/HeaderComponent';
    import FooterComponent from './components/FooterComponent';
    export default {
        metaInfo: {
            title: 'Hauptseite_morEnergy',
            titleTemplate: null,
          meta: [
            { name: 'description', content: 'Dies ist die Hauptseite von morEnegy' }
          ]
        },
        components: {
            HeaderComponent,
            FooterComponent
        },
        data() {
            return {
                title: '',
                content: ''
            }
        },
        mounted() {
            document.getElementById("Startseite").addEventListener("click", function() {
                gtag('event', 'click', {
                    'event_category': 'Menu click Startseite',
                    'event_label': 'Startseite'
                });
            });

            document.getElementById("Dienstleistungen").addEventListener("click", function() {
                gtag('event', 'click', {
                    'event_category': 'Menu click Dienstleistungen',
                    'event_label': 'Dienstleistungen'
                });
            });

            document.getElementById("Produkte").addEventListener("click", function() {
                gtag('event', 'click', {
                    'event_category': 'Menu click Produkte',
                    'event_label': 'Produkte'
                });
            });

            document.getElementById("Referenzen").addEventListener("click", function() {
                gtag('event', 'click', {
                    'event_category': 'Menu click Referenzen',
                    'event_label': 'Referenzen'
                });
            });

            document.getElementById("Team morEnergy").addEventListener("click", function() {
                gtag('event', 'click', {
                    'event_category': 'Menu click Team morEnergy',
                    'event_label': 'Team morEnergy'
                });
            });

            document.getElementById("Aktuelles").addEventListener("click", function() {
                gtag('event', 'click', {
                    'event_category': 'Menu click Aktuelles',
                    'event_label': 'Aktuelles'
                });
            });

            document.getElementById("Videos").addEventListener("click", function() {
                gtag('event', 'click', {
                    'event_category': 'Menu click Videos',
                    'event_label': 'Videos'
                });
            });

            document.getElementById("Kontakt").addEventListener("click", function() {
                gtag('event', 'click', {
                    'event_category': 'Menu click Kontakt',
                    'event_label': 'Kontakt'
                });
            });


            this.$root.$on('company-story', (story) => {
              this.title = story.year;
              this.content = story.modal;
              this.$bvModal.show('story-modal')
          });
            if ( !this.$cookies.isKey('_accepted')){
                this.showModal();
            } else if (this.$cookies.get('_accepted')) {
                return;
            } else {
                this.showModal();
            }
        },
        methods: {
            showModal() {
                this.$bvModal.show('my-modal')
            },
            acceptCookies() {
                this.$cookies.set('_accepted', true);
                this.$bvModal.hide('my-modal')
            },
            register() {
              window.open('https://www.netzimpedanz.com/event-details/treffen-interessenverband-netzimpedanz/form', '_blank')
            }
    }}
</script>
<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

</style>
