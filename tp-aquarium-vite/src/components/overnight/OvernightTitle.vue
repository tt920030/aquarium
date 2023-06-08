<template>
    <div class="overnight_banner">
        <div class="overnight_banner_content">
            <h2>海浪的聲音陪你入眠</h2>
            <h3>和你一起生活</h3>
            <h1>台北海生館</h1>
            <p>聽海浪聲伴眠，與海洋生物共同入眠，晚間導覽帶您認識海洋生態，還有精彩的表演秀等著您;隔日早晨，開啟您的海洋探索之旅。感受不同的海洋氛圍，親近珍貴的海洋生物，讓您的海洋夢不再只是夢。</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overnight_banner {
    background-image: url(../img/overnight_banner.jpg);
    width: 100%;
    height: 600px;
    clip-path: ellipse(1000px 450px at 50% 20%);
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 100px;

    @include mobile() {
        margin-top: 70px;
    }

    .overnight_banner_content {
        color: white;
        text-align: center;
        padding-top: 120px;

        h2 {
        font-size: 16px;
        margin-bottom: 30px;
        letter-spacing: 10px;
        }

        h3 {
        font-family: Noto serif TC;
        font-size: 32px;
        letter-spacing: 15px;
        margin-bottom: 10px;
        }

        p {
        width: 40%;
        margin: 20px auto;
        margin-top: 30px;
        }

        @include mobile() {
        p {
            width: 80%;
        }
        }
    }

    @include mobile() {
        clip-path: ellipse(500px 400px at 50% 20%);

        p {
        width: 100%;
        }
    }
}
</style>