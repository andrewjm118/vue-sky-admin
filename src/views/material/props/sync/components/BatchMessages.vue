<!--
 * @Description: 批量发送短信
 * @Author: andrewjm
 * @Date: 2021-04-16 16:49:14
 * @LastEditors: andrewjm
-->
<template>

  <el-dialog
    title="批量发送短信"
    :visible.sync="statusValue"
    width="80%"
    :before-close="handleClose"
  >
    <el-table
      :data="data"
      style="width: 100%"
    >
      <el-table-column
        prop="addressee"
        label="收信人"
        width="180"
      />
      <el-table-column
        prop="phone"
        label="手机号码"
        width="180"
      />
      <el-table-column
        prop="paymentCodesNumber"
        label="支付码数量"
      />
      <el-table-column
        prop="paymentCodeNotSent"
        label="未发送的支付码"
      />
      <el-table-column
        prop="paymentCodeSent"
        label="已发送的支付码"
      />
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'batchmessages',
  props: {
    statusValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: [
        {
          addressee: '韩亚萍',
          phone: 13718216313,
          paymentCodesNumber: '100',
          paymentCodeNotSent: 'a23r56、123d56、456fgc',
          paymentCodeSent: '123564、123564、123564、123564、123564、123564'
        },
        {
          addressee: '韩亚萍',
          phone: 13718216313,
          paymentCodesNumber: '100',
          paymentCodeNotSent: 'a23r56、123d56、456fgc',
          paymentCodeSent: '123564、123564、123564、123564、123564、123564'
        },
        {
          addressee: '韩亚萍',
          phone: 13718216313,
          paymentCodesNumber: '100',
          paymentCodeNotSent: 'a23r56、123d56、456fgc',
          paymentCodeSent: '123564、123564、123564、123564、123564、123564'
        },
        {
          addressee: '韩亚萍',
          phone: 13718216313,
          paymentCodesNumber: '100',
          paymentCodeNotSent: 'a23r56、123d56、456fgc',
          paymentCodeSent: '123564、123564、123564、123564、123564、123564'
        },
        {
          addressee: '韩亚萍',
          phone: 13718216313,
          paymentCodesNumber: '100',
          paymentCodeNotSent: 'a23r56、123d56、456fgc',
          paymentCodeSent: '123564、123564、123564、123564、123564、123564'
        },
        {
          addressee: '韩亚萍',
          phone: 13718216313,
          paymentCodesNumber: '100',
          paymentCodeNotSent: 'a23r56、123d56、456fgc',
          paymentCodeSent: '123564、123564、123564、123564、123564、123564'
        },
        {
          addressee: '韩亚萍',
          phone: 13718216313,
          paymentCodesNumber: '100',
          paymentCodeNotSent: 'a23r56、123d56、456fgc',
          paymentCodeSent: '123564、123564、123564、123564、123564、123564'
        },
        {
          addressee: '韩亚萍',
          phone: 13718216313,
          paymentCodesNumber: '100',
          paymentCodeNotSent: 'a23r56、123d56、456fgc',
          paymentCodeSent: '123564、123564、123564、123564、123564、123564'
        },
        {
          addressee: '韩亚萍',
          phone: 13718216313,
          paymentCodesNumber: '100',
          paymentCodeNotSent: 'a23r56、123d56、456fgc',
          paymentCodeSent: '123564、123564、123564、123564、123564、123564'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    handleClose() {
      this.$emit('update:statusValue', false)
    },
    handleConfirm() {
      this.$emit('update:statusValue', false)
    },
    handleCancel() {
      this.$emit('update:statusValue', false)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
