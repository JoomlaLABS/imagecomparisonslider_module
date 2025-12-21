/**
 * Image Comparison Slider - Modern Vanilla JS Version
 * A handy draggable slider to quickly compare 2 images, powered by modern Web APIs.
 * 
 * Based on: https://github.com/CodyHouse/image-comparison-slider
 * Original Copyright: CodyHouse - https://codyhouse.co
 * 
 * Modernized for Joomla 6+ by Joomla!LABS
 * Released under the MIT License
 * 
 * @version 2.0.0
 * @since   2.0.0
 */

(function() {
    'use strict';

    /**
     * Image Comparison Slider Class
     */
    class ImageComparisonSlider {
        /**
         * Constructor
         * @param {HTMLElement} container - The container element
         */
        constructor(container) {
            this.container = container;
            this.handle = container.querySelector('.cs-handle');
            this.resizeImg = container.querySelector('.cs-resize-img');
            this.leftLabel = container.querySelector('.cs-image-label[data-type="left"]');
            this.rightLabel = container.querySelector('.cs-image-label[data-type="right"]');
            
            this.isDragging = false;
            this.currentPosition = 50; // Percentage
            
            this.init();
        }

        /**
         * Initialize the slider
         */
        init() {
            // Setup IntersectionObserver for viewport detection
            this.setupIntersectionObserver();
            
            // Setup drag functionality
            this.setupDragEvents();
            
            // Setup keyboard navigation
            this.setupKeyboardNavigation();
            
            // Setup resize observer
            this.setupResizeObserver();
            
            // Initial label update
            this.updateLabels();
        }

        /**
         * Setup IntersectionObserver for lazy animation trigger
         */
        setupIntersectionObserver() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.container.classList.add('is-visible');
                        observer.unobserve(this.container);
                    }
                });
            }, options);

            observer.observe(this.container);
        }

        /**
         * Setup drag events (mouse and touch)
         */
        setupDragEvents() {
            // Pointer events handle both mouse and touch
            this.handle.addEventListener('pointerdown', this.onPointerDown.bind(this), { passive: false });
            
            // Prevent default drag behavior
            this.handle.addEventListener('dragstart', (e) => e.preventDefault());
            
            // Optimize for touch devices
            this.handle.style.touchAction = 'none';
            this.pendingUpdate = false;
        }

        /**
         * Handle pointer down event
         * @param {PointerEvent} e - The pointer event
         */
        onPointerDown(e) {
            e.preventDefault();
            
            this.isDragging = true;
            this.pointerId = e.pointerId;
            this.handle.classList.add('draggable');
            this.resizeImg.classList.add('resizable');
            
            // Capture pointer for consistent events
            this.handle.setPointerCapture(e.pointerId);
            
            // Add move and up listeners with passive: false for touch
            this.boundPointerMove = this.onPointerMove.bind(this);
            this.boundPointerUp = this.onPointerUp.bind(this);
            
            document.addEventListener('pointermove', this.boundPointerMove, { passive: false });
            document.addEventListener('pointerup', this.boundPointerUp);
            document.addEventListener('pointercancel', this.boundPointerUp);
            
            // Update ARIA attribute
            this.handle.setAttribute('aria-grabbed', 'true');
        }

        /**
         * Handle pointer move event with throttling
         * @param {PointerEvent} e - The pointer event
         */
        onPointerMove(e) {
            if (!this.isDragging) return;
            
            e.preventDefault();
            
            // Throttle updates using requestAnimationFrame
            if (!this.pendingUpdate) {
                this.pendingUpdate = true;
                requestAnimationFrame(() => {
                    this.updatePosition(e.clientX);
                    this.pendingUpdate = false;
                });
            }
        }

        /**
         * Handle pointer up event
         * @param {PointerEvent} e - The pointer event
         */
        onPointerUp(e) {
            if (e.pointerId !== this.pointerId) return;
            
            this.isDragging = false;
            this.handle.classList.remove('draggable');
            this.resizeImg.classList.remove('resizable');
            
            // Release pointer capture
            if (this.handle.hasPointerCapture(e.pointerId)) {
                this.handle.releasePointerCapture(e.pointerId);
            }
            
            // Remove listeners
            document.removeEventListener('pointermove', this.boundPointerMove);
            document.removeEventListener('pointerup', this.boundPointerUp);
            document.removeEventListener('pointercancel', this.boundPointerUp);
            
            // Update ARIA attribute
            this.handle.setAttribute('aria-grabbed', 'false');
        }

        /**
         * Update slider position
         * @param {number} clientX - The X coordinate
         */
        updatePosition(clientX) {
            const containerRect = this.container.getBoundingClientRect();
            const handleWidth = this.handle.offsetWidth;
            
            // Calculate position
            let newPosition = ((clientX - containerRect.left) / containerRect.width) * 100;
            
            // Constrain between 0 and 100
            newPosition = Math.max(0, Math.min(100, newPosition));
            
            this.currentPosition = newPosition;
            
            // Update styles
            this.handle.style.left = `${newPosition}%`;
            this.resizeImg.style.width = `${newPosition}%`;
            
            // Update labels visibility
            this.updateLabels();
            
            // Update ARIA value
            this.handle.setAttribute('aria-valuenow', Math.round(newPosition));
        }

        /**
         * Setup keyboard navigation (accessibility)
         */
        setupKeyboardNavigation() {
            this.handle.addEventListener('keydown', (e) => {
                let step = 0;
                
                switch(e.key) {
                    case 'ArrowLeft':
                    case 'ArrowDown':
                        step = -1;
                        break;
                    case 'ArrowRight':
                    case 'ArrowUp':
                        step = 1;
                        break;
                    case 'Home':
                        this.currentPosition = 0;
                        this.updatePosition(this.container.getBoundingClientRect().left);
                        e.preventDefault();
                        return;
                    case 'End':
                        this.currentPosition = 100;
                        this.updatePosition(this.container.getBoundingClientRect().right);
                        e.preventDefault();
                        return;
                    default:
                        return;
                }
                
                if (step !== 0) {
                    e.preventDefault();
                    this.currentPosition += step;
                    this.currentPosition = Math.max(0, Math.min(100, this.currentPosition));
                    
                    const containerRect = this.container.getBoundingClientRect();
                    const newX = containerRect.left + (this.currentPosition / 100 * containerRect.width);
                    this.updatePosition(newX);
                }
            });
        }

        /**
         * Setup resize observer for responsive updates
         */
        setupResizeObserver() {
            const resizeObserver = new ResizeObserver(() => {
                requestAnimationFrame(() => {
                    this.updateLabels();
                });
            });
            
            resizeObserver.observe(this.container);
        }

        /**
         * Update labels visibility based on position
         */
        updateLabels() {
            if (!this.leftLabel || !this.rightLabel) return;
            
            const leftLabelRect = this.leftLabel.getBoundingClientRect();
            const rightLabelRect = this.rightLabel.getBoundingClientRect();
            const resizeRect = this.resizeImg.getBoundingClientRect();
            
            // Left label visibility
            const leftLabelEnd = leftLabelRect.left + leftLabelRect.width;
            const resizeEnd = resizeRect.left + resizeRect.width;
            
            if (leftLabelEnd < resizeEnd) {
                this.leftLabel.classList.remove('is-hidden');
            } else {
                this.leftLabel.classList.add('is-hidden');
            }
            
            // Right label visibility
            if (rightLabelRect.left > resizeEnd) {
                this.rightLabel.classList.remove('is-hidden');
            } else {
                this.rightLabel.classList.add('is-hidden');
            }
        }
    }

    /**
     * Initialize all sliders on the page
     */
    function initSliders() {
        const containers = document.querySelectorAll('.cs-image-container');
        
        containers.forEach(container => {
            new ImageComparisonSlider(container);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSliders);
    } else {
        initSliders();
    }

})();