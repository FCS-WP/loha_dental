<?php
add_action('wp_enqueue_scripts', 'flatpickr_enqueue_scripts');

function flatpickr_enqueue_scripts()
{
    wp_enqueue_script('flatpickr-js', get_template_directory_uri() . '/assets/lib/flatpickr/flatpickr.min.js', array('jquery'), null, true);
    wp_enqueue_style('flatpickr-css', get_template_directory_uri() . '/assets/lib/flatpickr/flatpickr.min.css');
}
