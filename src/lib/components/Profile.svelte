<script lang="ts">

    export let className = "";
    export let profileImage = "";
</script>

<header class="profile {className}">
    <div class="wrapper">
        <div class="profile-img">
            <img src={profileImage} alt="profile-image" width="200" height="350" loading="lazy" />
        </div>
        <div class="profile-description">
            <h2 class="profile-name">Lisa-Marie Loof B.Sc</h2>
            <p class="greeter">Herzlich Willkommen</p>
            <p class="description">
                Mein Name ist Lisa-Marie Loof und ich freue mich Sie auf meiner
                Homepage begrüßen zu dürfen.
            </p>
        </div>
    </div>
</header>

<style lang="scss">
    .profile {
        // position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing:border-box;

        height: auto;
        width: auto;
        background-color: #ffffff;
        padding: 5px;
        // box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
        .wrapper {
            display: flex;
            flex-direction: column;
            // flex-direction: row;
            align-items: center;
            justify-content: center;
            box-sizing:border-box;

            .profile-img {
                width: 220px;
                height: 240px;
                overflow: hidden;
                // background-color: #cbcbcb;
                // justify-self: center;
                img {
                    height: 300px;
                    object-fit: cover;
                    object-position: -20px -15px;
                }
            }
            .profile-description {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 20px;
                    // width: calc(100% - 200px);
                    // height: 200px;
                    height: 100%;
                    font-family: var(--font-family, "Segoe UI");
                    // background-color: green;
                    .profile-name {
                        color: var(--text);
                        font-size: 20px;
                        letter-spacing: 1.5px;
                        // font-family: 'Segoe UI';
                        font-weight: 400;
                        text-align: center;
                    }
                    .greeter {
                        text-align: center;
                        margin-top: 20px;
                        font-weight: 300;
                        font-size: 15px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }
                    .description {
                        width: 100%;
                        font-weight: 300;
                        font-size: 14px;
                        // font-size: 0.62rem;
                        text-align: center;
                        letter-spacing: 0.5px;
                    }

                    /* align-self: center; */
                }
        }
    }
    @media screen and (max-width: 480px) {
        // span{
        //     font-family: 'Segoe UI';
        //     font-style: normal;
        //     font-weight: 300;
        //     font-size: 38px;
        //     line-height: 38px;
        //     // letter-spacing: .15rem;
        //     letter-spacing: 2.7px;
        //     // letter-spacing: 4px;
        // }
        // .heading{
        //     padding:10px;
        // }
        // .wrapper{
        //     .subheading{
        //         line-height: 30px;
        //         font-size: 15px;
        //         letter-spacing: 3px;
        //         width:100%;
        //     }
        // }
    }
</style>
