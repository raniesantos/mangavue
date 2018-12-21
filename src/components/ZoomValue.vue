<template>
    <div>
        <slot/>
    </div>
</template>

<style scoped>
    div {
        font-weight: bold;
        font-size: 0.8em;
        padding: 3px 0;
        width: 50px;
        text-align: center;
        border-radius: 5px 5px 0 0;
        background: rgba(102, 0, 0, 0.8);
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(10%);
    }
</style>
