<template>
    <div class="container-fluid mt-5">
        <div class="text-center" v-if="error">{{ error.message }}</div>
        <div v-if="!flag">
            <GenericCard :error="error">
                <div class="col col-md-4 col-lg-3" v-for= "(item, id) in datas" :key="item.mal_id">
                    <div class="border-secondary card bg-dark">
                        <img :src="`${ item.images.webp.large_image_url }`" class="card-img-top img-fluid" alt="animes images">
                        <div class="card-header bg-dark text-warning text-center">
                            <h5 class="card-title fw-bold">{{ item.title }}</h5>
                        </div>
                        <div class="card-body bg-secondary text-white text-center">
                            <p class="card-text">Rating: {{ item.rating }}</p>
                            <p class="card-text">Episodes: {{ item.episodes }}</p>
                            <p class="card-text">Popularity: {{ item.popularity }}</p>
                            <p class="card-text">Puntuation: {{ item.score }}</p>
                        </div>
                        <div class="card-footer bg-dark text-center">
                            <a :href="`${ item.url }`" class="btn btn-danger">Go to My anime List</a>
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
import AnimeService from "@/services/anime.js";
import GenericCard from "@/components/GenericCard.vue";

export default {
    name : "Lists",

    data() {
        return {
            Loading: "Loading Tops Animes",

            datas: null,
            error: null,

            flag: false,
        }
    },

    components: { AnimeService, GenericCard },

    //Fetch data to show top animes, if have an error show the error, time to waiting the fetch show loading message
    async mounted() {
        let param = encodeURI("top/anime");
        try {
            const response = await AnimeService.getLists(param);
            console.log(response.data.data);
            this.datas = response.data.data;
            this.flag = true
        } catch(e) {
            this.error = e.message;
        }finally {
            this.flag = false;
        }
    }
}
</script>