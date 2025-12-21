<?php

/**
 * @package     Joomla.Site
 * @subpackage  mod_joomlalabs_imagecomparisonslider_module
 *
 * @author      Joomla!LABS <info@joomlalabs.com>
 * @copyright   (C) 2015 - 2025 Joomla!LABS. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @link        https://joomlalabs.com
 * @since       2.0.0
 */

namespace JoomlaLabs\Module\ImageComparisonSlider\Site\Dispatcher;

use Joomla\CMS\Dispatcher\AbstractModuleDispatcher;
use Joomla\CMS\Factory;

// phpcs:disable PSR1.Files.SideEffects
\defined('_JEXEC') or die;
// phpcs:enable PSR1.Files.SideEffects

/**
 * Dispatcher class for mod_joomlalabs_imagecomparisonslider_module.
 *
 * @since  2.0.0
 */
class Dispatcher extends AbstractModuleDispatcher
{
    /**
     * Returns the layout data.
     *
     * @return array
     *
     * @since   2.0.0
     */
    protected function getLayoutData(): array
    {
        $data = parent::getLayoutData();

        // Get Web Asset Manager
        /** @var \Joomla\CMS\WebAsset\WebAssetManager $wa */
        $wa = Factory::getApplication()->getDocument()->getWebAssetManager();

        // Register and load Image Comparison Slider assets
        $this->registerAssets($wa);

        // Load assets
        $wa->useStyle('imagecomparisonslider.style')
           ->useScript('imagecomparisonslider.script');

        return $data;
    }

    /**
     * Register Image Comparison Slider assets in the Web Asset Manager.
     *
     * @param \Joomla\CMS\WebAsset\WebAssetManager $wa Web Asset Manager instance
     *
     * @return void
     *
     * @since   2.0.0
     */
    private function registerAssets($wa): void
    {
        $registry = $wa->getRegistry();

        // Register CSS
        if (!$registry->exists('style', 'imagecomparisonslider.style')) {
            $wa->registerStyle(
                'imagecomparisonslider.style',
                'media/mod_joomlalabs_imagecomparisonslider_module/css/imagecomparisonslider.css'
            );
        }

        // Register JS
        if (!$registry->exists('script', 'imagecomparisonslider.script')) {
            $wa->registerScript(
                'imagecomparisonslider.script',
                'media/mod_joomlalabs_imagecomparisonslider_module/js/imagecomparisonslider.js',
                [],
                ['defer' => true, 'type' => 'module']
            );
        }
    }
}
