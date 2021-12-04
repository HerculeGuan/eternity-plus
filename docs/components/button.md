---
title: Button 按钮
---

# Button 按钮

### 基础用法

:::demo 使用`type` `round`来设置按钮样式

```vue
<template>
  <div>
    <et-button>默认按钮</et-button>
    <et-button type="primary">主要按钮</et-button>
    <et-button type="success">成功按钮</et-button>
    <et-button type="warning">警告按钮</et-button>
    <et-button type="danger">危险按钮</et-button>
  </div>
  <div>
    <et-button round>默认按钮</et-button>
    <et-button type="primary" round>主要按钮</et-button>
    <et-button type="success" round>成功按钮</et-button>
    <et-button type="warning" round>警告按钮</et-button>
    <et-button type="danger" round>危险按钮</et-button>
  </div>
</template>
```

:::

### 禁用状态

:::demo 使用`disabled`属性禁用按钮

```vue
<template>
  <div>
    <et-button disabled>默认按钮</et-button>
    <et-button type="primary" disabled>主要按钮</et-button>
    <et-button type="success" disabled>成功按钮</et-button>
    <et-button type="warning" disabled>警告按钮</et-button>
    <et-button type="danger" disabled>危险按钮</et-button>
  </div>
  <div>
    <et-button round disabled>默认按钮</et-button>
    <et-button type="primary" round disabled>主要按钮</et-button>
    <et-button type="success" round disabled>成功按钮</et-button>
    <et-button type="warning" round disabled>警告按钮</et-button>
    <et-button type="danger" round disabled>危险按钮</et-button>
  </div>
</template>
```

:::

### 加载状态

:::demo 使用`loading`属性设置按钮加载中

```vue
<template>
  <div>
    <et-button loading>默认按钮</et-button>
    <et-button type="primary" loading>主要按钮</et-button>
    <et-button type="success" loading>成功按钮</et-button>
    <et-button type="warning" loading>警告按钮</et-button>
    <et-button type="danger" loading>危险按钮</et-button>
  </div>
</template>
```

:::

### 图标按钮

:::demo 使用`icon`属性添加图标按钮

```vue
<template>
  <div>
    <et-button icon="setting">设置</et-button>
    <et-button icon="left">上一页</et-button>
    <et-button icon="right" icon-position="right">上一页</et-button>
  </div>
</template>
```

:::

<!-- ### 按钮组

:::demo 使用`button-group`标签

```vue
<template>
  <div>
    <et-button-group>
      <et-button icon="left">上一页</et-button>
      <et-button>更多</et-button>
      <et-button icon="right" icon-position="right">下一页</et-button>
    </et-button-group>
  </div>
</template>
```

::: -->

### Attributes

|     参数     |  类型   | 默认值  |                 可选值                 |     说明     |
| :----------: | :-----: | :-----: | :------------------------------------: | :----------: |
|     type     | String  |   --    | `primary` `success` `warning` `danger` |   按钮类型   |
|    round     | Boolean | `false` |                   --                   | 是否圆角按钮 |
|   loading    | Boolean | `false` |                   --                   |  是否加载中  |
|     icon     | String  |   --    |        `el-icon`的`name`可选值         |   按钮图标   |
| iconPosition | String  | `left`  |             `left` `right`             |   图标位置   |
