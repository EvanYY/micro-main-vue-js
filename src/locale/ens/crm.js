export default {
  Table: {
    noData: 'No data',
    noFilterData: 'No matching data under the current filtering conditions',
    noFilterDataButton: 'Restore the default filter conditions',
    /* 我的询盘 */

    // 顶部下拉框
    myInquiry: 'My Inquiry',
    allInquiry: 'All Inquiry',
    errorOccurred: 'An error occurred',

    // 按钮
    selected: 'Selected',
    item_customer: 'customer',
    item_customers: 'customers',
    item_clue: 'clue',
    item_clues: 'clues',
    item_inquiry: 'inquiry',
    item_inquiries: 'inquiries',
    item_inquiry_withName: '',
    item_inquiries_withName: '',
    item_user: 'user',
    item_users: 'users',
    item_role: 'role',
    item_roles: 'roles',
    merge: 'Merge',
    newCompany: 'Add',
    importData: 'Import',
    filter: 'Filter',
    exportData: 'Download',
    audienceOptimization: 'Audience optimization',

    // 检索
    saveSearch: 'Save as a customized filter',
    search: 'Filter',
    searchComment: 'Common Filter',
    searchCommon: 'Common Filter',
    searchName: 'Filter Name',
    tip_customSearch: 'Customized Filter',
    searchCondition: 'Filter Conditions',
    tip_addKeywords: 'Add keywords',
    tip_inputNumber: 'Please enter the number',
    tip_selectTime: 'Please select time',
    activated: 'Enabled',
    terminated: 'Not Enabled',
    GoogleMachineLearning: 'Google Machine Learning',
    GoogleAudienceOptimization: 'Google audience optimization',
    FacebookAudienceOptimization: 'Facebook audience optimization',
    GoogleToAudit: 'Google back to audit',
    GoogleIsLearning: 'Google is  learning',
    FacebookIsLearning: 'Facebook is learning',
    clear: 'Clear',
    con_equal: 'equal to',
    con_unequal: 'not equal to',
    con_include: 'include',
    con_exclude: 'not include',
    con_lessThan: 'less than',
    con_greaterThan: 'greater than',
    con_lessOrEqual: 'less than or equal to',
    con_greaterOrEqual: 'greater or equal to',
    con_periodOfTime: 'period',

    // 时间
    today: 'Today',
    yesterday: 'Yesterday',
    recent7days: 'Last 7 days',
    recent14days: 'Last 14 days',
    recent30days: 'Last 30 days',
    thisWeek: 'This Week',
    lastWeek: 'Last Week',
    thisMonth: 'This Month',
    lastMonth: 'Last Month',

    // 修改字段
    editColumns: 'Display Column',
    selectAll: 'Select all',

    // 表格
    col_number: 'NO.',
    col_seqNumber: 'Inquiry ID',
    col_companyName: 'Company Name',
    col_corpShortName: 'Company Abbreviation',
    col_productCategory: 'Product Categories',
    col_demandProducts: 'Demand',
    col_sourceChannel: 'Source Channel',
    col_sourceWay: 'Source Mode',
    col_inquiryManagers: 'Sales Rep.',
    col_status: 'Optimization Status',
    col_followUp: 'Follow-up Status',
    col_followUpCount: 'Follow-up Frequency',
    col_grouping: 'Inquiry Grade',
    col_remark: 'Demand Note',
    col_createTime: 'Creation Time',
    col_updateTime: 'Last Updated Time',
    col_notFollowedDays: 'Number of not followed days',
    col_lastFollowup: 'Recent updates',
    col_lastFollowupTime: 'Recent follow-up time',
    getTableColumnOrder: 'Failed to get fields order, the table shows all items by default',
    error_getCommonSearchItem: 'No terms detected',
    error_sameCommonSearchName: 'Duplicate name, please change',
    error_getCommonSearchList: 'Failed to get common filter',
    corp_marked: 'Marked',
    corp_unmark: 'Unmarked',

    // 编辑字段模态框
    title_editColumns: 'Edit display fields',
    hidingColumns: 'Hidden fields',
    showingColumns: 'Displayed fields',
    saveShowingColumns: 'Save Settings',
    success_saveShowingColumns: 'Saved field order successfully',
    error_saveShowingColumns: 'Failed to save field order',

    // 弹出提示
    error_reSearchTip: 'The child filter cannot match the parent filter. Please add the condition and try again',
    error_getTableColumns: 'Failed to get form field',
    error_getSelectOptions: 'Failed to request dropdown option field!',
    error_getInquiryTableData: 'Failed to get inquiry list',
    error_save: 'Failed to save',
    error_getInquiryManagerList: 'Failed to get the list of sales rep.',
    error_emptySearchName: 'Please fill in the Search Name',
    error_searchNameLength: 'The maximum length of the Search Name is 50 characters',
    info_onlyOneUpdateTime: 'The Last Updated Time can only be one filter condition',
    info_onlyOneBirthday: 'The birthday can only be one filter condition',
    info_onlyOneEmail: 'The E-mail can only be one filter condition',
    info_onlyOneInquiryManagers: 'The sales rep. can only be one filter condition',
    info_onlyOneStatus: 'The Optimization Status can only be one filter condition',
    info_saveEmptyConditions: 'The Filter Conditions cannot be empty',
    info_searchEmptyConditions: 'Filter condition cannot be empty',
    success_save: 'Saved successfully',
    info_save_partially: 'Partially saved successfully',
    error_mergeInquiryBelong: 'Data cannot be merged for not belong to the same customer',
    error_mergeInquiryLength: 'Please select two inquiries for merging',
    error_audienceOverLength: 'Only a maximum of 500 inquiry can be returned at a time, please re-select the data to be returned.',

    // 详情页要用
    info_lastInquiry: 'This is the last inquiry on this page, please return to the form page and click the next page button.',
    info_firstInquiry: 'This is the first inquiry on this page, please reture to the form page and click the previous page button.',


    /* 我的客户 */

    // 顶部下拉框
    myCustomer: 'My Customers',
    allCustomer: 'All Customers',

    // 检索
    con_is: 'Yes',
    con_not: 'No',

    // 表格
    col_shortName: 'Abbreviation',
    col_starLevel: 'Customer Rank',
    col_country: 'Country',
    col_scale: 'Scale',
    col_clientType: 'Customer Type',
    col_mainProduct: 'Main Products',
    col_companyManagers: 'Sales Rep.',
    col_marker: 'Mark',

    // 弹出提示
    error_getCompanyTableData: 'Failed to get company list',
    error_companyId: 'Company ID error',
    error_mergeCompanyLength: 'Please select two customers for merging',
    error_transferCountryAreaCode: 'Failed to convert country/region field code to text',

    // 详情页要用
    info_lastCompany: 'This is the last customer on this page, please return to the form page and click the next page button.',
    info_firstCompany: 'This is the first customer on this page, please reture to the form page and click the previous page button.',


    /* 公海管理 */

    // 顶部下拉框
    highseasCustomer: 'Public Pool',


    /* 联系人 */

    // 顶部下拉框
    myContact: 'My Contacts',
    allContact: 'All Contacts',

    col_nickName: 'Name',
    col_jobTitle: 'Position',
    col_email: 'E-mail',
    col_phone: 'Phone',
    col_jobGrade: 'Occupation Class',
    col_socialNetworkingPlatform: 'Social Platforms',
    col_birthday: 'Birthday',
    col_gender: 'Gender',
    col_picture: 'Contact Picture',
    col_contactRemark: 'Contact Note',
    col_reason: '退入公海原因',
    error_getContactTableData: 'Failed to get contact list',

    operate: 'Operation'
  },
  Detail: {
    /* 我的询盘 */

    // 按钮
    editInquiry: 'Edit',
    transferInquiry: 'Transfer',
    sendMail: 'Send Email',
    viewInquiryLog: 'Inquiry Log',
    newContact: 'Add Contact',
    shareInquiry: 'Share',
    throwInquiry: 'Transfer To Public Customers',
    addInquiryLabel: 'Label',
    sendMessenger: 'send Messenger',

    // 自定义字段
    customInfoField: 'Customized Field',

    // 询盘信息条目
    inquiryManagers: 'Sales Rep.',
    inq_seqNumber: 'Inquiry ID',
    inq_productCategory: 'Product Categories',
    inq_demandProducts: 'Demand',
    inq_grouping: 'Inquiry Grade',
    inq_sourceChannel: 'Source Channel',
    inq_sourceWay: 'Source Mode',
    inq_label: 'Label',
    inq_inquiryScore: 'Inquiry Score',
    inq_followUp: 'Follow-up Status',
    inq_remark: 'Demand Note',

    // 公司信息条目
    corp_companyId: 'Company ID',
    corp_companyName: 'Company Name',
    corp_shortName: 'Abbreviation',
    corp_scale: 'Scale',
    corp_mainProduct: 'Main Products',
    corp_clientType: 'Customer Type',
    corp_country: 'Country / Region',
    corp_homePage: 'Company Website',
    corp_phone: 'Landline',
    corp_fax: 'Fax',
    corp_contactAddress: 'Contact Address',
    corp_relatedCompany: 'Related Companies',
    corp_companyPicture: 'Photo of Company',
    corp_companyRemark: 'Company Note',
    corp_mark: 'Mark',
    corp_starLevel: 'Star Level',

    // 动态组件
    inquiryFollowUp: 'Follow-up Record',
    contactInfo: 'Contact Information',
    schedule: 'Tasks',
    relatedDocuments: 'Related Documents',
    inquiryOrigin: 'Inquiry Source',

    // 弹出提示
    error_getInquiryInfo: 'Failed to get inquiry information',
    error_getOwnerCompany: 'Failed to get company information of this inquiry',
    error_deleteLabel: 'Failed to delete label',


    /* 我的客户 */

    // 按钮
    customData: 'Customs Data',
    editCompany: 'Edit',
    addInquiry: 'Add Inquiry',
    viewCompanyLog: 'Company Log',
    remarkFun: 'Mark',

    // 弹出提示
    error_getCompanyInfo: 'Failed to get company information',
    error_getSubordinateInquiry: 'Failed to get subordinate inquiry',
    error_addMarker: 'Failed to mark',
    success_addMarker: 'Marked successfully',
    success_removeMarker: 'Canceled successfully',
    error_getInquiryManagerList: 'Failed to get the sales rep. in charge of this inquiry',
    error_getThrowReasonList: 'Failed to get reason list for transfering to the Public Customers',

    // modal 文本
    modal_tips: 'Prompt',
    modal_return: 'Return',
    modal_remain: 'Stay on this page',
    modal_noInquiry: 'You don\'t have permission to view this company\'s inquiry<br> whether to return to the list page',


    /* 公海管理 */

    // 按钮
    claimCustomer: 'Claim Customers',
    highseasRecord: 'Public Customers Record',

    // 弹出提示
    error_getInquiryLabel: 'Failed to get current inquiry label',
    error_getSalesList: 'Failed to get sales rep. list',

    /* 联系人 */
    editContact: 'Edit',

    // WhatsApp 导入
    importWhatsApp: 'Upload info from WhatsApp',
    info_waitImport: 'Please wait for the last upload to complete',
    success_import: 'Successfully uploaded',
    error_import: 'Failes to upload'
  },
  WorkBench: {

    /* 工作台 */

    // 顶部数字

    personalView: 'Personal View',
    managerView: 'Management View',
    todayInquiry: 'Inquiries (Today)',
    weekInquiry: 'Inquiries (This Week)',
    monthInquiry: 'Inquiries (This Month)',
    recent7DaysInquiry: 'Unfollowed Inquiries (Last 7 Days)',

    // 动态组件
    task: 'Tasks',
    funnelView: 'Funnel View',
    behaviorView: 'Behavior View',

    // 弹出提示
    error_getInquiryNumber: 'Failed to get inquiry number',
    errorOccurred: 'An error occurred',
    error_haveNoPermissionMyInquiry: 'You don\'t have access to the "My Inquiries" page, can\'t jump to this page',
    error_haveNoPermissionAllInquiry: 'You don\'t have access to the "All Inquiries" page, can\'t jump to this page',
    error_haveNoPermissionHighSeasCustomer: 'You don\'t have access to the "Public Pool" page, can\'t jump to this page',
    error_haveNoPermissionMyCustomer: 'You don\'t have access to the "My Customers" page, can\'t jump to this page',
    error_haveNoPermissionAllCustomer: 'You don\'t have access to the "All Customers" page, can\'t jump to this page',

    /* 任务 */

    participants: 'Participant',
    recentTask: 'Recent Tasks',
    overdueTask: 'Expired Tasks',

    // 日历组件

    selectAll: 'Select all',
    locale: 'en',
    noTask: 'No Task',
    newTask: 'Add Task',
    saleName: 'Sales Rep.',
    allTask: 'All Tasks',
    finishedTask: 'Done',
    unfinishedTask: 'unDone',


    /* 漏斗视图 */

    tip_departmentUser: 'Department staff',
    tip_selectDate: 'Select Date',
    loading: 'Loading',

    // 时间
    today: 'Today',
    yesterday: 'Yesterday',
    recent7days: 'Last 7 days',
    recent14days: 'Last 14 days',
    recent30days: 'Last 30 days',
    thisWeek: 'This Week',
    lastWeek: 'Last Week',
    thisMonth: 'This Month',
    lastMonth: 'Last Month',

    // 漏斗
    inquiryFunnelView: 'Inquiry Distribution Funnel',
    inquiryNumber: 'Inquiry Number',

    // 询盘关闭原因
    closeInquiryReason: 'Reason For Closing Inquiry',
    closedInquiryNumber: 'Number of closed inquiries',


    /* 行为视图 */

    tip_followUpStatus: 'Follow-up Status',
    activated: 'Enabled',
    terminated: 'Not Enabled',

    // 图表
    amount: 'Number',

    // 沟通渠道
    phone: 'Phone',
    Email: 'Email',
    WhatsApp: 'WhatsApp',
    Facebook: 'Facebook',
    weChat: 'Wechat',
    LinkedIn: 'LinkedIn',
    Twitter: 'Twitter',
    Message: 'Note',
    exhibition: 'Exhibition',
    customerVisiting: 'Customer Visit',
    visitCustomer: 'Visit Customer',
    websiteInteraction: 'Website Interaction',
    Line: 'Line',
    Skype: 'Skype',
    others: 'Others',

    // 表格
    col_seqNumber: 'Inquiry ID',
    col_companyName: 'Company Name',
    col_followUpType: 'Type of Follow-up Record',
    col_followUpContent: 'Content',
    col_followUpCreateUser: 'Creator',
    col_followUpTime: 'Follow-Up Time',

    // 弹出提示
    error_getChartData: 'Failed to get chart data',
    error_getTableData: 'Failed to get form data',
    error_getInquiryManagerList: 'Failed to get the sales rep. in charge of this inquiry',
    error_companyId: 'Company ID error',
    error_inquiryId: 'Inquiry ID error',
    error_getFollowUpStatusList: 'Failed to get Follow-Up Status list'
  },
  Modal: {
    /* 新建公司 */

    // 标题
    title_newCompany: 'Add Company Information',
    title_contact: 'Contact',
    title_inquiry: 'Inquiry Information',
    title_company: 'Company Information',

    // 联系人
    contact_nickName: 'Name',
    contact_jobTitle: 'Position',
    contact_email: 'E-mail',
    uniq: 'Duplicates Checking',
    cancelMerge: 'Change',
    contact_phone: 'Phone',
    contact_jobGrade: 'Occupation Class',
    contact_socialNetworkingPlatform: 'Social Platforms',
    contact_birthday: 'Birthday',
    tip_selectDate: 'Select Date',
    contact_gender: 'Gender',
    male: 'Male',
    female: 'Female',
    contact_picture: 'Contact Picture',
    contact_remark: 'Contact Note',
    contact_whatsApp: 'WhatsApp',

    // 询盘
    inq_productCategory: 'Product Categories',
    inq_demandProducts: 'Demand',
    inq_inquiryScore: 'Inquiry Score',
    inq_label: 'Label',
    inq_sourceChannel: 'Source Channel',
    inq_sourceWay: 'Source Mode',
    inq_grouping: 'Inquiry Grade',
    inq_followUp: 'Follow-up Status',
    inq_remark: 'Demand Note',
    tip_remark: 'The maximum length of this field is 20000 bytes.',
    transactionTime: 'Turnover time',
    transactionMoney: 'Turnover',


    // 公司
    corp_companyName: 'Company Name',
    corp_starLevel: 'Star Level',
    corp_shortName: 'Abbreviation',
    corp_countryArea: 'Country / Region',
    corp_mainProduct: 'Main Products',
    corp_scale: 'Scale',
    corp_clientType: 'Customer Type',
    corp_homePage: 'Company Website',
    corp_phone: 'Landline',
    corp_fax: 'Fax',
    corp_contactAddress: 'Contact Address',
    corp_relatedCompany: 'Related Companies',
    corp_companyPicture: 'Photo of Company',
    corp_companyRemark: 'Note',
    corp_mark: 'Mark',

    // modal 按钮
    modal_ok: 'Confirm',
    modal_cancel: 'Cancel',

    // 弹出提示
    error_whatsAppLength: 'WhatsApp fields are too long, with a maximum of 50 characters allowed',
    error_whatsAppFormat: 'WhatsApp format does not meet the requirements, please change and try again',
    error_emptyEmail: 'Email can not be empty',
    error_emailFormat: 'Incorrect mailbox format',
    error_emptyNickName: 'Name can not be empty',
    error_emptyProductCategory: 'Product Classification cannot be empty',
    error_emptyCompanyName: 'Company Name cannot be empty',
    error_noneUserInfo: 'Contact information is coming quickly, please check later',
    error_remarkLength: 'The maximum length of this field is 20000 bytes.',
    error_canNotBeEmpty: 'Can not be empty',
    error_ruleNameRepeated: 'The name of the automated rule cannot be repeated',
    error_existedCompanyNameNeedMerge: 'This company name already exists, please change <br> or click Duplicates Checking button to merge into the existing company',
    error_existedCompanyNameNeedAllowMerge: 'This company name already exists, please change<br> or set to allow duplicates in Common Settings',
    error_existedEmailNeedMerge: 'This email already exists, please change<br> or click Duplicates Checking button to merge into the existing contacts',
    error_existedEmailNeedAllowMerge: 'This mailbox already exists, please change the mailbox information<br> or complete the information in the existing contact',
    error_existedPhoneNeedAllowMerge: 'This phone number already exists in the CRM system, please check and change<br> or set to allow duplicates in Common Settings',
    success_newCompany: 'Added successfully',
    error_newCompany: 'Failed to add',
    info_waitUploadDocument: 'Please wait for the complete uploading',
    info_waitUpload: 'Please wait for the previous image to be uploaded.',
    info_uploadLengthLimit5: 'Can only save 5 images',
    info_uploadLengthLimit9: 'Can only save 9 images',
    error_uploadImage: 'Failed to uploadimage, please refresh and try again！',
    error_formatUploadImage: 'Please upload an image format file!',
    success_uniqMail: 'No duplicate Mailbox',
    success_uniqPhoneNumber: 'No duplicate Phone Number',
    success_uniqCompanyName: 'No duplicate Company Name',
    error_noPhoneToUniq: 'Please enter phone number',
    error_mustInput: 'Failed to get whether default field is required to be filled',
    info_companyPictureUploading: 'Company image has not been uploaded yet',
    info_contactPictureUploading: 'Contact image has not been uploaded yet',
    info_inquiryDocumentsUploading: 'Document has not been uploaded yet',
    info_canOnlyUpload: 'Can only upload',
    info_NumberOfPicture: 'images',


    /* 新建询盘 */

    // 标题
    title_newInquiry: 'Add inquiry',

    // 弹出提示
    success_newInquiry: 'Added successfully',
    error_newInquiry: 'Failed to add',
    repetition_newInquiry: 'The clue has been recorded as an inquiry and cannot be repeated',
    beBeing_newInquiry: 'The clue is being recorded as an inquiry by others and cannot be recorded repeatedly',


    /* 新建联系人 */

    // 标题
    title_newContact: 'Add Contact',

    // 弹出提示
    success_newContact: 'Added successfully',
    error_newContact: 'Failed to add',


    /* 编辑公司 */

    // 标题
    title_editCompany: 'Edit Company Information',

    // 弹出提示
    error_existedCompanyName: 'This company name already exists',
    success_editCompany: 'Saved Successfully',
    error_editCompany: 'Failed to save',
    error_countryAreaFormat: 'The format of Country/region field is wrong',


    /* 编辑询盘 */

    // 标题
    title_editInquiry: 'Edit Inquiry Information',

    // 弹出提示
    success_editInquiry: 'Saved Successfully',
    error_editInquiry: 'Failed to save',
    error_editMailUnfinished: 'Please edit the email address first',


    /* 编辑联系人 */

    // 标题
    title_editContact: 'Edit Contact Information',

    // 弹出提示
    success_editContact: 'Saved Successfully',
    error_editContact: 'Failed to save',


    /* 公司名去重 */

    // 标题
    title_uniqCompany: 'Duplicates Checking',
    title_uniqCompany_title_content: 'The current company name already exists',

    // modal 按钮
    modal_merge: 'Incorporate',

    // 表格
    tip_noRepeat: 'No duplicate',
    highseasCustomer: 'Public Pool',
    createTime: 'Creation Time',
    managers: 'Sales Rep.',

    // 弹出提示
    error_notAllowMerge: 'Please set to allow duplicates in Common Settings first',
    error_noSelectedCompany: 'Please select the company to be merged first',
    info_companyMergedTip: 'The merged company will adopt the existing company information, and current entered information has no valid value.',
    error_selectedCompany: 'Check the company for errors',


    /* 邮箱去重 */

    // 标题
    title_uniqEmail: 'Inquiries associated with this mailbox',
    title_uniqEmail_fixed: 'Email rechecking',
    title_uniqEmail_fixed_title_content: 'The current mailbox and the following contact mailbox are repeated',

    // 表格
    highseasInquiry: 'Public',

    // 弹出提示
    error_getEmailRelated: 'Failed to get inquiries associated with this mailbox',
    info_emailMergedTip: 'The merged contact will adopt the existing contact information, and current entered information has no valid value.',


    /* 电话去重 */

    // 标题
    title_uniqPhone: 'Inquiries associated with this phone',
    title_uniqPhone_fixed: 'Inquiries associated with this phone',
    title_uniqPhone_fixed_title_content: 'The current phone number is repeated with the following contact person',

    // 表格
    tip_noRelatedInquiry: 'No associated inquiry',

    // 弹出提示
    error_getPhoneRelated: 'Failed to get  inquiries associated with this phone',

    // modal 按钮
    modal_close: 'Close',

    /* 公司日志 */

    // 标题
    title_companyLog: 'Company Log',

    // 表格
    attrName: 'Attribute name',
    attrValue: 'Attribute value',
    changedItem: 'Change item',
    beforeChange: 'Before change',
    afterChange: 'After change',
    operate_add: 'Add',
    operate_new: 'Add',
    operate_edit: 'Edit',
    tip_canCopy: 'Click to copy current content',

    // 弹出提示
    error_getCompanyLog: 'Failed to get company log',
    error_logType: 'Failed to get log type',
    info_noDetailInfo: 'No details',
    success_copy: 'Content has been copied to the clipboard',
    error_copy: 'Failed to copy, please copy manually',


    /* 询盘日志 */

    // 标题
    title_inquiryLog: 'Inquiry Log',

    // 表格
    documentName: 'File name',
    operate_delete: 'Delete',
    operate_upload: 'Upload',
    operate_download: 'Download',
    operate_claim: 'Claim',
    operate_throw: 'Transfer to the Public Customers',
    operate_transfer: 'Transfer',
    operate_share: 'Share',
    operate_merge: 'Merge Inquiry',
    module_company: 'Company Information',
    module_contact: 'Contact Information',
    module_inquiry: 'Inquiry Information',
    module_document: 'Inquiry Document',
    module_schedule: 'Schedule',
    module_followUp: 'Follow-up Record',
    mail_followUp: 'Mail Record',

    // 弹出提示
    error_getInquiryLog: 'Failed to get inquiry log',

    // 主要联系人
    mainContact: 'Main contact',
    tip_changeMainContact: 'Contacts only allow one primary contact to be set up. Do you want to confirm the changes?',
    info_mainContactChanging: 'The main contact is being modified, please wait',

    /* 询盘日志 */

    // 标题
    title_contactLog: 'Contact Log',


    /* 导入数据 */

    // 标题
    title_importData: 'Import',

    // 缓冲提示
    spin_importing: 'Importing',

    // 上传文件
    prepareData: 'Prepare data to be imported according to the format of the data template',
    downloadTemplate: 'Download Data Template',
    selectFile: 'Select the file to import',
    addFile: 'Attachment',
    notice: 'Attention',
    fileFormatRequirement: 'Please enter data according to the template and don\'t modify the template file suffix and file format. Currently, only files with Excel2007 and above.xlsx suffixes are supported.',
    hint: 'Prompt',
    importTip: 'The importing process is not visible. Refresh to view importing condition.',
    fileSizeRequirement: 'File you want to import should be less than 1MB',
    detailInfo: 'Details',
    cancelUpload: 'Upload operation has been canceled',

    // modal 按钮
    modal_save: 'Save',

    // 弹出提示
    error_fileOutSize: 'File you want to upload should be less than 1MB',
    error_fileFormat: 'Wrong file format, please upload correct format Excel file',
    error_queryProcess: 'Failed to inquire importing progress(inquire every 5s)',


    /* 转移询盘 */

    // 标题
    title_transferInquiry: 'Transfer Inquiry',
    transferred: 'transferred',
    to: 'to',
    you: 'you',

    transferTo: 'Transfer to',
    transferClueSync: 'Synchronous transfer leads',
    retainOthers: 'Retain other Sales Rep',

    // 弹出提示
    success_transfer: 'Transferred inquiry successfully',
    error_transfer: 'Failed to transfer inquiry',
    error_transferClueSync: 'Failed to transfer leads synchronously',
    error_noTransferTo: 'Please select sales rep. to transfer to',
    error_existedTransferTo: 'is already the Sales Rep. of the inquiry, failed to transfer',
    warning_inquiryInfoChange: '该询盘负责人信息发生变更，请刷新页面后重试',


    /* 分享询盘 */

    // 标题
    title_shareInquiry: 'Share Inquiry',

    shareTo: 'Share with',

    // 弹出提示
    success_share: 'Shared inquiry successfully',
    error_share: 'Failed to share inquiry',
    error_noShareTo: 'Please select sales rep. to share with',
    errorOverLimit: '已达到最大可拥有客户数',

    /* 退入公海 */

    // 标题
    title_throwInquiry: 'Transfer To Public Customers',

    throwInquiryConfirm: 'Are you sure to <span>transfer it to the Public Customers</span>?',
    throwReason: 'Reasons for retreating to the Public Customers',
    details: 'Details',

    // 弹出提示
    success_throwInquiry: 'Transferred to the Public Customers successfully',
    error_throwInquiry: 'Failed to transfer it to the Public Customers',
    error_noThrowReason: 'Please choose reason to transfer to the Public Customers',


    /* 公海记录 */

    // 标题
    title_highseasRecord: 'Public Customers Record',

    inquiry: 'Inquiry',


    /* 关闭询盘 */

    // 标题
    title_closeInquiry: 'Close Inquiry',
    haveNoInquiryId: 'error inquiry id',
    haveNoFollowUpId: 'error follow-up Status id',

    closeReason: 'Reason for closing',

    // 弹出提示
    error_getCloseInquiryReasonList: 'Failed to get closing reason list',
    success_closeInquiry: 'Closed inquiry successfully',
    error_closeInquiry: 'Failed to close inquiry',


    /* 询盘关闭日志 */

    // 标题
    title_viewCloseLog: 'Inquiry closing record',

    hasNoCloseLog: 'This inquiry has no closing record',

    // 弹出提示
    error_getCloseInquiryLog: 'Failed to get inquiry closing record',


    /* 发送邮件 */

    // 标题
    title_sendMail: 'Select contact',

    // 弹出提示
    success_beforeJumpToMail: 'Saved successfully, will jump to email-composing interface',
    error_beforeJumpToMail: 'Please select mailbox first. If there is no optional email, please try to refresh the page or contact customer service.',
    error_getContactListByInquiry: 'Failed to get contact list',


    /* 任务 */

    // 标题
    title_newTask: 'Add Task',
    title_editTask: 'Edit Task',
    title_showTask: 'Task Details',

    task_name: 'Name',
    task_endTime: 'Deadline',
    task_remindTime: 'Reminder Time',
    noRemind: 'No reminder',
    onTimeToRemind: 'On Time Reminder',
    fiveMinutesInAdvance: '5 Minutes In Advance',
    fifteenMinutesInAdvance: '15 Minutes In Advance',
    thirtyMinutesInAdvance: '30 Minutes In Advance',
    oneHoursInAdvance: '1 Hour In Advance',
    towHoursInAdvance: '2 Hour In Advance',
    oneDayInAdvance: '1 Day In Advance',
    tip_searchCompanyName: 'Please enter company name',
    task_participants: 'Participant',
    task_relatedInquiry: 'Associated Inquiry',
    task_repeat: 'Repeated',
    noRepeat: 'non-repeated',
    task_repeatTime: 'Repeat Time',
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    Sunday: 'Sunday',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    tip_ifDaysLessThan31: 'When the number of days in the month is less than 31, automatically takes the last day of the month.',
    task_endCondition: 'Ending Condition',
    neverEnd: 'Never End',
    endDate: 'Ending Date',
    task_detailDesc: 'Details',
    errorOccurred: 'An error occurred',

    // modal 按钮
    modal_taskStatusToFinished: 'Marked As Done',
    modal_taskStatusToUnfinished: 'Mark As Undone',
    modal_delete: 'Delete',

    // modal 文本
    modal_deleteTask: 'Delete Task',
    modal_deleteTaskContent: 'Are you sure to delete this task?',

    // 弹出提示
    error_taskName: 'Please choose correct task name',
    error_taskEndTime: 'Please choose correct deadline',
    error_taskRemindTime: 'Please choose correct reminder time',
    error_emptyTaskParticipants: 'Please select participants',
    error_taskParticipantsError: 'Failed to get participant data',
    error_taskParticipantsWithoutSelf: 'You must add yourself to the task',
    error_taskRelatedInquiry: 'Please select correct associated inquiry',
    error_taskEndDate: 'Please select correct ending date',
    error_taskEndDate_compare_taskEndTime: 'The correct ending date should be before the correct deadline',
    error_taskRepeatTime: 'Please choose correct repeat time',
    error_getTaskParticipants: 'An error occurred while requesting task participant',
    success_changeTaskStatus: 'Changed Task Status successfully',
    error_changeTaskStatus: 'Failed to change Task Status',
    success_newTask: 'Task added successfully',
    error_newTask: 'Failed to add task',
    success_editTask: 'Saved successfully',
    error_editTask: 'Failed to save',
    success_deleteTask: 'Deleted task successfully',
    error_deleteTask: 'Failed to delete task',
    error_companyId: 'Company ID error',
    error_inquiryId: 'Inquiry ID error',
    error_getSubordinateInquiry: 'Failed to get subordinate inquiry',
    error_haveNoPermissionMyContact: 'You don\'t have access to the "My Contacts" page, can\'t jump to this page',
    error_haveNoPermissionAllContact: 'You don\'t have access to the "All Contacts" page, can\'t jump to this page',
    error_haveNoPermissionMyInquiry: 'You don\'t have access to the "My Inquiries" page, can\'t jump to this page',
    error_haveNoPermissionAllInquiry: 'You don\'t have access to the "All Inquiries" page, can\'t jump to this page',
    error_haveNoPermissionMyCustomer: 'You don\'t have access to the "My Customers" page, can\'t jump to this page',
    error_haveNoPermissionAllCustomer: 'You don\'t have access to the "All Customers" page, can\'t jump to this page',
    error_haveNoPermissionHighseasCustomer: 'You don\'t have access to the "Public Pool" page, can\'t jump to this page',

    /* 受众优化 */

    title_audienceOptimization: 'Audience optimization',
    grouping: 'Category',
    tip_select: 'Please select…',

    // 弹出提示
    error_unboundedBoth: 'Please bind Facebook or Google account first',
    info_unboundedGoogle: 'You do not bind Google account, can only do Facebook optimization',
    info_unboundedFB: 'You do not bind Facebook account, can only do Google optimization',
    error_unboundedFB: 'You do not bind Facebook account',
    error_getData: 'No data requested under this entry',
    error_requestNoData: 'Failed to get data',
    error_unboundFBAccount: 'Please bind your Facebook personal account before performing other related operations',
    error_selectGrouping: 'Please select at least one audience group',
    error_selectContact: 'Please select at least one contact',
    success_uploadGroupingBoth: 'Uploaded Google and Facebook audience successfully',
    info_uploadGroupingGoogle: 'Uploaded Google audience successfully, and failed to upload Facebook audience',
    info_uploadGroupingFB: 'Uploaded Facebook audience successfully, and failed to upload Google audience',
    error_uploadGrouping: 'Failed to upload audience',
    success_uploadGroupingOnlyGoogle: 'Uploaded Google audience successfully',
    error_uploadGroupingOnlyGoogle: 'Failed to upload Google audience',
    success_uploadGroupingOnlyFB: 'Uploaded Facebook audience successfully',
    error_uploadGroupingOnlyFB: 'Failed to upload Facebook audience',
    error_valueFormatError: 'Please enter a right positive number',
    success_uploadGoogle: 'Return data to Google successfully',
    error_uploadGoogle: 'Failed to return data to Google',
    success_manualBack: 'Inquiry has been submitted to manual return',
    cluesuccess_manualBack: 'Clue has been submitted to manual return',
    /* 添加标签 */

    // 标题
    title_addLabel: 'Add Tag',

    labelType: 'Tag Type',
    custom: 'Customize',
    fold: 'Collapse',
    customLabel: 'Customized Tag',
    add: 'Add',

    // 弹出提示
    error_getInquiryLabel: 'Failed to get current inquiry label',
    error_emptyLabelName: 'Label name is empty. Please enter label name and try again.',
    error_duplicateLabelName: 'This label name already exists, please correct and try again.',
    success_newCustomLabel: 'Added customized tag successfully',
    error_newCustomLabel: 'Failed to add customized tag',
    success_addLabel: 'Added tag successfully',
    error_addLabel: 'Failed to add tag',

    /* 认领客户 */

    // 标题
    title_claimCustomer: 'Claim Inquiry',

    confirmClaimCustomer: 'Are you sure to claim this inquiry?',

    // 弹出提示
    success_claimCustomer: 'Claimed inquiry successfully',
    error_claimCustomer: 'Failed to claim inquiry',


    /* 原日志部分(Log) */

    manager_beforeChange: 'Sales Rep. (before change)',
    manager_afterChange: 'Sales Rep. (after change)',
    empty_fullname: '[Null]',
    success: 'Success',
    error: 'Error',

    // 跟进记录
    followUpTime: 'Follow-Up Time',
    followUpContent: 'Follow-up Content',
    initiatorID: 'Sponsor ID',
    initiatorName: 'Sponsor Nickname',
    contactID: 'Contact ID',
    contactName: 'Contact Nickname',
    communicationChannel: 'Communication Channel',
    followUpPictures: 'Picture',
    imageUploading: 'Image has not been uploaded yet',


    /* 跳转询盘/客户 */
    error_JumpCustomerHaveNoPermission: 'You currently do not have permission to view this customer',
    error_JumpInquiryHaveNoPermission: 'You currently do not have permission to view this inquiry',
    error_JumpContactHaveNoPermission: 'You currently do not have permission to view this contact',
    error_JumpClueHaveNoPermission: 'You currently do not have permission to view this lead',
    error_JumpCustomerInHighseas: 'This customer is a public customer, can\'t jump',
    error_JumpInquiryInHighseas: 'This inquiry is a public inquiry, can\'t jump',
    error_JumpContactInHighseas: 'This contact is a public inquiry, can\'t jump',
    error_JumpClueInHighseas: 'This lead is a public lead, can\'t jump',
    error_JumpCustomerMerged: 'This company has been merged, can\'t jump',
    error_JumpInquiryMerged: 'This inquiry has been merged, can\'t jump',
    error_JumpContactMerged: 'This contact has been merged, can\'t jump',
    error_viewMailWhenCustomerInHighseas: 'This customer is a public customer, can\'t view details',
    error_viewMailWhenInquiryInHighseas: 'This inquiry is a public inquiry, can\'t view details',
    error_viewMailWhenContactInHighseas: 'This contact is a public inquiry, can\'t view details',
    error_viewMailWhenClueInHighseas: 'This lead is a public lead, can\'t view details',
    error_viewMailWhenCustomerMerged: 'This company has been merged, can\'t view details',
    error_viewMailWhenInquiryMerged: 'This inquiry has been merged, can\'t view details',
    error_viewMailWhenContactMerged: 'This contact has been merged, can\'t view details',


    /* 回传 Google */
    inquiryValue: 'Inquiry value',
    tip_inputInquiryValue: 'Please enter the inquiry value',
    title_returnInquiry: 'Return inquiry',
    returnInquiryToGoogleOrNot: 'Whether to return this inquiry to Google?',

    /* 合并 客户/询盘/联系人 */
    title_mergeCustomer: 'Merge customer',
    title_mergeInquiry: 'Merge inquiry',
    tip_mergeCustomer: 'Please select retained information after merging, the earliest create time wil be retained in the merged record. After nerging, the inquiry, contacts, and dynamics of the original customer are all superimposed and migrated to the main record.',
    tip_mergeInquiry: 'Please select retained information after merging, the earliest create time wil be retained in the merged record. After nerging, the The dynamics, contacts, tasks, documents, and responsible person information under the original inquiry are superimposed and migrated to the main record.',
    mainRecord: 'Main recording',

    // 提示
    success_merge: 'Successfully merged',
    error_merge: 'Failed to merge',


    /* 添加产品 */
    inquiryProduct: 'Inquiry details',
    addProduct: 'Add product',
    addedProduct: 'Added',
    kind: 'types products',
    totalAmount: 'Total Price',
    selectProduct: 'Please select product',
    tip_inputSearchedProductName: 'Please type product name',
    selectChildProduct: 'Select a subproduct of a configurable product',
    info_inputProductName: 'Please type product name!',


    error_get_all_fields_for_newCreate: 'Failed to get the field, please refresh the page and try again'
  },
  Html: {
    /* 询盘跟进 */

    // 无权限提示
    tip_haveNoPermission: 'You currently have no permission to view this module',

    // 添加跟进记录
    tip_addFollowUp: 'Write down follow-up record here...',
    followUpTime: 'Follow-Up Time',
    tip_selectDate: 'Select Date',
    communicationChannel: 'Communication Channel',
    contact: 'Contact',
    createTaskSync: 'Create a quick task at the same time, set the reminder time to',
    custom: 'Customize',
    date: 'date',
    oneDayLater: '1 day later',
    twoDaysLater: '2 day later',
    threeDaysLater: '3 day later',
    fourDaysLater: '4 day later',
    fiveDaysLater: '5 day later',
    submit: 'submit',
    loading: 'Please wait',

    // 筛选跟进记录
    cancelFilter: 'Cancel',
    initiator: 'sponsor',

    // 访问型跟进记录
    customerVisited: 'Customer visited',
    visitTime: 'Visit Time',
    createTime: 'Creation Time',
    talk: 'dialogue',
    noTalkToday: 'No conversation Today',
    message: 'Message',
    visitorId: 'Visitor Id',
    messageUrl: 'Message Page',
    noMessageToday: 'No Message Today',
    track: 'Trajectory',
    noTrackToday: 'No Track Today',
    info: 'Information',
    remark: 'Note',
    initialVisitTime: 'First Visit Time',
    leaveTime: 'Leaving Time',
    initialVisitUrl: 'First Visit Url',
    visitSource: 'Access Source',
    haveTalked: 'If Chated',
    visitorChatCount: 'Total Message Number Of Visitor',
    IPPosition: 'Ip Position',
    receptionServer: 'Customer Service',
    title: 'Title',
    browser: 'Browser',
    browserVersion: 'Browser Version',
    screenResolution: 'Screen Resolution',
    noInfoToday: 'No Information Today',

    // 邮件型跟进记录
    sender: 'Sender',
    recipient: 'Recipient',
    subject: 'Theme',
    sendTime: 'Time',
    size: 'Size',
    attachment: 'Attachment',
    viewAttachment: 'View Attachments',
    batchDownload: 'Batch Download',
    download: 'Download',
    preview: 'Preview',

    noInquiryFollowUp: 'No follow-up record',

    // 沟通渠道
    phone: 'Phone',
    Email: 'Email',
    WhatsApp: 'WhatsApp',
    Facebook: 'Facebook',
    weChat: 'Wechat',
    LinkedIn: 'LinkedIn',
    Twitter: 'Twitter',
    Message: 'Note',
    exhibition: 'Exhibition',
    customerVisiting: 'Customer Visit',
    visitCustomer: 'Visit Customer',
    websiteInteraction: 'Website Interaction',
    Line: 'Line',
    Skype: 'Skype',
    others: 'Others',

    // 时间
    today: 'Today',
    yesterday: 'Yesterday',
    recent7days: 'Last 7 days',
    recent14days: 'Last 14 days',
    recent30days: 'Last 30 days',
    thisWeek: 'This Week',
    lastWeek: 'Last Week',
    thisMonth: 'This Month',
    lastMonth: 'Last Month',

    // 弹出提示
    error_getInquiryManagerList: 'Failed to get the sales rep. in charge of this inquiry',
    error_getManuallyFollowUpList: 'Failed to get manually filled records',
    error_getMailFollowUpList: 'Failed to get mail-type records',
    error_getInquiryContactList: 'Failed to get contact list',
    error_emptyFollowUpContent: 'Please fill in the follow-up content',
    error_emptyDateAndTime: 'Please select date and time',
    error_DateAndTime: 'Follow up time should be less than the current time',
    error_emptyCommunicationChannel: 'Please select communication channel',
    error_emptyContact: 'Please select contact',
    error_followUpTime: 'Wrong time, please select correct time and try again',
    success_saveFollowUp: 'Successfully saved follow-up record',
    error_saveFollowUp: 'Failed to save a record',
    success_createFollowUpTask: 'Added task successfully',
    error_createFollowUpTask: 'Failed to add follow-up task',
    error_getMailDetail: 'Failed to get mail details',
    error_previewFormat: 'Previewing such files is not supported at this time',
    confirm_submitFollowUp: 'Submit onfirmation ?',
    tip_submitFollowUpUploading: 'The image is still being uploaded. Whether to continue to submit follow-up records ?',

    // 快速任务
    followUpTaskName: 'Follow-up task',
    new: 'Add',


    /* 联系人信息 */

    contactInfo: 'Contact Information',

    // 联系人
    contact_nickName: 'Name',
    contact_jobTitle: 'Position',
    contact_email: 'E-mail',
    uniq: 'Duplicates Checking',
    cancelMerge: 'Change',
    contact_phone: 'Phone',
    contact_jobGrade: 'Occupation Class',
    contact_socialNetworkingPlatform: 'Social Platforms',
    contact_birthday: 'Birthday',
    contact_gender: 'Gender',
    male: 'Male',
    female: 'Female',
    contact_picture: 'Contact Picture',
    contact_remark: 'Contact Note',
    contact_whatsApp: 'WhatsApp',

    operate_edit: 'Edit',

    // 弹出提示
    error_getContactListByInquiry: 'Failed to get contact list',


    /* 日程计划 */

    newTask: 'Add Task',
    taskEndTime: 'Deadline',
    participants: 'Participant',
    errorOccurred: 'An error occurred',
    taskName: 'Name',
    taskDetails: 'Task Details',

    // modal 文本
    sign: 'Mark',
    cancelSign: 'Unmark',
    modal_signTaskToFinished: 'Are you sure to mark this task as done?',
    modal_signTaskToUnfinished: 'Are you sure to mark this task as undone',
    modal_ok: 'Confirm',
    modal_cancel: 'Cancel',
    delete: 'Delete',
    modal_deleteTaskContent: 'Are you sure to delete this task?',

    // 提示文本
    success_changeTaskStatus: 'Changed Task Status successfully',
    error_changeTaskStatus: 'Failed to change Task Status',
    error_deleteTask: 'Failed to delete task',


    /* 相关文档 */

    tip_inputFileName: 'Please enter file name',
    tip_selectTime: 'Please select time',
    uploadDocument: 'Upload',
    uploader: 'Uploader',
    time: 'Time',
    nothing: 'No Documents',
    earlier: 'Earlier',

    // modal 按钮
    modal_close: 'Close',

    // 提示文本
    info_uploadLimit: 'Only 10 files can be uploaded at a time. The first 10 files will be uploaded.',
    info_permittedFormatTip: 'Only support to preview Office files, PDF files, TXT files and images',
    error_existedFileName: 'The current file name already exists in system, please change name first.',
    error_saveFile: 'Failed to save file',
    error_deleteFile: 'Failed to delete file',
    error_getFileList: 'Failed to get file list',
    error_noFiles: 'No files!',


    /* 询盘来源 */
    noInquiryOrigin: 'Inquiry created manually in CRM does not have related attribute of the "Inquiry Source"',

    firstVisitorAddress: 'First Visit Url',
    ipAddress: 'IP Address',
    ipLocation: 'Ip Position',
    serviceName: 'Customer service',
    createUser: 'Creator',
    saleName: 'Sales Rep.',
    seqNumber: 'Lead ID',
    firstVisitTime: 'Time to Start Visiting',
    lang: 'Language',

    createWay: 'Created through',
    visitor_history: 'History',
    web_msg: 'Website message',
    direct_create: 'direct-created',
    web_conversation: 'Website conversation',
    fb_leads: 'FB leads',
    fb_msg: 'Facebook message',
    fb_comment: 'Facebook comment',
    leadsId: 'Lead ID',
    adId: 'Ad ID',
    FBName: 'FB form name',
    leadsCreateTime: 'FB Leads Create Time',

    /* 跟进状态 */

    openInquiry: 'Open Inquiry',
    closeInquiry: 'Close Inquiry',
    error_inoperable: 'Inoperable',

    title_change_followUp: 'Inquiry follow-up status change',

    change_followUp_from: 'Do you want to change this inquiry\'s follow-up status from',
    change_followUp_to: 'to',

    // 弹出提示
    error_getFollowUpStatusList: 'Failed to get Follow-Up Status list',
    error_waitForChange: 'Please wait for the last follow-up status change to be completed',
    error_openInquiry: 'Failed to open Inquiry',
    success_changeFollowUpStatus: 'Changed follow-up status successfully',
    error_changeFollowUpStatus: 'Failed to change follow-up status',
    error_highseasInqCannotOperate: 'It is a public inquiry, can not be operated',
    error_saveClinchData: 'Failed to save turnover data',
    empty_transactionTime: 'Turnover time can not be empty',

    /* 操作记录 */


    /* 询盘明细 */
    productName: 'Product Name',
    productPrice: 'Product Price',
    productCount: 'Product Number',
    salesUnitPrice: 'Unit Price',
    discount: 'Discount',
    totalPrice: 'Total Price',
    error_getInquiryProduct: 'Failed to request inquiry details',
    error_getExchange: 'Failed to request exchange rate',
    error_currencyUnit: 'Wrong currency unit, cannot request exchange rate',


    /* 顶部筛选 */
    add_child_search: 'Create sub-filter',
    confirm_edit_search_recursively: 'When the upper level filter condition is modified, the sublevel filter condition will be modified too, whether to modify?',
    confirm_delete_search_recursively: 'The sub-filter condition will be deleted after deleting the upper level filter condition， whether to continue?',
    tip_cannot_filter_when_check_all: 'When check "All" ,can only save the filter, can not be filtered',
    error_save_existed_search: 'Customized filter already exists，failed to save.',
    error_sort_search: 'Failed to adjust common Filter order',
    cannot_save_existed: ' already exists, can not save.'
  },
  InqSet: {
    // 标题
    title_inquirySetting: 'Field Management',
    title_company: 'Company Information',
    title_contact: 'Contact',
    title_inquiry: 'Inquiry Information',

    editField: 'Edit Field',
    addField: 'Add Field',
    addCustomField: 'Add Customized Field',
    customField: 'Customized Field',
    draggable: 'Adjust the order of the fields by dragging',

    // 联系人
    contact_nickName: 'Name',
    contact_email: 'E-mail',
    contact_jobTitle: 'Position',
    contact_jobGrade: 'Occupation Class',
    contact_phone: 'Phone',
    contact_socialNetworkingPlatform: 'Social Platforms',
    contact_birthday: 'Birthday',
    tip_selectDate: 'Select Date',
    contact_gender: 'Gender',
    male: 'Male',
    female: 'Female',
    contact_remark: 'Contact Note',
    contact_picture: 'Contact Picture',
    contact_whatsApp: 'WhatsApp',

    // 询盘
    inq_productCategory: 'Product Categories',
    inq_demandProducts: 'Demand',
    inq_label: 'Label',
    inq_inquiryScore: 'Inquiry Score',
    inq_grouping: 'Inquiry Grade',
    inq_sourceChannel: 'Source Channel',
    inq_sourceWay: 'Source Mode',
    inq_followUp: 'Follow-up Status',
    inq_remark: 'Demand Note',


    // 公司
    corp_companyName: 'Company Name',
    corp_shortName: 'Abbreviation',
    corp_mainProduct: 'Main Products',
    corp_clientType: 'Customer Type',
    corp_starLevel: 'Star Level',
    corp_countryArea: 'Country / Region',
    corp_scale: 'Scale',
    corp_homePage: 'Company Website',
    corp_fax: 'Fax',
    corp_phone: 'Landline',
    corp_contactAddress: 'Contact Address',
    corp_relatedCompany: 'Related Companies',
    corp_companyPicture: 'Photo of Company',
    corp_companyRemark: 'Note',

    // modal 按钮
    modal_ok: 'Confirm',
    modal_cancel: 'Cancel',

    // modal
    mustInput: 'Required',
    fieldType: 'Field Type',
    fieldName: 'Field Name',
    textInput: 'Textbox',
    textArea: 'Textfield',
    error_overTypes: 'The number of text fieldS has reached the upper limit and cannot be added.',
    selectSingle: 'Single Selection',
    selectMultiple: 'Single Multiple',
    date: 'date',
    defaultValue: 'Prompt',
    selectItemsContent: 'Content',
    dateType: 'Date Type',
    time: 'Time',
    tip_noTip: 'No Prompt',
    deleteTile: 'Delete confirmation',
    deleteTip: 'Do you want to delete this field? After the field is deleted, the field information cannot be viewed on the CRM interface. You can enable the field at <Deprecated Field>.',
    deleteTip1: '] has been used by the lead template. After the field is deleted, the field information cannot be viewed in the CRM and the lead module. You can enable the field at <Deprecated Field>.<br><br>Do you want to delete this field?',
    deleteTip2: '] has been used by the clue template and the form template',
    deleteTip3: 'After the field is deleted, the information of the field cannot be viewed and synchronized in the CRM, clue, website message and Facebook leads module. The field can be enabled at the < deprecated field >.<br><br>Do you want to delete this field?',
    deleteTip4: 'Because the form needs to contain at least one field, the form template',
    deleteTip5: 'has only one field',
    deleteTip6: 'so this field cannot be deleted. Please modify the form template before deleting.',

    // 弹出提示
    info_waitForChange: 'Please wait for last switch to complete',
    success_changeMustInput: 'Changed required status successfully',
    error_changeMustInput: 'Failed to change required status',
    error_canNotChangeMustInput: 'Changing the required status is not supported',
    error_params: 'Parameter error',
    success_deleteField: 'Deleted field successfully',
    error_deleteField: 'Failed to delete field',
    success_restoreField: 'Restored field successfully',
    error_restoreField: 'Failed to restore field',
    error_fieldCountLimit: 'The maximum number of customized fields (including deleted fields) for a single module is 50',
    success_addField: 'Added field successfully',
    error_addField: 'Failed to add field',
    success_editField: 'Edited field successfully',
    error_editField: 'Failed to edit field',
    error_fieldName: 'Field name is required'

  },
  UniSet: {
    /* 通用设置 */

    universalSetting: 'Common Settings',
    clientType: 'Customer Type',
    scale: 'Scale',
    socialPlatform: 'Social Platforms',
    productCategory: 'Product Categories',
    grouping: 'Inquiry Grade',
    sourceChannel: 'Source Channel',
    sourceWay: 'Source Mode',
    followUp: 'Follow-up Status',
    setting_label: 'Label',
    throwReason: 'Reasons for transfering to the Public Customers',
    repeatRule: 'Repeating rules',
    closeReason: 'Reason For Closing Inquiry',
    visitorType: 'Visitor Category Settings',
    error_getOptionList: 'Failed to get option list',
    tip_unSortOption: 'The replaced option is either fixed or deactivated and does not participate in sorting!',
    error_sortOption: 'Failed to adjust field order',

    /* 客户类型 */

    // 操作
    new: 'Add',
    edit: 'Edit',
    delete: 'Delete',
    setDefaultValue: 'Set default',
    setsuccStage: 'Set turnover stage',
    choosesuccStage: 'Select turnover stage',
    // modal 按钮
    modal_ok: 'Confirm',
    modal_cancel: 'Cancel',

    // 弹出提示
    error_getClientTypeList: 'Failed to get customer types list',
    tryLater: '<br>Please try again later',
    success_add: 'Added successfully',
    error_add: 'Failed to add',
    success_edit: 'Saved successfully',
    error_edit: 'Failed to save',
    success_delete: 'Deleted successfully',
    error_delete: 'Failed to delete',
    error_contentRepeat: 'Content cannot be repeated',
    success_set_closingStage: 'Set [Closing stage] successfully',
    error_set_closingStage: 'Failed to set [Closing stage]',
    success_set_defaultValue: 'Set default successfully',
    error_set_defaultValue: 'Failed to set default',
    success_set_emptyDefaultValue: 'No option selected, there is  no default value for this field!',

    /* 规模 */

    title_scale: 'Scale',

    // 弹出提示
    error_getScaleList: 'Failed to get customer types list',


    /* 社交平台 */

    // 弹出提示
    error_getSocialNetworkingPlatformList: 'Failed to get social platform list',


    /* 产品分类 */

    // 弹出提示
    error_getProductCategoryList: 'Failed to get product category list',
    error_deleteDefaultValue: 'This option has been set as the default value and does not support disabling',
    error_setDisabledOptionDefaultValue: 'This option is disabled and cannot be set to the default',


    /* 分组 */

    // 弹出提示
    error_getGroupingList: 'Failed to get Inquiry Grade list',


    /* 来源渠道 */

    // 弹出提示
    error_getSourceChannelList: 'Failed to get source channel list',


    /* 来源方式 */

    // 弹出提示
    error_getSourceWayList: 'Failed to get Source Mode list',


    /* 跟进状态 */

    // 默认跟进状态
    defaultFollowUpStatus_inquiry: 'Inquiry',
    defaultFollowUpStatus_closeInquiry: 'Close Inquiry',

    UnChangeable: 'Cannot be changed',
    terminated: 'Not Enabled',
    notice: 'Attention',
    tip_editFollowUpStatus: 'Modifying this option will update historical data synchronously, please be cautious',

    // 弹出提示
    success_editStatus: 'Saved successfully',
    error_editStatus: 'Failed to save',
    error_getFollowUpStatusList: 'Failed to get Follow-Up Status list',
    info_deleteBeforeUnbind: 'This follow-up status is already associated with a Google conversion. Please unlink first.',


    /* 标签 */

    // 弹出提示
    error_getLabelList: 'Failed to get tag list',
    error_emptyLabelName: 'Label name is empty. Please enter label name and try again.',
    error_duplicateLabelName: 'This label name already exists, please correct and try again.',


    /* 扔入公海原因 */

    // 弹出提示
    error_getThrowReasonList: 'Failed to get reason list for transfering to the Public Customers',

    /* 重复规则 */

    // table
    allowed: 'allow',
    notAllowed: 'Not allow',
    uniq: 'Check Duplicates',
    notUniq: 'Not Check Duplicates',
    uniqFuzzy: 'Fuzzy Check',
    uniqPrecise: 'Precise check',
    email: 'E-mail',
    phone: 'Phone',
    weChat: 'Wechat',
    companyName: 'Company Name',
    mergeOperate: 'Whether to allow repeated entry',
    requestError: 'Request error',

    // 弹出提示
    success_editRepeatRule: 'Modified successfully',
    error_editRepeatRule: 'Failed to modify',
    success_editUniqRule: 'Modified successfully',
    error_editUniqRule: 'Failed to modify',

    /* 询盘关闭原因 */

    // 弹出提示
    error_getCloseInquiryReasonList: 'Failed to get closing reason list'
  },
  newDetail: {
    col_clientId: 'Customer ID',
    col_clientType: 'Customer Type',
    col_companyManagers: 'Sales Rep.',
    col_homePage: 'Company Website',
    col_contactAddress: 'Contact Address',
    col_companyName: 'Company Name',
    col_productCategory: 'Product Categories',
    col_inquiryManagers: 'Sales Rep.',
    col_grouping: 'Inquiry Grade',
    col_inquiryScore: 'Inquiry Score',
    col_nickName: 'Name',
    col_email: 'E-mail',
    col_phone: 'Phone',
    col_contactManagers: 'Sales Rep.',
    col_socialNetworkingPlatform: 'Social Platforms',

    module_FollowUp: 'Dynamics',
    module_DetailInfo: 'Details',
    module_ContactList: 'Contact',
    module_InquiryList: 'Inquiry',
    module_Documents: 'Document',
    module_Task: 'Task',
    module_InquiryProduct: 'Inquiry Details',

    error_getSubordinateInquiry: 'Failed to get subordinate inquiry',
    error_getSubordinateContact: 'Failed to get subordinate contact',
    error_getCompanyBriefInfo: 'Get a error to request customer brief message',
    error_getInquiryBriefInfo: 'Get a error to request inquiry brief message',
    error_getContactBriefInfo: 'Get a error to request contact brief message',
    error_urlRequest: 'Page error, unable to determine what details are currently requested',
    error_paramsRequest: 'Page error, unable to determine what details are currently requested',
    error_noMenuAuthority: 'You do not have view rights for this module',
    error_noContactsMenuAuthority: 'You do not have permission to view the contact management page, please contact your administrator to activate!',
    error_noHighseasCustomerMenuAuthority: 'You do not have permission to view the Public Pool page, please contact your administrator to activate!'
  },
  fieldLimit: {
    // 全局
    error_overLength: 'The length exceeds the limit, failed to request',

    // 询盘设置
    cname: 'Field Name',
    option: 'Content',
    colDefaultValue: 'Prompt',

    companyName: 'Company Name',
    shortName: 'Abbreviation',
    scale: 'Scale',
    mainProduct: 'Main Products',
    clientType: 'Customer Type',
    countryArea: 'Country / Region',
    homePage: 'Company Website',
    corpPhone: 'Landline',
    fax: 'Fax',
    contactAddress: 'Contact Address',
    relatedCompany: 'Related Companies',
    companyPicture: 'Photo of Company',
    companyRemark: 'Company Note',

    nickName: 'Name',
    jobTitle: 'Position',
    email: 'E-mail',
    phone: 'Phone',
    whatsApp: 'WhatsApp',
    jobGrade: 'Occupation Class',
    socialNetworkingPlatform: 'Social Platforms',
    birthday: 'Birthday',
    gender: 'Gender',
    picture: 'Contact Picture',
    contactRemark: 'Contact Note',

    productCategory: 'Product Categories',
    demandProducts: 'Demand',
    grouping: 'Inquiry Grade',
    sourceChannel: 'Source Channel',
    sourceWay: 'Source Mode',
    label: 'Label',
    inquiryScore: 'Inquiry Score',
    followUp: 'Follow-up Status',
    remark: 'Demand Note'
  },
  aliImport: {
    dataImportPlugin: 'Data Import Plugin',
    downloadPlugin: 'Plug-in download and use',
    downloadPluginTip: 'Please follow the steps below to complete the installation of the Leadscloud data import tool:',
    downloadPluginGuide: '1. Click to download <a>Leadscloud-Data Import Tool</a> to the local and unzip;<br/>' +
            '2. Enter the <strong>[More Tools]→[Extensions]</strong> interface of the <strong>Chrome</strong> browser, and keep the <strong>[Developer Mode]</strong> on the right side of the interface turned on;<br/>' +
            `<img src="${process.env.BASE_URL}image/aliImportCRX.png"/><br/>` +
            '3. Click the <strong>[Load decompressed extension program]</strong> button in the upper left corner to select the decompressed Leadscloud data import tool;<br/>' +
            '4. Make sure that the Leadscloud data import tool is <strong>[enabled]</strong>, and you can start importing data after completing the configuration before use.',
    downloadPluginRemark: 'Note: This plugin is only available for Chrome browser',
    fieldMatch: 'Field matching',
    aliInquiryField: 'Alibaba inquiry field',
    leadscloudClueField: 'Leadscloud Lead Template Fields',
    fieldInvalided: 'Matching relationship has expired',
    error_validateRelation: 'Some matching relationships are detected to be invalid, please reset or clear the matching relationships before saving',
    leaveConfirm: 'Confirm To Leave',
    leaveTip: 'Are you sure to leave? The field mapping relationship you edited has not been saved. Do you want to save and then leave?',
    leaveDirectly: 'Leave directly',
    leaveAfterSave: 'Save and leave',

    // 阿里字段多语言
    tradeId: 'Inquiry ID',
    productTitle: 'Product name',
    productImg: 'Product image',
    buyerName: 'Name',
    potentialScore: 'Potential score',
    registerDate: 'Registration time',
    country: 'Registration area',
    companyName: 'Company name',
    companyWebsite: 'Company website',
    email: 'E-mail',
    mobileNumber: 'Cell phone',
    phoneNumber: 'Landline',
    importanceLevel: 'Purchasing intention',
    categorys: 'Purchase category',
    annualProcurement: 'Annual purchase',
    marketingGroups: 'Customer group',
    pageNotes: 'Follow-up record',
    productViewCount: 'Product Views',
    validInquiryCount: 'Number of valid inquiries/responses',
    validRfqCount: 'Effective RFQ number',
    loginDays: 'Landing days',
    spamInquiryMarkedBySupplierCount: 'Number of garbage inquiries',
    addedToBlacklistCount: 'Number of blacklisted',
    preferredIndustries: 'Most frequently purchased industry',
    latestInquiryProducts: 'Recently Inquired Products',
    totalOrderCount: 'Total number of orders',
    totalOrderVolume: 'Total amount of orders',
    tradeSupplierCount: 'Number of trading suppliers'
  }
}
