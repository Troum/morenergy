<template>
    <b-row class="m-0 p-0 mx-auto">
        <b-col cols="12" style="z-index: 1" class="me_kontakt-map">
            <div class="row p-0 m-0 me_kontakt-map-image">
                <div class="col-12 col-xl-6 m-0 p-0">
<!--                    <img src="../assets/images/map-image.jpg" class="img-fluid" alt="">-->
                </div>
                <div class="col-12 col-xl-6 m-0 pl-xl-5 ">
                    <iframe v-if="$ml.current === 'DE'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.463949944941!2d9.988366316025557!3d53.495907171198844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18e291f68f005%3A0x668416cc0733a594!2smorEnergy+GmbH!5e0!3m2!1sde!2sby!4v1560328918615!5m2!1sde!2sby"
                            width="100%" :height="mapHeight" frameborder="0" style="border:0" allowfullscreen></iframe>
                    <iframe v-if="$ml.current === 'EN'" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.463949944941!2d9.988366316025557!3d53.495907171198844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18e291f68f005%3A0x668416cc0733a594!2smorEnergy+GmbH!5e0!3m2!1sen!2sby!4v1560342039554!5m2!1sen!2sby"
                            width="100%" :height="mapHeight" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </b-col>
        <b-col cols="12" class="d-flex align-items-center me_kontakt-feedback mt-5">
            <b-row class="me_form mx-auto p-0">
                <b-col cols="11" xl="8" class="mx-auto text-center">
                    <p class="h4 text-white">{{ $ml.get('feedback').title }}</p>
                </b-col>
                <b-col cols="11" xl="8" class="mx-auto text-center">
                    <p class="h3 font-weight-bold text-white">{{ $ml.get('feedback').subtitle }}</p>
                </b-col>
                <b-col cols="12" xl="12">
                    <b-form @submit.prevent="sendFeedback">
                        <b-row class="d-flex align-items-center h-100">
                            <b-col cols="12" xl="6">
                                <b-form-group class="mt-4 mb-4 shadow" id="nameGroup">
                                    <b-input-group prepend=" ">
                                        <b-input
                                                id="name"
                                                v-model="form.name"
                                                type="text"
                                                required
                                                autocomplete="off"
                                                :placeholder="$ml.get('feedback').name"
                                        ></b-input>
                                    </b-input-group>
                                </b-form-group>
                                <b-form-group class="mt-4 mb-4 shadow" id="emailGroup">
                                    <b-input-group prepend=" ">
                                        <b-input
                                                id="email"
                                                v-model="form.email"
                                                type="email"
                                                required
                                                autocomplete="off"
                                                :placeholder="$ml.get('feedback').email"
                                        ></b-input>
                                    </b-input-group>
                                </b-form-group>
                                <b-form-group class="mt-4 mb-4 shadow" id="phoneGroup">
                                    <b-input-group prepend=" ">
                                        <b-input
                                                id="phone"
                                                v-model="form.phone"
                                                type="text"
                                                required
                                                autocomplete="off"
                                                :placeholder="$ml.get('feedback').phone"
                                        ></b-input>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" xl="6">
                                <b-form-group id="messageGroup" class="my-auto p-0 shadow">
                                    <b-textarea id="message"
                                                v-model="form.feedback"
                                                rows="6"
                                                required
                                                :placeholder="$ml.get('feedback').message"></b-textarea>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" class="text-center mt-4">
                                <b-button pill type="submit" class="pl-5 pr-5 me_feedback-send">{{ $ml.get('feedback').button }} <span></span></b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-col>
            </b-row>
        </b-col>
        <b-toast toaster="b-toaster-bottom-right" id="warning" :title="$ml.get('feedback.wait')" variant="warning" auto-hide>
            {{ $ml.get('feedback.waitMessage') }}
        </b-toast>
        <b-toast toaster="b-toaster-bottom-right" id="success" :title="$ml.get('feedback.success')" variant="success" auto-hide>
            {{ $ml.get('feedback.successMessage') }}
        </b-toast>
        <b-toast toaster="b-toaster-bottom-right" id="error" :title="$ml.get('feedback.error')" variant="danger" no-auto-hide>
            {{ $ml.get('feedback.errorMessage') }}
        </b-toast>
    </b-row>

</template>

<script>
    export default {
      metaInfo: {
        title: 'Kontakt_Morenergy',
        titleTemplate: null
      },
        data() {
            return {
                mapHeight: 320,
                form: {
                    email: null,
                    name: null,
                    phone: null,
                    feedback: null
                }
            }
        },
        methods: {
          sendFeedback() {
              this.$bvToast.show('warning');
              this.$axios.post('/v1/feedback', this.form)
                  .then(() => {
                      this.form = {
                          email: null,
                          name: null,
                          phone: null,
                          feedback: null
                      };
                      this.$bvToast.hide('warning');
                      this.$bvToast.show('success')
                  })
                  .catch(() => {
                      this.$bvToast.show('error')
                  })
          }
        },
        mounted() {
            window.innerWidth > 992 ? this.mapHeight = 500 : this.mapHeight = 260;
        }
    }
</script>

<style lang="scss">
    @media screen and (max-width: 576px){
        .me_kontakt-map-image {
           background-image: none!important;
        }
    }

    @media (min-width: 1200px){
        .container {
            max-width: 1920px!important;
            padding-left: 0;
            padding-right: 0;
        }}

    @import "../scss/mixins";
    .me_kontakt-map-image {
        @include backgroundImage('../assets/images/kontak.jpeg', 100% 50% cover);
        background-size: 50% 100%;
    }
    .form-control {
        border: none!important;
        border-radius: 0!important;
        background-clip: unset;
        &:focus {
            box-shadow: none;
            outline: none;
        }
    }

    .me_kontakt-map {
        padding: 0;
        width: 100%;
        height: auto;
    }

    .me_feedback-send {
        background-color: #0A2737;
        border: none;
        &:hover {
            cursor: pointer;
            background-color: #0A2757;
        };
        & > span:after {
            vertical-align: middle;
            content: url('../assets/images/right-arrow.png');
        }
    }

    #emailGroup .input-group-text, #nameGroup .input-group-text, #phoneGroup .input-group-text {
        background-color: #fff;
        border: none;
        border-radius: 0;
        width: 38px;
        padding-left: 6px;
        padding-right: 6px;
    }
    #emailGroup .input-group-text {
        content: url('../assets/images/email.png');
    }

    #nameGroup .input-group-text {
        content: url('../assets/images/user.png');
    }

    #phoneGroup .input-group-text {
        content: url('../assets/images/smartphone.png');
    }

    @media (max-width: 1199px) {
        .me_form {
            width: 95%;
        }

        .me_kontakt-feedback {
            height: 580px;
        }

        .me_kontakt-feedback {
            @include backgroundImage("../assets/images/feedback.png", center center, cover);
        }
    }

    @media (min-width: 1200px) {
        .me_form {
            width: 75%;
        }

        .me_kontakt-feedback {
            height: 480px;
        }
        #message {
            min-height: 162px;
        }

        .me_kontakt-feedback {
            @include backgroundImage("../assets/images/feedback.png");
        }
    }
</style>
