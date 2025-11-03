/**
 * 全局配置文件
 */
export default {
  title: '平台自营',
  logo: 'LJ',
  key: 'saber', //配置主键,目前用于存储
  indexTitle: '平台自营进线系统',
  clientId: 'saber3', // 客户端id
  clientSecret: 'saber3_secret', // 客户端密钥
  tenantMode: false, // 是否开启租户模式
  tenantId: '000000', // 管理组租户编号
  captchaMode: false, // 是否开启验证码模式
  switchMode: false, // 是否开启登录切换角色部门
  lockPage: '/lock',
  tokenTime: 3000,
  tokenHeader: 'Blade-Auth',
  //HTTP状态码白名单
  statusWhiteList: [],
  //配置首页不可关闭
  setting: {
    sidebar: 'vertical',
    tag: true,
    debug: true,
    collapse: true,
    search: true,
    color: true,
    lock: true,
    screenshot: true,
    fullscreen: true,
    theme: true,
    menu: true,
  },
  //首页配置
  fistPage: {
    name: '首页',
    path: '/wel/index',
  },
  //配置菜单的属性
  menu: {
    iconDefault: 'icon-caidan',
    label: 'name',
    path: 'path',
    icon: 'source',
    children: 'children',
    query: 'query',
    href: 'path',
    meta: 'meta',
  },
  //水印配置
  watermark: {
    mode: false,
    text: '平台自营',
  },
  //oauth2配置
  oauth2: {
    // 是否开启注册功能
    registerMode: true,
    // 使用后端工程 @org.springblade.test.Sm2KeyGenerator 获取
    publicKey: '04e610c0b4cd32ff3cc5222d0a9ba3a5c7130f1468efc9decd1070a37237533484c4b5624a8095dcade1ed0f8569b0ba43148af1806c8f9a573fb234a61ed6bc47',
    // 第三方系统授权地址
    authUrl: 'http://localhost/blade-auth/oauth/render',
    // 单点登录系统认证
    ssoMode: false, // 是否开启单点登录功能
    ssoBaseUrl: 'http://localhost:8100', // 单点登录系统地址(cloud端口为8100,boot端口为80)
    ssoAuthUrl: '/oauth/authorize?client_id=saber3&response_type=code&redirect_uri=', // 单点登录授权地址
    ssoLogoutUrl: '/oauth/authorize/logout?redirect_uri=', // 单点登录退出地址
    redirectUri: 'http://localhost:2888/login', // 单点登录回调地址(Saber服务的登录界面地址)
  },
  //设计器配置
  design: {
    // 流程设计器类型(true->nutflow,false->flowable)
    designMode: true,
    // 流程设计器地址(flowable模式)
    designUrl: 'http://localhost:9999',
    // 报表设计器地址(cloud端口为8108,boot端口为80)
    reportUrl: 'http://localhost:8108/ureport',
    // 规则设计引擎地址
    edgeUrl: 'http://localhost:1880',
  },
};
