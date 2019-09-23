
import Taro, { Component } from "@tarojs/taro"
import { inject, observer } from "@tarojs/mobx"


@inject("counterStore")
@observer
export class Comp extends Component {
  constructor() {
    super()
    console.log("init parent");
  }

  get name() {
    return "test name show"
  }
}
