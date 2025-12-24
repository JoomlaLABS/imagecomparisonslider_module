# Image Comparison Slider Module for Joomla!

![image Image Comparison Slider](https://user-images.githubusercontent.com/906604/91639107-82078d80-ea14-11ea-8a3c-038ee44981bc.png)


![GitHub all releases](https://img.shields.io/github/downloads/JoomlaLABS/imagecomparisonslider_module/total?style=for-the-badge&color=blue)
![GitHub release (latest by SemVer)](https://img.shields.io/github/downloads/JoomlaLABS/imagecomparisonslider_module/latest/total?style=for-the-badge&color=blue)
![GitHub release (latest by SemVer)](https://img.shields.io/github/v/release/JoomlaLABS/imagecomparisonslider_module?sort=semver&style=for-the-badge&color=blue)

[![License](https://img.shields.io/badge/license-GPL%202.0%2B-green.svg)](LICENSE)
[![Joomla 4.x](https://img.shields.io/badge/Joomla!-4.x-1A3867?logo=joomla&logoColor=white)]()
[![Joomla 5.x](https://img.shields.io/badge/Joomla!-5.x-1A3867?logo=joomla&logoColor=white)]()
[![Joomla 6.0+](https://img.shields.io/badge/Joomla!-6.0+-1A3867?logo=joomla&logoColor=white)]()

**An interactive, accessible image comparison slider for Joomla!**

*Compare before/after images with a smooth, draggable slider interface*

## 📖 Description

The **Image Comparison Slider** module allows you to create interactive before/after image comparisons on your Joomla! website. Perfect for showcasing transformations, renovations, photo editing, historical changes, and more.

Built with modern web standards and accessibility in mind, this module delivers a smooth, responsive experience across all devices while maintaining WCAG 2.1 AAA compliance.

### 🎯 Perfect For
- 🏗️ Construction & renovation before/after
- 📸 Photo editing showcases
- 🎨 Design portfolio comparisons
- 🏛️ Historical then/now images
- 🎮 Graphics quality comparisons
- 🌍 Geographic changes over time

## ✨ Features

### 🚀 User Experience
- **Interactive Draggable Slider** - Smooth, intuitive drag interface
- **Touch-Friendly** - Full support for mobile and tablet devices
- **Keyboard Navigation** - Complete keyboard accessibility (arrows, Home, End)
- **Image Captions** - Optional labels for both images
- **Smooth Animations** - CSS3-powered transitions with IntersectionObserver
- **Lazy Loading** - Images load only when needed for better performance
- **Responsive Design** - Adapts perfectly to any screen size

### ♿ Accessibility
- **WCAG 2.1 AAA Compliant** - Highest accessibility standards
- **Full Keyboard Support** - Arrow keys, Home/End navigation
- **Screen Reader Ready** - Complete ARIA attributes
- **Focus Management** - Clear visual focus indicators
- **Reduced Motion** - Respects user motion preferences

### 🛠️ Technical
- **Modern Joomla 6+ Architecture** - Namespace, service provider pattern
- **Zero jQuery** - Pure vanilla JavaScript ES6+
- **Web Asset Manager** - Proper asset loading and caching
- **PSR-12 Compliant** - Clean, maintainable code
- **Performance Optimized** - IntersectionObserver, ResizeObserver APIs
- **Lightweight** - Minimal footprint, maximum performance

## 🎬 Demo

### Frontend Examples

**Before/After Photo Editing**

![Berlin Samariterstrasse](https://joomlalabs.sviluppo.online/images/extension/jl-image-comparison-slider/frontend-berlino-samariterstrasse.png)

**Historical Comparison**

![Porto Beirut](https://joomlalabs.sviluppo.online/images/extension/jl-image-comparison-slider/frontend-porto-beirut.jpg)

**Construction Showcase**

![Street View](https://joomlalabs.sviluppo.online/images/extension/jl-image-comparison-slider/frontend-strada.jpg)

**Architecture Changes**

![Berlin Reichstag](https://joomlalabs.sviluppo.online/images/extension/jl-image-comparison-slider/frontend-berlino-reichstag.png)

### Backend Configuration

![Configuration Panel](https://joomlalabs.sviluppo.online/images/extension/jl-image-comparison-slider/backend-configuration.png)

## 📋 Requirements

| Software | Minimum | Recommended |
|----------|---------|-------------|
| **Joomla!** | 4.x | 6.0+ |
| **PHP** | 8.1+ | 8.2 or 8.3 |
| **Browser** | Modern browsers | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |

## 📦 Installation

1. Download the latest release from [GitHub Releases](https://github.com/JoomlaLABS/imagecomparisonslider_module/releases)
2. In Joomla Administrator, go to **System → Extensions → Install**
3. Upload the downloaded package file
4. The module will be installed and ready to use

### Update from v1.x

⚠️ **Important**: Version 2.0 is a complete rewrite with significant improvements:

### What's New
- ✅ Modern Joomla 6+ architecture
- ✅ jQuery removed → Pure vanilla JavaScript
- ✅ Enhanced accessibility (WCAG 2.1 AAA)
- ✅ Web Asset Manager integration
- ✅ Better performance & smaller size

When upgrading from v1.x:
1. **Backup** your site and database
2. **Note** your current module settings (But your module settings will be preserved)
3. **Install** v2.0 (it will upgrade automatically)
4. **Verify** settings in module configuration
5. **Test** thoroughly on your staging site first
6. **Review** the [Changelog](#-changelog) for details

## ⚙️ Configuration

### Basic Settings

| Field | Description | Required |
|-------|-------------|----------|
| **Left Image** | First image (overlay/modified version) | ✅ Required |
| **Left Alt Text** | Accessibility description for left image | ⚠️ Recommended |
| **Left Caption** | Optional label shown on left image | Optional |
| **Right Image** | Second image (background/original version) | ✅ Required |
| **Right Alt Text** | Accessibility description for right image | ⚠️ Recommended |
| **Right Caption** | Optional label shown on right image | Optional |
| **ARIA Label** | Screen reader description of slider | ⚠️ Recommended |

### Quick Setup Example

1. **Choose Your Images**
   - Select "Before" image for **Right Image**
   - Select "After" image for **Left Image**

2. **Add Descriptions**
   - Right Alt: "Living room before renovation"
   - Left Alt: "Living room after renovation"

3. **Add Captions** (Optional)
   - Right Caption: "Before"
   - Left Caption: "After"

4. **Publish & Test**

## 💡 Usage

### Keyboard Controls

| Key | Action |
|-----|--------|
| `Tab` | Focus the slider handle |
| `← / →` | Move slider left/right (1% per press) |
| `↑ / ↓` | Alternative arrow keys |
| `Home` | Jump to start (0%) |
| `End` | Jump to end (100%) |

### Mouse/Touch

- **Click & Drag** - Drag the center handle left or right
- **Touch & Swipe** - Swipe the handle on mobile devices

## 📋 Changelog

### [2.0.1] - 2025-12-24

#### 🐛 Bug Fixes & Improvements

This is a maintenance release that fixes asset loading issues and improves code quality.

#### Fixed

- **Asset Loading** - Fixed CSS and JS not loading correctly in frontend
  - Updated `registerStyle()` and `registerScript()` to include all required parameters
  - Added proper options and attributes arrays for Web Asset Manager
  - Fixed `type="module"` attribute for ES6 JavaScript module

#### Changed

- **Template Optimization** - Improved HTML structure and code quality
  - Cleaned up HTML indentation and formatting
  - Removed unnecessary spaces in attribute declarations
  - Converted to alternative PHP syntax (`if/endif`) for better readability
  - Added `htmlspecialchars()` to image URLs for security consistency
  - Added `loading="lazy"` attribute to images for performance

- **CSS Improvements** - Enhanced slider handle display
  - Fixed icon centering using flexbox
  - Removed duplicate `display` declarations
  - Consolidated opacity settings

#### Security

- 🔒 **Enhanced XSS Protection** - Added `htmlspecialchars()` to all image URL attributes

### [2.0.0] - 2025-12-21

#### 🎉 Major Release - Complete Rewrite

This is a breaking release that modernizes the module for Joomla 6+ with significant improvements in performance, accessibility, and code quality.

#### Added

##### Architecture
- ✅ **Namespace support** - `JoomlaLabs\Module\ImageComparisonSlider`
- ✅ **Service provider** - Modern dependency injection pattern
- ✅ **Helper class** - `ImageComparisonSliderHelper` for data preparation
- ✅ **PSR-12 compliance** - Modern PHP coding standards
- ✅ **Web Asset Manager** integration with `joomla.asset.json`

##### Accessibility (WCAG 2.1 AAA)
- ✅ **Full keyboard navigation**:
  - Arrow keys (←/→, ↑/↓) for 1% movement
  - Home/End keys for quick navigation
  - Tab for focus management
- ✅ **ARIA attributes**:
  - `role="slider"` on handle
  - `aria-label` for screen readers
  - `aria-valuenow` (updates dynamically)
  - `aria-valuemin`/`aria-valuemax`
  - `aria-orientation="horizontal"`
  - `aria-grabbed` state during drag
- ✅ **Semantic HTML**:
  - `role="group"` on container
  - `aria-hidden="true"` on decorative elements
- ✅ **Image accessibility**:
  - Required alt text fields
  - `loading="lazy"` for performance
- ✅ **Focus management**:
  - Visible focus indicators
  - Proper tabindex
  - Focus state announcements
- ✅ **Motion preferences**:
  - Respects `prefers-reduced-motion`
  - Animations can be disabled

##### JavaScript (Modern Vanilla JS)
- ✅ **ES6+ class-based architecture**
- ✅ **IntersectionObserver** - Better viewport detection
- ✅ **ResizeObserver** - Efficient responsive updates
- ✅ **Pointer Events API** - Unified mouse/touch handling
- ✅ **requestAnimationFrame** - Smooth 60fps animations
- ✅ **No jQuery dependency** (~30KB smaller bundle)
- ✅ **Module pattern** - Encapsulated, no global pollution
- ✅ **Event delegation** - Better performance

##### Features
- ✅ **Unique module IDs** - Multiple instances per page
- ✅ **ARIA label configuration** - Customizable screen reader text
- ✅ **Validation logic** - Checks required images before rendering
- ✅ **Improved error handling** - Graceful degradation
- ✅ **Better browser support** - Modern browsers (2020+)

##### Documentation
- ✅ **MIGRATION_v2.md** - Complete upgrade guide
- ✅ **ACCESSIBILITY.md** - Detailed accessibility documentation
- ✅ **CHANGELOG.md** - Version history (this file)
- ✅ **Updated README.md** - Modern documentation

#### Changed

##### Breaking Changes
- ⚠️ **Namespace structure** - All classes now use namespaces
- ⚠️ **File organization** - New `src/` and `services/` folders
- ⚠️ **JavaScript rewrite** - Complete rewrite without jQuery
- ⚠️ **Asset loading** - Web Asset Manager instead of `addScript()`
- ⚠️ **Template structure** - Updated with accessibility attributes
- ⚠️ **Minimum requirements**:
  - Joomla 4.4+ (6.0+ recommended)
  - PHP 8.1+
  - Modern browser (no IE11)

##### Improvements
- 🚀 **Performance**:
  - 30KB smaller (no jQuery)
  - IntersectionObserver (lazy activation)
  - ResizeObserver (efficient resize handling)
  - requestAnimationFrame (smooth animations)
  - Lazy image loading
  - Reduced DOM queries
  
- 📦 **Code Quality**:
  - PSR-12 coding standards
  - Type declarations (parameters + return types)
  - Proper error handling
  - Separation of concerns
  - Inline documentation
  
- 🎨 **User Experience**:
  - Smoother animations
  - Better touch support
  - Keyboard accessible
  - Screen reader friendly
  - Respects user preferences

#### Removed

- ❌ **jQuery dependency** - Replaced with vanilla JavaScript
- ❌ **Legacy code patterns** - Old Joomla 3 style code
- ❌ **Non-namespaced structure** - Modernized file organization
- ❌ **IE11 support** - Modern browsers only
- ❌ **vmousedown/vmousemove** - Replaced with Pointer Events

#### Fixed

- 🐛 **Multiple instances** - Each slider now has unique ID
- 🐛 **Focus management** - Proper keyboard focus handling
- 🐛 **Touch events** - Better mobile/tablet support
- 🐛 **Resize handling** - More efficient window resize
- 🐛 **Label visibility** - Improved caption show/hide logic
- 🐛 **Memory leaks** - Proper event listener cleanup
- 🐛 **Performance issues** - Removed unnecessary reflows

#### Security

- 🔒 **Output escaping** - `$this->escape()` in template
- 🔒 **Type safety** - PHP 8.1 type declarations
- 🔒 **Input validation** - Helper class validates data
- 🔒 **XSS prevention** - Proper HTML attribute handling

### [1.2.0] - 2020-08-19

#### Added
- Initial public release
- Basic image comparison slider
- jQuery-based drag functionality
- CodyHouse library integration

#### Features
- Left/right image configuration
- Alt text fields
- Caption support
- Basic responsive design
- Joomla 4 compatible

## 🙏 Credits

This module is built using the original concept from:

<a href="https://codyhouse.co/gem/css-jquery-image-comparison-slider" target="_blank"><img src="https://codyhouse.co/demo/style-guide-template/assets/branding/favicon-1.jpg" width="12px" alt="codyhouse.co" /> CodyHouse - Image Comparison Slider</a>

- **CodyHouse** - Original CSS/jQuery Image Comparison Slider concept
- Modernized and adapted for Joomla 6+ with vanilla JavaScript ES6+
- Icons: Custom SVG graphics
- Released under MIT License by CodyHouse

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🔄 How to Contribute

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **✨ Make** your changes following our coding standards
4. **🧪 Add** tests if applicable
5. **💾 Commit** your changes (`git commit -m 'Add some amazing feature'`)
6. **🚀 Push** to the branch (`git push origin feature/amazing-feature`)
7. **📮 Submit** a pull request

### 📋 Guidelines

- Follow PSR-12 coding standards for PHP code
- Write clear, concise commit messages
- Test your changes thoroughly before submitting
- Update documentation as needed
- Ensure your code is well-documented with inline comments
- Maintain security best practices

## 📄 License

This project is licensed under the **GNU General Public License v2.0** - see the [LICENSE](LICENSE) file for details.

```
GNU GENERAL PUBLIC LICENSE
Version 2, June 1991

Copyright (C) 2023-2025 Joomla!LABS

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
```

## 👥 Project Information

### 🏢 Project Owner

**Joomla!LABS** - [https://joomlalabs.com](https://joomlalabs.com)

[![Email](https://img.shields.io/badge/Email-info%40joomlalabs.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:info@joomlalabs.com)

*Joomla!LABS is the company that owns and maintains this project.*

### 👨‍💻 Contributors

**Luca Racchetti** - Lead Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Luca%20Racchetti-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/razzo/)
[![GitHub](https://img.shields.io/badge/GitHub-Razzo1987-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Razzo1987)

*Full-Stack Developer passionate about creating modern, efficient web applications and tools for the Joomla! community*

## 🆘 Support

### 💬 Get Help

Need help? We're here for you!

- 🐛 **Found a bug?** [Open an issue](https://github.com/JoomlaLABS/imagecomparisonslider_module/issues/new?labels=bug&template=bug_report.md)
- 💡 **Have a feature request?** [Open an issue](https://github.com/JoomlaLABS/imagecomparisonslider_module/issues/new?labels=enhancement&template=feature_request.md)
- ❓ **Questions?** [Start a discussion](https://github.com/JoomlaLABS/imagecomparisonslider_module/discussions)

## 💝 Donate

If you find this project useful, consider supporting its development:

[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?style=for-the-badge&logo=github)](https://github.com/sponsors/JoomlaLABS)
[![Buy me a beer](https://img.shields.io/badge/🍺%20Buy%20me%20a-beer-FFDD00?style=for-the-badge&labelColor=FFDD00&color=FFDD00)](https://buymeacoffee.com/razzo)
[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-0070BA?style=for-the-badge&logo=paypal&logoColor=white)](https://www.paypal.com/donate/?hosted_button_id=4SRPUJWYMG3GL)

Your support helps maintain and improve this project!

---

**Made with ❤️ for the Joomla! Community**

**⭐ If this project helped you, please consider giving it a star! ⭐**
