<?php
/*function lmf_theme() {
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
*/
/*
function hook_form_alter(&$form, $form_state, $form_id) {
  var_dump($form);
  switch ($form_id) {
  case 'event_node_form':
    if (is_numeric($_GET['nid'])) {
      $form['field_nom_du_r_f_rent']['element']['#default_value'] = $_GET['nid'];
    }
    break;
  }
}
*/
?>