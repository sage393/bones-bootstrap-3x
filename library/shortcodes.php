<?php

//[hello_world]
function hello_world_func(){
    return include('features/hello_world.php');
}
add_shortcode( 'hello_world', 'hello_world_func' );

//------------------------------------------------------------------------------

//[recent_post]
function recent_post_func(){
    return include('features/recent_post.php');
}
add_shortcode( 'recent_post', 'recent_post_func' );

//------------------------------------------------------------------------------

?>
