<template>
    <img :src="currentPageSrc" @click="onClickPage" :style="zoomStyles">
</template>

<script>
export default {
    props: {
        chapter: {
            type: Number,
            required: true
        },
        page: {
            type: Number,
            required: true
        },
        zoom: {
            type: Number,
            required: true
        }
    },
    computed: {
        currentPageSrc () {
            return this.$_pagePath(this.chapter, this.page);
        },
        zoomStyles () {
            const scale = this.zoom / 10;
            const translate = this.zoom * 5 - 50;
            return {
                transform: `translateY(${translate}%) scale(${scale})`
            };
        }
    },
    methods: {
        onClickPage () {
            window.bus.$emit('handle-keydown', 'ArrowRight');
        }
    }
};
</script>

<style scoped>
    img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        box-shadow: 0 0 0 3px #900;
    }
</style>
