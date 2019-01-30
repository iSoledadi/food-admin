/**
 * 全局设置相关路由
 */
const express=require('express');
const pool=require('../../pool');
var router =express.Router();
module.exports=router;

/**
 * GET /admin/settings
 * 获取所有的全局设置信息
 * 返回数据：
 * {appName:'xx',adminUrl:'xx',appUrl:'xx',...}
 */
router.get('/',(req,res)=>{
    pool.query('SELECT * FROM xfn_settings LIMIT 1',(err,result)=>{
        if(err) throw err;
        res.send(result[0]);
    })
})