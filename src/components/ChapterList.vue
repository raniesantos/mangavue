<template>
    <div>
        <a v-for="(chapter, index) in chapters" :key="index"
            :class="{ active: (currentChapter === chapter) }"
            @click="$emit('update:currentChapter', chapter)"
        >
            {{ chapter }}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        chapters: {
            type: Array,
            required: true
        },
        currentChapter: {
            type: Number,
            required: true
        }
    }
};
</script>

<style scoped>
    div {
        background: #000;
        padding: 5px;
        text-align: center;
        margin-bottom: 15px;
    }

    a {
        display: inline-block;
        padding: 10px 0;
        width: 60px;
        text-align: center;
        margin: 5px;
        border-radius: 5px;
        opacity: 0.4;
        cursor: pointer;
        background: #600;
    }

    a.active {
        opacity: 1;
    }

    a:not(.active):hover {
        opacity: 0.7;
    }
</style>
