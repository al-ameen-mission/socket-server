var DataTypes = require("sequelize").DataTypes;
var _accademicsession = require("./accademicsession");
var _account_head = require("./account_head");
var _admin = require("./admin");
var _admin_access = require("./admin_access");
var _admin_access_branch = require("./admin_access_branch");
var _admin_access_class = require("./admin_access_class");
var _admin_attendance = require("./admin_attendance");
var _admin_menu = require("./admin_menu");
var _admins = require("./admins");
var _admission = require("./admission");
var _application_letter = require("./application_letter");
var _attendance = require("./attendance");
var _attendance_devices = require("./attendance_devices");
var _bannerimage = require("./bannerimage");
var _book = require("./book");
var _book_category = require("./book_category");
var _book_issue = require("./book_issue");
var _book_location = require("./book_location");
var _book_missing = require("./book_missing");
var _book_purchase = require("./book_purchase");
var _book_purchase_details = require("./book_purchase_details");
var _book_shelf = require("./book_shelf");
var _book_vendor = require("./book_vendor");
var _branch = require("./branch");
var _branch_signatory_authority = require("./branch_signatory_authority");
var _budget_list = require("./budget_list");
var _budget_list_details = require("./budget_list_details");
var _campus_building = require("./campus_building");
var _campus_location = require("./campus_location");
var _career = require("./career");
var _certificate_template = require("./certificate_template");
var _contact = require("./contact");
var _contactus = require("./contactus");
var _cronsms = require("./cronsms");
var _curriculum = require("./curriculum");
var _dbbackup = require("./dbbackup");
var _eclass = require("./eclass");
var _eclass_access = require("./eclass_access");
var _eclass_doc = require("./eclass_doc");
var _eclass_homework = require("./eclass_homework");
var _edit_log = require("./edit_log");
var _electric_bill = require("./electric_bill");
var _exam = require("./exam");
var _exam_group = require("./exam_group");
var _exam_group_class_access = require("./exam_group_class_access");
var _exam_group_history = require("./exam_group_history");
var _examdetails = require("./examdetails");
var _examdetails_section = require("./examdetails_section");
var _expense = require("./expense");
var _expense_list = require("./expense_list");
var _expense_list_details = require("./expense_list_details");
var _fees = require("./fees");
var _fees_payment = require("./fees_payment");
var _fees_student = require("./fees_student");
var _fees_student_details = require("./fees_student_details");
var _feesconfig = require("./feesconfig");
var _followupcategory = require("./followupcategory");
var _followupcontact = require("./followupcontact");
var _followuphistory = require("./followuphistory");
var _gallerycatagory = require("./gallerycatagory");
var _global_brand = require("./global_brand");
var _global_session_setting = require("./global_session_setting");
var _global_template = require("./global_template");
var _global_vendor = require("./global_vendor");
var _grade_setting = require("./grade_setting");
var _guardian = require("./guardian");
var _health_history = require("./health_history");
var _history = require("./history");
var _holidays = require("./holidays");
var _homework_file = require("./homework_file");
var _hostel_room = require("./hostel_room");
var _imageuploader = require("./imageuploader");
var _item_category = require("./item_category");
var _item_entries = require("./item_entries");
var _item_entry_details = require("./item_entry_details");
var _item_entry_to_account_head = require("./item_entry_to_account_head");
var _item_meta = require("./item_meta");
var _item_to_account_head = require("./item_to_account_head");
var _item_tracking = require("./item_tracking");
var _item_unique = require("./item_unique");
var _item_unique_meta = require("./item_unique_meta");
var _item_uses = require("./item_uses");
var _item_uses_details = require("./item_uses_details");
var _items = require("./items");
var _job_document = require("./job_document");
var _job_progress = require("./job_progress");
var _job_worker_used = require("./job_worker_used");
var _jobs = require("./jobs");
var _land = require("./land");
var _land_file = require("./land_file");
var _land_seller_donor = require("./land_seller_donor");
var _lang = require("./lang");
var _library = require("./library");
var _library_book_issue = require("./library_book_issue");
var _logrecord = require("./logrecord");
var _mess_baburchi = require("./mess_baburchi");
var _mess_issue = require("./mess_issue");
var _mess_item = require("./mess_item");
var _mess_meal_item = require("./mess_meal_item");
var _mess_meal_member = require("./mess_meal_member");
var _mess_purchase = require("./mess_purchase");
var _mess_purchase_details = require("./mess_purchase_details");
var _mess_stock = require("./mess_stock");
var _news = require("./news");
var _note = require("./note");
var _notice = require("./notice");
var _noticeboard = require("./noticeboard");
var _online_form = require("./online_form");
var _otherpayment = require("./otherpayment");
var _otp = require("./otp");
var _pagecontent = require("./pagecontent");
var _payment = require("./payment");
var _photogallery = require("./photogallery");
var _printreceiptno = require("./printreceiptno");
var _question = require("./question");
var _question_bank = require("./question_bank");
var _question_chapter = require("./question_chapter");
var _question_paper_set = require("./question_paper_set");
var _question_raw_data = require("./question_raw_data");
var _question_topic = require("./question_topic");
var _questionanswared = require("./questionanswared");
var _rbcategory = require("./rbcategory");
var _rbcontact = require("./rbcontact");
var _rbcountry = require("./rbcountry");
var _rblocation = require("./rblocation");
var _resultentry_access = require("./resultentry_access");
var _results = require("./results");
var _resultsdetails = require("./resultsdetails");
var _review_details = require("./review_details");
var _review_subject = require("./review_subject");
var _room_setting = require("./room_setting");
var _salary = require("./salary");
var _scholarship = require("./scholarship");
var _school_setting = require("./school_setting");
var _self_assesment = require("./self_assesment");
var _settings = require("./settings");
var _sms = require("./sms");
var _smshistory = require("./smshistory");
var _smstemplate = require("./smstemplate");
var _staff = require("./staff");
var _stock_access = require("./stock_access");
var _student = require("./student");
var _student_certificate = require("./student_certificate");
var _student_meta = require("./student_meta");
var _subject = require("./subject");
var _teacher = require("./teacher");
var _teacherattendance = require("./teacherattendance");
var _ticket = require("./ticket");
var _ticket_document = require("./ticket_document");
var _ticket_reply = require("./ticket_reply");
var _ticket_status_history = require("./ticket_status_history");
var _travel_details = require("./travel_details");
var _travel_driver = require("./travel_driver");
var _userattendance = require("./userattendance");
var _users = require("./users");
var _vehicle_config = require("./vehicle_config");
var _workers = require("./workers");
var _wtbox = require("./wtbox");

function initModels(sequelize) {
  var accademicsession = _accademicsession(sequelize, DataTypes);
  var account_head = _account_head(sequelize, DataTypes);
  var admin = _admin(sequelize, DataTypes);
  var admin_access = _admin_access(sequelize, DataTypes);
  var admin_access_branch = _admin_access_branch(sequelize, DataTypes);
  var admin_access_class = _admin_access_class(sequelize, DataTypes);
  var admin_attendance = _admin_attendance(sequelize, DataTypes);
  var admin_menu = _admin_menu(sequelize, DataTypes);
  var admins = _admins(sequelize, DataTypes);
  var admission = _admission(sequelize, DataTypes);
  var application_letter = _application_letter(sequelize, DataTypes);
  var attendance = _attendance(sequelize, DataTypes);
  var attendance_devices = _attendance_devices(sequelize, DataTypes);
  var bannerimage = _bannerimage(sequelize, DataTypes);
  var book = _book(sequelize, DataTypes);
  var book_category = _book_category(sequelize, DataTypes);
  var book_issue = _book_issue(sequelize, DataTypes);
  var book_location = _book_location(sequelize, DataTypes);
  var book_missing = _book_missing(sequelize, DataTypes);
  var book_purchase = _book_purchase(sequelize, DataTypes);
  var book_purchase_details = _book_purchase_details(sequelize, DataTypes);
  var book_shelf = _book_shelf(sequelize, DataTypes);
  var book_vendor = _book_vendor(sequelize, DataTypes);
  var branch = _branch(sequelize, DataTypes);
  var branch_signatory_authority = _branch_signatory_authority(sequelize, DataTypes);
  var budget_list = _budget_list(sequelize, DataTypes);
  var budget_list_details = _budget_list_details(sequelize, DataTypes);
  var campus_building = _campus_building(sequelize, DataTypes);
  var campus_location = _campus_location(sequelize, DataTypes);
  var career = _career(sequelize, DataTypes);
  var certificate_template = _certificate_template(sequelize, DataTypes);
  var contact = _contact(sequelize, DataTypes);
  var contactus = _contactus(sequelize, DataTypes);
  var cronsms = _cronsms(sequelize, DataTypes);
  var curriculum = _curriculum(sequelize, DataTypes);
  var dbbackup = _dbbackup(sequelize, DataTypes);
  var eclass = _eclass(sequelize, DataTypes);
  var eclass_access = _eclass_access(sequelize, DataTypes);
  var eclass_doc = _eclass_doc(sequelize, DataTypes);
  var eclass_homework = _eclass_homework(sequelize, DataTypes);
  var edit_log = _edit_log(sequelize, DataTypes);
  var electric_bill = _electric_bill(sequelize, DataTypes);
  var exam = _exam(sequelize, DataTypes);
  var exam_group = _exam_group(sequelize, DataTypes);
  var exam_group_class_access = _exam_group_class_access(sequelize, DataTypes);
  var exam_group_history = _exam_group_history(sequelize, DataTypes);
  var examdetails = _examdetails(sequelize, DataTypes);
  var examdetails_section = _examdetails_section(sequelize, DataTypes);
  var expense = _expense(sequelize, DataTypes);
  var expense_list = _expense_list(sequelize, DataTypes);
  var expense_list_details = _expense_list_details(sequelize, DataTypes);
  var fees = _fees(sequelize, DataTypes);
  var fees_payment = _fees_payment(sequelize, DataTypes);
  var fees_student = _fees_student(sequelize, DataTypes);
  var fees_student_details = _fees_student_details(sequelize, DataTypes);
  var feesconfig = _feesconfig(sequelize, DataTypes);
  var followupcategory = _followupcategory(sequelize, DataTypes);
  var followupcontact = _followupcontact(sequelize, DataTypes);
  var followuphistory = _followuphistory(sequelize, DataTypes);
  var gallerycatagory = _gallerycatagory(sequelize, DataTypes);
  var global_brand = _global_brand(sequelize, DataTypes);
  var global_session_setting = _global_session_setting(sequelize, DataTypes);
  var global_template = _global_template(sequelize, DataTypes);
  var global_vendor = _global_vendor(sequelize, DataTypes);
  var grade_setting = _grade_setting(sequelize, DataTypes);
  var guardian = _guardian(sequelize, DataTypes);
  var health_history = _health_history(sequelize, DataTypes);
  var history = _history(sequelize, DataTypes);
  var holidays = _holidays(sequelize, DataTypes);
  var homework_file = _homework_file(sequelize, DataTypes);
  var hostel_room = _hostel_room(sequelize, DataTypes);
  var imageuploader = _imageuploader(sequelize, DataTypes);
  var item_category = _item_category(sequelize, DataTypes);
  var item_entries = _item_entries(sequelize, DataTypes);
  var item_entry_details = _item_entry_details(sequelize, DataTypes);
  var item_entry_to_account_head = _item_entry_to_account_head(sequelize, DataTypes);
  var item_meta = _item_meta(sequelize, DataTypes);
  var item_to_account_head = _item_to_account_head(sequelize, DataTypes);
  var item_tracking = _item_tracking(sequelize, DataTypes);
  var item_unique = _item_unique(sequelize, DataTypes);
  var item_unique_meta = _item_unique_meta(sequelize, DataTypes);
  var item_uses = _item_uses(sequelize, DataTypes);
  var item_uses_details = _item_uses_details(sequelize, DataTypes);
  var items = _items(sequelize, DataTypes);
  var job_document = _job_document(sequelize, DataTypes);
  var job_progress = _job_progress(sequelize, DataTypes);
  var job_worker_used = _job_worker_used(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var land = _land(sequelize, DataTypes);
  var land_file = _land_file(sequelize, DataTypes);
  var land_seller_donor = _land_seller_donor(sequelize, DataTypes);
  var lang = _lang(sequelize, DataTypes);
  var library = _library(sequelize, DataTypes);
  var library_book_issue = _library_book_issue(sequelize, DataTypes);
  var logrecord = _logrecord(sequelize, DataTypes);
  var mess_baburchi = _mess_baburchi(sequelize, DataTypes);
  var mess_issue = _mess_issue(sequelize, DataTypes);
  var mess_item = _mess_item(sequelize, DataTypes);
  var mess_meal_item = _mess_meal_item(sequelize, DataTypes);
  var mess_meal_member = _mess_meal_member(sequelize, DataTypes);
  var mess_purchase = _mess_purchase(sequelize, DataTypes);
  var mess_purchase_details = _mess_purchase_details(sequelize, DataTypes);
  var mess_stock = _mess_stock(sequelize, DataTypes);
  var news = _news(sequelize, DataTypes);
  var note = _note(sequelize, DataTypes);
  var notice = _notice(sequelize, DataTypes);
  var noticeboard = _noticeboard(sequelize, DataTypes);
  var online_form = _online_form(sequelize, DataTypes);
  var otherpayment = _otherpayment(sequelize, DataTypes);
  var otp = _otp(sequelize, DataTypes);
  var pagecontent = _pagecontent(sequelize, DataTypes);
  var payment = _payment(sequelize, DataTypes);
  var photogallery = _photogallery(sequelize, DataTypes);
  var printreceiptno = _printreceiptno(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var question_bank = _question_bank(sequelize, DataTypes);
  var question_chapter = _question_chapter(sequelize, DataTypes);
  var question_paper_set = _question_paper_set(sequelize, DataTypes);
  var question_raw_data = _question_raw_data(sequelize, DataTypes);
  var question_topic = _question_topic(sequelize, DataTypes);
  var questionanswared = _questionanswared(sequelize, DataTypes);
  var rbcategory = _rbcategory(sequelize, DataTypes);
  var rbcontact = _rbcontact(sequelize, DataTypes);
  var rbcountry = _rbcountry(sequelize, DataTypes);
  var rblocation = _rblocation(sequelize, DataTypes);
  var resultentry_access = _resultentry_access(sequelize, DataTypes);
  var results = _results(sequelize, DataTypes);
  var resultsdetails = _resultsdetails(sequelize, DataTypes);
  var review_details = _review_details(sequelize, DataTypes);
  var review_subject = _review_subject(sequelize, DataTypes);
  var room_setting = _room_setting(sequelize, DataTypes);
  var salary = _salary(sequelize, DataTypes);
  var scholarship = _scholarship(sequelize, DataTypes);
  var school_setting = _school_setting(sequelize, DataTypes);
  var self_assesment = _self_assesment(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var sms = _sms(sequelize, DataTypes);
  var smshistory = _smshistory(sequelize, DataTypes);
  var smstemplate = _smstemplate(sequelize, DataTypes);
  var staff = _staff(sequelize, DataTypes);
  var stock_access = _stock_access(sequelize, DataTypes);
  var student = _student(sequelize, DataTypes);
  var student_certificate = _student_certificate(sequelize, DataTypes);
  var student_meta = _student_meta(sequelize, DataTypes);
  var subject = _subject(sequelize, DataTypes);
  var teacher = _teacher(sequelize, DataTypes);
  var teacherattendance = _teacherattendance(sequelize, DataTypes);
  var ticket = _ticket(sequelize, DataTypes);
  var ticket_document = _ticket_document(sequelize, DataTypes);
  var ticket_reply = _ticket_reply(sequelize, DataTypes);
  var ticket_status_history = _ticket_status_history(sequelize, DataTypes);
  var travel_details = _travel_details(sequelize, DataTypes);
  var travel_driver = _travel_driver(sequelize, DataTypes);
  var userattendance = _userattendance(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var vehicle_config = _vehicle_config(sequelize, DataTypes);
  var workers = _workers(sequelize, DataTypes);
  var wtbox = _wtbox(sequelize, DataTypes);

  item_entries.belongsTo(item_entries, { as: "parent_item_entry", foreignKey: "parent"});
  item_entries.hasMany(item_entries, { as: "item_entries", foreignKey: "parent"});
  item_entry_details.belongsTo(item_entries, { as: "item_entry", foreignKey: "item_entry_id"});
  item_entries.hasMany(item_entry_details, { as: "item_entry_details", foreignKey: "item_entry_id"});
  item_entry_details.belongsTo(item_entry_details, { as: "parent_item_entry_detail", foreignKey: "parent"});
  item_entry_details.hasMany(item_entry_details, { as: "item_entry_details", foreignKey: "parent"});
  item_unique.belongsTo(item_entry_details, { as: "item_entry_detail", foreignKey: "item_entry_detail_id"});
  item_entry_details.hasMany(item_unique, { as: "item_uniques", foreignKey: "item_entry_detail_id"});

  return {
    accademicsession,
    account_head,
    admin,
    admin_access,
    admin_access_branch,
    admin_access_class,
    admin_attendance,
    admin_menu,
    admins,
    admission,
    application_letter,
    attendance,
    attendance_devices,
    bannerimage,
    book,
    book_category,
    book_issue,
    book_location,
    book_missing,
    book_purchase,
    book_purchase_details,
    book_shelf,
    book_vendor,
    branch,
    branch_signatory_authority,
    budget_list,
    budget_list_details,
    campus_building,
    campus_location,
    career,
    certificate_template,
    contact,
    contactus,
    cronsms,
    curriculum,
    dbbackup,
    eclass,
    eclass_access,
    eclass_doc,
    eclass_homework,
    edit_log,
    electric_bill,
    exam,
    exam_group,
    exam_group_class_access,
    exam_group_history,
    examdetails,
    examdetails_section,
    expense,
    expense_list,
    expense_list_details,
    fees,
    fees_payment,
    fees_student,
    fees_student_details,
    feesconfig,
    followupcategory,
    followupcontact,
    followuphistory,
    gallerycatagory,
    global_brand,
    global_session_setting,
    global_template,
    global_vendor,
    grade_setting,
    guardian,
    health_history,
    history,
    holidays,
    homework_file,
    hostel_room,
    imageuploader,
    item_category,
    item_entries,
    item_entry_details,
    item_entry_to_account_head,
    item_meta,
    item_to_account_head,
    item_tracking,
    item_unique,
    item_unique_meta,
    item_uses,
    item_uses_details,
    items,
    job_document,
    job_progress,
    job_worker_used,
    jobs,
    land,
    land_file,
    land_seller_donor,
    lang,
    library,
    library_book_issue,
    logrecord,
    mess_baburchi,
    mess_issue,
    mess_item,
    mess_meal_item,
    mess_meal_member,
    mess_purchase,
    mess_purchase_details,
    mess_stock,
    news,
    note,
    notice,
    noticeboard,
    online_form,
    otherpayment,
    otp,
    pagecontent,
    payment,
    photogallery,
    printreceiptno,
    question,
    question_bank,
    question_chapter,
    question_paper_set,
    question_raw_data,
    question_topic,
    questionanswared,
    rbcategory,
    rbcontact,
    rbcountry,
    rblocation,
    resultentry_access,
    results,
    resultsdetails,
    review_details,
    review_subject,
    room_setting,
    salary,
    scholarship,
    school_setting,
    self_assesment,
    settings,
    sms,
    smshistory,
    smstemplate,
    staff,
    stock_access,
    student,
    student_certificate,
    student_meta,
    subject,
    teacher,
    teacherattendance,
    ticket,
    ticket_document,
    ticket_reply,
    ticket_status_history,
    travel_details,
    travel_driver,
    userattendance,
    users,
    vehicle_config,
    workers,
    wtbox,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
