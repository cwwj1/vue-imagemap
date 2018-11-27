<template>
  <div id="app">
    <!-- <form action="http://www.xiaohuangren.top:3003/uploads" method="post" enctype="multipart/form-data">
        <input type="file" name="file"/>
        <input type="submit" value="ok"/>
    </form> -->


    <div class="upload_warp_left" @click="fileClick">
      点击上传
    </div>
    <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
    <!-- <img :src="testImg"/> -->
    <div class="upload_warp_img" v-if="imgList.length!=0">
      <div class="upload_warp_img_div" v-for="(item,index) in imgList"
             :key="index"
             >
        <img src="http://h0.hucdn.com/open/201843/78fd74d6f6b33cb1_40x40.png" class="img-del" @click="fileDel(index)">
        <img class="small-img" :src="item.imgUrl">
        <!-- <img class="small-img" :src="item.file.src"> -->
        <div class="img-map-text" @click="doImgMap(item.imgUrl)">点击绘制热点</div>
        <!-- <div class="img-map-text" @click="doImgMap(item.file.src)">点击绘制热点</div> -->
      </div>
    </div>

    <image-map 
          class="img-map-contain"
          v-if="this.image"
          :image="image"
          :zones="zones"
          @add="add"
          @change="change"
          @remove="remove"
          @close="close"
          ></image-map>
  </div>
</template>

<script>
import imageMap from './components/imageMap'
import BaseService from "./assets/BaseService"

export default {
  name: 'App',
  components: {
    imageMap,
  },
  data () {
    return {
      imgList: [],
      testImg: '',

      image: '',
      zones: [
          {
              topPer: 0.3076,                 // 顶部距离
              leftPer: 0.1777,                // 左边距离
              widthPer: 0.1521,               // 热区宽度
              heightPer: 0.3559,              // 热区高度
              link: "http://m.beibei.com",    // 热区链接
              // target: 1                       // 跳转方式，0 - 当前页面打开，1 - 新页面打开
          }
      ],
    }
  },
  methods: {
    fileClick() {
      document.getElementById('upload_file').click();
    },
    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = ''
    },
    fileList(fileList) {
      console.log('fileList.files', fileList.files);
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        console.log(files[i].type);
        if (files[i].type != '') { // image/png
          this.fileAdd(files[i]);
        } else {
          alert('不支持上传文件夹格式');
        }
      }
    },
    async fileAdd(file) {
      // 上传图片服务
      const formDate = new FormData();
      formDate.append("file", file);
      const response = await this.uploadFilds(formDate);
      console.log('response', response);

      const filename = response.data.filename;
      console.log('filename', filename);
      const imgUrl = 'http://www.xiaohuangren.top:8080/public/uploads/' + filename;
      console.log('imgUrl', imgUrl);
      // this.testImg = imgUrl;
      this.imgList.push({
        imgUrl,
      });

      // 本地把图片处理为base64
      // let reader = new FileReader();
      // let image = new Image();
      // let _this=this;

      // reader.readAsDataURL(file);
      // reader.onload = function () {
      //   file.src = this.result;
      //   image.onload=function(){
      //     let width = image.width;
      //     let height = image.height;
      //     file.width=width;
      //     file.height=height;
      //     _this.imgList.push({
      //       file
      //     });
      //     console.log( _this.imgList);
      //   };
      //   image.src= file.src;
      // }


    },
    fileDel(index) {
      this.imgList.splice(index, 1);
    },
    doImgMap(img) {
      this.image = img;
    },

    uploadFilds(formDate) {
      return BaseService.post("https://www.xiaohuangren.top:3003/uploads", formDate);
    },


    add(zone) {
      console.log('成功添加热区：', zone);
    },

    change(zones) {
      console.log('热区发生变化：', zones);
    },

    remove(index) {
      console.log('成功删除热区：', index);
    },
    close(zones) {
      this.image = '';
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.upload_warp_left {
  padding: 0.4em 1.6em;
  width: 80px;
  border: 1px dashed #999;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}
.upload_warp_img {
    border-top: 1px solid #D2D2D2;
    padding: 14px 0 0 14px;
    overflow: hidden
  }
.upload_warp_img_div {
  position: relative;
  border: 1px solid #ccc;
  margin: 0px 30px 10px 0px;
  float: left;
  display: table-cell;
  text-align: center;
  background-color: #eee;
  cursor: pointer;
}
.img-del {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
}
.small-img {
  width: 100px;
  /* height: 150px; */
}
.img-map-text {
    color: #fff;
    background: #948f8f;
}

.img-map-contain {
  /* max-width: 762.45px;
  max-height: 697.85px;
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: #fff;
  transform: translateX(-50%) translateY(-50%); */
}

</style>
