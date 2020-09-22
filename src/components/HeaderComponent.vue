<template>
    <div>
        <b-navbar toggleable="xl" type="light" class="bg-white me_header-component page-paddings">
            <b-navbar-brand>
                <router-link to="/"><img class="logo " :alt="slogan" src="../assets/images/melogogreen.png"></router-link>
            </b-navbar-brand>
            <button type="button" id="toggler" @click="toggle" class="d-inline-block d-xl-none hamburger hamburger--collapse">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <b-collapse id="collapse" is-nav :style="style">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-for="(item, i) in $ml.get('navbar')" :key="i"><router-link
                            class="nav-link"
                            :id="item.id"
                            :to="item.link">{{ item.title }}</router-link></b-nav-item>
                    <b-nav-item-dropdown  :text="lang.current">
                        <b-dropdown-item @click="chooseLang">{{ lang.alternate }}</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <resize-observer @notify="handleWindowResize" />
    </div>
</template>

<script>
    export default {
        data(){
            return {
                slogan: 'morEnergy',
                lang: {
                    current: 'DE',
                    alternate: 'EN'
                },
                style: '',
            }
        },
        methods: {

            toggle() {
                const collapse = document.getElementById('collapse');
                const el = document.getElementById('carousel');
                const greeting = document.getElementById('image-greeting');
                const toggler = document.getElementById('toggler');
                toggler.classList.toggle('is-active');
                collapse.classList.toggle('me_show');
                collapse.style.display = 'block';
                if (toggler.classList.contains('is-active')) {
                    this.style = el || greeting && this.$route.name !== 'aktuelle' ?  (el ? `height: ${Math.round(el.offsetHeight)}px; display: block` : `height: ${Math.round(greeting.offsetHeight)}px; display: block`) : `height: 270px; background-color: #fff; display: block`;
                }
            },
            chooseLang() {
                if (this.$ml.current === 'DE') {
                    this.lang.current = 'EN';
                    this.lang.alternate = 'DE';
                    this.$ml.change('EN');
                    document.documentElement.lang = 'en';
                } else {
                    this.lang.current = 'DE';
                    this.lang.alternate = 'EN';
                    this.$ml.change('DE');
                    document.documentElement.lang = 'de';
                }
            },
            handleWindowResize({width}) {
                const collapse = document.getElementById('collapse');
                const toggler = document.getElementById('toggler');
                if (width >= 1199) {
                    collapse.style.height = '76px';
                    toggler.classList.remove('is-active');
                    collapse.style.display = 'none';
                }
                if (toggler.classList.contains('is-active')) {
                    collapse.style.display = 'block';
                    toggler.classList.remove('is-active')
                } else {
                    collapse.style.display = 'none';
                }

            }

        }
    }
</script>

<style lang="scss">
    .me_header-component  .navbar-brand > a {
        color: #0A2737;
        text-decoration: none;
        font-weight: 800;
        &:hover {
            cursor: pointer;
            text-decoration: none;
        }
    }
    .me_header-component .nav-item {
        color: #282828;
        font-weight: 600;
        border-right: 1px solid #F0EEEE;
        font-size: 0.8rem;
        & .nav-link {
            padding: .25rem .5rem;
        };
        &:last-of-type {
            border-right: none;
        };
        &:last-of-type > a.nav-link {
            display: inline-flex!important;
            align-items: center;
        }
    }
    .me_header-component #toggler:focus {
        outline: none;
        box-shadow: none;
    }
    .me_header-component .nav-link.dropdown-toggle {

    }
    .me_header-component .dropdown-menu {
        margin-top: 9.5%;
        border-radius: 0;
        transition: .3s ease-in-out;
        &:hover {
            background-color: #0A2737;
            cursor: pointer;
        };
        &:hover li > a:hover {
            background: transparent;
        }
        &:hover li > a {
            color: #fff;
        }
    }

    .me_header-component .logo {
        height: 50px;
    }
    @media (max-width: 1199px) {
        .me_header-component .navbar-collapse {
            transition: .3s ease-in-out;
            opacity: 0;
            font-size: .7rem;
            position: absolute;
            padding-left: 4%;
            top: 100%;
            right: 0;
            width: 160px;
            z-index: 9999;
            background-color: #fff!important;
            background: #fff!important;
        }
        .navbar-nav {
            background: #fff!important;
        }
        .me_header-component .navbar-collapse.me_show {
            opacity: 1;
        }
        .me_header-component .nav-link.dropdown-toggle {
            &::before {
                content: url('../assets/images/worldwide-mobile.png');
                padding-left: 7px;
            }
        }
    }

</style>
