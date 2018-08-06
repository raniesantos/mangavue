<template>
    <div class="container">
        <chapter-list
            :chapters="chapters"
            :current-chapter.sync="currentChapter"
        />

        <page :chapter="currentChapter" :page="page" :zoom="zoom"/>

        <page-number>{{ page }}</page-number>
    </div>
</template>

<script>
import config from './config';
import range from 'lodash/range';

export default {
    data () {
        return {
            chapters: [],
            currentChapter: 0,
            page: 1,
            isLastPage: false,
            zoom: 10
        };
    },
    methods: {
        keyListener () {
            window.bus.$on('handle-keydown', (code) => {
                switch (code) {
                case 'ArrowLeft':
                    if (this.page > 1) this.page--;
                    else alert('No previous page');
                    break;
                case 'ArrowRight':
                    if (!this.isLastPage) this.page++;
                    else alert('No next page');
                    break;
                case 'BracketLeft':
                    if (this.currentChapter > this.chapters[0]) this.currentChapter--;
                    else alert('No previous chapter');
                    break;
                case 'BracketRight':
                    if (this.currentChapter < this.chapters.slice(-1)[0]) this.currentChapter++;
                    else alert('No next chapter');
                    break;
                case 'NumpadSubtract':
                case 'Minus':
                    if (this.zoom > 6) this.zoom--;
                    break;
                case 'NumpadAdd':
                case 'Equal':
                    if (this.zoom < 10) this.zoom++;
                    break;
                }
            });
        },
        updateTitle () {
            document.title = `MangaVue | Ch ${this.currentChapter} P ${this.page}`;
        }
    },
    created () {
        this.chapters = range(config.start, config.end + 1);
        this.currentChapter = this.chapters[0];
        this.keyListener();
    },
    watch: {
        page () {
            this.updateTitle();
            window.scrollTo(0, 0);
            this.$http.get(this.$_pagePath(this.currentChapter, this.page + 1))
                .then(() => (this.isLastPage = false))
                .catch(() => (this.isLastPage = true));
        },
        currentChapter () {
            this.updateTitle();
            this.page = 1;
        }
    }
};
</script>

<style lang="scss">
    @import "../node_modules/normalize.css/normalize.css";

    body {
        background: #111;
        padding: 10px 10px 40px;
        font-family: sans-serif;
    }

    body, a {
        color: #fff;
    }
</style>
