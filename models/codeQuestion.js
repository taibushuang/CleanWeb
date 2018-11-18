let mongoose = require('mongoose');

let answerSchema = new mongoose.Schema({
  strAnswer: String,
  chinese: String,
  strKey: String,
  fullUrl: String, //答案来源网址
  website: String //来源网站
},{_id: false, timestamps: true});


//优惠券对象，需要绑定用户使用
let codeQuestionSchema = new mongoose.Schema({
  question: String, //完整问题
  strKey: String, //问题关键字
  chinese: String, //中文问题
  fullUrl: String, //问题来源网址
  website: String, //来源网站
  answers:[answerSchema] //答案
}, {
  timestamps: true,
  id: false
});

let CodeQuestion = mongoose.model('codeQuestion', codeQuestionSchema);

module.exports = CodeQuestion;
