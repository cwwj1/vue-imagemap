<template>
  <div class="modal-wrap">
      <div class="mask"></div>

      <div class="content">
          <header class="title">热点编辑</header>

            <div class="modal-info">
                <p>自定义配置</p>
                <div class="link-wrap">
                    <span>跳转链接</span>
                    <input ref="newLink" class="" type="text" :value="modalSetting.link"/>
                </div>

                <!-- <div class="link-wrap">
                    <span>跳转方式</span>
                    <input class="" type="text" />
                </div> -->
            </div>

            <div class="modal-info">
                <p>基本信息</p>
                <div class="link-wrap">
                    <span>宽度</span>
                    <input ref="newWidthPer" class="" type="text" :value="modalSetting.widthPer"/>
                </div>

                <div class="link-wrap">
                    <span>高度</span>
                    <input ref="newHeightPer" class="" type="text" :value="modalSetting.heightPer"/>
                </div>

                <div class="link-wrap">
                    <span>top</span>
                    <input ref="newTopPer" class="" type="text" :value="modalSetting.topPer"/>
                </div>

                <div class="link-wrap">
                    <span>left</span>
                    <input ref="newLeftPer" class="" type="text" :value="modalSetting.leftPer"/>
                </div>
            </div>

            <div class="btn-wrap">
                <span class="no" @click="closeModal">取消</span>
                <span class="yes" @click="saveChange">保存</span>
            </div>
      </div>

      
        

  </div>
</template>

<script>

export default {
    name: 'modal',
    props: [
      'modalSetting',
      'modalIndex'
    ],
    computed: {
        
    },
    data () {
        return {
            
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },

        saveChange() {
            let newLink = this.$refs.newLink.value;
            let newWidthPer = Number(this.$refs.newWidthPer.value);
            let newHeightPer = Number(this.$refs.newHeightPer.value);
            let newTopPer = Number(this.$refs.newTopPer.value);
            let newLeftPer = Number(this.$refs.newLeftPer.value);

            if (newTopPer < 0) {
                newTopPer = 0;
            }

            if (newTopPer + this.modalSetting.heightPer >= 1) {
                newTopPer = 1 - this.modalSetting.heightPer;
            }

            if (newLeftPer < 0) {
                newLeftPer = 0;
            }

            if (newLeftPer + this.modalSetting.leftPer >= 1) {
                newLeftPer = 1 - this.modalSetting.leftPer;
            }

            let perInfo = {
                link: newLink,
                topPer: newTopPer,
                leftPer: newLeftPer,
                widthPer: newWidthPer,
                heightPer: newHeightPer
            }
            this.$emit('saveInfo', perInfo, this.modalIndex);
            this.$emit('closeModal');
        },
    },
    directives:{
      
  }
}
</script>

<style scoped>
.modal-wrap {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    pointer-events: none;
}

.content {
    width: 560px;
    height: 620px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #fff;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
}

.title {
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    width: 100%;
    padding: 0 1.5em;
    box-sizing: border-box;
    position: relative;
    background-color: #f5f5f5;
    color: #666666;
}

.link-wrap {
    margin: 20px auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

input {
    box-sizing: border-box;
    z-index: 2;
    font-size: 14px;
    padding: 0 1em;
    width: 70%;
    background: #FFF;
    border: 1px #eeeeee solid;
    border-radius: 3px;
    height: 42px;
    line-height: 42px;
    color: #999999 !important;
    outline: none;
    -webkit-appearance: none;
}

.btn-wrap {
    height: 50px;
    width: 100%;
}
.btn-wrap span {
    display: inline-block;
    line-height: 50px;
    width: 100px;
    border-radius: 10px;
}
.btn-wrap .no {
    background: #ccc;
}
.btn-wrap .yes {
    background: #73b777;
}
</style>
