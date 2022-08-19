<template>
    <div class="user">
        <div class="user__media">
            <img src="@/assets/media/user/face.png" alt="user">
        </div>
        <div class="user__name">Екатерина</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .user {
        display: flex;
        align-items: center;

        &__media {
            margin-right: 20px;
        }
    }
</style>