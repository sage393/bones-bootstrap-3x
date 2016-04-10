<?php ob_start(); ?>
<?php
    // Define our WP Query Parameters
    $the_query = new WP_Query( 'posts_per_page=4' );
    while ($the_query -> have_posts()) : $the_query -> the_post();
?>

<!-- Display the Post Title with Hyperlink -->
<a href="<?php the_permalink() ?>"><?php the_title(); ?></a>

<!-- Display the Post Excerpt -->
<?php the_excerpt(__('(more…)')); ?>

<!-- Repeat the process and reset once it hits the limit -->
<?php
    // Repeat the process and reset once it hits the limit
    endwhile;
    wp_reset_postdata();
?>
<?php return ob_get_clean() ?>
