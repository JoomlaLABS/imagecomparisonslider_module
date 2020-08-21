<?php
/**
 * @package    joomlalabs_imagecomparisonslider_module
 *
 * @author     Joomla!LABS <info@joomlalabs.com>
 * @copyright  Copyright (C) 2015 - 2020 Joomla!LABS. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       https://joomlalabs.com
 */

defined('_JEXEC') or die;

use Joomla\CMS\Factory;

$document = Factory::getDocument();
$document->addStyleSheet('/modules/mod_joomlalabs_imagecomparisonslider_module/src/imagecomparisonslider.css');
$document->addScript('/modules/mod_joomlalabs_imagecomparisonslider_module/src/imagecomparisonslider.js');

// Access to module parameters
$left_image = $params->get('left_image');
$left_alt = $params->get('left_alt');
$left_caption = $params->get('left_caption');

$right_image = $params->get('right_image');
$right_alt = $params->get('right_alt');
$right_caption = $params->get('right_caption');
?>

<figure class="cs-image-container img-responsive">
    <img src="<?php echo $right_image; ?>" alt="<?php echo $right_alt; ?>">
    <span class="cs-image-label" data-type="right"><?php echo $right_caption; ?></span>

    <div class="cs-resize-img"> <!-- the resizable image on top -->
        <img src="<?php echo $left_image; ?>" alt="<?php echo $left_alt; ?>">
        <span class="cs-image-label" data-type="left"><?php echo $left_caption; ?></span>
    </div>

    <span class="cs-handle btn-primary"></span> <!-- slider handle -->
</figure> <!-- cs-image-container -->
