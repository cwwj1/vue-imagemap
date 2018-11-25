<template>
  <div class="dialog-wrap" v-if="image">
    <div class="image-mask"></div>
    <div class="image-wrap">

      <div class="title">绘制热点</div>

      <div class="image-content">
        <img class="image" :src="image"/>

        <div class="area-wrap" ref="areaWrap" v-addItem>
          <zone v-for="(item, index) in zones" :key="index"
                class="area-item"
                :isEdit="isEdit"
                :config="config"
                :index="index"
                :setting="zones[index]"
                @removeItem="removeItem"
                @changeInfo="changeInfo"
                @setItem="setItem"
                ref="index">
          </zone>
        </div>
      </div>

      <div class="image-close"><span @click="closeImgMap">关闭</span></div>

      

      <modal v-if="showModal" 
            :modalSetting="modalSetting"
            :modalIndex="modalIndex"
            @closeModal="closeModal"
            @saveInfo="changeInfo"></modal>

    </div>
  </div>
  
</template>

<script>
import zone from './zone';
import _ from '../assets/util.js';

import addItem from '../directive/addItem'
import modal from './modal';

export default {
  name: 'imageMap',
  components: {
    zone,
    modal
  },
  props: [
    'image',
    'zones',
    'isEdit',
    'config'
  ],
  data () {
    return {
      showModal: false,
      modalSetting: {},
      modalIndex: 0,
    }
  },
  methods: {
    addItem(setting = {}) {
        this.zones.push(setting);
        this.$emit('add', setting);

        this.hasChange();
    },

    setItem(setting, index) {
      this.modalSetting = setting;
      this.modalIndex = index;
      this.showModal = true;
      console.log('setting', setting);
      
    },

    closeModal() {
      this.showModal = false;
    },

    changeItem(info = {}, index = this.zones.length - 1) {
        console.log('改变前zones', this.zones);
        this.$nextTick(() => {
          Object.assign(this.zones[index], info);
        })
        
        this.hasChange();
    },

    hasChange() {
      this.$emit('change', this.zones);
    },

    removeItem(index) {
      this.zones.splice(index, 1);
      this.$emit('remove', index);
      this.hasChange();
    },

    closeImgMap() {
      this.$emit('close', this.zones);
    },

    changeInfo(info, index) {
      console.log('changeInfo');
      this.changeItem(info, index);
    },
  },
  directives:{
      addItem:{
          bind: addItem,
          // unbind: function (el) {
          //   el.$destroy()
          // }
      }
  }
}
</script>

<style scoped>
.dialog-wrap {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
}
.image-mask {
      width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
}
.image-wrap {
  width: 672px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: #fff;
}

.title {
  background-color: #f5f5f5;
    color: #666666;
    font-size: 16px;
    line-height: 50px;
    padding: 0 1.5em;
}

.image-content {
  position: relative;
  width: 90%;
  /* height: 100%; */
  margin: 20px auto;
}

.image {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  user-select: none;
}

.area-wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: crosshair;
}

.area-item {
  position: absolute;
  display: block;
}

.image-close {
    font-size: 13px;
    line-height: 50px;
    height: 50px;
    background: #f5f5f5;
    color: #aaaaaa;
    padding: 0 1.5em;
}
.image-close span {
      display: inline-block;
    width: 50px;
    text-align: center;
    background-color: #bbbbbb;
    color: #ffffff;
    border-radius: 5px;
    line-height: 30px;
    float: right;
    margin-top: 10px;
}


</style>
