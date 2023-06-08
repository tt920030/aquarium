<template>
    <div class="sign" id="login">
        <main>
            <img src="@/img/input_fork.svg" alt="" class="fork" @click="close($event)">
            <div class="left">
                <div class="pic1"></div>
                <div class="pic2"></div>
                <div class="pic3"></div>
                <div class="pic4"></div>
                <div class="pic5"></div>
            </div>
            <svg viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" width="0px">

                <clipPath id="bobble1">
                    <path
                        d="M134.102 8.78395C148.836 32.0915 148.024 61.7438 137.735 87.34C127.751 112.178 107.337 131.509 81.6846 139.182C56.7667 146.634 29.8296 141.115 8.73765 125.922C-11.308 111.482 -20.4065 87.8417 -23.5965 63.3427C-26.9977 37.2228 -27.629 8.29767 -9.00675 -10.3509C9.9733 -29.3577 39.2883 -29.8445 65.9054 -26.2856C92.5676 -22.7206 119.734 -13.9442 134.102 8.78395Z" />
                </clipPath>

                <clipPath id="bobble2">
                    <path
                        d="M79.2808 -24.864C99.7105 -26.8753 113.579 -6.13488 128.805 7.62573C145.36 22.5873 169.48 34.8178 169.991 57.1177C170.505 79.5502 148.538 94.7618 131.127 108.93C115.991 121.246 98.7718 131.963 79.2808 130.931C60.5951 129.942 46.3364 116.47 32.6508 103.717C18.2333 90.2829 -1.28312 76.7712 0.0663627 57.1177C1.39557 37.7595 25.1521 30.461 38.6393 16.5026C52.6026 2.05154 59.2759 -22.8945 79.2808 -24.864Z" />
                </clipPath>

                <clipPath id="bobble3">
                    <path
                        d="M134.605 11.2357C143.048 35.5996 135.698 61.0752 126.813 85.3717C118.47 108.186 107.6 130.701 86.4791 142.839C64.6178 155.404 38.1151 157.685 14.1435 150.125C-9.68116 142.612 -26.072 123.479 -40.1215 102.914C-56.7399 78.5882 -78.4501 52.9 -71.9618 24.0868C-65.2198 -5.85306 -35.7295 -23.7815 -8.39492 -37.9781C18.7938 -52.099 49.6211 -63.9916 78.4946 -54.0547C106.776 -44.3215 124.838 -16.9462 134.605 11.2357Z" />
                </clipPath>

                <clipPath id="bobble4">
                    <path
                        d="M52.0785 4.75422C70.2438 5.48702 89.0072 0.321167 104.258 10.2118C122.795 22.233 142.485 40.3354 140.912 62.3644C139.361 84.0681 115.577 95.7387 97.3045 107.567C83.6722 116.391 68.0999 117.203 52.0785 119.868C30.3573 123.481 6.20999 139.083 -11.2064 125.616C-28.8152 112.001 -23.534 84.5813 -22.2885 62.3644C-21.1388 41.8575 -20.7327 18.4072 -4.49054 5.82479C11.0057 -6.17975 32.4885 3.96395 52.0785 4.75422Z" />
                </clipPath>

                <clipPath id="bobble5">
                    <path
                        d="M132.599 4.93812C156.55 9.061 176.222 21.9027 194.414 37.959C214.299 55.5093 237.484 73.1648 239.771 99.5293C242.183 127.331 225.162 152.289 206.109 172.748C186.154 194.175 161.842 212.206 132.599 214.612C101.033 217.21 69.7286 206.66 45.8492 185.935C20.2149 163.687 0.175861 133.395 0.00131277 99.5293C-0.173913 65.5324 17.2043 32.0274 44.954 12.2317C69.7313 -5.44376 102.567 -0.23136 132.599 4.93812Z" />
                </clipPath>

            </svg>
            <div class="right" v-if="type === 'A'">
                <h3>登入</h3>
                <div class="top">
                    <form action="post">
                        <div class="input">
                            <label for="email" class="form-label">email</label>
                            <input type="email" id="email" name="email" placeholder="請輸入email" class="form-control"
                                :class="{ 'is-invalid': !login.email }" v-model.trim="loginText.email">
                            <div class="invalid-feedback">email格式錯誤</div>
                        </div>
                        <div class="input">
                            <label for="password" class="form-label">密碼</label>
                            <input :type="eye" id="password" name="password" placeholder="請輸入密碼" class="form-control"
                                :class="{ 'is-invalid': !login.password }" v-model.trim="loginText.password">
                            <img :src="eyeImg" alt="" class="eye" @click="toText($event)">
                            <div class="invalid-feedback">密碼錯誤</div>
                            <p class="forget" @click="toResigner('C')">忘記密碼</p>
                        </div>

                        <button type="button" class="btn1" @click="loginButton">
                            <!-- <RouterLink to="/member/profile" > -->
                            <h4>登入</h4>
                            <!-- </RouterLink> -->

                        </button>
                        <div class="register1">
                            <p>沒有帳號嗎?</p>
                            <p @click="toResigner('B')"><a>&nbsp;註冊</a></p>
                        </div>

                    </form>
                </div>

                <div class="bottom">
                    <p class="register2">或用以下方式登入</p>
                    <div class="social">
                        <img src="/src/img/login_fb.svg" alt="">
                        <img src="/src/img/login_twitter.svg" alt="">
                         <!-- google登入 -->
                        <div class="icon">
                            <!-- icon樣式內容 -->
                            <div id="g_id_onload" data-client_id="706694523939-o7a211c2ma3tdiglm2todss0h3cc07nk.apps.googleusercontent.com"
                                data-context="signin" data-ux_mode="popup" data-login_uri="http://localhost" data-itp_support="true">
                            </div>

                            <div class="g_id_signin" data-type="icon" data-shape="circle" data-theme="outline" data-text="signin_with"
                                data-size="large">
                            </div>

                            <span id="GOOGLE_STATUS_1"></span>
                        </div>

                    </div>
                </div>


            </div>
            <div class="right" v-else-if="type === 'B'">
                <h3>註冊</h3>
                <div class="top">
                    <form action="post">
                        <div class="input">
                            <label for="name" class="form-label">姓名</label>
                            <input type="text" id="name" name="name" placeholder="請輸入姓名" class="form-control"
                                :class="{ 'is-invalid': !register.name }" v-model.trim="registerText.registerName">
                            <div class="invalid-feedback">此欄位必填</div>
                        </div>
                        <div class="input">
                            <label for="email" class="form-label">email</label>
                            <input type="email" id="email" name="email" placeholder="請輸入email" class="form-control"
                                :class="{ 'is-invalid': !register.email }" v-model.trim="registerText.registerEmail">
                            <div class="invalid-feedback">email格式錯誤</div>
                        </div>
                        <div class="input">
                            <label for="password" class="form-label">密碼</label>
                            <input :type="eye" id="password" name="password" placeholder="密碼長度需六至十二位" class="form-control"
                                :class="{ 'is-invalid': !register.password }" v-model.trim="registerText.registerPassword">
                            <img :src="eyeImg" alt="" class="eye" @click="toText($event)">
                            <div class="invalid-feedback">密碼須包含大小寫英文及數字</div>
                        </div>
                        <div class="input">
                            <label for="password2" class="form-label">密碼確認</label>
                            <input :type="eye" id="password2" name="password2" placeholder="請再次輸入密碼"
                                :class="{ 'is-invalid': !register.password2 }" class="form-control"
                                v-model.trim="registerText.registerPassword2">
                            <img :src="eyeImg" alt="" class="eye" @click="toText($event)">
                            <div class="invalid-feedback ">二次輸入與密碼不符</div>
                        </div>

                        <button type="button" class="btn1" @click="registerButton">
                            <h4>註冊</h4>
                        </button>

                    </form>
                </div>


            </div>
            <div class="right" v-else-if="type === 'C'">
                <h3>重設密碼</h3>
                <div class="top">
                    <form action="">
                        <div class="input">
                            <label for="email" class="form-label">email</label>
                            <input type="email" id="email" name="email" placeholder="請輸入email" class="form-control"
                                :class="{ 'is-invalid': !changeEmail }" v-model.trim="changeEmailText.email">
                            <div class="invalid-feedback">email格式錯誤</div>
                        </div>

                        <button type="button" class="btn1" @click="send">
                            <h4>確認</h4>
                        </button>

                    </form>
                </div>




            </div>
        </main>


    </div>
</template>

<script setup>
import "bootstrap";
import axios from 'axios';
import { useRouter } from "vue-router";
import { reactive, ref, onMounted } from "vue";
import { useCookies } from "vue3-cookies";

const router = useRouter();
const emit = defineEmits(['close']);

const type = ref("A");

const eye = ref("password");

const eyeImg = ref("src/img/login_eye.svg");

const { cookies } = useCookies();

const register = reactive({
    name: true,
    email: true,
    password: true,
    password2: true
});

const registerText = reactive({
    registerName: "",
    registerEmail: "",
    registerPassword: "",
    registerPassword2: ""
});

const changeEmail = ref(true);

const changeEmailText = reactive({
    email: ""
});

const login = reactive({
    email: true,
    password: true
});

const loginText = reactive({
    email: "",
    password: ""
});

const close = (e) => {
    // e.stopPropagation();
    emit('close', false);
}

const toResigner = (n) => {
    type.value = n;
}


const toText = (e) => {
    // console.log(eye.value);
    if (eye.value == "password") {
        eye.value = "text";
        eyeImg.value = "src/img/login_eyeopen.svg";

    }
    else {
        eye.value = "password";
        eyeImg.value = "src/img/login_eye.svg";
        // console.log(eye.value);
    }
}
//寄信
const sendEmail = ref('');
const sendResult = ref();
const send = function () {
    let params = new URLSearchParams();
    params.append('email', sendEmail.value);
    axios.post('http://localhost/PHP/emailapi.php',
        params).then((res) => {
            console.log(res.data.success);
            if (res.data.success) {
                alert("寄送成功");
                type.value = "A";

            } else {
                alert("寄送失敗");
            }

            sendResult.value = res.data.success;
        }).catch(err => console.log(err))
};

// 確認資料庫有這筆email
const sendEmailPHP = () => {
    let params = new URLSearchParams();
    params.append('email', changeEmailText.email);


    axios.post('http://localhost/PHP/sendEmail.php', params)	//使用get或post等取得路徑資料(php)

        .then((res) => {	//回傳後如何處理

            if(res.data == 'Y'){
                send();
            }else{
                alert("無此帳號");
            }

        }).catch(err => console.log(err))  //錯誤如何處理
}

const loginButton = () => {
    const send_data = ref(true);

    if (loginText.email === "") {
        login.email = false;
        send_data.value = false;
    } else {
        login.email = true;
    }

    if (loginText.password === "") {
        login.password = false;
        send_data.value = false;
    } else {
        login.password = true;
    }

    if (send_data.value === true) {
        // console.log(loginText.email);
        // console.log(loginText.password);
        loginPHP();
    }
}

const registerButton = () => {
    const send_data = ref(true);

    if (registerText.registerName === "") {
        register.name = false;
        send_data.value = false;
    } else {
        register.name = true;
    }

    let emailRule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (registerText.registerEmail === "" || !emailRule.test(registerText.registerEmail)) {
        register.email = false;
        send_data.value = false;
    } else {
        register.email = true;
    }

    let passwordRule = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,12}$/;

    if (registerText.registerPassword === "" || !passwordRule.test(registerText.registerPassword)) {
        register.password = false;
        send_data.value = false;
    } else {
        register.password = true;
    }

    if (registerText.registerPassword2 !== registerText.registerPassword || registerText.registerPassword2 === "") {
        register.password2 = false;
        send_data.value = false;
    } else {
        register.password2 = true;
    }

    if (send_data.value === true) {
        // console.log("aaa");
        registerPHP();

    }
}

const changeEmailButton = () => {
    const send_data = ref(true);
    let emailRule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (changeEmailText.email === "" || !emailRule.test(changeEmailText.email)) {
        changeEmail.value = false;
        send_data.value = false;
    } else {
        changeEmail.value = true;
    }

    if (send_data.value === true) {
        sendEmailPHP();
        
    }
}


const registerPHP = function () {		//取得資料的方法
    let params = new URLSearchParams();
    params.append('name', registerText.registerName);
    params.append('email', registerText.registerEmail);
    params.append('password', registerText.registerPassword);


    axios.post('http://localhost/PHP/register.php', params)	//使用get或post等取得路徑資料(php)

        .then((res) => {	//回傳後如何處理

            if(res.data == 'Y'){
                alert("註冊成功!請重新登入");
                type.value = "A";
            }else{
                alert("註冊失敗");
            }

        }).catch(err => console.log(err))  //錯誤如何處理

};

const loginPHP = function(){		//取得資料的方法
    let params = new URLSearchParams();
    params.append('email', loginText.email);
    params.append('password', loginText.password);


    axios.post('http://localhost/PHP/login.php',params)	//使用get或post等取得路徑資料(php)

    .then((res)=>{	//回傳後如何處理
        // console.log(res.data);
        if(res.data && res.data.success === true){
            //登入成功->導回產品頁

            // console.log(res.data);
            alert('登入成功');
            cookies.set("id", res.data.id);
            close();
            router.push({ path: '/member/profile' });

        }else{
            alert('帳號或密碼錯誤');
        } 

    }).catch(err => console.log(err))  //錯誤如何處理

};





// google登入
const onSignIn1 = (response) => {
    var credential = response.credential;
    var profile = JSON.parse(
        decodeURIComponent(
            escape(
                window.atob(
                    credential.split(".")[1]
                        .replace(/-/g, "+")
                        .replace(/_/g, "/")
                )
            )
        )
    );

    var target = document.getElementById("GOOGLE_STATUS_1");
    var html = "";

    html += "ID: " + profile.sub + "<br/>";
    html += "會員暱稱： " + profile.name + "<br/>";
    html += "會員頭像：" + profile.picture + "<br/>";
    html += "會員 email：" + profile.email + "<br/>";
    target.innerHTML = html;
};


onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
});
</script>

<style lang="scss" scoped>
@import '../assets/sass/page/sign';
@import "bootstrap/dist/css/bootstrap.min.css";
</style>

