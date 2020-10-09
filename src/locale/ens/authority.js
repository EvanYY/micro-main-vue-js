export default {
  permissionsSetting: 'Authority Settings',
  companyInfo: 'Company Information',
  company: 'Company',
  url: 'Company Website',
  edition: 'Leadscloud Version',
  startDate: 'Start Date',
  closeDate: 'Deadline',
  remainderDay: 'Remaining Days',
  all: 'Accounts',
  use: 'Enabled Accounts',
  surplus: 'Remaining Accounts',
  addUser: 'Add Account',
  accountUsage: 'Account Usage',
  back: 'Return',
  yes: 'Yes',
  no: 'No',
  male: 'Male',
  female: 'Female',
  remark: 'Note',
  ord: 'No.',
  back_authority_setting: 'Return',
  userManagement: {
    title: 'Dpartment & Accounts',
    organ: 'Organization',
    organInput: 'Please enter department name',
    userList: 'Account List',
    searchCategory: 'Please select a category',
    searchContent: 'Please enter category',
    common: 'Total',
    strip: 'Accounts',
    allocaPermis: 'Assign Permissions',
    setTurnover: 'Set Resignation',
    lock: 'Disabled',
    unlock: 'Enable',
    lname: 'Login Name',
    lnameTip: 'Login Name, cannot be modified after setting',
    ename: 'English Name',
    hasChat: 'Online customer service',
    hasInquiries: 'Sales',
    isfbService: 'Customer service of FB public pages',
    functionalPermis: 'Functional Authority',
    adminPermis: 'Administrative Authority',
    fieldPermis: 'Field Authority',
    name: 'Name',
    department: 'Department',
    selectDepartment: 'Please select department',
    email: 'E-mail',
    tel: 'Phone',
    sex: 'Gender',
    state: 'Status',
    opthion: 'Operation',
    edit: 'Edit',
    workType0: 'Incumbent',
    workType1: 'Resignation',
    workType2: 'All',
    departmentErr: 'Failed to get department list',
    queryFailure: 'Failed to filter',
    passwd: 'Password',
    categoryErr: 'Please select category first',
    addSuccess: 'Added successfully',
    editSuccess: 'Saved successfully',
    delSuccess: 'Deleted successfully',
    typeSuccess: 'Status modified successfully',
    departmentName: 'Department Name',
    editDepartment: 'Edit',
    addDepartment: 'Add (Department)',
    editErr: 'Failed to save',
    editUser: 'Edit',
    maxLengthLimit: 'The maximum character length is ',
    nameEmpty: 'Name can not be empty',
    emailEmpty: 'E-mail can not be empty',
    emailErr: 'Incorrect mailbox format',
    lnameEmpty: 'Login Name can not be empty',
    enameEmpty: 'English Name can not be empty',
    telEmpty: 'Phone can not be empty',
    passwdEmpty: 'Password can not be empty',
    deparEmpty: 'Please select department',
    selectSex: 'Please select gender',
    delDepartment: 'Are you sure to delete this department?',
    delDepar: 'Delete Department',
    delAccount: 'After the account is resigned, it cannot be recovered. Do you want to continue?',
    delAcc: 'Set Resignation',
    successAccount: 'Set resignation successfully',
    nameSpace: 'Name cannot use spaces',
    nameExists: 'This name already exists',
    dnameEmpty: 'Name can not be empty',
    need_number: 'Please enter number',
    ordEmpty: 'Serial number can not be empty',
    addDepartmentErr: 'Failed to add',
    assUser: 'Accounts',
    assInfo: 'Select the functional, administrative, and field authority types to be assigned',
    functionalInfo: 'Used to control the authority menu and function buttons available to the account',
    adminInfo: 'Used to control the scope of the account to view data, etc.',
    fileInfo: 'Used to control the fields that the account system interface can view and edit.',
    selected: 'Selected',
    permisSuccess: 'Saved successfully',
    delAccOK: 'Can set a resignation：',
    delAccNO: 'Cannot set a resignation:',
    delId: 'Account ID',
    delClue: 'Leads',
    delInquiry: 'Inquiries',
    delNO: 'The account cannot be set up for resignation. Please transfer the Leads and inquiries under the account first.',
    userInfo: 'Basic Information',
    showMoreInfo: 'Click to see more',
    authorityRole: 'Authorize',
    expandOneLevel: 'Expand the one-level menu',
    expandTwoLevel: 'Expand secondary menu',
    expandThreeLevel: 'Expand the three-level menu',
    foldAllLevel: 'Fold all',
    accountStatus: 'Account status',
    getFunctionalPermissionsFail: 'Failed to get feature permission',
    lockAccount: 'Disable account',
    lockAccountConfirm: 'Do you want to disable the account?：',
    lockAccountTip: 'Note: You will not be able to log in after the account is disabled.',
    noEmptyWarning: 'The required field cannot be empty. Please confirm and save it.',
    userNumLimitTip: 'The number of activated accounts of this company has reached the upper limit, please contact the person in charge to purchase more accounts',
    checkUserInfo: 'Please check if the information is correctly.'
  },
  functionalPermis: {
    title: 'Functional Authority',
    role_list: 'Role List',
    allocation_function: 'Assign functional authority',
    explain_one: 'Please slect menu for this functional role',
    explain_two: 'Note: The role of this module is used to control accounts\' menu and function operations. After setting, please assign the function permission ',
    button_save: 'Save',
    button_add: 'Add',
    button_cancel: 'Cancel',
    button_confirm: 'Delete Confirmation',
    delete_info: 'Are you sure to delete this functional role?',
    add_info: 'Add Role',
    enter_some: 'Please enter...',
    all_select: 'Select All ',
    yes: 'Yes',
    no: 'No',
    name: 'Name',
    check_info: 'Name can not be empty',
    check_info_two: 'Role name already exists, please change！',
    update_success: 'Modify the role successfully/Saved successfully',
    update_warning: 'Failed to modify the role/Failed to save',
    add_success: 'Added successfully',
    add_warning: 'Failed to add role',
    delete_success: 'Deleted successfully',
    delete_warning: 'Failed to delete',
    just_info: 'Please select at least one menu'

  },
  adminPermis: {
    title: 'Administrative Authority',
    role_list: 'Role List',
    allocation_function: 'Assign administrative authority',
    delete_info: 'Are you sure to delete this role?',
    button_confirm: 'Delete Confirmation',
    button_save: 'Save',
    button_add: 'Add',
    button_update: 'Edit',
    button_cancel: 'Cancel',
    explain_one: 'Set data permissions of the role under the department management dimension (including: read, modify, transfer)',
    explain_two: ' Please select people to be managed in the right list to view these accounts\' data information',
    custom_settings: 'Customized Setting',
    management_type: 'Management Type',
    my_self: 'Own data',
    my_department: 'This Department\'s Data',
    my_company: 'Company\'s data',
    user_list_added: 'Account list added',
    user_list_selected: 'Account list selected',
    select_action_role: 'Accounts',
    all_select: 'Select All',
    yes: 'Yes ',
    no: 'No',
    enter_some: 'Please enter…',
    update_name: 'Modify role name',
    name: 'Role Name',
    addRole: 'Add role',
    newRoleName: 'Name',
    accountId: 'Account ID',
    department: 'Department',
    updateNameSuccess: 'Modified name successfully！',
    updateNameError: 'Failed to modify name！',
    nameExisted: 'Role name already exists ！',
    getAddedListFail: 'Failed to get added person list！',
    getRoleInfoFail: 'Failed to get role information！',
    nameRepeated: 'Role name already exists, please change！',
    just_info: 'Please select at least one person',
    check_info: 'Name can not be empty!'
  },
  fieldPermis: {
    title: 'Field Authority',
    userList: 'Role List',
    admin: 'Default administrator',
    delUser: 'Deleted role successfully',
    editName: 'Modify role name',
    name: 'Role Name',
    addSuccess: 'Added role successfully',
    delUserSure: 'Are you sure to delete this role?',
    addUser: 'Add role',
    assPermis: 'Assign field authority',
    assPermisInfo: 'The role of this module is used to control the fields that accounts can view and manipulate. After setting, please assign field authority on the account management page.',
    interface: 'Interface',
    fieldDes: 'Field Description',
    show: 'Display',
    read: 'Read Only',
    contactInfo: 'Contact Information',
    enquiryInfo: 'Inquiry Information',
    companyInfo: 'Company Information'
  },
  BIAuthority: {
    title: 'BI 报表权限设置'
  }
}
