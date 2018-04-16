
// 获取当前时间
function getFormatDate(){    
  var nowDate = new Date();     
  var year = nowDate.getFullYear();    
  var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;    
  var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();    
  var hour = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();    
  var minute = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();    
  var second = nowDate.getSeconds()< 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();    
  return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;    
}

export default{
  getFormatDate
}