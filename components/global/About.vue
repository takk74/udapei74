<template>
    <div class="about">
        <div class="infos">
            <h3>Qui sommes-nous ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aspernatur doloremque totam explicabo cupiditate iusto dolorum, unde nostrum, sint quasi a id eaque nesciunt dicta beatae quidem nihil molestiae? Dolore!
            Nostrum aliquid molestiae consequuntur vero dicta perspiciatis ad dolores dolorem cumque placeat temporibus laboriosam ipsum officia minima, aperiam asperiores libero adipisci expedita ex odio quos fugit deserunt sed. Ratione, fuga!</p>
            <nuxt-link to="/presentation" id="btn">En savoir plus</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .about {
        height: 400px;
        width: 100%;
        background: url('https://daytonacollege.us/wp-content/uploads/2019/10/aideaction.jpg');
        background-size: cover;
        padding: 40px 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 70px;
    }

    .infos {
        height: 100%;
        width: 40%;
        background-color: white;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    #btn {
        height: 40px;
        width: 150px;
        font-size: 14px;
        align-self: flex-end;
        background-color: $green;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        text-transform: uppercase;
        font-weight: bold;
        color: black;

        &:hover {
            background-color: #93d31e;
        }
    }
</style>