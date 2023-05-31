<script>
</script>

<div class="circle">
    <div class="heading">
        <h3 class="line1">Ihr Ort</h3>
        <h1 class="line2">für <span>HYPNOSE</span> &</h1>
        <h1 class="line3">Weiterentwicklung</h1>
    </div>
</div>

<style lang="scss">
        .circle {
            width: 200px;
            height: 200px;
            // background: rgb(250, 241, 241);
            border-radius: 50%;
            // background: radial-gradient(
            //     circle,
            //     rgba(255, 255, 255, 0) 35%,
            //     rgba(251, 97, 151, 0.196) 55%,
            //     rgba(255, 66, 132, 0.468) 90%
            // // );
            // background: radial-gradient(
            //     circle,
            //     rgba(255, 255, 255, 0) 50%,
            //     rgba(251, 97, 151, 0.196) 70%,
            //     rgba(255, 66, 132, 0.323) 90%
            // );
            // border: 1px solid rgba(246, 188, 208, 0.589);
            // box-shadow: 0 0 20px rgba(193, 10, 74, 0.507);
            // &::before {
            //     content: "";
            //     position: absolute;
            //     display: block;
            //     width: 300px;
            //     height: 300px;
            //     box-sizing: border-box;

            //     border-radius: 50%;
            //     background: radial-gradient(
            //         circle,
            //         rgba(255, 255, 255, 0) 50%,
            //         rgba(251, 97, 151, 0.196) 70%,
            //         rgba(255, 66, 132, 0.323) 90%
            //     );
            //     animation: pulse-ring 1.75s cubic-bezier(0.215, 0.61, 0.355, 1)infinite;
            // }

            // background: radial-gradient(
            //     circle,
            //     rgba(255, 255, 255, 0) 50%,
            //     rgba(21, 156, 131, 0.327) 70%,
            //     rgba(17, 139, 125, 0.323) 90%
            // );
            // border: .5px solid rgba(75, 171, 150, 0.196);

            // box-shadow: 0 0 20px rgba(23, 177, 138, 0.507);

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .heading {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 300px;
                height: 200px;

                // background-color: rgba(128, 128, 128, 0.548);

                h1,
                h3 {
                    position: absolute;
                    font-size: 50px;
                    letter-spacing: 2px;
                    text-align: center;
                    justify-content: center;
                    font-family: "Saira Condensed";
                    color: #505050;
                }
                .line1 {
                    position: absolute;
                    top: 30px;
                    font-size: 28px;
                }
                .line2 {
                    left: -15px;
                    width: 100%;
                    span {
                        color: #ef476f;
                    }
                }
                .line3 {
                    bottom: 17px;
                    font-size: 45px;
                    color: #505050;
                }
                h1::after,
                h3::after,
                h1::before,
                h3::before {
                    display: none;
                }
            }
        }
    @keyframes pulse-ring {
        0% {
            transform: scale(0.75);
        }
        80%,
        100% {
            opacity: 0;
        }
    }

    @keyframes pulse-dot {
        0% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.8);
        }
    }
</style>
