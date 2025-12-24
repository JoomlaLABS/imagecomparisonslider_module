<?php

/**
 * @package     Joomla.Site
 * @subpackage  mod_joomlalabs_imagecomparisonslider_module
 *
 * @author      Joomla!LABS <info@joomlalabs.com>
 * @copyright   Copyright (C) 2015 - 2025 Joomla!LABS. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @link        https://joomlalabs.com
 * @since       2.0.0
 */

namespace JoomlaLabs\Module\ImageComparisonSlider\Site\Helper;

// phpcs:disable PSR1.Files.SideEffects
\defined('_JEXEC') or die;
// phpcs:enable PSR1.Files.SideEffects

use Joomla\Registry\Registry;

/**
 * Helper for mod_joomlalabs_imagecomparisonslider_module.
 *
 * @since  2.0.0
 */
class ImageComparisonSliderHelper
{
    /**
     * Get module data prepared for rendering.
     *
     * @param Registry $params Module parameters
     *
     * @return \stdClass Object containing prepared data
     *
     * @since   2.0.0
     */
    public static function getData(Registry $params): \stdClass
    {
        $data = new \stdClass();

        // Get image paths
        $data->leftImage   = $params->get('left_image', '');
        $data->leftAlt     = $params->get('left_alt', '');
        $data->leftCaption = $params->get('left_caption', '');

        $data->rightImage   = $params->get('right_image', '');
        $data->rightAlt     = $params->get('right_alt', '');
        $data->rightCaption = $params->get('right_caption', '');

        // Generate unique ID for this instance
        $data->moduleId = 'image-comparison-' . uniqid();

        // Accessibility settings
        $data->ariaLabel = $params->get('aria_label', 'Image comparison slider');

        return $data;
    }

    /**
     * Validate that required images are set.
     *
     * @param Registry $params Module parameters
     *
     * @return bool True if valid, false otherwise
     *
     * @since   2.0.0
     */
    public static function validateData(Registry $params): bool
    {
        $leftImage  = $params->get('left_image', '');
        $rightImage = $params->get('right_image', '');

        return !empty($leftImage) && !empty($rightImage);
    }
}
