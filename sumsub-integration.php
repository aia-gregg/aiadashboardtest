<?php
/*
Plugin Name: Sumsub Integration
Description: Integrates Sumsub with WordPress.
Version: 1.0
Author: Your Name
*/

// Sumsub API credentials
$apiKey = 'your_api_key';
$apiSecret = 'your_api_secret';
$apiUrl = 'https://api.sumsub.com';

// Function to create a new applicant
function create_applicant($externalUserId) {
    global $apiKey, $apiSecret, $apiUrl;
    $url = $apiUrl . '/resources/applicants?key=' . $apiKey;
    $body = json_encode([
        'externalUserId' => $externalUserId,
    ]);

    $response = wp_remote_post($url, [
        'headers' => [
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $apiSecret,
        ],
        'body' => $body,
    ]);

    if (is_wp_error($response)) {
        return $response->get_error_message();
    }

    return wp_remote_retrieve_body($response);
}

// Shortcode to trigger Sumsub integration
function sumsub_shortcode($atts) {
    $atts = shortcode_atts([
        'user_id' => 'default_user',
    ], $atts, 'sumsub');

    $result = create_applicant($atts['user_id']);
    return 'Sumsub result: ' . $result;
}

add_shortcode('sumsub', 'sumsub_shortcode');
