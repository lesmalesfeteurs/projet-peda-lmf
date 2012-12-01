<div id="user-profile-form">

  <div class="form-column-1">
   
    <?php print $contact; ?>

    <?php print $timezone; ?>
  </div>
 
 
  <div class="form-column-2">
    <?php print $theme_select; ?>
   
    <?php print $picture; ?>
   
    <?php print $signature_settings; ?>   
  </div>
 
  <?php print $submit; ?>
  <?php print $delete; ?>
 
  <?php print drupal_render($form); ?>

</div>