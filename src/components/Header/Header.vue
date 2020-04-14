<template>
    <div>
        <router-link class="link" v-for="route of this.$router.options.routes" :key="route.name" :to="route.path">
            Go {{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style lang="scss" scoped>
.link {
    margin: 5px;
    text-decoration: none;
}
</style>
