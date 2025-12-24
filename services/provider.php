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

\defined('_JEXEC') or die;

use Joomla\CMS\Extension\Service\Provider\HelperFactory;
use Joomla\CMS\Extension\Service\Provider\Module;
use Joomla\CMS\Extension\Service\Provider\ModuleDispatcherFactory;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;

/**
 * The Image Comparison Slider module service provider.
 *
 * @since  2.0.0
 */
return new class () implements ServiceProviderInterface {
    /**
     * Registers the service provider with a DI container.
     *
     * @param Container $container the DI container
     *
     * @since   2.0.0
     */
    public function register(Container $container): void
    {
        $container->registerServiceProvider(new ModuleDispatcherFactory('\\JoomlaLabs\\Module\\ImageComparisonSlider'));
        $container->registerServiceProvider(new HelperFactory('\\JoomlaLabs\\Module\\ImageComparisonSlider\\Site\\Helper'));
        $container->registerServiceProvider(new Module());
    }
};
