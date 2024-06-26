<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 */

use Timber\Timber;

require_once __DIR__ . '/src/StarterSite.php';

Timber::init();

// Sets the directories (inside your theme) to find .twig files.
Timber::$dirname = [ 'templates', 'views' ];

new StarterSite();
