(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{440:function(t,e,a){"use strict";a.r(e);var f=a(14),i=Object(f.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[t._v("#")]),t._v(" Diff")]),t._v(" "),e("h2",{attrs:{id:"为了优化-diff-算法-react-提出了两个假设"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为了优化-diff-算法-react-提出了两个假设"}},[t._v("#")]),t._v(" 为了优化 diff 算法，React 提出了两个假设：")]),t._v(" "),e("ul",[e("li",[t._v("两个不同类型的元素会产生出不同的树")]),t._v(" "),e("li",[t._v("开发者可以通过 key prop 来暗示哪些子元素在不同的渲染下能保持稳定")])]),t._v(" "),e("h2",{attrs:{id:"diff算法和虚拟dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff算法和虚拟dom"}},[t._v("#")]),t._v(" diff算法和虚拟dom")]),t._v(" "),e("p",[t._v("react diff算法加入了特定的策略让计算复杂度从传统的O(n^3)降低为 O(n).")]),t._v(" "),e("p",[t._v("三个核心策略：")]),t._v(" "),e("ol",[e("li",[t._v("Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计  tree diff")]),t._v(" "),e("li",[t._v("拥有相同类的两个组件 生成相似的树形结构，拥有不同类的两个组件 生成不同的树形结构。  component diff")]),t._v(" "),e("li",[t._v("对于同一层级的一组子节点，通过唯一id区分  element diff (加入key)")])]),t._v(" "),e("h2",{attrs:{id:"diff-具体优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff-具体优化"}},[t._v("#")]),t._v(" diff 具体优化")]),t._v(" "),e("p",[t._v("基于上述三个策略，React 分别对以下三个部分进行了 diff 算法优化")]),t._v(" "),e("ul",[e("li",[t._v("tree diff\n"),e("ul",[e("li",[t._v("分层比较，跨层级移动不复用")])])]),t._v(" "),e("li",[t._v("component diff")]),t._v(" "),e("li",[t._v("element diff")])]),t._v(" "),e("h4",{attrs:{id:"tree-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tree-diff"}},[t._v("#")]),t._v(" tree diff")]),t._v(" "),e("p",[t._v("React 通过 updateDepth 对虚拟 Dom 树进行层级控制，只会对相同颜色框内的节点进行比较，根据对比结果，进行节点的新增和删除。如此只需要遍历一次虚拟 Dom 树，就可以完成整个的对比。")]),t._v(" "),e("p",[t._v("如果发生跨级操作，React 是不能复用已有节点，可能会导致 React 进行大量重新创建操作，这会影响性能。所以 React 官方推荐尽量避免跨层级的操作。")]),t._v(" "),e("h4",{attrs:{id:"component-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-diff"}},[t._v("#")]),t._v(" component diff")]),t._v(" "),e("p",[t._v("React 是基于组件构建的，对于组件间的比较所采用的策略如下：")]),t._v(" "),e("p",[t._v("如果是同类型组件，首先使用 shouldComponentUpdate()方法判断是否需要进行比较，如果返回true，继续按照 React diff 策略比较组件的虚拟 DOM 树，否则不需要比较\n如果是不同类型的组件，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点")]),t._v(" "),e("ul",[e("li",[t._v("对于不同类型的组件，默认不需要进行比较操作，直接重新创建。")]),t._v(" "),e("li",[t._v("对于同类型组件， 通过让开发人员自定义shouldComponentUpdate()方法来进行比较优化，减少组件不必要的比较。如果没有自定义，shouldComponentUpdate()方法默认返回true，默认每次组件发生数据（state & props）变化时，都会进行比较。")])]),t._v(" "),e("h4",{attrs:{id:"element-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-diff"}},[t._v("#")]),t._v(" element diff")]),t._v(" "),e("p",[t._v("element diff 涉及三种操作：移动、创建、删除。对于同一层级的子节点，对于是否使用 key 分别进行讨论。")]),t._v(" "),e("ul",[e("li",[t._v("不使用key： React 对新老同一层级的子节点对比，发现新集合中的 B 不等于老集合中的 A，于是删除 A，创建 B，依此类推，直到删除 D，创建 C。这会使得相同的节点不能复用，出现频繁的删除和创建操作，从而影响性能。")]),t._v(" "),e("li",[t._v("使用key：React 首先会对新集合进行遍历，通过唯一 key 来判断老集合中是否存在相同的节点，如果没有则创建，如果有的，则判断是否需要进行移动操作。并且 React 对于移动操作也采用了比较高效的算法，使用了一种顺序优化手段，这里不做详细讨论。")])]),t._v(" "),e("h2",{attrs:{id:"如何进行-diff"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何进行-diff"}},[t._v("#")]),t._v(" 如何进行 diff")]),t._v(" "),e("p",[t._v("上面已经说完了 React 的 diff 策略和具体优化，这里简单谈一下 React 是如何应用这些策略来进行 diff ：")]),t._v(" "),e("p",[t._v("React 是基于组件构建的，首先可以将整个虚拟 DOM 树，抽象为 React 组件树（每一个组件又是由一颗更小的组件树构成，依次类推），将 React diff 策略应用比较这颗组件树，若其中某个组件需要进行比较，将这个组件看成一颗较小的组件树，继续用 React diff 策略比较这颗较小的组件树，依次类推，直到层次遍历完所有的需要比较的组件。")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("参考\nhttps://www.cnblogs.com/forcheng/p/13246874.html")])])}),[],!1,null,null,null);e.default=i.exports}}]);