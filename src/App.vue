<template>
    <div>
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header/Header';

export default {
    name: 'App',
    components: { Header },
};
</script>

<style lang="scss">
html {
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
}
</style>
