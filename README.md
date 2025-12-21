# Image Comparison Slider Module for Joomla!

![image Image Comparison Slider](https://user-images.githubusercontent.com/906604/91639107-82078d80-ea14-11ea-8a3c-038ee44981bc.png)


![GitHub all releases](https://img.shields.io/github/downloads/JoomlaLABS/imagecomparisonslider_module/total?style=for-the-badge&color=blue)
![GitHub release (latest by SemVer)](https://img.shields.io/github/downloads/JoomlaLABS/imagecomparisonslider_module/latest/total?style=for-the-badge&color=blue)
![GitHub release (latest by SemVer)](https://img.shields.io/github/v/release/JoomlaLABS/imagecomparisonslider_module?sort=semver&style=for-the-badge&color=blue)

[![License](https://img.shields.io/badge/license-GPL%202.0%2B-green.svg)](LICENSE)
[![Joomla](https://img.shields.io/badge/Joomla!-6.0+-1A3867?logo=joomla&logoColor=white)]()

**An interactive, accessible image comparison slider for Joomla!**

*Compare before/after images with a smooth, draggable slider interface*

---

## 📖 About

The **Image Comparison Slider** module allows you to create interactive before/after image comparisons on your Joomla! website. Perfect for showcasing transformations, renovations, photo editing, historical changes, and more.

Built with modern web standards and accessibility in mind, this module delivers a smooth, responsive experience across all devices while maintaining WCAG 2.1 AAA compliance.

### 🎯 Perfect For
- 🏗️ Construction & renovation before/after
- 📸 Photo editing showcases
- 🎨 Design portfolio comparisons
- 🏛️ Historical then/now images
- 🎮 Graphics quality comparisons
- 🌍 Geographic changes over time

---

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

---

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

---

## 📋 Requirements

| Software | Minimum | Recommended |
|----------|---------|-------------|
| **Joomla!** | 4.4+ | 6.0+ |
| **PHP** | 8.1+ | 8.2 or 8.3 |
| **Browser** | Modern browsers | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |

---

## 📦 Installation

1. Download the latest release from [GitHub Releases](https://github.com/JoomlaLABS/imagecomparisonslider_module/releases)
2. In Joomla Administrator, go to **System → Extensions → Install**
3. Upload the downloaded package file
4. The module will be installed and ready to use

---

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

---

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

---

## 🔄 Upgrading from v1.x

Version 2.0 is a complete rewrite with significant improvements:

### What's New
- ✅ Modern Joomla 6+ architecture
- ✅ jQuery removed → Pure vanilla JavaScript
- ✅ Enhanced accessibility (WCAG 2.1 AAA)
- ✅ Web Asset Manager integration
- ✅ Better performance & smaller size

### Migration Steps
1. **Backup** your site and database
2. **Note** your current module settings
3. **Install** v2.0 (it will upgrade automatically)
4. **Verify** settings in module configuration
5. **Test** thoroughly on your staging site first

---

## Credits

This module is built using the original concept from:

<a href="https://codyhouse.co/gem/css-jquery-image-comparison-slider" target="_blank"><img src="https://codyhouse.co/demo/style-guide-template/assets/branding/favicon-1.jpg" width="12px" alt="codyhouse.co" /> CodyHouse - Image Comparison Slider</a>

- **CodyHouse** - Original CSS/jQuery Image Comparison Slider concept
- Modernized and adapted for Joomla 6+ with vanilla JavaScript ES6+
- Icons: Custom SVG graphics
- Released under MIT License by CodyHouse

---

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

[![Email](https://img.shields.io/badge/Email-Razzo1987%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:Razzo1987@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Luca%20Racchetti-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/razzo/)
[![GitHub](https://img.shields.io/badge/GitHub-Razzo1987-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Razzo1987)

*Full-Stack Developer passionate about creating modern, efficient web applications and tools for the Joomla! community*

## 🆘 Support

### 💬 Get Help

Need help? We're here for you!

- 🐛 **Found a bug?** [Open an issue](https://github.com/JoomlaLABS/imagecomparisonslider_module/issues/new?labels=bug&template=bug_report.md)
- 💡 **Have a feature request?** [Open an issue](https://github.com/JoomlaLABS/imagecomparisonslider_module/issues/new?labels=enhancement&template=feature_request.md)
- ❓ **Questions?** [Start a discussion](https://github.com/JoomlaLABS/imagecomparisonslider_module/discussions)
- 📧 **Direct contact:** [Razzo1987@gmail.com](mailto:Razzo1987@gmail.com)

## 💝 Donate

If you find this project useful, consider supporting its development:

[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-GitHub-ea4aaa?style=for-the-badge&logo=github)](https://github.com/sponsors/JoomlaLABS)
[![Buy me a beer](https://img.shields.io/badge/🍺%20Buy%20me%20a-beer-FFDD00?style=for-the-badge&labelColor=FFDD00&color=FFDD00)](https://buymeacoffee.com/razzo)

Your support helps maintain and improve this project!

---

**Made with ❤️ for the Joomla! Community**

**⭐ If this project helped you, please consider giving it a star! ⭐**
