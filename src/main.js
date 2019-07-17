import Vue from "vue";
import App from "./App.vue";
import router from "@/routes";
import store from "@/store";
import { i18n } from "@/translations";

Vue.config.productionTip = false;

// Setting multi layout
import defaultLayout from "@/layouts/default.vue";
import adminLayout from "@/layouts/admin.vue";
Vue.component("default-layout", defaultLayout);
Vue.component("admin-layout", adminLayout);

// Setup top progress bar
import NProgress from "nprogress"; // Progress Bar
import "nprogress/nprogress.css"; // Progress css
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

// Setup main ui
import "ant-design-vue/dist/antd.css";
import {
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Rate,
  Checkbox,
  Select,
  Form,
  Row,
  Col,
  Comment,
  Collapse,
  Modal,
  Table,
  Tabs,
  Icon,
  Badge,
  Popover,
  Pagination,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Affix,
  Tag,
  Divider,
  BackTop,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  message,
  notification
} from "ant-design-vue";

Vue.use(Layout);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(Switch);
Vue.use(Radio);
Vue.use(Rate);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Form);
Vue.use(Row);
Vue.use(Col);
Vue.use(Comment);
Vue.use(Collapse);
Vue.use(Modal);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Badge);
Vue.use(Popover);
Vue.use(Pagination);
Vue.use(Dropdown);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Breadcrumb);
Vue.use(Steps);
Vue.use(Spin);
Vue.use(Menu);
Vue.use(Drawer);
Vue.use(Tooltip);
Vue.use(Alert);
Vue.use(Affix);
Vue.use(Tag);
Vue.use(Divider);
Vue.use(BackTop);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Skeleton);
Vue.use(Popconfirm);
Vue.use(notification);

Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
