<template>
  <div :class="btnclass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "x-btn",
  computed:{
      btnclass(){
          return this.type=="default"?'btn default':this.type=="primary"?"btn primary":this.type=="danger"?"btn danger":"btn"
      }
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style scoped>
.btn {
  width: 100px;
  height: 40px;
  color: #fff;
  text-align: center;
  line-height: 40px;
}
.default{
    background:#ccc;
}
.primary{
    background: yellow;
}
.danger{
    background: red;
}

</style>
