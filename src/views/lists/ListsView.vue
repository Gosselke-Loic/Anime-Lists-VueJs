<template>
    <nav class="navbar static-top bg-dark mb-5 shadow-lg">
        <div class="container-fluid">
            <router-link class="me-5 text-decoration-none" :to="{ name: 'recomendations' }">Recomendations</router-link>
            <router-link class="me-5 text-decoration-none" :to="{ name: 'lists' }">Characters</router-link>
            <router-link class="text-decoration-none" :to="{ name: 'top' }">Tops Anime</router-link>
        </div>
    </nav>
    <div class="container-fluid">
        <div class="text-center" v-if="error">{{ error.message }}</div>
        <div v-if="!flag">
            <GenericCard>
                <div class="col col-md-4 col-lg-3" v-for= "(item, id) in datas" :key="item.mal_id">
                    <div class="border-secondary card bg-dark">
                        <img :src="`${ item.images.webp.image_url }`" class="card-img-top img-fluid" alt="">
                        <div class="card-header bg-dark text-warning text-center">
                            <h5 class="card-title fw-bold">{{ item.name }}</h5>
                        </div>
                        <div class="card-body bg-secondary text-white text-center">
                            <p class="card-text">About: {{ item.about }}</p>
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
    <router-view/>
</template>

<script>
import AnimeService from "@/services/anime.js";
import GenericCard from "@/components/GenericCard.vue";

export default {
    name : "Lists",

    data() {
        return {
            Loading: "Loading Characters",

            datas: null,
            error: null,

            flag: false,
        }
    },

    components: { AnimeService, GenericCard },
    
    //Fetch data to show characters, if have an error show the error, time to waiting the fetch show loadin message
    async mounted() {
        let param = encodeURI("characters?page=1");
        try {
            const response = await AnimeService.getLists(param);
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