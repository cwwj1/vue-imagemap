<template>
  <div class="item-wrap" :style="styleObject" v-dragItem>
      <!-- <div class="item-wrap" :style="styleObject"> -->
        

        <!--  -->
        <div class="item-box" v-changeSize @dblclick.stop.prevent="setInfo">

            <div class="item-index">{{index + 1}}</div>

            <!-- <div class="item-tip">
                <p v-if="setting.link">已设置信息</p>
                <p v-if="!setting.link">双击设置信息</p>
            </div> -->
            <p class="item-tip" v-if="setting.link">已配置</p>

            <div class="item-delete" @click.stop.prevent="delItem">X</div>

            <div class="hz-u-square hz-u-square-tl" data-pointer="dealTL"></div>
            <div class="hz-u-square hz-u-square-tc" data-pointer="dealTC"></div>
            <div class="hz-u-square hz-u-square-tr" data-pointer="dealTR"></div>
            <div class="hz-u-square hz-u-square-cl" data-pointer="dealCL"></div>
            <div class="hz-u-square hz-u-square-cr" data-pointer="dealCR"></div>
            <div class="hz-u-square hz-u-square-bl" data-pointer="dealBL"></div>
            <div class="hz-u-square hz-u-square-bc" data-pointer="dealBC"></div>
            <div class="hz-u-square hz-u-square-br" data-pointer="dealBR"></div>

        </div>

        <!-- <modal v-if="showModal"></modal> -->
        
  </div>
</template>

<script>
import dragItem from '../directive/dragItem' 
import changeSize from '../directive/changeSize'
// import modal from './modal';

export default {
    name: 'zone',
    props: [
      'isEdit',
      'config',
      'index',
      'setting'
    ],
    data() {
        return {
            showModal: false,
        }
    },
    components: {
        // modal,
    },
    computed: {
        styleObject() {
            return {
                'top': this.getZoneStyle(this.setting.topPer),
                'left': this.getZoneStyle(this.setting.leftPer),
                'width': this.getZoneStyle(this.setting.widthPer),
                'height': this.getZoneStyle(this.setting.heightPer),
            }
        }
    },
    methods: {
        getZoneStyle(val) {
            return `${(val || 0) * 100}%`;
        },

        changeInfo(info = {}, ) {
            console.log(22222);
            let index = this.index;
            this.$emit('changeInfo', info, index);
        },

        delItem() {
            this.$emit('removeItem', this.index);
        },

        setInfo() {
            this.$emit('setItem', this.setting, this.index);
        },
    },
    directives:{
      dragItem:{
          bind: dragItem,
        //   unbind: function (el) {
        //     el.$destroy();
        //   }
      },
      changeSize: {
          bind: changeSize,
        //   unbind: function (el) {
        //     el.$destroy();
        //   }
      },
  }
}
</script>

<style scoped>
.item-wrap {
    background-color: #3738508a;
    font-size: 12px;
    cursor: pointer;
    color: #fff;
    opacity: .8;
    user-select: none;
}

.item-box {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 6px #000;
    cursor: pointer;
    color: #fff;
    user-select: none;
}

.item-index {
    display: inline-block;
    background-color: #000;
    top: 0;
    left: 0;
    position: absolute;
}

.item-tip {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-40%) translateY(-50%);
}

.item-delete {
    top: 0;
    right: 0;
    position: absolute;
}

.hz-u-square {
    width: 8px;
    height: 8px;
    opacity: .8;
    position: absolute;
}
.hz-u-square:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: #fff;
}
.hz-u-square-tl {
    top: -4px;
    left: -4px;
    cursor: nw-resize;
}
.hz-u-square-tc {
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    cursor: n-resize;
}
.hz-u-square-tr {
    top: -4px;
    right: -4px;
    cursor: ne-resize;
}
.hz-u-square-cl {
    top: 50%;
    left: -4px;
    transform: translateY(-50%);
    cursor: w-resize;
}
.hz-u-square-cr {
    top: 50%;
    right: -4px;
    transform: translateY(-50%);
    cursor: w-resize;
}
.hz-u-square-bl {
    bottom: -4px;
    left: -4px;
    cursor: sw-resize;
}
.hz-u-square-bc {
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    cursor: s-resize;
}
.hz-u-square-br {
    bottom: -4px;
    right: -4px;
    cursor: se-resize;
}
</style>
