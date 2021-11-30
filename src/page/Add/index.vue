<template>
  <!-- 图表操作区域 -->
  <div>
    <div style="margin-bottom:20px">
      <span>布局选择</span>
      <el-radio-group v-model="layout" @change="layoutChange">
        <el-radio-button label="two">两个</el-radio-button>
        <el-radio-button label="three">三个</el-radio-button>
      </el-radio-group>
    </div>
    <div class="limit">
      <el-select v-model="value" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :popper-append-to-body="false"
        >
        </el-option>
      </el-select>
      <el-input size="mini" v-model="dataLength"></el-input>
    </div>
    <el-form ref="form" :model="form" label-width="100px" size="mini">
      <el-form-item label="图表类型">
        <el-radio-group v-model="form.chartType">
          <el-radio
            :label="item.type"
            v-for="item in chartsType"
            :key="item.id"
          >
            {{ item.name }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="图表色系">
        <el-radio-group v-model="form.colorMoudle">
          <el-radio
            :label="item.type"
            v-for="item in chartsColorMoudle"
            :key="item.id"
          >
            {{ item.name }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="自定义色系">
        <el-input v-model="color"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
let chartsType = [
    {
      id: 1,
      type: "bar",
      name: "柱状图"
    },
    {
      id: 2,
      type: "line",
      name: "折线图"
    },
    {
      id: 3,
      type: "pie",
      name: "饼图"
    }
  ],
  chartsColorMoudle = [
    {
      id: 1,
      type: "moudle1",
      name: "橙色系"
    },
    {
      id: 2,
      type: "moudle2",
      name: "粉色系"
    },
    {
      id: 3,
      type: "moudle3",
      name: "蓝色系"
    }
  ];
export default {
  name: "Add",
  props: {},
  data() {
    return {
      chartsType, // 图表类型
      chartsColorMoudle, // 图标色系
      layout: "two", // 布局
      color: "", // 自定义颜色
      dataLength: "", // 默认展示条数
      form: {
        chartType: "bar",
        colorMoudle: "moudle1",
        color: [],
        limitInfo: {}
      },
      value: "front",
      options: [
        {
          value: "front",
          label: "前"
        },
        {
          value: "later",
          label: "后"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      let limitType = {
        type: this.value,
        limit: this.dataLength
      }; // 展示数据条数设置
      this.form.color = this.color ? this.color.split(",") : [];
      this.form.limitInfo =
        this.dataLength && this.dataLength > 0 ? limitType : {};
      this.$emit("addChart", this.form);
    },
    // 布局设置
    layoutChange() {
      this.$emit("layout", this.layout);
    }
  }
};
</script>
<style lang="less" scoped>
.el-radio-group {
  .el-radio {
    display: block;
    padding: 0;
    margin: 0;
  }
}
.limit {
  display: flex;
  margin-bottom: 20px;
  .el-select {
    width: 80px;
  }
}
</style>
