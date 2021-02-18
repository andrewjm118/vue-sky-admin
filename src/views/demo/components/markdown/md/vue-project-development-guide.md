## Vue - 项目开发规范

[参考地址]: https://cn.vuejs.org/v2/style-guide/index.html#%E8%A7%84%E5%88%99%E5%BD%92%E7%B1%BB	"风格指南"



## 组件文件命名

**文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。**

> 单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

正确用法

反例

```
components/
|- mycomponent.vue

components/
|- myComponent.vue
```



好例子

```javascript
components/
|- MyComponent.vue

components/
|- my-component.vue
```



## 基础组件命名

**应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V`。**



反例

```vue
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

好例子

```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue

components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue

components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```
