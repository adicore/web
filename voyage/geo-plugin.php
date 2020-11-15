$data = unserialize(file_get_contents('http://www.geoplugin.net/php.gpip='.$_SERVER['REMOTE_ADDR'])));
//Then access the data directly.
echo $data['geoplugin_city'];
