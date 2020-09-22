<template>
    <b-col cols="12" class="page-paddings ">
        <hr class="me_teams-card-component-title-underline mb-5">
        <b-row class="w-100 mx-auto">
            <b-col v-for="(item, i) in displayed" cols="12" xl="4" :key="i"
                   :class="{
                   'mt-0 mb-3 mt-xl-3 mb-xl-3' : true,
                   }"
                   >
                <b-card
                        data-toggle="modal" data-target="#detailed"
                        @click="showModal(item)"
                        :title="item.name"
                        :sub-title="$ml.current === 'DE' ? item.position : item.en_position"
                        :img-src="item.image"
                        :img-alt="item.name"
                        img-top
                        class="mb-2 rounded-0 h-100 bg-white border-0">
                </b-card>
            </b-col>
        </b-row>
        <b-modal size="lg" id="mentor-modal" hide-header hide-footer @hidden="closeModal">
            <team-slider-component :slides="displayed" :active="slide"/>
        </b-modal>
    </b-col>
</template>

<script>
    import TeamSliderComponent from "./TeamSliderComponent";
    export default {
        components: {TeamSliderComponent},
        props: {
            mentors: null
        },
        data() {
            return {
                pages: 0,
                perPage: 8,
                paginated: [],
                currentPage: 1,
                slide: null
            }
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
            showModal(item) {
                this.$bvModal.show('mentor-modal');
                this.slide = item.id;
            },
            closeModal() {
                this.slide = null;
            }
        },
        computed: {
            displayed () {
                return this.paginatePages(this.mentors)
            }
        }
    }
</script>

<style lang="scss">
    .me-top-pad-wide {
        padding-top: 10%;
    }
    .modal-header, .modal-content {
        border: none!important;
        border-radius: 0!important;
    }
    .card-img-top {
        border-radius: 0;
    }

    .card {
        transition: .3s ease-in-out;
        &:hover {
            cursor: pointer;
            box-shadow: 0 20px 20px 10px rgba(0,0,0,.16), 0 20px 20px 10px rgba(0,0,0,.12);
        }
    }

    .card-title {
        font-size: 1rem;
        font-weight: 800;
    }

    .me_teams-card-component-title-underline {
        background-color: #6DC286;
        border-radius: 5.5px;
        width: 160px;
        height: 4px;
        text-align: center;
    }

    @media (max-width: 1199px) {
        .me_teams-card-component-item-edged-left-padding,
        .me_teams-card-component-item-edged-right-padding,
        .me_teams-card-component-item-center-padding {
            padding-left: 0;
            padding-right: 0;
        }

        .page-item, .page-item.disabled {
            color: #0A2737;
            background: transparent;
            & a.page-link, span.page-link {
                font-size: 67%;
                text-decoration: underline;
                border: none;
                color: #c0c0c0;
                background: transparent;
                &:focus {
                    outline: none;
                    box-shadow: none;
                }
            };
            & a.page-link[aria-label="prev"], span.page-link[aria-label="prev"],
            a.page-link[aria-label="next"], span.page-link[aria-label="next"],
            a.page-link[aria-label="first"], span.page-link[aria-label="first"],
            a.page-link[aria-label="last"], span.page-link[aria-label="last"]{
                font-size: 67%;
                text-decoration: none;
                border: none;
                color: #0A2737;
                background: transparent;
                &:focus {
                    outline: none;
                    box-shadow: none;
                }
            };
            &:focus {
                text-decoration: none;
                outline: none;
            };
            &:last-child .page-link {
                text-decoration: none;
                width: 120%;
            };
            &:first-child .page-link {
                text-decoration: none;
                z-index: 0;
                padding-left: 10px;
                padding-right: 20px;
                width: 150%;
            };
        }
        .page-item.active {
            color: #0A2737;
            background: transparent;
            & a.page-link, span.page-link {
                font-size: 67%;
                text-decoration: none;
                border: none;
                color: #0A2737;
                background: transparent;
                font-weight: 800;
                &:focus {
                    outline: none;
                    box-shadow: none;
                }
            }
        };
    }

    @media (min-width: 1200px) {
        .me_teams-card-component-item-edged-left-padding {
            padding-left: 0;
        }
        .me_teams-card-component-item-edged-right-padding {
            padding-right: 0;
        }
        .me_teams-card-component-item-center-padding {
            padding-left: 7.5px;
            padding-right: 7.5px;
            width: calc(33.33% - 7.5px);
        }

        .page-item, .page-item.disabled {
            color: #0A2737;
            background: transparent;
            & a.page-link, span.page-link {
                text-decoration: underline;
                border: none;
                color: #c0c0c0;
                background: transparent;
                &:focus {
                    outline: none;
                    box-shadow: none;
                }
            };
            & a.page-link[aria-label="prev"], span.page-link[aria-label="prev"],
            a.page-link[aria-label="next"], span.page-link[aria-label="next"],
            a.page-link[aria-label="first"], span.page-link[aria-label="first"],
            a.page-link[aria-label="last"], span.page-link[aria-label="last"]{
                text-decoration: none;
                border: none;
                color: #0A2737;
                background: transparent;
                &:focus {
                    outline: none;
                    box-shadow: none;
                }
            }
            &:focus {
                text-decoration: none;
                outline: none;
            };
            &:last-child .page-link {
                text-decoration: none;
                width: 150%;
            };
            &:first-child .page-link {
                text-decoration: none;
                z-index: 0;
                padding-left: 10px;
                padding-right: 65px;
                width: 150%;
            };
        }
        .page-item.active {
            color: #0A2737;
            background: transparent;
            & a.page-link, span.page-link {
                text-decoration: none;
                border: none;
                color: #0A2737;
                background: transparent;
                font-weight: 800;
                &:focus {
                    outline: none;
                    box-shadow: none;
                }
            }
        };
    }

</style>
