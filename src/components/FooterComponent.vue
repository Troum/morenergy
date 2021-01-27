<template>
    <b-row class="w-100 pt-5 me_footer mx-auto page-paddings">
        <b-col cols="3" xl="4">
            <b-row>
                <b-col cols="12">
                    <img src="../assets/images/whitelogo.png" alt="MorEnergy" class="footer-logo img-fluid">
                </b-col>
                <b-col cols="12" class="mt-1 mt-xl-3 text-left">
                    <a v-for="(item, i) in social" :href="item.link" :key="i" class="pl-1 mx-auto">
                        <img :alt="item.alt" :src="item.icon" class="d-inline-block mr-xl-4 me_social-icon">
                    </a>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="3" xl="4">
            <p class="h5 font-weight-bold">
                {{ $ml.get('footer.title') }}
            </p>
            <ul class="list-unstyled">
                <li class="nav-item" v-for="(item, i) in $ml.get('footer.menu')" :key="i">
                    <router-link :to="item.link" class="nav-link pl-0 font-weight-light text-white">{{ item.title }}</router-link>
                </li>
            </ul>
        </b-col>
        <b-col cols="5" xl="4" class="offset-1 offset-xl-0">
            <p class="h5 font-weight-bold">{{ $ml.get('footer.contacts.title') }}</p>
            <p class="h6 mt-4">{{ $ml.get('footer.contacts.subtitle') }}</p>
            <ul class="list-unstyled mt-4">
                <li class="nav-item mt-3" v-for="(item, i) in $ml.get('footer.contacts.menu')" :key="i">
                    <b-row>
                        <b-col cols="1" xl="2">
                            <img alt="" :src="item.icon" class="d-inline-block mr-2 me_contact-item">
                        </b-col>
                        <b-col cols="9" xl="10">
                            <div v-html="item.text"></div>
                        </b-col>
                    </b-row>
                </li>
            </ul>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        data() {
            return {
                social: [
                    {
                        icon: require('../assets/images/linkedin.png'),
                        link: 'https://ie.linkedin.com/company/morenergy-gmbh',
                        alt: 'morEnergy LinkedIn'
                    },
                    {
                        icon: require('../assets/images/instagram.png'),
                        link: 'https://www.instagram.com/morenergy_gmbh',
                        alt: 'morEnergy Instagram'
                    },
                    {
                        icon: require('../assets/images/facebook.png'),
                        link: 'https://www.facebook.com/morenergy.hamburg/',
                        alt: 'morEnergy Facebook'
                    },
                    {
                        icon: require('../assets/images/youtube.png'),
                        link: 'https://www.youtube.com/channel/UC9iz9AXsOSdEXr0X3IKCjRg',
                        alt: 'morEnergy YouTube'
                    }
                ],
            }
        }
    }
</script>

<style lang="scss">
    .footer-logo {
        max-width: 60% !important;
    }
    .me_footer {
        background-color: #0A2737;
        color: white;
    }
    .me_footer a {
        &:hover {
            text-decoration: none;
        }
    }

    @media (max-width: 1199px) {
        .me_social-icon {
            width: 14px;
            height: 14px;
            margin: 0 2px 0 2px;
        }

        .me_contact-item {
            width: 10px;
            height: 10px;
        }
        .h5 {
            font-size: .95rem!important;
        }
        .h6 {
            font-size: .65rem!important;
        }

        .me_footer li {
            font-size: 53%;
        }
    }
</style>
