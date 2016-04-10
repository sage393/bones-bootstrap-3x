<?php

//[hello_world]
function hello_world_func(){
    require_once('features/hello_world.php');
}
add_shortcode( 'hello_world', 'hello_world_func' );

//------------------------------------------------------------------------------

?>
