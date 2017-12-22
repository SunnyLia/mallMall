// 根据state的数据，筛选或暴露一些新数据
export const searchLists = state => state.searchLists //搜索列表

export const isResults = state => state.isResults //有无搜索数据

export const headerHeight = state => state.headerHeight //头部高度

// export const categoryLists = state => state.categoryLists //分类列表

export const categorys = state => state.categorys //分类

export const userInfo = state => state.userInfo //用户信息

export const isLogin = state => state.isLogin //是否登录

export const provinces = state => state.provinces //省PROVINCES
export const citys = state => state.citys //市CITYS
export const districts = state => state.districts //区DISTRICTS

export const cartLists = state => state.cartLists //购物车列表

export const cuponeLists = state => state.cuponeLists //优惠券列表

export const addressLists = state => state.addressLists //地址列表

export const detailInfos = state => state.detailInfos //商品详情

export const detailTabs = state => state.detailTabs //商品详情/评论/讨论

export const isFixedHeader = state => state.isFixedHeader

export const isShowSearchBar = state => state.isShowSearchBar

export const isShowMask = state => state.isShowMask

export const sliders = state => state.sliders

export const hotProducts = state => state.hotProducts//热门商品

export const hotShops = state => state.hotShops//热门店铺

export const orderLists = state => state.orderLists//订单列表

export const products = state => state.products

export const  pageNum = state => state.pageNum//加载页码

export const busy = state => state.busy//是否加载

export const isShowLoadingTips = state => state.isShowLoadingTips//正在加载

export const isShowLoadedTips = state => state.isShowLoadedTips//加载完毕

export const shopInfo = state => state.shopInfo//店铺信息