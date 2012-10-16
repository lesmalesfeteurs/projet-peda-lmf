<?php
function lmf_theme() {
  $items = array();
    
  $items['user_login'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'yourtheme') . '/templates',
    'template' => 'user-login',
    'preprocess functions' => array(
       'lmf_preprocess_user_login'
    ),
  );
  $items['user_register_form'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'yourtheme') . '/templates',
    'template' => 'user-register-form',
    'preprocess functions' => array(
      'lmf_preprocess_user_register_form'
    ),
  );
  
  return $items;
}

function lmf_preprocess_user_login(&$vars) {
  $vars['intro_text'] = t('This is my awesome login form');
}

function lmf_preprocess_user_register_form(&$vars) {
  $vars['intro_text'] = t('This is my super awesome reg form');
}
?>