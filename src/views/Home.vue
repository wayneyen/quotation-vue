<template>
    <div id="app">
        <img alt="Vue logo" src="../assets/logo.png">

          這是首頁
        <draggable class="drag-list">
        <div class="con">
          <i class="oin-icon oin_lines"/>
          <div class="name">
            項目Ａ
          </div>
        </div>
        <div class="con">
          <i class="oin-icon oin_lines"/>
          <div class="name">
            項目Ｂ
          </div>
        </div>
      </draggable>
    </div>
</template>

<script>

  import draggable from 'vuedraggable'
  export default {
      name: 'Home',
      components: {
          draggable,
      },
      data() {
          return {

          }
      },
      mounted() {

      },
      methods: {
      }
  }
</script>


