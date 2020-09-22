<template>
    <b-col cols="12" class="page-paddings">
        <b-row class="w-100 mx-auto">
            <b-col v-for="(item, i) in displayed" cols="12" xl="4" :key="i"
                   :class="{
                   'mt-3 mb-3' : true,
                    'me_news-card-component-item-edged-left-padding' : i === 0 || ((i + 1) % 2 === 0 && (i + 1) % 4 === 0),
                    'me_news-card-component-item-edged-right-padding' : ((i + 1) % 2 !== 0 && (i + 1) % 3 === 0) || ((i + 1) % 2 === 0 && (i + 1) % 3 === 0),
                    'me_news-card-component-item-center-padding' : ((i + 1) % 2 === 0 && (i + 1) % 4 !== 0 && (i + 1) % 3 !== 0) || ((i + 1) % 5 === 0),
                   }"

            >
                <b-card
                        @click="show(item.slug)"
                        :title="item.created_at"
                        :img-src="item.image"
                        :img-alt="item.title"
                        img-top
                        class="mb-2 rounded-0 h-100 bg-white border-0">
                    <b-card-text>
                        <hr class="me_news-card-component-title-underline">
                        <div class="font-weight-bolder">{{ $ml.current === 'DE' ? item.title : item.en_title }}</div>
                        <div class="me_news-card-component-description" v-html="$ml.current === 'DE' ? item.description.substring(0, 60) + '...' : item.en_description.substring(0, 60) + '...'"></div>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="w-100 mx-auto mt-4">
            <b-col cols="11" xl="4" class="mx-auto">
                <b-pagination
                        v-if="news.length > 0"
                        align="center"
                        label-prev-page="prev"
                        label-next-page="next"
                        label-first-page="first"
                        label-last-page="last"
                        :prev-text="$ml.get('pagination.prev')"
                        :next-text="$ml.get('pagination.next')"
                        :last-text="$ml.get('pagination.toEnd') + '»'"
                        :first-text="currentPage === Math.round(news.length / 6) ? '«' + $ml.get('pagination.toStart') : ''"
                        v-model="currentPage"
                        :total-rows="news.length"
                        :per-page="perPage"
                        :hide-ellipsis="true"
                ></b-pagination>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>

    export default {

        props: {
            news: null
        },
        data() {
            return {
                pages: 0,
                perPage: 6,
                paginated: [],
                currentPage: 1
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
            show(slug) {
                this.$router.push({name: 'aktuelle', params: {slug: slug}});
            }
        },
        computed: {
            displayed () {
                return this.paginatePages(this.news)
            }
        }
    }
</script>

<style lang="scss">
    .me-top-pad-wide {
        padding-top: 10%;
    }
    .card-img-top {
        border-radius: 0;
    }

    .card {
        transition: .3s ease-in-out;
        &:hover {
            cursor: pointer;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
        }
    }

    .card-title {
        font-size: 1rem;
        font-weight: 800;
    }

    .me_news-card-component-title-underline {
        background-color: #0A2737;
        border-radius: 5.5px;
        width: 45px;
        height: 3px;
    }
    .me_news-card-component-title-underline {
        margin-left: 0;
    }
    @media (max-width: 1199px) {

        .me_news-card-component-description {
            font-size: 80%;
            padding-bottom: 10px;
        }

        .me_news-card-component-item-edged-left-padding,
        .me_news-card-component-item-edged-right-padding,
        .me_news-card-component-item-center-padding {
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
        .me_news-card-component-item-edged-left-padding {
            padding-left: 0;
        }
        .me_news-card-component-item-edged-right-padding {
            padding-right: 0;
        }
        .me_news-card-component-item-center-padding {
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
