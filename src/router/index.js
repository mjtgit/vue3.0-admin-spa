import Vue from 'vue'
import Router from 'vue-router'

/* layout */
import Layout from '@/views/layout/Layout';

/* login */
const Login = require('@/views/login/index.vue');
const authRedirect = require('@/views/login/authredirect.vue');
const sendPWD = require('@/views/login/sendpwd.vue');
const reset = require('@/views/login/reset.vue');

/* error page */
const Err404 = require('@/views/error/404.vue');
const Err401 = require('@/views/error/401.vue');

const PersonalInfo = require('@/views/index/personalInfo.vue');
/* example*/
const TableList = require('@/views/example/tableList.vue');

// 豆瓣电影
const NewMovie = require('@/views/movie/newMovie.vue');
const MovieSearch = require('@/views/movie/movieSearch.vue');

const Form = require('@/views/example/form.vue');
const Tinymce = require('@/views/example/tinymce.vue');
const Mixin = require('@/views/example/mixin.vue');

/* 系统管理*/
const PermissionsManage = require('@/views/systemSet/permissionsManage.vue');
/* 学生管理*/
const StudentList = require('@/views/student/studentList.vue');
const StudentAdd = require('@/views/student/studentAdd.vue');
const StudentUpdate = require('@/views/student/studentUpdate.vue');

Vue.use(Router)
 /**
  * hidden : true不显示在菜单栏
  * redirect : noredirect 为不重定向
  * noDropdown : true 不显示子菜单
  * meta : { role: ['admin'] }  will control the page role
  **/

const constantRouterMap = [
  { path: '/login', components: Login, hidden: true },
  { path: '/authredirect', components: authRedirect, hidden: true },
  { path: '/sendpwd', components: sendPWD, hidden: true },
  { path: '/reset', components: reset, hidden: true },
  { path: '/404', components: Err404, hidden: true },  //假地址时重定向
  { path: '/401', components: Err401, hidden: true },  //无权限时重定向
  {
    path: '/',
    redirect: '/index/personalInfo',  //重定向到默认首页
    hidden: true,
  },
  {
    path: '/index',
    component: Layout,
    redirect: 'noredirect',
    name: '',
    noDropdown: true,
    children: [
        { path: 'personalInfo', components: PersonalInfo, name: '个人信息' }
    ]
  },
  {
    path: '/movie',
    component: Layout,
    redirect: 'noredirect',
    name: '',
    noDropdown: true,
    children: [
        { path: 'newMovie', components: NewMovie, name: '热映电影列表' },
        { path: 'movieSearch', components: MovieSearch, name: '电影搜索' }
    ]
  },
  {
    path: '/errorpage',
    component: Layout,
    redirect: 'noredirect',
    name: '错误页面',
    children: [
      { path: '401', component: Err401, name: '401' },
      { path: '404', component: Err404, name: '404' }
    ]
  },
  {
    path: '/systemSet',
    component: Layout,
    redirect: 'noredirect',
    name: '系统设置',
    children: [
      { path: 'permissionsManage', components: PermissionsManage, name: '权限管理' },
    ]
  },
  {
    path: '/studentsManage',
    component: Layout,
    redirect: 'noredirect',
    name: '学生管理',
    children: [
      { path: 'studentList', components: StudentList, name: '学生列表' },
      { path: 'studentAdd', components: StudentAdd, name: '学生添加' },
      { path: 'studentUpdate', components: StudentUpdate, name: '学生修改' },
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: '综合实例',
    children: [
      { path: 'tableList', components: TableList, name: '示例表格' },
      { path: 'form', components: Form, name: 'form表单编辑' },
      { path: 'tinymce', components: Tinymce, name: '富文本编辑器' },
      { path: 'mixin', components: Mixin, name: '小组件' },
      { path: '31', components: Form, name: '三级菜单1' },
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})
