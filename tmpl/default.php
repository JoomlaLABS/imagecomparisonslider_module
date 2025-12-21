<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_joomlalabs_imagecomparisonslider_module
 *
 * @author      Joomla!LABS <info@joomlalabs.com>
 * @copyright   Copyright (C) 2015 - 2025 Joomla!LABS. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @link        https://joomlalabs.com
 * @since       1.0.0
 */

\defined('_JEXEC') or die;

use JoomlaLabs\Module\ImageComparisonSlider\Site\Helper\ImageComparisonSliderHelper;

/**
 * @var object $module Module object
 * @var object $params Module parameters
 */

// Get prepared data
$data = ImageComparisonSliderHelper::getData($params);

// Validate that we have the required images
if (!ImageComparisonSliderHelper::validateData($params)) {
	return;
}

?>

<figure
    class = "cs-image-container img-responsive"
    id = "<?php echo $data->moduleId; ?>"
    role = "group"
    aria-label = "<?php echo htmlspecialchars($data->ariaLabel, ENT_QUOTES, 'UTF-8'); ?>"
>
    <!-- Right image (background) -->
    <img
        src = "<?php echo $data->rightImage; ?>"
        alt = "<?php echo htmlspecialchars($data->rightAlt, ENT_QUOTES, 'UTF-8'); ?>"
        loading = "lazy"
    >
    <?php if (!empty($data->rightCaption)) { ?>
        <span class = "cs-image-label" data-type = "right" aria-hidden = "true">
            <?php echo htmlspecialchars($data->rightCaption, ENT_QUOTES, 'UTF-8'); ?>
        </span>
    <?php } ?>

    <!-- Left image (overlay) -->
    <div class = "cs-resize-img">
        <img
            src = "<?php echo $data->leftImage; ?>"
            alt = "<?php echo htmlspecialchars($data->leftAlt, ENT_QUOTES, 'UTF-8'); ?>"
            loading = "lazy"
        >
        <?php if (!empty($data->leftCaption)) { ?>
            <span class = "cs-image-label" data-type = "left" aria-hidden = "true">
                <?php echo htmlspecialchars($data->leftCaption, ENT_QUOTES, 'UTF-8'); ?>
            </span>
        <?php } ?>
    </div>

    <!-- Slider handle with accessibility -->
    <span
        class = "cs-handle btn-primary"
        role = "slider"
        aria-label = "Image comparison slider"
        aria-valuemin = "0"
        aria-valuemax = "100"
        aria-valuenow = "50"
        aria-orientation = "horizontal"
        aria-grabbed = "false"
        tabindex = "0"
    >
        <i class = "cs-icon" aria-hidden = "true"></i>
    </span>
</figure>
