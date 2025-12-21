/**
 * Image Comparison Slider - Modern Vanilla JS Version
 * Based on: https://github.com/CodyHouse/image-comparison-slider
 * 
 * Original Copyright: CodyHouse - https://codyhouse.co
 * Modernized for Joomla 6+ by Joomla!LABS
 * 
 * @license     Released under the MIT License
 * 
 * @version 2.0.0
 * @since   2.0.0
 */

(function() {
    'use strict';

    /**
     * Swipe Content Helper Class
     * Handles swipe and drag gestures
     */
    class SwipeContent {
        constructor(element) {
            this.element = element;
            this.delta = [false, false];
            this.dragging = false;
            this.intervalId = false;
            
            // Bind methods once to maintain references
            this.boundHandleEvent = this.handleEvent.bind(this);
            
            this.element.addEventListener('mousedown', this.boundHandleEvent);
            this.element.addEventListener('touchstart', this.boundHandleEvent, { passive: true });
        }

        handleEvent(event) {
            switch (event.type) {
                case 'mousedown':
                case 'touchstart':
                    this.handleDragStart(event);
                    break;
                case 'mousemove':
                case 'touchmove':
                    this.handleDragging(event);
                    break;
                case 'mouseup':
                case 'mouseleave':
                case 'touchend':
                    this.handleDragEnd(event);
                    break;
            }
        }

        handleDragStart(event) {
            this.dragging = true;
            this.element.addEventListener('mousemove', this.boundHandleEvent);
            this.element.addEventListener('touchmove', this.boundHandleEvent, { passive: true });
            this.element.addEventListener('mouseup', this.boundHandleEvent);
            this.element.addEventListener('mouseleave', this.boundHandleEvent);
            this.element.addEventListener('touchend', this.boundHandleEvent);
            
            const touch = this.getTouch(event);
            this.delta = [parseInt(touch.clientX), parseInt(touch.clientY)];
            this.emitSwipeEvents('dragStart', this.delta, event.target);
        }

        handleDragging(event) {
            if (!this.dragging) return;
            
            if (window.requestAnimationFrame) {
                this.intervalId = window.requestAnimationFrame(this.emitDragging.bind(this, event));
            } else {
                this.intervalId = setTimeout(() => {
                    this.emitDragging(event);
                }, 250);
            }
        }

        handleDragEnd(event) {
            if (this.intervalId) {
                window.requestAnimationFrame ? 
                    window.cancelAnimationFrame(this.intervalId) : 
                    clearInterval(this.intervalId);
                this.intervalId = false;
            }
            
            this.element.removeEventListener('mousemove', this.boundHandleEvent);
            this.element.removeEventListener('touchmove', this.boundHandleEvent);
            this.element.removeEventListener('mouseup', this.boundHandleEvent);
            this.element.removeEventListener('mouseleave', this.boundHandleEvent);
            this.element.removeEventListener('touchend', this.boundHandleEvent);
            
            const touch = this.getTouch(event);
            const x = parseInt(touch.clientX);
            const y = parseInt(touch.clientY);
            
            if (this.delta && (this.delta[0] || this.delta[0] === 0)) {
                const deltaX = x - this.delta[0];
                if (Math.abs(deltaX) > 30) {
                    this.emitSwipeEvents(deltaX < 0 ? 'swipeLeft' : 'swipeRight', [x, y]);
                }
                this.delta[0] = false;
            }
            
            if (this.delta && (this.delta[1] || this.delta[1] === 0)) {
                const deltaY = y - this.delta[1];
                if (Math.abs(deltaY) > 30) {
                    this.emitSwipeEvents(deltaY < 0 ? 'swipeUp' : 'swipeDown', [x, y]);
                }
                this.delta[1] = false;
            }
            
            this.emitSwipeEvents('dragEnd', [x, y]);
            this.dragging = false;
        }

        emitDragging(event) {
            const touch = this.getTouch(event);
            this.emitSwipeEvents('dragging', [parseInt(touch.clientX), parseInt(touch.clientY)]);
        }

        getTouch(event) {
            return event.changedTouches ? event.changedTouches[0] : event;
        }

        emitSwipeEvents(eventName, coordinates, origin = false) {
            const event = new CustomEvent(eventName, {
                detail: {
                    x: coordinates[0],
                    y: coordinates[1],
                    origin: origin
                }
            });
            this.element.dispatchEvent(event);
        }
    }

    /**
     * Image Comparison Slider Class
     */
    class ComparisonSlider {
        constructor(element) {
            this.element = element;
            this.modifiedImg = element.getElementsByClassName('js-compare-slider__img--modified')[0];
            this.handle = element.getElementsByClassName('js-compare-slider__handle')[0];
            this.keyboardHandle = element.getElementsByClassName('js-compare-slider__input-handle')[0];
            this.captions = element.getElementsByClassName('js-compare-slider__caption');
            this.dragStart = false;
            this.animating = false;
            this.leftPosition = 50;
            this.sliderWidth = this.getSliderWidth();
            
            this.init();
        }

        init() {
            // Check for reduced motion preference
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            if (reducedMotion) {
                this.element.classList.add('compare-slider--reduced-motion', 'compare-slider--in-viewport');
            } else if ('IntersectionObserver' in window) {
                this.setupIntersectionObserver();
            } else {
                this.element.classList.add('compare-slider--in-viewport');
                this.removeAnimation();
            }
            
            // Setup swipe gestures
            new SwipeContent(this.element);
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Setup resize listener
            window.addEventListener('resize', () => {
                this.sliderWidth = this.getSliderWidth();
            });
        }

        setupIntersectionObserver() {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].intersectionRatio.toFixed(1) > 0) {
                    this.element.classList.add('compare-slider--in-viewport');
                    observer.unobserve(this.element);
                }
            }, { threshold: [0, 0.3] });
            
            observer.observe(this.element);
            this.removeAnimation();
        }

        removeAnimation() {
            this.modifiedImg.addEventListener('animationend', () => {
                this.modifiedImg.style.animation = 'none';
            }, { once: true });
        }

        setupEventListeners() {
            // Drag start
            this.element.addEventListener('dragStart', (event) => {
                if (event.detail.origin.closest('.js-compare-slider__handle')) {
                    this.element.classList.add('compare-slider--is-dragging');
                    
                    if (!this.dragStart) {
                        this.dragStart = event.detail.x;
                    }
                }
            });
            
            // Drag end
            this.element.addEventListener('dragEnd', (event) => {
                if (this.dragStart !== false) {
                    this.element.classList.remove('compare-slider--is-dragging');
                    this.dragStart = false;
                }
            });
            
            // Dragging (continuous movement)
            this.element.addEventListener('dragging', (event) => {
                this.handleMove(event);
            });
            
            // Mouse move (fallback for older logic)
            this.element.addEventListener('mousemove', (event) => {
                this.handleMove(event);
            });
            
            // Touch move (fallback for older logic)
            this.element.addEventListener('touchmove', (event) => {
                this.handleMove(event);
            });
            
            // Mouse leave
            this.element.addEventListener('mouseleave', (event) => {
                this.handleBoundary(event);
            });
            
            // Touch end
            this.element.addEventListener('touchend', (event) => {
                this.handleBoundary(event);
            });
            
            // Keyboard navigation
            this.keyboardHandle.addEventListener('change', () => {
                this.leftPosition = Number(this.keyboardHandle.value);
                this.updatePosition(0);
            });
        }

        handleMove(event) {
            if (!this.dragStart) return;
            
            const x = event.detail ? event.detail.x : (event.pageX || (event.touches && event.touches[0].pageX));
            
            if (!this.animating && Math.abs(x - this.dragStart) >= 5) {
                this.animating = true;
                this.updatePosition(x - this.dragStart);
                this.dragStart = x;
            }
        }

        handleBoundary(event) {
            if (!this.dragStart) return;
            
            if (event.pageX < this.element.offsetLeft) {
                this.leftPosition = 0;
                this.updatePosition(0);
            }
            
            if (event.pageX > this.element.offsetLeft + this.element.offsetWidth) {
                this.leftPosition = 100;
                this.updatePosition(0);
            }
        }

        updatePosition(delta) {
            const percentage = (100 * delta) / this.sliderWidth;
            
            if (!isNaN(percentage)) {
                this.leftPosition = Number((this.leftPosition + percentage).toFixed(2));
                this.leftPosition = Math.max(0, Math.min(100, this.leftPosition));
                
                this.keyboardHandle.value = this.leftPosition;
                this.handle.style.left = this.leftPosition + '%';
                this.modifiedImg.style.width = this.leftPosition + '%';
                
                this.updateCaptions();
            }
            
            this.animating = false;
        }

        updateCaptions() {
            for (let i = 0; i < this.captions.length; i++) {
                const offset = i === 0 ?
                    this.captions[i].offsetLeft - this.modifiedImg.offsetLeft - this.modifiedImg.offsetWidth :
                    this.modifiedImg.offsetLeft + this.modifiedImg.offsetWidth - this.captions[i].offsetLeft - this.captions[i].offsetWidth;
                
                this.captions[i].classList.toggle('compare-slider__caption--hide', offset < 10);
            }
        }

        getSliderWidth() {
            return this.element.offsetWidth;
        }
    }

    /**
     * Initialize all sliders on the page
     */
    function initSliders() {
        const sliders = document.getElementsByClassName('js-compare-slider');
        
        for (let i = 0; i < sliders.length; i++) {
            new ComparisonSlider(sliders[i]);
        }
    }

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSliders);
    } else {
        initSliders();
    }

    // Expose to global scope
    window.ComparisonSlider = ComparisonSlider;
    window.SwipeContent = SwipeContent;

})();