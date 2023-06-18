<script lang="ts">

    export let className = "";
    export let profileImage = "";
</script>

<header class="profile {className}">
    <div class="wrapper">
        <div class="profile-img">
            <img src={profileImage} alt="profile-image" width="200" height="350" loading="eager" />
        </div>
        <div class="profile-description">
            <h2 class="profile-name">Lisa-Marie Loof B.Sc</h2>
            <p class="greeter">Herzlich Willkommen</p>
            <p class="description">
                Mein Name ist Lisa-Marie Loof und ich freue mich Sie auf meiner
                Homepage begrüßen zu dürfen.
            </p>
            <ul>
                <li>
                    B.Sc in Psychologie
                </li>
                <li>
                    Diplomierter Hypnosetrainerin
                </li>
            </ul>
        </div>
    </div>
</header>

<style lang="scss">
    .profile {
        --font-size-name:20px;
        --font-size-greeter:16px;
        --font-size-description:15px;
        --background:#fff;
        
        // position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing:border-box;

        height: auto;
        width: auto;
        background-color: var(--background,#fff);
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
                    padding: 5px 20px 20px 20px;
                    height: 100%;
                    font-family: var(--font-family, "Segoe UI");
                    .profile-name {
                        color: var(--text);
                        font-size: var(--font-size-name, 20px);
                        letter-spacing: 1.5px;
                        font-weight: 400;
                        text-align: center;
                    }
                    .greeter {
                        text-align: center;
                        margin-top: 20px;
                        font-weight: 400;
                        font-size: var(--font-size-greeter, 15px);
                        text-transform: uppercase;
                    }
                    .description {
                        width: 100%;
                        font-weight: 300;
                        font-size: var(--font-size-description, 14px);
                        text-align: center;
                        letter-spacing: 0.5px;
                    }
                    ul li {
                        list-style: square;
                        font-weight: 300;
                        font-size: 14px;
                        // font-size: var(--font-size-description, 14px);
                        // font-size: 0.62rem;
                        letter-spacing: 0.5px;
                        margin:0;
                        padding: 0;
                        font-weight: 500;
                        color:var(--attention)
                    }
                    ul {
                        margin:0;
                        padding: 0;
                        margin-top:20px;
                        margin-left:25px;
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
    @media screen and (min-width: 319px) and (max-width: 1093px) {
        .profile {
            box-shadow: none;
            // background: #fff;
            background: transparent;
            justify-self: center;
            align-items: center;
            width:100%;
            .wrapper{
                .profile-img {
                    border-radius: 50%;
                    height: 200px !important;
                    width: 200px !important;
                    background-color: var(--primary);
                    border: 8px solid #fff;
                    img {
                        object-fit: cover;
                        object-position: -35px -15px;
                    }
                }
                .profile-description {
                    display: none;
                }
            }
            
           
      
        }
    }
</style>
