<?php
/**
 * 返回状态码
 * User: ShipSun
 * Date: 2017/11/29
 * Time: 16:14
 */
var_dump($_REQUEST);exit;
$data['code'] = 401;
$data['url'] = 'http://www.ship.com';
echo json_encode($data);