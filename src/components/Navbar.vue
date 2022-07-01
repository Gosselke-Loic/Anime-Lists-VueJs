<template>
    <nav class="navbar static-top bg-dark mb-5">
        <div class="container-fluid">
            <a class="navbar-brand text-danger">{{ Brand }}</a>
            <form class="d-flex">
                <input v-model="search" class="form-control me-2" type="search" placeholder="Search Anime" aria-label="Search">
            </form>
        </div>
    </nav>
</template>

<script>
import _ from "lodash";
 
    export default {
        name: 'Navbar',
        // show title in the navbar
        props: {
            Brand: {
                type: String,
                default: "",
                required: true,
            },
        },
        // take input from the search input
        data() {
            return {
                search: null,
            }    
        },
        //watch for search input, debounce the query and emit value to the parent
        watch: {
            search: _.debounce(function(query) {
                this.$emit("handlerQuery", query)
            }, 350)
        },
    } 
</script>

<style scoped>
nav {
    padding: 0 30px;
    font-weight: bold;
}
</style>