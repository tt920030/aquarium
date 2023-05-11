各頁面轉換到vue vite步驟

以下步驟在vite專案的資料夾操作


//1~3是前置步驟
1. 在src/views資料夾裡建立要轉換的頁面名稱vue檔案 ex. Index.vue(字首一定要大寫)


2. 在空白vue檔案頁面輸入 vue 快速帶出模板

把<script></script>改成以下:

<script setup>  
import{ RouterLink, RouterView } from "vue-router";
</script>

//setup是一種語法糖 可以少打很多東西   

//import vue-router 是讓這個頁面可以再連到其他頁面 


3. 在src/router/index.js裡的routes陣列裡加入以下code:

{
      path: '/ticket',    //自己取之後要連的路徑名稱
      name: 'ticket',		//自己取
      component: () => import('../views/Ticket.vue'),  //路徑連到剛剛建的vue檔
      children:[
        {
          path: 'yearpass',
          name: 'yearpass',
          component: ()=> import("../views/ticket/yearpass.vue")
        }
      ]
    },
  //children是這個頁面的子頁面
	//還沒有子頁面的話先把children註解

  現在可用路徑連到vue檔


  //正式開始轉換!!

4. 在<script>中引用header及footer

	import Header from '/src/components/Header.vue';
	import Footer from '/src/components/Footer.vue';

	import之後即可在template中插入<Header/> 和 <Footer/> 使用

5. 把之前做的html body內的內容貼到vue檔的template內

把重複的地方或會變動的地方整理到<script>裡面 用const定義變數

如果是原始型別 就用 const XXX = ref( ); 
如果是陣列、物件 就用 const XXX = reactive({ }) or reactive([]); 


6. 把該頁面的scss檔貼到<style></style>中   
<style>要改成<style lang="scss">
