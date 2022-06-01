const cookieController = {};

cookieController.setCookie = (req, res, next) =>{
  res.cookie('codesmith', 'hi');
  res.cookie('secret', Math.floor(Math.random() * 100).toString());
  return next();
}

cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  // res.cookie('ssid',)
  res.cookie('ssid', res.locals.user.id, {httpOnly: true});
  return next();
}



module.exports = cookieController;