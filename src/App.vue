<template #fallback>
    <FootRoute>
        <router-link class="me-5 text-decoration-none" :to="{ name: 'home' }">Home</router-link>
        <router-link class="me-5 text-decoration-none" :to="{ name: 'about' }">About</router-link>
        <router-link class="text-decoration-none" :to="{ name: 'lists' }">Lists</router-link>
    </FootRoute>
    <router-view/>
</template>

<script>
import FootRoute from "./components/FootRoute.vue";

export default {
    name: "App",
    data() {
        return {
            
        };
    },
    components: { FootRoute },
}
</script>