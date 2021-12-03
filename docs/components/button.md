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

### Attributes
