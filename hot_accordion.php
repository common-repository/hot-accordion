<?php
/**
 * Plugin Name: Hot Accordion
 * Description: Hot Accordion Gutenberg block by Hot Themes.
 * Version: 1.1
 * Author: Hot Themes
 * Author URI: https://www.hotjoomlatemplates.com
 *
 * @package hotaccordion
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// create blocks category
add_filter( 'block_categories', function( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'hot-blocks',
                'title' => __( 'Hot Blocks', 'hot-blocks' ),
            ),
        )
    );
}, 10, 2 );

// assets for editor
function hot_accordion_editor_assets() {
    if (current_user_can( 'edit_posts' )) {
        wp_enqueue_script(
            'hotaccordion',
            plugins_url( 'build/index.build.js', __FILE__ ),
            array( 'wp-blocks', 'wp-element', 'wp-editor' )
        );

        wp_enqueue_style(
    		'hotaccordion-editor-style',
            plugins_url( 'css/editor.css', __FILE__ ),
            array( 'wp-edit-blocks' )
    	);
    }

};
add_action( 'enqueue_block_editor_assets', 'hot_accordion_editor_assets');


// assets for front-end
function hot_accordion_assets() {

    wp_enqueue_script('jquery');

    wp_enqueue_script(
        'hotaccordion-js',
        plugins_url( 'js/hot_accordion.js', __FILE__ ),
        array( 'jquery' )
    );

    wp_enqueue_style(
		'hotaccordion',
        plugins_url( 'css/view.css', __FILE__ )
	);

}
add_action( 'enqueue_block_assets', 'hot_accordion_assets');

