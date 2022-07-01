<template>
    <Navbar :Brand="Brand" @handlerQuery="getQuery"></Navbar>
    <div class="container-fluid">
        <div class="text-center" v-if="error">{{ error.message }}</div>
        <div v-if="!flag">
            <GenericCard :error="error">
                <div class="row g-2 d-flex justify-content-center">
                    <div class="col col-md-4 col-lg-3" v-for= "(item, id) in datas" :key="item.mal_id">
                        <div class="border-secondary card bg-dark">
                            <img :src="`${ item.images.webp.large_image_url }`" class="card-img-top img-fluid" alt="animes images">

                            <div class="card-header bg-dark text-warning text-center">
                                <h5 class="card-title fw-bold">{{ item.title }}</h5>
                            </div>

                            <div class="card-body bg-secondary text-white text-center">
                                <p class="card-text">Rating: {{ item.rating }}</p>
                                <p class="card-text">Episodes: {{ item.episodes }}</p>
                                <p class="card-text">Ranking: {{ item.rank }}</p>
                                <p class="card-text">Puntuation: {{ item.score }}</p>
                            </div>

                            <div class="card-footer bg-dark text-center">
                                <a :href="`${ item.url }`" class="btn btn-danger">Go to My anime List</a>
                            </div>
                        </div>
                    </div>
                </div>
            </GenericCard>
        </div>
        <div v-else>
            <h1 class="text-danger text-center fw-bold">{{ Loading }}</h1>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AnimeService from "@/services/anime.js";
import GenericCard from "@/components/GenericCard.vue";

export default {
    name: "home",

    data() {
        return {
            Brand: "My Anime List",
            Loading: "Loading your Anime",

            flag: false,

            query: null,
            
            datas: null,
            error: null,
        }
    },

    components: { Navbar, AnimeService, GenericCard },

    methods: {
        /**
         * take query from search input navbar
         * @param {string} query 
         */
        getQuery(query) {
            console.log(query);
            this.query = query;
            this.callService(query);
        },

        /**
         * Fetch data to show custom list animes from search query, if have an error show the error, time to waiting the fetch show loadin message
         * @param {string} query 
         */
        async callService(query) {
            try {
                this.flag = true
                const response = await AnimeService.getList(query);
                this.datas = response.data.data;
            } catch (e) {
                this.error = e.message;
            } finally {
                this.flag = false
            }
        },
    },
    /**
     * Fetch data to show main list animes for the first render, if have an error show the error, time to waiting the fetch show loadin message
     */
    async mounted() {
        try {
            const response = await AnimeService.getList();
            this.datas = response.data.data;
            this.flag = true;
        } catch(e) {
            this.error = e.message;
        } finally {
            this.flag = false;
        }
    },
}
</script>