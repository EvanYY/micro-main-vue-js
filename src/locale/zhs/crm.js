export default {
  Table: {
    noData: '暂无数据',
    noFilterData: '当前筛选条件下，没有匹配数据',
    noFilterDataButton: '恢复默认筛选',
    /* 我的询盘 */

    // 顶部下拉框
    myInquiry: '我的询盘',
    allInquiry: '全部询盘',
    errorOccurred: '出现错误',

    // 按钮
    selected: '已选择',
    item_customer: '项',
    item_customers: '项',
    item_clue: '项',
    item_clues: '项',
    item_inquiry: '项',
    item_inquiries: '项',
    item_inquiry_withName: '询盘',
    item_inquiries_withName: '询盘',
    item_user: '项',
    item_users: '项',
    item_role: '项',
    item_roles: '项',
    merge: '合并',
    newCompany: '新建',
    importData: '导入数据',
    filter: '筛选字段',
    exportData: '文件下载',
    audienceOptimization: '受众优化',

    // 检索
    saveSearch: '保存为常用检索',
    search: '检索',
    searchComment: '常用检索',
    searchCommon: '常用检索',
    searchName: '检索名称',
    tip_customSearch: '自定义检索',
    searchCondition: '检索条件',
    tip_addKeywords: '添加关键字',
    tip_inputNumber: '请输入数字',
    tip_selectTime: '选择时间',
    activated: '已启用',
    terminated: '已停用',
    GoogleMachineLearning: 'Google 机器学习',
    GoogleAudienceOptimization: 'Google 受众优化',
    FacebookAudienceOptimization: 'Facebook 受众优化',
    GoogleToAudit: 'Google 回传待审核',
    GoogleIsLearning: 'Google 正在学习',
    FacebookIsLearning: 'Facebook 正在学习',
    clear: '清空',
    con_equal: '等于',
    con_unequal: '不等于',
    con_include: '包含',
    con_exclude: '不包含',
    con_lessThan: '小于',
    con_greaterThan: '大于',
    con_lessOrEqual: '小于等于',
    con_greaterOrEqual: '大于等于',
    con_periodOfTime: '时间段',

    // 时间
    today: '今天',
    yesterday: '昨天',
    recent7days: '最近7天',
    recent14days: '最近14天',
    recent30days: '最近30天',
    thisWeek: '本周',
    lastWeek: '上周',
    thisMonth: '本月',
    lastMonth: '上月',

    // 修改字段
    editColumns: '修改字段',
    selectAll: '全选',

    // 表格
    col_number: '编号',
    col_seqNumber: '询盘编号',
    col_companyName: '公司名称',
    col_corpShortName: '公司简称',
    col_productCategory: '产品分类',
    col_demandProducts: '需求产品',
    col_sourceChannel: '来源渠道',
    col_sourceWay: '来源方式',
    col_inquiryManagers: '负责人',
    col_status: '状态',
    col_followUp: '跟进状态',
    col_followUpCount: '跟进次数',
    col_grouping: '询盘等级',
    col_remark: '需求备注',
    col_createTime: '创建时间',
    col_updateTime: '最近更新时间',
    col_notFollowedDays: '未跟进天数',
    col_lastFollowup: '最近跟进动态',
    col_lastFollowupTime: '最近跟进时间',
    getTableColumnOrder: '获取字段顺序失败, 表格默认显示全部项',
    error_getCommonSearchItem: '未检测到搜索项',
    error_sameCommonSearchName: '检索名称重复, 请更改',
    error_getCommonSearchList: '获取常用检索失败',
    corp_marked: '已标记',
    corp_unmark: '未标记',

    // 编辑字段模态框
    title_editColumns: '编辑显示字段',
    hidingColumns: '隐藏字段',
    showingColumns: '显示字段',
    saveShowingColumns: '保存设置',
    success_saveShowingColumns: '保存字段顺序成功',
    error_saveShowingColumns: '保存字段顺序失败',

    // 弹出提示
    error_reSearchTip: '子筛选条件不能与父筛选条件一致，请增加条件后重试',
    error_getTableColumns: '请求表格字段失败',
    error_getSelectOptions: '请求默认字段下拉选项失败!',
    error_getInquiryTableData: '获取询盘列表出错',
    error_save: '保存失败',
    error_getInquiryManagerList: '获取负责人列表出错',
    error_emptySearchName: '请填写检索名称',
    error_searchNameLength: '检索名称不能超过 50 个字符',
    info_onlyOneUpdateTime: '最多只能有一项筛选字段为最近更新时间',
    info_onlyOneBirthday: '最多只能有一项筛选字段为生日',
    info_onlyOneEmail: '最多只能有一项筛选字段为邮箱',
    info_onlyOneInquiryManagers: '最多只能有一项筛选字段为负责人',
    info_onlyOneStatus: '最多只能有一项筛选字段为状态',
    info_saveEmptyConditions: '要保存的检索条件不能为空',
    info_searchEmptyConditions: '检索条件不能为空',
    success_save: '保存成功',
    info_save_partially: '部分保存成功',
    error_mergeInquiryBelong: '不属于同一个客户的数据无法合并',
    error_mergeInquiryLength: '请选择两个询盘进行合并',
    error_audienceOverLength: '支持单次最多回传500条询盘数据，请重新选择回传数据',

    // 详情页要用
    info_lastInquiry: '当前询盘已是表格页最后一项,请返回表格页点击下一页',
    info_firstInquiry: '当前询盘已是表格页第一项,请返回表格页点击上一页',


    /* 我的客户 */

    // 顶部下拉框
    myCustomer: '我的客户',
    allCustomer: '全部客户',

    // 检索
    con_is: '是',
    con_not: '否',

    // 表格
    col_shortName: '简称',
    col_starLevel: '星级',
    col_country: '国家',
    col_scale: '规模',
    col_clientType: '客户类型',
    col_mainProduct: '主营产品',
    col_companyManagers: '负责人',
    col_marker: '标记',

    // 弹出提示
    error_getCompanyTableData: '获取公司列表出错',
    error_companyId: '公司 ID 错误',
    error_mergeCompanyLength: '请选择两个客户进行合并',
    error_transferCountryAreaCode: '国家地区字段编码转文字失败',

    // 详情页要用
    info_lastCompany: '当前客户已是表格页最后一项,请返回表格页点击下一页',
    info_firstCompany: '当前客户已是表格页第一项,请返回表格页点击上一页',


    /* 公海管理 */

    // 顶部下拉框
    highseasCustomer: '公海管理',


    /* 联系人 */

    // 顶部下拉框
    myContact: '我的联系人',
    allContact: '全部联系人',

    col_nickName: '姓名',
    col_jobTitle: '职位',
    col_email: '邮箱',
    col_phone: '电话',
    col_jobGrade: '职级',
    col_socialNetworkingPlatform: '社交平台',
    col_birthday: '生日',
    col_gender: '性别',
    col_picture: '联系人图片',
    col_contactRemark: '联系人备注',
    col_reason: '退入公海原因',

    error_getContactTableData: '获取联系人列表出错',

    operate: '操作',
    /* 数据迁移 */
    csv_upload: '上传',
    module_file_mapping: '模块-文件映射',
    field_mapping: '字段映射',
    csv_upload_check: '审查',
    csv_upload_completed: '完成'
  },
  Detail: {
    /* 我的询盘 */

    // 按钮
    editInquiry: '编辑',
    transferInquiry: '转移',
    sendMail: '发送邮件',
    viewInquiryLog: '询盘日志',
    newContact: '新增联系人',
    shareInquiry: '分享',
    throwInquiry: '退入公海',
    addInquiryLabel: '标签',
    sendMessenger: '发送 Messenger',
    sendedMessenger: '发送了 Messenger 消息',

    // 自定义字段
    customInfoField: '自定义字段',

    // 询盘信息条目
    inquiryManagers: '负责人',
    inq_seqNumber: '询盘编号',
    inq_productCategory: '产品分类',
    inq_demandProducts: '需求产品',
    inq_grouping: '询盘等级',
    inq_sourceChannel: '来源渠道',
    inq_sourceWay: '来源方式',
    inq_label: '标签',
    inq_inquiryScore: '询盘评分',
    inq_followUp: '跟进状态',
    inq_remark: '需求备注',

    // 公司信息条目
    corp_companyId: '公司 ID',
    corp_companyName: '公司名称',
    corp_shortName: '简称',
    corp_scale: '规模',
    corp_mainProduct: '主营产品',
    corp_clientType: '客户类型',
    corp_country: '国家地区',
    corp_homePage: '公司网址',
    corp_phone: '座机',
    corp_fax: '传真',
    corp_contactAddress: '联系地址',
    corp_relatedCompany: '相关公司',
    corp_companyPicture: '公司图片',
    corp_companyRemark: '公司备注',
    corp_mark: '标记',
    corp_starLevel: '星级',

    // 动态组件
    inquiryFollowUp: '询盘跟进',
    contactInfo: '联系人信息',
    schedule: '任务',
    relatedDocuments: '相关文档',
    inquiryOrigin: '询盘来源',

    // 弹出提示
    error_getInquiryInfo: '获取询盘信息出错',
    error_getOwnerCompany: '获取询盘所属公司信息出错',
    error_deleteLabel: '删除标签出错',
    error_sendMessenger: '无法主动发起 Messenger 聊天',

    /* 我的客户 */

    // 按钮
    customData: '海关数据',
    editCompany: '编辑',
    addInquiry: '新增询盘',
    viewCompanyLog: '公司日志',
    remarkFun: '标记',

    // 弹出提示
    error_getCompanyInfo: '获取公司信息出错',
    error_getSubordinateInquiry: '获取公司下属询盘出错',
    error_addMarker: '标记操作出错',
    success_addMarker: '标记成功',
    success_removeMarker: '取消标记成功',
    error_getInquiryManagerList: '获取询盘负责人列表出错',
    error_getThrowReasonList: '获取退入公海原因列表出错',

    // modal 文本
    modal_tips: '提示',
    modal_return: '返回',
    modal_remain: '留在此页面',
    modal_noInquiry: '此公司您有权限查看的询盘为 0 是否返回列表页',


    /* 公海管理 */

    // 按钮
    claimCustomer: '认领询盘',
    highseasRecord: '公海记录',

    // 弹出提示
    error_getInquiryLabel: '获取当前询盘标签出错',
    error_getSalesList: '获取销售人员列表出错',

    /* 联系人 */
    editContact: '编辑',

    // WhatsApp 导入
    importWhatsApp: 'WhatsApp 导入',
    info_waitImport: '请等待上次导入完成',
    success_import: '导入成功',
    error_import: '导入失败'
  },
  WorkBench: {

    /* 工作台 */

    // 顶部数字

    personalView: '个人视图',
    managerView: '管理视图',
    todayInquiry: '今日新增询盘',
    weekInquiry: '本周新增询盘',
    monthInquiry: '本月新增询盘',
    recent7DaysInquiry: '7天未跟进询盘',

    // 动态组件
    task: '任务',
    funnelView: '漏斗视图',
    behaviorView: '行为视图',

    // 弹出提示
    error_getInquiryNumber: '请求询盘数失败',
    errorOccurred: '出现错误',
    error_haveNoPermissionMyInquiry: '您没有"我的询盘"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionAllInquiry: '您没有"全部询盘"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionHighSeasCustomer: '您没有"公海管理"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionMyCustomer: '您没有"我的客户"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionAllCustomer: '您没有"全部客户"页面访问权限, 无法跳转到该页面',

    /* 任务 */

    participants: '参与人',
    recentTask: '近期任务',
    overdueTask: '过期任务',

    // 日历组件

    selectAll: '全选',
    locale: 'zh-cn',
    noTask: '没有任务',
    newTask: '新建任务',
    saleName: '销售人员',
    allTask: '全部任务',
    finishedTask: '已完成',
    unfinishedTask: '未完成',


    /* 漏斗视图 */

    tip_departmentUser: '部门人员',
    tip_selectDate: '选择日期',
    loading: '加载中',

    // 时间
    today: '今天',
    yesterday: '昨天',
    recent7days: '最近7天',
    recent14days: '最近14天',
    recent30days: '最近30天',
    thisWeek: '本周',
    lastWeek: '上周',
    thisMonth: '本月',
    lastMonth: '上月',

    // 漏斗
    inquiryFunnelView: '询盘分布漏斗',
    inquiryNumber: '询盘数',

    // 询盘关闭原因
    closeInquiryReason: '询盘关闭原因',
    closedInquiryNumber: '关闭询盘个数',


    /* 行为视图 */

    tip_followUpStatus: '跟进状态',
    activated: '已启用',
    terminated: '已停用',

    // 图表
    amount: '数量',

    // 沟通渠道
    phone: '电话',
    Email: 'Email',
    WhatsApp: 'WhatsApp',
    Facebook: 'Facebook',
    weChat: '微信',
    LinkedIn: 'LinkedIn',
    Twitter: 'Twitter',
    Message: '短信',
    exhibition: '展会',
    customerVisiting: '客户来访',
    visitCustomer: '拜访客户',
    websiteInteraction: '网站互动',
    Line: 'Line',
    Skype: 'Skype',
    others: '其他',

    // 表格
    col_seqNumber: '询盘编号',
    col_companyName: '公司名称',
    col_followUpType: '跟进记录类型',
    col_followUpContent: '内容',
    col_followUpCreateUser: '创建人',
    col_followUpTime: '跟进时间',

    // 弹出提示
    error_getChartData: '请求图表数据出错',
    error_getTableData: '请求表格数据出错',
    error_getInquiryManagerList: '获取询盘负责人列表出错',
    error_companyId: '公司 ID 错误',
    error_inquiryId: '询盘 ID 错误',
    error_getFollowUpStatusList: '获取跟进状态列表出错'
  },
  Modal: {
    /* 新建公司 */

    // 标题
    title_newCompany: '新建公司资料',
    title_contact: '联系人',
    title_inquiry: '询盘信息',
    title_company: '公司资料',

    // 联系人
    contact_nickName: '姓名',
    contact_jobTitle: '职位',
    contact_email: '邮箱',
    uniq: '去重',
    cancelMerge: '更改',
    contact_phone: '电话',
    contact_jobGrade: '职级',
    contact_socialNetworkingPlatform: '社交平台',
    contact_birthday: '生日',
    tip_selectDate: '选择日期',
    contact_gender: '性别',
    male: '男',
    female: '女',
    contact_picture: '联系人图片',
    contact_remark: '联系人备注',
    contact_whatsApp: 'WhatsApp',

    // 询盘
    inq_productCategory: '产品分类',
    inq_demandProducts: '需求产品',
    inq_inquiryScore: '询盘评分',
    inq_label: '标签',
    inq_sourceChannel: '来源渠道',
    inq_sourceWay: '来源方式',
    inq_grouping: '询盘等级',
    inq_followUp: '跟进状态',
    inq_remark: '需求备注',
    tip_remark: '此字段最大长度为20000字节',
    transactionTime: '成交时间',
    transactionMoney: '成交金额',


    // 公司
    corp_companyName: '公司名称',
    corp_starLevel: '客户星级',
    corp_shortName: '简称',
    corp_countryArea: '国家地区',
    corp_mainProduct: '主营产品',
    corp_scale: '规模',
    corp_clientType: '客户类型',
    corp_homePage: '公司网址',
    corp_phone: '座机',
    corp_fax: '传真',
    corp_contactAddress: '联系地址',
    corp_relatedCompany: '相关公司',
    corp_companyPicture: '公司图片',
    corp_companyRemark: '备注',
    corp_mark: '标记',

    // modal 按钮
    modal_ok: '确定',
    modal_cancel: '取消',

    // 弹出提示
    error_whatsAppLength: 'WhatsApp 字段内容过长，最大允许 50 字符数',
    error_whatsAppFormat: 'WhatsApp 格式不符合要求，请更改后重试',
    error_emptyEmail: '邮箱不能为空',
    error_emailFormat: '邮箱格式不匹配',
    error_emptyNickName: '姓名不能为空',
    error_emptyProductCategory: '产品分类不能为空',
    error_emptyCompanyName: '公司名称不能为空',
    error_noneUserInfo: '联系人信息正快马加鞭赶来，请稍后查看',
    error_remarkLength: '询盘需求备注字段不能超过20000字节',
    error_canNotBeEmpty: '不能为空',
    error_ruleNameRepeated: '自动化规则名称不能重复',
    error_existedCompanyNameNeedMerge: '此公司名称已存在,请更改公司名称或点击去重选择并入已有公司',
    error_existedCompanyNameNeedAllowMerge: '此公司名称已存在,请更改公司名称或在通用设置中设置允许重复',
    error_existedEmailNeedMerge: '此联系人邮箱已存在,请更改联系人邮箱或点击去重选择并入已有联系人',
    error_existedEmailNeedAllowMerge: '此联系人邮箱已存在,请更改联系人邮箱或在已有的联系人中完善信息',
    error_existedPhoneNeedAllowMerge: '发现有联系人电话已存在于 CRM 系统中,请查重更改电话号码或在通用设置中设置允许重复',
    success_newCompany: '新建公司成功',
    error_newCompany: '新建公司失败',
    info_waitUploadDocument: '请等待上次上传完成',
    info_waitUpload: '请等待上一张图片上传完成',
    info_uploadLengthLimit5: '只能保存 5 张图片',
    info_uploadLengthLimit9: '只能保存 9 张图片',
    error_uploadImage: '上传失败，请刷新后重试',
    error_formatUploadImage: '请上传图片格式文件！',
    success_uniqMail: '邮箱无重复',
    success_uniqPhoneNumber: '电话号码无重复',
    success_uniqCompanyName: '公司名称无重复',
    error_noPhoneToUniq: '请先输入电话号码',
    error_mustInput: '请求默认字段是否必填出错',
    info_companyPictureUploading: '公司图片尚未上传完成',
    info_contactPictureUploading: '联系人图片尚未上传完成',
    info_inquiryDocumentsUploading: '询盘文档尚未上传完成',
    info_canOnlyUpload: '仅支持上传',
    info_NumberOfPicture: '张图片',

    // 成交日期及金额
    success_date: '成交日期',
    success_money: '成交金额',
    /* 新建询盘 */

    // 标题
    title_newInquiry: '新建询盘',

    // 弹出提示
    success_newInquiry: '新建询盘成功',
    error_newInquiry: '新建询盘失败',
    repetition_newInquiry: '该线索已被录为询盘，无法重复录入',
    beBeing_newInquiry: '该线索正在被他人录为询盘，无法重复录入',

    /* 新建联系人 */

    // 标题
    title_newContact: '新增联系人',

    // 弹出提示
    success_newContact: '新增联系人成功',
    error_newContact: '新增联系人失败',


    /* 编辑公司 */

    // 标题
    title_editCompany: '编辑公司资料',

    // 弹出提示
    error_existedCompanyName: '此公司名称已存在',
    success_editCompany: '编辑公司资料成功',
    error_editCompany: '编辑公司资料失败',
    error_countryAreaFormat: '国家地区字段格式不符',

    /* 编辑询盘 */

    // 标题
    title_editInquiry: '编辑询盘',

    // 弹出提示
    success_editInquiry: '编辑询盘成功',
    error_editInquiry: '编辑询盘失败',


    /* 编辑联系人 */

    // 标题
    title_editContact: '编辑联系人',

    // 弹出提示
    success_editContact: '编辑联系人成功',
    error_editContact: '编辑联系人失败',
    error_editMailUnfinished: '请先完成邮件地址的编辑',


    /* 公司名去重 */

    // 标题
    title_uniqCompany: '客户查重',
    title_uniqCompany_title_content: '当前公司名已存在',

    // modal 按钮
    modal_merge: '并入',

    // 表格
    tip_noRepeat: '无重复',
    highseasCustomer: '公海管理',
    createTime: '创建时间',
    managers: '负责人',

    // 弹出提示
    error_notAllowMerge: '请先在通用设置中设置允许重复录入',
    error_noSelectedCompany: '请先选择要并入的公司',
    info_companyMergedTip: '并入公司将采用已有公司资料,当前公司资料部分已输入值均无效',
    error_selectedCompany: '勾选公司出现错误',


    /* 邮箱去重 */

    // 标题
    title_uniqEmail: '邮箱关联询盘',
    title_uniqEmail_fixed: '邮箱查重',
    title_uniqEmail_fixed_title_content: '当前邮箱和以下联系人邮箱重复',

    // 表格
    highseasInquiry: '公海',

    // 弹出提示
    error_getEmailRelated: '获取邮箱关联询盘失败',
    info_emailMergedTip: '并入联系人将采用已有联系人资料,当前联系人资料部分已输入值均无效',


    /* 电话去重 */

    // 标题
    title_uniqPhone: '电话关联询盘',
    title_uniqPhone_fixed: '电话查重',
    title_uniqPhone_fixed_title_content: '当前电话和以下联系人电话重复',
    // 表格
    tip_noRelatedInquiry: '无关联询盘',

    // 弹出提示
    error_getPhoneRelated: '获取电话关联询盘失败',

    // modal 按钮
    modal_close: '关闭',

    /* 公司日志 */

    // 标题
    title_companyLog: '公司日志',

    // 表格
    attrName: '属性名',
    attrValue: '属性值',
    changedItem: '变更项',
    beforeChange: '变更前',
    afterChange: '变更后',
    operate_add: '新增',
    operate_new: '新建',
    operate_edit: '编辑',
    tip_canCopy: '单击表格可复制当前格子内容',

    // 弹出提示
    error_getCompanyLog: '获取公司日志失败',
    error_logType: '日志类型错误',
    info_noDetailInfo: '无详细信息',
    success_copy: '内容已复制到剪贴板',
    error_copy: '复制失败,请手动复制',


    /* 询盘日志 */

    // 标题
    title_inquiryLog: '询盘日志',

    // 表格
    documentName: '文件名',
    operate_delete: '删除',
    operate_upload: '上传',
    operate_download: '下载',
    operate_claim: '认领',
    operate_throw: '退入公海',
    operate_transfer: '转移',
    operate_share: '分享',
    operate_merge: '合并询盘',
    module_company: '公司信息',
    module_contact: '联系人信息',
    module_inquiry: '询盘信息',
    module_document: '询盘文档',
    module_schedule: '日程计划',
    module_followUp: '跟进记录',
    mail_followUp: '邮件记录',

    // 弹出提示
    error_getInquiryLog: '获取询盘日志失败',

    // 主要联系人
    mainContact: '主要联系人',
    tip_changeMainContact: '联系人只允许设置一个主要联系人, 是否确认修改?',
    info_mainContactChanging: '主要联系人修改中, 请等待',


    /* 联系人日志 */

    // 标题
    title_contactLog: '联系人日志',


    /* 导入数据 */

    // 标题
    title_importData: '导入数据',

    // 缓冲提示
    spin_importing: '导入中',

    // 上传文件
    prepareData: '按照数据模板的格式准备要导入的数据',
    downloadTemplate: '下载数据模板',
    selectFile: '选择要导入的文件',
    addFile: '添加文件',
    notice: '注意',
    fileFormatRequirement: '请根据模板录入数据,不得修改模板文件后缀及文件格式,目前仅支持导入 Excel2007及以上版本.xlsx 后缀的文件',
    hint: '提示',
    importTip: '导入过程将隐藏在后台执行.如果需要查看导入后台的信息,请稍后刷新页面查看',
    fileSizeRequirement: '导入文件请勿超过1MB',
    detailInfo: '详细信息',
    cancelUpload: '上传已取消',

    // modal 按钮
    modal_save: '保存',

    // 弹出提示
    error_fileOutSize: '上传文件大小不能超过 1MB',
    error_fileFormat: '文件格式错误,请上传正确格式 Excel 文件',
    error_queryProcess: '本次查询导入进度失败(每5s 查询一次)',


    /* 转移询盘 */

    // 标题
    title_transferInquiry: '转移询盘',
    transferred: '转移了',
    to: '给',
    you: '你',

    transferTo: '转移至',
    transferClueSync: '同步转移线索',
    retainOthers: '保留其他负责人',

    // 弹出提示
    success_transfer: '转移询盘成功',
    error_transfer: '转移询盘失败',
    error_transferClueSync: '同步转移线索失败',
    error_noTransferTo: '请选择转移人员',
    error_existedTransferTo: '已是询盘负责人，无法转移!',
    warning_inquiryInfoChange: '该询盘负责人信息发生变更，请刷新页面后重试',


    /* 分享询盘 */

    // 标题
    title_shareInquiry: '分享询盘',

    shareTo: '分享至',

    // 弹出提示
    success_share: '分享询盘成功',
    error_share: '分享询盘失败',
    error_noShareTo: '请选择分享人员',
    errorOverLimit: '已达到最大可拥有客户数',

    /* 退入公海 */

    // 标题
    title_throwInquiry: '退入公海',

    throwInquiryConfirm: '确定<span>退入公海</span>？',
    throwReason: '退入公海原因',
    details: '详情',

    // 弹出提示
    success_throwInquiry: '退入公海成功',
    error_throwInquiry: '退入公海失败',
    error_noThrowReason: '请选择退入公海原因',


    /* 公海记录 */

    // 标题
    title_highseasRecord: '公海记录',

    inquiry: '询盘',


    /* 关闭询盘 */

    // 标题
    title_closeInquiry: '关闭询盘',
    error_haveNoInquiryId: '询盘 ID 错误',
    error_haveNoFollowUpId: '跟进状态 ID 错误',

    closeReason: '关闭原因',

    // 弹出提示
    error_getCloseInquiryReasonList: '获取询盘关闭原因列表出错',
    success_closeInquiry: '关闭询盘成功',
    error_closeInquiry: '关闭询盘失败',


    /* 询盘关闭日志 */

    // 标题
    title_viewCloseLog: '询盘关闭记录',

    hasNoCloseLog: '此询盘暂无关闭记录',

    // 弹出提示
    error_getCloseInquiryLog: '获取询盘关闭记录出错',


    /* 发送邮件 */

    // 标题
    title_sendMail: '选择联系人',

    // 弹出提示
    success_beforeJumpToMail: '保存成功,即将跳转到发邮件界面',
    error_beforeJumpToMail: '请先选择邮箱,若无可选邮箱,请尝试刷新页面或联系客服',
    error_getContactListByInquiry: '获取联系人列表失败',


    /* 任务 */

    // 标题
    title_newTask: '新建任务',
    title_editTask: '编辑任务',
    title_showTask: '任务详情',

    task_name: '任务名称',
    task_endTime: '截止时间',
    task_remindTime: '提醒时间',
    noRemind: '不提醒',
    onTimeToRemind: '准时提醒',
    fiveMinutesInAdvance: '提前 5 分钟',
    fifteenMinutesInAdvance: '提前 15 分钟',
    thirtyMinutesInAdvance: '提前 30 分钟',
    oneHoursInAdvance: '提前 1 小时',
    towHoursInAdvance: '提前 2 小时',
    oneDayInAdvance: '提前 1 天',
    tip_searchCompanyName: '输入公司名搜索',
    task_participants: '参与人',
    task_relatedInquiry: '关联询盘',
    task_repeat: '重复',
    noRepeat: '不重复',
    task_repeatTime: '重复时间',
    daily: '每天',
    weekly: '每周',
    monthly: '每月',
    Sunday: '周日',
    Monday: '周一',
    Tuesday: '周二',
    Wednesday: '周三',
    Thursday: '周四',
    Friday: '周五',
    Saturday: '周六',
    tip_ifDaysLessThan31: '当月天数小于31时自动取当月最后一天',
    task_endCondition: '结束条件',
    neverEnd: '永不结束',
    endDate: '结束日期',
    task_detailDesc: '详细描述',
    errorOccurred: '出现错误',

    // modal 按钮
    modal_taskStatusToFinished: '标为已完成',
    modal_taskStatusToUnfinished: '标为未完成',
    modal_delete: '删除',

    // modal 文本
    modal_deleteTask: '删除任务',
    modal_deleteTaskContent: '确定要删除此任务么?',

    // 弹出提示
    error_taskName: '请填写正确的任务名称',
    error_taskEndTime: '请选择正确的截止时间',
    error_taskRemindTime: '请选择正确的提醒时间',
    error_emptyTaskParticipants: '请选择参与人',
    error_taskParticipantsError: '参与人数据错误',
    error_taskParticipantsWithoutSelf: '您必须把自己加入到任务参与人中',
    error_taskRelatedInquiry: '请选择正确的关联询盘',
    error_taskEndDate: '请选择正确的结束日期',
    error_taskEndDate_compare_taskEndTime: '结束日期要在截至日期之前',
    error_taskRepeatTime: '请选择正确的重复时间',
    error_getTaskParticipants: '请求任务参与人时出现错误',
    success_changeTaskStatus: '更改任务状态成功',
    error_changeTaskStatus: '更改任务状态失败',
    success_newTask: '新建任务成功',
    error_newTask: '新建任务失败',
    success_editTask: '编辑任务成功',
    error_editTask: '编辑任务失败',
    success_deleteTask: '删除任务成功',
    error_deleteTask: '删除任务失败',
    error_companyId: '公司 ID 错误',
    error_inquiryId: '询盘 ID 错误',
    error_getSubordinateInquiry: '获取公司下属询盘出错',
    error_haveNoPermissionMyContact: '您没有"我的联系人"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionAllContact: '您没有"全部联系人"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionMyInquiry: '您没有"我的询盘"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionAllInquiry: '您没有"全部询盘"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionMyCustomer: '您没有"我的客户"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionAllCustomer: '您没有"全部客户"页面访问权限, 无法跳转到该页面',
    error_haveNoPermissionHighseasCustomer: '您没有"公海管理"页面访问权限, 无法跳转到该页面',

    /* 受众优化 */

    title_audienceOptimization: '受众优化',
    grouping: '分组',
    tip_select: '请选择',

    // 弹出提示
    error_unboundedBoth: '请先绑定 Facebook 或 Google',
    info_unboundedGoogle: 'Google 未绑定,仅能做 Facebook 的优化',
    info_unboundedFB: 'Facebook 未绑定,仅能做 Google 的优化',
    error_unboundedFB: 'Facebook 未绑定',
    error_getData: '此条目下未请求到数据',
    error_requestNoData: '获取数据失败',
    error_unboundFBAccount: '请先绑定 Facebook 个人账号再进行其他相关操作',
    error_selectGrouping: '请至少选择一个受众分组',
    error_selectContact: '请至少选择一个联系人',
    success_uploadGroupingBoth: '上传 Google 和 Facebook 受众成功',
    info_uploadGroupingGoogle: '上传 Google 受众成功, Facebook 受众失败',
    info_uploadGroupingFB: '上传 Facebook 受众成功, Google 受众失败',
    error_uploadGrouping: '上传受众失败',
    success_uploadGroupingOnlyGoogle: '上传 Google 受众成功',
    error_uploadGroupingOnlyGoogle: '上传 Google 受众失败',
    success_uploadGroupingOnlyFB: '上传 Facebook 受众成功',
    error_uploadGroupingOnlyFB: '上传 Facebook 受众失败',
    error_valueFormatError: '请输入合法正数',
    success_uploadGoogle: '回传 Google 成功',
    error_uploadGoogle: '回传 Google 失败',
    success_manualBack: '询盘已提交到手动回传',
    cluesuccess_manualBack: '线索已提交到手动回传',
    /* 添加标签 */

    // 标题
    title_addLabel: '添加标签',

    labelType: '标签类型',
    custom: '自定义',
    fold: '收起',
    customLabel: '自定义标签',
    add: '添加',

    // 弹出提示
    error_getInquiryLabel: '获取当前询盘标签出错',
    error_emptyLabelName: '当前标签名为空,请输入标签名后重试',
    error_duplicateLabelName: '您输入的标签和已有标签重名,请更正后重试',
    success_newCustomLabel: '创建自定义标签成功！',
    error_newCustomLabel: '创建自定义标签失败',
    success_addLabel: '添加标签成功！',
    error_addLabel: '添加标签失败！',

    /* 认领客户 */

    // 标题
    title_claimCustomer: '认领询盘',

    confirmClaimCustomer: '确定要认领此询盘么?',

    // 弹出提示
    success_claimCustomer: '认领询盘成功！',
    error_claimCustomer: '认领询盘失败！',


    /* 原日志部分(Log) */

    manager_beforeChange: '负责人(变更前)',
    manager_afterChange: '负责人(变更后)',
    empty_fullname: '[ 空 ]',
    success: '成功',
    error: '失败',

    // 跟进记录
    followUpTime: '跟进时间',
    followUpContent: '跟进内容',
    initiatorID: '发起人 ID',
    initiatorName: '发起人昵称',
    contactID: '联系人 ID',
    contactName: '联系人昵称',
    communicationChannel: '沟通渠道',
    followUpPictures: '图片',
    imageUploading: '图片尚未上传完成',


    /* 跳转询盘/客户 */
    error_JumpCustomerHaveNoPermission: '您当前无权限查看此客户',
    error_JumpInquiryHaveNoPermission: '您当前无权限查看此询盘',
    error_JumpContactHaveNoPermission: '您当前无权限查看此联系人',
    error_JumpClueHaveNoPermission: '您当前无权限查看此线索',
    error_JumpCustomerInHighseas: '此客户为公海客户, 无法跳转',
    error_JumpInquiryInHighseas: '此询盘为公海询盘, 无法跳转',
    error_JumpContactInHighseas: '此询盘为公海联系人, 无法跳转',
    error_JumpClueInHighseas: '此线索为公海线索, 无法跳转',
    error_JumpCustomerMerged: '该公司已被合并, 无法跳转',
    error_JumpInquiryMerged: '该询盘已被合并, 无法跳转',
    error_JumpContactMerged: '该联系人已被合并, 无法跳转',
    error_viewMailWhenCustomerInHighseas: '此客户为公海客户, 无法查看详情',
    error_viewMailWhenInquiryInHighseas: '此询盘为公海询盘, 无法查看详情',
    error_viewMailWhenContactInHighseas: '此询盘为公海联系人, 无法查看详情',
    error_viewMailWhenClueInHighseas: '此询盘为公海线索, 无法查看详情',
    error_viewMailWhenCustomerMerged: '该公司已被合并, 无法查看详情',
    error_viewMailWhenInquiryMerged: '该询盘已被合并, 无法查看详情',
    error_viewMailWhenContactMerged: '该联系人已被合并, 无法查看详情',


    /* 回传 Google */
    inquiryValue: '询盘价值',
    tip_inputInquiryValue: '请输入询盘价值',
    title_returnInquiry: '回传询盘',
    returnInquiryToGoogleOrNot: '是否回传此询盘到 Google ?',
    success_audit: '询盘已提交到待审核',
    success_passBack: '询盘已提交到手动回传',
    again_submit: '手动回传中已存在',


    /* 合并 客户/询盘/联系人 */
    title_mergeCustomer: '合并客户',
    title_mergeInquiry: '合并询盘',
    tip_mergeCustomer: '请选择要在合并后的记录中保留的值，合并后的记录中将保留最早的创建日期。合并之后，原客户下的询盘、联系人、动态均叠加迁移至主记录下。',
    tip_mergeInquiry: '请选择要在合并后的记录中保留的值，合并后的记录中将保留最早的创建日期。合并之后，原询盘下的动态、联系人、任务、文档、以及负责人信息均叠加迁移至主记录下。',
    mainRecord: '主记录',

    // 提示
    success_merge: '合并成功',
    error_merge: '合并失败',


    /* 添加产品 */
    inquiryProduct: '询盘明细',
    addProduct: '添加产品',
    addedProduct: '已添加',
    kind: '种产品',
    totalAmount: '总金额',
    selectProduct: '选择产品',
    tip_inputSearchedProductName: '请输入要搜索的产品名称',
    selectChildProduct: '选择可配置产品的子产品',
    info_inputProductName: '请输入产品名称 !',


    error_get_all_fields_for_newCreate: '获取字段失败，请刷新页面重新尝试'
  },
  Html: {
    /* 询盘跟进 */

    // 无权限提示
    tip_haveNoPermission: '您当前无权限查看此模块',

    // 添加跟进记录
    tip_addFollowUp: '把您对客户的跟进记录写在这里吧...',
    followUpTime: '跟进时间',
    tip_selectDate: '选择日期',
    communicationChannel: '沟通渠道',
    contact: '联系人',
    createTaskSync: '同时创建快速任务,提醒时间设为',
    custom: '自定义',
    date: '日期',
    oneDayLater: '1 天后',
    twoDaysLater: '2 天后',
    threeDaysLater: '3 天后',
    fourDaysLater: '4 天后',
    fiveDaysLater: '5 天后',
    submit: '提交',
    loading: '请等待',

    // 筛选跟进记录
    cancelFilter: '取消筛选',
    initiator: '发起人',

    // 访问型跟进记录
    customerVisited: '客户访问了',
    visitTime: '访问时间',
    createTime: '创建时间',
    talk: '对话',
    noTalkToday: '今日无对话',
    message: '留言',
    visitorId: '访客 ID',
    messageUrl: '留言页面',
    noMessageToday: '今日无留言',
    track: '轨迹',
    noTrackToday: '今日无轨迹',
    info: '信息',
    remark: '备注',
    initialVisitTime: '初次访问时间',
    leaveTime: '离开时间',
    initialVisitUrl: '初次访问网址',
    visitSource: '访问来源',
    haveTalked: '是否聊过天',
    visitorChatCount: '游客讯息数',
    IPPosition: 'IP 定位',
    receptionServer: '接待客服',
    title: '标题',
    browser: '浏览器',
    browserVersion: '浏览器版本',
    screenResolution: '屏幕分辨率',
    noInfoToday: '今日无信息',

    // 邮件型跟进记录
    sender: '发件人',
    recipient: '收件人',
    subject: '主题',
    sendTime: '发件时间',
    size: '大小',
    attachment: '附件',
    viewAttachment: '查看附件',
    batchDownload: '批量下载',
    download: '下载',
    preview: '预览',

    noInquiryFollowUp: '暂无询盘跟进记录',

    // 沟通渠道
    phone: '电话',
    Email: 'Email',
    WhatsApp: 'WhatsApp',
    Facebook: 'Facebook',
    weChat: '微信',
    LinkedIn: 'LinkedIn',
    Twitter: 'Twitter',
    Message: '短信',
    exhibition: '展会',
    customerVisiting: '客户来访',
    visitCustomer: '拜访客户',
    websiteInteraction: '网站互动',
    Line: 'Line',
    Skype: 'Skype',
    others: '其他',

    // 时间
    today: '今天',
    yesterday: '昨天',
    recent7days: '最近7天',
    recent14days: '最近14天',
    recent30days: '最近30天',
    thisWeek: '本周',
    lastWeek: '上周',
    thisMonth: '本月',
    lastMonth: '上月',

    // 弹出提示
    error_getInquiryManagerList: '获取询盘负责人列表出错',
    error_getManuallyFollowUpList: '获取手动填入的跟进记录失败',
    error_getMailFollowUpList: '获取邮件类型的跟进记录出错',
    error_getInquiryContactList: '获取询盘联系人列表出错',
    error_emptyFollowUpContent: '请填写跟进内容',
    error_emptyDateAndTime: '请选择日期时间',
    error_DateAndTime: '跟进时间应小于当前时间',
    error_emptyCommunicationChannel: '请选择沟通渠道',
    error_emptyContact: '请选择联系人',
    error_followUpTime: '跟进任务时间错误,请选择正确时间后重试',
    success_saveFollowUp: '保存跟进记录成功',
    error_saveFollowUp: '保存跟进记录失败',
    success_createFollowUpTask: '新建跟进任务成功',
    error_createFollowUpTask: '新建跟进任务失败',
    error_getMailDetail: '获取邮件详情失败',
    error_previewFormat: '暂不支持预览此类文件',
    confirm_submitFollowUp: '确认提交 ?',
    tip_submitFollowUpUploading: '当前尚有图片未上传完，是否继续提交 ?',

    // 快速任务
    followUpTaskName: '跟进任务',
    new: '新建',


    /* 联系人信息 */

    contactInfo: '联系人信息',

    // 联系人
    contact_nickName: '姓名',
    contact_jobTitle: '职位',
    contact_email: '邮箱',
    uniq: '去重',
    cancelMerge: '更改',
    contact_phone: '电话',
    contact_jobGrade: '职级',
    contact_socialNetworkingPlatform: '社交平台',
    contact_birthday: '生日',
    contact_gender: '性别',
    male: '男',
    female: '女',
    contact_picture: '联系人图片',
    contact_remark: '联系人备注',
    contact_whatsApp: 'WhatsApp',

    operate_edit: '编辑',

    // 弹出提示
    error_getContactListByInquiry: '获取联系人列表失败',


    /* 日程计划 */

    newTask: '新建任务',
    taskEndTime: '截止时间',
    participants: '参与人',
    errorOccurred: '出现错误',
    taskName: '任务名称',
    taskDetails: '任务详情',

    // modal 文本
    sign: '标记',
    cancelSign: '取消标记',
    modal_signTaskToFinished: '确定要标记此任务为完成状态',
    modal_signTaskToUnfinished: '确定要标记此任务为未完成状态',
    modal_ok: '确定',
    modal_cancel: '取消',
    delete: '删除',
    modal_deleteTaskContent: '确定要删除此任务么?',

    // 提示文本
    success_changeTaskStatus: '更改任务状态成功',
    error_changeTaskStatus: '更改任务状态失败',
    error_deleteTask: '删除任务失败',


    /* 相关文档 */

    tip_inputFileName: '请输入文件名',
    tip_selectTime: '选择时间',
    uploadDocument: '上传文档',
    uploader: '上传者',
    time: '时间',
    nothing: '无',
    earlier: '更早',

    // modal 按钮
    modal_close: '关闭',

    // 提示文本
    info_uploadLimit: '一次仅支持上传10个文件，取前10个文件上传',
    info_permittedFormatTip: '暂只支持预览 Office 文件,PDF 文件,TXT 文件和图片',
    error_existedFileName: '当前文件名已存在,如需上传请先重命名文件',
    error_saveFile: '保存文件失败',
    error_deleteFile: '删除文件失败',
    error_getFileList: '获取文件列表出错',
    error_noFiles: '没有文件!',


    /* 询盘来源 */
    noInquiryOrigin: '从 CRM 中手动录入的询盘没有"询盘来源"相关属性',

    firstVisitorAddress: '初次访问网址',
    ipAddress: 'IP 地址',
    ipLocation: 'IP 定位',
    serviceName: '客服人员',
    createUser: '录入人员',
    saleName: '销售人员',
    seqNumber: '线索编号',
    firstVisitTime: '开始访问时间',
    lang: '语种',
    createWay: '创建方式',
    visitor_history: '访客历史',
    web_msg: '网站留言',
    direct_create: '直接创建',
    web_conversation: '网站对话',
    fb_leads: 'FB leads',
    fb_msg: 'Facebook 私信',
    fb_comment: 'Facebook 评论',
    leadsId: 'Lead ID',
    adId: 'Ad ID',
    FBName: 'FB 表单名',
    leadsCreateTime: 'Leads 创建时间',

    /* 跟进状态 */

    openInquiry: '开启询盘',
    closeInquiry: '关闭询盘',
    error_inoperable: '不可操作',

    title_change_followUp: '询盘跟进状态变更',

    change_followUp_from: '您确定将该询盘的跟进状态由',
    change_followUp_to: '变更为',

    // 弹出提示
    error_getFollowUpStatusList: '获取跟进状态列表出错',
    error_waitForChange: '请等待上次跟进状态变更完成',
    error_openInquiry: '开启询盘失败',
    success_changeFollowUpStatus: '更改跟进状态成功',
    error_changeFollowUpStatus: '更改跟进状态失败',
    error_highseasInqCannotOperate: '公海询盘, 不可操作',
    error_saveClinchData: '保存成交状态数据失败',
    empty_transactionTime: '成交时间不能为空',

    /* 操作记录 */


    /* 询盘明细 */
    productName: '产品名称',
    productPrice: '产品价格',
    productCount: '产品数量',
    salesUnitPrice: '销售单价',
    discount: '折扣',
    totalPrice: '总价',
    error_getInquiryProduct: '请求询盘明细数据失败',
    error_getExchange: '查询汇率失败',
    error_currencyUnit: '货币单位不正确, 无法查询汇率',


    /* 顶部筛选 */
    add_child_search: '创建子筛选条件',
    confirm_edit_search_recursively: '父项筛选条件修改后子筛选条件中对应的条件会一并修改，是否确认修改？',
    confirm_delete_search_recursively: '父项筛选条件删除后子筛选条件会一并删除，是否确认删除？',
    tip_cannot_filter_when_check_all: '勾选"全部"时只能保存检索, 不能进行筛选',
    error_save_existed_search: '常用检索已存在, 保存失败',
    error_sort_search: '调整常用检索顺序失败',
    cannot_save_existed: ' 已存在，无法保存。'
  },
  InqSet: {
    // 标题
    title_inquirySetting: '字段管理',
    title_company: '公司资料',
    title_contact: '联系人',
    title_inquiry: '询盘信息',

    editField: '编辑字段',
    addField: '添加字段',
    addCustomField: '添加自定义字段',
    customField: '自定义字段',
    draggable: '可拖动调整顺序',

    // 联系人
    contact_nickName: '姓名',
    contact_email: '邮箱',
    contact_jobTitle: '职位',
    contact_jobGrade: '职级',
    contact_phone: '电话',
    contact_socialNetworkingPlatform: '社交平台',
    contact_birthday: '生日',
    tip_selectDate: '选择日期',
    contact_gender: '性别',
    male: '男',
    female: '女',
    contact_remark: '联系人备注',
    contact_picture: '联系人图片',
    contact_whatsApp: 'WhatsApp',

    // 询盘
    inq_productCategory: '产品分类',
    inq_demandProducts: '需求产品',
    inq_label: '标签',
    inq_inquiryScore: '询盘评分',
    inq_grouping: '询盘等级',
    inq_sourceChannel: '来源渠道',
    inq_sourceWay: '来源方式',
    inq_followUp: '跟进状态',
    inq_remark: '需求备注',


    // 公司
    corp_companyName: '公司名称',
    corp_shortName: '简称',
    corp_mainProduct: '主营产品',
    corp_clientType: '客户类型',
    corp_starLevel: '客户星级',
    corp_countryArea: '国家地区',
    corp_scale: '规模',
    corp_homePage: '公司网址',
    corp_fax: '传真',
    corp_phone: '座机',
    corp_contactAddress: '联系地址',
    corp_relatedCompany: '相关公司',
    corp_companyPicture: '公司图片',
    corp_companyRemark: '备注',

    // modal 按钮
    modal_ok: '确定',
    modal_cancel: '取消',

    // modal
    mustInput: '必填',
    fieldType: '字段类型',
    fieldName: '字段名称',
    textInput: '文本框',
    textArea: '文本域',
    error_overTypes: '文本域类型数量已达上限, 不可继续添加',
    selectSingle: '单选',
    selectMultiple: '多选',
    date: '日期',
    defaultValue: '提示语',
    selectItemsContent: '列表内容',
    dateType: '日期类型',
    time: '时间',
    tip_noTip: '无提示',
    deleteTile: '删除确认',
    deleteTip: '是否要删除该字段？字段删除后在 CRM 界面将无法查看字段信息，可以在<弃用字段>处启用该字段。',
    deleteTip1: '】已被线索模板使用，字段删除后将无法在 CRM 和线索模块查看字段信息，可以在<弃用字段>处启用该字段。<br><br>是否要删除该字段？',
    deleteTip2: '】已被线索模板、表单模板',
    deleteTip3: '使用，字段删除后将无法在 CRM、线索、网站留言和 Facebook leads 模块查看和同步字段的信息，可以在<弃用字段>处启用该字段。<br><br>是否要删除该字段？ ',
    deleteTip4: '使用。因为表单需要至少包含一个字段，表单模板 ',
    deleteTip5: '中只有',
    deleteTip6: '这一个字段，所以该字段无法删除，请先修改表单模板后再做删除操作。',

    // 弹出提示
    info_waitForChange: '请等待上次切换完成',
    success_changeMustInput: '改变必填状态成功',
    error_changeMustInput: '改变必填状态失败',
    error_canNotChangeMustInput: '不支持更改必填状态',
    error_params: '参数错误',
    success_deleteField: '删除字段成功',
    error_deleteField: '删除字段失败',
    success_restoreField: '还原字段成功',
    error_restoreField: '还原字段失败',
    error_fieldCountLimit: '单个模块的自定义字段（包括已删除字段）数量上限为 50',
    success_addField: '添加字段成功',
    error_addField: '添加字段失败',
    success_editField: '编辑字段成功',
    error_editField: '编辑字段失败',
    error_fieldName: '字段名称必填'

  },
  UniSet: {
    /* 通用设置 */

    universalSetting: '通用设置',
    clientType: '客户类型',
    scale: '规模',
    socialPlatform: '社交平台',
    productCategory: '产品分类',
    grouping: '询盘等级',
    sourceChannel: '来源渠道',
    sourceWay: '来源方式',
    followUp: '跟进状态',
    setting_label: '标签',
    throwReason: '退入公海原因',
    repeatRule: '重复规则',
    closeReason: '询盘关闭原因',
    visitorType: '访客类别设置',
    error_getOptionList: '获取选项列表出错',
    tip_unSortOption: '被替换选项为固定选项或已停用选项, 不参与排序',
    error_sortOption: '调整字段顺序失败',


    /* 客户类型 */

    // 操作
    new: '新增',
    edit: '编辑',
    delete: '删除',
    setDefaultValue: '设置默认值',
    setsuccStage: '设置成交阶段',
    choosesuccStage: '成交阶段选择',
    // modal 按钮
    modal_ok: '确定',
    modal_cancel: '取消',

    // 弹出提示
    error_getClientTypeList: '获取客户类型列表出错',
    tryLater: '<br>请稍后再试',
    success_add: '添加成功',
    error_add: '添加失败',
    success_edit: '编辑成功',
    error_edit: '编辑失败',
    success_delete: '删除成功',
    error_delete: '删除失败',
    error_contentRepeat: '内容不能重复',
    success_set_closingStage: '设置【成交阶段】成功',
    error_set_closingStage: '设置【成交阶段】失败',
    success_set_defaultValue: '设置默认值成功',
    error_set_defaultValue: '设置默认值失败',
    success_set_emptyDefaultValue: '未选择产品分类选项，该字段当前无默认值！',
    /* 规模 */

    title_scale: '规模',

    // 弹出提示
    error_getScaleList: '获取客户类型列表出错',


    /* 社交平台 */

    // 弹出提示
    error_getSocialNetworkingPlatformList: '获取社交平台列表出错',


    /* 产品分类 */

    // 弹出提示
    error_getProductCategoryList: '获取产品分类列表出错',
    error_deleteDefaultValue: '该选项已经被设置为默认值，不支持停用',
    error_setDisabledOptionDefaultValue: '该选项已被停用，不支持设置为默认值',


    /* 询盘等级 */

    // 弹出提示
    error_getGroupingList: '获取询盘等级列表出错',


    /* 来源渠道 */

    // 弹出提示
    error_getSourceChannelList: '获取来源渠道列表出错',


    /* 来源方式 */

    // 弹出提示
    error_getSourceWayList: '获取来源方式列表出错',


    /* 跟进状态 */

    // 默认跟进状态
    defaultFollowUpStatus_inquiry: '询盘',
    defaultFollowUpStatus_closeInquiry: '关闭询盘',

    UnChangeable: '不可更改',
    terminated: '已停用',
    notice: '注意',
    tip_editFollowUpStatus: '修改此选项会将历史数据同步更新,请谨慎操作',

    // 弹出提示
    success_editStatus: '编辑状态成功',
    error_editStatus: '编辑状态失败',
    error_getFollowUpStatusList: '获取跟进状态列表出错',
    info_deleteBeforeUnbind: '该跟进状态已有对应的 Google 转化, 请先解除转化关系再删除',


    /* 标签 */

    // 弹出提示
    error_getLabelList: '获取标签列表出错',
    error_emptyLabelName: '当前标签名为空,请输入标签名后重试',
    error_duplicateLabelName: '您输入的标签和已有标签重名,请更正后重试',


    /* 扔入公海原因 */

    // 弹出提示
    error_getThrowReasonList: '获取退入公海原因列表出错',

    /* 重复规则 */

    // table
    allowed: '允许',
    notAllowed: '不允许',
    uniq: '查重',
    notUniq: '不查重',
    uniqFuzzy: '模糊查重',
    uniqPrecise: '精确查重',
    email: '邮箱',
    phone: '电话',
    weChat: '微信',
    companyName: '公司名称',
    mergeOperate: '是否允许重复录入',
    requestError: '请求出错',

    // 弹出提示
    success_editRepeatRule: '修改重复录入设置成功',
    error_editRepeatRule: '修改重复录入设置失败',
    success_editUniqRule: '修改去重设置成功',
    error_editUniqRule: '修改去重设置失败',

    /* 询盘关闭原因 */

    // 弹出提示
    error_getCloseInquiryReasonList: '获取询盘关闭原因列表出错'
  },
  newDetail: {
    col_clientId: '客户 ID',
    col_clientType: '客户类型',
    col_companyManagers: '负责人',
    col_homePage: '公司网址',
    col_contactAddress: '联系地址',
    col_companyName: '公司名称',
    col_productCategory: '产品分类',
    col_inquiryManagers: '负责人',
    col_grouping: '询盘等级',
    col_inquiryScore: '询盘评分',
    col_nickName: '姓名',
    col_email: '邮箱',
    col_phone: '电话',
    col_contactManagers: '负责人',
    col_socialNetworkingPlatform: '社交平台',

    module_FollowUp: '动态',
    module_DetailInfo: '详细信息',
    module_ContactList: '联系人',
    module_InquiryList: '询盘',
    module_Documents: '文档',
    module_Task: '任务',
    module_InquiryProduct: '询盘明细',

    error_getSubordinateInquiry: '获取下属询盘出错',
    error_getSubordinateContact: '获取下属联系人出错',
    error_getCompanyBriefInfo: '获取客户简略信息出错',
    error_getInquiryBriefInfo: '获取询盘简略信息出错',
    error_getContactBriefInfo: '获取联系人简略信息出错',
    error_urlRequest: '页面错误, 无法判断当前请求何种详细信息',
    error_paramsRequest: '页面错误, 无法判断当前请求何种详细信息',
    error_noMenuAuthority: '您当前没有该模块的查看权限',
    error_noContactsMenuAuthority: '您没有联系人管理页面的查看权限，请联系您的管理员开通',
    error_noHighseasCustomerMenuAuthority: '您没有公海管理页面的查看权限，请联系您的管理员开通'
  },
  fieldLimit: {
    // 全局
    error_overLength: '长度超出限制, 请求失败',

    // 询盘设置
    cname: '字段名称',
    option: '列表内容',
    colDefaultValue: '提示语',

    companyName: '公司名称',
    shortName: '简称',
    scale: '规模',
    mainProduct: '主营产品',
    clientType: '客户类型',
    countryArea: '国家地区',
    homePage: '公司网址',
    corpPhone: '座机',
    fax: '传真',
    contactAddress: '联系地址',
    relatedCompany: '相关公司',
    companyPicture: '公司图片',
    companyRemark: '公司备注',

    nickName: '姓名',
    jobTitle: '职位',
    email: '邮箱',
    phone: '电话',
    whatsApp: 'WhatsApp',
    jobGrade: '职级',
    socialNetworkingPlatform: '社交平台',
    birthday: '生日',
    gender: '性别',
    picture: '联系人图片',

    contactRemark: '联系人备注',

    productCategory: '产品分类',
    demandProducts: '需求产品',
    grouping: '询盘等级',
    sourceChannel: '来源渠道',
    sourceWay: '来源方式',
    label: '标签',
    inquiryScore: '询盘评分',
    followUp: '跟进状态',
    remark: '需求备注'
  },
  aliImport: {
    dataImportPlugin: '数据导入插件',
    downloadPlugin: '插件下载和使用',
    downloadPluginTip: '请按照以下步骤完成询盘云数据导入工具的安装：',
    downloadPluginGuide: '1. 点击下载 <a>询盘云-数据导入工具</a> 到本地并解压；<br/>' +
            '2. 进入 <strong>Chrome</strong> 浏览器的 <strong>【更多工具】→【扩展程序】</strong> 界面，保持界面右侧的 <strong>【开发者模式】</strong>为开启状态；<br/>' +
            `<img src="${process.env.BASE_URL}image/aliImportCRX.png"/><br/>` +
            '3. 点击左上角的 <strong>【加载已解压的扩展程序】</strong> 按钮选择已解压的询盘云数据导入工具；<br/>' +
            '4. 保证询盘云导入工具为<strong>【启用状态】</strong> ，完成使用前配置即可开始导入数据了',
    downloadPluginRemark: '注：此插件仅适用 Chrome 浏览器',
    fieldMatch: '字段匹配',
    aliInquiryField: '阿里巴巴询盘字段',
    leadscloudClueField: '询盘云线索模板字段',
    fieldInvalided: '字段已失效',
    error_validateRelation: '检测到部分匹配关系已失效，请重新设置或清除匹配关系后再保存',
    leaveConfirm: '离开确认',
    leaveTip: '确定离开？您编辑的字段映射关系未保存，是否保存后再离开？',
    leaveDirectly: '直接离开',
    leaveAfterSave: '保存后离开',

    // 阿里字段多语言
    tradeId: '询价单号',
    productTitle: '产品名称',
    productImg: '产品图片',
    buyerName: '姓名',
    potentialScore: '潜力分',
    registerDate: '注册时间',
    country: '注册地区',
    companyName: '公司名称',
    companyWebsite: '公司官网',
    email: '邮箱',
    mobileNumber: '手机',
    phoneNumber: '座机',
    importanceLevel: '采购意向',
    categorys: '采购品类',
    annualProcurement: '年采购额',
    marketingGroups: '所属客群',
    pageNotes: '历史小记',
    productViewCount: '产品浏览数',
    validInquiryCount: '有效询盘/回复询盘数',
    validRfqCount: '有效RFQ数',
    loginDays: '登录天数',
    spamInquiryMarkedBySupplierCount: '垃圾询盘数',
    addedToBlacklistCount: '被加为黑名单数',
    preferredIndustries: '最常采购行业',
    latestInquiryProducts: '最近询盘产品',
    totalOrderCount: '订单总数',
    totalOrderVolume: '订单总金额',
    tradeSupplierCount: '交易供应商数'
  }
}
