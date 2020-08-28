<template>
    <div id="app">
        <div class="container-fluid">
            <div class="main-contain">
                <div class="row">
                    <div class="col-12">
                        <input class="form-control" type="text" placeholder="輸入公司名稱">
                    </div>
                    <div class="col-12 col-md-6">
                        <input class="form-control" type="text" placeholder="輸入聯絡人">
                    </div>
                    <div class="col-12 col-md-6">
                        <input class="form-control" type="tel" placeholder="輸入電話">
                    </div>
                    <div class="col-12 col-md-6">
                        <input class="form-control" type="tel" placeholder="輸入統編">
                    </div>
                    <div class="col-12 col-md-6">
                        <input class="form-control" type="tel" placeholder="輸入日期">
                    </div>
                </div>
            </div>
            <div class="main-contain">
                <input class="form-control" type="text" placeholder="輸入報價單名稱">
                <div class="title-gray">
                    <div class="w">項次</div>
                    <div class="w4">項目名稱</div>
                    <div class="w2">數量</div>
                    <div class="w">單位</div>
                    <div class="w3">單價</div>
                    <div class="w3">小計</div>
                    <div class="w4">備註說明</div>
                </div>
                <draggable class="drag-list">
                    <div class="con">
                        <input class="form-control w" type="tel">
                        <input class="form-control w4" type="text" placeholder="輸入項目名稱">
                        <input class="form-control w2" type="tel">
                        <input class="form-control w" type="text">
                        <input class="form-control w3" type="text">
                        <input class="form-control w3" type="text" disabled>
                        <input class="form-control w4" type="text">
                    </div>
                    <div class="con">
                        <input class="form-control w" type="tel">
                        <input class="form-control w4" type="text" placeholder="輸入項目名稱">
                        <input class="form-control w2" type="tel">
                        <input class="form-control w" type="text">
                        <input class="form-control w3" type="text">
                        <input class="form-control w3" type="text" disabled>
                        <input class="form-control w4" type="text">
                    </div>
                </draggable>
                <textarea class="form-control mt-4" rows="3" placeholder="輸入備註"></textarea>
            </div>
            <div class="main-contain">
                <div class="row">
                    <div class="col-12">
                        <input class="form-control" type="text" placeholder="輸入客戶名稱">
                    </div>
                    <div class="col-12 mt-2">
                        <input class="form-control" type="text" placeholder="輸入客戶電話">
                    </div>
                </div>
            </div>
        </div>

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


